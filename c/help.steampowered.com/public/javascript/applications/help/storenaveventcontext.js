import { _ as __toESM, _ as __commonJSMin } from "./rolldown-runtime.js";
var require_react_production = __commonJSMin((_) => {
    var _ = Symbol.for(`react.transitional.element`),
      _ = Symbol.for(`react.portal`),
      _ = Symbol.for(`react.fragment`),
      _ = Symbol.for(`react.strict_mode`),
      _ = Symbol.for(`react.profiler`),
      _ = Symbol.for(`react.consumer`),
      _ = Symbol.for(`react.context`),
      _ = Symbol.for(`react.forward_ref`),
      _ = Symbol.for(`react.suspense`),
      _ = Symbol.for(`react.memo`),
      _ = Symbol.for(`react.lazy`),
      _ = Symbol.iterator;
    function _(_) {
      return typeof _ != `object` || !_
        ? null
        : ((_ = (_ && _[_]) || _[`@@iterator`]),
          typeof _ == `function` ? _ : null);
    }
    var _ = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      _ = {};
    function _(_, _, _) {
      ((this.props = _),
        (this.context = _),
        (this.refs = _),
        (this.updater = _ || _));
    }
    ((_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (_, _) {
        if (typeof _ != `object` && typeof _ != `function` && _ != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, _, _, `setState`);
      }),
      (_.prototype.forceUpdate = function (_) {
        this.updater.enqueueForceUpdate(this, _, `forceUpdate`);
      }));
    function _() {}
    _.prototype = _.prototype;
    function _(_, _, _) {
      ((this.props = _),
        (this.context = _),
        (this.refs = _),
        (this.updater = _ || _));
    }
    var _ = (_.prototype = new _());
    ((_.constructor = _), _(_, _.prototype), (_.isPureReactComponent = !0));
    var _ = Array.isArray,
      _ = {
        _: null,
        _: null,
        _: null,
        _: null,
        _: null,
      },
      _ = Object.prototype.hasOwnProperty;
    function _(_, _, _, _, _, _) {
      return (
        (_ = _.ref),
        {
          $$typeof: _,
          type: _,
          key: _,
          ref: _ === void 0 ? null : _,
          props: _,
        }
      );
    }
    function _(_, _) {
      return _(_.type, _, void 0, void 0, void 0, _.props);
    }
    function _(_) {
      return typeof _ == `object` && !!_ && _.$$typeof === _;
    }
    function _(_) {
      var _ = {
        "=": `=0`,
        ":": `=2`,
      };
      return (
        `$` +
        _.replace(/[=:]/g, function (_) {
          return _[_];
        })
      );
    }
    var _ = /\/+/g;
    function _(_, _) {
      return typeof _ == `object` && _ && _.key != null
        ? _(`` + _.key)
        : _.toString(36);
    }
    function _() {}
    function _(_) {
      switch (_.status) {
        case `fulfilled`:
          return _.value;
        case `rejected`:
          throw _.reason;
        default:
          switch (
            (typeof _.status == `string`
              ? _.then(_, _)
              : ((_.status = `pending`),
                _.then(
                  function (_) {
                    _.status === `pending` &&
                      ((_.status = `fulfilled`), (_.value = _));
                  },
                  function (_) {
                    _.status === `pending` &&
                      ((_.status = `rejected`), (_.reason = _));
                  },
                )),
            _.status)
          ) {
            case `fulfilled`:
              return _.value;
            case `rejected`:
              throw _.reason;
          }
      }
      throw _;
    }
    function _(_, _, _, _, _) {
      var _ = typeof _;
      (_ === `undefined` || _ === `boolean`) && (_ = null);
      var _ = !1;
      if (_ === null) _ = !0;
      else
        switch (_) {
          case `bigint`:
          case `string`:
          case `number`:
            _ = !0;
            break;
          case `object`:
            switch (_.$$typeof) {
              case _:
              case _:
                _ = !0;
                break;
              case _:
                return ((_ = _._init), _(_(_._payload), _, _, _, _));
            }
        }
      if (_)
        return (
          (_ = _(_)),
          (_ = _ === `` ? `.` + _(_, 0) : _),
          _(_)
            ? ((_ = ``),
              _ != null && (_ = _.replace(_, `$&/`) + `/`),
              _(_, _, _, ``, function (_) {
                return _;
              }))
            : _ != null &&
              (_(_) &&
                (_ = _(
                  _,
                  _ +
                    (_.key == null || (_ && _.key === _.key)
                      ? ``
                      : (`` + _.key).replace(_, `$&/`) + `/`) +
                    _,
                )),
              _.push(_)),
          1
        );
      _ = 0;
      var _ = _ === `` ? `.` : _ + `:`;
      if (_(_))
        for (var _ = 0; _ < _.length; _++)
          ((_ = _[_]), (_ = _ + _(_, _)), (_ += _(_, _, _, _, _)));
      else if (((_ = _(_)), typeof _ == `function`))
        for (_ = _.call(_), _ = 0; !(_ = _.next()).done;)
          ((_ = _.value), (_ = _ + _(_, _++)), (_ += _(_, _, _, _, _)));
      else if (_ === `object`) {
        if (typeof _.then == `function`) return _(_(_), _, _, _, _);
        throw (
          (_ = String(_)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (_ === `[object Object]`
                ? `object with keys {` + Object.keys(_).join(`, `) + `}`
                : _) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return _;
    }
    function _(_, _, _) {
      if (_ == null) return _;
      var _ = [],
        _ = 0;
      return (
        _(_, _, ``, ``, function (_) {
          return _.call(_, _, _++);
        }),
        _
      );
    }
    function _(_) {
      if (_._status === -1) {
        var _ = _._result;
        ((_ = _()),
          _.then(
            function (_) {
              (_._status === 0 || _._status === -1) &&
                ((_._status = 1), (_._result = _));
            },
            function (_) {
              (_._status === 0 || _._status === -1) &&
                ((_._status = 2), (_._result = _));
            },
          ),
          _._status === -1 && ((_._status = 0), (_._result = _)));
      }
      if (_._status === 1) return _._result.default;
      throw _._result;
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
    function _() {}
    ((_.Children = {
      map: _,
      forEach: function (_, _, _) {
        _(
          _,
          function () {
            _.apply(this, arguments);
          },
          _,
        );
      },
      count: function (_) {
        var _ = 0;
        return (
          _(_, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (_) {
        return (
          _(_, function (_) {
            return _;
          }) || []
        );
      },
      only: function (_) {
        if (!_(_))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return _;
      },
    }),
      (_.Component = _),
      (_.Fragment = _),
      (_.Profiler = _),
      (_.PureComponent = _),
      (_.StrictMode = _),
      (_.Suspense = _),
      (_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _),
      (_.__COMPILER_RUNTIME = {
        __proto__: null,
        _: function (_) {
          return _._.useMemoCache(_);
        },
      }),
      (_.cache = function (_) {
        return function () {
          return _.apply(null, arguments);
        };
      }),
      (_.cloneElement = function (_, _, _) {
        if (_ == null)
          throw Error(
            `The argument must be a React element, but you passed ` + _ + `.`,
          );
        var _ = _({}, _.props),
          _ = _.key,
          _ = void 0;
        if (_ != null)
          for (_ in (_.ref !== void 0 && (_ = void 0),
          _.key !== void 0 && (_ = `` + _.key),
          _))
            !_.call(_, _) ||
              _ === `key` ||
              _ === `__self` ||
              _ === `__source` ||
              (_ === `ref` && _.ref === void 0) ||
              (_[_] = _[_]);
        var _ = arguments.length - 2;
        if (_ === 1) _.children = _;
        else if (1 < _) {
          for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
          _.children = _;
        }
        return _(_.type, _, void 0, void 0, _, _);
      }),
      (_.createContext = function (_) {
        return (
          (_ = {
            $$typeof: _,
            _currentValue: _,
            _currentValue2: _,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (_.Provider = _),
          (_.Consumer = {
            $$typeof: _,
            _context: _,
          }),
          _
        );
      }),
      (_.createElement = function (_, _, _) {
        var _,
          _ = {},
          _ = null;
        if (_ != null)
          for (_ in (_.key !== void 0 && (_ = `` + _.key), _))
            _.call(_, _) &&
              _ !== `key` &&
              _ !== `__self` &&
              _ !== `__source` &&
              (_[_] = _[_]);
        var _ = arguments.length - 2;
        if (_ === 1) _.children = _;
        else if (1 < _) {
          for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
          _.children = _;
        }
        if (_ && _.defaultProps)
          for (_ in ((_ = _.defaultProps), _)) _[_] === void 0 && (_[_] = _[_]);
        return _(_, _, void 0, void 0, null, _);
      }),
      (_.createRef = function () {
        return {
          current: null,
        };
      }),
      (_.forwardRef = function (_) {
        return {
          $$typeof: _,
          render: _,
        };
      }),
      (_.isValidElement = _),
      (_.lazy = function (_) {
        return {
          $$typeof: _,
          _payload: {
            _status: -1,
            _result: _,
          },
          _init: _,
        };
      }),
      (_.memo = function (_, _) {
        return {
          $$typeof: _,
          type: _,
          compare: _ === void 0 ? null : _,
        };
      }),
      (_.startTransition = function (_) {
        var _ = _._,
          _ = {};
        _._ = _;
        try {
          var _ = _(),
            _ = _._;
          (_ !== null && _(_, _),
            typeof _ == `object` &&
              _ &&
              typeof _.then == `function` &&
              _.then(_, _));
        } catch (_) {
          _(_);
        } finally {
          _._ = _;
        }
      }),
      (_.unstable_useCacheRefresh = function () {
        return _._.useCacheRefresh();
      }),
      (_.use = function (_) {
        return _._.use(_);
      }),
      (_.useActionState = function (_, _, _) {
        return _._.useActionState(_, _, _);
      }),
      (_.useCallback = function (_, _) {
        return _._.useCallback(_, _);
      }),
      (_.useContext = function (_) {
        return _._.useContext(_);
      }),
      (_.useDebugValue = function () {}),
      (_.useDeferredValue = function (_, _) {
        return _._.useDeferredValue(_, _);
      }),
      (_.useEffect = function (_, _, _) {
        var _ = _._;
        if (typeof _ == `function`)
          throw Error(
            `useEffect CRUD overload is not enabled in this build of React.`,
          );
        return _.useEffect(_, _);
      }),
      (_.useId = function () {
        return _._.useId();
      }),
      (_.useImperativeHandle = function (_, _, _) {
        return _._.useImperativeHandle(_, _, _);
      }),
      (_.useInsertionEffect = function (_, _) {
        return _._.useInsertionEffect(_, _);
      }),
      (_.useLayoutEffect = function (_, _) {
        return _._.useLayoutEffect(_, _);
      }),
      (_.useMemo = function (_, _) {
        return _._.useMemo(_, _);
      }),
      (_.useOptimistic = function (_, _) {
        return _._.useOptimistic(_, _);
      }),
      (_.useReducer = function (_, _, _) {
        return _._.useReducer(_, _, _);
      }),
      (_.useRef = function (_) {
        return _._.useRef(_);
      }),
      (_.useState = function (_) {
        return _._.useState(_);
      }),
      (_.useSyncExternalStore = function (_, _, _) {
        return _._.useSyncExternalStore(_, _, _);
      }),
      (_.useTransition = function () {
        return _._.useTransition();
      }),
      (_.version = `19.1.1`));
  }),
  require_react = __commonJSMin((_, _) => {
    _.exports = require_react_production();
  }),
  require_react_dom_production = __commonJSMin((_) => {
    var _ = require_react();
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
    function _() {}
    var _ = {
        _: {
          _: _,
          _: function () {
            throw Error(_(522));
          },
          _: _,
          _: _,
          _: _,
          _: _,
          _: _,
          _: _,
          _: _,
        },
        _: 0,
        findDOMNode: null,
      },
      _ = Symbol.for(`react.portal`);
    function _(_, _, _) {
      var _ =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: _,
        key: _ == null ? null : `` + _,
        children: _,
        containerInfo: _,
        implementation: _,
      };
    }
    var _ = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function _(_, _) {
      if (_ === `font`) return ``;
      if (typeof _ == `string`) return _ === `use-credentials` ? _ : ``;
    }
    ((_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _),
      (_.createPortal = function (_, _) {
        var _ =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!_ || (_.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11))
          throw Error(_(299));
        return _(_, _, null, _);
      }),
      (_.flushSync = function (_) {
        var _ = _._,
          _ = _._;
        try {
          if (((_._ = null), (_._ = 2), _)) return _();
        } finally {
          ((_._ = _), (_._ = _), _._._());
        }
      }),
      (_.preconnect = function (_, _) {
        typeof _ == `string` &&
          (_
            ? ((_ = _.crossOrigin),
              (_ =
                typeof _ == `string`
                  ? _ === `use-credentials`
                    ? _
                    : ``
                  : void 0))
            : (_ = null),
          _._._(_, _));
      }),
      (_.prefetchDNS = function (_) {
        typeof _ == `string` && _._._(_);
      }),
      (_.preinit = function (_, _) {
        if (typeof _ == `string` && _ && typeof _._ == `string`) {
          var _ = _._,
            _ = _(_, _.crossOrigin),
            _ = typeof _.integrity == `string` ? _.integrity : void 0,
            _ = typeof _.fetchPriority == `string` ? _.fetchPriority : void 0;
          _ === `style`
            ? _._._(
                _,
                typeof _.precedence == `string` ? _.precedence : void 0,
                {
                  crossOrigin: _,
                  integrity: _,
                  fetchPriority: _,
                },
              )
            : _ === `script` &&
              _._._(_, {
                crossOrigin: _,
                integrity: _,
                fetchPriority: _,
                nonce: typeof _.nonce == `string` ? _.nonce : void 0,
              });
        }
      }),
      (_.preinitModule = function (_, _) {
        if (typeof _ == `string`) {
          if (typeof _ == `object` && _) {
            if (_._ == null || _._ === `script`) {
              var _ = _(_._, _.crossOrigin);
              _._._(_, {
                crossOrigin: _,
                integrity:
                  typeof _.integrity == `string` ? _.integrity : void 0,
                nonce: typeof _.nonce == `string` ? _.nonce : void 0,
              });
            }
          } else _ ?? _._._(_);
        }
      }),
      (_.preload = function (_, _) {
        if (
          typeof _ == `string` &&
          typeof _ == `object` &&
          _ &&
          typeof _._ == `string`
        ) {
          var _ = _._,
            _ = _(_, _.crossOrigin);
          _._._(_, _, {
            crossOrigin: _,
            integrity: typeof _.integrity == `string` ? _.integrity : void 0,
            nonce: typeof _.nonce == `string` ? _.nonce : void 0,
            type: typeof _.type == `string` ? _.type : void 0,
            fetchPriority:
              typeof _.fetchPriority == `string` ? _.fetchPriority : void 0,
            referrerPolicy:
              typeof _.referrerPolicy == `string` ? _.referrerPolicy : void 0,
            imageSrcSet:
              typeof _.imageSrcSet == `string` ? _.imageSrcSet : void 0,
            imageSizes: typeof _.imageSizes == `string` ? _.imageSizes : void 0,
            media: typeof _.media == `string` ? _.media : void 0,
          });
        }
      }),
      (_.preloadModule = function (_, _) {
        if (typeof _ == `string`) {
          if (_) {
            var _ = _(_._, _.crossOrigin);
            _._._(_, {
              _: typeof _._ == `string` && _._ !== `script` ? _._ : void 0,
              crossOrigin: _,
              integrity: typeof _.integrity == `string` ? _.integrity : void 0,
            });
          } else _._._(_);
        }
      }),
      (_.requestFormReset = function (_) {
        _._._(_);
      }),
      (_.unstable_batchedUpdates = function (_, _) {
        return _(_);
      }),
      (_.useFormState = function (_, _, _) {
        return _._.useFormState(_, _, _);
      }),
      (_.useFormStatus = function () {
        return _._.useHostTransitionStatus();
      }),
      (_.version = `19.1.1`));
  }),
  require_react_dom = __commonJSMin((_, _) => {
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
    (_(), (_.exports = require_react_dom_production()));
  }),
  ESteamRealm = (function (_) {
    return (
      (_[(_.k_ESteamRealmUnknown = 0)] = `k_ESteamRealmUnknown`),
      (_[(_.k_ESteamRealmGlobal = 1)] = `k_ESteamRealmGlobal`),
      (_[(_.k_ESteamRealmChina = 2)] = `k_ESteamRealmChina`),
      _
    );
  })({});
function BIsChinaRealm(_) {
  return _ === ESteamRealm.k_ESteamRealmChina;
}
var k_EFriendRelationshipFriend = 3,
  k_EFriendRelationshipIgnoredFriend = 6;
function BIsEFriendRelationshipFriend(_) {
  return _ == 3 || _ == 6;
}
var k_GIDNil = `18446744073709551615`,
  k_ELanguage_English = 0,
  k_ELanguage_German = 1,
  k_ELanguage_French = 2,
  k_ELanguage_Italian = 3,
  k_ELanguage_Korean = 4,
  k_ELanguage_Spanish = 5,
  k_ELanguage_Simplified_Chinese = 6,
  k_ELanguage_Traditional_Chinese = 7,
  k_ELanguage_Russian = 8,
  k_ELanguage_Thai = 9,
  k_ELanguage_Japanese = 10,
  k_ELanguage_Portuguese = 11,
  k_ELanguage_Polish = 12,
  k_ELanguage_Danish = 13,
  k_ELanguage_Dutch = 14,
  k_ELanguage_Finnish = 15,
  k_ELanguage_Norwegian = 16,
  k_ELanguage_Swedish = 17,
  k_ELanguage_Hungarian = 18,
  k_ELanguage_Czech = 19,
  k_ELanguage_Romanian = 20,
  k_ELanguage_Turkish = 21,
  k_ELanguage_Brazilian = 22,
  k_ELanguage_Bulgarian = 23,
  k_ELanguage_Greek = 24,
  k_ELanguage_Arabic = 25,
  k_ELanguage_Ukrainian = 26,
  k_ELanguage_Latam_Spanish = 27,
  k_ELanguage_Vietnamese = 28,
  k_ELanguage_SteamChina_SChinese = 29,
  k_ELanguage_Indonesian = 30,
  k_ELanguage_Malay = 31,
  k_extLang_None = -1,
  k_extLang_Afrikaans = 0,
  k_extLang_Albanian = 1,
  k_extLang_Amharic = 2,
  k_extLang_Armenian = 3,
  k_extLang_Assamese = 4,
  k_extLang_Azerbaijani = 5,
  k_extLang_Bangla = 6,
  k_extLang_Basque = 7,
  k_extLang_Belarusian = 8,
  k_extLang_Bosnian = 9,
  k_extLang_Catalan = 10,
  k_extLang_Cherokee = 11,
  k_extLang_Croatian = 12,
  k_extLang_Dari = 13,
  k_extLang_Estonian = 14,
  k_extLang_Filipino = 15,
  k_extLang_Galician = 16,
  k_extLang_Georgian = 17,
  k_extLang_Gujarati = 18,
  k_extLang_Gurmukhi = 19,
  k_extLang_Hausa = 20,
  k_extLang_Hebrew = 21,
  k_extLang_Hindi = 22,
  k_extLang_Icelandic = 23,
  k_extLang_Igbo = 24,
  k_extLang_Indonesian_Deprecated = 25,
  k_extLang_Irish = 26,
  k_extLang_Kannada = 27,
  k_extLang_Kazakh = 28,
  k_extLang_Khmer = 29,
  k_extLang_Kiche = 30,
  k_extLang_Kinyarwanda = 31,
  k_extLang_Konkani = 32,
  k_extLang_Kyrgyz = 33,
  k_extLang_Latvian = 34,
  k_extLang_Lithuanian = 35,
  k_extLang_Luxembourgish = 36,
  k_extLang_Macedonian = 37,
  k_extLang_Malay_Deprecated = 38,
  k_extLang_Malayalam = 39,
  k_extLang_Maltese = 40,
  k_extLang_Maori = 41,
  k_extLang_Marathi = 42,
  k_extLang_Mongolian = 43,
  k_extLang_Nepali = 44,
  k_extLang_Odia = 45,
  k_extLang_Persian = 46,
  k_extLang_Quechua = 47,
  k_extLang_Scots = 48,
  k_extLang_Serbian = 49,
  k_extLang_Shahmukhi = 50,
  k_extLang_Sindhi = 51,
  k_extLang_Sinhala = 52,
  k_extLang_Slovak = 53,
  k_extLang_Slovenian = 54,
  k_extLang_Sorani = 55,
  k_extLang_Sotho = 56,
  k_extLang_Swahili = 57,
  k_extLang_Tajik = 58,
  k_extLang_Tamil = 59,
  k_extLang_Tatar = 60,
  k_extLang_Telugu = 61,
  k_extLang_Tigrinya = 62,
  k_extLang_Tswana = 63,
  k_extLang_Turkmen = 64,
  k_extLang_Urdu = 65,
  k_extLang_Uyghur = 66,
  k_extLang_Uzbek = 67,
  k_extLang_Valencian = 68,
  k_extLang_Welsh = 69,
  k_extLang_Wolof = 70,
  k_extLang_Xhosa = 71,
  k_extLang_Yoruba = 72,
  k_extLang_Zulu = 73,
  k_rgAdditionalLanguageNames = [
    [`None`, `none`, -1],
    [`Afrikaans`, `afrikaans`, 0],
    [`Albanian`, `albanian`, 1],
    [`Amharic`, `amharic`, 2],
    [`Armenian`, `armenian`, 3],
    [`Assamese`, `assamese`, 4],
    [`Azerbaijani`, `azerbaijani`, 5],
    [`Bangla`, `bangla`, 6],
    [`Basque`, `basque`, 7],
    [`Belarusian`, `belarusian`, 8],
    [`Bosnian`, `bosnian`, 9],
    [`Catalan`, `catalan`, 10],
    [`Cherokee`, `cherokee`, 11],
    [`Croatian`, `croatian`, 12],
    [`Dari`, `dari`, 13],
    [`Estonian`, `estonian`, 14],
    [`Filipino`, `filipino`, 15],
    [`Galician`, `galician`, 16],
    [`Georgian`, `georgian`, 17],
    [`Gujarati`, `gujarati`, 18],
    [`Punjabi (Gurmukhi)`, `gurmukhi`, 19],
    [`Hausa`, `hausa`, 20],
    [`Hebrew`, `hebrew`, 21],
    [`Hindi`, `hindi`, 22],
    [`Icelandic`, `icelandic`, 23],
    [`Igbo`, `igbo`, 24],
    [`Indonesian`, `indonesian`, 25],
    [`Irish`, `irish`, 26],
    [`Kannada`, `kannada`, 27],
    [`Kazakh`, `kazakh`, 28],
    [`Khmer`, `khmer`, 29],
    [`K'iche'`, `kiche`, 30],
    [`Kinyarwanda`, `kinyarwanda`, 31],
    [`Konkani`, `konkani`, 32],
    [`Kyrgyz`, `kyrgyz`, 33],
    [`Latvian`, `latvian`, 34],
    [`Lithuanian`, `lithuanian`, 35],
    [`Luxembourgish`, `luxembourgish`, 36],
    [`Macedonian`, `macedonian`, 37],
    [`Malay`, `malay`, 38],
    [`Malayalam`, `malayalam`, 39],
    [`Maltese`, `maltese`, 40],
    [`Maori`, `maori`, 41],
    [`Marathi`, `marathi`, 42],
    [`Mongolian`, `mongolian`, 43],
    [`Nepali`, `nepali`, 44],
    [`Odia`, `odia`, 45],
    [`Persian`, `persian`, 46],
    [`Quechua`, `quechua`, 47],
    [`Scots`, `scots`, 48],
    [`Serbian`, `serbian`, 49],
    [`Punjabi (Shahmukhi)`, `shahmukhi`, 50],
    [`Sindhi`, `sindhi`, 51],
    [`Sinhala`, `sinhala`, 52],
    [`Slovak`, `slovak`, 53],
    [`Slovenian`, `slovenian`, 54],
    [`Sorani`, `sorani`, 55],
    [`Sotho`, `sotho`, 56],
    [`Swahili`, `swahili`, 57],
    [`Tajik`, `tajik`, 58],
    [`Tamil`, `tamil`, 59],
    [`Tatar`, `tatar`, 60],
    [`Telugu`, `telugu`, 61],
    [`Tigrinya`, `tigrinya`, 62],
    [`Tswana`, `tswana`, 63],
    [`Turkmen`, `turkmen`, 64],
    [`Urdu`, `urdu`, 65],
    [`Uyghur`, `uyghur`, 66],
    [`Uzbek`, `uzbek`, 67],
    [`Valencian`, `valencian`, 68],
    [`Welsh`, `welsh`, 69],
    [`Wolof`, `wolof`, 70],
    [`Xhosa`, `xhosa`, 71],
    [`Yoruba`, `yoruba`, 72],
    [`Zulu`, `zulu`, 73],
  ].map((_) => ({
    name: _[0],
    shortName: _[1],
    eAdditionalLanguage: _[2],
  }));
function ELanguagePchWebLanguageCode(_, _ = `en`) {
  switch (_) {
    case 0:
      return `en`;
    case 1:
      return `de`;
    case 2:
      return `fr`;
    case 3:
      return `it`;
    case 4:
      return `ko`;
    case 5:
      return `es`;
    case 6:
      return `zh-cn`;
    case 7:
      return `zh-tw`;
    case 8:
      return `ru`;
    case 9:
      return `th`;
    case 10:
      return `ja`;
    case 11:
      return `pt`;
    case 12:
      return `pl`;
    case 13:
      return `da`;
    case 14:
      return `nl`;
    case 15:
      return `fi`;
    case 16:
      return `no`;
    case 17:
      return `sv`;
    case 18:
      return `hu`;
    case 19:
      return `cs`;
    case 20:
      return `ro`;
    case 21:
      return `tr`;
    case 25:
      return `ar`;
    case 22:
      return `pt-br`;
    case 23:
      return `bg`;
    case 24:
      return `el`;
    case 26:
      return `uk`;
    case 27:
      return `es-419`;
    case 28:
      return `vi`;
    case 29:
      return `sc-sc`;
    case 30:
      return `id`;
    case 31:
      return `ms`;
    default:
      return _;
  }
}
var MapKoreanaToKorean = (_) => (_ === `koreana` ? `korean` : _);
function ELanguagePchLanguage(_, _ = ``) {
  switch (_) {
    case 0:
      return `english`;
    case 1:
      return `german`;
    case 2:
      return `french`;
    case 3:
      return `italian`;
    case 4:
      return `koreana`;
    case 5:
      return `spanish`;
    case 6:
      return `schinese`;
    case 7:
      return `tchinese`;
    case 8:
      return `russian`;
    case 9:
      return `thai`;
    case 10:
      return `japanese`;
    case 11:
      return `portuguese`;
    case 12:
      return `polish`;
    case 13:
      return `danish`;
    case 14:
      return `dutch`;
    case 15:
      return `finnish`;
    case 16:
      return `norwegian`;
    case 17:
      return `swedish`;
    case 18:
      return `hungarian`;
    case 19:
      return `czech`;
    case 20:
      return `romanian`;
    case 21:
      return `turkish`;
    case 25:
      return `arabic`;
    case 22:
      return `brazilian`;
    case 23:
      return `bulgarian`;
    case 24:
      return `greek`;
    case 26:
      return `ukrainian`;
    case 27:
      return `latam`;
    case 28:
      return `vietnamese`;
    case 29:
      return `sc_schinese`;
    case 30:
      return `indonesian`;
    case 31:
      return `malay`;
    default:
      return _;
  }
}
function PchLanguageToELanguage(_, _ = 0) {
  switch (_) {
    case `english`:
      return 0;
    case `german`:
      return 1;
    case `french`:
      return 2;
    case `italian`:
      return 3;
    case `korean`:
    case `koreana`:
      return 4;
    case `spanish`:
      return 5;
    case `schinese`:
      return 6;
    case `tchinese`:
      return 7;
    case `russian`:
      return 8;
    case `thai`:
      return 9;
    case `japanese`:
      return 10;
    case `portuguese`:
      return 11;
    case `polish`:
      return 12;
    case `danish`:
      return 13;
    case `dutch`:
      return 14;
    case `finnish`:
      return 15;
    case `norwegian`:
      return 16;
    case `swedish`:
      return 17;
    case `hungarian`:
      return 18;
    case `czech`:
      return 19;
    case `romanian`:
      return 20;
    case `turkish`:
      return 21;
    case `arabic`:
      return 25;
    case `brazilian`:
      return 22;
    case `bulgarian`:
      return 23;
    case `greek`:
      return 24;
    case `ukrainian`:
      return 26;
    case `latam`:
      return 27;
    case `vietnamese`:
      return 28;
    case `sc_schinese`:
      return 29;
    case `indonesian`:
      return 30;
    case `malay`:
      return 31;
    default:
      return _;
  }
}
var k_ELauncherType_PerfectWorld = 1,
  k_ELauncherType_CSGO = 4,
  k_ELauncherType_SingleApp = 8;
function BIsReducedUILauncher(_) {
  switch (_) {
    default:
      break;
    case 4:
    case 1:
    case 8:
      return !0;
  }
  return !1;
}
var k_ENotificationLocation_Invalid = 0,
  k_ENotificationLocation_GamepadToast = 1,
  k_ENotificationLocation_DesktopToast = 2,
  k_ENotificationLocation_Tray = 3,
  k_ENotificationLocation_AllNotificationsTray = 4,
  k_ENotificationLocation_MobilePush = 5;
function ENotificationLocationToString(_) {
  switch (_) {
    case 0:
      return `invalid`;
    case 1:
      return `gamepad`;
    case 2:
      return `desktop`;
    case 3:
      return `tray`;
    case 4:
      return `all`;
    case 5:
      return `push`;
  }
}
var k_EUIMode_Unknown = -1,
  k_EUIMode_VGUI = 0,
  k_EUIMode_Tenfoot = 1,
  k_EUIMode_Mobile = 2,
  k_EUIMode_Web = 3,
  k_EUIMode_GamePadUI = 4,
  k_EUIMode_MobileChat = 5,
  k_EUIMode_EmbeddedClient = 6,
  k_EUIMode_DesktopUI = 7;
function EUIModeToString(_) {
  switch (_) {
    case 0:
      return `vgui`;
    case 1:
      return `tenfoot`;
    case 2:
      return `mobile`;
    case 3:
      return `web`;
    case 4:
      return `gamepad`;
    case 5:
      return `mobilechat`;
    case 6:
      return `embedded`;
    case 7:
      return `desktop`;
    default:
      return `unknown`;
  }
}
var EWindowBringToFront = (function (_) {
    return (
      (_[(_.k_EWindowBringToFrontInvalid = 0)] =
        `k_EWindowBringToFrontInvalid`),
      (_[(_.k_EWindowBringToFrontAndForceOS = 1)] =
        `k_EWindowBringToFrontAndForceOS`),
      (_[(_.k_EWindowBringToFrontWithoutForcingOS = 2)] =
        `k_EWindowBringToFrontWithoutForcingOS`),
      (_[(_.k_EWindowBringToFrontUsingExistingOSState = 3)] =
        `k_EWindowBringToFrontUsingExistingOSState`),
      _
    );
  })({}),
  require_google_protobuf = __commonJSMin((exports, module, this$1) => {
    var $jscomp = $jscomp || {};
    (($jscomp.scope = {}),
      ($jscomp.findInternal = function (_, _, _) {
        _ instanceof String && (_ = String(_));
        for (var _ = _.length, _ = 0; _ < _; _++) {
          var _ = _[_];
          if (_.call(_, _, _, _))
            return {
              _: _,
              _: _,
            };
        }
        return {
          _: -1,
          _: void 0,
        };
      }),
      ($jscomp.ASSUME_ES5 = !1),
      ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
      ($jscomp.ASSUME_NO_NATIVE_SET = !1),
      ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
      ($jscomp.defineProperty =
        $jscomp.ASSUME_ES5 || typeof Object.defineProperties == `function`
          ? Object.defineProperty
          : function (_, _, _) {
              _ != Array.prototype && _ != Object.prototype && (_[_] = _.value);
            }),
      ($jscomp.getGlobal = function (_) {
        return typeof window < `u` && window === _
          ? _
          : typeof global < `u` && global != null
            ? global
            : _;
      }),
      ($jscomp.global = $jscomp.getGlobal(this$1)),
      ($jscomp.polyfill = function (_, _, _, _) {
        if (_) {
          for (
            _ = $jscomp.global, _ = _.split(`.`), _ = 0;
            _ < _.length - 1;
            _++
          ) {
            var _ = _[_];
            (_ in _ || (_[_] = {}), (_ = _[_]));
          }
          ((_ = _[_.length - 1]),
            (_ = _[_]),
            (_ = _(_)),
            _ != _ &&
              _ != null &&
              $jscomp.defineProperty(_, _, {
                configurable: !0,
                writable: !0,
                value: _,
              }));
        }
      }),
      $jscomp.polyfill(
        `Array.prototype.findIndex`,
        function (_) {
          return (
            _ ||
            function (_, _) {
              return $jscomp.findInternal(this, _, _)._;
            }
          );
        },
        `es6`,
        `es3`,
      ),
      ($jscomp.checkStringArgs = function (_, _, _) {
        if (_ == null)
          throw TypeError(
            `The 'this' value for String.prototype.` +
              _ +
              ` must not be null or undefined`,
          );
        if (_ instanceof RegExp)
          throw TypeError(
            `First argument to String.prototype.` +
              _ +
              ` must not be a regular expression`,
          );
        return _ + ``;
      }),
      $jscomp.polyfill(
        `String.prototype.endsWith`,
        function (_) {
          return (
            _ ||
            function (_, _) {
              var _ = $jscomp.checkStringArgs(this, _, `endsWith`);
              ((_ += ``),
                _ === void 0 && (_ = _.length),
                (_ = Math.max(0, Math.min(_ | 0, _.length))));
              for (var _ = _.length; 0 < _ && 0 < _;)
                if (_[--_] != _[--_]) return !1;
              return 0 >= _;
            }
          );
        },
        `es6`,
        `es3`,
      ),
      $jscomp.polyfill(
        `Array.prototype.find`,
        function (_) {
          return (
            _ ||
            function (_, _) {
              return $jscomp.findInternal(this, _, _)._;
            }
          );
        },
        `es6`,
        `es3`,
      ),
      $jscomp.polyfill(
        `String.prototype.startsWith`,
        function (_) {
          return (
            _ ||
            function (_, _) {
              var _ = $jscomp.checkStringArgs(this, _, `startsWith`);
              _ += ``;
              var _ = _.length,
                _ = _.length;
              _ = Math.max(0, Math.min(_ | 0, _.length));
              for (var _ = 0; _ < _ && _ < _;) if (_[_++] != _[_++]) return !1;
              return _ >= _;
            }
          );
        },
        `es6`,
        `es3`,
      ),
      $jscomp.polyfill(
        `String.prototype.repeat`,
        function (_) {
          return (
            _ ||
            function (_) {
              var _ = $jscomp.checkStringArgs(this, null, `repeat`);
              if (0 > _ || 1342177279 < _)
                throw RangeError(`Invalid count value`);
              _ |= 0;
              for (var _ = ``; _;) (_ & 1 && (_ += _), (_ >>>= 1) && (_ += _));
              return _;
            }
          );
        },
        `es6`,
        `es3`,
      ));
    var COMPILED = !0,
      goog = goog || {};
    ((goog.global = this$1 || self),
      (goog.exportPath_ = function (_, _, _) {
        ((_ = _.split(`.`)),
          (_ ||= goog.global),
          _[0] in _ || _.execScript === void 0 || _.execScript(`var ` + _[0]));
        for (var _; _.length && (_ = _.shift());)
          _.length || _ === void 0
            ? (_ = _[_] && _[_] !== Object.prototype[_] ? _[_] : (_[_] = {}))
            : (_[_] = _);
      }),
      (goog.define = function (_, _) {
        if (!COMPILED) {
          var _ = goog.global.CLOSURE_UNCOMPILED_DEFINES,
            _ = goog.global.CLOSURE_DEFINES;
          _ &&
          _.nodeType === void 0 &&
          Object.prototype.hasOwnProperty.call(_, _)
            ? (_ = _[_])
            : _ &&
              _.nodeType === void 0 &&
              Object.prototype.hasOwnProperty.call(_, _) &&
              (_ = _[_]);
        }
        return _;
      }),
      (goog.FEATURESET_YEAR = 2012),
      (goog.DEBUG = !0),
      (goog.LOCALE = `en`),
      (goog.TRUSTED_SITE = !0),
      (goog.STRICT_MODE_COMPATIBLE = !1),
      (goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG),
      (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
      (goog.provide = function (_) {
        if (goog.isInModuleLoader_())
          throw Error(`goog.provide cannot be used within a module.`);
        if (!COMPILED && goog.isProvided_(_))
          throw Error(`Namespace "` + _ + `" already declared.`);
        goog.constructNamespace_(_);
      }),
      (goog.constructNamespace_ = function (_, _) {
        if (!COMPILED) {
          delete goog.implicitNamespaces_[_];
          for (
            var _ = _;
            (_ = _.substring(0, _.lastIndexOf(`.`))) &&
            !goog.getObjectByName(_);
          )
            goog.implicitNamespaces_[_] = !0;
        }
        goog.exportPath_(_, _);
      }),
      (goog.getScriptNonce = function (_) {
        return _ && _ != goog.global
          ? goog.getScriptNonce_(_.document)
          : (goog.cspNonce_ === null &&
              (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
            goog.cspNonce_);
      }),
      (goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/),
      (goog.cspNonce_ = null),
      (goog.getScriptNonce_ = function (_) {
        return (_ = _.querySelector && _.querySelector(`script[nonce]`)) &&
          (_ = _.nonce || _.getAttribute(`nonce`)) &&
          goog.NONCE_PATTERN_.test(_)
          ? _
          : ``;
      }),
      (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
      (goog.module = function (_) {
        if (typeof _ != `string` || !_ || _.search(goog.VALID_MODULE_RE_) == -1)
          throw Error(`Invalid module identifier`);
        if (!goog.isInGoogModuleLoader_())
          throw Error(
            `Module ` +
              _ +
              ` has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.`,
          );
        if (goog.moduleLoaderState_.moduleName)
          throw Error(`goog.module may only be called once per module.`);
        if (((goog.moduleLoaderState_.moduleName = _), !COMPILED)) {
          if (goog.isProvided_(_))
            throw Error(`Namespace "` + _ + `" already declared.`);
          delete goog.implicitNamespaces_[_];
        }
      }),
      (goog.module.get = function (_) {
        return goog.module.getInternal_(_);
      }),
      (goog.module.getInternal_ = function (_) {
        if (!COMPILED) {
          if (_ in goog.loadedModules_) return goog.loadedModules_[_].exports;
          if (!goog.implicitNamespaces_[_])
            return ((_ = goog.getObjectByName(_)), _ ?? null);
        }
        return null;
      }),
      (goog.ModuleType = {
        ES6: `es6`,
        GOOG: `goog`,
      }),
      (goog.moduleLoaderState_ = null),
      (goog.isInModuleLoader_ = function () {
        return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
      }),
      (goog.isInGoogModuleLoader_ = function () {
        return (
          !!goog.moduleLoaderState_ &&
          goog.moduleLoaderState_.type == goog.ModuleType.GOOG
        );
      }),
      (goog.isInEs6ModuleLoader_ = function () {
        if (
          goog.moduleLoaderState_ &&
          goog.moduleLoaderState_.type == goog.ModuleType.ES6
        )
          return !0;
        var _ = goog.global.$jscomp;
        return _
          ? typeof _.getCurrentModulePath == `function` &&
              !!_.getCurrentModulePath()
          : !1;
      }),
      (goog.module.declareLegacyNamespace = function () {
        if (!COMPILED && !goog.isInGoogModuleLoader_())
          throw Error(
            `goog.module.declareLegacyNamespace must be called from within a goog.module`,
          );
        if (!COMPILED && !goog.moduleLoaderState_.moduleName)
          throw Error(
            `goog.module must be called prior to goog.module.declareLegacyNamespace.`,
          );
        goog.moduleLoaderState_.declareLegacyNamespace = !0;
      }),
      (goog.declareModuleId = function (_) {
        if (!COMPILED) {
          if (!goog.isInEs6ModuleLoader_())
            throw Error(
              `goog.declareModuleId may only be called from within an ES6 module`,
            );
          if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
            throw Error(
              `goog.declareModuleId may only be called once per module.`,
            );
          if (_ in goog.loadedModules_)
            throw Error(`Module with namespace "` + _ + `" already exists.`);
        }
        if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = _;
        else {
          var _ = goog.global.$jscomp;
          if (!_ || typeof _.getCurrentModulePath != `function`)
            throw Error(
              `Module with namespace "` + _ + `" has been loaded incorrectly.`,
            );
          ((_ = _.require(_.getCurrentModulePath())),
            (goog.loadedModules_[_] = {
              exports: _,
              type: goog.ModuleType.ES6,
              moduleId: _,
            }));
        }
      }),
      (goog.setTestOnly = function (_) {
        if (goog.DISALLOW_TEST_ONLY_CODE)
          throw (
            (_ ||= ``),
            Error(
              `Importing test-only code into non-debug environment` +
                (_ ? `: ` + _ : `.`),
            )
          );
      }),
      (goog.forwardDeclare = function (_) {}),
      COMPILED ||
        ((goog.isProvided_ = function (_) {
          return (
            _ in goog.loadedModules_ ||
            (!goog.implicitNamespaces_[_] && goog.getObjectByName(_) != null)
          );
        }),
        (goog.implicitNamespaces_ = {
          "goog.module": !0,
        })),
      (goog.getObjectByName = function (_, _) {
        ((_ = _.split(`.`)), (_ ||= goog.global));
        for (var _ = 0; _ < _.length; _++)
          if (((_ = _[_[_]]), _ == null)) return null;
        return _;
      }),
      (goog.globalize = function (_, _) {
        for (var _ in ((_ ||= goog.global), _)) _[_] = _[_];
      }),
      (goog.addDependency = function (_, _, _, _) {
        !COMPILED &&
          goog.DEPENDENCIES_ENABLED &&
          goog.debugLoader_.addDependency(_, _, _, _);
      }),
      (goog.ENABLE_DEBUG_LOADER = !0),
      (goog.logToConsole_ = function (_) {
        goog.global.console && goog.global.console.error(_);
      }),
      (goog.require = function (_) {
        if (!COMPILED) {
          if (
            (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(_),
            goog.isProvided_(_))
          ) {
            if (goog.isInModuleLoader_()) return goog.module.getInternal_(_);
          } else if (goog.ENABLE_DEBUG_LOADER) {
            var _ = goog.moduleLoaderState_;
            goog.moduleLoaderState_ = null;
            try {
              goog.debugLoader_.load_(_);
            } finally {
              goog.moduleLoaderState_ = _;
            }
          }
          return null;
        }
      }),
      (goog.requireType = function (_) {
        return {};
      }),
      (goog.basePath = ``),
      (goog.nullFunction = function () {}),
      (goog.abstractMethod = function () {
        throw Error(`unimplemented abstract method`);
      }),
      (goog.addSingletonGetter = function (_) {
        ((_.instance_ = void 0),
          (_.getInstance = function () {
            return _.instance_
              ? _.instance_
              : (goog.DEBUG &&
                  (goog.instantiatedSingletons_[
                    goog.instantiatedSingletons_.length
                  ] = _),
                (_.instance_ = new _()));
          }));
      }),
      (goog.instantiatedSingletons_ = []),
      (goog.LOAD_MODULE_USING_EVAL = !0),
      (goog.SEAL_MODULE_EXPORTS = goog.DEBUG),
      (goog.loadedModules_ = {}),
      (goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER),
      (goog.TRANSPILE = `detect`),
      (goog.ASSUME_ES_MODULES_TRANSPILED = !1),
      (goog.TRANSPILE_TO_LANGUAGE = ``),
      (goog.TRANSPILER = `transpile.js`),
      (goog.hasBadLetScoping = null),
      (goog.useSafari10Workaround = function () {
        if (goog.hasBadLetScoping == null) {
          try {
            var _ = !eval(
              `"use strict";let x = 1; function f() { return typeof x; };f() == "number";`,
            );
          } catch {
            _ = !1;
          }
          goog.hasBadLetScoping = _;
        }
        return goog.hasBadLetScoping;
      }),
      (goog.workaroundSafari10EvalBug = function (_) {
        return (
          `(function(){` +
          _ +
          `
;})();
`
        );
      }),
      (goog.loadModule = function (_) {
        var _ = goog.moduleLoaderState_;
        try {
          if (
            ((goog.moduleLoaderState_ = {
              moduleName: ``,
              declareLegacyNamespace: !1,
              type: goog.ModuleType.GOOG,
            }),
            goog.isFunction(_))
          )
            var _ = _.call(void 0, {});
          else if (typeof _ == `string`)
            (goog.useSafari10Workaround() &&
              (_ = goog.workaroundSafari10EvalBug(_)),
              (_ = goog.loadModuleFromSource_.call(void 0, _)));
          else throw Error(`Invalid module definition`);
          var _ = goog.moduleLoaderState_.moduleName;
          if (typeof _ == `string` && _)
            (goog.moduleLoaderState_.declareLegacyNamespace
              ? goog.constructNamespace_(_, _)
              : goog.SEAL_MODULE_EXPORTS &&
                Object.seal &&
                typeof _ == `object` &&
                _ &&
                Object.seal(_),
              (goog.loadedModules_[_] = {
                exports: _,
                type: goog.ModuleType.GOOG,
                moduleId: goog.moduleLoaderState_.moduleName,
              }));
          else throw Error(`Invalid module name "` + _ + `"`);
        } finally {
          goog.moduleLoaderState_ = _;
        }
      }),
      (goog.loadModuleFromSource_ = function (_) {
        return (eval(_), {});
      }),
      (goog.normalizePath_ = function (_) {
        _ = _.split(`/`);
        for (var _ = 0; _ < _.length;)
          _[_] == `.`
            ? _.splice(_, 1)
            : _ && _[_] == `..` && _[_ - 1] && _[_ - 1] != `..`
              ? _.splice(--_, 2)
              : _++;
        return _.join(`/`);
      }),
      (goog.loadFileSync_ = function (_) {
        if (goog.global.CLOSURE_LOAD_FILE_SYNC)
          return goog.global.CLOSURE_LOAD_FILE_SYNC(_);
        try {
          var _ = new goog.global.XMLHttpRequest();
          return (
            _.open(`get`, _, !1),
            _.send(),
            _.status == 0 || _.status == 200 ? _.responseText : null
          );
        } catch {
          return null;
        }
      }),
      (goog.transpile_ = function (_, _, _) {
        var _ = goog.global.$jscomp;
        _ || (goog.global.$jscomp = _ = {});
        var _ = _.transpile;
        if (!_) {
          var _ = goog.basePath + goog.TRANSPILER,
            _ = goog.loadFileSync_(_);
          if (_) {
            if (
              (function () {
                (0, eval)(
                  _ +
                    `
//# sourceURL=` +
                    _,
                );
              }.call(goog.global),
              goog.global.$gwtExport &&
                goog.global.$gwtExport.$jscomp &&
                !goog.global.$gwtExport.$jscomp.transpile)
            )
              throw Error(
                `The transpiler did not properly export the "transpile" method. $gwtExport: ` +
                  JSON.stringify(goog.global.$gwtExport),
              );
            ((goog.global.$jscomp.transpile =
              goog.global.$gwtExport.$jscomp.transpile),
              (_ = goog.global.$jscomp),
              (_ = _.transpile));
          }
        }
        return (
          (_ ||= _.transpile =
            function (_, _) {
              return (
                goog.logToConsole_(
                  _ + ` requires transpilation but no transpiler was found.`,
                ),
                _
              );
            }),
          _(_, _, _)
        );
      }),
      (goog.typeOf = function (_) {
        var _ = typeof _;
        if (_ == `object`) {
          if (_) {
            if (_ instanceof Array) return `array`;
            if (_ instanceof Object) return _;
            var _ = Object.prototype.toString.call(_);
            if (_ == `[object Window]`) return `object`;
            if (
              _ == `[object Array]` ||
              (typeof _.length == `number` &&
                _.splice !== void 0 &&
                _.propertyIsEnumerable !== void 0 &&
                !_.propertyIsEnumerable(`splice`))
            )
              return `array`;
            if (
              _ == `[object Function]` ||
              (_.call !== void 0 &&
                _.propertyIsEnumerable !== void 0 &&
                !_.propertyIsEnumerable(`call`))
            )
              return `function`;
          } else return `null`;
        } else if (_ == `function` && _.call === void 0) return `object`;
        return _;
      }),
      (goog.isArray = function (_) {
        return goog.typeOf(_) == `array`;
      }),
      (goog.isArrayLike = function (_) {
        var _ = goog.typeOf(_);
        return _ == `array` || (_ == `object` && typeof _.length == `number`);
      }),
      (goog.isDateLike = function (_) {
        return goog.isObject(_) && typeof _.getFullYear == `function`;
      }),
      (goog.isFunction = function (_) {
        return goog.typeOf(_) == `function`;
      }),
      (goog.isObject = function (_) {
        var _ = typeof _;
        return (_ == `object` && _ != null) || _ == `function`;
      }),
      (goog.getUid = function (_) {
        return (
          (Object.prototype.hasOwnProperty.call(_, goog.UID_PROPERTY_) &&
            _[goog.UID_PROPERTY_]) ||
          (_[goog.UID_PROPERTY_] = ++goog.uidCounter_)
        );
      }),
      (goog.hasUid = function (_) {
        return !!_[goog.UID_PROPERTY_];
      }),
      (goog.removeUid = function (_) {
        _ !== null &&
          `removeAttribute` in _ &&
          _.removeAttribute(goog.UID_PROPERTY_);
        try {
          delete _[goog.UID_PROPERTY_];
        } catch {}
      }),
      (goog.UID_PROPERTY_ = `closure_uid_` + ((1e9 * Math.random()) >>> 0)),
      (goog.uidCounter_ = 0),
      (goog.getHashCode = goog.getUid),
      (goog.removeHashCode = goog.removeUid),
      (goog.cloneObject = function (_) {
        var _ = goog.typeOf(_);
        if (_ == `object` || _ == `array`) {
          if (typeof _.clone == `function`) return _.clone();
          for (var _ in ((_ = _ == `array` ? [] : {}), _))
            _[_] = goog.cloneObject(_[_]);
          return _;
        }
        return _;
      }),
      (goog.bindNative_ = function (_, _, _) {
        return _.call.apply(_.bind, arguments);
      }),
      (goog.bindJs_ = function (_, _, _) {
        if (!_) throw Error();
        if (2 < arguments.length) {
          var _ = Array.prototype.slice.call(arguments, 2);
          return function () {
            var _ = Array.prototype.slice.call(arguments);
            return (Array.prototype.unshift.apply(_, _), _.apply(_, _));
          };
        }
        return function () {
          return _.apply(_, arguments);
        };
      }),
      (goog.bind = function (_, _, _) {
        return (
          (goog.bind =
            Function.prototype.bind &&
            Function.prototype.bind.toString().indexOf(`native code`) != -1
              ? goog.bindNative_
              : goog.bindJs_),
          goog.bind.apply(null, arguments)
        );
      }),
      (goog.partial = function (_, _) {
        var _ = Array.prototype.slice.call(arguments, 1);
        return function () {
          var _ = _.slice();
          return (_.push.apply(_, arguments), _.apply(this, _));
        };
      }),
      (goog.mixin = function (_, _) {
        for (var _ in _) _[_] = _[_];
      }),
      (goog.now =
        (goog.TRUSTED_SITE && Date.now) ||
        function () {
          return +new Date();
        }),
      (goog.globalEval = function (_) {
        if (goog.global.execScript) goog.global.execScript(_, `JavaScript`);
        else if (goog.global.eval) {
          if (goog.evalWorksForGlobals_ == null) {
            try {
              goog.global.eval(`var _evalTest_ = 1;`);
            } catch {}
            if (goog.global._evalTest_ !== void 0) {
              try {
                delete goog.global._evalTest_;
              } catch {}
              goog.evalWorksForGlobals_ = !0;
            } else goog.evalWorksForGlobals_ = !1;
          }
          if (goog.evalWorksForGlobals_) goog.global.eval(_);
          else {
            var _ = goog.global.document,
              _ = _.createElement(`script`);
            ((_.type = `text/javascript`),
              (_.defer = !1),
              _.appendChild(_.createTextNode(_)),
              _.head.appendChild(_),
              _.head.removeChild(_));
          }
        } else throw Error(`goog.globalEval not available`);
      }),
      (goog.evalWorksForGlobals_ = null),
      (goog.getCssName = function (_, _) {
        if (String(_).charAt(0) == `.`)
          throw Error(
            `className passed in goog.getCssName must not start with ".". You passed: ` +
              _,
          );
        var _ = function (_) {
            return goog.cssNameMapping_[_] || _;
          },
          _ = function (_) {
            _ = _.split(`-`);
            for (var _ = [], _ = 0; _ < _.length; _++) _.push(_(_[_]));
            return _.join(`-`);
          };
        return (
          (_ = goog.cssNameMapping_
            ? goog.cssNameMappingStyle_ == `BY_WHOLE`
              ? _
              : _
            : function (_) {
                return _;
              }),
          (_ = _ ? _ + `-` + _(_) : _(_)),
          goog.global.CLOSURE_CSS_NAME_MAP_FN
            ? goog.global.CLOSURE_CSS_NAME_MAP_FN(_)
            : _
        );
      }),
      (goog.setCssNameMapping = function (_, _) {
        ((goog.cssNameMapping_ = _), (goog.cssNameMappingStyle_ = _));
      }),
      !COMPILED &&
        goog.global.CLOSURE_CSS_NAME_MAPPING &&
        (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
      (goog.getMsg = function (_, _, _) {
        return (
          _ && _.html && (_ = _.replace(/</g, `&lt;`)),
          _ &&
            (_ = _.replace(/\{\$([^}]+)}/g, function (_, _) {
              return _ != null && _ in _ ? _[_] : _;
            })),
          _
        );
      }),
      (goog.getMsgWithFallback = function (_, _) {
        return _;
      }),
      (goog.exportSymbol = function (_, _, _) {
        goog.exportPath_(_, _, _);
      }),
      (goog.exportProperty = function (_, _, _) {
        _[_] = _;
      }),
      (goog.inherits = function (_, _) {
        function _() {}
        ((_.prototype = _.prototype),
          (_.superClass_ = _.prototype),
          (_.prototype = new _()),
          (_.prototype.constructor = _),
          (_.base = function (_, _, _) {
            for (
              var _ = Array(arguments.length - 2), _ = 2;
              _ < arguments.length;
              _++
            )
              _[_ - 2] = arguments[_];
            return _.prototype[_].apply(_, _);
          }));
      }),
      (goog.scope = function (_) {
        if (goog.isInModuleLoader_())
          throw Error(`goog.scope is not supported within a module.`);
        _.call(goog.global);
      }),
      COMPILED || (goog.global.COMPILED = COMPILED),
      (goog.defineClass = function (_, _) {
        var _ = _.constructor,
          _ = _.statics;
        return (
          (_ && _ != Object.prototype.constructor) ||
            (_ = function () {
              throw Error(
                `cannot instantiate an interface (no constructor defined).`,
              );
            }),
          (_ = goog.defineClass.createSealingConstructor_(_, _)),
          _ && goog.inherits(_, _),
          delete _.constructor,
          delete _.statics,
          goog.defineClass.applyProperties_(_.prototype, _),
          _ != null &&
            (_ instanceof Function
              ? _(_)
              : goog.defineClass.applyProperties_(_, _)),
          _
        );
      }),
      (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
      (goog.defineClass.createSealingConstructor_ = function (_, _) {
        if (!goog.defineClass.SEAL_CLASS_INSTANCES) return _;
        var _ = !goog.defineClass.isUnsealable_(_),
          _ = function () {
            var _ = _.apply(this, arguments) || this;
            return (
              (_[goog.UID_PROPERTY_] = _[goog.UID_PROPERTY_]),
              this.constructor === _ &&
                _ &&
                Object.seal instanceof Function &&
                Object.seal(_),
              _
            );
          };
        return _;
      }),
      (goog.defineClass.isUnsealable_ = function (_) {
        return (
          _ && _.prototype && _.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
        );
      }),
      (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
        `constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf`.split(
          ` `,
        )),
      (goog.defineClass.applyProperties_ = function (_, _) {
        for (var _ in _)
          Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
        for (
          var _ = 0;
          _ < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;
          _++
        )
          ((_ = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[_]),
            Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]));
      }),
      (goog.tagUnsealableClass = function (_) {
        !COMPILED &&
          goog.defineClass.SEAL_CLASS_INSTANCES &&
          (_.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
      }),
      (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = `goog_defineClass_legacy_unsealable`),
      !COMPILED &&
        goog.DEPENDENCIES_ENABLED &&
        ((goog.inHtmlDocument_ = function () {
          var _ = goog.global.document;
          return _ != null && `write` in _;
        }),
        (goog.isDocumentLoading_ = function () {
          var _ = goog.global.document;
          return _.attachEvent
            ? _.readyState != `complete`
            : _.readyState == `loading`;
        }),
        (goog.findBasePath_ = function () {
          if (
            goog.global.CLOSURE_BASE_PATH != null &&
            typeof goog.global.CLOSURE_BASE_PATH == `string`
          )
            goog.basePath = goog.global.CLOSURE_BASE_PATH;
          else if (goog.inHtmlDocument_()) {
            var _ = goog.global.document,
              _ = _.currentScript;
            for (
              _ = _ ? [_] : _.getElementsByTagName(`SCRIPT`), _ = _.length - 1;
              0 <= _;
              --_
            ) {
              var _ = _[_].src,
                _ = _.lastIndexOf(`?`);
              if (
                ((_ = _ == -1 ? _.length : _), _.substr(_ - 7, 7) == `base.js`)
              ) {
                goog.basePath = _.substr(0, _ - 7);
                break;
              }
            }
          }
        }),
        goog.findBasePath_(),
        (goog.Transpiler = function () {
          ((this.requiresTranspilation_ = null),
            (this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE));
        }),
        (goog.Transpiler.prototype.createRequiresTranspilation_ = function () {
          function _(_, _) {
            _ ? (_[_] = !0) : _() ? ((_ = _), (_[_] = !1)) : (_ = _[_] = !0);
          }
          function _(_) {
            try {
              return !!eval(_);
            } catch {
              return !1;
            }
          }
          var _ = `es3`,
            _ = {
              es3: !1,
            },
            _ = !1,
            _ =
              goog.global.navigator && goog.global.navigator.userAgent
                ? goog.global.navigator.userAgent
                : ``;
          return (
            _(`es5`, function () {
              return _(`[1,].length==1`);
            }),
            _(`es6`, function () {
              return (
                !_.match(/Edge\/(\d+)(\.\d)*/i) &&
                _(
                  `(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()`,
                )
              );
            }),
            _(`es7`, function () {
              return _(`2 ** 2 == 4`);
            }),
            _(`es8`, function () {
              return _(`async () => 1, true`);
            }),
            _(`es9`, function () {
              return _(`({...rest} = {}), true`);
            }),
            _(`es_next`, function () {
              return !1;
            }),
            {
              target: _,
              map: _,
            }
          );
        }),
        (goog.Transpiler.prototype.needsTranspile = function (_, _) {
          if (goog.TRANSPILE == `always`) return !0;
          if (goog.TRANSPILE == `never`) return !1;
          if (!this.requiresTranspilation_) {
            var _ = this.createRequiresTranspilation_();
            ((this.requiresTranspilation_ = _.map),
              (this.transpilationTarget_ =
                this.transpilationTarget_ || _.target));
          }
          if (_ in this.requiresTranspilation_)
            return this.requiresTranspilation_[_]
              ? !0
              : !(
                  !goog.inHtmlDocument_() ||
                  _ != `es6` ||
                  `noModule` in goog.global.document.createElement(`script`)
                );
          throw Error(`Unknown language mode: ` + _);
        }),
        (goog.Transpiler.prototype.transpile = function (_, _) {
          return goog.transpile_(_, _, this.transpilationTarget_);
        }),
        (goog.transpiler_ = new goog.Transpiler()),
        (goog.protectScriptTag_ = function (_) {
          return _.replace(/<\/(SCRIPT)/gi, `\\x3c/$1`);
        }),
        (goog.DebugLoader_ = function () {
          ((this.dependencies_ = {}),
            (this.idToPath_ = {}),
            (this.written_ = {}),
            (this.loadingDeps_ = []),
            (this.depsToLoad_ = []),
            (this.paused_ = !1),
            (this.factory_ = new goog.DependencyFactory(goog.transpiler_)),
            (this.deferredCallbacks_ = {}),
            (this.deferredQueue_ = []));
        }),
        (goog.DebugLoader_.prototype.bootstrap = function (_, _) {
          function _() {
            _ &&= (goog.global.setTimeout(_, 0), null);
          }
          var _ = _;
          if (_.length) {
            _ = [];
            for (var _ = 0; _ < _.length; _++) {
              var _ = this.getPathFromDeps_(_[_]);
              if (!_) throw Error(`Unregonized namespace: ` + _[_]);
              _.push(this.dependencies_[_]);
            }
            _ = goog.require;
            var _ = 0;
            for (_ = 0; _ < _.length; _++)
              (_(_[_]),
                _[_].onLoad(function () {
                  ++_ == _.length && _();
                }));
          } else _();
        }),
        (goog.DebugLoader_.prototype.loadClosureDeps = function () {
          (this.depsToLoad_.push(
            this.factory_.createDependency(
              goog.normalizePath_(goog.basePath + `deps.js`),
              `deps.js`,
              [],
              [],
              {},
              !1,
            ),
          ),
            this.loadDeps_());
        }),
        (goog.DebugLoader_.prototype.requested = function (_, _) {
          (_ = this.getPathFromDeps_(_)) &&
            (_ || this.areDepsLoaded_(this.dependencies_[_].requires)) &&
            (_ = this.deferredCallbacks_[_]) &&
            (delete this.deferredCallbacks_[_], _());
        }),
        (goog.DebugLoader_.prototype.setDependencyFactory = function (_) {
          this.factory_ = _;
        }),
        (goog.DebugLoader_.prototype.load_ = function (_) {
          if (this.getPathFromDeps_(_)) {
            var _ = this,
              _ = [],
              _ = function (_) {
                var _ = _.getPathFromDeps_(_);
                if (!_) throw Error(`Bad dependency path or symbol: ` + _);
                if (!_.written_[_]) {
                  for (
                    _.written_[_] = !0, _ = _.dependencies_[_], _ = 0;
                    _ < _.requires.length;
                    _++
                  )
                    goog.isProvided_(_.requires[_]) || _(_.requires[_]);
                  _.push(_);
                }
              };
            (_(_),
              (_ = !!this.depsToLoad_.length),
              (this.depsToLoad_ = this.depsToLoad_.concat(_)),
              this.paused_ || _ || this.loadDeps_());
          } else
            throw (
              (_ = `goog.require could not find: ` + _),
              goog.logToConsole_(_),
              Error(_)
            );
        }),
        (goog.DebugLoader_.prototype.loadDeps_ = function () {
          for (var _ = this, _ = this.paused_; this.depsToLoad_.length && !_;)
            (function () {
              var _ = !1,
                _ = _.depsToLoad_.shift(),
                _ = !1;
              _.loading_(_);
              var _ = {
                pause: function () {
                  if (_)
                    throw Error(`Cannot call pause after the call to load.`);
                  _ = !0;
                },
                resume: function () {
                  _ ? _.resume_() : (_ = !1);
                },
                loaded: function () {
                  if (_) throw Error(`Double call to loaded.`);
                  ((_ = !0), _.loaded_(_));
                },
                pending: function () {
                  for (var _ = [], _ = 0; _ < _.loadingDeps_.length; _++)
                    _.push(_.loadingDeps_[_]);
                  return _;
                },
                setModuleState: function (_) {
                  goog.moduleLoaderState_ = {
                    type: _,
                    moduleName: ``,
                    declareLegacyNamespace: !1,
                  };
                },
                registerEs6ModuleExports: function (_, _, _) {
                  _ &&
                    (goog.loadedModules_[_] = {
                      exports: _,
                      type: goog.ModuleType.ES6,
                      moduleId: _ || ``,
                    });
                },
                registerGoogModuleExports: function (_, _) {
                  goog.loadedModules_[_] = {
                    exports: _,
                    type: goog.ModuleType.GOOG,
                    moduleId: _,
                  };
                },
                clearModuleState: function () {
                  goog.moduleLoaderState_ = null;
                },
                defer: function (_) {
                  if (_)
                    throw Error(
                      `Cannot register with defer after the call to load.`,
                    );
                  _.defer_(_, _);
                },
                areDepsLoaded: function () {
                  return _.areDepsLoaded_(_.requires);
                },
              };
              try {
                _.load(_);
              } finally {
                _ = !0;
              }
            })();
          _ && this.pause_();
        }),
        (goog.DebugLoader_.prototype.pause_ = function () {
          this.paused_ = !0;
        }),
        (goog.DebugLoader_.prototype.resume_ = function () {
          this.paused_ && ((this.paused_ = !1), this.loadDeps_());
        }),
        (goog.DebugLoader_.prototype.loading_ = function (_) {
          this.loadingDeps_.push(_);
        }),
        (goog.DebugLoader_.prototype.loaded_ = function (_) {
          for (var _ = 0; _ < this.loadingDeps_.length; _++)
            if (this.loadingDeps_[_] == _) {
              this.loadingDeps_.splice(_, 1);
              break;
            }
          for (_ = 0; _ < this.deferredQueue_.length; _++)
            if (this.deferredQueue_[_] == _.path) {
              this.deferredQueue_.splice(_, 1);
              break;
            }
          if (
            this.loadingDeps_.length == this.deferredQueue_.length &&
            !this.depsToLoad_.length
          )
            for (; this.deferredQueue_.length;)
              this.requested(this.deferredQueue_.shift(), !0);
          _.loaded();
        }),
        (goog.DebugLoader_.prototype.areDepsLoaded_ = function (_) {
          for (var _ = 0; _ < _.length; _++) {
            var _ = this.getPathFromDeps_(_[_]);
            if (!_ || !(_ in this.deferredCallbacks_ || goog.isProvided_(_[_])))
              return !1;
          }
          return !0;
        }),
        (goog.DebugLoader_.prototype.getPathFromDeps_ = function (_) {
          return _ in this.idToPath_
            ? this.idToPath_[_]
            : _ in this.dependencies_
              ? _
              : null;
        }),
        (goog.DebugLoader_.prototype.defer_ = function (_, _) {
          ((this.deferredCallbacks_[_.path] = _),
            this.deferredQueue_.push(_.path));
        }),
        (goog.LoadController = function () {}),
        (goog.LoadController.prototype.pause = function () {}),
        (goog.LoadController.prototype.resume = function () {}),
        (goog.LoadController.prototype.loaded = function () {}),
        (goog.LoadController.prototype.pending = function () {}),
        (goog.LoadController.prototype.registerEs6ModuleExports = function (
          _,
          _,
          _,
        ) {}),
        (goog.LoadController.prototype.setModuleState = function (_) {}),
        (goog.LoadController.prototype.clearModuleState = function () {}),
        (goog.LoadController.prototype.defer = function (_) {}),
        (goog.LoadController.prototype.areDepsLoaded = function () {}),
        (goog.Dependency = function (_, _, _, _, _) {
          ((this.path = _),
            (this.relativePath = _),
            (this.provides = _),
            (this.requires = _),
            (this.loadFlags = _),
            (this.loaded_ = !1),
            (this.loadCallbacks_ = []));
        }),
        (goog.Dependency.prototype.getPathName = function () {
          var _ = this.path,
            _ = _.indexOf(`://`);
          return (
            0 <= _ &&
              ((_ = _.substring(_ + 3)),
              (_ = _.indexOf(`/`)),
              0 <= _ && (_ = _.substring(_ + 1))),
            _
          );
        }),
        (goog.Dependency.prototype.onLoad = function (_) {
          this.loaded_ ? _() : this.loadCallbacks_.push(_);
        }),
        (goog.Dependency.prototype.loaded = function () {
          this.loaded_ = !0;
          var _ = this.loadCallbacks_;
          this.loadCallbacks_ = [];
          for (var _ = 0; _ < _.length; _++) _[_]();
        }),
        (goog.Dependency.defer_ = !1),
        (goog.Dependency.callbackMap_ = {}),
        (goog.Dependency.registerCallback_ = function (_) {
          var _ = Math.random().toString(32);
          return ((goog.Dependency.callbackMap_[_] = _), _);
        }),
        (goog.Dependency.unregisterCallback_ = function (_) {
          delete goog.Dependency.callbackMap_[_];
        }),
        (goog.Dependency.callback_ = function (_, _) {
          if (_ in goog.Dependency.callbackMap_) {
            for (
              var _ = goog.Dependency.callbackMap_[_], _ = [], _ = 1;
              _ < arguments.length;
              _++
            )
              _.push(arguments[_]);
            _.apply(void 0, _);
          } else
            throw Error(
              `Callback key ` +
                _ +
                ` does not exist (was base.js loaded more than once?).`,
            );
        }),
        (goog.Dependency.prototype.load = function (_) {
          if (goog.global.CLOSURE_IMPORT_SCRIPT)
            goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
              ? _.loaded()
              : _.pause();
          else if (goog.inHtmlDocument_()) {
            var _ = goog.global.document;
            if (
              _.readyState == `complete` &&
              !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
            ) {
              if (/\bdeps.js$/.test(this.path)) {
                _.loaded();
                return;
              }
              throw Error(
                `Cannot write "` + this.path + `" after document load`,
              );
            }
            if (
              !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
              goog.isDocumentLoading_()
            ) {
              var _ = goog.Dependency.registerCallback_(function (_) {
                  (goog.DebugLoader_.IS_OLD_IE_ &&
                    _.readyState != `complete`) ||
                    (goog.Dependency.unregisterCallback_(_), _.loaded());
                }),
                _ =
                  !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce()
                    ? ` nonce="` + goog.getScriptNonce() + `"`
                    : ``;
              ((_ =
                `<script src="` +
                this.path +
                `" ` +
                (goog.DebugLoader_.IS_OLD_IE_
                  ? `onreadystatechange`
                  : `onload`) +
                `="goog.Dependency.callback_('` +
                _ +
                `', this)" type="text/javascript" ` +
                (goog.Dependency.defer_ ? `defer` : ``) +
                _ +
                `><\/script>`),
                _.write(
                  goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createHTML(_)
                    : _,
                ));
            } else {
              var _ = _.createElement(`script`);
              ((_.defer = goog.Dependency.defer_),
                (_.async = !1),
                (_.type = `text/javascript`),
                (_ = goog.getScriptNonce()) && _.setAttribute(`nonce`, _),
                goog.DebugLoader_.IS_OLD_IE_
                  ? (_.pause(),
                    (_.onreadystatechange = function () {
                      (_.readyState == `loaded` ||
                        _.readyState == `complete`) &&
                        (_.loaded(), _.resume());
                    }))
                  : (_.onload = function () {
                      ((_.onload = null), _.loaded());
                    }),
                (_.src = goog.TRUSTED_TYPES_POLICY_
                  ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path)
                  : this.path),
                _.head.appendChild(_));
            }
          } else
            (goog.logToConsole_(
              `Cannot use default debug loader outside of HTML documents.`,
            ),
              this.relativePath == `deps.js`
                ? (goog.logToConsole_(
                    `Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true.`,
                  ),
                  _.loaded())
                : _.pause());
        }),
        (goog.Es6ModuleDependency = function (_, _, _, _, _) {
          goog.Dependency.call(this, _, _, _, _, _);
        }),
        goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
        (goog.Es6ModuleDependency.prototype.load = function (_) {
          function _(_, _) {
            ((_ = _
              ? `<script type="module" crossorigin>` + _ + `<\/script>`
              : `<script type="module" crossorigin src="` + _ + `"><\/script>`),
              _.write(
                goog.TRUSTED_TYPES_POLICY_
                  ? goog.TRUSTED_TYPES_POLICY_.createHTML(_)
                  : _,
              ));
          }
          function _(_, _) {
            var _ = _.createElement(`script`);
            ((_.defer = !0),
              (_.async = !1),
              (_.type = `module`),
              _.setAttribute(`crossorigin`, !0));
            var _ = goog.getScriptNonce();
            (_ && _.setAttribute(`nonce`, _),
              _
                ? (_.textContent = goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createScript(_)
                    : _)
                : (_.src = goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(_)
                    : _),
              _.head.appendChild(_));
          }
          if (goog.global.CLOSURE_IMPORT_SCRIPT)
            goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
              ? _.loaded()
              : _.pause();
          else if (goog.inHtmlDocument_()) {
            var _ = goog.global.document,
              _ = this;
            if (goog.isDocumentLoading_()) {
              var _ = _;
              goog.Dependency.defer_ = !0;
            } else _ = _;
            var _ = goog.Dependency.registerCallback_(function () {
              (goog.Dependency.unregisterCallback_(_),
                _.setModuleState(goog.ModuleType.ES6));
            });
            (_(void 0, `goog.Dependency.callback_("` + _ + `")`),
              _(this.path, void 0));
            var _ = goog.Dependency.registerCallback_(function (_) {
              (goog.Dependency.unregisterCallback_(_),
                _.registerEs6ModuleExports(
                  _.path,
                  _,
                  goog.moduleLoaderState_.moduleName,
                ));
            });
            _(
              void 0,
              `import * as m from "` +
                this.path +
                `"; goog.Dependency.callback_("` +
                _ +
                `", m)`,
            );
            var _ = goog.Dependency.registerCallback_(function () {
              (goog.Dependency.unregisterCallback_(_),
                _.clearModuleState(),
                _.loaded());
            });
            _(void 0, `goog.Dependency.callback_("` + _ + `")`);
          } else
            (goog.logToConsole_(
              `Cannot use default debug loader outside of HTML documents.`,
            ),
              _.pause());
        }),
        (goog.TransformedDependency = function (_, _, _, _, _) {
          (goog.Dependency.call(this, _, _, _, _, _),
            (this.contents_ = null),
            (this.lazyFetch_ =
              !goog.inHtmlDocument_() ||
              !(`noModule` in goog.global.document.createElement(`script`))));
        }),
        goog.inherits(goog.TransformedDependency, goog.Dependency),
        (goog.TransformedDependency.prototype.load = function (_) {
          function _() {
            ((_.contents_ = goog.loadFileSync_(_.path)),
              _.contents_ &&
                ((_.contents_ = _.transform(_.contents_)),
                _.contents_ &&
                  (_.contents_ +=
                    `
//# sourceURL=` + _.path)));
          }
          function _() {
            if ((_.lazyFetch_ && _(), _.contents_)) {
              _ && _.setModuleState(goog.ModuleType.ES6);
              try {
                var _ = _.contents_;
                if (((_.contents_ = null), goog.globalEval(_), _))
                  var _ = goog.moduleLoaderState_.moduleName;
              } finally {
                _ && _.clearModuleState();
              }
              (_ &&
                goog.global.$jscomp.require.ensure(
                  [_.getPathName()],
                  function () {
                    _.registerEs6ModuleExports(
                      _.path,
                      goog.global.$jscomp.require(_.getPathName()),
                      _,
                    );
                  },
                ),
                _.loaded());
            }
          }
          function _() {
            var _ = goog.global.document,
              _ = goog.Dependency.registerCallback_(function () {
                (goog.Dependency.unregisterCallback_(_), _());
              }),
              _ =
                `<script type="text/javascript">` +
                goog.protectScriptTag_(
                  `goog.Dependency.callback_("` + _ + `");`,
                ) +
                `<\/script>`;
            _.write(
              goog.TRUSTED_TYPES_POLICY_
                ? goog.TRUSTED_TYPES_POLICY_.createHTML(_)
                : _,
            );
          }
          var _ = this;
          if (goog.global.CLOSURE_IMPORT_SCRIPT)
            (_(),
              this.contents_ &&
              goog.global.CLOSURE_IMPORT_SCRIPT(``, this.contents_)
                ? ((this.contents_ = null), _.loaded())
                : _.pause());
          else {
            var _ = this.loadFlags.module == goog.ModuleType.ES6;
            this.lazyFetch_ || _();
            var _ = 1 < _.pending().length,
              _ = _ && goog.DebugLoader_.IS_OLD_IE_;
            if (
              ((_ = goog.Dependency.defer_ && (_ || goog.isDocumentLoading_())),
              _ || _)
            )
              _.defer(function () {
                _();
              });
            else {
              var _ = goog.global.document;
              if (
                ((_ = goog.inHtmlDocument_() && `ActiveXObject` in goog.global),
                _ && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !_)
              ) {
                ((goog.Dependency.defer_ = !0), _.pause());
                var _ = _.onreadystatechange;
                _.onreadystatechange = function () {
                  (_.readyState == `interactive` &&
                    ((_.onreadystatechange = _), _(), _.resume()),
                    goog.isFunction(_) && _.apply(void 0, arguments));
                };
              } else
                !goog.DebugLoader_.IS_OLD_IE_ &&
                goog.inHtmlDocument_() &&
                goog.isDocumentLoading_()
                  ? _()
                  : _();
            }
          }
        }),
        (goog.TransformedDependency.prototype.transform = function (_) {}),
        (goog.TranspiledDependency = function (_, _, _, _, _, _) {
          (goog.TransformedDependency.call(this, _, _, _, _, _),
            (this.transpiler = _));
        }),
        goog.inherits(goog.TranspiledDependency, goog.TransformedDependency),
        (goog.TranspiledDependency.prototype.transform = function (_) {
          return this.transpiler.transpile(_, this.getPathName());
        }),
        (goog.PreTranspiledEs6ModuleDependency = function (_, _, _, _, _) {
          goog.TransformedDependency.call(this, _, _, _, _, _);
        }),
        goog.inherits(
          goog.PreTranspiledEs6ModuleDependency,
          goog.TransformedDependency,
        ),
        (goog.PreTranspiledEs6ModuleDependency.prototype.transform = function (
          _,
        ) {
          return _;
        }),
        (goog.GoogModuleDependency = function (_, _, _, _, _, _, _) {
          (goog.TransformedDependency.call(this, _, _, _, _, _),
            (this.needsTranspile_ = _),
            (this.transpiler_ = _));
        }),
        goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency),
        (goog.GoogModuleDependency.prototype.transform = function (_) {
          return (
            this.needsTranspile_ &&
              (_ = this.transpiler_.transpile(_, this.getPathName())),
            goog.LOAD_MODULE_USING_EVAL && goog.global.JSON !== void 0
              ? `goog.loadModule(` +
                goog.global.JSON.stringify(
                  _ +
                    `
//# sourceURL=` +
                    this.path +
                    `
`,
                ) +
                `);`
              : `goog.loadModule(function(exports) {"use strict";` +
                _ +
                `
;return exports});
//# sourceURL=` +
                this.path +
                `
`
          );
        }),
        (goog.DebugLoader_.IS_OLD_IE_ = !(
          goog.global.atob ||
          !goog.global.document ||
          !goog.global.document.all
        )),
        (goog.DebugLoader_.prototype.addDependency = function (_, _, _, _) {
          ((_ ||= []), (_ = _.replace(/\\/g, `/`)));
          var _ = goog.normalizePath_(goog.basePath + _);
          for (
            (_ && typeof _ != `boolean`) ||
              (_ = _
                ? {
                    module: goog.ModuleType.GOOG,
                  }
                : {}),
              _ = this.factory_.createDependency(
                _,
                _,
                _,
                _,
                _,
                goog.transpiler_.needsTranspile(_.lang || `es3`, _.module),
              ),
              this.dependencies_[_] = _,
              _ = 0;
            _ < _.length;
            _++
          )
            this.idToPath_[_[_]] = _;
          this.idToPath_[_] = _;
        }),
        (goog.DependencyFactory = function (_) {
          this.transpiler = _;
        }),
        (goog.DependencyFactory.prototype.createDependency = function (
          _,
          _,
          _,
          _,
          _,
          _,
        ) {
          return _.module == goog.ModuleType.GOOG
            ? new goog.GoogModuleDependency(_, _, _, _, _, _, this.transpiler)
            : _
              ? new goog.TranspiledDependency(_, _, _, _, _, this.transpiler)
              : _.module == goog.ModuleType.ES6
                ? goog.TRANSPILE == `never` && goog.ASSUME_ES_MODULES_TRANSPILED
                  ? new goog.PreTranspiledEs6ModuleDependency(_, _, _, _, _)
                  : new goog.Es6ModuleDependency(_, _, _, _, _)
                : new goog.Dependency(_, _, _, _, _);
        }),
        (goog.debugLoader_ = new goog.DebugLoader_()),
        (goog.loadClosureDeps = function () {
          goog.debugLoader_.loadClosureDeps();
        }),
        (goog.setDependencyFactory = function (_) {
          goog.debugLoader_.setDependencyFactory(_);
        }),
        goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(),
        (goog.bootstrap = function (_, _) {
          goog.debugLoader_.bootstrap(_, _);
        })),
      (goog.TRUSTED_TYPES_POLICY_NAME = ``),
      (goog.identity_ = function (_) {
        return _;
      }),
      (goog.createTrustedTypesPolicy = function (_) {
        var _ = null,
          _ = goog.global.trustedTypes || goog.global.TrustedTypes;
        if (!_ || !_.createPolicy) return _;
        try {
          _ = _.createPolicy(_, {
            createHTML: goog.identity_,
            createScript: goog.identity_,
            createScriptURL: goog.identity_,
            createURL: goog.identity_,
          });
        } catch (_) {
          goog.logToConsole_(_.message);
        }
        return _;
      }),
      (goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
        ? goog.createTrustedTypesPolicy(
            goog.TRUSTED_TYPES_POLICY_NAME + `#base`,
          )
        : null),
      (goog.object = {}),
      (goog.object._ = function (_, _) {
        return _ === _ ? _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
      }),
      (goog.object.forEach = function (_, _, _) {
        for (var _ in _) _.call(_, _[_], _, _);
      }),
      (goog.object.filter = function (_, _, _) {
        var _ = {},
          _;
        for (_ in _) _.call(_, _[_], _, _) && (_[_] = _[_]);
        return _;
      }),
      (goog.object.map = function (_, _, _) {
        var _ = {},
          _;
        for (_ in _) _[_] = _.call(_, _[_], _, _);
        return _;
      }),
      (goog.object.some = function (_, _, _) {
        for (var _ in _) if (_.call(_, _[_], _, _)) return !0;
        return !1;
      }),
      (goog.object.every = function (_, _, _) {
        for (var _ in _) if (!_.call(_, _[_], _, _)) return !1;
        return !0;
      }),
      (goog.object.getCount = function (_) {
        var _ = 0,
          _;
        for (_ in _) _++;
        return _;
      }),
      (goog.object.getAnyKey = function (_) {
        for (var _ in _) return _;
      }),
      (goog.object.getAnyValue = function (_) {
        for (var _ in _) return _[_];
      }),
      (goog.object.contains = function (_, _) {
        return goog.object.containsValue(_, _);
      }),
      (goog.object.getValues = function (_) {
        var _ = [],
          _ = 0,
          _;
        for (_ in _) _[_++] = _[_];
        return _;
      }),
      (goog.object.getKeys = function (_) {
        var _ = [],
          _ = 0,
          _;
        for (_ in _) _[_++] = _;
        return _;
      }),
      (goog.object.getValueByKeys = function (_, _) {
        var _ = goog.isArrayLike(_),
          _ = _ ? _ : arguments;
        for (_ = +!_; _ < _.length; _++) {
          if (_ == null) return;
          _ = _[_[_]];
        }
        return _;
      }),
      (goog.object.containsKey = function (_, _) {
        return _ !== null && _ in _;
      }),
      (goog.object.containsValue = function (_, _) {
        for (var _ in _) if (_[_] == _) return !0;
        return !1;
      }),
      (goog.object.findKey = function (_, _, _) {
        for (var _ in _) if (_.call(_, _[_], _, _)) return _;
      }),
      (goog.object.findValue = function (_, _, _) {
        return (_ = goog.object.findKey(_, _, _)) && _[_];
      }),
      (goog.object.isEmpty = function (_) {
        for (var _ in _) return !1;
        return !0;
      }),
      (goog.object.clear = function (_) {
        for (var _ in _) delete _[_];
      }),
      (goog.object.remove = function (_, _) {
        var _;
        return ((_ = _ in _) && delete _[_], _);
      }),
      (goog.object.add = function (_, _, _) {
        if (_ !== null && _ in _)
          throw Error(`The object already contains the key "` + _ + `"`);
        goog.object.set(_, _, _);
      }),
      (goog.object.get = function (_, _, _) {
        return _ !== null && _ in _ ? _[_] : _;
      }),
      (goog.object.set = function (_, _, _) {
        _[_] = _;
      }),
      (goog.object.setIfUndefined = function (_, _, _) {
        return _ in _ ? _[_] : (_[_] = _);
      }),
      (goog.object.setWithReturnValueIfNotSet = function (_, _, _) {
        return _ in _ ? _[_] : ((_ = _()), (_[_] = _));
      }),
      (goog.object.equals = function (_, _) {
        for (var _ in _) if (!(_ in _) || _[_] !== _[_]) return !1;
        for (var _ in _) if (!(_ in _)) return !1;
        return !0;
      }),
      (goog.object.clone = function (_) {
        var _ = {},
          _;
        for (_ in _) _[_] = _[_];
        return _;
      }),
      (goog.object.unsafeClone = function (_) {
        var _ = goog.typeOf(_);
        if (_ == `object` || _ == `array`) {
          if (goog.isFunction(_.clone)) return _.clone();
          for (var _ in ((_ = _ == `array` ? [] : {}), _))
            _[_] = goog.object.unsafeClone(_[_]);
          return _;
        }
        return _;
      }),
      (goog.object.transpose = function (_) {
        var _ = {},
          _;
        for (_ in _) _[_[_]] = _;
        return _;
      }),
      (goog.object.PROTOTYPE_FIELDS_ =
        `constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf`.split(
          ` `,
        )),
      (goog.object.extend = function (_, _) {
        for (var _, _, _ = 1; _ < arguments.length; _++) {
          for (_ in ((_ = arguments[_]), _)) _[_] = _[_];
          for (var _ = 0; _ < goog.object.PROTOTYPE_FIELDS_.length; _++)
            ((_ = goog.object.PROTOTYPE_FIELDS_[_]),
              Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]));
        }
      }),
      (goog.object.create = function (_) {
        var _ = arguments.length;
        if (_ == 1 && Array.isArray(arguments[0]))
          return goog.object.create.apply(null, arguments[0]);
        if (_ % 2) throw Error(`Uneven number of arguments`);
        for (var _ = {}, _ = 0; _ < _; _ += 2)
          _[arguments[_]] = arguments[_ + 1];
        return _;
      }),
      (goog.object.createSet = function (_) {
        var _ = arguments.length;
        if (_ == 1 && Array.isArray(arguments[0]))
          return goog.object.createSet.apply(null, arguments[0]);
        for (var _ = {}, _ = 0; _ < _; _++) _[arguments[_]] = !0;
        return _;
      }),
      (goog.object.createImmutableView = function (_) {
        var _ = _;
        return (
          Object.isFrozen &&
            !Object.isFrozen(_) &&
            ((_ = Object.create(_)), Object.freeze(_)),
          _
        );
      }),
      (goog.object.isImmutableView = function (_) {
        return !!Object.isFrozen && Object.isFrozen(_);
      }),
      (goog.object.getAllPropertyNames = function (_, _, _) {
        if (!_) return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
          return goog.object.getKeys(_);
        for (
          var _ = {};
          _ && (_ !== Object.prototype || _) && (_ !== Function.prototype || _);
        ) {
          for (var _ = Object.getOwnPropertyNames(_), _ = 0; _ < _.length; _++)
            _[_[_]] = !0;
          _ = Object.getPrototypeOf(_);
        }
        return goog.object.getKeys(_);
      }),
      (goog.object.getSuperClass = function (_) {
        return (_ = Object.getPrototypeOf(_.prototype)) && _.constructor;
      }));
    var jspb = {
      asserts: {},
    };
    ((jspb.asserts.doAssertFailure = function (_, _, _, _) {
      var _ = `Assertion failed`;
      if (_) {
        _ += `: ` + _;
        var _ = _;
      } else _ && ((_ += `: ` + _), (_ = _));
      throw Error(`` + _, _ || []);
    }),
      (jspb.asserts.assert = function (_, _, _) {
        var _ = [...arguments].slice(2);
        return (_ || jspb.asserts.doAssertFailure(``, null, _, _), _);
      }),
      (jspb.asserts.assertString = function (_, _, _) {
        var _ = [...arguments].slice(2);
        return (
          typeof _ != `string` &&
            jspb.asserts.doAssertFailure(
              `Expected string but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              _,
            ),
          _
        );
      }),
      (jspb.asserts.assertArray = function (_, _, _) {
        var _ = [...arguments].slice(2);
        return (
          Array.isArray(_) ||
            jspb.asserts.doAssertFailure(
              `Expected array but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              _,
            ),
          _
        );
      }),
      (jspb.asserts.fail = function (_, _) {
        var _ = [...arguments].slice(1);
        throw Error(`Failure` + (_ ? `: ` + _ : ``), _);
      }),
      (jspb.asserts.assertInstanceof = function (_, _, _, _) {
        var _ = [...arguments].slice(3);
        return (
          _ instanceof _ ||
            jspb.asserts.doAssertFailure(
              `Expected instanceof %s but got %s.`,
              [jspb.asserts.getType(_), jspb.asserts.getType(_)],
              _,
              _,
            ),
          _
        );
      }),
      (jspb.asserts.getType = function (_) {
        return _ instanceof Function
          ? _.displayName || _.name || `unknown type name`
          : _ instanceof Object
            ? _.constructor.displayName ||
              _.constructor.name ||
              Object.prototype.toString.call(_)
            : _ === null
              ? `null`
              : typeof _;
      }),
      (jspb.BinaryConstants = {}),
      (jspb.ConstBinaryMessage = function () {}),
      (jspb.BinaryMessage = function () {}),
      (jspb.BinaryConstants.FieldType = {
        INVALID: -1,
        DOUBLE: 1,
        FLOAT: 2,
        INT64: 3,
        UINT64: 4,
        INT32: 5,
        FIXED64: 6,
        FIXED32: 7,
        BOOL: 8,
        STRING: 9,
        GROUP: 10,
        MESSAGE: 11,
        BYTES: 12,
        UINT32: 13,
        ENUM: 14,
        SFIXED32: 15,
        SFIXED64: 16,
        SINT32: 17,
        SINT64: 18,
        FHASH64: 30,
        VHASH64: 31,
      }),
      (jspb.BinaryConstants.WireType = {
        INVALID: -1,
        VARINT: 0,
        FIXED64: 1,
        DELIMITED: 2,
        START_GROUP: 3,
        END_GROUP: 4,
        FIXED32: 5,
      }),
      (jspb.BinaryConstants.FieldTypeToWireType = function (_) {
        var _ = jspb.BinaryConstants.FieldType,
          _ = jspb.BinaryConstants.WireType;
        switch (_) {
          case _.INT32:
          case _.INT64:
          case _.UINT32:
          case _.UINT64:
          case _.SINT32:
          case _.SINT64:
          case _.BOOL:
          case _.ENUM:
          case _.VHASH64:
            return _.VARINT;
          case _.DOUBLE:
          case _.FIXED64:
          case _.SFIXED64:
          case _.FHASH64:
            return _.FIXED64;
          case _.STRING:
          case _.MESSAGE:
          case _.BYTES:
            return _.DELIMITED;
          case _.FLOAT:
          case _.FIXED32:
          case _.SFIXED32:
            return _.FIXED32;
          default:
            return _.INVALID;
        }
      }),
      (jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1),
      (jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60),
      (jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54),
      (jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22),
      (jspb.BinaryConstants.FLOAT64_EPS = 5e-324),
      (jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324),
      (jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292),
      (jspb.BinaryConstants.TWO_TO_20 = 1048576),
      (jspb.BinaryConstants.TWO_TO_23 = 8388608),
      (jspb.BinaryConstants.TWO_TO_31 = 2147483648),
      (jspb.BinaryConstants.TWO_TO_32 = 4294967296),
      (jspb.BinaryConstants.TWO_TO_52 = 4503599627370496),
      (jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000),
      (jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000),
      (jspb.BinaryConstants.ZERO_HASH = `\0\0\0\0\0\0\0\0`),
      (goog.debug = {}),
      (goog.debug.Error = function (_) {
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, goog.debug.Error);
        else {
          var _ = Error().stack;
          _ && (this.stack = _);
        }
        (_ && (this.message = String(_)), (this.reportErrorToServer = !0));
      }),
      goog.inherits(goog.debug.Error, Error),
      (goog.debug.Error.prototype.name = `CustomError`),
      (goog.dom = {}),
      (goog.dom.NodeType = {
        ELEMENT: 1,
        ATTRIBUTE: 2,
        TEXT: 3,
        CDATA_SECTION: 4,
        ENTITY_REFERENCE: 5,
        ENTITY: 6,
        PROCESSING_INSTRUCTION: 7,
        COMMENT: 8,
        DOCUMENT: 9,
        DOCUMENT_TYPE: 10,
        DOCUMENT_FRAGMENT: 11,
        NOTATION: 12,
      }),
      (goog.asserts = {}),
      (goog.asserts.ENABLE_ASSERTS = goog.DEBUG),
      (goog.asserts.AssertionError = function (_, _) {
        (goog.debug.Error.call(this, goog.asserts.subs_(_, _)),
          (this.messagePattern = _));
      }),
      goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
      (goog.asserts.AssertionError.prototype.name = `AssertionError`),
      (goog.asserts.DEFAULT_ERROR_HANDLER = function (_) {
        throw _;
      }),
      (goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER),
      (goog.asserts.subs_ = function (_, _) {
        _ = _.split(`%s`);
        for (var _ = ``, _ = _.length - 1, _ = 0; _ < _; _++)
          _ += _[_] + (_ < _.length ? _[_] : `%s`);
        return _ + _[_];
      }),
      (goog.asserts.doAssertFailure_ = function (_, _, _, _) {
        var _ = `Assertion failed`;
        if (_) {
          _ += `: ` + _;
          var _ = _;
        } else _ && ((_ += `: ` + _), (_ = _));
        ((_ = new goog.asserts.AssertionError(`` + _, _ || [])),
          goog.asserts.errorHandler_(_));
      }),
      (goog.asserts.setErrorHandler = function (_) {
        goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = _);
      }),
      (goog.asserts.assert = function (_, _, _) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            !_ &&
            goog.asserts.doAssertFailure_(
              ``,
              null,
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertExists = function (_, _, _) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            _ == null &&
            goog.asserts.doAssertFailure_(
              `Expected to exist: %s.`,
              [_],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.fail = function (_, _) {
        goog.asserts.ENABLE_ASSERTS &&
          goog.asserts.errorHandler_(
            new goog.asserts.AssertionError(
              `Failure` + (_ ? `: ` + _ : ``),
              Array.prototype.slice.call(arguments, 1),
            ),
          );
      }),
      (goog.asserts.assertNumber = function (_, _, _) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            typeof _ != `number` &&
            goog.asserts.doAssertFailure_(
              `Expected number but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertString = function (_, _, _) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            typeof _ != `string` &&
            goog.asserts.doAssertFailure_(
              `Expected string but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertFunction = function (_, _, _) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            !goog.isFunction(_) &&
            goog.asserts.doAssertFailure_(
              `Expected function but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertObject = function (_, _, _) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            !goog.isObject(_) &&
            goog.asserts.doAssertFailure_(
              `Expected object but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertArray = function (_, _, _) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            !Array.isArray(_) &&
            goog.asserts.doAssertFailure_(
              `Expected array but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertBoolean = function (_, _, _) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            typeof _ != `boolean` &&
            goog.asserts.doAssertFailure_(
              `Expected boolean but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertElement = function (_, _, _) {
        return (
          !goog.asserts.ENABLE_ASSERTS ||
            (goog.isObject(_) && _.nodeType == goog.dom.NodeType.ELEMENT) ||
            goog.asserts.doAssertFailure_(
              `Expected Element but got %s: %s.`,
              [goog.typeOf(_), _],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertInstanceof = function (_, _, _, _) {
        return (
          !goog.asserts.ENABLE_ASSERTS ||
            _ instanceof _ ||
            goog.asserts.doAssertFailure_(
              `Expected instanceof %s but got %s.`,
              [goog.asserts.getType_(_), goog.asserts.getType_(_)],
              _,
              Array.prototype.slice.call(arguments, 3),
            ),
          _
        );
      }),
      (goog.asserts.assertFinite = function (_, _, _) {
        return (
          !goog.asserts.ENABLE_ASSERTS ||
            (typeof _ == `number` && isFinite(_)) ||
            goog.asserts.doAssertFailure_(
              `Expected %s to be a finite number but it is not.`,
              [_],
              _,
              Array.prototype.slice.call(arguments, 2),
            ),
          _
        );
      }),
      (goog.asserts.assertObjectPrototypeIsIntact = function () {
        for (var _ in Object.prototype)
          goog.asserts.fail(
            _ + ` should not be enumerable in Object.prototype.`,
          );
      }),
      (goog.asserts.getType_ = function (_) {
        return _ instanceof Function
          ? _.displayName || _.name || `unknown type name`
          : _ instanceof Object
            ? _.constructor.displayName ||
              _.constructor.name ||
              Object.prototype.toString.call(_)
            : _ === null
              ? `null`
              : typeof _;
      }),
      (goog.array = {}),
      (goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE),
      (goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR),
      (goog.array.peek = function (_) {
        return _[_.length - 1];
      }),
      (goog.array.last = goog.array.peek),
      (goog.array.indexOf =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
          ? function (_, _, _) {
              return (
                goog.asserts.assert(_.length != null),
                Array.prototype.indexOf.call(_, _, _)
              );
            }
          : function (_, _, _) {
              if (
                ((_ = _ == null ? 0 : 0 > _ ? Math.max(0, _.length + _) : _),
                typeof _ == `string`)
              )
                return typeof _ != `string` || _.length != 1
                  ? -1
                  : _.indexOf(_, _);
              for (; _ < _.length; _++) if (_ in _ && _[_] === _) return _;
              return -1;
            }),
      (goog.array.lastIndexOf =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
          ? function (_, _, _) {
              return (
                goog.asserts.assert(_.length != null),
                Array.prototype.lastIndexOf.call(_, _, _ ?? _.length - 1)
              );
            }
          : function (_, _, _) {
              if (
                ((_ ??= _.length - 1),
                0 > _ && (_ = Math.max(0, _.length + _)),
                typeof _ == `string`)
              )
                return typeof _ != `string` || _.length != 1
                  ? -1
                  : _.lastIndexOf(_, _);
              for (; 0 <= _; _--) if (_ in _ && _[_] === _) return _;
              return -1;
            }),
      (goog.array.forEach =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
          ? function (_, _, _) {
              (goog.asserts.assert(_.length != null),
                Array.prototype.forEach.call(_, _, _));
            }
          : function (_, _, _) {
              for (
                var _ = _.length,
                  _ = typeof _ == `string` ? _.split(``) : _,
                  _ = 0;
                _ < _;
                _++
              )
                _ in _ && _.call(_, _[_], _, _);
            }),
      (goog.array.forEachRight = function (_, _, _) {
        var _ = _.length,
          _ = typeof _ == `string` ? _.split(``) : _;
        for (--_; 0 <= _; --_) _ in _ && _.call(_, _[_], _, _);
      }),
      (goog.array.filter =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
          ? function (_, _, _) {
              return (
                goog.asserts.assert(_.length != null),
                Array.prototype.filter.call(_, _, _)
              );
            }
          : function (_, _, _) {
              for (
                var _ = _.length,
                  _ = [],
                  _ = 0,
                  _ = typeof _ == `string` ? _.split(``) : _,
                  _ = 0;
                _ < _;
                _++
              )
                if (_ in _) {
                  var _ = _[_];
                  _.call(_, _, _, _) && (_[_++] = _);
                }
              return _;
            }),
      (goog.array.map =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
          ? function (_, _, _) {
              return (
                goog.asserts.assert(_.length != null),
                Array.prototype.map.call(_, _, _)
              );
            }
          : function (_, _, _) {
              for (
                var _ = _.length,
                  _ = Array(_),
                  _ = typeof _ == `string` ? _.split(``) : _,
                  _ = 0;
                _ < _;
                _++
              )
                _ in _ && (_[_] = _.call(_, _[_], _, _));
              return _;
            }),
      (goog.array.reduce =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
          ? function (_, _, _, _) {
              return (
                goog.asserts.assert(_.length != null),
                _ && (_ = goog.bind(_, _)),
                Array.prototype.reduce.call(_, _, _)
              );
            }
          : function (_, _, _, _) {
              var _ = _;
              return (
                goog.array.forEach(_, function (_, _) {
                  _ = _.call(_, _, _, _, _);
                }),
                _
              );
            }),
      (goog.array.reduceRight =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
          ? function (_, _, _, _) {
              return (
                goog.asserts.assert(_.length != null),
                goog.asserts.assert(_ != null),
                _ && (_ = goog.bind(_, _)),
                Array.prototype.reduceRight.call(_, _, _)
              );
            }
          : function (_, _, _, _) {
              var _ = _;
              return (
                goog.array.forEachRight(_, function (_, _) {
                  _ = _.call(_, _, _, _, _);
                }),
                _
              );
            }),
      (goog.array.some =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
          ? function (_, _, _) {
              return (
                goog.asserts.assert(_.length != null),
                Array.prototype.some.call(_, _, _)
              );
            }
          : function (_, _, _) {
              for (
                var _ = _.length,
                  _ = typeof _ == `string` ? _.split(``) : _,
                  _ = 0;
                _ < _;
                _++
              )
                if (_ in _ && _.call(_, _[_], _, _)) return !0;
              return !1;
            }),
      (goog.array.every =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
          ? function (_, _, _) {
              return (
                goog.asserts.assert(_.length != null),
                Array.prototype.every.call(_, _, _)
              );
            }
          : function (_, _, _) {
              for (
                var _ = _.length,
                  _ = typeof _ == `string` ? _.split(``) : _,
                  _ = 0;
                _ < _;
                _++
              )
                if (_ in _ && !_.call(_, _[_], _, _)) return !1;
              return !0;
            }),
      (goog.array.count = function (_, _, _) {
        var _ = 0;
        return (
          goog.array.forEach(
            _,
            function (_, _, _) {
              _.call(_, _, _, _) && ++_;
            },
            _,
          ),
          _
        );
      }),
      (goog.array.find = function (_, _, _) {
        return (
          (_ = goog.array.findIndex(_, _, _)),
          0 > _ ? null : typeof _ == `string` ? _.charAt(_) : _[_]
        );
      }),
      (goog.array.findIndex = function (_, _, _) {
        for (
          var _ = _.length, _ = typeof _ == `string` ? _.split(``) : _, _ = 0;
          _ < _;
          _++
        )
          if (_ in _ && _.call(_, _[_], _, _)) return _;
        return -1;
      }),
      (goog.array.findRight = function (_, _, _) {
        return (
          (_ = goog.array.findIndexRight(_, _, _)),
          0 > _ ? null : typeof _ == `string` ? _.charAt(_) : _[_]
        );
      }),
      (goog.array.findIndexRight = function (_, _, _) {
        var _ = _.length,
          _ = typeof _ == `string` ? _.split(``) : _;
        for (--_; 0 <= _; _--) if (_ in _ && _.call(_, _[_], _, _)) return _;
        return -1;
      }),
      (goog.array.contains = function (_, _) {
        return 0 <= goog.array.indexOf(_, _);
      }),
      (goog.array.isEmpty = function (_) {
        return _.length == 0;
      }),
      (goog.array.clear = function (_) {
        if (!Array.isArray(_))
          for (var _ = _.length - 1; 0 <= _; _--) delete _[_];
        _.length = 0;
      }),
      (goog.array.insert = function (_, _) {
        goog.array.contains(_, _) || _.push(_);
      }),
      (goog.array.insertAt = function (_, _, _) {
        goog.array.splice(_, _, 0, _);
      }),
      (goog.array.insertArrayAt = function (_, _, _) {
        goog.partial(goog.array.splice, _, _, 0).apply(null, _);
      }),
      (goog.array.insertBefore = function (_, _, _) {
        var _;
        arguments.length == 2 || 0 > (_ = goog.array.indexOf(_, _))
          ? _.push(_)
          : goog.array.insertAt(_, _, _);
      }),
      (goog.array.remove = function (_, _) {
        _ = goog.array.indexOf(_, _);
        var _;
        return ((_ = 0 <= _) && goog.array.removeAt(_, _), _);
      }),
      (goog.array.removeLast = function (_, _) {
        return (
          (_ = goog.array.lastIndexOf(_, _)),
          0 <= _ && (goog.array.removeAt(_, _), !0)
        );
      }),
      (goog.array.removeAt = function (_, _) {
        return (
          goog.asserts.assert(_.length != null),
          Array.prototype.splice.call(_, _, 1).length == 1
        );
      }),
      (goog.array.removeIf = function (_, _, _) {
        return (
          (_ = goog.array.findIndex(_, _, _)),
          0 <= _ && (goog.array.removeAt(_, _), !0)
        );
      }),
      (goog.array.removeAllIf = function (_, _, _) {
        var _ = 0;
        return (
          goog.array.forEachRight(_, function (_, _) {
            _.call(_, _, _, _) && goog.array.removeAt(_, _) && _++;
          }),
          _
        );
      }),
      (goog.array.concat = function (_) {
        return Array.prototype.concat.apply([], arguments);
      }),
      (goog.array.join = function (_) {
        return Array.prototype.concat.apply([], arguments);
      }),
      (goog.array.toArray = function (_) {
        var _ = _.length;
        if (0 < _) {
          for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = _[_];
          return _;
        }
        return [];
      }),
      (goog.array.clone = goog.array.toArray),
      (goog.array.extend = function (_, _) {
        for (var _ = 1; _ < arguments.length; _++) {
          var _ = arguments[_];
          if (goog.isArrayLike(_)) {
            var _ = _.length || 0,
              _ = _.length || 0;
            _.length = _ + _;
            for (var _ = 0; _ < _; _++) _[_ + _] = _[_];
          } else _.push(_);
        }
      }),
      (goog.array.splice = function (_, _, _, _) {
        return (
          goog.asserts.assert(_.length != null),
          Array.prototype.splice.apply(_, goog.array.slice(arguments, 1))
        );
      }),
      (goog.array.slice = function (_, _, _) {
        return (
          goog.asserts.assert(_.length != null),
          2 >= arguments.length
            ? Array.prototype.slice.call(_, _)
            : Array.prototype.slice.call(_, _, _)
        );
      }),
      (goog.array.removeDuplicates = function (_, _, _) {
        _ ||= _;
        var _ = function (_) {
          return goog.isObject(_)
            ? `o` + goog.getUid(_)
            : (typeof _).charAt(0) + _;
        };
        ((_ ||= _), (_ = {}));
        for (var _ = 0, _ = 0; _ < _.length;) {
          var _ = _[_++],
            _ = _(_);
          Object.prototype.hasOwnProperty.call(_, _) ||
            ((_[_] = !0), (_[_++] = _));
        }
        _.length = _;
      }),
      (goog.array.binarySearch = function (_, _, _) {
        return goog.array.binarySearch_(
          _,
          _ || goog.array.defaultCompare,
          !1,
          _,
        );
      }),
      (goog.array.binarySelect = function (_, _, _) {
        return goog.array.binarySearch_(_, _, !0, void 0, _);
      }),
      (goog.array.binarySearch_ = function (_, _, _, _, _) {
        for (var _ = 0, _ = _.length, _; _ < _;) {
          var _ = _ + ((_ - _) >>> 1),
            _ = _ ? _.call(_, _[_], _, _) : _(_, _[_]);
          0 < _ ? (_ = _ + 1) : ((_ = _), (_ = !_));
        }
        return _ ? _ : -_ - 1;
      }),
      (goog.array.sort = function (_, _) {
        _.sort(_ || goog.array.defaultCompare);
      }),
      (goog.array.stableSort = function (_, _) {
        for (var _ = Array(_.length), _ = 0; _ < _.length; _++)
          _[_] = {
            index: _,
            value: _[_],
          };
        var _ = _ || goog.array.defaultCompare;
        for (
          goog.array.sort(_, function (_, _) {
            return _(_.value, _.value) || _.index - _.index;
          }),
            _ = 0;
          _ < _.length;
          _++
        )
          _[_] = _[_].value;
      }),
      (goog.array.sortByKey = function (_, _, _) {
        var _ = _ || goog.array.defaultCompare;
        goog.array.sort(_, function (_, _) {
          return _(_(_), _(_));
        });
      }),
      (goog.array.sortObjectsByKey = function (_, _, _) {
        goog.array.sortByKey(
          _,
          function (_) {
            return _[_];
          },
          _,
        );
      }),
      (goog.array.isSorted = function (_, _, _) {
        _ ||= goog.array.defaultCompare;
        for (var _ = 1; _ < _.length; _++) {
          var _ = _(_[_ - 1], _[_]);
          if (0 < _ || (_ == 0 && _)) return !1;
        }
        return !0;
      }),
      (goog.array.equals = function (_, _, _) {
        if (
          !goog.isArrayLike(_) ||
          !goog.isArrayLike(_) ||
          _.length != _.length
        )
          return !1;
        var _ = _.length;
        _ ||= goog.array.defaultCompareEquality;
        for (var _ = 0; _ < _; _++) if (!_(_[_], _[_])) return !1;
        return !0;
      }),
      (goog.array.compare3 = function (_, _, _) {
        _ ||= goog.array.defaultCompare;
        for (var _ = Math.min(_.length, _.length), _ = 0; _ < _; _++) {
          var _ = _(_[_], _[_]);
          if (_ != 0) return _;
        }
        return goog.array.defaultCompare(_.length, _.length);
      }),
      (goog.array.defaultCompare = function (_, _) {
        return _ > _ ? 1 : _ < _ ? -1 : 0;
      }),
      (goog.array.inverseDefaultCompare = function (_, _) {
        return -goog.array.defaultCompare(_, _);
      }),
      (goog.array.defaultCompareEquality = function (_, _) {
        return _ === _;
      }),
      (goog.array.binaryInsert = function (_, _, _) {
        return (
          (_ = goog.array.binarySearch(_, _, _)),
          0 > _ && (goog.array.insertAt(_, _, -(_ + 1)), !0)
        );
      }),
      (goog.array.binaryRemove = function (_, _, _) {
        return (
          (_ = goog.array.binarySearch(_, _, _)),
          0 <= _ && goog.array.removeAt(_, _)
        );
      }),
      (goog.array.bucket = function (_, _, _) {
        for (var _ = {}, _ = 0; _ < _.length; _++) {
          var _ = _[_],
            _ = _.call(_, _, _, _);
          _ !== void 0 && (_[_] || (_[_] = [])).push(_);
        }
        return _;
      }),
      (goog.array.toObject = function (_, _, _) {
        var _ = {};
        return (
          goog.array.forEach(_, function (_, _) {
            _[_.call(_, _, _, _)] = _;
          }),
          _
        );
      }),
      (goog.array.range = function (_, _, _) {
        var _ = [],
          _ = 0,
          _ = _;
        if (((_ ||= 1), _ !== void 0 && ((_ = _), (_ = _)), 0 > _ * (_ - _)))
          return [];
        if (0 < _) for (_ = _; _ < _; _ += _) _.push(_);
        else for (_ = _; _ > _; _ += _) _.push(_);
        return _;
      }),
      (goog.array.repeat = function (_, _) {
        for (var _ = [], _ = 0; _ < _; _++) _[_] = _;
        return _;
      }),
      (goog.array.flatten = function (_) {
        for (var _ = [], _ = 0; _ < arguments.length; _++) {
          var _ = arguments[_];
          if (Array.isArray(_))
            for (var _ = 0; _ < _.length; _ += 8192) {
              var _ = goog.array.slice(_, _, _ + 8192);
              _ = goog.array.flatten.apply(null, _);
              for (var _ = 0; _ < _.length; _++) _.push(_[_]);
            }
          else _.push(_);
        }
        return _;
      }),
      (goog.array.rotate = function (_, _) {
        return (
          goog.asserts.assert(_.length != null),
          _.length &&
            ((_ %= _.length),
            0 < _
              ? Array.prototype.unshift.apply(_, _.splice(-_, _))
              : 0 > _ && Array.prototype.push.apply(_, _.splice(0, -_))),
          _
        );
      }),
      (goog.array.moveItem = function (_, _, _) {
        (goog.asserts.assert(0 <= _ && _ < _.length),
          goog.asserts.assert(0 <= _ && _ < _.length),
          (_ = Array.prototype.splice.call(_, _, 1)),
          Array.prototype.splice.call(_, _, 0, _[0]));
      }),
      (goog.array.zip = function (_) {
        if (!arguments.length) return [];
        for (
          var _ = [], _ = arguments[0].length, _ = 1;
          _ < arguments.length;
          _++
        )
          arguments[_].length < _ && (_ = arguments[_].length);
        for (_ = 0; _ < _; _++) {
          for (var _ = [], _ = 0; _ < arguments.length; _++)
            _.push(arguments[_][_]);
          _.push(_);
        }
        return _;
      }),
      (goog.array.shuffle = function (_, _) {
        _ ||= Math.random;
        for (var _ = _.length - 1; 0 < _; _--) {
          var _ = Math.floor(_() * (_ + 1)),
            _ = _[_];
          ((_[_] = _[_]), (_[_] = _));
        }
      }),
      (goog.array.copyByIndex = function (_, _) {
        var _ = [];
        return (
          goog.array.forEach(_, function (_) {
            _.push(_[_]);
          }),
          _
        );
      }),
      (goog.array.concatMap = function (_, _, _) {
        return goog.array.concat.apply([], goog.array.map(_, _, _));
      }),
      (goog.crypt = {}),
      (goog.crypt.stringToByteArray = function (_) {
        for (var _ = [], _ = 0, _ = 0; _ < _.length; _++) {
          var _ = _.charCodeAt(_);
          (255 < _ && ((_[_++] = _ & 255), (_ >>= 8)), (_[_++] = _));
        }
        return _;
      }),
      (goog.crypt.byteArrayToString = function (_) {
        if (8192 >= _.length) return String.fromCharCode.apply(null, _);
        for (var _ = ``, _ = 0; _ < _.length; _ += 8192) {
          var _ = goog.array.slice(_, _, _ + 8192);
          _ += String.fromCharCode.apply(null, _);
        }
        return _;
      }),
      (goog.crypt.byteArrayToHex = function (_, _) {
        return goog.array
          .map(_, function (_) {
            return ((_ = _.toString(16)), 1 < _.length ? _ : `0` + _);
          })
          .join(_ || ``);
      }),
      (goog.crypt.hexToByteArray = function (_) {
        goog.asserts.assert(
          _.length % 2 == 0,
          `Key string length must be multiple of 2`,
        );
        for (var _ = [], _ = 0; _ < _.length; _ += 2)
          _.push(parseInt(_.substring(_, _ + 2), 16));
        return _;
      }),
      (goog.crypt.stringToUtf8ByteArray = function (_) {
        for (var _ = [], _ = 0, _ = 0; _ < _.length; _++) {
          var _ = _.charCodeAt(_);
          128 > _
            ? (_[_++] = _)
            : (2048 > _
                ? (_[_++] = (_ >> 6) | 192)
                : ((_ & 64512) == 55296 &&
                  _ + 1 < _.length &&
                  (_.charCodeAt(_ + 1) & 64512) == 56320
                    ? ((_ =
                        65536 +
                        ((_ & 1023) << 10) +
                        (_.charCodeAt(++_) & 1023)),
                      (_[_++] = (_ >> 18) | 240),
                      (_[_++] = ((_ >> 12) & 63) | 128))
                    : (_[_++] = (_ >> 12) | 224),
                  (_[_++] = ((_ >> 6) & 63) | 128)),
              (_[_++] = (_ & 63) | 128));
        }
        return _;
      }),
      (goog.crypt.utf8ByteArrayToString = function (_) {
        for (var _ = [], _ = 0, _ = 0; _ < _.length;) {
          var _ = _[_++];
          if (128 > _) _[_++] = String.fromCharCode(_);
          else if (191 < _ && 224 > _) {
            var _ = _[_++];
            _[_++] = String.fromCharCode(((_ & 31) << 6) | (_ & 63));
          } else if (239 < _ && 365 > _) {
            _ = _[_++];
            var _ = _[_++],
              _ = _[_++];
            ((_ =
              (((_ & 7) << 18) |
                ((_ & 63) << 12) |
                ((_ & 63) << 6) |
                (_ & 63)) -
              65536),
              (_[_++] = String.fromCharCode(55296 + (_ >> 10))),
              (_[_++] = String.fromCharCode(56320 + (_ & 1023))));
          } else
            ((_ = _[_++]),
              (_ = _[_++]),
              (_[_++] = String.fromCharCode(
                ((_ & 15) << 12) | ((_ & 63) << 6) | (_ & 63),
              )));
        }
        return _.join(``);
      }),
      (goog.crypt.xorByteArray = function (_, _) {
        goog.asserts.assert(
          _.length == _.length,
          `XOR array lengths must match`,
        );
        for (var _ = [], _ = 0; _ < _.length; _++) _.push(_[_] ^ _[_]);
        return _;
      }),
      (goog.dom.asserts = {}),
      (goog.dom.asserts.assertIsLocation = function (_) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var _ = goog.dom.asserts.getWindow_(_);
          _ &&
            (!_ || (!(_ instanceof _.Location) && _ instanceof _.Element)) &&
            goog.asserts.fail(
              `Argument is not a Location (or a non-Element mock); got: %s`,
              goog.dom.asserts.debugStringForType_(_),
            );
        }
        return _;
      }),
      (goog.dom.asserts.assertIsElementType_ = function (_, _) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var _ = goog.dom.asserts.getWindow_(_);
          _ &&
            _[_] !== void 0 &&
            ((_ &&
              (_ instanceof _[_] ||
                !(_ instanceof _.Location || _ instanceof _.Element))) ||
              goog.asserts.fail(
                `Argument is not a %s (or a non-Element, non-Location mock); got: %s`,
                _,
                goog.dom.asserts.debugStringForType_(_),
              ));
        }
        return _;
      }),
      (goog.dom.asserts.assertIsHTMLAnchorElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLAnchorElement`);
      }),
      (goog.dom.asserts.assertIsHTMLButtonElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLButtonElement`);
      }),
      (goog.dom.asserts.assertIsHTMLLinkElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLLinkElement`);
      }),
      (goog.dom.asserts.assertIsHTMLImageElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLImageElement`);
      }),
      (goog.dom.asserts.assertIsHTMLAudioElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLAudioElement`);
      }),
      (goog.dom.asserts.assertIsHTMLVideoElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLVideoElement`);
      }),
      (goog.dom.asserts.assertIsHTMLInputElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLInputElement`);
      }),
      (goog.dom.asserts.assertIsHTMLTextAreaElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLTextAreaElement`);
      }),
      (goog.dom.asserts.assertIsHTMLCanvasElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLCanvasElement`);
      }),
      (goog.dom.asserts.assertIsHTMLEmbedElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLEmbedElement`);
      }),
      (goog.dom.asserts.assertIsHTMLFormElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLFormElement`);
      }),
      (goog.dom.asserts.assertIsHTMLFrameElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLFrameElement`);
      }),
      (goog.dom.asserts.assertIsHTMLIFrameElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLIFrameElement`);
      }),
      (goog.dom.asserts.assertIsHTMLObjectElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLObjectElement`);
      }),
      (goog.dom.asserts.assertIsHTMLScriptElement = function (_) {
        return goog.dom.asserts.assertIsElementType_(_, `HTMLScriptElement`);
      }),
      (goog.dom.asserts.debugStringForType_ = function (_) {
        if (goog.isObject(_))
          try {
            return (
              _.constructor.displayName ||
              _.constructor.name ||
              Object.prototype.toString.call(_)
            );
          } catch {
            return `<object could not be stringified>`;
          }
        return _ === void 0 ? `undefined` : _ === null ? `null` : typeof _;
      }),
      (goog.dom.asserts.getWindow_ = function (_) {
        try {
          var _ = _ && _.ownerDocument,
            _ = _ && (_.defaultView || _.parentWindow);
          if (((_ ||= goog.global), _.Element && _.Location)) return _;
        } catch {}
        return null;
      }),
      (goog.functions = {}),
      (goog.functions.constant = function (_) {
        return function () {
          return _;
        };
      }),
      (goog.functions.FALSE = function () {
        return !1;
      }),
      (goog.functions.TRUE = function () {
        return !0;
      }),
      (goog.functions.NULL = function () {
        return null;
      }),
      (goog.functions.identity = function (_, _) {
        return _;
      }),
      (goog.functions.error = function (_) {
        return function () {
          throw Error(_);
        };
      }),
      (goog.functions.fail = function (_) {
        return function () {
          throw _;
        };
      }),
      (goog.functions.lock = function (_, _) {
        return (
          (_ ||= 0),
          function () {
            return _.apply(this, Array.prototype.slice.call(arguments, 0, _));
          }
        );
      }),
      (goog.functions.nth = function (_) {
        return function () {
          return arguments[_];
        };
      }),
      (goog.functions.partialRight = function (_, _) {
        var _ = Array.prototype.slice.call(arguments, 1);
        return function () {
          var _ = Array.prototype.slice.call(arguments);
          return (_.push.apply(_, _), _.apply(this, _));
        };
      }),
      (goog.functions.withReturnValue = function (_, _) {
        return goog.functions.sequence(_, goog.functions.constant(_));
      }),
      (goog.functions.equalTo = function (_, _) {
        return function (_) {
          return _ ? _ == _ : _ === _;
        };
      }),
      (goog.functions.compose = function (_, _) {
        var _ = arguments,
          _ = _.length;
        return function () {
          var _;
          _ && (_ = _[_ - 1].apply(this, arguments));
          for (var _ = _ - 2; 0 <= _; _--) _ = _[_].call(this, _);
          return _;
        };
      }),
      (goog.functions.sequence = function (_) {
        var _ = arguments,
          _ = _.length;
        return function () {
          for (var _, _ = 0; _ < _; _++) _ = _[_].apply(this, arguments);
          return _;
        };
      }),
      (goog.functions.and = function (_) {
        var _ = arguments,
          _ = _.length;
        return function () {
          for (var _ = 0; _ < _; _++)
            if (!_[_].apply(this, arguments)) return !1;
          return !0;
        };
      }),
      (goog.functions._ = function (_) {
        var _ = arguments,
          _ = _.length;
        return function () {
          for (var _ = 0; _ < _; _++)
            if (_[_].apply(this, arguments)) return !0;
          return !1;
        };
      }),
      (goog.functions.not = function (_) {
        return function () {
          return !_.apply(this, arguments);
        };
      }),
      (goog.functions.create = function (_, _) {
        var _ = function () {};
        return (
          (_.prototype = _.prototype),
          (_ = new _()),
          _.apply(_, Array.prototype.slice.call(arguments, 1)),
          _
        );
      }),
      (goog.functions.CACHE_RETURN_VALUE = !0),
      (goog.functions.cacheReturnValue = function (_) {
        var _ = !1,
          _;
        return function () {
          return goog.functions.CACHE_RETURN_VALUE
            ? ((_ ||= ((_ = _()), !0)), _)
            : _();
        };
      }),
      (goog.functions.once = function (_) {
        var _ = _;
        return function () {
          if (_) {
            var _ = _;
            ((_ = null), _());
          }
        };
      }),
      (goog.functions.debounce = function (_, _, _) {
        var _ = 0;
        return function (_) {
          goog.global.clearTimeout(_);
          var _ = arguments;
          _ = goog.global.setTimeout(function () {
            _.apply(_, _);
          }, _);
        };
      }),
      (goog.functions.throttle = function (_, _, _) {
        var _ = 0,
          _ = !1,
          _ = [],
          _ = function () {
            ((_ = 0), _ && ((_ = !1), _()));
          },
          _ = function () {
            ((_ = goog.global.setTimeout(_, _)), _.apply(_, _));
          };
        return function (_) {
          ((_ = arguments), _ ? (_ = !0) : _());
        };
      }),
      (goog.functions.rateLimit = function (_, _, _) {
        var _ = 0,
          _ = function () {
            _ = 0;
          };
        return function (_) {
          _ || ((_ = goog.global.setTimeout(_, _)), _.apply(_, arguments));
        };
      }),
      (goog.dom.HtmlElement = function () {}),
      (goog.dom.TagName = function (_) {
        this.tagName_ = _;
      }),
      (goog.dom.TagName.prototype.toString = function () {
        return this.tagName_;
      }),
      (goog.dom.TagName._ = new goog.dom.TagName(`A`)),
      (goog.dom.TagName.ABBR = new goog.dom.TagName(`ABBR`)),
      (goog.dom.TagName.ACRONYM = new goog.dom.TagName(`ACRONYM`)),
      (goog.dom.TagName.ADDRESS = new goog.dom.TagName(`ADDRESS`)),
      (goog.dom.TagName.APPLET = new goog.dom.TagName(`APPLET`)),
      (goog.dom.TagName.AREA = new goog.dom.TagName(`AREA`)),
      (goog.dom.TagName.ARTICLE = new goog.dom.TagName(`ARTICLE`)),
      (goog.dom.TagName.ASIDE = new goog.dom.TagName(`ASIDE`)),
      (goog.dom.TagName.AUDIO = new goog.dom.TagName(`AUDIO`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`B`)),
      (goog.dom.TagName.BASE = new goog.dom.TagName(`BASE`)),
      (goog.dom.TagName.BASEFONT = new goog.dom.TagName(`BASEFONT`)),
      (goog.dom.TagName.BDI = new goog.dom.TagName(`BDI`)),
      (goog.dom.TagName.BDO = new goog.dom.TagName(`BDO`)),
      (goog.dom.TagName.BIG = new goog.dom.TagName(`BIG`)),
      (goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName(`BLOCKQUOTE`)),
      (goog.dom.TagName.BODY = new goog.dom.TagName(`BODY`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`BR`)),
      (goog.dom.TagName.BUTTON = new goog.dom.TagName(`BUTTON`)),
      (goog.dom.TagName.CANVAS = new goog.dom.TagName(`CANVAS`)),
      (goog.dom.TagName.CAPTION = new goog.dom.TagName(`CAPTION`)),
      (goog.dom.TagName.CENTER = new goog.dom.TagName(`CENTER`)),
      (goog.dom.TagName.CITE = new goog.dom.TagName(`CITE`)),
      (goog.dom.TagName.CODE = new goog.dom.TagName(`CODE`)),
      (goog.dom.TagName.COL = new goog.dom.TagName(`COL`)),
      (goog.dom.TagName.COLGROUP = new goog.dom.TagName(`COLGROUP`)),
      (goog.dom.TagName.COMMAND = new goog.dom.TagName(`COMMAND`)),
      (goog.dom.TagName.DATA = new goog.dom.TagName(`DATA`)),
      (goog.dom.TagName.DATALIST = new goog.dom.TagName(`DATALIST`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`DD`)),
      (goog.dom.TagName.DEL = new goog.dom.TagName(`DEL`)),
      (goog.dom.TagName.DETAILS = new goog.dom.TagName(`DETAILS`)),
      (goog.dom.TagName.DFN = new goog.dom.TagName(`DFN`)),
      (goog.dom.TagName.DIALOG = new goog.dom.TagName(`DIALOG`)),
      (goog.dom.TagName.DIR = new goog.dom.TagName(`DIR`)),
      (goog.dom.TagName.DIV = new goog.dom.TagName(`DIV`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`DL`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`DT`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`EM`)),
      (goog.dom.TagName.EMBED = new goog.dom.TagName(`EMBED`)),
      (goog.dom.TagName.FIELDSET = new goog.dom.TagName(`FIELDSET`)),
      (goog.dom.TagName.FIGCAPTION = new goog.dom.TagName(`FIGCAPTION`)),
      (goog.dom.TagName.FIGURE = new goog.dom.TagName(`FIGURE`)),
      (goog.dom.TagName.FONT = new goog.dom.TagName(`FONT`)),
      (goog.dom.TagName.FOOTER = new goog.dom.TagName(`FOOTER`)),
      (goog.dom.TagName.FORM = new goog.dom.TagName(`FORM`)),
      (goog.dom.TagName.FRAME = new goog.dom.TagName(`FRAME`)),
      (goog.dom.TagName.FRAMESET = new goog.dom.TagName(`FRAMESET`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`H1`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`H2`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`H3`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`H4`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`H5`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`H6`)),
      (goog.dom.TagName.HEAD = new goog.dom.TagName(`HEAD`)),
      (goog.dom.TagName.HEADER = new goog.dom.TagName(`HEADER`)),
      (goog.dom.TagName.HGROUP = new goog.dom.TagName(`HGROUP`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`HR`)),
      (goog.dom.TagName.HTML = new goog.dom.TagName(`HTML`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`I`)),
      (goog.dom.TagName.IFRAME = new goog.dom.TagName(`IFRAME`)),
      (goog.dom.TagName.IMG = new goog.dom.TagName(`IMG`)),
      (goog.dom.TagName.INPUT = new goog.dom.TagName(`INPUT`)),
      (goog.dom.TagName.INS = new goog.dom.TagName(`INS`)),
      (goog.dom.TagName.ISINDEX = new goog.dom.TagName(`ISINDEX`)),
      (goog.dom.TagName.KBD = new goog.dom.TagName(`KBD`)),
      (goog.dom.TagName.KEYGEN = new goog.dom.TagName(`KEYGEN`)),
      (goog.dom.TagName.LABEL = new goog.dom.TagName(`LABEL`)),
      (goog.dom.TagName.LEGEND = new goog.dom.TagName(`LEGEND`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`LI`)),
      (goog.dom.TagName.LINK = new goog.dom.TagName(`LINK`)),
      (goog.dom.TagName.MAIN = new goog.dom.TagName(`MAIN`)),
      (goog.dom.TagName.MAP = new goog.dom.TagName(`MAP`)),
      (goog.dom.TagName.MARK = new goog.dom.TagName(`MARK`)),
      (goog.dom.TagName.MATH = new goog.dom.TagName(`MATH`)),
      (goog.dom.TagName.MENU = new goog.dom.TagName(`MENU`)),
      (goog.dom.TagName.MENUITEM = new goog.dom.TagName(`MENUITEM`)),
      (goog.dom.TagName.META = new goog.dom.TagName(`META`)),
      (goog.dom.TagName.METER = new goog.dom.TagName(`METER`)),
      (goog.dom.TagName.NAV = new goog.dom.TagName(`NAV`)),
      (goog.dom.TagName.NOFRAMES = new goog.dom.TagName(`NOFRAMES`)),
      (goog.dom.TagName.NOSCRIPT = new goog.dom.TagName(`NOSCRIPT`)),
      (goog.dom.TagName.OBJECT = new goog.dom.TagName(`OBJECT`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`OL`)),
      (goog.dom.TagName.OPTGROUP = new goog.dom.TagName(`OPTGROUP`)),
      (goog.dom.TagName.OPTION = new goog.dom.TagName(`OPTION`)),
      (goog.dom.TagName.OUTPUT = new goog.dom.TagName(`OUTPUT`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`P`)),
      (goog.dom.TagName.PARAM = new goog.dom.TagName(`PARAM`)),
      (goog.dom.TagName.PICTURE = new goog.dom.TagName(`PICTURE`)),
      (goog.dom.TagName.PRE = new goog.dom.TagName(`PRE`)),
      (goog.dom.TagName.PROGRESS = new goog.dom.TagName(`PROGRESS`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`Q`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`RP`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`RT`)),
      (goog.dom.TagName.RTC = new goog.dom.TagName(`RTC`)),
      (goog.dom.TagName.RUBY = new goog.dom.TagName(`RUBY`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`S`)),
      (goog.dom.TagName.SAMP = new goog.dom.TagName(`SAMP`)),
      (goog.dom.TagName.SCRIPT = new goog.dom.TagName(`SCRIPT`)),
      (goog.dom.TagName.SECTION = new goog.dom.TagName(`SECTION`)),
      (goog.dom.TagName.SELECT = new goog.dom.TagName(`SELECT`)),
      (goog.dom.TagName.SMALL = new goog.dom.TagName(`SMALL`)),
      (goog.dom.TagName.SOURCE = new goog.dom.TagName(`SOURCE`)),
      (goog.dom.TagName.SPAN = new goog.dom.TagName(`SPAN`)),
      (goog.dom.TagName.STRIKE = new goog.dom.TagName(`STRIKE`)),
      (goog.dom.TagName.STRONG = new goog.dom.TagName(`STRONG`)),
      (goog.dom.TagName.STYLE = new goog.dom.TagName(`STYLE`)),
      (goog.dom.TagName.SUB = new goog.dom.TagName(`SUB`)),
      (goog.dom.TagName.SUMMARY = new goog.dom.TagName(`SUMMARY`)),
      (goog.dom.TagName.SUP = new goog.dom.TagName(`SUP`)),
      (goog.dom.TagName.SVG = new goog.dom.TagName(`SVG`)),
      (goog.dom.TagName.TABLE = new goog.dom.TagName(`TABLE`)),
      (goog.dom.TagName.TBODY = new goog.dom.TagName(`TBODY`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`TD`)),
      (goog.dom.TagName.TEMPLATE = new goog.dom.TagName(`TEMPLATE`)),
      (goog.dom.TagName.TEXTAREA = new goog.dom.TagName(`TEXTAREA`)),
      (goog.dom.TagName.TFOOT = new goog.dom.TagName(`TFOOT`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`TH`)),
      (goog.dom.TagName.THEAD = new goog.dom.TagName(`THEAD`)),
      (goog.dom.TagName.TIME = new goog.dom.TagName(`TIME`)),
      (goog.dom.TagName.TITLE = new goog.dom.TagName(`TITLE`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`TR`)),
      (goog.dom.TagName.TRACK = new goog.dom.TagName(`TRACK`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`TT`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`U`)),
      (goog.dom.TagName._ = new goog.dom.TagName(`UL`)),
      (goog.dom.TagName.VAR = new goog.dom.TagName(`VAR`)),
      (goog.dom.TagName.VIDEO = new goog.dom.TagName(`VIDEO`)),
      (goog.dom.TagName.WBR = new goog.dom.TagName(`WBR`)),
      (goog.dom.tags = {}),
      (goog.dom.tags.VOID_TAGS_ = {
        area: !0,
        base: !0,
        _: !0,
        col: !0,
        command: !0,
        embed: !0,
        _: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }),
      (goog.dom.tags.isVoidTag = function (_) {
        return !0 === goog.dom.tags.VOID_TAGS_[_];
      }),
      (goog.html = {}),
      (goog.html.trustedtypes = {}),
      (goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY =
        goog.TRUSTED_TYPES_POLICY_NAME
          ? goog.createTrustedTypesPolicy(
              goog.TRUSTED_TYPES_POLICY_NAME + `#html`,
            )
          : null),
      (goog.string = {}),
      (goog.string.TypedString = function () {}),
      (goog.string.Const = function (_, _) {
        ((this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
          (_ === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ &&
            _) ||
          ``),
          (this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =
            goog.string.Const.TYPE_MARKER_));
      }),
      (goog.string.Const.prototype.implementsGoogStringTypedString = !0),
      (goog.string.Const.prototype.getTypedStringValue = function () {
        return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      }),
      goog.DEBUG &&
        (goog.string.Const.prototype.toString = function () {
          return (
            `Const{` +
            this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ +
            `}`
          );
        }),
      (goog.string.Const.unwrap = function (_) {
        return _ instanceof goog.string.Const &&
          _.constructor === goog.string.Const &&
          _.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===
            goog.string.Const.TYPE_MARKER_
          ? _.stringConstValueWithSecurityContract__googStringSecurityPrivate_
          : (goog.asserts.fail(
              `expected object of type Const, got '` + _ + `'`,
            ),
            `type_error:Const`);
      }),
      (goog.string.Const.from = function (_) {
        return new goog.string.Const(
          goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,
          _,
        );
      }),
      (goog.string.Const.TYPE_MARKER_ = {}),
      (goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
      (goog.string.Const.EMPTY = goog.string.Const.from(``)),
      (goog.html.SafeScript = function () {
        ((this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = ``),
          (this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_));
      }),
      (goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0),
      (goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeScript.fromConstant = function (_) {
        return (
          (_ = goog.string.Const.unwrap(_)),
          _.length === 0
            ? goog.html.SafeScript.EMPTY
            : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                _,
              )
        );
      }),
      (goog.html.SafeScript.fromConstantAndArgs = function (_, _) {
        for (var _ = [], _ = 1; _ < arguments.length; _++)
          _.push(goog.html.SafeScript.stringify_(arguments[_]));
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
          `(` + goog.string.Const.unwrap(_) + `)(` + _.join(`, `) + `);`,
        );
      }),
      (goog.html.SafeScript.fromJson = function (_) {
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
          goog.html.SafeScript.stringify_(_),
        );
      }),
      (goog.html.SafeScript.prototype.getTypedStringValue = function () {
        return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
      }),
      goog.DEBUG &&
        (goog.html.SafeScript.prototype.toString = function () {
          return (
            `SafeScript{` +
            this.privateDoNotAccessOrElseSafeScriptWrappedValue_ +
            `}`
          );
        }),
      (goog.html.SafeScript.unwrap = function (_) {
        return goog.html.SafeScript.unwrapTrustedScript(_).toString();
      }),
      (goog.html.SafeScript.unwrapTrustedScript = function (_) {
        return _ instanceof goog.html.SafeScript &&
          _.constructor === goog.html.SafeScript &&
          _.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? _.privateDoNotAccessOrElseSafeScriptWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeScript, got '` +
                _ +
                `' of type ` +
                goog.typeOf(_),
            ),
            `type_error:SafeScript`);
      }),
      (goog.html.SafeScript.stringify_ = function (_) {
        return JSON.stringify(_).replace(/</g, `\\x3c`);
      }),
      (goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =
        function (_) {
          return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(
            _,
          );
        }),
      (goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ =
        function (_) {
          return (
            (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html
              .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
              ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(
                  _,
                )
              : _),
            this
          );
        }),
      (goog.html.SafeScript.EMPTY =
        goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
          ``,
        )),
      (goog._ = {}),
      (goog._.url = {}),
      (goog._.url.createObjectUrl = function (_) {
        return goog._.url.getUrlObject_().createObjectURL(_);
      }),
      (goog._.url.revokeObjectUrl = function (_) {
        goog._.url.getUrlObject_().revokeObjectURL(_);
      }),
      (goog._.url.UrlObject_ = function () {}),
      (goog._.url.UrlObject_.prototype.createObjectURL = function (_) {}),
      (goog._.url.UrlObject_.prototype.revokeObjectURL = function (_) {}),
      (goog._.url.getUrlObject_ = function () {
        var _ = goog._.url.findUrlObject_();
        if (_ != null) return _;
        throw Error(`This browser doesn't seem to support blob URLs`);
      }),
      (goog._.url.findUrlObject_ = function () {
        return goog.global.URL !== void 0 &&
          goog.global.URL.createObjectURL !== void 0
          ? goog.global.URL
          : goog.global.webkitURL !== void 0 &&
              goog.global.webkitURL.createObjectURL !== void 0
            ? goog.global.webkitURL
            : goog.global.createObjectURL === void 0
              ? null
              : goog.global;
      }),
      (goog._.url.browserSupportsObjectUrls = function () {
        return goog._.url.findUrlObject_() != null;
      }),
      (goog._.blob = {}),
      (goog._.blob.getBlob = function (_) {
        var _ = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
        if (_ !== void 0) {
          _ = new _();
          for (var _ = 0; _ < arguments.length; _++) _.append(arguments[_]);
          return _.getBlob();
        }
        return goog._.blob.getBlobWithProperties(goog.array.toArray(arguments));
      }),
      (goog._.blob.getBlobWithProperties = function (_, _, _) {
        var _ = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
        if (_ !== void 0) {
          _ = new _();
          for (var _ = 0; _ < _.length; _++) _.append(_[_], _);
          return _.getBlob(_);
        }
        if (goog.global.Blob !== void 0)
          return (
            (_ = {}), _ && (_.type = _), _ && (_.endings = _), new Blob(_, _)
          );
        throw Error(`This browser doesn't seem to support creating Blobs`);
      }),
      (goog.i18n = {}),
      (goog.i18n.bidi = {}),
      (goog.i18n.bidi.FORCE_RTL = !1),
      (goog.i18n.bidi.IS_RTL =
        goog.i18n.bidi.FORCE_RTL ||
        ((goog.LOCALE.substring(0, 2).toLowerCase() == `ar` ||
          goog.LOCALE.substring(0, 2).toLowerCase() == `fa` ||
          goog.LOCALE.substring(0, 2).toLowerCase() == `he` ||
          goog.LOCALE.substring(0, 2).toLowerCase() == `iw` ||
          goog.LOCALE.substring(0, 2).toLowerCase() == `ps` ||
          goog.LOCALE.substring(0, 2).toLowerCase() == `sd` ||
          goog.LOCALE.substring(0, 2).toLowerCase() == `ug` ||
          goog.LOCALE.substring(0, 2).toLowerCase() == `ur` ||
          goog.LOCALE.substring(0, 2).toLowerCase() == `yi`) &&
          (goog.LOCALE.length == 2 ||
            goog.LOCALE.substring(2, 3) == `-` ||
            goog.LOCALE.substring(2, 3) == `_`)) ||
        (3 <= goog.LOCALE.length &&
          goog.LOCALE.substring(0, 3).toLowerCase() == `ckb` &&
          (goog.LOCALE.length == 3 ||
            goog.LOCALE.substring(3, 4) == `-` ||
            goog.LOCALE.substring(3, 4) == `_`)) ||
        (7 <= goog.LOCALE.length &&
          (goog.LOCALE.substring(2, 3) == `-` ||
            goog.LOCALE.substring(2, 3) == `_`) &&
          (goog.LOCALE.substring(3, 7).toLowerCase() == `adlm` ||
            goog.LOCALE.substring(3, 7).toLowerCase() == `arab` ||
            goog.LOCALE.substring(3, 7).toLowerCase() == `hebr` ||
            goog.LOCALE.substring(3, 7).toLowerCase() == `nkoo` ||
            goog.LOCALE.substring(3, 7).toLowerCase() == `rohg` ||
            goog.LOCALE.substring(3, 7).toLowerCase() == `thaa`)) ||
        (8 <= goog.LOCALE.length &&
          (goog.LOCALE.substring(3, 4) == `-` ||
            goog.LOCALE.substring(3, 4) == `_`) &&
          (goog.LOCALE.substring(4, 8).toLowerCase() == `adlm` ||
            goog.LOCALE.substring(4, 8).toLowerCase() == `arab` ||
            goog.LOCALE.substring(4, 8).toLowerCase() == `hebr` ||
            goog.LOCALE.substring(4, 8).toLowerCase() == `nkoo` ||
            goog.LOCALE.substring(4, 8).toLowerCase() == `rohg` ||
            goog.LOCALE.substring(4, 8).toLowerCase() == `thaa`))),
      (goog.i18n.bidi.Format = {
        LRE: `‪`,
        RLE: `‫`,
        PDF: `‬`,
        LRM: `‎`,
        RLM: `‏`,
      }),
      (goog.i18n.bidi.Dir = {
        LTR: 1,
        RTL: -1,
        NEUTRAL: 0,
      }),
      (goog.i18n.bidi.RIGHT = `right`),
      (goog.i18n.bidi.LEFT = `left`),
      (goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL
        ? goog.i18n.bidi.LEFT
        : goog.i18n.bidi.RIGHT),
      (goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL
        ? goog.i18n.bidi.RIGHT
        : goog.i18n.bidi.LEFT),
      (goog.i18n.bidi.toDir = function (_, _) {
        return typeof _ == `number`
          ? 0 < _
            ? goog.i18n.bidi.Dir.LTR
            : 0 > _
              ? goog.i18n.bidi.Dir.RTL
              : _
                ? null
                : goog.i18n.bidi.Dir.NEUTRAL
          : _ == null
            ? null
            : _
              ? goog.i18n.bidi.Dir.RTL
              : goog.i18n.bidi.Dir.LTR;
      }),
      (goog.i18n.bidi.ltrChars_ = `A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿`),
      (goog.i18n.bidi.rtlChars_ = `֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ`),
      (goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g),
      (goog.i18n.bidi.stripHtmlIfNeeded_ = function (_, _) {
        return _ ? _.replace(goog.i18n.bidi.htmlSkipReg_, ``) : _;
      }),
      (goog.i18n.bidi.rtlCharReg_ = RegExp(
        `[` + goog.i18n.bidi.rtlChars_ + `]`,
      )),
      (goog.i18n.bidi.ltrCharReg_ = RegExp(
        `[` + goog.i18n.bidi.ltrChars_ + `]`,
      )),
      (goog.i18n.bidi.hasAnyRtl = function (_, _) {
        return goog.i18n.bidi.rtlCharReg_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
        );
      }),
      (goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl),
      (goog.i18n.bidi.hasAnyLtr = function (_, _) {
        return goog.i18n.bidi.ltrCharReg_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
        );
      }),
      (goog.i18n.bidi.ltrRe_ = RegExp(`^[` + goog.i18n.bidi.ltrChars_ + `]`)),
      (goog.i18n.bidi.rtlRe_ = RegExp(`^[` + goog.i18n.bidi.rtlChars_ + `]`)),
      (goog.i18n.bidi.isRtlChar = function (_) {
        return goog.i18n.bidi.rtlRe_.test(_);
      }),
      (goog.i18n.bidi.isLtrChar = function (_) {
        return goog.i18n.bidi.ltrRe_.test(_);
      }),
      (goog.i18n.bidi.isNeutralChar = function (_) {
        return !goog.i18n.bidi.isLtrChar(_) && !goog.i18n.bidi.isRtlChar(_);
      }),
      (goog.i18n.bidi.ltrDirCheckRe_ = RegExp(
        `^[^` +
          goog.i18n.bidi.rtlChars_ +
          `]*[` +
          goog.i18n.bidi.ltrChars_ +
          `]`,
      )),
      (goog.i18n.bidi.rtlDirCheckRe_ = RegExp(
        `^[^` +
          goog.i18n.bidi.ltrChars_ +
          `]*[` +
          goog.i18n.bidi.rtlChars_ +
          `]`,
      )),
      (goog.i18n.bidi.startsWithRtl = function (_, _) {
        return goog.i18n.bidi.rtlDirCheckRe_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
        );
      }),
      (goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl),
      (goog.i18n.bidi.startsWithLtr = function (_, _) {
        return goog.i18n.bidi.ltrDirCheckRe_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
        );
      }),
      (goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr),
      (goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/),
      (goog.i18n.bidi.isNeutralText = function (_, _) {
        return (
          (_ = goog.i18n.bidi.stripHtmlIfNeeded_(_, _)),
          goog.i18n.bidi.isRequiredLtrRe_.test(_) ||
            (!goog.i18n.bidi.hasAnyLtr(_) && !goog.i18n.bidi.hasAnyRtl(_))
        );
      }),
      (goog.i18n.bidi.ltrExitDirCheckRe_ = RegExp(
        `[` +
          goog.i18n.bidi.ltrChars_ +
          `][^` +
          goog.i18n.bidi.rtlChars_ +
          `]*$`,
      )),
      (goog.i18n.bidi.rtlExitDirCheckRe_ = RegExp(
        `[` +
          goog.i18n.bidi.rtlChars_ +
          `][^` +
          goog.i18n.bidi.ltrChars_ +
          `]*$`,
      )),
      (goog.i18n.bidi.endsWithLtr = function (_, _) {
        return goog.i18n.bidi.ltrExitDirCheckRe_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
        );
      }),
      (goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr),
      (goog.i18n.bidi.endsWithRtl = function (_, _) {
        return goog.i18n.bidi.rtlExitDirCheckRe_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(_, _),
        );
      }),
      (goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl),
      (goog.i18n.bidi.rtlLocalesRe_ =
        /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i),
      (goog.i18n.bidi.isRtlLanguage = function (_) {
        return goog.i18n.bidi.rtlLocalesRe_.test(_);
      }),
      (goog.i18n.bidi.bracketGuardTextRe_ =
        /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g),
      (goog.i18n.bidi.guardBracketInText = function (_, _) {
        return (
          (_ = (_ === void 0 ? goog.i18n.bidi.hasAnyRtl(_) : _)
            ? goog.i18n.bidi.Format.RLM
            : goog.i18n.bidi.Format.LRM),
          _.replace(goog.i18n.bidi.bracketGuardTextRe_, _ + `$&` + _)
        );
      }),
      (goog.i18n.bidi.enforceRtlInHtml = function (_) {
        return _.charAt(0) == `<`
          ? _.replace(/<\w+/, `$& dir=rtl`)
          : `
<span dir=rtl>` +
              _ +
              `</span>`;
      }),
      (goog.i18n.bidi.enforceRtlInText = function (_) {
        return goog.i18n.bidi.Format.RLE + _ + goog.i18n.bidi.Format.PDF;
      }),
      (goog.i18n.bidi.enforceLtrInHtml = function (_) {
        return _.charAt(0) == `<`
          ? _.replace(/<\w+/, `$& dir=ltr`)
          : `
<span dir=ltr>` +
              _ +
              `</span>`;
      }),
      (goog.i18n.bidi.enforceLtrInText = function (_) {
        return goog.i18n.bidi.Format.LRE + _ + goog.i18n.bidi.Format.PDF;
      }),
      (goog.i18n.bidi.dimensionsRe_ =
        /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g),
      (goog.i18n.bidi.leftRe_ = /left/gi),
      (goog.i18n.bidi.rightRe_ = /right/gi),
      (goog.i18n.bidi.tempRe_ = /%%%%/g),
      (goog.i18n.bidi.mirrorCSS = function (_) {
        return _.replace(goog.i18n.bidi.dimensionsRe_, `:$1 $4 $3 $2`)
          .replace(goog.i18n.bidi.leftRe_, `%%%%`)
          .replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT)
          .replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
      }),
      (goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g),
      (goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g),
      (goog.i18n.bidi.normalizeHebrewQuote = function (_) {
        return _.replace(
          goog.i18n.bidi.doubleQuoteSubstituteRe_,
          `$1״`,
        ).replace(goog.i18n.bidi.singleQuoteSubstituteRe_, `$1׳`);
      }),
      (goog.i18n.bidi.wordSeparatorRe_ = /\s+/),
      (goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/),
      (goog.i18n.bidi.rtlDetectionThreshold_ = 0.4),
      (goog.i18n.bidi.estimateDirection = function (_, _) {
        var _ = 0,
          _ = 0,
          _ = !1;
        for (
          _ = goog.i18n.bidi
            .stripHtmlIfNeeded_(_, _)
            .split(goog.i18n.bidi.wordSeparatorRe_),
            _ = 0;
          _ < _.length;
          _++
        ) {
          var _ = _[_];
          goog.i18n.bidi.startsWithRtl(_)
            ? (_++, _++)
            : goog.i18n.bidi.isRequiredLtrRe_.test(_)
              ? (_ = !0)
              : goog.i18n.bidi.hasAnyLtr(_)
                ? _++
                : goog.i18n.bidi.hasNumeralsRe_.test(_) && (_ = !0);
        }
        return _ == 0
          ? _
            ? goog.i18n.bidi.Dir.LTR
            : goog.i18n.bidi.Dir.NEUTRAL
          : _ / _ > goog.i18n.bidi.rtlDetectionThreshold_
            ? goog.i18n.bidi.Dir.RTL
            : goog.i18n.bidi.Dir.LTR;
      }),
      (goog.i18n.bidi.detectRtlDirectionality = function (_, _) {
        return goog.i18n.bidi.estimateDirection(_, _) == goog.i18n.bidi.Dir.RTL;
      }),
      (goog.i18n.bidi.setElementDirAndAlign = function (_, _) {
        _ &&
          (_ = goog.i18n.bidi.toDir(_)) &&
          ((_.style.textAlign =
            _ == goog.i18n.bidi.Dir.RTL
              ? goog.i18n.bidi.RIGHT
              : goog.i18n.bidi.LEFT),
          (_.dir = _ == goog.i18n.bidi.Dir.RTL ? `rtl` : `ltr`));
      }),
      (goog.i18n.bidi.setElementDirByTextDirectionality = function (_, _) {
        switch (goog.i18n.bidi.estimateDirection(_)) {
          case goog.i18n.bidi.Dir.LTR:
            _.dir = `ltr`;
            break;
          case goog.i18n.bidi.Dir.RTL:
            _.dir = `rtl`;
            break;
          default:
            _.removeAttribute(`dir`);
        }
      }),
      (goog.i18n.bidi.DirectionalString = function () {}),
      (goog.html.TrustedResourceUrl = function (_, _) {
        ((this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ =
          (_ === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ &&
            _) ||
          ``),
          (this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_));
      }),
      (goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString =
        !0),
      (goog.html.TrustedResourceUrl.prototype.getTypedStringValue =
        function () {
          return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
        }),
      (goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString =
        !0),
      (goog.html.TrustedResourceUrl.prototype.getDirection = function () {
        return goog.i18n.bidi.Dir.LTR;
      }),
      (goog.html.TrustedResourceUrl.prototype.cloneWithParams = function (
        _,
        _,
      ) {
        var _ = goog.html.TrustedResourceUrl.unwrap(this);
        _ = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(_);
        var _ = _[3] || ``;
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
          _[1] +
            goog.html.TrustedResourceUrl.stringifyParams_(`?`, _[2] || ``, _) +
            goog.html.TrustedResourceUrl.stringifyParams_(`#`, _, _),
        );
      }),
      goog.DEBUG &&
        (goog.html.TrustedResourceUrl.prototype.toString = function () {
          return (
            `TrustedResourceUrl{` +
            this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ +
            `}`
          );
        }),
      (goog.html.TrustedResourceUrl.unwrap = function (_) {
        return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(
          _,
        ).toString();
      }),
      (goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (_) {
        return _ instanceof goog.html.TrustedResourceUrl &&
          _.constructor === goog.html.TrustedResourceUrl &&
          _.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? _.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
          : (goog.asserts.fail(
              `expected object of type TrustedResourceUrl, got '` +
                _ +
                `' of type ` +
                goog.typeOf(_),
            ),
            `type_error:TrustedResourceUrl`);
      }),
      (goog.html.TrustedResourceUrl.format = function (_, _) {
        var _ = goog.string.Const.unwrap(_);
        if (!goog.html.TrustedResourceUrl.BASE_URL_.test(_))
          throw Error(`Invalid TrustedResourceUrl format: ` + _);
        return (
          (_ = _.replace(
            goog.html.TrustedResourceUrl.FORMAT_MARKER_,
            function (_, _) {
              if (!Object.prototype.hasOwnProperty.call(_, _))
                throw Error(
                  `Found marker, "` +
                    _ +
                    `", in format string, "` +
                    _ +
                    `", but no valid label mapping found in args: ` +
                    JSON.stringify(_),
                );
              return (
                (_ = _[_]),
                _ instanceof goog.string.Const
                  ? goog.string.Const.unwrap(_)
                  : encodeURIComponent(String(_))
              );
            },
          )),
          goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
            _,
          )
        );
      }),
      (goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g),
      (goog.html.TrustedResourceUrl.BASE_URL_ =
        /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i),
      (goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ =
        /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/),
      (goog.html.TrustedResourceUrl.formatWithParams = function (_, _, _, _) {
        return goog.html.TrustedResourceUrl.format(_, _).cloneWithParams(_, _);
      }),
      (goog.html.TrustedResourceUrl.fromConstant = function (_) {
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
          goog.string.Const.unwrap(_),
        );
      }),
      (goog.html.TrustedResourceUrl.fromConstants = function (_) {
        for (var _ = ``, _ = 0; _ < _.length; _++)
          _ += goog.string.Const.unwrap(_[_]);
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
          _,
        );
      }),
      (goog.html.TrustedResourceUrl.fromSafeScript = function (_) {
        return (
          (_ = goog._.blob.getBlobWithProperties(
            [goog.html.SafeScript.unwrap(_)],
            `text/javascript`,
          )),
          (_ = goog._.url.createObjectUrl(_)),
          goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
            _,
          )
        );
      }),
      (goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
        {}),
      (goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse =
        function (_) {
          return (
            (_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
              ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(
                  _,
                )
              : _),
            new goog.html.TrustedResourceUrl(
              goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
              _,
            )
          );
        }),
      (goog.html.TrustedResourceUrl.stringifyParams_ = function (_, _, _) {
        if (_ == null) return _;
        if (typeof _ == `string`) return _ ? _ + encodeURIComponent(_) : ``;
        for (var _ in _) {
          var _ = _[_];
          _ = Array.isArray(_) ? _ : [_];
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_];
            _ != null &&
              ((_ ||= _),
              (_ +=
                (_.length > _.length ? `&` : ``) +
                encodeURIComponent(_) +
                `=` +
                encodeURIComponent(String(_))));
          }
        }
        return _;
      }),
      (goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
      (goog.string.internal = {}),
      (goog.string.internal.startsWith = function (_, _) {
        return _.lastIndexOf(_, 0) == 0;
      }),
      (goog.string.internal.endsWith = function (_, _) {
        var _ = _.length - _.length;
        return 0 <= _ && _.indexOf(_, _) == _;
      }),
      (goog.string.internal.caseInsensitiveStartsWith = function (_, _) {
        return (
          goog.string.internal.caseInsensitiveCompare(
            _,
            _.substr(0, _.length),
          ) == 0
        );
      }),
      (goog.string.internal.caseInsensitiveEndsWith = function (_, _) {
        return (
          goog.string.internal.caseInsensitiveCompare(
            _,
            _.substr(_.length - _.length, _.length),
          ) == 0
        );
      }),
      (goog.string.internal.caseInsensitiveEquals = function (_, _) {
        return _.toLowerCase() == _.toLowerCase();
      }),
      (goog.string.internal.isEmptyOrWhitespace = function (_) {
        return /^[\s\xa0]*$/.test(_);
      }),
      (goog.string.internal.trim =
        goog.TRUSTED_SITE && String.prototype.trim
          ? function (_) {
              return _.trim();
            }
          : function (_) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(_)[1];
            }),
      (goog.string.internal.caseInsensitiveCompare = function (_, _) {
        return (
          (_ = String(_).toLowerCase()),
          (_ = String(_).toLowerCase()),
          _ < _ ? -1 : _ == _ ? 0 : 1
        );
      }),
      (goog.string.internal.newLineToBr = function (_, _) {
        return _.replace(/(\r\n|\r|\n)/g, _ ? `<br />` : `<br>`);
      }),
      (goog.string.internal.htmlEscape = function (_, _) {
        if (_)
          _ = _.replace(goog.string.internal.AMP_RE_, `&amp;`)
            .replace(goog.string.internal.LT_RE_, `&lt;`)
            .replace(goog.string.internal.GT_RE_, `&gt;`)
            .replace(goog.string.internal.QUOT_RE_, `&quot;`)
            .replace(goog.string.internal.SINGLE_QUOTE_RE_, `&#39;`)
            .replace(goog.string.internal.NULL_RE_, `&#0;`);
        else {
          if (!goog.string.internal.ALL_RE_.test(_)) return _;
          (_.indexOf(`&`) != -1 &&
            (_ = _.replace(goog.string.internal.AMP_RE_, `&amp;`)),
            _.indexOf(`<`) != -1 &&
              (_ = _.replace(goog.string.internal.LT_RE_, `&lt;`)),
            _.indexOf(`>`) != -1 &&
              (_ = _.replace(goog.string.internal.GT_RE_, `&gt;`)),
            _.indexOf(`"`) != -1 &&
              (_ = _.replace(goog.string.internal.QUOT_RE_, `&quot;`)),
            _.indexOf(`'`) != -1 &&
              (_ = _.replace(goog.string.internal.SINGLE_QUOTE_RE_, `&#39;`)),
            _.indexOf(`\0`) != -1 &&
              (_ = _.replace(goog.string.internal.NULL_RE_, `&#0;`)));
        }
        return _;
      }),
      (goog.string.internal.AMP_RE_ = /&/g),
      (goog.string.internal.LT_RE_ = /</g),
      (goog.string.internal.GT_RE_ = />/g),
      (goog.string.internal.QUOT_RE_ = /"/g),
      (goog.string.internal.SINGLE_QUOTE_RE_ = /'/g),
      (goog.string.internal.NULL_RE_ = /\x00/g),
      (goog.string.internal.ALL_RE_ = /[\x00&<>"']/),
      (goog.string.internal.whitespaceEscape = function (_, _) {
        return goog.string.internal.newLineToBr(_.replace(/  /g, ` &#160;`), _);
      }),
      (goog.string.internal.contains = function (_, _) {
        return _.indexOf(_) != -1;
      }),
      (goog.string.internal.caseInsensitiveContains = function (_, _) {
        return goog.string.internal.contains(_.toLowerCase(), _.toLowerCase());
      }),
      (goog.string.internal.compareVersions = function (_, _) {
        var _ = 0;
        ((_ = goog.string.internal.trim(String(_)).split(`.`)),
          (_ = goog.string.internal.trim(String(_)).split(`.`)));
        for (
          var _ = Math.max(_.length, _.length), _ = 0;
          _ == 0 && _ < _;
          _++
        ) {
          var _ = _[_] || ``,
            _ = _[_] || ``;
          do {
            if (
              ((_ = /(\d*)(\D*)(.*)/.exec(_) || [``, ``, ``, ``]),
              (_ = /(\d*)(\D*)(.*)/.exec(_) || [``, ``, ``, ``]),
              _[0].length == 0 && _[0].length == 0)
            )
              break;
            _ = _[1].length == 0 ? 0 : parseInt(_[1], 10);
            var _ = _[1].length == 0 ? 0 : parseInt(_[1], 10);
            ((_ =
              goog.string.internal.compareElements_(_, _) ||
              goog.string.internal.compareElements_(
                _[2].length == 0,
                _[2].length == 0,
              ) ||
              goog.string.internal.compareElements_(_[2], _[2])),
              (_ = _[3]),
              (_ = _[3]));
          } while (_ == 0);
        }
        return _;
      }),
      (goog.string.internal.compareElements_ = function (_, _) {
        return _ < _ ? -1 : +(_ > _);
      }),
      (goog.html.SafeUrl = function (_, _) {
        ((this.privateDoNotAccessOrElseSafeUrlWrappedValue_ =
          (_ === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && _) || ``),
          (this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_));
      }),
      (goog.html.SafeUrl.INNOCUOUS_STRING = `about:invalid#zClosurez`),
      (goog.html.SafeUrl.prototype.implementsGoogStringTypedString = !0),
      (goog.html.SafeUrl.prototype.getTypedStringValue = function () {
        return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
      }),
      (goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString =
        !0),
      (goog.html.SafeUrl.prototype.getDirection = function () {
        return goog.i18n.bidi.Dir.LTR;
      }),
      goog.DEBUG &&
        (goog.html.SafeUrl.prototype.toString = function () {
          return (
            `SafeUrl{` + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + `}`
          );
        }),
      (goog.html.SafeUrl.unwrap = function (_) {
        return _ instanceof goog.html.SafeUrl &&
          _.constructor === goog.html.SafeUrl &&
          _.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? _.privateDoNotAccessOrElseSafeUrlWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeUrl, got '` +
                _ +
                `' of type ` +
                goog.typeOf(_),
            ),
            `type_error:SafeUrl`);
      }),
      (goog.html.SafeUrl.fromConstant = function (_) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
          goog.string.Const.unwrap(_),
        );
      }),
      (goog.html.SAFE_MIME_TYPE_PATTERN_ =
        /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),
      (goog.html.SafeUrl.isSafeMimeType = function (_) {
        return goog.html.SAFE_MIME_TYPE_PATTERN_.test(_);
      }),
      (goog.html.SafeUrl.fromBlob = function (_) {
        return (
          (_ = goog.html.SafeUrl.isSafeMimeType(_.type)
            ? goog._.url.createObjectUrl(_)
            : goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.SafeUrl.fromMediaSource = function (_) {
        return (
          goog.asserts.assert(
            `MediaSource` in goog.global,
            `No support for MediaSource`,
          ),
          (_ =
            _ instanceof MediaSource
              ? goog._.url.createObjectUrl(_)
              : goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i),
      (goog.html.SafeUrl.fromDataUrl = function (_) {
        _ = _.replace(/(%0A|%0D)/g, ``);
        var _ = _.match(goog.html.DATA_URL_PATTERN_);
        return (
          (_ &&= goog.html.SafeUrl.isSafeMimeType(_[1])),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
            _ ? _ : goog.html.SafeUrl.INNOCUOUS_STRING,
          )
        );
      }),
      (goog.html.SafeUrl.fromTelUrl = function (_) {
        return (
          goog.string.internal.caseInsensitiveStartsWith(_, `tel:`) ||
            (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.SIP_URL_PATTERN_ =
        /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i),
      (goog.html.SafeUrl.fromSipUrl = function (_) {
        return (
          goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(_)) ||
            (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.SafeUrl.fromFacebookMessengerUrl = function (_) {
        return (
          goog.string.internal.caseInsensitiveStartsWith(
            _,
            `fb-messenger://share`,
          ) || (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.SafeUrl.fromWhatsAppUrl = function (_) {
        return (
          goog.string.internal.caseInsensitiveStartsWith(
            _,
            `whatsapp://send`,
          ) || (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.SafeUrl.fromSmsUrl = function (_) {
        return (
          (goog.string.internal.caseInsensitiveStartsWith(_, `sms:`) &&
            goog.html.SafeUrl.isSmsUrlBodyValid_(_)) ||
            (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.SafeUrl.isSmsUrlBodyValid_ = function (_) {
        var _ = _.indexOf(`#`);
        return (
          0 < _ && (_ = _.substring(0, _)),
          (_ = _.match(/[?&]body=/gi)),
          _
            ? 1 < _.length
              ? !1
              : ((_ = _.match(/[?&]body=([^&]*)/)[1]),
                !_ || /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(_))
            : !0
        );
      }),
      (goog.html.SafeUrl.fromSshUrl = function (_) {
        return (
          goog.string.internal.caseInsensitiveStartsWith(_, `ssh://`) ||
            (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (_, _) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(
          /^chrome-extension:\/\/([^\/]+)\//,
          _,
          _,
        );
      }),
      (goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (_, _) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(
          /^moz-extension:\/\/([^\/]+)\//,
          _,
          _,
        );
      }),
      (goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (_, _) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(
          /^ms-browser-extension:\/\/([^\/]+)\//,
          _,
          _,
        );
      }),
      (goog.html.SafeUrl.sanitizeExtensionUrl_ = function (_, _, _) {
        return (
          (_ = _.exec(_))
            ? ((_ = _[1]),
              (_ instanceof goog.string.Const
                ? [goog.string.Const.unwrap(_)]
                : _.map(function (_) {
                    return goog.string.Const.unwrap(_);
                  })
              ).indexOf(_) == -1 && (_ = goog.html.SafeUrl.INNOCUOUS_STRING))
            : (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
        );
      }),
      (goog.html.SafeUrl.fromTrustedResourceUrl = function (_) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
          goog.html.TrustedResourceUrl.unwrap(_),
        );
      }),
      (goog.html.SAFE_URL_PATTERN_ =
        /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i),
      (goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_),
      (goog.html.SafeUrl.sanitize = function (_) {
        return _ instanceof goog.html.SafeUrl
          ? _
          : ((_ =
              typeof _ == `object` && _.implementsGoogStringTypedString
                ? _.getTypedStringValue()
                : String(_)),
            goog.html.SAFE_URL_PATTERN_.test(_) ||
              (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_));
      }),
      (goog.html.SafeUrl.sanitizeAssertUnchanged = function (_, _) {
        return _ instanceof goog.html.SafeUrl
          ? _
          : ((_ =
              typeof _ == `object` && _.implementsGoogStringTypedString
                ? _.getTypedStringValue()
                : String(_)),
            _ &&
            /^data:/i.test(_) &&
            ((_ = goog.html.SafeUrl.fromDataUrl(_)),
            _.getTypedStringValue() == _)
              ? _
              : (goog.asserts.assert(
                  goog.html.SAFE_URL_PATTERN_.test(_),
                  `%s does not match the safe URL pattern`,
                  _,
                ) || (_ = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  _,
                )));
      }),
      (goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse =
        function (_) {
          return new goog.html.SafeUrl(
            goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
            _,
          );
        }),
      (goog.html.SafeUrl.ABOUT_BLANK =
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
          `about:blank`,
        )),
      (goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
      (goog.html.SafeStyle = function () {
        ((this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = ``),
          (this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_));
      }),
      (goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0),
      (goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeStyle.fromConstant = function (_) {
        return (
          (_ = goog.string.Const.unwrap(_)),
          _.length === 0
            ? goog.html.SafeStyle.EMPTY
            : (goog.asserts.assert(
                goog.string.internal.endsWith(_, `;`),
                `Last character of style string is not ';': ` + _,
              ),
              goog.asserts.assert(
                goog.string.internal.contains(_, `:`),
                `Style string must contain at least one ':', to specify a "name: value" pair: ` +
                  _,
              ),
              goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                _,
              ))
        );
      }),
      (goog.html.SafeStyle.prototype.getTypedStringValue = function () {
        return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
      }),
      goog.DEBUG &&
        (goog.html.SafeStyle.prototype.toString = function () {
          return (
            `SafeStyle{` +
            this.privateDoNotAccessOrElseSafeStyleWrappedValue_ +
            `}`
          );
        }),
      (goog.html.SafeStyle.unwrap = function (_) {
        return _ instanceof goog.html.SafeStyle &&
          _.constructor === goog.html.SafeStyle &&
          _.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? _.privateDoNotAccessOrElseSafeStyleWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeStyle, got '` +
                _ +
                `' of type ` +
                goog.typeOf(_),
            ),
            `type_error:SafeStyle`);
      }),
      (goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse =
        function (_) {
          return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(
            _,
          );
        }),
      (goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ =
        function (_) {
          return (
            (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = _), this
          );
        }),
      (goog.html.SafeStyle.EMPTY =
        goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
          ``,
        )),
      (goog.html.SafeStyle.INNOCUOUS_STRING = `zClosurez`),
      (goog.html.SafeStyle.create = function (_) {
        var _ = ``,
          _;
        for (_ in _) {
          if (!/^[-_a-zA-Z0-9]+$/.test(_))
            throw Error(`Name allows only [-_a-zA-Z0-9], got: ` + _);
          var _ = _[_];
          _ != null &&
            ((_ = Array.isArray(_)
              ? goog.array
                  .map(_, goog.html.SafeStyle.sanitizePropertyValue_)
                  .join(` `)
              : goog.html.SafeStyle.sanitizePropertyValue_(_)),
            (_ += _ + `:` + _ + `;`));
        }
        return _
          ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
              _,
            )
          : goog.html.SafeStyle.EMPTY;
      }),
      (goog.html.SafeStyle.sanitizePropertyValue_ = function (_) {
        if (_ instanceof goog.html.SafeUrl)
          return (
            `url("` +
            goog.html.SafeUrl.unwrap(_)
              .replace(/</g, `%3c`)
              .replace(/[\\"]/g, `\\$&`) +
            `")`
          );
        if (
          ((_ =
            _ instanceof goog.string.Const
              ? goog.string.Const.unwrap(_)
              : goog.html.SafeStyle.sanitizePropertyValueString_(String(_))),
          /[{;}]/.test(_))
        )
          throw new goog.asserts.AssertionError(
            `Value does not allow [{;}], got: %s.`,
            [_],
          );
        return _;
      }),
      (goog.html.SafeStyle.sanitizePropertyValueString_ = function (_) {
        var _ = _.replace(goog.html.SafeStyle.FUNCTIONS_RE_, `$1`)
          .replace(goog.html.SafeStyle.FUNCTIONS_RE_, `$1`)
          .replace(goog.html.SafeStyle.URL_RE_, `url`);
        if (goog.html.SafeStyle.VALUE_RE_.test(_)) {
          if (goog.html.SafeStyle.COMMENT_RE_.test(_))
            return (
              goog.asserts.fail(`String value disallows comments, got: ` + _),
              goog.html.SafeStyle.INNOCUOUS_STRING
            );
          if (!goog.html.SafeStyle.hasBalancedQuotes_(_))
            return (
              goog.asserts.fail(
                `String value requires balanced quotes, got: ` + _,
              ),
              goog.html.SafeStyle.INNOCUOUS_STRING
            );
          if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(_))
            return (
              goog.asserts.fail(
                `String value requires balanced square brackets and one identifier per pair of brackets, got: ` +
                  _,
              ),
              goog.html.SafeStyle.INNOCUOUS_STRING
            );
        } else
          return (
            goog.asserts.fail(
              `String value allows only ` +
                goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ +
                ` and simple functions, got: ` +
                _,
            ),
            goog.html.SafeStyle.INNOCUOUS_STRING
          );
        return goog.html.SafeStyle.sanitizeUrl_(_);
      }),
      (goog.html.SafeStyle.hasBalancedQuotes_ = function (_) {
        for (var _ = !0, _ = !0, _ = 0; _ < _.length; _++) {
          var _ = _.charAt(_);
          _ == `'` && _ ? (_ = !_) : _ == `"` && _ && (_ = !_);
        }
        return _ && _;
      }),
      (goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (_) {
        for (var _ = !0, _ = /^[-_a-zA-Z0-9]$/, _ = 0; _ < _.length; _++) {
          var _ = _.charAt(_);
          if (_ == `]`) {
            if (_) return !1;
            _ = !0;
          } else if (_ == `[`) {
            if (!_) return !1;
            _ = !1;
          } else if (!_ && !_.test(_)) return !1;
        }
        return _;
      }),
      (goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`),
      (goog.html.SafeStyle.VALUE_RE_ = RegExp(
        `^` + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + `+$`,
      )),
      (goog.html.SafeStyle.URL_RE_ =
        /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g),
      (goog.html.SafeStyle.ALLOWED_FUNCTIONS_ =
        `calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?`.split(
          ` `,
        )),
      (goog.html.SafeStyle.FUNCTIONS_RE_ = RegExp(
        `\\b(` +
          goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join(`|`) +
          `)\\([-+*/0-9a-z.%\\[\\], ]+\\)`,
        `g`,
      )),
      (goog.html.SafeStyle.COMMENT_RE_ = /\/\*/),
      (goog.html.SafeStyle.sanitizeUrl_ = function (_) {
        return _.replace(goog.html.SafeStyle.URL_RE_, function (_, _, _, _) {
          var _ = ``;
          return (
            (_ = _.replace(/^(['"])(.*)\1$/, function (_, _, _) {
              return ((_ = _), _);
            })),
            (_ = goog.html.SafeUrl.sanitize(_).getTypedStringValue()),
            _ + _ + _ + _ + _
          );
        });
      }),
      (goog.html.SafeStyle.concat = function (_) {
        var _ = ``,
          _ = function (_) {
            Array.isArray(_)
              ? goog.array.forEach(_, _)
              : (_ += goog.html.SafeStyle.unwrap(_));
          };
        return (
          goog.array.forEach(arguments, _),
          _
            ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                _,
              )
            : goog.html.SafeStyle.EMPTY
        );
      }),
      (goog.html.SafeStyleSheet = function () {
        ((this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = ``),
          (this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_));
      }),
      (goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0),
      (goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeStyleSheet.createRule = function (_, _) {
        if (goog.string.internal.contains(_, `<`))
          throw Error(`Selector does not allow '<', got: ` + _);
        var _ = _.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, ``);
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(_))
          throw Error(
            `Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: ` +
              _,
          );
        if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(_))
          throw Error(`() and [] in selector must be balanced, got: ` + _);
        return (
          _ instanceof goog.html.SafeStyle ||
            (_ = goog.html.SafeStyle.create(_)),
          (_ =
            _ +
            `{` +
            goog.html.SafeStyle.unwrap(_).replace(/</g, `\\3C `) +
            `}`),
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
            _,
          )
        );
      }),
      (goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (_) {
        for (
          var _ = {
              "(": `)`,
              "[": `]`,
            },
            _ = [],
            _ = 0;
          _ < _.length;
          _++
        ) {
          var _ = _[_];
          if (_[_]) _.push(_[_]);
          else if (goog.object.contains(_, _) && _.pop() != _) return !1;
        }
        return _.length == 0;
      }),
      (goog.html.SafeStyleSheet.concat = function (_) {
        var _ = ``,
          _ = function (_) {
            Array.isArray(_)
              ? goog.array.forEach(_, _)
              : (_ += goog.html.SafeStyleSheet.unwrap(_));
          };
        return (
          goog.array.forEach(arguments, _),
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
            _,
          )
        );
      }),
      (goog.html.SafeStyleSheet.fromConstant = function (_) {
        return (
          (_ = goog.string.Const.unwrap(_)),
          _.length === 0
            ? goog.html.SafeStyleSheet.EMPTY
            : (goog.asserts.assert(
                !goog.string.internal.contains(_, `<`),
                `Forbidden '<' character in style sheet string: ` + _,
              ),
              goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                _,
              ))
        );
      }),
      (goog.html.SafeStyleSheet.prototype.getTypedStringValue = function () {
        return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
      }),
      goog.DEBUG &&
        (goog.html.SafeStyleSheet.prototype.toString = function () {
          return (
            `SafeStyleSheet{` +
            this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ +
            `}`
          );
        }),
      (goog.html.SafeStyleSheet.unwrap = function (_) {
        return _ instanceof goog.html.SafeStyleSheet &&
          _.constructor === goog.html.SafeStyleSheet &&
          _.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? _.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeStyleSheet, got '` +
                _ +
                `' of type ` +
                goog.typeOf(_),
            ),
            `type_error:SafeStyleSheet`);
      }),
      (goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =
        function (_) {
          return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(
            _,
          );
        }),
      (goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =
        function (_) {
          return (
            (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = _), this
          );
        }),
      (goog.html.SafeStyleSheet.EMPTY =
        goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
          ``,
        )),
      (goog.labs = {}),
      (goog.labs.userAgent = {}),
      (goog.labs.userAgent.util = {}),
      (goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
        var _ = goog.labs.userAgent.util.getNavigator_();
        return (_ &&= _.userAgent) ? _ : ``;
      }),
      (goog.labs.userAgent.util.getNavigator_ = function () {
        return goog.global.navigator;
      }),
      (goog.labs.userAgent.util.userAgent_ =
        goog.labs.userAgent.util.getNativeUserAgentString_()),
      (goog.labs.userAgent.util.setUserAgent = function (_) {
        goog.labs.userAgent.util.userAgent_ =
          _ || goog.labs.userAgent.util.getNativeUserAgentString_();
      }),
      (goog.labs.userAgent.util.getUserAgent = function () {
        return goog.labs.userAgent.util.userAgent_;
      }),
      (goog.labs.userAgent.util.matchUserAgent = function (_) {
        var _ = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.contains(_, _);
      }),
      (goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (_) {
        var _ = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.caseInsensitiveContains(_, _);
      }),
      (goog.labs.userAgent.util.extractVersionTuples = function (_) {
        for (
          var _ = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, _ = [], _;
          (_ = _.exec(_));
        )
          _.push([_[1], _[2], _[3] || void 0]);
        return _;
      }),
      (goog.labs.userAgent.browser = {}),
      (goog.labs.userAgent.browser.matchOpera_ = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Opera`);
      }),
      (goog.labs.userAgent.browser.matchIE_ = function () {
        return (
          goog.labs.userAgent.util.matchUserAgent(`Trident`) ||
          goog.labs.userAgent.util.matchUserAgent(`MSIE`)
        );
      }),
      (goog.labs.userAgent.browser.matchEdgeHtml_ = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Edge`);
      }),
      (goog.labs.userAgent.browser.matchEdgeChromium_ = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Edg/`);
      }),
      (goog.labs.userAgent.browser.matchOperaChromium_ = function () {
        return goog.labs.userAgent.util.matchUserAgent(`OPR`);
      }),
      (goog.labs.userAgent.browser.matchFirefox_ = function () {
        return (
          goog.labs.userAgent.util.matchUserAgent(`Firefox`) ||
          goog.labs.userAgent.util.matchUserAgent(`FxiOS`)
        );
      }),
      (goog.labs.userAgent.browser.matchSafari_ = function () {
        return (
          goog.labs.userAgent.util.matchUserAgent(`Safari`) &&
          !(
            goog.labs.userAgent.browser.matchChrome_() ||
            goog.labs.userAgent.browser.matchCoast_() ||
            goog.labs.userAgent.browser.matchOpera_() ||
            goog.labs.userAgent.browser.matchEdgeHtml_() ||
            goog.labs.userAgent.browser.matchEdgeChromium_() ||
            goog.labs.userAgent.browser.matchOperaChromium_() ||
            goog.labs.userAgent.browser.matchFirefox_() ||
            goog.labs.userAgent.browser.isSilk() ||
            goog.labs.userAgent.util.matchUserAgent(`Android`)
          )
        );
      }),
      (goog.labs.userAgent.browser.matchCoast_ = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Coast`);
      }),
      (goog.labs.userAgent.browser.matchIosWebview_ = function () {
        return (
          (goog.labs.userAgent.util.matchUserAgent(`iPad`) ||
            goog.labs.userAgent.util.matchUserAgent(`iPhone`)) &&
          !goog.labs.userAgent.browser.matchSafari_() &&
          !goog.labs.userAgent.browser.matchChrome_() &&
          !goog.labs.userAgent.browser.matchCoast_() &&
          !goog.labs.userAgent.browser.matchFirefox_() &&
          goog.labs.userAgent.util.matchUserAgent(`AppleWebKit`)
        );
      }),
      (goog.labs.userAgent.browser.matchChrome_ = function () {
        return (
          (goog.labs.userAgent.util.matchUserAgent(`Chrome`) ||
            goog.labs.userAgent.util.matchUserAgent(`CriOS`)) &&
          !goog.labs.userAgent.browser.matchEdgeHtml_()
        );
      }),
      (goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
        return (
          goog.labs.userAgent.util.matchUserAgent(`Android`) &&
          !(
            goog.labs.userAgent.browser.isChrome() ||
            goog.labs.userAgent.browser.isFirefox() ||
            goog.labs.userAgent.browser.isOpera() ||
            goog.labs.userAgent.browser.isSilk()
          )
        );
      }),
      (goog.labs.userAgent.browser.isOpera =
        goog.labs.userAgent.browser.matchOpera_),
      (goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_),
      (goog.labs.userAgent.browser.isEdge =
        goog.labs.userAgent.browser.matchEdgeHtml_),
      (goog.labs.userAgent.browser.isEdgeChromium =
        goog.labs.userAgent.browser.matchEdgeChromium_),
      (goog.labs.userAgent.browser.isOperaChromium =
        goog.labs.userAgent.browser.matchOperaChromium_),
      (goog.labs.userAgent.browser.isFirefox =
        goog.labs.userAgent.browser.matchFirefox_),
      (goog.labs.userAgent.browser.isSafari =
        goog.labs.userAgent.browser.matchSafari_),
      (goog.labs.userAgent.browser.isCoast =
        goog.labs.userAgent.browser.matchCoast_),
      (goog.labs.userAgent.browser.isIosWebview =
        goog.labs.userAgent.browser.matchIosWebview_),
      (goog.labs.userAgent.browser.isChrome =
        goog.labs.userAgent.browser.matchChrome_),
      (goog.labs.userAgent.browser.isAndroidBrowser =
        goog.labs.userAgent.browser.matchAndroidBrowser_),
      (goog.labs.userAgent.browser.isSilk = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Silk`);
      }),
      (goog.labs.userAgent.browser.getVersion = function () {
        function _(_) {
          return ((_ = goog.array.find(_, _)), _[_] || ``);
        }
        var _ = goog.labs.userAgent.util.getUserAgent();
        if (goog.labs.userAgent.browser.isIE())
          return goog.labs.userAgent.browser.getIEVersion_(_);
        _ = goog.labs.userAgent.util.extractVersionTuples(_);
        var _ = {};
        goog.array.forEach(_, function (_) {
          _[_[0]] = _[1];
        });
        var _ = goog.partial(goog.object.containsKey, _);
        return goog.labs.userAgent.browser.isOpera()
          ? _([`Version`, `Opera`])
          : goog.labs.userAgent.browser.isEdge()
            ? _([`Edge`])
            : goog.labs.userAgent.browser.isEdgeChromium()
              ? _([`Edg`])
              : goog.labs.userAgent.browser.isChrome()
                ? _([`Chrome`, `CriOS`, `HeadlessChrome`])
                : ((_ = _[2]) && _[1]) || ``;
      }),
      (goog.labs.userAgent.browser.isVersionOrHigher = function (_) {
        return (
          0 <=
          goog.string.internal.compareVersions(
            goog.labs.userAgent.browser.getVersion(),
            _,
          )
        );
      }),
      (goog.labs.userAgent.browser.getIEVersion_ = function (_) {
        var _ = /rv: *([\d\.]*)/.exec(_);
        if (_ && _[1]) return _[1];
        _ = ``;
        var _ = /MSIE +([\d\.]+)/.exec(_);
        if (_ && _[1]) {
          if (((_ = /Trident\/(\d.\d)/.exec(_)), _[1] == `7.0`)) {
            if (_ && _[1])
              switch (_[1]) {
                case `4.0`:
                  _ = `8.0`;
                  break;
                case `5.0`:
                  _ = `9.0`;
                  break;
                case `6.0`:
                  _ = `10.0`;
                  break;
                case `7.0`:
                  _ = `11.0`;
              }
            else _ = `7.0`;
          } else _ = _[1];
        }
        return _;
      }),
      (goog.html.SafeHtml = function () {
        ((this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = ``),
          (this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_),
          (this.dir_ = null));
      }),
      (goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG),
      (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = !0),
      (goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString =
        !0),
      (goog.html.SafeHtml.prototype.getDirection = function () {
        return this.dir_;
      }),
      (goog.html.SafeHtml.prototype.implementsGoogStringTypedString = !0),
      (goog.html.SafeHtml.prototype.getTypedStringValue = function () {
        return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
      }),
      goog.DEBUG &&
        (goog.html.SafeHtml.prototype.toString = function () {
          return (
            `SafeHtml{` +
            this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ +
            `}`
          );
        }),
      (goog.html.SafeHtml.unwrap = function (_) {
        return goog.html.SafeHtml.unwrapTrustedHTML(_).toString();
      }),
      (goog.html.SafeHtml.unwrapTrustedHTML = function (_) {
        return _ instanceof goog.html.SafeHtml &&
          _.constructor === goog.html.SafeHtml &&
          _.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? _.privateDoNotAccessOrElseSafeHtmlWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeHtml, got '` +
                _ +
                `' of type ` +
                goog.typeOf(_),
            ),
            `type_error:SafeHtml`);
      }),
      (goog.html.SafeHtml.htmlEscape = function (_) {
        if (_ instanceof goog.html.SafeHtml) return _;
        var _ = typeof _ == `object`,
          _ = null;
        return (
          _ &&
            _.implementsGoogI18nBidiDirectionalString &&
            (_ = _.getDirection()),
          (_ =
            _ && _.implementsGoogStringTypedString
              ? _.getTypedStringValue()
              : String(_)),
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            goog.string.internal.htmlEscape(_),
            _,
          )
        );
      }),
      (goog.html.SafeHtml.htmlEscapePreservingNewlines = function (_) {
        return _ instanceof goog.html.SafeHtml
          ? _
          : ((_ = goog.html.SafeHtml.htmlEscape(_)),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(_)),
              _.getDirection(),
            ));
      }),
      (goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (_) {
        return _ instanceof goog.html.SafeHtml
          ? _
          : ((_ = goog.html.SafeHtml.htmlEscape(_)),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              goog.string.internal.whitespaceEscape(
                goog.html.SafeHtml.unwrap(_),
              ),
              _.getDirection(),
            ));
      }),
      (goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape),
      (goog.html.SafeHtml.comment = function (_) {
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          `<!--` + goog.string.internal.htmlEscape(_) + `-->`,
          null,
        );
      }),
      (goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/),
      (goog.html.SafeHtml.URL_ATTRIBUTES_ = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0,
      }),
      (goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0,
      }),
      (goog.html.SafeHtml.create = function (_, _, _) {
        return (
          goog.html.SafeHtml.verifyTagName(String(_)),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            String(_),
            _,
            _,
          )
        );
      }),
      (goog.html.SafeHtml.verifyTagName = function (_) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(_))
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? `Invalid tag name <` + _ + `>.`
              : ``,
          );
        if (_.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? `Tag name <` + _ + `> is not allowed for SafeHtml.`
              : ``,
          );
      }),
      (goog.html.SafeHtml.createIframe = function (_, _, _, _) {
        _ && goog.html.TrustedResourceUrl.unwrap(_);
        var _ = {};
        return (
          (_.src = _ || null),
          (_.srcdoc = _ && goog.html.SafeHtml.unwrap(_)),
          (_ = goog.html.SafeHtml.combineAttributes(
            _,
            {
              sandbox: ``,
            },
            _,
          )),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `iframe`,
            _,
            _,
          )
        );
      }),
      (goog.html.SafeHtml.createSandboxIframe = function (_, _, _, _) {
        if (!goog.html.SafeHtml.canUseSandboxIframe())
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? `The browser does not support sandboxed iframes.`
              : ``,
          );
        var _ = {};
        return (
          (_.src = _
            ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(_))
            : null),
          (_.srcdoc = _ || null),
          (_.sandbox = ``),
          (_ = goog.html.SafeHtml.combineAttributes(_, {}, _)),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `iframe`,
            _,
            _,
          )
        );
      }),
      (goog.html.SafeHtml.canUseSandboxIframe = function () {
        return (
          goog.global.HTMLIFrameElement &&
          `sandbox` in goog.global.HTMLIFrameElement.prototype
        );
      }),
      (goog.html.SafeHtml.createScriptSrc = function (_, _) {
        return (
          goog.html.TrustedResourceUrl.unwrap(_),
          (_ = goog.html.SafeHtml.combineAttributes(
            {
              src: _,
            },
            {},
            _,
          )),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `script`,
            _,
          )
        );
      }),
      (goog.html.SafeHtml.createScript = function (_, _) {
        for (var _ in _) {
          var _ = _.toLowerCase();
          if (_ == `language` || _ == `src` || _ == `text` || _ == `type`)
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? `Cannot set "` + _ + `" attribute`
                : ``,
            );
        }
        for (_ = ``, _ = goog.array.concat(_), _ = 0; _ < _.length; _++)
          _ += goog.html.SafeScript.unwrap(_[_]);
        return (
          (_ =
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              _,
              goog.i18n.bidi.Dir.NEUTRAL,
            )),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `script`,
            _,
            _,
          )
        );
      }),
      (goog.html.SafeHtml.createStyle = function (_, _) {
        _ = goog.html.SafeHtml.combineAttributes(
          {
            type: `text/css`,
          },
          {},
          _,
        );
        var _ = ``;
        _ = goog.array.concat(_);
        for (var _ = 0; _ < _.length; _++)
          _ += goog.html.SafeStyleSheet.unwrap(_[_]);
        return (
          (_ =
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              _,
              goog.i18n.bidi.Dir.NEUTRAL,
            )),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `style`,
            _,
            _,
          )
        );
      }),
      (goog.html.SafeHtml.createMetaRefresh = function (_, _) {
        return (
          (_ = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(_))),
          (goog.labs.userAgent.browser.isIE() ||
            goog.labs.userAgent.browser.isEdge()) &&
            goog.string.internal.contains(_, `;`) &&
            (_ = `'` + _.replace(/'/g, `%27`) + `'`),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `meta`,
            {
              "http-equiv": `refresh`,
              content: (_ || 0) + `; url=` + _,
            },
          )
        );
      }),
      (goog.html.SafeHtml.getAttrNameAndValue_ = function (_, _, _) {
        if (_ instanceof goog.string.Const) _ = goog.string.Const.unwrap(_);
        else if (_.toLowerCase() == `style`) {
          if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
            _ = goog.html.SafeHtml.getStyleValue_(_);
          else
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? `Attribute "style" not supported.`
                : ``,
            );
        } else {
          if (/^on/i.test(_))
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? `Attribute "` +
                    _ +
                    `" requires goog.string.Const value, "` +
                    _ +
                    `" given.`
                : ``,
            );
          if (_.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_) {
            if (_ instanceof goog.html.TrustedResourceUrl)
              _ = goog.html.TrustedResourceUrl.unwrap(_);
            else if (_ instanceof goog.html.SafeUrl)
              _ = goog.html.SafeUrl.unwrap(_);
            else if (typeof _ == `string`)
              _ = goog.html.SafeUrl.sanitize(_).getTypedStringValue();
            else
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? `Attribute "` +
                      _ +
                      `" on tag "` +
                      _ +
                      `" requires goog.html.SafeUrl, goog.string.Const, or string, value "` +
                      _ +
                      `" given.`
                  : ``,
              );
          }
        }
        return (
          _.implementsGoogStringTypedString && (_ = _.getTypedStringValue()),
          goog.asserts.assert(
            typeof _ == `string` || typeof _ == `number`,
            `String or number value expected, got ` +
              typeof _ +
              ` with value: ` +
              _,
          ),
          _ + `="` + goog.string.internal.htmlEscape(String(_)) + `"`
        );
      }),
      (goog.html.SafeHtml.getStyleValue_ = function (_) {
        if (!goog.isObject(_))
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? `The "style" attribute requires goog.html.SafeStyle or map of style properties, ` +
                  typeof _ +
                  ` given: ` +
                  _
              : ``,
          );
        return (
          _ instanceof goog.html.SafeStyle ||
            (_ = goog.html.SafeStyle.create(_)),
          goog.html.SafeStyle.unwrap(_)
        );
      }),
      (goog.html.SafeHtml.createWithDir = function (_, _, _, _) {
        return ((_ = goog.html.SafeHtml.create(_, _, _)), (_.dir_ = _), _);
      }),
      (goog.html.SafeHtml.join = function (_, _) {
        _ = goog.html.SafeHtml.htmlEscape(_);
        var _ = _.getDirection(),
          _ = [],
          _ = function (_) {
            Array.isArray(_)
              ? goog.array.forEach(_, _)
              : ((_ = goog.html.SafeHtml.htmlEscape(_)),
                _.push(goog.html.SafeHtml.unwrap(_)),
                (_ = _.getDirection()),
                _ == goog.i18n.bidi.Dir.NEUTRAL
                  ? (_ = _)
                  : _ != goog.i18n.bidi.Dir.NEUTRAL && _ != _ && (_ = null));
          };
        return (
          goog.array.forEach(_, _),
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            _.join(goog.html.SafeHtml.unwrap(_)),
            _,
          )
        );
      }),
      (goog.html.SafeHtml.concat = function (_) {
        return goog.html.SafeHtml.join(
          goog.html.SafeHtml.EMPTY,
          Array.prototype.slice.call(arguments),
        );
      }),
      (goog.html.SafeHtml.concatWithDir = function (_, _) {
        var _ = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
        return ((_.dir_ = _), _);
      }),
      (goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse =
        function (_, _) {
          return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(
            _,
            _,
          );
        }),
      (goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ =
        function (_, _) {
          return (
            (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html
              .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
              ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(
                  _,
                )
              : _),
            (this.dir_ = _),
            this
          );
        }),
      (goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse =
        function (_, _, _) {
          var _ = null,
            _ = `<` + _ + goog.html.SafeHtml.stringifyAttributes(_, _);
          return (
            _ == null ? (_ = []) : Array.isArray(_) || (_ = [_]),
            goog.dom.tags.isVoidTag(_.toLowerCase())
              ? (goog.asserts.assert(
                  !_.length,
                  `Void tag <` + _ + `> does not allow content.`,
                ),
                (_ += `>`))
              : ((_ = goog.html.SafeHtml.concat(_)),
                (_ += `>` + goog.html.SafeHtml.unwrap(_) + `</` + _ + `>`),
                (_ = _.getDirection())),
            (_ = _ && _.dir) &&
              (_ = /^(ltr|rtl|auto)$/i.test(_)
                ? goog.i18n.bidi.Dir.NEUTRAL
                : null),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              _,
              _,
            )
          );
        }),
      (goog.html.SafeHtml.stringifyAttributes = function (_, _) {
        var _ = ``;
        if (_)
          for (var _ in _) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(_))
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? `Invalid attribute name "` + _ + `".`
                  : ``,
              );
            var _ = _[_];
            _ != null &&
              (_ += ` ` + goog.html.SafeHtml.getAttrNameAndValue_(_, _, _));
          }
        return _;
      }),
      (goog.html.SafeHtml.combineAttributes = function (_, _, _) {
        var _ = {},
          _;
        for (_ in _)
          (goog.asserts.assert(_.toLowerCase() == _, `Must be lower case`),
            (_[_] = _[_]));
        for (_ in _)
          (goog.asserts.assert(_.toLowerCase() == _, `Must be lower case`),
            (_[_] = _[_]));
        if (_)
          for (_ in _) {
            var _ = _.toLowerCase();
            if (_ in _)
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? `Cannot override "` +
                      _ +
                      `" attribute, got "` +
                      _ +
                      `" with value "` +
                      _[_] +
                      `"`
                  : ``,
              );
            (_ in _ && delete _[_], (_[_] = _[_]));
          }
        return _;
      }),
      (goog.html.SafeHtml.DOCTYPE_HTML =
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          `<!DOCTYPE html>`,
          goog.i18n.bidi.Dir.NEUTRAL,
        )),
      (goog.html.SafeHtml.EMPTY =
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          ``,
          goog.i18n.bidi.Dir.NEUTRAL,
        )),
      (goog.html.SafeHtml._ =
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          `<br>`,
          goog.i18n.bidi.Dir.NEUTRAL,
        )),
      (goog.html.uncheckedconversions = {}),
      (goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =
        function (_, _, _) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(_),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(_),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              _,
              _ || null,
            )
          );
        }),
      (goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =
        function (_, _) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(_),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(_),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
              _,
            )
          );
        }),
      (goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =
        function (_, _) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(_),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(_),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
              _,
            )
          );
        }),
      (goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract =
        function (_, _) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(_),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(_),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
              _,
            )
          );
        }),
      (goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =
        function (_, _) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(_),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(_),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(_)
          );
        }),
      (goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract =
        function (_, _) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(_),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(_),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
              _,
            )
          );
        }),
      (goog.dom.safe = {}),
      (goog.dom.safe.InsertAdjacentHtmlPosition = {
        AFTERBEGIN: `afterbegin`,
        AFTEREND: `afterend`,
        BEFOREBEGIN: `beforebegin`,
        BEFOREEND: `beforeend`,
      }),
      (goog.dom.safe.insertAdjacentHtml = function (_, _, _) {
        _.insertAdjacentHTML(_, goog.html.SafeHtml.unwrapTrustedHTML(_));
      }),
      (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0,
      }),
      (goog.dom.safe.isInnerHtmlCleanupRecursive_ =
        goog.functions.cacheReturnValue(function () {
          if (goog.DEBUG && typeof document > `u`) return !1;
          var _ = document.createElement(`div`),
            _ = document.createElement(`div`);
          return (
            _.appendChild(document.createElement(`div`)),
            _.appendChild(_),
            goog.DEBUG && !_.firstChild
              ? !1
              : ((_ = _.firstChild.firstChild),
                (_.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(
                  goog.html.SafeHtml.EMPTY,
                )),
                !_.parentElement)
          );
        })),
      (goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (_, _) {
        if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
          for (; _.lastChild;) _.removeChild(_.lastChild);
        _.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(_);
      }),
      (goog.dom.safe.setInnerHtml = function (_, _) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var _ = _.tagName.toUpperCase();
          if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[_])
            throw Error(
              `goog.dom.safe.setInnerHtml cannot be used to set content of ` +
                _.tagName +
                `.`,
            );
        }
        goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(_, _);
      }),
      (goog.dom.safe.setOuterHtml = function (_, _) {
        _.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(_);
      }),
      (goog.dom.safe.setFormElementAction = function (_, _) {
        ((_ =
          _ instanceof goog.html.SafeUrl
            ? _
            : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
          (goog.dom.asserts.assertIsHTMLFormElement(_).action =
            goog.html.SafeUrl.unwrap(_)));
      }),
      (goog.dom.safe.setButtonFormAction = function (_, _) {
        ((_ =
          _ instanceof goog.html.SafeUrl
            ? _
            : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
          (goog.dom.asserts.assertIsHTMLButtonElement(_).formAction =
            goog.html.SafeUrl.unwrap(_)));
      }),
      (goog.dom.safe.setInputFormAction = function (_, _) {
        ((_ =
          _ instanceof goog.html.SafeUrl
            ? _
            : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
          (goog.dom.asserts.assertIsHTMLInputElement(_).formAction =
            goog.html.SafeUrl.unwrap(_)));
      }),
      (goog.dom.safe.setStyle = function (_, _) {
        _.style.cssText = goog.html.SafeStyle.unwrap(_);
      }),
      (goog.dom.safe.documentWrite = function (_, _) {
        _.write(goog.html.SafeHtml.unwrapTrustedHTML(_));
      }),
      (goog.dom.safe.setAnchorHref = function (_, _) {
        (goog.dom.asserts.assertIsHTMLAnchorElement(_),
          (_ =
            _ instanceof goog.html.SafeUrl
              ? _
              : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
          (_.href = goog.html.SafeUrl.unwrap(_)));
      }),
      (goog.dom.safe.setImageSrc = function (_, _) {
        if (
          (goog.dom.asserts.assertIsHTMLImageElement(_),
          !(_ instanceof goog.html.SafeUrl))
        ) {
          var _ = /^data:image\//i.test(_);
          _ = goog.html.SafeUrl.sanitizeAssertUnchanged(_, _);
        }
        _.src = goog.html.SafeUrl.unwrap(_);
      }),
      (goog.dom.safe.setAudioSrc = function (_, _) {
        if (
          (goog.dom.asserts.assertIsHTMLAudioElement(_),
          !(_ instanceof goog.html.SafeUrl))
        ) {
          var _ = /^data:audio\//i.test(_);
          _ = goog.html.SafeUrl.sanitizeAssertUnchanged(_, _);
        }
        _.src = goog.html.SafeUrl.unwrap(_);
      }),
      (goog.dom.safe.setVideoSrc = function (_, _) {
        if (
          (goog.dom.asserts.assertIsHTMLVideoElement(_),
          !(_ instanceof goog.html.SafeUrl))
        ) {
          var _ = /^data:video\//i.test(_);
          _ = goog.html.SafeUrl.sanitizeAssertUnchanged(_, _);
        }
        _.src = goog.html.SafeUrl.unwrap(_);
      }),
      (goog.dom.safe.setEmbedSrc = function (_, _) {
        (goog.dom.asserts.assertIsHTMLEmbedElement(_),
          (_.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(_)));
      }),
      (goog.dom.safe.setFrameSrc = function (_, _) {
        (goog.dom.asserts.assertIsHTMLFrameElement(_),
          (_.src = goog.html.TrustedResourceUrl.unwrap(_)));
      }),
      (goog.dom.safe.setIframeSrc = function (_, _) {
        (goog.dom.asserts.assertIsHTMLIFrameElement(_),
          (_.src = goog.html.TrustedResourceUrl.unwrap(_)));
      }),
      (goog.dom.safe.setIframeSrcdoc = function (_, _) {
        (goog.dom.asserts.assertIsHTMLIFrameElement(_),
          (_.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(_)));
      }),
      (goog.dom.safe.setLinkHrefAndRel = function (_, _, _) {
        (goog.dom.asserts.assertIsHTMLLinkElement(_),
          (_.rel = _),
          goog.string.internal.caseInsensitiveContains(_, `stylesheet`)
            ? (goog.asserts.assert(
                _ instanceof goog.html.TrustedResourceUrl,
                `URL must be TrustedResourceUrl because "rel" contains "stylesheet"`,
              ),
              (_.href = goog.html.TrustedResourceUrl.unwrap(_)))
            : (_.href =
                _ instanceof goog.html.TrustedResourceUrl
                  ? goog.html.TrustedResourceUrl.unwrap(_)
                  : _ instanceof goog.html.SafeUrl
                    ? goog.html.SafeUrl.unwrap(_)
                    : goog.html.SafeUrl.unwrap(
                        goog.html.SafeUrl.sanitizeAssertUnchanged(_),
                      )));
      }),
      (goog.dom.safe.setObjectData = function (_, _) {
        (goog.dom.asserts.assertIsHTMLObjectElement(_),
          (_.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(_)));
      }),
      (goog.dom.safe.setScriptSrc = function (_, _) {
        (goog.dom.asserts.assertIsHTMLScriptElement(_),
          (_.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(_)),
          (_ = goog.getScriptNonce()) && _.setAttribute(`nonce`, _));
      }),
      (goog.dom.safe.setScriptContent = function (_, _) {
        (goog.dom.asserts.assertIsHTMLScriptElement(_),
          (_.text = goog.html.SafeScript.unwrapTrustedScript(_)),
          (_ = goog.getScriptNonce()) && _.setAttribute(`nonce`, _));
      }),
      (goog.dom.safe.setLocationHref = function (_, _) {
        (goog.dom.asserts.assertIsLocation(_),
          (_ =
            _ instanceof goog.html.SafeUrl
              ? _
              : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
          (_.href = goog.html.SafeUrl.unwrap(_)));
      }),
      (goog.dom.safe.assignLocation = function (_, _) {
        (goog.dom.asserts.assertIsLocation(_),
          (_ =
            _ instanceof goog.html.SafeUrl
              ? _
              : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
          _.assign(goog.html.SafeUrl.unwrap(_)));
      }),
      (goog.dom.safe.replaceLocation = function (_, _) {
        ((_ =
          _ instanceof goog.html.SafeUrl
            ? _
            : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
          _.replace(goog.html.SafeUrl.unwrap(_)));
      }),
      (goog.dom.safe.openInWindow = function (_, _, _, _, _) {
        return (
          (_ =
            _ instanceof goog.html.SafeUrl
              ? _
              : goog.html.SafeUrl.sanitizeAssertUnchanged(_)),
          (_ ||= goog.global),
          (_ =
            _ instanceof goog.string.Const
              ? goog.string.Const.unwrap(_)
              : _ || ``),
          _.open(goog.html.SafeUrl.unwrap(_), _, _, _)
        );
      }),
      (goog.dom.safe.parseFromStringHtml = function (_, _) {
        return goog.dom.safe.parseFromString(_, _, `text/html`);
      }),
      (goog.dom.safe.parseFromString = function (_, _, _) {
        return _.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(_), _);
      }),
      (goog.dom.safe.createImageFromBlob = function (_) {
        if (!/^image\/.*/g.test(_.type))
          throw Error(
            `goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.`,
          );
        var _ = goog.global.URL.createObjectURL(_);
        return (
          (_ = new goog.global.Image()),
          (_.onload = function () {
            goog.global.URL.revokeObjectURL(_);
          }),
          goog.dom.safe.setImageSrc(
            _,
            goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(
              goog.string.Const.from(`Image blob URL.`),
              _,
            ),
          ),
          _
        );
      }),
      (goog.string.DETECT_DOUBLE_ESCAPING = !1),
      (goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1),
      (goog.string.Unicode = {
        NBSP: `\xA0`,
      }),
      (goog.string.startsWith = goog.string.internal.startsWith),
      (goog.string.endsWith = goog.string.internal.endsWith),
      (goog.string.caseInsensitiveStartsWith =
        goog.string.internal.caseInsensitiveStartsWith),
      (goog.string.caseInsensitiveEndsWith =
        goog.string.internal.caseInsensitiveEndsWith),
      (goog.string.caseInsensitiveEquals =
        goog.string.internal.caseInsensitiveEquals),
      (goog.string.subs = function (_, _) {
        for (
          var _ = _.split(`%s`),
            _ = ``,
            _ = Array.prototype.slice.call(arguments, 1);
          _.length && 1 < _.length;
        )
          _ += _.shift() + _.shift();
        return _ + _.join(`%s`);
      }),
      (goog.string.collapseWhitespace = function (_) {
        return _.replace(/[\s\xa0]+/g, ` `).replace(/^\s+|\s+$/g, ``);
      }),
      (goog.string.isEmptyOrWhitespace =
        goog.string.internal.isEmptyOrWhitespace),
      (goog.string.isEmptyString = function (_) {
        return _.length == 0;
      }),
      (goog.string.isEmpty = goog.string.isEmptyOrWhitespace),
      (goog.string.isEmptyOrWhitespaceSafe = function (_) {
        return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(_));
      }),
      (goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe),
      (goog.string.isBreakingWhitespace = function (_) {
        return !/[^\t\n\r ]/.test(_);
      }),
      (goog.string.isAlpha = function (_) {
        return !/[^a-zA-Z]/.test(_);
      }),
      (goog.string.isNumeric = function (_) {
        return !/[^0-9]/.test(_);
      }),
      (goog.string.isAlphaNumeric = function (_) {
        return !/[^a-zA-Z0-9]/.test(_);
      }),
      (goog.string.isSpace = function (_) {
        return _ == ` `;
      }),
      (goog.string.isUnicodeChar = function (_) {
        return (
          (_.length == 1 && ` ` <= _ && `~` >= _) || (`` <= _ && `�` >= _)
        );
      }),
      (goog.string.stripNewlines = function (_) {
        return _.replace(/(\r\n|\r|\n)+/g, ` `);
      }),
      (goog.string.canonicalizeNewlines = function (_) {
        return _.replace(
          /(\r\n|\r|\n)/g,
          `
`,
        );
      }),
      (goog.string.normalizeWhitespace = function (_) {
        return _.replace(/\xa0|\s/g, ` `);
      }),
      (goog.string.normalizeSpaces = function (_) {
        return _.replace(/\xa0|[ \t]+/g, ` `);
      }),
      (goog.string.collapseBreakingSpaces = function (_) {
        return _.replace(/[\t\r\n ]+/g, ` `).replace(
          /^[\t\r\n ]+|[\t\r\n ]+$/g,
          ``,
        );
      }),
      (goog.string.trim = goog.string.internal.trim),
      (goog.string.trimLeft = function (_) {
        return _.replace(/^[\s\xa0]+/, ``);
      }),
      (goog.string.trimRight = function (_) {
        return _.replace(/[\s\xa0]+$/, ``);
      }),
      (goog.string.caseInsensitiveCompare =
        goog.string.internal.caseInsensitiveCompare),
      (goog.string.numberAwareCompare_ = function (_, _, _) {
        if (_ == _) return 0;
        if (!_) return -1;
        if (!_) return 1;
        for (
          var _ = _.toLowerCase().match(_),
            _ = _.toLowerCase().match(_),
            _ = Math.min(_.length, _.length),
            _ = 0;
          _ < _;
          _++
        ) {
          _ = _[_];
          var _ = _[_];
          if (_ != _)
            return (
              (_ = parseInt(_, 10)),
              !isNaN(_) && ((_ = parseInt(_, 10)), !isNaN(_) && _ - _)
                ? _ - _
                : _ < _
                  ? -1
                  : 1
            );
        }
        return _.length == _.length ? (_ < _ ? -1 : 1) : _.length - _.length;
      }),
      (goog.string.intAwareCompare = function (_, _) {
        return goog.string.numberAwareCompare_(_, _, /\d+|\D+/g);
      }),
      (goog.string.floatAwareCompare = function (_, _) {
        return goog.string.numberAwareCompare_(_, _, /\d+|\.\d+|\D+/g);
      }),
      (goog.string.numerateCompare = goog.string.floatAwareCompare),
      (goog.string.urlEncode = function (_) {
        return encodeURIComponent(String(_));
      }),
      (goog.string.urlDecode = function (_) {
        return decodeURIComponent(_.replace(/\+/g, ` `));
      }),
      (goog.string.newLineToBr = goog.string.internal.newLineToBr),
      (goog.string.htmlEscape = function (_, _) {
        return (
          (_ = goog.string.internal.htmlEscape(_, _)),
          goog.string.DETECT_DOUBLE_ESCAPING &&
            (_ = _.replace(goog.string.E_RE_, `&#101;`)),
          _
        );
      }),
      (goog.string.E_RE_ = /e/g),
      (goog.string.unescapeEntities = function (_) {
        return goog.string.contains(_, `&`)
          ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING &&
            `document` in goog.global
            ? goog.string.unescapeEntitiesUsingDom_(_)
            : goog.string.unescapePureXmlEntities_(_)
          : _;
      }),
      (goog.string.unescapeEntitiesWithDocument = function (_, _) {
        return goog.string.contains(_, `&`)
          ? goog.string.unescapeEntitiesUsingDom_(_, _)
          : _;
      }),
      (goog.string.unescapeEntitiesUsingDom_ = function (_, _) {
        var _ = {
            "&amp;": `&`,
            "&lt;": `<`,
            "&gt;": `>`,
            "&quot;": `"`,
          },
          _ = _
            ? _.createElement(`div`)
            : goog.global.document.createElement(`div`);
        return _.replace(goog.string.HTML_ENTITY_PATTERN_, function (_, _) {
          var _ = _[_];
          return (
            _ ||
            (_.charAt(0) == `#` &&
              ((_ = Number(`0` + _.substr(1))),
              isNaN(_) || (_ = String.fromCharCode(_))),
            (_ ||=
              (goog.dom.safe.setInnerHtml(
                _,
                goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
                  goog.string.Const.from(`Single HTML entity.`),
                  _ + ` `,
                ),
              ),
              _.firstChild.nodeValue.slice(0, -1))),
            (_[_] = _))
          );
        });
      }),
      (goog.string.unescapePureXmlEntities_ = function (_) {
        return _.replace(/&([^;]+);/g, function (_, _) {
          switch (_) {
            case `amp`:
              return `&`;
            case `lt`:
              return `<`;
            case `gt`:
              return `>`;
            case `quot`:
              return `"`;
            default:
              return _.charAt(0) != `#` ||
                ((_ = Number(`0` + _.substr(1))), isNaN(_))
                ? _
                : String.fromCharCode(_);
          }
        });
      }),
      (goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g),
      (goog.string.whitespaceEscape = function (_, _) {
        return goog.string.newLineToBr(_.replace(/  /g, ` &#160;`), _);
      }),
      (goog.string.preserveSpaces = function (_) {
        return _.replace(/(^|[\n ]) /g, `$1` + goog.string.Unicode.NBSP);
      }),
      (goog.string.stripQuotes = function (_, _) {
        for (var _ = _.length, _ = 0; _ < _; _++) {
          var _ = _ == 1 ? _ : _.charAt(_);
          if (_.charAt(0) == _ && _.charAt(_.length - 1) == _)
            return _.substring(1, _.length - 1);
        }
        return _;
      }),
      (goog.string.truncate = function (_, _, _) {
        return (
          _ && (_ = goog.string.unescapeEntities(_)),
          _.length > _ && (_ = _.substring(0, _ - 3) + `...`),
          _ && (_ = goog.string.htmlEscape(_)),
          _
        );
      }),
      (goog.string.truncateMiddle = function (_, _, _, _) {
        if ((_ && (_ = goog.string.unescapeEntities(_)), _ && _.length > _)) {
          _ > _ && (_ = _);
          var _ = _.length - _;
          _ = _.substring(0, _ - _) + `...` + _.substring(_);
        } else
          _.length > _ &&
            ((_ = Math.floor(_ / 2)),
            (_ = _.length - _),
            (_ = _.substring(0, _ + (_ % 2)) + `...` + _.substring(_)));
        return (_ && (_ = goog.string.htmlEscape(_)), _);
      }),
      (goog.string.specialEscapeChars_ = {
        "\0": `\\0`,
        "\b": `\\b`,
        "\f": `\\f`,
        "\n": `\\n`,
        "\r": `\\r`,
        "	": `\\t`,
        "\v": `\\x0B`,
        '"': `\\"`,
        "\\": `\\\\`,
        "<": `\\u003C`,
      }),
      (goog.string.jsEscapeCache_ = {
        "'": `\\'`,
      }),
      (goog.string.quote = function (_) {
        _ = String(_);
        for (var _ = [`"`], _ = 0; _ < _.length; _++) {
          var _ = _.charAt(_),
            _ = _.charCodeAt(0);
          _[_ + 1] =
            goog.string.specialEscapeChars_[_] ||
            (31 < _ && 127 > _ ? _ : goog.string.escapeChar(_));
        }
        return (_.push(`"`), _.join(``));
      }),
      (goog.string.escapeString = function (_) {
        for (var _ = [], _ = 0; _ < _.length; _++)
          _[_] = goog.string.escapeChar(_.charAt(_));
        return _.join(``);
      }),
      (goog.string.escapeChar = function (_) {
        if (_ in goog.string.jsEscapeCache_)
          return goog.string.jsEscapeCache_[_];
        if (_ in goog.string.specialEscapeChars_)
          return (goog.string.jsEscapeCache_[_] =
            goog.string.specialEscapeChars_[_]);
        var _ = _.charCodeAt(0);
        if (31 < _ && 127 > _) var _ = _;
        else
          (256 > _
            ? ((_ = `\\x`), (16 > _ || 256 < _) && (_ += `0`))
            : ((_ = `\\u`), 4096 > _ && (_ += `0`)),
            (_ += _.toString(16).toUpperCase()));
        return (goog.string.jsEscapeCache_[_] = _);
      }),
      (goog.string.contains = goog.string.internal.contains),
      (goog.string.caseInsensitiveContains =
        goog.string.internal.caseInsensitiveContains),
      (goog.string.countOf = function (_, _) {
        return _ && _ ? _.split(_).length - 1 : 0;
      }),
      (goog.string.removeAt = function (_, _, _) {
        var _ = _;
        return (
          0 <= _ &&
            _ < _.length &&
            0 < _ &&
            (_ = _.substr(0, _) + _.substr(_ + _, _.length - _ - _)),
          _
        );
      }),
      (goog.string.remove = function (_, _) {
        return _.replace(_, ``);
      }),
      (goog.string.removeAll = function (_, _) {
        return (
          (_ = new RegExp(goog.string.regExpEscape(_), `g`)), _.replace(_, ``)
        );
      }),
      (goog.string.replaceAll = function (_, _, _) {
        return (
          (_ = new RegExp(goog.string.regExpEscape(_), `g`)),
          _.replace(_, _.replace(/\$/g, `$$$$`))
        );
      }),
      (goog.string.regExpEscape = function (_) {
        return String(_)
          .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, `\\$1`)
          .replace(/\x08/g, `\\x08`);
      }),
      (goog.string.repeat = String.prototype.repeat
        ? function (_, _) {
            return _.repeat(_);
          }
        : function (_, _) {
            return Array(_ + 1).join(_);
          }),
      (goog.string.padNumber = function (_, _, _) {
        return (
          (_ = _ === void 0 ? String(_) : _.toFixed(_)),
          (_ = _.indexOf(`.`)),
          _ == -1 && (_ = _.length),
          goog.string.repeat(`0`, Math.max(0, _ - _)) + _
        );
      }),
      (goog.string.makeSafe = function (_) {
        return _ == null ? `` : String(_);
      }),
      (goog.string.buildString = function (_) {
        return Array.prototype.join.call(arguments, ``);
      }),
      (goog.string.getRandomString = function () {
        return (
          Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ goog.now(),
          ).toString(36)
        );
      }),
      (goog.string.compareVersions = goog.string.internal.compareVersions),
      (goog.string.hashCode = function (_) {
        for (var _ = 0, _ = 0; _ < _.length; ++_)
          _ = (31 * _ + _.charCodeAt(_)) >>> 0;
        return _;
      }),
      (goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0),
      (goog.string.createUniqueString = function () {
        return `goog_` + goog.string.uniqueStringCounter_++;
      }),
      (goog.string.toNumber = function (_) {
        var _ = Number(_);
        return _ == 0 && goog.string.isEmptyOrWhitespace(_) ? NaN : _;
      }),
      (goog.string.isLowerCamelCase = function (_) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(_);
      }),
      (goog.string.isUpperCamelCase = function (_) {
        return /^([A-Z][a-z]*)+$/.test(_);
      }),
      (goog.string.toCamelCase = function (_) {
        return String(_).replace(/\-([a-z])/g, function (_, _) {
          return _.toUpperCase();
        });
      }),
      (goog.string.toSelectorCase = function (_) {
        return String(_)
          .replace(/([A-Z])/g, `-$1`)
          .toLowerCase();
      }),
      (goog.string.toTitleCase = function (_, _) {
        return (
          (_ = typeof _ == `string` ? goog.string.regExpEscape(_) : `\\s`),
          _.replace(
            RegExp(`(^` + (_ ? `|[` + _ + `]+` : ``) + `)([a-z])`, `g`),
            function (_, _, _) {
              return _ + _.toUpperCase();
            },
          )
        );
      }),
      (goog.string.capitalize = function (_) {
        return (
          String(_.charAt(0)).toUpperCase() + String(_.substr(1)).toLowerCase()
        );
      }),
      (goog.string.parseInt = function (_) {
        return (
          isFinite(_) && (_ = String(_)),
          typeof _ == `string`
            ? /^\s*-?0x/i.test(_)
              ? parseInt(_, 16)
              : parseInt(_, 10)
            : NaN
        );
      }),
      (goog.string.splitLimit = function (_, _, _) {
        _ = _.split(_);
        for (var _ = []; 0 < _ && _.length;) (_.push(_.shift()), _--);
        return (_.length && _.push(_.join(_)), _);
      }),
      (goog.string.lastComponent = function (_, _) {
        if (_) typeof _ == `string` && (_ = [_]);
        else return _;
        for (var _ = -1, _ = 0; _ < _.length; _++)
          if (_[_] != ``) {
            var _ = _.lastIndexOf(_[_]);
            _ > _ && (_ = _);
          }
        return _ == -1 ? _ : _.slice(_ + 1);
      }),
      (goog.string.editDistance = function (_, _) {
        var _ = [],
          _ = [];
        if (_ == _) return 0;
        if (!_.length || !_.length) return Math.max(_.length, _.length);
        for (var _ = 0; _ < _.length + 1; _++) _[_] = _;
        for (_ = 0; _ < _.length; _++) {
          _[0] = _ + 1;
          for (var _ = 0; _ < _.length; _++)
            _[_ + 1] = Math.min(
              _[_] + 1,
              _[_ + 1] + 1,
              _[_] + Number(_[_] != _[_]),
            );
          for (_ = 0; _ < _.length; _++) _[_] = _[_];
        }
        return _[_.length];
      }),
      (goog.labs.userAgent.engine = {}),
      (goog.labs.userAgent.engine.isPresto = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Presto`);
      }),
      (goog.labs.userAgent.engine.isTrident = function () {
        return (
          goog.labs.userAgent.util.matchUserAgent(`Trident`) ||
          goog.labs.userAgent.util.matchUserAgent(`MSIE`)
        );
      }),
      (goog.labs.userAgent.engine.isEdge = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Edge`);
      }),
      (goog.labs.userAgent.engine.isWebKit = function () {
        return (
          goog.labs.userAgent.util.matchUserAgentIgnoreCase(`WebKit`) &&
          !goog.labs.userAgent.engine.isEdge()
        );
      }),
      (goog.labs.userAgent.engine.isGecko = function () {
        return (
          goog.labs.userAgent.util.matchUserAgent(`Gecko`) &&
          !goog.labs.userAgent.engine.isWebKit() &&
          !goog.labs.userAgent.engine.isTrident() &&
          !goog.labs.userAgent.engine.isEdge()
        );
      }),
      (goog.labs.userAgent.engine.getVersion = function () {
        var _ = goog.labs.userAgent.util.getUserAgent();
        if (_) {
          _ = goog.labs.userAgent.util.extractVersionTuples(_);
          var _ = goog.labs.userAgent.engine.getEngineTuple_(_);
          if (_)
            return _[0] == `Gecko`
              ? goog.labs.userAgent.engine.getVersionForKey_(_, `Firefox`)
              : _[1];
          _ = _[0];
          var _;
          if (_ && (_ = _[2]) && (_ = /Trident\/([^\s;]+)/.exec(_)))
            return _[1];
        }
        return ``;
      }),
      (goog.labs.userAgent.engine.getEngineTuple_ = function (_) {
        if (!goog.labs.userAgent.engine.isEdge()) return _[1];
        for (var _ = 0; _ < _.length; _++) {
          var _ = _[_];
          if (_[0] == `Edge`) return _;
        }
      }),
      (goog.labs.userAgent.engine.isVersionOrHigher = function (_) {
        return (
          0 <=
          goog.string.compareVersions(
            goog.labs.userAgent.engine.getVersion(),
            _,
          )
        );
      }),
      (goog.labs.userAgent.engine.getVersionForKey_ = function (_, _) {
        return (
          ((_ = goog.array.find(_, function (_) {
            return _ == _[0];
          })) &&
            _[1]) ||
          ``
        );
      }),
      (goog.labs.userAgent.platform = {}),
      (goog.labs.userAgent.platform.isAndroid = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Android`);
      }),
      (goog.labs.userAgent.platform.isIpod = function () {
        return goog.labs.userAgent.util.matchUserAgent(`iPod`);
      }),
      (goog.labs.userAgent.platform.isIphone = function () {
        return (
          goog.labs.userAgent.util.matchUserAgent(`iPhone`) &&
          !goog.labs.userAgent.util.matchUserAgent(`iPod`) &&
          !goog.labs.userAgent.util.matchUserAgent(`iPad`)
        );
      }),
      (goog.labs.userAgent.platform.isIpad = function () {
        return goog.labs.userAgent.util.matchUserAgent(`iPad`);
      }),
      (goog.labs.userAgent.platform.isIos = function () {
        return (
          goog.labs.userAgent.platform.isIphone() ||
          goog.labs.userAgent.platform.isIpad() ||
          goog.labs.userAgent.platform.isIpod()
        );
      }),
      (goog.labs.userAgent.platform.isMacintosh = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Macintosh`);
      }),
      (goog.labs.userAgent.platform.isLinux = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Linux`);
      }),
      (goog.labs.userAgent.platform.isWindows = function () {
        return goog.labs.userAgent.util.matchUserAgent(`Windows`);
      }),
      (goog.labs.userAgent.platform.isChromeOS = function () {
        return goog.labs.userAgent.util.matchUserAgent(`CrOS`);
      }),
      (goog.labs.userAgent.platform.isChromecast = function () {
        return goog.labs.userAgent.util.matchUserAgent(`CrKey`);
      }),
      (goog.labs.userAgent.platform.isKaiOS = function () {
        return goog.labs.userAgent.util.matchUserAgentIgnoreCase(`KaiOS`);
      }),
      (goog.labs.userAgent.platform.getVersion = function () {
        var _ = goog.labs.userAgent.util.getUserAgent(),
          _ = ``;
        return (
          goog.labs.userAgent.platform.isWindows()
            ? ((_ = /Windows (?:NT|Phone) ([0-9.]+)/),
              (_ = (_ = _.exec(_)) ? _[1] : `0.0`))
            : goog.labs.userAgent.platform.isIos()
              ? ((_ = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/),
                (_ = (_ = _.exec(_)) && _[1].replace(/_/g, `.`)))
              : goog.labs.userAgent.platform.isMacintosh()
                ? ((_ = /Mac OS X ([0-9_.]+)/),
                  (_ = (_ = _.exec(_)) ? _[1].replace(/_/g, `.`) : `10`))
                : goog.labs.userAgent.platform.isKaiOS()
                  ? ((_ = /(?:KaiOS)\/(\S+)/i), (_ = (_ = _.exec(_)) && _[1]))
                  : goog.labs.userAgent.platform.isAndroid()
                    ? ((_ = /Android\s+([^\);]+)(\)|;)/),
                      (_ = (_ = _.exec(_)) && _[1]))
                    : goog.labs.userAgent.platform.isChromeOS() &&
                      ((_ = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/),
                      (_ = (_ = _.exec(_)) && _[1])),
          _ || ``
        );
      }),
      (goog.labs.userAgent.platform.isVersionOrHigher = function (_) {
        return (
          0 <=
          goog.string.compareVersions(
            goog.labs.userAgent.platform.getVersion(),
            _,
          )
        );
      }),
      (goog.reflect = {}),
      (goog.reflect.object = function (_, _) {
        return _;
      }),
      (goog.reflect.objectProperty = function (_, _) {
        return _;
      }),
      (goog.reflect.sinkValue = function (_) {
        return (goog.reflect.sinkValue[` `](_), _);
      }),
      (goog.reflect.sinkValue[` `] = goog.nullFunction),
      (goog.reflect.canAccessProperty = function (_, _) {
        try {
          return (goog.reflect.sinkValue(_[_]), !0);
        } catch {}
        return !1;
      }),
      (goog.reflect.cache = function (_, _, _, _) {
        return (
          (_ = _ ? _(_) : _),
          Object.prototype.hasOwnProperty.call(_, _) ? _[_] : (_[_] = _(_))
        );
      }),
      (goog.userAgent = {}),
      (goog.userAgent.ASSUME_IE = !1),
      (goog.userAgent.ASSUME_EDGE = !1),
      (goog.userAgent.ASSUME_GECKO = !1),
      (goog.userAgent.ASSUME_WEBKIT = !1),
      (goog.userAgent.ASSUME_MOBILE_WEBKIT = !1),
      (goog.userAgent.ASSUME_OPERA = !1),
      (goog.userAgent.ASSUME_ANY_VERSION = !1),
      (goog.userAgent.BROWSER_KNOWN_ =
        goog.userAgent.ASSUME_IE ||
        goog.userAgent.ASSUME_EDGE ||
        goog.userAgent.ASSUME_GECKO ||
        goog.userAgent.ASSUME_MOBILE_WEBKIT ||
        goog.userAgent.ASSUME_WEBKIT ||
        goog.userAgent.ASSUME_OPERA),
      (goog.userAgent.getUserAgentString = function () {
        return goog.labs.userAgent.util.getUserAgent();
      }),
      (goog.userAgent.getNavigatorTyped = function () {
        return goog.global.navigator || null;
      }),
      (goog.userAgent.getNavigator = function () {
        return goog.userAgent.getNavigatorTyped();
      }),
      (goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
        ? goog.userAgent.ASSUME_OPERA
        : goog.labs.userAgent.browser.isOpera()),
      (goog.userAgent._ = goog.userAgent.BROWSER_KNOWN_
        ? goog.userAgent.ASSUME_IE
        : goog.labs.userAgent.browser.isIE()),
      (goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
        ? goog.userAgent.ASSUME_EDGE
        : goog.labs.userAgent.engine.isEdge()),
      (goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent._),
      (goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_
        ? goog.userAgent.ASSUME_GECKO
        : goog.labs.userAgent.engine.isGecko()),
      (goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
        ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT
        : goog.labs.userAgent.engine.isWebKit()),
      (goog.userAgent.isMobile_ = function () {
        return (
          goog.userAgent.WEBKIT &&
          goog.labs.userAgent.util.matchUserAgent(`Mobile`)
        );
      }),
      (goog.userAgent.MOBILE =
        goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_()),
      (goog.userAgent.SAFARI = goog.userAgent.WEBKIT),
      (goog.userAgent.determinePlatform_ = function () {
        var _ = goog.userAgent.getNavigatorTyped();
        return (_ && _.platform) || ``;
      }),
      (goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_()),
      (goog.userAgent.ASSUME_MAC = !1),
      (goog.userAgent.ASSUME_WINDOWS = !1),
      (goog.userAgent.ASSUME_LINUX = !1),
      (goog.userAgent.ASSUME_X11 = !1),
      (goog.userAgent.ASSUME_ANDROID = !1),
      (goog.userAgent.ASSUME_IPHONE = !1),
      (goog.userAgent.ASSUME_IPAD = !1),
      (goog.userAgent.ASSUME_IPOD = !1),
      (goog.userAgent.ASSUME_KAIOS = !1),
      (goog.userAgent.PLATFORM_KNOWN_ =
        goog.userAgent.ASSUME_MAC ||
        goog.userAgent.ASSUME_WINDOWS ||
        goog.userAgent.ASSUME_LINUX ||
        goog.userAgent.ASSUME_X11 ||
        goog.userAgent.ASSUME_ANDROID ||
        goog.userAgent.ASSUME_IPHONE ||
        goog.userAgent.ASSUME_IPAD ||
        goog.userAgent.ASSUME_IPOD),
      (goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_MAC
        : goog.labs.userAgent.platform.isMacintosh()),
      (goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_WINDOWS
        : goog.labs.userAgent.platform.isWindows()),
      (goog.userAgent.isLegacyLinux_ = function () {
        return (
          goog.labs.userAgent.platform.isLinux() ||
          goog.labs.userAgent.platform.isChromeOS()
        );
      }),
      (goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_LINUX
        : goog.userAgent.isLegacyLinux_()),
      (goog.userAgent.isX11_ = function () {
        var _ = goog.userAgent.getNavigatorTyped();
        return !!_ && goog.string.contains(_.appVersion || ``, `X11`);
      }),
      (goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_X11
        : goog.userAgent.isX11_()),
      (goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_ANDROID
        : goog.labs.userAgent.platform.isAndroid()),
      (goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_IPHONE
        : goog.labs.userAgent.platform.isIphone()),
      (goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_IPAD
        : goog.labs.userAgent.platform.isIpad()),
      (goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_IPOD
        : goog.labs.userAgent.platform.isIpod()),
      (goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_IPHONE ||
          goog.userAgent.ASSUME_IPAD ||
          goog.userAgent.ASSUME_IPOD
        : goog.labs.userAgent.platform.isIos()),
      (goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_
        ? goog.userAgent.ASSUME_KAIOS
        : goog.labs.userAgent.platform.isKaiOS()),
      (goog.userAgent.determineVersion_ = function () {
        var _ = ``,
          _ = goog.userAgent.getVersionRegexResult_();
        return (
          _ && (_ = _ ? _[1] : ``),
          goog.userAgent._ &&
          ((_ = goog.userAgent.getDocumentMode_()),
          _ != null && _ > parseFloat(_))
            ? String(_)
            : _
        );
      }),
      (goog.userAgent.getVersionRegexResult_ = function () {
        var _ = goog.userAgent.getUserAgentString();
        if (goog.userAgent.GECKO) return /rv:([^\);]+)(\)|;)/.exec(_);
        if (goog.userAgent.EDGE) return /Edge\/([\d\.]+)/.exec(_);
        if (goog.userAgent._) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(_);
        if (goog.userAgent.WEBKIT) return /WebKit\/(\S+)/.exec(_);
        if (goog.userAgent.OPERA) return /(?:Version)[ \/]?(\S+)/.exec(_);
      }),
      (goog.userAgent.getDocumentMode_ = function () {
        var _ = goog.global.document;
        return _ ? _.documentMode : void 0;
      }),
      (goog.userAgent.VERSION = goog.userAgent.determineVersion_()),
      (goog.userAgent.compare = function (_, _) {
        return goog.string.compareVersions(_, _);
      }),
      (goog.userAgent.isVersionOrHigherCache_ = {}),
      (goog.userAgent.isVersionOrHigher = function (_) {
        return (
          goog.userAgent.ASSUME_ANY_VERSION ||
          goog.reflect.cache(
            goog.userAgent.isVersionOrHigherCache_,
            _,
            function () {
              return (
                0 <= goog.string.compareVersions(goog.userAgent.VERSION, _)
              );
            },
          )
        );
      }),
      (goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher),
      (goog.userAgent.isDocumentModeOrHigher = function (_) {
        return Number(goog.userAgent.DOCUMENT_MODE) >= _;
      }),
      (goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher),
      (goog.userAgent.DOCUMENT_MODE = (function () {
        if (goog.global.document && goog.userAgent._)
          return (
            goog.userAgent.getDocumentMode_() ||
            parseInt(goog.userAgent.VERSION, 10) ||
            void 0
          );
      })()),
      (goog.userAgent.product = {}),
      (goog.userAgent.product.ASSUME_FIREFOX = !1),
      (goog.userAgent.product.ASSUME_IPHONE = !1),
      (goog.userAgent.product.ASSUME_IPAD = !1),
      (goog.userAgent.product.ASSUME_ANDROID = !1),
      (goog.userAgent.product.ASSUME_CHROME = !1),
      (goog.userAgent.product.ASSUME_SAFARI = !1),
      (goog.userAgent.product.PRODUCT_KNOWN_ =
        goog.userAgent.ASSUME_IE ||
        goog.userAgent.ASSUME_EDGE ||
        goog.userAgent.ASSUME_OPERA ||
        goog.userAgent.product.ASSUME_FIREFOX ||
        goog.userAgent.product.ASSUME_IPHONE ||
        goog.userAgent.product.ASSUME_IPAD ||
        goog.userAgent.product.ASSUME_ANDROID ||
        goog.userAgent.product.ASSUME_CHROME ||
        goog.userAgent.product.ASSUME_SAFARI),
      (goog.userAgent.product.OPERA = goog.userAgent.OPERA),
      (goog.userAgent.product._ = goog.userAgent._),
      (goog.userAgent.product.EDGE = goog.userAgent.EDGE),
      (goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_
        ? goog.userAgent.product.ASSUME_FIREFOX
        : goog.labs.userAgent.browser.isFirefox()),
      (goog.userAgent.product.isIphoneOrIpod_ = function () {
        return (
          goog.labs.userAgent.platform.isIphone() ||
          goog.labs.userAgent.platform.isIpod()
        );
      }),
      (goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_
        ? goog.userAgent.product.ASSUME_IPHONE
        : goog.userAgent.product.isIphoneOrIpod_()),
      (goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_
        ? goog.userAgent.product.ASSUME_IPAD
        : goog.labs.userAgent.platform.isIpad()),
      (goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_
        ? goog.userAgent.product.ASSUME_ANDROID
        : goog.labs.userAgent.browser.isAndroidBrowser()),
      (goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_
        ? goog.userAgent.product.ASSUME_CHROME
        : goog.labs.userAgent.browser.isChrome()),
      (goog.userAgent.product.isSafariDesktop_ = function () {
        return (
          goog.labs.userAgent.browser.isSafari() &&
          !goog.labs.userAgent.platform.isIos()
        );
      }),
      (goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_
        ? goog.userAgent.product.ASSUME_SAFARI
        : goog.userAgent.product.isSafariDesktop_()),
      (goog.crypt.base64 = {}),
      (goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`),
      (goog.crypt.base64.ENCODED_VALS =
        goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + `+/=`),
      (goog.crypt.base64.ENCODED_VALS_WEBSAFE =
        goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + `-_.`),
      (goog.crypt.base64.Alphabet = {
        DEFAULT: 0,
        NO_PADDING: 1,
        WEBSAFE: 2,
        WEBSAFE_DOT_PADDING: 3,
        WEBSAFE_NO_PADDING: 4,
      }),
      (goog.crypt.base64.paddingChars_ = `=.`),
      (goog.crypt.base64.isPadding_ = function (_) {
        return goog.string.contains(goog.crypt.base64.paddingChars_, _);
      }),
      (goog.crypt.base64.byteToCharMaps_ = {}),
      (goog.crypt.base64.charToByteMap_ = null),
      (goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ =
        goog.userAgent.GECKO ||
        (goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI) ||
        goog.userAgent.OPERA),
      (goog.crypt.base64.HAS_NATIVE_ENCODE_ =
        goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
        typeof goog.global.btoa == `function`),
      (goog.crypt.base64.HAS_NATIVE_DECODE_ =
        goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
        (!goog.userAgent.product.SAFARI &&
          !goog.userAgent._ &&
          typeof goog.global.atob == `function`)),
      (goog.crypt.base64.encodeByteArray = function (_, _) {
        (goog.asserts.assert(
          goog.isArrayLike(_),
          `encodeByteArray takes an array as a parameter`,
        ),
          _ === void 0 && (_ = goog.crypt.base64.Alphabet.DEFAULT),
          goog.crypt.base64.init_(),
          (_ = goog.crypt.base64.byteToCharMaps_[_]));
        for (var _ = [], _ = 0; _ < _.length; _ += 3) {
          var _ = _[_],
            _ = _ + 1 < _.length,
            _ = _ ? _[_ + 1] : 0,
            _ = _ + 2 < _.length,
            _ = _ ? _[_ + 2] : 0,
            _ = _ >> 2;
          ((_ = ((_ & 3) << 4) | (_ >> 4)),
            (_ = ((_ & 15) << 2) | (_ >> 6)),
            (_ &= 63),
            _ || ((_ = 64), _ || (_ = 64)),
            _.push(_[_], _[_], _[_] || ``, _[_] || ``));
        }
        return _.join(``);
      }),
      (goog.crypt.base64.encodeString = function (_, _) {
        return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !_
          ? goog.global.btoa(_)
          : goog.crypt.base64.encodeByteArray(
              goog.crypt.stringToByteArray(_),
              _,
            );
      }),
      (goog.crypt.base64.decodeString = function (_, _) {
        if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !_)
          return goog.global.atob(_);
        var _ = ``;
        return (
          goog.crypt.base64.decodeStringInternal_(_, function (_) {
            _ += String.fromCharCode(_);
          }),
          _
        );
      }),
      (goog.crypt.base64.decodeStringToByteArray = function (_, _) {
        var _ = [];
        return (
          goog.crypt.base64.decodeStringInternal_(_, function (_) {
            _.push(_);
          }),
          _
        );
      }),
      (goog.crypt.base64.decodeStringToUint8Array = function (_) {
        goog.asserts.assert(
          !goog.userAgent._ || goog.userAgent.isVersionOrHigher(`10`),
          `Browser does not support typed arrays`,
        );
        var _ = _.length,
          _ = (3 * _) / 4;
        _ % 3
          ? (_ = Math.floor(_))
          : goog.crypt.base64.isPadding_(_[_ - 1]) &&
            (_ = goog.crypt.base64.isPadding_(_[_ - 2]) ? _ - 2 : _ - 1);
        var _ = new Uint8Array(_),
          _ = 0;
        return (
          goog.crypt.base64.decodeStringInternal_(_, function (_) {
            _[_++] = _;
          }),
          _.subarray(0, _)
        );
      }),
      (goog.crypt.base64.decodeStringInternal_ = function (_, _) {
        function _(_) {
          for (; _ < _.length;) {
            var _ = _.charAt(_++),
              _ = goog.crypt.base64.charToByteMap_[_];
            if (_ != null) return _;
            if (!goog.string.isEmptyOrWhitespace(_))
              throw Error(`Unknown base64 encoding at char: ` + _);
          }
          return _;
        }
        goog.crypt.base64.init_();
        for (var _ = 0; ;) {
          var _ = _(-1),
            _ = _(0),
            _ = _(64),
            _ = _(64);
          if (_ === 64 && _ === -1) break;
          (_((_ << 2) | (_ >> 4)),
            _ != 64 &&
              (_(((_ << 4) & 240) | (_ >> 2)),
              _ != 64 && _(((_ << 6) & 192) | _)));
        }
      }),
      (goog.crypt.base64.init_ = function () {
        if (!goog.crypt.base64.charToByteMap_) {
          goog.crypt.base64.charToByteMap_ = {};
          for (
            var _ = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(``),
              _ = [`+/=`, `+/`, `-_=`, `-_.`, `-_`],
              _ = 0;
            5 > _;
            _++
          ) {
            var _ = _.concat(_[_].split(``));
            goog.crypt.base64.byteToCharMaps_[_] = _;
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_],
                _ = goog.crypt.base64.charToByteMap_[_];
              _ === void 0
                ? (goog.crypt.base64.charToByteMap_[_] = _)
                : goog.asserts.assert(_ === _);
            }
          }
        }
      }),
      (jspb.utils = {}),
      (jspb.utils.split64Low = 0),
      (jspb.utils.split64High = 0),
      (jspb.utils.splitUint64 = function (_) {
        var _ = _ >>> 0;
        ((_ = Math.floor((_ - _) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
          (jspb.utils.split64Low = _),
          (jspb.utils.split64High = _));
      }),
      (jspb.utils.splitInt64 = function (_) {
        var _ = 0 > _;
        _ = Math.abs(_);
        var _ = _ >>> 0;
        ((_ = Math.floor((_ - _) / jspb.BinaryConstants.TWO_TO_32)),
          (_ >>>= 0),
          _ &&
            ((_ = ~_ >>> 0),
            (_ = (~_ >>> 0) + 1),
            4294967295 < _ && ((_ = 0), _++, 4294967295 < _ && (_ = 0))),
          (jspb.utils.split64Low = _),
          (jspb.utils.split64High = _));
      }),
      (jspb.utils.splitZigzag64 = function (_) {
        var _ = 0 > _;
        ((_ = 2 * Math.abs(_)),
          jspb.utils.splitUint64(_),
          (_ = jspb.utils.split64Low));
        var _ = jspb.utils.split64High;
        (_ &&
          (_ == 0
            ? _ == 0
              ? (_ = _ = 4294967295)
              : (_--, (_ = 4294967295))
            : _--),
          (jspb.utils.split64Low = _),
          (jspb.utils.split64High = _));
      }),
      (jspb.utils.splitFloat32 = function (_) {
        var _ = +(0 > _);
        if (((_ = _ ? -_ : _), _ === 0))
          0 < 1 / _
            ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
            : ((jspb.utils.split64High = 0),
              (jspb.utils.split64Low = 2147483648));
        else if (isNaN(_))
          ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483647));
        else if (_ > jspb.BinaryConstants.FLOAT32_MAX)
          ((jspb.utils.split64High = 0),
            (jspb.utils.split64Low = ((_ << 31) | 2139095040) >>> 0));
        else if (_ < jspb.BinaryConstants.FLOAT32_MIN)
          ((_ = Math.round(_ / 2 ** -149)),
            (jspb.utils.split64High = 0),
            (jspb.utils.split64Low = ((_ << 31) | _) >>> 0));
        else {
          var _ = Math.floor(Math.log(_) / Math.LN2);
          ((_ *= 2 ** -_),
            (_ = Math.round(_ * jspb.BinaryConstants.TWO_TO_23)),
            16777216 <= _ && ++_,
            (jspb.utils.split64High = 0),
            (jspb.utils.split64Low =
              ((_ << 31) | ((_ + 127) << 23) | (_ & 8388607)) >>> 0));
        }
      }),
      (jspb.utils.splitFloat64 = function (_) {
        var _ = +(0 > _);
        if (((_ = _ ? -_ : _), _ === 0))
          ((jspb.utils.split64High = 0 < 1 / _ ? 0 : 2147483648),
            (jspb.utils.split64Low = 0));
        else if (isNaN(_))
          ((jspb.utils.split64High = 2147483647),
            (jspb.utils.split64Low = 4294967295));
        else if (_ > jspb.BinaryConstants.FLOAT64_MAX)
          ((jspb.utils.split64High = ((_ << 31) | 2146435072) >>> 0),
            (jspb.utils.split64Low = 0));
        else if (_ < jspb.BinaryConstants.FLOAT64_MIN) {
          var _ = _ / 2 ** -1074;
          ((_ = _ / jspb.BinaryConstants.TWO_TO_32),
            (jspb.utils.split64High = ((_ << 31) | _) >>> 0),
            (jspb.utils.split64Low = _ >>> 0));
        } else {
          _ = _;
          var _ = 0;
          if (2 <= _) for (; 2 <= _ && 1023 > _;) (_++, (_ /= 2));
          else for (; 1 > _ && -1022 < _;) ((_ *= 2), _--);
          ((_ = _ * 2 ** -_),
            (_ = (_ * jspb.BinaryConstants.TWO_TO_20) & 1048575),
            (_ = (_ * jspb.BinaryConstants.TWO_TO_52) >>> 0),
            (jspb.utils.split64High =
              ((_ << 31) | ((_ + 1023) << 20) | _) >>> 0),
            (jspb.utils.split64Low = _));
        }
      }),
      (jspb.utils.splitHash64 = function (_) {
        var _ = _.charCodeAt(0),
          _ = _.charCodeAt(1),
          _ = _.charCodeAt(2),
          _ = _.charCodeAt(3),
          _ = _.charCodeAt(4),
          _ = _.charCodeAt(5),
          _ = _.charCodeAt(6);
        ((_ = _.charCodeAt(7)),
          (jspb.utils.split64Low =
            (_ + (_ << 8) + (_ << 16) + (_ << 24)) >>> 0),
          (jspb.utils.split64High =
            (_ + (_ << 8) + (_ << 16) + (_ << 24)) >>> 0));
      }),
      (jspb.utils.joinUint64 = function (_, _) {
        return _ * jspb.BinaryConstants.TWO_TO_32 + (_ >>> 0);
      }),
      (jspb.utils.joinInt64 = function (_, _) {
        var _ = _ & 2147483648;
        return (
          _ &&
            ((_ = (~_ + 1) >>> 0),
            (_ = ~_ >>> 0),
            _ == 0 && (_ = (_ + 1) >>> 0)),
          (_ = jspb.utils.joinUint64(_, _)),
          _ ? -_ : _
        );
      }),
      (jspb.utils.toZigzag64 = function (_, _, _) {
        var _ = _ >> 31;
        return _((_ << 1) ^ _, ((_ << 1) | (_ >>> 31)) ^ _);
      }),
      (jspb.utils.joinZigzag64 = function (_, _) {
        return jspb.utils.fromZigzag64(_, _, jspb.utils.joinInt64);
      }),
      (jspb.utils.fromZigzag64 = function (_, _, _) {
        var _ = -(_ & 1);
        return _(((_ >>> 1) | (_ << 31)) ^ _, (_ >>> 1) ^ _);
      }),
      (jspb.utils.joinFloat32 = function (_, _) {
        _ = 2 * (_ >> 31) + 1;
        var _ = (_ >>> 23) & 255;
        return (
          (_ &= 8388607),
          _ == 255
            ? _
              ? NaN
              : (1 / 0) * _
            : _ == 0
              ? _ * 2 ** -149 * _
              : _ * 2 ** (_ - 150) * (_ + 2 ** 23)
        );
      }),
      (jspb.utils.joinFloat64 = function (_, _) {
        var _ = 2 * (_ >> 31) + 1,
          _ = (_ >>> 20) & 2047;
        return (
          (_ = jspb.BinaryConstants.TWO_TO_32 * (_ & 1048575) + _),
          _ == 2047
            ? _
              ? NaN
              : (1 / 0) * _
            : _ == 0
              ? _ * 2 ** -1074 * _
              : _ * 2 ** (_ - 1075) * (_ + jspb.BinaryConstants.TWO_TO_52)
        );
      }),
      (jspb.utils.joinHash64 = function (_, _) {
        return String.fromCharCode(
          (_ >>> 0) & 255,
          (_ >>> 8) & 255,
          (_ >>> 16) & 255,
          (_ >>> 24) & 255,
          (_ >>> 0) & 255,
          (_ >>> 8) & 255,
          (_ >>> 16) & 255,
          (_ >>> 24) & 255,
        );
      }),
      (jspb.utils.DIGITS = `0123456789abcdef`.split(``)),
      (jspb.utils.ZERO_CHAR_CODE_ = 48),
      (jspb.utils.A_CHAR_CODE_ = 97),
      (jspb.utils.joinUnsignedDecimalString = function (_, _) {
        function _(_, _) {
          return (
            (_ = _ ? String(_) : ``), _ ? `0000000`.slice(_.length) + _ : _
          );
        }
        if (2097151 >= _) return `` + jspb.utils.joinUint64(_, _);
        var _ = (((_ >>> 24) | (_ << 8)) >>> 0) & 16777215;
        return (
          (_ = (_ >> 16) & 65535),
          (_ = (_ & 16777215) + 6777216 * _ + 6710656 * _),
          (_ += 8147497 * _),
          (_ *= 2),
          1e7 <= _ && ((_ += Math.floor(_ / 1e7)), (_ %= 1e7)),
          1e7 <= _ && ((_ += Math.floor(_ / 1e7)), (_ %= 1e7)),
          _(_, 0) + _(_, _) + _(_, 1)
        );
      }),
      (jspb.utils.joinSignedDecimalString = function (_, _) {
        var _ = _ & 2147483648;
        return (
          _ && ((_ = (~_ + 1) >>> 0), (_ = (~_ + +(_ == 0)) >>> 0)),
          (_ = jspb.utils.joinUnsignedDecimalString(_, _)),
          _ ? `-` + _ : _
        );
      }),
      (jspb.utils.hash64ToDecimalString = function (_, _) {
        (jspb.utils.splitHash64(_), (_ = jspb.utils.split64Low));
        var _ = jspb.utils.split64High;
        return _
          ? jspb.utils.joinSignedDecimalString(_, _)
          : jspb.utils.joinUnsignedDecimalString(_, _);
      }),
      (jspb.utils.hash64ArrayToDecimalStrings = function (_, _) {
        for (var _ = Array(_.length), _ = 0; _ < _.length; _++)
          _[_] = jspb.utils.hash64ToDecimalString(_[_], _);
        return _;
      }),
      (jspb.utils.decimalStringToHash64 = function (_) {
        function _(_, _) {
          for (var _ = 0; 8 > _ && (_ !== 1 || 0 < _); _++)
            ((_ = _ * _[_] + _), (_[_] = _ & 255), (_ >>>= 8));
        }
        function _() {
          for (var _ = 0; 8 > _; _++) _[_] = ~_[_] & 255;
        }
        jspb.asserts.assert(0 < _.length);
        var _ = !1;
        _[0] === `-` && ((_ = !0), (_ = _.slice(1)));
        for (var _ = [0, 0, 0, 0, 0, 0, 0, 0], _ = 0; _ < _.length; _++)
          _(10, _.charCodeAt(_) - jspb.utils.ZERO_CHAR_CODE_);
        return (_ && (_(), _(1, 1)), goog.crypt.byteArrayToString(_));
      }),
      (jspb.utils.splitDecimalString = function (_) {
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(_));
      }),
      (jspb.utils.toHexDigit_ = function (_) {
        return String.fromCharCode(
          10 > _
            ? jspb.utils.ZERO_CHAR_CODE_ + _
            : jspb.utils.A_CHAR_CODE_ - 10 + _,
        );
      }),
      (jspb.utils.fromHexCharCode_ = function (_) {
        return _ >= jspb.utils.A_CHAR_CODE_
          ? _ - jspb.utils.A_CHAR_CODE_ + 10
          : _ - jspb.utils.ZERO_CHAR_CODE_;
      }),
      (jspb.utils.hash64ToHexString = function (_) {
        var _ = Array(18);
        ((_[0] = `0`), (_[1] = `x`));
        for (var _ = 0; 8 > _; _++) {
          var _ = _.charCodeAt(7 - _);
          ((_[2 * _ + 2] = jspb.utils.toHexDigit_(_ >> 4)),
            (_[2 * _ + 3] = jspb.utils.toHexDigit_(_ & 15)));
        }
        return _.join(``);
      }),
      (jspb.utils.hexStringToHash64 = function (_) {
        ((_ = _.toLowerCase()),
          jspb.asserts.assert(_.length == 18),
          jspb.asserts.assert(_[0] == `0`),
          jspb.asserts.assert(_[1] == `x`));
        for (var _ = ``, _ = 0; 8 > _; _++) {
          var _ = jspb.utils.fromHexCharCode_(_.charCodeAt(2 * _ + 2)),
            _ = jspb.utils.fromHexCharCode_(_.charCodeAt(2 * _ + 3));
          _ = String.fromCharCode(16 * _ + _) + _;
        }
        return _;
      }),
      (jspb.utils.hash64ToNumber = function (_, _) {
        (jspb.utils.splitHash64(_), (_ = jspb.utils.split64Low));
        var _ = jspb.utils.split64High;
        return _ ? jspb.utils.joinInt64(_, _) : jspb.utils.joinUint64(_, _);
      }),
      (jspb.utils.numberToHash64 = function (_) {
        return (
          jspb.utils.splitInt64(_),
          jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
        );
      }),
      (jspb.utils.countVarints = function (_, _, _) {
        for (var _ = 0, _ = _; _ < _; _++) _ += _[_] >> 7;
        return _ - _ - _;
      }),
      (jspb.utils.countVarintFields = function (_, _, _, _) {
        var _ = 0;
        if (((_ = 8 * _ + jspb.BinaryConstants.WireType.VARINT), 128 > _))
          for (; _ < _ && _[_++] == _;)
            for (_++; ;) {
              var _ = _[_++];
              if (!(_ & 128)) break;
            }
        else
          for (; _ < _;) {
            for (_ = _; 128 < _;) {
              if (_[_] != ((_ & 127) | 128)) return _;
              (_++, (_ >>= 7));
            }
            if (_[_++] != _) break;
            for (_++; (_ = _[_++]), _ & 128;);
          }
        return _;
      }),
      (jspb.utils.countFixedFields_ = function (_, _, _, _, _) {
        var _ = 0;
        if (128 > _) for (; _ < _ && _[_++] == _;) (_++, (_ += _));
        else
          for (; _ < _;) {
            for (var _ = _; 128 < _;) {
              if (_[_++] != ((_ & 127) | 128)) return _;
              _ >>= 7;
            }
            if (_[_++] != _) break;
            (_++, (_ += _));
          }
        return _;
      }),
      (jspb.utils.countFixed32Fields = function (_, _, _, _) {
        return jspb.utils.countFixedFields_(
          _,
          _,
          _,
          8 * _ + jspb.BinaryConstants.WireType.FIXED32,
          4,
        );
      }),
      (jspb.utils.countFixed64Fields = function (_, _, _, _) {
        return jspb.utils.countFixedFields_(
          _,
          _,
          _,
          8 * _ + jspb.BinaryConstants.WireType.FIXED64,
          8,
        );
      }),
      (jspb.utils.countDelimitedFields = function (_, _, _, _) {
        var _ = 0;
        for (_ = 8 * _ + jspb.BinaryConstants.WireType.DELIMITED; _ < _;) {
          for (var _ = _; 128 < _;) {
            if (_[_++] != ((_ & 127) | 128)) return _;
            _ >>= 7;
          }
          if (_[_++] != _) break;
          _++;
          for (
            var _ = 0, _ = 1;
            (_ = _[_++]), (_ += (_ & 127) * _), (_ *= 128), _ & 128;
          );
          _ += _;
        }
        return _;
      }),
      (jspb.utils.debugBytesToTextFormat = function (_) {
        var _ = `"`;
        if (_) {
          _ = jspb.utils.byteSourceToUint8Array(_);
          for (var _ = 0; _ < _.length; _++)
            ((_ += `\\x`), 16 > _[_] && (_ += `0`), (_ += _[_].toString(16)));
        }
        return _ + `"`;
      }),
      (jspb.utils.debugScalarToTextFormat = function (_) {
        return typeof _ == `string` ? goog.string.quote(_) : _.toString();
      }),
      (jspb.utils.stringToByteArray = function (_) {
        for (var _ = new Uint8Array(_.length), _ = 0; _ < _.length; _++) {
          var _ = _.charCodeAt(_);
          if (255 < _)
            throw Error(
              `Conversion error: string contains codepoint outside of byte range`,
            );
          _[_] = _;
        }
        return _;
      }),
      (jspb.utils.byteSourceToUint8Array = function (_) {
        return _.constructor === Uint8Array
          ? _
          : _.constructor === ArrayBuffer || _.constructor === Array
            ? new Uint8Array(_)
            : _.constructor === String
              ? goog.crypt.base64.decodeStringToUint8Array(_)
              : _ instanceof Uint8Array
                ? new Uint8Array(_.buffer, _.byteOffset, _.byteLength)
                : (jspb.asserts.fail(`Type not convertible to Uint8Array.`),
                  new Uint8Array());
      }),
      (jspb.BinaryDecoder = function (_, _, _) {
        ((this.bytes_ = null),
          (this.cursor_ = this.end_ = this.start_ = 0),
          (this.error_ = !1),
          _ && this.setBlock(_, _, _));
      }),
      (jspb.BinaryDecoder.instanceCache_ = []),
      (jspb.BinaryDecoder.alloc = function (_, _, _) {
        if (jspb.BinaryDecoder.instanceCache_.length) {
          var _ = jspb.BinaryDecoder.instanceCache_.pop();
          return (_ && _.setBlock(_, _, _), _);
        }
        return new jspb.BinaryDecoder(_, _, _);
      }),
      (jspb.BinaryDecoder.prototype.free = function () {
        (this.clear(),
          100 > jspb.BinaryDecoder.instanceCache_.length &&
            jspb.BinaryDecoder.instanceCache_.push(this));
      }),
      (jspb.BinaryDecoder.prototype.clone = function () {
        return jspb.BinaryDecoder.alloc(
          this.bytes_,
          this.start_,
          this.end_ - this.start_,
        );
      }),
      (jspb.BinaryDecoder.prototype.clear = function () {
        ((this.bytes_ = null),
          (this.cursor_ = this.end_ = this.start_ = 0),
          (this.error_ = !1));
      }),
      (jspb.BinaryDecoder.prototype.getBuffer = function () {
        return this.bytes_;
      }),
      (jspb.BinaryDecoder.prototype.setBlock = function (_, _, _) {
        ((this.bytes_ = jspb.utils.byteSourceToUint8Array(_)),
          (this.start_ = _ === void 0 ? 0 : _),
          (this.end_ = _ === void 0 ? this.bytes_.length : this.start_ + _),
          (this.cursor_ = this.start_));
      }),
      (jspb.BinaryDecoder.prototype.getEnd = function () {
        return this.end_;
      }),
      (jspb.BinaryDecoder.prototype.setEnd = function (_) {
        this.end_ = _;
      }),
      (jspb.BinaryDecoder.prototype.reset = function () {
        this.cursor_ = this.start_;
      }),
      (jspb.BinaryDecoder.prototype.getCursor = function () {
        return this.cursor_;
      }),
      (jspb.BinaryDecoder.prototype.setCursor = function (_) {
        this.cursor_ = _;
      }),
      (jspb.BinaryDecoder.prototype.advance = function (_) {
        ((this.cursor_ += _), jspb.asserts.assert(this.cursor_ <= this.end_));
      }),
      (jspb.BinaryDecoder.prototype.atEnd = function () {
        return this.cursor_ == this.end_;
      }),
      (jspb.BinaryDecoder.prototype.pastEnd = function () {
        return this.cursor_ > this.end_;
      }),
      (jspb.BinaryDecoder.prototype.getError = function () {
        return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
      }),
      (jspb.BinaryDecoder.prototype.readSplitVarint64 = function (_) {
        for (var _ = 128, _ = 0, _ = 0, _ = 0; 4 > _ && 128 <= _; _++)
          ((_ = this.bytes_[this.cursor_++]), (_ |= (_ & 127) << (7 * _)));
        if (
          (128 <= _ &&
            ((_ = this.bytes_[this.cursor_++]),
            (_ |= (_ & 127) << 28),
            (_ |= (_ & 127) >> 4)),
          128 <= _)
        )
          for (_ = 0; 5 > _ && 128 <= _; _++)
            ((_ = this.bytes_[this.cursor_++]),
              (_ |= (_ & 127) << (7 * _ + 3)));
        if (128 > _) return _(_ >>> 0, _ >>> 0);
        (jspb.asserts.fail(`Failed to read varint, encoding is invalid.`),
          (this.error_ = !0));
      }),
      (jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (_) {
        return this.readSplitVarint64(function (_, _) {
          return jspb.utils.fromZigzag64(_, _, _);
        });
      }),
      (jspb.BinaryDecoder.prototype.readSplitFixed64 = function (_) {
        var _ = this.bytes_,
          _ = this.cursor_;
        this.cursor_ += 8;
        for (var _ = 0, _ = 0, _ = _ + 7; _ >= _; _--)
          ((_ = (_ << 8) | _[_]), (_ = (_ << 8) | _[_ + 4]));
        return _(_, _);
      }),
      (jspb.BinaryDecoder.prototype.skipVarint = function () {
        for (; this.bytes_[this.cursor_] & 128;) this.cursor_++;
        this.cursor_++;
      }),
      (jspb.BinaryDecoder.prototype.unskipVarint = function (_) {
        for (; 128 < _;) (this.cursor_--, (_ >>>= 7));
        this.cursor_--;
      }),
      (jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
        var _ = this.bytes_,
          _ = _[this.cursor_ + 0],
          _ = _ & 127;
        return 128 > _
          ? ((this.cursor_ += 1),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            _)
          : ((_ = _[this.cursor_ + 1]),
            (_ |= (_ & 127) << 7),
            128 > _
              ? ((this.cursor_ += 2),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                _)
              : ((_ = _[this.cursor_ + 2]),
                (_ |= (_ & 127) << 14),
                128 > _
                  ? ((this.cursor_ += 3),
                    jspb.asserts.assert(this.cursor_ <= this.end_),
                    _)
                  : ((_ = _[this.cursor_ + 3]),
                    (_ |= (_ & 127) << 21),
                    128 > _
                      ? ((this.cursor_ += 4),
                        jspb.asserts.assert(this.cursor_ <= this.end_),
                        _)
                      : ((_ = _[this.cursor_ + 4]),
                        (_ |= (_ & 15) << 28),
                        128 > _
                          ? ((this.cursor_ += 5),
                            jspb.asserts.assert(this.cursor_ <= this.end_),
                            _ >>> 0)
                          : ((this.cursor_ += 5),
                            128 <= _[this.cursor_++] &&
                              128 <= _[this.cursor_++] &&
                              128 <= _[this.cursor_++] &&
                              128 <= _[this.cursor_++] &&
                              128 <= _[this.cursor_++] &&
                              jspb.asserts.assert(!1),
                            jspb.asserts.assert(this.cursor_ <= this.end_),
                            _)))));
      }),
      (jspb.BinaryDecoder.prototype.readSignedVarint32 = function () {
        return ~~this.readUnsignedVarint32();
      }),
      (jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function () {
        return this.readUnsignedVarint32().toString();
      }),
      (jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
        return this.readSignedVarint32().toString();
      }),
      (jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
        var _ = this.readUnsignedVarint32();
        return (_ >>> 1) ^ -(_ & 1);
      }),
      (jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
        return this.readSplitVarint64(jspb.utils.joinUint64);
      }),
      (jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function () {
        return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
      }),
      (jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
        return this.readSplitVarint64(jspb.utils.joinInt64);
      }),
      (jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
        return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
      }),
      (jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
        return this.readSplitVarint64(jspb.utils.joinZigzag64);
      }),
      (jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function () {
        return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
      }),
      (jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
        return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
      }),
      (jspb.BinaryDecoder.prototype.readUint8 = function () {
        var _ = this.bytes_[this.cursor_ + 0];
        return (
          (this.cursor_ += 1), jspb.asserts.assert(this.cursor_ <= this.end_), _
        );
      }),
      (jspb.BinaryDecoder.prototype.readUint16 = function () {
        var _ = this.bytes_[this.cursor_ + 0],
          _ = this.bytes_[this.cursor_ + 1];
        return (
          (this.cursor_ += 2),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          _ | 0 | (_ << 8)
        );
      }),
      (jspb.BinaryDecoder.prototype.readUint32 = function () {
        var _ = this.bytes_[this.cursor_ + 0],
          _ = this.bytes_[this.cursor_ + 1],
          _ = this.bytes_[this.cursor_ + 2],
          _ = this.bytes_[this.cursor_ + 3];
        return (
          (this.cursor_ += 4),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          (_ | 0 | (_ << 8) | (_ << 16) | (_ << 24)) >>> 0
        );
      }),
      (jspb.BinaryDecoder.prototype.readUint64 = function () {
        var _ = this.readUint32(),
          _ = this.readUint32();
        return jspb.utils.joinUint64(_, _);
      }),
      (jspb.BinaryDecoder.prototype.readUint64String = function () {
        var _ = this.readUint32(),
          _ = this.readUint32();
        return jspb.utils.joinUnsignedDecimalString(_, _);
      }),
      (jspb.BinaryDecoder.prototype.readInt8 = function () {
        var _ = this.bytes_[this.cursor_ + 0];
        return (
          (this.cursor_ += 1),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          (_ << 24) >> 24
        );
      }),
      (jspb.BinaryDecoder.prototype.readInt16 = function () {
        var _ = this.bytes_[this.cursor_ + 0],
          _ = this.bytes_[this.cursor_ + 1];
        return (
          (this.cursor_ += 2),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          ((_ | 0 | (_ << 8)) << 16) >> 16
        );
      }),
      (jspb.BinaryDecoder.prototype.readInt32 = function () {
        var _ = this.bytes_[this.cursor_ + 0],
          _ = this.bytes_[this.cursor_ + 1],
          _ = this.bytes_[this.cursor_ + 2],
          _ = this.bytes_[this.cursor_ + 3];
        return (
          (this.cursor_ += 4),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          _ | 0 | (_ << 8) | (_ << 16) | (_ << 24)
        );
      }),
      (jspb.BinaryDecoder.prototype.readInt64 = function () {
        var _ = this.readUint32(),
          _ = this.readUint32();
        return jspb.utils.joinInt64(_, _);
      }),
      (jspb.BinaryDecoder.prototype.readInt64String = function () {
        var _ = this.readUint32(),
          _ = this.readUint32();
        return jspb.utils.joinSignedDecimalString(_, _);
      }),
      (jspb.BinaryDecoder.prototype.readFloat = function () {
        var _ = this.readUint32();
        return jspb.utils.joinFloat32(_, 0);
      }),
      (jspb.BinaryDecoder.prototype.readDouble = function () {
        var _ = this.readUint32(),
          _ = this.readUint32();
        return jspb.utils.joinFloat64(_, _);
      }),
      (jspb.BinaryDecoder.prototype.readBool = function () {
        return !!this.bytes_[this.cursor_++];
      }),
      (jspb.BinaryDecoder.prototype.readEnum = function () {
        return this.readSignedVarint32();
      }),
      (jspb.BinaryDecoder.prototype.readString = function (_) {
        for (
          var _ = this.bytes_, _ = this.cursor_, _ = _ + _, _ = [], _ = ``;
          _ < _;
        ) {
          var _ = _[_++];
          if (_ < 128) _.push(_);
          else if (_ < 192) continue;
          else if (_ < 224) {
            if (_ - _ < 1) break;
            var _ = _[_++];
            _.push(((_ & 31) << 6) | (_ & 63));
          } else if (_ < 240) {
            if (_ - _ < 2) break;
            var _ = _[_++],
              _ = _[_++];
            _.push(((_ & 15) << 12) | ((_ & 63) << 6) | (_ & 63));
          } else if (_ < 248) {
            if (_ - _ < 3) break;
            var _ = _[_++],
              _ = _[_++],
              _ = _[_++],
              _ =
                ((_ & 7) << 18) | ((_ & 63) << 12) | ((_ & 63) << 6) | (_ & 63);
            _ -= 65536;
            var _ = (_ & 1023) + 56320,
              _ = ((_ >> 10) & 1023) + 55296;
            _.push(_, _);
          }
          _.length >= 8192 &&
            ((_ += String.fromCharCode.apply(null, _)), (_.length = 0));
        }
        return ((_ += goog.crypt.byteArrayToString(_)), (this.cursor_ = _), _);
      }),
      (jspb.BinaryDecoder.prototype.readStringWithLength = function () {
        var _ = this.readUnsignedVarint32();
        return this.readString(_);
      }),
      (jspb.BinaryDecoder.prototype.readBytes = function (_) {
        if (0 > _ || this.cursor_ + _ > this.bytes_.length)
          return (
            (this.error_ = !0),
            jspb.asserts.fail(`Invalid byte length!`),
            new Uint8Array()
          );
        var _ = this.bytes_.subarray(this.cursor_, this.cursor_ + _);
        return (
          (this.cursor_ += _), jspb.asserts.assert(this.cursor_ <= this.end_), _
        );
      }),
      (jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
        return this.readSplitVarint64(jspb.utils.joinHash64);
      }),
      (jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
        var _ = this.bytes_,
          _ = this.cursor_,
          _ = _[_ + 0],
          _ = _[_ + 1],
          _ = _[_ + 2],
          _ = _[_ + 3],
          _ = _[_ + 4],
          _ = _[_ + 5],
          _ = _[_ + 6];
        return (
          (_ = _[_ + 7]),
          (this.cursor_ += 8),
          String.fromCharCode(_, _, _, _, _, _, _, _)
        );
      }),
      (jspb.BinaryReader = function (_, _, _) {
        ((this.decoder_ = jspb.BinaryDecoder.alloc(_, _, _)),
          (this.fieldCursor_ = this.decoder_.getCursor()),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
          (this.error_ = !1),
          (this.readCallbacks_ = null));
      }),
      (jspb.BinaryReader.instanceCache_ = []),
      (jspb.BinaryReader.alloc = function (_, _, _) {
        if (jspb.BinaryReader.instanceCache_.length) {
          var _ = jspb.BinaryReader.instanceCache_.pop();
          return (_ && _.decoder_.setBlock(_, _, _), _);
        }
        return new jspb.BinaryReader(_, _, _);
      }),
      (jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc),
      (jspb.BinaryReader.prototype.free = function () {
        (this.decoder_.clear(),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
          (this.error_ = !1),
          (this.readCallbacks_ = null),
          100 > jspb.BinaryReader.instanceCache_.length &&
            jspb.BinaryReader.instanceCache_.push(this));
      }),
      (jspb.BinaryReader.prototype.getFieldCursor = function () {
        return this.fieldCursor_;
      }),
      (jspb.BinaryReader.prototype.getCursor = function () {
        return this.decoder_.getCursor();
      }),
      (jspb.BinaryReader.prototype.getBuffer = function () {
        return this.decoder_.getBuffer();
      }),
      (jspb.BinaryReader.prototype.getFieldNumber = function () {
        return this.nextField_;
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `getFieldNumber`,
        jspb.BinaryReader.prototype.getFieldNumber,
      ),
      (jspb.BinaryReader.prototype.getWireType = function () {
        return this.nextWireType_;
      }),
      (jspb.BinaryReader.prototype.isDelimited = function () {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `isDelimited`,
        jspb.BinaryReader.prototype.isDelimited,
      ),
      (jspb.BinaryReader.prototype.isEndGroup = function () {
        return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `isEndGroup`,
        jspb.BinaryReader.prototype.isEndGroup,
      ),
      (jspb.BinaryReader.prototype.getError = function () {
        return this.error_ || this.decoder_.getError();
      }),
      (jspb.BinaryReader.prototype.setBlock = function (_, _, _) {
        (this.decoder_.setBlock(_, _, _),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID));
      }),
      (jspb.BinaryReader.prototype.reset = function () {
        (this.decoder_.reset(),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID));
      }),
      (jspb.BinaryReader.prototype.advance = function (_) {
        this.decoder_.advance(_);
      }),
      (jspb.BinaryReader.prototype.nextField = function () {
        if (this.decoder_.atEnd()) return !1;
        if (this.getError())
          return (jspb.asserts.fail(`Decoder hit an error`), !1);
        this.fieldCursor_ = this.decoder_.getCursor();
        var _ = this.decoder_.readUnsignedVarint32(),
          _ = _ >>> 3;
        return (
          (_ &= 7),
          _ != jspb.BinaryConstants.WireType.VARINT &&
          _ != jspb.BinaryConstants.WireType.FIXED32 &&
          _ != jspb.BinaryConstants.WireType.FIXED64 &&
          _ != jspb.BinaryConstants.WireType.DELIMITED &&
          _ != jspb.BinaryConstants.WireType.START_GROUP &&
          _ != jspb.BinaryConstants.WireType.END_GROUP
            ? (jspb.asserts.fail(
                `Invalid wire type: %s (at position %s)`,
                _,
                this.fieldCursor_,
              ),
              (this.error_ = !0),
              !1)
            : ((this.nextField_ = _), (this.nextWireType_ = _), !0)
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `nextField`,
        jspb.BinaryReader.prototype.nextField,
      ),
      (jspb.BinaryReader.prototype.unskipHeader = function () {
        this.decoder_.unskipVarint((this.nextField_ << 3) | this.nextWireType_);
      }),
      (jspb.BinaryReader.prototype.skipMatchingFields = function () {
        var _ = this.nextField_;
        for (
          this.unskipHeader();
          this.nextField() && this.getFieldNumber() == _;
        )
          this.skipField();
        this.decoder_.atEnd() || this.unskipHeader();
      }),
      (jspb.BinaryReader.prototype.skipVarintField = function () {
        this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
          ? this.decoder_.skipVarint()
          : (jspb.asserts.fail(`Invalid wire type for skipVarintField`),
            this.skipField());
      }),
      (jspb.BinaryReader.prototype.skipDelimitedField = function () {
        if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
          (jspb.asserts.fail(`Invalid wire type for skipDelimitedField`),
            this.skipField());
        else {
          var _ = this.decoder_.readUnsignedVarint32();
          this.decoder_.advance(_);
        }
      }),
      (jspb.BinaryReader.prototype.skipFixed32Field = function () {
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
          ? this.decoder_.advance(4)
          : (jspb.asserts.fail(`Invalid wire type for skipFixed32Field`),
            this.skipField());
      }),
      (jspb.BinaryReader.prototype.skipFixed64Field = function () {
        this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
          ? this.decoder_.advance(8)
          : (jspb.asserts.fail(`Invalid wire type for skipFixed64Field`),
            this.skipField());
      }),
      (jspb.BinaryReader.prototype.skipGroup = function () {
        var _ = this.nextField_;
        do {
          if (!this.nextField()) {
            (jspb.asserts.fail(`Unmatched start-group tag: stream EOF`),
              (this.error_ = !0));
            break;
          }
          if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
            this.nextField_ != _ &&
              (jspb.asserts.fail(`Unmatched end-group tag`),
              (this.error_ = !0));
            break;
          }
          this.skipField();
        } while (1);
      }),
      (jspb.BinaryReader.prototype.skipField = function () {
        switch (this.nextWireType_) {
          case jspb.BinaryConstants.WireType.VARINT:
            this.skipVarintField();
            break;
          case jspb.BinaryConstants.WireType.FIXED64:
            this.skipFixed64Field();
            break;
          case jspb.BinaryConstants.WireType.DELIMITED:
            this.skipDelimitedField();
            break;
          case jspb.BinaryConstants.WireType.FIXED32:
            this.skipFixed32Field();
            break;
          case jspb.BinaryConstants.WireType.START_GROUP:
            this.skipGroup();
            break;
          default:
            jspb.asserts.fail(`Invalid wire encoding for field.`);
        }
      }),
      (jspb.BinaryReader.prototype.registerReadCallback = function (_, _) {
        (this.readCallbacks_ === null && (this.readCallbacks_ = {}),
          jspb.asserts.assert(!this.readCallbacks_[_]),
          (this.readCallbacks_[_] = _));
      }),
      (jspb.BinaryReader.prototype.runReadCallback = function (_) {
        return (
          jspb.asserts.assert(this.readCallbacks_ !== null),
          (_ = this.readCallbacks_[_]),
          jspb.asserts.assert(_),
          _(this)
        );
      }),
      (jspb.BinaryReader.prototype.readAny = function (_) {
        this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(_);
        var _ = jspb.BinaryConstants.FieldType;
        switch (_) {
          case _.DOUBLE:
            return this.readDouble();
          case _.FLOAT:
            return this.readFloat();
          case _.INT64:
            return this.readInt64();
          case _.UINT64:
            return this.readUint64();
          case _.INT32:
            return this.readInt32();
          case _.FIXED64:
            return this.readFixed64();
          case _.FIXED32:
            return this.readFixed32();
          case _.BOOL:
            return this.readBool();
          case _.STRING:
            return this.readString();
          case _.GROUP:
            jspb.asserts.fail(`Group field type not supported in readAny()`);
          case _.MESSAGE:
            jspb.asserts.fail(`Message field type not supported in readAny()`);
          case _.BYTES:
            return this.readBytes();
          case _.UINT32:
            return this.readUint32();
          case _.ENUM:
            return this.readEnum();
          case _.SFIXED32:
            return this.readSfixed32();
          case _.SFIXED64:
            return this.readSfixed64();
          case _.SINT32:
            return this.readSint32();
          case _.SINT64:
            return this.readSint64();
          case _.FHASH64:
            return this.readFixedHash64();
          case _.VHASH64:
            return this.readVarintHash64();
          default:
            jspb.asserts.fail(`Invalid field type in readAny()`);
        }
        return 0;
      }),
      (jspb.BinaryReader.prototype.readMessage = function (_, _) {
        jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
        );
        var _ = this.decoder_.getEnd(),
          _ = this.decoder_.readUnsignedVarint32();
        ((_ = this.decoder_.getCursor() + _),
          this.decoder_.setEnd(_),
          _(_, this),
          this.decoder_.setCursor(_),
          this.decoder_.setEnd(_));
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readMessage`,
        jspb.BinaryReader.prototype.readMessage,
      ),
      (jspb.BinaryReader.prototype.readGroup = function (_, _, _) {
        (jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP,
        ),
          jspb.asserts.assert(this.nextField_ == _),
          _(_, this),
          this.error_ ||
            this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP ||
            (jspb.asserts.fail(
              `Group submessage did not end with an END_GROUP tag`,
            ),
            (this.error_ = !0)));
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readGroup`,
        jspb.BinaryReader.prototype.readGroup,
      ),
      (jspb.BinaryReader.prototype.getFieldDecoder = function () {
        jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
        );
        var _ = this.decoder_.readUnsignedVarint32(),
          _ = this.decoder_.getCursor(),
          _ = _ + _;
        return (
          (_ = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), _, _)),
          this.decoder_.setCursor(_),
          _
        );
      }),
      (jspb.BinaryReader.prototype.readInt32 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSignedVarint32()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readInt32`,
        jspb.BinaryReader.prototype.readInt32,
      ),
      (jspb.BinaryReader.prototype.readInt32String = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSignedVarint32String()
        );
      }),
      (jspb.BinaryReader.prototype.readInt64 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSignedVarint64()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readInt64`,
        jspb.BinaryReader.prototype.readInt64,
      ),
      (jspb.BinaryReader.prototype.readInt64String = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSignedVarint64String()
        );
      }),
      (jspb.BinaryReader.prototype.readUint32 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readUnsignedVarint32()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readUint32`,
        jspb.BinaryReader.prototype.readUint32,
      ),
      (jspb.BinaryReader.prototype.readUint32String = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readUnsignedVarint32String()
        );
      }),
      (jspb.BinaryReader.prototype.readUint64 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readUnsignedVarint64()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readUint64`,
        jspb.BinaryReader.prototype.readUint64,
      ),
      (jspb.BinaryReader.prototype.readUint64String = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readUnsignedVarint64String()
        );
      }),
      (jspb.BinaryReader.prototype.readSint32 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readZigzagVarint32()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readSint32`,
        jspb.BinaryReader.prototype.readSint32,
      ),
      (jspb.BinaryReader.prototype.readSint64 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readZigzagVarint64()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readSint64`,
        jspb.BinaryReader.prototype.readSint64,
      ),
      (jspb.BinaryReader.prototype.readSint64String = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readZigzagVarint64String()
        );
      }),
      (jspb.BinaryReader.prototype.readFixed32 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
          ),
          this.decoder_.readUint32()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readFixed32`,
        jspb.BinaryReader.prototype.readFixed32,
      ),
      (jspb.BinaryReader.prototype.readFixed64 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
          ),
          this.decoder_.readUint64()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readFixed64`,
        jspb.BinaryReader.prototype.readFixed64,
      ),
      (jspb.BinaryReader.prototype.readFixed64String = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
          ),
          this.decoder_.readUint64String()
        );
      }),
      (jspb.BinaryReader.prototype.readSfixed32 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
          ),
          this.decoder_.readInt32()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readSfixed32`,
        jspb.BinaryReader.prototype.readSfixed32,
      ),
      (jspb.BinaryReader.prototype.readSfixed32String = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
          ),
          this.decoder_.readInt32().toString()
        );
      }),
      (jspb.BinaryReader.prototype.readSfixed64 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
          ),
          this.decoder_.readInt64()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readSfixed64`,
        jspb.BinaryReader.prototype.readSfixed64,
      ),
      (jspb.BinaryReader.prototype.readSfixed64String = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
          ),
          this.decoder_.readInt64String()
        );
      }),
      (jspb.BinaryReader.prototype.readFloat = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32,
          ),
          this.decoder_.readFloat()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readFloat`,
        jspb.BinaryReader.prototype.readFloat,
      ),
      (jspb.BinaryReader.prototype.readDouble = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
          ),
          this.decoder_.readDouble()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readDouble`,
        jspb.BinaryReader.prototype.readDouble,
      ),
      (jspb.BinaryReader.prototype.readBool = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          !!this.decoder_.readUnsignedVarint32()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readBool`,
        jspb.BinaryReader.prototype.readBool,
      ),
      (jspb.BinaryReader.prototype.readEnum = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSignedVarint64()
        );
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readEnum`,
        jspb.BinaryReader.prototype.readEnum,
      ),
      (jspb.BinaryReader.prototype.readString = function () {
        jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
        );
        var _ = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readString(_);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readString`,
        jspb.BinaryReader.prototype.readString,
      ),
      (jspb.BinaryReader.prototype.readBytes = function () {
        jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
        );
        var _ = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readBytes(_);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readBytes`,
        jspb.BinaryReader.prototype.readBytes,
      ),
      (jspb.BinaryReader.prototype.readVarintHash64 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readVarintHash64()
        );
      }),
      (jspb.BinaryReader.prototype.readSintHash64 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readZigzagVarintHash64()
        );
      }),
      (jspb.BinaryReader.prototype.readSplitVarint64 = function (_) {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSplitVarint64(_)
        );
      }),
      (jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (_) {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSplitVarint64(function (_, _) {
            return jspb.utils.fromZigzag64(_, _, _);
          })
        );
      }),
      (jspb.BinaryReader.prototype.readFixedHash64 = function () {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
          ),
          this.decoder_.readFixedHash64()
        );
      }),
      (jspb.BinaryReader.prototype.readSplitFixed64 = function (_) {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
          ),
          this.decoder_.readSplitFixed64(_)
        );
      }),
      (jspb.BinaryReader.prototype.readPackedField_ = function (_) {
        jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
        );
        var _ = this.decoder_.readUnsignedVarint32();
        _ = this.decoder_.getCursor() + _;
        for (var _ = []; this.decoder_.getCursor() < _;)
          _.push(_.call(this.decoder_));
        return _;
      }),
      (jspb.BinaryReader.prototype.readPackedInt32 = function () {
        return this.readPackedField_(this.decoder_.readSignedVarint32);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedInt32`,
        jspb.BinaryReader.prototype.readPackedInt32,
      ),
      (jspb.BinaryReader.prototype.readPackedInt32String = function () {
        return this.readPackedField_(this.decoder_.readSignedVarint32String);
      }),
      (jspb.BinaryReader.prototype.readPackedInt64 = function () {
        return this.readPackedField_(this.decoder_.readSignedVarint64);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedInt64`,
        jspb.BinaryReader.prototype.readPackedInt64,
      ),
      (jspb.BinaryReader.prototype.readPackedInt64String = function () {
        return this.readPackedField_(this.decoder_.readSignedVarint64String);
      }),
      (jspb.BinaryReader.prototype.readPackedUint32 = function () {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedUint32`,
        jspb.BinaryReader.prototype.readPackedUint32,
      ),
      (jspb.BinaryReader.prototype.readPackedUint32String = function () {
        return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
      }),
      (jspb.BinaryReader.prototype.readPackedUint64 = function () {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedUint64`,
        jspb.BinaryReader.prototype.readPackedUint64,
      ),
      (jspb.BinaryReader.prototype.readPackedUint64String = function () {
        return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
      }),
      (jspb.BinaryReader.prototype.readPackedSint32 = function () {
        return this.readPackedField_(this.decoder_.readZigzagVarint32);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedSint32`,
        jspb.BinaryReader.prototype.readPackedSint32,
      ),
      (jspb.BinaryReader.prototype.readPackedSint64 = function () {
        return this.readPackedField_(this.decoder_.readZigzagVarint64);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedSint64`,
        jspb.BinaryReader.prototype.readPackedSint64,
      ),
      (jspb.BinaryReader.prototype.readPackedSint64String = function () {
        return this.readPackedField_(this.decoder_.readZigzagVarint64String);
      }),
      (jspb.BinaryReader.prototype.readPackedFixed32 = function () {
        return this.readPackedField_(this.decoder_.readUint32);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedFixed32`,
        jspb.BinaryReader.prototype.readPackedFixed32,
      ),
      (jspb.BinaryReader.prototype.readPackedFixed64 = function () {
        return this.readPackedField_(this.decoder_.readUint64);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedFixed64`,
        jspb.BinaryReader.prototype.readPackedFixed64,
      ),
      (jspb.BinaryReader.prototype.readPackedFixed64String = function () {
        return this.readPackedField_(this.decoder_.readUint64String);
      }),
      (jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
        return this.readPackedField_(this.decoder_.readInt32);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedSfixed32`,
        jspb.BinaryReader.prototype.readPackedSfixed32,
      ),
      (jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
        return this.readPackedField_(this.decoder_.readInt64);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedSfixed64`,
        jspb.BinaryReader.prototype.readPackedSfixed64,
      ),
      (jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
        return this.readPackedField_(this.decoder_.readInt64String);
      }),
      (jspb.BinaryReader.prototype.readPackedFloat = function () {
        return this.readPackedField_(this.decoder_.readFloat);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedFloat`,
        jspb.BinaryReader.prototype.readPackedFloat,
      ),
      (jspb.BinaryReader.prototype.readPackedDouble = function () {
        return this.readPackedField_(this.decoder_.readDouble);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedDouble`,
        jspb.BinaryReader.prototype.readPackedDouble,
      ),
      (jspb.BinaryReader.prototype.readPackedBool = function () {
        return this.readPackedField_(this.decoder_.readBool);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedBool`,
        jspb.BinaryReader.prototype.readPackedBool,
      ),
      (jspb.BinaryReader.prototype.readPackedEnum = function () {
        return this.readPackedField_(this.decoder_.readEnum);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readPackedEnum`,
        jspb.BinaryReader.prototype.readPackedEnum,
      ),
      (jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
        return this.readPackedField_(this.decoder_.readVarintHash64);
      }),
      (jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
        return this.readPackedField_(this.decoder_.readFixedHash64);
      }),
      (jspb.BinaryEncoder = function () {
        this.buffer_ = [];
      }),
      (jspb.BinaryEncoder.prototype.length = function () {
        return this.buffer_.length;
      }),
      (jspb.BinaryEncoder.prototype.end = function () {
        var _ = this.buffer_;
        return ((this.buffer_ = []), _);
      }),
      (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (_, _) {
        for (
          jspb.asserts.assert(_ == Math.floor(_)),
            jspb.asserts.assert(_ == Math.floor(_)),
            jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
            jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32);
          0 < _ || 127 < _;
        )
          (this.buffer_.push((_ & 127) | 128),
            (_ = ((_ >>> 7) | (_ << 25)) >>> 0),
            (_ >>>= 7));
        this.buffer_.push(_);
      }),
      (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (_, _) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
          jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
          this.writeUint32(_),
          this.writeUint32(_));
      }),
      (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (_) {
        for (
          jspb.asserts.assert(_ == Math.floor(_)),
            jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32);
          127 < _;
        )
          (this.buffer_.push((_ & 127) | 128), (_ >>>= 7));
        this.buffer_.push(_);
      }),
      (jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (_) {
        if (
          (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          0 <= _)
        )
          this.writeUnsignedVarint32(_);
        else {
          for (var _ = 0; 9 > _; _++)
            (this.buffer_.push((_ & 127) | 128), (_ >>= 7));
          this.buffer_.push(1);
        }
      }),
      (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_64),
          jspb.utils.splitInt64(_),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_63 &&
              _ < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitInt64(_),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeUnsignedVarint32(((_ << 1) ^ (_ >> 31)) >>> 0));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_63 &&
              _ < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitZigzag64(_),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (_) {
        this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(_));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (_) {
        var _ = this;
        (jspb.utils.splitHash64(_),
          jspb.utils.toZigzag64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
            function (_, _) {
              _.writeSplitVarint64(_ >>> 0, _ >>> 0);
            },
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeUint8 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(0 <= _ && 256 > _),
          this.buffer_.push((_ >>> 0) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeUint16 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(0 <= _ && 65536 > _),
          this.buffer_.push((_ >>> 0) & 255),
          this.buffer_.push((_ >>> 8) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeUint32 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
          this.buffer_.push((_ >>> 0) & 255),
          this.buffer_.push((_ >>> 8) & 255),
          this.buffer_.push((_ >>> 16) & 255),
          this.buffer_.push((_ >>> 24) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeUint64 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_64),
          jspb.utils.splitUint64(_),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High));
      }),
      (jspb.BinaryEncoder.prototype.writeInt8 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(-128 <= _ && 128 > _),
          this.buffer_.push((_ >>> 0) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeInt16 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(-32768 <= _ && 32768 > _),
          this.buffer_.push((_ >>> 0) & 255),
          this.buffer_.push((_ >>> 8) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeInt32 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.buffer_.push((_ >>> 0) & 255),
          this.buffer_.push((_ >>> 8) & 255),
          this.buffer_.push((_ >>> 16) & 255),
          this.buffer_.push((_ >>> 24) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeInt64 = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_63 &&
              _ < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitInt64(_),
          this.writeSplitFixed64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeInt64String = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(
            +_ >= -jspb.BinaryConstants.TWO_TO_63 &&
              +_ < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(_)),
          this.writeSplitFixed64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeFloat = function (_) {
        (jspb.asserts.assert(
          _ === 1 / 0 ||
            _ === -1 / 0 ||
            isNaN(_) ||
            (_ >= -jspb.BinaryConstants.FLOAT32_MAX &&
              _ <= jspb.BinaryConstants.FLOAT32_MAX),
        ),
          jspb.utils.splitFloat32(_),
          this.writeUint32(jspb.utils.split64Low));
      }),
      (jspb.BinaryEncoder.prototype.writeDouble = function (_) {
        (jspb.asserts.assert(
          _ === 1 / 0 ||
            _ === -1 / 0 ||
            isNaN(_) ||
            (_ >= -jspb.BinaryConstants.FLOAT64_MAX &&
              _ <= jspb.BinaryConstants.FLOAT64_MAX),
        ),
          jspb.utils.splitFloat64(_),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High));
      }),
      (jspb.BinaryEncoder.prototype.writeBool = function (_) {
        (jspb.asserts.assert(typeof _ == `boolean` || typeof _ == `number`),
          this.buffer_.push(+!!_));
      }),
      (jspb.BinaryEncoder.prototype.writeEnum = function (_) {
        (jspb.asserts.assert(_ == Math.floor(_)),
          jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeSignedVarint32(_));
      }),
      (jspb.BinaryEncoder.prototype.writeBytes = function (_) {
        this.buffer_.push.apply(this.buffer_, _);
      }),
      (jspb.BinaryEncoder.prototype.writeVarintHash64 = function (_) {
        (jspb.utils.splitHash64(_),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeFixedHash64 = function (_) {
        (jspb.utils.splitHash64(_),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High));
      }),
      (jspb.BinaryEncoder.prototype.writeString = function (_) {
        var _ = this.buffer_.length;
        jspb.asserts.assertString(_);
        for (var _ = 0; _ < _.length; _++) {
          var _ = _.charCodeAt(_);
          if (128 > _) this.buffer_.push(_);
          else if (2048 > _)
            (this.buffer_.push((_ >> 6) | 192),
              this.buffer_.push((_ & 63) | 128));
          else if (65536 > _) {
            if (55296 <= _ && 56319 >= _ && _ + 1 < _.length) {
              var _ = _.charCodeAt(_ + 1);
              56320 <= _ &&
                57343 >= _ &&
                ((_ = 1024 * (_ - 55296) + _ - 56320 + 65536),
                this.buffer_.push((_ >> 18) | 240),
                this.buffer_.push(((_ >> 12) & 63) | 128),
                this.buffer_.push(((_ >> 6) & 63) | 128),
                this.buffer_.push((_ & 63) | 128),
                _++);
            } else
              (this.buffer_.push((_ >> 12) | 224),
                this.buffer_.push(((_ >> 6) & 63) | 128),
                this.buffer_.push((_ & 63) | 128));
          }
        }
        return this.buffer_.length - _;
      }),
      (jspb.arith = {}),
      (jspb.arith.UInt64 = function (_, _) {
        ((this._ = _), (this._ = _));
      }),
      (jspb.arith.UInt64.prototype.cmp = function (_) {
        return this._ < _._ || (this._ == _._ && this._ < _._)
          ? -1
          : this._ == _._ && this._ == _._
            ? 0
            : 1;
      }),
      (jspb.arith.UInt64.prototype.rightShift = function () {
        return new jspb.arith.UInt64(
          ((this._ >>> 1) | ((this._ & 1) << 31)) >>> 0,
          (this._ >>> 1) >>> 0,
        );
      }),
      (jspb.arith.UInt64.prototype.leftShift = function () {
        return new jspb.arith.UInt64(
          (this._ << 1) >>> 0,
          ((this._ << 1) | (this._ >>> 31)) >>> 0,
        );
      }),
      (jspb.arith.UInt64.prototype.msb = function () {
        return !!(this._ & 2147483648);
      }),
      (jspb.arith.UInt64.prototype.lsb = function () {
        return !!(this._ & 1);
      }),
      (jspb.arith.UInt64.prototype.zero = function () {
        return this._ == 0 && this._ == 0;
      }),
      (jspb.arith.UInt64.prototype.add = function (_) {
        return new jspb.arith.UInt64(
          (((this._ + _._) | 0) >>> 0) >>> 0,
          ((((this._ + _._) | 0) >>> 0) + +(4294967296 <= this._ + _._)) >>> 0,
        );
      }),
      (jspb.arith.UInt64.prototype.sub = function (_) {
        return new jspb.arith.UInt64(
          (((this._ - _._) | 0) >>> 0) >>> 0,
          ((((this._ - _._) | 0) >>> 0) - (0 > this._ - _._)) >>> 0,
        );
      }),
      (jspb.arith.UInt64.mul32x32 = function (_, _) {
        var _ = _ & 65535;
        _ >>>= 16;
        var _ = _ & 65535,
          _ = _ >>> 16;
        for (
          _ = _ * _ + 65536 * ((_ * _) & 65535) + 65536 * ((_ * _) & 65535),
            _ = _ * _ + ((_ * _) >>> 16) + ((_ * _) >>> 16);
          4294967296 <= _;
        )
          ((_ -= 4294967296), (_ += 1));
        return new jspb.arith.UInt64(_ >>> 0, _ >>> 0);
      }),
      (jspb.arith.UInt64.prototype.mul = function (_) {
        var _ = jspb.arith.UInt64.mul32x32(this._, _);
        return (
          (_ = jspb.arith.UInt64.mul32x32(this._, _)),
          (_._ = _._),
          (_._ = 0),
          _.add(_)
        );
      }),
      (jspb.arith.UInt64.prototype.div = function (_) {
        if (_ == 0) return [];
        var _ = new jspb.arith.UInt64(0, 0),
          _ = new jspb.arith.UInt64(this._, this._);
        _ = new jspb.arith.UInt64(_, 0);
        for (var _ = new jspb.arith.UInt64(1, 0); !_.msb();)
          ((_ = _.leftShift()), (_ = _.leftShift()));
        for (; !_.zero();)
          (0 >= _.cmp(_) && ((_ = _.add(_)), (_ = _.sub(_))),
            (_ = _.rightShift()),
            (_ = _.rightShift()));
        return [_, _];
      }),
      (jspb.arith.UInt64.prototype.toString = function () {
        for (var _ = ``, _ = this; !_.zero();) {
          _ = _.div(10);
          var _ = _[0];
          ((_ = _[1]._ + _), (_ = _));
        }
        return (_ == `` && (_ = `0`), _);
      }),
      (jspb.arith.UInt64.fromString = function (_) {
        for (
          var _ = new jspb.arith.UInt64(0, 0),
            _ = new jspb.arith.UInt64(0, 0),
            _ = 0;
          _ < _.length;
          _++
        ) {
          if (`0` > _[_] || `9` < _[_]) return null;
          ((_._ = parseInt(_[_], 10)), (_ = _.mul(10).add(_)));
        }
        return _;
      }),
      (jspb.arith.UInt64.prototype.clone = function () {
        return new jspb.arith.UInt64(this._, this._);
      }),
      (jspb.arith.Int64 = function (_, _) {
        ((this._ = _), (this._ = _));
      }),
      (jspb.arith.Int64.prototype.add = function (_) {
        return new jspb.arith.Int64(
          (((this._ + _._) | 0) >>> 0) >>> 0,
          ((((this._ + _._) | 0) >>> 0) + +(4294967296 <= this._ + _._)) >>> 0,
        );
      }),
      (jspb.arith.Int64.prototype.sub = function (_) {
        return new jspb.arith.Int64(
          (((this._ - _._) | 0) >>> 0) >>> 0,
          ((((this._ - _._) | 0) >>> 0) - (0 > this._ - _._)) >>> 0,
        );
      }),
      (jspb.arith.Int64.prototype.clone = function () {
        return new jspb.arith.Int64(this._, this._);
      }),
      (jspb.arith.Int64.prototype.toString = function () {
        var _ = !!(this._ & 2147483648),
          _ = new jspb.arith.UInt64(this._, this._);
        return (
          _ && (_ = new jspb.arith.UInt64(0, 0).sub(_)),
          (_ ? `-` : ``) + _.toString()
        );
      }),
      (jspb.arith.Int64.fromString = function (_) {
        var _ = 0 < _.length && _[0] == `-`;
        return (
          _ && (_ = _.substring(1)),
          (_ = jspb.arith.UInt64.fromString(_)),
          _ === null
            ? null
            : (_ && (_ = new jspb.arith.UInt64(0, 0).sub(_)),
              new jspb.arith.Int64(_._, _._))
        );
      }),
      (jspb.BinaryWriter = function () {
        ((this.blocks_ = []),
          (this.totalLength_ = 0),
          (this.encoder_ = new jspb.BinaryEncoder()),
          (this.bookmarks_ = []));
      }),
      (jspb.BinaryWriter.prototype.appendUint8Array_ = function (_) {
        var _ = this.encoder_.end();
        (this.blocks_.push(_),
          this.blocks_.push(_),
          (this.totalLength_ += _.length + _.length));
      }),
      (jspb.BinaryWriter.prototype.beginDelimited_ = function (_) {
        return (
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          (_ = this.encoder_.end()),
          this.blocks_.push(_),
          (this.totalLength_ += _.length),
          _.push(this.totalLength_),
          _
        );
      }),
      (jspb.BinaryWriter.prototype.endDelimited_ = function (_) {
        var _ = _.pop();
        for (
          _ = this.totalLength_ + this.encoder_.length() - _,
            jspb.asserts.assert(0 <= _);
          127 < _;
        )
          (_.push((_ & 127) | 128), (_ >>>= 7), this.totalLength_++);
        (_.push(_), this.totalLength_++);
      }),
      (jspb.BinaryWriter.prototype.writeSerializedMessage = function (_, _, _) {
        this.appendUint8Array_(_.subarray(_, _));
      }),
      (jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (
        _,
        _,
        _,
      ) {
        _ != null &&
          _ != null &&
          _ != null &&
          this.writeSerializedMessage(_, _, _);
      }),
      (jspb.BinaryWriter.prototype.reset = function () {
        ((this.blocks_ = []),
          this.encoder_.end(),
          (this.totalLength_ = 0),
          (this.bookmarks_ = []));
      }),
      (jspb.BinaryWriter.prototype.getResultBuffer = function () {
        jspb.asserts.assert(this.bookmarks_.length == 0);
        for (
          var _ = new Uint8Array(this.totalLength_ + this.encoder_.length()),
            _ = this.blocks_,
            _ = _.length,
            _ = 0,
            _ = 0;
          _ < _;
          _++
        ) {
          var _ = _[_];
          (_.set(_, _), (_ += _.length));
        }
        return (
          (_ = this.encoder_.end()),
          _.set(_, _),
          (_ += _.length),
          jspb.asserts.assert(_ == _.length),
          (this.blocks_ = [_]),
          _
        );
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `getResultBuffer`,
        jspb.BinaryWriter.prototype.getResultBuffer,
      ),
      (jspb.BinaryWriter.prototype.getResultBase64String = function (_) {
        return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), _);
      }),
      (jspb.BinaryWriter.prototype.beginSubMessage = function (_) {
        this.bookmarks_.push(this.beginDelimited_(_));
      }),
      (jspb.BinaryWriter.prototype.endSubMessage = function () {
        (jspb.asserts.assert(0 <= this.bookmarks_.length),
          this.endDelimited_(this.bookmarks_.pop()));
      }),
      (jspb.BinaryWriter.prototype.writeFieldHeader_ = function (_, _) {
        (jspb.asserts.assert(1 <= _ && _ == Math.floor(_)),
          this.encoder_.writeUnsignedVarint32(8 * _ + _));
      }),
      (jspb.BinaryWriter.prototype.writeAny = function (_, _, _) {
        var _ = jspb.BinaryConstants.FieldType;
        switch (_) {
          case _.DOUBLE:
            this.writeDouble(_, _);
            break;
          case _.FLOAT:
            this.writeFloat(_, _);
            break;
          case _.INT64:
            this.writeInt64(_, _);
            break;
          case _.UINT64:
            this.writeUint64(_, _);
            break;
          case _.INT32:
            this.writeInt32(_, _);
            break;
          case _.FIXED64:
            this.writeFixed64(_, _);
            break;
          case _.FIXED32:
            this.writeFixed32(_, _);
            break;
          case _.BOOL:
            this.writeBool(_, _);
            break;
          case _.STRING:
            this.writeString(_, _);
            break;
          case _.GROUP:
            jspb.asserts.fail(`Group field type not supported in writeAny()`);
            break;
          case _.MESSAGE:
            jspb.asserts.fail(`Message field type not supported in writeAny()`);
            break;
          case _.BYTES:
            this.writeBytes(_, _);
            break;
          case _.UINT32:
            this.writeUint32(_, _);
            break;
          case _.ENUM:
            this.writeEnum(_, _);
            break;
          case _.SFIXED32:
            this.writeSfixed32(_, _);
            break;
          case _.SFIXED64:
            this.writeSfixed64(_, _);
            break;
          case _.SINT32:
            this.writeSint32(_, _);
            break;
          case _.SINT64:
            this.writeSint64(_, _);
            break;
          case _.FHASH64:
            this.writeFixedHash64(_, _);
            break;
          case _.VHASH64:
            this.writeVarintHash64(_, _);
            break;
          default:
            jspb.asserts.fail(`Invalid field type in writeAny()`);
        }
      }),
      (jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeUnsignedVarint32(_));
      }),
      (jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSignedVarint32(_));
      }),
      (jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeUnsignedVarint64(_));
      }),
      (jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSignedVarint64(_));
      }),
      (jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeZigzagVarint32(_));
      }),
      (jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeZigzagVarint64(_));
      }),
      (jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (
        _,
        _,
      ) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeZigzagVarint64String(_));
      }),
      (jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeZigzagVarintHash64(_));
      }),
      (jspb.BinaryWriter.prototype.writeInt32 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeSignedVarint32_(_, _));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeInt32`,
        jspb.BinaryWriter.prototype.writeInt32,
      ),
      (jspb.BinaryWriter.prototype.writeInt32String = function (_, _) {
        _ != null &&
          ((_ = parseInt(_, 10)),
          jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeSignedVarint32_(_, _));
      }),
      (jspb.BinaryWriter.prototype.writeInt64 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_63 &&
              _ < jspb.BinaryConstants.TWO_TO_63,
          ),
          this.writeSignedVarint64_(_, _));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeInt64`,
        jspb.BinaryWriter.prototype.writeInt64,
      ),
      (jspb.BinaryWriter.prototype.writeInt64String = function (_, _) {
        _ != null &&
          ((_ = jspb.arith.Int64.fromString(_)),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSplitVarint64(_._, _._));
      }),
      (jspb.BinaryWriter.prototype.writeUint32 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
          this.writeUnsignedVarint32_(_, _));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeUint32`,
        jspb.BinaryWriter.prototype.writeUint32,
      ),
      (jspb.BinaryWriter.prototype.writeUint32String = function (_, _) {
        _ != null &&
          ((_ = parseInt(_, 10)),
          jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
          this.writeUnsignedVarint32_(_, _));
      }),
      (jspb.BinaryWriter.prototype.writeUint64 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_64),
          this.writeUnsignedVarint64_(_, _));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeUint64`,
        jspb.BinaryWriter.prototype.writeUint64,
      ),
      (jspb.BinaryWriter.prototype.writeUint64String = function (_, _) {
        _ != null &&
          ((_ = jspb.arith.UInt64.fromString(_)),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSplitVarint64(_._, _._));
      }),
      (jspb.BinaryWriter.prototype.writeSint32 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeZigzagVarint32_(_, _));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeSint32`,
        jspb.BinaryWriter.prototype.writeSint32,
      ),
      (jspb.BinaryWriter.prototype.writeSint64 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_63 &&
              _ < jspb.BinaryConstants.TWO_TO_63,
          ),
          this.writeZigzagVarint64_(_, _));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeSint64`,
        jspb.BinaryWriter.prototype.writeSint64,
      ),
      (jspb.BinaryWriter.prototype.writeSintHash64 = function (_, _) {
        _ != null && this.writeZigzagVarintHash64_(_, _);
      }),
      (jspb.BinaryWriter.prototype.writeSint64String = function (_, _) {
        _ != null && this.writeZigzagVarint64String_(_, _);
      }),
      (jspb.BinaryWriter.prototype.writeFixed32 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_32),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED32),
          this.encoder_.writeUint32(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeFixed32`,
        jspb.BinaryWriter.prototype.writeFixed32,
      ),
      (jspb.BinaryWriter.prototype.writeFixed64 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(0 <= _ && _ < jspb.BinaryConstants.TWO_TO_64),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeUint64(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeFixed64`,
        jspb.BinaryWriter.prototype.writeFixed64,
      ),
      (jspb.BinaryWriter.prototype.writeFixed64String = function (_, _) {
        _ != null &&
          ((_ = jspb.arith.UInt64.fromString(_)),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeSplitFixed64(_._, _._));
      }),
      (jspb.BinaryWriter.prototype.writeSfixed32 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED32),
          this.encoder_.writeInt32(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeSfixed32`,
        jspb.BinaryWriter.prototype.writeSfixed32,
      ),
      (jspb.BinaryWriter.prototype.writeSfixed64 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_63 &&
              _ < jspb.BinaryConstants.TWO_TO_63,
          ),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeInt64(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeSfixed64`,
        jspb.BinaryWriter.prototype.writeSfixed64,
      ),
      (jspb.BinaryWriter.prototype.writeSfixed64String = function (_, _) {
        _ != null &&
          ((_ = jspb.arith.Int64.fromString(_)),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeSplitFixed64(_._, _._));
      }),
      (jspb.BinaryWriter.prototype.writeFloat = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED32),
          this.encoder_.writeFloat(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeFloat`,
        jspb.BinaryWriter.prototype.writeFloat,
      ),
      (jspb.BinaryWriter.prototype.writeDouble = function (_, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeDouble(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeDouble`,
        jspb.BinaryWriter.prototype.writeDouble,
      ),
      (jspb.BinaryWriter.prototype.writeBool = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(typeof _ == `boolean` || typeof _ == `number`),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeBool(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeBool`,
        jspb.BinaryWriter.prototype.writeBool,
      ),
      (jspb.BinaryWriter.prototype.writeEnum = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(
            _ >= -jspb.BinaryConstants.TWO_TO_31 &&
              _ < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSignedVarint32(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeEnum`,
        jspb.BinaryWriter.prototype.writeEnum,
      ),
      (jspb.BinaryWriter.prototype.writeString = function (_, _) {
        _ != null &&
          ((_ = this.beginDelimited_(_)),
          this.encoder_.writeString(_),
          this.endDelimited_(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeString`,
        jspb.BinaryWriter.prototype.writeString,
      ),
      (jspb.BinaryWriter.prototype.writeBytes = function (_, _) {
        _ != null &&
          ((_ = jspb.utils.byteSourceToUint8Array(_)),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(_.length),
          this.appendUint8Array_(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeBytes`,
        jspb.BinaryWriter.prototype.writeBytes,
      ),
      (jspb.BinaryWriter.prototype.writeMessage = function (_, _, _) {
        _ != null &&
          ((_ = this.beginDelimited_(_)), _(_, this), this.endDelimited_(_));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeMessage`,
        jspb.BinaryWriter.prototype.writeMessage,
      ),
      (jspb.BinaryWriter.prototype.writeMessageSet = function (_, _, _) {
        _ != null &&
          (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP),
          this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSignedVarint32(_),
          (_ = this.beginDelimited_(3)),
          _(_, this),
          this.endDelimited_(_),
          this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
      }),
      (jspb.BinaryWriter.prototype.writeGroup = function (_, _, _) {
        _ != null &&
          (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.START_GROUP),
          _(_, this),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.END_GROUP));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeGroup`,
        jspb.BinaryWriter.prototype.writeGroup,
      ),
      (jspb.BinaryWriter.prototype.writeFixedHash64 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(_.length == 8),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeFixedHash64(_));
      }),
      (jspb.BinaryWriter.prototype.writeVarintHash64 = function (_, _) {
        _ != null &&
          (jspb.asserts.assert(_.length == 8),
          this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeVarintHash64(_));
      }),
      (jspb.BinaryWriter.prototype.writeSplitFixed64 = function (_, _, _) {
        (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeSplitFixed64(_, _));
      }),
      (jspb.BinaryWriter.prototype.writeSplitVarint64 = function (_, _, _) {
        (this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSplitVarint64(_, _));
      }),
      (jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (
        _,
        _,
        _,
      ) {
        this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.VARINT);
        var _ = this.encoder_;
        jspb.utils.toZigzag64(_, _, function (_, _) {
          _.writeSplitVarint64(_ >>> 0, _ >>> 0);
        });
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeSignedVarint32_(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedInt32`,
        jspb.BinaryWriter.prototype.writeRepeatedInt32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeInt32String(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeSignedVarint64_(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedInt64`,
        jspb.BinaryWriter.prototype.writeRepeatedInt64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (
        _,
        _,
        _,
        _,
      ) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++)
            this.writeSplitFixed64(_, _(_[_]), _(_[_]));
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (
        _,
        _,
        _,
        _,
      ) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++)
            this.writeSplitVarint64(_, _(_[_]), _(_[_]));
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function (
        _,
        _,
        _,
        _,
      ) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++)
            this.writeSplitZigzagVarint64(_, _(_[_]), _(_[_]));
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeInt64String(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++)
            this.writeUnsignedVarint32_(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedUint32`,
        jspb.BinaryWriter.prototype.writeRepeatedUint32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeUint32String(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++)
            this.writeUnsignedVarint64_(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedUint64`,
        jspb.BinaryWriter.prototype.writeRepeatedUint64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeUint64String(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeZigzagVarint32_(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedSint32`,
        jspb.BinaryWriter.prototype.writeRepeatedSint32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeZigzagVarint64_(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedSint64`,
        jspb.BinaryWriter.prototype.writeRepeatedSint64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++)
            this.writeZigzagVarint64String_(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++)
            this.writeZigzagVarintHash64_(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeFixed32(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedFixed32`,
        jspb.BinaryWriter.prototype.writeRepeatedFixed32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeFixed64(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedFixed64`,
        jspb.BinaryWriter.prototype.writeRepeatedFixed64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (
        _,
        _,
      ) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeFixed64String(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedFixed64String`,
        jspb.BinaryWriter.prototype.writeRepeatedFixed64String,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeSfixed32(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedSfixed32`,
        jspb.BinaryWriter.prototype.writeRepeatedSfixed32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeSfixed64(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedSfixed64`,
        jspb.BinaryWriter.prototype.writeRepeatedSfixed64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (
        _,
        _,
      ) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeSfixed64String(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedFloat = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeFloat(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedFloat`,
        jspb.BinaryWriter.prototype.writeRepeatedFloat,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedDouble = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeDouble(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedDouble`,
        jspb.BinaryWriter.prototype.writeRepeatedDouble,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedBool = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeBool(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedBool`,
        jspb.BinaryWriter.prototype.writeRepeatedBool,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedEnum = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeEnum(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedEnum`,
        jspb.BinaryWriter.prototype.writeRepeatedEnum,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedString = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeString(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedString`,
        jspb.BinaryWriter.prototype.writeRepeatedString,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedBytes = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeBytes(_, _[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedBytes`,
        jspb.BinaryWriter.prototype.writeRepeatedBytes,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedMessage = function (_, _, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) {
            var _ = this.beginDelimited_(_);
            (_(_[_], this), this.endDelimited_(_));
          }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedMessage`,
        jspb.BinaryWriter.prototype.writeRepeatedMessage,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedGroup = function (_, _, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++)
            (this.writeFieldHeader_(
              _,
              jspb.BinaryConstants.WireType.START_GROUP,
            ),
              _(_[_], this),
              this.writeFieldHeader_(
                _,
                jspb.BinaryConstants.WireType.END_GROUP,
              ));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedGroup`,
        jspb.BinaryWriter.prototype.writeRepeatedGroup,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeFixedHash64(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (_, _) {
        if (_ != null)
          for (var _ = 0; _ < _.length; _++) this.writeVarintHash64(_, _[_]);
      }),
      (jspb.BinaryWriter.prototype.writePackedInt32 = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeSignedVarint32(_[_]);
          this.endDelimited_(_);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedInt32`,
        jspb.BinaryWriter.prototype.writePackedInt32,
      ),
      (jspb.BinaryWriter.prototype.writePackedInt32String = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeSignedVarint32(parseInt(_[_], 10));
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedInt64 = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeSignedVarint64(_[_]);
          this.endDelimited_(_);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedInt64`,
        jspb.BinaryWriter.prototype.writePackedInt64,
      ),
      (jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (
        _,
        _,
        _,
        _,
      ) {
        if (_ != null) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeSplitFixed64(_(_[_]), _(_[_]));
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (
        _,
        _,
        _,
        _,
      ) {
        if (_ != null) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeSplitVarint64(_(_[_]), _(_[_]));
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (
        _,
        _,
        _,
        _,
      ) {
        if (_ != null) {
          _ = this.beginDelimited_(_);
          for (var _ = this.encoder_, _ = 0; _ < _.length; _++)
            jspb.utils.toZigzag64(_(_[_]), _(_[_]), function (_, _) {
              _.writeSplitVarint64(_ >>> 0, _ >>> 0);
            });
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedInt64String = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++) {
            var _ = jspb.arith.Int64.fromString(_[_]);
            this.encoder_.writeSplitVarint64(_._, _._);
          }
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedUint32 = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeUnsignedVarint32(_[_]);
          this.endDelimited_(_);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedUint32`,
        jspb.BinaryWriter.prototype.writePackedUint32,
      ),
      (jspb.BinaryWriter.prototype.writePackedUint32String = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeUnsignedVarint32(parseInt(_[_], 10));
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedUint64 = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeUnsignedVarint64(_[_]);
          this.endDelimited_(_);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedUint64`,
        jspb.BinaryWriter.prototype.writePackedUint64,
      ),
      (jspb.BinaryWriter.prototype.writePackedUint64String = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++) {
            var _ = jspb.arith.UInt64.fromString(_[_]);
            this.encoder_.writeSplitVarint64(_._, _._);
          }
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedSint32 = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeZigzagVarint32(_[_]);
          this.endDelimited_(_);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedSint32`,
        jspb.BinaryWriter.prototype.writePackedSint32,
      ),
      (jspb.BinaryWriter.prototype.writePackedSint64 = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeZigzagVarint64(_[_]);
          this.endDelimited_(_);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedSint64`,
        jspb.BinaryWriter.prototype.writePackedSint64,
      ),
      (jspb.BinaryWriter.prototype.writePackedSint64String = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeZigzagVarintHash64(
              jspb.utils.decimalStringToHash64(_[_]),
            );
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedSintHash64 = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeZigzagVarintHash64(_[_]);
          this.endDelimited_(_);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedFixed32 = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * _.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeUint32(_[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedFixed32`,
        jspb.BinaryWriter.prototype.writePackedFixed32,
      ),
      (jspb.BinaryWriter.prototype.writePackedFixed64 = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * _.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeUint64(_[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedFixed64`,
        jspb.BinaryWriter.prototype.writePackedFixed64,
      ),
      (jspb.BinaryWriter.prototype.writePackedFixed64String = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * _.length),
              _ = 0;
            _ < _.length;
            _++
          ) {
            var _ = jspb.arith.UInt64.fromString(_[_]);
            this.encoder_.writeSplitFixed64(_._, _._);
          }
      }),
      (jspb.BinaryWriter.prototype.writePackedSfixed32 = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * _.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeInt32(_[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedSfixed32`,
        jspb.BinaryWriter.prototype.writePackedSfixed32,
      ),
      (jspb.BinaryWriter.prototype.writePackedSfixed64 = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * _.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeInt64(_[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedSfixed64`,
        jspb.BinaryWriter.prototype.writePackedSfixed64,
      ),
      (jspb.BinaryWriter.prototype.writePackedSfixed64String = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * _.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeInt64String(_[_]);
      }),
      (jspb.BinaryWriter.prototype.writePackedFloat = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * _.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeFloat(_[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedFloat`,
        jspb.BinaryWriter.prototype.writePackedFloat,
      ),
      (jspb.BinaryWriter.prototype.writePackedDouble = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * _.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeDouble(_[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedDouble`,
        jspb.BinaryWriter.prototype.writePackedDouble,
      ),
      (jspb.BinaryWriter.prototype.writePackedBool = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(_.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeBool(_[_]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedBool`,
        jspb.BinaryWriter.prototype.writePackedBool,
      ),
      (jspb.BinaryWriter.prototype.writePackedEnum = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++) this.encoder_.writeEnum(_[_]);
          this.endDelimited_(_);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedEnum`,
        jspb.BinaryWriter.prototype.writePackedEnum,
      ),
      (jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (_, _) {
        if (_ != null && _.length)
          for (
            this.writeFieldHeader_(_, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * _.length),
              _ = 0;
            _ < _.length;
            _++
          )
            this.encoder_.writeFixedHash64(_[_]);
      }),
      (jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (_, _) {
        if (_ != null && _.length) {
          _ = this.beginDelimited_(_);
          for (var _ = 0; _ < _.length; _++)
            this.encoder_.writeVarintHash64(_[_]);
          this.endDelimited_(_);
        }
      }),
      (jspb.Map = function (_, _) {
        ((this.arr_ = _),
          (this.valueCtor_ = _),
          (this.map_ = {}),
          (this.arrClean = !0),
          0 < this.arr_.length && this.loadFromArray_());
      }),
      goog.exportSymbol(`jspb.Map`, jspb.Map),
      (jspb.Map.prototype.loadFromArray_ = function () {
        for (var _ = 0; _ < this.arr_.length; _++) {
          var _ = this.arr_[_],
            _ = _[0];
          this.map_[_.toString()] = new jspb.Map.Entry_(_, _[1]);
        }
        this.arrClean = !0;
      }),
      (jspb.Map.prototype.toArray = function () {
        if (this.arrClean) {
          if (this.valueCtor_) {
            var _ = this.map_,
              _;
            for (_ in _)
              if (Object.prototype.hasOwnProperty.call(_, _)) {
                var _ = _[_].valueWrapper;
                _ && _.toArray();
              }
          }
        } else {
          for (
            this.arr_.length = 0, _ = this.stringKeys_(), _.sort(), _ = 0;
            _ < _.length;
            _++
          ) {
            var _ = this.map_[_[_]];
            ((_ = _.valueWrapper) && _.toArray(),
              this.arr_.push([_.key, _.value]));
          }
          this.arrClean = !0;
        }
        return this.arr_;
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `toArray`,
        jspb.Map.prototype.toArray,
      ),
      (jspb.Map.prototype.toObject = function (_, _) {
        for (var _ = this.toArray(), _ = [], _ = 0; _ < _.length; _++) {
          var _ = this.map_[_[_][0].toString()];
          this.wrapEntry_(_);
          var _ = _.valueWrapper;
          _
            ? (jspb.asserts.assert(_), _.push([_.key, _(_, _)]))
            : _.push([_.key, _.value]);
        }
        return _;
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `toObject`,
        jspb.Map.prototype.toObject,
      ),
      (jspb.Map.fromObject = function (_, _, _) {
        _ = new jspb.Map([], _);
        for (var _ = 0; _ < _.length; _++) {
          var _ = _[_][0],
            _ = _(_[_][1]);
          _.set(_, _);
        }
        return _;
      }),
      goog.exportProperty(jspb.Map, `fromObject`, jspb.Map.fromObject),
      (jspb.Map.ArrayIteratorIterable_ = function (_) {
        ((this.idx_ = 0), (this.arr_ = _));
      }),
      (jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
        return this.idx_ < this.arr_.length
          ? {
              done: !1,
              value: this.arr_[this.idx_++],
            }
          : {
              done: !0,
              value: void 0,
            };
      }),
      typeof Symbol < `u` &&
        (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] =
          function () {
            return this;
          }),
      (jspb.Map.prototype.getLength = function () {
        return this.stringKeys_().length;
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `getLength`,
        jspb.Map.prototype.getLength,
      ),
      (jspb.Map.prototype.clear = function () {
        ((this.map_ = {}), (this.arrClean = !1));
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `clear`,
        jspb.Map.prototype.clear,
      ),
      (jspb.Map.prototype.del = function (_) {
        _ = _.toString();
        var _ = this.map_.hasOwnProperty(_);
        return (delete this.map_[_], (this.arrClean = !1), _);
      }),
      goog.exportProperty(jspb.Map.prototype, `del`, jspb.Map.prototype.del),
      (jspb.Map.prototype.getEntryList = function () {
        var _ = [],
          _ = this.stringKeys_();
        _.sort();
        for (var _ = 0; _ < _.length; _++) {
          var _ = this.map_[_[_]];
          _.push([_.key, _.value]);
        }
        return _;
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `getEntryList`,
        jspb.Map.prototype.getEntryList,
      ),
      (jspb.Map.prototype.entries = function () {
        var _ = [],
          _ = this.stringKeys_();
        _.sort();
        for (var _ = 0; _ < _.length; _++) {
          var _ = this.map_[_[_]];
          _.push([_.key, this.wrapEntry_(_)]);
        }
        return new jspb.Map.ArrayIteratorIterable_(_);
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `entries`,
        jspb.Map.prototype.entries,
      ),
      (jspb.Map.prototype.keys = function () {
        var _ = [],
          _ = this.stringKeys_();
        _.sort();
        for (var _ = 0; _ < _.length; _++) _.push(this.map_[_[_]].key);
        return new jspb.Map.ArrayIteratorIterable_(_);
      }),
      goog.exportProperty(jspb.Map.prototype, `keys`, jspb.Map.prototype.keys),
      (jspb.Map.prototype.values = function () {
        var _ = [],
          _ = this.stringKeys_();
        _.sort();
        for (var _ = 0; _ < _.length; _++)
          _.push(this.wrapEntry_(this.map_[_[_]]));
        return new jspb.Map.ArrayIteratorIterable_(_);
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `values`,
        jspb.Map.prototype.values,
      ),
      (jspb.Map.prototype.forEach = function (_, _) {
        var _ = this.stringKeys_();
        _.sort();
        for (var _ = 0; _ < _.length; _++) {
          var _ = this.map_[_[_]];
          _.call(_, this.wrapEntry_(_), _.key, this);
        }
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `forEach`,
        jspb.Map.prototype.forEach,
      ),
      (jspb.Map.prototype.set = function (_, _) {
        var _ = new jspb.Map.Entry_(_);
        return (
          this.valueCtor_
            ? ((_.valueWrapper = _), (_.value = _.toArray()))
            : (_.value = _),
          (this.map_[_.toString()] = _),
          (this.arrClean = !1),
          this
        );
      }),
      goog.exportProperty(jspb.Map.prototype, `set`, jspb.Map.prototype.set),
      (jspb.Map.prototype.wrapEntry_ = function (_) {
        return this.valueCtor_
          ? ((_.valueWrapper ||= new this.valueCtor_(_.value)), _.valueWrapper)
          : _.value;
      }),
      (jspb.Map.prototype.get = function (_) {
        if ((_ = this.map_[_.toString()])) return this.wrapEntry_(_);
      }),
      goog.exportProperty(jspb.Map.prototype, `get`, jspb.Map.prototype.get),
      (jspb.Map.prototype.has = function (_) {
        return _.toString() in this.map_;
      }),
      goog.exportProperty(jspb.Map.prototype, `has`, jspb.Map.prototype.has),
      (jspb.Map.prototype.serializeBinary = function (_, _, _, _, _) {
        var _ = this.stringKeys_();
        _.sort();
        for (var _ = 0; _ < _.length; _++) {
          var _ = this.map_[_[_]];
          (_.beginSubMessage(_),
            _.call(_, 1, _.key),
            this.valueCtor_
              ? _.call(_, 2, this.wrapEntry_(_), _)
              : _.call(_, 2, _.value),
            _.endSubMessage());
        }
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `serializeBinary`,
        jspb.Map.prototype.serializeBinary,
      ),
      (jspb.Map.deserializeBinary = function (_, _, _, _, _, _, _) {
        for (; _.nextField() && !_.isEndGroup();) {
          var _ = _.getFieldNumber();
          _ == 1
            ? (_ = _.call(_))
            : _ == 2 &&
              (_.valueCtor_
                ? (jspb.asserts.assert(_),
                  (_ ||= new _.valueCtor_()),
                  _.call(_, _, _))
                : (_ = _.call(_)));
        }
        (jspb.asserts.assert(_ != null),
          jspb.asserts.assert(_ != null),
          _.set(_, _));
      }),
      goog.exportProperty(
        jspb.Map,
        `deserializeBinary`,
        jspb.Map.deserializeBinary,
      ),
      (jspb.Map.prototype.stringKeys_ = function () {
        var _ = this.map_,
          _ = [],
          _;
        for (_ in _) Object.prototype.hasOwnProperty.call(_, _) && _.push(_);
        return _;
      }),
      (jspb.Map.Entry_ = function (_, _) {
        ((this.key = _), (this.value = _), (this.valueWrapper = void 0));
      }),
      (jspb.ExtensionFieldInfo = function (_, _, _, _, _) {
        ((this.fieldIndex = _),
          (this.fieldName = _),
          (this.ctor = _),
          (this.toObjectFn = _),
          (this.isRepeated = _));
      }),
      goog.exportSymbol(`jspb.ExtensionFieldInfo`, jspb.ExtensionFieldInfo),
      (jspb.ExtensionFieldBinaryInfo = function (_, _, _, _, _, _) {
        ((this.fieldInfo = _),
          (this.binaryReaderFn = _),
          (this.binaryWriterFn = _),
          (this.binaryMessageSerializeFn = _),
          (this.binaryMessageDeserializeFn = _),
          (this.isPacked = _));
      }),
      goog.exportSymbol(
        `jspb.ExtensionFieldBinaryInfo`,
        jspb.ExtensionFieldBinaryInfo,
      ),
      (jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
        return !!this.ctor;
      }),
      goog.exportProperty(
        jspb.ExtensionFieldInfo.prototype,
        `isMessageType`,
        jspb.ExtensionFieldInfo.prototype.isMessageType,
      ),
      (jspb.Message = function () {}),
      goog.exportSymbol(`jspb.Message`, jspb.Message),
      (jspb.Message.GENERATE_TO_OBJECT = !0),
      goog.exportProperty(
        jspb.Message,
        `GENERATE_TO_OBJECT`,
        jspb.Message.GENERATE_TO_OBJECT,
      ),
      (jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE),
      goog.exportProperty(
        jspb.Message,
        `GENERATE_FROM_OBJECT`,
        jspb.Message.GENERATE_FROM_OBJECT,
      ),
      (jspb.Message.GENERATE_TO_STRING = !0),
      (jspb.Message.ASSUME_LOCAL_ARRAYS = !1),
      (jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0),
      (jspb.Message.SUPPORTS_UINT8ARRAY_ = typeof Uint8Array == `function`),
      (jspb.Message.prototype.getJsPbMessageId = function () {
        return this.messageId_;
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `getJsPbMessageId`,
        jspb.Message.prototype.getJsPbMessageId,
      ),
      (jspb.Message.getIndex_ = function (_, _) {
        return _ + _.arrayIndexOffset_;
      }),
      (jspb.Message.hiddenES6Property_ = function () {}),
      (jspb.Message.getFieldNumber_ = function (_, _) {
        return _ - _.arrayIndexOffset_;
      }),
      (jspb.Message.initialize = function (_, _, _, _, _, _) {
        if (
          ((_.wrappers_ = null),
          (_ ||= _ ? [_] : []),
          (_.messageId_ = _ ? String(_) : void 0),
          (_.arrayIndexOffset_ = _ === 0 ? -1 : 0),
          (_.array = _),
          jspb.Message.initPivotAndExtensionObject_(_, _),
          (_.convertedPrimitiveFields_ = {}),
          jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS ||
            (_.repeatedFields = _),
          _)
        )
          for (_ = 0; _ < _.length; _++)
            ((_ = _[_]),
              _ < _.pivot_
                ? ((_ = jspb.Message.getIndex_(_, _)),
                  (_.array[_] =
                    _.array[_] || jspb.Message.EMPTY_LIST_SENTINEL_))
                : (jspb.Message.maybeInitEmptyExtensionObject_(_),
                  (_.extensionObject_[_] =
                    _.extensionObject_[_] ||
                    jspb.Message.EMPTY_LIST_SENTINEL_)));
        if (_ && _.length)
          for (_ = 0; _ < _.length; _++) jspb.Message.computeOneofCase(_, _[_]);
      }),
      goog.exportProperty(jspb.Message, `initialize`, jspb.Message.initialize),
      (jspb.Message.EMPTY_LIST_SENTINEL_ =
        goog.DEBUG && Object.freeze ? Object.freeze([]) : []),
      (jspb.Message.isArray_ = function (_) {
        return jspb.Message.ASSUME_LOCAL_ARRAYS
          ? _ instanceof Array
          : Array.isArray(_);
      }),
      (jspb.Message.isExtensionObject_ = function (_) {
        return (
          typeof _ == `object` &&
          !!_ &&
          !jspb.Message.isArray_(_) &&
          !(jspb.Message.SUPPORTS_UINT8ARRAY_ && _ instanceof Uint8Array)
        );
      }),
      (jspb.Message.initPivotAndExtensionObject_ = function (_, _) {
        var _ = _.array.length,
          _ = -1;
        _ && ((_ = _ - 1), (_ = _.array[_]), jspb.Message.isExtensionObject_(_))
          ? ((_.pivot_ = jspb.Message.getFieldNumber_(_, _)),
            (_.extensionObject_ = _))
          : -1 < _
            ? ((_.pivot_ = Math.max(_, jspb.Message.getFieldNumber_(_, _ + 1))),
              (_.extensionObject_ = null))
            : (_.pivot_ = Number.MAX_VALUE);
      }),
      (jspb.Message.maybeInitEmptyExtensionObject_ = function (_) {
        var _ = jspb.Message.getIndex_(_, _.pivot_);
        _.array[_] || (_.extensionObject_ = _.array[_] = {});
      }),
      (jspb.Message.toObjectList = function (_, _, _) {
        for (var _ = [], _ = 0; _ < _.length; _++) _[_] = _.call(_[_], _, _[_]);
        return _;
      }),
      goog.exportProperty(
        jspb.Message,
        `toObjectList`,
        jspb.Message.toObjectList,
      ),
      (jspb.Message.toObjectExtension = function (_, _, _, _, _) {
        for (var _ in _) {
          var _ = _[_],
            _ = _.call(_, _);
          if (_ != null) {
            for (var _ in _.fieldName) if (_.fieldName.hasOwnProperty(_)) break;
            _[_] = _.toObjectFn
              ? _.isRepeated
                ? jspb.Message.toObjectList(_, _.toObjectFn, _)
                : _.toObjectFn(_, _)
              : _;
          }
        }
      }),
      goog.exportProperty(
        jspb.Message,
        `toObjectExtension`,
        jspb.Message.toObjectExtension,
      ),
      (jspb.Message.serializeBinaryExtensions = function (_, _, _, _) {
        for (var _ in _) {
          var _ = _[_],
            _ = _.fieldInfo;
          if (!_.binaryWriterFn)
            throw Error(
              `Message extension present that was generated without binary serialization support`,
            );
          var _ = _.call(_, _);
          if (_ != null) {
            if (_.isMessageType()) {
              if (_.binaryMessageSerializeFn)
                _.binaryWriterFn.call(
                  _,
                  _.fieldIndex,
                  _,
                  _.binaryMessageSerializeFn,
                );
              else
                throw Error(
                  `Message extension present holding submessage without binary support enabled, and message is being serialized to binary format`,
                );
            } else _.binaryWriterFn.call(_, _.fieldIndex, _);
          }
        }
      }),
      goog.exportProperty(
        jspb.Message,
        `serializeBinaryExtensions`,
        jspb.Message.serializeBinaryExtensions,
      ),
      (jspb.Message.readBinaryExtension = function (_, _, _, _, _) {
        var _ = _[_.getFieldNumber()];
        if (_) {
          if (((_ = _.fieldInfo), !_.binaryReaderFn))
            throw Error(
              `Deserializing extension whose generated code does not support binary format`,
            );
          if (_.isMessageType()) {
            var _ = new _.ctor();
            _.binaryReaderFn.call(_, _, _.binaryMessageDeserializeFn);
          } else _ = _.binaryReaderFn.call(_);
          _.isRepeated && !_.isPacked
            ? (_ = _.call(_, _))
              ? _.push(_)
              : _.call(_, _, [_])
            : _.call(_, _, _);
        } else _.skipField();
      }),
      goog.exportProperty(
        jspb.Message,
        `readBinaryExtension`,
        jspb.Message.readBinaryExtension,
      ),
      (jspb.Message.getField = function (_, _) {
        if (_ < _.pivot_) {
          _ = jspb.Message.getIndex_(_, _);
          var _ = _.array[_];
          return _ === jspb.Message.EMPTY_LIST_SENTINEL_
            ? (_.array[_] = [])
            : _;
        }
        if (_.extensionObject_)
          return (
            (_ = _.extensionObject_[_]),
            _ === jspb.Message.EMPTY_LIST_SENTINEL_
              ? (_.extensionObject_[_] = [])
              : _
          );
      }),
      goog.exportProperty(jspb.Message, `getField`, jspb.Message.getField),
      (jspb.Message.getRepeatedField = function (_, _) {
        return jspb.Message.getField(_, _);
      }),
      goog.exportProperty(
        jspb.Message,
        `getRepeatedField`,
        jspb.Message.getRepeatedField,
      ),
      (jspb.Message.getOptionalFloatingPointField = function (_, _) {
        return ((_ = jspb.Message.getField(_, _)), _ == null ? _ : +_);
      }),
      goog.exportProperty(
        jspb.Message,
        `getOptionalFloatingPointField`,
        jspb.Message.getOptionalFloatingPointField,
      ),
      (jspb.Message.getBooleanField = function (_, _) {
        return ((_ = jspb.Message.getField(_, _)), _ == null ? _ : !!_);
      }),
      goog.exportProperty(
        jspb.Message,
        `getBooleanField`,
        jspb.Message.getBooleanField,
      ),
      (jspb.Message.getRepeatedFloatingPointField = function (_, _) {
        var _ = jspb.Message.getRepeatedField(_, _);
        if (
          ((_.convertedPrimitiveFields_ ||= {}),
          !_.convertedPrimitiveFields_[_])
        ) {
          for (var _ = 0; _ < _.length; _++) _[_] = +_[_];
          _.convertedPrimitiveFields_[_] = !0;
        }
        return _;
      }),
      goog.exportProperty(
        jspb.Message,
        `getRepeatedFloatingPointField`,
        jspb.Message.getRepeatedFloatingPointField,
      ),
      (jspb.Message.getRepeatedBooleanField = function (_, _) {
        var _ = jspb.Message.getRepeatedField(_, _);
        if (
          ((_.convertedPrimitiveFields_ ||= {}),
          !_.convertedPrimitiveFields_[_])
        ) {
          for (var _ = 0; _ < _.length; _++) _[_] = !!_[_];
          _.convertedPrimitiveFields_[_] = !0;
        }
        return _;
      }),
      goog.exportProperty(
        jspb.Message,
        `getRepeatedBooleanField`,
        jspb.Message.getRepeatedBooleanField,
      ),
      (jspb.Message.bytesAsB64 = function (_) {
        return _ == null || typeof _ == `string`
          ? _
          : jspb.Message.SUPPORTS_UINT8ARRAY_ && _ instanceof Uint8Array
            ? goog.crypt.base64.encodeByteArray(_)
            : (jspb.asserts.fail(
                `Cannot coerce to b64 string: ` + goog.typeOf(_),
              ),
              null);
      }),
      goog.exportProperty(jspb.Message, `bytesAsB64`, jspb.Message.bytesAsB64),
      (jspb.Message.bytesAsU8 = function (_) {
        return _ == null || _ instanceof Uint8Array
          ? _
          : typeof _ == `string`
            ? goog.crypt.base64.decodeStringToUint8Array(_)
            : (jspb.asserts.fail(
                `Cannot coerce to Uint8Array: ` + goog.typeOf(_),
              ),
              null);
      }),
      goog.exportProperty(jspb.Message, `bytesAsU8`, jspb.Message.bytesAsU8),
      (jspb.Message.bytesListAsB64 = function (_) {
        return (
          jspb.Message.assertConsistentTypes_(_),
          _.length && typeof _[0] != `string`
            ? goog.array.map(_, jspb.Message.bytesAsB64)
            : _
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `bytesListAsB64`,
        jspb.Message.bytesListAsB64,
      ),
      (jspb.Message.bytesListAsU8 = function (_) {
        return (
          jspb.Message.assertConsistentTypes_(_),
          !_.length || _[0] instanceof Uint8Array
            ? _
            : goog.array.map(_, jspb.Message.bytesAsU8)
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `bytesListAsU8`,
        jspb.Message.bytesListAsU8,
      ),
      (jspb.Message.assertConsistentTypes_ = function (_) {
        if (goog.DEBUG && _ && 1 < _.length) {
          var _ = goog.typeOf(_[0]);
          goog.array.forEach(_, function (_) {
            goog.typeOf(_) != _ &&
              jspb.asserts.fail(
                `Inconsistent type in JSPB repeated field array. Got ` +
                  goog.typeOf(_) +
                  ` expected ` +
                  _,
              );
          });
        }
      }),
      (jspb.Message.getFieldWithDefault = function (_, _, _) {
        return ((_ = jspb.Message.getField(_, _)), _ ?? _);
      }),
      goog.exportProperty(
        jspb.Message,
        `getFieldWithDefault`,
        jspb.Message.getFieldWithDefault,
      ),
      (jspb.Message.getBooleanFieldWithDefault = function (_, _, _) {
        return ((_ = jspb.Message.getBooleanField(_, _)), _ ?? _);
      }),
      goog.exportProperty(
        jspb.Message,
        `getBooleanFieldWithDefault`,
        jspb.Message.getBooleanFieldWithDefault,
      ),
      (jspb.Message.getFloatingPointFieldWithDefault = function (_, _, _) {
        return ((_ = jspb.Message.getOptionalFloatingPointField(_, _)), _ ?? _);
      }),
      goog.exportProperty(
        jspb.Message,
        `getFloatingPointFieldWithDefault`,
        jspb.Message.getFloatingPointFieldWithDefault,
      ),
      (jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault),
      goog.exportProperty(
        jspb.Message,
        `getFieldProto3`,
        jspb.Message.getFieldProto3,
      ),
      (jspb.Message.getMapField = function (_, _, _, _) {
        if (((_.wrappers_ ||= {}), _ in _.wrappers_)) return _.wrappers_[_];
        var _ = jspb.Message.getField(_, _);
        if (!_) {
          if (_) return;
          ((_ = []), jspb.Message.setField(_, _, _));
        }
        return (_.wrappers_[_] = new jspb.Map(_, _));
      }),
      goog.exportProperty(
        jspb.Message,
        `getMapField`,
        jspb.Message.getMapField,
      ),
      (jspb.Message.setField = function (_, _, _) {
        return (
          jspb.asserts.assertInstanceof(_, jspb.Message),
          _ < _.pivot_
            ? (_.array[jspb.Message.getIndex_(_, _)] = _)
            : (jspb.Message.maybeInitEmptyExtensionObject_(_),
              (_.extensionObject_[_] = _)),
          _
        );
      }),
      goog.exportProperty(jspb.Message, `setField`, jspb.Message.setField),
      (jspb.Message.setProto3IntField = function (_, _, _) {
        return jspb.Message.setFieldIgnoringDefault_(_, _, _, 0);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3IntField`,
        jspb.Message.setProto3IntField,
      ),
      (jspb.Message.setProto3FloatField = function (_, _, _) {
        return jspb.Message.setFieldIgnoringDefault_(_, _, _, 0);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3FloatField`,
        jspb.Message.setProto3FloatField,
      ),
      (jspb.Message.setProto3BooleanField = function (_, _, _) {
        return jspb.Message.setFieldIgnoringDefault_(_, _, _, !1);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3BooleanField`,
        jspb.Message.setProto3BooleanField,
      ),
      (jspb.Message.setProto3StringField = function (_, _, _) {
        return jspb.Message.setFieldIgnoringDefault_(_, _, _, ``);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3StringField`,
        jspb.Message.setProto3StringField,
      ),
      (jspb.Message.setProto3BytesField = function (_, _, _) {
        return jspb.Message.setFieldIgnoringDefault_(_, _, _, ``);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3BytesField`,
        jspb.Message.setProto3BytesField,
      ),
      (jspb.Message.setProto3EnumField = function (_, _, _) {
        return jspb.Message.setFieldIgnoringDefault_(_, _, _, 0);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3EnumField`,
        jspb.Message.setProto3EnumField,
      ),
      (jspb.Message.setProto3StringIntField = function (_, _, _) {
        return jspb.Message.setFieldIgnoringDefault_(_, _, _, `0`);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3StringIntField`,
        jspb.Message.setProto3StringIntField,
      ),
      (jspb.Message.setFieldIgnoringDefault_ = function (_, _, _, _) {
        return (
          jspb.asserts.assertInstanceof(_, jspb.Message),
          _ === _
            ? _ < _.pivot_
              ? (_.array[jspb.Message.getIndex_(_, _)] = null)
              : (jspb.Message.maybeInitEmptyExtensionObject_(_),
                delete _.extensionObject_[_])
            : jspb.Message.setField(_, _, _),
          _
        );
      }),
      (jspb.Message.addToRepeatedField = function (_, _, _, _) {
        return (
          jspb.asserts.assertInstanceof(_, jspb.Message),
          (_ = jspb.Message.getRepeatedField(_, _)),
          _ == null ? _.push(_) : _.splice(_, 0, _),
          _
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `addToRepeatedField`,
        jspb.Message.addToRepeatedField,
      ),
      (jspb.Message.setOneofField = function (_, _, _, _) {
        return (
          jspb.asserts.assertInstanceof(_, jspb.Message),
          (_ = jspb.Message.computeOneofCase(_, _)) &&
            _ !== _ &&
            _ !== void 0 &&
            (_.wrappers_ && _ in _.wrappers_ && (_.wrappers_[_] = void 0),
            jspb.Message.setField(_, _, void 0)),
          jspb.Message.setField(_, _, _)
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `setOneofField`,
        jspb.Message.setOneofField,
      ),
      (jspb.Message.computeOneofCase = function (_, _) {
        for (var _, _, _ = 0; _ < _.length; _++) {
          var _ = _[_],
            _ = jspb.Message.getField(_, _);
          _ != null && ((_ = _), (_ = _), jspb.Message.setField(_, _, void 0));
        }
        return _ ? (jspb.Message.setField(_, _, _), _) : 0;
      }),
      goog.exportProperty(
        jspb.Message,
        `computeOneofCase`,
        jspb.Message.computeOneofCase,
      ),
      (jspb.Message.getWrapperField = function (_, _, _, _) {
        if (((_.wrappers_ ||= {}), !_.wrappers_[_])) {
          var _ = jspb.Message.getField(_, _);
          (_ || _) && (_.wrappers_[_] = new _(_));
        }
        return _.wrappers_[_];
      }),
      goog.exportProperty(
        jspb.Message,
        `getWrapperField`,
        jspb.Message.getWrapperField,
      ),
      (jspb.Message.getRepeatedWrapperField = function (_, _, _) {
        return (
          jspb.Message.wrapRepeatedField_(_, _, _),
          (_ = _.wrappers_[_]),
          _ == jspb.Message.EMPTY_LIST_SENTINEL_ && (_ = _.wrappers_[_] = []),
          _
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `getRepeatedWrapperField`,
        jspb.Message.getRepeatedWrapperField,
      ),
      (jspb.Message.wrapRepeatedField_ = function (_, _, _) {
        if (((_.wrappers_ ||= {}), !_.wrappers_[_])) {
          for (
            var _ = jspb.Message.getRepeatedField(_, _), _ = [], _ = 0;
            _ < _.length;
            _++
          )
            _[_] = new _(_[_]);
          _.wrappers_[_] = _;
        }
      }),
      (jspb.Message.setWrapperField = function (_, _, _) {
        (jspb.asserts.assertInstanceof(_, jspb.Message), (_.wrappers_ ||= {}));
        var _ = _ && _.toArray();
        return ((_.wrappers_[_] = _), jspb.Message.setField(_, _, _));
      }),
      goog.exportProperty(
        jspb.Message,
        `setWrapperField`,
        jspb.Message.setWrapperField,
      ),
      (jspb.Message.setOneofWrapperField = function (_, _, _, _) {
        (jspb.asserts.assertInstanceof(_, jspb.Message), (_.wrappers_ ||= {}));
        var _ = _ && _.toArray();
        return ((_.wrappers_[_] = _), jspb.Message.setOneofField(_, _, _, _));
      }),
      goog.exportProperty(
        jspb.Message,
        `setOneofWrapperField`,
        jspb.Message.setOneofWrapperField,
      ),
      (jspb.Message.setRepeatedWrapperField = function (_, _, _) {
        (jspb.asserts.assertInstanceof(_, jspb.Message),
          (_.wrappers_ ||= {}),
          (_ ||= []));
        for (var _ = [], _ = 0; _ < _.length; _++) _[_] = _[_].toArray();
        return ((_.wrappers_[_] = _), jspb.Message.setField(_, _, _));
      }),
      goog.exportProperty(
        jspb.Message,
        `setRepeatedWrapperField`,
        jspb.Message.setRepeatedWrapperField,
      ),
      (jspb.Message.addToRepeatedWrapperField = function (_, _, _, _, _) {
        jspb.Message.wrapRepeatedField_(_, _, _);
        var _ = _.wrappers_[_];
        return (
          (_ ||= _.wrappers_[_] = []),
          (_ ||= new _()),
          (_ = jspb.Message.getRepeatedField(_, _)),
          _ == null
            ? (_.push(_), _.push(_.toArray()))
            : (_.splice(_, 0, _), _.splice(_, 0, _.toArray())),
          _
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `addToRepeatedWrapperField`,
        jspb.Message.addToRepeatedWrapperField,
      ),
      (jspb.Message.toMap = function (_, _, _, _) {
        for (var _ = {}, _ = 0; _ < _.length; _++)
          _[_.call(_[_])] = _ ? _.call(_[_], _, _[_]) : _[_];
        return _;
      }),
      goog.exportProperty(jspb.Message, `toMap`, jspb.Message.toMap),
      (jspb.Message.prototype.syncMapFields_ = function () {
        if (this.wrappers_)
          for (var _ in this.wrappers_) {
            var _ = this.wrappers_[_];
            if (Array.isArray(_))
              for (var _ = 0; _ < _.length; _++) _[_] && _[_].toArray();
            else _ && _.toArray();
          }
      }),
      (jspb.Message.prototype.toArray = function () {
        return (this.syncMapFields_(), this.array);
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `toArray`,
        jspb.Message.prototype.toArray,
      ),
      jspb.Message.GENERATE_TO_STRING &&
        (jspb.Message.prototype.toString = function () {
          return (this.syncMapFields_(), this.array.toString());
        }),
      (jspb.Message.prototype.getExtension = function (_) {
        if (this.extensionObject_) {
          this.wrappers_ ||= {};
          var _ = _.fieldIndex;
          if (_.isRepeated) {
            if (_.isMessageType())
              return (
                this.wrappers_[_] ||
                  (this.wrappers_[_] = goog.array.map(
                    this.extensionObject_[_] || [],
                    function (_) {
                      return new _.ctor(_);
                    },
                  )),
                this.wrappers_[_]
              );
          } else if (_.isMessageType())
            return (
              !this.wrappers_[_] &&
                this.extensionObject_[_] &&
                (this.wrappers_[_] = new _.ctor(this.extensionObject_[_])),
              this.wrappers_[_]
            );
          return this.extensionObject_[_];
        }
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `getExtension`,
        jspb.Message.prototype.getExtension,
      ),
      (jspb.Message.prototype.setExtension = function (_, _) {
        ((this.wrappers_ ||= {}),
          jspb.Message.maybeInitEmptyExtensionObject_(this));
        var _ = _.fieldIndex;
        return (
          _.isRepeated
            ? ((_ ||= []),
              _.isMessageType()
                ? ((this.wrappers_[_] = _),
                  (this.extensionObject_[_] = goog.array.map(_, function (_) {
                    return _.toArray();
                  })))
                : (this.extensionObject_[_] = _))
            : _.isMessageType()
              ? ((this.wrappers_[_] = _),
                (this.extensionObject_[_] = _ && _.toArray()))
              : (this.extensionObject_[_] = _),
          this
        );
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `setExtension`,
        jspb.Message.prototype.setExtension,
      ),
      (jspb.Message.difference = function (_, _) {
        if (!(_ instanceof _.constructor))
          throw Error(`Messages have different types.`);
        var _ = _.toArray();
        _ = _.toArray();
        var _ = [],
          _ = 0,
          _ = _.length > _.length ? _.length : _.length;
        for (
          _.getJsPbMessageId() && ((_[0] = _.getJsPbMessageId()), (_ = 1));
          _ < _;
          _++
        )
          jspb.Message.compareFields(_[_], _[_]) || (_[_] = _[_]);
        return new _.constructor(_);
      }),
      goog.exportProperty(jspb.Message, `difference`, jspb.Message.difference),
      (jspb.Message.equals = function (_, _) {
        return (
          _ == _ ||
          (!(!_ || !_) &&
            _ instanceof _.constructor &&
            jspb.Message.compareFields(_.toArray(), _.toArray()))
        );
      }),
      goog.exportProperty(jspb.Message, `equals`, jspb.Message.equals),
      (jspb.Message.compareExtensions = function (_, _) {
        ((_ ||= {}), (_ ||= {}));
        var _ = {},
          _;
        for (_ in _) _[_] = 0;
        for (_ in _) _[_] = 0;
        for (_ in _) if (!jspb.Message.compareFields(_[_], _[_])) return !1;
        return !0;
      }),
      goog.exportProperty(
        jspb.Message,
        `compareExtensions`,
        jspb.Message.compareExtensions,
      ),
      (jspb.Message.compareFields = function (_, _) {
        if (_ == _) return !0;
        if (!goog.isObject(_) || !goog.isObject(_))
          return (typeof _ == `number` && isNaN(_)) ||
            (typeof _ == `number` && isNaN(_))
            ? String(_) == String(_)
            : !1;
        if (_.constructor != _.constructor) return !1;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && _.constructor === Uint8Array) {
          if (_.length != _.length) return !1;
          for (var _ = 0; _ < _.length; _++) if (_[_] != _[_]) return !1;
          return !0;
        }
        if (_.constructor === Array) {
          var _ = void 0,
            _ = void 0,
            _ = Math.max(_.length, _.length);
          for (_ = 0; _ < _; _++) {
            var _ = _[_],
              _ = _[_];
            if (
              (_ &&
                _.constructor == Object &&
                (jspb.asserts.assert(_ === void 0),
                jspb.asserts.assert(_ === _.length - 1),
                (_ = _),
                (_ = void 0)),
              _ &&
                _.constructor == Object &&
                (jspb.asserts.assert(_ === void 0),
                jspb.asserts.assert(_ === _.length - 1),
                (_ = _),
                (_ = void 0)),
              !jspb.Message.compareFields(_, _))
            )
              return !1;
          }
          return _ || _
            ? ((_ ||= {}), (_ ||= {}), jspb.Message.compareExtensions(_, _))
            : !0;
        }
        if (_.constructor === Object)
          return jspb.Message.compareExtensions(_, _);
        throw Error(`Invalid type in JSPB array`);
      }),
      goog.exportProperty(
        jspb.Message,
        `compareFields`,
        jspb.Message.compareFields,
      ),
      (jspb.Message.prototype.cloneMessage = function () {
        return jspb.Message.cloneMessage(this);
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `cloneMessage`,
        jspb.Message.prototype.cloneMessage,
      ),
      (jspb.Message.prototype.clone = function () {
        return jspb.Message.cloneMessage(this);
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `clone`,
        jspb.Message.prototype.clone,
      ),
      (jspb.Message.clone = function (_) {
        return jspb.Message.cloneMessage(_);
      }),
      goog.exportProperty(jspb.Message, `clone`, jspb.Message.clone),
      (jspb.Message.cloneMessage = function (_) {
        return new _.constructor(jspb.Message.clone_(_.toArray()));
      }),
      (jspb.Message.copyInto = function (_, _) {
        (jspb.asserts.assertInstanceof(_, jspb.Message),
          jspb.asserts.assertInstanceof(_, jspb.Message),
          jspb.asserts.assert(
            _.constructor == _.constructor,
            `Copy source and target message should have the same type.`,
          ),
          (_ = jspb.Message.clone(_)));
        for (
          var _ = _.toArray(), _ = _.toArray(), _ = (_.length = 0);
          _ < _.length;
          _++
        )
          _[_] = _[_];
        ((_.wrappers_ = _.wrappers_),
          (_.extensionObject_ = _.extensionObject_));
      }),
      goog.exportProperty(jspb.Message, `copyInto`, jspb.Message.copyInto),
      (jspb.Message.clone_ = function (_) {
        if (Array.isArray(_)) {
          for (var _ = Array(_.length), _ = 0; _ < _.length; _++) {
            var _ = _[_];
            _ != null &&
              (_[_] =
                typeof _ == `object`
                  ? jspb.Message.clone_(jspb.asserts.assert(_))
                  : _);
          }
          return _;
        }
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && _ instanceof Uint8Array)
          return new Uint8Array(_);
        for (_ in ((_ = {}), _))
          ((_ = _[_]),
            _ != null &&
              (_[_] =
                typeof _ == `object`
                  ? jspb.Message.clone_(jspb.asserts.assert(_))
                  : _));
        return _;
      }),
      (jspb.Message.registerMessageType = function (_, _) {
        _.messageId = _;
      }),
      goog.exportProperty(
        jspb.Message,
        `registerMessageType`,
        jspb.Message.registerMessageType,
      ),
      (jspb.Message.messageSetExtensions = {}),
      (jspb.Message.messageSetExtensionsBinary = {}),
      (jspb.Export = {}),
      typeof exports == `object` &&
        ((exports.Map = jspb.Map),
        (exports.Message = jspb.Message),
        (exports.BinaryReader = jspb.BinaryReader),
        (exports.BinaryWriter = jspb.BinaryWriter),
        (exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo),
        (exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo),
        (exports.exportSymbol = goog.exportSymbol),
        (exports.inherits = goog.inherits),
        (exports.object = {
          extend: goog.object.extend,
        }),
        (exports.typeOf = goog.typeOf)));
  }),
  import_google_protobuf = __toESM(require_google_protobuf(), 1),
  ReaderProto = import_google_protobuf.BinaryReader.prototype,
  WriterProto = import_google_protobuf.BinaryWriter.prototype;
function RemapMetadataByField(_) {
  let _ = {},
    { fields: _ } = _;
  for (let _ in _) {
    let _ = _[_];
    _[_._] = _;
  }
  return _;
}
function FromObject(_, _) {
  let { proto: _, fields: _ } = _,
    _ = new _();
  if (_ == null) return _;
  for (let _ in _) {
    let { _: _, _: _, _: _, _: _, _: _ } = _[_];
    if (!Object.prototype.hasOwnProperty.call(_, _)) continue;
    let _ = _[_];
    _
      ? _
        ? import_google_protobuf.Message.setRepeatedWrapperField(
            _,
            _,
            Array.isArray(_) ? _.map((_) => _.fromObject(_)) : [],
          )
        : import_google_protobuf.Message.setWrapperField(_, _, _.fromObject(_))
      : import_google_protobuf.Message.setField(_, _, _);
  }
  return _;
}
function ToObject(_, _, _) {
  let { proto: _, fields: _ } = _,
    _ = {};
  for (let _ in _) {
    let { _: _, _: _, _: _, _: _, _: _ } = _[_];
    if (_) {
      if (_)
        _[_] = import_google_protobuf.Message.toObjectList(
          import_google_protobuf.Message.getRepeatedWrapperField(_, _, _),
          _.toObject,
          _,
        );
      else {
        let _ = import_google_protobuf.Message.getWrapperField(_, _, _, +!!_);
        _ && (_[_] = _.toObject(_, _));
      }
    } else {
      let _ = import_google_protobuf.Message.getFieldWithDefault(
        _,
        _,
        _ === void 0 ? null : _,
      );
      (_ !== null || _) && (_[_] = _);
    }
  }
  return (_ && (_.$jspbMessageInstance = _), _);
}
function DeserializeBinary(_, _, _) {
  for (; _.nextField() && !_.isEndGroup();) {
    let _ = _[_.getFieldNumber()];
    if (_) {
      let { _: _, _: _, _: _, _: _, _: _, _: _ } = _;
      if (_) {
        let _ = new _();
        (_.readMessage(_, _.deserializeBinaryFromReader),
          _
            ? import_google_protobuf.Message.addToRepeatedWrapperField(
                _,
                _,
                _,
                _,
              )
            : import_google_protobuf.Message.setWrapperField(_, _, _));
      } else if (_) {
        let _ = _.call(_);
        _
          ? import_google_protobuf.Message.addToRepeatedField(_, _, _)
          : import_google_protobuf.Message.setField(_, _, _);
      } else
        (console.assert(
          !!_,
          `Reader func not set for field number ${_} in class ${_}`,
        ),
          _.skipField());
    } else _.skipField();
  }
  return _;
}
function SerializeBinary(_, _, _) {
  let { fields: _ } = _;
  for (let _ in _) {
    let { _: _, _: _, _: _, _: _, _: _, _: _ } = _[_];
    if (_) {
      if (_) {
        let _ = import_google_protobuf.Message.getRepeatedWrapperField(_, _, _);
        ((_ && _.length) || _) &&
          _.writeRepeatedMessage(_, _, _.serializeBinaryToWriter);
      } else {
        let _ = import_google_protobuf.Message.getWrapperField(_, _, _, +!!_);
        _ && _.writeMessage(_, _, _.serializeBinaryToWriter);
      }
    } else if (_) {
      let _ = import_google_protobuf.Message.getField(_, _);
      _ !== void 0 && _.call(_, _, _);
    } else
      console.assert(
        !!_,
        `Writer func not set for field number ${_} in class ${_}`,
      );
  }
}
function AddAccessors(_) {
  let _ = _.proto;
  for (let _ in _.fields) {
    let _ = _.fields[_],
      { _: _, _: _, _: _, _: _, _: _ } = _;
    (Object.prototype.hasOwnProperty.call(_, `d`)
      ? (_.prototype[_] = MakeBasicGetter(
          import_google_protobuf.Message.getFieldWithDefault,
          _,
          _,
        ))
      : _
        ? _
          ? (_.prototype[_] = MakeBasicGetter(
              import_google_protobuf.Message.getRepeatedWrapperField,
              _,
              _,
            ))
          : (_.prototype[_] = MakeWrapperGetter(_, _))
        : (_.prototype[_] = MakeBasicGetter(
            import_google_protobuf.Message.getField,
            _,
          )),
      _
        ? _
          ? (_.prototype[`set_${_}`] = MakeSetter(
              import_google_protobuf.Message.setRepeatedWrapperField,
              _,
            ))
          : (_.prototype[`set_${_}`] = MakeSetter(
              import_google_protobuf.Message.setWrapperField,
              _,
            ))
        : (_.prototype[`set_${_}`] = MakeSetter(
            import_google_protobuf.Message.setField,
            _,
          )),
      _ && (_.prototype[`add_${_}`] = MakeAdder(_, _)));
  }
}
function MakeBasicGetter(_, ..._) {
  return function () {
    return _(this, ..._);
  };
}
function MakeWrapperGetter(_, _) {
  return function (_ = !0) {
    return import_google_protobuf.Message.getWrapperField(this, _, _, +!!_);
  };
}
function MakeSetter(_, _) {
  return function (_) {
    return _(this, _, _);
  };
}
function MakeAdder(_, _) {
  return _
    ? function (_, _) {
        return import_google_protobuf.Message.addToRepeatedWrapperField(
          this,
          _,
          _,
          _,
          _,
        );
      }
    : function (_, _) {
        import_google_protobuf.Message.addToRepeatedField(this, _, _, _);
      };
}
function AssertMsg(_, _, ..._) {
  console.assert
    ? _.length == 0
      ? console.assert(!!_, _)
      : console.assert(!!_, _, ..._)
    : _ || console.warn(_, ..._);
}
function AssertNever(_, _, ..._) {
  AssertMsg(!1, _, ..._);
}
function MoveElement(_, _, _) {
  if (_ >= 0 && _ >= 0) {
    let _ = _.splice(_, 1)[0];
    _ >= _.length ? (_[_] = _) : _.splice(_, 0, _);
  }
  return _;
}
function FindAndRemove(_, _) {
  return FindAndRemoveWhere(_, (_) => _ == _);
}
function FindAndRemoveWhere(_, _) {
  let _ = _.findIndex(_);
  return _ >= 0 && (_.splice(_, 1), !0);
}
async function GenerateSHA(_, _ = `SHA-256`) {
  let _;
  return (
    (_ = typeof _ == `string` ? BufferFromString(_) : _),
    HexFromBuffer(await window.crypto.subtle.digest(_, _))
  );
}
function HexFromBuffer(_) {
  let _ = new Uint8Array(_),
    _ = ``;
  for (let _ = 0; _ < _.length; _++) _ += (`00` + _[_].toString(16)).slice(-2);
  return _;
}
function BufferFromString(_) {
  return new TextEncoder().encode(_).buffer;
}
function bind(_, _, _) {
  return {
    get() {
      let _ = _.value.bind(this);
      return (
        Object.prototype.hasOwnProperty.call(this, _) ||
          Object.defineProperty(this, _, {
            value: _,
          }),
        _
      );
    },
  };
}
var CCallbackList = class {
    m_vecCallbacks = [];
    Register(_) {
      return (
        this.m_vecCallbacks.push(_),
        {
          Unregister: () => {
            FindAndRemove(this.m_vecCallbacks, _);
          },
        }
      );
    }
    Dispatch(..._) {
      for (let _ of Array.from(this.m_vecCallbacks)) _(..._);
    }
    ClearAllCallbacks() {
      this.m_vecCallbacks = [];
    }
    CountRegistered() {
      return this.m_vecCallbacks.length;
    }
    static PromiseFromAny(_) {
      return new Promise((_) => {
        let _ = [],
          _ = () => {
            (_.forEach((_) => _.Unregister()), _());
          };
        for (let _ of _) _.push(_.Register(_));
      });
    }
  },
  CClientMetrics_ClientBootstrap_RequestInfo = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.original_hostname || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            original_hostname: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            actual_hostname: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            path: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            base_name: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            success: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            status_code: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            address_of_request_url: {
              _: 7,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            response_time_ms: {
              _: 8,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            bytes_received: {
              _: 9,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            num_retries: {
              _: 10,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_RequestInfo`;
    }
  },
  CClientMetrics_ClientBootstrap_Summary = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.launcher_type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [7, 8],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            launcher_type: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            steam_realm: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            beta_name: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            download_completed: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            total_time_ms: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            manifest_requests: {
              _: 7,
              _: CClientMetrics_ClientBootstrap_RequestInfo,
              _: !0,
              _: !0,
            },
            package_requests: {
              _: 8,
              _: CClientMetrics_ClientBootstrap_RequestInfo,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_Summary`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Counts = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.class_100 || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            class_100: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            class_200: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            class_300: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            class_400: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            class_500: {
              _: 5,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            no_response: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            class_unknown: {
              _: 7,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Counts`;
    }
  },
  CClientMetrics_ContentDownloadResponse_HostCounts = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hostname || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hostname: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            source_type: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            counts: {
              _: 3,
              _: CClientMetrics_ContentDownloadResponse_Counts,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_HostCounts`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Hosts = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hosts || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hosts: {
              _: 1,
              _: CClientMetrics_ContentDownloadResponse_HostCounts,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Hosts`;
    }
  },
  CMsgIPAddress = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype._ || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: ReaderProto.readFixed32,
              _: WriterProto.writeFixed32,
            },
            _: {
              _: 2,
              _: ReaderProto.readBytes,
              _: WriterProto.writeBytes,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMsgIPAddress`;
    }
  },
  CMsgGCRoutingProtoBufHeader = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.dst_gcid_queue || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            dst_gcid_queue: {
              _: 1,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            dst_gc_dir_index: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMsgGCRoutingProtoBufHeader`;
    }
  },
  CMsgProtoBufHeader = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [27, 41],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            client_sessionid: {
              _: 2,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            routing_appid: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            jobid_source: {
              _: 10,
              _: `18446744073709551615`,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            jobid_target: {
              _: 11,
              _: `18446744073709551615`,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            target_job_name: {
              _: 12,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            seq_num: {
              _: 24,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            eresult: {
              _: 13,
              _: 2,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            error_message: {
              _: 14,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            _: {
              _: 15,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            ip_v6: {
              _: 29,
              _: ReaderProto.readBytes,
              _: WriterProto.writeBytes,
            },
            auth_account_flags: {
              _: 16,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            token_source: {
              _: 22,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            admin_spoofing_user: {
              _: 23,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            transport_error: {
              _: 17,
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            messageid: {
              _: 18,
              _: `18446744073709551615`,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            publisher_group_id: {
              _: 19,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            sysid: {
              _: 20,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            webapi_key_id: {
              _: 25,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            is_from_external_source: {
              _: 26,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            forward_to_sysid: {
              _: 27,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            cm_sysid: {
              _: 28,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            launcher_type: {
              _: 31,
              _: 0,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            realm: {
              _: 32,
              _: 0,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            timeout_ms: {
              _: 33,
              _: -1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            debug_source: {
              _: 34,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            debug_source_string_index: {
              _: 35,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            token_id: {
              _: 36,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            routing_gc: {
              _: 37,
              _: CMsgGCRoutingProtoBufHeader,
            },
            session_disposition: {
              _: 38,
              _: 0,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            wg_token: {
              _: 39,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            webui_auth_key: {
              _: 40,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            exclude_client_sessionids: {
              _: 41,
              _: !0,
              _: !0,
              _: ReaderProto.readInt32,
              pbr: ReaderProto.readPackedInt32,
              _: WriterProto.writeRepeatedInt32,
            },
            admin_request_spoofing_steamid: {
              _: 43,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            is_valveds: {
              _: 44,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            trace_tag: {
              _: 45,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            wg_msg_trace_flags: {
              _: 46,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            wg_msg_trace_instance: {
              _: 47,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            wg_msg_trace_gid: {
              _: 48,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            wg_msg_trace_token: {
              _: 49,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            wg_msg_trace_steamid: {
              _: 50,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            wg_msg_trace_status: {
              _: 51,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            trace_flags: {
              _: 52,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            browserapi_site: {
              _: 53,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMsgProtoBufHeader`;
    }
  },
  CCDDBAppDetailCommon = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [17, 18],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            name: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            icon: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            tool: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            demo: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            media: {
              _: 8,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            community_visible_stats: {
              _: 9,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            friendly_name: {
              _: 10,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            propagation: {
              _: 11,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            has_adult_content: {
              _: 12,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            is_visible_in_steam_china: {
              _: 13,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            app_type: {
              _: 14,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            has_adult_content_sex: {
              _: 15,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            has_adult_content_violence: {
              _: 16,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            content_descriptorids: {
              _: 17,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            content_descriptorids_including_dlc: {
              _: 18,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CCDDBAppDetailCommon`;
    }
  },
  CLocalizationToken = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            localized_string: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CLocalizationToken`;
    }
  },
  CClanEventUserNewsTuple = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clanid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clanid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            event_gid: {
              _: 2,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            announcement_gid: {
              _: 3,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            rtime_start: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            rtime_end: {
              _: 5,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            priority_score: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            type: {
              _: 7,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            clamp_range_slot: {
              _: 8,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            appid: {
              _: 9,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            rtime32_last_modified: {
              _: 10,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClanEventUserNewsTuple`;
    }
  },
  CClanMatchEventByRange = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rtime_before || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rtime_before: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            rtime_after: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            qualified: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            events: {
              _: 4,
              _: CClanEventUserNewsTuple,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClanMatchEventByRange`;
    }
  },
  UserContentDescriptorPreferences = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.content_descriptors_to_exclude || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            content_descriptors_to_exclude: {
              _: 1,
              _: UserContentDescriptorPreferences_ContentDescriptor,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `UserContentDescriptorPreferences`;
    }
  },
  UserContentDescriptorPreferences_ContentDescriptor = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.content_descriptorid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            content_descriptorid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            timestamp_added: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `UserContentDescriptorPreferences_ContentDescriptor`;
    }
  },
  UserSystemInformation = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.manufacturer || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            manufacturer: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            model: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            dx_video_card: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            dx_vendorid: {
              _: 4,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            dx_deviceid: {
              _: 5,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            num_gpu: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            system_ram: {
              _: 7,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            _: {
              _: 8,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            cpu_vendor: {
              _: 9,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            cpu_name: {
              _: 10,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            gaming_device_type: {
              _: 11,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            dx_driver_version: {
              _: 12,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            adapter_description: {
              _: 14,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            driver_version: {
              _: 15,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            driver_date: {
              _: 16,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            vram_size: {
              _: 17,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            screen_width: {
              _: 18,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            screen_height: {
              _: 19,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            precise_frame_rate: {
              _: 20,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `UserSystemInformation`;
    }
  },
  GamePerformanceSettings = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.setting || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            setting: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            game_resolution_width: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            game_resolution_height: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `GamePerformanceSettings`;
    }
  },
  CClientMetrics_AppInterfaceCreation = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.raw_version || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            raw_version: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            requested_interface_type: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceCreation`;
    }
  },
  CClientMetrics_AppInterfaceMethodCounts = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.interface_name || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            interface_name: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            method_name: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            call_count: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceMethodCounts`;
    }
  },
  CClientMetrics_AppInterfaceStats_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.game_id || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [2, 3],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            interfaces_created: {
              _: 2,
              _: CClientMetrics_AppInterfaceCreation,
              _: !0,
              _: !0,
            },
            methods_called: {
              _: 3,
              _: CClientMetrics_AppInterfaceMethodCounts,
              _: !0,
              _: !0,
            },
            session_length_seconds: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceStats_Notification`;
    }
  },
  CClientMetrics_IPv6Connectivity_Result = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.protocol_tested || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            protocol_tested: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            connectivity_state: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_IPv6Connectivity_Result`;
    }
  },
  CClientMetrics_IPv6Connectivity_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cell_id || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cell_id: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            results: {
              _: 2,
              _: CClientMetrics_IPv6Connectivity_Result,
              _: !0,
              _: !0,
            },
            private_ip_is_rfc6598: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_IPv6Connectivity_Notification`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.product || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [3, 4, 5],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            product: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            version: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            routes: {
              _: 3,
              _: CClientMetrics_ReportReactUsage_Notification_RouteData,
              _: !0,
              _: !0,
            },
            components: {
              _: 4,
              _: CClientMetrics_ReportReactUsage_Notification_ComponentData,
              _: !0,
              _: !0,
            },
            actions: {
              _: 5,
              _: CClientMetrics_ReportReactUsage_Notification_ActionData,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_RouteData = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.route || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            route: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            count: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_RouteData`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_ComponentData = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.component || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            component: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            count: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_ComponentData`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_ActionData = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.action || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            action: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            count: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_ActionData`;
    }
  },
  CClientMetrics_ReportClientError_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.product || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [3, 4],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            product: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            version: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            errors: {
              _: 3,
              _: CClientMetrics_ReportClientError_Notification_Error,
              _: !0,
              _: !0,
            },
            tags: {
              _: 4,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportClientError_Notification`;
    }
  },
  CClientMetrics_ReportClientError_Notification_Error = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.identifier || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            identifier: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            message: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            count: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            context: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            url: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportClientError_Notification_Error`;
    }
  },
  CClientMetrics_SteamPipeWorkStats_Operation = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            type: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            num_ops: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            num_bytes: {
              _: 3,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            busy_time_ms: {
              _: 4,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            idle_time_ms: {
              _: 5,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            sum_run_time_ms: {
              _: 6,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            sum_wait_time_ms: {
              _: 7,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_SteamPipeWorkStats_Operation`;
    }
  },
  CClientMetrics_SteamPipeWorkStats_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            depotid: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            work_type: {
              _: 3,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            operations: {
              _: 4,
              _: CClientMetrics_SteamPipeWorkStats_Operation,
              _: !0,
              _: !0,
            },
            hardware_type: {
              _: 5,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_SteamPipeWorkStats_Notification`;
    }
  },
  CClientMetrics_ClientBootstrap_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
              _: 1,
              _: CClientMetrics_ClientBootstrap_Summary,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_Notification`;
    }
  },
  CClientMetrics_DownloadRates_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cell_id || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cell_id: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            stats: {
              _: 2,
              _: CClientMetrics_DownloadRates_Notification_StatsInfo,
              _: !0,
              _: !0,
            },
            throttling_kbps: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            os_type: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            device_type: {
              _: 5,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_DownloadRates_Notification`;
    }
  },
  CClientMetrics_DownloadRates_Notification_StatsInfo = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.source_type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            source_type: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            source_id: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            bytes: {
              _: 3,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            host_name: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            microseconds: {
              _: 5,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            used_ipv6: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            proxied: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            used_http2: {
              _: 8,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            cache_hits: {
              _: 9,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            cache_misses: {
              _: 10,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            hit_bytes: {
              _: 11,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            miss_bytes: {
              _: 12,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            chunks_scored: {
              _: 13,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            sum_chunk_scores: {
              _: 14,
              _: ReaderProto.readDouble,
              _: WriterProto.writeDouble,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_DownloadRates_Notification_StatsInfo`;
    }
  },
  CClientMetrics_ContentValidation_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.validation_result || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            validation_result: {
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            app_id: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            staged_files: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            user_initiated: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            early_out: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            chunks_scanned: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            chunks_corrupt: {
              _: 7,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            bytes_scanned: {
              _: 8,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            chunk_bytes_corrupt: {
              _: 9,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            total_file_size_corrupt: {
              _: 10,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentValidation_Notification`;
    }
  },
  CClientMetrics_CloudAppSyncStats_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_id || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_id: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            platform_type: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            preload: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            blocking_app_launch: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            files_uploaded: {
              _: 5,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            files_downloaded: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            files_deleted: {
              _: 7,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            bytes_uploaded: {
              _: 8,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            bytes_downloaded: {
              _: 9,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_total: {
              _: 10,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_init_caches: {
              _: 11,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_validate_state: {
              _: 12,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_ac_launch: {
              _: 13,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_ac_prep_user_files: {
              _: 14,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_ac_exit: {
              _: 15,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_build_sync_list: {
              _: 16,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_delete_files: {
              _: 17,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_download_files: {
              _: 18,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            microsec_upload_files: {
              _: 19,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            hardware_type: {
              _: 20,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            files_managed: {
              _: 21,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_CloudAppSyncStats_Notification`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Counts_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cell_id || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cell_id: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            data: {
              _: 2,
              _: CClientMetrics_ContentDownloadResponse_Hosts,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Counts_Notification`;
    }
  },
  CClientMetrics_ClipShare_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.eresult || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            eresult: {
              _: 1,
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            share_method: {
              _: 2,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            seconds: {
              _: 3,
              _: ReaderProto.readFloat,
              _: WriterProto.writeFloat,
            },
            bytes: {
              _: 4,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            gameid: {
              _: 5,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClipShare_Notification`;
    }
  },
  CClientMetrics_ClipRange_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.original_range_method || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            original_range_method: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            start: {
              _: 2,
              _: CClientMetrics_ClipRange_Notification_RelativeRangeEdge,
            },
            end: {
              _: 3,
              _: CClientMetrics_ClipRange_Notification_RelativeRangeEdge,
            },
            seconds: {
              _: 4,
              _: ReaderProto.readFloat,
              _: WriterProto.writeFloat,
            },
            gameid: {
              _: 5,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClipRange_Notification`;
    }
  },
  CClientMetrics_ClipRange_Notification_RelativeRangeEdge = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.original_range_method || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            original_range_method: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            latest_range_method: {
              _: 2,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            delta_ms: {
              _: 3,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClipRange_Notification_RelativeRangeEdge`;
    }
  },
  CClientMetrics_EndGameRecording_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recording_type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_type: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            seconds: {
              _: 2,
              _: ReaderProto.readFloat,
              _: WriterProto.writeFloat,
            },
            bytes: {
              _: 3,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
            gameid: {
              _: 4,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            instant_clip: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_EndGameRecording_Notification`;
    }
  },
  CClientMetrics_GamePerformance_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.frame_rates || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            frame_rates: {
              _: 2,
              _: CClientMetrics_GamePerformance_Notification_FrameRate,
              _: !0,
              _: !0,
            },
            system_info: {
              _: 3,
              _: UserSystemInformation,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_GamePerformance_Notification`;
    }
  },
  CClientMetrics_GamePerformance_Notification_FrameRate = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.gameid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
              _: 1,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            frame_rate: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            session_seconds: {
              _: 3,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            framegen_frame_rate: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            game_settings: {
              _: 5,
              _: GamePerformanceSettings,
            },
            seconds_since_active: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            frame_rate_limit: {
              _: 7,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_GamePerformance_Notification_FrameRate`;
    }
  },
  CClientMetrics_ReportClientArgs_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_args || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_args: {
              _: 1,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
            gpu_webview_regkey_disabled: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            suppress_gpu_chrome: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            browser_not_supported: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            hw_accel_video_regkey_disabled: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            mini_mode_enabled: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            fps_counter_enabled: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            library_low_bandwidth_mode_enabled: {
              _: 8,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            library_low_perf_mode_enabled: {
              _: 9,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            gr_mode: {
              _: 10,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportClientArgs_Notification`;
    }
  },
  CClientMetrics_ReportAccessibilitySettings_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accessibility_desktop_ui_scale || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accessibility_desktop_ui_scale: {
              _: 1,
              _: ReaderProto.readFloat,
              _: WriterProto.writeFloat,
            },
            accessibility_screen_reader_enabled: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            accessibility_high_contrast_mode: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            accessibility_reduce_motion: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            accessibility_color_filter_name: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportAccessibilitySettings_Notification`;
    }
  },
  CClientMetrics_ReportLinuxStats_Notification = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.glibc_version_major || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            glibc_version_major: {
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            glibc_version_minor: {
              _: 2,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            account_type: {
              _: 3,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            launcher_type: {
              _: 4,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            game_server_appid: {
              _: 5,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            process_name: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            kernel_version_major: {
              _: 7,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            kernel_version_minor: {
              _: 8,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportLinuxStats_Notification`;
    }
  },
  ClientMetricsService;
(function (_) {
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ClientAppInterfaceStatsReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_AppInterfaceStats_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientAppInterfaceStatsReport = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ClientIPv6ConnectivityReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_IPv6Connectivity_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientIPv6ConnectivityReport = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.SteamPipeWorkStatsReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_SteamPipeWorkStats_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.SteamPipeWorkStatsReport = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportReactUsage#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportReactUsage_Notification,
        _,
      ),
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.ReportReactUsage = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportClientError#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportClientError_Notification,
        _,
      ),
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.ReportClientError = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ClientBootstrapReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ClientBootstrap_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientBootstrapReport = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ClientDownloadRatesReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_DownloadRates_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientDownloadRatesReport = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ClientContentValidationReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ContentValidation_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientContentValidationReport = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ClientCloudAppSyncStats#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_CloudAppSyncStats_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientCloudAppSyncStats = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ClientDownloadResponseCodeCounts#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ContentDownloadResponse_Counts_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientDownloadResponseCodeCounts = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportClientArgs#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportClientArgs_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportClientArgs = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportLinuxStats#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportLinuxStats_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportLinuxStats = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportAccessibilitySettings#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportAccessibilitySettings_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportAccessibilitySettings = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportClipShare#1`,
      initProtoBufMsgForServiceMethod(CClientMetrics_ClipShare_Notification, _),
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.ReportClipShare = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportClipRange#1`,
      initProtoBufMsgForServiceMethod(CClientMetrics_ClipRange_Notification, _),
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.ReportClipRange = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportEndGameRecording#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_EndGameRecording_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportEndGameRecording = _;
  function _(_, _) {
    return _.SendNotification(
      `ClientMetrics.ReportGamePerformance#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_GamePerformance_Notification,
        _,
      ),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportGamePerformance = _;
})((ClientMetricsService ||= {}));
var import_react = __toESM(require_react(), 1),
  addEventListener =
    window.addEventListener ||
    (globalThis && globalThis.addEventListener) ||
    (() => {}),
  g_rgPreInitQueue = [],
  g_onReportableError = (_, _, _) =>
    g_rgPreInitQueue.push({
      error: _,
      cCallsitesToIgnore: _,
      strComponentStack: _,
    }),
  g_unCollectionTimer,
  bReportingEnabled = !0,
  AssertionError = class extends Error {
    constructor(..._) {
      (super(..._), (this.name = `Assertion Failed`));
    }
  };
{
  let _ = console.assert;
  console.assert = (_, _, ..._) => {
    if (!_) {
      let _ = GetReactComponentStack();
      g_onReportableError(
        new AssertionError(ConvertConsoleParams(_, ..._)),
        2,
        _,
      );
    }
    _.apply(console, [_, _, ..._]);
  };
  let _ = console.error;
  ((console.error = (_, ..._) => {
    let _ = GetReactComponentStack();
    (g_onReportableError(Error(ConvertConsoleParams(_, ..._)), 1, _),
      _.apply(console, [_, ..._]));
  }),
    (console.clogerror = (_, _, ..._) => {
      let _ = GetReactComponentStack();
      (g_onReportableError(Error(ConvertConsoleParams(_, ..._)), _ + 1, _),
        _.apply(console, [_, ..._]));
    }),
    addEventListener(`error`, (_) => {
      g_onReportableError(_.error, 0);
    }),
    addEventListener(`unhandledrejection`, (_) => {
      g_onReportableError(_.reason, 0);
    }),
    (g_unCollectionTimer = window.setTimeout(() => {
      ((g_rgPreInitQueue = []), (g_onReportableError = () => {}));
    }, 3e4)));
}
var g_defaultErrorReportOptions = {
    cCallsitesToIgnore: 0,
    bIncludeMessageInIdentifier: !1,
  },
  g_rgBlacklistPatterns = [
    `(localhost|127.0.0.1):(?!(80|443))`,
    `chrome-extension://`,
    `HTMLDivElement.onreset \\(/market`,
    `/.millennium/Dist`,
    `Millennium internal`,
    `millenium`,
    `millennium`,
    `decky://`,
    `Refused unauthorized RPC command`,
  ];
function GetReactComponentStack() {
  try {
    let _ =
      import_react.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    if (_ && typeof _ == `object` && typeof _.getCurrentStack == `function`) {
      let _ = _.getCurrentStack();
      if (typeof _ == `string`) return _;
    }
  } catch {}
}
var CErrorReportingStore = class {
  m_strProduct;
  m_strVersion;
  m_transport = null;
  m_rgErrorQueue = [];
  m_sendTimer = null;
  m_bReportingPaused = !1;
  m_pauseTimer = void 0;
  m_fnGetReportingInterval = GetDefaultReportingInterval;
  m_fnGetReportTags = () => [];
  m_fnGetURL = () => location.href;
  strDisplayVersion;
  m_bEnabled = !0;
  m_bInitialized = !1;
  constructor(_ = !0) {
    (_
      ? (g_rgPreInitQueue.forEach(
          ({ error: _, cCallsitesToIgnore: _, strComponentStack: _ }) =>
            this.ReportError(_, {
              cCallsitesToIgnore: _,
              strComponentStack: _,
            }),
        ),
        (g_onReportableError = (_, _, _) =>
          this.ReportError(_, {
            cCallsitesToIgnore: _,
            strComponentStack: _,
          })))
      : (g_onReportableError = () => {}),
      (g_rgPreInitQueue = []),
      clearTimeout(g_unCollectionTimer),
      window.setTimeout(() => {
        this.m_bInitialized ||
          ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
      }, 3e4));
  }
  Init(_, _, _, _ = {}) {
    ((this.m_bInitialized = !0),
      (this.m_strProduct = _),
      (this.m_strVersion = _),
      (this.m_transport = _),
      _.fnGetReportingInterval &&
        (this.m_fnGetReportingInterval = _.fnGetReportingInterval),
      _.fnGetReportTags && (this.m_fnGetReportTags = _.fnGetReportTags),
      _.fnGetURL && (this.m_fnGetURL = _.fnGetURL),
      _.strDisplayVersion && (this.strDisplayVersion = _.strDisplayVersion),
      (this.m_bEnabled ||=
        (console.error(
          `Error reporting was initialized after being disabled, possibly dropping errors.`,
        ),
        !0)),
      this.m_rgErrorQueue.length &&
        (this.SendErrorReports(this.m_rgErrorQueue),
        (this.m_rgErrorQueue = [])));
  }
  SetGetURL(_) {
    this.m_fnGetURL = _;
  }
  async ReportError(_, _) {
    if (!_)
      return (
        console.warn(
          `Failed to report error: ReportError() was called without an error to report.`,
        ),
        null
      );
    try {
      let _ = {
        ...g_defaultErrorReportOptions,
        ..._,
      };
      if (!this.m_bEnabled) return null;
      let _ = await NormalizeStack(_, _);
      return _
        ? (_.cCallsitesToIgnore && _.message.splice(1, _.cCallsitesToIgnore),
          _.strComponentStack && (_.strComponentStack = _.strComponentStack),
          (_.strUrl = this.m_fnGetURL()),
          (_.strDisplayVersion = this.strDisplayVersion),
          this.SendErrorReport(_),
          _)
        : null;
    } catch (_) {
      return (console.log(`Failed to report error: ${_}`), null);
    }
  }
  PauseReportingForDuration(_) {
    (this.PauseReporting(),
      (this.m_pauseTimer = window.setTimeout(() => this.ResumeReporting(), _)));
  }
  PauseReporting() {
    ((this.m_bReportingPaused = !0), window.clearTimeout(this.m_pauseTimer));
  }
  ResumeReporting() {
    ((this.m_bReportingPaused = !1),
      window.clearTimeout(this.m_pauseTimer),
      this.ScheduleSend());
  }
  BIsBlacklisted(_) {
    for (let _ of _.message) {
      let _ = JSON.stringify(_);
      for (let _ of g_rgBlacklistPatterns) {
        let _ = new RegExp(_);
        if (_.match(_))
          return (console.warn(`Report`, _, `matched regex`, _), !0);
      }
    }
    return !1;
  }
  SendErrorReport(_) {
    this.BIsBlacklisted(_) ||
      (this.m_transport ? this.QueueReport(_) : this.m_rgErrorQueue.push(_));
  }
  QueueReport(_) {
    (this.m_rgErrorQueue.push(_),
      this.m_bReportingPaused || this.ScheduleSend());
  }
  ScheduleSend() {
    this.m_sendTimer ||= window.setTimeout(() => {
      (this.SendErrorReports(this.m_rgErrorQueue),
        (this.m_rgErrorQueue = []),
        (this.m_sendTimer = null));
    }, this.m_fnGetReportingInterval());
  }
  SendErrorReports(_) {
    if (!_ || !_.length) return;
    let _ = CProtoBufMsg.Init(CClientMetrics_ReportClientError_Notification),
      _ = _.reduce(
        (_, _) => (
          _[_.identifier]
            ? _[_.identifier].count++
            : (_[_.identifier] = {
                report: _,
                count: 1,
              }),
          _
        ),
        {},
      ),
      _ = Object.keys(_).map((_) => {
        let { report: _, count: _ } = _[_],
          _ = new CClientMetrics_ReportClientError_Notification_Error();
        (_.set_count(_),
          _.set_identifier(_.identifier + ` ` + _.identifierHash),
          _.set_message(JSON.stringify(_.message)));
        let _;
        return (
          _.strComponentStack &&
            ((_ ??= {}), (_.componentStack = _.strComponentStack)),
          _.strDisplayVersion &&
            ((_ ??= {}), (_.strDisplayVersion = _.strDisplayVersion)),
          _ && _.set_context(JSON.stringify(_)),
          _.strUrl && _.set_url(_.strUrl),
          _
        );
      });
    (_.Body().set_product(this.m_strProduct),
      _.Body().set_version(this.m_strVersion),
      _.Body().set_errors(_));
    for (let _ of this.m_fnGetReportTags()) _.Body().add_tags(_);
    ClientMetricsService.ReportClientError(this.m_transport, _);
  }
  get version() {
    return this.m_strVersion;
  }
  get product() {
    return this.m_strProduct;
  }
  get reporting_enabled() {
    return bReportingEnabled;
  }
};
function ConvertConsoleParams(_, ..._) {
  return typeof _ == `string` && _.length === 0
    ? _
    : [_, ..._]
        .map((_) => {
          try {
            let _ = String(_);
            return (_ == `[object Object]` && (_ = JSON.stringify(_)), _);
          } catch {
            return `[Stringify Error]`;
          }
        })
        .join(`, `);
}
var regexChromeEdgeStack = /^\s*at .*(\S+:\d+|\(native\))/m,
  regexFirefoxSafariStack = /(^|@)\S+:\d+/,
  regexReactNativeStack = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/,
  bHaveWarnedAboutUnknownStack = !1;
function NormalizeStack(_, _) {
  try {
    return _.stack && _.stack.match(regexChromeEdgeStack)
      ? NormalizeV8LikeStack(_, _)
      : _.stack && _.stack.match(regexFirefoxSafariStack)
        ? NormalizeWebkitLikeStack(_, _)
        : _.stack && _.stack.match(regexReactNativeStack)
          ? NormalizeReactNativeLikeStack(_, _)
          : ((bHaveWarnedAboutUnknownStack ||=
              (console.warn(
                `Error reporter does not know how to parse generated stack:`,
              ),
              console.warn(_.stack),
              !0)),
            null);
  } catch (_) {
    return (console.warn(`Failed to normalize error stack: ${_}`), null);
  }
}
async function NormalizeV8LikeStack(_, _) {
  let { cCallsitesToIgnore: _, bIncludeMessageInIdentifier: _ } = _,
    { message: _, stack: _ } = _,
    _ =
      _?.split(`
`) ?? [],
    _ = StripLine(_.filter((_) => !!_.match(regexChromeEdgeStack))[_]);
  _ && (_ = `${_} ${_}`);
  let _ = _.map((_) => {
    let _ = _.match(/(.*)\((.*):(\d+):(\d+)\)/);
    if (
      ((_ && _.length == 5) || (_ = _.match(/(.*at )(http.*):(\d+):(\d+)/)), !_)
    )
      return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await GenerateShortHash(_),
    message: _,
  };
}
function StripLine(_) {
  return StripDomain(StripQueryParams(_));
}
function StripQueryParams(_) {
  let _ = _.lastIndexOf(`?`);
  if (_ === -1) return _;
  let _ = _.indexOf(`:`, _);
  return _ === -1 ? _ : _.slice(0, _) + _.slice(_);
}
function StripDomain(_) {
  let _ = _.indexOf(`https://`);
  if (_ === -1) return _;
  let _ = _.indexOf(`/`, _ + 8);
  return _ === -1 ? _ : _.slice(0, _) + _.slice(_);
}
async function NormalizeWebkitLikeStack(_, _) {
  let { cCallsitesToIgnore: _, bIncludeMessageInIdentifier: _ } = _,
    _ =
      _.stack?.split(`
`) ?? [],
    _ = StripLine(_.filter((_) => !!_.match(regexFirefoxSafariStack))[_]);
  _ && (_ = `${_} ${_.message}`);
  let _ = _.map((_) => {
    let _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
    if (!_) return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await GenerateShortHash(_),
    message: [_.message, ..._],
  };
}
async function NormalizeReactNativeLikeStack(_, _) {
  let { bIncludeMessageInIdentifier: _, cCallsitesToIgnore: _ } = _,
    _ =
      _.stack?.split(`
`) ?? [],
    _ = _[_],
    _ = _.split(`/`),
    _ = _[_.length - 1];
  (_.indexOf(`@`) > -1 && (_ = _.split(`@`)[0] + `@` + _),
    _ && (_ = `${_} ${_.message}`));
  let _ = _.map((_) => {
    let _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
    if (!_) return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await GenerateShortHash(_),
    message: [_.message, ..._],
  };
}
var store,
  ErrorReportingStore = () => ((store ||= new CErrorReportingStore()), store);
async function GenerateShortHash(_) {
  try {
    return (await GenerateSHA(_)).slice(0, 16);
  } catch {
    return ``;
  }
}
function GetDefaultReportingInterval() {
  return 1e4;
}
function RandomInt(_, _) {
  return (
    (_ = Math.ceil(_)),
    (_ = Math.floor(_)),
    Math.floor(Math.random() * (_ - _ + 1)) + _
  );
}
function Clamp(_, _, _) {
  return _ == null || isNaN(_) ? _ : Math.max(_, Math.min(_, _));
}
function RemapVal(_, _, _, _, _) {
  return _ + ((_ - _) * (_ - _)) / (_ - _);
}
function RemapValClamped(_, _, _, _, _) {
  return Clamp(
    _ + ((_ - _) * (_ - _)) / (_ - _),
    Math.min(_, _),
    Math.max(_, _),
  );
}
var k_LinkRegex =
    /((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\^-~]+[.,](?:(?:[a-zA-Z]{2,4}[.?]*[/\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>[\]]*[^\s"<>[\],.ː:])?)/,
  k_RegExp_KnownSchemes = /^(steam|ftp|https?):\/\//;
function EnsureKnownURLScheme(_) {
  return k_RegExp_KnownSchemes.test(_) ? _ : `https://` + _;
}
var k_EMsgInvalid = 0,
  k_EMsgServiceMethod = 146,
  k_EMsgServiceMethodResponse = 147,
  k_EMsgServiceMethodCallFromClientNonAuthed = 9804,
  CUtlBuffer = class {
    m_nOffset;
    m_nLength;
    m_viewPacket;
    m_rgubPacket;
    m_iGet;
    m_iPut;
    constructor(_, _ = 0, _) {
      ((this.m_nOffset = _ || 0),
        _ instanceof Uint8Array || _ instanceof DataView
          ? ((this.m_nLength = _ || _.byteLength - this.m_nOffset),
            (this.m_nOffset += _.byteOffset),
            (this.m_viewPacket = new DataView(
              _.buffer,
              this.m_nOffset,
              this.m_nLength,
            )))
          : ((this.m_nLength = _ || _.byteLength - this.m_nOffset),
            (this.m_viewPacket = new DataView(
              _,
              this.m_nOffset,
              this.m_nLength,
            ))),
        (this.m_rgubPacket = new Uint8Array(
          this.m_viewPacket.buffer,
          this.m_viewPacket.byteOffset,
          this.m_viewPacket.byteLength,
        )),
        (this.m_iGet = 0),
        (this.m_iPut = 0));
    }
    TellGet() {
      return this.m_iGet + this.m_viewPacket.byteOffset;
    }
    GetPacket() {
      return this.m_viewPacket.buffer;
    }
    GetUint8() {
      return this.m_viewPacket.getUint8(this.m_iGet++);
    }
    GetUint32(_ = !0) {
      let _ = this.m_viewPacket.getUint32(this.m_iGet, _);
      return ((this.m_iGet += 4), _);
    }
    SeekGetHead(_ = 0) {
      this.m_iGet = _ || 0;
    }
    SeekGetCurrent(_) {
      this.m_iGet += _;
    }
    TellPut() {
      return this.m_iPut + this.m_viewPacket.byteOffset;
    }
    TellMaxPut() {
      return this.m_viewPacket.byteLength;
    }
    PutUint8(_) {
      this.m_viewPacket.setUint8(this.m_iPut++, _);
    }
    PutUint32(_, _ = !0) {
      (this.m_viewPacket.setUint32(this.m_iPut, _, _), (this.m_iPut += 4));
    }
    PutBytes(_) {
      (this.m_rgubPacket.set(_, this.m_iPut), (this.m_iPut += _.length));
    }
    SeekPut(_) {
      this.m_iPut += _;
    }
    GetCountBytesRemaining() {
      return this.m_viewPacket.byteLength - this.m_iGet;
    }
  },
  rgHexDictionary = [
    `0`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`,
  ];
function BinaryToHex(_) {
  let _ = ``;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    _ += rgHexDictionary[_ >>> 4] + rgHexDictionary[_ & 15];
  }
  return _;
}
var k_uFixedHeaderSize = 8,
  CBaseProtoBufMsg = class _ {
    static InitHeaderFromPacket(_) {
      return new _(void 0, _);
    }
    m_eMsg;
    m_bValid;
    m_netPacket;
    m_cubHeader;
    m_header;
    m_body;
    constructor(_, _, _, _, _, _) {
      if (_)
        ((this.m_eMsg = _.m_eMsg),
          (this.m_bValid = _.m_bValid),
          this.m_bValid &&
            ((this.m_netPacket = _.m_netPacket),
            (this.m_cubHeader = _.m_cubHeader),
            (this.m_header = _.m_header),
            this.InitForType(_)));
      else {
        if (
          ((this.m_header = new CMsgProtoBufHeader(null)),
          (this.m_bValid = !0),
          _)
        ) {
          if (
            ((this.m_netPacket = _),
            this.m_netPacket.SeekGetHead(),
            (this.m_eMsg = this.m_netPacket.GetUint32()),
            this.m_eMsg & 2147483648)
          ) {
            ((this.m_eMsg &= 2147483647),
              (this.m_cubHeader = this.m_netPacket.GetUint32()));
            try {
              (CMsgProtoBufHeader.deserializeBinaryFromReader(
                this.m_header,
                new import_google_protobuf.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_cubHeader,
                ),
              ),
                this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                _ && this.InitForType(_));
            } catch (_) {
              (console.error(`Exception deserializing protobuf`, _),
                (this.m_bValid = !1));
            }
          } else this.m_bValid = !1;
        } else
          (_ && (this.m_eMsg = _),
            _ && _
              ? (this.m_body = _.fromObject(_))
              : _ && (this.m_body = new _()));
        _ && this.m_header.set_jobid_target(_.Hdr().jobid_target());
      }
    }
    InitForType(_) {
      ((this.m_body = new _()),
        this.m_netPacket &&
          (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
          this.ReadBodyFromBuffer(_, this.m_netPacket)));
    }
    ReadBodyFromBuffer(_, _) {
      try {
        _.deserializeBinaryFromReader(
          this.m_body,
          new import_google_protobuf.BinaryReader(
            _.GetPacket(),
            _.TellGet(),
            _.GetCountBytesRemaining(),
          ),
        );
      } catch (_) {
        this.m_bValid = !1;
        let _ = ErrorReportingStore(),
          _ = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
        (_ &&
          _.ReportError(Error(_), {
            bIncludeMessageInIdentifier: !0,
          }),
          console.warn(_),
          console.log(_.stack || _));
      }
    }
    BIsValid() {
      return this.m_bValid;
    }
    Body() {
      return this.m_body;
    }
    SetBodyJSON(_) {
      ((_.toObject = () => _), (this.m_body = _));
    }
    Hdr() {
      return this.m_header;
    }
    GetEMsg() {
      return this.m_eMsg;
    }
    SetEMsg(_) {
      this.m_eMsg = _;
    }
    GetEResult() {
      return this.Hdr().eresult();
    }
    BSuccess() {
      return this.Hdr().eresult() == 1;
    }
    GetErrorMessage() {
      return this.Hdr().error_message()
        ? this.Hdr().error_message()
        : `eresult ${this.Hdr().eresult()}`;
    }
    Serialize() {
      let _ = this.m_header.serializeBinary(),
        _ = this.m_body.serializeBinary(),
        _ = this.m_eMsg | 2147483648,
        _ = new Uint8Array(8 + _.length + _.length),
        _ = new CUtlBuffer(_);
      return (
        _.PutUint32(_), _.PutUint32(_.length), _.PutBytes(_), _.PutBytes(_), _
      );
    }
    SerializeBody() {
      let _ = this.m_body.serializeBinary(),
        _ = new Uint8Array(_.length);
      return (new CUtlBuffer(_).PutBytes(_), _);
    }
    DEBUG_ToObject() {
      return {};
    }
    DEBUG_LogToConsole() {}
  },
  CProtoBufMsg = class _ extends CBaseProtoBufMsg {
    constructor(_, _ = 0, _, _, _) {
      super(_, _, _, _, void 0, _);
    }
    static InitFromPacket(_, _) {
      return new _(_, 0, _);
    }
    static InitFromMsg(_, _) {
      return new _(_, void 0, void 0, _);
    }
    static Init(_, _) {
      return new _(_, _);
    }
    static InitFromObject(_, _) {
      return new _(_, void 0, void 0, void 0, _);
    }
    Body() {
      return super.Body();
    }
    SetBodyFields(_) {
      for (let _ in _)
        Array.isArray(_[_])
          ? this.Body()[`add_${_}`] &&
            _[_].forEach((_) => {
              this.Body()[`add_${_}`](_);
            })
          : this.Body()[`set_${_}`] && this.Body()[`set_${_}`](_[_]);
    }
  };
function initProtoBufMsgForServiceMethod(_, _, _) {
  let _;
  return (
    (_ = _ instanceof CProtoBufMsg ? _ : CProtoBufMsg.InitFromObject(_, _)),
    _?.strDebugSource !== void 0 && _.Hdr().set_debug_source(_.strDebugSource),
    _
  );
}
var SteamAward_Localization = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.title || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            title: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `SteamAward_Localization`;
    }
  },
  SteamAward = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.voteid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            voteid: {
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            localization: {
              _: 2,
              _: SteamAward_Localization,
            },
            award_year: {
              _: 3,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `SteamAward`;
    }
  },
  CSeasonPassDateAndDisplay = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rtime || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rtime: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            coming_soon_display_type: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSeasonPassDateAndDisplay`;
    }
  },
  CSeasonPassMilestone = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.milestone_id || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [2, 5, 9, 10],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            milestone_id: {
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            title: {
              _: 2,
              _: CLocalizationToken,
              _: !0,
              _: !0,
            },
            appid: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            event_gid: {
              _: 4,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            dates: {
              _: 5,
              _: CSeasonPassDateAndDisplay,
              _: !0,
              _: !0,
            },
            shipped: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            rtime_complete: {
              _: 7,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            milestone_desc: {
              _: 9,
              _: CLocalizationToken,
              _: !0,
              _: !0,
            },
            image: {
              _: 10,
              _: CLocalizationToken,
              _: !0,
              _: !0,
            },
            backfilled_release: {
              _: 11,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            coming_soon_appid: {
              _: 12,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSeasonPassMilestone`;
    }
  },
  CSeasonPass = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            milestones: {
              _: 2,
              _: CSeasonPassMilestone,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSeasonPass`;
    }
  },
  CStorePageFilter = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_filter || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_filter: {
              _: 1,
              _: CStorePageFilter_SalePageFilter,
            },
            content_hub_filter: {
              _: 2,
              _: CStorePageFilter_ContentHubFilter,
            },
            store_filters: {
              _: 3,
              _: CStorePageFilter_StoreFilter,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStorePageFilter`;
    }
  },
  CStorePageFilter_SalePageFilter = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sale_tagid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sale_tagid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            creator_clan_account_id: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStorePageFilter_SalePageFilter`;
    }
  },
  CStorePageFilter_ContentHubFilter = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hub_type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hub_type: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            hub_category: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            hub_tagid: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            discount_filter: {
              _: 4,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            optin: {
              _: 5,
              _: CStorePageFilter_ContentHubFilter_OptInInfo,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStorePageFilter_ContentHubFilter`;
    }
  },
  CStorePageFilter_ContentHubFilter_OptInInfo = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            optin_tagid: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            prune_tagid: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            optin_only: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStorePageFilter_ContentHubFilter_OptInInfo`;
    }
  },
  CStorePageFilter_StoreFilter = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filter_json || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filter_json: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            cache_key: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStorePageFilter_StoreFilter`;
    }
  };
function EStoreItemTypeToString(_) {
  return `unknown EStoreItemType ( ` + _ + ` )`;
}
var StoreGameRating = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [3, 9, 12],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            type: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            rating: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            descriptors: {
              _: 3,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
            interactive_elements: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            agency: {
              _: 5,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            banned: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            esrb_online_music_not_rated: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            esrb_online_interactions_not_rated: {
              _: 8,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            survey_interactive_elements: {
              _: 9,
              _: !0,
              _: !0,
              _: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              _: WriterProto.writeRepeatedEnum,
            },
            required_age: {
              _: 10,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            use_age_gate: {
              _: 11,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            descriptor_images: {
              _: 12,
              _: !0,
              _: !0,
              _: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              _: WriterProto.writeRepeatedEnum,
            },
            content_survey_notes: {
              _: 13,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            agency_rating: {
              _: 14,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            image_url: {
              _: 20,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            image_target: {
              _: 21,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreGameRating`;
    }
  },
  StoreItem = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.item_type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [11, 12, 20, 21, 25, 41, 52, 71, 74, 77, 78],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_type: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            _: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            gid: {
              _: 76,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            success: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            visible: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            unvailable_for_country_restriction: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            name: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            store_url_path: {
              _: 7,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            store_url_slug: {
              _: 8,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            appid: {
              _: 9,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            type: {
              _: 10,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            included_types: {
              _: 11,
              _: !0,
              _: !0,
              _: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              _: WriterProto.writeRepeatedEnum,
            },
            included_appids: {
              _: 12,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            is_free: {
              _: 13,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            is_early_access: {
              _: 14,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            related_items: {
              _: 15,
              _: StoreItem_RelatedItems,
            },
            included_items: {
              _: 16,
              _: StoreItem_IncludedItems,
            },
            content_descriptorids: {
              _: 20,
              _: !0,
              _: !0,
              _: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              _: WriterProto.writeRepeatedEnum,
            },
            tagids: {
              _: 21,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            categories: {
              _: 22,
              _: StoreItem_Categories,
            },
            reviews: {
              _: 23,
              _: StoreItem_Reviews,
            },
            basic_info: {
              _: 24,
              _: StoreItem_BasicInfo,
            },
            tags: {
              _: 25,
              _: StoreItem_Tag,
              _: !0,
              _: !0,
            },
            assets: {
              _: 30,
              _: StoreItem_Assets,
            },
            release: {
              _: 31,
              _: StoreItem_ReleaseInfo,
            },
            platforms: {
              _: 32,
              _: StoreItem_Platforms,
            },
            game_rating: {
              _: 33,
              _: StoreGameRating,
            },
            is_coming_soon: {
              _: 34,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            best_purchase_option: {
              _: 40,
              _: StoreItem_PurchaseOption,
            },
            purchase_options: {
              _: 41,
              _: StoreItem_PurchaseOption,
              _: !0,
              _: !0,
            },
            self_purchase_option: {
              _: 43,
              _: StoreItem_PurchaseOption,
            },
            screenshots: {
              _: 50,
              _: StoreItem_Screenshots,
            },
            trailers: {
              _: 51,
              _: StoreItem_Trailers,
            },
            supported_languages: {
              _: 52,
              _: StoreItem_SupportedLanguage,
              _: !0,
              _: !0,
            },
            store_url_path_override: {
              _: 53,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            free_weekend: {
              _: 54,
              _: StoreItem_FreeWeekend,
            },
            unlisted: {
              _: 55,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            game_count: {
              _: 56,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            internal_name: {
              _: 57,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            full_description_bbcode: {
              _: 58,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            is_free_temporarily: {
              _: 59,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            assets_without_overrides: {
              _: 60,
              _: StoreItem_Assets,
            },
            user_filter_failure: {
              _: 70,
              _: StoreBrowseFilterFailure,
            },
            links: {
              _: 71,
              _: StoreItem_Link,
              _: !0,
              _: !0,
            },
            purchase_description_bbcode: {
              _: 72,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            package_groups: {
              _: 74,
              _: StoreItem_PackageGroup,
              _: !0,
              _: !0,
            },
            extra_details: {
              _: 75,
              _: StoreItem_ExtraDetails,
            },
            optin_registration_tags: {
              _: 77,
              _: StoreItem_OptInRegistrationTags,
              _: !0,
              _: !0,
            },
            purchase_notes: {
              _: 78,
              _: StoreItem_PurchaseNote,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem`;
    }
  },
  StoreItem_Demo = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            label: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            show_above_purchase: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Demo`;
    }
  },
  StoreItem_Playtest = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            is_open: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Playtest`;
    }
  },
  StoreItem_RelatedF2P = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            header_text: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            description_text: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_RelatedF2P`;
    }
  },
  StoreItem_RelatedItems = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.parent_appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [2, 3, 4, 5, 6, 9],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            parent_appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            demo_appid: {
              _: 2,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            standalone_demo_appid: {
              _: 3,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            demos: {
              _: 4,
              _: StoreItem_Demo,
              _: !0,
              _: !0,
            },
            standalone_demos: {
              _: 5,
              _: StoreItem_Demo,
              _: !0,
              _: !0,
            },
            playtests: {
              _: 6,
              _: StoreItem_Playtest,
              _: !0,
              _: !0,
            },
            related_f2p: {
              _: 7,
              _: StoreItem_RelatedF2P,
            },
            dlc_parent_appids: {
              _: 9,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_RelatedItems`;
    }
  },
  StoreItem_IncludedItems = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.included_apps || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 2, 3, 4],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            included_apps: {
              _: 1,
              _: StoreItem,
              _: !0,
              _: !0,
            },
            included_packages: {
              _: 2,
              _: StoreItem,
              _: !0,
              _: !0,
            },
            included_bundles: {
              _: 3,
              _: StoreItem,
              _: !0,
              _: !0,
            },
            included_creators: {
              _: 4,
              _: StoreItem,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_IncludedItems`;
    }
  },
  StoreItem_Categories = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.supported_player_categoryids || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [2, 3, 4],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            supported_player_categoryids: {
              _: 2,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            feature_categoryids: {
              _: 3,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            controller_categoryids: {
              _: 4,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Categories`;
    }
  },
  StoreItem_Reviews = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary_filtered || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary_filtered: {
              _: 1,
              _: StoreItem_Reviews_StoreReviewSummary,
            },
            summary_unfiltered: {
              _: 2,
              _: StoreItem_Reviews_StoreReviewSummary,
            },
            summary_language_specific: {
              _: 3,
              _: StoreItem_Reviews_StoreReviewSummary,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Reviews`;
    }
  },
  StoreItem_Reviews_StoreReviewSummary = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.review_count || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            review_count: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            percent_positive: {
              _: 2,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            review_score: {
              _: 3,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            review_score_label: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Reviews_StoreReviewSummary`;
    }
  },
  StoreItem_BasicInfo = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.short_description || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [2, 3, 4],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            short_description: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            publishers: {
              _: 2,
              _: StoreItem_BasicInfo_CreatorHomeLink,
              _: !0,
              _: !0,
            },
            developers: {
              _: 3,
              _: StoreItem_BasicInfo_CreatorHomeLink,
              _: !0,
              _: !0,
            },
            franchises: {
              _: 4,
              _: StoreItem_BasicInfo_CreatorHomeLink,
              _: !0,
              _: !0,
            },
            capsule_headline: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_BasicInfo`;
    }
  },
  StoreItem_BasicInfo_CreatorHomeLink = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            creator_clan_account_id: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_BasicInfo_CreatorHomeLink`;
    }
  },
  StoreItem_Tag = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tagid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tagid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            weight: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Tag`;
    }
  },
  StoreItem_Assets = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.asset_url_format || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            asset_url_format: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            main_capsule: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            main_capsule_2x: {
              _: 18,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            small_capsule: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            small_capsule_2x: {
              _: 19,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            header: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            header_2x: {
              _: 20,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            package_header: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            page_background: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            hero_capsule: {
              _: 7,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            hero_capsule_2x: {
              _: 8,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            library_capsule: {
              _: 9,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            library_capsule_2x: {
              _: 10,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            library_hero: {
              _: 11,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            library_hero_2x: {
              _: 12,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            community_icon: {
              _: 13,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            clan_avatar: {
              _: 14,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            page_background_path: {
              _: 15,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            raw_page_background: {
              _: 16,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            edition_comparison: {
              _: 17,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            last_modified: {
              _: 21,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            creator_home_background: {
              _: 22,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Assets`;
    }
  },
  StoreItem_ReleaseInfo = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steam_release_date || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steam_release_date: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            original_release_date: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            original_steam_release_date: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            release_from_early_access_date: {
              _: 11,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            release_from_early_access_style: {
              _: 12,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            is_coming_soon: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            is_preload: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            custom_release_date_message: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            is_abridged_release_date: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            coming_soon_display: {
              _: 8,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            is_early_access: {
              _: 10,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            mac_release_date: {
              _: 20,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            linux_release_date: {
              _: 21,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            limited_launch_active: {
              _: 22,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            advance_access_date: {
              _: 23,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ReleaseInfo`;
    }
  },
  StoreItem_Platforms = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.windows || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            windows: {
              _: 1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            mac: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            steamos_linux: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            vr_support: {
              _: 10,
              _: StoreItem_Platforms_VRSupport,
            },
            steam_deck_compat_category: {
              _: 11,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            steam_os_compat_category: {
              _: 12,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            steam_frame_compat_category: {
              _: 13,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            steam_machine_compat_category: {
              _: 14,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Platforms`;
    }
  },
  StoreItem_Platforms_VRSupport = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.vrhmd || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            vrhmd: {
              _: 1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            vrhmd_only: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            show_optional_vr_mode_notice: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            htc_vive: {
              _: 40,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            oculus_rift: {
              _: 41,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            windows_mr: {
              _: 42,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            valve_index: {
              _: 43,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Platforms_VRSupport`;
    }
  },
  StoreItem_PurchaseOption = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [20], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            bundleid: {
              _: 2,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            purchase_option_name: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            final_price_in_cents: {
              _: 5,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
            original_price_in_cents: {
              _: 6,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
            formatted_final_price: {
              _: 8,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            formatted_original_price: {
              _: 9,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            discount_pct: {
              _: 10,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            bundle_discount_pct: {
              _: 12,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            is_free_to_keep: {
              _: 13,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            price_before_bundle_discount: {
              _: 14,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
            formatted_price_before_bundle_discount: {
              _: 15,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            active_discounts: {
              _: 20,
              _: StoreItem_PurchaseOption_Discount,
              _: !0,
              _: !0,
            },
            user_can_purchase_as_gift: {
              _: 31,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            is_commercial_license: {
              _: 40,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            should_suppress_discount_pct: {
              _: 41,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            hide_discount_pct_for_compliance: {
              _: 42,
              _: !1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            included_game_count: {
              _: 43,
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            lowest_recent_price_in_cents: {
              _: 44,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
            requires_shipping: {
              _: 45,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            recurrence_info: {
              _: 46,
              _: StoreItem_PurchaseOption_RecurrenceInfo,
            },
            free_to_keep_ends: {
              _: 47,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            must_purchase_as_set: {
              _: 48,
              _: !1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            package_group: {
              _: 49,
              _: `default`,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            is_edition: {
              _: 50,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            free_to_keep_base_package: {
              _: 51,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            price_cannot_be_displayed_as_discount: {
              _: 52,
              _: !1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            price_to_base_discount_on: {
              _: 53,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
            free_with_master_sub_appid: {
              _: 54,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            formatted_lowest_recent_price: {
              _: 55,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            is_free_license: {
              _: 56,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            combined_discount_pct: {
              _: 57,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_PurchaseOption`;
    }
  },
  StoreItem_PurchaseOption_Discount = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.discount_amount || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            discount_amount: {
              _: 1,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
            discount_description: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            discount_end_date: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            master_sub_appid: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_PurchaseOption_Discount`;
    }
  },
  StoreItem_PurchaseOption_RecurrenceInfo = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            billing_agreement_type: {
              _: 2,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            renewal_time_unit: {
              _: 3,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            renewal_time_period: {
              _: 4,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            renewal_price_in_cents: {
              _: 5,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
            formatted_renewal_price: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_PurchaseOption_RecurrenceInfo`;
    }
  },
  StoreItem_Screenshots = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.all_ages_screenshots || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [2, 3],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            all_ages_screenshots: {
              _: 2,
              _: StoreItem_Screenshots_Screenshot,
              _: !0,
              _: !0,
            },
            mature_content_screenshots: {
              _: 3,
              _: StoreItem_Screenshots_Screenshot,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Screenshots`;
    }
  },
  StoreItem_Screenshots_Screenshot = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filename || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filename: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            ordinal: {
              _: 2,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            alt_text: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            category: {
              _: 4,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Screenshots_Screenshot`;
    }
  },
  StoreItem_Trailers = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.highlights || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 2],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            highlights: {
              _: 1,
              _: StoreItem_Trailers_Trailer,
              _: !0,
              _: !0,
            },
            other_trailers: {
              _: 2,
              _: StoreItem_Trailers_Trailer,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Trailers`;
    }
  },
  StoreItem_Trailers_VideoSource = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filename || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filename: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            type: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Trailers_VideoSource`;
    }
  },
  StoreItem_Trailers_AdaptiveTrailer = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.cdn_path || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            cdn_path: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            encoding: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Trailers_AdaptiveTrailer`;
    }
  },
  StoreItem_Trailers_Trailer = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.trailer_name || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [5, 6],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            trailer_name: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            trailer_url_format: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            trailer_category: {
              _: 13,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            microtrailer: {
              _: 5,
              _: StoreItem_Trailers_VideoSource,
              _: !0,
              _: !0,
            },
            adaptive_trailers: {
              _: 6,
              _: StoreItem_Trailers_AdaptiveTrailer,
              _: !0,
              _: !0,
            },
            captions_manifest: {
              _: 7,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            screenshot_medium: {
              _: 10,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            screenshot_full: {
              _: 11,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            trailer_base_id: {
              _: 12,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            all_ages: {
              _: 14,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            screenshot_small: {
              _: 15,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            trailer_id: {
              _: 16,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Trailers_Trailer`;
    }
  },
  StoreItem_SupportedLanguage = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.elanguage || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            elanguage: {
              _: 1,
              _: -1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            eadditionallanguage: {
              _: 5,
              _: -1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            supported: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            full_audio: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            subtitles: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_SupportedLanguage`;
    }
  },
  StoreItem_FreeWeekend = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.start_time || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            start_time: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            end_time: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            text: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            appid: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_FreeWeekend`;
    }
  },
  StoreItem_Link = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.link_type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            link_type: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            url: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            text: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_Link`;
    }
  },
  StoreItem_PackageGroup = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            heading: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            display_type: {
              _: 3,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            dropdown_title: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            dropdown_description_bbcode: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_PackageGroup`;
    }
  },
  StoreItem_ExtraDetails = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steam_award || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 10, 13, 15, 18, 31, 36],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steam_award: {
              _: 1,
              _: SteamAward,
              _: !0,
              _: !0,
            },
            vetted: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            no_mouse_keyboard_support: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            controller_wizard_complete: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            drm_third_party_type: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            drm_activation_limit: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            user_account_third_party: {
              _: 7,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            user_account_third_party_link_to_steam: {
              _: 8,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            anticheat: {
              _: 9,
              _: StoreItem_ExtraDetails_Anticheat,
            },
            eula: {
              _: 10,
              _: StoreItem_ExtraDetails_Eula,
              _: !0,
              _: !0,
            },
            ai_generation_service: {
              _: 11,
              _: StoreItem_ExtraDetails_AIGeneratedContentService,
            },
            refund_checks_ea_playtime: {
              _: 12,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            section: {
              _: 13,
              _: StoreItem_ExtraDetails_PageSection,
              _: !0,
              _: !0,
            },
            legal_notice_bbcode: {
              _: 14,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            interactive_elements: {
              _: 15,
              _: !0,
              _: !0,
              _: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              _: WriterProto.writeRepeatedEnum,
            },
            content_survey_notes: {
              _: 16,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            content_survey_ai_notes: {
              _: 17,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            press_review: {
              _: 18,
              _: StoreItem_ExtraDetails_PressReview,
              _: !0,
              _: !0,
            },
            partner_awards_bbcode: {
              _: 19,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            early_access: {
              _: 20,
              _: StoreItem_ExtraDetails_EarlyAccess,
            },
            season_pass: {
              _: 21,
              _: CSeasonPass,
            },
            links_and_info: {
              _: 22,
              _: StoreItem_ExtraDetails_LinksAndInfo,
            },
            item_store_eligible: {
              _: 23,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            points_shop_eligible: {
              _: 24,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            metacritic: {
              _: 26,
              _: StoreItem_ExtraDetails_Metacritic,
            },
            cast_and_crew: {
              _: 27,
              _: StoreItem_ExtraDetails_CastAndCrew,
            },
            system_requirements: {
              _: 28,
              _: StoreItem_ExtraDetails_SystemRequirements,
            },
            running_time_minutes: {
              _: 29,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            episode: {
              _: 30,
              _: StoreItem_ExtraDetails_Episode,
            },
            seasons: {
              _: 31,
              _: StoreItem_ExtraDetails_Season,
              _: !0,
              _: !0,
            },
            video_extras_note: {
              _: 32,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            has_community_hub: {
              _: 33,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            event_spotlight: {
              _: 34,
              _: StoreItem_ExtraDetails_EventSpotlight,
            },
            music_album: {
              _: 35,
              _: StoreItem_ExtraDetails_MusicAlbum,
            },
            sale_pages: {
              _: 36,
              _: StoreItem_ExtraDetails_SalePage,
              _: !0,
              _: !0,
            },
            item_store_show_featured: {
              _: 37,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails`;
    }
  },
  StoreItem_ExtraDetails_Anticheat = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.kernel_mode || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            kernel_mode: {
              _: 1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            uninstall_completely: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            boot_protection: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            boot_protection_name: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            name: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            name_loc: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Anticheat`;
    }
  },
  StoreItem_ExtraDetails_Eula = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            url: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Eula`;
    }
  },
  StoreItem_ExtraDetails_AIGeneratedContentService = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.name || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            url: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_AIGeneratedContentService`;
    }
  },
  StoreItem_ExtraDetails_PageSection = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.label || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            label: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            content_bbcode: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            banner: {
              _: 3,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_PageSection`;
    }
  },
  StoreItem_ExtraDetails_PressReview = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.quote || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            quote: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            score: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            site: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            url: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_PressReview`;
    }
  },
  StoreItem_ExtraDetails_EarlyAccess = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.why_bbcode || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            why_bbcode: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            how_long_bbcode: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            full_version_bbcode: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            current_state_bbcode: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            pricing_bbcode: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            community_bbcode: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            description_bbcode: {
              _: 7,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_EarlyAccess`;
    }
  },
  StoreItem_ExtraDetails_LinksAndInfo = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.website || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [6, 7, 8],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            website: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            stats_url: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            online_manual_url: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            health_warning_url: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            privacy_policy_url: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            available_documents: {
              _: 6,
              _: !0,
              _: !0,
              _: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              _: WriterProto.writeRepeatedEnum,
            },
            genreids: {
              _: 7,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            manufacturers: {
              _: 8,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
            achievements_visible: {
              _: 9,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            achievement_count: {
              _: 10,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_LinksAndInfo`;
    }
  },
  StoreItem_ExtraDetails_Metacritic = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.score || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            score: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            url: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            always_show: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Metacritic`;
    }
  },
  StoreItem_ExtraDetails_CastAndCrew = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.directors || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 2, 3, 4, 5],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            directors: {
              _: 1,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
            producers: {
              _: 2,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
            writers: {
              _: 3,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
            music: {
              _: 4,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
            actors: {
              _: 5,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_CastAndCrew`;
    }
  },
  StoreItem_ExtraDetails_SystemRequirements = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.platforms || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            platforms: {
              _: 1,
              _: StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements`;
    }
  },
  StoreItem_ExtraDetails_SystemRequirements_Size = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.amount || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            amount: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            units: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_Size`;
    }
  },
  StoreItem_ExtraDetails_SystemRequirements_Requirements = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.os_version || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            os_version: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            os_version_unsupported: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            processor: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            memory: {
              _: 4,
              _: StoreItem_ExtraDetails_SystemRequirements_Size,
            },
            graphics: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            directx: {
              _: 6,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            broadband: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            storage: {
              _: 8,
              _: StoreItem_ExtraDetails_SystemRequirements_Size,
            },
            storage_hq: {
              _: 9,
              _: StoreItem_ExtraDetails_SystemRequirements_Size,
            },
            sound_card: {
              _: 10,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            vr_support: {
              _: 11,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            notes: {
              _: 12,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            legacy_bbcode: {
              _: 13,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_Requirements`;
    }
  },
  StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.platform || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            platform: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            minimum: {
              _: 2,
              _: StoreItem_ExtraDetails_SystemRequirements_Requirements,
            },
            recommended: {
              _: 3,
              _: StoreItem_ExtraDetails_SystemRequirements_Requirements,
            },
            requires_64bit: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            requires_apple_silicon: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            unsupported_os_note: {
              _: 6,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements`;
    }
  },
  StoreItem_ExtraDetails_Episode = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.number || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            number: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            type: {
              _: 2,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            hide_details: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Episode`;
    }
  },
  StoreItem_ExtraDetails_Season = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.index || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            index: {
              _: 1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            name: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            episode_appids: {
              _: 3,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Season`;
    }
  },
  StoreItem_ExtraDetails_EventSpotlight = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            event_gid: {
              _: 2,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
            announcement_gid: {
              _: 3,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_EventSpotlight`;
    }
  },
  StoreItem_ExtraDetails_MusicAlbum = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.tracks || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tracks: {
              _: 1,
              _: StoreItem_ExtraDetails_MusicAlbum_Track,
              _: !0,
              _: !0,
            },
            artist: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            composer: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            label: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            other_credits: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_MusicAlbum`;
    }
  },
  StoreItem_ExtraDetails_MusicAlbum_Track = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.disc_number || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            disc_number: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            track_number: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            name: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            other_name: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            duration_seconds: {
              _: 5,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_MusicAlbum_Track`;
    }
  },
  StoreItem_ExtraDetails_SalePage = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_account_id || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_account_id: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            event_gid: {
              _: 2,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SalePage`;
    }
  },
  StoreItem_OptInRegistrationTags = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.optin_name || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            optin_name: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            values: {
              _: 2,
              _: !0,
              _: !0,
              _: ReaderProto.readString,
              _: WriterProto.writeRepeatedString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_OptInRegistrationTags`;
    }
  },
  StoreItem_PurchaseNote = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.type || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            type: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            highlighted: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            text_bbcode: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItem_PurchaseNote`;
    }
  },
  StoreBrowseItemDataRequest = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_assets || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_assets: {
              _: 1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_release: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_platforms: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_all_purchase_options: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_screenshots: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_trailers: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_ratings: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_tag_count: {
              _: 8,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            include_reviews: {
              _: 9,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_basic_info: {
              _: 10,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_supported_languages: {
              _: 11,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_full_description: {
              _: 12,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_included_items: {
              _: 13,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            included_item_data_request: {
              _: 14,
              _: _,
            },
            include_assets_without_overrides: {
              _: 15,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            apply_user_filters: {
              _: 16,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_links: {
              _: 17,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_extra_details: {
              _: 18,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_best_purchase_option: {
              _: 19,
              _: !0,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            include_optin_registration_tags: {
              _: 20,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreBrowseItemDataRequest`;
    }
  },
  StoreBrowseContext = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            elanguage: {
              _: 2,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            country_code: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreBrowseContext`;
    }
  },
  StoreItemID = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            packageid: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            bundleid: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            tagid: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            creatorid: {
              _: 5,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            hubcategoryid: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            salepagegid: {
              _: 7,
              _: ReaderProto.readFixed64String,
              _: WriterProto.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreItemID`;
    }
  },
  CStoreBrowse_GetItems_Request = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.ids || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ids: {
              _: 1,
              _: StoreItemID,
              _: !0,
              _: !0,
            },
            context: {
              _: 2,
              _: StoreBrowseContext,
            },
            data_request: {
              _: 3,
              _: StoreBrowseItemDataRequest,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetItems_Request`;
    }
  },
  CStoreBrowse_GetItems_Response = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.store_items || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            store_items: {
              _: 1,
              _: StoreItem,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetItems_Response`;
    }
  },
  CStoreBrowse_GetStoreCategories_Request = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            elanguage: {
              _: 2,
              _: -1,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Request`;
    }
  },
  CStoreBrowse_GetStoreCategories_Response = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.categories || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            categories: {
              _: 1,
              _: CStoreBrowse_GetStoreCategories_Response_Category,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Response`;
    }
  },
  CStoreBrowse_GetStoreCategories_Response_Category = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.categoryid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            categoryid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            type: {
              _: 2,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            internal_name: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            display_name: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            image_url: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            show_in_search: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            computed: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            edit_url: {
              _: 8,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            edit_sort_order: {
              _: 9,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Response_Category`;
    }
  },
  CStoreBrowse_GetContentHubConfig_Request = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            context: {
              _: 1,
              _: StoreBrowseContext,
            },
            excluded_content_descriptorids: {
              _: 2,
              _: !0,
              _: !0,
              _: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              _: WriterProto.writeRepeatedEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Request`;
    }
  },
  CStoreBrowse_GetContentHubConfig_Response = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hubconfigs || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hubconfigs: {
              _: 1,
              _: CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Response`;
    }
  },
  CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.hubcategoryid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [6, 7, 8, 9],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            hubcategoryid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            type: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            handle: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            display_name: {
              _: 4,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            url_path: {
              _: 5,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            replaces_tags: {
              _: 6,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            must_have_tags: {
              _: 7,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            any_one_of_tags: {
              _: 8,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            must_not_have_tags: {
              _: 9,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            hub_description: {
              _: 10,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig`;
    }
  },
  CStoreBrowse_GetPriceStops_Request = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.country_code || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country_code: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            currency_code: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Request`;
    }
  },
  CStoreBrowse_GetPriceStops_Response = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.price_stops || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            price_stops: {
              _: 1,
              _: CStoreBrowse_GetPriceStops_Response_PriceStop,
              _: !0,
              _: !0,
            },
            currency_code: {
              _: 2,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Response`;
    }
  },
  CStoreBrowse_GetPriceStops_Response_PriceStop = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.formatted_amount || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            formatted_amount: {
              _: 1,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            amount_in_cents: {
              _: 2,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Response_PriceStop`;
    }
  },
  CStoreBrowse_GetDLCForApps_Request = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            context: {
              _: 1,
              _: StoreBrowseContext,
            },
            store_page_filter: {
              _: 2,
              _: CStorePageFilter,
            },
            appids: {
              _: 3,
              _: StoreItemID,
              _: !0,
              _: !0,
            },
            steamid: {
              _: 4,
              _: ReaderProto.readUint64String,
              _: WriterProto.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Request`;
    }
  },
  CStoreBrowse_GetDLCForApps_Response = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.dlc_data || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 2],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            dlc_data: {
              _: 1,
              _: CStoreBrowse_GetDLCForApps_Response_DLCData,
              _: !0,
              _: !0,
            },
            playtime: {
              _: 2,
              _: CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response`;
    }
  },
  CStoreBrowse_GetDLCForApps_Response_DLCData = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            parentappid: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            release_date: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            coming_soon: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            price: {
              _: 5,
              _: ReaderProto.readInt64String,
              _: WriterProto.writeInt64String,
            },
            discount: {
              _: 6,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            free: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response_DLCData`;
    }
  },
  CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            playtime: {
              _: 2,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            last_played: {
              _: 3,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp`;
    }
  },
  CStoreBrowse_GetDLCForAppsSolr_Request = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.context || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            context: {
              _: 1,
              _: StoreBrowseContext,
            },
            appids: {
              _: 2,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            flavor: {
              _: 3,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            count: {
              _: 4,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            store_page_filter: {
              _: 5,
              _: CStorePageFilter,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Request`;
    }
  },
  CStoreBrowse_GetDLCForAppsSolr_Response = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.dlc_lists || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            dlc_lists: {
              _: 1,
              _: CStoreBrowse_GetDLCForAppsSolr_Response_DLCList,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Response`;
    }
  },
  CStoreBrowse_GetDLCForAppsSolr_Response_DLCList = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.parent_appid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            parent_appid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            dlc_appids: {
              _: 2,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Response_DLCList`;
    }
  },
  CStoreBrowse_GetHardwareItems_Request = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            context: {
              _: 2,
              _: StoreBrowseContext,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetHardwareItems_Request`;
    }
  },
  CHardwarePackageDetails = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageid || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageid: {
              _: 1,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            inventory_available: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            high_pending_orders: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            account_restricted_from_purchasing: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            requires_reservation: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            rtime_estimated_notification: {
              _: 7,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            notificaton_token: {
              _: 8,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            reservation_state: {
              _: 9,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            expired: {
              _: 10,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            time_expires: {
              _: 11,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            time_reserved: {
              _: 12,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            allow_quantity_purchase: {
              _: 13,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            max_quantity_per_purchase: {
              _: 14,
              _: ReaderProto.readInt32,
              _: WriterProto.writeInt32,
            },
            allow_purchase_in_country: {
              _: 15,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            estimated_delivery_soonest_business_days: {
              _: 17,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            estimated_delivery_latest_business_days: {
              _: 18,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            not_allowed_to_reserved_because_already_owned: {
              _: 19,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            appid_ownership_not_allowed_to_reserve: {
              _: 20,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            account_first_date_purchase_requirement: {
              _: 21,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            position_is_waitlist: {
              _: 22,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            user_waitlist_token: {
              _: 23,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            queue_in_waitlist: {
              _: 24,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            queue_waitlist_token: {
              _: 25,
              _: ReaderProto.readString,
              _: WriterProto.writeString,
            },
            collection_time_active: {
              _: 26,
              _: ReaderProto.readUint32,
              _: WriterProto.writeUint32,
            },
            reservation_not_allowed: {
              _: 27,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            requires_signature: {
              _: 28,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CHardwarePackageDetails`;
    }
  },
  CStoreBrowse_GetHardwareItems_Response = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.details || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            details: {
              _: 1,
              _: CHardwarePackageDetails,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CStoreBrowse_GetHardwareItems_Response`;
    }
  },
  StoreBrowseFilterFailure = class _ extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.filter_failure || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          [21, 30],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            filter_failure: {
              _: 1,
              _: 0,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            already_owned: {
              _: 5,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            on_wishlist: {
              _: 6,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            ignored: {
              _: 7,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            ignored_creator: {
              _: 8,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            not_in_users_language: {
              _: 10,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            not_on_users_platform: {
              _: 11,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            demo_for_owned_game: {
              _: 12,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            dlc_for_unowned_game: {
              _: 13,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            nonpreferred_product_early_access: {
              _: 22,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            nonpreferred_product_prepurchase: {
              _: 23,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            nonpreferred_product_software: {
              _: 24,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            nonpreferred_product_vr: {
              _: 25,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            excluded_tagids: {
              _: 21,
              _: !0,
              _: !0,
              _: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              _: WriterProto.writeRepeatedUint32,
            },
            excluded_content_descriptorids: {
              _: 30,
              _: !0,
              _: !0,
              _: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              _: WriterProto.writeRepeatedEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `StoreBrowseFilterFailure`;
    }
  },
  StoreBrowseService;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `StoreBrowse.GetItems#1`,
      initProtoBufMsgForServiceMethod(CStoreBrowse_GetItems_Request, _, _),
      CStoreBrowse_GetItems_Response,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  _.GetItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreBrowse.GetStoreCategories#1`,
      initProtoBufMsgForServiceMethod(
        CStoreBrowse_GetStoreCategories_Request,
        _,
        _,
      ),
      CStoreBrowse_GetStoreCategories_Response,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetStoreCategories = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreBrowse.GetContentHubConfig#1`,
      initProtoBufMsgForServiceMethod(
        CStoreBrowse_GetContentHubConfig_Request,
        _,
        _,
      ),
      CStoreBrowse_GetContentHubConfig_Response,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.GetContentHubConfig = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreBrowse.GetPriceStops#1`,
      initProtoBufMsgForServiceMethod(CStoreBrowse_GetPriceStops_Request, _, _),
      CStoreBrowse_GetPriceStops_Response,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.GetPriceStops = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreBrowse.GetDLCForApps#1`,
      initProtoBufMsgForServiceMethod(CStoreBrowse_GetDLCForApps_Request, _, _),
      CStoreBrowse_GetDLCForApps_Response,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetDLCForApps = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreBrowse.GetDLCForAppsSolr#1`,
      initProtoBufMsgForServiceMethod(
        CStoreBrowse_GetDLCForAppsSolr_Request,
        _,
        _,
      ),
      CStoreBrowse_GetDLCForAppsSolr_Response,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.GetDLCForAppsSolr = _;
  function _(_, _, _) {
    return _.SendMsg(
      `StoreBrowse.GetHardwareItems#1`,
      initProtoBufMsgForServiceMethod(
        CStoreBrowse_GetHardwareItems_Request,
        _,
        _,
      ),
      CStoreBrowse_GetHardwareItems_Response,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.GetHardwareItems = _;
})((StoreBrowseService ||= {}));
var Config$1 = {
    EUNIVERSE: 0,
    LANGUAGE: `english`,
    SUPPORTED_LANGUAGES: [],
    COUNTRY: ``,
    AVATAR_BASE_URL: ``,
    MEDIA_CDN_COMMUNITY_URL: ``,
    MEDIA_CDN_URL: ``,
    CLAN_CDN_ASSET_URL: ``,
    VIDEO_CDN_URL: ``,
    COMMUNITY_CDN_URL: ``,
    COMMUNITY_CDN_ASSET_URL: ``,
    BASE_URL_SHARED_CDN: ``,
    STORE_CDN_URL: ``,
    PUBLIC_SHARED_URL: ``,
    COMMUNITY_BASE_URL: ``,
    CHAT_BASE_URL: ``,
    STORE_BASE_URL: ``,
    STORE_CHECKOUT_BASE_URL: ``,
    LOGIN_BASE_URL: ``,
    SUPPORT_BASE_URL: ``,
    STORE_ITEM_BASE_URL: ``,
    IMG_URL: ``,
    STEAMTV_BASE_URL: ``,
    HELP_BASE_URL: ``,
    PARTNER_BASE_URL: ``,
    STATS_BASE_URL: ``,
    INTERNAL_STATS_BASE_URL: ``,
    IN_CLIENT: !1,
    IN_MOBILE: !1,
    IN_MOBILE_WEBVIEW: !1,
    PLATFORM: ``,
    SNR: ``,
    EREALM: 0,
    WEBAPI_BASE_URL: ``,
    TOKEN_URL: ``,
    BUILD_TIMESTAMP: 0,
    PAGE_TIMESTAMP: 0,
    FROM_WEB: !1,
    WEBSITE_ID: `Unknown`,
    IN_STEAMUI: !1,
    NOW: 0,
  },
  UserConfig$1 = {
    logged_in: !1,
    steamid: ``,
    accountid: 0,
    account_name: ``,
    token: void 0,
    token_use_id: void 0,
    webapi_token: ``,
    authwgtoken: ``,
    is_support: !1,
    is_limited: !1,
    is_partner_member: !1,
    is_valve_email: !1,
    short_url: ``,
    country_code: ``,
    excluded_content_descriptors: [3, 4, 1],
  },
  BroadcastConfig = {
    steamid: ``,
    clanid: 0,
    listid: 0,
  },
  CommunityConfig = {
    CLANSTEAMID: ``,
    CLANACCOUNTID: 0,
    APPID: 0,
    VANITY_ID: ``,
    IS_CREATOR_HOME: !1,
    IS_CURATOR: !1,
    IS_OGG: !1,
    CAN_UPLOAD_IMAGES: !1,
    IS_VALVE_GROUP: !1,
    IS_ALLOWED_SC: !1,
  },
  EventConfig = {
    ANNOUNCEMENT_GID: ``,
    TAKEOVER_ANNOUNCEMENT_GID: ``,
  };
function GetClientSteamType() {
  if (!navigator?.userAgent) return;
  let _ = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (_ && _.length == 2) return _[1];
}
function GetCookie(_) {
  if (!BCanAccessCookies() || !window.document.cookie) return null;
  let _ = document.cookie.match(`(^|; )` + _ + `=([^;]*)`);
  return _ && _[2] ? decodeURIComponent(_[2]) : null;
}
function SetCookie(_, _, _, _) {
  if (!BCanAccessCookies()) return;
  _ ||= `/`;
  let _ = ``;
  if (_ !== void 0 && _) {
    let _ = new Date();
    (_.setTime(_.getTime() + 864e5 * _), (_ = `; expires=` + _.toUTCString()));
  }
  document.cookie =
    encodeURIComponent(_) + `=` + encodeURIComponent(_) + _ + `;path=` + _;
}
function BCanAccessCookies() {
  return !!window.document;
}
var CONFIG_ELEMENT_ID = `webui_config`;
function GetConfigJSON(_, _ = CONFIG_ELEMENT_ID) {
  return GetConfigJSONInternal(_, _, !0);
}
function GetOptionalConfigJSON(_, _ = CONFIG_ELEMENT_ID) {
  return GetConfigJSONInternal(_, _, !1);
}
function GetConfigJSONInternal(_, _ = CONFIG_ELEMENT_ID, _) {
  let _;
  if (((_ = typeof _ == `string` ? document.getElementById(_) : _), _))
    try {
      return _.hasAttribute(`data-` + _)
        ? JSON.parse(_.getAttribute(`data-` + _))
        : null;
    } catch (_) {
      console.error(
        `Failed to parse config for ` +
          UserConfig$1.steamid +
          ` (` +
          window.location.href +
          `)`,
        _,
      );
    }
  else _ && console.error(`Missing config element #`, _);
}
var g_fallbackSessionID;
function GetSessionID() {
  if (!BCanAccessCookies())
    return (
      (g_fallbackSessionID ||= GenerateNewSessionID()), g_fallbackSessionID
    );
  let _ = GetCookie(`sessionid`);
  return ((_ ||= GenerateNewSessionID()), _);
}
function GenerateSessionID() {
  let _ = ``;
  for (let _ = 0; _ < 24; _++) _ += RandomInt(0, 35).toString(36);
  return _;
}
function GenerateNewSessionID() {
  let _ = GenerateSessionID();
  return (SetCookie(`sessionid`, _, 0), _);
}
function InitConfig(_ = CONFIG_ELEMENT_ID) {
  let _ = {},
    _ = GetConfigJSON(`config`, _);
  _ && (Object.assign(Config$1, _), (_.config = !0));
  let _ = GetConfigJSON(`userinfo`, _);
  _ &&
    (Object.assign(UserConfig$1, _),
    (_.userConfig = !0),
    UserConfig$1.is_support &&
      BIsInPresentationMode() &&
      (UserConfig$1.is_support = !1));
  let _ = GetConfigJSON(`broadcast`, _);
  _ && (Object.assign(BroadcastConfig, _), (_.broadcastConfig = !0));
  let _ = GetConfigJSON(`community`, _);
  _ && (Object.assign(CommunityConfig, _), (_.communityConfig = !0));
  let _ = GetConfigJSON(`event`, _);
  return (
    _ && (Object.assign(EventConfig, _), (_.eventConfig = !0)),
    (bAnyConfigLoaded = !0),
    configLoadWaiters.forEach((_) => _()),
    _
  );
}
var configLoadWaiters = new Set(),
  bAnyConfigLoaded = !1;
function WaitForConfigLoad() {
  return bAnyConfigLoaded
    ? Promise.resolve()
    : new Promise((_) => {
        configLoadWaiters.add(_);
      });
}
var k_PresentationModeCookie = `presentation_mode`;
function BIsInPresentationMode() {
  let _ = null;
  return (
    BCanAccessCookies() && (_ = GetCookie(k_PresentationModeCookie)),
    !!(_ && Number.parseInt(_) === 1)
  );
}
function AssetURL(_) {
  return _;
}
var Config = window.Config ?? Config$1,
  UserConfig = window.UserConfig ?? UserConfig$1,
  WaitForConfigReady = window.Config
    ? () => Promise.resolve()
    : WaitForConfigLoad;
(window.Config && Object.assign(Config$1, window.Config),
  window.UserConfig && Object.assign(UserConfig$1, window.UserConfig),
  window.WebConfig && Object.assign(Config$1, window.WebConfig));
var SteamUIConfig = {
  LAUNCHER_TYPE: 0,
  ON_FRAME: !1,
  IS_STEAMOS: !1,
  IN_GAMESCOPE: !1,
  ON_STEAMOS_CLIENT_BRANCH: !1,
  FORCED_DISPLAY_MODE: void 0,
  ARCH: ``,
  IN_CHROMEOS: !1,
  USE_LONGEST_LOC_STRING: !1,
  SILENT_STARTUP: !1,
  DEV_MODE: !1,
  LOCAL_HOSTNAME: ``,
  PACKAGE_CL: ``,
  CLIENT_SESSION: 0,
};
function GetSteamUIConfig(_) {
  return (
    console.assert(
      !_ || Config.IN_STEAMUI,
      `SteamUIConfig expected but does not exist in the current context!`,
    ),
    Config.IN_STEAMUI ? SteamUIConfig : void 0
  );
}
var WebConfig = InitWebConfig();
function InitWebConfig() {
  return window.WebConfig
    ? window.WebConfig
    : {
        get WEBSITE_ID() {
          return Config$1.WEBSITE_ID;
        },
      };
}
function GetWebConfig(_) {
  return (
    console.assert(
      !_ || !Config.IN_STEAMUI,
      `WebConfig expected but does not exist in the current context!`,
    ),
    Config.IN_STEAMUI ? void 0 : WebConfig
  );
}
var ConfigContext = import_react.createContext({}),
  useConfigContext = (_) => {
    let _ = import_react.useContext(ConfigContext);
    return (
      AssertMsg(
        _?.bSuppressAssert || _.IN_GAMEPADUI !== void 0,
        `Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.`,
      ),
      _
    );
  };
function ConfigContextRoot(_) {
  let { IN_GAMEPADUI: _, IN_DESKTOPUI: _, IN_VR: _, children: _ } = _,
    _ = useConfigContext({
      bSuppressAssert: !0,
    }),
    _ = GetClientSteamType()?.startsWith(`Gamepad VR`) ?? !1,
    _ = import_react.useMemo(
      () => ({
        IN_GAMEPADUI:
          _ ??
          _?.IN_GAMEPADUI ??
          GetClientSteamType()?.startsWith(`Gamepad`) ??
          !1,
        IN_DESKTOPUI: _ ?? _?.IN_DESKTOPUI ?? !1,
        IN_VR: _ ?? _?.IN_VR ?? _,
      }),
      [_, _, _, _, _],
    );
  return import_react.createElement(
    ConfigContext.Provider,
    {
      value: _,
    },
    _,
  );
}
function useInGamepadUI(_) {
  return useConfigContext(_)?.IN_GAMEPADUI;
}
function IsSteamChina() {
  return Config$1.EREALM === ESteamRealm.k_ESteamRealmChina;
}
function IsPlatformWindows() {
  return Config$1.PLATFORM == `windows`;
}
function IsPlatformMac() {
  return Config$1.PLATFORM == `macos`;
}
function BBaseURLMatches(_, _) {
  return _.length != 0 && _.startsWith(_);
}
var UNKNOWN_BASE_URL = `unknown`;
function GET_BASE_URL() {
  if (!window || !window.location || !window.location.href)
    return (console.warn(`Unable to determine base url!`), UNKNOWN_BASE_URL);
  let _ = window.location.href;
  return BBaseURLMatches(_, Config$1.STORE_BASE_URL)
    ? Config$1.STORE_BASE_URL
    : BBaseURLMatches(_, Config$1.COMMUNITY_BASE_URL)
      ? Config$1.COMMUNITY_BASE_URL
      : BBaseURLMatches(_, Config$1.CHAT_BASE_URL)
        ? Config$1.CHAT_BASE_URL
        : BBaseURLMatches(_, Config$1.PARTNER_BASE_URL)
          ? Config$1.PARTNER_BASE_URL
          : BBaseURLMatches(_, Config$1.HELP_BASE_URL)
            ? Config$1.HELP_BASE_URL
            : BBaseURLMatches(_, Config$1.STEAMTV_BASE_URL)
              ? Config$1.STEAMTV_BASE_URL
              : BBaseURLMatches(_, Config$1.STATS_BASE_URL)
                ? Config$1.STATS_BASE_URL
                : BBaseURLMatches(_, Config$1.INTERNAL_STATS_BASE_URL)
                  ? Config$1.INTERNAL_STATS_BASE_URL
                  : BBaseURLMatches(_, Config$1.STORE_CHECKOUT_BASE_URL)
                    ? Config$1.STORE_CHECKOUT_BASE_URL
                    : BBaseURLMatches(_, `https://steamloopback.host`)
                      ? `https://steamloopback.host`
                      : ``;
}
function GET_BASE_WEB_PROPERTY() {
  return `help`;
}
var CAccountPrivacyCookiePreferences = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.version || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            version: {
              _: 1,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            preference_state: {
              _: 2,
              _: ReaderProto.readEnum,
              _: WriterProto.writeEnum,
            },
            content_customization: {
              _: 3,
              _: CAccountPrivacyCookiePreferences_ContentCustomization,
            },
            valve_analytics: {
              _: 4,
              _: CAccountPrivacyCookiePreferences_ValveAnalytics,
            },
            third_party_analytics: {
              _: 5,
              _: CAccountPrivacyCookiePreferences_ThirdPartyAnalytics,
            },
            third_party_content: {
              _: 6,
              _: CAccountPrivacyCookiePreferences_ThirdPartyContent,
            },
            utm_enabled: {
              _: 7,
              _: !0,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  CAccountPrivacyCookiePreferences_ContentCustomization = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.recentapps || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recentapps: {
              _: 1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  CAccountPrivacyCookiePreferences_ValveAnalytics = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.product_impressions_tracking || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            product_impressions_tracking: {
              _: 1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  CAccountPrivacyCookiePreferences_ThirdPartyAnalytics = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.google_analytics || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            google_analytics: {
              _: 1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  CAccountPrivacyCookiePreferences_ThirdPartyContent = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.youtube || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            youtube: {
              _: 1,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            vimeo: {
              _: 2,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            sketchfab: {
              _: 3,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
            twitter: {
              _: 4,
              _: ReaderProto.readBool,
              _: WriterProto.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
    }
  },
  CAccountPrivacy_GetCookiePreferences_Request = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  CAccountPrivacy_GetCookiePreferences_Response = class _
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.preferences || AddAccessors(_._()),
        import_google_protobuf.Message.initialize(
          this,
          _,
          0,
          -1,
          void 0,
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
              _: 1,
              _: CAccountPrivacyCookiePreferences,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= RemapMetadataByField(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return ToObject(_._(), _, _);
    }
    static fromObject(_) {
      return FromObject(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new import_google_protobuf.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return DeserializeBinary(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      SerializeBinary(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new import_google_protobuf.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  AccountPrivacyService;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `AccountPrivacy.GetCookiePreferences#1`,
      initProtoBufMsgForServiceMethod(
        CAccountPrivacy_GetCookiePreferences_Request,
        _,
        _,
      ),
      CAccountPrivacy_GetCookiePreferences_Response,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  _.GetCookiePreferences = _;
})((AccountPrivacyService ||= {}));
function IsCookieAllowedByPreferences(_) {
  if (_.preferenceControls.isTechnicallyNecessary) return !0;
  let _ = GetCurrentCookiePreferences();
  if (!_) return !1;
  switch (_.preference_state) {
    case 1:
    case 0:
      return !0;
    case 2:
    case 4:
      return !1;
  }
  return (
    `IsAllowed` in _.preferenceControls && _.preferenceControls.IsAllowed(_)
  );
}
var k_preferencesCookie = {
    name: `cookieSettings`,
    options: {
      secure: !0,
      httpOnly: !1,
      path: `/`,
      sameSite: `none`,
      maxAge: 31536e6,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  k_sessionIDCookie = {
    name: `sessionid`,
    options: {
      secure: !0,
      path: `/`,
      sameSite: `none`,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  k_responsiveViewPrefsCookie = {
    name: `strResponsiveViewPrefs`,
    options: {
      maxAge: 31536e6,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  k_spoofedSteamIDCookie = {
    name: `steamLoginSpoofSteamID`,
    options: {
      path: `/`,
      secure: !0,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function ReadCookie(_) {
  if (!(`document` in globalThis) || !document.cookie) return;
  let _ = document.cookie.match(`(^|; )` + _.name + `=([^;]*)`);
  if (_ && _[2]) return decodeURIComponent(_[2]);
}
function WriteCookie(_, _) {
  if (!(`document` in globalThis) || !IsCookieAllowedByPreferences(_)) return;
  let _ = _.options?.path ?? `/`,
    _ = ``;
  (_.options?.expires
    ? (_ += `;expires=` + _.options.expires.toUTCString())
    : _.options?.maxAge &&
      (_ += `;max-age=` + Math.floor(_.options.maxAge / 1e3)),
    _.options?.secure && (_ += `;secure`),
    (document.cookie =
      encodeURIComponent(_.name) +
      `=` +
      encodeURIComponent(_) +
      _ +
      `;path=` +
      _));
}
function ClearCookie(_) {
  return WriteCookie(
    {
      ..._,
      options: {
        ..._.options,
        expires: new Date(0),
      },
    },
    ``,
  );
}
function GetCurrentCookiePreferences() {
  return window.SSR?.renderContext?.cookiePrefs;
}
function __decorate(_, _, _, _) {
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
}
var require_react_jsx_runtime_production = __commonJSMin((_) => {
    var _ = Symbol.for(`react.transitional.element`),
      _ = Symbol.for(`react.fragment`);
    function _(_, _, _) {
      var _ = null;
      if (
        (_ !== void 0 && (_ = `` + _),
        _.key !== void 0 && (_ = `` + _.key),
        `key` in _)
      )
        for (var _ in ((_ = {}), _)) _ !== `key` && (_[_] = _[_]);
      else _ = _;
      return (
        (_ = _.ref),
        {
          $$typeof: _,
          type: _,
          key: _,
          ref: _ === void 0 ? null : _,
          props: _,
        }
      );
    }
    ((_.Fragment = _), (_.jsx = _), (_.jsxs = _));
  }),
  require_jsx_runtime = __commonJSMin((_, _) => {
    _.exports = require_react_jsx_runtime_production();
  }),
  scriptRel = (function () {
    let _ = typeof document < `u` && document.createElement(`link`).relList;
    return _ && _.supports && _.supports(`modulepreload`)
      ? `modulepreload`
      : `preload`;
  })(),
  assetsURL = function (_, _) {
    return new URL(_, _).href;
  },
  seen = {},
  isCssPreloadUrl = function (_) {
    return _.pathname.endsWith(`.css`);
  },
  preloadOnce = function (_, _, _) {
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
  __vitePreload = function (_, _, _) {
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
          _ = assetsURL(_, _);
          let _ = _(_),
            _ = isCssPreloadUrl(_);
          return preloadOnce(seen, _.href, () => {
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
              ((_.rel = _ ? `stylesheet` : scriptRel),
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
  IReadonlySubscribableValue = class {
    SyncStore(_) {
      return this.Subscribe(_).Unsubscribe;
    }
    GetValue() {
      return this.Value;
    }
  };
(__decorate([bind], IReadonlySubscribableValue.prototype, `SyncStore`, null),
  __decorate([bind], IReadonlySubscribableValue.prototype, `GetValue`, null));
var ISubscribableValue = class extends IReadonlySubscribableValue {},
  CSubscribableValue = class extends ISubscribableValue {
    m_callbacks;
    m_currentValue;
    m_fnEquals;
    constructor(_, _) {
      (super(),
        (this.m_callbacks = new CCallbackList()),
        (this.m_currentValue = _),
        (this.m_fnEquals = _));
    }
    Set(_) {
      if (this.m_fnEquals) {
        if (this.m_fnEquals(this.m_currentValue, _)) return !1;
      } else if (this.m_currentValue === _) return !1;
      return ((this.m_currentValue = _), this.m_callbacks.Dispatch(_), !0);
    }
    get Value() {
      return this.m_currentValue;
    }
    Subscribe(_) {
      return {
        Unsubscribe: this.m_callbacks.Register(_).Unregister,
      };
    }
    get SubscriberCount() {
      return this.m_callbacks.CountRegistered();
    }
  };
function SubscribableValue(_, _) {
  return new CSubscribableValue(_, _);
}
var CScheduledFunc = class {
  m_schTimer;
  m_fnCallback;
  m_fnOnCancel;
  Schedule(_, _) {
    (this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = _),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, _)));
  }
  AsyncSchedule(_, _) {
    return new Promise((_, _) => {
      (this.Schedule(_, () => {
        (_(), _());
      }),
        (this.m_fnOnCancel = _));
    });
  }
  IsScheduled() {
    return this.m_schTimer !== void 0;
  }
  Cancel() {
    if (this.m_schTimer) {
      let _ = this.m_fnOnCancel;
      (clearTimeout(this.m_schTimer), this.Reset(), _ && _());
    }
  }
  Reset() {
    ((this.m_schTimer = void 0),
      (this.m_fnCallback = void 0),
      (this.m_fnOnCancel = void 0));
  }
  ScheduledInternal() {
    let _ = this.m_fnCallback;
    (this.Reset(), _?.());
  }
};
__decorate([bind], CScheduledFunc.prototype, `ScheduledInternal`, null);
var CUnregisterList = class {
  m_vecCallbacks = [];
  Push(_) {
    this.m_vecCallbacks.push(_);
  }
  PushArrayRemove(_, _) {
    this.m_vecCallbacks.push(() => FindAndRemove(_, _));
  }
  Unregister() {
    for (let _ of this.m_vecCallbacks) _();
    this.m_vecCallbacks = [];
  }
  GetUnregisterFunc() {
    return this.Unregister;
  }
};
__decorate([bind], CUnregisterList.prototype, `Unregister`, null);
var rgSupportedLanguages =
    `sc_schinese.schinese.tchinese.japanese.koreana.thai.arabic.indonesian.malay.bulgarian.czech.danish.german.english.spanish.latam.greek.french.italian.hungarian.dutch.norwegian.polish.portuguese.brazilian.romanian.russian.finnish.swedish.turkish.vietnamese.ukrainian`.split(
      `.`,
    ),
  setSupportedLanguages = new Set(rgSupportedLanguages);
function BIsSupportedLanguage(_) {
  return setSupportedLanguages.has(_);
}
var ISOLanguageNameMap = new Map([
    [`en`, `english`],
    [`de`, `german`],
    [`fr`, `french`],
    [`it`, `italian`],
    [`ko`, `koreana`],
    [`es-419`, `latam`],
    [`es`, `spanish`],
    [`zh`, `schinese`],
    [`zh-cn`, `schinese`],
    [`zh-tw`, `tchinese`],
    [`ru`, `russian`],
    [`ar`, `arabic`],
    [`th`, `thai`],
    [`ja`, `japanese`],
    [`pt-br`, `brazilian`],
    [`pt`, `portuguese`],
    [`pl`, `polish`],
    [`da`, `danish`],
    [`nl`, `dutch`],
    [`fi`, `finnish`],
    [`nb`, `norwegian`],
    [`no`, `norwegian`],
    [`sv`, `swedish`],
    [`hu`, `hungarian`],
    [`cs`, `czech`],
    [`ro`, `romanian`],
    [`tr`, `turkish`],
    [`bg`, `bulgarian`],
    [`el`, `greek`],
    [`uk`, `ukrainian`],
    [`vn`, `vietnamese`],
    [`vi`, `vietnamese`],
    [`id`, `indonesian`],
    [`ms`, `malay`],
  ]),
  LanguageNameToISOMap = new Map();
for (let [_, _] of ISOLanguageNameMap.entries()) LanguageNameToISOMap.set(_, _);
(LanguageNameToISOMap.set(`sc_schinese`, LanguageNameToISOMap.get(`schinese`)),
  LanguageNameToISOMap.set(`korean`, LanguageNameToISOMap.get(`koreana`)));
function GetFallbackForLanguage(_) {
  if (_ !== `english`) return _ === `sc_schinese` ? `schinese` : `english`;
}
function BShouldLanguageUseRTL(_) {
  return _ === `arabic`;
}
function ReplaceArgumentsInString(_, ..._) {
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
var locLoadPromises;
locLoadPromises ??= new Set();
var cachedLocReady = void 0;
function RegisterLocLoadPromise(_) {
  ((locLoadPromises ??= new Set()),
    locLoadPromises.add(_),
    Promise.all(locLoadPromises));
}
var k_mapOptionalAppTypeSuffixes = {
  5: `_Guide`,
  10: `_Hardware`,
  4: `_DLC`,
  11: `_Music`,
  8: `_Series`,
  1: `_Demo`,
};
function GetAppTypeLocKeyVariant(_, _, _) {
  switch (_) {
    case 6:
      return _ + `_Software`;
    case 7:
      return _ + `_Video`;
  }
  let _ = k_mapOptionalAppTypeSuffixes[_];
  return _ && _(_ + _) ? _ + _ : _;
}
function CreateProjectLocalization(_) {
  let _ = new Map();
  async function _() {
    await WaitForConfigReady();
    let _ = CurrentLocalizationSettings(),
      _ = new Set([]);
    for (let _ of _.languages) {
      _.add(_.strLanguage);
      let _ = GetFallbackForLanguage(_.strLanguage);
      _ && _.add(_);
    }
    return Promise.all(
      Array.from(_).map((_) =>
        _(_).then((_) => {
          if (!_) {
            console.error(`Project loc failed to load language ${_}, got ${_}`);
            return;
          }
          let _ = new Map();
          for (let [_, _] of Object.entries(_)) _.set(`#` + _, _);
          _.set(_, _);
        }),
      ),
    );
  }
  let _ = _(),
    _ = !1,
    _ = !1;
  (_.then(() => (_ = !0)).catch((_) => {
    (console.error(`LoadStrings error`, _), (_ = !0));
  }),
    RegisterLocLoadPromise(_));
  function _(_, _) {
    let [_, ..._] = _,
      _ =
        _.get(_.strLanguage)?.get(_) ??
        _.get(GetFallbackForLanguage(_.strLanguage) ?? `english`)?.get(_);
    if (_ !== void 0) return _;
    if (_.length === 0) {
      if (_)
        return (
          console.warn(
            `Couldn't find localization key ${_} after erroring loading strings`,
          ),
          _
        );
      if (!_) throw _;
      return (
        ErrorReportingStore().ReportError(
          Error(`Couldn't find localization key ${_}`),
          {
            bIncludeMessageInIdentifier: !0,
          },
        ),
        console.warn(`Couldn't find localization key ${_}`),
        _
      );
    }
    return _(_, _);
  }
  function _(_, ..._) {
    let _ = CurrentLocalizationSettings().languages;
    return ReplaceArgumentsInString(_(_, _), ..._);
  }
  function _(_) {
    let _ = CurrentLocalizationSettings().languages,
      _ = [
        ..._.map((_) => _.strLanguage),
        GetFallbackForLanguage(_[0].strLanguage),
      ];
    for (let _ of _) {
      if (!_) continue;
      let _ = _.get(_);
      if (_ && _.has(_)) return !0;
    }
    return !1;
  }
  return {
    Localize(_, ..._) {
      return _(_, ..._);
    },
    LocalizeReact(_, ..._) {
      let _ = this.Localize(_);
      if (_ === _) return _;
      let _ = [],
        _ = /(.*?)%(\d+)\$s/g,
        _ = 0,
        _;
      for (; (_ = _.exec(_));) {
        ((_ += _[0].length), _.push(_[1]));
        let _ = parseInt(_[2]);
        _ >= 1 && _ <= _.length && _.push(_[_ - 1]);
      }
      return (
        _.push(_.slice(_)),
        import_react.createElement(import_react.Fragment, null, ..._)
      );
    },
    LocalizePlural(_, _, ..._) {
      return _(_ === 1 || _ === `1` ? _ : _ + `_Plural`, _, ..._);
    },
    GetAppTypeLocKey(_, _) {
      return GetAppTypeLocKeyVariant(_, _, _);
    },
    GetAppTypePluralLocKey(_, _) {
      switch (_) {
        case 6:
          return _ + `_Software`;
        case 7:
          return _ + `_Video`;
        default:
          return _;
      }
    },
    LocalizeInSpecificLang(_, _, ..._) {
      return ReplaceArgumentsInString(_(_, [_]), ..._);
    },
    Ready() {
      return _;
    },
    IsReady() {
      return _;
    },
    HasKey: _,
  };
}
function CurrentLocalizationSettings() {
  if (!BIsSupportedLanguage(Config.LANGUAGE))
    throw `unknown language ${Config.LANGUAGE}`;
  return {
    languages: [
      {
        strLanguage: Config.LANGUAGE,
        strISOCode: LanguageNameToISOMap.get(Config.LANGUAGE),
        eSource: 5,
      },
    ],
  };
}
function setRef(_, _) {
  _ != null &&
    (typeof _ == `function` ? _(_) : `current` in _ && (_.current = _));
}
function useMultipleRefs(..._) {
  return import_react.useCallback((_) => {
    for (let _ of _) setRef(_, _);
  }, _);
}
function MergeRefs(..._) {
  if (_ && _.length !== 0)
    return _.length === 1
      ? _[0]
      : (_) =>
          _.forEach((_) => {
            if (_) typeof _ == `function` ? _(_) : (_.current = _);
            else return;
          });
}
function useRefCallbackWithCleanup(_, _) {
  let _ = import_react.useRef(void 0);
  return import_react.useCallback((_) => {
    (_.current && _.current(), (_.current = _(_)));
  }, _);
}
function useRefAndShareWith(_) {
  let _ = import_react.useRef(null);
  return {
    refWithValue: _,
    refForElement: useMultipleRefs(_, _),
  };
}
function useSetRef(_, _) {
  let _ = import_react.useRef(!1);
  (import_react.useLayoutEffect(
    () => () => {
      _.current && setRef(_, void 0);
    },
    [_],
  ),
    import_react.useLayoutEffect(() => {
      (_ || _.current) && (setRef(_, _), (_.current = !!_));
    }, [_, _]));
}
function useForceUpdate() {
  let [, _] = import_react.useState(0);
  return import_react.useCallback(() => _((_) => _ + 1), []);
}
function useCallbackList(_, _) {
  import_react.useLayoutEffect(() => {
    if (!_ || !_) return;
    let _ = _.Register(_);
    return () => _.Unregister();
  }, [_, _]);
}
function NoOpSubscribe(_) {
  return NoOpGetSnapshot;
}
function NoOpGetSnapshot() {}
function useSubscribableValue(_) {
  return import_react.useSyncExternalStore(
    _ ? _.SyncStore : NoOpSubscribe,
    _ ? _.GetValue : NoOpGetSnapshot,
    _ ? _.GetValue : NoOpGetSnapshot,
  );
}
function useValueWasTrueRecently(_, _) {
  let [_, _] = import_react.useState(_);
  return (
    import_react.useEffect(() => {
      if (_) _(!0);
      else {
        let _ = window.setTimeout(() => _(!1), _);
        return () => window.clearTimeout(_);
      }
    }, [_, _]),
    _
  );
}
function useValueWasTrueRecentlyOrNow(_, _) {
  return useValueWasTrueRecently(_, _) || _;
}
function useLazyMemoizedValue(_) {
  let _ = import_react.useRef(void 0);
  return import_react.useCallback(
    () => (
      (_.current && _.current.factory == _) ||
        (_.current = {
          value: _(),
          factory: _,
        }),
      _.current.value
    ),
    [_],
  );
}
var require_classnames = __commonJSMin((_, _) => {
    (function () {
      var _ = {}.hasOwnProperty;
      function _() {
        for (var _ = ``, _ = 0; _ < arguments.length; _++) {
          var _ = arguments[_];
          _ && (_ = _(_, _(_)));
        }
        return _;
      }
      function _(_) {
        if (typeof _ == `string` || typeof _ == `number`) return _;
        if (typeof _ != `object`) return ``;
        if (Array.isArray(_)) return _.apply(null, _);
        if (
          _.toString !== Object.prototype.toString &&
          !_.toString.toString().includes(`[native code]`)
        )
          return _.toString();
        var _ = ``;
        for (var _ in _) _.call(_, _) && _[_] && (_ = _(_, _));
        return _;
      }
      function _(_, _) {
        return _ ? (_ ? _ + ` ` + _ : _ + _) : _;
      }
      _ !== void 0 && _.exports
        ? ((_.default = _), (_.exports = _))
        : typeof define == `function` &&
            typeof define.amd == `object` &&
            define.amd
          ? define(`classnames`, [], function () {
              return _;
            })
          : (window.classNames = _);
    })();
  }),
  import_classnames = __toESM(require_classnames(), 1),
  ENavigationSoundType = (function (_) {
    return (
      (_[(_.LaunchGame = 0)] = `LaunchGame`),
      (_[(_.FriendMessage = 1)] = `FriendMessage`),
      (_[(_.ChatMention = 2)] = `ChatMention`),
      (_[(_.ChatMessage = 3)] = `ChatMessage`),
      (_[(_.ToastMessage = 4)] = `ToastMessage`),
      (_[(_.ToastAchievement = 5)] = `ToastAchievement`),
      (_[(_.ToastMisc = 6)] = `ToastMisc`),
      (_[(_.ToastMiscShort = 7)] = `ToastMiscShort`),
      (_[(_.FriendOnline = 8)] = `FriendOnline`),
      (_[(_.FriendInGame = 9)] = `FriendInGame`),
      (_[(_.VolSound = 10)] = `VolSound`),
      (_[(_.ShowModal = 11)] = `ShowModal`),
      (_[(_.HideModal = 12)] = `HideModal`),
      (_[(_.IntoGameDetail = 13)] = `IntoGameDetail`),
      (_[(_.OutOfGameDetail = 14)] = `OutOfGameDetail`),
      (_[(_.PagedNavigation = 15)] = `PagedNavigation`),
      (_[(_.ToggleOn = 16)] = `ToggleOn`),
      (_[(_.ToggleOff = 17)] = `ToggleOff`),
      (_[(_.SliderUp = 18)] = `SliderUp`),
      (_[(_.SliderDown = 19)] = `SliderDown`),
      (_[(_.ChangeTabs = 20)] = `ChangeTabs`),
      (_[(_.DefaultOk = 21)] = `DefaultOk`),
      (_[(_.OpenSideMenu = 22)] = `OpenSideMenu`),
      (_[(_.CloseSideMenu = 23)] = `CloseSideMenu`),
      (_[(_.BasicNav = 24)] = `BasicNav`),
      (_[(_.FailedNav = 25)] = `FailedNav`),
      (_[(_.Typing = 26)] = `Typing`),
      (_[(_.TimerExpired = 27)] = `TimerExpired`),
      (_[(_.Screenshot = 28)] = `Screenshot`),
      _
    );
  })({}),
  CAudioStore = class {
    m_fnCallbackOnPlaySound = new CCallbackList();
    m_fnCallbackOnSuppressSound = new CCallbackList();
    RegisterCallbackOnPlaySound(_) {
      return this.m_fnCallbackOnPlaySound.Register(_);
    }
    PlayNavSound(_, _) {
      this.m_fnCallbackOnPlaySound.Dispatch(_, _);
    }
    RegisterCallbackOnSuppressNavImminentSound(_) {
      return this.m_fnCallbackOnSuppressSound.Register(_);
    }
    SuppressImminentNavSound() {
      this.m_fnCallbackOnSuppressSound.Dispatch();
    }
  },
  AudioStore = new CAudioStore();
function IsHTMLElement$1(_) {
  return _ != null && _.focus !== void 0;
}
function BIsParentOrSelf(_, _) {
  let _ = _;
  for (; _;) {
    if (
      (_.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (_ = _.parentNode.host),
      _ == _)
    )
      return !0;
    _ = _.parentElement;
  }
  return !1;
}
function DistanceBetweenRects$1(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function ClientRectToScreenCoords(_, _) {
  return {
    top: _.screenTop + _.top,
    bottom: _.screenTop + _.bottom,
    left: _.screenLeft + _.left,
    right: _.screenLeft + _.right,
  };
}
function ComputeZoomForElement(_) {
  let _ = 1,
    _ = _;
  for (; _ != null && _.tagName != `HTML`;) {
    let _ = getComputedStyle(_);
    if (_.zoom) {
      let _ = Number.parseFloat(_.zoom);
      isNaN(_) || (_ *= _);
    }
    _ = _.parentElement;
  }
  return _;
}
function GetOwningWindowForEvent(_) {
  let _;
  return (
    _ &&
      IsHTMLElement$1(_.currentTarget) &&
      (_ = _.currentTarget.ownerDocument.defaultView),
    _
  );
}
function GetOwningWindowForElement$1(_) {
  let _;
  return (_ && (_ = _.ownerDocument.defaultView), _);
}
function RunWhenDocumentReady(_) {
  document.readyState == `loading`
    ? document.addEventListener(`DOMContentLoaded`, _)
    : _();
}
function GetStyleSheetLinks() {
  return GetStyleSheetLinksForDocument(document);
}
function GetStyleSheetLinksForDocument(_) {
  let _ = {};
  return (
    _.querySelectorAll(`link[rel="stylesheet"]`).forEach((_) => {
      _[_.href] = _;
    }),
    _
  );
}
function AddMissingStylesheetsToWindow(_, _) {
  AddStylesheetsToDocument(_.document, _, !0);
}
function AddStylesheetsToDocument(_, _, _) {
  let _ = Object.assign({}, _),
    _ = _.getElementsByTagName(`head`)[0],
    _ = _.getElementsByTagName(`link`),
    _ = _.length;
  for (let _ = 0; _ < _; ++_) {
    let _ = _[_];
    _[_.href] ? delete _[_.href] : _ && _.parentNode?.removeChild(_);
  }
  let _ = [];
  for (let _ in _) {
    let _ = _[_],
      _ = _.createElement(`link`);
    for (let _ = 0; _ < _.attributes.length; _++) {
      let _ = _.attributes.item(_);
      _.setAttribute(_.name, _.value);
    }
    _.push(_);
  }
  return (_.prepend(..._), _);
}
function HandleMutationAddAndRemove(_, _, _) {
  if (_.type === `childList`) {
    for (let _ = 0; _ < _.addedNodes.length; _++) {
      let _ = _.addedNodes[_];
      if (_.nodeType === Node.ELEMENT_NODE) {
        let _ = _;
        _.parentElement && _(_);
      }
    }
    for (let _ = 0; _ < _.removedNodes.length; _++) {
      let _ = _.removedNodes[_];
      _.nodeType === Node.ELEMENT_NODE && _?.(_);
    }
  }
}
var CLog = class {
  m_sName;
  m_fnIdGenerator = void 0;
  constructor(_, _) {
    ((this.m_sName = _),
      (this.m_fnIdGenerator = _),
      CLogManager.Get().RegisterLogName(_));
  }
  Debug(..._) {
    this.Log(0, ..._);
  }
  Info(..._) {
    this.Log(1, ..._);
  }
  Warning(..._) {
    this.Log(2, ..._);
  }
  Error(..._) {
    this.Log(3, ..._);
  }
  Assert(_, ..._) {
    _ || this.Log(3, `Assertion failed:`, ..._);
  }
  IsDebugEnabled() {
    return CLogManager.Get().IsDebugLogEnabled(this.m_sName);
  }
  Log(_, ..._) {
    let _ = CLogManager.Get().IsDebugLogEnabled(this.m_sName);
    if (_ == 0 && !_) return;
    let _ = this.m_sName,
      _ = this.m_fnIdGenerator?.() ?? null;
    _ != null && (_ += ` (` + _ + `)`);
    let _ = CLogManager.Get().IncludeBacktraceInLog,
      _ = CLogManager.Get().AllowCSSInLogStyling;
    printStyledLogLine(_, _, _, _, _, this.m_sName, ..._);
  }
};
(__decorate([bind], CLog.prototype, `Debug`, null),
  __decorate([bind], CLog.prototype, `Info`, null),
  __decorate([bind], CLog.prototype, `Warning`, null),
  __decorate([bind], CLog.prototype, `Error`, null),
  __decorate([bind], CLog.prototype, `Assert`, null));
var CLogManager = class _ {
  static k_EnabledLogNames_StorageKey = `EnabledWebLogs`;
  static k_IncludeBacktraceInLog_StorageKey = `IncludeBacktraceInLog`;
  static k_AllowCSSInLogColors_StorageKey = `AllowCSSInLogColors`;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_bAllowCSSInLogStyling = !0;
  m_SettingsChangedCallback = new CCallbackList();
  m_bLoading = !0;
  constructor() {
    this.LoadSettings();
  }
  LogAsLogManager(..._) {
    printStyledLogLine(
      1,
      !0,
      this.IncludeBacktraceInLog,
      this.AllowCSSInLogStyling,
      `LogManager`,
      `LogManager`,
      ..._,
    );
  }
  async LoadSettings() {
    let _ = (_, _) => {
      try {
        let _ = localStorage.getItem(_);
        return _ ? JSON.parse(_) : _;
      } catch {
        return _;
      }
    };
    ((this.m_bIncludeBacktraceInLog = !!_(
      _.k_IncludeBacktraceInLog_StorageKey,
      !1,
    )),
      (this.m_bAllowCSSInLogStyling = !!_(
        _.k_AllowCSSInLogColors_StorageKey,
        !0,
      )));
    let _ = _(_.k_EnabledLogNames_StorageKey, void 0);
    if (Array.isArray(_)) {
      this.m_setEnabledDebugLogs = new Set(_);
      for (let _ of _) this.m_setKnownDebugLogs.add(_);
      this.LogAsLogManager(
        `Loaded debug enabled log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
    }
    ((this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch());
  }
  async SaveSettings() {
    (localStorage.setItem(
      _.k_EnabledLogNames_StorageKey,
      JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
    ),
      localStorage.setItem(
        _.k_IncludeBacktraceInLog_StorageKey,
        JSON.stringify(this.m_bIncludeBacktraceInLog),
      ),
      localStorage.setItem(
        _.k_AllowCSSInLogColors_StorageKey,
        JSON.stringify(this.m_bAllowCSSInLogStyling),
      ),
      this.LogAsLogManager(
        `Saved enabled debug log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      ));
  }
  PrintEnabledLogs(..._) {
    (_ &&
      _.length > 0 &&
      console.warn(
        `Use DebugLogEnable( '${_.join(`', '`)}' ) to enable a log. This function tells you what's enabled.`,
      ),
      this.LogAsLogManager(
        `Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      ));
  }
  static Get() {
    return (
      globalThis.g_LogManager ?? (globalThis.g_LogManager = new _()),
      globalThis.g_LogManager
    );
  }
  get Loading() {
    return this.m_bLoading;
  }
  get LogNames() {
    return this.m_setKnownDebugLogs.values();
  }
  RegisterLogName(_) {
    this.m_setKnownDebugLogs.add(_);
  }
  IsLogName(_) {
    return this.m_setKnownDebugLogs.has(_);
  }
  IsDebugLogEnabled(_) {
    return this.m_setEnabledDebugLogs.has(_);
  }
  async ToggleDebugLogEnabled(_) {
    this.SetDebugLogEnabled(_, !this.IsDebugLogEnabled(_));
  }
  async SetDebugLogEnabled(_, _) {
    this.IsLogName(_)
      ? (_
          ? this.m_setEnabledDebugLogs.add(_)
          : this.m_setEnabledDebugLogs.delete(_),
        this.m_SettingsChangedCallback.Dispatch(),
        await this.SaveSettings())
      : console.warn(
          `No log named "${_}", available logs:`,
          this.GetLogNames(),
        );
  }
  async SetDebugLogsEnabled(_, ..._) {
    _.forEach((_) => this.SetDebugLogEnabled(_, _));
  }
  async SetAllDebugLogsEnabled(_) {
    ((this.m_setEnabledDebugLogs = _
      ? new Set(this.m_setKnownDebugLogs)
      : new Set()),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  RegisterForSettingsChanges(_) {
    return this.m_SettingsChangedCallback.Register(_);
  }
  get IncludeBacktraceInLog() {
    return this.m_bIncludeBacktraceInLog;
  }
  async SetIncludeBacktraceInLog(_) {
    ((this.m_bIncludeBacktraceInLog = _),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  get AllowCSSInLogStyling() {
    return this.m_bAllowCSSInLogStyling;
  }
  async SetAllowCSSInLogStyling(_) {
    ((this.m_bAllowCSSInLogStyling = _),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  GetLogNames() {
    return Array.from(this.LogNames).sort();
  }
};
function colorForString(_) {
  let _ = 0;
  for (let _ = 0; _ < _.length; _++) _ = _.charCodeAt(_) + ((_ << 5) - _);
  return [(_ | 0) & 255, (_ >> 8) & 255, (_ >> 16) & 255];
}
function shouldUseBlack(_) {
  return (_[0] * 299 + _[1] * 587 + _[2] * 114) / 1e3 >= 128;
}
function emojiForLogLevel(_) {
  switch (_) {
    case 0:
      return String.fromCodePoint(128027);
    case 1:
      return String.fromCodePoint(8505);
    case 2:
      return String.fromCodePoint(9888);
    case 3:
      return String.fromCodePoint(128165);
  }
}
function printStyledLogLine(_, _, _, _, _, _, ..._) {
  let _ = _;
  _ && (_ = emojiForLogLevel(_) + ` ` + _);
  let _;
  if (_ && _) {
    let _ = colorForString(_).map((_, _) =>
        Math.round(
          Math.max(0, Math.min(255, ((_ / 255 - 0.5) * 0.8 + 0.15) * 255)),
        ),
      ),
      _ = shouldUseBlack(_),
      _ = _.length >= 1 && typeof _[0] == `string` && _[0].includes(`%c`),
      _ = _ && _.shift();
    _ = [
      `%c${_}%c:${_ ? ` %c` + _ : ``}`,
      `color: ${_ ? `black` : `white`}; background: rgb(${_.join(`,`)}); padding: 0 1ch; border-radius: 3px;`,
      `color: transparent; margin-right: -1ch`,
      ...(_ ? [``] : []),
      ..._,
    ];
  } else _ = [`${_}:`, ..._];
  if (_)
    (console.groupCollapsed(..._),
      console.trace(`Callstack`),
      console.groupEnd());
  else
    switch (_) {
      case 0:
      case 1:
        console.log(..._);
        break;
      case 2:
        console.warn(..._);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ..._) : console.error(..._);
    }
}
((window.DebugLogEnable = (..._) =>
  CLogManager.Get().SetDebugLogsEnabled(!0, ..._)),
  (window.DebugLogDisable = (..._) =>
    CLogManager.Get().SetDebugLogsEnabled(!1, ..._)),
  (window.DebugLogEnableAll = () =>
    CLogManager.Get().SetAllDebugLogsEnabled(!0)),
  (window.DebugLogDisableAll = () =>
    CLogManager.Get().SetAllDebugLogsEnabled(!1)),
  (window.DebugLogEnableBacktrace = () =>
    CLogManager.Get().SetIncludeBacktraceInLog(!0)),
  (window.DebugLogDisableBacktrace = () =>
    CLogManager.Get().SetIncludeBacktraceInLog(!1)),
  (window.DebugLogNames = () => CLogManager.Get().GetLogNames()),
  (window.DebugLogEnabled = (..._) => CLogManager.Get().PrintEnabledLogs(..._)),
  (window.EnableSteamConsole = (_ = !0) =>
    CLogManager.Get().SetDebugLogEnabled(`SteamClient`, _)));
var EGamepadButton = (function (_) {
  return (
    (_[(_.INVALID = 0)] = `INVALID`),
    (_[(_._ = 1)] = `OK`),
    (_[(_.CANCEL = 2)] = `CANCEL`),
    (_[(_.SECONDARY = 3)] = `SECONDARY`),
    (_[(_.OPTIONS = 4)] = `OPTIONS`),
    (_[(_.BUMPER_LEFT = 5)] = `BUMPER_LEFT`),
    (_[(_.BUMPER_RIGHT = 6)] = `BUMPER_RIGHT`),
    (_[(_.TRIGGER_LEFT = 7)] = `TRIGGER_LEFT`),
    (_[(_.TRIGGER_RIGHT = 8)] = `TRIGGER_RIGHT`),
    (_[(_.DIR_UP = 9)] = `DIR_UP`),
    (_[(_.DIR_DOWN = 10)] = `DIR_DOWN`),
    (_[(_.DIR_LEFT = 11)] = `DIR_LEFT`),
    (_[(_.DIR_RIGHT = 12)] = `DIR_RIGHT`),
    (_[(_.SELECT = 13)] = `SELECT`),
    (_[(_.START = 14)] = `START`),
    (_[(_.LSTICK_CLICK = 15)] = `LSTICK_CLICK`),
    (_[(_.RSTICK_CLICK = 16)] = `RSTICK_CLICK`),
    (_[(_.LSTICK_TOUCH = 17)] = `LSTICK_TOUCH`),
    (_[(_.RSTICK_TOUCH = 18)] = `RSTICK_TOUCH`),
    (_[(_.LPAD_TOUCH = 19)] = `LPAD_TOUCH`),
    (_[(_.LPAD_CLICK = 20)] = `LPAD_CLICK`),
    (_[(_.RPAD_TOUCH = 21)] = `RPAD_TOUCH`),
    (_[(_.RPAD_CLICK = 22)] = `RPAD_CLICK`),
    (_[(_.REAR_LEFT_UPPER = 23)] = `REAR_LEFT_UPPER`),
    (_[(_.REAR_LEFT_LOWER = 24)] = `REAR_LEFT_LOWER`),
    (_[(_.REAR_RIGHT_UPPER = 25)] = `REAR_RIGHT_UPPER`),
    (_[(_.REAR_RIGHT_LOWER = 26)] = `REAR_RIGHT_LOWER`),
    (_[(_.STEAM_GUIDE = 27)] = `STEAM_GUIDE`),
    (_[(_.STEAM_QUICK_MENU = 28)] = `STEAM_QUICK_MENU`),
    (_[(_.DUMMY_INPUT = 29)] = `DUMMY_INPUT`),
    _
  );
})({});
function BActionDescriptionPropHasOptions(_) {
  return typeof _ == `object` && !!_ && `value` in _;
}
function BActionDescriptionsEqual(_, _) {
  return BActionDescriptionPropHasOptions(_) &&
    BActionDescriptionPropHasOptions(_)
    ? _.value === _.value &&
        !!_.bShowOnLeft == !!_.bShowOnLeft &&
        !!_.bShowOnFloatingVRFooter == !!_.bShowOnFloatingVRFooter
    : _ === _;
}
var EFocusSource = (function (_) {
    return (
      (_[(_.GAMEPAD = 0)] = `GAMEPAD`),
      (_[(_.KEYBOARD = 1)] = `KEYBOARD`),
      (_[(_.APPLICATION = 2)] = `APPLICATION`),
      (_[(_.BROWSER = 3)] = `BROWSER`),
      (_[(_.AUTOFOCUS = 4)] = `AUTOFOCUS`),
      _
    );
  })({}),
  g_rgButtonToLogicalEventMapping = {
    [EGamepadButton._]: `vgp_onok`,
    [EGamepadButton.CANCEL]: `vgp_oncancel`,
    [EGamepadButton.SECONDARY]: `vgp_onsecondaryaction`,
    [EGamepadButton.OPTIONS]: `vgp_onoptions`,
    [EGamepadButton.START]: `vgp_onmenu`,
  };
function RegisterGamepadEvent(_, _, _) {
  return (_.addEventListener(_, _), () => UnregisterGamepadEvent(_, _, _));
}
function UnregisterGamepadEvent(_, _, _) {
  _.removeEventListener(_, _);
}
function RegisterGamepadButtonDownEvent(_, _) {
  return RegisterGamepadEvent(_, `vgp_onbuttondown`, _);
}
function RegisterGamepadButtonUpEvent(_, _) {
  return RegisterGamepadEvent(_, `vgp_onbuttonup`, _);
}
function RegisterGamepadOKEvent(_, _) {
  return RegisterGamepadEvent(
    _,
    `vgp_onok`,
    WrapEventHandlerInStopPropagation(_),
  );
}
function RegisterGamepadCancelEvent(_, _) {
  return RegisterGamepadEvent(
    _,
    `vgp_oncancel`,
    WrapEventHandlerInStopPropagation(_),
  );
}
function RegisterGamepadSecondaryActionEvent(_, _) {
  return RegisterGamepadEvent(
    _,
    `vgp_onsecondaryaction`,
    WrapEventHandlerInStopPropagation(_),
  );
}
function RegisterGamepadOptionsEvent(_, _) {
  return RegisterGamepadEvent(
    _,
    `vgp_onoptions`,
    WrapEventHandlerInStopPropagation(_),
  );
}
function RegisterGamepadMenuEvent(_, _) {
  return RegisterGamepadEvent(
    _,
    `vgp_onmenu`,
    WrapEventHandlerInStopPropagation(_),
  );
}
function RegisterGamepadDirectionEvent(_, _) {
  return RegisterGamepadEvent(
    _,
    `vgp_ondirection`,
    WrapEventHandlerInStopPropagation(_),
  );
}
function RegisterGamepadFocusEvent(_, _) {
  return RegisterGamepadEvent(_, `vgp_onfocus`, _);
}
function RegisterGamepadBlurEvent(_, _) {
  return RegisterGamepadEvent(_, `vgp_onblur`, _);
}
function RegisterGamepadRequestFocusEvent(_, _) {
  return RegisterGamepadEvent(
    _,
    `vgp_requestfocus`,
    WrapEventHandlerInStopPropagation(_),
  );
}
function WrapEventHandlerInStopPropagation(_) {
  return (_) => {
    _(_) !== !1 && (_.stopPropagation(), _.preventDefault());
  };
}
function ConsolidateActionDescriptionMap(_) {
  let {
      onOKActionDescription: _,
      onCancelActionDescription: _,
      onSecondaryActionDescription: _,
      onOptionsActionDescription: _,
      onMenuActionDescription: _,
      actionDescriptionMap: _,
    } = _,
    _ = {
      ..._,
    };
  return (
    _ !== void 0 && (_[EGamepadButton._] = _),
    _ !== void 0 && (_[EGamepadButton.CANCEL] = _),
    _ !== void 0 && (_[EGamepadButton.SECONDARY] = _),
    _ !== void 0 && (_[EGamepadButton.OPTIONS] = _),
    _ !== void 0 && (_[EGamepadButton.START] = _),
    _
  );
}
var import_jsx_runtime = require_jsx_runtime(),
  Log$3 = new CLog(`GamepadEvents`).Debug;
function useGamepadEvents(_, _, _) {
  (_ === void 0 &&
    (_ = [
      _.onButtonDown,
      _.onButtonUp,
      _.onOKButton,
      _.onCancelButton,
      _.onSecondaryButton,
      _.onOptionsButton,
      _.onMenuButton,
      _.onGamepadDirection,
      _.onGamepadFocus,
      _.onGamepadBlur,
    ]),
    import_react.useEffect(() => {
      let _ = _.current,
        _ = [];
      return (
        _ &&
          (_.onButtonDown &&
            _.push(RegisterGamepadButtonDownEvent(_, _.onButtonDown)),
          _.onButtonUp && _.push(RegisterGamepadButtonUpEvent(_, _.onButtonUp)),
          _.onOKButton && _.push(RegisterGamepadOKEvent(_, _.onOKButton)),
          _.onCancelButton &&
            _.push(RegisterGamepadCancelEvent(_, _.onCancelButton)),
          _.onSecondaryButton &&
            _.push(RegisterGamepadSecondaryActionEvent(_, _.onSecondaryButton)),
          _.onOptionsButton &&
            _.push(RegisterGamepadOptionsEvent(_, _.onOptionsButton)),
          _.onMenuButton && _.push(RegisterGamepadMenuEvent(_, _.onMenuButton)),
          _.onGamepadDirection &&
            _.push(RegisterGamepadDirectionEvent(_, _.onGamepadDirection)),
          _.onGamepadFocus &&
            _.push(RegisterGamepadFocusEvent(_, _.onGamepadFocus)),
          _.onGamepadBlur &&
            _.push(RegisterGamepadBlurEvent(_, _.onGamepadBlur))),
        () => _.forEach((_) => _())
      );
    }, _));
}
function StopGamepadEventPropagation(_) {
  return (_.stopPropagation(), !1);
}
function useRootGamepadEvents(_, _, _) {
  let { onButtonDown: _, ..._ } = _,
    _ = import_react.useCallback(
      (_) => {
        (_ && _(_),
          Log$3(
            `Gamepad Event fired:`,
            _.detail.button,
            `, handled:`,
            _ != null,
            `, propagation stopped:`,
            _.cancelBubble,
          ),
          !_.cancelBubble && _.OnRootButtonDown(_));
      },
      [_, _],
    );
  (useGamepadEvents(_, _),
    useGamepadEvents(
      {
        onButtonDown: _,
        onButtonUp: StopGamepadEventPropagation,
        onOKButton: StopGamepadEventPropagation,
        onCancelButton: StopGamepadEventPropagation,
        onSecondaryButton: StopGamepadEventPropagation,
        onOptionsButton: StopGamepadEventPropagation,
        onMenuButton: StopGamepadEventPropagation,
        onGamepadDirection: StopGamepadEventPropagation,
        onGamepadFocus: StopGamepadEventPropagation,
        onGamepadBlur: StopGamepadEventPropagation,
      },
      _,
      [_],
    ));
}
var Logger$1 = new CLog(`FocusHistory`),
  Log$2 = Logger$1.Debug,
  k_EFocusHistoryRestoreBehavior_eRestoreFocusIfHadFocus = 0,
  k_EFocusHistoryRestoreBehavior_eRestoreFocusAlways = 1,
  CFocusNavHistoryBase = class _ {
    m_root;
    constructor(_) {
      this.m_root = _;
    }
    static SerializeNavState(_, _ = !0, _ = !0) {
      return {
        root: _.SerializeNavNode(_, _, _),
        bHadFocus: _.BFocusWithin() && _.Tree.BIsActiveWithinContext(),
      };
    }
    static SerializeNavNode(_, _ = !0, _ = !0) {
      let _,
        [_, _] = _.GetChildren();
      _.length &&
        _ != -1 &&
        _ &&
        (_ = _.map((_, _) => _.SerializeNavNode(_, _ == _ || _, _)));
      let _ = {
        rgChildren: _,
      };
      return (
        _.NavKey && (_.sNavKey = _.NavKey), _ != -1 && (_.iActiveChild = _), _
      );
    }
    static RestoreSerializedNavState(_, _, _ = 0) {
      let { root: _, bHadFocus: _ } = _;
      _.Tree.Controller.RestoreHistoryTransaction(() => {
        (_.RestoreSerializedNavNode(_, _),
          (_ == 1 || (_ == 0 && _)) && _.BTakeFocus(EFocusSource.APPLICATION));
      });
    }
    static RestoreSerializedNavNode(_, _, _ = 0) {
      let { sNavKey: _, iActiveChild: _ = -1, rgChildren: _ } = _;
      (_ && AssertMsg(_ == _.NavKey, `navkey mismatch`), _.SetActiveChild(_));
      let _ = Logger$1.IsDebugEnabled() ? `[${_.Tree._}]${PrefixStars(_)}` : ``;
      if (_ && _.length) {
        let [_] = _.GetChildren();
        if (_ != -1 && Logger$1.IsDebugEnabled()) {
          let _ = _.length != _.length;
          Log$2(
            `${_}Restoring node ${_.NavKey} which had active child ${_} of ${_.length}${_ ? `- now ${_.length} children.` : ``}`,
          );
        }
        let _ = new Map();
        _.forEach((_) => {
          _.NavKey && _.set(_.NavKey, _);
        });
        for (let _ of _) {
          if (!_.sNavKey) continue;
          let _ = _.get(_.sNavKey);
          _ && _.RestoreSerializedNavNode(_, _, _ + 1);
        }
        if (_ != -1 && _[_]?.sNavKey) {
          let _ = _.get(_[_].sNavKey);
          (Log$2(
            `${_}Restoring node ${_.NavKey}, child with focus: ${_[_].sNavKey} ${_ === void 0 ? `MISSING!!` : ``}`,
          ),
            _ && _.SetActiveChild(_.indexOf(_)));
        }
        let _ = 0,
          _ = 0;
        for (; _ < _.length && _ < _.length;) {
          for (; _ < _.length && _[_].NavKey;) _++;
          for (; _ < _.length && _[_].sNavKey;) _++;
          if (_ >= _.length || _ >= _.length) break;
          (_.RestoreSerializedNavNode(_[_], _[_], _ + 1), _++, _++);
        }
      }
    }
  };
function GetHistorySnapshot(_) {
  return CFocusNavHistoryBase.SerializeNavState(_, !0, !1);
}
function RestoreHistorySnapshot(_, _, _ = 0) {
  return CFocusNavHistoryBase.RestoreSerializedNavState(_, _, _);
}
var CFocusNavHistory = class extends CFocusNavHistoryBase {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(
        CFocusNavHistoryBase.SerializeNavState(this.m_root),
      );
    }
    PopState(_ = 0) {
      this.m_rgHistory.length &&
        CFocusNavHistoryBase.RestoreSerializedNavState(
          this.m_root,
          this.m_rgHistory.pop(),
          _,
        );
    }
  },
  CNamedFocusNavHistory = class extends CFocusNavHistoryBase {
    m_mapHistory = new Map();
    SaveState(_) {
      this.m_mapHistory.set(
        _,
        CFocusNavHistoryBase.SerializeNavState(this.m_root),
      );
    }
    RestoreState(_, _ = 0) {
      let _ = this.m_mapHistory.get(_);
      return _
        ? (console.log(`Restoring history for state ${_}`),
          CFocusNavHistoryBase.RestoreSerializedNavState(this.m_root, _, _),
          !0)
        : !1;
    }
  };
function PrefixStars(_) {
  if (_ == 0) return ``;
  let _ = ``;
  for (let _ = 0; _ < _; _++) _ += `*`;
  return ((_ += ` `), _);
}
function IsHTMLElement(_) {
  return _ != null && _.focus !== void 0;
}
function DistanceBetweenRects(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function GetOwningWindowForElement(_) {
  let _;
  return (_ && (_ = _.ownerDocument.defaultView), _);
}
function FindScrollableAncestor(_, _) {
  let _ = _?.parentElement;
  for (; _;) {
    if (IsHTMLElement(_)) {
      let _ = window.getComputedStyle(_);
      if (
        _.position == `fixed` ||
        _.position == `sticky` ||
        ((!_ || _ == `x`) &&
          (_.overflowX == `scroll` || _.overflowX == `auto`)) ||
        ((!_ || _ == `y`) && (_.overflowY == `scroll` || _.overflowY == `auto`))
      )
        break;
    }
    _ = _.parentElement;
  }
  return IsHTMLElement(_) ? _ : null;
}
function FindAncestrally(_, _) {
  let _ = _;
  for (; _;) {
    if (_(_)) return _;
    _ = _.parentElement;
  }
}
function BIsElementScrollableOnAxis(_, _) {
  if (!(`ownerDocument` in _)) return !0;
  let _ = _.ownerDocument.defaultView.getComputedStyle(_),
    _ = _ === `x` ? _.overflowX : _.overflowY;
  return _ === `auto` || _ === `scroll`;
}
var TangentAxis2 = {
  _: `y`,
  _: `x`,
};
function OriginPos2() {
  return {
    _: 0,
    _: 0,
  };
}
function DotProduct2(_, _) {
  return _._ * _._ + _._ * _._;
}
function DeltaVec2(_, _) {
  return {
    _: _._ - _._,
    _: _._ - _._,
  };
}
function Dist2(_, _) {
  let _ = DeltaVec2(_, _);
  return Math.sqrt(DotProduct2(_, _));
}
function ShallowCompareObjects(_, _, _) {
  return _ == null || _ == null
    ? _ === _
    : typeof _ != `object` ||
        typeof _ != `object` ||
        Object.keys(_).length !== Object.keys(_).length
      ? !1
      : ((_ ??= (_, _) => _ === _),
        Object.keys(_).every((_) => _.hasOwnProperty(_) && _(_[_], _[_])));
}
function FindFocusableVisibleChild(_, _, _) {
  let _ = [],
    [_, _] = _.GetChildren(),
    _ = _.GetActiveChild(),
    _,
    _ = _ ? _.Element?.getBoundingClientRect() : null;
  if (_) {
    let _ = ComputeIntersectionWithParent(_, _, _);
    if (
      _ &&
      !_.offScreen &&
      ((_ = FindFocusableVisibleElement(_, _, _.overlap, _)),
      _ && !_.visibility.offScreen)
    )
      return _;
    _ &&
      _.push({
        child: _,
        visibility: _,
      });
  }
  let _ = _ || _;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    if (_ == _) continue;
    let _ = ComputeIntersectionWithParent(_, _, _ ?? void 0);
    _ &&
      _.push({
        child: _,
        visibility: _,
      });
  }
  _.sort(VisibilityComparator);
  let _;
  for (let _ of _) {
    let { child: _, visibility: _ } = _;
    if (
      _.offScreen &&
      _ &&
      (!_.visibility.offScreen ||
        (_.distance && _.distance > _.visibility.distance))
    )
      break;
    let _ =
      _ == _
        ? _
        : FindFocusableVisibleElement(_, _, _.overlap || _, _ ?? void 0);
    _ && (!_ || VisibilityComparator(_, _) < 0) && (_ = _);
  }
  return _;
}
function FindFocusableVisibleElement(_, _, _, _) {
  switch (_.GetFocusable()) {
    case `none`:
      return;
    case `children`:
      return FindFocusableVisibleChild(_, _.overlap || _, _);
    case `self`:
      return {
        child: _,
        visibility: _,
      };
  }
}
function VisibilityComparator(_, _) {
  let _ = _.visibility,
    _ = _.visibility;
  return _.offScreen
    ? _.offScreen
      ? _.distance - _.distance
      : 1
    : _.offScreen
      ? -1
      : _.distance - _.distance;
}
function ComputeIntersectionWithParent(_, _, _) {
  let _ = _.Element?.getBoundingClientRect(),
    _ = _.GetFocusable(),
    _;
  if (_ == `none` || !_ || !_) return null;
  if (_ == `self`) {
    if (
      _.top < _.top ||
      _.right > _.right ||
      _.bottom > _.bottom ||
      _.left < _.left
    ) {
      let _ = _.top + _.height / 2,
        _ = _.left + _.width / 2;
      if (_ < _.top)
        return {
          offScreen: `top`,
          distance: _.top - _,
        };
      if (_ > _.right)
        return {
          offScreen: `right`,
          distance: _ - _.right,
        };
      if (_ > _.bottom)
        return {
          offScreen: `bottom`,
          distance: _ - _.bottom,
        };
      if (_ < _.left)
        return {
          offScreen: `left`,
          distance: _.left - _,
        };
    }
    _ && (_ = DistanceBetweenRects$1(_, _));
  } else if (_ == `children`) {
    let _ = _.Element;
    if (!_) return null;
    if (_.scrollHeight > _.height || _.scrollWidth > _.width) {
      let _ = _.ownerDocument.defaultView.getComputedStyle(_);
      if (_.overflowX == `visible` || _.overflowY == `visible`)
        return {
          overlap: _,
        };
    }
    if (_.bottom < _.top)
      return {
        offScreen: `top`,
        distance: _.top - _.bottom,
      };
    if (_.left > _.right)
      return {
        offScreen: `right`,
        distance: _.left - _.right,
      };
    if (_.top > _.bottom)
      return {
        offScreen: `bottom`,
        distance: _.top - _.bottom,
      };
    if (_.right < _.left)
      return {
        offScreen: `left`,
        distance: _.left - _.right,
      };
  }
  return {
    overlap: {
      top: Math.max(_.top, _.top),
      right: Math.min(_.right, _.right),
      bottom: Math.min(_.bottom, _.bottom),
      left: Math.max(_.left, _.left),
    },
    distance: _,
  };
}
var CAnimation = class {
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
  CAnimationFunc = class extends CAnimation {
    m_fnCallback;
    constructor(_, _, _) {
      (super(_, _), (this.m_fnCallback = _));
    }
    Update(_) {
      this.m_fnCallback(_);
    }
  },
  CPropertyAnimation = class extends CAnimation {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(_, _, _) {
      (super(`ownerDocument` in _ ? GetOwningWindowForElement(_) : _, _),
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
  Log$1 = new CLog(`ScrollSnap`).Debug,
  g_bDefaultToUseNoTransformScroll = !1,
  g_tsDisableSmoothScrolling,
  k_nDisableSmoothScrollingCooldownMS = 500;
function HandleNavScroll(_, _, _, _, _) {
  let _ = _.Element;
  if (!_) return;
  let _ = [
    {
      node: _,
      eScrollType: _.m_Properties?.scrollIntoViewType,
    },
  ];
  for (let _ = _.Parent; _; _ = _.Parent) {
    let _ = _.m_Properties?.scrollIntoViewWhenChildFocused,
      _ = _.m_Properties?.scrollIntoViewType;
    if (_) {
      let _ = {
        node: _,
        eScrollType: _,
      };
      _ === `force` ? (_ = [_]) : _.push(_);
    }
    if (_ !== void 0)
      for (let _ = _.length - 1; _ >= 0 && _[_].eScrollType === void 0; _--)
        _[_].eScrollType = _;
  }
  for (; _.length;) {
    let { node: _, eScrollType: _ } = _.pop(),
      _ = _.length == 0;
    if (
      (_ === void 0 &&
        (_ = g_bDefaultToUseNoTransformScroll
          ? EScrollIntoViewType.NoTransform
          : EScrollIntoViewType.Standard),
      _?.m_Properties?.fnScrollIntoViewHandler &&
        _.m_Properties.fnScrollIntoViewHandler(_, _, _) !== !1)
    )
      continue;
    let _ = _.m_element,
      _ =
        _ == EScrollIntoViewType.NoTransform ||
        _ == EScrollIntoViewType.NoTransformSparseContent ||
        !_;
    if (!_ && _ !== EFocusSource.GAMEPAD)
      (Log$1(`No previous element for scrolling, will jump`),
        _
          ? ScrollIntoViewNoTransforms(_, _, `auto`)
          : (Log$1(
              `Scrolling Into View ('auto' via browser scrollIntoView):`,
              _,
            ),
            _?.scrollIntoView({
              behavior: `auto`,
              block: `nearest`,
              inline: `nearest`,
            })));
    else {
      let _ = _ ? GetBoundingRectNoTransform(_) : _.getBoundingClientRect(),
        _ = _.ownerDocument.defaultView.innerHeight,
        _ = 40,
        _ = _ ? 40 : Math.max(_ * 0.4, 40),
        _ = !1,
        _ =
          g_tsDisableSmoothScrolling &&
          performance.now() - g_tsDisableSmoothScrolling <
            k_nDisableSmoothScrollingCooldownMS;
      (_ || _.bottom < -_ || _.top > _ + _) &&
        ((_ = !0),
        _ ||
          Log$1(
            `Disabling smooth scrolling, ${_.bottom} < ${-_}, ${_.top} > ${_} + ${_} `,
          ));
      let _ = _ ? `auto` : `smooth`;
      (_ && (g_tsDisableSmoothScrolling = performance.now()),
        _.Tree.Controller.BIsRestoringHistory() && (_ = `auto`),
        _
          ? ScrollIntoViewNoTransforms(_, _, _)
          : (Log$1(
              `Scrolling Into View ('${_}' via browser scrollIntoView):`,
              _,
            ),
            _.scrollIntoView({
              behavior: _,
              block: `nearest`,
            })));
    }
  }
  CheckScrollRegionToStartOrEnd(_, _);
}
function CheckScrollRegionToStartOrEnd(_, _) {
  let _ = AxisFromGamepadDirection(_);
  if (!_) return;
  let _ = null;
  for (let _ = _; _; _ = _.GetNavParentCrossingTrees())
    _.m_Properties?.scrollRegionToStartOrEnd && (_ = _);
  if (_)
    for (
      let _ = _;
      _ &&
      !(
        _.BHasNavTargetInDirection(_, !0) ||
        (_ != _ &&
          _.Element &&
          _.m_Properties?.scrollRegionToStartOrEnd &&
          PerformScrollToStartOrEnd(_.Element, _, _, _ == _.Tree.Root),
        _ == _)
      );
      _ = _.GetNavParentCrossingTrees()
    );
}
function PerformScrollToStartOrEnd(_, _, _, _) {
  let _ = _,
    _ = _.ownerDocument;
  if (
    ((_ || _ == _.body) &&
      _.defaultView &&
      !BIsElementScrollableOnAxis(_, _) &&
      (_ = _.defaultView),
    !BIsElementScrollableOnAxis(_, _))
  )
    return;
  let _ = GetScrollValues(_);
  if (_ == `y`) {
    let _ = _ == EGamepadButton.DIR_DOWN ? _.MaxScrollTop() : 0;
    _.scrollTo({
      top: _,
      behavior: `smooth`,
    });
  } else {
    let _ = _ == EGamepadButton.DIR_RIGHT ? _.MaxScrollLeft() : 0;
    _.scrollTo({
      left: _,
      behavior: `smooth`,
    });
  }
}
function GetBoundingRectNoTransform(_) {
  if (!_)
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
  if (!(`ownerDocument` in _))
    return {
      left: 0,
      right: _.innerWidth,
      top: 0,
      bottom: _.innerHeight,
    };
  let _ = 0,
    _ = 0,
    _ = _;
  for (; _;) {
    if (`ownerDocument` in _) {
      let _ = window.getComputedStyle(_);
      if (_.position === `fixed` || _.position === `sticky`) break;
    }
    ((_ += _.offsetTop), (_ += _.offsetLeft), (_ = _.offsetParent));
  }
  for (_ = _?.parentElement; _;) {
    let { scrollTop: _, scrollLeft: _ } = GetAdjustedScrollForElement(_);
    if (((_ -= _), (_ -= _), `ownerDocument` in _)) {
      let _ = window.getComputedStyle(_);
      if (_.position === `fixed` || _.position === `sticky`) break;
    }
    _ = _.parentElement;
  }
  return {
    left: _,
    top: _,
    right: _ + _.offsetWidth,
    bottom: _ + _.offsetHeight,
  };
}
function GetEdges(_, _) {
  return _ == `x`
    ? [_.left, _.right, _.right - _.left]
    : [_.top, _.bottom, _.bottom - _.top];
}
function CalculateNearestScroll(_, _, _, _) {
  let [_, _, _] = GetEdges(_, _),
    [_, _, _] = GetEdges(_, _),
    [_, _] = GetEdges(_, _);
  if (_ < _ && _ > _) return 0;
  let _ = _ - _,
    _ = _ + _,
    _ = _ > _;
  return (_ < _ && !_) || (_ > _ && _)
    ? _ - _
    : (_ < _ && _) || (_ > _ && !_)
      ? _ - _
      : 0;
}
function ParseCSSLength(_) {
  return _ == `auto`
    ? 0
    : _.endsWith(`px`)
      ? parseInt(_)
      : (console.log(`Unsupported length`, _), 0);
}
function GetScrollPadding(_) {
  let _;
  return (
    (_ =
      `ownerDocument` in _
        ? _.ownerDocument.defaultView.getComputedStyle(_)
        : _.document.defaultView.getComputedStyle(
            window.document.documentElement,
          )),
    {
      left: ParseCSSLength(_.scrollPaddingLeft),
      right: ParseCSSLength(_.scrollPaddingRight),
      top: ParseCSSLength(_.scrollPaddingTop),
      bottom: ParseCSSLength(_.scrollPaddingBottom),
    }
  );
}
function GetScrollMargin(_) {
  if (!(`ownerDocument` in _))
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
  let _ = _.ownerDocument.defaultView.getComputedStyle(_);
  return {
    left: ParseCSSLength(_.scrollMarginLeft),
    right: ParseCSSLength(_.scrollMarginRight),
    top: ParseCSSLength(_.scrollMarginTop),
    bottom: ParseCSSLength(_.scrollMarginBottom),
  };
}
function AdjustForScrollPadding(_, _) {
  let _ = GetScrollPadding(_);
  return {
    left: Math.max(0, _.left + _.left),
    right: Math.max(0, _.right - _.right),
    top: Math.max(0, _.top + _.top),
    bottom: Math.max(0, _.bottom - _.bottom),
  };
}
function WithinOne(_) {
  return _ > -1 && _ < 1;
}
function ScrollIntoViewNoTransforms(_, _, _, _, _) {
  (Log$1(
    `----------------------------------------------------------------------------------`,
  ),
    Log$1(`Scrolling Into View (NoTransform):`, _));
  let _ = [],
    _ = _,
    _ = GetBoundingRectNoTransform(_),
    _ = _ ?? Number.MAX_VALUE;
  for (; _;) {
    let _ = FindScrollableAncestor(_);
    _ ||= GetOwningWindowForElement(_);
    let _ = GetScrollMargin(_),
      _ = GetBoundingRectNoTransform(_),
      _ = AdjustForScrollPadding(_, _),
      _ = GetScrollValues(_),
      _ = {
        element: _,
        left: 0,
        top: 0,
      };
    if (
      (Log$1(
        `Checking scroll div`,
        _,
        `scroll y:${_.scrollTop} of ${_.MaxScrollTop()}, x:${_.scrollLeft} of ${_.MaxScrollLeft()}, adjusted =>`,
        _,
        `target => `,
        _,
      ),
      (!_ || _ == `y`) &&
        BIsElementScrollableOnAxis(_, `y`) &&
        ((_.top = CalculateNearestScroll(_, _, _, `y`)),
        (_.top = Clamp(_.top, -_.scrollTop, _.MaxScrollTop() - _.scrollTop)),
        _ &&
          ((_.top = Math.min(_, Math.abs(_.top)) * (_.top < 0 ? -1 : 1)),
          (_ -= Math.abs(_.top))),
        Log$1(`- checked y: ${_.top}`)),
      (!_ || _ == `x`) &&
        BIsElementScrollableOnAxis(_, `x`) &&
        ((_.left = CalculateNearestScroll(_, _, _, `x`)),
        (_.left = Clamp(
          _.left,
          -_.scrollLeft,
          _.MaxScrollLeft() - _.scrollLeft,
        )),
        _ &&
          ((_.left = Math.min(_, Math.abs(_.left)) * (_.left < 0 ? -1 : 1)),
          (_ -= Math.abs(_.left))),
        Log$1(`- checked x: ${_.left}`)),
      _.push(_),
      (_ && !_) || !(`ownerDocument` in _))
    )
      break;
    let _ = window.getComputedStyle(_);
    if (_.position === `fixed` || _.position === `sticky`) break;
    ((_ = _),
      (_ = {
        top: _.top - _.top,
        right: _.right - _.left,
        bottom: _.bottom - _.top,
        left: _.left - _.left,
      }));
  }
  let _ = !1;
  for (let _ of _) {
    if (WithinOne(_.left) && WithinOne(_.top)) continue;
    let _ = GetScrollValues(_.element),
      _ = _.scrollTop + _.top,
      _ = _.scrollLeft + _.left;
    ((_ = Clamp(_, 0, _.MaxScrollLeft())),
      (_ = Clamp(_, 0, _.MaxScrollTop())),
      !(WithinOne(_.scrollLeft - _) && WithinOne(_.scrollTop - _)) &&
        (_.scrollTo({
          left: _,
          top: _,
          behavior: _,
        }),
        (_ ||= (Log$1(`Scrolling:`), !0)),
        Log$1(
          `- ${_.top},${_.left} => ${_}, ${_}, behavior: ${_}`,
          _.element,
        )));
  }
}
var CScrollValues = class {
  m_element;
  m_fnOriginalScrollTo;
  m_window;
  m_scrollTopTarget = void 0;
  m_scrollLeftTarget = void 0;
  m_animation = void 0;
  constructor(_) {
    `ownerDocument` in _
      ? ((this.m_element = _),
        (this.m_fnOriginalScrollTo = _.scrollTo),
        (this.m_element.scrollTo = (_, _) => {
          typeof _ == `number`
            ? this.scrollTo({
                left: _,
                top: _,
              })
            : this.scrollTo(_);
        }))
      : ((this.m_window = _), (this.m_element = _.document.documentElement));
  }
  ResetScrollState() {
    ((this.m_scrollTopTarget = void 0),
      (this.m_scrollLeftTarget = void 0),
      this.m_window || (this.m_element.style.scrollSnapType = ``));
  }
  scrollTo(_) {
    if (_?.behavior != `smooth`)
      ((this.m_animation &&= (this.m_animation.Cancel(), void 0)),
        this.m_window
          ? this.m_window.scrollTo(_)
          : this.m_fnOriginalScrollTo?.apply(this.m_element, [_]),
        this.ResetScrollState());
    else {
      let _ = _.left ?? this.scrollLeft,
        _ = _.top ?? this.scrollTop,
        _ = `sine`;
      if (
        (this.m_animation && (this.m_animation.Cancel(), (_ = `linear`)),
        Math.max(
          Math.abs(this.currentScrollTop - _),
          Math.abs(this.currentScrollLeft - _),
        ) > 0)
      ) {
        let _ = {
          msDuration: 200,
          timing: _,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let _ = this.currentScrollLeft,
            _ = this.currentScrollTop;
          this.m_animation = new CAnimationFunc(this.m_window, _, (_) => {
            this.m_window?.scrollTo({
              left: _ + (_ - _) * _,
              top: _ + (_ - _) * _,
              behavior: `auto`,
            });
          });
        } else
          ((this.m_element.style.scrollSnapType = `initial`),
            (this.m_animation = new CPropertyAnimation(
              this.m_element,
              {
                scrollTop: _,
                scrollLeft: _,
              },
              _,
            )));
        ((this.m_scrollLeftTarget = _),
          (this.m_scrollTopTarget = _),
          this.m_animation.Start());
      }
    }
  }
  get clientWidth() {
    return this.m_window
      ? this.m_window.innerWidth
      : this.m_element.clientWidth;
  }
  get clientHeight() {
    return this.m_window
      ? this.m_window.innerHeight
      : this.m_element.clientHeight;
  }
  get currentScrollLeft() {
    return this.m_window ? this.m_window.scrollX : this.m_element.scrollLeft;
  }
  get currentScrollTop() {
    return this.m_window ? this.m_window.scrollY : this.m_element.scrollTop;
  }
  get scrollLeft() {
    return this.m_scrollLeftTarget ?? this.currentScrollLeft;
  }
  get scrollTop() {
    return this.m_scrollTopTarget ?? this.currentScrollTop;
  }
  get scrollWidth() {
    return this.m_element.scrollWidth;
  }
  get scrollHeight() {
    return this.m_element.scrollHeight;
  }
  MaxScrollTop() {
    return this.scrollHeight - this.clientHeight;
  }
  MaxScrollLeft() {
    return this.scrollWidth - this.clientWidth;
  }
};
__decorate([bind], CScrollValues.prototype, `ResetScrollState`, null);
var g_mapScrollValueCache = new WeakMap();
function GetScrollValues(_) {
  let _ = g_mapScrollValueCache.get(_);
  return (
    _ || ((_ = new CScrollValues(_)), g_mapScrollValueCache.set(_, _)), _
  );
}
function GetAdjustedScrollForElement(_) {
  let _ = g_mapScrollValueCache.get(_);
  return _
    ? {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      }
    : {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      };
}
var Logger = new CLog(`FocusNavigationMovement`),
  _ = Logger.Debug,
  ENavLayout = (function (_) {
    return (
      (_[(_.NONE = 0)] = `NONE`),
      (_[(_.COLUMN = 1)] = `COLUMN`),
      (_[(_.ROW = 2)] = `ROW`),
      (_[(_.COLUMN_REVERSE = 3)] = `COLUMN_REVERSE`),
      (_[(_.ROW_REVERSE = 4)] = `ROW_REVERSE`),
      (_[(_.GRID = 5)] = `GRID`),
      (_[(_.GEOMETRIC = 6)] = `GEOMETRIC`),
      _
    );
  })({}),
  ENavPreferPosition = (function (_) {
    return (
      (_[(_.FIRST = 0)] = `FIRST`),
      (_[(_.LAST = 1)] = `LAST`),
      (_[(_.MAINTAIN_X = 2)] = `MAINTAIN_X`),
      (_[(_.MAINTAIN_Y = 3)] = `MAINTAIN_Y`),
      (_[(_.PREFERRED_CHILD = 4)] = `PREFERRED_CHILD`),
      _
    );
  })({}),
  EScrollIntoViewType = (function (_) {
    return (
      (_[(_.Standard = 0)] = `Standard`),
      (_[(_.NoTransform = 1)] = `NoTransform`),
      (_[(_.NoTransformSparseContent = 2)] = `NoTransformSparseContent`),
      _
    );
  })({}),
  EFlowDir = (function (_) {
    return (
      (_[(_.INVALID = 0)] = `INVALID`),
      (_[(_.FORWARD = 1)] = `FORWARD`),
      (_[(_.BACKWARD = 2)] = `BACKWARD`),
      _
    );
  })({}),
  CFocusNavNode = class _ {
    m_Tree;
    m_Parent;
    m_rgChildren = [];
    m_ActiveChild;
    m_iLastActiveChildIndex = -1;
    m_Properties;
    m_element;
    m_FocusRing;
    m_bChildrenSorted = !1;
    m_bAutoFocusChild = !1;
    m_bMounted = !1;
    m_nDepth;
    m_Focused = SubscribableValue(!1);
    m_FocusWithin = SubscribableValue(!1);
    m_ActionDescriptionsChangedCallbackList = new CCallbackList();
    m_FocusableIfEmptyAncestor = null;
    m_rgNavigationHandlers = [];
    m_rgFocusHandlers = [];
    constructor(_, _, _) {
      ((this.m_Tree = _),
        (this.m_Parent = _),
        (this.m_FocusRing = _),
        (this.m_nDepth = _ ? _.m_nDepth + 1 : 0));
    }
    CreateHandle() {
      return new FocusNavHandle(this);
    }
    get Tree() {
      return this.m_Tree;
    }
    get NavKey() {
      if (this.m_Properties?.navKey) return this.m_Properties.navKey;
    }
    get Element() {
      return this.m_element;
    }
    get Parent() {
      return this.m_Parent;
    }
    GetNavParentCrossingTrees() {
      return this.m_Parent
        ? this.m_Parent
        : this.m_Tree.GetParentEmbeddedNavTree() && this.Element
          ? (this.Element.__nav_wrapper ?? null)
          : null;
    }
    GetWrappedTree() {
      return null;
    }
    SetProperties(_) {
      let _ = !ShallowCompareObjects(
          this.m_Properties?.actionDescriptionMap,
          _?.actionDescriptionMap,
          BActionDescriptionsEqual,
        ),
        _ = this.m_Properties?.focusableIfEmpty,
        _ = this.m_Properties?.noFocusRing;
      ((this.m_Properties = _ || {}),
        _ && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.focusableIfEmpty && !_
          ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
          : !this.m_Properties.focusableIfEmpty &&
            _ &&
            this.PropagateFocusableIfEmptyAncestorToDescendants(
              this.m_FocusableIfEmptyAncestor,
            ),
        this.m_Properties.noFocusRing && !_ && this.BHasFocus()
          ? this.m_FocusRing?.OnBlur(EFocusSource.APPLICATION, this, this)
          : !this.m_Properties.noFocusRing &&
            _ &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(EFocusSource.APPLICATION, this, this),
        this.m_element && this.RegisterDOMEvents());
    }
    BWantsAutoFocus() {
      return this.m_Properties?.autoFocus || this.m_bAutoFocusChild;
    }
    BWantsPreferredFocus() {
      return this.m_Properties?.preferredFocus;
    }
    BWantsFocusRing() {
      return (
        !this.m_Properties?.noFocusRing ||
        this.m_Tree.Controller.GetShowDebugFocusRing().Value
      );
    }
    GetBoundingRect() {
      return this.m_element?.getBoundingClientRect();
    }
    GetElementForFocusRingMeasure() {
      let _ = this.m_element;
      return this.m_Properties?.focusRingSizeElementID
        ? (_?.ownerDocument?.getElementById(
            this.m_Properties.focusRingSizeElementID,
          ) ?? _)
        : _;
    }
    GetBoundingRectForFocusRing() {
      return this.GetElementForFocusRingMeasure()?.getBoundingClientRect();
    }
    GetBorderRadiusForFocusRing() {
      if (!this.m_Properties?.focusRingHasBorderRadius) return;
      let _ = this.GetElementForFocusRingMeasure();
      if (!_) return;
      let _ = _.ownerDocument?.defaultView?.getComputedStyle(_);
      if (_)
        return {
          borderTopLeftRadius: _.borderTopLeftRadius,
          borderTopRightRadius: _.borderTopRightRadius,
          borderBottomRightRadius: _.borderBottomRightRadius,
          borderBottomLeftRadius: _.borderBottomLeftRadius,
        };
    }
    SetHasFocus(_) {
      this.m_Focused.Set(_);
    }
    SetFocusWithin(_) {
      this.m_FocusWithin.Set(_) &&
        this.m_Properties?.onFocusWithin &&
        this.m_Properties.onFocusWithin(_);
    }
    get SubscribableHasFocus() {
      return this.m_Focused;
    }
    BHasFocus() {
      return this.m_Focused.Value;
    }
    get SubscribableFocusWithin() {
      return this.m_FocusWithin;
    }
    BFocusWithin() {
      return this.m_FocusWithin.Value;
    }
    ForceMeasureFocusRing() {
      this.m_FocusRing?.OnForceMeasureFocusRing();
    }
    get ActionDescriptionChangedCallbackList() {
      return this.m_ActionDescriptionsChangedCallbackList;
    }
    GetActiveActionDescriptions() {
      return this.BuildConsolidatedActionDescriptionMap({});
    }
    BuildConsolidatedActionDescriptionMap(_) {
      let _ = this.m_Properties?.actionDescriptionMap;
      if (_)
        for (let _ in _) {
          let _ = _;
          _[_] === void 0 && (_[_] = _[_]);
        }
      return this.m_Parent
        ? this.m_Parent.BuildConsolidatedActionDescriptionMap(_)
        : this.m_Tree.GetParentEmbeddedNavTree()
          ? this.m_Tree
              .GetParentEmbeddedNavTree()
              .Root.BuildConsolidatedActionDescriptionMap(_)
          : _;
    }
    AddChild(_) {
      (this.m_rgChildren.push(_),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.focusableIfEmpty
          ? _.SetFocusableIfEmptyAncestor(this)
          : this.m_FocusableIfEmptyAncestor &&
            _.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
        this.m_bMounted &&
          _.BFocusWithin() &&
          (AssertMsg(
            !this.m_ActiveChild && this.BFocusWithin(),
            `Invalid focus state in AddChild`,
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1)));
    }
    OnMount(_) {
      ((this.m_element = _),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : AssertMsg(
              this == this.m_Tree.Root,
              `Only root should have no parent`,
            ),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents());
      let _ =
          this.m_FocusableIfEmptyAncestor &&
          this.m_FocusableIfEmptyAncestor.BHasFocus(),
        _ = this.m_Properties?.autoFocus || _;
      if (this.BWantsAutoFocus() || _) {
        let _ = -1;
        (this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (_ = this.m_rgChildren.findIndex((_) => _.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || _ || _ !== -1) &&
            (this.SetActiveChild(_),
            !this.m_Parent || this.m_Parent.m_element
              ? _
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_FocusableIfEmptyAncestor,
                    {
                      bFocusDescendant: !0,
                    },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0)));
      } else if (this.m_rgChildren.length) {
        let _ = this.m_rgChildren.findIndex((_) => _.BFocusWithin());
        _ != -1 &&
          (this.SetActiveChild(_),
          AssertMsg(
            this.BFocusWithin(),
            `Child has focus, we should be m_bFocusWithin`,
          ));
      }
    }
    DEV_SetDebugPropsOnElement() {}
    OnUnmount() {
      (this.m_Properties?.focusableIfEmpty &&
        this.PropagateFocusableIfEmptyAncestorToDescendants(
          this.m_FocusableIfEmptyAncestor,
        ),
        (this.m_bMounted = !1));
      let _ = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      ((this.BHasFocus() || _) &&
        (_(
          `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? `will transfer to retain focus ancestor` : `will blur`}.`,
        ),
        _ && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_FocusableIfEmptyAncestor
          ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
          : this.BHasFocus() &&
            this.m_Tree.TransferFocus(EFocusSource.APPLICATION, null)),
        this.UnregisterDOMEvents(),
        this.m_Parent
          ? this.m_Parent.RemoveChild(this)
          : AssertMsg(
              this == this.m_Tree.Root,
              `Only root should have no parent`,
            ));
    }
    RegisterDOMEvents() {
      (!this.m_rgNavigationHandlers.length &&
        this.m_element &&
        (this.m_rgChildren.length >= 2 ||
          this.m_Properties?.layout != 0 ||
          this.m_Properties.onMoveUp ||
          this.m_Properties.onMoveRight ||
          this.m_Properties.onMoveDown ||
          this.m_Properties.onMoveLeft) &&
        this.m_rgNavigationHandlers.push(
          RegisterGamepadDirectionEvent(this.m_element, this.OnNavigationEvent),
        ),
        (this.m_Properties?.focusable ||
          this.m_Properties?.focusableIfEmpty ||
          this.m_rgChildren.length == 0) &&
          (this.m_rgFocusHandlers.length ||
            (this.m_element?.addEventListener(`focus`, this.OnDOMFocus),
            this.m_element?.addEventListener(`blur`, this.OnDOMBlur),
            this.m_rgFocusHandlers.push(() => {
              (this.m_element?.removeEventListener(`focus`, this.OnDOMFocus),
                this.m_element?.removeEventListener(`blur`, this.OnDOMBlur));
            }))));
    }
    RemoveChild(_) {
      let _ = this.m_rgChildren.indexOf(_);
      (AssertMsg(_ !== -1, `Child was not found to remove`),
        _ !== -1 &&
          (this.m_ActiveChild == _ && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(_, 1)));
    }
    UnregisterDOMEvents() {
      (this.m_rgNavigationHandlers.forEach((_) => _()),
        (this.m_rgNavigationHandlers = []),
        this.m_rgFocusHandlers.forEach((_) => _()),
        (this.m_rgFocusHandlers = []));
    }
    GetActiveDescendant() {
      let _ = this.GetActiveChild();
      return _ ? _.GetActiveDescendant() : this;
    }
    IsValidChildIndex(_) {
      return _ >= 0 && _ < this.m_rgChildren.length;
    }
    GetActiveChild() {
      return this.m_ActiveChild
        ? this.m_ActiveChild
        : (this.EnsureChildrenSorted(),
          this.IsValidChildIndex(this.m_iLastActiveChildIndex)
            ? this.m_rgChildren[this.m_iLastActiveChildIndex]
            : null);
    }
    GetActiveChildIndex() {
      if (this.m_ActiveChild) {
        if (
          this.IsValidChildIndex(this.m_iLastActiveChildIndex) &&
          this.m_rgChildren[this.m_iLastActiveChildIndex] == this.m_ActiveChild
        )
          return this.m_iLastActiveChildIndex;
        this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
          this.m_ActiveChild,
        );
      }
      return this.m_iLastActiveChildIndex;
    }
    EnsureChildrenSorted(_ = !1) {
      (!this.m_bChildrenSorted || _) &&
        (this.m_rgChildren.sort((_, _) => {
          let _ = _.m_element,
            _ = _.m_element;
          if (!_ || !_.isConnected) return !_ || !_.isConnected ? 0 : 1;
          if (!_ || !_.isConnected) return -1;
          let _ = _.compareDocumentPosition(_);
          return _ & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : _ & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 0;
        }),
        this.m_ActiveChild &&
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
            this.m_ActiveChild,
          )),
        (this.m_bChildrenSorted = !0));
    }
    GetLastFocusElement() {
      let _ = this.GetActiveChild();
      return _ ? _.GetLastFocusElement() : this.m_element;
    }
    OnDOMFocus(_) {
      if (!this.BHasFocus()) {
        if (this.GetFocusable() == `children`) {
          let _ = this.FindFocusableDescendant();
          if (_ && _ !== this) {
            (_(
              `Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.`,
              this.m_element,
              _.m_element,
            ),
              this.m_Tree.TransferFocus(EFocusSource.BROWSER, _));
            return;
          }
        }
        this.m_Tree.TransferFocus(EFocusSource.BROWSER, this);
      }
    }
    OnDOMBlur(_) {
      this.BHasFocus() &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(EFocusSource.BROWSER, null);
    }
    UpdateParentActiveChild() {
      this.m_Parent &&
        (this.m_Parent.SetActiveChild(this),
        this.m_Parent.UpdateParentActiveChild());
    }
    GetFocusable() {
      let {
        focusable: _,
        focusableIfEmpty: _,
        childFocusDisabled: _,
        fnCanTakeFocus: _,
      } = this.m_Properties;
      return !this.m_bMounted || (_ && !_(this))
        ? `none`
        : _ || (_ && (_ || this.m_rgChildren.length == 0))
          ? `self`
          : !_ && this.m_rgChildren.length
            ? `children`
            : `none`;
    }
    BTakeFocus(_, _) {
      let _ = this.FindFocusableNode(_);
      return this.InternalFocusDescendant(_, _, _);
    }
    FindFocusableNode(_, _) {
      switch (this.GetFocusable()) {
        case `none`:
          return null;
        case `self`:
          return this;
        case `children`:
          return this.FindFocusableDescendant(_, _);
      }
    }
    BChildTakeFocus(_, _) {
      let _ = this.FindFocusableDescendant(_);
      return this.InternalFocusDescendant(_, _, _);
    }
    BFocusFirstChild(_) {
      let _ = this.FindNextFocusableChildInDirection(
        -1,
        1,
        EGamepadButton.INVALID,
      );
      return this.InternalFocusDescendant(_, _);
    }
    BFocusLastChild(_) {
      let _ = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        EGamepadButton.INVALID,
      );
      return this.InternalFocusDescendant(_, _);
    }
    FindFocusableDescendant(_, _) {
      let _ = AxisFromGamepadDirection(_),
        { focusableIfEmpty: _, childFocusDisabled: _ } =
          this.m_Properties ?? {};
      if (_) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: _, resetNavOnEntry: _ } =
            this.m_Properties ?? {},
          _ = this.GetActiveChildIndex();
        _ && _ !== void 0 && (_ = -1);
        let _ = this.GetLayout();
        this.IsValidChildIndex(_) ||
          (_ =
            _ >= this.m_rgChildren.length || _ == 4 || _ == 3 || _ == 1
              ? this.m_rgChildren.length - 1
              : 0);
        let _, _;
        if (
          (_ == 2
            ? (_ = `x`)
            : _ == 3
              ? (_ = `y`)
              : _ == 6 && _ && (_ = TangentAxis2[_]),
          (_ || _) && _)
        ) {
          let _ = this.m_Tree.GetLastFocusedNode();
          if (_ || (_ && _ == TangentAxis2[_])) {
            let _ =
              _ ||
              this.AdjustRectForLastMovementOnTangentAxis(
                _.GetBoundingRect(),
                _,
              );
            (_(
              `Taking focus while preserving ${_ && ENavPreferPosition[_]} preserved: ${_} movement: ${_}, node:`,
              _,
            ),
              (_ = this.FindClosestFocusableNodeToRect(_, _)));
          } else if (_ != TangentAxis2[_]) {
            let _ = this.ComputeRelativeDirection(_, 5),
              _ = _ == 2 ? this.m_rgChildren.length : -1;
            _ = this.FindNextFocusableChildInDirection(_, _, _);
          }
        } else if (_ == 4) {
          let _ = this.m_rgChildren;
          for (; _.length;) {
            let _ = [];
            for (let _ of _) {
              if (
                ((_ = _.BWantsPreferredFocus()
                  ? _.FindFocusableNode(_)
                  : void 0),
                _)
              )
                return _;
              _.push(..._.m_rgChildren);
            }
            _ = _;
          }
        } else
          _ == 1 && (_ = this.FindNextFocusableChildInDirection(_ + 1, 2, _));
        return (
          (_ ||= this.FindNextFocusableChildInDirection(_ - 1, 1, _)),
          (_ ||= this.FindNextFocusableChildInDirection(_, 2, _)),
          _ || (_ ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(_) {
      let _ = this.Element?.ownerDocument?.defaultView ?? window,
        _ = {
          top: 0,
          left: 0,
          right: _.innerWidth,
          bottom: _.innerHeight,
        },
        _ = FindFocusableVisibleChild(this, _);
      return (
        _(
          `Focusing visible child, best child match is ${_?.child?.Element?.className} - ${JSON.stringify(_?.visibility)}`,
        ),
        _ ? _.child.BTakeFocus(_) : !1
      );
    }
    GetLayout() {
      return this.m_Properties?.layout
        ? this.m_Properties.layout
        : this.m_rgChildren.length < 2
          ? 0
          : InferLayoutFromElementCSS(this.m_element);
    }
    OnNavigationEvent(_) {
      let _ = _.detail.button;
      if (this.BTryInternalNavigation(_, _.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: _,
          onMoveRight: _,
          onMoveDown: _,
          onMoveLeft: _,
        } = this.m_Properties ?? {},
        _ = !1;
      switch (_) {
        case EGamepadButton.DIR_UP:
          _ && (_ = _(_.detail, this));
          break;
        case EGamepadButton.DIR_RIGHT:
          _ && (_ = _(_.detail, this));
          break;
        case EGamepadButton.DIR_DOWN:
          _ && (_ = _(_.detail, this));
          break;
        case EGamepadButton.DIR_LEFT:
          _ && (_ = _(_.detail, this));
      }
      return _;
    }
    InternalFocusDescendant(_, _, _) {
      return _ ? (this.m_Tree.TransferFocus(_, _, _, !1), !0) : !1;
    }
    BHasNavTargetInDirection(_, _) {
      if (this.HasMovementHandler(_)) return !0;
      let _ = this.FindNextFocusableChild(_);
      if (_ && _) {
        let _ = _.GetWrappedTree();
        if (_ && _.GetExcludeFromScrollRegionSearch()) return !1;
        for (let _ = _; _ && _ != this; _ = _.m_Parent)
          if (_.m_Properties?.excludeFromScrollRegionSearch) return !1;
      }
      return !!_;
    }
    HasMovementHandler(_) {
      switch (_) {
        case EGamepadButton.DIR_UP:
          return !!this.m_Properties?.onMoveUp;
        case EGamepadButton.DIR_DOWN:
          return !!this.m_Properties?.onMoveDown;
        case EGamepadButton.DIR_LEFT:
          return !!this.m_Properties?.onMoveLeft;
        case EGamepadButton.DIR_RIGHT:
          return !!this.m_Properties?.onMoveRight;
      }
      return !1;
    }
    FindNextFocusableChild(_) {
      let _ = this.GetLayout(),
        _ = this.ComputeRelativeDirection(_, _);
      if (_ == 0 || (this.m_Properties?.focusable && this.BHasFocus()))
        return null;
      if ((this.EnsureChildrenSorted(!0), _ == 5))
        return this.FindNextFocusableChildInGrid(
          this.GetActiveChildIndex(),
          _,
          _,
        );
      if (_ == 6) return this.FindNextFocusableChildGeometric(_, _);
      let _ = this.GetActiveChildIndex();
      return (
        this.IsValidChildIndex(_) ||
          (_ = _ == 1 ? -1 : this.m_rgChildren.length),
        this.FindNextFocusableChildInDirection(_, _, _)
      );
    }
    BTryInternalNavigation(_, _) {
      _(
        `Handling navigation event ${EGamepadButton[_]} - ${ENavLayout[this.GetLayout()]}`,
        this.m_element,
      );
      let _ = this.FindNextFocusableChild(_);
      if (!_) return !1;
      let _ = AxisFromGamepadDirection(_),
        _ = this.ComputeRelativeDirection(_, this.GetLayout());
      if (this.GetScrollIntoViewType() == 2 || _.GetScrollIntoViewType() == 2) {
        let _ = _.Element?.ownerDocument.defaultView;
        if (_) {
          let _ = (_ == `y` ? _.innerHeight : _.innerWidth) / (_ ? 4.5 : 3.33),
            _ = GetBoundingRectNoTransform(_.Element),
            _ = !1;
          if (
            (_ == `y`
              ? _ == 1
                ? (_ = _.top > _.innerHeight && _.bottom > _.innerHeight + _)
                : _ == 2 && (_ = _.bottom < 0 && _.top < -_)
              : _ == `x` &&
                (_ == 1
                  ? (_ = _.left > _.innerWidth && _.right > _.innerWidth + _)
                  : _ == 2 && (_ = _.right < 0 && _.left < -_)),
            _)
          )
            return (
              _(`Element too far away, scrolling ${_} on ${_} axis `),
              ScrollIntoViewNoTransforms(_.Element, _.Element, `smooth`, _, _),
              !0
            );
        }
      }
      return (this.m_Tree.TransferFocus(EFocusSource.GAMEPAD, _, _), !0);
    }
    GetScrollIntoViewType() {
      return this.m_Properties?.scrollIntoViewType !== void 0 &&
        this.m_Properties?.scrollIntoViewType !== null
        ? this.m_Properties.scrollIntoViewType
        : this.m_Parent
          ? this.m_Parent.GetScrollIntoViewType()
          : 0;
    }
    GetRelativeDirection(_) {
      return this.ComputeRelativeDirection(_, this.GetLayout());
    }
    ComputeRelativeDirection(_, _) {
      let _ = _ == 4 || _ == 3;
      switch (_) {
        case 2:
        case 4:
          switch (_) {
            case EGamepadButton.DIR_LEFT:
              return _ ? 1 : 2;
            case EGamepadButton.DIR_RIGHT:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (_) {
            case EGamepadButton.DIR_UP:
              return _ ? 1 : 2;
            case EGamepadButton.DIR_DOWN:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        case 5:
        case 6:
          switch (_) {
            case EGamepadButton.DIR_LEFT:
            case EGamepadButton.DIR_UP:
              return _ ? 1 : 2;
            case EGamepadButton.DIR_RIGHT:
            case EGamepadButton.DIR_DOWN:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        default:
          return 0;
      }
    }
    AdvanceIndex(_, _) {
      return _ + (_ == 1 ? 1 : -1);
    }
    FindNextFocusableChildInDirection(_, _, _) {
      let _ = _ == 1 ? 1 : -1;
      for (let _ = _ + _; _ >= 0 && _ < this.m_rgChildren.length; _ += _) {
        let _ = this.m_rgChildren[_].FindFocusableNode(_);
        if (_) return _;
      }
      return null;
    }
    ScanChildren(_, _, _) {
      let _ = _ == 1 ? 1 : -1;
      for (let _ = _; _ >= 0 && _ < this.m_rgChildren.length; _ += _)
        if (_(this.m_rgChildren[_], _)) return _;
      return -1;
    }
    FindNextFocusableChildInGrid(_, _, _) {
      let _ = _ == EGamepadButton.DIR_UP || _ == EGamepadButton.DIR_DOWN,
        _ = this.GetLastFocusElement();
      if (!_ || _ == this.m_element)
        return (
          AssertMsg(
            !1,
            `No active child for grid navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            _,
          ),
          this.FindFocusableDescendant(_)
        );
      let _ = this.GetActiveDescendant().GetBoundingRect();
      if (
        ((_ == EGamepadButton.DIR_UP || _ == EGamepadButton.DIR_DOWN) &&
          (_ = this.AdjustRectForLastMovementOnTangentAxis(_, `y`)),
        _)
      ) {
        let _ = _;
        for (; _ != -1;) {
          let _ = this.ScanChildren(
            this.AdvanceIndex(_, _),
            _,
            (_) => !BOverlapOnAxis(`y`, _, _.GetBoundingRect()),
          );
          if (_ != -1) {
            let _ = this.m_rgChildren[_].GetBoundingRect(),
              _ = this.FindClosestChildInNextAxiallyAlignedSet(
                `x`,
                _,
                _,
                _,
                _,
                _,
              );
            if (_) return _;
          }
          _ = _;
        }
      } else {
        let _ = _ == 1 ? 1 : -1;
        for (
          let _ = this.AdvanceIndex(_, _);
          _ >= 0 && _ < this.m_rgChildren.length;
          _ += _
        ) {
          let _ = this.m_rgChildren[_];
          if (!BOverlapOnAxis(`y`, _, _.GetBoundingRect())) return null;
          let _ = _.FindFocusableNode(_);
          if (_) return _;
        }
      }
      return null;
    }
    FindNextFocusableChildGeometric(_, _) {
      let _ = this.GetLastFocusElement();
      if (!_ || _ == this.m_element)
        return (
          AssertMsg(
            !1,
            `No active child for geometric navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            _,
          ),
          this.FindFocusableDescendant(_)
        );
      let _ = AxisFromGamepadDirection(_);
      if (!_) return null;
      let _ = this.AdjustRectForLastMovementOnTangentAxis(
        this.GetActiveDescendant().GetBoundingRect(),
        _,
      );
      return this.FindClosetChildInDirection(_, _, _, _);
    }
    AdjustRectForLastMovementOnTangentAxis(_, _) {
      let _ = this.m_Tree.GetLastFocusedMovementRect(TangentAxis2[_]);
      return _
        ? _ == `x`
          ? {
              left: _.left,
              right: _.right,
              top: _.top,
              bottom: _.bottom,
            }
          : {
              left: _.left,
              right: _.right,
              top: _.top,
              bottom: _.bottom,
            }
        : _;
    }
    FindClosestFocusableNodeToRect(_, _) {
      let _ = AxisFromGamepadDirection(_),
        _ = _ && TangentAxis2[_],
        _ = [];
      for (let _ of this.m_rgChildren) {
        let _ = _.GetBoundingRect();
        if (_) {
          let _ = DistanceBetweenRects(_, _),
            _ = _ ? RectOverlapOnAxis(_, _, _) : 0;
          _.push({
            child: _,
            overlap: _,
            dist: _,
          });
        }
      }
      _.sort((_, _) =>
        _.dist == _.dist ? _.overlap - _.overlap : _.dist - _.dist,
      );
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    FindClosetChildInDirection(_, _, _, _) {
      _(
        `Find child closest to rect, rect is at left ${_.left} top ${_.top} right ${_.right} bottom ${_.bottom}`,
      );
      let _ = BoundsOfRectOnAxis(_, _),
        _ = [];
      for (let _ of this.m_rgChildren) {
        let _ = _.GetBoundingRect();
        if (_) {
          let _ = BoundsOfRectOnAxis(_, _),
            _;
          ((_ = _ == 1 ? _.min - _.max : _.min - _.max),
            _ >= 0 &&
              _.push({
                child: _,
                overlap: RectOverlapOnAxis(TangentAxis2[_], _, _),
                dist: _,
              }));
        }
      }
      if (
        (_.sort((_, _) => {
          if (_.overlap) {
            if (!_.overlap) return -1;
          } else if (_.overlap) return 1;
          return _.dist - _.dist || _.overlap - _.overlap;
        }),
        Logger.IsDebugEnabled())
      ) {
        let _ = _.slice(0, 3).map(
          ({ dist: _, overlap: _, child: _ }) =>
            `[ node: ${_.m_element?.className} dist: ${_} overlap: ${_} ]`,
        );
        _(`Found nodes on axis, top 3 (of ${_.length}: ${_.join(`, `)}`);
      }
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(_, _, _, _, _, _) {
      (!_ || _ < 0) && (_ = 0);
      let _ = [];
      if (!_) return null;
      let _ = LeadingCornerOfRect(_);
      (this.ScanChildren(_, _, (_) => {
        let _ = _.GetBoundingRect();
        return _
          ? _ && !BOverlapOnAxis(TangentAxis2[_], _, _)
            ? !0
            : (_.push({
                child: _,
                overlap: RectOverlapOnAxis(_, _, _),
                dist: DistToRectOnAxis(_, _, _),
              }),
              !1)
          : !1;
      }),
        _ == 2 && _.reverse(),
        _.sort((_, _) => {
          let _ = _.overlap - _.overlap;
          return _ == 0 ? _.dist - _.dist : _;
        }));
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    GetChildren() {
      return (
        this.EnsureChildrenSorted(),
        [this.m_rgChildren, this.m_iLastActiveChildIndex]
      );
    }
    SetActiveChild(_) {
      _ instanceof _
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = _),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(_)))
        : (this.IsValidChildIndex(_) &&
            (this.m_ActiveChild = this.m_rgChildren[_]),
          (this.m_iLastActiveChildIndex = _));
    }
    GetDepth() {
      return this.m_nDepth;
    }
    SetFocusableIfEmptyAncestor(_) {
      ((this.m_FocusableIfEmptyAncestor = _),
        this.m_Properties?.focusableIfEmpty ||
          this.PropagateFocusableIfEmptyAncestorToDescendants(_));
    }
    PropagateFocusableIfEmptyAncestorToDescendants(_) {
      for (let _ = 0; _ < this.m_rgChildren.length; _++)
        this.m_rgChildren[_].SetFocusableIfEmptyAncestor(_);
    }
    OnFocusedDecendantRemoved(_) {
      this.m_Tree.DeferredFocus.RequestFocus(this, {
        bFocusDescendant: !0,
      });
    }
    SetDOMFocusAndScroll(_, _, _, _) {
      (this.UpdateParentActiveChild(),
        this.m_Tree.OnChildActivated(_),
        this.m_Tree.BIsActiveFocus()
          ? (AssertMsg(
              !this.m_Tree.BUseVirtualFocus(),
              `Virtual focus tree should not have browser focus`,
            ),
            this.m_element?.focus({
              preventScroll: !0,
            }))
          : this.m_Tree.BUseVirtualFocus() ||
            _(
              `Didn't move focus to element as tree ${this.m_Tree._} is not active focus tree`,
            ),
        this.m_Tree.BIsActive() && HandleNavScroll(this, _, _, _, _));
    }
  };
(__decorate([bind], CFocusNavNode.prototype, `OnDOMFocus`, null),
  __decorate([bind], CFocusNavNode.prototype, `OnDOMBlur`, null),
  __decorate([bind], CFocusNavNode.prototype, `OnNavigationEvent`, null));
function GetNavTreeBridgeGlobal(_, _ = window) {
  return _[_];
}
var FocusNavHandle = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(_) {
    this.m_node = _;
  }
  TakeFocus(_) {
    return this.m_node.BTakeFocus(
      _ ? EFocusSource.GAMEPAD : EFocusSource.APPLICATION,
      _,
    );
  }
  ParentTakeFocus(_) {
    this.m_node.Parent?.BTakeFocus(
      _ ? EFocusSource.GAMEPAD : EFocusSource.APPLICATION,
      _,
    );
  }
  ChildTakeFocus(_) {
    return this.m_node.BChildTakeFocus(
      _ ? EFocusSource.GAMEPAD : EFocusSource.APPLICATION,
      _,
    );
  }
  FocusVisibleChild(_) {
    return this.m_node.BVisibleChildTakeFocus(_);
  }
  BHasFocus() {
    return this.m_node.BHasFocus();
  }
  BFocusWithin() {
    return this.m_node.BFocusWithin();
  }
  get NavKey() {
    return this.m_node.NavKey;
  }
  PushState() {
    ((this.m_History ||= new CFocusNavHistory(this.m_node)),
      this.m_History.PushState());
  }
  PopState(_ = 0) {
    this.m_History && this.m_History.PopState(_);
  }
  SaveState(_) {
    ((this.m_StateHistory ||= new CNamedFocusNavHistory(this.m_node)),
      this.m_StateHistory.SaveState(_));
  }
  RestoreState(_, _ = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(_, _) : !1;
  }
  GetFocusSnapshot() {
    return GetHistorySnapshot(this.m_node);
  }
  RestoreFocusSnapshot(_, _ = 0) {
    return RestoreHistorySnapshot(this.m_node, _, _);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function BOverlapOnAxis(_, _, _, _ = 0.001) {
  return _ == `x`
    ? _.right > _.left + _ && _.left + _ < _.right
    : _ == `y`
      ? _.bottom > _.top + _ && _.top + _ < _.bottom
      : (AssertMsg(!1, `Invalid axis ${_}`), !1);
}
function RectOverlapOnAxis(_, _, _) {
  let _;
  return (
    _ == `x`
      ? (_ = Math.min(_.right, _.right) - Math.max(_.left, _.left))
      : _ == `y`
        ? (_ = Math.min(_.bottom, _.bottom) - Math.max(_.top, _.top))
        : (AssertMsg(!1, `Invalid axis ${_}`), (_ = 0)),
    _ < 0 ? 0 : _
  );
}
function BoundsOfRectOnAxis(_, _) {
  return _ == `x`
    ? {
        min: _.left,
        max: _.right,
      }
    : {
        min: _.top,
        max: _.bottom,
      };
}
function DistToRectOnAxis(_, _, _) {
  let _ = _[_],
    _ = BoundsOfRectOnAxis(_, _);
  return _ < _.min ? _.min - _ : _ > _.max ? _ - _.max : 0;
}
function LeadingCornerOfRect(_) {
  return {
    _: _.left,
    _: _.top,
  };
}
var NullFocusRingListener = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function InferLayoutFromElementCSS(_) {
  if (!_) return ENavLayout.NONE;
  let _ = _.ownerDocument.defaultView,
    _ = _.getComputedStyle(_);
  if (_.display == `flex`)
    switch (_.flexDirection) {
      case `row`:
        return _.flexWrap == `wrap` ? ENavLayout.GRID : ENavLayout.ROW;
      case `row-reverse`:
        return ENavLayout.ROW_REVERSE;
      case `column`:
        return ENavLayout.COLUMN;
      case `column-reverse`:
        return ENavLayout.COLUMN_REVERSE;
    }
  else if (_.display == `grid`)
    return _.gridTemplateAreas === `none`
      ? ENavLayout.GRID
      : ENavLayout.GEOMETRIC;
  else if (_.childElementCount > 0) {
    let _ = _.getComputedStyle(_.firstElementChild),
      _ = _.float;
    if (
      (_ === `inline-start`
        ? ((_ = `left`), _.direction === `rtl` && (_ = `right`))
        : _ === `inline-end` &&
          ((_ = `right`), _.direction === `rtl` && (_ = `left`)),
      _ === `left`)
    )
      return ENavLayout.ROW;
    if (_ === `right`) return ENavLayout.ROW_REVERSE;
    if (_.display === `inline` || _.display === `inline-block`)
      return ENavLayout.GRID;
  }
  return ENavLayout.COLUMN;
}
function AxisFromGamepadDirection(_) {
  switch (_) {
    case EGamepadButton.DIR_UP:
    case EGamepadButton.DIR_DOWN:
      return `y`;
    case EGamepadButton.DIR_LEFT:
    case EGamepadButton.DIR_RIGHT:
      return `x`;
    default:
      return;
  }
}
function PanelFlowChildrenToNavLayout(_) {
  if (!_) return ENavLayout.NONE;
  switch (_) {
    case `column`:
      return ENavLayout.COLUMN;
    case `column-reverse`:
      return ENavLayout.COLUMN_REVERSE;
    case `row`:
      return ENavLayout.ROW;
    case `row-reverse`:
      return ENavLayout.ROW_REVERSE;
    case `grid`:
      return ENavLayout.GRID;
    case `geometric`:
      return ENavLayout.GEOMETRIC;
    default:
      return (AssertNever(_, `Unhandled flow-children: ${_}`), ENavLayout.NONE);
  }
}
function CreateVirtualKeyboardRef(_) {
  return {
    ShowVirtualKeyboard: () => {},
    ShowModalKeyboard: () => {},
    SetAsCurrentVirtualKeyboardTarget: () => {},
    HideVirtualKeyboard: () => {},
    DelayHideVirtualKeyboard: () => {},
    BIsActive: () => !1,
    BIsElementValidForInput: () => !1,
  };
}
var VirtualKeyboardRefFactory = import_react.createContext(
  CreateVirtualKeyboardRef,
);
function useVirtualKeyboard(_, _) {
  let { onTextEntered: _, ..._ } = _,
    _ = import_react.useRef(null),
    _ = import_react.useRef({});
  Object.assign(_.current, {
    ..._,
    BIsElementValidForInput: () =>
      _.current && document.activeElement == _.current,
  });
  let _ = useVirtualKeyboardReference(_.current),
    _ = import_react.useCallback(
      (_) => {
        (document.hasFocus() || document.activeElement != _.current) &&
          (_.currentTarget == _.current
            ? _.detail.focusedNode?.Element != _.current &&
              (_.BIsActive() || _.bInVR) &&
              _.DelayHideVirtualKeyboard()
            : console.warn(
                `keyboard got blur event, but it's not the active element`,
              ));
      },
      [_],
    ),
    _ = import_react.useCallback(
      (_) => !_.bInVR && _.pointerType === `mouse`,
      [_],
    ),
    _ = import_react.useCallback(
      (_) => {
        _(_) || _.ShowVirtualKeyboard();
      },
      [_, _],
    ),
    _ = useRefCallbackWithCleanup(
      (_) => {
        _.current = _;
        let _ = [];
        return (
          _ &&
            (_.addEventListener(`focus`, _.SetAsCurrentVirtualKeyboardTarget),
            _.push(() =>
              _.removeEventListener(
                `focus`,
                _.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            _.addEventListener(`click`, _),
            _.push(() => _.removeEventListener(`click`, _)),
            _.push(RegisterGamepadOKEvent(_, _.ShowVirtualKeyboard)),
            _.push(RegisterGamepadBlurEvent(_, _))),
          () => _.forEach((_) => _())
        );
      },
      [_, _, _],
    );
  return (
    import_react.useLayoutEffect(
      () => (
        setRef(_, {
          TakeFocusAndShowKeyboard: (_) => {
            let _ = _.current;
            _ &&
              (document.activeElement != _ && _.focus(),
              !(_ && _(_)) && _.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            _.HideVirtualKeyboard();
          },
        }),
        () => setRef(_, null)
      ),
      [_, _, _],
    ),
    _
  );
}
function useVirtualKeyboardReference(_) {
  let _ = import_react.useRef(void 0),
    _ = import_react.useContext(VirtualKeyboardRefFactory);
  return ((_.current ||= _(_ || {})), _.current);
}
function ExpandVirtualKeyboardProps(_) {
  let {
    onEnterKeyPress: _,
    strEnterKeyLabel: _,
    onKeyboardNavOut: _,
    onKeyboardShow: _,
    onKeyboardFullyVisible: _,
    onTextEntered: _,
    BIsElementValidForInput: _,
    ..._
  } = _;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: _,
      strEnterKeyLabel: _,
      onKeyboardNavOut: _,
      onKeyboardShow: _,
      onKeyboardFullyVisible: _,
      onTextEntered: _,
      BIsElementValidForInput: _,
    },
    props: _,
  };
}
var ControllerContext = import_react.createContext(void 0);
function useFocusNavController() {
  return import_react.useContext(ControllerContext);
}
function useShowDebugFocusRing() {
  return (
    useSubscribableValue(useFocusNavController()?.GetShowDebugFocusRing()) ?? !1
  );
}
var FocusNavigationWindowContext = import_react.createContext({
  focusNavWindow: null,
  bSupportsFocus: !0,
});
function useFocusNavigationWindowContext() {
  return import_react.useContext(FocusNavigationWindowContext)?.focusNavWindow;
}
function useNavigationSourceSupportsFocus(_ = !0) {
  return (
    import_react.useContext(FocusNavigationWindowContext)?.bSupportsFocus ?? _
  );
}
var FocusNavigationRoot = import_react.forwardRef(function (_, _) {
  let {
      navID: _,
      onActivated: _,
      onDeactivated: _,
      navTreeRef: _,
      enabled: _,
      modal: _,
      virtualFocus: _,
      historyMode: _,
      parentEmbeddedNavTree: _,
      onGlobalButtonDown: _,
      disableFocusClasses: _,
      disabledRoot: _,
      excludeTreeFromScrollRegionSearch: _,
      "flow-children": _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = ExpandNavProps(_);
  return useFocusNavController()
    ? (0, import_jsx_runtime.jsx)(FocusNavRootContainer, {
        navID: _,
        onActivated: _,
        onDeactivated: _,
        navTreeRef: _,
        enabled: _,
        modal: _,
        virtualFocus: _,
        historyMode: _,
        parentEmbeddedNavTree: _,
        onGlobalButtonDown: _,
        disableFocusClasses: _,
        disabledRoot: _,
        excludeTreeFromScrollRegionSearch: _,
        "flow-children": _,
        ..._,
        ..._,
        children: (0, import_jsx_runtime.jsx)(`div`, {
          ..._,
          ref: _,
        }),
      })
    : (0, import_jsx_runtime.jsx)(`div`, {
        ..._,
        ref: _,
      });
});
function FocusNavRootContainer(_) {
  let {
      navID: _,
      onActivated: _,
      onDeactivated: _,
      navTreeRef: _,
      enabled: _ = !0,
      modal: _ = !1,
      virtualFocus: _ = !1,
      historyMode: _,
      children: _,
      parentEmbeddedNavTree: _,
      onGlobalButtonDown: _,
      disableFocusClasses: _ = !1,
      disabledRoot: _ = !1,
      excludeTreeFromScrollRegionSearch: _ = !1,
      "flow-children": _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = ExpandNavProps(_),
    { refDiv: _, tree: _ } = useFocusNavRoot({
      navID: _,
      parentEmbeddedNavTree: _,
      disabledRoot: _,
      enabled: _,
      onGlobalButtonDown: _,
      navTreeRef: _,
      virtualFocus: _,
      modal: _,
      historyMode: _,
      excludeTreeFromScrollRegionSearch: _,
    });
  (useCallbackList(_.OnActivateCallbacks, _),
    useCallbackList(_.OnDeactivateCallbacks, _),
    useRootGamepadEvents(_, _, _),
    import_react.useLayoutEffect(() => {
      let _ = PanelFlowChildrenToNavLayout(_);
      _.Root.SetProperties({
        ..._,
        layout: _,
      });
    }));
  let _ = useMultipleRefs(_, _.props.ref);
  return (0, import_jsx_runtime.jsx)(ActiveTreeContextRoot, {
    tree: _ ? null : _,
    disableFocusClasses: _ || _,
    children: (0, import_jsx_runtime.jsx)(GamepadNavigationContext.Provider, {
      value: _ ? null : _.Root,
      children: import_react.cloneElement(_, {
        _: _,
        "data-react-nav-root": _,
        ref: _,
      }),
    }),
  });
}
function useFocusNavRoot(_) {
  let {
      navID: _,
      parentEmbeddedNavTree: _,
      disabledRoot: _,
      excludeTreeFromScrollRegionSearch: _,
      enabled: _,
      navTreeRef: _,
      onGlobalButtonDown: _,
      ..._
    } = _,
    _ = useFocusNavController(),
    _ = useFocusNavigationWindowContext() || _.GetDefaultContext(),
    _ = import_react.useContext(GamepadNavigationContext),
    [_] = import_react.useState(() =>
      _.NewGamepadNavigationTree(_, _, _ ?? _?.Tree, {
        ..._,
        bIsEmbeddedInLegacyTree: !!_,
      }),
    ),
    _ = import_react.useRef(null);
  return (
    _.SetOnGlobalButtonDown(_),
    import_react.useEffect(
      () => _.RegisterNavigationItem(_.Root, _.current),
      [_, _],
    ),
    import_react.useEffect(() => {
      _.SetIsEnabled(_);
    }, [_, _]),
    import_react.useEffect(() => {
      _.SetExcludeFromScrollRegionSearch(_);
    }, [_, _]),
    import_react.useEffect(() => {
      if (!_)
        return _.RegisterGamepadNavigationTree(
          _,
          _.current.ownerDocument.defaultView,
        );
    }, [_, _, _]),
    import_react.useEffect(() => (setRef(_, _), () => setRef(_, null)), [_, _]),
    {
      refDiv: _,
      tree: _,
    }
  );
}
var ActiveFocusNavTreeContext = import_react.createContext({
  bActiveTree: !1,
  bActiveTreeWithinWindow: !1,
  bDisableFocusClasses: !1,
  bIsMounted: !1,
});
function ActiveTreeContextRoot(_) {
  let { tree: _, disableFocusClasses: _ = !1, children: _ } = _,
    [_, _] = import_react.useState(_?.BIsActive() || !1),
    [_, _] = import_react.useState(_?.BIsActiveWithinWindow() || !1),
    _ = useSubscribableValue(_?.SubscribableIsMounted) ?? !1;
  import_react.useEffect(() => {
    if (!_) {
      (_(!1), _(!1));
      return;
    }
    (_(_.BIsActive()), _(_.BIsActiveWithinWindow()));
    let _ = _.OnActiveStateChangedCallbacks.Register(() => {
        (_(_.BIsActive()), _(_.BIsActiveWithinWindow()));
      }),
      _ = _.OnActiveWithinWindowChangedCallbacks.Register(() =>
        _(_.BIsActiveWithinWindow()),
      );
    return () => {
      (_.Unregister(), _.Unregister());
    };
  }, [_]);
  let _ = import_react.useMemo(
    () => ({
      bActiveTree: _,
      bActiveTreeWithinWindow: _,
      bDisableFocusClasses: _,
      bIsMounted: _,
    }),
    [_, _, _, _],
  );
  return (0, import_jsx_runtime.jsx)(ActiveFocusNavTreeContext.Provider, {
    value: _,
    children: _,
  });
}
function useActiveFocusNavTreeContext() {
  return import_react.useContext(ActiveFocusNavTreeContext);
}
var GamepadNavigationContext = import_react.createContext(null),
  FocusRingNavigationContext = import_react.createContext(
    NullFocusRingListener,
  );
function useGamepadNavigationNode(_, _) {
  let _ = import_react.useRef(null);
  return (
    _ &&
      (!_.current || _.current.m_Parent != _) &&
      (_.current = _.Tree.CreateNode(_, _)),
    _.current
  );
}
function useFocusNavRef(_) {
  let { navRef: _, ..._ } = _,
    _ = import_react.useRef(null),
    _ = (0, import_react.useContext)(GamepadNavigationContext),
    _ = useGamepadNavigationNode(
      _,
      (0, import_react.useContext)(FocusRingNavigationContext),
    );
  return (
    import_react.useLayoutEffect(() => {
      _ && _.SetProperties(_);
    }),
    import_react.useLayoutEffect(() => {
      if (!_) return;
      let _ = _.Tree.RegisterNavigationItem(_, _.current);
      return () => {
        _();
      };
    }, [_, _, _]),
    import_react.useLayoutEffect(() => {
      if (_ && _) return (setRef(_, _.CreateHandle()), () => setRef(_, null));
    }, [_, _]),
    {
      ref: _,
      node: _,
    }
  );
}
function useHandleRequestFocusEvent(_) {
  let _ = import_react.useRef(null),
    _ = import_react.useRef(null);
  return (
    import_react.useEffect(
      () => () => {
        _.current?.();
      },
      [],
    ),
    import_react.useCallback(
      (_) => {
        _.current !== _ &&
          ((_.current = _),
          _.current?.(),
          (_.current = null),
          _ &&
            (_.current = RegisterGamepadRequestFocusEvent(_, (_) =>
              !_ || _.GetFocusable() == `none`
                ? !1
                : _.BTakeFocus(void 0, _.detail.button),
            )));
      },
      [_],
    )
  );
}
function ExpandGamepadEventProps(_) {
  let {
      onButtonDown: _,
      onButtonUp: _,
      onOKButton: _,
      onCancelButton: _,
      onSecondaryButton: _,
      onOptionsButton: _,
      onGamepadDirection: _,
      onGamepadFocus: _,
      onGamepadBlur: _,
      onMenuButton: _,
      onOKActionDescription: _,
      onCancelActionDescription: _,
      onSecondaryActionDescription: _,
      onOptionsActionDescription: _,
      onMenuActionDescription: _,
      actionDescriptionMap: _,
      ..._
    } = _,
    _ = {};
  return (
    _ !== void 0 && (_.onButtonDown = _),
    _ !== void 0 && (_.onButtonUp = _),
    _ !== void 0 && (_.onOKButton = _),
    _ !== void 0 && (_.onCancelButton = _),
    _ !== void 0 && (_.onSecondaryButton = _),
    _ !== void 0 && (_.onOptionsButton = _),
    _ !== void 0 && (_.onMenuButton = _),
    _ !== void 0 && (_.onGamepadDirection = _),
    _ !== void 0 && (_.onGamepadFocus = _),
    _ !== void 0 && (_.onGamepadBlur = _),
    {
      gamepadEvents: _,
      actionDescriptions: ConsolidateActionDescriptionMap({
        onOKActionDescription: _,
        onCancelActionDescription: _,
        onSecondaryActionDescription: _,
        onOptionsActionDescription: _,
        onMenuActionDescription: _,
        actionDescriptionMap: _,
      }),
      props: _,
    }
  );
}
function ExpandNavProps(_) {
  let {
      autoFocus: _,
      preferredFocus: _,
      disableNavSounds: _,
      fnCanTakeFocus: _,
      childFocusDisabled: _,
      focusableIfEmpty: _,
      onFocusWithin: _,
      navKey: _,
      noFocusRing: _,
      focusRingSizeElementID: _,
      focusRingHasBorderRadius: _,
      focusable: _,
      navRef: _,
      actionDescriptionMap: _,
      onMoveUp: _,
      onMoveRight: _,
      onMoveDown: _,
      onMoveLeft: _,
      navEntryPreferPosition: _,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewType: _,
      resetNavOnEntry: _,
      scrollRegionToStartOrEnd: _,
      excludeFromScrollRegionSearch: _,
      ..._
    } = _,
    {
      gamepadEvents: _,
      actionDescriptions: _,
      props: _,
    } = ExpandGamepadEventProps(_);
  return {
    elemProps: _,
    navOptions: {
      autoFocus: _,
      preferredFocus: _,
      disableNavSounds: _,
      fnCanTakeFocus: _,
      childFocusDisabled: _,
      focusableIfEmpty: _,
      onFocusWithin: _,
      navKey: _,
      noFocusRing: _,
      focusRingSizeElementID: _,
      focusRingHasBorderRadius: _,
      focusable: _,
      navRef: _,
      onMoveUp: _,
      onMoveRight: _,
      onMoveDown: _,
      onMoveLeft: _,
      navEntryPreferPosition: _,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewType: _,
      resetNavOnEntry: _,
      scrollRegionToStartOrEnd: _,
      excludeFromScrollRegionSearch: _,
      actionDescriptionMap: {
        ..._,
        ..._,
      },
    },
    gamepadEvents: _,
  };
}
function FocusReactiveElementFactory(_) {
  return function (_) {
    let {
        focusClassName: _,
        focusWithinClassName: _,
        bFocusableByDefault: _,
        className: _,
        divRef: _,
        node: _,
        tabIndex: _,
        children: _,
        ..._
      } = _,
      _ = useNavigationSourceSupportsFocus(),
      _ = useSubscribableValue(_.SubscribableHasFocus) && _,
      _ = useSubscribableValue(_.SubscribableFocusWithin) && _,
      {
        bActiveTree: _,
        bActiveTreeWithinWindow: _,
        bDisableFocusClasses: _,
        bIsMounted: _,
      } = useActiveFocusNavTreeContext(),
      _ = _ && !_,
      _ = _ && !_ && (_ !== void 0 || _);
    return import_react.createElement(
      _,
      {
        ..._,
        className: (0, import_classnames.default)(_, _ && _ && _, _ && _ && _),
        tabIndex: _ ? -1 : _,
        ref: _,
      },
      _,
    );
  };
}
var FocusReactiveDiv = FocusReactiveElementFactory(`div`);
function DefaultOKHandler(_) {
  return (
    AudioStore.PlayNavSound(ENavigationSoundType.DefaultOk),
    IsHTMLElement$1(_.currentTarget) && _.currentTarget.click(),
    !0
  );
}
var FocusReactiveElementWrapper = import_react.createContext(void 0),
  FocusReactiveElementWrapperProvider = FocusReactiveElementWrapper.Provider;
function FocusableElementFactory(_, _, _, _, _) {
  let {
      elemProps: { focusClassName: _, children: _, "flow-children": _, ..._ },
      navOptions: _,
      gamepadEvents: _,
    } = ExpandNavProps(_),
    {
      bFocusableByDefault: _ = !0,
      bActivateByDefault: _ = !1,
      bDOMElementFocusByDefault: _ = _,
    } = _ || {};
  _.focusable === void 0 && !_.disabled && _ && (_.focusable = !0);
  let { ref: _, node: _ } = useFocusNavRef({
    layout: PanelFlowChildrenToNavLayout(_),
    ..._,
  });
  (_.onOKButton ||
    (((`onClick` in _ && _.onClick) || (_ && (_ === !0 || _(_)))) &&
      (_.onOKButton = DefaultOKHandler)),
    _.focusable && !_
      ? (_.tabIndex = _.tabIndex || 0)
      : !_.focusable && _ && (_.tabIndex = _.tabIndex ?? -1),
    useGamepadEvents(_, _));
  let _ = useMultipleRefs(_, _, useHandleRequestFocusEvent(_)),
    _ = (0, import_react.useContext)(FocusReactiveElementWrapper)?.Component,
    _ = {
      ..._,
    };
  return (
    `onClick` in _ && (_.role ??= `button`),
    _
      ? ((_ = {
          ..._,
          divRef: _,
          node: _,
          focusClassName: (0, import_classnames.default)(_, `gpfocus`),
          focusWithinClassName: `gpfocuswithin`,
          bFocusableByDefault: _,
          className: (0, import_classnames.default)(_.className, `Focusable`),
        }),
        (0, import_jsx_runtime.jsx)(GamepadNavigationContext.Provider, {
          value: _,
          children: _
            ? import_react.createElement(
                _,
                {
                  ..._,
                  Component: _,
                },
                _,
              )
            : import_react.createElement(_, _, _),
        }))
      : import_react.createElement(
          _,
          {
            ..._,
            ref: _,
            className: (0, import_classnames.default)(_.className, `Focusable`),
          },
          _,
        )
  );
}
function FocusableElement(_, _) {
  let _ = FocusReactiveElementFactory(_);
  return import_react.forwardRef(function (_, _) {
    return FocusableElementFactory(_, _, _, _, _);
  });
}
function FocusableInputElement(_) {
  let _ = FocusReactiveElementFactory(_);
  return import_react.forwardRef(function (_, _) {
    let {
        virtualKeyboardProps: _,
        props: { refKeyboardHandle: _, ..._ },
      } = ExpandVirtualKeyboardProps(_),
      _ = useMultipleRefs(_, useVirtualKeyboard(_, _));
    return FocusableElementFactory(_, _, _, _);
  });
}
function CreateFocusNavRef() {
  return import_react.createRef();
}
var FocusableDiv = FocusableElement(`div`, {
    bDOMElementFocusByDefault: !1,
  }),
  FocusableButton = FocusableElement(`button`, {
    bActivateByDefault: (_) => _.type === `submit`,
  }),
  FocusableAnchorInner = FocusableElement(`a`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  FocusableAnchor = import_react.forwardRef(function (_, _) {
    let { href: _ = `#`, ..._ } = _;
    return (0, import_jsx_runtime.jsx)(FocusableAnchorInner, {
      ref: _,
      href: _,
      ..._,
    });
  }),
  FocusableInput = FocusableInputElement(`input`),
  FocusableTextarea = FocusableInputElement(`textarea`),
  FocusableImg = FocusableElement(`img`, {
    bDOMElementFocusByDefault: !1,
  }),
  FocusableLabel = FocusableElement(`label`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  PanelSection = FocusableElement(`section`, {
    bFocusableByDefault: !1,
  }),
  PanelForm = FocusableElement(`form`, {
    bFocusableByDefault: !1,
  }),
  PanelSummary = FocusableElement(`summary`, {
    bActivateByDefault: !0,
  }),
  PanelDetails = FocusableElement(`details`, {
    bFocusableByDefault: !1,
  });
function useActivateNavTree(_, _, _ = !1) {
  import_react.useEffect(() => {
    let _ = _.current;
    _ && (_ ? _.Activate(_) : _.Deactivate());
  }, [_, _, _]);
}
var unknown = 0,
  global$1 = 3,
  application = 5,
  subscription = 6,
  search = 7,
  cart = 8,
  _ = 9,
  storemenu = 12,
  about = 14,
  suggest = 15,
  _ = 16,
  creator = 18,
  wishlist = 25,
  stats = 26,
  spotlight = 40,
  message = 41,
  footer = 44,
  header = 45,
  name = 46,
  notification = 48,
  category = 49,
  steamdeck = 50,
  login = 60,
  prompt = 61,
  recommendations = 70,
  categories = 71,
  hardware = 72,
  waystoplay = 73,
  specialsections = 74,
  more = 75,
  popular = 79,
  recent = 80,
  query = 151,
  genre = 200,
  specials = 2300,
  breadcrumbs = 205,
  freestuff = 220,
  demos = 1900,
  videos = 100002,
  browse = 230,
  _ = 231,
  under10 = 232,
  under5 = 233,
  publisher = 234,
  publishers = 235,
  _ = 237,
  gettaggames = 238,
  explore = 239,
  tags = 241,
  Action = 250,
  Adventure = 251,
  Strategy = 252,
  _ = 253,
  Indie = 254,
  Casual = 256,
  Family = 257,
  Simulation = 258,
  Racing = 259,
  Sports = 260,
  recommended = 300,
  morelike = 307,
  byafriend = 313,
  ajaxgetfriendactivity = 315,
  bundle = 430,
  checkout = 506,
  gift = 507,
  self$1 = 508,
  purchaserequest = 511,
  display = 512,
  initial = 513,
  gifts = 514,
  facebook = 551,
  twitter = 552,
  referral = 553,
  summersale = 600,
  prizebooth = 610,
  promotion = 614,
  sale = 615,
  email = 620,
  autumnsale = 660,
  wintersale = 661,
  yearinreview = 662,
  springsale = 663,
  mobileapp = 700,
  summary = 701,
  mobilestorefront = 702,
  home = 703,
  renderspecials = 860,
  recommend = 861,
  updated = 1e3,
  curators = 1050,
  curatorrecommendations = 1051,
  ajaxgetcuratorrecommendations = 1052,
  curatorscombinedrecommendations = 1053,
  ajaxgetcombinedrecommendations = 1054,
  curatorlist = 1055,
  curator = 1056,
  curatorfeaturedlist = 1057,
  curator_featured_list = 1057,
  mycuratorsreviewing = 1058,
  creatorfeaturedrecs = 1059,
  new_dlc = 1060,
  curatorlistcapsule = 1062,
  widget = 1100,
  appvisibilitystats = 1101,
  render = 1200,
  _ = 1453,
  games = 1452,
  software = 1451,
  macos = 1480,
  linux = 1490,
  controller = 1500,
  freetoplay = 1510,
  earlyaccess = 1520,
  pccafe = 1530,
  remoteplayphone = 1540,
  remoteplaytablet = 1550,
  remoteplaytv = 1560,
  remoteplaytogether = 1570,
  remoteplay = 1581,
  turnbasedrpg = 1582,
  arcaderhythm = 1583,
  greatondeck = 1584,
  remoteplaylanding = 1585,
  fightingmartialarts = 1586,
  actionfps = 1587,
  hackandslash = 1588,
  actionrunjump = 1589,
  shmup = 1590,
  adventure = 1591,
  action = 1592,
  adventurerpg = 1593,
  hiddenobject = 1594,
  metroidvania = 1595,
  puzzlematching = 1596,
  storyrich = 1597,
  visualnovel = 1598,
  casual = 1559,
  querypaginated = 1600,
  n_section = 1601,
  rpgjrpg = 1602,
  rpgpartybased = 1603,
  roguelikeroguelite = 1604,
  rpgaction = 1605,
  _ = 1606,
  rpgstrategytactics = 1607,
  rpgturnbased = 1608,
  simulation = 1609,
  simbuildingautomation = 1610,
  simdating = 1611,
  simfarmingcrafting = 1612,
  simhobbysim = 1613,
  simlife = 1614,
  simphysicssandbox = 1615,
  simspaceflight = 1616,
  strategy = 1617,
  strategycardboard = 1618,
  strategycitiessettlements = 1619,
  soundtracks = 1620,
  strategygrand4x = 1625,
  strategymilitary = 1626,
  strategyrealtime = 1627,
  towerdefense = 1628,
  strategyturnbased = 1629,
  sportsandracing = 1630,
  sports = 1631,
  sportsfishinghunting = 1632,
  sportsindividual = 1633,
  racing = 1634,
  racingsim = 1635,
  sportssim = 1636,
  sportsteam = 1637,
  anime = 1638,
  horror = 1639,
  mysterydetective = 1640,
  explorationopenworld = 1641,
  sciencefiction = 1642,
  space = 1643,
  survival = 1644,
  multiplayercoop = 1645,
  multiplayerlan = 1646,
  multiplayerlocalparty = 1647,
  multiplayermmo = 1648,
  multiplayer = 1649,
  multiplayeronlinecompetitive = 1650,
  singleplayer = 1651,
  upcoming = 1700,
  ajaxgetappinfoforcap = 2100,
  events = 2108,
  subscriptions = 2109,
  _ = 2110,
  subscriptionplansea = 2111,
  download_event = 2112,
  reminder = 2113,
  steamtv = 2200,
  recommender = 2400,
  labs = 2500,
  automaticshow = 2501,
  microtrailers = 2502,
  deepdive = 2504,
  dbdetailsmulti = 2506,
  dbgetlinkparam = 2507,
  trendingreviews = 2600,
  ajaxgetrecentreviews = 2601,
  lunarnewyear2020 = 2700,
  lunarnewyear = 2701,
  lunarnewyearmarket = 2702,
  steamclient = 5e3,
  library = 5100,
  friendsui = 5200,
  friendcontextmenu = 5201,
  nextfest = 6e3,
  topsellers = 7e3,
  steamcharts = 7001,
  weeklytopsellers = 7002,
  topchartlist = 7003,
  overview = 7004,
  mostplayed = 7005,
  salesmartdailyactiveuserdemo = 7006,
  salesmartmostplayeddemo = 7007,
  salesmartdecktopplayed = 7008,
  salesmartcategory = 7009,
  vrhardwarelanding = 7010,
  monthlytopreleases = 7011,
  bestofyear = 7012,
  apphome = 1e5,
  images = 100001,
  allnews = 100003,
  news = 100004,
  announcements = 100005,
  discussions = 100006,
  reporteddiscussions = 100007,
  tradingforum = 100008,
  guides = 100009,
  reviews = 100010,
  positivereviews = 100011,
  negativereviews = 100012,
  workshop = 100013,
  broadcasts = 100014,
  eventcomments = 100015,
  sharedfiles = 100100,
  filedetails = 100101,
  screenshot = 100102,
  workshopitem = 100103,
  mtxitem = 100104,
  collection = 100105,
  guide = 100106,
  integratedguide = 100107,
  merch = 100108,
  artwork = 100109,
  video = 100110,
  topicsearch = 100201,
  singletopic = 100202,
  profiles = 100300,
  review = 100301,
  profileshowcase = 100302,
  broadcast = 100400,
  watch = 100401,
  friendactivityfeed = 100500,
  announcement = 100501,
  curatorreview = 100502,
  friendpurchase = 100503,
  workshopitempublished = 100504,
  artworkpublished = 100505,
  screenshotpublished = 100506,
  guidepublished = 100507,
  collectionpublished = 100508,
  itemfavorited = 100509,
  userreviewpublished = 100510,
  salecreatorhome = 100700,
  saleitembrowse = 100701,
  salefacetbrowse = 100702,
  salesection = 100703,
  saletabsection = 100704,
  salebroadcast = 100705,
  salecuratorrec = 100706,
  saleeventsched = 100707,
  salesubscription = 100708,
  saleitemsearch = 100709,
  salesmartwishlist = 100710,
  salesmartir = 100711,
  salesmartdlc = 100712,
  salesmarttagrec = 100713,
  salebrowsetopwishlisted = 100714,
  salebrowsetrendingwishlisted = 100715,
  salebrowsepopularcomingsoon = 100716,
  salebrowsemostplayeddemo = 100717,
  salebrowsedailyactiveuserdemo = 100718,
  salebrowseplayednowdemo = 100719,
  salebrowserecentlyreleased = 100720,
  salebrowsepopularpurchased = 100721,
  salebrowsepopularpurchaseddiscounted = 100722,
  salebrowsediscounted = 100723,
  salebrowseprice = 100724,
  salebrowsenewandtrending = 100725,
  salebrowsetopsellers = 100726,
  salebrowsetoprated = 100727,
  discoveryqueue2022 = 100728,
  saleeventsection = 100729,
  salesectionlinks = 100730,
  salesectionrewards = 100731,
  salesectiontext = 100732,
  salesectioneventschedule = 100733,
  salesmartpersonalizedcarousel = 100734,
  salesmartwr = 100736,
  salesmartwishlist_allsale = 100737,
  salesmartir_allsale = 100738,
  autopopulatetag = 100739,
  autopopulatecategory = 100740,
  salesmartrecentevents = 100741,
  seasonpassproductpage = 100742,
  itemcollections = 100743,
  crosspromotesalepage = 100744,
  salequiz = 100746,
  templatemediacontent = 100747,
  templatefaq = 100748,
  templatetechspec = 100749,
  topnewreleases = 100750,
  newreleases = 100751,
  salebrowsetrendingfree = 100752,
  trendingfree = 100753,
  reactroot = 100754,
  bundlelist = 100755,
  verifiedprogram = 100756,
  trailercarousel = 100757,
  greatonframe = 100804,
  salesmartsale_events_only = 100805,
  naveventdictionary_default$1 = {
    unknown: 0,
    "store.steampowered.com": 1,
    "steamcommunity.com": 2,
    global: 3,
    default: 4,
    application: 5,
    subscription: 6,
    search: 7,
    cart: 8,
    app: 9,
    "global-nav": 10,
    "global-account": 11,
    storemenu: 12,
    "search-suggestion": 13,
    about: 14,
    suggest: 15,
    dlc: 16,
    "storemenu-recommendedtags": 17,
    creator: 18,
    "footer-genre-dropdown": 20,
    "footer-category-dropdown": 21,
    "footer-about-dropdown": 22,
    "footer-help-dropdown": 23,
    "footer-publisher-catalogs": 24,
    wishlist: 25,
    stats: 26,
    spotlight: 40,
    message: 41,
    "marketing-message": 42,
    "daily-deal": 43,
    footer: 44,
    header: 45,
    name: 46,
    "more-details": 47,
    notification: 48,
    category: 49,
    steamdeck: 50,
    login: 60,
    prompt: 61,
    "join-steam": 62,
    "successful-login": 63,
    "successful-joinsteam": 64,
    recommendations: 70,
    categories: 71,
    hardware: 72,
    waystoplay: 73,
    specialsections: 74,
    more: 75,
    "big-category-link": 76,
    "small-category-link": 77,
    "package-purchase-recommendations": 78,
    popular: 79,
    recent: 80,
    "main-cluster": 100,
    "featured-win-games": 101,
    "featured-mac-games": 102,
    "tab-NewReleases": 103,
    "tab-TopSellers": 104,
    "tab-ComingSoon": 105,
    "tab-Discounts": 106,
    "smallcap-videos": 107,
    "smallcap-demos": 108,
    "home-headlines": 109,
    "community-activity": 110,
    "home-underten": 111,
    "home-specials": 112,
    "home-partners": 113,
    "home-steam-install": 114,
    "community-activity-recentlyplayed": 115,
    "community-activity-recentlybought": 116,
    "promo-banner": 117,
    "promo-takeover": 118,
    "featured-linux-games": 119,
    "updated-games": 120,
    "featured-updated-games": 121,
    "discovery-queue": 122,
    "new-on-steam": 123,
    "curated-app": 124,
    "home-gutter": 125,
    "upcoming-queue": 126,
    "home-specials-under10": 127,
    "main-cluster-recommended": 128,
    "main-cluster-topseller": 129,
    "main-cluster-newonsteam": 130,
    "recommended-spotlight": 131,
    "hardware-promo": 132,
    "popular-new-on-steam": 133,
    "main-cluster-recommended-byfriends": 134,
    "main-cluster-recommended-bycurators": 135,
    "main-cluster-recenttopseller": 136,
    "home-under10": 137,
    "friends-trending": 138,
    "spotlight-specials": 139,
    "curator-recommended": 140,
    "best-selling-vr": 141,
    "creator-recommendations": 142,
    "live-broadcast": 143,
    "main-cluster-followed-creator": 144,
    "tab-PopularNewReleases": 145,
    "home-big-blue-buttons": 146,
    "home-banner": 147,
    "top-new-releases": 148,
    "curated-main-app": 149,
    "search-results": 150,
    query: 151,
    "search-share": 152,
    genre: 200,
    "large-cluster": 201,
    "find-more": 202,
    "friend-activity": 203,
    specials,
    breadcrumbs: 205,
    freestuff: 220,
    demos,
    "tab-NewDemos": 222,
    "tab-TopDemos": 223,
    "browse-demos": 224,
    videos,
    "popular-videos": 226,
    "tab-NewVideos": 227,
    browse: 230,
    mac: 231,
    under10: 232,
    under5: 233,
    publisher: 234,
    publishers: 235,
    "publisher-listing": 236,
    tag: 237,
    gettaggames: 238,
    explore: 239,
    "browse-tags": 240,
    tags: 241,
    "content-hub-carousel": 242,
    Action: 250,
    Adventure: 251,
    Strategy: 252,
    RPG: 253,
    Indie: 254,
    "Massively Multiplayer": 255,
    Casual: 256,
    Family: 257,
    Simulation: 258,
    Racing: 259,
    Sports: 260,
    recommended: 300,
    "recommendation-main": 301,
    "friend-recommendations": 302,
    "recommended-friendplaytime": 303,
    "recommended-recentlyviewed": 304,
    "recommended-morerecentlyviewed": 305,
    "recommended-genrehighlights": 306,
    morelike: 307,
    "morelike-mainitem": 308,
    "friendactivity.js": 309,
    "friendactivity-wishlist-spotlight": 310,
    "friendactivity-purchases": 311,
    "friendactivity-playedandwanted": 312,
    byafriend: 313,
    "friend-recommendation": 314,
    ajaxgetfriendactivity: 315,
    "recommend-franchise": 316,
    "more-from-franchise": 317,
    "wishlist-capsule": 318,
    "game-highlights": 400,
    "recommend-game": 401,
    "view-own-recommendation": 402,
    "game-purchase": 403,
    "game-purchase-guide": 404,
    "game-purchase-dlc": 405,
    "game-friend-recommendations": 406,
    "game-add-to-wishlist": 407,
    "game-details": 408,
    "game-highlight-tags": 409,
    "game-tags-dialog": 410,
    "game-tags-yours": 411,
    "bundle-component-preview": 412,
    "dlc-parent-app-link": 413,
    "similar-recent-apps": 414,
    "demo-parent-app-link": 415,
    "package-purchase": 420,
    "package-contents": 421,
    "package-details": 422,
    "category-list": 423,
    bundle: 430,
    "bundle-contents": 431,
    "cart-remove-item": 500,
    "cart-items": 501,
    "cart-continue-shopping": 502,
    "cart-purchase": 503,
    "checkout-logo-abandon": 504,
    "checkout-success": 505,
    checkout: 506,
    gift: 507,
    self: 508,
    "checkout-complete-return": 509,
    "checkout-complete-logo": 510,
    purchaserequest: 511,
    display: 512,
    initial: 513,
    gifts: 514,
    "upsell-recommended": 520,
    "upsell-specials": 521,
    "external-site": 550,
    facebook: 551,
    twitter: 552,
    referral: 553,
    summersale: 600,
    prizebooth: 610,
    "activity-game-link": 611,
    "activity-game-discount": 612,
    "prize-info": 613,
    promotion: 614,
    sale: 615,
    "sale-item": 616,
    "sale-dailydeals": 617,
    "sale-publishers": 618,
    "sale-genres": 619,
    email: 620,
    "cart-icon": 621,
    "sale-category-links": 622,
    "sale-notification-callout": 623,
    "sale-yesterdaydeals": 624,
    "sale-flashsales": 625,
    "sale-fromyourwishlist": 626,
    "closed-beta-access": 627,
    "sale-tag-bucket": 628,
    "sale-hero": 629,
    "sale-franchises": 630,
    "sale-dlcforyou": 631,
    "sale-recommended-by-steam-labs": 632,
    "sale-recommended-by-deep-dive": 633,
    "sale-dailydeals-tier2": 634,
    "sale-deep-discounts": 635,
    "sale-deck-mostplayed": 636,
    "home-chart-deckmostplayed": 637,
    "home-deck-banner": 638,
    "sale-tag-bucket-top": 639,
    "sale-dailydeals-none": 640,
    "sale-dailydeals-tags": 641,
    "sale-dailydeals-ir": 642,
    "sale-dailydeals-tier2-none": 645,
    "sale-dailydeals-tier2-tags": 646,
    "sale-dailydeals-tier2-ir": 647,
    "sale-hero-none": 650,
    "sale-hero-tags": 651,
    "sale-hero-ir": 652,
    autumnsale: 660,
    wintersale: 661,
    yearinreview: 662,
    springsale: 663,
    mobileapp: 700,
    summary: 701,
    mobilestorefront: 702,
    home: 703,
    "winter2012-today-square": 800,
    "winter2012-today-square-button": 801,
    "winter2012-hires": 802,
    "winter2012-hires-button": 803,
    "winter2012-yesterday-square": 804,
    "winter2012-yesterday-square-button": 805,
    "winter2012-flash": 806,
    "winter2012-flash-button": 807,
    "winter2012-pack": 808,
    "winter2012-pack-button": 809,
    "winter2012-topsellers": 810,
    "winter2012-topsellers-button": 811,
    "winter2012-vote-winner": 812,
    "winter2012-vote-winner-button": 821,
    "winter2012-vote-option-voting": 813,
    "winter2012-vote-option-voted": 814,
    "winter2012-nav": 815,
    "winter2012-500-callout": 816,
    "winter2012-500-callout-button": 820,
    "winter2012-featured": 817,
    "winter2012-lower-nav": 822,
    "winter2012-vote-option-vote-results": 823,
    "fall2014-48": 850,
    "fall2014-24": 851,
    "fall2014-TopSellers": 852,
    "fall2014-Upcoming": 853,
    "fall2014-Under10": 854,
    "fall2014-Under5": 855,
    "fall2014-PopularNewReleases": 856,
    "fall2014-specials-more": 857,
    "fall2014-recommend-wishlist": 858,
    "fall2014-recommend-contentforyourgames": 859,
    renderspecials: 860,
    recommend: 861,
    "recommended-ranked-played": 862,
    "redeem-wallet-complete-return": 900,
    "redeem-wallet-complete-return-app": 901,
    updated,
    curators,
    curatorrecommendations,
    ajaxgetcuratorrecommendations,
    curatorscombinedrecommendations,
    ajaxgetcombinedrecommendations,
    curatorlist,
    curator,
    curatorfeaturedlist,
    curator_featured_list,
    mycuratorsreviewing,
    creatorfeaturedrecs,
    new_dlc,
    "browse-dlc": 1061,
    curatorlistcapsule,
    widget,
    appvisibilitystats,
    render,
    "recommendationfeed-single-friends": 1210,
    "recommendationfeed-single-curators": 1211,
    "recommendationfeed-single-recent": 1212,
    "recommendationfeed-single-wishlist": 1213,
    "recommendationfeed-single-played": 1214,
    "recommendationfeed-two": 1250,
    "recommendationfeed-four": 1251,
    "winter2014-featured": 1300,
    "winter2014-yesterday": 1301,
    "winter2014-flash": 1302,
    "winter2014-flash2": 1303,
    "winter2014-vote": 1304,
    "winter2014-specials-more": 1305,
    "winter2014-recommend-wishlist": 1306,
    "winter2014-frontpage-wishlist": 1307,
    "winter2014-TopSellers": 1308,
    "winter2014-Upcoming": 1309,
    "winter2014-Under10": 1310,
    "winter2014-Under5": 1311,
    "winter2014-PopularNewReleases": 1312,
    "winter2017-FeaturedBanner": 1313,
    "summer2018-standardview-curated": 1314,
    "summer2018-standardview-recommend-basic": 1315,
    "summer2018-standardview-recommend-neural": 1316,
    "summer2018-mergedview-curated": 1317,
    "summer2018-mergedview-recommend-neural": 1318,
    "summer2018-salien-giveaway": 1319,
    "summer2018-creator-recommend": 1320,
    "summer2018-live-stream": 1321,
    "sale-vr": 1322,
    "sale-moddable": 1323,
    "discovery-queue-0": 1324,
    "wishlist-onsale": 1400,
    "wishlist-newrelease": 1401,
    "greenlight-newrelease": 1402,
    "sales-event-enhanced": 1403,
    "creator-newrelease": 1404,
    "generic-onsale": 1405,
    "topsellers-onsale": 1406,
    "recommended-onsale": 1407,
    "demo-newrelease": 1408,
    "Free to Play": 1420,
    "tab-mostplayednewreleases": 1421,
    "tab-mostplayed": 1422,
    "tab-comingsoon": 1423,
    "tab-discounts": 1424,
    "tab-ConcurrentUsers": 1454,
    _,
    "hub-vr-recommended": 1455,
    "hub-vr-specials": 1459,
    "hub-vr-featured": 1463,
    "hub-vr-takeover": 1467,
    games,
    "hub-games-recommended": 1456,
    "hub-games-specials": 1460,
    "hub-games-featured": 1464,
    "hub-games-takeover": 1468,
    software,
    "hub-software-recommended": 1457,
    "hub-software-specials": 1461,
    "hub-software-featured": 1465,
    "hub-software-takeover": 1469,
    "hub-videos-recommended": 1458,
    "hub-videos-specials": 1462,
    "hub-videos-featured": 1466,
    "hub-videos-takeover": 1470,
    macos,
    "hub-macos-recommended": 1481,
    "hub-macos-specials": 1482,
    "hub-macos-featured": 1483,
    "hub-macos-takeover": 1484,
    linux,
    "hub-linux-recommended": 1491,
    "hub-linux-specials": 1492,
    "hub-linux-featured": 1493,
    "hub-linux-takeover": 1494,
    controller,
    "hub-controller-recommended": 1501,
    "hub-controller-specials": 1502,
    "hub-controller-featured": 1503,
    "hub-controller-takeover": 1504,
    freetoplay,
    "hub-freetoplay-recommended": 1511,
    "hub-freetoplay-specials": 1512,
    "hub-freetoplay-featured": 1513,
    "hub-freetoplay-takeover": 1514,
    earlyaccess,
    "hub-earlyaccess-recommended": 1521,
    "hub-earlyaccess-specials": 1522,
    "hub-earlyaccess-featured": 1523,
    "hub-earlyaccess-takeover": 1524,
    pccafe,
    "hub-pccafe-recommended": 1531,
    "hub-pccafe-specials": 1532,
    "hub-pccafe-featured": 1533,
    "hub-pccafe-takeover": 1534,
    remoteplayphone,
    "hub-remoteplayphone-recommended": 1541,
    "hub-remoteplayphone-specials": 1542,
    "hub-remoteplayphone-featured": 1543,
    "hub-remoteplayphone-takeover": 1544,
    remoteplaytablet,
    "hub-remoteplaytablet-recommended": 1551,
    "hub-remoteplaytablet-specials": 1552,
    "hub-remoteplaytablet-featured": 1553,
    "hub-remoteplaytablet-takeover": 1554,
    remoteplaytv,
    "hub-remoteplaytv-recommended": 1561,
    "hub-remoteplaytv-specials": 1562,
    "hub-remoteplaytv-featured": 1563,
    "hub-remoteplaytv-takeover": 1564,
    remoteplaytogether,
    "hub-remoteplaytogether-recommended": 1571,
    "hub-remoteplaytogether-specials": 1572,
    "hub-remoteplaytogether-featured": 1573,
    "hub-remoteplaytogether-takeover": 1574,
    "remote-play-about": 1580,
    remoteplay,
    turnbasedrpg,
    arcaderhythm,
    greatondeck,
    remoteplaylanding,
    fightingmartialarts,
    actionfps,
    hackandslash,
    actionrunjump,
    shmup,
    adventure,
    action,
    adventurerpg,
    hiddenobject,
    metroidvania,
    puzzlematching,
    storyrich,
    visualnovel,
    casual,
    querypaginated,
    n_section,
    rpgjrpg,
    rpgpartybased,
    roguelikeroguelite,
    rpgaction,
    _,
    rpgstrategytactics,
    rpgturnbased,
    simulation,
    simbuildingautomation,
    simdating,
    simfarmingcrafting,
    simhobbysim,
    simlife,
    simphysicssandbox,
    simspaceflight,
    strategy,
    strategycardboard,
    strategycitiessettlements,
    soundtracks,
    "hub-soundtracks-recommended": 1621,
    "hub-soundtracks-specials": 1622,
    "hub-soundtracks-featured": 1623,
    "hub-soundtracks-takeover": 1624,
    strategygrand4x,
    strategymilitary,
    strategyrealtime,
    towerdefense,
    strategyturnbased,
    sportsandracing,
    sports,
    sportsfishinghunting,
    sportsindividual,
    racing,
    racingsim,
    sportssim,
    sportsteam,
    anime,
    horror,
    mysterydetective,
    explorationopenworld,
    sciencefiction,
    space,
    survival,
    multiplayercoop,
    multiplayerlan,
    multiplayerlocalparty,
    multiplayermmo,
    multiplayer,
    multiplayeronlinecompetitive,
    singleplayer,
    upcoming,
    "comingsoon-recommendedcomingsoon": 1701,
    "comingsoon-popularwishlist": 1702,
    "comingsoon-newdlc": 1703,
    "comingsoon-followedcreator": 1704,
    "comingsoon-mywishlist": 1705,
    "comingsoon-largecap": 1706,
    "tab-PopularUpcoming": 1707,
    "tab-AllUpcoming": 1708,
    "in-library-game-event-update": 1800,
    "on-wishlist-game-event-update": 1801,
    "in-library-game-remind-me": 1802,
    "hub-demos-recommended": 1901,
    "hub-demos-specials": 1902,
    "hub-demos-featured": 1903,
    "hub-demos-takeover": 1904,
    "creator-home-product-page": 2e3,
    "franchise-home-link": 2001,
    ajaxgetappinfoforcap,
    "partner-events": 2101,
    "library-partner-events": 2102,
    "store-partner-events": 2103,
    "steamtv-partner-events": 2104,
    "community-partner-events": 2105,
    "partner-partner-events": 2106,
    "store-calendar-partner-events": 2107,
    events,
    subscriptions,
    _,
    subscriptionplansea,
    download_event,
    reminder,
    steamtv,
    "hub-specials-recommended": 2301,
    "hub-specials-specials": 2302,
    "hub-specials-featured": 2303,
    "hub-specials-takeover": 2304,
    recommender,
    "recommended-by-steam-labs": 2401,
    labs,
    automaticshow,
    microtrailers,
    "now-playing": 2503,
    deepdive,
    "game-add-to-wishlist-deepdive": 2505,
    dbdetailsmulti,
    dbgetlinkparam,
    "recommended-by-deep-dive": 2508,
    "recommended-by-deep-dive-carousel": 2509,
    "recommended-by-deep-dive-carousel_default": 2510,
    "recommended-by-deep-dive-carousel_cluster_recent": 2511,
    "recommended-by-deep-dive-carousel_cluster_games": 2512,
    "recommended-by-deep-dive-carousel_cluster_playtime": 2513,
    "recommended-by-deep-dive-carousel-default": 2514,
    "recommended-by-deep-dive-carousel-cluster-recent": 2515,
    "recommended-by-deep-dive-carousel-cluster-games": 2516,
    "recommended-by-deep-dive-carousel-cluster-playtime": 2517,
    trendingreviews,
    ajaxgetrecentreviews,
    "community-recommendations": 2602,
    lunarnewyear2020,
    lunarnewyear,
    lunarnewyearmarket,
    "steam-logo": 2750,
    "sale-banner": 2751,
    "sale-button-top": 2752,
    "sale-button-bottom": 2753,
    "wishlist-button-bottom": 2754,
    "footer-steam-logo": 2755,
    steamclient,
    library,
    friendsui,
    friendcontextmenu,
    nextfest,
    topsellers,
    steamcharts,
    weeklytopsellers,
    topchartlist,
    overview,
    mostplayed,
    salesmartdailyactiveuserdemo,
    salesmartmostplayeddemo,
    salesmartdecktopplayed,
    salesmartcategory,
    vrhardwarelanding,
    monthlytopreleases,
    bestofyear,
    apphome,
    images,
    allnews,
    news,
    announcements,
    discussions,
    reporteddiscussions,
    tradingforum,
    guides,
    reviews,
    positivereviews,
    negativereviews,
    workshop,
    broadcasts,
    eventcomments,
    sharedfiles,
    filedetails,
    screenshot,
    workshopitem,
    mtxitem,
    collection,
    guide,
    integratedguide,
    merch,
    artwork,
    video,
    topicsearch,
    singletopic,
    profiles,
    review,
    profileshowcase,
    broadcast,
    watch,
    friendactivityfeed,
    announcement,
    curatorreview,
    friendpurchase,
    workshopitempublished,
    artworkpublished,
    screenshotpublished,
    guidepublished,
    collectionpublished,
    itemfavorited,
    userreviewpublished,
    "partner.steamgames.com": 100600,
    "help.steampowered.com": 100601,
    salecreatorhome,
    saleitembrowse,
    salefacetbrowse,
    salesection,
    saletabsection,
    salebroadcast,
    salecuratorrec,
    saleeventsched,
    salesubscription,
    saleitemsearch,
    salesmartwishlist,
    salesmartir,
    salesmartdlc,
    salesmarttagrec,
    salebrowsetopwishlisted,
    salebrowsetrendingwishlisted,
    salebrowsepopularcomingsoon,
    salebrowsemostplayeddemo,
    salebrowsedailyactiveuserdemo,
    salebrowseplayednowdemo,
    salebrowserecentlyreleased,
    salebrowsepopularpurchased,
    salebrowsepopularpurchaseddiscounted,
    salebrowsediscounted,
    salebrowseprice,
    salebrowsenewandtrending,
    salebrowsetopsellers,
    salebrowsetoprated,
    discoveryqueue2022,
    saleeventsection,
    salesectionlinks,
    salesectionrewards,
    salesectiontext,
    salesectioneventschedule,
    salesmartpersonalizedcarousel,
    "promo-takeunder": 100735,
    salesmartwr,
    salesmartwishlist_allsale,
    salesmartir_allsale,
    autopopulatetag,
    autopopulatecategory,
    salesmartrecentevents,
    seasonpassproductpage,
    itemcollections,
    crosspromotesalepage,
    "mm-auto-render": 100745,
    salequiz,
    templatemediacontent,
    templatefaq,
    templatetechspec,
    topnewreleases,
    newreleases,
    salebrowsetrendingfree,
    trendingfree,
    reactroot,
    bundlelist,
    verifiedprogram,
    trailercarousel,
    "personalcalendar-lastmonth": 100800,
    "personalcalendar-lastweek": 100801,
    "personalcalendar-calendar": 100802,
    "personalcalendar-homepage": 100803,
    greatonframe,
    salesmartsale_events_only,
  },
  naveventdictionary_default = naveventdictionary_default$1;
function BIsKnownEventComponent(_) {
  return _ in naveventdictionary_default;
}
var CStoreNavEvents = class _ {
    static InstrumentLink(_, _, _ = null) {
      let _ = _.GetSNRLinkParam(_, _),
        _ = _.GetCuratorClanIDParam(_);
      return _.AddNavParamToURL(_, _, _);
    }
    static ParseSNR(_) {
      let _ = _.split(`_`) || [];
      return {
        domain: _.DecodeEventComponent(_[0]),
        controller: _.DecodeEventComponent(_[1]),
        method: _.DecodeEventComponent(_[2]),
        submethod: _.DecodeEventComponent(_[3]),
        feature: _.DecodeEventComponent(_[4]),
        depth: _[5] ? Number(_[5]) : void 0,
      };
    }
    static GetSNRLinkParam(_, _ = null) {
      let _ = _.ComputeLinkPrefix(
        _.domain,
        _.controller,
        _.method,
        _.submethod,
      );
      _ = _ ?? _.depth ?? null;
      let _ = _.EncodeEventComponent(_.feature);
      return (_ && ((_ += `_` + _), _ && (_ += `_` + _)), _);
    }
    static GetCuratorClanIDParam(_) {
      return _.curator_clanid ?? null;
    }
    static AddNavParamToURL(_, _, _) {
      if (!_ || _.length == 0) return _;
      try {
        let _ = new URL(EnsureKnownURLScheme(_)),
          _ = new URLSearchParams(_.search);
        return (
          _.set(`snr`, encodeURIComponent(_ ?? ``)),
          _ && _.set(`curator_clanid`, encodeURIComponent(_ ?? ``)),
          _.origin + _.pathname + `?` + _.toString() + _.hash
        );
      } catch (_) {
        return (console.error(_, _), _);
      }
    }
    static ComputeLinkPrefix(_, _, _, _) {
      let _ = ``;
      return (
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        (_ += `_`),
        (_ += _.EncodeEventComponent(_)),
        _
      );
    }
    static EncodeEventComponent(_) {
      return _
        ? BIsKnownEventComponent(_)
          ? `` + naveventdictionary_default[_]
          : (_.match(/^[0-9]+$/) || (_ = _.replace(/^[0-9]+/, ``)),
            _.replace(/[^a-zA-Z0-9\- ]+/g, ``))
        : ``;
    }
    static DecodeEventComponent(_) {
      let _ = _ && parseInt(_);
      if (_ && naveventdictionary_default) {
        for (let _ in naveventdictionary_default)
          if (naveventdictionary_default[_] == _) return _;
      }
      return _.SanitizeEventComponent(_);
    }
    static SanitizeEventComponent(_) {
      return !_ || !_.match(/^[a-zA-Z0-9\-.]*$/) ? `` : _;
    }
  },
  _NavEventContext = import_react.createContext({}),
  _OriginatingNavEventContext = import_react.createContext(void 0);
function NavEventContext(_) {
  let { children: _, ..._ } = _,
    _ = useStoreNavEventContext(),
    _ = import_react.useMemo(
      () => ({
        ..._,
        ..._,
      }),
      [
        _,
        _.domain,
        _.controller,
        _.method,
        _.submethod,
        _.feature,
        _.depth,
        _.curator_clanid,
      ],
    );
  return (0, import_jsx_runtime.jsx)(_NavEventContext.Provider, {
    value: _,
    children: _,
  });
}
function useStoreNavEventContext() {
  return import_react.useContext(_NavEventContext);
}
function useStoreNavLink(_, _, _) {
  let _ = useStoreNavEventContext();
  return import_react.useMemo(
    () => _ && GetStoreNavLink(_, _, _, _),
    [_, _, _, _],
  );
}
function GetStoreNavLink(_, _, _, _) {
  let _ = CStoreNavEvents.GetSNRLinkParam(
      {
        ..._,
        feature: _ || _.feature,
      },
      _,
    ),
    _ = CStoreNavEvents.GetCuratorClanIDParam(_);
  return CStoreNavEvents.AddNavParamToURL(_, _, _);
}
