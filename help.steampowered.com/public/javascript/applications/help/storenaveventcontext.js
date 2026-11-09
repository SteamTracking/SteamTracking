/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime.js";
var require_react_production = __commonJSMin((t) => {
    var n = Symbol.for(`react.transitional.element`),
      r = Symbol.for(`react.portal`),
      i = Symbol.for(`react.fragment`),
      o = Symbol.for(`react.strict_mode`),
      s = Symbol.for(`react.profiler`),
      l = Symbol.for(`react.consumer`),
      u = Symbol.for(`react.context`),
      p = Symbol.for(`react.forward_ref`),
      m = Symbol.for(`react.suspense`),
      h = Symbol.for(`react.memo`),
      g = Symbol.for(`react.lazy`),
      _ = Symbol.iterator;
    function v(t) {
      return typeof t != `object` || !t
        ? null
        : ((t = (_ && t[_]) || t[`@@iterator`]),
          typeof t == `function` ? t : null);
    }
    var y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      x = Object.assign,
      S = {};
    function C(t, n, r) {
      (this.props = t),
        (this.context = n),
        (this.refs = S),
        (this.updater = r || y);
    }
    (C.prototype.isReactComponent = {}),
      (C.prototype.setState = function (t, n) {
        if (typeof t != `object` && typeof t != `function` && t != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, t, n, `setState`);
      }),
      (C.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, `forceUpdate`);
      });
    function w() {}
    w.prototype = C.prototype;
    function T(t, n, r) {
      (this.props = t),
        (this.context = n),
        (this.refs = S),
        (this.updater = r || y);
    }
    var E = (T.prototype = new w());
    (E.constructor = T), x(E, C.prototype), (E.isPureReactComponent = !0);
    var D = Array.isArray,
      O = { H: null, A: null, T: null, S: null, V: null },
      k = Object.prototype.hasOwnProperty;
    function A(t, r, i, o, s, l) {
      return (
        (i = l.ref),
        { $$typeof: n, type: t, key: r, ref: i === void 0 ? null : i, props: l }
      );
    }
    function j(t, n) {
      return A(t.type, n, void 0, void 0, void 0, t.props);
    }
    function M(t) {
      return typeof t == `object` && !!t && t.$$typeof === n;
    }
    function N(t) {
      var n = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        t.replace(/[=:]/g, function (t) {
          return n[t];
        })
      );
    }
    var P = /\/+/g;
    function F(t, n) {
      return typeof t == `object` && t && t.key != null
        ? N(`` + t.key)
        : n.toString(36);
    }
    function I() {}
    function L(t) {
      switch (t.status) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw t.reason;
        default:
          switch (
            (typeof t.status == `string`
              ? t.then(I, I)
              : ((t.status = `pending`),
                t.then(
                  function (n) {
                    t.status === `pending` &&
                      ((t.status = `fulfilled`), (t.value = n));
                  },
                  function (n) {
                    t.status === `pending` &&
                      ((t.status = `rejected`), (t.reason = n));
                  },
                )),
            t.status)
          ) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw t.reason;
          }
      }
      throw t;
    }
    function R(t, i, o, s, l) {
      var u = typeof t;
      (u === `undefined` || u === `boolean`) && (t = null);
      var p = !1;
      if (t === null) p = !0;
      else
        switch (u) {
          case `bigint`:
          case `string`:
          case `number`:
            p = !0;
            break;
          case `object`:
            switch (t.$$typeof) {
              case n:
              case r:
                p = !0;
                break;
              case g:
                return (p = t._init), R(p(t._payload), i, o, s, l);
            }
        }
      if (p)
        return (
          (l = l(t)),
          (p = s === `` ? `.` + F(t, 0) : s),
          D(l)
            ? ((o = ``),
              p != null && (o = p.replace(P, `$&/`) + `/`),
              R(l, i, o, ``, function (t) {
                return t;
              }))
            : l != null &&
              (M(l) &&
                (l = j(
                  l,
                  o +
                    (l.key == null || (t && t.key === l.key)
                      ? ``
                      : (`` + l.key).replace(P, `$&/`) + `/`) +
                    p,
                )),
              i.push(l)),
          1
        );
      p = 0;
      var m = s === `` ? `.` : s + `:`;
      if (D(t))
        for (var h = 0; h < t.length; h++)
          (s = t[h]), (u = m + F(s, h)), (p += R(s, i, o, u, l));
      else if (((h = v(t)), typeof h == `function`))
        for (t = h.call(t), h = 0; !(s = t.next()).done; )
          (s = s.value), (u = m + F(s, h++)), (p += R(s, i, o, u, l));
      else if (u === `object`) {
        if (typeof t.then == `function`) return R(L(t), i, o, s, l);
        throw (
          ((i = String(t)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (i === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : i) +
              `). If you meant to render a collection of children, use an array instead.`,
          ))
        );
      }
      return p;
    }
    function z(t, n, r) {
      if (t == null) return t;
      var i = [],
        o = 0;
      return (
        R(t, i, ``, ``, function (t) {
          return n.call(r, t, o++);
        }),
        i
      );
    }
    function B(t) {
      if (t._status === -1) {
        var n = t._result;
        (n = n()),
          n.then(
            function (n) {
              (t._status === 0 || t._status === -1) &&
                ((t._status = 1), (t._result = n));
            },
            function (n) {
              (t._status === 0 || t._status === -1) &&
                ((t._status = 2), (t._result = n));
            },
          ),
          t._status === -1 && ((t._status = 0), (t._result = n));
      }
      if (t._status === 1) return t._result.default;
      throw t._result;
    }
    var V =
      typeof reportError == `function`
        ? reportError
        : function (t) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var n = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == `object` && t && typeof t.message == `string`
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(n)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, t);
              return;
            }
            console.error(t);
          };
    function H() {}
    (t.Children = {
      map: z,
      forEach: function (t, n, r) {
        z(
          t,
          function () {
            n.apply(this, arguments);
          },
          r,
        );
      },
      count: function (t) {
        var n = 0;
        return (
          z(t, function () {
            n++;
          }),
          n
        );
      },
      toArray: function (t) {
        return (
          z(t, function (t) {
            return t;
          }) || []
        );
      },
      only: function (t) {
        if (!M(t))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return t;
      },
    }),
      (t.Component = C),
      (t.Fragment = i),
      (t.Profiler = s),
      (t.PureComponent = T),
      (t.StrictMode = o),
      (t.Suspense = m),
      (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O),
      (t.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (t) {
          return O.H.useMemoCache(t);
        },
      }),
      (t.cache = function (t) {
        return function () {
          return t.apply(null, arguments);
        };
      }),
      (t.cloneElement = function (t, n, r) {
        if (t == null)
          throw Error(
            `The argument must be a React element, but you passed ` + t + `.`,
          );
        var i = x({}, t.props),
          o = t.key,
          s = void 0;
        if (n != null)
          for (l in (n.ref !== void 0 && (s = void 0),
          n.key !== void 0 && (o = `` + n.key),
          n))
            !k.call(n, l) ||
              l === `key` ||
              l === `__self` ||
              l === `__source` ||
              (l === `ref` && n.ref === void 0) ||
              (i[l] = n[l]);
        var l = arguments.length - 2;
        if (l === 1) i.children = r;
        else if (1 < l) {
          for (var u = Array(l), p = 0; p < l; p++) u[p] = arguments[p + 2];
          i.children = u;
        }
        return A(t.type, o, void 0, void 0, s, i);
      }),
      (t.createContext = function (t) {
        return (
          (t = {
            $$typeof: u,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (t.Provider = t),
          (t.Consumer = { $$typeof: l, _context: t }),
          t
        );
      }),
      (t.createElement = function (t, n, r) {
        var i,
          o = {},
          s = null;
        if (n != null)
          for (i in (n.key !== void 0 && (s = `` + n.key), n))
            k.call(n, i) &&
              i !== `key` &&
              i !== `__self` &&
              i !== `__source` &&
              (o[i] = n[i]);
        var l = arguments.length - 2;
        if (l === 1) o.children = r;
        else if (1 < l) {
          for (var u = Array(l), p = 0; p < l; p++) u[p] = arguments[p + 2];
          o.children = u;
        }
        if (t && t.defaultProps)
          for (i in ((l = t.defaultProps), l)) o[i] === void 0 && (o[i] = l[i]);
        return A(t, s, void 0, void 0, null, o);
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (t) {
        return { $$typeof: p, render: t };
      }),
      (t.isValidElement = M),
      (t.lazy = function (t) {
        return { $$typeof: g, _payload: { _status: -1, _result: t }, _init: B };
      }),
      (t.memo = function (t, n) {
        return { $$typeof: h, type: t, compare: n === void 0 ? null : n };
      }),
      (t.startTransition = function (t) {
        var n = O.T,
          r = {};
        O.T = r;
        try {
          var i = t(),
            o = O.S;
          o !== null && o(r, i),
            typeof i == `object` &&
              i &&
              typeof i.then == `function` &&
              i.then(H, V);
        } catch (t) {
          V(t);
        } finally {
          O.T = n;
        }
      }),
      (t.unstable_useCacheRefresh = function () {
        return O.H.useCacheRefresh();
      }),
      (t.use = function (t) {
        return O.H.use(t);
      }),
      (t.useActionState = function (t, n, r) {
        return O.H.useActionState(t, n, r);
      }),
      (t.useCallback = function (t, n) {
        return O.H.useCallback(t, n);
      }),
      (t.useContext = function (t) {
        return O.H.useContext(t);
      }),
      (t.useDebugValue = function () {}),
      (t.useDeferredValue = function (t, n) {
        return O.H.useDeferredValue(t, n);
      }),
      (t.useEffect = function (t, n, r) {
        var i = O.H;
        if (typeof r == `function`)
          throw Error(
            `useEffect CRUD overload is not enabled in this build of React.`,
          );
        return i.useEffect(t, n);
      }),
      (t.useId = function () {
        return O.H.useId();
      }),
      (t.useImperativeHandle = function (t, n, r) {
        return O.H.useImperativeHandle(t, n, r);
      }),
      (t.useInsertionEffect = function (t, n) {
        return O.H.useInsertionEffect(t, n);
      }),
      (t.useLayoutEffect = function (t, n) {
        return O.H.useLayoutEffect(t, n);
      }),
      (t.useMemo = function (t, n) {
        return O.H.useMemo(t, n);
      }),
      (t.useOptimistic = function (t, n) {
        return O.H.useOptimistic(t, n);
      }),
      (t.useReducer = function (t, n, r) {
        return O.H.useReducer(t, n, r);
      }),
      (t.useRef = function (t) {
        return O.H.useRef(t);
      }),
      (t.useState = function (t) {
        return O.H.useState(t);
      }),
      (t.useSyncExternalStore = function (t, n, r) {
        return O.H.useSyncExternalStore(t, n, r);
      }),
      (t.useTransition = function () {
        return O.H.useTransition();
      }),
      (t.version = `19.1.1`);
  }),
  require_react = __commonJSMin((t, n) => {
    n.exports = require_react_production();
  }),
  require_react_dom_production = __commonJSMin((t) => {
    var n = require_react();
    function r(t) {
      var n = `https://react.dev/errors/` + t;
      if (1 < arguments.length) {
        n += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var r = 2; r < arguments.length; r++)
          n += `&args[]=` + encodeURIComponent(arguments[r]);
      }
      return (
        `Minified React error #` +
        t +
        `; visit ` +
        n +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function i() {}
    var o = {
        d: {
          f: i,
          r: function () {
            throw Error(r(522));
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i,
        },
        p: 0,
        findDOMNode: null,
      },
      s = Symbol.for(`react.portal`);
    function l(t, n, r) {
      var i =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: s,
        key: i == null ? null : `` + i,
        children: t,
        containerInfo: n,
        implementation: r,
      };
    }
    var u = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(t, n) {
      if (t === `font`) return ``;
      if (typeof n == `string`) return n === `use-credentials` ? n : ``;
    }
    (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
      (t.createPortal = function (t, n) {
        var i =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!n || (n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11))
          throw Error(r(299));
        return l(t, n, null, i);
      }),
      (t.flushSync = function (t) {
        var n = u.T,
          r = o.p;
        try {
          if (((u.T = null), (o.p = 2), t)) return t();
        } finally {
          (u.T = n), (o.p = r), o.d.f();
        }
      }),
      (t.preconnect = function (t, n) {
        typeof t == `string` &&
          (n
            ? ((n = n.crossOrigin),
              (n =
                typeof n == `string`
                  ? n === `use-credentials`
                    ? n
                    : ``
                  : void 0))
            : (n = null),
          o.d.C(t, n));
      }),
      (t.prefetchDNS = function (t) {
        typeof t == `string` && o.d.D(t);
      }),
      (t.preinit = function (t, n) {
        if (typeof t == `string` && n && typeof n.as == `string`) {
          var r = n.as,
            i = p(r, n.crossOrigin),
            s = typeof n.integrity == `string` ? n.integrity : void 0,
            l = typeof n.fetchPriority == `string` ? n.fetchPriority : void 0;
          r === `style`
            ? o.d.S(
                t,
                typeof n.precedence == `string` ? n.precedence : void 0,
                { crossOrigin: i, integrity: s, fetchPriority: l },
              )
            : r === `script` &&
              o.d.X(t, {
                crossOrigin: i,
                integrity: s,
                fetchPriority: l,
                nonce: typeof n.nonce == `string` ? n.nonce : void 0,
              });
        }
      }),
      (t.preinitModule = function (t, n) {
        if (typeof t == `string`) {
          if (typeof n == `object` && n) {
            if (n.as == null || n.as === `script`) {
              var r = p(n.as, n.crossOrigin);
              o.d.M(t, {
                crossOrigin: r,
                integrity:
                  typeof n.integrity == `string` ? n.integrity : void 0,
                nonce: typeof n.nonce == `string` ? n.nonce : void 0,
              });
            }
          } else n ?? o.d.M(t);
        }
      }),
      (t.preload = function (t, n) {
        if (
          typeof t == `string` &&
          typeof n == `object` &&
          n &&
          typeof n.as == `string`
        ) {
          var r = n.as,
            i = p(r, n.crossOrigin);
          o.d.L(t, r, {
            crossOrigin: i,
            integrity: typeof n.integrity == `string` ? n.integrity : void 0,
            nonce: typeof n.nonce == `string` ? n.nonce : void 0,
            type: typeof n.type == `string` ? n.type : void 0,
            fetchPriority:
              typeof n.fetchPriority == `string` ? n.fetchPriority : void 0,
            referrerPolicy:
              typeof n.referrerPolicy == `string` ? n.referrerPolicy : void 0,
            imageSrcSet:
              typeof n.imageSrcSet == `string` ? n.imageSrcSet : void 0,
            imageSizes: typeof n.imageSizes == `string` ? n.imageSizes : void 0,
            media: typeof n.media == `string` ? n.media : void 0,
          });
        }
      }),
      (t.preloadModule = function (t, n) {
        if (typeof t == `string`) {
          if (n) {
            var r = p(n.as, n.crossOrigin);
            o.d.m(t, {
              as: typeof n.as == `string` && n.as !== `script` ? n.as : void 0,
              crossOrigin: r,
              integrity: typeof n.integrity == `string` ? n.integrity : void 0,
            });
          } else o.d.m(t);
        }
      }),
      (t.requestFormReset = function (t) {
        o.d.r(t);
      }),
      (t.unstable_batchedUpdates = function (t, n) {
        return t(n);
      }),
      (t.useFormState = function (t, n, r) {
        return u.H.useFormState(t, n, r);
      }),
      (t.useFormStatus = function () {
        return u.H.useHostTransitionStatus();
      }),
      (t.version = `19.1.1`);
  }),
  require_react_dom = __commonJSMin((t, n) => {
    function r() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
        } catch (t) {
          console.error(t);
        }
    }
    r(), (n.exports = require_react_dom_production());
  }),
  ESteamRealm = (function (t) {
    return (
      (t[(t.k_ESteamRealmUnknown = 0)] = `k_ESteamRealmUnknown`),
      (t[(t.k_ESteamRealmGlobal = 1)] = `k_ESteamRealmGlobal`),
      (t[(t.k_ESteamRealmChina = 2)] = `k_ESteamRealmChina`),
      t
    );
  })({});
function BIsChinaRealm(t) {
  return t === ESteamRealm.k_ESteamRealmChina;
}
var k_EFriendRelationshipFriend = 3,
  k_EFriendRelationshipIgnoredFriend = 6;
function BIsEFriendRelationshipFriend(t) {
  return t == 3 || t == 6;
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
  ].map((t) => ({ name: t[0], shortName: t[1], eAdditionalLanguage: t[2] }));
function ELanguagePchWebLanguageCode(t, n = `en`) {
  switch (t) {
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
      return n;
  }
}
var MapKoreanaToKorean = (t) => (t === `koreana` ? `korean` : t);
function ELanguagePchLanguage(t, n = ``) {
  switch (t) {
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
      return n;
  }
}
function PchLanguageToELanguage(t, n = 0) {
  switch (t) {
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
      return n;
  }
}
var k_ELauncherType_PerfectWorld = 1,
  k_ELauncherType_CSGO = 4,
  k_ELauncherType_SingleApp = 8;
function BIsReducedUILauncher(t) {
  switch (t) {
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
function ENotificationLocationToString(t) {
  switch (t) {
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
function EUIModeToString(t) {
  switch (t) {
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
var EWindowBringToFront = (function (t) {
    return (
      (t[(t.k_EWindowBringToFrontInvalid = 0)] =
        `k_EWindowBringToFrontInvalid`),
      (t[(t.k_EWindowBringToFrontAndForceOS = 1)] =
        `k_EWindowBringToFrontAndForceOS`),
      (t[(t.k_EWindowBringToFrontWithoutForcingOS = 2)] =
        `k_EWindowBringToFrontWithoutForcingOS`),
      (t[(t.k_EWindowBringToFrontUsingExistingOSState = 3)] =
        `k_EWindowBringToFrontUsingExistingOSState`),
      t
    );
  })({}),
  require_google_protobuf = __commonJSMin((exports, module, this$1) => {
    var $jscomp = $jscomp || {};
    ($jscomp.scope = {}),
      ($jscomp.findInternal = function (t, n, r) {
        t instanceof String && (t = String(t));
        for (var i = t.length, o = 0; o < i; o++) {
          var s = t[o];
          if (n.call(r, s, o, t)) return { i: o, v: s };
        }
        return { i: -1, v: void 0 };
      }),
      ($jscomp.ASSUME_ES5 = !1),
      ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
      ($jscomp.ASSUME_NO_NATIVE_SET = !1),
      ($jscomp.SIMPLE_FROUND_POLYFILL = !1),
      ($jscomp.defineProperty =
        $jscomp.ASSUME_ES5 || typeof Object.defineProperties == `function`
          ? Object.defineProperty
          : function (t, n, r) {
              t != Array.prototype && t != Object.prototype && (t[n] = r.value);
            }),
      ($jscomp.getGlobal = function (t) {
        return typeof window < `u` && window === t
          ? t
          : typeof global < `u` && global != null
            ? global
            : t;
      }),
      ($jscomp.global = $jscomp.getGlobal(this$1)),
      ($jscomp.polyfill = function (t, n, r, i) {
        if (n) {
          for (
            r = $jscomp.global, t = t.split(`.`), i = 0;
            i < t.length - 1;
            i++
          ) {
            var o = t[i];
            o in r || (r[o] = {}), (r = r[o]);
          }
          (t = t[t.length - 1]),
            (i = r[t]),
            (n = n(i)),
            n != i &&
              n != null &&
              $jscomp.defineProperty(r, t, {
                configurable: !0,
                writable: !0,
                value: n,
              });
        }
      }),
      $jscomp.polyfill(
        `Array.prototype.findIndex`,
        function (t) {
          return (
            t ||
            function (t, n) {
              return $jscomp.findInternal(this, t, n).i;
            }
          );
        },
        `es6`,
        `es3`,
      ),
      ($jscomp.checkStringArgs = function (t, n, r) {
        if (t == null)
          throw TypeError(
            `The 'this' value for String.prototype.` +
              r +
              ` must not be null or undefined`,
          );
        if (n instanceof RegExp)
          throw TypeError(
            `First argument to String.prototype.` +
              r +
              ` must not be a regular expression`,
          );
        return t + ``;
      }),
      $jscomp.polyfill(
        `String.prototype.endsWith`,
        function (t) {
          return (
            t ||
            function (t, n) {
              var r = $jscomp.checkStringArgs(this, t, `endsWith`);
              (t += ``),
                n === void 0 && (n = r.length),
                (n = Math.max(0, Math.min(n | 0, r.length)));
              for (var i = t.length; 0 < i && 0 < n; )
                if (r[--n] != t[--i]) return !1;
              return 0 >= i;
            }
          );
        },
        `es6`,
        `es3`,
      ),
      $jscomp.polyfill(
        `Array.prototype.find`,
        function (t) {
          return (
            t ||
            function (t, n) {
              return $jscomp.findInternal(this, t, n).v;
            }
          );
        },
        `es6`,
        `es3`,
      ),
      $jscomp.polyfill(
        `String.prototype.startsWith`,
        function (t) {
          return (
            t ||
            function (t, n) {
              var r = $jscomp.checkStringArgs(this, t, `startsWith`);
              t += ``;
              var i = r.length,
                o = t.length;
              n = Math.max(0, Math.min(n | 0, r.length));
              for (var s = 0; s < o && n < i; ) if (r[n++] != t[s++]) return !1;
              return s >= o;
            }
          );
        },
        `es6`,
        `es3`,
      ),
      $jscomp.polyfill(
        `String.prototype.repeat`,
        function (t) {
          return (
            t ||
            function (t) {
              var n = $jscomp.checkStringArgs(this, null, `repeat`);
              if (0 > t || 1342177279 < t)
                throw RangeError(`Invalid count value`);
              t |= 0;
              for (var r = ``; t; ) t & 1 && (r += n), (t >>>= 1) && (n += n);
              return r;
            }
          );
        },
        `es6`,
        `es3`,
      );
    var COMPILED = !0,
      goog = goog || {};
    (goog.global = this$1 || self),
      (goog.exportPath_ = function (t, n, r) {
        (t = t.split(`.`)),
          (r ||= goog.global),
          t[0] in r || r.execScript === void 0 || r.execScript(`var ` + t[0]);
        for (var i; t.length && (i = t.shift()); )
          t.length || n === void 0
            ? (r = r[i] && r[i] !== Object.prototype[i] ? r[i] : (r[i] = {}))
            : (r[i] = n);
      }),
      (goog.define = function (t, n) {
        if (!COMPILED) {
          var r = goog.global.CLOSURE_UNCOMPILED_DEFINES,
            i = goog.global.CLOSURE_DEFINES;
          r &&
          r.nodeType === void 0 &&
          Object.prototype.hasOwnProperty.call(r, t)
            ? (n = r[t])
            : i &&
              i.nodeType === void 0 &&
              Object.prototype.hasOwnProperty.call(i, t) &&
              (n = i[t]);
        }
        return n;
      }),
      (goog.FEATURESET_YEAR = 2012),
      (goog.DEBUG = !0),
      (goog.LOCALE = `en`),
      (goog.TRUSTED_SITE = !0),
      (goog.STRICT_MODE_COMPATIBLE = !1),
      (goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG),
      (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
      (goog.provide = function (t) {
        if (goog.isInModuleLoader_())
          throw Error(`goog.provide cannot be used within a module.`);
        if (!COMPILED && goog.isProvided_(t))
          throw Error(`Namespace "` + t + `" already declared.`);
        goog.constructNamespace_(t);
      }),
      (goog.constructNamespace_ = function (t, n) {
        if (!COMPILED) {
          delete goog.implicitNamespaces_[t];
          for (
            var r = t;
            (r = r.substring(0, r.lastIndexOf(`.`))) &&
            !goog.getObjectByName(r);
          )
            goog.implicitNamespaces_[r] = !0;
        }
        goog.exportPath_(t, n);
      }),
      (goog.getScriptNonce = function (t) {
        return t && t != goog.global
          ? goog.getScriptNonce_(t.document)
          : (goog.cspNonce_ === null &&
              (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document)),
            goog.cspNonce_);
      }),
      (goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/),
      (goog.cspNonce_ = null),
      (goog.getScriptNonce_ = function (t) {
        return (t = t.querySelector && t.querySelector(`script[nonce]`)) &&
          (t = t.nonce || t.getAttribute(`nonce`)) &&
          goog.NONCE_PATTERN_.test(t)
          ? t
          : ``;
      }),
      (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
      (goog.module = function (t) {
        if (typeof t != `string` || !t || t.search(goog.VALID_MODULE_RE_) == -1)
          throw Error(`Invalid module identifier`);
        if (!goog.isInGoogModuleLoader_())
          throw Error(
            `Module ` +
              t +
              ` has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.`,
          );
        if (goog.moduleLoaderState_.moduleName)
          throw Error(`goog.module may only be called once per module.`);
        if (((goog.moduleLoaderState_.moduleName = t), !COMPILED)) {
          if (goog.isProvided_(t))
            throw Error(`Namespace "` + t + `" already declared.`);
          delete goog.implicitNamespaces_[t];
        }
      }),
      (goog.module.get = function (t) {
        return goog.module.getInternal_(t);
      }),
      (goog.module.getInternal_ = function (t) {
        if (!COMPILED) {
          if (t in goog.loadedModules_) return goog.loadedModules_[t].exports;
          if (!goog.implicitNamespaces_[t])
            return (t = goog.getObjectByName(t)), t ?? null;
        }
        return null;
      }),
      (goog.ModuleType = { ES6: `es6`, GOOG: `goog` }),
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
        var t = goog.global.$jscomp;
        return t
          ? typeof t.getCurrentModulePath == `function` &&
              !!t.getCurrentModulePath()
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
      (goog.declareModuleId = function (t) {
        if (!COMPILED) {
          if (!goog.isInEs6ModuleLoader_())
            throw Error(
              `goog.declareModuleId may only be called from within an ES6 module`,
            );
          if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
            throw Error(
              `goog.declareModuleId may only be called once per module.`,
            );
          if (t in goog.loadedModules_)
            throw Error(`Module with namespace "` + t + `" already exists.`);
        }
        if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = t;
        else {
          var n = goog.global.$jscomp;
          if (!n || typeof n.getCurrentModulePath != `function`)
            throw Error(
              `Module with namespace "` + t + `" has been loaded incorrectly.`,
            );
          (n = n.require(n.getCurrentModulePath())),
            (goog.loadedModules_[t] = {
              exports: n,
              type: goog.ModuleType.ES6,
              moduleId: t,
            });
        }
      }),
      (goog.setTestOnly = function (t) {
        if (goog.DISALLOW_TEST_ONLY_CODE)
          throw (
            ((t ||= ``),
            Error(
              `Importing test-only code into non-debug environment` +
                (t ? `: ` + t : `.`),
            ))
          );
      }),
      (goog.forwardDeclare = function (t) {}),
      COMPILED ||
        ((goog.isProvided_ = function (t) {
          return (
            t in goog.loadedModules_ ||
            (!goog.implicitNamespaces_[t] && goog.getObjectByName(t) != null)
          );
        }),
        (goog.implicitNamespaces_ = { "goog.module": !0 })),
      (goog.getObjectByName = function (t, n) {
        (t = t.split(`.`)), (n ||= goog.global);
        for (var r = 0; r < t.length; r++)
          if (((n = n[t[r]]), n == null)) return null;
        return n;
      }),
      (goog.globalize = function (t, n) {
        for (var r in ((n ||= goog.global), t)) n[r] = t[r];
      }),
      (goog.addDependency = function (t, n, r, i) {
        !COMPILED &&
          goog.DEPENDENCIES_ENABLED &&
          goog.debugLoader_.addDependency(t, n, r, i);
      }),
      (goog.ENABLE_DEBUG_LOADER = !0),
      (goog.logToConsole_ = function (t) {
        goog.global.console && goog.global.console.error(t);
      }),
      (goog.require = function (t) {
        if (!COMPILED) {
          if (
            (goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(t),
            goog.isProvided_(t))
          ) {
            if (goog.isInModuleLoader_()) return goog.module.getInternal_(t);
          } else if (goog.ENABLE_DEBUG_LOADER) {
            var n = goog.moduleLoaderState_;
            goog.moduleLoaderState_ = null;
            try {
              goog.debugLoader_.load_(t);
            } finally {
              goog.moduleLoaderState_ = n;
            }
          }
          return null;
        }
      }),
      (goog.requireType = function (t) {
        return {};
      }),
      (goog.basePath = ``),
      (goog.nullFunction = function () {}),
      (goog.abstractMethod = function () {
        throw Error(`unimplemented abstract method`);
      }),
      (goog.addSingletonGetter = function (t) {
        (t.instance_ = void 0),
          (t.getInstance = function () {
            return t.instance_
              ? t.instance_
              : (goog.DEBUG &&
                  (goog.instantiatedSingletons_[
                    goog.instantiatedSingletons_.length
                  ] = t),
                (t.instance_ = new t()));
          });
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
            var a = !eval(
              `"use strict";let x = 1; function f() { return typeof x; };f() == "number";`,
            );
          } catch {
            a = !1;
          }
          goog.hasBadLetScoping = a;
        }
        return goog.hasBadLetScoping;
      }),
      (goog.workaroundSafari10EvalBug = function (t) {
        return (
          `(function(){` +
          t +
          `
;})();
`
        );
      }),
      (goog.loadModule = function (t) {
        var n = goog.moduleLoaderState_;
        try {
          if (
            ((goog.moduleLoaderState_ = {
              moduleName: ``,
              declareLegacyNamespace: !1,
              type: goog.ModuleType.GOOG,
            }),
            goog.isFunction(t))
          )
            var r = t.call(void 0, {});
          else if (typeof t == `string`)
            goog.useSafari10Workaround() &&
              (t = goog.workaroundSafari10EvalBug(t)),
              (r = goog.loadModuleFromSource_.call(void 0, t));
          else throw Error(`Invalid module definition`);
          var i = goog.moduleLoaderState_.moduleName;
          if (typeof i == `string` && i)
            goog.moduleLoaderState_.declareLegacyNamespace
              ? goog.constructNamespace_(i, r)
              : goog.SEAL_MODULE_EXPORTS &&
                Object.seal &&
                typeof r == `object` &&
                r &&
                Object.seal(r),
              (goog.loadedModules_[i] = {
                exports: r,
                type: goog.ModuleType.GOOG,
                moduleId: goog.moduleLoaderState_.moduleName,
              });
          else throw Error(`Invalid module name "` + i + `"`);
        } finally {
          goog.moduleLoaderState_ = n;
        }
      }),
      (goog.loadModuleFromSource_ = function (a) {
        return eval(a), {};
      }),
      (goog.normalizePath_ = function (t) {
        t = t.split(`/`);
        for (var n = 0; n < t.length; )
          t[n] == `.`
            ? t.splice(n, 1)
            : n && t[n] == `..` && t[n - 1] && t[n - 1] != `..`
              ? t.splice(--n, 2)
              : n++;
        return t.join(`/`);
      }),
      (goog.loadFileSync_ = function (t) {
        if (goog.global.CLOSURE_LOAD_FILE_SYNC)
          return goog.global.CLOSURE_LOAD_FILE_SYNC(t);
        try {
          var n = new goog.global.XMLHttpRequest();
          return (
            n.open(`get`, t, !1),
            n.send(),
            n.status == 0 || n.status == 200 ? n.responseText : null
          );
        } catch {
          return null;
        }
      }),
      (goog.transpile_ = function (t, n, r) {
        var i = goog.global.$jscomp;
        i || (goog.global.$jscomp = i = {});
        var o = i.transpile;
        if (!o) {
          var s = goog.basePath + goog.TRANSPILER,
            l = goog.loadFileSync_(s);
          if (l) {
            if (
              (function () {
                (0, eval)(
                  l +
                    `
//# sourceURL=` +
                    s,
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
            (goog.global.$jscomp.transpile =
              goog.global.$gwtExport.$jscomp.transpile),
              (i = goog.global.$jscomp),
              (o = i.transpile);
          }
        }
        return (
          (o ||= i.transpile =
            function (t, n) {
              return (
                goog.logToConsole_(
                  n + ` requires transpilation but no transpiler was found.`,
                ),
                t
              );
            }),
          o(t, n, r)
        );
      }),
      (goog.typeOf = function (t) {
        var n = typeof t;
        if (n == `object`) {
          if (t) {
            if (t instanceof Array) return `array`;
            if (t instanceof Object) return n;
            var r = Object.prototype.toString.call(t);
            if (r == `[object Window]`) return `object`;
            if (
              r == `[object Array]` ||
              (typeof t.length == `number` &&
                t.splice !== void 0 &&
                t.propertyIsEnumerable !== void 0 &&
                !t.propertyIsEnumerable(`splice`))
            )
              return `array`;
            if (
              r == `[object Function]` ||
              (t.call !== void 0 &&
                t.propertyIsEnumerable !== void 0 &&
                !t.propertyIsEnumerable(`call`))
            )
              return `function`;
          } else return `null`;
        } else if (n == `function` && t.call === void 0) return `object`;
        return n;
      }),
      (goog.isArray = function (t) {
        return goog.typeOf(t) == `array`;
      }),
      (goog.isArrayLike = function (t) {
        var n = goog.typeOf(t);
        return n == `array` || (n == `object` && typeof t.length == `number`);
      }),
      (goog.isDateLike = function (t) {
        return goog.isObject(t) && typeof t.getFullYear == `function`;
      }),
      (goog.isFunction = function (t) {
        return goog.typeOf(t) == `function`;
      }),
      (goog.isObject = function (t) {
        var n = typeof t;
        return (n == `object` && t != null) || n == `function`;
      }),
      (goog.getUid = function (t) {
        return (
          (Object.prototype.hasOwnProperty.call(t, goog.UID_PROPERTY_) &&
            t[goog.UID_PROPERTY_]) ||
          (t[goog.UID_PROPERTY_] = ++goog.uidCounter_)
        );
      }),
      (goog.hasUid = function (t) {
        return !!t[goog.UID_PROPERTY_];
      }),
      (goog.removeUid = function (t) {
        t !== null &&
          `removeAttribute` in t &&
          t.removeAttribute(goog.UID_PROPERTY_);
        try {
          delete t[goog.UID_PROPERTY_];
        } catch {}
      }),
      (goog.UID_PROPERTY_ = `closure_uid_` + ((1e9 * Math.random()) >>> 0)),
      (goog.uidCounter_ = 0),
      (goog.getHashCode = goog.getUid),
      (goog.removeHashCode = goog.removeUid),
      (goog.cloneObject = function (t) {
        var n = goog.typeOf(t);
        if (n == `object` || n == `array`) {
          if (typeof t.clone == `function`) return t.clone();
          for (var r in ((n = n == `array` ? [] : {}), t))
            n[r] = goog.cloneObject(t[r]);
          return n;
        }
        return t;
      }),
      (goog.bindNative_ = function (t, n, r) {
        return t.call.apply(t.bind, arguments);
      }),
      (goog.bindJs_ = function (t, n, r) {
        if (!t) throw Error();
        if (2 < arguments.length) {
          var i = Array.prototype.slice.call(arguments, 2);
          return function () {
            var r = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(r, i), t.apply(n, r);
          };
        }
        return function () {
          return t.apply(n, arguments);
        };
      }),
      (goog.bind = function (t, n, r) {
        return (
          (goog.bind =
            Function.prototype.bind &&
            Function.prototype.bind.toString().indexOf(`native code`) != -1
              ? goog.bindNative_
              : goog.bindJs_),
          goog.bind.apply(null, arguments)
        );
      }),
      (goog.partial = function (t, n) {
        var r = Array.prototype.slice.call(arguments, 1);
        return function () {
          var n = r.slice();
          return n.push.apply(n, arguments), t.apply(this, n);
        };
      }),
      (goog.mixin = function (t, n) {
        for (var r in n) t[r] = n[r];
      }),
      (goog.now =
        (goog.TRUSTED_SITE && Date.now) ||
        function () {
          return +new Date();
        }),
      (goog.globalEval = function (t) {
        if (goog.global.execScript) goog.global.execScript(t, `JavaScript`);
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
          if (goog.evalWorksForGlobals_) goog.global.eval(t);
          else {
            var n = goog.global.document,
              r = n.createElement(`script`);
            (r.type = `text/javascript`),
              (r.defer = !1),
              r.appendChild(n.createTextNode(t)),
              n.head.appendChild(r),
              n.head.removeChild(r);
          }
        } else throw Error(`goog.globalEval not available`);
      }),
      (goog.evalWorksForGlobals_ = null),
      (goog.getCssName = function (t, n) {
        if (String(t).charAt(0) == `.`)
          throw Error(
            `className passed in goog.getCssName must not start with ".". You passed: ` +
              t,
          );
        var r = function (t) {
            return goog.cssNameMapping_[t] || t;
          },
          i = function (t) {
            t = t.split(`-`);
            for (var n = [], i = 0; i < t.length; i++) n.push(r(t[i]));
            return n.join(`-`);
          };
        return (
          (i = goog.cssNameMapping_
            ? goog.cssNameMappingStyle_ == `BY_WHOLE`
              ? r
              : i
            : function (t) {
                return t;
              }),
          (t = n ? t + `-` + i(n) : i(t)),
          goog.global.CLOSURE_CSS_NAME_MAP_FN
            ? goog.global.CLOSURE_CSS_NAME_MAP_FN(t)
            : t
        );
      }),
      (goog.setCssNameMapping = function (t, n) {
        (goog.cssNameMapping_ = t), (goog.cssNameMappingStyle_ = n);
      }),
      !COMPILED &&
        goog.global.CLOSURE_CSS_NAME_MAPPING &&
        (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
      (goog.getMsg = function (t, n, r) {
        return (
          r && r.html && (t = t.replace(/</g, `&lt;`)),
          n &&
            (t = t.replace(/\{\$([^}]+)}/g, function (t, r) {
              return n != null && r in n ? n[r] : t;
            })),
          t
        );
      }),
      (goog.getMsgWithFallback = function (t, n) {
        return t;
      }),
      (goog.exportSymbol = function (t, n, r) {
        goog.exportPath_(t, n, r);
      }),
      (goog.exportProperty = function (t, n, r) {
        t[n] = r;
      }),
      (goog.inherits = function (t, n) {
        function r() {}
        (r.prototype = n.prototype),
          (t.superClass_ = n.prototype),
          (t.prototype = new r()),
          (t.prototype.constructor = t),
          (t.base = function (t, r, i) {
            for (
              var o = Array(arguments.length - 2), s = 2;
              s < arguments.length;
              s++
            )
              o[s - 2] = arguments[s];
            return n.prototype[r].apply(t, o);
          });
      }),
      (goog.scope = function (t) {
        if (goog.isInModuleLoader_())
          throw Error(`goog.scope is not supported within a module.`);
        t.call(goog.global);
      }),
      COMPILED || (goog.global.COMPILED = COMPILED),
      (goog.defineClass = function (t, n) {
        var r = n.constructor,
          i = n.statics;
        return (
          (r && r != Object.prototype.constructor) ||
            (r = function () {
              throw Error(
                `cannot instantiate an interface (no constructor defined).`,
              );
            }),
          (r = goog.defineClass.createSealingConstructor_(r, t)),
          t && goog.inherits(r, t),
          delete n.constructor,
          delete n.statics,
          goog.defineClass.applyProperties_(r.prototype, n),
          i != null &&
            (i instanceof Function
              ? i(r)
              : goog.defineClass.applyProperties_(r, i)),
          r
        );
      }),
      (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
      (goog.defineClass.createSealingConstructor_ = function (t, n) {
        if (!goog.defineClass.SEAL_CLASS_INSTANCES) return t;
        var r = !goog.defineClass.isUnsealable_(n),
          i = function () {
            var n = t.apply(this, arguments) || this;
            return (
              (n[goog.UID_PROPERTY_] = n[goog.UID_PROPERTY_]),
              this.constructor === i &&
                r &&
                Object.seal instanceof Function &&
                Object.seal(n),
              n
            );
          };
        return i;
      }),
      (goog.defineClass.isUnsealable_ = function (t) {
        return (
          t && t.prototype && t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
        );
      }),
      (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ =
        `constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf`.split(
          ` `,
        )),
      (goog.defineClass.applyProperties_ = function (t, n) {
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        for (
          var i = 0;
          i < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;
          i++
        )
          (r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i]),
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }),
      (goog.tagUnsealableClass = function (t) {
        !COMPILED &&
          goog.defineClass.SEAL_CLASS_INSTANCES &&
          (t.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
      }),
      (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = `goog_defineClass_legacy_unsealable`),
      !COMPILED &&
        goog.DEPENDENCIES_ENABLED &&
        ((goog.inHtmlDocument_ = function () {
          var t = goog.global.document;
          return t != null && `write` in t;
        }),
        (goog.isDocumentLoading_ = function () {
          var t = goog.global.document;
          return t.attachEvent
            ? t.readyState != `complete`
            : t.readyState == `loading`;
        }),
        (goog.findBasePath_ = function () {
          if (
            goog.global.CLOSURE_BASE_PATH != null &&
            typeof goog.global.CLOSURE_BASE_PATH == `string`
          )
            goog.basePath = goog.global.CLOSURE_BASE_PATH;
          else if (goog.inHtmlDocument_()) {
            var t = goog.global.document,
              n = t.currentScript;
            for (
              t = n ? [n] : t.getElementsByTagName(`SCRIPT`), n = t.length - 1;
              0 <= n;
              --n
            ) {
              var r = t[n].src,
                i = r.lastIndexOf(`?`);
              if (
                ((i = i == -1 ? r.length : i), r.substr(i - 7, 7) == `base.js`)
              ) {
                goog.basePath = r.substr(0, i - 7);
                break;
              }
            }
          }
        }),
        goog.findBasePath_(),
        (goog.Transpiler = function () {
          (this.requiresTranspilation_ = null),
            (this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE);
        }),
        (goog.Transpiler.prototype.createRequiresTranspilation_ = function () {
          function a(t, n) {
            e ? (d[t] = !0) : n() ? ((c = t), (d[t] = !1)) : (e = d[t] = !0);
          }
          function b(a) {
            try {
              return !!eval(a);
            } catch {
              return !1;
            }
          }
          var c = `es3`,
            d = { es3: !1 },
            e = !1,
            f =
              goog.global.navigator && goog.global.navigator.userAgent
                ? goog.global.navigator.userAgent
                : ``;
          return (
            a(`es5`, function () {
              return b(`[1,].length==1`);
            }),
            a(`es6`, function () {
              return (
                !f.match(/Edge\/(\d+)(\.\d)*/i) &&
                b(
                  `(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()`,
                )
              );
            }),
            a(`es7`, function () {
              return b(`2 ** 2 == 4`);
            }),
            a(`es8`, function () {
              return b(`async () => 1, true`);
            }),
            a(`es9`, function () {
              return b(`({...rest} = {}), true`);
            }),
            a(`es_next`, function () {
              return !1;
            }),
            { target: c, map: d }
          );
        }),
        (goog.Transpiler.prototype.needsTranspile = function (t, n) {
          if (goog.TRANSPILE == `always`) return !0;
          if (goog.TRANSPILE == `never`) return !1;
          if (!this.requiresTranspilation_) {
            var r = this.createRequiresTranspilation_();
            (this.requiresTranspilation_ = r.map),
              (this.transpilationTarget_ =
                this.transpilationTarget_ || r.target);
          }
          if (t in this.requiresTranspilation_)
            return this.requiresTranspilation_[t]
              ? !0
              : !(
                  !goog.inHtmlDocument_() ||
                  n != `es6` ||
                  `noModule` in goog.global.document.createElement(`script`)
                );
          throw Error(`Unknown language mode: ` + t);
        }),
        (goog.Transpiler.prototype.transpile = function (t, n) {
          return goog.transpile_(t, n, this.transpilationTarget_);
        }),
        (goog.transpiler_ = new goog.Transpiler()),
        (goog.protectScriptTag_ = function (t) {
          return t.replace(/<\/(SCRIPT)/gi, `\\x3c/$1`);
        }),
        (goog.DebugLoader_ = function () {
          (this.dependencies_ = {}),
            (this.idToPath_ = {}),
            (this.written_ = {}),
            (this.loadingDeps_ = []),
            (this.depsToLoad_ = []),
            (this.paused_ = !1),
            (this.factory_ = new goog.DependencyFactory(goog.transpiler_)),
            (this.deferredCallbacks_ = {}),
            (this.deferredQueue_ = []);
        }),
        (goog.DebugLoader_.prototype.bootstrap = function (t, n) {
          function r() {
            i &&= (goog.global.setTimeout(i, 0), null);
          }
          var i = n;
          if (t.length) {
            n = [];
            for (var o = 0; o < t.length; o++) {
              var s = this.getPathFromDeps_(t[o]);
              if (!s) throw Error(`Unregonized namespace: ` + t[o]);
              n.push(this.dependencies_[s]);
            }
            s = goog.require;
            var l = 0;
            for (o = 0; o < t.length; o++)
              s(t[o]),
                n[o].onLoad(function () {
                  ++l == t.length && r();
                });
          } else r();
        }),
        (goog.DebugLoader_.prototype.loadClosureDeps = function () {
          this.depsToLoad_.push(
            this.factory_.createDependency(
              goog.normalizePath_(goog.basePath + `deps.js`),
              `deps.js`,
              [],
              [],
              {},
              !1,
            ),
          ),
            this.loadDeps_();
        }),
        (goog.DebugLoader_.prototype.requested = function (t, n) {
          (t = this.getPathFromDeps_(t)) &&
            (n || this.areDepsLoaded_(this.dependencies_[t].requires)) &&
            (n = this.deferredCallbacks_[t]) &&
            (delete this.deferredCallbacks_[t], n());
        }),
        (goog.DebugLoader_.prototype.setDependencyFactory = function (t) {
          this.factory_ = t;
        }),
        (goog.DebugLoader_.prototype.load_ = function (t) {
          if (this.getPathFromDeps_(t)) {
            var n = this,
              r = [],
              i = function (t) {
                var o = n.getPathFromDeps_(t);
                if (!o) throw Error(`Bad dependency path or symbol: ` + t);
                if (!n.written_[o]) {
                  for (
                    n.written_[o] = !0, t = n.dependencies_[o], o = 0;
                    o < t.requires.length;
                    o++
                  )
                    goog.isProvided_(t.requires[o]) || i(t.requires[o]);
                  r.push(t);
                }
              };
            i(t),
              (t = !!this.depsToLoad_.length),
              (this.depsToLoad_ = this.depsToLoad_.concat(r)),
              this.paused_ || t || this.loadDeps_();
          } else
            throw (
              ((t = `goog.require could not find: ` + t),
              goog.logToConsole_(t),
              Error(t))
            );
        }),
        (goog.DebugLoader_.prototype.loadDeps_ = function () {
          for (var t = this, n = this.paused_; this.depsToLoad_.length && !n; )
            (function () {
              var r = !1,
                i = t.depsToLoad_.shift(),
                o = !1;
              t.loading_(i);
              var s = {
                pause: function () {
                  if (r)
                    throw Error(`Cannot call pause after the call to load.`);
                  n = !0;
                },
                resume: function () {
                  r ? t.resume_() : (n = !1);
                },
                loaded: function () {
                  if (o) throw Error(`Double call to loaded.`);
                  (o = !0), t.loaded_(i);
                },
                pending: function () {
                  for (var n = [], r = 0; r < t.loadingDeps_.length; r++)
                    n.push(t.loadingDeps_[r]);
                  return n;
                },
                setModuleState: function (t) {
                  goog.moduleLoaderState_ = {
                    type: t,
                    moduleName: ``,
                    declareLegacyNamespace: !1,
                  };
                },
                registerEs6ModuleExports: function (t, n, r) {
                  r &&
                    (goog.loadedModules_[r] = {
                      exports: n,
                      type: goog.ModuleType.ES6,
                      moduleId: r || ``,
                    });
                },
                registerGoogModuleExports: function (t, n) {
                  goog.loadedModules_[t] = {
                    exports: n,
                    type: goog.ModuleType.GOOG,
                    moduleId: t,
                  };
                },
                clearModuleState: function () {
                  goog.moduleLoaderState_ = null;
                },
                defer: function (n) {
                  if (r)
                    throw Error(
                      `Cannot register with defer after the call to load.`,
                    );
                  t.defer_(i, n);
                },
                areDepsLoaded: function () {
                  return t.areDepsLoaded_(i.requires);
                },
              };
              try {
                i.load(s);
              } finally {
                r = !0;
              }
            })();
          n && this.pause_();
        }),
        (goog.DebugLoader_.prototype.pause_ = function () {
          this.paused_ = !0;
        }),
        (goog.DebugLoader_.prototype.resume_ = function () {
          this.paused_ && ((this.paused_ = !1), this.loadDeps_());
        }),
        (goog.DebugLoader_.prototype.loading_ = function (t) {
          this.loadingDeps_.push(t);
        }),
        (goog.DebugLoader_.prototype.loaded_ = function (t) {
          for (var n = 0; n < this.loadingDeps_.length; n++)
            if (this.loadingDeps_[n] == t) {
              this.loadingDeps_.splice(n, 1);
              break;
            }
          for (n = 0; n < this.deferredQueue_.length; n++)
            if (this.deferredQueue_[n] == t.path) {
              this.deferredQueue_.splice(n, 1);
              break;
            }
          if (
            this.loadingDeps_.length == this.deferredQueue_.length &&
            !this.depsToLoad_.length
          )
            for (; this.deferredQueue_.length; )
              this.requested(this.deferredQueue_.shift(), !0);
          t.loaded();
        }),
        (goog.DebugLoader_.prototype.areDepsLoaded_ = function (t) {
          for (var n = 0; n < t.length; n++) {
            var r = this.getPathFromDeps_(t[n]);
            if (!r || !(r in this.deferredCallbacks_ || goog.isProvided_(t[n])))
              return !1;
          }
          return !0;
        }),
        (goog.DebugLoader_.prototype.getPathFromDeps_ = function (t) {
          return t in this.idToPath_
            ? this.idToPath_[t]
            : t in this.dependencies_
              ? t
              : null;
        }),
        (goog.DebugLoader_.prototype.defer_ = function (t, n) {
          (this.deferredCallbacks_[t.path] = n),
            this.deferredQueue_.push(t.path);
        }),
        (goog.LoadController = function () {}),
        (goog.LoadController.prototype.pause = function () {}),
        (goog.LoadController.prototype.resume = function () {}),
        (goog.LoadController.prototype.loaded = function () {}),
        (goog.LoadController.prototype.pending = function () {}),
        (goog.LoadController.prototype.registerEs6ModuleExports = function (
          t,
          n,
          r,
        ) {}),
        (goog.LoadController.prototype.setModuleState = function (t) {}),
        (goog.LoadController.prototype.clearModuleState = function () {}),
        (goog.LoadController.prototype.defer = function (t) {}),
        (goog.LoadController.prototype.areDepsLoaded = function () {}),
        (goog.Dependency = function (t, n, r, i, o) {
          (this.path = t),
            (this.relativePath = n),
            (this.provides = r),
            (this.requires = i),
            (this.loadFlags = o),
            (this.loaded_ = !1),
            (this.loadCallbacks_ = []);
        }),
        (goog.Dependency.prototype.getPathName = function () {
          var t = this.path,
            n = t.indexOf(`://`);
          return (
            0 <= n &&
              ((t = t.substring(n + 3)),
              (n = t.indexOf(`/`)),
              0 <= n && (t = t.substring(n + 1))),
            t
          );
        }),
        (goog.Dependency.prototype.onLoad = function (t) {
          this.loaded_ ? t() : this.loadCallbacks_.push(t);
        }),
        (goog.Dependency.prototype.loaded = function () {
          this.loaded_ = !0;
          var t = this.loadCallbacks_;
          this.loadCallbacks_ = [];
          for (var n = 0; n < t.length; n++) t[n]();
        }),
        (goog.Dependency.defer_ = !1),
        (goog.Dependency.callbackMap_ = {}),
        (goog.Dependency.registerCallback_ = function (t) {
          var n = Math.random().toString(32);
          return (goog.Dependency.callbackMap_[n] = t), n;
        }),
        (goog.Dependency.unregisterCallback_ = function (t) {
          delete goog.Dependency.callbackMap_[t];
        }),
        (goog.Dependency.callback_ = function (t, n) {
          if (t in goog.Dependency.callbackMap_) {
            for (
              var r = goog.Dependency.callbackMap_[t], i = [], o = 1;
              o < arguments.length;
              o++
            )
              i.push(arguments[o]);
            r.apply(void 0, i);
          } else
            throw Error(
              `Callback key ` +
                t +
                ` does not exist (was base.js loaded more than once?).`,
            );
        }),
        (goog.Dependency.prototype.load = function (t) {
          if (goog.global.CLOSURE_IMPORT_SCRIPT)
            goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
              ? t.loaded()
              : t.pause();
          else if (goog.inHtmlDocument_()) {
            var n = goog.global.document;
            if (
              n.readyState == `complete` &&
              !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
            ) {
              if (/\bdeps.js$/.test(this.path)) {
                t.loaded();
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
              var r = goog.Dependency.registerCallback_(function (n) {
                  (goog.DebugLoader_.IS_OLD_IE_ &&
                    n.readyState != `complete`) ||
                    (goog.Dependency.unregisterCallback_(r), t.loaded());
                }),
                i =
                  !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce()
                    ? ` nonce="` + goog.getScriptNonce() + `"`
                    : ``;
              (i =
                `<script src="` +
                this.path +
                `" ` +
                (goog.DebugLoader_.IS_OLD_IE_
                  ? `onreadystatechange`
                  : `onload`) +
                `="goog.Dependency.callback_('` +
                r +
                `', this)" type="text/javascript" ` +
                (goog.Dependency.defer_ ? `defer` : ``) +
                i +
                `><\/script>`),
                n.write(
                  goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createHTML(i)
                    : i,
                );
            } else {
              var o = n.createElement(`script`);
              (o.defer = goog.Dependency.defer_),
                (o.async = !1),
                (o.type = `text/javascript`),
                (i = goog.getScriptNonce()) && o.setAttribute(`nonce`, i),
                goog.DebugLoader_.IS_OLD_IE_
                  ? (t.pause(),
                    (o.onreadystatechange = function () {
                      (o.readyState == `loaded` ||
                        o.readyState == `complete`) &&
                        (t.loaded(), t.resume());
                    }))
                  : (o.onload = function () {
                      (o.onload = null), t.loaded();
                    }),
                (o.src = goog.TRUSTED_TYPES_POLICY_
                  ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path)
                  : this.path),
                n.head.appendChild(o);
            }
          } else
            goog.logToConsole_(
              `Cannot use default debug loader outside of HTML documents.`,
            ),
              this.relativePath == `deps.js`
                ? (goog.logToConsole_(
                    `Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true.`,
                  ),
                  t.loaded())
                : t.pause();
        }),
        (goog.Es6ModuleDependency = function (t, n, r, i, o) {
          goog.Dependency.call(this, t, n, r, i, o);
        }),
        goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
        (goog.Es6ModuleDependency.prototype.load = function (t) {
          function n(t, n) {
            (t = n
              ? `<script type="module" crossorigin>` + n + `<\/script>`
              : `<script type="module" crossorigin src="` + t + `"><\/script>`),
              i.write(
                goog.TRUSTED_TYPES_POLICY_
                  ? goog.TRUSTED_TYPES_POLICY_.createHTML(t)
                  : t,
              );
          }
          function r(t, n) {
            var r = i.createElement(`script`);
            (r.defer = !0),
              (r.async = !1),
              (r.type = `module`),
              r.setAttribute(`crossorigin`, !0);
            var o = goog.getScriptNonce();
            o && r.setAttribute(`nonce`, o),
              n
                ? (r.textContent = goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createScript(n)
                    : n)
                : (r.src = goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(t)
                    : t),
              i.head.appendChild(r);
          }
          if (goog.global.CLOSURE_IMPORT_SCRIPT)
            goog.global.CLOSURE_IMPORT_SCRIPT(this.path)
              ? t.loaded()
              : t.pause();
          else if (goog.inHtmlDocument_()) {
            var i = goog.global.document,
              o = this;
            if (goog.isDocumentLoading_()) {
              var s = n;
              goog.Dependency.defer_ = !0;
            } else s = r;
            var l = goog.Dependency.registerCallback_(function () {
              goog.Dependency.unregisterCallback_(l),
                t.setModuleState(goog.ModuleType.ES6);
            });
            s(void 0, `goog.Dependency.callback_("` + l + `")`),
              s(this.path, void 0);
            var u = goog.Dependency.registerCallback_(function (n) {
              goog.Dependency.unregisterCallback_(u),
                t.registerEs6ModuleExports(
                  o.path,
                  n,
                  goog.moduleLoaderState_.moduleName,
                );
            });
            s(
              void 0,
              `import * as m from "` +
                this.path +
                `"; goog.Dependency.callback_("` +
                u +
                `", m)`,
            );
            var p = goog.Dependency.registerCallback_(function () {
              goog.Dependency.unregisterCallback_(p),
                t.clearModuleState(),
                t.loaded();
            });
            s(void 0, `goog.Dependency.callback_("` + p + `")`);
          } else
            goog.logToConsole_(
              `Cannot use default debug loader outside of HTML documents.`,
            ),
              t.pause();
        }),
        (goog.TransformedDependency = function (t, n, r, i, o) {
          goog.Dependency.call(this, t, n, r, i, o),
            (this.contents_ = null),
            (this.lazyFetch_ =
              !goog.inHtmlDocument_() ||
              !(`noModule` in goog.global.document.createElement(`script`)));
        }),
        goog.inherits(goog.TransformedDependency, goog.Dependency),
        (goog.TransformedDependency.prototype.load = function (t) {
          function n() {
            (o.contents_ = goog.loadFileSync_(o.path)),
              o.contents_ &&
                ((o.contents_ = o.transform(o.contents_)),
                o.contents_ &&
                  (o.contents_ +=
                    `
//# sourceURL=` + o.path));
          }
          function r() {
            if ((o.lazyFetch_ && n(), o.contents_)) {
              s && t.setModuleState(goog.ModuleType.ES6);
              try {
                var r = o.contents_;
                if (((o.contents_ = null), goog.globalEval(r), s))
                  var i = goog.moduleLoaderState_.moduleName;
              } finally {
                s && t.clearModuleState();
              }
              s &&
                goog.global.$jscomp.require.ensure(
                  [o.getPathName()],
                  function () {
                    t.registerEs6ModuleExports(
                      o.path,
                      goog.global.$jscomp.require(o.getPathName()),
                      i,
                    );
                  },
                ),
                t.loaded();
            }
          }
          function i() {
            var t = goog.global.document,
              n = goog.Dependency.registerCallback_(function () {
                goog.Dependency.unregisterCallback_(n), r();
              }),
              i =
                `<script type="text/javascript">` +
                goog.protectScriptTag_(
                  `goog.Dependency.callback_("` + n + `");`,
                ) +
                `<\/script>`;
            t.write(
              goog.TRUSTED_TYPES_POLICY_
                ? goog.TRUSTED_TYPES_POLICY_.createHTML(i)
                : i,
            );
          }
          var o = this;
          if (goog.global.CLOSURE_IMPORT_SCRIPT)
            n(),
              this.contents_ &&
              goog.global.CLOSURE_IMPORT_SCRIPT(``, this.contents_)
                ? ((this.contents_ = null), t.loaded())
                : t.pause();
          else {
            var s = this.loadFlags.module == goog.ModuleType.ES6;
            this.lazyFetch_ || n();
            var l = 1 < t.pending().length,
              u = l && goog.DebugLoader_.IS_OLD_IE_;
            if (
              ((l = goog.Dependency.defer_ && (l || goog.isDocumentLoading_())),
              u || l)
            )
              t.defer(function () {
                r();
              });
            else {
              var p = goog.global.document;
              if (
                ((u = goog.inHtmlDocument_() && `ActiveXObject` in goog.global),
                s && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !u)
              ) {
                (goog.Dependency.defer_ = !0), t.pause();
                var m = p.onreadystatechange;
                p.onreadystatechange = function () {
                  p.readyState == `interactive` &&
                    ((p.onreadystatechange = m), r(), t.resume()),
                    goog.isFunction(m) && m.apply(void 0, arguments);
                };
              } else
                !goog.DebugLoader_.IS_OLD_IE_ &&
                goog.inHtmlDocument_() &&
                goog.isDocumentLoading_()
                  ? i()
                  : r();
            }
          }
        }),
        (goog.TransformedDependency.prototype.transform = function (t) {}),
        (goog.TranspiledDependency = function (t, n, r, i, o, s) {
          goog.TransformedDependency.call(this, t, n, r, i, o),
            (this.transpiler = s);
        }),
        goog.inherits(goog.TranspiledDependency, goog.TransformedDependency),
        (goog.TranspiledDependency.prototype.transform = function (t) {
          return this.transpiler.transpile(t, this.getPathName());
        }),
        (goog.PreTranspiledEs6ModuleDependency = function (t, n, r, i, o) {
          goog.TransformedDependency.call(this, t, n, r, i, o);
        }),
        goog.inherits(
          goog.PreTranspiledEs6ModuleDependency,
          goog.TransformedDependency,
        ),
        (goog.PreTranspiledEs6ModuleDependency.prototype.transform = function (
          t,
        ) {
          return t;
        }),
        (goog.GoogModuleDependency = function (t, n, r, i, o, s, l) {
          goog.TransformedDependency.call(this, t, n, r, i, o),
            (this.needsTranspile_ = s),
            (this.transpiler_ = l);
        }),
        goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency),
        (goog.GoogModuleDependency.prototype.transform = function (t) {
          return (
            this.needsTranspile_ &&
              (t = this.transpiler_.transpile(t, this.getPathName())),
            goog.LOAD_MODULE_USING_EVAL && goog.global.JSON !== void 0
              ? `goog.loadModule(` +
                goog.global.JSON.stringify(
                  t +
                    `
//# sourceURL=` +
                    this.path +
                    `
`,
                ) +
                `);`
              : `goog.loadModule(function(exports) {"use strict";` +
                t +
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
        (goog.DebugLoader_.prototype.addDependency = function (t, n, r, i) {
          (n ||= []), (t = t.replace(/\\/g, `/`));
          var o = goog.normalizePath_(goog.basePath + t);
          for (
            (i && typeof i != `boolean`) ||
              (i = i ? { module: goog.ModuleType.GOOG } : {}),
              r = this.factory_.createDependency(
                o,
                t,
                n,
                r,
                i,
                goog.transpiler_.needsTranspile(i.lang || `es3`, i.module),
              ),
              this.dependencies_[o] = r,
              r = 0;
            r < n.length;
            r++
          )
            this.idToPath_[n[r]] = o;
          this.idToPath_[t] = o;
        }),
        (goog.DependencyFactory = function (t) {
          this.transpiler = t;
        }),
        (goog.DependencyFactory.prototype.createDependency = function (
          t,
          n,
          r,
          i,
          o,
          s,
        ) {
          return o.module == goog.ModuleType.GOOG
            ? new goog.GoogModuleDependency(t, n, r, i, o, s, this.transpiler)
            : s
              ? new goog.TranspiledDependency(t, n, r, i, o, this.transpiler)
              : o.module == goog.ModuleType.ES6
                ? goog.TRANSPILE == `never` && goog.ASSUME_ES_MODULES_TRANSPILED
                  ? new goog.PreTranspiledEs6ModuleDependency(t, n, r, i, o)
                  : new goog.Es6ModuleDependency(t, n, r, i, o)
                : new goog.Dependency(t, n, r, i, o);
        }),
        (goog.debugLoader_ = new goog.DebugLoader_()),
        (goog.loadClosureDeps = function () {
          goog.debugLoader_.loadClosureDeps();
        }),
        (goog.setDependencyFactory = function (t) {
          goog.debugLoader_.setDependencyFactory(t);
        }),
        goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(),
        (goog.bootstrap = function (t, n) {
          goog.debugLoader_.bootstrap(t, n);
        })),
      (goog.TRUSTED_TYPES_POLICY_NAME = ``),
      (goog.identity_ = function (t) {
        return t;
      }),
      (goog.createTrustedTypesPolicy = function (t) {
        var n = null,
          r = goog.global.trustedTypes || goog.global.TrustedTypes;
        if (!r || !r.createPolicy) return n;
        try {
          n = r.createPolicy(t, {
            createHTML: goog.identity_,
            createScript: goog.identity_,
            createScriptURL: goog.identity_,
            createURL: goog.identity_,
          });
        } catch (t) {
          goog.logToConsole_(t.message);
        }
        return n;
      }),
      (goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME
        ? goog.createTrustedTypesPolicy(
            goog.TRUSTED_TYPES_POLICY_NAME + `#base`,
          )
        : null),
      (goog.object = {}),
      (goog.object.is = function (t, n) {
        return t === n ? t !== 0 || 1 / t == 1 / n : t !== t && n !== n;
      }),
      (goog.object.forEach = function (t, n, r) {
        for (var i in t) n.call(r, t[i], i, t);
      }),
      (goog.object.filter = function (t, n, r) {
        var i = {},
          o;
        for (o in t) n.call(r, t[o], o, t) && (i[o] = t[o]);
        return i;
      }),
      (goog.object.map = function (t, n, r) {
        var i = {},
          o;
        for (o in t) i[o] = n.call(r, t[o], o, t);
        return i;
      }),
      (goog.object.some = function (t, n, r) {
        for (var i in t) if (n.call(r, t[i], i, t)) return !0;
        return !1;
      }),
      (goog.object.every = function (t, n, r) {
        for (var i in t) if (!n.call(r, t[i], i, t)) return !1;
        return !0;
      }),
      (goog.object.getCount = function (t) {
        var n = 0,
          r;
        for (r in t) n++;
        return n;
      }),
      (goog.object.getAnyKey = function (t) {
        for (var n in t) return n;
      }),
      (goog.object.getAnyValue = function (t) {
        for (var n in t) return t[n];
      }),
      (goog.object.contains = function (t, n) {
        return goog.object.containsValue(t, n);
      }),
      (goog.object.getValues = function (t) {
        var n = [],
          r = 0,
          i;
        for (i in t) n[r++] = t[i];
        return n;
      }),
      (goog.object.getKeys = function (t) {
        var n = [],
          r = 0,
          i;
        for (i in t) n[r++] = i;
        return n;
      }),
      (goog.object.getValueByKeys = function (t, n) {
        var r = goog.isArrayLike(n),
          i = r ? n : arguments;
        for (r = +!r; r < i.length; r++) {
          if (t == null) return;
          t = t[i[r]];
        }
        return t;
      }),
      (goog.object.containsKey = function (t, n) {
        return t !== null && n in t;
      }),
      (goog.object.containsValue = function (t, n) {
        for (var r in t) if (t[r] == n) return !0;
        return !1;
      }),
      (goog.object.findKey = function (t, n, r) {
        for (var i in t) if (n.call(r, t[i], i, t)) return i;
      }),
      (goog.object.findValue = function (t, n, r) {
        return (n = goog.object.findKey(t, n, r)) && t[n];
      }),
      (goog.object.isEmpty = function (t) {
        for (var n in t) return !1;
        return !0;
      }),
      (goog.object.clear = function (t) {
        for (var n in t) delete t[n];
      }),
      (goog.object.remove = function (t, n) {
        var r;
        return (r = n in t) && delete t[n], r;
      }),
      (goog.object.add = function (t, n, r) {
        if (t !== null && n in t)
          throw Error(`The object already contains the key "` + n + `"`);
        goog.object.set(t, n, r);
      }),
      (goog.object.get = function (t, n, r) {
        return t !== null && n in t ? t[n] : r;
      }),
      (goog.object.set = function (t, n, r) {
        t[n] = r;
      }),
      (goog.object.setIfUndefined = function (t, n, r) {
        return n in t ? t[n] : (t[n] = r);
      }),
      (goog.object.setWithReturnValueIfNotSet = function (t, n, r) {
        return n in t ? t[n] : ((r = r()), (t[n] = r));
      }),
      (goog.object.equals = function (t, n) {
        for (var r in t) if (!(r in n) || t[r] !== n[r]) return !1;
        for (var i in n) if (!(i in t)) return !1;
        return !0;
      }),
      (goog.object.clone = function (t) {
        var n = {},
          r;
        for (r in t) n[r] = t[r];
        return n;
      }),
      (goog.object.unsafeClone = function (t) {
        var n = goog.typeOf(t);
        if (n == `object` || n == `array`) {
          if (goog.isFunction(t.clone)) return t.clone();
          for (var r in ((n = n == `array` ? [] : {}), t))
            n[r] = goog.object.unsafeClone(t[r]);
          return n;
        }
        return t;
      }),
      (goog.object.transpose = function (t) {
        var n = {},
          r;
        for (r in t) n[t[r]] = r;
        return n;
      }),
      (goog.object.PROTOTYPE_FIELDS_ =
        `constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf`.split(
          ` `,
        )),
      (goog.object.extend = function (t, n) {
        for (var r, i, o = 1; o < arguments.length; o++) {
          for (r in ((i = arguments[o]), i)) t[r] = i[r];
          for (var s = 0; s < goog.object.PROTOTYPE_FIELDS_.length; s++)
            (r = goog.object.PROTOTYPE_FIELDS_[s]),
              Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
        }
      }),
      (goog.object.create = function (t) {
        var n = arguments.length;
        if (n == 1 && Array.isArray(arguments[0]))
          return goog.object.create.apply(null, arguments[0]);
        if (n % 2) throw Error(`Uneven number of arguments`);
        for (var r = {}, i = 0; i < n; i += 2)
          r[arguments[i]] = arguments[i + 1];
        return r;
      }),
      (goog.object.createSet = function (t) {
        var n = arguments.length;
        if (n == 1 && Array.isArray(arguments[0]))
          return goog.object.createSet.apply(null, arguments[0]);
        for (var r = {}, i = 0; i < n; i++) r[arguments[i]] = !0;
        return r;
      }),
      (goog.object.createImmutableView = function (t) {
        var n = t;
        return (
          Object.isFrozen &&
            !Object.isFrozen(t) &&
            ((n = Object.create(t)), Object.freeze(n)),
          n
        );
      }),
      (goog.object.isImmutableView = function (t) {
        return !!Object.isFrozen && Object.isFrozen(t);
      }),
      (goog.object.getAllPropertyNames = function (t, n, r) {
        if (!t) return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
          return goog.object.getKeys(t);
        for (
          var i = {};
          t && (t !== Object.prototype || n) && (t !== Function.prototype || r);
        ) {
          for (var o = Object.getOwnPropertyNames(t), s = 0; s < o.length; s++)
            i[o[s]] = !0;
          t = Object.getPrototypeOf(t);
        }
        return goog.object.getKeys(i);
      }),
      (goog.object.getSuperClass = function (t) {
        return (t = Object.getPrototypeOf(t.prototype)) && t.constructor;
      });
    var jspb = { asserts: {} };
    (jspb.asserts.doAssertFailure = function (t, n, r, i) {
      var o = `Assertion failed`;
      if (r) {
        o += `: ` + r;
        var s = i;
      } else t && ((o += `: ` + t), (s = n));
      throw Error(`` + o, s || []);
    }),
      (jspb.asserts.assert = function (t, n, r) {
        var i = [...arguments].slice(2);
        return t || jspb.asserts.doAssertFailure(``, null, n, i), t;
      }),
      (jspb.asserts.assertString = function (t, n, r) {
        var i = [...arguments].slice(2);
        return (
          typeof t != `string` &&
            jspb.asserts.doAssertFailure(
              `Expected string but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              i,
            ),
          t
        );
      }),
      (jspb.asserts.assertArray = function (t, n, r) {
        var i = [...arguments].slice(2);
        return (
          Array.isArray(t) ||
            jspb.asserts.doAssertFailure(
              `Expected array but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              i,
            ),
          t
        );
      }),
      (jspb.asserts.fail = function (t, n) {
        var r = [...arguments].slice(1);
        throw Error(`Failure` + (t ? `: ` + t : ``), r);
      }),
      (jspb.asserts.assertInstanceof = function (t, n, r, i) {
        var o = [...arguments].slice(3);
        return (
          t instanceof n ||
            jspb.asserts.doAssertFailure(
              `Expected instanceof %s but got %s.`,
              [jspb.asserts.getType(n), jspb.asserts.getType(t)],
              r,
              o,
            ),
          t
        );
      }),
      (jspb.asserts.getType = function (t) {
        return t instanceof Function
          ? t.displayName || t.name || `unknown type name`
          : t instanceof Object
            ? t.constructor.displayName ||
              t.constructor.name ||
              Object.prototype.toString.call(t)
            : t === null
              ? `null`
              : typeof t;
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
      (jspb.BinaryConstants.FieldTypeToWireType = function (t) {
        var n = jspb.BinaryConstants.FieldType,
          r = jspb.BinaryConstants.WireType;
        switch (t) {
          case n.INT32:
          case n.INT64:
          case n.UINT32:
          case n.UINT64:
          case n.SINT32:
          case n.SINT64:
          case n.BOOL:
          case n.ENUM:
          case n.VHASH64:
            return r.VARINT;
          case n.DOUBLE:
          case n.FIXED64:
          case n.SFIXED64:
          case n.FHASH64:
            return r.FIXED64;
          case n.STRING:
          case n.MESSAGE:
          case n.BYTES:
            return r.DELIMITED;
          case n.FLOAT:
          case n.FIXED32:
          case n.SFIXED32:
            return r.FIXED32;
          default:
            return r.INVALID;
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
      (goog.debug.Error = function (t) {
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, goog.debug.Error);
        else {
          var n = Error().stack;
          n && (this.stack = n);
        }
        t && (this.message = String(t)), (this.reportErrorToServer = !0);
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
      (goog.asserts.AssertionError = function (t, n) {
        goog.debug.Error.call(this, goog.asserts.subs_(t, n)),
          (this.messagePattern = t);
      }),
      goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
      (goog.asserts.AssertionError.prototype.name = `AssertionError`),
      (goog.asserts.DEFAULT_ERROR_HANDLER = function (t) {
        throw t;
      }),
      (goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER),
      (goog.asserts.subs_ = function (t, n) {
        t = t.split(`%s`);
        for (var r = ``, i = t.length - 1, o = 0; o < i; o++)
          r += t[o] + (o < n.length ? n[o] : `%s`);
        return r + t[i];
      }),
      (goog.asserts.doAssertFailure_ = function (t, n, r, i) {
        var o = `Assertion failed`;
        if (r) {
          o += `: ` + r;
          var s = i;
        } else t && ((o += `: ` + t), (s = n));
        (t = new goog.asserts.AssertionError(`` + o, s || [])),
          goog.asserts.errorHandler_(t);
      }),
      (goog.asserts.setErrorHandler = function (t) {
        goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = t);
      }),
      (goog.asserts.assert = function (t, n, r) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            !t &&
            goog.asserts.doAssertFailure_(
              ``,
              null,
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertExists = function (t, n, r) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            t == null &&
            goog.asserts.doAssertFailure_(
              `Expected to exist: %s.`,
              [t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.fail = function (t, n) {
        goog.asserts.ENABLE_ASSERTS &&
          goog.asserts.errorHandler_(
            new goog.asserts.AssertionError(
              `Failure` + (t ? `: ` + t : ``),
              Array.prototype.slice.call(arguments, 1),
            ),
          );
      }),
      (goog.asserts.assertNumber = function (t, n, r) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            typeof t != `number` &&
            goog.asserts.doAssertFailure_(
              `Expected number but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertString = function (t, n, r) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            typeof t != `string` &&
            goog.asserts.doAssertFailure_(
              `Expected string but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertFunction = function (t, n, r) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            !goog.isFunction(t) &&
            goog.asserts.doAssertFailure_(
              `Expected function but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertObject = function (t, n, r) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            !goog.isObject(t) &&
            goog.asserts.doAssertFailure_(
              `Expected object but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertArray = function (t, n, r) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            !Array.isArray(t) &&
            goog.asserts.doAssertFailure_(
              `Expected array but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertBoolean = function (t, n, r) {
        return (
          goog.asserts.ENABLE_ASSERTS &&
            typeof t != `boolean` &&
            goog.asserts.doAssertFailure_(
              `Expected boolean but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertElement = function (t, n, r) {
        return (
          !goog.asserts.ENABLE_ASSERTS ||
            (goog.isObject(t) && t.nodeType == goog.dom.NodeType.ELEMENT) ||
            goog.asserts.doAssertFailure_(
              `Expected Element but got %s: %s.`,
              [goog.typeOf(t), t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertInstanceof = function (t, n, r, i) {
        return (
          !goog.asserts.ENABLE_ASSERTS ||
            t instanceof n ||
            goog.asserts.doAssertFailure_(
              `Expected instanceof %s but got %s.`,
              [goog.asserts.getType_(n), goog.asserts.getType_(t)],
              r,
              Array.prototype.slice.call(arguments, 3),
            ),
          t
        );
      }),
      (goog.asserts.assertFinite = function (t, n, r) {
        return (
          !goog.asserts.ENABLE_ASSERTS ||
            (typeof t == `number` && isFinite(t)) ||
            goog.asserts.doAssertFailure_(
              `Expected %s to be a finite number but it is not.`,
              [t],
              n,
              Array.prototype.slice.call(arguments, 2),
            ),
          t
        );
      }),
      (goog.asserts.assertObjectPrototypeIsIntact = function () {
        for (var t in Object.prototype)
          goog.asserts.fail(
            t + ` should not be enumerable in Object.prototype.`,
          );
      }),
      (goog.asserts.getType_ = function (t) {
        return t instanceof Function
          ? t.displayName || t.name || `unknown type name`
          : t instanceof Object
            ? t.constructor.displayName ||
              t.constructor.name ||
              Object.prototype.toString.call(t)
            : t === null
              ? `null`
              : typeof t;
      }),
      (goog.array = {}),
      (goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE),
      (goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR),
      (goog.array.peek = function (t) {
        return t[t.length - 1];
      }),
      (goog.array.last = goog.array.peek),
      (goog.array.indexOf =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
          ? function (t, n, r) {
              return (
                goog.asserts.assert(t.length != null),
                Array.prototype.indexOf.call(t, n, r)
              );
            }
          : function (t, n, r) {
              if (
                ((r = r == null ? 0 : 0 > r ? Math.max(0, t.length + r) : r),
                typeof t == `string`)
              )
                return typeof n != `string` || n.length != 1
                  ? -1
                  : t.indexOf(n, r);
              for (; r < t.length; r++) if (r in t && t[r] === n) return r;
              return -1;
            }),
      (goog.array.lastIndexOf =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
          ? function (t, n, r) {
              return (
                goog.asserts.assert(t.length != null),
                Array.prototype.lastIndexOf.call(t, n, r ?? t.length - 1)
              );
            }
          : function (t, n, r) {
              if (
                ((r ??= t.length - 1),
                0 > r && (r = Math.max(0, t.length + r)),
                typeof t == `string`)
              )
                return typeof n != `string` || n.length != 1
                  ? -1
                  : t.lastIndexOf(n, r);
              for (; 0 <= r; r--) if (r in t && t[r] === n) return r;
              return -1;
            }),
      (goog.array.forEach =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
          ? function (t, n, r) {
              goog.asserts.assert(t.length != null),
                Array.prototype.forEach.call(t, n, r);
            }
          : function (t, n, r) {
              for (
                var i = t.length,
                  o = typeof t == `string` ? t.split(``) : t,
                  s = 0;
                s < i;
                s++
              )
                s in o && n.call(r, o[s], s, t);
            }),
      (goog.array.forEachRight = function (t, n, r) {
        var i = t.length,
          o = typeof t == `string` ? t.split(``) : t;
        for (--i; 0 <= i; --i) i in o && n.call(r, o[i], i, t);
      }),
      (goog.array.filter =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
          ? function (t, n, r) {
              return (
                goog.asserts.assert(t.length != null),
                Array.prototype.filter.call(t, n, r)
              );
            }
          : function (t, n, r) {
              for (
                var i = t.length,
                  o = [],
                  s = 0,
                  l = typeof t == `string` ? t.split(``) : t,
                  u = 0;
                u < i;
                u++
              )
                if (u in l) {
                  var p = l[u];
                  n.call(r, p, u, t) && (o[s++] = p);
                }
              return o;
            }),
      (goog.array.map =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
          ? function (t, n, r) {
              return (
                goog.asserts.assert(t.length != null),
                Array.prototype.map.call(t, n, r)
              );
            }
          : function (t, n, r) {
              for (
                var i = t.length,
                  o = Array(i),
                  s = typeof t == `string` ? t.split(``) : t,
                  l = 0;
                l < i;
                l++
              )
                l in s && (o[l] = n.call(r, s[l], l, t));
              return o;
            }),
      (goog.array.reduce =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
          ? function (t, n, r, i) {
              return (
                goog.asserts.assert(t.length != null),
                i && (n = goog.bind(n, i)),
                Array.prototype.reduce.call(t, n, r)
              );
            }
          : function (t, n, r, i) {
              var o = r;
              return (
                goog.array.forEach(t, function (r, s) {
                  o = n.call(i, o, r, s, t);
                }),
                o
              );
            }),
      (goog.array.reduceRight =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
          ? function (t, n, r, i) {
              return (
                goog.asserts.assert(t.length != null),
                goog.asserts.assert(n != null),
                i && (n = goog.bind(n, i)),
                Array.prototype.reduceRight.call(t, n, r)
              );
            }
          : function (t, n, r, i) {
              var o = r;
              return (
                goog.array.forEachRight(t, function (r, s) {
                  o = n.call(i, o, r, s, t);
                }),
                o
              );
            }),
      (goog.array.some =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
          ? function (t, n, r) {
              return (
                goog.asserts.assert(t.length != null),
                Array.prototype.some.call(t, n, r)
              );
            }
          : function (t, n, r) {
              for (
                var i = t.length,
                  o = typeof t == `string` ? t.split(``) : t,
                  s = 0;
                s < i;
                s++
              )
                if (s in o && n.call(r, o[s], s, t)) return !0;
              return !1;
            }),
      (goog.array.every =
        goog.NATIVE_ARRAY_PROTOTYPES &&
        (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
          ? function (t, n, r) {
              return (
                goog.asserts.assert(t.length != null),
                Array.prototype.every.call(t, n, r)
              );
            }
          : function (t, n, r) {
              for (
                var i = t.length,
                  o = typeof t == `string` ? t.split(``) : t,
                  s = 0;
                s < i;
                s++
              )
                if (s in o && !n.call(r, o[s], s, t)) return !1;
              return !0;
            }),
      (goog.array.count = function (t, n, r) {
        var i = 0;
        return (
          goog.array.forEach(
            t,
            function (t, o, s) {
              n.call(r, t, o, s) && ++i;
            },
            r,
          ),
          i
        );
      }),
      (goog.array.find = function (t, n, r) {
        return (
          (n = goog.array.findIndex(t, n, r)),
          0 > n ? null : typeof t == `string` ? t.charAt(n) : t[n]
        );
      }),
      (goog.array.findIndex = function (t, n, r) {
        for (
          var i = t.length, o = typeof t == `string` ? t.split(``) : t, s = 0;
          s < i;
          s++
        )
          if (s in o && n.call(r, o[s], s, t)) return s;
        return -1;
      }),
      (goog.array.findRight = function (t, n, r) {
        return (
          (n = goog.array.findIndexRight(t, n, r)),
          0 > n ? null : typeof t == `string` ? t.charAt(n) : t[n]
        );
      }),
      (goog.array.findIndexRight = function (t, n, r) {
        var i = t.length,
          o = typeof t == `string` ? t.split(``) : t;
        for (--i; 0 <= i; i--) if (i in o && n.call(r, o[i], i, t)) return i;
        return -1;
      }),
      (goog.array.contains = function (t, n) {
        return 0 <= goog.array.indexOf(t, n);
      }),
      (goog.array.isEmpty = function (t) {
        return t.length == 0;
      }),
      (goog.array.clear = function (t) {
        if (!Array.isArray(t))
          for (var n = t.length - 1; 0 <= n; n--) delete t[n];
        t.length = 0;
      }),
      (goog.array.insert = function (t, n) {
        goog.array.contains(t, n) || t.push(n);
      }),
      (goog.array.insertAt = function (t, n, r) {
        goog.array.splice(t, r, 0, n);
      }),
      (goog.array.insertArrayAt = function (t, n, r) {
        goog.partial(goog.array.splice, t, r, 0).apply(null, n);
      }),
      (goog.array.insertBefore = function (t, n, r) {
        var i;
        arguments.length == 2 || 0 > (i = goog.array.indexOf(t, r))
          ? t.push(n)
          : goog.array.insertAt(t, n, i);
      }),
      (goog.array.remove = function (t, n) {
        n = goog.array.indexOf(t, n);
        var r;
        return (r = 0 <= n) && goog.array.removeAt(t, n), r;
      }),
      (goog.array.removeLast = function (t, n) {
        return (
          (n = goog.array.lastIndexOf(t, n)),
          0 <= n && (goog.array.removeAt(t, n), !0)
        );
      }),
      (goog.array.removeAt = function (t, n) {
        return (
          goog.asserts.assert(t.length != null),
          Array.prototype.splice.call(t, n, 1).length == 1
        );
      }),
      (goog.array.removeIf = function (t, n, r) {
        return (
          (n = goog.array.findIndex(t, n, r)),
          0 <= n && (goog.array.removeAt(t, n), !0)
        );
      }),
      (goog.array.removeAllIf = function (t, n, r) {
        var i = 0;
        return (
          goog.array.forEachRight(t, function (o, s) {
            n.call(r, o, s, t) && goog.array.removeAt(t, s) && i++;
          }),
          i
        );
      }),
      (goog.array.concat = function (t) {
        return Array.prototype.concat.apply([], arguments);
      }),
      (goog.array.join = function (t) {
        return Array.prototype.concat.apply([], arguments);
      }),
      (goog.array.toArray = function (t) {
        var n = t.length;
        if (0 < n) {
          for (var r = Array(n), i = 0; i < n; i++) r[i] = t[i];
          return r;
        }
        return [];
      }),
      (goog.array.clone = goog.array.toArray),
      (goog.array.extend = function (t, n) {
        for (var r = 1; r < arguments.length; r++) {
          var i = arguments[r];
          if (goog.isArrayLike(i)) {
            var o = t.length || 0,
              s = i.length || 0;
            t.length = o + s;
            for (var l = 0; l < s; l++) t[o + l] = i[l];
          } else t.push(i);
        }
      }),
      (goog.array.splice = function (t, n, r, i) {
        return (
          goog.asserts.assert(t.length != null),
          Array.prototype.splice.apply(t, goog.array.slice(arguments, 1))
        );
      }),
      (goog.array.slice = function (t, n, r) {
        return (
          goog.asserts.assert(t.length != null),
          2 >= arguments.length
            ? Array.prototype.slice.call(t, n)
            : Array.prototype.slice.call(t, n, r)
        );
      }),
      (goog.array.removeDuplicates = function (t, n, r) {
        n ||= t;
        var i = function (t) {
          return goog.isObject(t)
            ? `o` + goog.getUid(t)
            : (typeof t).charAt(0) + t;
        };
        (r ||= i), (i = {});
        for (var o = 0, s = 0; s < t.length; ) {
          var l = t[s++],
            u = r(l);
          Object.prototype.hasOwnProperty.call(i, u) ||
            ((i[u] = !0), (n[o++] = l));
        }
        n.length = o;
      }),
      (goog.array.binarySearch = function (t, n, r) {
        return goog.array.binarySearch_(
          t,
          r || goog.array.defaultCompare,
          !1,
          n,
        );
      }),
      (goog.array.binarySelect = function (t, n, r) {
        return goog.array.binarySearch_(t, n, !0, void 0, r);
      }),
      (goog.array.binarySearch_ = function (t, n, r, i, o) {
        for (var s = 0, l = t.length, u; s < l; ) {
          var p = s + ((l - s) >>> 1),
            m = r ? n.call(o, t[p], p, t) : n(i, t[p]);
          0 < m ? (s = p + 1) : ((l = p), (u = !m));
        }
        return u ? s : -s - 1;
      }),
      (goog.array.sort = function (t, n) {
        t.sort(n || goog.array.defaultCompare);
      }),
      (goog.array.stableSort = function (t, n) {
        for (var r = Array(t.length), i = 0; i < t.length; i++)
          r[i] = { index: i, value: t[i] };
        var o = n || goog.array.defaultCompare;
        for (
          goog.array.sort(r, function (t, n) {
            return o(t.value, n.value) || t.index - n.index;
          }),
            i = 0;
          i < t.length;
          i++
        )
          t[i] = r[i].value;
      }),
      (goog.array.sortByKey = function (t, n, r) {
        var i = r || goog.array.defaultCompare;
        goog.array.sort(t, function (t, r) {
          return i(n(t), n(r));
        });
      }),
      (goog.array.sortObjectsByKey = function (t, n, r) {
        goog.array.sortByKey(
          t,
          function (t) {
            return t[n];
          },
          r,
        );
      }),
      (goog.array.isSorted = function (t, n, r) {
        n ||= goog.array.defaultCompare;
        for (var i = 1; i < t.length; i++) {
          var o = n(t[i - 1], t[i]);
          if (0 < o || (o == 0 && r)) return !1;
        }
        return !0;
      }),
      (goog.array.equals = function (t, n, r) {
        if (
          !goog.isArrayLike(t) ||
          !goog.isArrayLike(n) ||
          t.length != n.length
        )
          return !1;
        var i = t.length;
        r ||= goog.array.defaultCompareEquality;
        for (var o = 0; o < i; o++) if (!r(t[o], n[o])) return !1;
        return !0;
      }),
      (goog.array.compare3 = function (t, n, r) {
        r ||= goog.array.defaultCompare;
        for (var i = Math.min(t.length, n.length), o = 0; o < i; o++) {
          var s = r(t[o], n[o]);
          if (s != 0) return s;
        }
        return goog.array.defaultCompare(t.length, n.length);
      }),
      (goog.array.defaultCompare = function (t, n) {
        return t > n ? 1 : t < n ? -1 : 0;
      }),
      (goog.array.inverseDefaultCompare = function (t, n) {
        return -goog.array.defaultCompare(t, n);
      }),
      (goog.array.defaultCompareEquality = function (t, n) {
        return t === n;
      }),
      (goog.array.binaryInsert = function (t, n, r) {
        return (
          (r = goog.array.binarySearch(t, n, r)),
          0 > r && (goog.array.insertAt(t, n, -(r + 1)), !0)
        );
      }),
      (goog.array.binaryRemove = function (t, n, r) {
        return (
          (n = goog.array.binarySearch(t, n, r)),
          0 <= n && goog.array.removeAt(t, n)
        );
      }),
      (goog.array.bucket = function (t, n, r) {
        for (var i = {}, o = 0; o < t.length; o++) {
          var s = t[o],
            l = n.call(r, s, o, t);
          l !== void 0 && (i[l] || (i[l] = [])).push(s);
        }
        return i;
      }),
      (goog.array.toObject = function (t, n, r) {
        var i = {};
        return (
          goog.array.forEach(t, function (o, s) {
            i[n.call(r, o, s, t)] = o;
          }),
          i
        );
      }),
      (goog.array.range = function (t, n, r) {
        var i = [],
          o = 0,
          s = t;
        if (((r ||= 1), n !== void 0 && ((o = t), (s = n)), 0 > r * (s - o)))
          return [];
        if (0 < r) for (t = o; t < s; t += r) i.push(t);
        else for (t = o; t > s; t += r) i.push(t);
        return i;
      }),
      (goog.array.repeat = function (t, n) {
        for (var r = [], i = 0; i < n; i++) r[i] = t;
        return r;
      }),
      (goog.array.flatten = function (t) {
        for (var n = [], r = 0; r < arguments.length; r++) {
          var i = arguments[r];
          if (Array.isArray(i))
            for (var o = 0; o < i.length; o += 8192) {
              var s = goog.array.slice(i, o, o + 8192);
              s = goog.array.flatten.apply(null, s);
              for (var l = 0; l < s.length; l++) n.push(s[l]);
            }
          else n.push(i);
        }
        return n;
      }),
      (goog.array.rotate = function (t, n) {
        return (
          goog.asserts.assert(t.length != null),
          t.length &&
            ((n %= t.length),
            0 < n
              ? Array.prototype.unshift.apply(t, t.splice(-n, n))
              : 0 > n && Array.prototype.push.apply(t, t.splice(0, -n))),
          t
        );
      }),
      (goog.array.moveItem = function (t, n, r) {
        goog.asserts.assert(0 <= n && n < t.length),
          goog.asserts.assert(0 <= r && r < t.length),
          (n = Array.prototype.splice.call(t, n, 1)),
          Array.prototype.splice.call(t, r, 0, n[0]);
      }),
      (goog.array.zip = function (t) {
        if (!arguments.length) return [];
        for (
          var n = [], r = arguments[0].length, i = 1;
          i < arguments.length;
          i++
        )
          arguments[i].length < r && (r = arguments[i].length);
        for (i = 0; i < r; i++) {
          for (var o = [], s = 0; s < arguments.length; s++)
            o.push(arguments[s][i]);
          n.push(o);
        }
        return n;
      }),
      (goog.array.shuffle = function (t, n) {
        n ||= Math.random;
        for (var r = t.length - 1; 0 < r; r--) {
          var i = Math.floor(n() * (r + 1)),
            o = t[r];
          (t[r] = t[i]), (t[i] = o);
        }
      }),
      (goog.array.copyByIndex = function (t, n) {
        var r = [];
        return (
          goog.array.forEach(n, function (n) {
            r.push(t[n]);
          }),
          r
        );
      }),
      (goog.array.concatMap = function (t, n, r) {
        return goog.array.concat.apply([], goog.array.map(t, n, r));
      }),
      (goog.crypt = {}),
      (goog.crypt.stringToByteArray = function (t) {
        for (var n = [], r = 0, i = 0; i < t.length; i++) {
          var o = t.charCodeAt(i);
          255 < o && ((n[r++] = o & 255), (o >>= 8)), (n[r++] = o);
        }
        return n;
      }),
      (goog.crypt.byteArrayToString = function (t) {
        if (8192 >= t.length) return String.fromCharCode.apply(null, t);
        for (var n = ``, r = 0; r < t.length; r += 8192) {
          var i = goog.array.slice(t, r, r + 8192);
          n += String.fromCharCode.apply(null, i);
        }
        return n;
      }),
      (goog.crypt.byteArrayToHex = function (t, n) {
        return goog.array
          .map(t, function (t) {
            return (t = t.toString(16)), 1 < t.length ? t : `0` + t;
          })
          .join(n || ``);
      }),
      (goog.crypt.hexToByteArray = function (t) {
        goog.asserts.assert(
          t.length % 2 == 0,
          `Key string length must be multiple of 2`,
        );
        for (var n = [], r = 0; r < t.length; r += 2)
          n.push(parseInt(t.substring(r, r + 2), 16));
        return n;
      }),
      (goog.crypt.stringToUtf8ByteArray = function (t) {
        for (var n = [], r = 0, i = 0; i < t.length; i++) {
          var o = t.charCodeAt(i);
          128 > o
            ? (n[r++] = o)
            : (2048 > o
                ? (n[r++] = (o >> 6) | 192)
                : ((o & 64512) == 55296 &&
                  i + 1 < t.length &&
                  (t.charCodeAt(i + 1) & 64512) == 56320
                    ? ((o =
                        65536 +
                        ((o & 1023) << 10) +
                        (t.charCodeAt(++i) & 1023)),
                      (n[r++] = (o >> 18) | 240),
                      (n[r++] = ((o >> 12) & 63) | 128))
                    : (n[r++] = (o >> 12) | 224),
                  (n[r++] = ((o >> 6) & 63) | 128)),
              (n[r++] = (o & 63) | 128));
        }
        return n;
      }),
      (goog.crypt.utf8ByteArrayToString = function (t) {
        for (var n = [], r = 0, i = 0; r < t.length; ) {
          var o = t[r++];
          if (128 > o) n[i++] = String.fromCharCode(o);
          else if (191 < o && 224 > o) {
            var s = t[r++];
            n[i++] = String.fromCharCode(((o & 31) << 6) | (s & 63));
          } else if (239 < o && 365 > o) {
            s = t[r++];
            var l = t[r++],
              u = t[r++];
            (o =
              (((o & 7) << 18) |
                ((s & 63) << 12) |
                ((l & 63) << 6) |
                (u & 63)) -
              65536),
              (n[i++] = String.fromCharCode(55296 + (o >> 10))),
              (n[i++] = String.fromCharCode(56320 + (o & 1023)));
          } else
            (s = t[r++]),
              (l = t[r++]),
              (n[i++] = String.fromCharCode(
                ((o & 15) << 12) | ((s & 63) << 6) | (l & 63),
              ));
        }
        return n.join(``);
      }),
      (goog.crypt.xorByteArray = function (t, n) {
        goog.asserts.assert(
          t.length == n.length,
          `XOR array lengths must match`,
        );
        for (var r = [], i = 0; i < t.length; i++) r.push(t[i] ^ n[i]);
        return r;
      }),
      (goog.dom.asserts = {}),
      (goog.dom.asserts.assertIsLocation = function (t) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var n = goog.dom.asserts.getWindow_(t);
          n &&
            (!t || (!(t instanceof n.Location) && t instanceof n.Element)) &&
            goog.asserts.fail(
              `Argument is not a Location (or a non-Element mock); got: %s`,
              goog.dom.asserts.debugStringForType_(t),
            );
        }
        return t;
      }),
      (goog.dom.asserts.assertIsElementType_ = function (t, n) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var r = goog.dom.asserts.getWindow_(t);
          r &&
            r[n] !== void 0 &&
            ((t &&
              (t instanceof r[n] ||
                !(t instanceof r.Location || t instanceof r.Element))) ||
              goog.asserts.fail(
                `Argument is not a %s (or a non-Element, non-Location mock); got: %s`,
                n,
                goog.dom.asserts.debugStringForType_(t),
              ));
        }
        return t;
      }),
      (goog.dom.asserts.assertIsHTMLAnchorElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLAnchorElement`);
      }),
      (goog.dom.asserts.assertIsHTMLButtonElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLButtonElement`);
      }),
      (goog.dom.asserts.assertIsHTMLLinkElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLLinkElement`);
      }),
      (goog.dom.asserts.assertIsHTMLImageElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLImageElement`);
      }),
      (goog.dom.asserts.assertIsHTMLAudioElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLAudioElement`);
      }),
      (goog.dom.asserts.assertIsHTMLVideoElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLVideoElement`);
      }),
      (goog.dom.asserts.assertIsHTMLInputElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLInputElement`);
      }),
      (goog.dom.asserts.assertIsHTMLTextAreaElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLTextAreaElement`);
      }),
      (goog.dom.asserts.assertIsHTMLCanvasElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLCanvasElement`);
      }),
      (goog.dom.asserts.assertIsHTMLEmbedElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLEmbedElement`);
      }),
      (goog.dom.asserts.assertIsHTMLFormElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLFormElement`);
      }),
      (goog.dom.asserts.assertIsHTMLFrameElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLFrameElement`);
      }),
      (goog.dom.asserts.assertIsHTMLIFrameElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLIFrameElement`);
      }),
      (goog.dom.asserts.assertIsHTMLObjectElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLObjectElement`);
      }),
      (goog.dom.asserts.assertIsHTMLScriptElement = function (t) {
        return goog.dom.asserts.assertIsElementType_(t, `HTMLScriptElement`);
      }),
      (goog.dom.asserts.debugStringForType_ = function (t) {
        if (goog.isObject(t))
          try {
            return (
              t.constructor.displayName ||
              t.constructor.name ||
              Object.prototype.toString.call(t)
            );
          } catch {
            return `<object could not be stringified>`;
          }
        return t === void 0 ? `undefined` : t === null ? `null` : typeof t;
      }),
      (goog.dom.asserts.getWindow_ = function (t) {
        try {
          var n = t && t.ownerDocument,
            r = n && (n.defaultView || n.parentWindow);
          if (((r ||= goog.global), r.Element && r.Location)) return r;
        } catch {}
        return null;
      }),
      (goog.functions = {}),
      (goog.functions.constant = function (t) {
        return function () {
          return t;
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
      (goog.functions.identity = function (t, n) {
        return t;
      }),
      (goog.functions.error = function (t) {
        return function () {
          throw Error(t);
        };
      }),
      (goog.functions.fail = function (t) {
        return function () {
          throw t;
        };
      }),
      (goog.functions.lock = function (t, n) {
        return (
          (n ||= 0),
          function () {
            return t.apply(this, Array.prototype.slice.call(arguments, 0, n));
          }
        );
      }),
      (goog.functions.nth = function (t) {
        return function () {
          return arguments[t];
        };
      }),
      (goog.functions.partialRight = function (t, n) {
        var r = Array.prototype.slice.call(arguments, 1);
        return function () {
          var n = Array.prototype.slice.call(arguments);
          return n.push.apply(n, r), t.apply(this, n);
        };
      }),
      (goog.functions.withReturnValue = function (t, n) {
        return goog.functions.sequence(t, goog.functions.constant(n));
      }),
      (goog.functions.equalTo = function (t, n) {
        return function (r) {
          return n ? t == r : t === r;
        };
      }),
      (goog.functions.compose = function (t, n) {
        var r = arguments,
          i = r.length;
        return function () {
          var t;
          i && (t = r[i - 1].apply(this, arguments));
          for (var n = i - 2; 0 <= n; n--) t = r[n].call(this, t);
          return t;
        };
      }),
      (goog.functions.sequence = function (t) {
        var n = arguments,
          r = n.length;
        return function () {
          for (var t, i = 0; i < r; i++) t = n[i].apply(this, arguments);
          return t;
        };
      }),
      (goog.functions.and = function (t) {
        var n = arguments,
          r = n.length;
        return function () {
          for (var t = 0; t < r; t++)
            if (!n[t].apply(this, arguments)) return !1;
          return !0;
        };
      }),
      (goog.functions.or = function (t) {
        var n = arguments,
          r = n.length;
        return function () {
          for (var t = 0; t < r; t++)
            if (n[t].apply(this, arguments)) return !0;
          return !1;
        };
      }),
      (goog.functions.not = function (t) {
        return function () {
          return !t.apply(this, arguments);
        };
      }),
      (goog.functions.create = function (t, n) {
        var r = function () {};
        return (
          (r.prototype = t.prototype),
          (r = new r()),
          t.apply(r, Array.prototype.slice.call(arguments, 1)),
          r
        );
      }),
      (goog.functions.CACHE_RETURN_VALUE = !0),
      (goog.functions.cacheReturnValue = function (t) {
        var n = !1,
          r;
        return function () {
          return goog.functions.CACHE_RETURN_VALUE
            ? ((n ||= ((r = t()), !0)), r)
            : t();
        };
      }),
      (goog.functions.once = function (t) {
        var n = t;
        return function () {
          if (n) {
            var t = n;
            (n = null), t();
          }
        };
      }),
      (goog.functions.debounce = function (t, n, r) {
        var i = 0;
        return function (o) {
          goog.global.clearTimeout(i);
          var s = arguments;
          i = goog.global.setTimeout(function () {
            t.apply(r, s);
          }, n);
        };
      }),
      (goog.functions.throttle = function (t, n, r) {
        var i = 0,
          o = !1,
          s = [],
          l = function () {
            (i = 0), o && ((o = !1), u());
          },
          u = function () {
            (i = goog.global.setTimeout(l, n)), t.apply(r, s);
          };
        return function (t) {
          (s = arguments), i ? (o = !0) : u();
        };
      }),
      (goog.functions.rateLimit = function (t, n, r) {
        var i = 0,
          o = function () {
            i = 0;
          };
        return function (s) {
          i || ((i = goog.global.setTimeout(o, n)), t.apply(r, arguments));
        };
      }),
      (goog.dom.HtmlElement = function () {}),
      (goog.dom.TagName = function (t) {
        this.tagName_ = t;
      }),
      (goog.dom.TagName.prototype.toString = function () {
        return this.tagName_;
      }),
      (goog.dom.TagName.A = new goog.dom.TagName(`A`)),
      (goog.dom.TagName.ABBR = new goog.dom.TagName(`ABBR`)),
      (goog.dom.TagName.ACRONYM = new goog.dom.TagName(`ACRONYM`)),
      (goog.dom.TagName.ADDRESS = new goog.dom.TagName(`ADDRESS`)),
      (goog.dom.TagName.APPLET = new goog.dom.TagName(`APPLET`)),
      (goog.dom.TagName.AREA = new goog.dom.TagName(`AREA`)),
      (goog.dom.TagName.ARTICLE = new goog.dom.TagName(`ARTICLE`)),
      (goog.dom.TagName.ASIDE = new goog.dom.TagName(`ASIDE`)),
      (goog.dom.TagName.AUDIO = new goog.dom.TagName(`AUDIO`)),
      (goog.dom.TagName.B = new goog.dom.TagName(`B`)),
      (goog.dom.TagName.BASE = new goog.dom.TagName(`BASE`)),
      (goog.dom.TagName.BASEFONT = new goog.dom.TagName(`BASEFONT`)),
      (goog.dom.TagName.BDI = new goog.dom.TagName(`BDI`)),
      (goog.dom.TagName.BDO = new goog.dom.TagName(`BDO`)),
      (goog.dom.TagName.BIG = new goog.dom.TagName(`BIG`)),
      (goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName(`BLOCKQUOTE`)),
      (goog.dom.TagName.BODY = new goog.dom.TagName(`BODY`)),
      (goog.dom.TagName.BR = new goog.dom.TagName(`BR`)),
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
      (goog.dom.TagName.DD = new goog.dom.TagName(`DD`)),
      (goog.dom.TagName.DEL = new goog.dom.TagName(`DEL`)),
      (goog.dom.TagName.DETAILS = new goog.dom.TagName(`DETAILS`)),
      (goog.dom.TagName.DFN = new goog.dom.TagName(`DFN`)),
      (goog.dom.TagName.DIALOG = new goog.dom.TagName(`DIALOG`)),
      (goog.dom.TagName.DIR = new goog.dom.TagName(`DIR`)),
      (goog.dom.TagName.DIV = new goog.dom.TagName(`DIV`)),
      (goog.dom.TagName.DL = new goog.dom.TagName(`DL`)),
      (goog.dom.TagName.DT = new goog.dom.TagName(`DT`)),
      (goog.dom.TagName.EM = new goog.dom.TagName(`EM`)),
      (goog.dom.TagName.EMBED = new goog.dom.TagName(`EMBED`)),
      (goog.dom.TagName.FIELDSET = new goog.dom.TagName(`FIELDSET`)),
      (goog.dom.TagName.FIGCAPTION = new goog.dom.TagName(`FIGCAPTION`)),
      (goog.dom.TagName.FIGURE = new goog.dom.TagName(`FIGURE`)),
      (goog.dom.TagName.FONT = new goog.dom.TagName(`FONT`)),
      (goog.dom.TagName.FOOTER = new goog.dom.TagName(`FOOTER`)),
      (goog.dom.TagName.FORM = new goog.dom.TagName(`FORM`)),
      (goog.dom.TagName.FRAME = new goog.dom.TagName(`FRAME`)),
      (goog.dom.TagName.FRAMESET = new goog.dom.TagName(`FRAMESET`)),
      (goog.dom.TagName.H1 = new goog.dom.TagName(`H1`)),
      (goog.dom.TagName.H2 = new goog.dom.TagName(`H2`)),
      (goog.dom.TagName.H3 = new goog.dom.TagName(`H3`)),
      (goog.dom.TagName.H4 = new goog.dom.TagName(`H4`)),
      (goog.dom.TagName.H5 = new goog.dom.TagName(`H5`)),
      (goog.dom.TagName.H6 = new goog.dom.TagName(`H6`)),
      (goog.dom.TagName.HEAD = new goog.dom.TagName(`HEAD`)),
      (goog.dom.TagName.HEADER = new goog.dom.TagName(`HEADER`)),
      (goog.dom.TagName.HGROUP = new goog.dom.TagName(`HGROUP`)),
      (goog.dom.TagName.HR = new goog.dom.TagName(`HR`)),
      (goog.dom.TagName.HTML = new goog.dom.TagName(`HTML`)),
      (goog.dom.TagName.I = new goog.dom.TagName(`I`)),
      (goog.dom.TagName.IFRAME = new goog.dom.TagName(`IFRAME`)),
      (goog.dom.TagName.IMG = new goog.dom.TagName(`IMG`)),
      (goog.dom.TagName.INPUT = new goog.dom.TagName(`INPUT`)),
      (goog.dom.TagName.INS = new goog.dom.TagName(`INS`)),
      (goog.dom.TagName.ISINDEX = new goog.dom.TagName(`ISINDEX`)),
      (goog.dom.TagName.KBD = new goog.dom.TagName(`KBD`)),
      (goog.dom.TagName.KEYGEN = new goog.dom.TagName(`KEYGEN`)),
      (goog.dom.TagName.LABEL = new goog.dom.TagName(`LABEL`)),
      (goog.dom.TagName.LEGEND = new goog.dom.TagName(`LEGEND`)),
      (goog.dom.TagName.LI = new goog.dom.TagName(`LI`)),
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
      (goog.dom.TagName.OL = new goog.dom.TagName(`OL`)),
      (goog.dom.TagName.OPTGROUP = new goog.dom.TagName(`OPTGROUP`)),
      (goog.dom.TagName.OPTION = new goog.dom.TagName(`OPTION`)),
      (goog.dom.TagName.OUTPUT = new goog.dom.TagName(`OUTPUT`)),
      (goog.dom.TagName.P = new goog.dom.TagName(`P`)),
      (goog.dom.TagName.PARAM = new goog.dom.TagName(`PARAM`)),
      (goog.dom.TagName.PICTURE = new goog.dom.TagName(`PICTURE`)),
      (goog.dom.TagName.PRE = new goog.dom.TagName(`PRE`)),
      (goog.dom.TagName.PROGRESS = new goog.dom.TagName(`PROGRESS`)),
      (goog.dom.TagName.Q = new goog.dom.TagName(`Q`)),
      (goog.dom.TagName.RP = new goog.dom.TagName(`RP`)),
      (goog.dom.TagName.RT = new goog.dom.TagName(`RT`)),
      (goog.dom.TagName.RTC = new goog.dom.TagName(`RTC`)),
      (goog.dom.TagName.RUBY = new goog.dom.TagName(`RUBY`)),
      (goog.dom.TagName.S = new goog.dom.TagName(`S`)),
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
      (goog.dom.TagName.TD = new goog.dom.TagName(`TD`)),
      (goog.dom.TagName.TEMPLATE = new goog.dom.TagName(`TEMPLATE`)),
      (goog.dom.TagName.TEXTAREA = new goog.dom.TagName(`TEXTAREA`)),
      (goog.dom.TagName.TFOOT = new goog.dom.TagName(`TFOOT`)),
      (goog.dom.TagName.TH = new goog.dom.TagName(`TH`)),
      (goog.dom.TagName.THEAD = new goog.dom.TagName(`THEAD`)),
      (goog.dom.TagName.TIME = new goog.dom.TagName(`TIME`)),
      (goog.dom.TagName.TITLE = new goog.dom.TagName(`TITLE`)),
      (goog.dom.TagName.TR = new goog.dom.TagName(`TR`)),
      (goog.dom.TagName.TRACK = new goog.dom.TagName(`TRACK`)),
      (goog.dom.TagName.TT = new goog.dom.TagName(`TT`)),
      (goog.dom.TagName.U = new goog.dom.TagName(`U`)),
      (goog.dom.TagName.UL = new goog.dom.TagName(`UL`)),
      (goog.dom.TagName.VAR = new goog.dom.TagName(`VAR`)),
      (goog.dom.TagName.VIDEO = new goog.dom.TagName(`VIDEO`)),
      (goog.dom.TagName.WBR = new goog.dom.TagName(`WBR`)),
      (goog.dom.tags = {}),
      (goog.dom.tags.VOID_TAGS_ = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
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
      (goog.dom.tags.isVoidTag = function (t) {
        return !0 === goog.dom.tags.VOID_TAGS_[t];
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
      (goog.string.Const = function (t, n) {
        (this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
          (t === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ &&
            n) ||
          ``),
          (this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ =
            goog.string.Const.TYPE_MARKER_);
      }),
      (goog.string.Const.prototype.implementsGoogStringTypedString = !0),
      (goog.string.Const.prototype.getTypedStringValue = function () {
        return this
          .stringConstValueWithSecurityContract__googStringSecurityPrivate_;
      }),
      goog.DEBUG &&
        (goog.string.Const.prototype.toString = function () {
          return (
            `Const{` +
            this
              .stringConstValueWithSecurityContract__googStringSecurityPrivate_ +
            `}`
          );
        }),
      (goog.string.Const.unwrap = function (t) {
        return t instanceof goog.string.Const &&
          t.constructor === goog.string.Const &&
          t.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ ===
            goog.string.Const.TYPE_MARKER_
          ? t.stringConstValueWithSecurityContract__googStringSecurityPrivate_
          : (goog.asserts.fail(
              `expected object of type Const, got '` + t + `'`,
            ),
            `type_error:Const`);
      }),
      (goog.string.Const.from = function (t) {
        return new goog.string.Const(
          goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_,
          t,
        );
      }),
      (goog.string.Const.TYPE_MARKER_ = {}),
      (goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
      (goog.string.Const.EMPTY = goog.string.Const.from(``)),
      (goog.html.SafeScript = function () {
        (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = ``),
          (this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
      }),
      (goog.html.SafeScript.prototype.implementsGoogStringTypedString = !0),
      (goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeScript.fromConstant = function (t) {
        return (
          (t = goog.string.Const.unwrap(t)),
          t.length === 0
            ? goog.html.SafeScript.EMPTY
            : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
                t,
              )
        );
      }),
      (goog.html.SafeScript.fromConstantAndArgs = function (t, n) {
        for (var r = [], i = 1; i < arguments.length; i++)
          r.push(goog.html.SafeScript.stringify_(arguments[i]));
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
          `(` + goog.string.Const.unwrap(t) + `)(` + r.join(`, `) + `);`,
        );
      }),
      (goog.html.SafeScript.fromJson = function (t) {
        return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
          goog.html.SafeScript.stringify_(t),
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
      (goog.html.SafeScript.unwrap = function (t) {
        return goog.html.SafeScript.unwrapTrustedScript(t).toString();
      }),
      (goog.html.SafeScript.unwrapTrustedScript = function (t) {
        return t instanceof goog.html.SafeScript &&
          t.constructor === goog.html.SafeScript &&
          t.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? t.privateDoNotAccessOrElseSafeScriptWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeScript, got '` +
                t +
                `' of type ` +
                goog.typeOf(t),
            ),
            `type_error:SafeScript`);
      }),
      (goog.html.SafeScript.stringify_ = function (t) {
        return JSON.stringify(t).replace(/</g, `\\x3c`);
      }),
      (goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse =
        function (t) {
          return new goog.html.SafeScript().initSecurityPrivateDoNotAccessOrElse_(
            t,
          );
        }),
      (goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ =
        function (t) {
          return (
            (this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html
              .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
              ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(
                  t,
                )
              : t),
            this
          );
        }),
      (goog.html.SafeScript.EMPTY =
        goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
          ``,
        )),
      (goog.fs = {}),
      (goog.fs.url = {}),
      (goog.fs.url.createObjectUrl = function (t) {
        return goog.fs.url.getUrlObject_().createObjectURL(t);
      }),
      (goog.fs.url.revokeObjectUrl = function (t) {
        goog.fs.url.getUrlObject_().revokeObjectURL(t);
      }),
      (goog.fs.url.UrlObject_ = function () {}),
      (goog.fs.url.UrlObject_.prototype.createObjectURL = function (t) {}),
      (goog.fs.url.UrlObject_.prototype.revokeObjectURL = function (t) {}),
      (goog.fs.url.getUrlObject_ = function () {
        var t = goog.fs.url.findUrlObject_();
        if (t != null) return t;
        throw Error(`This browser doesn't seem to support blob URLs`);
      }),
      (goog.fs.url.findUrlObject_ = function () {
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
      (goog.fs.url.browserSupportsObjectUrls = function () {
        return goog.fs.url.findUrlObject_() != null;
      }),
      (goog.fs.blob = {}),
      (goog.fs.blob.getBlob = function (t) {
        var n = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
        if (n !== void 0) {
          n = new n();
          for (var r = 0; r < arguments.length; r++) n.append(arguments[r]);
          return n.getBlob();
        }
        return goog.fs.blob.getBlobWithProperties(
          goog.array.toArray(arguments),
        );
      }),
      (goog.fs.blob.getBlobWithProperties = function (t, n, r) {
        var i = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
        if (i !== void 0) {
          i = new i();
          for (var o = 0; o < t.length; o++) i.append(t[o], r);
          return i.getBlob(n);
        }
        if (goog.global.Blob !== void 0)
          return (
            (i = {}), n && (i.type = n), r && (i.endings = r), new Blob(t, i)
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
      (goog.i18n.bidi.Format = { LRE: `‪`, RLE: `‫`, PDF: `‬`, LRM: `‎`, RLM: `‏` }),
      (goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 }),
      (goog.i18n.bidi.RIGHT = `right`),
      (goog.i18n.bidi.LEFT = `left`),
      (goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL
        ? goog.i18n.bidi.LEFT
        : goog.i18n.bidi.RIGHT),
      (goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL
        ? goog.i18n.bidi.RIGHT
        : goog.i18n.bidi.LEFT),
      (goog.i18n.bidi.toDir = function (t, n) {
        return typeof t == `number`
          ? 0 < t
            ? goog.i18n.bidi.Dir.LTR
            : 0 > t
              ? goog.i18n.bidi.Dir.RTL
              : n
                ? null
                : goog.i18n.bidi.Dir.NEUTRAL
          : t == null
            ? null
            : t
              ? goog.i18n.bidi.Dir.RTL
              : goog.i18n.bidi.Dir.LTR;
      }),
      (goog.i18n.bidi.ltrChars_ = `A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\ud801\ud804-\ud839\ud83c-\udbff豈-﬜︀-﹯﻽-￿`),
      (goog.i18n.bidi.rtlChars_ = `֑-ۯۺ-ࣿ‏\ud802-\ud803\ud83a-\ud83bיִ-﷿ﹰ-ﻼ`),
      (goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g),
      (goog.i18n.bidi.stripHtmlIfNeeded_ = function (t, n) {
        return n ? t.replace(goog.i18n.bidi.htmlSkipReg_, ``) : t;
      }),
      (goog.i18n.bidi.rtlCharReg_ = RegExp(
        `[` + goog.i18n.bidi.rtlChars_ + `]`,
      )),
      (goog.i18n.bidi.ltrCharReg_ = RegExp(
        `[` + goog.i18n.bidi.ltrChars_ + `]`,
      )),
      (goog.i18n.bidi.hasAnyRtl = function (t, n) {
        return goog.i18n.bidi.rtlCharReg_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(t, n),
        );
      }),
      (goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl),
      (goog.i18n.bidi.hasAnyLtr = function (t, n) {
        return goog.i18n.bidi.ltrCharReg_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(t, n),
        );
      }),
      (goog.i18n.bidi.ltrRe_ = RegExp(`^[` + goog.i18n.bidi.ltrChars_ + `]`)),
      (goog.i18n.bidi.rtlRe_ = RegExp(`^[` + goog.i18n.bidi.rtlChars_ + `]`)),
      (goog.i18n.bidi.isRtlChar = function (t) {
        return goog.i18n.bidi.rtlRe_.test(t);
      }),
      (goog.i18n.bidi.isLtrChar = function (t) {
        return goog.i18n.bidi.ltrRe_.test(t);
      }),
      (goog.i18n.bidi.isNeutralChar = function (t) {
        return !goog.i18n.bidi.isLtrChar(t) && !goog.i18n.bidi.isRtlChar(t);
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
      (goog.i18n.bidi.startsWithRtl = function (t, n) {
        return goog.i18n.bidi.rtlDirCheckRe_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(t, n),
        );
      }),
      (goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl),
      (goog.i18n.bidi.startsWithLtr = function (t, n) {
        return goog.i18n.bidi.ltrDirCheckRe_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(t, n),
        );
      }),
      (goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr),
      (goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/),
      (goog.i18n.bidi.isNeutralText = function (t, n) {
        return (
          (t = goog.i18n.bidi.stripHtmlIfNeeded_(t, n)),
          goog.i18n.bidi.isRequiredLtrRe_.test(t) ||
            (!goog.i18n.bidi.hasAnyLtr(t) && !goog.i18n.bidi.hasAnyRtl(t))
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
      (goog.i18n.bidi.endsWithLtr = function (t, n) {
        return goog.i18n.bidi.ltrExitDirCheckRe_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(t, n),
        );
      }),
      (goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr),
      (goog.i18n.bidi.endsWithRtl = function (t, n) {
        return goog.i18n.bidi.rtlExitDirCheckRe_.test(
          goog.i18n.bidi.stripHtmlIfNeeded_(t, n),
        );
      }),
      (goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl),
      (goog.i18n.bidi.rtlLocalesRe_ =
        /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i),
      (goog.i18n.bidi.isRtlLanguage = function (t) {
        return goog.i18n.bidi.rtlLocalesRe_.test(t);
      }),
      (goog.i18n.bidi.bracketGuardTextRe_ =
        /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g),
      (goog.i18n.bidi.guardBracketInText = function (t, n) {
        return (
          (n = (n === void 0 ? goog.i18n.bidi.hasAnyRtl(t) : n)
            ? goog.i18n.bidi.Format.RLM
            : goog.i18n.bidi.Format.LRM),
          t.replace(goog.i18n.bidi.bracketGuardTextRe_, n + `$&` + n)
        );
      }),
      (goog.i18n.bidi.enforceRtlInHtml = function (t) {
        return t.charAt(0) == `<`
          ? t.replace(/<\w+/, `$& dir=rtl`)
          : `
<span dir=rtl>` +
              t +
              `</span>`;
      }),
      (goog.i18n.bidi.enforceRtlInText = function (t) {
        return goog.i18n.bidi.Format.RLE + t + goog.i18n.bidi.Format.PDF;
      }),
      (goog.i18n.bidi.enforceLtrInHtml = function (t) {
        return t.charAt(0) == `<`
          ? t.replace(/<\w+/, `$& dir=ltr`)
          : `
<span dir=ltr>` +
              t +
              `</span>`;
      }),
      (goog.i18n.bidi.enforceLtrInText = function (t) {
        return goog.i18n.bidi.Format.LRE + t + goog.i18n.bidi.Format.PDF;
      }),
      (goog.i18n.bidi.dimensionsRe_ =
        /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g),
      (goog.i18n.bidi.leftRe_ = /left/gi),
      (goog.i18n.bidi.rightRe_ = /right/gi),
      (goog.i18n.bidi.tempRe_ = /%%%%/g),
      (goog.i18n.bidi.mirrorCSS = function (t) {
        return t
          .replace(goog.i18n.bidi.dimensionsRe_, `:$1 $4 $3 $2`)
          .replace(goog.i18n.bidi.leftRe_, `%%%%`)
          .replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT)
          .replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
      }),
      (goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g),
      (goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g),
      (goog.i18n.bidi.normalizeHebrewQuote = function (t) {
        return t
          .replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, `$1״`)
          .replace(goog.i18n.bidi.singleQuoteSubstituteRe_, `$1׳`);
      }),
      (goog.i18n.bidi.wordSeparatorRe_ = /\s+/),
      (goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/),
      (goog.i18n.bidi.rtlDetectionThreshold_ = 0.4),
      (goog.i18n.bidi.estimateDirection = function (t, n) {
        var r = 0,
          i = 0,
          o = !1;
        for (
          t = goog.i18n.bidi
            .stripHtmlIfNeeded_(t, n)
            .split(goog.i18n.bidi.wordSeparatorRe_),
            n = 0;
          n < t.length;
          n++
        ) {
          var s = t[n];
          goog.i18n.bidi.startsWithRtl(s)
            ? (r++, i++)
            : goog.i18n.bidi.isRequiredLtrRe_.test(s)
              ? (o = !0)
              : goog.i18n.bidi.hasAnyLtr(s)
                ? i++
                : goog.i18n.bidi.hasNumeralsRe_.test(s) && (o = !0);
        }
        return i == 0
          ? o
            ? goog.i18n.bidi.Dir.LTR
            : goog.i18n.bidi.Dir.NEUTRAL
          : r / i > goog.i18n.bidi.rtlDetectionThreshold_
            ? goog.i18n.bidi.Dir.RTL
            : goog.i18n.bidi.Dir.LTR;
      }),
      (goog.i18n.bidi.detectRtlDirectionality = function (t, n) {
        return goog.i18n.bidi.estimateDirection(t, n) == goog.i18n.bidi.Dir.RTL;
      }),
      (goog.i18n.bidi.setElementDirAndAlign = function (t, n) {
        t &&
          (n = goog.i18n.bidi.toDir(n)) &&
          ((t.style.textAlign =
            n == goog.i18n.bidi.Dir.RTL
              ? goog.i18n.bidi.RIGHT
              : goog.i18n.bidi.LEFT),
          (t.dir = n == goog.i18n.bidi.Dir.RTL ? `rtl` : `ltr`));
      }),
      (goog.i18n.bidi.setElementDirByTextDirectionality = function (t, n) {
        switch (goog.i18n.bidi.estimateDirection(n)) {
          case goog.i18n.bidi.Dir.LTR:
            t.dir = `ltr`;
            break;
          case goog.i18n.bidi.Dir.RTL:
            t.dir = `rtl`;
            break;
          default:
            t.removeAttribute(`dir`);
        }
      }),
      (goog.i18n.bidi.DirectionalString = function () {}),
      (goog.html.TrustedResourceUrl = function (t, n) {
        (this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ =
          (t === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ &&
            n) ||
          ``),
          (this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
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
        t,
        n,
      ) {
        var r = goog.html.TrustedResourceUrl.unwrap(this);
        r = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(r);
        var i = r[3] || ``;
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
          r[1] +
            goog.html.TrustedResourceUrl.stringifyParams_(`?`, r[2] || ``, t) +
            goog.html.TrustedResourceUrl.stringifyParams_(`#`, i, n),
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
      (goog.html.TrustedResourceUrl.unwrap = function (t) {
        return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(
          t,
        ).toString();
      }),
      (goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function (t) {
        return t instanceof goog.html.TrustedResourceUrl &&
          t.constructor === goog.html.TrustedResourceUrl &&
          t.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? t.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_
          : (goog.asserts.fail(
              `expected object of type TrustedResourceUrl, got '` +
                t +
                `' of type ` +
                goog.typeOf(t),
            ),
            `type_error:TrustedResourceUrl`);
      }),
      (goog.html.TrustedResourceUrl.format = function (t, n) {
        var r = goog.string.Const.unwrap(t);
        if (!goog.html.TrustedResourceUrl.BASE_URL_.test(r))
          throw Error(`Invalid TrustedResourceUrl format: ` + r);
        return (
          (t = r.replace(
            goog.html.TrustedResourceUrl.FORMAT_MARKER_,
            function (t, i) {
              if (!Object.prototype.hasOwnProperty.call(n, i))
                throw Error(
                  `Found marker, "` +
                    i +
                    `", in format string, "` +
                    r +
                    `", but no valid label mapping found in args: ` +
                    JSON.stringify(n),
                );
              return (
                (t = n[i]),
                t instanceof goog.string.Const
                  ? goog.string.Const.unwrap(t)
                  : encodeURIComponent(String(t))
              );
            },
          )),
          goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
            t,
          )
        );
      }),
      (goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g),
      (goog.html.TrustedResourceUrl.BASE_URL_ =
        /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i),
      (goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ =
        /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/),
      (goog.html.TrustedResourceUrl.formatWithParams = function (t, n, r, i) {
        return goog.html.TrustedResourceUrl.format(t, n).cloneWithParams(r, i);
      }),
      (goog.html.TrustedResourceUrl.fromConstant = function (t) {
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
          goog.string.Const.unwrap(t),
        );
      }),
      (goog.html.TrustedResourceUrl.fromConstants = function (t) {
        for (var n = ``, r = 0; r < t.length; r++)
          n += goog.string.Const.unwrap(t[r]);
        return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
          n,
        );
      }),
      (goog.html.TrustedResourceUrl.fromSafeScript = function (t) {
        return (
          (t = goog.fs.blob.getBlobWithProperties(
            [goog.html.SafeScript.unwrap(t)],
            `text/javascript`,
          )),
          (t = goog.fs.url.createObjectUrl(t)),
          goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
            t,
          )
        );
      }),
      (goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
        {}),
      (goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse =
        function (t) {
          return (
            (t = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
              ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(
                  t,
                )
              : t),
            new goog.html.TrustedResourceUrl(
              goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
              t,
            )
          );
        }),
      (goog.html.TrustedResourceUrl.stringifyParams_ = function (t, n, r) {
        if (r == null) return n;
        if (typeof r == `string`) return r ? t + encodeURIComponent(r) : ``;
        for (var i in r) {
          var o = r[i];
          o = Array.isArray(o) ? o : [o];
          for (var s = 0; s < o.length; s++) {
            var l = o[s];
            l != null &&
              ((n ||= t),
              (n +=
                (n.length > t.length ? `&` : ``) +
                encodeURIComponent(i) +
                `=` +
                encodeURIComponent(String(l))));
          }
        }
        return n;
      }),
      (goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
      (goog.string.internal = {}),
      (goog.string.internal.startsWith = function (t, n) {
        return t.lastIndexOf(n, 0) == 0;
      }),
      (goog.string.internal.endsWith = function (t, n) {
        var r = t.length - n.length;
        return 0 <= r && t.indexOf(n, r) == r;
      }),
      (goog.string.internal.caseInsensitiveStartsWith = function (t, n) {
        return (
          goog.string.internal.caseInsensitiveCompare(
            n,
            t.substr(0, n.length),
          ) == 0
        );
      }),
      (goog.string.internal.caseInsensitiveEndsWith = function (t, n) {
        return (
          goog.string.internal.caseInsensitiveCompare(
            n,
            t.substr(t.length - n.length, n.length),
          ) == 0
        );
      }),
      (goog.string.internal.caseInsensitiveEquals = function (t, n) {
        return t.toLowerCase() == n.toLowerCase();
      }),
      (goog.string.internal.isEmptyOrWhitespace = function (t) {
        return /^[\s\xa0]*$/.test(t);
      }),
      (goog.string.internal.trim =
        goog.TRUSTED_SITE && String.prototype.trim
          ? function (t) {
              return t.trim();
            }
          : function (t) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
            }),
      (goog.string.internal.caseInsensitiveCompare = function (t, n) {
        return (
          (t = String(t).toLowerCase()),
          (n = String(n).toLowerCase()),
          t < n ? -1 : t == n ? 0 : 1
        );
      }),
      (goog.string.internal.newLineToBr = function (t, n) {
        return t.replace(/(\r\n|\r|\n)/g, n ? `<br />` : `<br>`);
      }),
      (goog.string.internal.htmlEscape = function (t, n) {
        if (n)
          t = t
            .replace(goog.string.internal.AMP_RE_, `&amp;`)
            .replace(goog.string.internal.LT_RE_, `&lt;`)
            .replace(goog.string.internal.GT_RE_, `&gt;`)
            .replace(goog.string.internal.QUOT_RE_, `&quot;`)
            .replace(goog.string.internal.SINGLE_QUOTE_RE_, `&#39;`)
            .replace(goog.string.internal.NULL_RE_, `&#0;`);
        else {
          if (!goog.string.internal.ALL_RE_.test(t)) return t;
          t.indexOf(`&`) != -1 &&
            (t = t.replace(goog.string.internal.AMP_RE_, `&amp;`)),
            t.indexOf(`<`) != -1 &&
              (t = t.replace(goog.string.internal.LT_RE_, `&lt;`)),
            t.indexOf(`>`) != -1 &&
              (t = t.replace(goog.string.internal.GT_RE_, `&gt;`)),
            t.indexOf(`"`) != -1 &&
              (t = t.replace(goog.string.internal.QUOT_RE_, `&quot;`)),
            t.indexOf(`'`) != -1 &&
              (t = t.replace(goog.string.internal.SINGLE_QUOTE_RE_, `&#39;`)),
            t.indexOf(`\0`) != -1 &&
              (t = t.replace(goog.string.internal.NULL_RE_, `&#0;`));
        }
        return t;
      }),
      (goog.string.internal.AMP_RE_ = /&/g),
      (goog.string.internal.LT_RE_ = /</g),
      (goog.string.internal.GT_RE_ = />/g),
      (goog.string.internal.QUOT_RE_ = /"/g),
      (goog.string.internal.SINGLE_QUOTE_RE_ = /'/g),
      (goog.string.internal.NULL_RE_ = /\x00/g),
      (goog.string.internal.ALL_RE_ = /[\x00&<>"']/),
      (goog.string.internal.whitespaceEscape = function (t, n) {
        return goog.string.internal.newLineToBr(t.replace(/  /g, ` &#160;`), n);
      }),
      (goog.string.internal.contains = function (t, n) {
        return t.indexOf(n) != -1;
      }),
      (goog.string.internal.caseInsensitiveContains = function (t, n) {
        return goog.string.internal.contains(t.toLowerCase(), n.toLowerCase());
      }),
      (goog.string.internal.compareVersions = function (t, n) {
        var r = 0;
        (t = goog.string.internal.trim(String(t)).split(`.`)),
          (n = goog.string.internal.trim(String(n)).split(`.`));
        for (
          var i = Math.max(t.length, n.length), o = 0;
          r == 0 && o < i;
          o++
        ) {
          var s = t[o] || ``,
            l = n[o] || ``;
          do {
            if (
              ((s = /(\d*)(\D*)(.*)/.exec(s) || [``, ``, ``, ``]),
              (l = /(\d*)(\D*)(.*)/.exec(l) || [``, ``, ``, ``]),
              s[0].length == 0 && l[0].length == 0)
            )
              break;
            r = s[1].length == 0 ? 0 : parseInt(s[1], 10);
            var u = l[1].length == 0 ? 0 : parseInt(l[1], 10);
            (r =
              goog.string.internal.compareElements_(r, u) ||
              goog.string.internal.compareElements_(
                s[2].length == 0,
                l[2].length == 0,
              ) ||
              goog.string.internal.compareElements_(s[2], l[2])),
              (s = s[3]),
              (l = l[3]);
          } while (r == 0);
        }
        return r;
      }),
      (goog.string.internal.compareElements_ = function (t, n) {
        return t < n ? -1 : +(t > n);
      }),
      (goog.html.SafeUrl = function (t, n) {
        (this.privateDoNotAccessOrElseSafeUrlWrappedValue_ =
          (t === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && n) || ``),
          (this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
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
      (goog.html.SafeUrl.unwrap = function (t) {
        return t instanceof goog.html.SafeUrl &&
          t.constructor === goog.html.SafeUrl &&
          t.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? t.privateDoNotAccessOrElseSafeUrlWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeUrl, got '` +
                t +
                `' of type ` +
                goog.typeOf(t),
            ),
            `type_error:SafeUrl`);
      }),
      (goog.html.SafeUrl.fromConstant = function (t) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
          goog.string.Const.unwrap(t),
        );
      }),
      (goog.html.SAFE_MIME_TYPE_PATTERN_ =
        /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),
      (goog.html.SafeUrl.isSafeMimeType = function (t) {
        return goog.html.SAFE_MIME_TYPE_PATTERN_.test(t);
      }),
      (goog.html.SafeUrl.fromBlob = function (t) {
        return (
          (t = goog.html.SafeUrl.isSafeMimeType(t.type)
            ? goog.fs.url.createObjectUrl(t)
            : goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        );
      }),
      (goog.html.SafeUrl.fromMediaSource = function (t) {
        return (
          goog.asserts.assert(
            `MediaSource` in goog.global,
            `No support for MediaSource`,
          ),
          (t =
            t instanceof MediaSource
              ? goog.fs.url.createObjectUrl(t)
              : goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        );
      }),
      (goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i),
      (goog.html.SafeUrl.fromDataUrl = function (t) {
        t = t.replace(/(%0A|%0D)/g, ``);
        var n = t.match(goog.html.DATA_URL_PATTERN_);
        return (
          (n &&= goog.html.SafeUrl.isSafeMimeType(n[1])),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
            n ? t : goog.html.SafeUrl.INNOCUOUS_STRING,
          )
        );
      }),
      (goog.html.SafeUrl.fromTelUrl = function (t) {
        return (
          goog.string.internal.caseInsensitiveStartsWith(t, `tel:`) ||
            (t = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        );
      }),
      (goog.html.SIP_URL_PATTERN_ =
        /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i),
      (goog.html.SafeUrl.fromSipUrl = function (t) {
        return (
          goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(t)) ||
            (t = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        );
      }),
      (goog.html.SafeUrl.fromFacebookMessengerUrl = function (t) {
        return (
          goog.string.internal.caseInsensitiveStartsWith(
            t,
            `fb-messenger://share`,
          ) || (t = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        );
      }),
      (goog.html.SafeUrl.fromWhatsAppUrl = function (t) {
        return (
          goog.string.internal.caseInsensitiveStartsWith(
            t,
            `whatsapp://send`,
          ) || (t = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        );
      }),
      (goog.html.SafeUrl.fromSmsUrl = function (t) {
        return (
          (goog.string.internal.caseInsensitiveStartsWith(t, `sms:`) &&
            goog.html.SafeUrl.isSmsUrlBodyValid_(t)) ||
            (t = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        );
      }),
      (goog.html.SafeUrl.isSmsUrlBodyValid_ = function (t) {
        var n = t.indexOf(`#`);
        return (
          0 < n && (t = t.substring(0, n)),
          (n = t.match(/[?&]body=/gi)),
          n
            ? 1 < n.length
              ? !1
              : ((t = t.match(/[?&]body=([^&]*)/)[1]),
                !t || /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(t))
            : !0
        );
      }),
      (goog.html.SafeUrl.fromSshUrl = function (t) {
        return (
          goog.string.internal.caseInsensitiveStartsWith(t, `ssh://`) ||
            (t = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t)
        );
      }),
      (goog.html.SafeUrl.sanitizeChromeExtensionUrl = function (t, n) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(
          /^chrome-extension:\/\/([^\/]+)\//,
          t,
          n,
        );
      }),
      (goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function (t, n) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(
          /^moz-extension:\/\/([^\/]+)\//,
          t,
          n,
        );
      }),
      (goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function (t, n) {
        return goog.html.SafeUrl.sanitizeExtensionUrl_(
          /^ms-browser-extension:\/\/([^\/]+)\//,
          t,
          n,
        );
      }),
      (goog.html.SafeUrl.sanitizeExtensionUrl_ = function (t, n, r) {
        return (
          (t = t.exec(n))
            ? ((t = t[1]),
              (r instanceof goog.string.Const
                ? [goog.string.Const.unwrap(r)]
                : r.map(function (t) {
                    return goog.string.Const.unwrap(t);
                  })
              ).indexOf(t) == -1 && (n = goog.html.SafeUrl.INNOCUOUS_STRING))
            : (n = goog.html.SafeUrl.INNOCUOUS_STRING),
          goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(n)
        );
      }),
      (goog.html.SafeUrl.fromTrustedResourceUrl = function (t) {
        return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
          goog.html.TrustedResourceUrl.unwrap(t),
        );
      }),
      (goog.html.SAFE_URL_PATTERN_ =
        /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i),
      (goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_),
      (goog.html.SafeUrl.sanitize = function (t) {
        return t instanceof goog.html.SafeUrl
          ? t
          : ((t =
              typeof t == `object` && t.implementsGoogStringTypedString
                ? t.getTypedStringValue()
                : String(t)),
            goog.html.SAFE_URL_PATTERN_.test(t) ||
              (t = goog.html.SafeUrl.INNOCUOUS_STRING),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(t));
      }),
      (goog.html.SafeUrl.sanitizeAssertUnchanged = function (t, n) {
        return t instanceof goog.html.SafeUrl
          ? t
          : ((t =
              typeof t == `object` && t.implementsGoogStringTypedString
                ? t.getTypedStringValue()
                : String(t)),
            n &&
            /^data:/i.test(t) &&
            ((n = goog.html.SafeUrl.fromDataUrl(t)),
            n.getTypedStringValue() == t)
              ? n
              : (goog.asserts.assert(
                  goog.html.SAFE_URL_PATTERN_.test(t),
                  `%s does not match the safe URL pattern`,
                  t,
                ) || (t = goog.html.SafeUrl.INNOCUOUS_STRING),
                goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
                  t,
                )));
      }),
      (goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse =
        function (t) {
          return new goog.html.SafeUrl(
            goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_,
            t,
          );
        }),
      (goog.html.SafeUrl.ABOUT_BLANK =
        goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(
          `about:blank`,
        )),
      (goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {}),
      (goog.html.SafeStyle = function () {
        (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = ``),
          (this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
      }),
      (goog.html.SafeStyle.prototype.implementsGoogStringTypedString = !0),
      (goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeStyle.fromConstant = function (t) {
        return (
          (t = goog.string.Const.unwrap(t)),
          t.length === 0
            ? goog.html.SafeStyle.EMPTY
            : (goog.asserts.assert(
                goog.string.internal.endsWith(t, `;`),
                `Last character of style string is not ';': ` + t,
              ),
              goog.asserts.assert(
                goog.string.internal.contains(t, `:`),
                `Style string must contain at least one ':', to specify a "name: value" pair: ` +
                  t,
              ),
              goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                t,
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
      (goog.html.SafeStyle.unwrap = function (t) {
        return t instanceof goog.html.SafeStyle &&
          t.constructor === goog.html.SafeStyle &&
          t.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? t.privateDoNotAccessOrElseSafeStyleWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeStyle, got '` +
                t +
                `' of type ` +
                goog.typeOf(t),
            ),
            `type_error:SafeStyle`);
      }),
      (goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse =
        function (t) {
          return new goog.html.SafeStyle().initSecurityPrivateDoNotAccessOrElse_(
            t,
          );
        }),
      (goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ =
        function (t) {
          return (
            (this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = t), this
          );
        }),
      (goog.html.SafeStyle.EMPTY =
        goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
          ``,
        )),
      (goog.html.SafeStyle.INNOCUOUS_STRING = `zClosurez`),
      (goog.html.SafeStyle.create = function (t) {
        var n = ``,
          r;
        for (r in t) {
          if (!/^[-_a-zA-Z0-9]+$/.test(r))
            throw Error(`Name allows only [-_a-zA-Z0-9], got: ` + r);
          var i = t[r];
          i != null &&
            ((i = Array.isArray(i)
              ? goog.array
                  .map(i, goog.html.SafeStyle.sanitizePropertyValue_)
                  .join(` `)
              : goog.html.SafeStyle.sanitizePropertyValue_(i)),
            (n += r + `:` + i + `;`));
        }
        return n
          ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
              n,
            )
          : goog.html.SafeStyle.EMPTY;
      }),
      (goog.html.SafeStyle.sanitizePropertyValue_ = function (t) {
        if (t instanceof goog.html.SafeUrl)
          return (
            `url("` +
            goog.html.SafeUrl.unwrap(t)
              .replace(/</g, `%3c`)
              .replace(/[\\"]/g, `\\$&`) +
            `")`
          );
        if (
          ((t =
            t instanceof goog.string.Const
              ? goog.string.Const.unwrap(t)
              : goog.html.SafeStyle.sanitizePropertyValueString_(String(t))),
          /[{;}]/.test(t))
        )
          throw new goog.asserts.AssertionError(
            `Value does not allow [{;}], got: %s.`,
            [t],
          );
        return t;
      }),
      (goog.html.SafeStyle.sanitizePropertyValueString_ = function (t) {
        var n = t
          .replace(goog.html.SafeStyle.FUNCTIONS_RE_, `$1`)
          .replace(goog.html.SafeStyle.FUNCTIONS_RE_, `$1`)
          .replace(goog.html.SafeStyle.URL_RE_, `url`);
        if (goog.html.SafeStyle.VALUE_RE_.test(n)) {
          if (goog.html.SafeStyle.COMMENT_RE_.test(t))
            return (
              goog.asserts.fail(`String value disallows comments, got: ` + t),
              goog.html.SafeStyle.INNOCUOUS_STRING
            );
          if (!goog.html.SafeStyle.hasBalancedQuotes_(t))
            return (
              goog.asserts.fail(
                `String value requires balanced quotes, got: ` + t,
              ),
              goog.html.SafeStyle.INNOCUOUS_STRING
            );
          if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(t))
            return (
              goog.asserts.fail(
                `String value requires balanced square brackets and one identifier per pair of brackets, got: ` +
                  t,
              ),
              goog.html.SafeStyle.INNOCUOUS_STRING
            );
        } else
          return (
            goog.asserts.fail(
              `String value allows only ` +
                goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ +
                ` and simple functions, got: ` +
                t,
            ),
            goog.html.SafeStyle.INNOCUOUS_STRING
          );
        return goog.html.SafeStyle.sanitizeUrl_(t);
      }),
      (goog.html.SafeStyle.hasBalancedQuotes_ = function (t) {
        for (var n = !0, r = !0, i = 0; i < t.length; i++) {
          var o = t.charAt(i);
          o == `'` && r ? (n = !n) : o == `"` && n && (r = !r);
        }
        return n && r;
      }),
      (goog.html.SafeStyle.hasBalancedSquareBrackets_ = function (t) {
        for (var n = !0, r = /^[-_a-zA-Z0-9]$/, i = 0; i < t.length; i++) {
          var o = t.charAt(i);
          if (o == `]`) {
            if (n) return !1;
            n = !0;
          } else if (o == `[`) {
            if (!n) return !1;
            n = !1;
          } else if (!n && !r.test(o)) return !1;
        }
        return n;
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
      (goog.html.SafeStyle.sanitizeUrl_ = function (t) {
        return t.replace(goog.html.SafeStyle.URL_RE_, function (t, n, r, i) {
          var o = ``;
          return (
            (r = r.replace(/^(['"])(.*)\1$/, function (t, n, r) {
              return (o = n), r;
            })),
            (t = goog.html.SafeUrl.sanitize(r).getTypedStringValue()),
            n + o + t + o + i
          );
        });
      }),
      (goog.html.SafeStyle.concat = function (t) {
        var n = ``,
          r = function (t) {
            Array.isArray(t)
              ? goog.array.forEach(t, r)
              : (n += goog.html.SafeStyle.unwrap(t));
          };
        return (
          goog.array.forEach(arguments, r),
          n
            ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
                n,
              )
            : goog.html.SafeStyle.EMPTY
        );
      }),
      (goog.html.SafeStyleSheet = function () {
        (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = ``),
          (this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_);
      }),
      (goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = !0),
      (goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeStyleSheet.createRule = function (t, n) {
        if (goog.string.internal.contains(t, `<`))
          throw Error(`Selector does not allow '<', got: ` + t);
        var r = t.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, ``);
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(r))
          throw Error(
            `Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: ` +
              t,
          );
        if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(r))
          throw Error(`() and [] in selector must be balanced, got: ` + t);
        return (
          n instanceof goog.html.SafeStyle ||
            (n = goog.html.SafeStyle.create(n)),
          (t =
            t +
            `{` +
            goog.html.SafeStyle.unwrap(n).replace(/</g, `\\3C `) +
            `}`),
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
            t,
          )
        );
      }),
      (goog.html.SafeStyleSheet.hasBalancedBrackets_ = function (t) {
        for (var n = { "(": `)`, "[": `]` }, r = [], i = 0; i < t.length; i++) {
          var o = t[i];
          if (n[o]) r.push(n[o]);
          else if (goog.object.contains(n, o) && r.pop() != o) return !1;
        }
        return r.length == 0;
      }),
      (goog.html.SafeStyleSheet.concat = function (t) {
        var n = ``,
          r = function (t) {
            Array.isArray(t)
              ? goog.array.forEach(t, r)
              : (n += goog.html.SafeStyleSheet.unwrap(t));
          };
        return (
          goog.array.forEach(arguments, r),
          goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
            n,
          )
        );
      }),
      (goog.html.SafeStyleSheet.fromConstant = function (t) {
        return (
          (t = goog.string.Const.unwrap(t)),
          t.length === 0
            ? goog.html.SafeStyleSheet.EMPTY
            : (goog.asserts.assert(
                !goog.string.internal.contains(t, `<`),
                `Forbidden '<' character in style sheet string: ` + t,
              ),
              goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
                t,
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
      (goog.html.SafeStyleSheet.unwrap = function (t) {
        return t instanceof goog.html.SafeStyleSheet &&
          t.constructor === goog.html.SafeStyleSheet &&
          t.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? t.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeStyleSheet, got '` +
                t +
                `' of type ` +
                goog.typeOf(t),
            ),
            `type_error:SafeStyleSheet`);
      }),
      (goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse =
        function (t) {
          return new goog.html.SafeStyleSheet().initSecurityPrivateDoNotAccessOrElse_(
            t,
          );
        }),
      (goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ =
        function (t) {
          return (
            (this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = t), this
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
        var t = goog.labs.userAgent.util.getNavigator_();
        return (t &&= t.userAgent) ? t : ``;
      }),
      (goog.labs.userAgent.util.getNavigator_ = function () {
        return goog.global.navigator;
      }),
      (goog.labs.userAgent.util.userAgent_ =
        goog.labs.userAgent.util.getNativeUserAgentString_()),
      (goog.labs.userAgent.util.setUserAgent = function (t) {
        goog.labs.userAgent.util.userAgent_ =
          t || goog.labs.userAgent.util.getNativeUserAgentString_();
      }),
      (goog.labs.userAgent.util.getUserAgent = function () {
        return goog.labs.userAgent.util.userAgent_;
      }),
      (goog.labs.userAgent.util.matchUserAgent = function (t) {
        var n = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.contains(n, t);
      }),
      (goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (t) {
        var n = goog.labs.userAgent.util.getUserAgent();
        return goog.string.internal.caseInsensitiveContains(n, t);
      }),
      (goog.labs.userAgent.util.extractVersionTuples = function (t) {
        for (
          var n = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, r = [], i;
          (i = n.exec(t));
        )
          r.push([i[1], i[2], i[3] || void 0]);
        return r;
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
        function t(t) {
          return (t = goog.array.find(t, i)), r[t] || ``;
        }
        var n = goog.labs.userAgent.util.getUserAgent();
        if (goog.labs.userAgent.browser.isIE())
          return goog.labs.userAgent.browser.getIEVersion_(n);
        n = goog.labs.userAgent.util.extractVersionTuples(n);
        var r = {};
        goog.array.forEach(n, function (t) {
          r[t[0]] = t[1];
        });
        var i = goog.partial(goog.object.containsKey, r);
        return goog.labs.userAgent.browser.isOpera()
          ? t([`Version`, `Opera`])
          : goog.labs.userAgent.browser.isEdge()
            ? t([`Edge`])
            : goog.labs.userAgent.browser.isEdgeChromium()
              ? t([`Edg`])
              : goog.labs.userAgent.browser.isChrome()
                ? t([`Chrome`, `CriOS`, `HeadlessChrome`])
                : ((n = n[2]) && n[1]) || ``;
      }),
      (goog.labs.userAgent.browser.isVersionOrHigher = function (t) {
        return (
          0 <=
          goog.string.internal.compareVersions(
            goog.labs.userAgent.browser.getVersion(),
            t,
          )
        );
      }),
      (goog.labs.userAgent.browser.getIEVersion_ = function (t) {
        var n = /rv: *([\d\.]*)/.exec(t);
        if (n && n[1]) return n[1];
        n = ``;
        var r = /MSIE +([\d\.]+)/.exec(t);
        if (r && r[1]) {
          if (((t = /Trident\/(\d.\d)/.exec(t)), r[1] == `7.0`)) {
            if (t && t[1])
              switch (t[1]) {
                case `4.0`:
                  n = `8.0`;
                  break;
                case `5.0`:
                  n = `9.0`;
                  break;
                case `6.0`:
                  n = `10.0`;
                  break;
                case `7.0`:
                  n = `11.0`;
              }
            else n = `7.0`;
          } else n = r[1];
        }
        return n;
      }),
      (goog.html.SafeHtml = function () {
        (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = ``),
          (this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_),
          (this.dir_ = null);
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
      (goog.html.SafeHtml.unwrap = function (t) {
        return goog.html.SafeHtml.unwrapTrustedHTML(t).toString();
      }),
      (goog.html.SafeHtml.unwrapTrustedHTML = function (t) {
        return t instanceof goog.html.SafeHtml &&
          t.constructor === goog.html.SafeHtml &&
          t.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ ===
            goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_
          ? t.privateDoNotAccessOrElseSafeHtmlWrappedValue_
          : (goog.asserts.fail(
              `expected object of type SafeHtml, got '` +
                t +
                `' of type ` +
                goog.typeOf(t),
            ),
            `type_error:SafeHtml`);
      }),
      (goog.html.SafeHtml.htmlEscape = function (t) {
        if (t instanceof goog.html.SafeHtml) return t;
        var n = typeof t == `object`,
          r = null;
        return (
          n &&
            t.implementsGoogI18nBidiDirectionalString &&
            (r = t.getDirection()),
          (t =
            n && t.implementsGoogStringTypedString
              ? t.getTypedStringValue()
              : String(t)),
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            goog.string.internal.htmlEscape(t),
            r,
          )
        );
      }),
      (goog.html.SafeHtml.htmlEscapePreservingNewlines = function (t) {
        return t instanceof goog.html.SafeHtml
          ? t
          : ((t = goog.html.SafeHtml.htmlEscape(t)),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(t)),
              t.getDirection(),
            ));
      }),
      (goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function (t) {
        return t instanceof goog.html.SafeHtml
          ? t
          : ((t = goog.html.SafeHtml.htmlEscape(t)),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              goog.string.internal.whitespaceEscape(
                goog.html.SafeHtml.unwrap(t),
              ),
              t.getDirection(),
            ));
      }),
      (goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape),
      (goog.html.SafeHtml.comment = function (t) {
        return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          `<!--` + goog.string.internal.htmlEscape(t) + `-->`,
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
      (goog.html.SafeHtml.create = function (t, n, r) {
        return (
          goog.html.SafeHtml.verifyTagName(String(t)),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            String(t),
            n,
            r,
          )
        );
      }),
      (goog.html.SafeHtml.verifyTagName = function (t) {
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(t))
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? `Invalid tag name <` + t + `>.`
              : ``,
          );
        if (t.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? `Tag name <` + t + `> is not allowed for SafeHtml.`
              : ``,
          );
      }),
      (goog.html.SafeHtml.createIframe = function (t, n, r, i) {
        t && goog.html.TrustedResourceUrl.unwrap(t);
        var o = {};
        return (
          (o.src = t || null),
          (o.srcdoc = n && goog.html.SafeHtml.unwrap(n)),
          (t = goog.html.SafeHtml.combineAttributes(o, { sandbox: `` }, r)),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `iframe`,
            t,
            i,
          )
        );
      }),
      (goog.html.SafeHtml.createSandboxIframe = function (t, n, r, i) {
        if (!goog.html.SafeHtml.canUseSandboxIframe())
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? `The browser does not support sandboxed iframes.`
              : ``,
          );
        var o = {};
        return (
          (o.src = t
            ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(t))
            : null),
          (o.srcdoc = n || null),
          (o.sandbox = ``),
          (t = goog.html.SafeHtml.combineAttributes(o, {}, r)),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `iframe`,
            t,
            i,
          )
        );
      }),
      (goog.html.SafeHtml.canUseSandboxIframe = function () {
        return (
          goog.global.HTMLIFrameElement &&
          `sandbox` in goog.global.HTMLIFrameElement.prototype
        );
      }),
      (goog.html.SafeHtml.createScriptSrc = function (t, n) {
        return (
          goog.html.TrustedResourceUrl.unwrap(t),
          (t = goog.html.SafeHtml.combineAttributes({ src: t }, {}, n)),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `script`,
            t,
          )
        );
      }),
      (goog.html.SafeHtml.createScript = function (t, n) {
        for (var r in n) {
          var i = r.toLowerCase();
          if (i == `language` || i == `src` || i == `text` || i == `type`)
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? `Cannot set "` + i + `" attribute`
                : ``,
            );
        }
        for (r = ``, t = goog.array.concat(t), i = 0; i < t.length; i++)
          r += goog.html.SafeScript.unwrap(t[i]);
        return (
          (t =
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              r,
              goog.i18n.bidi.Dir.NEUTRAL,
            )),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `script`,
            n,
            t,
          )
        );
      }),
      (goog.html.SafeHtml.createStyle = function (t, n) {
        n = goog.html.SafeHtml.combineAttributes({ type: `text/css` }, {}, n);
        var r = ``;
        t = goog.array.concat(t);
        for (var i = 0; i < t.length; i++)
          r += goog.html.SafeStyleSheet.unwrap(t[i]);
        return (
          (t =
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              r,
              goog.i18n.bidi.Dir.NEUTRAL,
            )),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `style`,
            n,
            t,
          )
        );
      }),
      (goog.html.SafeHtml.createMetaRefresh = function (t, n) {
        return (
          (t = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(t))),
          (goog.labs.userAgent.browser.isIE() ||
            goog.labs.userAgent.browser.isEdge()) &&
            goog.string.internal.contains(t, `;`) &&
            (t = `'` + t.replace(/'/g, `%27`) + `'`),
          goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
            `meta`,
            { "http-equiv": `refresh`, content: (n || 0) + `; url=` + t },
          )
        );
      }),
      (goog.html.SafeHtml.getAttrNameAndValue_ = function (t, n, r) {
        if (r instanceof goog.string.Const) r = goog.string.Const.unwrap(r);
        else if (n.toLowerCase() == `style`) {
          if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
            r = goog.html.SafeHtml.getStyleValue_(r);
          else
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? `Attribute "style" not supported.`
                : ``,
            );
        } else {
          if (/^on/i.test(n))
            throw Error(
              goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                ? `Attribute "` +
                    n +
                    `" requires goog.string.Const value, "` +
                    r +
                    `" given.`
                : ``,
            );
          if (n.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_) {
            if (r instanceof goog.html.TrustedResourceUrl)
              r = goog.html.TrustedResourceUrl.unwrap(r);
            else if (r instanceof goog.html.SafeUrl)
              r = goog.html.SafeUrl.unwrap(r);
            else if (typeof r == `string`)
              r = goog.html.SafeUrl.sanitize(r).getTypedStringValue();
            else
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? `Attribute "` +
                      n +
                      `" on tag "` +
                      t +
                      `" requires goog.html.SafeUrl, goog.string.Const, or string, value "` +
                      r +
                      `" given.`
                  : ``,
              );
          }
        }
        return (
          r.implementsGoogStringTypedString && (r = r.getTypedStringValue()),
          goog.asserts.assert(
            typeof r == `string` || typeof r == `number`,
            `String or number value expected, got ` +
              typeof r +
              ` with value: ` +
              r,
          ),
          n + `="` + goog.string.internal.htmlEscape(String(r)) + `"`
        );
      }),
      (goog.html.SafeHtml.getStyleValue_ = function (t) {
        if (!goog.isObject(t))
          throw Error(
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
              ? `The "style" attribute requires goog.html.SafeStyle or map of style properties, ` +
                  typeof t +
                  ` given: ` +
                  t
              : ``,
          );
        return (
          t instanceof goog.html.SafeStyle ||
            (t = goog.html.SafeStyle.create(t)),
          goog.html.SafeStyle.unwrap(t)
        );
      }),
      (goog.html.SafeHtml.createWithDir = function (t, n, r, i) {
        return (n = goog.html.SafeHtml.create(n, r, i)), (n.dir_ = t), n;
      }),
      (goog.html.SafeHtml.join = function (t, n) {
        t = goog.html.SafeHtml.htmlEscape(t);
        var r = t.getDirection(),
          i = [],
          o = function (t) {
            Array.isArray(t)
              ? goog.array.forEach(t, o)
              : ((t = goog.html.SafeHtml.htmlEscape(t)),
                i.push(goog.html.SafeHtml.unwrap(t)),
                (t = t.getDirection()),
                r == goog.i18n.bidi.Dir.NEUTRAL
                  ? (r = t)
                  : t != goog.i18n.bidi.Dir.NEUTRAL && r != t && (r = null));
          };
        return (
          goog.array.forEach(n, o),
          goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
            i.join(goog.html.SafeHtml.unwrap(t)),
            r,
          )
        );
      }),
      (goog.html.SafeHtml.concat = function (t) {
        return goog.html.SafeHtml.join(
          goog.html.SafeHtml.EMPTY,
          Array.prototype.slice.call(arguments),
        );
      }),
      (goog.html.SafeHtml.concatWithDir = function (t, n) {
        var r = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
        return (r.dir_ = t), r;
      }),
      (goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {}),
      (goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse =
        function (t, n) {
          return new goog.html.SafeHtml().initSecurityPrivateDoNotAccessOrElse_(
            t,
            n,
          );
        }),
      (goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ =
        function (t, n) {
          return (
            (this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html
              .trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY
              ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(
                  t,
                )
              : t),
            (this.dir_ = n),
            this
          );
        }),
      (goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse =
        function (t, n, r) {
          var i = null,
            o = `<` + t + goog.html.SafeHtml.stringifyAttributes(t, n);
          return (
            r == null ? (r = []) : Array.isArray(r) || (r = [r]),
            goog.dom.tags.isVoidTag(t.toLowerCase())
              ? (goog.asserts.assert(
                  !r.length,
                  `Void tag <` + t + `> does not allow content.`,
                ),
                (o += `>`))
              : ((i = goog.html.SafeHtml.concat(r)),
                (o += `>` + goog.html.SafeHtml.unwrap(i) + `</` + t + `>`),
                (i = i.getDirection())),
            (t = n && n.dir) &&
              (i = /^(ltr|rtl|auto)$/i.test(t)
                ? goog.i18n.bidi.Dir.NEUTRAL
                : null),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              o,
              i,
            )
          );
        }),
      (goog.html.SafeHtml.stringifyAttributes = function (t, n) {
        var r = ``;
        if (n)
          for (var i in n) {
            if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(i))
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? `Invalid attribute name "` + i + `".`
                  : ``,
              );
            var o = n[i];
            o != null &&
              (r += ` ` + goog.html.SafeHtml.getAttrNameAndValue_(t, i, o));
          }
        return r;
      }),
      (goog.html.SafeHtml.combineAttributes = function (t, n, r) {
        var i = {},
          o;
        for (o in t)
          goog.asserts.assert(o.toLowerCase() == o, `Must be lower case`),
            (i[o] = t[o]);
        for (o in n)
          goog.asserts.assert(o.toLowerCase() == o, `Must be lower case`),
            (i[o] = n[o]);
        if (r)
          for (o in r) {
            var s = o.toLowerCase();
            if (s in t)
              throw Error(
                goog.html.SafeHtml.ENABLE_ERROR_MESSAGES
                  ? `Cannot override "` +
                      s +
                      `" attribute, got "` +
                      o +
                      `" with value "` +
                      r[o] +
                      `"`
                  : ``,
              );
            s in n && delete i[s], (i[o] = r[o]);
          }
        return i;
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
      (goog.html.SafeHtml.BR =
        goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
          `<br>`,
          goog.i18n.bidi.Dir.NEUTRAL,
        )),
      (goog.html.uncheckedconversions = {}),
      (goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract =
        function (t, n, r) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(t),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(t),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
              n,
              r || null,
            )
          );
        }),
      (goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract =
        function (t, n) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(t),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(t),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(
              n,
            )
          );
        }),
      (goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract =
        function (t, n) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(t),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(t),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(
              n,
            )
          );
        }),
      (goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract =
        function (t, n) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(t),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(t),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(
              n,
            )
          );
        }),
      (goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract =
        function (t, n) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(t),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(t),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(n)
          );
        }),
      (goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract =
        function (t, n) {
          return (
            goog.asserts.assertString(
              goog.string.Const.unwrap(t),
              `must provide justification`,
            ),
            goog.asserts.assert(
              !goog.string.internal.isEmptyOrWhitespace(
                goog.string.Const.unwrap(t),
              ),
              `must provide non-empty justification`,
            ),
            goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(
              n,
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
      (goog.dom.safe.insertAdjacentHtml = function (t, n, r) {
        t.insertAdjacentHTML(n, goog.html.SafeHtml.unwrapTrustedHTML(r));
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
          var t = document.createElement(`div`),
            n = document.createElement(`div`);
          return (
            n.appendChild(document.createElement(`div`)),
            t.appendChild(n),
            goog.DEBUG && !t.firstChild
              ? !1
              : ((n = t.firstChild.firstChild),
                (t.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(
                  goog.html.SafeHtml.EMPTY,
                )),
                !n.parentElement)
          );
        })),
      (goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function (t, n) {
        if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
          for (; t.lastChild; ) t.removeChild(t.lastChild);
        t.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(n);
      }),
      (goog.dom.safe.setInnerHtml = function (t, n) {
        if (goog.asserts.ENABLE_ASSERTS) {
          var r = t.tagName.toUpperCase();
          if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[r])
            throw Error(
              `goog.dom.safe.setInnerHtml cannot be used to set content of ` +
                t.tagName +
                `.`,
            );
        }
        goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(t, n);
      }),
      (goog.dom.safe.setOuterHtml = function (t, n) {
        t.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(n);
      }),
      (goog.dom.safe.setFormElementAction = function (t, n) {
        (n =
          n instanceof goog.html.SafeUrl
            ? n
            : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (goog.dom.asserts.assertIsHTMLFormElement(t).action =
            goog.html.SafeUrl.unwrap(n));
      }),
      (goog.dom.safe.setButtonFormAction = function (t, n) {
        (n =
          n instanceof goog.html.SafeUrl
            ? n
            : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (goog.dom.asserts.assertIsHTMLButtonElement(t).formAction =
            goog.html.SafeUrl.unwrap(n));
      }),
      (goog.dom.safe.setInputFormAction = function (t, n) {
        (n =
          n instanceof goog.html.SafeUrl
            ? n
            : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (goog.dom.asserts.assertIsHTMLInputElement(t).formAction =
            goog.html.SafeUrl.unwrap(n));
      }),
      (goog.dom.safe.setStyle = function (t, n) {
        t.style.cssText = goog.html.SafeStyle.unwrap(n);
      }),
      (goog.dom.safe.documentWrite = function (t, n) {
        t.write(goog.html.SafeHtml.unwrapTrustedHTML(n));
      }),
      (goog.dom.safe.setAnchorHref = function (t, n) {
        goog.dom.asserts.assertIsHTMLAnchorElement(t),
          (n =
            n instanceof goog.html.SafeUrl
              ? n
              : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (t.href = goog.html.SafeUrl.unwrap(n));
      }),
      (goog.dom.safe.setImageSrc = function (t, n) {
        if (
          (goog.dom.asserts.assertIsHTMLImageElement(t),
          !(n instanceof goog.html.SafeUrl))
        ) {
          var r = /^data:image\//i.test(n);
          n = goog.html.SafeUrl.sanitizeAssertUnchanged(n, r);
        }
        t.src = goog.html.SafeUrl.unwrap(n);
      }),
      (goog.dom.safe.setAudioSrc = function (t, n) {
        if (
          (goog.dom.asserts.assertIsHTMLAudioElement(t),
          !(n instanceof goog.html.SafeUrl))
        ) {
          var r = /^data:audio\//i.test(n);
          n = goog.html.SafeUrl.sanitizeAssertUnchanged(n, r);
        }
        t.src = goog.html.SafeUrl.unwrap(n);
      }),
      (goog.dom.safe.setVideoSrc = function (t, n) {
        if (
          (goog.dom.asserts.assertIsHTMLVideoElement(t),
          !(n instanceof goog.html.SafeUrl))
        ) {
          var r = /^data:video\//i.test(n);
          n = goog.html.SafeUrl.sanitizeAssertUnchanged(n, r);
        }
        t.src = goog.html.SafeUrl.unwrap(n);
      }),
      (goog.dom.safe.setEmbedSrc = function (t, n) {
        goog.dom.asserts.assertIsHTMLEmbedElement(t),
          (t.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(n));
      }),
      (goog.dom.safe.setFrameSrc = function (t, n) {
        goog.dom.asserts.assertIsHTMLFrameElement(t),
          (t.src = goog.html.TrustedResourceUrl.unwrap(n));
      }),
      (goog.dom.safe.setIframeSrc = function (t, n) {
        goog.dom.asserts.assertIsHTMLIFrameElement(t),
          (t.src = goog.html.TrustedResourceUrl.unwrap(n));
      }),
      (goog.dom.safe.setIframeSrcdoc = function (t, n) {
        goog.dom.asserts.assertIsHTMLIFrameElement(t),
          (t.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(n));
      }),
      (goog.dom.safe.setLinkHrefAndRel = function (t, n, r) {
        goog.dom.asserts.assertIsHTMLLinkElement(t),
          (t.rel = r),
          goog.string.internal.caseInsensitiveContains(r, `stylesheet`)
            ? (goog.asserts.assert(
                n instanceof goog.html.TrustedResourceUrl,
                `URL must be TrustedResourceUrl because "rel" contains "stylesheet"`,
              ),
              (t.href = goog.html.TrustedResourceUrl.unwrap(n)))
            : (t.href =
                n instanceof goog.html.TrustedResourceUrl
                  ? goog.html.TrustedResourceUrl.unwrap(n)
                  : n instanceof goog.html.SafeUrl
                    ? goog.html.SafeUrl.unwrap(n)
                    : goog.html.SafeUrl.unwrap(
                        goog.html.SafeUrl.sanitizeAssertUnchanged(n),
                      ));
      }),
      (goog.dom.safe.setObjectData = function (t, n) {
        goog.dom.asserts.assertIsHTMLObjectElement(t),
          (t.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(n));
      }),
      (goog.dom.safe.setScriptSrc = function (t, n) {
        goog.dom.asserts.assertIsHTMLScriptElement(t),
          (t.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(n)),
          (n = goog.getScriptNonce()) && t.setAttribute(`nonce`, n);
      }),
      (goog.dom.safe.setScriptContent = function (t, n) {
        goog.dom.asserts.assertIsHTMLScriptElement(t),
          (t.text = goog.html.SafeScript.unwrapTrustedScript(n)),
          (n = goog.getScriptNonce()) && t.setAttribute(`nonce`, n);
      }),
      (goog.dom.safe.setLocationHref = function (t, n) {
        goog.dom.asserts.assertIsLocation(t),
          (n =
            n instanceof goog.html.SafeUrl
              ? n
              : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (t.href = goog.html.SafeUrl.unwrap(n));
      }),
      (goog.dom.safe.assignLocation = function (t, n) {
        goog.dom.asserts.assertIsLocation(t),
          (n =
            n instanceof goog.html.SafeUrl
              ? n
              : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          t.assign(goog.html.SafeUrl.unwrap(n));
      }),
      (goog.dom.safe.replaceLocation = function (t, n) {
        (n =
          n instanceof goog.html.SafeUrl
            ? n
            : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          t.replace(goog.html.SafeUrl.unwrap(n));
      }),
      (goog.dom.safe.openInWindow = function (t, n, r, i, o) {
        return (
          (t =
            t instanceof goog.html.SafeUrl
              ? t
              : goog.html.SafeUrl.sanitizeAssertUnchanged(t)),
          (n ||= goog.global),
          (r =
            r instanceof goog.string.Const
              ? goog.string.Const.unwrap(r)
              : r || ``),
          n.open(goog.html.SafeUrl.unwrap(t), r, i, o)
        );
      }),
      (goog.dom.safe.parseFromStringHtml = function (t, n) {
        return goog.dom.safe.parseFromString(t, n, `text/html`);
      }),
      (goog.dom.safe.parseFromString = function (t, n, r) {
        return t.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(n), r);
      }),
      (goog.dom.safe.createImageFromBlob = function (t) {
        if (!/^image\/.*/g.test(t.type))
          throw Error(
            `goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.`,
          );
        var n = goog.global.URL.createObjectURL(t);
        return (
          (t = new goog.global.Image()),
          (t.onload = function () {
            goog.global.URL.revokeObjectURL(n);
          }),
          goog.dom.safe.setImageSrc(
            t,
            goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(
              goog.string.Const.from(`Image blob URL.`),
              n,
            ),
          ),
          t
        );
      }),
      (goog.string.DETECT_DOUBLE_ESCAPING = !1),
      (goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1),
      (goog.string.Unicode = { NBSP: `\xA0` }),
      (goog.string.startsWith = goog.string.internal.startsWith),
      (goog.string.endsWith = goog.string.internal.endsWith),
      (goog.string.caseInsensitiveStartsWith =
        goog.string.internal.caseInsensitiveStartsWith),
      (goog.string.caseInsensitiveEndsWith =
        goog.string.internal.caseInsensitiveEndsWith),
      (goog.string.caseInsensitiveEquals =
        goog.string.internal.caseInsensitiveEquals),
      (goog.string.subs = function (t, n) {
        for (
          var r = t.split(`%s`),
            i = ``,
            o = Array.prototype.slice.call(arguments, 1);
          o.length && 1 < r.length;
        )
          i += r.shift() + o.shift();
        return i + r.join(`%s`);
      }),
      (goog.string.collapseWhitespace = function (t) {
        return t.replace(/[\s\xa0]+/g, ` `).replace(/^\s+|\s+$/g, ``);
      }),
      (goog.string.isEmptyOrWhitespace =
        goog.string.internal.isEmptyOrWhitespace),
      (goog.string.isEmptyString = function (t) {
        return t.length == 0;
      }),
      (goog.string.isEmpty = goog.string.isEmptyOrWhitespace),
      (goog.string.isEmptyOrWhitespaceSafe = function (t) {
        return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(t));
      }),
      (goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe),
      (goog.string.isBreakingWhitespace = function (t) {
        return !/[^\t\n\r ]/.test(t);
      }),
      (goog.string.isAlpha = function (t) {
        return !/[^a-zA-Z]/.test(t);
      }),
      (goog.string.isNumeric = function (t) {
        return !/[^0-9]/.test(t);
      }),
      (goog.string.isAlphaNumeric = function (t) {
        return !/[^a-zA-Z0-9]/.test(t);
      }),
      (goog.string.isSpace = function (t) {
        return t == ` `;
      }),
      (goog.string.isUnicodeChar = function (t) {
        return (t.length == 1 && ` ` <= t && `~` >= t) || (`` <= t && `�` >= t);
      }),
      (goog.string.stripNewlines = function (t) {
        return t.replace(/(\r\n|\r|\n)+/g, ` `);
      }),
      (goog.string.canonicalizeNewlines = function (t) {
        return t.replace(
          /(\r\n|\r|\n)/g,
          `
`,
        );
      }),
      (goog.string.normalizeWhitespace = function (t) {
        return t.replace(/\xa0|\s/g, ` `);
      }),
      (goog.string.normalizeSpaces = function (t) {
        return t.replace(/\xa0|[ \t]+/g, ` `);
      }),
      (goog.string.collapseBreakingSpaces = function (t) {
        return t
          .replace(/[\t\r\n ]+/g, ` `)
          .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, ``);
      }),
      (goog.string.trim = goog.string.internal.trim),
      (goog.string.trimLeft = function (t) {
        return t.replace(/^[\s\xa0]+/, ``);
      }),
      (goog.string.trimRight = function (t) {
        return t.replace(/[\s\xa0]+$/, ``);
      }),
      (goog.string.caseInsensitiveCompare =
        goog.string.internal.caseInsensitiveCompare),
      (goog.string.numberAwareCompare_ = function (t, n, r) {
        if (t == n) return 0;
        if (!t) return -1;
        if (!n) return 1;
        for (
          var i = t.toLowerCase().match(r),
            o = n.toLowerCase().match(r),
            s = Math.min(i.length, o.length),
            l = 0;
          l < s;
          l++
        ) {
          r = i[l];
          var u = o[l];
          if (r != u)
            return (
              (t = parseInt(r, 10)),
              !isNaN(t) && ((n = parseInt(u, 10)), !isNaN(n) && t - n)
                ? t - n
                : r < u
                  ? -1
                  : 1
            );
        }
        return i.length == o.length ? (t < n ? -1 : 1) : i.length - o.length;
      }),
      (goog.string.intAwareCompare = function (t, n) {
        return goog.string.numberAwareCompare_(t, n, /\d+|\D+/g);
      }),
      (goog.string.floatAwareCompare = function (t, n) {
        return goog.string.numberAwareCompare_(t, n, /\d+|\.\d+|\D+/g);
      }),
      (goog.string.numerateCompare = goog.string.floatAwareCompare),
      (goog.string.urlEncode = function (t) {
        return encodeURIComponent(String(t));
      }),
      (goog.string.urlDecode = function (t) {
        return decodeURIComponent(t.replace(/\+/g, ` `));
      }),
      (goog.string.newLineToBr = goog.string.internal.newLineToBr),
      (goog.string.htmlEscape = function (t, n) {
        return (
          (t = goog.string.internal.htmlEscape(t, n)),
          goog.string.DETECT_DOUBLE_ESCAPING &&
            (t = t.replace(goog.string.E_RE_, `&#101;`)),
          t
        );
      }),
      (goog.string.E_RE_ = /e/g),
      (goog.string.unescapeEntities = function (t) {
        return goog.string.contains(t, `&`)
          ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING &&
            `document` in goog.global
            ? goog.string.unescapeEntitiesUsingDom_(t)
            : goog.string.unescapePureXmlEntities_(t)
          : t;
      }),
      (goog.string.unescapeEntitiesWithDocument = function (t, n) {
        return goog.string.contains(t, `&`)
          ? goog.string.unescapeEntitiesUsingDom_(t, n)
          : t;
      }),
      (goog.string.unescapeEntitiesUsingDom_ = function (t, n) {
        var r = { "&amp;": `&`, "&lt;": `<`, "&gt;": `>`, "&quot;": `"` },
          i = n
            ? n.createElement(`div`)
            : goog.global.document.createElement(`div`);
        return t.replace(goog.string.HTML_ENTITY_PATTERN_, function (t, n) {
          var o = r[t];
          return (
            o ||
            (n.charAt(0) == `#` &&
              ((n = Number(`0` + n.substr(1))),
              isNaN(n) || (o = String.fromCharCode(n))),
            (o ||=
              (goog.dom.safe.setInnerHtml(
                i,
                goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
                  goog.string.Const.from(`Single HTML entity.`),
                  t + ` `,
                ),
              ),
              i.firstChild.nodeValue.slice(0, -1))),
            (r[t] = o))
          );
        });
      }),
      (goog.string.unescapePureXmlEntities_ = function (t) {
        return t.replace(/&([^;]+);/g, function (t, n) {
          switch (n) {
            case `amp`:
              return `&`;
            case `lt`:
              return `<`;
            case `gt`:
              return `>`;
            case `quot`:
              return `"`;
            default:
              return n.charAt(0) != `#` ||
                ((n = Number(`0` + n.substr(1))), isNaN(n))
                ? t
                : String.fromCharCode(n);
          }
        });
      }),
      (goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g),
      (goog.string.whitespaceEscape = function (t, n) {
        return goog.string.newLineToBr(t.replace(/  /g, ` &#160;`), n);
      }),
      (goog.string.preserveSpaces = function (t) {
        return t.replace(/(^|[\n ]) /g, `$1` + goog.string.Unicode.NBSP);
      }),
      (goog.string.stripQuotes = function (t, n) {
        for (var r = n.length, i = 0; i < r; i++) {
          var o = r == 1 ? n : n.charAt(i);
          if (t.charAt(0) == o && t.charAt(t.length - 1) == o)
            return t.substring(1, t.length - 1);
        }
        return t;
      }),
      (goog.string.truncate = function (t, n, r) {
        return (
          r && (t = goog.string.unescapeEntities(t)),
          t.length > n && (t = t.substring(0, n - 3) + `...`),
          r && (t = goog.string.htmlEscape(t)),
          t
        );
      }),
      (goog.string.truncateMiddle = function (t, n, r, i) {
        if ((r && (t = goog.string.unescapeEntities(t)), i && t.length > n)) {
          i > n && (i = n);
          var o = t.length - i;
          t = t.substring(0, n - i) + `...` + t.substring(o);
        } else
          t.length > n &&
            ((i = Math.floor(n / 2)),
            (o = t.length - i),
            (t = t.substring(0, i + (n % 2)) + `...` + t.substring(o)));
        return r && (t = goog.string.htmlEscape(t)), t;
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
      (goog.string.jsEscapeCache_ = { "'": `\\'` }),
      (goog.string.quote = function (t) {
        t = String(t);
        for (var n = [`"`], r = 0; r < t.length; r++) {
          var i = t.charAt(r),
            o = i.charCodeAt(0);
          n[r + 1] =
            goog.string.specialEscapeChars_[i] ||
            (31 < o && 127 > o ? i : goog.string.escapeChar(i));
        }
        return n.push(`"`), n.join(``);
      }),
      (goog.string.escapeString = function (t) {
        for (var n = [], r = 0; r < t.length; r++)
          n[r] = goog.string.escapeChar(t.charAt(r));
        return n.join(``);
      }),
      (goog.string.escapeChar = function (t) {
        if (t in goog.string.jsEscapeCache_)
          return goog.string.jsEscapeCache_[t];
        if (t in goog.string.specialEscapeChars_)
          return (goog.string.jsEscapeCache_[t] =
            goog.string.specialEscapeChars_[t]);
        var n = t.charCodeAt(0);
        if (31 < n && 127 > n) var r = t;
        else
          256 > n
            ? ((r = `\\x`), (16 > n || 256 < n) && (r += `0`))
            : ((r = `\\u`), 4096 > n && (r += `0`)),
            (r += n.toString(16).toUpperCase());
        return (goog.string.jsEscapeCache_[t] = r);
      }),
      (goog.string.contains = goog.string.internal.contains),
      (goog.string.caseInsensitiveContains =
        goog.string.internal.caseInsensitiveContains),
      (goog.string.countOf = function (t, n) {
        return t && n ? t.split(n).length - 1 : 0;
      }),
      (goog.string.removeAt = function (t, n, r) {
        var i = t;
        return (
          0 <= n &&
            n < t.length &&
            0 < r &&
            (i = t.substr(0, n) + t.substr(n + r, t.length - n - r)),
          i
        );
      }),
      (goog.string.remove = function (t, n) {
        return t.replace(n, ``);
      }),
      (goog.string.removeAll = function (t, n) {
        return (
          (n = new RegExp(goog.string.regExpEscape(n), `g`)), t.replace(n, ``)
        );
      }),
      (goog.string.replaceAll = function (t, n, r) {
        return (
          (n = new RegExp(goog.string.regExpEscape(n), `g`)),
          t.replace(n, r.replace(/\$/g, `$$$$`))
        );
      }),
      (goog.string.regExpEscape = function (t) {
        return String(t)
          .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, `\\$1`)
          .replace(/\x08/g, `\\x08`);
      }),
      (goog.string.repeat = String.prototype.repeat
        ? function (t, n) {
            return t.repeat(n);
          }
        : function (t, n) {
            return Array(n + 1).join(t);
          }),
      (goog.string.padNumber = function (t, n, r) {
        return (
          (t = r === void 0 ? String(t) : t.toFixed(r)),
          (r = t.indexOf(`.`)),
          r == -1 && (r = t.length),
          goog.string.repeat(`0`, Math.max(0, n - r)) + t
        );
      }),
      (goog.string.makeSafe = function (t) {
        return t == null ? `` : String(t);
      }),
      (goog.string.buildString = function (t) {
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
      (goog.string.hashCode = function (t) {
        for (var n = 0, r = 0; r < t.length; ++r)
          n = (31 * n + t.charCodeAt(r)) >>> 0;
        return n;
      }),
      (goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0),
      (goog.string.createUniqueString = function () {
        return `goog_` + goog.string.uniqueStringCounter_++;
      }),
      (goog.string.toNumber = function (t) {
        var n = Number(t);
        return n == 0 && goog.string.isEmptyOrWhitespace(t) ? NaN : n;
      }),
      (goog.string.isLowerCamelCase = function (t) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(t);
      }),
      (goog.string.isUpperCamelCase = function (t) {
        return /^([A-Z][a-z]*)+$/.test(t);
      }),
      (goog.string.toCamelCase = function (t) {
        return String(t).replace(/\-([a-z])/g, function (t, n) {
          return n.toUpperCase();
        });
      }),
      (goog.string.toSelectorCase = function (t) {
        return String(t)
          .replace(/([A-Z])/g, `-$1`)
          .toLowerCase();
      }),
      (goog.string.toTitleCase = function (t, n) {
        return (
          (n = typeof n == `string` ? goog.string.regExpEscape(n) : `\\s`),
          t.replace(
            RegExp(`(^` + (n ? `|[` + n + `]+` : ``) + `)([a-z])`, `g`),
            function (t, n, r) {
              return n + r.toUpperCase();
            },
          )
        );
      }),
      (goog.string.capitalize = function (t) {
        return (
          String(t.charAt(0)).toUpperCase() + String(t.substr(1)).toLowerCase()
        );
      }),
      (goog.string.parseInt = function (t) {
        return (
          isFinite(t) && (t = String(t)),
          typeof t == `string`
            ? /^\s*-?0x/i.test(t)
              ? parseInt(t, 16)
              : parseInt(t, 10)
            : NaN
        );
      }),
      (goog.string.splitLimit = function (t, n, r) {
        t = t.split(n);
        for (var i = []; 0 < r && t.length; ) i.push(t.shift()), r--;
        return t.length && i.push(t.join(n)), i;
      }),
      (goog.string.lastComponent = function (t, n) {
        if (n) typeof n == `string` && (n = [n]);
        else return t;
        for (var r = -1, i = 0; i < n.length; i++)
          if (n[i] != ``) {
            var o = t.lastIndexOf(n[i]);
            o > r && (r = o);
          }
        return r == -1 ? t : t.slice(r + 1);
      }),
      (goog.string.editDistance = function (t, n) {
        var r = [],
          i = [];
        if (t == n) return 0;
        if (!t.length || !n.length) return Math.max(t.length, n.length);
        for (var o = 0; o < n.length + 1; o++) r[o] = o;
        for (o = 0; o < t.length; o++) {
          i[0] = o + 1;
          for (var s = 0; s < n.length; s++)
            i[s + 1] = Math.min(
              i[s] + 1,
              r[s + 1] + 1,
              r[s] + Number(t[o] != n[s]),
            );
          for (s = 0; s < r.length; s++) r[s] = i[s];
        }
        return i[n.length];
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
        var t = goog.labs.userAgent.util.getUserAgent();
        if (t) {
          t = goog.labs.userAgent.util.extractVersionTuples(t);
          var n = goog.labs.userAgent.engine.getEngineTuple_(t);
          if (n)
            return n[0] == `Gecko`
              ? goog.labs.userAgent.engine.getVersionForKey_(t, `Firefox`)
              : n[1];
          t = t[0];
          var r;
          if (t && (r = t[2]) && (r = /Trident\/([^\s;]+)/.exec(r)))
            return r[1];
        }
        return ``;
      }),
      (goog.labs.userAgent.engine.getEngineTuple_ = function (t) {
        if (!goog.labs.userAgent.engine.isEdge()) return t[1];
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          if (r[0] == `Edge`) return r;
        }
      }),
      (goog.labs.userAgent.engine.isVersionOrHigher = function (t) {
        return (
          0 <=
          goog.string.compareVersions(
            goog.labs.userAgent.engine.getVersion(),
            t,
          )
        );
      }),
      (goog.labs.userAgent.engine.getVersionForKey_ = function (t, n) {
        return (
          ((t = goog.array.find(t, function (t) {
            return n == t[0];
          })) &&
            t[1]) ||
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
        var t = goog.labs.userAgent.util.getUserAgent(),
          n = ``;
        return (
          goog.labs.userAgent.platform.isWindows()
            ? ((n = /Windows (?:NT|Phone) ([0-9.]+)/),
              (n = (t = n.exec(t)) ? t[1] : `0.0`))
            : goog.labs.userAgent.platform.isIos()
              ? ((n = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/),
                (n = (t = n.exec(t)) && t[1].replace(/_/g, `.`)))
              : goog.labs.userAgent.platform.isMacintosh()
                ? ((n = /Mac OS X ([0-9_.]+)/),
                  (n = (t = n.exec(t)) ? t[1].replace(/_/g, `.`) : `10`))
                : goog.labs.userAgent.platform.isKaiOS()
                  ? ((n = /(?:KaiOS)\/(\S+)/i), (n = (t = n.exec(t)) && t[1]))
                  : goog.labs.userAgent.platform.isAndroid()
                    ? ((n = /Android\s+([^\);]+)(\)|;)/),
                      (n = (t = n.exec(t)) && t[1]))
                    : goog.labs.userAgent.platform.isChromeOS() &&
                      ((n = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/),
                      (n = (t = n.exec(t)) && t[1])),
          n || ``
        );
      }),
      (goog.labs.userAgent.platform.isVersionOrHigher = function (t) {
        return (
          0 <=
          goog.string.compareVersions(
            goog.labs.userAgent.platform.getVersion(),
            t,
          )
        );
      }),
      (goog.reflect = {}),
      (goog.reflect.object = function (t, n) {
        return n;
      }),
      (goog.reflect.objectProperty = function (t, n) {
        return t;
      }),
      (goog.reflect.sinkValue = function (t) {
        return goog.reflect.sinkValue[` `](t), t;
      }),
      (goog.reflect.sinkValue[` `] = goog.nullFunction),
      (goog.reflect.canAccessProperty = function (t, n) {
        try {
          return goog.reflect.sinkValue(t[n]), !0;
        } catch {}
        return !1;
      }),
      (goog.reflect.cache = function (t, n, r, i) {
        return (
          (i = i ? i(n) : n),
          Object.prototype.hasOwnProperty.call(t, i) ? t[i] : (t[i] = r(n))
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
      (goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_
        ? goog.userAgent.ASSUME_IE
        : goog.labs.userAgent.browser.isIE()),
      (goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
        ? goog.userAgent.ASSUME_EDGE
        : goog.labs.userAgent.engine.isEdge()),
      (goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE),
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
        var t = goog.userAgent.getNavigatorTyped();
        return (t && t.platform) || ``;
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
        var t = goog.userAgent.getNavigatorTyped();
        return !!t && goog.string.contains(t.appVersion || ``, `X11`);
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
        var t = ``,
          n = goog.userAgent.getVersionRegexResult_();
        return (
          n && (t = n ? n[1] : ``),
          goog.userAgent.IE &&
          ((n = goog.userAgent.getDocumentMode_()),
          n != null && n > parseFloat(t))
            ? String(n)
            : t
        );
      }),
      (goog.userAgent.getVersionRegexResult_ = function () {
        var t = goog.userAgent.getUserAgentString();
        if (goog.userAgent.GECKO) return /rv:([^\);]+)(\)|;)/.exec(t);
        if (goog.userAgent.EDGE) return /Edge\/([\d\.]+)/.exec(t);
        if (goog.userAgent.IE)
          return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
        if (goog.userAgent.WEBKIT) return /WebKit\/(\S+)/.exec(t);
        if (goog.userAgent.OPERA) return /(?:Version)[ \/]?(\S+)/.exec(t);
      }),
      (goog.userAgent.getDocumentMode_ = function () {
        var t = goog.global.document;
        return t ? t.documentMode : void 0;
      }),
      (goog.userAgent.VERSION = goog.userAgent.determineVersion_()),
      (goog.userAgent.compare = function (t, n) {
        return goog.string.compareVersions(t, n);
      }),
      (goog.userAgent.isVersionOrHigherCache_ = {}),
      (goog.userAgent.isVersionOrHigher = function (t) {
        return (
          goog.userAgent.ASSUME_ANY_VERSION ||
          goog.reflect.cache(
            goog.userAgent.isVersionOrHigherCache_,
            t,
            function () {
              return (
                0 <= goog.string.compareVersions(goog.userAgent.VERSION, t)
              );
            },
          )
        );
      }),
      (goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher),
      (goog.userAgent.isDocumentModeOrHigher = function (t) {
        return Number(goog.userAgent.DOCUMENT_MODE) >= t;
      }),
      (goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher),
      (goog.userAgent.DOCUMENT_MODE = (function () {
        if (goog.global.document && goog.userAgent.IE)
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
      (goog.userAgent.product.IE = goog.userAgent.IE),
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
      (goog.crypt.base64.isPadding_ = function (t) {
        return goog.string.contains(goog.crypt.base64.paddingChars_, t);
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
          !goog.userAgent.IE &&
          typeof goog.global.atob == `function`)),
      (goog.crypt.base64.encodeByteArray = function (t, n) {
        goog.asserts.assert(
          goog.isArrayLike(t),
          `encodeByteArray takes an array as a parameter`,
        ),
          n === void 0 && (n = goog.crypt.base64.Alphabet.DEFAULT),
          goog.crypt.base64.init_(),
          (n = goog.crypt.base64.byteToCharMaps_[n]);
        for (var r = [], i = 0; i < t.length; i += 3) {
          var o = t[i],
            s = i + 1 < t.length,
            l = s ? t[i + 1] : 0,
            u = i + 2 < t.length,
            p = u ? t[i + 2] : 0,
            m = o >> 2;
          (o = ((o & 3) << 4) | (l >> 4)),
            (l = ((l & 15) << 2) | (p >> 6)),
            (p &= 63),
            u || ((p = 64), s || (l = 64)),
            r.push(n[m], n[o], n[l] || ``, n[p] || ``);
        }
        return r.join(``);
      }),
      (goog.crypt.base64.encodeString = function (t, n) {
        return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !n
          ? goog.global.btoa(t)
          : goog.crypt.base64.encodeByteArray(
              goog.crypt.stringToByteArray(t),
              n,
            );
      }),
      (goog.crypt.base64.decodeString = function (t, n) {
        if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !n)
          return goog.global.atob(t);
        var r = ``;
        return (
          goog.crypt.base64.decodeStringInternal_(t, function (t) {
            r += String.fromCharCode(t);
          }),
          r
        );
      }),
      (goog.crypt.base64.decodeStringToByteArray = function (t, n) {
        var r = [];
        return (
          goog.crypt.base64.decodeStringInternal_(t, function (t) {
            r.push(t);
          }),
          r
        );
      }),
      (goog.crypt.base64.decodeStringToUint8Array = function (t) {
        goog.asserts.assert(
          !goog.userAgent.IE || goog.userAgent.isVersionOrHigher(`10`),
          `Browser does not support typed arrays`,
        );
        var n = t.length,
          r = (3 * n) / 4;
        r % 3
          ? (r = Math.floor(r))
          : goog.crypt.base64.isPadding_(t[n - 1]) &&
            (r = goog.crypt.base64.isPadding_(t[n - 2]) ? r - 2 : r - 1);
        var i = new Uint8Array(r),
          o = 0;
        return (
          goog.crypt.base64.decodeStringInternal_(t, function (t) {
            i[o++] = t;
          }),
          i.subarray(0, o)
        );
      }),
      (goog.crypt.base64.decodeStringInternal_ = function (t, n) {
        function r(n) {
          for (; i < t.length; ) {
            var r = t.charAt(i++),
              o = goog.crypt.base64.charToByteMap_[r];
            if (o != null) return o;
            if (!goog.string.isEmptyOrWhitespace(r))
              throw Error(`Unknown base64 encoding at char: ` + r);
          }
          return n;
        }
        goog.crypt.base64.init_();
        for (var i = 0; ; ) {
          var o = r(-1),
            s = r(0),
            l = r(64),
            u = r(64);
          if (u === 64 && o === -1) break;
          n((o << 2) | (s >> 4)),
            l != 64 &&
              (n(((s << 4) & 240) | (l >> 2)),
              u != 64 && n(((l << 6) & 192) | u));
        }
      }),
      (goog.crypt.base64.init_ = function () {
        if (!goog.crypt.base64.charToByteMap_) {
          goog.crypt.base64.charToByteMap_ = {};
          for (
            var t = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(``),
              n = [`+/=`, `+/`, `-_=`, `-_.`, `-_`],
              r = 0;
            5 > r;
            r++
          ) {
            var i = t.concat(n[r].split(``));
            goog.crypt.base64.byteToCharMaps_[r] = i;
            for (var o = 0; o < i.length; o++) {
              var s = i[o],
                l = goog.crypt.base64.charToByteMap_[s];
              l === void 0
                ? (goog.crypt.base64.charToByteMap_[s] = o)
                : goog.asserts.assert(l === o);
            }
          }
        }
      }),
      (jspb.utils = {}),
      (jspb.utils.split64Low = 0),
      (jspb.utils.split64High = 0),
      (jspb.utils.splitUint64 = function (t) {
        var n = t >>> 0;
        (t = Math.floor((t - n) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
          (jspb.utils.split64Low = n),
          (jspb.utils.split64High = t);
      }),
      (jspb.utils.splitInt64 = function (t) {
        var n = 0 > t;
        t = Math.abs(t);
        var r = t >>> 0;
        (t = Math.floor((t - r) / jspb.BinaryConstants.TWO_TO_32)),
          (t >>>= 0),
          n &&
            ((t = ~t >>> 0),
            (r = (~r >>> 0) + 1),
            4294967295 < r && ((r = 0), t++, 4294967295 < t && (t = 0))),
          (jspb.utils.split64Low = r),
          (jspb.utils.split64High = t);
      }),
      (jspb.utils.splitZigzag64 = function (t) {
        var n = 0 > t;
        (t = 2 * Math.abs(t)),
          jspb.utils.splitUint64(t),
          (t = jspb.utils.split64Low);
        var r = jspb.utils.split64High;
        n &&
          (t == 0
            ? r == 0
              ? (r = t = 4294967295)
              : (r--, (t = 4294967295))
            : t--),
          (jspb.utils.split64Low = t),
          (jspb.utils.split64High = r);
      }),
      (jspb.utils.splitFloat32 = function (t) {
        var n = +(0 > t);
        if (((t = n ? -t : t), t === 0))
          0 < 1 / t
            ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
            : ((jspb.utils.split64High = 0),
              (jspb.utils.split64Low = 2147483648));
        else if (isNaN(t))
          (jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483647);
        else if (t > jspb.BinaryConstants.FLOAT32_MAX)
          (jspb.utils.split64High = 0),
            (jspb.utils.split64Low = ((n << 31) | 2139095040) >>> 0);
        else if (t < jspb.BinaryConstants.FLOAT32_MIN)
          (t = Math.round(t / 2 ** -149)),
            (jspb.utils.split64High = 0),
            (jspb.utils.split64Low = ((n << 31) | t) >>> 0);
        else {
          var r = Math.floor(Math.log(t) / Math.LN2);
          (t *= 2 ** -r),
            (t = Math.round(t * jspb.BinaryConstants.TWO_TO_23)),
            16777216 <= t && ++r,
            (jspb.utils.split64High = 0),
            (jspb.utils.split64Low =
              ((n << 31) | ((r + 127) << 23) | (t & 8388607)) >>> 0);
        }
      }),
      (jspb.utils.splitFloat64 = function (t) {
        var n = +(0 > t);
        if (((t = n ? -t : t), t === 0))
          (jspb.utils.split64High = 0 < 1 / t ? 0 : 2147483648),
            (jspb.utils.split64Low = 0);
        else if (isNaN(t))
          (jspb.utils.split64High = 2147483647),
            (jspb.utils.split64Low = 4294967295);
        else if (t > jspb.BinaryConstants.FLOAT64_MAX)
          (jspb.utils.split64High = ((n << 31) | 2146435072) >>> 0),
            (jspb.utils.split64Low = 0);
        else if (t < jspb.BinaryConstants.FLOAT64_MIN) {
          var r = t / 2 ** -1074;
          (t = r / jspb.BinaryConstants.TWO_TO_32),
            (jspb.utils.split64High = ((n << 31) | t) >>> 0),
            (jspb.utils.split64Low = r >>> 0);
        } else {
          r = t;
          var i = 0;
          if (2 <= r) for (; 2 <= r && 1023 > i; ) i++, (r /= 2);
          else for (; 1 > r && -1022 < i; ) (r *= 2), i--;
          (r = t * 2 ** -i),
            (t = (r * jspb.BinaryConstants.TWO_TO_20) & 1048575),
            (r = (r * jspb.BinaryConstants.TWO_TO_52) >>> 0),
            (jspb.utils.split64High =
              ((n << 31) | ((i + 1023) << 20) | t) >>> 0),
            (jspb.utils.split64Low = r);
        }
      }),
      (jspb.utils.splitHash64 = function (t) {
        var n = t.charCodeAt(0),
          r = t.charCodeAt(1),
          i = t.charCodeAt(2),
          o = t.charCodeAt(3),
          s = t.charCodeAt(4),
          l = t.charCodeAt(5),
          u = t.charCodeAt(6);
        (t = t.charCodeAt(7)),
          (jspb.utils.split64Low =
            (n + (r << 8) + (i << 16) + (o << 24)) >>> 0),
          (jspb.utils.split64High =
            (s + (l << 8) + (u << 16) + (t << 24)) >>> 0);
      }),
      (jspb.utils.joinUint64 = function (t, n) {
        return n * jspb.BinaryConstants.TWO_TO_32 + (t >>> 0);
      }),
      (jspb.utils.joinInt64 = function (t, n) {
        var r = n & 2147483648;
        return (
          r &&
            ((t = (~t + 1) >>> 0),
            (n = ~n >>> 0),
            t == 0 && (n = (n + 1) >>> 0)),
          (t = jspb.utils.joinUint64(t, n)),
          r ? -t : t
        );
      }),
      (jspb.utils.toZigzag64 = function (t, n, r) {
        var i = n >> 31;
        return r((t << 1) ^ i, ((n << 1) | (t >>> 31)) ^ i);
      }),
      (jspb.utils.joinZigzag64 = function (t, n) {
        return jspb.utils.fromZigzag64(t, n, jspb.utils.joinInt64);
      }),
      (jspb.utils.fromZigzag64 = function (t, n, r) {
        var i = -(t & 1);
        return r(((t >>> 1) | (n << 31)) ^ i, (n >>> 1) ^ i);
      }),
      (jspb.utils.joinFloat32 = function (t, n) {
        n = 2 * (t >> 31) + 1;
        var r = (t >>> 23) & 255;
        return (
          (t &= 8388607),
          r == 255
            ? t
              ? NaN
              : (1 / 0) * n
            : r == 0
              ? n * 2 ** -149 * t
              : n * 2 ** (r - 150) * (t + 2 ** 23)
        );
      }),
      (jspb.utils.joinFloat64 = function (t, n) {
        var r = 2 * (n >> 31) + 1,
          i = (n >>> 20) & 2047;
        return (
          (t = jspb.BinaryConstants.TWO_TO_32 * (n & 1048575) + t),
          i == 2047
            ? t
              ? NaN
              : (1 / 0) * r
            : i == 0
              ? r * 2 ** -1074 * t
              : r * 2 ** (i - 1075) * (t + jspb.BinaryConstants.TWO_TO_52)
        );
      }),
      (jspb.utils.joinHash64 = function (t, n) {
        return String.fromCharCode(
          (t >>> 0) & 255,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          (t >>> 24) & 255,
          (n >>> 0) & 255,
          (n >>> 8) & 255,
          (n >>> 16) & 255,
          (n >>> 24) & 255,
        );
      }),
      (jspb.utils.DIGITS = `0123456789abcdef`.split(``)),
      (jspb.utils.ZERO_CHAR_CODE_ = 48),
      (jspb.utils.A_CHAR_CODE_ = 97),
      (jspb.utils.joinUnsignedDecimalString = function (t, n) {
        function r(t, n) {
          return (
            (t = t ? String(t) : ``), n ? `0000000`.slice(t.length) + t : t
          );
        }
        if (2097151 >= n) return `` + jspb.utils.joinUint64(t, n);
        var i = (((t >>> 24) | (n << 8)) >>> 0) & 16777215;
        return (
          (n = (n >> 16) & 65535),
          (t = (t & 16777215) + 6777216 * i + 6710656 * n),
          (i += 8147497 * n),
          (n *= 2),
          1e7 <= t && ((i += Math.floor(t / 1e7)), (t %= 1e7)),
          1e7 <= i && ((n += Math.floor(i / 1e7)), (i %= 1e7)),
          r(n, 0) + r(i, n) + r(t, 1)
        );
      }),
      (jspb.utils.joinSignedDecimalString = function (t, n) {
        var r = n & 2147483648;
        return (
          r && ((t = (~t + 1) >>> 0), (n = (~n + +(t == 0)) >>> 0)),
          (t = jspb.utils.joinUnsignedDecimalString(t, n)),
          r ? `-` + t : t
        );
      }),
      (jspb.utils.hash64ToDecimalString = function (t, n) {
        jspb.utils.splitHash64(t), (t = jspb.utils.split64Low);
        var r = jspb.utils.split64High;
        return n
          ? jspb.utils.joinSignedDecimalString(t, r)
          : jspb.utils.joinUnsignedDecimalString(t, r);
      }),
      (jspb.utils.hash64ArrayToDecimalStrings = function (t, n) {
        for (var r = Array(t.length), i = 0; i < t.length; i++)
          r[i] = jspb.utils.hash64ToDecimalString(t[i], n);
        return r;
      }),
      (jspb.utils.decimalStringToHash64 = function (t) {
        function n(t, n) {
          for (var r = 0; 8 > r && (t !== 1 || 0 < n); r++)
            (n = t * o[r] + n), (o[r] = n & 255), (n >>>= 8);
        }
        function r() {
          for (var t = 0; 8 > t; t++) o[t] = ~o[t] & 255;
        }
        jspb.asserts.assert(0 < t.length);
        var i = !1;
        t[0] === `-` && ((i = !0), (t = t.slice(1)));
        for (var o = [0, 0, 0, 0, 0, 0, 0, 0], s = 0; s < t.length; s++)
          n(10, t.charCodeAt(s) - jspb.utils.ZERO_CHAR_CODE_);
        return i && (r(), n(1, 1)), goog.crypt.byteArrayToString(o);
      }),
      (jspb.utils.splitDecimalString = function (t) {
        jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(t));
      }),
      (jspb.utils.toHexDigit_ = function (t) {
        return String.fromCharCode(
          10 > t
            ? jspb.utils.ZERO_CHAR_CODE_ + t
            : jspb.utils.A_CHAR_CODE_ - 10 + t,
        );
      }),
      (jspb.utils.fromHexCharCode_ = function (t) {
        return t >= jspb.utils.A_CHAR_CODE_
          ? t - jspb.utils.A_CHAR_CODE_ + 10
          : t - jspb.utils.ZERO_CHAR_CODE_;
      }),
      (jspb.utils.hash64ToHexString = function (t) {
        var n = Array(18);
        (n[0] = `0`), (n[1] = `x`);
        for (var r = 0; 8 > r; r++) {
          var i = t.charCodeAt(7 - r);
          (n[2 * r + 2] = jspb.utils.toHexDigit_(i >> 4)),
            (n[2 * r + 3] = jspb.utils.toHexDigit_(i & 15));
        }
        return n.join(``);
      }),
      (jspb.utils.hexStringToHash64 = function (t) {
        (t = t.toLowerCase()),
          jspb.asserts.assert(t.length == 18),
          jspb.asserts.assert(t[0] == `0`),
          jspb.asserts.assert(t[1] == `x`);
        for (var n = ``, r = 0; 8 > r; r++) {
          var i = jspb.utils.fromHexCharCode_(t.charCodeAt(2 * r + 2)),
            o = jspb.utils.fromHexCharCode_(t.charCodeAt(2 * r + 3));
          n = String.fromCharCode(16 * i + o) + n;
        }
        return n;
      }),
      (jspb.utils.hash64ToNumber = function (t, n) {
        jspb.utils.splitHash64(t), (t = jspb.utils.split64Low);
        var r = jspb.utils.split64High;
        return n ? jspb.utils.joinInt64(t, r) : jspb.utils.joinUint64(t, r);
      }),
      (jspb.utils.numberToHash64 = function (t) {
        return (
          jspb.utils.splitInt64(t),
          jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
        );
      }),
      (jspb.utils.countVarints = function (t, n, r) {
        for (var i = 0, o = n; o < r; o++) i += t[o] >> 7;
        return r - n - i;
      }),
      (jspb.utils.countVarintFields = function (t, n, r, i) {
        var o = 0;
        if (((i = 8 * i + jspb.BinaryConstants.WireType.VARINT), 128 > i))
          for (; n < r && t[n++] == i; )
            for (o++; ; ) {
              var s = t[n++];
              if (!(s & 128)) break;
            }
        else
          for (; n < r; ) {
            for (s = i; 128 < s; ) {
              if (t[n] != ((s & 127) | 128)) return o;
              n++, (s >>= 7);
            }
            if (t[n++] != s) break;
            for (o++; (s = t[n++]), s & 128; );
          }
        return o;
      }),
      (jspb.utils.countFixedFields_ = function (t, n, r, i, o) {
        var s = 0;
        if (128 > i) for (; n < r && t[n++] == i; ) s++, (n += o);
        else
          for (; n < r; ) {
            for (var l = i; 128 < l; ) {
              if (t[n++] != ((l & 127) | 128)) return s;
              l >>= 7;
            }
            if (t[n++] != l) break;
            s++, (n += o);
          }
        return s;
      }),
      (jspb.utils.countFixed32Fields = function (t, n, r, i) {
        return jspb.utils.countFixedFields_(
          t,
          n,
          r,
          8 * i + jspb.BinaryConstants.WireType.FIXED32,
          4,
        );
      }),
      (jspb.utils.countFixed64Fields = function (t, n, r, i) {
        return jspb.utils.countFixedFields_(
          t,
          n,
          r,
          8 * i + jspb.BinaryConstants.WireType.FIXED64,
          8,
        );
      }),
      (jspb.utils.countDelimitedFields = function (t, n, r, i) {
        var o = 0;
        for (i = 8 * i + jspb.BinaryConstants.WireType.DELIMITED; n < r; ) {
          for (var s = i; 128 < s; ) {
            if (t[n++] != ((s & 127) | 128)) return o;
            s >>= 7;
          }
          if (t[n++] != s) break;
          o++;
          for (
            var l = 0, u = 1;
            (s = t[n++]), (l += (s & 127) * u), (u *= 128), s & 128;
          );
          n += l;
        }
        return o;
      }),
      (jspb.utils.debugBytesToTextFormat = function (t) {
        var n = `"`;
        if (t) {
          t = jspb.utils.byteSourceToUint8Array(t);
          for (var r = 0; r < t.length; r++)
            (n += `\\x`), 16 > t[r] && (n += `0`), (n += t[r].toString(16));
        }
        return n + `"`;
      }),
      (jspb.utils.debugScalarToTextFormat = function (t) {
        return typeof t == `string` ? goog.string.quote(t) : t.toString();
      }),
      (jspb.utils.stringToByteArray = function (t) {
        for (var n = new Uint8Array(t.length), r = 0; r < t.length; r++) {
          var i = t.charCodeAt(r);
          if (255 < i)
            throw Error(
              `Conversion error: string contains codepoint outside of byte range`,
            );
          n[r] = i;
        }
        return n;
      }),
      (jspb.utils.byteSourceToUint8Array = function (t) {
        return t.constructor === Uint8Array
          ? t
          : t.constructor === ArrayBuffer || t.constructor === Array
            ? new Uint8Array(t)
            : t.constructor === String
              ? goog.crypt.base64.decodeStringToUint8Array(t)
              : t instanceof Uint8Array
                ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                : (jspb.asserts.fail(`Type not convertible to Uint8Array.`),
                  new Uint8Array());
      }),
      (jspb.BinaryDecoder = function (t, n, r) {
        (this.bytes_ = null),
          (this.cursor_ = this.end_ = this.start_ = 0),
          (this.error_ = !1),
          t && this.setBlock(t, n, r);
      }),
      (jspb.BinaryDecoder.instanceCache_ = []),
      (jspb.BinaryDecoder.alloc = function (t, n, r) {
        if (jspb.BinaryDecoder.instanceCache_.length) {
          var i = jspb.BinaryDecoder.instanceCache_.pop();
          return t && i.setBlock(t, n, r), i;
        }
        return new jspb.BinaryDecoder(t, n, r);
      }),
      (jspb.BinaryDecoder.prototype.free = function () {
        this.clear(),
          100 > jspb.BinaryDecoder.instanceCache_.length &&
            jspb.BinaryDecoder.instanceCache_.push(this);
      }),
      (jspb.BinaryDecoder.prototype.clone = function () {
        return jspb.BinaryDecoder.alloc(
          this.bytes_,
          this.start_,
          this.end_ - this.start_,
        );
      }),
      (jspb.BinaryDecoder.prototype.clear = function () {
        (this.bytes_ = null),
          (this.cursor_ = this.end_ = this.start_ = 0),
          (this.error_ = !1);
      }),
      (jspb.BinaryDecoder.prototype.getBuffer = function () {
        return this.bytes_;
      }),
      (jspb.BinaryDecoder.prototype.setBlock = function (t, n, r) {
        (this.bytes_ = jspb.utils.byteSourceToUint8Array(t)),
          (this.start_ = n === void 0 ? 0 : n),
          (this.end_ = r === void 0 ? this.bytes_.length : this.start_ + r),
          (this.cursor_ = this.start_);
      }),
      (jspb.BinaryDecoder.prototype.getEnd = function () {
        return this.end_;
      }),
      (jspb.BinaryDecoder.prototype.setEnd = function (t) {
        this.end_ = t;
      }),
      (jspb.BinaryDecoder.prototype.reset = function () {
        this.cursor_ = this.start_;
      }),
      (jspb.BinaryDecoder.prototype.getCursor = function () {
        return this.cursor_;
      }),
      (jspb.BinaryDecoder.prototype.setCursor = function (t) {
        this.cursor_ = t;
      }),
      (jspb.BinaryDecoder.prototype.advance = function (t) {
        (this.cursor_ += t), jspb.asserts.assert(this.cursor_ <= this.end_);
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
      (jspb.BinaryDecoder.prototype.readSplitVarint64 = function (t) {
        for (var n = 128, r = 0, i = 0, o = 0; 4 > o && 128 <= n; o++)
          (n = this.bytes_[this.cursor_++]), (r |= (n & 127) << (7 * o));
        if (
          (128 <= n &&
            ((n = this.bytes_[this.cursor_++]),
            (r |= (n & 127) << 28),
            (i |= (n & 127) >> 4)),
          128 <= n)
        )
          for (o = 0; 5 > o && 128 <= n; o++)
            (n = this.bytes_[this.cursor_++]), (i |= (n & 127) << (7 * o + 3));
        if (128 > n) return t(r >>> 0, i >>> 0);
        jspb.asserts.fail(`Failed to read varint, encoding is invalid.`),
          (this.error_ = !0);
      }),
      (jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function (t) {
        return this.readSplitVarint64(function (n, r) {
          return jspb.utils.fromZigzag64(n, r, t);
        });
      }),
      (jspb.BinaryDecoder.prototype.readSplitFixed64 = function (t) {
        var n = this.bytes_,
          r = this.cursor_;
        this.cursor_ += 8;
        for (var i = 0, o = 0, s = r + 7; s >= r; s--)
          (i = (i << 8) | n[s]), (o = (o << 8) | n[s + 4]);
        return t(i, o);
      }),
      (jspb.BinaryDecoder.prototype.skipVarint = function () {
        for (; this.bytes_[this.cursor_] & 128; ) this.cursor_++;
        this.cursor_++;
      }),
      (jspb.BinaryDecoder.prototype.unskipVarint = function (t) {
        for (; 128 < t; ) this.cursor_--, (t >>>= 7);
        this.cursor_--;
      }),
      (jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
        var t = this.bytes_,
          n = t[this.cursor_ + 0],
          r = n & 127;
        return 128 > n
          ? ((this.cursor_ += 1),
            jspb.asserts.assert(this.cursor_ <= this.end_),
            r)
          : ((n = t[this.cursor_ + 1]),
            (r |= (n & 127) << 7),
            128 > n
              ? ((this.cursor_ += 2),
                jspb.asserts.assert(this.cursor_ <= this.end_),
                r)
              : ((n = t[this.cursor_ + 2]),
                (r |= (n & 127) << 14),
                128 > n
                  ? ((this.cursor_ += 3),
                    jspb.asserts.assert(this.cursor_ <= this.end_),
                    r)
                  : ((n = t[this.cursor_ + 3]),
                    (r |= (n & 127) << 21),
                    128 > n
                      ? ((this.cursor_ += 4),
                        jspb.asserts.assert(this.cursor_ <= this.end_),
                        r)
                      : ((n = t[this.cursor_ + 4]),
                        (r |= (n & 15) << 28),
                        128 > n
                          ? ((this.cursor_ += 5),
                            jspb.asserts.assert(this.cursor_ <= this.end_),
                            r >>> 0)
                          : ((this.cursor_ += 5),
                            128 <= t[this.cursor_++] &&
                              128 <= t[this.cursor_++] &&
                              128 <= t[this.cursor_++] &&
                              128 <= t[this.cursor_++] &&
                              128 <= t[this.cursor_++] &&
                              jspb.asserts.assert(!1),
                            jspb.asserts.assert(this.cursor_ <= this.end_),
                            r)))));
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
        var t = this.readUnsignedVarint32();
        return (t >>> 1) ^ -(t & 1);
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
        var t = this.bytes_[this.cursor_ + 0];
        return (
          (this.cursor_ += 1), jspb.asserts.assert(this.cursor_ <= this.end_), t
        );
      }),
      (jspb.BinaryDecoder.prototype.readUint16 = function () {
        var t = this.bytes_[this.cursor_ + 0],
          n = this.bytes_[this.cursor_ + 1];
        return (
          (this.cursor_ += 2),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          t | 0 | (n << 8)
        );
      }),
      (jspb.BinaryDecoder.prototype.readUint32 = function () {
        var t = this.bytes_[this.cursor_ + 0],
          n = this.bytes_[this.cursor_ + 1],
          r = this.bytes_[this.cursor_ + 2],
          i = this.bytes_[this.cursor_ + 3];
        return (
          (this.cursor_ += 4),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          (t | 0 | (n << 8) | (r << 16) | (i << 24)) >>> 0
        );
      }),
      (jspb.BinaryDecoder.prototype.readUint64 = function () {
        var t = this.readUint32(),
          n = this.readUint32();
        return jspb.utils.joinUint64(t, n);
      }),
      (jspb.BinaryDecoder.prototype.readUint64String = function () {
        var t = this.readUint32(),
          n = this.readUint32();
        return jspb.utils.joinUnsignedDecimalString(t, n);
      }),
      (jspb.BinaryDecoder.prototype.readInt8 = function () {
        var t = this.bytes_[this.cursor_ + 0];
        return (
          (this.cursor_ += 1),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          (t << 24) >> 24
        );
      }),
      (jspb.BinaryDecoder.prototype.readInt16 = function () {
        var t = this.bytes_[this.cursor_ + 0],
          n = this.bytes_[this.cursor_ + 1];
        return (
          (this.cursor_ += 2),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          ((t | 0 | (n << 8)) << 16) >> 16
        );
      }),
      (jspb.BinaryDecoder.prototype.readInt32 = function () {
        var t = this.bytes_[this.cursor_ + 0],
          n = this.bytes_[this.cursor_ + 1],
          r = this.bytes_[this.cursor_ + 2],
          i = this.bytes_[this.cursor_ + 3];
        return (
          (this.cursor_ += 4),
          jspb.asserts.assert(this.cursor_ <= this.end_),
          t | 0 | (n << 8) | (r << 16) | (i << 24)
        );
      }),
      (jspb.BinaryDecoder.prototype.readInt64 = function () {
        var t = this.readUint32(),
          n = this.readUint32();
        return jspb.utils.joinInt64(t, n);
      }),
      (jspb.BinaryDecoder.prototype.readInt64String = function () {
        var t = this.readUint32(),
          n = this.readUint32();
        return jspb.utils.joinSignedDecimalString(t, n);
      }),
      (jspb.BinaryDecoder.prototype.readFloat = function () {
        var t = this.readUint32();
        return jspb.utils.joinFloat32(t, 0);
      }),
      (jspb.BinaryDecoder.prototype.readDouble = function () {
        var t = this.readUint32(),
          n = this.readUint32();
        return jspb.utils.joinFloat64(t, n);
      }),
      (jspb.BinaryDecoder.prototype.readBool = function () {
        return !!this.bytes_[this.cursor_++];
      }),
      (jspb.BinaryDecoder.prototype.readEnum = function () {
        return this.readSignedVarint32();
      }),
      (jspb.BinaryDecoder.prototype.readString = function (t) {
        for (
          var n = this.bytes_, r = this.cursor_, i = r + t, o = [], s = ``;
          r < i;
        ) {
          var l = n[r++];
          if (l < 128) o.push(l);
          else if (l < 192) continue;
          else if (l < 224) {
            if (i - r < 1) break;
            var u = n[r++];
            o.push(((l & 31) << 6) | (u & 63));
          } else if (l < 240) {
            if (i - r < 2) break;
            var u = n[r++],
              p = n[r++];
            o.push(((l & 15) << 12) | ((u & 63) << 6) | (p & 63));
          } else if (l < 248) {
            if (i - r < 3) break;
            var u = n[r++],
              p = n[r++],
              m = n[r++],
              h =
                ((l & 7) << 18) | ((u & 63) << 12) | ((p & 63) << 6) | (m & 63);
            h -= 65536;
            var g = (h & 1023) + 56320,
              _ = ((h >> 10) & 1023) + 55296;
            o.push(_, g);
          }
          o.length >= 8192 &&
            ((s += String.fromCharCode.apply(null, o)), (o.length = 0));
        }
        return (s += goog.crypt.byteArrayToString(o)), (this.cursor_ = i), s;
      }),
      (jspb.BinaryDecoder.prototype.readStringWithLength = function () {
        var t = this.readUnsignedVarint32();
        return this.readString(t);
      }),
      (jspb.BinaryDecoder.prototype.readBytes = function (t) {
        if (0 > t || this.cursor_ + t > this.bytes_.length)
          return (
            (this.error_ = !0),
            jspb.asserts.fail(`Invalid byte length!`),
            new Uint8Array()
          );
        var n = this.bytes_.subarray(this.cursor_, this.cursor_ + t);
        return (
          (this.cursor_ += t), jspb.asserts.assert(this.cursor_ <= this.end_), n
        );
      }),
      (jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
        return this.readSplitVarint64(jspb.utils.joinHash64);
      }),
      (jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
        var t = this.bytes_,
          n = this.cursor_,
          r = t[n + 0],
          i = t[n + 1],
          o = t[n + 2],
          s = t[n + 3],
          l = t[n + 4],
          u = t[n + 5],
          p = t[n + 6];
        return (
          (t = t[n + 7]),
          (this.cursor_ += 8),
          String.fromCharCode(r, i, o, s, l, u, p, t)
        );
      }),
      (jspb.BinaryReader = function (t, n, r) {
        (this.decoder_ = jspb.BinaryDecoder.alloc(t, n, r)),
          (this.fieldCursor_ = this.decoder_.getCursor()),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
          (this.error_ = !1),
          (this.readCallbacks_ = null);
      }),
      (jspb.BinaryReader.instanceCache_ = []),
      (jspb.BinaryReader.alloc = function (t, n, r) {
        if (jspb.BinaryReader.instanceCache_.length) {
          var i = jspb.BinaryReader.instanceCache_.pop();
          return t && i.decoder_.setBlock(t, n, r), i;
        }
        return new jspb.BinaryReader(t, n, r);
      }),
      (jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc),
      (jspb.BinaryReader.prototype.free = function () {
        this.decoder_.clear(),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
          (this.error_ = !1),
          (this.readCallbacks_ = null),
          100 > jspb.BinaryReader.instanceCache_.length &&
            jspb.BinaryReader.instanceCache_.push(this);
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
      (jspb.BinaryReader.prototype.setBlock = function (t, n, r) {
        this.decoder_.setBlock(t, n, r),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
      }),
      (jspb.BinaryReader.prototype.reset = function () {
        this.decoder_.reset(),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
      }),
      (jspb.BinaryReader.prototype.advance = function (t) {
        this.decoder_.advance(t);
      }),
      (jspb.BinaryReader.prototype.nextField = function () {
        if (this.decoder_.atEnd()) return !1;
        if (this.getError())
          return jspb.asserts.fail(`Decoder hit an error`), !1;
        this.fieldCursor_ = this.decoder_.getCursor();
        var t = this.decoder_.readUnsignedVarint32(),
          n = t >>> 3;
        return (
          (t &= 7),
          t != jspb.BinaryConstants.WireType.VARINT &&
          t != jspb.BinaryConstants.WireType.FIXED32 &&
          t != jspb.BinaryConstants.WireType.FIXED64 &&
          t != jspb.BinaryConstants.WireType.DELIMITED &&
          t != jspb.BinaryConstants.WireType.START_GROUP &&
          t != jspb.BinaryConstants.WireType.END_GROUP
            ? (jspb.asserts.fail(
                `Invalid wire type: %s (at position %s)`,
                t,
                this.fieldCursor_,
              ),
              (this.error_ = !0),
              !1)
            : ((this.nextField_ = n), (this.nextWireType_ = t), !0)
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
        var t = this.nextField_;
        for (
          this.unskipHeader();
          this.nextField() && this.getFieldNumber() == t;
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
          jspb.asserts.fail(`Invalid wire type for skipDelimitedField`),
            this.skipField();
        else {
          var t = this.decoder_.readUnsignedVarint32();
          this.decoder_.advance(t);
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
        var t = this.nextField_;
        do {
          if (!this.nextField()) {
            jspb.asserts.fail(`Unmatched start-group tag: stream EOF`),
              (this.error_ = !0);
            break;
          }
          if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
            this.nextField_ != t &&
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
      (jspb.BinaryReader.prototype.registerReadCallback = function (t, n) {
        this.readCallbacks_ === null && (this.readCallbacks_ = {}),
          jspb.asserts.assert(!this.readCallbacks_[t]),
          (this.readCallbacks_[t] = n);
      }),
      (jspb.BinaryReader.prototype.runReadCallback = function (t) {
        return (
          jspb.asserts.assert(this.readCallbacks_ !== null),
          (t = this.readCallbacks_[t]),
          jspb.asserts.assert(t),
          t(this)
        );
      }),
      (jspb.BinaryReader.prototype.readAny = function (t) {
        this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(t);
        var n = jspb.BinaryConstants.FieldType;
        switch (t) {
          case n.DOUBLE:
            return this.readDouble();
          case n.FLOAT:
            return this.readFloat();
          case n.INT64:
            return this.readInt64();
          case n.UINT64:
            return this.readUint64();
          case n.INT32:
            return this.readInt32();
          case n.FIXED64:
            return this.readFixed64();
          case n.FIXED32:
            return this.readFixed32();
          case n.BOOL:
            return this.readBool();
          case n.STRING:
            return this.readString();
          case n.GROUP:
            jspb.asserts.fail(`Group field type not supported in readAny()`);
          case n.MESSAGE:
            jspb.asserts.fail(`Message field type not supported in readAny()`);
          case n.BYTES:
            return this.readBytes();
          case n.UINT32:
            return this.readUint32();
          case n.ENUM:
            return this.readEnum();
          case n.SFIXED32:
            return this.readSfixed32();
          case n.SFIXED64:
            return this.readSfixed64();
          case n.SINT32:
            return this.readSint32();
          case n.SINT64:
            return this.readSint64();
          case n.FHASH64:
            return this.readFixedHash64();
          case n.VHASH64:
            return this.readVarintHash64();
          default:
            jspb.asserts.fail(`Invalid field type in readAny()`);
        }
        return 0;
      }),
      (jspb.BinaryReader.prototype.readMessage = function (t, n) {
        jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
        );
        var r = this.decoder_.getEnd(),
          i = this.decoder_.readUnsignedVarint32();
        (i = this.decoder_.getCursor() + i),
          this.decoder_.setEnd(i),
          n(t, this),
          this.decoder_.setCursor(i),
          this.decoder_.setEnd(r);
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readMessage`,
        jspb.BinaryReader.prototype.readMessage,
      ),
      (jspb.BinaryReader.prototype.readGroup = function (t, n, r) {
        jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP,
        ),
          jspb.asserts.assert(this.nextField_ == t),
          r(n, this),
          this.error_ ||
            this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP ||
            (jspb.asserts.fail(
              `Group submessage did not end with an END_GROUP tag`,
            ),
            (this.error_ = !0));
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
        var t = this.decoder_.readUnsignedVarint32(),
          n = this.decoder_.getCursor(),
          r = n + t;
        return (
          (t = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), n, t)),
          this.decoder_.setCursor(r),
          t
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
        var t = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readString(t);
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
        var t = this.decoder_.readUnsignedVarint32();
        return this.decoder_.readBytes(t);
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
      (jspb.BinaryReader.prototype.readSplitVarint64 = function (t) {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSplitVarint64(t)
        );
      }),
      (jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function (t) {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT,
          ),
          this.decoder_.readSplitVarint64(function (n, r) {
            return jspb.utils.fromZigzag64(n, r, t);
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
      (jspb.BinaryReader.prototype.readSplitFixed64 = function (t) {
        return (
          jspb.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64,
          ),
          this.decoder_.readSplitFixed64(t)
        );
      }),
      (jspb.BinaryReader.prototype.readPackedField_ = function (t) {
        jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED,
        );
        var n = this.decoder_.readUnsignedVarint32();
        n = this.decoder_.getCursor() + n;
        for (var r = []; this.decoder_.getCursor() < n; )
          r.push(t.call(this.decoder_));
        return r;
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
        var t = this.buffer_;
        return (this.buffer_ = []), t;
      }),
      (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (t, n) {
        for (
          jspb.asserts.assert(t == Math.floor(t)),
            jspb.asserts.assert(n == Math.floor(n)),
            jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_32);
          0 < n || 127 < t;
        )
          this.buffer_.push((t & 127) | 128),
            (t = ((t >>> 7) | (n << 25)) >>> 0),
            (n >>>= 7);
        this.buffer_.push(t);
      }),
      (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (t, n) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(n == Math.floor(n)),
          jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
          jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_32),
          this.writeUint32(t),
          this.writeUint32(n);
      }),
      (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (t) {
        for (
          jspb.asserts.assert(t == Math.floor(t)),
            jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32);
          127 < t;
        )
          this.buffer_.push((t & 127) | 128), (t >>>= 7);
        this.buffer_.push(t);
      }),
      (jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (t) {
        if (
          (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_31 &&
              t < jspb.BinaryConstants.TWO_TO_31,
          ),
          0 <= t)
        )
          this.writeUnsignedVarint32(t);
        else {
          for (var n = 0; 9 > n; n++)
            this.buffer_.push((t & 127) | 128), (t >>= 7);
          this.buffer_.push(1);
        }
      }),
      (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
          jspb.utils.splitInt64(t),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          );
      }),
      (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_63 &&
              t < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitInt64(t),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          );
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_31 &&
              t < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeUnsignedVarint32(((t << 1) ^ (t >> 31)) >>> 0);
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_63 &&
              t < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitZigzag64(t),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          );
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (t) {
        this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (t) {
        var n = this;
        jspb.utils.splitHash64(t),
          jspb.utils.toZigzag64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
            function (t, r) {
              n.writeSplitVarint64(t >>> 0, r >>> 0);
            },
          );
      }),
      (jspb.BinaryEncoder.prototype.writeUint8 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && 256 > t),
          this.buffer_.push((t >>> 0) & 255);
      }),
      (jspb.BinaryEncoder.prototype.writeUint16 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && 65536 > t),
          this.buffer_.push((t >>> 0) & 255),
          this.buffer_.push((t >>> 8) & 255);
      }),
      (jspb.BinaryEncoder.prototype.writeUint32 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
          this.buffer_.push((t >>> 0) & 255),
          this.buffer_.push((t >>> 8) & 255),
          this.buffer_.push((t >>> 16) & 255),
          this.buffer_.push((t >>> 24) & 255);
      }),
      (jspb.BinaryEncoder.prototype.writeUint64 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
          jspb.utils.splitUint64(t),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High);
      }),
      (jspb.BinaryEncoder.prototype.writeInt8 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(-128 <= t && 128 > t),
          this.buffer_.push((t >>> 0) & 255);
      }),
      (jspb.BinaryEncoder.prototype.writeInt16 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(-32768 <= t && 32768 > t),
          this.buffer_.push((t >>> 0) & 255),
          this.buffer_.push((t >>> 8) & 255);
      }),
      (jspb.BinaryEncoder.prototype.writeInt32 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_31 &&
              t < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.buffer_.push((t >>> 0) & 255),
          this.buffer_.push((t >>> 8) & 255),
          this.buffer_.push((t >>> 16) & 255),
          this.buffer_.push((t >>> 24) & 255);
      }),
      (jspb.BinaryEncoder.prototype.writeInt64 = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_63 &&
              t < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitInt64(t),
          this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      }),
      (jspb.BinaryEncoder.prototype.writeInt64String = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            +t >= -jspb.BinaryConstants.TWO_TO_63 &&
              +t < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(t)),
          this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
      }),
      (jspb.BinaryEncoder.prototype.writeFloat = function (t) {
        jspb.asserts.assert(
          t === 1 / 0 ||
            t === -1 / 0 ||
            isNaN(t) ||
            (t >= -jspb.BinaryConstants.FLOAT32_MAX &&
              t <= jspb.BinaryConstants.FLOAT32_MAX),
        ),
          jspb.utils.splitFloat32(t),
          this.writeUint32(jspb.utils.split64Low);
      }),
      (jspb.BinaryEncoder.prototype.writeDouble = function (t) {
        jspb.asserts.assert(
          t === 1 / 0 ||
            t === -1 / 0 ||
            isNaN(t) ||
            (t >= -jspb.BinaryConstants.FLOAT64_MAX &&
              t <= jspb.BinaryConstants.FLOAT64_MAX),
        ),
          jspb.utils.splitFloat64(t),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High);
      }),
      (jspb.BinaryEncoder.prototype.writeBool = function (t) {
        jspb.asserts.assert(typeof t == `boolean` || typeof t == `number`),
          this.buffer_.push(+!!t);
      }),
      (jspb.BinaryEncoder.prototype.writeEnum = function (t) {
        jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_31 &&
              t < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeSignedVarint32(t);
      }),
      (jspb.BinaryEncoder.prototype.writeBytes = function (t) {
        this.buffer_.push.apply(this.buffer_, t);
      }),
      (jspb.BinaryEncoder.prototype.writeVarintHash64 = function (t) {
        jspb.utils.splitHash64(t),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          );
      }),
      (jspb.BinaryEncoder.prototype.writeFixedHash64 = function (t) {
        jspb.utils.splitHash64(t),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High);
      }),
      (jspb.BinaryEncoder.prototype.writeString = function (t) {
        var n = this.buffer_.length;
        jspb.asserts.assertString(t);
        for (var r = 0; r < t.length; r++) {
          var i = t.charCodeAt(r);
          if (128 > i) this.buffer_.push(i);
          else if (2048 > i)
            this.buffer_.push((i >> 6) | 192),
              this.buffer_.push((i & 63) | 128);
          else if (65536 > i) {
            if (55296 <= i && 56319 >= i && r + 1 < t.length) {
              var o = t.charCodeAt(r + 1);
              56320 <= o &&
                57343 >= o &&
                ((i = 1024 * (i - 55296) + o - 56320 + 65536),
                this.buffer_.push((i >> 18) | 240),
                this.buffer_.push(((i >> 12) & 63) | 128),
                this.buffer_.push(((i >> 6) & 63) | 128),
                this.buffer_.push((i & 63) | 128),
                r++);
            } else
              this.buffer_.push((i >> 12) | 224),
                this.buffer_.push(((i >> 6) & 63) | 128),
                this.buffer_.push((i & 63) | 128);
          }
        }
        return this.buffer_.length - n;
      }),
      (jspb.arith = {}),
      (jspb.arith.UInt64 = function (t, n) {
        (this.lo = t), (this.hi = n);
      }),
      (jspb.arith.UInt64.prototype.cmp = function (t) {
        return this.hi < t.hi || (this.hi == t.hi && this.lo < t.lo)
          ? -1
          : this.hi == t.hi && this.lo == t.lo
            ? 0
            : 1;
      }),
      (jspb.arith.UInt64.prototype.rightShift = function () {
        return new jspb.arith.UInt64(
          ((this.lo >>> 1) | ((this.hi & 1) << 31)) >>> 0,
          (this.hi >>> 1) >>> 0,
        );
      }),
      (jspb.arith.UInt64.prototype.leftShift = function () {
        return new jspb.arith.UInt64(
          (this.lo << 1) >>> 0,
          ((this.hi << 1) | (this.lo >>> 31)) >>> 0,
        );
      }),
      (jspb.arith.UInt64.prototype.msb = function () {
        return !!(this.hi & 2147483648);
      }),
      (jspb.arith.UInt64.prototype.lsb = function () {
        return !!(this.lo & 1);
      }),
      (jspb.arith.UInt64.prototype.zero = function () {
        return this.lo == 0 && this.hi == 0;
      }),
      (jspb.arith.UInt64.prototype.add = function (t) {
        return new jspb.arith.UInt64(
          (((this.lo + t.lo) | 0) >>> 0) >>> 0,
          ((((this.hi + t.hi) | 0) >>> 0) + +(4294967296 <= this.lo + t.lo)) >>>
            0,
        );
      }),
      (jspb.arith.UInt64.prototype.sub = function (t) {
        return new jspb.arith.UInt64(
          (((this.lo - t.lo) | 0) >>> 0) >>> 0,
          ((((this.hi - t.hi) | 0) >>> 0) - (0 > this.lo - t.lo)) >>> 0,
        );
      }),
      (jspb.arith.UInt64.mul32x32 = function (t, n) {
        var r = t & 65535;
        t >>>= 16;
        var i = n & 65535,
          o = n >>> 16;
        for (
          n = r * i + 65536 * ((r * o) & 65535) + 65536 * ((t * i) & 65535),
            r = t * o + ((r * o) >>> 16) + ((t * i) >>> 16);
          4294967296 <= n;
        )
          (n -= 4294967296), (r += 1);
        return new jspb.arith.UInt64(n >>> 0, r >>> 0);
      }),
      (jspb.arith.UInt64.prototype.mul = function (t) {
        var n = jspb.arith.UInt64.mul32x32(this.lo, t);
        return (
          (t = jspb.arith.UInt64.mul32x32(this.hi, t)),
          (t.hi = t.lo),
          (t.lo = 0),
          n.add(t)
        );
      }),
      (jspb.arith.UInt64.prototype.div = function (t) {
        if (t == 0) return [];
        var n = new jspb.arith.UInt64(0, 0),
          r = new jspb.arith.UInt64(this.lo, this.hi);
        t = new jspb.arith.UInt64(t, 0);
        for (var i = new jspb.arith.UInt64(1, 0); !t.msb(); )
          (t = t.leftShift()), (i = i.leftShift());
        for (; !i.zero(); )
          0 >= t.cmp(r) && ((n = n.add(i)), (r = r.sub(t))),
            (t = t.rightShift()),
            (i = i.rightShift());
        return [n, r];
      }),
      (jspb.arith.UInt64.prototype.toString = function () {
        for (var t = ``, n = this; !n.zero(); ) {
          n = n.div(10);
          var r = n[0];
          (t = n[1].lo + t), (n = r);
        }
        return t == `` && (t = `0`), t;
      }),
      (jspb.arith.UInt64.fromString = function (t) {
        for (
          var n = new jspb.arith.UInt64(0, 0),
            r = new jspb.arith.UInt64(0, 0),
            i = 0;
          i < t.length;
          i++
        ) {
          if (`0` > t[i] || `9` < t[i]) return null;
          (r.lo = parseInt(t[i], 10)), (n = n.mul(10).add(r));
        }
        return n;
      }),
      (jspb.arith.UInt64.prototype.clone = function () {
        return new jspb.arith.UInt64(this.lo, this.hi);
      }),
      (jspb.arith.Int64 = function (t, n) {
        (this.lo = t), (this.hi = n);
      }),
      (jspb.arith.Int64.prototype.add = function (t) {
        return new jspb.arith.Int64(
          (((this.lo + t.lo) | 0) >>> 0) >>> 0,
          ((((this.hi + t.hi) | 0) >>> 0) + +(4294967296 <= this.lo + t.lo)) >>>
            0,
        );
      }),
      (jspb.arith.Int64.prototype.sub = function (t) {
        return new jspb.arith.Int64(
          (((this.lo - t.lo) | 0) >>> 0) >>> 0,
          ((((this.hi - t.hi) | 0) >>> 0) - (0 > this.lo - t.lo)) >>> 0,
        );
      }),
      (jspb.arith.Int64.prototype.clone = function () {
        return new jspb.arith.Int64(this.lo, this.hi);
      }),
      (jspb.arith.Int64.prototype.toString = function () {
        var t = !!(this.hi & 2147483648),
          n = new jspb.arith.UInt64(this.lo, this.hi);
        return (
          t && (n = new jspb.arith.UInt64(0, 0).sub(n)),
          (t ? `-` : ``) + n.toString()
        );
      }),
      (jspb.arith.Int64.fromString = function (t) {
        var n = 0 < t.length && t[0] == `-`;
        return (
          n && (t = t.substring(1)),
          (t = jspb.arith.UInt64.fromString(t)),
          t === null
            ? null
            : (n && (t = new jspb.arith.UInt64(0, 0).sub(t)),
              new jspb.arith.Int64(t.lo, t.hi))
        );
      }),
      (jspb.BinaryWriter = function () {
        (this.blocks_ = []),
          (this.totalLength_ = 0),
          (this.encoder_ = new jspb.BinaryEncoder()),
          (this.bookmarks_ = []);
      }),
      (jspb.BinaryWriter.prototype.appendUint8Array_ = function (t) {
        var n = this.encoder_.end();
        this.blocks_.push(n),
          this.blocks_.push(t),
          (this.totalLength_ += n.length + t.length);
      }),
      (jspb.BinaryWriter.prototype.beginDelimited_ = function (t) {
        return (
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          (t = this.encoder_.end()),
          this.blocks_.push(t),
          (this.totalLength_ += t.length),
          t.push(this.totalLength_),
          t
        );
      }),
      (jspb.BinaryWriter.prototype.endDelimited_ = function (t) {
        var n = t.pop();
        for (
          n = this.totalLength_ + this.encoder_.length() - n,
            jspb.asserts.assert(0 <= n);
          127 < n;
        )
          t.push((n & 127) | 128), (n >>>= 7), this.totalLength_++;
        t.push(n), this.totalLength_++;
      }),
      (jspb.BinaryWriter.prototype.writeSerializedMessage = function (t, n, r) {
        this.appendUint8Array_(t.subarray(n, r));
      }),
      (jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (
        t,
        n,
        r,
      ) {
        t != null &&
          n != null &&
          r != null &&
          this.writeSerializedMessage(t, n, r);
      }),
      (jspb.BinaryWriter.prototype.reset = function () {
        (this.blocks_ = []),
          this.encoder_.end(),
          (this.totalLength_ = 0),
          (this.bookmarks_ = []);
      }),
      (jspb.BinaryWriter.prototype.getResultBuffer = function () {
        jspb.asserts.assert(this.bookmarks_.length == 0);
        for (
          var t = new Uint8Array(this.totalLength_ + this.encoder_.length()),
            n = this.blocks_,
            r = n.length,
            i = 0,
            o = 0;
          o < r;
          o++
        ) {
          var s = n[o];
          t.set(s, i), (i += s.length);
        }
        return (
          (n = this.encoder_.end()),
          t.set(n, i),
          (i += n.length),
          jspb.asserts.assert(i == t.length),
          (this.blocks_ = [t]),
          t
        );
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `getResultBuffer`,
        jspb.BinaryWriter.prototype.getResultBuffer,
      ),
      (jspb.BinaryWriter.prototype.getResultBase64String = function (t) {
        return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), t);
      }),
      (jspb.BinaryWriter.prototype.beginSubMessage = function (t) {
        this.bookmarks_.push(this.beginDelimited_(t));
      }),
      (jspb.BinaryWriter.prototype.endSubMessage = function () {
        jspb.asserts.assert(0 <= this.bookmarks_.length),
          this.endDelimited_(this.bookmarks_.pop());
      }),
      (jspb.BinaryWriter.prototype.writeFieldHeader_ = function (t, n) {
        jspb.asserts.assert(1 <= t && t == Math.floor(t)),
          this.encoder_.writeUnsignedVarint32(8 * t + n);
      }),
      (jspb.BinaryWriter.prototype.writeAny = function (t, n, r) {
        var i = jspb.BinaryConstants.FieldType;
        switch (t) {
          case i.DOUBLE:
            this.writeDouble(n, r);
            break;
          case i.FLOAT:
            this.writeFloat(n, r);
            break;
          case i.INT64:
            this.writeInt64(n, r);
            break;
          case i.UINT64:
            this.writeUint64(n, r);
            break;
          case i.INT32:
            this.writeInt32(n, r);
            break;
          case i.FIXED64:
            this.writeFixed64(n, r);
            break;
          case i.FIXED32:
            this.writeFixed32(n, r);
            break;
          case i.BOOL:
            this.writeBool(n, r);
            break;
          case i.STRING:
            this.writeString(n, r);
            break;
          case i.GROUP:
            jspb.asserts.fail(`Group field type not supported in writeAny()`);
            break;
          case i.MESSAGE:
            jspb.asserts.fail(`Message field type not supported in writeAny()`);
            break;
          case i.BYTES:
            this.writeBytes(n, r);
            break;
          case i.UINT32:
            this.writeUint32(n, r);
            break;
          case i.ENUM:
            this.writeEnum(n, r);
            break;
          case i.SFIXED32:
            this.writeSfixed32(n, r);
            break;
          case i.SFIXED64:
            this.writeSfixed64(n, r);
            break;
          case i.SINT32:
            this.writeSint32(n, r);
            break;
          case i.SINT64:
            this.writeSint64(n, r);
            break;
          case i.FHASH64:
            this.writeFixedHash64(n, r);
            break;
          case i.VHASH64:
            this.writeVarintHash64(n, r);
            break;
          default:
            jspb.asserts.fail(`Invalid field type in writeAny()`);
        }
      }),
      (jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeUnsignedVarint32(n));
      }),
      (jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSignedVarint32(n));
      }),
      (jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeUnsignedVarint64(n));
      }),
      (jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSignedVarint64(n));
      }),
      (jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeZigzagVarint32(n));
      }),
      (jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeZigzagVarint64(n));
      }),
      (jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (
        t,
        n,
      ) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeZigzagVarint64String(n));
      }),
      (jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeZigzagVarintHash64(n));
      }),
      (jspb.BinaryWriter.prototype.writeInt32 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(
            n >= -jspb.BinaryConstants.TWO_TO_31 &&
              n < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeSignedVarint32_(t, n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeInt32`,
        jspb.BinaryWriter.prototype.writeInt32,
      ),
      (jspb.BinaryWriter.prototype.writeInt32String = function (t, n) {
        n != null &&
          ((n = parseInt(n, 10)),
          jspb.asserts.assert(
            n >= -jspb.BinaryConstants.TWO_TO_31 &&
              n < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeSignedVarint32_(t, n));
      }),
      (jspb.BinaryWriter.prototype.writeInt64 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(
            n >= -jspb.BinaryConstants.TWO_TO_63 &&
              n < jspb.BinaryConstants.TWO_TO_63,
          ),
          this.writeSignedVarint64_(t, n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeInt64`,
        jspb.BinaryWriter.prototype.writeInt64,
      ),
      (jspb.BinaryWriter.prototype.writeInt64String = function (t, n) {
        n != null &&
          ((n = jspb.arith.Int64.fromString(n)),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSplitVarint64(n.lo, n.hi));
      }),
      (jspb.BinaryWriter.prototype.writeUint32 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_32),
          this.writeUnsignedVarint32_(t, n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeUint32`,
        jspb.BinaryWriter.prototype.writeUint32,
      ),
      (jspb.BinaryWriter.prototype.writeUint32String = function (t, n) {
        n != null &&
          ((n = parseInt(n, 10)),
          jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_32),
          this.writeUnsignedVarint32_(t, n));
      }),
      (jspb.BinaryWriter.prototype.writeUint64 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_64),
          this.writeUnsignedVarint64_(t, n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeUint64`,
        jspb.BinaryWriter.prototype.writeUint64,
      ),
      (jspb.BinaryWriter.prototype.writeUint64String = function (t, n) {
        n != null &&
          ((n = jspb.arith.UInt64.fromString(n)),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSplitVarint64(n.lo, n.hi));
      }),
      (jspb.BinaryWriter.prototype.writeSint32 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(
            n >= -jspb.BinaryConstants.TWO_TO_31 &&
              n < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeZigzagVarint32_(t, n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeSint32`,
        jspb.BinaryWriter.prototype.writeSint32,
      ),
      (jspb.BinaryWriter.prototype.writeSint64 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(
            n >= -jspb.BinaryConstants.TWO_TO_63 &&
              n < jspb.BinaryConstants.TWO_TO_63,
          ),
          this.writeZigzagVarint64_(t, n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeSint64`,
        jspb.BinaryWriter.prototype.writeSint64,
      ),
      (jspb.BinaryWriter.prototype.writeSintHash64 = function (t, n) {
        n != null && this.writeZigzagVarintHash64_(t, n);
      }),
      (jspb.BinaryWriter.prototype.writeSint64String = function (t, n) {
        n != null && this.writeZigzagVarint64String_(t, n);
      }),
      (jspb.BinaryWriter.prototype.writeFixed32 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_32),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32),
          this.encoder_.writeUint32(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeFixed32`,
        jspb.BinaryWriter.prototype.writeFixed32,
      ),
      (jspb.BinaryWriter.prototype.writeFixed64 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_64),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeUint64(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeFixed64`,
        jspb.BinaryWriter.prototype.writeFixed64,
      ),
      (jspb.BinaryWriter.prototype.writeFixed64String = function (t, n) {
        n != null &&
          ((n = jspb.arith.UInt64.fromString(n)),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeSplitFixed64(n.lo, n.hi));
      }),
      (jspb.BinaryWriter.prototype.writeSfixed32 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(
            n >= -jspb.BinaryConstants.TWO_TO_31 &&
              n < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32),
          this.encoder_.writeInt32(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeSfixed32`,
        jspb.BinaryWriter.prototype.writeSfixed32,
      ),
      (jspb.BinaryWriter.prototype.writeSfixed64 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(
            n >= -jspb.BinaryConstants.TWO_TO_63 &&
              n < jspb.BinaryConstants.TWO_TO_63,
          ),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeInt64(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeSfixed64`,
        jspb.BinaryWriter.prototype.writeSfixed64,
      ),
      (jspb.BinaryWriter.prototype.writeSfixed64String = function (t, n) {
        n != null &&
          ((n = jspb.arith.Int64.fromString(n)),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeSplitFixed64(n.lo, n.hi));
      }),
      (jspb.BinaryWriter.prototype.writeFloat = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED32),
          this.encoder_.writeFloat(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeFloat`,
        jspb.BinaryWriter.prototype.writeFloat,
      ),
      (jspb.BinaryWriter.prototype.writeDouble = function (t, n) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeDouble(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeDouble`,
        jspb.BinaryWriter.prototype.writeDouble,
      ),
      (jspb.BinaryWriter.prototype.writeBool = function (t, n) {
        n != null &&
          (jspb.asserts.assert(typeof n == `boolean` || typeof n == `number`),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeBool(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeBool`,
        jspb.BinaryWriter.prototype.writeBool,
      ),
      (jspb.BinaryWriter.prototype.writeEnum = function (t, n) {
        n != null &&
          (jspb.asserts.assert(
            n >= -jspb.BinaryConstants.TWO_TO_31 &&
              n < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSignedVarint32(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeEnum`,
        jspb.BinaryWriter.prototype.writeEnum,
      ),
      (jspb.BinaryWriter.prototype.writeString = function (t, n) {
        n != null &&
          ((t = this.beginDelimited_(t)),
          this.encoder_.writeString(n),
          this.endDelimited_(t));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeString`,
        jspb.BinaryWriter.prototype.writeString,
      ),
      (jspb.BinaryWriter.prototype.writeBytes = function (t, n) {
        n != null &&
          ((n = jspb.utils.byteSourceToUint8Array(n)),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
          this.encoder_.writeUnsignedVarint32(n.length),
          this.appendUint8Array_(n));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeBytes`,
        jspb.BinaryWriter.prototype.writeBytes,
      ),
      (jspb.BinaryWriter.prototype.writeMessage = function (t, n, r) {
        n != null &&
          ((t = this.beginDelimited_(t)), r(n, this), this.endDelimited_(t));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeMessage`,
        jspb.BinaryWriter.prototype.writeMessage,
      ),
      (jspb.BinaryWriter.prototype.writeMessageSet = function (t, n, r) {
        n != null &&
          (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP),
          this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSignedVarint32(t),
          (t = this.beginDelimited_(3)),
          r(n, this),
          this.endDelimited_(t),
          this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
      }),
      (jspb.BinaryWriter.prototype.writeGroup = function (t, n, r) {
        n != null &&
          (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.START_GROUP),
          r(n, this),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.END_GROUP));
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeGroup`,
        jspb.BinaryWriter.prototype.writeGroup,
      ),
      (jspb.BinaryWriter.prototype.writeFixedHash64 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(n.length == 8),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeFixedHash64(n));
      }),
      (jspb.BinaryWriter.prototype.writeVarintHash64 = function (t, n) {
        n != null &&
          (jspb.asserts.assert(n.length == 8),
          this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeVarintHash64(n));
      }),
      (jspb.BinaryWriter.prototype.writeSplitFixed64 = function (t, n, r) {
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeSplitFixed64(n, r);
      }),
      (jspb.BinaryWriter.prototype.writeSplitVarint64 = function (t, n, r) {
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSplitVarint64(n, r);
      }),
      (jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function (
        t,
        n,
        r,
      ) {
        this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT);
        var i = this.encoder_;
        jspb.utils.toZigzag64(n, r, function (t, n) {
          i.writeSplitVarint64(t >>> 0, n >>> 0);
        });
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeSignedVarint32_(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedInt32`,
        jspb.BinaryWriter.prototype.writeRepeatedInt32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeInt32String(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeSignedVarint64_(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedInt64`,
        jspb.BinaryWriter.prototype.writeRepeatedInt64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function (
        t,
        n,
        r,
        i,
      ) {
        if (n != null)
          for (var o = 0; o < n.length; o++)
            this.writeSplitFixed64(t, r(n[o]), i(n[o]));
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function (
        t,
        n,
        r,
        i,
      ) {
        if (n != null)
          for (var o = 0; o < n.length; o++)
            this.writeSplitVarint64(t, r(n[o]), i(n[o]));
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function (
        t,
        n,
        r,
        i,
      ) {
        if (n != null)
          for (var o = 0; o < n.length; o++)
            this.writeSplitZigzagVarint64(t, r(n[o]), i(n[o]));
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeInt64String(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++)
            this.writeUnsignedVarint32_(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedUint32`,
        jspb.BinaryWriter.prototype.writeRepeatedUint32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeUint32String(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++)
            this.writeUnsignedVarint64_(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedUint64`,
        jspb.BinaryWriter.prototype.writeRepeatedUint64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeUint64String(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeZigzagVarint32_(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedSint32`,
        jspb.BinaryWriter.prototype.writeRepeatedSint32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeZigzagVarint64_(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedSint64`,
        jspb.BinaryWriter.prototype.writeRepeatedSint64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++)
            this.writeZigzagVarint64String_(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++)
            this.writeZigzagVarintHash64_(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeFixed32(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedFixed32`,
        jspb.BinaryWriter.prototype.writeRepeatedFixed32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeFixed64(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedFixed64`,
        jspb.BinaryWriter.prototype.writeRepeatedFixed64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (
        t,
        n,
      ) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeFixed64String(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedFixed64String`,
        jspb.BinaryWriter.prototype.writeRepeatedFixed64String,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeSfixed32(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedSfixed32`,
        jspb.BinaryWriter.prototype.writeRepeatedSfixed32,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeSfixed64(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedSfixed64`,
        jspb.BinaryWriter.prototype.writeRepeatedSfixed64,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (
        t,
        n,
      ) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeSfixed64String(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedFloat = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeFloat(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedFloat`,
        jspb.BinaryWriter.prototype.writeRepeatedFloat,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedDouble = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeDouble(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedDouble`,
        jspb.BinaryWriter.prototype.writeRepeatedDouble,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedBool = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeBool(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedBool`,
        jspb.BinaryWriter.prototype.writeRepeatedBool,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedEnum = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeEnum(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedEnum`,
        jspb.BinaryWriter.prototype.writeRepeatedEnum,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedString = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeString(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedString`,
        jspb.BinaryWriter.prototype.writeRepeatedString,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedBytes = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeBytes(t, n[r]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedBytes`,
        jspb.BinaryWriter.prototype.writeRepeatedBytes,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedMessage = function (t, n, r) {
        if (n != null)
          for (var i = 0; i < n.length; i++) {
            var o = this.beginDelimited_(t);
            r(n[i], this), this.endDelimited_(o);
          }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedMessage`,
        jspb.BinaryWriter.prototype.writeRepeatedMessage,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedGroup = function (t, n, r) {
        if (n != null)
          for (var i = 0; i < n.length; i++)
            this.writeFieldHeader_(
              t,
              jspb.BinaryConstants.WireType.START_GROUP,
            ),
              r(n[i], this),
              this.writeFieldHeader_(
                t,
                jspb.BinaryConstants.WireType.END_GROUP,
              );
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writeRepeatedGroup`,
        jspb.BinaryWriter.prototype.writeRepeatedGroup,
      ),
      (jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeFixedHash64(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (t, n) {
        if (n != null)
          for (var r = 0; r < n.length; r++) this.writeVarintHash64(t, n[r]);
      }),
      (jspb.BinaryWriter.prototype.writePackedInt32 = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeSignedVarint32(n[r]);
          this.endDelimited_(t);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedInt32`,
        jspb.BinaryWriter.prototype.writePackedInt32,
      ),
      (jspb.BinaryWriter.prototype.writePackedInt32String = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeSignedVarint32(parseInt(n[r], 10));
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedInt64 = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeSignedVarint64(n[r]);
          this.endDelimited_(t);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedInt64`,
        jspb.BinaryWriter.prototype.writePackedInt64,
      ),
      (jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function (
        t,
        n,
        r,
        i,
      ) {
        if (n != null) {
          t = this.beginDelimited_(t);
          for (var o = 0; o < n.length; o++)
            this.encoder_.writeSplitFixed64(r(n[o]), i(n[o]));
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function (
        t,
        n,
        r,
        i,
      ) {
        if (n != null) {
          t = this.beginDelimited_(t);
          for (var o = 0; o < n.length; o++)
            this.encoder_.writeSplitVarint64(r(n[o]), i(n[o]));
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function (
        t,
        n,
        r,
        i,
      ) {
        if (n != null) {
          t = this.beginDelimited_(t);
          for (var o = this.encoder_, s = 0; s < n.length; s++)
            jspb.utils.toZigzag64(r(n[s]), i(n[s]), function (t, n) {
              o.writeSplitVarint64(t >>> 0, n >>> 0);
            });
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedInt64String = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++) {
            var i = jspb.arith.Int64.fromString(n[r]);
            this.encoder_.writeSplitVarint64(i.lo, i.hi);
          }
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedUint32 = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeUnsignedVarint32(n[r]);
          this.endDelimited_(t);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedUint32`,
        jspb.BinaryWriter.prototype.writePackedUint32,
      ),
      (jspb.BinaryWriter.prototype.writePackedUint32String = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeUnsignedVarint32(parseInt(n[r], 10));
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedUint64 = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeUnsignedVarint64(n[r]);
          this.endDelimited_(t);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedUint64`,
        jspb.BinaryWriter.prototype.writePackedUint64,
      ),
      (jspb.BinaryWriter.prototype.writePackedUint64String = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++) {
            var i = jspb.arith.UInt64.fromString(n[r]);
            this.encoder_.writeSplitVarint64(i.lo, i.hi);
          }
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedSint32 = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeZigzagVarint32(n[r]);
          this.endDelimited_(t);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedSint32`,
        jspb.BinaryWriter.prototype.writePackedSint32,
      ),
      (jspb.BinaryWriter.prototype.writePackedSint64 = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeZigzagVarint64(n[r]);
          this.endDelimited_(t);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedSint64`,
        jspb.BinaryWriter.prototype.writePackedSint64,
      ),
      (jspb.BinaryWriter.prototype.writePackedSint64String = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeZigzagVarintHash64(
              jspb.utils.decimalStringToHash64(n[r]),
            );
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedSintHash64 = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeZigzagVarintHash64(n[r]);
          this.endDelimited_(t);
        }
      }),
      (jspb.BinaryWriter.prototype.writePackedFixed32 = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeUint32(n[t]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedFixed32`,
        jspb.BinaryWriter.prototype.writePackedFixed32,
      ),
      (jspb.BinaryWriter.prototype.writePackedFixed64 = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeUint64(n[t]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedFixed64`,
        jspb.BinaryWriter.prototype.writePackedFixed64,
      ),
      (jspb.BinaryWriter.prototype.writePackedFixed64String = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * n.length),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = jspb.arith.UInt64.fromString(n[t]);
            this.encoder_.writeSplitFixed64(r.lo, r.hi);
          }
      }),
      (jspb.BinaryWriter.prototype.writePackedSfixed32 = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeInt32(n[t]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedSfixed32`,
        jspb.BinaryWriter.prototype.writePackedSfixed32,
      ),
      (jspb.BinaryWriter.prototype.writePackedSfixed64 = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeInt64(n[t]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedSfixed64`,
        jspb.BinaryWriter.prototype.writePackedSfixed64,
      ),
      (jspb.BinaryWriter.prototype.writePackedSfixed64String = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeInt64String(n[t]);
      }),
      (jspb.BinaryWriter.prototype.writePackedFloat = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeFloat(n[t]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedFloat`,
        jspb.BinaryWriter.prototype.writePackedFloat,
      ),
      (jspb.BinaryWriter.prototype.writePackedDouble = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeDouble(n[t]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedDouble`,
        jspb.BinaryWriter.prototype.writePackedDouble,
      ),
      (jspb.BinaryWriter.prototype.writePackedBool = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeBool(n[t]);
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedBool`,
        jspb.BinaryWriter.prototype.writePackedBool,
      ),
      (jspb.BinaryWriter.prototype.writePackedEnum = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++) this.encoder_.writeEnum(n[r]);
          this.endDelimited_(t);
        }
      }),
      goog.exportProperty(
        jspb.BinaryWriter.prototype,
        `writePackedEnum`,
        jspb.BinaryWriter.prototype.writePackedEnum,
      ),
      (jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (t, n) {
        if (n != null && n.length)
          for (
            this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * n.length),
              t = 0;
            t < n.length;
            t++
          )
            this.encoder_.writeFixedHash64(n[t]);
      }),
      (jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (t, n) {
        if (n != null && n.length) {
          t = this.beginDelimited_(t);
          for (var r = 0; r < n.length; r++)
            this.encoder_.writeVarintHash64(n[r]);
          this.endDelimited_(t);
        }
      }),
      (jspb.Map = function (t, n) {
        (this.arr_ = t),
          (this.valueCtor_ = n),
          (this.map_ = {}),
          (this.arrClean = !0),
          0 < this.arr_.length && this.loadFromArray_();
      }),
      goog.exportSymbol(`jspb.Map`, jspb.Map),
      (jspb.Map.prototype.loadFromArray_ = function () {
        for (var t = 0; t < this.arr_.length; t++) {
          var n = this.arr_[t],
            r = n[0];
          this.map_[r.toString()] = new jspb.Map.Entry_(r, n[1]);
        }
        this.arrClean = !0;
      }),
      (jspb.Map.prototype.toArray = function () {
        if (this.arrClean) {
          if (this.valueCtor_) {
            var t = this.map_,
              n;
            for (n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r = t[n].valueWrapper;
                r && r.toArray();
              }
          }
        } else {
          for (
            this.arr_.length = 0, t = this.stringKeys_(), t.sort(), n = 0;
            n < t.length;
            n++
          ) {
            var i = this.map_[t[n]];
            (r = i.valueWrapper) && r.toArray(),
              this.arr_.push([i.key, i.value]);
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
      (jspb.Map.prototype.toObject = function (t, n) {
        for (var r = this.toArray(), i = [], o = 0; o < r.length; o++) {
          var s = this.map_[r[o][0].toString()];
          this.wrapEntry_(s);
          var l = s.valueWrapper;
          l
            ? (jspb.asserts.assert(n), i.push([s.key, n(t, l)]))
            : i.push([s.key, s.value]);
        }
        return i;
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `toObject`,
        jspb.Map.prototype.toObject,
      ),
      (jspb.Map.fromObject = function (t, n, r) {
        n = new jspb.Map([], n);
        for (var i = 0; i < t.length; i++) {
          var o = t[i][0],
            s = r(t[i][1]);
          n.set(o, s);
        }
        return n;
      }),
      goog.exportProperty(jspb.Map, `fromObject`, jspb.Map.fromObject),
      (jspb.Map.ArrayIteratorIterable_ = function (t) {
        (this.idx_ = 0), (this.arr_ = t);
      }),
      (jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
        return this.idx_ < this.arr_.length
          ? { done: !1, value: this.arr_[this.idx_++] }
          : { done: !0, value: void 0 };
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
        (this.map_ = {}), (this.arrClean = !1);
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `clear`,
        jspb.Map.prototype.clear,
      ),
      (jspb.Map.prototype.del = function (t) {
        t = t.toString();
        var n = this.map_.hasOwnProperty(t);
        return delete this.map_[t], (this.arrClean = !1), n;
      }),
      goog.exportProperty(jspb.Map.prototype, `del`, jspb.Map.prototype.del),
      (jspb.Map.prototype.getEntryList = function () {
        var t = [],
          n = this.stringKeys_();
        n.sort();
        for (var r = 0; r < n.length; r++) {
          var i = this.map_[n[r]];
          t.push([i.key, i.value]);
        }
        return t;
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `getEntryList`,
        jspb.Map.prototype.getEntryList,
      ),
      (jspb.Map.prototype.entries = function () {
        var t = [],
          n = this.stringKeys_();
        n.sort();
        for (var r = 0; r < n.length; r++) {
          var i = this.map_[n[r]];
          t.push([i.key, this.wrapEntry_(i)]);
        }
        return new jspb.Map.ArrayIteratorIterable_(t);
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `entries`,
        jspb.Map.prototype.entries,
      ),
      (jspb.Map.prototype.keys = function () {
        var t = [],
          n = this.stringKeys_();
        n.sort();
        for (var r = 0; r < n.length; r++) t.push(this.map_[n[r]].key);
        return new jspb.Map.ArrayIteratorIterable_(t);
      }),
      goog.exportProperty(jspb.Map.prototype, `keys`, jspb.Map.prototype.keys),
      (jspb.Map.prototype.values = function () {
        var t = [],
          n = this.stringKeys_();
        n.sort();
        for (var r = 0; r < n.length; r++)
          t.push(this.wrapEntry_(this.map_[n[r]]));
        return new jspb.Map.ArrayIteratorIterable_(t);
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `values`,
        jspb.Map.prototype.values,
      ),
      (jspb.Map.prototype.forEach = function (t, n) {
        var r = this.stringKeys_();
        r.sort();
        for (var i = 0; i < r.length; i++) {
          var o = this.map_[r[i]];
          t.call(n, this.wrapEntry_(o), o.key, this);
        }
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `forEach`,
        jspb.Map.prototype.forEach,
      ),
      (jspb.Map.prototype.set = function (t, n) {
        var r = new jspb.Map.Entry_(t);
        return (
          this.valueCtor_
            ? ((r.valueWrapper = n), (r.value = n.toArray()))
            : (r.value = n),
          (this.map_[t.toString()] = r),
          (this.arrClean = !1),
          this
        );
      }),
      goog.exportProperty(jspb.Map.prototype, `set`, jspb.Map.prototype.set),
      (jspb.Map.prototype.wrapEntry_ = function (t) {
        return this.valueCtor_
          ? ((t.valueWrapper ||= new this.valueCtor_(t.value)), t.valueWrapper)
          : t.value;
      }),
      (jspb.Map.prototype.get = function (t) {
        if ((t = this.map_[t.toString()])) return this.wrapEntry_(t);
      }),
      goog.exportProperty(jspb.Map.prototype, `get`, jspb.Map.prototype.get),
      (jspb.Map.prototype.has = function (t) {
        return t.toString() in this.map_;
      }),
      goog.exportProperty(jspb.Map.prototype, `has`, jspb.Map.prototype.has),
      (jspb.Map.prototype.serializeBinary = function (t, n, r, i, o) {
        var s = this.stringKeys_();
        s.sort();
        for (var l = 0; l < s.length; l++) {
          var u = this.map_[s[l]];
          n.beginSubMessage(t),
            r.call(n, 1, u.key),
            this.valueCtor_
              ? i.call(n, 2, this.wrapEntry_(u), o)
              : i.call(n, 2, u.value),
            n.endSubMessage();
        }
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `serializeBinary`,
        jspb.Map.prototype.serializeBinary,
      ),
      (jspb.Map.deserializeBinary = function (t, n, r, i, o, s, l) {
        for (; n.nextField() && !n.isEndGroup(); ) {
          var u = n.getFieldNumber();
          u == 1
            ? (s = r.call(n))
            : u == 2 &&
              (t.valueCtor_
                ? (jspb.asserts.assert(o),
                  (l ||= new t.valueCtor_()),
                  i.call(n, l, o))
                : (l = i.call(n)));
        }
        jspb.asserts.assert(s != null),
          jspb.asserts.assert(l != null),
          t.set(s, l);
      }),
      goog.exportProperty(
        jspb.Map,
        `deserializeBinary`,
        jspb.Map.deserializeBinary,
      ),
      (jspb.Map.prototype.stringKeys_ = function () {
        var t = this.map_,
          n = [],
          r;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && n.push(r);
        return n;
      }),
      (jspb.Map.Entry_ = function (t, n) {
        (this.key = t), (this.value = n), (this.valueWrapper = void 0);
      }),
      (jspb.ExtensionFieldInfo = function (t, n, r, i, o) {
        (this.fieldIndex = t),
          (this.fieldName = n),
          (this.ctor = r),
          (this.toObjectFn = i),
          (this.isRepeated = o);
      }),
      goog.exportSymbol(`jspb.ExtensionFieldInfo`, jspb.ExtensionFieldInfo),
      (jspb.ExtensionFieldBinaryInfo = function (t, n, r, i, o, s) {
        (this.fieldInfo = t),
          (this.binaryReaderFn = n),
          (this.binaryWriterFn = r),
          (this.binaryMessageSerializeFn = i),
          (this.binaryMessageDeserializeFn = o),
          (this.isPacked = s);
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
      (jspb.Message.getIndex_ = function (t, n) {
        return n + t.arrayIndexOffset_;
      }),
      (jspb.Message.hiddenES6Property_ = function () {}),
      (jspb.Message.getFieldNumber_ = function (t, n) {
        return n - t.arrayIndexOffset_;
      }),
      (jspb.Message.initialize = function (t, n, r, i, o, s) {
        if (
          ((t.wrappers_ = null),
          (n ||= r ? [r] : []),
          (t.messageId_ = r ? String(r) : void 0),
          (t.arrayIndexOffset_ = r === 0 ? -1 : 0),
          (t.array = n),
          jspb.Message.initPivotAndExtensionObject_(t, i),
          (t.convertedPrimitiveFields_ = {}),
          jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS ||
            (t.repeatedFields = o),
          o)
        )
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              r < t.pivot_
                ? ((r = jspb.Message.getIndex_(t, r)),
                  (t.array[r] =
                    t.array[r] || jspb.Message.EMPTY_LIST_SENTINEL_))
                : (jspb.Message.maybeInitEmptyExtensionObject_(t),
                  (t.extensionObject_[r] =
                    t.extensionObject_[r] ||
                    jspb.Message.EMPTY_LIST_SENTINEL_));
        if (s && s.length)
          for (n = 0; n < s.length; n++) jspb.Message.computeOneofCase(t, s[n]);
      }),
      goog.exportProperty(jspb.Message, `initialize`, jspb.Message.initialize),
      (jspb.Message.EMPTY_LIST_SENTINEL_ =
        goog.DEBUG && Object.freeze ? Object.freeze([]) : []),
      (jspb.Message.isArray_ = function (t) {
        return jspb.Message.ASSUME_LOCAL_ARRAYS
          ? t instanceof Array
          : Array.isArray(t);
      }),
      (jspb.Message.isExtensionObject_ = function (t) {
        return (
          typeof t == `object` &&
          !!t &&
          !jspb.Message.isArray_(t) &&
          !(jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array)
        );
      }),
      (jspb.Message.initPivotAndExtensionObject_ = function (t, n) {
        var r = t.array.length,
          i = -1;
        r && ((i = r - 1), (r = t.array[i]), jspb.Message.isExtensionObject_(r))
          ? ((t.pivot_ = jspb.Message.getFieldNumber_(t, i)),
            (t.extensionObject_ = r))
          : -1 < n
            ? ((t.pivot_ = Math.max(n, jspb.Message.getFieldNumber_(t, i + 1))),
              (t.extensionObject_ = null))
            : (t.pivot_ = Number.MAX_VALUE);
      }),
      (jspb.Message.maybeInitEmptyExtensionObject_ = function (t) {
        var n = jspb.Message.getIndex_(t, t.pivot_);
        t.array[n] || (t.extensionObject_ = t.array[n] = {});
      }),
      (jspb.Message.toObjectList = function (t, n, r) {
        for (var i = [], o = 0; o < t.length; o++) i[o] = n.call(t[o], r, t[o]);
        return i;
      }),
      goog.exportProperty(
        jspb.Message,
        `toObjectList`,
        jspb.Message.toObjectList,
      ),
      (jspb.Message.toObjectExtension = function (t, n, r, i, o) {
        for (var s in r) {
          var l = r[s],
            u = i.call(t, l);
          if (u != null) {
            for (var p in l.fieldName) if (l.fieldName.hasOwnProperty(p)) break;
            n[p] = l.toObjectFn
              ? l.isRepeated
                ? jspb.Message.toObjectList(u, l.toObjectFn, o)
                : l.toObjectFn(o, u)
              : u;
          }
        }
      }),
      goog.exportProperty(
        jspb.Message,
        `toObjectExtension`,
        jspb.Message.toObjectExtension,
      ),
      (jspb.Message.serializeBinaryExtensions = function (t, n, r, i) {
        for (var o in r) {
          var s = r[o],
            l = s.fieldInfo;
          if (!s.binaryWriterFn)
            throw Error(
              `Message extension present that was generated without binary serialization support`,
            );
          var u = i.call(t, l);
          if (u != null) {
            if (l.isMessageType()) {
              if (s.binaryMessageSerializeFn)
                s.binaryWriterFn.call(
                  n,
                  l.fieldIndex,
                  u,
                  s.binaryMessageSerializeFn,
                );
              else
                throw Error(
                  `Message extension present holding submessage without binary support enabled, and message is being serialized to binary format`,
                );
            } else s.binaryWriterFn.call(n, l.fieldIndex, u);
          }
        }
      }),
      goog.exportProperty(
        jspb.Message,
        `serializeBinaryExtensions`,
        jspb.Message.serializeBinaryExtensions,
      ),
      (jspb.Message.readBinaryExtension = function (t, n, r, i, o) {
        var s = r[n.getFieldNumber()];
        if (s) {
          if (((r = s.fieldInfo), !s.binaryReaderFn))
            throw Error(
              `Deserializing extension whose generated code does not support binary format`,
            );
          if (r.isMessageType()) {
            var l = new r.ctor();
            s.binaryReaderFn.call(n, l, s.binaryMessageDeserializeFn);
          } else l = s.binaryReaderFn.call(n);
          r.isRepeated && !s.isPacked
            ? (n = i.call(t, r))
              ? n.push(l)
              : o.call(t, r, [l])
            : o.call(t, r, l);
        } else n.skipField();
      }),
      goog.exportProperty(
        jspb.Message,
        `readBinaryExtension`,
        jspb.Message.readBinaryExtension,
      ),
      (jspb.Message.getField = function (t, n) {
        if (n < t.pivot_) {
          n = jspb.Message.getIndex_(t, n);
          var r = t.array[n];
          return r === jspb.Message.EMPTY_LIST_SENTINEL_
            ? (t.array[n] = [])
            : r;
        }
        if (t.extensionObject_)
          return (
            (r = t.extensionObject_[n]),
            r === jspb.Message.EMPTY_LIST_SENTINEL_
              ? (t.extensionObject_[n] = [])
              : r
          );
      }),
      goog.exportProperty(jspb.Message, `getField`, jspb.Message.getField),
      (jspb.Message.getRepeatedField = function (t, n) {
        return jspb.Message.getField(t, n);
      }),
      goog.exportProperty(
        jspb.Message,
        `getRepeatedField`,
        jspb.Message.getRepeatedField,
      ),
      (jspb.Message.getOptionalFloatingPointField = function (t, n) {
        return (t = jspb.Message.getField(t, n)), t == null ? t : +t;
      }),
      goog.exportProperty(
        jspb.Message,
        `getOptionalFloatingPointField`,
        jspb.Message.getOptionalFloatingPointField,
      ),
      (jspb.Message.getBooleanField = function (t, n) {
        return (t = jspb.Message.getField(t, n)), t == null ? t : !!t;
      }),
      goog.exportProperty(
        jspb.Message,
        `getBooleanField`,
        jspb.Message.getBooleanField,
      ),
      (jspb.Message.getRepeatedFloatingPointField = function (t, n) {
        var r = jspb.Message.getRepeatedField(t, n);
        if (
          ((t.convertedPrimitiveFields_ ||= {}),
          !t.convertedPrimitiveFields_[n])
        ) {
          for (var i = 0; i < r.length; i++) r[i] = +r[i];
          t.convertedPrimitiveFields_[n] = !0;
        }
        return r;
      }),
      goog.exportProperty(
        jspb.Message,
        `getRepeatedFloatingPointField`,
        jspb.Message.getRepeatedFloatingPointField,
      ),
      (jspb.Message.getRepeatedBooleanField = function (t, n) {
        var r = jspb.Message.getRepeatedField(t, n);
        if (
          ((t.convertedPrimitiveFields_ ||= {}),
          !t.convertedPrimitiveFields_[n])
        ) {
          for (var i = 0; i < r.length; i++) r[i] = !!r[i];
          t.convertedPrimitiveFields_[n] = !0;
        }
        return r;
      }),
      goog.exportProperty(
        jspb.Message,
        `getRepeatedBooleanField`,
        jspb.Message.getRepeatedBooleanField,
      ),
      (jspb.Message.bytesAsB64 = function (t) {
        return t == null || typeof t == `string`
          ? t
          : jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array
            ? goog.crypt.base64.encodeByteArray(t)
            : (jspb.asserts.fail(
                `Cannot coerce to b64 string: ` + goog.typeOf(t),
              ),
              null);
      }),
      goog.exportProperty(jspb.Message, `bytesAsB64`, jspb.Message.bytesAsB64),
      (jspb.Message.bytesAsU8 = function (t) {
        return t == null || t instanceof Uint8Array
          ? t
          : typeof t == `string`
            ? goog.crypt.base64.decodeStringToUint8Array(t)
            : (jspb.asserts.fail(
                `Cannot coerce to Uint8Array: ` + goog.typeOf(t),
              ),
              null);
      }),
      goog.exportProperty(jspb.Message, `bytesAsU8`, jspb.Message.bytesAsU8),
      (jspb.Message.bytesListAsB64 = function (t) {
        return (
          jspb.Message.assertConsistentTypes_(t),
          t.length && typeof t[0] != `string`
            ? goog.array.map(t, jspb.Message.bytesAsB64)
            : t
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `bytesListAsB64`,
        jspb.Message.bytesListAsB64,
      ),
      (jspb.Message.bytesListAsU8 = function (t) {
        return (
          jspb.Message.assertConsistentTypes_(t),
          !t.length || t[0] instanceof Uint8Array
            ? t
            : goog.array.map(t, jspb.Message.bytesAsU8)
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `bytesListAsU8`,
        jspb.Message.bytesListAsU8,
      ),
      (jspb.Message.assertConsistentTypes_ = function (t) {
        if (goog.DEBUG && t && 1 < t.length) {
          var n = goog.typeOf(t[0]);
          goog.array.forEach(t, function (t) {
            goog.typeOf(t) != n &&
              jspb.asserts.fail(
                `Inconsistent type in JSPB repeated field array. Got ` +
                  goog.typeOf(t) +
                  ` expected ` +
                  n,
              );
          });
        }
      }),
      (jspb.Message.getFieldWithDefault = function (t, n, r) {
        return (t = jspb.Message.getField(t, n)), t ?? r;
      }),
      goog.exportProperty(
        jspb.Message,
        `getFieldWithDefault`,
        jspb.Message.getFieldWithDefault,
      ),
      (jspb.Message.getBooleanFieldWithDefault = function (t, n, r) {
        return (t = jspb.Message.getBooleanField(t, n)), t ?? r;
      }),
      goog.exportProperty(
        jspb.Message,
        `getBooleanFieldWithDefault`,
        jspb.Message.getBooleanFieldWithDefault,
      ),
      (jspb.Message.getFloatingPointFieldWithDefault = function (t, n, r) {
        return (t = jspb.Message.getOptionalFloatingPointField(t, n)), t ?? r;
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
      (jspb.Message.getMapField = function (t, n, r, i) {
        if (((t.wrappers_ ||= {}), n in t.wrappers_)) return t.wrappers_[n];
        var o = jspb.Message.getField(t, n);
        if (!o) {
          if (r) return;
          (o = []), jspb.Message.setField(t, n, o);
        }
        return (t.wrappers_[n] = new jspb.Map(o, i));
      }),
      goog.exportProperty(
        jspb.Message,
        `getMapField`,
        jspb.Message.getMapField,
      ),
      (jspb.Message.setField = function (t, n, r) {
        return (
          jspb.asserts.assertInstanceof(t, jspb.Message),
          n < t.pivot_
            ? (t.array[jspb.Message.getIndex_(t, n)] = r)
            : (jspb.Message.maybeInitEmptyExtensionObject_(t),
              (t.extensionObject_[n] = r)),
          t
        );
      }),
      goog.exportProperty(jspb.Message, `setField`, jspb.Message.setField),
      (jspb.Message.setProto3IntField = function (t, n, r) {
        return jspb.Message.setFieldIgnoringDefault_(t, n, r, 0);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3IntField`,
        jspb.Message.setProto3IntField,
      ),
      (jspb.Message.setProto3FloatField = function (t, n, r) {
        return jspb.Message.setFieldIgnoringDefault_(t, n, r, 0);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3FloatField`,
        jspb.Message.setProto3FloatField,
      ),
      (jspb.Message.setProto3BooleanField = function (t, n, r) {
        return jspb.Message.setFieldIgnoringDefault_(t, n, r, !1);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3BooleanField`,
        jspb.Message.setProto3BooleanField,
      ),
      (jspb.Message.setProto3StringField = function (t, n, r) {
        return jspb.Message.setFieldIgnoringDefault_(t, n, r, ``);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3StringField`,
        jspb.Message.setProto3StringField,
      ),
      (jspb.Message.setProto3BytesField = function (t, n, r) {
        return jspb.Message.setFieldIgnoringDefault_(t, n, r, ``);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3BytesField`,
        jspb.Message.setProto3BytesField,
      ),
      (jspb.Message.setProto3EnumField = function (t, n, r) {
        return jspb.Message.setFieldIgnoringDefault_(t, n, r, 0);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3EnumField`,
        jspb.Message.setProto3EnumField,
      ),
      (jspb.Message.setProto3StringIntField = function (t, n, r) {
        return jspb.Message.setFieldIgnoringDefault_(t, n, r, `0`);
      }),
      goog.exportProperty(
        jspb.Message,
        `setProto3StringIntField`,
        jspb.Message.setProto3StringIntField,
      ),
      (jspb.Message.setFieldIgnoringDefault_ = function (t, n, r, i) {
        return (
          jspb.asserts.assertInstanceof(t, jspb.Message),
          r === i
            ? n < t.pivot_
              ? (t.array[jspb.Message.getIndex_(t, n)] = null)
              : (jspb.Message.maybeInitEmptyExtensionObject_(t),
                delete t.extensionObject_[n])
            : jspb.Message.setField(t, n, r),
          t
        );
      }),
      (jspb.Message.addToRepeatedField = function (t, n, r, i) {
        return (
          jspb.asserts.assertInstanceof(t, jspb.Message),
          (n = jspb.Message.getRepeatedField(t, n)),
          i == null ? n.push(r) : n.splice(i, 0, r),
          t
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `addToRepeatedField`,
        jspb.Message.addToRepeatedField,
      ),
      (jspb.Message.setOneofField = function (t, n, r, i) {
        return (
          jspb.asserts.assertInstanceof(t, jspb.Message),
          (r = jspb.Message.computeOneofCase(t, r)) &&
            r !== n &&
            i !== void 0 &&
            (t.wrappers_ && r in t.wrappers_ && (t.wrappers_[r] = void 0),
            jspb.Message.setField(t, r, void 0)),
          jspb.Message.setField(t, n, i)
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `setOneofField`,
        jspb.Message.setOneofField,
      ),
      (jspb.Message.computeOneofCase = function (t, n) {
        for (var r, i, o = 0; o < n.length; o++) {
          var s = n[o],
            l = jspb.Message.getField(t, s);
          l != null && ((r = s), (i = l), jspb.Message.setField(t, s, void 0));
        }
        return r ? (jspb.Message.setField(t, r, i), r) : 0;
      }),
      goog.exportProperty(
        jspb.Message,
        `computeOneofCase`,
        jspb.Message.computeOneofCase,
      ),
      (jspb.Message.getWrapperField = function (t, n, r, i) {
        if (((t.wrappers_ ||= {}), !t.wrappers_[r])) {
          var o = jspb.Message.getField(t, r);
          (i || o) && (t.wrappers_[r] = new n(o));
        }
        return t.wrappers_[r];
      }),
      goog.exportProperty(
        jspb.Message,
        `getWrapperField`,
        jspb.Message.getWrapperField,
      ),
      (jspb.Message.getRepeatedWrapperField = function (t, n, r) {
        return (
          jspb.Message.wrapRepeatedField_(t, n, r),
          (n = t.wrappers_[r]),
          n == jspb.Message.EMPTY_LIST_SENTINEL_ && (n = t.wrappers_[r] = []),
          n
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `getRepeatedWrapperField`,
        jspb.Message.getRepeatedWrapperField,
      ),
      (jspb.Message.wrapRepeatedField_ = function (t, n, r) {
        if (((t.wrappers_ ||= {}), !t.wrappers_[r])) {
          for (
            var i = jspb.Message.getRepeatedField(t, r), o = [], s = 0;
            s < i.length;
            s++
          )
            o[s] = new n(i[s]);
          t.wrappers_[r] = o;
        }
      }),
      (jspb.Message.setWrapperField = function (t, n, r) {
        jspb.asserts.assertInstanceof(t, jspb.Message), (t.wrappers_ ||= {});
        var i = r && r.toArray();
        return (t.wrappers_[n] = r), jspb.Message.setField(t, n, i);
      }),
      goog.exportProperty(
        jspb.Message,
        `setWrapperField`,
        jspb.Message.setWrapperField,
      ),
      (jspb.Message.setOneofWrapperField = function (t, n, r, i) {
        jspb.asserts.assertInstanceof(t, jspb.Message), (t.wrappers_ ||= {});
        var o = i && i.toArray();
        return (t.wrappers_[n] = i), jspb.Message.setOneofField(t, n, r, o);
      }),
      goog.exportProperty(
        jspb.Message,
        `setOneofWrapperField`,
        jspb.Message.setOneofWrapperField,
      ),
      (jspb.Message.setRepeatedWrapperField = function (t, n, r) {
        jspb.asserts.assertInstanceof(t, jspb.Message),
          (t.wrappers_ ||= {}),
          (r ||= []);
        for (var i = [], o = 0; o < r.length; o++) i[o] = r[o].toArray();
        return (t.wrappers_[n] = r), jspb.Message.setField(t, n, i);
      }),
      goog.exportProperty(
        jspb.Message,
        `setRepeatedWrapperField`,
        jspb.Message.setRepeatedWrapperField,
      ),
      (jspb.Message.addToRepeatedWrapperField = function (t, n, r, i, o) {
        jspb.Message.wrapRepeatedField_(t, i, n);
        var s = t.wrappers_[n];
        return (
          (s ||= t.wrappers_[n] = []),
          (r ||= new i()),
          (t = jspb.Message.getRepeatedField(t, n)),
          o == null
            ? (s.push(r), t.push(r.toArray()))
            : (s.splice(o, 0, r), t.splice(o, 0, r.toArray())),
          r
        );
      }),
      goog.exportProperty(
        jspb.Message,
        `addToRepeatedWrapperField`,
        jspb.Message.addToRepeatedWrapperField,
      ),
      (jspb.Message.toMap = function (t, n, r, i) {
        for (var o = {}, s = 0; s < t.length; s++)
          o[n.call(t[s])] = r ? r.call(t[s], i, t[s]) : t[s];
        return o;
      }),
      goog.exportProperty(jspb.Message, `toMap`, jspb.Message.toMap),
      (jspb.Message.prototype.syncMapFields_ = function () {
        if (this.wrappers_)
          for (var t in this.wrappers_) {
            var n = this.wrappers_[t];
            if (Array.isArray(n))
              for (var r = 0; r < n.length; r++) n[r] && n[r].toArray();
            else n && n.toArray();
          }
      }),
      (jspb.Message.prototype.toArray = function () {
        return this.syncMapFields_(), this.array;
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `toArray`,
        jspb.Message.prototype.toArray,
      ),
      jspb.Message.GENERATE_TO_STRING &&
        (jspb.Message.prototype.toString = function () {
          return this.syncMapFields_(), this.array.toString();
        }),
      (jspb.Message.prototype.getExtension = function (t) {
        if (this.extensionObject_) {
          this.wrappers_ ||= {};
          var n = t.fieldIndex;
          if (t.isRepeated) {
            if (t.isMessageType())
              return (
                this.wrappers_[n] ||
                  (this.wrappers_[n] = goog.array.map(
                    this.extensionObject_[n] || [],
                    function (n) {
                      return new t.ctor(n);
                    },
                  )),
                this.wrappers_[n]
              );
          } else if (t.isMessageType())
            return (
              !this.wrappers_[n] &&
                this.extensionObject_[n] &&
                (this.wrappers_[n] = new t.ctor(this.extensionObject_[n])),
              this.wrappers_[n]
            );
          return this.extensionObject_[n];
        }
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `getExtension`,
        jspb.Message.prototype.getExtension,
      ),
      (jspb.Message.prototype.setExtension = function (t, n) {
        (this.wrappers_ ||= {}),
          jspb.Message.maybeInitEmptyExtensionObject_(this);
        var r = t.fieldIndex;
        return (
          t.isRepeated
            ? ((n ||= []),
              t.isMessageType()
                ? ((this.wrappers_[r] = n),
                  (this.extensionObject_[r] = goog.array.map(n, function (t) {
                    return t.toArray();
                  })))
                : (this.extensionObject_[r] = n))
            : t.isMessageType()
              ? ((this.wrappers_[r] = n),
                (this.extensionObject_[r] = n && n.toArray()))
              : (this.extensionObject_[r] = n),
          this
        );
      }),
      goog.exportProperty(
        jspb.Message.prototype,
        `setExtension`,
        jspb.Message.prototype.setExtension,
      ),
      (jspb.Message.difference = function (t, n) {
        if (!(t instanceof n.constructor))
          throw Error(`Messages have different types.`);
        var r = t.toArray();
        n = n.toArray();
        var i = [],
          o = 0,
          s = r.length > n.length ? r.length : n.length;
        for (
          t.getJsPbMessageId() && ((i[0] = t.getJsPbMessageId()), (o = 1));
          o < s;
          o++
        )
          jspb.Message.compareFields(r[o], n[o]) || (i[o] = n[o]);
        return new t.constructor(i);
      }),
      goog.exportProperty(jspb.Message, `difference`, jspb.Message.difference),
      (jspb.Message.equals = function (t, n) {
        return (
          t == n ||
          (!(!t || !n) &&
            t instanceof n.constructor &&
            jspb.Message.compareFields(t.toArray(), n.toArray()))
        );
      }),
      goog.exportProperty(jspb.Message, `equals`, jspb.Message.equals),
      (jspb.Message.compareExtensions = function (t, n) {
        (t ||= {}), (n ||= {});
        var r = {},
          i;
        for (i in t) r[i] = 0;
        for (i in n) r[i] = 0;
        for (i in r) if (!jspb.Message.compareFields(t[i], n[i])) return !1;
        return !0;
      }),
      goog.exportProperty(
        jspb.Message,
        `compareExtensions`,
        jspb.Message.compareExtensions,
      ),
      (jspb.Message.compareFields = function (t, n) {
        if (t == n) return !0;
        if (!goog.isObject(t) || !goog.isObject(n))
          return (typeof t == `number` && isNaN(t)) ||
            (typeof n == `number` && isNaN(n))
            ? String(t) == String(n)
            : !1;
        if (t.constructor != n.constructor) return !1;
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && t.constructor === Uint8Array) {
          if (t.length != n.length) return !1;
          for (var r = 0; r < t.length; r++) if (t[r] != n[r]) return !1;
          return !0;
        }
        if (t.constructor === Array) {
          var i = void 0,
            o = void 0,
            s = Math.max(t.length, n.length);
          for (r = 0; r < s; r++) {
            var l = t[r],
              u = n[r];
            if (
              (l &&
                l.constructor == Object &&
                (jspb.asserts.assert(i === void 0),
                jspb.asserts.assert(r === t.length - 1),
                (i = l),
                (l = void 0)),
              u &&
                u.constructor == Object &&
                (jspb.asserts.assert(o === void 0),
                jspb.asserts.assert(r === n.length - 1),
                (o = u),
                (u = void 0)),
              !jspb.Message.compareFields(l, u))
            )
              return !1;
          }
          return i || o
            ? ((i ||= {}), (o ||= {}), jspb.Message.compareExtensions(i, o))
            : !0;
        }
        if (t.constructor === Object)
          return jspb.Message.compareExtensions(t, n);
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
      (jspb.Message.clone = function (t) {
        return jspb.Message.cloneMessage(t);
      }),
      goog.exportProperty(jspb.Message, `clone`, jspb.Message.clone),
      (jspb.Message.cloneMessage = function (t) {
        return new t.constructor(jspb.Message.clone_(t.toArray()));
      }),
      (jspb.Message.copyInto = function (t, n) {
        jspb.asserts.assertInstanceof(t, jspb.Message),
          jspb.asserts.assertInstanceof(n, jspb.Message),
          jspb.asserts.assert(
            t.constructor == n.constructor,
            `Copy source and target message should have the same type.`,
          ),
          (t = jspb.Message.clone(t));
        for (
          var r = n.toArray(), i = t.toArray(), o = (r.length = 0);
          o < i.length;
          o++
        )
          r[o] = i[o];
        (n.wrappers_ = t.wrappers_), (n.extensionObject_ = t.extensionObject_);
      }),
      goog.exportProperty(jspb.Message, `copyInto`, jspb.Message.copyInto),
      (jspb.Message.clone_ = function (t) {
        if (Array.isArray(t)) {
          for (var n = Array(t.length), r = 0; r < t.length; r++) {
            var i = t[r];
            i != null &&
              (n[r] =
                typeof i == `object`
                  ? jspb.Message.clone_(jspb.asserts.assert(i))
                  : i);
          }
          return n;
        }
        if (jspb.Message.SUPPORTS_UINT8ARRAY_ && t instanceof Uint8Array)
          return new Uint8Array(t);
        for (r in ((n = {}), t))
          (i = t[r]),
            i != null &&
              (n[r] =
                typeof i == `object`
                  ? jspb.Message.clone_(jspb.asserts.assert(i))
                  : i);
        return n;
      }),
      (jspb.Message.registerMessageType = function (t, n) {
        n.messageId = t;
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
        (exports.object = { extend: goog.object.extend }),
        (exports.typeOf = goog.typeOf));
  }),
  import_google_protobuf = __toESM(require_google_protobuf(), 1),
  ReaderProto = import_google_protobuf.BinaryReader.prototype,
  WriterProto = import_google_protobuf.BinaryWriter.prototype;
function RemapMetadataByField(t) {
  let n = {},
    { fields: r } = t;
  for (let t in r) {
    let i = r[t];
    n[i.n] = i;
  }
  return n;
}
function FromObject(t, n) {
  let { proto: r, fields: i } = t,
    o = new r();
  if (n == null) return o;
  for (let t in i) {
    let { n: r, c: s, r: l, d: u, q: p } = i[t];
    if (!Object.prototype.hasOwnProperty.call(n, t)) continue;
    let m = n[t];
    s
      ? l
        ? import_google_protobuf.Message.setRepeatedWrapperField(
            o,
            r,
            Array.isArray(m) ? m.map((t) => s.fromObject(t)) : [],
          )
        : import_google_protobuf.Message.setWrapperField(o, r, s.fromObject(m))
      : import_google_protobuf.Message.setField(o, r, m);
  }
  return o;
}
function ToObject(t, n, r) {
  let { proto: i, fields: o } = t,
    s = {};
  for (let t in o) {
    let { n: i, c: l, r: u, d: p, q: m } = o[t];
    if (l) {
      if (u)
        s[t] = import_google_protobuf.Message.toObjectList(
          import_google_protobuf.Message.getRepeatedWrapperField(r, l, i),
          l.toObject,
          n,
        );
      else {
        let o = import_google_protobuf.Message.getWrapperField(r, l, i, +!!m);
        o && (s[t] = l.toObject(n, o));
      }
    } else {
      let n = import_google_protobuf.Message.getFieldWithDefault(
        r,
        i,
        p === void 0 ? null : p,
      );
      (n !== null || m) && (s[t] = n);
    }
  }
  return n && (s.$jspbMessageInstance = r), s;
}
function DeserializeBinary(t, n, r) {
  for (; r.nextField() && !r.isEndGroup(); ) {
    let i = t[r.getFieldNumber()];
    if (i) {
      let { n: t, c: o, r: s, d: l, q: u, br: p } = i;
      if (o) {
        let i = new o();
        r.readMessage(i, o.deserializeBinaryFromReader),
          s
            ? import_google_protobuf.Message.addToRepeatedWrapperField(
                n,
                t,
                i,
                o,
              )
            : import_google_protobuf.Message.setWrapperField(n, t, i);
      } else if (p) {
        let i = p.call(r);
        s
          ? import_google_protobuf.Message.addToRepeatedField(n, t, i)
          : import_google_protobuf.Message.setField(n, t, i);
      } else
        console.assert(
          !!p,
          `Reader func not set for field number ${t} in class ${o}`,
        ),
          r.skipField();
    } else r.skipField();
  }
  return n;
}
function SerializeBinary(t, n, r) {
  let { fields: i } = t;
  for (let t in i) {
    let { n: o, c: s, r: l, d: u, q: p, bw: m } = i[t];
    if (s) {
      if (l) {
        let t = import_google_protobuf.Message.getRepeatedWrapperField(n, s, o);
        ((t && t.length) || p) &&
          r.writeRepeatedMessage(o, t, s.serializeBinaryToWriter);
      } else {
        let t = import_google_protobuf.Message.getWrapperField(n, s, o, +!!p);
        t && r.writeMessage(o, t, s.serializeBinaryToWriter);
      }
    } else if (m) {
      let t = import_google_protobuf.Message.getField(n, o);
      t !== void 0 && m.call(r, o, t);
    } else
      console.assert(
        !!m,
        `Writer func not set for field number ${o} in class ${s}`,
      );
  }
}
function AddAccessors(t) {
  let n = t.proto;
  for (let r in t.fields) {
    let i = t.fields[r],
      { n: o, c: s, r: l, d: u, q: p } = i;
    Object.prototype.hasOwnProperty.call(i, `d`)
      ? (n.prototype[r] = MakeBasicGetter(
          import_google_protobuf.Message.getFieldWithDefault,
          o,
          u,
        ))
      : s
        ? l
          ? (n.prototype[r] = MakeBasicGetter(
              import_google_protobuf.Message.getRepeatedWrapperField,
              s,
              o,
            ))
          : (n.prototype[r] = MakeWrapperGetter(s, o))
        : (n.prototype[r] = MakeBasicGetter(
            import_google_protobuf.Message.getField,
            o,
          )),
      s
        ? l
          ? (n.prototype[`set_${r}`] = MakeSetter(
              import_google_protobuf.Message.setRepeatedWrapperField,
              o,
            ))
          : (n.prototype[`set_${r}`] = MakeSetter(
              import_google_protobuf.Message.setWrapperField,
              o,
            ))
        : (n.prototype[`set_${r}`] = MakeSetter(
            import_google_protobuf.Message.setField,
            o,
          )),
      l && (n.prototype[`add_${r}`] = MakeAdder(o, s));
  }
}
function MakeBasicGetter(t, ...n) {
  return function () {
    return t(this, ...n);
  };
}
function MakeWrapperGetter(t, n) {
  return function (r = !0) {
    return import_google_protobuf.Message.getWrapperField(this, t, n, +!!r);
  };
}
function MakeSetter(t, n) {
  return function (r) {
    return t(this, n, r);
  };
}
function MakeAdder(t, n) {
  return n
    ? function (r, i) {
        return import_google_protobuf.Message.addToRepeatedWrapperField(
          this,
          t,
          r,
          n,
          i,
        );
      }
    : function (n, r) {
        import_google_protobuf.Message.addToRepeatedField(this, t, n, r);
      };
}
function AssertMsg(t, n, ...r) {
  console.assert
    ? r.length == 0
      ? console.assert(!!t, n)
      : console.assert(!!t, n, ...r)
    : t || console.warn(n, ...r);
}
function AssertNever(t, n, ...r) {
  AssertMsg(!1, n, ...r);
}
function MoveElement(t, n, r) {
  if (n >= 0 && r >= 0) {
    let i = t.splice(n, 1)[0];
    r >= t.length ? (t[r] = i) : t.splice(r, 0, i);
  }
  return t;
}
function FindAndRemove(t, n) {
  return FindAndRemoveWhere(t, (t) => n == t);
}
function FindAndRemoveWhere(t, n) {
  let r = t.findIndex(n);
  return r >= 0 && (t.splice(r, 1), !0);
}
async function GenerateSHA(t, n = `SHA-256`) {
  let r;
  return (
    (r = typeof t == `string` ? BufferFromString(t) : t),
    HexFromBuffer(await window.crypto.subtle.digest(n, r))
  );
}
function HexFromBuffer(t) {
  let n = new Uint8Array(t),
    r = ``;
  for (let t = 0; t < n.length; t++) r += (`00` + n[t].toString(16)).slice(-2);
  return r;
}
function BufferFromString(t) {
  return new TextEncoder().encode(t).buffer;
}
function bind(t, n, r) {
  return {
    get() {
      let t = r.value.bind(this);
      return (
        Object.prototype.hasOwnProperty.call(this, n) ||
          Object.defineProperty(this, n, { value: t }),
        t
      );
    },
  };
}
var CCallbackList = class {
    m_vecCallbacks = [];
    Register(t) {
      return (
        this.m_vecCallbacks.push(t),
        {
          Unregister: () => {
            FindAndRemove(this.m_vecCallbacks, t);
          },
        }
      );
    }
    Dispatch(...t) {
      for (let n of Array.from(this.m_vecCallbacks)) n(...t);
    }
    ClearAllCallbacks() {
      this.m_vecCallbacks = [];
    }
    CountRegistered() {
      return this.m_vecCallbacks.length;
    }
    static PromiseFromAny(t) {
      return new Promise((n) => {
        let r = [],
          i = () => {
            r.forEach((t) => t.Unregister()), n();
          };
        for (let n of t) r.push(n.Register(i));
      });
    }
  },
  CClientMetrics_ClientBootstrap_RequestInfo = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.original_hostname || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            original_hostname: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            actual_hostname: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            path: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            base_name: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            success: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            status_code: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            address_of_request_url: {
              n: 7,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            response_time_ms: {
              n: 8,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            bytes_received: {
              n: 9,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            num_retries: {
              n: 10,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_RequestInfo`;
    }
  },
  CClientMetrics_ClientBootstrap_Summary = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.launcher_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [7, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            launcher_type: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            steam_realm: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            beta_name: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            download_completed: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            total_time_ms: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            manifest_requests: {
              n: 7,
              c: CClientMetrics_ClientBootstrap_RequestInfo,
              r: !0,
              q: !0,
            },
            package_requests: {
              n: 8,
              c: CClientMetrics_ClientBootstrap_RequestInfo,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_Summary`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Counts = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.class_100 || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            class_100: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            class_200: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            class_300: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            class_400: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            class_500: {
              n: 5,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            no_response: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            class_unknown: {
              n: 7,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Counts`;
    }
  },
  CClientMetrics_ContentDownloadResponse_HostCounts = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.hostname || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            hostname: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            source_type: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            counts: { n: 3, c: CClientMetrics_ContentDownloadResponse_Counts },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_HostCounts`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Hosts = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.hosts || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            hosts: {
              n: 1,
              c: CClientMetrics_ContentDownloadResponse_HostCounts,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Hosts`;
    }
  },
  CMsgIPAddress = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.v4 || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            v4: {
              n: 1,
              br: ReaderProto.readFixed32,
              bw: WriterProto.writeFixed32,
            },
            v6: { n: 2, br: ReaderProto.readBytes, bw: WriterProto.writeBytes },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CMsgIPAddress`;
    }
  },
  CMsgGCRoutingProtoBufHeader = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.dst_gcid_queue || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            dst_gcid_queue: {
              n: 1,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            dst_gc_dir_index: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CMsgGCRoutingProtoBufHeader`;
    }
  },
  CMsgProtoBufHeader = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.steamid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [27, 41],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            client_sessionid: {
              n: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            routing_appid: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            jobid_source: {
              n: 10,
              d: `18446744073709551615`,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            jobid_target: {
              n: 11,
              d: `18446744073709551615`,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            target_job_name: {
              n: 12,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            seq_num: {
              n: 24,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            eresult: {
              n: 13,
              d: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            error_message: {
              n: 14,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            ip: {
              n: 15,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            ip_v6: {
              n: 29,
              br: ReaderProto.readBytes,
              bw: WriterProto.writeBytes,
            },
            auth_account_flags: {
              n: 16,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            token_source: {
              n: 22,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            admin_spoofing_user: {
              n: 23,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            transport_error: {
              n: 17,
              d: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            messageid: {
              n: 18,
              d: `18446744073709551615`,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            publisher_group_id: {
              n: 19,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            sysid: {
              n: 20,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            webapi_key_id: {
              n: 25,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            is_from_external_source: {
              n: 26,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            forward_to_sysid: {
              n: 27,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            cm_sysid: {
              n: 28,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            launcher_type: {
              n: 31,
              d: 0,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            realm: {
              n: 32,
              d: 0,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            timeout_ms: {
              n: 33,
              d: -1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            debug_source: {
              n: 34,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            debug_source_string_index: {
              n: 35,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            token_id: {
              n: 36,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            routing_gc: { n: 37, c: CMsgGCRoutingProtoBufHeader },
            session_disposition: {
              n: 38,
              d: 0,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            wg_token: {
              n: 39,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            webui_auth_key: {
              n: 40,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            exclude_client_sessionids: {
              n: 41,
              r: !0,
              q: !0,
              br: ReaderProto.readInt32,
              pbr: ReaderProto.readPackedInt32,
              bw: WriterProto.writeRepeatedInt32,
            },
            admin_request_spoofing_steamid: {
              n: 43,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            is_valveds: {
              n: 44,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            trace_tag: {
              n: 45,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            wg_msg_trace_flags: {
              n: 46,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            wg_msg_trace_instance: {
              n: 47,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            wg_msg_trace_gid: {
              n: 48,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            wg_msg_trace_token: {
              n: 49,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            wg_msg_trace_steamid: {
              n: 50,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            wg_msg_trace_status: {
              n: 51,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            trace_flags: {
              n: 52,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            browserapi_site: {
              n: 53,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CMsgProtoBufHeader`;
    }
  },
  CCDDBAppDetailCommon = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [17, 18],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            name: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            icon: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            tool: { n: 6, br: ReaderProto.readBool, bw: WriterProto.writeBool },
            demo: { n: 7, br: ReaderProto.readBool, bw: WriterProto.writeBool },
            media: {
              n: 8,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            community_visible_stats: {
              n: 9,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            friendly_name: {
              n: 10,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            propagation: {
              n: 11,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            has_adult_content: {
              n: 12,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            is_visible_in_steam_china: {
              n: 13,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            app_type: {
              n: 14,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            has_adult_content_sex: {
              n: 15,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            has_adult_content_violence: {
              n: 16,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            content_descriptorids: {
              n: 17,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            content_descriptorids_including_dlc: {
              n: 18,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CCDDBAppDetailCommon`;
    }
  },
  CLocalizationToken = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.language || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            localized_string: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CLocalizationToken`;
    }
  },
  CClanEventUserNewsTuple = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.clanid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clanid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            event_gid: {
              n: 2,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            rtime_start: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            rtime_end: {
              n: 5,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            priority_score: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            type: {
              n: 7,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            clamp_range_slot: {
              n: 8,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            appid: {
              n: 9,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            rtime32_last_modified: {
              n: 10,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClanEventUserNewsTuple`;
    }
  },
  CClanMatchEventByRange = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.rtime_before || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            rtime_before: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            rtime_after: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            qualified: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            events: { n: 4, c: CClanEventUserNewsTuple, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClanMatchEventByRange`;
    }
  },
  UserContentDescriptorPreferences = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.content_descriptors_to_exclude || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            content_descriptors_to_exclude: {
              n: 1,
              c: UserContentDescriptorPreferences_ContentDescriptor,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `UserContentDescriptorPreferences`;
    }
  },
  UserContentDescriptorPreferences_ContentDescriptor = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.content_descriptorid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            content_descriptorid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            timestamp_added: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `UserContentDescriptorPreferences_ContentDescriptor`;
    }
  },
  UserSystemInformation = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.manufacturer || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            manufacturer: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            model: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            dx_video_card: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            dx_vendorid: {
              n: 4,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            dx_deviceid: {
              n: 5,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            num_gpu: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            system_ram: {
              n: 7,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            os: {
              n: 8,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            cpu_vendor: {
              n: 9,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            cpu_name: {
              n: 10,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            gaming_device_type: {
              n: 11,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            dx_driver_version: {
              n: 12,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            adapter_description: {
              n: 14,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            driver_version: {
              n: 15,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            driver_date: {
              n: 16,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            vram_size: {
              n: 17,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            screen_width: {
              n: 18,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            screen_height: {
              n: 19,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            precise_frame_rate: {
              n: 20,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `UserSystemInformation`;
    }
  },
  GamePerformanceSettings = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.setting || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            setting: {
              n: 1,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            game_resolution_width: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            game_resolution_height: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `GamePerformanceSettings`;
    }
  },
  CClientMetrics_AppInterfaceCreation = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.raw_version || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            raw_version: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            requested_interface_type: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceCreation`;
    }
  },
  CClientMetrics_AppInterfaceMethodCounts = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.interface_name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            interface_name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            method_name: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            call_count: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceMethodCounts`;
    }
  },
  CClientMetrics_AppInterfaceStats_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.game_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: {
              n: 1,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            interfaces_created: {
              n: 2,
              c: CClientMetrics_AppInterfaceCreation,
              r: !0,
              q: !0,
            },
            methods_called: {
              n: 3,
              c: CClientMetrics_AppInterfaceMethodCounts,
              r: !0,
              q: !0,
            },
            session_length_seconds: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceStats_Notification`;
    }
  },
  CClientMetrics_IPv6Connectivity_Result = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.protocol_tested || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            protocol_tested: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            connectivity_state: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_IPv6Connectivity_Result`;
    }
  },
  CClientMetrics_IPv6Connectivity_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.cell_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            cell_id: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            results: {
              n: 2,
              c: CClientMetrics_IPv6Connectivity_Result,
              r: !0,
              q: !0,
            },
            private_ip_is_rfc6598: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_IPv6Connectivity_Notification`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.product || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [3, 4, 5],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            product: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            version: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            routes: {
              n: 3,
              c: CClientMetrics_ReportReactUsage_Notification_RouteData,
              r: !0,
              q: !0,
            },
            components: {
              n: 4,
              c: CClientMetrics_ReportReactUsage_Notification_ComponentData,
              r: !0,
              q: !0,
            },
            actions: {
              n: 5,
              c: CClientMetrics_ReportReactUsage_Notification_ActionData,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_RouteData = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.route || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            route: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            count: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_RouteData`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_ComponentData = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.component || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            component: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            count: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_ComponentData`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_ActionData = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.action || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            action: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            count: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_ActionData`;
    }
  },
  CClientMetrics_ReportClientError_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.product || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            product: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            version: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            errors: {
              n: 3,
              c: CClientMetrics_ReportClientError_Notification_Error,
              r: !0,
              q: !0,
            },
            tags: {
              n: 4,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportClientError_Notification`;
    }
  },
  CClientMetrics_ReportClientError_Notification_Error = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.identifier || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            identifier: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            message: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            count: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            context: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            url: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportClientError_Notification_Error`;
    }
  },
  CClientMetrics_SteamPipeWorkStats_Operation = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            type: { n: 1, br: ReaderProto.readEnum, bw: WriterProto.writeEnum },
            num_ops: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            num_bytes: {
              n: 3,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            busy_time_ms: {
              n: 4,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            idle_time_ms: {
              n: 5,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            sum_run_time_ms: {
              n: 6,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            sum_wait_time_ms: {
              n: 7,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_SteamPipeWorkStats_Operation`;
    }
  },
  CClientMetrics_SteamPipeWorkStats_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            depotid: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            work_type: {
              n: 3,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            operations: {
              n: 4,
              c: CClientMetrics_SteamPipeWorkStats_Operation,
              r: !0,
              q: !0,
            },
            hardware_type: {
              n: 5,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_SteamPipeWorkStats_Notification`;
    }
  },
  CClientMetrics_ClientBootstrap_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.summary || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            summary: { n: 1, c: CClientMetrics_ClientBootstrap_Summary },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_Notification`;
    }
  },
  CClientMetrics_DownloadRates_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.cell_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            cell_id: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            stats: {
              n: 2,
              c: CClientMetrics_DownloadRates_Notification_StatsInfo,
              r: !0,
              q: !0,
            },
            throttling_kbps: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            os_type: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            device_type: {
              n: 5,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_DownloadRates_Notification`;
    }
  },
  CClientMetrics_DownloadRates_Notification_StatsInfo = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.source_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            source_type: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            source_id: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            bytes: {
              n: 3,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            host_name: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            microseconds: {
              n: 5,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            used_ipv6: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            proxied: {
              n: 7,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            used_http2: {
              n: 8,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            cache_hits: {
              n: 9,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            cache_misses: {
              n: 10,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            hit_bytes: {
              n: 11,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            miss_bytes: {
              n: 12,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            chunks_scored: {
              n: 13,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            sum_chunk_scores: {
              n: 14,
              br: ReaderProto.readDouble,
              bw: WriterProto.writeDouble,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_DownloadRates_Notification_StatsInfo`;
    }
  },
  CClientMetrics_ContentValidation_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.validation_result || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            validation_result: {
              n: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            app_id: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            staged_files: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            user_initiated: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            early_out: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            chunks_scanned: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            chunks_corrupt: {
              n: 7,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            bytes_scanned: {
              n: 8,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            chunk_bytes_corrupt: {
              n: 9,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            total_file_size_corrupt: {
              n: 10,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ContentValidation_Notification`;
    }
  },
  CClientMetrics_CloudAppSyncStats_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.app_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            app_id: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            platform_type: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            preload: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            blocking_app_launch: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            files_uploaded: {
              n: 5,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            files_downloaded: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            files_deleted: {
              n: 7,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            bytes_uploaded: {
              n: 8,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            bytes_downloaded: {
              n: 9,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_total: {
              n: 10,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_init_caches: {
              n: 11,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_validate_state: {
              n: 12,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_ac_launch: {
              n: 13,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_ac_prep_user_files: {
              n: 14,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_ac_exit: {
              n: 15,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_build_sync_list: {
              n: 16,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_delete_files: {
              n: 17,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_download_files: {
              n: 18,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            microsec_upload_files: {
              n: 19,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            hardware_type: {
              n: 20,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            files_managed: {
              n: 21,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_CloudAppSyncStats_Notification`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Counts_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.cell_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            cell_id: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            data: { n: 2, c: CClientMetrics_ContentDownloadResponse_Hosts },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Counts_Notification`;
    }
  },
  CClientMetrics_ClipShare_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.eresult || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            eresult: {
              n: 1,
              d: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            share_method: {
              n: 2,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            seconds: {
              n: 3,
              br: ReaderProto.readFloat,
              bw: WriterProto.writeFloat,
            },
            bytes: {
              n: 4,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            gameid: {
              n: 5,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ClipShare_Notification`;
    }
  },
  CClientMetrics_ClipRange_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.original_range_method || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            original_range_method: {
              n: 1,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            start: {
              n: 2,
              c: CClientMetrics_ClipRange_Notification_RelativeRangeEdge,
            },
            end: {
              n: 3,
              c: CClientMetrics_ClipRange_Notification_RelativeRangeEdge,
            },
            seconds: {
              n: 4,
              br: ReaderProto.readFloat,
              bw: WriterProto.writeFloat,
            },
            gameid: {
              n: 5,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ClipRange_Notification`;
    }
  },
  CClientMetrics_ClipRange_Notification_RelativeRangeEdge = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.original_range_method || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            original_range_method: {
              n: 1,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            latest_range_method: {
              n: 2,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            delta_ms: {
              n: 3,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ClipRange_Notification_RelativeRangeEdge`;
    }
  },
  CClientMetrics_EndGameRecording_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.recording_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            recording_type: {
              n: 1,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            seconds: {
              n: 2,
              br: ReaderProto.readFloat,
              bw: WriterProto.writeFloat,
            },
            bytes: {
              n: 3,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
            gameid: {
              n: 4,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            instant_clip: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_EndGameRecording_Notification`;
    }
  },
  CClientMetrics_GamePerformance_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.frame_rates || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            frame_rates: {
              n: 2,
              c: CClientMetrics_GamePerformance_Notification_FrameRate,
              r: !0,
              q: !0,
            },
            system_info: { n: 3, c: UserSystemInformation },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_GamePerformance_Notification`;
    }
  },
  CClientMetrics_GamePerformance_Notification_FrameRate = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.gameid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gameid: {
              n: 1,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            frame_rate: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            session_seconds: {
              n: 3,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            framegen_frame_rate: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            game_settings: { n: 5, c: GamePerformanceSettings },
            seconds_since_active: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            frame_rate_limit: {
              n: 7,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_GamePerformance_Notification_FrameRate`;
    }
  },
  CClientMetrics_ReportClientArgs_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.client_args || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            client_args: {
              n: 1,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
            gpu_webview_regkey_disabled: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            suppress_gpu_chrome: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            browser_not_supported: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            hw_accel_video_regkey_disabled: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            mini_mode_enabled: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            fps_counter_enabled: {
              n: 7,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            library_low_bandwidth_mode_enabled: {
              n: 8,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            library_low_perf_mode_enabled: {
              n: 9,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            gr_mode: {
              n: 10,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportClientArgs_Notification`;
    }
  },
  CClientMetrics_ReportAccessibilitySettings_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.accessibility_desktop_ui_scale || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accessibility_desktop_ui_scale: {
              n: 1,
              br: ReaderProto.readFloat,
              bw: WriterProto.writeFloat,
            },
            accessibility_screen_reader_enabled: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            accessibility_high_contrast_mode: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            accessibility_reduce_motion: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            accessibility_color_filter_name: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportAccessibilitySettings_Notification`;
    }
  },
  CClientMetrics_ReportLinuxStats_Notification = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.glibc_version_major || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            glibc_version_major: {
              n: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            glibc_version_minor: {
              n: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            account_type: {
              n: 3,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            launcher_type: {
              n: 4,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            game_server_appid: {
              n: 5,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            process_name: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            kernel_version_major: {
              n: 7,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            kernel_version_minor: {
              n: 8,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CClientMetrics_ReportLinuxStats_Notification`;
    }
  },
  ClientMetricsService;
(function (t) {
  function n(t, n) {
    return t.SendNotification(
      `ClientMetrics.ClientAppInterfaceStatsReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_AppInterfaceStats_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ClientAppInterfaceStatsReport = n;
  function r(t, n) {
    return t.SendNotification(
      `ClientMetrics.ClientIPv6ConnectivityReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_IPv6Connectivity_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ClientIPv6ConnectivityReport = r;
  function i(t, n) {
    return t.SendNotification(
      `ClientMetrics.SteamPipeWorkStatsReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_SteamPipeWorkStats_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.SteamPipeWorkStatsReport = i;
  function o(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportReactUsage#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportReactUsage_Notification,
        n,
      ),
      {
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  t.ReportReactUsage = o;
  function s(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportClientError#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportClientError_Notification,
        n,
      ),
      { ePrivilege: 2, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  t.ReportClientError = s;
  function l(t, n) {
    return t.SendNotification(
      `ClientMetrics.ClientBootstrapReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ClientBootstrap_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ClientBootstrapReport = l;
  function u(t, n) {
    return t.SendNotification(
      `ClientMetrics.ClientDownloadRatesReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_DownloadRates_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ClientDownloadRatesReport = u;
  function p(t, n) {
    return t.SendNotification(
      `ClientMetrics.ClientContentValidationReport#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ContentValidation_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ClientContentValidationReport = p;
  function m(t, n) {
    return t.SendNotification(
      `ClientMetrics.ClientCloudAppSyncStats#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_CloudAppSyncStats_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ClientCloudAppSyncStats = m;
  function h(t, n) {
    return t.SendNotification(
      `ClientMetrics.ClientDownloadResponseCodeCounts#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ContentDownloadResponse_Counts_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ClientDownloadResponseCodeCounts = h;
  function g(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportClientArgs#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportClientArgs_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ReportClientArgs = g;
  function _(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportLinuxStats#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportLinuxStats_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ReportLinuxStats = _;
  function v(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportAccessibilitySettings#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_ReportAccessibilitySettings_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ReportAccessibilitySettings = v;
  function y(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportClipShare#1`,
      initProtoBufMsgForServiceMethod(CClientMetrics_ClipShare_Notification, n),
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  t.ReportClipShare = y;
  function x(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportClipRange#1`,
      initProtoBufMsgForServiceMethod(CClientMetrics_ClipRange_Notification, n),
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  t.ReportClipRange = x;
  function S(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportEndGameRecording#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_EndGameRecording_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ReportEndGameRecording = S;
  function C(t, n) {
    return t.SendNotification(
      `ClientMetrics.ReportGamePerformance#1`,
      initProtoBufMsgForServiceMethod(
        CClientMetrics_GamePerformance_Notification,
        n,
      ),
      { ePrivilege: 1 },
    );
  }
  t.ReportGamePerformance = C;
})((ClientMetricsService ||= {}));
var import_react = __toESM(require_react(), 1),
  addEventListener =
    window.addEventListener ||
    (globalThis && globalThis.addEventListener) ||
    (() => {}),
  g_rgPreInitQueue = [],
  g_onReportableError = (t, n, r) =>
    g_rgPreInitQueue.push({
      error: t,
      cCallsitesToIgnore: n,
      strComponentStack: r,
    }),
  g_unCollectionTimer,
  bReportingEnabled = !0,
  AssertionError = class extends Error {
    constructor(...t) {
      super(...t), (this.name = `Assertion Failed`);
    }
  };
{
  let t = console.assert;
  console.assert = (n, r, ...i) => {
    if (!n) {
      let t = GetReactComponentStack();
      g_onReportableError(
        new AssertionError(ConvertConsoleParams(r, ...i)),
        2,
        t,
      );
    }
    t.apply(console, [n, r, ...i]);
  };
  let n = console.error;
  (console.error = (t, ...r) => {
    let i = GetReactComponentStack();
    g_onReportableError(Error(ConvertConsoleParams(t, ...r)), 1, i),
      n.apply(console, [t, ...r]);
  }),
    (console.clogerror = (t, r, ...i) => {
      let o = GetReactComponentStack();
      g_onReportableError(Error(ConvertConsoleParams(r, ...i)), t + 1, o),
        n.apply(console, [r, ...i]);
    }),
    addEventListener(`error`, (t) => {
      g_onReportableError(t.error, 0);
    }),
    addEventListener(`unhandledrejection`, (t) => {
      g_onReportableError(t.reason, 0);
    }),
    (g_unCollectionTimer = window.setTimeout(() => {
      (g_rgPreInitQueue = []), (g_onReportableError = () => {});
    }, 3e4));
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
    let t =
      import_react.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    if (t && typeof t == `object` && typeof t.getCurrentStack == `function`) {
      let n = t.getCurrentStack();
      if (typeof n == `string`) return n;
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
  constructor(t = !0) {
    t
      ? (g_rgPreInitQueue.forEach(
          ({ error: t, cCallsitesToIgnore: n, strComponentStack: r }) =>
            this.ReportError(t, {
              cCallsitesToIgnore: n,
              strComponentStack: r,
            }),
        ),
        (g_onReportableError = (t, n, r) =>
          this.ReportError(t, { cCallsitesToIgnore: n, strComponentStack: r })))
      : (g_onReportableError = () => {}),
      (g_rgPreInitQueue = []),
      clearTimeout(g_unCollectionTimer),
      window.setTimeout(() => {
        this.m_bInitialized ||
          ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
      }, 3e4);
  }
  Init(t, n, r, i = {}) {
    (this.m_bInitialized = !0),
      (this.m_strProduct = t),
      (this.m_strVersion = n),
      (this.m_transport = r),
      i.fnGetReportingInterval &&
        (this.m_fnGetReportingInterval = i.fnGetReportingInterval),
      i.fnGetReportTags && (this.m_fnGetReportTags = i.fnGetReportTags),
      i.fnGetURL && (this.m_fnGetURL = i.fnGetURL),
      i.strDisplayVersion && (this.strDisplayVersion = i.strDisplayVersion),
      (this.m_bEnabled ||=
        (console.error(
          `Error reporting was initialized after being disabled, possibly dropping errors.`,
        ),
        !0)),
      this.m_rgErrorQueue.length &&
        (this.SendErrorReports(this.m_rgErrorQueue),
        (this.m_rgErrorQueue = []));
  }
  SetGetURL(t) {
    this.m_fnGetURL = t;
  }
  async ReportError(t, n) {
    if (!t)
      return (
        console.warn(
          `Failed to report error: ReportError() was called without an error to report.`,
        ),
        null
      );
    try {
      let r = { ...g_defaultErrorReportOptions, ...n };
      if (!this.m_bEnabled) return null;
      let i = await NormalizeStack(t, r);
      return i
        ? (r.cCallsitesToIgnore && i.message.splice(1, r.cCallsitesToIgnore),
          r.strComponentStack && (i.strComponentStack = r.strComponentStack),
          (i.strUrl = this.m_fnGetURL()),
          (i.strDisplayVersion = this.strDisplayVersion),
          this.SendErrorReport(i),
          i)
        : null;
    } catch (t) {
      return console.log(`Failed to report error: ${t}`), null;
    }
  }
  PauseReportingForDuration(t) {
    this.PauseReporting(),
      (this.m_pauseTimer = window.setTimeout(() => this.ResumeReporting(), t));
  }
  PauseReporting() {
    (this.m_bReportingPaused = !0), window.clearTimeout(this.m_pauseTimer);
  }
  ResumeReporting() {
    (this.m_bReportingPaused = !1),
      window.clearTimeout(this.m_pauseTimer),
      this.ScheduleSend();
  }
  BIsBlacklisted(t) {
    for (let n of t.message) {
      let r = JSON.stringify(n);
      for (let n of g_rgBlacklistPatterns) {
        let i = new RegExp(n);
        if (r.match(i))
          return console.warn(`Report`, t, `matched regex`, n), !0;
      }
    }
    return !1;
  }
  SendErrorReport(t) {
    this.BIsBlacklisted(t) ||
      (this.m_transport ? this.QueueReport(t) : this.m_rgErrorQueue.push(t));
  }
  QueueReport(t) {
    this.m_rgErrorQueue.push(t), this.m_bReportingPaused || this.ScheduleSend();
  }
  ScheduleSend() {
    this.m_sendTimer ||= window.setTimeout(() => {
      this.SendErrorReports(this.m_rgErrorQueue),
        (this.m_rgErrorQueue = []),
        (this.m_sendTimer = null);
    }, this.m_fnGetReportingInterval());
  }
  SendErrorReports(t) {
    if (!t || !t.length) return;
    let n = CProtoBufMsg.Init(CClientMetrics_ReportClientError_Notification),
      r = t.reduce(
        (t, n) => (
          t[n.identifier]
            ? t[n.identifier].count++
            : (t[n.identifier] = { report: n, count: 1 }),
          t
        ),
        {},
      ),
      i = Object.keys(r).map((t) => {
        let { report: n, count: i } = r[t],
          o = new CClientMetrics_ReportClientError_Notification_Error();
        o.set_count(i),
          o.set_identifier(n.identifier + ` ` + n.identifierHash),
          o.set_message(JSON.stringify(n.message));
        let s;
        return (
          n.strComponentStack &&
            ((s ??= {}), (s.componentStack = n.strComponentStack)),
          n.strDisplayVersion &&
            ((s ??= {}), (s.strDisplayVersion = n.strDisplayVersion)),
          s && o.set_context(JSON.stringify(s)),
          n.strUrl && o.set_url(n.strUrl),
          o
        );
      });
    n.Body().set_product(this.m_strProduct),
      n.Body().set_version(this.m_strVersion),
      n.Body().set_errors(i);
    for (let t of this.m_fnGetReportTags()) n.Body().add_tags(t);
    ClientMetricsService.ReportClientError(this.m_transport, n);
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
function ConvertConsoleParams(t, ...n) {
  return typeof t == `string` && n.length === 0
    ? t
    : [t, ...n]
        .map((t) => {
          try {
            let n = String(t);
            return n == `[object Object]` && (n = JSON.stringify(t)), n;
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
function NormalizeStack(t, n) {
  try {
    return t.stack && t.stack.match(regexChromeEdgeStack)
      ? NormalizeV8LikeStack(t, n)
      : t.stack && t.stack.match(regexFirefoxSafariStack)
        ? NormalizeWebkitLikeStack(t, n)
        : t.stack && t.stack.match(regexReactNativeStack)
          ? NormalizeReactNativeLikeStack(t, n)
          : ((bHaveWarnedAboutUnknownStack ||=
              (console.warn(
                `Error reporter does not know how to parse generated stack:`,
              ),
              console.warn(t.stack),
              !0)),
            null);
  } catch (t) {
    return console.warn(`Failed to normalize error stack: ${t}`), null;
  }
}
async function NormalizeV8LikeStack(t, n) {
  let { cCallsitesToIgnore: r, bIncludeMessageInIdentifier: i } = n,
    { message: o, stack: s } = t,
    l =
      s?.split(`
`) ?? [],
    u = StripLine(l.filter((t) => !!t.match(regexChromeEdgeStack))[r]);
  i && (u = `${u} ${o}`);
  let p = l
    .map((t) => {
      let n = t.match(/(.*)\((.*):(\d+):(\d+)\)/);
      if (
        ((n && n.length == 5) || (n = t.match(/(.*at )(http.*):(\d+):(\d+)/)),
        !n)
      )
        return t;
      if (n.length === 5) {
        let [t, r, i, o, s] = n,
          l = parseInt(o),
          u = parseInt(s);
        if (!isNaN(l) && !isNaN(u)) return [r, i, l, u];
      }
      return t;
    })
    .filter((t) => !!t);
  return {
    identifier: u,
    identifierHash: await GenerateShortHash(u),
    message: p,
  };
}
function StripLine(t) {
  return StripDomain(StripQueryParams(t));
}
function StripQueryParams(t) {
  let n = t.lastIndexOf(`?`);
  if (n === -1) return t;
  let r = t.indexOf(`:`, n);
  return r === -1 ? t : t.slice(0, n) + t.slice(r);
}
function StripDomain(t) {
  let n = t.indexOf(`https://`);
  if (n === -1) return t;
  let r = t.indexOf(`/`, n + 8);
  return r === -1 ? t : t.slice(0, n) + t.slice(r);
}
async function NormalizeWebkitLikeStack(t, n) {
  let { cCallsitesToIgnore: r, bIncludeMessageInIdentifier: i } = n,
    o =
      t.stack?.split(`
`) ?? [],
    s = StripLine(o.filter((t) => !!t.match(regexFirefoxSafariStack))[r]);
  i && (s = `${s} ${t.message}`);
  let l = o
    .map((t) => {
      let n = t.match(/(.*@)?(.*):(\d+):(\d+)/);
      if (!n) return t;
      if (n.length === 5) {
        let [t, r, i, o, s] = n,
          l = parseInt(o),
          u = parseInt(s);
        if (!isNaN(l) && !isNaN(u)) return [r, i, l, u];
      }
      return t;
    })
    .filter((t) => !!t);
  return {
    identifier: s,
    identifierHash: await GenerateShortHash(s),
    message: [t.message, ...l],
  };
}
async function NormalizeReactNativeLikeStack(t, n) {
  let { bIncludeMessageInIdentifier: r, cCallsitesToIgnore: i } = n,
    o =
      t.stack?.split(`
`) ?? [],
    s = o[i],
    l = s.split(`/`),
    u = l[l.length - 1];
  s.indexOf(`@`) > -1 && (u = s.split(`@`)[0] + `@` + u),
    r && (u = `${u} ${t.message}`);
  let p = o
    .map((t) => {
      let n = t.match(/(.*@)?(.*):(\d+):(\d+)/);
      if (!n) return t;
      if (n.length === 5) {
        let [t, r, i, o, s] = n,
          l = parseInt(o),
          u = parseInt(s);
        if (!isNaN(l) && !isNaN(u)) return [r, i, l, u];
      }
      return t;
    })
    .filter((t) => !!t);
  return {
    identifier: u,
    identifierHash: await GenerateShortHash(u),
    message: [t.message, ...p],
  };
}
var store,
  ErrorReportingStore = () => ((store ||= new CErrorReportingStore()), store);
async function GenerateShortHash(t) {
  try {
    return (await GenerateSHA(t)).slice(0, 16);
  } catch {
    return ``;
  }
}
function GetDefaultReportingInterval() {
  return 1e4;
}
function RandomInt(t, n) {
  return (
    (t = Math.ceil(t)),
    (n = Math.floor(n)),
    Math.floor(Math.random() * (n - t + 1)) + t
  );
}
function Clamp(t, n, r) {
  return t == null || isNaN(t) ? t : Math.max(n, Math.min(r, t));
}
function RemapVal(t, n, r, i, o) {
  return i + ((o - i) * (t - n)) / (r - n);
}
function RemapValClamped(t, n, r, i, o) {
  return Clamp(
    i + ((o - i) * (t - n)) / (r - n),
    Math.min(i, o),
    Math.max(i, o),
  );
}
var k_LinkRegex =
    /((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\^-~]+[.,](?:(?:[a-zA-Z]{2,4}[.?]*[/\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>[\]]*[^\s"<>[\],.ː:])?)/,
  k_RegExp_KnownSchemes = /^(steam|ftp|https?):\/\//;
function EnsureKnownURLScheme(t) {
  return k_RegExp_KnownSchemes.test(t) ? t : `https://` + t;
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
    constructor(t, n = 0, r) {
      (this.m_nOffset = n || 0),
        t instanceof Uint8Array || t instanceof DataView
          ? ((this.m_nLength = r || t.byteLength - this.m_nOffset),
            (this.m_nOffset += t.byteOffset),
            (this.m_viewPacket = new DataView(
              t.buffer,
              this.m_nOffset,
              this.m_nLength,
            )))
          : ((this.m_nLength = r || t.byteLength - this.m_nOffset),
            (this.m_viewPacket = new DataView(
              t,
              this.m_nOffset,
              this.m_nLength,
            ))),
        (this.m_rgubPacket = new Uint8Array(
          this.m_viewPacket.buffer,
          this.m_viewPacket.byteOffset,
          this.m_viewPacket.byteLength,
        )),
        (this.m_iGet = 0),
        (this.m_iPut = 0);
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
    GetUint32(t = !0) {
      let n = this.m_viewPacket.getUint32(this.m_iGet, t);
      return (this.m_iGet += 4), n;
    }
    SeekGetHead(t = 0) {
      this.m_iGet = t || 0;
    }
    SeekGetCurrent(t) {
      this.m_iGet += t;
    }
    TellPut() {
      return this.m_iPut + this.m_viewPacket.byteOffset;
    }
    TellMaxPut() {
      return this.m_viewPacket.byteLength;
    }
    PutUint8(t) {
      this.m_viewPacket.setUint8(this.m_iPut++, t);
    }
    PutUint32(t, n = !0) {
      this.m_viewPacket.setUint32(this.m_iPut, t, n), (this.m_iPut += 4);
    }
    PutBytes(t) {
      this.m_rgubPacket.set(t, this.m_iPut), (this.m_iPut += t.length);
    }
    SeekPut(t) {
      this.m_iPut += t;
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
function BinaryToHex(t) {
  let n = ``;
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    n += rgHexDictionary[i >>> 4] + rgHexDictionary[i & 15];
  }
  return n;
}
var k_uFixedHeaderSize = 8,
  CBaseProtoBufMsg = class t {
    static InitHeaderFromPacket(n) {
      return new t(void 0, n);
    }
    m_eMsg;
    m_bValid;
    m_netPacket;
    m_cubHeader;
    m_header;
    m_body;
    constructor(t, n, r, i, o, s) {
      if (i)
        (this.m_eMsg = i.m_eMsg),
          (this.m_bValid = i.m_bValid),
          this.m_bValid &&
            ((this.m_netPacket = i.m_netPacket),
            (this.m_cubHeader = i.m_cubHeader),
            (this.m_header = i.m_header),
            this.InitForType(r));
      else {
        if (
          ((this.m_header = new CMsgProtoBufHeader(null)),
          (this.m_bValid = !0),
          n)
        ) {
          if (
            ((this.m_netPacket = n),
            this.m_netPacket.SeekGetHead(),
            (this.m_eMsg = this.m_netPacket.GetUint32()),
            this.m_eMsg & 2147483648)
          ) {
            (this.m_eMsg &= 2147483647),
              (this.m_cubHeader = this.m_netPacket.GetUint32());
            try {
              CMsgProtoBufHeader.deserializeBinaryFromReader(
                this.m_header,
                new import_google_protobuf.BinaryReader(
                  this.m_netPacket.GetPacket(),
                  this.m_netPacket.TellGet(),
                  this.m_cubHeader,
                ),
              ),
                this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                r && this.InitForType(r);
            } catch (t) {
              console.error(`Exception deserializing protobuf`, t),
                (this.m_bValid = !1);
            }
          } else this.m_bValid = !1;
        } else
          t && (this.m_eMsg = t),
            s && r
              ? (this.m_body = r.fromObject(s))
              : r && (this.m_body = new r());
        o && this.m_header.set_jobid_target(o.Hdr().jobid_target());
      }
    }
    InitForType(t) {
      (this.m_body = new t()),
        this.m_netPacket &&
          (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
          this.ReadBodyFromBuffer(t, this.m_netPacket));
    }
    ReadBodyFromBuffer(t, n) {
      try {
        t.deserializeBinaryFromReader(
          this.m_body,
          new import_google_protobuf.BinaryReader(
            n.GetPacket(),
            n.TellGet(),
            n.GetCountBytesRemaining(),
          ),
        );
      } catch (t) {
        this.m_bValid = !1;
        let n = ErrorReportingStore(),
          r = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
        n && n.ReportError(Error(r), { bIncludeMessageInIdentifier: !0 }),
          console.warn(r),
          console.log(t.stack || t);
      }
    }
    BIsValid() {
      return this.m_bValid;
    }
    Body() {
      return this.m_body;
    }
    SetBodyJSON(t) {
      (t.toObject = () => t), (this.m_body = t);
    }
    Hdr() {
      return this.m_header;
    }
    GetEMsg() {
      return this.m_eMsg;
    }
    SetEMsg(t) {
      this.m_eMsg = t;
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
      let t = this.m_header.serializeBinary(),
        n = this.m_body.serializeBinary(),
        r = this.m_eMsg | 2147483648,
        i = new Uint8Array(8 + t.length + n.length),
        o = new CUtlBuffer(i);
      return (
        o.PutUint32(r), o.PutUint32(t.length), o.PutBytes(t), o.PutBytes(n), i
      );
    }
    SerializeBody() {
      let t = this.m_body.serializeBinary(),
        n = new Uint8Array(t.length);
      return new CUtlBuffer(n).PutBytes(t), n;
    }
    DEBUG_ToObject() {
      return {};
    }
    DEBUG_LogToConsole() {}
  },
  CProtoBufMsg = class t extends CBaseProtoBufMsg {
    constructor(t, n = 0, r, i, o) {
      super(n, r, t, i, void 0, o);
    }
    static InitFromPacket(n, r) {
      return new t(n, 0, r);
    }
    static InitFromMsg(n, r) {
      return new t(n, void 0, void 0, r);
    }
    static Init(n, r) {
      return new t(n, r);
    }
    static InitFromObject(n, r) {
      return new t(n, void 0, void 0, void 0, r);
    }
    Body() {
      return super.Body();
    }
    SetBodyFields(t) {
      for (let n in t)
        Array.isArray(t[n])
          ? this.Body()[`add_${n}`] &&
            t[n].forEach((t) => {
              this.Body()[`add_${n}`](t);
            })
          : this.Body()[`set_${n}`] && this.Body()[`set_${n}`](t[n]);
    }
  };
function initProtoBufMsgForServiceMethod(t, n, r) {
  let i;
  return (
    (i = n instanceof CProtoBufMsg ? n : CProtoBufMsg.InitFromObject(t, n)),
    r?.strDebugSource !== void 0 && i.Hdr().set_debug_source(r.strDebugSource),
    i
  );
}
var SteamAward_Localization = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.title || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            title: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `SteamAward_Localization`;
    }
  },
  SteamAward = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.voteid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            voteid: {
              n: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            localization: { n: 2, c: SteamAward_Localization },
            award_year: {
              n: 3,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `SteamAward`;
    }
  },
  CSeasonPassDateAndDisplay = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.rtime || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            rtime: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            coming_soon_display_type: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CSeasonPassDateAndDisplay`;
    }
  },
  CSeasonPassMilestone = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.milestone_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [2, 5, 9, 10],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            milestone_id: {
              n: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            title: { n: 2, c: CLocalizationToken, r: !0, q: !0 },
            appid: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            event_gid: {
              n: 4,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            dates: { n: 5, c: CSeasonPassDateAndDisplay, r: !0, q: !0 },
            shipped: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            rtime_complete: {
              n: 7,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            milestone_desc: { n: 9, c: CLocalizationToken, r: !0, q: !0 },
            image: { n: 10, c: CLocalizationToken, r: !0, q: !0 },
            backfilled_release: {
              n: 11,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            coming_soon_appid: {
              n: 12,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CSeasonPassMilestone`;
    }
  },
  CSeasonPass = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            milestones: { n: 2, c: CSeasonPassMilestone, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CSeasonPass`;
    }
  },
  CStorePageFilter = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.sale_filter || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sale_filter: { n: 1, c: CStorePageFilter_SalePageFilter },
            content_hub_filter: { n: 2, c: CStorePageFilter_ContentHubFilter },
            store_filters: {
              n: 3,
              c: CStorePageFilter_StoreFilter,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter`;
    }
  },
  CStorePageFilter_SalePageFilter = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.sale_tagid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sale_tagid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            creator_clan_account_id: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter_SalePageFilter`;
    }
  },
  CStorePageFilter_ContentHubFilter = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.hub_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            hub_type: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            hub_category: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            hub_tagid: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            discount_filter: {
              n: 4,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            optin: { n: 5, c: CStorePageFilter_ContentHubFilter_OptInInfo },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter_ContentHubFilter`;
    }
  },
  CStorePageFilter_ContentHubFilter_OptInInfo = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            optin_tagid: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            prune_tagid: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            optin_only: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter_ContentHubFilter_OptInInfo`;
    }
  },
  CStorePageFilter_StoreFilter = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.filter_json || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            filter_json: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            cache_key: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStorePageFilter_StoreFilter`;
    }
  };
function EStoreItemTypeToString(t) {
  return `unknown EStoreItemType ( ` + t + ` )`;
}
var StoreGameRating = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [3, 9, 12],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            type: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            rating: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            descriptors: {
              n: 3,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
            interactive_elements: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            agency: {
              n: 5,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            banned: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            esrb_online_music_not_rated: {
              n: 7,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            esrb_online_interactions_not_rated: {
              n: 8,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            survey_interactive_elements: {
              n: 9,
              r: !0,
              q: !0,
              br: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              bw: WriterProto.writeRepeatedEnum,
            },
            required_age: {
              n: 10,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            use_age_gate: {
              n: 11,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            descriptor_images: {
              n: 12,
              r: !0,
              q: !0,
              br: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              bw: WriterProto.writeRepeatedEnum,
            },
            content_survey_notes: {
              n: 13,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            agency_rating: {
              n: 14,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            image_url: {
              n: 20,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            image_target: {
              n: 21,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreGameRating`;
    }
  },
  StoreItem = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.item_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [11, 12, 20, 21, 25, 41, 52, 71, 74, 77, 78],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            item_type: {
              n: 1,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            id: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            gid: {
              n: 76,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            success: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            visible: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            unvailable_for_country_restriction: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            name: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            store_url_path: {
              n: 7,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            store_url_slug: {
              n: 8,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            appid: {
              n: 9,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            type: {
              n: 10,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            included_types: {
              n: 11,
              r: !0,
              q: !0,
              br: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              bw: WriterProto.writeRepeatedEnum,
            },
            included_appids: {
              n: 12,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            is_free: {
              n: 13,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            is_early_access: {
              n: 14,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            related_items: { n: 15, c: StoreItem_RelatedItems },
            included_items: { n: 16, c: StoreItem_IncludedItems },
            content_descriptorids: {
              n: 20,
              r: !0,
              q: !0,
              br: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              bw: WriterProto.writeRepeatedEnum,
            },
            tagids: {
              n: 21,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            categories: { n: 22, c: StoreItem_Categories },
            reviews: { n: 23, c: StoreItem_Reviews },
            basic_info: { n: 24, c: StoreItem_BasicInfo },
            tags: { n: 25, c: StoreItem_Tag, r: !0, q: !0 },
            assets: { n: 30, c: StoreItem_Assets },
            release: { n: 31, c: StoreItem_ReleaseInfo },
            platforms: { n: 32, c: StoreItem_Platforms },
            game_rating: { n: 33, c: StoreGameRating },
            is_coming_soon: {
              n: 34,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            best_purchase_option: { n: 40, c: StoreItem_PurchaseOption },
            purchase_options: {
              n: 41,
              c: StoreItem_PurchaseOption,
              r: !0,
              q: !0,
            },
            self_purchase_option: { n: 43, c: StoreItem_PurchaseOption },
            screenshots: { n: 50, c: StoreItem_Screenshots },
            trailers: { n: 51, c: StoreItem_Trailers },
            supported_languages: {
              n: 52,
              c: StoreItem_SupportedLanguage,
              r: !0,
              q: !0,
            },
            store_url_path_override: {
              n: 53,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            free_weekend: { n: 54, c: StoreItem_FreeWeekend },
            unlisted: {
              n: 55,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            game_count: {
              n: 56,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            internal_name: {
              n: 57,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            full_description_bbcode: {
              n: 58,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            is_free_temporarily: {
              n: 59,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            assets_without_overrides: { n: 60, c: StoreItem_Assets },
            user_filter_failure: { n: 70, c: StoreBrowseFilterFailure },
            links: { n: 71, c: StoreItem_Link, r: !0, q: !0 },
            purchase_description_bbcode: {
              n: 72,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            package_groups: { n: 74, c: StoreItem_PackageGroup, r: !0, q: !0 },
            extra_details: { n: 75, c: StoreItem_ExtraDetails },
            optin_registration_tags: {
              n: 77,
              c: StoreItem_OptInRegistrationTags,
              r: !0,
              q: !0,
            },
            purchase_notes: { n: 78, c: StoreItem_PurchaseNote, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem`;
    }
  },
  StoreItem_Demo = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            label: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            show_above_purchase: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Demo`;
    }
  },
  StoreItem_Playtest = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            is_open: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Playtest`;
    }
  },
  StoreItem_RelatedF2P = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            header_text: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            description_text: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_RelatedF2P`;
    }
  },
  StoreItem_RelatedItems = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.parent_appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [2, 3, 4, 5, 6, 9],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            parent_appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            demo_appid: {
              n: 2,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            standalone_demo_appid: {
              n: 3,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            demos: { n: 4, c: StoreItem_Demo, r: !0, q: !0 },
            standalone_demos: { n: 5, c: StoreItem_Demo, r: !0, q: !0 },
            playtests: { n: 6, c: StoreItem_Playtest, r: !0, q: !0 },
            related_f2p: { n: 7, c: StoreItem_RelatedF2P },
            dlc_parent_appids: {
              n: 9,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_RelatedItems`;
    }
  },
  StoreItem_IncludedItems = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.included_apps || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [1, 2, 3, 4],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            included_apps: { n: 1, c: StoreItem, r: !0, q: !0 },
            included_packages: { n: 2, c: StoreItem, r: !0, q: !0 },
            included_bundles: { n: 3, c: StoreItem, r: !0, q: !0 },
            included_creators: { n: 4, c: StoreItem, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_IncludedItems`;
    }
  },
  StoreItem_Categories = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.supported_player_categoryids || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [2, 3, 4],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            supported_player_categoryids: {
              n: 2,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            feature_categoryids: {
              n: 3,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            controller_categoryids: {
              n: 4,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Categories`;
    }
  },
  StoreItem_Reviews = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.summary_filtered || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            summary_filtered: { n: 1, c: StoreItem_Reviews_StoreReviewSummary },
            summary_unfiltered: {
              n: 2,
              c: StoreItem_Reviews_StoreReviewSummary,
            },
            summary_language_specific: {
              n: 3,
              c: StoreItem_Reviews_StoreReviewSummary,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Reviews`;
    }
  },
  StoreItem_Reviews_StoreReviewSummary = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.review_count || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            review_count: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            percent_positive: {
              n: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            review_score: {
              n: 3,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            review_score_label: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Reviews_StoreReviewSummary`;
    }
  },
  StoreItem_BasicInfo = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.short_description || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [2, 3, 4],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            short_description: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            publishers: {
              n: 2,
              c: StoreItem_BasicInfo_CreatorHomeLink,
              r: !0,
              q: !0,
            },
            developers: {
              n: 3,
              c: StoreItem_BasicInfo_CreatorHomeLink,
              r: !0,
              q: !0,
            },
            franchises: {
              n: 4,
              c: StoreItem_BasicInfo_CreatorHomeLink,
              r: !0,
              q: !0,
            },
            capsule_headline: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_BasicInfo`;
    }
  },
  StoreItem_BasicInfo_CreatorHomeLink = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            creator_clan_account_id: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_BasicInfo_CreatorHomeLink`;
    }
  },
  StoreItem_Tag = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.tagid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tagid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            weight: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Tag`;
    }
  },
  StoreItem_Assets = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.asset_url_format || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            asset_url_format: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            main_capsule: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            main_capsule_2x: {
              n: 18,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            small_capsule: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            small_capsule_2x: {
              n: 19,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            header: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            header_2x: {
              n: 20,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            package_header: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            page_background: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            hero_capsule: {
              n: 7,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            hero_capsule_2x: {
              n: 8,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            library_capsule: {
              n: 9,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            library_capsule_2x: {
              n: 10,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            library_hero: {
              n: 11,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            library_hero_2x: {
              n: 12,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            community_icon: {
              n: 13,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            clan_avatar: {
              n: 14,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            page_background_path: {
              n: 15,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            raw_page_background: {
              n: 16,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            edition_comparison: {
              n: 17,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            last_modified: {
              n: 21,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            creator_home_background: {
              n: 22,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Assets`;
    }
  },
  StoreItem_ReleaseInfo = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.steam_release_date || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steam_release_date: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            original_release_date: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            original_steam_release_date: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            release_from_early_access_date: {
              n: 11,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            release_from_early_access_style: {
              n: 12,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            is_coming_soon: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            is_preload: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            custom_release_date_message: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            is_abridged_release_date: {
              n: 7,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            coming_soon_display: {
              n: 8,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            is_early_access: {
              n: 10,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            mac_release_date: {
              n: 20,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            linux_release_date: {
              n: 21,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            limited_launch_active: {
              n: 22,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            advance_access_date: {
              n: 23,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ReleaseInfo`;
    }
  },
  StoreItem_Platforms = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.windows || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            windows: {
              n: 1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            mac: { n: 2, br: ReaderProto.readBool, bw: WriterProto.writeBool },
            steamos_linux: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            vr_support: { n: 10, c: StoreItem_Platforms_VRSupport },
            steam_deck_compat_category: {
              n: 11,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            steam_os_compat_category: {
              n: 12,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            steam_frame_compat_category: {
              n: 13,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            steam_machine_compat_category: {
              n: 14,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Platforms`;
    }
  },
  StoreItem_Platforms_VRSupport = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.vrhmd || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            vrhmd: {
              n: 1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            vrhmd_only: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            show_optional_vr_mode_notice: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            htc_vive: {
              n: 40,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            oculus_rift: {
              n: 41,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            windows_mr: {
              n: 42,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            valve_index: {
              n: 43,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Platforms_VRSupport`;
    }
  },
  StoreItem_PurchaseOption = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.packageid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [20], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            packageid: {
              n: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            bundleid: {
              n: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            purchase_option_name: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            final_price_in_cents: {
              n: 5,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
            original_price_in_cents: {
              n: 6,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
            formatted_final_price: {
              n: 8,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            formatted_original_price: {
              n: 9,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            discount_pct: {
              n: 10,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            bundle_discount_pct: {
              n: 12,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            is_free_to_keep: {
              n: 13,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            price_before_bundle_discount: {
              n: 14,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
            formatted_price_before_bundle_discount: {
              n: 15,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            active_discounts: {
              n: 20,
              c: StoreItem_PurchaseOption_Discount,
              r: !0,
              q: !0,
            },
            user_can_purchase_as_gift: {
              n: 31,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            is_commercial_license: {
              n: 40,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            should_suppress_discount_pct: {
              n: 41,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            hide_discount_pct_for_compliance: {
              n: 42,
              d: !1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            included_game_count: {
              n: 43,
              d: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            lowest_recent_price_in_cents: {
              n: 44,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
            requires_shipping: {
              n: 45,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            recurrence_info: {
              n: 46,
              c: StoreItem_PurchaseOption_RecurrenceInfo,
            },
            free_to_keep_ends: {
              n: 47,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            must_purchase_as_set: {
              n: 48,
              d: !1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            package_group: {
              n: 49,
              d: `default`,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            is_edition: {
              n: 50,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            free_to_keep_base_package: {
              n: 51,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            price_cannot_be_displayed_as_discount: {
              n: 52,
              d: !1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            price_to_base_discount_on: {
              n: 53,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
            free_with_master_sub_appid: {
              n: 54,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            formatted_lowest_recent_price: {
              n: 55,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            is_free_license: {
              n: 56,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            combined_discount_pct: {
              n: 57,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PurchaseOption`;
    }
  },
  StoreItem_PurchaseOption_Discount = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.discount_amount || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            discount_amount: {
              n: 1,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
            discount_description: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            discount_end_date: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            master_sub_appid: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PurchaseOption_Discount`;
    }
  },
  StoreItem_PurchaseOption_RecurrenceInfo = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.packageid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            packageid: {
              n: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            billing_agreement_type: {
              n: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            renewal_time_unit: {
              n: 3,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            renewal_time_period: {
              n: 4,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            renewal_price_in_cents: {
              n: 5,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
            formatted_renewal_price: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PurchaseOption_RecurrenceInfo`;
    }
  },
  StoreItem_Screenshots = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.all_ages_screenshots || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            all_ages_screenshots: {
              n: 2,
              c: StoreItem_Screenshots_Screenshot,
              r: !0,
              q: !0,
            },
            mature_content_screenshots: {
              n: 3,
              c: StoreItem_Screenshots_Screenshot,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Screenshots`;
    }
  },
  StoreItem_Screenshots_Screenshot = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.filename || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            filename: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            ordinal: {
              n: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            alt_text: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            category: {
              n: 4,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Screenshots_Screenshot`;
    }
  },
  StoreItem_Trailers = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.highlights || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            highlights: { n: 1, c: StoreItem_Trailers_Trailer, r: !0, q: !0 },
            other_trailers: {
              n: 2,
              c: StoreItem_Trailers_Trailer,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Trailers`;
    }
  },
  StoreItem_Trailers_VideoSource = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.filename || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            filename: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            type: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Trailers_VideoSource`;
    }
  },
  StoreItem_Trailers_AdaptiveTrailer = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.cdn_path || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            cdn_path: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            encoding: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Trailers_AdaptiveTrailer`;
    }
  },
  StoreItem_Trailers_Trailer = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.trailer_name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            trailer_name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            trailer_url_format: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            trailer_category: {
              n: 13,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            microtrailer: {
              n: 5,
              c: StoreItem_Trailers_VideoSource,
              r: !0,
              q: !0,
            },
            adaptive_trailers: {
              n: 6,
              c: StoreItem_Trailers_AdaptiveTrailer,
              r: !0,
              q: !0,
            },
            captions_manifest: {
              n: 7,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            screenshot_medium: {
              n: 10,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            screenshot_full: {
              n: 11,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            trailer_base_id: {
              n: 12,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            all_ages: {
              n: 14,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            screenshot_small: {
              n: 15,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            trailer_id: {
              n: 16,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Trailers_Trailer`;
    }
  },
  StoreItem_SupportedLanguage = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.elanguage || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            elanguage: {
              n: 1,
              d: -1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            eadditionallanguage: {
              n: 5,
              d: -1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            supported: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            full_audio: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            subtitles: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_SupportedLanguage`;
    }
  },
  StoreItem_FreeWeekend = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.start_time || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            start_time: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            end_time: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            text: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            appid: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_FreeWeekend`;
    }
  },
  StoreItem_Link = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.link_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            link_type: {
              n: 1,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            url: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            text: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_Link`;
    }
  },
  StoreItem_PackageGroup = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            heading: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            display_type: {
              n: 3,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            dropdown_title: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            dropdown_description_bbcode: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PackageGroup`;
    }
  },
  StoreItem_ExtraDetails = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.steam_award || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [1, 10, 13, 15, 18, 31, 36],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steam_award: { n: 1, c: SteamAward, r: !0, q: !0 },
            vetted: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            no_mouse_keyboard_support: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            controller_wizard_complete: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            drm_third_party_type: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            drm_activation_limit: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            user_account_third_party: {
              n: 7,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            user_account_third_party_link_to_steam: {
              n: 8,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            anticheat: { n: 9, c: StoreItem_ExtraDetails_Anticheat },
            eula: { n: 10, c: StoreItem_ExtraDetails_Eula, r: !0, q: !0 },
            ai_generation_service: {
              n: 11,
              c: StoreItem_ExtraDetails_AIGeneratedContentService,
            },
            refund_checks_ea_playtime: {
              n: 12,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            section: {
              n: 13,
              c: StoreItem_ExtraDetails_PageSection,
              r: !0,
              q: !0,
            },
            legal_notice_bbcode: {
              n: 14,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            interactive_elements: {
              n: 15,
              r: !0,
              q: !0,
              br: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              bw: WriterProto.writeRepeatedEnum,
            },
            content_survey_notes: {
              n: 16,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            content_survey_ai_notes: {
              n: 17,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            press_review: {
              n: 18,
              c: StoreItem_ExtraDetails_PressReview,
              r: !0,
              q: !0,
            },
            partner_awards_bbcode: {
              n: 19,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            early_access: { n: 20, c: StoreItem_ExtraDetails_EarlyAccess },
            season_pass: { n: 21, c: CSeasonPass },
            links_and_info: { n: 22, c: StoreItem_ExtraDetails_LinksAndInfo },
            item_store_eligible: {
              n: 23,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            points_shop_eligible: {
              n: 24,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            metacritic: { n: 26, c: StoreItem_ExtraDetails_Metacritic },
            cast_and_crew: { n: 27, c: StoreItem_ExtraDetails_CastAndCrew },
            system_requirements: {
              n: 28,
              c: StoreItem_ExtraDetails_SystemRequirements,
            },
            running_time_minutes: {
              n: 29,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            episode: { n: 30, c: StoreItem_ExtraDetails_Episode },
            seasons: { n: 31, c: StoreItem_ExtraDetails_Season, r: !0, q: !0 },
            video_extras_note: {
              n: 32,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            has_community_hub: {
              n: 33,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            event_spotlight: {
              n: 34,
              c: StoreItem_ExtraDetails_EventSpotlight,
            },
            music_album: { n: 35, c: StoreItem_ExtraDetails_MusicAlbum },
            sale_pages: {
              n: 36,
              c: StoreItem_ExtraDetails_SalePage,
              r: !0,
              q: !0,
            },
            item_store_show_featured: {
              n: 37,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails`;
    }
  },
  StoreItem_ExtraDetails_Anticheat = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.kernel_mode || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            kernel_mode: {
              n: 1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            uninstall_completely: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            boot_protection: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            boot_protection_name: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            name: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            name_loc: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Anticheat`;
    }
  },
  StoreItem_ExtraDetails_Eula = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            url: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Eula`;
    }
  },
  StoreItem_ExtraDetails_AIGeneratedContentService = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            url: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_AIGeneratedContentService`;
    }
  },
  StoreItem_ExtraDetails_PageSection = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.label || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            label: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            content_bbcode: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            banner: {
              n: 3,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_PageSection`;
    }
  },
  StoreItem_ExtraDetails_PressReview = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.quote || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            quote: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            score: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            site: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            url: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_PressReview`;
    }
  },
  StoreItem_ExtraDetails_EarlyAccess = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.why_bbcode || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            why_bbcode: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            how_long_bbcode: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            full_version_bbcode: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            current_state_bbcode: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            pricing_bbcode: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            community_bbcode: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            description_bbcode: {
              n: 7,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_EarlyAccess`;
    }
  },
  StoreItem_ExtraDetails_LinksAndInfo = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.website || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [6, 7, 8],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            website: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            stats_url: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            online_manual_url: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            health_warning_url: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            privacy_policy_url: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            available_documents: {
              n: 6,
              r: !0,
              q: !0,
              br: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              bw: WriterProto.writeRepeatedEnum,
            },
            genreids: {
              n: 7,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            manufacturers: {
              n: 8,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
            achievements_visible: {
              n: 9,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            achievement_count: {
              n: 10,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_LinksAndInfo`;
    }
  },
  StoreItem_ExtraDetails_Metacritic = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.score || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            score: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            url: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            always_show: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Metacritic`;
    }
  },
  StoreItem_ExtraDetails_CastAndCrew = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.directors || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [1, 2, 3, 4, 5],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            directors: {
              n: 1,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
            producers: {
              n: 2,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
            writers: {
              n: 3,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
            music: {
              n: 4,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
            actors: {
              n: 5,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_CastAndCrew`;
    }
  },
  StoreItem_ExtraDetails_SystemRequirements = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.platforms || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            platforms: {
              n: 1,
              c: StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements`;
    }
  },
  StoreItem_ExtraDetails_SystemRequirements_Size = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.amount || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            amount: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            units: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_Size`;
    }
  },
  StoreItem_ExtraDetails_SystemRequirements_Requirements = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.os_version || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            os_version: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            os_version_unsupported: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            processor: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            memory: { n: 4, c: StoreItem_ExtraDetails_SystemRequirements_Size },
            graphics: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            directx: {
              n: 6,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            broadband: {
              n: 7,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            storage: {
              n: 8,
              c: StoreItem_ExtraDetails_SystemRequirements_Size,
            },
            storage_hq: {
              n: 9,
              c: StoreItem_ExtraDetails_SystemRequirements_Size,
            },
            sound_card: {
              n: 10,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            vr_support: {
              n: 11,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            notes: {
              n: 12,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            legacy_bbcode: {
              n: 13,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_Requirements`;
    }
  },
  StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.platform || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            platform: {
              n: 1,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            minimum: {
              n: 2,
              c: StoreItem_ExtraDetails_SystemRequirements_Requirements,
            },
            recommended: {
              n: 3,
              c: StoreItem_ExtraDetails_SystemRequirements_Requirements,
            },
            requires_64bit: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            requires_apple_silicon: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            unsupported_os_note: {
              n: 6,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SystemRequirements_PlatformRequirements`;
    }
  },
  StoreItem_ExtraDetails_Episode = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.number || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            number: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            type: { n: 2, br: ReaderProto.readEnum, bw: WriterProto.writeEnum },
            hide_details: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Episode`;
    }
  },
  StoreItem_ExtraDetails_Season = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.index || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            index: {
              n: 1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            name: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            episode_appids: {
              n: 3,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_Season`;
    }
  },
  StoreItem_ExtraDetails_EventSpotlight = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.clan_account_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clan_account_id: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            event_gid: {
              n: 2,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_EventSpotlight`;
    }
  },
  StoreItem_ExtraDetails_MusicAlbum = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.tracks || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tracks: {
              n: 1,
              c: StoreItem_ExtraDetails_MusicAlbum_Track,
              r: !0,
              q: !0,
            },
            artist: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            composer: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            label: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            other_credits: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_MusicAlbum`;
    }
  },
  StoreItem_ExtraDetails_MusicAlbum_Track = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.disc_number || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            disc_number: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            track_number: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            name: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            other_name: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            duration_seconds: {
              n: 5,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_MusicAlbum_Track`;
    }
  },
  StoreItem_ExtraDetails_SalePage = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.clan_account_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clan_account_id: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            event_gid: {
              n: 2,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_ExtraDetails_SalePage`;
    }
  },
  StoreItem_OptInRegistrationTags = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.optin_name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            optin_name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            values: {
              n: 2,
              r: !0,
              q: !0,
              br: ReaderProto.readString,
              bw: WriterProto.writeRepeatedString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_OptInRegistrationTags`;
    }
  },
  StoreItem_PurchaseNote = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            type: { n: 1, br: ReaderProto.readEnum, bw: WriterProto.writeEnum },
            highlighted: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            text_bbcode: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItem_PurchaseNote`;
    }
  },
  StoreBrowseItemDataRequest = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.include_assets || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            include_assets: {
              n: 1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_release: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_platforms: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_all_purchase_options: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_screenshots: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_trailers: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_ratings: {
              n: 7,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_tag_count: {
              n: 8,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            include_reviews: {
              n: 9,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_basic_info: {
              n: 10,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_supported_languages: {
              n: 11,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_full_description: {
              n: 12,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_included_items: {
              n: 13,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            included_item_data_request: { n: 14, c: t },
            include_assets_without_overrides: {
              n: 15,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            apply_user_filters: {
              n: 16,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_links: {
              n: 17,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_extra_details: {
              n: 18,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_best_purchase_option: {
              n: 19,
              d: !0,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            include_optin_registration_tags: {
              n: 20,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreBrowseItemDataRequest`;
    }
  },
  StoreBrowseContext = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.language || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            elanguage: {
              n: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            country_code: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreBrowseContext`;
    }
  },
  StoreItemID = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            packageid: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            bundleid: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            tagid: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            creatorid: {
              n: 5,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            hubcategoryid: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            salepagegid: {
              n: 7,
              br: ReaderProto.readFixed64String,
              bw: WriterProto.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreItemID`;
    }
  },
  CStoreBrowse_GetItems_Request = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.ids || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            ids: { n: 1, c: StoreItemID, r: !0, q: !0 },
            context: { n: 2, c: StoreBrowseContext },
            data_request: { n: 3, c: StoreBrowseItemDataRequest },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetItems_Request`;
    }
  },
  CStoreBrowse_GetItems_Response = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.store_items || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { store_items: { n: 1, c: StoreItem, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetItems_Response`;
    }
  },
  CStoreBrowse_GetStoreCategories_Request = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.language || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            elanguage: {
              n: 2,
              d: -1,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Request`;
    }
  },
  CStoreBrowse_GetStoreCategories_Response = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.categories || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            categories: {
              n: 1,
              c: CStoreBrowse_GetStoreCategories_Response_Category,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Response`;
    }
  },
  CStoreBrowse_GetStoreCategories_Response_Category = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.categoryid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            categoryid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            type: { n: 2, br: ReaderProto.readEnum, bw: WriterProto.writeEnum },
            internal_name: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            display_name: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            image_url: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            show_in_search: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            computed: {
              n: 7,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            edit_url: {
              n: 8,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            edit_sort_order: {
              n: 9,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetStoreCategories_Response_Category`;
    }
  },
  CStoreBrowse_GetContentHubConfig_Request = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.context || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            context: { n: 1, c: StoreBrowseContext },
            excluded_content_descriptorids: {
              n: 2,
              r: !0,
              q: !0,
              br: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              bw: WriterProto.writeRepeatedEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Request`;
    }
  },
  CStoreBrowse_GetContentHubConfig_Response = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.hubconfigs || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            hubconfigs: {
              n: 1,
              c: CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Response`;
    }
  },
  CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.hubcategoryid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [6, 7, 8, 9],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            hubcategoryid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            type: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            handle: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            display_name: {
              n: 4,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            url_path: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            replaces_tags: {
              n: 6,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            must_have_tags: {
              n: 7,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            any_one_of_tags: {
              n: 8,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            must_not_have_tags: {
              n: 9,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            hub_description: {
              n: 10,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig`;
    }
  },
  CStoreBrowse_GetPriceStops_Request = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.country_code || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            country_code: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            currency_code: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Request`;
    }
  },
  CStoreBrowse_GetPriceStops_Response = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.price_stops || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            price_stops: {
              n: 1,
              c: CStoreBrowse_GetPriceStops_Response_PriceStop,
              r: !0,
              q: !0,
            },
            currency_code: {
              n: 2,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Response`;
    }
  },
  CStoreBrowse_GetPriceStops_Response_PriceStop = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.formatted_amount || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            formatted_amount: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            amount_in_cents: {
              n: 2,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetPriceStops_Response_PriceStop`;
    }
  },
  CStoreBrowse_GetDLCForApps_Request = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.context || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            context: { n: 1, c: StoreBrowseContext },
            store_page_filter: { n: 2, c: CStorePageFilter },
            appids: { n: 3, c: StoreItemID, r: !0, q: !0 },
            steamid: {
              n: 4,
              br: ReaderProto.readUint64String,
              bw: WriterProto.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Request`;
    }
  },
  CStoreBrowse_GetDLCForApps_Response = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.dlc_data || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            dlc_data: {
              n: 1,
              c: CStoreBrowse_GetDLCForApps_Response_DLCData,
              r: !0,
              q: !0,
            },
            playtime: {
              n: 2,
              c: CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response`;
    }
  },
  CStoreBrowse_GetDLCForApps_Response_DLCData = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            parentappid: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            release_date: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            coming_soon: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            price: {
              n: 5,
              br: ReaderProto.readInt64String,
              bw: WriterProto.writeInt64String,
            },
            discount: {
              n: 6,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            free: { n: 7, br: ReaderProto.readBool, bw: WriterProto.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response_DLCData`;
    }
  },
  CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            playtime: {
              n: 2,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            last_played: {
              n: 3,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp`;
    }
  },
  CStoreBrowse_GetDLCForAppsSolr_Request = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.context || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            context: { n: 1, c: StoreBrowseContext },
            appids: {
              n: 2,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            flavor: {
              n: 3,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            count: {
              n: 4,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            store_page_filter: { n: 5, c: CStorePageFilter },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Request`;
    }
  },
  CStoreBrowse_GetDLCForAppsSolr_Response = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.dlc_lists || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            dlc_lists: {
              n: 1,
              c: CStoreBrowse_GetDLCForAppsSolr_Response_DLCList,
              r: !0,
              q: !0,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Response`;
    }
  },
  CStoreBrowse_GetDLCForAppsSolr_Response_DLCList = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.parent_appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            parent_appid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            dlc_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetDLCForAppsSolr_Response_DLCList`;
    }
  },
  CStoreBrowse_GetHardwareItems_Request = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.packageid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            packageid: {
              n: 1,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            context: { n: 2, c: StoreBrowseContext },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetHardwareItems_Request`;
    }
  },
  CHardwarePackageDetails = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.packageid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            packageid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            inventory_available: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            high_pending_orders: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            account_restricted_from_purchasing: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            requires_reservation: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            rtime_estimated_notification: {
              n: 7,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            notificaton_token: {
              n: 8,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            reservation_state: {
              n: 9,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            expired: {
              n: 10,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            time_expires: {
              n: 11,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            time_reserved: {
              n: 12,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            allow_quantity_purchase: {
              n: 13,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            max_quantity_per_purchase: {
              n: 14,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            allow_purchase_in_country: {
              n: 15,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            estimated_delivery_soonest_business_days: {
              n: 17,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            estimated_delivery_latest_business_days: {
              n: 18,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            not_allowed_to_reserved_because_already_owned: {
              n: 19,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            appid_ownership_not_allowed_to_reserve: {
              n: 20,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            account_first_date_purchase_requirement: {
              n: 21,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            position_is_waitlist: {
              n: 22,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            user_waitlist_token: {
              n: 23,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            queue_in_waitlist: {
              n: 24,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            queue_waitlist_token: {
              n: 25,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            collection_time_active: {
              n: 26,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            reservation_not_allowed: {
              n: 27,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            requires_signature: {
              n: 28,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CHardwarePackageDetails`;
    }
  },
  CStoreBrowse_GetHardwareItems_Response = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.details || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            details: { n: 1, c: CHardwarePackageDetails, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CStoreBrowse_GetHardwareItems_Response`;
    }
  },
  StoreBrowseFilterFailure = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.filter_failure || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
          0,
          -1,
          [21, 30],
          null,
        );
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            filter_failure: {
              n: 1,
              d: 0,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            already_owned: {
              n: 5,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            on_wishlist: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            ignored: {
              n: 7,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            ignored_creator: {
              n: 8,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            not_in_users_language: {
              n: 10,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            not_on_users_platform: {
              n: 11,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            demo_for_owned_game: {
              n: 12,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            dlc_for_unowned_game: {
              n: 13,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            nonpreferred_product_early_access: {
              n: 22,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            nonpreferred_product_prepurchase: {
              n: 23,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            nonpreferred_product_software: {
              n: 24,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            nonpreferred_product_vr: {
              n: 25,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            excluded_tagids: {
              n: 21,
              r: !0,
              q: !0,
              br: ReaderProto.readUint32,
              pbr: ReaderProto.readPackedUint32,
              bw: WriterProto.writeRepeatedUint32,
            },
            excluded_content_descriptorids: {
              n: 30,
              r: !0,
              q: !0,
              br: ReaderProto.readEnum,
              pbr: ReaderProto.readPackedEnum,
              bw: WriterProto.writeRepeatedEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `StoreBrowseFilterFailure`;
    }
  },
  StoreBrowseService;
(function (t) {
  function n(t, n, r) {
    return t.SendMsg(
      `StoreBrowse.GetItems#1`,
      initProtoBufMsgForServiceMethod(CStoreBrowse_GetItems_Request, n, r),
      CStoreBrowse_GetItems_Response,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  t.GetItems = n;
  function r(t, n, r) {
    return t.SendMsg(
      `StoreBrowse.GetStoreCategories#1`,
      initProtoBufMsgForServiceMethod(
        CStoreBrowse_GetStoreCategories_Request,
        n,
        r,
      ),
      CStoreBrowse_GetStoreCategories_Response,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
    );
  }
  t.GetStoreCategories = r;
  function i(t, n, r) {
    return t.SendMsg(
      `StoreBrowse.GetContentHubConfig#1`,
      initProtoBufMsgForServiceMethod(
        CStoreBrowse_GetContentHubConfig_Request,
        n,
        r,
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
  t.GetContentHubConfig = i;
  function o(t, n, r) {
    return t.SendMsg(
      `StoreBrowse.GetPriceStops#1`,
      initProtoBufMsgForServiceMethod(CStoreBrowse_GetPriceStops_Request, n, r),
      CStoreBrowse_GetPriceStops_Response,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  t.GetPriceStops = o;
  function s(t, n, r) {
    return t.SendMsg(
      `StoreBrowse.GetDLCForApps#1`,
      initProtoBufMsgForServiceMethod(CStoreBrowse_GetDLCForApps_Request, n, r),
      CStoreBrowse_GetDLCForApps_Response,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  t.GetDLCForApps = s;
  function l(t, n, r) {
    return t.SendMsg(
      `StoreBrowse.GetDLCForAppsSolr#1`,
      initProtoBufMsgForServiceMethod(
        CStoreBrowse_GetDLCForAppsSolr_Request,
        n,
        r,
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
  t.GetDLCForAppsSolr = l;
  function u(t, n, r) {
    return t.SendMsg(
      `StoreBrowse.GetHardwareItems#1`,
      initProtoBufMsgForServiceMethod(
        CStoreBrowse_GetHardwareItems_Request,
        n,
        r,
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
  t.GetHardwareItems = u;
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
  BroadcastConfig = { steamid: ``, clanid: 0, listid: 0 },
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
  EventConfig = { ANNOUNCEMENT_GID: ``, TAKEOVER_ANNOUNCEMENT_GID: `` };
function GetClientSteamType() {
  if (!navigator?.userAgent) return;
  let t = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (t && t.length == 2) return t[1];
}
function GetCookie(t) {
  if (!BCanAccessCookies() || !window.document.cookie) return null;
  let n = document.cookie.match(`(^|; )` + t + `=([^;]*)`);
  return n && n[2] ? decodeURIComponent(n[2]) : null;
}
function SetCookie(t, n, r, i) {
  if (!BCanAccessCookies()) return;
  i ||= `/`;
  let o = ``;
  if (r !== void 0 && r) {
    let t = new Date();
    t.setTime(t.getTime() + 864e5 * r), (o = `; expires=` + t.toUTCString());
  }
  document.cookie =
    encodeURIComponent(t) + `=` + encodeURIComponent(n) + o + `;path=` + i;
}
function BCanAccessCookies() {
  return !!window.document;
}
var CONFIG_ELEMENT_ID = `webui_config`;
function GetConfigJSON(t, n = CONFIG_ELEMENT_ID) {
  return GetConfigJSONInternal(t, n, !0);
}
function GetOptionalConfigJSON(t, n = CONFIG_ELEMENT_ID) {
  return GetConfigJSONInternal(t, n, !1);
}
function GetConfigJSONInternal(t, n = CONFIG_ELEMENT_ID, r) {
  let i;
  if (((i = typeof n == `string` ? document.getElementById(n) : n), i))
    try {
      return i.hasAttribute(`data-` + t)
        ? JSON.parse(i.getAttribute(`data-` + t))
        : null;
    } catch (t) {
      console.error(
        `Failed to parse config for ` +
          UserConfig$1.steamid +
          ` (` +
          window.location.href +
          `)`,
        t,
      );
    }
  else r && console.error(`Missing config element #`, n);
}
var g_fallbackSessionID;
function GetSessionID() {
  if (!BCanAccessCookies())
    return (
      (g_fallbackSessionID ||= GenerateNewSessionID()), g_fallbackSessionID
    );
  let t = GetCookie(`sessionid`);
  return (t ||= GenerateNewSessionID()), t;
}
function GenerateSessionID() {
  let t = ``;
  for (let n = 0; n < 24; n++) t += RandomInt(0, 35).toString(36);
  return t;
}
function GenerateNewSessionID() {
  let t = GenerateSessionID();
  return SetCookie(`sessionid`, t, 0), t;
}
function InitConfig(t = CONFIG_ELEMENT_ID) {
  let n = {},
    r = GetConfigJSON(`config`, t);
  r && (Object.assign(Config$1, r), (n.config = !0));
  let i = GetConfigJSON(`userinfo`, t);
  i &&
    (Object.assign(UserConfig$1, i),
    (n.userConfig = !0),
    UserConfig$1.is_support &&
      BIsInPresentationMode() &&
      (UserConfig$1.is_support = !1));
  let o = GetConfigJSON(`broadcast`, t);
  o && (Object.assign(BroadcastConfig, o), (n.broadcastConfig = !0));
  let s = GetConfigJSON(`community`, t);
  s && (Object.assign(CommunityConfig, s), (n.communityConfig = !0));
  let l = GetConfigJSON(`event`, t);
  return (
    l && (Object.assign(EventConfig, l), (n.eventConfig = !0)),
    (bAnyConfigLoaded = !0),
    configLoadWaiters.forEach((t) => t()),
    n
  );
}
var configLoadWaiters = new Set(),
  bAnyConfigLoaded = !1;
function WaitForConfigLoad() {
  return bAnyConfigLoaded
    ? Promise.resolve()
    : new Promise((t) => {
        configLoadWaiters.add(t);
      });
}
var k_PresentationModeCookie = `presentation_mode`;
function BIsInPresentationMode() {
  let t = null;
  return (
    BCanAccessCookies() && (t = GetCookie(k_PresentationModeCookie)),
    !!(t && Number.parseInt(t) === 1)
  );
}
function AssetURL(t) {
  return t;
}
var Config = window.Config ?? Config$1,
  UserConfig = window.UserConfig ?? UserConfig$1,
  WaitForConfigReady = window.Config
    ? () => Promise.resolve()
    : WaitForConfigLoad;
window.Config && Object.assign(Config$1, window.Config),
  window.UserConfig && Object.assign(UserConfig$1, window.UserConfig),
  window.WebConfig && Object.assign(Config$1, window.WebConfig);
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
function GetSteamUIConfig(t) {
  return (
    console.assert(
      !t || Config.IN_STEAMUI,
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
function GetWebConfig(t) {
  return (
    console.assert(
      !t || !Config.IN_STEAMUI,
      `WebConfig expected but does not exist in the current context!`,
    ),
    Config.IN_STEAMUI ? void 0 : WebConfig
  );
}
var ConfigContext = import_react.createContext({}),
  useConfigContext = (t) => {
    let n = import_react.useContext(ConfigContext);
    return (
      AssertMsg(
        t?.bSuppressAssert || n.IN_GAMEPADUI !== void 0,
        `Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.`,
      ),
      n
    );
  };
function ConfigContextRoot(t) {
  let { IN_GAMEPADUI: n, IN_DESKTOPUI: r, IN_VR: i, children: o } = t,
    s = useConfigContext({ bSuppressAssert: !0 }),
    l = GetClientSteamType()?.startsWith(`Gamepad VR`) ?? !1,
    u = import_react.useMemo(
      () => ({
        IN_GAMEPADUI:
          n ??
          s?.IN_GAMEPADUI ??
          GetClientSteamType()?.startsWith(`Gamepad`) ??
          !1,
        IN_DESKTOPUI: r ?? s?.IN_DESKTOPUI ?? !1,
        IN_VR: i ?? s?.IN_VR ?? l,
      }),
      [s, n, r, i, l],
    );
  return import_react.createElement(ConfigContext.Provider, { value: u }, o);
}
function useInGamepadUI(t) {
  return useConfigContext(t)?.IN_GAMEPADUI;
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
function BBaseURLMatches(t, n) {
  return n.length != 0 && t.startsWith(n);
}
var UNKNOWN_BASE_URL = `unknown`;
function GET_BASE_URL() {
  if (!window || !window.location || !window.location.href)
    return console.warn(`Unable to determine base url!`), UNKNOWN_BASE_URL;
  let t = window.location.href;
  return BBaseURLMatches(t, Config$1.STORE_BASE_URL)
    ? Config$1.STORE_BASE_URL
    : BBaseURLMatches(t, Config$1.COMMUNITY_BASE_URL)
      ? Config$1.COMMUNITY_BASE_URL
      : BBaseURLMatches(t, Config$1.CHAT_BASE_URL)
        ? Config$1.CHAT_BASE_URL
        : BBaseURLMatches(t, Config$1.PARTNER_BASE_URL)
          ? Config$1.PARTNER_BASE_URL
          : BBaseURLMatches(t, Config$1.HELP_BASE_URL)
            ? Config$1.HELP_BASE_URL
            : BBaseURLMatches(t, Config$1.STEAMTV_BASE_URL)
              ? Config$1.STEAMTV_BASE_URL
              : BBaseURLMatches(t, Config$1.STATS_BASE_URL)
                ? Config$1.STATS_BASE_URL
                : BBaseURLMatches(t, Config$1.INTERNAL_STATS_BASE_URL)
                  ? Config$1.INTERNAL_STATS_BASE_URL
                  : BBaseURLMatches(t, Config$1.STORE_CHECKOUT_BASE_URL)
                    ? Config$1.STORE_CHECKOUT_BASE_URL
                    : BBaseURLMatches(t, `https://steamloopback.host`)
                      ? `https://steamloopback.host`
                      : ``;
}
function GET_BASE_WEB_PROPERTY() {
  return `help`;
}
var CAccountPrivacyCookiePreferences = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.version || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            version: {
              n: 1,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            preference_state: {
              n: 2,
              br: ReaderProto.readEnum,
              bw: WriterProto.writeEnum,
            },
            content_customization: {
              n: 3,
              c: CAccountPrivacyCookiePreferences_ContentCustomization,
            },
            valve_analytics: {
              n: 4,
              c: CAccountPrivacyCookiePreferences_ValveAnalytics,
            },
            third_party_analytics: {
              n: 5,
              c: CAccountPrivacyCookiePreferences_ThirdPartyAnalytics,
            },
            third_party_content: {
              n: 6,
              c: CAccountPrivacyCookiePreferences_ThirdPartyContent,
            },
            utm_enabled: {
              n: 7,
              d: !0,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  CAccountPrivacyCookiePreferences_ContentCustomization = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.recentapps || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            recentapps: {
              n: 1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  CAccountPrivacyCookiePreferences_ValveAnalytics = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.product_impressions_tracking || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            product_impressions_tracking: {
              n: 1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  CAccountPrivacyCookiePreferences_ThirdPartyAnalytics = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.google_analytics || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            google_analytics: {
              n: 1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  CAccountPrivacyCookiePreferences_ThirdPartyContent = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.youtube || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            youtube: {
              n: 1,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            vimeo: {
              n: 2,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            sketchfab: {
              n: 3,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            twitter: {
              n: 4,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
    }
  },
  CAccountPrivacy_GetCookiePreferences_Request = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        import_google_protobuf.Message.initialize(this, t, 0, -1, void 0, null);
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(t, n) {
      return t ? { $jspbMessageInstance: n } : {};
    }
    static fromObject(n) {
      return new t();
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(t, n) {
      return t;
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {}
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  CAccountPrivacy_GetCookiePreferences_Response = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        t.prototype.preferences || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            preferences: { n: 1, c: CAccountPrivacyCookiePreferences },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf;
    }
    toObject(n = !1) {
      return t.toObject(n, this);
    }
    static toObject(n, r) {
      return ToObject(t.M(), n, r);
    }
    static fromObject(n) {
      return FromObject(t.M(), n);
    }
    static deserializeBinary(n) {
      let r = new import_google_protobuf.BinaryReader(n),
        i = new t();
      return t.deserializeBinaryFromReader(i, r);
    }
    static deserializeBinaryFromReader(n, r) {
      return DeserializeBinary(t.MBF(), n, r);
    }
    serializeBinary() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBuffer();
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return t.serializeBinaryToWriter(this, n), n.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  AccountPrivacyService;
(function (t) {
  function n(t, n, r) {
    return t.SendMsg(
      `AccountPrivacy.GetCookiePreferences#1`,
      initProtoBufMsgForServiceMethod(
        CAccountPrivacy_GetCookiePreferences_Request,
        n,
        r,
      ),
      CAccountPrivacy_GetCookiePreferences_Response,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  t.GetCookiePreferences = n;
})((AccountPrivacyService ||= {}));
function IsCookieAllowedByPreferences(t) {
  if (t.preferenceControls.isTechnicallyNecessary) return !0;
  let n = GetCurrentCookiePreferences();
  if (!n) return !1;
  switch (n.preference_state) {
    case 1:
    case 0:
      return !0;
    case 2:
    case 4:
      return !1;
  }
  return (
    `IsAllowed` in t.preferenceControls && t.preferenceControls.IsAllowed(n)
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
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  k_sessionIDCookie = {
    name: `sessionid`,
    options: { secure: !0, path: `/`, sameSite: `none` },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  k_responsiveViewPrefsCookie = {
    name: `strResponsiveViewPrefs`,
    options: { maxAge: 31536e6 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  },
  k_spoofedSteamIDCookie = {
    name: `steamLoginSpoofSteamID`,
    options: { path: `/`, secure: !0 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function ReadCookie(t) {
  if (!(`document` in globalThis) || !document.cookie) return;
  let n = document.cookie.match(`(^|; )` + t.name + `=([^;]*)`);
  if (n && n[2]) return decodeURIComponent(n[2]);
}
function WriteCookie(t, n) {
  if (!(`document` in globalThis) || !IsCookieAllowedByPreferences(t)) return;
  let r = t.options?.path ?? `/`,
    i = ``;
  t.options?.expires
    ? (i += `;expires=` + t.options.expires.toUTCString())
    : t.options?.maxAge &&
      (i += `;max-age=` + Math.floor(t.options.maxAge / 1e3)),
    t.options?.secure && (i += `;secure`),
    (document.cookie =
      encodeURIComponent(t.name) +
      `=` +
      encodeURIComponent(n) +
      i +
      `;path=` +
      r);
}
function ClearCookie(t) {
  return WriteCookie(
    { ...t, options: { ...t.options, expires: new Date(0) } },
    ``,
  );
}
function GetCurrentCookiePreferences() {
  return window.SSR?.renderContext?.cookiePrefs;
}
function __decorate(t, n, r, i) {
  var o = arguments.length,
    s =
      o < 3 ? n : i === null ? (i = Object.getOwnPropertyDescriptor(n, r)) : i,
    l;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    s = Reflect.decorate(t, n, r, i);
  else
    for (var u = t.length - 1; u >= 0; u--)
      (l = t[u]) && (s = (o < 3 ? l(s) : o > 3 ? l(n, r, s) : l(n, r)) || s);
  return o > 3 && s && Object.defineProperty(n, r, s), s;
}
var require_react_jsx_runtime_production = __commonJSMin((t) => {
    var n = Symbol.for(`react.transitional.element`),
      r = Symbol.for(`react.fragment`);
    function i(t, r, i) {
      var o = null;
      if (
        (i !== void 0 && (o = `` + i),
        r.key !== void 0 && (o = `` + r.key),
        `key` in r)
      )
        for (var s in ((i = {}), r)) s !== `key` && (i[s] = r[s]);
      else i = r;
      return (
        (r = i.ref),
        { $$typeof: n, type: t, key: o, ref: r === void 0 ? null : r, props: i }
      );
    }
    (t.Fragment = r), (t.jsx = i), (t.jsxs = i);
  }),
  require_jsx_runtime = __commonJSMin((t, n) => {
    n.exports = require_react_jsx_runtime_production();
  }),
  scriptRel = (function () {
    let t = typeof document < `u` && document.createElement(`link`).relList;
    return t && t.supports && t.supports(`modulepreload`)
      ? `modulepreload`
      : `preload`;
  })(),
  assetsURL = function (t, n) {
    return new URL(t, n).href;
  },
  seen = {},
  isCssPreloadUrl = function (t) {
    return t.pathname.endsWith(`.css`);
  },
  preloadOnce = function (t, n, r) {
    if (n in t) return t[n];
    let i = r();
    if (!i) {
      t[n] = void 0;
      return;
    }
    let o = i.then(
      () => {
        t[n] = void 0;
      },
      (r) => {
        throw ((t[n] = void 0), r);
      },
    );
    return (t[n] = o), o;
  },
  __vitePreload = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      let t,
        o = document.querySelector(`meta[property=csp-nonce]`),
        s = o?.nonce || o?.getAttribute(`nonce`);
      function l(t) {
        return Promise.all(
          t.map((t) =>
            Promise.resolve(t).then(
              (t) => ({ status: `fulfilled`, value: t }),
              (t) => ({ status: `rejected`, reason: t }),
            ),
          ),
        );
      }
      function u(t) {
        return import.meta.resolve
          ? new URL(import.meta.resolve(t))
          : new URL(t, import.meta.url);
      }
      i = l(
        n
          .map((n) => {
            n = assetsURL(n, r);
            let i = u(n),
              o = isCssPreloadUrl(i);
            return preloadOnce(seen, i.href, () => {
              if (t === void 0) {
                t = { all: new Set(), styles: new Set() };
                let n = document.getElementsByTagName(`link`);
                for (let r = n.length - 1; r >= 0; r--) {
                  let i = n[r];
                  t.all.add(i.href),
                    i.rel === `stylesheet` && t.styles.add(i.href);
                }
              }
              if ((o ? t.styles : t.all).has(i.href)) return;
              let n = document.createElement(`link`);
              if (
                ((n.rel = o ? `stylesheet` : scriptRel),
                o || (n.as = `script`),
                (n.crossOrigin = ``),
                (n.href = i.href),
                s && n.setAttribute(`nonce`, s),
                document.head.appendChild(n),
                o)
              )
                return new Promise((t, r) => {
                  n.addEventListener(`load`, t),
                    n.addEventListener(`error`, () =>
                      r(Error(`Unable to preload CSS for ${i}`)),
                    );
                });
            });
          })
          .filter((t) => t !== void 0),
      );
    }
    function o(t) {
      let n = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((n.payload = t), window.dispatchEvent(n), !n.defaultPrevented))
        throw t;
    }
    return i.then((n) => {
      for (let t of n || []) t.status === `rejected` && o(t.reason);
      return t().catch(o);
    });
  },
  IReadonlySubscribableValue = class {
    SyncStore(t) {
      return this.Subscribe(t).Unsubscribe;
    }
    GetValue() {
      return this.Value;
    }
  };
__decorate([bind], IReadonlySubscribableValue.prototype, `SyncStore`, null),
  __decorate([bind], IReadonlySubscribableValue.prototype, `GetValue`, null);
var ISubscribableValue = class extends IReadonlySubscribableValue {},
  CSubscribableValue = class extends ISubscribableValue {
    m_callbacks;
    m_currentValue;
    m_fnEquals;
    constructor(t, n) {
      super(),
        (this.m_callbacks = new CCallbackList()),
        (this.m_currentValue = t),
        (this.m_fnEquals = n);
    }
    Set(t) {
      if (this.m_fnEquals) {
        if (this.m_fnEquals(this.m_currentValue, t)) return !1;
      } else if (this.m_currentValue === t) return !1;
      return (this.m_currentValue = t), this.m_callbacks.Dispatch(t), !0;
    }
    get Value() {
      return this.m_currentValue;
    }
    Subscribe(t) {
      return { Unsubscribe: this.m_callbacks.Register(t).Unregister };
    }
    get SubscriberCount() {
      return this.m_callbacks.CountRegistered();
    }
  };
function SubscribableValue(t, n) {
  return new CSubscribableValue(t, n);
}
var CScheduledFunc = class {
  m_schTimer;
  m_fnCallback;
  m_fnOnCancel;
  Schedule(t, n) {
    this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = n),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, t));
  }
  AsyncSchedule(t, n) {
    return new Promise((r, i) => {
      this.Schedule(t, () => {
        n(), r();
      }),
        (this.m_fnOnCancel = i);
    });
  }
  IsScheduled() {
    return this.m_schTimer !== void 0;
  }
  Cancel() {
    if (this.m_schTimer) {
      let t = this.m_fnOnCancel;
      clearTimeout(this.m_schTimer), this.Reset(), t && t();
    }
  }
  Reset() {
    (this.m_schTimer = void 0),
      (this.m_fnCallback = void 0),
      (this.m_fnOnCancel = void 0);
  }
  ScheduledInternal() {
    let t = this.m_fnCallback;
    this.Reset(), t?.();
  }
};
__decorate([bind], CScheduledFunc.prototype, `ScheduledInternal`, null);
var CUnregisterList = class {
  m_vecCallbacks = [];
  Push(t) {
    this.m_vecCallbacks.push(t);
  }
  PushArrayRemove(t, n) {
    this.m_vecCallbacks.push(() => FindAndRemove(t, n));
  }
  Unregister() {
    for (let t of this.m_vecCallbacks) t();
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
function BIsSupportedLanguage(t) {
  return setSupportedLanguages.has(t);
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
for (let [t, n] of ISOLanguageNameMap.entries()) LanguageNameToISOMap.set(n, t);
LanguageNameToISOMap.set(`sc_schinese`, LanguageNameToISOMap.get(`schinese`)),
  LanguageNameToISOMap.set(`korean`, LanguageNameToISOMap.get(`koreana`));
function GetFallbackForLanguage(t) {
  if (t !== `english`) return t === `sc_schinese` ? `schinese` : `english`;
}
function BShouldLanguageUseRTL(t) {
  return t === `arabic`;
}
function ReplaceArgumentsInString(t, ...n) {
  return (
    n.length == 0 ||
      (t = t.replace(/%(?:(\d+)\$)?s/g, function (t, r) {
        if (r <= n.length && r >= 1) {
          let t = n[r - 1];
          return String(t ?? ``);
        }
        return t;
      })),
    t
  );
}
var locLoadPromises;
locLoadPromises ??= new Set();
var cachedLocReady = void 0;
function RegisterLocLoadPromise(t) {
  (locLoadPromises ??= new Set()),
    locLoadPromises.add(t),
    Promise.all(locLoadPromises);
}
var k_mapOptionalAppTypeSuffixes = {
  5: `_Guide`,
  10: `_Hardware`,
  4: `_DLC`,
  11: `_Music`,
  8: `_Series`,
  1: `_Demo`,
};
function GetAppTypeLocKeyVariant(t, n, r) {
  switch (n) {
    case 6:
      return t + `_Software`;
    case 7:
      return t + `_Video`;
  }
  let i = k_mapOptionalAppTypeSuffixes[n];
  return i && r(t + i) ? t + i : t;
}
function CreateProjectLocalization(t) {
  let n = new Map();
  async function r() {
    await WaitForConfigReady();
    let r = CurrentLocalizationSettings(),
      i = new Set([]);
    for (let t of r.languages) {
      i.add(t.strLanguage);
      let n = GetFallbackForLanguage(t.strLanguage);
      n && i.add(n);
    }
    return Promise.all(
      Array.from(i).map((r) =>
        t(r).then((t) => {
          if (!t) {
            console.error(`Project loc failed to load language ${r}, got ${t}`);
            return;
          }
          let i = new Map();
          for (let [n, r] of Object.entries(t)) i.set(`#` + n, r);
          n.set(r, i);
        }),
      ),
    );
  }
  let i = r(),
    o = !1,
    s = !1;
  i
    .then(() => (o = !0))
    .catch((t) => {
      console.error(`LoadStrings error`, t), (s = !0);
    }),
    RegisterLocLoadPromise(i);
  function l(t, r) {
    let [u, ...p] = r,
      m =
        n.get(u.strLanguage)?.get(t) ??
        n.get(GetFallbackForLanguage(u.strLanguage) ?? `english`)?.get(t);
    if (m !== void 0) return m;
    if (p.length === 0) {
      if (s)
        return (
          console.warn(
            `Couldn't find localization key ${t} after erroring loading strings`,
          ),
          t
        );
      if (!o) throw i;
      return (
        ErrorReportingStore().ReportError(
          Error(`Couldn't find localization key ${t}`),
          { bIncludeMessageInIdentifier: !0 },
        ),
        console.warn(`Couldn't find localization key ${t}`),
        t
      );
    }
    return l(t, p);
  }
  function u(t, ...n) {
    let r = CurrentLocalizationSettings().languages;
    return ReplaceArgumentsInString(l(t, r), ...n);
  }
  function p(t) {
    let r = CurrentLocalizationSettings().languages,
      i = [
        ...r.map((t) => t.strLanguage),
        GetFallbackForLanguage(r[0].strLanguage),
      ];
    for (let r of i) {
      if (!r) continue;
      let i = n.get(r);
      if (i && i.has(t)) return !0;
    }
    return !1;
  }
  return {
    Localize(t, ...n) {
      return u(t, ...n);
    },
    LocalizeReact(t, ...n) {
      let r = this.Localize(t);
      if (r === t) return r;
      let i = [],
        o = /(.*?)%(\d+)\$s/g,
        s = 0,
        l;
      for (; (l = o.exec(r)); ) {
        (s += l[0].length), i.push(l[1]);
        let t = parseInt(l[2]);
        t >= 1 && t <= n.length && i.push(n[t - 1]);
      }
      return (
        i.push(r.slice(s)),
        import_react.createElement(import_react.Fragment, null, ...i)
      );
    },
    LocalizePlural(t, n, ...r) {
      return u(n === 1 || n === `1` ? t : t + `_Plural`, n, ...r);
    },
    GetAppTypeLocKey(t, n) {
      return GetAppTypeLocKeyVariant(t, n, p);
    },
    GetAppTypePluralLocKey(t, n) {
      switch (n) {
        case 6:
          return t + `_Software`;
        case 7:
          return t + `_Video`;
        default:
          return t;
      }
    },
    LocalizeInSpecificLang(t, n, ...r) {
      return ReplaceArgumentsInString(l(n, [t]), ...r);
    },
    Ready() {
      return i;
    },
    IsReady() {
      return o;
    },
    HasKey: p,
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
function setRef(t, n) {
  t != null &&
    (typeof t == `function` ? t(n) : `current` in t && (t.current = n));
}
function useMultipleRefs(...t) {
  return import_react.useCallback((n) => {
    for (let r of t) setRef(r, n);
  }, t);
}
function MergeRefs(...t) {
  if (t && t.length !== 0)
    return t.length === 1
      ? t[0]
      : (n) =>
          t.forEach((t) => {
            if (t) typeof t == `function` ? t(n) : (t.current = n);
            else return;
          });
}
function useRefCallbackWithCleanup(t, n) {
  let r = import_react.useRef(void 0);
  return import_react.useCallback((n) => {
    r.current && r.current(), (r.current = t(n));
  }, n);
}
function useRefAndShareWith(t) {
  let n = import_react.useRef(null);
  return { refWithValue: n, refForElement: useMultipleRefs(t, n) };
}
function useSetRef(t, n) {
  let r = import_react.useRef(!1);
  import_react.useLayoutEffect(
    () => () => {
      r.current && setRef(t, void 0);
    },
    [t],
  ),
    import_react.useLayoutEffect(() => {
      (n || r.current) && (setRef(t, n), (r.current = !!n));
    }, [t, n]);
}
function useForceUpdate() {
  let [, t] = import_react.useState(0);
  return import_react.useCallback(() => t((t) => t + 1), []);
}
function useCallbackList(t, n) {
  import_react.useLayoutEffect(() => {
    if (!n || !t) return;
    let r = t.Register(n);
    return () => r.Unregister();
  }, [t, n]);
}
function NoOpSubscribe(t) {
  return NoOpGetSnapshot;
}
function NoOpGetSnapshot() {}
function useSubscribableValue(t) {
  return import_react.useSyncExternalStore(
    t ? t.SyncStore : NoOpSubscribe,
    t ? t.GetValue : NoOpGetSnapshot,
    t ? t.GetValue : NoOpGetSnapshot,
  );
}
function useValueWasTrueRecently(t, n) {
  let [r, i] = import_react.useState(t);
  return (
    import_react.useEffect(() => {
      if (t) i(!0);
      else {
        let t = window.setTimeout(() => i(!1), n);
        return () => window.clearTimeout(t);
      }
    }, [t, n]),
    r
  );
}
function useValueWasTrueRecentlyOrNow(t, n) {
  return useValueWasTrueRecently(t, n) || t;
}
function useLazyMemoizedValue(t) {
  let n = import_react.useRef(void 0);
  return import_react.useCallback(
    () => (
      (n.current && n.current.factory == t) ||
        (n.current = { value: t(), factory: t }),
      n.current.value
    ),
    [t],
  );
}
var require_classnames = __commonJSMin((t, n) => {
    (function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var t = ``, n = 0; n < arguments.length; n++) {
          var r = arguments[n];
          r && (t = o(t, i(r)));
        }
        return t;
      }
      function i(n) {
        if (typeof n == `string` || typeof n == `number`) return n;
        if (typeof n != `object`) return ``;
        if (Array.isArray(n)) return r.apply(null, n);
        if (
          n.toString !== Object.prototype.toString &&
          !n.toString.toString().includes(`[native code]`)
        )
          return n.toString();
        var i = ``;
        for (var s in n) t.call(n, s) && n[s] && (i = o(i, s));
        return i;
      }
      function o(t, n) {
        return n ? (t ? t + ` ` + n : t + n) : t;
      }
      n !== void 0 && n.exports
        ? ((r.default = r), (n.exports = r))
        : typeof define == `function` &&
            typeof define.amd == `object` &&
            define.amd
          ? define(`classnames`, [], function () {
              return r;
            })
          : (window.classNames = r);
    })();
  }),
  import_classnames = __toESM(require_classnames(), 1),
  ENavigationSoundType = (function (t) {
    return (
      (t[(t.LaunchGame = 0)] = `LaunchGame`),
      (t[(t.FriendMessage = 1)] = `FriendMessage`),
      (t[(t.ChatMention = 2)] = `ChatMention`),
      (t[(t.ChatMessage = 3)] = `ChatMessage`),
      (t[(t.ToastMessage = 4)] = `ToastMessage`),
      (t[(t.ToastAchievement = 5)] = `ToastAchievement`),
      (t[(t.ToastMisc = 6)] = `ToastMisc`),
      (t[(t.ToastMiscShort = 7)] = `ToastMiscShort`),
      (t[(t.FriendOnline = 8)] = `FriendOnline`),
      (t[(t.FriendInGame = 9)] = `FriendInGame`),
      (t[(t.VolSound = 10)] = `VolSound`),
      (t[(t.ShowModal = 11)] = `ShowModal`),
      (t[(t.HideModal = 12)] = `HideModal`),
      (t[(t.IntoGameDetail = 13)] = `IntoGameDetail`),
      (t[(t.OutOfGameDetail = 14)] = `OutOfGameDetail`),
      (t[(t.PagedNavigation = 15)] = `PagedNavigation`),
      (t[(t.ToggleOn = 16)] = `ToggleOn`),
      (t[(t.ToggleOff = 17)] = `ToggleOff`),
      (t[(t.SliderUp = 18)] = `SliderUp`),
      (t[(t.SliderDown = 19)] = `SliderDown`),
      (t[(t.ChangeTabs = 20)] = `ChangeTabs`),
      (t[(t.DefaultOk = 21)] = `DefaultOk`),
      (t[(t.OpenSideMenu = 22)] = `OpenSideMenu`),
      (t[(t.CloseSideMenu = 23)] = `CloseSideMenu`),
      (t[(t.BasicNav = 24)] = `BasicNav`),
      (t[(t.FailedNav = 25)] = `FailedNav`),
      (t[(t.Typing = 26)] = `Typing`),
      (t[(t.TimerExpired = 27)] = `TimerExpired`),
      (t[(t.Screenshot = 28)] = `Screenshot`),
      t
    );
  })({}),
  CAudioStore = class {
    m_fnCallbackOnPlaySound = new CCallbackList();
    m_fnCallbackOnSuppressSound = new CCallbackList();
    RegisterCallbackOnPlaySound(t) {
      return this.m_fnCallbackOnPlaySound.Register(t);
    }
    PlayNavSound(t, n) {
      this.m_fnCallbackOnPlaySound.Dispatch(t, n);
    }
    RegisterCallbackOnSuppressNavImminentSound(t) {
      return this.m_fnCallbackOnSuppressSound.Register(t);
    }
    SuppressImminentNavSound() {
      this.m_fnCallbackOnSuppressSound.Dispatch();
    }
  },
  AudioStore = new CAudioStore();
function IsHTMLElement$1(t) {
  return t != null && t.focus !== void 0;
}
function BIsParentOrSelf(t, n) {
  let r = n;
  for (; r; ) {
    if (
      (r.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (r = r.parentNode.host),
      r == t)
    )
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function DistanceBetweenRects$1(t, n) {
  let r = 0,
    i = 0;
  return (
    n.right < t.left
      ? (r = t.left - n.right)
      : n.left > t.right && (r = n.left - t.right),
    n.bottom < t.top
      ? (i = t.top - n.bottom)
      : n.top > t.bottom && (i = n.top - t.bottom),
    Math.sqrt(r * r + i * i)
  );
}
function ClientRectToScreenCoords(t, n) {
  return {
    top: t.screenTop + n.top,
    bottom: t.screenTop + n.bottom,
    left: t.screenLeft + n.left,
    right: t.screenLeft + n.right,
  };
}
function ComputeZoomForElement(t) {
  let n = 1,
    r = t;
  for (; r != null && r.tagName != `HTML`; ) {
    let t = getComputedStyle(r);
    if (t.zoom) {
      let r = Number.parseFloat(t.zoom);
      isNaN(r) || (n *= r);
    }
    r = r.parentElement;
  }
  return n;
}
function GetOwningWindowForEvent(t) {
  let n;
  return (
    t &&
      IsHTMLElement$1(t.currentTarget) &&
      (n = t.currentTarget.ownerDocument.defaultView),
    n
  );
}
function GetOwningWindowForElement$1(t) {
  let n;
  return t && (n = t.ownerDocument.defaultView), n;
}
function RunWhenDocumentReady(t) {
  document.readyState == `loading`
    ? document.addEventListener(`DOMContentLoaded`, t)
    : t();
}
function GetStyleSheetLinks() {
  return GetStyleSheetLinksForDocument(document);
}
function GetStyleSheetLinksForDocument(t) {
  let n = {};
  return (
    t.querySelectorAll(`link[rel="stylesheet"]`).forEach((t) => {
      n[t.href] = t;
    }),
    n
  );
}
function AddMissingStylesheetsToWindow(t, n) {
  AddStylesheetsToDocument(t.document, n, !0);
}
function AddStylesheetsToDocument(t, n, r) {
  let i = Object.assign({}, n),
    o = t.getElementsByTagName(`head`)[0],
    s = o.getElementsByTagName(`link`),
    l = s.length;
  for (let t = 0; t < l; ++t) {
    let n = s[t];
    i[n.href] ? delete i[n.href] : r && n.parentNode?.removeChild(n);
  }
  let u = [];
  for (let n in i) {
    let r = i[n],
      o = t.createElement(`link`);
    for (let t = 0; t < r.attributes.length; t++) {
      let n = r.attributes.item(t);
      o.setAttribute(n.name, n.value);
    }
    u.push(o);
  }
  return o.prepend(...u), u;
}
function HandleMutationAddAndRemove(t, n, r) {
  if (t.type === `childList`) {
    for (let r = 0; r < t.addedNodes.length; r++) {
      let i = t.addedNodes[r];
      if (i.nodeType === Node.ELEMENT_NODE) {
        let t = i;
        t.parentElement && n(t);
      }
    }
    for (let n = 0; n < t.removedNodes.length; n++) {
      let i = t.removedNodes[n];
      i.nodeType === Node.ELEMENT_NODE && r?.(i);
    }
  }
}
var CLog = class {
  m_sName;
  m_fnIdGenerator = void 0;
  constructor(t, n) {
    (this.m_sName = t),
      (this.m_fnIdGenerator = n),
      CLogManager.Get().RegisterLogName(t);
  }
  Debug(...t) {
    this.Log(0, ...t);
  }
  Info(...t) {
    this.Log(1, ...t);
  }
  Warning(...t) {
    this.Log(2, ...t);
  }
  Error(...t) {
    this.Log(3, ...t);
  }
  Assert(t, ...n) {
    t || this.Log(3, `Assertion failed:`, ...n);
  }
  IsDebugEnabled() {
    return CLogManager.Get().IsDebugLogEnabled(this.m_sName);
  }
  Log(t, ...n) {
    let r = CLogManager.Get().IsDebugLogEnabled(this.m_sName);
    if (t == 0 && !r) return;
    let i = this.m_sName,
      o = this.m_fnIdGenerator?.() ?? null;
    o != null && (i += ` (` + o + `)`);
    let s = CLogManager.Get().IncludeBacktraceInLog,
      l = CLogManager.Get().AllowCSSInLogStyling;
    printStyledLogLine(t, r, s, l, i, this.m_sName, ...n);
  }
};
__decorate([bind], CLog.prototype, `Debug`, null),
  __decorate([bind], CLog.prototype, `Info`, null),
  __decorate([bind], CLog.prototype, `Warning`, null),
  __decorate([bind], CLog.prototype, `Error`, null),
  __decorate([bind], CLog.prototype, `Assert`, null);
var CLogManager = class t {
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
  LogAsLogManager(...t) {
    printStyledLogLine(
      1,
      !0,
      this.IncludeBacktraceInLog,
      this.AllowCSSInLogStyling,
      `LogManager`,
      `LogManager`,
      ...t,
    );
  }
  async LoadSettings() {
    let n = (t, n) => {
      try {
        let r = localStorage.getItem(t);
        return r ? JSON.parse(r) : n;
      } catch {
        return n;
      }
    };
    (this.m_bIncludeBacktraceInLog = !!n(
      t.k_IncludeBacktraceInLog_StorageKey,
      !1,
    )),
      (this.m_bAllowCSSInLogStyling = !!n(
        t.k_AllowCSSInLogColors_StorageKey,
        !0,
      ));
    let r = n(t.k_EnabledLogNames_StorageKey, void 0);
    if (Array.isArray(r)) {
      this.m_setEnabledDebugLogs = new Set(r);
      for (let t of r) this.m_setKnownDebugLogs.add(t);
      this.LogAsLogManager(
        `Loaded debug enabled log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
    }
    (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
  }
  async SaveSettings() {
    localStorage.setItem(
      t.k_EnabledLogNames_StorageKey,
      JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
    ),
      localStorage.setItem(
        t.k_IncludeBacktraceInLog_StorageKey,
        JSON.stringify(this.m_bIncludeBacktraceInLog),
      ),
      localStorage.setItem(
        t.k_AllowCSSInLogColors_StorageKey,
        JSON.stringify(this.m_bAllowCSSInLogStyling),
      ),
      this.LogAsLogManager(
        `Saved enabled debug log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  PrintEnabledLogs(...t) {
    t &&
      t.length > 0 &&
      console.warn(
        `Use DebugLogEnable( '${t.join(`', '`)}' ) to enable a log. This function tells you what's enabled.`,
      ),
      this.LogAsLogManager(
        `Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  static Get() {
    return (
      globalThis.g_LogManager ?? (globalThis.g_LogManager = new t()),
      globalThis.g_LogManager
    );
  }
  get Loading() {
    return this.m_bLoading;
  }
  get LogNames() {
    return this.m_setKnownDebugLogs.values();
  }
  RegisterLogName(t) {
    this.m_setKnownDebugLogs.add(t);
  }
  IsLogName(t) {
    return this.m_setKnownDebugLogs.has(t);
  }
  IsDebugLogEnabled(t) {
    return this.m_setEnabledDebugLogs.has(t);
  }
  async ToggleDebugLogEnabled(t) {
    this.SetDebugLogEnabled(t, !this.IsDebugLogEnabled(t));
  }
  async SetDebugLogEnabled(t, n) {
    this.IsLogName(t)
      ? (n
          ? this.m_setEnabledDebugLogs.add(t)
          : this.m_setEnabledDebugLogs.delete(t),
        this.m_SettingsChangedCallback.Dispatch(),
        await this.SaveSettings())
      : console.warn(
          `No log named "${t}", available logs:`,
          this.GetLogNames(),
        );
  }
  async SetDebugLogsEnabled(t, ...n) {
    n.forEach((n) => this.SetDebugLogEnabled(n, t));
  }
  async SetAllDebugLogsEnabled(t) {
    (this.m_setEnabledDebugLogs = t
      ? new Set(this.m_setKnownDebugLogs)
      : new Set()),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  RegisterForSettingsChanges(t) {
    return this.m_SettingsChangedCallback.Register(t);
  }
  get IncludeBacktraceInLog() {
    return this.m_bIncludeBacktraceInLog;
  }
  async SetIncludeBacktraceInLog(t) {
    (this.m_bIncludeBacktraceInLog = t),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  get AllowCSSInLogStyling() {
    return this.m_bAllowCSSInLogStyling;
  }
  async SetAllowCSSInLogStyling(t) {
    (this.m_bAllowCSSInLogStyling = t),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  GetLogNames() {
    return Array.from(this.LogNames).sort();
  }
};
function colorForString(t) {
  let n = 0;
  for (let r = 0; r < t.length; r++) n = t.charCodeAt(r) + ((n << 5) - n);
  return [(n | 0) & 255, (n >> 8) & 255, (n >> 16) & 255];
}
function shouldUseBlack(t) {
  return (t[0] * 299 + t[1] * 587 + t[2] * 114) / 1e3 >= 128;
}
function emojiForLogLevel(t) {
  switch (t) {
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
function printStyledLogLine(t, n, r, i, o, s, ...l) {
  let u = o;
  r && (u = emojiForLogLevel(t) + ` ` + u);
  let p;
  if (i && n) {
    let t = colorForString(s).map((t, n) =>
        Math.round(
          Math.max(0, Math.min(255, ((t / 255 - 0.5) * 0.8 + 0.15) * 255)),
        ),
      ),
      n = shouldUseBlack(t),
      r = l.length >= 1 && typeof l[0] == `string` && l[0].includes(`%c`),
      i = r && l.shift();
    p = [
      `%c${u}%c:${r ? ` %c` + i : ``}`,
      `color: ${n ? `black` : `white`}; background: rgb(${t.join(`,`)}); padding: 0 1ch; border-radius: 3px;`,
      `color: transparent; margin-right: -1ch`,
      ...(r ? [``] : []),
      ...l,
    ];
  } else p = [`${u}:`, ...l];
  if (r)
    console.groupCollapsed(...p),
      console.trace(`Callstack`),
      console.groupEnd();
  else
    switch (t) {
      case 0:
      case 1:
        console.log(...p);
        break;
      case 2:
        console.warn(...p);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ...p) : console.error(...p);
    }
}
(window.DebugLogEnable = (...t) =>
  CLogManager.Get().SetDebugLogsEnabled(!0, ...t)),
  (window.DebugLogDisable = (...t) =>
    CLogManager.Get().SetDebugLogsEnabled(!1, ...t)),
  (window.DebugLogEnableAll = () =>
    CLogManager.Get().SetAllDebugLogsEnabled(!0)),
  (window.DebugLogDisableAll = () =>
    CLogManager.Get().SetAllDebugLogsEnabled(!1)),
  (window.DebugLogEnableBacktrace = () =>
    CLogManager.Get().SetIncludeBacktraceInLog(!0)),
  (window.DebugLogDisableBacktrace = () =>
    CLogManager.Get().SetIncludeBacktraceInLog(!1)),
  (window.DebugLogNames = () => CLogManager.Get().GetLogNames()),
  (window.DebugLogEnabled = (...t) => CLogManager.Get().PrintEnabledLogs(...t)),
  (window.EnableSteamConsole = (t = !0) =>
    CLogManager.Get().SetDebugLogEnabled(`SteamClient`, t));
var EGamepadButton = (function (t) {
  return (
    (t[(t.INVALID = 0)] = `INVALID`),
    (t[(t.OK = 1)] = `OK`),
    (t[(t.CANCEL = 2)] = `CANCEL`),
    (t[(t.SECONDARY = 3)] = `SECONDARY`),
    (t[(t.OPTIONS = 4)] = `OPTIONS`),
    (t[(t.BUMPER_LEFT = 5)] = `BUMPER_LEFT`),
    (t[(t.BUMPER_RIGHT = 6)] = `BUMPER_RIGHT`),
    (t[(t.TRIGGER_LEFT = 7)] = `TRIGGER_LEFT`),
    (t[(t.TRIGGER_RIGHT = 8)] = `TRIGGER_RIGHT`),
    (t[(t.DIR_UP = 9)] = `DIR_UP`),
    (t[(t.DIR_DOWN = 10)] = `DIR_DOWN`),
    (t[(t.DIR_LEFT = 11)] = `DIR_LEFT`),
    (t[(t.DIR_RIGHT = 12)] = `DIR_RIGHT`),
    (t[(t.SELECT = 13)] = `SELECT`),
    (t[(t.START = 14)] = `START`),
    (t[(t.LSTICK_CLICK = 15)] = `LSTICK_CLICK`),
    (t[(t.RSTICK_CLICK = 16)] = `RSTICK_CLICK`),
    (t[(t.LSTICK_TOUCH = 17)] = `LSTICK_TOUCH`),
    (t[(t.RSTICK_TOUCH = 18)] = `RSTICK_TOUCH`),
    (t[(t.LPAD_TOUCH = 19)] = `LPAD_TOUCH`),
    (t[(t.LPAD_CLICK = 20)] = `LPAD_CLICK`),
    (t[(t.RPAD_TOUCH = 21)] = `RPAD_TOUCH`),
    (t[(t.RPAD_CLICK = 22)] = `RPAD_CLICK`),
    (t[(t.REAR_LEFT_UPPER = 23)] = `REAR_LEFT_UPPER`),
    (t[(t.REAR_LEFT_LOWER = 24)] = `REAR_LEFT_LOWER`),
    (t[(t.REAR_RIGHT_UPPER = 25)] = `REAR_RIGHT_UPPER`),
    (t[(t.REAR_RIGHT_LOWER = 26)] = `REAR_RIGHT_LOWER`),
    (t[(t.STEAM_GUIDE = 27)] = `STEAM_GUIDE`),
    (t[(t.STEAM_QUICK_MENU = 28)] = `STEAM_QUICK_MENU`),
    (t[(t.DUMMY_INPUT = 29)] = `DUMMY_INPUT`),
    t
  );
})({});
function BActionDescriptionPropHasOptions(t) {
  return typeof t == `object` && !!t && `value` in t;
}
function BActionDescriptionsEqual(t, n) {
  return BActionDescriptionPropHasOptions(t) &&
    BActionDescriptionPropHasOptions(n)
    ? t.value === n.value &&
        !!t.bShowOnLeft == !!n.bShowOnLeft &&
        !!t.bShowOnFloatingVRFooter == !!n.bShowOnFloatingVRFooter
    : t === n;
}
var EFocusSource = (function (t) {
    return (
      (t[(t.GAMEPAD = 0)] = `GAMEPAD`),
      (t[(t.KEYBOARD = 1)] = `KEYBOARD`),
      (t[(t.APPLICATION = 2)] = `APPLICATION`),
      (t[(t.BROWSER = 3)] = `BROWSER`),
      (t[(t.AUTOFOCUS = 4)] = `AUTOFOCUS`),
      t
    );
  })({}),
  g_rgButtonToLogicalEventMapping = {
    [EGamepadButton.OK]: `vgp_onok`,
    [EGamepadButton.CANCEL]: `vgp_oncancel`,
    [EGamepadButton.SECONDARY]: `vgp_onsecondaryaction`,
    [EGamepadButton.OPTIONS]: `vgp_onoptions`,
    [EGamepadButton.START]: `vgp_onmenu`,
  };
function RegisterGamepadEvent(t, n, r) {
  return t.addEventListener(n, r), () => UnregisterGamepadEvent(t, n, r);
}
function UnregisterGamepadEvent(t, n, r) {
  t.removeEventListener(n, r);
}
function RegisterGamepadButtonDownEvent(t, n) {
  return RegisterGamepadEvent(t, `vgp_onbuttondown`, n);
}
function RegisterGamepadButtonUpEvent(t, n) {
  return RegisterGamepadEvent(t, `vgp_onbuttonup`, n);
}
function RegisterGamepadOKEvent(t, n) {
  return RegisterGamepadEvent(
    t,
    `vgp_onok`,
    WrapEventHandlerInStopPropagation(n),
  );
}
function RegisterGamepadCancelEvent(t, n) {
  return RegisterGamepadEvent(
    t,
    `vgp_oncancel`,
    WrapEventHandlerInStopPropagation(n),
  );
}
function RegisterGamepadSecondaryActionEvent(t, n) {
  return RegisterGamepadEvent(
    t,
    `vgp_onsecondaryaction`,
    WrapEventHandlerInStopPropagation(n),
  );
}
function RegisterGamepadOptionsEvent(t, n) {
  return RegisterGamepadEvent(
    t,
    `vgp_onoptions`,
    WrapEventHandlerInStopPropagation(n),
  );
}
function RegisterGamepadMenuEvent(t, n) {
  return RegisterGamepadEvent(
    t,
    `vgp_onmenu`,
    WrapEventHandlerInStopPropagation(n),
  );
}
function RegisterGamepadDirectionEvent(t, n) {
  return RegisterGamepadEvent(
    t,
    `vgp_ondirection`,
    WrapEventHandlerInStopPropagation(n),
  );
}
function RegisterGamepadFocusEvent(t, n) {
  return RegisterGamepadEvent(t, `vgp_onfocus`, n);
}
function RegisterGamepadBlurEvent(t, n) {
  return RegisterGamepadEvent(t, `vgp_onblur`, n);
}
function RegisterGamepadRequestFocusEvent(t, n) {
  return RegisterGamepadEvent(
    t,
    `vgp_requestfocus`,
    WrapEventHandlerInStopPropagation(n),
  );
}
function WrapEventHandlerInStopPropagation(t) {
  return (n) => {
    t(n) !== !1 && (n.stopPropagation(), n.preventDefault());
  };
}
function ConsolidateActionDescriptionMap(t) {
  let {
      onOKActionDescription: n,
      onCancelActionDescription: r,
      onSecondaryActionDescription: i,
      onOptionsActionDescription: o,
      onMenuActionDescription: s,
      actionDescriptionMap: l,
    } = t,
    u = { ...l };
  return (
    n !== void 0 && (u[EGamepadButton.OK] = n),
    r !== void 0 && (u[EGamepadButton.CANCEL] = r),
    i !== void 0 && (u[EGamepadButton.SECONDARY] = i),
    o !== void 0 && (u[EGamepadButton.OPTIONS] = o),
    s !== void 0 && (u[EGamepadButton.START] = s),
    u
  );
}
var import_jsx_runtime = require_jsx_runtime(),
  Log$3 = new CLog(`GamepadEvents`).Debug;
function useGamepadEvents(t, n, r) {
  r === void 0 &&
    (r = [
      t.onButtonDown,
      t.onButtonUp,
      t.onOKButton,
      t.onCancelButton,
      t.onSecondaryButton,
      t.onOptionsButton,
      t.onMenuButton,
      t.onGamepadDirection,
      t.onGamepadFocus,
      t.onGamepadBlur,
    ]),
    import_react.useEffect(() => {
      let r = n.current,
        i = [];
      return (
        r &&
          (t.onButtonDown &&
            i.push(RegisterGamepadButtonDownEvent(r, t.onButtonDown)),
          t.onButtonUp && i.push(RegisterGamepadButtonUpEvent(r, t.onButtonUp)),
          t.onOKButton && i.push(RegisterGamepadOKEvent(r, t.onOKButton)),
          t.onCancelButton &&
            i.push(RegisterGamepadCancelEvent(r, t.onCancelButton)),
          t.onSecondaryButton &&
            i.push(RegisterGamepadSecondaryActionEvent(r, t.onSecondaryButton)),
          t.onOptionsButton &&
            i.push(RegisterGamepadOptionsEvent(r, t.onOptionsButton)),
          t.onMenuButton && i.push(RegisterGamepadMenuEvent(r, t.onMenuButton)),
          t.onGamepadDirection &&
            i.push(RegisterGamepadDirectionEvent(r, t.onGamepadDirection)),
          t.onGamepadFocus &&
            i.push(RegisterGamepadFocusEvent(r, t.onGamepadFocus)),
          t.onGamepadBlur &&
            i.push(RegisterGamepadBlurEvent(r, t.onGamepadBlur))),
        () => i.forEach((t) => t())
      );
    }, r);
}
function StopGamepadEventPropagation(t) {
  return t.stopPropagation(), !1;
}
function useRootGamepadEvents(t, n, r) {
  let { onButtonDown: i, ...o } = t,
    s = import_react.useCallback(
      (t) => {
        i && i(t),
          Log$3(
            `Gamepad Event fired:`,
            t.detail.button,
            `, handled:`,
            i != null,
            `, propagation stopped:`,
            t.cancelBubble,
          ),
          !t.cancelBubble && r.OnRootButtonDown(t);
      },
      [i, r],
    );
  useGamepadEvents(o, n),
    useGamepadEvents(
      {
        onButtonDown: s,
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
      n,
      [s],
    );
}
var Logger$1 = new CLog(`FocusHistory`),
  Log$2 = Logger$1.Debug,
  k_EFocusHistoryRestoreBehavior_eRestoreFocusIfHadFocus = 0,
  k_EFocusHistoryRestoreBehavior_eRestoreFocusAlways = 1,
  CFocusNavHistoryBase = class t {
    m_root;
    constructor(t) {
      this.m_root = t;
    }
    static SerializeNavState(n, r = !0, i = !0) {
      return {
        root: t.SerializeNavNode(n, r, i),
        bHadFocus: n.BFocusWithin() && n.Tree.BIsActiveWithinContext(),
      };
    }
    static SerializeNavNode(n, r = !0, i = !0) {
      let o,
        [s, l] = n.GetChildren();
      s.length &&
        l != -1 &&
        r &&
        (o = s.map((n, r) => t.SerializeNavNode(n, r == l || i, i)));
      let u = { rgChildren: o };
      return (
        n.NavKey && (u.sNavKey = n.NavKey), l != -1 && (u.iActiveChild = l), u
      );
    }
    static RestoreSerializedNavState(n, r, i = 0) {
      let { root: o, bHadFocus: s } = r;
      n.Tree.Controller.RestoreHistoryTransaction(() => {
        t.RestoreSerializedNavNode(n, o),
          (i == 1 || (i == 0 && s)) && n.BTakeFocus(EFocusSource.APPLICATION);
      });
    }
    static RestoreSerializedNavNode(n, r, i = 0) {
      let { sNavKey: o, iActiveChild: s = -1, rgChildren: l } = r;
      o && AssertMsg(o == n.NavKey, `navkey mismatch`), n.SetActiveChild(s);
      let u = Logger$1.IsDebugEnabled()
        ? `[${n.Tree.id}]${PrefixStars(i)}`
        : ``;
      if (l && l.length) {
        let [r] = n.GetChildren();
        if (s != -1 && Logger$1.IsDebugEnabled()) {
          let t = l.length != r.length;
          Log$2(
            `${u}Restoring node ${n.NavKey} which had active child ${s} of ${l.length}${t ? `- now ${r.length} children.` : ``}`,
          );
        }
        let o = new Map();
        r.forEach((t) => {
          t.NavKey && o.set(t.NavKey, t);
        });
        for (let n of l) {
          if (!n.sNavKey) continue;
          let r = o.get(n.sNavKey);
          r && t.RestoreSerializedNavNode(r, n, i + 1);
        }
        if (s != -1 && l[s]?.sNavKey) {
          let t = o.get(l[s].sNavKey);
          Log$2(
            `${u}Restoring node ${n.NavKey}, child with focus: ${l[s].sNavKey} ${t === void 0 ? `MISSING!!` : ``}`,
          ),
            t && n.SetActiveChild(r.indexOf(t));
        }
        let p = 0,
          m = 0;
        for (; p < r.length && m < l.length; ) {
          for (; p < r.length && r[p].NavKey; ) p++;
          for (; m < l.length && l[m].sNavKey; ) m++;
          if (p >= r.length || m >= l.length) break;
          t.RestoreSerializedNavNode(r[p], l[m], i + 1), p++, m++;
        }
      }
    }
  };
function GetHistorySnapshot(t) {
  return CFocusNavHistoryBase.SerializeNavState(t, !0, !1);
}
function RestoreHistorySnapshot(t, n, r = 0) {
  return CFocusNavHistoryBase.RestoreSerializedNavState(t, n, r);
}
var CFocusNavHistory = class extends CFocusNavHistoryBase {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(
        CFocusNavHistoryBase.SerializeNavState(this.m_root),
      );
    }
    PopState(t = 0) {
      this.m_rgHistory.length &&
        CFocusNavHistoryBase.RestoreSerializedNavState(
          this.m_root,
          this.m_rgHistory.pop(),
          t,
        );
    }
  },
  CNamedFocusNavHistory = class extends CFocusNavHistoryBase {
    m_mapHistory = new Map();
    SaveState(t) {
      this.m_mapHistory.set(
        t,
        CFocusNavHistoryBase.SerializeNavState(this.m_root),
      );
    }
    RestoreState(t, n = 0) {
      let r = this.m_mapHistory.get(t);
      return r
        ? (console.log(`Restoring history for state ${t}`),
          CFocusNavHistoryBase.RestoreSerializedNavState(this.m_root, r, n),
          !0)
        : !1;
    }
  };
function PrefixStars(t) {
  if (t == 0) return ``;
  let n = ``;
  for (let r = 0; r < t; r++) n += `*`;
  return (n += ` `), n;
}
function IsHTMLElement(t) {
  return t != null && t.focus !== void 0;
}
function DistanceBetweenRects(t, n) {
  let r = 0,
    i = 0;
  return (
    n.right < t.left
      ? (r = t.left - n.right)
      : n.left > t.right && (r = n.left - t.right),
    n.bottom < t.top
      ? (i = t.top - n.bottom)
      : n.top > t.bottom && (i = n.top - t.bottom),
    Math.sqrt(r * r + i * i)
  );
}
function GetOwningWindowForElement(t) {
  let n;
  return t && (n = t.ownerDocument.defaultView), n;
}
function FindScrollableAncestor(t, n) {
  let r = t?.parentElement;
  for (; r; ) {
    if (IsHTMLElement(r)) {
      let t = window.getComputedStyle(r);
      if (
        t.position == `fixed` ||
        t.position == `sticky` ||
        ((!n || n == `x`) &&
          (t.overflowX == `scroll` || t.overflowX == `auto`)) ||
        ((!n || n == `y`) && (t.overflowY == `scroll` || t.overflowY == `auto`))
      )
        break;
    }
    r = r.parentElement;
  }
  return IsHTMLElement(r) ? r : null;
}
function FindAncestrally(t, n) {
  let r = t;
  for (; r; ) {
    if (n(r)) return r;
    r = r.parentElement;
  }
}
function BIsElementScrollableOnAxis(t, n) {
  if (!(`ownerDocument` in t)) return !0;
  let r = t.ownerDocument.defaultView.getComputedStyle(t),
    i = n === `x` ? r.overflowX : r.overflowY;
  return i === `auto` || i === `scroll`;
}
var TangentAxis2 = { x: `y`, y: `x` };
function OriginPos2() {
  return { x: 0, y: 0 };
}
function DotProduct2(t, n) {
  return t.x * n.x + t.y * n.y;
}
function DeltaVec2(t, n) {
  return { x: n.x - t.x, y: n.y - t.y };
}
function Dist2(t, n) {
  let r = DeltaVec2(t, n);
  return Math.sqrt(DotProduct2(r, r));
}
function ShallowCompareObjects(t, n, r) {
  return t == null || n == null
    ? t === n
    : typeof t != `object` ||
        typeof n != `object` ||
        Object.keys(t).length !== Object.keys(n).length
      ? !1
      : ((r ??= (t, n) => t === n),
        Object.keys(t).every((i) => n.hasOwnProperty(i) && r(t[i], n[i])));
}
function FindFocusableVisibleChild(t, n, r) {
  let i = [],
    [o, s] = t.GetChildren(),
    l = t.GetActiveChild(),
    u,
    p = l ? l.Element?.getBoundingClientRect() : null;
  if (l) {
    let t = ComputeIntersectionWithParent(l, n, r);
    if (
      t &&
      !t.offScreen &&
      ((u = FindFocusableVisibleElement(l, t, t.overlap, r)),
      u && !u.visibility.offScreen)
    )
      return u;
    t && i.push({ child: l, visibility: t });
  }
  let m = r || p;
  for (let t = 0; t < o.length; t++) {
    let r = o[t];
    if (r == l) continue;
    let s = ComputeIntersectionWithParent(r, n, m ?? void 0);
    s && i.push({ child: r, visibility: s });
  }
  i.sort(VisibilityComparator);
  let h;
  for (let t of i) {
    let { child: r, visibility: i } = t;
    if (
      i.offScreen &&
      h &&
      (!h.visibility.offScreen ||
        (i.distance && i.distance > h.visibility.distance))
    )
      break;
    let o =
      r == l
        ? u
        : FindFocusableVisibleElement(r, i, i.overlap || n, m ?? void 0);
    o && (!h || VisibilityComparator(o, h) < 0) && (h = o);
  }
  return h;
}
function FindFocusableVisibleElement(t, n, r, i) {
  switch (t.GetFocusable()) {
    case `none`:
      return;
    case `children`:
      return FindFocusableVisibleChild(t, n.overlap || r, i);
    case `self`:
      return { child: t, visibility: n };
  }
}
function VisibilityComparator(t, n) {
  let r = t.visibility,
    i = n.visibility;
  return r.offScreen
    ? i.offScreen
      ? r.distance - i.distance
      : 1
    : i.offScreen
      ? -1
      : r.distance - i.distance;
}
function ComputeIntersectionWithParent(t, n, r) {
  let i = t.Element?.getBoundingClientRect(),
    o = t.GetFocusable(),
    s;
  if (o == `none` || !i || !n) return null;
  if (o == `self`) {
    if (
      i.top < n.top ||
      i.right > n.right ||
      i.bottom > n.bottom ||
      i.left < n.left
    ) {
      let t = i.top + i.height / 2,
        r = i.left + i.width / 2;
      if (t < n.top) return { offScreen: `top`, distance: n.top - t };
      if (r > n.right) return { offScreen: `right`, distance: r - n.right };
      if (t > n.bottom) return { offScreen: `bottom`, distance: t - n.bottom };
      if (r < n.left) return { offScreen: `left`, distance: n.left - r };
    }
    r && (s = DistanceBetweenRects$1(i, r));
  } else if (o == `children`) {
    let r = t.Element;
    if (!r) return null;
    if (r.scrollHeight > i.height || r.scrollWidth > i.width) {
      let t = r.ownerDocument.defaultView.getComputedStyle(r);
      if (t.overflowX == `visible` || t.overflowY == `visible`)
        return { overlap: n };
    }
    if (i.bottom < n.top)
      return { offScreen: `top`, distance: n.top - i.bottom };
    if (i.left > n.right)
      return { offScreen: `right`, distance: i.left - n.right };
    if (i.top > n.bottom)
      return { offScreen: `bottom`, distance: i.top - n.bottom };
    if (i.right < n.left)
      return { offScreen: `left`, distance: n.left - i.right };
  }
  return {
    overlap: {
      top: Math.max(i.top, n.top),
      right: Math.min(i.right, n.right),
      bottom: Math.min(i.bottom, n.bottom),
      left: Math.max(i.left, n.left),
    },
    distance: s,
  };
}
var CAnimation = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(t, n) {
      (this.m_window = t), (this.m_options = { timing: `sine`, ...n });
    }
    Start() {
      (this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration);
      let t;
      switch (this.m_options.timing) {
        case `linear`:
          t = function (t) {
            return t;
          };
          break;
        case `cubic-in-out`:
          t = function (t) {
            return t < 0.5
              ? 4 * t * t * t
              : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          };
          break;
        default:
          t = function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          };
      }
      (this.m_bActive = !0),
        (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, t)),
        this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    BIsActive() {
      return this.m_bActive;
    }
    End() {
      if (this.m_bActive) {
        try {
          this.Update(1);
        } catch {}
        this.ClearInterval(), this.FireOnComplete();
      }
    }
    FireOnComplete() {
      this.m_options.onComplete && this.m_options.onComplete();
    }
    Cancel() {
      this.m_bActive = !1;
    }
    OnInterval(t) {
      if (!this.m_bActive) return;
      let n = performance.now() - this.m_msStart;
      if (n >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let r = n / this.m_options.msDuration;
      try {
        this.Update(t(r));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  CAnimationFunc = class extends CAnimation {
    m_fnCallback;
    constructor(t, n, r) {
      super(t, n), (this.m_fnCallback = r);
    }
    Update(t) {
      this.m_fnCallback(t);
    }
  },
  CPropertyAnimation = class extends CAnimation {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(t, n, r) {
      super(`ownerDocument` in t ? GetOwningWindowForElement(t) : t, r),
        (this.m_object = t),
        (this.m_propTargets = n);
    }
    Start() {
      this.m_props = {};
      for (let t in this.m_propTargets) {
        let n = parseFloat(this.m_object[t]) || 0,
          r = this.m_propTargets[t];
        n != r && (this.m_props[t] = { start: n, end: r });
      }
      super.Start();
    }
    Update(t) {
      for (let n in this.m_props) {
        let r = this.m_props[n],
          i = r.start + (r.end - r.start) * t;
        this.m_object[n] = i;
      }
    }
  },
  Log$1 = new CLog(`ScrollSnap`).Debug,
  g_bDefaultToUseNoTransformScroll = !1,
  g_tsDisableSmoothScrolling,
  k_nDisableSmoothScrollingCooldownMS = 500;
function HandleNavScroll(t, n, r, i, o) {
  let s = t.Element;
  if (!s) return;
  let l = [{ node: t, eScrollType: t.m_Properties?.scrollIntoViewType }];
  for (let n = t.Parent; n; n = n.Parent) {
    let t = n.m_Properties?.scrollIntoViewWhenChildFocused,
      r = n.m_Properties?.scrollIntoViewType;
    if (t) {
      let i = { node: n, eScrollType: r };
      t === `force` ? (l = [i]) : l.push(i);
    }
    if (r !== void 0)
      for (let t = l.length - 1; t >= 0 && l[t].eScrollType === void 0; t--)
        l[t].eScrollType = r;
  }
  for (; l.length; ) {
    let { node: i, eScrollType: u } = l.pop(),
      p = l.length == 0;
    if (
      (u === void 0 &&
        (u = g_bDefaultToUseNoTransformScroll
          ? EScrollIntoViewType.NoTransform
          : EScrollIntoViewType.Standard),
      i?.m_Properties?.fnScrollIntoViewHandler &&
        i.m_Properties.fnScrollIntoViewHandler(t, n, i) !== !1)
    )
      continue;
    let m = i.m_element,
      h =
        u == EScrollIntoViewType.NoTransform ||
        u == EScrollIntoViewType.NoTransformSparseContent ||
        !p;
    if (!n && r !== EFocusSource.GAMEPAD)
      Log$1(`No previous element for scrolling, will jump`),
        h
          ? ScrollIntoViewNoTransforms(s, m, `auto`)
          : (Log$1(
              `Scrolling Into View ('auto' via browser scrollIntoView):`,
              m,
            ),
            m?.scrollIntoView({
              behavior: `auto`,
              block: `nearest`,
              inline: `nearest`,
            }));
    else {
      let n = h ? GetBoundingRectNoTransform(m) : m.getBoundingClientRect(),
        r = m.ownerDocument.defaultView.innerHeight,
        i = 40,
        l = o ? 40 : Math.max(r * 0.4, 40),
        u = !1,
        p =
          g_tsDisableSmoothScrolling &&
          performance.now() - g_tsDisableSmoothScrolling <
            k_nDisableSmoothScrollingCooldownMS;
      (p || n.bottom < -l || n.top > r + l) &&
        ((u = !0),
        p ||
          Log$1(
            `Disabling smooth scrolling, ${n.bottom} < ${-l}, ${n.top} > ${r} + ${l} `,
          ));
      let g = u ? `auto` : `smooth`;
      u && (g_tsDisableSmoothScrolling = performance.now()),
        t.Tree.Controller.BIsRestoringHistory() && (g = `auto`),
        h
          ? ScrollIntoViewNoTransforms(s, m, g)
          : (Log$1(
              `Scrolling Into View ('${g}' via browser scrollIntoView):`,
              m,
            ),
            m.scrollIntoView({ behavior: g, block: `nearest` }));
    }
  }
  CheckScrollRegionToStartOrEnd(t, i);
}
function CheckScrollRegionToStartOrEnd(t, n) {
  let r = AxisFromGamepadDirection(n);
  if (!r) return;
  let i = null;
  for (let n = t; n; n = n.GetNavParentCrossingTrees())
    n.m_Properties?.scrollRegionToStartOrEnd && (i = n);
  if (i)
    for (
      let o = t;
      o &&
      !(
        o.BHasNavTargetInDirection(n, !0) ||
        (o != t &&
          o.Element &&
          o.m_Properties?.scrollRegionToStartOrEnd &&
          PerformScrollToStartOrEnd(o.Element, n, r, o == o.Tree.Root),
        o == i)
      );
      o = o.GetNavParentCrossingTrees()
    );
}
function PerformScrollToStartOrEnd(t, n, r, i) {
  let o = t,
    s = o.ownerDocument;
  if (
    ((i || o == s.body) &&
      s.defaultView &&
      !BIsElementScrollableOnAxis(o, r) &&
      (o = s.defaultView),
    !BIsElementScrollableOnAxis(o, r))
  )
    return;
  let l = GetScrollValues(o);
  if (r == `y`) {
    let t = n == EGamepadButton.DIR_DOWN ? l.MaxScrollTop() : 0;
    l.scrollTo({ top: t, behavior: `smooth` });
  } else {
    let t = n == EGamepadButton.DIR_RIGHT ? l.MaxScrollLeft() : 0;
    l.scrollTo({ left: t, behavior: `smooth` });
  }
}
function GetBoundingRectNoTransform(t) {
  if (!t) return { left: 0, top: 0, right: 0, bottom: 0 };
  if (!(`ownerDocument` in t))
    return { left: 0, right: t.innerWidth, top: 0, bottom: t.innerHeight };
  let n = 0,
    r = 0,
    i = t;
  for (; i; ) {
    if (`ownerDocument` in i) {
      let t = window.getComputedStyle(i);
      if (t.position === `fixed` || t.position === `sticky`) break;
    }
    (n += i.offsetTop), (r += i.offsetLeft), (i = i.offsetParent);
  }
  for (i = t?.parentElement; i; ) {
    let { scrollTop: t, scrollLeft: o } = GetAdjustedScrollForElement(i);
    if (((n -= t), (r -= o), `ownerDocument` in i)) {
      let t = window.getComputedStyle(i);
      if (t.position === `fixed` || t.position === `sticky`) break;
    }
    i = i.parentElement;
  }
  return {
    left: r,
    top: n,
    right: r + t.offsetWidth,
    bottom: n + t.offsetHeight,
  };
}
function GetEdges(t, n) {
  return n == `x`
    ? [t.left, t.right, t.right - t.left]
    : [t.top, t.bottom, t.bottom - t.top];
}
function CalculateNearestScroll(t, n, r, i) {
  let [o, s, l] = GetEdges(t, i),
    [u, p, m] = GetEdges(n, i),
    [h, g] = GetEdges(r, i);
  if (o < u && s > p) return 0;
  let _ = o - h,
    v = s + g,
    y = l > m;
  return (_ < u && !y) || (v > p && y)
    ? _ - u
    : (_ < u && y) || (v > p && !y)
      ? v - p
      : 0;
}
function ParseCSSLength(t) {
  return t == `auto`
    ? 0
    : t.endsWith(`px`)
      ? parseInt(t)
      : (console.log(`Unsupported length`, t), 0);
}
function GetScrollPadding(t) {
  let n;
  return (
    (n =
      `ownerDocument` in t
        ? t.ownerDocument.defaultView.getComputedStyle(t)
        : t.document.defaultView.getComputedStyle(
            window.document.documentElement,
          )),
    {
      left: ParseCSSLength(n.scrollPaddingLeft),
      right: ParseCSSLength(n.scrollPaddingRight),
      top: ParseCSSLength(n.scrollPaddingTop),
      bottom: ParseCSSLength(n.scrollPaddingBottom),
    }
  );
}
function GetScrollMargin(t) {
  if (!(`ownerDocument` in t)) return { left: 0, right: 0, top: 0, bottom: 0 };
  let n = t.ownerDocument.defaultView.getComputedStyle(t);
  return {
    left: ParseCSSLength(n.scrollMarginLeft),
    right: ParseCSSLength(n.scrollMarginRight),
    top: ParseCSSLength(n.scrollMarginTop),
    bottom: ParseCSSLength(n.scrollMarginBottom),
  };
}
function AdjustForScrollPadding(t, n) {
  let r = GetScrollPadding(t);
  return {
    left: Math.max(0, n.left + r.left),
    right: Math.max(0, n.right - r.right),
    top: Math.max(0, n.top + r.top),
    bottom: Math.max(0, n.bottom - r.bottom),
  };
}
function WithinOne(t) {
  return t > -1 && t < 1;
}
function ScrollIntoViewNoTransforms(t, n, r, i, o) {
  Log$1(
    `----------------------------------------------------------------------------------`,
  ),
    Log$1(`Scrolling Into View (NoTransform):`, n);
  let s = [],
    l = n,
    u = GetBoundingRectNoTransform(n),
    p = o ?? Number.MAX_VALUE;
  for (; l; ) {
    let t = FindScrollableAncestor(l);
    t ||= GetOwningWindowForElement(l);
    let n = GetScrollMargin(l),
      r = GetBoundingRectNoTransform(t),
      m = AdjustForScrollPadding(t, r),
      h = GetScrollValues(t),
      g = { element: t, left: 0, top: 0 };
    if (
      (Log$1(
        `Checking scroll div`,
        t,
        `scroll y:${h.scrollTop} of ${h.MaxScrollTop()}, x:${h.scrollLeft} of ${h.MaxScrollLeft()}, adjusted =>`,
        m,
        `target => `,
        u,
      ),
      (!i || i == `y`) &&
        BIsElementScrollableOnAxis(t, `y`) &&
        ((g.top = CalculateNearestScroll(u, m, n, `y`)),
        (g.top = Clamp(g.top, -h.scrollTop, h.MaxScrollTop() - h.scrollTop)),
        o &&
          ((g.top = Math.min(p, Math.abs(g.top)) * (g.top < 0 ? -1 : 1)),
          (p -= Math.abs(g.top))),
        Log$1(`- checked y: ${g.top}`)),
      (!i || i == `x`) &&
        BIsElementScrollableOnAxis(t, `x`) &&
        ((g.left = CalculateNearestScroll(u, m, n, `x`)),
        (g.left = Clamp(
          g.left,
          -h.scrollLeft,
          h.MaxScrollLeft() - h.scrollLeft,
        )),
        o &&
          ((g.left = Math.min(p, Math.abs(g.left)) * (g.left < 0 ? -1 : 1)),
          (p -= Math.abs(g.left))),
        Log$1(`- checked x: ${g.left}`)),
      s.push(g),
      (o && !p) || !(`ownerDocument` in t))
    )
      break;
    let _ = window.getComputedStyle(t);
    if (_.position === `fixed` || _.position === `sticky`) break;
    (l = t),
      (u = {
        top: u.top - g.top,
        right: u.right - g.left,
        bottom: u.bottom - g.top,
        left: u.left - g.left,
      });
  }
  let m = !1;
  for (let t of s) {
    if (WithinOne(t.left) && WithinOne(t.top)) continue;
    let n = GetScrollValues(t.element),
      i = n.scrollTop + t.top,
      o = n.scrollLeft + t.left;
    (o = Clamp(o, 0, n.MaxScrollLeft())),
      (i = Clamp(i, 0, n.MaxScrollTop())),
      !(WithinOne(n.scrollLeft - o) && WithinOne(n.scrollTop - i)) &&
        (n.scrollTo({ left: o, top: i, behavior: r }),
        (m ||= (Log$1(`Scrolling:`), !0)),
        Log$1(`- ${t.top},${t.left} => ${i}, ${o}, behavior: ${r}`, t.element));
  }
}
var CScrollValues = class {
  m_element;
  m_fnOriginalScrollTo;
  m_window;
  m_scrollTopTarget = void 0;
  m_scrollLeftTarget = void 0;
  m_animation = void 0;
  constructor(t) {
    `ownerDocument` in t
      ? ((this.m_element = t),
        (this.m_fnOriginalScrollTo = t.scrollTo),
        (this.m_element.scrollTo = (t, n) => {
          typeof t == `number`
            ? this.scrollTo({ left: t, top: n })
            : this.scrollTo(t);
        }))
      : ((this.m_window = t), (this.m_element = t.document.documentElement));
  }
  ResetScrollState() {
    (this.m_scrollTopTarget = void 0),
      (this.m_scrollLeftTarget = void 0),
      this.m_window || (this.m_element.style.scrollSnapType = ``);
  }
  scrollTo(t) {
    if (t?.behavior != `smooth`)
      (this.m_animation &&= (this.m_animation.Cancel(), void 0)),
        this.m_window
          ? this.m_window.scrollTo(t)
          : this.m_fnOriginalScrollTo?.apply(this.m_element, [t]),
        this.ResetScrollState();
    else {
      let n = t.left ?? this.scrollLeft,
        r = t.top ?? this.scrollTop,
        i = `sine`;
      if (
        (this.m_animation && (this.m_animation.Cancel(), (i = `linear`)),
        Math.max(
          Math.abs(this.currentScrollTop - r),
          Math.abs(this.currentScrollLeft - n),
        ) > 0)
      ) {
        let t = {
          msDuration: 200,
          timing: i,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let i = this.currentScrollLeft,
            o = this.currentScrollTop;
          this.m_animation = new CAnimationFunc(this.m_window, t, (t) => {
            this.m_window?.scrollTo({
              left: i + (n - i) * t,
              top: o + (r - o) * t,
              behavior: `auto`,
            });
          });
        } else
          (this.m_element.style.scrollSnapType = `initial`),
            (this.m_animation = new CPropertyAnimation(
              this.m_element,
              { scrollTop: r, scrollLeft: n },
              t,
            ));
        (this.m_scrollLeftTarget = n),
          (this.m_scrollTopTarget = r),
          this.m_animation.Start();
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
function GetScrollValues(t) {
  let n = g_mapScrollValueCache.get(t);
  return n || ((n = new CScrollValues(t)), g_mapScrollValueCache.set(t, n)), n;
}
function GetAdjustedScrollForElement(t) {
  let n = g_mapScrollValueCache.get(t);
  return n
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
var Logger = new CLog(`FocusNavigationMovement`),
  Log = Logger.Debug,
  ENavLayout = (function (t) {
    return (
      (t[(t.NONE = 0)] = `NONE`),
      (t[(t.COLUMN = 1)] = `COLUMN`),
      (t[(t.ROW = 2)] = `ROW`),
      (t[(t.COLUMN_REVERSE = 3)] = `COLUMN_REVERSE`),
      (t[(t.ROW_REVERSE = 4)] = `ROW_REVERSE`),
      (t[(t.GRID = 5)] = `GRID`),
      (t[(t.GEOMETRIC = 6)] = `GEOMETRIC`),
      t
    );
  })({}),
  ENavPreferPosition = (function (t) {
    return (
      (t[(t.FIRST = 0)] = `FIRST`),
      (t[(t.LAST = 1)] = `LAST`),
      (t[(t.MAINTAIN_X = 2)] = `MAINTAIN_X`),
      (t[(t.MAINTAIN_Y = 3)] = `MAINTAIN_Y`),
      (t[(t.PREFERRED_CHILD = 4)] = `PREFERRED_CHILD`),
      t
    );
  })({}),
  EScrollIntoViewType = (function (t) {
    return (
      (t[(t.Standard = 0)] = `Standard`),
      (t[(t.NoTransform = 1)] = `NoTransform`),
      (t[(t.NoTransformSparseContent = 2)] = `NoTransformSparseContent`),
      t
    );
  })({}),
  EFlowDir = (function (t) {
    return (
      (t[(t.INVALID = 0)] = `INVALID`),
      (t[(t.FORWARD = 1)] = `FORWARD`),
      (t[(t.BACKWARD = 2)] = `BACKWARD`),
      t
    );
  })({}),
  CFocusNavNode = class t {
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
    constructor(t, n, r) {
      (this.m_Tree = t),
        (this.m_Parent = n),
        (this.m_FocusRing = r),
        (this.m_nDepth = n ? n.m_nDepth + 1 : 0);
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
    SetProperties(t) {
      let n = !ShallowCompareObjects(
          this.m_Properties?.actionDescriptionMap,
          t?.actionDescriptionMap,
          BActionDescriptionsEqual,
        ),
        r = this.m_Properties?.focusableIfEmpty,
        i = this.m_Properties?.noFocusRing;
      (this.m_Properties = t || {}),
        n && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.focusableIfEmpty && !r
          ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
          : !this.m_Properties.focusableIfEmpty &&
            r &&
            this.PropagateFocusableIfEmptyAncestorToDescendants(
              this.m_FocusableIfEmptyAncestor,
            ),
        this.m_Properties.noFocusRing && !i && this.BHasFocus()
          ? this.m_FocusRing?.OnBlur(EFocusSource.APPLICATION, this, this)
          : !this.m_Properties.noFocusRing &&
            i &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(EFocusSource.APPLICATION, this, this),
        this.m_element && this.RegisterDOMEvents();
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
      let t = this.m_element;
      return this.m_Properties?.focusRingSizeElementID
        ? (t?.ownerDocument?.getElementById(
            this.m_Properties.focusRingSizeElementID,
          ) ?? t)
        : t;
    }
    GetBoundingRectForFocusRing() {
      return this.GetElementForFocusRingMeasure()?.getBoundingClientRect();
    }
    GetBorderRadiusForFocusRing() {
      if (!this.m_Properties?.focusRingHasBorderRadius) return;
      let t = this.GetElementForFocusRingMeasure();
      if (!t) return;
      let n = t.ownerDocument?.defaultView?.getComputedStyle(t);
      if (n)
        return {
          borderTopLeftRadius: n.borderTopLeftRadius,
          borderTopRightRadius: n.borderTopRightRadius,
          borderBottomRightRadius: n.borderBottomRightRadius,
          borderBottomLeftRadius: n.borderBottomLeftRadius,
        };
    }
    SetHasFocus(t) {
      this.m_Focused.Set(t);
    }
    SetFocusWithin(t) {
      this.m_FocusWithin.Set(t) &&
        this.m_Properties?.onFocusWithin &&
        this.m_Properties.onFocusWithin(t);
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
    BuildConsolidatedActionDescriptionMap(t) {
      let n = this.m_Properties?.actionDescriptionMap;
      if (n)
        for (let r in n) {
          let i = r;
          t[i] === void 0 && (t[i] = n[i]);
        }
      return this.m_Parent
        ? this.m_Parent.BuildConsolidatedActionDescriptionMap(t)
        : this.m_Tree.GetParentEmbeddedNavTree()
          ? this.m_Tree
              .GetParentEmbeddedNavTree()
              .Root.BuildConsolidatedActionDescriptionMap(t)
          : t;
    }
    AddChild(t) {
      this.m_rgChildren.push(t),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.focusableIfEmpty
          ? t.SetFocusableIfEmptyAncestor(this)
          : this.m_FocusableIfEmptyAncestor &&
            t.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
        this.m_bMounted &&
          t.BFocusWithin() &&
          (AssertMsg(
            !this.m_ActiveChild && this.BFocusWithin(),
            `Invalid focus state in AddChild`,
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1));
    }
    OnMount(t) {
      (this.m_element = t),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : AssertMsg(
              this == this.m_Tree.Root,
              `Only root should have no parent`,
            ),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents();
      let n =
          this.m_FocusableIfEmptyAncestor &&
          this.m_FocusableIfEmptyAncestor.BHasFocus(),
        r = this.m_Properties?.autoFocus || n;
      if (this.BWantsAutoFocus() || r) {
        let t = -1;
        this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (t = this.m_rgChildren.findIndex((t) => t.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || r || t !== -1) &&
            (this.SetActiveChild(t),
            !this.m_Parent || this.m_Parent.m_element
              ? n
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_FocusableIfEmptyAncestor,
                    { bFocusDescendant: !0 },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0));
      } else if (this.m_rgChildren.length) {
        let t = this.m_rgChildren.findIndex((t) => t.BFocusWithin());
        t != -1 &&
          (this.SetActiveChild(t),
          AssertMsg(
            this.BFocusWithin(),
            `Child has focus, we should be m_bFocusWithin`,
          ));
      }
    }
    DEV_SetDebugPropsOnElement() {}
    OnUnmount() {
      this.m_Properties?.focusableIfEmpty &&
        this.PropagateFocusableIfEmptyAncestorToDescendants(
          this.m_FocusableIfEmptyAncestor,
        ),
        (this.m_bMounted = !1);
      let t = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      (this.BHasFocus() || t) &&
        (Log(
          `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? `will transfer to retain focus ancestor` : `will blur`}.`,
        ),
        t && this.Tree.DeferredFocus.RequestFocus(null),
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
            );
    }
    RegisterDOMEvents() {
      !this.m_rgNavigationHandlers.length &&
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
              this.m_element?.removeEventListener(`focus`, this.OnDOMFocus),
                this.m_element?.removeEventListener(`blur`, this.OnDOMBlur);
            })));
    }
    RemoveChild(t) {
      let n = this.m_rgChildren.indexOf(t);
      AssertMsg(n !== -1, `Child was not found to remove`),
        n !== -1 &&
          (this.m_ActiveChild == t && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(n, 1));
    }
    UnregisterDOMEvents() {
      this.m_rgNavigationHandlers.forEach((t) => t()),
        (this.m_rgNavigationHandlers = []),
        this.m_rgFocusHandlers.forEach((t) => t()),
        (this.m_rgFocusHandlers = []);
    }
    GetActiveDescendant() {
      let t = this.GetActiveChild();
      return t ? t.GetActiveDescendant() : this;
    }
    IsValidChildIndex(t) {
      return t >= 0 && t < this.m_rgChildren.length;
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
    EnsureChildrenSorted(t = !1) {
      (!this.m_bChildrenSorted || t) &&
        (this.m_rgChildren.sort((t, n) => {
          let r = t.m_element,
            i = n.m_element;
          if (!r || !r.isConnected) return !i || !i.isConnected ? 0 : 1;
          if (!i || !i.isConnected) return -1;
          let o = r.compareDocumentPosition(i);
          return o & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : o & Node.DOCUMENT_POSITION_FOLLOWING
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
      let t = this.GetActiveChild();
      return t ? t.GetLastFocusElement() : this.m_element;
    }
    OnDOMFocus(t) {
      if (!this.BHasFocus()) {
        if (this.GetFocusable() == `children`) {
          let t = this.FindFocusableDescendant();
          if (t && t !== this) {
            Log(
              `Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.`,
              this.m_element,
              t.m_element,
            ),
              this.m_Tree.TransferFocus(EFocusSource.BROWSER, t);
            return;
          }
        }
        this.m_Tree.TransferFocus(EFocusSource.BROWSER, this);
      }
    }
    OnDOMBlur(t) {
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
        focusable: t,
        focusableIfEmpty: n,
        childFocusDisabled: r,
        fnCanTakeFocus: i,
      } = this.m_Properties;
      return !this.m_bMounted || (i && !i(this))
        ? `none`
        : t || (n && (r || this.m_rgChildren.length == 0))
          ? `self`
          : !r && this.m_rgChildren.length
            ? `children`
            : `none`;
    }
    BTakeFocus(t, n) {
      let r = this.FindFocusableNode(n);
      return this.InternalFocusDescendant(r, t, n);
    }
    FindFocusableNode(t, n) {
      switch (this.GetFocusable()) {
        case `none`:
          return null;
        case `self`:
          return this;
        case `children`:
          return this.FindFocusableDescendant(t, n);
      }
    }
    BChildTakeFocus(t, n) {
      let r = this.FindFocusableDescendant(n);
      return this.InternalFocusDescendant(r, t, n);
    }
    BFocusFirstChild(t) {
      let n = this.FindNextFocusableChildInDirection(
        -1,
        1,
        EGamepadButton.INVALID,
      );
      return this.InternalFocusDescendant(n, t);
    }
    BFocusLastChild(t) {
      let n = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        EGamepadButton.INVALID,
      );
      return this.InternalFocusDescendant(n, t);
    }
    FindFocusableDescendant(t, n) {
      let r = AxisFromGamepadDirection(t),
        { focusableIfEmpty: i, childFocusDisabled: o } =
          this.m_Properties ?? {};
      if (o) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: o, resetNavOnEntry: s } =
            this.m_Properties ?? {},
          l = this.GetActiveChildIndex();
        s && t !== void 0 && (l = -1);
        let u = this.GetLayout();
        this.IsValidChildIndex(l) ||
          (l =
            l >= this.m_rgChildren.length || u == 4 || u == 3 || o == 1
              ? this.m_rgChildren.length - 1
              : 0);
        let p, m;
        if (
          (o == 2
            ? (m = `x`)
            : o == 3
              ? (m = `y`)
              : u == 6 && r && (m = TangentAxis2[r]),
          (m || n) && r)
        ) {
          let i = this.m_Tree.GetLastFocusedNode();
          if (n || (i && m == TangentAxis2[r])) {
            let s =
              n ||
              this.AdjustRectForLastMovementOnTangentAxis(
                i.GetBoundingRect(),
                r,
              );
            Log(
              `Taking focus while preserving ${o && ENavPreferPosition[o]} preserved: ${m} movement: ${r}, node:`,
              s,
            ),
              (p = this.FindClosestFocusableNodeToRect(t, s));
          } else if (m != TangentAxis2[r]) {
            let n = this.ComputeRelativeDirection(t, 5),
              r = n == 2 ? this.m_rgChildren.length : -1;
            p = this.FindNextFocusableChildInDirection(r, n, t);
          }
        } else if (o == 4) {
          let n = this.m_rgChildren;
          for (; n.length; ) {
            let r = [];
            for (let i of n) {
              if (
                ((p = i.BWantsPreferredFocus()
                  ? i.FindFocusableNode(t)
                  : void 0),
                p)
              )
                return p;
              r.push(...i.m_rgChildren);
            }
            n = r;
          }
        } else
          o == 1 && (p = this.FindNextFocusableChildInDirection(l + 1, 2, t));
        return (
          (p ||= this.FindNextFocusableChildInDirection(l - 1, 1, t)),
          (p ||= this.FindNextFocusableChildInDirection(l, 2, t)),
          p || (i ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(t) {
      let n = this.Element?.ownerDocument?.defaultView ?? window,
        r = { top: 0, left: 0, right: n.innerWidth, bottom: n.innerHeight },
        i = FindFocusableVisibleChild(this, r);
      return (
        Log(
          `Focusing visible child, best child match is ${i?.child?.Element?.className} - ${JSON.stringify(i?.visibility)}`,
        ),
        i ? i.child.BTakeFocus(t) : !1
      );
    }
    GetLayout() {
      return this.m_Properties?.layout
        ? this.m_Properties.layout
        : this.m_rgChildren.length < 2
          ? 0
          : InferLayoutFromElementCSS(this.m_element);
    }
    OnNavigationEvent(t) {
      let n = t.detail.button;
      if (this.BTryInternalNavigation(n, t.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: r,
          onMoveRight: i,
          onMoveDown: o,
          onMoveLeft: s,
        } = this.m_Properties ?? {},
        l = !1;
      switch (n) {
        case EGamepadButton.DIR_UP:
          r && (l = r(t.detail, this));
          break;
        case EGamepadButton.DIR_RIGHT:
          i && (l = i(t.detail, this));
          break;
        case EGamepadButton.DIR_DOWN:
          o && (l = o(t.detail, this));
          break;
        case EGamepadButton.DIR_LEFT:
          s && (l = s(t.detail, this));
      }
      return l;
    }
    InternalFocusDescendant(t, n, r) {
      return t ? (this.m_Tree.TransferFocus(n, t, r, !1), !0) : !1;
    }
    BHasNavTargetInDirection(t, n) {
      if (this.HasMovementHandler(t)) return !0;
      let r = this.FindNextFocusableChild(t);
      if (n && r) {
        let t = r.GetWrappedTree();
        if (t && t.GetExcludeFromScrollRegionSearch()) return !1;
        for (let t = r; t && t != this; t = t.m_Parent)
          if (t.m_Properties?.excludeFromScrollRegionSearch) return !1;
      }
      return !!r;
    }
    HasMovementHandler(t) {
      switch (t) {
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
    FindNextFocusableChild(t) {
      let n = this.GetLayout(),
        r = this.ComputeRelativeDirection(t, n);
      if (r == 0 || (this.m_Properties?.focusable && this.BHasFocus()))
        return null;
      if ((this.EnsureChildrenSorted(!0), n == 5))
        return this.FindNextFocusableChildInGrid(
          this.GetActiveChildIndex(),
          r,
          t,
        );
      if (n == 6) return this.FindNextFocusableChildGeometric(r, t);
      let i = this.GetActiveChildIndex();
      return (
        this.IsValidChildIndex(i) ||
          (i = r == 1 ? -1 : this.m_rgChildren.length),
        this.FindNextFocusableChildInDirection(i, r, t)
      );
    }
    BTryInternalNavigation(t, n) {
      Log(
        `Handling navigation event ${EGamepadButton[t]} - ${ENavLayout[this.GetLayout()]}`,
        this.m_element,
      );
      let r = this.FindNextFocusableChild(t);
      if (!r) return !1;
      let i = AxisFromGamepadDirection(t),
        o = this.ComputeRelativeDirection(t, this.GetLayout());
      if (this.GetScrollIntoViewType() == 2 || r.GetScrollIntoViewType() == 2) {
        let t = r.Element?.ownerDocument.defaultView;
        if (t) {
          let s = (i == `y` ? t.innerHeight : t.innerWidth) / (n ? 4.5 : 3.33),
            l = GetBoundingRectNoTransform(r.Element),
            u = !1;
          if (
            (i == `y`
              ? o == 1
                ? (u = l.top > t.innerHeight && l.bottom > t.innerHeight + s)
                : o == 2 && (u = l.bottom < 0 && l.top < -s)
              : i == `x` &&
                (o == 1
                  ? (u = l.left > t.innerWidth && l.right > t.innerWidth + s)
                  : o == 2 && (u = l.right < 0 && l.left < -s)),
            u)
          )
            return (
              Log(`Element too far away, scrolling ${s} on ${i} axis `),
              ScrollIntoViewNoTransforms(r.Element, r.Element, `smooth`, i, s),
              !0
            );
        }
      }
      return this.m_Tree.TransferFocus(EFocusSource.GAMEPAD, r, t), !0;
    }
    GetScrollIntoViewType() {
      return this.m_Properties?.scrollIntoViewType !== void 0 &&
        this.m_Properties?.scrollIntoViewType !== null
        ? this.m_Properties.scrollIntoViewType
        : this.m_Parent
          ? this.m_Parent.GetScrollIntoViewType()
          : 0;
    }
    GetRelativeDirection(t) {
      return this.ComputeRelativeDirection(t, this.GetLayout());
    }
    ComputeRelativeDirection(t, n) {
      let r = n == 4 || n == 3;
      switch (n) {
        case 2:
        case 4:
          switch (t) {
            case EGamepadButton.DIR_LEFT:
              return r ? 1 : 2;
            case EGamepadButton.DIR_RIGHT:
              return r ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (t) {
            case EGamepadButton.DIR_UP:
              return r ? 1 : 2;
            case EGamepadButton.DIR_DOWN:
              return r ? 2 : 1;
            default:
              return 0;
          }
        case 5:
        case 6:
          switch (t) {
            case EGamepadButton.DIR_LEFT:
            case EGamepadButton.DIR_UP:
              return r ? 1 : 2;
            case EGamepadButton.DIR_RIGHT:
            case EGamepadButton.DIR_DOWN:
              return r ? 2 : 1;
            default:
              return 0;
          }
        default:
          return 0;
      }
    }
    AdvanceIndex(t, n) {
      return t + (n == 1 ? 1 : -1);
    }
    FindNextFocusableChildInDirection(t, n, r) {
      let i = n == 1 ? 1 : -1;
      for (let n = t + i; n >= 0 && n < this.m_rgChildren.length; n += i) {
        let t = this.m_rgChildren[n].FindFocusableNode(r);
        if (t) return t;
      }
      return null;
    }
    ScanChildren(t, n, r) {
      let i = n == 1 ? 1 : -1;
      for (let n = t; n >= 0 && n < this.m_rgChildren.length; n += i)
        if (r(this.m_rgChildren[n], n)) return n;
      return -1;
    }
    FindNextFocusableChildInGrid(t, n, r) {
      let i = r == EGamepadButton.DIR_UP || r == EGamepadButton.DIR_DOWN,
        o = this.GetLastFocusElement();
      if (!o || o == this.m_element)
        return (
          AssertMsg(
            !1,
            `No active child for grid navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            o,
          ),
          this.FindFocusableDescendant(r)
        );
      let s = this.GetActiveDescendant().GetBoundingRect();
      if (
        ((r == EGamepadButton.DIR_UP || r == EGamepadButton.DIR_DOWN) &&
          (s = this.AdjustRectForLastMovementOnTangentAxis(s, `y`)),
        i)
      ) {
        let i = t;
        for (; i != -1; ) {
          let t = this.ScanChildren(
            this.AdvanceIndex(i, n),
            n,
            (t) => !BOverlapOnAxis(`y`, s, t.GetBoundingRect()),
          );
          if (t != -1) {
            let i = this.m_rgChildren[t].GetBoundingRect(),
              o = this.FindClosestChildInNextAxiallyAlignedSet(
                `x`,
                n,
                r,
                s,
                t,
                i,
              );
            if (o) return o;
          }
          i = t;
        }
      } else {
        let i = n == 1 ? 1 : -1;
        for (
          let o = this.AdvanceIndex(t, n);
          o >= 0 && o < this.m_rgChildren.length;
          o += i
        ) {
          let t = this.m_rgChildren[o];
          if (!BOverlapOnAxis(`y`, s, t.GetBoundingRect())) return null;
          let n = t.FindFocusableNode(r);
          if (n) return n;
        }
      }
      return null;
    }
    FindNextFocusableChildGeometric(t, n) {
      let r = this.GetLastFocusElement();
      if (!r || r == this.m_element)
        return (
          AssertMsg(
            !1,
            `No active child for geometric navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            r,
          ),
          this.FindFocusableDescendant(n)
        );
      let i = AxisFromGamepadDirection(n);
      if (!i) return null;
      let o = this.AdjustRectForLastMovementOnTangentAxis(
        this.GetActiveDescendant().GetBoundingRect(),
        i,
      );
      return this.FindClosetChildInDirection(i, o, t, n);
    }
    AdjustRectForLastMovementOnTangentAxis(t, n) {
      let r = this.m_Tree.GetLastFocusedMovementRect(TangentAxis2[n]);
      return r
        ? n == `x`
          ? { left: t.left, right: t.right, top: r.top, bottom: r.bottom }
          : { left: r.left, right: r.right, top: t.top, bottom: t.bottom }
        : t;
    }
    FindClosestFocusableNodeToRect(t, n) {
      let r = AxisFromGamepadDirection(t),
        i = r && TangentAxis2[r],
        o = [];
      for (let t of this.m_rgChildren) {
        let r = t.GetBoundingRect();
        if (r) {
          let s = DistanceBetweenRects(n, r),
            l = i ? RectOverlapOnAxis(i, n, r) : 0;
          o.push({ child: t, overlap: l, dist: s });
        }
      }
      o.sort((t, n) =>
        t.dist == n.dist ? n.overlap - t.overlap : t.dist - n.dist,
      );
      for (let { child: r } of o) {
        let i = r.FindFocusableNode(t, n);
        if (i) return i;
      }
      return null;
    }
    FindClosetChildInDirection(t, n, r, i) {
      Log(
        `Find child closest to rect, rect is at left ${n.left} top ${n.top} right ${n.right} bottom ${n.bottom}`,
      );
      let o = BoundsOfRectOnAxis(t, n),
        s = [];
      for (let i of this.m_rgChildren) {
        let l = i.GetBoundingRect();
        if (l) {
          let u = BoundsOfRectOnAxis(t, l),
            p;
          (p = r == 1 ? u.min - o.max : o.min - u.max),
            p >= 0 &&
              s.push({
                child: i,
                overlap: RectOverlapOnAxis(TangentAxis2[t], n, l),
                dist: p,
              });
        }
      }
      if (
        (s.sort((t, n) => {
          if (t.overlap) {
            if (!n.overlap) return -1;
          } else if (n.overlap) return 1;
          return t.dist - n.dist || n.overlap - t.overlap;
        }),
        Logger.IsDebugEnabled())
      ) {
        let t = s
          .slice(0, 3)
          .map(
            ({ dist: t, overlap: n, child: r }) =>
              `[ node: ${r.m_element?.className} dist: ${t} overlap: ${n} ]`,
          );
        Log(`Found nodes on axis, top 3 (of ${s.length}: ${t.join(`, `)}`);
      }
      for (let { child: t } of s) {
        let r = t.FindFocusableNode(i, n);
        if (r) return r;
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(t, n, r, i, o, s) {
      (!o || o < 0) && (o = 0);
      let l = [];
      if (!i) return null;
      let u = LeadingCornerOfRect(i);
      this.ScanChildren(o, n, (n) => {
        let r = n.GetBoundingRect();
        return r
          ? s && !BOverlapOnAxis(TangentAxis2[t], s, r)
            ? !0
            : (l.push({
                child: n,
                overlap: RectOverlapOnAxis(t, i, r),
                dist: DistToRectOnAxis(t, u, r),
              }),
              !1)
          : !1;
      }),
        n == 2 && l.reverse(),
        l.sort((t, n) => {
          let r = n.overlap - t.overlap;
          return r == 0 ? t.dist - n.dist : r;
        });
      for (let { child: t } of l) {
        let n = t.FindFocusableNode(r, i);
        if (n) return n;
      }
      return null;
    }
    GetChildren() {
      return (
        this.EnsureChildrenSorted(),
        [this.m_rgChildren, this.m_iLastActiveChildIndex]
      );
    }
    SetActiveChild(n) {
      n instanceof t
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = n),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(n)))
        : (this.IsValidChildIndex(n) &&
            (this.m_ActiveChild = this.m_rgChildren[n]),
          (this.m_iLastActiveChildIndex = n));
    }
    GetDepth() {
      return this.m_nDepth;
    }
    SetFocusableIfEmptyAncestor(t) {
      (this.m_FocusableIfEmptyAncestor = t),
        this.m_Properties?.focusableIfEmpty ||
          this.PropagateFocusableIfEmptyAncestorToDescendants(t);
    }
    PropagateFocusableIfEmptyAncestorToDescendants(t) {
      for (let n = 0; n < this.m_rgChildren.length; n++)
        this.m_rgChildren[n].SetFocusableIfEmptyAncestor(t);
    }
    OnFocusedDecendantRemoved(t) {
      this.m_Tree.DeferredFocus.RequestFocus(this, { bFocusDescendant: !0 });
    }
    SetDOMFocusAndScroll(t, n, r, i) {
      this.UpdateParentActiveChild(),
        this.m_Tree.OnChildActivated(t),
        this.m_Tree.BIsActiveFocus()
          ? (AssertMsg(
              !this.m_Tree.BUseVirtualFocus(),
              `Virtual focus tree should not have browser focus`,
            ),
            this.m_element?.focus({ preventScroll: !0 }))
          : this.m_Tree.BUseVirtualFocus() ||
            Log(
              `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
            ),
        this.m_Tree.BIsActive() && HandleNavScroll(this, n, t, r, i);
    }
  };
__decorate([bind], CFocusNavNode.prototype, `OnDOMFocus`, null),
  __decorate([bind], CFocusNavNode.prototype, `OnDOMBlur`, null),
  __decorate([bind], CFocusNavNode.prototype, `OnNavigationEvent`, null);
function GetNavTreeBridgeGlobal(t, n = window) {
  return n[t];
}
var FocusNavHandle = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(t) {
    this.m_node = t;
  }
  TakeFocus(t) {
    return this.m_node.BTakeFocus(
      t ? EFocusSource.GAMEPAD : EFocusSource.APPLICATION,
      t,
    );
  }
  ParentTakeFocus(t) {
    this.m_node.Parent?.BTakeFocus(
      t ? EFocusSource.GAMEPAD : EFocusSource.APPLICATION,
      t,
    );
  }
  ChildTakeFocus(t) {
    return this.m_node.BChildTakeFocus(
      t ? EFocusSource.GAMEPAD : EFocusSource.APPLICATION,
      t,
    );
  }
  FocusVisibleChild(t) {
    return this.m_node.BVisibleChildTakeFocus(t);
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
    (this.m_History ||= new CFocusNavHistory(this.m_node)),
      this.m_History.PushState();
  }
  PopState(t = 0) {
    this.m_History && this.m_History.PopState(t);
  }
  SaveState(t) {
    (this.m_StateHistory ||= new CNamedFocusNavHistory(this.m_node)),
      this.m_StateHistory.SaveState(t);
  }
  RestoreState(t, n = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(t, n) : !1;
  }
  GetFocusSnapshot() {
    return GetHistorySnapshot(this.m_node);
  }
  RestoreFocusSnapshot(t, n = 0) {
    return RestoreHistorySnapshot(this.m_node, t, n);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function BOverlapOnAxis(t, n, r, i = 0.001) {
  return t == `x`
    ? n.right > r.left + i && n.left + i < r.right
    : t == `y`
      ? n.bottom > r.top + i && n.top + i < r.bottom
      : (AssertMsg(!1, `Invalid axis ${t}`), !1);
}
function RectOverlapOnAxis(t, n, r) {
  let i;
  return (
    t == `x`
      ? (i = Math.min(n.right, r.right) - Math.max(n.left, r.left))
      : t == `y`
        ? (i = Math.min(n.bottom, r.bottom) - Math.max(n.top, r.top))
        : (AssertMsg(!1, `Invalid axis ${t}`), (i = 0)),
    i < 0 ? 0 : i
  );
}
function BoundsOfRectOnAxis(t, n) {
  return t == `x`
    ? { min: n.left, max: n.right }
    : { min: n.top, max: n.bottom };
}
function DistToRectOnAxis(t, n, r) {
  let i = n[t],
    o = BoundsOfRectOnAxis(t, r);
  return i < o.min ? o.min - i : i > o.max ? i - o.max : 0;
}
function LeadingCornerOfRect(t) {
  return { x: t.left, y: t.top };
}
var NullFocusRingListener = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function InferLayoutFromElementCSS(t) {
  if (!t) return ENavLayout.NONE;
  let n = t.ownerDocument.defaultView,
    r = n.getComputedStyle(t);
  if (r.display == `flex`)
    switch (r.flexDirection) {
      case `row`:
        return r.flexWrap == `wrap` ? ENavLayout.GRID : ENavLayout.ROW;
      case `row-reverse`:
        return ENavLayout.ROW_REVERSE;
      case `column`:
        return ENavLayout.COLUMN;
      case `column-reverse`:
        return ENavLayout.COLUMN_REVERSE;
    }
  else if (r.display == `grid`)
    return r.gridTemplateAreas === `none`
      ? ENavLayout.GRID
      : ENavLayout.GEOMETRIC;
  else if (t.childElementCount > 0) {
    let i = n.getComputedStyle(t.firstElementChild),
      o = i.float;
    if (
      (o === `inline-start`
        ? ((o = `left`), r.direction === `rtl` && (o = `right`))
        : o === `inline-end` &&
          ((o = `right`), r.direction === `rtl` && (o = `left`)),
      o === `left`)
    )
      return ENavLayout.ROW;
    if (o === `right`) return ENavLayout.ROW_REVERSE;
    if (i.display === `inline` || i.display === `inline-block`)
      return ENavLayout.GRID;
  }
  return ENavLayout.COLUMN;
}
function AxisFromGamepadDirection(t) {
  switch (t) {
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
function PanelFlowChildrenToNavLayout(t) {
  if (!t) return ENavLayout.NONE;
  switch (t) {
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
      return AssertNever(t, `Unhandled flow-children: ${t}`), ENavLayout.NONE;
  }
}
function CreateVirtualKeyboardRef(t) {
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
function useVirtualKeyboard(t, n) {
  let { onTextEntered: r, ...i } = t,
    o = import_react.useRef(null),
    s = import_react.useRef({});
  Object.assign(s.current, {
    ...i,
    BIsElementValidForInput: () =>
      o.current && document.activeElement == o.current,
  });
  let l = useVirtualKeyboardReference(s.current),
    u = import_react.useCallback(
      (t) => {
        (document.hasFocus() || document.activeElement != o.current) &&
          (t.currentTarget == o.current
            ? t.detail.focusedNode?.Element != o.current &&
              (l.BIsActive() || l.bInVR) &&
              l.DelayHideVirtualKeyboard()
            : console.warn(
                `keyboard got blur event, but it's not the active element`,
              ));
      },
      [l],
    ),
    p = import_react.useCallback(
      (t) => !l.bInVR && t.pointerType === `mouse`,
      [l],
    ),
    m = import_react.useCallback(
      (t) => {
        p(t) || l.ShowVirtualKeyboard();
      },
      [l, p],
    ),
    h = useRefCallbackWithCleanup(
      (t) => {
        o.current = t;
        let n = [];
        return (
          t &&
            (t.addEventListener(`focus`, l.SetAsCurrentVirtualKeyboardTarget),
            n.push(() =>
              t.removeEventListener(
                `focus`,
                l.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            t.addEventListener(`click`, m),
            n.push(() => t.removeEventListener(`click`, m)),
            n.push(RegisterGamepadOKEvent(t, l.ShowVirtualKeyboard)),
            n.push(RegisterGamepadBlurEvent(t, u))),
          () => n.forEach((t) => t())
        );
      },
      [u, m, l],
    );
  return (
    import_react.useLayoutEffect(
      () => (
        setRef(n, {
          TakeFocusAndShowKeyboard: (t) => {
            let n = o.current;
            n &&
              (document.activeElement != n && n.focus(),
              !(t && p(t)) && l.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            l.HideVirtualKeyboard();
          },
        }),
        () => setRef(n, null)
      ),
      [l, n, p],
    ),
    h
  );
}
function useVirtualKeyboardReference(t) {
  let n = import_react.useRef(void 0),
    r = import_react.useContext(VirtualKeyboardRefFactory);
  return (n.current ||= r(t || {})), n.current;
}
function ExpandVirtualKeyboardProps(t) {
  let {
    onEnterKeyPress: n,
    strEnterKeyLabel: r,
    onKeyboardNavOut: i,
    onKeyboardShow: o,
    onKeyboardFullyVisible: s,
    onTextEntered: l,
    BIsElementValidForInput: u,
    ...p
  } = t;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: n,
      strEnterKeyLabel: r,
      onKeyboardNavOut: i,
      onKeyboardShow: o,
      onKeyboardFullyVisible: s,
      onTextEntered: l,
      BIsElementValidForInput: u,
    },
    props: p,
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
function useNavigationSourceSupportsFocus(t = !0) {
  return (
    import_react.useContext(FocusNavigationWindowContext)?.bSupportsFocus ?? t
  );
}
var FocusNavigationRoot = import_react.forwardRef(function (t, n) {
  let {
      navID: r,
      onActivated: i,
      onDeactivated: o,
      navTreeRef: s,
      enabled: l,
      modal: u,
      virtualFocus: p,
      historyMode: m,
      parentEmbeddedNavTree: h,
      onGlobalButtonDown: g,
      disableFocusClasses: _,
      disabledRoot: v,
      excludeTreeFromScrollRegionSearch: y,
      "flow-children": x,
      ...S
    } = t,
    { elemProps: C, navOptions: w, gamepadEvents: T } = ExpandNavProps(S);
  return useFocusNavController()
    ? (0, import_jsx_runtime.jsx)(FocusNavRootContainer, {
        navID: r,
        onActivated: i,
        onDeactivated: o,
        navTreeRef: s,
        enabled: l,
        modal: u,
        virtualFocus: p,
        historyMode: m,
        parentEmbeddedNavTree: h,
        onGlobalButtonDown: g,
        disableFocusClasses: _,
        disabledRoot: v,
        excludeTreeFromScrollRegionSearch: y,
        "flow-children": x,
        ...w,
        ...T,
        children: (0, import_jsx_runtime.jsx)(`div`, { ...C, ref: n }),
      })
    : (0, import_jsx_runtime.jsx)(`div`, { ...C, ref: n });
});
function FocusNavRootContainer(t) {
  let {
      navID: n,
      onActivated: r,
      onDeactivated: i,
      navTreeRef: o,
      enabled: s = !0,
      modal: l = !1,
      virtualFocus: u = !1,
      historyMode: p,
      children: m,
      parentEmbeddedNavTree: h,
      onGlobalButtonDown: g,
      disableFocusClasses: _ = !1,
      disabledRoot: v = !1,
      excludeTreeFromScrollRegionSearch: y = !1,
      "flow-children": x,
      ...S
    } = t,
    { elemProps: C, navOptions: w, gamepadEvents: T } = ExpandNavProps(S),
    { refDiv: E, tree: D } = useFocusNavRoot({
      navID: n,
      parentEmbeddedNavTree: h,
      disabledRoot: v,
      enabled: s,
      onGlobalButtonDown: g,
      navTreeRef: o,
      virtualFocus: u,
      modal: l,
      historyMode: p,
      excludeTreeFromScrollRegionSearch: y,
    });
  useCallbackList(D.OnActivateCallbacks, r),
    useCallbackList(D.OnDeactivateCallbacks, i),
    useRootGamepadEvents(T, E, D),
    import_react.useLayoutEffect(() => {
      let t = PanelFlowChildrenToNavLayout(x);
      D.Root.SetProperties({ ...w, layout: t });
    });
  let O = useMultipleRefs(E, m.props.ref);
  return (0, import_jsx_runtime.jsx)(ActiveTreeContextRoot, {
    tree: v ? null : D,
    disableFocusClasses: _ || v,
    children: (0, import_jsx_runtime.jsx)(GamepadNavigationContext.Provider, {
      value: v ? null : D.Root,
      children: import_react.cloneElement(m, {
        id: n,
        "data-react-nav-root": n,
        ref: O,
      }),
    }),
  });
}
function useFocusNavRoot(t) {
  let {
      navID: n,
      parentEmbeddedNavTree: r,
      disabledRoot: i,
      excludeTreeFromScrollRegionSearch: o,
      enabled: s,
      navTreeRef: l,
      onGlobalButtonDown: u,
      ...p
    } = t,
    m = useFocusNavController(),
    h = useFocusNavigationWindowContext() || m.GetDefaultContext(),
    g = import_react.useContext(GamepadNavigationContext),
    [_] = import_react.useState(() =>
      m.NewGamepadNavigationTree(h, n, r ?? g?.Tree, {
        ...p,
        bIsEmbeddedInLegacyTree: !!r,
      }),
    ),
    v = import_react.useRef(null);
  return (
    _.SetOnGlobalButtonDown(u),
    import_react.useEffect(
      () => _.RegisterNavigationItem(_.Root, v.current),
      [_, v],
    ),
    import_react.useEffect(() => {
      _.SetIsEnabled(s);
    }, [_, s]),
    import_react.useEffect(() => {
      _.SetExcludeFromScrollRegionSearch(o);
    }, [_, o]),
    import_react.useEffect(() => {
      if (!i)
        return m.RegisterGamepadNavigationTree(
          _,
          v.current.ownerDocument.defaultView,
        );
    }, [m, _, i]),
    import_react.useEffect(() => (setRef(l, _), () => setRef(l, null)), [l, _]),
    { refDiv: v, tree: _ }
  );
}
var ActiveFocusNavTreeContext = import_react.createContext({
  bActiveTree: !1,
  bActiveTreeWithinWindow: !1,
  bDisableFocusClasses: !1,
  bIsMounted: !1,
});
function ActiveTreeContextRoot(t) {
  let { tree: n, disableFocusClasses: r = !1, children: i } = t,
    [o, s] = import_react.useState(n?.BIsActive() || !1),
    [l, u] = import_react.useState(n?.BIsActiveWithinWindow() || !1),
    p = useSubscribableValue(n?.SubscribableIsMounted) ?? !1;
  import_react.useEffect(() => {
    if (!n) {
      s(!1), u(!1);
      return;
    }
    s(n.BIsActive()), u(n.BIsActiveWithinWindow());
    let t = n.OnActiveStateChangedCallbacks.Register(() => {
        s(n.BIsActive()), u(n.BIsActiveWithinWindow());
      }),
      r = n.OnActiveWithinWindowChangedCallbacks.Register(() =>
        u(n.BIsActiveWithinWindow()),
      );
    return () => {
      t.Unregister(), r.Unregister();
    };
  }, [n]);
  let m = import_react.useMemo(
    () => ({
      bActiveTree: o,
      bActiveTreeWithinWindow: l,
      bDisableFocusClasses: r,
      bIsMounted: p,
    }),
    [o, r, l, p],
  );
  return (0, import_jsx_runtime.jsx)(ActiveFocusNavTreeContext.Provider, {
    value: m,
    children: i,
  });
}
function useActiveFocusNavTreeContext() {
  return import_react.useContext(ActiveFocusNavTreeContext);
}
var GamepadNavigationContext = import_react.createContext(null),
  FocusRingNavigationContext = import_react.createContext(
    NullFocusRingListener,
  );
function useGamepadNavigationNode(t, n) {
  let r = import_react.useRef(null);
  return (
    t &&
      (!r.current || r.current.m_Parent != t) &&
      (r.current = t.Tree.CreateNode(t, n)),
    r.current
  );
}
function useFocusNavRef(t) {
  let { navRef: n, ...r } = t,
    i = import_react.useRef(null),
    o = (0, import_react.useContext)(GamepadNavigationContext),
    s = useGamepadNavigationNode(
      o,
      (0, import_react.useContext)(FocusRingNavigationContext),
    );
  return (
    import_react.useLayoutEffect(() => {
      s && s.SetProperties(r);
    }),
    import_react.useLayoutEffect(() => {
      if (!o) return;
      let t = o.Tree.RegisterNavigationItem(s, i.current);
      return () => {
        t();
      };
    }, [o, s, i]),
    import_react.useLayoutEffect(() => {
      if (s && n) return setRef(n, s.CreateHandle()), () => setRef(n, null);
    }, [s, n]),
    { ref: i, node: s }
  );
}
function useHandleRequestFocusEvent(t) {
  let n = import_react.useRef(null),
    r = import_react.useRef(null);
  return (
    import_react.useEffect(
      () => () => {
        r.current?.();
      },
      [],
    ),
    import_react.useCallback(
      (i) => {
        n.current !== i &&
          ((n.current = i),
          r.current?.(),
          (r.current = null),
          i &&
            (r.current = RegisterGamepadRequestFocusEvent(i, (n) =>
              !t || t.GetFocusable() == `none`
                ? !1
                : t.BTakeFocus(void 0, n.detail.button),
            )));
      },
      [t],
    )
  );
}
function ExpandGamepadEventProps(t) {
  let {
      onButtonDown: n,
      onButtonUp: r,
      onOKButton: i,
      onCancelButton: o,
      onSecondaryButton: s,
      onOptionsButton: l,
      onGamepadDirection: u,
      onGamepadFocus: p,
      onGamepadBlur: m,
      onMenuButton: h,
      onOKActionDescription: g,
      onCancelActionDescription: _,
      onSecondaryActionDescription: v,
      onOptionsActionDescription: y,
      onMenuActionDescription: x,
      actionDescriptionMap: S,
      ...C
    } = t,
    w = {};
  return (
    n !== void 0 && (w.onButtonDown = n),
    r !== void 0 && (w.onButtonUp = r),
    i !== void 0 && (w.onOKButton = i),
    o !== void 0 && (w.onCancelButton = o),
    s !== void 0 && (w.onSecondaryButton = s),
    l !== void 0 && (w.onOptionsButton = l),
    h !== void 0 && (w.onMenuButton = h),
    u !== void 0 && (w.onGamepadDirection = u),
    p !== void 0 && (w.onGamepadFocus = p),
    m !== void 0 && (w.onGamepadBlur = m),
    {
      gamepadEvents: w,
      actionDescriptions: ConsolidateActionDescriptionMap({
        onOKActionDescription: g,
        onCancelActionDescription: _,
        onSecondaryActionDescription: v,
        onOptionsActionDescription: y,
        onMenuActionDescription: x,
        actionDescriptionMap: S,
      }),
      props: C,
    }
  );
}
function ExpandNavProps(t) {
  let {
      autoFocus: n,
      preferredFocus: r,
      disableNavSounds: i,
      fnCanTakeFocus: o,
      childFocusDisabled: s,
      focusableIfEmpty: l,
      onFocusWithin: u,
      navKey: p,
      noFocusRing: m,
      focusRingSizeElementID: h,
      focusRingHasBorderRadius: g,
      focusable: _,
      navRef: v,
      actionDescriptionMap: y,
      onMoveUp: x,
      onMoveRight: S,
      onMoveDown: C,
      onMoveLeft: w,
      navEntryPreferPosition: T,
      scrollIntoViewWhenChildFocused: E,
      fnScrollIntoViewHandler: D,
      scrollIntoViewType: O,
      resetNavOnEntry: k,
      scrollRegionToStartOrEnd: A,
      excludeFromScrollRegionSearch: j,
      ...M
    } = t,
    {
      gamepadEvents: N,
      actionDescriptions: P,
      props: F,
    } = ExpandGamepadEventProps(M);
  return {
    elemProps: F,
    navOptions: {
      autoFocus: n,
      preferredFocus: r,
      disableNavSounds: i,
      fnCanTakeFocus: o,
      childFocusDisabled: s,
      focusableIfEmpty: l,
      onFocusWithin: u,
      navKey: p,
      noFocusRing: m,
      focusRingSizeElementID: h,
      focusRingHasBorderRadius: g,
      focusable: _,
      navRef: v,
      onMoveUp: x,
      onMoveRight: S,
      onMoveDown: C,
      onMoveLeft: w,
      navEntryPreferPosition: T,
      scrollIntoViewWhenChildFocused: E,
      fnScrollIntoViewHandler: D,
      scrollIntoViewType: O,
      resetNavOnEntry: k,
      scrollRegionToStartOrEnd: A,
      excludeFromScrollRegionSearch: j,
      actionDescriptionMap: { ...y, ...P },
    },
    gamepadEvents: N,
  };
}
function FocusReactiveElementFactory(t) {
  return function (n) {
    let {
        focusClassName: r,
        focusWithinClassName: i,
        bFocusableByDefault: o,
        className: s,
        divRef: l,
        node: u,
        tabIndex: p,
        children: m,
        ...h
      } = n,
      g = useNavigationSourceSupportsFocus(),
      _ = useSubscribableValue(u.SubscribableHasFocus) && g,
      v = useSubscribableValue(u.SubscribableFocusWithin) && g,
      {
        bActiveTree: y,
        bActiveTreeWithinWindow: x,
        bDisableFocusClasses: S,
        bIsMounted: C,
      } = useActiveFocusNavTreeContext(),
      w = y && !S,
      T = C && !x && (p !== void 0 || o);
    return import_react.createElement(
      t,
      {
        ...h,
        className: (0, import_classnames.default)(s, _ && w && r, v && w && i),
        tabIndex: T ? -1 : p,
        ref: l,
      },
      m,
    );
  };
}
var FocusReactiveDiv = FocusReactiveElementFactory(`div`);
function DefaultOKHandler(t) {
  return (
    AudioStore.PlayNavSound(ENavigationSoundType.DefaultOk),
    IsHTMLElement$1(t.currentTarget) && t.currentTarget.click(),
    !0
  );
}
var FocusReactiveElementWrapper = import_react.createContext(void 0),
  FocusReactiveElementWrapperProvider = FocusReactiveElementWrapper.Provider;
function FocusableElementFactory(t, n, r, i, o) {
  let {
      elemProps: { focusClassName: s, children: l, "flow-children": u, ...p },
      navOptions: m,
      gamepadEvents: h,
    } = ExpandNavProps(r),
    {
      bFocusableByDefault: g = !0,
      bActivateByDefault: _ = !1,
      bDOMElementFocusByDefault: v = g,
    } = o || {};
  m.focusable === void 0 && !p.disabled && g && (m.focusable = !0);
  let { ref: y, node: x } = useFocusNavRef({
    layout: PanelFlowChildrenToNavLayout(u),
    ...m,
  });
  h.onOKButton ||
    (((`onClick` in p && p.onClick) || (_ && (_ === !0 || _(p)))) &&
      (h.onOKButton = DefaultOKHandler)),
    m.focusable && !v
      ? (p.tabIndex = p.tabIndex || 0)
      : !m.focusable && v && (p.tabIndex = p.tabIndex ?? -1),
    useGamepadEvents(h, y);
  let S = useMultipleRefs(i, y, useHandleRequestFocusEvent(x)),
    C = (0, import_react.useContext)(FocusReactiveElementWrapper)?.Component,
    w = { ...p };
  return (
    `onClick` in p && (w.role ??= `button`),
    x
      ? ((w = {
          ...w,
          divRef: S,
          node: x,
          focusClassName: (0, import_classnames.default)(s, `gpfocus`),
          focusWithinClassName: `gpfocuswithin`,
          bFocusableByDefault: v,
          className: (0, import_classnames.default)(p.className, `Focusable`),
        }),
        (0, import_jsx_runtime.jsx)(GamepadNavigationContext.Provider, {
          value: x,
          children: C
            ? import_react.createElement(C, { ...w, Component: n }, l)
            : import_react.createElement(n, w, l),
        }))
      : import_react.createElement(
          t,
          {
            ...w,
            ref: i,
            className: (0, import_classnames.default)(p.className, `Focusable`),
          },
          l,
        )
  );
}
function FocusableElement(t, n) {
  let r = FocusReactiveElementFactory(t);
  return import_react.forwardRef(function (i, o) {
    return FocusableElementFactory(t, r, i, o, n);
  });
}
function FocusableInputElement(t) {
  let n = FocusReactiveElementFactory(t);
  return import_react.forwardRef(function (r, i) {
    let {
        virtualKeyboardProps: o,
        props: { refKeyboardHandle: s, ...l },
      } = ExpandVirtualKeyboardProps(r),
      u = useMultipleRefs(i, useVirtualKeyboard(o, s));
    return FocusableElementFactory(t, n, l, u);
  });
}
function CreateFocusNavRef() {
  return import_react.createRef();
}
var FocusableDiv = FocusableElement(`div`, { bDOMElementFocusByDefault: !1 }),
  FocusableButton = FocusableElement(`button`, {
    bActivateByDefault: (t) => t.type === `submit`,
  }),
  FocusableAnchorInner = FocusableElement(`a`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  FocusableAnchor = import_react.forwardRef(function (t, n) {
    let { href: r = `#`, ...i } = t;
    return (0, import_jsx_runtime.jsx)(FocusableAnchorInner, {
      ref: n,
      href: r,
      ...i,
    });
  }),
  FocusableInput = FocusableInputElement(`input`),
  FocusableTextarea = FocusableInputElement(`textarea`),
  FocusableImg = FocusableElement(`img`, { bDOMElementFocusByDefault: !1 }),
  FocusableLabel = FocusableElement(`label`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  PanelSection = FocusableElement(`section`, { bFocusableByDefault: !1 }),
  PanelForm = FocusableElement(`form`, { bFocusableByDefault: !1 }),
  PanelSummary = FocusableElement(`summary`, { bActivateByDefault: !0 }),
  PanelDetails = FocusableElement(`details`, { bFocusableByDefault: !1 });
function useActivateNavTree(t, n, r = !1) {
  import_react.useEffect(() => {
    let i = t.current;
    i && (n ? i.Activate(r) : i.Deactivate());
  }, [n, r, t]);
}
var unknown = 0,
  global$1 = 3,
  application = 5,
  subscription = 6,
  search = 7,
  cart = 8,
  app = 9,
  storemenu = 12,
  about = 14,
  suggest = 15,
  dlc = 16,
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
  mac = 231,
  under10 = 232,
  under5 = 233,
  publisher = 234,
  publishers = 235,
  tag = 237,
  gettaggames = 238,
  explore = 239,
  tags = 241,
  Action = 250,
  Adventure = 251,
  Strategy = 252,
  RPG = 253,
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
  vr = 1453,
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
  rpg = 1606,
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
  ea = 2110,
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
    vr,
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
    rpg,
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
    ea,
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
function BIsKnownEventComponent(t) {
  return t in naveventdictionary_default;
}
var CStoreNavEvents = class t {
    static InstrumentLink(n, r, i = null) {
      let o = t.GetSNRLinkParam(r, i),
        s = t.GetCuratorClanIDParam(r);
      return t.AddNavParamToURL(n, o, s);
    }
    static ParseSNR(n) {
      let r = n.split(`_`) || [];
      return {
        domain: t.DecodeEventComponent(r[0]),
        controller: t.DecodeEventComponent(r[1]),
        method: t.DecodeEventComponent(r[2]),
        submethod: t.DecodeEventComponent(r[3]),
        feature: t.DecodeEventComponent(r[4]),
        depth: r[5] ? Number(r[5]) : void 0,
      };
    }
    static GetSNRLinkParam(n, r = null) {
      let i = t.ComputeLinkPrefix(
        n.domain,
        n.controller,
        n.method,
        n.submethod,
      );
      r = r ?? n.depth ?? null;
      let o = t.EncodeEventComponent(n.feature);
      return o && ((i += `_` + o), r && (i += `_` + r)), i;
    }
    static GetCuratorClanIDParam(t) {
      return t.curator_clanid ?? null;
    }
    static AddNavParamToURL(t, n, r) {
      if (!t || t.length == 0) return t;
      try {
        let i = new URL(EnsureKnownURLScheme(t)),
          o = new URLSearchParams(i.search);
        return (
          o.set(`snr`, encodeURIComponent(n ?? ``)),
          r && o.set(`curator_clanid`, encodeURIComponent(r ?? ``)),
          i.origin + i.pathname + `?` + o.toString() + i.hash
        );
      } catch (n) {
        return console.error(t, n), t;
      }
    }
    static ComputeLinkPrefix(n, r, i, o) {
      let s = ``;
      return (
        (s += t.EncodeEventComponent(n)),
        (s += `_`),
        (s += t.EncodeEventComponent(r)),
        (s += `_`),
        (s += t.EncodeEventComponent(i)),
        (s += `_`),
        (s += t.EncodeEventComponent(o)),
        s
      );
    }
    static EncodeEventComponent(t) {
      return t
        ? BIsKnownEventComponent(t)
          ? `` + naveventdictionary_default[t]
          : (t.match(/^[0-9]+$/) || (t = t.replace(/^[0-9]+/, ``)),
            t.replace(/[^a-zA-Z0-9\- ]+/g, ``))
        : ``;
    }
    static DecodeEventComponent(n) {
      let r = n && parseInt(n);
      if (r && naveventdictionary_default) {
        for (let t in naveventdictionary_default)
          if (naveventdictionary_default[t] == r) return t;
      }
      return t.SanitizeEventComponent(n);
    }
    static SanitizeEventComponent(t) {
      return !t || !t.match(/^[a-zA-Z0-9\-.]*$/) ? `` : t;
    }
  },
  _NavEventContext = import_react.createContext({}),
  _OriginatingNavEventContext = import_react.createContext(void 0);
function NavEventContext(t) {
  let { children: n, ...r } = t,
    i = useStoreNavEventContext(),
    o = import_react.useMemo(
      () => ({ ...i, ...r }),
      [
        i,
        r.domain,
        r.controller,
        r.method,
        r.submethod,
        r.feature,
        r.depth,
        r.curator_clanid,
      ],
    );
  return (0, import_jsx_runtime.jsx)(_NavEventContext.Provider, {
    value: o,
    children: n,
  });
}
function useStoreNavEventContext() {
  return import_react.useContext(_NavEventContext);
}
function useStoreNavLink(t, n, r) {
  let i = useStoreNavEventContext();
  return import_react.useMemo(
    () => t && GetStoreNavLink(i, t, n, r),
    [t, i, n, r],
  );
}
function GetStoreNavLink(t, n, r, i) {
  let o = CStoreNavEvents.GetSNRLinkParam({ ...t, feature: r || t.feature }, i),
    s = CStoreNavEvents.GetCuratorClanIDParam(t);
  return CStoreNavEvents.AddNavParamToURL(n, o, s);
}
export {
  useCallbackList as $,
  initProtoBufMsgForServiceMethod as $t,
  ENavPreferPosition as A,
  BIsReducedUILauncher as An,
  AssetURL as At,
  AddMissingStylesheetsToWindow as B,
  ESteamRealm as Bn,
  CommunityConfig as Bt,
  useActiveFocusNavTreeContext as C,
  ReaderProto as Cn,
  GET_BASE_URL as Ct,
  GetNavTreeBridgeGlobal as D,
  WriterProto as Dn,
  IsSteamChina as Dt,
  PanelFlowChildrenToNavLayout as E,
  ToObject as En,
  IsPlatformWindows as Et,
  FindAncestrally as F,
  EWindowBringToFront as Fn,
  GetSessionID as Ft,
  GetOwningWindowForElement$1 as G,
  EStoreItemTypeToString as Gt,
  BIsParentOrSelf as H,
  require_react as Hn,
  UserConfig$1 as Ht,
  useGamepadEvents as I,
  MapKoreanaToKorean as In,
  InitConfig as It,
  HandleMutationAddAndRemove as J,
  StoreBrowseService as Jt,
  GetOwningWindowForEvent as K,
  StoreBrowseContext as Kt,
  EFocusSource as L,
  PchLanguageToELanguage as Ln,
  GetConfigJSON as Lt,
  DeltaVec2 as M,
  ELanguagePchWebLanguageCode as Mn,
  GetSteamUIConfig as Mt,
  Dist2 as N,
  ENotificationLocationToString as Nn,
  GetWebConfig as Nt,
  EFlowDir as O,
  require_google_protobuf as On,
  UNKNOWN_BASE_URL as Ot,
  OriginPos2 as P,
  EUIModeToString as Pn,
  UserConfig as Pt,
  require_classnames as Q,
  CProtoBufMsg as Qt,
  EGamepadButton as R,
  k_GIDNil as Rn,
  GetOptionalConfigJSON as Rt,
  FocusNavigationRoot as S,
  FromObject as Sn,
  ConfigContextRoot as St,
  useShowDebugFocusRing as T,
  SerializeBinary as Tn,
  IsPlatformMac as Tt,
  ClientRectToScreenCoords as U,
  CStoreBrowse_GetItems_Request as Ut,
  AddStylesheetsToDocument as V,
  require_react_dom as Vn,
  Config$1 as Vt,
  ComputeZoomForElement as W,
  CStoreBrowse_GetItems_Response as Wt,
  AudioStore as X,
  StoreItemID as Xt,
  RunWhenDocumentReady as Y,
  StoreItem as Yt,
  ENavigationSoundType as Z,
  CStorePageFilter as Zt,
  FocusRingNavigationContext as _,
  MoveElement as _n,
  k_preferencesCookie as _t,
  CStoreNavEvents as a,
  RemapVal as an,
  useMultipleRefs as at,
  useHandleRequestFocusEvent as b,
  AddAccessors as bn,
  k_spoofedSteamIDCookie as bt,
  FocusableButton as c,
  CCDDBAppDetailCommon as cn,
  useSetRef as ct,
  FocusableTextarea as d,
  CMsgIPAddress as dn,
  BShouldLanguageUseRTL as dt,
  BinaryToHex as en,
  useForceUpdate as et,
  useActivateNavTree as f,
  UserContentDescriptorPreferences as fn,
  __vitePreload as ft,
  FocusReactiveDiv as g,
  FindAndRemoveWhere as gn,
  ReadCookie as gt,
  ExpandNavProps as h,
  FindAndRemove as hn,
  ClearCookie as ht,
  useStoreNavLink as i,
  Clamp as in,
  setRef as it,
  EScrollIntoViewType as j,
  ELanguagePchLanguage as jn,
  Config as jt,
  ENavLayout as k,
  BIsEFriendRelationshipFriend as kn,
  useInGamepadUI as kt,
  FocusableDiv as l,
  CClanMatchEventByRange as ln,
  CreateProjectLocalization as lt,
  ExpandGamepadEventProps as m,
  bind as mn,
  __decorate as mt,
  NavEventContext as n,
  k_EMsgServiceMethodCallFromClientNonAuthed as nn,
  useValueWasTrueRecentlyOrNow as nt,
  CreateFocusNavRef as o,
  RemapValClamped as on,
  useRefAndShareWith as ot,
  DefaultOKHandler as p,
  CCallbackList as pn,
  require_jsx_runtime as pt,
  GetStyleSheetLinks as q,
  StoreBrowseItemDataRequest as qt,
  useStoreNavEventContext as r,
  k_LinkRegex as rn,
  MergeRefs as rt,
  FocusableAnchor as s,
  ErrorReportingStore as sn,
  useRefCallbackWithCleanup as st,
  GetStoreNavLink as t,
  CUtlBuffer as tn,
  useLazyMemoizedValue as tt,
  FocusableInput as u,
  CLocalizationToken as un,
  CurrentLocalizationSettings as ut,
  GamepadNavigationContext as v,
  AssertMsg as vn,
  k_responsiveViewPrefsCookie as vt,
  useNavigationSourceSupportsFocus as w,
  RemapMetadataByField as wn,
  GET_BASE_WEB_PROPERTY as wt,
  FocusNavRootContainer as x,
  DeserializeBinary as xn,
  AccountPrivacyService as xt,
  useFocusNavRef as y,
  AssertNever as yn,
  k_sessionIDCookie as yt,
  CLog as z,
  BIsChinaRealm as zn,
  GetCookie as zt,
};
