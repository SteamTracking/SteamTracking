/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { nn as e } from "./chunk~de7f2df91c.js";
var t = e((e, t) => {
  var n = (function () {
      function e(e, t) {
        if (typeof e != `function`)
          throw TypeError(
            `DataLoader must be constructed with a function which accepts ` +
              (`Array<key> and returns Promise<Array<value>>, but got: ` +
                e +
                `.`),
          );
        ((this._batchLoadFn = e),
          (this._maxBatchSize = l(t)),
          (this._batchScheduleFn = u(t)),
          (this._cacheKeyFn = d(t)),
          (this._cacheMap = f(t)),
          (this._batch = null),
          (this.name = p(t)));
      }
      var t = e.prototype;
      return (
        (t.load = function (e) {
          if (e == null)
            throw TypeError(
              `The loader.load() function must be called with a value, ` +
                (`but got: ` + String(e) + `.`),
            );
          var t = a(this),
            n = this._cacheMap,
            r = this._cacheKeyFn(e);
          if (n) {
            var i = n.get(r);
            if (i) {
              var o = (t.cacheHits ||= []);
              return new Promise(function (e) {
                o.push(function () {
                  e(i);
                });
              });
            }
          }
          t.keys.push(e);
          var s = new Promise(function (e, n) {
            t.callbacks.push({ resolve: e, reject: n });
          });
          return (n && n.set(r, s), s);
        }),
        (t.loadMany = function (e) {
          if (!m(e))
            throw TypeError(
              `The loader.loadMany() function must be called with Array<key> ` +
                (`but got: ` + e + `.`),
            );
          for (var t = [], n = 0; n < e.length; n++)
            t.push(
              this.load(e[n]).catch(function (e) {
                return e;
              }),
            );
          return Promise.all(t);
        }),
        (t.clear = function (e) {
          var t = this._cacheMap;
          if (t) {
            var n = this._cacheKeyFn(e);
            t.delete(n);
          }
          return this;
        }),
        (t.clearAll = function () {
          var e = this._cacheMap;
          return (e && e.clear(), this);
        }),
        (t.prime = function (e, t) {
          var n = this._cacheMap;
          if (n) {
            var r = this._cacheKeyFn(e);
            if (n.get(r) === void 0) {
              var i;
              (t instanceof Error
                ? ((i = Promise.reject(t)), i.catch(function () {}))
                : (i = Promise.resolve(t)),
                n.set(r, i));
            }
          }
          return this;
        }),
        e
      );
    })(),
    r =
      typeof process == `object` && typeof process.nextTick == `function`
        ? function (e) {
            ((i ||= Promise.resolve()),
              i.then(function () {
                process.nextTick(e);
              }));
          }
        : typeof setImmediate == `function`
          ? function (e) {
              setImmediate(e);
            }
          : function (e) {
              setTimeout(e);
            },
    i;
  function a(e) {
    var t = e._batch;
    if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
      return t;
    var n = { hasDispatched: !1, keys: [], callbacks: [] };
    return (
      (e._batch = n),
      e._batchScheduleFn(function () {
        o(e, n);
      }),
      n
    );
  }
  function o(e, t) {
    if (((t.hasDispatched = !0), t.keys.length === 0)) c(t);
    else {
      var n;
      try {
        n = e._batchLoadFn(t.keys);
      } catch (n) {
        return s(
          e,
          t,
          TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function ` +
              (`errored synchronously: ` + String(n) + `.`),
          ),
        );
      }
      if (!n || typeof n.then != `function`)
        return s(
          e,
          t,
          TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ` +
              (`not return a Promise: ` + String(n) + `.`),
          ),
        );
      n.then(function (e) {
        if (!m(e))
          throw TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did ` +
              (`not return a Promise of an Array: ` + String(e) + `.`),
          );
        if (e.length !== t.keys.length)
          throw TypeError(
            `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.` +
              (`

Keys:
` +
                String(t.keys)) +
              (`

Values:
` +
                String(e)),
          );
        c(t);
        for (var n = 0; n < t.callbacks.length; n++) {
          var r = e[n];
          r instanceof Error
            ? t.callbacks[n].reject(r)
            : t.callbacks[n].resolve(r);
        }
      }).catch(function (n) {
        s(e, t, n);
      });
    }
  }
  function s(e, t, n) {
    c(t);
    for (var r = 0; r < t.keys.length; r++)
      (e.clear(t.keys[r]), t.callbacks[r].reject(n));
  }
  function c(e) {
    if (e.cacheHits)
      for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
  }
  function l(e) {
    if (e && e.batch === !1) return 1;
    var t = e && e.maxBatchSize;
    if (t === void 0) return 1 / 0;
    if (typeof t != `number` || t < 1)
      throw TypeError(`maxBatchSize must be a positive number: ` + t);
    return t;
  }
  function u(e) {
    var t = e && e.batchScheduleFn;
    if (t === void 0) return r;
    if (typeof t != `function`)
      throw TypeError(`batchScheduleFn must be a function: ` + t);
    return t;
  }
  function d(e) {
    var t = e && e.cacheKeyFn;
    if (t === void 0)
      return function (e) {
        return e;
      };
    if (typeof t != `function`)
      throw TypeError(`cacheKeyFn must be a function: ` + t);
    return t;
  }
  function f(e) {
    if (e && e.cache === !1) return null;
    var t = e && e.cacheMap;
    if (t === void 0) return new Map();
    if (t !== null) {
      var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
        return t && typeof t[e] != `function`;
      });
      if (n.length !== 0)
        throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
    }
    return t;
  }
  function p(e) {
    return e && e.name ? e.name : null;
  }
  function m(e) {
    return (
      typeof e == `object` &&
      !!e &&
      typeof e.length == `number` &&
      (e.length === 0 ||
        (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
    );
  }
  t.exports = n;
});
export { t };
