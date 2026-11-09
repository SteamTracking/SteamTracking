import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./mobx.esm.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./src.js";
import { _, _, _, _, _, _, _, _ } from "./react-router.js";
function _() {
  return !1;
}
var _ = (function (_) {
  return (
    (_[(_.EBrowserType_OffScreen = 0)] = `EBrowserType_OffScreen`),
    (_[(_.EBrowserType_OpenVROverlay = 1)] = `EBrowserType_OpenVROverlay`),
    (_[(_.EBrowserType_OpenVROverlay_Dashboard = 2)] =
      `EBrowserType_OpenVROverlay_Dashboard`),
    (_[(_.EBrowserType_DirectHWND = 3)] = `EBrowserType_DirectHWND`),
    (_[(_.EBrowserType_DirectHWND_Borderless = 4)] =
      `EBrowserType_DirectHWND_Borderless`),
    (_[(_.EBrowserType_ChildHWNDNative = 6)] = `EBrowserType_ChildHWNDNative`),
    (_[(_.EBrowserType_Offscreen_SteamUI = 12)] =
      `EBrowserType_Offscreen_SteamUI`),
    (_[(_.EBrowserType_OpenVROverlay_Subview = 13)] =
      `EBrowserType_OpenVROverlay_Subview`),
    _
  );
})({});
function _(_) {
  return (
    _ == _.EBrowserType_OpenVROverlay ||
    _ == _.EBrowserType_OpenVROverlay_Dashboard ||
    _ == _.EBrowserType_OpenVROverlay_Subview
  );
}
var _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.ButtonEnter = 1)] = `ButtonEnter`),
      (_[(_.ButtonLeave = 2)] = `ButtonLeave`),
      (_[(_.Snap = 3)] = `Snap`),
      (_[(_.Sliding = 4)] = `Sliding`),
      (_[(_.SlidingEdge = 5)] = `SlidingEdge`),
      _
    );
  })({}),
  _ = {
    PerYear: 31536e3,
    PerMonth: 2628e3,
    PerWeek: 604800,
    PerDay: 86400,
    PerHour: 3600,
    PerMinute: 60,
  };
function _(_, _) {
  return _.getFullYear() == _.getFullYear();
}
function _(_) {
  return new Date(_.getFullYear(), _.getMonth(), _.getDate(), 0, 0, 0, 0);
}
function _(_) {
  return new Promise((_) => setTimeout(_, _));
}
function _() {
  return Math.floor(Date.now() / 1e3);
}
function _(_) {
  return Math.floor(_.getTime() / 1e3);
}
var _ = (function () {
    let _ = typeof document < `u` && document.createElement(`link`).relList;
    return _ && _.supports && _.supports(`modulepreload`)
      ? `modulepreload`
      : `preload`;
  })(),
  _ = function (_, _) {
    return new URL(_, _).href;
  },
  _ = {},
  _ = function (_) {
    return _.pathname.endsWith(`.css`);
  },
  _ = function (_, _, _) {
    if (_ in _) return _[_];
    let _ = _();
    if (!_) {
      _[_] = void 0;
      return;
    }
    let _ = _.then(
      () => {
        _[_] = void 0;
      },
      (_) => {
        throw ((_[_] = void 0), _);
      },
    );
    return ((_[_] = _), _);
  },
  _ = function (_, _, _) {
    let _ = Promise.resolve();
    if (_ && _.length > 0) {
      let _,
        _ = document.querySelector(`meta[property=csp-nonce]`),
        _ = _?.nonce || _?.getAttribute(`nonce`);
      function _(_) {
        return Promise.all(
          _.map((_) =>
            Promise.resolve(_).then(
              (_) => ({
                status: `fulfilled`,
                value: _,
              }),
              (_) => ({
                status: `rejected`,
                reason: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        return import.meta.resolve
          ? new URL(import.meta.resolve(_))
          : new URL(_, import.meta.url);
      }
      _ = _(
        _.map((_) => {
          _ = _(_, _);
          let _ = _(_),
            _ = _(_);
          return _(_, _.href, () => {
            if (_ === void 0) {
              _ = {
                all: new Set(),
                styles: new Set(),
              };
              let _ = document.getElementsByTagName(`link`);
              for (let _ = _.length - 1; _ >= 0; _--) {
                let _ = _[_];
                (_.all.add(_.href),
                  _.rel === `stylesheet` && _.styles.add(_.href));
              }
            }
            if ((_ ? _.styles : _.all).has(_.href)) return;
            let _ = document.createElement(`link`);
            if (
              ((_.rel = _ ? `stylesheet` : _),
              _ || (_._ = `script`),
              (_.crossOrigin = ``),
              (_.href = _.href),
              _ && _.setAttribute(`nonce`, _),
              document.head.appendChild(_),
              _)
            )
              return new Promise((_, _) => {
                (_.addEventListener(`load`, _),
                  _.addEventListener(`error`, () =>
                    _(Error(`Unable to preload CSS for ${_}`)),
                  ));
              });
          });
        }).filter((_) => _ !== void 0),
      );
    }
    function _(_) {
      let _ = new Event(`vite:preloadError`, {
        cancelable: !0,
      });
      if (((_.payload = _), window.dispatchEvent(_), !_.defaultPrevented))
        throw _;
    }
    return _.then((_) => {
      for (let _ of _ || []) _.status === `rejected` && _(_.reason);
      return _().catch(_);
    });
  },
  _ = _(_(), 1);
function _(_, _, _, _) {
  _.useEffect(() => {
    let _ = _ && `current` in _ ? _.current : _;
    if (_ && _)
      return (_.addEventListener(_, _, _), () => _.removeEventListener(_, _));
  }, [_, _, _]);
}
function _(_, _, _) {
  return _(
    (_) => {
      if (_ && _)
        return (_.addEventListener(_, _, _), () => _.removeEventListener(_, _));
    },
    [_, _],
  );
}
function _(_, _, _, _) {
  _.useEffect(() => {
    if (_ && _)
      return (
        _.addEventListener(_, _, _), () => _.removeEventListener(_, _, _)
      );
  }, [_, _, _]);
}
function _(_, _, _, _) {
  return _(
    _,
    `message`,
    _.useCallback(
      function (_) {
        _.data === _ && _(_, _);
      },
      [_, _, _],
    ),
    _,
  );
}
function _() {
  let [_, _] = _.useState(!1);
  return [
    _,
    {
      onPointerEnter: _.useCallback((_) => {
        (_ && `pointerType` in _ && _.pointerType !== `mouse`) || _(!0);
      }, []),
      onPointerLeave: _.useCallback(
        () =>
          window.sessionStorage &&
          window.sessionStorage.getItem(`DEBUG_StickyHovers`) != `true` &&
          _(!1),
        [],
      ),
    },
  ];
}
function _(_) {
  let [_, _] = _.useState(!1);
  return (
    _.useEffect(() => {
      if (!_.current) return;
      let _ = !1,
        _ = (_) => {
          let _ = _.current?.contains(_.target);
          (_(!!_),
            _ || (window.removeEventListener(`pointermove`, _), (_ = !1)));
        },
        _ = () => {
          (_(!0), (_ ||= (window.addEventListener(`pointermove`, _), !0)));
        };
      return (
        _.current.addEventListener(`pointerenter`, _),
        () => {
          (window.removeEventListener(`pointerenter`, _),
            _ && window.removeEventListener(`pointermove`, _));
        }
      );
    }, [_]),
    _
  );
}
function _(_) {
  let _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _ &&
        _.current &&
        _.current.focus({
          preventScroll: !0,
        });
    }, [_, _]),
    _
  );
}
var _ = `_-5HDHEcJvzI-`,
  _ = `bXqaBMkoZYQ-`,
  _ = _(_(), 1),
  _ = _(),
  _ = new _(`FocusNavigation`).Debug;
function _(_) {
  let { children: _, disableFocusRing: _, ..._ } = _,
    [_, _] = _.useState({
      bFocusWithin: !1,
      navTarget: null,
      prevTarget: null,
    }),
    _ = _.useRef(null),
    _ = _.useMemo(
      () => ({
        OnBlur: (_, _, _) => {
          _({
            bFocusWithin: !1,
            navTarget: null,
            prevTarget: null,
          });
        },
        OnFocus: (_, _, _) => {
          _({
            bFocusWithin: !0,
            navTarget: _,
            prevTarget: null,
          });
        },
        OnFocusChange: (_, _, _) => {
          _({
            bFocusWithin: !0,
            navTarget: _,
            prevTarget: _,
          });
        },
        OnForceMeasureFocusRing: () => {
          _.current?.MeasureElementAndUpdate();
        },
      }),
      [_],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          ..._,
          ..._,
          refMeasure: _,
        }),
      (0, _.jsx)(_.Provider, {
        value: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
      rootClassName: _,
      className: _,
      bFocusWithin: _,
      navTarget: _,
      refMeasure: _,
    } = _,
    [_, _] = _.useState(null),
    _ = _(),
    _ = _(),
    _ = _(!1);
  return !_ && !_
    ? null
    : (0, _.jsx)(`div`, {
        className: (0, _.default)(_, _),
        ref: _,
        children: (0, _.jsx)(_, {
          refMeasure: _,
          className: (0, _.default)(_, _ && `_-1XKPob6-3c-`),
          bFocusWithin: _ && (_ || _),
          navTarget: _,
          elContainer: _,
          bDebug: _,
        }),
      });
}
function _(_, _) {
  return (
    _.left == _.left &&
    _.top == _.top &&
    _.height == _.height &&
    _.width == _.width &&
    _.borderRadius?.borderTopLeftRadius ==
      _.borderRadius?.borderTopLeftRadius &&
    _.borderRadius?.borderTopRightRadius ==
      _.borderRadius?.borderTopRightRadius &&
    _.borderRadius?.borderBottomRightRadius ==
      _.borderRadius?.borderBottomRightRadius &&
    _.borderRadius?.borderBottomLeftRadius ==
      _.borderRadius?.borderBottomLeftRadius
  );
}
function _(_) {
  let {
      className: _,
      bFocusWithin: _,
      navTarget: _,
      elContainer: _,
      bDebug: _,
      refMeasure: _,
    } = _,
    [_, _] = _.useState(null),
    [_, _] = _.useReducer((_) => _ + 1, 0),
    [_, _] = _.useReducer((_) => _ + 1, 0);
  _(
    _,
    _.useMemo(
      () => ({
        MeasureElementAndUpdate: _,
      }),
      [],
    ),
  );
  let { bActiveTree: _, bDisableFocusClasses: _ } = _(),
    _ = _ && !_,
    _ = _(_, _),
    _ = _.useCallback(() => {
      if (!_ || !_.BWantsFocusRing() || !_ || !_) {
        _(null);
        return;
      }
      let _ = _.GetBoundingRectForFocusRing(),
        _ = _.getBoundingClientRect(),
        _ = _.GetBorderRadiusForFocusRing(),
        _ = {
          left: _._ - _._,
          top: _._ - _._,
          height: _.height,
          width: _.width,
          borderRadius: _,
        };
      _((_) => (!_ || !_(_, _) ? _ : _));
    }, [_, _, _]);
  (_.useLayoutEffect(() => _(), [_]),
    _.useLayoutEffect(() => {
      _();
    }, [_]));
  let _ = _;
  return (
    _ && _ && (_.BWantsFocusRing() || (_ = !1)),
    _.useEffect(() => {
      if (!_) return;
      let _ = performance.now(),
        _,
        _ = () => {
          (_(), performance.now() - _ <= 500 && (_ = requestAnimationFrame(_)));
        };
      return (_(), () => cancelAnimationFrame(_));
    }, [_, _, _, _]),
    !_ || !_
      ? null
      : (0, _.createElement)(_, {
          ..._,
          key: _,
          className: (0, _.default)(_, _ && `CNmM8EjeTxQ-`),
          target: _,
        })
  );
}
function _(_) {
  let {
      className: _,
      left: _,
      top: _,
      height: _,
      width: _,
      borderRadius: _,
      target: _,
    } = _,
    _ = {
      left: (_ ?? 0) - 0 + `px`,
      top: (_ ?? 0) - 0 + `px`,
      height: _ + `px`,
      width: _ + `px`,
      ..._,
    };
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _),
    style: _,
  });
}
function _(_, _) {
  let [_, _] = _.useState(!1);
  return (
    (0, _.useEffect)(() => {
      if (_ && _) {
        let _ = _.GetBoundingRectForFocusRing(),
          _ = _.Element,
          _ = _.ownerDocument.defaultView,
          _ = (_) =>
            _.getComputedStyle(_).display == `none` ||
            (_?.width == 0 && _.height == 0 && _._ == 0 && _._ == 0);
        for (; _(_) && _?.parentElement;)
          ((_ = _.parentElement), (_ = _.getBoundingClientRect()));
        let _ = _.Element != _;
        _(
          (_) => (
            _ &&
              _ != _ &&
              _(
                `Focused on hidden item: `,
                _.Element,
                `. Closest visible ancestor: `,
                _,
              ),
            _
          ),
        );
      }
    }, [_, _]),
    _
  );
}
var _ = _.createContext({
  Component: _,
});
function _(_) {
  let {
      "flow-children": _,
      onActivate: _,
      onCancel: _,
      focusClassName: _,
      focusWithinClassName: _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_),
    _ = {},
    _ = _(_);
  (_ != _.NONE && (_.layout = _),
    _ && ((_.onClick = _.onClick || _), (_.onOKButton = _.onOKButton || _)),
    _.onOKButton &&
      _.focusable === void 0 &&
      _.focusableIfEmpty === void 0 &&
      (_.focusable = !0),
    _ && (_.onCancelButton = _.onCancelButton || _));
  let { ref: _, node: _ } = _({
      ..._,
      ..._,
    }),
    _ = _();
  ((_.className = (0, _.default)(_.className, `Panel`, _ && `Focusable`)),
    _(_, _));
  let _ = _(_),
    _ = _(_, _.ref, _);
  ((!_.focusable && !_.focusableIfEmpty) ||
    (_ && _.Tree.BUseVirtualFocus()) ||
    (_.tabIndex = _.tabIndex || 0),
    _.focusable && (_ || _.onOKButton) && (_.role ??= `button`));
  let _ = (0, _.useContext)(_).Component;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _
      ? (0, _.jsx)(_, {
          ..._,
          divRef: _,
          node: _,
          focusClassName: (0, _.default)(_, `gpfocus`),
          focusWithinClassName: (0, _.default)(_, `gpfocuswithin`),
        })
      : (0, _.jsx)(`div`, {
          ..._,
          ref: _,
        }),
  });
}
var _ = {};
((_.arabic = () => _(() => import(`./shared_arabic.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./shared_brazilian.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./shared_bulgarian.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./shared_czech.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./shared_danish.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./shared_dutch.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./shared_english.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./shared_finnish.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./shared_french.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./shared_german.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./shared_greek.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./shared_hungarian.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./shared_indonesian.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./shared_italian.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./shared_japanese.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./shared_koreana.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./shared_latam.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./shared_malay.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./shared_norwegian.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./shared_polish.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./shared_portuguese.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./shared_romanian.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./shared_russian.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./shared_sc_schinese.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./shared_schinese.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./shared_spanish.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./shared_swedish.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./shared_tchinese.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./shared_thai.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./shared_turkish.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./shared_ukrainian.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./shared_vietnamese.js`), [], import.meta.url)));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = function () {};
function _(_) {
  throw Error(`[mobx-utils] ` + _);
}
function _(_, _) {
  (_ === void 0 && (_ = `Illegal state`), _ || _(_));
}
var _ = function (_) {
    return (
      _ &&
      _ !== Object.prototype &&
      Object.getOwnPropertyNames(_).concat(_(Object.getPrototypeOf(_)) || [])
    );
  },
  _ = function (_) {
    var _ = _(_);
    return _.filter(function (_, _) {
      return _.indexOf(_) === _;
    });
  },
  _ = function (_) {
    return _(_).filter(function (_) {
      return _ !== `constructor` && !~_.indexOf(`__`);
    });
  },
  _ = `pending`,
  _ = `fulfilled`,
  _ = `rejected`;
function _(_) {
  switch (this.state) {
    case _:
      return _.pending && _.pending(this.value);
    case _:
      return _.rejected && _.rejected(this.value);
    case _:
      return _.fulfilled ? _.fulfilled(this.value) : this.value;
  }
}
function _(_, _) {
  if (
    (_(arguments.length <= 2, `fromPromise expects up to two arguments`),
    _(
      typeof _ == `function` ||
        (typeof _ == `object` && _ && typeof _.then == `function`),
      `Please pass a promise or function to fromPromise`,
    ),
    _.isPromiseBasedObservable === !0)
  )
    return _;
  typeof _ == `function` && (_ = new Promise(_));
  var _ = _;
  (_.then(
    _(`observableFromPromise-resolve`, function (_) {
      ((_.value = _), (_.state = _));
    }),
    _(`observableFromPromise-reject`, function (_) {
      ((_.value = _), (_.state = _));
    }),
  ),
    (_.isPromiseBasedObservable = !0),
    (_.case = _));
  var _ =
    _ && (_.state === `fulfilled` || _.state === `pending`) ? _.value : void 0;
  return (
    _(
      _,
      {
        value: _,
        state: _,
      },
      {},
      {
        deep: !1,
      },
    ),
    _
  );
}
(function (_) {
  _.reject = _(`fromPromise.reject`, function (_) {
    var _ = _(Promise.reject(_));
    return ((_.state = _), (_.value = _), _);
  });
  function _(_) {
    _ === void 0 && (_ = void 0);
    var _ = _(Promise.resolve(_));
    return ((_.state = _), (_.value = _), _);
  }
  _.resolve = _(`fromPromise.resolve`, _);
})((_ ||= {}));
function _(_, _, _) {
  (_ === void 0 && (_ = _), _ === void 0 && (_ = void 0));
  var _ = !1,
    _ = !1,
    _ = _,
    _ = function () {
      _ && ((_ = !1), _());
    },
    _ = _(
      `ResourceBasedObservable`,
      function () {
        (_(!_ && !_),
          (_ = !0),
          _(function (_) {
            _(!0, function () {
              ((_ = _), _.reportChanged());
            });
          }));
      },
      _,
    );
  return {
    current: function () {
      return (
        _(!_, `subscribingObservable has already been disposed`),
        !_.reportObserved() &&
          !_ &&
          console.warn(
            "Called `get` of a subscribingObservable outside a reaction. Current value will be returned but no new subscription has started",
          ),
        _
      );
    },
    dispose: function () {
      ((_ = !0), _());
    },
    isAlive: function () {
      return _;
    },
  };
}
var _ = function (_, _, _, _) {
  var _ = arguments.length,
    _ =
      _ < 3 ? _ : _ === null ? (_ = Object.getOwnPropertyDescriptor(_, _)) : _,
    _;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    _ = Reflect.decorate(_, _, _, _);
  else
    for (var _ = _.length - 1; _ >= 0; _--)
      (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
  return (_ > 3 && _ && Object.defineProperty(_, _, _), _);
};
(function () {
  function _(_, _) {
    var _ = this;
    (Object.defineProperty(this, "current", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0,
    }),
      Object.defineProperty(this, "subscription", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      _(this),
      _(function () {
        ((_.current = _), (_.subscription = _.subscribe(_)));
      }));
  }
  return (
    Object.defineProperty(_.prototype, "dispose", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this.subscription && this.subscription.unsubscribe();
      },
    }),
    Object.defineProperty(_.prototype, "next", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        this.current = _;
      },
    }),
    Object.defineProperty(_.prototype, "complete", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this.dispose();
      },
    }),
    Object.defineProperty(_.prototype, "error", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        ((this.current = _), this.dispose());
      },
    }),
    _([_.ref], _.prototype, `current`, void 0),
    _([_.bound], _.prototype, `next`, null),
    _([_.bound], _.prototype, `complete`, null),
    _([_.bound], _.prototype, `error`, null),
    _
  );
})();
var _ = function () {
    return (
      (_ =
        Object.assign ||
        function (_) {
          for (var _, _ = 1, _ = arguments.length; _ < _; _++)
            for (var _ in ((_ = arguments[_]), _))
              Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
          return _;
        }),
      _.apply(this, arguments)
    );
  },
  _ = function (_, _, _, _) {
    var _ = arguments.length,
      _ =
        _ < 3
          ? _
          : _ === null
            ? (_ = Object.getOwnPropertyDescriptor(_, _))
            : _,
      _;
    if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
      _ = Reflect.decorate(_, _, _, _);
    else
      for (var _ = _.length - 1; _ >= 0; _--)
        (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
    return (_ > 3 && _ && Object.defineProperty(_, _, _), _);
  },
  _ = [
    `model`,
    `reset`,
    `submit`,
    `isDirty`,
    `isPropertyDirty`,
    `resetProperty`,
  ];
(function () {
  function _(_) {
    var _ = this;
    (Object.defineProperty(this, "model", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: _,
    }),
      Object.defineProperty(this, "localValues", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _.map({}),
      }),
      Object.defineProperty(this, "localComputedValues", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _.map({}),
      }),
      Object.defineProperty(this, "isPropertyDirty", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function (_) {
          return _.localValues.has(_);
        },
      }),
      _(this),
      _(_(_), `createViewModel expects an observable object`));
    var _ = _(this);
    _(_).forEach(function (_) {
      if (!_.includes(_) && _ !== _ && _ !== `__mobxDidRunLazyInitializers`) {
        if (
          (_(
            _.indexOf(_) === -1,
            `The propertyname ` +
              _ +
              ` is reserved and cannot be used with viewModels`,
          ),
          _(_, _))
        ) {
          var _ = _(_, _),
            _ = _.derivation.bind(_),
            _ = _.setter_?.bind(_);
          _.localComputedValues.set(
            _,
            _(_, {
              set: _,
            }),
          );
        }
        var _ = Object.getOwnPropertyDescriptor(_, _),
          _ = _
            ? {
                enumerable: _.enumerable,
              }
            : {};
        Object.defineProperty(
          _,
          _,
          _(_({}, _), {
            configurable: !0,
            get: function () {
              return _(_, _)
                ? _.localComputedValues.get(_).get()
                : _.isPropertyDirty(_)
                  ? _.localValues.get(_)
                  : _.model[_];
            },
            set: _(function (_) {
              _(_, _)
                ? _.localComputedValues.get(_).set(_)
                : _ === _.model[_]
                  ? _.localValues.delete(_)
                  : _.localValues.set(_, _);
            }),
          }),
        );
      }
    });
  }
  return (
    Object.defineProperty(_.prototype, "isDirty", {
      get: function () {
        return this.localValues.size > 0;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(_.prototype, "changedValues", {
      get: function () {
        return new Map(this.localValues);
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(_.prototype, "submit", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        var _ = this;
        (_(this.localValues).forEach(function (_) {
          var _ = _.localValues.get(_),
            _ = _.model[_];
          _(_)
            ? _.replace(_)
            : _(_)
              ? (_.clear(), _.merge(_))
              : _(_) || (_.model[_] = _);
        }),
          this.localValues.clear());
      },
    }),
    Object.defineProperty(_.prototype, "reset", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this.localValues.clear();
      },
    }),
    Object.defineProperty(_.prototype, "resetProperty", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        this.localValues.delete(_);
      },
    }),
    _([_], _.prototype, `isDirty`, null),
    _([_], _.prototype, `changedValues`, null),
    _([_.bound], _.prototype, `submit`, null),
    _([_.bound], _.prototype, `reset`, null),
    _([_.bound], _.prototype, `resetProperty`, null),
    _
  );
})();
var _ = {};
function _(_) {
  return (
    _ === void 0 && (_ = 1e3),
    _()
      ? (_[_] || (typeof _ == `number` ? (_[_] = _(_)) : (_[_] = _())),
        _[_].current())
      : Date.now()
  );
}
function _(_) {
  var _;
  return _(
    function (_) {
      (_(Date.now()),
        (_ = setInterval(function () {
          return _(Date.now());
        }, _)));
    },
    function () {
      clearInterval(_);
    },
    Date.now(),
  );
}
function _() {
  var _ = _(
    function (_) {
      _(Date.now());
      function _() {
        window.requestAnimationFrame(function () {
          (_(Date.now()), _.isAlive() && _());
        });
      }
      _();
    },
    function () {},
    Date.now(),
  );
  return _;
}
var _ = (function () {
  var _ = function (_, _) {
    return (
      (_ =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (_, _) {
            _.__proto__ = _;
          }) ||
        function (_, _) {
          for (var _ in _)
            Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
        }),
      _(_, _)
    );
  };
  return function (_, _) {
    _(_, _);
    function _() {
      this.constructor = _;
    }
    _.prototype =
      _ === null ? Object.create(_) : ((_.prototype = _.prototype), new _());
  };
})();
(function (_) {
  _(_, _);
  function _(_, _, _) {
    var _ = _ === void 0 ? {} : _,
      _ = _.name,
      _ = _ === void 0 ? `ogm` + ((Math.random() * 1e3) | 0) : _,
      _ = _.keyToName,
      _ =
        _ === void 0
          ? function (_) {
              return `` + _;
            }
          : _,
      _ = _.call(this) || this;
    (Object.defineProperty(_, "_base", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0,
    }),
      Object.defineProperty(_, "_ogmInfoKey", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(_, "_groupBy", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(_, "_keyToName", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(_, "_disposeBaseObserver", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (_._keyToName = _),
      (_._groupBy = _),
      (_._ogmInfoKey = Symbol(`ogmInfo` + _)),
      (_._base = _));
    for (var _ = 0; _ < _.length; _++) _._addItem(_[_]);
    return (
      (_._disposeBaseObserver = _(_._base, function (_) {
        if (_.type === `splice`)
          _(function () {
            for (var _ = 0, _ = _.removed; _ < _.length; _++) {
              var _ = _[_];
              _._removeItem(_);
            }
            for (var _ = 0, _ = _.added; _ < _.length; _++) {
              var _ = _[_];
              _._addItem(_);
            }
          });
        else if (_.type === `update`)
          _(function () {
            (_._removeItem(_.oldValue), _._addItem(_.newValue));
          });
        else throw Error(`illegal state`);
      })),
      _
    );
  }
  return (
    Object.defineProperty(_.prototype, "clear", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        throw Error(`not supported`);
      },
    }),
    Object.defineProperty(_.prototype, "delete", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        throw Error(`not supported`);
      },
    }),
    Object.defineProperty(_.prototype, "set", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_, _) {
        throw Error(`not supported`);
      },
    }),
    Object.defineProperty(_.prototype, "dispose", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this._disposeBaseObserver();
        for (var _ = 0; _ < this._base.length; _++) {
          var _ = this._base[_];
          (_[this._ogmInfoKey].reaction(), delete _[this._ogmInfoKey]);
        }
      },
    }),
    Object.defineProperty(_.prototype, "_getGroupArr", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        var _ = _.prototype.get.call(this, _);
        return (
          _ === void 0 &&
            ((_ = _([], {
              name: `GroupArray[` + this._keyToName(_) + `]`,
              deep: !1,
            })),
            _.prototype.set.call(this, _, _)),
          _
        );
      },
    }),
    Object.defineProperty(_.prototype, "_removeFromGroupArr", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_, _) {
        var _ = _.prototype.get.call(this, _);
        _.length === 1
          ? _.prototype.delete.call(this, _)
          : (_ === _.length - 1 ||
              ((_[_] = _[_.length - 1]),
              (_[_][this._ogmInfoKey].groupArrIndex = _)),
            _.length--);
      },
    }),
    Object.defineProperty(_.prototype, "_addItem", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        var _ = this,
          _ = this._groupBy(_),
          _ = this._getGroupArr(_),
          _ = {
            groupByValue: _,
            groupArrIndex: _.length,
            reaction: _(
              function () {
                return _._groupBy(_);
              },
              function (_, _) {
                var _ = _[_._ogmInfoKey];
                _._removeFromGroupArr(_.groupByValue, _.groupArrIndex);
                var _ = _._getGroupArr(_),
                  _ = _.length;
                (_.push(_), (_.groupByValue = _), (_.groupArrIndex = _));
              },
            ),
          };
        (Object.defineProperty(_, this._ogmInfoKey, {
          configurable: !0,
          enumerable: !1,
          value: _,
        }),
          _.push(_));
      },
    }),
    Object.defineProperty(_.prototype, "_removeItem", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        var _ = _[this._ogmInfoKey];
        (this._removeFromGroupArr(_.groupByValue, _.groupArrIndex),
          _.reaction(),
          delete _[this._ogmInfoKey]);
      },
    }),
    _
  );
})(_);
var _ = (function () {
  function _(_, _) {
    (Object.defineProperty(this, "base", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: _,
    }),
      Object.defineProperty(this, "args", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
      Object.defineProperty(this, "root", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "closest", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      Object.defineProperty(this, "closestIdx", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0,
      }),
      Object.defineProperty(this, "isDisposed", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1,
      }));
    for (
      var _ = (this.closest = this.root = _), _ = 0;
      _ < this.args.length - 1 && ((_ = _.get(_[_])), _);
      _++
    )
      this.closest = _;
    this.closestIdx = _;
  }
  return (
    Object.defineProperty(_.prototype, "exists", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        this.assertNotDisposed();
        var _ = this.args.length;
        return this.closestIdx >= _ - 1 && this.closest.has(this.args[_ - 1]);
      },
    }),
    Object.defineProperty(_.prototype, "get", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        if ((this.assertNotDisposed(), !this.exists()))
          throw Error(`Entry doesn't exist`);
        return this.closest.get(this.args[this.args.length - 1]);
      },
    }),
    Object.defineProperty(_.prototype, "set", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        this.assertNotDisposed();
        for (
          var _ = this.args.length, _ = this.closest, _ = this.closestIdx;
          _ < _ - 1;
          _++
        ) {
          var _ = new Map();
          (_.set(this.args[_], _), (_ = _));
        }
        ((this.closestIdx = _ - 1),
          (this.closest = _),
          _.set(this.args[_ - 1], _));
      },
    }),
    Object.defineProperty(_.prototype, "delete", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        if ((this.assertNotDisposed(), !this.exists()))
          throw Error(`Entry doesn't exist`);
        var _ = this.args.length;
        this.closest.delete(this.args[_ - 1]);
        for (var _ = this.root, _ = [_], _ = 0; _ < _ - 1; _++)
          ((_ = _.get(this.args[_])), _.push(_));
        for (var _ = _.length - 1; _ > 0; _--)
          _[_].size === 0 && _[_ - 1].delete(this.args[_ - 1]);
        this.isDisposed = !0;
      },
    }),
    Object.defineProperty(_.prototype, "assertNotDisposed", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function () {
        if (this.isDisposed) throw Error(`Concurrent modification exception`);
      },
    }),
    _
  );
})();
(function () {
  function _() {
    (Object.defineProperty(this, "store", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: new Map(),
    }),
      Object.defineProperty(this, "argsLength", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -1,
      }),
      Object.defineProperty(this, "last", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }));
  }
  return (
    Object.defineProperty(_.prototype, "entry", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function (_) {
        if (this.argsLength === -1) this.argsLength = _.length;
        else if (this.argsLength !== _.length)
          throw Error(
            `DeepMap should be used with functions with a consistent length, expected: ` +
              this.argsLength +
              `, got: ` +
              _.length,
          );
        return (
          this.last && (this.last.isDisposed = !0),
          (this.last = new _(this.store, _))
        );
      },
    }),
    _
  );
})();
var _ = 2147483647;
function _(_, _) {
  return _(Date.now() / 1e3 - _, _);
}
function _(_, _, _) {
  let _;
  _ =
    typeof _ == `boolean`
      ? {
          eSuffix: +!_,
          bForceSingleUnits: _,
          bHighGranularity: !1,
        }
      : {
          eSuffix: 1,
          bForceSingleUnits: !1,
          bHighGranularity: !1,
          ..._,
        };
  let _ = `#TimeInterval_`;
  _.eSuffix == 1
    ? (_ = `#TimeSince_`)
    : _.eSuffix == 2 && (_ = `#TimeRemaining_`);
  let _ = (_) => Math.floor(_);
  if (
    (_.bAllowDecimal && (_ = (_) => Math.round(_ * 10) / 10),
    _ >= _.PerYear * 2)
  )
    return _(_ + `XYears`, _(_ / _.PerYear));
  if (_ >= _.PerYear)
    return (
      (_ -= _.PerYear),
      _ >= _.PerMonth * 2 && !_.bForceSingleUnits
        ? _(_ + `1YearXMonths`, _(_ / _.PerMonth))
        : _(_ + `1Year`)
    );
  if (_ >= _.PerMonth * 2) return _(_ + `XMonths`, _(_ / _.PerMonth));
  if (_ >= _.PerWeek * 2) return _(_ + `XWeeks`, _(_ / _.PerWeek));
  if (_ >= _.PerWeek) return _(_ + `1Week`, _(_ / _.PerWeek));
  if (_ >= _.PerDay * 2) return _(_ + `XDays`, _(_ / _.PerDay));
  if (_ >= _.PerDay)
    return (
      (_ -= _.PerDay),
      _ >= _.PerHour * 2 && !_.bForceSingleUnits
        ? _(_ + `1DayXHours`, _(_ / _.PerHour))
        : _(_ + `1Day`)
    );
  if (_ >= _.PerHour * 2) return _(_ + `XHours`, _(_ / _.PerHour));
  if (_ >= _.PerHour)
    return (
      (_ -= _.PerHour),
      _ >= _.PerMinute * 2 && !_.bForceSingleUnits
        ? _(_ + `1HourXMinutes`, _(_ / _.PerMinute))
        : _(_ + `1Hour`)
    );
  if (_ >= _.PerMinute * 2) {
    let _ = Math.floor(_ / _.PerMinute),
      _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _(_ + `XMinutes`, _(_ / _.PerMinute))
      : _ == 1
        ? _(_ + `XMinutes1Second`, _)
        : _(_ + `XMinutesXSeconds`, _, _);
  }
  if (_ >= _.PerMinute) {
    let _ = _ % _.PerMinute;
    return !_.bHighGranularity || _ == 0
      ? _(_ + `1Minute`)
      : _ == 1
        ? _(_ + `1Minute1Second`)
        : _(_ + `1MinuteXSeconds`, _);
  }
  return _.bHighGranularity
    ? _ == 1
      ? _(_ + `1Second`)
      : _(_ + `XSeconds`, _)
    : _(_ + `LessThanAMinute`);
}
function _(_, _, _) {
  let _;
  _ =
    _ === void 0 || _ === !0 || _ === !1
      ? {
          weekday: _ ? `long` : `short`,
          year: _ ? void 0 : `numeric`,
        }
      : _;
  let _ = new Date(_ * 1e3),
    _ = {
      weekday: `short`,
      month: `long`,
      day: `numeric`,
      year: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_.GetPreferredLocales(), _);
}
function _(_, _, _ = !1) {
  let _ = new Date(_ * 1e3),
    _ = new Date(_ * 1e3);
  return !_ &&
    (_.getFullYear() != _.getFullYear() ||
      _.getMonth() != _.getMonth() ||
      _.getDate() != _.getDate())
    ? _(_, _)
    : _(_) + ` - ` + _(_);
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = new Date(_ * 1e3),
    _ = new Date();
  if (
    _.getFullYear() != _.getFullYear() ||
    _.getFullYear() != _.getFullYear() ||
    _
  )
    return `${_(_)} - ${_(_)}`;
  let _ = {
      month: `short`,
      day: `numeric`,
    },
    _ = _.toLocaleDateString(_.GetPreferredLocales(), _) + ` - `;
  return _.getMonth() == _.getMonth()
    ? _ +
        _.toLocaleDateString(_.GetPreferredLocales(), {
          day: `numeric`,
        })
    : _ + _.toLocaleDateString(_.GetPreferredLocales(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_.GetPreferredLocales(), _);
}
function _(_) {
  return _(new Date(_ * 1e3));
}
var _ = new Map();
function _(_) {
  let _ = _.get(_);
  if (_ === !0 || _ === !1) return _;
  let _ = new Date();
  return (
    _.setHours(15),
    (_ =
      _.toLocaleTimeString(_, {
        hour: `numeric`,
      }) ==
      _.toLocaleTimeString(_, {
        hour: `numeric`,
        hour12: !1,
      })),
    _.set(_, _),
    _
  );
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
      hourCycle: `h23`,
    },
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
    },
    _ = _.GetPreferredLocales(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
var _ = new Map();
function _(_, _, _ = !0, _ = !0, _ = !1) {
  let _ = new Date(),
    _ = new Date(_ * 1e3);
  if (_.getFullYear() != _.getFullYear()) return _(_);
  _ && _(new Date().setHours(24, 0, 0, 0) - _.getTime());
  let _ = new Date();
  if ((_.setHours(0, 0, 0, 0), _)) {
    if (_ >= _) {
      if ((_.setDate(_.getDate() + 1), _ < _)) return _(`#Time_Today`);
      if ((_.setDate(_.getDate() + 1), _ < _)) return _(`#Time_Tomorrow`);
    } else if ((_.setDate(_.getDate() - 1), _ >= _))
      return _(`#Time_Yesterday`);
  }
  let _ = {
    month: _ ? `long` : `short`,
    day: `numeric`,
  };
  _ && (_.weekday = `long`);
  let _ = _.setHours(0, 0, 0, 0) + _.month,
    _ = _.get(_);
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), _)), _.set(_, _), _)
  );
}
function _(_, _, _, _) {
  return (
    _(new Date(_ * 1e3), !1, !1) +
    ` ` +
    _(
      _,
      {
        bForce24HourClock: _,
      },
      {
        timeZone: _,
      },
    ) +
    ` ` +
    _
  );
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = new Date(),
    _ = {
      bGranularFutureTime: !1,
      bGranularTodayTimeOnly: !1,
      bGranularToday: !1,
      bGranularYesterday: !1,
      bGranularWeek: !1,
      bGranularPast: !1,
      bAbbreviateDayOfWeek: !1,
      bForce24HourClock: !1,
      ..._,
    };
  if (_ > _) {
    if (!_.bGranularFutureTime)
      return (
        _(Math.min(_.getTime() - _.getTime(), _)),
        _.getFullYear() == _.getFullYear() ? _(_) : _(_)
      );
    _(new Date().setHours(24, 0, 0, 0) - _.getTime());
    let _ = new Date();
    return (
      _.setHours(0, 0, 0, 0),
      _.setDate(_.getDate() + 1),
      _ < _
        ? _(`#Time_Today`)
        : (_.setDate(_.getDate() + 1),
          _ < _
            ? _(`#Time_Tomorrow`)
            : (_.setDate(_.getDate() + 5),
              _ < _ ? _(_) : _(_, !0, _.bAbbreviateDayOfWeek)))
    );
  }
  _(new Date().setHours(24, 0, 0, 0) - _.getTime());
  let _ = new Date();
  if ((_.setHours(0, 0, 0, 0), _ >= _))
    return _.bGranularToday
      ? _.bGranularTodayTimeOnly
        ? _(_, {
            bForce24HourClock: _.bForce24HourClock,
          })
        : _(
            `#Time_Today_At`,
            _(_, {
              bForce24HourClock: _.bForce24HourClock,
            }),
          )
      : _(`#Time_Today`);
  if ((_.setDate(_.getDate() - 1), _ >= _))
    return _.bGranularYesterday
      ? _(
          `#Time_Yesterday_At`,
          _(_, {
            bForce24HourClock: _.bForce24HourClock,
          }),
        )
      : _(`#Time_Yesterday`);
  _.setDate(_.getDate() - 6);
  let _ = new Date(_);
  if (_.bGranularWeek && _ >= _) return _(_, !1, !_.bAbbreviateDayOfWeek);
  if (_.bGranularPast)
    return _(
      `#Time_Past_At`,
      _(_, _.getFullYear() == _.getFullYear(), !_.bAbbreviateDayOfWeek),
      _(_, {
        bForce24HourClock: _.bForce24HourClock,
      }),
    );
  if (_ >= _) return _(`#TimeSince_ThisWeek`);
  if (_.getMonth() == _.getMonth() && _.getFullYear() == _.getFullYear()) {
    let _ = Math.floor((_.valueOf() - _.valueOf()) / (_.PerWeek * 1e3)) + 1;
    return _ == 1 ? _(`#TimeSince_1Week`) : _(`#TimeSince_XWeeks`, _);
  }
  return _.getFullYear() == _.getFullYear() ? _(_) : _(_);
}
var _ = new Map(),
  _ = new Map(),
  _ = new Map(),
  _ = new Map(),
  _ = new Map(),
  _ = new Map();
function _(_, _ = !1, _ = !0) {
  let _ = {
      weekday: _ ? `long` : `short`,
      day: `numeric`,
      month: _ ? `long` : `short`,
      year: `numeric`,
    },
    _ = _.setHours(0, 0, 0, 0) + _.weekday + _.month,
    _ = _.get(_);
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), _)), _.set(_, _), _)
  );
}
function _(_, _ = !1, _ = !0) {
  let _ = {
      weekday: _ ? `long` : `short`,
      day: `numeric`,
      month: _ ? `long` : `short`,
    },
    _ = _.setHours(0, 0, 0, 0) + _.weekday + _.month,
    _ = _.get(_);
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), _)), _.set(_, _), _)
  );
}
function _(_) {
  let _ = _.get(_.getDay());
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      weekday: `long`,
    })),
    _.set(_.getDay(), _),
    _)
  );
}
function _(_) {
  let _ = _.get(_.getMonth());
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      month: `long`,
    })),
    _.set(_.getMonth(), _),
    _)
  );
}
function _(_) {
  let _ = _.get(_.getMonth());
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      month: `short`,
    })),
    _.set(_.getMonth(), _),
    _)
  );
}
function _(_) {
  let _ = _.get(_.getFullYear());
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      year: `numeric`,
    })),
    _.set(_.getFullYear(), _),
    _)
  );
}
function _(_) {
  let _ = _.getMonth() + 12 * _.getFullYear(),
    _ = _.get(_);
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      month: `long`,
      year: `numeric`,
    })),
    _.set(_, _),
    _)
  );
}
function _(_, _) {
  switch (_.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q1` : `#Time_QuarterOfYear_Q1`,
        _.getUTCFullYear(),
      );
    case 3:
    case 4:
    case 5:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q2` : `#Time_QuarterOfYear_Q2`,
        _.getUTCFullYear(),
      );
    case 6:
    case 7:
    case 8:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q3` : `#Time_QuarterOfYear_Q3`,
        _.getUTCFullYear(),
      );
    default:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q4` : `#Time_QuarterOfYear_Q4`,
        _.getUTCFullYear(),
      );
  }
}
function _(_) {
  let _ = Math.floor(_ / _.PerYear),
    _ = Math.floor(_ / _.PerMonth),
    _ = Math.floor((_ % _.PerMonth) / _.PerDay),
    _ = Math.floor((_ % _.PerDay) / _.PerHour),
    _ = Math.floor((_ % _.PerHour) / _.PerMinute);
  return (
    (_ %= _.PerMinute),
    _ > 0
      ? _(`#TimeRemaining_MoreThanOneYear`)
      : _ > 0
        ? _(`#TimeRemaining_MonthsDays`, _, _)
        : _ > 0
          ? _(
              `#TimeRemaining_DaysHoursMinutes`,
              _,
              _.toString().padStart(2, `0`),
              _.toString().padStart(2, `0`),
            )
          : _ > 0
            ? _(
                `#TimeRemaining_HoursMinutesSeconds`,
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
              )
            : _(
                `#TimeRemaining_MinutesSeconds`,
                _.toString().padStart(2, `0`),
                _.toString().padStart(2, `0`),
              )
  );
}
function _(_, _, _) {
  for (; _.length < _;) _ = _ + _;
  return _;
}
function _(_) {
  return (
    (_ === void 0 || isNaN(_)) && (_ = 0),
    {
      hours: Math.floor(_ / 3600),
      minutes: Math.floor((_ % 3600) / 60),
      seconds: Math.floor(_ % 60),
      fraction: _ - Math.floor(_),
    }
  );
}
function _(_, _, _) {
  let _ = _ < 0;
  _ = _ ? 0 - _ : _;
  let _ = _(_),
    _ = _(_.seconds.toString(), 2, `0`),
    _ = _.fraction.toFixed(2).split(`.`)[1],
    _ = _ ?? !0,
    _ = !_ || _ == `00`;
  _ && _.hours == 0 && _.minutes == 0 && _.seconds == 0 && _ && (_ = !1);
  let _ = ``;
  if (_.hours) {
    let _ = _(_.minutes.toString(), 2, `0`);
    _ = _(
      _
        ? `#Duration_HourMinuteSecondMillisecond`
        : `#Duration_HourMinuteSecond`,
      _.hours,
      _,
      _,
      _,
    );
  } else {
    let _ = _.minutes.toString(),
      _ = _ ? `#Duration_MinuteSecondMillisecond` : `#Duration_MinuteSecond`;
    _ = _.Localize(_, _, _, _);
  }
  return (
    _ && (_ = _ ? _.Localize(`#Duration_WrittenNegation`, _) : `-` + _), _
  );
}
function _(_) {
  let _ = _(_),
    _ = _.hours * 60 + _.minutes,
    _ = _.hours,
    _ = Math.floor(_.hours / 24),
    _ = Math.floor(_ / 30);
  return _ > 1
    ? _(`#ReadableDuration_Months`, _)
    : _ === 1
      ? _(`#ReadableDuration_OneMonth`, _)
      : _ > 1
        ? _(`#ReadableDuration_Days`, _)
        : _ > 2
          ? _(`#ReadableDuration_Hours`, _)
          : _ > 2
            ? _(`#ReadableDuration_Minutes`, _)
            : _(
                _ > 1
                  ? `#ReadableDuration_OneMinute`
                  : `#ReadableDuration_LessThanOneMinute`,
              );
}
var _ = class _ {
  m_mapTokens = new Map();
  m_mapFallbackTokens = new Map();
  m_cbkTokensChanged = new _();
  m_rgLocalesToUse;
  m_bReportIndividualMissingTokens = !0;
  m_bReady = !1;
  static GetLanguageFallback(_) {
    return _ === `sc_schinese` ? `schinese` : `english`;
  }
  static GetELanguageFallback(_) {
    return _ === 29 ? 6 : 0;
  }
  static IsELanguageValidInRealm(_, _) {
    return _ === (_ === 29 ? _.k_ESteamRealmChina : _.k_ESteamRealmGlobal);
  }
  static GetLanguageListForRealms(_) {
    let _ = [];
    for (let _ = 0; _ < 32; _++)
      for (let _ of _)
        if (this.IsELanguageValidInRealm(_, _)) {
          _.push(_);
          break;
        }
    return _;
  }
  InitFromObjects(_, _, _, _) {
    (_ && (this.m_bReportIndividualMissingTokens = !1),
      _ || this.m_mapTokens.clear(),
      this.AddTokens(_, _ || {}),
      this.m_cbkTokensChanged.Dispatch());
  }
  InitDirect(_, _) {
    (this.m_mapTokens.clear(),
      this.m_mapFallbackTokens.clear(),
      this.AddTokens(_, _),
      this.m_cbkTokensChanged.Dispatch());
  }
  SetReady(_) {
    this.m_bReady = _;
  }
  AddTokens(_, _) {
    (Object.keys(_).forEach((_) => {
      this.m_mapTokens.set(_, _[_]);
    }),
      _ &&
        Object.keys(_).forEach((_) => {
          (this.m_mapTokens.has(_) || this.m_mapTokens.set(_, _[_]),
            this.m_mapFallbackTokens.set(_, _[_]));
        }));
  }
  GetTokensChangedCallbackList() {
    return this.m_cbkTokensChanged;
  }
  GetPreferredLocales() {
    return this.m_rgLocalesToUse
      ? this.m_rgLocalesToUse
      : navigator && navigator.languages
        ? navigator.languages
        : [`en-US`];
  }
  GetELanguageFallbackOrder(_ = null) {
    let _ = [];
    return (
      _.push(_(_.LANGUAGE)),
      (_.SUPPORTED_LANGUAGES || []).forEach((_) => {
        _.value != _.LANGUAGE && _.push(_(_.value));
      }),
      _ &&
        _.GetLanguageListForRealms(_).forEach((_) => {
          _.indexOf(_) == -1 && _.push(_);
        }),
      _
    );
  }
  SetPreferredLocales(_) {
    this.m_rgLocalesToUse = _;
  }
  BLooksLikeToken(_) {
    return !!_ && _.length > 0 && _.charAt(0) == `#`;
  }
  LocalizeIfToken(_, _) {
    return this.BLooksLikeToken(_) ? this.LocalizeString(_, _) : _;
  }
  LocalizeString(_, _) {
    if (!this.BLooksLikeToken(_)) return;
    let _ = this.m_mapTokens.get(_.substring(1));
    if (_ === void 0) {
      if (_.HasKey(_)) return _.Localize(_);
      this.m_mapTokens.size === 0
        ? _(
            !1,
            `Attempting to localize token '${_}' with no tokens in our map for language '${_.LANGUAGE}'. SharedLoc ready: ${_.IsReady()}. site has inited: ${this.m_bReady}`,
          )
        : !_ &&
          this.m_bReportIndividualMissingTokens &&
          _().ReportError(
            Error(
              `Unable to find localization token '${_}' for language '${_.LANGUAGE}', ${this.m_mapTokens.size} tokens in map. SharedLoc ready: ${_.IsReady()}. site has inited: ${this.m_bReady}`,
            ),
            {
              bIncludeMessageInIdentifier: !0,
            },
          );
    } else return _;
  }
  LocalizeStringFromFallback(_) {
    if (!_ || _.length == 0 || _.charAt(0) != `#`) return;
    let _ = this.m_mapFallbackTokens.get(_.substring(1));
    if (_ !== void 0) return _;
  }
  static GetTokenWithFallback(_) {
    if (!_) return ``;
    let _ = _(_.LANGUAGE),
      _ = _.find((_) => _.language == _);
    if (_) return _.localized_string;
    let _ = _.GetELanguageFallback(_);
    return _.find((_) => _.language == _)?.localized_string ?? ``;
  }
  static BHasTokenLanguage(_, _) {
    return !!_.find((_) => _.language == _);
  }
};
function _(_, ..._) {
  let _ = _.LocalizeString(_);
  return _ === void 0 ? _ : _(_, ..._);
}
function _(_, ..._) {
  let _ = _.LocalizeString(_);
  if (_ === void 0) return _;
  let _ = [],
    _ = /(.*?)%(\d+)\$s/g,
    _ = 0,
    _;
  for (; (_ = _.exec(_));) {
    ((_ += _[0].length), _.push(_[1]));
    let _ = parseInt(_[2]);
    _ >= 1 && _ <= _.length && _.push(_[_ - 1]);
  }
  return (_.push(_.substr(_)), _.createElement(_.Fragment, null, ..._));
}
function _(_, _, ..._) {
  return _ === 1 || _ === `1`
    ? _(_, _, ..._)
    : _(_ + `_Plural`, _.toLocaleString(_.GetPreferredLocales()), ..._);
}
function _(_, ..._) {
  let _ = _.LocalizeIfToken(_);
  return _ === void 0 ? _ : _(_, ..._);
}
function _(_, _, ..._) {
  let _;
  return (
    (_ = _(_ === 1 || _ === `1` ? _ : _ + `_Plural`, _)),
    _ === void 0 ? _ : _(_, ..._)
  );
}
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    _ = 0,
    _;
  for (; (_ = _.exec(_));) {
    ((_ += _[0].length), _.push(_[1]));
    let _ = parseInt(_[2]),
      _ = _[3] || ``,
      _ = _(_, ..._),
      _ =
        _ >= 1 && _ <= _.length && _[_ - 1]
          ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
          : _;
    _.push(_);
  }
  return (_.push(_.substr(_)), _.createElement(_.Fragment, null, ..._));
}
function _(_, _, ..._) {
  return _(_ === 1 || _ === `1` ? _ : _ + `_Plural`, _, ..._);
}
function _(_, ..._) {
  return (
    _.length == 0 ||
      (_ = _.replace(/%(?:(\d+)\$)?s/g, function (_, _) {
        if (_ <= _.length && _ >= 1) {
          let _ = _[_ - 1];
          return String(_ ?? ``);
        }
        return _;
      })),
    _
  );
}
var _ = class _ {
    static Set(_, _, _) {
      if (((_ ||= _([], 32, null)), _.length <= _)) {
        if (_ >= 32) return _;
        _ = _(_, _ + 1, null);
      }
      return ((_[_] = _), _);
    }
    static Get(_, _) {
      return (_ && _.length > _ && _[_]) || ``;
    }
    static GetWithFallback(_, _) {
      return _ ? _.Get(_, _) || _.Get(_, _.GetELanguageFallback(_)) : null;
    }
    static BHas(_, _) {
      return !!(_ && _.length > _ && _[_]);
    }
  },
  _ = {
    english: `en`,
    german: `de`,
    french: `fr`,
    italian: `it`,
    korean: `ko`,
    latam: `es-419`,
    spanish: `es`,
    schinese: `zh-cn`,
    tchinese: `zh-tw`,
    russian: `ru`,
    thai: `th`,
    japanese: `ja`,
    brazilian: `pt-br`,
    portuguese: `pt`,
    polish: `pl`,
    danish: `da`,
    dutch: `nl`,
    finnish: `fi`,
    norwegian: `no`,
    swedish: `sv`,
    hungarian: `hu`,
    czech: `cs`,
    romanian: `ro`,
    turkish: `tr`,
    arabic: `ar`,
    bulgarian: `bg`,
    greek: `el`,
    ukrainian: `uk`,
    vietnamese: `vi`,
    indonesian: `id`,
    malay: `ms`,
    sc_schinese: `zh-cn`,
    koreana: `ko`,
  },
  _ = {
    _: 0,
    "en-US": 0,
    _: 1,
    "de-DE": 1,
    _: 2,
    "fr-FR": 2,
    _: 3,
    "it-IT": 3,
    _: 4,
    "ko-KR": 4,
    _: 5,
    "es-ES": 5,
    "zh-cn": 6,
    "zh-CN": 6,
    "zh-tw": 7,
    "zh-TW": 7,
    _: 8,
    "ru-RU": 8,
    _: 9,
    "th-TH": 9,
    _: 10,
    "ja-JP": 10,
    _: 11,
    "pt-PT": 11,
    _: 12,
    "pl-PL": 12,
    _: 13,
    "da-DK": 13,
    _: 14,
    "nl-NL": 14,
    _: 15,
    "fi-FI": 15,
    _: 16,
    "nb-NO": 16,
    _: 17,
    "sv-SE": 17,
    _: 18,
    "hu-HU": 18,
    _: 19,
    "cs-CZ": 19,
    _: 20,
    "ro-RO": 20,
    _: 21,
    "tr-TR": 21,
    "pt-BR": 22,
    _: 23,
    "bg-BG": 23,
    _: 24,
    "el-GR": 24,
    _: 25,
    "ar-SA": 25,
    _: 26,
    "uk-UA": 26,
    "es-419": 27,
    _: 28,
    "vi-VN": 28,
    _: 30,
    "id-ID": 30,
    _: 30,
    "ms-MY": 30,
  };
function _() {
  return _[_.LANGUAGE] || null;
}
function _(_) {
  return _[_];
}
function _(_ = !1) {
  let _ = new Map();
  for (let _ = 0; _ < 32; ++_) {
    if (_ == 25 || (_ == 29 && !_)) continue;
    let _ = _(_);
    _.set(_, _(`#Language_` + _));
  }
  return _;
}
function _(_) {
  return (
    typeof _ == `number` && (_ = _(_)),
    _ === `none` ? `None` : _(`#language_selection_${_}`)
  );
}
function _(_, _) {
  let _ = [];
  return (
    _.forEach((_, _, _) => {
      let _ = _(_, _, _);
      _.push(_);
    }),
    _
  );
}
var _ = new _();
window.LocalizationManager = _;
var _ = `_6Yj8-lV-G6s-`,
  _ = `jHu--n-rRVg-`,
  _ = `R7GiLrvH-WM-`,
  _ = `U1IN4VB-hEM-`,
  _ = `rjiGsXOihcs-`,
  _ = `a35PT523a6E-`,
  _ = `OEfyf7kPPCY-`,
  _ = `Exxr5jAR-ig-`,
  _ = `rYhIiaUDL3A-`,
  _ = `_6-k-Tc0wwxU-`,
  _ = `_4tUVBfRhGMA-`,
  _ = `pLa4qNp59Zk-`,
  _ = `bEpnbOp1x2c-`;
function _() {
  let _ = _.useId(),
    _ = _.useRef(void 0);
  return (
    _.current === void 0 &&
      (_.current = `svgid_ssr_` + _.replace(/[^A-Za-z0-9_-]/g, ``)),
    [_.current, `url(#${_.current})`]
  );
}
function _(_) {
  let _ = _(`SVGIcon_Button`, `SVGIcon_Settings`, _.className);
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `-305.5 396.5 256 256`,
    enableBackground: `new -305.5 396.5 256 256`,
    children: (0, _.jsx)(`path`, {
      _: `M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_DownArrowContextMenu`,
    "data-name": `Layer 1`,
    viewBox: `0 0 128 128`,
    _: `0px`,
    _: `0px`,
    ..._,
    children: (0, _.jsx)(`polygon`, {
      points: `50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    style: {
      transform: `rotate(${_.angle}deg)`,
    },
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    width: `24.833px`,
    height: `21.917px`,
    viewBox: `0 0 24.833 21.917`,
    children: (0, _.jsx)(`polygon`, {
      points: `12.5,14.873 3.302,5.723 1.185,7.848 12.5,19.103 23.814,7.848 21.697,5.723 `,
    }),
  });
}
function _(_) {
  let _ = `SVGIcon_Button SVGIcon_MagnifyingGlass`;
  return (
    _.className && (_ += ` ${_.className}`),
    (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      className: _,
      version: `1.1`,
      _: `0px`,
      _: `0px`,
      viewBox: `0 0 100 100`,
      children: (0, _.jsx)(`g`, {
        transform: `translate(0,-952.36218)`,
        children: (0, _.jsx)(`path`, {
          className: `ColorSelector`,
          _: `m 40.99855,964.36216 c -15.9798,0 -28.9986,13.01864 -28.9986,28.99862 0,15.97992 13.0188,28.99862 28.9986,28.99862 6.9189,0 13.2881,-2.4349 18.2803,-6.4997 l 23.5927,23.6239 c 1.1714,1.1714 3.0784,1.1715 4.2498,0 1.1716,-1.1715 1.1716,-3.0783 0,-4.2498 l -23.6239,-23.5926 c 4.0649,-4.9923 6.4997,-11.3615 6.4997,-18.28042 0,-15.97998 -13.0187,-28.99862 -28.9986,-28.99862 z m 0,5.99972 c 12.7374,0 22.9989,10.26145 22.9989,22.9989 0,12.73732 -10.2615,22.99892 -22.9989,22.99892 -12.7374,0 -22.9989,-10.2616 -22.9989,-22.99892 0,-12.73745 10.2615,-22.9989 22.9989,-22.9989 z`,
          fill: `currentColor`,
          fillOpacity: `1`,
          stroke: `none`,
          visibility: `visible`,
          display: `inline`,
          overflow: `visible`,
        }),
      }),
    })
  );
}
function _() {
  return (0, _.jsx)(`svg`, {
    className: `SVGIcon_Button SVGIcon_Clock`,
    version: `1.1`,
    _: `0px`,
    _: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 20 20`,
    children: (0, _.jsx)(`path`, {
      _: `M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    width: `24`,
    height: `24`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(`SVGIcon_Button SVGIcon_Submit`, _),
    ..._,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M4.16683 8.982C4.10732 8.3908 3.83847 7.42693 4.15486 7.17995C4.46877 6.93489 4.7797 6.90487 5.90123 7.31306L31.1931 17.2282C32.2693 17.6503 32.2686 18.335 31.1931 18.7564L5.90123 28.6715C4.77972 29.1235 4.46864 29.0497 4.15487 28.8049C3.83836 28.5579 4.0953 27.5939 4.15484 27.0028L4.7797 21.2151C4.89862 20.0374 5.92644 18.9801 7.0706 18.854L15.467 18.4429C24.1686 17.9924 24.1686 17.9924 15.467 17.5419L7.0706 17.1313C5.92423 17.0053 4.89825 15.9476 4.7797 14.7706L4.16683 8.982Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let [_, _] = _();
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(`SVGIcon_LangOptions`, _.className),
    _: `0px`,
    _: `0px`,
    width: `100px`,
    height: `91.582px`,
    viewBox: `0 0 100 91.582`,
    enableBackground: `new 0 0 100 91.582`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        clipPath: _,
        stroke: `currentColor`,
        fill: `currentColor`,
        _: `M88.853,29.724H62.271V11.351C62.262,5.18,57.26,0.179,51.089,0.169H11.255
				C5.085,0.179,0.085,5.18,0.074,11.351v24.908c-0.001,2.207,0.657,4.36,1.888,6.19c3.942,7.586,22.118,18.799,22.314,18.916
				c0.389,0.229,0.83,0.354,1.281,0.361c1.351,0.01,2.455-1.074,2.468-2.426c0.003-0.329-0.062-0.654-0.187-0.958
				c-1.319-3.565-2.341-7.233-3.053-10.968h13.135v18.389C37.93,71.9,42.882,76.882,49.02,76.928H75.29
				c-0.715,3.724-1.737,7.379-3.054,10.936c-0.517,1.248,0.076,2.678,1.323,3.196c0.303,0.125,0.63,0.188,0.959,0.186
				c0.451-0.006,0.894-0.13,1.279-0.361c0.197-0.115,18.373-11.329,22.314-18.914c1.235-1.834,1.894-3.997,1.888-6.207V40.906
				C99.99,34.746,95.01,29.751,88.853,29.724 M32.797,42.449H21.831c-0.721,0.01-1.4,0.327-1.873,0.869
				c-0.464,0.544-0.669,1.265-0.558,1.973c0,0.228,0.59,3.79,1.641,8.028c-5.517-3.842-12.773-9.425-14.776-13.136
				c-0.067-0.162-0.149-0.314-0.247-0.46c-0.738-1.033-1.13-2.276-1.116-3.546V11.351c0.008-3.463,2.825-6.264,6.288-6.255h0.065
				h39.833c3.45,0.007,6.246,2.804,6.255,6.255v18.373H49.02c-3.223,0.005-6.286,1.399-8.406,3.825
				c-1.744-0.054-3.464-0.427-5.074-1.101c2.588-3.257,4.169-7.2,4.548-11.345h1.33c1.359,0,2.463-1.103,2.463-2.463
				c0-1.361-1.104-2.461-2.463-2.461h-7.784v-4.384c0-1.36-1.102-2.464-2.461-2.464c-1.361,0-2.463,1.104-2.463,2.464v4.384h-7.668
				c-1.361,0-2.462,1.1-2.462,2.461c0,1.36,1.102,2.463,2.462,2.463H35.13c-0.348,3.137-1.604,6.104-3.613,8.538
				c-1.439-1.598-2.553-3.46-3.284-5.482c-0.489-1.271-1.916-1.903-3.185-1.414c-1.27,0.489-1.902,1.917-1.412,3.185
				c0.892,2.395,2.192,4.619,3.841,6.57c-2.017,0.812-4.178,1.208-6.354,1.165c-1.359,0-2.463,1.102-2.463,2.461
				c0,1.362,1.104,2.465,2.463,2.465c3.647,0.07,7.244-0.868,10.393-2.71c2.032,1.239,4.293,2.049,6.649,2.38
				c-0.218,0.859-0.327,1.741-0.327,2.627v1.641L32.797,42.449z M95.19,65.763c0.013,1.271-0.379,2.514-1.117,3.547
				c-0.097,0.138-0.181,0.287-0.246,0.443c-1.938,3.678-9.211,9.277-14.776,13.135c1.099-4.236,1.64-7.799,1.64-8.03
				c0.111-0.704-0.091-1.425-0.558-1.969c-0.462-0.548-1.138-0.871-1.854-0.887H49.02c-3.447,0-6.246-2.791-6.255-6.239V40.906
				c0.009-3.452,2.805-6.249,6.255-6.257h39.833c3.449,0.008,6.246,2.805,6.256,6.257L95.19,65.763z M77.834,56.635L77.834,56.635
				l-6.564-16.42c-0.037-0.092-0.081-0.18-0.133-0.262l-0.099-0.165c-0.047-0.078-0.102-0.15-0.164-0.214l-0.132-0.164l-0.182-0.147
				l-0.195-0.099c-0.056-0.043-0.116-0.076-0.182-0.098l-0.246-0.132c-0.06-0.009-0.121-0.009-0.18,0l-0.248-0.082h-0.245h-0.231
				h-0.261h-0.214l-0.279,0.082c-0.055-0.007-0.109-0.007-0.164,0l-0.246,0.132l-0.247,0.098c-0.064,0.044-0.124,0.095-0.18,0.147
				l-0.182,0.148l-0.149,0.166c-0.056,0.066-0.113,0.138-0.161,0.211v0.166l-0.149,0.263l-6.567,16.418l-3.282,8.21
				c-0.546,1.246,0.026,2.697,1.272,3.24c0.036,0.016,0.072,0.029,0.105,0.042c0.29,0.127,0.604,0.189,0.919,0.182
				c1.005-0.006,1.905-0.616,2.283-1.544l2.657-6.665h9.854l2.66,6.665c0.383,0.931,1.291,1.54,2.298,1.544
				c0.31,0.003,0.619-0.059,0.904-0.182c1.269-0.485,1.906-1.907,1.422-3.18c-0.014-0.034-0.028-0.069-0.044-0.103L77.834,56.635z
				M66.062,55.123l2.939-7.323l2.923,7.323H66.062z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    fill: `#FFFFFF`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Popout`,
    viewBox: `0 0 8 8`,
    _: `0px`,
    _: `0px`,
    children: (0, _.jsx)(`path`, {
      _: `M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    fill: `#FFFFFF`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_X`,
    version: `1.1`,
    _: `0px`,
    _: `0px`,
    viewBox: `-165 95 100 100`,
    ..._,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`polygon`, {
        points: `-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2`,
      }),
    }),
  });
}
function _(_) {
  let { color: _ = `#FFFFFF`, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(`SVGIcon_Button`, `SVGIcon_X_Line`, _.className),
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    ..._,
    children: [
      (0, _.jsx)(`line`, {
        fill: `none`,
        stroke: _,
        strokeWidth: `45`,
        strokeMiterlimit: `10`,
        _: `212`,
        _: `212`,
        _: `44`,
        _: `44`,
      }),
      (0, _.jsx)(`line`, {
        fill: `none`,
        stroke: _,
        strokeWidth: `45`,
        strokeMiterlimit: `10`,
        _: `44`,
        _: `212`,
        _: `212`,
        _: `44`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 256 256`,
    ..._,
    children: [
      (0, _.jsx)(`line`, {
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `45`,
        strokeMiterlimit: `10`,
        _: `212`,
        _: `212`,
        _: `44`,
        _: `44`,
      }),
      (0, _.jsx)(`line`, {
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `45`,
        strokeMiterlimit: `10`,
        _: `44`,
        _: `212`,
        _: `212`,
        _: `44`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_5`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Paperclip`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`path`, {
      fill: `none`,
      strokeWidth: `10`,
      strokeLinecap: `round`,
      strokeMiterlimit: `10`,
      _: `M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839`,
    }),
  });
}
function _(_) {
  let { muted: _, className: _ } = _;
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(`SVGIcon_Button`, `SVGIcon_Volume`, _),
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `255.999px`,
    viewBox: `0 0 256 255.999`,
    children: [
      (0, _.jsx)(`g`, {
        className: `Speaker`,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          _: `M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z`,
        }),
      }),
      !_ &&
        (0, _.jsxs)(`g`, {
          className: `SoundWaves`,
          children: [
            (0, _.jsx)(`path`, {
              className: `SoundWavesHighest`,
              fill: `currentColor`,
              _: `M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521`,
            }),
            (0, _.jsx)(`path`, {
              className: `SoundWavesHigh`,
              fill: `currentColor`,
              _: `M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z`,
            }),
            (0, _.jsx)(`path`, {
              className: `SoundWavesMed`,
              fill: `currentColor`,
              _: `M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z`,
            }),
            (0, _.jsx)(`path`, {
              className: `SoundWavesLow`,
              fill: `currentColor`,
              _: `M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z`,
            }),
          ],
        }),
      (0, _.jsxs)(`g`, {
        className: `SoundX`,
        children: [
          (0, _.jsx)(`line`, {
            fill: `none`,
            strokeWidth: _ ? 10 : 0,
            stroke: `#fff`,
            strokeMiterlimit: `10`,
            _: `137`,
            _: `170.667`,
            _: `223.167`,
            _: `84.5`,
          }),
          (0, _.jsx)(`line`, {
            fill: `none`,
            strokeWidth: _ ? 10 : 0,
            stroke: `#fff`,
            strokeMiterlimit: `10`,
            _: `137`,
            _: `84.5`,
            _: `223.167`,
            _: `170.667`,
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Play`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`path`, {
      className: `playTriangle`,
      _: `M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Pause`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z`,
      }),
    ],
  });
}
function _(_) {
  let { color: _ = `#fff`, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Check`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    strokeWidth: `24`,
    stroke: _,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    strokeMiterlimit: `10`,
    ..._,
    children: (0, _.jsx)(`polyline`, {
      fill: `none`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
function _(_) {
  let _ = _.color || `#ffffff`;
  return (0, _.jsxs)(`svg`, {
    className: `SVGIcon_Button SVGIcon_Calendar`,
    width: `25`,
    height: `24`,
    viewBox: `0 0 25 24`,
    fill: _,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M1.97014 2.77093H4.44345V3.97865C4.44345 5.04817 5.31099 5.91572 6.38052 5.91572C7.45004 5.91572 8.31699 5.04817 8.31699 3.97865V2.77093H16.6836V3.97865C16.6836 5.04817 17.5511 5.91572 18.6207 5.91572C19.6902 5.91572 20.5571 5.04817 20.5571 3.97865V2.77093H23.0293C24.1136 2.77093 25 3.65738 25 4.74167V21.4991C25 22.5834 24.1136 23.4698 23.0293 23.4698H1.97073C0.886445 23.4698 0 22.5834 0 21.4991V4.74167C0 3.65738 0.886445 2.77093 1.97073 2.77093H1.97014ZM23.5005 8.23961V21.4991C23.5005 21.7578 23.2879 21.9704 23.0293 21.9704H1.97073C1.71206 21.9704 1.49946 21.7583 1.49946 21.4991V8.23961H23.5005V8.23961Z`,
        fill: _,
      }),
      (0, _.jsx)(`path`, {
        _: `M5.29335 1.08724C5.29335 0.486629 5.77998 0 6.38059 0C6.98061 0 7.46724 0.486629 7.46724 1.08724V3.97867C7.46724 4.57928 6.98061 5.06591 6.38059 5.06591C5.77998 5.06591 5.29335 4.57928 5.29335 3.97867V1.08724V1.08724Z`,
        fill: _,
      }),
      (0, _.jsx)(`path`, {
        _: `M17.5329 1.08724C17.5329 0.486629 18.0195 0 18.6201 0C19.2201 0 19.7068 0.486629 19.7068 1.08724V3.97867C19.7068 4.57928 19.2201 5.06591 18.6201 5.06591C18.0195 5.06591 17.5329 4.57928 17.5329 3.97867V1.08724V1.08724Z`,
        fill: _,
      }),
    ],
  });
}
function _(_) {
  let _ = _.highlightColor || `#00ccff`,
    _ = _.color || `#2d73ff`,
    [_, _] = _(),
    [_, _] = _(),
    [_] = (0, _.useState)(Math.random().toString());
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_DialogCheck`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsxs)(`defs`, {
        children: [
          (0, _.jsxs)(`linearGradient`, {
            _: _,
            _: `0%`,
            _: `0%`,
            _: `100%`,
            _: `100%`,
            children: [
              (0, _.jsx)(`stop`, {
                offset: `0%`,
                stopColor: _,
              }),
              (0, _.jsx)(`stop`, {
                offset: `100%`,
                stopColor: _,
              }),
            ],
          }),
          (0, _.jsxs)(`filter`, {
            _: _,
            _: `0`,
            _: `0`,
            width: `200%`,
            height: `200%`,
            children: [
              (0, _.jsx)(`feOffset`, {
                result: `offOut`,
                _: `SourceAlpha`,
                _: `20`,
                _: `20`,
              }),
              (0, _.jsx)(`feGaussianBlur`, {
                result: `blurOut`,
                _: `offOut`,
                stdDeviation: `10`,
              }),
              (0, _.jsx)(`feBlend`, {
                _: `SourceGraphic`,
                in2: `blurOut`,
                mode: `normal`,
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(`path`, {
        fill: `none`,
        stroke: _,
        strokeWidth: `24`,
        strokeLinecap: `round`,
        strokeLinejoin: `miter`,
        strokeMiterlimit: `10`,
        _: `M206.5,45.25L95,210.75l-45.5-63`,
        strokeDasharray: `365.19 365.19`,
        strokeDashoffset: `0.00`,
      }),
      (0, _.jsx)(`path`, {
        fill: `none`,
        opacity: `.2`,
        filter: _,
        stroke: _,
        strokeWidth: `24`,
        strokeLinecap: `round`,
        strokeLinejoin: `miter`,
        strokeMiterlimit: `10`,
        _: `M206.5,45.25L95,210.75l-45.5-63`,
        strokeDasharray: `365.19 365.19`,
        strokeDashoffset: `0.00`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, color: _ = `#020202` } = _;
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(`SVGIcon_Button`, `SVGIcon_Caution`, _),
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsxs)(`g`, {
        className: `triangle`,
        children: [
          (0, _.jsx)(`path`, {
            stroke: _,
            strokeWidth: `16`,
            strokeLinecap: `round`,
            strokeMiterlimit: `10`,
            _: `M127.9,76.632`,
          }),
          (0, _.jsx)(`path`, {
            fill: `none`,
            stroke: _,
            strokeWidth: `11`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeMiterlimit: `5`,
            _: `M128.001,226.606c42.507,0,81.538,0,87.756,0c31.222,0,36.95-14.974,24.045-34.771c-6.921-10.617-78.297-122.962-89.163-140.254	C141.859,37.613,138.542,29.393,128,29.393l0,0c-10.543,0-13.86,8.222-22.639,22.189C94.495,68.874,23.119,181.219,16.198,191.836 c-12.905,19.797-7.175,34.771,24.045,34.771C46.463,226.606,85.494,226.606,128.001,226.606`,
          }),
          (0, _.jsx)(`path`, {
            fill: _,
            _: `M127.9,208.12`,
          }),
        ],
      }),
      (0, _.jsxs)(`g`, {
        className: `exclamation`,
        children: [
          (0, _.jsx)(`line`, {
            fill: `none`,
            stroke: _,
            strokeWidth: `16`,
            strokeLinecap: `round`,
            strokeMiterlimit: `10`,
            _: `127.9`,
            _: `76.632`,
            _: `127.9`,
            _: `160.07`,
          }),
          (0, _.jsx)(`path`, {
            fill: _,
            _: `M127.9,208.12c-6.377,0-11.548-5.17-11.548-11.548c0-6.377,5.17-11.547,11.548-11.547 c6.377,0,11.547,5.17,11.547,11.547C139.447,202.95,134.277,208.12,127.9,208.12`,
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Lock`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        className: `topLock`,
        _: `M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z`,
      }),
      (0, _.jsx)(`path`, {
        className: `baseLock`,
        fill: `none`,
        stroke: `#ffffff`,
        strokeWidth: `22`,
        strokeMiterlimit: `10`,
        _: `M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Lock`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `22`,
        strokeMiterlimit: `10`,
        _: `M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,30.188l0`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Video`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        className: `videoPlayButton`,
        _: `M165.399,124.063L109.118,92.06c-1.399-0.797-3.118-0.787-4.508,0.026c-1.39,0.805-2.25,2.295-2.25,3.905v64.008 c0,1.609,0.86,3.1,2.25,3.913c0.705,0.412,1.491,0.613,2.277,0.613c0.768,0,1.546-0.191,2.241-0.596l56.283-32.003 c1.416-0.806,2.285-2.306,2.285-3.934C167.694,126.368,166.816,124.869,165.399,124.063z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M238.069,40.646H214.25h-28.82h-28.82h-28.458h-0.36H99.333H70.536H41.727h-23.82c-3.184,0-5.773,2.59-5.773,5.772v23.856 v120.441v18.867c0,3.184,2.589,5.771,5.773,5.771h2.415h21.394h28.82h28.82h28.459h0.361h28.457h28.82h28.82h23.82 c3.184,0,5.773-2.589,5.773-5.771v-18.867V70.274V46.418C243.844,43.223,241.254,40.646,238.069,40.646z M191.215,47.181h17.273  V64.5h-17.273V47.181L191.215,47.181z M162.396,47.181h17.272V64.5h-17.272V47.181z M133.938,47.181h16.912V64.5h-16.912V47.181z	M105.128,47.181h16.912V64.5h-16.912V47.181z M76.309,47.181h17.273V64.5H76.309V47.181z M47.488,47.181h17.273V64.5H47.488V47.181 z M18.681,47.181h17.273V64.5H18.681V47.181z M35.954,208.811H18.681v-17.319h17.273V208.811z M64.763,208.811H47.489v-17.319 h17.273V208.811L64.763,208.811z M93.583,208.811H76.31v-17.319h17.273V208.811z M122.041,208.811h-16.912v-17.319h16.912V208.811z M150.849,208.811h-16.912v-17.319h16.912V208.811z M179.668,208.811h-17.272v-17.319h17.272V208.811z M208.488,208.811h-17.273 v-17.319h17.273V208.811z M237.297,208.811h-17.273v-17.319h17.273V208.811L237.297,208.811z M237.297,184.943H214.25h-28.819 h-28.82h-28.458h-0.361H99.333H70.537H41.728H18.682V71.047h23.046h28.82h28.82h28.458h0.36h28.458h28.82h28.82h23.045v113.896 H237.297z M237.297,64.5h-17.273V47.181h17.273V64.5L237.297,64.5z`,
      }),
    ],
  });
}
function _(_) {
  return _()
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        className: `SVGIcon_Button SVGIcon_Bell`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24ZM18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z`,
          fill: `currentColor`,
        }),
      })
    : (0, _.jsx)(`svg`, {
        version: `1.1`,
        _: `base`,
        xmlns: `http://www.w3.org/2000/svg`,
        className: `SVGIcon_Button SVGIcon_Bell`,
        _: `0px`,
        _: `0px`,
        width: `256px`,
        height: `256px`,
        viewBox: `0 0 256 256`,
        children: (0, _.jsx)(`path`, {
          _: `M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z`,
        }),
      });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    style: {
      transform: `rotate(${_.angle}deg)`,
    },
    version: `1.1`,
    _: `arrowBase`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Arrow`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`polyline`, {
        fill: `none`,
        stroke: `#ffffff`,
        strokeWidth: `10`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeMiterlimit: `10`,
        points: `128,247.688 128,8.313 181.061,61.674 `,
      }),
      (0, _.jsx)(`polyline`, {
        fill: `none`,
        stroke: `#ffffff`,
        strokeWidth: `10`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        strokeMiterlimit: `10`,
        points: `128,247.688 128,8.313 74.939,61.674 `,
      }),
    ],
  });
}
function _(_) {
  let { direction: _, ..._ } = _;
  switch (_) {
    case `up`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        width: `36px`,
        height: `36px`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M26.23 17.31L20.5 11.58V33.54H15.5V11.58L9.76998 17.31L6.22998 13.77L18 2.00001L29.77 13.77L26.23 17.31Z`,
          fill: _.fill || `currentColor`,
        }),
      });
    case `down`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        width: `36px`,
        height: `36px`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M26.23 18.23L20.5 23.96V2H15.5V23.96L9.76998 18.23L6.22998 21.77L18 33.54L29.77 21.77L26.23 18.23Z`,
          fill: _.fill || `currentColor`,
        }),
      });
    case `left`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        width: `36px`,
        height: `36px`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M17.54 9.53998L11.81 15.27L33.77 15.27V20.27H11.81L17.54 26L14 29.54L2.23002 17.77L14 5.99998L17.54 9.53998Z`,
          fill: _.fill || `currentColor`,
        }),
      });
    case `right`:
      return (0, _.jsx)(`svg`, {
        viewBox: `0 0 36 36`,
        width: `36px`,
        height: `36px`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M18.46 9.54004L24.19 15.27L2.22998 15.27L2.22998 20.27H24.19L18.46 26L22 29.54L33.77 17.77L22 6.00004L18.46 9.54004Z`,
          fill: _.fill || `currentColor`,
        }),
      });
  }
}
function _(_) {
  let { angle: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(`SVGIcon_CutArrow`, _),
    style: {
      transform: `rotate(${_ || 0}deg)`,
    },
    _: `0px`,
    _: `0px`,
    width: `50px`,
    height: `100px`,
    viewBox: `0 0 50 100`,
    fill: _.fill || `#ffffff`,
    ..._,
    children: (0, _.jsx)(`polygon`, {
      points: `0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 `,
    }),
  });
}
function _(_) {
  let { angle: _, singlearrow: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    style: {
      transform: `rotate(${_}deg)`,
    },
    version: `1.1`,
    _: `arrowBase`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(`SVGIcon_Button SVGIcon_DoubleArrow`, _),
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    ..._,
    children: [
      (0, _.jsx)(`polyline`, {
        className: `Arrow1`,
        fill: `none`,
        stroke: _.fill || `#ffffff`,
        strokeWidth: `23`,
        strokeLinecap: `round`,
        strokeMiterlimit: `10`,
        points: `135.65,21.667 30.081,127.235 137.18,234.333 `,
      }),
      !_ &&
        (0, _.jsx)(`polyline`, {
          className: `Arrow2`,
          fill: `none`,
          stroke: _.fill || `#ffffff`,
          strokeWidth: `23`,
          strokeLinecap: `round`,
          strokeMiterlimit: `10`,
          points: `224.389,21.667 118.821,127.235 225.92,234.333 `,
        }),
    ],
  });
}
function _(_) {
  let { angle: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    style: {
      transform: `rotate(${_}deg)`,
    },
    xmlns: `http://www.w3.org/2000/svg`,
    className: _,
    viewBox: `0 0 32 32`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: _.fill || `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M16.0855 15.5837L8.88892 8.38708L12.0316 5.24438L22.3709 15.5837L12.0316 25.923L8.88892 22.7803L16.0855 15.5837Z`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Maximize`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `24`,
        _: `42.167`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `18`,
        strokeMiterlimit: `10`,
        width: `208`,
        height: `171.667`,
      }),
      (0, _.jsx)(`line`, {
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `42`,
        strokeMiterlimit: `10`,
        _: `24`,
        _: `54.01`,
        _: `232`,
        _: `54.01`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Minimize`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`line`, {
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `18`,
      strokeMiterlimit: `10`,
      _: `24`,
      _: `209.01`,
      _: `232`,
      _: `209.01`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Restore`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`polyline`, {
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `12`,
        strokeMiterlimit: `10`,
        points: `83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 `,
      }),
      (0, _.jsx)(`rect`, {
        _: `24`,
        _: `90.861`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `18`,
        strokeMiterlimit: `10`,
        width: `149`,
        height: `122.973`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Undo`,
    viewBox: `0 0 100 100`,
    _: `0px`,
    _: `0px`,
    width: `16px`,
    height: `16px`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M94.83,50A44.81,44.81,0,0,0,17.12,19.56V11.15a6,6,0,1,0-12,0v23.9a6,6,0,0,0,6,6H35.06a6,6,0,0,0,0-12H24.64A32.88,32.88,0,1,1,50,82.87h0a6,6,0,1,0,0,12h.12A44.82,44.82,0,0,0,94.83,50Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Reload`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        fill: `none`,
        stroke: `#ffffff`,
        strokeWidth: `30`,
        strokeLinecap: `round`,
        strokeMiterlimit: `10`,
        _: `M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895`,
      }),
      (0, _.jsx)(`polygon`, {
        points: `147.639,108.361 245.755,10.166 245.834,108.361 `,
      }),
    ],
  });
}
function _(_) {
  let { angle: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    style: {
      transform: `rotate(${_.angle}deg)`,
    },
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_FlatArrow`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    ..._,
    children: (0, _.jsx)(`polygon`, {
      points: `13.913,141 128,59 242.087,141 `,
      fill: _.fill || `#ffffff`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: {
      transform: `scaleX(${_.bFlipHorizontal ? -1 : 1})`,
    },
    className: `SVGIcon_Button SVGIcon_MediaControls`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        className: `Arrow`,
        _: `M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003`,
      }),
      (0, _.jsx)(`polyline`, {
        className: `preArrowBox`,
        opacity: _.bHidePreArrow ? `0` : `1`,
        points: `6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 	`,
      }),
      (0, _.jsx)(`polyline`, {
        className: `jumpAheadBox`,
        opacity: _.bShowJumpAheadBox ? `1` : `0`,
        points: `6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 	`,
      }),
      (0, _.jsx)(`polyline`, {
        className: `postArrowBox`,
        opacity: _.bHidePostArrow ? `0` : `1`,
        points: `209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 	`,
      }),
    ],
  });
}
function _(_) {
  let _ = _(`SVGIcon_Button`, `SVGIcon_SteamLogo`, _ && _.className);
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    fill: `#FFFFFF`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 256 256`,
    ..._,
    className: _,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Viewers`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        className: `frontGuy`,
        fill: `#666666`,
        _: `M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z`,
      }),
      (0, _.jsx)(`path`, {
        className: `backGuy`,
        fill: `rgb(144, 153, 161)`,
        _: `M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_5`,
    className: _(`SVGIcon_Button SVGIcon_ChatBubble`, _),
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 64 64`,
    role: `presentation`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M33,5C18.7,5,7.1,16.6,7.1,30.9c0,5.2,1.5,10.1,4.2,14.1c-0.6,3.7-4.5,10.5-6.2,13.5c-1.3,2.2,11.4-3.8,16.3-4.5c3.5,1.8,7.5,2.8,11.7,2.8c14.3,0,25.9-11.6,25.9-25.9S47.3,5,33,5z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_5`,
    className: `SVGIcon_Button SVGIcon_Globe`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 64 64`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M32.5,5C17.9,5,6,16.9,6,31.5C6,46.1,17.9,58,32.5,58S59,46.1,59,31.5C59,16.9,47.1,5,32.5,5 M32.5,54.7c-1.2,0-2.5-0.1-3.7-0.3c-1.1-1.1-2.1-2.8-3-4.8c-0.8-1.8-1.4-3.8-2-6c2.7-0.3,5.6-0.5,8.6-0.5c3,0,5.9,0.2,8.6,0.5c-0.5,2.2-1.2,4.2-2,6c-0.9,2-1.9,3.7-3,4.8C35,54.6,33.7,54.7,32.5,54.7 M32.5,41.4c-3.2,0-6.2,0.2-9,0.5c-0.6-3-0.9-6.2-1-9.6h19.9c0,3.4-0.4,6.6-1,9.6C38.7,41.6,35.7,41.4,32.5,41.4 M32.5,8.3c1.2,0,2.5,0.1,3.7,0.3c1.1,1.1,2.1,2.8,3,4.8c0.8,1.8,1.4,3.8,2,6c-2.7,0.3-5.6,0.5-8.6,0.5c-3,0-5.9-0.2-8.6-0.5c0.5-2.2,1.2-4.2,2-6c0.9-2,1.9-3.7,3-4.8C30,8.4,31.3,8.3,32.5,8.3 M32.5,21.6c3.2,0,6.2-0.2,9-0.5c0.6,3,0.9,6.2,1,9.6H22.6c0-3.4,0.4-6.6,1-9.6C26.3,21.4,29.3,21.6,32.5,21.6 M44.1,30.7c0-3.5-0.4-6.8-1-9.8c3.4-0.5,6.4-1.1,8.8-2c2.3,3.5,3.6,7.5,3.7,11.8H44.1z M20.9,30.7H9.3c0.1-4.2,1.4-8.3,3.7-11.8c2.5,0.8,5.5,1.5,8.8,2C21.3,23.9,21,27.2,20.9,30.7 M20.9,32.3c0,3.5,0.4,6.8,1,9.8c-3.4,0.5-6.4,1.1-8.8,2c-2.3-3.5-3.6-7.5-3.7-11.8H20.9z M44.1,32.3h11.6c-0.1,4.2-1.4,8.3-3.7,11.8c-2.5-0.8-5.5-1.5-8.8-2C43.7,39.1,44,35.8,44.1,32.3 M51,17.5c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-5,1.3-7.9,1.7c-0.9-4.1-2.3-7.6-4-10.1c3.8,1.1,7.3,3.1,10.2,5.9C49.6,15.9,50.3,16.6,51,17.5 M26.3,9.2c-1.7,2.5-3.1,6-4,10.1c-2.9-0.4-5.6-1-7.9-1.7c-0.1,0-0.2-0.1-0.3-0.1c0.6-0.8,1.3-1.6,2.1-2.4C19,12.2,22.5,10.2,26.3,9.2 M14,45.5c0.1,0,0.2-0.1,0.3-0.1c2.3-0.7,5-1.3,7.9-1.7c0.9,4.1,2.3,7.6,4,10.1c-3.8-1.1-7.3-3.1-10.2-5.9C15.4,47.1,14.7,46.4,14,45.5 M38.7,53.8c1.7-2.5,3.1-6,4-10.1c2.9,0.4,5.6,1,7.9,1.7c0.1,0,0.2,0.1,0.3,0.1c-0.6,0.8-1.3,1.6-2.1,2.4C46,50.8,42.5,52.8,38.7,53.8`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_5`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 64 64`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_STVTimelineGrabber`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`g`, {
        className: `leftarrow`,
        opacity: `0`,
        children: (0, _.jsx)(`polygon`, {
          points: `127.817,4.403 4,128 127.817,251.598`,
        }),
      }),
      (0, _.jsx)(`g`, {
        className: `rightarrow`,
        opacity: `0`,
        children: (0, _.jsx)(`polygon`, {
          points: `127.816,4.403 251.633,128 127.816,251.598`,
        }),
      }),
      (0, _.jsx)(`g`, {
        className: `grabber`,
        children: (0, _.jsx)(`polygon`, {
          points: `145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403`,
        }),
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_STVTimelineMarker`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`polygon`, {
        className: `pointer`,
        points: `128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 	`,
      }),
      (0, _.jsx)(`rect`, {
        className: `line`,
        _: `116.271`,
        _: `3.168`,
        width: `23.459`,
        height: `137.332`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Info`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`circle`, {
        fill: `none`,
        stroke: `#000000`,
        strokeWidth: `10`,
        strokeMiterlimit: `10`,
        _: `128`,
        _: `75.835`,
        _: `17.679`,
      }),
      (0, _.jsx)(`path`, {
        fill: `none`,
        stroke: `#000000`,
        strokeWidth: `10`,
        strokeMiterlimit: `10`,
        _: `M98.821,116.865c0,0,0.159,11,2.71,16.407 c2.451,5.198,8.789,2.938,8.789,10.33c0,13.388,0,42.604,0,42.604s-1.065,10.435,6,10.652c7.065,0.216,29.358,0,29.358,0 s0-50.383,0-68.859c0-5.181-6.328-11.135-11.848-11.135C123.181,116.865,98.821,116.865,98.821,116.865z`,
      }),
      (0, _.jsx)(`circle`, {
        fill: `none`,
        stroke: `#000000`,
        strokeWidth: `10`,
        strokeMiterlimit: `10`,
        _: `128`,
        _: `128`,
        _: `122.334`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_3`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Twitter`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`path`, {
      _: `M250.151,128.021c0,67.418-54.604,122.022-122.022,122.022S6.107,195.439,6.107,128.021C6.107,60.604,60.712,6,128.129,6 S250.151,60.604,250.151,128.021z M105.799,192.389c54.117,0,83.707-44.842,83.707-83.707c0-1.282,0-2.563-0.062-3.783 c5.736-4.148,10.739-9.335,14.705-15.252c-5.247,2.318-10.922,3.905-16.901,4.637c6.103-3.661,10.738-9.396,12.936-16.29 c-5.675,3.355-11.959,5.796-18.67,7.138c-5.369-5.734-12.995-9.273-21.477-9.273c-16.228,0-29.406,13.179-29.406,29.407 c0,2.318,0.243,4.576,0.793,6.711c-24.466-1.22-46.125-12.934-60.646-30.75c-2.501,4.332-3.965,9.396-3.965,14.765 c0,10.189,5.186,19.218,13.117,24.465c-4.819-0.122-9.334-1.464-13.3-3.661c0,0.122,0,0.244,0,0.366 c0,14.275,10.128,26.113,23.611,28.857c-2.44,0.672-5.064,1.039-7.748,1.039c-1.892,0-3.723-0.184-5.553-0.551 c3.722,11.714,14.581,20.195,27.455,20.44c-10.067,7.868-22.757,12.566-36.546,12.566c-2.379,0-4.697-0.122-7.016-0.427 C73.707,187.507,89.204,192.389,105.799,192.389`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_3`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TwitchTV`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`path`, {
      _: `M28.176,8.026L11.763,49.97v171.427h58.358v31.003h32.826l31.003-31.003h47.414l63.829-63.829V8.026H28.176z M223.311,146.625l-36.474,36.474h-58.359l-31.002,31.003v-31.003H48.237V29.91h175.074V146.625z M186.837,71.855v63.829h-21.885 V71.855H186.837z M128.478,71.855v63.829h-21.883V71.855H128.478z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_CSGO`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_ClosedCaption`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        className: `CCBox`,
        fill: `none`,
        stroke: `#000000`,
        strokeWidth: `10`,
        strokeMiterlimit: `10`,
        _: `M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z`,
      }),
      (0, _.jsx)(`path`, {
        className: `C1`,
        _: `M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z`,
      }),
      (0, _.jsx)(`path`, {
        className: `C1`,
        _: `M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z`,
      }),
    ],
  });
}
function _(_) {
  let _ = _(
    _.className,
    `SVGIcon_Button`,
    _.filled ? `SVGIcon_Star_Filled` : `SVGIcon_Star_Unfilled`,
  );
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`path`, {
      fill: _.filled ? `currentColor` : `none`,
      stroke: `currentColor`,
      strokeWidth: `10`,
      strokeMiterlimit: `10`,
      _: `M127.755,18.624 c-2.061,0.101-3.846,1.465-4.485,3.427L98.312,96.933H18.379c-2.745,0.01-4.963,2.242-4.955,4.989 c0.006,1.572,0.754,3.05,2.019,3.984l64.925,47.476L55.41,230.873c-0.848,2.612,0.582,5.417,3.192,6.265 c1.521,0.495,3.186,0.228,4.475-0.719L128,188.945l64.926,47.474c2.212,1.624,5.324,1.144,6.947-1.071 c0.944-1.29,1.211-2.954,0.719-4.475l-24.959-77.492l64.922-47.476c2.211-1.63,2.681-4.743,1.049-6.953 c-0.934-1.265-2.41-2.015-3.984-2.02H157.69l-24.959-74.882C132.033,19.917,129.997,18.513,127.755,18.624z`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Download`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: [
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M29 23V27H7V23H2V32H34V23H29Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`svg`, {
        _: `0`,
        _: `0`,
        width: `32`,
        height: `25`,
        children: (0, _.jsx)(`path`, {
          className: `DownloadArrow`,
          _: `M20 14.1716L24.5858 9.58578L27.4142 12.4142L18 21.8284L8.58582 12.4142L11.4142 9.58578L16 14.1715V2H20V14.1716Z`,
          fill: `currentColor`,
        }),
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_3`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Filter`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`path`, {
      _: `M236.445,23.522c-1.085-2.35-3.438-3.855-6.025-3.855H25.58c-2.586,0-4.936,1.501-6.024,3.855 c-1.08,2.349-0.698,5.112,0.983,7.083l80.328,94.039v104.181c0,2.74,1.682,5.194,4.237,6.188c0.778,0.3,1.588,0.445,2.392,0.445 c1.832,0,3.626-0.762,4.91-2.17l41.012-45.13c1.111-1.219,1.724-2.811,1.724-4.459v-59.054l80.325-94.04 C237.144,28.634,237.526,25.867,236.445,23.522z`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Edit`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M16.757,233.795c-1.324,3.973,2.455,7.752,6.427,6.428l50.912-16.971l-40.368-40.367L16.757,233.795z`,
      }),
      (0, _.jsx)(`rect`, {
        _: `83.614`,
        _: `75.466`,
        transform: `matrix(-0.7071 -0.7071 0.7071 -0.7071 93.7468 324.5916)`,
        width: `60.971`,
        height: `134.827`,
      }),
      (0, _.jsx)(`rect`, {
        _: `149.28`,
        _: `68.116`,
        transform: `matrix(-0.7071 -0.7071 0.7071 -0.7071 252.0431 259.4951)`,
        width: `60.971`,
        height: `18.862`,
      }),
      (0, _.jsx)(`path`, {
        _: `M233.545,37.803l-14.368-14.369c-7.928-7.928-20.846-7.897-28.809,0.064l-14.305,14.307l43.112,43.111l14.306-14.305 C241.511,58.582,241.513,45.771,233.545,37.803z`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Information`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`polyline`, {
        className: `I`,
        points: `86.883,110.957 152.894,110.957 152.894,181.406 177.117,181.406 177.117,202.485 86.883,202.485 86.883,181.775 109.441,181.775 109.441,130.372 86.883,130.372 `,
      }),
      (0, _.jsx)(`circle`, {
        className: `I`,
        _: `128.47`,
        _: `67.607`,
        _: `25.517`,
      }),
      (0, _.jsx)(`circle`, {
        fill: `none`,
        stroke: `#000000`,
        strokeWidth: `14`,
        strokeMiterlimit: `10`,
        _: `128`,
        _: `128`,
        _: `116.833`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_AppleLogo`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    className: `SVGIcon_Button SVGIcon_WindowsLogo`,
    width: `100%`,
    height: `100%`,
    viewBox: `0 0 128 128`,
    enableBackground: `new 0 0 128 128`,
    ..._,
    children: [
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `60.834`,
        height: `60.835`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.165`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.835`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.164`,
        fill: `currentColor`,
        width: `60.834`,
        height: `60.836`,
      }),
      (0, _.jsx)(`rect`, {
        _: `67.165`,
        _: `67.164`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.836`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`circle`, {
        _: `126`,
        _: `134`,
        _: `20.6`,
      }),
      (0, _.jsx)(`circle`, {
        _: `189.4`,
        _: `134`,
        _: `20.6`,
      }),
      (0, _.jsx)(`circle`, {
        _: `62.6`,
        _: `134`,
        _: `20.6`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 18 18`,
    version: `1.1`,
    _: `0px`,
    _: `0px`,
    fillRule: `evenodd`,
    clipRule: `evenodd`,
    strokeLinejoin: `round`,
    strokeMiterlimit: `1.41421`,
    children: (0, _.jsx)(`path`, {
      _: `M12.621,2.491c-0.021,0.019 -0.042,0.039 -0.063,0.06l-5.125,5.201c-0.579,0.587 -0.575,1.527 -0.001,2.109l0.691,0.702c0.576,0.584 1.505,0.582 2.079,-0.001l5.126,-5.201c0.021,-0.021 0.04,-0.042 0.059,-0.063l1.573,1.595c0.573,0.582 1.04,0.386 1.04,-0.439l0,-5.957c0,-0.276 -0.219,-0.497 -0.49,-0.497l-5.87,0c-0.82,0 -1.008,0.473 -0.434,1.056l1.415,1.435Zm-9.618,-2.491c-1.665,0 -3.003,1.344 -3.003,3.003l0,11.994c0,1.665 1.344,3.003 3.003,3.003l11.994,0c1.665,0 3.003,-1.344 3.003,-3.003l0,-7.746l0,4.249l-3,-2.488l0,4.492c0,0.826 -0.671,1.496 -1.496,1.496l-9.008,0c-0.826,0 -1.496,-0.671 -1.496,-1.496l0,-9.008c0,-0.826 0.671,-1.496 1.496,-1.496l4.504,0l-2.5,-3l4.249,0l-7.746,0Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 100 100`,
    _: `0px`,
    _: `0px`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M50,7A43,43,0,1,1,7,50,43,43,0,0,1,50,7m0-7a50,50,0,1,0,50,50A50,50,0,0,0,50,0h0Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M50.79,25a45.51,45.51,0,0,1,5.29.87c5.33,1.51,8.5,5.77,8.9,11.43a10.4,10.4,0,0,1-4.21,9.5c-1.42,1.1-2.91,2.1-4.34,3.18a7.06,7.06,0,0,0-3.18,6.3,4,4,0,0,1-2.88,4,4.42,4.42,0,0,1-5.18-1.55,4.19,4.19,0,0,1-.59-2.07A13.89,13.89,0,0,1,50.3,45,41.55,41.55,0,0,0,54.83,41,5,5,0,0,0,56,38.19c0.23-2.83-1.59-4.65-4.52-4.84-3.54-.23-6.52.69-8.6,3.82a4.19,4.19,0,0,1-4.35,2c-3-.5-4.29-2.94-3.06-5.75a12.84,12.84,0,0,1,6.25-6.2A21.71,21.71,0,0,1,50.79,25Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M53.78,69.88C53.8,73.09,52,75,48.85,75s-5.25-1.84-5.26-4.53c0-3.73,1.67-5.59,5-5.69C51.3,64.7,54.12,66.36,53.78,69.88Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M2 4V20V24L7 20H24V4H2ZM34 12V32L29 28H12V24H28V12H34Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _.className,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 409.6 409.6`,
    children: (0, _.jsx)(`path`, {
      _: `M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1
				c-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2
				l0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27
				c0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3
				l-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8
				c-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14
				c-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3
				c-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    width: `100%`,
    height: `100%`,
    viewBox: `0 0 50 50`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `0`,
        _: `10`,
        width: `40`,
        height: `5`,
        _: `5`,
      }),
      (0, _.jsx)(`rect`, {
        _: `0`,
        _: `20`,
        width: `40`,
        height: `5`,
        _: `5`,
      }),
      (0, _.jsx)(`rect`, {
        _: `0`,
        _: `30`,
        width: `40`,
        height: `5`,
        _: `5`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    height: `100px`,
    width: `100px`,
    fill: `#000000`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 101 101`,
    enableBackground: `new 0 0 101 101`,
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    children: (0, _.jsxs)(`g`, {
      children: [
        (0, _.jsx)(`path`, {
          _: `M16.929,30.115 M84.446,84.262c0-37.271-30.323-67.613-67.587-67.613l0,0l0.069,13.467   c29.777,0.039,53.995,24.256,54.051,54.042L84.446,84.262z`,
        }),
        (0, _.jsx)(`path`, {
          _: `M16.843,53.089 M61.472,84.262c0-24.616-20.026-44.639-44.628-44.639l0,0v13.466c17.182,0,31.161,13.984,31.161,31.173   H61.472z`,
        }),
        (0, _.jsx)(`circle`, {
          _: `26.695`,
          _: `74.305`,
          _: `9.812`,
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 100 100`,
    ..._,
    children: (0, _.jsx)(`polygon`, {
      stroke: `currentColor`,
      fill: `currentColor`,
      points: `50 4.7 61.1 38.9 97.2 38.9 68 60.1 79.2 94.4 50 73.2 20.8 94.4 32 60.1 2.8 38.9 38.9 38.9 50 4.7`,
      strokeLinejoin: `round`,
      strokeWidth: `5`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 100 100`,
    ..._,
    children: (0, _.jsx)(`polygon`, {
      stroke: `currentColor`,
      fill: `none`,
      points: `50 4.7 61.1 38.9 97.2 38.9 68 60.1 79.2 94.4 50 73.2 20.8 94.4 32 60.1 2.8 38.9 38.9 38.9 50 4.7`,
      strokeLinejoin: `round`,
      strokeWidth: `5`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 1200 1200`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M600,96c-277.2,0-504,226.8-504,504s226.8,504,504,504,504-226.8,504-504S877.2,96,600,96ZM600,222c83.2,0,158.8,26.5,220.5,70.6L292.6,820.5c-44.1-61.7-70.6-137.3-70.6-220.5,0-209.2,168.8-378,378-378ZM907.4,379.5c44.1,61.7,70.6,137.3,70.6,220.5,0,209.2-168.8,378-378,378s-158.8-26.5-220.5-70.6L907.4,379.5Z`,
      strokeWidth: `0`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 32 32`,
    enableBackground: `new 0 0 32 32`,
    children: (0, _.jsx)(`path`, {
      fill: `white`,
      _: `M24.68,19.53l6.9-5.69c0.98-0.81,0.47-2.39-0.81-2.46l-8.89-0.54c-0.54-0.03-1.01-0.37-1.21-0.88L17.4,1.61
			c-0.47-1.18-2.12-1.18-2.59,0l-3.27,8.32c-0.2,0.51-0.67,0.84-1.21,0.88l-8.92,0.54c-1.28,0.07-1.78,1.65-0.81,2.46l6.9,5.66
			c0.4,0.34,0.61,0.91,0.47,1.41l-2.26,8.65c-0.3,1.21,1.01,2.19,2.09,1.52l7.51-4.81c0.47-0.3,1.04-0.3,1.48,0l7.54,4.81
			c1.08,0.67,2.39-0.3,2.09-1.52l-2.26-8.62C24.07,20.4,24.24,19.86,24.68,19.53z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 32 32`,
    enableBackground: `new 0 0 32 32`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        fill: `white`,
        _: `M28.4,1.49H3.79c-1.99,0-3.6,1.61-3.6,3.6v14.88c0,1.99,1.61,3.6,3.6,3.6h2.37c0,1.61-0.38,3.7-1.51,5.88
			c-0.28,0.57-0.19,1.33,0.19,1.8c0.28,0.38,0.76,0.47,1.14,0.47c0.19,0,0.38,0,0.57-0.09c4.07-1.61,7.57-5.59,9.47-8.05h12.4
			c1.99,0,3.6-1.61,3.6-3.6V5.1C31.91,3.11,30.3,1.49,28.4,1.49z M8.23,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37
			s2.37,1.04,2.37,2.37S9.56,14.97,8.23,14.97z M15.99,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37
			c1.33,0,2.37,1.04,2.37,2.37S17.32,14.97,15.99,14.97z M23.85,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37
			c1.33,0,2.37,1.04,2.37,2.37S25.18,14.97,23.85,14.97z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 32 32`,
    enableBackground: `new 0 0 32 32`,
    children: (0, _.jsxs)(`g`, {
      children: [
        (0, _.jsx)(`path`, {
          fill: `white`,
          _: `M23.32,28.28C23,25.55,20.68,23.52,18,23.52h-3.78c-2.73,0-5,2.03-5.33,4.76L8.56,30.8h15.09L23.32,28.28z`,
        }),
        (0, _.jsx)(`path`, {
          fill: `white`,
          _: `M16.08,22.15c2.82,0,5.1-2.28,5.1-5.1c0-2.82-2.28-5.1-5.1-5.1s-5.1,2.28-5.1,5.1
			C10.98,19.86,13.27,22.15,16.08,22.15z`,
        }),
        (0, _.jsxs)(`g`, {
          children: [
            (0, _.jsx)(`path`, {
              fill: `white`,
              _: `M24.09,10.21c-0.94-1.22-2.18-2.23-3.57-2.9c-1.39-0.68-2.94-1.02-4.48-1.01l-0.02,0L16,6.3
				c-0.03,0-0.05,0-0.08,0c-1.52,0-3.04,0.35-4.4,1.01c-1.39,0.68-2.62,1.68-3.57,2.9c-0.94,1.22-1.6,2.67-1.91,4.18
				c-0.3,1.51-0.25,3.1,0.15,4.59c0.14,0.55,0.62,0.92,1.18,0.92c0.01,0,0.02,0,0.04,0h0.27l0.03-0.01c0.32-0.08,0.59-0.29,0.76-0.57
				l0.07-0.1c0.14-0.21,0.18-0.46,0.11-0.7L8.6,18.38c-0.18-0.62-0.27-1.27-0.29-1.92c0-4.24,3.45-7.68,7.69-7.68h0.04
				c4.24,0,7.69,3.45,7.69,7.68c-0.02,0.65-0.11,1.3-0.29,1.92l-0.04,0.15c-0.07,0.24-0.03,0.49,0.11,0.7l0.07,0.1
				c0.17,0.28,0.44,0.49,0.76,0.57l0.03,0.01l0.26,0c0.01,0,0.02,0,0.04,0c0.56,0,1.04-0.37,1.18-0.92c0.4-1.49,0.46-3.08,0.15-4.59
				C25.69,12.88,25.04,11.44,24.09,10.21z`,
            }),
            (0, _.jsx)(`path`, {
              fill: `white`,
              _: `M16.02,0.68c-8.83,0-15.99,7.16-16,15.99h0.01c-0.02,2.68,0.74,5.31,2.18,7.57l0,0.01l0.01,0.01
				c0.37,0.43,1,0.51,1.47,0.19c0.47-0.32,0.62-0.94,0.36-1.44l0,0l0,0c-1.19-1.89-1.81-4.09-1.79-6.32v0v0
				c0-7.6,6.16-13.76,13.76-13.76c7.6,0,13.76,6.16,13.76,13.76v0v0c0.03,2.24-0.59,4.43-1.79,6.32l0,0l0,0
				c-0.26,0.5-0.11,1.12,0.36,1.44c0.47,0.32,1.1,0.24,1.47-0.19l0.01-0.01l0-0.01c1.45-2.26,2.2-4.89,2.18-7.57h0.01
				C32.02,7.84,24.86,0.68,16.02,0.68`,
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    ..._,
    height: `100px`,
    width: `100px`,
    fill: `#000000`,
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 32 32`,
    _: `0px`,
    _: `0px`,
    children: (0, _.jsx)(`path`, {
      _: `M26.286 0c-3.142 0-5.714 2.572-5.714 5.714 0 0.512 0.074 1.006 0.202 1.479l-10.573 5.287c-1.049-1.332-2.67-2.194-4.487-2.194-3.142 0-5.714 2.572-5.714 5.714s2.572 5.714 5.714 5.714c1.815 0 3.437-0.862 4.486-2.193l10.574 5.287c-0.127 0.473-0.202 0.966-0.202 1.478 0 3.142 2.572 5.714 5.714 5.714s5.714-2.572 5.714-5.714c0-3.142-2.572-5.714-5.714-5.714-1.817 0-3.438 0.862-4.487 2.194l-10.573-5.287c0.128-0.473 0.202-0.967 0.202-1.479s-0.074-1.005-0.202-1.478l10.574-5.287c1.049 1.331 2.67 2.193 4.486 2.193 3.142 0 5.714-2.572 5.714-5.714s-2.572-5.714-5.714-5.714zM26.286 2.286c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM5.714 12.571c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM26.286 22.857c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    ..._,
    fill: `#000000`,
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 16 16`,
    _: `0px`,
    _: `0px`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M8,11c-0.2,0-0.5-0.1-0.6-0.2c-0.2-0.2-0.3-0.3-0.3-0.6l0-7.7L5.7,3.6C5.5,3.8,5.3,3.9,5.1,3.9
					c-0.2,0-0.4-0.1-0.6-0.2C4.4,3.5,4.3,3.4,4.3,3.2c0-0.2,0.1-0.4,0.3-0.5l2.7-2.4C7.5,0.1,7.7,0,8,0s0.5,0.1,0.7,0.3l2.8,2.4
					c0.2,0.2,0.3,0.3,0.3,0.5c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.6-0.2L8.8,2.5l0,7.7
					c0,0.2-0.1,0.4-0.3,0.6C8.4,10.9,8.2,11,8,11z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M4,16c-0.8,0-1.3-0.2-1.7-0.6c-0.4-0.4-0.6-0.9-0.6-1.7V7.9c0-0.7,0.2-1.3,0.6-1.7c0.4-0.4,1-0.6,1.7-0.6h1.9
				V7H4.1c-0.7,0-1,0.3-1,1v5.6c0,0.7,0.3,1,1,1h7.9c0.3,0,0.6-0.1,0.7-0.3c0.2-0.2,0.3-0.4,0.3-0.7V8c0-0.3-0.1-0.6-0.3-0.7
				C12.5,7.1,12.2,7,11.9,7h-1.8V5.6H12c0.8,0,1.3,0.2,1.7,0.6c0.4,0.4,0.6,0.9,0.6,1.7v5.8c0,0.7-0.2,1.3-0.6,1.7
				c-0.4,0.4-1,0.6-1.7,0.6H4z`,
      }),
    ],
  });
}
function _(_) {
  let [_, _] = _.useState(!1);
  return (
    _.useEffect(() => {
      _() && _(!0);
    }, []),
    _
      ? (0, _.jsx)(_, {
          ..._,
        })
      : (0, _.jsx)(_, {
          ..._,
        })
  );
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, _, _),
    ..._,
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, _, _),
    ..._,
    viewBox: `0 0 48 48`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M24.0001 45.6002C35.9295 45.6002 45.6002 35.9295 45.6002 24.0001C45.6002 12.0708 35.9295 2.40015 24.0001 2.40015C12.0708 2.40015 2.40015 12.0708 2.40015 24.0001C2.40015 35.9295 12.0708 45.6002 24.0001 45.6002ZM20.6659 36H27.3326V22.6667H20.6659V36ZM21.777 19.3259C22.4348 19.7654 23.2081 20 23.9993 20C25.0601 20 26.0775 19.5786 26.8277 18.8285C27.5778 18.0783 27.9993 17.0609 27.9993 16C27.9993 15.2089 27.7647 14.4355 27.3251 13.7777C26.8856 13.1199 26.2609 12.6073 25.53 12.3045C24.7991 12.0018 23.9948 11.9225 23.2189 12.0769C22.443 12.2312 21.7302 12.6122 21.1708 13.1716C20.6114 13.731 20.2305 14.4437 20.0761 15.2197C19.9218 15.9956 20.001 16.7999 20.3037 17.5308C20.6065 18.2617 21.1192 18.8864 21.777 19.3259Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, _, _),
    ..._,
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, _, _),
    ..._,
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, _, _),
    ..._,
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, _, _),
    ..._,
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    width: `23`,
    height: `25`,
    viewBox: `0 0 23 25`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M22.0115 5.65L17.5448 0.763889C17.325 0.523608 17.0577 0.331628 16.7598 0.200128C16.4619 0.0686279 16.1399 0.000477439 15.8143 0H3.18649C2.56493 0.000735139 1.96903 0.247974 1.52952 0.687484C1.09002 1.12699 0.842776 1.72288 0.842041 2.34444V22.6556C0.842776 23.2771 1.09002 23.873 1.52952 24.3125C1.96903 24.752 2.56493 24.9993 3.18649 25H20.2809C20.9025 24.9993 21.4984 24.752 21.9379 24.3125C22.3774 23.873 22.6246 23.2771 22.6254 22.6556V7.22222C22.6236 6.64001 22.4047 6.0794 22.0115 5.65ZM20.5309 6.34722H17.6532C17.5498 6.34686 17.4476 6.32606 17.3523 6.28601C17.257 6.24596 17.1706 6.18745 17.0981 6.11387C17.0255 6.04028 16.9683 5.95306 16.9296 5.85724C16.8909 5.76142 16.8715 5.65889 16.8726 5.55556V2.34444L20.5309 6.34722ZM20.2809 23.4389H3.18649C2.97873 23.4389 2.77949 23.3564 2.63259 23.2095C2.48568 23.0626 2.40315 22.8633 2.40315 22.6556V2.34444C2.40315 2.13669 2.48568 1.93745 2.63259 1.79054C2.77949 1.64364 2.97873 1.56111 3.18649 1.56111H15.3087V5.55556C15.3094 6.17712 15.5567 6.77301 15.9962 7.21252C16.4357 7.65203 17.0316 7.89926 17.6532 7.9H21.0643V22.6556C21.0635 22.8631 20.9808 23.0619 20.834 23.2086C20.6873 23.3554 20.4885 23.4382 20.2809 23.4389Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    width: `23`,
    height: `25`,
    viewBox: `0 0 23 25`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M4.69484 16.275V10.9611C4.69484 10.8919 4.72235 10.8255 4.77132 10.7765C4.82028 10.7275 4.8867 10.7 4.95595 10.7H6.70039C7.00391 10.6976 7.30673 10.7293 7.60317 10.7945C7.86613 10.8506 8.11537 10.9582 8.33651 11.1111C8.54843 11.2597 8.71945 11.4594 8.83373 11.6917C8.96393 11.9704 9.02673 12.2759 9.01706 12.5833C9.02406 12.8888 8.96136 13.1919 8.83373 13.4695C8.71807 13.7108 8.54784 13.9219 8.33651 14.0861C8.12019 14.2512 7.87401 14.3729 7.61151 14.4445C7.32667 14.5238 7.03217 14.563 6.73651 14.5611H6.26984C6.20107 14.5619 6.13537 14.5897 6.087 14.6386C6.03863 14.6875 6.0115 14.7535 6.01151 14.8222V16.2778C6.01151 16.347 5.984 16.4135 5.93503 16.4624C5.88606 16.5114 5.81965 16.5389 5.75039 16.5389H4.95595C4.92143 16.5389 4.88724 16.5321 4.85538 16.5188C4.82352 16.5055 4.79461 16.486 4.77033 16.4614C4.74604 16.4369 4.72687 16.4078 4.71391 16.3758C4.70095 16.3438 4.69447 16.3095 4.69484 16.275ZM6.01151 13.25C6.0115 13.3188 6.03863 13.3848 6.087 13.4337C6.13537 13.4826 6.20107 13.5104 6.26984 13.5111H6.65595C7.37076 13.5111 7.72817 13.2009 7.72817 12.5806C7.74184 12.4583 7.72341 12.3345 7.6747 12.2215C7.62599 12.1085 7.54868 12.0102 7.4504 11.9361C7.1968 11.7937 6.90728 11.7281 6.61706 11.7472H6.26984C6.20107 11.748 6.13537 11.7758 6.087 11.8247C6.03863 11.8736 6.0115 11.9396 6.01151 12.0084V13.25Z`,
        fill: `white`,
      }),
      (0, _.jsx)(`path`, {
        _: `M11.3615 16.6417C10.9725 16.6403 10.5869 16.5697 10.2226 16.4334C9.93059 16.3269 9.65765 16.174 9.41429 15.9806C9.38607 15.9594 9.36245 15.9327 9.34485 15.9021C9.32725 15.8715 9.31603 15.8376 9.31187 15.8026C9.30772 15.7675 9.31072 15.732 9.32068 15.6981C9.33064 15.6643 9.34737 15.6328 9.36984 15.6056L9.78929 15.0917C9.83025 15.0411 9.889 15.008 9.95353 14.9992C10.0181 14.9904 10.0835 15.0066 10.1365 15.0445C10.2956 15.1588 10.4659 15.2565 10.6448 15.3361C10.879 15.4453 11.1338 15.503 11.3921 15.5056C11.6097 15.5234 11.8272 15.4698 12.0115 15.3528C12.076 15.3059 12.128 15.2439 12.1629 15.1722C12.1977 15.1005 12.2144 15.0214 12.2115 14.9417C12.2138 14.8609 12.1936 14.7811 12.1532 14.7111C12.111 14.6405 12.053 14.5806 11.9837 14.5361C11.8965 14.4784 11.8034 14.43 11.706 14.3917L11.3615 14.2445L10.6226 13.9222C10.4687 13.8616 10.3224 13.7833 10.1865 13.6889C10.0391 13.5959 9.90538 13.4828 9.78929 13.3528C9.67576 13.2204 9.58643 13.069 9.5254 12.9056C9.45716 12.7217 9.42418 12.5266 9.42818 12.3306C9.43275 12.1002 9.48774 11.8736 9.58929 11.6667C9.69168 11.453 9.83847 11.2636 10.0198 11.1111C10.2145 10.9475 10.4377 10.8213 10.6782 10.7389C10.9462 10.6466 11.228 10.6006 11.5115 10.6028C11.857 10.6045 12.1991 10.6715 12.5198 10.8C12.7638 10.8972 12.9914 11.0312 13.1948 11.1972C13.2462 11.2428 13.2789 11.3057 13.2866 11.374C13.2943 11.4422 13.2764 11.5108 13.2365 11.5667L12.8726 12.0139C12.833 12.0643 12.7759 12.0981 12.7126 12.1083C12.6493 12.1186 12.5845 12.1048 12.531 12.0695C12.4099 11.9884 12.2815 11.9186 12.1476 11.8611C11.9458 11.779 11.7294 11.7384 11.5115 11.7417C11.3163 11.7282 11.1219 11.7769 10.956 11.8806C10.8919 11.9227 10.8399 11.9806 10.8048 12.0487C10.7698 12.1169 10.7529 12.1929 10.756 12.2695C10.7537 12.3505 10.777 12.4302 10.8226 12.4972C10.8731 12.5653 10.9363 12.6228 11.0087 12.6667C11.0975 12.7218 11.1904 12.7701 11.2865 12.8111L11.6365 12.9584L12.3865 13.2611C12.7093 13.3858 12.9957 13.5892 13.2198 13.8528C13.437 14.1374 13.5462 14.4897 13.5282 14.8472C13.5291 15.0857 13.4789 15.3215 13.381 15.5389C13.2905 15.7549 13.1562 15.9497 12.9865 16.1111C12.7803 16.2816 12.5437 16.4117 12.2893 16.4945C11.991 16.5975 11.677 16.6474 11.3615 16.6417Z`,
        fill: `white`,
      }),
      (0, _.jsx)(`path`, {
        _: `M14.2003 16.275V10.9611C14.2003 10.8924 14.2275 10.8264 14.2758 10.7775C14.3242 10.7286 14.3899 10.7008 14.4587 10.7H15.8476C16.2566 10.6955 16.6639 10.7526 17.0559 10.8695C17.3969 10.9728 17.7108 11.1502 17.9753 11.3889C18.24 11.6387 18.4426 11.9469 18.567 12.2889C18.7124 12.7056 18.7821 13.1449 18.7725 13.5861C18.7813 14.03 18.7117 14.472 18.567 14.8917C18.4447 15.2376 18.2452 15.551 17.9837 15.8084C17.7297 16.058 17.4231 16.2478 17.0864 16.3639C16.7092 16.488 16.3141 16.549 15.917 16.5445H14.4587C14.4239 16.5441 14.3895 16.5368 14.3576 16.523C14.3257 16.5092 14.2969 16.4892 14.2728 16.4641C14.2488 16.439 14.23 16.4093 14.2175 16.3769C14.2051 16.3444 14.1992 16.3098 14.2003 16.275ZM15.5142 15.4695H15.7642C15.9985 15.4747 16.2321 15.4418 16.4559 15.3722C16.652 15.3101 16.8303 15.2015 16.9753 15.0556C17.1218 14.8888 17.229 14.6914 17.2892 14.4778C17.3762 14.1907 17.4166 13.8916 17.4087 13.5917C17.4164 13.2964 17.3761 13.0018 17.2892 12.7195C17.2226 12.5103 17.1075 12.3199 16.9531 12.1639C16.8157 12.0212 16.6448 11.9152 16.4559 11.8556C16.2346 11.7928 16.0053 11.7629 15.7753 11.7667H15.5253L15.5142 15.4695Z`,
        fill: `white`,
      }),
      (0, _.jsx)(`path`, {
        _: `M22.0115 5.65L17.5448 0.763889C17.325 0.523608 17.0577 0.331628 16.7598 0.200128C16.4619 0.0686279 16.1399 0.000477439 15.8143 0H3.18649C2.56493 0.000735139 1.96903 0.247974 1.52952 0.687484C1.09002 1.12699 0.842776 1.72288 0.842041 2.34444V22.6556C0.842776 23.2771 1.09002 23.873 1.52952 24.3125C1.96903 24.752 2.56493 24.9993 3.18649 25H20.2809C20.9025 24.9993 21.4984 24.752 21.9379 24.3125C22.3774 23.873 22.6246 23.2771 22.6254 22.6556V7.22222C22.6236 6.64001 22.4047 6.0794 22.0115 5.65ZM20.5309 6.34722H17.6532C17.5498 6.34686 17.4476 6.32606 17.3523 6.28601C17.257 6.24596 17.1706 6.18745 17.0981 6.11387C17.0255 6.04028 16.9683 5.95306 16.9296 5.85724C16.8909 5.76142 16.8715 5.65889 16.8726 5.55556V2.34444L20.5309 6.34722ZM20.2809 23.4389H3.18649C2.97873 23.4389 2.77949 23.3564 2.63259 23.2095C2.48568 23.0626 2.40315 22.8633 2.40315 22.6556V2.34444C2.40315 2.13669 2.48568 1.93745 2.63259 1.79054C2.77949 1.64364 2.97873 1.56111 3.18649 1.56111H15.3087V5.55556C15.3094 6.17712 15.5567 6.77301 15.9962 7.21252C16.4357 7.65203 17.0316 7.89926 17.6532 7.9H21.0643V22.6556C21.0635 22.8631 20.9808 23.0619 20.834 23.2086C20.6873 23.3554 20.4885 23.4382 20.2809 23.4389Z`,
        fill: `white`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    width: `24`,
    height: `25`,
    viewBox: `0 0 24 25`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M5.83642 17.6544L11.1103 8.49123C11.3014 8.11205 11.3354 7.67284 11.2048 7.2688C11.0743 6.86477 10.7898 6.52846 10.4129 6.33279C10.0085 6.09741 9.52857 6.02807 9.07408 6.13935C8.71066 6.24593 8.40357 6.49087 8.21885 6.82149L4.65539 13.027C4.58789 13.1445 4.56981 13.2839 4.60513 13.4147C4.64045 13.5455 4.72628 13.6569 4.84375 13.7244C4.96121 13.7919 5.10067 13.81 5.23146 13.7747C5.36226 13.7394 5.47366 13.6535 5.54116 13.5361L9.10462 7.33056C9.15274 7.23444 9.23692 7.16124 9.33879 7.12693C9.43346 7.10335 9.53194 7.09931 9.62821 7.11507C9.72449 7.13082 9.81655 7.16604 9.89876 7.21856C10.0402 7.28047 10.153 7.39363 10.2143 7.5353C10.2757 7.67697 10.2812 7.83663 10.2297 7.98216L4.95574 17.1453C4.85186 17.316 4.7119 17.4618 4.5457 17.5726C4.37949 17.6834 4.19106 17.7565 3.99361 17.7868C3.51917 17.8652 3.03226 17.7733 2.61913 17.5271C1.74354 17.0181 1.36174 15.9999 1.77917 15.3025L7.29744 5.71682C7.61091 5.20551 8.11435 4.83937 8.69737 4.69869C9.53455 4.49469 10.4184 4.63011 11.1562 5.0754C12.5968 5.90518 13.1924 7.55964 12.5154 8.75594L10.5555 12.1514C10.5186 12.2093 10.4939 12.2741 10.4827 12.3419C10.4716 12.4096 10.4743 12.4789 10.4906 12.5456C10.507 12.6123 10.5366 12.675 10.5778 12.7299C10.619 12.7849 10.6709 12.8309 10.7303 12.8652C10.7897 12.8996 10.8555 12.9216 10.9237 12.9299C10.9918 12.9381 11.061 12.9325 11.1269 12.9134C11.1928 12.8943 11.2542 12.862 11.3074 12.8185C11.3605 12.7751 11.4043 12.7213 11.4361 12.6605L13.396 9.26501C14.3684 7.58 13.5946 5.30448 11.6652 4.17435C10.6915 3.59863 9.53056 3.4286 8.43265 3.70092C8.00868 3.80714 7.61018 3.99694 7.26052 4.25918C6.91086 4.52143 6.61708 4.85085 6.39639 5.22812L0.883219 14.7935C0.190891 15.9999 0.735591 17.6188 2.11007 18.4078C2.58193 18.6822 3.1169 18.8296 3.66271 18.8354C3.8334 18.8348 4.00372 18.8194 4.17178 18.7896C4.51534 18.7335 4.84242 18.6028 5.13002 18.4066C5.41762 18.2105 5.65874 17.9537 5.83642 17.6544Z`,
        fill: `white`,
      }),
      (0, _.jsx)(`path`, {
        _: `M23.6994 4.07252L19.9272 0.300349C19.8325 0.205068 19.7199 0.129475 19.5958 0.0779264C19.4717 0.0263781 19.3387 -0.000106136 19.2044 3.19658e-07H5.96866C5.6194 0.00268705 5.28535 0.143319 5.03933 0.391246C4.79331 0.639173 4.65526 0.974294 4.65527 1.32357V4.58159C4.65527 4.7166 4.70891 4.84608 4.80438 4.94155C4.89984 5.03702 5.02933 5.09065 5.16434 5.09065C5.29935 5.09065 5.42883 5.03702 5.5243 4.94155C5.61977 4.84608 5.6734 4.7166 5.6734 4.58159V1.32357C5.6734 1.24256 5.70558 1.16487 5.76286 1.10759C5.82015 1.05031 5.89784 1.01813 5.97884 1.01813H19.2145L22.9816 4.7903V23.1166C22.9816 23.1977 22.9494 23.2753 22.8922 23.3326C22.8349 23.3899 22.7572 23.4221 22.6762 23.4221H5.97884C5.89784 23.4221 5.82015 23.3899 5.76286 23.3326C5.70558 23.2753 5.6734 23.1977 5.6734 23.1166V19.8535C5.6734 19.7185 5.61977 19.589 5.5243 19.4936C5.42883 19.3981 5.29935 19.3445 5.16434 19.3445C5.02933 19.3445 4.89984 19.3981 4.80438 19.4936C4.70891 19.589 4.65527 19.7185 4.65527 19.8535V23.1116C4.65527 23.4626 4.79472 23.7992 5.04294 24.0475C5.29116 24.2957 5.62781 24.4351 5.97884 24.4351H22.6762C23.0268 24.4338 23.3627 24.2939 23.6106 24.046C23.8585 23.7981 23.9984 23.4622 23.9997 23.1116V4.78521C23.9973 4.51739 23.8894 4.26133 23.6994 4.07252Z`,
        fill: `white`,
      }),
      (0, _.jsx)(`path`, {
        _: `M20.4365 18.3264H9.23706V19.3445H20.4365V18.3264Z`,
        fill: `white`,
      }),
      (0, _.jsx)(`path`, {
        _: `M20.4365 14.2538H13.3096V15.2719H20.4365V14.2538Z`,
        fill: `white`,
      }),
      (0, _.jsx)(`path`, {
        _: `M20.4364 10.1813H15.3457V11.1995H20.4364V10.1813Z`,
        fill: `white`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 26 26`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M17.5133 4.65595C15.8046 6.36468 17.0366 9.2803 19.4284 9.28035C20.446 9.28035 21.0261 8.76331 21.2519 8.56209C21.2963 8.5225 21.327 8.49513 21.3447 8.48633C22.4018 7.42917 22.4024 5.71423 21.3441 4.65595C20.2817 3.59714 18.5699 3.59936 17.5133 4.65595ZM18.5553 7.44735C17.4045 6.30173 19.1522 4.54882 20.301 5.69597V5.69586C20.7836 6.18159 20.783 6.96269 20.301 7.44422C19.8189 7.92684 19.0348 7.92415 18.5553 7.44735ZM0.583974 13.873L14.455 0L24.4165 1.583L26 11.5449L12.1289 25.416C11.7368 25.805 11.2252 26 10.7156 26C10.2065 26 9.69489 25.805 9.30552 25.416L0.583974 16.6976C0.194954 16.305 0 15.7933 0 15.2843C0 14.7742 0.194948 14.2625 0.583974 13.873ZM9.26632 17.5853L8.88665 17.965C8.62416 18.2274 8.43667 18.5227 8.32418 18.8509C8.21403 19.1766 8.19645 19.5106 8.27145 19.8528C8.34879 20.1926 8.53979 20.5148 8.84446 20.8195C9.14445 21.1195 9.46318 21.307 9.80066 21.382C10.1428 21.457 10.4756 21.4382 10.7991 21.3257C11.1272 21.2132 11.4225 21.0257 11.6849 20.7633L12.0646 20.3836C12.3271 20.1211 12.5146 19.8281 12.6271 19.5047C12.7419 19.179 12.7618 18.8473 12.6868 18.5099C12.6142 18.17 12.4255 17.8478 12.1209 17.5431C11.8209 17.2431 11.4986 17.0545 11.1541 16.9771C10.8143 16.8998 10.4791 16.9162 10.1487 17.0263C9.82293 17.1365 9.5288 17.3228 9.26632 17.5853ZM9.6038 18.6821L9.98347 18.3024C10.2014 18.0845 10.4487 17.9427 10.7252 17.8771C11.0065 17.8115 11.2701 17.9017 11.5162 18.1478C11.7693 18.4009 11.8584 18.6634 11.7834 18.9352C11.7107 19.2047 11.5654 19.4485 11.3475 19.6664L10.9678 20.0461C10.7498 20.2641 10.5026 20.4082 10.226 20.4785C9.95417 20.5488 9.6952 20.4609 9.44912 20.2148C9.19601 19.9617 9.10344 19.6981 9.1714 19.4239C9.24171 19.1473 9.38584 18.9001 9.6038 18.6821ZM9.80066 9.87944L9.421 10.2591C9.15851 10.5216 8.97102 10.8169 8.85853 11.145C8.74837 11.4708 8.7308 11.8047 8.80579 12.1469C8.88313 12.4867 9.07414 12.809 9.37881 13.1136C9.6788 13.4136 9.99753 13.6011 10.335 13.6761C10.6772 13.7511 11.01 13.7324 11.3334 13.6199C11.6615 13.5074 11.9568 13.3199 12.2193 13.0574L12.599 12.6777C12.8614 12.4152 13.0489 12.1223 13.1614 11.7989C13.2763 11.4731 13.2962 11.1415 13.2212 10.804C13.1485 10.4642 12.9599 10.1419 12.6552 9.83725C12.3552 9.53727 12.033 9.34861 11.6885 9.27127C11.3486 9.19393 11.0135 9.21033 10.683 9.32048C10.3573 9.43063 10.0632 9.61695 9.80066 9.87944ZM10.1381 10.9763L10.5178 10.5966C10.7358 10.3786 10.983 10.2368 11.2596 10.1712C11.5408 10.1056 11.8045 10.1958 12.0506 10.4419C12.3037 10.695 12.3927 10.9575 12.3177 11.2294C12.2451 11.4989 12.0998 11.7426 11.8818 11.9606L11.5021 12.3403C11.2842 12.5582 11.0369 12.7023 10.7604 12.7726C10.4885 12.843 10.2295 12.7551 9.98347 12.509C9.73036 12.2559 9.63778 11.9922 9.70575 11.718C9.77606 11.4415 9.92019 11.1942 10.1381 10.9763ZM16.3675 13.7464L4.21814 15.9963L5.01966 16.7978L17.169 14.5479L16.3675 13.7464Z`,
    }),
  });
}
function _(_) {
  let { direction: _, ..._ } = _;
  switch (_) {
    case `up`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          _: `M31 15.6394L18.0204 3L5 15.6394L8.60376 19.1432L18.0204 10.0076L27.4166 19.1432L31 15.6394ZM27.3962 33L18.0204 23.8644L8.62412 33L5 29.4962L18.0204 16.8568L31 29.4962L27.3962 33Z`,
        }),
      });
    case `down`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          _: `M31 20.3606L18.0204 33L5 20.3606L8.60376 16.8568L18.0204 25.9924L27.4166 16.8568L31 20.3606ZM27.3962 3L18.0204 12.1356L8.62412 3L5 6.50379L18.0204 19.1432L31 6.50379L27.3962 3Z`,
        }),
      });
    case `left`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M14.23 30.75L1.45996 18L14.23 5.20999L17.77 8.74999L8.53996 18L17.77 27.23L14.23 30.75ZM31.77 27.21L22.54 18L31.77 8.76999L28.23 5.20999L15.46 18L28.23 30.75L31.77 27.21Z`,
          fill: `currentColor`,
        }),
      });
    case `right`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z`,
          fill: `currentColor`,
        }),
      });
  }
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M805.7,241.8h-51.3l44.3-45.3c10.1-10.1,15.1-22.8,15.1-38.2s-5-28.2-15.1-38.2c-10.1-10.1-22.8-15.1-38.2-15.1s-28.5,5-39.2,15.1l-128.8,121.7h-153.9l-129.8-121.7c-10.1-10.1-22.8-15.1-38.2-15.1s-28.2,5-38.2,15.1c-10.1,10.1-15.1,22.8-15.1,38.2s5,28.2,15.1,38.2l44.3,45.3h-51.3c-46.3,1.3-84.3,17.1-114.2,47.3-29.9,30.2-45.5,68.1-46.8,113.7v348.1c1.3,49.6,16.9,89.8,46.8,120.2,29.9,30.4,67.9,46.5,114.2,47.8h573.5c46.3-1.3,84.5-16.9,114.7-46.8,30.2-29.9,45.6-67.9,46.3-114.2v-355.2c2-45.6-11.6-83.5-40.8-113.7s-66.9-46-113.2-47.3h-.2ZM851,751c-.7,16.1-6.5,29.9-17.6,41.3-11.1,11.4-24.7,17.1-40.8,17.1H232.2c-16.1,0-29.9-5.7-41.3-17.1-11.4-11.4-17.1-25.2-17.1-41.3v-341.1c.7-16.8,6.3-30.5,17.1-41.3s24.5-16.4,41.3-17.1h560.4c16.8.7,30.5,6.3,41.3,17.1s16.4,24.5,17.1,41.3v341.1h0ZM347.9,467.2c-16.1.7-29.7,6.5-40.8,17.6-11.1,11.1-16.9,24.7-17.6,40.8v58.4c.7,16.1,6.3,29.7,17.1,40.8,10.8,11.1,24.5,16.6,41.3,16.6s30.5-5.5,41.3-16.6,16.4-24.7,17.1-40.8v-58.4c-.7-16.1-6.5-29.7-17.6-40.8-11.1-11.1-24.7-16.9-40.8-17.6h0ZM683,467.2c-16.1.7-29.7,6.5-40.8,17.6s-16.9,24.7-17.6,40.8v58.4c.7,16.1,6.3,29.7,17.1,40.8s24.5,16.6,41.3,16.6,30.5-5.5,41.3-16.6,16.4-24.7,17.1-40.8v-58.4c-.7-16.1-6.5-29.7-17.6-40.8-11.1-11.1-24.7-16.9-40.8-17.6h0Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M823,229.3c-58.9-27-121-46.1-184.9-56.9-8.7,15.6-16.6,31.7-23.7,48.1-68-10.2-137.1-10.2-205.1,0-7-16.4-14.9-32.5-23.7-48.1-63.9,10.9-126.1,30.1-185,57-117,173.1-148.7,341.9-132.8,508.3h0c68.5,50.6,145.2,89.1,226.7,113.8,18.4-24.7,34.6-50.9,48.6-78.3-26.5-9.9-52.1-22.1-76.5-36.5,6.4-4.7,12.7-9.4,18.7-14.1,143.6,67.5,309.7,67.5,453.3,0,6.1,5,12.4,9.8,18.7,14.1-24.4,14.4-50,26.7-76.6,36.6,13.9,27.4,30.2,53.6,48.6,78.2,81.6-24.6,158.3-63.1,226.9-113.7h0c18.6-193-31.8-360.2-133.2-508.5h0ZM363.2,635.4c-44.2,0-80.7-40.1-80.7-89.4s35.2-89.8,80.6-89.8,81.5,40.5,80.8,89.8c-.8,49.3-35.6,89.4-80.6,89.4h-.1ZM660.8,635.4c-44.3,0-80.6-40.1-80.6-89.4s35.2-89.8,80.6-89.8,81.3,40.5,80.6,89.8c-.8,49.3-35.5,89.4-80.6,89.4Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M512,66c-246.3,0-446,199.7-446,446s144,384.7,338.3,432.9v-296.6h-92v-136.3h92v-58.7c0-151.8,68.7-222.2,217.7-222.2s77,5.5,97,11.1v123.5c-10.5-1.1-28.8-1.7-51.5-1.7-73.1,0-101.4,27.7-101.4,99.7v48.2h145.7l-25,136.3h-120.7v306.4c220.8-26.7,392-214.7,392-442.7S758.3,66,512,66Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M327.6,69.9c-47.4,2.2-79.7,9.8-108,20.9-29.3,11.4-54.1,26.7-78.8,51.5-24.7,24.8-39.9,49.6-51.2,78.9-11,28.3-18.4,60.7-20.5,108.1-2.1,47.4-2.6,62.6-2.3,183.5.2,120.9.8,136.1,3.1,183.6,2.3,47.4,9.8,79.7,20.9,108,11.4,29.3,26.7,54.1,51.5,78.8,24.8,24.7,49.6,39.9,79,51.2,28.3,10.9,60.7,18.4,108.1,20.5,47.4,2.1,62.6,2.6,183.5,2.3,120.9-.2,136.1-.8,183.6-3s79.7-9.8,108-20.9c29.3-11.5,54.1-26.7,78.8-51.5,24.7-24.8,39.9-49.6,51.2-79,11-28.3,18.4-60.7,20.5-108.1,2.1-47.5,2.6-62.7,2.3-183.6-.2-120.9-.8-136.1-3-183.5s-9.8-79.7-20.9-108c-11.4-29.3-26.7-54.1-51.5-78.8-24.8-24.7-49.6-39.9-79-51.2-28.3-11-60.7-18.4-108.1-20.5s-62.6-2.6-183.6-2.3-136.1.7-183.5,3.1M332.8,874.8c-43.4-1.9-67-9.1-82.7-15.1-20.8-8-35.6-17.7-51.3-33.2-15.7-15.5-25.3-30.4-33.4-51.1-6.1-15.7-13.4-39.3-15.5-82.7-2.2-46.9-2.7-61-2.9-179.9s.2-132.9,2.3-179.9c1.9-43.4,9.1-67,15.1-82.7,8-20.8,17.7-35.6,33.2-51.3,15.5-15.6,30.4-25.3,51.1-33.4,15.7-6.1,39.2-13.4,82.6-15.5,47-2.2,61-2.7,179.9-2.9,118.9-.3,133,.2,179.9,2.3,43.4,1.9,67,9.1,82.7,15.1,20.8,8,35.6,17.6,51.3,33.2,15.6,15.6,25.3,30.3,33.4,51.2,6.1,15.6,13.4,39.2,15.5,82.6,2.2,47,2.7,61,3,179.9.2,118.8-.2,133-2.3,179.9-1.9,43.4-9.1,67-15.1,82.7-8,20.8-17.7,35.6-33.2,51.3-15.5,15.6-30.4,25.3-51.1,33.4-15.7,6.1-39.2,13.4-82.6,15.5-47,2.2-61,2.7-179.9,2.9-118.9.3-132.9-.2-179.9-2.3M695.8,274c0,29.5,24,53.4,53.5,53.3s53.4-24,53.3-53.5c0-29.5-24-53.4-53.5-53.3,0,0,0,0,0,0-29.5,0-53.4,24-53.3,53.5M283.4,512.4c.2,126.3,102.8,228.4,229,228.2,126.2-.2,228.4-102.8,228.2-229.1-.2-126.3-102.8-228.4-229.1-228.2s-228.4,102.8-228.2,229.1M363.6,512.3c-.2-82,66.2-148.6,148.1-148.7,82-.2,148.6,66.2,148.7,148.1.2,82-66.2,148.6-148.1,148.7-82,.2-148.5-66.1-148.7-148.1h0`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M892.3,65.9H131.7c-36.4,0-65.9,29.5-65.9,65.9v760.5c0,36.4,29.5,65.9,65.9,65.9h760.5c36.4,0,65.9-29.5,65.9-65.9V131.7c0-36.4-29.5-65.9-65.9-65.9ZM331.8,826h-134.1v-426.1h134.1v426.1ZM264.7,340.8c-42.7,0-77.3-32.5-77.3-77s34.6-77,77.3-77,77.3,32.5,77.3,77-34.6,77-77.3,77ZM826.3,826.3h-134.1v-232.7c0-68.7-29.2-89.8-66.8-89.8s-78.8,30-78.8,91.6v231h-134.1v-426.1h129v59h1.7c13-26.2,58.3-71,127.5-71s155.7,44.4,155.7,174.6v263.6Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M861.6,624.9c-8-25.6-18.8-55.5-29.8-84.2h0l-40.2-100.3c0-1.2.5-20.9.5-31.1,0-171.5-81-343.9-280.1-343.9S231.9,237.8,231.9,409.3s.5,29.9.5,31.1h0l-40.2,100.3h0c-11,28.7-21.9,58.6-29.8,84.2-38,122.2-25.7,172.8-16.3,173.9,20.1,2.4,78.2-92,78.2-92,0,54.7,28.2,126,89.1,177.6-22.8,7-50.7,17.8-68.6,31.1-16.1,11.9-14.1,24-11.2,28.9,12.8,21.5,218.9,13.8,278.4,7.1h0c59.5,6.7,265.7,14.5,278.4-7.1,2.9-4.9,4.9-17-11.2-28.9-18-13.3-45.9-24.1-68.7-31.1,60.9-51.5,89-122.9,89-177.5,0,0,58.1,94.4,78.2,92,9.4-1.1,21.7-51.7-16.3-173.9h.2Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M829.1,381c-29.9,0-57.5,10.1-79.5,27.1-60-37.1-135.6-60.4-218.5-63.5v-.3c0-55.5,41.3-101.6,94.7-109.1,9.7,41.1,46.6,71.8,90.7,71.8s93.2-41.7,93.2-93.2-41.7-93.2-93.2-93.2-82.6,31.9-91.3,74.3c-75.4,8.1-134.3,72-134.3,149.5v.5c-82,3.5-156.8,26.8-216.3,63.6-22.1-17.1-49.8-27.3-79.8-27.3-72.2,0-130.6,58.5-130.6,130.6s30.8,97.5,75.2,118.3c4.3,151.6,169.6,273.6,372.8,273.6s368.7-122.1,372.8-273.9c44.1-21,74.6-65.9,74.6-118s-58.5-130.6-130.6-130.6h0Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M512,66c-246.3,0-446,199.7-446,446s199.7,446,446,446,446-199.7,446-446S758.3,66,512,66ZM718.7,369.3c-6.7,70.5-35.8,241.7-50.5,320.7-6.3,33.4-18.6,44.6-30.5,45.7-25.9,2.4-45.6-17.1-70.7-33.6-39.3-25.7-61.4-41.7-99.5-66.9-44-29-15.5-45,9.6-71,6.6-6.8,120.7-110.6,122.9-120,.3-1.2.5-5.6-2.1-7.9-2.6-2.3-6.5-1.5-9.2-.9-3.9.9-66.6,42.3-188.1,124.3-17.8,12.2-33.9,18.2-48.4,17.9-15.9-.3-46.6-9-69.3-16.4-27.9-9.1-50.1-13.9-48.2-29.3,1-8,12.1-16.2,33.2-24.6,130-56.6,216.7-94,260.1-112,123.9-51.5,149.6-60.5,166.4-60.8,3.7,0,11.9.8,17.3,5.2,4.5,3.7,5.8,8.6,6.3,12.1.6,3.5,1.3,11.4.7,17.6Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M534.1,714.7c0-74.7,0-149.3,0-224,0-16.4,0-16.4,16.4-16.4,24.6,0,49.2,0,73.9,0,12.4,0,13.3-.7,13.3-14,.1-41.7,0-83.5,0-125.2,0-84.8.1-169.7,0-254.5,0-6.6,1.8-9,8.6-8.9,27.6.3,55.1.1,82.7,0,6.2,0,9.1,1.8,9,8.8-.3,26.5,0,53,0,79.5,0,13.3.4,13.9,14,13.9,31.8.2,63.7.1,95.5.1,34.5,0,69,0,103.6-.3,6.5,0,8.4,2.1,8.3,8.3-.3,27.3-.6,54.6-.3,81.9,0,7.8-2.5,10-10.1,10-61.5-.2-123.1,0-184.6,0-5.9,0-11.8.4-17.7,0-6.8-.4-8.8,2.6-8.8,9.1,0,42.3,0,84.6-.1,126.8,0,17.7-.1,35.3.2,53,.2,10.1,2.2,11.7,12,11.7,64.2,0,128.4-.1,192.7-.3,15.4,0,15.5-.1,15.5,15.2,0,107.8.5,215.7-.3,323.5-.2,30-11.4,57.2-29.7,81.3-15.9,20.9-35.7,36.7-59.9,46.8-16.1,6.7-32.9,11-50.6,11-90.4,0-180.9,0-271.3.1-11.5,0-11.9,0-12-11.7-.3-36.4-.2-72.8-.2-109.2,0-38.8,0-77.6,0-116.4h0ZM634.5,712.9c0,42.8.1,85.6-.1,128.4,0,7.7,3,10.6,10.4,10.6,54.8-.1,109.7,0,164.5-.3,6.8,0,14.2-1,20.3-3.7,19-8.4,27.8-23.6,27.8-44.6-.2-72.8,0-145.5,0-218.3,0-9.7-.5-10.3-10.6-10.3-66.9-.1-133.8-.2-200.7-.3-9.9,0-11.6,1.7-11.6,11.7,0,42.3,0,84.5,0,126.8Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M488.8,390.4c0,101.2,0,202.3,0,303.5,0,16.5-.1,16.4-16.4,16.4-24.4,0-48.7,0-73.1.1-11,0-11.2,0-11.2-11,0-168.9,0-337.7,0-506.6,0-25.3,1.5-20.7-21.1-20.8-50.3-.2-100.6-.4-150.9.3-9,.1-18.3,3.1-26.7,6.5-17.1,6.8-22.3,21.8-23.6,38.7-.3,4.5-.1,9.1-.1,13.6,0,151.2,0,302.4,0,453.6,0,5.9-1.1,11.8-.8,17.6.4,7.2-3.4,8.5-9.4,8.4-16.9-.2-33.7-.2-50.6-.1-10.4,0-20.9,0-31.3.4-6,.2-8.4-1.7-8.4-8.3.1-65.8-.1-131.7-.2-197.5,0-92.3.3-184.6-.3-277-.2-30.8,5.4-59.6,21.6-85.8,24-38.8,58.9-62,104.2-68.5,12.9-1.8,26.1-2,39.2-2,82.2-.2,164.3-.1,246.5-.1,11.3,0,12.6,1,12.6,10.3,0,102.8,0,205.5,0,308.3Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M328.1,480.5c0,76-.5,152,.2,228,.4,37.7,15.9,69.6,42.1,96.8,12.2,12.7,26.1,22.9,41.7,30.6,18.8,9.3,38.7,14.9,60.1,14.8,19.8-.1,17.9-2,17.9,18.3,0,24.4-.4,48.7-.1,73.1,0,7.5-2.9,9.7-10,9.6-45.4-.8-88.1-10.6-127.7-34.1-26.1-15.5-48.8-34.3-68.3-57.4-5.7-6.8-6.8-6.7-12.7.4-30,36.3-67.3,62.6-111.5,78.1-27.5,9.6-56.2,14.7-85.8,13.7-8.8-.3-9.2-5.8-9.2-11.8,0-24.6,0-49.2.2-73.9.1-15.3.3-15.2,15.3-15.3,46.2-.4,83.7-19.2,112.9-54.6,22.6-27.3,33.8-58.9,33.7-94.5-.1-63.7.1-127.4.2-191.1.2-88.1.5-176.1.4-264.2,0-7.9,2.6-10.2,10.1-10.1,26.8.3,53.5.3,80.3,0,7.2,0,9.4,2.7,9.3,9.4-.2,22.5,0,45,0,67.4,0,55.7.6,111.3.6,167,.3,0-.1,0,.1,0Z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M785.4,244.2c-60.7-39.4-97.3-106.9-97.4-179.2h-153.7l-.3,616c-2.7,71.3-62.7,126.8-134,124.1-71.3-2.7-126.8-62.7-124.1-134,2.7-69.4,59.7-124.2,129.1-124.2,12.9,0,25.8,2.1,38.1,6v-156.9c-12.6-1.8-25.4-2.7-38.1-2.8-156,0-282.9,126.9-282.9,282.9.2,156.2,126.8,282.7,283,282.9,156,0,282.9-126.9,282.9-282.9v-312.3c62.3,44.8,137.1,68.9,213.8,68.8v-153.7c-41.4,0-81.8-12-116.4-34.6Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M615.8,959c-134.7,0-234.6-69-234.6-234.6v-264.9h-122.3v-143.7c134.7-34.8,190.8-150.4,197-250.9h139.7v227.8h162.7v166.7h-162.7v230.7c0,69,34.8,93.2,90.4,93.2h79.1v175.7h-149.3Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M288.5,65l-159.6,159.6v574.7h191.6v159.6l159.6-159.6h127.7l287.4-287.4V65H288.5ZM831.3,480.1l-127.7,127.7h-127.7l-111.7,111.7v-111.7h-143.7V128.9h510.9v351.2Z`,
      }),
      (0, _.jsx)(`rect`, {
        _: `671.6`,
        _: `240.6`,
        width: `63.9`,
        height: `191.6`,
      }),
      (0, _.jsx)(`rect`, {
        _: `496`,
        _: `240.6`,
        width: `63.9`,
        height: `191.6`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M595.2,443.5L920.9,65h-77.2l-282.8,328.7L335.1,65H74.6l341.5,497L74.6,959h77.2l298.6-347.1,238.5,347.1h260.5l-354.2-515.5h0ZM489.5,566.4l-34.6-49.5L179.6,123.1h118.5l222.2,317.8,34.6,49.5,288.8,413.1h-118.5l-235.7-337.1h0Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M896.1,127.9c-62.8-62.9-164-62.9-366.3-62.9h-35.8c-202.3,0-303.4,0-366.3,62.9-62.9,62.8-62.9,164-62.9,366.3v35.8c0,202.3,0,303.4,62.9,366.3,62.8,62.9,164,62.9,366.3,62.9h35.8c202.3,0,303.4,0,366.3-62.9,62.9-62.8,62.9-164,62.9-366.3v-35.8c0-202.3,0-303.4-62.9-366.3ZM704.8,716.9c-22.3-70.8-77.2-125.6-150.6-133v133h-11.7c-201.7,0-324.1-139.9-328.9-372.5h102.2c3.2,170.8,80.9,243.2,140.5,258.1v-258.1h97.9v147.4c57.5-6.4,117.6-73.4,137.8-147.4h96.4c-15.5,91-80.9,158-127.2,185.7,46.3,22.4,120.8,80.9,149.6,186.8h-105.9Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M496.2,371.2c-21,0-38-17-38-38.9s17-38.9,38-38.9,38,17,38,38.9-17,38.9-38,38.9M280.9,371.2c-21,0-38-17-38-38.9s17-38.9,38-38.9,38,17,38,38.9-17,38.9-38,38.9M388.6,147.8c-178.9,0-323.8,121.4-323.8,271.2s43.7,155.4,111.7,204.8c5.7,4,8.9,10.5,8.9,17.8s-.8,4.9-.8,7.3c-5.7,20.2-13.8,53.4-14.6,55-.8,2.4-1.6,4.9-1.6,8.1,0,5.7,4.9,10.5,10.5,10.5s4-.8,6.5-1.6l70.4-41.3c5.7-3.2,11.3-4.9,17-4.9s6.5.8,9.7,1.6c33.2,9.7,68.8,14.6,105.2,14.6s12.1,0,17.8-.8c-7.3-21-10.5-43.7-10.5-66.4,0-136.8,131.9-247.7,294.6-247.7s7.3,0,13,.8c-24.3-130.3-153-229.1-314.1-229.1`,
      }),
      (0, _.jsx)(`path`, {
        _: `M779.5,584.8c-18.6,0-34-15.4-34-34s15.4-34,34-34,34,15.4,34,34-15.4,34-34,34M599.8,584.8c-18.6,0-34-15.4-34-34s15.4-34,34-34,34,15.4,34,34-15.4,34-34,34M866.1,794.5c56.7-41.3,93.1-102.8,93.1-170.8,0-124.7-120.6-225.8-269.5-225.8s-269.5,101.2-269.5,225.8,120.6,225.8,269.5,225.8,60.7-4,88.2-12.1c2.4-.8,4.9-.8,8.1-.8,4.9,0,9.7,1.6,14.6,4l59.1,34c1.6.8,3.2,1.6,4.9,1.6,4.9,0,8.9-4,8.9-8.9s-.8-4.9-1.6-6.5c0-1.6-7.3-28.3-12.1-45.3-.8-1.6-.8-4-.8-5.7-.8-6.5,2.4-12.1,7.3-15.4`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M455.3,544.1c-70.6-18.3-150.3,16.8-181,79-31.2,63.4-1,133.8,70.3,156.8,73.8,23.8,160.9-12.6,191.1-81.2,29.7-67-7.5-135.8-80.4-154.6h0ZM401.4,706c-14.3,22.9-45.1,32.9-68.2,22.4-22.8-10.4-29.5-37-15.1-59.3,14.2-22.2,43.8-32.1,66.8-22.5,23.2,9.8,30.7,36.3,16.6,59.4h0ZM448.6,645.4c-5.2,8.9-16.7,13.2-25.6,9.4-8.8-3.6-11.6-13.6-6.6-22.3,5.2-8.7,16.2-12.9,25-9.4,9,3.3,12.2,13.4,7.3,22.3ZM795.3,441c15.5,5,32.1-3.5,37.2-19,12.2-37.9,4.6-81.3-24-113-27.6-30.6-69.5-44.2-109.9-35.6-15.9,3.4-26.1,19-22.7,35,0,0,0,0,0,0,3.4,15.9,19,26,34.9,22.6,0,0,0,0,.1,0,19.1-4,39.7,1.9,53.8,17.3,13.5,15,18,36.1,11.7,55.2-5.1,15.5,3.3,32.1,18.7,37.3,0,0,0,0,.1,0ZM898.7,227.5c-58.8-65.2-145.5-90.1-225.6-73.1-18.5,3.9-30.3,22-26.4,40.5,0,0,0,.1,0,.2,3.9,18.5,22.2,30.4,40.7,26.4,0,0,0,0,0,0,57-12.1,118.6,5.6,160.5,51.9,41.8,46.3,53.1,109.6,35.2,164.9-5.8,18,4,37.3,22.1,43.2,18,5.8,37.3-4,43.1-22h0c25-78.3,9.2-167.1-49.6-232.2h0ZM736.9,498.5c-12.6-3.7-21.2-6.3-14.6-22.9,14.3-36,15.8-67.1.3-89.1-29-41.6-108.6-39.3-199.8-1.1,0,0-28.6,12.5-21.4-10.2,14-45.1,11.9-82.8-10-104.7-49.4-49.5-181,1.9-293.8,114.6-84.4,84.5-133.4,174-133.4,251.5,0,148.1,189.9,238.2,375.7,238.2s405.6-141.5,405.6-253.9-57.2-106.3-108.6-122.3ZM440.5,821.7c-148.2,14.6-276.2-52.3-285.9-149.8-9.6-97.3,102.8-188.1,251-202.7,148.2-14.7,276.2,52.3,285.9,149.7,9.5,97.3-102.8,188.1-251,202.8Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M941.3,294.9c-10.3-38.8-40.7-69.4-79.2-79.7-69.9-18.8-350.1-18.8-350.1-18.8,0,0-280.2,0-350.1,18.8-38.6,10.4-68.9,40.9-79.2,79.7-18.7,70.3-18.7,217.1-18.7,217.1,0,0,0,146.7,18.7,217.1,10.3,38.8,40.7,69.4,79.2,79.7,69.9,18.8,350.1,18.8,350.1,18.8,0,0,280.2,0,350.1-18.8,38.6-10.4,68.9-40.9,79.2-79.7,18.7-70.3,18.7-217.1,18.7-217.1,0,0,0-146.7-18.7-217.1ZM420.4,645.2v-266.4l234.2,133.2-234.2,133.2Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M785.4,244.2c-60.7-39.4-97.3-106.9-97.4-179.2h-153.7l-.3,616c-2.7,71.3-62.7,126.8-134,124.1-71.3-2.7-126.8-62.7-124.1-134,2.7-69.4,59.7-124.2,129.1-124.2,12.9,0,25.8,2.1,38.1,6v-156.9c-12.6-1.8-25.4-2.7-38.1-2.8-156,0-282.9,126.9-282.9,282.9.2,156.2,126.8,282.7,283,282.9,156,0,282.9-126.9,282.9-282.9v-312.3c62.3,44.8,137.1,68.9,213.8,68.8v-153.7c-41.4,0-81.8-12-116.4-34.6Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M258.2,170.6c102.7,77.1,213.2,233.5,253.8,317.4,40.6-83.9,151.1-240.3,253.8-317.4,74.1-55.6,194.2-98.7,194.2,38.3s-15.7,229.9-24.9,262.7c-32,114.3-148.5,143.4-252.2,125.8,181.2,30.8,227.3,133,127.8,235.2-189.1,194-271.7-48.7-292.9-110.9-3.9-11.4-5.7-16.7-5.7-12.2,0-4.5-1.8.8-5.7,12.2-21.2,62.2-103.9,304.9-292.9,110.9-99.6-102.2-53.5-204.3,127.8-235.2-103.7,17.6-220.2-11.5-252.2-125.8-9.2-32.9-24.9-235.4-24.9-262.7,0-137,120.1-93.9,194.2-38.3h0Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M929.4,264.8c-13-95.3-96.9-170.4-196.5-185-16.8-2.5-80.4-11.4-227.9-11.4h-1.1c-147.5,0-179.1,9-195.9,11.4-96.8,14.2-185.2,81.6-206.6,178.1-10.3,47.5-11.4,100.2-9.5,148.5,2.7,69.3,3.3,138.4,9.6,207.4,4.4,45.8,12.1,91.3,23,136,20.4,82.7,102.9,151.4,183.7,179.5,86.6,29.3,179.6,34.1,268.8,14,9.8-2.3,19.5-4.9,29.1-7.9,21.6-6.8,47-14.4,65.7-27.8.3-.2.5-.4.6-.7.1-.3.2-.6.2-.9v-66.9c0-.3,0-.6-.2-.8-.1-.3-.3-.5-.6-.7-.2-.2-.5-.3-.8-.4-.3,0-.6,0-.9,0-57.1,13.5-115.7,20.3-174.4,20.2-101.1,0-128.3-47.5-136.1-67.2-6.3-17.1-10.2-34.9-11.8-53,0-.3,0-.6.2-.9.1-.3.3-.5.6-.7.2-.2.5-.3.8-.4.3,0,.6,0,.9,0,56.2,13.4,113.8,20.2,171.6,20.2,13.9,0,27.8,0,41.7-.4,58.1-1.6,119.4-4.6,176.6-15.6,1.4-.3,2.9-.5,4.1-.9,90.2-17.1,176.1-70.9,184.8-207.1.3-5.4,1.1-56.2,1.1-61.7,0-18.9,6.2-134.1-.9-204.9ZM790.6,604.7h-94.9v-229.8c0-48.4-20.4-73.1-61.8-73.1s-68.4,29.2-68.4,86.8v125.8h-94.3v-125.8c0-57.7-22.9-86.8-68.4-86.8s-61.8,24.7-61.8,73.1v229.8h-94.8v-236.8c0-48.4,12.5-86.8,37.5-115.3,25.8-28.4,59.6-43,101.5-43s85.2,18.5,109.7,55.4l23.6,39.2,23.6-39.2c24.5-36.9,61.2-55.4,109.6-55.4s75.7,14.6,101.6,43c25,28.5,37.5,66.9,37.5,115.3v236.8Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M518.9,959h-.3c-133.4-.9-235.9-44.9-304.9-130.7-61.2-76.4-92.9-182.7-94-315.9v-.6c1.1-133.3,32.7-239.5,94-315.9,68.8-85.9,171.5-129.9,304.8-130.8h.5c102.3.7,187.8,27,254.3,78.1,62.5,48.1,106.5,116.6,130.7,203.7l-76,21.2c-41.1-147.5-145.2-222.9-309.3-224-108.4.8-190.3,34.9-243.6,101.2-49.8,62.1-75.5,151.9-76.5,266.9,1,115,26.7,204.7,76.6,266.9,53.3,66.4,135.3,100.5,243.6,101.2,97.7-.7,162.4-23.5,216.1-76.2,61.3-60.1,60.3-133.8,40.6-178.7-11.5-26.5-32.5-48.5-60.9-65.2-7.2,50.3-23.2,91.1-47.8,121.9-33,41-79.7,63.5-138.9,66.7-44.8,2.4-88-8.1-121.4-29.9-39.6-25.7-62.8-64.8-65.3-110.4-2.4-44.3,15.2-85.1,49.5-114.8,32.8-28.3,78.9-45,133.5-48.1,40.1-2.2,77.8-.4,112.5,5.3-4.6-27.6-13.9-49.6-27.9-65.4-19.1-21.8-48.7-32.9-87.9-33.2h-1.1c-31.5,0-74.2,8.7-101.4,49.2l-65.4-43.9c36.5-54.2,95.7-84,166.8-84h1.6c119,.7,189.9,73.6,196.9,200.7,4,1.7,8,3.5,12,5.3,55.5,26.1,96.1,65.6,117.5,114.3,29.7,67.9,32.5,178.4-57.7,266.7-68.9,67.4-152.5,97.9-271.1,98.7h-.3ZM556.3,523.5c-9,0-18.1.3-27.5.8-68.4,3.8-111,35.2-108.6,79.8,2.5,46.8,54.1,68.5,103.7,65.8,45.6-2.4,105-20.2,115-138.2-25.2-5.5-52.8-8.2-82.5-8.2Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1024 1024`,
    ..._,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`g`, {
        _: `Layer_1`,
        children: (0, _.jsxs)(`g`, {
          children: [
            (0, _.jsx)(`path`, {
              _: `M236.8,355.7h-58.6c-.7,85.4-.3,170.9-.7,256.4.2.8.3,1.7.3,2.5-.2,5-4.4,8.8-9.4,8.6-10.3.6-20.6.3-30.9.3,6.9,17,14.4,33.8,22.1,50.4,19.5-.7,41.6,3.6,58.2-9.3,15.1-11.1,19.7-30.8,19.4-48.6,0-86.8.2-173.7-.4-260.5Z`,
            }),
            (0, _.jsx)(`path`, {
              _: `M455.9,539.6c14.1-35.5,30.9-69.9,45.9-104.9-18.3-2.1-39,3.8-55.9-3.3,8.2-27.5,23-52.8,33.5-79.5-19.9,0-40.1-.3-60.2,0-14.6,33.4-29.6,66.8-44.8,100-4.3,9.9-9.5,23.1-.5,32.1,11.6,10.5,28.5,6.4,42.7,7.4-9.8,24.9-22.8,48.5-31.1,73.9-4.6,12.6,6.9,25.5,19.4,25.5,22.7,1.5,45.6.2,68.4.6,7.4-16.6,14.9-33.2,22.2-50-13.3,0-26.9.9-39.8-1.7Z`,
            }),
            (0, _.jsx)(`path`, {
              _: `M959.8,585.9c-1.2-25.2,4.9-53.6-10.7-75.6-13.3-18.7-37.3-23.7-58.8-24.1-1.3-30,5.9-65.3-16.3-89.8-20.6-23.1-53.9-23.2-82.4-22.1v-22.4h-59.5l-.4,22.7h-39.5v59.9c13.2-.1,26.4,0,39.5.3.4,17.4.4,34.7,0,51.9-19.8.3-39.6.3-59.4.3v59.8h59.5v127.2h59.5c0-42.4,0-84.7,0-127.1,29,0,57.9-.4,86.9,0,10.1-.9,21.8,6.3,21.5,17.5.8,15.9.8,31.8,0,47.6.3,5.4-3.8,10-9.1,10.3-16.6,1.2-33.1,0-49.7.6,7.3,17.2,14.4,34.6,22.7,51.4,27.3-1.6,60.7,5.3,81.5-17.2,19.8-18.3,13.8-47.2,14.7-71.2ZM831.8,486.9h-40.2c-.3-17.5-.4-35-.4-52.5,12.9,1.8,30.1-5.2,39.9,5.2,1.6,15.8.6,31.6.6,47.3Z`,
            }),
            (0, _.jsx)(`path`, {
              _: `M618.5,434.3h37.5v-59.9h-136.4c0,19.9,0,40,.1,60h37.4v179.5c-17.8.2-35.7.2-53.6.2-9.2,19.9-18.3,39.8-27.3,59.8h199.7v-59.8c-19.1-.2-38.3,0-57.4-.2v-179.6Z`,
            }),
            (0, _.jsx)(`path`, {
              _: `M900.4,433.7c11.1,0,22.3.6,33.4-.4,17.9-1.6,31.3-22.5,24.2-39.3-5.6-18.4-30.6-26.5-45.7-14.1-16.7,12.5-11.2,35.8-12,53.8Z`,
            }),
            (0, _.jsx)(`path`, {
              _: `M78.6,434.2c-3.1,39.2-6.2,78.6-8.9,117.5-.7,8.9-2.6,17.7-5.7,26.1,10.1,23.1,20.1,46.1,30.9,68.8,24.1-32.2,33-72.8,35.5-112.2,2.1-33.5,5.8-67,7.1-100.6-19.6.8-39.2.5-58.9.5Z`,
            }),
            (0, _.jsx)(`path`, {
              _: `M345.2,551.5c-2.8-39.1-5.9-78.2-8.9-117.2h-59.5c2.9,36.4,5.3,73,8.4,109.3s12.6,73.5,34.8,103.2c10.6-22.8,20.8-45.8,30.8-68.8-3.2-8.5-5.1-17.4-5.7-26.4Z`,
            }),
            (0, _.jsx)(`path`, {
              _: `M378.1,609.4c-9.3,19.9-18.4,39.9-27.5,60,30.4,9,62.7,2.8,93.9,4.5,9.2-19.9,18.4-39.9,27.3-59.9-31.3-1.2-63.1,3.3-93.7-4.6Z`,
            }),
          ],
        }),
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `4 1 24 30`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M16.2114 23.9054C18.1701 23.9054 19.7587 25.494 19.7587 27.4527C19.7587 29.4114 18.1701 31 16.2114 31C14.2526 31 12.6641 29.4114 12.6641 27.4527C12.6641 25.494 14.2527 23.9054 16.2114 23.9054Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M7.01091 9.7964C7.11325 7.49343 8.06952 5.32707 9.69945 3.69779C11.4318 1.96544 13.7608 1 16.2108 1C18.6611 1 20.9899 1.96534 22.7222 3.69779C24.4545 5.42937 25.42 7.75911 25.42 10.2092C25.42 11.8776 24.9663 13.5012 24.109 14.9322C23.2523 16.3624 22.0178 17.5368 20.5477 18.324C20.1242 18.5512 19.761 18.8723 19.5136 19.2866C19.2654 19.7001 19.1616 20.179 19.1616 20.6579V21.3933C19.1616 21.6584 18.9457 21.8743 18.6815 21.8743H13.7404C13.4761 21.8743 13.2602 21.6584 13.2602 21.3933V20.6579C13.2602 19.1043 13.6626 17.5963 14.4611 16.2636C15.2603 14.928 16.4065 13.8673 17.7764 13.1333C18.3057 12.85 18.7488 12.4238 19.0573 11.9085C19.365 11.394 19.5178 10.8078 19.5178 10.2092C19.5178 9.32859 19.1722 8.49295 18.5496 7.87046C17.9264 7.2479 17.0914 6.90227 16.2109 6.90227C15.3303 6.90227 14.4947 7.24788 13.8722 7.87046C13.312 8.43062 12.972 9.16814 12.9131 9.9582L12.8963 10.1818C12.8774 10.4363 12.6643 10.6313 12.4091 10.6271L7.47227 10.5422C7.3377 10.5394 7.22265 10.4889 7.13086 10.3907C7.03828 10.2926 6.99482 10.1748 7.00049 10.0402L7.01104 9.79628L7.01091 9.7964Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 26 19`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `10`,
        width: `16`,
        height: `4`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `10`,
        _: `5`,
        width: `16`,
        height: `4`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `10`,
        _: `10`,
        width: `16`,
        height: `4`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `10`,
        _: `15`,
        width: `16`,
        height: `4`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `9`,
        height: `4`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `5`,
        width: `9`,
        height: `4`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `10`,
        width: `9`,
        height: `4`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `15`,
        width: `9`,
        height: `4`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 26 19`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `10`,
        width: `16`,
        height: `9`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `10`,
        _: `10`,
        width: `16`,
        height: `9`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `9`,
        height: `9`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        _: `10`,
        width: `9`,
        height: `9`,
      }),
    ],
  });
}
function _(_) {
  let { fill: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 10 10`,
    width: `10`,
    height: `10`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`circle`, {
      _: `5`,
      _: `5`,
      _: `4`,
      fill: _.fill || `currentColor`,
    }),
  });
}
function _(_) {
  let { fill: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 16 8`,
    width: `16`,
    height: `8`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`rect`, {
      _: `0`,
      _: `0`,
      width: `16`,
      height: `8`,
      _: `4`,
      fill: _.fill || `currentColor`,
    }),
  });
}
function _(_) {
  let { fill: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 10 10`,
    width: `10`,
    height: `10`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`rect`, {
      _: `1`,
      _: `1`,
      width: `8`,
      height: `8`,
      fill: _.fill || `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 16 16`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M1 14V15H2V16H0V14H1ZM5 14V16H3V14H5ZM9 14V16H7V14H9ZM13 14V16H11V14H13ZM16 14V16H14V15H15V14H16ZM2 11V13H0V11H2ZM16 11V13H14V11H16ZM2 7V9H0V7H2ZM16 7V9H14V7H16ZM2 3V5H0V3H2ZM16 3V5H14V3H16ZM2 0V1H1V2H0V0H2ZM5 0V2H3V0H5ZM9 0V2H7V0H9ZM13 0V2H11V0H13ZM16 0V2H15V1H14V0H16Z`,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _(_, _),
    ..._,
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 20 20`,
    fill: `none`,
    children: [
      (0, _.jsx)(`path`, {
        className: `SteamFrameDumpling`,
        opacity: `0.84`,
        fill: `currentColor`,
        _: `M18.0001 7.54712C12.2272 7.54712 7.54736 12.227 7.54736 17.9998H18.0001V7.54712Z`,
      }),
      (0, _.jsx)(`path`, {
        opacity: `0.84`,
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M2 2.34516C2 2.15453 2.15453 2 2.34516 2H17.9999V5.45157H5.45157V17.9999H2V2.34516Z`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsxs)(`svg`, {
    className: _(_, _),
    ..._,
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        opacity: `0.84`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        opacity: `0.84`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(_, _),
    ..._,
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      opacity: `0.84`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = Object.seal({
  onMoveUp: _,
  onMoveDown: _,
});
Object.seal({
  onMoveRight: _,
  onMoveLeft: _,
});
function _(_, _) {
  if (_.is_repeat) return !1;
  let _ = _.GetRelativeDirection(_.button);
  return _ == _.FORWARD
    ? _.BFocusFirstChild(_.GAMEPAD)
    : _ == _.BACKWARD && _.BFocusLastChild(_.GAMEPAD);
}
function _(_) {
  return _.Element.checkVisibility();
}
var _ = _({
    Arrow: () => _,
    ContextMenuHRSeparator: () => _,
    ContextMenuMouseOverlay: () => _,
    ContextMenuPopup: () => _,
    ContextMenuPosition: () => _,
    ContextMenuSeparator: () => _,
    ForceDesktop: () => _,
    IconContainer: () => _,
    Label: () => _,
    MenuSectionHeader: () => _,
    NoSeparation: () => _,
    PopoutSubMenu: () => _,
    PopoutSubMenuItems: () => _,
    SubMenu: () => _,
    UpperCase: () => _,
    active: () => _,
    contextMenu: () => _,
    contextMenuContents: () => _,
    contextMenuItem: () => _,
    default: () => _,
    "duration-app-launch": () => _,
  }),
  _ = `800ms`,
  _ = `Xf-QoOsf32Q-`,
  _ = `vBujnFG7jC4-`,
  _ = `JFSzUCtMXFw-`,
  _ = `_75X6HzwBhoc-`,
  _ = `n2n5yuvfD-s-`,
  _ = `_76JQCA2LSJ0-`,
  _ = `_1Zkw8Hwe0PE-`,
  _ = `pju3qtKRy-U-`,
  _ = `_1PjdoSdI-Ds-`,
  _ = `_0xElNZgUUhM-`,
  _ = `AsZnstpsNY8-`,
  _ = `_14S4-KzfcFY-`,
  _ = `zYoYvSs-1ps-`,
  _ = `NAZVjigYLJU-`,
  _ = `SCDLP7pPJQ0-`,
  _ = `TeCmREWVgIQ-`,
  _ = `avkhmtPZHyI-`,
  _ = `T4z8CIJ1QME-`,
  _ = `zBdMjSvgJP0-`,
  _ = {
    "duration-app-launch": `800ms`,
    ContextMenuMouseOverlay: _,
    ContextMenuPosition: _,
    contextMenu: _,
    ContextMenuPopup: _,
    contextMenuContents: _,
    contextMenuItem: _,
    active: _,
    MenuSectionHeader: _,
    ContextMenuSeparator: _,
    NoSeparation: _,
    UpperCase: _,
    SubMenu: _,
    Label: _,
    Arrow: _,
    IconContainer: _,
    ContextMenuHRSeparator: _,
    ForceDesktop: _,
    PopoutSubMenu: _,
    PopoutSubMenuItems: _,
  },
  _ = _.forwardRef((_, _) => {
    let { className: _, contextMenuStyles: _, disabled: _, ..._ } = _;
    return (0, _.jsx)(`div`, {
      ..._,
      ref: _,
      className: _(
        _,
        (_ || _).contextMenuItem,
        `contextMenuItem`,
        _ && `disabled`,
      ),
    });
  });
_.displayName = `MenuItem`;
function _(_) {
  let { bChecked: _, children: _, className: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    className: _(_, _ && `menuChecked`),
    children: [
      (0, _.jsx)(`div`, {
        className: `contextMenuCheckMark`,
      }),
      _,
    ],
  });
}
function _(_, _ = !0) {
  return function (_, _, _) {
    let _ = _.value;
    _.value = function (..._) {
      let _ = this[_ + `_DebounceProperties`];
      (_ === void 0 &&
        (_ = this[_ + `_DebounceProperties`] =
          {
            hTimer: void 0,
            nPending: 0,
          }),
        _.hTimer === void 0
          ? (_ ? _.apply(this, _) : (_.nPending += 1),
            (_.hTimer = window.setInterval(() => {
              _.nPending > 0
                ? (_.apply(this, _), (_.nPending = 0))
                : (window.clearInterval(_.hTimer), (_.hTimer = void 0));
            }, _)))
          : (_.nPending += 1));
    };
  };
}
var _ = _.createContext(null),
  _ = class extends _.Component {
    static contextType = _;
    m_navRef = _();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      (this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        _(this.props.refInstance, this.instance));
    }
    componentDidUpdate(_) {
      _.label !== this.props.label &&
        this.context &&
        this.instance.SetLabel(this.props.label);
    }
    HideIfSubmenu() {
      return this.instance.BIsSubMenu() ? (this.instance.HideSelf(), !0) : !1;
    }
    HideMenu() {
      return (
        this.instance.BIsSubMenu()
          ? this.instance.HideSelf()
          : this.instance.Hide(),
        !0
      );
    }
    render() {
      let {
          children: _,
          className: _,
          label: _,
          onCancel: _,
          cancelText: _,
          refInstance: _,
          bForceDesktopPresentation: _,
          footer: _,
          role: _ = `menu`,
          labelId: _,
          style: _ = {},
          refScrollable: _,
          ..._
        } = this.props,
        _ = this.context.styles ?? _,
        _ = _ ?? _(`#Button_Cancel`);
      if (this.context.presentation == 1 && !_) {
        let _ = () => {
          (_ && _(), this.instance.Hide());
        };
        return (
          (_.overflowY = this.instance.BIsSubMenuVisible() ? `hidden` : void 0),
          (0, _.jsxs)(_, {
            ..._,
            className: _(
              _.contextMenuContents,
              {
                [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              },
              _,
            ),
            "flow-children": `column`,
            onMoveLeft: this.HideIfSubmenu,
            onCancel: this.instance.BIsSubMenu() ? this.HideMenu : _,
            style: _,
            navEntryPreferPosition: _.PREFERRED_CHILD,
            navRef: this.m_navRef,
            ref: _,
            role: _,
            "aria-labelledby": _ ? _ : void 0,
            ..._,
            children: [
              _,
              _ &&
                (0, _.jsx)(`div`, {
                  _: _,
                  style: {
                    display: `none`,
                  },
                  children: _,
                }),
              !this.instance.BIsSubMenu() &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      className: _.Cancel,
                      onSelected: _,
                      children: _,
                    }),
                    _,
                  ],
                }),
              this.instance.BIsSubMenuVisible() &&
                (0, _.jsx)(`div`, {
                  className: _.contextMenuFade,
                  onClick: () => this.instance.HideSubMenu(),
                }),
            ],
          })
        );
      }
      return (0, _.jsx)(`div`, {
        ref: _,
        style: _,
        ..._,
        className: _(
          {
            [_.contextMenuContents]: !0,
            [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
            [_.ForceDesktop]: _,
          },
          _,
        ),
        children: _,
      });
    }
  };
(_([_], _.prototype, `HideIfSubmenu`, null),
  _([_], _.prototype, `HideMenu`, null),
  (_ = _([_], _)));
function _(_) {
  let _ = _.useId();
  return (0, _.jsx)(_, {
    labelId: _,
    ..._,
  });
}
var _ = class extends _.PureComponent {
  static contextType = _;
  m_ref = _.createRef();
  m_refDiv = _.createRef();
  get element() {
    return this.m_refDiv.current;
  }
  get instance() {
    return this.context.instance;
  }
  OnClick(_) {
    this.props.disabled
      ? this.context.callbacks?.onDisabledItemSelected &&
        this.context.callbacks.onDisabledItemSelected()
      : (this.props.onClick && this.props.onClick(_),
        !this.props.bInteractableItem &&
          (this.props.onSelected && this.props.onSelected(_),
          this.context && this.instance.ForceHide()));
  }
  OnOKButton(_) {
    this.m_refDiv.current?.click();
  }
  OnMouseEnter(_) {
    this.context.presentation == 0 && this.instance.HideSubMenu();
  }
  Focus() {
    this.m_ref.current
      ? this.m_ref.current.TakeFocus()
      : this.m_refDiv.current && this.m_refDiv.current.focus();
  }
  render() {
    let {
        onSelected: _,
        bInteractableItem: _,
        onMoveRight: _,
        ..._
      } = this.props,
      _ = this.context?.styles ?? _;
    return this.context.presentation == 1
      ? (0, _.jsx)(_, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ..._,
          className: _(
            this.props.className,
            _.contextMenuItem,
            `contextMenuItem`,
            this.props.disabled && `disabled`,
            this.props.selected && _.Selected,
            this.props.tone == `positive` && _.Positive,
            this.props.tone == `emphasis` && _.Emphasis,
            this.props.tone == `destructive` && _.Destructive,
          ),
          focusClassName: _.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: _,
          unselectable: this.props.unselectable,
          role: _.role ?? `menuitem`,
          "aria-selected": this.props.selected,
          children: this.props.children,
        })
      : (0, _.jsx)(_, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ..._,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          role: _.role ?? `menuitem`,
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
(_([_], _.prototype, `OnClick`, null),
  _([_], _.prototype, `OnOKButton`, null),
  _([_], _.prototype, `OnMouseEnter`, null),
  _([_], _.prototype, `Focus`, null));
var _ = class extends _.PureComponent {
  render() {
    let { bChecked: _, children: _, className: _, ..._ } = this.props;
    return (0, _.jsxs)(_, {
      ..._,
      className: _(_, _ && `menuChecked`),
      children: [
        (0, _.jsx)(`div`, {
          className: `contextMenuCheckMark`,
        }),
        _,
      ],
    });
  }
};
_.PureComponent;
function _(_) {
  let _ = _.useContext(_).styles ?? _;
  return (0, _.jsx)(`div`, {
    className: _.ContextMenuSeparator,
    role: `separator`,
  });
}
var _ = (_) => {
    let _ = _();
    return (0, _.jsx)(_, {
      ..._,
      bInGamepadUI: _,
    });
  },
  _ = class extends _.PureComponent {
    static contextType = _;
    m_refItem = _.createRef();
    constructor(_) {
      (super(_),
        (this.state = {
          bActive: !1,
        }));
    }
    get instance() {
      return this.context.instance;
    }
    OnSubMenuMouseEnter() {
      this.instance.CancelHideSubMenuTimer();
    }
    OnSubMenuHidden() {
      (this.setState({
        bActive: !1,
      }),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.m_refItem.current &&
          this.m_refItem.current.Focus());
    }
    ShowSubMenu(_) {
      let _ = _ || this.m_refItem.current.element,
        _ = this.instance.ShowSubMenu(_, this.RenderSubMenu);
      return _
        ? (this.setState({
            bActive: !0,
          }),
          _.SetOnHideCallback(this.OnSubMenuHidden),
          !0)
        : !1;
    }
    RenderSubMenu() {
      return (0, _.jsx)(_, {
        onMouseEnter: this.OnSubMenuMouseEnter,
        label: this.props.label,
        children: this.props.children,
      });
    }
    OnMouseEnter(_) {
      this.context.presentation == 0 && this.ShowSubMenu(_.currentTarget);
    }
    OnClick(_) {
      (this.OnMouseEnter(_),
        this.props.onClick && this.props.onClick(_),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.ShowSubMenu(_.currentTarget));
    }
    render() {
      let {
          label: _,
          selectedWithin: _,
          children: _,
          className: _,
          bInGamepadUI: _,
          ..._
        } = this.props,
        _ = this.context.styles ?? _;
      return (0, _.jsxs)(_, {
        ..._,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: _ && !this.state.bActive,
        className: _(_, _.SubMenu, this.state.bActive && _.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, _.jsx)(`div`, {
            className: _.Label,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _.Arrow,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      });
    }
  };
(_([_], _.prototype, `OnSubMenuMouseEnter`, null),
  _([_], _.prototype, `OnSubMenuHidden`, null),
  _([_], _.prototype, `ShowSubMenu`, null),
  _([_], _.prototype, `RenderSubMenu`, null),
  _([_], _.prototype, `OnMouseEnter`, null),
  _([_], _.prototype, `OnClick`, null));
var _ = class extends _.Component {
  m_elMenu = void 0;
  m_cReenteranceGuard = 1;
  m_mutationObserver;
  constructor(_) {
    (super(_),
      (this.state = {
        ready: !1,
        menuLeft: void 0,
        menuTop: void 0,
        menuRight: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      }),
      (this.m_mutationObserver = new MutationObserver(this.OnMenuMutation)));
  }
  get parentWin() {
    return (
      this.props.element?.ownerDocument.defaultView || this.props.parentWin
    );
  }
  BindMenuElement(_) {
    (this.props.instance.SetElement(_),
      this.m_elMenu &&
        (this.m_mutationObserver.disconnect(),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          this.m_elMenu.ownerDocument.defaultView?.removeEventListener(
            `resize`,
            this.OnWindowResize,
          )),
      _ &&
        (this.m_mutationObserver.observe(_, {
          childList: !0,
          subtree: !0,
        }),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          _.ownerDocument.defaultView?.addEventListener(
            `resize`,
            this.OnWindowResize,
          )),
      (this.m_elMenu = _ || void 0),
      _.IN_CLIENT && this.props.popup && this.m_elMenu
        ? this.m_elMenu.ownerDocument.fonts.ready.then(() => {
            this.PositionMenu();
          })
        : this.PositionMenu(),
      this.state.ready ||
        (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
        this.setState(
          {
            ready: !0,
          },
          () => {
            this.props.options?.bSkipFocusWhenReady || this.TakeFocus();
          },
        )));
  }
  OnMenuMutation(_, _) {
    this.PositionMenu();
  }
  OnWindowResize() {
    this.PositionMenu();
  }
  OnBlur(_) {
    if (
      !(_.relatedTarget && _(_.currentTarget, _.relatedTarget)) &&
      !(
        _.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(_.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let _ = _() ? 150 : 0;
      this.props.instance.OnCancel(_);
    }
  }
  OnKeyDown(_) {
    _.keyCode == 27 &&
      this.state.ready &&
      (this.props.instance.Hide(), _.preventDefault(), _.stopPropagation());
  }
  componentDidUpdate() {
    this.m_cReenteranceGuard-- > 0
      ? this.PositionMenu()
      : (this.m_cReenteranceGuard = 2);
  }
  TakeFocus() {
    if (
      this.m_elMenu &&
      this.state.ready &&
      this.props.instance.visible &&
      (this.props.popup ||
        !_(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
    ) {
      let _ = this.m_elMenu.querySelector(`.ContextMenuAutoFocus`);
      _ && _.focus ? _.focus() : this.m_elMenu.focus();
    }
  }
  PositionMenu(_ = !1) {
    let _ = this.props.options,
      _ = this.m_elMenu,
      _ = this.props.element;
    if (!_) return;
    let _ = this.props.popup != null,
      _ = this.parentWin;
    if (!_ || (_ && _.getComputedStyle(_).display === `none`)) return;
    let _ = this.props.clientX,
      _ = this.props.clientY,
      _ = 0,
      _ = 0,
      _ = _.innerWidth,
      _ = _.innerHeight,
      _ = _?.getBoundingClientRect();
    if (_) {
      if (
        (!_.bScreenCoordinates &&
          _ !== void 0 &&
          _ !== void 0 &&
          ((_ += _.screenLeft), (_ += _.screenTop)),
        (_ &&= _(_, _)),
        _.targetMonitor)
      )
        ((_ = _.targetMonitor.nScreenLeft),
          (_ = _.targetMonitor.nScreenTop),
          (_ = _.targetMonitor.nScreenWidth),
          (_ = _.targetMonitor.nScreenHeight));
      else {
        let _ = _.screen,
          _ = 0,
          _ = 0;
        (_.availLeft && (_ = _.availLeft),
          _.availTop && (_ = _.availTop),
          (_ = _),
          (_ = _),
          (_ = _.availWidth),
          (_ = _.availHeight));
      }
    }
    (_.bOverlapHorizontal || _.bOverlapVertical) && (_ = _ = void 0);
    let _ = _.getBoundingClientRect(),
      _ = {
        menuLeft: void 0,
        menuRight: void 0,
        menuTop: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      },
      _ = _ ?? _.left,
      _ = _ ?? _.right,
      _ = _.width;
    (_.bMatchWidth && ((_ = _ - _), (_.menuWidth = _)),
      _.bGrowToElementWidth && (_.menuMinWidth = Math.max(_, _ - _)));
    let _ = (_.bOverlapHorizontal ? _ : _) - _ - _,
      _ = _ > 0,
      _ = _ + _ - (_.bOverlapHorizontal ? _ : _) - _,
      _ = _ > 0,
      _ = _.bPreferPopLeft;
    _?.matches(`:dir(rtl)`) && (_ = !_);
    let _ = (_ || !_) && _;
    (!_ &&
      !_ &&
      ((_ = _ > _),
      _.bFitToWindow && ((_ += (_ ? _ : _) - 8), (_.menuWidth = _))),
      _
        ? (_.menuRight = _ - (_.bOverlapHorizontal ? _ : _))
        : (_.menuLeft = _.bOverlapHorizontal ? _ : _));
    let _ = _ ?? _.top,
      _ = _ ?? _.bottom,
      _ = _.scrollHeight;
    _.bMatchHeight && ((_ = _ - _), (_.menuHeight = _));
    let _ = (_.bOverlapVertical ? _ : _) - _ - _,
      _ = _ > 0,
      _ = _ + _ - (_.bOverlapVertical ? _ : _) - _,
      _ = _ > 0,
      _ = (_.bPreferPopTop || !_) && _ && !_.bDisablePopTop;
    if (!_ && !_) {
      let _ =
        _.bShiftToFitWindow === void 0
          ? !!_.bFitToWindow && !_.bOverlapHorizontal
          : _.bShiftToFitWindow;
      ((_ = _ > _ && !_.bDisablePopTop),
        _ && (_ ? (_.menuTop = 4) : (_.menuBottom = 4)),
        _.bFitToWindow &&
          (_ ? (_ = Math.min(_, _ - 8)) : (_ += _ ? _ : _),
          (_.menuHeight = _ - 8)));
    }
    (_.menuBottom === void 0 &&
      _.menuTop === void 0 &&
      (_
        ? (_.menuBottom = _ - (_.bOverlapVertical ? _ : _))
        : (_.menuTop = _.bOverlapVertical ? _ : _)),
      _
        ? ((_.menuHeight ||= _.height),
          (_.menuWidth ||= _.width),
          _.menuBottom &&
            !_.menuTop &&
            ((_.menuTop = _ - _.menuBottom - _.menuHeight),
            (_.menuBottom = void 0)),
          _.menuRight &&
            !_.menuLeft &&
            ((_.menuLeft = _ - _.menuRight - _.menuWidth),
            (_.menuRight = void 0)))
        : _.getComputedStyle(_).position != `fixed` &&
          (_.menuLeft && (_.menuLeft += _.scrollX),
          _.menuTop && (_.menuTop += _.scrollY),
          _.menuBottom &&
            (_.menuBottom +=
              _.document.body.clientHeight - _.scrollY - _.innerHeight),
          _.menuRight &&
            (_.menuRight +=
              _.document.body.clientWidth - _.scrollX - _.innerWidth)),
      (_ ||
        _.menuLeft !== this.state.menuLeft ||
        _.menuRight !== this.state.menuRight ||
        _.menuTop !== this.state.menuTop ||
        _.menuBottom !== this.state.menuBottom ||
        _.menuWidth !== this.state.menuWidth ||
        _.menuHeight !== this.state.menuHeight) &&
        this.setState(_));
  }
  PositionPopupWindow() {
    if (
      this.state.menuLeft === void 0 ||
      this.state.menuTop === void 0 ||
      this.state.menuWidth === void 0 ||
      this.state.menuHeight === void 0
    )
      return;
    let _ = this.props.popup?.window,
      _ = this.props.options;
    if (_.bScreenCoordinates) {
      let _ =
        _.targetMonitor?.flScaleToTargetMonitor ??
        this.parentWin?.devicePixelRatio;
      (_?.SteamClient.Window.MoveTo(
        this.state.menuLeft,
        this.state.menuTop,
        _ ?? !0,
      ),
        _?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          _ ?? !0,
        ));
    } else
      this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((_) => {
        let _ = this.state.menuLeft - this.parentWin.screenX,
          _ = this.state.menuTop - this.parentWin.screenY;
        try {
          _?.SteamClient.Window.PositionWindowRelative(
            _,
            _,
            _,
            this.state.menuWidth,
            this.state.menuHeight,
          );
        } catch (_) {
          console.error(_);
        }
      });
  }
  render() {
    let _ = {
      visibility: this.state.ready ? `visible` : `hidden`,
    };
    (this.props.options.flElementZoom &&
      this.props.options.flElementZoom > 0 &&
      (_.zoom = this.props.options.flElementZoom),
      this.props.popup
        ? (this.PositionPopupWindow(),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = Math.floor(this.state.menuMinWidth)))
        : (this.state.menuTop === void 0
            ? this.state.menuBottom !== void 0 &&
              (_.bottom = this.state.menuBottom)
            : (_.top = this.state.menuTop),
          this.state.menuLeft === void 0
            ? this.state.menuRight !== void 0 &&
              (_.right = this.state.menuRight)
            : (_.left = this.state.menuLeft),
          this.state.menuHeight !== void 0 &&
            (_.height = this.state.menuHeight),
          this.state.menuWidth !== void 0 && (_.width = this.state.menuWidth),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = this.state.menuMinWidth)));
    let _ = this.props.options.strClassName || `JFSzUCtMXFw-`;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (_ += ` visible`),
      this.props.instance.visible && this.state.ready && (_ += ` ready`),
      (_ += ` ` + _),
      this.props.options.bStandalone && (_ += ` undefined`),
      (0, _.jsx)(`div`, {
        className: _,
        ref: this.BindMenuElement,
        style: _,
        onBlur: this.OnBlur,
        onKeyDown: this.OnKeyDown,
        tabIndex: 0,
        children: this.props.children,
      })
    );
  }
};
(_([_], _.prototype, `BindMenuElement`, null),
  _([_, _(100)], _.prototype, `OnMenuMutation`, null),
  _([_], _.prototype, `OnWindowResize`, null),
  _([_], _.prototype, `OnBlur`, null),
  _([_], _.prototype, `OnKeyDown`, null),
  (_ = _([_], _)));
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_, _) {
  let _ = _.createEvent(`HTMLEvents`);
  (_.initEvent(`change`, !0, !1), _.dispatchEvent(_));
}
function _(_) {
  let _ = [],
    _ = _(_),
    _ = _.getSelection(),
    _ = _ && _.rangeCount > 0 && _.toString().length > 0,
    _ = _.target,
    _ = !1,
    _ = _.clientY,
    _ = _.clientX;
  if (
    (_ &&
      `tagName` in _ &&
      (_.tagName == `INPUT` || _.tagName == `TEXTAREA`) &&
      (_ = !0),
    _.IN_CLIENT && _ && _(_, `Browser.GetSpellingSuggestions`))
  ) {
    let [_, ..._] = _.SteamClient.Browser.GetSpellingSuggestions(),
      _ = _;
    (_ &&
      _.forEach((_, _) => {
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                (_.setRangeText(_),
                  _(_, _.document),
                  _.setSelectionRange(_.selectionEnd, _.selectionEnd),
                  _.focus());
              },
              className: _,
              children: _,
            },
            `spelling_${_}_${_}`,
          ),
        );
      }),
      _ &&
        _(_, `Browser.AddWordToDictionary`) &&
        ((_ = _.trim()),
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => _.SteamClient.Browser.AddWordToDictionary(_),
              children: _(
                `#ContextMenu_AddToDictionary`,
                _.length < 30 ? _ : _.substring(0, 30) + `...`,
              ),
            },
            `addtodictionary_${_}`,
          ),
        )));
  }
  if (
    ((_.document.queryCommandEnabled(`cut`) || (_ && _)) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand(`cut`);
            },
            children: _(`#ContextMenu_Cut`),
          },
          `cut`,
        ),
      ),
    (_.document.queryCommandEnabled(`copy`) || _) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand(`copy`);
            },
            className: _,
            children: _(`#ContextMenu_Copy`),
          },
          `copy`,
        ),
      ),
    _.IN_CLIENT &&
      _ &&
      _(_, `Browser.Paste`) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              (_.focus(), _.SteamClient.Browser.Paste());
            },
            className: _,
            children: _(`#ContextMenu_Paste`),
          },
          `paste`,
        ),
      ),
    _.IN_CLIENT && _()?.DEV_MODE)
  ) {
    let _ = [];
    (_(_, `Browser.OpenDevTools`) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              (_.focus(), _.SteamClient.Browser.OpenDevTools());
            },
            children: `Open Dev Tools`,
          },
          `opendevtools`,
        ),
      ),
      _(_, `Browser.InspectElement`) &&
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                (_.focus(), _.SteamClient.Browser.InspectElement(_, _));
              },
              className: _,
              children: `Inspect Element`,
            },
            `inspectelement`,
          ),
        ),
      _.length > 0 &&
        (_.push((0, _.jsx)(_, {}, `devtools-separator`)), _.push(..._)));
  }
  if (_.length)
    _(
      (0, _.jsx)(_, {
        children: _,
      }),
      _,
      {
        bRootContextMenu: !0,
      },
    );
  else {
    if (_.shiftKey) return;
    (_.preventDefault(), _.stopPropagation());
  }
}
var _ = `EnableContextMenuBlurDelay3`;
function _() {
  return (window.localStorage && window.localStorage.getItem(_)) === `true`;
}
var _ = class _ {
  static s_nNextKeyValue = 1;
  m_nKey = null;
  m_ContextMenuManager;
  m_bVisible = !1;
  m_fnTakeFocus;
  m_element;
  m_rctElement;
  m_rctLabel = void 0;
  m_popupContextMenu;
  m_timerHideMenu = 0;
  m_options;
  m_position;
  m_submenu;
  m_parentInstance;
  m_elSubmenuItem = null;
  m_timerHideSubMenu = 0;
  m_fnOnHideCallback;
  constructor(_, _) {
    (_(this), (this.m_ContextMenuManager = _), (this.m_rctElement = _));
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey ?? ((this.m_nKey = _.s_nNextKeyValue), _.s_nNextKeyValue++),
      this.m_nKey
    );
  }
  SetElement(_) {
    this.m_element = _;
  }
  SetPopup(_) {
    this.m_popupContextMenu = _;
  }
  get ReactElement() {
    return this.m_rctElement;
  }
  get label() {
    return this.m_rctLabel;
  }
  get submenu() {
    return this.m_submenu;
  }
  get visible() {
    return this.m_bVisible;
  }
  get options() {
    return this.m_options;
  }
  get position() {
    return this.m_position;
  }
  SetOnHideCallback(_) {
    this.m_fnOnHideCallback = _;
  }
  Show() {
    (this.CancelHideMenuTimer(),
      (this.m_bVisible = !0),
      this.m_ContextMenuManager.ShowMenu(this));
  }
  OnCancel(_ = 0) {
    (this.options?.onCancel && this.options.onCancel(), this.Hide(_));
  }
  Hide(_ = 0) {
    _ > 0
      ? (this.m_timerHideMenu = window.setTimeout(() => {
          ((this.m_timerHideMenu = 0), this.InternalHide());
        }, _))
      : this.InternalHide();
  }
  CancelHideMenuTimer() {
    this.m_timerHideMenu > 0 &&
      (clearTimeout(this.m_timerHideMenu), (this.m_timerHideMenu = 0));
  }
  SetPosition(_, _, _) {
    ((this.m_options = {
      ...this.m_options,
      ..._,
    }),
      (this.m_position.clientX = _),
      (this.m_position.clientY = _),
      (this.m_position.options = this.m_options));
  }
  ForceHide() {
    this.InternalHide();
  }
  HideIfNotInFocus() {
    !this.BHasFocus() && !this.BIsFocusInChildHierarchy() && this.Hide();
  }
  InternalHide() {
    (this.CancelHideMenuTimer(),
      this.m_bVisible &&
        ((this.m_bVisible = !1),
        this.InternalHideSubMenu(),
        this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
        this.m_ContextMenuManager.HideMenu(this)));
  }
  SetTakeFocus(_) {
    this.m_fnTakeFocus = _;
  }
  ShowSubMenu(_, _) {
    return this.m_elSubmenuItem == _
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = _),
        (this.m_submenu = new _(this, _(), _, this.m_options.bForcePopup)),
        this.m_submenu.Show(),
        this.m_submenu);
  }
  CancelHideSubMenuTimer() {
    this.m_timerHideSubMenu > 0 &&
      (clearTimeout(this.m_timerHideSubMenu), (this.m_timerHideSubMenu = 0));
  }
  HideSubMenu() {
    this.m_submenu
      ? this.m_timerHideSubMenu > 0 ||
        (this.m_timerHideSubMenu = window.setTimeout(() => {
          (this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0));
        }, 150))
      : this.CancelHideSubMenuTimer();
  }
  OnSubMenuDismissed(_) {
    this.m_submenu == _ && this.InternalHideSubMenu();
  }
  HideSelf() {
    this.m_parentInstance
      ? this.m_parentInstance.OnSubMenuDismissed(this)
      : this.InternalHide();
  }
  InternalHideSubMenu() {
    (this.CancelHideSubMenuTimer(),
      (this.m_submenu &&=
        (this.m_submenu.m_element &&
          this.BIsFocusInChildHierarchy() &&
          this.TakeFocus(_.k_EWindowBringToFrontAndForceOS),
        (this.m_elSubmenuItem = null),
        this.m_submenu.InternalHide(),
        void 0)));
  }
  TakeFocus(_ = _.k_EWindowBringToFrontAndForceOS) {
    (this.m_popupContextMenu && this.m_popupContextMenu.Focus(_),
      this.m_fnTakeFocus && this.m_fnTakeFocus());
  }
  BInternalElementInParentHierarchy(_) {
    return (
      this.m_parentInstance != null &&
      (this.m_parentInstance.BIsChildElement(_) ||
        this.m_parentInstance.BInternalElementInParentHierarchy(_))
    );
  }
  BInternalElementInChildHierarchy(_) {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BIsChildElement(_) ||
        this.m_submenu.BInternalElementInChildHierarchy(_))
    );
  }
  BIsChildElement(_) {
    return this.m_element
      ? _(this.m_element, _)
      : _(this.m_popupContextMenu?.root_element, _);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : _(this.m_element, this.m_element?.ownerDocument.activeElement);
  }
  BIsFocusInChildHierarchy() {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BHasFocus() || this.m_submenu.BIsFocusInChildHierarchy())
    );
  }
  BIsElementInMenuHierarchy(_) {
    return (
      this.BInternalElementInParentHierarchy(_) ||
      this.BInternalElementInChildHierarchy(_)
    );
  }
  BIsSubMenuVisible() {
    return !!this.m_submenu;
  }
  SetLabel(_) {
    this.m_rctLabel = _;
  }
};
(_([_], _.prototype, `m_bVisible`, void 0),
  _([_.ref], _.prototype, `m_rctLabel`, void 0));
var _ = class extends _ {
    constructor(_, _, _, _, _, _) {
      (super(_, _),
        (this.m_options = _ || {}),
        (this.m_position = {
          element: _,
          clientX: _,
          clientY: _,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
        }));
    }
    Show() {
      super.Show();
    }
    Hide(_ = 0) {
      super.Hide(_);
    }
    ForceHide() {
      super.ForceHide();
    }
    BIsSubMenu() {
      return !1;
    }
  },
  _ = class extends _ {
    constructor(_, _, _, _) {
      (super(_.Manager, _),
        (this.m_parentInstance = _),
        (this.m_options = {
          bOverlapVertical: !0,
          strClassName: _.options.strClassName,
          bFitToWindow: _.options.bFitToWindow,
          bShiftToFitWindow: _.options.bShiftToFitWindow,
          bForcePopup: _,
        }),
        (this.m_position = {
          element: _,
          clientX: void 0,
          clientY: void 0,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
          bSubmenu: !0,
        }));
    }
    Hide() {
      this.m_popupContextMenu
        ? window.setTimeout(() => {
            this.m_parentInstance?.HideIfNotInFocus();
          }, 10)
        : this.m_parentInstance?.Hide();
    }
    ForceHide() {
      this.m_parentInstance?.ForceHide();
    }
    BIsSubMenu() {
      return !0;
    }
  },
  _ = class {
    m_callbacksMenusChanged = new _();
    m_ActiveMenu;
    m_rgActiveSubmenus = [];
    m_setHiddenMenus = new Set();
    constructor() {}
    CreateContextMenuInstance(_, _, _, _, _) {
      let _ = new _(this, _, _, _, _, _);
      return (
        _?.bCreateHidden &&
          (this.m_setHiddenMenus.add(_),
          this.m_callbacksMenusChanged.Dispatch()),
        _
      );
    }
    get OnMenusChanged() {
      return this.m_callbacksMenusChanged;
    }
    HideActiveMenu() {
      (this.m_ActiveMenu?.options.bRetainOnHide
        ? this.m_setHiddenMenus.add(this.m_ActiveMenu)
        : this.m_rgActiveSubmenus.length && (this.m_rgActiveSubmenus = []),
        (this.m_ActiveMenu = void 0));
    }
    get ActiveMenu() {
      return this.m_ActiveMenu;
    }
    GetVisibleMenus() {
      return this.m_ActiveMenu
        ? [this.m_ActiveMenu, ...this.m_rgActiveSubmenus]
        : [];
    }
    GetHiddenMenus() {
      return Array.from(this.m_setHiddenMenus);
    }
    GetAllMenus() {
      let _;
      return (
        (_ = this.m_ActiveMenu
          ? [
              this.m_ActiveMenu,
              ...this.m_rgActiveSubmenus,
              ...Array.from(this.m_setHiddenMenus),
            ]
          : [...this.m_rgActiveSubmenus, ...Array.from(this.m_setHiddenMenus)]),
        _.sort((_, _) => _.key - _.key)
      );
    }
    BShouldRenderMouseOverlay() {
      return (
        this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay
      );
    }
    ShowMenu(_) {
      if (_.BIsSubMenu()) this.m_rgActiveSubmenus.push(_);
      else {
        if (_ == this.m_ActiveMenu) return;
        (this.m_ActiveMenu &&
          (this.m_ActiveMenu.options.bRetainOnHide &&
            this.m_setHiddenMenus.add(this.m_ActiveMenu),
          this.m_ActiveMenu.Hide()),
          (this.m_ActiveMenu = _),
          this.m_setHiddenMenus.delete(_));
      }
      this.m_callbacksMenusChanged.Dispatch();
    }
    HideMenu(_) {
      _.BIsSubMenu()
        ? _(this.m_rgActiveSubmenus, _) &&
          this.m_callbacksMenusChanged.Dispatch()
        : (_(_ == this.m_ActiveMenu, `Call to hide inactive menu`),
          _ == this.m_ActiveMenu &&
            (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
    }
    ReleaseHiddenMenu(_) {
      this.m_setHiddenMenus.delete(_);
    }
  },
  _ = new (class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(_) {
      let _ = _?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(_);
    }
    GetContextMenuManager(_) {
      let _ = this.m_mapManagers.get(_);
      if (!_) {
        let _ = _;
        for (; !_ && _.opener;)
          ((_ = _.opener), (_ = this.m_mapManagers.get(_)));
      }
      return (_ || ((_ = new _()), this.m_mapManagers.set(_, _)), _);
    }
    SetMenuManager(_, _) {
      (_(
        this.m_mapManagers.get(_) === void 0 || !_ || _ == window,
        `Stomping CContextMenuManager for ${_.document.title}!`,
      ),
        this.m_mapManagers.set(_, _));
    }
    RegisterChildWindow(_, _) {
      return (
        this.m_mapManagers.set(_, this.GetContextMenuManager(_)),
        () => this.m_mapManagers.delete(_)
      );
    }
  })();
function _(_, _, _) {
  let _,
    _,
    _,
    _ = _;
  if (_?.preventDefault && _?.stopPropagation) {
    if (_.shiftKey || (_.altKey && !_?.bRootContextMenu)) return null;
    (_.preventDefault(),
      _.stopPropagation(),
      (_ = _.currentTarget),
      (_ = _.clientX),
      (_ = _.clientY));
  } else _ = _;
  let _ = _.GetContextMenuManagerFromWindow(_).CreateContextMenuInstance(
    _,
    _,
    _,
    _,
    _,
  );
  return (_.Show(), _?.bCreateHidden && _.Hide(), _);
}
function _(_) {
  if (_ === void 0)
    return (console.error(`Cannot GetHostname on empty URL`), ``);
  let _ = RegExp(
      `^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)`,
      `im`,
    ),
    _ = _.match(_);
  return _ && _.length > 5 ? _[6].toString() : _;
}
function _(_) {
  let _ = _(_);
  return (_.startsWith(`www.`) && (_ = _.slice(4)), _);
}
function _(_) {
  return _.replace(
    /{STEAM_CLAN_IMAGE}/g,
    `${_.CLAN_CDN_ASSET_URL}images/`,
  ).replace(/{STEAM_CLAN_LOC_IMAGE}/g, `${_.CLAN_CDN_ASSET_URL}images/`);
}
function _(_) {
  return (
    _ &&
    (_.EUNIVERSE == 1 &&
      (_.substring(0, 5) == `http:` && (_ = `https:` + _.substring(5)),
      _(_.MEDIA_CDN_URL, `Media CDN not setup`),
      (_ = _.replace(/https:\/\/steamcdn-a.akamaihd.net\//g, _.MEDIA_CDN_URL)),
      (_ = _.replace(/https:\/\/media.steampowered.com\//g, _.MEDIA_CDN_URL)),
      (_ = _.replace(
        /https:\/\/cdn.akamai.steamstatic.com\//g,
        _.MEDIA_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/cdn.cloudflare.steamstatic.com\//g,
        _.MEDIA_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/cdn.edgecast.steamstatic.com\//g,
        _.MEDIA_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/cdn.fastly.steamstatic.com\//g,
        _.MEDIA_CDN_URL,
      )),
      (_ = _.replace(/https:\/\/cdn.dota2.com\//g, _.MEDIA_CDN_URL)),
      (_ = _.replace(
        /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
        _.MEDIA_CDN_URL + `steam/`,
      )),
      (_ = _.replace(
        /https:\/\/clan.akamai.steamstatic.com\//g,
        _.CLAN_CDN_ASSET_URL,
      )),
      (_ = _.replace(
        /https:\/\/clan.cloudflare.steamstatic.com\//g,
        _.CLAN_CDN_ASSET_URL,
      )),
      (_ = _.replace(
        /https:\/\/clan.fastly.steamstatic.com\//g,
        _.CLAN_CDN_ASSET_URL,
      )),
      (_ = _.replace(
        /https:\/\/cdn.steamcommunity.com\//g,
        _.COMMUNITY_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/community.akamai.steamstatic.com\//g,
        _.COMMUNITY_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/community.cloudflare.steamstatic.com\//g,
        _.COMMUNITY_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/community.edgecast.steamstatic.com\//g,
        _.COMMUNITY_CDN_URL,
      ))),
    (_ = _.replace(/{IMG_URL}/g, _.IMG_URL)),
    (_ = _.replace(/{MEDIA_CDN_URL}/g, _.MEDIA_CDN_URL)),
    (_ = _.replace(/{MEDIA_CDN_COMMUNITY_URL}/g, _.MEDIA_CDN_COMMUNITY_URL)),
    (_ = _.replace(/{COMMUNITY_CDN_URL}/g, _.COMMUNITY_CDN_URL)),
    (_ = _(_)),
    _)
  );
}
function _(_) {
  if (!_) return !0;
  let _ = _(_).toLocaleLowerCase();
  return (
    [
      _(_.COMMUNITY_CDN_URL).toLocaleLowerCase(),
      _(_.MEDIA_CDN_URL).toLocaleLowerCase(),
      _(_.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
      _(_.STORE_CDN_URL).toLocaleLowerCase(),
      _(_.BASE_URL_SHARED_CDN).toLocaleLowerCase(),
      _(_.CLAN_CDN_ASSET_URL).toLocaleLowerCase(),
      _(_.VIDEO_CDN_URL).toLocaleLowerCase(),
      `support.steampowered.com`,
      `steamcdn-a.akamaihd.net`,
      `cdn.cloudflare.steamstatic.com`,
      `cdn.fastly.steamstatic.com`,
      `cdn.akamai.steamstatic.com`,
    ].indexOf(_) >= 0
  );
}
function _(_) {
  return _.SNR &&
    _.SNR.length > 0 &&
    _ &&
    _.toLocaleLowerCase().indexOf(`snr=`) == -1
    ? _ + (_.indexOf(`?`) >= 0 ? `&` : `?`) + `snr=` + _.SNR
    : _;
}
function _() {
  return `${_.HELP_BASE_URL}${_()}/`;
}
function _(_, _) {
  return (
    _.IN_STEAMUI &&
      !_.startsWith(`steam://`) &&
      (_ = _ ? `steam://openurl_external/${_}` : `steam://openurl/${_}`),
    _
  );
}
function _(_, _, _) {
  let _ = new URL(_),
    _ = _.pathname.split(`/`).filter(Boolean),
    _ = _.findIndex((_) => _.startsWith(_));
  return _ === -1
    ? null
    : ((_[_] = _[_] + _), (_.pathname = `/` + _.join(`/`)), _.toString());
}
function _(_) {
  return _.startsWith(`http://`) || _.startsWith(`https://`);
}
function _(_) {
  return !!_?.startsWith(`data:`);
}
function _(_) {
  return _.COMMUNITY_BASE_URL + `linkfilter/?u=` + encodeURIComponent(_);
}
function _(_, _) {
  if (_.startsWith(`steam://`) || _.startsWith(`/`)) return !1;
  let _ = _(_).toLowerCase(),
    _ = _(_.COMMUNITY_BASE_URL).toLowerCase(),
    _ = _(_.STORE_BASE_URL).toLowerCase(),
    _ = _(_.HELP_BASE_URL).toLowerCase(),
    _ = _(_.PARTNER_BASE_URL || ``).toLowerCase();
  return (
    _ !== _ &&
    _ !== _ &&
    _ !== _ &&
    _ !== `support.steampowered.com` &&
    _ !== _ &&
    _ !== `www.dota2.com` &&
    (!_ || _.filter((_) => _ == _).length == 0)
  );
}
function _(_, _) {
  let _;
  ((_ = `currentTarget` in _ ? _.currentTarget.ownerDocument.defaultView : _),
    _.indexOf(`steam://`) == 0
      ? _(_, `URL.ExecuteSteamURL`)
        ? _.SteamClient.URL.ExecuteSteamURL(_)
        : (_.location.href = _)
      : _.open(
          _,
          void 0,
          `menubar,location,resizable,scrollbars,status,noopener`,
        ));
}
function _(_) {
  let {
    bDisableContextMenu: _,
    onContextMenu: _,
    bForceExternal: _,
    href: _,
    bUseLinkFilter: _,
    getPIDFromEvent: _,
    ..._
  } = _;
  (!_ && !_ && (_ = _), _ && _ && (_ = _(_)), (_ ||= () => 0));
  let _ = (_) => {
    (_.preventDefault(),
      _ &&
        _(window, _, {
          bForceExternal: !!_,
          bUseLinkFilter: !!_,
          unPID: _(_),
        }));
  };
  return (0, _.jsx)(`a`, {
    ..._,
    href: _,
    onClick: _,
    onContextMenu: _,
    rel: _ ? `noopener noreferrer` : void 0,
    children: _.children,
  });
}
function _(_) {
  let { strURL: _, opts: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onSelected: () => {
          _(_);
        },
        children: _(`#ContextMenu_CopyLinkURL`),
      }),
      (0, _.jsx)(_, {
        onSelected: (_) => {
          _(_, _, _);
        },
        children: _(`#ContextMenu_OpenLinkInNewWindow`),
      }),
    ],
  });
}
function _(_, _) {
  let _ = _.currentTarget;
  return _(
    (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        strURL: _.href,
        opts: _,
      }),
    }),
    _,
  );
}
function _(_, _, _ = {}) {
  let { bForceExternal: _, unPID: _, bUseLinkFilter: _ } = _,
    _;
  ((_ = `currentTarget` in _ ? _.currentTarget.ownerDocument.defaultView : _),
    _(`WebChat.OpenURLInClient`)
      ? SteamClient.WebChat.OpenURLInClient(_, _ || 0, !!_)
      : _.indexOf(`steam://`) == 0 &&
          _.indexOf(`steam://remoteplay/connect`) != 0
        ? (_.location.href = _)
        : _.open(
            _,
            void 0,
            `menubar,location,resizable,scrollbars,status,noopener` +
              (_ ? `,noreferrer` : ``),
          ));
}
var _ = (_) =>
  (0, _.jsx)(_.Fragment, {
    children: _.condition ? _.wrap(_.children) : _.children,
  });
_(
  [_],
  class {
    m_Promise;
    m_Value = void 0;
    constructor(_) {
      (_(this), (this.promise = _));
    }
    set promise(_) {
      ((this.m_Promise = _),
        (this.m_Value = void 0),
        _?.then((_) => {
          this.m_Promise === _ && (this.m_Value = _);
        }));
    }
    get promise() {
      return this.m_Promise;
    }
    get value() {
      return this.m_Value;
    }
  }.prototype,
  `m_Value`,
  void 0,
);
function _(_, _, _) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)(`div`, {
      ..._,
      role: _,
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
function _(_, _) {
  return _ < _ ? -1 : +(_ > _);
}
function _(_) {
  if (typeof _ != `string`) return NaN;
  let _ = !_.includes(`ms`) && _.includes(`s`),
    _ = Number.parseFloat(_);
  return (_ && (_ *= 1e3), _);
}
var _ = `j-9OlMX1FS8-`,
  _ = `_4XPgNWVf7Kk-`;
function _(_) {
  let {
      target: _,
      visibilityObserver: _,
      className: _,
      style: _,
      bEnablePointerEvents: _,
      direction: _ = `right`,
      nBodyAlignment: _ = 0.5,
      nBodyDistance: _ = 8,
      nAllowOffscreenPx: _ = 10,
      nMaxLateralMoveOnScreen: _ = void 0,
      onNoSpace: _,
      bTopmost: _,
      children: _,
      ..._
    } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(null),
    [_, _] = _.useState(null),
    _ = _(() => _?.visible),
    _ = _.useCallback(() => {
      let _ = _;
      if (!_ || !_ || !_ || (_ && _ && !_)) return;
      let _ = _.ownerDocument.defaultView;
      if (!_ || _.closed) return;
      ((_.style.display = `flex`),
        requestAnimationFrame(() => {
          _.style.display = `block`;
        }),
        _.showPopover && _.showPopover());
      let _ = _.querySelector(`.hover_arrow.left`),
        _ = _.querySelector(`.hover_arrow.right`),
        _ = _.querySelector(`.hover_arrow.top`),
        _ = _.querySelector(`.hover_arrow.bottom`),
        _ = _.getBoundingClientRect(),
        _ = _.getBoundingClientRect(),
        _ = _ == `overlay` || _ == `overlay-center`,
        _ = _.getBoundingClientRect();
      (_ && _.setAttribute(`style`, `display: none;`),
        _ && _.setAttribute(`style`, `display: none;`),
        _ && _.setAttribute(`style`, `display: none;`),
        _ && _.setAttribute(`style`, `display: none;`));
      let _ = _;
      _.matches(`:dir(rtl)`) &&
        (_ === `left` ? (_ = `right`) : _ === `right` && (_ = `left`));
      let {
          nLeft: _,
          nTop: _,
          nOverflow: _,
          nLateralOverflow: _,
        } = _(_, _, _, _, _, _, _),
        _ = _;
      if (_ > (_ ?? 10) && !_) {
        let _ = _(_),
          {
            nLeft: _,
            nTop: _,
            nOverflow: _,
            nLateralOverflow: _,
          } = _(_, _, _, _, _, _, _);
        if (
          (_ < _ && ((_ = _), (_ = _), (_ = _), (_ = _), (_ = _)),
          _ > (_ ?? 10))
        ) {
          (console.log(
            `Not showing hover because it didn't fit in the main or alt direction`,
          ),
            _.setAttribute(`style`, `display: none;`),
            _(!0),
            _?.());
          return;
        }
      }
      _ !== 0 && !_ && ([_, _] = _(_, _, _, _, _));
      let _ = null;
      switch (_) {
        case `left`:
          _ = _;
          break;
        case `right`:
          _ = _;
          break;
        case `top`:
          _ = _;
          break;
        case `bottom`:
          _ = _;
      }
      (_ && _.setAttribute(`style`, ``),
        _ != _ && _(_),
        _ != _ && _(_),
        _ || _(!0));
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _]);
  _.useEffect(() => _(), [_]);
  let _ = Object.assign(
      {
        left: _,
        top: _,
      },
      _,
    ),
    _ = !_ || _;
  return (0, _.jsx)(`div`, {
    popover: `manual`,
    ref: _,
    className: _(_, _ && `g1g9mPP3puo-`),
    children: (0, _.jsx)(`div`, {
      ..._,
      className: _(
        _,
        _ && _ && `LOM2GWvX6DQ-`,
        _ && `HfimKmGrhsA-`,
        _ && `zq7eS0pbX3I-`,
        _,
      ),
      style: _,
      ref: _,
      children: _,
    }),
  });
}
function _(_) {
  switch (_) {
    case `right`:
      return `left`;
    case `left`:
      return `right`;
    case `bottom`:
      return `top`;
    case `top`:
      return `bottom`;
    case `overlay`:
      return `overlay`;
    case `overlay-center`:
      return `overlay-center`;
  }
}
function _(_, _, _, _, _, _, _) {
  let _ = _.innerWidth,
    _ = _.innerHeight,
    _,
    _,
    _,
    _;
  switch (_) {
    case `right`:
      ((_ = _.right + _ - _.left),
        (_ = _(_.top - _.top, _.height, _.height, _)),
        (_ = Math.max(0, _ + _.width - _)),
        (_ = [Math.max(0, 0 - _), Math.max(0, _ + _.height - _)]));
      break;
    case `left`:
      ((_ = _.left - _ - _.width - _.left),
        (_ = _(_.top - _.top, _.height, _.height, _)),
        (_ = Math.max(0, 0 - _)),
        (_ = [Math.max(0, 0 - _), Math.max(0, _ + _.height - _)]));
      break;
    case `bottom`:
      ((_ = _(_.left - _.left, _.width, _.width, _)),
        (_ = _.bottom + _ - _.top),
        (_ = Math.max(0, _ + _.height - _)),
        (_ = [Math.max(0, 0 - _), Math.max(0, _ + _.width - _)]));
      break;
    case `top`:
      ((_ = _(_.left - _.left, _.width, _.width, _)),
        (_ = _.top - _ - _.height - _.top),
        (_ = Math.max(0, 0 - _)),
        (_ = [Math.max(0, 0 - _), Math.max(0, _ + _.width - _)]));
      break;
    case `overlay`:
      ((_ = _.left - _.left), (_ = _.top - _.top), (_ = 0), (_ = [0, 0]));
      break;
    case `overlay-center`:
      ((_ = _.left - _.left + 0.5 * _.width - 0.5 * _.width),
        (_ = _.top - _.top + 0.5 * _.height - 0.5 * _.height),
        (_ = 0),
        (_ = [0, 0]));
  }
  return {
    nLeft: _,
    nTop: _,
    nOverflow: _,
    nLateralOverflow: _,
  };
}
function _(_, _, _, _) {
  return Math.max(0, Math.min(1, _)) * (_ - _) + _;
}
function _(_, _, _, _, _) {
  let _ = Math.max(_[0], _[1]);
  (_ !== void 0 && (_ = Math.min(_, _)), (_ = Math.max(0, _)));
  let _ = _[0] > _[1] ? _ : -_;
  return (_ === `left` || _ === `right` ? (_ += _) : (_ += _), [_, _]);
}
var _ = `sT2QLMTaLYc-`,
  _ = `DfVfulWxy6w-`,
  _ = _(_());
function _(_) {
  let { divProps: _, tooltipProps: _ } = _({
    ..._,
    toolTipContent: _.toolTipContent
      ? (0, _.jsx)(_, {
          children: _(_.toolTipContent),
        })
      : null,
  });
  return (0, _.jsxs)(_, {
    className: `tool-tip-source`,
    noFocusRing: !0,
    focusable: _.bNavStop ?? !!_.onClick,
    ..._,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { divProps: _, tooltipProps: _ } = _(_);
  return (0, _.jsxs)(_, {
    className: `tool-tip-source`,
    noFocusRing: !0,
    focusable: _.bNavStop ?? !!_.onClick,
    ..._,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { children: _ } = _,
    { divProps: _, tooltipProps: _ } = _({
      ..._,
      toolTipContent: _.toolTipContent
        ? (0, _.jsx)(_, {
            children: _(_.toolTipContent),
          })
        : null,
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.cloneElement(_, {
        ..._,
        ..._.props,
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let {
      toolTipContent: _,
      nDelayShowMS: _ = 300,
      bDisabled: _,
      bPortalToBody: _,
      direction: _,
      nBodyAlignment: _,
      nBodyDistance: _,
      nAllowOffscreenPx: _,
      nMaxLateralMoveOnScreen: _,
      strTooltipClassname: _,
      bNavStop: _,
      bTopmost: _,
      usePointerEvents: _,
      children: _,
      onMouseLeave: _,
      ..._
    } = _,
    _ = {
      direction: _,
      nBodyAlignment: _,
      nBodyDistance: _,
      nAllowOffscreenPx: _,
      nMaxLateralMoveOnScreen: _,
      className: _,
      bTopmost: _,
    },
    [_, _] = _.useState(!1),
    [_, _] = _.useState(),
    _ = _.useCallback(
      (_) => {
        (_ && `pointerType` in _ && _.pointerType != `mouse`) ||
          (_(!0), _(_.currentTarget));
      },
      [_],
    ),
    _ = _.useCallback(() => {
      _(!1);
    }, []);
  _.useEffect(() => {
    _ && _ && _(!1);
  }, [_, _]);
  let _ = {
      active: _ && !_,
      target: _,
      bPortalToBody: _,
      nDelayShowMS: _,
      hoverPositionProps: _,
      children: _,
    },
    _ = {
      ..._,
    };
  return (
    _
      ? ((_.onPointerEnter = _), (_.onPointerLeave = _))
      : ((_.onMouseEnter = _), (_.onMouseLeave = _)),
    {
      divProps: _,
      stateHandlers: {
        setTarget: _,
        setHovered: _,
      },
      tooltipProps: _,
    }
  );
}
function _(_) {
  return _;
}
function _(_) {
  let { divProps: _, tooltipProps: _, stateHandlers: _ } = _(_);
  return {
    divProps: _,
    stateHandlers: _,
    tooltip: (0, _.jsx)(_, {
      ..._,
    }),
  };
}
function _(_) {
  return (0, _.jsx)(`div`, {
    ..._,
    className: _(_, _.className),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    ..._,
  });
}
function _(_) {
  let {
      active: _,
      target: _,
      bPortalToBody: _,
      nDelayShowMS: _ = 300,
      hoverPositionProps: _,
      children: _,
    } = _,
    [_, _] = _.useState(_);
  if (
    (_.useEffect(() => {
      if (_) {
        if (_) {
          let _ = window.setTimeout(() => _(!0), _);
          return () => window.clearTimeout(_);
        }
        _(!0);
      } else {
        if (_()) return;
        _(!1);
      }
    }, [_]),
    !_ || !_ || !_)
  )
    return null;
  let _ = (0, _.jsx)(_, {
    target: _,
    ..._,
    children: _,
  });
  return _ ? _.createPortal(_, _.ownerDocument.body) : _;
}
var _ = `zsscclNHDrk-`;
function _(_) {
  let { customTooltip: _, tooltip: _, className: _, icon: _, small: _ } = _,
    _ = _ ? _ : _,
    _ = _;
  return (
    (_ ??= _ ? (0, _.jsx)(_, {}) : void 0),
    (_ ??= (0, _.jsxs)(_.Fragment, {
      children: [`\xA0`, (0, _.jsx)(_, {})],
    })),
    (0, _.jsx)(_, {
      toolTipContent: _,
      className: _(_, `HelperTooltip`, _ && `wShPvD3k-hM-`, _),
      children: _,
    })
  );
}
var _ = _.createContext({}),
  _ = () => _.useContext(_);
function _(_, _) {
  return _()[_] ?? _;
}
function _() {
  let _ = _();
  return _ ? _.bClassicMode : !1;
}
var _ = `AZmUeQj5Llg-`,
  _ = `TGphxcMOj6Q-`,
  _ = `P4QYg6fp7VQ-`,
  _ = `_4C5QmCMW3EU-`,
  _ = `uWmbIq7PHJs-`,
  _ = `_9dCz1-niBHE-`;
function _(_) {
  let _ = _(`ToggleControl`, _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let { value: _, onChange: _, disabled: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `h-6omscqZ1U-`),
    onClick: () => !_ && _ && _(!_),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _, _ ? _ : _),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _ ? _ : _),
      }),
    ],
  });
}
function _(_) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
var _ = _.createContext(null),
  _ = _.forwardRef(function (_, _) {
    let { _: _, className: _, ..._ } = _,
      _ = _.useContext(_)?.setHeaderId,
      _ = _.useId(),
      _ = _ || _;
    return (
      _.useEffect(() => {
        _ && _(_);
      }, [_, _]),
      (0, _.jsx)(`div`, {
        _: _,
        role: `heading`,
        "aria-level": 2,
        ..._,
        className: _(`DialogHeader`, _),
        ref: _,
      })
    );
  }),
  _ = _(`DialogSubHeader`, `heading`, {
    "aria-level": 3,
  });
_(`SettingsDialogSubHeader`, `heading`, {
  "aria-level": 3,
});
var _ = _(`DialogFooter`),
  _ = _(`DialogLabel _DialogLayout`),
  _ = _(`DialogBodyText`),
  _ = _(`DialogBody`),
  _ = _(`DialogBody`);
_(`DialogInnerBody`);
var _ = _(`DialogControlsSection`),
  _ = _(`DialogControlsSectionHeader`, `heading`, {
    "aria-level": 3,
  }),
  _ = _(`DialogTwoColLayout _DialogColLayout`),
  _ = _(`DialogThreeColLayout _DialogColLayout`);
_(`DialogTwoThirdColLayout _DialogColLayout`);
var _ = _(`DialogColumn _DialogLayout`);
function _(_) {
  let _ = _(`Content`, _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let { children: _, bCenterVertically: _, refElem: _, ..._ } = _,
    _ = `DialogContent _DialogLayout` + (_.className ? ` ` + _.className : ``);
  return (
    _ && (_ += ` _DialogCenterVertically`),
    (0, _.jsx)(`div`, {
      ..._,
      ref: _,
      className: _,
      children: (0, _.jsx)(`div`, {
        className: `DialogContent_InnerWidth`,
        children: _,
      }),
    })
  );
}
var _ = class extends _.Component {
  OnSubmit(_) {
    (_.preventDefault(),
      _.stopPropagation(),
      this.props.onSubmit && this.props.onSubmit(_));
  }
  render() {
    return (0, _.jsx)(`form`, {
      ...this.props,
      onSubmit: this.OnSubmit,
    });
  }
};
_([_], _.prototype, `OnSubmit`, null);
function _(_) {
  let { classNameContent: _, bCenterVertically: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    bCenterVertically: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { label: _, tooltip: _, className: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _(`DialogInputLabelGroup`, `_DialogLayout`, _),
    children: [
      _ &&
        (0, _.jsxs)(_, {
          children: [
            _,
            ` `,
            _ &&
              (0, _.jsx)(_, {
                tooltip: _,
              }),
            ` `,
          ],
        }),
      _,
    ],
  });
}
function _(_) {
  let { label: _, tooltip: _, className: _, children: _ } = _;
  return (0, _.jsxs)(`label`, {
    className: _(`DialogInputLabelGroup`, `_DialogLayout`, _),
    children: [
      _ &&
        (0, _.jsxs)(_, {
          children: [
            _,
            ` `,
            _ &&
              (0, _.jsx)(_, {
                tooltip: _,
              }),
            ` `,
          ],
        }),
      _,
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
    let _ = _(),
      { svgicon: _, ..._ } = _,
      _ = _(
        _.className,
        _ !== void 0 && `hasSVGIcon`,
        _.disabled && `Disabled`,
        _.strButtonClassName,
      ),
      _ = (_) => {
        if (!_.disabled && _)
          return (_) => {
            (_.stopPropagation(), _(_));
          };
      };
    return (0, _.jsxs)(_, {
      ref: _,
      onOKActionDescription: _.disabled ? null : void 0,
      noFocusRing: !!_.strButtonClassName,
      ..._,
      className: _,
      disabled: !1,
      onClick: _(_.onClick),
      onPointerDown: _(_.onPointerDown),
      onPointerUp: _(_.onPointerUp),
      onPointerCancel: _(_.onPointerCancel),
      onMouseDown: _(_.onMouseDown),
      onMouseUp: _(_.onMouseUp),
      onTouchStart: _(_.onTouchStart),
      onTouchEnd: _(_.onTouchEnd),
      onTouchCancel: _(_.onTouchCancel),
      onSubmit: _(_.onSubmit),
      children: [_ && _(), _.children],
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      preferredFocus: !0,
      type: _.onClick ? `button` : `submit`,
      ..._,
      ref: _,
      className: _(_.className, `DialogButton`, `_DialogLayout`, `Primary`),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: `button`,
      ..._,
      ref: _,
      className: _(_.className, `DialogButton`, `_DialogLayout`, `Secondary`),
    });
  });
_.forwardRef(function (_, _) {
  return (0, _.jsx)(_, {
    type: `button`,
    ..._,
    ref: _,
    className: _(_.className, `DialogButton`, `_DialogLayout`, `EmptyButton`),
  });
});
var _ = _.forwardRef(function (_, _) {
  return (0, _.jsx)(_, {
    type: `button`,
    ..._,
    ref: _,
    className: _(_.className, `DialogButton _DialogLayout Small`),
  });
});
_.forwardRef(function (_, _) {
  return (0, _.jsx)(_, {
    type: `button`,
    ..._,
    ref: _,
    className: _(_.className, `TextButton`),
  });
});
function _(_) {
  return (0, _.jsxs)(_, {
    className: _.className,
    children: [
      (0, _.jsxs)(_, {
        onClick: _.onOK,
        disabled: _.bOKDisabled,
        autoFocus: _.focusButton == `primary`,
        children: [_.strOKText || _(`#Button_Confirm`), ` `],
      }),
      (0, _.jsx)(_, {
        onClick: _.onCancel,
        disabled: _.bCancelDisabled,
        autoFocus: _.focusButton == `secondary`,
        children: _.strCancelText || _(`#Button_Cancel`),
      }),
    ],
  });
}
function _(_) {
  let _ = _.bOKDisabled ? _ : _,
    _ = _.bOKDisabled ? _ : _;
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        onClick: _.onOK,
        disabled: _.bOKDisabled,
        autoFocus: _.focusButton == `primary`,
        children: [_.strOKText || _(`#Button_Confirm`), ` `],
      }),
      (0, _.jsxs)(_, {
        onClick: _.onUpdate,
        disabled: _.bUpdateDisabled,
        children: [_.strUpdateText || _(`#Button_Update`), ` `],
      }),
      (0, _.jsx)(_, {
        onClick: _.onCancel,
        disabled: _.bCancelDisabled,
        autoFocus: _.focusButton == `secondary`,
        children: _.strCancelText || _(`#Button_Cancel`),
      }),
    ],
  });
}
var _ = class extends _.Component {
  constructor(_) {
    (super(_),
      (this.state = {
        checked: _.checked,
        disabled: _.disabled,
      }));
  }
  componentDidUpdate(_) {
    (this.props.controlled ||
      (_.checked != this.props.checked &&
        this.props.checked != this.state.checked &&
        this.setState({
          checked: this.props.checked,
        })),
      _.disabled != this.props.disabled &&
        this.props.disabled != this.state.disabled &&
        this.setState({
          disabled: this.props.disabled,
        }));
  }
  shouldComponentUpdate(_, _) {
    return (
      _.label != this.props.label ||
      _.description != this.props.description ||
      _.onChange != this.props.onChange ||
      _.controlled != this.props.controlled ||
      _.disabled != this.props.disabled ||
      _.disabled != this.state.disabled ||
      _.checked != this.checked ||
      _.checked != this.state.checked
    );
  }
  get checked() {
    return this.props.controlled ? this.props.checked : this.state.checked;
  }
  GetPanelElementProps() {
    let {
      onChange: _,
      checked: _,
      label: _,
      description: _,
      tabIndex: _,
      disabled: _,
      className: _,
      tooltip: _,
      color: _,
      highlightColor: _,
      bottomSeparator: _,
      controlled: _,
      ..._
    } = this.props;
    return {
      ..._,
      tabIndex: _ || 0,
      onActivate: this.Toggle,
      onKeyDown: this.KeyDown,
    };
  }
  Toggle() {
    if (this.props.disabled) return;
    let _ = !this.checked;
    (this.props.controlled ||
      this.setState({
        checked: _,
      }),
      this.props.onChange && this.props.onChange(_));
  }
  KeyDown(_) {
    _.keyCode == 32 && (this.Toggle(), _.preventDefault(), _.stopPropagation());
  }
  SetChecked(_, _) {
    (this.setState({
      checked: _,
    }),
      _ && this.props.onChange && this.props.onChange(_));
  }
};
(_([_], _.prototype, `Toggle`, null),
  _([_], _.prototype, `KeyDown`, null),
  _([_], _.prototype, `SetChecked`, null));
var _ = class extends _ {
    render() {
      let _ = `DialogCheckbox` + (this.checked ? ` Active` : ``);
      return (
        this.state.disabled == 1 && (_ += ` Disabled`),
        this.props.label
          ? (0, _.jsxs)(_, {
              role: `checkbox`,
              "aria-checked": this.checked,
              className:
                `DialogCheckbox_Container _DialogLayout ` +
                (this.props.className ? this.props.className : ``) +
                (this.state.disabled ? ` Disabled` : ``),
              ...this.GetPanelElementProps(),
              children: [
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    color: this.props.color,
                    highlightColor: this.props.highlightColor,
                  }),
                }),
                (0, _.jsxs)(`div`, {
                  className: `DialogToggle_Label`,
                  children: [
                    typeof this.props.label == `string` &&
                      (0, _.jsx)(`span`, {
                        children: this.props.label,
                      }),
                    typeof this.props.label != `string` && this.props.label,
                    this.props.tooltip &&
                      (0, _.jsx)(_, {
                        tooltip: this.props.tooltip,
                      }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  style: {
                    clear: `left`,
                  },
                }),
                this.props.description &&
                  (0, _.jsx)(`div`, {
                    className: `DialogToggle_Description`,
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            })
          : (0, _.jsx)(_, {
              role: `checkbox`,
              "aria-checked": this.checked,
              className: _,
              ...this.GetPanelElementProps(),
              children: (0, _.jsx)(_, {}),
            })
      );
    }
  },
  _ = class extends _ {
    render() {
      let _ = this.checked ? ` Active` : ``;
      return (
        this.state.disabled == 1 && (_ += ` Disabled`),
        (0, _.jsxs)(_, {
          className: _(
            `DialogRoundCheckboxField_Container`,
            this.props.className,
            this.props.label ? `WithLabel` : ``,
            _,
          ),
          ...this.GetPanelElementProps(),
          children: [
            (0, _.jsx)(`div`, {
              className: `DialogRoundCheckboxField`,
              children: (0, _.jsx)(`div`, {
                className: `DialogRoundCheckboxField_Control` + _,
                children: (0, _.jsx)(`div`, {
                  className: `DialogRoundCheckboxField_OuterCircle`,
                  children: (0, _.jsx)(`div`, {
                    className: `DialogRoundCheckboxField_InnerCircle`,
                  }),
                }),
              }),
            }),
            this.props.label &&
              (0, _.jsxs)(`div`, {
                className: `DialogToggle_Label`,
                children: [
                  (0, _.jsx)(`span`, {
                    children: this.props.label,
                  }),
                  this.props.tooltip &&
                    (0, _.jsx)(_, {
                      tooltip: this.props.tooltip,
                    }),
                ],
              }),
          ],
        })
      );
    }
  },
  _ = _.forwardRef(function (_, _) {
    let _ = _(`ToggleField`, _);
    return (0, _.jsx)(_, {
      ref: _,
      ..._,
    });
  }),
  _ = class extends _ {
    OnOffKeyDown(_) {
      (_.keyCode == 37 && this.checked) || (_.keyCode == 39 && !this.checked)
        ? (this.Toggle(), _.preventDefault(), _.stopPropagation())
        : this.KeyDown(_);
    }
    OnNewUIToggle(_) {
      _ !== this.checked && this.Toggle();
    }
    render() {
      let _ =
        `DialogToggleField _DialogInputContainer _DialogLayout ` +
        (this.props.className ? this.props.className : ``);
      return (
        this.props.disabled && (_ += ` Disabled`),
        (0, _.jsxs)(`div`, {
          className: _,
          tabIndex: this.props.tabIndex || 0,
          onKeyDown: this.OnOffKeyDown,
          children: [
            (0, _.jsxs)(`div`, {
              className: `displayColumn alignSelfCenter`,
              children: [
                (0, _.jsxs)(`div`, {
                  className: `DialogToggle_Label`,
                  children: [
                    (0, _.jsx)(`span`, {
                      children: this.props.label,
                    }),
                    this.props.tooltip &&
                      (0, _.jsx)(_, {
                        tooltip: this.props.tooltip,
                      }),
                  ],
                }),
                this.props.description &&
                  (0, _.jsx)(`div`, {
                    className: `DialogToggle_Description`,
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            }),
            this.props.useToggleRail
              ? (0, _.jsx)(`div`, {
                  className: `DialogToggleField_NewUIContainer`,
                  children: (0, _.jsx)(_, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, _.jsx)(`div`, {
                  className: `DialogToggleField_Control`,
                  onClick: this.Toggle,
                  children: (0, _.jsxs)(_, {
                    className: `DialogToggleField_OptionPanel`,
                    onOKButton: this.Toggle,
                    children: [
                      (0, _.jsx)(`div`, {
                        className:
                          `DialogToggleField_Option Off` +
                          (this.checked ? `` : ` Active`),
                        children: _(`#Dialog_Off`),
                      }),
                      (0, _.jsx)(`div`, {
                        className:
                          `DialogToggleField_Option On` +
                          (this.checked ? ` Active` : ``),
                        children: _(`#Dialog_On`),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
(_([_], _.prototype, `OnOffKeyDown`, null),
  _([_], _.prototype, `OnNewUIToggle`, null));
var _ = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(_, _) {
      ((this.m_window = _),
        (this.m_options = {
          timing: `sine`,
          ..._,
        }));
    }
    Start() {
      ((this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration));
      let _;
      switch (this.m_options.timing) {
        case `linear`:
          _ = function (_) {
            return _;
          };
          break;
        case `cubic-in-out`:
          _ = function (_) {
            return _ < 0.5
              ? 4 * _ * _ * _
              : (_ - 1) * (2 * _ - 2) * (2 * _ - 2) + 1;
          };
          break;
        default:
          _ = function (_) {
            return 0.5 - Math.cos(_ * Math._) / 2;
          };
      }
      ((this.m_bActive = !0),
        (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, _)),
        this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc));
    }
    BIsActive() {
      return this.m_bActive;
    }
    End() {
      if (this.m_bActive) {
        try {
          this.Update(1);
        } catch {}
        (this.ClearInterval(), this.FireOnComplete());
      }
    }
    FireOnComplete() {
      this.m_options.onComplete && this.m_options.onComplete();
    }
    Cancel() {
      this.m_bActive = !1;
    }
    OnInterval(_) {
      if (!this.m_bActive) return;
      let _ = performance.now() - this.m_msStart;
      if (_ >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let _ = _ / this.m_options.msDuration;
      try {
        this.Update(_(_));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  _ = class extends _ {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(_, _, _) {
      (super(`ownerDocument` in _ ? _(_) : _, _),
        (this.m_object = _),
        (this.m_propTargets = _));
    }
    Start() {
      this.m_props = {};
      for (let _ in this.m_propTargets) {
        let _ = parseFloat(this.m_object[_]) || 0,
          _ = this.m_propTargets[_];
        _ != _ &&
          (this.m_props[_] = {
            start: _,
            end: _,
          });
      }
      super.Start();
    }
    Update(_) {
      for (let _ in this.m_props) {
        let _ = this.m_props[_],
          _ = _.start + (_.end - _.start) * _;
        this.m_object[_] = _;
      }
    }
  },
  _ = class extends _ {
    m_component;
    m_propTargets;
    m_props = {};
    m_setStateOnComplete;
    constructor(_, _, _) {
      (super(_(_.ref.current), _),
        (this.m_component = _),
        (this.m_propTargets = _),
        (this.m_setStateOnComplete = _.setStateOnComplete));
    }
    Start() {
      this.m_props = {};
      for (let _ in this.m_propTargets) {
        let _ = parseFloat(this.m_component.state[_]) || 0,
          _ = this.m_propTargets[_];
        _ != _ &&
          (this.m_props[_] = {
            start: _,
            end: _,
          });
      }
      super.Start();
    }
    Update(_) {
      let _ = {};
      for (let _ in this.m_props) {
        let _ = this.m_props[_];
        _[_] = _.start + (_.end - _.start) * _;
      }
      this.m_component.setState(_);
    }
    FireOnComplete() {
      (super.FireOnComplete(),
        this.m_setStateOnComplete &&
          this.m_component.setState(this.m_setStateOnComplete));
    }
  },
  _ = _.forwardRef(function (_, _) {
    let _ = _(`InputElement`, _);
    return (0, _.jsx)(_, {
      ..._,
      ref: _,
    });
  }),
  _ = class _ extends _.PureComponent {
    m_CopiedAnimation;
    ref = _.createRef();
    constructor(_) {
      (super(_),
        this.CheckProps(_),
        (this.state = {
          m_CopiedYPos: 0,
          m_bPlayingCopiedAnimation: !1,
          m_bCompletedCopiedAnimation: !1,
          m_bNumberBelowMinRange: !1,
          m_bNumberAboveMaxRange: !1,
          m_bIsNotNumeric: !1,
          m_bIsInvalidURL: !1,
          m_strInvalidURLMessage: null,
          m_bIsInvalidEmail: !1,
          m_bAboveMaxChars: !1,
        }));
    }
    componentDidUpdate(_) {
      this.CheckProps(this.props);
    }
    m_elInput;
    OnInputRef(_) {
      ((this.m_elInput = _),
        this.m_elInput && this.props.focusOnMount && this.m_elInput.focus());
    }
    get element() {
      return this.m_elInput;
    }
    get value() {
      return this.m_elInput && this.m_elInput.value;
    }
    Focus() {
      this.m_elInput?.focus();
    }
    static validateUrl(_) {
      return (
        _ != null &&
        (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          _,
        ) ||
          /^steam:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}/i.test(_))
      );
    }
    static validateEmail(_) {
      return (
        _ != null &&
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          _.toLowerCase(),
        )
      );
    }
    Validate() {
      this.setState({
        m_bNumberBelowMinRange:
          this.props.rangeMin !== null &&
          this.props.rangeMin !== void 0 &&
          Number(this.m_elInput?.value) < this.props.rangeMin,
        m_bNumberAboveMaxRange:
          this.props.rangeMax !== null &&
          this.props.rangeMax !== void 0 &&
          Number(this.m_elInput?.value) > this.props.rangeMax,
        m_bIsNotNumeric:
          this.props.mustBeNumeric == 1 && isNaN(Number(this.m_elInput?.value)),
        m_bIsInvalidURL:
          this.props.mustBeURL == 1 && !_.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == 1 &&
          !_.validateEmail(this.m_elInput?.value),
        m_bAboveMaxChars:
          this.props.maxChars != null &&
          this.m_elInput != null &&
          this.m_elInput.value.length > this.props.maxChars,
      });
    }
    OnChanged(_) {
      (this.props.onChange && this.props.onChange(_), this.Validate());
    }
    OnCopyClick(_) {
      if (!this.m_elInput) return;
      this.m_elInput.select();
      let _ = this.m_elInput.ownerDocument;
      _.queryCommandEnabled(`copy`) &&
        (_.execCommand(`copy`),
        _.currentTarget.focus(),
        this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel(),
        this.setState({
          m_bCompletedCopiedAnimation: !1,
        }),
        this.setState(
          {
            m_CopiedYPos: -4,
          },
          () => {
            ((this.m_CopiedAnimation = new _(
              this,
              {
                m_CopiedYPos: -24,
              },
              {
                msDuration: 300,
                timing: `sine`,
                setStateOnComplete: {
                  m_bCompletedCopiedAnimation: !0,
                },
              },
            )),
              this.m_CopiedAnimation.Start());
          },
        ));
    }
    OnClearClick(_) {
      this.m_elInput &&
        this.m_elInput.value &&
        (Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          `value`,
        ).set.call(this.m_elInput, ``),
        this.m_elInput.dispatchEvent(
          new Event(`input`, {
            bubbles: !0,
          }),
        ));
    }
    CheckProps(_) {
      _(
        !(_.bShowClearAction || _.bAlwaysShowClearAction) || _.onChange,
        `In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input.`,
      );
    }
    render() {
      let {
          label: _,
          description: _,
          requiredLabel: _,
          bShowCopyAction: _,
          bShowClearAction: _,
          bAlwaysShowClearAction: _,
          rangeMin: _,
          rangeMax: _,
          mustBeNumeric: _,
          mustBeURL: _,
          fnStrValidateURL: _,
          mustBeEmail: _,
          focusOnMount: _,
          tooltip: _,
          inlineControls: _,
          maxChars: _,
          ..._
        } = this.props,
        _ =
          `DialogInput DialogInputPlaceholder DialogTextInputBase` +
          (_.className ? ` ` + _.className : ``),
        _ = `copiedAnimation`,
        _ = this.state.m_bCompletedCopiedAnimation;
      (this.m_CopiedAnimation && (_ = `copiedAnimation animationPlaying`),
        _ && (_ = `copiedAnimation animationComplete`));
      let _ = {};
      this.state.m_CopiedYPos !== void 0 &&
        (_.transform = `translateY(` + this.state.m_CopiedYPos + `px)`);
      let _ = (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsxs)(_, {
            className: `DialogInput_Wrapper _DialogLayout`,
            "flow-children": `row`,
            ref: this.ref,
            children: [
              (0, _.jsx)(_, {
                type: `text`,
                ..._,
                className: _,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              _ &&
                (0, _.jsxs)(`div`, {
                  className: `displayRow`,
                  children: [
                    (0, _.jsx)(_, {
                      className: `DialogInput_CopyAction Primary`,
                      onClick: this.OnCopyClick,
                      children: _(`#Button_Copy`),
                    }),
                    (0, _.jsx)(`div`, {
                      style: _,
                      className: _,
                      children: _(`#Button_Copied`),
                    }),
                  ],
                }),
              (_ || (_ && _.value)) &&
                (0, _.jsx)(`div`, {
                  className: `DialogInput_ClearAction`,
                  onClick: this.OnClearClick,
                  children: (0, _.jsx)(_, {}),
                }),
              _,
            ],
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `DialogLabelExplainer`,
              children: _,
            }),
        ],
      });
      return _
        ? (0, _.jsx)(`div`, {
            className: `DialogInputLabelGroup _DialogLayout DialogRequirementLabel`,
            children: (0, _.jsxs)(`label`, {
              children: [
                (0, _.jsxs)(`div`, {
                  className: `DialogLabel`,
                  children: [
                    _,
                    ` `,
                    this.props.tooltip &&
                      (0, _.jsx)(_, {
                        tooltip: this.props.tooltip,
                      }),
                    (0, _.jsx)(`span`, {
                      className: `DialogInputRequirementLabel`,
                      children: this.props.requiredLabel,
                    }),
                    ` `,
                  ],
                }),
                _,
                this.state.m_bNumberBelowMinRange
                  ? (0, _.jsxs)(`div`, {
                      children: [` `, _(`#Input_Error_NumberTooSmall`), ` `],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, _.jsxs)(`div`, {
                      children: [` `, _(`#Input_Error_NumberTooLarge`), ` `],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, _.jsxs)(`div`, {
                      children: [` `, _(`#Input_Error_MustBeURL`), ` `],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, _.jsxs)(`div`, {
                      children: [` `, this.state.m_strInvalidURLMessage, ` `],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, _.jsxs)(`div`, {
                      children: [` `, _(`#Input_Error_MustBeEmail`), ` `],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, _.jsxs)(`div`, {
                      children: [` `, _(`#Input_Error_MustBeNumber`), ` `],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, _.jsxs)(`div`, {
                      children: [
                        ` `,
                        _(`#Input_Error_TooManyCharacters`, _),
                        ` `,
                      ],
                    })
                  : null,
              ],
            }),
          })
        : _;
    }
  };
(_([_], _.prototype, `OnInputRef`, null),
  _([_], _.prototype, `OnChanged`, null),
  _([_], _.prototype, `OnCopyClick`, null),
  _([_], _.prototype, `OnClearClick`, null));
var _ = class extends _ {
  m_bFocused = !1;
  OnBackgroundClick() {
    this.m_elInput && this.m_elInput.focus();
  }
  OnInputFocus(_) {
    (this.m_bFocused || ((this.m_bFocused = !0), this.forceUpdate()),
      this.props.onFocus && this.props.onFocus(_));
  }
  OnInputBlur(_) {
    (this.m_bFocused && ((this.m_bFocused = !1), this.forceUpdate()),
      this.props.onBlur && this.props.onBlur(_));
  }
  render() {
    let {
      label: _,
      description: _,
      requiredLabel: _,
      bShowCopyAction: _,
      bShowClearAction: _,
      bAlwaysShowClearAction: _,
      rangeMin: _,
      rangeMax: _,
      maxChars: _,
      mustBeNumeric: _,
      mustBeURL: _,
      fnStrValidateURL: _,
      mustBeEmail: _,
      focusOnMount: _,
      tooltip: _,
      inlineControls: _,
      className: _,
      children: _,
      ..._
    } = this.props;
    return (0, _.jsx)(`div`, {
      className: `DialogInputLabelGroup _DialogLayout DialogListBuilderInput`,
      children: (0, _.jsxs)(`label`, {
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `DialogLabel`,
              children: _,
            }),
          (0, _.jsx)(`div`, {
            className: _(
              `_DialogInputContainer`,
              `DialogTextInputBase`,
              this.m_bFocused && `Active`,
            ),
            onClick: this.OnBackgroundClick,
            children: (0, _.jsxs)(_, {
              className: `DialogListBuilderInput_List`,
              "flow-children": `row`,
              children: [
                _.Children.map(_, (_, _) =>
                  (0, _.jsx)(
                    `div`,
                    {
                      className: `DialogListBuilderInput_ListItem`,
                      children: _,
                    },
                    _,
                  ),
                ),
                (0, _.jsx)(_, {
                  type: `text`,
                  ..._,
                  className: `DialogListBuilderInput_Input DialogInputPlaceholder`,
                  ref: this.OnInputRef,
                  onFocus: this.OnInputFocus,
                  onBlur: this.OnInputBlur,
                  size: 4,
                }),
              ],
            }),
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `DialogLabelExplainer`,
              children: _,
            }),
        ],
      }),
    });
  }
};
(_([_], _.prototype, `OnBackgroundClick`, null),
  _([_], _.prototype, `OnInputFocus`, null),
  _([_], _.prototype, `OnInputBlur`, null));
var _ = (_, _) =>
    `` + (_ == null ? null : Number.parseFloat(_.toFixed(3))) + (_ ?? ``),
  _ = (_) => {
    let _ = _(`SliderField`, _);
    return (0, _.jsx)(_, {
      ..._,
    });
  },
  _ = class extends _.Component {
    m_flLastSetValue = null;
    constructor(_) {
      super(_);
    }
    ClampValue(_) {
      return _ === void 0 || isNaN(_) || _ < this.props.min
        ? this.props.min
        : _ > this.props.max
          ? this.props.max
          : _;
    }
    BPropsValid() {
      return this.props.max > this.props.min;
    }
    m_elSlider;
    m_rectSlider;
    OnMouseDown(_) {
      ((this.m_elSlider = _.currentTarget),
        (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
        this.props.onChangeStart && this.props.onChangeStart(1),
        this.AdjustSliderForClientX(_.clientX, 1),
        this.m_elSlider.ownerDocument.defaultView?.addEventListener(
          `mousemove`,
          this.OnMouseMove,
        ),
        this.m_elSlider.ownerDocument.defaultView?.addEventListener(
          `mouseup`,
          this.OnMouseUp,
        ));
    }
    OnMouseMove(_) {
      this.AdjustSliderForClientX(_.clientX, 1);
    }
    OnMouseUp(_) {
      (this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        `mousemove`,
        this.OnMouseMove,
      ),
        this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
          `mouseup`,
          this.OnMouseUp,
        ),
        this.CompleteChange(1));
    }
    OnTouchStart(_) {
      ((this.m_elSlider = _.currentTarget),
        (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
        this.props.onChangeStart && this.props.onChangeStart(0),
        this.AdjustSliderForClientX(_.touches[0].clientX, 0),
        this.m_elSlider.ownerDocument.defaultView?.addEventListener(
          `touchmove`,
          this.OnTouchMove,
        ),
        this.m_elSlider.ownerDocument.defaultView?.addEventListener(
          `touchend`,
          this.OnTouchEnd,
        ));
    }
    OnTouchMove(_) {
      this.AdjustSliderForClientX(_.touches[0].clientX, 0);
    }
    OnTouchEnd(_) {
      (this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        `touchmove`,
        this.OnTouchMove,
      ),
        this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
          `touchend`,
          this.OnTouchEnd,
        ),
        this.CompleteChange(0));
    }
    OnKeyDown(_) {
      let _ = 1;
      (_.ctrlKey &&
        (_ = Math.max(
          1,
          Math.floor((this.props.max - this.props.min) * 0.1 + 0.5),
        )),
        _.keyCode == 37
          ? (this.IncrementValue(-1 * _), _.preventDefault())
          : _.keyCode == 39 && (this.IncrementValue(1 * _), _.preventDefault()),
        this.CompleteChange(2));
    }
    AdjustSliderForClientX(_, _) {
      let _ =
        (_ - this.m_rectSlider.left) /
        (this.m_rectSlider.right - this.m_rectSlider.left);
      this.m_elSlider?.matches(`:dir(rtl)`) && (_ = 1 - _);
      let _ = _ * (this.props.max - this.props.min) + this.props.min;
      _ = Math.floor(_ + 0.5);
      let _ = this.ClampValue(_);
      _ != this.props.value &&
        (this.props.onChange && this.props.onChange(_, _),
        (this.m_flLastSetValue = _));
    }
    CompleteChange(_) {
      this.m_flLastSetValue != null &&
        (this.props.onChangeComplete &&
          this.props.onChangeComplete(this.m_flLastSetValue, _),
        (this.m_flLastSetValue = null));
    }
    IncrementValue(_) {
      let _ = this.ClampValue(this.props.value + _);
      _ != this.props.value &&
        (this.props.onChange && this.props.onChange(_, 2),
        (this.m_flLastSetValue = _));
    }
    render() {
      let _ = {},
        _ = {};
      if (this.BPropsValid()) {
        let _ =
          (100 * (this.props.value - this.props.min)) /
            (this.props.max - this.props.min) +
          `%`;
        ((_.width = _),
          (_ = {
            "--position": _,
          }));
      }
      let { label: _, description: _, tooltip: _, ..._ } = this.props,
        _ = this.props.renderValue ?? _;
      return (0, _.jsxs)(`div`, {
        className:
          `DialogSlider_Container _DialogInputContainer _DialogLayout` +
          (this.props.className ? ` ` + this.props.className : ``),
        onKeyDown: this.OnKeyDown,
        tabIndex: this.props.tabIndex || 0,
        children: [
          _ &&
            (0, _.jsxs)(`div`, {
              className: `DialogLabel`,
              children: [
                _,
                !!_ &&
                  (0, _.jsx)(_, {
                    tooltip: _,
                  }),
              ],
            }),
          (0, _.jsxs)(`div`, {
            className: `DialogSlider_Slider`,
            onMouseDown: this.OnMouseDown,
            onTouchStart: this.OnTouchStart,
            children: [
              (0, _.jsx)(`div`, {
                className: `DialogSlider_Value`,
                style: _,
              }),
              (0, _.jsx)(`div`, {
                className: `DialogSlider_Grabber`,
                style: _,
              }),
            ],
          }),
          this.props.showValue &&
            (0, _.jsx)(`div`, {
              className: `DialogLabelExplainer`,
              children: _(this.props.value, this.props.valueSuffix),
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `DialogLabelExplainer`,
              children: _,
            }),
        ],
      });
    }
  };
(_([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `OnTouchStart`, null),
  _([_], _.prototype, `OnTouchMove`, null),
  _([_], _.prototype, `OnTouchEnd`, null),
  _([_], _.prototype, `OnKeyDown`, null));
var _ = `S-ML1xJ2g6g-`,
  _ = `_6zj1EJeADnw-`,
  _ = _.createContext({
    setValue: () => {},
  });
function _(_) {
  let {
      value: _,
      onChange: _,
      classNames: _,
      disabled: _,
      labelId: _,
      descriptionId: _,
      role: _ = `radiogroup`,
      children: _,
      centeredPillStyle: _,
      ..._
    } = _,
    _ = {
      value: _,
      setValue: _,
      disabled: _,
    };
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      role: _,
      "aria-labelledby": _,
      "aria-describedby": _,
      ..._,
      className: _(
        _,
        `Shared_Radio_Group`,
        _,
        _ && `TjMqoWzoLY4-`,
        _.bVertical && void 0,
        _ && `_7vVqomqu9DQ-`,
      ),
      children: _,
    }),
  });
}
function _(_) {
  let { value: _, children: _, role: _ = `radio`, ..._ } = _,
    { value: _, setValue: _, disabled: _ } = _.useContext(_),
    _ = _,
    _ = _ === _;
  return (0, _.jsx)(_, {
    role: _,
    "aria-checked": _,
    "aria-selected": _,
    className: _(_, `RadioButton`, _ && `mHUNUyJB78w-`, _ && `TjMqoWzoLY4-`),
    onClick: _ ? void 0 : () => _(_),
    ..._,
    children: _,
  });
}
var _ = `S7ceo4XABGY-`,
  _ = `HqQV85GkSvw-`,
  _ = `AWM2T-sfNd0-`;
function _(_) {
  return typeof _ == `object` && `data` in _;
}
function _(_) {
  return typeof _ == `object` && `bIsSeparator` in _;
}
function _(_) {
  return typeof _ == `object` && `options` in _;
}
function _(_, _) {
  if (_ === _) return !0;
  if (!Array.isArray(_) || !Array.isArray(_) || _.length != _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
  return !0;
}
function _(_, _) {
  return _ == null || _ == null
    ? _ == _
    : _(_) && _(_)
      ? !0
      : !(
          _(_) ||
          _(_) ||
          typeof _.label != typeof _.label ||
          (typeof _.label == `string` && _.label !== _.label) ||
          _.tooltip !== _.tooltip ||
          _(_) != _(_) ||
          (_(_) && _(_) && !_(_.options, _.options)) ||
          (_(_) && _(_) && _.data !== _.data)
        );
}
function _(_, _) {
  if (_ != null)
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      if (_(_) && _.data === _) return _;
      if (_(_)) {
        let _ = _(_.options, _);
        if (_ != null) return _;
      }
    }
}
function _(_) {
  let _ = _(`DropDownField`, _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let {
    label: _,
    tooltip: _,
    strClassName: _,
    dropDownControlRef: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    label: _,
    tooltip: _,
    className: _,
    children: (0, _.jsx)(_, {
      menuLabel: _,
      ..._,
      ref: _,
    }),
  });
}
var _ = _.forwardRef(function (_, _) {
    return (0, _.jsxs)(_, {
      _: _._,
      focusable: _.focusable,
      className: _(_.className, `DialogDropDown`, `_DialogInputContainer`, {
        Active: _.opened,
        Disabled: _.disabled,
      }),
      tabIndex: _.tabIndex,
      onClick: _.onClick,
      onKeyDown: _.onKeyDown,
      disabled: _.disabled,
      type: `button`,
      ref: _,
      noFocusRing: _.noFocusRing,
      role: _.role ?? `combobox`,
      "aria-controls": _[`aria-controls`],
      "aria-expanded": _.opened,
      "aria-label": _[`aria-label`],
      "aria-labelledby": _[`aria-labelledby`],
      "aria-describedby": _[`aria-describedby`],
      children: [
        (0, _.jsx)(`div`, {
          className: `DialogDropDown_CurrentDisplay`,
          children: _.children,
        }),
        !_.disabled &&
          (0, _.jsx)(`div`, {
            className: _(_.arrowClassName, `DialogDropDown_Arrow`),
            children: (0, _.jsx)(_, {
              role: `presentation`,
            }),
          }),
      ],
    });
  }),
  _ = class extends _.Component {
    static contextType = _;
    m_elInput;
    m_iMenuInstance;
    constructor(_) {
      (super(_),
        (this.state = {
          value: _(_.rgOptions, _.selectedOption),
          bOpened: !1,
        }));
    }
    SetSelectedOption(_) {
      if (this.props.controlled) return;
      let _ = _(this.props.rgOptions, _);
      _(_, this.value) ||
        this.setState({
          value: _,
        });
    }
    get value() {
      return this.props.controlled
        ? _(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(_, _, _) {
      if (
        _.selectedOption !== this.props.selectedOption ||
        _.disabled != this.props.disabled ||
        _.bOpened !== this.state.bOpened ||
        !_(this.props.rgOptions, _.rgOptions) ||
        !_(_.value, this.value)
      )
        return !0;
      for (let _ of [
        `selectedOption`,
        `tabIndex`,
        `onChange`,
        `strDefaultLabel`,
      ])
        if (_[_] !== this.props[_]) return !0;
      return !1;
    }
    componentDidUpdate(_, _) {
      _(
        this.props.controlled === _.controlled,
        `"controlled" prop should never change after mount`,
      );
      let _ = !_(_.rgOptions, this.props.rgOptions),
        _ = _.selectedOption !== this.props.selectedOption,
        _ = !_(this.value, _.value);
      (!this.props.controlled &&
        (_ || _ || _) &&
        (_ || this.value == null
          ? this.SetSelectedOption(this.props.selectedOption)
          : this.SetSelectedOption(this.value.data)),
        (_ || _) &&
          (this.state.bOpened
            ? (this.m_iMenuInstance?.SetOnHideCallback(void 0),
              this.m_iMenuInstance?.Hide(),
              (this.m_iMenuInstance = void 0),
              this.BuildMenu())
            : (this.m_iMenuInstance &&=
                (this.m_iMenuInstance.SetOnHideCallback(void 0), void 0))));
    }
    OnInputRef(_) {
      _ && (this.m_elInput = _);
    }
    get element() {
      return this.m_elInput;
    }
    ToggleMenu() {
      if (this.state.bOpened) this.HideMenu();
      else {
        if (
          this.props.onMenuWillOpen &&
          this.props.onMenuWillOpen(this.ShowMenu) == 0
        )
          return;
        this.ShowMenu();
      }
    }
    OnValueSelected(_, _) {
      (this.HideMenu(),
        this.setState({
          value: _,
        }),
        this.props.onChange && this.props.onChange(_, this, _));
    }
    BuildMenu() {
      let _ = `DialogMenuPosition`;
      this.props.strDropDownClassName &&
        (_ += ` ` + this.props.strDropDownClassName);
      let _ = {
          bOverlapHorizontal: !0,
          bMatchWidth: this.props.bMatchWidth ?? !0,
          bFitToWindow: !0,
          strClassName: _,
          bDisableMouseOverlay: this.props.bDisableMouseOverlay,
          ...this.props.contextMenuPositionOptions,
        },
        _ = this.props.contextMenuPositionOptions?.onCancel;
      ((this.m_iMenuInstance = _(
        (0, _.jsx)(_, {
          rgOptions: this.props.rgOptions,
          onValueSelected: this.OnValueSelected,
          onCancel: _,
          selectedValue: this.value?.data,
          strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
          strDropDownItemClassName: this.props.strDropDownItemClassName,
          _: `dropdownmenu_${this.m_iMenuInstance?.key}`,
        }),
        this.m_elInput,
        _,
      )),
        this.m_iMenuInstance.SetLabel(
          this.props.menuLabel ??
            (typeof this.props.strDefaultLabel == `string` &&
              this.props.strDefaultLabel),
        ),
        this.m_iMenuInstance.SetOnHideCallback(this.HideMenu));
    }
    ShowMenu() {
      (this.m_iMenuInstance ? this.m_iMenuInstance.Show() : this.BuildMenu(),
        this.props.onMenuOpened && this.props.onMenuOpened(),
        this.setState({
          bOpened: !0,
        }));
    }
    HideMenu() {
      (this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
        this.setState(
          {
            bOpened: !1,
          },
          () => this.m_elInput.focus(),
        ));
    }
    OnKeyDown(_) {
      _(_, this.props.rgOptions.filter(_), this.value?.data, (_) =>
        this.OnValueSelected(void 0, _),
      );
    }
    render() {
      let _ = this.value?.label ?? this.props.strDefaultLabel;
      this.props.renderButtonValue != null &&
        (_ = this.props.renderButtonValue(_));
      let _ = this.props.focusable ?? !0,
        _ = this.props.renderButton || this.context.DropDownControlButton || _;
      return (0, _.jsx)(_, {
        focusable: _,
        disabled: this.props.disabled ?? !1,
        opened: this.state.bOpened,
        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
        onKeyDown: this.props.disabled ? void 0 : this.OnKeyDown,
        tabIndex: this.props.tabIndex ?? (_ ? 0 : void 0),
        ref: this.OnInputRef,
        className: this.props.strDropDownButtonClassName,
        arrowClassName: this.props.arrowClassName,
        role: `combobox`,
        "aria-controls": this.m_iMenuInstance
          ? `dropdownmenu_${this.m_iMenuInstance.key}`
          : void 0,
        "aria-expanded": this.state.bOpened,
        "aria-label": this.props[`aria-label`],
        "aria-labelledby": this.props[`aria-labelledby`],
        "aria-describedby": this.props[`aria-describedby`],
        children: _,
      });
    }
  };
(_([_], _.prototype, `OnInputRef`, null),
  _([_], _.prototype, `ToggleMenu`, null),
  _([_], _.prototype, `OnValueSelected`, null),
  _([_], _.prototype, `ShowMenu`, null),
  _([_], _.prototype, `HideMenu`, null),
  _([_], _.prototype, `OnKeyDown`, null));
var _ = _.createContext(null);
function _(_) {
  let _ = _(`DropDownMenu`, _);
  return (0, _.jsx)(_.Provider, {
    value: {},
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_, _, _, _) {
  let _;
  if (_.key === `ArrowDown`)
    _ = (_.findIndex((_) => _.data === _) + 1) % _.length;
  else if (_.key === `ArrowUp`) {
    let _ = _.findIndex((_) => _.data === _);
    _ = _ <= 0 ? _.length - 1 : _ - 1;
  }
  _ !== void 0 && (_(_[_]), _.preventDefault());
}
function _(_) {
  let {
      rgOptions: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      selectedValue: _,
    } = _,
    [_, _] = _.useState(_),
    _ = _.useMemo(() => _.filter(_), [_]),
    _ = _.useCallback(
      (_) => {
        _(_, _, _, (_) => _(_.data));
      },
      [_, _],
    );
  return (0, _.jsx)(`div`, {
    className: _(_, `_DialogInputContainer`, _.strDropDownMenuCtnClass),
    onKeyDown: _,
    children: (0, _.jsx)(_, {
      rgOptions: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      activeValue: _,
      setActiveValue: _,
    }),
  });
}
function _(_) {
  let { rgOptions: _, ..._ } = _;
  return _.map((_, _) =>
    _(_)
      ? (0, _.jsx)(
          `hr`,
          {
            className: _(_, _),
          },
          _,
        )
      : _(_)
        ? (0, _.jsx)(
            _,
            {
              ..._,
              rgOptions: _.options,
            },
            _,
          )
        : (0, _.jsx)(
            _,
            {
              ..._,
              option: _,
            },
            _,
          ),
  );
}
function _(_) {
  let {
      option: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      activeValue: _,
      setActiveValue: _,
    } = _,
    _ = _.useCallback((_) => _ && _.focus(), []),
    _ = _.useCallback(() => {
      _(_.data);
    }, [_, _]),
    _ = _.data === _;
  return (0, _.jsx)(`button`, {
    type: `button`,
    className: _(_, _, _.strOptionClass, _ && `ContextMenuAutoFocus`),
    onClick: (_) => _(_, _),
    ref: _ ? _ : void 0,
    onMouseEnter: _,
    role: `option`,
    "aria-selected": _,
    children: _.tooltip
      ? (0, _.jsx)(_, {
          toolTipContent: _.tooltip,
          bTopmost: !0,
          className: `TooltipContainer`,
          children: _.label,
        })
      : (0, _.jsx)(`div`, {
          children: _.label,
        }),
  });
}
var _ = class extends _.Component {
  state = {
    rgOptions: void 0,
  };
  async OnMenuOpened() {
    if (!this.state.rgOptions) {
      let _ = await this.props.fnLoadOptions();
      this.setState({
        rgOptions: _,
      });
    }
  }
  render() {
    let {
        fnLoadOptions: _,
        strInitialDisplay: _,
        initialValue: _,
        ..._
      } = this.props,
      { rgOptions: _ } = this.state;
    return (
      _ === void 0 &&
        (_ || _
          ? ((_ = [
              {
                label: _,
                data: _,
              },
            ]),
            (_.selectedOption = _))
          : (_ = [])),
      (0, _.jsx)(_, {
        ..._,
        rgOptions: _,
        onMenuOpened: this.OnMenuOpened,
      })
    );
  }
};
_([_], _.prototype, `OnMenuOpened`, null);
var _ = _((_) => {
    function _(_, _) {
      var _ = _.length;
      _.push(_);
      _: for (; 0 < _;) {
        var _ = (_ - 1) >>> 1,
          _ = _[_];
        if (0 < _(_, _)) ((_[_] = _), (_[_] = _), (_ = _));
        else break _;
      }
    }
    function _(_) {
      return _.length === 0 ? null : _[0];
    }
    function _(_) {
      if (_.length === 0) return null;
      var _ = _[0],
        _ = _.pop();
      if (_ !== _) {
        _[0] = _;
        _: for (var _ = 0, _ = _.length, _ = _ >>> 1; _ < _;) {
          var _ = 2 * (_ + 1) - 1,
            _ = _[_],
            _ = _ + 1,
            _ = _[_];
          if (0 > _(_, _))
            _ < _ && 0 > _(_, _)
              ? ((_[_] = _), (_[_] = _), (_ = _))
              : ((_[_] = _), (_[_] = _), (_ = _));
          else if (_ < _ && 0 > _(_, _)) ((_[_] = _), (_[_] = _), (_ = _));
          else break _;
        }
      }
      return _;
    }
    function _(_, _) {
      var _ = _.sortIndex - _.sortIndex;
      return _ === 0 ? _._ - _._ : _;
    }
    if (
      ((_.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var _ = performance;
      _.unstable_now = function () {
        return _.now();
      };
    } else {
      var _ = Date,
        _ = _.now();
      _.unstable_now = function () {
        return _.now() - _;
      };
    }
    var _ = [],
      _ = [],
      _ = 1,
      _ = null,
      _ = 3,
      _ = !1,
      _ = !1,
      _ = !1,
      _ = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      _ = typeof clearTimeout == `function` ? clearTimeout : null,
      _ = typeof setImmediate < `u` ? setImmediate : null;
    function _(_) {
      for (var _ = _(_); _ !== null;) {
        if (_.callback === null) _(_);
        else if (_.startTime <= _)
          (_(_), (_.sortIndex = _.expirationTime), _(_, _));
        else break;
        _ = _(_);
      }
    }
    function _(_) {
      if (((_ = !1), _(_), !_)) {
        if (_(_) !== null) ((_ = !0), _ || ((_ = !0), _()));
        else {
          var _ = _(_);
          _ !== null && _(_, _.startTime - _);
        }
      }
    }
    var _ = !1,
      _ = -1,
      _ = 5,
      _ = -1;
    function _() {
      return _ ? !0 : !(_.unstable_now() - _ < _);
    }
    function _() {
      if (((_ = !1), _)) {
        var _ = _.unstable_now();
        _ = _;
        var _ = !0;
        try {
          _: {
            ((_ = !1), _ && ((_ = !1), _(_), (_ = -1)), (_ = !0));
            var _ = _;
            try {
              _: {
                for (
                  _(_), _ = _(_);
                  _ !== null && !(_.expirationTime > _ && _());
                ) {
                  var _ = _.callback;
                  if (typeof _ == `function`) {
                    ((_.callback = null), (_ = _.priorityLevel));
                    var _ = _(_.expirationTime <= _);
                    if (((_ = _.unstable_now()), typeof _ == `function`)) {
                      ((_.callback = _), _(_), (_ = !0));
                      break _;
                    }
                    (_ === _(_) && _(_), _(_));
                  } else _(_);
                  _ = _(_);
                }
                if (_ !== null) _ = !0;
                else {
                  var _ = _(_);
                  (_ !== null && _(_, _.startTime - _), (_ = !1));
                }
              }
              break _;
            } finally {
              ((_ = null), (_ = _), (_ = !1));
            }
            _ = void 0;
          }
        } finally {
          _ ? _() : (_ = !1);
        }
      }
    }
    var _;
    if (typeof _ == `function`)
      _ = function () {
        _(_);
      };
    else if (typeof MessageChannel < `u`) {
      var _ = new MessageChannel(),
        _ = _.port2;
      ((_.port1.onmessage = _),
        (_ = function () {
          _.postMessage(null);
        }));
    } else
      _ = function () {
        _(_, 0);
      };
    function _(_, _) {
      _ = _(function () {
        _(_.unstable_now());
      }, _);
    }
    ((_.unstable_IdlePriority = 5),
      (_.unstable_ImmediatePriority = 1),
      (_.unstable_LowPriority = 4),
      (_.unstable_NormalPriority = 3),
      (_.unstable_Profiling = null),
      (_.unstable_UserBlockingPriority = 2),
      (_.unstable_cancelCallback = function (_) {
        _.callback = null;
      }),
      (_.unstable_forceFrameRate = function (_) {
        0 > _ || 125 < _
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (_ = 0 < _ ? Math.floor(1e3 / _) : 5);
      }),
      (_.unstable_getCurrentPriorityLevel = function () {
        return _;
      }),
      (_.unstable_next = function (_) {
        switch (_) {
          case 1:
          case 2:
          case 3:
            var _ = 3;
            break;
          default:
            _ = _;
        }
        var _ = _;
        _ = _;
        try {
          return _();
        } finally {
          _ = _;
        }
      }),
      (_.unstable_requestPaint = function () {
        _ = !0;
      }),
      (_.unstable_runWithPriority = function (_, _) {
        switch (_) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            _ = 3;
        }
        var _ = _;
        _ = _;
        try {
          return _();
        } finally {
          _ = _;
        }
      }),
      (_.unstable_scheduleCallback = function (_, _, _) {
        var _ = _.unstable_now();
        switch (
          (typeof _ == `object` && _
            ? ((_ = _.delay), (_ = typeof _ == `number` && 0 < _ ? _ + _ : _))
            : (_ = _),
          _)
        ) {
          case 1:
            var _ = -1;
            break;
          case 2:
            _ = 250;
            break;
          case 5:
            _ = 1073741823;
            break;
          case 4:
            _ = 1e4;
            break;
          default:
            _ = 5e3;
        }
        return (
          (_ = _ + _),
          (_ = {
            _: _++,
            callback: _,
            priorityLevel: _,
            startTime: _,
            expirationTime: _,
            sortIndex: -1,
          }),
          _ > _
            ? ((_.sortIndex = _),
              _(_, _),
              _(_) === null &&
                _ === _(_) &&
                (_ ? (_(_), (_ = -1)) : (_ = !0), _(_, _ - _)))
            : ((_.sortIndex = _),
              _(_, _),
              _ || _ || ((_ = !0), _ || ((_ = !0), _()))),
          _
        );
      }),
      (_.unstable_shouldYield = _),
      (_.unstable_wrapCallback = function (_) {
        var _ = _;
        return function () {
          var _ = _;
          _ = _;
          try {
            return _.apply(this, arguments);
          } finally {
            _ = _;
          }
        };
      }));
  }),
  _ = _((_, _) => {
    _.exports = _();
  }),
  _ = _((_) => {
    var _ = _(),
      _ = _(),
      _ = _();
    function _(_) {
      var _ = `https://react.dev/errors/` + _;
      if (1 < arguments.length) {
        _ += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var _ = 2; _ < arguments.length; _++)
          _ += `&args[]=` + encodeURIComponent(arguments[_]);
      }
      return (
        `Minified React error #` +
        _ +
        `; visit ` +
        _ +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function _(_) {
      return !(
        !_ ||
        (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      );
    }
    function _(_) {
      var _ = _,
        _ = _;
      if (_.alternate) for (; _.return;) _ = _.return;
      else {
        _ = _;
        do ((_ = _), _.flags & 4098 && (_ = _.return), (_ = _.return));
        while (_);
      }
      return _.tag === 3 ? _ : null;
    }
    function _(_) {
      if (_.tag === 13) {
        var _ = _.memoizedState;
        if (
          (_ === null &&
            ((_ = _.alternate), _ !== null && (_ = _.memoizedState)),
          _ !== null)
        )
          return _.dehydrated;
      }
      return null;
    }
    function _(_) {
      if (_(_) !== _) throw Error(_(188));
    }
    function _(_) {
      var _ = _.alternate;
      if (!_) {
        if (((_ = _(_)), _ === null)) throw Error(_(188));
        return _ === _ ? _ : null;
      }
      for (var _ = _, _ = _; ;) {
        var _ = _.return;
        if (_ === null) break;
        var _ = _.alternate;
        if (_ === null) {
          if (((_ = _.return), _ !== null)) {
            _ = _;
            continue;
          }
          break;
        }
        if (_.child === _.child) {
          for (_ = _.child; _;) {
            if (_ === _) return (_(_), _);
            if (_ === _) return (_(_), _);
            _ = _.sibling;
          }
          throw Error(_(188));
        }
        if (_.return !== _.return) ((_ = _), (_ = _));
        else {
          for (var _ = !1, _ = _.child; _;) {
            if (_ === _) {
              ((_ = !0), (_ = _), (_ = _));
              break;
            }
            if (_ === _) {
              ((_ = !0), (_ = _), (_ = _));
              break;
            }
            _ = _.sibling;
          }
          if (!_) {
            for (_ = _.child; _;) {
              if (_ === _) {
                ((_ = !0), (_ = _), (_ = _));
                break;
              }
              if (_ === _) {
                ((_ = !0), (_ = _), (_ = _));
                break;
              }
              _ = _.sibling;
            }
            if (!_) throw Error(_(189));
          }
        }
        if (_.alternate !== _) throw Error(_(190));
      }
      if (_.tag !== 3) throw Error(_(188));
      return _.stateNode.current === _ ? _ : _;
    }
    function _(_) {
      var _ = _.tag;
      if (_ === 5 || _ === 26 || _ === 27 || _ === 6) return _;
      for (_ = _.child; _ !== null;) {
        if (((_ = _(_)), _ !== null)) return _;
        _ = _.sibling;
      }
      return null;
    }
    var _ = Object.assign,
      _ = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      _ = Symbol.for(`react.portal`),
      _ = Symbol.for(`react.fragment`),
      _ = Symbol.for(`react.strict_mode`),
      _ = Symbol.for(`react.profiler`),
      _ = Symbol.for(`react.provider`),
      _ = Symbol.for(`react.consumer`),
      _ = Symbol.for(`react.context`),
      _ = Symbol.for(`react.forward_ref`),
      _ = Symbol.for(`react.suspense`),
      _ = Symbol.for(`react.suspense_list`),
      _ = Symbol.for(`react.memo`),
      _ = Symbol.for(`react.lazy`),
      _ = Symbol.for(`react.activity`),
      _ = Symbol.for(`react.memo_cache_sentinel`),
      _ = Symbol.iterator;
    function _(_) {
      return typeof _ != `object` || !_
        ? null
        : ((_ = (_ && _[_]) || _[`@@iterator`]),
          typeof _ == `function` ? _ : null);
    }
    var _ = Symbol.for(`react.client.reference`);
    function _(_) {
      if (_ == null) return null;
      if (typeof _ == `function`)
        return _.$$typeof === _ ? null : _.displayName || _.name || null;
      if (typeof _ == `string`) return _;
      switch (_) {
        case _:
          return `Fragment`;
        case _:
          return `Profiler`;
        case _:
          return `StrictMode`;
        case _:
          return `Suspense`;
        case _:
          return `SuspenseList`;
        case _:
          return `Activity`;
      }
      if (typeof _ == `object`)
        switch (_.$$typeof) {
          case _:
            return `Portal`;
          case _:
            return (_.displayName || `Context`) + `.Provider`;
          case _:
            return (_._context.displayName || `Context`) + `.Consumer`;
          case _:
            var _ = _.render;
            return (
              (_ = _.displayName),
              (_ ||=
                ((_ = _.displayName || _.name || ``),
                _ === `` ? `ForwardRef` : `ForwardRef(` + _ + `)`)),
              _
            );
          case _:
            return (
              (_ = _.displayName || null), _ === null ? _(_.type) || `Memo` : _
            );
          case _:
            ((_ = _._payload), (_ = _._init));
            try {
              return _(_(_));
            } catch {}
        }
      return null;
    }
    var _ = Array.isArray,
      _ = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      _ = _.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      _ = {
        pending: !1,
        data: null,
        method: null,
        action: null,
      },
      _ = [],
      _ = -1;
    function _(_) {
      return {
        current: _,
      };
    }
    function _(_) {
      0 > _ || ((_.current = _[_]), (_[_] = null), _--);
    }
    function _(_, _) {
      (_++, (_[_] = _.current), (_.current = _));
    }
    var _ = _(null),
      _ = _(null),
      _ = _(null),
      _ = _(null);
    function _(_, _) {
      switch ((_(_, _), _(_, _), _(_, null), _.nodeType)) {
        case 9:
        case 11:
          _ = (_ = _.documentElement) && (_ = _.namespaceURI) ? _(_) : 0;
          break;
        default:
          if (((_ = _.tagName), (_ = _.namespaceURI)))
            ((_ = _(_)), (_ = _(_, _)));
          else
            switch (_) {
              case `svg`:
                _ = 1;
                break;
              case `math`:
                _ = 2;
                break;
              default:
                _ = 0;
            }
      }
      (_(_), _(_, _));
    }
    function _() {
      (_(_), _(_), _(_));
    }
    function _(_) {
      _.memoizedState !== null && _(_, _);
      var _ = _.current,
        _ = _(_, _.type);
      _ !== _ && (_(_, _), _(_, _));
    }
    function _(_) {
      (_.current === _ && (_(_), _(_)),
        _.current === _ && (_(_), (_._currentValue = _)));
    }
    var _ = Object.prototype.hasOwnProperty,
      _ = _.unstable_scheduleCallback,
      _ = _.unstable_cancelCallback,
      _ = _.unstable_shouldYield,
      _ = _.unstable_requestPaint,
      _ = _.unstable_now,
      _ = _.unstable_getCurrentPriorityLevel,
      _ = _.unstable_ImmediatePriority,
      _ = _.unstable_UserBlockingPriority,
      _ = _.unstable_NormalPriority,
      _ = _.unstable_LowPriority,
      _ = _.unstable_IdlePriority,
      _ = _.log,
      _ = _.unstable_setDisableYieldValue,
      _ = null,
      _ = null;
    function _(_) {
      if (
        (typeof _ == `function` && _(_),
        _ && typeof _.setStrictMode == `function`)
      )
        try {
          _.setStrictMode(_, _);
        } catch {}
    }
    var _ = Math.clz32 ? Math.clz32 : _,
      _ = Math.log,
      _ = Math.LN2;
    function _(_) {
      return ((_ >>>= 0), _ === 0 ? 32 : (31 - ((_(_) / _) | 0)) | 0);
    }
    var _ = 256,
      _ = 4194304;
    function _(_) {
      var _ = _ & 42;
      if (_ !== 0) return _;
      switch (_ & -_) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return _ & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return _ & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return _;
      }
    }
    function _(_, _, _) {
      var _ = _.pendingLanes;
      if (_ === 0) return 0;
      var _ = 0,
        _ = _.suspendedLanes,
        _ = _.pingedLanes;
      _ = _.warmLanes;
      var _ = _ & 134217727;
      return (
        _ === 0
          ? ((_ = _ & ~_),
            _ === 0
              ? _ === 0
                ? _ || ((_ = _ & ~_), _ !== 0 && (_ = _(_)))
                : (_ = _(_))
              : (_ = _(_)))
          : ((_ = _ & ~_),
            _ === 0
              ? ((_ &= _),
                _ === 0
                  ? _ || ((_ = _ & ~_), _ !== 0 && (_ = _(_)))
                  : (_ = _(_)))
              : (_ = _(_))),
        _ === 0
          ? 0
          : _ !== 0 &&
              _ !== _ &&
              (_ & _) === 0 &&
              ((_ = _ & -_), (_ = _ & -_), _ >= _ || (_ === 32 && _ & 4194048))
            ? _
            : _
      );
    }
    function _(_, _) {
      return (_.pendingLanes & ~(_.suspendedLanes & ~_.pingedLanes) & _) === 0;
    }
    function _(_, _) {
      switch (_) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return _ + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return _ + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function _() {
      var _ = _;
      return ((_ <<= 1), !(_ & 4194048) && (_ = 256), _);
    }
    function _() {
      var _ = _;
      return ((_ <<= 1), !(_ & 62914560) && (_ = 4194304), _);
    }
    function _(_) {
      for (var _ = [], _ = 0; 31 > _; _++) _.push(_);
      return _;
    }
    function _(_, _) {
      ((_.pendingLanes |= _),
        _ !== 268435456 &&
          ((_.suspendedLanes = 0), (_.pingedLanes = 0), (_.warmLanes = 0)));
    }
    function _(_, _, _, _, _, _) {
      var _ = _.pendingLanes;
      ((_.pendingLanes = _),
        (_.suspendedLanes = 0),
        (_.pingedLanes = 0),
        (_.warmLanes = 0),
        (_.expiredLanes &= _),
        (_.entangledLanes &= _),
        (_.errorRecoveryDisabledLanes &= _),
        (_.shellSuspendCounter = 0));
      var _ = _.entanglements,
        _ = _.expirationTimes,
        _ = _.hiddenUpdates;
      for (_ = _ & ~_; 0 < _;) {
        var _ = 31 - _(_),
          _ = 1 << _;
        ((_[_] = 0), (_[_] = -1));
        var _ = _[_];
        if (_ !== null)
          for (_[_] = null, _ = 0; _ < _.length; _++) {
            var _ = _[_];
            _ !== null && (_.lane &= -536870913);
          }
        _ &= ~_;
      }
      (_ !== 0 && _(_, _, 0),
        _ !== 0 &&
          _ === 0 &&
          _.tag !== 0 &&
          (_.suspendedLanes |= _ & ~(_ & ~_)));
    }
    function _(_, _, _) {
      ((_.pendingLanes |= _), (_.suspendedLanes &= ~_));
      var _ = 31 - _(_);
      ((_.entangledLanes |= _),
        (_.entanglements[_] = _.entanglements[_] | 1073741824 | (_ & 4194090)));
    }
    function _(_, _) {
      var _ = (_.entangledLanes |= _);
      for (_ = _.entanglements; _;) {
        var _ = 31 - _(_),
          _ = 1 << _;
        ((_ & _) | (_[_] & _) && (_[_] |= _), (_ &= ~_));
      }
    }
    function _(_) {
      switch (_) {
        case 2:
          _ = 1;
          break;
        case 8:
          _ = 4;
          break;
        case 32:
          _ = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          _ = 128;
          break;
        case 268435456:
          _ = 134217728;
          break;
        default:
          _ = 0;
      }
      return _;
    }
    function _(_) {
      return (
        (_ &= -_), 2 < _ ? (8 < _ ? (_ & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function _() {
      var _ = _._;
      return _ === 0 ? ((_ = window.event), _ === void 0 ? 32 : _(_.type)) : _;
    }
    function _(_, _) {
      var _ = _._;
      try {
        return ((_._ = _), _());
      } finally {
        _._ = _;
      }
    }
    var _ = Math.random().toString(36).slice(2),
      _ = `__reactFiber$` + _,
      _ = `__reactProps$` + _,
      _ = `__reactContainer$` + _,
      _ = `__reactEvents$` + _,
      _ = `__reactListeners$` + _,
      _ = `__reactHandles$` + _,
      _ = `__reactResources$` + _,
      _ = `__reactMarker$` + _;
    function _(_) {
      (delete _[_], delete _[_], delete _[_], delete _[_], delete _[_]);
    }
    function _(_) {
      var _ = _[_];
      if (_) return _;
      for (var _ = _.parentNode; _;) {
        if ((_ = _[_] || _[_])) {
          if (
            ((_ = _.alternate),
            _.child !== null || (_ !== null && _.child !== null))
          )
            for (_ = _(_); _ !== null;) {
              if ((_ = _[_])) return _;
              _ = _(_);
            }
          return _;
        }
        ((_ = _), (_ = _.parentNode));
      }
      return null;
    }
    function _(_) {
      if ((_ = _[_] || _[_])) {
        var _ = _.tag;
        if (_ === 5 || _ === 6 || _ === 13 || _ === 26 || _ === 27 || _ === 3)
          return _;
      }
      return null;
    }
    function _(_) {
      var _ = _.tag;
      if (_ === 5 || _ === 26 || _ === 27 || _ === 6) return _.stateNode;
      throw Error(_(33));
    }
    function _(_) {
      var _ = _[_];
      return (
        (_ ||= _[_] =
          {
            hoistableStyles: new Map(),
            hoistableScripts: new Map(),
          }),
        _
      );
    }
    function _(_) {
      _[_] = !0;
    }
    var _ = new Set(),
      _ = {};
    function _(_, _) {
      (_(_, _), _(_ + `Capture`, _));
    }
    function _(_, _) {
      for (_[_] = _, _ = 0; _ < _.length; _++) _.add(_[_]);
    }
    var _ = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      _ = {},
      _ = {};
    function _(_) {
      return _.call(_, _)
        ? !0
        : _.call(_, _)
          ? !1
          : _.test(_)
            ? (_[_] = !0)
            : ((_[_] = !0), !1);
    }
    function _(_, _, _) {
      if (_(_)) {
        if (_ === null) _.removeAttribute(_);
        else {
          switch (typeof _) {
            case `undefined`:
            case `function`:
            case `symbol`:
              _.removeAttribute(_);
              return;
            case `boolean`:
              var _ = _.toLowerCase().slice(0, 5);
              if (_ !== `data-` && _ !== `aria-`) {
                _.removeAttribute(_);
                return;
              }
          }
          _.setAttribute(_, `` + _);
        }
      }
    }
    function _(_, _, _) {
      if (_ === null) _.removeAttribute(_);
      else {
        switch (typeof _) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            _.removeAttribute(_);
            return;
        }
        _.setAttribute(_, `` + _);
      }
    }
    function _(_, _, _, _) {
      if (_ === null) _.removeAttribute(_);
      else {
        switch (typeof _) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            _.removeAttribute(_);
            return;
        }
        _.setAttributeNS(_, _, `` + _);
      }
    }
    var _, _;
    function _(_) {
      if (_ === void 0)
        try {
          throw Error();
        } catch (_) {
          var _ = _.stack.trim().match(/\n( *(at )?)/);
          ((_ = (_ && _[1]) || ``),
            (_ =
              -1 <
              _.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < _.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        _ +
        _ +
        _
      );
    }
    var _ = !1;
    function _(_, _) {
      if (!_ || _) return ``;
      _ = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var _ = {
          DetermineComponentFrameRoot: function () {
            try {
              if (_) {
                var _ = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(_.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(_, []);
                  } catch (_) {
                    var _ = _;
                  }
                  Reflect.construct(_, [], _);
                } else {
                  try {
                    _.call();
                  } catch (_) {
                    _ = _;
                  }
                  _.call(_.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (_) {
                  _ = _;
                }
                (_ = _()) &&
                  typeof _.catch == `function` &&
                  _.catch(function () {});
              }
            } catch (_) {
              if (_ && _ && typeof _.stack == `string`)
                return [_.stack, _.stack];
            }
            return [null, null];
          },
        };
        _.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var _ = Object.getOwnPropertyDescriptor(
          _.DetermineComponentFrameRoot,
          `name`,
        );
        _ &&
          _.configurable &&
          Object.defineProperty(_.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var _ = _.DetermineComponentFrameRoot(),
          _ = _[0],
          _ = _[1];
        if (_ && _) {
          var _ = _.split(`
`),
            _ = _.split(`
`);
          for (
            _ = _ = 0;
            _ < _.length && !_[_].includes(`DetermineComponentFrameRoot`);
          )
            _++;
          for (; _ < _.length && !_[_].includes(`DetermineComponentFrameRoot`);)
            _++;
          if (_ === _.length || _ === _.length)
            for (
              _ = _.length - 1, _ = _.length - 1;
              1 <= _ && 0 <= _ && _[_] !== _[_];
            )
              _--;
          for (; 1 <= _ && 0 <= _; _--, _--)
            if (_[_] !== _[_]) {
              if (_ !== 1 || _ !== 1)
                do
                  if ((_--, _--, 0 > _ || _[_] !== _[_])) {
                    var _ =
                      `
` + _[_].replace(` at new `, ` at `);
                    return (
                      _.displayName &&
                        _.includes(`<anonymous>`) &&
                        (_ = _.replace(`<anonymous>`, _.displayName)),
                      _
                    );
                  }
                while (1 <= _ && 0 <= _);
              break;
            }
        }
      } finally {
        ((_ = !1), (Error.prepareStackTrace = _));
      }
      return (_ = _ ? _.displayName || _.name : ``) ? _(_) : ``;
    }
    function _(_) {
      switch (_.tag) {
        case 26:
        case 27:
        case 5:
          return _(_.type);
        case 16:
          return _(`Lazy`);
        case 13:
          return _(`Suspense`);
        case 19:
          return _(`SuspenseList`);
        case 0:
        case 15:
          return _(_.type, !1);
        case 11:
          return _(_.type.render, !1);
        case 1:
          return _(_.type, !0);
        case 31:
          return _(`Activity`);
        default:
          return ``;
      }
    }
    function _(_) {
      try {
        var _ = ``;
        do ((_ += _(_)), (_ = _.return));
        while (_);
        return _;
      } catch (_) {
        return (
          `
Error generating stack: ` +
          _.message +
          `
` +
          _.stack
        );
      }
    }
    function _(_) {
      switch (typeof _) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return _;
        case `object`:
          return _;
        default:
          return ``;
      }
    }
    function _(_) {
      var _ = _.type;
      return (
        (_ = _.nodeName) &&
        _.toLowerCase() === `input` &&
        (_ === `checkbox` || _ === `radio`)
      );
    }
    function _(_) {
      var _ = _(_) ? `checked` : `value`,
        _ = Object.getOwnPropertyDescriptor(_.constructor.prototype, _),
        _ = `` + _[_];
      if (
        !_.hasOwnProperty(_) &&
        _ !== void 0 &&
        typeof _.get == `function` &&
        typeof _.set == `function`
      ) {
        var _ = _.get,
          _ = _.set;
        return (
          Object.defineProperty(_, _, {
            configurable: !0,
            get: function () {
              return _.call(this);
            },
            set: function (_) {
              ((_ = `` + _), _.call(this, _));
            },
          }),
          Object.defineProperty(_, _, {
            enumerable: _.enumerable,
          }),
          {
            getValue: function () {
              return _;
            },
            setValue: function (_) {
              _ = `` + _;
            },
            stopTracking: function () {
              ((_._valueTracker = null), delete _[_]);
            },
          }
        );
      }
    }
    function _(_) {
      _._valueTracker ||= _(_);
    }
    function _(_) {
      if (!_) return !1;
      var _ = _._valueTracker;
      if (!_) return !0;
      var _ = _.getValue(),
        _ = ``;
      return (
        _ && (_ = _(_) ? (_.checked ? `true` : `false`) : _.value),
        (_ = _),
        _ !== _ && (_.setValue(_), !0)
      );
    }
    function _(_) {
      if (((_ ||= typeof document < `u` ? document : void 0), _ === void 0))
        return null;
      try {
        return _.activeElement || _.body;
      } catch {
        return _.body;
      }
    }
    var _ = /[\n"\\]/g;
    function _(_) {
      return _.replace(_, function (_) {
        return `\\` + _.charCodeAt(0).toString(16) + ` `;
      });
    }
    function _(_, _, _, _, _, _, _, _) {
      ((_.name = ``),
        _ != null &&
        typeof _ != `function` &&
        typeof _ != `symbol` &&
        typeof _ != `boolean`
          ? (_.type = _)
          : _.removeAttribute(`type`),
        _ == null
          ? (_ !== `submit` && _ !== `reset`) || _.removeAttribute(`value`)
          : _ === `number`
            ? ((_ === 0 && _.value === ``) || _.value != _) &&
              (_.value = `` + _(_))
            : _.value !== `` + _(_) && (_.value = `` + _(_)),
        _ == null
          ? _ == null
            ? _ != null && _.removeAttribute(`value`)
            : _(_, _, _(_))
          : _(_, _, _(_)),
        _ == null && _ != null && (_.defaultChecked = !!_),
        _ != null &&
          (_.checked = _ && typeof _ != `function` && typeof _ != `symbol`),
        _ != null &&
        typeof _ != `function` &&
        typeof _ != `symbol` &&
        typeof _ != `boolean`
          ? (_.name = `` + _(_))
          : _.removeAttribute(`name`));
    }
    function _(_, _, _, _, _, _, _, _) {
      if (
        (_ != null &&
          typeof _ != `function` &&
          typeof _ != `symbol` &&
          typeof _ != `boolean` &&
          (_.type = _),
        _ != null || _ != null)
      ) {
        if (!((_ !== `submit` && _ !== `reset`) || _ != null)) return;
        ((_ = _ == null ? `` : `` + _(_)),
          (_ = _ == null ? _ : `` + _(_)),
          _ || _ === _.value || (_.value = _),
          (_.defaultValue = _));
      }
      ((_ ??= _),
        (_ = typeof _ != `function` && typeof _ != `symbol` && !!_),
        (_.checked = _ ? _.checked : !!_),
        (_.defaultChecked = !!_),
        _ != null &&
          typeof _ != `function` &&
          typeof _ != `symbol` &&
          typeof _ != `boolean` &&
          (_.name = _));
    }
    function _(_, _, _) {
      (_ === `number` && _(_.ownerDocument) === _) ||
        _.defaultValue === `` + _ ||
        (_.defaultValue = `` + _);
    }
    function _(_, _, _, _) {
      if (((_ = _.options), _)) {
        _ = {};
        for (var _ = 0; _ < _.length; _++) _[`$` + _[_]] = !0;
        for (_ = 0; _ < _.length; _++)
          ((_ = _.hasOwnProperty(`$` + _[_].value)),
            _[_].selected !== _ && (_[_].selected = _),
            _ && _ && (_[_].defaultSelected = !0));
      } else {
        for (_ = `` + _(_), _ = null, _ = 0; _ < _.length; _++) {
          if (_[_].value === _) {
            ((_[_].selected = !0), _ && (_[_].defaultSelected = !0));
            return;
          }
          _ !== null || _[_].disabled || (_ = _[_]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function _(_, _, _) {
      _ != null && ((_ = `` + _(_)), _ !== _.value && (_.value = _), _ == null)
        ? _.defaultValue !== _ && (_.defaultValue = _)
        : (_.defaultValue = _ == null ? `` : `` + _(_));
    }
    function _(_, _, _, _) {
      if (_ == null) {
        if (_ != null) {
          if (_ != null) throw Error(_(92));
          if (_(_)) {
            if (1 < _.length) throw Error(_(93));
            _ = _[0];
          }
          _ = _;
        }
        ((_ ??= ``), (_ = _));
      }
      ((_ = _(_)),
        (_.defaultValue = _),
        (_ = _.textContent),
        _ === _ && _ !== `` && _ !== null && (_.value = _));
    }
    function _(_, _) {
      if (_) {
        var _ = _.firstChild;
        if (_ && _ === _.lastChild && _.nodeType === 3) {
          _.nodeValue = _;
          return;
        }
      }
      _.textContent = _;
    }
    var _ = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function _(_, _, _) {
      var _ = _.indexOf(`--`) === 0;
      _ == null || typeof _ == `boolean` || _ === ``
        ? _
          ? _.setProperty(_, ``)
          : _ === `float`
            ? (_.cssFloat = ``)
            : (_[_] = ``)
        : _
          ? _.setProperty(_, _)
          : typeof _ != `number` || _ === 0 || _.has(_)
            ? _ === `float`
              ? (_.cssFloat = _)
              : (_[_] = (`` + _).trim())
            : (_[_] = _ + `px`);
    }
    function _(_, _, _) {
      if (_ != null && typeof _ != `object`) throw Error(_(62));
      if (((_ = _.style), _ != null)) {
        for (var _ in _)
          !_.hasOwnProperty(_) ||
            (_ != null && _.hasOwnProperty(_)) ||
            (_.indexOf(`--`) === 0
              ? _.setProperty(_, ``)
              : _ === `float`
                ? (_.cssFloat = ``)
                : (_[_] = ``));
        for (var _ in _)
          ((_ = _[_]), _.hasOwnProperty(_) && _[_] !== _ && _(_, _, _));
      } else for (var _ in _) _.hasOwnProperty(_) && _(_, _, _[_]);
    }
    function _(_) {
      if (_.indexOf(`-`) === -1) return !1;
      switch (_) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var _ = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      _ =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function _(_) {
      return _.test(`` + _)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : _;
    }
    var _ = null;
    function _(_) {
      return (
        (_ = _.target || _.srcElement || window),
        _.correspondingUseElement && (_ = _.correspondingUseElement),
        _.nodeType === 3 ? _.parentNode : _
      );
    }
    var _ = null,
      _ = null;
    function _(_) {
      var _ = _(_);
      if (_ && (_ = _.stateNode)) {
        var _ = _[_] || null;
        _: switch (((_ = _.stateNode), _.type)) {
          case `input`:
            if (
              (_(
                _,
                _.value,
                _.defaultValue,
                _.defaultValue,
                _.checked,
                _.defaultChecked,
                _.type,
                _.name,
              ),
              (_ = _.name),
              _.type === `radio` && _ != null)
            ) {
              for (_ = _; _.parentNode;) _ = _.parentNode;
              for (
                _ = _.querySelectorAll(
                  `input[name="` + _(`` + _) + `"][type="radio"]`,
                ),
                  _ = 0;
                _ < _.length;
                _++
              ) {
                var _ = _[_];
                if (_ !== _ && _.form === _.form) {
                  var _ = _[_] || null;
                  if (!_) throw Error(_(90));
                  _(
                    _,
                    _.value,
                    _.defaultValue,
                    _.defaultValue,
                    _.checked,
                    _.defaultChecked,
                    _.type,
                    _.name,
                  );
                }
              }
              for (_ = 0; _ < _.length; _++)
                ((_ = _[_]), _.form === _.form && _(_));
            }
            break _;
          case `textarea`:
            _(_, _.value, _.defaultValue);
            break _;
          case `select`:
            ((_ = _.value), _ != null && _(_, !!_.multiple, _, !1));
        }
      }
    }
    var _ = !1;
    function _(_, _, _) {
      if (_) return _(_, _);
      _ = !0;
      try {
        return _(_);
      } finally {
        if (
          ((_ = !1),
          (_ !== null || _ !== null) &&
            (_(), _ && ((_ = _), (_ = _), (_ = _ = null), _(_), _)))
        )
          for (_ = 0; _ < _.length; _++) _(_[_]);
      }
    }
    function _(_, _) {
      var _ = _.stateNode;
      if (_ === null) return null;
      var _ = _[_] || null;
      if (_ === null) return null;
      _ = _[_];
      _: switch (_) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((_ = !_.disabled) ||
            ((_ = _.type),
            (_ =
              _ !== `button` &&
              _ !== `input` &&
              _ !== `select` &&
              _ !== `textarea`)),
            (_ = !_));
          break _;
        default:
          _ = !1;
      }
      if (_) return null;
      if (_ && typeof _ != `function`) throw Error(_(231, _, typeof _));
      return _;
    }
    var _ =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0,
      _ = !1;
    if (_)
      try {
        var _ = {};
        (Object.defineProperty(_, "passive", {
          get: function () {
            _ = !0;
          },
        }),
          window.addEventListener(`test`, _, _),
          window.removeEventListener(`test`, _, _));
      } catch {
        _ = !1;
      }
    var _ = null,
      _ = null,
      _ = null;
    function _() {
      if (_) return _;
      var _,
        _ = _,
        _ = _.length,
        _,
        _ = `value` in _ ? _.value : _.textContent,
        _ = _.length;
      for (_ = 0; _ < _ && _[_] === _[_]; _++);
      var _ = _ - _;
      for (_ = 1; _ <= _ && _[_ - _] === _[_ - _]; _++);
      return (_ = _.slice(_, 1 < _ ? 1 - _ : void 0));
    }
    function _(_) {
      var _ = _.keyCode;
      return (
        `charCode` in _
          ? ((_ = _.charCode), _ === 0 && _ === 13 && (_ = 13))
          : (_ = _),
        _ === 10 && (_ = 13),
        32 <= _ || _ === 13 ? _ : 0
      );
    }
    function _() {
      return !0;
    }
    function _() {
      return !1;
    }
    function _(_) {
      function _(_, _, _, _, _) {
        for (var _ in ((this._reactName = _),
        (this._targetInst = _),
        (this.type = _),
        (this.nativeEvent = _),
        (this.target = _),
        (this.currentTarget = null),
        _))
          _.hasOwnProperty(_) && ((_ = _[_]), (this[_] = _ ? _(_) : _[_]));
        return (
          (this.isDefaultPrevented = (
            _.defaultPrevented == null
              ? !1 === _.returnValue
              : _.defaultPrevented
          )
            ? _
            : _),
          (this.isPropagationStopped = _),
          this
        );
      }
      return (
        _(_.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var _ = this.nativeEvent;
            _ &&
              (_.preventDefault
                ? _.preventDefault()
                : typeof _.returnValue != `unknown` && (_.returnValue = !1),
              (this.isDefaultPrevented = _));
          },
          stopPropagation: function () {
            var _ = this.nativeEvent;
            _ &&
              (_.stopPropagation
                ? _.stopPropagation()
                : typeof _.cancelBubble != `unknown` && (_.cancelBubble = !0),
              (this.isPropagationStopped = _));
          },
          persist: function () {},
          isPersistent: _,
        }),
        _
      );
    }
    var _ = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (_) {
          return _.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      _ = _(_),
      _ = _({}, _, {
        view: 0,
        detail: 0,
      }),
      _ = _(_),
      _,
      _,
      _,
      _ = _({}, _, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: _,
        button: 0,
        buttons: 0,
        relatedTarget: function (_) {
          return _.relatedTarget === void 0
            ? _.fromElement === _.srcElement
              ? _.toElement
              : _.fromElement
            : _.relatedTarget;
        },
        movementX: function (_) {
          return `movementX` in _
            ? _.movementX
            : (_ !== _ &&
                (_ && _.type === `mousemove`
                  ? ((_ = _.screenX - _.screenX), (_ = _.screenY - _.screenY))
                  : (_ = _ = 0),
                (_ = _)),
              _);
        },
        movementY: function (_) {
          return `movementY` in _ ? _.movementY : _;
        },
      }),
      _ = _(_),
      _ = _(
        _({}, _, {
          dataTransfer: 0,
        }),
      ),
      _ = _(
        _({}, _, {
          relatedTarget: 0,
        }),
      ),
      _ = _(
        _({}, _, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0,
        }),
      ),
      _ = _(
        _({}, _, {
          clipboardData: function (_) {
            return `clipboardData` in _
              ? _.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      _ = _(
        _({}, _, {
          data: 0,
        }),
      ),
      _ = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        _: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      _ = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      _ = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function _(_) {
      var _ = this.nativeEvent;
      return _.getModifierState
        ? _.getModifierState(_)
        : (_ = _[_])
          ? !!_[_]
          : !1;
    }
    function _() {
      return _;
    }
    var _ = _(
        _({}, _, {
          key: function (_) {
            if (_.key) {
              var _ = _[_.key] || _.key;
              if (_ !== `Unidentified`) return _;
            }
            return _.type === `keypress`
              ? ((_ = _(_)), _ === 13 ? `Enter` : String.fromCharCode(_))
              : _.type === `keydown` || _.type === `keyup`
                ? _[_.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: _,
          charCode: function (_) {
            return _.type === `keypress` ? _(_) : 0;
          },
          keyCode: function (_) {
            return _.type === `keydown` || _.type === `keyup` ? _.keyCode : 0;
          },
          which: function (_) {
            return _.type === `keypress`
              ? _(_)
              : _.type === `keydown` || _.type === `keyup`
                ? _.keyCode
                : 0;
          },
        }),
      ),
      _ = _(
        _({}, _, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      _ = _(
        _({}, _, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: _,
        }),
      ),
      _ = _(
        _({}, _, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0,
        }),
      ),
      _ = _(
        _({}, _, {
          deltaX: function (_) {
            return `deltaX` in _
              ? _.deltaX
              : `wheelDeltaX` in _
                ? -_.wheelDeltaX
                : 0;
          },
          deltaY: function (_) {
            return `deltaY` in _
              ? _.deltaY
              : `wheelDeltaY` in _
                ? -_.wheelDeltaY
                : `wheelDelta` in _
                  ? -_.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      _ = _(
        _({}, _, {
          newState: 0,
          oldState: 0,
        }),
      ),
      _ = [9, 13, 27, 32],
      _ = _ && `CompositionEvent` in window,
      _ = null;
    _ && `documentMode` in document && (_ = document.documentMode);
    var _ = _ && `TextEvent` in window && !_,
      _ = _ && (!_ || (_ && 8 < _ && 11 >= _)),
      _ = ` `,
      _ = !1;
    function _(_, _) {
      switch (_) {
        case `keyup`:
          return _.indexOf(_.keyCode) !== -1;
        case `keydown`:
          return _.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function _(_) {
      return (
        (_ = _.detail), typeof _ == `object` && `data` in _ ? _.data : null
      );
    }
    var _ = !1;
    function _(_, _) {
      switch (_) {
        case `compositionend`:
          return _(_);
        case `keypress`:
          return _.which === 32 ? ((_ = !0), _) : null;
        case `textInput`:
          return ((_ = _.data), _ === _ && _ ? null : _);
        default:
          return null;
      }
    }
    function _(_, _) {
      if (_)
        return _ === `compositionend` || (!_ && _(_, _))
          ? ((_ = _()), (_ = _ = _ = null), (_ = !1), _)
          : null;
      switch (_) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(_.ctrlKey || _.altKey || _.metaKey) ||
            (_.ctrlKey && _.altKey)
          ) {
            if (_.char && 1 < _.char.length) return _.char;
            if (_.which) return String.fromCharCode(_.which);
          }
          return null;
        case `compositionend`:
          return _ && _.locale !== `ko` ? null : _.data;
        default:
          return null;
      }
    }
    var _ = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function _(_) {
      var _ = _ && _.nodeName && _.nodeName.toLowerCase();
      return _ === `input` ? !!_[_.type] : _ === `textarea`;
    }
    function _(_, _, _, _) {
      (_ ? (_ ? _.push(_) : (_ = [_])) : (_ = _),
        (_ = _(_, `onChange`)),
        0 < _.length &&
          ((_ = new _(`onChange`, `change`, null, _, _)),
          _.push({
            event: _,
            listeners: _,
          })));
    }
    var _ = null,
      _ = null;
    function _(_) {
      _(_, 0);
    }
    function _(_) {
      if (_(_(_))) return _;
    }
    function _(_, _) {
      if (_ === `change`) return _;
    }
    var _ = !1;
    if (_) {
      var _;
      if (_) {
        var _ = `oninput` in document;
        if (!_) {
          var _ = document.createElement(`div`);
          (_.setAttribute(`oninput`, `return;`),
            (_ = typeof _.oninput == `function`));
        }
        _ = _;
      } else _ = !1;
      _ = _ && (!document.documentMode || 9 < document.documentMode);
    }
    function _() {
      _ && (_.detachEvent(`onpropertychange`, _), (_ = _ = null));
    }
    function _(_) {
      if (_.propertyName === `value` && _(_)) {
        var _ = [];
        (_(_, _, _, _(_)), _(_, _));
      }
    }
    function _(_, _, _) {
      _ === `focusin`
        ? (_(), (_ = _), (_ = _), _.attachEvent(`onpropertychange`, _))
        : _ === `focusout` && _();
    }
    function _(_) {
      if (_ === `selectionchange` || _ === `keyup` || _ === `keydown`)
        return _(_);
    }
    function _(_, _) {
      if (_ === `click`) return _(_);
    }
    function _(_, _) {
      if (_ === `input` || _ === `change`) return _(_);
    }
    function _(_, _) {
      return (_ === _ && (_ !== 0 || 1 / _ == 1 / _)) || (_ !== _ && _ !== _);
    }
    var _ = typeof Object._ == `function` ? Object._ : _;
    function _(_, _) {
      if (_(_, _)) return !0;
      if (typeof _ != `object` || !_ || typeof _ != `object` || !_) return !1;
      var _ = Object.keys(_),
        _ = Object.keys(_);
      if (_.length !== _.length) return !1;
      for (_ = 0; _ < _.length; _++) {
        var _ = _[_];
        if (!_.call(_, _) || !_(_[_], _[_])) return !1;
      }
      return !0;
    }
    function _(_) {
      for (; _ && _.firstChild;) _ = _.firstChild;
      return _;
    }
    function _(_, _) {
      var _ = _(_);
      _ = 0;
      for (var _; _;) {
        if (_.nodeType === 3) {
          if (((_ = _ + _.textContent.length), _ <= _ && _ >= _))
            return {
              node: _,
              offset: _ - _,
            };
          _ = _;
        }
        _: {
          for (; _;) {
            if (_.nextSibling) {
              _ = _.nextSibling;
              break _;
            }
            _ = _.parentNode;
          }
          _ = void 0;
        }
        _ = _(_);
      }
    }
    function _(_, _) {
      return _ && _
        ? _ === _
          ? !0
          : _ && _.nodeType === 3
            ? !1
            : _ && _.nodeType === 3
              ? _(_, _.parentNode)
              : `contains` in _
                ? _.contains(_)
                : _.compareDocumentPosition
                  ? !!(_.compareDocumentPosition(_) & 16)
                  : !1
        : !1;
    }
    function _(_) {
      _ =
        _ != null &&
        _.ownerDocument != null &&
        _.ownerDocument.defaultView != null
          ? _.ownerDocument.defaultView
          : window;
      for (var _ = _(_.document); _ instanceof _.HTMLIFrameElement;) {
        try {
          var _ = typeof _.contentWindow.location.href == `string`;
        } catch {
          _ = !1;
        }
        if (_) _ = _.contentWindow;
        else break;
        _ = _(_.document);
      }
      return _;
    }
    function _(_) {
      var _ = _ && _.nodeName && _.nodeName.toLowerCase();
      return (
        _ &&
        ((_ === `input` &&
          (_.type === `text` ||
            _.type === `search` ||
            _.type === `tel` ||
            _.type === `url` ||
            _.type === `password`)) ||
          _ === `textarea` ||
          _.contentEditable === `true`)
      );
    }
    var _ = _ && `documentMode` in document && 11 >= document.documentMode,
      _ = null,
      _ = null,
      _ = null,
      _ = !1;
    function _(_, _, _) {
      var _ =
        _.window === _ ? _.document : _.nodeType === 9 ? _ : _.ownerDocument;
      _ ||
        _ == null ||
        _ !== _(_) ||
        ((_ = _),
        `selectionStart` in _ && _(_)
          ? (_ = {
              start: _.selectionStart,
              end: _.selectionEnd,
            })
          : ((_ = (
              (_.ownerDocument && _.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (_ = {
              anchorNode: _.anchorNode,
              anchorOffset: _.anchorOffset,
              focusNode: _.focusNode,
              focusOffset: _.focusOffset,
            })),
        (_ && _(_, _)) ||
          ((_ = _),
          (_ = _(_, `onSelect`)),
          0 < _.length &&
            ((_ = new _(`onSelect`, `select`, null, _, _)),
            _.push({
              event: _,
              listeners: _,
            }),
            (_.target = _))));
    }
    function _(_, _) {
      var _ = {};
      return (
        (_[_.toLowerCase()] = _.toLowerCase()),
        (_[`Webkit` + _] = `webkit` + _),
        (_[`Moz` + _] = `moz` + _),
        _
      );
    }
    var _ = {
        animationend: _(`Animation`, `AnimationEnd`),
        animationiteration: _(`Animation`, `AnimationIteration`),
        animationstart: _(`Animation`, `AnimationStart`),
        transitionrun: _(`Transition`, `TransitionRun`),
        transitionstart: _(`Transition`, `TransitionStart`),
        transitioncancel: _(`Transition`, `TransitionCancel`),
        transitionend: _(`Transition`, `TransitionEnd`),
      },
      _ = {},
      _ = {};
    _ &&
      ((_ = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete _.animationend.animation,
        delete _.animationiteration.animation,
        delete _.animationstart.animation),
      `TransitionEvent` in window || delete _.transitionend.transition);
    function _(_) {
      if (_[_]) return _[_];
      if (!_[_]) return _;
      var _ = _[_],
        _;
      for (_ in _) if (_.hasOwnProperty(_) && _ in _) return (_[_] = _[_]);
      return _;
    }
    var _ = _(`animationend`),
      _ = _(`animationiteration`),
      _ = _(`animationstart`),
      _ = _(`transitionrun`),
      _ = _(`transitionstart`),
      _ = _(`transitioncancel`),
      _ = _(`transitionend`),
      _ = new Map(),
      _ =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    _.push(`scrollEnd`);
    function _(_, _) {
      (_.set(_, _), _(_, [_]));
    }
    var _ = new WeakMap();
    function _(_, _) {
      if (typeof _ == `object` && _) {
        var _ = _.get(_);
        return _ === void 0
          ? ((_ = {
              value: _,
              source: _,
              stack: _(_),
            }),
            _.set(_, _),
            _)
          : _;
      }
      return {
        value: _,
        source: _,
        stack: _(_),
      };
    }
    var _ = [],
      _ = 0,
      _ = 0;
    function _() {
      for (var _ = _, _ = (_ = _ = 0); _ < _;) {
        var _ = _[_];
        _[_++] = null;
        var _ = _[_];
        _[_++] = null;
        var _ = _[_];
        _[_++] = null;
        var _ = _[_];
        if (((_[_++] = null), _ !== null && _ !== null)) {
          var _ = _.pending;
          (_ === null ? (_.next = _) : ((_.next = _.next), (_.next = _)),
            (_.pending = _));
        }
        _ !== 0 && _(_, _, _);
      }
    }
    function _(_, _, _, _) {
      ((_[_++] = _),
        (_[_++] = _),
        (_[_++] = _),
        (_[_++] = _),
        (_ |= _),
        (_.lanes |= _),
        (_ = _.alternate),
        _ !== null && (_.lanes |= _));
    }
    function _(_, _, _, _) {
      return (_(_, _, _, _), _(_));
    }
    function _(_, _) {
      return (_(_, null, null, _), _(_));
    }
    function _(_, _, _) {
      _.lanes |= _;
      var _ = _.alternate;
      _ !== null && (_.lanes |= _);
      for (var _ = !1, _ = _.return; _ !== null;)
        ((_.childLanes |= _),
          (_ = _.alternate),
          _ !== null && (_.childLanes |= _),
          _.tag === 22 &&
            ((_ = _.stateNode), _ === null || _._visibility & 1 || (_ = !0)),
          (_ = _),
          (_ = _.return));
      return _.tag === 3
        ? ((_ = _.stateNode),
          _ &&
            _ !== null &&
            ((_ = 31 - _(_)),
            (_ = _.hiddenUpdates),
            (_ = _[_]),
            _ === null ? (_[_] = [_]) : _.push(_),
            (_.lane = _ | 536870912)),
          _)
        : null;
    }
    function _(_) {
      if (50 < _) throw ((_ = 0), (_ = null), Error(_(185)));
      for (var _ = _.return; _ !== null;) ((_ = _), (_ = _.return));
      return _.tag === 3 ? _.stateNode : null;
    }
    var _ = {};
    function _(_, _, _, _) {
      ((this.tag = _),
        (this.key = _),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = _),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = _),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function _(_, _, _, _) {
      return new _(_, _, _, _);
    }
    function _(_) {
      return ((_ = _.prototype), !(!_ || !_.isReactComponent));
    }
    function _(_, _) {
      var _ = _.alternate;
      return (
        _ === null
          ? ((_ = _(_.tag, _, _.key, _.mode)),
            (_.elementType = _.elementType),
            (_.type = _.type),
            (_.stateNode = _.stateNode),
            (_.alternate = _),
            (_.alternate = _))
          : ((_.pendingProps = _),
            (_.type = _.type),
            (_.flags = 0),
            (_.subtreeFlags = 0),
            (_.deletions = null)),
        (_.flags = _.flags & 65011712),
        (_.childLanes = _.childLanes),
        (_.lanes = _.lanes),
        (_.child = _.child),
        (_.memoizedProps = _.memoizedProps),
        (_.memoizedState = _.memoizedState),
        (_.updateQueue = _.updateQueue),
        (_ = _.dependencies),
        (_.dependencies =
          _ === null
            ? null
            : {
                lanes: _.lanes,
                firstContext: _.firstContext,
              }),
        (_.sibling = _.sibling),
        (_.index = _.index),
        (_.ref = _.ref),
        (_.refCleanup = _.refCleanup),
        _
      );
    }
    function _(_, _) {
      _.flags &= 65011714;
      var _ = _.alternate;
      return (
        _ === null
          ? ((_.childLanes = 0),
            (_.lanes = _),
            (_.child = null),
            (_.subtreeFlags = 0),
            (_.memoizedProps = null),
            (_.memoizedState = null),
            (_.updateQueue = null),
            (_.dependencies = null),
            (_.stateNode = null))
          : ((_.childLanes = _.childLanes),
            (_.lanes = _.lanes),
            (_.child = _.child),
            (_.subtreeFlags = 0),
            (_.deletions = null),
            (_.memoizedProps = _.memoizedProps),
            (_.memoizedState = _.memoizedState),
            (_.updateQueue = _.updateQueue),
            (_.type = _.type),
            (_ = _.dependencies),
            (_.dependencies =
              _ === null
                ? null
                : {
                    lanes: _.lanes,
                    firstContext: _.firstContext,
                  })),
        _
      );
    }
    function _(_, _, _, _, _, _) {
      var _ = 0;
      if (((_ = _), typeof _ == `function`)) _(_) && (_ = 1);
      else if (typeof _ == `string`)
        _ = _(_, _, _.current)
          ? 26
          : _ === `html` || _ === `head` || _ === `body`
            ? 27
            : 5;
      else
        _: switch (_) {
          case _:
            return (
              (_ = _(31, _, _, _)), (_.elementType = _), (_.lanes = _), _
            );
          case _:
            return _(_.children, _, _, _);
          case _:
            ((_ = 8), (_ |= 24));
            break;
          case _:
            return (
              (_ = _(12, _, _, _ | 2)), (_.elementType = _), (_.lanes = _), _
            );
          case _:
            return (
              (_ = _(13, _, _, _)), (_.elementType = _), (_.lanes = _), _
            );
          case _:
            return (
              (_ = _(19, _, _, _)), (_.elementType = _), (_.lanes = _), _
            );
          default:
            if (typeof _ == `object` && _)
              switch (_.$$typeof) {
                case _:
                case _:
                  _ = 10;
                  break _;
                case _:
                  _ = 9;
                  break _;
                case _:
                  _ = 11;
                  break _;
                case _:
                  _ = 14;
                  break _;
                case _:
                  ((_ = 16), (_ = null));
                  break _;
              }
            ((_ = 29),
              (_ = Error(_(130, _ === null ? `null` : typeof _, ``))),
              (_ = null));
        }
      return (
        (_ = _(_, _, _, _)), (_.elementType = _), (_.type = _), (_.lanes = _), _
      );
    }
    function _(_, _, _, _) {
      return ((_ = _(7, _, _, _)), (_.lanes = _), _);
    }
    function _(_, _, _) {
      return ((_ = _(6, _, null, _)), (_.lanes = _), _);
    }
    function _(_, _, _) {
      return (
        (_ = _(4, _.children === null ? [] : _.children, _.key, _)),
        (_.lanes = _),
        (_.stateNode = {
          containerInfo: _.containerInfo,
          pendingChildren: null,
          implementation: _.implementation,
        }),
        _
      );
    }
    var _ = [],
      _ = 0,
      _ = null,
      _ = 0,
      _ = [],
      _ = 0,
      _ = null,
      _ = 1,
      _ = ``;
    function _(_, _) {
      ((_[_++] = _), (_[_++] = _), (_ = _), (_ = _));
    }
    function _(_, _, _) {
      ((_[_++] = _), (_[_++] = _), (_[_++] = _), (_ = _));
      var _ = _;
      _ = _;
      var _ = 32 - _(_) - 1;
      ((_ &= ~(1 << _)), (_ += 1));
      var _ = 32 - _(_) + _;
      if (30 < _) {
        var _ = _ - (_ % 5);
        ((_ = (_ & ((1 << _) - 1)).toString(32)),
          (_ >>= _),
          (_ -= _),
          (_ = (1 << (32 - _(_) + _)) | (_ << _) | _),
          (_ = _ + _));
      } else ((_ = (1 << _) | (_ << _) | _), (_ = _));
    }
    function _(_) {
      _.return !== null && (_(_, 1), _(_, 1, 0));
    }
    function _(_) {
      for (; _ === _;)
        ((_ = _[--_]), (_[_] = null), (_ = _[--_]), (_[_] = null));
      for (; _ === _;)
        ((_ = _[--_]),
          (_[_] = null),
          (_ = _[--_]),
          (_[_] = null),
          (_ = _[--_]),
          (_[_] = null));
    }
    var _ = null,
      _ = null,
      _ = !1,
      _ = null,
      _ = !1,
      _ = Error(_(519));
    function _(_) {
      throw (_(_(Error(_(418, ``)), _)), _);
    }
    function _(_) {
      var _ = _.stateNode,
        _ = _.type,
        _ = _.memoizedProps;
      switch (((_[_] = _), (_[_] = _), _)) {
        case `dialog`:
          (_(`cancel`, _), _(`close`, _));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          _(`load`, _);
          break;
        case `video`:
        case `audio`:
          for (_ = 0; _ < _.length; _++) _(_[_], _);
          break;
        case `source`:
          _(`error`, _);
          break;
        case `img`:
        case `image`:
        case `link`:
          (_(`error`, _), _(`load`, _));
          break;
        case `details`:
          _(`toggle`, _);
          break;
        case `input`:
          (_(`invalid`, _),
            _(
              _,
              _.value,
              _.defaultValue,
              _.checked,
              _.defaultChecked,
              _.type,
              _.name,
              !0,
            ),
            _(_));
          break;
        case `select`:
          _(`invalid`, _);
          break;
        case `textarea`:
          (_(`invalid`, _), _(_, _.value, _.defaultValue, _.children), _(_));
      }
      ((_ = _.children),
        (typeof _ != `string` &&
          typeof _ != `number` &&
          typeof _ != `bigint`) ||
        _.textContent === `` + _ ||
        !0 === _.suppressHydrationWarning ||
        _(_.textContent, _)
          ? (_.popover != null && (_(`beforetoggle`, _), _(`toggle`, _)),
            _.onScroll != null && _(`scroll`, _),
            _.onScrollEnd != null && _(`scrollend`, _),
            _.onClick != null && (_.onclick = _),
            (_ = !0))
          : (_ = !1),
        _ || _(_));
    }
    function _(_) {
      for (_ = _.return; _;)
        switch (_.tag) {
          case 5:
          case 13:
            _ = !1;
            return;
          case 27:
          case 3:
            _ = !0;
            return;
          default:
            _ = _.return;
        }
    }
    function _(_) {
      if (_ !== _) return !1;
      if (!_) return (_(_), (_ = !0), !1);
      var _ = _.tag,
        _;
      if (
        ((_ = _ !== 3 && _ !== 27) &&
          ((_ = _ === 5) &&
            ((_ = _.type),
            (_ = _ === `form` || _ === `button` || _(_.type, _.memoizedProps))),
          (_ = !_)),
        _ && _ && _(_),
        _(_),
        _ === 13)
      ) {
        if (((_ = _.memoizedState), (_ = _ === null ? null : _.dehydrated), !_))
          throw Error(_(317));
        _: {
          for (_ = _.nextSibling, _ = 0; _;) {
            if (_.nodeType === 8) {
              if (((_ = _.data), _ === `/$`)) {
                if (_ === 0) {
                  _ = _(_.nextSibling);
                  break _;
                }
                _--;
              } else (_ !== `$` && _ !== `$!` && _ !== `$?`) || _++;
            }
            _ = _.nextSibling;
          }
          _ = null;
        }
      } else
        _ === 27
          ? ((_ = _), _(_.type) ? ((_ = _), (_ = null), (_ = _)) : (_ = _))
          : (_ = _ ? _(_.stateNode.nextSibling) : null);
      return !0;
    }
    function _() {
      ((_ = _ = null), (_ = !1));
    }
    function _() {
      var _ = _;
      return (
        _ !== null && (_ === null ? (_ = _) : _.push.apply(_, _), (_ = null)), _
      );
    }
    function _(_) {
      _ === null ? (_ = [_]) : _.push(_);
    }
    var _ = _(null),
      _ = null,
      _ = null;
    function _(_, _, _) {
      (_(_, _._currentValue), (_._currentValue = _));
    }
    function _(_) {
      ((_._currentValue = _.current), _(_));
    }
    function _(_, _, _) {
      for (; _ !== null;) {
        var _ = _.alternate;
        if (
          ((_.childLanes & _) === _
            ? _ !== null && (_.childLanes & _) !== _ && (_.childLanes |= _)
            : ((_.childLanes |= _), _ !== null && (_.childLanes |= _)),
          _ === _)
        )
          break;
        _ = _.return;
      }
    }
    function _(_, _, _, _) {
      var _ = _.child;
      for (_ !== null && (_.return = _); _ !== null;) {
        var _ = _.dependencies;
        if (_ !== null) {
          var _ = _.child;
          _ = _.firstContext;
          _: for (; _ !== null;) {
            var _ = _;
            _ = _;
            for (var _ = 0; _ < _.length; _++)
              if (_.context === _[_]) {
                ((_.lanes |= _),
                  (_ = _.alternate),
                  _ !== null && (_.lanes |= _),
                  _(_.return, _, _),
                  _ || (_ = null));
                break _;
              }
            _ = _.next;
          }
        } else if (_.tag === 18) {
          if (((_ = _.return), _ === null)) throw Error(_(341));
          ((_.lanes |= _),
            (_ = _.alternate),
            _ !== null && (_.lanes |= _),
            _(_, _, _),
            (_ = null));
        } else _ = _.child;
        if (_ !== null) _.return = _;
        else
          for (_ = _; _ !== null;) {
            if (_ === _) {
              _ = null;
              break;
            }
            if (((_ = _.sibling), _ !== null)) {
              ((_.return = _.return), (_ = _));
              break;
            }
            _ = _.return;
          }
        _ = _;
      }
    }
    function _(_, _, _, _) {
      _ = null;
      for (var _ = _, _ = !1; _ !== null;) {
        if (!_) {
          if (_.flags & 524288) _ = !0;
          else if (_.flags & 262144) break;
        }
        if (_.tag === 10) {
          var _ = _.alternate;
          if (_ === null) throw Error(_(387));
          if (((_ = _.memoizedProps), _ !== null)) {
            var _ = _.type;
            _(_.pendingProps.value, _.value) ||
              (_ === null ? (_ = [_]) : _.push(_));
          }
        } else if (_ === _.current) {
          if (((_ = _.alternate), _ === null)) throw Error(_(387));
          _.memoizedState.memoizedState !== _.memoizedState.memoizedState &&
            (_ === null ? (_ = [_]) : _.push(_));
        }
        _ = _.return;
      }
      (_ !== null && _(_, _, _, _), (_.flags |= 262144));
    }
    function _(_) {
      for (_ = _.firstContext; _ !== null;) {
        if (!_(_.context._currentValue, _.memoizedValue)) return !0;
        _ = _.next;
      }
      return !1;
    }
    function _(_) {
      ((_ = _),
        (_ = null),
        (_ = _.dependencies),
        _ !== null && (_.firstContext = null));
    }
    function _(_) {
      return _(_, _);
    }
    function _(_, _) {
      return (_ === null && _(_), _(_, _));
    }
    function _(_, _) {
      var _ = _._currentValue;
      if (
        ((_ = {
          context: _,
          memoizedValue: _,
          next: null,
        }),
        _ === null)
      ) {
        if (_ === null) throw Error(_(308));
        ((_ = _),
          (_.dependencies = {
            lanes: 0,
            firstContext: _,
          }),
          (_.flags |= 524288));
      } else _ = _.next = _;
      return _;
    }
    var _ =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var _ = [],
                _ = (this.signal = {
                  aborted: !1,
                  addEventListener: function (_, _) {
                    _.push(_);
                  },
                });
              this.abort = function () {
                ((_.aborted = !0),
                  _.forEach(function (_) {
                    return _();
                  }));
              };
            },
      _ = _.unstable_scheduleCallback,
      _ = _.unstable_NormalPriority,
      _ = {
        $$typeof: _,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function _() {
      return {
        controller: new _(),
        data: new Map(),
        refCount: 0,
      };
    }
    function _(_) {
      (_.refCount--,
        _.refCount === 0 &&
          _(_, function () {
            _.controller.abort();
          }));
    }
    var _ = null,
      _ = 0,
      _ = 0,
      _ = null;
    function _(_, _) {
      if (_ === null) {
        var _ = (_ = []);
        ((_ = 0),
          (_ = _()),
          (_ = {
            status: `pending`,
            value: void 0,
            then: function (_) {
              _.push(_);
            },
          }));
      }
      return (_++, _.then(_, _), _);
    }
    function _() {
      if (--_ === 0 && _ !== null) {
        _ !== null && (_.status = `fulfilled`);
        var _ = _;
        ((_ = null), (_ = 0), (_ = null));
        for (var _ = 0; _ < _.length; _++) (0, _[_])();
      }
    }
    function _(_, _) {
      var _ = [],
        _ = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (_) {
            _.push(_);
          },
        };
      return (
        _.then(
          function () {
            ((_.status = `fulfilled`), (_.value = _));
            for (var _ = 0; _ < _.length; _++) (0, _[_])(_);
          },
          function (_) {
            for (_.status = `rejected`, _.reason = _, _ = 0; _ < _.length; _++)
              (0, _[_])(void 0);
          },
        ),
        _
      );
    }
    var _ = _._;
    _._ = function (_, _) {
      (typeof _ == `object` && _ && typeof _.then == `function` && _(_, _),
        _ !== null && _(_, _));
    };
    var _ = _(null);
    function _() {
      var _ = _.current;
      return _ === null ? _.pooledCache : _;
    }
    function _(_, _) {
      _ === null ? _(_, _.current) : _(_, _.pool);
    }
    function _() {
      var _ = _();
      return _ === null
        ? null
        : {
            parent: _._currentValue,
            pool: _,
          };
    }
    var _ = Error(_(460)),
      _ = Error(_(474)),
      _ = Error(_(542)),
      _ = {
        then: function () {},
      };
    function _(_) {
      return ((_ = _.status), _ === `fulfilled` || _ === `rejected`);
    }
    function _() {}
    function _(_, _, _) {
      switch (
        ((_ = _[_]),
        _ === void 0 ? _.push(_) : _ !== _ && (_.then(_, _), (_ = _)),
        _.status)
      ) {
        case `fulfilled`:
          return _.value;
        case `rejected`:
          throw ((_ = _.reason), _(_), _);
        default:
          if (typeof _.status == `string`) _.then(_, _);
          else {
            if (((_ = _), _ !== null && 100 < _.shellSuspendCounter))
              throw Error(_(482));
            ((_ = _),
              (_.status = `pending`),
              _.then(
                function (_) {
                  if (_.status === `pending`) {
                    var _ = _;
                    ((_.status = `fulfilled`), (_.value = _));
                  }
                },
                function (_) {
                  if (_.status === `pending`) {
                    var _ = _;
                    ((_.status = `rejected`), (_.reason = _));
                  }
                },
              ));
          }
          switch (_.status) {
            case `fulfilled`:
              return _.value;
            case `rejected`:
              throw ((_ = _.reason), _(_), _);
          }
          throw ((_ = _), _);
      }
    }
    var _ = null;
    function _() {
      if (_ === null) throw Error(_(459));
      var _ = _;
      return ((_ = null), _);
    }
    function _(_) {
      if (_ === _ || _ === _) throw Error(_(483));
    }
    var _ = !1;
    function _(_) {
      _.updateQueue = {
        baseState: _.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null,
        },
        callbacks: null,
      };
    }
    function _(_, _) {
      ((_ = _.updateQueue),
        _.updateQueue === _ &&
          (_.updateQueue = {
            baseState: _.baseState,
            firstBaseUpdate: _.firstBaseUpdate,
            lastBaseUpdate: _.lastBaseUpdate,
            shared: _.shared,
            callbacks: null,
          }));
    }
    function _(_) {
      return {
        lane: _,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function _(_, _, _) {
      var _ = _.updateQueue;
      if (_ === null) return null;
      if (((_ = _.shared), _ & 2)) {
        var _ = _.pending;
        return (
          _ === null ? (_.next = _) : ((_.next = _.next), (_.next = _)),
          (_.pending = _),
          (_ = _(_)),
          _(_, null, _),
          _
        );
      }
      return (_(_, _, _, _), _(_));
    }
    function _(_, _, _) {
      if (((_ = _.updateQueue), _ !== null && ((_ = _.shared), _ & 4194048))) {
        var _ = _.lanes;
        ((_ &= _.pendingLanes), (_ |= _), (_.lanes = _), _(_, _));
      }
    }
    function _(_, _) {
      var _ = _.updateQueue,
        _ = _.alternate;
      if (_ !== null && ((_ = _.updateQueue), _ === _)) {
        var _ = null,
          _ = null;
        if (((_ = _.firstBaseUpdate), _ !== null)) {
          do {
            var _ = {
              lane: _.lane,
              tag: _.tag,
              payload: _.payload,
              callback: null,
              next: null,
            };
            (_ === null ? (_ = _ = _) : (_ = _.next = _), (_ = _.next));
          } while (_ !== null);
          _ === null ? (_ = _ = _) : (_ = _.next = _);
        } else _ = _ = _;
        ((_ = {
          baseState: _.baseState,
          firstBaseUpdate: _,
          lastBaseUpdate: _,
          shared: _.shared,
          callbacks: _.callbacks,
        }),
          (_.updateQueue = _));
      } else
        ((_ = _.lastBaseUpdate),
          _ === null ? (_.firstBaseUpdate = _) : (_.next = _),
          (_.lastBaseUpdate = _));
    }
    var _ = !1;
    function _() {
      if (_) {
        var _ = _;
        if (_ !== null) throw _;
      }
    }
    function _(_, _, _, _) {
      _ = !1;
      var _ = _.updateQueue;
      _ = !1;
      var _ = _.firstBaseUpdate,
        _ = _.lastBaseUpdate,
        _ = _.shared.pending;
      if (_ !== null) {
        _.shared.pending = null;
        var _ = _,
          _ = _.next;
        ((_.next = null), _ === null ? (_ = _) : (_.next = _), (_ = _));
        var _ = _.alternate;
        _ !== null &&
          ((_ = _.updateQueue),
          (_ = _.lastBaseUpdate),
          _ !== _ &&
            (_ === null ? (_.firstBaseUpdate = _) : (_.next = _),
            (_.lastBaseUpdate = _)));
      }
      if (_ !== null) {
        var _ = _.baseState;
        ((_ = 0), (_ = _ = _ = null), (_ = _));
        do {
          var _ = _.lane & -536870913,
            _ = _ !== _.lane;
          if (_ ? (_ & _) === _ : (_ & _) === _) {
            (_ !== 0 && _ === _ && (_ = !0),
              _ !== null &&
                (_ = _.next =
                  {
                    lane: 0,
                    tag: _.tag,
                    payload: _.payload,
                    callback: null,
                    next: null,
                  }));
            _: {
              var _ = _,
                _ = _;
              _ = _;
              var _ = _;
              switch (_.tag) {
                case 1:
                  if (((_ = _.payload), typeof _ == `function`)) {
                    _ = _.call(_, _, _);
                    break _;
                  }
                  _ = _;
                  break _;
                case 3:
                  _.flags = (_.flags & -65537) | 128;
                case 0:
                  if (
                    ((_ = _.payload),
                    (_ = typeof _ == `function` ? _.call(_, _, _) : _),
                    _ == null)
                  )
                    break _;
                  _ = _({}, _, _);
                  break _;
                case 2:
                  _ = !0;
              }
            }
            ((_ = _.callback),
              _ !== null &&
                ((_.flags |= 64),
                _ && (_.flags |= 8192),
                (_ = _.callbacks),
                _ === null ? (_.callbacks = [_]) : _.push(_)));
          } else
            ((_ = {
              lane: _,
              tag: _.tag,
              payload: _.payload,
              callback: _.callback,
              next: null,
            }),
              _ === null ? ((_ = _ = _), (_ = _)) : (_ = _.next = _),
              (_ |= _));
          if (((_ = _.next), _ === null)) {
            if (((_ = _.shared.pending), _ === null)) break;
            ((_ = _),
              (_ = _.next),
              (_.next = null),
              (_.lastBaseUpdate = _),
              (_.shared.pending = null));
          }
        } while (1);
        (_ === null && (_ = _),
          (_.baseState = _),
          (_.firstBaseUpdate = _),
          (_.lastBaseUpdate = _),
          _ === null && (_.shared.lanes = 0),
          (_ |= _),
          (_.lanes = _),
          (_.memoizedState = _));
      }
    }
    function _(_, _) {
      if (typeof _ != `function`) throw Error(_(191, _));
      _.call(_);
    }
    function _(_, _) {
      var _ = _.callbacks;
      if (_ !== null)
        for (_.callbacks = null, _ = 0; _ < _.length; _++) _(_[_], _);
    }
    var _ = _(null),
      _ = _(0);
    function _(_, _) {
      ((_ = _), _(_, _), _(_, _), (_ = _ | _.baseLanes));
    }
    function _() {
      (_(_, _), _(_, _.current));
    }
    function _() {
      ((_ = _.current), _(_), _(_));
    }
    var _ = 0,
      _ = null,
      _ = null,
      _ = null,
      _ = !1,
      _ = !1,
      _ = !1,
      _ = 0,
      _ = 0,
      _ = null,
      _ = 0;
    function _() {
      throw Error(_(321));
    }
    function _(_, _) {
      if (_ === null) return !1;
      for (var _ = 0; _ < _.length && _ < _.length; _++)
        if (!_(_[_], _[_])) return !1;
      return !0;
    }
    function _(_, _, _, _, _, _) {
      return (
        (_ = _),
        (_ = _),
        (_.memoizedState = null),
        (_.updateQueue = null),
        (_.lanes = 0),
        (_._ = _ === null || _.memoizedState === null ? _ : _),
        (_ = !1),
        (_ = _(_, _)),
        (_ = !1),
        _ && (_ = _(_, _, _, _)),
        _(_),
        _
      );
    }
    function _(_) {
      _._ = _;
      var _ = _ !== null && _.next !== null;
      if (((_ = 0), (_ = _ = _ = null), (_ = !1), (_ = 0), (_ = null), _))
        throw Error(_(300));
      _ === null || _ || ((_ = _.dependencies), _ !== null && _(_) && (_ = !0));
    }
    function _(_, _, _, _) {
      _ = _;
      var _ = 0;
      do {
        if ((_ && (_ = null), (_ = 0), (_ = !1), 25 <= _)) throw Error(_(301));
        if (((_ += 1), (_ = _ = null), _.updateQueue != null)) {
          var _ = _.updateQueue;
          ((_.lastEffect = null),
            (_.events = null),
            (_.stores = null),
            _.memoCache != null && (_.memoCache.index = 0));
        }
        ((_._ = _), (_ = _(_, _)));
      } while (_);
      return _;
    }
    function _() {
      var _ = _._,
        _ = _.useState()[0];
      return (
        (_ = typeof _.then == `function` ? _(_) : _),
        (_ = _.useState()[0]),
        (_ === null ? null : _.memoizedState) !== _ && (_.flags |= 1024),
        _
      );
    }
    function _() {
      var _ = _ !== 0;
      return ((_ = 0), _);
    }
    function _(_, _, _) {
      ((_.updateQueue = _.updateQueue), (_.flags &= -2053), (_.lanes &= ~_));
    }
    function _(_) {
      if (_) {
        for (_ = _.memoizedState; _ !== null;) {
          var _ = _.queue;
          (_ !== null && (_.pending = null), (_ = _.next));
        }
        _ = !1;
      }
      ((_ = 0), (_ = _ = _ = null), (_ = !1), (_ = _ = 0), (_ = null));
    }
    function _() {
      var _ = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (_ === null ? (_.memoizedState = _ = _) : (_ = _.next = _), _);
    }
    function _() {
      if (_ === null) {
        var _ = _.alternate;
        _ = _ === null ? null : _.memoizedState;
      } else _ = _.next;
      var _ = _ === null ? _.memoizedState : _.next;
      if (_ !== null) ((_ = _), (_ = _));
      else {
        if (_ === null)
          throw _.alternate === null ? Error(_(467)) : Error(_(310));
        ((_ = _),
          (_ = {
            memoizedState: _.memoizedState,
            baseState: _.baseState,
            baseQueue: _.baseQueue,
            queue: _.queue,
            next: null,
          }),
          _ === null ? (_.memoizedState = _ = _) : (_ = _.next = _));
      }
      return _;
    }
    function _() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null,
      };
    }
    function _(_) {
      var _ = _;
      return (
        (_ += 1),
        _ === null && (_ = []),
        (_ = _(_, _, _)),
        (_ = _),
        (_ === null ? _.memoizedState : _.next) === null &&
          ((_ = _.alternate),
          (_._ = _ === null || _.memoizedState === null ? _ : _)),
        _
      );
    }
    function _(_) {
      if (typeof _ == `object` && _) {
        if (typeof _.then == `function`) return _(_);
        if (_.$$typeof === _) return _(_);
      }
      throw Error(_(438, String(_)));
    }
    function _(_) {
      var _ = null,
        _ = _.updateQueue;
      if ((_ !== null && (_ = _.memoCache), _ == null)) {
        var _ = _.alternate;
        _ !== null &&
          ((_ = _.updateQueue),
          _ !== null &&
            ((_ = _.memoCache),
            _ != null &&
              (_ = {
                data: _.data.map(function (_) {
                  return _.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((_ ??= {
          data: [],
          index: 0,
        }),
        _ === null && ((_ = _()), (_.updateQueue = _)),
        (_.memoCache = _),
        (_ = _.data[_.index]),
        _ === void 0)
      )
        for (_ = _.data[_.index] = Array(_), _ = 0; _ < _; _++) _[_] = _;
      return (_.index++, _);
    }
    function _(_, _) {
      return typeof _ == `function` ? _(_) : _;
    }
    function _(_) {
      return _(_(), _, _);
    }
    function _(_, _, _) {
      var _ = _.queue;
      if (_ === null) throw Error(_(311));
      _.lastRenderedReducer = _;
      var _ = _.baseQueue,
        _ = _.pending;
      if (_ !== null) {
        if (_ !== null) {
          var _ = _.next;
          ((_.next = _.next), (_.next = _));
        }
        ((_.baseQueue = _ = _), (_.pending = null));
      }
      if (((_ = _.baseState), _ === null)) _.memoizedState = _;
      else {
        _ = _.next;
        var _ = (_ = null),
          _ = null,
          _ = _,
          _ = !1;
        do {
          var _ = _.lane & -536870913;
          if (_ === _.lane ? (_ & _) === _ : (_ & _) === _) {
            var _ = _.revertLane;
            if (_ === 0)
              (_ !== null &&
                (_ = _.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    action: _.action,
                    hasEagerState: _.hasEagerState,
                    eagerState: _.eagerState,
                    next: null,
                  }),
                _ === _ && (_ = !0));
            else if ((_ & _) === _) {
              ((_ = _.next), _ === _ && (_ = !0));
              continue;
            } else
              ((_ = {
                lane: 0,
                revertLane: _.revertLane,
                action: _.action,
                hasEagerState: _.hasEagerState,
                eagerState: _.eagerState,
                next: null,
              }),
                _ === null ? ((_ = _ = _), (_ = _)) : (_ = _.next = _),
                (_.lanes |= _),
                (_ |= _));
            ((_ = _.action),
              _ && _(_, _),
              (_ = _.hasEagerState ? _.eagerState : _(_, _)));
          } else
            ((_ = {
              lane: _,
              revertLane: _.revertLane,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              _ === null ? ((_ = _ = _), (_ = _)) : (_ = _.next = _),
              (_.lanes |= _),
              (_ |= _));
          _ = _.next;
        } while (_ !== null && _ !== _);
        if (
          (_ === null ? (_ = _) : (_.next = _),
          !_(_, _.memoizedState) && ((_ = !0), _ && ((_ = _), _ !== null)))
        )
          throw _;
        ((_.memoizedState = _),
          (_.baseState = _),
          (_.baseQueue = _),
          (_.lastRenderedState = _));
      }
      return (_ === null && (_.lanes = 0), [_.memoizedState, _.dispatch]);
    }
    function _(_) {
      var _ = _(),
        _ = _.queue;
      if (_ === null) throw Error(_(311));
      _.lastRenderedReducer = _;
      var _ = _.dispatch,
        _ = _.pending,
        _ = _.memoizedState;
      if (_ !== null) {
        _.pending = null;
        var _ = (_ = _.next);
        do ((_ = _(_, _.action)), (_ = _.next));
        while (_ !== _);
        (_(_, _.memoizedState) || (_ = !0),
          (_.memoizedState = _),
          _.baseQueue === null && (_.baseState = _),
          (_.lastRenderedState = _));
      }
      return [_, _];
    }
    function _(_, _, _) {
      var _ = _,
        _ = _(),
        _ = _;
      if (_) {
        if (_ === void 0) throw Error(_(407));
        _ = _();
      } else _ = _();
      var _ = !_((_ || _).memoizedState, _);
      if (
        (_ && ((_.memoizedState = _), (_ = !0)),
        (_ = _.queue),
        _(2048, 8, _.bind(null, _, _, _), [_]),
        _.getSnapshot !== _ || _ || (_ !== null && _.memoizedState.tag & 1))
      ) {
        if (
          ((_.flags |= 2048),
          _(9, _(), _.bind(null, _, _, _, _), null),
          _ === null)
        )
          throw Error(_(349));
        _ || _ & 124 || _(_, _, _);
      }
      return _;
    }
    function _(_, _, _) {
      ((_.flags |= 16384),
        (_ = {
          getSnapshot: _,
          value: _,
        }),
        (_ = _.updateQueue),
        _ === null
          ? ((_ = _()), (_.updateQueue = _), (_.stores = [_]))
          : ((_ = _.stores), _ === null ? (_.stores = [_]) : _.push(_)));
    }
    function _(_, _, _, _) {
      ((_.value = _), (_.getSnapshot = _), _(_) && _(_));
    }
    function _(_, _, _) {
      return _(function () {
        _(_) && _(_);
      });
    }
    function _(_) {
      var _ = _.getSnapshot;
      _ = _.value;
      try {
        var _ = _();
        return !_(_, _);
      } catch {
        return !0;
      }
    }
    function _(_) {
      var _ = _(_, 2);
      _ !== null && _(_, _, 2);
    }
    function _(_) {
      var _ = _();
      if (typeof _ == `function`) {
        var _ = _;
        if (((_ = _()), _)) {
          _(!0);
          try {
            _();
          } finally {
            _(!1);
          }
        }
      }
      return (
        (_.memoizedState = _.baseState = _),
        (_.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _,
          lastRenderedState: _,
        }),
        _
      );
    }
    function _(_, _, _, _) {
      return ((_.baseState = _), _(_, _, typeof _ == `function` ? _ : _));
    }
    function _(_, _, _, _, _) {
      if (_(_)) throw Error(_(485));
      if (((_ = _.action), _ !== null)) {
        var _ = {
          payload: _,
          action: _,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (_) {
            _.listeners.push(_);
          },
        };
        (_._ === null ? (_.isTransition = !1) : _(!0),
          _(_),
          (_ = _.pending),
          _ === null
            ? ((_.next = _.pending = _), _(_, _))
            : ((_.next = _.next), (_.pending = _.next = _)));
      }
    }
    function _(_, _) {
      var _ = _.action,
        _ = _.payload,
        _ = _.state;
      if (_.isTransition) {
        var _ = _._,
          _ = {};
        _._ = _;
        try {
          var _ = _(_, _),
            _ = _._;
          (_ !== null && _(_, _), _(_, _, _));
        } catch (_) {
          _(_, _, _);
        } finally {
          _._ = _;
        }
      } else
        try {
          ((_ = _(_, _)), _(_, _, _));
        } catch (_) {
          _(_, _, _);
        }
    }
    function _(_, _, _) {
      typeof _ == `object` && _ && typeof _.then == `function`
        ? _.then(
            function (_) {
              _(_, _, _);
            },
            function (_) {
              return _(_, _, _);
            },
          )
        : _(_, _, _);
    }
    function _(_, _, _) {
      ((_.status = `fulfilled`),
        (_.value = _),
        _(_),
        (_.state = _),
        (_ = _.pending),
        _ !== null &&
          ((_ = _.next),
          _ === _
            ? (_.pending = null)
            : ((_ = _.next), (_.next = _), _(_, _))));
    }
    function _(_, _, _) {
      var _ = _.pending;
      if (((_.pending = null), _ !== null)) {
        _ = _.next;
        do ((_.status = `rejected`), (_.reason = _), _(_), (_ = _.next));
        while (_ !== _);
      }
      _.action = null;
    }
    function _(_) {
      _ = _.listeners;
      for (var _ = 0; _ < _.length; _++) (0, _[_])();
    }
    function _(_, _) {
      return _;
    }
    function _(_, _) {
      if (_) {
        var _ = _.formState;
        if (_ !== null) {
          _: {
            var _ = _;
            if (_) {
              if (_) {
                _: {
                  for (var _ = _, _ = _; _.nodeType !== 8;)
                    if (!_ || ((_ = _(_.nextSibling)), _ === null)) {
                      _ = null;
                      break _;
                    }
                  ((_ = _.data), (_ = _ === `F!` || _ === `F` ? _ : null));
                }
                if (_) {
                  ((_ = _(_.nextSibling)), (_ = _.data === `F!`));
                  break _;
                }
              }
              _(_);
            }
            _ = !1;
          }
          _ && (_ = _[0]);
        }
      }
      return (
        (_ = _()),
        (_.memoizedState = _.baseState = _),
        (_ = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _,
          lastRenderedState: _,
        }),
        (_.queue = _),
        (_ = _.bind(null, _, _)),
        (_.dispatch = _),
        (_ = _(!1)),
        (_ = _.bind(null, _, !1, _.queue)),
        (_ = _()),
        (_ = {
          state: _,
          dispatch: null,
          action: _,
          pending: null,
        }),
        (_.queue = _),
        (_ = _.bind(null, _, _, _, _)),
        (_.dispatch = _),
        (_.memoizedState = _),
        [_, _, !1]
      );
    }
    function _(_) {
      return _(_(), _, _);
    }
    function _(_, _, _) {
      if (
        ((_ = _(_, _, _)[0]),
        (_ = _(_)[0]),
        typeof _ == `object` && _ && typeof _.then == `function`)
      )
        try {
          var _ = _(_);
        } catch (_) {
          throw _ === _ ? _ : _;
        }
      else _ = _;
      _ = _();
      var _ = _.queue,
        _ = _.dispatch;
      return (
        _ !== _.memoizedState &&
          ((_.flags |= 2048), _(9, _(), _.bind(null, _, _), null)),
        [_, _, _]
      );
    }
    function _(_, _) {
      _.action = _;
    }
    function _(_) {
      var _ = _(),
        _ = _;
      if (_ !== null) return _(_, _, _);
      (_(), (_ = _.memoizedState), (_ = _()));
      var _ = _.queue.dispatch;
      return ((_.memoizedState = _), [_, _, !1]);
    }
    function _(_, _, _, _) {
      return (
        (_ = {
          tag: _,
          create: _,
          deps: _,
          inst: _,
          next: null,
        }),
        (_ = _.updateQueue),
        _ === null && ((_ = _()), (_.updateQueue = _)),
        (_ = _.lastEffect),
        _ === null
          ? (_.lastEffect = _.next = _)
          : ((_ = _.next), (_.next = _), (_.next = _), (_.lastEffect = _)),
        _
      );
    }
    function _() {
      return {
        destroy: void 0,
        resource: void 0,
      };
    }
    function _() {
      return _().memoizedState;
    }
    function _(_, _, _, _) {
      var _ = _();
      ((_ = _ === void 0 ? null : _),
        (_.flags |= _),
        (_.memoizedState = _(1 | _, _(), _, _)));
    }
    function _(_, _, _, _) {
      var _ = _();
      _ = _ === void 0 ? null : _;
      var _ = _.memoizedState.inst;
      _ !== null && _ !== null && _(_, _.memoizedState.deps)
        ? (_.memoizedState = _(_, _, _, _))
        : ((_.flags |= _), (_.memoizedState = _(1 | _, _, _, _)));
    }
    function _(_, _) {
      _(8390656, 8, _, _);
    }
    function _(_, _) {
      _(2048, 8, _, _);
    }
    function _(_, _) {
      return _(4, 2, _, _);
    }
    function _(_, _) {
      return _(4, 4, _, _);
    }
    function _(_, _) {
      if (typeof _ == `function`) {
        _ = _();
        var _ = _(_);
        return function () {
          typeof _ == `function` ? _() : _(null);
        };
      }
      if (_ != null)
        return (
          (_ = _()),
          (_.current = _),
          function () {
            _.current = null;
          }
        );
    }
    function _(_, _, _) {
      ((_ = _ == null ? null : _.concat([_])), _(4, 4, _.bind(null, _, _), _));
    }
    function _() {}
    function _(_, _) {
      var _ = _();
      _ = _ === void 0 ? null : _;
      var _ = _.memoizedState;
      return _ !== null && _(_, _[1]) ? _[0] : ((_.memoizedState = [_, _]), _);
    }
    function _(_, _) {
      var _ = _();
      _ = _ === void 0 ? null : _;
      var _ = _.memoizedState;
      if (_ !== null && _(_, _[1])) return _[0];
      if (((_ = _()), _)) {
        _(!0);
        try {
          _();
        } finally {
          _(!1);
        }
      }
      return ((_.memoizedState = [_, _]), _);
    }
    function _(_, _, _) {
      return _ === void 0 || _ & 1073741824
        ? (_.memoizedState = _)
        : ((_.memoizedState = _), (_ = _()), (_.lanes |= _), (_ |= _), _);
    }
    function _(_, _, _, _) {
      return _(_, _)
        ? _
        : _.current === null
          ? _ & 42
            ? ((_ = _()), (_.lanes |= _), (_ |= _), _)
            : ((_ = !0), (_.memoizedState = _))
          : ((_ = _(_, _, _)), _(_, _) || (_ = !0), _);
    }
    function _(_, _, _, _, _) {
      var _ = _._;
      _._ = _ !== 0 && 8 > _ ? _ : 8;
      var _ = _._,
        _ = {};
      ((_._ = _), _(_, !1, _, _));
      try {
        var _ = _(),
          _ = _._;
        (_ !== null && _(_, _),
          typeof _ == `object` && _ && typeof _.then == `function`
            ? _(_, _, _(_, _), _(_))
            : _(_, _, _, _(_)));
      } catch (_) {
        _(
          _,
          _,
          {
            then: function () {},
            status: `rejected`,
            reason: _,
          },
          _(),
        );
      } finally {
        ((_._ = _), (_._ = _));
      }
    }
    function _() {}
    function _(_, _, _, _) {
      if (_.tag !== 5) throw Error(_(476));
      var _ = _(_).queue;
      _(
        _,
        _,
        _,
        _,
        _ === null
          ? _
          : function () {
              return (_(_), _(_));
            },
      );
    }
    function _(_) {
      var _ = _.memoizedState;
      if (_ !== null) return _;
      _ = {
        memoizedState: _,
        baseState: _,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: _,
          lastRenderedState: _,
        },
        next: null,
      };
      var _ = {};
      return (
        (_.next = {
          memoizedState: _,
          baseState: _,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: _,
            lastRenderedState: _,
          },
          next: null,
        }),
        (_.memoizedState = _),
        (_ = _.alternate),
        _ !== null && (_.memoizedState = _),
        _
      );
    }
    function _(_) {
      var _ = _(_).next.queue;
      _(_, _, {}, _());
    }
    function _() {
      return _(_);
    }
    function _() {
      return _().memoizedState;
    }
    function _() {
      return _().memoizedState;
    }
    function _(_) {
      for (var _ = _.return; _ !== null;) {
        switch (_.tag) {
          case 24:
          case 3:
            var _ = _();
            _ = _(_);
            var _ = _(_, _, _);
            (_ !== null && (_(_, _, _), _(_, _, _)),
              (_ = {
                cache: _(),
              }),
              (_.payload = _));
            return;
        }
        _ = _.return;
      }
    }
    function _(_, _, _) {
      var _ = _();
      ((_ = {
        lane: _,
        revertLane: 0,
        action: _,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        _(_)
          ? _(_, _)
          : ((_ = _(_, _, _, _)), _ !== null && (_(_, _, _), _(_, _, _))));
    }
    function _(_, _, _) {
      _(_, _, _, _());
    }
    function _(_, _, _, _) {
      var _ = {
        lane: _,
        revertLane: 0,
        action: _,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (_(_)) _(_, _);
      else {
        var _ = _.alternate;
        if (
          _.lanes === 0 &&
          (_ === null || _.lanes === 0) &&
          ((_ = _.lastRenderedReducer), _ !== null)
        )
          try {
            var _ = _.lastRenderedState,
              _ = _(_, _);
            if (((_.hasEagerState = !0), (_.eagerState = _), _(_, _)))
              return (_(_, _, _, 0), _ === null && _(), !1);
          } catch {}
        if (((_ = _(_, _, _, _)), _ !== null))
          return (_(_, _, _), _(_, _, _), !0);
      }
      return !1;
    }
    function _(_, _, _, _) {
      if (
        ((_ = {
          lane: 2,
          revertLane: _(),
          action: _,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        _(_))
      ) {
        if (_) throw Error(_(479));
      } else ((_ = _(_, _, _, 2)), _ !== null && _(_, _, 2));
    }
    function _(_) {
      var _ = _.alternate;
      return _ === _ || (_ !== null && _ === _);
    }
    function _(_, _) {
      _ = _ = !0;
      var _ = _.pending;
      (_ === null ? (_.next = _) : ((_.next = _.next), (_.next = _)),
        (_.pending = _));
    }
    function _(_, _, _) {
      if (_ & 4194048) {
        var _ = _.lanes;
        ((_ &= _.pendingLanes), (_ |= _), (_.lanes = _), _(_, _));
      }
    }
    var _ = {
        readContext: _,
        use: _,
        useCallback: _,
        useContext: _,
        useEffect: _,
        useImperativeHandle: _,
        useLayoutEffect: _,
        useInsertionEffect: _,
        useMemo: _,
        useReducer: _,
        useRef: _,
        useState: _,
        useDebugValue: _,
        useDeferredValue: _,
        useTransition: _,
        useSyncExternalStore: _,
        useId: _,
        useHostTransitionStatus: _,
        useFormState: _,
        useActionState: _,
        useOptimistic: _,
        useMemoCache: _,
        useCacheRefresh: _,
      },
      _ = {
        readContext: _,
        use: _,
        useCallback: function (_, _) {
          return ((_().memoizedState = [_, _ === void 0 ? null : _]), _);
        },
        useContext: _,
        useEffect: _,
        useImperativeHandle: function (_, _, _) {
          ((_ = _ == null ? null : _.concat([_])),
            _(4194308, 4, _.bind(null, _, _), _));
        },
        useLayoutEffect: function (_, _) {
          return _(4194308, 4, _, _);
        },
        useInsertionEffect: function (_, _) {
          _(4, 2, _, _);
        },
        useMemo: function (_, _) {
          var _ = _();
          _ = _ === void 0 ? null : _;
          var _ = _();
          if (_) {
            _(!0);
            try {
              _();
            } finally {
              _(!1);
            }
          }
          return ((_.memoizedState = [_, _]), _);
        },
        useReducer: function (_, _, _) {
          var _ = _();
          if (_ !== void 0) {
            var _ = _(_);
            if (_) {
              _(!0);
              try {
                _(_);
              } finally {
                _(!1);
              }
            }
          } else _ = _;
          return (
            (_.memoizedState = _.baseState = _),
            (_ = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: _,
              lastRenderedState: _,
            }),
            (_.queue = _),
            (_ = _.dispatch = _.bind(null, _, _)),
            [_.memoizedState, _]
          );
        },
        useRef: function (_) {
          var _ = _();
          return (
            (_ = {
              current: _,
            }),
            (_.memoizedState = _)
          );
        },
        useState: function (_) {
          _ = _(_);
          var _ = _.queue,
            _ = _.bind(null, _, _);
          return ((_.dispatch = _), [_.memoizedState, _]);
        },
        useDebugValue: _,
        useDeferredValue: function (_, _) {
          return _(_(), _, _);
        },
        useTransition: function () {
          var _ = _(!1);
          return (
            (_ = _.bind(null, _, _.queue, !0, !1)),
            (_().memoizedState = _),
            [!1, _]
          );
        },
        useSyncExternalStore: function (_, _, _) {
          var _ = _,
            _ = _();
          if (_) {
            if (_ === void 0) throw Error(_(407));
            _ = _();
          } else {
            if (((_ = _()), _ === null)) throw Error(_(349));
            _ & 124 || _(_, _, _);
          }
          _.memoizedState = _;
          var _ = {
            value: _,
            getSnapshot: _,
          };
          return (
            (_.queue = _),
            _(_.bind(null, _, _, _), [_]),
            (_.flags |= 2048),
            _(9, _(), _.bind(null, _, _, _, _), null),
            _
          );
        },
        useId: function () {
          var _ = _(),
            _ = _.identifierPrefix;
          if (_) {
            var _ = _,
              _ = _;
            ((_ = (_ & ~(1 << (32 - _(_) - 1))).toString(32) + _),
              (_ = `«` + _ + `R` + _),
              (_ = _++),
              0 < _ && (_ += `H` + _.toString(32)),
              (_ += `»`));
          } else ((_ = _++), (_ = `«` + _ + `r` + _.toString(32) + `»`));
          return (_.memoizedState = _);
        },
        useHostTransitionStatus: _,
        useFormState: _,
        useActionState: _,
        useOptimistic: function (_) {
          var _ = _();
          _.memoizedState = _.baseState = _;
          var _ = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (_.queue = _),
            (_ = _.bind(null, _, !0, _)),
            (_.dispatch = _),
            [_, _]
          );
        },
        useMemoCache: _,
        useCacheRefresh: function () {
          return (_().memoizedState = _.bind(null, _));
        },
      },
      _ = {
        readContext: _,
        use: _,
        useCallback: _,
        useContext: _,
        useEffect: _,
        useImperativeHandle: _,
        useInsertionEffect: _,
        useLayoutEffect: _,
        useMemo: _,
        useReducer: _,
        useRef: _,
        useState: function () {
          return _(_);
        },
        useDebugValue: _,
        useDeferredValue: function (_, _) {
          return _(_(), _.memoizedState, _, _);
        },
        useTransition: function () {
          var _ = _(_)[0],
            _ = _().memoizedState;
          return [typeof _ == `boolean` ? _ : _(_), _];
        },
        useSyncExternalStore: _,
        useId: _,
        useHostTransitionStatus: _,
        useFormState: _,
        useActionState: _,
        useOptimistic: function (_, _) {
          return _(_(), _, _, _);
        },
        useMemoCache: _,
        useCacheRefresh: _,
      },
      _ = {
        readContext: _,
        use: _,
        useCallback: _,
        useContext: _,
        useEffect: _,
        useImperativeHandle: _,
        useInsertionEffect: _,
        useLayoutEffect: _,
        useMemo: _,
        useReducer: _,
        useRef: _,
        useState: function () {
          return _(_);
        },
        useDebugValue: _,
        useDeferredValue: function (_, _) {
          var _ = _();
          return _ === null ? _(_, _, _) : _(_, _.memoizedState, _, _);
        },
        useTransition: function () {
          var _ = _(_)[0],
            _ = _().memoizedState;
          return [typeof _ == `boolean` ? _ : _(_), _];
        },
        useSyncExternalStore: _,
        useId: _,
        useHostTransitionStatus: _,
        useFormState: _,
        useActionState: _,
        useOptimistic: function (_, _) {
          var _ = _();
          return _ === null
            ? ((_.baseState = _), [_, _.queue.dispatch])
            : _(_, _, _, _);
        },
        useMemoCache: _,
        useCacheRefresh: _,
      },
      _ = null,
      _ = 0;
    function _(_) {
      var _ = _;
      return ((_ += 1), _ === null && (_ = []), _(_, _, _));
    }
    function _(_, _) {
      ((_ = _.props.ref), (_.ref = _ === void 0 ? null : _));
    }
    function _(_, _) {
      throw _.$$typeof === _
        ? Error(_(525))
        : ((_ = Object.prototype.toString.call(_)),
          Error(
            _(
              31,
              _ === `[object Object]`
                ? `object with keys {` + Object.keys(_).join(`, `) + `}`
                : _,
            ),
          ));
    }
    function _(_) {
      var _ = _._init;
      return _(_._payload);
    }
    function _(_) {
      function _(_, _) {
        if (_) {
          var _ = _.deletions;
          _ === null ? ((_.deletions = [_]), (_.flags |= 16)) : _.push(_);
        }
      }
      function _(_, _) {
        if (!_) return null;
        for (; _ !== null;) (_(_, _), (_ = _.sibling));
        return null;
      }
      function _(_) {
        for (var _ = new Map(); _ !== null;)
          (_.key === null ? _.set(_.index, _) : _.set(_.key, _),
            (_ = _.sibling));
        return _;
      }
      function _(_, _) {
        return ((_ = _(_, _)), (_.index = 0), (_.sibling = null), _);
      }
      function _(_, _, _) {
        return (
          (_.index = _),
          _
            ? ((_ = _.alternate),
              _ === null
                ? ((_.flags |= 67108866), _)
                : ((_ = _.index), _ < _ ? ((_.flags |= 67108866), _) : _))
            : ((_.flags |= 1048576), _)
        );
      }
      function _(_) {
        return (_ && _.alternate === null && (_.flags |= 67108866), _);
      }
      function _(_, _, _, _) {
        return _ === null || _.tag !== 6
          ? ((_ = _(_, _.mode, _)), (_.return = _), _)
          : ((_ = _(_, _)), (_.return = _), _);
      }
      function _(_, _, _, _) {
        var _ = _.type;
        return _ === _
          ? _(_, _, _.props.children, _, _.key)
          : _ !== null &&
              (_.elementType === _ ||
                (typeof _ == `object` &&
                  _ &&
                  _.$$typeof === _ &&
                  _(_) === _.type))
            ? ((_ = _(_, _.props)), _(_, _), (_.return = _), _)
            : ((_ = _(_.type, _.key, _.props, null, _.mode, _)),
              _(_, _),
              (_.return = _),
              _);
      }
      function _(_, _, _, _) {
        return _ === null ||
          _.tag !== 4 ||
          _.stateNode.containerInfo !== _.containerInfo ||
          _.stateNode.implementation !== _.implementation
          ? ((_ = _(_, _.mode, _)), (_.return = _), _)
          : ((_ = _(_, _.children || [])), (_.return = _), _);
      }
      function _(_, _, _, _, _) {
        return _ === null || _.tag !== 7
          ? ((_ = _(_, _.mode, _, _)), (_.return = _), _)
          : ((_ = _(_, _)), (_.return = _), _);
      }
      function _(_, _, _) {
        if (
          (typeof _ == `string` && _ !== ``) ||
          typeof _ == `number` ||
          typeof _ == `bigint`
        )
          return ((_ = _(`` + _, _.mode, _)), (_.return = _), _);
        if (typeof _ == `object` && _) {
          switch (_.$$typeof) {
            case _:
              return (
                (_ = _(_.type, _.key, _.props, null, _.mode, _)),
                _(_, _),
                (_.return = _),
                _
              );
            case _:
              return ((_ = _(_, _.mode, _)), (_.return = _), _);
            case _:
              var _ = _._init;
              return ((_ = _(_._payload)), _(_, _, _));
          }
          if (_(_) || _(_))
            return ((_ = _(_, _.mode, _, null)), (_.return = _), _);
          if (typeof _.then == `function`) return _(_, _(_), _);
          if (_.$$typeof === _) return _(_, _(_, _), _);
          _(_, _);
        }
        return null;
      }
      function _(_, _, _, _) {
        var _ = _ === null ? null : _.key;
        if (
          (typeof _ == `string` && _ !== ``) ||
          typeof _ == `number` ||
          typeof _ == `bigint`
        )
          return _ === null ? _(_, _, `` + _, _) : null;
        if (typeof _ == `object` && _) {
          switch (_.$$typeof) {
            case _:
              return _.key === _ ? _(_, _, _, _) : null;
            case _:
              return _.key === _ ? _(_, _, _, _) : null;
            case _:
              return ((_ = _._init), (_ = _(_._payload)), _(_, _, _, _));
          }
          if (_(_) || _(_)) return _ === null ? _(_, _, _, _, null) : null;
          if (typeof _.then == `function`) return _(_, _, _(_), _);
          if (_.$$typeof === _) return _(_, _, _(_, _), _);
          _(_, _);
        }
        return null;
      }
      function _(_, _, _, _, _) {
        if (
          (typeof _ == `string` && _ !== ``) ||
          typeof _ == `number` ||
          typeof _ == `bigint`
        )
          return ((_ = _.get(_) || null), _(_, _, `` + _, _));
        if (typeof _ == `object` && _) {
          switch (_.$$typeof) {
            case _:
              return (
                (_ = _.get(_.key === null ? _ : _.key) || null), _(_, _, _, _)
              );
            case _:
              return (
                (_ = _.get(_.key === null ? _ : _.key) || null), _(_, _, _, _)
              );
            case _:
              var _ = _._init;
              return ((_ = _(_._payload)), _(_, _, _, _, _));
          }
          if (_(_) || _(_))
            return ((_ = _.get(_) || null), _(_, _, _, _, null));
          if (typeof _.then == `function`) return _(_, _, _, _(_), _);
          if (_.$$typeof === _) return _(_, _, _, _(_, _), _);
          _(_, _);
        }
        return null;
      }
      function _(_, _, _, _) {
        for (
          var _ = null, _ = null, _ = _, _ = (_ = 0), _ = null;
          _ !== null && _ < _.length;
          _++
        ) {
          _.index > _ ? ((_ = _), (_ = null)) : (_ = _.sibling);
          var _ = _(_, _, _[_], _);
          if (_ === null) {
            _ === null && (_ = _);
            break;
          }
          (_ && _ && _.alternate === null && _(_, _),
            (_ = _(_, _, _)),
            _ === null ? (_ = _) : (_.sibling = _),
            (_ = _),
            (_ = _));
        }
        if (_ === _.length) return (_(_, _), _ && _(_, _), _);
        if (_ === null) {
          for (; _ < _.length; _++)
            ((_ = _(_, _[_], _)),
              _ !== null &&
                ((_ = _(_, _, _)),
                _ === null ? (_ = _) : (_.sibling = _),
                (_ = _)));
          return (_ && _(_, _), _);
        }
        for (_ = _(_); _ < _.length; _++)
          ((_ = _(_, _, _, _[_], _)),
            _ !== null &&
              (_ &&
                _.alternate !== null &&
                _.delete(_.key === null ? _ : _.key),
              (_ = _(_, _, _)),
              _ === null ? (_ = _) : (_.sibling = _),
              (_ = _)));
        return (
          _ &&
            _.forEach(function (_) {
              return _(_, _);
            }),
          _ && _(_, _),
          _
        );
      }
      function _(_, _, _, _) {
        if (_ == null) throw Error(_(151));
        for (
          var _ = null, _ = null, _ = _, _ = (_ = 0), _ = null, _ = _.next();
          _ !== null && !_.done;
          _++, _ = _.next()
        ) {
          _.index > _ ? ((_ = _), (_ = null)) : (_ = _.sibling);
          var _ = _(_, _, _.value, _);
          if (_ === null) {
            _ === null && (_ = _);
            break;
          }
          (_ && _ && _.alternate === null && _(_, _),
            (_ = _(_, _, _)),
            _ === null ? (_ = _) : (_.sibling = _),
            (_ = _),
            (_ = _));
        }
        if (_.done) return (_(_, _), _ && _(_, _), _);
        if (_ === null) {
          for (; !_.done; _++, _ = _.next())
            ((_ = _(_, _.value, _)),
              _ !== null &&
                ((_ = _(_, _, _)),
                _ === null ? (_ = _) : (_.sibling = _),
                (_ = _)));
          return (_ && _(_, _), _);
        }
        for (_ = _(_); !_.done; _++, _ = _.next())
          ((_ = _(_, _, _, _.value, _)),
            _ !== null &&
              (_ &&
                _.alternate !== null &&
                _.delete(_.key === null ? _ : _.key),
              (_ = _(_, _, _)),
              _ === null ? (_ = _) : (_.sibling = _),
              (_ = _)));
        return (
          _ &&
            _.forEach(function (_) {
              return _(_, _);
            }),
          _ && _(_, _),
          _
        );
      }
      function _(_, _, _, _) {
        if (
          (typeof _ == `object` &&
            _ &&
            _.type === _ &&
            _.key === null &&
            (_ = _.props.children),
          typeof _ == `object` && _)
        ) {
          switch (_.$$typeof) {
            case _:
              _: {
                for (var _ = _.key; _ !== null;) {
                  if (_.key === _) {
                    if (((_ = _.type), _ === _)) {
                      if (_.tag === 7) {
                        (_(_, _.sibling),
                          (_ = _(_, _.props.children)),
                          (_.return = _),
                          (_ = _));
                        break _;
                      }
                    } else if (
                      _.elementType === _ ||
                      (typeof _ == `object` &&
                        _ &&
                        _.$$typeof === _ &&
                        _(_) === _.type)
                    ) {
                      (_(_, _.sibling),
                        (_ = _(_, _.props)),
                        _(_, _),
                        (_.return = _),
                        (_ = _));
                      break _;
                    }
                    _(_, _);
                    break;
                  }
                  (_(_, _), (_ = _.sibling));
                }
                _.type === _
                  ? ((_ = _(_.props.children, _.mode, _, _.key)),
                    (_.return = _),
                    (_ = _))
                  : ((_ = _(_.type, _.key, _.props, null, _.mode, _)),
                    _(_, _),
                    (_.return = _),
                    (_ = _));
              }
              return _(_);
            case _:
              _: {
                for (_ = _.key; _ !== null;) {
                  if (_.key === _) {
                    if (
                      _.tag === 4 &&
                      _.stateNode.containerInfo === _.containerInfo &&
                      _.stateNode.implementation === _.implementation
                    ) {
                      (_(_, _.sibling),
                        (_ = _(_, _.children || [])),
                        (_.return = _),
                        (_ = _));
                      break _;
                    }
                    _(_, _);
                    break;
                  }
                  (_(_, _), (_ = _.sibling));
                }
                ((_ = _(_, _.mode, _)), (_.return = _), (_ = _));
              }
              return _(_);
            case _:
              return ((_ = _._init), (_ = _(_._payload)), _(_, _, _, _));
          }
          if (_(_)) return _(_, _, _, _);
          if (_(_)) {
            if (((_ = _(_)), typeof _ != `function`)) throw Error(_(150));
            return ((_ = _.call(_)), _(_, _, _, _));
          }
          if (typeof _.then == `function`) return _(_, _, _(_), _);
          if (_.$$typeof === _) return _(_, _, _(_, _), _);
          _(_, _);
        }
        return (typeof _ == `string` && _ !== ``) ||
          typeof _ == `number` ||
          typeof _ == `bigint`
          ? ((_ = `` + _),
            _ !== null && _.tag === 6
              ? (_(_, _.sibling), (_ = _(_, _)), (_.return = _), (_ = _))
              : (_(_, _), (_ = _(_, _.mode, _)), (_.return = _), (_ = _)),
            _(_))
          : _(_, _);
      }
      return function (_, _, _, _) {
        try {
          _ = 0;
          var _ = _(_, _, _, _);
          return ((_ = null), _);
        } catch (_) {
          if (_ === _ || _ === _) throw _;
          var _ = _(29, _, null, _.mode);
          return ((_.lanes = _), (_.return = _), _);
        }
      };
    }
    var _ = _(!0),
      _ = _(!1),
      _ = _(null),
      _ = null;
    function _(_) {
      var _ = _.alternate;
      (_(_, _.current & 1),
        _(_, _),
        _ === null &&
          (_ === null || _.current !== null || _.memoizedState !== null) &&
          (_ = _));
    }
    function _(_) {
      if (_.tag === 22) {
        if ((_(_, _.current), _(_, _), _ === null)) {
          var _ = _.alternate;
          _ !== null && _.memoizedState !== null && (_ = _);
        }
      } else _(_);
    }
    function _() {
      (_(_, _.current), _(_, _.current));
    }
    function _(_) {
      (_(_), _ === _ && (_ = null), _(_));
    }
    var _ = _(0);
    function _(_) {
      for (var _ = _; _ !== null;) {
        if (_.tag === 13) {
          var _ = _.memoizedState;
          if (
            _ !== null &&
            ((_ = _.dehydrated), _ === null || _.data === `$?` || _(_))
          )
            return _;
        } else if (_.tag === 19 && _.memoizedProps.revealOrder !== void 0) {
          if (_.flags & 128) return _;
        } else if (_.child !== null) {
          ((_.child.return = _), (_ = _.child));
          continue;
        }
        if (_ === _) break;
        for (; _.sibling === null;) {
          if (_.return === null || _.return === _) return null;
          _ = _.return;
        }
        ((_.sibling.return = _.return), (_ = _.sibling));
      }
      return null;
    }
    function _(_, _, _, _) {
      ((_ = _.memoizedState),
        (_ = _(_, _)),
        (_ = _ == null ? _ : _({}, _, _)),
        (_.memoizedState = _),
        _.lanes === 0 && (_.updateQueue.baseState = _));
    }
    var _ = {
      enqueueSetState: function (_, _, _) {
        _ = _._reactInternals;
        var _ = _(),
          _ = _(_);
        ((_.payload = _),
          _ != null && (_.callback = _),
          (_ = _(_, _, _)),
          _ !== null && (_(_, _, _), _(_, _, _)));
      },
      enqueueReplaceState: function (_, _, _) {
        _ = _._reactInternals;
        var _ = _(),
          _ = _(_);
        ((_.tag = 1),
          (_.payload = _),
          _ != null && (_.callback = _),
          (_ = _(_, _, _)),
          _ !== null && (_(_, _, _), _(_, _, _)));
      },
      enqueueForceUpdate: function (_, _) {
        _ = _._reactInternals;
        var _ = _(),
          _ = _(_);
        ((_.tag = 2),
          _ != null && (_.callback = _),
          (_ = _(_, _, _)),
          _ !== null && (_(_, _, _), _(_, _, _)));
      },
    };
    function _(_, _, _, _, _, _, _) {
      return (
        (_ = _.stateNode),
        typeof _.shouldComponentUpdate == `function`
          ? _.shouldComponentUpdate(_, _, _)
          : _.prototype && _.prototype.isPureReactComponent
            ? !_(_, _) || !_(_, _)
            : !0
      );
    }
    function _(_, _, _, _) {
      ((_ = _.state),
        typeof _.componentWillReceiveProps == `function` &&
          _.componentWillReceiveProps(_, _),
        typeof _.UNSAFE_componentWillReceiveProps == `function` &&
          _.UNSAFE_componentWillReceiveProps(_, _),
        _.state !== _ && _.enqueueReplaceState(_, _.state, null));
    }
    function _(_, _) {
      var _ = _;
      if (`ref` in _) for (var _ in ((_ = {}), _)) _ !== `ref` && (_[_] = _[_]);
      if ((_ = _.defaultProps))
        for (var _ in (_ === _ && (_ = _({}, _)), _))
          _[_] === void 0 && (_[_] = _[_]);
      return _;
    }
    var _ =
      typeof reportError == `function`
        ? reportError
        : function (_) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var _ = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof _ == `object` && _ && typeof _.message == `string`
                    ? String(_.message)
                    : String(_),
                error: _,
              });
              if (!window.dispatchEvent(_)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, _);
              return;
            }
            console.error(_);
          };
    function _(_) {
      _(_);
    }
    function _(_) {
      console.error(_);
    }
    function _(_) {
      _(_);
    }
    function _(_, _) {
      try {
        var _ = _.onUncaughtError;
        _(_.value, {
          componentStack: _.stack,
        });
      } catch (_) {
        setTimeout(function () {
          throw _;
        });
      }
    }
    function _(_, _, _) {
      try {
        var _ = _.onCaughtError;
        _(_.value, {
          componentStack: _.stack,
          errorBoundary: _.tag === 1 ? _.stateNode : null,
        });
      } catch (_) {
        setTimeout(function () {
          throw _;
        });
      }
    }
    function _(_, _, _) {
      return (
        (_ = _(_)),
        (_.tag = 3),
        (_.payload = {
          element: null,
        }),
        (_.callback = function () {
          _(_, _);
        }),
        _
      );
    }
    function _(_) {
      return ((_ = _(_)), (_.tag = 3), _);
    }
    function _(_, _, _, _) {
      var _ = _.type.getDerivedStateFromError;
      if (typeof _ == `function`) {
        var _ = _.value;
        ((_.payload = function () {
          return _(_);
        }),
          (_.callback = function () {
            _(_, _, _);
          }));
      }
      var _ = _.stateNode;
      _ !== null &&
        typeof _.componentDidCatch == `function` &&
        (_.callback = function () {
          (_(_, _, _),
            typeof _ != `function` &&
              (_ === null ? (_ = new Set([this])) : _.add(this)));
          var _ = _.stack;
          this.componentDidCatch(_.value, {
            componentStack: _ === null ? `` : _,
          });
        });
    }
    function _(_, _, _, _, _) {
      if (
        ((_.flags |= 32768),
        typeof _ == `object` && _ && typeof _.then == `function`)
      ) {
        if (
          ((_ = _.alternate),
          _ !== null && _(_, _, _, !0),
          (_ = _.current),
          _ !== null)
        ) {
          switch (_.tag) {
            case 13:
              return (
                _ === null ? _() : _.alternate === null && _ === 0 && (_ = 3),
                (_.flags &= -257),
                (_.flags |= 65536),
                (_.lanes = _),
                _ === _
                  ? (_.flags |= 16384)
                  : ((_ = _.updateQueue),
                    _ === null ? (_.updateQueue = new Set([_])) : _.add(_),
                    _(_, _, _)),
                !1
              );
            case 22:
              return (
                (_.flags |= 65536),
                _ === _
                  ? (_.flags |= 16384)
                  : ((_ = _.updateQueue),
                    _ === null
                      ? ((_ = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([_]),
                        }),
                        (_.updateQueue = _))
                      : ((_ = _.retryQueue),
                        _ === null ? (_.retryQueue = new Set([_])) : _.add(_)),
                    _(_, _, _)),
                !1
              );
          }
          throw Error(_(435, _.tag));
        }
        return (_(_, _, _), _(), !1);
      }
      if (_)
        return (
          (_ = _.current),
          _ === null
            ? (_ !== _ &&
                ((_ = Error(_(423), {
                  cause: _,
                })),
                _(_(_, _))),
              (_ = _.current.alternate),
              (_.flags |= 65536),
              (_ &= -_),
              (_.lanes |= _),
              (_ = _(_, _)),
              (_ = _(_.stateNode, _, _)),
              _(_, _),
              _ !== 4 && (_ = 2))
            : (!(_.flags & 65536) && (_.flags |= 256),
              (_.flags |= 65536),
              (_.lanes = _),
              _ !== _ &&
                ((_ = Error(_(422), {
                  cause: _,
                })),
                _(_(_, _)))),
          !1
        );
      var _ = Error(_(520), {
        cause: _,
      });
      if (
        ((_ = _(_, _)),
        _ === null ? (_ = [_]) : _.push(_),
        _ !== 4 && (_ = 2),
        _ === null)
      )
        return !0;
      ((_ = _(_, _)), (_ = _));
      do {
        switch (_.tag) {
          case 3:
            return (
              (_.flags |= 65536),
              (_ = _ & -_),
              (_.lanes |= _),
              (_ = _(_.stateNode, _, _)),
              _(_, _),
              !1
            );
          case 1:
            if (
              ((_ = _.type),
              (_ = _.stateNode),
              !(_.flags & 128) &&
                (typeof _.getDerivedStateFromError == `function` ||
                  (_ !== null &&
                    typeof _.componentDidCatch == `function` &&
                    (_ === null || !_.has(_)))))
            )
              return (
                (_.flags |= 65536),
                (_ &= -_),
                (_.lanes |= _),
                (_ = _(_)),
                _(_, _, _, _),
                _(_, _),
                !1
              );
        }
        _ = _.return;
      } while (_ !== null);
      return !1;
    }
    var _ = Error(_(461)),
      _ = !1;
    function _(_, _, _, _) {
      _.child = _ === null ? _(_, null, _, _) : _(_, _.child, _, _);
    }
    function _(_, _, _, _, _) {
      _ = _.render;
      var _ = _.ref;
      if (`ref` in _) {
        var _ = {};
        for (var _ in _) _ !== `ref` && (_[_] = _[_]);
      } else _ = _;
      return (
        _(_),
        (_ = _(_, _, _, _, _, _)),
        (_ = _()),
        _ !== null && !_
          ? (_(_, _, _), _(_, _, _))
          : (_ && _ && _(_), (_.flags |= 1), _(_, _, _, _), _.child)
      );
    }
    function _(_, _, _, _, _) {
      if (_ === null) {
        var _ = _.type;
        return typeof _ == `function` &&
          !_(_) &&
          _.defaultProps === void 0 &&
          _.compare === null
          ? ((_.tag = 15), (_.type = _), _(_, _, _, _, _))
          : ((_ = _(_.type, null, _, _, _.mode, _)),
            (_.ref = _.ref),
            (_.return = _),
            (_.child = _));
      }
      if (((_ = _.child), !_(_, _))) {
        var _ = _.memoizedProps;
        if (
          ((_ = _.compare),
          (_ = _ === null ? _ : _),
          _(_, _) && _.ref === _.ref)
        )
          return _(_, _, _);
      }
      return (
        (_.flags |= 1),
        (_ = _(_, _)),
        (_.ref = _.ref),
        (_.return = _),
        (_.child = _)
      );
    }
    function _(_, _, _, _, _) {
      if (_ !== null) {
        var _ = _.memoizedProps;
        if (_(_, _) && _.ref === _.ref) {
          if (((_ = !1), (_.pendingProps = _ = _), _(_, _)))
            _.flags & 131072 && (_ = !0);
          else return ((_.lanes = _.lanes), _(_, _, _));
        }
      }
      return _(_, _, _, _, _);
    }
    function _(_, _, _) {
      var _ = _.pendingProps,
        _ = _.children,
        _ = _ === null ? null : _.memoizedState;
      if (_.mode === `hidden`) {
        if (_.flags & 128) {
          if (((_ = _ === null ? _ : _.baseLanes | _), _ !== null)) {
            for (_ = _.child = _.child, _ = 0; _ !== null;)
              ((_ = _ | _.lanes | _.childLanes), (_ = _.sibling));
            _.childLanes = _ & ~_;
          } else ((_.childLanes = 0), (_.child = null));
          return _(_, _, _, _);
        }
        if (_ & 536870912)
          ((_.memoizedState = {
            baseLanes: 0,
            cachePool: null,
          }),
            _ !== null && _(_, _ === null ? null : _.cachePool),
            _ === null ? _() : _(_, _),
            _(_));
        else
          return (
            (_.lanes = _.childLanes = 536870912),
            _(_, _, _ === null ? _ : _.baseLanes | _, _)
          );
      } else
        _ === null
          ? (_ !== null && _(_, null), _(), _(_))
          : (_(_, _.cachePool), _(_, _), _(_), (_.memoizedState = null));
      return (_(_, _, _, _), _.child);
    }
    function _(_, _, _, _) {
      var _ = _();
      return (
        (_ =
          _ === null
            ? null
            : {
                parent: _._currentValue,
                pool: _,
              }),
        (_.memoizedState = {
          baseLanes: _,
          cachePool: _,
        }),
        _ !== null && _(_, null),
        _(),
        _(_),
        _ !== null && _(_, _, _, !0),
        null
      );
    }
    function _(_, _) {
      var _ = _.ref;
      if (_ === null) _ !== null && _.ref !== null && (_.flags |= 4194816);
      else {
        if (typeof _ != `function` && typeof _ != `object`) throw Error(_(284));
        (_ === null || _.ref !== _) && (_.flags |= 4194816);
      }
    }
    function _(_, _, _, _, _) {
      return (
        _(_),
        (_ = _(_, _, _, _, void 0, _)),
        (_ = _()),
        _ !== null && !_
          ? (_(_, _, _), _(_, _, _))
          : (_ && _ && _(_), (_.flags |= 1), _(_, _, _, _), _.child)
      );
    }
    function _(_, _, _, _, _, _) {
      return (
        _(_),
        (_.updateQueue = null),
        (_ = _(_, _, _, _)),
        _(_),
        (_ = _()),
        _ !== null && !_
          ? (_(_, _, _), _(_, _, _))
          : (_ && _ && _(_), (_.flags |= 1), _(_, _, _, _), _.child)
      );
    }
    function _(_, _, _, _, _) {
      if ((_(_), _.stateNode === null)) {
        var _ = _,
          _ = _.contextType;
        (typeof _ == `object` && _ && (_ = _(_)),
          (_ = new _(_, _)),
          (_.memoizedState =
            _.state !== null && _.state !== void 0 ? _.state : null),
          (_.updater = _),
          (_.stateNode = _),
          (_._reactInternals = _),
          (_ = _.stateNode),
          (_.props = _),
          (_.state = _.memoizedState),
          (_.refs = {}),
          _(_),
          (_ = _.contextType),
          (_.context = typeof _ == `object` && _ ? _(_) : _),
          (_.state = _.memoizedState),
          (_ = _.getDerivedStateFromProps),
          typeof _ == `function` &&
            (_(_, _, _, _), (_.state = _.memoizedState)),
          typeof _.getDerivedStateFromProps == `function` ||
            typeof _.getSnapshotBeforeUpdate == `function` ||
            (typeof _.UNSAFE_componentWillMount != `function` &&
              typeof _.componentWillMount != `function`) ||
            ((_ = _.state),
            typeof _.componentWillMount == `function` && _.componentWillMount(),
            typeof _.UNSAFE_componentWillMount == `function` &&
              _.UNSAFE_componentWillMount(),
            _ !== _.state && _.enqueueReplaceState(_, _.state, null),
            _(_, _, _, _),
            _(),
            (_.state = _.memoizedState)),
          typeof _.componentDidMount == `function` && (_.flags |= 4194308),
          (_ = !0));
      } else if (_ === null) {
        _ = _.stateNode;
        var _ = _.memoizedProps,
          _ = _(_, _);
        _.props = _;
        var _ = _.context,
          _ = _.contextType;
        ((_ = _), typeof _ == `object` && _ && (_ = _(_)));
        var _ = _.getDerivedStateFromProps;
        ((_ =
          typeof _ == `function` ||
          typeof _.getSnapshotBeforeUpdate == `function`),
          (_ = _.pendingProps !== _),
          _ ||
            (typeof _.UNSAFE_componentWillReceiveProps != `function` &&
              typeof _.componentWillReceiveProps != `function`) ||
            ((_ || _ !== _) && _(_, _, _, _)),
          (_ = !1));
        var _ = _.memoizedState;
        ((_.state = _),
          _(_, _, _, _),
          _(),
          (_ = _.memoizedState),
          _ || _ !== _ || _
            ? (typeof _ == `function` && (_(_, _, _, _), (_ = _.memoizedState)),
              (_ = _ || _(_, _, _, _, _, _, _))
                ? (_ ||
                    (typeof _.UNSAFE_componentWillMount != `function` &&
                      typeof _.componentWillMount != `function`) ||
                    (typeof _.componentWillMount == `function` &&
                      _.componentWillMount(),
                    typeof _.UNSAFE_componentWillMount == `function` &&
                      _.UNSAFE_componentWillMount()),
                  typeof _.componentDidMount == `function` &&
                    (_.flags |= 4194308))
                : (typeof _.componentDidMount == `function` &&
                    (_.flags |= 4194308),
                  (_.memoizedProps = _),
                  (_.memoizedState = _)),
              (_.props = _),
              (_.state = _),
              (_.context = _),
              (_ = _))
            : (typeof _.componentDidMount == `function` && (_.flags |= 4194308),
              (_ = !1)));
      } else {
        ((_ = _.stateNode),
          _(_, _),
          (_ = _.memoizedProps),
          (_ = _(_, _)),
          (_.props = _),
          (_ = _.pendingProps),
          (_ = _.context),
          (_ = _.contextType),
          (_ = _),
          typeof _ == `object` && _ && (_ = _(_)),
          (_ = _.getDerivedStateFromProps),
          (_ =
            typeof _ == `function` ||
            typeof _.getSnapshotBeforeUpdate == `function`) ||
            (typeof _.UNSAFE_componentWillReceiveProps != `function` &&
              typeof _.componentWillReceiveProps != `function`) ||
            ((_ !== _ || _ !== _) && _(_, _, _, _)),
          (_ = !1),
          (_ = _.memoizedState),
          (_.state = _),
          _(_, _, _, _),
          _());
        var _ = _.memoizedState;
        _ !== _ ||
        _ !== _ ||
        _ ||
        (_ !== null && _.dependencies !== null && _(_.dependencies))
          ? (typeof _ == `function` && (_(_, _, _, _), (_ = _.memoizedState)),
            (_ =
              _ ||
              _(_, _, _, _, _, _, _) ||
              (_ !== null && _.dependencies !== null && _(_.dependencies)))
              ? (_ ||
                  (typeof _.UNSAFE_componentWillUpdate != `function` &&
                    typeof _.componentWillUpdate != `function`) ||
                  (typeof _.componentWillUpdate == `function` &&
                    _.componentWillUpdate(_, _, _),
                  typeof _.UNSAFE_componentWillUpdate == `function` &&
                    _.UNSAFE_componentWillUpdate(_, _, _)),
                typeof _.componentDidUpdate == `function` && (_.flags |= 4),
                typeof _.getSnapshotBeforeUpdate == `function` &&
                  (_.flags |= 1024))
              : (typeof _.componentDidUpdate != `function` ||
                  (_ === _.memoizedProps && _ === _.memoizedState) ||
                  (_.flags |= 4),
                typeof _.getSnapshotBeforeUpdate != `function` ||
                  (_ === _.memoizedProps && _ === _.memoizedState) ||
                  (_.flags |= 1024),
                (_.memoizedProps = _),
                (_.memoizedState = _)),
            (_.props = _),
            (_.state = _),
            (_.context = _),
            (_ = _))
          : (typeof _.componentDidUpdate != `function` ||
              (_ === _.memoizedProps && _ === _.memoizedState) ||
              (_.flags |= 4),
            typeof _.getSnapshotBeforeUpdate != `function` ||
              (_ === _.memoizedProps && _ === _.memoizedState) ||
              (_.flags |= 1024),
            (_ = !1));
      }
      return (
        (_ = _),
        _(_, _),
        (_ = !!(_.flags & 128)),
        _ || _
          ? ((_ = _.stateNode),
            (_ =
              _ && typeof _.getDerivedStateFromError != `function`
                ? null
                : _.render()),
            (_.flags |= 1),
            _ !== null && _
              ? ((_.child = _(_, _.child, null, _)),
                (_.child = _(_, null, _, _)))
              : _(_, _, _, _),
            (_.memoizedState = _.state),
            (_ = _.child))
          : (_ = _(_, _, _)),
        _
      );
    }
    function _(_, _, _, _) {
      return (_(), (_.flags |= 256), _(_, _, _, _), _.child);
    }
    var _ = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function _(_) {
      return {
        baseLanes: _,
        cachePool: _(),
      };
    }
    function _(_, _, _) {
      return ((_ = _ === null ? 0 : _.childLanes & ~_), _ && (_ |= _), _);
    }
    function _(_, _, _) {
      var _ = _.pendingProps,
        _ = !1,
        _ = !!(_.flags & 128),
        _;
      if (
        ((_ = _) ||
          (_ = _ !== null && _.memoizedState === null ? !1 : !!(_.current & 2)),
        _ && ((_ = !0), (_.flags &= -129)),
        (_ = !!(_.flags & 32)),
        (_.flags &= -33),
        _ === null)
      ) {
        if (_) {
          if ((_ ? _(_) : _(_), _)) {
            var _ = _,
              _;
            if ((_ = _)) {
              _: {
                for (_ = _, _ = _; _.nodeType !== 8;)
                  if (!_ || ((_ = _(_.nextSibling)), _ === null)) {
                    _ = null;
                    break _;
                  }
                _ = _;
              }
              _ === null
                ? (_ = !1)
                : ((_.memoizedState = {
                    dehydrated: _,
                    treeContext:
                      _ === null
                        ? null
                        : {
                            _: _,
                            overflow: _,
                          },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (_ = _(18, null, null, 0)),
                  (_.stateNode = _),
                  (_.return = _),
                  (_.child = _),
                  (_ = _),
                  (_ = null),
                  (_ = !0));
            }
            _ || _(_);
          }
          if (
            ((_ = _.memoizedState),
            _ !== null && ((_ = _.dehydrated), _ !== null))
          )
            return (_(_) ? (_.lanes = 32) : (_.lanes = 536870912), null);
          _(_);
        }
        return (
          (_ = _.children),
          (_ = _.fallback),
          _
            ? (_(_),
              (_ = _.mode),
              (_ = _(
                {
                  mode: `hidden`,
                  children: _,
                },
                _,
              )),
              (_ = _(_, _, _, null)),
              (_.return = _),
              (_.return = _),
              (_.sibling = _),
              (_.child = _),
              (_ = _.child),
              (_.memoizedState = _(_)),
              (_.childLanes = _(_, _, _)),
              (_.memoizedState = _),
              _)
            : (_(_), _(_, _))
        );
      }
      if (
        ((_ = _.memoizedState), _ !== null && ((_ = _.dehydrated), _ !== null))
      ) {
        if (_)
          _.flags & 256
            ? (_(_), (_.flags &= -257), (_ = _(_, _, _)))
            : _.memoizedState === null
              ? (_(_),
                (_ = _.fallback),
                (_ = _.mode),
                (_ = _(
                  {
                    mode: `visible`,
                    children: _.children,
                  },
                  _,
                )),
                (_ = _(_, _, _, null)),
                (_.flags |= 2),
                (_.return = _),
                (_.return = _),
                (_.sibling = _),
                (_.child = _),
                _(_, _.child, null, _),
                (_ = _.child),
                (_.memoizedState = _(_)),
                (_.childLanes = _(_, _, _)),
                (_.memoizedState = _),
                (_ = _))
              : (_(_), (_.child = _.child), (_.flags |= 128), (_ = null));
        else if ((_(_), _(_))) {
          if (((_ = _.nextSibling && _.nextSibling.dataset), _)) var _ = _.dgst;
          ((_ = _),
            (_ = Error(_(419))),
            (_.stack = ``),
            (_.digest = _),
            _({
              value: _,
              source: null,
              stack: null,
            }),
            (_ = _(_, _, _)));
        } else if (
          (_ || _(_, _, _, !1), (_ = (_ & _.childLanes) !== 0), _ || _)
        ) {
          if (
            ((_ = _),
            _ !== null &&
              ((_ = _ & -_),
              (_ = _ & 42 ? 1 : _(_)),
              (_ = (_ & (_.suspendedLanes | _)) === 0 ? _ : 0),
              _ !== 0 && _ !== _.retryLane))
          )
            throw ((_.retryLane = _), _(_, _), _(_, _, _), _);
          (_.data === `$?` || _(), (_ = _(_, _, _)));
        } else
          _.data === `$?`
            ? ((_.flags |= 192), (_.child = _.child), (_ = null))
            : ((_ = _.treeContext),
              (_ = _(_.nextSibling)),
              (_ = _),
              (_ = !0),
              (_ = null),
              (_ = !1),
              _ !== null &&
                ((_[_++] = _),
                (_[_++] = _),
                (_[_++] = _),
                (_ = _._),
                (_ = _.overflow),
                (_ = _)),
              (_ = _(_, _.children)),
              (_.flags |= 4096));
        return _;
      }
      return _
        ? (_(_),
          (_ = _.fallback),
          (_ = _.mode),
          (_ = _.child),
          (_ = _.sibling),
          (_ = _(_, {
            mode: `hidden`,
            children: _.children,
          })),
          (_.subtreeFlags = _.subtreeFlags & 65011712),
          _ === null ? ((_ = _(_, _, _, null)), (_.flags |= 2)) : (_ = _(_, _)),
          (_.return = _),
          (_.return = _),
          (_.sibling = _),
          (_.child = _),
          (_ = _),
          (_ = _.child),
          (_ = _.child.memoizedState),
          _ === null
            ? (_ = _(_))
            : ((_ = _.cachePool),
              _ === null
                ? (_ = _())
                : ((_ = _._currentValue),
                  (_ =
                    _.parent === _
                      ? _
                      : {
                          parent: _,
                          pool: _,
                        })),
              (_ = {
                baseLanes: _.baseLanes | _,
                cachePool: _,
              })),
          (_.memoizedState = _),
          (_.childLanes = _(_, _, _)),
          (_.memoizedState = _),
          _)
        : (_(_),
          (_ = _.child),
          (_ = _.sibling),
          (_ = _(_, {
            mode: `visible`,
            children: _.children,
          })),
          (_.return = _),
          (_.sibling = null),
          _ !== null &&
            ((_ = _.deletions),
            _ === null ? ((_.deletions = [_]), (_.flags |= 16)) : _.push(_)),
          (_.child = _),
          (_.memoizedState = null),
          _);
    }
    function _(_, _) {
      return (
        (_ = _(
          {
            mode: `visible`,
            children: _,
          },
          _.mode,
        )),
        (_.return = _),
        (_.child = _)
      );
    }
    function _(_, _) {
      return (
        (_ = _(22, _, null, _)),
        (_.lanes = 0),
        (_.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
        _
      );
    }
    function _(_, _, _) {
      return (
        _(_, _.child, null, _),
        (_ = _(_, _.pendingProps.children)),
        (_.flags |= 2),
        (_.memoizedState = null),
        _
      );
    }
    function _(_, _, _) {
      _.lanes |= _;
      var _ = _.alternate;
      (_ !== null && (_.lanes |= _), _(_.return, _, _));
    }
    function _(_, _, _, _, _) {
      var _ = _.memoizedState;
      _ === null
        ? (_.memoizedState = {
            isBackwards: _,
            rendering: null,
            renderingStartTime: 0,
            last: _,
            tail: _,
            tailMode: _,
          })
        : ((_.isBackwards = _),
          (_.rendering = null),
          (_.renderingStartTime = 0),
          (_.last = _),
          (_.tail = _),
          (_.tailMode = _));
    }
    function _(_, _, _) {
      var _ = _.pendingProps,
        _ = _.revealOrder,
        _ = _.tail;
      if ((_(_, _, _.children, _), (_ = _.current), _ & 2))
        ((_ = (_ & 1) | 2), (_.flags |= 128));
      else {
        if (_ !== null && _.flags & 128)
          _: for (_ = _.child; _ !== null;) {
            if (_.tag === 13) _.memoizedState !== null && _(_, _, _);
            else if (_.tag === 19) _(_, _, _);
            else if (_.child !== null) {
              ((_.child.return = _), (_ = _.child));
              continue;
            }
            if (_ === _) break _;
            for (; _.sibling === null;) {
              if (_.return === null || _.return === _) break _;
              _ = _.return;
            }
            ((_.sibling.return = _.return), (_ = _.sibling));
          }
        _ &= 1;
      }
      switch ((_(_, _), _)) {
        case `forwards`:
          for (_ = _.child, _ = null; _ !== null;)
            ((_ = _.alternate),
              _ !== null && _(_) === null && (_ = _),
              (_ = _.sibling));
          ((_ = _),
            _ === null
              ? ((_ = _.child), (_.child = null))
              : ((_ = _.sibling), (_.sibling = null)),
            _(_, !1, _, _, _));
          break;
        case `backwards`:
          for (_ = null, _ = _.child, _.child = null; _ !== null;) {
            if (((_ = _.alternate), _ !== null && _(_) === null)) {
              _.child = _;
              break;
            }
            ((_ = _.sibling), (_.sibling = _), (_ = _), (_ = _));
          }
          _(_, !0, _, null, _);
          break;
        case `together`:
          _(_, !1, null, null, void 0);
          break;
        default:
          _.memoizedState = null;
      }
      return _.child;
    }
    function _(_, _, _) {
      if (
        (_ !== null && (_.dependencies = _.dependencies),
        (_ |= _.lanes),
        (_ & _.childLanes) === 0)
      ) {
        if (_ !== null) {
          if ((_(_, _, _, !1), (_ & _.childLanes) === 0)) return null;
        } else return null;
      }
      if (_ !== null && _.child !== _.child) throw Error(_(153));
      if (_.child !== null) {
        for (
          _ = _.child, _ = _(_, _.pendingProps), _.child = _, _.return = _;
          _.sibling !== null;
        )
          ((_ = _.sibling),
            (_ = _.sibling = _(_, _.pendingProps)),
            (_.return = _));
        _.sibling = null;
      }
      return _.child;
    }
    function _(_, _) {
      return (
        (_.lanes & _) !== 0 || ((_ = _.dependencies), !!(_ !== null && _(_)))
      );
    }
    function _(_, _, _) {
      switch (_.tag) {
        case 3:
          (_(_, _.stateNode.containerInfo),
            _(_, _, _.memoizedState.cache),
            _());
          break;
        case 27:
        case 5:
          _(_);
          break;
        case 4:
          _(_, _.stateNode.containerInfo);
          break;
        case 10:
          _(_, _.type, _.memoizedProps.value);
          break;
        case 13:
          var _ = _.memoizedState;
          if (_ !== null)
            return _.dehydrated === null
              ? (_ & _.child.childLanes) === 0
                ? (_(_), (_ = _(_, _, _)), _ === null ? null : _.sibling)
                : _(_, _, _)
              : (_(_), (_.flags |= 128), null);
          _(_);
          break;
        case 19:
          var _ = !!(_.flags & 128);
          if (
            ((_ = (_ & _.childLanes) !== 0),
            (_ ||= (_(_, _, _, !1), (_ & _.childLanes) !== 0)),
            _)
          ) {
            if (_) return _(_, _, _);
            _.flags |= 128;
          }
          if (
            ((_ = _.memoizedState),
            _ !== null &&
              ((_.rendering = null), (_.tail = null), (_.lastEffect = null)),
            _(_, _.current),
            _)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((_.lanes = 0), _(_, _, _));
        case 24:
          _(_, _, _.memoizedState.cache);
      }
      return _(_, _, _);
    }
    function _(_, _, _) {
      if (_ !== null) {
        if (_.memoizedProps !== _.pendingProps) _ = !0;
        else {
          if (!_(_, _) && !(_.flags & 128)) return ((_ = !1), _(_, _, _));
          _ = !!(_.flags & 131072);
        }
      } else ((_ = !1), _ && _.flags & 1048576 && _(_, _, _.index));
      switch (((_.lanes = 0), _.tag)) {
        case 16:
          _: {
            _ = _.pendingProps;
            var _ = _.elementType,
              _ = _._init;
            if (((_ = _(_._payload)), (_.type = _), typeof _ == `function`))
              _(_)
                ? ((_ = _(_, _)), (_.tag = 1), (_ = _(null, _, _, _, _)))
                : ((_.tag = 0), (_ = _(null, _, _, _, _)));
            else {
              if (_ != null) {
                if (((_ = _.$$typeof), _ === _)) {
                  ((_.tag = 11), (_ = _(null, _, _, _, _)));
                  break _;
                }
                if (_ === _) {
                  ((_.tag = 14), (_ = _(null, _, _, _, _)));
                  break _;
                }
              }
              throw ((_ = _(_) || _), Error(_(306, _, ``)));
            }
          }
          return _;
        case 0:
          return _(_, _, _.type, _.pendingProps, _);
        case 1:
          return ((_ = _.type), (_ = _(_, _.pendingProps)), _(_, _, _, _, _));
        case 3:
          _: {
            if ((_(_, _.stateNode.containerInfo), _ === null))
              throw Error(_(387));
            _ = _.pendingProps;
            var _ = _.memoizedState;
            ((_ = _.element), _(_, _), _(_, _, null, _));
            var _ = _.memoizedState;
            if (
              ((_ = _.cache),
              _(_, _, _),
              _ !== _.cache && _(_, [_], _, !0),
              _(),
              (_ = _.element),
              _.isDehydrated)
            ) {
              if (
                ((_ = {
                  element: _,
                  isDehydrated: !1,
                  cache: _.cache,
                }),
                (_.updateQueue.baseState = _),
                (_.memoizedState = _),
                _.flags & 256)
              ) {
                _ = _(_, _, _, _);
                break _;
              }
              if (_ !== _) {
                ((_ = _(Error(_(424)), _)), _(_), (_ = _(_, _, _, _)));
                break _;
              }
              switch (((_ = _.stateNode.containerInfo), _.nodeType)) {
                case 9:
                  _ = _.body;
                  break;
                default:
                  _ = _.nodeName === `HTML` ? _.ownerDocument.body : _;
              }
              for (
                _ = _(_.firstChild),
                  _ = _,
                  _ = !0,
                  _ = null,
                  _ = !0,
                  _ = _(_, null, _, _),
                  _.child = _;
                _;
              )
                ((_.flags = (_.flags & -3) | 4096), (_ = _.sibling));
            } else {
              if ((_(), _ === _)) {
                _ = _(_, _, _);
                break _;
              }
              _(_, _, _, _);
            }
            _ = _.child;
          }
          return _;
        case 26:
          return (
            _(_, _),
            _ === null
              ? (_ = _(_.type, null, _.pendingProps, null))
                ? (_.memoizedState = _)
                : _ ||
                  ((_ = _.type),
                  (_ = _.pendingProps),
                  (_ = _(_.current).createElement(_)),
                  (_[_] = _),
                  (_[_] = _),
                  _(_, _, _),
                  _(_),
                  (_.stateNode = _))
              : (_.memoizedState = _(
                  _.type,
                  _.memoizedProps,
                  _.pendingProps,
                  _.memoizedState,
                )),
            null
          );
        case 27:
          return (
            _(_),
            _ === null &&
              _ &&
              ((_ = _.stateNode = _(_.type, _.pendingProps, _.current)),
              (_ = _),
              (_ = !0),
              (_ = _),
              _(_.type) ? ((_ = _), (_ = _(_.firstChild))) : (_ = _)),
            _(_, _, _.pendingProps.children, _),
            _(_, _),
            _ === null && (_.flags |= 4194304),
            _.child
          );
        case 5:
          return (
            _ === null &&
              _ &&
              ((_ = _ = _) &&
                ((_ = _(_, _.type, _.pendingProps, _)),
                _ === null
                  ? (_ = !1)
                  : ((_.stateNode = _),
                    (_ = _),
                    (_ = _(_.firstChild)),
                    (_ = !1),
                    (_ = !0))),
              _ || _(_)),
            _(_),
            (_ = _.type),
            (_ = _.pendingProps),
            (_ = _ === null ? null : _.memoizedProps),
            (_ = _.children),
            _(_, _) ? (_ = null) : _ !== null && _(_, _) && (_.flags |= 32),
            _.memoizedState !== null &&
              ((_ = _(_, _, _, null, null, _)), (_._currentValue = _)),
            _(_, _),
            _(_, _, _, _),
            _.child
          );
        case 6:
          return (
            _ === null &&
              _ &&
              ((_ = _ = _) &&
                ((_ = _(_, _.pendingProps, _)),
                _ === null
                  ? (_ = !1)
                  : ((_.stateNode = _), (_ = _), (_ = null), (_ = !0))),
              _ || _(_)),
            null
          );
        case 13:
          return _(_, _, _);
        case 4:
          return (
            _(_, _.stateNode.containerInfo),
            (_ = _.pendingProps),
            _ === null ? (_.child = _(_, null, _, _)) : _(_, _, _, _),
            _.child
          );
        case 11:
          return _(_, _, _.type, _.pendingProps, _);
        case 7:
          return (_(_, _, _.pendingProps, _), _.child);
        case 8:
          return (_(_, _, _.pendingProps.children, _), _.child);
        case 12:
          return (_(_, _, _.pendingProps.children, _), _.child);
        case 10:
          return (
            (_ = _.pendingProps),
            _(_, _.type, _.value),
            _(_, _, _.children, _),
            _.child
          );
        case 9:
          return (
            (_ = _.type._context),
            (_ = _.pendingProps.children),
            _(_),
            (_ = _(_)),
            (_ = _(_)),
            (_.flags |= 1),
            _(_, _, _, _),
            _.child
          );
        case 14:
          return _(_, _, _.type, _.pendingProps, _);
        case 15:
          return _(_, _, _.type, _.pendingProps, _);
        case 19:
          return _(_, _, _);
        case 31:
          return (
            (_ = _.pendingProps),
            (_ = _.mode),
            (_ = {
              mode: _.mode,
              children: _.children,
            }),
            _ === null
              ? ((_ = _(_, _)),
                (_.ref = _.ref),
                (_.child = _),
                (_.return = _),
                (_ = _))
              : ((_ = _(_.child, _)),
                (_.ref = _.ref),
                (_.child = _),
                (_.return = _),
                (_ = _)),
            _
          );
        case 22:
          return _(_, _, _);
        case 24:
          return (
            _(_),
            (_ = _(_)),
            _ === null
              ? ((_ = _()),
                _ === null &&
                  ((_ = _),
                  (_ = _()),
                  (_.pooledCache = _),
                  _.refCount++,
                  _ !== null && (_.pooledCacheLanes |= _),
                  (_ = _)),
                (_.memoizedState = {
                  parent: _,
                  cache: _,
                }),
                _(_),
                _(_, _, _))
              : ((_.lanes & _) !== 0 && (_(_, _), _(_, null, null, _), _()),
                (_ = _.memoizedState),
                (_ = _.memoizedState),
                _.parent === _
                  ? ((_ = _.cache),
                    _(_, _, _),
                    _ !== _.cache && _(_, [_], _, !0))
                  : ((_ = {
                      parent: _,
                      cache: _,
                    }),
                    (_.memoizedState = _),
                    _.lanes === 0 &&
                      (_.memoizedState = _.updateQueue.baseState = _),
                    _(_, _, _))),
            _(_, _, _.pendingProps.children, _),
            _.child
          );
        case 29:
          throw _.pendingProps;
      }
      throw Error(_(156, _.tag));
    }
    function _(_) {
      _.flags |= 4;
    }
    function _(_, _) {
      if (_.type !== `stylesheet` || _.state.loading & 4) _.flags &= -16777217;
      else if (((_.flags |= 16777216), !_(_))) {
        if (
          ((_ = _.current),
          _ !== null &&
            ((_ & 4194048) === _
              ? _ !== null
              : ((_ & 62914560) !== _ && !(_ & 536870912)) || _ !== _))
        )
          throw ((_ = _), _);
        _.flags |= 8192;
      }
    }
    function _(_, _) {
      (_ !== null && (_.flags |= 4),
        _.flags & 16384 &&
          ((_ = _.tag === 22 ? 536870912 : _()), (_.lanes |= _), (_ |= _)));
    }
    function _(_, _) {
      if (!_)
        switch (_.tailMode) {
          case `hidden`:
            _ = _.tail;
            for (var _ = null; _ !== null;)
              (_.alternate !== null && (_ = _), (_ = _.sibling));
            _ === null ? (_.tail = null) : (_.sibling = null);
            break;
          case `collapsed`:
            _ = _.tail;
            for (var _ = null; _ !== null;)
              (_.alternate !== null && (_ = _), (_ = _.sibling));
            _ === null
              ? _ || _.tail === null
                ? (_.tail = null)
                : (_.tail.sibling = null)
              : (_.sibling = null);
        }
    }
    function _(_) {
      var _ = _.alternate !== null && _.alternate.child === _.child,
        _ = 0,
        _ = 0;
      if (_)
        for (var _ = _.child; _ !== null;)
          ((_ |= _.lanes | _.childLanes),
            (_ |= _.subtreeFlags & 65011712),
            (_ |= _.flags & 65011712),
            (_.return = _),
            (_ = _.sibling));
      else
        for (_ = _.child; _ !== null;)
          ((_ |= _.lanes | _.childLanes),
            (_ |= _.subtreeFlags),
            (_ |= _.flags),
            (_.return = _),
            (_ = _.sibling));
      return ((_.subtreeFlags |= _), (_.childLanes = _), _);
    }
    function _(_, _, _) {
      var _ = _.pendingProps;
      switch ((_(_), _.tag)) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (_(_), null);
        case 1:
          return (_(_), null);
        case 3:
          return (
            (_ = _.stateNode),
            (_ = null),
            _ !== null && (_ = _.memoizedState.cache),
            _.memoizedState.cache !== _ && (_.flags |= 2048),
            _(_),
            _(),
            _.pendingContext &&
              ((_.context = _.pendingContext), (_.pendingContext = null)),
            (_ === null || _.child === null) &&
              (_(_)
                ? _(_)
                : _ === null ||
                  (_.memoizedState.isDehydrated && !(_.flags & 256)) ||
                  ((_.flags |= 1024), _())),
            _(_),
            null
          );
        case 26:
          return (
            (_ = _.memoizedState),
            _ === null
              ? (_(_),
                _ === null ? (_(_), (_.flags &= -16777217)) : (_(_), _(_, _)))
              : _
                ? _ === _.memoizedState
                  ? (_(_), (_.flags &= -16777217))
                  : (_(_), _(_), _(_, _))
                : (_.memoizedProps !== _ && _(_), _(_), (_.flags &= -16777217)),
            null
          );
        case 27:
          (_(_), (_ = _.current));
          var _ = _.type;
          if (_ !== null && _.stateNode != null) _.memoizedProps !== _ && _(_);
          else {
            if (!_) {
              if (_.stateNode === null) throw Error(_(166));
              return (_(_), null);
            }
            ((_ = _.current),
              _(_) ? _(_, _) : ((_ = _(_, _, _)), (_.stateNode = _), _(_)));
          }
          return (_(_), null);
        case 5:
          if ((_(_), (_ = _.type), _ !== null && _.stateNode != null))
            _.memoizedProps !== _ && _(_);
          else {
            if (!_) {
              if (_.stateNode === null) throw Error(_(166));
              return (_(_), null);
            }
            if (((_ = _.current), _(_))) _(_, _);
            else {
              switch (((_ = _(_.current)), _)) {
                case 1:
                  _ = _.createElementNS(`http://www.w3.org/2000/svg`, _);
                  break;
                case 2:
                  _ = _.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    _,
                  );
                  break;
                default:
                  switch (_) {
                    case `svg`:
                      _ = _.createElementNS(`http://www.w3.org/2000/svg`, _);
                      break;
                    case `math`:
                      _ = _.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        _,
                      );
                      break;
                    case `script`:
                      ((_ = _.createElement(`div`)),
                        (_.innerHTML = `<script><\/script>`),
                        (_ = _.removeChild(_.firstChild)));
                      break;
                    case `select`:
                      ((_ =
                        typeof _._ == `string`
                          ? _.createElement(`select`, {
                              _: _._,
                            })
                          : _.createElement(`select`)),
                        _.multiple
                          ? (_.multiple = !0)
                          : _.size && (_.size = _.size));
                      break;
                    default:
                      _ =
                        typeof _._ == `string`
                          ? _.createElement(_, {
                              _: _._,
                            })
                          : _.createElement(_);
                  }
              }
              ((_[_] = _), (_[_] = _));
              _: for (_ = _.child; _ !== null;) {
                if (_.tag === 5 || _.tag === 6) _.appendChild(_.stateNode);
                else if (_.tag !== 4 && _.tag !== 27 && _.child !== null) {
                  ((_.child.return = _), (_ = _.child));
                  continue;
                }
                if (_ === _) break _;
                for (; _.sibling === null;) {
                  if (_.return === null || _.return === _) break _;
                  _ = _.return;
                }
                ((_.sibling.return = _.return), (_ = _.sibling));
              }
              _.stateNode = _;
              _: switch ((_(_, _, _), _)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  _ = !!_.autoFocus;
                  break _;
                case `img`:
                  _ = !0;
                  break _;
                default:
                  _ = !1;
              }
              _ && _(_);
            }
          }
          return (_(_), (_.flags &= -16777217), null);
        case 6:
          if (_ && _.stateNode != null) _.memoizedProps !== _ && _(_);
          else {
            if (typeof _ != `string` && _.stateNode === null)
              throw Error(_(166));
            if (((_ = _.current), _(_))) {
              if (
                ((_ = _.stateNode),
                (_ = _.memoizedProps),
                (_ = null),
                (_ = _),
                _ !== null)
              )
                switch (_.tag) {
                  case 27:
                  case 5:
                    _ = _.memoizedProps;
                }
              ((_[_] = _),
                (_ = !!(
                  _.nodeValue === _ ||
                  (_ !== null && !0 === _.suppressHydrationWarning) ||
                  _(_.nodeValue, _)
                )),
                _ || _(_));
            } else
              ((_ = _(_).createTextNode(_)), (_[_] = _), (_.stateNode = _));
          }
          return (_(_), null);
        case 13:
          if (
            ((_ = _.memoizedState),
            _ === null ||
              (_.memoizedState !== null && _.memoizedState.dehydrated !== null))
          ) {
            if (((_ = _(_)), _ !== null && _.dehydrated !== null)) {
              if (_ === null) {
                if (!_) throw Error(_(318));
                if (
                  ((_ = _.memoizedState),
                  (_ = _ === null ? null : _.dehydrated),
                  !_)
                )
                  throw Error(_(317));
                _[_] = _;
              } else
                (_(),
                  !(_.flags & 128) && (_.memoizedState = null),
                  (_.flags |= 4));
              (_(_), (_ = !1));
            } else
              ((_ = _()),
                _ !== null &&
                  _.memoizedState !== null &&
                  (_.memoizedState.hydrationErrors = _),
                (_ = !0));
            if (!_) return _.flags & 256 ? (_(_), _) : (_(_), null);
          }
          if ((_(_), _.flags & 128)) return ((_.lanes = _), _);
          if (
            ((_ = _ !== null), (_ = _ !== null && _.memoizedState !== null), _)
          ) {
            ((_ = _.child),
              (_ = null),
              _.alternate !== null &&
                _.alternate.memoizedState !== null &&
                _.alternate.memoizedState.cachePool !== null &&
                (_ = _.alternate.memoizedState.cachePool.pool));
            var _ = null;
            (_.memoizedState !== null &&
              _.memoizedState.cachePool !== null &&
              (_ = _.memoizedState.cachePool.pool),
              _ !== _ && (_.flags |= 2048));
          }
          return (
            _ !== _ && _ && (_.child.flags |= 8192),
            _(_, _.updateQueue),
            _(_),
            null
          );
        case 4:
          return (_(), _ === null && _(_.stateNode.containerInfo), _(_), null);
        case 10:
          return (_(_.type), _(_), null);
        case 19:
          if ((_(_), (_ = _.memoizedState), _ === null)) return (_(_), null);
          if (((_ = !!(_.flags & 128)), (_ = _.rendering), _ === null)) {
            if (_) _(_, !1);
            else {
              if (_ !== 0 || (_ !== null && _.flags & 128))
                for (_ = _.child; _ !== null;) {
                  if (((_ = _(_)), _ !== null)) {
                    for (
                      _.flags |= 128,
                        _(_, !1),
                        _ = _.updateQueue,
                        _.updateQueue = _,
                        _(_, _),
                        _.subtreeFlags = 0,
                        _ = _,
                        _ = _.child;
                      _ !== null;
                    )
                      (_(_, _), (_ = _.sibling));
                    return (_(_, (_.current & 1) | 2), _.child);
                  }
                  _ = _.sibling;
                }
              _.tail !== null &&
                _() > _ &&
                ((_.flags |= 128), (_ = !0), _(_, !1), (_.lanes = 4194304));
            }
          } else {
            if (!_) {
              if (((_ = _(_)), _ !== null)) {
                if (
                  ((_.flags |= 128),
                  (_ = !0),
                  (_ = _.updateQueue),
                  (_.updateQueue = _),
                  _(_, _),
                  _(_, !0),
                  _.tail === null &&
                    _.tailMode === `hidden` &&
                    !_.alternate &&
                    !_)
                )
                  return (_(_), null);
              } else
                2 * _() - _.renderingStartTime > _ &&
                  _ !== 536870912 &&
                  ((_.flags |= 128), (_ = !0), _(_, !1), (_.lanes = 4194304));
            }
            _.isBackwards
              ? ((_.sibling = _.child), (_.child = _))
              : ((_ = _.last),
                _ === null ? (_.child = _) : (_.sibling = _),
                (_.last = _));
          }
          return _.tail === null
            ? (_(_), null)
            : ((_ = _.tail),
              (_.rendering = _),
              (_.tail = _.sibling),
              (_.renderingStartTime = _()),
              (_.sibling = null),
              (_ = _.current),
              _(_, _ ? (_ & 1) | 2 : _ & 1),
              _);
        case 22:
        case 23:
          return (
            _(_),
            _(),
            (_ = _.memoizedState !== null),
            _ === null
              ? _ && (_.flags |= 8192)
              : (_.memoizedState !== null) !== _ && (_.flags |= 8192),
            _
              ? _ & 536870912 &&
                !(_.flags & 128) &&
                (_(_), _.subtreeFlags & 6 && (_.flags |= 8192))
              : _(_),
            (_ = _.updateQueue),
            _ !== null && _(_, _.retryQueue),
            (_ = null),
            _ !== null &&
              _.memoizedState !== null &&
              _.memoizedState.cachePool !== null &&
              (_ = _.memoizedState.cachePool.pool),
            (_ = null),
            _.memoizedState !== null &&
              _.memoizedState.cachePool !== null &&
              (_ = _.memoizedState.cachePool.pool),
            _ !== _ && (_.flags |= 2048),
            _ !== null && _(_),
            null
          );
        case 24:
          return (
            (_ = null),
            _ !== null && (_ = _.memoizedState.cache),
            _.memoizedState.cache !== _ && (_.flags |= 2048),
            _(_),
            _(_),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(_(156, _.tag));
    }
    function _(_, _) {
      switch ((_(_), _.tag)) {
        case 1:
          return (
            (_ = _.flags),
            _ & 65536 ? ((_.flags = (_ & -65537) | 128), _) : null
          );
        case 3:
          return (
            _(_),
            _(),
            (_ = _.flags),
            _ & 65536 && !(_ & 128) ? ((_.flags = (_ & -65537) | 128), _) : null
          );
        case 26:
        case 27:
        case 5:
          return (_(_), null);
        case 13:
          if (
            (_(_), (_ = _.memoizedState), _ !== null && _.dehydrated !== null)
          ) {
            if (_.alternate === null) throw Error(_(340));
            _();
          }
          return (
            (_ = _.flags),
            _ & 65536 ? ((_.flags = (_ & -65537) | 128), _) : null
          );
        case 19:
          return (_(_), null);
        case 4:
          return (_(), null);
        case 10:
          return (_(_.type), null);
        case 22:
        case 23:
          return (
            _(_),
            _(),
            _ !== null && _(_),
            (_ = _.flags),
            _ & 65536 ? ((_.flags = (_ & -65537) | 128), _) : null
          );
        case 24:
          return (_(_), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function _(_, _) {
      switch ((_(_), _.tag)) {
        case 3:
          (_(_), _());
          break;
        case 26:
        case 27:
        case 5:
          _(_);
          break;
        case 4:
          _();
          break;
        case 13:
          _(_);
          break;
        case 19:
          _(_);
          break;
        case 10:
          _(_.type);
          break;
        case 22:
        case 23:
          (_(_), _(), _ !== null && _(_));
          break;
        case 24:
          _(_);
      }
    }
    function _(_, _) {
      try {
        var _ = _.updateQueue,
          _ = _ === null ? null : _.lastEffect;
        if (_ !== null) {
          var _ = _.next;
          _ = _;
          do {
            if ((_.tag & _) === _) {
              _ = void 0;
              var _ = _.create,
                _ = _.inst;
              ((_ = _()), (_.destroy = _));
            }
            _ = _.next;
          } while (_ !== _);
        }
      } catch (_) {
        _(_, _.return, _);
      }
    }
    function _(_, _, _) {
      try {
        var _ = _.updateQueue,
          _ = _ === null ? null : _.lastEffect;
        if (_ !== null) {
          var _ = _.next;
          _ = _;
          do {
            if ((_.tag & _) === _) {
              var _ = _.inst,
                _ = _.destroy;
              if (_ !== void 0) {
                ((_.destroy = void 0), (_ = _));
                var _ = _,
                  _ = _;
                try {
                  _();
                } catch (_) {
                  _(_, _, _);
                }
              }
            }
            _ = _.next;
          } while (_ !== _);
        }
      } catch (_) {
        _(_, _.return, _);
      }
    }
    function _(_) {
      var _ = _.updateQueue;
      if (_ !== null) {
        var _ = _.stateNode;
        try {
          _(_, _);
        } catch (_) {
          _(_, _.return, _);
        }
      }
    }
    function _(_, _, _) {
      ((_.props = _(_.type, _.memoizedProps)), (_.state = _.memoizedState));
      try {
        _.componentWillUnmount();
      } catch (_) {
        _(_, _, _);
      }
    }
    function _(_, _) {
      try {
        var _ = _.ref;
        if (_ !== null) {
          switch (_.tag) {
            case 26:
            case 27:
            case 5:
              var _ = _.stateNode;
              break;
            case 30:
              _ = _.stateNode;
              break;
            default:
              _ = _.stateNode;
          }
          typeof _ == `function` ? (_.refCleanup = _(_)) : (_.current = _);
        }
      } catch (_) {
        _(_, _, _);
      }
    }
    function _(_, _) {
      var _ = _.ref,
        _ = _.refCleanup;
      if (_ !== null) {
        if (typeof _ == `function`)
          try {
            _();
          } catch (_) {
            _(_, _, _);
          } finally {
            ((_.refCleanup = null),
              (_ = _.alternate),
              _ != null && (_.refCleanup = null));
          }
        else if (typeof _ == `function`)
          try {
            _(null);
          } catch (_) {
            _(_, _, _);
          }
        else _.current = null;
      }
    }
    function _(_) {
      var _ = _.type,
        _ = _.memoizedProps,
        _ = _.stateNode;
      try {
        _: switch (_) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            _.autoFocus && _.focus();
            break _;
          case `img`:
            _.src ? (_.src = _.src) : _.srcSet && (_.srcset = _.srcSet);
        }
      } catch (_) {
        _(_, _.return, _);
      }
    }
    function _(_, _, _) {
      try {
        var _ = _.stateNode;
        (_(_, _.type, _, _), (_[_] = _));
      } catch (_) {
        _(_, _.return, _);
      }
    }
    function _(_) {
      return (
        _.tag === 5 ||
        _.tag === 3 ||
        _.tag === 26 ||
        (_.tag === 27 && _(_.type)) ||
        _.tag === 4
      );
    }
    function _(_) {
      _: for (;;) {
        for (; _.sibling === null;) {
          if (_.return === null || _(_.return)) return null;
          _ = _.return;
        }
        for (
          _.sibling.return = _.return, _ = _.sibling;
          _.tag !== 5 && _.tag !== 6 && _.tag !== 18;
        ) {
          if (
            (_.tag === 27 && _(_.type)) ||
            _.flags & 2 ||
            _.child === null ||
            _.tag === 4
          )
            continue _;
          ((_.child.return = _), (_ = _.child));
        }
        if (!(_.flags & 2)) return _.stateNode;
      }
    }
    function _(_, _, _) {
      var _ = _.tag;
      if (_ === 5 || _ === 6)
        ((_ = _.stateNode),
          _
            ? (_.nodeType === 9
                ? _.body
                : _.nodeName === `HTML`
                  ? _.ownerDocument.body
                  : _
              ).insertBefore(_, _)
            : ((_ =
                _.nodeType === 9
                  ? _.body
                  : _.nodeName === `HTML`
                    ? _.ownerDocument.body
                    : _),
              _.appendChild(_),
              (_ = _._reactRootContainer),
              _ != null || _.onclick !== null || (_.onclick = _)));
      else if (
        _ !== 4 &&
        (_ === 27 && _(_.type) && ((_ = _.stateNode), (_ = null)),
        (_ = _.child),
        _ !== null)
      )
        for (_(_, _, _), _ = _.sibling; _ !== null;)
          (_(_, _, _), (_ = _.sibling));
    }
    function _(_, _, _) {
      var _ = _.tag;
      if (_ === 5 || _ === 6)
        ((_ = _.stateNode), _ ? _.insertBefore(_, _) : _.appendChild(_));
      else if (
        _ !== 4 &&
        (_ === 27 && _(_.type) && (_ = _.stateNode), (_ = _.child), _ !== null)
      )
        for (_(_, _, _), _ = _.sibling; _ !== null;)
          (_(_, _, _), (_ = _.sibling));
    }
    function _(_) {
      var _ = _.stateNode,
        _ = _.memoizedProps;
      try {
        for (var _ = _.type, _ = _.attributes; _.length;)
          _.removeAttributeNode(_[0]);
        (_(_, _, _), (_[_] = _), (_[_] = _));
      } catch (_) {
        _(_, _.return, _);
      }
    }
    var _ = !1,
      _ = !1,
      _ = !1,
      _ = typeof WeakSet == `function` ? WeakSet : Set,
      _ = null;
    function _(_, _) {
      if (((_ = _.containerInfo), (_ = _), (_ = _(_)), _(_))) {
        if (`selectionStart` in _)
          var _ = {
            start: _.selectionStart,
            end: _.selectionEnd,
          };
        else
          _: {
            _ = ((_ = _.ownerDocument) && _.defaultView) || window;
            var _ = _.getSelection && _.getSelection();
            if (_ && _.rangeCount !== 0) {
              _ = _.anchorNode;
              var _ = _.anchorOffset,
                _ = _.focusNode;
              _ = _.focusOffset;
              try {
                (_.nodeType, _.nodeType);
              } catch {
                _ = null;
                break _;
              }
              var _ = 0,
                _ = -1,
                _ = -1,
                _ = 0,
                _ = 0,
                _ = _,
                _ = null;
              _: for (;;) {
                for (
                  var _;
                  _ !== _ || (_ !== 0 && _.nodeType !== 3) || (_ = _ + _),
                    _ !== _ || (_ !== 0 && _.nodeType !== 3) || (_ = _ + _),
                    _.nodeType === 3 && (_ += _.nodeValue.length),
                    (_ = _.firstChild) !== null;
                )
                  ((_ = _), (_ = _));
                for (;;) {
                  if (_ === _) break _;
                  if (
                    (_ === _ && ++_ === _ && (_ = _),
                    _ === _ && ++_ === _ && (_ = _),
                    (_ = _.nextSibling) !== null)
                  )
                    break;
                  ((_ = _), (_ = _.parentNode));
                }
                _ = _;
              }
              _ =
                _ === -1 || _ === -1
                  ? null
                  : {
                      start: _,
                      end: _,
                    };
            } else _ = null;
          }
        _ ||= {
          start: 0,
          end: 0,
        };
      } else _ = null;
      for (
        _ = {
          focusedElem: _,
          selectionRange: _,
        },
          _ = !1,
          _ = _;
        _ !== null;
      )
        if (((_ = _), (_ = _.child), _.subtreeFlags & 1024 && _ !== null))
          ((_.return = _), (_ = _));
        else
          for (; _ !== null;) {
            switch (((_ = _), (_ = _.alternate), (_ = _.flags), _.tag)) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (_ & 1024 && _ !== null) {
                  ((_ = void 0),
                    (_ = _),
                    (_ = _.memoizedProps),
                    (_ = _.memoizedState),
                    (_ = _.stateNode));
                  try {
                    var _ = _(_.type, _, _.elementType === _.type);
                    ((_ = _.getSnapshotBeforeUpdate(_, _)),
                      (_.__reactInternalSnapshotBeforeUpdate = _));
                  } catch (_) {
                    _(_, _.return, _);
                  }
                }
                break;
              case 3:
                if (_ & 1024) {
                  if (
                    ((_ = _.stateNode.containerInfo), (_ = _.nodeType), _ === 9)
                  )
                    _(_);
                  else if (_ === 1)
                    switch (_.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        _(_);
                        break;
                      default:
                        _.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (_ & 1024) throw Error(_(163));
            }
            if (((_ = _.sibling), _ !== null)) {
              ((_.return = _.return), (_ = _));
              break;
            }
            _ = _.return;
          }
    }
    function _(_, _, _) {
      var _ = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          (_(_, _), _ & 4 && _(5, _));
          break;
        case 1:
          if ((_(_, _), _ & 4)) {
            if (((_ = _.stateNode), _ === null))
              try {
                _.componentDidMount();
              } catch (_) {
                _(_, _.return, _);
              }
            else {
              var _ = _(_.type, _.memoizedProps);
              _ = _.memoizedState;
              try {
                _.componentDidUpdate(
                  _,
                  _,
                  _.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (_) {
                _(_, _.return, _);
              }
            }
          }
          (_ & 64 && _(_), _ & 512 && _(_, _.return));
          break;
        case 3:
          if ((_(_, _), _ & 64 && ((_ = _.updateQueue), _ !== null))) {
            if (((_ = null), _.child !== null))
              switch (_.child.tag) {
                case 27:
                case 5:
                  _ = _.child.stateNode;
                  break;
                case 1:
                  _ = _.child.stateNode;
              }
            try {
              _(_, _);
            } catch (_) {
              _(_, _.return, _);
            }
          }
          break;
        case 27:
          _ === null && _ & 4 && _(_);
        case 26:
        case 5:
          (_(_, _), _ === null && _ & 4 && _(_), _ & 512 && _(_, _.return));
          break;
        case 12:
          _(_, _);
          break;
        case 13:
          (_(_, _),
            _ & 4 && _(_, _),
            _ & 64 &&
              ((_ = _.memoizedState),
              _ !== null &&
                ((_ = _.dehydrated),
                _ !== null && ((_ = _.bind(null, _)), _(_, _)))));
          break;
        case 22:
          if (((_ = _.memoizedState !== null || _), !_)) {
            ((_ = (_ !== null && _.memoizedState !== null) || _), (_ = _));
            var _ = _;
            ((_ = _),
              (_ = _) && !_ ? _(_, _, !!(_.subtreeFlags & 8772)) : _(_, _),
              (_ = _),
              (_ = _));
          }
          break;
        case 30:
          break;
        default:
          _(_, _);
      }
    }
    function _(_) {
      var _ = _.alternate;
      (_ !== null && ((_.alternate = null), _(_)),
        (_.child = null),
        (_.deletions = null),
        (_.sibling = null),
        _.tag === 5 && ((_ = _.stateNode), _ !== null && _(_)),
        (_.stateNode = null),
        (_.return = null),
        (_.dependencies = null),
        (_.memoizedProps = null),
        (_.memoizedState = null),
        (_.pendingProps = null),
        (_.stateNode = null),
        (_.updateQueue = null));
    }
    var _ = null,
      _ = !1;
    function _(_, _, _) {
      for (_ = _.child; _ !== null;) (_(_, _, _), (_ = _.sibling));
    }
    function _(_, _, _) {
      if (_ && typeof _.onCommitFiberUnmount == `function`)
        try {
          _.onCommitFiberUnmount(_, _);
        } catch {}
      switch (_.tag) {
        case 26:
          (_ || _(_, _),
            _(_, _, _),
            _.memoizedState
              ? _.memoizedState.count--
              : _.stateNode &&
                ((_ = _.stateNode), _.parentNode.removeChild(_)));
          break;
        case 27:
          _ || _(_, _);
          var _ = _,
            _ = _;
          (_(_.type) && ((_ = _.stateNode), (_ = !1)),
            _(_, _, _),
            _(_.stateNode),
            (_ = _),
            (_ = _));
          break;
        case 5:
          _ || _(_, _);
        case 6:
          if (
            ((_ = _),
            (_ = _),
            (_ = null),
            _(_, _, _),
            (_ = _),
            (_ = _),
            _ !== null)
          ) {
            if (_)
              try {
                (_.nodeType === 9
                  ? _.body
                  : _.nodeName === `HTML`
                    ? _.ownerDocument.body
                    : _
                ).removeChild(_.stateNode);
              } catch (_) {
                _(_, _, _);
              }
            else
              try {
                _.removeChild(_.stateNode);
              } catch (_) {
                _(_, _, _);
              }
          }
          break;
        case 18:
          _ !== null &&
            (_
              ? ((_ = _),
                _(
                  _.nodeType === 9
                    ? _.body
                    : _.nodeName === `HTML`
                      ? _.ownerDocument.body
                      : _,
                  _.stateNode,
                ),
                _(_))
              : _(_, _.stateNode));
          break;
        case 4:
          ((_ = _),
            (_ = _),
            (_ = _.stateNode.containerInfo),
            (_ = !0),
            _(_, _, _),
            (_ = _),
            (_ = _));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (_ || _(2, _, _), _ || _(4, _, _), _(_, _, _));
          break;
        case 1:
          (_ ||
            (_(_, _),
            (_ = _.stateNode),
            typeof _.componentWillUnmount == `function` && _(_, _, _)),
            _(_, _, _));
          break;
        case 21:
          _(_, _, _);
          break;
        case 22:
          ((_ = (_ = _) || _.memoizedState !== null), _(_, _, _), (_ = _));
          break;
        default:
          _(_, _, _);
      }
    }
    function _(_, _) {
      if (
        _.memoizedState === null &&
        ((_ = _.alternate),
        _ !== null &&
          ((_ = _.memoizedState),
          _ !== null && ((_ = _.dehydrated), _ !== null)))
      )
        try {
          _(_);
        } catch (_) {
          _(_, _.return, _);
        }
    }
    function _(_) {
      switch (_.tag) {
        case 13:
        case 19:
          var _ = _.stateNode;
          return (_ === null && (_ = _.stateNode = new _()), _);
        case 22:
          return (
            (_ = _.stateNode),
            (_ = _._retryCache),
            _ === null && (_ = _._retryCache = new _()),
            _
          );
        default:
          throw Error(_(435, _.tag));
      }
    }
    function _(_, _) {
      var _ = _(_);
      _.forEach(function (_) {
        var _ = _.bind(null, _, _);
        _.has(_) || (_.add(_), _.then(_, _));
      });
    }
    function _(_, _) {
      var _ = _.deletions;
      if (_ !== null)
        for (var _ = 0; _ < _.length; _++) {
          var _ = _[_],
            _ = _,
            _ = _,
            _ = _;
          _: for (; _ !== null;) {
            switch (_.tag) {
              case 27:
                if (_(_.type)) {
                  ((_ = _.stateNode), (_ = !1));
                  break _;
                }
                break;
              case 5:
                ((_ = _.stateNode), (_ = !1));
                break _;
              case 3:
              case 4:
                ((_ = _.stateNode.containerInfo), (_ = !0));
                break _;
            }
            _ = _.return;
          }
          if (_ === null) throw Error(_(160));
          (_(_, _, _),
            (_ = null),
            (_ = !1),
            (_ = _.alternate),
            _ !== null && (_.return = null),
            (_.return = null));
        }
      if (_.subtreeFlags & 13878)
        for (_ = _.child; _ !== null;) (_(_, _), (_ = _.sibling));
    }
    var _ = null;
    function _(_, _) {
      var _ = _.alternate,
        _ = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (_(_, _),
            _(_),
            _ & 4 && (_(3, _, _.return), _(3, _), _(5, _, _.return)));
          break;
        case 1:
          (_(_, _),
            _(_),
            _ & 512 && (_ || _ === null || _(_, _.return)),
            _ & 64 &&
              _ &&
              ((_ = _.updateQueue),
              _ !== null &&
                ((_ = _.callbacks),
                _ !== null &&
                  ((_ = _.shared.hiddenCallbacks),
                  (_.shared.hiddenCallbacks = _ === null ? _ : _.concat(_))))));
          break;
        case 26:
          var _ = _;
          if (
            (_(_, _),
            _(_),
            _ & 512 && (_ || _ === null || _(_, _.return)),
            _ & 4)
          ) {
            var _ = _ === null ? null : _.memoizedState;
            if (((_ = _.memoizedState), _ === null)) {
              if (_ === null) {
                if (_.stateNode === null) {
                  _: {
                    ((_ = _.type),
                      (_ = _.memoizedProps),
                      (_ = _.ownerDocument || _));
                    _: switch (_) {
                      case `title`:
                        ((_ = _.getElementsByTagName(`title`)[0]),
                          (!_ ||
                            _[_] ||
                            _[_] ||
                            _.namespaceURI === `http://www.w3.org/2000/svg` ||
                            _.hasAttribute(`itemprop`)) &&
                            ((_ = _.createElement(_)),
                            _.head.insertBefore(
                              _,
                              _.querySelector(`head > title`),
                            )),
                          _(_, _, _),
                          (_[_] = _),
                          _(_),
                          (_ = _));
                        break _;
                      case `link`:
                        var _ = _(`link`, `href`, _).get(_ + (_.href || ``));
                        if (_) {
                          for (var _ = 0; _ < _.length; _++)
                            if (
                              ((_ = _[_]),
                              _.getAttribute(`href`) ===
                                (_.href == null || _.href === ``
                                  ? null
                                  : _.href) &&
                                _.getAttribute(`rel`) ===
                                  (_.rel == null ? null : _.rel) &&
                                _.getAttribute(`title`) ===
                                  (_.title == null ? null : _.title) &&
                                _.getAttribute(`crossorigin`) ===
                                  (_.crossOrigin == null
                                    ? null
                                    : _.crossOrigin))
                            ) {
                              _.splice(_, 1);
                              break _;
                            }
                        }
                        ((_ = _.createElement(_)),
                          _(_, _, _),
                          _.head.appendChild(_));
                        break;
                      case `meta`:
                        if (
                          (_ = _(`meta`, `content`, _).get(
                            _ + (_.content || ``),
                          ))
                        ) {
                          for (_ = 0; _ < _.length; _++)
                            if (
                              ((_ = _[_]),
                              _.getAttribute(`content`) ===
                                (_.content == null ? null : `` + _.content) &&
                                _.getAttribute(`name`) ===
                                  (_.name == null ? null : _.name) &&
                                _.getAttribute(`property`) ===
                                  (_.property == null ? null : _.property) &&
                                _.getAttribute(`http-equiv`) ===
                                  (_.httpEquiv == null ? null : _.httpEquiv) &&
                                _.getAttribute(`charset`) ===
                                  (_.charSet == null ? null : _.charSet))
                            ) {
                              _.splice(_, 1);
                              break _;
                            }
                        }
                        ((_ = _.createElement(_)),
                          _(_, _, _),
                          _.head.appendChild(_));
                        break;
                      default:
                        throw Error(_(468, _));
                    }
                    ((_[_] = _), _(_), (_ = _));
                  }
                  _.stateNode = _;
                } else _(_, _.type, _.stateNode);
              } else _.stateNode = _(_, _, _.memoizedProps);
            } else
              _ === _
                ? _ === null &&
                  _.stateNode !== null &&
                  _(_, _.memoizedProps, _.memoizedProps)
                : (_ === null
                    ? _.stateNode !== null &&
                      ((_ = _.stateNode), _.parentNode.removeChild(_))
                    : _.count--,
                  _ === null
                    ? _(_, _.type, _.stateNode)
                    : _(_, _, _.memoizedProps));
          }
          break;
        case 27:
          (_(_, _),
            _(_),
            _ & 512 && (_ || _ === null || _(_, _.return)),
            _ !== null && _ & 4 && _(_, _.memoizedProps, _.memoizedProps));
          break;
        case 5:
          if (
            (_(_, _),
            _(_),
            _ & 512 && (_ || _ === null || _(_, _.return)),
            _.flags & 32)
          ) {
            _ = _.stateNode;
            try {
              _(_, ``);
            } catch (_) {
              _(_, _.return, _);
            }
          }
          (_ & 4 &&
            _.stateNode != null &&
            ((_ = _.memoizedProps), _(_, _, _ === null ? _ : _.memoizedProps)),
            _ & 1024 && (_ = !0));
          break;
        case 6:
          if ((_(_, _), _(_), _ & 4)) {
            if (_.stateNode === null) throw Error(_(162));
            ((_ = _.memoizedProps), (_ = _.stateNode));
            try {
              _.nodeValue = _;
            } catch (_) {
              _(_, _.return, _);
            }
          }
          break;
        case 3:
          if (
            ((_ = null),
            (_ = _),
            (_ = _(_.containerInfo)),
            _(_, _),
            (_ = _),
            _(_),
            _ & 4 && _ !== null && _.memoizedState.isDehydrated)
          )
            try {
              _(_.containerInfo);
            } catch (_) {
              _(_, _.return, _);
            }
          _ && ((_ = !1), _(_));
          break;
        case 4:
          ((_ = _), (_ = _(_.stateNode.containerInfo)), _(_, _), _(_), (_ = _));
          break;
        case 12:
          (_(_, _), _(_));
          break;
        case 13:
          (_(_, _),
            _(_),
            _.child.flags & 8192 &&
              (_.memoizedState !== null) !=
                (_ !== null && _.memoizedState !== null) &&
              (_ = _()),
            _ & 4 &&
              ((_ = _.updateQueue),
              _ !== null && ((_.updateQueue = null), _(_, _))));
          break;
        case 22:
          _ = _.memoizedState !== null;
          var _ = _ !== null && _.memoizedState !== null,
            _ = _,
            _ = _;
          if (
            ((_ = _ || _),
            (_ = _ || _),
            _(_, _),
            (_ = _),
            (_ = _),
            _(_),
            _ & 8192)
          )
            _: for (
              _ = _.stateNode,
                _._visibility = _ ? _._visibility & -2 : _._visibility | 1,
                _ && (_ === null || _ || _ || _ || _(_)),
                _ = null,
                _ = _;
              ;
            ) {
              if (_.tag === 5 || _.tag === 26) {
                if (_ === null) {
                  _ = _ = _;
                  try {
                    if (((_ = _.stateNode), _))
                      ((_ = _.style),
                        typeof _.setProperty == `function`
                          ? _.setProperty(`display`, `none`, `important`)
                          : (_.display = `none`));
                    else {
                      _ = _.stateNode;
                      var _ = _.memoizedProps.style,
                        _ =
                          _ != null && _.hasOwnProperty(`display`)
                            ? _.display
                            : null;
                      _.style.display =
                        _ == null || typeof _ == `boolean`
                          ? ``
                          : (`` + _).trim();
                    }
                  } catch (_) {
                    _(_, _.return, _);
                  }
                }
              } else if (_.tag === 6) {
                if (_ === null) {
                  _ = _;
                  try {
                    _.stateNode.nodeValue = _ ? `` : _.memoizedProps;
                  } catch (_) {
                    _(_, _.return, _);
                  }
                }
              } else if (
                ((_.tag !== 22 && _.tag !== 23) ||
                  _.memoizedState === null ||
                  _ === _) &&
                _.child !== null
              ) {
                ((_.child.return = _), (_ = _.child));
                continue;
              }
              if (_ === _) break _;
              for (; _.sibling === null;) {
                if (_.return === null || _.return === _) break _;
                (_ === _ && (_ = null), (_ = _.return));
              }
              (_ === _ && (_ = null),
                (_.sibling.return = _.return),
                (_ = _.sibling));
            }
          _ & 4 &&
            ((_ = _.updateQueue),
            _ !== null &&
              ((_ = _.retryQueue),
              _ !== null && ((_.retryQueue = null), _(_, _))));
          break;
        case 19:
          (_(_, _),
            _(_),
            _ & 4 &&
              ((_ = _.updateQueue),
              _ !== null && ((_.updateQueue = null), _(_, _))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (_(_, _), _(_));
      }
    }
    function _(_) {
      var _ = _.flags;
      if (_ & 2) {
        try {
          for (var _, _ = _.return; _ !== null;) {
            if (_(_)) {
              _ = _;
              break;
            }
            _ = _.return;
          }
          if (_ == null) throw Error(_(160));
          switch (_.tag) {
            case 27:
              var _ = _.stateNode;
              _(_, _(_), _);
              break;
            case 5:
              var _ = _.stateNode;
              (_.flags & 32 && (_(_, ``), (_.flags &= -33)), _(_, _(_), _));
              break;
            case 3:
            case 4:
              var _ = _.stateNode.containerInfo;
              _(_, _(_), _);
              break;
            default:
              throw Error(_(161));
          }
        } catch (_) {
          _(_, _.return, _);
        }
        _.flags &= -3;
      }
      _ & 4096 && (_.flags &= -4097);
    }
    function _(_) {
      if (_.subtreeFlags & 1024)
        for (_ = _.child; _ !== null;) {
          var _ = _;
          (_(_),
            _.tag === 5 && _.flags & 1024 && _.stateNode.reset(),
            (_ = _.sibling));
        }
    }
    function _(_, _) {
      if (_.subtreeFlags & 8772)
        for (_ = _.child; _ !== null;) (_(_, _.alternate, _), (_ = _.sibling));
    }
    function _(_) {
      for (_ = _.child; _ !== null;) {
        var _ = _;
        switch (_.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (_(4, _, _.return), _(_));
            break;
          case 1:
            _(_, _.return);
            var _ = _.stateNode;
            (typeof _.componentWillUnmount == `function` && _(_, _.return, _),
              _(_));
            break;
          case 27:
            _(_.stateNode);
          case 26:
          case 5:
            (_(_, _.return), _(_));
            break;
          case 22:
            _.memoizedState === null && _(_);
            break;
          case 30:
            _(_);
            break;
          default:
            _(_);
        }
        _ = _.sibling;
      }
    }
    function _(_, _, _) {
      for (_ &&= !!(_.subtreeFlags & 8772), _ = _.child; _ !== null;) {
        var _ = _.alternate,
          _ = _,
          _ = _,
          _ = _.flags;
        switch (_.tag) {
          case 0:
          case 11:
          case 15:
            (_(_, _, _), _(4, _));
            break;
          case 1:
            if (
              (_(_, _, _),
              (_ = _),
              (_ = _.stateNode),
              typeof _.componentDidMount == `function`)
            )
              try {
                _.componentDidMount();
              } catch (_) {
                _(_, _.return, _);
              }
            if (((_ = _), (_ = _.updateQueue), _ !== null)) {
              var _ = _.stateNode;
              try {
                var _ = _.shared.hiddenCallbacks;
                if (_ !== null)
                  for (
                    _.shared.hiddenCallbacks = null, _ = 0;
                    _ < _.length;
                    _++
                  )
                    _(_[_], _);
              } catch (_) {
                _(_, _.return, _);
              }
            }
            (_ && _ & 64 && _(_), _(_, _.return));
            break;
          case 27:
            _(_);
          case 26:
          case 5:
            (_(_, _, _), _ && _ === null && _ & 4 && _(_), _(_, _.return));
            break;
          case 12:
            _(_, _, _);
            break;
          case 13:
            (_(_, _, _), _ && _ & 4 && _(_, _));
            break;
          case 22:
            (_.memoizedState === null && _(_, _, _), _(_, _.return));
            break;
          case 30:
            break;
          default:
            _(_, _, _);
        }
        _ = _.sibling;
      }
    }
    function _(_, _) {
      var _ = null;
      (_ !== null &&
        _.memoizedState !== null &&
        _.memoizedState.cachePool !== null &&
        (_ = _.memoizedState.cachePool.pool),
        (_ = null),
        _.memoizedState !== null &&
          _.memoizedState.cachePool !== null &&
          (_ = _.memoizedState.cachePool.pool),
        _ !== _ && (_ != null && _.refCount++, _ != null && _(_)));
    }
    function _(_, _) {
      ((_ = null),
        _.alternate !== null && (_ = _.alternate.memoizedState.cache),
        (_ = _.memoizedState.cache),
        _ !== _ && (_.refCount++, _ != null && _(_)));
    }
    function _(_, _, _, _) {
      if (_.subtreeFlags & 10256)
        for (_ = _.child; _ !== null;) (_(_, _, _, _), (_ = _.sibling));
    }
    function _(_, _, _, _) {
      var _ = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          (_(_, _, _, _), _ & 2048 && _(9, _));
          break;
        case 1:
          _(_, _, _, _);
          break;
        case 3:
          (_(_, _, _, _),
            _ & 2048 &&
              ((_ = null),
              _.alternate !== null && (_ = _.alternate.memoizedState.cache),
              (_ = _.memoizedState.cache),
              _ !== _ && (_.refCount++, _ != null && _(_))));
          break;
        case 12:
          if (_ & 2048) {
            (_(_, _, _, _), (_ = _.stateNode));
            try {
              var _ = _.memoizedProps,
                _ = _._,
                _ = _.onPostCommit;
              typeof _ == `function` &&
                _(
                  _,
                  _.alternate === null ? `mount` : `update`,
                  _.passiveEffectDuration,
                  -0,
                );
            } catch (_) {
              _(_, _.return, _);
            }
          } else _(_, _, _, _);
          break;
        case 13:
          _(_, _, _, _);
          break;
        case 23:
          break;
        case 22:
          ((_ = _.stateNode),
            (_ = _.alternate),
            _.memoizedState === null
              ? _._visibility & 2
                ? _(_, _, _, _)
                : ((_._visibility |= 2),
                  _(_, _, _, _, !!(_.subtreeFlags & 10256)))
              : _._visibility & 2
                ? _(_, _, _, _)
                : _(_, _),
            _ & 2048 && _(_, _));
          break;
        case 24:
          (_(_, _, _, _), _ & 2048 && _(_.alternate, _));
          break;
        default:
          _(_, _, _, _);
      }
    }
    function _(_, _, _, _, _) {
      for (_ &&= !!(_.subtreeFlags & 10256), _ = _.child; _ !== null;) {
        var _ = _,
          _ = _,
          _ = _,
          _ = _,
          _ = _.flags;
        switch (_.tag) {
          case 0:
          case 11:
          case 15:
            (_(_, _, _, _, _), _(8, _));
            break;
          case 23:
            break;
          case 22:
            var _ = _.stateNode;
            (_.memoizedState === null
              ? ((_._visibility |= 2), _(_, _, _, _, _))
              : _._visibility & 2
                ? _(_, _, _, _, _)
                : _(_, _),
              _ && _ & 2048 && _(_.alternate, _));
            break;
          case 24:
            (_(_, _, _, _, _), _ && _ & 2048 && _(_.alternate, _));
            break;
          default:
            _(_, _, _, _, _);
        }
        _ = _.sibling;
      }
    }
    function _(_, _) {
      if (_.subtreeFlags & 10256)
        for (_ = _.child; _ !== null;) {
          var _ = _,
            _ = _,
            _ = _.flags;
          switch (_.tag) {
            case 22:
              (_(_, _), _ & 2048 && _(_.alternate, _));
              break;
            case 24:
              (_(_, _), _ & 2048 && _(_.alternate, _));
              break;
            default:
              _(_, _);
          }
          _ = _.sibling;
        }
    }
    var _ = 8192;
    function _(_) {
      if (_.subtreeFlags & _)
        for (_ = _.child; _ !== null;) (_(_), (_ = _.sibling));
    }
    function _(_) {
      switch (_.tag) {
        case 26:
          (_(_),
            _.flags & _ &&
              _.memoizedState !== null &&
              _(_, _.memoizedState, _.memoizedProps));
          break;
        case 5:
          _(_);
          break;
        case 3:
        case 4:
          var _ = _;
          ((_ = _(_.stateNode.containerInfo)), _(_), (_ = _));
          break;
        case 22:
          _.memoizedState === null &&
            ((_ = _.alternate),
            _ !== null && _.memoizedState !== null
              ? ((_ = _), (_ = 16777216), _(_), (_ = _))
              : _(_));
          break;
        default:
          _(_);
      }
    }
    function _(_) {
      var _ = _.alternate;
      if (_ !== null && ((_ = _.child), _ !== null)) {
        _.child = null;
        do ((_ = _.sibling), (_.sibling = null), (_ = _));
        while (_ !== null);
      }
    }
    function _(_) {
      var _ = _.deletions;
      if (_.flags & 16) {
        if (_ !== null)
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_];
            ((_ = _), _(_, _));
          }
        _(_);
      }
      if (_.subtreeFlags & 10256)
        for (_ = _.child; _ !== null;) (_(_), (_ = _.sibling));
    }
    function _(_) {
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          (_(_), _.flags & 2048 && _(9, _, _.return));
          break;
        case 3:
          _(_);
          break;
        case 12:
          _(_);
          break;
        case 22:
          var _ = _.stateNode;
          _.memoizedState !== null &&
          _._visibility & 2 &&
          (_.return === null || _.return.tag !== 13)
            ? ((_._visibility &= -3), _(_))
            : _(_);
          break;
        default:
          _(_);
      }
    }
    function _(_) {
      var _ = _.deletions;
      if (_.flags & 16) {
        if (_ !== null)
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_];
            ((_ = _), _(_, _));
          }
        _(_);
      }
      for (_ = _.child; _ !== null;) {
        switch (((_ = _), _.tag)) {
          case 0:
          case 11:
          case 15:
            (_(8, _, _.return), _(_));
            break;
          case 22:
            ((_ = _.stateNode),
              _._visibility & 2 && ((_._visibility &= -3), _(_)));
            break;
          default:
            _(_);
        }
        _ = _.sibling;
      }
    }
    function _(_, _) {
      for (; _ !== null;) {
        var _ = _;
        switch (_.tag) {
          case 0:
          case 11:
          case 15:
            _(8, _, _);
            break;
          case 23:
          case 22:
            if (
              _.memoizedState !== null &&
              _.memoizedState.cachePool !== null
            ) {
              var _ = _.memoizedState.cachePool.pool;
              _ != null && _.refCount++;
            }
            break;
          case 24:
            _(_.memoizedState.cache);
        }
        if (((_ = _.child), _ !== null)) ((_.return = _), (_ = _));
        else
          _: for (_ = _; _ !== null;) {
            _ = _;
            var _ = _.sibling,
              _ = _.return;
            if ((_(_), _ === _)) {
              _ = null;
              break _;
            }
            if (_ !== null) {
              ((_.return = _), (_ = _));
              break _;
            }
            _ = _;
          }
      }
    }
    var _ = {
        getCacheForType: function (_) {
          var _ = _(_),
            _ = _.data.get(_);
          return (_ === void 0 && ((_ = _()), _.data.set(_, _)), _);
        },
      },
      _ = typeof WeakMap == `function` ? WeakMap : Map,
      _ = 0,
      _ = null,
      _ = null,
      _ = 0,
      _ = 0,
      _ = null,
      _ = !1,
      _ = !1,
      _ = !1,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = null,
      _ = null,
      _ = !1,
      _ = 0,
      _ = 1 / 0,
      _ = null,
      _ = null,
      _ = 0,
      _ = null,
      _ = null,
      _ = 0,
      _ = 0,
      _ = null,
      _ = null,
      _ = 0,
      _ = null;
    function _() {
      if (_ & 2 && _ !== 0) return _ & -_;
      if (_._ !== null) {
        var _ = _;
        return _ === 0 ? _() : _;
      }
      return _();
    }
    function _() {
      _ === 0 && (_ = !(_ & 536870912) || _ ? _() : 536870912);
      var _ = _.current;
      return (_ !== null && (_.flags |= 32), _);
    }
    function _(_, _, _) {
      (((_ === _ && (_ === 2 || _ === 9)) || _.cancelPendingCommit !== null) &&
        (_(_, 0), _(_, _, _, !1)),
        _(_, _),
        (_ & 2 && _ === _) ||
          (_ === _ && (!(_ & 2) && (_ |= _), _ === 4 && _(_, _, _, !1)), _(_)));
    }
    function _(_, _, _) {
      if (_ & 6) throw Error(_(327));
      var _ = (!_ && !(_ & 124) && (_ & _.expiredLanes) === 0) || _(_, _),
        _ = _ ? _(_, _) : _(_, _, !0),
        _ = _;
      do {
        if (_ === 0) {
          _ && !_ && _(_, _, 0, !1);
          break;
        }
        if (((_ = _.current.alternate), _ && !_(_)))
          ((_ = _(_, _, !1)), (_ = !1));
        else {
          if (_ === 2) {
            if (((_ = _), _.errorRecoveryDisabledLanes & _)) var _ = 0;
            else
              ((_ = _.pendingLanes & -536870913),
                (_ = _ === 0 ? (_ & 536870912 ? 536870912 : 0) : _));
            if (_ !== 0) {
              _ = _;
              _: {
                var _ = _;
                _ = _;
                var _ = _.current.memoizedState.isDehydrated;
                if ((_ && (_(_, _).flags |= 256), (_ = _(_, _, !1)), _ !== 2)) {
                  if (_ && !_) {
                    ((_.errorRecoveryDisabledLanes |= _), (_ |= _), (_ = 4));
                    break _;
                  }
                  ((_ = _),
                    (_ = _),
                    _ !== null && (_ === null ? (_ = _) : _.push.apply(_, _)));
                }
                _ = _;
              }
              if (((_ = !1), _ !== 2)) continue;
            }
          }
          if (_ === 1) {
            (_(_, 0), _(_, _, 0, !0));
            break;
          }
          _: {
            switch (((_ = _), (_ = _), _)) {
              case 0:
              case 1:
                throw Error(_(345));
              case 4:
                if ((_ & 4194048) !== _) break;
              case 6:
                _(_, _, _, !_);
                break _;
              case 2:
                _ = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(_(329));
            }
            if ((_ & 62914560) === _ && ((_ = _ + 300 - _()), 10 < _)) {
              if ((_(_, _, _, !_), _(_, 0, !0) !== 0)) break _;
              _.timeoutHandle = _(
                _.bind(null, _, _, _, _, _, _, _, _, _, _, _, 2, -0, 0),
                _,
              );
              break _;
            }
            _(_, _, _, _, _, _, _, _, _, _, _, 0, -0, 0);
          }
          break;
        }
      } while (1);
      _(_);
    }
    function _(_, _, _, _, _, _, _, _, _, _, _, _, _, _) {
      ((_.timeoutHandle = -1),
        (_ = _.subtreeFlags),
        (_ & 8192 || (_ & 16785408) == 16785408) &&
        ((_ = {
          stylesheets: null,
          count: 0,
          unsuspend: _,
        }),
        _(_),
        (_ = _()),
        _ !== null)
          ? ((_.cancelPendingCommit = _(
              _.bind(null, _, _, _, _, _, _, _, _, _, _, 1, _, _),
            )),
            _(_, _, _, !_))
          : _(_, _, _, _, _, _, _, _, _));
    }
    function _(_) {
      for (var _ = _; ;) {
        var _ = _.tag;
        if (
          (_ === 0 || _ === 11 || _ === 15) &&
          _.flags & 16384 &&
          ((_ = _.updateQueue), _ !== null && ((_ = _.stores), _ !== null))
        )
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_],
              _ = _.getSnapshot;
            _ = _.value;
            try {
              if (!_(_(), _)) return !1;
            } catch {
              return !1;
            }
          }
        if (((_ = _.child), _.subtreeFlags & 16384 && _ !== null))
          ((_.return = _), (_ = _));
        else {
          if (_ === _) break;
          for (; _.sibling === null;) {
            if (_.return === null || _.return === _) return !0;
            _ = _.return;
          }
          ((_.sibling.return = _.return), (_ = _.sibling));
        }
      }
      return !0;
    }
    function _(_, _, _, _) {
      ((_ &= ~_),
        (_ &= ~_),
        (_.suspendedLanes |= _),
        (_.pingedLanes &= ~_),
        _ && (_.warmLanes |= _),
        (_ = _.expirationTimes));
      for (var _ = _; 0 < _;) {
        var _ = 31 - _(_),
          _ = 1 << _;
        ((_[_] = -1), (_ &= ~_));
      }
      _ !== 0 && _(_, _, _);
    }
    function _() {
      return _ & 6 ? !0 : (_(0, !1), !1);
    }
    function _() {
      if (_ !== null) {
        if (_ === 0) var _ = _.return;
        else ((_ = _), (_ = _ = null), _(_), (_ = null), (_ = 0), (_ = _));
        for (; _ !== null;) (_(_.alternate, _), (_ = _.return));
        _ = null;
      }
    }
    function _(_, _) {
      var _ = _.timeoutHandle;
      (_ !== -1 && ((_.timeoutHandle = -1), _(_)),
        (_ = _.cancelPendingCommit),
        _ !== null && ((_.cancelPendingCommit = null), _()),
        _(),
        (_ = _),
        (_ = _ = _(_.current, null)),
        (_ = _),
        (_ = 0),
        (_ = null),
        (_ = !1),
        (_ = _(_, _)),
        (_ = !1),
        (_ = _ = _ = _ = _ = _ = 0),
        (_ = _ = null),
        (_ = !1),
        _ & 8 && (_ |= _ & 32));
      var _ = _.entangledLanes;
      if (_ !== 0)
        for (_ = _.entanglements, _ &= _; 0 < _;) {
          var _ = 31 - _(_),
            _ = 1 << _;
          ((_ |= _[_]), (_ &= ~_));
        }
      return ((_ = _), _(), _);
    }
    function _(_, _) {
      ((_ = null),
        (_._ = _),
        _ === _ || _ === _
          ? ((_ = _()), (_ = 3))
          : _ === _
            ? ((_ = _()), (_ = 4))
            : (_ =
                _ === _
                  ? 8
                  : typeof _ == `object` && _ && typeof _.then == `function`
                    ? 6
                    : 1),
        (_ = _),
        _ === null && ((_ = 1), _(_, _(_, _.current))));
    }
    function _() {
      var _ = _._;
      return ((_._ = _), _ === null ? _ : _);
    }
    function _() {
      var _ = _._;
      return ((_._ = _), _);
    }
    function _() {
      ((_ = 4),
        _ || ((_ & 4194048) !== _ && _.current !== null) || (_ = !0),
        (!(_ & 134217727) && !(_ & 134217727)) || _ === null || _(_, _, _, !1));
    }
    function _(_, _, _) {
      var _ = _;
      _ |= 2;
      var _ = _(),
        _ = _();
      ((_ !== _ || _ !== _) && ((_ = null), _(_, _)), (_ = !1));
      var _ = _;
      _: do
        try {
          if (_ !== 0 && _ !== null) {
            var _ = _,
              _ = _;
            switch (_) {
              case 8:
                (_(), (_ = 6));
                break _;
              case 3:
              case 2:
              case 9:
              case 6:
                _.current === null && (_ = !0);
                var _ = _;
                if (((_ = 0), (_ = null), _(_, _, _, _), _ && _)) {
                  _ = 0;
                  break _;
                }
                break;
              default:
                ((_ = _), (_ = 0), (_ = null), _(_, _, _, _));
            }
          }
          (_(), (_ = _));
          break;
        } catch (_) {
          _(_, _);
        }
      while (1);
      return (
        _ && _.shellSuspendCounter++,
        (_ = _ = null),
        (_ = _),
        (_._ = _),
        (_._ = _),
        _ === null && ((_ = null), (_ = 0), _()),
        _
      );
    }
    function _() {
      for (; _ !== null;) _(_);
    }
    function _(_, _) {
      var _ = _;
      _ |= 2;
      var _ = _(),
        _ = _();
      _ !== _ || _ !== _
        ? ((_ = null), (_ = _() + 500), _(_, _))
        : (_ = _(_, _));
      _: do
        try {
          if (_ !== 0 && _ !== null) {
            _ = _;
            var _ = _;
            _: switch (_) {
              case 1:
                ((_ = 0), (_ = null), _(_, _, _, 1));
                break;
              case 2:
              case 9:
                if (_(_)) {
                  ((_ = 0), (_ = null), _(_));
                  break;
                }
                ((_ = function () {
                  ((_ !== 2 && _ !== 9) || _ !== _ || (_ = 7), _(_));
                }),
                  _.then(_, _));
                break _;
              case 3:
                _ = 7;
                break _;
              case 4:
                _ = 5;
                break _;
              case 7:
                _(_)
                  ? ((_ = 0), (_ = null), _(_))
                  : ((_ = 0), (_ = null), _(_, _, _, 7));
                break;
              case 5:
                var _ = null;
                switch (_.tag) {
                  case 26:
                    _ = _.memoizedState;
                  case 5:
                  case 27:
                    var _ = _;
                    if (!_ || _(_)) {
                      ((_ = 0), (_ = null));
                      var _ = _.sibling;
                      if (_ !== null) _ = _;
                      else {
                        var _ = _.return;
                        _ === null ? (_ = null) : ((_ = _), _(_));
                      }
                      break _;
                    }
                }
                ((_ = 0), (_ = null), _(_, _, _, 5));
                break;
              case 6:
                ((_ = 0), (_ = null), _(_, _, _, 6));
                break;
              case 8:
                (_(), (_ = 6));
                break _;
              default:
                throw Error(_(462));
            }
          }
          _();
          break;
        } catch (_) {
          _(_, _);
        }
      while (1);
      return (
        (_ = _ = null),
        (_._ = _),
        (_._ = _),
        (_ = _),
        _ === null ? ((_ = null), (_ = 0), _(), _) : 0
      );
    }
    function _() {
      for (; _ !== null && !_();) _(_);
    }
    function _(_) {
      var _ = _(_.alternate, _, _);
      ((_.memoizedProps = _.pendingProps), _ === null ? _(_) : (_ = _));
    }
    function _(_) {
      var _ = _,
        _ = _.alternate;
      switch (_.tag) {
        case 15:
        case 0:
          _ = _(_, _, _.pendingProps, _.type, void 0, _);
          break;
        case 11:
          _ = _(_, _, _.pendingProps, _.type.render, _.ref, _);
          break;
        case 5:
          _(_);
        default:
          (_(_, _), (_ = _ = _(_, _)), (_ = _(_, _, _)));
      }
      ((_.memoizedProps = _.pendingProps), _ === null ? _(_) : (_ = _));
    }
    function _(_, _, _, _) {
      ((_ = _ = null), _(_), (_ = null), (_ = 0));
      var _ = _.return;
      try {
        if (_(_, _, _, _, _)) {
          ((_ = 1), _(_, _(_, _.current)), (_ = null));
          return;
        }
      } catch (_) {
        if (_ !== null) throw ((_ = _), _);
        ((_ = 1), _(_, _(_, _.current)), (_ = null));
        return;
      }
      _.flags & 32768
        ? (_ || _ === 1
            ? (_ = !0)
            : _ || _ & 536870912
              ? (_ = !1)
              : ((_ = _ = !0),
                (_ === 2 || _ === 9 || _ === 3 || _ === 6) &&
                  ((_ = _.current),
                  _ !== null && _.tag === 13 && (_.flags |= 16384))),
          _(_, _))
        : _(_);
    }
    function _(_) {
      var _ = _;
      do {
        if (_.flags & 32768) {
          _(_, _);
          return;
        }
        _ = _.return;
        var _ = _(_.alternate, _, _);
        if (_ !== null) {
          _ = _;
          return;
        }
        if (((_ = _.sibling), _ !== null)) {
          _ = _;
          return;
        }
        _ = _ = _;
      } while (_ !== null);
      _ === 0 && (_ = 5);
    }
    function _(_, _) {
      do {
        var _ = _(_.alternate, _);
        if (_ !== null) {
          ((_.flags &= 32767), (_ = _));
          return;
        }
        if (
          ((_ = _.return),
          _ !== null &&
            ((_.flags |= 32768), (_.subtreeFlags = 0), (_.deletions = null)),
          !_ && ((_ = _.sibling), _ !== null))
        ) {
          _ = _;
          return;
        }
        _ = _ = _;
      } while (_ !== null);
      ((_ = 6), (_ = null));
    }
    function _(_, _, _, _, _, _, _, _, _) {
      _.cancelPendingCommit = null;
      do _();
      while (_ !== 0);
      if (_ & 6) throw Error(_(327));
      if (_ !== null) {
        if (_ === _.current) throw Error(_(177));
        if (
          ((_ = _.lanes | _.childLanes),
          (_ |= _),
          _(_, _, _, _, _, _),
          _ === _ && ((_ = _ = null), (_ = 0)),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          _.subtreeFlags & 10256 || _.flags & 10256
            ? ((_.callbackNode = null),
              (_.callbackPriority = 0),
              _(_, function () {
                return (_(!0), null);
              }))
            : ((_.callbackNode = null), (_.callbackPriority = 0)),
          (_ = !!(_.flags & 13878)),
          _.subtreeFlags & 13878 || _)
        ) {
          ((_ = _._), (_._ = null), (_ = _._), (_._ = 2), (_ = _), (_ |= 4));
          try {
            _(_, _, _);
          } finally {
            ((_ = _), (_._ = _), (_._ = _));
          }
        }
        ((_ = 1), _(), _(), _());
      }
    }
    function _() {
      if (_ === 1) {
        _ = 0;
        var _ = _,
          _ = _,
          _ = !!(_.flags & 13878);
        if (_.subtreeFlags & 13878 || _) {
          ((_ = _._), (_._ = null));
          var _ = _._;
          _._ = 2;
          var _ = _;
          _ |= 4;
          try {
            _(_, _);
            var _ = _,
              _ = _(_.containerInfo),
              _ = _.focusedElem,
              _ = _.selectionRange;
            if (
              _ !== _ &&
              _ &&
              _.ownerDocument &&
              _(_.ownerDocument.documentElement, _)
            ) {
              if (_ !== null && _(_)) {
                var _ = _.start,
                  _ = _.end;
                if ((_ === void 0 && (_ = _), `selectionStart` in _))
                  ((_.selectionStart = _),
                    (_.selectionEnd = Math.min(_, _.value.length)));
                else {
                  var _ = _.ownerDocument || document,
                    _ = (_ && _.defaultView) || window;
                  if (_.getSelection) {
                    var _ = _.getSelection(),
                      _ = _.textContent.length,
                      _ = Math.min(_.start, _),
                      _ = _.end === void 0 ? _ : Math.min(_.end, _);
                    !_.extend && _ > _ && ((_ = _), (_ = _), (_ = _));
                    var _ = _(_, _),
                      _ = _(_, _);
                    if (
                      _ &&
                      _ &&
                      (_.rangeCount !== 1 ||
                        _.anchorNode !== _.node ||
                        _.anchorOffset !== _.offset ||
                        _.focusNode !== _.node ||
                        _.focusOffset !== _.offset)
                    ) {
                      var _ = _.createRange();
                      (_.setStart(_.node, _.offset),
                        _.removeAllRanges(),
                        _ > _
                          ? (_.addRange(_), _.extend(_.node, _.offset))
                          : (_.setEnd(_.node, _.offset), _.addRange(_)));
                    }
                  }
                }
              }
              for (_ = [], _ = _; (_ = _.parentNode);)
                _.nodeType === 1 &&
                  _.push({
                    element: _,
                    left: _.scrollLeft,
                    top: _.scrollTop,
                  });
              for (
                typeof _.focus == `function` && _.focus(), _ = 0;
                _ < _.length;
                _++
              ) {
                var _ = _[_];
                ((_.element.scrollLeft = _.left),
                  (_.element.scrollTop = _.top));
              }
            }
            ((_ = !!_), (_ = _ = null));
          } finally {
            ((_ = _), (_._ = _), (_._ = _));
          }
        }
        ((_.current = _), (_ = 2));
      }
    }
    function _() {
      if (_ === 2) {
        _ = 0;
        var _ = _,
          _ = _,
          _ = !!(_.flags & 8772);
        if (_.subtreeFlags & 8772 || _) {
          ((_ = _._), (_._ = null));
          var _ = _._;
          _._ = 2;
          var _ = _;
          _ |= 4;
          try {
            _(_, _.alternate, _);
          } finally {
            ((_ = _), (_._ = _), (_._ = _));
          }
        }
        _ = 3;
      }
    }
    function _() {
      if (_ === 4 || _ === 3) {
        ((_ = 0), _());
        var _ = _,
          _ = _,
          _ = _,
          _ = _;
        _.subtreeFlags & 10256 || _.flags & 10256
          ? (_ = 5)
          : ((_ = 0), (_ = _ = null), _(_, _.pendingLanes));
        var _ = _.pendingLanes;
        if (
          (_ === 0 && (_ = null),
          _(_),
          (_ = _.stateNode),
          _ && typeof _.onCommitFiberRoot == `function`)
        )
          try {
            _.onCommitFiberRoot(_, _, void 0, (_.current.flags & 128) == 128);
          } catch {}
        if (_ !== null) {
          ((_ = _._), (_ = _._), (_._ = 2), (_._ = null));
          try {
            for (var _ = _.onRecoverableError, _ = 0; _ < _.length; _++) {
              var _ = _[_];
              _(_.value, {
                componentStack: _.stack,
              });
            }
          } finally {
            ((_._ = _), (_._ = _));
          }
        }
        (_ & 3 && _(),
          _(_),
          (_ = _.pendingLanes),
          _ & 4194090 && _ & 42
            ? _ === _
              ? _++
              : ((_ = 0), (_ = _))
            : (_ = 0),
          _(0, !1));
      }
    }
    function _(_, _) {
      (_.pooledCacheLanes &= _) === 0 &&
        ((_ = _.pooledCache), _ != null && ((_.pooledCache = null), _(_)));
    }
    function _(_) {
      return (_(), _(), _(), _(_));
    }
    function _() {
      if (_ !== 5) return !1;
      var _ = _,
        _ = _;
      _ = 0;
      var _ = _(_),
        _ = _._,
        _ = _._;
      try {
        ((_._ = 32 > _ ? 32 : _), (_._ = null), (_ = _), (_ = null));
        var _ = _,
          _ = _;
        if (((_ = 0), (_ = _ = null), (_ = 0), _ & 6)) throw Error(_(331));
        var _ = _;
        if (
          ((_ |= 4),
          _(_.current),
          _(_, _.current, _, _),
          (_ = _),
          _(0, !1),
          _ && typeof _.onPostCommitFiberRoot == `function`)
        )
          try {
            _.onPostCommitFiberRoot(_, _);
          } catch {}
        return !0;
      } finally {
        ((_._ = _), (_._ = _), _(_, _));
      }
    }
    function _(_, _, _) {
      ((_ = _(_, _)),
        (_ = _(_.stateNode, _, 2)),
        (_ = _(_, _, 2)),
        _ !== null && (_(_, 2), _(_)));
    }
    function _(_, _, _) {
      if (_.tag === 3) _(_, _, _);
      else
        for (; _ !== null;) {
          if (_.tag === 3) {
            _(_, _, _);
            break;
          }
          if (_.tag === 1) {
            var _ = _.stateNode;
            if (
              typeof _.type.getDerivedStateFromError == `function` ||
              (typeof _.componentDidCatch == `function` &&
                (_ === null || !_.has(_)))
            ) {
              ((_ = _(_, _)),
                (_ = _(2)),
                (_ = _(_, _, 2)),
                _ !== null && (_(_, _, _, _), _(_, 2), _(_)));
              break;
            }
          }
          _ = _.return;
        }
    }
    function _(_, _, _) {
      var _ = _.pingCache;
      if (_ === null) {
        _ = _.pingCache = new _();
        var _ = new Set();
        _.set(_, _);
      } else ((_ = _.get(_)), _ === void 0 && ((_ = new Set()), _.set(_, _)));
      _.has(_) ||
        ((_ = !0), _.add(_), (_ = _.bind(null, _, _, _)), _.then(_, _));
    }
    function _(_, _, _) {
      var _ = _.pingCache;
      (_ !== null && _.delete(_),
        (_.pingedLanes |= _.suspendedLanes & _),
        (_.warmLanes &= ~_),
        _ === _ &&
          (_ & _) === _ &&
          (_ === 4 || (_ === 3 && (_ & 62914560) === _ && 300 > _() - _)
            ? !(_ & 2) && _(_, 0)
            : (_ |= _),
          _ === _ && (_ = 0)),
        _(_));
    }
    function _(_, _) {
      (_ === 0 && (_ = _()), (_ = _(_, _)), _ !== null && (_(_, _), _(_)));
    }
    function _(_) {
      var _ = _.memoizedState,
        _ = 0;
      (_ !== null && (_ = _.retryLane), _(_, _));
    }
    function _(_, _) {
      var _ = 0;
      switch (_.tag) {
        case 13:
          var _ = _.stateNode,
            _ = _.memoizedState;
          _ !== null && (_ = _.retryLane);
          break;
        case 19:
          _ = _.stateNode;
          break;
        case 22:
          _ = _.stateNode._retryCache;
          break;
        default:
          throw Error(_(314));
      }
      (_ !== null && _.delete(_), _(_, _));
    }
    function _(_, _) {
      return _(_, _);
    }
    var _ = null,
      _ = null,
      _ = !1,
      _ = !1,
      _ = !1,
      _ = 0;
    function _(_) {
      (_ !== _ &&
        _.next === null &&
        (_ === null ? (_ = _ = _) : (_ = _.next = _)),
        (_ = !0),
        _ || ((_ = !0), _()));
    }
    function _(_, _) {
      if (!_ && _) {
        _ = !0;
        do
          for (var _ = !1, _ = _; _ !== null;) {
            if (!_) {
              if (_ !== 0) {
                var _ = _.pendingLanes;
                if (_ === 0) var _ = 0;
                else {
                  var _ = _.suspendedLanes,
                    _ = _.pingedLanes;
                  ((_ = (1 << (31 - _(42 | _) + 1)) - 1),
                    (_ &= _ & ~(_ & ~_)),
                    (_ = _ & 201326741 ? (_ & 201326741) | 1 : _ ? _ | 2 : 0));
                }
                _ !== 0 && ((_ = !0), _(_, _));
              } else
                ((_ = _),
                  (_ = _(
                    _,
                    _ === _ ? _ : 0,
                    _.cancelPendingCommit !== null || _.timeoutHandle !== -1,
                  )),
                  !(_ & 3) || _(_, _) || ((_ = !0), _(_, _)));
            }
            _ = _.next;
          }
        while (_);
        _ = !1;
      }
    }
    function _() {
      _();
    }
    function _() {
      _ = _ = !1;
      var _ = 0;
      _ !== 0 && (_() && (_ = _), (_ = 0));
      for (var _ = _(), _ = null, _ = _; _ !== null;) {
        var _ = _.next,
          _ = _(_, _);
        (_ === 0
          ? ((_.next = null),
            _ === null ? (_ = _) : (_.next = _),
            _ === null && (_ = _))
          : ((_ = _), (_ !== 0 || _ & 3) && (_ = !0)),
          (_ = _));
      }
      _(_, !1);
    }
    function _(_, _) {
      for (
        var _ = _.suspendedLanes,
          _ = _.pingedLanes,
          _ = _.expirationTimes,
          _ = _.pendingLanes & -62914561;
        0 < _;
      ) {
        var _ = 31 - _(_),
          _ = 1 << _,
          _ = _[_];
        (_ === -1
          ? ((_ & _) === 0 || (_ & _) !== 0) && (_[_] = _(_, _))
          : _ <= _ && (_.expiredLanes |= _),
          (_ &= ~_));
      }
      if (
        ((_ = _),
        (_ = _),
        (_ = _(
          _,
          _ === _ ? _ : 0,
          _.cancelPendingCommit !== null || _.timeoutHandle !== -1,
        )),
        (_ = _.callbackNode),
        _ === 0 ||
          (_ === _ && (_ === 2 || _ === 9)) ||
          _.cancelPendingCommit !== null)
      )
        return (
          _ !== null && _ !== null && _(_),
          (_.callbackNode = null),
          (_.callbackPriority = 0)
        );
      if (!(_ & 3) || _(_, _)) {
        if (((_ = _ & -_), _ === _.callbackPriority)) return _;
        switch ((_ !== null && _(_), _(_))) {
          case 2:
          case 8:
            _ = _;
            break;
          case 32:
            _ = _;
            break;
          case 268435456:
            _ = _;
            break;
          default:
            _ = _;
        }
        return (
          (_ = _.bind(null, _)),
          (_ = _(_, _)),
          (_.callbackPriority = _),
          (_.callbackNode = _),
          _
        );
      }
      return (
        _ !== null && _ !== null && _(_),
        (_.callbackPriority = 2),
        (_.callbackNode = null),
        2
      );
    }
    function _(_, _) {
      if (_ !== 0 && _ !== 5)
        return ((_.callbackNode = null), (_.callbackPriority = 0), null);
      var _ = _.callbackNode;
      if (_(!0) && _.callbackNode !== _) return null;
      var _ = _;
      return (
        (_ = _(
          _,
          _ === _ ? _ : 0,
          _.cancelPendingCommit !== null || _.timeoutHandle !== -1,
        )),
        _ === 0
          ? null
          : (_(_, _, _),
            _(_, _()),
            _.callbackNode != null && _.callbackNode === _
              ? _.bind(null, _)
              : null)
      );
    }
    function _(_, _) {
      if (_()) return null;
      _(_, _, !0);
    }
    function _() {
      _(function () {
        _ & 6 ? _(_, _) : _();
      });
    }
    function _() {
      return (_ === 0 && (_ = _()), _);
    }
    function _(_) {
      return _ == null || typeof _ == `symbol` || typeof _ == `boolean`
        ? null
        : typeof _ == `function`
          ? _
          : _(`` + _);
    }
    function _(_, _) {
      var _ = _.ownerDocument.createElement(`input`);
      return (
        (_.name = _.name),
        (_.value = _.value),
        _._ && _.setAttribute(`form`, _._),
        _.parentNode.insertBefore(_, _),
        (_ = new FormData(_)),
        _.parentNode.removeChild(_),
        _
      );
    }
    function _(_, _, _, _, _) {
      if (_ === `submit` && _ && _.stateNode === _) {
        var _ = _((_[_] || null).action),
          _ = _.submitter;
        _ &&
          ((_ = (_ = _[_] || null)
            ? _(_.formAction)
            : _.getAttribute(`formAction`)),
          _ !== null && ((_ = _), (_ = null)));
        var _ = new _(`action`, `action`, null, _, _);
        _.push({
          event: _,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (_.defaultPrevented) {
                  if (_ !== 0) {
                    var _ = _ ? _(_, _) : new FormData(_);
                    _(
                      _,
                      {
                        pending: !0,
                        data: _,
                        method: _.method,
                        action: _,
                      },
                      null,
                      _,
                    );
                  }
                } else
                  typeof _ == `function` &&
                    (_.preventDefault(),
                    (_ = _ ? _(_, _) : new FormData(_)),
                    _(
                      _,
                      {
                        pending: !0,
                        data: _,
                        method: _.method,
                        action: _,
                      },
                      _,
                      _,
                    ));
              },
              currentTarget: _,
            },
          ],
        });
      }
    }
    for (var _ = 0; _ < _.length; _++) {
      var _ = _[_];
      _(_.toLowerCase(), `on` + (_[0].toUpperCase() + _.slice(1)));
    }
    (_(_, `onAnimationEnd`),
      _(_, `onAnimationIteration`),
      _(_, `onAnimationStart`),
      _(`dblclick`, `onDoubleClick`),
      _(`focusin`, `onFocus`),
      _(`focusout`, `onBlur`),
      _(_, `onTransitionRun`),
      _(_, `onTransitionStart`),
      _(_, `onTransitionCancel`),
      _(_, `onTransitionEnd`),
      _(`onMouseEnter`, [`mouseout`, `mouseover`]),
      _(`onMouseLeave`, [`mouseout`, `mouseover`]),
      _(`onPointerEnter`, [`pointerout`, `pointerover`]),
      _(`onPointerLeave`, [`pointerout`, `pointerover`]),
      _(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      _(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      _(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      _(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      _(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      _(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var _ =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      _ = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(_),
      );
    function _(_, _) {
      _ = !!(_ & 4);
      for (var _ = 0; _ < _.length; _++) {
        var _ = _[_],
          _ = _.event;
        _ = _.listeners;
        _: {
          var _ = void 0;
          if (_)
            for (var _ = _.length - 1; 0 <= _; _--) {
              var _ = _[_],
                _ = _.instance,
                _ = _.currentTarget;
              if (((_ = _.listener), _ !== _ && _.isPropagationStopped()))
                break _;
              ((_ = _), (_.currentTarget = _));
              try {
                _(_);
              } catch (_) {
                _(_);
              }
              ((_.currentTarget = null), (_ = _));
            }
          else
            for (_ = 0; _ < _.length; _++) {
              if (
                ((_ = _[_]),
                (_ = _.instance),
                (_ = _.currentTarget),
                (_ = _.listener),
                _ !== _ && _.isPropagationStopped())
              )
                break _;
              ((_ = _), (_.currentTarget = _));
              try {
                _(_);
              } catch (_) {
                _(_);
              }
              ((_.currentTarget = null), (_ = _));
            }
        }
      }
    }
    function _(_, _) {
      var _ = _[_];
      _ === void 0 && (_ = _[_] = new Set());
      var _ = _ + `__bubble`;
      _.has(_) || (_(_, _, 2, !1), _.add(_));
    }
    function _(_, _, _) {
      var _ = 0;
      (_ && (_ |= 4), _(_, _, _, _));
    }
    var _ = `_reactListening` + Math.random().toString(36).slice(2);
    function _(_) {
      if (!_[_]) {
        ((_[_] = !0),
          _.forEach(function (_) {
            _ !== `selectionchange` && (_.has(_) || _(_, !1, _), _(_, !0, _));
          }));
        var _ = _.nodeType === 9 ? _ : _.ownerDocument;
        _ === null || _[_] || ((_[_] = !0), _(`selectionchange`, !1, _));
      }
    }
    function _(_, _, _, _) {
      switch (_(_)) {
        case 2:
          var _ = _;
          break;
        case 8:
          _ = _;
          break;
        default:
          _ = _;
      }
      ((_ = _.bind(null, _, _, _)),
        (_ = void 0),
        !_ ||
          (_ !== `touchstart` && _ !== `touchmove` && _ !== `wheel`) ||
          (_ = !0),
        _
          ? _ === void 0
            ? _.addEventListener(_, _, !0)
            : _.addEventListener(_, _, {
                capture: !0,
                passive: _,
              })
          : _ === void 0
            ? _.addEventListener(_, _, !1)
            : _.addEventListener(_, _, {
                passive: _,
              }));
    }
    function _(_, _, _, _, _) {
      var _ = _;
      if (!(_ & 1) && !(_ & 2) && _ !== null)
        _: for (;;) {
          if (_ === null) return;
          var _ = _.tag;
          if (_ === 3 || _ === 4) {
            var _ = _.stateNode.containerInfo;
            if (_ === _) break;
            if (_ === 4)
              for (_ = _.return; _ !== null;) {
                var _ = _.tag;
                if ((_ === 3 || _ === 4) && _.stateNode.containerInfo === _)
                  return;
                _ = _.return;
              }
            for (; _ !== null;) {
              if (((_ = _(_)), _ === null)) return;
              if (((_ = _.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
                _ = _ = _;
                continue _;
              }
              _ = _.parentNode;
            }
          }
          _ = _.return;
        }
      _(function () {
        var _ = _,
          _ = _(_),
          _ = [];
        _: {
          var _ = _.get(_);
          if (_ !== void 0) {
            var _ = _,
              _ = _;
            switch (_) {
              case `keypress`:
                if (_(_) === 0) break _;
              case `keydown`:
              case `keyup`:
                _ = _;
                break;
              case `focusin`:
                ((_ = `focus`), (_ = _));
                break;
              case `focusout`:
                ((_ = `blur`), (_ = _));
                break;
              case `beforeblur`:
              case `afterblur`:
                _ = _;
                break;
              case `click`:
                if (_.button === 2) break _;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                _ = _;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                _ = _;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                _ = _;
                break;
              case _:
              case _:
              case _:
                _ = _;
                break;
              case _:
                _ = _;
                break;
              case `scroll`:
              case `scrollend`:
                _ = _;
                break;
              case `wheel`:
                _ = _;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                _ = _;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                _ = _;
                break;
              case `toggle`:
              case `beforetoggle`:
                _ = _;
            }
            var _ = !!(_ & 4),
              _ = !_ && (_ === `scroll` || _ === `scrollend`),
              _ = _ ? (_ === null ? null : _ + `Capture`) : _;
            _ = [];
            for (var _ = _, _; _ !== null;) {
              var _ = _;
              if (
                ((_ = _.stateNode),
                (_ = _.tag),
                (_ !== 5 && _ !== 26 && _ !== 27) ||
                  _ === null ||
                  _ === null ||
                  ((_ = _(_, _)), _ != null && _.push(_(_, _, _))),
                _)
              )
                break;
              _ = _.return;
            }
            0 < _.length &&
              ((_ = new _(_, _, null, _, _)),
              _.push({
                event: _,
                listeners: _,
              }));
          }
        }
        if (!(_ & 7)) {
          _: {
            if (
              ((_ = _ === `mouseover` || _ === `pointerover`),
              (_ = _ === `mouseout` || _ === `pointerout`),
              _ &&
                _ !== _ &&
                (_ = _.relatedTarget || _.fromElement) &&
                (_(_) || _[_]))
            )
              break _;
            if (
              (_ || _) &&
              ((_ =
                _.window === _
                  ? _
                  : (_ = _.ownerDocument)
                    ? _.defaultView || _.parentWindow
                    : window),
              _
                ? ((_ = _.relatedTarget || _.toElement),
                  (_ = _),
                  (_ = _ ? _(_) : null),
                  _ !== null &&
                    ((_ = _(_)),
                    (_ = _.tag),
                    _ !== _ || (_ !== 5 && _ !== 27 && _ !== 6)) &&
                    (_ = null))
                : ((_ = null), (_ = _)),
              _ !== _)
            ) {
              if (
                ((_ = _),
                (_ = `onMouseLeave`),
                (_ = `onMouseEnter`),
                (_ = `mouse`),
                (_ === `pointerout` || _ === `pointerover`) &&
                  ((_ = _),
                  (_ = `onPointerLeave`),
                  (_ = `onPointerEnter`),
                  (_ = `pointer`)),
                (_ = _ == null ? _ : _(_)),
                (_ = _ == null ? _ : _(_)),
                (_ = new _(_, _ + `leave`, _, _, _)),
                (_.target = _),
                (_.relatedTarget = _),
                (_ = null),
                _(_) === _ &&
                  ((_ = new _(_, _ + `enter`, _, _, _)),
                  (_.target = _),
                  (_.relatedTarget = _),
                  (_ = _)),
                (_ = _),
                _ && _)
              )
                _: {
                  for (_ = _, _ = _, _ = 0, _ = _; _; _ = _(_)) _++;
                  for (_ = 0, _ = _; _; _ = _(_)) _++;
                  for (; 0 < _ - _;) ((_ = _(_)), _--);
                  for (; 0 < _ - _;) ((_ = _(_)), _--);
                  for (; _--;) {
                    if (_ === _ || (_ !== null && _ === _.alternate)) break _;
                    ((_ = _(_)), (_ = _(_)));
                  }
                  _ = null;
                }
              else _ = null;
              (_ !== null && _(_, _, _, _, !1),
                _ !== null && _ !== null && _(_, _, _, _, !0));
            }
          }
          _: {
            if (
              ((_ = _ ? _(_) : window),
              (_ = _.nodeName && _.nodeName.toLowerCase()),
              _ === `select` || (_ === `input` && _.type === `file`))
            )
              var _ = _;
            else if (_(_)) {
              if (_) _ = _;
              else {
                _ = _;
                var _ = _;
              }
            } else
              ((_ = _.nodeName),
                !_ ||
                _.toLowerCase() !== `input` ||
                (_.type !== `checkbox` && _.type !== `radio`)
                  ? _ && _(_.elementType) && (_ = _)
                  : (_ = _));
            if ((_ &&= _(_, _))) {
              _(_, _, _, _);
              break _;
            }
            (_ && _(_, _, _),
              _ === `focusout` &&
                _ &&
                _.type === `number` &&
                _.memoizedProps.value != null &&
                _(_, `number`, _.value));
          }
          switch (((_ = _ ? _(_) : window), _)) {
            case `focusin`:
              (_(_) || _.contentEditable === `true`) &&
                ((_ = _), (_ = _), (_ = null));
              break;
            case `focusout`:
              _ = _ = _ = null;
              break;
            case `mousedown`:
              _ = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((_ = !1), _(_, _, _));
              break;
            case `selectionchange`:
              if (_) break;
            case `keydown`:
            case `keyup`:
              _(_, _, _);
          }
          var _;
          if (_)
            _: {
              switch (_) {
                case `compositionstart`:
                  var _ = `onCompositionStart`;
                  break _;
                case `compositionend`:
                  _ = `onCompositionEnd`;
                  break _;
                case `compositionupdate`:
                  _ = `onCompositionUpdate`;
                  break _;
              }
              _ = void 0;
            }
          else
            _
              ? _(_, _) && (_ = `onCompositionEnd`)
              : _ === `keydown` &&
                _.keyCode === 229 &&
                (_ = `onCompositionStart`);
          (_ &&
            (_ &&
              _.locale !== `ko` &&
              (_ || _ !== `onCompositionStart`
                ? _ === `onCompositionEnd` && _ && (_ = _())
                : ((_ = _),
                  (_ = `value` in _ ? _.value : _.textContent),
                  (_ = !0))),
            (_ = _(_, _)),
            0 < _.length &&
              ((_ = new _(_, _, null, _, _)),
              _.push({
                event: _,
                listeners: _,
              }),
              _ ? (_.data = _) : ((_ = _(_)), _ !== null && (_.data = _)))),
            (_ = _ ? _(_, _) : _(_, _)) &&
              ((_ = _(_, `onBeforeInput`)),
              0 < _.length &&
                ((_ = new _(`onBeforeInput`, `beforeinput`, null, _, _)),
                _.push({
                  event: _,
                  listeners: _,
                }),
                (_.data = _))),
            _(_, _, _, _, _));
        }
        _(_, _);
      });
    }
    function _(_, _, _) {
      return {
        instance: _,
        listener: _,
        currentTarget: _,
      };
    }
    function _(_, _) {
      for (var _ = _ + `Capture`, _ = []; _ !== null;) {
        var _ = _,
          _ = _.stateNode;
        if (
          ((_ = _.tag),
          (_ !== 5 && _ !== 26 && _ !== 27) ||
            _ === null ||
            ((_ = _(_, _)),
            _ != null && _.unshift(_(_, _, _)),
            (_ = _(_, _)),
            _ != null && _.push(_(_, _, _))),
          _.tag === 3)
        )
          return _;
        _ = _.return;
      }
      return [];
    }
    function _(_) {
      if (_ === null) return null;
      do _ = _.return;
      while (_ && _.tag !== 5 && _.tag !== 27);
      return _ || null;
    }
    function _(_, _, _, _, _) {
      for (var _ = _._reactName, _ = []; _ !== null && _ !== _;) {
        var _ = _,
          _ = _.alternate,
          _ = _.stateNode;
        if (((_ = _.tag), _ !== null && _ === _)) break;
        ((_ !== 5 && _ !== 26 && _ !== 27) ||
          _ === null ||
          ((_ = _),
          _
            ? ((_ = _(_, _)), _ != null && _.unshift(_(_, _, _)))
            : _ || ((_ = _(_, _)), _ != null && _.push(_(_, _, _)))),
          (_ = _.return));
      }
      _.length !== 0 &&
        _.push({
          event: _,
          listeners: _,
        });
    }
    var _ = /\r\n?/g,
      _ = /\u0000|\uFFFD/g;
    function _(_) {
      return (typeof _ == `string` ? _ : `` + _)
        .replace(
          _,
          `
`,
        )
        .replace(_, ``);
    }
    function _(_, _) {
      return ((_ = _(_)), _(_) === _);
    }
    function _() {}
    function _(_, _, _, _, _, _) {
      switch (_) {
        case `children`:
          typeof _ == `string`
            ? _ === `body` || (_ === `textarea` && _ === ``) || _(_, _)
            : (typeof _ == `number` || typeof _ == `bigint`) &&
              _ !== `body` &&
              _(_, `` + _);
          break;
        case `className`:
          _(_, `class`, _);
          break;
        case `tabIndex`:
          _(_, `tabindex`, _);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          _(_, _, _);
          break;
        case `style`:
          _(_, _, _);
          break;
        case `data`:
          if (_ !== `object`) {
            _(_, `data`, _);
            break;
          }
        case `src`:
        case `href`:
          if (
            (_ === `` && (_ !== `a` || _ !== `href`)) ||
            _ == null ||
            typeof _ == `function` ||
            typeof _ == `symbol` ||
            typeof _ == `boolean`
          ) {
            _.removeAttribute(_);
            break;
          }
          ((_ = _(`` + _)), _.setAttribute(_, _));
          break;
        case `action`:
        case `formAction`:
          if (typeof _ == `function`) {
            _.setAttribute(
              _,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof _ == `function` &&
              (_ === `formAction`
                ? (_ !== `input` && _(_, _, `name`, _.name, _, null),
                  _(_, _, `formEncType`, _.formEncType, _, null),
                  _(_, _, `formMethod`, _.formMethod, _, null),
                  _(_, _, `formTarget`, _.formTarget, _, null))
                : (_(_, _, `encType`, _.encType, _, null),
                  _(_, _, `method`, _.method, _, null),
                  _(_, _, `target`, _.target, _, null))),
            _ == null || typeof _ == `symbol` || typeof _ == `boolean`)
          ) {
            _.removeAttribute(_);
            break;
          }
          ((_ = _(`` + _)), _.setAttribute(_, _));
          break;
        case `onClick`:
          _ != null && (_.onclick = _);
          break;
        case `onScroll`:
          _ != null && _(`scroll`, _);
          break;
        case `onScrollEnd`:
          _ != null && _(`scrollend`, _);
          break;
        case `dangerouslySetInnerHTML`:
          if (_ != null) {
            if (typeof _ != `object` || !(`__html` in _)) throw Error(_(61));
            if (((_ = _.__html), _ != null)) {
              if (_.children != null) throw Error(_(60));
              _.innerHTML = _;
            }
          }
          break;
        case `multiple`:
          _.multiple = _ && typeof _ != `function` && typeof _ != `symbol`;
          break;
        case `muted`:
          _.muted = _ && typeof _ != `function` && typeof _ != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            _ == null ||
            typeof _ == `function` ||
            typeof _ == `boolean` ||
            typeof _ == `symbol`
          ) {
            _.removeAttribute(`xlink:href`);
            break;
          }
          ((_ = _(`` + _)),
            _.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, _));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          _ != null && typeof _ != `function` && typeof _ != `symbol`
            ? _.setAttribute(_, `` + _)
            : _.removeAttribute(_);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          _ && typeof _ != `function` && typeof _ != `symbol`
            ? _.setAttribute(_, ``)
            : _.removeAttribute(_);
          break;
        case `capture`:
        case `download`:
          !0 === _
            ? _.setAttribute(_, ``)
            : !1 !== _ &&
                _ != null &&
                typeof _ != `function` &&
                typeof _ != `symbol`
              ? _.setAttribute(_, _)
              : _.removeAttribute(_);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          _ != null &&
          typeof _ != `function` &&
          typeof _ != `symbol` &&
          !isNaN(_) &&
          1 <= _
            ? _.setAttribute(_, _)
            : _.removeAttribute(_);
          break;
        case `rowSpan`:
        case `start`:
          _ == null ||
          typeof _ == `function` ||
          typeof _ == `symbol` ||
          isNaN(_)
            ? _.removeAttribute(_)
            : _.setAttribute(_, _);
          break;
        case `popover`:
          (_(`beforetoggle`, _), _(`toggle`, _), _(_, `popover`, _));
          break;
        case `xlinkActuate`:
          _(_, `http://www.w3.org/1999/xlink`, `xlink:actuate`, _);
          break;
        case `xlinkArcrole`:
          _(_, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, _);
          break;
        case `xlinkRole`:
          _(_, `http://www.w3.org/1999/xlink`, `xlink:role`, _);
          break;
        case `xlinkShow`:
          _(_, `http://www.w3.org/1999/xlink`, `xlink:show`, _);
          break;
        case `xlinkTitle`:
          _(_, `http://www.w3.org/1999/xlink`, `xlink:title`, _);
          break;
        case `xlinkType`:
          _(_, `http://www.w3.org/1999/xlink`, `xlink:type`, _);
          break;
        case `xmlBase`:
          _(_, `http://www.w3.org/XML/1998/namespace`, `xml:base`, _);
          break;
        case `xmlLang`:
          _(_, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, _);
          break;
        case `xmlSpace`:
          _(_, `http://www.w3.org/XML/1998/namespace`, `xml:space`, _);
          break;
        case `is`:
          _(_, `is`, _);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < _.length) ||
            (_[0] !== `o` && _[0] !== `O`) ||
            (_[1] !== `n` && _[1] !== `N`)) &&
            ((_ = _.get(_) || _), _(_, _, _));
      }
    }
    function _(_, _, _, _, _, _) {
      switch (_) {
        case `style`:
          _(_, _, _);
          break;
        case `dangerouslySetInnerHTML`:
          if (_ != null) {
            if (typeof _ != `object` || !(`__html` in _)) throw Error(_(61));
            if (((_ = _.__html), _ != null)) {
              if (_.children != null) throw Error(_(60));
              _.innerHTML = _;
            }
          }
          break;
        case `children`:
          typeof _ == `string`
            ? _(_, _)
            : (typeof _ == `number` || typeof _ == `bigint`) && _(_, `` + _);
          break;
        case `onScroll`:
          _ != null && _(`scroll`, _);
          break;
        case `onScrollEnd`:
          _ != null && _(`scrollend`, _);
          break;
        case `onClick`:
          _ != null && (_.onclick = _);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!_.hasOwnProperty(_))
            _: {
              if (
                _[0] === `o` &&
                _[1] === `n` &&
                ((_ = _.endsWith(`Capture`)),
                (_ = _.slice(2, _ ? _.length - 7 : void 0)),
                (_ = _[_] || null),
                (_ = _ == null ? null : _[_]),
                typeof _ == `function` && _.removeEventListener(_, _, _),
                typeof _ == `function`)
              ) {
                (typeof _ != `function` &&
                  _ !== null &&
                  (_ in _
                    ? (_[_] = null)
                    : _.hasAttribute(_) && _.removeAttribute(_)),
                  _.addEventListener(_, _, _));
                break _;
              }
              _ in _
                ? (_[_] = _)
                : !0 === _
                  ? _.setAttribute(_, ``)
                  : _(_, _, _);
            }
      }
    }
    function _(_, _, _) {
      switch (_) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (_(`error`, _), _(`load`, _));
          var _ = !1,
            _ = !1,
            _;
          for (_ in _)
            if (_.hasOwnProperty(_)) {
              var _ = _[_];
              if (_ != null)
                switch (_) {
                  case `src`:
                    _ = !0;
                    break;
                  case `srcSet`:
                    _ = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(_(137, _));
                  default:
                    _(_, _, _, _, _, null);
                }
            }
          (_ && _(_, _, `srcSet`, _.srcSet, _, null),
            _ && _(_, _, `src`, _.src, _, null));
          return;
        case `input`:
          _(`invalid`, _);
          var _ = (_ = _ = _ = null),
            _ = null,
            _ = null;
          for (_ in _)
            if (_.hasOwnProperty(_)) {
              var _ = _[_];
              if (_ != null)
                switch (_) {
                  case `name`:
                    _ = _;
                    break;
                  case `type`:
                    _ = _;
                    break;
                  case `checked`:
                    _ = _;
                    break;
                  case `defaultChecked`:
                    _ = _;
                    break;
                  case `value`:
                    _ = _;
                    break;
                  case `defaultValue`:
                    _ = _;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (_ != null) throw Error(_(137, _));
                    break;
                  default:
                    _(_, _, _, _, _, null);
                }
            }
          (_(_, _, _, _, _, _, _, !1), _(_));
          return;
        case `select`:
          for (_ in (_(`invalid`, _), (_ = _ = _ = null), _))
            if (_.hasOwnProperty(_) && ((_ = _[_]), _ != null))
              switch (_) {
                case `value`:
                  _ = _;
                  break;
                case `defaultValue`:
                  _ = _;
                  break;
                case `multiple`:
                  _ = _;
                default:
                  _(_, _, _, _, _, null);
              }
          ((_ = _),
            (_ = _),
            (_.multiple = !!_),
            _ == null ? _ != null && _(_, !!_, _, !0) : _(_, !!_, _, !1));
          return;
        case `textarea`:
          for (_ in (_(`invalid`, _), (_ = _ = _ = null), _))
            if (_.hasOwnProperty(_) && ((_ = _[_]), _ != null))
              switch (_) {
                case `value`:
                  _ = _;
                  break;
                case `defaultValue`:
                  _ = _;
                  break;
                case `children`:
                  _ = _;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (_ != null) throw Error(_(91));
                  break;
                default:
                  _(_, _, _, _, _, null);
              }
          (_(_, _, _, _), _(_));
          return;
        case `option`:
          for (_ in _)
            if (_.hasOwnProperty(_) && ((_ = _[_]), _ != null))
              switch (_) {
                case `selected`:
                  _.selected =
                    _ && typeof _ != `function` && typeof _ != `symbol`;
                  break;
                default:
                  _(_, _, _, _, _, null);
              }
          return;
        case `dialog`:
          (_(`beforetoggle`, _), _(`toggle`, _), _(`cancel`, _), _(`close`, _));
          break;
        case `iframe`:
        case `object`:
          _(`load`, _);
          break;
        case `video`:
        case `audio`:
          for (_ = 0; _ < _.length; _++) _(_[_], _);
          break;
        case `image`:
          (_(`error`, _), _(`load`, _));
          break;
        case `details`:
          _(`toggle`, _);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (_(`error`, _), _(`load`, _));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (_ in _)
            if (_.hasOwnProperty(_) && ((_ = _[_]), _ != null))
              switch (_) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(_(137, _));
                default:
                  _(_, _, _, _, _, null);
              }
          return;
        default:
          if (_(_)) {
            for (_ in _)
              _.hasOwnProperty(_) &&
                ((_ = _[_]), _ !== void 0 && _(_, _, _, _, _, void 0));
            return;
          }
      }
      for (_ in _)
        _.hasOwnProperty(_) &&
          ((_ = _[_]), _ != null && _(_, _, _, _, _, null));
    }
    function _(_, _, _, _) {
      switch (_) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var _ = null,
            _ = null,
            _ = null,
            _ = null,
            _ = null,
            _ = null,
            _ = null;
          for (_ in _) {
            var _ = _[_];
            if (_.hasOwnProperty(_) && _ != null)
              switch (_) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  _ = _;
                default:
                  _.hasOwnProperty(_) || _(_, _, _, null, _, _);
              }
          }
          for (var _ in _) {
            var _ = _[_];
            if (((_ = _[_]), _.hasOwnProperty(_) && (_ != null || _ != null)))
              switch (_) {
                case `type`:
                  _ = _;
                  break;
                case `name`:
                  _ = _;
                  break;
                case `checked`:
                  _ = _;
                  break;
                case `defaultChecked`:
                  _ = _;
                  break;
                case `value`:
                  _ = _;
                  break;
                case `defaultValue`:
                  _ = _;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (_ != null) throw Error(_(137, _));
                  break;
                default:
                  _ !== _ && _(_, _, _, _, _, _);
              }
          }
          _(_, _, _, _, _, _, _, _);
          return;
        case `select`:
          for (_ in ((_ = _ = _ = _ = null), _))
            if (((_ = _[_]), _.hasOwnProperty(_) && _ != null))
              switch (_) {
                case `value`:
                  break;
                case `multiple`:
                  _ = _;
                default:
                  _.hasOwnProperty(_) || _(_, _, _, null, _, _);
              }
          for (_ in _)
            if (
              ((_ = _[_]),
              (_ = _[_]),
              _.hasOwnProperty(_) && (_ != null || _ != null))
            )
              switch (_) {
                case `value`:
                  _ = _;
                  break;
                case `defaultValue`:
                  _ = _;
                  break;
                case `multiple`:
                  _ = _;
                default:
                  _ !== _ && _(_, _, _, _, _, _);
              }
          ((_ = _),
            (_ = _),
            (_ = _),
            _ == null
              ? !!_ != !!_ &&
                (_ == null ? _(_, !!_, _ ? [] : ``, !1) : _(_, !!_, _, !0))
              : _(_, !!_, _, !1));
          return;
        case `textarea`:
          for (_ in ((_ = _ = null), _))
            if (
              ((_ = _[_]),
              _.hasOwnProperty(_) && _ != null && !_.hasOwnProperty(_))
            )
              switch (_) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  _(_, _, _, null, _, _);
              }
          for (_ in _)
            if (
              ((_ = _[_]),
              (_ = _[_]),
              _.hasOwnProperty(_) && (_ != null || _ != null))
            )
              switch (_) {
                case `value`:
                  _ = _;
                  break;
                case `defaultValue`:
                  _ = _;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (_ != null) throw Error(_(91));
                  break;
                default:
                  _ !== _ && _(_, _, _, _, _, _);
              }
          _(_, _, _);
          return;
        case `option`:
          for (var _ in _)
            if (
              ((_ = _[_]),
              _.hasOwnProperty(_) && _ != null && !_.hasOwnProperty(_))
            )
              switch (_) {
                case `selected`:
                  _.selected = !1;
                  break;
                default:
                  _(_, _, _, null, _, _);
              }
          for (_ in _)
            if (
              ((_ = _[_]),
              (_ = _[_]),
              _.hasOwnProperty(_) && _ !== _ && (_ != null || _ != null))
            )
              switch (_) {
                case `selected`:
                  _.selected =
                    _ && typeof _ != `function` && typeof _ != `symbol`;
                  break;
                default:
                  _(_, _, _, _, _, _);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var _ in _)
            ((_ = _[_]),
              _.hasOwnProperty(_) &&
                _ != null &&
                !_.hasOwnProperty(_) &&
                _(_, _, _, null, _, _));
          for (_ in _)
            if (
              ((_ = _[_]),
              (_ = _[_]),
              _.hasOwnProperty(_) && _ !== _ && (_ != null || _ != null))
            )
              switch (_) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (_ != null) throw Error(_(137, _));
                  break;
                default:
                  _(_, _, _, _, _, _);
              }
          return;
        default:
          if (_(_)) {
            for (var _ in _)
              ((_ = _[_]),
                _.hasOwnProperty(_) &&
                  _ !== void 0 &&
                  !_.hasOwnProperty(_) &&
                  _(_, _, _, void 0, _, _));
            for (_ in _)
              ((_ = _[_]),
                (_ = _[_]),
                !_.hasOwnProperty(_) ||
                  _ === _ ||
                  (_ === void 0 && _ === void 0) ||
                  _(_, _, _, _, _, _));
            return;
          }
      }
      for (var _ in _)
        ((_ = _[_]),
          _.hasOwnProperty(_) &&
            _ != null &&
            !_.hasOwnProperty(_) &&
            _(_, _, _, null, _, _));
      for (_ in _)
        ((_ = _[_]),
          (_ = _[_]),
          !_.hasOwnProperty(_) ||
            _ === _ ||
            (_ == null && _ == null) ||
            _(_, _, _, _, _, _));
    }
    var _ = null,
      _ = null;
    function _(_) {
      return _.nodeType === 9 ? _ : _.ownerDocument;
    }
    function _(_) {
      switch (_) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function _(_, _) {
      if (_ === 0)
        switch (_) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return _ === 1 && _ === `foreignObject` ? 0 : _;
    }
    function _(_, _) {
      return (
        _ === `textarea` ||
        _ === `noscript` ||
        typeof _.children == `string` ||
        typeof _.children == `number` ||
        typeof _.children == `bigint` ||
        (typeof _.dangerouslySetInnerHTML == `object` &&
          _.dangerouslySetInnerHTML !== null &&
          _.dangerouslySetInnerHTML.__html != null)
      );
    }
    var _ = null;
    function _() {
      var _ = window.event;
      return _ && _.type === `popstate`
        ? _ !== _ && ((_ = _), !0)
        : ((_ = null), !1);
    }
    var _ = typeof setTimeout == `function` ? setTimeout : void 0,
      _ = typeof clearTimeout == `function` ? clearTimeout : void 0,
      _ = typeof Promise == `function` ? Promise : void 0,
      _ =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : _ === void 0
            ? _
            : function (_) {
                return _.resolve(null).then(_).catch(_);
              };
    function _(_) {
      setTimeout(function () {
        throw _;
      });
    }
    function _(_) {
      return _ === `head`;
    }
    function _(_, _) {
      var _ = _,
        _ = 0,
        _ = 0;
      do {
        var _ = _.nextSibling;
        if ((_.removeChild(_), _ && _.nodeType === 8)) {
          if (((_ = _.data), _ === `/$`)) {
            if (0 < _ && 8 > _) {
              _ = _;
              var _ = _.ownerDocument;
              if ((_ & 1 && _(_.documentElement), _ & 2 && _(_.body), _ & 4))
                for (_ = _.head, _(_), _ = _.firstChild; _;) {
                  var _ = _.nextSibling,
                    _ = _.nodeName;
                  (_[_] ||
                    _ === `SCRIPT` ||
                    _ === `STYLE` ||
                    (_ === `LINK` && _.rel.toLowerCase() === `stylesheet`) ||
                    _.removeChild(_),
                    (_ = _));
                }
            }
            if (_ === 0) {
              (_.removeChild(_), _(_));
              return;
            }
            _--;
          } else
            _ === `$` || _ === `$?` || _ === `$!`
              ? _++
              : (_ = _.charCodeAt(0) - 48);
        } else _ = 0;
        _ = _;
      } while (_);
      _(_);
    }
    function _(_) {
      var _ = _.firstChild;
      for (_ && _.nodeType === 10 && (_ = _.nextSibling); _;) {
        var _ = _;
        switch (((_ = _.nextSibling), _.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (_(_), _(_));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (_.rel.toLowerCase() === `stylesheet`) continue;
        }
        _.removeChild(_);
      }
    }
    function _(_, _, _, _) {
      for (; _.nodeType === 1;) {
        var _ = _;
        if (_.nodeName.toLowerCase() !== _.toLowerCase()) {
          if (!_ && (_.nodeName !== `INPUT` || _.type !== `hidden`)) break;
        } else if (!_) {
          if (_ === `input` && _.type === `hidden`) {
            var _ = _.name == null ? null : `` + _.name;
            if (_.type === `hidden` && _.getAttribute(`name`) === _) return _;
          } else return _;
        } else if (!_[_])
          switch (_) {
            case `meta`:
              if (!_.hasAttribute(`itemprop`)) break;
              return _;
            case `link`:
              if (
                ((_ = _.getAttribute(`rel`)),
                (_ === `stylesheet` && _.hasAttribute(`data-precedence`)) ||
                  _ !== _.rel ||
                  _.getAttribute(`href`) !==
                    (_.href == null || _.href === `` ? null : _.href) ||
                  _.getAttribute(`crossorigin`) !==
                    (_.crossOrigin == null ? null : _.crossOrigin) ||
                  _.getAttribute(`title`) !==
                    (_.title == null ? null : _.title))
              )
                break;
              return _;
            case `style`:
              if (_.hasAttribute(`data-precedence`)) break;
              return _;
            case `script`:
              if (
                ((_ = _.getAttribute(`src`)),
                (_ !== (_.src == null ? null : _.src) ||
                  _.getAttribute(`type`) !== (_.type == null ? null : _.type) ||
                  _.getAttribute(`crossorigin`) !==
                    (_.crossOrigin == null ? null : _.crossOrigin)) &&
                  _ &&
                  _.hasAttribute(`async`) &&
                  !_.hasAttribute(`itemprop`))
              )
                break;
              return _;
            default:
              return _;
          }
        if (((_ = _(_.nextSibling)), _ === null)) break;
      }
      return null;
    }
    function _(_, _, _) {
      if (_ === ``) return null;
      for (; _.nodeType !== 3;)
        if (
          ((_.nodeType !== 1 ||
            _.nodeName !== `INPUT` ||
            _.type !== `hidden`) &&
            !_) ||
          ((_ = _(_.nextSibling)), _ === null)
        )
          return null;
      return _;
    }
    function _(_) {
      return (
        _.data === `$!` ||
        (_.data === `$?` && _.ownerDocument.readyState === `complete`)
      );
    }
    function _(_, _) {
      var _ = _.ownerDocument;
      if (_.data !== `$?` || _.readyState === `complete`) _();
      else {
        var _ = function () {
          (_(), _.removeEventListener(`DOMContentLoaded`, _));
        };
        (_.addEventListener(`DOMContentLoaded`, _), (_._reactRetry = _));
      }
    }
    function _(_) {
      for (; _ != null; _ = _.nextSibling) {
        var _ = _.nodeType;
        if (_ === 1 || _ === 3) break;
        if (_ === 8) {
          if (
            ((_ = _.data),
            _ === `$` || _ === `$!` || _ === `$?` || _ === `F!` || _ === `F`)
          )
            break;
          if (_ === `/$`) return null;
        }
      }
      return _;
    }
    var _ = null;
    function _(_) {
      _ = _.previousSibling;
      for (var _ = 0; _;) {
        if (_.nodeType === 8) {
          var _ = _.data;
          if (_ === `$` || _ === `$!` || _ === `$?`) {
            if (_ === 0) return _;
            _--;
          } else _ === `/$` && _++;
        }
        _ = _.previousSibling;
      }
      return null;
    }
    function _(_, _, _) {
      switch (((_ = _(_)), _)) {
        case `html`:
          if (((_ = _.documentElement), !_)) throw Error(_(452));
          return _;
        case `head`:
          if (((_ = _.head), !_)) throw Error(_(453));
          return _;
        case `body`:
          if (((_ = _.body), !_)) throw Error(_(454));
          return _;
        default:
          throw Error(_(451));
      }
    }
    function _(_) {
      for (var _ = _.attributes; _.length;) _.removeAttributeNode(_[0]);
      _(_);
    }
    var _ = new Map(),
      _ = new Set();
    function _(_) {
      return typeof _.getRootNode == `function`
        ? _.getRootNode()
        : _.nodeType === 9
          ? _
          : _.ownerDocument;
    }
    var _ = _._;
    _._ = {
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
      _: _,
    };
    function _() {
      var _ = _._(),
        _ = _();
      return _ || _;
    }
    function _(_) {
      var _ = _(_);
      _ !== null && _.tag === 5 && _.type === `form` ? _(_) : _._(_);
    }
    var _ = typeof document > `u` ? null : document;
    function _(_, _, _) {
      var _ = _;
      if (_ && typeof _ == `string` && _) {
        var _ = _(_);
        ((_ = `link[rel="` + _ + `"][href="` + _ + `"]`),
          typeof _ == `string` && (_ += `[crossorigin="` + _ + `"]`),
          _.has(_) ||
            (_.add(_),
            (_ = {
              rel: _,
              crossOrigin: _,
              href: _,
            }),
            _.querySelector(_) === null &&
              ((_ = _.createElement(`link`)),
              _(_, `link`, _),
              _(_),
              _.head.appendChild(_))));
      }
    }
    function _(_) {
      (_._(_), _(`dns-prefetch`, _, null));
    }
    function _(_, _) {
      (_._(_, _), _(`preconnect`, _, _));
    }
    function _(_, _, _) {
      _._(_, _, _);
      var _ = _;
      if (_ && _ && _) {
        var _ = `link[rel="preload"][as="` + _(_) + `"]`;
        _ === `image` && _ && _.imageSrcSet
          ? ((_ += `[imagesrcset="` + _(_.imageSrcSet) + `"]`),
            typeof _.imageSizes == `string` &&
              (_ += `[imagesizes="` + _(_.imageSizes) + `"]`))
          : (_ += `[href="` + _(_) + `"]`);
        var _ = _;
        switch (_) {
          case `style`:
            _ = _(_);
            break;
          case `script`:
            _ = _(_);
        }
        _.has(_) ||
          ((_ = _(
            {
              rel: `preload`,
              href: _ === `image` && _ && _.imageSrcSet ? void 0 : _,
              _: _,
            },
            _,
          )),
          _.set(_, _),
          _.querySelector(_) !== null ||
            (_ === `style` && _.querySelector(_(_))) ||
            (_ === `script` && _.querySelector(_(_))) ||
            ((_ = _.createElement(`link`)),
            _(_, `link`, _),
            _(_),
            _.head.appendChild(_)));
      }
    }
    function _(_, _) {
      _._(_, _);
      var _ = _;
      if (_ && _) {
        var _ = _ && typeof _._ == `string` ? _._ : `script`,
          _ =
            `link[rel="modulepreload"][as="` + _(_) + `"][href="` + _(_) + `"]`,
          _ = _;
        switch (_) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            _ = _(_);
        }
        if (
          !_.has(_) &&
          ((_ = _(
            {
              rel: `modulepreload`,
              href: _,
            },
            _,
          )),
          _.set(_, _),
          _.querySelector(_) === null)
        ) {
          switch (_) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (_.querySelector(_(_))) return;
          }
          ((_ = _.createElement(`link`)),
            _(_, `link`, _),
            _(_),
            _.head.appendChild(_));
        }
      }
    }
    function _(_, _, _) {
      _._(_, _, _);
      var _ = _;
      if (_ && _) {
        var _ = _(_).hoistableStyles,
          _ = _(_);
        _ ||= `default`;
        var _ = _.get(_);
        if (!_) {
          var _ = {
            loading: 0,
            preload: null,
          };
          if ((_ = _.querySelector(_(_)))) _.loading = 5;
          else {
            ((_ = _(
              {
                rel: `stylesheet`,
                href: _,
                "data-precedence": _,
              },
              _,
            )),
              (_ = _.get(_)) && _(_, _));
            var _ = (_ = _.createElement(`link`));
            (_(_),
              _(_, `link`, _),
              (_._ = new Promise(function (_, _) {
                ((_.onload = _), (_.onerror = _));
              })),
              _.addEventListener(`load`, function () {
                _.loading |= 1;
              }),
              _.addEventListener(`error`, function () {
                _.loading |= 2;
              }),
              (_.loading |= 4),
              _(_, _, _));
          }
          ((_ = {
            type: `stylesheet`,
            instance: _,
            count: 1,
            state: _,
          }),
            _.set(_, _));
        }
      }
    }
    function _(_, _) {
      _._(_, _);
      var _ = _;
      if (_ && _) {
        var _ = _(_).hoistableScripts,
          _ = _(_),
          _ = _.get(_);
        _ ||
          ((_ = _.querySelector(_(_))),
          _ ||
            ((_ = _(
              {
                src: _,
                async: !0,
              },
              _,
            )),
            (_ = _.get(_)) && _(_, _),
            (_ = _.createElement(`script`)),
            _(_),
            _(_, `link`, _),
            _.head.appendChild(_)),
          (_ = {
            type: `script`,
            instance: _,
            count: 1,
            state: null,
          }),
          _.set(_, _));
      }
    }
    function _(_, _) {
      _._(_, _);
      var _ = _;
      if (_ && _) {
        var _ = _(_).hoistableScripts,
          _ = _(_),
          _ = _.get(_);
        _ ||
          ((_ = _.querySelector(_(_))),
          _ ||
            ((_ = _(
              {
                src: _,
                async: !0,
                type: `module`,
              },
              _,
            )),
            (_ = _.get(_)) && _(_, _),
            (_ = _.createElement(`script`)),
            _(_),
            _(_, `link`, _),
            _.head.appendChild(_)),
          (_ = {
            type: `script`,
            instance: _,
            count: 1,
            state: null,
          }),
          _.set(_, _));
      }
    }
    function _(_, _, _, _) {
      var _ = (_ = _.current) ? _(_) : null;
      if (!_) throw Error(_(446));
      switch (_) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof _.precedence == `string` && typeof _.href == `string`
            ? ((_ = _(_.href)),
              (_ = _(_).hoistableStyles),
              (_ = _.get(_)),
              _ ||
                ((_ = {
                  type: `style`,
                  instance: null,
                  count: 0,
                  state: null,
                }),
                _.set(_, _)),
              _)
            : {
                type: `void`,
                instance: null,
                count: 0,
                state: null,
              };
        case `link`:
          if (
            _.rel === `stylesheet` &&
            typeof _.href == `string` &&
            typeof _.precedence == `string`
          ) {
            _ = _(_.href);
            var _ = _(_).hoistableStyles,
              _ = _.get(_);
            if (
              (_ ||
                ((_ = _.ownerDocument || _),
                (_ = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: {
                    loading: 0,
                    preload: null,
                  },
                }),
                _.set(_, _),
                (_ = _.querySelector(_(_))) &&
                  !_._ &&
                  ((_.instance = _), (_.state.loading = 5)),
                _.has(_) ||
                  ((_ = {
                    rel: `preload`,
                    _: `style`,
                    href: _.href,
                    crossOrigin: _.crossOrigin,
                    integrity: _.integrity,
                    media: _.media,
                    hrefLang: _.hrefLang,
                    referrerPolicy: _.referrerPolicy,
                  }),
                  _.set(_, _),
                  _ || _(_, _, _, _.state))),
              _ && _ === null)
            )
              throw Error(_(528, ``));
            return _;
          }
          if (_ && _ !== null) throw Error(_(529, ``));
          return null;
        case `script`:
          return (
            (_ = _.async),
            (_ = _.src),
            typeof _ == `string` &&
            _ &&
            typeof _ != `function` &&
            typeof _ != `symbol`
              ? ((_ = _(_)),
                (_ = _(_).hoistableScripts),
                (_ = _.get(_)),
                _ ||
                  ((_ = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  _.set(_, _)),
                _)
              : {
                  type: `void`,
                  instance: null,
                  count: 0,
                  state: null,
                }
          );
        default:
          throw Error(_(444, _));
      }
    }
    function _(_) {
      return `href="` + _(_) + `"`;
    }
    function _(_) {
      return `link[rel="stylesheet"][` + _ + `]`;
    }
    function _(_) {
      return _({}, _, {
        "data-precedence": _.precedence,
        precedence: null,
      });
    }
    function _(_, _, _, _) {
      _.querySelector(`link[rel="preload"][as="style"][` + _ + `]`)
        ? (_.loading = 1)
        : ((_ = _.createElement(`link`)),
          (_.preload = _),
          _.addEventListener(`load`, function () {
            return (_.loading |= 1);
          }),
          _.addEventListener(`error`, function () {
            return (_.loading |= 2);
          }),
          _(_, `link`, _),
          _(_),
          _.head.appendChild(_));
    }
    function _(_) {
      return `[src="` + _(_) + `"]`;
    }
    function _(_) {
      return `script[async]` + _;
    }
    function _(_, _, _) {
      if ((_.count++, _.instance === null))
        switch (_.type) {
          case `style`:
            var _ = _.querySelector(`style[data-href~="` + _(_.href) + `"]`);
            if (_) return ((_.instance = _), _(_), _);
            var _ = _({}, _, {
              "data-href": _.href,
              "data-precedence": _.precedence,
              href: null,
              precedence: null,
            });
            return (
              (_ = (_.ownerDocument || _).createElement(`style`)),
              _(_),
              _(_, `style`, _),
              _(_, _.precedence, _),
              (_.instance = _)
            );
          case `stylesheet`:
            _ = _(_.href);
            var _ = _.querySelector(_(_));
            if (_) return ((_.state.loading |= 4), (_.instance = _), _(_), _);
            ((_ = _(_)),
              (_ = _.get(_)) && _(_, _),
              (_ = (_.ownerDocument || _).createElement(`link`)),
              _(_));
            var _ = _;
            return (
              (_._ = new Promise(function (_, _) {
                ((_.onload = _), (_.onerror = _));
              })),
              _(_, `link`, _),
              (_.state.loading |= 4),
              _(_, _.precedence, _),
              (_.instance = _)
            );
          case `script`:
            return (
              (_ = _(_.src)),
              (_ = _.querySelector(_(_)))
                ? ((_.instance = _), _(_), _)
                : ((_ = _),
                  (_ = _.get(_)) && ((_ = _({}, _)), _(_, _)),
                  (_ = _.ownerDocument || _),
                  (_ = _.createElement(`script`)),
                  _(_),
                  _(_, `link`, _),
                  _.head.appendChild(_),
                  (_.instance = _))
            );
          case `void`:
            return null;
          default:
            throw Error(_(443, _.type));
        }
      else
        _.type === `stylesheet` &&
          !(_.state.loading & 4) &&
          ((_ = _.instance), (_.state.loading |= 4), _(_, _.precedence, _));
      return _.instance;
    }
    function _(_, _, _) {
      for (
        var _ = _.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          _ = _.length ? _[_.length - 1] : null,
          _ = _,
          _ = 0;
        _ < _.length;
        _++
      ) {
        var _ = _[_];
        if (_.dataset.precedence === _) _ = _;
        else if (_ !== _) break;
      }
      _
        ? _.parentNode.insertBefore(_, _.nextSibling)
        : ((_ = _.nodeType === 9 ? _.head : _),
          _.insertBefore(_, _.firstChild));
    }
    function _(_, _) {
      ((_.crossOrigin ??= _.crossOrigin),
        (_.referrerPolicy ??= _.referrerPolicy),
        (_.title ??= _.title));
    }
    function _(_, _) {
      ((_.crossOrigin ??= _.crossOrigin),
        (_.referrerPolicy ??= _.referrerPolicy),
        (_.integrity ??= _.integrity));
    }
    var _ = null;
    function _(_, _, _) {
      if (_ === null) {
        var _ = new Map(),
          _ = (_ = new Map());
        _.set(_, _);
      } else ((_ = _), (_ = _.get(_)), _ || ((_ = new Map()), _.set(_, _)));
      if (_.has(_)) return _;
      for (
        _.set(_, null), _ = _.getElementsByTagName(_), _ = 0;
        _ < _.length;
        _++
      ) {
        var _ = _[_];
        if (
          !(
            _[_] ||
            _[_] ||
            (_ === `link` && _.getAttribute(`rel`) === `stylesheet`)
          ) &&
          _.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var _ = _.getAttribute(_) || ``;
          _ = _ + _;
          var _ = _.get(_);
          _ ? _.push(_) : _.set(_, [_]);
        }
      }
      return _;
    }
    function _(_, _, _) {
      ((_ = _.ownerDocument || _),
        _.head.insertBefore(
          _,
          _ === `title` ? _.querySelector(`head > title`) : null,
        ));
    }
    function _(_, _, _) {
      if (_ === 1 || _.itemProp != null) return !1;
      switch (_) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof _.precedence != `string` ||
            typeof _.href != `string` ||
            _.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof _.rel != `string` ||
            typeof _.href != `string` ||
            _.href === `` ||
            _.onLoad ||
            _.onError
          )
            break;
          switch (_.rel) {
            case `stylesheet`:
              return (
                (_ = _.disabled), typeof _.precedence == `string` && _ == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            _.async &&
            typeof _.async != `function` &&
            typeof _.async != `symbol` &&
            !_.onLoad &&
            !_.onError &&
            _.src &&
            typeof _.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function _(_) {
      return !(_.type === `stylesheet` && !(_.state.loading & 3));
    }
    var _ = null;
    function _() {}
    function _(_, _, _) {
      if (_ === null) throw Error(_(475));
      var _ = _;
      if (
        _.type === `stylesheet` &&
        (typeof _.media != `string` || !1 !== matchMedia(_.media).matches) &&
        !(_.state.loading & 4)
      ) {
        if (_.instance === null) {
          var _ = _(_.href),
            _ = _.querySelector(_(_));
          if (_) {
            ((_ = _._),
              typeof _ == `object` &&
                _ &&
                typeof _.then == `function` &&
                (_.count++, (_ = _.bind(_)), _.then(_, _)),
              (_.state.loading |= 4),
              (_.instance = _),
              _(_));
            return;
          }
          ((_ = _.ownerDocument || _),
            (_ = _(_)),
            (_ = _.get(_)) && _(_, _),
            (_ = _.createElement(`link`)),
            _(_));
          var _ = _;
          ((_._ = new Promise(function (_, _) {
            ((_.onload = _), (_.onerror = _));
          })),
            _(_, `link`, _),
            (_.instance = _));
        }
        (_.stylesheets === null && (_.stylesheets = new Map()),
          _.stylesheets.set(_, _),
          (_ = _.state.preload) &&
            !(_.state.loading & 3) &&
            (_.count++,
            (_ = _.bind(_)),
            _.addEventListener(`load`, _),
            _.addEventListener(`error`, _)));
      }
    }
    function _() {
      if (_ === null) throw Error(_(475));
      var _ = _;
      return (
        _.stylesheets && _.count === 0 && _(_, _.stylesheets),
        0 < _.count
          ? function (_) {
              var _ = setTimeout(function () {
                if ((_.stylesheets && _(_, _.stylesheets), _.unsuspend)) {
                  var _ = _.unsuspend;
                  ((_.unsuspend = null), _());
                }
              }, 6e4);
              return (
                (_.unsuspend = _),
                function () {
                  ((_.unsuspend = null), clearTimeout(_));
                }
              );
            }
          : null
      );
    }
    function _() {
      if ((this.count--, this.count === 0)) {
        if (this.stylesheets) _(this, this.stylesheets);
        else if (this.unsuspend) {
          var _ = this.unsuspend;
          ((this.unsuspend = null), _());
        }
      }
    }
    var _ = null;
    function _(_, _) {
      ((_.stylesheets = null),
        _.unsuspend !== null &&
          (_.count++, (_ = new Map()), _.forEach(_, _), (_ = null), _.call(_)));
    }
    function _(_, _) {
      if (!(_.state.loading & 4)) {
        var _ = _.get(_);
        if (_) var _ = _.get(null);
        else {
          ((_ = new Map()), _.set(_, _));
          for (
            var _ = _.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              _ = 0;
            _ < _.length;
            _++
          ) {
            var _ = _[_];
            (_.nodeName === `LINK` || _.getAttribute(`media`) !== `not all`) &&
              (_.set(_.dataset.precedence, _), (_ = _));
          }
          _ && _.set(null, _);
        }
        ((_ = _.instance),
          (_ = _.getAttribute(`data-precedence`)),
          (_ = _.get(_) || _),
          _ === _ && _.set(null, _),
          _.set(_, _),
          this.count++,
          (_ = _.bind(this)),
          _.addEventListener(`load`, _),
          _.addEventListener(`error`, _),
          _
            ? _.parentNode.insertBefore(_, _.nextSibling)
            : ((_ = _.nodeType === 9 ? _.head : _),
              _.insertBefore(_, _.firstChild)),
          (_.state.loading |= 4));
      }
    }
    var _ = {
      $$typeof: _,
      Provider: null,
      Consumer: null,
      _currentValue: _,
      _currentValue2: _,
      _threadCount: 0,
    };
    function _(_, _, _, _, _, _, _, _) {
      ((this.tag = 1),
        (this.containerInfo = _),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = _(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = _(0)),
        (this.hiddenUpdates = _(null)),
        (this.identifierPrefix = _),
        (this.onUncaughtError = _),
        (this.onCaughtError = _),
        (this.onRecoverableError = _),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = _),
        (this.incompleteTransitions = new Map()));
    }
    function _(_, _, _, _, _, _, _, _, _, _, _, _) {
      return (
        (_ = new _(_, _, _, _, _, _, _, _)),
        (_ = 1),
        !0 === _ && (_ |= 24),
        (_ = _(3, null, null, _)),
        (_.current = _),
        (_.stateNode = _),
        (_ = _()),
        _.refCount++,
        (_.pooledCache = _),
        _.refCount++,
        (_.memoizedState = {
          element: _,
          isDehydrated: _,
          cache: _,
        }),
        _(_),
        _
      );
    }
    function _(_) {
      return _ ? ((_ = _), _) : _;
    }
    function _(_, _, _, _, _, _) {
      ((_ = _(_)),
        _.context === null ? (_.context = _) : (_.pendingContext = _),
        (_ = _(_)),
        (_.payload = {
          element: _,
        }),
        (_ = _ === void 0 ? null : _),
        _ !== null && (_.callback = _),
        (_ = _(_, _, _)),
        _ !== null && (_(_, _, _), _(_, _, _)));
    }
    function _(_, _) {
      if (((_ = _.memoizedState), _ !== null && _.dehydrated !== null)) {
        var _ = _.retryLane;
        _.retryLane = _ !== 0 && _ < _ ? _ : _;
      }
    }
    function _(_, _) {
      (_(_, _), (_ = _.alternate) && _(_, _));
    }
    function _(_) {
      if (_.tag === 13) {
        var _ = _(_, 67108864);
        (_ !== null && _(_, _, 67108864), _(_, 67108864));
      }
    }
    var _ = !0;
    function _(_, _, _, _) {
      var _ = _._;
      _._ = null;
      var _ = _._;
      try {
        ((_._ = 2), _(_, _, _, _));
      } finally {
        ((_._ = _), (_._ = _));
      }
    }
    function _(_, _, _, _) {
      var _ = _._;
      _._ = null;
      var _ = _._;
      try {
        ((_._ = 8), _(_, _, _, _));
      } finally {
        ((_._ = _), (_._ = _));
      }
    }
    function _(_, _, _, _) {
      if (_) {
        var _ = _(_);
        if (_ === null) (_(_, _, _, _, _), _(_, _));
        else if (_(_, _, _, _, _)) _.stopPropagation();
        else if ((_(_, _), _ & 4 && -1 < _.indexOf(_))) {
          for (; _ !== null;) {
            var _ = _(_);
            if (_ !== null)
              switch (_.tag) {
                case 3:
                  if (
                    ((_ = _.stateNode), _.current.memoizedState.isDehydrated)
                  ) {
                    var _ = _(_.pendingLanes);
                    if (_ !== 0) {
                      var _ = _;
                      for (_.pendingLanes |= 2, _.entangledLanes |= 2; _;) {
                        var _ = 1 << (31 - _(_));
                        ((_.entanglements[1] |= _), (_ &= ~_));
                      }
                      (_(_), !(_ & 6) && ((_ = _() + 500), _(0, !1)));
                    }
                  }
                  break;
                case 13:
                  ((_ = _(_, 2)), _ !== null && _(_, _, 2), _(), _(_, 2));
              }
            if (((_ = _(_)), _ === null && _(_, _, _, _, _), _ === _)) break;
            _ = _;
          }
          _ !== null && _.stopPropagation();
        } else _(_, _, _, null, _);
      }
    }
    function _(_) {
      return ((_ = _(_)), _(_));
    }
    var _ = null;
    function _(_) {
      if (((_ = null), (_ = _(_)), _ !== null)) {
        var _ = _(_);
        if (_ === null) _ = null;
        else {
          var _ = _.tag;
          if (_ === 13) {
            if (((_ = _(_)), _ !== null)) return _;
            _ = null;
          } else if (_ === 3) {
            if (_.stateNode.current.memoizedState.isDehydrated)
              return _.tag === 3 ? _.stateNode.containerInfo : null;
            _ = null;
          } else _ !== _ && (_ = null);
        }
      }
      return ((_ = _), null);
    }
    function _(_) {
      switch (_) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (_()) {
            case _:
              return 2;
            case _:
              return 8;
            case _:
            case _:
              return 32;
            case _:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var _ = !1,
      _ = null,
      _ = null,
      _ = null,
      _ = new Map(),
      _ = new Map(),
      _ = [],
      _ =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function _(_, _) {
      switch (_) {
        case `focusin`:
        case `focusout`:
          _ = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _ = null;
          break;
        case `mouseover`:
        case `mouseout`:
          _ = null;
          break;
        case `pointerover`:
        case `pointerout`:
          _.delete(_.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          _.delete(_.pointerId);
      }
    }
    function _(_, _, _, _, _, _) {
      return _ === null || _.nativeEvent !== _
        ? ((_ = {
            blockedOn: _,
            domEventName: _,
            eventSystemFlags: _,
            nativeEvent: _,
            targetContainers: [_],
          }),
          _ !== null && ((_ = _(_)), _ !== null && _(_)),
          _)
        : ((_.eventSystemFlags |= _),
          (_ = _.targetContainers),
          _ !== null && _.indexOf(_) === -1 && _.push(_),
          _);
    }
    function _(_, _, _, _, _) {
      switch (_) {
        case `focusin`:
          return ((_ = _(_, _, _, _, _, _)), !0);
        case `dragenter`:
          return ((_ = _(_, _, _, _, _, _)), !0);
        case `mouseover`:
          return ((_ = _(_, _, _, _, _, _)), !0);
        case `pointerover`:
          var _ = _.pointerId;
          return (_.set(_, _(_.get(_) || null, _, _, _, _, _)), !0);
        case `gotpointercapture`:
          return (
            (_ = _.pointerId), _.set(_, _(_.get(_) || null, _, _, _, _, _)), !0
          );
      }
      return !1;
    }
    function _(_) {
      var _ = _(_.target);
      if (_ !== null) {
        var _ = _(_);
        if (_ !== null) {
          if (((_ = _.tag), _ === 13)) {
            if (((_ = _(_)), _ !== null)) {
              ((_.blockedOn = _),
                _(_.priority, function () {
                  if (_.tag === 13) {
                    var _ = _();
                    _ = _(_);
                    var _ = _(_, _);
                    (_ !== null && _(_, _, _), _(_, _));
                  }
                }));
              return;
            }
          } else if (
            _ === 3 &&
            _.stateNode.current.memoizedState.isDehydrated
          ) {
            _.blockedOn = _.tag === 3 ? _.stateNode.containerInfo : null;
            return;
          }
        }
      }
      _.blockedOn = null;
    }
    function _(_) {
      if (_.blockedOn !== null) return !1;
      for (var _ = _.targetContainers; 0 < _.length;) {
        var _ = _(_.nativeEvent);
        if (_ === null) {
          _ = _.nativeEvent;
          var _ = new _.constructor(_.type, _);
          ((_ = _), _.target.dispatchEvent(_), (_ = null));
        } else return ((_ = _(_)), _ !== null && _(_), (_.blockedOn = _), !1);
        _.shift();
      }
      return !0;
    }
    function _(_, _, _) {
      _(_) && _.delete(_);
    }
    function _() {
      ((_ = !1),
        _ !== null && _(_) && (_ = null),
        _ !== null && _(_) && (_ = null),
        _ !== null && _(_) && (_ = null),
        _.forEach(_),
        _.forEach(_));
    }
    function _(_, _) {
      _.blockedOn === _ &&
        ((_.blockedOn = null),
        _ ||
          ((_ = !0),
          _.unstable_scheduleCallback(_.unstable_NormalPriority, _)));
    }
    var _ = null;
    function _(_) {
      _ !== _ &&
        ((_ = _),
        _.unstable_scheduleCallback(_.unstable_NormalPriority, function () {
          _ === _ && (_ = null);
          for (var _ = 0; _ < _.length; _ += 3) {
            var _ = _[_],
              _ = _[_ + 1],
              _ = _[_ + 2];
            if (typeof _ != `function`) {
              if (_(_ || _) === null) continue;
              break;
            }
            var _ = _(_);
            _ !== null &&
              (_.splice(_, 3),
              (_ -= 3),
              _(
                _,
                {
                  pending: !0,
                  data: _,
                  method: _.method,
                  action: _,
                },
                _,
                _,
              ));
          }
        }));
    }
    function _(_) {
      function _(_) {
        return _(_, _);
      }
      (_ !== null && _(_, _),
        _ !== null && _(_, _),
        _ !== null && _(_, _),
        _.forEach(_),
        _.forEach(_));
      for (var _ = 0; _ < _.length; _++) {
        var _ = _[_];
        _.blockedOn === _ && (_.blockedOn = null);
      }
      for (; 0 < _.length && ((_ = _[0]), _.blockedOn === null);)
        (_(_), _.blockedOn === null && _.shift());
      if (((_ = (_.ownerDocument || _).$$reactFormReplay), _ != null))
        for (_ = 0; _ < _.length; _ += 3) {
          var _ = _[_],
            _ = _[_ + 1],
            _ = _[_] || null;
          if (typeof _ == `function`) _ || _(_);
          else if (_) {
            var _ = null;
            if (_ && _.hasAttribute(`formAction`)) {
              if (((_ = _), (_ = _[_] || null))) _ = _.formAction;
              else if (_(_) !== null) continue;
            } else _ = _.action;
            (typeof _ == `function`
              ? (_[_ + 1] = _)
              : (_.splice(_, 3), (_ -= 3)),
              _(_));
          }
        }
    }
    function _(_) {
      this._internalRoot = _;
    }
    ((_.prototype.render = _.prototype.render =
      function (_) {
        var _ = this._internalRoot;
        if (_ === null) throw Error(_(409));
        var _ = _.current;
        _(_, _(), _, _, null, null);
      }),
      (_.prototype.unmount = _.prototype.unmount =
        function () {
          var _ = this._internalRoot;
          if (_ !== null) {
            this._internalRoot = null;
            var _ = _.containerInfo;
            (_(_.current, 2, null, _, null, null), _(), (_[_] = null));
          }
        }));
    function _(_) {
      this._internalRoot = _;
    }
    _.prototype.unstable_scheduleHydration = function (_) {
      if (_) {
        var _ = _();
        _ = {
          blockedOn: null,
          target: _,
          priority: _,
        };
        for (var _ = 0; _ < _.length && _ !== 0 && _ < _[_].priority; _++);
        (_.splice(_, 0, _), _ === 0 && _(_));
      }
    };
    var _ = _.version;
    if (_ !== `19.1.1`) throw Error(_(527, _, `19.1.1`));
    _.findDOMNode = function (_) {
      var _ = _._reactInternals;
      if (_ === void 0)
        throw typeof _.render == `function`
          ? Error(_(188))
          : ((_ = Object.keys(_).join(`,`)), Error(_(268, _)));
      return (
        (_ = _(_)),
        (_ = _ === null ? null : _(_)),
        (_ = _ === null ? null : _.stateNode),
        _
      );
    };
    var _ = {
      bundleType: 0,
      version: `19.1.1`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: _,
      reconcilerVersion: `19.1.1`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var _ = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!_.isDisabled && _.supportsFiber)
        try {
          ((_ = _.inject(_)), (_ = _));
        } catch {}
    }
    _.createRoot = function (_, _) {
      if (!_(_)) throw Error(_(299));
      var _ = !1,
        _ = ``,
        _ = _,
        _ = _,
        _ = _,
        _ = null;
      return (
        _ != null &&
          (!0 === _.unstable_strictMode && (_ = !0),
          _.identifierPrefix !== void 0 && (_ = _.identifierPrefix),
          _.onUncaughtError !== void 0 && (_ = _.onUncaughtError),
          _.onCaughtError !== void 0 && (_ = _.onCaughtError),
          _.onRecoverableError !== void 0 && (_ = _.onRecoverableError),
          _.unstable_transitionCallbacks !== void 0 &&
            (_ = _.unstable_transitionCallbacks)),
        (_ = _(_, 1, !1, null, null, _, _, _, _, _, _, null)),
        (_[_] = _.current),
        _(_),
        new _(_)
      );
    };
  }),
  _ = _((_, _) => {
    function _() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
        } catch (_) {
          console.error(_);
        }
    }
    (_(), (_.exports = _()));
  }),
  _ = _(_()),
  _ = class {
    activeObject;
    instance;
    constructor(_) {
      this.instance = new _(_, !1);
    }
  },
  _ = class {
    m_parent;
    m_window;
    m_container = null;
    iIntervalShow;
    m_bRemoveOnHide;
    m_reactRoot;
    constructor(_, _ = !0) {
      ((this.m_parent = _),
        (this.m_window = _.ownerDocument.defaultView),
        (this.m_bRemoveOnHide = _));
    }
    Show(_, _) {
      return (
        this.CancelShowInterval(),
        _
          ? new Promise((_, _) => {
              this.iIntervalShow = this.m_window.setTimeout(() => {
                let _ = this.m_parent.ownerDocument;
                _.defaultView &&
                  !_.defaultView.closed &&
                  (this.InternalShow(_), _());
              }, _);
            })
          : (this.InternalShow(_), Promise.resolve())
      );
    }
    InternalShow(_) {
      (this.m_container ||
        ((this.m_container = this.m_parent.ownerDocument.createElement(`div`)),
        this.m_parent.appendChild(this.m_container)),
        (this.m_reactRoot ||= _.createRoot(this.m_container)),
        this.m_reactRoot.render(_));
    }
    Hide(_) {
      (this.CancelShowInterval(),
        _
          ? (this.iIntervalShow = this.m_window.setTimeout(() => {
              this.InternalHide();
            }, _))
          : this.InternalHide());
    }
    InternalHide() {
      ((this.m_reactRoot &&= (this.m_reactRoot.unmount(), void 0)),
        this.m_container &&
          this.m_bRemoveOnHide &&
          (this.m_parent.removeChild(this.m_container),
          (this.m_container = null)));
    }
    CancelShowInterval() {
      this.iIntervalShow !== void 0 &&
        (this.m_window.clearInterval(this.iIntervalShow),
        (this.iIntervalShow = void 0));
    }
    BIsChildElement(_) {
      return this.m_container && _(this.m_container, _);
    }
  },
  _ = class {
    m_strUniqueID;
    m_mapEmbeddedHovers = new WeakMap();
    constructor(_) {
      this.m_strUniqueID = _;
    }
    ShowElementDelayed(_, _, _, _) {
      let _ = this.GetEmbeddedElement(_);
      return ((_.activeObject = _), _.instance.Show(_, _));
    }
    ShowElement(_, _, _) {
      let _ = this.GetEmbeddedElement(_);
      ((_.activeObject = _), _.instance.Show(_));
    }
    HideElement(_, _, _) {
      let _ = this.GetEmbeddedElement(_);
      _.activeObject == _ && ((_.activeObject = void 0), _.instance.Hide(_));
    }
    GetEmbeddedElement(_) {
      let _ = this.m_mapEmbeddedHovers.get(_);
      return (
        _ || ((_ = new _(_.body)), this.m_mapEmbeddedHovers.set(_, _)), _
      );
    }
  },
  _ = new _(`DragDrop`).Debug,
  _ = class extends _.Component {
    m_coordinator = new _();
    OnDrop(_, _) {
      (_ > _ && _--, _ != _ && this.props.onReorder(_, _));
    }
    render() {
      let _ = [];
      return (
        _.push(
          (0, _.jsx)(
            _,
            {
              coordinator: this.m_coordinator,
              fnBAcceptDraggable: (_) => _.props.data != 0,
              fnOnDrop: (_) => this.OnDrop(_.props.data, 0),
            },
            `dropregion_top`,
          ),
        ),
        _.Children.forEach(this.props.children, (_, _) => {
          let _ = _.props._ || `__list_` + _,
            _ = _ + 1;
          (_.push(
            (0, _.jsx)(
              _,
              {
                coordinator: this.m_coordinator,
                data: _,
                children: _,
              },
              _,
            ),
          ),
            _.push(
              (0, _.jsx)(
                _,
                {
                  coordinator: this.m_coordinator,
                  fnBAcceptDraggable: (_) => _.props.data != _,
                  fnOnDrop: (_) => this.OnDrop(_.props.data, _),
                },
                `dropregion_` + _,
              ),
            ));
        }),
        (0, _.jsx)(`div`, {
          className: `DialogReorderableList`,
          children: _,
        })
      );
    }
  };
_([_], _.prototype, `OnDrop`, null);
function _(_) {
  if (`touches` in _) {
    let _ = _;
    return [_.touches[0].clientX, _.touches[0].clientY];
  }
  return [_.clientX, _.clientY];
}
function _(_, _, _, _) {
  return _
    ? _ && _ > _.left && _ < _.right && _ > _.top && _ < _.bottom
    : _ && _ >= _.left && _ <= _.right && _ >= _.top && _ <= _.bottom;
}
var _ = class {
  m_embeddedElement = new _(`DragGhosts`);
  m_rgDropRegions = [];
  m_activeDraggable;
  m_rgActiveDropRegions = [];
  m_activeDropRegion;
  m_dropGhost;
  m_dragGhost;
  m_dragOffWindowTimer;
  RegisterDropRegion(_) {
    (this.m_rgDropRegions.push(_),
      this.m_activeDraggable &&
        _.BAcceptDraggable(this.m_activeDraggable) &&
        (_.OnDragStarted(this.m_activeDraggable),
        this.m_rgActiveDropRegions.push(_)));
  }
  UnregisterDropRegion(_) {
    (_(this.m_rgDropRegions, _),
      _(this.m_rgActiveDropRegions, _),
      this.m_activeDropRegion == _ &&
        ((this.m_activeDropRegion = void 0),
        this.m_activeDraggable && this.ShowDragGhost()));
  }
  OnDragGhostRef(_) {
    this.m_dragGhost = _;
  }
  ShowDragGhost() {
    let _ = this.m_activeDraggable.renderDragGhost(),
      _ = _(
        _.props.className,
        !!this.m_activeDropRegion && `DraggedOverActiveDrop`,
      ),
      _ = _.cloneElement(_, {
        ref: this.OnDragGhostRef,
        className: _,
      });
    this.m_embeddedElement.ShowElement(
      this.m_activeDraggable.GetDragDocument(),
      _,
      this.m_activeDraggable,
    );
  }
  HideDragGhost() {
    this.m_embeddedElement.HideElement(
      this.m_activeDraggable.GetDragDocument(),
      this.m_activeDraggable,
    );
  }
  m_elCloneContainer;
  m_elCloneOriginal;
  m_nodeCloneCopy;
  MakeDragClone(_) {
    (_(
      !this.m_nodeCloneCopy && !this.m_elCloneOriginal,
      `Drag already in progress`,
    ),
      (this.m_elCloneOriginal = _.m_divRef.current),
      (this.m_nodeCloneCopy = this.m_elCloneOriginal.cloneNode(!0)),
      _.m_divRef.current.replaceWith(this.m_nodeCloneCopy),
      this.m_elCloneContainer ||
        ((this.m_elCloneContainer =
          _.GetDragDocument().body.ownerDocument.createElement(`div`)),
        _.GetDragDocument().body.appendChild(this.m_elCloneContainer)),
      this.m_elCloneContainer.appendChild(this.m_elCloneOriginal));
  }
  ReverseDragClone() {
    (this.m_nodeCloneCopy.parentNode?.replaceChild(
      this.m_elCloneOriginal,
      this.m_nodeCloneCopy,
    ),
      (this.m_nodeCloneCopy = void 0),
      (this.m_elCloneOriginal = void 0));
  }
  OnDragStart(_) {
    ((this.m_activeDraggable = _), (this.m_rgActiveDropRegions = []));
    for (let _ of this.m_rgDropRegions)
      _.BAcceptDraggable(_) &&
        (_.OnDragStarted(_), this.m_rgActiveDropRegions.push(_));
    (this.MakeDragClone(_), this.ShowDragGhost());
  }
  EndDrag() {
    if (this.m_activeDraggable) {
      (this.ReverseDragClone(),
        this.HideDragGhost(),
        this.m_activeDropRegion &&
          this.m_activeDropRegion.OnDrop(this.m_activeDraggable));
      for (let _ of this.m_rgActiveDropRegions)
        _.OnDragEnded(this.m_activeDraggable);
      ((this.m_activeDraggable = void 0),
        (this.m_dropGhost = void 0),
        (this.m_rgActiveDropRegions = []));
    }
  }
  FindBestActiveDropRegionForPoint(_, _) {
    let _ = this.m_activeDraggable.GetDragDocument(),
      _;
    if ((`elementsFromPoint` in _ && (_ = _.elementsFromPoint(_, _)), _)) {
      let _ = new Map();
      this.m_rgActiveDropRegions.forEach((_) => _.set(_.GetElement(), _));
      for (let _ of _) {
        let _ = _.get(_);
        if (_) return _;
      }
    } else {
      if (
        this.m_activeDropRegion &&
        this.m_activeDropRegion.BDraggableInRegion(_, _, this.m_activeDraggable)
      )
        return this.m_activeDropRegion;
      for (let _ = this.m_rgActiveDropRegions.length - 1; _ >= 0; _--) {
        let _ = this.m_rgActiveDropRegions[_];
        if (_.BDraggableInRegion(_, _, this.m_activeDraggable)) return _;
      }
    }
  }
  m_prevClientX = 0;
  m_prevClientY = 0;
  OnDrag(_, _, _) {
    let _ = this.m_prevClientX || _,
      _ = this.m_prevClientY || _;
    if (
      (_.props.bEnableHTMLDrag &&
        this.m_dragOffWindowTimer &&
        window.clearTimeout(this.m_dragOffWindowTimer),
      this.m_dragGhost)
    ) {
      let _ = _ === void 0 ? 0 : _ - (this.m_dragGhost.state.clientX ?? 0),
        _ = _ === void 0 ? 0 : _ - (this.m_dragGhost.state.clientY ?? 0);
      if (
        (this.m_dragGhost.setState({
          clientX: _,
          clientY: _,
          clientXDelta: _,
          clientYDelta: _,
          bVisible: !0,
        }),
        _.props.bEnableHTMLDrag && (_ || _))
      ) {
        let _ = _ + _,
          _ = _ + _,
          _ = _.GetDragDocument().body.getBoundingClientRect();
        if (_(_, _, _) && !_(_, _, _, !0)) {
          let _ = _(_, _.left, _.right, _.left - 200, _.right + 200),
            _ = _(_, _.top, _.bottom, _.top - 100, _.bottom + 100);
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            _ == this.m_activeDraggable && this.OnDrag(_, _, _);
          }, 50);
        }
      }
    }
    let _ = this.FindBestActiveDropRegionForPoint(_, _);
    ((this.m_prevClientX = _),
      (this.m_prevClientY = _),
      !!this.m_activeDropRegion != !!_ &&
        (this.ShowDragGhost(),
        (this.m_dropGhost ||= this.m_activeDraggable.renderDropGhost())),
      this.m_activeDropRegion &&
        this.m_activeDropRegion != _ &&
        this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
      _ &&
        this.m_activeDropRegion != _ &&
        _.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
      (this.m_activeDropRegion = _),
      this.m_activeDropRegion &&
        this.m_activeDropRegion.OnDragMove(_, _, this.m_activeDraggable));
  }
};
_([_], _.prototype, `OnDragGhostRef`, null);
var _ = class extends _.Component {
  constructor(_) {
    (super(_), _(this));
  }
  m_DragInfo = {
    bStarted: !1,
    startClientX: void 0,
    startClientY: void 0,
    startOffsetX: void 0,
    startOffsetY: void 0,
    startWidth: void 0,
    startHeight: void 0,
    ownerWin: void 0,
  };
  m_divRef = _.createRef();
  GetDragDocument() {
    return this.m_DragInfo.ownerWin?.document;
  }
  RecordDragStart(_, _, _) {
    ((this.m_DragInfo.startClientX = _), (this.m_DragInfo.startClientY = _));
    let _ = _.getBoundingClientRect();
    ((this.m_DragInfo.startOffsetX = _ - _.left),
      (this.m_DragInfo.startOffsetY = _ - _.top),
      (this.m_DragInfo.startWidth = _.width),
      (this.m_DragInfo.startHeight = _.height),
      (this.m_DragInfo.ownerWin = _.ownerDocument.defaultView));
  }
  ProcessDragMove(_) {
    _(`ProcessDragMove`, _, this.props.data);
    let [_, _] = _(_);
    if (!this.m_DragInfo.bStarted)
      (_ - (this.m_DragInfo.startClientX ?? 0)) ** 2 +
        (_ - (this.m_DragInfo.startClientY ?? 0)) ** 2 >=
        25 &&
        ((this.m_DragInfo.bStarted = !0),
        this.forceUpdate(),
        this.props.fnOnDragStart && this.props.fnOnDragStart(),
        this.props.coordinator.OnDragStart(this),
        this.props.coordinator.OnDrag(this, _, _));
    else if (this.props.bEnableHTMLDrag && _ == 0 && _ == 0) return;
    else this.props.coordinator.OnDrag(this, _, _);
  }
  OnMouseDown(_) {
    !this.m_DragInfo.bStarted &&
      _.button == 0 &&
      (this.RecordDragStart(_.currentTarget, _.clientX, _.clientY),
      this.m_DragInfo.ownerWin?.addEventListener(
        `mousemove`,
        this.ProcessDragMove,
      ),
      this.m_DragInfo.ownerWin?.addEventListener(`mouseup`, this.OnMouseUp));
  }
  OnMouseUp(_) {
    (this.m_DragInfo.ownerWin?.removeEventListener(
      `mousemove`,
      this.ProcessDragMove,
    ),
      this.m_DragInfo.ownerWin?.removeEventListener(`mouseup`, this.OnMouseUp),
      this.ResetDragState());
  }
  OnTouchStart(_) {
    this.m_DragInfo.bStarted ||
      (this.RecordDragStart(
        _.currentTarget,
        _.touches[0].clientX,
        _.touches[0].clientY,
      ),
      this.m_DragInfo.ownerWin?.addEventListener(
        `touchmove`,
        this.ProcessDragMove,
      ),
      this.m_DragInfo.ownerWin?.addEventListener(`touchend`, this.OnTouchEnd));
  }
  OnTouchEnd(_) {
    (this.m_DragInfo.ownerWin?.removeEventListener(
      `touchmove`,
      this.ProcessDragMove,
    ),
      this.m_DragInfo.ownerWin?.removeEventListener(
        `touchend`,
        this.OnTouchEnd,
      ),
      this.ResetDragState());
  }
  ResetDragState() {
    (_(`ResetDragState`, this.props.data),
      this.m_DragInfo.bStarted &&
        (this.props.coordinator.EndDrag(),
        this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
      (this.m_DragInfo.bStarted = !1),
      (this.m_DragInfo.startClientX = void 0),
      (this.m_DragInfo.startClientY = void 0),
      (this.m_DragInfo.startOffsetX = void 0),
      (this.m_DragInfo.startOffsetY = void 0),
      (this.m_DragInfo.ownerWin = void 0),
      this.forceUpdate());
  }
  OnHTMLDragStart(_) {
    (_(`HTMLDragStart`, _, this.props.data, this.props.strHTMLDragData),
      (_.dataTransfer.effectAllowed = `copyMove`),
      this.props.strHTMLDragData &&
        this.props.strHTMLDragData.forEach((_, _) =>
          _.dataTransfer.setData(_, _),
        ),
      _.dataTransfer.getData(`text/plain`) ||
        _.dataTransfer.setData(`text/plain`, this.props.data.toString()));
    let _ = new Image();
    (_.dataTransfer.setDragImage(_, 0, 0),
      this.RecordDragStart(_.currentTarget, _.clientX, _.clientY),
      this.m_DragInfo.ownerWin?.addEventListener(`drag`, this.OnHTMLDrag),
      this.m_DragInfo.ownerWin?.addEventListener(
        `dragend`,
        this.OnHTMLDragEnd,
      ));
  }
  OnHTMLDrag(_) {
    (_(`HTMLDrag`, _, _.dataTransfer?.types.length), this.ProcessDragMove(_));
  }
  OnHTMLDragEnd(_) {
    (_(
      `HTMLDragEnd`,
      _,
      _.dataTransfer?.getData(`text/plain`) || `NOTHING`,
      this.props.data,
    ),
      this.m_DragInfo.ownerWin?.removeEventListener(`drag`, this.OnHTMLDrag),
      this.m_DragInfo.ownerWin?.removeEventListener(
        `dragend`,
        this.OnHTMLDragEnd,
      ),
      this.ResetDragState());
  }
  render() {
    let {
        coordinator: _,
        data: _,
        bEnableHTMLDrag: _,
        strHTMLDragData: _,
        fnOnDragStart: _,
        fnOnDragEnd: _,
        fnRenderDragGhost: _,
        fnRenderDropGhost: _,
        className: _,
        strActiveClassName: _,
        children: _,
        ..._
      } = this.props,
      _ = {},
      _ = _ || `DialogDraggable`;
    return (
      this.m_DragInfo.bStarted
        ? ((_ = _(_, _ || `DraggedOut`)),
          _ &&
            (_ = {
              onDragEnd: this.OnHTMLDragEnd,
            }))
        : (_ = _
            ? {
                onDragStart: this.OnHTMLDragStart,
              }
            : {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
      (0, _.jsx)(`div`, {
        ref: this.m_divRef,
        className: _,
        ..._,
        ..._,
        draggable: _,
        children: _,
      })
    );
  }
  renderDropGhost() {
    return this.props.fnRenderDropGhost
      ? this.props.fnRenderDropGhost()
      : (0, _.jsx)(_, {
          elContent: this.GetClone(),
        });
  }
  renderDragGhost() {
    return this.props.fnRenderDragGhost
      ? this.props.fnRenderDragGhost()
      : (0, _.jsx)(_, {
          elContent: this.GetClone(),
          offsetX: this.m_DragInfo.startOffsetX,
          offsetY: this.m_DragInfo.startOffsetY,
          width: this.m_DragInfo.startWidth,
          height: this.m_DragInfo.startHeight,
        });
  }
  GetClone() {
    let _ = this.m_divRef.current,
      _;
    if (_ && _.childElementCount) {
      if (_.childElementCount == 1) _ = _.firstElementChild.cloneNode(!0);
      else {
        _ = document.createElement(`div`);
        for (let _ = _.firstChild; _; _ = _.nextSibling)
          _.appendChild(_.cloneNode(!0));
      }
    }
    return _;
  }
};
(_([_], _.prototype, `ProcessDragMove`, null),
  _([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `OnTouchStart`, null),
  _([_], _.prototype, `OnTouchEnd`, null),
  _([_], _.prototype, `ResetDragState`, null),
  _([_], _.prototype, `OnHTMLDragStart`, null),
  _([_], _.prototype, `OnHTMLDrag`, null),
  _([_], _.prototype, `OnHTMLDragEnd`, null));
var _ = class extends _.Component {
  OnRef(_) {
    _ && this.props.elContent && _.appendChild(this.props.elContent);
  }
  render() {
    return (0, _.jsx)(`div`, {
      className: `DialogDraggable_DropGhost`,
      ref: this.OnRef,
    });
  }
};
_([_], _.prototype, `OnRef`, null);
var _ = class extends _.Component {
  state = {
    clientX: void 0,
    clientY: void 0,
    bVisible: !0,
    clientXDelta: void 0,
    clientYDelta: void 0,
  };
  OnRef(_) {
    _ && this.props.elContent && _.appendChild(this.props.elContent);
  }
  CalculateRotationDegrees(_) {
    return !_ || Math.abs(_) < 4
      ? 0
      : (_ > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(_));
  }
  render() {
    if (
      !this.state.bVisible ||
      this.state.clientX === void 0 ||
      this.state.clientY === void 0
    )
      return (0, _.jsx)(`div`, {});
    let _ = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || `auto`,
        height: this.props.height || `auto`,
        perspective: `600px`,
      },
      _ = _(
        this.CalculateRotationDegrees(this.state.clientYDelta),
        -90,
        90,
        2,
        0,
      ),
      _ = {
        transform: `rotateX(${this.CalculateRotationDegrees(-1 * (this.state.clientYDelta ?? 0))}deg) rotateY( ${this.CalculateRotationDegrees(this.state.clientXDelta)}deg)`,
        transition: `transform .16s ease-out, filter .16s ease-out`,
        filter: `brightness(` + _ + `)`,
      },
      _ = this.props.className || `DialogDraggable_DragGhost`;
    return (0, _.jsx)(`div`, {
      className: _,
      style: _,
      children: (0, _.jsx)(`div`, {
        ref: this.OnRef,
        style: _,
      }),
    });
  }
};
_([_], _.prototype, `OnRef`, null);
var _ = class extends _.Component {
    m_divRef = _.createRef();
    constructor(_) {
      (super(_), (this.state = {}));
    }
    componentDidMount() {
      this.props.coordinator.RegisterDropRegion(this);
    }
    componentWillUnmount() {
      this.props.coordinator.UnregisterDropRegion(this);
    }
    OnDragStarted(_) {
      this.setState({
        bDraggableActive: !0,
      });
    }
    OnDragEnded(_) {
      this.setState({
        bDraggableActive: !1,
      });
    }
    OnDragEnter(_, _) {
      (this.setState({
        dropGhost: _,
      }),
        this.props.fnOnDragEnter && this.props.fnOnDragEnter(_));
    }
    OnDragLeave(_) {
      (this.setState({
        dropGhost: void 0,
      }),
        this.props.fnOnDragLeave && this.props.fnOnDragLeave(_));
    }
    OnDragMove(_, _, _) {}
    OnDrop(_) {
      (this.setState({
        dropGhost: void 0,
      }),
        this.props.fnOnDrop(_));
    }
    BAcceptDraggable(_) {
      return !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(_);
    }
    BDraggableInRegion(_, _, _) {
      return _(_, _, this.GetClientRect());
    }
    GetElement() {
      return this.m_divRef.current;
    }
    GetClientRect() {
      return (
        this.m_divRef.current && this.m_divRef.current.getBoundingClientRect()
      );
    }
    render() {
      let {
          coordinator: _,
          fnBAcceptDraggable: _,
          fnOnDrop: _,
          fnOnDragEnter: _,
          fnOnDragLeave: _,
          className: _,
          strActiveClassName: _,
          children: _,
          focusable: _,
          containerRef: _,
          ..._
        } = this.props,
        _ = _(
          _ || `DialogDropRegion`,
          this.state.bDraggableActive && (_ || `Active`),
        );
      return (0, _.jsxs)(_, {
        ref: _(_, this.m_divRef),
        className: _,
        ..._,
        focusable: _ === void 0 ? !!_.onClick : _,
        children: [this.state.dropGhost, _],
      });
    }
  },
  _ = class extends _ {
    BDraggableInRegion(_, _, _) {
      let _ = this.GetClientRect();
      return _
        ? _ >= _.left && _ <= _.right && _ >= _.top - 20 && _ <= _.bottom + 20
        : !1;
    }
  },
  _ = `ZDbqaflVHdA-`;
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M33 20.38V15.62L29.07 14.9C28.8121 14.015 28.453 13.1628 28 12.36L30.27 9.08L26.92 5.71L23.64 8C22.8372 7.54696 21.985 7.18793 21.1 6.93L20.38 3H15.62L14.9 6.93C14.015 7.18793 13.1628 7.54696 12.36 8L9.08 5.71L5.71 9.08L8 12.36C7.54696 13.1628 7.18793 14.015 6.93 14.9L3 15.62V20.38L6.93 21.1C7.18793 21.985 7.54696 22.8372 8 23.64L5.71 26.92L9.08 30.29L12.36 28C13.1637 28.4461 14.0159 28.7984 14.9 29.05L15.62 33H20.38L21.1 29.07C21.985 28.8121 22.8372 28.453 23.64 28L26.92 30.27L30.29 26.9L28 23.64C28.4461 22.8363 28.7984 21.9841 29.05 21.1L33 20.38ZM18 23C17.0111 23 16.0444 22.7068 15.2221 22.1573C14.3999 21.6079 13.759 20.827 13.3806 19.9134C13.0022 18.9998 12.9031 17.9945 13.0961 17.0245C13.289 16.0546 13.7652 15.1637 14.4645 14.4645C15.1637 13.7652 16.0546 13.289 17.0245 13.0961C17.9945 12.9031 18.9998 13.0022 19.9134 13.3806C20.827 13.759 21.6079 14.3999 22.1573 15.2221C22.7068 16.0444 23 17.0111 23 18C23 18.6566 22.8707 19.3068 22.6194 19.9134C22.3681 20.52 21.9998 21.0712 21.5355 21.5355C21.0712 21.9998 20.52 22.3681 19.9134 22.6194C19.3068 22.8707 18.6566 23 18 23Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { none: _, partial: _, ..._ } = _;
  return _
    ? (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M36 24.2C36 27.68 31 30 31 30L25 24H17.36L26.55 14.81C27.0058 14.9963 27.5066 15.0439 27.9893 14.9467C28.4721 14.8494 28.9154 14.6118 29.2636 14.2636C29.6118 13.9154 29.8494 13.4721 29.9466 12.9893C30.0438 12.5066 29.9963 12.0059 29.81 11.55L32.76 8.55002C33.39 10.79 36 20.12 36 24.2ZM33.56 3.56002L2.56 34.56L0.44 32.44L3.65 29.23C2.17 28.28 0 26.49 0 24.2C0 19.56 3.38 8.14002 3.38 8.14002C3.38 8.14002 7.5 4.00002 18 4.00002C21.2151 3.94797 24.4172 4.42085 27.48 5.40002L31.48 1.40002L33.56 3.56002ZM6 16H9V19H12V16H15V13H12V10H9V13H6V16Z`,
          fill: `currentColor`,
        }),
      })
    : _
      ? (0, _.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          version: `1.1`,
          _: `Layer_1`,
          _: `0px`,
          _: `0px`,
          viewBox: `0 0 36 36`,
          ..._,
          children: [
            (0, _.jsx)(`path`, {
              fill: `currentColor`,
              opacity: `0.5`,
              _: `M12.9,6.2c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.5-0.4-1.2-0.4c-1.1,0-4.5,1.1-5.1,1.7S5.6,8.4,5.6,8.4v0.1  c-0.4,0.3-0.8,0.7-1.1,1C3.4,10.7,0,20.2,0,25.3s3.4,5.6,3.4,5.6c0.9,0,2.3-1.8,3.7-3.5c1.2-1.5,2.3-3,3.1-3.2  c0.8-0.3,4.4-0.4,7.9-0.4V6.2H12.9z M8.4,14.6c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S9.7,14.6,8.4,14.6z M15.8,18.8  c0,0.3-0.3,0.6-0.6,0.6h-0.8v0.8c0,0.3-0.3,0.6-0.6,0.6h-1.1c-0.3,0-0.6-0.3-0.6-0.6v-0.8h-0.8c-0.3,0-0.6-0.3-0.6-0.6v-1.1  c0-0.3,0.3-0.6,0.6-0.6h0.8v-0.8c0-0.3,0.3-0.6,0.6-0.6h1.1c0.3,0,0.6,0.3,0.6,0.6v0.8h0.8c0.3,0,0.6,0.3,0.6,0.6V18.8z`,
            }),
            (0, _.jsx)(`path`, {
              fill: `currentColor`,
              _: `M31.5,9.6c-0.3-0.3-0.7-0.6-1.1-1V8.4c0,0,0-0.6-0.6-1.1s-3.9-1.7-5.1-1.7c-0.7,0-0.9,0.2-1.2,0.4c-0.2,0.1-0.3,0.2-0.5,0.2  H18v17.6c3.5,0,7,0.1,7.9,0.4c0.8,0.3,1.9,1.7,3.1,3.2c1.4,1.7,2.8,3.5,3.7,3.5c0,0,3.4-0.6,3.4-5.6S32.6,10.7,31.5,9.6z M27.6,8.7  c0.8,0,1.4,0.6,1.4,1.4s-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4S26.8,8.7,27.6,8.7z M23.1,20.2c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2  s2.2,1,2.2,2.2S24.3,20.2,23.1,20.2z M25,14.1c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4  C26.4,13.4,25.8,14.1,25,14.1z M27.6,16.6c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4S28.3,16.6,27.6,16.6z M30.1,14.1  c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C31.5,13.4,30.9,14.1,30.1,14.1z`,
            }),
          ],
        })
      : (0, _.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          version: `1.1`,
          _: `Layer_1`,
          _: `0px`,
          _: `0px`,
          viewBox: `0 0 36 36`,
          ..._,
          children: (0, _.jsx)(`path`, {
            fill: `currentColor`,
            _: `M31.5,9.6c-0.3-0.3-0.7-0.6-1.1-1V8.4c0,0,0-0.6-0.6-1.1s-3.9-1.7-5.1-1.7c-0.7,0-0.9,0.2-1.2,0.4c-0.2,0.1-0.3,0.2-0.5,0.2  H12.9c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.5-0.4-1.2-0.4c-1.1,0-4.5,1.1-5.1,1.7S5.6,8.4,5.6,8.4v0.1c-0.4,0.3-0.8,0.7-1.1,1  C3.4,10.7,0,20.2,0,25.3s3.4,5.6,3.4,5.6c0.9,0,2.3-1.8,3.7-3.5c1.2-1.5,2.3-3,3.1-3.2c1.7-0.6,14.1-0.6,15.8,0  c0.8,0.3,1.9,1.7,3.1,3.2c1.4,1.7,2.8,3.5,3.7,3.5c0,0,3.4-0.6,3.4-5.6S32.6,10.7,31.5,9.6z M8.4,14.6c-1.2,0-2.2-1-2.2-2.2  s1-2.2,2.2-2.2s2.2,1,2.2,2.2S9.7,14.6,8.4,14.6z M15.8,18.8c0,0.3-0.3,0.6-0.6,0.6h-0.8v0.8c0,0.3-0.3,0.6-0.6,0.6h-1.1  c-0.3,0-0.6-0.3-0.6-0.6v-0.8h-0.8c-0.3,0-0.6-0.3-0.6-0.6v-1.1c0-0.3,0.3-0.6,0.6-0.6h0.8v-0.8c0-0.3,0.3-0.6,0.6-0.6h1.1  c0.3,0,0.6,0.3,0.6,0.6v0.8h0.8c0.3,0,0.6,0.3,0.6,0.6V18.8z M27.6,8.7c0.8,0,1.4,0.6,1.4,1.4s-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4  S26.8,8.7,27.6,8.7z M23.1,20.2c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S24.3,20.2,23.1,20.2z M25,14.1  c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4C26.4,13.4,25.8,14.1,25,14.1z M27.6,16.6c-0.8,0-1.4-0.6-1.4-1.4  s0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4S28.3,16.6,27.6,16.6z M30.1,14.1c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4  C31.5,13.4,30.9,14.1,30.1,14.1z`,
          }),
        });
}
function _(_) {
  let { type: _, partial: _, ..._ } = _,
    [_, _] = _();
  return _ == `triton`
    ? (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`g`, {
            clipPath: _,
            children: (0, _.jsx)(`path`, {
              fill: `currentColor`,
              _: `M34.5489 14.8979C34.0471 13.107 33.4146 11.3703 32.6633 9.69886C31.5496 7.22244 29.0787 5.63623 26.3628 5.63623H9.539C6.82361 5.63623 4.35214 7.22244 3.23897 9.69886C2.48764 11.3703 1.85526 13.107 1.35345 14.8979C0.452174 18.1113 -0.0302734 21.4994 -0.0302734 25.0005C-0.0302734 25.6495 -0.0136754 26.2952 0.0189672 26.9359C0.121874 28.9492 1.77614 30.5332 3.79169 30.5332C5.15659 30.5332 6.41639 29.7979 7.0836 28.6073C7.09136 28.5929 7.09967 28.5791 7.10742 28.5647C7.86815 27.2191 9.29118 26.3837 10.837 26.3837H25.0637C26.6095 26.3837 28.0325 27.2191 28.7932 28.5647C28.801 28.5785 28.8092 28.5929 28.817 28.6067C29.4843 29.7974 30.744 30.5327 32.1089 30.5327C34.1251 30.5327 35.7788 28.9492 35.8817 26.9353C35.9143 26.294 35.9309 25.649 35.9309 25C35.9309 21.4989 35.4485 18.1107 34.5477 14.8973L34.5489 14.8979ZM25.2634 8.40256C26.0274 8.40256 26.6466 9.02167 26.6466 9.78573C26.6466 10.5498 26.0274 11.1689 25.2634 11.1689C24.4993 11.1689 23.8802 10.5498 23.8802 9.78573C23.8802 9.02167 24.4993 8.40256 25.2634 8.40256ZM26.6466 15.3184C26.6466 16.0825 26.0274 16.7016 25.2634 16.7016C24.4993 16.7016 23.8802 16.0825 23.8802 15.3184C23.8802 14.5544 24.4993 13.9352 25.2634 13.9352C26.0274 13.9352 26.6466 14.5544 26.6466 15.3184ZM10.6383 9.78573C12.1659 9.78573 13.4047 11.0245 13.4047 12.552C13.4047 14.0796 12.1659 15.3184 10.6383 15.3184C9.11076 15.3184 7.87203 14.0796 7.87203 12.552C7.87203 11.0245 9.11076 9.78573 10.6383 9.78573ZM13.6913 19.262L13.0506 23.3059C12.9886 23.6982 12.6202 23.9659 12.2279 23.904L8.18409 23.2633C7.79179 23.2013 7.52403 22.8328 7.58597 22.4406L8.2267 18.3968C8.28864 18.0045 8.65712 17.7367 9.04936 17.7987L13.0932 18.4394C13.4855 18.5013 13.7532 18.8698 13.6913 19.262ZM21.1139 12.552C21.1139 11.788 21.733 11.1689 22.4971 11.1689C23.2611 11.1689 23.8802 11.788 23.8802 12.552C23.8802 13.3161 23.2611 13.9352 22.4971 13.9352C21.733 13.9352 21.1139 13.3161 21.1139 12.552ZM27.7177 23.2633L23.6738 23.904C23.2816 23.9659 22.9131 23.6987 22.8511 23.3059L22.2105 19.262C22.1485 18.8698 22.4157 18.5013 22.8086 18.4394L26.8524 17.7987C27.2446 17.7367 27.6131 18.0045 27.6751 18.3968L28.3158 22.4406C28.3777 22.8328 28.11 23.2013 27.7177 23.2633ZM28.0297 13.9352C27.2657 13.9352 26.6466 13.3161 26.6466 12.552C26.6466 11.788 27.2657 11.1689 28.0297 11.1689C28.7938 11.1689 29.4129 11.788 29.4129 12.552C29.4129 13.3161 28.7938 13.9352 28.0297 13.9352Z`,
            }),
          }),
          (0, _.jsx)(`defs`, {
            children: (0, _.jsx)(`clipPath`, {
              _: _,
              children: (0, _.jsx)(`rect`, {
                fill: `currentColor`,
                width: `36`,
                height: `36`,
              }),
            }),
          }),
        ],
      })
    : _ == `steam`
      ? (0, _.jsxs)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 36 36`,
          fill: `none`,
          ..._,
          children: [
            (0, _.jsxs)(`g`, {
              clipPath: _,
              children: [
                (0, _.jsx)(`path`, {
                  fill: `currentColor`,
                  _: `M5.625 31.0429C0.0351562 31.0429 0.0351562 24.75 0.0351562 24.75C0.0351562 23.2708 0.691018 18.9574 1.67867 14.9078C2.09604 21.229 4.23237 26.4107 7.46967 30.1342C6.94663 30.6907 6.34611 31.0429 5.625 31.0429Z`,
                }),
                (0, _.jsx)(`path`, {
                  fill: `currentColor`,
                  fillRule: `evenodd`,
                  clipRule: `evenodd`,
                  _: `M8.16687 29.2194C4.59849 25.0137 2.43205 18.8213 2.76162 11.0707C3.47054 8.93505 4.26138 7.27235 5.0625 6.76752C8.1706 5.06632 27.6869 4.8903 31.0078 6.76752C31.7909 7.26099 32.5642 8.86083 33.2607 10.9273C33.6225 18.7277 31.4618 24.9603 27.8856 29.1914C27.4035 28.4325 26.984 27.5272 26.5768 26.6483C25.7189 24.7967 24.9154 23.0625 23.6953 23.0625H12.375C11.1549 23.0625 10.3514 24.7967 9.49349 26.6483C9.08125 27.538 8.65647 28.4548 8.16687 29.2194ZM18 12.9375C18.7766 12.9375 19.4062 12.3079 19.4062 11.5312C19.4062 10.7546 18.7766 10.125 18 10.125C17.2234 10.125 16.5938 10.7546 16.5938 11.5312C16.5938 12.3079 17.2234 12.9375 18 12.9375ZM22.5 15.75C22.5 16.3713 21.9963 16.875 21.375 16.875C20.7537 16.875 20.25 16.3713 20.25 15.75C20.25 15.1286 20.7537 14.625 21.375 14.625C21.9963 14.625 22.5 15.1286 22.5 15.75ZM15.75 18.8437C15.75 19.931 14.8686 20.8125 13.7812 20.8125C12.6939 20.8125 11.8125 19.931 11.8125 18.8437C11.8125 17.7564 12.6939 16.875 13.7812 16.875C14.8686 16.875 15.75 17.7564 15.75 18.8437ZM24.75 18C24.75 18.6213 24.2463 19.125 23.625 19.125C23.0037 19.125 22.5 18.6213 22.5 18C22.5 17.3786 23.0037 16.875 23.625 16.875C24.2463 16.875 24.75 17.3786 24.75 18ZM21.375 21.375C21.9963 21.375 22.5 20.8713 22.5 20.25C22.5 19.6286 21.9963 19.125 21.375 19.125C20.7537 19.125 20.25 19.6286 20.25 20.25C20.25 20.8713 20.7537 21.375 21.375 21.375ZM20.25 18C20.25 18.6213 19.7463 19.125 19.125 19.125C18.5037 19.125 18 18.6213 18 18C18 17.3786 18.5037 16.875 19.125 16.875C19.7463 16.875 20.25 17.3786 20.25 18ZM13.5 12.375C13.5 14.8602 11.4853 16.875 9 16.875C6.51472 16.875 4.5 14.8602 4.5 12.375C4.5 9.88969 6.51472 7.87497 9 7.87497C11.4853 7.87497 13.5 9.88969 13.5 12.375ZM27 16.875C29.4853 16.875 31.5 14.8602 31.5 12.375C31.5 9.88969 29.4853 7.87497 27 7.87497C24.5147 7.87497 22.5 9.88969 22.5 12.375C22.5 14.8602 24.5147 16.875 27 16.875Z`,
                }),
                (0, _.jsx)(`path`, {
                  fill: `currentColor`,
                  _: `M28.5791 30.1112C29.1072 30.6809 29.7143 31.0429 30.4453 31.0429C36.0352 31.0429 36.0352 24.75 36.0352 24.75C36.0352 23.2544 35.3647 18.8614 34.3587 14.7732C33.9637 21.1424 31.8281 26.3629 28.5791 30.1112Z`,
                }),
              ],
            }),
            (0, _.jsx)(`defs`, {
              children: (0, _.jsx)(`clipPath`, {
                _: _,
                children: (0, _.jsx)(`rect`, {
                  fill: `currentColor`,
                  width: `36`,
                  height: `36`,
                }),
              }),
            }),
          ],
        })
      : _ == `steamframe`
        ? (0, _.jsxs)(`svg`, {
            xmlns: `http://www.w3.org/2000/svg`,
            viewBox: `0 0 595 397`,
            fill: `none`,
            ..._,
            children: [
              (0, _.jsx)(`path`, {
                fill: `white`,
                _: `M104.789 78.6405H129.852C131.696 78.6405 133.203 77.1359 133.203 75.2934C133.203 73.451 131.696 71.9464 129.852 71.9464H104.789C102.945 71.9464 101.439 73.451 101.439 75.2934C101.439 77.1359 102.945 78.6405 104.789 78.6405ZM132.895 140.351C132.895 126.165 144.453 114.619 158.654 114.619C172.856 114.619 184.414 126.165 184.414 140.351C184.414 154.538 172.856 166.084 158.654 166.084C144.453 166.084 132.895 154.538 132.895 140.351ZM140.201 140.351C140.201 150.526 148.459 158.775 158.644 158.775C168.829 158.775 177.088 150.526 177.088 140.351C177.088 130.177 168.829 121.927 158.644 121.927C148.459 121.927 140.201 130.177 140.201 140.351ZM111.101 179.707C111.101 177.947 109.677 176.524 107.915 176.524C106.152 176.524 104.728 177.947 104.728 179.707C104.728 181.468 106.152 182.891 107.915 182.891C109.677 182.891 111.101 181.468 111.101 179.707ZM158.644 152.634C165.427 152.634 170.94 147.127 170.94 140.351C170.94 133.575 165.427 128.068 158.644 128.068C151.861 128.068 146.349 133.575 146.349 140.351C146.349 147.127 151.861 152.634 158.644 152.634ZM158.573 259.402H158.614C158.614 259.402 162.179 256.659 165.745 255.472C169.311 254.284 178.338 251.684 180.223 249.688C182.119 247.693 182.447 245.533 181.955 242.564C181.473 239.596 177.58 230.845 175.797 224.857C175.735 224.662 175.674 224.458 175.612 224.243C167.856 228.48 159.669 231.838 151.164 234.274C148.798 258.921 157.855 259.402 158.573 259.402ZM166.329 260.17C164.28 261.04 162.148 262.493 161.421 263.046C160.673 263.629 159.751 263.967 158.798 264.008H158.573C157.517 264.008 153.849 263.711 150.724 259.812C146.974 255.144 145.549 247.007 146.441 235.522C137.024 237.825 127.27 239.002 117.321 239.002C90.8851 239.002 65.7406 230.66 44.8893 215.225C45.1762 215.798 45.4631 216.361 45.7295 216.924C68.6403 265.288 88.0469 397 141.656 397C161.155 397 187.959 382.752 181.043 336.538C181.043 336.538 173.245 297.458 166.329 260.17ZM98.4879 124.179C99.2462 124.179 99.8712 123.565 99.8712 122.797V108.723C99.8712 107.966 99.2564 107.341 98.4879 107.341H85.8849C80.8335 107.341 76.7349 103.237 76.7349 98.2008V84.0961C76.7349 83.3387 76.1201 82.7143 75.3517 82.7143H58.2198C57.4615 82.7143 56.8365 83.3284 56.8365 84.0961V98.2008C56.8365 103.247 52.7277 107.341 47.6865 107.341H35.0835C34.3253 107.341 33.7002 107.955 33.7002 108.723V122.797C33.7002 123.555 34.315 124.179 35.0835 124.179H47.6865C52.738 124.179 56.8365 128.283 56.8365 133.319V147.424C56.8365 148.182 57.4513 148.806 58.2198 148.806H75.3517C76.1099 148.806 76.7349 148.192 76.7349 147.424V133.319C76.7349 128.273 80.8437 124.179 85.8849 124.179H98.4879ZM117.321 234.396C52.5228 234.396 0 181.928 0 117.198C0 52.468 52.5228 0 117.321 0C182.119 0 234.641 52.4782 234.641 117.198C234.641 159.645 212.058 196.811 178.235 217.385C176.893 218.204 175.53 218.992 174.157 219.739C167.108 223.659 159.607 226.863 151.759 229.258C150.16 229.76 148.552 230.21 146.933 230.63C137.475 233.086 127.547 234.396 117.321 234.396ZM158.644 108.477C141.021 108.477 126.737 122.746 126.737 140.351C126.737 157.957 141.021 172.225 158.644 172.225C176.268 172.225 190.551 157.957 190.551 140.351C190.551 122.746 176.268 108.477 158.644 108.477ZM111.685 51.2806C111.685 54.3922 114.206 56.9102 117.321 56.9102C120.436 56.9102 122.956 54.3922 122.956 51.2806C122.956 48.169 120.436 45.651 117.321 45.651C114.206 45.651 111.685 48.169 111.685 51.2806ZM95.2911 75.2934C95.2911 80.5341 99.5433 84.7819 104.789 84.7819H129.852C135.098 84.7819 139.35 80.5341 139.35 75.2934C139.35 70.0528 135.098 65.805 129.852 65.805H104.789C99.5433 65.805 95.2911 70.0528 95.2911 75.2934ZM85.8849 130.32H98.4879C102.648 130.32 106.019 126.953 106.019 122.797V108.723C106.019 104.567 102.648 101.2 98.4879 101.2H85.8849C84.225 101.2 82.8827 99.859 82.8827 98.2008V84.0961C82.8827 79.9404 79.5117 76.5729 75.3517 76.5729H58.2198C54.0598 76.5729 50.6887 79.9404 50.6887 84.0961V98.2008C50.6887 99.859 49.3464 101.2 47.6865 101.2H35.0835C30.9235 101.2 27.5524 104.567 27.5524 108.723V122.797C27.5524 126.953 30.9235 130.32 35.0835 130.32H47.6865C49.3464 130.32 50.6887 131.661 50.6887 133.319V147.424C50.6887 151.58 54.0598 154.947 58.2198 154.947H75.3517C79.5117 154.947 82.8827 151.58 82.8827 147.424V133.319C82.8827 131.661 84.225 130.32 85.8849 130.32ZM119.206 184.047C119.206 174.743 111.654 167.21 102.351 167.21C93.0471 167.21 86.2435 174.027 85.5468 182.696L94.5841 186.432C95.3525 185.91 96.2747 185.603 97.2686 185.603C97.3608 185.603 97.4428 185.603 97.535 185.603L101.552 179.789C101.552 179.789 101.552 179.738 101.552 179.707C101.552 176.207 104.4 173.351 107.915 173.351C111.429 173.351 114.267 176.197 114.267 179.707C114.267 183.218 111.419 186.064 107.915 186.064C107.863 186.064 107.822 186.064 107.771 186.064L102.043 190.148C102.043 190.219 102.043 190.301 102.043 190.373C102.043 193.003 99.9019 195.143 97.2686 195.143C94.9632 195.143 93.0266 193.495 92.586 191.315L86.1206 188.643C88.1186 195.716 94.6251 200.895 102.341 200.895C111.654 200.895 119.196 193.351 119.196 184.057L119.206 184.047ZM99.5536 191.345C98.99 192.686 97.4531 193.321 96.1005 192.768L94.0308 191.918C94.3996 192.686 95.0349 193.321 95.8751 193.669C97.699 194.426 99.7995 193.566 100.558 191.745C100.927 190.864 100.927 189.892 100.558 189.012C100.189 188.131 99.5023 187.435 98.6211 187.067C97.7399 186.698 96.8075 186.719 95.9776 187.026L98.1191 187.906C99.4613 188.469 100.097 190.004 99.5433 191.356L99.5536 191.345ZM107.904 183.945C110.24 183.945 112.136 182.051 112.136 179.718C112.136 177.384 110.24 175.49 107.904 175.49C105.568 175.49 103.673 177.384 103.673 179.718C103.673 182.051 105.578 183.945 107.904 183.945Z`,
              }),
              (0, _.jsx)(`path`, {
                fill: `white`,
                _: `M461.638 75.2934C461.638 73.451 463.144 71.9464 464.988 71.9464H490.051C491.895 71.9464 493.401 73.451 493.401 75.2934C493.401 77.1359 491.895 78.6405 490.051 78.6405H464.988C463.144 78.6405 461.638 77.1359 461.638 75.2934ZM501.188 179.707C501.188 177.947 499.764 176.524 498.002 176.524C496.24 176.524 494.815 177.947 494.815 179.707C494.815 181.468 496.24 182.891 498.002 182.891C499.764 182.891 501.188 181.468 501.188 179.707ZM436.196 127.966C429.413 127.966 423.9 133.473 423.9 140.249C423.9 147.025 429.413 152.532 436.196 152.532C442.979 152.532 448.492 147.025 448.492 140.249C448.492 133.473 442.979 127.966 436.196 127.966ZM503.504 124.281C508.207 124.281 512.029 120.463 512.029 115.765C512.029 111.067 508.207 107.249 503.504 107.249C498.801 107.249 494.979 111.067 494.979 115.765C494.979 120.463 498.801 124.281 503.504 124.281ZM528.054 99.7567C532.758 99.7567 536.579 95.9388 536.579 91.2406C536.579 86.5424 532.758 82.7245 528.054 82.7245C523.351 82.7245 519.53 86.5424 519.53 91.2406C519.53 95.9388 523.351 99.7567 528.054 99.7567ZM461.945 140.351C461.945 154.538 450.387 166.084 436.186 166.084C421.984 166.084 410.426 154.538 410.426 140.351C410.426 126.165 421.984 114.619 436.186 114.619C450.387 114.619 461.945 126.165 461.945 140.351ZM454.639 140.249C454.639 130.075 446.381 121.825 436.196 121.825C426.011 121.825 417.752 130.075 417.752 140.249C417.752 150.423 426.011 158.673 436.196 158.673C446.381 158.673 454.639 150.423 454.639 140.249ZM447.908 230.63C446.289 230.21 444.68 229.76 443.081 229.258C435.233 226.863 427.732 223.659 420.683 219.739C419.31 218.992 417.947 218.204 416.605 217.385C382.782 196.811 360.199 159.645 360.199 117.198C360.199 52.4782 412.732 0 477.519 0C542.307 0 594.84 52.4782 594.84 117.198C594.84 181.918 542.317 234.396 477.519 234.396C467.294 234.396 457.365 233.086 447.908 230.63ZM509.293 184.047C509.293 174.743 501.742 167.21 492.438 167.21C483.134 167.21 476.331 174.027 475.634 182.696L484.671 186.432C485.44 185.91 486.362 185.603 487.356 185.603C487.448 185.603 487.53 185.603 487.622 185.603L491.639 179.789C491.639 179.789 491.639 179.738 491.639 179.707C491.639 176.207 494.487 173.351 498.002 173.351C501.516 173.351 504.355 176.197 504.355 179.707C504.355 183.218 501.506 186.064 498.002 186.064C497.951 186.064 497.91 186.064 497.858 186.064L492.131 190.148C492.131 190.219 492.131 190.301 492.131 190.373C492.131 193.003 489.989 195.143 487.356 195.143C485.05 195.143 483.114 193.495 482.673 191.315L476.208 188.643C478.206 195.716 484.712 200.895 492.428 200.895C501.742 200.895 509.283 193.351 509.283 184.057L509.293 184.047ZM489.651 191.345C489.088 192.686 487.551 193.321 486.198 192.768L484.128 191.918C484.497 192.686 485.132 193.321 485.973 193.669C487.797 194.426 489.897 193.566 490.655 191.745C491.024 190.864 491.024 189.892 490.655 189.012C490.286 188.131 489.6 187.435 488.719 187.067C487.838 186.698 486.905 186.719 486.075 187.026L488.217 187.906C489.559 188.469 490.194 190.004 489.641 191.356L489.651 191.345ZM498.002 183.945C500.338 183.945 502.234 182.051 502.234 179.718C502.234 177.384 500.338 175.49 498.002 175.49C495.666 175.49 493.77 177.384 493.77 179.718C493.77 182.051 495.676 183.945 498.002 183.945ZM542.727 140.29C542.727 132.193 536.159 125.632 528.054 125.632C519.95 125.632 513.382 132.193 513.382 140.29C513.382 148.386 519.95 154.947 528.054 154.947C536.159 154.947 542.727 148.386 542.727 140.29ZM552.605 101.098C544.5 101.098 537.932 107.659 537.932 115.755C537.932 123.851 544.5 130.412 552.605 130.412C560.71 130.412 567.277 123.851 567.277 115.755C567.277 107.659 560.71 101.098 552.605 101.098ZM513.371 91.2304C513.371 99.3268 519.939 105.888 528.044 105.888C536.149 105.888 542.717 99.3268 542.717 91.2304C542.717 83.134 536.149 76.5729 528.044 76.5729C519.939 76.5729 513.371 83.134 513.371 91.2304ZM503.504 101.098C495.399 101.098 488.831 107.659 488.831 115.755C488.831 123.851 495.399 130.412 503.504 130.412C511.609 130.412 518.177 123.851 518.177 115.755C518.177 107.659 511.609 101.098 503.504 101.098ZM471.884 51.2806C471.884 54.3922 474.405 56.9102 477.519 56.9102C480.634 56.9102 483.155 54.3922 483.155 51.2806C483.155 48.169 480.634 45.651 477.519 45.651C474.405 45.651 471.884 48.169 471.884 51.2806ZM455.49 75.2934C455.49 80.5341 459.742 84.7819 464.988 84.7819H490.051C495.297 84.7819 499.549 80.5341 499.549 75.2934C499.549 70.0528 495.297 65.805 490.051 65.805H464.988C459.742 65.805 455.49 70.0528 455.49 75.2934ZM468.093 140.351C468.093 122.746 453.809 108.477 436.186 108.477C418.562 108.477 404.278 122.746 404.278 140.351C404.278 157.957 418.562 172.225 436.186 172.225C453.809 172.225 468.093 157.957 468.093 140.351ZM477.519 239.002C467.581 239.002 457.826 237.825 448.41 235.533C449.291 247.017 447.866 255.144 444.116 259.812C440.991 263.711 437.323 264.008 436.278 264.008H436.042C435.089 263.967 434.177 263.629 433.419 263.056C432.692 262.504 430.571 261.04 428.511 260.17C421.595 297.458 413.797 336.538 413.797 336.538C406.881 382.742 433.686 397 453.184 397C506.783 397 526.2 265.288 549.111 216.924C549.377 216.361 549.654 215.798 549.951 215.225C529.1 230.671 503.955 239.002 477.519 239.002ZM552.605 124.281C557.308 124.281 561.13 120.463 561.13 115.765C561.13 111.067 557.308 107.249 552.605 107.249C547.902 107.249 544.08 111.067 544.08 115.765C544.08 120.463 547.902 124.281 552.605 124.281ZM433.993 257.887C435.335 258.716 436.227 259.402 436.227 259.402H436.278C436.995 259.402 446.053 258.921 443.676 234.274C435.171 231.838 426.984 228.48 419.228 224.243C419.166 224.458 419.105 224.662 419.044 224.857C417.261 230.845 413.377 239.596 412.885 242.564C412.404 245.533 412.722 247.693 414.617 249.688C416.502 251.684 425.529 254.284 429.095 255.472C430.878 256.065 432.661 257.048 433.993 257.887ZM528.054 131.764C523.351 131.764 519.53 135.581 519.53 140.28C519.53 144.978 523.351 148.796 528.054 148.796C532.758 148.796 536.579 144.978 536.579 140.28C536.579 135.581 532.758 131.764 528.054 131.764Z`,
              }),
            ],
          })
        : _ == `xbox`
          ? _
            ? (0, _.jsxs)(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                version: `1.1`,
                _: `Layer_1`,
                _: `0px`,
                _: `0px`,
                viewBox: `0 0 36 36`,
                ..._,
                children: [
                  (0, _.jsx)(`path`, {
                    fill: `currentColor`,
                    opacity: `0.5`,
                    _: `M12.9,6.2c-0.2,0-0.4-0.1-0.5-0.2c-0.2-0.2-0.5-0.4-1.2-0.4c-1.1,0-4.5,1.1-5.1,1.7S5.6,8.4,5.6,8.4v0.1  c-0.4,0.3-0.8,0.7-1.1,1C3.4,10.7,0,20.2,0,25.3s3.4,5.6,3.4,5.6c0.9,0,2.3-1.8,3.7-3.5c1.2-1.5,2.3-3,3.1-3.2  c0.8-0.3,4.4-0.4,7.9-0.4V6.2H12.9z M8.4,14.6c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S9.7,14.6,8.4,14.6z M15.8,18.8  c0,0.3-0.3,0.6-0.6,0.6h-0.8v0.8c0,0.3-0.3,0.6-0.6,0.6h-1.1c-0.3,0-0.6-0.3-0.6-0.6v-0.8h-0.8c-0.3,0-0.6-0.3-0.6-0.6v-1.1  c0-0.3,0.3-0.6,0.6-0.6h0.8v-0.8c0-0.3,0.3-0.6,0.6-0.6h1.1c0.3,0,0.6,0.3,0.6,0.6v0.8h0.8c0.3,0,0.6,0.3,0.6,0.6V18.8z`,
                  }),
                  (0, _.jsx)(`path`, {
                    fill: `currentColor`,
                    _: `M31.5,9.6c-0.3-0.3-0.7-0.6-1.1-1V8.4c0,0,0-0.6-0.6-1.1s-3.9-1.7-5.1-1.7c-0.7,0-0.9,0.2-1.2,0.4c-0.2,0.1-0.3,0.2-0.5,0.2  H18v17.6c3.5,0,7,0.1,7.9,0.4c0.8,0.3,1.9,1.7,3.1,3.2c1.4,1.7,2.8,3.5,3.7,3.5c0,0,3.4-0.6,3.4-5.6S32.6,10.7,31.5,9.6z M27.6,8.7  c0.8,0,1.4,0.6,1.4,1.4s-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4S26.8,8.7,27.6,8.7z M23.1,20.2c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2  s2.2,1,2.2,2.2S24.3,20.2,23.1,20.2z M25,14.1c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4  C26.4,13.4,25.8,14.1,25,14.1z M27.6,16.6c-0.8,0-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4S28.3,16.6,27.6,16.6z M30.1,14.1  c-0.8,0-1.4-0.6-1.4-1.4c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4C31.5,13.4,30.9,14.1,30.1,14.1z`,
                  }),
                ],
              })
            : (0, _.jsx)(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                viewBox: `0 0 36 36`,
                fill: `none`,
                ..._,
                children: (0, _.jsx)(`path`, {
                  fill: `currentColor`,
                  fillRule: `evenodd`,
                  clipRule: `evenodd`,
                  _: `M11.25 5.625C11.909 5.625 12.182 5.81802 12.4081 5.97792C12.568 6.09099 12.7045 6.1875 12.9375 6.1875H23.0625C23.2955 6.1875 23.432 6.09099 23.5919 5.97792C23.818 5.81802 24.091 5.625 24.75 5.625C25.875 5.625 29.25 6.75 29.8125 7.3125C30.375 7.875 30.375 8.4375 30.375 8.4375V8.5803C30.8163 8.91923 31.1986 9.26106 31.5 9.5625C32.625 10.6875 36 20.25 36 25.3125C36 30.375 32.625 30.9375 32.625 30.9375C31.7178 30.9375 30.323 29.1494 28.9649 27.4083C27.7966 25.9106 26.6553 24.4476 25.875 24.1875C24.1875 23.625 11.8125 23.625 10.125 24.1875C9.34465 24.4476 8.20344 25.9106 7.03512 27.4083C5.67696 29.1494 4.28215 30.9375 3.375 30.9375C3.375 30.9375 0 30.375 0 25.3125C0 20.25 3.375 10.6875 4.5 9.5625C4.80144 9.26106 5.18366 8.91923 5.625 8.5803V8.4375C5.625 8.4375 5.625 7.875 6.1875 7.3125C6.75 6.75 10.125 5.625 11.25 5.625ZM27.5625 8.71875C28.3392 8.71875 28.9688 9.34835 28.9688 10.125C28.9688 10.9017 28.3392 11.5312 27.5625 11.5312C26.7858 11.5312 26.1562 10.9017 26.1562 10.125C26.1562 9.34835 26.7858 8.71875 27.5625 8.71875ZM8.4375 14.625C9.68014 14.625 10.6875 13.6176 10.6875 12.375C10.6875 11.1324 9.68014 10.125 8.4375 10.125C7.19486 10.125 6.1875 11.1324 6.1875 12.375C6.1875 13.6176 7.19486 14.625 8.4375 14.625ZM23.0625 20.25C24.3051 20.25 25.3125 19.2426 25.3125 18C25.3125 16.7574 24.3051 15.75 23.0625 15.75C21.8199 15.75 20.8125 16.7574 20.8125 18C20.8125 19.2426 21.8199 20.25 23.0625 20.25ZM12.0938 17.1562V16.3125C12.0938 16.0018 12.3456 15.75 12.6562 15.75H13.7812C14.0919 15.75 14.3438 16.0018 14.3438 16.3125V17.1562H15.1875C15.4982 17.1562 15.75 17.4081 15.75 17.7188V18.8438C15.75 19.1544 15.4982 19.4062 15.1875 19.4062H14.3438V20.25C14.3438 20.5607 14.0919 20.8125 13.7812 20.8125H12.6562C12.3456 20.8125 12.0938 20.5607 12.0938 20.25V19.4062H11.25C10.9393 19.4062 10.6875 19.1544 10.6875 18.8438V17.7188C10.6875 17.4081 10.9393 17.1562 11.25 17.1562H12.0938ZM25.0312 14.0625C25.8079 14.0625 26.4375 13.4329 26.4375 12.6562C26.4375 11.8796 25.8079 11.25 25.0312 11.25C24.2546 11.25 23.625 11.8796 23.625 12.6562C23.625 13.4329 24.2546 14.0625 25.0312 14.0625ZM31.5 12.6562C31.5 13.4329 30.8704 14.0625 30.0938 14.0625C29.3171 14.0625 28.6875 13.4329 28.6875 12.6562C28.6875 11.8796 29.3171 11.25 30.0938 11.25C30.8704 11.25 31.5 11.8796 31.5 12.6562ZM28.9688 15.1875C28.9688 14.4108 28.3392 13.7812 27.5625 13.7812C26.7858 13.7812 26.1562 14.4108 26.1562 15.1875C26.1562 15.9642 26.7858 16.5938 27.5625 16.5938C28.3392 16.5938 28.9688 15.9642 28.9688 15.1875Z`,
                }),
              })
          : _ == `ps4`
            ? _
              ? (0, _.jsxs)(`svg`, {
                  xmlns: `http://www.w3.org/2000/svg`,
                  version: `1.1`,
                  _: `Layer_1`,
                  _: `0px`,
                  _: `0px`,
                  viewBox: `0 0 36 36`,
                  ..._,
                  children: [
                    (0, _.jsx)(`path`, {
                      fill: `currentColor`,
                      opacity: `0.5`,
                      _: `M12.9,13.7c-0.6,0-1.1-0.5-1.1-1.1V8l-1.7,0L9.6,7.5c0,0-0.1,0-0.2,0C9.3,7.3,9.2,7.1,9,6.9  C6.7,6.5,5.2,7.1,4.7,7.4c-0.1,0-0.1,0.1-0.2,0.1C3.9,8,2.8,10.3,2.8,10.3C2.2,12,0.6,17,0,23.8c0,0-0.6,5.1,3.4,5.6  c3.5,0.4,4.6-4.1,5.2-6.5c0.2-0.7,0.3-1.2,0.4-1.4c0.3-0.3,0.7-0.5,0.9-0.5c0.6,0.7,1.5,1.1,2.5,1.1c1,0,1.9-0.4,2.5-1.1H18v-7.3  H12.9z M5.6,10.8c0-0.3,0.2-0.5,0.5-0.5h1.2c0.3,0,0.5,0.2,0.5,0.5v1c0,0.1-0.1,0.3-0.1,0.4l-0.6,0.6c-0.2,0.2-0.5,0.2-0.7,0  l-0.6-0.6c-0.1-0.1-0.1-0.2-0.1-0.4V10.8z M5.1,14.5h-1c-0.3,0-0.5-0.2-0.5-0.5v-1.2c0-0.3,0.2-0.5,0.5-0.5h1c0.1,0,0.3,0.1,0.4,0.1  L6.1,13c0.2,0.2,0.2,0.5,0,0.7l-0.6,0.6C5.4,14.4,5.3,14.5,5.1,14.5z M7.9,16c0,0.3-0.2,0.5-0.5,0.5H6.1c-0.3,0-0.5-0.2-0.5-0.5v-1  c0-0.1,0.1-0.3,0.1-0.4L6.4,14c0.2-0.2,0.5-0.2,0.7,0l0.6,0.6c0.1,0.1,0.1,0.2,0.1,0.4V16z M9.8,14c0,0.3-0.2,0.5-0.5,0.5h-1  c-0.1,0-0.3-0.1-0.4-0.1l-0.6-0.6c-0.2-0.2-0.2-0.5,0-0.7L8,12.4c0.1-0.1,0.2-0.1,0.4-0.1h1c0.3,0,0.5,0.2,0.5,0.5V14z M12.1,20.4  c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2C14.4,19.4,13.4,20.4,12.1,20.4z`,
                    }),
                    (0, _.jsx)(`path`, {
                      fill: `currentColor`,
                      _: `M36,23.8C35.4,17,33.8,12,33.2,10.3c0,0-1.1-2.2-1.7-2.8c0,0-0.1-0.1-0.2-0.1c-0.5-0.3-2-0.9-4.3-0.5  c-0.2,0.2-0.3,0.4-0.4,0.5c-0.1,0-0.2,0-0.2,0L25.9,8l-1.7,0v4.5c0,0.6-0.5,1.1-1.1,1.1H18V21h3.1c0.6,0.7,1.5,1.1,2.5,1.1  c1,0,1.9-0.4,2.5-1.1c0.2,0.1,0.6,0.2,0.9,0.5c0.1,0.1,0.3,0.7,0.4,1.4c0.6,2.4,1.7,6.9,5.2,6.5C36.6,28.8,36,23.8,36,23.8z   M23.6,20.4c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2C25.9,19.4,24.9,20.4,23.6,20.4z M26.7,14.5  c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C27.8,14,27.3,14.5,26.7,14.5z M29.2,17  c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C30.4,16.5,29.9,17,29.2,17z M29.2,12c-0.6,0-1.1-0.5-1.1-1.1  c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C30.4,11.5,29.9,12,29.2,12z M31.8,14.5c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1  c0.6,0,1.1,0.5,1.1,1.1C32.9,14,32.4,14.5,31.8,14.5z`,
                    }),
                    (0, _.jsx)(`rect`, {
                      fill: `currentColor`,
                      opacity: `0.5`,
                      _: `12.9`,
                      _: `8`,
                      width: `5.1`,
                      height: `4.5`,
                    }),
                    (0, _.jsx)(`rect`, {
                      fill: `currentColor`,
                      _: `18`,
                      _: `8`,
                      width: `5.1`,
                      height: `4.5`,
                    }),
                  ],
                })
              : (0, _.jsxs)(`svg`, {
                  xmlns: `http://www.w3.org/2000/svg`,
                  viewBox: `0 0 36 36`,
                  fill: `none`,
                  ..._,
                  children: [
                    (0, _.jsxs)(`g`, {
                      clipPath: _,
                      children: [
                        (0, _.jsx)(`path`, {
                          fill: `currentColor`,
                          fillRule: `evenodd`,
                          clipRule: `evenodd`,
                          _: `M4.49995 7.47C3.93745 8.0325 2.81244 10.2825 2.81244 10.2825C2.24993 11.97 0.562445 17.0325 -5.43911e-05 23.7825C-5.43911e-05 23.7825 -0.562553 28.845 3.37495 29.4075C6.832 29.8396 7.9652 25.2921 8.55982 22.9059C8.73921 22.186 8.86958 21.6629 8.99995 21.5325C9.33789 21.1945 9.67584 21.0596 9.89181 21.0058C10.5086 21.6754 11.3928 22.095 12.3749 22.095C13.3745 22.095 14.2726 21.6605 14.8906 20.97H21.1093C21.7273 21.6605 22.6254 22.095 23.6249 22.095C24.6071 22.095 25.4913 21.6754 26.1081 21.0058C26.3241 21.0596 26.662 21.1945 27 21.5325C27.1303 21.6629 27.2607 22.186 27.4401 22.9059C28.0347 25.2921 29.1679 29.8396 32.625 29.4075C36.5625 28.845 36 23.7825 36 23.7825C35.4375 17.0325 33.75 11.97 33.1875 10.2825C33.1875 10.2825 32.0625 8.03251 31.4999 7.47C31.4575 7.42758 31.3927 7.39155 31.3091 7.36121C30.794 7.09333 29.2603 6.45543 26.9999 6.9075C26.8121 7.09539 26.6869 7.28328 26.6036 7.45021C26.4971 7.46255 26.4375 7.47001 26.4375 7.47001L25.875 8.0325L24.1874 8.03251V12.5325C24.1874 13.1538 23.6838 13.6575 23.0624 13.6575H12.9374C12.3161 13.6575 11.8124 13.1538 11.8124 12.5325V8.03251L10.1249 8.03249L9.56245 7.47C9.56245 7.47 9.50277 7.46254 9.39629 7.4502C9.31296 7.28328 9.18783 7.09539 8.99995 6.9075C6.73958 6.45543 5.20586 7.09333 4.6908 7.36121C4.60721 7.39155 4.54237 7.42759 4.49995 7.47ZM14.3999 18.1575C14.3999 19.4002 13.3926 20.4075 12.1499 20.4075C10.9073 20.4075 9.89995 19.4002 9.89995 18.1575C9.89995 16.9149 10.9073 15.9075 12.1499 15.9075C13.3926 15.9075 14.3999 16.9149 14.3999 18.1575ZM23.6249 20.4075C24.8676 20.4075 25.8749 19.4002 25.8749 18.1575C25.8749 16.9149 24.8676 15.9075 23.6249 15.9075C22.3823 15.9075 21.3749 16.9149 21.3749 18.1575C21.3749 19.4002 22.3823 20.4075 23.6249 20.4075ZM30.3749 10.845C30.3749 11.4663 29.8713 11.97 29.2499 11.97C28.6286 11.97 28.1249 11.4663 28.1249 10.845C28.1249 10.2237 28.6286 9.72001 29.2499 9.72001C29.8713 9.72001 30.3749 10.2237 30.3749 10.845ZM29.2499 17.0325C29.8713 17.0325 30.3749 16.5288 30.3749 15.9075C30.3749 15.2862 29.8713 14.7825 29.2499 14.7825C28.6286 14.7825 28.1249 15.2862 28.1249 15.9075C28.1249 16.5288 28.6286 17.0325 29.2499 17.0325ZM26.7187 12.2513C27.34 12.2513 27.8437 12.7549 27.8437 13.3763C27.8437 13.9976 27.34 14.5013 26.7187 14.5013C26.0974 14.5013 25.5937 13.9976 25.5937 13.3763C25.5937 12.7549 26.0974 12.2513 26.7187 12.2513ZM32.9062 13.3763C32.9062 12.7549 32.4025 12.2513 31.7812 12.2513C31.1599 12.2513 30.6562 12.7549 30.6562 13.3763C30.6562 13.9976 31.1599 14.5013 31.7812 14.5013C32.4025 14.5013 32.9062 13.9976 32.9062 13.3763ZM5.62495 10.7825C5.62495 10.5064 5.8488 10.2825 6.12495 10.2825H7.37495C7.65109 10.2825 7.87495 10.5064 7.87495 10.7825V11.7629C7.87495 11.8955 7.82227 12.0227 7.7285 12.1165L7.1035 12.7415C6.90824 12.9367 6.59166 12.9367 6.39639 12.7415L5.77139 12.1165C5.67763 12.0227 5.62495 11.8955 5.62495 11.7629V10.7825ZM6.12495 16.47C5.8488 16.47 5.62495 16.2462 5.62495 15.97V14.9896C5.62495 14.857 5.67763 14.7298 5.77139 14.6361L6.39639 14.0111C6.59166 13.8158 6.90824 13.8158 7.1035 14.0111L7.7285 14.6361C7.82227 14.7298 7.87495 14.857 7.87495 14.9896V15.97C7.87495 16.2462 7.65109 16.47 7.37495 16.47H6.12495ZM4.1562 14.5013C3.88006 14.5013 3.6562 14.2774 3.6562 14.0013V12.7513C3.6562 12.4751 3.88006 12.2513 4.1562 12.2513H5.13659C5.2692 12.2513 5.39638 12.3039 5.49014 12.3977L6.11514 13.0227C6.31041 13.218 6.31041 13.5346 6.11514 13.7298L5.49014 14.3548C5.39638 14.4486 5.2692 14.5013 5.13659 14.5013H4.1562ZM9.8437 14.0013C9.8437 14.2774 9.61984 14.5013 9.3437 14.5013H8.36331C8.2307 14.5013 8.10352 14.4486 8.00975 14.3548L7.38475 13.7298C7.18949 13.5346 7.18949 13.218 7.38475 13.0227L8.00975 12.3977C8.10352 12.3039 8.2307 12.2513 8.36331 12.2513H9.3437C9.61984 12.2513 9.8437 12.4751 9.8437 12.7513V14.0013Z`,
                        }),
                        (0, _.jsx)(`path`, {
                          fill: `currentColor`,
                          _: `M23.0624 8.03251L12.9374 8.03251V12.5325H23.0624V8.03251Z`,
                        }),
                      ],
                    }),
                    (0, _.jsx)(`defs`, {
                      children: (0, _.jsx)(`clipPath`, {
                        _: _,
                        children: (0, _.jsx)(`rect`, {
                          fill: `currentColor`,
                          width: `36`,
                          height: `36`,
                        }),
                      }),
                    }),
                  ],
                })
            : _ == `ps5`
              ? _
                ? (0, _.jsxs)(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    version: `1.1`,
                    _: `Layer_1`,
                    _: `0px`,
                    _: `0px`,
                    viewBox: `0 0 36 36`,
                    ..._,
                    children: [
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        opacity: `0.5`,
                        _: `M4.7,25.2c0.5-1.7,1.2-3.4,1.8-4.5c0.9-1.6,2.4-3.3,3.5-4.5c0.9-1,1.4-2.4,1.1-3.8l-0.7-3.8  c-0.1-0.4,0-0.7,0.3-0.9l0,0c-0.4,0-0.8,0.1-1.1,0.1V7.3c0,0,0-0.6-1.7-0.6c-1.3,0-2.6,0.7-3.1,1C4.6,7.8,4.5,8,4.5,8.2v0.6  C4.3,8.9,4.1,8.9,3.9,9C2.8,9.6,0,18,0,23.1c0,2.7,0.5,4.6,0.9,5.8c0.2,0.6,0.7,1.1,1.2,1.4l0.1,0c0.5,0.2,1-0.1,1.1-0.6  C3.7,28.6,4.1,26.9,4.7,25.2z M7.9,16.3c0,0.3-0.3,0.6-0.6,0.6H6.2c-0.3,0-0.6-0.3-0.6-0.6v-0.9c0-0.1,0.1-0.3,0.2-0.4l0.6-0.6  c0.2-0.2,0.6-0.2,0.8,0L7.7,15c0.1,0.1,0.2,0.2,0.2,0.4V16.3z M9,9.1c0.3-0.1,0.6,0,0.8,0.3l0.3,0.6c0.1,0.3,0,0.6-0.3,0.8  c-0.3,0.1-0.6,0-0.8-0.3L8.8,9.8C8.6,9.5,8.8,9.2,9,9.1z M8,12.8c0.1-0.1,0.2-0.2,0.4-0.2h0.9c0.3,0,0.6,0.3,0.6,0.6v1.1  c0,0.3-0.3,0.6-0.6,0.6H8.4c-0.1,0-0.3-0.1-0.4-0.2l-0.6-0.6c-0.2-0.2-0.2-0.6,0-0.8L8,12.8z M5.6,11.2c0-0.3,0.3-0.6,0.6-0.6h1.1  c0.3,0,0.6,0.3,0.6,0.6v0.9c0,0.1-0.1,0.3-0.2,0.4l-0.6,0.6c-0.2,0.2-0.6,0.2-0.8,0l-0.6-0.6c-0.1-0.1-0.2-0.2-0.2-0.4V11.2z   M3.7,13.2c0-0.3,0.3-0.6,0.6-0.6h0.9c0.1,0,0.3,0.1,0.4,0.2l0.6,0.6c0.2,0.2,0.2,0.6,0,0.8l-0.6,0.6c-0.1,0.1-0.2,0.2-0.4,0.2H4.2  c-0.3,0-0.6-0.3-0.6-0.6V13.2z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        _: `M23.8,13.5l0.6-2l0.5-3c0-0.2,0-0.3-0.1-0.4c-0.1-0.1-0.4-0.3-0.7-0.4c-0.1,0-0.2-0.1-0.3-0.1c-1.7-0.1-3.7-0.2-5.9-0.2v7.6  h4C22.8,14.9,23.6,14.3,23.8,13.5z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        opacity: `0.5`,
                        _: `M12,7.5c-0.1,0-0.1,0-0.2,0.1c-0.3,0.1-0.5,0.3-0.7,0.4C11,8.2,11,8.3,11,8.5l0.5,2.9l0.6,2.1  c0.3,0.8,1,1.4,1.9,1.4h4V7.3C15.8,7.3,13.7,7.4,12,7.5z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        opacity: `0.5`,
                        _: `M14,15.5c-1,0-2-0.6-2.4-1.6c-0.2,1-0.6,1.9-1.3,2.7C9.3,17.8,7.9,19.4,7,21c-0.6,1-1.2,2.7-1.8,4.4  c-0.5,1.7-1,3.4-1.3,4.5c-0.1,0.4-0.3,0.7-0.6,0.8l0,0c1,0.2,2-0.4,2.3-1.3l1.9-4.7c0.5-1.3,1.8-2.1,3.1-2.1H18v-7H14z M12.4,21.4  c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S13.6,21.4,12.4,21.4z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        _: `M32.1,29.8c-0.3-1.1-0.7-2.8-1.3-4.5C30.2,23.6,29.6,22,29,21c-0.9-1.5-2.3-3.2-3.4-4.4c-0.7-0.8-1.1-1.7-1.3-2.7  c-0.4,1-1.3,1.6-2.4,1.6h-4v7h7.3c1.4,0,2.6,0.8,3.1,2.1l1.9,4.7c0.4,0.9,1.3,1.5,2.3,1.3l0,0C32.4,30.5,32.2,30.2,32.1,29.8z   M23.6,21.4c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2s2.2,1,2.2,2.2S24.9,21.4,23.6,21.4z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        _: `M32.1,9c-0.1-0.1-0.3-0.1-0.6-0.2V8.2c0-0.2-0.1-0.4-0.3-0.5c-0.5-0.3-1.8-1-3.1-1c-1.7,0-1.7,0.6-1.7,0.6v0.5  c-0.4,0-0.8-0.1-1.2-0.1l0,0c0.2,0.2,0.3,0.6,0.3,0.9l-0.5,3l0,0l0,0l-0.1,0.7c-0.2,1.4,0.2,2.8,1.1,3.8c1.1,1.2,2.5,3,3.5,4.5  c0.6,1.1,1.3,2.8,1.8,4.5c0.5,1.7,1,3.4,1.3,4.5c0.1,0.5,0.6,0.8,1.1,0.6l0.1,0c0.5-0.3,1-0.8,1.2-1.4c0.4-1.2,0.9-3.1,0.9-5.8  C36,18,33.2,9.6,32.1,9z M29.2,10.1c0.6,0,1.1,0.5,1.1,1.1s-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1S28.6,10.1,29.2,10.1z M25.9,9.9  l0.3-0.6C26.4,9,26.7,8.9,27,9.1c0.3,0.1,0.4,0.5,0.3,0.8l-0.3,0.6c-0.1,0.3-0.5,0.4-0.8,0.3C25.9,10.5,25.8,10.2,25.9,9.9z   M27,14.6c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S27.6,14.6,27,14.6z M29.2,16.9c-0.6,0-1.1-0.5-1.1-1.1  s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S29.9,16.9,29.2,16.9z M31.5,14.6c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1  S32.1,14.6,31.5,14.6z`,
                      }),
                    ],
                  })
                : (0, _.jsxs)(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    viewBox: `0 0 36 36`,
                    fill: `none`,
                    ..._,
                    children: [
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        fillRule: `evenodd`,
                        clipRule: `evenodd`,
                        _: `M4.5 8.77962V8.17604C4.5 7.98797 4.59324 7.8129 4.75606 7.71875C5.29052 7.40971 6.58276 6.75 7.875 6.75C9.5625 6.75 9.5625 7.3125 9.5625 7.3125V7.79346C9.92732 7.74841 10.3079 7.7053 10.7038 7.66469L10.7001 7.66881C10.4768 7.91891 10.3639 8.22982 10.4289 8.58762L11.114 12.3555C11.3614 13.7163 10.9231 15.1154 9.99052 16.155C8.88458 17.3878 7.44481 19.1078 6.50883 20.6678C5.85918 21.7505 5.21964 23.4605 4.67636 25.1549C4.13086 26.8562 3.67463 28.5672 3.3961 29.6673C3.27268 30.1547 2.76181 30.4366 2.2902 30.2794L2.14425 30.2308C1.59878 29.9208 1.15999 29.4611 0.929107 28.8508C0.480791 27.6656 0 25.7647 0 23.0625C0 18 2.8125 9.5625 3.9375 9C4.07055 8.93348 4.25867 8.85908 4.5 8.77962ZM5.625 11.25C5.625 10.9393 5.87684 10.6875 6.1875 10.6875H7.3125C7.62316 10.6875 7.875 10.9393 7.875 11.25V12.142C7.875 12.2912 7.81574 12.4343 7.71025 12.5398L7.14775 13.1023C6.92808 13.3219 6.57192 13.3219 6.35225 13.1023L5.78975 12.5398C5.68426 12.4343 5.625 12.2912 5.625 12.142V11.25ZM5.625 16.3125C5.625 16.6232 5.87684 16.875 6.1875 16.875H7.3125C7.62316 16.875 7.875 16.6232 7.875 16.3125V15.4205C7.875 15.2713 7.81574 15.1282 7.71025 15.0227L7.14775 14.4602C6.92808 14.2406 6.57192 14.2406 6.35225 14.4602L5.78975 15.0227C5.68426 15.1282 5.625 15.2713 5.625 15.4205V16.3125ZM9.84375 14.3438C9.84375 14.6544 9.59191 14.9062 9.28125 14.9062H8.38924C8.24006 14.9062 8.09699 14.847 7.9915 14.7415L7.429 14.179C7.20933 13.9593 7.20933 13.6032 7.429 13.3835L7.9915 12.821C8.09699 12.7155 8.24006 12.6562 8.38925 12.6562H9.28125C9.59191 12.6562 9.84375 12.9081 9.84375 13.2188V14.3438ZM4.21875 14.9062C3.90809 14.9062 3.65625 14.6544 3.65625 14.3438V13.2188C3.65625 12.9081 3.90809 12.6562 4.21875 12.6562H5.11076C5.25994 12.6562 5.40301 12.7155 5.5085 12.821L6.071 13.3835C6.29067 13.6032 6.29067 13.9593 6.071 14.179L5.5085 14.7415C5.40301 14.847 5.25994 14.9062 5.11076 14.9062H4.21875ZM9.0297 9.05937C9.30756 8.92044 9.64544 9.03307 9.78437 9.31093L10.0656 9.87343C10.2046 10.1513 10.0919 10.4892 9.81406 10.6281C9.5362 10.767 9.19832 10.6544 9.05939 10.3765L8.77814 9.81404C8.63921 9.53618 8.75183 9.1983 9.0297 9.05937Z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        _: `M18 7.3125C15.7603 7.3125 13.748 7.4035 11.9892 7.54668C11.9209 7.57082 11.8551 7.59586 11.7919 7.62185C11.4768 7.75142 11.2526 7.89452 11.1197 8.04343C10.9961 8.18189 10.9523 8.32182 10.9824 8.48699L11.5138 11.4097L12.1573 13.5129C12.4103 14.3408 13.1744 14.9062 14.0401 14.9062H21.9642C22.8281 14.9062 23.591 14.3431 23.8456 13.5176L24.4729 11.483L25.0176 8.48699C25.0463 8.32909 25.0039 8.1935 24.8798 8.05684C24.7463 7.90988 24.5214 7.76808 24.2057 7.6392C24.1215 7.60486 24.0327 7.57213 23.9398 7.54094C22.1978 7.40107 20.2096 7.3125 18 7.3125Z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        fillRule: `evenodd`,
                        clipRule: `evenodd`,
                        _: `M3.37124 30.6556L3.34019 30.6503C3.62833 30.4606 3.84996 30.1665 3.94139 29.8054C4.2185 28.7109 4.67149 27.0124 5.212 25.3266C5.75474 23.6339 6.37801 21.9791 6.99117 20.9572C7.89825 19.4454 9.30802 17.7581 10.4092 16.5306C11.085 15.7773 11.5326 14.8493 11.6859 13.8677C12.0647 14.8275 12.9948 15.4687 14.0401 15.4687H21.9642C23.0065 15.4687 23.9345 14.8312 24.3153 13.8755C24.4698 14.8543 24.9168 15.7794 25.5908 16.5306C26.692 17.7581 28.1017 19.4454 29.0088 20.9572C29.622 21.9791 30.2453 23.6339 30.788 25.3266C31.3285 27.0124 31.7815 28.7109 32.0586 29.8054C32.15 30.1664 32.3717 30.4606 32.6598 30.6503L32.6288 30.6556C31.6413 30.8202 30.6725 30.275 30.3007 29.3455L28.4111 24.6216C27.8986 23.3402 26.6576 22.5 25.2775 22.5H10.7225C9.34243 22.5 8.10142 23.3402 7.58888 24.6216L5.69928 29.3455C5.3275 30.275 4.35868 30.8202 3.37124 30.6556ZM25.875 19.125C25.875 20.3676 24.8676 21.375 23.625 21.375C22.3824 21.375 21.375 20.3676 21.375 19.125C21.375 17.8824 22.3824 16.875 23.625 16.875C24.8676 16.875 25.875 17.8824 25.875 19.125ZM12.375 21.375C13.6176 21.375 14.625 20.3676 14.625 19.125C14.625 17.8824 13.6176 16.875 12.375 16.875C11.1324 16.875 10.125 17.8824 10.125 19.125C10.125 20.3676 11.1324 21.375 12.375 21.375Z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        fillRule: `evenodd`,
                        clipRule: `evenodd`,
                        _: `M33.7098 30.2794L33.8557 30.2308C34.4012 29.9208 34.84 29.4611 35.0709 28.8508C35.5192 27.6656 36 25.7647 36 23.0625C36 18 33.1875 9.5625 32.0625 9C31.9295 8.93348 31.7413 8.85908 31.5 8.77962V8.17604C31.5 7.98797 31.4068 7.8129 31.2439 7.71875C30.7095 7.40971 29.4172 6.75 28.125 6.75C26.4375 6.75 26.4375 7.3125 26.4375 7.3125V7.79346C26.0683 7.74787 25.683 7.70427 25.282 7.66324L25.2962 7.67864C25.52 7.92502 25.6356 8.23268 25.5711 8.58762L25.0274 11.5776L25.0319 11.579L25.0203 11.6166L24.886 12.3555C24.6386 13.7163 25.0769 15.1154 26.0095 16.155C27.1154 17.3878 28.5552 19.1078 29.4912 20.6678C30.1408 21.7505 30.7804 23.4605 31.3236 25.1549C31.8691 26.8562 32.3254 28.5672 32.6039 29.6673C32.7273 30.1547 33.2382 30.4366 33.7098 30.2794ZM26.2156 9.31093C26.3546 9.03307 26.6924 8.92044 26.9703 9.05937C27.2482 9.1983 27.3608 9.53618 27.2219 9.81404L26.9406 10.3765C26.8017 10.6544 26.4638 10.767 26.1859 10.6281C25.9081 10.4892 25.7954 10.1513 25.9344 9.87343L26.2156 9.31093ZM30.375 15.75C30.375 16.3713 29.8713 16.875 29.25 16.875C28.6287 16.875 28.125 16.3713 28.125 15.75C28.125 15.1287 28.6287 14.625 29.25 14.625C29.8713 14.625 30.375 15.1287 30.375 15.75ZM31.5 14.625C32.1213 14.625 32.625 14.1213 32.625 13.5C32.625 12.8787 32.1213 12.375 31.5 12.375C30.8787 12.375 30.375 12.8787 30.375 13.5C30.375 14.1213 30.8787 14.625 31.5 14.625ZM30.375 11.25C30.375 11.8713 29.8713 12.375 29.25 12.375C28.6287 12.375 28.125 11.8713 28.125 11.25C28.125 10.6287 28.6287 10.125 29.25 10.125C29.8713 10.125 30.375 10.6287 30.375 11.25ZM27 14.625C27.6213 14.625 28.125 14.1213 28.125 13.5C28.125 12.8787 27.6213 12.375 27 12.375C26.3787 12.375 25.875 12.8787 25.875 13.5C25.875 14.1213 26.3787 14.625 27 14.625Z`,
                      }),
                    ],
                  })
              : _ == `switchpro`
                ? (0, _.jsxs)(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    viewBox: `0 0 36 36`,
                    fill: `none`,
                    ..._,
                    children: [
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        _: `M3.375 30.375C0 30.375 0 25.875 0 25.875C0 25.875 0.679114 19.5689 1.65511 14.6014C2.11919 15.2235 2.72448 16.0277 3.42078 16.936C4.97674 18.9655 6.99227 21.5211 8.90421 23.7256C8.37233 24.3118 7.95006 25.2335 7.50451 26.2061C6.59778 28.1853 5.59464 30.375 3.375 30.375Z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        fillRule: `evenodd`,
                        clipRule: `evenodd`,
                        _: `M9.94135 23.2037C10.5784 23.0625 11.25 23.0625 11.25 23.0625H24.75C24.75 23.0625 25.4216 23.0625 26.0586 23.2037C28.0029 20.9779 30.0841 18.3414 31.6864 16.2515C32.493 15.1994 33.1768 14.2877 33.6589 13.639C33.8038 13.444 33.9305 13.2728 34.0368 13.1288C33.6024 11.1876 33.1223 9.62156 32.625 8.99998C30.9375 6.75 24.75 6.75 24.75 6.75H11.25C11.25 6.75 5.0625 6.75 3.375 8.99998C2.87774 9.62156 2.39764 11.1876 1.96319 13.1288C2.06947 13.2728 2.19616 13.444 2.34111 13.639C2.82318 14.2877 3.50702 15.1994 4.31359 16.2515C5.91589 18.3414 7.99714 20.9779 9.94135 23.2037ZM27.5062 9.11247C28.2829 9.11247 28.9125 9.74207 28.9125 10.5187C28.9125 11.2954 28.2829 11.925 27.5062 11.925C26.7296 11.925 26.1 11.2954 26.1 10.5187C26.1 9.74207 26.7296 9.11247 27.5062 9.11247ZM8.1 15.1875C9.34264 15.1875 10.35 14.1801 10.35 12.9375C10.35 11.6949 9.34264 10.6875 8.1 10.6875C6.85736 10.6875 5.85 11.6949 5.85 12.9375C5.85 14.1801 6.85736 15.1875 8.1 15.1875ZM22.725 20.25C23.9676 20.25 24.975 19.2426 24.975 18C24.975 16.7574 23.9676 15.75 22.725 15.75C21.4824 15.75 20.475 16.7574 20.475 18C20.475 19.2426 21.4824 20.25 22.725 20.25ZM31.725 13.1063C31.725 13.8829 31.0954 14.5125 30.3187 14.5125C29.5421 14.5125 28.9125 13.8829 28.9125 13.1063C28.9125 12.3296 29.5421 11.7 30.3187 11.7C31.0954 11.7 31.725 12.3296 31.725 13.1063ZM24.6937 14.5125C25.4704 14.5125 26.1 13.8829 26.1 13.1063C26.1 12.3296 25.4704 11.7 24.6937 11.7C23.9171 11.7 23.2875 12.3296 23.2875 13.1063C23.2875 13.8829 23.9171 14.5125 24.6937 14.5125ZM28.9125 15.4688C28.9125 14.6921 28.2829 14.0625 27.5062 14.0625C26.7296 14.0625 26.1 14.6921 26.1 15.4688C26.1 16.2454 26.7296 16.875 27.5062 16.875C28.2829 16.875 28.9125 16.2454 28.9125 15.4688ZM11.5312 17.1562V16.3125C11.5312 16.0018 11.7831 15.75 12.0938 15.75H13.2188C13.5294 15.75 13.7812 16.0018 13.7812 16.3125V17.1562H14.625C14.9357 17.1562 15.1875 17.4081 15.1875 17.7188V18.8438C15.1875 19.1544 14.9357 19.4062 14.625 19.4062H13.7812V20.25C13.7812 20.5607 13.5294 20.8125 13.2188 20.8125H12.0938C11.7831 20.8125 11.5312 20.5607 11.5312 20.25V19.4062H10.6875C10.3768 19.4062 10.125 19.1544 10.125 18.8438V17.7188C10.125 17.4081 10.3768 17.1562 10.6875 17.1562H11.5312Z`,
                      }),
                      (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        _: `M34.3449 14.6014C33.8808 15.2235 33.2755 16.0277 32.5792 16.936C31.0233 18.9655 29.0077 21.5211 27.0958 23.7256C27.6277 24.3118 28.0499 25.2335 28.4955 26.2061C29.4022 28.1853 30.4054 30.375 32.625 30.375C36 30.375 36 25.875 36 25.875C36 25.875 35.3209 19.5689 34.3449 14.6014Z`,
                      }),
                    ],
                  })
                : _ == `hori`
                  ? (0, _.jsx)(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      viewBox: `0 0 279 190`,
                      fill: `none`,
                      ..._,
                      children: (0, _.jsx)(`path`, {
                        fill: `currentColor`,
                        _: `M276.557 118.966L276.377 117.587C276.377 117.575 274.727 107.206 273.807 102.575C269.077 78.747 262.957 53.718 255.596 28.199C255.448 27.679 255.207 27.26 255.037 26.988C254.957 26.869 254.867 26.759 254.766 26.658C254.766 26.658 249.118 21.029 248.778 20.67C248.038 19.889 247.266 19.08 246.438 18.549C246.297 18.459 245.557 18.139 245.288 18.01C244.495 17.629 243.956 17.379 243.556 17.209C243.546 17.17 243.536 17.129 243.527 17.09C243.496 17.01 243.476 16.94 243.447 16.86C243.426 16.819 243.406 16.78 243.386 16.751C242.585 15.05 241.675 13.36 240.796 11.72L240.505 11.159C240.386 10.94 240.263 10.751 240.073 10.591C239.891 10.402 239.675 10.28 239.565 10.21C239.545 10.2 239.276 10.03 239.165 9.98C233.625 7.511 222.858 3.701 222.846 3.701C219.718 2.41 216.278 1.191 212.038 -0.149C210.688 -0.579 208.877 -1.079 206.926 -1.079C206.127 -1.079 205.346 -0.989 204.617 -0.819C202.926 -1.13 201.287 -1.409 199.717 -1.639C199.688 -1.649 197.457 -1.94 197.197 -1.969C197.047 -1.998 196.916 -1.998 196.787 -1.998C196.057 -1.998 195.346 -1.719 194.807 -1.219C194.647 -1.1 194.516 -0.949 194.397 -0.78C194.137 -0.44 192.708 1.441 191.688 2.762C177.307 1.89 161.506 1.431 142.077 1.332C142.067 1.332 126.397 1.41 126.097 1.41C126.097 1.41 106.898 1.832 98.2062 2.192C96.7762 2.262 95.4972 2.311 94.2672 2.362C91.9492 2.442 89.7382 2.522 87.0972 2.741C86.2072 1.568 85.1272 0.138 84.3972 -0.842C84.2972 -0.981 84.1762 -1.102 84.0472 -1.201C83.5862 -1.592 82.8462 -2 81.7762 -2C81.1862 -2 80.6712 -1.873 80.2082 -1.791C79.9482 -1.744 75.8272 -1.121 74.1872 -0.82C73.4472 -0.99 72.6672 -1.08 71.8472 -1.08C70.7772 -1.08 69.6172 -0.932 68.4272 -0.631C68.3982 -0.621 68.3662 -0.621 68.3372 -0.611C64.0462 0.649 59.8762 2.1 55.9682 3.69C55.9472 3.7 55.9272 3.71 55.9072 3.719C50.6372 5.408 45.1672 7.51 39.6372 9.979C39.3262 10.12 39.0262 10.35 38.8262 10.629L38.7172 10.779C38.7172 10.779 38.4242 11.22 38.2662 11.439C36.8362 13.548 35.8972 15.429 35.4162 17.148C34.9962 17.308 34.4262 17.58 33.5252 18.009C33.2552 18.138 32.7962 18.339 32.7752 18.349C32.0862 18.599 31.5152 19.148 30.6562 20.038C30.5062 20.188 30.4062 20.308 30.3362 20.368C30.3162 20.388 28.7562 21.948 28.7562 21.948C28.0572 22.657 26.4672 24.237 26.4362 24.268C26.2172 24.508 25.8872 24.817 25.5462 25.147C24.8362 25.829 24.1162 26.518 23.6062 27.249C23.5462 27.339 23.4972 27.429 23.4472 27.519C23.4072 27.619 23.3562 27.738 23.3272 27.839C22.5872 30.359 21.8172 33.038 21.1062 35.577C19.0462 42.827 16.9662 50.677 14.5372 60.247C10.0162 78.858 5.34716 98.065 2.43616 117.526C2.43616 117.546 2.33616 118.296 2.33616 118.296C0.536161 131.837 -1.33384 145.837 1.32616 159.616C2.81616 167.177 5.24616 173.155 8.77516 177.915C12.3162 182.905 17.4162 186.677 23.0952 188.507C26.2162 189.446 29.3752 189.927 32.5352 189.927C38.5052 189.927 44.0242 188.245 48.4852 185.075C59.3742 177.235 65.4952 162.106 70.8852 148.757C71.9242 146.187 73.9052 141.437 73.9142 141.405C74.1642 140.745 74.4532 139.995 74.7732 139.266C74.9942 138.846 75.9742 137.455 76.1442 137.196C76.3042 137.016 76.9842 136.257 77.1542 136.065C79.5332 133.805 82.6482 132.481 85.7182 132.45C85.7182 132.45 85.8862 132.448 86.1632 132.427H188.003C189.583 132.427 191.153 132.427 192.714 132.437C196.464 132.447 200.064 134.107 202.343 136.857C203.105 137.796 203.663 138.607 204.083 139.377C204.083 139.377 206.903 146.246 207.954 148.848C213.263 161.996 219.294 176.897 230.013 184.858C234.542 188.178 240.152 189.938 246.254 189.938C249.404 189.938 252.574 189.458 255.674 188.518C261.225 186.717 266.235 183.077 269.805 178.247C273.616 173.108 276.225 166.667 277.555 159.099C280.077 145.726 278.288 132.117 276.557 118.966ZM59.3422 67.242C51.7742 67.242 45.6172 61.086 45.6172 53.519C45.6172 45.951 51.7732 39.796 59.3422 39.796C66.9082 39.796 73.0652 45.95 73.0652 53.519C73.0652 61.085 66.9092 67.242 59.3422 67.242ZM121.963 93.212C121.965 93.267 121.955 93.294 121.947 93.335C121.586 95.048 120.058 96.29 118.31 96.29H108.806C108.769 96.29 108.755 96.292 108.701 96.29C108.453 96.347 108.267 96.546 108.267 96.811L108.3 106.147C108.3 106.182 108.302 106.217 108.302 106.258C108.302 108.006 107.062 109.535 105.349 109.893C105.337 109.897 105.324 109.899 105.312 109.899C103.865 110.2 102.408 110.35 100.951 110.35C99.4922 110.35 98.0332 110.198 96.5842 109.897C96.5742 109.897 96.5642 109.895 96.5552 109.893C94.8522 109.538 93.6142 108.022 93.6022 106.282V106.276V96.831C93.6022 96.788 93.6062 96.802 93.6022 96.759C93.5862 96.519 93.3872 96.325 93.1512 96.29C93.1162 96.292 93.0962 96.29 93.0632 96.29H83.6492C83.6452 96.29 83.6372 96.29 83.6332 96.29C81.8832 96.29 80.3562 95.048 79.9962 93.335C79.9922 93.323 79.9922 93.312 79.9902 93.3C79.3882 90.404 79.3882 87.47 79.9922 84.575C79.9922 84.563 79.9942 84.552 79.9962 84.54C80.3552 82.829 81.8812 81.622 83.6292 81.622C83.6762 81.622 83.7112 81.626 83.7642 81.624H93.0632C93.3482 81.624 93.5752 81.433 93.6272 81.179C93.6352 81.138 93.6312 81.113 93.6312 81.079L93.6022 71.6C93.6022 69.834 94.8442 68.303 96.5552 67.946C96.6062 67.936 96.6332 67.928 96.6862 67.919C99.5162 67.345 102.403 67.343 105.235 67.919C105.309 67.939 105.309 67.939 105.35 67.948C107.063 68.303 108.26 69.835 108.26 71.583C108.26 71.63 108.27 71.665 108.268 71.714V81.066C108.268 81.375 108.518 81.625 108.825 81.625L118.198 81.594C118.255 81.594 118.272 81.588 118.311 81.588C120.059 81.588 121.532 82.83 121.891 84.541C121.901 84.59 121.914 84.621 121.936 84.697C122.51 87.527 122.541 90.38 121.963 93.212ZM139.012 41.652C132.371 41.652 126.967 36.25 126.967 29.608C126.967 22.965 132.371 17.561 139.012 17.561C145.657 17.561 151.059 22.965 151.059 29.608C151.059 36.249 145.657 41.652 139.012 41.652ZM177.129 102.644C169.563 102.644 163.406 96.488 163.406 88.921C163.406 81.353 169.562 75.198 177.129 75.198C184.697 75.198 190.854 81.352 190.854 88.921C190.854 96.488 184.698 102.644 177.129 102.644ZM201.75 62.714C196.811 62.714 192.791 58.694 192.791 53.755C192.791 48.816 196.811 44.794 201.75 44.794C206.691 44.794 210.711 48.815 210.711 53.755C210.711 58.695 206.692 62.714 201.75 62.714ZM222.356 82.827C217.417 82.827 213.397 78.811 213.397 73.87C213.397 68.929 217.417 64.909 222.356 64.909C227.297 64.909 231.316 68.929 231.316 73.87C231.316 78.811 227.297 82.827 222.356 82.827ZM222.356 41.673C217.417 41.673 213.397 37.653 213.397 32.715C213.397 27.774 217.417 23.756 222.356 23.756C227.297 23.756 231.316 27.774 231.316 32.715C231.317 37.654 227.297 41.673 222.356 41.673ZM242.657 62.714C237.715 62.714 233.696 58.694 233.696 53.755C233.696 48.816 237.716 44.794 242.657 44.794C247.598 44.794 251.618 48.815 251.618 53.755C251.618 58.695 247.598 62.714 242.657 62.714Z`,
                      }),
                    })
                  : _ == `gamecube`
                    ? (0, _.jsx)(`svg`, {
                        viewBox: `0 0 36 26`,
                        fill: `none`,
                        xmlns: `http://www.w3.org/2000/svg`,
                        ..._,
                        children: (0, _.jsx)(`path`, {
                          fill: `currentColor`,
                          _: `M16.1827 0.0781004C17.6081 -0.0426998 19.0335 -0.0183863 20.4571 0.121069C23.1735 0.386856 25.7983 1.04207 28.3604 1.96775C28.3933 1.97962 28.4272 1.98854 28.4707 2.00193C28.4909 1.96528 28.5193 1.93316 28.5264 1.89744C28.5625 1.71211 28.6809 1.67014 28.8555 1.66892C29.6045 1.66433 30.3068 1.85492 30.9815 2.16013C31.946 2.59683 32.798 3.20275 33.5821 3.90916C33.6515 3.97184 33.6587 4.0229 33.6211 4.10544C33.5517 4.25805 33.4959 4.41663 33.4317 4.5781C33.8532 4.96729 34.223 5.39899 34.5352 5.87986C35.1214 6.78349 35.4179 7.78243 35.5371 8.84568C35.7968 11.1614 35.9333 13.4849 35.9893 15.8135C36.0312 17.563 35.9522 19.308 35.7452 21.0459C35.6396 21.9318 35.484 22.8097 35.1397 23.6406C34.9085 24.1987 34.6002 24.7018 34.0889 25.0547C33.3268 25.5809 31.8525 25.6874 31.0977 24.4013C30.7916 23.8796 30.6396 23.3065 30.5069 22.7236C30.164 21.2205 29.8132 19.7187 29.4649 18.2168C29.3652 17.7865 29.2627 17.3565 29.1563 16.9033C28.9289 17.0598 28.7547 17.247 28.6407 17.4707C28.4287 17.8872 28.233 18.3132 28.0498 18.7431C27.8101 19.3059 27.5943 19.8836 27.1934 20.3554C25.8977 21.881 23.8114 22.5708 21.6748 21.6279C20.7231 21.2077 19.9131 20.6151 19.417 19.6777C18.6868 18.2976 18.5895 16.8836 19.337 15.4814C19.7143 14.7738 20.2355 14.1607 20.8174 13.6045C20.9131 13.513 21.0054 13.4171 21.0987 13.3232C21.1053 13.3165 21.1081 13.3056 21.125 13.2715C19.0201 12.8742 16.9252 12.8754 14.7891 13.2461C14.8996 13.3584 14.9835 13.4489 15.0733 13.5332C15.6865 14.109 16.2264 14.7504 16.6319 15.4853C17.252 16.6089 17.2713 17.7935 16.8594 18.9892C16.4264 20.2467 15.5363 21.0751 14.3409 21.6045C13.0659 22.169 11.7798 22.2381 10.4932 21.6592C9.31318 21.1283 8.49376 20.2528 8.03227 19.0361C7.8451 18.5422 7.62199 18.0604 7.39262 17.584C7.24337 17.2739 7.00619 17.0271 6.70317 16.8174C6.62981 17.1331 6.55966 17.4332 6.49027 17.7334C6.16674 19.1315 5.84402 20.5299 5.51957 21.9277C5.38381 22.5117 5.2609 23.1001 5.1016 23.6777C4.99151 24.0771 4.78572 24.4377 4.51078 24.7549C3.77431 25.6032 2.45123 25.5179 1.74027 24.9228C1.27551 24.5338 0.998936 24.0235 0.790079 23.4697C0.51363 22.7361 0.370845 21.9703 0.275431 21.1963C0.0625906 19.4694 -0.0391154 17.7349 0.0146884 15.9961C0.0639243 14.4025 0.145108 12.8095 0.239298 11.2177C0.293428 10.303 0.380001 9.38862 0.487345 8.47849C0.644598 7.14865 1.20265 5.99432 2.10746 5.00876C2.25884 4.84393 2.42083 4.68749 2.58598 4.53611C2.65364 4.47384 2.67533 4.42018 2.62895 4.3408C2.61888 4.32371 2.61641 4.30211 2.60941 4.28318C2.46019 3.87647 2.45845 3.87395 2.80668 3.60154C3.75687 2.85869 4.77722 2.24333 5.95219 1.92283C6.43149 1.79205 6.91854 1.72986 7.41801 1.7656C7.56878 1.7763 7.65507 1.82431 7.68168 1.97263C7.6861 1.9963 7.70206 2.01729 7.70024 2.01365H7.70121C8.85964 1.6644 9.99349 1.30045 11.1397 0.982397C12.7909 0.524039 14.4739 0.222765 16.1827 0.0781004ZM11.6436 14.5459C11.5481 14.5459 11.4554 14.584 11.3877 14.6513C11.3203 14.7187 11.2825 14.8109 11.2823 14.9062V16.5761H9.60942C9.51394 16.5762 9.42124 16.6143 9.35356 16.6816C9.28616 16.749 9.24829 16.8412 9.24809 16.9365V17.8388C9.24816 17.9343 9.2861 18.0262 9.35356 18.0937C9.42128 18.1613 9.51371 18.1992 9.60942 18.1992H11.2823V19.8681C11.2823 19.9637 11.3202 20.0564 11.3877 20.124C11.4555 20.1915 11.5479 20.2294 11.6436 20.2295H12.5469L12.6182 20.2226C12.6874 20.2088 12.7521 20.1745 12.8028 20.124C12.8702 20.0564 12.9082 19.9636 12.9082 19.8681V18.1992H14.5811L14.6524 18.1924C14.7216 18.1785 14.7863 18.1443 14.837 18.0937C14.9043 18.0262 14.9423 17.9342 14.9424 17.8388V16.9365C14.9422 16.8412 14.9044 16.749 14.837 16.6816C14.7693 16.6143 14.6766 16.5762 14.5811 16.5761H12.9082V14.9062C12.908 14.8109 12.8703 14.7187 12.8028 14.6513C12.7351 14.584 12.6424 14.5459 12.5469 14.5459H11.6436ZM23.6299 16.0361C22.8392 16.0362 22.1979 16.6768 22.1973 17.4668C22.1973 18.2572 22.8389 18.8984 23.6299 18.8984C24.4208 18.8981 25.0625 18.2571 25.0625 17.4668C25.0619 16.6769 24.4204 16.0364 23.6299 16.0361ZM24.9141 10.0381C24.1027 10.0382 23.4448 10.6961 23.4444 11.5068C23.4446 12.3176 24.1026 12.9745 24.9141 12.9746C25.7257 12.9746 26.3836 12.3177 26.3838 11.5068C26.3834 10.6961 25.7256 10.0381 24.9141 10.0381ZM29.0166 7.02048C27.7316 7.02074 26.6898 8.06175 26.6895 9.34568C26.6895 10.6298 27.7314 11.6706 29.0166 11.6709C30.3019 11.6707 31.3447 10.6299 31.3448 9.34568C31.3445 8.06172 30.3017 7.0207 29.0166 7.02048ZM7.16703 7.51755C6.06435 7.51791 5.17021 8.41113 5.16996 9.51267C5.17006 10.6143 6.06425 11.5074 7.16703 11.5078C8.27012 11.5078 9.16498 10.6146 9.16508 9.51267C9.16483 8.41091 8.27002 7.51755 7.16703 7.51755ZM32.4268 5.96091C32.1773 5.89397 31.9081 5.92981 31.6358 6.12107L31.6875 6.19529L31.6348 6.12009L31.625 6.12888C31.3844 6.3549 31.2555 6.56575 31.2139 6.77048C31.1722 6.97658 31.2224 7.16409 31.3106 7.33689C31.3977 7.50721 31.5271 7.67288 31.6495 7.83396C31.7732 7.99695 31.8926 8.15982 31.9766 8.33494C32.0646 8.56462 32.0999 8.79776 32.1211 9.02244C32.1419 9.24271 32.1507 9.46898 32.1866 9.65818C32.2233 9.85102 32.2925 10.0294 32.4493 10.1562C32.6054 10.2822 32.8337 10.3456 33.1602 10.3457H33.1661C33.5007 10.3247 33.7197 10.1432 33.8516 9.88669C33.9805 9.63579 34.0277 9.31221 34.0313 8.99021C34.0348 8.66633 33.9945 8.33347 33.9434 8.05955C33.8927 7.7881 33.8297 7.56499 33.7832 7.46189C33.6977 7.27222 33.4405 6.75768 33.0733 6.37888C32.8896 6.18958 32.6713 6.02681 32.4268 5.96091ZM28.626 4.45212C28.3017 4.44856 27.9687 4.48892 27.6944 4.54001C27.4226 4.59065 27.2 4.6538 27.0967 4.70017C26.9075 4.78524 26.3924 5.04199 26.0127 5.40915C25.8229 5.59275 25.6598 5.81104 25.5938 6.05564C25.5267 6.30496 25.5625 6.57357 25.7539 6.84568L25.7627 6.85544C25.9891 7.09596 26.1994 7.22518 26.4043 7.26658C26.611 7.30822 26.7985 7.25829 26.9717 7.1699C27.1424 7.08278 27.3074 6.95331 27.4688 6.83103C27.5919 6.73776 27.7148 6.64721 27.8428 6.57224L27.9737 6.5029C28.2026 6.41596 28.4344 6.38139 28.6582 6.36033C28.8788 6.33958 29.1046 6.33173 29.294 6.29587C29.4874 6.25918 29.6659 6.18939 29.793 6.0322C29.8876 5.91515 29.947 5.75785 29.9707 5.5488L29.9834 5.32224L29.9825 5.31638C29.9613 4.98226 29.7801 4.76252 29.5235 4.63083C29.2723 4.50218 28.9483 4.45568 28.626 4.45212Z`,
                        }),
                      })
                    : _ == `8bitdo_sn30`
                      ? (0, _.jsxs)(`svg`, {
                          viewBox: `0 0 36 36`,
                          fill: `none`,
                          xmlns: `http://www.w3.org/2000/svg`,
                          ..._,
                          children: [
                            (0, _.jsx)(`g`, {
                              clipPath: _,
                              children: (0, _.jsx)(`path`, {
                                fill: `currentColor`,
                                _: `M11.2168 10.004C11.2667 10.004 11.3173 10.0048 11.3672 10.007C11.5907 10.0171 11.7075 10.136 11.7139 10.3605V10.5197H11.8965C15.9638 10.5197 20.0313 10.5188 24.0986 10.5226C24.239 10.5226 24.2877 10.4877 24.2861 10.3439C24.2837 10.1215 24.407 10.0095 24.6426 10.0079C25.5809 10.0033 26.5196 9.99799 27.458 10.0021C27.9951 10.0045 28.534 9.99883 29.0683 10.0431C30.1561 10.133 31.1802 10.4534 32.1455 10.965C32.3761 11.0871 32.5061 11.2487 32.4639 11.5187C32.4349 11.7034 32.5097 11.814 32.668 11.9269C34.3326 13.1148 35.399 14.705 35.8115 16.714C36.1472 18.3488 36.0615 19.9547 35.3359 21.4796C34.1526 23.9665 32.214 25.5049 29.4902 26.0021C28.1318 26.2499 26.8154 26.0562 25.5508 25.5109C25.3928 25.4427 25.2679 25.4444 25.1074 25.5246C23.4412 26.358 21.4298 25.8397 20.3681 24.3107C20.3086 24.2249 20.2442 24.1962 20.1426 24.1964C18.7123 24.1994 17.2818 24.2 15.8515 24.1964C15.7425 24.1962 15.6803 24.2342 15.6191 24.3224C14.5809 25.825 12.5275 26.3527 10.8974 25.5314C10.7321 25.4481 10.5977 25.4363 10.4277 25.5109C9.50667 25.9146 8.54336 26.127 7.53514 26.0997C5.65293 26.0489 4.00893 25.3806 2.60643 24.1339C1.39697 23.0585 0.587029 21.7317 0.197251 20.1554C-0.0490111 19.1589 -0.0459867 18.154 0.103501 17.1447C0.327081 15.6367 0.938596 14.308 1.94139 13.1603C2.37813 12.6607 2.87171 12.2238 3.42186 11.8527C3.50003 11.7999 3.52651 11.7413 3.52733 11.6505C3.52983 11.2987 3.69023 11.0423 4.00877 10.882C5.17119 10.2965 6.40354 10.0013 7.70506 10.0001C8.87562 9.99932 10.0462 10.0024 11.2168 10.004ZM12.5498 20.5704C11.7008 20.5706 11.0121 21.2596 11.0117 22.1085C11.0117 22.9578 11.7006 23.6465 12.5498 23.6466C13.399 23.6465 14.0879 22.9578 14.0879 22.1085C14.0874 21.2596 13.3988 20.5706 12.5498 20.5704ZM23.4736 20.5704C22.6246 20.5706 21.936 21.2596 21.9355 22.1085C21.9355 22.9578 22.6244 23.6465 23.4736 23.6466C24.3228 23.6465 25.0117 22.9578 25.0117 22.1085C25.0113 21.2596 24.3226 20.5706 23.4736 20.5704ZM28.6064 17.8507C27.9106 17.8511 27.3461 18.4157 27.3457 19.1115C27.3457 19.8076 27.9103 20.3728 28.6064 20.3732C29.3028 20.3732 29.8681 19.8079 29.8681 19.1115C29.8677 18.4154 29.3025 17.8507 28.6064 17.8507ZM6.7119 13.465C6.53797 13.4652 6.39674 13.6065 6.39647 13.7804V15.3331C6.39645 15.4095 6.33405 15.4707 6.25877 15.4708H4.70604C4.53211 15.471 4.39093 15.6124 4.39061 15.7863V17.1974C4.39084 17.3714 4.53205 17.5117 4.70604 17.5119H6.25877C6.33487 17.512 6.39602 17.5746 6.39647 17.6496V19.2033C6.39665 19.3773 6.53791 19.5185 6.7119 19.5187H8.12303C8.29688 19.5183 8.43731 19.3772 8.43748 19.2033V17.6496C8.43793 17.5736 8.50031 17.5122 8.57518 17.5119H10.1289C10.3027 17.5115 10.4441 17.3713 10.4443 17.1974V15.7863C10.444 15.6125 10.3027 15.4712 10.1289 15.4708H8.57518C8.50006 15.4705 8.4375 15.4094 8.43748 15.3331V13.7804C8.43721 13.6066 8.29682 13.4654 8.12303 13.465H6.7119ZM25.5478 15.2316C24.8521 15.2321 24.2875 15.7966 24.2871 16.4923C24.2871 17.1884 24.8519 17.7536 25.5478 17.754C26.2442 17.754 26.8095 17.1887 26.8096 16.4923C26.8091 15.7963 26.244 15.2316 25.5478 15.2316ZM31.667 15.2316C30.9711 15.2319 30.4067 15.7965 30.4062 16.4923C30.4063 17.1885 30.9709 17.7537 31.667 17.754C32.3633 17.7539 32.9287 17.1886 32.9287 16.4923C32.9283 15.7964 32.363 15.2317 31.667 15.2316ZM28.6064 12.5988C27.9106 12.5991 27.3461 13.1637 27.3457 13.8595C27.3458 14.5556 27.9104 15.1209 28.6064 15.1212C29.3027 15.1212 29.868 14.5558 29.8681 13.8595C29.8677 13.1635 29.3025 12.5988 28.6064 12.5988Z`,
                              }),
                            }),
                            (0, _.jsx)(`defs`, {
                              children: (0, _.jsx)(`clipPath`, {
                                _: _,
                                children: (0, _.jsx)(`rect`, {
                                  fill: `currentColor`,
                                  width: `36`,
                                  height: `36`,
                                }),
                              }),
                            }),
                          ],
                        })
                      : _ == `8bitdo_pro`
                        ? (0, _.jsxs)(`svg`, {
                            viewBox: `0 0 36 36`,
                            fill: `none`,
                            xmlns: `http://www.w3.org/2000/svg`,
                            ..._,
                            children: [
                              (0, _.jsx)(`g`, {
                                clipPath: _,
                                children: (0, _.jsx)(`path`, {
                                  fill: `currentColor`,
                                  _: `M27.7734 6.01249C28.9788 6.03744 30.1205 6.33782 31.1855 6.91483C31.3082 6.98141 31.3941 7.0615 31.4326 7.16971H31.0996V7.17362H31.4335C31.4524 7.22852 31.4594 7.29064 31.4521 7.3621C31.4407 7.47552 31.4843 7.54171 31.5859 7.60721C33.2663 8.68591 34.2958 10.2253 34.7167 12.1609C35.0706 13.7884 35.3234 15.4352 35.5361 17.0877C35.7469 18.7244 35.8609 20.3682 35.9335 22.0154C35.9671 22.7781 36.004 23.542 35.9999 24.3055C35.9944 25.303 35.8569 26.2831 35.4531 27.2088C34.9562 28.347 34.1485 29.1542 32.9384 29.5017C31.6727 29.8653 30.6028 29.5341 29.7509 28.5262C29.2715 27.9585 28.9464 27.3013 28.7177 26.6014C28.5088 25.9616 28.344 25.3077 28.1474 24.6639C27.6047 22.8866 26.5032 21.5482 24.9238 20.5887C24.9213 20.5871 24.9184 20.5862 24.916 20.5848L25.1503 20.2723L25.1718 20.2469L25.1728 20.2478L25.1904 20.2273C25.2862 20.2759 25.3768 20.3034 25.4365 20.323L25.7773 20.4256C25.8937 20.4577 26.012 20.487 26.124 20.5115L26.4384 20.573C27.1766 20.6984 27.9391 20.7019 28.6767 20.5828L28.6757 20.5818C31.2157 20.1944 33.4046 18.277 34.166 15.8308L34.165 15.8299C35.6102 11.3723 32.3235 6.65548 27.5917 6.65506V6.65409H8.4062V6.65506C5.37767 6.6497 2.70335 8.67037 1.81049 11.5506C1.00503 14.1045 1.74193 16.9571 3.68745 18.7879L3.87983 18.9617C4.91492 19.8713 6.23159 20.462 7.60053 20.6228H7.60151C8.67153 20.7459 9.79336 20.6306 10.8066 20.2273C10.8114 20.2327 10.8176 20.2378 10.8222 20.243L10.8886 20.1834L10.8222 20.2439L10.8271 20.2488L10.833 20.2557C10.8366 20.2598 10.842 20.2657 10.8476 20.2723C10.8594 20.2862 10.8744 20.3052 10.8915 20.326C10.9263 20.3681 10.9694 20.4197 11.0126 20.4724C11.0418 20.508 11.072 20.5445 11.0996 20.5779C11.0938 20.581 11.0879 20.5842 11.082 20.5877C9.89406 21.2973 8.98056 22.2657 8.32905 23.4842C8.03441 24.0355 7.85478 24.6298 7.69721 25.2303C7.50206 25.9733 7.29989 26.7134 6.96284 27.408C6.64138 28.0702 6.24258 28.6754 5.63471 29.1131C4.81567 29.7026 3.91714 29.77 2.98042 29.4724C1.77578 29.0895 0.984754 28.2619 0.511667 27.1101C0.206212 26.3666 0.0705524 25.5865 0.0243618 24.7879C-0.046774 23.562 0.0538517 22.3407 0.122018 21.1189C0.161122 20.4188 0.195563 19.7179 0.265573 19.0203C0.368012 18.003 0.474778 16.9846 0.627877 15.9744C0.821202 14.6994 1.02971 13.4249 1.29194 12.1629C1.69465 10.2234 2.74378 8.70172 4.4062 7.61405C4.51078 7.54554 4.57148 7.47897 4.55659 7.3494C4.53428 7.15242 4.62772 7.02617 4.79975 6.93046C5.59838 6.48682 6.45226 6.20819 7.35444 6.09159C7.80468 6.03349 8.26203 6.01478 8.71674 6.00956C9.68191 5.99838 10.6481 6.00686 11.6132 6.0076C11.6623 6.00761 11.7116 6.00867 11.7607 6.01053C12.0309 6.02025 12.1172 6.09801 12.1552 6.37186V6.37088H23.8154C23.8752 6.26485 23.9075 6.14249 23.9863 6.08768C24.0726 6.02812 24.2031 6.01093 24.3144 6.01053C25.4672 6.00532 26.621 5.98866 27.7734 6.01249ZM27.5878 7.23026L27.9902 7.24296C31.9701 7.49058 34.7257 11.4172 33.7294 15.2713L33.6171 15.656L33.6152 15.659C32.9396 17.8298 31.0302 19.5502 28.8037 19.9764L28.5878 20.0135H28.5849C27.9099 20.1225 27.211 20.1195 26.5351 20.0047L26.247 19.949C26.0499 19.9059 25.8293 19.8435 25.6337 19.7801C26.2276 19.1014 26.5334 18.1831 26.4589 17.283H26.4599C26.3463 15.5899 24.908 14.1684 23.207 14.1199H23.041C21.3039 14.1281 19.8318 15.5696 19.7148 17.283H19.7158C19.6765 17.7706 19.7462 18.2662 19.914 18.7244V18.7254L19.9277 18.7674L19.9287 18.7713L19.9423 18.8123L19.9521 18.8435L19.9648 18.8963L19.9716 18.9441H19.9726L19.9765 18.9793V18.9812L19.9804 19.0144L19.9824 19.0428V19.0603L19.9814 19.073L19.9804 19.0955V19.1033L19.9277 19.2693L20.2021 19.3562L20.2548 19.3728V19.4764H20.2568L20.3339 19.3982L20.4765 19.4432L20.5292 19.2781L20.5302 19.2693L20.5322 19.2703L20.5341 19.2644L20.5371 19.2488L20.538 19.2469L20.5507 19.1873L20.5527 19.1697V19.1668L20.5546 19.1473L20.5566 19.1189V19.1033L20.5576 19.0916L20.5585 19.0701V19.0428L20.5576 19.0242L20.5537 18.9627L20.5527 18.9471L20.5449 18.8807L20.5429 18.867L20.5312 18.7937L20.5263 18.7683L20.5068 18.6902H20.5078L20.5039 18.6775L20.4921 18.6385L20.4892 18.6307L20.4755 18.5896L20.4628 18.5506H20.4638L20.4589 18.5379L20.4091 18.3914C20.3029 18.0482 20.2617 17.6837 20.291 17.326L20.0136 17.3025L20.289 17.3221C20.3864 15.8966 21.6228 14.7 23.0488 14.6961L23.0546 14.6951C24.5067 14.66 25.787 15.8694 25.8847 17.3211V17.3269C25.9568 18.1839 25.6106 19.0661 24.9697 19.6355L25.1601 19.8504L24.9687 19.6346L24.9609 19.6433L24.9042 19.698L24.8515 19.7478L24.8437 19.7557L24.7949 19.8064L24.791 19.8113L24.748 19.8582L24.7451 19.8611L24.7128 19.8982L24.6962 19.9168L24.4111 20.2976L24.3974 20.3142L24.3857 20.3299L24.3935 20.3357L24.3544 20.3758L24.3525 20.3797L24.5966 20.5017L24.6025 20.5125L24.6415 20.5906C23.0992 21.3439 21.1855 20.8778 20.166 19.4949C20.1056 19.4133 20.0441 19.3832 19.9443 19.3836C18.6485 19.3869 17.3524 19.387 16.0566 19.3855C15.9769 19.3855 15.9142 19.394 15.8613 19.4685C14.9119 20.8074 12.9767 21.3814 11.3662 20.5935L11.4335 20.5242L11.6328 20.3162C11.6285 20.3115 11.6106 20.2916 11.5771 20.2517C11.5429 20.211 11.5006 20.1592 11.458 20.1072C11.3816 20.0142 11.2904 19.9026 11.2539 19.8621H11.2548C11.1885 19.787 11.1037 19.7023 11.0273 19.6346H11.0263C10.3864 19.0651 10.0392 18.1831 10.1113 17.3269L10.1123 17.324C10.2204 15.8833 11.4308 14.7105 12.872 14.6961L12.874 14.6951C14.3453 14.6707 15.5979 15.855 15.708 17.324V17.325C15.7357 17.6841 15.6956 18.0487 15.5898 18.3914L15.54 18.5379L15.538 18.5428C15.4742 18.7262 15.4041 18.9852 15.4599 19.2488L15.7421 19.1883L15.7695 19.1824L15.7441 19.1902L15.4687 19.2752L15.5195 19.4402L16.0703 19.2723L16.0214 19.114C16.0052 19.0154 16.0275 18.8903 16.08 18.7381C16.2308 18.3318 16.3013 17.8967 16.291 17.4646L16.2822 17.2801C16.15 15.5194 14.6532 14.0912 12.8662 14.1199H12.8642C11.1679 14.1378 9.75791 15.4668 9.55366 17.1199L9.53706 17.281C9.46215 18.1795 9.76702 19.0975 10.3583 19.7762C9.50533 20.0699 8.57082 20.1545 7.66694 20.0506H7.66596C6.49271 19.9124 5.35766 19.4282 4.4394 18.6814L4.25874 18.5281H4.25776C2.34413 16.8601 1.59604 14.1449 2.35932 11.7244L2.3603 11.7224L2.44135 11.4773C3.33297 8.9628 5.72246 7.22514 8.4062 7.23026H27.5878ZM12.8828 15.7625C12.0828 15.7627 11.4339 16.4123 11.4335 17.2127C11.4335 18.0134 12.0825 18.6627 12.8828 18.6629C13.6832 18.6629 14.332 18.0136 14.332 17.2127C14.3316 16.4121 13.6829 15.7625 12.8828 15.7625ZM23.1162 15.7625C22.3163 15.7629 21.6673 16.4123 21.6669 17.2127C21.6669 18.0133 22.316 18.6625 23.1162 18.6629C23.9166 18.6629 24.5654 18.0136 24.5654 17.2127C24.565 16.4121 23.9163 15.7625 23.1162 15.7625ZM27.8808 13.1892C27.1708 13.1893 26.5948 13.7659 26.5947 14.4764C26.5947 15.1868 27.1708 15.7624 27.8808 15.7625C28.5908 15.7623 29.1669 15.1868 29.1669 14.4764C29.1668 13.766 28.5908 13.1894 27.8808 13.1892ZM7.45405 9.20682C7.28806 9.20699 7.1525 9.34261 7.15229 9.50858V10.9764C7.15205 11.0454 7.09514 11.1031 7.02631 11.1033H5.55952C5.39342 11.1034 5.25786 11.239 5.25776 11.4051V12.7381C5.258 12.904 5.39351 13.0397 5.55952 13.0398H7.02631C7.09523 13.04 7.15219 13.0977 7.15229 13.1668V14.6346C7.15264 14.8004 7.28815 14.9362 7.45405 14.9363H8.78706C8.9528 14.936 9.08749 14.8003 9.08784 14.6346V13.1668C9.08794 13.0976 9.14581 13.0399 9.21479 13.0398H10.6816C10.8474 13.0395 10.9821 12.9039 10.9824 12.7381V11.4051C10.9823 11.2401 10.8491 11.1052 10.6845 11.1033L10.6796 11.1014H9.21284C9.14395 11.1013 9.08808 11.0454 9.08784 10.9764V9.50858C9.08763 9.34273 8.95288 9.20717 8.78706 9.20682H7.45405ZM25.0615 10.7459C24.3517 10.7462 23.7756 11.3228 23.7753 12.033C23.7754 12.7433 24.3516 13.3188 25.0615 13.3191C25.7716 13.3191 26.3475 12.7435 26.3476 12.033C26.3474 11.3226 25.7715 10.7459 25.0615 10.7459ZM30.6874 10.7459C29.9775 10.746 29.4016 11.3227 29.4013 12.033C29.4014 12.7435 29.9774 13.319 30.6874 13.3191C31.3976 13.3191 31.9735 12.7435 31.9736 12.033C31.9733 11.3226 31.3974 10.7459 30.6874 10.7459ZM27.8808 8.28788C27.1708 8.28797 26.5948 8.86454 26.5947 9.57499C26.5949 10.2853 27.1709 10.861 27.8808 10.8611C28.5907 10.8609 29.1667 10.2852 29.1669 9.57499C29.1668 8.8646 28.5908 8.28807 27.8808 8.28788Z`,
                                }),
                              }),
                              (0, _.jsx)(`defs`, {
                                children: (0, _.jsx)(`clipPath`, {
                                  _: _,
                                  children: (0, _.jsx)(`rect`, {
                                    fill: `currentColor`,
                                    width: `36`,
                                    height: `36`,
                                  }),
                                }),
                              }),
                            ],
                          })
                        : _ == `8bitdo_ultimate`
                          ? (0, _.jsxs)(`svg`, {
                              viewBox: `0 0 36 36`,
                              fill: `none`,
                              xmlns: `http://www.w3.org/2000/svg`,
                              ..._,
                              children: [
                                (0, _.jsx)(`g`, {
                                  clipPath: _,
                                  children: (0, _.jsx)(`path`, {
                                    fill: `currentColor`,
                                    _: `M25.3865 5.11825C26.755 4.90005 28.1094 4.97923 29.4236 5.39462C30.4285 5.71216 31.3614 6.19989 32.1726 6.89462C32.3276 7.02768 32.4119 7.17257 32.408 7.37704C32.4056 7.49827 32.4255 7.61963 32.4314 7.69345C32.5721 7.80286 32.6969 7.87505 32.7898 7.97567C33.7307 8.99583 34.2022 10.2489 34.5398 11.5626C34.9787 13.2716 35.2054 15.0185 35.4158 16.7657C35.5919 18.2301 35.751 19.6978 35.8796 21.1671C36.0269 22.851 36.0917 24.5378 35.7634 26.212C35.5761 27.1675 35.2593 28.0684 34.5789 28.7999C33.9668 29.458 33.1821 29.8296 32.3533 30.1241C31.7359 30.3438 31.5771 30.317 31.2107 29.7599C30.651 28.9095 30.1303 28.0326 29.5935 27.1671C28.9629 26.149 28.3487 25.1202 27.6961 24.1163C27.2547 23.4372 26.6937 22.8717 25.8972 22.6016C25.2789 22.3918 24.6367 22.3551 23.991 22.3556C19.8645 22.3575 15.7376 22.3624 11.6111 22.3614C10.178 22.3614 9.04967 22.9302 8.28492 24.1524C7.43808 25.5056 6.61368 26.8734 5.77515 28.2325C5.46691 28.7316 5.1469 29.2242 4.82887 29.7169C4.76726 29.8121 4.68876 29.8965 4.61695 29.9845C4.40805 30.2398 4.16884 30.3079 3.84058 30.1925C2.86063 29.848 1.9303 29.4329 1.25465 28.5997C0.678281 27.8888 0.403921 27.0492 0.233162 26.169C-0.034456 24.7888 -0.0493176 23.3911 0.0759357 22.0011C0.277018 19.7696 0.510949 17.5401 0.783944 15.3165C0.992378 13.6187 1.26467 11.9263 1.85328 10.3067C2.16201 9.45791 2.57326 8.66447 3.19508 7.99716C3.29517 7.88989 3.42374 7.80944 3.57496 7.68954C3.49832 7.16883 3.8053 6.87846 4.18922 6.60555C6.15956 5.20425 8.33914 4.74637 10.7107 5.12997C11.05 5.18473 11.0504 5.18936 11.4265 5.58016C11.5389 5.56107 11.6476 5.52694 11.7566 5.52645C14.8635 5.51177 17.97 5.49081 21.0769 5.49227C22.2174 5.49277 23.3574 5.5474 24.4978 5.57235C24.5492 5.57333 24.6169 5.53872 24.6502 5.49813C24.842 5.26328 25.09 5.16571 25.3865 5.11825ZM12.2996 14.6524C12.1182 14.6524 11.9696 14.8002 11.9695 14.9815V16.6192C11.9695 16.7005 11.9009 16.7683 11.8181 16.7686H10.1697C9.98837 16.7687 9.8397 16.9165 9.83961 17.0977V18.586C9.83976 18.7673 9.98841 18.914 10.1697 18.9141H11.8181C11.9008 18.9145 11.9693 18.9825 11.9695 19.0636V20.7022C11.9696 20.8836 12.1182 21.0304 12.2996 21.0304H13.7976C13.9786 21.0298 14.1276 20.8832 14.1277 20.7022V19.0636C14.1279 18.9823 14.1952 18.9142 14.2781 18.9141H15.9265C16.1076 18.9138 16.2564 18.7671 16.2566 18.586V17.0977C16.2565 16.9175 16.1094 16.7704 15.9295 16.7686L15.9246 16.7667H14.2761C14.193 16.7667 14.1277 16.7007 14.1277 16.6192V14.9815C14.1276 14.8005 13.9786 14.653 13.7976 14.6524H12.2996ZM22.9158 15.9591C21.8797 15.9591 21.0382 16.7996 21.0378 17.835C21.0379 18.8707 21.8795 19.711 22.9158 19.711C23.9516 19.7105 24.7927 18.8704 24.7927 17.835C24.7924 16.7999 23.9514 15.9596 22.9158 15.9591ZM28.3132 13.3809C27.6194 13.3809 27.0564 13.9433 27.0564 14.6368C27.0564 15.3303 27.6194 15.8927 28.3132 15.8927C29.0066 15.8922 29.5691 15.3299 29.5691 14.6368C29.5691 13.9436 29.0066 13.3814 28.3132 13.3809ZM7.63648 10.2296C6.60034 10.2296 5.75873 11.07 5.75855 12.1056C5.75883 13.141 6.6004 13.9815 7.63648 13.9815C8.67212 13.981 9.51316 13.1407 9.51344 12.1056C9.51326 11.0703 8.67218 10.2301 7.63648 10.2296ZM25.7566 10.8233C25.0622 10.8233 24.4999 11.3851 24.4998 12.0792C24.4998 12.7733 25.0621 13.335 25.7566 13.335C26.4507 13.3346 27.0124 12.773 27.0125 12.0792C27.0124 11.3854 26.4507 10.8238 25.7566 10.8233ZM30.8826 10.8233C30.1888 10.8233 29.6258 11.3858 29.6257 12.0792C29.6258 12.7726 30.1888 13.335 30.8826 13.335C31.5761 13.3347 32.1384 12.7724 32.1384 12.0792C32.1383 11.386 31.576 10.8237 30.8826 10.8233ZM28.3289 8.26376C27.635 8.26376 27.072 8.82614 27.072 9.51962C27.0722 10.2129 27.6352 10.7755 28.3289 10.7755C29.0221 10.775 29.5845 10.2126 29.5847 9.51962C29.5847 8.82643 29.0223 8.26424 28.3289 8.26376Z`,
                                  }),
                                }),
                                (0, _.jsx)(`defs`, {
                                  children: (0, _.jsx)(`clipPath`, {
                                    _: _,
                                    children: (0, _.jsx)(`rect`, {
                                      fill: `currentColor`,
                                      width: `36`,
                                      height: `36`,
                                    }),
                                  }),
                                }),
                              ],
                            })
                          : _ == `mobile_touch`
                            ? (0, _.jsxs)(`svg`, {
                                viewBox: `0 0 64 64`,
                                transform: `matrix(1, 0, 0, 1, 0, 0)rotate(270)`,
                                xmlns: `http://www.w3.org/2000/svg`,
                                ..._,
                                children: [
                                  (0, _.jsx)(`rect`, {
                                    fill: `none`,
                                    stroke: `currentColor`,
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    strokeWidth: `3px`,
                                    height: `60.54`,
                                    _: `5.09`,
                                    _: `5.09`,
                                    width: `32.11`,
                                    _: `15.94`,
                                    _: `1.62`,
                                  }),
                                  (0, _.jsx)(`line`, {
                                    fill: `none`,
                                    stroke: `currentColor`,
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    strokeWidth: `3px`,
                                    _: `15.94`,
                                    _: `48.06`,
                                    _: `8.75`,
                                    _: `8.75`,
                                  }),
                                  (0, _.jsx)(`line`, {
                                    fill: `none`,
                                    stroke: `currentColor`,
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    strokeWidth: `3px`,
                                    _: `15.94`,
                                    _: `48.06`,
                                    _: `54.42`,
                                    _: `54.42`,
                                  }),
                                  (0, _.jsx)(`line`, {
                                    fill: `none`,
                                    stroke: `currentColor`,
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    strokeWidth: `3px`,
                                    _: `29.83`,
                                    _: `33.68`,
                                    _: `57.83`,
                                    _: `57.83`,
                                  }),
                                ],
                              })
                            : (0, _.jsx)(_, {
                                ..._,
                              });
}
function _(_) {
  let { controllerType: _, controllerStyle: _, ..._ } = _;
  switch (_) {
    case 4:
      return (0, _.jsx)(_, {
        ..._,
      });
    case 34:
    case 47:
      return (0, _.jsx)(_, {
        type: `ps4`,
        ..._,
      });
    case 45:
    case 48:
      return (0, _.jsx)(_, {
        type: `ps5`,
        ..._,
      });
    case 2:
      return (0, _.jsx)(_, {
        type: `steam`,
        ..._,
      });
    case 10:
      return (0, _.jsx)(_, {
        type: `triton`,
        ..._,
      });
    case 31:
    case 32:
    case 46:
      return (0, _.jsx)(_, {
        type: `xbox`,
        ..._,
      });
    case 39:
    case 40:
    case 41:
    case 38:
    case 44:
    case 51:
      return (0, _.jsx)(_, {
        type: `switchpro`,
        ..._,
      });
    case 49:
      return (0, _.jsx)(_, {
        type: `hori`,
        ..._,
      });
    case 43:
      return (0, _.jsx)(_, {
        type: `mobile_touch`,
        ..._,
      });
    case 21:
      return (0, _.jsx)(_, {
        type: `steamframe`,
        ..._,
      });
    default:
      return _ == 2
        ? (0, _.jsx)(_, {
            type: `gamecube`,
            ..._,
          })
        : _ == 3
          ? (0, _.jsx)(_, {
              type: `8bitdo_sn30`,
              ..._,
            })
          : _ == 4
            ? (0, _.jsx)(_, {
                type: `8bitdo_pro`,
                ..._,
              })
            : _ == 5
              ? (0, _.jsx)(_, {
                  type: `8bitdo_ultimate`,
                  ..._,
                })
              : (0, _.jsx)(_, {
                  type: `generic`,
                  ..._,
                });
  }
}
function _(_) {
  let { type: _, partial: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M0 11C0 9.89543 0.895431 9 2 9H34C35.1046 9 36 9.89543 36 11V24C36 25.6569 34.6569 27 33 27H3C1.34315 27 0 25.6569 0 24V11ZM33 16C33 16.5523 32.5523 17 32 17C31.4477 17 31 16.5523 31 16C31 15.4477 31.4477 15 32 15C32.5523 15 33 15.4477 33 16ZM32 13C32.5523 13 33 12.5523 33 12C33 11.4477 32.5523 11 32 11C31.4477 11 31 11.4477 31 12C31 12.5523 31.4477 13 32 13ZM35 14C35 14.5523 34.5523 15 34 15C33.4477 15 33 14.5523 33 14C33 13.4477 33.4477 13 34 13C34.5523 13 35 13.4477 35 14ZM30 15C30.5523 15 31 14.5523 31 14C31 13.4477 30.5523 13 30 13C29.4477 13 29 13.4477 29 14C29 14.5523 29.4477 15 30 15ZM6 14C6 15.1046 5.10457 16 4 16C2.89543 16 2 15.1046 2 14C2 12.8954 2.89543 12 4 12C5.10457 12 6 12.8954 6 14ZM2.5 21C2.22386 21 2 21.2239 2 21.5V24.5C2 24.7761 2.22386 25 2.5 25H5.5C5.77614 25 6 24.7761 6 24.5V21.5C6 21.2239 5.77614 21 5.5 21H2.5ZM30 21.5C30 21.2239 30.2239 21 30.5 21H33.5C33.7761 21 34 21.2239 34 21.5V24.5C34 24.7761 33.7761 25 33.5 25H30.5C30.2239 25 30 24.7761 30 24.5V21.5ZM28 11H8V25H28V11Z`,
    }),
  });
}
function _(_) {
  let { color: _ = `currentColor`, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M31.09 4.38L13 22.46L5.41 14.88L1.88 18.41L13 29.54L34.62 7.91L31.09 4.38Z`,
      fill: _,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(_.className, _),
    children: [
      (0, _.jsx)(`path`, {
        _: `M14.16 6L5.11 13.4H1V23.27H5.11L14.15 30.67V6H14.16Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M29.96 6.02002L30.14 6.19002C36.96 12.89 36.96 23.76 30.14 30.46L29.96 30.63L26.75 27.48L26.93 27.3C31.96 22.34 31.96 14.3 26.93 9.34002L26.75 9.16002L29.96 6.02002Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M24.94 10.96L25.12 11.13C29.17 15.11 29.17 21.56 25.12 25.54L24.94 25.71L21.73 22.56L21.91 22.38C24.17 20.14 24.17 16.52 21.91 14.28L21.73 14.1L24.94 10.95V10.96Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M19.92 15.89L20.1 16.06C21.38 17.32 21.38 19.35 20.1 20.61L19.92 20.78L17.43 18.33L19.92 15.88V15.89Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(_.className, _),
    children: [
      (0, _.jsx)(`path`, {
        _: `M14.16 6L5.11 13.4H1V23.27H5.11L14.15 30.67V6H14.16Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M29.96 6.02002L30.14 6.19002C36.96 12.89 36.96 23.76 30.14 30.46L29.96 30.63L26.75 27.48L26.93 27.3C31.96 22.34 31.96 14.3 26.93 9.34002L26.75 9.16002L29.96 6.02002Z`,
        fill: `currentColor`,
        fillOpacity: `0.5`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M24.94 10.96L25.12 11.13C29.17 15.11 29.17 21.56 25.12 25.54L24.94 25.71L21.73 22.56L21.91 22.38C24.17 20.14 24.17 16.52 21.91 14.28L21.73 14.1L24.94 10.95V10.96Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M19.92 15.89L20.1 16.06C21.38 17.32 21.38 19.35 20.1 20.61L19.92 20.78L17.43 18.33L19.92 15.88V15.89Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(_.className, _),
    children: [
      (0, _.jsx)(`path`, {
        _: `M14.16 6L5.11 13.4H1V23.27H5.11L14.15 30.67V6H14.16Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M29.96 6.02002L30.14 6.19002C36.96 12.89 36.96 23.76 30.14 30.46L29.96 30.63L26.75 27.48L26.93 27.3C31.96 22.34 31.96 14.3 26.93 9.34002L26.75 9.16002L29.96 6.02002Z`,
        fill: `currentColor`,
        fillOpacity: `0.25`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M24.94 10.96L25.12 11.13C29.17 15.11 29.17 21.56 25.12 25.54L24.94 25.71L21.73 22.56L21.91 22.38C24.17 20.14 24.17 16.52 21.91 14.28L21.73 14.1L24.94 10.95V10.96Z`,
        fill: `currentColor`,
        fillOpacity: `0.5`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M19.92 15.89L20.1 16.06C21.38 17.32 21.38 19.35 20.1 20.61L19.92 20.78L17.43 18.33L19.92 15.88V15.89Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(_.className, _),
    children: [
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M14.15 6.00818L14.16 6H14.15V6.00818ZM14.15 18.27V6.00818L7.10342 11.77L14.15 18.27ZM14.15 26.039L1 13.909V23.27H5.11L14.15 30.67V26.039Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M29.96 6.02002L30.14 6.19002C36.96 12.89 36.96 23.76 30.14 30.46L29.96 30.63L26.75 27.48L26.93 27.3C31.96 22.34 31.96 14.3 26.93 9.34002L26.75 9.16002L29.96 6.02002Z`,
        fill: `currentColor`,
        fillOpacity: `0.25`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M24.94 10.96L25.12 11.13C29.17 15.11 29.17 21.56 25.12 25.54L24.94 25.71L21.73 22.56L21.91 22.38C24.17 20.14 24.17 16.52 21.91 14.28L21.73 14.1L24.94 10.95V10.96Z`,
        fill: `currentColor`,
        fillOpacity: `0.25`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M19.92 15.89L20.1 16.06C21.38 17.32 21.38 19.35 20.1 20.61L19.92 20.78L17.43 18.33L19.92 15.88V15.89Z`,
        fill: `currentColor`,
        fillOpacity: `0.25`,
      }),
      (0, _.jsx)(`rect`, {
        _: `0.728821`,
        _: `10`,
        width: `3`,
        height: `27`,
        transform: `rotate(-46.9546 0.728821 9.47668)`,
        fill: `currentColor`,
        children: (0, _.jsx)(`animate`, {
          attributeName: `y`,
          begin: `0`,
          dur: `150ms`,
          from: `0`,
          _: `10`,
          values: `0; 5; 10`,
          keyTimes: `0; .8; 1`,
          fill: `freeze`,
        }),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 36 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(_.className, void 0),
    children: (0, _.jsx)(`path`, {
      _: `M33 0C34.6569 0 36 1.34315 36 3V21C36 22.6569 34.6569 24 33 24H3C1.34315 24 0 22.6569 0 21V3C0 1.34315 1.34315 4.83192e-08 3 0H33ZM12.5635 6C11.5274 6.00005 10.5889 6.2304 9.74805 6.69043C8.90718 7.1467 8.23869 7.82137 7.74316 8.71484C7.24763 9.60456 7 10.6997 7 12C7 13.2927 7.24229 14.3858 7.72656 15.2793C8.21452 16.1727 8.8769 16.8495 9.71387 17.3096C10.5547 17.7696 11.5049 18 12.5635 18C13.4081 18 14.1499 17.8688 14.7881 17.6064C15.4263 17.3441 15.9618 16.998 16.3936 16.5684C16.8289 16.135 17.1649 15.6636 17.4014 15.1543C17.6379 14.641 17.775 14.1369 17.8125 13.6426L14.6357 13.6201C14.5982 13.8709 14.5258 14.0974 14.417 14.2988C14.312 14.4963 14.1746 14.6651 14.0059 14.8057C13.8369 14.9463 13.6372 15.0548 13.4082 15.1309C13.1794 15.203 12.9207 15.2392 12.6318 15.2393C12.125 15.2393 11.6905 15.1194 11.3301 14.8799C10.97 14.6366 10.6943 14.2756 10.5029 13.7969C10.3152 13.314 10.2207 12.7148 10.2207 12C10.2207 11.3233 10.3132 10.7436 10.4971 10.2607C10.6848 9.77787 10.9589 9.40699 11.3193 9.14844C11.6835 8.88988 12.1287 8.76074 12.6543 8.76074C12.9544 8.76078 13.2226 8.80424 13.459 8.8916C13.6955 8.97525 13.8963 9.09716 14.0615 9.25684C14.2304 9.41271 14.3622 9.59874 14.4561 9.81543C14.5537 10.0322 14.6132 10.2739 14.6357 10.54H17.8125C17.7524 9.8138 17.5814 9.16918 17.2998 8.60645C17.0182 8.04372 16.6463 7.57055 16.1846 7.18652C15.7228 6.79873 15.1861 6.50425 14.5742 6.30273C13.9623 6.10121 13.2918 6 12.5635 6ZM24.752 6C23.7158 6 22.7765 6.23035 21.9355 6.69043C21.0948 7.1467 20.4262 7.82144 19.9307 8.71484C19.4352 9.60454 19.1875 10.6997 19.1875 12C19.1875 13.2927 19.4298 14.3858 19.9141 15.2793C20.4021 16.1728 21.0651 16.8495 21.9023 17.3096C22.7433 17.7696 23.6933 18 24.752 18C25.5964 18 26.3375 17.8687 26.9756 17.6064C27.6138 17.3441 28.1493 16.998 28.5811 16.5684C29.0164 16.135 29.3524 15.6637 29.5889 15.1543C29.8254 14.641 29.9625 14.1369 30 13.6426L26.8242 13.6201C26.7867 13.871 26.7133 14.0974 26.6045 14.2988C26.4995 14.4963 26.3621 14.6651 26.1934 14.8057C26.0245 14.9463 25.8255 15.0548 25.5967 15.1309C25.3677 15.2031 25.1083 15.2392 24.8193 15.2393C24.3125 15.2393 23.879 15.1194 23.5186 14.8799C23.1582 14.6366 22.8819 14.2758 22.6904 13.7969C22.5027 13.314 22.4092 12.7148 22.4092 12C22.4092 11.3234 22.5007 10.7436 22.6846 10.2607C22.8723 9.77793 23.1465 9.40699 23.5068 9.14844C23.871 8.88988 24.3162 8.76074 24.8418 8.76074C25.1419 8.76076 25.4101 8.80426 25.6465 8.8916C25.8829 8.97523 26.0839 9.09721 26.249 9.25684C26.4179 9.41269 26.5497 9.59878 26.6436 9.81543C26.7412 10.0322 26.8017 10.2739 26.8242 10.54H30C29.9399 9.8138 29.7689 9.16918 29.4873 8.60645C29.2057 8.04376 28.8338 7.57053 28.3721 7.18652C27.9103 6.79876 27.3736 6.50423 26.7617 6.30273C26.1499 6.10127 25.4801 6.00004 24.752 6Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 36 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _(_.className, void 0),
    children: (0, _.jsx)(`path`, {
      _: `M33 0C34.6569 0 36 1.34315 36 3V21C36 22.6051 34.7394 23.9158 33.1543 23.9961L33 24H3L2.8457 23.9961C1.26055 23.9158 0 22.6051 0 21V3C0 1.34315 1.34315 4.83192e-08 3 0H33ZM3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H33C33.5523 22 34 21.5523 34 21V3C34 2.44771 33.5523 2 33 2H3ZM12.5635 6C13.2918 6 13.9623 6.10121 14.5742 6.30273C15.1861 6.50425 15.7228 6.79873 16.1846 7.18652C16.6463 7.57055 17.0182 8.04372 17.2998 8.60645C17.5814 9.16918 17.7524 9.8138 17.8125 10.54H14.6357C14.6132 10.2739 14.5537 10.0322 14.4561 9.81543C14.3622 9.59874 14.2304 9.41271 14.0615 9.25684C13.8963 9.09716 13.6955 8.97525 13.459 8.8916C13.2226 8.80424 12.9544 8.76078 12.6543 8.76074C12.1287 8.76074 11.6835 8.88988 11.3193 9.14844C10.9589 9.40699 10.6848 9.77787 10.4971 10.2607C10.3132 10.7436 10.2207 11.3233 10.2207 12C10.2207 12.7148 10.3152 13.314 10.5029 13.7969C10.6943 14.2756 10.97 14.6366 11.3301 14.8799C11.6905 15.1194 12.125 15.2393 12.6318 15.2393C12.9207 15.2392 13.1794 15.203 13.4082 15.1309C13.6372 15.0548 13.8369 14.9463 14.0059 14.8057C14.1746 14.6651 14.312 14.4963 14.417 14.2988C14.5258 14.0974 14.5982 13.8709 14.6357 13.6201L17.8125 13.6426C17.775 14.1369 17.6379 14.641 17.4014 15.1543C17.1649 15.6636 16.8289 16.135 16.3936 16.5684C15.9618 16.998 15.4263 17.3441 14.7881 17.6064C14.1499 17.8688 13.4081 18 12.5635 18C11.5049 18 10.5547 17.7696 9.71387 17.3096C8.8769 16.8495 8.21452 16.1727 7.72656 15.2793C7.24229 14.3858 7 13.2927 7 12C7 10.6997 7.24763 9.60456 7.74316 8.71484C8.23869 7.82137 8.90718 7.1467 9.74805 6.69043C10.5889 6.2304 11.5274 6.00005 12.5635 6ZM24.752 6C25.4801 6.00004 26.1499 6.10127 26.7617 6.30273C27.3736 6.50423 27.9103 6.79876 28.3721 7.18652C28.8338 7.57053 29.2057 8.04376 29.4873 8.60645C29.7689 9.16918 29.9399 9.8138 30 10.54H26.8242C26.8017 10.2739 26.7412 10.0322 26.6436 9.81543C26.5497 9.59878 26.4179 9.41269 26.249 9.25684C26.0839 9.09721 25.8829 8.97523 25.6465 8.8916C25.4101 8.80426 25.1419 8.76076 24.8418 8.76074C24.3162 8.76074 23.871 8.88988 23.5068 9.14844C23.1465 9.40699 22.8723 9.77793 22.6846 10.2607C22.5007 10.7436 22.4092 11.3234 22.4092 12C22.4092 12.7148 22.5027 13.314 22.6904 13.7969C22.8819 14.2758 23.1582 14.6366 23.5186 14.8799C23.879 15.1194 24.3125 15.2393 24.8193 15.2393C25.1083 15.2392 25.3677 15.2031 25.5967 15.1309C25.8255 15.0548 26.0245 14.9463 26.1934 14.8057C26.3621 14.6651 26.4995 14.4963 26.6045 14.2988C26.7133 14.0974 26.7867 13.871 26.8242 13.6201L30 13.6426C29.9625 14.1369 29.8254 14.641 29.5889 15.1543C29.3524 15.6637 29.0164 16.135 28.5811 16.5684C28.1493 16.998 27.6138 17.3441 26.9756 17.6064C26.3375 17.8687 25.5964 18 24.752 18C23.6933 18 22.7433 17.7696 21.9023 17.3096C21.0651 16.8495 20.4021 16.1728 19.9141 15.2793C19.4298 14.3858 19.1875 13.2927 19.1875 12C19.1875 10.6997 19.4352 9.60454 19.9307 8.71484C20.4262 7.82144 21.0948 7.1467 21.9355 6.69043C22.7765 6.23035 23.7158 6 24.752 6Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let { direction: _, className: _, ..._ } = _;
  switch (_) {
    case `up`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        className: _(_, _),
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M26.23 17.31L20.5 11.58V33.54H15.5V11.58L9.76998 17.31L6.22998 13.77L18 2.00001L29.77 13.77L26.23 17.31Z`,
          fill: `currentColor`,
        }),
      });
    case `down`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        className: _(_, _),
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M26.23 18.23L20.5 23.96V2H15.5V23.96L9.76998 18.23L6.22998 21.77L18 33.54L29.77 21.77L26.23 18.23Z`,
          fill: `currentColor`,
        }),
      });
    case `left`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        className: _(_, _),
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M17.54 9.53998L11.81 15.27L33.77 15.27V20.27H11.81L17.54 26L14 29.54L2.23002 17.77L14 5.99998L17.54 9.53998Z`,
          fill: `currentColor`,
        }),
      });
    case `right`:
      return (0, _.jsx)(`svg`, {
        viewBox: `0 0 36 36`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        className: _(_, _),
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M18.46 9.54004L24.19 15.27L2.22998 15.27L2.22998 20.27H24.19L18.46 26L22 29.54L33.77 17.77L22 6.00004L18.46 9.54004Z`,
          fill: `currentColor`,
        }),
      });
  }
}
function _(_) {
  let { direction: _, ..._ } = _;
  switch (_) {
    case `up`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M17.98 10.23L3.20996 25H32.75L17.98 10.23Z`,
          fill: `currentColor`,
        }),
      });
    case `down`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M17.98 26.54L3.20996 11.77H32.75L17.98 26.54Z`,
          fill: `currentColor`,
        }),
      });
    case `left`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M9.82497 18.385L24.595 3.61499L24.595 33.155L9.82497 18.385Z`,
          fill: `currentColor`,
        }),
      });
    case `right`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M26.135 18.385L11.365 33.155L11.365 3.61503L26.135 18.385Z`,
          fill: `currentColor`,
        }),
      });
  }
}
function _(_) {
  let { direction: _, ..._ } = _;
  switch (_) {
    case `up`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          _: `M31 15.6394L18.0204 3L5 15.6394L8.60376 19.1432L18.0204 10.0076L27.4166 19.1432L31 15.6394ZM27.3962 33L18.0204 23.8644L8.62412 33L5 29.4962L18.0204 16.8568L31 29.4962L27.3962 33Z`,
        }),
      });
    case `down`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          _: `M31 20.3606L18.0204 33L5 20.3606L8.60376 16.8568L18.0204 25.9924L27.4166 16.8568L31 20.3606ZM27.3962 3L18.0204 12.1356L8.62412 3L5 6.50379L18.0204 19.1432L31 6.50379L27.3962 3Z`,
        }),
      });
    case `left`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M14.23 30.75L1.45996 18L14.23 5.20999L17.77 8.74999L8.53996 18L17.77 27.23L14.23 30.75ZM31.77 27.21L22.54 18L31.77 8.76999L28.23 5.20999L15.46 18L28.23 30.75L31.77 27.21Z`,
          fill: `currentColor`,
        }),
      });
    case `right`:
      return (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ..._,
        children: (0, _.jsx)(`path`, {
          _: `M19 30.75L31.77 18L19 5.20999L15.46 8.74999L24.69 18L15.46 27.23L19 30.75ZM1.46002 27.21L10.69 18L1.46002 8.76999L5.00002 5.20999L17.77 18L5.00002 30.75L1.46002 27.21Z`,
          fill: `currentColor`,
        }),
      });
  }
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    _: `Layer_1`,
    _: `0px`,
    _: `0px`,
    viewBox: `0 0 1200 1200`,
    ..._,
    children: (0, _.jsxs)(`g`, {
      children: [
        (0, _.jsx)(`path`, {
          _: `M590.4,883.4H363.8c-6.3,0-12.3-2.5-16.7-6.9c-4.4-4.4-6.9-10.4-6.9-16.7V505.5h519.5V614h44.4c0.9,0,1.9,0,2.8,0.1V387.5   c0-18.8-7.5-36.8-20.8-50.1c-13.3-13.3-31.3-20.8-50.1-20.8h-47.2V293c0-13-10.6-23.6-23.6-23.6S741.7,280,741.7,293v23.6H623.6   V293c0-13-10.6-23.6-23.6-23.6S576.4,280,576.4,293v23.6H458.3V293c0-13-10.6-23.6-23.6-23.6c-13,0-23.6,10.6-23.6,23.6v23.6h-47.2   c-18.8,0-36.8,7.5-50.1,20.8c-13.3,13.3-20.8,31.3-20.8,50.1v472.3c0,18.8,7.5,36.8,20.8,50.1c13.3,13.3,31.3,20.8,50.1,20.8h226.7   c-0.1-0.9-0.1-1.9-0.1-2.8V883.4z M340.2,387.5c0-6.3,2.5-12.3,6.9-16.7c4.4-4.4,10.4-6.9,16.7-6.9h47.2l0,23.6   c0,13,10.6,23.6,23.6,23.6c13,0,23.6-10.6,23.6-23.6v-23.6h118.1v23.6c0,13,10.6,23.6,23.6,23.6s23.6-10.6,23.6-23.6v-23.6h118.1   v23.6c0,13,10.6,23.6,23.6,23.6s23.6-10.6,23.6-23.6v-23.6h47.2c6.3,0,12.3,2.5,16.7,6.9c4.4,4.4,6.9,10.4,6.9,16.7v70.8H340.2   V387.5z`,
        }),
        (0, _.jsx)(`path`, {
          _: `M904.2,629h-267c-17.6,0-31.8,14.2-31.8,31.8v267c0,17.6,14.2,31.8,31.8,31.8h267c17.6,0,31.8-14.2,31.8-31.8v-267   C936,643.2,921.8,629,904.2,629z M860.5,829.8l-87.7,87.7L685,829.8c-6.6-6.6-6.6-17.4,0-24c6.6-6.6,17.4-6.6,24,0l46.7,46.7v-164   c0-9.4,7.6-17,17-17s17,7.6,17,17v164l46.7-46.7c6.6-6.6,17.4-6.6,24,0C867.1,812.4,867.1,823.2,860.5,829.8z`,
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M16 34V21H3V16H16V3H21V16H34V21H21V34H16Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M18 1L0 33H36L18 1ZM21.63 12L20.42 22H15.58L14.37 12H21.63ZM18 30C17.4067 30 16.8266 29.8241 16.3333 29.4944C15.8399 29.1648 15.4554 28.6962 15.2284 28.1481C15.0013 27.5999 14.9419 26.9967 15.0576 26.4147C15.1734 25.8328 15.4591 25.2982 15.8787 24.8787C16.2982 24.4591 16.8328 24.1734 17.4147 24.0576C17.9967 23.9419 18.5999 24.0013 19.1481 24.2284C19.6962 24.4554 20.1648 24.8399 20.4944 25.3333C20.8241 25.8266 21 26.4067 21 27C21 27.7956 20.6839 28.5587 20.1213 29.1213C19.5587 29.6839 18.7956 30 18 30Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM20.2092 10.9908H14.8092V19.3092L21 25.5L24.8184 21.6816L20.2092 17.0724V10.9908Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M24 4H4V24H8V8H24V4Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M12 12V32H32V12H12ZM28 24H24V28H20V24H16V20H20V16H24V20H28V24Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M28.1684 2.16431L23.5793 6.75343L29.2362 12.4103L33.8253 7.82116L28.1684 2.16431Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M20.76 9.58999L5.67 24.67L4 32L11.33 30.33L26.41 15.24L20.76 9.58999Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    children: [
      (0, _.jsx)(`rect`, {
        _: `5`,
        _: `8`,
        width: `26`,
        height: `4`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `13`,
        _: `3`,
        width: `10`,
        height: `3`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M27 32.2952H9L7 14.2952H29L27 32.2952ZM12 29.2952H14V17.2952H12V29.2952ZM17 17.2952V29.2952H19V17.2952H17ZM22 29.2952H24V17.2952H22V29.2952Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M9.66645 5.52796C12.1332 3.87973 15.0333 3 18 3C19.9698 3 21.9204 3.38799 23.7403 4.14181C25.5601 4.89563 27.2137 6.00052 28.6066 7.3934C29.9995 8.78628 31.1044 10.4399 31.8582 12.2597C32.612 14.0796 33 16.0302 33 18C33 20.9667 32.1203 23.8668 30.472 26.3336C28.8238 28.8003 26.4811 30.7229 23.7403 31.8582C20.9994 32.9935 17.9834 33.2906 15.0737 32.7118C12.1639 32.133 9.49119 30.7044 7.3934 28.6066C5.29562 26.5088 3.86701 23.8361 3.28823 20.9264C2.70945 18.0166 3.0065 15.0006 4.14181 12.2597C5.27713 9.51886 7.19972 7.17618 9.66645 5.52796ZM9.5056 13.3333C9.17595 13.8266 9.00001 14.4067 9.00001 15C9.00001 15.7956 9.31608 16.5587 9.87869 17.1213C10.4413 17.6839 11.2044 18 12 18C12.5934 18 13.1734 17.8241 13.6667 17.4944C14.1601 17.1648 14.5446 16.6962 14.7716 16.1481C14.9987 15.5999 15.0581 14.9967 14.9424 14.4147C14.8266 13.8328 14.5409 13.2982 14.1213 12.8787C13.7018 12.4591 13.1672 12.1734 12.5853 12.0576C12.0033 11.9419 11.4001 12.0013 10.852 12.2284C10.3038 12.4554 9.83524 12.8399 9.5056 13.3333ZM22.3333 17.4944C22.8266 17.8241 23.4067 18 24 18C24.7957 18 25.5587 17.6839 26.1213 17.1213C26.6839 16.5587 27 15.7956 27 15C27 14.4067 26.8241 13.8266 26.4944 13.3333C26.1648 12.8399 25.6962 12.4554 25.1481 12.2284C24.5999 12.0013 23.9967 11.9419 23.4147 12.0576C22.8328 12.1734 22.2982 12.4591 21.8787 12.8787C21.4591 13.2982 21.1734 13.8328 21.0576 14.4147C20.9419 14.9967 21.0013 15.5999 21.2284 16.1481C21.4554 16.6962 21.8399 17.1648 22.3333 17.4944ZM23 22C23 23.3261 22.4732 24.5979 21.5355 25.5355C20.5979 26.4732 19.3261 27 18 27C16.6739 27 15.4021 26.4732 14.4645 25.5355C13.5268 24.5979 13 23.3261 13 22H23Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M2 6.05005V30.05H34V6.05005H2ZM25 10.05C25.5933 10.05 26.1734 10.226 26.6667 10.5556C27.1601 10.8853 27.5446 11.3538 27.7716 11.902C27.9987 12.4502 28.0581 13.0534 27.9424 13.6353C27.8266 14.2173 27.5409 14.7518 27.1213 15.1714C26.7018 15.5909 26.1672 15.8766 25.5853 15.9924C25.0033 16.1082 24.4001 16.0488 23.8519 15.8217C23.3038 15.5946 22.8352 15.2101 22.5056 14.7168C22.1759 14.2234 22 13.6434 22 13.05C22 12.2544 22.3161 11.4913 22.8787 10.9287C23.4413 10.3661 24.2044 10.05 25 10.05ZM23 26.05H6L14.5 15.05L19.4 21.39L22 18.05L28.22 26.05H23Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M2 6.05005V30.05H34V6.05005H2ZM8 27.05H5V23.05H8V27.05ZM8 20.05H5V16.05H8V20.05ZM8 13.05H5V9.05005H8V13.05ZM14 23.82V12.28L24 18.05L14 23.82ZM31 27.05H28V23.05H31V27.05ZM31 20.05H28V16.05H31V20.05ZM31 13.05H28V9.05005H31V13.05Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M3 6H21V17.9857H11.174V16.7846H19.9239V8.68161L4.08514 8.68175V9.85254H3V6Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M10.4285 10.5567V16.1991H8.54908V13.7682L4.33155 17.9887V18H3V16.6675H3.00181L7.22877 12.4375H4.79018V10.5567H10.4285Z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M14 14H4V10H10V4H14V14ZM32 10H26V4H22V14H32V10ZM26 26H32V22H22V32H26V26ZM14 22H4V26H10V32H14V22Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 20 20`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M5.37033 3.07108C6.74074 2.15541 8.35191 1.66666 10.0001 1.66666C11.0944 1.66666 12.1781 1.88221 13.1891 2.301C14.2002 2.71979 15.1188 3.33362 15.8926 4.10744C16.6665 4.88126 17.2803 5.79992 17.6991 6.81097C18.1179 7.82202 18.3334 8.90565 18.3334 10C18.3334 11.6482 17.8447 13.2593 16.929 14.6297C16.0133 16.0002 14.7118 17.0683 13.1891 17.699C11.6664 18.3297 9.99084 18.4948 8.37433 18.1732C6.75782 17.8517 5.27297 17.058 4.10753 15.8926C2.94209 14.7271 2.14842 13.2423 1.82687 11.6258C1.50533 10.0092 1.67036 8.33369 2.30109 6.81097C2.93182 5.28825 3.99992 3.98676 5.37033 3.07108ZM12.2223 5L11.389 10H8.61119L7.77786 5H12.2223ZM11.9445 13.0556C11.9445 14.1294 11.074 15 10.0001 15C8.92619 15 8.05564 14.1294 8.05564 13.0556C8.05564 11.9817 8.92619 11.1111 10.0001 11.1111C11.074 11.1111 11.9445 11.9817 11.9445 13.0556Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    width: `5`,
    height: `19`,
    viewBox: `0 0 5 19`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M5 0H3C1.34315 0 0 1.34315 0 3V16C0 17.6569 1.34315 19 3 19H5V0Z`,
      fill: `white`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    width: `5`,
    height: `19`,
    viewBox: `0 0 5 19`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M0 0H2C3.65685 0 5 1.34315 5 3V16C5 17.6569 3.65685 19 2 19H0V0Z`,
      fill: `white`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Undo`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M32.584 17.998a13.87 13.87 0 0 0-24.05-9.421V5.974a1.857 1.857 0 1 0-3.715 0v7.397a1.857 1.857 0 0 0 1.857 1.857h7.41a1.857 1.857 0 0 0 0-3.714H10.86a10.176 10.176 0 1 1 7.85 16.657 1.857 1.857 0 0 0 0 3.713h.036a13.871 13.871 0 0 0 13.838-13.886Z`,
        fill: `#fff`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Redo`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M4.819 17.998a13.869 13.869 0 0 1 24.05-9.421V5.974a1.857 1.857 0 1 1 3.714 0v7.397a1.857 1.857 0 0 1-1.857 1.857h-7.409a1.857 1.857 0 0 1 0-3.714h3.225a10.176 10.176 0 1 0-7.849 16.657 1.857 1.857 0 0 1 0 3.713h-.037A13.871 13.871 0 0 1 4.82 17.998Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextBold`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M21.917 30.767c4.862 0 7.427-3.062 7.427-6.89 0-3.216-2.182-5.858-4.9-6.28 2.412-.497 4.402-2.64 4.402-5.857 0-3.407-2.488-6.508-7.35-6.508H10.793A2.735 2.735 0 0 0 8.06 7.967v20.066a2.734 2.734 0 0 0 2.734 2.734h11.124ZM20.31 15.492h-5.72c-.604 0-1.094-.49-1.094-1.094v-3.44c0-.604.49-1.093 1.094-1.093h5.72c1.838 0 2.986 1.225 2.986 2.794 0 1.646-1.148 2.833-2.986 2.833Zm.192 10.643h-5.912c-.604 0-1.094-.49-1.094-1.094v-3.823c0-.604.49-1.093 1.094-1.093H20.5c2.144 0 3.292 1.378 3.292 2.985 0 1.838-1.225 3.025-3.292 3.025Z`,
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextBullets`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M5.275 26.414c0-.609.24-1.192.669-1.623a2.275 2.275 0 0 1 3.226 0 2.301 2.301 0 0 1 0 3.245 2.275 2.275 0 0 1-3.226 0 2.301 2.301 0 0 1-.669-1.622Zm2.282-14.532c.605 0 1.186-.242 1.613-.672a2.3 2.3 0 0 0 0-3.245 2.275 2.275 0 0 0-3.226 0 2.3 2.3 0 0 0 0 3.245c.428.43 1.008.672 1.613.672Zm0 8.413c.605 0 1.186-.242 1.613-.672a2.3 2.3 0 0 0 0-3.245 2.275 2.275 0 0 0-3.226 0 2.3 2.3 0 0 0 0 3.245c.428.43 1.008.672 1.613.672Zm7.606-9.178h15.443a1.52 1.52 0 0 0 1.317-.765 1.537 1.537 0 0 0 0-1.53 1.52 1.52 0 0 0-1.317-.764H15.163a1.52 1.52 0 0 0-1.318.765 1.537 1.537 0 0 0 0 1.53 1.52 1.52 0 0 0 1.318.764Zm0 8.413h15.443a1.52 1.52 0 0 0 1.317-.764 1.537 1.537 0 0 0 0-1.53 1.52 1.52 0 0 0-1.317-.765H15.163a1.52 1.52 0 0 0-1.318.765 1.537 1.537 0 0 0 0 1.53 1.52 1.52 0 0 0 1.318.764Zm0 8.414h15.443a1.52 1.52 0 0 0 1.317-.765 1.537 1.537 0 0 0 0-1.53 1.52 1.52 0 0 0-1.317-.765H15.163a1.52 1.52 0 0 0-1.318.765 1.537 1.537 0 0 0 0 1.53 1.52 1.52 0 0 0 1.318.765Z`,
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextBullets`,
    baseProfile: `tiny`,
    version: `1.2`,
    viewBox: `0 0 36 36`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M15.2,11.1h15.4c.5,0,1-.3,1.3-.8.3-.5.3-1.1,0-1.5-.3-.5-.8-.8-1.3-.8h-15.4c-.5,0-1,.3-1.3.8-.3.5-.3,1.1,0,1.5.3.5.8.8,1.3.8ZM15.2,19.5h15.4c.5,0,1-.3,1.3-.8.3-.5.3-1.1,0-1.5-.3-.5-.8-.8-1.3-.8h-15.4c-.5,0-1,.3-1.3.8-.3.5-.3,1.1,0,1.5.3.5.8.8,1.3.8ZM15.2,27.9h15.4c.5,0,1-.3,1.3-.8.3-.5.3-1.1,0-1.5-.3-.5-.8-.8-1.3-.8h-15.4c-.5,0-1,.3-1.3.8-.3.5-.3,1.1,0,1.5.3.5.8.8,1.3.8Z`,
        fill: `#fff`,
        strokeWidth: `0`,
      }),
      (0, _.jsxs)(`g`, {
        children: [
          (0, _.jsx)(`path`, {
            _: `M5.8,12.5v-1h1.6v1h-1.6ZM5.9,7.9v-1.1l1.4-.5v1.1l-1.4.5ZM7.3,12.5v-6.2h1.2v6.2h-1.2ZM8.4,12.5v-1h1.4v1h-1.4Z`,
            fill: `#fff`,
            strokeWidth: `0`,
          }),
          (0, _.jsx)(`path`, {
            _: `M5.7,21v-1.2c.9-.5,1.6-1,2.1-1.5.5-.5.7-1.1.7-1.6s0-.5-.2-.6c-.1-.1-.4-.2-.6-.2s-.5,0-.8.2c-.3.1-.5.3-.7.5l-.7-.8c.2-.3.5-.6.9-.8.4-.2.8-.3,1.3-.3.7,0,1.2.2,1.5.5.3.3.5.8.5,1.4s-.2,1.1-.5,1.7c-.3.5-.9,1-1.6,1.5v1.2h-1.8ZM6,21v-1.1h3.9v1.1h-3.9Z`,
            fill: `#fff`,
            strokeWidth: `0`,
          }),
          (0, _.jsx)(`path`, {
            _: `M6.8,26.9v-1c.3,0,.6-.1.9-.2.3,0,.4-.2.6-.4s.2-.3.2-.5,0-.3-.2-.4c-.1,0-.3-.1-.5-.1s-.5,0-.8.1-.5.2-.8.4l-.6-.9c.3-.3.6-.5,1-.6.4-.1.8-.2,1.2-.2s1.1.1,1.4.4c.3.2.5.6.5,1s-.1.7-.4,1c-.3.3-.6.5-1,.6v.5l-1.4.2ZM7.4,29.6c-.3,0-.6,0-.9,0-.3,0-.5,0-.7-.2v-1.1c.3,0,.5.1.8.2.2,0,.5,0,.9,0s.7,0,.9-.2c.2-.1.3-.3.3-.6s0-.3-.2-.5c-.1-.1-.3-.2-.6-.3-.2,0-.5,0-.9,0h-.1v-1c-.1,0,1.2.5,1.2.5.5,0,1,.1,1.3.4.3.3.5.6.5,1.1s-.2,1-.6,1.3c-.4.3-1,.5-1.8.5Z`,
            fill: `#fff`,
            strokeWidth: `0`,
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextCode`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M25.026 26.735a1.402 1.402 0 0 0 1.997-.07l7.29-7.71a1.402 1.402 0 0 0 0-1.927l-7.29-7.71a1.402 1.402 0 0 0-2.032 1.927l6.343 6.764-6.378 6.729a1.401 1.401 0 0 0 .07 1.997ZM12.34 9.285a1.402 1.402 0 0 0-1.997.07l-7.254 7.71a1.402 1.402 0 0 0 0 1.927l7.29 7.71a1.402 1.402 0 0 0 2.032-1.927L6.033 18.01l6.378-6.729a1.401 1.401 0 0 0-.07-1.997ZM15.25 32.134h.351a1.402 1.402 0 0 0 1.332-1.051l6.238-25.478a1.407 1.407 0 0 0-2.733-.666l-6.239 25.478a1.402 1.402 0 0 0 1.052 1.717Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextH1`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M15.08 16.38V9h3.754v18h-3.755v-7.38H6.902V27h-3.78V9h3.78v7.38h8.177ZM30.861 9v14.734h3.42V27H22.787v-3.266h4.243V13.166l-3.78 1.594-1.209-2.829L27.955 9h2.906Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextH2`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M14.47 16.559V9.303h3.69V27h-3.69v-7.256H6.43V27H2.714V9.303H6.43v7.256h8.04ZM26.168 23.79h8.52V27H21.466v-3.084l5.107-4.247.43-.38c.775-.657 1.364-1.188 1.769-1.592a5.49 5.49 0 0 0 1.011-1.29 3.02 3.02 0 0 0 .38-1.491c0-.877-.32-1.534-.961-1.972-.624-.455-1.433-.683-2.427-.683a6.83 6.83 0 0 0-2.174.354 7.617 7.617 0 0 0-1.82.885l-1.265-2.73c.776-.54 1.66-.97 2.655-1.29A10.66 10.66 0 0 1 27.407 9c2.04 0 3.674.447 4.904 1.34s1.846 2.166 1.846 3.817a5.58 5.58 0 0 1-1.062 3.312c-.708.978-1.795 2.073-3.261 3.287l-3.666 3.033Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextH3`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M14.683 16.45V9.394h3.59v17.214h-3.59v-7.058h-7.82v7.058H3.25V9.393h3.615v7.058h7.82ZM27.243 9c2.016 0 3.549.402 4.598 1.205 1.05.803 1.574 1.844 1.574 3.123 0 .869-.262 1.647-.787 2.336-.508.672-1.23 1.188-2.164 1.55v.073c1.098.23 1.984.705 2.656 1.426.688.705 1.033 1.648 1.033 2.828 0 1.082-.312 2.041-.935 2.877-.623.82-1.475 1.459-2.557 1.918-1.082.443-2.279.664-3.59.664-1.246 0-2.435-.172-3.566-.516-1.115-.345-2.057-.828-2.828-1.451l1.55-2.656c1.278 1.033 2.794 1.55 4.549 1.55 1.114 0 1.983-.23 2.606-.69.64-.458.959-1.09.959-1.893 0-1.574-1.205-2.36-3.615-2.36h-2.213v-2.73h1.992c.95 0 1.713-.18 2.287-.54.59-.378.885-.902.885-1.575 0-.623-.279-1.123-.836-1.5-.54-.377-1.295-.565-2.262-.565-.738 0-1.451.123-2.14.369-.672.23-1.278.549-1.82.959l-1.524-2.312a9.046 9.046 0 0 1 2.779-1.549C24.923 9.181 26.046 9 27.243 9Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextH4`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M14.122 16.38V9h3.755v18h-3.755v-7.38H5.945V27h-3.78V9h3.78v7.38h8.177ZM33.17 9v11.006h2.597v2.905H33.17V27h-3.832v-4.089h-8.485v-2.468L29.673 9h3.497Zm-3.677 4.5-4.963 6.506h4.963V13.5Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextH5`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M13.948 16.215V9h3.67v17.598h-3.67v-7.215H5.953v7.215H2.258V9h3.695v7.215h7.995ZM33.198 9v3.143h-7.692v4.122a5.22 5.22 0 0 1 1.634-.653c.62-.151 1.24-.226 1.86-.226 1.575 0 2.832.452 3.77 1.357.956.888 1.434 2.187 1.434 3.897 0 1.273-.302 2.388-.905 3.343-.587.956-1.45 1.701-2.59 2.238-1.122.52-2.455.779-3.997.779-1.14 0-2.204-.15-3.192-.453-.99-.301-1.81-.729-2.464-1.282l1.307-2.815a7.513 7.513 0 0 0 4.299 1.307c1.19 0 2.112-.26 2.765-.78.654-.519.98-1.265.98-2.237 0-.854-.25-1.508-.753-1.96-.486-.453-1.157-.68-2.012-.68-.636 0-1.223.11-1.76.327a5.755 5.755 0 0 0-1.583.93l-2.338-1.282V9h11.237Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    className: `SVGIcon_Button SVGIcon_TextH5`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M12 3L7 17H9L10.2 13H13.8L15 17H17L12 3ZM11.1 11L12 8L12.9 11H11.1Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `4`,
        _: `19`,
        width: `16`,
        height: `2`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    className: `SVGIcon_Button SVGIcon_TextH5`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `3`,
        _: `14`,
        width: `18`,
        height: `6`,
        fill: `currentColor`,
        opacity: `0.4`,
      }),
      (0, _.jsx)(`path`, {
        _: `M12 3L7 17H9L10.2 13H13.8L15 17H17L12 3ZM11.1 11L12 8L12.9 11H11.1Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _() {
  let [_, _] = _();
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextOutdent`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: [
      (0, _.jsxs)(`g`, {
        clipPath: _,
        children: [
          (0, _.jsx)(`path`, {
            _: `M6.469 17.281a.825.825 0 0 0 0 1.375l6.267 4.148a.825.825 0 0 0 1.28-.688v-8.294a.825.825 0 0 0-1.28-.688L6.47 17.28Z`,
          }),
          (0, _.jsx)(`rect`, {
            width: 6.91,
            height: 2.734,
            _: 0.825,
            transform: `matrix(-1 0 0 1 19.263 16.65)`,
          }),
          (0, _.jsx)(`path`, {
            _: `M7.634 10.385h22.652c.602 0 1.16-.324 1.46-.848a1.705 1.705 0 0 0 0-1.697 1.685 1.685 0 0 0-1.46-.848H7.634c-.603 0-1.16.323-1.46.848a1.705 1.705 0 0 0 0 1.697c.3.524.857.848 1.46.848Zm15.168 9.33h7.484c.602 0 1.16-.324 1.46-.849a1.705 1.705 0 0 0 0-1.696 1.685 1.685 0 0 0-1.46-.848h-7.484c-.603 0-1.16.323-1.461.848a1.705 1.705 0 0 0 0 1.696c.301.525.858.848 1.46.848ZM7.634 29.043h22.652c.602 0 1.16-.323 1.46-.848a1.705 1.705 0 0 0 0-1.697 1.685 1.685 0 0 0-1.46-.848H7.634c-.603 0-1.16.323-1.46.848a1.705 1.705 0 0 0 0 1.697c.3.524.857.848 1.46.848Z`,
          }),
        ],
      }),
      (0, _.jsx)(`defs`, {
        children: (0, _.jsx)(`clipPath`, {
          _: _,
          children: (0, _.jsx)(`path`, {
            transform: `translate(.701)`,
            _: `M0 0h36v36H0z`,
          }),
        }),
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextItalic`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M21.255 7.786H14.87a1.277 1.277 0 1 1 0-2.554h15.32a1.277 1.277 0 0 1 0 2.554h-6.383l-7.66 20.428h6.383a1.277 1.277 0 0 1 0 2.553H7.211a1.277 1.277 0 1 1 0-2.553h6.383l7.66-20.428Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextLink`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsx)(`g`, {
      children: (0, _.jsx)(`path`, {
        _: `M14.232 31.152a8.408 8.408 0 0 1-7.767-5.193 8.427 8.427 0 0 1 1.81-9.172l1.632-1.623a1.784 1.784 0 0 1 2.518 2.527l-1.62 1.618a4.854 4.854 0 0 0 3.427 8.282 4.845 4.845 0 0 0 3.427-1.42l1.622-1.624a1.782 1.782 0 0 1 2.525 2.515l-1.627 1.64a8.376 8.376 0 0 1-5.947 2.45Zm15.41-11.923a8.428 8.428 0 0 0 0-11.914 8.413 8.413 0 0 0-11.903 0L16.116 8.95a1.784 1.784 0 0 0 2.53 2.516l1.613-1.62a4.845 4.845 0 0 1 8.275 3.43 4.855 4.855 0 0 1-1.42 3.431l-1.62 1.618a1.784 1.784 0 0 0 2.518 2.527l1.63-1.623Zm-6.813-2.563a1.782 1.782 0 0 0-2.522-2.52l-5.493 5.498a1.782 1.782 0 0 0 2.522 2.52l5.493-5.498Z`,
      }),
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextLink`,
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `2`,
        _: `4`,
        width: `20`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `2`,
        _: `8`,
        width: `14`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `2`,
        _: `12`,
        width: `18`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `2`,
        _: `16`,
        width: `10`,
        height: `2`,
        fill: `currentcolor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextLink`,
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `2`,
        _: `4`,
        width: `20`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `8`,
        _: `8`,
        width: `14`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `4`,
        _: `12`,
        width: `18`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `12`,
        _: `16`,
        width: `10`,
        height: `2`,
        fill: `currentcolor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextLink`,
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `2`,
        _: `4`,
        width: `20`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `5`,
        _: `8`,
        width: `14`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `3`,
        _: `12`,
        width: `18`,
        height: `2`,
        fill: `currentcolor`,
      }),
      (0, _.jsx)(`rect`, {
        _: `7`,
        _: `16`,
        width: `10`,
        height: `2`,
        fill: `currentcolor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextIndent`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: (0, _.jsxs)(`g`, {
      children: [
        (0, _.jsx)(`path`, {
          _: `M18.224 17.281a.825.825 0 0 1 0 1.375l-6.268 4.148a.825.825 0 0 1-1.28-.688v-8.294a.825.825 0 0 1 1.28-.688l6.268 4.147Z`,
        }),
        (0, _.jsx)(`rect`, {
          _: 5.43,
          _: 16.65,
          width: 6.91,
          height: 2.734,
          _: 0.825,
        }),
        (0, _.jsx)(`path`, {
          _: `M7.635 10.385h22.652c.603 0 1.16-.324 1.46-.848a1.705 1.705 0 0 0 0-1.697 1.685 1.685 0 0 0-1.46-.848H7.635c-.603 0-1.16.323-1.46.848a1.705 1.705 0 0 0 0 1.697c.3.524.857.848 1.46.848Zm15.168 9.33h7.484c.603 0 1.16-.324 1.46-.849a1.705 1.705 0 0 0 0-1.696 1.685 1.685 0 0 0-1.46-.848h-7.484c-.603 0-1.16.323-1.461.848a1.705 1.705 0 0 0 0 1.696c.301.525.858.848 1.46.848ZM7.635 29.043h22.652c.603 0 1.16-.323 1.46-.848a1.705 1.705 0 0 0 0-1.697 1.685 1.685 0 0 0-1.46-.848H7.635c-.603 0-1.16.323-1.46.848a1.705 1.705 0 0 0 0 1.697c.3.524.857.848 1.46.848Z`,
        }),
      ],
    }),
  });
}
function _() {
  let [_, _] = _();
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextParagraph`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: [
      (0, _.jsx)(`g`, {
        clipPath: _,
        children: (0, _.jsx)(`path`, {
          _: `M29.582 9.65V7.328a.528.528 0 0 0-.527-.527H16.059c-2.638 0-4.607.566-6.016 1.731-1.475 1.22-2.224 2.95-2.224 5.139 0 2.402.724 4.184 2.214 5.447 1.483 1.257 3.638 1.894 6.403 1.894h2.407v7.662c0 .29.236.527.527.527h1.645a.528.528 0 0 0 .528-.527V10.177h2.12v18.496c0 .291.236.528.527.528h1.593a.528.528 0 0 0 .528-.528V10.177h2.743a.528.528 0 0 0 .528-.527Z`,
        }),
      }),
      (0, _.jsx)(`defs`, {
        children: (0, _.jsx)(`clipPath`, {
          _: _,
          children: (0, _.jsx)(`path`, {
            transform: `translate(.701)`,
            _: `M0 0h36v36H0z`,
          }),
        }),
      }),
    ],
  });
}
function _() {
  let [_, _] = _();
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextStrikethrough`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: [
      (0, _.jsx)(`g`, {
        clipPath: _,
        children: (0, _.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M30.614 17.086a1.324 1.324 0 0 1 0 2.648H26.98c.714.96 1.145 2.18 1.145 3.77 0 3.594-2.446 7.263-9.117 7.263-2.329 0-4.853-.864-7.573-2.593l-.684-.45-.073-.053a1.425 1.425 0 0 1-.25-2 1.483 1.483 0 0 1 2.044-.288c2.42 1.761 4.635 2.642 6.647 2.642 4.41 0 5.818-2.372 5.818-4.262 0-2.27-1.76-3.28-4.047-4.028l-14.102-.001a1.324 1.324 0 0 1 0-2.647h23.825ZM18.786 5.232c2.2 0 4.712.876 7.534 2.628a1.314 1.314 0 0 1 .323 1.95c-.52.634-1.427.789-2.128.363-2.414-1.465-4.398-2.198-5.95-2.198-2.965 0-5.078 1.594-5.078 3.928 0 1.167.63 1.95 1.625 2.54l-4.382-.001c-.276-.67-.43-1.446-.43-2.353 0-4.077 3.632-6.856 8.487-6.856Z`,
        }),
      }),
      (0, _.jsx)(`defs`, {
        children: (0, _.jsx)(`clipPath`, {
          _: _,
          children: (0, _.jsx)(`path`, {
            transform: `translate(.701)`,
            _: `M0 0h36v36H0z`,
          }),
        }),
      }),
    ],
  });
}
function _() {
  let [_, _] = _();
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_TextUnderline`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    children: [
      (0, _.jsx)(`g`, {
        clipPath: _,
        children: (0, _.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M29.447 33.171a1.343 1.343 0 1 1 0 2.687H7.956a1.343 1.343 0 0 1 0-2.687h21.49ZM27.365 5.232c.862 0 1.56.7 1.56 1.561V20.54c0 6.243-3.422 10.23-10.23 10.23-6.807 0-10.23-4.025-10.23-10.193V6.794a1.56 1.56 0 1 1 3.122 0v13.709c0 4.588 2.483 7.484 7.109 7.484 4.626 0 7.108-2.896 7.108-7.484V6.793c0-.861.699-1.56 1.56-1.56Z`,
          fill: `#fff`,
        }),
      }),
      (0, _.jsx)(`defs`, {
        children: (0, _.jsx)(`clipPath`, {
          _: _,
          children: (0, _.jsx)(`path`, {
            fill: `currentColor`,
            transform: `translate(.701)`,
            _: `M0 0h36v36H0z`,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { bGreyOutRightSide: _, ..._ } = _;
  return _
    ? (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `-3 0 25 15`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M11.3699 2.1855H7.84997C7.1763 2.1855 6.52367 2.03814 5.8921 1.82761C2.57518 0.642996 1.92458 2.62958 1.05846 5.27426C0.924084 5.68458 0.78452 6.11073 0.629005 6.54335C-0.528876 9.78541 -0.0446708 12.9012 1.72373 13.5327C3.13424 14.038 4.94474 12.7538 6.20789 10.5222C6.46052 10.6486 6.75525 10.7328 7.07103 10.7328C7.28247 10.7328 7.48656 10.6985 7.67799 10.6352L11.3699 2.1855ZM4.41843 7.40649C4.41843 7.4907 4.48159 7.55386 4.5658 7.55386V7.53281H5.42895C5.51316 7.53281 5.57632 7.46965 5.57632 7.38544V6.22756H6.7342C6.83946 6.22756 6.90262 6.1644 6.90262 6.08019V5.2381C6.90262 5.15389 6.81841 5.09073 6.7342 5.09073H5.57632V3.93285C5.57632 3.84864 5.51316 3.78548 5.42895 3.78548H4.5658C4.48159 3.78548 4.41843 3.84864 4.41843 3.93285V5.09073H3.26055C3.15529 5.09073 3.09213 5.15389 3.09213 5.2381V6.10125C3.09213 6.18546 3.17634 6.24861 3.26055 6.24861H4.41843V7.40649ZM6.14473 8.7749C6.14473 9.28016 6.54473 9.7012 7.04998 9.7012C7.55524 9.7012 7.97629 9.28016 7.97629 8.7749C7.97629 8.29069 7.55524 7.86965 7.04998 7.86965C6.56578 7.86965 6.14473 8.26964 6.14473 8.7749Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `grey`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M13.828 2.92182C13.8318 2.92822 13.8354 2.93477 13.839 2.94132C13.8436 2.94968 13.8481 2.95804 13.8532 2.96608C13.86 2.97684 13.8674 2.98708 13.8748 2.99732L13.8748 2.99736L13.8748 2.9974C13.8798 3.00433 13.8848 3.01126 13.8897 3.01835C14.0485 3.25263 14.2573 3.45281 14.5086 3.59687L14.5127 3.59947C14.5584 3.62555 14.6063 3.64869 14.6546 3.67094C14.6589 3.67292 14.6631 3.67511 14.6673 3.67731L14.6673 3.67731C14.6721 3.67986 14.677 3.68241 14.682 3.6846C14.7397 3.71 14.7992 3.73269 14.8603 3.75245C14.865 3.75395 14.8698 3.7552 14.8746 3.75644L14.8746 3.75644C14.8788 3.75754 14.883 3.75864 14.8872 3.7599L14.8881 3.76002C15.2353 3.86547 15.6028 3.86558 15.9504 3.76002L15.9512 3.75985L15.9521 3.75968C15.9562 3.7584 15.9604 3.75733 15.9645 3.75625C15.9692 3.75504 15.9738 3.75383 15.9785 3.75234C16.0447 3.731 16.1087 3.70503 16.1714 3.67658C16.1885 3.66881 16.2052 3.66017 16.2218 3.65153L16.2437 3.64023C16.2799 3.62182 16.3158 3.60274 16.3507 3.58208C16.3798 3.56481 16.4081 3.54663 16.4361 3.52777C16.4636 3.50937 16.4905 3.49006 16.5169 3.47019C16.5466 3.44795 16.5762 3.42548 16.6045 3.40144C16.6231 3.38577 16.6409 3.36911 16.6586 3.35246L16.6703 3.3416L16.6888 3.3244L16.6888 3.32438C16.7113 3.30361 16.7338 3.28286 16.7549 3.26064C16.7681 3.24682 16.7804 3.23217 16.7927 3.21749L16.7927 3.21747L16.7927 3.21745C16.7991 3.20984 16.8054 3.20222 16.8119 3.19471C16.8559 3.14413 16.897 3.09129 16.9356 3.03608L16.9462 3.02092C16.9636 2.99614 16.9809 2.97142 16.9969 2.94553C17.0115 2.92184 17.0249 2.89721 17.0382 2.87262L17.0382 2.8726L17.0464 2.85747C17.1084 2.74389 17.1621 2.62455 17.2009 2.49798C17.5113 1.48671 16.9628 0.406 15.9783 0.0888548C15.7942 0.0294676 15.6053 0 15.4174 0C15.1269 0 14.8385 0.0703387 14.5726 0.209322C14.1217 0.444952 13.7898 0.847565 13.6377 1.34321C13.4833 1.84608 13.5417 2.36611 13.7602 2.8009C13.7811 2.84256 13.8045 2.88219 13.828 2.92182ZM15.4233 0.661048C15.464 0.534258 15.5996 0.464032 15.7264 0.505129C16.4892 0.751032 16.915 1.58494 16.6758 2.36408C16.6441 2.46795 16.5487 2.53456 16.4458 2.53456C16.4223 2.53456 16.3984 2.53106 16.3749 2.52373C16.2478 2.48455 16.1764 2.34952 16.2156 2.22216C16.3776 1.69411 16.0921 1.13005 15.579 0.964758C15.4524 0.923887 15.3827 0.787951 15.4233 0.661048ZM15.7794 7.10124V8.4729C15.7794 8.67172 15.6177 8.8334 15.4192 8.8334C15.2205 8.8334 15.0589 8.67172 15.0589 8.4729V7.10124V5.77417V4.29458C15.1785 4.31354 15.2988 4.32325 15.4192 4.32325C15.5395 4.32325 15.6599 4.31354 15.7794 4.29458V5.77406V7.10124ZM15.4192 11.1944C13.9757 11.1944 12.8014 10.0184 12.8014 8.573C12.8014 7.44668 13.5323 6.44692 14.5773 6.09093V6.94821C13.9729 7.26129 13.5902 7.88214 13.5902 8.57311C13.5902 9.58314 14.4108 10.4049 15.4192 10.4049C16.4277 10.4049 17.2482 9.58314 17.2482 8.57311C17.2482 7.88203 16.8655 7.2614 16.261 6.9481V6.09082C17.3059 6.44692 18.037 7.44679 18.037 8.573C18.037 10.0184 16.8627 11.1944 15.4192 11.1944ZM14.5773 7.51953V8.47289C14.5773 8.93782 14.9551 9.31616 15.4192 9.31616C15.8833 9.31616 16.261 8.93782 16.261 8.47289V7.51953C16.5762 7.77097 16.7665 8.15461 16.7665 8.57292C16.7665 9.31672 16.1621 9.92189 15.4192 9.92189C14.6763 9.92189 14.0719 9.31672 14.0719 8.57292C14.0719 8.15473 14.2622 7.77108 14.5773 7.51953ZM10 9.51902V14.0001H16.6L20.8387 4.29884V3.14599H17.4399C17.4033 3.20899 17.3638 3.26973 17.322 3.32878L17.3209 3.33036C17.1532 3.56655 16.9447 3.76989 16.7053 3.9301L16.7052 3.93021C16.5914 4.00642 16.4707 4.07281 16.3441 4.12824C16.3326 4.13333 16.321 4.13829 16.3094 4.14315L16.2899 4.1516C16.2803 4.15579 16.2708 4.15998 16.2612 4.16381V5.58797C17.58 5.96123 18.5189 7.18487 18.5189 8.57313C18.5189 10.2847 17.1284 11.6773 15.4194 11.6773C13.7103 11.6773 12.3198 10.2846 12.3198 8.57302C12.3198 7.18476 13.2586 5.96112 14.5774 5.58786V4.16133L14.5516 4.15149L14.5516 4.15149C14.5331 4.14452 14.5146 4.13756 14.4966 4.12971C14.4859 4.12505 14.4755 4.11987 14.4652 4.1147L14.4652 4.11469C14.4614 4.11278 14.4576 4.11087 14.4537 4.10898C14.4503 4.10732 14.447 4.10569 14.4435 4.10408C14.3911 4.0797 14.3392 4.05441 14.2891 4.02641C14.2787 4.02057 14.2687 4.01439 14.2587 4.00821L14.2404 3.99705C14.1902 3.96736 14.1407 3.93642 14.093 3.903C14.0844 3.89705 14.0762 3.89081 14.0679 3.88457L14.0679 3.88455L14.0536 3.87387C14.0047 3.8382 13.9569 3.80094 13.911 3.76154C13.9042 3.75576 13.8976 3.7498 13.891 3.74384L13.891 3.74381L13.8787 3.73275C13.8328 3.69187 13.7884 3.64942 13.7457 3.60494C13.7377 3.59661 13.7299 3.58813 13.722 3.57963L13.7159 3.57299C13.6752 3.52907 13.6363 3.48357 13.5989 3.43649C13.5882 3.42305 13.5777 3.40939 13.5673 3.39573C13.5335 3.35113 13.5012 3.30529 13.4704 3.2581C13.4587 3.24015 13.4469 3.22208 13.4356 3.20379C13.4306 3.19569 13.4254 3.18779 13.4201 3.17988C13.4127 3.16872 13.4054 3.15757 13.3986 3.14587H12.7846L10 9.51902ZM11.0839 12.5368C11.0839 12.8356 11.3275 13.0786 11.6272 13.0786C11.9268 13.0786 12.1707 12.8356 12.1706 12.5368C12.1706 12.238 11.9267 11.9949 11.6272 11.9949C11.3276 11.9949 11.0839 12.238 11.0839 12.5368Z`,
          }),
        ],
      })
    : (0, _.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `-3 0 25 15`,
        fill: `none`,
        ..._,
        children: [
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M11.3699 2.1855H7.84997C7.1763 2.1855 6.52367 2.03814 5.8921 1.82761C2.57518 0.642996 1.92458 2.62958 1.05846 5.27426C0.924084 5.68458 0.78452 6.11073 0.629006 6.54335C-0.528876 9.78541 -0.0446708 12.9012 1.72373 13.5327C3.13424 14.038 4.94474 12.7538 6.20789 10.5222C6.46052 10.6486 6.75525 10.7328 7.07103 10.7328C7.28247 10.7328 7.48656 10.6985 7.67799 10.6352L11.3699 2.1855ZM4.41843 7.40649C4.41843 7.4907 4.48159 7.55386 4.5658 7.55386V7.53281H5.42895C5.51316 7.53281 5.57632 7.46965 5.57632 7.38544V6.22756H6.7342C6.83946 6.22756 6.90262 6.1644 6.90262 6.08019V5.2381C6.90262 5.15389 6.81841 5.09073 6.7342 5.09073H5.57632V3.93285C5.57632 3.84864 5.51316 3.78548 5.42895 3.78548H4.5658C4.48159 3.78548 4.41843 3.84864 4.41843 3.93285V5.09073H3.26055C3.15529 5.09073 3.09213 5.15389 3.09213 5.2381V6.10125C3.09213 6.18546 3.17634 6.24861 3.26055 6.24861H4.41843V7.40649ZM6.14473 8.7749C6.14473 9.28016 6.54473 9.7012 7.04998 9.7012C7.55524 9.7012 7.97629 9.28016 7.97629 8.7749C7.97629 8.29069 7.55524 7.86965 7.04998 7.86965C6.56578 7.86965 6.14473 8.26964 6.14473 8.7749Z`,
          }),
          (0, _.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            _: `M13.828 2.92182C13.8318 2.92822 13.8354 2.93477 13.839 2.94132C13.8436 2.94968 13.8481 2.95804 13.8532 2.96608C13.86 2.97684 13.8674 2.98708 13.8748 2.99732L13.8748 2.99736L13.8748 2.9974C13.8798 3.00433 13.8848 3.01126 13.8897 3.01835C14.0485 3.25263 14.2573 3.45281 14.5086 3.59687L14.5127 3.59947C14.5584 3.62555 14.6063 3.64869 14.6546 3.67094C14.6589 3.67292 14.6631 3.67511 14.6673 3.67731L14.6673 3.67731C14.6721 3.67986 14.677 3.68241 14.682 3.6846C14.7397 3.71 14.7992 3.73269 14.8603 3.75245C14.865 3.75395 14.8698 3.7552 14.8746 3.75644L14.8746 3.75644C14.8788 3.75754 14.883 3.75864 14.8872 3.7599L14.8881 3.76002C15.2353 3.86547 15.6028 3.86558 15.9504 3.76002L15.9512 3.75985L15.9521 3.75968C15.9562 3.7584 15.9604 3.75733 15.9645 3.75625C15.9692 3.75504 15.9738 3.75383 15.9785 3.75234C16.0447 3.731 16.1087 3.70503 16.1714 3.67658C16.1885 3.66881 16.2052 3.66017 16.2218 3.65153L16.2437 3.64023C16.2799 3.62182 16.3158 3.60274 16.3507 3.58208C16.3798 3.56481 16.4081 3.54663 16.4361 3.52777C16.4636 3.50937 16.4905 3.49006 16.5169 3.47019C16.5466 3.44795 16.5762 3.42548 16.6045 3.40144C16.6231 3.38577 16.6409 3.36911 16.6586 3.35246L16.6703 3.3416L16.6888 3.3244L16.6888 3.32438C16.7113 3.30361 16.7338 3.28286 16.7549 3.26064C16.7681 3.24682 16.7804 3.23217 16.7927 3.21749L16.7927 3.21747L16.7927 3.21745C16.7991 3.20984 16.8054 3.20222 16.8119 3.19471C16.8559 3.14413 16.897 3.09129 16.9356 3.03608L16.9462 3.02092C16.9636 2.99614 16.9809 2.97142 16.9969 2.94553C17.0115 2.92184 17.0249 2.89721 17.0382 2.87262L17.0382 2.8726L17.0464 2.85747C17.1084 2.74389 17.1621 2.62455 17.2009 2.49798C17.5113 1.48671 16.9628 0.406 15.9783 0.0888548C15.7942 0.0294676 15.6053 0 15.4174 0C15.1269 0 14.8385 0.0703387 14.5726 0.209322C14.1217 0.444952 13.7898 0.847565 13.6377 1.34321C13.4833 1.84608 13.5417 2.36611 13.7602 2.8009C13.7811 2.84256 13.8045 2.88219 13.828 2.92182ZM15.4233 0.661048C15.464 0.534258 15.5996 0.464032 15.7264 0.505129C16.4892 0.751032 16.915 1.58494 16.6758 2.36408C16.6441 2.46795 16.5487 2.53456 16.4458 2.53456C16.4223 2.53456 16.3984 2.53106 16.3749 2.52373C16.2478 2.48455 16.1764 2.34952 16.2156 2.22216C16.3776 1.69411 16.0921 1.13005 15.579 0.964758C15.4524 0.923887 15.3827 0.787951 15.4233 0.661048ZM15.7794 7.10124V8.4729C15.7794 8.67172 15.6177 8.8334 15.4192 8.8334C15.2205 8.8334 15.0589 8.67172 15.0589 8.4729V7.10124V5.77417V4.29458C15.1785 4.31354 15.2988 4.32325 15.4192 4.32325C15.5395 4.32325 15.6599 4.31354 15.7794 4.29458V5.77406V7.10124ZM15.4192 11.1944C13.9757 11.1944 12.8014 10.0184 12.8014 8.573C12.8014 7.44668 13.5323 6.44692 14.5773 6.09093V6.94821C13.9729 7.26129 13.5902 7.88214 13.5902 8.57311C13.5902 9.58314 14.4108 10.4049 15.4192 10.4049C16.4277 10.4049 17.2482 9.58314 17.2482 8.57311C17.2482 7.88203 16.8655 7.2614 16.261 6.9481V6.09082C17.3059 6.44692 18.037 7.44679 18.037 8.573C18.037 10.0184 16.8627 11.1944 15.4192 11.1944ZM14.5773 7.51953V8.47289C14.5773 8.93782 14.9551 9.31616 15.4192 9.31616C15.8833 9.31616 16.261 8.93782 16.261 8.47289V7.51953C16.5762 7.77097 16.7665 8.15461 16.7665 8.57292C16.7665 9.31672 16.1621 9.92189 15.4192 9.92189C14.6763 9.92189 14.0719 9.31672 14.0719 8.57292C14.0719 8.15473 14.2622 7.77108 14.5773 7.51953ZM10 9.51902V14.0001H16.6L20.8387 4.29884V3.14599H17.4399C17.4033 3.20899 17.3638 3.26973 17.322 3.32878L17.3209 3.33036C17.1532 3.56655 16.9447 3.76989 16.7053 3.9301L16.7052 3.93021C16.5914 4.00642 16.4707 4.07281 16.3441 4.12824C16.3326 4.13333 16.321 4.13829 16.3094 4.14315L16.2899 4.1516C16.2803 4.15579 16.2708 4.15998 16.2612 4.16381V5.58797C17.58 5.96123 18.5189 7.18487 18.5189 8.57313C18.5189 10.2847 17.1284 11.6773 15.4194 11.6773C13.7103 11.6773 12.3198 10.2846 12.3198 8.57302C12.3198 7.18476 13.2586 5.96112 14.5774 5.58786V4.16133L14.5516 4.15149L14.5516 4.15149C14.5331 4.14452 14.5146 4.13756 14.4966 4.12971C14.4859 4.12505 14.4755 4.11987 14.4652 4.1147L14.4652 4.11469C14.4614 4.11278 14.4576 4.11087 14.4537 4.10898C14.4503 4.10732 14.447 4.10569 14.4435 4.10408C14.3911 4.0797 14.3392 4.05441 14.2891 4.02641C14.2787 4.02057 14.2687 4.01439 14.2587 4.00821L14.2404 3.99705C14.1902 3.96736 14.1407 3.93642 14.093 3.903C14.0844 3.89705 14.0762 3.89081 14.0679 3.88457L14.0679 3.88455L14.0536 3.87387C14.0047 3.8382 13.9569 3.80094 13.911 3.76154C13.9042 3.75576 13.8976 3.7498 13.891 3.74384L13.891 3.74381L13.8787 3.73275C13.8328 3.69187 13.7884 3.64942 13.7457 3.60494C13.7377 3.59661 13.7299 3.58813 13.722 3.57963L13.7159 3.57299C13.6752 3.52907 13.6363 3.48357 13.5989 3.43649C13.5882 3.42305 13.5777 3.40939 13.5673 3.39573C13.5335 3.35113 13.5012 3.30529 13.4704 3.2581C13.4587 3.24015 13.4469 3.22208 13.4356 3.20379C13.4306 3.19569 13.4254 3.18779 13.4201 3.17988C13.4127 3.16872 13.4054 3.15757 13.3986 3.14587H12.7846L10 9.51902ZM11.0839 12.5368C11.0839 12.8356 11.3275 13.0786 11.6272 13.0786C11.9268 13.0786 12.1707 12.8356 12.1706 12.5368C12.1706 12.238 11.9267 11.9949 11.6272 11.9949C11.3276 11.9949 11.0839 12.238 11.0839 12.5368Z`,
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    className: _(_.className),
    children: [
      (0, _.jsx)(`path`, {
        _: `M18 10C17.4696 10 16.9609 9.78929 16.5858 9.41421C16.2107 9.03914 16 8.53043 16 8V3H20V8C20 8.53043 19.7893 9.03914 19.4142 9.41421C19.0391 9.78929 18.5304 10 18 10Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M23.66 12.34C23.2875 11.9653 23.0784 11.4584 23.0784 10.93C23.0784 10.4016 23.2875 9.89473 23.66 9.52L27.19 6L30 8.81L26.47 12.34C26.0957 12.7095 25.5909 12.9166 25.065 12.9166C24.5391 12.9166 24.0343 12.7095 23.66 12.34Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M33 20H28C27.4696 20 26.9609 19.7893 26.5858 19.4142C26.2107 19.0391 26 18.5304 26 18C26 17.4696 26.2107 16.9609 26.5858 16.5858C26.9609 16.2107 27.4696 16 28 16H33V20Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M27.19 30L23.66 26.46C23.2875 26.0853 23.0784 25.5783 23.0784 25.05C23.0784 24.5216 23.2875 24.0147 23.66 23.64C23.8458 23.454 24.0663 23.3065 24.3091 23.2059C24.5519 23.1052 24.8122 23.0534 25.075 23.0534C25.3378 23.0534 25.5981 23.1052 25.8409 23.2059C26.0837 23.3065 26.3043 23.454 26.49 23.64L30 27.19L27.19 30Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M20 33H16V28C16 27.4696 16.2107 26.9609 16.5858 26.5858C16.9609 26.2107 17.4696 26 18 26C18.5304 26 19.0391 26.2107 19.4142 26.5858C19.7893 26.9609 20 27.4696 20 28V33Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M8.81 30L6 27.19L9.53 23.66C9.71575 23.474 9.93632 23.3265 10.1791 23.2259C10.4219 23.1252 10.6822 23.0734 10.945 23.0734C11.2078 23.0734 11.4681 23.1252 11.7109 23.2259C11.9537 23.3265 12.1743 23.474 12.36 23.66C12.7325 24.0347 12.9416 24.5416 12.9416 25.07C12.9416 25.5984 12.7325 26.1053 12.36 26.48L8.81 30Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M8 20H3V16H8C8.53043 16 9.03914 16.2107 9.41421 16.5858C9.78929 16.9609 10 17.4696 10 18C10 18.5304 9.78929 19.0391 9.41421 19.4142C9.03914 19.7893 8.53043 20 8 20Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M9.51 12.34L6 8.81L8.81 6L12.34 9.54C12.7125 9.91472 12.9216 10.4216 12.9216 10.95C12.9216 11.4784 12.7125 11.9853 12.34 12.36C12.1529 12.5446 11.9313 12.6906 11.6878 12.7895C11.4443 12.8885 11.1837 12.9385 10.9209 12.9366C10.658 12.9347 10.3981 12.8811 10.156 12.7787C9.91396 12.6764 9.69443 12.5273 9.51 12.34Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    width: `21`,
    height: `16`,
    viewBox: `0 0 21 16`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    className: _(_.className),
    children: (0, _.jsx)(`path`, {
      _: `M19.8036 8.20159L17.1427 2.47984C16.8199 1.77029 16.2208 1.26744 15.5477 0.983445C14.8911 0.761343 14.239 0.803399 13.6699 1.15492C13.2079 1.41139 12.7957 1.85353 12.6023 2.36971L5.5464 4.26032C5.12084 3.90999 4.60466 3.71661 4.01445 3.74208C3.36234 3.78414 2.77658 4.07377 2.30245 4.5325C1.78302 5.0697 1.59409 5.85004 1.66932 6.62593L2.22581 12.9115C2.35523 14.1373 3.35116 15.1308 4.53158 15.0799C5.71201 15.0289 6.64366 14.0496 6.63803 12.7907L6.65342 11.8578C7.10771 12.0678 7.59072 12.1374 8.08586 12.0047C9.19995 11.7062 9.87959 10.529 9.58107 9.41495L11.7473 8.8345C12.0459 9.94858 13.223 10.6282 14.3371 10.3297C14.8323 10.197 15.2158 9.89526 15.5208 9.54818L16.0006 10.3484C16.5135 11.2723 17.5624 11.721 18.4908 11.4722C18.6146 11.439 18.8003 11.3893 18.9075 11.2942C19.9387 10.6862 20.3044 9.32782 19.8036 8.20159ZM5.60416 7.69439L5.62075 7.75628C5.72026 8.12764 5.53902 8.44156 5.16766 8.54106C4.79629 8.64057 4.48238 8.45933 4.38288 8.08797L4.36629 8.02608L4.3044 8.04266C3.93304 8.14217 3.61912 7.96093 3.51962 7.58957C3.42011 7.21821 3.60135 6.90429 3.97271 6.80479L4.03461 6.7882L4.01802 6.72631C3.91851 6.35495 4.09975 6.04103 4.47111 5.94153C4.84248 5.84202 5.15639 6.02326 5.25589 6.39462L5.27248 6.45652L5.33437 6.43993C5.70573 6.34042 6.01965 6.52166 6.11915 6.89302C6.21866 7.26439 6.03742 7.5783 5.66606 7.6778L5.60416 7.69439ZM7.6757 10.7215C7.24244 10.8376 6.77158 10.5658 6.65549 10.1325C6.6389 10.0706 6.62232 10.0087 6.58915 9.88495L6.61787 9.74458C6.65874 9.40194 6.91845 9.13334 7.22792 9.05041C7.53739 8.96749 7.89661 9.07025 8.10332 9.34655C8.19838 9.45375 8.23155 9.57754 8.26472 9.70133C8.38081 10.1346 8.10895 10.6055 7.6757 10.7215ZM10.5557 6.36764L9.31778 6.69933C8.94642 6.79883 8.63251 6.6176 8.533 6.24623C8.4335 5.87487 8.61474 5.56096 8.9861 5.46145L10.224 5.12977C10.5953 5.03026 10.9092 5.2115 11.0087 5.58286C11.1083 5.95422 10.927 6.26813 10.5557 6.36764ZM13.9889 9.02994C13.5556 9.14603 13.0847 8.87417 12.9686 8.44092C12.9355 8.31713 12.9023 8.19334 12.931 8.05297C12.9719 7.71033 13.2316 7.44173 13.5411 7.35881C13.603 7.34223 13.7268 7.30906 13.8052 7.35437L13.8671 7.33778C13.929 7.3212 14.0075 7.36651 14.0075 7.36651L14.086 7.41182C14.1479 7.39523 14.1645 7.45713 14.2263 7.44054L14.3048 7.48585C14.3214 7.54774 14.3833 7.53116 14.3999 7.59305C14.3999 7.59305 14.3999 7.59305 14.4165 7.65495L14.5281 7.82404C14.5447 7.88594 14.5447 7.88594 14.5613 7.94783C14.7559 8.4264 14.4221 8.91385 13.9889 9.02994ZM15.569 5.02431L15.5071 5.04089L15.5237 5.10279C15.6232 5.47415 15.442 5.78806 15.0706 5.88757C14.6993 5.98707 14.3854 5.80583 14.2859 5.43447L14.2693 5.37258L14.2074 5.38916C13.836 5.48867 13.5221 5.30743 13.4226 4.93607C13.3231 4.56471 13.5043 4.2508 13.8757 4.15129L13.9376 4.13471L13.921 4.07281C13.8215 3.70145 14.0027 3.38754 14.3741 3.28803C14.7455 3.18853 15.0594 3.36976 15.1589 3.74112L15.1755 3.80302L15.2374 3.78643C15.6087 3.68693 15.9226 3.86817 16.0221 4.23953C16.1216 4.61089 15.8785 4.94139 15.569 5.02431Z`,
      fill: `black`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    width: `20`,
    height: `20`,
    viewBox: `6 6 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    className: _(_.className),
    children: (0, _.jsx)(`path`, {
      _: `M16.9511 6.69098L16 3.76393L15.0489 6.69098L13.0283 12.9098H6.48944H3.41175L5.90165 14.7188L11.1917 18.5623L9.17109 24.7812L8.22003 27.7082L10.7099 25.8992L16 22.0557L21.2901 25.8992L23.78 27.7082L22.8289 24.7812L20.8083 18.5623L26.0984 14.7188L28.5882 12.9098H25.5106H18.9717L16.9511 6.69098Z`,
      fill: `white`,
      stroke: `#141E2B`,
      strokeWidth: `2`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    width: `24`,
    height: `24`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        _: `M24 3.53537C24 4.4769 23.6308 5.36305 22.9662 6.02766L20.6124 8.39073L19.3108 9.69226L20.0401 10.4215C20.4001 10.7815 20.4001 11.3722 20.0401 11.7322C19.8555 11.9076 19.6247 11.9999 19.3847 11.9999C19.1447 11.9999 18.9139 11.9076 18.7293 11.7322L12.2678 5.27074C11.9078 4.91074 11.9078 4.31998 12.2678 3.95998C12.6278 3.59998 13.2186 3.59998 13.5786 3.95998L14.3078 4.68921L17.9632 1.03384C18.637 0.369229 19.5231 0 20.4646 0C22.4122 0 23.9998 1.58768 23.9998 3.53524L24 3.53537Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M3.68306 15.323C3.20306 15.803 2.77845 16.3384 2.43691 16.9199L0.341537 20.4091C0.119999 20.7784 0 21.203 0 21.6276C0 22.9384 1.06153 23.9999 2.3723 23.9999C2.79691 23.9999 3.22152 23.8799 3.59075 23.6584L7.07996 21.563C7.6615 21.2122 8.20611 20.7968 8.67688 20.3168L16.6985 12.3046L11.6954 7.30151L3.68306 15.323Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
var _ = _({
    Active: () => _,
    DisabledItem: () => _,
    Hidden: () => _,
    HidePageListButton: () => _,
    NewNoteButton: () => _,
    NoPadding: () => _,
    PageListItem_Icon: () => _,
    PageListItem_Title: () => _,
    PageListSeparator: () => _,
    PageListSpacer: () => _,
    PagedSettingDialog_ContentColumn: () => _,
    PagedSettingsDialog: () => _,
    PagedSettingsDialog_PageContent: () => _,
    PagedSettingsDialog_PageList: () => _,
    PagedSettingsDialog_PageListColumn: () => _,
    PagedSettingsDialog_PageListItem: () => _,
    PagedSettingsDialog_PageList_DisableScrolling: () => _,
    PagedSettingsDialog_Title: () => _,
    ResponsiveActivePage: () => _,
    ResponsivePageList: () => _,
    ReturnToPageListButton: () => _,
    Transparent: () => _,
    default: () => _,
    "duration-app-launch": () => _,
    narrowWidth: () => _,
  }),
  _ = `500px`,
  _ = `800ms`,
  _ = `mORFK1ZCuIg-`,
  _ = `DzZHob0k3yg-`,
  _ = `OrbQbwXDhqM-`,
  _ = `ZZvAdjiSYLs-`,
  _ = `_8VNLBL23-Uw-`,
  _ = `rLxoT9L8pa8-`,
  _ = `_3Ox-NUTg9h4-`,
  _ = `Igl8J1Vx0OY-`,
  _ = `wpFUO2kDCcs-`,
  _ = `HDo1-kQMln0-`,
  _ = `dJXaNmBy-Ag-`,
  _ = `ULhVm5K-zhc-`,
  _ = `rB0bL-tvRQQ-`,
  _ = `JQcvLkhr-Qg-`,
  _ = `E3HjqSjUVtk-`,
  _ = `UKhzwGNpZmo-`,
  _ = `mSrabfQ3MsQ-`,
  _ = `_--hdAKe1xrA-`,
  _ = `hMFxgFd052k-`,
  _ = `HbztwWG73kA-`,
  _ = `_7WOoBmFX-uw-`,
  _ = `zt0l3PnZsMI-`,
  _ = {
    narrowWidth: _,
    "duration-app-launch": `800ms`,
    PagedSettingsDialog: _,
    PagedSettingDialog_ContentColumn: _,
    PagedSettingsDialog_PageListColumn: _,
    ResponsivePageList: _,
    ResponsiveActivePage: _,
    PagedSettingsDialog_PageContent: _,
    NoPadding: _,
    Hidden: _,
    NewNoteButton: _,
    PagedSettingsDialog_Title: _,
    PagedSettingsDialog_PageList: _,
    PagedSettingsDialog_PageList_DisableScrolling: _,
    PagedSettingsDialog_PageListItem: _,
    PageListItem_Icon: _,
    PageListItem_Title: _,
    DisabledItem: _,
    Active: _,
    PageListSpacer: _,
    PageListSeparator: _,
    Transparent: _,
    HidePageListButton: _,
    ReturnToPageListButton: _,
  },
  _ = class {
    constructor() {
      _(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
(_([_], _.prototype, `m_flPageListScrollTop`, void 0),
  _([_], _.prototype, `m_flPageScrollTop`, void 0));
var _ = class _ {
  static s_Instance;
  static Get() {
    return ((_.s_Instance ||= new _()), _.s_Instance);
  }
  constructor() {
    _(this);
  }
  m_setPagedSettingsInstances = new Set();
};
_([_], _.prototype, `m_setPagedSettingsInstances`, void 0);
function _(_) {
  let {
      stylesheet: _,
      pages: _,
      iActivePage: _,
      onPageSelected: _,
      PageListItemComponent: _ = _,
      PageListSeparatorComponent: _ = _,
    } = _,
    _ = _.useContext(_);
  return _.filter((_, _) => {
    if (_ === `separator` || _ === `spacer`) {
      for (let _ = _ + 1; _ < _.length; _++) {
        let _ = _[_];
        if (_ !== `separator` && _ !== `spacer` && _.visible) return !0;
      }
      return !1;
    }
    return !0;
  }).map((_, _) => {
    let _ = _ === _;
    if (_ === `separator`) {
      let _ = _ === _ + 1 || _ === _ - 1;
      return (0, _.jsx)(
        _,
        {
          role: `separator`,
          bTransparent: _,
        },
        _,
      );
    }
    if (_ === `spacer`)
      return (0, _.jsx)(
        `div`,
        {
          className: _,
        },
        _,
      );
    {
      if (_.visible === !1) return null;
      let _ = _.identifier || _.title || _.toString(),
        _ = () => _(_, _);
      return (0, _.jsx)(
        _,
        {
          className: _(_.PagedSettingsDialog_PageListItem, {
            [_.Active]: _,
          }),
          onClick: _,
          title: _.title,
          icon: _.icon,
          active: _,
          _: _ + _.identifier,
          role: `tab`,
          "aria-selected": _,
          "aria-controls": _ + _.identifier + `_Content`,
        },
        _,
      );
    }
  });
}
function _(_) {
  let { title: _, icon: _, active: _, className: _, onClick: _, ..._ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    onClick: _,
    ..._,
    children: [
      _
        ? (0, _.jsx)(`div`, {
            className: _,
            children: _,
          })
        : null,
      (0, _.jsx)(`div`, {
        className: _,
        ..._,
        children: _,
      }),
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
  let { activePage: _, style: _, stylesheet: _ } = _,
    _ = _.useContext(_),
    _ = _?.padding ?? `standard`;
  return (0, _.jsxs)(_, {
    style: _,
    className: _(
      _?.PagedSettingsDialog_PageContent,
      _?.pageClassName,
      _ == `none` && _?.NoPadding,
    ),
    refElem: _,
    role: `tabpanel`,
    "aria-labelledby": _ + _?.identifier,
    _: _ + _?.identifier + `_Content`,
    children: [
      _?.header,
      !_?.hideTitle &&
        (0, _.jsx)(_, {
          children: _?.title,
        }),
      (0, _.jsx)(_, {
        children: _?.content,
      }),
    ],
  });
});
function _(_) {
  let { bTransparent: _, className: _, ..._ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _, {
      [_]: _,
    }),
    ..._,
  });
}
var _ = _.createContext(void 0);
_.forwardRef(function (_, _) {
  let { stylesheet: _ = _, pages: _, onPageRequested: _, eInitialFocus: _ } = _,
    _ = _.useId(),
    _ = _.page == null,
    [_, _] = _.useState(() =>
      _.startingPage === void 0
        ? -1
        : _.findIndex(
            (_) => typeof _ == `object` && _.identifier === _.startingPage,
          ),
    ),
    _ = _;
  (_ ||
    (_ = _.findIndex((_) => typeof _ == `object` && _.identifier === _.page)),
    (_ < 0 || _ >= _.length) && (_ = 0));
  let _ = null;
  typeof _[_] == `object` && (_ = _[_]);
  let _ = _.useRef(null),
    _ = _.useCallback(() => _.current?.TakeFocus() || !1, [_]),
    [_, _] = _.useState(!1),
    _ = _ ? _ : void 0,
    _ = _.useCallback((_) => {
      _ && _(!0);
    }, []),
    _ = _.useCallback(
      (_, _) => {
        (_(!0),
          _.PlayNavSound(_.PagedNavigation),
          _ && _(_.identifier),
          _.click ? _.click() : _ && _(_));
      },
      [_, _],
    ),
    _ = _.useRef(null),
    _ = (_) => {
      _.detail.button == _._ && _.current?.TakeFocus(_.detail.button);
    },
    _ = _.showTitle ?? !0,
    _ = _(`DialogContentTransition`, _.PagedSettingDialog_ContentColumn);
  _.useEffect(() => {
    _ === 2 && _.current?.TakeFocus();
  }, []);
  let { refForPageList: _, refForPage: _ } = _();
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsxs)(_, {
      className: _(_.PagedSettingsDialog, _.className),
      ref: _,
      children: [
        (0, _.jsxs)(_, {
          className: _(
            _.PagedSettingsDialog_PageListColumn,
            _.hideList && `Igl8J1Vx0OY-`,
            `PageListColumn`,
          ),
          navRef: _,
          onButtonDown: _,
          onFocusWithin: _,
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: _.PagedSettingsDialog_Title,
                children: _.title,
              }),
            _.topControls &&
              (0, _.jsx)(`div`, {
                children: _.topControls,
              }),
            (0, _.jsx)(_, {
              className: _(
                _.PagedSettingsDialog_PageList,
                _.disablePageListScrolling &&
                  _.PagedSettingsDialog_PageList_DisableScrolling,
                _ && _.PagedSettingsDialog_PageList_ShowTitle,
                _.bNoHeaderPadding &&
                  _.PageSettingsDialog_PageList_NoHeaderPadding,
              ),
              role: `tablist`,
              "aria-orientation": `vertical`,
              navEntryPreferPosition: _.PREFERRED_CHILD,
              ref: _,
              children: (0, _.jsx)(_, {
                stylesheet: _,
                pages: _,
                iActivePage: _,
                onPageSelected: _,
                PageListItemComponent: _.PageListItemComponent,
                PageListSeparatorComponent: _.PageListSeparatorComponent,
              }),
            }),
            _.bottomControls &&
              (0, _.jsx)(`div`, {
                children: _.bottomControls,
              }),
          ],
        }),
        (0, _.jsxs)(_, {
          className: _,
          onCancelButton: _,
          navRef: _,
          children: [
            _.toggleHideList &&
              (0, _.jsx)(_, {
                hideList: _.hideList,
                toggleHideList: _.toggleHideList,
              }),
            _.renderPageContent
              ? _.renderPageContent(_, _, _)
              : (0, _.jsx)(_, {
                  ref: _,
                  activePage: _,
                  stylesheet: _,
                }),
          ],
        }),
      ],
    }),
  });
});
var _ = _.createContext(!1);
_.memo(function (_) {
  let {
      isActive: _,
      refForPage: _,
      page: _,
      PageComponent: _,
      stylesheet: _,
    } = _,
    _ = _.useContext(_),
    _ = _.useRef(!1);
  if (!_ && !_.current) return null;
  _.current = !0;
  let _ = _
    ? void 0
    : {
        display: `none`,
      };
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      ref: _,
      style: _,
      activePage: _,
      stylesheet: _,
      role: `tabpanel`,
      "aria-labelledby": _ + _.identifier,
      _: _ + _.identifier + `_Content`,
    }),
  });
});
function _(_) {
  let { hideList: _, toggleHideList: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _ && void 0),
    onClick: _,
    children: _
      ? (0, _.jsx)(_, {
          direction: `right`,
        })
      : (0, _.jsx)(_, {
          direction: `left`,
        }),
  });
}
function _() {
  let _ = _.useMemo(() => new _(), []);
  _.useEffect(
    () => (
      _.Get().m_setPagedSettingsInstances.add(_),
      () => {
        _.Get().m_setPagedSettingsInstances.delete(_);
      }
    ),
    [_],
  );
  let _ = _.useCallback(
      (_) => (_.m_flPageListScrollTop = _.currentTarget.scrollTop),
      [_],
    ),
    _ = _.useCallback(
      (_) => (_.m_flPageScrollTop = _.currentTarget.scrollTop),
      [_],
    ),
    _ = _(`scroll`, _),
    _ = _(`scroll`, _),
    _ = _.useCallback(
      (_) => {
        _.m_flPageListScrollTop = _?.scrollTop ?? 0;
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        _.m_flPageScrollTop = _?.scrollTop ?? 0;
      },
      [_],
    );
  return {
    refForPageList: _(_, _),
    refForPage: _(_, _),
  };
}
var _ = class extends _.Component {
  m_refTextArea = _.createRef();
  m_nTextAreaPadding;
  m_cEntryLength = Number.MAX_VALUE;
  get textarea() {
    return this.m_refTextArea.current;
  }
  get value() {
    return this.m_refTextArea.current?.value;
  }
  focus() {
    this.m_refTextArea.current?.focus();
  }
  InternalOnInput() {
    let _ = this.m_refTextArea.current,
      _ = this.GetMinHeight(),
      _ = this.GetMaxHeight(),
      _,
      _ = _.value.length;
    if (
      (this.m_nTextAreaPadding === void 0 && this.CalculatePadding(),
      _ < this.m_cEntryLength &&
        ((_ = window.scrollY), (_.style.height = _ + `px`)),
      _.scrollHeight > _)
    )
      ((_.style.height = _ + `px`), (_.style.overflow = `auto`));
    else if (_.scrollHeight != _.clientHeight) {
      let _ = Math.max(_.scrollHeight, _);
      ((_.style.height = _ - this.m_nTextAreaPadding + `px`),
        _.style.overflow == `auto` && (_.style.overflow = `hidden`));
    }
    (_ !== void 0 && window.scrollTo(window.scrollX, _),
      (this.m_cEntryLength = _));
  }
  CalculatePadding() {
    let _ = getComputedStyle(this.m_refTextArea.current);
    this.m_nTextAreaPadding =
      _.boxSizing == `border-box`
        ? 0
        : parseFloat(_.paddingTop) + parseFloat(_.paddingBottom);
  }
  GetMinHeight() {
    return this.props.nMinHeight || 20;
  }
  GetMaxHeight() {
    return this.props.nMaxHeight || 500;
  }
  DeferredInternalOnInput() {
    window.setTimeout(this.InternalOnInput, 1);
  }
  OnKeyUp(_) {
    (this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(_));
  }
  OnBlur(_) {
    (this.DeferredInternalOnInput(), this.props.onBlur && this.props.onBlur(_));
  }
  OnClick(_) {
    (this.InternalOnInput(), this.props.onClick && this.props.onClick(_));
  }
  OnPaste(_) {
    (this.DeferredInternalOnInput(),
      this.props.onPaste && this.props.onPaste(_));
  }
  OnCut(_) {
    (this.InternalOnInput(), this.props.onCut && this.props.onCut(_));
  }
  componentDidMount() {
    ((this.m_refTextArea.current.style.overflow = `hidden`),
      (this.m_refTextArea.current.style.resize = `none`),
      this.InternalOnInput());
  }
  componentDidUpdate(_) {
    ((_.nMinHeight != this.props.nMinHeight ||
      _.nMaxHeight != this.props.nMaxHeight) &&
      (this.m_cEntryLength = Number.MAX_VALUE),
      this.m_refTextArea.current?.value.length != this.m_cEntryLength &&
        this.InternalOnInput());
  }
  render() {
    let { nMinHeight: _, nMaxHeight: _, ..._ } = this.props;
    return (0, _.jsx)(_, {
      ..._,
      ref: this.m_refTextArea,
      onKeyUp: this.OnKeyUp,
      onBlur: this.OnBlur,
      onClick: this.OnClick,
      onPaste: this.OnPaste,
      onCut: this.OnCut,
    });
  }
};
(_([_], _.prototype, `InternalOnInput`, null),
  _([_], _.prototype, `OnKeyUp`, null),
  _([_], _.prototype, `OnBlur`, null),
  _([_], _.prototype, `OnClick`, null),
  _([_], _.prototype, `OnPaste`, null),
  _([_], _.prototype, `OnCut`, null));
var _ = `lEqqqt0n--k-`,
  _ = `LfGMZCNzH20-`,
  _ = `kwxrGJQL5-4-`,
  _ = `tZJ0p3KkoMw-`,
  _ = `d9idqOcUtlU-`,
  _ = `BS96L19566Q-`,
  _ = `KCUAMncpiAg-`,
  _ = `_7IQ7dO6JJsQ-`,
  _ = `_4UYxIKgcQq4-`,
  _ = `S9g96mcfmi4-`,
  _ = `_3voolpCtr6w-`,
  _ = `afIqIzaVohw-`,
  _ = `mF7P-GaWW84-`,
  _ = `kYWJ-fTvdPQ-`,
  _ = `MGJwtg4H5Gw-`,
  _ = `O6SsL9fKklo-`,
  _ = (0, _.createContext)({
    ownerWindow: window,
  }),
  _ = () => (0, _.useContext)(_);
function _(_) {
  let { ownerWindow: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        ownerWindow: _,
      }),
      [_],
    );
  return (0, _.createElement)(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
var _ = {
    m_unPID: 0,
    m_nBrowserID: -1,
  },
  _ = [],
  _ = 1e3,
  _ = class {
    m_fnRender;
    m_rgLoadingLinks = [];
    m_doc;
    constructor(_, _, _) {
      if (((this.m_doc = _), (this.m_rgLoadingLinks = []), _))
        for (let _ = 0; _ < _.length; _++) this.AddLink(_[_], !0);
      else if (_) {
        let _ = _.getElementsByTagName(`link`);
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          this.AddLink(_, !1);
        }
      }
    }
    AddLink(_, _) {
      if (_) {
        let _ = !1;
        try {
          (_.sheet && _.sheet.cssRules && _.sheet.cssRules.length != 0) ||
            (_ = !0);
        } catch {}
        _ &&
          (_.addEventListener(`load`, this.OnLinkLoad),
          this.m_rgLoadingLinks.push(_));
      } else
        (_.addEventListener(`load`, this.OnLinkLoad),
          this.m_rgLoadingLinks.push(_));
    }
    SetTarget(_) {
      ((this.m_fnRender = _),
        this.m_rgLoadingLinks.length == 0 && this.RenderWhenFontsReady());
    }
    RenderWhenFontsReady() {
      let _ = this.m_doc?.fonts,
        _ = _ ? _.filter((_) => !_.check(_)) : [];
      if (_.length == 0) {
        this.Render();
        return;
      }
      let _ = window.setTimeout(this.Render, _);
      Promise.all(_.map((_) => _.load(_)))
        .catch((_) =>
          console.warn(`CRenderWhenLinksReady: font load failed`, _),
        )
        .then(() => {
          (window.clearTimeout(_), this.Render());
        });
    }
    Render() {
      (this.m_fnRender?.(), (this.m_fnRender = void 0));
    }
    OnLinkLoad(_) {
      (_.currentTarget.removeEventListener(`load`, this.OnLinkLoad),
        _(this.m_rgLoadingLinks, _.currentTarget),
        this.m_rgLoadingLinks.length == 0 && this.RenderWhenFontsReady());
    }
  };
(_([_], _.prototype, `Render`, null), _([_], _.prototype, `OnLinkLoad`, null));
var _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Minimized = 1)] = `Minimized`),
      (_[(_.Hidden = 2)] = `Hidden`),
      (_[(_.TooltipHint = 4)] = `TooltipHint`),
      (_[(_.NoTaskbarIcon = 8)] = `NoTaskbarIcon`),
      (_[(_.Resizable = 16)] = `Resizable`),
      (_[(_.NoScalePosition = 32)] = `NoScalePosition`),
      (_[(_.NoScaleSize = 64)] = `NoScaleSize`),
      (_[(_.Maximized = 128)] = `Maximized`),
      (_[(_.Composited = 256)] = `Composited`),
      (_[(_.NotFocusable = 512)] = `NotFocusable`),
      (_[(_.FullScreen = 1024)] = `FullScreen`),
      (_[(_.Fullscreen_Exclusive = 2048)] = `Fullscreen_Exclusive`),
      (_[(_.ApplyBrowserScaleToDimensions = 4096)] =
        `ApplyBrowserScaleToDimensions`),
      (_[(_.AlwaysOnTop = 8192)] = `AlwaysOnTop`),
      (_[(_.NoWindowShadow = 16384)] = `NoWindowShadow`),
      (_[(_.NoMinimize = 32768)] = `NoMinimize`),
      (_[(_.PopUpMenuHint = 65536)] = `PopUpMenuHint`),
      (_[(_.IgnoreSavedSize = 131072)] = `IgnoreSavedSize`),
      (_[(_.NoRoundedCorners = 262144)] = `NoRoundedCorners`),
      (_[(_.ForceRoundedCorners = 524288)] = `ForceRoundedCorners`),
      (_[(_.OverrideRedirect = 1048576)] = `OverrideRedirect`),
      (_[(_.IgnoreSteamDisplayScale = 2097152)] = `IgnoreSteamDisplayScale`),
      (_[(_.TransparentParentWindow = 4194304)] = `TransparentParentWindow`),
      (_[(_.DisableDPIScale = 8388608)] = `DisableDPIScale`),
      (_[(_.ForceBrowserVisible = 16777216)] = `ForceBrowserVisible`),
      (_[(_.NoWindowTransitions = 33554432)] = `NoWindowTransitions`),
      (_[(_.StartBelowSplash = 67108864)] = `StartBelowSplash`),
      (_[(_.SharedTexture = 134217728)] = `SharedTexture`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.Overlay = 0)] = `Overlay`),
      (_[(_.Notification = 1)] = `Notification`),
      (_[(_.Tooltip = 2)] = `Tooltip`),
      (_[(_.PopupContextMenu = 3)] = `PopupContextMenu`),
      (_[(_.StandaloneContextMenu = 4)] = `StandaloneContextMenu`),
      _
    );
  })({});
function _() {
  return _() ? 256 : 0;
}
function _(_) {
  let _ = 0;
  switch (_) {
    case 0:
      return ((_ |= 8192), (_ |= 8), (_ |= 512), (_ |= 4194304), _);
    case 1:
      return (
        (_ |= _(0)),
        (_ |= 16384),
        (_ |= 262144),
        (_ |= 1048576),
        (_ |= 16777216),
        _
      );
    case 2:
      return (
        (_ |= _(0)), (_ |= 262144), (_ |= 16384), (_ |= 4), (_ |= _()), _
      );
    case 3:
      return (
        (_ |= 8),
        (_ |= 262144),
        (_ |= 16384),
        (_ |= 65536),
        (_ |= 4194304),
        (_ |= _()),
        _
      );
    case 4:
      return (
        (_ = 8),
        (_ |= 262144),
        (_ |= 16384),
        (_ |= 1048576),
        (_ |= 4194304),
        (_ |= _()),
        _
      );
  }
}
function _() {
  let { ownerWindow: _ } = _();
  return _.GetPopupForWindow(_)?.browser_info || _;
}
var _ = class {
  m_strName;
  m_strTitle;
  m_rgParams;
  m_popup;
  m_element;
  m_renderWhenReady;
  m_bCreateHidden;
  m_bCreated = !1;
  m_onCreateRender = null;
  m_bFocused = !1;
  constructor(_, _) {
    (_(this),
      _(
        _,
        `Name is required.  This is an internal name, different from title.`,
      ),
      (this.m_strName = _));
    let { title: _, eCreationFlags: _, ..._ } = _;
    ((this.m_rgParams = {
      ..._,
      eCreationFlags: _ ?? 0,
    }),
      this.m_rgParams.target_browser &&
        (this.m_strName += `_uid` + this.m_rgParams.target_browser.m_unPID),
      (this.m_bCreateHidden = !!(this.m_rgParams.eCreationFlags & 2)),
      (this.m_strTitle = _));
  }
  UpdateParamsBeforeShow(_) {
    return _;
  }
  OnDrop(_) {
    (console.log(`Ignoring drop onto toplevel window`, _),
      _.preventDefault(),
      _.stopPropagation());
  }
  OnDragOver(_) {
    (_.preventDefault(),
      (_.dataTransfer.dropEffect = `none`),
      _.stopPropagation());
  }
  OnMessage(_) {
    (_.data === `window_moved` && this.OnMove(),
      _.data === `window_resized` && this.OnResize(),
      _.data === `popup-created` && this.OnCreateInternal());
  }
  Show(_ = _.k_EWindowBringToFrontAndForceOS) {
    let _;
    ((_ =
      typeof _ == `boolean`
        ? _
          ? _.k_EWindowBringToFrontAndForceOS
          : _.k_EWindowBringToFrontInvalid
        : _),
      window.SteamClient && (this.m_rgParams.eCreationFlags |= 2),
      this.m_rgParams.eCreationFlags & 512 &&
        (_ = _.k_EWindowBringToFrontInvalid),
      this.BIsValid() &&
        (this.BIsClosed()
          ? ((this.m_popup = void 0), (this.m_element = void 0))
          : _ != _.k_EWindowBringToFrontInvalid && this.Focus(_)));
    let _ = _.GetExistingPopup(this.m_strName);
    if (_ && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let _, _, _;
    (_
      ? ((_ = _.m_element),
        (_ = _.m_popup),
        (_ = _.m_renderWhenReady),
        _.RemoveTrackedPopup(_),
        _.ReleasePopup(),
        _?.removeEventListener(`beforeunload`, _.OnBeforeUnloadEvent),
        _?.removeEventListener(`unload`, _.OnUnload),
        _?.removeEventListener(`resize`, _.OnResizeEvent),
        _?.removeEventListener(`focus`, this.OnFocusInternal),
        _?.removeEventListener(`blur`, this.OnBlurInternal),
        _?.removeEventListener(`drop`, _.OnDrop),
        _?.removeEventListener(`dragover`, _.OnDragOver),
        _?.removeEventListener(`message`, this.OnMessage))
      : (({ popup: _, element: _ } = _.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (_ = new _(_?.document, _))),
      _ &&
        _ &&
        ((_.document.title = this.m_strTitle),
        _.addEventListener(`beforeunload`, this.OnBeforeUnloadEvent),
        _.addEventListener(`unload`, this.OnUnload),
        _.addEventListener(`resize`, this.OnResizeEvent),
        _.addEventListener(`focus`, this.OnFocusInternal),
        _.addEventListener(`blur`, this.OnBlurInternal),
        _.addEventListener(`drop`, this.OnDrop),
        _.addEventListener(`dragover`, this.OnDragOver),
        _.addEventListener(`message`, this.OnMessage),
        _.LANGUAGE &&
          (_.document.documentElement.setAttribute(`lang`, _() ?? ``),
          _(_.LANGUAGE) &&
            _.document.documentElement.setAttribute(`dir`, `rtl`)),
        (this.m_popup = _),
        (this.m_element = _),
        (this.m_renderWhenReady = _),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, _);
        })),
      _.AddTrackedPopup(this),
      _ &&
        (this.OnCreateInternal(),
        _ != _.k_EWindowBringToFrontInvalid && this.Focus(_)));
  }
  RemoveEventListeners() {
    (this.window?.removeEventListener(`beforeunload`, this.OnBeforeUnloadEvent),
      this.window?.removeEventListener(`unload`, this.OnUnload),
      this.window?.removeEventListener(`resize`, this.OnResizeEvent),
      this.window?.removeEventListener(`focus`, this.OnFocusInternal),
      this.window?.removeEventListener(`blur`, this.OnBlurInternal),
      this.window?.removeEventListener(`drop`, this.OnDrop),
      this.window?.removeEventListener(`dragover`, this.OnDragOver),
      this.window?.removeEventListener(`message`, this.OnMessage));
  }
  RenderInternal(_, _, _) {
    this.m_bCreated
      ? (this.browser_info &&
          _(this.browser_info.m_eBrowserType) &&
          (_.ownerDocument.body.className += ` VR`),
        this.Render(_, _),
        this.OnLoad(),
        _?.SteamClient &&
          !this.m_bCreateHidden &&
          (_ == _.k_EWindowBringToFrontInvalid
            ? _.SteamClient.Window.ShowWindow()
            : _.SteamClient.Window.BringToFront(_)))
      : (this.m_onCreateRender = () => this.RenderInternal(_, _, _));
  }
  OnCreateInternal() {
    this.m_bCreated ||
      ((this.m_bCreated = !0),
      this.OnCreate(),
      (this.m_onCreateRender &&= (this.m_onCreateRender(), null)));
  }
  OnCreate() {}
  OnResizeEvent() {
    this.OnResize();
  }
  OnBeforeUnloadEvent() {
    this.OnBeforeUnload();
  }
  OnUnload(_) {
    (this.RemoveEventListeners(),
      _.RemoveTrackedPopup(this),
      this.OnClose(),
      (this.m_popup = void 0));
  }
  get browser_info() {
    return this.m_rgParams.target_browser;
  }
  get window() {
    return this.m_popup;
  }
  get root_element() {
    return this.m_element;
  }
  get title() {
    return this.m_strTitle;
  }
  set title(_) {
    ((this.m_strTitle = _),
      this.m_popup && (this.m_popup.document.title = this.m_strTitle));
  }
  get params() {
    return this.m_rgParams;
  }
  Focus(_ = _.k_EWindowBringToFrontAndForceOS) {
    this.m_popup &&
      _ != _.k_EWindowBringToFrontInvalid &&
      (_(this.m_popup, `Window.BringToFront`)
        ? this.m_popup.SteamClient.Window.BringToFront(_)
        : this.m_popup.focus());
  }
  Close() {
    this.m_popup &&
      (_(this.m_popup, `Window.Close`)
        ? this.m_popup.SteamClient.Window.Close()
        : this.m_popup.close());
  }
  GetName() {
    return this.m_strName;
  }
  BIsValid() {
    return !!this.m_popup;
  }
  BIsClosed() {
    return !this.m_popup || this.m_popup.closed;
  }
  BIsVisible() {
    return !(
      !this.m_popup ||
      this.m_popup.closed ||
      this.m_popup.document.visibilityState != `visible`
    );
  }
  BIsFocused() {
    return this.BIsVisible() && !!this.m_popup?.document.hasFocus();
  }
  OnFocusInternal() {
    (this.m_popup && this.m_popup.document.body.classList.add(`WindowFocus`),
      (this.m_bFocused = !0),
      this.OnFocus());
  }
  OnBlurInternal() {
    (this.m_popup && this.m_popup.document.body.classList.remove(`WindowFocus`),
      (this.m_bFocused = !1),
      this.OnBlur());
  }
  get focused() {
    return this.m_bFocused;
  }
  GetWindowRestoreDetails() {
    return _(this.m_popup, `Window.GetWindowRestoreDetails`) &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve(``);
  }
  IsMinimized() {
    return _(this.m_popup, `Window.IsWindowMinimized`) && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return _(this.m_popup, `Window.IsWindowMaximized`) && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMaximized()
      : Promise.resolve(!1);
  }
  ReleasePopup() {
    (this.OnClose(), (this.m_popup = null));
  }
  OnMove() {}
  OnResize() {
    this.IsMaximized().then((_) => {
      _
        ? this.m_popup?.document.body.classList.add(`Maximized`)
        : this.m_popup?.document.body.classList.remove(`Maximized`);
    });
  }
  OnBeforeUnload() {}
  OnFocus() {}
  OnBlur() {}
  m_rgChildBrowserViews = [];
  get childBrowserViews() {
    return this.m_rgChildBrowserViews;
  }
  RegisterChildBrowserView(_) {
    return (
      this.m_rgChildBrowserViews.push(_),
      {
        Unregister: () =>
          (this.m_rgChildBrowserViews = this.m_rgChildBrowserViews.filter(
            (_) => _ != _,
          )),
      }
    );
  }
};
(_([_], _.prototype, `m_bFocused`, void 0),
  _([_], _.prototype, `OnMessage`, null),
  _([_], _.prototype, `RenderInternal`, null),
  _([_], _.prototype, `OnCreateInternal`, null),
  _([_], _.prototype, `OnResizeEvent`, null),
  _([_], _.prototype, `OnBeforeUnloadEvent`, null),
  _([_], _.prototype, `OnUnload`, null),
  _([_], _.prototype, `OnFocusInternal`, null),
  _([_], _.prototype, `OnBlurInternal`, null),
  _(
    [_],
    class extends _ {
      m_strSavedDimensionsKey;
      m_strInitialSavedDimensionsKey;
      m_strInitialRestoreDetails;
      m_bExpires;
      constructor(_, _, _, _) {
        (super(_, _), this.SetSavedDimensionsKey(_), (this.m_bExpires = _));
      }
      BIsInOverlay() {
        return (
          this.browser_info &&
          this.browser_info.m_unPID != 0 &&
          this.browser_info.m_nBrowserID != -1
        );
      }
      SetSavedDimensionsKey(_) {
        this.m_strSavedDimensionsKey = _;
      }
      UpdateParamsBeforeShow(_) {
        return (
          this.m_strSavedDimensionsKey &&
          !_.bIgnoreSavedDimensions &&
          !_.strRestoreDetails
            ? ((this.m_strInitialSavedDimensionsKey =
                this.GetSavedDimensionsKey()),
              (_.strRestoreDetails = _.GetRestoreDetails(
                this.m_strInitialSavedDimensionsKey,
              )))
            : _.strRestoreDetails &&
              ((this.m_strInitialSavedDimensionsKey =
                this.GetSavedDimensionsKey()),
              _.SetRestoreDetails(
                this.m_strInitialSavedDimensionsKey,
                _.strRestoreDetails,
                this.m_bExpires,
              )),
          _
        );
      }
      OnLoad() {
        this.GetWindowRestoreDetails().then((_) => {
          ((this.m_strInitialRestoreDetails = _), this.OnResizeComplete(_));
        });
      }
      OnMove() {
        (super.OnMove(), this.QueryAndStoreWindowPosition());
      }
      OnResize() {
        (super.OnResize(), this.QueryAndStoreWindowPosition());
      }
      OnResizeComplete(_) {}
      QueryAndStoreWindowPosition() {
        if (this.m_strInitialRestoreDetails) {
          let _ = this.GetSavedDimensionsKey();
          this.m_popup?.setTimeout(() => {
            this.GetWindowRestoreDetails().then((_) => {
              let _ =
                this.m_rgParams.strRestoreDetails == _ &&
                _ == this.m_strInitialSavedDimensionsKey;
              this.m_popup &&
                this.m_strSavedDimensionsKey &&
                _ &&
                !_ &&
                (_.SetRestoreDetails(_, _, this.m_bExpires),
                (this.m_rgParams.strRestoreDetails = _),
                (this.m_strInitialSavedDimensionsKey = _),
                this.OnResizeComplete(_));
            });
          }, 30);
        }
      }
      OnBeforeUnload() {
        (this.QueryAndStoreWindowPosition(), super.OnBeforeUnload());
      }
      OnClose() {}
      SaveWindowPosition(_) {
        (_.SetRestoreDetails(this.GetSavedDimensionsKey(), _, !1),
          (this.m_rgParams.strRestoreDetails = _));
      }
    }.prototype,
    `QueryAndStoreWindowPosition`,
    null,
  ));
var _ = class {
  m_bShuttingDown = !1;
  m_mapPopups = _.map([], {
    deep: !1,
  });
  m_rgShutdownCallbacks = [];
  m_rgPopupCreatedCallbacks = new _();
  m_rgPopupDestroyedCallbacks = new _();
  m_unCurrentAccountID = 0;
  m_mapRestoreDetails = new Map();
  m_bSaveRequired = !1;
  m_DynamicCSSObserver;
  constructor() {
    if (`addEventListener` in window) {
      window.addEventListener(`beforeunload`, (_) => {
        this.m_bShuttingDown = !0;
        for (let _ of this.m_rgShutdownCallbacks) _();
        let _ = [];
        this.m_mapPopups.forEach((_) => {
          _.BIsValid() && !_.BIsClosed() && _.push(_);
        });
        for (let _ of _)
          (_(_.window, `Browser.SetShouldExitSteamOnBrowserClosed`) &&
            _.window.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(!1),
            _(_.window, `Window.SetHideOnClose`) &&
              _.window.SteamClient.Window.SetHideOnClose(!1),
            _.Close());
        (this.m_bSaveRequired && this.SaveSavedDimensionStore(),
          this.m_mapPopups.clear());
      });
      let _ = document.querySelector(`head`);
      (_(_, `Couldn't find head element`),
        _ &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let _ = _();
            this.m_mapPopups.forEach((_) => {
              _(_.window.document, _, !1);
            });
          })),
          this.m_DynamicCSSObserver.observe(_, {
            childList: !0,
          })));
    }
  }
  BAnyPopupHasFocus() {
    for (let _ of this.m_mapPopups.values()) if (_.focused) return !0;
    return !1;
  }
  BAnyMenuHasFocus() {
    for (let _ of this.m_mapPopups.values())
      if (_.focused && (_.params.eCreationFlags ?? 0) & 8) return !0;
    return !1;
  }
  SetCurrentLoggedInAccountID(_) {
    this.m_unCurrentAccountID != _ &&
      ((this.m_unCurrentAccountID = _),
      _ ? this.LoadSavedDimensionStore() : this.ClearSavedDimensionStore());
  }
  AddShutdownCallback(_) {
    this.m_rgShutdownCallbacks.push(_);
  }
  AddPopupCreatedCallback(_) {
    return this.m_rgPopupCreatedCallbacks.Register(_);
  }
  AddPopupDestroyedCallback(_) {
    return this.m_rgPopupDestroyedCallbacks.Register(_);
  }
  AddTrackedPopup(_) {
    (this.m_mapPopups.set(_.GetName(), _),
      _.BIsValid() && this.m_rgPopupCreatedCallbacks.Dispatch(_));
  }
  RemoveTrackedPopup(_) {
    (this.m_rgPopupDestroyedCallbacks.Dispatch(_),
      this.m_mapPopups.delete(_.GetName()));
  }
  GetExistingPopup(_) {
    return this.m_mapPopups.get(_);
  }
  GetPopups() {
    return this.m_mapPopups.values();
  }
  GetPopupForWindow(_) {
    for (let _ of this.m_mapPopups.values()) if (_.window === _) return _;
  }
  GetPopupForVROverlayKey(_) {
    if (_)
      return Array.from(this.m_mapPopups.values()).find(
        (_) => _.params.strVROverlayKey == _,
      );
  }
  ClosePopupsOwnedByBrowser(_) {
    this.m_mapPopups.forEach((_) => {
      _.browser_info &&
        _.browser_info.m_nBrowserID == _.m_nBrowserID &&
        _.browser_info.m_unPID == _.m_unPID &&
        _.Close();
    });
  }
  static CreatePopup(_, _) {
    let _ = _.dimensions || {},
      _ = _.width || 300,
      _ = _.height || 300,
      _ = _.title,
      _ = `width=` + _ + `,height=` + _;
    (_.left !== void 0 && (_ += `,left=` + _.left),
      _.top !== void 0 && (_ += `,top=` + _.top),
      (_ += `,resizeable,status=0,toolbar=0,menubar=0,location=0`));
    let _ = `about:blank`,
      _ = [];
    (_.push(`createflags=` + _.eCreationFlags),
      _.minWidth && _.push(`minwidth=` + _.minWidth),
      _.minHeight && _.push(`minheight=` + _.minHeight),
      _.maxWidth && _.maxWidth != 1 / 0 && _.push(`maxwidth=` + _.maxWidth),
      _.maxHeight && _.maxHeight != 1 / 0 && _.push(`maxheight=` + _.maxHeight),
      _.target_browser
        ? (_.push(`pid=` + _.target_browser.m_unPID),
          _.push(`browser=` + _.target_browser.m_nBrowserID),
          _.target_browser.m_eBrowserType
            ? _.push(`browserType=` + _.target_browser.m_eBrowserType)
            : _.browserType && _.push(`browserType=` + _.browserType),
          _.availscreenwidth &&
            _.availscreenheight &&
            (_.push(`screenavailwidth=` + _.availscreenwidth),
            _.push(`screenavailheight=` + _.availscreenheight)))
        : _.browserType && _.push(`browserType=` + _.browserType),
      _.strVROverlayKey && _.push(`vrOverlayKey=` + _.strVROverlayKey),
      _.strRestoreDetails && _.push(`restoredetails=` + _.strRestoreDetails),
      _.window_opener_id && _.push(`openerid=` + _.window_opener_id),
      _.parent_container_popup_id &&
        _.push(`parentcontainerpopupid=` + _.parent_container_popup_id),
      _.center_on_window &&
        _.left === void 0 &&
        _.top === void 0 &&
        _.push(
          `centerOnBrowserID=` +
            _.center_on_window.SteamClient.Browser.GetBrowserID(),
        ),
      _.strUserAgent && _.push(`useragent=` + _.strUserAgent),
      _.hwndParent && _.push(`hwndParent=` + _.hwndParent),
      _.bPinned && _.push(`pinned=true`),
      _.bModal && _.push(`modal=true`),
      _ && (_ += `?` + _.join(`&`)));
    let _ = (_.owner_window || window).open(_, _, _);
    if (!_)
      return (
        console.error(
          `Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
        ),
        {}
      );
    let _ = ``;
    _.html_class && (_ = `class="${_.html_class}"`);
    let _ = ``;
    _.body_class && (_ = `class="${_.body_class}"`);
    let _ = ``;
    _.body_role && (_ = `role="${_.body_role}"`);
    let _ = ``;
    _.popup_class && (_ = `class="${_.popup_class}"`);
    let _ = `<!DOCTYPE html><html ${_}><head><title></title></head><body ${_} ${_}><div id="popup_target" ${_}></div></body></html>`;
    return (
      _.document.write(_),
      (_.document.title = _),
      _.document.close(),
      _(_, _()),
      {
        popup: _,
        element: _.document.getElementById(`popup_target`),
      }
    );
  }
  BShuttingDown() {
    return this.m_bShuttingDown;
  }
  GetLocalStorageKey() {
    return `PopupSavedDimensions_` + this.m_unCurrentAccountID;
  }
  LoadSavedDimensionStore() {
    if (!this.m_unCurrentAccountID) return;
    let _ = this.GetLocalStorageKey();
    this.m_mapRestoreDetails.clear();
    let _ = window.localStorage.getItem(_);
    if (_)
      try {
        let _ = JSON.parse(_);
        this.m_mapRestoreDetails = new Map(_);
      } catch {}
  }
  SaveSavedDimensionStore() {
    if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
    let _ = this.GetLocalStorageKey(),
      _ = JSON.stringify(Array.from(this.m_mapRestoreDetails));
    try {
      (window.localStorage.setItem(_, _), (this.m_bSaveRequired = !1));
    } catch (_) {
      if (`name` in _ && _.name == `QuotaExceededError`) {
        console.log(`Quota exceeded`);
        for (let _ of Object.keys(window.localStorage))
          _.startsWith(`PopupSavedDimensions_`) &&
            _ != _ &&
            window.localStorage.removeItem(_);
        (window.localStorage.setItem(_, _), (this.m_bSaveRequired = !1));
      }
    }
  }
  DebouncedSaveSavedDimensionStore() {
    this.SaveSavedDimensionStore();
  }
  ClearSavedDimensionStore() {
    (this.m_mapRestoreDetails?.clear(), (this.m_bSaveRequired = !1));
  }
  GetRestoreDetails(_) {
    if (!this.m_mapRestoreDetails?.has(_)) return ``;
    let _ = this.m_mapRestoreDetails.get(_);
    return (
      (_.last_used = Date.now()),
      (this.m_bSaveRequired = !0),
      _.strRestoreDetails
    );
  }
  SetRestoreDetails(_, _, _) {
    if (_) {
      if (_) {
        if (this.m_mapRestoreDetails.size > 50) {
          let _ = null,
            _ = Date.now();
          for (let _ of Array.from(this.m_mapRestoreDetails.keys())) {
            let _ = this.m_mapRestoreDetails.get(_);
            _.last_used < _ && _.bExpires && ((_ = _.last_used), (_ = _));
          }
          _ && this.m_mapRestoreDetails.delete(_);
        }
        let _ = {
          strRestoreDetails: _,
          last_used: Date.now(),
          bExpires: _,
        };
        this.m_mapRestoreDetails.set(_, _);
      } else this.m_mapRestoreDetails.delete(_);
      ((this.m_bSaveRequired = !0),
        this.m_bShuttingDown
          ? this.SaveSavedDimensionStore()
          : this.DebouncedSaveSavedDimensionStore());
    }
  }
};
_([_, _(100)], _.prototype, `DebouncedSaveSavedDimensionStore`, null);
var _ = new _();
window.g_PopupManager = _;
var _ = class _ {
    key;
    static sm_lastKey = 0;
    ModalClosedCallback = new _();
    constructor() {
      this.key = `Modal_${_.sm_lastKey++}`;
    }
  },
  _ = class extends _ {
    element;
    ModalUpdatedCallback = new _();
    constructor(_) {
      (super(), (this.element = _));
    }
    UpdateModal(_) {
      ((this.element = _), this.ModalUpdatedCallback.Dispatch());
    }
  },
  _ = class extends _ {
    m_OnElementReadyCallbacks = new _();
    m_OnActiveModalCallbacks = new _();
    constructor() {
      super();
    }
    get OnElementReadyCallbacks() {
      return this.m_OnElementReadyCallbacks;
    }
    get OnModalActiveCallbacks() {
      return this.m_OnActiveModalCallbacks;
    }
    RefModalElement(_) {
      _ && this.m_OnElementReadyCallbacks.Dispatch(_);
    }
    SetActive(_) {
      this.m_OnActiveModalCallbacks.Dispatch(_);
    }
  };
_([_], _.prototype, `RefModalElement`, null);
var _ = class extends _ {
    m_strName;
    m_modalProps;
    m_options;
    constructor(_, _, _, _) {
      (super(_),
        (this.m_strName = _),
        (this.m_modalProps = _),
        (this.m_options = _));
    }
    get name() {
      return this.m_strName;
    }
    get modalProps() {
      return this.m_modalProps;
    }
    get options() {
      return this.m_options;
    }
  },
  _ = _.createContext(null);
function _(_) {
  let {
      refContextMenuManager: _,
      bRegisterMenuManager: _ = !0,
      children: _,
    } = _,
    _ = _()?.ownerWindow || window,
    _ = _.useRef(void 0);
  return (
    (_.current ||= new _()),
    _.useLayoutEffect(() => {
      if (_)
        return (
          _.SetMenuManager(_, _.current), () => _.SetMenuManager(_, void 0)
        );
    }, [_, _]),
    _.useLayoutEffect(() => (_(_, _.current), () => _(_, void 0)), [_]),
    (0, _.jsx)(_.Provider, {
      value: _.current,
      children: _,
    })
  );
}
function _() {
  return _.useContext(_);
}
var _ = _.createContext({
  body_class: ``,
});
function _() {
  return _.useContext(_);
}
function _(_, _, _) {
  let _ = _.useRef(void 0),
    [_, _] = _.useState(void 0),
    _ = _();
  return (
    (_.current ||= new _(_, _(_, _), _)),
    (_.current.m_callbacks = _),
    _.useEffect(
      () => (
        _.current?.params.bNoInitialShow ||
          _.current?.Show(
            _.current?.params.eWindowBringToFront ??
              _.k_EWindowBringToFrontAndForceOS,
          ),
        () => {
          ((_.current.m_callbacks = void 0),
            _.current.window?.SteamClient.Window.SetHideOnClose &&
              _.current.window?.SteamClient.Window.SetHideOnClose(!1),
            _.current.Close());
        }
      ),
      [],
    ),
    _.useEffect(() => {
      _.current.window?.SteamClient.Window.SetHideOnClose &&
        _.current.window?.SteamClient.Window.SetHideOnClose(!!_.bHideOnClose);
    }, [_.bHideOnClose]),
    {
      popup: _.current.window,
      element: _,
      popupObj: _.current,
    }
  );
}
function _(_, _) {
  return {
    ..._,
    body_class: _(_.body_class, _.body_class),
  };
}
var _ = class extends _ {
  m_callbacks;
  m_fnReadyToRender;
  constructor(_, _, _) {
    (super(_, _), (this.m_fnReadyToRender = _));
  }
  DoCallback(_) {
    this.m_callbacks?.[_]?.(this.m_popup, this.m_element);
  }
  UpdateParamsBeforeShow(_) {
    return this.m_callbacks?.updateParamsBeforeShow
      ? this.m_callbacks.updateParamsBeforeShow(_)
      : _;
  }
  OnCreate() {
    this.m_callbacks?.onCreate &&
      this.m_callbacks.onCreate(this.m_popup, this.m_element);
  }
  OnBlur() {
    this.DoCallback(`onBlur`);
  }
  OnFocus() {
    this.DoCallback(`onFocus`);
  }
  OnLoad() {
    this.DoCallback(`onLoad`);
  }
  OnMove() {
    this.DoCallback(`onMove`);
  }
  OnResize() {
    this.DoCallback(`onResize`);
  }
  OnClose() {
    (this.DoCallback(`onClose`), this.m_fnReadyToRender(void 0));
  }
  Render(_, _) {
    this.m_fnReadyToRender(_);
  }
};
function _(_) {
  let { managerOverride: _, bSuppressMouseOverlay: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _ ?? _;
  _(_.OnMenusChanged, _);
  let _ = !_ && _.BShouldRenderMouseOverlay(),
    _ = _.GetAllMenus();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ && (0, _.jsx)(_, {}),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            children: (0, _.jsx)(_, {
              instance: _,
              browserInfo: _,
            }),
          },
          _.key,
        ),
      ),
    ],
  });
}
function _(_) {
  let { instance: _, browserInfo: _, children: _ } = _,
    _ = _(),
    _ = _().ownerWindow,
    _ = _.useRef(void 0);
  _.current === void 0 &&
    (_.current =
      (_.options.bForcePopup || _.innerWidth < 400 || _?.BOnlyPopups()) &&
      !!_.SteamClient?.Window);
  let _ = _.useMemo(
      () => ({
        instance: _,
        styles: _,
        presentation: 0,
      }),
      [_],
    ),
    _ = _ || _.ReactElement;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.current
      ? (0, _.jsx)(_, {
          instance: _,
          browserInfo: _,
          children: _,
        })
      : (0, _.jsx)(_, {
          instance: _,
          children: _,
        }),
  });
}
function _(_) {
  let { instance: _, children: _ } = _;
  return (0, _.jsx)(_, {
    ..._.position,
    children: _,
  });
}
function _(_) {
  let { instance: _, browserInfo: _, children: _ } = _,
    [_, _] = _.useState(),
    _ = _().ownerWindow,
    _ = _.SteamClient.Browser.GetBrowserID(),
    _ = _.useCallback(
      (_) => {
        let { options: _, position: _ } = _,
          _ = _.element;
        if (_.bScreenCoordinates)
          _.dimensions = {
            left: _.clientX,
            top: _.clientY,
            width: 2,
            height: 1,
          };
        else {
          let _ = _(_, _.getBoundingClientRect());
          ((_.dimensions = {
            left: _.right,
            top: _.top,
            width: 2,
            height: 1,
          }),
            (_.availscreenwidth = _.screen.availWidth),
            (_.availscreenheight = _.screen.availHeight));
        }
        return _;
      },
      [_, _],
    ),
    _ = _.options.bStandalone
      ? _(_.StandaloneContextMenu)
      : _(_.PopupContextMenu);
  (_.options.bCreateHidden && (_ |= _.Hidden),
    _.options.bAlwaysOnTop && (_ |= _.AlwaysOnTop));
  let { popupObj: _, element: _ } = _(
    `contextmenu_` + _.key,
    {
      title: _.options.title || `Menu`,
      html_class: _(_, `client_chat_frame`, _.options.bStandalone && void 0),
      popup_class: void 0,
      body_class: _(void 0, `ContextMenuPopupBody`),
      replace_existing_popup: !1,
      target_browser: _,
      window_opener_id: _,
      bHideOnClose: !0,
      eCreationFlags: _,
    },
    {
      updateParamsBeforeShow: _,
    },
  );
  return (
    (0, _.useEffect)(() => {
      if (_) {
        if (_.visible) {
          if (_) {
            (_.PositionMenu(), _.PositionPopupWindow());
            let _ = _.options.bNoFocusWhenShown
              ? _.k_EWindowBringToFrontWithoutForcingOS
              : _.k_EWindowBringToFrontAndForceOS;
            _.TakeFocus(_);
          }
        } else
          _.options.bRetainOnHide &&
            window.setTimeout(() => {
              _.window?.SteamClient.Window.HideWindow();
            }, 30);
      }
    }, [_, _, _.visible, _]),
    _(_.window),
    _.useEffect(() => {
      _.SetPopup(_);
    }, [_, _]),
    _
      ? _.createPortal(
          (0, _.jsx)(_, {
            ref: _,
            ..._.position,
            parentWin: _,
            popup: _,
            children: _,
          }),
          _,
        )
      : null
  );
}
function _(_) {
  let [_, _] = (0, _.useState)(!0);
  return (
    (0, _.useEffect)(() => {
      (0, _.startTransition)(() => {
        _(!0);
      });
    }, []),
    _ ? _.children : (_.fallback ?? null)
  );
}
function _(_) {
  let [_, _] = _.useState(!1),
    _ = _.useCallback(() => {
      _(_, `Window.IsWindowMaximized`)
        ? _.SteamClient.Window.IsWindowMaximized().then((_) => {
            _(_);
          })
        : _?.screen &&
          _(
            _.screen.availWidth == _.innerWidth &&
              _.screen.availHeight == _.innerHeight,
          );
    }, [_]);
  return (
    _.useEffect(_, [_, _]), _(_, `resize`, _), _(_, `window_resized`, _), _
  );
}
function _(_, _ = 100) {
  let [_, _] = _.useState(!1),
    _ = _.useCallback(() => _(!0), [_]),
    _ = _.useCallback(() => _(!1), [_]);
  return (
    _.useEffect(() => {
      if (_)
        return (
          _.addEventListener(`focus`, _),
          _.addEventListener(`blur`, _),
          () => {
            (_.removeEventListener(`focus`, _),
              _.removeEventListener(`blur`, _));
          }
        );
    }, [_, _, _]),
    _(_, _)
  );
}
function _(_) {
  let { popup: _, onMaximize: _, bOSX: _ } = _,
    _ = _(_),
    _ = _.useCallback(() => {
      _
        ? _()
        : _(_, `Window.ToggleMaximize`) &&
          _.SteamClient.Window.ToggleMaximize();
    }, [_, _]);
  return (0, _.jsx)(_, {
    className: _(_ ? `restoreButton` : `maximizeButton`, `windowControlButton`),
    onClick: _,
    children: !_ && (_ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {})),
  });
}
function _(_) {
  let { popup: _, onMinimize: _, bOSX: _ } = _,
    _ = _.useCallback(() => {
      _.SteamClient.Window.Minimize();
    }, [_]);
  return (0, _.jsx)(_, {
    className: `minimizeButton windowControlButton`,
    onClick: _ ?? _,
    children: !_ && (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { popup: _, onClose: _, bOSX: _ } = _,
    _ = _.useCallback(() => {
      _ && (_(_, `Window.Close`) ? _.SteamClient.Window.Close() : _.close());
    }, [_]);
  return (0, _.jsx)(_, {
    className: `closeButton windowControlButton`,
    onClick: _ ?? _,
    children: !_ && (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let { className: _, onClick: _, children: _ } = _,
    _ = _.useCallback(
      (_) => {
        _ && (_.stopPropagation(), _(_));
      },
      [_],
    );
  return (0, _.jsx)(`div`, {
    className: _(`title-area-icon`, _),
    onClick: _,
    children: (0, _.jsx)(`div`, {
      className: `title-area-icon-inner`,
      children: _,
    }),
  });
}
function _(_) {
  let {
      className: _,
      style: _,
      hideActions: _,
      hideClose: _,
      hideMin: _,
      hideMax: _,
      bOSX: _ = _(),
      bForceWindowFocused: _,
      onMinimize: _,
      onMaximize: _,
      onClose: _,
      extraActions: _,
      popup: _,
      children: _,
    } = _,
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(
      `TitleBar`,
      `title-area`,
      _ && `OSX`,
      (_ || _) && `WindowFocus`,
      _,
    ),
    style: _,
    children: [
      (0, _.jsx)(`div`, {
        className: `title-area-highlight`,
      }),
      (0, _.jsx)(`div`, {
        className: `title-area-children`,
        children: _,
      }),
      !_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _ &&
              (0, _.jsx)(`div`, {
                className: `title-bar-actions extra-actions`,
                children: _,
              }),
            (0, _.jsxs)(`div`, {
              className: `title-bar-actions window-controls`,
              children: [
                !_ &&
                  (0, _.jsx)(_, {
                    popup: _,
                    onClose: _,
                    bOSX: _,
                  }),
                !_ &&
                  (0, _.jsx)(_, {
                    popup: _,
                    onMaximize: _,
                    bOSX: _,
                  }),
                !_ &&
                  (0, _.jsx)(_, {
                    popup: _,
                    onMinimize: _,
                    bOSX: _,
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { Modal: _ } = _,
    { name: _, modalProps: _, options: _ } = _,
    _ = _().ownerWindow,
    { popup: _, element: _ } = _(
      _,
      {
        title: _.strTitle,
        html_class:
          `client_chat_frame fullheight ModalDialogPopup LegacyPopup ` +
          (_.className || ``),
        body_class: `fullheight ModalDialogBody`,
        popup_class: `fullheight popup_chat_frame`,
        owner_window: void 0,
        replace_existing_popup: !0,
        target_browser: _.browserContext,
        availscreenwidth: _.screen.availWidth,
        availscreenheight: _.screen.availHeight,
        bModal: _.bHideMainWindowForPopouts,
      },
      {
        updateParamsBeforeShow: (_) => _(_, _, _, _),
        onClose: () => _.fnOnClose && _.fnOnClose(),
      },
    );
  _(
    _,
    `click`,
    _.useCallback(() => {
      _.bHideMainWindowForPopouts && _?.SteamClient.Window.BringToFront();
    }, [_.bHideMainWindowForPopouts, _]),
  );
  let _ = _?.bHideActions,
    _ =
      typeof _?.nDragAreaHeight == `number`
        ? {
            height: _.nDragAreaHeight,
          }
        : void 0;
  return _
    ? _.createPortal(
        (0, _.jsx)(_, {
          ownerWindow: _,
          children: (0, _.jsxs)(`div`, {
            className: `PopupFullWindow`,
            onContextMenu: _,
            children: [
              (0, _.jsx)(_, {
                hideMin: !0,
                hideMax: !0,
                popup: _,
                hideActions: _,
                style: _,
              }),
              (0, _.jsx)(_, {
                browserInfo: _.browserContext,
                bCenterPopupsOnWindow: _.bCenterOnWindow,
                children: _.element,
              }),
            ],
          }),
        }),
        _,
      )
    : null;
}
function _(_, _, _, _) {
  let _,
    _,
    _ = _.popupWidth || 500,
    _ = _.popupHeight || 400,
    _;
  if (_.IN_CLIENT && _?.SteamClient?.Browser?.GetBrowserID)
    _ = _.SteamClient.Browser.GetBrowserID();
  else {
    let _ = _.screen;
    ((_ = (_.availWidth - _) / 2), (_ = (_.availHeight - _) / 2));
    let _ = _;
    _.availLeft !== void 0 &&
      _.availTop !== void 0 &&
      ((_ += _.availLeft), (_ += _.availTop));
  }
  return {
    ..._,
    dimensions: {
      width: _,
      height: _,
      left: _,
      top: _,
    },
    center_on_window: _.bCenterOnWindow ? _ : void 0,
    window_opener_id: _,
  };
}
var _ = (0, _.createContext)(!1);
function _(_) {
  let { ModalManager: _ } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(!0),
    _ = _.useCallback(() => {
      _.startTransition(() => {
        _(!0);
      });
    }, []);
  (_.useEffect(() => _.RegisterMeasureModalCallback(_).Unregister, [_, _]),
    _.useLayoutEffect(() => {
      _ ||
        _.startTransition(() => {
          (_(_.TakeMeasureModalRequest()), _(!1));
        });
    }, [_, _, _]));
  let _ = _.useCallback((_) => {
    _.startTransition(() => {
      _((_) => (_ === _ ? void 0 : _));
    });
  }, []);
  return _
    ? (0, _.jsx)(
        _,
        {
          onMeasureComplete: _,
          request: _,
        },
        _._,
      )
    : null;
}
function _(_) {
  let [_, _] = _.useState(),
    _ = _().ownerWindow;
  return (
    _.useLayoutEffect(() => {
      let _ = _.document.body,
        _ = _.document.createElement(`div`);
      return (
        (_.style.position = `absolute`),
        (_.style.visibility = `hidden`),
        _.appendChild(_),
        _(_),
        () => {
          _.removeChild(_);
        }
      );
    }, [_]),
    _
      ? _.createPortal(
          (0, _.jsx)(_, {
            ..._,
            elContainer: _,
          }),
          _,
        )
      : null
  );
}
function _(_) {
  let { elContainer: _, onMeasureComplete: _, request: _ } = _;
  return (
    _.useEffect(() => {
      let _ = !1,
        _ = (_) => {
          _ ||= (_.fnResults(_), _(_), !0);
        };
      return (_(_, _.promiseContentReady).then(_), () => _(void 0));
    }, [_, _, _]),
    (0, _.jsx)(_.Provider, {
      value: !0,
      children: (0, _.jsx)(_, {
        children: _.rctToMeasure,
      }),
    })
  );
}
async function _(_, _) {
  _ && (await _);
  let _ = document;
  _.IN_STEAMUI && _.fonts && (await _.fonts.ready);
  let _ = _.getBoundingClientRect();
  return {
    height: Math.ceil(_.height),
    width: Math.ceil(_.width),
  };
}
var _ = `RC476IADSfM-`,
  _ = `djO4HBSaVEk-`;
function _(_) {
  _.useEffect(() => {
    if (_)
      return (
        document.body.classList.add(_), () => document.body.classList.remove(_)
      );
  }, [_]);
}
function _(_) {
  let _ = _().ownerWindow,
    _ = _(),
    _ = _.useCallback(() => {
      _?.SteamClient?.Window && _.SteamClient.Window.BringToFront();
    }, [_]);
  (_.useEffect(() => _.RegisterOverlay(_), [_, _]),
    _.useEffect(() => _.RegisterOnModalShownCallback(_).Unregister, [_, _]));
}
function _(_, _) {
  return _(
    (_) => {
      if (!_ || !_) return;
      let _ = _.ownerDocument.defaultView;
      return _.RegisterModalManager(_, _);
    },
    [_],
  );
}
function _(_) {
  let {
      ModalManager: _,
      bRegisterModalManager: _ = !0,
      DialogWrapper: _,
      rctActiveContextMenus: _,
      bUseDialogElement: _ = !0,
      style: _,
      ..._
    } = _,
    _ = _.modals,
    _ = _ && !!_.length,
    _ = _.active_modal;
  (_(_), _(_));
  let _ = _(_, _),
    _ = null,
    _ = !_;
  return (
    _ && _.length
      ? (_ = _.map((_) => {
          let _ = _ == _,
            _ = {
              key: _.key,
              active: _,
              rctActiveContextMenus: _ && _ ? _ : void 0,
            };
          if (_ instanceof _)
            return (0, _.createElement)(_, {
              ..._,
              key: _.key,
              modal: _,
              Component: _ ?? _,
            });
          if (_ instanceof _)
            return (0, _.createElement)(_, {
              ..._,
              key: _.key,
              modal: _,
              bUseDialogElement: _,
            });
        }))
      : ((_ = !0),
        (_ = {
          ..._,
          display: `none`,
        })),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsxs)(`div`, {
              ..._,
              style: _,
              ref: _,
              className: _(_.className, `FullModalOverlay`),
              children: [
                (0, _.jsx)(`div`, {
                  className: `ModalOverlayContent ModalOverlayBackground`,
                }),
                _,
              ],
            }),
            _ && _,
          ],
        }),
        (0, _.jsx)(_, {
          ModalManager: _,
        }),
        (0, _.jsx)(_, {
          ModalManager: _,
        }),
      ],
    })
  );
}
function _(_) {
  let {
    modal: _,
    rctActiveContextMenus: _,
    active: _,
    bUseDialogElement: _,
  } = _;
  _.useEffect(() => {
    if (_)
      return (
        _.SetActive(_),
        () => {
          _.SetActive(!1);
        }
      );
  }, [_, _]);
  let _ = (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(`div`, {
        className: _(`ModalOverlayContent`, _ ? `active` : `inactive`),
        ref: _.RefModalElement,
      }),
      _,
    ],
  });
  return _
    ? (0, _.jsx)(_, {
        active: _,
        children: _,
      })
    : _;
}
function _(_) {
  let { modal: _, active: _, rctActiveContextMenus: _, Component: _ } = _,
    _ = _();
  return (
    _(_.ModalUpdatedCallback, _),
    (0, _.jsx)(_, {
      children: (0, _.jsxs)(_, {
        className: _(`ModalOverlayContent`, _ ? `active` : `inactive`),
        active: _,
        modalKey: _.key,
        children: [_, _.element],
      }),
    })
  );
}
function _(_) {
  let { className: _, active: _, children: _ } = _;
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      tabIndex: -1,
      children: _,
    }),
  });
}
function _(_) {
  let { active: _, children: _ } = _,
    _ = _.useRef(null),
    [_, _] = _.useState(!1);
  return (
    _.useLayoutEffect(() => {
      _ && !_ ? _(!0) : !_ && _ && _.current?.close();
    }, [_, _]),
    _.useLayoutEffect(() => {
      _ && _.current.showModal();
    }, [_]),
    (0, _.jsx)(`dialog`, {
      ref: _,
      className: _,
      onClose: () => _(!1),
      onCancel: (_) => _.preventDefault(),
      children: _,
    })
  );
}
function _(_) {
  let { ModalManager: _ } = _,
    _ = _();
  return (
    _(_.LegacyPopupModalCountChangedCallbacks, _),
    (0, _.jsx)(_.Fragment, {
      children: _.legacy_popup_modals.map((_) =>
        (0, _.jsx)(
          _,
          {
            Modal: _,
          },
          _.key,
        ),
      ),
    })
  );
}
var _ = _.createContext({}),
  _ = _.memo(function (_) {
    let {
        children: _,
        bRenderOverlayAtRoot: _,
        refModalManager: _,
        DialogWrapper: _,
        bUseDialogElement: _ = !0,
        ContextMenuComponent: _ = _,
        refContextMenuManager: _,
        browserInfo: _,
        bUsePopups: _,
        bOnlyPopups: _,
        bCenterPopupsOnWindow: _,
        bRegisterManagersWithWindow: _ = !0,
        ..._
      } = _,
      _ = _.useRef(void 0);
    _.current ||= new _();
    let _ = (0, _.jsx)(_, {
      ..._,
      DialogWrapper: _,
      ModalManager: _.current,
      bUseDialogElement: _,
      bRegisterModalManager: _,
      rctActiveContextMenus: (0, _.jsx)(_, {}),
    });
    (_.bRenderOverlayAtRoot &&
      typeof document < `u` &&
      `body` in document &&
      (_ = _.createPortal(_, document.body)),
      _(_, _.current),
      _ !== void 0 && _.current?.SetUsePopups(_),
      _ !== void 0 && _.current?.SetCenterPopupsOnWindow(_),
      _ !== void 0 && _.current?.SetOnlyPopups(_),
      _.current.SetBrowserInfo(_));
    let _ = _.useMemo(
      () => ({
        ModalManager: _.current,
        DialogWrapper: _,
      }),
      [_],
    );
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsxs)(_, {
        refContextMenuManager: _,
        bRegisterMenuManager: _,
        children: [
          (0, _.jsx)(_, {
            children: _,
          }),
          _.children,
        ],
      }),
    });
  });
function _() {
  return _.useContext(_).ModalManager;
}
function _() {
  return _.useContext(_).DialogWrapper;
}
function _(_) {
  let _ = _();
  _.useEffect(() => {
    if (_) return _.RegisterModalManager(_, _);
  }, [_, _]);
}
var _ = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new _();
    m_OnModalShownCallbacks = new _();
    m_OnModalHiddenCallbacks = new _();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_nMeasureRequestID = 0;
    m_OnMeasureModal = new _();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new _();
    m_browserInfo;
    get ModalCountChangedCallbacks() {
      return this.m_OnModalCountChangedCallbacks;
    }
    get LegacyPopupModalCountChangedCallbacks() {
      return this.m_OnLegacyPopupModalCountChanged;
    }
    RegisterOnModalShownCallback(_) {
      return this.m_OnModalShownCallbacks.Register(_);
    }
    RegisterOnModalHiddenCallback(_) {
      return this.m_OnModalHiddenCallbacks.Register(_);
    }
    RegisterMeasureModalCallback(_) {
      return this.m_OnMeasureModal.Register(_);
    }
    TakeMeasureModalRequest() {
      if (this.m_rgMeasureModalRequests.length)
        return this.m_rgMeasureModalRequests.shift();
    }
    RegisterOverlay(_) {
      (_(
        this.m_cMountedOverlays == 0,
        `Duplicate modal DialogOverlay; modals will appear in both`,
      ),
        this.m_cMountedOverlays++);
      let _ = this.m_OnModalCountChangedCallbacks.Register(_);
      return () => {
        (this.m_cMountedOverlays--, _.Unregister());
      };
    }
    OnModalCountChanged(_) {
      (_ == `show` &&
        this.m_cMountedOverlays == 0 &&
        window.setTimeout(() => {
          _(
            this.m_cMountedOverlays > 0,
            `Modal was shown but ModalManager has no associated DialogOverlay`,
          );
        }, 50),
        this.m_OnModalCountChangedCallbacks.Dispatch(this.m_rgModals.length),
        _ == `show`
          ? this.m_OnModalShownCallbacks.Dispatch(this.m_rgModals.length)
          : _ == `hide` &&
            this.m_OnModalHiddenCallbacks.Dispatch(this.m_rgModals.length));
    }
    get modals() {
      return this.m_rgModals;
    }
    get active_modal() {
      if (this.m_rgModals.length)
        return this.m_rgModals[this.m_rgModals.length - 1];
    }
    ShowModal(_) {
      return this.ShowModalInternal(_);
    }
    CloseLegacyModals() {
      for (let _ of this.m_rgModals.filter((_) => _ instanceof _))
        this.RemoveModal(_);
    }
    RemoveModal(_) {
      let _ = this.m_rgModals.indexOf(_);
      (_ != -1 && this.m_rgModals.splice(_, 1),
        _.ModalClosedCallback.Dispatch(),
        this.OnModalCountChanged(`hide`));
    }
    ShowModalInternal(_) {
      let _ = new _(_);
      this.m_rgModals.push(_);
      let _ = {
        Close: () => {
          this.RemoveModal(_);
        },
        Update: (_) => {
          _.UpdateModal(_);
        },
        ClosedPromise: new Promise((_) => {
          let _ = _.ModalClosedCallback.Register(() => {
            (_(), _.Unregister());
          });
        }),
      };
      return (this.OnModalCountChanged(`show`), _);
    }
    ShowPortalModal() {
      _(
        !this.m_bOnlyPopups,
        `Attempting to show modal in popup-only modal manager; will not display.`,
      );
      let _ = new _();
      return (
        this.m_rgModals.push(_),
        this.OnModalCountChanged(`show`),
        {
          key: _.key,
          Close: () => {
            this.RemoveModal(_);
          },
          OnElementReadyCallbacks: _.OnElementReadyCallbacks,
          OnModalActiveCallbacks: _.OnModalActiveCallbacks,
        }
      );
    }
    SetUsePopups(_) {
      this.m_bUsePopups = _;
    }
    BUsePopups() {
      return this.m_bUsePopups || this.m_bOnlyPopups;
    }
    SetOnlyPopups(_) {
      this.m_bOnlyPopups = _;
    }
    BOnlyPopups() {
      return this.m_bOnlyPopups;
    }
    SetBrowserInfo(_) {
      this.m_browserInfo = _;
    }
    GetBrowserInfo() {
      return this.m_browserInfo;
    }
    SetCenterPopupsOnWindow(_) {
      this.m_bCenterPopupsOnWindow = _;
    }
    BCenterPopupsOnWindow() {
      return this.m_bCenterPopupsOnWindow;
    }
    RequestModalMeasure(_, _, _) {
      (this.m_rgMeasureModalRequests.push({
        _: this.m_nMeasureRequestID++,
        rctToMeasure: _,
        fnResults: _,
        promiseContentReady: _,
      }),
        this.m_OnMeasureModal.Dispatch());
    }
    get legacy_popup_modals() {
      return this.m_rgLegacyPopupModals;
    }
    ShowLegacyPopupModal(_, _, _, _) {
      let _ = () => {
          let _ = this.m_rgLegacyPopupModals.indexOf(_);
          (_ != -1 && this.m_rgLegacyPopupModals.splice(_, 1),
            this.m_OnLegacyPopupModalCountChanged.Dispatch(
              this.m_rgLegacyPopupModals.length,
            ),
            _.ModalClosedCallback.Dispatch(),
            _.fnOnClose && _.fnOnClose());
        },
        _ = new _(
          _,
          _,
          {
            ..._,
            fnOnClose: _,
          },
          {
            bCenterOnWindow: this.m_bCenterPopupsOnWindow,
            ..._,
          },
        );
      return (
        this.m_rgLegacyPopupModals.push(_),
        this.m_OnLegacyPopupModalCountChanged.Dispatch(
          this.m_rgLegacyPopupModals.length,
        ),
        {
          Close: _,
          Update: (_) => {
            _.UpdateModal(_);
          },
          ClosedPromise: new Promise((_) => {
            let _ = _.ModalClosedCallback.Register(() => {
              (_(), _.Unregister());
            });
          }),
        }
      );
    }
  },
  _ = new (class {
    m_mapModalManager = new WeakMap();
    GetModalManager(_) {
      let _ = this.m_mapModalManager.get(_);
      return (
        _ ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${_.document.title}`,
          ),
          (_ = new _()),
          this.m_mapModalManager.set(_, _)),
        _
      );
    }
    RegisterModalManager(_, _) {
      _(
        !this.m_mapModalManager.has(_) || _ == window,
        `Stomping CModalManager for ${_.document.title}!`,
      );
      let _ = this.m_mapModalManager.get(_);
      return (
        this.m_mapModalManager.set(_, _),
        () => {
          _
            ? this.m_mapModalManager.set(_, _)
            : this.m_mapModalManager.delete(_);
        }
      );
    }
    UnregisterModalManager(_) {
      this.m_mapModalManager.delete(_);
    }
  })();
function _(_) {
  return _.GetModalManager(_);
}
var _ = _.createContext({}),
  _ = () => _.useContext(_);
function _(_) {
  let _ = _().ModalPosition ?? _;
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let _ = {},
    _;
  _.onEscKeypress &&
    ((_.tabIndex = 0),
    (_.onKeyDown = (_) => {
      _.keyCode == 27 && (_.onEscKeypress(), _.stopPropagation());
    }),
    (_.onMouseDown = (_) => {
      _.currentTarget === _.target &&
        !_.bDisableBackgroundDismiss &&
        (_.onEscKeypress(), _.stopPropagation());
    }),
    (_ = (_) => {
      _ && (_(_, _.ownerDocument.activeElement) || _.focus());
    }));
  let _ = [`ModalPosition`];
  (_.className && _.push(_.className),
    _.bDestructiveWarning && _.push(`Destructive`));
  let _ =
      _.renderContent ||
      ((_) =>
        (0, _.jsx)(`div`, {
          ..._,
        })),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        !_.hideTopBar &&
          (0, _.jsx)(`div`, {
            className: `ModalPosition_TopBar`,
          }),
        _.onEscKeypress &&
          !_.bHideCloseIcon &&
          (0, _.jsx)(`div`, {
            className: `ModalPosition_Dismiss`,
            children: (0, _.jsx)(`div`, {
              className: `closeButton`,
              onClick: (_) => {
                (_.stopPropagation(), _.onEscKeypress());
              },
              children: (0, _.jsx)(_, {}),
            }),
          }),
        (0, _.jsx)(_, {
          children: _.children,
        }),
      ],
    });
  return (0, _.jsx)(`div`, {
    className: _.join(` `),
    ..._,
    ref: _,
    children: _({
      className: `ModalPosition_Content`,
      children: _,
    }),
  });
}
async function _(_, _, _) {
  let _ = _(_),
    _ = _?.bForcePopOut || _(_);
  _(
    !(_ && _?.bNeverPopOut),
    `Conflicting popout options; will ignore bNeverPopOut`,
  );
  let _ = !_ && _?.bNeverPopOut === !0,
    _ = _(_) || (!_ && _(_, _)),
    _ = _ && _?.popupWidth && _?.popupHeight,
    _;
  _ &&
    !_ &&
    (_ = await _(
      _,
      _.cloneElement(_, {
        closeModal: () => {},
      }),
      _?.promiseRenderComplete,
    ));
  let _ = _ && _.height / _.innerHeight < 0.9 && _.width / _.innerWidth < 0.8;
  if (_ || (!_ && _))
    return _(_, _, void 0, {
      fnOnClose: _?.fnOnClose,
    });
  {
    let _ = {
        strTitle: _?.strTitle || _(`#Dialog_DefaultWindowTitle`),
        fnOnClose: _?.fnOnClose,
        popupWidth: _?.popupWidth || _?.width,
        popupHeight: _?.popupHeight || _?.height,
        bHideMainWindowForPopouts: _?.bHideMainWindowForPopouts,
        className: _?.className,
      },
      _ = {
        bHideActions: _?.bHideActionIcons,
      },
      _ = _?.browserContext || _.browserInfo;
    return _(_, _, _.strTitle, _, _, _, _);
  }
}
async function _(_, _, _) {
  return _(_, _, {
    bHideMainWindowForPopouts: !0,
    ..._,
  });
}
function _(_, _, _, _, _, _, _) {
  let _,
    _,
    _ = _.props.closeModal,
    _ = () => {
      (_ && _.Close(), _ && _(), _?.fnOnClose && _.fnOnClose());
    },
    _ = () => {
      (_ && _.Close(), _());
    },
    _ = _.cloneElement(_, {
      closeModal: _,
    });
  if (((_ ||= _(_)), _(_, _) && _ && _)) {
    if (_.bHideMainWindowForPopouts) {
      let _ = (0, _.jsx)(_, {
        className: `Hidden`,
        onEscKeypress: _.props.bDisableBackgroundDismiss ? void 0 : _,
        children: (0, _.jsx)(`div`, {}),
      });
      _ = _.ShowModal(_);
    }
    let _ = {
      ..._,
      fnOnClose: _,
      browserContext: _,
    };
    _ = _.ShowLegacyPopupModal(_, _, _, _);
  } else _ = _.ShowModal(_);
  return _;
}
function _(_, _) {
  return ((_ ||= _(_ || window)), _.IN_CLIENT && _.BUsePopups());
}
function _(_) {
  return _.BOnlyPopups && _.BOnlyPopups();
}
async function _(_, _, _) {
  return new Promise((_, _) => {
    _.RequestModalMeasure(_, _, _);
  });
}
function _(_) {
  let {
      className: _,
      modalClassName: _,
      onCancel: _,
      closeModal: _,
      bOKDisabled: _,
      bCloseAfterOK: _ = !0,
      onOK: _,
      bAllowFullSize: _,
      bDestructiveWarning: _,
      bDisableBackgroundDismiss: _,
      bHideCloseIcon: _,
      children: _,
      "aria-labelledby": _,
      ..._
    } = _,
    _ = _();
  _(
    _ || _,
    `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${_} ${_}`,
  );
  let _ = _.useCallback(() => {
      (_ && _()) || (_ && _());
    }, [_, _]),
    _ = _.useCallback(async () => {
      _ || (_ && (await _()), _ && _ && _());
    }, [_, _, _, _]);
  return (0, _.jsx)(_, {
    onEscKeypress: _,
    className: _,
    bDestructiveWarning: _,
    bDisableBackgroundDismiss: _,
    bHideCloseIcon: _,
    children: (0, _.jsx)(_, {
      role: `dialog`,
      "aria-labelledby": _ || void 0,
      ..._,
      classNameContent: _(
        `GenericDialogBase`,
        `GenericConfirmDialog`,
        _ && `DialogContentFullSize`,
        _,
      ),
      onSubmit: _,
      bCenterVertically: !_,
      children: _,
    }),
  });
}
function _(_) {
  let { title: _, titleClassName: _, children: _, ..._ } = _,
    _ = _.useId();
  return (0, _.jsxs)(_, {
    "aria-labelledby": _ ? _ : ``,
    ..._,
    children: [
      _ &&
        (0, _.jsx)(_, {
          _: _,
          className: _,
          children: _,
        }),
      _,
    ],
  });
}
function _(_) {
  function _(_) {
    return () => {
      (_ && _(), _.closeModal && _.closeModal());
    };
  }
  let {
      strTitle: _,
      strDescription: _,
      strOKButtonText: _,
      strCancelButtonText: _,
      onGamepadCancel: _,
      strGamepadCancelDescription: _,
      strMiddleButtonText: _,
      onMiddleButton: _,
      bAlertDialog: _,
      bProgressDialog: _,
      focusButton: _,
      children: _,
      ..._
    } = _,
    _ = _ || _(`#Button_Close`),
    _ = (0, _.jsx)(_, {
      bOKDisabled: _.bOKDisabled,
      bCancelDisabled: _.bCancelDisabled,
      strOKText: _,
      onCancel: _(_.onCancel),
      strCancelText: _,
      focusButton: _,
    });
  _
    ? (_ = void 0)
    : _
      ? (_ = (0, _.jsx)(_, {
          children: _,
        }))
      : _ &&
        (_ = (0, _.jsx)(_, {
          bOKDisabled: _.bOKDisabled,
          bCancelDisabled: _.bCancelDisabled,
          strOKText: _,
          onCancel: _(_.onCancel),
          strCancelText: _,
          focusButton: _,
          onUpdate: () => {
            (_(), _.closeModal && _.closeModal());
          },
          strUpdateText: _,
          bUpdateDisabled: _.bMiddleDisabled,
        }));
  let _ = _.useId();
  return (0, _.jsx)(_, {
    ..._,
    title:
      _ ||
      (0, _.jsx)(_.Fragment, {
        children: `\xA0`,
      }),
    "aria-describedby": _,
    children: (0, _.jsxs)(_, {
      onCancelButton: _(_ || _.onCancel),
      onCancelActionDescription: _,
      children: [
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(`div`, {
              _: _,
              style: {
                display: `contents`,
              },
              children: _,
            }),
            _,
          ],
        }),
        (0, _.jsx)(_, {
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let _ = {
    strTitle: _(`#Error_FailureNotice`),
    strDescription: _(`#Error_GenericFailureDescription`),
    bAlertDialog: !0,
    bDestructiveWarning: !0,
    onOK: () => {},
    onCancel: () => {},
    ..._,
  };
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let _ = {
    onOK: () => {},
    onCancel: () => {},
    strDescription: (0, _.jsxs)(`span`, {
      style: {
        whiteSpace: `pre-line`,
      },
      children: [` `, _.strDescription, ` `],
    }),
    bAlertDialog: !0,
    ..._,
  };
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_, _, _) {
  _(
    (0, _.jsx)(_, {
      strTitle: _,
      strDescription: _,
    }),
    _,
  );
}
function _(_) {
  return _ ? _ + `_Label` : void 0;
}
function _(_) {
  return _ ? _ + `_Description` : void 0;
}
function _(_, _) {
  let { label: _, description: _ } = _;
  return {
    "aria-labelledby": _ ? _(_) : void 0,
    "aria-describedby": _ ? _(_) : void 0,
  };
}
function _(_, _) {
  let {
      accessibilityId: _,
      label: _,
      description: _,
      icon: _,
      children: _,
      childrenLayout: _,
      inlineWrap: _,
      childrenContainerWidth: _,
      spacingBetweenLabelAndChild: _,
      padding: _,
      disabled: _,
      bottomSeparator: _,
      className: _,
      highlightOnFocus: _,
      indentLevel: _,
      verticalAlignment: _,
      iconLocation: _,
      tooltip: _,
      explainer: _,
      explainerTitle: _,
      transparentBackground: _,
      ..._
    } = _,
    _ = _(),
    _ = _ ?? `inline`,
    _ = _ ?? `front`,
    _ = _ == `front` && !!_,
    _ = _ == `before-children` && !!_,
    _ = _ == `inline` && !!_,
    _ = _ == `below` && !!_,
    _ = _ ?? `keep-inline`,
    _ = !!(_.onClick || _.onActivate || _.focusable),
    _ = (_ && !!_) || !!_,
    _ = _ ?? `min`,
    _ = _ ?? `standard`,
    _ = _ ?? `standard`,
    _ = _ ?? `standard`,
    _ = _ ?? !0,
    _ = _ ?? 0,
    _ = _ ?? `center`,
    _ = !_ && !_,
    _ = _(_ ?? _, _),
    _ = _.useRef(void 0),
    _ = _(_, _.navRef),
    _ = _.useCallback(
      (_) => {
        _.current && (_.current?.TakeFocus(), _.preventDefault());
      },
      [_],
    ),
    _ = (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: _(`-mv7APUvgY0-`, `p1s7AZ5q4Ao-`),
            children: _,
          }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      ],
    });
  return (0, _.jsxs)(_, {
    focusable: _,
    noFocusRing: !0,
    scrollIntoViewWhenChildFocused: !0,
    onActivate: _.onClick ? (_) => _.onClick?.(_) : void 0,
    ref: _,
    onMouseDown: _ ? void 0 : _,
    ..._,
    ..._,
    navRef: _,
    className: _(
      _,
      _,
      _ && `-EO4FT59VAE-`,
      _ && `tZJ0p3KkoMw-`,
      _ && void 0,
      _ && `_9pFiF1gbI9o-`,
      _ == `center` && `FMpWcLvqFIY-`,
      _ == `shift-children-below` && `JWxNjd0AnXw-`,
      _ == `standard` && `CF7n8ePpMiI-`,
      _ == `thick` && `MYSrDGxxWHs-`,
      _ == `fixed` && `_85iACv78fHc-`,
      _ == `max` && `eM2QEVfngbM-`,
      _ == `standard` && `umeu-qXKQjo-`,
      _ == `standard` && `yEWiNUJm9rE-`,
      _ == `compact` && `Lp7SIUigpfY-`,
      _ && `DEO4wTNKBQY-`,
      _ && `ypXE1Kh2LZY-`,
      _ && `-ELZx7BKnW4-`,
    ),
    style: {
      "--indent-level": _,
    },
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `bQjqavPfRH4-`,
              children: (0, _.jsxs)(`div`, {
                className: `ApdBYSq-TZo-`,
                _: _(_),
                children: [
                  _ &&
                    (0, _.jsx)(`div`, {
                      className: _(`-mv7APUvgY0-`, `g1VEgslk2-k-`),
                      children: _,
                    }),
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      tooltip: _,
                    }),
                ],
              }),
            }),
          _ && _,
          _ &&
            (0, _.jsx)(_, {
              accessibilityId: _(_),
              children: _,
            }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `VG45c-H2PHw-`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { accessibilityId: _, className: _, children: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    _: _(_),
    children: _,
  });
}
function _(_, _) {
  let _ = _(),
    _ = _.useCallback(() => {
      _(_, _, _.ownerWindow ?? window);
    }, [_, _, _]);
  return _ == null
    ? {}
    : {
        onOptionsButton: _,
        onOptionsActionDescription: _(`#Field_MoreInfo_Action`),
      };
}
_.forwardRef(function (_, _) {
  return (0, _.jsx)(_, {
    ref: _,
    accessibilityId: null,
    ..._,
  });
});
function _(_, _, _ = [`label`, `button`]) {
  let _ = _.useId(),
    _ = _(_, _),
    _ = {
      _: _,
      "aria-labelledby": ``,
    };
  return (
    (_[`aria-labelledby`] = _.map((_) =>
      _ == `button` ? _ : _[`aria-labelledby`],
    ).join(` `)),
    (_[`aria-describedby`] = _[`aria-describedby`]),
    _
  );
}
_.forwardRef(function (_, _) {
  let {
      label: _,
      description: _,
      explainer: _,
      icon: _,
      layout: _,
      disabled: _,
      onActivate: _,
      indentLevel: _,
      bottomSeparator: _,
      highlightOnFocus: _,
      childrenContainerWidth: _,
      padding: _,
      inlineWrap: _,
      transparentBackground: _,
      fieldClassName: _,
      fieldChildren: _,
      accessibilityNameOrder: _,
      ..._
    } = _,
    { refWithValue: _, refForElement: _ } = _(_),
    _ = _.useId();
  return (0, _.jsxs)(_, {
    accessibilityId: _,
    label: _,
    indentLevel: _,
    description: _,
    icon: _,
    bottomSeparator: _,
    highlightOnFocus: _,
    childrenLayout: _ ?? `inline`,
    childrenContainerWidth: _ ?? `min`,
    onMouseDown: (_) => {
      (_.current?.focus(), _.preventDefault());
    },
    padding: _,
    inlineWrap: _,
    explainer: _,
    className: _,
    disabled: _,
    transparentBackground: _,
    onActivate: _ ? _ : void 0,
    children: [
      (0, _.jsx)(_, {
        accessibilityId: _,
        ..._,
        ref: _,
      }),
      _,
    ],
  });
});
var _ = _.forwardRef(function (_, _) {
    let {
        accessibilityId: _,
        label: _,
        description: _,
        explainer: _,
        icon: _,
        layout: _,
        disabled: _,
        onActivate: _,
        indentLevel: _,
        bottomSeparator: _,
        highlightOnFocus: _,
        childrenContainerWidth: _,
        padding: _,
        inlineWrap: _,
        fieldClassName: _,
        fieldChildren: _,
        accessibilityNameOrder: _,
        ..._
      } = _,
      _ = _(_, _, _);
    return (0, _.jsx)(_, {
      ..._,
      ..._,
      disabled: _,
      ref: _,
    });
  }),
  _ = _.forwardRef(function (_, _) {
    let {
        label: _,
        description: _,
        icon: _,
        layout: _,
        bottomSeparator: _,
        highlightOnFocus: _,
        ..._
      } = _,
      { refWithValue: _, refForElement: _ } = _(_),
      _ = _.useId();
    return (0, _.jsx)(_, {
      accessibilityId: _,
      label: _,
      description: _,
      icon: _,
      bottomSeparator: _,
      highlightOnFocus: _,
      childrenLayout: _ ?? `inline`,
      childrenContainerWidth: `fixed`,
      onMouseDown: (_) => {
        (_.current?.element?.focus(), _.preventDefault());
      },
      children: (0, _.jsx)(_, {
        ..._(_, _),
        ..._,
        ref: _,
      }),
    });
  });
_.createContext(null);
var _ = `NpNHKlakUCs-`;
function _(_, _) {
  for (let _ of _.options)
    if ((_(_) && _.data === _) || (_(_) && _(_, _))) return !0;
  return !1;
}
function _(_) {
  let _ = (_) =>
    _?.map((_, _) =>
      _(_)
        ? (0, _.jsx)(_, {}, _)
        : _(_)
          ? (0, _.jsx)(
              _,
              {
                role: `option`,
                onSelected: (_) => _.onValueSelected && _.onValueSelected(_, _),
                selected: _.selectedValue === _.data,
                children: (0, _.jsx)(_.Fragment, {
                  children: _.label,
                }),
              },
              _,
            )
          : _(_)
            ? (0, _.jsx)(
                _,
                {
                  label: _.label,
                  selectedWithin: _(_, _.selectedValue),
                  children: _(_.options),
                },
                _,
              )
            : null,
    );
  return (0, _.jsx)(_, {
    onCancel: _.onCancel,
    role: `listbox`,
    children: _(_.rgOptions),
  });
}
_.forwardRef(function (_, _) {
  let {
      className: _,
      opened: _,
      arrowClassName: _,
      "aria-label": _,
      "aria-labelledby": _ = ``,
      ..._
    } = _,
    _ = _.useId(),
    _ = _.useId();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        _: _,
        className: _(_, _),
        "aria-labelledby": _ || _,
        ..._,
        ref: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: `DialogDropDown_CurrentDisplay`,
              children: _.children,
            }),
            (0, _.jsx)(_, {
              direction: `down`,
            }),
          ],
        }),
      }),
      _ &&
        (0, _.jsx)(`div`, {
          _: _,
          style: {
            display: `none`,
          },
          children: _,
        }),
    ],
  });
});
var _ = `Cw4uxrkspko-`,
  _ = _.forwardRef(function (_, _) {
    let { className: _, ..._ } = _,
      _ = _.useRef(void 0),
      _ = _(_, _),
      [_, _] = _.useState(!1),
      _ = _.useCallback(() => {
        (_((_) => !_), window.setTimeout(() => _.current?.Focus(), 1));
      }, []);
    return (0, _.jsx)(_, {
      className: _,
      onOptionsButton: _,
      onOptionsActionDescription: _(
        _ ? `#Login_HidePassword` : `#Login_ShowPassword`,
      ),
      children: (0, _.jsx)(_, {
        autoComplete: `off`,
        ref: _,
        inlineControls: (0, _.jsx)(_, {
          "aria-label": _(_ ? `#Login_HidePassword` : `#Login_ShowPassword`),
          className: _,
          onPointerDown: _,
          onOKButton: _,
          children: _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
        }),
        ..._,
        type: _ ? `text` : `password`,
      }),
    });
  });
_.forwardRef(function (_, _) {
  let {
      label: _,
      className: _,
      description: _,
      icon: _,
      bottomSeparator: _,
      highlightOnFocus: _,
      ..._
    } = _,
    _ = _.useId();
  return (0, _.jsx)(_, {
    accessibilityId: _,
    className: _,
    label: _,
    description: _,
    icon: _,
    bottomSeparator: _,
    highlightOnFocus: _,
    childrenContainerWidth: `fixed`,
    children: (0, _.jsx)(_, {
      ..._(_, _),
      ..._,
      ref: _,
    }),
  });
});
function _(_) {
  let _ = _.split(`.`);
  if (_.length > 4) return !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    if (_ == ``) {
      if (_ == _.length - 1) continue;
      return !1;
    }
    if (!/^[0-9]*$/.test(_)) return !1;
    let _ = parseInt(_);
    if (!(_ >= 0 && _ <= 255)) return !1;
  }
  return !0;
}
_.forwardRef(function (_, _) {
  let { className: _, value: _, ..._ } = _,
    _ = _ ?? ``,
    _ = (_) => {
      let _ = _.target.value;
      if (_(_)) _.onChange && _.onChange(_);
      else {
        _.target.value = _;
        return;
      }
    };
  return (0, _.jsx)(_, {
    autoComplete: `off`,
    value: _,
    ref: _,
    placeholder: `   .   .   .   `,
    ..._,
    onChange: _,
  });
});
var _ = `500ms`,
  _ = `lOrYsgAQ7xY-`,
  _ = `Ct1W6wKv3q8-`,
  _ = `HsioiS8tolM-`,
  _ = `bhfWNpXbH4Q-`,
  _ = `_064mqllehJ0-`,
  _ = `_0-HS3A7ajm4-`,
  _ = `tfvGMBsZSsA-`,
  _ = `s6-ODwm5a2Y-`,
  _ = `_1MCEBwX9aDk-`,
  _ = `BAxvn17x9dE-`,
  _ = `_4fkFHifv83g-`,
  _ = `dNORf-cVwV8-`,
  _ = `MG-bKpXBaVY-`,
  _ = `yUOhceFAk-c-`,
  _ = `YTUnL3ejwlA-`,
  _ = `_3N7jdKv05Dw-`,
  _ = `Ns-2I9SmOro-`;
function _(_) {
  let _ = _(),
    [_, _] = _.useState(() => !!_(_?.location.pathname, _));
  return (
    _.useEffect(() => _?.listen((_) => _(!!_(_.pathname, _))), [_, _]), _
  );
}
function _(_, _, _) {
  let _ = `${_}_HistoryValue`,
    _ = _(),
    _ = _(),
    _ = (_.state && _.state[_]) ?? _,
    _ = _.useRef(!1),
    _ = _.useRef(void 0),
    _ = _.useRef(void 0),
    _ = _.useCallback(
      (_) => {
        if (_.current && ((_.current = _), !_.current)) {
          let _ = _.location.pathname;
          _.current = window.setTimeout(() => {
            (_.location.pathname != _ ||
              (_.location.state && _.location.state[_] == _.current) ||
              _.replace(_.location.pathname, {
                ...(_.location.state || {}),
                [_]: _.current,
              }),
              (_.current = void 0));
          }, _);
        }
      },
      [_, _, _],
    );
  return (
    _.useEffect(() => {
      _.current = !0;
    }, []),
    [_, _]
  );
}
var _ = new _(`ScrollSnap`).Debug;
function _(_, _) {
  let _ = _.useRef(void 0);
  return _.useCallback(
    (_, _) => {
      let _ = `sine`;
      if ((_.current && (_.current.Cancel(), (_ = `linear`)), !_.current))
        return;
      (_ === void 0 && (_ = _.current.scrollTop),
        _ === void 0 && (_ = _.current.scrollLeft));
      let _ = Math.max(
        Math.abs(_.current.scrollTop - _),
        Math.abs(_.current.scrollLeft - _),
      );
      if (_ > 0) {
        let _ = Math.max(Math.min((_ / 1e3) * 200, 500), 300);
        ((_.current = new _(
          _.current,
          {
            scrollTop: _,
            scrollLeft: _,
          },
          {
            msDuration: _,
            timing: _,
            onComplete: _,
          },
        )),
          _.current.Start());
      } else _ && _();
    },
    [_, _],
  );
}
function _(_, _ = `smooth`, _, _) {
  let _ = (_ ?? 30) / 100,
    _ = _.useRef(void 0),
    _ = _.useRef(void 0),
    _ = _.useCallback(() => {
      ((_.current = void 0), (_.current = void 0));
    }, []),
    _ = _(_, _);
  return _.useCallback(
    (_) => {
      if ((_ && !_(_)) || _.defaultPrevented || !_.current) return !1;
      let {
          scrollTop: _,
          scrollHeight: _,
          clientHeight: _,
          scrollLeft: _,
          scrollWidth: _,
          clientWidth: _,
        } = _.current,
        _ = _.current ?? _,
        _ = _.current ?? _;
      switch (_.detail.button) {
        case _.DIR_UP:
          if (_ <= 2) return !1;
          _.current = Math.max(0, _ - _ * _);
          break;
        case _.DIR_DOWN:
          if (_ >= _ - _ - 2) return !1;
          _.current = Math.min(_ - _, _ + _ * _);
          break;
        case _.DIR_LEFT:
          if (_ <= 2) return !1;
          _.current = Math.max(0, _ - _ * _);
          break;
        case _.DIR_RIGHT:
          if (_ >= _ - _ - 2) return !1;
          _.current = Math.min(_ - _, _ + _ * _);
          break;
        default:
          return !1;
      }
      return (
        _(
          `ScrollOnGamepadDirection top:${_.current} left:${_.current}, behavior:${_ ?? `auto`} `,
          _.current,
        ),
        !_ || _ == `smooth`
          ? _(_.current, _.current)
          : (_.current.scrollTo({
              top: _.current,
              left: _.current,
              behavior: `auto`,
            }),
            _()),
        !0
      );
    },
    [_, _, _, _, _, _],
  );
}
function _() {
  let _ = _.useRef({
      width: 0,
      height: 0,
    }),
    _ = _.useRef(null),
    _ = _.useCallback(
      (_) => {
        if (!_.current?.BFocusWithin()) return;
        let _ = Math.round(_.contentRect.width),
          _ = Math.round(_.contentRect.height),
          _ = Math.abs(_ - _.current.width),
          _ = Math.abs(_ - _.current.height);
        (_ >= 1 || _ >= 1) &&
          ((_.current = {
            width: _,
            height: _,
          }),
          _(
            `KeepFocusedElementInViewOnResize scrolling focused element into view due to resize of`,
            _.target,
          ),
          _.current.Node()?.GetLastFocusElement()?.scrollIntoView({
            behavior: `auto`,
            block: `nearest`,
          }));
      },
      [_],
    );
  return {
    ref: _(_),
    navRef: _,
  };
}
var _ = `_57zTbik3FTE-`,
  _ = `_2bMiEsk5eQU-`,
  _ = `rifDlMuk-r8-`,
  _ = `WbXmiUakQYk-`,
  _ = _.forwardRef(function (_, _) {
    let {
        scrollDirection: _,
        scrollPaddingTop: _,
        scrollPaddingRight: _,
        scrollPaddingBottom: _,
        scrollPaddingLeft: _,
        className: _,
        children: _,
        style: _,
        ..._
      } = _,
      _;
    switch (_) {
      case `x`:
        _ = _;
        break;
      case `both`:
        _ = _;
        break;
      default:
        _ = _;
    }
    let _ = {
      ..._,
    };
    ((_ || _ === 0) && (_.scrollPaddingTop = _),
      (_ || _ === 0) && (_.scrollPaddingRight = _),
      (_ || _ === 0) && (_.scrollPaddingBottom = _),
      (_ || _ === 0) && (_.scrollPaddingLeft = _));
    let { ref: _, navRef: _ } = _(),
      _ = _(_, _.navRef),
      _ = _(_, _);
    return (0, _.jsx)(_, {
      ..._,
      style: _,
      className: (0, _.default)(_, _, _),
      ref: _,
      navRef: _,
      children: (0, _.jsx)(_, {
        children: _,
      }),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    let { scrollStepPercent: _, scrollBehavior: _, ..._ } = _,
      _ = _.useRef(null),
      _ = _(
        _,
        _,
        _,
        _.useCallback((_) => _.currentTarget != _.target, []),
      ),
      _ = _(_, _);
    return (0, _.jsx)(_, {
      ..._,
      onGamepadDirection: _,
      ref: _,
      scrollIntoViewType: _.NoTransformSparseContent,
    });
  });
(_.forwardRef(function (_, _) {
  let { name: _, msScrollRestoreDelay: _, onScroll: _, ..._ } = _;
  return (0, _.jsx)(_, {
    name: _,
    msScrollRestoreDelay: _,
    parentOnScroll: _,
    refDiv: _,
    children: (_, _) =>
      (0, _.jsx)(_, {
        ..._,
        onScroll: _,
        ref: _,
      }),
  });
}),
  _.forwardRef(function (_, _) {
    let { name: _, msScrollRestoreDelay: _, onScroll: _, ..._ } = _;
    return (0, _.jsx)(_, {
      name: _,
      msScrollRestoreDelay: _,
      parentOnScroll: _,
      refDiv: _,
      children: (_, _) =>
        (0, _.jsx)(_, {
          ..._,
          onScroll: _,
          ref: _,
        }),
    });
  }));
function _(_) {
  let {
      name: _,
      msScrollRestoreDelay: _,
      parentOnScroll: _,
      refDiv: _,
      children: _,
    } = _,
    [_, _] = _(`${_}ScrollTop`, 250, 0),
    [_, _] = _(`${_}ScrollLeft`, 250, 0),
    _ = _.useRef(0),
    _ = _.useRef(0),
    _ = _.useRef(void 0),
    _ = _.useCallback(
      (_) => {
        let { scrollTop: _, scrollLeft: _ } = _.currentTarget;
        (_(_), (_.current = _), _(_), (_.current = _), _ && _(_));
      },
      [_, _, _],
    );
  _.useLayoutEffect(() => {
    let _ = function () {
      _.current &&
        (_(
          _.current.scrollHeight >= _,
          `Element is ${_.current.scrollHeight} high but trying to restore scrollTop of ${_}, element may need more time to lay out.`,
          _.current,
        ),
        (_.current = _),
        (_.current = _),
        _.current.scrollTo({
          top: _,
          left: _,
          behavior: `auto`,
        }),
        _.current.dispatchEvent(new UIEvent(`scroll`)));
    };
    (_ != _.current || _ != _.current) && (_ ? window.setTimeout(_, _) : _());
  }, [_, _, _]);
  let _ = _(_, _);
  return _.useMemo(() => _(_, _), [_, _, _]);
}
var _ = _.forwardRef(function (_, _) {
  let {
      onExplicitFocusLevelChanged: _,
      onOKButton: _,
      onCancelButton: _,
      navRef: _,
      focusable: _,
      ..._
    } = _,
    _ = _.useRef(null),
    { fnOnOKButton: _, fnOnCancelButton: _ } = _({
      navRefPanel: _,
      onOKButton: _,
      onCancelButton: _,
      onExplicitFocusLevelChanged: _,
    }),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    ..._,
    onOKButton: _,
    onCancelButton: _,
    navRef: _,
    ref: _,
    focusable: _ !== !1,
  });
});
_.forwardRef(function (_, _) {
  let { onOKButton: _, onCancelButton: _, navRef: _, focusable: _, ..._ } = _,
    _ = _.useRef(null),
    _ = _.useRef(null),
    { fnOnOKButton: _, fnOnCancelButton: _ } = _({
      navRefPanel: _,
      onOKButton: _,
      onCancelButton: _,
      fnFocusChildren: _.useCallback((_, _) => _.FocusVisibleChild(), []),
    }),
    _ = _(_, _),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    ..._,
    onOKButton: (_) => _?.(_),
    onCancelButton: _,
    navRef: _,
    ref: _,
    focusable: _ !== !1,
  });
});
function _(_) {
  let {
    navRefPanel: _,
    onOKButton: _,
    onCancelButton: _,
    onExplicitFocusLevelChanged: _,
    fnFocusChildren: _,
  } = _;
  return (
    (_ ??= _),
    {
      fnOnOKButton: _.useCallback(
        (_) => {
          let _ = _.current;
          return _?.BHasFocus() && _(_, _.detail.button)
            ? (_ && _(!0), !0)
            : _
              ? _(_)
              : !1;
        },
        [_, _, _, _],
      ),
      fnOnCancelButton: _.useCallback(
        (_) => {
          let _ = _.current;
          return _.Node().GetFocusable() == `self`
            ? _.BFocusWithin() && !_.BHasFocus() && _.TakeFocus(_.detail.button)
              ? (_ && _(!1), !0)
              : _
                ? _(_)
                : !1
            : (console.warn(
                `PanelGroup is not focusable - ignoring cancel action`,
              ),
              !1);
        },
        [_, _, _],
      ),
    }
  );
}
function _(_, _) {
  return _.ChildTakeFocus(_);
}
var _ = 10,
  _ = 1,
  _ = !0,
  _ = 0.01,
  _ = 0.05;
_(_);
function _(_, _) {
  return _ < 0 ? 0 : _ > 1 ? 1 : _ == 0 ? _ : Math.round(_ / _) * _;
}
function _(_, _, _) {
  let _ = _ + _ * (_ - _);
  return Number.parseFloat(_.toFixed(10));
}
function _(_, _, _) {
  return (_ - _) / (_ - _);
}
var _ = class extends _.Component {
  m_refSlider = _.createRef();
  m_refHandle = _.createRef();
  m_navRefSlider = _.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = void 0;
  m_eDragMode = 0;
  m_vTouchStartPosition = _();
  m_fStartValue;
  m_fLatestUserValue;
  m_fLatestOnChangeValue;
  m_bInnerSliderHasFocus = !1;
  m_nRepeatCount = 0;
  m_fInitalRepeatTime = void 0;
  get showHandle() {
    return this.props.showHandle ?? !0;
  }
  get isKeyNavTarget() {
    return this.props.isKeyNavTarget ?? !0;
  }
  get validRange() {
    return this.props.min < this.props.max;
  }
  get range() {
    return this.validRange ? this.props.max - this.props.min : 0;
  }
  get step() {
    return Math.abs(this.props.step ?? _);
  }
  get stepSound() {
    return this.props.stepSound ?? _;
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let _ = this.props.dpadStep ?? this.step,
      _ = _ > 0 ? _ / this.range : _;
    return Math.max(_, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let _ =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : _(this.props.value, this.props.min, this.props.max);
    return _(this.props.min, this.props.max, _);
  }
  get normalizedDefaultValue() {
    let _ = this.props.resetValue;
    if (!(_ == null || isNaN(_) || _ < this.props.min || _ > this.props.max))
      return _(this.props.min, this.props.max, _);
  }
  get normalizedSliderOrigin() {
    let _ = _(0, this.props.min, this.props.max);
    return _(this.props.min, this.props.max, _);
  }
  get CanResetToDefault() {
    return (
      this.props.resetValue != null && this.props.value != this.props.resetValue
    );
  }
  get SliderChangeSource() {
    switch (this.m_eDragMode) {
      case 1:
        return 1;
      case 3:
      case 2:
        return 0;
      case 4:
        return 2;
      case 0:
        return;
    }
  }
  constructor(_) {
    (super(_),
      (this.m_fStartValue = this.props.value),
      (this.m_fLatestUserValue = this.props.value),
      (this.m_fLatestOnChangeValue = this.props.value));
  }
  RecomputeSliderBounds() {
    ((this.m_sliderBounds = this.m_refSlider.current?.getBoundingClientRect()),
      (this.m_handleBounds =
        this.m_refHandle.current?.getBoundingClientRect()));
  }
  SetDragMode(_) {
    if (_ != this.m_eDragMode) {
      switch (
        ((this.m_eDragMode = _),
        _ != 0 &&
          this.props.onChangeStart &&
          this.props.onChangeStart(this.SliderChangeSource),
        _)
      ) {
        case 1:
        case 3:
        case 2:
        case 4:
          (this.RecomputeSliderBounds(),
            (this.m_fStartValue = this.props.value),
            (this.m_fLatestUserValue = this.props.value));
      }
      switch (_) {
        case 1:
          (this.m_refSlider.current?.ownerDocument?.addEventListener(
            `mousemove`,
            this.OnWindowMouseMove,
            {
              passive: !1,
            },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              `mouseup`,
              this.OnWindowMouseUp,
              {
                passive: !1,
              },
            ));
          break;
        case 2:
        case 3:
          (this.m_refSlider.current?.ownerDocument?.addEventListener(
            `touchmove`,
            this.OnWindowTouchMove,
            {
              passive: !1,
            },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              `touchend`,
              this.OnWindowTouchEnd,
              {
                passive: !1,
              },
            ));
          break;
        case 0:
          this.RemoveDocumentEventListeners();
      }
    }
  }
  OnGamepadDirection(_) {
    if (this.props.disabled) return !1;
    let _ = 0;
    if (_.detail.button == _.DIR_LEFT) _ = -1;
    else if (_.detail.button == _.DIR_RIGHT) _ = 1;
    else return !1;
    _.detail.is_repeat
      ? (this.m_nRepeatCount == 0 &&
          (this.m_fInitalRepeatTime = performance.now()),
        this.m_nRepeatCount++)
      : ((this.m_nRepeatCount = 0),
        (this.m_fInitalRepeatTime = performance.now()));
    let _ = performance.now() - this.m_fInitalRepeatTime,
      _ = _(_, 0, 2e3, 500, 250),
      _ = 2 ** Math.floor(_ / _),
      _ = this.normalizedDpadStep * _,
      _ = _(_, this.normalizedDpadStep, _) * _,
      _ = _(this.normalizedStep, this.normalizedClampedValue + _),
      _ = _(this.props.min, this.props.max, _);
    if (
      ((_ = _(
        _,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      _ != this.props.value)
    ) {
      this.m_eDragMode == 0 && this.SetDragMode(4);
      let _ = _ > this.m_fLatestUserValue;
      (_.PlayNavSound(_ ? _.SliderUp : _.SliderDown),
        (this.m_fLatestUserValue = _),
        this.FireOnChange(_, 2));
    } else _.PlayNavSound(_.FailedNav);
    return !0;
  }
  FireOnChange(_, _) {
    this.m_fLatestOnChangeValue != _ &&
      ((this.m_fLatestOnChangeValue = _),
      this.props.onChange && this.props.onChange(_, _));
  }
  ComputeNormalizedValueForMousePosition(_) {
    if (this.m_sliderBounds == null) return 0;
    let _ = _ / this.GetZoom(),
      _ = this.m_sliderBounds.right - this.m_sliderBounds.left,
      _ =
        this.m_handleBounds == null
          ? 0
          : this.m_handleBounds.right - this.m_handleBounds.left,
      _ = _ - _,
      _ = (_ - this.m_sliderBounds.left - _ / 2) / _;
    return this.m_refSlider.current?.matches(`:dir(rtl)`) ? 1 - _ : _;
  }
  BShouldTriggerHapticOnSnap() {
    let _ = this.normalizedStep;
    return _ > 0 && _ >= 1 / 40;
  }
  PlayHaptic(_) {
    this.m_refSlider.current?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
      _,
      0,
    );
  }
  UpdateSliderValueForPosition(_) {
    if (this.props.disabled || !this.m_refSlider.current) return;
    let _ = this.ComputeNormalizedValueForMousePosition(_),
      _ = _(this.normalizedStep, _),
      _ = _(this.props.min, this.props.max, _),
      _ = this.props.clampMin ?? this.props.min,
      _ = this.props.clampMax ?? this.props.max;
    if (((_ = _(_, _, _)), _ != this.props.value)) {
      let _ = _ > this.props.value,
        _ = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !_) &&
          this.props.stepSound &&
          _.PlayNavSound(_ ? _.SliderUp : _.SliderDown),
        this.m_eDragMode == 1 || this.m_eDragMode == 3)
      ) {
        let _ = !1;
        ((_ == _ || _ == _) &&
        this.m_fLatestUserValue > _ &&
        this.m_fLatestUserValue < _ &&
        !_
          ? (this.PlayHaptic(_.SlidingEdge), (_ = !0))
          : !this.BShouldTriggerHapticOnSnap() &&
            this.m_fLatestUserValue >= _ &&
            this.m_fLatestUserValue <= _ &&
            Math.floor(((this.m_fLatestUserValue - _) / (_ - _)) * 40) !=
              Math.floor(((_ - _) / (_ - _)) * 40) &&
            !_ &&
            (this.PlayHaptic(_.Sliding), (_ = !0)),
          !_ && !_ && (this.PlayHaptic(_.Snap), (_ = !0)));
      }
      ((this.m_fLatestUserValue = _),
        this.FireOnChange(_, this.SliderChangeSource));
    }
  }
  OnWindowMouseMove(_) {
    this.UpdateSliderValueForPosition(_.clientX);
  }
  OnWindowMouseUp(_) {
    this.m_eDragMode != 0 && this.Complete();
  }
  OnMouseDown(_) {
    _.button == 0 &&
      (this.props.disabled ||
        (_.preventDefault(),
        this.SetDragMode(1),
        this.UpdateSliderValueForPosition(_.clientX)));
  }
  OnTouchStart(_) {
    if (this.props.disabled || _.touches.length != 1) return;
    _.preventDefault();
    let _ = this.ComputeNormalizedValueForMousePosition(_.touches[0].clientX);
    _ < 0 ||
      _ > 1 ||
      (this.SetDragMode(2),
      (this.m_vTouchStartPosition = {
        _: _.touches[0].clientX,
        _: _.touches[0].clientY,
      }));
  }
  OnWindowTouchMove(_) {
    if (_.touches.length == 1) {
      switch (this.m_eDragMode) {
        case 2:
          let _ = {
            _: _.touches[0].clientX,
            _: _.touches[0].clientY,
          };
          if (_(this.m_vTouchStartPosition, _) >= _) {
            let _ = _(this.m_vTouchStartPosition, _);
            Math.abs(_._) > Math.abs(_._)
              ? (this.SetDragMode(3), this.m_refSlider.current?.focus())
              : this.SetDragMode(0);
          }
          break;
        case 3:
          this.UpdateSliderValueForPosition(_.touches[0].clientX);
      }
      _.preventDefault();
    }
  }
  OnWindowTouchEnd(_) {
    this.m_eDragMode != 0 && this.Complete();
  }
  Complete() {
    let _ = this.m_eDragMode != 0;
    (this.FireOnChange(this.m_fLatestUserValue, this.SliderChangeSource),
      this.props.onChangeComplete &&
        this.props.onChangeComplete(
          this.m_fLatestUserValue,
          this.SliderChangeSource,
        ),
      this.SetDragMode(0));
    let _ = this.step == 0;
    if (
      this.m_fLatestUserValue != this.m_fStartValue &&
      (_ || !this.props.stepSound) &&
      _
    ) {
      let _ = this.m_fLatestUserValue > this.m_fStartValue;
      _.PlayNavSound(_ ? _.SliderUp : _.SliderDown);
    }
  }
  RemoveDocumentEventListeners() {
    (this.m_refSlider.current?.ownerDocument?.removeEventListener(
      `mousemove`,
      this.OnWindowMouseMove,
    ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        `touchmove`,
        this.OnWindowTouchMove,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        `mouseup`,
        this.OnWindowMouseUp,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        `touchend`,
        this.OnWindowTouchEnd,
      ));
  }
  GetZoom() {
    return (
      this.m_fZoom === void 0 &&
        this.m_refSlider.current &&
        (this.m_fZoom = _(this.m_refSlider.current)),
      this.m_fZoom ?? 1
    );
  }
  componentWillUnmount() {
    this.RemoveDocumentEventListeners();
  }
  BlurInnerSlider() {
    this.m_navRefSlider.current?.ParentTakeFocus();
  }
  OnInnerSliderFocus() {
    ((this.m_bInnerSliderHasFocus = !0),
      (this.m_fStartValue = this.props.value));
  }
  OnInnerSliderBlur() {
    ((this.m_bInnerSliderHasFocus = !1),
      (this.m_fStartValue != this.m_fLatestUserValue ||
        this.m_eDragMode != 0) &&
        this.Complete());
  }
  ResetToDefault() {
    if (!this.CanResetToDefault || this.m_eDragMode != 0) return;
    let _;
    ((this.m_fLatestUserValue = this.props.resetValue),
      (this.m_fLatestOnChangeValue = this.props.value),
      this.FireOnChange(this.props.resetValue, 4),
      this.m_bInnerSliderHasFocus
        ? (_ = this.props.resetValue > this.m_fLatestUserValue)
        : ((_ = this.props.resetValue > this.props.value),
          this.props.onChangeComplete &&
            this.props.onChangeComplete(this.props.resetValue, 4)),
      _.PlayNavSound(_ ? _.SliderUp : _.SliderDown));
  }
  OnContextMenu(_) {
    this.props.resetValue != null &&
      _(
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            disabled: !this.CanResetToDefault,
            onSelected: this.ResetToDefault,
            children: _(`#ResetToDefault`),
          }),
        }),
        _,
      );
  }
  render() {
    let {
        min: _,
        max: _,
        value: _,
        clampMax: _,
        clampMin: _,
        className: _,
        disabled: _,
        dpadStep: _,
        extraNotchPadding: _,
        focusable: _,
        handleType: _,
        innerRef: _,
        isKeyNavTarget: _,
        navRef: _,
        notchCount: _,
        notchLabels: _,
        notchTicksVisible: _,
        onChange: _,
        onChangeComplete: _,
        onChangeStart: _,
        renderNotch: _,
        renderValue: _,
        resetValue: _,
        resetValueAppearance: _ = `top-caret`,
        resetValueSecondaryButtonDisabled: _,
        showBookendLabels: _,
        showHandle: _,
        step: _,
        stepSound: _,
        strValueSuffix: _,
        trackStyleOverride: _,
        trackStyleBackground: _,
        trackForegroundVisible: _ = !0,
        trackTone: _,
        ..._
      } = this.props,
      _ = _ ?? !1,
      _ = _ ?? !_,
      _ = _ ? 2 : _,
      _ = [
        {
          notchIndex: 0,
          label: `${_}`,
        },
        {
          notchIndex: 1,
          label: `${_}`,
        },
      ],
      _ = _ ? _ : _,
      _ = _ ?? !0,
      _ = this.normalizedDefaultValue,
      _ = this.normalizedSliderOrigin,
      _ = _ != null,
      _ = _ == `top-caret`,
      _ = !_,
      _ = _ || _,
      _ = {},
      _ = this.CanResetToDefault && !_;
    _ && (_[_.SECONDARY] = _(`#ResetToDefault`));
    let _ = `${_} SliderHandle`,
      _ = `${_} SliderHandleContainer `;
    _ == `verticalline`
      ? ((_ = `${_} SliderHandle`), (_ = `${_} SliderHandleContainer `))
      : (_ == `leftparen` || _ == `rightparen`) &&
        ((_ = _(_, _ == `leftparen` ? _ : _, `SliderHandle`)),
        (_ = _(_, _ == `leftparen` ? _ : _, `SliderHandleContainer`)));
    let _ = _(_);
    return (0, _.jsx)(_, {
      noFocusRing: !0,
      className: _(_, `SliderControlPanelGroup`, _),
      navRef: _,
      onMouseDown: (_) => this.OnMouseDown(_.nativeEvent),
      onTouchStart: (_) => this.OnTouchStart(_.nativeEvent),
      onOKActionDescription: _ ? null : _(`#Slider_AdjustSlider`),
      focusable: _,
      childFocusDisabled: _ || !_,
      onContextMenu: this.OnContextMenu,
      onOKButton: _ ? () => _.PlayNavSound(_.FailedNav) : void 0,
      onSecondaryButton: _ ? this.ResetToDefault : void 0,
      onSecondaryActionDescription: _ ? _(`#ResetToDefault`) : void 0,
      actionDescriptionMap: _,
      "aria-roledescription": _(`#Slider_Button`),
      "aria-labelledby": _[`aria-labelledby`],
      "aria-label": _[`aria-label`],
      children: (0, _.jsxs)(_, {
        role: `slider`,
        "aria-valuenow": _,
        "aria-valuetext": _,
        ..._,
        className: _(
          _,
          _ && `_3xlF3xf0oqs-`,
          _ && `v-Z71UJwoeE-`,
          _ && _ && `L1H8c1tG81w-`,
          _ && _ && _.side == `left` && `Q8VDUuiGgkQ-`,
          _ && _ && _.side != `left` && `Mjp7w5cCo5w-`,
          !_ && `_2DsxUL5BQgE-`,
        ),
        focusable: this.isKeyNavTarget,
        noFocusRing: !0,
        onFocus: this.OnInnerSliderFocus,
        onBlur: this.OnInnerSliderBlur,
        style: {
          "--normalized-slider-value": this.normalizedClampedValue,
          "--normalized-slider-default-value": _,
          "--normalized-slider-origin": _,
          "--default-value-track-color": _ ? _.trackForegroundColor : void 0,
          "--slider-extra-notch-padding": _ ?? `0px`,
        },
        ref: _(this.m_refSlider, _),
        navRef: this.m_navRefSlider,
        onGamepadDirection: this.OnGamepadDirection,
        onOKButton: this.BlurInnerSlider,
        onOKActionDescription: null,
        onCancelButton: this.BlurInnerSlider,
        onCancelActionDescription: _(`#ActionButtonLabelDone`),
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_, `SliderControl`),
            children: [
              (0, _.jsx)(`div`, {
                className: _(
                  _,
                  _ != null && _ && `amoqVtEqkzM-`,
                  {
                    [_]: _ === `dark`,
                  },
                  _,
                  `SliderTrack`,
                ),
                style: this.props.trackStyleOverride,
              }),
              _ &&
                _ &&
                (0, _.jsx)(`div`, {
                  className: `fabcIwFUsS8-`,
                  children: (0, _.jsx)(`div`, {
                    className: `iCZ9qGvSyRk-`,
                    children: (0, _.jsx)(_, {
                      direction: `down`,
                    }),
                  }),
                }),
              this.validRange &&
                _ != null &&
                !isNaN(_) &&
                this.showHandle &&
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsxs)(`div`, {
                    className: _,
                    ref: this.m_refHandle,
                    children: [
                      _ == `leftparen` && (0, _.jsx)(_, {}),
                      _ == `rightparen` && (0, _.jsx)(_, {}),
                    ],
                  }),
                }),
            ],
          }),
          (0, _.jsx)(_, {
            notchCount: _,
            notchLabels: _,
            sliderValue: this.normalizedClampedValue,
            notchTicksVisible: _,
            renderNotch: _,
          }),
        ],
      }),
    });
  }
};
(_([_], _.prototype, `RecomputeSliderBounds`, null),
  _([_], _.prototype, `SetDragMode`, null),
  _([_], _.prototype, `OnGamepadDirection`, null),
  _([_], _.prototype, `UpdateSliderValueForPosition`, null),
  _([_], _.prototype, `OnWindowMouseMove`, null),
  _([_], _.prototype, `OnWindowMouseUp`, null),
  _([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnTouchStart`, null),
  _([_], _.prototype, `OnWindowTouchMove`, null),
  _([_], _.prototype, `OnWindowTouchEnd`, null),
  _([_], _.prototype, `Complete`, null),
  _([_], _.prototype, `BlurInnerSlider`, null),
  _([_], _.prototype, `OnInnerSliderFocus`, null),
  _([_], _.prototype, `OnInnerSliderBlur`, null),
  _([_], _.prototype, `ResetToDefault`, null),
  _([_], _.prototype, `OnContextMenu`, null));
function _(_) {
  let {
      sliderValue: _,
      notchCount: _,
      notchLabels: _,
      notchTicksVisible: _,
      renderNotch: _,
    } = _,
    _ = _ ?? [];
  if (!_) return null;
  let _ = [];
  for (let _ = 0; _ < _; ++_) {
    let _ = _.find((_) => _.notchIndex == _);
    _.push(
      (0, _.jsx)(
        _,
        {
          notchIndex: _,
          sliderValue: _,
          notchLabel: _,
          notchCount: _,
          notchTicksVisible: _,
          renderNotch: _,
        },
        _,
      ),
    );
  }
  return (0, _.jsx)(_, {
    className: _(_),
    children: _,
  });
}
function _(_) {
  let _ = _.notchIndex <= (_.notchCount - 1) * _.sliderValue,
    _ = _.notchCount <= 3 && !_.notchTicksVisible,
    _ = _ && _.notchIndex == 0,
    _ = _ && _.notchIndex == _.notchCount - 1,
    _ = {
      ..._,
      alignLeftEnd: _,
      alignRightEnd: _,
      active: _,
    };
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `L6aX6lNYkBQ-`),
    children: _.renderNotch
      ? _.renderNotch(_)
      : (0, _.jsx)(_, {
          ..._,
        }),
  });
}
function _(_) {
  let { alignLeftEnd: _, alignRightEnd: _, active: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.notchTicksVisible &&
        (0, _.jsx)(`div`, {
          className: _(`_8QUbXerP35s-`, _ && `Bn3jk5M5rr0-`),
        }),
      _.notchLabel &&
        (0, _.jsx)(`div`, {
          className: _(
            `lIytNTWn4Pk-`,
            _ && `JtuvOS1ZPD0-`,
            _ && `ODeyFZ01cgg-`,
          ),
          children: _.notchLabel?.label,
        }),
    ],
  });
}
_.forwardRef(function (_, _) {
  let {
    label: _,
    labelIndex: _,
    xOffset: _,
    onResize: _,
    OnMouseDown: _,
    OnTouchStart: _,
  } = _;
  _.useEffect(() => {
    _(_);
  }, [_, _]);
  let _ = _.useCallback(
      (_) => {
        _(_);
      },
      [_, _],
    ),
    _ = _(_),
    _ = _(_, _);
  return (0, _.jsx)(`div`, {
    className: _,
    ref: _,
    onMouseDown: _,
    onTouchStart: _,
    style: {
      transform: `translateX(${_}px)`,
    },
    children: (0, _.jsx)(`div`, {
      className: _(_, `CompoundSliderSubSliderLabelInternal`),
      children: _,
    }),
  });
});
var _ = _.forwardRef(function (_, _) {
  let {
      value: _,
      onChange: _,
      disabled: _,
      className: _,
      focusable: _,
      children: _,
      navRef: _,
      autoFocus: _,
      toggleRef: _,
      ..._
    } = _,
    _ = _.useCallback(() => {
      if (!_ && _) {
        let _ = !_;
        (_(_), _.PlayNavSound(_ ? _.ToggleOn : _.ToggleOff));
      }
    }, [_, _, _]);
  return (
    _.useEffect(() => {
      _(_, {
        toggle: _,
      });
    }, [_, _]),
    (0, _.jsxs)(_, {
      ..._,
      autoFocus: _,
      noFocusRing: !0,
      className: _(_, _, {
        [_]: !!_,
        [_]: !!_,
      }),
      onClick: _,
      ref: _,
      navRef: _,
      focusable: _,
      role: `checkbox`,
      "aria-checked": !!_,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
        }),
        (0, _.jsx)(`div`, {
          className: _,
        }),
        _,
      ],
    })
  );
});
function _(_) {
  let _ = !!_.disabled,
    { actionDescriptions: _, gamepadEvents: _ } = _(_),
    _ = _.useId(),
    { autoFocus: _, "aria-expanded": _, "aria-controls": _ } = _;
  return (0, _.jsx)(_, {
    accessibilityId: _,
    className: _.className,
    disabled: _,
    label: _.label,
    icon: _.icon,
    description: _.description,
    explainer: _.explainer,
    explainerTitle: _.explainerTitle,
    padding: _.padding,
    bottomSeparator: _.bottomSeparator,
    highlightOnFocus: _.highlightOnFocus,
    inlineWrap: `keep-inline`,
    onContextMenu: _.onContextMenu,
    actionDescriptionMap: _,
    onClick: _.onClick,
    indentLevel: _.indentLevel,
    transparentBackground: _.transparentBackground,
    ..._,
    children: (0, _.jsx)(_, {
      autoFocus: _,
      "aria-expanded": _,
      "aria-controls": _,
      ..._(_, _),
      onChange: _.OnToggleChange,
      value: _.checked,
      disabled: _,
      navRef: _.navRef,
    }),
  });
}
_(
  [_],
  class extends _ {
    OnToggleChange(_) {
      !this.props.disabled && _ !== this.checked && this.Toggle();
    }
    render() {
      return (0, _.jsx)(_, {
        ...this.props,
        OnToggleChange: this.OnToggleChange,
        checked: this.checked,
      });
    }
  }.prototype,
  `OnToggleChange`,
  null,
);
function _(_) {
  let { children: _, bCenterVertically: _, refElem: _, ..._ } = _,
    _ = _(
      _,
      `DialogContent _DialogLayout`,
      _.className,
      _ && ` _DialogCenterVertically`,
    ),
    { ref: _, navRef: _ } = _(),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    ..._,
    className: _,
    ref: _,
    navRef: _,
    children: (0, _.jsx)(_, {
      className: _(_, `DialogContent_InnerWidth`),
      children: _,
    }),
  });
}
