function _(_) {
  "@babel/helpers - typeof";
  return (
    (_ =
      typeof Symbol == `function` && typeof Symbol.iterator == `symbol`
        ? function (_) {
            return typeof _;
          }
        : function (_) {
            return _ &&
              typeof Symbol == `function` &&
              _.constructor === Symbol &&
              _ !== Symbol.prototype
              ? `symbol`
              : typeof _;
          }),
    _(_)
  );
}
function _(_, _) {
  if (_(_) != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (_(_) != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
function _(_) {
  var _ = _(_, `string`);
  return _(_) == `symbol` ? _ : _ + ``;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    _ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _);
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_) {
  return (
    `Minified Redux error #` +
    _ +
    `; visit https://redux.js.org/Errors?code=` +
    _ +
    ` for the full message or use the non-minified dev environment for full errors. `
  );
}
var _ = (function () {
    return (typeof Symbol == `function` && Symbol.observable) || `@@observable`;
  })(),
  _ = function () {
    return Math.random().toString(36).substring(7).split(``).join(`.`);
  },
  _ = {
    INIT: `@@redux/INIT` + _(),
    REPLACE: `@@redux/REPLACE` + _(),
    PROBE_UNKNOWN_ACTION: function () {
      return `@@redux/PROBE_UNKNOWN_ACTION` + _();
    },
  };
function _(_) {
  if (typeof _ != `object` || !_) return !1;
  for (var _ = _; Object.getPrototypeOf(_) !== null; )
    _ = Object.getPrototypeOf(_);
  return Object.getPrototypeOf(_) === _;
}
function _(_, _, _) {
  var _;
  if (
    (typeof _ == `function` && typeof _ == `function`) ||
    (typeof _ == `function` && typeof arguments[3] == `function`)
  )
    throw Error(_(0));
  if (
    (typeof _ == `function` && _ === void 0 && ((_ = _), (_ = void 0)),
    _ !== void 0)
  ) {
    if (typeof _ != `function`) throw Error(_(1));
    return _(_)(_, _);
  }
  if (typeof _ != `function`) throw Error(_(2));
  var _ = _,
    _ = _,
    _ = [],
    _ = _,
    _ = !1;
  function _() {
    _ === _ && (_ = _.slice());
  }
  function _() {
    if (_) throw Error(_(3));
    return _;
  }
  function _(_) {
    if (typeof _ != `function`) throw Error(_(4));
    if (_) throw Error(_(5));
    var _ = !0;
    return (
      _(),
      _.push(_),
      function () {
        if (_) {
          if (_) throw Error(_(6));
          (_ = !1), _();
          var _ = _.indexOf(_);
          _.splice(_, 1), (_ = null);
        }
      }
    );
  }
  function _(_) {
    if (!_(_)) throw Error(_(7));
    if (_.type === void 0) throw Error(_(8));
    if (_) throw Error(_(9));
    try {
      (_ = !0), (_ = _(_, _));
    } finally {
      _ = !1;
    }
    for (var _ = (_ = _), _ = 0; _ < _.length; _++) {
      var _ = _[_];
      _();
    }
    return _;
  }
  function _(_) {
    if (typeof _ != `function`) throw Error(_(10));
    (_ = _),
      _({
        type: _.REPLACE,
      });
  }
  function _() {
    var _,
      _ = _;
    return (
      (_ = {
        subscribe: function (_) {
          if (typeof _ != `object` || !_) throw Error(_(11));
          function _() {
            _.next && _.next(_());
          }
          return (
            _(),
            {
              unsubscribe: _(_),
            }
          );
        },
      }),
      (_[_] = function () {
        return this;
      }),
      _
    );
  }
  return (
    _({
      type: _.INIT,
    }),
    (_ = {
      dispatch: _,
      subscribe: _,
      getState: _,
      replaceReducer: _,
    }),
    (_[_] = _),
    _
  );
}
function _(_, _) {
  return function () {
    return _(_.apply(this, arguments));
  };
}
function _(_, _) {
  if (typeof _ == `function`) return _(_, _);
  if (typeof _ != `object` || !_) throw Error(_(16));
  var _ = {};
  for (var _ in _) {
    var _ = _[_];
    typeof _ == `function` && (_[_] = _(_, _));
  }
  return _;
}
function _() {
  var _ = [...arguments];
  return _.length === 0
    ? function (_) {
        return _;
      }
    : _.length === 1
      ? _[0]
      : _.reduce(function (_, _) {
          return function () {
            return _(_.apply(void 0, arguments));
          };
        });
}
function _() {
  var _ = [...arguments];
  return function (_) {
    return function () {
      var _ = _.apply(void 0, arguments),
        _ = function () {
          throw Error(_(15));
        },
        _ = {
          getState: _.getState,
          dispatch: function () {
            return _.apply(void 0, arguments);
          },
        },
        _ = _.map(function (_) {
          return _(_);
        });
      return (
        (_ = _.apply(void 0, _)(_.dispatch)),
        _(
          _({}, _),
          {},
          {
            dispatch: _,
          },
        )
      );
    };
  };
}
var _ = _(_());
function _(_, _) {
  if (_.length !== _.length) return !1;
  for (var _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_, _) {
  var _ = (0, _.useState)(function () {
      return {
        inputs: _,
        result: _(),
      };
    })[0],
    _ = (0, _.useRef)(!0),
    _ = (0, _.useRef)(_),
    _ =
      _.current || (_ && _.current.inputs && _(_, _.current.inputs))
        ? _.current
        : {
            inputs: _,
            result: _(),
          };
  return (
    (0, _.useEffect)(
      function () {
        (_.current = !1), (_.current = _);
      },
      [_],
    ),
    _.result
  );
}
function _(_, _) {
  return _(function () {
    return _;
  }, _);
}
var _ = _,
  _ = _,
  _ = function (_) {
    var _ = _.top,
      _ = _.right,
      _ = _.bottom,
      _ = _.left;
    return {
      top: _,
      right: _,
      bottom: _,
      left: _,
      width: _ - _,
      height: _ - _,
      _: _,
      _: _,
      center: {
        _: (_ + _) / 2,
        _: (_ + _) / 2,
      },
    };
  },
  _ = function (_, _) {
    return {
      top: _.top - _.top,
      left: _.left - _.left,
      bottom: _.bottom + _.bottom,
      right: _.right + _.right,
    };
  },
  _ = function (_, _) {
    return {
      top: _.top + _.top,
      left: _.left + _.left,
      bottom: _.bottom - _.bottom,
      right: _.right - _.right,
    };
  },
  _ = function (_, _) {
    return {
      top: _.top + _._,
      left: _.left + _._,
      bottom: _.bottom + _._,
      right: _.right + _._,
    };
  },
  _ = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  _ = function (_) {
    var _ = _.borderBox,
      _ = _.margin,
      _ = _ === void 0 ? _ : _,
      _ = _.border,
      _ = _ === void 0 ? _ : _,
      _ = _.padding,
      _ = _ === void 0 ? _ : _,
      _ = _(_(_, _)),
      _ = _(_(_, _)),
      _ = _(_(_, _));
    return {
      marginBox: _,
      borderBox: _(_),
      paddingBox: _,
      contentBox: _,
      margin: _,
      border: _,
      padding: _,
    };
  },
  _ = function (_) {
    var _ = _.slice(0, -2);
    if (_.slice(-2) !== `px`) return 0;
    var _ = Number(_);
    return isNaN(_) && _(!1), _;
  },
  _ = function () {
    return {
      _: window.pageXOffset,
      _: window.pageYOffset,
    };
  },
  _ = function (_, _) {
    var _ = _.borderBox,
      _ = _.border,
      _ = _.margin,
      _ = _.padding;
    return _({
      borderBox: _(_, _),
      border: _,
      margin: _,
      padding: _,
    });
  },
  _ = function (_, _) {
    return _ === void 0 && (_ = _()), _(_, _);
  },
  _ = function (_, _) {
    return _({
      borderBox: _,
      margin: {
        top: _(_.marginTop),
        right: _(_.marginRight),
        bottom: _(_.marginBottom),
        left: _(_.marginLeft),
      },
      padding: {
        top: _(_.paddingTop),
        right: _(_.paddingRight),
        bottom: _(_.paddingBottom),
        left: _(_.paddingLeft),
      },
      border: {
        top: _(_.borderTopWidth),
        right: _(_.borderRightWidth),
        bottom: _(_.borderBottomWidth),
        left: _(_.borderLeftWidth),
      },
    });
  },
  _ = function (_) {
    return _(_.getBoundingClientRect(), window.getComputedStyle(_));
  },
  _ = function (_) {
    var _ = [],
      _ = null,
      _ = function () {
        (_ = [...arguments]),
          !_ &&
            (_ = requestAnimationFrame(function () {
              (_ = null), _.apply(void 0, _);
            }));
      };
    return (
      (_.cancel = function () {
        _ &&= (cancelAnimationFrame(_), null);
      }),
      _
    );
  };
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
