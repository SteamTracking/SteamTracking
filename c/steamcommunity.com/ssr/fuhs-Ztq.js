function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = _((_) => {
    var _ = typeof Symbol == `function` && Symbol.for,
      _ = _ ? Symbol.for(`react.element`) : 60103,
      _ = _ ? Symbol.for(`react.portal`) : 60106,
      _ = _ ? Symbol.for(`react.fragment`) : 60107,
      _ = _ ? Symbol.for(`react.strict_mode`) : 60108,
      _ = _ ? Symbol.for(`react.profiler`) : 60114,
      _ = _ ? Symbol.for(`react.provider`) : 60109,
      _ = _ ? Symbol.for(`react.context`) : 60110,
      _ = _ ? Symbol.for(`react.async_mode`) : 60111,
      _ = _ ? Symbol.for(`react.concurrent_mode`) : 60111,
      _ = _ ? Symbol.for(`react.forward_ref`) : 60112,
      _ = _ ? Symbol.for(`react.suspense`) : 60113,
      _ = _ ? Symbol.for(`react.suspense_list`) : 60120,
      _ = _ ? Symbol.for(`react.memo`) : 60115,
      _ = _ ? Symbol.for(`react.lazy`) : 60116,
      _ = _ ? Symbol.for(`react.block`) : 60121,
      _ = _ ? Symbol.for(`react.fundamental`) : 60117,
      _ = _ ? Symbol.for(`react.responder`) : 60118,
      _ = _ ? Symbol.for(`react.scope`) : 60119;
    function _(_) {
      if (typeof _ == `object` && _) {
        var _ = _.$$typeof;
        switch (_) {
          case _:
            switch (((_ = _.type), _)) {
              case _:
              case _:
              case _:
              case _:
              case _:
              case _:
                return _;
              default:
                switch (((_ &&= _.$$typeof), _)) {
                  case _:
                  case _:
                  case _:
                  case _:
                  case _:
                    return _;
                  default:
                    return _;
                }
            }
          case _:
            return _;
        }
      }
    }
    function _(_) {
      return _(_) === _;
    }
    (_.AsyncMode = _),
      (_.ConcurrentMode = _),
      (_.ContextConsumer = _),
      (_.ContextProvider = _),
      (_.Element = _),
      (_.ForwardRef = _),
      (_.Fragment = _),
      (_.Lazy = _),
      (_.Memo = _),
      (_.Portal = _),
      (_.Profiler = _),
      (_.StrictMode = _),
      (_.Suspense = _),
      (_.isAsyncMode = function (_) {
        return _(_) || _(_) === _;
      }),
      (_.isConcurrentMode = _),
      (_.isContextConsumer = function (_) {
        return _(_) === _;
      }),
      (_.isContextProvider = function (_) {
        return _(_) === _;
      }),
      (_.isElement = function (_) {
        return typeof _ == `object` && !!_ && _.$$typeof === _;
      }),
      (_.isForwardRef = function (_) {
        return _(_) === _;
      }),
      (_.isFragment = function (_) {
        return _(_) === _;
      }),
      (_.isLazy = function (_) {
        return _(_) === _;
      }),
      (_.isMemo = function (_) {
        return _(_) === _;
      }),
      (_.isPortal = function (_) {
        return _(_) === _;
      }),
      (_.isProfiler = function (_) {
        return _(_) === _;
      }),
      (_.isStrictMode = function (_) {
        return _(_) === _;
      }),
      (_.isSuspense = function (_) {
        return _(_) === _;
      }),
      (_.isValidElementType = function (_) {
        return (
          typeof _ == `string` ||
          typeof _ == `function` ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          (typeof _ == `object` &&
            !!_ &&
            (_.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _))
        );
      }),
      (_.typeOf = _);
  }),
  _ = _((_, _) => {
    _.exports = _();
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = {
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
      _ = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      _ = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      _ = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      _ = {};
    (_[_.ForwardRef] = _), (_[_.Memo] = _);
    function _(_) {
      return _.isMemo(_) ? _ : _[_.$$typeof] || _;
    }
    var _ = Object.defineProperty,
      _ = Object.getOwnPropertyNames,
      _ = Object.getOwnPropertySymbols,
      _ = Object.getOwnPropertyDescriptor,
      _ = Object.getPrototypeOf,
      _ = Object.prototype;
    function _(_, _, _) {
      if (typeof _ != `string`) {
        if (_) {
          var _ = _(_);
          _ && _ !== _ && _(_, _, _);
        }
        var _ = _(_);
        _ && (_ = _.concat(_(_)));
        for (var _ = _(_), _ = _(_), _ = 0; _ < _.length; ++_) {
          var _ = _[_];
          if (!_[_] && !(_ && _[_]) && !(_ && _[_]) && !(_ && _[_])) {
            var _ = _(_, _);
            try {
              _(_, _, _);
            } catch {}
          }
        }
      }
      return _;
    }
    _.exports = _;
  });
export { _, _, _ };
