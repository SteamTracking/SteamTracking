/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
var __create = Object.create,
  __defProp = Object.defineProperty,
  __getOwnPropDesc = Object.getOwnPropertyDescriptor,
  __getOwnPropNames = Object.getOwnPropertyNames,
  __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __esmMin = (t, n, r) => () => {
    if (r) throw r[0];
    try {
      return (t && (n = t((t = 0))), n);
    } catch (t) {
      throw ((r = [t]), t);
    }
  },
  __commonJSMin = (t, n) => () => (
    n || (t((n = { exports: {} }).exports, n, n.exports), (t = null)),
    n.exports
  ),
  __exportAll = (t, n) => {
    let r = {};
    for (var i in t) __defProp(r, i, { get: t[i], enumerable: !0 });
    return (n || __defProp(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  __copyProps = (t, n, r, i) => {
    if ((n && typeof n == `object`) || typeof n == `function`)
      for (var o = __getOwnPropNames(n), s = 0, l = o.length, u; s < l; s++)
        ((u = o[s]),
          !__hasOwnProp.call(t, u) &&
            u !== r &&
            __defProp(t, u, {
              get: ((t) => n[t]).bind(null, u),
              enumerable: !(i = __getOwnPropDesc(n, u)) || i.enumerable,
            }));
    return t;
  },
  __toESM = (t, n, r) => (
    (r = t == null ? {} : __create(__getProtoOf(t))),
    __copyProps(
      n || !t || !t.__esModule || !__hasOwnProp.call(t, `default`)
        ? __defProp(r, `default`, { value: t, enumerable: !0 })
        : r,
      t,
    )
  ),
  __toCommonJS = (t) =>
    __hasOwnProp.call(t, `module.exports`)
      ? t[`module.exports`]
      : __copyProps(__defProp({}, `__esModule`, { value: !0 }), t),
  __require = ((t) =>
    typeof require < `u`
      ? require
      : typeof Proxy < `u`
        ? new Proxy(t, {
            get: (t, n) => (typeof require < `u` ? require : t)[n],
          })
        : t)(function (t) {
    if (typeof require < `u`) return require.apply(this, arguments);
    throw Error(
      'Calling `require` for "' +
        t +
        "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.",
    );
  });
function AssertMsg(t, n, ...r) {
  console.assert
    ? r.length == 0
      ? console.assert(!!t, n)
      : console.assert(!!t, n, ...r)
    : t || console.warn(n, ...r);
}
function AssertFatal(t, n, ...r) {
  if (
    (console.assert
      ? r.length == 0
        ? console.assert(!!t, n)
        : console.assert(!!t, n, ...r)
      : t || console.warn(n, ...r),
    !t)
  )
    throw n;
}
function AssertNever(t, n, ...r) {
  AssertMsg(!1, n, ...r);
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
var require_google_protobuf = __commonJSMin((exports, module, this$1) => {
    var $jscomp = $jscomp || {};
    (($jscomp.scope = {}),
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
            (o in r || (r[o] = {}), (r = r[o]));
          }
          ((t = t[t.length - 1]),
            (i = r[t]),
            (n = n(i)),
            n != i &&
              n != null &&
              $jscomp.defineProperty(r, t, {
                configurable: !0,
                writable: !0,
                value: n,
              }));
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
              ((t += ``),
                n === void 0 && (n = r.length),
                (n = Math.max(0, Math.min(n | 0, r.length))));
              for (var i = t.length; 0 < i && 0 < n;)
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
              for (var s = 0; s < o && n < i;) if (r[n++] != t[s++]) return !1;
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
              for (var r = ``; t;) (t & 1 && (r += n), (t >>>= 1) && (n += n));
              return r;
            }
          );
        },
        `es6`,
        `es3`,
      ));
    var COMPILED = !0,
      goog = goog || {};
    ((goog.global = this$1 || self),
      (goog.exportPath_ = function (t, n, r) {
        ((t = t.split(`.`)),
          (r ||= goog.global),
          t[0] in r || r.execScript === void 0 || r.execScript(`var ` + t[0]));
        for (var i; t.length && (i = t.shift());)
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
            return ((t = goog.getObjectByName(t)), t ?? null);
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
          ((n = n.require(n.getCurrentModulePath())),
            (goog.loadedModules_[t] = {
              exports: n,
              type: goog.ModuleType.ES6,
              moduleId: t,
            }));
        }
      }),
      (goog.setTestOnly = function (t) {
        if (goog.DISALLOW_TEST_ONLY_CODE)
          throw (
            (t ||= ``),
            Error(
              `Importing test-only code into non-debug environment` +
                (t ? `: ` + t : `.`),
            )
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
        ((t = t.split(`.`)), (n ||= goog.global));
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
        ((t.instance_ = void 0),
          (t.getInstance = function () {
            return t.instance_
              ? t.instance_
              : (goog.DEBUG &&
                  (goog.instantiatedSingletons_[
                    goog.instantiatedSingletons_.length
                  ] = t),
                (t.instance_ = new t()));
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
            (goog.useSafari10Workaround() &&
              (t = goog.workaroundSafari10EvalBug(t)),
              (r = goog.loadModuleFromSource_.call(void 0, t)));
          else throw Error(`Invalid module definition`);
          var i = goog.moduleLoaderState_.moduleName;
          if (typeof i == `string` && i)
            (goog.moduleLoaderState_.declareLegacyNamespace
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
              }));
          else throw Error(`Invalid module name "` + i + `"`);
        } finally {
          goog.moduleLoaderState_ = n;
        }
      }),
      (goog.loadModuleFromSource_ = function (a) {
        return (eval(a), {});
      }),
      (goog.normalizePath_ = function (t) {
        t = t.split(`/`);
        for (var n = 0; n < t.length;)
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
            ((goog.global.$jscomp.transpile =
              goog.global.$gwtExport.$jscomp.transpile),
              (i = goog.global.$jscomp),
              (o = i.transpile));
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
            return (Array.prototype.unshift.apply(r, i), t.apply(n, r));
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
          return (n.push.apply(n, arguments), t.apply(this, n));
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
            ((r.type = `text/javascript`),
              (r.defer = !1),
              r.appendChild(n.createTextNode(t)),
              n.head.appendChild(r),
              n.head.removeChild(r));
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
        ((goog.cssNameMapping_ = t), (goog.cssNameMappingStyle_ = n));
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
        ((r.prototype = n.prototype),
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
          }));
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
          ((r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[i]),
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]));
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
          ((this.requiresTranspilation_ = null),
            (this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE));
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
            ((this.requiresTranspilation_ = r.map),
              (this.transpilationTarget_ =
                this.transpilationTarget_ || r.target));
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
              (s(t[o]),
                n[o].onLoad(function () {
                  ++l == t.length && r();
                }));
          } else r();
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
            (i(t),
              (t = !!this.depsToLoad_.length),
              (this.depsToLoad_ = this.depsToLoad_.concat(r)),
              this.paused_ || t || this.loadDeps_());
          } else
            throw (
              (t = `goog.require could not find: ` + t),
              goog.logToConsole_(t),
              Error(t)
            );
        }),
        (goog.DebugLoader_.prototype.loadDeps_ = function () {
          for (var t = this, n = this.paused_; this.depsToLoad_.length && !n;)
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
                  ((o = !0), t.loaded_(i));
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
            for (; this.deferredQueue_.length;)
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
          ((this.deferredCallbacks_[t.path] = n),
            this.deferredQueue_.push(t.path));
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
          ((this.path = t),
            (this.relativePath = n),
            (this.provides = r),
            (this.requires = i),
            (this.loadFlags = o),
            (this.loaded_ = !1),
            (this.loadCallbacks_ = []));
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
          return ((goog.Dependency.callbackMap_[n] = t), n);
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
              ((i =
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
                ));
            } else {
              var o = n.createElement(`script`);
              ((o.defer = goog.Dependency.defer_),
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
                      ((o.onload = null), t.loaded());
                    }),
                (o.src = goog.TRUSTED_TYPES_POLICY_
                  ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path)
                  : this.path),
                n.head.appendChild(o));
            }
          } else
            (goog.logToConsole_(
              `Cannot use default debug loader outside of HTML documents.`,
            ),
              this.relativePath == `deps.js`
                ? (goog.logToConsole_(
                    `Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true.`,
                  ),
                  t.loaded())
                : t.pause());
        }),
        (goog.Es6ModuleDependency = function (t, n, r, i, o) {
          goog.Dependency.call(this, t, n, r, i, o);
        }),
        goog.inherits(goog.Es6ModuleDependency, goog.Dependency),
        (goog.Es6ModuleDependency.prototype.load = function (t) {
          function n(t, n) {
            ((t = n
              ? `<script type="module" crossorigin>` + n + `<\/script>`
              : `<script type="module" crossorigin src="` + t + `"><\/script>`),
              i.write(
                goog.TRUSTED_TYPES_POLICY_
                  ? goog.TRUSTED_TYPES_POLICY_.createHTML(t)
                  : t,
              ));
          }
          function r(t, n) {
            var r = i.createElement(`script`);
            ((r.defer = !0),
              (r.async = !1),
              (r.type = `module`),
              r.setAttribute(`crossorigin`, !0));
            var o = goog.getScriptNonce();
            (o && r.setAttribute(`nonce`, o),
              n
                ? (r.textContent = goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createScript(n)
                    : n)
                : (r.src = goog.TRUSTED_TYPES_POLICY_
                    ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(t)
                    : t),
              i.head.appendChild(r));
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
              (goog.Dependency.unregisterCallback_(l),
                t.setModuleState(goog.ModuleType.ES6));
            });
            (s(void 0, `goog.Dependency.callback_("` + l + `")`),
              s(this.path, void 0));
            var u = goog.Dependency.registerCallback_(function (n) {
              (goog.Dependency.unregisterCallback_(u),
                t.registerEs6ModuleExports(
                  o.path,
                  n,
                  goog.moduleLoaderState_.moduleName,
                ));
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
              (goog.Dependency.unregisterCallback_(p),
                t.clearModuleState(),
                t.loaded());
            });
            s(void 0, `goog.Dependency.callback_("` + p + `")`);
          } else
            (goog.logToConsole_(
              `Cannot use default debug loader outside of HTML documents.`,
            ),
              t.pause());
        }),
        (goog.TransformedDependency = function (t, n, r, i, o) {
          (goog.Dependency.call(this, t, n, r, i, o),
            (this.contents_ = null),
            (this.lazyFetch_ =
              !goog.inHtmlDocument_() ||
              !(`noModule` in goog.global.document.createElement(`script`))));
        }),
        goog.inherits(goog.TransformedDependency, goog.Dependency),
        (goog.TransformedDependency.prototype.load = function (t) {
          function n() {
            ((o.contents_ = goog.loadFileSync_(o.path)),
              o.contents_ &&
                ((o.contents_ = o.transform(o.contents_)),
                o.contents_ &&
                  (o.contents_ +=
                    `
//# sourceURL=` + o.path)));
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
              (s &&
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
                t.loaded());
            }
          }
          function i() {
            var t = goog.global.document,
              n = goog.Dependency.registerCallback_(function () {
                (goog.Dependency.unregisterCallback_(n), r());
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
            (n(),
              this.contents_ &&
              goog.global.CLOSURE_IMPORT_SCRIPT(``, this.contents_)
                ? ((this.contents_ = null), t.loaded())
                : t.pause());
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
                ((goog.Dependency.defer_ = !0), t.pause());
                var m = p.onreadystatechange;
                p.onreadystatechange = function () {
                  (p.readyState == `interactive` &&
                    ((p.onreadystatechange = m), r(), t.resume()),
                    goog.isFunction(m) && m.apply(void 0, arguments));
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
          (goog.TransformedDependency.call(this, t, n, r, i, o),
            (this.transpiler = s));
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
          (goog.TransformedDependency.call(this, t, n, r, i, o),
            (this.needsTranspile_ = s),
            (this.transpiler_ = l));
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
          ((n ||= []), (t = t.replace(/\\/g, `/`)));
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
        return ((r = n in t) && delete t[n], r);
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
            ((r = goog.object.PROTOTYPE_FIELDS_[s]),
              Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]));
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
      }));
    var jspb = { asserts: {} };
    ((jspb.asserts.doAssertFailure = function (t, n, r, i) {
      var o = `Assertion failed`;
      if (r) {
        o += `: ` + r;
        var s = i;
      } else t && ((o += `: ` + t), (s = n));
      throw Error(`` + o, s || []);
    }),
      (jspb.asserts.assert = function (t, n, r) {
        var i = [...arguments].slice(2);
        return (t || jspb.asserts.doAssertFailure(``, null, n, i), t);
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
        (t && (this.message = String(t)), (this.reportErrorToServer = !0));
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
        (goog.debug.Error.call(this, goog.asserts.subs_(t, n)),
          (this.messagePattern = t));
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
        ((t = new goog.asserts.AssertionError(`` + o, s || [])),
          goog.asserts.errorHandler_(t));
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
              (goog.asserts.assert(t.length != null),
                Array.prototype.forEach.call(t, n, r));
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
        return ((r = 0 <= n) && goog.array.removeAt(t, n), r);
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
        ((r ||= i), (i = {}));
        for (var o = 0, s = 0; s < t.length;) {
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
        for (var s = 0, l = t.length, u; s < l;) {
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
        (goog.asserts.assert(0 <= n && n < t.length),
          goog.asserts.assert(0 <= r && r < t.length),
          (n = Array.prototype.splice.call(t, n, 1)),
          Array.prototype.splice.call(t, r, 0, n[0]));
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
          ((t[r] = t[i]), (t[i] = o));
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
          (255 < o && ((n[r++] = o & 255), (o >>= 8)), (n[r++] = o));
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
            return ((t = t.toString(16)), 1 < t.length ? t : `0` + t);
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
        for (var n = [], r = 0, i = 0; r < t.length;) {
          var o = t[r++];
          if (128 > o) n[i++] = String.fromCharCode(o);
          else if (191 < o && 224 > o) {
            var s = t[r++];
            n[i++] = String.fromCharCode(((o & 31) << 6) | (s & 63));
          } else if (239 < o && 365 > o) {
            s = t[r++];
            var l = t[r++],
              u = t[r++];
            ((o =
              (((o & 7) << 18) |
                ((s & 63) << 12) |
                ((l & 63) << 6) |
                (u & 63)) -
              65536),
              (n[i++] = String.fromCharCode(55296 + (o >> 10))),
              (n[i++] = String.fromCharCode(56320 + (o & 1023))));
          } else
            ((s = t[r++]),
              (l = t[r++]),
              (n[i++] = String.fromCharCode(
                ((o & 15) << 12) | ((s & 63) << 6) | (l & 63),
              )));
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
          return (n.push.apply(n, r), t.apply(this, n));
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
            ((n = null), t());
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
            ((i = 0), o && ((o = !1), u()));
          },
          u = function () {
            ((i = goog.global.setTimeout(l, n)), t.apply(r, s));
          };
        return function (t) {
          ((s = arguments), i ? (o = !0) : u());
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
        ((this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ =
          (t === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ &&
            n) ||
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
        ((this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = ``),
          (this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_));
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
        ((this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ =
          (t === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ &&
            n) ||
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
          (t.indexOf(`&`) != -1 &&
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
              (t = t.replace(goog.string.internal.NULL_RE_, `&#0;`)));
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
        ((t = goog.string.internal.trim(String(t)).split(`.`)),
          (n = goog.string.internal.trim(String(n)).split(`.`)));
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
            ((r =
              goog.string.internal.compareElements_(r, u) ||
              goog.string.internal.compareElements_(
                s[2].length == 0,
                l[2].length == 0,
              ) ||
              goog.string.internal.compareElements_(s[2], l[2])),
              (s = s[3]),
              (l = l[3]));
          } while (r == 0);
        }
        return r;
      }),
      (goog.string.internal.compareElements_ = function (t, n) {
        return t < n ? -1 : +(t > n);
      }),
      (goog.html.SafeUrl = function (t, n) {
        ((this.privateDoNotAccessOrElseSafeUrlWrappedValue_ =
          (t === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ && n) || ``),
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
        ((this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = ``),
          (this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_));
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
              return ((o = n), r);
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
        ((this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = ``),
          (this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ =
            goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_));
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
          return ((t = goog.array.find(t, i)), r[t] || ``);
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
        return ((n = goog.html.SafeHtml.create(n, r, i)), (n.dir_ = t), n);
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
        return ((r.dir_ = t), r);
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
          (goog.asserts.assert(o.toLowerCase() == o, `Must be lower case`),
            (i[o] = t[o]));
        for (o in n)
          (goog.asserts.assert(o.toLowerCase() == o, `Must be lower case`),
            (i[o] = n[o]));
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
            (s in n && delete i[s], (i[o] = r[o]));
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
          for (; t.lastChild;) t.removeChild(t.lastChild);
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
        ((n =
          n instanceof goog.html.SafeUrl
            ? n
            : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (goog.dom.asserts.assertIsHTMLFormElement(t).action =
            goog.html.SafeUrl.unwrap(n)));
      }),
      (goog.dom.safe.setButtonFormAction = function (t, n) {
        ((n =
          n instanceof goog.html.SafeUrl
            ? n
            : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (goog.dom.asserts.assertIsHTMLButtonElement(t).formAction =
            goog.html.SafeUrl.unwrap(n)));
      }),
      (goog.dom.safe.setInputFormAction = function (t, n) {
        ((n =
          n instanceof goog.html.SafeUrl
            ? n
            : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (goog.dom.asserts.assertIsHTMLInputElement(t).formAction =
            goog.html.SafeUrl.unwrap(n)));
      }),
      (goog.dom.safe.setStyle = function (t, n) {
        t.style.cssText = goog.html.SafeStyle.unwrap(n);
      }),
      (goog.dom.safe.documentWrite = function (t, n) {
        t.write(goog.html.SafeHtml.unwrapTrustedHTML(n));
      }),
      (goog.dom.safe.setAnchorHref = function (t, n) {
        (goog.dom.asserts.assertIsHTMLAnchorElement(t),
          (n =
            n instanceof goog.html.SafeUrl
              ? n
              : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (t.href = goog.html.SafeUrl.unwrap(n)));
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
        (goog.dom.asserts.assertIsHTMLEmbedElement(t),
          (t.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(n)));
      }),
      (goog.dom.safe.setFrameSrc = function (t, n) {
        (goog.dom.asserts.assertIsHTMLFrameElement(t),
          (t.src = goog.html.TrustedResourceUrl.unwrap(n)));
      }),
      (goog.dom.safe.setIframeSrc = function (t, n) {
        (goog.dom.asserts.assertIsHTMLIFrameElement(t),
          (t.src = goog.html.TrustedResourceUrl.unwrap(n)));
      }),
      (goog.dom.safe.setIframeSrcdoc = function (t, n) {
        (goog.dom.asserts.assertIsHTMLIFrameElement(t),
          (t.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(n)));
      }),
      (goog.dom.safe.setLinkHrefAndRel = function (t, n, r) {
        (goog.dom.asserts.assertIsHTMLLinkElement(t),
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
                      )));
      }),
      (goog.dom.safe.setObjectData = function (t, n) {
        (goog.dom.asserts.assertIsHTMLObjectElement(t),
          (t.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(n)));
      }),
      (goog.dom.safe.setScriptSrc = function (t, n) {
        (goog.dom.asserts.assertIsHTMLScriptElement(t),
          (t.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(n)),
          (n = goog.getScriptNonce()) && t.setAttribute(`nonce`, n));
      }),
      (goog.dom.safe.setScriptContent = function (t, n) {
        (goog.dom.asserts.assertIsHTMLScriptElement(t),
          (t.text = goog.html.SafeScript.unwrapTrustedScript(n)),
          (n = goog.getScriptNonce()) && t.setAttribute(`nonce`, n));
      }),
      (goog.dom.safe.setLocationHref = function (t, n) {
        (goog.dom.asserts.assertIsLocation(t),
          (n =
            n instanceof goog.html.SafeUrl
              ? n
              : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          (t.href = goog.html.SafeUrl.unwrap(n)));
      }),
      (goog.dom.safe.assignLocation = function (t, n) {
        (goog.dom.asserts.assertIsLocation(t),
          (n =
            n instanceof goog.html.SafeUrl
              ? n
              : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          t.assign(goog.html.SafeUrl.unwrap(n)));
      }),
      (goog.dom.safe.replaceLocation = function (t, n) {
        ((n =
          n instanceof goog.html.SafeUrl
            ? n
            : goog.html.SafeUrl.sanitizeAssertUnchanged(n)),
          t.replace(goog.html.SafeUrl.unwrap(n)));
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
        return (
          (t.length == 1 && ` ` <= t && `~` >= t) || (`` <= t && `�` >= t)
        );
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
        return (r && (t = goog.string.htmlEscape(t)), t);
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
        return (n.push(`"`), n.join(``));
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
          (256 > n
            ? ((r = `\\x`), (16 > n || 256 < n) && (r += `0`))
            : ((r = `\\u`), 4096 > n && (r += `0`)),
            (r += n.toString(16).toUpperCase()));
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
        for (var i = []; 0 < r && t.length;) (i.push(t.shift()), r--);
        return (t.length && i.push(t.join(n)), i);
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
        return (goog.reflect.sinkValue[` `](t), t);
      }),
      (goog.reflect.sinkValue[` `] = goog.nullFunction),
      (goog.reflect.canAccessProperty = function (t, n) {
        try {
          return (goog.reflect.sinkValue(t[n]), !0);
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
        (goog.asserts.assert(
          goog.isArrayLike(t),
          `encodeByteArray takes an array as a parameter`,
        ),
          n === void 0 && (n = goog.crypt.base64.Alphabet.DEFAULT),
          goog.crypt.base64.init_(),
          (n = goog.crypt.base64.byteToCharMaps_[n]));
        for (var r = [], i = 0; i < t.length; i += 3) {
          var o = t[i],
            s = i + 1 < t.length,
            l = s ? t[i + 1] : 0,
            u = i + 2 < t.length,
            p = u ? t[i + 2] : 0,
            m = o >> 2;
          ((o = ((o & 3) << 4) | (l >> 4)),
            (l = ((l & 15) << 2) | (p >> 6)),
            (p &= 63),
            u || ((p = 64), s || (l = 64)),
            r.push(n[m], n[o], n[l] || ``, n[p] || ``));
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
          for (; i < t.length;) {
            var r = t.charAt(i++),
              o = goog.crypt.base64.charToByteMap_[r];
            if (o != null) return o;
            if (!goog.string.isEmptyOrWhitespace(r))
              throw Error(`Unknown base64 encoding at char: ` + r);
          }
          return n;
        }
        goog.crypt.base64.init_();
        for (var i = 0; ;) {
          var o = r(-1),
            s = r(0),
            l = r(64),
            u = r(64);
          if (u === 64 && o === -1) break;
          (n((o << 2) | (s >> 4)),
            l != 64 &&
              (n(((s << 4) & 240) | (l >> 2)),
              u != 64 && n(((l << 6) & 192) | u)));
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
        ((t = Math.floor((t - n) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
          (jspb.utils.split64Low = n),
          (jspb.utils.split64High = t));
      }),
      (jspb.utils.splitInt64 = function (t) {
        var n = 0 > t;
        t = Math.abs(t);
        var r = t >>> 0;
        ((t = Math.floor((t - r) / jspb.BinaryConstants.TWO_TO_32)),
          (t >>>= 0),
          n &&
            ((t = ~t >>> 0),
            (r = (~r >>> 0) + 1),
            4294967295 < r && ((r = 0), t++, 4294967295 < t && (t = 0))),
          (jspb.utils.split64Low = r),
          (jspb.utils.split64High = t));
      }),
      (jspb.utils.splitZigzag64 = function (t) {
        var n = 0 > t;
        ((t = 2 * Math.abs(t)),
          jspb.utils.splitUint64(t),
          (t = jspb.utils.split64Low));
        var r = jspb.utils.split64High;
        (n &&
          (t == 0
            ? r == 0
              ? (r = t = 4294967295)
              : (r--, (t = 4294967295))
            : t--),
          (jspb.utils.split64Low = t),
          (jspb.utils.split64High = r));
      }),
      (jspb.utils.splitFloat32 = function (t) {
        var n = +(0 > t);
        if (((t = n ? -t : t), t === 0))
          0 < 1 / t
            ? ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 0))
            : ((jspb.utils.split64High = 0),
              (jspb.utils.split64Low = 2147483648));
        else if (isNaN(t))
          ((jspb.utils.split64High = 0), (jspb.utils.split64Low = 2147483647));
        else if (t > jspb.BinaryConstants.FLOAT32_MAX)
          ((jspb.utils.split64High = 0),
            (jspb.utils.split64Low = ((n << 31) | 2139095040) >>> 0));
        else if (t < jspb.BinaryConstants.FLOAT32_MIN)
          ((t = Math.round(t / 2 ** -149)),
            (jspb.utils.split64High = 0),
            (jspb.utils.split64Low = ((n << 31) | t) >>> 0));
        else {
          var r = Math.floor(Math.log(t) / Math.LN2);
          ((t *= 2 ** -r),
            (t = Math.round(t * jspb.BinaryConstants.TWO_TO_23)),
            16777216 <= t && ++r,
            (jspb.utils.split64High = 0),
            (jspb.utils.split64Low =
              ((n << 31) | ((r + 127) << 23) | (t & 8388607)) >>> 0));
        }
      }),
      (jspb.utils.splitFloat64 = function (t) {
        var n = +(0 > t);
        if (((t = n ? -t : t), t === 0))
          ((jspb.utils.split64High = 0 < 1 / t ? 0 : 2147483648),
            (jspb.utils.split64Low = 0));
        else if (isNaN(t))
          ((jspb.utils.split64High = 2147483647),
            (jspb.utils.split64Low = 4294967295));
        else if (t > jspb.BinaryConstants.FLOAT64_MAX)
          ((jspb.utils.split64High = ((n << 31) | 2146435072) >>> 0),
            (jspb.utils.split64Low = 0));
        else if (t < jspb.BinaryConstants.FLOAT64_MIN) {
          var r = t / 2 ** -1074;
          ((t = r / jspb.BinaryConstants.TWO_TO_32),
            (jspb.utils.split64High = ((n << 31) | t) >>> 0),
            (jspb.utils.split64Low = r >>> 0));
        } else {
          r = t;
          var i = 0;
          if (2 <= r) for (; 2 <= r && 1023 > i;) (i++, (r /= 2));
          else for (; 1 > r && -1022 < i;) ((r *= 2), i--);
          ((r = t * 2 ** -i),
            (t = (r * jspb.BinaryConstants.TWO_TO_20) & 1048575),
            (r = (r * jspb.BinaryConstants.TWO_TO_52) >>> 0),
            (jspb.utils.split64High =
              ((n << 31) | ((i + 1023) << 20) | t) >>> 0),
            (jspb.utils.split64Low = r));
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
        ((t = t.charCodeAt(7)),
          (jspb.utils.split64Low =
            (n + (r << 8) + (i << 16) + (o << 24)) >>> 0),
          (jspb.utils.split64High =
            (s + (l << 8) + (u << 16) + (t << 24)) >>> 0));
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
        (jspb.utils.splitHash64(t), (t = jspb.utils.split64Low));
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
            ((n = t * o[r] + n), (o[r] = n & 255), (n >>>= 8));
        }
        function r() {
          for (var t = 0; 8 > t; t++) o[t] = ~o[t] & 255;
        }
        jspb.asserts.assert(0 < t.length);
        var i = !1;
        t[0] === `-` && ((i = !0), (t = t.slice(1)));
        for (var o = [0, 0, 0, 0, 0, 0, 0, 0], s = 0; s < t.length; s++)
          n(10, t.charCodeAt(s) - jspb.utils.ZERO_CHAR_CODE_);
        return (i && (r(), n(1, 1)), goog.crypt.byteArrayToString(o));
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
        ((n[0] = `0`), (n[1] = `x`));
        for (var r = 0; 8 > r; r++) {
          var i = t.charCodeAt(7 - r);
          ((n[2 * r + 2] = jspb.utils.toHexDigit_(i >> 4)),
            (n[2 * r + 3] = jspb.utils.toHexDigit_(i & 15)));
        }
        return n.join(``);
      }),
      (jspb.utils.hexStringToHash64 = function (t) {
        ((t = t.toLowerCase()),
          jspb.asserts.assert(t.length == 18),
          jspb.asserts.assert(t[0] == `0`),
          jspb.asserts.assert(t[1] == `x`));
        for (var n = ``, r = 0; 8 > r; r++) {
          var i = jspb.utils.fromHexCharCode_(t.charCodeAt(2 * r + 2)),
            o = jspb.utils.fromHexCharCode_(t.charCodeAt(2 * r + 3));
          n = String.fromCharCode(16 * i + o) + n;
        }
        return n;
      }),
      (jspb.utils.hash64ToNumber = function (t, n) {
        (jspb.utils.splitHash64(t), (t = jspb.utils.split64Low));
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
          for (; n < r && t[n++] == i;)
            for (o++; ;) {
              var s = t[n++];
              if (!(s & 128)) break;
            }
        else
          for (; n < r;) {
            for (s = i; 128 < s;) {
              if (t[n] != ((s & 127) | 128)) return o;
              (n++, (s >>= 7));
            }
            if (t[n++] != s) break;
            for (o++; (s = t[n++]), s & 128;);
          }
        return o;
      }),
      (jspb.utils.countFixedFields_ = function (t, n, r, i, o) {
        var s = 0;
        if (128 > i) for (; n < r && t[n++] == i;) (s++, (n += o));
        else
          for (; n < r;) {
            for (var l = i; 128 < l;) {
              if (t[n++] != ((l & 127) | 128)) return s;
              l >>= 7;
            }
            if (t[n++] != l) break;
            (s++, (n += o));
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
        for (i = 8 * i + jspb.BinaryConstants.WireType.DELIMITED; n < r;) {
          for (var s = i; 128 < s;) {
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
            ((n += `\\x`), 16 > t[r] && (n += `0`), (n += t[r].toString(16)));
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
        ((this.bytes_ = null),
          (this.cursor_ = this.end_ = this.start_ = 0),
          (this.error_ = !1),
          t && this.setBlock(t, n, r));
      }),
      (jspb.BinaryDecoder.instanceCache_ = []),
      (jspb.BinaryDecoder.alloc = function (t, n, r) {
        if (jspb.BinaryDecoder.instanceCache_.length) {
          var i = jspb.BinaryDecoder.instanceCache_.pop();
          return (t && i.setBlock(t, n, r), i);
        }
        return new jspb.BinaryDecoder(t, n, r);
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
      (jspb.BinaryDecoder.prototype.setBlock = function (t, n, r) {
        ((this.bytes_ = jspb.utils.byteSourceToUint8Array(t)),
          (this.start_ = n === void 0 ? 0 : n),
          (this.end_ = r === void 0 ? this.bytes_.length : this.start_ + r),
          (this.cursor_ = this.start_));
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
        ((this.cursor_ += t), jspb.asserts.assert(this.cursor_ <= this.end_));
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
          ((n = this.bytes_[this.cursor_++]), (r |= (n & 127) << (7 * o)));
        if (
          (128 <= n &&
            ((n = this.bytes_[this.cursor_++]),
            (r |= (n & 127) << 28),
            (i |= (n & 127) >> 4)),
          128 <= n)
        )
          for (o = 0; 5 > o && 128 <= n; o++)
            ((n = this.bytes_[this.cursor_++]),
              (i |= (n & 127) << (7 * o + 3)));
        if (128 > n) return t(r >>> 0, i >>> 0);
        (jspb.asserts.fail(`Failed to read varint, encoding is invalid.`),
          (this.error_ = !0));
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
          ((i = (i << 8) | n[s]), (o = (o << 8) | n[s + 4]));
        return t(i, o);
      }),
      (jspb.BinaryDecoder.prototype.skipVarint = function () {
        for (; this.bytes_[this.cursor_] & 128;) this.cursor_++;
        this.cursor_++;
      }),
      (jspb.BinaryDecoder.prototype.unskipVarint = function (t) {
        for (; 128 < t;) (this.cursor_--, (t >>>= 7));
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
        return ((s += goog.crypt.byteArrayToString(o)), (this.cursor_ = i), s);
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
        ((this.decoder_ = jspb.BinaryDecoder.alloc(t, n, r)),
          (this.fieldCursor_ = this.decoder_.getCursor()),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
          (this.error_ = !1),
          (this.readCallbacks_ = null));
      }),
      (jspb.BinaryReader.instanceCache_ = []),
      (jspb.BinaryReader.alloc = function (t, n, r) {
        if (jspb.BinaryReader.instanceCache_.length) {
          var i = jspb.BinaryReader.instanceCache_.pop();
          return (t && i.decoder_.setBlock(t, n, r), i);
        }
        return new jspb.BinaryReader(t, n, r);
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
      (jspb.BinaryReader.prototype.setBlock = function (t, n, r) {
        (this.decoder_.setBlock(t, n, r),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID));
      }),
      (jspb.BinaryReader.prototype.reset = function () {
        (this.decoder_.reset(),
          (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
          (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID));
      }),
      (jspb.BinaryReader.prototype.advance = function (t) {
        this.decoder_.advance(t);
      }),
      (jspb.BinaryReader.prototype.nextField = function () {
        if (this.decoder_.atEnd()) return !1;
        if (this.getError())
          return (jspb.asserts.fail(`Decoder hit an error`), !1);
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
          (jspb.asserts.fail(`Invalid wire type for skipDelimitedField`),
            this.skipField());
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
            (jspb.asserts.fail(`Unmatched start-group tag: stream EOF`),
              (this.error_ = !0));
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
        (this.readCallbacks_ === null && (this.readCallbacks_ = {}),
          jspb.asserts.assert(!this.readCallbacks_[t]),
          (this.readCallbacks_[t] = n));
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
        ((i = this.decoder_.getCursor() + i),
          this.decoder_.setEnd(i),
          n(t, this),
          this.decoder_.setCursor(i),
          this.decoder_.setEnd(r));
      }),
      goog.exportProperty(
        jspb.BinaryReader.prototype,
        `readMessage`,
        jspb.BinaryReader.prototype.readMessage,
      ),
      (jspb.BinaryReader.prototype.readGroup = function (t, n, r) {
        (jspb.asserts.assert(
          this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP,
        ),
          jspb.asserts.assert(this.nextField_ == t),
          r(n, this),
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
        for (var r = []; this.decoder_.getCursor() < n;)
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
        return ((this.buffer_ = []), t);
      }),
      (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (t, n) {
        for (
          jspb.asserts.assert(t == Math.floor(t)),
            jspb.asserts.assert(n == Math.floor(n)),
            jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_32);
          0 < n || 127 < t;
        )
          (this.buffer_.push((t & 127) | 128),
            (t = ((t >>> 7) | (n << 25)) >>> 0),
            (n >>>= 7));
        this.buffer_.push(t);
      }),
      (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (t, n) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(n == Math.floor(n)),
          jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
          jspb.asserts.assert(0 <= n && n < jspb.BinaryConstants.TWO_TO_32),
          this.writeUint32(t),
          this.writeUint32(n));
      }),
      (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (t) {
        for (
          jspb.asserts.assert(t == Math.floor(t)),
            jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32);
          127 < t;
        )
          (this.buffer_.push((t & 127) | 128), (t >>>= 7));
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
            (this.buffer_.push((t & 127) | 128), (t >>= 7));
          this.buffer_.push(1);
        }
      }),
      (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
          jspb.utils.splitInt64(t),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_63 &&
              t < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitInt64(t),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_31 &&
              t < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeUnsignedVarint32(((t << 1) ^ (t >> 31)) >>> 0));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_63 &&
              t < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitZigzag64(t),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (t) {
        this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(t));
      }),
      (jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function (t) {
        var n = this;
        (jspb.utils.splitHash64(t),
          jspb.utils.toZigzag64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
            function (t, r) {
              n.writeSplitVarint64(t >>> 0, r >>> 0);
            },
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeUint8 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && 256 > t),
          this.buffer_.push((t >>> 0) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeUint16 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && 65536 > t),
          this.buffer_.push((t >>> 0) & 255),
          this.buffer_.push((t >>> 8) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeUint32 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
          this.buffer_.push((t >>> 0) & 255),
          this.buffer_.push((t >>> 8) & 255),
          this.buffer_.push((t >>> 16) & 255),
          this.buffer_.push((t >>> 24) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeUint64 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
          jspb.utils.splitUint64(t),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High));
      }),
      (jspb.BinaryEncoder.prototype.writeInt8 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(-128 <= t && 128 > t),
          this.buffer_.push((t >>> 0) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeInt16 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(-32768 <= t && 32768 > t),
          this.buffer_.push((t >>> 0) & 255),
          this.buffer_.push((t >>> 8) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeInt32 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_31 &&
              t < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.buffer_.push((t >>> 0) & 255),
          this.buffer_.push((t >>> 8) & 255),
          this.buffer_.push((t >>> 16) & 255),
          this.buffer_.push((t >>> 24) & 255));
      }),
      (jspb.BinaryEncoder.prototype.writeInt64 = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_63 &&
              t < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitInt64(t),
          this.writeSplitFixed64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeInt64String = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            +t >= -jspb.BinaryConstants.TWO_TO_63 &&
              +t < jspb.BinaryConstants.TWO_TO_63,
          ),
          jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(t)),
          this.writeSplitFixed64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeFloat = function (t) {
        (jspb.asserts.assert(
          t === 1 / 0 ||
            t === -1 / 0 ||
            isNaN(t) ||
            (t >= -jspb.BinaryConstants.FLOAT32_MAX &&
              t <= jspb.BinaryConstants.FLOAT32_MAX),
        ),
          jspb.utils.splitFloat32(t),
          this.writeUint32(jspb.utils.split64Low));
      }),
      (jspb.BinaryEncoder.prototype.writeDouble = function (t) {
        (jspb.asserts.assert(
          t === 1 / 0 ||
            t === -1 / 0 ||
            isNaN(t) ||
            (t >= -jspb.BinaryConstants.FLOAT64_MAX &&
              t <= jspb.BinaryConstants.FLOAT64_MAX),
        ),
          jspb.utils.splitFloat64(t),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High));
      }),
      (jspb.BinaryEncoder.prototype.writeBool = function (t) {
        (jspb.asserts.assert(typeof t == `boolean` || typeof t == `number`),
          this.buffer_.push(+!!t));
      }),
      (jspb.BinaryEncoder.prototype.writeEnum = function (t) {
        (jspb.asserts.assert(t == Math.floor(t)),
          jspb.asserts.assert(
            t >= -jspb.BinaryConstants.TWO_TO_31 &&
              t < jspb.BinaryConstants.TWO_TO_31,
          ),
          this.writeSignedVarint32(t));
      }),
      (jspb.BinaryEncoder.prototype.writeBytes = function (t) {
        this.buffer_.push.apply(this.buffer_, t);
      }),
      (jspb.BinaryEncoder.prototype.writeVarintHash64 = function (t) {
        (jspb.utils.splitHash64(t),
          this.writeSplitVarint64(
            jspb.utils.split64Low,
            jspb.utils.split64High,
          ));
      }),
      (jspb.BinaryEncoder.prototype.writeFixedHash64 = function (t) {
        (jspb.utils.splitHash64(t),
          this.writeUint32(jspb.utils.split64Low),
          this.writeUint32(jspb.utils.split64High));
      }),
      (jspb.BinaryEncoder.prototype.writeString = function (t) {
        var n = this.buffer_.length;
        jspb.asserts.assertString(t);
        for (var r = 0; r < t.length; r++) {
          var i = t.charCodeAt(r);
          if (128 > i) this.buffer_.push(i);
          else if (2048 > i)
            (this.buffer_.push((i >> 6) | 192),
              this.buffer_.push((i & 63) | 128));
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
              (this.buffer_.push((i >> 12) | 224),
                this.buffer_.push(((i >> 6) & 63) | 128),
                this.buffer_.push((i & 63) | 128));
          }
        }
        return this.buffer_.length - n;
      }),
      (jspb.arith = {}),
      (jspb.arith.UInt64 = function (t, n) {
        ((this.lo = t), (this.hi = n));
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
          ((n -= 4294967296), (r += 1));
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
        for (var i = new jspb.arith.UInt64(1, 0); !t.msb();)
          ((t = t.leftShift()), (i = i.leftShift()));
        for (; !i.zero();)
          (0 >= t.cmp(r) && ((n = n.add(i)), (r = r.sub(t))),
            (t = t.rightShift()),
            (i = i.rightShift()));
        return [n, r];
      }),
      (jspb.arith.UInt64.prototype.toString = function () {
        for (var t = ``, n = this; !n.zero();) {
          n = n.div(10);
          var r = n[0];
          ((t = n[1].lo + t), (n = r));
        }
        return (t == `` && (t = `0`), t);
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
          ((r.lo = parseInt(t[i], 10)), (n = n.mul(10).add(r)));
        }
        return n;
      }),
      (jspb.arith.UInt64.prototype.clone = function () {
        return new jspb.arith.UInt64(this.lo, this.hi);
      }),
      (jspb.arith.Int64 = function (t, n) {
        ((this.lo = t), (this.hi = n));
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
        ((this.blocks_ = []),
          (this.totalLength_ = 0),
          (this.encoder_ = new jspb.BinaryEncoder()),
          (this.bookmarks_ = []));
      }),
      (jspb.BinaryWriter.prototype.appendUint8Array_ = function (t) {
        var n = this.encoder_.end();
        (this.blocks_.push(n),
          this.blocks_.push(t),
          (this.totalLength_ += n.length + t.length));
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
          (t.push((n & 127) | 128), (n >>>= 7), this.totalLength_++);
        (t.push(n), this.totalLength_++);
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
        ((this.blocks_ = []),
          this.encoder_.end(),
          (this.totalLength_ = 0),
          (this.bookmarks_ = []));
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
          (t.set(s, i), (i += s.length));
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
        (jspb.asserts.assert(0 <= this.bookmarks_.length),
          this.endDelimited_(this.bookmarks_.pop()));
      }),
      (jspb.BinaryWriter.prototype.writeFieldHeader_ = function (t, n) {
        (jspb.asserts.assert(1 <= t && t == Math.floor(t)),
          this.encoder_.writeUnsignedVarint32(8 * t + n));
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
        (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.FIXED64),
          this.encoder_.writeSplitFixed64(n, r));
      }),
      (jspb.BinaryWriter.prototype.writeSplitVarint64 = function (t, n, r) {
        (this.writeFieldHeader_(t, jspb.BinaryConstants.WireType.VARINT),
          this.encoder_.writeSplitVarint64(n, r));
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
            (r(n[i], this), this.endDelimited_(o));
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
            (this.writeFieldHeader_(
              t,
              jspb.BinaryConstants.WireType.START_GROUP,
            ),
              r(n[i], this),
              this.writeFieldHeader_(
                t,
                jspb.BinaryConstants.WireType.END_GROUP,
              ));
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
        ((this.arr_ = t),
          (this.valueCtor_ = n),
          (this.map_ = {}),
          (this.arrClean = !0),
          0 < this.arr_.length && this.loadFromArray_());
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
            ((r = i.valueWrapper) && r.toArray(),
              this.arr_.push([i.key, i.value]));
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
        ((this.idx_ = 0), (this.arr_ = t));
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
        ((this.map_ = {}), (this.arrClean = !1));
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `clear`,
        jspb.Map.prototype.clear,
      ),
      (jspb.Map.prototype.del = function (t) {
        t = t.toString();
        var n = this.map_.hasOwnProperty(t);
        return (delete this.map_[t], (this.arrClean = !1), n);
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
          (n.beginSubMessage(t),
            r.call(n, 1, u.key),
            this.valueCtor_
              ? i.call(n, 2, this.wrapEntry_(u), o)
              : i.call(n, 2, u.value),
            n.endSubMessage());
        }
      }),
      goog.exportProperty(
        jspb.Map.prototype,
        `serializeBinary`,
        jspb.Map.prototype.serializeBinary,
      ),
      (jspb.Map.deserializeBinary = function (t, n, r, i, o, s, l) {
        for (; n.nextField() && !n.isEndGroup();) {
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
        (jspb.asserts.assert(s != null),
          jspb.asserts.assert(l != null),
          t.set(s, l));
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
        ((this.key = t), (this.value = n), (this.valueWrapper = void 0));
      }),
      (jspb.ExtensionFieldInfo = function (t, n, r, i, o) {
        ((this.fieldIndex = t),
          (this.fieldName = n),
          (this.ctor = r),
          (this.toObjectFn = i),
          (this.isRepeated = o));
      }),
      goog.exportSymbol(`jspb.ExtensionFieldInfo`, jspb.ExtensionFieldInfo),
      (jspb.ExtensionFieldBinaryInfo = function (t, n, r, i, o, s) {
        ((this.fieldInfo = t),
          (this.binaryReaderFn = n),
          (this.binaryWriterFn = r),
          (this.binaryMessageSerializeFn = i),
          (this.binaryMessageDeserializeFn = o),
          (this.isPacked = s));
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
            ((r = o[n]),
              r < t.pivot_
                ? ((r = jspb.Message.getIndex_(t, r)),
                  (t.array[r] =
                    t.array[r] || jspb.Message.EMPTY_LIST_SENTINEL_))
                : (jspb.Message.maybeInitEmptyExtensionObject_(t),
                  (t.extensionObject_[r] =
                    t.extensionObject_[r] ||
                    jspb.Message.EMPTY_LIST_SENTINEL_)));
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
        return ((t = jspb.Message.getField(t, n)), t == null ? t : +t);
      }),
      goog.exportProperty(
        jspb.Message,
        `getOptionalFloatingPointField`,
        jspb.Message.getOptionalFloatingPointField,
      ),
      (jspb.Message.getBooleanField = function (t, n) {
        return ((t = jspb.Message.getField(t, n)), t == null ? t : !!t);
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
        return ((t = jspb.Message.getField(t, n)), t ?? r);
      }),
      goog.exportProperty(
        jspb.Message,
        `getFieldWithDefault`,
        jspb.Message.getFieldWithDefault,
      ),
      (jspb.Message.getBooleanFieldWithDefault = function (t, n, r) {
        return ((t = jspb.Message.getBooleanField(t, n)), t ?? r);
      }),
      goog.exportProperty(
        jspb.Message,
        `getBooleanFieldWithDefault`,
        jspb.Message.getBooleanFieldWithDefault,
      ),
      (jspb.Message.getFloatingPointFieldWithDefault = function (t, n, r) {
        return ((t = jspb.Message.getOptionalFloatingPointField(t, n)), t ?? r);
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
          ((o = []), jspb.Message.setField(t, n, o));
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
        (jspb.asserts.assertInstanceof(t, jspb.Message), (t.wrappers_ ||= {}));
        var i = r && r.toArray();
        return ((t.wrappers_[n] = r), jspb.Message.setField(t, n, i));
      }),
      goog.exportProperty(
        jspb.Message,
        `setWrapperField`,
        jspb.Message.setWrapperField,
      ),
      (jspb.Message.setOneofWrapperField = function (t, n, r, i) {
        (jspb.asserts.assertInstanceof(t, jspb.Message), (t.wrappers_ ||= {}));
        var o = i && i.toArray();
        return ((t.wrappers_[n] = i), jspb.Message.setOneofField(t, n, r, o));
      }),
      goog.exportProperty(
        jspb.Message,
        `setOneofWrapperField`,
        jspb.Message.setOneofWrapperField,
      ),
      (jspb.Message.setRepeatedWrapperField = function (t, n, r) {
        (jspb.asserts.assertInstanceof(t, jspb.Message),
          (t.wrappers_ ||= {}),
          (r ||= []));
        for (var i = [], o = 0; o < r.length; o++) i[o] = r[o].toArray();
        return ((t.wrappers_[n] = r), jspb.Message.setField(t, n, i));
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
        ((this.wrappers_ ||= {}),
          jspb.Message.maybeInitEmptyExtensionObject_(this));
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
        ((t ||= {}), (n ||= {}));
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
        (jspb.asserts.assertInstanceof(t, jspb.Message),
          jspb.asserts.assertInstanceof(n, jspb.Message),
          jspb.asserts.assert(
            t.constructor == n.constructor,
            `Copy source and target message should have the same type.`,
          ),
          (t = jspb.Message.clone(t)));
        for (
          var r = n.toArray(), i = t.toArray(), o = (r.length = 0);
          o < i.length;
          o++
        )
          r[o] = i[o];
        ((n.wrappers_ = t.wrappers_),
          (n.extensionObject_ = t.extensionObject_));
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
          ((i = t[r]),
            i != null &&
              (n[r] =
                typeof i == `object`
                  ? jspb.Message.clone_(jspb.asserts.assert(i))
                  : i));
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
        (exports.typeOf = goog.typeOf)));
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
  return (n && (s.$jspbMessageInstance = r), s);
}
function DeserializeBinary(t, n, r) {
  for (; r.nextField() && !r.isEndGroup();) {
    let i = t[r.getFieldNumber()];
    if (i) {
      let { n: t, c: o, r: s, d: l, q: u, br: p } = i;
      if (o) {
        let i = new o();
        (r.readMessage(i, o.deserializeBinaryFromReader),
          s
            ? import_google_protobuf.Message.addToRepeatedWrapperField(
                n,
                t,
                i,
                o,
              )
            : import_google_protobuf.Message.setWrapperField(n, t, i));
      } else if (p) {
        let i = p.call(r);
        s
          ? import_google_protobuf.Message.addToRepeatedField(n, t, i)
          : import_google_protobuf.Message.setField(n, t, i);
      } else
        (console.assert(
          !!p,
          `Reader func not set for field number ${t} in class ${o}`,
        ),
          r.skipField());
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
    (Object.prototype.hasOwnProperty.call(i, `d`)
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
      l && (n.prototype[`add_${r}`] = MakeAdder(o, s)));
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
var CClientMetrics_ClientBootstrap_RequestInfo = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.original_hostname || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_RequestInfo`;
    }
  },
  CClientMetrics_ClientBootstrap_Summary = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.launcher_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_Summary`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Counts = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.class_100 || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Counts`;
    }
  },
  CClientMetrics_ContentDownloadResponse_HostCounts = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.hostname || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_HostCounts`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Hosts = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.hosts || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null));
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Hosts`;
    }
  },
  CMsgIPAddress = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.v4 || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CMsgIPAddress`;
    }
  },
  CMsgGCRoutingProtoBufHeader = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.dst_gcid_queue || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CMsgGCRoutingProtoBufHeader`;
    }
  },
  CMsgProtoBufHeader = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.steamid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CMsgProtoBufHeader`;
    }
  },
  CCDDBAppDetailCommon = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CCDDBAppDetailCommon`;
    }
  },
  CLocalizationToken = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.language || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CLocalizationToken`;
    }
  },
  CClanEventUserNewsTuple = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.clanid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClanEventUserNewsTuple`;
    }
  },
  CClanMatchEventByRange = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.rtime_before || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [4], null));
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClanMatchEventByRange`;
    }
  },
  CPackageReservationStatus = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.packageid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
        (t.sm_m ||= {
          proto: t,
          fields: {
            packageid: {
              n: 1,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            reservation_state: {
              n: 2,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            queue_position: {
              n: 3,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            total_queue_size: {
              n: 4,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            reservation_country_code: {
              n: 5,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            expired: {
              n: 6,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            time_expires: {
              n: 7,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            time_reserved: {
              n: 8,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            rtime_estimated_notification: {
              n: 9,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
            notificaton_token: {
              n: 10,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            queue_head_position_at_reservation: {
              n: 11,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            queue_head_position_now: {
              n: 12,
              br: ReaderProto.readInt32,
              bw: WriterProto.writeInt32,
            },
            position_is_waitlist: {
              n: 13,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            user_waitlist_token: {
              n: 14,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            queue_in_waitlist: {
              n: 15,
              br: ReaderProto.readBool,
              bw: WriterProto.writeBool,
            },
            queue_waitlist_token: {
              n: 16,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            collection_time_active: {
              n: 17,
              br: ReaderProto.readUint32,
              bw: WriterProto.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CPackageReservationStatus`;
    }
  },
  CMsgKeyValuePair = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: {
              n: 1,
              br: ReaderProto.readString,
              bw: WriterProto.writeString,
            },
            value: {
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CMsgKeyValuePair`;
    }
  },
  CMsgKeyValueSet = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.pairs || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { pairs: { n: 1, c: CMsgKeyValuePair, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CMsgKeyValueSet`;
    }
  },
  UserContentDescriptorPreferences = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.content_descriptors_to_exclude || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null));
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `UserContentDescriptorPreferences`;
    }
  },
  UserContentDescriptorPreferences_ContentDescriptor = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.content_descriptorid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `UserContentDescriptorPreferences_ContentDescriptor`;
    }
  },
  UserSystemInformation = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.manufacturer || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `UserSystemInformation`;
    }
  },
  GamePerformanceSettings = class t extends import_google_protobuf.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.setting || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `GamePerformanceSettings`;
    }
  },
  CClientMetrics_AppInterfaceCreation = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.raw_version || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceCreation`;
    }
  },
  CClientMetrics_AppInterfaceMethodCounts = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.interface_name || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceMethodCounts`;
    }
  },
  CClientMetrics_AppInterfaceStats_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.game_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_AppInterfaceStats_Notification`;
    }
  },
  CClientMetrics_IPv6Connectivity_Result = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.protocol_tested || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_IPv6Connectivity_Result`;
    }
  },
  CClientMetrics_IPv6Connectivity_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.cell_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null));
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_IPv6Connectivity_Notification`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.product || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_RouteData = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.route || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_RouteData`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_ComponentData = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.component || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_ComponentData`;
    }
  },
  CClientMetrics_ReportReactUsage_Notification_ActionData = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.action || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportReactUsage_Notification_ActionData`;
    }
  },
  CClientMetrics_ReportClientError_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.product || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportClientError_Notification`;
    }
  },
  CClientMetrics_ReportClientError_Notification_Error = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.identifier || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportClientError_Notification_Error`;
    }
  },
  CClientMetrics_SteamPipeWorkStats_Operation = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_SteamPipeWorkStats_Operation`;
    }
  },
  CClientMetrics_SteamPipeWorkStats_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.appid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [4], null));
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_SteamPipeWorkStats_Notification`;
    }
  },
  CClientMetrics_ClientBootstrap_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.summary || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClientBootstrap_Notification`;
    }
  },
  CClientMetrics_DownloadRates_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.cell_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null));
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_DownloadRates_Notification`;
    }
  },
  CClientMetrics_DownloadRates_Notification_StatsInfo = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.source_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_DownloadRates_Notification_StatsInfo`;
    }
  },
  CClientMetrics_ContentValidation_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.validation_result || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentValidation_Notification`;
    }
  },
  CClientMetrics_CloudAppSyncStats_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.app_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_CloudAppSyncStats_Notification`;
    }
  },
  CClientMetrics_ContentDownloadResponse_Counts_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.cell_id || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ContentDownloadResponse_Counts_Notification`;
    }
  },
  CClientMetrics_ClipShare_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.eresult || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClipShare_Notification`;
    }
  },
  CClientMetrics_ClipRange_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.original_range_method || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClipRange_Notification`;
    }
  },
  CClientMetrics_ClipRange_Notification_RelativeRangeEdge = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.original_range_method || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ClipRange_Notification_RelativeRangeEdge`;
    }
  },
  CClientMetrics_EndGameRecording_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.recording_type || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_EndGameRecording_Notification`;
    }
  },
  CClientMetrics_GamePerformance_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.frame_rates || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [2], null));
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_GamePerformance_Notification`;
    }
  },
  CClientMetrics_GamePerformance_Notification_FrameRate = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.gameid || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_GamePerformance_Notification_FrameRate`;
    }
  },
  CClientMetrics_ReportClientArgs_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.client_args || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(this, n, 0, -1, [1], null));
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportClientArgs_Notification`;
    }
  },
  CClientMetrics_ReportAccessibilitySettings_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.accessibility_desktop_ui_scale || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
    }
    getClassName() {
      return `CClientMetrics_ReportAccessibilitySettings_Notification`;
    }
  },
  CClientMetrics_ReportLinuxStats_Notification = class t
    extends import_google_protobuf.Message
  {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      (super(),
        t.prototype.glibc_version_major || AddAccessors(t.M()),
        import_google_protobuf.Message.initialize(
          this,
          n,
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
      return ((t.sm_mbf ||= RemapMetadataByField(t.M())), t.sm_mbf);
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
      return (t.serializeBinaryToWriter(this, n), n.getResultBuffer());
    }
    static serializeBinaryToWriter(n, r) {
      SerializeBinary(t.M(), n, r);
    }
    serializeBase64String() {
      var n = new import_google_protobuf.BinaryWriter();
      return (t.serializeBinaryToWriter(this, n), n.getResultBase64String());
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
      ((this.props = t),
        (this.context = n),
        (this.refs = S),
        (this.updater = r || y));
    }
    ((C.prototype.isReactComponent = {}),
      (C.prototype.setState = function (t, n) {
        if (typeof t != `object` && typeof t != `function` && t != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, t, n, `setState`);
      }),
      (C.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, `forceUpdate`);
      }));
    function w() {}
    w.prototype = C.prototype;
    function T(t, n, r) {
      ((this.props = t),
        (this.context = n),
        (this.refs = S),
        (this.updater = r || y));
    }
    var E = (T.prototype = new w());
    ((E.constructor = T), x(E, C.prototype), (E.isPureReactComponent = !0));
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
                return ((p = t._init), R(p(t._payload), i, o, s, l));
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
          ((s = t[h]), (u = m + F(s, h)), (p += R(s, i, o, u, l)));
      else if (((h = v(t)), typeof h == `function`))
        for (t = h.call(t), h = 0; !(s = t.next()).done;)
          ((s = s.value), (u = m + F(s, h++)), (p += R(s, i, o, u, l)));
      else if (u === `object`) {
        if (typeof t.then == `function`) return R(L(t), i, o, s, l);
        throw (
          (i = String(t)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (i === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : i) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
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
        ((n = n()),
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
          t._status === -1 && ((t._status = 0), (t._result = n)));
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
    ((t.Children = {
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
          (o !== null && o(r, i),
            typeof i == `object` &&
              i &&
              typeof i.then == `function` &&
              i.then(H, V));
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
      (t.version = `19.1.1`));
  }),
  require_react = __commonJSMin((t, n) => {
    n.exports = require_react_production();
  }),
  import_react = __toESM(require_react(), 1),
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
      (super(...t), (this.name = `Assertion Failed`));
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
  ((console.error = (t, ...r) => {
    let i = GetReactComponentStack();
    (g_onReportableError(Error(ConvertConsoleParams(t, ...r)), 1, i),
      n.apply(console, [t, ...r]));
  }),
    (console.clogerror = (t, r, ...i) => {
      let o = GetReactComponentStack();
      (g_onReportableError(Error(ConvertConsoleParams(r, ...i)), t + 1, o),
        n.apply(console, [r, ...i]));
    }),
    addEventListener(`error`, (t) => {
      g_onReportableError(t.error, 0);
    }),
    addEventListener(`unhandledrejection`, (t) => {
      g_onReportableError(t.reason, 0);
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
    (t
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
      }, 3e4));
  }
  Init(t, n, r, i = {}) {
    ((this.m_bInitialized = !0),
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
        (this.m_rgErrorQueue = [])));
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
      return (console.log(`Failed to report error: ${t}`), null);
    }
  }
  PauseReportingForDuration(t) {
    (this.PauseReporting(),
      (this.m_pauseTimer = window.setTimeout(() => this.ResumeReporting(), t)));
  }
  PauseReporting() {
    ((this.m_bReportingPaused = !0), window.clearTimeout(this.m_pauseTimer));
  }
  ResumeReporting() {
    ((this.m_bReportingPaused = !1),
      window.clearTimeout(this.m_pauseTimer),
      this.ScheduleSend());
  }
  BIsBlacklisted(t) {
    for (let n of t.message) {
      let r = JSON.stringify(n);
      for (let n of g_rgBlacklistPatterns) {
        let i = new RegExp(n);
        if (r.match(i))
          return (console.warn(`Report`, t, `matched regex`, n), !0);
      }
    }
    return !1;
  }
  SendErrorReport(t) {
    this.BIsBlacklisted(t) ||
      (this.m_transport ? this.QueueReport(t) : this.m_rgErrorQueue.push(t));
  }
  QueueReport(t) {
    (this.m_rgErrorQueue.push(t),
      this.m_bReportingPaused || this.ScheduleSend());
  }
  ScheduleSend() {
    this.m_sendTimer ||= window.setTimeout(() => {
      (this.SendErrorReports(this.m_rgErrorQueue),
        (this.m_rgErrorQueue = []),
        (this.m_sendTimer = null));
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
        (o.set_count(i),
          o.set_identifier(n.identifier + ` ` + n.identifierHash),
          o.set_message(JSON.stringify(n.message)));
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
    (n.Body().set_product(this.m_strProduct),
      n.Body().set_version(this.m_strVersion),
      n.Body().set_errors(i));
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
            return (n == `[object Object]` && (n = JSON.stringify(t)), n);
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
    return (console.warn(`Failed to normalize error stack: ${t}`), null);
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
  (s.indexOf(`@`) > -1 && (u = s.split(`@`)[0] + `@` + u),
    r && (u = `${u} ${t.message}`));
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
function IsDigits(t) {
  if (!t) return !1;
  for (let n = 0; n < t.length; n++) {
    let r = t.charCodeAt(n);
    if (r < 48 || r > 57) return !1;
  }
  return !0;
}
function ScalePreserveAspectRatio(t, n, r, i) {
  let o = r / t,
    s = i / n,
    l = Math.min(o, s);
  return [t * l, n * l];
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
      ((this.m_nOffset = n || 0),
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
    GetUint32(t = !0) {
      let n = this.m_viewPacket.getUint32(this.m_iGet, t);
      return ((this.m_iGet += 4), n);
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
      (this.m_viewPacket.setUint32(this.m_iPut, t, n), (this.m_iPut += 4));
    }
    PutBytes(t) {
      (this.m_rgubPacket.set(t, this.m_iPut), (this.m_iPut += t.length));
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
        ((this.m_eMsg = i.m_eMsg),
          (this.m_bValid = i.m_bValid),
          this.m_bValid &&
            ((this.m_netPacket = i.m_netPacket),
            (this.m_cubHeader = i.m_cubHeader),
            (this.m_header = i.m_header),
            this.InitForType(r)));
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
                r && this.InitForType(r));
            } catch (t) {
              (console.error(`Exception deserializing protobuf`, t),
                (this.m_bValid = !1));
            }
          } else this.m_bValid = !1;
        } else
          (t && (this.m_eMsg = t),
            s && r
              ? (this.m_body = r.fromObject(s))
              : r && (this.m_body = new r()));
        o && this.m_header.set_jobid_target(o.Hdr().jobid_target());
      }
    }
    InitForType(t) {
      ((this.m_body = new t()),
        this.m_netPacket &&
          (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
          this.ReadBodyFromBuffer(t, this.m_netPacket)));
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
        (n && n.ReportError(Error(r), { bIncludeMessageInIdentifier: !0 }),
          console.warn(r),
          console.log(t.stack || t));
      }
    }
    BIsValid() {
      return this.m_bValid;
    }
    Body() {
      return this.m_body;
    }
    SetBodyJSON(t) {
      ((t.toObject = () => t), (this.m_body = t));
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
      return (new CUtlBuffer(n).PutBytes(t), n);
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
    ((t.Fragment = r), (t.jsx = i), (t.jsxs = i));
  }),
  require_jsx_runtime = __commonJSMin((t, n) => {
    n.exports = require_react_jsx_runtime_production();
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
var k_EClanEventType_OtherEvent = 1,
  k_EClanEventType_GameEvent = 2,
  k_EClanEventType_PartyEvent = 3,
  k_EClanEventType_MeetingEvent = 4,
  k_EClanEventType_SpecialCauseEvent = 5,
  k_EClanEventType_MusicAndArtsEvent = 6,
  k_EClanEventType_SportsEvent = 7,
  k_EClanEventType_TripEvent = 8,
  k_EClanEventType_ChatEvent = 9,
  k_EClanEventType_GameReleaseEvent = 10,
  k_EClanEventType_BroadcastEvent = 11,
  k_EClanEventType_SmallUpdateEvent = 12,
  k_EClanEventType_RegularUpdateEvent = 13,
  k_EClanEventType_MajorUpdateEvent = 14,
  k_EClanEventType_DLCReleaseEvent = 15,
  k_EClanEventType_FutureReleaseEvent = 16,
  k_EClanEventType_ESportTournamentStreamEvent = 17,
  k_EClanEventType_DevStreamEvent = 18,
  k_EClanEventType_FamousStreamEvent = 19,
  k_EClanEventType_GameSalesEvent = 20,
  k_EClanEventType_GameItemSalesEvent = 21,
  k_EClanEventType_InGameBonusXPEvent = 22,
  k_EClanEventType_InGameLootEvent = 23,
  k_EClanEventType_InGamePerksEvent = 24,
  k_EClanEventType_InGameChallengeEvent = 25,
  k_EClanEventType_InGameContestEvent = 26,
  k_EClanEventType_IRLEvent = 27,
  k_EClanEventType_NewsEvent = 28,
  k_EClanEventType_BetaReleaseEvent = 29,
  k_EClanEventType_FreeTrial = 31,
  k_EClanEventType_SeasonRelease = 32,
  k_EClanEventType_CrosspostEvent = 34,
  k_EClanEventType_InGameEventGeneral = 35,
  k_EClanEventType_CreatorHome = 36,
  EClanEventTypeArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 34, 35, 36,
  ],
  k_ELauncherType_PerfectWorld = 1,
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
var k_EGamingDeviceType_SteamFrame = 5001,
  EGameIDType = (function (t) {
    return (
      (t[(t.k_EGameIDTypeApp = 0)] = `k_EGameIDTypeApp`),
      (t[(t.k_EGameIDTypeGameMod = 1)] = `k_EGameIDTypeGameMod`),
      (t[(t.k_EGameIDTypeShortcut = 2)] = `k_EGameIDTypeShortcut`),
      t
    );
  })({}),
  EWindowBringToFront = (function (t) {
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
  Config$1 = {
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
    (t.setTime(t.getTime() + 864e5 * r), (o = `; expires=` + t.toUTCString()));
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
  return ((t ||= GenerateNewSessionID()), t);
}
function GenerateSessionID() {
  let t = ``;
  for (let n = 0; n < 24; n++) t += RandomInt(0, 35).toString(36);
  return t;
}
function GenerateNewSessionID() {
  let t = GenerateSessionID();
  return (SetCookie(`sessionid`, t, 0), t);
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
var g_bInitialized = !1,
  g_bUserInClient = !1,
  g_bUserInGameOverlay = !1,
  g_bUserInTenfootBrowser = !1,
  g_bIsAndroid = !1,
  g_bIsIOS = !1,
  g_bIsMacOS = !1;
function BIsAndroid() {
  return (g_bInitialized || Init(), g_bIsAndroid);
}
function BIsIOS() {
  return (g_bInitialized || Init(), g_bIsIOS);
}
function BIsMobile() {
  return BIsIOS() || BIsAndroid();
}
function GetClientSteamType() {
  if (!navigator?.userAgent) return;
  let t = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (t && t.length == 2) return t[1];
}
function _CheckAgent(t, n) {
  return !!(
    (window &&
      window.location &&
      window.location.href &&
      window.location.href.match(`[?&]` + n + `=`)) ||
    (typeof navigator < `u` &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf(t.toLowerCase()) != -1)
  );
}
function Init() {
  let t = navigator,
    n = t && t.maxTouchPoints && t.maxTouchPoints > 1;
  ((g_bUserInTenfootBrowser = _CheckAgent(
    `Valve Steam Tenfoot`,
    `force_tenfoot_client_view`,
  )),
    _CheckAgent(`Valve Steam GameOverlay`, `force_overlay_view`),
    g_bUserInTenfootBrowser ||
      _CheckAgent(`Valve Steam Client`, `force_client_view`),
    _CheckAgent(`macintosh`, `force_mac_view`),
    (g_bIsIOS =
      _CheckAgent(`iphone`, `force_ios_view`) ||
      _CheckAgent(`ipad`, `force_ios_view`) ||
      _CheckAgent(`ipod`, `force_ios_view`) ||
      (_CheckAgent(`macintosh`, `force_ios_view`) && n)),
    (g_bIsAndroid = _CheckAgent(`android`, `force_android_view`)),
    (g_bInitialized = !0));
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
function useInVR(t) {
  return useConfigContext(t)?.IN_VR;
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
    return (console.warn(`Unable to determine base url!`), UNKNOWN_BASE_URL);
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
  return `partner`;
}
function classnames_default(...t) {
  return t.reduce(
    (t, n) =>
      n
        ? typeof n == `string`
          ? t
            ? `${t} ${n}`
            : n
          : typeof n == `object`
            ? t
              ? `${t} ${stringifyClassnameObject(n)}`
              : stringifyClassnameObject(n)
            : t
        : t,
    ``,
  );
}
function stringifyClassnameObject(t) {
  return Object.keys(t).reduce(
    (n, r) => (t[r] ? (n ? `${n} ${r}` : r) : n),
    ``,
  );
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
  return (o > 3 && s && Object.defineProperty(n, r, s), s);
}
function die(t) {
  var n = [...arguments].slice(1);
  throw Error(
    typeof t == `number`
      ? `[MobX] minified error nr: ` +
          t +
          (n.length ? ` ` + n.map(String).join(`,`) : ``) +
          `. Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts`
      : `[MobX] ` + t,
  );
}
var mockGlobal = {};
function getGlobal() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof window < `u`
      ? window
      : typeof global < `u`
        ? global
        : typeof self < `u`
          ? self
          : mockGlobal;
}
var assign = Object.assign,
  getDescriptor = Object.getOwnPropertyDescriptor,
  defineProperty = Object.defineProperty,
  objectPrototype = Object.prototype,
  EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy < `u`,
  plainObjectString = Object.toString();
function assertProxies() {
  hasProxy || die(`Proxy not available`);
}
function once(t) {
  var n = !1;
  return function () {
    if (!n) return ((n = !0), t.apply(this, arguments));
  };
}
var noop = function () {};
function isFunction(t) {
  return typeof t == `function`;
}
function isStringish(t) {
  switch (typeof t) {
    case `string`:
    case `symbol`:
    case `number`:
      return !0;
  }
  return !1;
}
function isObject(t) {
  return typeof t == `object` && !!t;
}
function isPlainObject(t) {
  if (!isObject(t)) return !1;
  var n = Object.getPrototypeOf(t);
  if (n == null) return !0;
  var r = Object.hasOwnProperty.call(n, `constructor`) && n.constructor;
  return typeof r == `function` && r.toString() === plainObjectString;
}
function isGenerator(t) {
  var n = t?.constructor;
  return n
    ? n.name === `GeneratorFunction` || n.displayName === `GeneratorFunction`
    : !1;
}
function addHiddenProp(t, n, r) {
  defineProperty(t, n, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r,
  });
}
function addHiddenFinalProp(t, n, r) {
  defineProperty(t, n, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r,
  });
}
function createInstanceofPredicate(t, n) {
  var r = `isMobX` + t;
  return (
    (n.prototype[r] = !0),
    function (t) {
      return isObject(t) && t[r] === !0;
    }
  );
}
function isES6Map(t) {
  return t != null && Object.prototype.toString.call(t) === `[object Map]`;
}
function isPlainES6Map(t) {
  var n = Object.getPrototypeOf(t),
    r = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(r) === null;
}
function isES6Set(t) {
  return t != null && Object.prototype.toString.call(t) === `[object Set]`;
}
var hasGetOwnPropertySymbols = Object.getOwnPropertySymbols !== void 0;
function getPlainObjectKeys(t) {
  var n = Object.keys(t);
  if (!hasGetOwnPropertySymbols) return n;
  var r = Object.getOwnPropertySymbols(t);
  return r.length
    ? [].concat(
        n,
        r.filter(function (n) {
          return objectPrototype.propertyIsEnumerable.call(t, n);
        }),
      )
    : n;
}
var ownKeys =
  typeof Reflect < `u` && Reflect.ownKeys
    ? Reflect.ownKeys
    : hasGetOwnPropertySymbols
      ? function (t) {
          return Object.getOwnPropertyNames(t).concat(
            Object.getOwnPropertySymbols(t),
          );
        }
      : Object.getOwnPropertyNames;
function toPrimitive(t) {
  return t === null ? null : typeof t == `object` ? `` + t : t;
}
function hasProp(t, n) {
  return objectPrototype.hasOwnProperty.call(t, n);
}
var getOwnPropertyDescriptors =
  Object.getOwnPropertyDescriptors ||
  function (t) {
    var n = {};
    return (
      ownKeys(t).forEach(function (r) {
        n[r] = getDescriptor(t, r);
      }),
      n
    );
  };
function getFlag(t, n) {
  return !!(t & n);
}
function setFlag(t, n, r) {
  return (r ? (t |= n) : (t &= ~n), t);
}
function _arrayLikeToArray(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var r = 0, i = Array(n); r < n; r++) i[r] = t[r];
  return i;
}
function _defineProperties(t, n) {
  for (var r = 0; r < n.length; r++) {
    var i = n[r];
    ((i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      `value` in i && (i.writable = !0),
      Object.defineProperty(t, _toPropertyKey(i.key), i));
  }
}
function _createClass(t, n, r) {
  return (
    n && _defineProperties(t.prototype, n),
    r && _defineProperties(t, r),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    t
  );
}
function _createForOfIteratorHelperLoose(t, n) {
  var r = (typeof Symbol < `u` && t[Symbol.iterator]) || t[`@@iterator`];
  if (r) return (r = r.call(t)).next.bind(r);
  if (
    Array.isArray(t) ||
    (r = _unsupportedIterableToArray(t)) ||
    (n && t && typeof t.length == `number`)
  ) {
    r && (t = r);
    var i = 0;
    return function () {
      return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
    };
  }
  throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var i in r) ({}).hasOwnProperty.call(r, i) && (t[i] = r[i]);
          }
          return t;
        }),
    _extends.apply(null, arguments)
  );
}
function _inheritsLoose(t, n) {
  ((t.prototype = Object.create(n.prototype)),
    (t.prototype.constructor = t),
    _setPrototypeOf(t, n));
}
function _setPrototypeOf(t, n) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, n) {
          return ((t.__proto__ = n), t);
        }),
    _setPrototypeOf(t, n)
  );
}
function _toPrimitive(t, n) {
  if (typeof t != `object` || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(t, n || `default`);
    if (typeof i != `object`) return i;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (n === `string` ? String : Number)(t);
}
function _toPropertyKey(t) {
  var n = _toPrimitive(t, `string`);
  return typeof n == `symbol` ? n : n + ``;
}
function _unsupportedIterableToArray(t, n) {
  if (t) {
    if (typeof t == `string`) return _arrayLikeToArray(t, n);
    var r = {}.toString.call(t).slice(8, -1);
    return (
      r === `Object` && t.constructor && (r = t.constructor.name),
      r === `Map` || r === `Set`
        ? Array.from(t)
        : r === `Arguments` ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? _arrayLikeToArray(t, n)
          : void 0
    );
  }
}
var storedAnnotationsSymbol = Symbol(`mobx-stored-annotations`);
function createDecoratorAnnotation(t) {
  function n(n, r) {
    if (is20223Decorator(r)) return t.decorate_20223_(n, r);
    storeAnnotation(n, r, t);
  }
  return Object.assign(n, t);
}
function storeAnnotation(t, n, r) {
  (hasProp(t, storedAnnotationsSymbol) ||
    addHiddenProp(
      t,
      storedAnnotationsSymbol,
      _extends({}, t[storedAnnotationsSymbol]),
    ),
    isOverride(r) || (t[storedAnnotationsSymbol][n] = r));
}
function collectStoredAnnotations(t) {
  return (
    hasProp(t, storedAnnotationsSymbol) ||
      addHiddenProp(
        t,
        storedAnnotationsSymbol,
        _extends({}, t[storedAnnotationsSymbol]),
      ),
    t[storedAnnotationsSymbol]
  );
}
function is20223Decorator(t) {
  return typeof t == `object` && typeof t.kind == `string`;
}
var $mobx = Symbol(`mobx administration`),
  Atom = (function () {
    function t(t) {
      (t === void 0 && (t = `Atom`),
        (this.name_ = void 0),
        (this.flags_ = 0),
        (this.observers_ = new Set()),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        (this.name_ = t));
    }
    var n = t.prototype;
    return (
      (n.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (t) {
            return t();
          });
      }),
      (n.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (t) {
            return t();
          });
      }),
      (n.reportObserved = function () {
        return reportObserved(this);
      }),
      (n.reportChanged = function () {
        (startBatch(), propagateChanged(this), endBatch());
      }),
      (n.toString = function () {
        return this.name_;
      }),
      _createClass(t, [
        {
          key: `isBeingObserved`,
          get: function () {
            return getFlag(this.flags_, t.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = setFlag(this.flags_, t.isBeingObservedMask_, n);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return getFlag(this.flags_, t.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = setFlag(
              this.flags_,
              t.isPendingUnobservationMask_,
              n,
            );
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!getFlag(this.flags_, t.diffValueMask_);
          },
          set: function (n) {
            this.flags_ = setFlag(this.flags_, t.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
((Atom.isBeingObservedMask_ = 1),
  (Atom.isPendingUnobservationMask_ = 2),
  (Atom.diffValueMask_ = 4));
var isAtom = createInstanceofPredicate(`Atom`, Atom);
function createAtom(t, n, r) {
  (n === void 0 && (n = noop), r === void 0 && (r = noop));
  var i = new Atom(t);
  return (
    n !== noop && onBecomeObserved(i, n),
    r !== noop && onBecomeUnobserved(i, r),
    i
  );
}
function identityComparer(t, n) {
  return t === n;
}
function structuralComparer(t, n) {
  return deepEqual(t, n);
}
function shallowComparer(t, n) {
  return deepEqual(t, n, 1);
}
function defaultComparer(t, n) {
  return Object.is
    ? Object.is(t, n)
    : t === n
      ? t !== 0 || 1 / t == 1 / n
      : t !== t && n !== n;
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer,
  shallow: shallowComparer,
};
function deepEnhancer(t, n, r) {
  return isObservable(t)
    ? t
    : Array.isArray(t)
      ? observable.array(t, { name: r })
      : isPlainObject(t)
        ? observable.object(t, void 0, { name: r })
        : isES6Map(t)
          ? observable.map(t, { name: r })
          : isES6Set(t)
            ? observable.set(t, { name: r })
            : typeof t == `function` && !isAction(t) && !isFlow(t)
              ? isGenerator(t)
                ? flow(t)
                : autoAction(r, t)
              : t;
}
function shallowEnhancer(t, n, r) {
  if (
    t == null ||
    isObservableObject(t) ||
    isObservableArray(t) ||
    isObservableMap(t) ||
    isObservableSet(t)
  )
    return t;
  if (Array.isArray(t)) return observable.array(t, { name: r, deep: !1 });
  if (isPlainObject(t))
    return observable.object(t, void 0, { name: r, deep: !1 });
  if (isES6Map(t)) return observable.map(t, { name: r, deep: !1 });
  if (isES6Set(t)) return observable.set(t, { name: r, deep: !1 });
}
function referenceEnhancer(t) {
  return t;
}
function refStructEnhancer(t, n) {
  return deepEqual(t, n) ? n : t;
}
var OVERRIDE = `override`;
function isOverride(t) {
  return t.annotationType_ === OVERRIDE;
}
function createActionAnnotation(t, n) {
  return {
    annotationType_: t,
    options_: n,
    make_: make_$1,
    extend_: extend_$1,
    decorate_20223_: decorate_20223_$1,
  };
}
function make_$1(t, n, r, i) {
  var o;
  return (o = this.options_) != null && o.bound
    ? this.extend_(t, n, r, !1) === null
      ? 0
      : 1
    : i === t.target_
      ? this.extend_(t, n, r, !1) === null
        ? 0
        : 2
      : isAction(r.value)
        ? 1
        : (defineProperty(i, n, createActionDescriptor(t, this, n, r, !1)), 2);
}
function extend_$1(t, n, r, i) {
  var o = createActionDescriptor(t, this, n, r);
  return t.defineProperty_(n, o, i);
}
function decorate_20223_$1(t, n) {
  var r = n.kind,
    i = n.name,
    o = n.addInitializer,
    s = this,
    l = function (t) {
      var n, r, o, l;
      return createAction(
        s.options_?.name ?? i.toString(),
        t,
        s.options_?.autoAction ?? !1,
      );
    };
  if (r == `field`)
    return function (t) {
      var n,
        r = t;
      return (
        isAction(r) || (r = l(r)),
        (n = s.options_) != null &&
          n.bound &&
          ((r = r.bind(this)), (r.isMobxAction = !0)),
        r
      );
    };
  if (r == `method`) {
    var u;
    return (
      isAction(t) || (t = l(t)),
      (u = this.options_) != null &&
        u.bound &&
        o(function () {
          var t = this,
            n = t[i].bind(t);
          ((n.isMobxAction = !0), (t[i] = n));
        }),
      t
    );
  }
  die(
    `Cannot apply '` +
      s.annotationType_ +
      `' to '` +
      String(i) +
      `' (kind: ` +
      r +
      `):` +
      (`
'` +
        s.annotationType_ +
        `' can only be used on properties with a function value.`),
  );
}
function assertActionDescriptor(t, n, r, i) {
  (n.annotationType_, i.value);
}
function createActionDescriptor(t, n, r, i, o) {
  var s, l, u, p, m, h, g;
  (o === void 0 && (o = globalState.safeDescriptors),
    assertActionDescriptor(t, n, r, i));
  var _ = i.value;
  if ((s = n.options_) != null && s.bound) {
    var v;
    _ = _.bind(t.proxy_ ?? t.target_);
  }
  return {
    value: createAction(
      n.options_?.name ?? r.toString(),
      _,
      n.options_?.autoAction ?? !1,
      (h = n.options_) != null && h.bound ? (t.proxy_ ?? t.target_) : void 0,
    ),
    configurable: !o || t.isPlainObject_,
    enumerable: !1,
    writable: !o,
  };
}
function createFlowAnnotation(t, n) {
  return {
    annotationType_: t,
    options_: n,
    make_: make_$2,
    extend_: extend_$2,
    decorate_20223_: decorate_20223_$2,
  };
}
function make_$2(t, n, r, i) {
  var o;
  return i === t.target_
    ? this.extend_(t, n, r, !1) === null
      ? 0
      : 2
    : (o = this.options_) != null &&
        o.bound &&
        (!hasProp(t.target_, n) || !isFlow(t.target_[n])) &&
        this.extend_(t, n, r, !1) === null
      ? 0
      : isFlow(r.value)
        ? 1
        : (defineProperty(i, n, createFlowDescriptor(t, this, n, r, !1, !1)),
          2);
}
function extend_$2(t, n, r, i) {
  var o,
    s = createFlowDescriptor(t, this, n, r, this.options_?.bound);
  return t.defineProperty_(n, s, i);
}
function decorate_20223_$2(t, n) {
  var r,
    i = n.name,
    o = n.addInitializer;
  return (
    isFlow(t) || (t = flow(t)),
    (r = this.options_) != null &&
      r.bound &&
      o(function () {
        var t = this,
          n = t[i].bind(t);
        ((n.isMobXFlow = !0), (t[i] = n));
      }),
    t
  );
}
function assertFlowDescriptor(t, n, r, i) {
  (n.annotationType_, i.value);
}
function createFlowDescriptor(t, n, r, i, o, s) {
  (s === void 0 && (s = globalState.safeDescriptors),
    assertFlowDescriptor(t, n, r, i));
  var l = i.value;
  if ((isFlow(l) || (l = flow(l)), o)) {
    var u;
    ((l = l.bind(t.proxy_ ?? t.target_)), (l.isMobXFlow = !0));
  }
  return {
    value: l,
    configurable: !s || t.isPlainObject_,
    enumerable: !1,
    writable: !s,
  };
}
function createComputedAnnotation(t, n) {
  return {
    annotationType_: t,
    options_: n,
    make_: make_$3,
    extend_: extend_$3,
    decorate_20223_: decorate_20223_$3,
  };
}
function make_$3(t, n, r) {
  return this.extend_(t, n, r, !1) === null ? 0 : 1;
}
function extend_$3(t, n, r, i) {
  return (
    assertComputedDescriptor(t, this, n, r),
    t.defineComputedProperty_(
      n,
      _extends({}, this.options_, { get: r.get, set: r.set }),
      i,
    )
  );
}
function decorate_20223_$3(t, n) {
  var r = this,
    i = n.name,
    o = n.addInitializer;
  return (
    o(function () {
      var n = asObservableObject(this)[$mobx],
        o = _extends({}, r.options_, { get: t, context: this });
      ((o.name ||= `ObservableObject.` + i.toString()),
        n.values_.set(i, new ComputedValue(o)));
    }),
    function () {
      return this[$mobx].getObservablePropValue_(i);
    }
  );
}
function assertComputedDescriptor(t, n, r, i) {
  (n.annotationType_, i.get);
}
function createObservableAnnotation(t, n) {
  return {
    annotationType_: t,
    options_: n,
    make_: make_$4,
    extend_: extend_$4,
    decorate_20223_: decorate_20223_$4,
  };
}
function make_$4(t, n, r) {
  return this.extend_(t, n, r, !1) === null ? 0 : 1;
}
function extend_$4(t, n, r, i) {
  var o, s;
  return (
    assertObservableDescriptor(t, this, n, r),
    t.defineObservableProperty_(
      n,
      r.value,
      this.options_?.enhancer ?? deepEnhancer,
      i,
    )
  );
}
function decorate_20223_$4(t, n) {
  var r = this,
    i = n.kind,
    o = n.name,
    s = new WeakSet();
  function l(t, n) {
    var i,
      l,
      u = asObservableObject(t)[$mobx],
      p = new ObservableValue(
        n,
        r.options_?.enhancer ?? deepEnhancer,
        `ObservableObject.` + o.toString(),
        !1,
      );
    (u.values_.set(o, p), s.add(t));
  }
  if (i == `accessor`)
    return {
      get: function () {
        return (
          s.has(this) || l(this, t.get.call(this)),
          this[$mobx].getObservablePropValue_(o)
        );
      },
      set: function (t) {
        return (
          s.has(this) || l(this, t), this[$mobx].setObservablePropValue_(o, t)
        );
      },
      init: function (t) {
        return (s.has(this) || l(this, t), t);
      },
    };
}
function assertObservableDescriptor(t, n, r, i) {
  n.annotationType_;
}
var AUTO = `true`,
  autoAnnotation = createAutoAnnotation();
function createAutoAnnotation(t) {
  return {
    annotationType_: AUTO,
    options_: t,
    make_: make_$5,
    extend_: extend_$5,
    decorate_20223_: decorate_20223_$5,
  };
}
function make_$5(t, n, r, i) {
  var o, s;
  if (r.get) return computed.make_(t, n, r, i);
  if (r.set) {
    var l = isAction(r.set) ? r.set : createAction(n.toString(), r.set);
    return i === t.target_
      ? t.defineProperty_(n, {
          configurable: !globalState.safeDescriptors || t.isPlainObject_,
          set: l,
        }) === null
        ? 0
        : 2
      : (defineProperty(i, n, { configurable: !0, set: l }), 2);
  }
  if (i !== t.target_ && typeof r.value == `function`) {
    var u;
    if (isGenerator(r.value)) {
      var p;
      return (
        (p = this.options_) != null && p.autoBind ? flow.bound : flow
      ).make_(t, n, r, i);
    }
    return (
      (u = this.options_) != null && u.autoBind ? autoAction.bound : autoAction
    ).make_(t, n, r, i);
  }
  var m = this.options_?.deep === !1 ? observable.ref : observable;
  if (
    typeof r.value == `function` &&
    (s = this.options_) != null &&
    s.autoBind
  ) {
    var h;
    r.value = r.value.bind(t.proxy_ ?? t.target_);
  }
  return m.make_(t, n, r, i);
}
function extend_$5(t, n, r, i) {
  var o, s;
  if (r.get) return computed.extend_(t, n, r, i);
  if (r.set)
    return t.defineProperty_(
      n,
      {
        configurable: !globalState.safeDescriptors || t.isPlainObject_,
        set: createAction(n.toString(), r.set),
      },
      i,
    );
  if (
    typeof r.value == `function` &&
    (o = this.options_) != null &&
    o.autoBind
  ) {
    var l;
    r.value = r.value.bind(t.proxy_ ?? t.target_);
  }
  return (this.options_?.deep === !1 ? observable.ref : observable).extend_(
    t,
    n,
    r,
    i,
  );
}
function decorate_20223_$5(t, n) {
  die(`'` + this.annotationType_ + `' cannot be used as a decorator`);
}
var OBSERVABLE = `observable`,
  OBSERVABLE_REF = `observable.ref`,
  OBSERVABLE_SHALLOW = `observable.shallow`,
  OBSERVABLE_STRUCT = `observable.struct`,
  defaultCreateObservableOptions = {
    deep: !0,
    name: void 0,
    defaultDecorator: void 0,
    proxy: !0,
  };
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(t) {
  return t || defaultCreateObservableOptions;
}
var observableAnnotation = createObservableAnnotation(OBSERVABLE),
  observableRefAnnotation = createObservableAnnotation(OBSERVABLE_REF, {
    enhancer: referenceEnhancer,
  }),
  observableShallowAnnotation = createObservableAnnotation(OBSERVABLE_SHALLOW, {
    enhancer: shallowEnhancer,
  }),
  observableStructAnnotation = createObservableAnnotation(OBSERVABLE_STRUCT, {
    enhancer: refStructEnhancer,
  }),
  observableDecoratorAnnotation =
    createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(t) {
  return t.deep === !0
    ? deepEnhancer
    : t.deep === !1
      ? referenceEnhancer
      : getEnhancerFromAnnotation(t.defaultDecorator);
}
function getAnnotationFromOptions(t) {
  var n;
  return t ? (t.defaultDecorator ?? createAutoAnnotation(t)) : void 0;
}
function getEnhancerFromAnnotation(t) {
  var n, r;
  return t ? (t.options_?.enhancer ?? deepEnhancer) : deepEnhancer;
}
function createObservable(t, n, r) {
  if (is20223Decorator(n)) return observableAnnotation.decorate_20223_(t, n);
  if (isStringish(n)) storeAnnotation(t, n, observableAnnotation);
  else
    return isObservable(t)
      ? t
      : isPlainObject(t)
        ? observable.object(t, n, r)
        : Array.isArray(t)
          ? observable.array(t, n)
          : isES6Map(t)
            ? observable.map(t, n)
            : isES6Set(t)
              ? observable.set(t, n)
              : typeof t == `object` && t
                ? t
                : observable.box(t, n);
}
assign(createObservable, observableDecoratorAnnotation);
var observable = assign(createObservable, {
    box: function (t, n) {
      var r = asCreateObservableOptions(n);
      return new ObservableValue(
        t,
        getEnhancerFromOptions(r),
        r.name,
        !0,
        r.equals,
      );
    },
    array: function (t, n) {
      var r = asCreateObservableOptions(n);
      return (
        globalState.useProxies === !1 || r.proxy === !1
          ? createLegacyArray
          : createObservableArray
      )(t, getEnhancerFromOptions(r), r.name);
    },
    map: function (t, n) {
      var r = asCreateObservableOptions(n);
      return new ObservableMap(t, getEnhancerFromOptions(r), r.name);
    },
    set: function (t, n) {
      var r = asCreateObservableOptions(n);
      return new ObservableSet(t, getEnhancerFromOptions(r), r.name);
    },
    object: function (t, n, r) {
      return initObservable(function () {
        return extendObservable(
          globalState.useProxies === !1 || r?.proxy === !1
            ? asObservableObject({}, r)
            : asDynamicObservableObject({}, r),
          t,
          n,
        );
      });
    },
    ref: createDecoratorAnnotation(observableRefAnnotation),
    shallow: createDecoratorAnnotation(observableShallowAnnotation),
    deep: observableDecoratorAnnotation,
    struct: createDecoratorAnnotation(observableStructAnnotation),
  }),
  COMPUTED = `computed`,
  COMPUTED_STRUCT = `computed.struct`,
  computedAnnotation = createComputedAnnotation(COMPUTED),
  computedStructAnnotation = createComputedAnnotation(COMPUTED_STRUCT, {
    equals: comparer.structural,
  }),
  computed = function (t, n) {
    if (is20223Decorator(n)) return computedAnnotation.decorate_20223_(t, n);
    if (isStringish(n)) return storeAnnotation(t, n, computedAnnotation);
    if (isPlainObject(t))
      return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, t));
    var r = isPlainObject(n) ? n : {};
    return ((r.get = t), (r.name ||= t.name || ``), new ComputedValue(r));
  };
(Object.assign(computed, computedAnnotation),
  (computed.struct = createDecoratorAnnotation(computedStructAnnotation)));
var _getDescriptor$config,
  _getDescriptor,
  currentActionId = 0,
  nextActionId = 1,
  isFunctionNameConfigurable =
    (_getDescriptor$config = (_getDescriptor = getDescriptor(
      function () {},
      `name`,
    ))?.configurable) ?? !1,
  tmpNameDescriptor = {
    value: `action`,
    configurable: !0,
    writable: !1,
    enumerable: !1,
  };
function createAction(t, n, r, i) {
  r === void 0 && (r = !1);
  function o() {
    return executeAction(t, r, n, i || this, arguments);
  }
  return (
    (o.isMobxAction = !0),
    (o.toString = function () {
      return n.toString();
    }),
    isFunctionNameConfigurable &&
      ((tmpNameDescriptor.value = t),
      defineProperty(o, `name`, tmpNameDescriptor)),
    o
  );
}
function executeAction(t, n, r, i, o) {
  var s = _startAction(t, n, i, o);
  try {
    return r.apply(i, o);
  } catch (t) {
    throw ((s.error_ = t), t);
  } finally {
    _endAction(s);
  }
}
function _startAction(t, n, r, i) {
  var o = !1,
    s = 0,
    l = globalState.trackingDerivation,
    u = !n || !l;
  startBatch();
  var p = globalState.allowStateChanges;
  u && (untrackedStart(), (p = allowStateChangesStart(!0)));
  var m = allowStateReadsStart(!0),
    h = {
      runAsAction_: u,
      prevDerivation_: l,
      prevAllowStateChanges_: p,
      prevAllowStateReads_: m,
      notifySpy_: o,
      startTime_: s,
      actionId_: nextActionId++,
      parentActionId_: currentActionId,
    };
  return ((currentActionId = h.actionId_), h);
}
function _endAction(t) {
  (currentActionId !== t.actionId_ && die(30),
    (currentActionId = t.parentActionId_),
    t.error_ !== void 0 && (globalState.suppressReactionErrors = !0),
    allowStateChangesEnd(t.prevAllowStateChanges_),
    allowStateReadsEnd(t.prevAllowStateReads_),
    endBatch(),
    t.runAsAction_ && untrackedEnd(t.prevDerivation_),
    (globalState.suppressReactionErrors = !1));
}
function allowStateChanges(t, n) {
  var r = allowStateChangesStart(t);
  try {
    return n();
  } finally {
    allowStateChangesEnd(r);
  }
}
function allowStateChangesStart(t) {
  var n = globalState.allowStateChanges;
  return ((globalState.allowStateChanges = t), n);
}
function allowStateChangesEnd(t) {
  globalState.allowStateChanges = t;
}
var ObservableValue = (function (t) {
    function n(n, r, i, o, s) {
      var l;
      return (
        i === void 0 && (i = `ObservableValue`),
        o === void 0 && (o = !0),
        s === void 0 && (s = comparer.default),
        (l = t.call(this, i) || this),
        (l.enhancer = void 0),
        (l.name_ = void 0),
        (l.equals = void 0),
        (l.hasUnreportedChange_ = !1),
        (l.interceptors_ = void 0),
        (l.changeListeners_ = void 0),
        (l.value_ = void 0),
        (l.dehancer = void 0),
        (l.enhancer = r),
        (l.name_ = i),
        (l.equals = s),
        (l.value_ = r(n, void 0, i)),
        l
      );
    }
    _inheritsLoose(n, t);
    var r = n.prototype;
    return (
      (r.dehanceValue = function (t) {
        return this.dehancer === void 0 ? t : this.dehancer(t);
      }),
      (r.set = function (t) {
        (this.value_,
          (t = this.prepareNewValue_(t)),
          t !== globalState.UNCHANGED && this.setNewValue_(t));
      }),
      (r.prepareNewValue_ = function (t) {
        if (hasInterceptors(this)) {
          var n = interceptChange(this, {
            object: this,
            type: UPDATE,
            newValue: t,
          });
          if (!n) return globalState.UNCHANGED;
          t = n.newValue;
        }
        return (
          (t = this.enhancer(t, this.value_, this.name_)),
          this.equals(this.value_, t) ? globalState.UNCHANGED : t
        );
      }),
      (r.setNewValue_ = function (t) {
        var n = this.value_;
        ((this.value_ = t),
          this.reportChanged(),
          hasListeners(this) &&
            notifyListeners(this, {
              type: UPDATE,
              object: this,
              newValue: t,
              oldValue: n,
            }));
      }),
      (r.get = function () {
        return (this.reportObserved(), this.dehanceValue(this.value_));
      }),
      (r.intercept_ = function (t) {
        return registerInterceptor(this, t);
      }),
      (r.observe_ = function (t, n) {
        return (
          n &&
            t({
              observableKind: `value`,
              debugObjectName: this.name_,
              object: this,
              type: UPDATE,
              newValue: this.value_,
              oldValue: void 0,
            }),
          registerListener(this, t)
        );
      }),
      (r.raw = function () {
        return this.value_;
      }),
      (r.toJSON = function () {
        return this.get();
      }),
      (r.toString = function () {
        return this.name_ + `[` + this.value_ + `]`;
      }),
      (r.valueOf = function () {
        return toPrimitive(this.get());
      }),
      (r[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      n
    );
  })(Atom),
  isObservableValue = createInstanceofPredicate(
    `ObservableValue`,
    ObservableValue,
  ),
  ComputedValue = (function () {
    function t(t) {
      ((this.dependenciesState_ = IDerivationState_.NOT_TRACKING_),
        (this.observing_ = []),
        (this.newObserving_ = null),
        (this.observers_ = new Set()),
        (this.runId_ = 0),
        (this.lastAccessedBy_ = 0),
        (this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_),
        (this.unboundDepsCount_ = 0),
        (this.value_ = new CaughtException(null)),
        (this.name_ = void 0),
        (this.triggeredBy_ = void 0),
        (this.flags_ = 0),
        (this.derivation = void 0),
        (this.setter_ = void 0),
        (this.isTracing_ = TraceMode.NONE),
        (this.scope_ = void 0),
        (this.equals_ = void 0),
        (this.requiresReaction_ = void 0),
        (this.keepAlive_ = void 0),
        (this.onBOL = void 0),
        (this.onBUOL = void 0),
        t.get || die(31),
        (this.derivation = t.get),
        (this.name_ = t.name || `ComputedValue`),
        t.set && (this.setter_ = createAction(`ComputedValue-setter`, t.set)),
        (this.equals_ =
          t.equals ||
          (t.compareStructural || t.struct
            ? comparer.structural
            : comparer.default)),
        (this.scope_ = t.context),
        (this.requiresReaction_ = t.requiresReaction),
        (this.keepAlive_ = !!t.keepAlive));
    }
    var n = t.prototype;
    return (
      (n.onBecomeStale_ = function () {
        propagateMaybeChanged(this);
      }),
      (n.onBO = function () {
        this.onBOL &&
          this.onBOL.forEach(function (t) {
            return t();
          });
      }),
      (n.onBUO = function () {
        this.onBUOL &&
          this.onBUOL.forEach(function (t) {
            return t();
          });
      }),
      (n.get = function () {
        if (
          (this.isComputing && die(32, this.name_, this.derivation),
          globalState.inBatch === 0 &&
            this.observers_.size === 0 &&
            !this.keepAlive_)
        )
          shouldCompute(this) &&
            (this.warnAboutUntrackedRead_(),
            startBatch(),
            (this.value_ = this.computeValue_(!1)),
            endBatch());
        else if ((reportObserved(this), shouldCompute(this))) {
          var t = globalState.trackingContext;
          (this.keepAlive_ && !t && (globalState.trackingContext = this),
            this.trackAndCompute() && propagateChangeConfirmed(this),
            (globalState.trackingContext = t));
        }
        var n = this.value_;
        if (isCaughtException(n)) throw n.cause;
        return n;
      }),
      (n.set = function (t) {
        if (this.setter_) {
          (this.isRunningSetter && die(33, this.name_),
            (this.isRunningSetter = !0));
          try {
            this.setter_.call(this.scope_, t);
          } finally {
            this.isRunningSetter = !1;
          }
        } else die(34, this.name_);
      }),
      (n.trackAndCompute = function () {
        var t = this.value_,
          n = this.dependenciesState_ === IDerivationState_.NOT_TRACKING_,
          r = this.computeValue_(!0),
          i =
            n ||
            isCaughtException(t) ||
            isCaughtException(r) ||
            !this.equals_(t, r);
        return (i && (this.value_ = r), i);
      }),
      (n.computeValue_ = function (t) {
        this.isComputing = !0;
        var n = allowStateChangesStart(!1),
          r;
        if (t) r = trackDerivedFunction(this, this.derivation, this.scope_);
        else if (globalState.disableErrorBoundaries === !0)
          r = this.derivation.call(this.scope_);
        else
          try {
            r = this.derivation.call(this.scope_);
          } catch (t) {
            r = new CaughtException(t);
          }
        return (allowStateChangesEnd(n), (this.isComputing = !1), r);
      }),
      (n.suspend_ = function () {
        this.keepAlive_ || (clearObserving(this), (this.value_ = void 0));
      }),
      (n.observe_ = function (t, n) {
        var r = this,
          i = !0,
          o = void 0;
        return autorun(function () {
          var s = r.get();
          if (!i || n) {
            var l = untrackedStart();
            (t({
              observableKind: `computed`,
              debugObjectName: r.name_,
              type: UPDATE,
              object: r,
              newValue: s,
              oldValue: o,
            }),
              untrackedEnd(l));
          }
          ((i = !1), (o = s));
        });
      }),
      (n.warnAboutUntrackedRead_ = function () {}),
      (n.toString = function () {
        return this.name_ + `[` + this.derivation.toString() + `]`;
      }),
      (n.valueOf = function () {
        return toPrimitive(this.get());
      }),
      (n[Symbol.toPrimitive] = function () {
        return this.valueOf();
      }),
      _createClass(t, [
        {
          key: `isComputing`,
          get: function () {
            return getFlag(this.flags_, t.isComputingMask_);
          },
          set: function (n) {
            this.flags_ = setFlag(this.flags_, t.isComputingMask_, n);
          },
        },
        {
          key: `isRunningSetter`,
          get: function () {
            return getFlag(this.flags_, t.isRunningSetterMask_);
          },
          set: function (n) {
            this.flags_ = setFlag(this.flags_, t.isRunningSetterMask_, n);
          },
        },
        {
          key: `isBeingObserved`,
          get: function () {
            return getFlag(this.flags_, t.isBeingObservedMask_);
          },
          set: function (n) {
            this.flags_ = setFlag(this.flags_, t.isBeingObservedMask_, n);
          },
        },
        {
          key: `isPendingUnobservation`,
          get: function () {
            return getFlag(this.flags_, t.isPendingUnobservationMask_);
          },
          set: function (n) {
            this.flags_ = setFlag(
              this.flags_,
              t.isPendingUnobservationMask_,
              n,
            );
          },
        },
        {
          key: `diffValue`,
          get: function () {
            return +!!getFlag(this.flags_, t.diffValueMask_);
          },
          set: function (n) {
            this.flags_ = setFlag(this.flags_, t.diffValueMask_, n === 1);
          },
        },
      ])
    );
  })();
((ComputedValue.isComputingMask_ = 1),
  (ComputedValue.isRunningSetterMask_ = 2),
  (ComputedValue.isBeingObservedMask_ = 4),
  (ComputedValue.isPendingUnobservationMask_ = 8),
  (ComputedValue.diffValueMask_ = 16));
var isComputedValue = createInstanceofPredicate(`ComputedValue`, ComputedValue),
  IDerivationState_;
(function (t) {
  ((t[(t.NOT_TRACKING_ = -1)] = `NOT_TRACKING_`),
    (t[(t.UP_TO_DATE_ = 0)] = `UP_TO_DATE_`),
    (t[(t.POSSIBLY_STALE_ = 1)] = `POSSIBLY_STALE_`),
    (t[(t.STALE_ = 2)] = `STALE_`));
})((IDerivationState_ ||= {}));
var TraceMode;
(function (t) {
  ((t[(t.NONE = 0)] = `NONE`),
    (t[(t.LOG = 1)] = `LOG`),
    (t[(t.BREAK = 2)] = `BREAK`));
})((TraceMode ||= {}));
var CaughtException = function (t) {
  ((this.cause = void 0), (this.cause = t));
};
function isCaughtException(t) {
  return t instanceof CaughtException;
}
function shouldCompute(t) {
  switch (t.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return !1;
    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return !0;
    case IDerivationState_.POSSIBLY_STALE_:
      for (
        var n = allowStateReadsStart(!0),
          r = untrackedStart(),
          i = t.observing_,
          o = i.length,
          s = 0;
        s < o;
        s++
      ) {
        var l = i[s];
        if (isComputedValue(l)) {
          if (globalState.disableErrorBoundaries) l.get();
          else
            try {
              l.get();
            } catch {
              return (untrackedEnd(r), allowStateReadsEnd(n), !0);
            }
          if (t.dependenciesState_ === IDerivationState_.STALE_)
            return (untrackedEnd(r), allowStateReadsEnd(n), !0);
        }
      }
      return (
        changeDependenciesStateTo0(t),
        untrackedEnd(r),
        allowStateReadsEnd(n),
        !1
      );
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null;
}
function trackDerivedFunction(t, n, r) {
  var i = allowStateReadsStart(!0);
  (changeDependenciesStateTo0(t),
    (t.newObserving_ = Array(t.runId_ === 0 ? 100 : t.observing_.length)),
    (t.unboundDepsCount_ = 0),
    (t.runId_ = ++globalState.runId));
  var o = globalState.trackingDerivation;
  ((globalState.trackingDerivation = t), globalState.inBatch++);
  var s;
  if (globalState.disableErrorBoundaries === !0) s = n.call(r);
  else
    try {
      s = n.call(r);
    } catch (t) {
      s = new CaughtException(t);
    }
  return (
    globalState.inBatch--,
    (globalState.trackingDerivation = o),
    bindDependencies(t),
    allowStateReadsEnd(i),
    s
  );
}
function bindDependencies(t) {
  for (
    var n = t.observing_,
      r = (t.observing_ = t.newObserving_),
      i = IDerivationState_.UP_TO_DATE_,
      o = 0,
      s = t.unboundDepsCount_,
      l = 0;
    l < s;
    l++
  ) {
    var u = r[l];
    (u.diffValue === 0 && ((u.diffValue = 1), o !== l && (r[o] = u), o++),
      u.dependenciesState_ > i && (i = u.dependenciesState_));
  }
  for (r.length = o, t.newObserving_ = null, s = n.length; s--;) {
    var p = n[s];
    (p.diffValue === 0 && removeObserver(p, t), (p.diffValue = 0));
  }
  for (; o--;) {
    var m = r[o];
    m.diffValue === 1 && ((m.diffValue = 0), addObserver(m, t));
  }
  i !== IDerivationState_.UP_TO_DATE_ &&
    ((t.dependenciesState_ = i), t.onBecomeStale_());
}
function clearObserving(t) {
  var n = t.observing_;
  t.observing_ = [];
  for (var r = n.length; r--;) removeObserver(n[r], t);
  t.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(t) {
  var n = untrackedStart();
  try {
    return t();
  } finally {
    untrackedEnd(n);
  }
}
function untrackedStart() {
  var t = globalState.trackingDerivation;
  return ((globalState.trackingDerivation = null), t);
}
function untrackedEnd(t) {
  globalState.trackingDerivation = t;
}
function allowStateReadsStart(t) {
  var n = globalState.allowStateReads;
  return ((globalState.allowStateReads = t), n);
}
function allowStateReadsEnd(t) {
  globalState.allowStateReads = t;
}
function changeDependenciesStateTo0(t) {
  if (t.dependenciesState_ !== IDerivationState_.UP_TO_DATE_) {
    t.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    for (var n = t.observing_, r = n.length; r--;)
      n[r].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}
var MobXGlobals = function () {
    ((this.version = 6),
      (this.UNCHANGED = {}),
      (this.trackingDerivation = null),
      (this.trackingContext = null),
      (this.runId = 0),
      (this.mobxGuid = 0),
      (this.inBatch = 0),
      (this.pendingUnobservations = []),
      (this.pendingReactions = []),
      (this.isRunningReactions = !1),
      (this.allowStateChanges = !1),
      (this.allowStateReads = !0),
      (this.enforceActions = !0),
      (this.spyListeners = []),
      (this.globalReactionErrorHandlers = []),
      (this.computedRequiresReaction = !1),
      (this.reactionRequiresObservable = !1),
      (this.observableRequiresReaction = !1),
      (this.disableErrorBoundaries = !1),
      (this.suppressReactionErrors = !1),
      (this.useProxies = !0),
      (this.verifyProxies = !1),
      (this.safeDescriptors = !0));
  },
  canMergeGlobalState = !0,
  isolateCalled = !1,
  globalState = (function () {
    var t = getGlobal();
    return (
      t.__mobxInstanceCount > 0 &&
        !t.__mobxGlobals &&
        (canMergeGlobalState = !1),
      t.__mobxGlobals &&
        t.__mobxGlobals.version !== new MobXGlobals().version &&
        (canMergeGlobalState = !1),
      canMergeGlobalState
        ? t.__mobxGlobals
          ? ((t.__mobxInstanceCount += 1),
            t.__mobxGlobals.UNCHANGED || (t.__mobxGlobals.UNCHANGED = {}),
            t.__mobxGlobals)
          : ((t.__mobxInstanceCount = 1), (t.__mobxGlobals = new MobXGlobals()))
        : (setTimeout(function () {
            isolateCalled || die(35);
          }, 1),
          new MobXGlobals())
    );
  })();
function isolateGlobalState() {
  if (
    ((globalState.pendingReactions.length ||
      globalState.inBatch ||
      globalState.isRunningReactions) &&
      die(36),
    (isolateCalled = !0),
    canMergeGlobalState)
  ) {
    var t = getGlobal();
    (--t.__mobxInstanceCount === 0 && (t.__mobxGlobals = void 0),
      (globalState = new MobXGlobals()));
  }
}
function addObserver(t, n) {
  (t.observers_.add(n),
    t.lowestObserverState_ > n.dependenciesState_ &&
      (t.lowestObserverState_ = n.dependenciesState_));
}
function removeObserver(t, n) {
  (t.observers_.delete(n), t.observers_.size === 0 && queueForUnobservation(t));
}
function queueForUnobservation(t) {
  t.isPendingUnobservation === !1 &&
    ((t.isPendingUnobservation = !0),
    globalState.pendingUnobservations.push(t));
}
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    for (var t = globalState.pendingUnobservations, n = 0; n < t.length; n++) {
      var r = t[n];
      ((r.isPendingUnobservation = !1),
        r.observers_.size === 0 &&
          (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBUO()),
          r instanceof ComputedValue && r.suspend_()));
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(t) {
  var n = globalState.trackingDerivation;
  return n === null
    ? (t.observers_.size === 0 &&
        globalState.inBatch > 0 &&
        queueForUnobservation(t),
      !1)
    : (n.runId_ !== t.lastAccessedBy_ &&
        ((t.lastAccessedBy_ = n.runId_),
        (n.newObserving_[n.unboundDepsCount_++] = t),
        !t.isBeingObserved &&
          globalState.trackingContext &&
          ((t.isBeingObserved = !0), t.onBO())),
      t.isBeingObserved);
}
function propagateChanged(t) {
  t.lowestObserverState_ !== IDerivationState_.STALE_ &&
    ((t.lowestObserverState_ = IDerivationState_.STALE_),
    t.observers_.forEach(function (t) {
      (t.dependenciesState_ === IDerivationState_.UP_TO_DATE_ &&
        t.onBecomeStale_(),
        (t.dependenciesState_ = IDerivationState_.STALE_));
    }));
}
function propagateChangeConfirmed(t) {
  t.lowestObserverState_ !== IDerivationState_.STALE_ &&
    ((t.lowestObserverState_ = IDerivationState_.STALE_),
    t.observers_.forEach(function (n) {
      n.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_
        ? (n.dependenciesState_ = IDerivationState_.STALE_)
        : n.dependenciesState_ === IDerivationState_.UP_TO_DATE_ &&
          (t.lowestObserverState_ = IDerivationState_.UP_TO_DATE_);
    }));
}
function propagateMaybeChanged(t) {
  t.lowestObserverState_ === IDerivationState_.UP_TO_DATE_ &&
    ((t.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_),
    t.observers_.forEach(function (t) {
      t.dependenciesState_ === IDerivationState_.UP_TO_DATE_ &&
        ((t.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_),
        t.onBecomeStale_());
    }));
}
var Reaction = (function () {
  function t(t, n, r, i) {
    (t === void 0 && (t = `Reaction`),
      (this.name_ = void 0),
      (this.onInvalidate_ = void 0),
      (this.errorHandler_ = void 0),
      (this.requiresObservable_ = void 0),
      (this.observing_ = []),
      (this.newObserving_ = []),
      (this.dependenciesState_ = IDerivationState_.NOT_TRACKING_),
      (this.runId_ = 0),
      (this.unboundDepsCount_ = 0),
      (this.flags_ = 0),
      (this.isTracing_ = TraceMode.NONE),
      (this.name_ = t),
      (this.onInvalidate_ = n),
      (this.errorHandler_ = r),
      (this.requiresObservable_ = i));
  }
  var n = t.prototype;
  return (
    (n.onBecomeStale_ = function () {
      this.schedule_();
    }),
    (n.schedule_ = function () {
      this.isScheduled ||
        ((this.isScheduled = !0),
        globalState.pendingReactions.push(this),
        runReactions());
    }),
    (n.runReaction_ = function () {
      if (!this.isDisposed) {
        (startBatch(), (this.isScheduled = !1));
        var t = globalState.trackingContext;
        if (((globalState.trackingContext = this), shouldCompute(this))) {
          this.isTrackPending = !0;
          try {
            this.onInvalidate_();
          } catch (t) {
            this.reportExceptionInDerivation_(t);
          }
        }
        ((globalState.trackingContext = t), endBatch());
      }
    }),
    (n.track = function (t) {
      if (!this.isDisposed) {
        (startBatch(), (this.isRunning = !0));
        var n = globalState.trackingContext;
        globalState.trackingContext = this;
        var r = trackDerivedFunction(this, t, void 0);
        ((globalState.trackingContext = n),
          (this.isRunning = !1),
          (this.isTrackPending = !1),
          this.isDisposed && clearObserving(this),
          isCaughtException(r) && this.reportExceptionInDerivation_(r.cause),
          endBatch());
      }
    }),
    (n.reportExceptionInDerivation_ = function (t) {
      var n = this;
      if (this.errorHandler_) this.errorHandler_(t, this);
      else {
        if (globalState.disableErrorBoundaries) throw t;
        var r = `[mobx] uncaught error in '` + this + `'`;
        (globalState.suppressReactionErrors || console.error(r, t),
          globalState.globalReactionErrorHandlers.forEach(function (r) {
            return r(t, n);
          }));
      }
    }),
    (n.dispose = function () {
      this.isDisposed ||
        ((this.isDisposed = !0),
        this.isRunning || (startBatch(), clearObserving(this), endBatch()));
    }),
    (n.getDisposer_ = function (t) {
      var n = this,
        r = function r() {
          (n.dispose(),
            t == null ||
              t.removeEventListener == null ||
              t.removeEventListener(`abort`, r));
        };
      return (
        t == null ||
          t.addEventListener == null ||
          t.addEventListener(`abort`, r),
        (r[$mobx] = this),
        `dispose` in Symbol &&
          typeof Symbol.dispose == `symbol` &&
          (r[Symbol.dispose] = r),
        r
      );
    }),
    (n.toString = function () {
      return `Reaction[` + this.name_ + `]`;
    }),
    (n.trace = function (t) {
      t === void 0 && (t = !1);
    }),
    _createClass(t, [
      {
        key: `isDisposed`,
        get: function () {
          return getFlag(this.flags_, t.isDisposedMask_);
        },
        set: function (n) {
          this.flags_ = setFlag(this.flags_, t.isDisposedMask_, n);
        },
      },
      {
        key: `isScheduled`,
        get: function () {
          return getFlag(this.flags_, t.isScheduledMask_);
        },
        set: function (n) {
          this.flags_ = setFlag(this.flags_, t.isScheduledMask_, n);
        },
      },
      {
        key: `isTrackPending`,
        get: function () {
          return getFlag(this.flags_, t.isTrackPendingMask_);
        },
        set: function (n) {
          this.flags_ = setFlag(this.flags_, t.isTrackPendingMask_, n);
        },
      },
      {
        key: `isRunning`,
        get: function () {
          return getFlag(this.flags_, t.isRunningMask_);
        },
        set: function (n) {
          this.flags_ = setFlag(this.flags_, t.isRunningMask_, n);
        },
      },
      {
        key: `diffValue`,
        get: function () {
          return +!!getFlag(this.flags_, t.diffValueMask_);
        },
        set: function (n) {
          this.flags_ = setFlag(this.flags_, t.diffValueMask_, n === 1);
        },
      },
    ])
  );
})();
((Reaction.isDisposedMask_ = 1),
  (Reaction.isScheduledMask_ = 2),
  (Reaction.isTrackPendingMask_ = 4),
  (Reaction.isRunningMask_ = 8),
  (Reaction.diffValueMask_ = 16));
var MAX_REACTION_ITERATIONS = 100,
  reactionScheduler = function (t) {
    return t();
  };
function runReactions() {
  globalState.inBatch > 0 ||
    globalState.isRunningReactions ||
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = !0;
  for (var t = globalState.pendingReactions, n = 0; t.length > 0;) {
    ++n === MAX_REACTION_ITERATIONS &&
      (console.error(`[mobx] cycle in reaction: ` + t[0]), t.splice(0));
    for (var r = t.splice(0), i = 0, o = r.length; i < o; i++)
      r[i].runReaction_();
  }
  globalState.isRunningReactions = !1;
}
var isReaction = createInstanceofPredicate(`Reaction`, Reaction);
function setReactionScheduler(t) {
  var n = reactionScheduler;
  reactionScheduler = function (r) {
    return t(function () {
      return n(r);
    });
  };
}
function isSpyEnabled() {
  return !1;
}
function spy(t) {
  return (
    console.warn(`[mobx.spy] Is a no-op in production builds`), function () {}
  );
}
var ACTION = `action`,
  ACTION_BOUND = `action.bound`,
  AUTOACTION = `autoAction`,
  AUTOACTION_BOUND = `autoAction.bound`,
  DEFAULT_ACTION_NAME = `<unnamed action>`,
  actionAnnotation = createActionAnnotation(ACTION),
  actionBoundAnnotation = createActionAnnotation(ACTION_BOUND, { bound: !0 }),
  autoActionAnnotation = createActionAnnotation(AUTOACTION, { autoAction: !0 }),
  autoActionBoundAnnotation = createActionAnnotation(AUTOACTION_BOUND, {
    autoAction: !0,
    bound: !0,
  });
function createActionFactory(t) {
  return function (n, r) {
    if (isFunction(n)) return createAction(n.name || DEFAULT_ACTION_NAME, n, t);
    if (isFunction(r)) return createAction(n, r, t);
    if (is20223Decorator(r))
      return (t ? autoActionAnnotation : actionAnnotation).decorate_20223_(
        n,
        r,
      );
    if (isStringish(r))
      return storeAnnotation(n, r, t ? autoActionAnnotation : actionAnnotation);
    if (isStringish(n))
      return createDecoratorAnnotation(
        createActionAnnotation(t ? AUTOACTION : ACTION, {
          name: n,
          autoAction: t,
        }),
      );
  };
}
var action = createActionFactory(!1);
Object.assign(action, actionAnnotation);
var autoAction = createActionFactory(!0);
(Object.assign(autoAction, autoActionAnnotation),
  (action.bound = createDecoratorAnnotation(actionBoundAnnotation)),
  (autoAction.bound = createDecoratorAnnotation(autoActionBoundAnnotation)));
function runInAction(t) {
  return executeAction(t.name || DEFAULT_ACTION_NAME, !1, t, this, void 0);
}
function isAction(t) {
  return isFunction(t) && t.isMobxAction === !0;
}
function autorun(t, n) {
  var r, i, o, s;
  n === void 0 && (n = EMPTY_OBJECT);
  var l = n?.name ?? `Autorun`,
    u = !n.scheduler && !n.delay,
    p;
  if (u)
    p = new Reaction(
      l,
      function () {
        this.track(g);
      },
      n.onError,
      n.requiresObservable,
    );
  else {
    var m = createSchedulerFromOptions(n),
      h = !1;
    p = new Reaction(
      l,
      function () {
        h ||
          ((h = !0),
          m(function () {
            ((h = !1), p.isDisposed || p.track(g));
          }));
      },
      n.onError,
      n.requiresObservable,
    );
  }
  function g() {
    t(p);
  }
  return (
    ((o = n) != null && (o = o.signal) != null && o.aborted) || p.schedule_(),
    p.getDisposer_(n?.signal)
  );
}
var run = function (t) {
  return t();
};
function createSchedulerFromOptions(t) {
  return t.scheduler
    ? t.scheduler
    : t.delay
      ? function (n) {
          return setTimeout(n, t.delay);
        }
      : run;
}
function reaction(t, n, r) {
  var i, o, s;
  r === void 0 && (r = EMPTY_OBJECT);
  var l = r.name ?? `Reaction`,
    u = action(l, r.onError ? wrapErrorHandler(r.onError, n) : n),
    p = !r.scheduler && !r.delay,
    m = createSchedulerFromOptions(r),
    h = !0,
    g = !1,
    _,
    v = r.compareStructural
      ? comparer.structural
      : r.equals || comparer.default,
    y = new Reaction(
      l,
      function () {
        h || p ? x() : g || ((g = !0), m(x));
      },
      r.onError,
      r.requiresObservable,
    );
  function x() {
    if (((g = !1), !y.isDisposed)) {
      var n = !1,
        i = _;
      (y.track(function () {
        var r = allowStateChanges(!1, function () {
          return t(y);
        });
        ((n = h || !v(_, r)), (_ = r));
      }),
        ((h && r.fireImmediately) || (!h && n)) && u(_, i, y),
        (h = !1));
    }
  }
  return (
    ((o = r) != null && (o = o.signal) != null && o.aborted) || y.schedule_(),
    y.getDisposer_(r?.signal)
  );
}
function wrapErrorHandler(t, n) {
  return function () {
    try {
      return n.apply(this, arguments);
    } catch (n) {
      t.call(this, n);
    }
  };
}
var ON_BECOME_OBSERVED = `onBO`,
  ON_BECOME_UNOBSERVED = `onBUO`;
function onBecomeObserved(t, n, r) {
  return interceptHook(ON_BECOME_OBSERVED, t, n, r);
}
function onBecomeUnobserved(t, n, r) {
  return interceptHook(ON_BECOME_UNOBSERVED, t, n, r);
}
function interceptHook(t, n, r, i) {
  var o = typeof i == `function` ? getAtom(n, r) : getAtom(n),
    s = isFunction(i) ? i : r,
    l = t + `L`;
  return (
    o[l] ? o[l].add(s) : (o[l] = new Set([s])),
    function () {
      var t = o[l];
      t && (t.delete(s), t.size === 0 && delete o[l]);
    }
  );
}
var NEVER = `never`,
  ALWAYS = `always`,
  OBSERVED = `observed`;
function configure(t) {
  t.isolateGlobalState === !0 && isolateGlobalState();
  var n = t.useProxies,
    r = t.enforceActions;
  if (
    (n !== void 0 &&
      (globalState.useProxies =
        n === ALWAYS || (n !== NEVER && typeof Proxy < `u`)),
    n === `ifavailable` && (globalState.verifyProxies = !0),
    r !== void 0)
  ) {
    var i = r === ALWAYS ? ALWAYS : r === OBSERVED;
    ((globalState.enforceActions = i),
      (globalState.allowStateChanges = i !== !0 && i !== ALWAYS));
  }
  ([
    `computedRequiresReaction`,
    `reactionRequiresObservable`,
    `observableRequiresReaction`,
    `disableErrorBoundaries`,
    `safeDescriptors`,
  ].forEach(function (n) {
    n in t && (globalState[n] = !!t[n]);
  }),
    (globalState.allowStateReads = !globalState.observableRequiresReaction),
    t.reactionScheduler && setReactionScheduler(t.reactionScheduler));
}
function extendObservable(t, n, r, i) {
  var o = getOwnPropertyDescriptors(n);
  return (
    initObservable(function () {
      var n = asObservableObject(t, i)[$mobx];
      ownKeys(o).forEach(function (t) {
        n.extend_(t, o[t], r && t in r ? r[t] : !0);
      });
    }),
    t
  );
}
function getDependencyTree(t, n) {
  return nodeToDependencyTree(getAtom(t, n));
}
function nodeToDependencyTree(t) {
  var n = { name: t.name_ };
  return (
    t.observing_ &&
      t.observing_.length > 0 &&
      (n.dependencies = unique(t.observing_).map(nodeToDependencyTree)),
    n
  );
}
function unique(t) {
  return Array.from(new Set(t));
}
var generatorId = 0;
function FlowCancellationError() {
  this.message = `FLOW_CANCELLED`;
}
FlowCancellationError.prototype = Object.create(Error.prototype);
var flowAnnotation = createFlowAnnotation(`flow`),
  flowBoundAnnotation = createFlowAnnotation(`flow.bound`, { bound: !0 }),
  flow = Object.assign(function (t, n) {
    if (is20223Decorator(n)) return flowAnnotation.decorate_20223_(t, n);
    if (isStringish(n)) return storeAnnotation(t, n, flowAnnotation);
    var r = t,
      i = r.name || `<unnamed flow>`,
      o = function () {
        var t = this,
          n = arguments,
          o = ++generatorId,
          s = action(i + ` - runid: ` + o + ` - init`, r).apply(t, n),
          l,
          u = void 0,
          p = new Promise(function (t, n) {
            var r = 0;
            l = n;
            function p(t) {
              u = void 0;
              var l;
              try {
                l = action(
                  i + ` - runid: ` + o + ` - yield ` + r++,
                  s.next,
                ).call(s, t);
              } catch (t) {
                return n(t);
              }
              h(l);
            }
            function m(t) {
              u = void 0;
              var l;
              try {
                l = action(
                  i + ` - runid: ` + o + ` - yield ` + r++,
                  s.throw,
                ).call(s, t);
              } catch (t) {
                return n(t);
              }
              h(l);
            }
            function h(r) {
              if (isFunction(r?.then)) r.then(h, n);
              else
                return r.done
                  ? t(r.value)
                  : ((u = Promise.resolve(r.value)), u.then(p, m));
            }
            p(void 0);
          });
        return (
          (p.cancel = action(i + ` - runid: ` + o + ` - cancel`, function () {
            try {
              u && cancelPromise(u);
              var t = s.return(void 0),
                n = Promise.resolve(t.value);
              (n.then(noop, noop),
                cancelPromise(n),
                l(new FlowCancellationError()));
            } catch (t) {
              l(t);
            }
          })),
          p
        );
      };
    return ((o.isMobXFlow = !0), o);
  }, flowAnnotation);
flow.bound = createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(t) {
  isFunction(t.cancel) && t.cancel();
}
function isFlow(t) {
  return t?.isMobXFlow === !0;
}
function _isComputed(t, n) {
  return n === void 0
    ? isComputedValue(t)
    : isObservableObject(t) === !1 || !t[$mobx].values_.has(n)
      ? !1
      : isComputedValue(getAtom(t, n));
}
function isComputed(t) {
  return _isComputed(t);
}
function isComputedProp(t, n) {
  return _isComputed(t, n);
}
function _isObservable(t, n) {
  return t
    ? n === void 0
      ? isObservableObject(t) ||
        !!t[$mobx] ||
        isAtom(t) ||
        isReaction(t) ||
        isComputedValue(t)
      : isObservableObject(t)
        ? t[$mobx].values_.has(n)
        : !1
    : !1;
}
function isObservable(t) {
  return _isObservable(t);
}
function keys(t) {
  if (isObservableObject(t)) return t[$mobx].keys_();
  if (isObservableMap(t) || isObservableSet(t)) return Array.from(t.keys());
  if (isObservableArray(t))
    return t.map(function (t, n) {
      return n;
    });
  die(5);
}
function apiOwnKeys(t) {
  if (isObservableObject(t)) return t[$mobx].ownKeys_();
  die(38);
}
function observe(t, n, r, i) {
  return isFunction(r)
    ? observeObservableProperty(t, n, r, i)
    : observeObservable(t, n, r);
}
function observeObservable(t, n, r) {
  return getAdministration(t).observe_(n, r);
}
function observeObservableProperty(t, n, r, i) {
  return getAdministration(t, n).observe_(r, i);
}
function cache(t, n, r) {
  return (t.set(n, r), r);
}
function toJSHelper(t, n) {
  if (typeof t != `object` || !t || t instanceof Date || !isObservable(t))
    return t;
  if (isObservableValue(t) || isComputedValue(t)) return toJSHelper(t.get(), n);
  if (n.has(t)) return n.get(t);
  if (isObservableArray(t)) {
    var r = cache(n, t, Array(t.length));
    return (
      t.forEach(function (t, i) {
        r[i] = toJSHelper(t, n);
      }),
      r
    );
  }
  if (isObservableSet(t)) {
    var i = cache(n, t, new Set());
    return (
      t.forEach(function (t) {
        i.add(toJSHelper(t, n));
      }),
      i
    );
  }
  if (isObservableMap(t)) {
    var o = cache(n, t, new Map());
    return (
      t.forEach(function (t, r) {
        o.set(r, toJSHelper(t, n));
      }),
      o
    );
  }
  var s = cache(n, t, {});
  return (
    apiOwnKeys(t).forEach(function (r) {
      objectPrototype.propertyIsEnumerable.call(t, r) &&
        (s[r] = toJSHelper(t[r], n));
    }),
    s
  );
}
function toJS(t, n) {
  return toJSHelper(t, new Map());
}
function transaction(t, n) {
  (n === void 0 && (n = void 0), startBatch());
  try {
    return t.apply(n);
  } finally {
    endBatch();
  }
}
function when(t, n, r) {
  return arguments.length === 1 || (n && typeof n == `object`)
    ? whenPromise(t, n)
    : _when(t, n, r || {});
}
function _when(t, n, r) {
  var i;
  if (typeof r.timeout == `number`) {
    var o = Error(`WHEN_TIMEOUT`);
    i = setTimeout(function () {
      if (!l[$mobx].isDisposed) {
        if ((l(), r.onError)) r.onError(o);
        else throw o;
      }
    }, r.timeout);
  }
  r.name = `When`;
  var s = createAction(`When-effect`, n),
    l = autorun(function (n) {
      allowStateChanges(!1, t) && (n.dispose(), i && clearTimeout(i), s());
    }, r);
  return l;
}
function whenPromise(t, n) {
  var r;
  if (n != null && (r = n.signal) != null && r.aborted)
    return Object.assign(Promise.reject(Error(`WHEN_ABORTED`)), {
      cancel: function () {
        return null;
      },
    });
  var i,
    o,
    s = new Promise(function (r, s) {
      var l,
        u = _when(t, r, _extends({}, n, { onError: s }));
      ((i = function () {
        (u(), s(Error(`WHEN_CANCELLED`)));
      }),
        (o = function () {
          (u(), s(Error(`WHEN_ABORTED`)));
        }),
        n == null ||
          (l = n.signal) == null ||
          l.addEventListener == null ||
          l.addEventListener(`abort`, o));
    }).finally(function () {
      var t;
      return n == null ||
        (t = n.signal) == null ||
        t.removeEventListener == null
        ? void 0
        : t.removeEventListener(`abort`, o);
    });
  return ((s.cancel = i), s);
}
function getAdm(t) {
  return t[$mobx];
}
var objectProxyTraps = {
  has: function (t, n) {
    return getAdm(t).has_(n);
  },
  get: function (t, n) {
    return getAdm(t).get_(n);
  },
  set: function (t, n, r) {
    var i;
    return isStringish(n) ? (getAdm(t).set_(n, r, !0) ?? !0) : !1;
  },
  deleteProperty: function (t, n) {
    var r;
    return isStringish(n) ? (getAdm(t).delete_(n, !0) ?? !0) : !1;
  },
  defineProperty: function (t, n, r) {
    var i;
    return getAdm(t).defineProperty_(n, r) ?? !0;
  },
  ownKeys: function (t) {
    return getAdm(t).ownKeys_();
  },
  preventExtensions: function (t) {
    die(13);
  },
};
function asDynamicObservableObject(t, n) {
  var r, i;
  return (
    assertProxies(),
    (t = asObservableObject(t, n)),
    (r = t[$mobx]).proxy_ ?? (r.proxy_ = new Proxy(t, objectProxyTraps))
  );
}
function hasInterceptors(t) {
  return t.interceptors_ !== void 0 && t.interceptors_.length > 0;
}
function registerInterceptor(t, n) {
  var r = (t.interceptors_ ||= []);
  return (
    r.push(n),
    once(function () {
      var t = r.indexOf(n);
      t !== -1 && r.splice(t, 1);
    })
  );
}
function interceptChange(t, n) {
  var r = untrackedStart();
  try {
    for (
      var i = [].concat(t.interceptors_ || []), o = 0, s = i.length;
      o < s && ((n = i[o](n)), n && !n.type && die(14), n);
      o++
    );
    return n;
  } finally {
    untrackedEnd(r);
  }
}
function hasListeners(t) {
  return t.changeListeners_ !== void 0 && t.changeListeners_.length > 0;
}
function registerListener(t, n) {
  var r = (t.changeListeners_ ||= []);
  return (
    r.push(n),
    once(function () {
      var t = r.indexOf(n);
      t !== -1 && r.splice(t, 1);
    })
  );
}
function notifyListeners(t, n) {
  var r = untrackedStart(),
    i = t.changeListeners_;
  if (i) {
    i = i.slice();
    for (var o = 0, s = i.length; o < s; o++) i[o](n);
    untrackedEnd(r);
  }
}
function makeObservable(t, n, r) {
  return (
    initObservable(function () {
      var i = asObservableObject(t, r)[$mobx];
      ((n ??= collectStoredAnnotations(t)),
        ownKeys(n).forEach(function (t) {
          return i.make_(t, n[t]);
        }));
    }),
    t
  );
}
var keysSymbol = Symbol(`mobx-keys`);
function makeAutoObservable(t, n, r) {
  return isPlainObject(t)
    ? extendObservable(t, t, n, r)
    : (initObservable(function () {
        var i = asObservableObject(t, r)[$mobx];
        if (!t[keysSymbol]) {
          var o = Object.getPrototypeOf(t),
            s = new Set([].concat(ownKeys(t), ownKeys(o)));
          (s.delete(`constructor`),
            s.delete($mobx),
            addHiddenProp(o, keysSymbol, s));
        }
        t[keysSymbol].forEach(function (t) {
          return i.make_(t, n && t in n ? n[t] : !0);
        });
      }),
      t);
}
var SPLICE = `splice`,
  UPDATE = `update`,
  MAX_SPLICE_SIZE = 1e4,
  arrayTraps = {
    get: function (t, n) {
      var r = t[$mobx];
      return n === $mobx
        ? r
        : n === `length`
          ? r.getArrayLength_()
          : typeof n == `string` && !isNaN(n)
            ? r.get_(parseInt(n))
            : hasProp(arrayExtensions, n)
              ? arrayExtensions[n]
              : t[n];
    },
    set: function (t, n, r) {
      var i = t[$mobx];
      return (
        n === `length` && i.setArrayLength_(r),
        typeof n == `symbol` || isNaN(n) ? (t[n] = r) : i.set_(parseInt(n), r),
        !0
      );
    },
    preventExtensions: function () {
      die(15);
    },
  },
  ObservableArrayAdministration = (function () {
    function t(t, n, r, i) {
      (t === void 0 && (t = `ObservableArray`),
        (this.owned_ = void 0),
        (this.legacyMode_ = void 0),
        (this.atom_ = void 0),
        (this.values_ = []),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.enhancer_ = void 0),
        (this.dehancer = void 0),
        (this.proxy_ = void 0),
        (this.lastKnownLength_ = 0),
        (this.owned_ = r),
        (this.legacyMode_ = i),
        (this.atom_ = new Atom(t)),
        (this.enhancer_ = function (t, r) {
          return n(t, r, `ObservableArray[..]`);
        }));
    }
    var n = t.prototype;
    return (
      (n.dehanceValue_ = function (t) {
        return this.dehancer === void 0 ? t : this.dehancer(t);
      }),
      (n.dehanceValues_ = function (t) {
        return this.dehancer !== void 0 && t.length > 0
          ? t.map(this.dehancer)
          : t;
      }),
      (n.intercept_ = function (t) {
        return registerInterceptor(this, t);
      }),
      (n.observe_ = function (t, n) {
        return (
          n === void 0 && (n = !1),
          n &&
            t({
              observableKind: `array`,
              object: this.proxy_,
              debugObjectName: this.atom_.name_,
              type: `splice`,
              index: 0,
              added: this.values_.slice(),
              addedCount: this.values_.length,
              removed: [],
              removedCount: 0,
            }),
          registerListener(this, t)
        );
      }),
      (n.getArrayLength_ = function () {
        return (this.atom_.reportObserved(), this.values_.length);
      }),
      (n.setArrayLength_ = function (t) {
        (typeof t != `number` || isNaN(t) || t < 0) &&
          die(`Out of range: ` + t);
        var n = this.values_.length;
        if (t !== n) {
          if (t > n) {
            for (var r = Array(t - n), i = 0; i < t - n; i++) r[i] = void 0;
            this.spliceWithArray_(n, 0, r);
          } else this.spliceWithArray_(t, n - t);
        }
      }),
      (n.updateArrayLength_ = function (t, n) {
        (t !== this.lastKnownLength_ && die(16),
          (this.lastKnownLength_ += n),
          this.legacyMode_ && n > 0 && reserveArrayBuffer(t + n + 1));
      }),
      (n.spliceWithArray_ = function (t, n, r) {
        var i = this;
        this.atom_;
        var o = this.values_.length;
        if (
          (t === void 0
            ? (t = 0)
            : t > o
              ? (t = o)
              : t < 0 && (t = Math.max(0, o + t)),
          (n =
            arguments.length === 1
              ? o - t
              : n == null
                ? 0
                : Math.max(0, Math.min(n, o - t))),
          r === void 0 && (r = EMPTY_ARRAY),
          hasInterceptors(this))
        ) {
          var s = interceptChange(this, {
            object: this.proxy_,
            type: SPLICE,
            index: t,
            removedCount: n,
            added: r,
          });
          if (!s) return EMPTY_ARRAY;
          ((n = s.removedCount), (r = s.added));
        }
        if (
          ((r =
            r.length === 0
              ? r
              : r.map(function (t) {
                  return i.enhancer_(t, void 0);
                })),
          this.legacyMode_)
        ) {
          var l = r.length - n;
          this.updateArrayLength_(o, l);
        }
        var u = this.spliceItemsIntoValues_(t, n, r);
        return (
          (n !== 0 || r.length !== 0) && this.notifyArraySplice_(t, r, u),
          this.dehanceValues_(u)
        );
      }),
      (n.spliceItemsIntoValues_ = function (t, n, r) {
        if (r.length < MAX_SPLICE_SIZE) {
          var i;
          return (i = this.values_).splice.apply(i, [t, n].concat(r));
        }
        var o = this.values_.slice(t, t + n),
          s = this.values_.slice(t + n);
        this.values_.length += r.length - n;
        for (var l = 0; l < r.length; l++) this.values_[t + l] = r[l];
        for (var u = 0; u < s.length; u++)
          this.values_[t + r.length + u] = s[u];
        return o;
      }),
      (n.notifyArrayChildUpdate_ = function (t, n, r) {
        var i = !this.owned_ && isSpyEnabled(),
          o = hasListeners(this),
          s =
            o || i
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  type: UPDATE,
                  debugObjectName: this.atom_.name_,
                  index: t,
                  newValue: n,
                  oldValue: r,
                }
              : null;
        (this.atom_.reportChanged(), o && notifyListeners(this, s));
      }),
      (n.notifyArraySplice_ = function (t, n, r) {
        var i = !this.owned_ && isSpyEnabled(),
          o = hasListeners(this),
          s =
            o || i
              ? {
                  observableKind: `array`,
                  object: this.proxy_,
                  debugObjectName: this.atom_.name_,
                  type: SPLICE,
                  index: t,
                  removed: r,
                  added: n,
                  removedCount: r.length,
                  addedCount: n.length,
                }
              : null;
        (this.atom_.reportChanged(), o && notifyListeners(this, s));
      }),
      (n.get_ = function (t) {
        if (this.legacyMode_ && t >= this.values_.length)
          console.warn(`[mobx] Out of bounds read: ` + t);
        else
          return (
            this.atom_.reportObserved(), this.dehanceValue_(this.values_[t])
          );
      }),
      (n.set_ = function (t, n) {
        var r = this.values_;
        if (
          (this.legacyMode_ && t > r.length && die(17, t, r.length),
          t < r.length)
        ) {
          this.atom_;
          var i = r[t];
          if (hasInterceptors(this)) {
            var o = interceptChange(this, {
              type: UPDATE,
              object: this.proxy_,
              index: t,
              newValue: n,
            });
            if (!o) return;
            n = o.newValue;
          }
          ((n = this.enhancer_(n, i)),
            n !== i && ((r[t] = n), this.notifyArrayChildUpdate_(t, n, i)));
        } else {
          for (var s = Array(t + 1 - r.length), l = 0; l < s.length - 1; l++)
            s[l] = void 0;
          ((s[s.length - 1] = n), this.spliceWithArray_(r.length, 0, s));
        }
      }),
      t
    );
  })();
function createObservableArray(t, n, r, i) {
  return (
    r === void 0 && (r = `ObservableArray`),
    i === void 0 && (i = !1),
    assertProxies(),
    initObservable(function () {
      var o = new ObservableArrayAdministration(r, n, i, !1);
      addHiddenFinalProp(o.values_, $mobx, o);
      var s = new Proxy(o.values_, arrayTraps);
      return ((o.proxy_ = s), t && t.length && o.spliceWithArray_(0, 0, t), s);
    })
  );
}
var arrayExtensions = {
  clear: function () {
    return this.splice(0);
  },
  replace: function (t) {
    var n = this[$mobx];
    return n.spliceWithArray_(0, n.values_.length, t);
  },
  toJSON: function () {
    return this.slice();
  },
  splice: function (t, n) {
    var r = [...arguments].slice(2),
      i = this[$mobx];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return i.spliceWithArray_(t);
      case 2:
        return i.spliceWithArray_(t, n);
    }
    return i.spliceWithArray_(t, n, r);
  },
  spliceWithArray: function (t, n, r) {
    return this[$mobx].spliceWithArray_(t, n, r);
  },
  push: function () {
    var t = this[$mobx],
      n = [...arguments];
    return (t.spliceWithArray_(t.values_.length, 0, n), t.values_.length);
  },
  pop: function () {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function () {
    return this.splice(0, 1)[0];
  },
  unshift: function () {
    var t = this[$mobx],
      n = [...arguments];
    return (t.spliceWithArray_(0, 0, n), t.values_.length);
  },
  reverse: function () {
    return (
      globalState.trackingDerivation && die(37, `reverse`),
      this.replace(this.slice().reverse()),
      this
    );
  },
  sort: function () {
    globalState.trackingDerivation && die(37, `sort`);
    var t = this.slice();
    return (t.sort.apply(t, arguments), this.replace(t), this);
  },
  remove: function (t) {
    var n = this[$mobx],
      r = n.dehanceValues_(n.values_).indexOf(t);
    return r > -1 && (this.splice(r, 1), !0);
  },
};
(addArrayExtension(`at`, simpleFunc),
  addArrayExtension(`concat`, simpleFunc),
  addArrayExtension(`flat`, simpleFunc),
  addArrayExtension(`includes`, simpleFunc),
  addArrayExtension(`indexOf`, simpleFunc),
  addArrayExtension(`join`, simpleFunc),
  addArrayExtension(`lastIndexOf`, simpleFunc),
  addArrayExtension(`slice`, simpleFunc),
  addArrayExtension(`toString`, simpleFunc),
  addArrayExtension(`toLocaleString`, simpleFunc),
  addArrayExtension(`toSorted`, simpleFunc),
  addArrayExtension(`toSpliced`, simpleFunc),
  addArrayExtension(`with`, simpleFunc),
  addArrayExtension(`every`, mapLikeFunc),
  addArrayExtension(`filter`, mapLikeFunc),
  addArrayExtension(`find`, mapLikeFunc),
  addArrayExtension(`findIndex`, mapLikeFunc),
  addArrayExtension(`findLast`, mapLikeFunc),
  addArrayExtension(`findLastIndex`, mapLikeFunc),
  addArrayExtension(`flatMap`, mapLikeFunc),
  addArrayExtension(`forEach`, mapLikeFunc),
  addArrayExtension(`map`, mapLikeFunc),
  addArrayExtension(`some`, mapLikeFunc),
  addArrayExtension(`toReversed`, mapLikeFunc),
  addArrayExtension(`reduce`, reduceLikeFunc),
  addArrayExtension(`reduceRight`, reduceLikeFunc));
function addArrayExtension(t, n) {
  typeof Array.prototype[t] == `function` && (arrayExtensions[t] = n(t));
}
function simpleFunc(t) {
  return function () {
    var n = this[$mobx];
    n.atom_.reportObserved();
    var r = n.dehanceValues_(n.values_);
    return r[t].apply(r, arguments);
  };
}
function mapLikeFunc(t) {
  return function (n, r) {
    var i = this,
      o = this[$mobx];
    return (
      o.atom_.reportObserved(),
      o.dehanceValues_(o.values_)[t](function (t, o) {
        return n.call(r, t, o, i);
      })
    );
  };
}
function reduceLikeFunc(t) {
  return function () {
    var n = this,
      r = this[$mobx];
    r.atom_.reportObserved();
    var i = r.dehanceValues_(r.values_),
      o = arguments[0];
    return (
      (arguments[0] = function (t, r, i) {
        return o(t, r, i, n);
      }),
      i[t].apply(i, arguments)
    );
  };
}
var isObservableArrayAdministration = createInstanceofPredicate(
  `ObservableArrayAdministration`,
  ObservableArrayAdministration,
);
function isObservableArray(t) {
  return isObject(t) && isObservableArrayAdministration(t[$mobx]);
}
var ObservableMapMarker = {},
  ADD = `add`,
  DELETE = `delete`,
  ObservableMap = (function () {
    function t(t, n, r) {
      var i = this;
      (n === void 0 && (n = deepEnhancer),
        r === void 0 && (r = `ObservableMap`),
        (this.enhancer_ = void 0),
        (this.name_ = void 0),
        (this[$mobx] = ObservableMapMarker),
        (this.data_ = void 0),
        (this.hasMap_ = void 0),
        (this.keysAtom_ = void 0),
        (this.interceptors_ = void 0),
        (this.changeListeners_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = n),
        (this.name_ = r),
        isFunction(Map) || die(18),
        initObservable(function () {
          ((i.keysAtom_ = createAtom(`ObservableMap.keys()`)),
            (i.data_ = new Map()),
            (i.hasMap_ = new Map()),
            t && i.merge(t));
        }));
    }
    var n = t.prototype;
    return (
      (n.has_ = function (t) {
        return this.data_.has(t);
      }),
      (n.has = function (t) {
        var n = this;
        if (!globalState.trackingDerivation) return this.has_(t);
        var r = this.hasMap_.get(t);
        if (!r) {
          var i = (r = new ObservableValue(
            this.has_(t),
            referenceEnhancer,
            `ObservableMap.key?`,
            !1,
          ));
          (this.hasMap_.set(t, i),
            onBecomeUnobserved(i, function () {
              return n.hasMap_.delete(t);
            }));
        }
        return r.get();
      }),
      (n.set = function (t, n) {
        var r = this.has_(t);
        if (hasInterceptors(this)) {
          var i = interceptChange(this, {
            type: r ? UPDATE : ADD,
            object: this,
            newValue: n,
            name: t,
          });
          if (!i) return this;
          n = i.newValue;
        }
        return (r ? this.updateValue_(t, n) : this.addValue_(t, n), this);
      }),
      (n.delete = function (t) {
        var n = this;
        if (
          (this.keysAtom_,
          hasInterceptors(this) &&
            !interceptChange(this, { type: DELETE, object: this, name: t }))
        )
          return !1;
        if (this.has_(t)) {
          var r = isSpyEnabled(),
            i = hasListeners(this),
            o =
              i || r
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: DELETE,
                    object: this,
                    oldValue: this.data_.get(t).value_,
                    name: t,
                  }
                : null;
          return (
            transaction(function () {
              var r;
              (n.keysAtom_.reportChanged(),
                (r = n.hasMap_.get(t)) == null || r.setNewValue_(!1),
                n.data_.get(t).setNewValue_(void 0),
                n.data_.delete(t));
            }),
            i && notifyListeners(this, o),
            !0
          );
        }
        return !1;
      }),
      (n.updateValue_ = function (t, n) {
        var r = this.data_.get(t);
        if (((n = r.prepareNewValue_(n)), n !== globalState.UNCHANGED)) {
          var i = isSpyEnabled(),
            o = hasListeners(this),
            s =
              o || i
                ? {
                    observableKind: `map`,
                    debugObjectName: this.name_,
                    type: UPDATE,
                    object: this,
                    oldValue: r.value_,
                    name: t,
                    newValue: n,
                  }
                : null;
          (r.setNewValue_(n), o && notifyListeners(this, s));
        }
      }),
      (n.addValue_ = function (t, n) {
        var r = this;
        (this.keysAtom_,
          transaction(function () {
            var i,
              o = new ObservableValue(n, r.enhancer_, `ObservableMap.key`, !1);
            (r.data_.set(t, o),
              (n = o.value_),
              (i = r.hasMap_.get(t)) == null || i.setNewValue_(!0),
              r.keysAtom_.reportChanged());
          }));
        var i = isSpyEnabled(),
          o = hasListeners(this),
          s =
            o || i
              ? {
                  observableKind: `map`,
                  debugObjectName: this.name_,
                  type: ADD,
                  object: this,
                  name: t,
                  newValue: n,
                }
              : null;
        o && notifyListeners(this, s);
      }),
      (n.get = function (t) {
        return this.has(t)
          ? this.dehanceValue_(this.data_.get(t).get())
          : this.dehanceValue_(void 0);
      }),
      (n.dehanceValue_ = function (t) {
        return this.dehancer === void 0 ? t : this.dehancer(t);
      }),
      (n.keys = function () {
        return (this.keysAtom_.reportObserved(), this.data_.keys());
      }),
      (n.values = function () {
        var t = this,
          n = this.keys();
        return makeIterableForMap({
          next: function () {
            var r = n.next(),
              i = r.done,
              o = r.value;
            return { done: i, value: i ? void 0 : t.get(o) };
          },
        });
      }),
      (n.entries = function () {
        var t = this,
          n = this.keys();
        return makeIterableForMap({
          next: function () {
            var r = n.next(),
              i = r.done,
              o = r.value;
            return { done: i, value: i ? void 0 : [o, t.get(o)] };
          },
        });
      }),
      (n[Symbol.iterator] = function () {
        return this.entries();
      }),
      (n.forEach = function (t, n) {
        for (
          var r = _createForOfIteratorHelperLoose(this), i;
          !(i = r()).done;
        ) {
          var o = i.value,
            s = o[0],
            l = o[1];
          t.call(n, l, s, this);
        }
      }),
      (n.merge = function (t) {
        var n = this;
        return (
          isObservableMap(t) && (t = new Map(t)),
          transaction(function () {
            isPlainObject(t)
              ? getPlainObjectKeys(t).forEach(function (r) {
                  return n.set(r, t[r]);
                })
              : Array.isArray(t)
                ? t.forEach(function (t) {
                    var r = t[0],
                      i = t[1];
                    return n.set(r, i);
                  })
                : isES6Map(t)
                  ? (isPlainES6Map(t) || die(19, t),
                    t.forEach(function (t, r) {
                      return n.set(r, t);
                    }))
                  : t != null && die(20, t);
          }),
          this
        );
      }),
      (n.clear = function () {
        var t = this;
        transaction(function () {
          untracked(function () {
            for (
              var n = _createForOfIteratorHelperLoose(t.keys()), r;
              !(r = n()).done;
            ) {
              var i = r.value;
              t.delete(i);
            }
          });
        });
      }),
      (n.replace = function (t) {
        var n = this;
        return (
          transaction(function () {
            for (
              var r = convertToMap(t),
                i = new Map(),
                o = !1,
                s = _createForOfIteratorHelperLoose(n.data_.keys()),
                l;
              !(l = s()).done;
            ) {
              var u = l.value;
              if (!r.has(u)) {
                if (n.delete(u)) o = !0;
                else {
                  var p = n.data_.get(u);
                  i.set(u, p);
                }
              }
            }
            for (
              var m = _createForOfIteratorHelperLoose(r.entries()), h;
              !(h = m()).done;
            ) {
              var g = h.value,
                _ = g[0],
                v = g[1],
                y = n.data_.has(_);
              if ((n.set(_, v), n.data_.has(_))) {
                var x = n.data_.get(_);
                (i.set(_, x), y || (o = !0));
              }
            }
            if (!o) {
              if (n.data_.size !== i.size) n.keysAtom_.reportChanged();
              else
                for (
                  var S = n.data_.keys(),
                    C = i.keys(),
                    w = S.next(),
                    T = C.next();
                  !w.done;
                ) {
                  if (w.value !== T.value) {
                    n.keysAtom_.reportChanged();
                    break;
                  }
                  ((w = S.next()), (T = C.next()));
                }
            }
            n.data_ = i;
          }),
          this
        );
      }),
      (n.toString = function () {
        return `[object ObservableMap]`;
      }),
      (n.toJSON = function () {
        return Array.from(this);
      }),
      (n.observe_ = function (t, n) {
        return registerListener(this, t);
      }),
      (n.intercept_ = function (t) {
        return registerInterceptor(this, t);
      }),
      _createClass(t, [
        {
          key: `size`,
          get: function () {
            return (this.keysAtom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return `Map`;
          },
        },
      ])
    );
  })(),
  isObservableMap = createInstanceofPredicate(`ObservableMap`, ObservableMap);
function makeIterableForMap(t) {
  return ((t[Symbol.toStringTag] = `MapIterator`), makeIterable(t));
}
function convertToMap(t) {
  if (isES6Map(t) || isObservableMap(t)) return t;
  if (Array.isArray(t)) return new Map(t);
  if (isPlainObject(t)) {
    var n = new Map();
    for (var r in t) n.set(r, t[r]);
    return n;
  }
  return die(21, t);
}
var ObservableSetMarker = {},
  ObservableSet = (function () {
    function t(t, n, r) {
      var i = this;
      (n === void 0 && (n = deepEnhancer),
        r === void 0 && (r = `ObservableSet`),
        (this.name_ = void 0),
        (this[$mobx] = ObservableSetMarker),
        (this.data_ = new Set()),
        (this.atom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.dehancer = void 0),
        (this.enhancer_ = void 0),
        (this.name_ = r),
        isFunction(Set) || die(22),
        (this.enhancer_ = function (t, i) {
          return n(t, i, r);
        }),
        initObservable(function () {
          ((i.atom_ = createAtom(i.name_)), t && i.replace(t));
        }));
    }
    var n = t.prototype;
    return (
      (n.dehanceValue_ = function (t) {
        return this.dehancer === void 0 ? t : this.dehancer(t);
      }),
      (n.clear = function () {
        var t = this;
        transaction(function () {
          untracked(function () {
            for (
              var n = _createForOfIteratorHelperLoose(t.data_.values()), r;
              !(r = n()).done;
            ) {
              var i = r.value;
              t.delete(i);
            }
          });
        });
      }),
      (n.forEach = function (t, n) {
        for (
          var r = _createForOfIteratorHelperLoose(this), i;
          !(i = r()).done;
        ) {
          var o = i.value;
          t.call(n, o, o, this);
        }
      }),
      (n.add = function (t) {
        var n = this;
        if ((this.atom_, hasInterceptors(this))) {
          var r = interceptChange(this, {
            type: ADD,
            object: this,
            newValue: t,
          });
          if (!r) return this;
          t = r.newValue;
        }
        if (!this.has(t)) {
          transaction(function () {
            (n.data_.add(n.enhancer_(t, void 0)), n.atom_.reportChanged());
          });
          var i = !1,
            o = hasListeners(this),
            s = o
              ? {
                  observableKind: `set`,
                  debugObjectName: this.name_,
                  type: ADD,
                  object: this,
                  newValue: t,
                }
              : null;
          o && notifyListeners(this, s);
        }
        return this;
      }),
      (n.delete = function (t) {
        var n = this;
        if (
          hasInterceptors(this) &&
          !interceptChange(this, { type: DELETE, object: this, oldValue: t })
        )
          return !1;
        if (this.has(t)) {
          var r = !1,
            i = hasListeners(this),
            o = i
              ? {
                  observableKind: `set`,
                  debugObjectName: this.name_,
                  type: DELETE,
                  object: this,
                  oldValue: t,
                }
              : null;
          return (
            transaction(function () {
              (n.atom_.reportChanged(), n.data_.delete(t));
            }),
            i && notifyListeners(this, o),
            !0
          );
        }
        return !1;
      }),
      (n.has = function (t) {
        return (
          this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(t))
        );
      }),
      (n.entries = function () {
        var t = this.values();
        return makeIterableForSet({
          next: function () {
            var n = t.next(),
              r = n.value,
              i = n.done;
            return i ? { value: void 0, done: i } : { value: [r, r], done: i };
          },
        });
      }),
      (n.keys = function () {
        return this.values();
      }),
      (n.values = function () {
        this.atom_.reportObserved();
        var t = this,
          n = this.data_.values();
        return makeIterableForSet({
          next: function () {
            var r = n.next(),
              i = r.value,
              o = r.done;
            return o
              ? { value: void 0, done: o }
              : { value: t.dehanceValue_(i), done: o };
          },
        });
      }),
      (n.intersection = function (t) {
        return isES6Set(t) && !isObservableSet(t)
          ? t.intersection(this)
          : new Set(this).intersection(t);
      }),
      (n.union = function (t) {
        return isES6Set(t) && !isObservableSet(t)
          ? t.union(this)
          : new Set(this).union(t);
      }),
      (n.difference = function (t) {
        return new Set(this).difference(t);
      }),
      (n.symmetricDifference = function (t) {
        return isES6Set(t) && !isObservableSet(t)
          ? t.symmetricDifference(this)
          : new Set(this).symmetricDifference(t);
      }),
      (n.isSubsetOf = function (t) {
        return new Set(this).isSubsetOf(t);
      }),
      (n.isSupersetOf = function (t) {
        return new Set(this).isSupersetOf(t);
      }),
      (n.isDisjointFrom = function (t) {
        return isES6Set(t) && !isObservableSet(t)
          ? t.isDisjointFrom(this)
          : new Set(this).isDisjointFrom(t);
      }),
      (n.replace = function (t) {
        var n = this;
        return (
          isObservableSet(t) && (t = new Set(t)),
          transaction(function () {
            Array.isArray(t) || isES6Set(t)
              ? (n.clear(),
                t.forEach(function (t) {
                  return n.add(t);
                }))
              : t != null && die(`Cannot initialize set from ` + t);
          }),
          this
        );
      }),
      (n.observe_ = function (t, n) {
        return registerListener(this, t);
      }),
      (n.intercept_ = function (t) {
        return registerInterceptor(this, t);
      }),
      (n.toJSON = function () {
        return Array.from(this);
      }),
      (n.toString = function () {
        return `[object ObservableSet]`;
      }),
      (n[Symbol.iterator] = function () {
        return this.values();
      }),
      _createClass(t, [
        {
          key: `size`,
          get: function () {
            return (this.atom_.reportObserved(), this.data_.size);
          },
        },
        {
          key: Symbol.toStringTag,
          get: function () {
            return `Set`;
          },
        },
      ])
    );
  })(),
  isObservableSet = createInstanceofPredicate(`ObservableSet`, ObservableSet);
function makeIterableForSet(t) {
  return ((t[Symbol.toStringTag] = `SetIterator`), makeIterable(t));
}
var descriptorCache = Object.create(null),
  REMOVE = `remove`,
  ObservableObjectAdministration = (function () {
    function t(t, n, r, i) {
      (n === void 0 && (n = new Map()),
        i === void 0 && (i = autoAnnotation),
        (this.target_ = void 0),
        (this.values_ = void 0),
        (this.name_ = void 0),
        (this.defaultAnnotation_ = void 0),
        (this.keysAtom_ = void 0),
        (this.changeListeners_ = void 0),
        (this.interceptors_ = void 0),
        (this.proxy_ = void 0),
        (this.isPlainObject_ = void 0),
        (this.appliedAnnotations_ = void 0),
        (this.pendingKeys_ = void 0),
        (this.target_ = t),
        (this.values_ = n),
        (this.name_ = r),
        (this.defaultAnnotation_ = i),
        (this.keysAtom_ = new Atom(`ObservableObject.keys`)),
        (this.isPlainObject_ = isPlainObject(this.target_)));
    }
    var n = t.prototype;
    return (
      (n.getObservablePropValue_ = function (t) {
        return this.values_.get(t).get();
      }),
      (n.setObservablePropValue_ = function (t, n) {
        var r = this.values_.get(t);
        if (r instanceof ComputedValue) return (r.set(n), !0);
        if (hasInterceptors(this)) {
          var i = interceptChange(this, {
            type: UPDATE,
            object: this.proxy_ || this.target_,
            name: t,
            newValue: n,
          });
          if (!i) return null;
          n = i.newValue;
        }
        if (((n = r.prepareNewValue_(n)), n !== globalState.UNCHANGED)) {
          var o = hasListeners(this),
            s = o
              ? {
                  type: UPDATE,
                  observableKind: `object`,
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  oldValue: r.value_,
                  name: t,
                  newValue: n,
                }
              : null;
          (r.setNewValue_(n), o && notifyListeners(this, s));
        }
        return !0;
      }),
      (n.get_ = function (t) {
        return (
          globalState.trackingDerivation &&
            !hasProp(this.target_, t) &&
            this.has_(t),
          this.target_[t]
        );
      }),
      (n.set_ = function (t, n, r) {
        return (
          r === void 0 && (r = !1),
          hasProp(this.target_, t)
            ? this.values_.has(t)
              ? this.setObservablePropValue_(t, n)
              : r
                ? Reflect.set(this.target_, t, n)
                : ((this.target_[t] = n), !0)
            : this.extend_(
                t,
                { value: n, enumerable: !0, writable: !0, configurable: !0 },
                this.defaultAnnotation_,
                r,
              )
        );
      }),
      (n.has_ = function (t) {
        if (!globalState.trackingDerivation) return t in this.target_;
        this.pendingKeys_ ||= new Map();
        var n = this.pendingKeys_.get(t);
        return (
          n ||
            ((n = new ObservableValue(
              t in this.target_,
              referenceEnhancer,
              `ObservableObject.key?`,
              !1,
            )),
            this.pendingKeys_.set(t, n)),
          n.get()
        );
      }),
      (n.make_ = function (t, n) {
        if ((n === !0 && (n = this.defaultAnnotation_), n !== !1)) {
          if (!(t in this.target_)) {
            var r;
            if ((r = this.target_[storedAnnotationsSymbol]) != null && r[t])
              return;
            die(1, n.annotationType_, this.name_ + `.` + t.toString());
          }
          for (var i = this.target_; i && i !== objectPrototype;) {
            var o = getDescriptor(i, t);
            if (o) {
              var s = n.make_(this, t, o, i);
              if (s === 0) return;
              if (s === 1) break;
            }
            i = Object.getPrototypeOf(i);
          }
          recordAnnotationApplied(this, n, t);
        }
      }),
      (n.extend_ = function (t, n, r, i) {
        if (
          (i === void 0 && (i = !1),
          r === !0 && (r = this.defaultAnnotation_),
          r === !1)
        )
          return this.defineProperty_(t, n, i);
        var o = r.extend_(this, t, n, i);
        return (o && recordAnnotationApplied(this, r, t), o);
      }),
      (n.defineProperty_ = function (t, n, r) {
        (r === void 0 && (r = !1), this.keysAtom_);
        try {
          startBatch();
          var i = this.delete_(t);
          if (!i) return i;
          if (hasInterceptors(this)) {
            var o = interceptChange(this, {
              object: this.proxy_ || this.target_,
              name: t,
              type: ADD,
              newValue: n.value,
            });
            if (!o) return null;
            var s = o.newValue;
            n.value !== s && (n = _extends({}, n, { value: s }));
          }
          if (r) {
            if (!Reflect.defineProperty(this.target_, t, n)) return !1;
          } else defineProperty(this.target_, t, n);
          this.notifyPropertyAddition_(t, n.value);
        } finally {
          endBatch();
        }
        return !0;
      }),
      (n.defineObservableProperty_ = function (t, n, r, i) {
        (i === void 0 && (i = !1), this.keysAtom_);
        try {
          startBatch();
          var o = this.delete_(t);
          if (!o) return o;
          if (hasInterceptors(this)) {
            var s = interceptChange(this, {
              object: this.proxy_ || this.target_,
              name: t,
              type: ADD,
              newValue: n,
            });
            if (!s) return null;
            n = s.newValue;
          }
          var l = getCachedObservablePropDescriptor(t),
            u = {
              configurable: !globalState.safeDescriptors || this.isPlainObject_,
              enumerable: !0,
              get: l.get,
              set: l.set,
            };
          if (i) {
            if (!Reflect.defineProperty(this.target_, t, u)) return !1;
          } else defineProperty(this.target_, t, u);
          var p = new ObservableValue(n, r, `ObservableObject.key`, !1);
          (this.values_.set(t, p), this.notifyPropertyAddition_(t, p.value_));
        } finally {
          endBatch();
        }
        return !0;
      }),
      (n.defineComputedProperty_ = function (t, n, r) {
        (r === void 0 && (r = !1), this.keysAtom_);
        try {
          startBatch();
          var i = this.delete_(t);
          if (!i) return i;
          if (
            hasInterceptors(this) &&
            !interceptChange(this, {
              object: this.proxy_ || this.target_,
              name: t,
              type: ADD,
              newValue: void 0,
            })
          )
            return null;
          ((n.name ||= `ObservableObject.key`),
            (n.context = this.proxy_ || this.target_));
          var o = getCachedObservablePropDescriptor(t),
            s = {
              configurable: !globalState.safeDescriptors || this.isPlainObject_,
              enumerable: !1,
              get: o.get,
              set: o.set,
            };
          if (r) {
            if (!Reflect.defineProperty(this.target_, t, s)) return !1;
          } else defineProperty(this.target_, t, s);
          (this.values_.set(t, new ComputedValue(n)),
            this.notifyPropertyAddition_(t, void 0));
        } finally {
          endBatch();
        }
        return !0;
      }),
      (n.delete_ = function (t, n) {
        if (
          (n === void 0 && (n = !1), this.keysAtom_, !hasProp(this.target_, t))
        )
          return !0;
        if (
          hasInterceptors(this) &&
          !interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: t,
            type: REMOVE,
          })
        )
          return null;
        try {
          var r;
          startBatch();
          var i = hasListeners(this),
            o = !1,
            s = this.values_.get(t),
            l = void 0;
          if (!s && i) {
            var u;
            l = getDescriptor(this.target_, t)?.value;
          }
          if (n) {
            if (!Reflect.deleteProperty(this.target_, t)) return !1;
          } else delete this.target_[t];
          if (
            (s &&
              (this.values_.delete(t),
              s instanceof ObservableValue && (l = s.value_),
              propagateChanged(s)),
            this.keysAtom_.reportChanged(),
            (r = this.pendingKeys_) == null ||
              (r = r.get(t)) == null ||
              r.set(t in this.target_),
            i)
          ) {
            var p = {
              type: REMOVE,
              observableKind: `object`,
              object: this.proxy_ || this.target_,
              debugObjectName: this.name_,
              oldValue: l,
              name: t,
            };
            i && notifyListeners(this, p);
          }
        } finally {
          endBatch();
        }
        return !0;
      }),
      (n.observe_ = function (t, n) {
        return registerListener(this, t);
      }),
      (n.intercept_ = function (t) {
        return registerInterceptor(this, t);
      }),
      (n.notifyPropertyAddition_ = function (t, n) {
        var r,
          i = hasListeners(this),
          o = !1;
        if (i) {
          var s = i
            ? {
                type: ADD,
                observableKind: `object`,
                debugObjectName: this.name_,
                object: this.proxy_ || this.target_,
                name: t,
                newValue: n,
              }
            : null;
          i && notifyListeners(this, s);
        }
        ((r = this.pendingKeys_) == null || (r = r.get(t)) == null || r.set(!0),
          this.keysAtom_.reportChanged());
      }),
      (n.ownKeys_ = function () {
        return (this.keysAtom_.reportObserved(), ownKeys(this.target_));
      }),
      (n.keys_ = function () {
        return (this.keysAtom_.reportObserved(), Object.keys(this.target_));
      }),
      t
    );
  })();
function asObservableObject(t, n) {
  var r;
  if (hasProp(t, $mobx)) return t;
  var i = n?.name ?? `ObservableObject`;
  return (
    addHiddenProp(
      t,
      $mobx,
      new ObservableObjectAdministration(
        t,
        new Map(),
        String(i),
        getAnnotationFromOptions(n),
      ),
    ),
    t
  );
}
var isObservableObjectAdministration = createInstanceofPredicate(
  `ObservableObjectAdministration`,
  ObservableObjectAdministration,
);
function getCachedObservablePropDescriptor(t) {
  return (
    descriptorCache[t] ||
    (descriptorCache[t] = {
      get: function () {
        return this[$mobx].getObservablePropValue_(t);
      },
      set: function (n) {
        return this[$mobx].setObservablePropValue_(t, n);
      },
    })
  );
}
function isObservableObject(t) {
  return isObject(t) ? isObservableObjectAdministration(t[$mobx]) : !1;
}
function recordAnnotationApplied(t, n, r) {
  var i;
  (i = t.target_[storedAnnotationsSymbol]) == null || delete i[r];
}
var ENTRY_0 = createArrayEntryDescriptor(0),
  safariPrototypeSetterInheritanceBug = (function () {
    var t = !1,
      n = {};
    return (
      Object.defineProperty(n, "0", {
        set: function () {
          t = !0;
        },
      }),
      (Object.create(n)[0] = 1),
      t === !1
    );
  })(),
  OBSERVABLE_ARRAY_BUFFER_SIZE = 0,
  StubArray = function () {};
function inherit(t, n) {
  Object.setPrototypeOf
    ? Object.setPrototypeOf(t.prototype, n)
    : t.prototype.__proto__ === void 0
      ? (t.prototype = n)
      : (t.prototype.__proto__ = n);
}
inherit(StubArray, Array.prototype);
var LegacyObservableArray = (function (t) {
  function n(n, r, i, o) {
    var s;
    return (
      i === void 0 && (i = `ObservableArray`),
      o === void 0 && (o = !1),
      (s = t.call(this) || this),
      initObservable(function () {
        var t = new ObservableArrayAdministration(i, r, o, !0);
        ((t.proxy_ = s),
          addHiddenFinalProp(s, $mobx, t),
          n && n.length && s.spliceWithArray(0, 0, n),
          safariPrototypeSetterInheritanceBug &&
            Object.defineProperty(s, "0", ENTRY_0));
      }),
      s
    );
  }
  _inheritsLoose(n, t);
  var r = n.prototype;
  return (
    (r.concat = function () {
      this[$mobx].atom_.reportObserved();
      var t = [...arguments];
      return Array.prototype.concat.apply(
        this.slice(),
        t.map(function (t) {
          return isObservableArray(t) ? t.slice() : t;
        }),
      );
    }),
    (r[Symbol.iterator] = function () {
      var t = this,
        n = 0;
      return makeIterable({
        next: function () {
          return n < t.length
            ? { value: t[n++], done: !1 }
            : { done: !0, value: void 0 };
        },
      });
    }),
    _createClass(n, [
      {
        key: `length`,
        get: function () {
          return this[$mobx].getArrayLength_();
        },
        set: function (t) {
          this[$mobx].setArrayLength_(t);
        },
      },
      {
        key: Symbol.toStringTag,
        get: function () {
          return `Array`;
        },
      },
    ])
  );
})(StubArray);
Object.entries(arrayExtensions).forEach(function (t) {
  var n = t[0],
    r = t[1];
  n !== `concat` && addHiddenProp(LegacyObservableArray.prototype, n, r);
});
function createArrayEntryDescriptor(t) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function () {
      return this[$mobx].get_(t);
    },
    set: function (n) {
      this[$mobx].set_(t, n);
    },
  };
}
function createArrayBufferItem(t) {
  defineProperty(
    LegacyObservableArray.prototype,
    `` + t,
    createArrayEntryDescriptor(t),
  );
}
function reserveArrayBuffer(t) {
  if (t > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var n = OBSERVABLE_ARRAY_BUFFER_SIZE; n < t + 100; n++)
      createArrayBufferItem(n);
    OBSERVABLE_ARRAY_BUFFER_SIZE = t;
  }
}
reserveArrayBuffer(1e3);
function createLegacyArray(t, n, r) {
  return new LegacyObservableArray(t, n, r);
}
function getAtom(t, n) {
  if (typeof t == `object` && t) {
    if (isObservableArray(t)) return (n !== void 0 && die(23), t[$mobx].atom_);
    if (isObservableSet(t)) return t.atom_;
    if (isObservableMap(t)) {
      if (n === void 0) return t.keysAtom_;
      var r = t.data_.get(n) || t.hasMap_.get(n);
      return (r || die(25, n, getDebugName(t)), r);
    }
    if (isObservableObject(t)) {
      if (!n) return die(26);
      var i = t[$mobx].values_.get(n);
      return (i || die(27, n, getDebugName(t)), i);
    }
    if (isAtom(t) || isComputedValue(t) || isReaction(t)) return t;
  } else if (isFunction(t) && isReaction(t[$mobx])) return t[$mobx];
  die(28);
}
function getAdministration(t, n) {
  if ((t || die(29), n !== void 0)) return getAdministration(getAtom(t, n));
  if (
    isAtom(t) ||
    isComputedValue(t) ||
    isReaction(t) ||
    isObservableMap(t) ||
    isObservableSet(t)
  )
    return t;
  if (t[$mobx]) return t[$mobx];
  die(24, t);
}
function getDebugName(t, n) {
  var r;
  if (n !== void 0) r = getAtom(t, n);
  else if (isAction(t)) return t.name;
  else
    r =
      isObservableObject(t) || isObservableMap(t) || isObservableSet(t)
        ? getAdministration(t)
        : getAtom(t);
  return r.name_;
}
function initObservable(t) {
  var n = untrackedStart(),
    r = allowStateChangesStart(!0);
  startBatch();
  try {
    return t();
  } finally {
    (endBatch(), allowStateChangesEnd(r), untrackedEnd(n));
  }
}
var toString = objectPrototype.toString;
function deepEqual(t, n, r) {
  return (r === void 0 && (r = -1), eq(t, n, r));
}
function eq(t, n, r, i, o) {
  if (t === n) return t !== 0 || 1 / t == 1 / n;
  if (t == null || n == null) return !1;
  if (t !== t) return n !== n;
  var s = typeof t;
  if (s !== `function` && s !== `object` && typeof n != `object`) return !1;
  var l = toString.call(t);
  if (l !== toString.call(n)) return !1;
  switch (l) {
    case `[object RegExp]`:
    case `[object String]`:
      return `` + t == `` + n;
    case `[object Number]`:
      return +t == +t ? (+t == 0 ? 1 / t == 1 / n : +t == +n) : +n != +n;
    case `[object Date]`:
    case `[object Boolean]`:
      return +t == +n;
    case `[object Symbol]`:
      return (
        typeof Symbol < `u` && Symbol.valueOf.call(t) === Symbol.valueOf.call(n)
      );
    case `[object Map]`:
    case `[object Set]`:
      r >= 0 && r++;
  }
  ((t = unwrap(t)), (n = unwrap(n)));
  var u = l === `[object Array]`;
  if (!u) {
    if (typeof t != `object` || typeof n != `object`) return !1;
    var p = t.constructor,
      m = n.constructor;
    if (
      p !== m &&
      !(isFunction(p) && p instanceof p && isFunction(m) && m instanceof m) &&
      `constructor` in t &&
      `constructor` in n
    )
      return !1;
  }
  if (r === 0) return !1;
  (r < 0 && (r = -1), (i ||= []), (o ||= []));
  for (var h = i.length; h--;) if (i[h] === t) return o[h] === n;
  if ((i.push(t), o.push(n), u)) {
    if (((h = t.length), h !== n.length)) return !1;
    for (; h--;) if (!eq(t[h], n[h], r - 1, i, o)) return !1;
  } else {
    var g = Object.keys(t),
      _ = g.length;
    if (Object.keys(n).length !== _) return !1;
    for (var v = 0; v < _; v++) {
      var y = g[v];
      if (!(hasProp(n, y) && eq(t[y], n[y], r - 1, i, o))) return !1;
    }
  }
  return (i.pop(), o.pop(), !0);
}
function unwrap(t) {
  return isObservableArray(t)
    ? t.slice()
    : isES6Map(t) || isObservableMap(t) || isES6Set(t) || isObservableSet(t)
      ? Array.from(t.entries())
      : t;
}
var _getGlobal$Iterator,
  maybeIteratorPrototype =
    (_getGlobal$Iterator = getGlobal().Iterator)?.prototype || {};
function makeIterable(t) {
  return (
    (t[Symbol.iterator] = getSelf),
    Object.assign(Object.create(maybeIteratorPrototype), t)
  );
}
function getSelf() {
  return this;
}
([`Symbol`, `Map`, `Set`].forEach(function (t) {
  getGlobal()[t] === void 0 &&
    die(`MobX requires global '` + t + `' to be available or polyfilled`);
}),
  typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == `object` &&
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy,
      extras: { getDebugName },
      $mobx,
    }));
export {
  GetCookie as $,
  AssertMsg as $t,
  classnames_default as A,
  CClientMetrics_ReportReactUsage_Notification as At,
  BIsIOS as B,
  CPackageReservationStatus as Bt,
  observe as C,
  Clamp as Ct,
  transaction as D,
  ScalePreserveAspectRatio as Dt,
  toJS as E,
  RemapValClamped as Et,
  IsPlatformWindows as F,
  CCDDBAppDetailCommon as Ft,
  GetWebConfig as G,
  ReaderProto as Gt,
  AssetURL as H,
  AddAccessors as Ht,
  IsSteamChina as I,
  CClanMatchEventByRange as It,
  BIsInPresentationMode as J,
  ToObject as Jt,
  UserConfig as K,
  RemapMetadataByField as Kt,
  UNKNOWN_BASE_URL as L,
  CLocalizationToken as Lt,
  GET_BASE_URL as M,
  CClientMetrics_ReportReactUsage_Notification_ComponentData as Mt,
  GET_BASE_WEB_PROPERTY as N,
  CClientMetrics_ReportReactUsage_Notification_RouteData as Nt,
  when as O,
  ErrorReportingStore as Ot,
  IsPlatformMac as P,
  ClientMetricsService as Pt,
  GetOptionalConfigJSON as Q,
  AssertFatal as Qt,
  useInGamepadUI as R,
  CMsgIPAddress as Rt,
  observable as S,
  k_EMsgServiceMethodCallFromClientNonAuthed as St,
  runInAction as T,
  RemapVal as Tt,
  Config as U,
  DeserializeBinary as Ut,
  BIsMobile as V,
  UserContentDescriptorPreferences as Vt,
  GetSteamUIConfig as W,
  FromObject as Wt,
  InitConfig as X,
  require_google_protobuf as Xt,
  GetSessionID as Y,
  WriterProto as Yt,
  GetConfigJSON as Z,
  GenerateSHA as Zt,
  isObservableMap as _,
  require_jsx_runtime as _t,
  allowStateChanges as a,
  __toCommonJS as an,
  BIsReducedUILauncher as at,
  makeAutoObservable as b,
  BinaryToHex as bt,
  configure as c,
  ELanguagePchLanguage as ct,
  getAdministration as d,
  MapKoreanaToKorean as dt,
  AssertNever as en,
  SetCookie as et,
  getDependencyTree as f,
  PchLanguageToELanguage as ft,
  isObservableArray as g,
  ESteamRealm as gt,
  isComputingDerivation as h,
  BIsChinaRealm as ht,
  action as i,
  __require as in,
  BIsEFriendRelationshipFriend as it,
  ConfigContextRoot as j,
  CClientMetrics_ReportReactUsage_Notification_ActionData as jt,
  __decorate as k,
  require_react as kt,
  createAtom as l,
  ELanguagePchWebLanguageCode as lt,
  isComputedProp as m,
  k_GIDNil as mt,
  ObservableMap as n,
  __esmMin as nn,
  Config$1 as nt,
  autorun as o,
  __toESM as on,
  EClanEventTypeArray as ot,
  isComputed as p,
  k_EGamingDeviceType_SteamFrame as pt,
  WaitForConfigReady as q,
  SerializeBinary as qt,
  Reaction as r,
  __exportAll as rn,
  UserConfig$1 as rt,
  computed as s,
  EGameIDType as st,
  $mobx as t,
  __commonJSMin as tn,
  CommunityConfig as tt,
  extendObservable as u,
  EWindowBringToFront as ut,
  isObservableObject as v,
  CProtoBufMsg as vt,
  reaction as w,
  IsDigits as wt,
  makeObservable as x,
  CUtlBuffer as xt,
  keys as y,
  initProtoBufMsgForServiceMethod as yt,
  useInVR as z,
  CMsgKeyValueSet as zt,
};
