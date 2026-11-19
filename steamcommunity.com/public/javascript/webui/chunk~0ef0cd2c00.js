/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { i as e, t } from "./chunk~f025431ab0.js";
import {
  $ as n,
  G as r,
  H as i,
  I as a,
  L as o,
  N as s,
  P as c,
  R as l,
  Sr as u,
  V as d,
  W as f,
  hr as p,
} from "./chunk~d3515eca4e.js";
var m = t((e, t) => {
    t.exports = function (e, t) {
      return function () {
        for (var n = Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    };
  }),
  h = t((e, t) => {
    var n = m(),
      r = Object.prototype.toString,
      i = (function (e) {
        return function (t) {
          var n = r.call(t);
          return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
        };
      })(Object.create(null));
    function a(e) {
      return (
        (e = e.toLowerCase()),
        function (t) {
          return i(t) === e;
        }
      );
    }
    function o(e) {
      return Array.isArray(e);
    }
    function s(e) {
      return e === void 0;
    }
    function c(e) {
      return (
        e !== null &&
        !s(e) &&
        e.constructor !== null &&
        !s(e.constructor) &&
        typeof e.constructor.isBuffer == `function` &&
        e.constructor.isBuffer(e)
      );
    }
    var l = a(`ArrayBuffer`);
    function u(e) {
      return typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && l(e.buffer);
    }
    function d(e) {
      return typeof e == `string`;
    }
    function f(e) {
      return typeof e == `number`;
    }
    function p(e) {
      return typeof e == `object` && !!e;
    }
    function h(e) {
      if (i(e) !== `object`) return !1;
      var t = Object.getPrototypeOf(e);
      return t === null || t === Object.prototype;
    }
    var g = a(`Date`),
      _ = a(`File`),
      v = a(`Blob`),
      y = a(`FileList`);
    function b(e) {
      return r.call(e) === `[object Function]`;
    }
    function x(e) {
      return p(e) && b(e.pipe);
    }
    function S(e) {
      var t = `[object FormData]`;
      return (
        e &&
        ((typeof FormData == `function` && e instanceof FormData) ||
          r.call(e) === t ||
          (b(e.toString) && e.toString() === t))
      );
    }
    var C = a(`URLSearchParams`);
    function w(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ``);
    }
    function T() {
      return typeof navigator < `u` &&
        (navigator.product === `ReactNative` ||
          navigator.product === `NativeScript` ||
          navigator.product === `NS`)
        ? !1
        : typeof window < `u` && typeof document < `u`;
    }
    function E(e, t) {
      if (e != null) {
        if ((typeof e != `object` && (e = [e]), o(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.call(null, e[i], i, e);
      }
    }
    function D() {
      var e = {};
      function t(t, n) {
        e[n] =
          h(e[n]) && h(t) ? D(e[n], t) : h(t) ? D({}, t) : o(t) ? t.slice() : t;
      }
      for (var n = 0, r = arguments.length; n < r; n++) E(arguments[n], t);
      return e;
    }
    function O(e, t, r) {
      return (
        E(t, function (t, i) {
          e[i] = r && typeof t == `function` ? n(t, r) : t;
        }),
        e
      );
    }
    function ee(e) {
      return (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e);
    }
    function te(e, t, n, r) {
      ((e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        n && Object.assign(e.prototype, n));
    }
    function ne(e, t, n) {
      var r,
        i,
        a,
        o = {};
      t ||= {};
      do {
        for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0;)
          ((a = r[i]), o[a] || ((t[a] = e[a]), (o[a] = !0)));
        e = Object.getPrototypeOf(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    }
    function re(e, t, n) {
      ((e = String(e)),
        (n === void 0 || n > e.length) && (n = e.length),
        (n -= t.length));
      var r = e.indexOf(t, n);
      return r !== -1 && r === n;
    }
    function ie(e) {
      if (!e) return null;
      var t = e.length;
      if (s(t)) return null;
      for (var n = Array(t); t-- > 0;) n[t] = e[t];
      return n;
    }
    t.exports = {
      isArray: o,
      isArrayBuffer: l,
      isBuffer: c,
      isFormData: S,
      isArrayBufferView: u,
      isString: d,
      isNumber: f,
      isObject: p,
      isPlainObject: h,
      isUndefined: s,
      isDate: g,
      isFile: _,
      isBlob: v,
      isFunction: b,
      isStream: x,
      isURLSearchParams: C,
      isStandardBrowserEnv: T,
      forEach: E,
      merge: D,
      extend: O,
      trim: w,
      stripBOM: ee,
      inherits: te,
      toFlatObject: ne,
      kindOf: i,
      kindOfTest: a,
      endsWith: re,
      toArray: ie,
      isTypedArray: (function (e) {
        return function (t) {
          return e && t instanceof e;
        };
      })(typeof Uint8Array < `u` && Object.getPrototypeOf(Uint8Array)),
      isFileList: y,
    };
  }),
  g = t((e, t) => {
    var n = h();
    function r(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, `:`)
        .replace(/%24/g, `$`)
        .replace(/%2C/gi, `,`)
        .replace(/%20/g, `+`)
        .replace(/%5B/gi, `[`)
        .replace(/%5D/gi, `]`);
    }
    t.exports = function (e, t, i) {
      if (!t) return e;
      var a;
      if (i) a = i(t);
      else if (n.isURLSearchParams(t)) a = t.toString();
      else {
        var o = [];
        (n.forEach(t, function (e, t) {
          e != null &&
            (n.isArray(e) ? (t += `[]`) : (e = [e]),
            n.forEach(e, function (e) {
              (n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                o.push(r(t) + `=` + r(e)));
            }));
        }),
          (a = o.join(`&`)));
      }
      if (a) {
        var s = e.indexOf(`#`);
        (s !== -1 && (e = e.slice(0, s)),
          (e += (e.indexOf(`?`) === -1 ? `?` : `&`) + a));
      }
      return e;
    };
  }),
  _ = t((e, t) => {
    var n = h();
    function r() {
      this.handlers = [];
    }
    ((r.prototype.use = function (e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: n ? n.synchronous : !1,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }),
      (r.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (r.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          t !== null && e(t);
        });
      }),
      (t.exports = r));
  }),
  v = t((e, t) => {
    var n = h();
    t.exports = function (e, t) {
      n.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    };
  }),
  y = t((e, t) => {
    var n = h();
    function r(e, t, n, r, i) {
      (Error.call(this),
        (this.message = e),
        (this.name = `AxiosError`),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i));
    }
    n.inherits(r, Error, {
      toJSON: function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      },
    });
    var i = r.prototype,
      a = {};
    ([
      `ERR_BAD_OPTION_VALUE`,
      `ERR_BAD_OPTION`,
      `ECONNABORTED`,
      `ETIMEDOUT`,
      `ERR_NETWORK`,
      `ERR_FR_TOO_MANY_REDIRECTS`,
      `ERR_DEPRECATED`,
      `ERR_BAD_RESPONSE`,
      `ERR_BAD_REQUEST`,
      `ERR_CANCELED`,
    ].forEach(function (e) {
      a[e] = { value: e };
    }),
      Object.defineProperties(r, a),
      Object.defineProperty(i, "isAxiosError", { value: !0 }),
      (r.from = function (e, t, a, o, s, c) {
        var l = Object.create(i);
        return (
          n.toFlatObject(e, l, function (e) {
            return e !== Error.prototype;
          }),
          r.call(l, e.message, t, a, o, s),
          (l.name = e.name),
          c && Object.assign(l, c),
          l
        );
      }),
      (t.exports = r));
  }),
  b = t((e, t) => {
    t.exports = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    };
  }),
  x = t((e, t) => {
    var n = h();
    function r(e, t) {
      t ||= new FormData();
      var r = [];
      function i(e) {
        return e === null
          ? ``
          : n.isDate(e)
            ? e.toISOString()
            : n.isArrayBuffer(e) || n.isTypedArray(e)
              ? typeof Blob == `function`
                ? new Blob([e])
                : Buffer.from(e)
              : e;
      }
      function a(e, o) {
        if (n.isPlainObject(e) || n.isArray(e)) {
          if (r.indexOf(e) !== -1)
            throw Error(`Circular reference detected in ` + o);
          (r.push(e),
            n.forEach(e, function (e, r) {
              if (!n.isUndefined(e)) {
                var s = o ? o + `.` + r : r,
                  c;
                if (e && !o && typeof e == `object`) {
                  if (n.endsWith(r, `{}`)) e = JSON.stringify(e);
                  else if (n.endsWith(r, `[]`) && (c = n.toArray(e))) {
                    c.forEach(function (e) {
                      !n.isUndefined(e) && t.append(s, i(e));
                    });
                    return;
                  }
                }
                a(e, s);
              }
            }),
            r.pop());
        } else t.append(o, i(e));
      }
      return (a(e), t);
    }
    t.exports = r;
  }),
  S = t((e, t) => {
    var n = y();
    t.exports = function (e, t, r) {
      var i = r.config.validateStatus;
      !r.status || !i || i(r.status)
        ? e(r)
        : t(
            new n(
              `Request failed with status code ` + r.status,
              [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][
                Math.floor(r.status / 100) - 4
              ],
              r.config,
              r.request,
              r,
            ),
          );
    };
  }),
  C = t((e, t) => {
    var n = h();
    t.exports = n.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (e, t, r, i, a, o) {
              var s = [];
              (s.push(e + `=` + encodeURIComponent(t)),
                n.isNumber(r) && s.push(`expires=` + new Date(r).toGMTString()),
                n.isString(i) && s.push(`path=` + i),
                n.isString(a) && s.push(`domain=` + a),
                o === !0 && s.push(`secure`),
                (document.cookie = s.join(`; `)));
            },
            read: function (e) {
              var t = document.cookie.match(
                RegExp(`(^|;\\s*)(` + e + `)=([^;]*)`),
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, ``, Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })();
  }),
  w = t((e, t) => {
    t.exports = function (e) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
    };
  }),
  T = t((e, t) => {
    t.exports = function (e, t) {
      return t ? e.replace(/\/+$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
    };
  }),
  E = t((e, t) => {
    var n = w(),
      r = T();
    t.exports = function (e, t) {
      return e && !n(t) ? r(e, t) : t;
    };
  }),
  D = t((e, t) => {
    var n = h(),
      r = [
        `age`,
        `authorization`,
        `content-length`,
        `content-type`,
        `etag`,
        `expires`,
        `from`,
        `host`,
        `if-modified-since`,
        `if-unmodified-since`,
        `last-modified`,
        `location`,
        `max-forwards`,
        `proxy-authorization`,
        `referer`,
        `retry-after`,
        `user-agent`,
      ];
    t.exports = function (e) {
      var t = {},
        i,
        a,
        o;
      return (
        e &&
          n.forEach(
            e.split(`
`),
            function (e) {
              if (
                ((o = e.indexOf(`:`)),
                (i = n.trim(e.substr(0, o)).toLowerCase()),
                (a = n.trim(e.substr(o + 1))),
                i)
              ) {
                if (t[i] && r.indexOf(i) >= 0) return;
                i === `set-cookie`
                  ? (t[i] = (t[i] ? t[i] : []).concat([a]))
                  : (t[i] = t[i] ? t[i] + `, ` + a : a);
              }
            },
          ),
        t
      );
    };
  }),
  O = t((e, t) => {
    var n = h();
    t.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement(`a`),
            r;
          function i(n) {
            var r = n;
            return (
              e && (t.setAttribute(`href`, r), (r = t.href)),
              t.setAttribute(`href`, r),
              {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, ``) : ``,
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, ``) : ``,
                hash: t.hash ? t.hash.replace(/^#/, ``) : ``,
                hostname: t.hostname,
                port: t.port,
                pathname:
                  t.pathname.charAt(0) === `/` ? t.pathname : `/` + t.pathname,
              }
            );
          }
          return (
            (r = i(window.location.href)),
            function (e) {
              var t = n.isString(e) ? i(e) : e;
              return t.protocol === r.protocol && t.host === r.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })();
  }),
  ee = t((e, t) => {
    var n = y(),
      r = h();
    function i(e) {
      (n.call(this, e ?? `canceled`, n.ERR_CANCELED),
        (this.name = `CanceledError`));
    }
    (r.inherits(i, n, { __CANCEL__: !0 }), (t.exports = i));
  }),
  te = t((e, t) => {
    t.exports = function (e) {
      var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
      return (t && t[1]) || ``;
    };
  }),
  ne = t((e, t) => {
    var n = h(),
      r = S(),
      i = C(),
      a = g(),
      o = E(),
      s = D(),
      c = O(),
      l = b(),
      u = y(),
      d = ee(),
      f = te();
    t.exports = function (e) {
      return new Promise(function (t, p) {
        var m = e.data,
          h = e.headers,
          g = e.responseType,
          _;
        function v() {
          (e.cancelToken && e.cancelToken.unsubscribe(_),
            e.signal && e.signal.removeEventListener(`abort`, _));
        }
        n.isFormData(m) && n.isStandardBrowserEnv() && delete h[`Content-Type`];
        var y = new XMLHttpRequest();
        if (e.auth) {
          var b = e.auth.username || ``,
            x = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ``;
          h.Authorization = `Basic ` + btoa(b + `:` + x);
        }
        var S = o(e.baseURL, e.url);
        (y.open(e.method.toUpperCase(), a(S, e.params, e.paramsSerializer), !0),
          (y.timeout = e.timeout));
        function C() {
          if (y) {
            var n =
              `getAllResponseHeaders` in y
                ? s(y.getAllResponseHeaders())
                : null;
            (r(
              function (e) {
                (t(e), v());
              },
              function (e) {
                (p(e), v());
              },
              {
                data:
                  !g || g === `text` || g === `json`
                    ? y.responseText
                    : y.response,
                status: y.status,
                statusText: y.statusText,
                headers: n,
                config: e,
                request: y,
              },
            ),
              (y = null));
          }
        }
        if (
          (`onloadend` in y
            ? (y.onloadend = C)
            : (y.onreadystatechange = function () {
                y &&
                  y.readyState === 4 &&
                  (y.status !== 0 ||
                    (y.responseURL && y.responseURL.indexOf(`file:`) === 0)) &&
                  setTimeout(C);
              }),
          (y.onabort = function () {
            y &&= (p(new u(`Request aborted`, u.ECONNABORTED, e, y)), null);
          }),
          (y.onerror = function () {
            (p(new u(`Network Error`, u.ERR_NETWORK, e, y, y)), (y = null));
          }),
          (y.ontimeout = function () {
            var t = e.timeout
                ? `timeout of ` + e.timeout + `ms exceeded`
                : `timeout exceeded`,
              n = e.transitional || l;
            (e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              p(
                new u(
                  t,
                  n.clarifyTimeoutError ? u.ETIMEDOUT : u.ECONNABORTED,
                  e,
                  y,
                ),
              ),
              (y = null));
          }),
          n.isStandardBrowserEnv())
        ) {
          var w =
            (e.withCredentials || c(S)) && e.xsrfCookieName
              ? i.read(e.xsrfCookieName)
              : void 0;
          w && (h[e.xsrfHeaderName] = w);
        }
        (`setRequestHeader` in y &&
          n.forEach(h, function (e, t) {
            m === void 0 && t.toLowerCase() === `content-type`
              ? delete h[t]
              : y.setRequestHeader(t, e);
          }),
          n.isUndefined(e.withCredentials) ||
            (y.withCredentials = !!e.withCredentials),
          g && g !== `json` && (y.responseType = e.responseType),
          typeof e.onDownloadProgress == `function` &&
            y.addEventListener(`progress`, e.onDownloadProgress),
          typeof e.onUploadProgress == `function` &&
            y.upload &&
            y.upload.addEventListener(`progress`, e.onUploadProgress),
          (e.cancelToken || e.signal) &&
            ((_ = function (e) {
              y &&= (p(!e || (e && e.type) ? new d() : e), y.abort(), null);
            }),
            e.cancelToken && e.cancelToken.subscribe(_),
            e.signal &&
              (e.signal.aborted ? _() : e.signal.addEventListener(`abort`, _))),
          (m ||= null));
        var T = f(S);
        T && [`http`, `https`, `file`].indexOf(T) === -1
          ? p(new u(`Unsupported protocol ` + T + `:`, u.ERR_BAD_REQUEST, e))
          : y.send(m);
      });
    };
  }),
  re = t((e, t) => {
    t.exports = null;
  }),
  ie = t((e, t) => {
    var n = h(),
      r = v(),
      i = y(),
      a = b(),
      o = x(),
      s = { "Content-Type": `application/x-www-form-urlencoded` };
    function c(e, t) {
      !n.isUndefined(e) &&
        n.isUndefined(e[`Content-Type`]) &&
        (e[`Content-Type`] = t);
    }
    function l() {
      var e;
      return (
        (typeof XMLHttpRequest < `u` ||
          (typeof process < `u` &&
            Object.prototype.toString.call(process) === `[object process]`)) &&
          (e = ne()),
        e
      );
    }
    function u(e, t, r) {
      if (n.isString(e))
        try {
          return ((t || JSON.parse)(e), n.trim(e));
        } catch (e) {
          if (e.name !== `SyntaxError`) throw e;
        }
      return (r || JSON.stringify)(e);
    }
    var d = {
      transitional: a,
      adapter: l(),
      transformRequest: [
        function (e, t) {
          if (
            (r(t, `Accept`),
            r(t, `Content-Type`),
            n.isFormData(e) ||
              n.isArrayBuffer(e) ||
              n.isBuffer(e) ||
              n.isStream(e) ||
              n.isFile(e) ||
              n.isBlob(e))
          )
            return e;
          if (n.isArrayBufferView(e)) return e.buffer;
          if (n.isURLSearchParams(e))
            return (
              c(t, `application/x-www-form-urlencoded;charset=utf-8`),
              e.toString()
            );
          var i = n.isObject(e),
            a = t && t[`Content-Type`],
            s;
          if ((s = n.isFileList(e)) || (i && a === `multipart/form-data`)) {
            var l = this.env && this.env.FormData;
            return o(s ? { "files[]": e } : e, l && new l());
          }
          return i || a === `application/json`
            ? (c(t, `application/json`), u(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          var t = this.transitional || d.transitional,
            r = t && t.silentJSONParsing,
            a = t && t.forcedJSONParsing,
            o = !r && this.responseType === `json`;
          if (o || (a && n.isString(e) && e.length))
            try {
              return JSON.parse(e);
            } catch (e) {
              if (o)
                throw e.name === `SyntaxError`
                  ? i.from(e, i.ERR_BAD_RESPONSE, this, null, this.response)
                  : e;
            }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: `XSRF-TOKEN`,
      xsrfHeaderName: `X-XSRF-TOKEN`,
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: re() },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: `application/json, text/plain, */*` } },
    };
    (n.forEach([`delete`, `get`, `head`], function (e) {
      d.headers[e] = {};
    }),
      n.forEach([`post`, `put`, `patch`], function (e) {
        d.headers[e] = n.merge(s);
      }),
      (t.exports = d));
  }),
  ae = t((e, t) => {
    var n = h(),
      r = ie();
    t.exports = function (e, t, i) {
      var a = this || r;
      return (
        n.forEach(i, function (n) {
          e = n.call(a, e, t);
        }),
        e
      );
    };
  }),
  k = t((e, t) => {
    t.exports = function (e) {
      return !!(e && e.__CANCEL__);
    };
  }),
  A = t((e, t) => {
    var n = h(),
      r = ae(),
      i = k(),
      a = ie(),
      o = ee();
    function s(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new o();
    }
    t.exports = function (e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = r.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers,
        )),
        n.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `common`],
          function (t) {
            delete e.headers[t];
          },
        ),
        (e.adapter || a.adapter)(e).then(
          function (t) {
            return (
              s(e),
              (t.data = r.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              i(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = r.call(
                    e,
                    t.response.data,
                    t.response.headers,
                    e.transformResponse,
                  ))),
              Promise.reject(t)
            );
          },
        )
      );
    };
  }),
  oe = t((e, t) => {
    var n = h();
    t.exports = function (e, t) {
      t ||= {};
      var r = {};
      function i(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t)
          ? n.merge(e, t)
          : n.isPlainObject(t)
            ? n.merge({}, t)
            : n.isArray(t)
              ? t.slice()
              : t;
      }
      function a(r) {
        if (!n.isUndefined(t[r])) return i(e[r], t[r]);
        if (!n.isUndefined(e[r])) return i(void 0, e[r]);
      }
      function o(e) {
        if (!n.isUndefined(t[e])) return i(void 0, t[e]);
      }
      function s(r) {
        if (!n.isUndefined(t[r])) return i(void 0, t[r]);
        if (!n.isUndefined(e[r])) return i(void 0, e[r]);
      }
      function c(n) {
        if (n in t) return i(e[n], t[n]);
        if (n in e) return i(void 0, e[n]);
      }
      var l = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: c,
      };
      return (
        n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
          var t = l[e] || a,
            i = t(e);
          (n.isUndefined(i) && t !== c) || (r[e] = i);
        }),
        r
      );
    };
  }),
  se = t((e, t) => {
    t.exports = { version: `0.27.2` };
  }),
  ce = t((e, t) => {
    var n = se().version,
      r = y(),
      i = {};
    [`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
      function (e, t) {
        i[e] = function (n) {
          return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e;
        };
      },
    );
    var a = {};
    i.transitional = function (e, t, i) {
      function o(e, t) {
        return (
          `[Axios v` +
          n +
          `] Transitional option '` +
          e +
          `'` +
          t +
          (i ? `. ` + i : ``)
        );
      }
      return function (n, i, s) {
        if (e === !1)
          throw new r(
            o(i, ` has been removed` + (t ? ` in ` + t : ``)),
            r.ERR_DEPRECATED,
          );
        return (
          t &&
            !a[i] &&
            ((a[i] = !0),
            console.warn(
              o(
                i,
                ` has been deprecated since v` +
                  t +
                  ` and will be removed in the near future`,
              ),
            )),
          !e || e(n, i, s)
        );
      };
    };
    function o(e, t, n) {
      if (typeof e != `object`)
        throw new r(`options must be an object`, r.ERR_BAD_OPTION_VALUE);
      for (var i = Object.keys(e), a = i.length; a-- > 0;) {
        var o = i[a],
          s = t[o];
        if (s) {
          var c = e[o],
            l = c === void 0 || s(c, o, e);
          if (l !== !0)
            throw new r(
              `option ` + o + ` must be ` + l,
              r.ERR_BAD_OPTION_VALUE,
            );
        } else if (n !== !0)
          throw new r(`Unknown option ` + o, r.ERR_BAD_OPTION);
      }
    }
    t.exports = { assertOptions: o, validators: i };
  }),
  le = t((e, t) => {
    var n = h(),
      r = g(),
      i = _(),
      a = A(),
      o = oe(),
      s = E(),
      c = ce(),
      l = c.validators;
    function u(e) {
      ((this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() }));
    }
    ((u.prototype.request = function (e, t) {
      (typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
        (t = o(this.defaults, t)),
        t.method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
            ? (t.method = this.defaults.method.toLowerCase())
            : (t.method = `get`));
      var n = t.transitional;
      n !== void 0 &&
        c.assertOptions(
          n,
          {
            silentJSONParsing: l.transitional(l.boolean),
            forcedJSONParsing: l.transitional(l.boolean),
            clarifyTimeoutError: l.transitional(l.boolean),
          },
          !1,
        );
      var r = [],
        i = !0;
      this.interceptors.request.forEach(function (e) {
        (typeof e.runWhen != `function` || e.runWhen(t) !== !1) &&
          ((i &&= e.synchronous), r.unshift(e.fulfilled, e.rejected));
      });
      var s = [];
      this.interceptors.response.forEach(function (e) {
        s.push(e.fulfilled, e.rejected);
      });
      var u;
      if (!i) {
        var d = [a, void 0];
        for (
          Array.prototype.unshift.apply(d, r),
            d = d.concat(s),
            u = Promise.resolve(t);
          d.length;
        )
          u = u.then(d.shift(), d.shift());
        return u;
      }
      for (var f = t; r.length;) {
        var p = r.shift(),
          m = r.shift();
        try {
          f = p(f);
        } catch (e) {
          m(e);
          break;
        }
      }
      try {
        u = a(f);
      } catch (e) {
        return Promise.reject(e);
      }
      for (; s.length;) u = u.then(s.shift(), s.shift());
      return u;
    }),
      (u.prototype.getUri = function (e) {
        return (
          (e = o(this.defaults, e)),
          r(s(e.baseURL, e.url), e.params, e.paramsSerializer)
        );
      }),
      n.forEach([`delete`, `get`, `head`, `options`], function (e) {
        u.prototype[e] = function (t, n) {
          return this.request(
            o(n || {}, { method: e, url: t, data: (n || {}).data }),
          );
        };
      }),
      n.forEach([`post`, `put`, `patch`], function (e) {
        function t(t) {
          return function (n, r, i) {
            return this.request(
              o(i || {}, {
                method: e,
                headers: t ? { "Content-Type": `multipart/form-data` } : {},
                url: n,
                data: r,
              }),
            );
          };
        }
        ((u.prototype[e] = t()), (u.prototype[e + `Form`] = t(!0)));
      }),
      (t.exports = u));
  }),
  j = t((e, t) => {
    var n = ee();
    function r(e) {
      if (typeof e != `function`)
        throw TypeError(`executor must be a function.`);
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      (this.promise.then(function (e) {
        if (r._listeners) {
          var t,
            n = r._listeners.length;
          for (t = 0; t < n; t++) r._listeners[t](e);
          r._listeners = null;
        }
      }),
        (this.promise.then = function (e) {
          var t,
            n = new Promise(function (e) {
              (r.subscribe(e), (t = e));
            }).then(e);
          return (
            (n.cancel = function () {
              r.unsubscribe(t);
            }),
            n
          );
        }),
        e(function (e) {
          r.reason || ((r.reason = new n(e)), t(r.reason));
        }));
    }
    ((r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (r.prototype.subscribe = function (e) {
        this.reason
          ? e(this.reason)
          : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
      }),
      (r.prototype.unsubscribe = function (e) {
        if (this._listeners) {
          var t = this._listeners.indexOf(e);
          t !== -1 && this._listeners.splice(t, 1);
        }
      }),
      (r.source = function () {
        var e;
        return {
          token: new r(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (t.exports = r));
  }),
  M = t((e, t) => {
    t.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }),
  ue = t((e, t) => {
    var n = h();
    t.exports = function (e) {
      return n.isObject(e) && e.isAxiosError === !0;
    };
  }),
  de = t((e, t) => {
    var n = h(),
      r = m(),
      i = le(),
      a = oe(),
      o = ie();
    function s(e) {
      var t = new i(e),
        o = r(i.prototype.request, t);
      return (
        n.extend(o, i.prototype, t),
        n.extend(o, t),
        (o.create = function (t) {
          return s(a(e, t));
        }),
        o
      );
    }
    var c = s(o);
    ((c.Axios = i),
      (c.CanceledError = ee()),
      (c.CancelToken = j()),
      (c.isCancel = k()),
      (c.VERSION = se().version),
      (c.toFormData = x()),
      (c.AxiosError = y()),
      (c.Cancel = c.CanceledError),
      (c.all = function (e) {
        return Promise.all(e);
      }),
      (c.spread = M()),
      (c.isAxiosError = ue()),
      (t.exports = c),
      (t.exports.default = c));
  }),
  fe = t((e, t) => {
    t.exports = de();
  }),
  pe = class e {
    m_ulSteamID = c.UZERO;
    constructor(t = 0, n, r, i) {
      t instanceof e
        ? (this.m_ulSteamID = t.m_ulSteamID)
        : typeof t == `string`
          ? (this.m_ulSteamID = c.fromString(t, !0))
          : n && r && i !== void 0
            ? this.SetFromComponents(t ?? 0, i, r, n)
            : (this.m_ulSteamID = t ? c.fromNumber(t, !0) : c.UZERO);
    }
    static InitFromAccountID(t, n) {
      return t ? new e(Number(t), n, 1, 1) : new e();
    }
    static InitFromClanID(t, n) {
      return new e(Number(t), n, 7, 0);
    }
    static ToAccountID(t) {
      return e.ExtractAccountID(c.fromString(t, !0));
    }
    static ExtractAccountID(e) {
      return e.getLowBitsUnsigned();
    }
    GetAccountID() {
      return e.ExtractAccountID(this.m_ulSteamID);
    }
    GetInstance() {
      return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
    }
    GetAccountType() {
      return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
    }
    GetUniverse() {
      return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
    }
    ConvertTo64BitString() {
      return this.m_ulSteamID.toString();
    }
    Render() {
      switch (this.GetAccountType()) {
        case 0:
          return `[I:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
        case 7:
          return `[g:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
        case 4:
          return (
            `[A:` +
            this.GetUniverse() +
            `:` +
            this.GetAccountID() +
            `:` +
            this.GetInstance() +
            `]`
          );
        case 3:
          return `[G:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
        case 2:
          return (
            `[M:` +
            this.GetUniverse() +
            `:` +
            this.GetAccountID() +
            `:` +
            this.GetInstance() +
            `]`
          );
        case 5:
          return `[P:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
        case 6:
          return `[C:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
        default:
          return `[U:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      }
    }
    static InitFromString(t) {
      let n = new e();
      try {
        let [e, r, i, a, o] =
            t.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
          s = Number(i),
          c = Number(a),
          l = o ? Number(o) : 1;
        switch (r) {
          case `I`:
            n.SetFromComponents(c, l, 0, s);
            break;
          case `g`:
            n.SetFromComponents(c, 0, 7, s);
            break;
          case `A`:
            n.SetFromComponents(c, l, 4, s);
            break;
          case `G`:
            n.SetFromComponents(c, l, 3, s);
            break;
          case `M`:
            n.SetFromComponents(c, l, 2, s);
            break;
          case `P`:
            n.SetFromComponents(c, l, 5, s);
            break;
          case `C`:
            n.SetFromComponents(c, l, 6, s);
            break;
          case `U`:
            n.SetFromComponents(c, l, 1, s);
        }
      } catch {}
      return n;
    }
    BIsValid() {
      let e = this.GetAccountType();
      if (e <= 0 || e >= 11) return !1;
      let t = this.GetUniverse();
      if (t <= 0 || t >= 5) return !1;
      if (e == 1) {
        if (this.GetAccountID() == 0 || this.GetInstance() > 4) return !1;
      } else if (e == 7) {
        if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
      } else if (e == 3 && this.GetAccountID() == 0) return !1;
      return !0;
    }
    BIsIndividualAccount() {
      return this.GetAccountType() == 1;
    }
    BIsClanAccount() {
      return this.GetAccountType() == 7;
    }
    SetAccountID(e) {
      this.m_ulSteamID = new c(e, this.m_ulSteamID.getHighBitsUnsigned(), !0);
    }
    SetInstance(e) {
      this.SetFromComponents(
        this.GetAccountID(),
        e,
        this.GetAccountType(),
        this.GetUniverse(),
      );
    }
    SetAccountType(e) {
      this.SetFromComponents(
        this.GetAccountID(),
        this.GetInstance(),
        e,
        this.GetUniverse(),
      );
    }
    SetUniverse(e) {
      this.SetFromComponents(
        this.GetAccountID(),
        this.GetInstance(),
        this.GetAccountType(),
        e,
      );
    }
    SetFromComponents(e, t, n, r) {
      let i = ((r & 255) << 24) + ((n & 15) << 20) + (t & 1048575),
        a = e | 0;
      this.m_ulSteamID = new c(a, i, !0);
    }
  },
  me = class {
    m_strInviteCode;
    m_bReady = !1;
    m_bValid = !1;
    m_ulChatRoomGroupID;
    m_ulChatID;
    m_unAccountIDInviter;
    m_rtTimeExpires;
    m_bIsBanned;
    m_rtKickExpires;
    constructor(e) {
      (f(this), (this.m_strInviteCode = e));
    }
    BIsReady() {
      return this.m_bReady;
    }
    BIsValid() {
      return this.m_bValid;
    }
    BIsInviteLink() {
      return !!this.m_strInviteCode;
    }
    GetInviteCode() {
      return this.m_strInviteCode;
    }
    BNeverExpires() {
      return this.m_rtTimeExpires == p;
    }
    GetChatRoomGroupID() {
      return this.m_ulChatRoomGroupID;
    }
    BIsVoiceChatInvite() {
      return !!this.m_ulChatID;
    }
    GetChatID() {
      return this.m_ulChatID;
    }
    GetURL() {
      return this.m_strInviteCode ? he(this.m_strInviteCode) : null;
    }
    BIsUserBanned() {
      return this.m_bIsBanned;
    }
    GetTimeKickExpires() {
      return this.m_rtKickExpires;
    }
    get time_expires() {
      return this.m_rtTimeExpires;
    }
    InitInvalid() {
      ((this.m_bValid = !1), (this.m_bReady = !0));
    }
    InitDirectInvite(e, t, n = !1, r = void 0) {
      ((this.m_ulChatRoomGroupID = e),
        (this.m_ulChatID = t),
        (this.m_bIsBanned = n),
        (this.m_rtKickExpires = r),
        (this.m_rtTimeExpires = p),
        (this.m_bValid = !0),
        (this.m_bReady = !0));
    }
  };
(s([r], me.prototype, `m_bReady`, void 0),
  s([o], me.prototype, `InitInvalid`, null),
  s([o], me.prototype, `InitDirectInvite`, null));
function he(e) {
  return `https://s.team/chat/${e}`;
}
var ge = e(u());
if (!ge.useState)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!f)
  throw Error(
    `mobx-react-lite@3 requires mobx at least version 6 to be available`,
  );
var _e = e(n());
function ve(e) {
  e();
}
function ye(e) {
  ((e ||= ve), d({ reactionScheduler: e }));
}
function be(e) {
  return i(e);
}
var xe = !1;
function Se() {
  return xe;
}
var Ce = 1e4,
  we = 1e4,
  Te = (function () {
    function e(e) {
      var t = this;
      (Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (e) {
            (e === void 0 && (e = Ce),
              clearTimeout(t.sweepTimeout),
              (t.sweepTimeout = void 0));
            var n = Date.now();
            (t.registrations.forEach(function (r, i) {
              n - r.registeredAt >= e &&
                (t.finalize(r.value), t.registrations.delete(i));
            }),
              t.registrations.size > 0 && t.scheduleSweep());
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            t.sweep(0);
          },
        }));
    }
    return (
      Object.defineProperty(e.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e, t, n) {
          (this.registrations.set(n, { value: t, registeredAt: Date.now() }),
            this.scheduleSweep());
        },
      }),
      Object.defineProperty(e.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (e) {
          this.registrations.delete(e);
        },
      }),
      Object.defineProperty(e.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, we));
        },
      }),
      e
    );
  })(),
  Ee = new (typeof FinalizationRegistry < `u` ? FinalizationRegistry : Te)(
    function (e) {
      var t;
      ((t = e.reaction) == null || t.dispose(), (e.reaction = null));
    },
  ),
  De = t((e) => {
    var t = u();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue;
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        u = r[1];
      return (
        o(
          function () {
            ((c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c }));
          },
          [e, n, t],
        ),
        a(
          function () {
            return (
              l(c) && u({ inst: c }),
              e(function () {
                l(c) && u({ inst: c });
              })
            );
          },
          [e],
        ),
        s(n),
        n
      );
    }
    function l(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? d
        : c;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  Oe = t((e, t) => {
    t.exports = De();
  }),
  ke = Oe(),
  Ae = function () {};
function je(e) {
  e.reaction = new a(`observer${e.name}`, function () {
    var t;
    ((e.stateVersion = Symbol()), (t = e.onStoreChange) == null || t.call(e));
  });
}
function Me(e, t) {
  if ((t === void 0 && (t = `observed`), Se())) return e();
  var n = ge.useRef(null);
  if (!n.current) {
    var r = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: t,
      subscribe: function (e) {
        return (
          Ee.unregister(r),
          (r.onStoreChange = e),
          r.reaction || (je(r), (r.stateVersion = Symbol())),
          function () {
            var e;
            ((r.onStoreChange = null),
              (e = r.reaction) == null || e.dispose(),
              (r.reaction = null));
          }
        );
      },
      getSnapshot: function () {
        return r.stateVersion;
      },
    };
    n.current = r;
  }
  var i = n.current;
  (i.reaction || (je(i), Ee.register(n, i, i)),
    ge.useDebugValue(i.reaction, be),
    (0, ke.useSyncExternalStore)(i.subscribe, i.getSnapshot, Ae));
  var a, o;
  if (
    (i.reaction.track(function () {
      try {
        a = e();
      } catch (e) {
        o = e;
      }
    }),
    o)
  )
    throw o;
  return a;
}
var Ne = typeof Symbol == `function` && Symbol.for,
  Pe = Ne
    ? Symbol.for(`react.forward_ref`)
    : typeof ge.forwardRef == `function` &&
      (0, ge.forwardRef)(function (e) {
        return null;
      }).$$typeof,
  Fe = Ne
    ? Symbol.for(`react.memo`)
    : typeof ge.memo == `function` &&
      (0, ge.memo)(function (e) {
        return null;
      }).$$typeof;
function Ie(e, t) {
  if (Fe && e.$$typeof === Fe)
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (Se()) return e;
  var n = t?.forwardRef ?? !1,
    r = e,
    i = e.displayName || e.name;
  if (
    Pe &&
    e.$$typeof === Pe &&
    ((n = !0), (r = e.render), typeof r != `function`)
  )
    throw Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var a = function (e, t) {
    return Me(function () {
      return r(e, t);
    }, i);
  };
  return (
    (a.displayName = e.displayName),
    Object.defineProperty(a, "name", {
      value: e.name,
      writable: !0,
      configurable: !0,
    }),
    e.contextTypes && (a.contextTypes = e.contextTypes),
    n && (a = (0, ge.forwardRef)(a)),
    (a = (0, ge.memo)(a)),
    Re(e, a),
    a
  );
}
var Le = { $$typeof: !0, render: !0, compare: !0, type: !0, displayName: !0 };
function Re(e, t) {
  Object.keys(e).forEach(function (n) {
    Le[n] || Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  });
}
(ye(_e.unstable_batchedUpdates), Ee.finalizeAllImmediately);
function ze(e, t) {
  return (t === void 0 && (t = `observed`), Me(e, t));
}
function Be(e, t) {
  if (Ve(e, t)) return !0;
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (var i = 0; i < n.length; i++)
    if (!Object.hasOwnProperty.call(t, n[i]) || !Ve(e[n[i]], t[n[i]]))
      return !1;
  return !0;
}
function Ve(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var He = Symbol(`patchMixins`),
  Ue = Symbol(`patchedDefinition`);
function We(e, t) {
  var n = (e[He] = e[He] || {}),
    r = (n[t] = n[t] || {});
  return ((r.locks = r.locks || 0), (r.methods = r.methods || []), r);
}
function Ge(e, t) {
  var n = this,
    r = [...arguments].slice(2);
  t.locks++;
  try {
    var i;
    return (e != null && (i = e.apply(this, r)), i);
  } finally {
    (t.locks--,
      t.locks === 0 &&
        t.methods.forEach(function (e) {
          e.apply(n, r);
        }));
  }
}
function Ke(e, t) {
  return function () {
    var n = [...arguments];
    Ge.call.apply(Ge, [this, e, t].concat(n));
  };
}
function qe(e, t, n) {
  var r = We(e, t);
  r.methods.indexOf(n) < 0 && r.methods.push(n);
  var i = Object.getOwnPropertyDescriptor(e, t);
  if (!(i && i[Ue])) {
    var a = e[t],
      o = Je(e, t, i ? i.enumerable : void 0, r, a);
    Object.defineProperty(e, t, o);
  }
}
function Je(e, t, n, r, i) {
  var a,
    o = Ke(i, r);
  return (
    (a = {}),
    (a[Ue] = !0),
    (a.get = function () {
      return o;
    }),
    (a.set = function (i) {
      if (this === e) o = Ke(i, r);
      else {
        var a = Je(this, t, n, r, i);
        Object.defineProperty(this, t, a);
      }
    }),
    (a.configurable = !0),
    (a.enumerable = n),
    a
  );
}
var Ye = Symbol(`ObserverAdministration`),
  Xe = Symbol(`isMobXReactObserver`);
function Ze(e) {
  return (
    e[Ye] ??
    (e[Ye] = {
      reaction: null,
      mounted: !1,
      reactionInvalidatedBeforeMount: !1,
      forceUpdate: null,
      name: $e(e.constructor),
      state: void 0,
      props: void 0,
      context: void 0,
    })
  );
}
function Qe(e) {
  var t = e.prototype;
  if (e[Xe]) {
    var n = $e(e);
    throw Error(
      `The provided component class (` +
        n +
        `) has already been declared as an observer component.`,
    );
  }
  if (((e[Xe] = !0), t.componentWillReact))
    throw Error(
      `The componentWillReact life-cycle event is no longer supported`,
    );
  if (e.__proto__ !== ge.PureComponent) {
    if (!t.shouldComponentUpdate) t.shouldComponentUpdate = nt;
    else if (t.shouldComponentUpdate !== nt)
      throw Error(
        `It is not allowed to use shouldComponentUpdate in observer based components.`,
      );
  }
  var r = t.render;
  if (typeof r != `function`) {
    var i = $e(e);
    throw Error(
      `[mobx-react] class component (` +
        i +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  t.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: Se() ? r : et.call(this, r),
      }),
      this.render()
    );
  };
  var a = t.componentDidMount;
  return (
    (t.componentDidMount = function () {
      var e = this,
        t = Ze(this);
      return (
        (t.mounted = !0),
        Ee.unregister(this),
        (t.forceUpdate = function () {
          return e.forceUpdate();
        }),
        (!t.reaction || t.reactionInvalidatedBeforeMount) && t.forceUpdate(),
        a?.apply(this, arguments)
      );
    }),
    qe(t, `componentWillUnmount`, function () {
      var e;
      if (!Se()) {
        var t = Ze(this);
        ((e = t.reaction) == null || e.dispose(),
          (t.reaction = null),
          (t.forceUpdate = null),
          (t.mounted = !1),
          (t.reactionInvalidatedBeforeMount = !1));
      }
    }),
    e
  );
}
function $e(e) {
  return e.displayName || e.name || `<component>`;
}
function et(e) {
  var t = e.bind(this),
    n = Ze(this);
  function r() {
    n.reaction ||
      ((n.reaction = tt(n)), n.mounted || Ee.register(this, n, this));
    var e = void 0,
      r = void 0;
    if (
      (n.reaction.track(function () {
        try {
          r = l(!1, t);
        } catch (t) {
          e = t;
        }
      }),
      e)
    )
      throw e;
    return r;
  }
  return r;
}
function tt(e) {
  return new a(e.name + `.render()`, function () {
    if (!e.mounted) e.reactionInvalidatedBeforeMount = !0;
    else
      try {
        e.forceUpdate == null || e.forceUpdate();
      } catch {
        var t;
        ((t = e.reaction) == null || t.dispose(), (e.reaction = null));
      }
  });
}
function nt(e, t) {
  return (
    Se() &&
      console.warn(
        `[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.`,
      ),
    this.state !== t || !Be(this.props, e)
  );
}
function rt(e, t) {
  if (t && t.kind !== `class`)
    throw Error(`The @observer decorator can be used on classes only`);
  return (
    e.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(ge.Component, e) ||
    Object.prototype.isPrototypeOf.call(ge.PureComponent, e)
      ? Qe(e)
      : Ie(e)
  );
}
if ((`19.1.1`.split(`.`)[0], !ge.Component))
  throw Error(`mobx-react requires React to be available`);
if (!r) throw Error(`mobx-react requires mobx to be available`);
var it = t((e, t, n) => {
    (function (n, r) {
      var i = `1.0.41`,
        a = ``,
        o = `function`,
        s = `undefined`,
        c = `object`,
        l = `string`,
        u = `major`,
        d = `model`,
        f = `name`,
        p = `type`,
        m = `vendor`,
        h = `version`,
        g = `architecture`,
        _ = `console`,
        v = `mobile`,
        y = `tablet`,
        b = `smarttv`,
        x = `wearable`,
        S = `embedded`,
        C = `Amazon`,
        w = `Apple`,
        T = `ASUS`,
        E = `BlackBerry`,
        D = `Browser`,
        O = `Chrome`,
        ee = `Edge`,
        te = `Firefox`,
        ne = `Google`,
        re = `Honor`,
        ie = `Huawei`,
        ae = `Lenovo`,
        k = `LG`,
        A = `Microsoft`,
        oe = `Motorola`,
        se = `Nvidia`,
        ce = `OnePlus`,
        le = `Opera`,
        j = `OPPO`,
        M = `Samsung`,
        ue = `Sharp`,
        de = `Sony`,
        fe = `Xiaomi`,
        pe = `Zebra`,
        me = `Facebook`,
        he = `Chromium OS`,
        ge = `Mac OS`,
        _e = ` Browser`,
        ve = function (e, t) {
          var n = {};
          for (var r in e)
            n[r] = t[r] && t[r].length % 2 == 0 ? t[r].concat(e[r]) : e[r];
          return n;
        },
        ye = function (e) {
          for (var t = {}, n = 0; n < e.length; n++)
            t[e[n].toUpperCase()] = e[n];
          return t;
        },
        be = function (e, t) {
          return typeof e == l && xe(t).indexOf(xe(e)) !== -1;
        },
        xe = function (e) {
          return e.toLowerCase();
        },
        Se = function (e) {
          return typeof e == l ? e.replace(/[^\d\.]/g, a).split(`.`)[0] : r;
        },
        Ce = function (e, t) {
          if (typeof e == l)
            return (
              (e = e.replace(/^\s\s*/, a)),
              typeof t === s ? e : e.substring(0, 500)
            );
        },
        we = function (e, t) {
          for (var n = 0, i, a, s, l, u, d; n < t.length && !u;) {
            var f = t[n],
              p = t[n + 1];
            for (i = a = 0; i < f.length && !u && f[i];)
              if (((u = f[i++].exec(e)), u))
                for (s = 0; s < p.length; s++)
                  ((d = u[++a]),
                    (l = p[s]),
                    typeof l == c && l.length > 0
                      ? l.length === 2
                        ? typeof l[1] == o
                          ? (this[l[0]] = l[1].call(this, d))
                          : (this[l[0]] = l[1])
                        : l.length === 3
                          ? typeof l[1] === o && !(l[1].exec && l[1].test)
                            ? (this[l[0]] = d ? l[1].call(this, d, l[2]) : r)
                            : (this[l[0]] = d ? d.replace(l[1], l[2]) : r)
                          : l.length === 4 &&
                            (this[l[0]] = d
                              ? l[3].call(this, d.replace(l[1], l[2]))
                              : r)
                      : (this[l] = d || r));
            n += 2;
          }
        },
        Te = function (e, t) {
          for (var n in t)
            if (typeof t[n] == c && t[n].length > 0) {
              for (var i = 0; i < t[n].length; i++)
                if (be(t[n][i], e)) return n === `?` ? r : n;
            } else if (be(t[n], e)) return n === `?` ? r : n;
          return t.hasOwnProperty(`*`) ? t[`*`] : e;
        },
        Ee = {
          "1.0": `/8`,
          1.2: `/1`,
          1.3: `/3`,
          "2.0": `/412`,
          "2.0.2": `/416`,
          "2.0.3": `/417`,
          "2.0.4": `/419`,
          "?": `/`,
        },
        De = {
          ME: `4.90`,
          "NT 3.11": `NT3.51`,
          "NT 4.0": `NT4.0`,
          2e3: `NT 5.0`,
          XP: [`NT 5.1`, `NT 5.2`],
          Vista: `NT 6.0`,
          7: `NT 6.1`,
          8: `NT 6.2`,
          8.1: `NT 6.3`,
          10: [`NT 6.4`, `NT 10.0`],
          RT: `ARM`,
        },
        Oe = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [h, [f, `Chrome`]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [h, [f, `Edge`]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [f, h],
            [/opios[\/ ]+([\w\.]+)/i],
            [h, [f, le + ` Mini`]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [h, [f, le + ` GX`]],
            [/\bopr\/([\w\.]+)/i],
            [h, [f, le]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [h, [f, `Baidu`]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [h, [f, `Maxthon`]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
              /(heytap|ovi|115)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [f, h],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [h, [f, `Quark`]],
            [/\bddg\/([\w\.]+)/i],
            [h, [f, `DuckDuckGo`]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [h, [f, `UC` + D]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [h, [f, `WeChat`]],
            [/konqueror\/([\w\.]+)/i],
            [h, [f, `Konqueror`]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [h, [f, `IE`]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [h, [f, `Yandex`]],
            [/slbrowser\/([\w\.]+)/i],
            [h, [f, `Smart Lenovo ` + D]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[f, /(.+)/, `$1 Secure ` + D], h],
            [/\bfocus\/([\w\.]+)/i],
            [h, [f, te + ` Focus`]],
            [/\bopt\/([\w\.]+)/i],
            [h, [f, le + ` Touch`]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [h, [f, `Coc Coc`]],
            [/dolfin\/([\w\.]+)/i],
            [h, [f, `Dolphin`]],
            [/coast\/([\w\.]+)/i],
            [h, [f, le + ` Coast`]],
            [/miuibrowser\/([\w\.]+)/i],
            [h, [f, `MIUI` + _e]],
            [/fxios\/([\w\.-]+)/i],
            [h, [f, te]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [h, [f, `360`]],
            [/\b(qq)\/([\w\.]+)/i],
            [[f, /(.+)/, `$1Browser`], h],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[f, /(.+)/, `$1` + _e], h],
            [/samsungbrowser\/([\w\.]+)/i],
            [h, [f, M + ` Internet`]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [h, [f, `Sogou Explorer`]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[f, `Sogou Mobile`], h],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [f, h],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [f],
            [
              /ome\/([\w\.]+) \w* ?(iron) saf/i,
              /ome\/([\w\.]+).+qihu (360)[es]e/i,
            ],
            [h, f],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[f, me], h],
            [
              /(Klarna)\/([\w\.]+)/i,
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /(daum)apps[\/ ]([\w\.]+)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
            ],
            [f, h],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [h, [f, `GSA`]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [h, [f, `TikTok`]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [h, [f, O + ` Headless`]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[f, O + ` WebView`], h],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [h, [f, `Android ` + D]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [f, h],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [h, [f, `Mobile Safari`]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [h, f],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [f, [h, Te, Ee]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [f, h],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[f, `Netscape`], h],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [f, h],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [h, [f, te + ` Reality`]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /\b(links) \(([\w\.]+)/i,
            ],
            [f, [h, /_/g, `.`]],
            [/(cobalt)\/([\w\.]+)/i],
            [f, [h, /master.|lts./, ``]],
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[g, `amd64`]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[g, `ia32`]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[g, `arm64`]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[g, `armhf`]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[g, `arm`]],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [[g, /ower/, a, xe]],
            [/ sun4\w[;\)]/i],
            [[g, `sparc`]],
            [
              /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            ],
            [[g, xe]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [d, [m, M], [p, y]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr])[-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [d, [m, M], [p, v]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [d, [m, w], [p, v]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [d, [m, w], [p, y]],
            [/(macintosh);/i],
            [d, [m, w]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [d, [m, ue], [p, v]],
            [
              /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
            ],
            [d, [m, re], [p, y]],
            [/honor([-\w ]+)[;\)]/i],
            [d, [m, re], [p, v]],
            [
              /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [d, [m, ie], [p, y]],
            [
              /(?:huawei)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [d, [m, ie], [p, v]],
            [
              /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
              /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
              [d, /_/g, ` `],
              [m, fe],
              [p, y],
            ],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              / ([\w ]+) miui\/v?\d/i,
            ],
            [
              [d, /_/g, ` `],
              [m, fe],
              [p, v],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [d, [m, j], [p, v]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [d, [m, Te, { OnePlus: [`304`, `403`, `203`], "*": j }], [p, y]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [d, [m, `Vivo`], [p, v]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [d, [m, `Realme`], [p, v]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [d, [m, oe], [p, v]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [d, [m, oe], [p, y]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [d, [m, k], [p, y]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [d, [m, k], [p, v]],
            [
              /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
              /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [d, [m, ae], [p, y]],
            [/(nokia) (t[12][01])/i],
            [m, d, [p, y]],
            [
              /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
              /nokia[-_ ]?(([-\w\. ]*))/i,
            ],
            [
              [d, /_/g, ` `],
              [p, v],
              [m, `Nokia`],
            ],
            [/(pixel (c|tablet))\b/i],
            [d, [m, ne], [p, y]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [d, [m, ne], [p, v]],
            [
              /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [d, [m, de], [p, v]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [d, `Xperia Tablet`],
              [m, de],
              [p, y],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [d, [m, ce], [p, v]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [d, [m, C], [p, y]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [d, /(.+)/g, `Fire Phone $1`],
              [m, C],
              [p, v],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [d, m, [p, y]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [d, [m, E], [p, v]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [d, [m, T], [p, y]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [d, [m, T], [p, v]],
            [/(nexus 9)/i],
            [d, [m, `HTC`], [p, y]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [m, [d, /_/g, ` `], [p, v]],
            [
              /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
            ],
            [d, [m, `TCL`], [p, y]],
            [/(itel) ((\w+))/i],
            [
              [m, xe],
              d,
              [p, Te, { tablet: [`p10001l`, `w7001`], "*": `mobile` }],
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [d, [m, `Acer`], [p, y]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [d, [m, `Meizu`], [p, v]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [d, [m, `Ulefone`], [p, v]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [d, [m, `Energizer`], [p, v]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [d, [m, `Cat`], [p, v]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [d, [m, `Smartfren`], [p, v]],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [d, [m, `Nothing`], [p, v]],
            [
              /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
              /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [d, [m, `Archos`], [p, y]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [d, [m, `Archos`], [p, v]],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [m, d, [p, y]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
              /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
              /(hp) ([\w ]+\w)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [m, d, [p, v]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [m, d, [p, y]],
            [/(surface duo)/i],
            [d, [m, A], [p, y]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [d, [m, `Fairphone`], [p, v]],
            [/(u304aa)/i],
            [d, [m, `AT&T`], [p, v]],
            [/\bsie-(\w*)/i],
            [d, [m, `Siemens`], [p, v]],
            [/\b(rct\w+) b/i],
            [d, [m, `RCA`], [p, y]],
            [/\b(venue[\d ]{2,7}) b/i],
            [d, [m, `Dell`], [p, y]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [d, [m, `Verizon`], [p, y]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [d, [m, `Barnes & Noble`], [p, y]],
            [/\b(tm\d{3}\w+) b/i],
            [d, [m, `NuVision`], [p, y]],
            [/\b(k88) b/i],
            [d, [m, `ZTE`], [p, y]],
            [/\b(nx\d{3}j) b/i],
            [d, [m, `ZTE`], [p, v]],
            [/\b(gen\d{3}) b.+49h/i],
            [d, [m, `Swiss`], [p, v]],
            [/\b(zur\d{3}) b/i],
            [d, [m, `Swiss`], [p, y]],
            [/\b((zeki)?tb.*\b) b/i],
            [d, [m, `Zeki`], [p, y]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[m, `Dragon Touch`], d, [p, y]],
            [/\b(ns-?\w{0,9}) b/i],
            [d, [m, `Insignia`], [p, y]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [d, [m, `NextBook`], [p, y]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[m, `Voice`], d, [p, v]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[m, `LvTel`], d, [p, v]],
            [/\b(ph-1) /i],
            [d, [m, `Essential`], [p, v]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [d, [m, `Envizen`], [p, y]],
            [/\b(trio[-\w\. ]+) b/i],
            [d, [m, `MachSpeed`], [p, y]],
            [/\btu_(1491) b/i],
            [d, [m, `Rotor`], [p, y]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [d, [m, se], [p, y]],
            [/(sprint) (\w+)/i],
            [m, d, [p, v]],
            [/(kin\.[onetw]{3})/i],
            [
              [d, /\./g, ` `],
              [m, A],
              [p, v],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [d, [m, pe], [p, y]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [d, [m, pe], [p, v]],
            [/smart-tv.+(samsung)/i],
            [m, [p, b]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [d, /^/, `SmartTV`],
              [m, M],
              [p, b],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [m, k],
              [p, b],
            ],
            [/(apple) ?tv/i],
            [m, [d, w + ` TV`], [p, b]],
            [/crkey/i],
            [
              [d, O + `cast`],
              [m, ne],
              [p, b],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [d, [m, C], [p, b]],
            [/(shield \w+ tv)/i],
            [d, [m, se], [p, b]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [d, [m, ue], [p, b]],
            [/(bravia[\w ]+)( bui|\))/i],
            [d, [m, de], [p, b]],
            [/(mi(tv|box)-?\w+) bui/i],
            [d, [m, fe], [p, b]],
            [/Hbbtv.*(technisat) (.*);/i],
            [m, d, [p, b]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [m, Ce],
              [d, Ce],
              [p, b],
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [d, [p, b]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[p, b]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [m, d, [p, _]],
            [/droid.+; (shield)( bui|\))/i],
            [d, [m, se], [p, _]],
            [/(playstation \w+)/i],
            [d, [m, de], [p, _]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [d, [m, A], [p, _]],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [d, [m, M], [p, x]],
            [
              /((pebble))app/i,
              /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
            ],
            [m, d, [p, x]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [d, [m, j], [p, x]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [d, [m, w], [p, x]],
            [/(opwwe\d{3})/i],
            [d, [m, ce], [p, x]],
            [/(moto 360)/i],
            [d, [m, oe], [p, x]],
            [/(smartwatch 3)/i],
            [d, [m, de], [p, x]],
            [/(g watch r)/i],
            [d, [m, k], [p, x]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [d, [m, pe], [p, x]],
            [/droid.+; (glass) \d/i],
            [d, [m, ne], [p, x]],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [m, d, [p, x]],
            [/; (quest( \d| pro)?)/i],
            [d, [m, me], [p, x]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [m, [p, S]],
            [/(aeobc)\b/i],
            [d, [m, C], [p, S]],
            [/(homepod).+mac os/i],
            [d, [m, w], [p, S]],
            [/windows iot/i],
            [[p, S]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [d, [p, v]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [d, [p, y]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[p, y]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[p, v]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [d, [m, `Generic`]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [h, [f, ee + `HTML`]],
            [/(arkweb)\/([\w\.]+)/i],
            [f, h],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [h, [f, `Blink`]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [f, h],
            [/ladybird\//i],
            [[f, `LibWeb`]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [h, f],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [f, h],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [f, [h, Te, De]],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
            ],
            [
              [h, Te, De],
              [f, `Windows`],
            ],
            [
              /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [h, /_/g, `.`],
              [f, `iOS`],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [f, ge],
              [h, /_/g, `.`],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [h, f],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[f, /(.+)/, `$1 Touch`], h],
            [
              /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
            ],
            [f, h],
            [/\(bb(10);/i],
            [h, [f, E]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [h, [f, `Symbian`]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [h, [f, te + ` OS`]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [h, [f, `webOS`]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [h, [f, `watchOS`]],
            [/crkey\/([\d\.]+)/i],
            [h, [f, O + `cast`]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[f, he], h],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [f, h],
            [/(sunos) ?([\w\.\d]*)/i],
            [[f, `Solaris`], h],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [f, h],
          ],
        },
        ke = function (e, t) {
          if ((typeof e == c && ((t = e), (e = r)), !(this instanceof ke)))
            return new ke(e, t).getResult();
          var i = typeof n !== s && n.navigator ? n.navigator : r,
            _ = e || (i && i.userAgent ? i.userAgent : a),
            b = i && i.userAgentData ? i.userAgentData : r,
            x = t ? ve(Oe, t) : Oe,
            S = i && i.userAgent == _;
          return (
            (this.getBrowser = function () {
              var e = {};
              return (
                (e[f] = r),
                (e[h] = r),
                we.call(e, _, x.browser),
                (e[u] = Se(e[h])),
                S &&
                  i &&
                  i.brave &&
                  typeof i.brave.isBrave == o &&
                  (e[f] = `Brave`),
                e
              );
            }),
            (this.getCPU = function () {
              var e = {};
              return ((e[g] = r), we.call(e, _, x.cpu), e);
            }),
            (this.getDevice = function () {
              var e = {};
              return (
                (e[m] = r),
                (e[d] = r),
                (e[p] = r),
                we.call(e, _, x.device),
                S && !e[p] && b && b.mobile && (e[p] = v),
                S &&
                  e[d] == `Macintosh` &&
                  i &&
                  typeof i.standalone !== s &&
                  i.maxTouchPoints &&
                  i.maxTouchPoints > 2 &&
                  ((e[d] = `iPad`), (e[p] = y)),
                e
              );
            }),
            (this.getEngine = function () {
              var e = {};
              return ((e[f] = r), (e[h] = r), we.call(e, _, x.engine), e);
            }),
            (this.getOS = function () {
              var e = {};
              return (
                (e[f] = r),
                (e[h] = r),
                we.call(e, _, x.os),
                S &&
                  !e[f] &&
                  b &&
                  b.platform &&
                  b.platform != `Unknown` &&
                  (e[f] = b.platform
                    .replace(/chrome os/i, he)
                    .replace(/macos/i, ge)),
                e
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return _;
            }),
            (this.setUA = function (e) {
              return (
                (_ = typeof e == l && e.length > 500 ? Ce(e, 500) : e), this
              );
            }),
            this.setUA(_),
            this
          );
        };
      ((ke.VERSION = i),
        (ke.BROWSER = ye([f, h, u])),
        (ke.CPU = ye([g])),
        (ke.DEVICE = ye([d, m, p, _, v, b, y, x, S])),
        (ke.ENGINE = ke.OS = ye([f, h])),
        typeof e === s
          ? typeof define === o && define.amd
            ? define(function () {
                return ke;
              })
            : typeof n !== s && (n.UAParser = ke)
          : (typeof t !== s && t.exports && (e = t.exports = ke),
            (e.UAParser = ke)));
      var Ae = typeof n !== s && (n.jQuery || n.Zepto);
      if (Ae && !Ae.ua) {
        var je = new ke();
        ((Ae.ua = je.getResult()),
          (Ae.ua.get = function () {
            return je.getUA();
          }),
          (Ae.ua.set = function (e) {
            je.setUA(e);
            var t = je.getResult();
            for (var n in t) Ae.ua[n] = t[n];
          }));
      }
    })(typeof window == `object` ? window : n);
  }),
  at = t((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  ot = t((e, t) => {
    t.exports = at();
  }),
  st = t((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), S || ((S = !0), O()));
        else {
          var t = n(l);
          t !== null && ne(x, t.startTime - e);
        }
      }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1;
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }
    function D() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        T = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && E());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ne(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? O() : (S = !1);
        }
      }
    }
    var O;
    if (typeof y == `function`)
      O = function () {
        y(D);
      };
    else if (typeof MessageChannel < `u`) {
      var ee = new MessageChannel(),
        te = ee.port2;
      ((ee.port1.onmessage = D),
        (O = function () {
          te.postMessage(null);
        }));
    } else
      O = function () {
        _(D, 0);
      };
    function ne(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), ne(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), O()))),
          r
        );
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  ct = t((e, t) => {
    t.exports = st();
  }),
  lt = t((e) => {
    var t = ct(),
      r = u(),
      i = n();
    function a(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function o(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function s(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function c(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (s(e) !== e) throw Error(a(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = s(e)), t === null)) throw Error(a(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === o.child) {
          for (o = i.child; o;) {
            if (o === n) return (l(i), e);
            if (o === r) return (l(i), t);
            o = o.sibling;
          }
          throw Error(a(188));
        }
        if (n.return !== r.return) ((n = i), (r = o));
        else {
          for (var c = !1, u = i.child; u;) {
            if (u === n) {
              ((c = !0), (n = i), (r = o));
              break;
            }
            if (u === r) {
              ((c = !0), (r = i), (n = o));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = o.child; u;) {
              if (u === n) {
                ((c = !0), (n = o), (r = i));
                break;
              }
              if (u === r) {
                ((c = !0), (r = o), (n = i));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(a(189));
          }
        }
        if (n.alternate !== r) throw Error(a(190));
      }
      if (n.tag !== 3) throw Error(a(188));
      return n.stateNode.current === n ? e : t;
    }
    function f(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = f(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var p = Object.assign,
      m = Symbol.for(`react.element`),
      h = Symbol.for(`react.transitional.element`),
      g = Symbol.for(`react.portal`),
      _ = Symbol.for(`react.fragment`),
      v = Symbol.for(`react.strict_mode`),
      y = Symbol.for(`react.profiler`),
      b = Symbol.for(`react.provider`),
      x = Symbol.for(`react.consumer`),
      S = Symbol.for(`react.context`),
      C = Symbol.for(`react.forward_ref`),
      w = Symbol.for(`react.suspense`),
      T = Symbol.for(`react.suspense_list`),
      E = Symbol.for(`react.memo`),
      D = Symbol.for(`react.lazy`),
      O = Symbol.for(`react.activity`),
      ee = Symbol.for(`react.memo_cache_sentinel`),
      te = Symbol.iterator;
    function ne(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (te && e[te]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var re = Symbol.for(`react.client.reference`);
    function ie(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case _:
          return `Fragment`;
        case y:
          return `Profiler`;
        case v:
          return `StrictMode`;
        case w:
          return `Suspense`;
        case T:
          return `SuspenseList`;
        case O:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case g:
            return `Portal`;
          case S:
            return (e.displayName || `Context`) + `.Provider`;
          case x:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case C:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case E:
            return (
              (t = e.displayName || null), t === null ? ie(e.type) || `Memo` : t
            );
          case D:
            ((t = e._payload), (e = e._init));
            try {
              return ie(e(t));
            } catch {}
        }
      return null;
    }
    var ae = Array.isArray,
      k = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      A = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      oe = { pending: !1, data: null, method: null, action: null },
      se = [],
      ce = -1;
    function le(e) {
      return { current: e };
    }
    function j(e) {
      0 > ce || ((e.current = se[ce]), (se[ce] = null), ce--);
    }
    function M(e, t) {
      (ce++, (se[ce] = e.current), (e.current = t));
    }
    var ue = le(null),
      de = le(null),
      fe = le(null),
      pe = le(null);
    function me(e, t) {
      switch ((M(fe, t), M(de, e), M(ue, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Dd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = Dd(t)), (e = Od(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (j(ue), M(ue, e));
    }
    function he() {
      (j(ue), j(de), j(fe));
    }
    function ge(e) {
      e.memoizedState !== null && M(pe, e);
      var t = ue.current,
        n = Od(t, e.type);
      t !== n && (M(de, e), M(ue, n));
    }
    function _e(e) {
      (de.current === e && (j(ue), j(de)),
        pe.current === e && (j(pe), (Ff._currentValue = oe)));
    }
    var ve = Object.prototype.hasOwnProperty,
      ye = t.unstable_scheduleCallback,
      be = t.unstable_cancelCallback,
      xe = t.unstable_shouldYield,
      Se = t.unstable_requestPaint,
      Ce = t.unstable_now,
      we = t.unstable_getCurrentPriorityLevel,
      Te = t.unstable_ImmediatePriority,
      Ee = t.unstable_UserBlockingPriority,
      De = t.unstable_NormalPriority,
      Oe = t.unstable_LowPriority,
      ke = t.unstable_IdlePriority,
      Ae = t.log,
      je = t.unstable_setDisableYieldValue,
      Me = null,
      Ne = null;
    function Pe(e) {
      if (
        (typeof Ae == `function` && je(e),
        Ne && typeof Ne.setStrictMode == `function`)
      )
        try {
          Ne.setStrictMode(Me, e);
        } catch {}
    }
    var Fe = Math.clz32 ? Math.clz32 : Re,
      Ie = Math.log,
      Le = Math.LN2;
    function Re(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ie(e) / Le) | 0)) | 0);
    }
    var ze = 256,
      Be = 4194304;
    function Ve(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
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
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
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
          return e;
      }
    }
    function He(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Ve(n)))
                : (i = Ve(o))
              : (i = Ve(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Ve(n)))
                  : (i = Ve(o)))
              : (i = Ve(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function Ue(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function We(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
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
          return t + 5e3;
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
    function Ge() {
      var e = ze;
      return ((ze <<= 1), !(ze & 4194048) && (ze = 256), e);
    }
    function Ke() {
      var e = Be;
      return ((Be <<= 1), !(Be & 62914560) && (Be = 4194304), e);
    }
    function qe(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Je(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Ye(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - Fe(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && Xe(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function Xe(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Fe(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 4194090)));
    }
    function Ze(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Fe(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function Qe(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function $e(e) {
      return (
        (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function et() {
      var e = A.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : Xf(e.type)) : e;
    }
    function tt(e, t) {
      var n = A.p;
      try {
        return ((A.p = e), t());
      } finally {
        A.p = n;
      }
    }
    var nt = Math.random().toString(36).slice(2),
      rt = `__reactFiber$` + nt,
      it = `__reactProps$` + nt,
      at = `__reactContainer$` + nt,
      ot = `__reactEvents$` + nt,
      st = `__reactListeners$` + nt,
      lt = `__reactHandles$` + nt,
      ut = `__reactResources$` + nt,
      dt = `__reactMarker$` + nt;
    function ft(e) {
      (delete e[rt], delete e[it], delete e[ot], delete e[st], delete e[lt]);
    }
    function pt(e) {
      var t = e[rt];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[at] || n[rt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = Kd(e); e !== null;) {
              if ((n = e[rt])) return n;
              e = Kd(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function mt(e) {
      if ((e = e[rt] || e[at])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function ht(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(a(33));
    }
    function gt(e) {
      var t = e[ut];
      return (
        (t ||= e[ut] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function _t(e) {
      e[dt] = !0;
    }
    var vt = new Set(),
      yt = {};
    function bt(e, t) {
      (xt(e, t), xt(e + `Capture`, t));
    }
    function xt(e, t) {
      for (yt[e] = t, e = 0; e < t.length; e++) vt.add(t[e]);
    }
    var St = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Ct = {},
      wt = {};
    function Tt(e) {
      return ve.call(wt, e)
        ? !0
        : ve.call(Ct, e)
          ? !1
          : St.test(e)
            ? (wt[e] = !0)
            : ((Ct[e] = !0), !1);
    }
    function Et(e, t, n) {
      if (Tt(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
      }
    }
    function Dt(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function Ot(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    var kt, At;
    function jt(e) {
      if (kt === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((kt = (t && t[1]) || ``),
            (At =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        kt +
        e +
        At
      );
    }
    var Mt = !1;
    function Nt(e, t) {
      if (!e || Mt) return ``;
      Mt = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Mt = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? jt(n) : ``;
    }
    function Pt(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return jt(e.type);
        case 16:
          return jt(`Lazy`);
        case 13:
          return jt(`Suspense`);
        case 19:
          return jt(`SuspenseList`);
        case 0:
        case 15:
          return Nt(e.type, !1);
        case 11:
          return Nt(e.type.render, !1);
        case 1:
          return Nt(e.type, !0);
        case 31:
          return jt(`Activity`);
        default:
          return ``;
      }
    }
    function Ft(e) {
      try {
        var t = ``;
        do ((t += Pt(e)), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    function It(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Lt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function Rt(e) {
      var t = Lt(e) ? `checked` : `value`,
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = `` + e[t];
      if (
        !e.hasOwnProperty(t) &&
        n !== void 0 &&
        typeof n.get == `function` &&
        typeof n.set == `function`
      ) {
        var i = n.get,
          a = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((r = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function zt(e) {
      e._valueTracker ||= Rt(e);
    }
    function Bt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Lt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Vt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ht = /[\n"\\]/g;
    function Ut(e) {
      return e.replace(Ht, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Wt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + It(t))
            : e.value !== `` + It(t) && (e.value = `` + It(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Kt(e, o, It(n))
          : Kt(e, o, It(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + It(s))
          : e.removeAttribute(`name`));
    }
    function Gt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) return;
        ((n = n == null ? `` : `` + It(n)),
          (t = t == null ? n : `` + It(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o));
    }
    function Kt(e, t, n) {
      (t === `number` && Vt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function qt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + It(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Jt(e, t, n) {
      t != null && ((t = `` + It(t)), t !== e.value && (e.value = t), n == null)
        ? e.defaultValue !== t && (e.defaultValue = t)
        : (e.defaultValue = n == null ? `` : `` + It(n));
    }
    function Yt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(a(92));
          if (ae(r)) {
            if (1 < r.length) throw Error(a(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = It(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r));
    }
    function Xt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Zt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Qt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Zt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function $t(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(a(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var i in t)
          ((r = t[i]), t.hasOwnProperty(i) && n[i] !== r && Qt(e, i, r));
      } else for (var o in t) t.hasOwnProperty(o) && Qt(e, o, t[o]);
    }
    function en(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
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
    var tn = new Map([
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
      nn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function rn(e) {
      return nn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    var an = null;
    function on(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var sn = null,
      cn = null;
    function ln(e) {
      var t = mt(e);
      if (t && (e = t.stateNode)) {
        var n = e[it] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Wt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Ut(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = r[it] || null;
                  if (!i) throw Error(a(90));
                  Wt(
                    r,
                    i.value,
                    i.defaultValue,
                    i.defaultValue,
                    i.checked,
                    i.defaultChecked,
                    i.type,
                    i.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && Bt(r));
            }
            break a;
          case `textarea`:
            Jt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && qt(e, !!n.multiple, t, !1));
        }
      }
    }
    var un = !1;
    function dn(e, t, n) {
      if (un) return e(t, n);
      un = !0;
      try {
        return e(t);
      } finally {
        if (
          ((un = !1),
          (sn !== null || cn !== null) &&
            (cu(), sn && ((t = sn), (e = cn), (cn = sn = null), ln(t), e)))
        )
          for (t = 0; t < e.length; t++) ln(e[t]);
      }
    }
    function fn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[it] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
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
          ((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(a(231, t, typeof n));
      return n;
    }
    var pn =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0,
      mn = !1;
    if (pn)
      try {
        var hn = {};
        (Object.defineProperty(hn, "passive", {
          get: function () {
            mn = !0;
          },
        }),
          window.addEventListener(`test`, hn, hn),
          window.removeEventListener(`test`, hn, hn));
      } catch {
        mn = !1;
      }
    var gn = null,
      _n = null,
      vn = null;
    function yn() {
      if (vn) return vn;
      var e,
        t = _n,
        n = t.length,
        r,
        i = `value` in gn ? gn.value : gn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (vn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function bn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function xn() {
      return !0;
    }
    function Sn() {
      return !1;
    }
    function Cn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? xn
            : Sn),
          (this.isPropagationStopped = Sn),
          this
        );
      }
      return (
        p(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = xn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = xn));
          },
          persist: function () {},
          isPersistent: xn,
        }),
        t
      );
    }
    var wn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Tn = Cn(wn),
      En = p({}, wn, { view: 0, detail: 0 }),
      Dn = Cn(En),
      On,
      kn,
      An,
      jn = p({}, En, {
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
        getModifierState: Hn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== An &&
                (An && e.type === `mousemove`
                  ? ((On = e.screenX - An.screenX),
                    (kn = e.screenY - An.screenY))
                  : (kn = On = 0),
                (An = e)),
              On);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : kn;
        },
      }),
      Mn = Cn(jn),
      Nn = Cn(p({}, jn, { dataTransfer: 0 })),
      Pn = Cn(p({}, En, { relatedTarget: 0 })),
      Fn = Cn(
        p({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      In = Cn(
        p({}, wn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      Ln = Cn(p({}, wn, { data: 0 })),
      Rn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      zn = {
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
      Bn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function Vn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Bn[e])
          ? !!t[e]
          : !1;
    }
    function Hn() {
      return Vn;
    }
    var Un = Cn(
        p({}, En, {
          key: function (e) {
            if (e.key) {
              var t = Rn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = bn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? zn[e.keyCode] || `Unidentified`
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
          getModifierState: Hn,
          charCode: function (e) {
            return e.type === `keypress` ? bn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? bn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Wn = Cn(
        p({}, jn, {
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
      Gn = Cn(
        p({}, En, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Hn,
        }),
      ),
      Kn = Cn(p({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      qn = Cn(
        p({}, jn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Jn = Cn(p({}, wn, { newState: 0, oldState: 0 })),
      Yn = [9, 13, 27, 32],
      Xn = pn && `CompositionEvent` in window,
      Zn = null;
    pn && `documentMode` in document && (Zn = document.documentMode);
    var Qn = pn && `TextEvent` in window && !Zn,
      $n = pn && (!Xn || (Zn && 8 < Zn && 11 >= Zn)),
      er = ` `,
      tr = !1;
    function nr(e, t) {
      switch (e) {
        case `keyup`:
          return Yn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function rr(e) {
      return (
        (e = e.detail), typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var ir = !1;
    function ar(e, t) {
      switch (e) {
        case `compositionend`:
          return rr(t);
        case `keypress`:
          return t.which === 32 ? ((tr = !0), er) : null;
        case `textInput`:
          return ((e = t.data), e === er && tr ? null : e);
        default:
          return null;
      }
    }
    function or(e, t) {
      if (ir)
        return e === `compositionend` || (!Xn && nr(e, t))
          ? ((e = yn()), (vn = _n = gn = null), (ir = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return $n && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var sr = {
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
    function cr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!sr[e.type] : t === `textarea`;
    }
    function lr(e, t, n, r) {
      (sn ? (cn ? cn.push(r) : (cn = [r])) : (sn = r),
        (t = pd(t, `onChange`)),
        0 < t.length &&
          ((n = new Tn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var ur = null,
      dr = null;
    function fr(e) {
      od(e, 0);
    }
    function pr(e) {
      if (Bt(ht(e))) return e;
    }
    function mr(e, t) {
      if (e === `change`) return t;
    }
    var hr = !1;
    if (pn) {
      var gr;
      if (pn) {
        var _r = `oninput` in document;
        if (!_r) {
          var vr = document.createElement(`div`);
          (vr.setAttribute(`oninput`, `return;`),
            (_r = typeof vr.oninput == `function`));
        }
        gr = _r;
      } else gr = !1;
      hr = gr && (!document.documentMode || 9 < document.documentMode);
    }
    function yr() {
      ur && (ur.detachEvent(`onpropertychange`, br), (dr = ur = null));
    }
    function br(e) {
      if (e.propertyName === `value` && pr(dr)) {
        var t = [];
        (lr(t, dr, e, on(e)), dn(fr, t));
      }
    }
    function xr(e, t, n) {
      e === `focusin`
        ? (yr(), (ur = t), (dr = n), ur.attachEvent(`onpropertychange`, br))
        : e === `focusout` && yr();
    }
    function Sr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return pr(dr);
    }
    function Cr(e, t) {
      if (e === `click`) return pr(t);
    }
    function wr(e, t) {
      if (e === `input` || e === `change`) return pr(t);
    }
    function Tr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Er = typeof Object.is == `function` ? Object.is : Tr;
    function Dr(e, t) {
      if (Er(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ve.call(t, i) || !Er(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Or(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function kr(e, t) {
      var n = Or(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Or(n);
      }
    }
    function Ar(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Ar(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function jr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Vt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Vt(e.document);
      }
      return t;
    }
    function Mr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Nr = pn && `documentMode` in document && 11 >= document.documentMode,
      Pr = null,
      Fr = null,
      Ir = null,
      Lr = !1;
    function Rr(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Lr ||
        Pr == null ||
        Pr !== Vt(r) ||
        ((r = Pr),
        `selectionStart` in r && Mr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Ir && Dr(Ir, r)) ||
          ((Ir = r),
          (r = pd(Fr, `onSelect`)),
          0 < r.length &&
            ((t = new Tn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Pr))));
    }
    function zr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Br = {
        animationend: zr(`Animation`, `AnimationEnd`),
        animationiteration: zr(`Animation`, `AnimationIteration`),
        animationstart: zr(`Animation`, `AnimationStart`),
        transitionrun: zr(`Transition`, `TransitionRun`),
        transitionstart: zr(`Transition`, `TransitionStart`),
        transitioncancel: zr(`Transition`, `TransitionCancel`),
        transitionend: zr(`Transition`, `TransitionEnd`),
      },
      Vr = {},
      Hr = {};
    pn &&
      ((Hr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Br.animationend.animation,
        delete Br.animationiteration.animation,
        delete Br.animationstart.animation),
      `TransitionEvent` in window || delete Br.transitionend.transition);
    function Ur(e) {
      if (Vr[e]) return Vr[e];
      if (!Br[e]) return e;
      var t = Br[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Hr) return (Vr[e] = t[n]);
      return e;
    }
    var Wr = Ur(`animationend`),
      Gr = Ur(`animationiteration`),
      Kr = Ur(`animationstart`),
      qr = Ur(`transitionrun`),
      Jr = Ur(`transitionstart`),
      Yr = Ur(`transitioncancel`),
      Xr = Ur(`transitionend`),
      Zr = new Map(),
      Qr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Qr.push(`scrollEnd`);
    function $r(e, t) {
      (Zr.set(e, t), bt(t, [e]));
    }
    var ei = new WeakMap();
    function ti(e, t) {
      if (typeof e == `object` && e) {
        var n = ei.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Ft(t) }), ei.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Ft(t) };
    }
    var ni = [],
      ri = 0,
      ii = 0;
    function ai() {
      for (var e = ri, t = (ii = ri = 0); t < e;) {
        var n = ni[t];
        ni[t++] = null;
        var r = ni[t];
        ni[t++] = null;
        var i = ni[t];
        ni[t++] = null;
        var a = ni[t];
        if (((ni[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && li(n, i, a);
      }
    }
    function oi(e, t, n, r) {
      ((ni[ri++] = e),
        (ni[ri++] = t),
        (ni[ri++] = n),
        (ni[ri++] = r),
        (ii |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function si(e, t, n, r) {
      return (oi(e, t, n, r), ui(e));
    }
    function ci(e, t) {
      return (oi(e, null, null, t), ui(e));
    }
    function li(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Fe(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ui(e) {
      if (50 < $l) throw (($l = 0), (eu = null), Error(a(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var di = {};
    function fi(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function pi(e, t, n, r) {
      return new fi(e, t, n, r);
    }
    function mi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function hi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = pi(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function gi(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function _i(e, t, n, r, i, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) mi(e) && (s = 1);
      else if (typeof e == `string`)
        s = Tf(e, n, ue.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (e) {
          case O:
            return (
              (e = pi(31, n, t, i)), (e.elementType = O), (e.lanes = o), e
            );
          case _:
            return vi(n.children, i, o, t);
          case v:
            ((s = 8), (i |= 24));
            break;
          case y:
            return (
              (e = pi(12, n, t, i | 2)), (e.elementType = y), (e.lanes = o), e
            );
          case w:
            return (
              (e = pi(13, n, t, i)), (e.elementType = w), (e.lanes = o), e
            );
          case T:
            return (
              (e = pi(19, n, t, i)), (e.elementType = T), (e.lanes = o), e
            );
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case b:
                case S:
                  s = 10;
                  break a;
                case x:
                  s = 9;
                  break a;
                case C:
                  s = 11;
                  break a;
                case E:
                  s = 14;
                  break a;
                case D:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(a(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = pi(s, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function vi(e, t, n, r) {
      return ((e = pi(7, e, r, t)), (e.lanes = n), e);
    }
    function yi(e, t, n) {
      return ((e = pi(6, e, null, t)), (e.lanes = n), e);
    }
    function bi(e, t, n) {
      return (
        (t = pi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var xi = [],
      Si = 0,
      Ci = null,
      wi = 0,
      Ti = [],
      Ei = 0,
      Di = null,
      Oi = 1,
      ki = ``;
    function Ai(e, t) {
      ((xi[Si++] = wi), (xi[Si++] = Ci), (Ci = e), (wi = t));
    }
    function ji(e, t, n) {
      ((Ti[Ei++] = Oi), (Ti[Ei++] = ki), (Ti[Ei++] = Di), (Di = e));
      var r = Oi;
      e = ki;
      var i = 32 - Fe(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Fe(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Oi = (1 << (32 - Fe(t) + i)) | (n << i) | r),
          (ki = a + e));
      } else ((Oi = (1 << a) | (n << i) | r), (ki = e));
    }
    function Mi(e) {
      e.return !== null && (Ai(e, 1), ji(e, 1, 0));
    }
    function Ni(e) {
      for (; e === Ci;)
        ((Ci = xi[--Si]), (xi[Si] = null), (wi = xi[--Si]), (xi[Si] = null));
      for (; e === Di;)
        ((Di = Ti[--Ei]),
          (Ti[Ei] = null),
          (ki = Ti[--Ei]),
          (Ti[Ei] = null),
          (Oi = Ti[--Ei]),
          (Ti[Ei] = null));
    }
    var Pi = null,
      N = null,
      P = !1,
      Fi = null,
      Ii = !1,
      Li = Error(a(519));
    function Ri(e) {
      throw (Wi(ti(Error(a(418, ``)), e)), Li);
    }
    function zi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[rt] = e), (t[it] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < id.length; n++) Q(id[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            Gt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ),
            zt(t));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), Yt(t, r.value, r.defaultValue, r.children), zt(t));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        yd(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = bd),
            (t = !0))
          : (t = !1),
        t || Ri(e));
    }
    function Bi(e) {
      for (Pi = e.return; Pi;)
        switch (Pi.tag) {
          case 5:
          case 13:
            Ii = !1;
            return;
          case 27:
          case 3:
            Ii = !0;
            return;
          default:
            Pi = Pi.return;
        }
    }
    function Vi(e) {
      if (e !== Pi) return !1;
      if (!P) return (Bi(e), (P = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || kd(e.type, e.memoizedProps))),
          (n = !n)),
        n && N && Ri(e),
        Bi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(a(317));
        a: {
          for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
              if (((n = e.data), n === `/$`)) {
                if (t === 0) {
                  N = Wd(e.nextSibling);
                  break a;
                }
                t--;
              } else (n !== `$` && n !== `$!` && n !== `$?`) || t++;
            }
            e = e.nextSibling;
          }
          N = null;
        }
      } else
        t === 27
          ? ((t = N), Ld(e.type) ? ((e = Gd), (Gd = null), (N = e)) : (N = t))
          : (N = Pi ? Wd(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Hi() {
      ((N = Pi = null), (P = !1));
    }
    function Ui() {
      var e = Fi;
      return (
        e !== null &&
          (Bl === null ? (Bl = e) : Bl.push.apply(Bl, e), (Fi = null)),
        e
      );
    }
    function Wi(e) {
      Fi === null ? (Fi = [e]) : Fi.push(e);
    }
    var Gi = le(null),
      Ki = null,
      qi = null;
    function Ji(e, t, n) {
      (M(Gi, t._currentValue), (t._currentValue = n));
    }
    function Yi(e) {
      ((e._currentValue = Gi.current), j(Gi));
    }
    function Xi(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Zi(e, t, n, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null;) {
        var o = i.dependencies;
        if (o !== null) {
          var s = i.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = i;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Xi(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (i.tag === 18) {
          if (((s = i.return), s === null)) throw Error(a(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Xi(s, n, e),
            (s = null));
        } else s = i.child;
        if (s !== null) s.return = i;
        else
          for (s = i; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((i = s.sibling), i !== null)) {
              ((i.return = s.return), (s = i));
              break;
            }
            s = s.return;
          }
        i = s;
      }
    }
    function Qi(e, t, n, r) {
      e = null;
      for (var i = t, o = !1; i !== null;) {
        if (!o) {
          if (i.flags & 524288) o = !0;
          else if (i.flags & 262144) break;
        }
        if (i.tag === 10) {
          var s = i.alternate;
          if (s === null) throw Error(a(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = i.type;
            Er(i.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (i === pe.current) {
          if (((s = i.alternate), s === null)) throw Error(a(387));
          s.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
            (e === null ? (e = [Ff]) : e.push(Ff));
        }
        i = i.return;
      }
      (e !== null && Zi(t, e, n, r), (t.flags |= 262144));
    }
    function $i(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Er(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ea(e) {
      ((Ki = e),
        (qi = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function ta(e) {
      return ra(Ki, e);
    }
    function na(e, t) {
      return (Ki === null && ea(e), ra(e, t));
    }
    function ra(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), qi === null)) {
        if (e === null) throw Error(a(308));
        ((qi = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else qi = qi.next = t;
      return n;
    }
    var ia =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      aa = t.unstable_scheduleCallback,
      oa = t.unstable_NormalPriority,
      F = {
        $$typeof: S,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function sa() {
      return { controller: new ia(), data: new Map(), refCount: 0 };
    }
    function ca(e) {
      (e.refCount--,
        e.refCount === 0 &&
          aa(oa, function () {
            e.controller.abort();
          }));
    }
    var la = null,
      ua = 0,
      da = 0,
      fa = null;
    function pa(e, t) {
      if (la === null) {
        var n = (la = []);
        ((ua = 0),
          (da = Qu()),
          (fa = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ua++, t.then(ma, ma), t);
    }
    function ma() {
      if (--ua === 0 && la !== null) {
        fa !== null && (fa.status = `fulfilled`);
        var e = la;
        ((la = null), (da = 0), (fa = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ha(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var ga = k.S;
    k.S = function (e, t) {
      (typeof t == `object` && t && typeof t.then == `function` && pa(e, t),
        ga !== null && ga(e, t));
    };
    var _a = le(null);
    function va() {
      var e = _a.current;
      return e === null ? K.pooledCache : e;
    }
    function ya(e, t) {
      t === null ? M(_a, _a.current) : M(_a, t.pool);
    }
    function ba() {
      var e = va();
      return e === null ? null : { parent: F._currentValue, pool: e };
    }
    var xa = Error(a(460)),
      Sa = Error(a(474)),
      Ca = Error(a(542)),
      wa = { then: function () {} };
    function Ta(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Ea() {}
    function Da(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(Ea, Ea), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Aa(e), e);
        default:
          if (typeof t.status == `string`) t.then(Ea, Ea);
          else {
            if (((e = K), e !== null && 100 < e.shellSuspendCounter))
              throw Error(a(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Aa(e), e);
          }
          throw ((Oa = t), xa);
      }
    }
    var Oa = null;
    function ka() {
      if (Oa === null) throw Error(a(459));
      var e = Oa;
      return ((Oa = null), e);
    }
    function Aa(e) {
      if (e === xa || e === Ca) throw Error(a(483));
    }
    var ja = !1;
    function Ma(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Na(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Pa(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Fa(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), G & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ui(e)),
          li(e, null, n),
          t
        );
      }
      return (oi(e, r, t, n), ui(e));
    }
    function Ia(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ze(e, n));
      }
    }
    function La(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
      } else
        ((e = n.lastBaseUpdate),
          e === null ? (n.firstBaseUpdate = t) : (e.next = t),
          (n.lastBaseUpdate = t));
    }
    var Ra = !1;
    function za() {
      if (Ra) {
        var e = fa;
        if (e !== null) throw e;
      }
    }
    function Ba(e, t, n, r) {
      Ra = !1;
      var i = e.updateQueue;
      ja = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            m = f !== s.lane;
          if (m ? (J & f) === f : (r & f) === f) {
            (f !== 0 && f === da && (Ra = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var h = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, f);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (
                    ((h = g.payload),
                    (f = typeof h == `function` ? h.call(_, d, f) : h),
                    f == null)
                  )
                    break a;
                  d = p({}, d, f);
                  break a;
                case 2:
                  ja = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                m && (e.flags |= 8192),
                (m = i.callbacks),
                m === null ? (i.callbacks = [f]) : m.push(f)));
          } else
            ((m = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = m), (c = d)) : (u = u.next = m),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((m = s),
              (s = m.next),
              (m.next = null),
              (i.lastBaseUpdate = m),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Pl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Va(e, t) {
      if (typeof e != `function`) throw Error(a(191, e));
      e.call(t);
    }
    function Ha(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Va(n[e], t);
    }
    var Ua = le(null),
      Wa = le(0);
    function Ga(e, t) {
      ((e = Nl), M(Wa, e), M(Ua, t), (Nl = e | t.baseLanes));
    }
    function Ka() {
      (M(Wa, Nl), M(Ua, Ua.current));
    }
    function qa() {
      ((Nl = Wa.current), j(Ua), j(Wa));
    }
    var Ja = 0,
      I = null,
      L = null,
      R = null,
      Ya = !1,
      Xa = !1,
      Za = !1,
      Qa = 0,
      $a = 0,
      eo = null,
      to = 0;
    function z() {
      throw Error(a(321));
    }
    function no(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Er(e[n], t[n])) return !1;
      return !0;
    }
    function ro(e, t, n, r, i, a) {
      return (
        (Ja = a),
        (I = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (k.H = e === null || e.memoizedState === null ? ys : bs),
        (Za = !1),
        (a = n(r, i)),
        (Za = !1),
        Xa && (a = ao(t, n, r, i)),
        io(e),
        a
      );
    }
    function io(e) {
      k.H = vs;
      var t = L !== null && L.next !== null;
      if (((Ja = 0), (R = L = I = null), (Ya = !1), ($a = 0), (eo = null), t))
        throw Error(a(300));
      e === null ||
        ec ||
        ((e = e.dependencies), e !== null && $i(e) && (ec = !0));
    }
    function ao(e, t, n, r) {
      I = e;
      var i = 0;
      do {
        if ((Xa && (eo = null), ($a = 0), (Xa = !1), 25 <= i))
          throw Error(a(301));
        if (((i += 1), (R = L = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((k.H = xs), (o = t(n, r)));
      } while (Xa);
      return o;
    }
    function oo() {
      var e = k.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? po(t) : t),
        (e = e.useState()[0]),
        (L === null ? null : L.memoizedState) !== e && (I.flags |= 1024),
        t
      );
    }
    function so() {
      var e = Qa !== 0;
      return ((Qa = 0), e);
    }
    function co(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function lo(e) {
      if (Ya) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        Ya = !1;
      }
      ((Ja = 0), (R = L = I = null), (Xa = !1), ($a = Qa = 0), (eo = null));
    }
    function uo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (R === null ? (I.memoizedState = R = e) : (R = R.next = e), R);
    }
    function B() {
      if (L === null) {
        var e = I.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = L.next;
      var t = R === null ? I.memoizedState : R.next;
      if (t !== null) ((R = t), (L = e));
      else {
        if (e === null)
          throw I.alternate === null ? Error(a(467)) : Error(a(310));
        ((L = e),
          (e = {
            memoizedState: L.memoizedState,
            baseState: L.baseState,
            baseQueue: L.baseQueue,
            queue: L.queue,
            next: null,
          }),
          R === null ? (I.memoizedState = R = e) : (R = R.next = e));
      }
      return R;
    }
    function fo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function po(e) {
      var t = $a;
      return (
        ($a += 1),
        eo === null && (eo = []),
        (e = Da(eo, e, t)),
        (t = I),
        (R === null ? t.memoizedState : R.next) === null &&
          ((t = t.alternate),
          (k.H = t === null || t.memoizedState === null ? ys : bs)),
        e
      );
    }
    function mo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return po(e);
        if (e.$$typeof === S) return ta(e);
      }
      throw Error(a(438, String(e)));
    }
    function ho(e) {
      var t = null,
        n = I.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = I.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = fo()), (I.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ee;
      return (t.index++, n);
    }
    function go(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function _o(e) {
      return vo(B(), L, e);
    }
    function vo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(a(311));
      r.lastRenderedReducer = n;
      var i = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (i !== null) {
          var s = i.next;
          ((i.next = o.next), (o.next = s));
        }
        ((t.baseQueue = i = o), (r.pending = null));
      }
      if (((o = e.baseState), i === null)) e.memoizedState = o;
      else {
        t = i.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (Ja & f) === f : (J & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === da && (d = !0));
            else if ((Ja & p) === p) {
              ((u = u.next), p === da && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (I.lanes |= p),
                (Pl |= p));
            ((f = u.action),
              Za && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (I.lanes |= f),
              (Pl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Er(o, e.memoizedState) && ((ec = !0), d && ((n = fa), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (i === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function yo(e) {
      var t = B(),
        n = t.queue;
      if (n === null) throw Error(a(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== i);
        (Er(o, t.memoizedState) || (ec = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function bo(e, t, n) {
      var r = I,
        i = B(),
        o = P;
      if (o) {
        if (n === void 0) throw Error(a(407));
        n = n();
      } else n = t();
      var s = !Er((L || i).memoizedState, n);
      if (
        (s && ((i.memoizedState = n), (ec = !0)),
        (i = i.queue),
        Wo(2048, 8, Co.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || s || (R !== null && R.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          Bo(9, Vo(), So.bind(null, r, i, n, t), null),
          K === null)
        )
          throw Error(a(349));
        o || Ja & 124 || xo(r, t, n);
      }
      return n;
    }
    function xo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = I.updateQueue),
        t === null
          ? ((t = fo()), (I.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function So(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), wo(t) && To(e));
    }
    function Co(e, t, n) {
      return n(function () {
        wo(t) && To(e);
      });
    }
    function wo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Er(e, n);
      } catch {
        return !0;
      }
    }
    function To(e) {
      var t = ci(e, 2);
      t !== null && ru(t, e, 2);
    }
    function Eo(e) {
      var t = uo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Za)) {
          Pe(!0);
          try {
            n();
          } finally {
            Pe(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: go,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Do(e, t, n, r) {
      return ((e.baseState = n), vo(e, L, typeof r == `function` ? r : go));
    }
    function Oo(e, t, n, r, i) {
      if (hs(e)) throw Error(a(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: i,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (k.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), ko(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function ko(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = k.T,
          o = {};
        k.T = o;
        try {
          var s = n(i, r),
            c = k.S;
          (c !== null && c(o, s), Ao(e, t, s));
        } catch (n) {
          Mo(e, t, n);
        } finally {
          k.T = a;
        }
      } else
        try {
          ((a = n(i, r)), Ao(e, t, a));
        } catch (n) {
          Mo(e, t, n);
        }
    }
    function Ao(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              jo(e, t, n);
            },
            function (n) {
              return Mo(e, t, n);
            },
          )
        : jo(e, t, n);
    }
    function jo(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        No(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), ko(e, n))));
    }
    function Mo(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), No(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function No(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Po(e, t) {
      return t;
    }
    function Fo(e, t) {
      if (P) {
        var n = K.formState;
        if (n !== null) {
          a: {
            var r = I;
            if (P) {
              if (N) {
                b: {
                  for (var i = N, a = Ii; i.nodeType !== 8;)
                    if (!a || ((i = Wd(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((N = Wd(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Ri(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = uo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Po,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = fs.bind(null, I, r)),
        (r.dispatch = n),
        (r = Eo(!1)),
        (a = ms.bind(null, I, !1, r.queue)),
        (r = uo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Oo.bind(null, I, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function Io(e) {
      return Lo(B(), L, e);
    }
    function Lo(e, t, n) {
      if (
        ((t = vo(e, t, Po)[0]),
        (e = _o(go)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = po(t);
        } catch (e) {
          throw e === xa ? Ca : e;
        }
      else r = t;
      t = B();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((I.flags |= 2048), Bo(9, Vo(), Ro.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function Ro(e, t) {
      e.action = t;
    }
    function zo(e) {
      var t = B(),
        n = L;
      if (n !== null) return Lo(t, n, e);
      (B(), (t = t.memoizedState), (n = B()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function Bo(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = I.updateQueue),
        t === null && ((t = fo()), (I.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function Vo() {
      return { destroy: void 0, resource: void 0 };
    }
    function Ho() {
      return B().memoizedState;
    }
    function Uo(e, t, n, r) {
      var i = uo();
      ((r = r === void 0 ? null : r),
        (I.flags |= e),
        (i.memoizedState = Bo(1 | t, Vo(), n, r)));
    }
    function Wo(e, t, n, r) {
      var i = B();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      L !== null && r !== null && no(r, L.memoizedState.deps)
        ? (i.memoizedState = Bo(t, a, n, r))
        : ((I.flags |= e), (i.memoizedState = Bo(1 | t, a, n, r)));
    }
    function Go(e, t) {
      Uo(8390656, 8, e, t);
    }
    function Ko(e, t) {
      Wo(2048, 8, e, t);
    }
    function qo(e, t) {
      return Wo(4, 2, e, t);
    }
    function Jo(e, t) {
      return Wo(4, 4, e, t);
    }
    function Yo(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Xo(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        Wo(4, 4, Yo.bind(null, t, e), n));
    }
    function Zo() {}
    function Qo(e, t) {
      var n = B();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && no(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function $o(e, t) {
      var n = B();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && no(t, r[1])) return r[0];
      if (((r = e()), Za)) {
        Pe(!0);
        try {
          e();
        } finally {
          Pe(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function es(e, t, n) {
      return n === void 0 || Ja & 1073741824
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = nu()), (I.lanes |= e), (Pl |= e), n);
    }
    function ts(e, t, n, r) {
      return Er(n, t)
        ? n
        : Ua.current === null
          ? Ja & 42
            ? ((e = nu()), (I.lanes |= e), (Pl |= e), t)
            : ((ec = !0), (e.memoizedState = n))
          : ((e = es(e, n, r)), Er(e, t) || (ec = !0), e);
    }
    function ns(e, t, n, r, i) {
      var a = A.p;
      A.p = a !== 0 && 8 > a ? a : 8;
      var o = k.T,
        s = {};
      ((k.T = s), ms(e, !1, t, n));
      try {
        var c = i(),
          l = k.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? ps(e, t, ha(c, r), tu(e))
            : ps(e, t, r, tu(e)));
      } catch (n) {
        ps(e, t, { then: function () {}, status: `rejected`, reason: n }, tu());
      } finally {
        ((A.p = a), (k.T = o));
      }
    }
    function rs() {}
    function is(e, t, n, r) {
      if (e.tag !== 5) throw Error(a(476));
      var i = as(e).queue;
      ns(
        e,
        i,
        t,
        oe,
        n === null
          ? rs
          : function () {
              return (os(e), n(r));
            },
      );
    }
    function as(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: oe,
        baseState: oe,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: go,
          lastRenderedState: oe,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: go,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function os(e) {
      var t = as(e).next.queue;
      ps(e, t, {}, tu());
    }
    function ss() {
      return ta(Ff);
    }
    function cs() {
      return B().memoizedState;
    }
    function ls() {
      return B().memoizedState;
    }
    function us(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = tu();
            e = Pa(n);
            var r = Fa(t, e, n);
            (r !== null && (ru(r, t, n), Ia(r, t, n)),
              (t = { cache: sa() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function ds(e, t, n) {
      var r = tu();
      ((n = {
        lane: r,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        hs(e)
          ? gs(t, n)
          : ((n = si(e, t, n, r)), n !== null && (ru(n, e, r), _s(n, t, r))));
    }
    function fs(e, t, n) {
      ps(e, t, n, tu());
    }
    function ps(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (hs(e)) gs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Er(s, o)))
              return (oi(e, t, i, 0), K === null && ai(), !1);
          } catch {}
        if (((n = si(e, t, i, r)), n !== null))
          return (ru(n, e, r), _s(n, t, r), !0);
      }
      return !1;
    }
    function ms(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: Qu(),
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        hs(e))
      ) {
        if (t) throw Error(a(479));
      } else ((t = si(e, n, r, 2)), t !== null && ru(t, e, 2));
    }
    function hs(e) {
      var t = e.alternate;
      return e === I || (t !== null && t === I);
    }
    function gs(e, t) {
      Xa = Ya = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function _s(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ze(e, n));
      }
    }
    var vs = {
        readContext: ta,
        use: mo,
        useCallback: z,
        useContext: z,
        useEffect: z,
        useImperativeHandle: z,
        useLayoutEffect: z,
        useInsertionEffect: z,
        useMemo: z,
        useReducer: z,
        useRef: z,
        useState: z,
        useDebugValue: z,
        useDeferredValue: z,
        useTransition: z,
        useSyncExternalStore: z,
        useId: z,
        useHostTransitionStatus: z,
        useFormState: z,
        useActionState: z,
        useOptimistic: z,
        useMemoCache: z,
        useCacheRefresh: z,
      },
      ys = {
        readContext: ta,
        use: mo,
        useCallback: function (e, t) {
          return ((uo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: ta,
        useEffect: Go,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            Uo(4194308, 4, Yo.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return Uo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Uo(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = uo();
          t = t === void 0 ? null : t;
          var r = e();
          if (Za) {
            Pe(!0);
            try {
              e();
            } finally {
              Pe(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = uo();
          if (n !== void 0) {
            var i = n(t);
            if (Za) {
              Pe(!0);
              try {
                n(t);
              } finally {
                Pe(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = ds.bind(null, I, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = uo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Eo(e);
          var t = e.queue,
            n = fs.bind(null, I, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Zo,
        useDeferredValue: function (e, t) {
          return es(uo(), e, t);
        },
        useTransition: function () {
          var e = Eo(!1);
          return (
            (e = ns.bind(null, I, e.queue, !0, !1)),
            (uo().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = I,
            i = uo();
          if (P) {
            if (n === void 0) throw Error(a(407));
            n = n();
          } else {
            if (((n = t()), K === null)) throw Error(a(349));
            J & 124 || xo(r, t, n);
          }
          i.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (i.queue = o),
            Go(Co.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            Bo(9, Vo(), So.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = uo(),
            t = K.identifierPrefix;
          if (P) {
            var n = ki,
              r = Oi;
            ((n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
              (t = `«` + t + `R` + n),
              (n = Qa++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `»`));
          } else ((n = to++), (t = `«` + t + `r` + n.toString(32) + `»`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: ss,
        useFormState: Fo,
        useActionState: Fo,
        useOptimistic: function (e) {
          var t = uo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = ms.bind(null, I, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: ho,
        useCacheRefresh: function () {
          return (uo().memoizedState = us.bind(null, I));
        },
      },
      bs = {
        readContext: ta,
        use: mo,
        useCallback: Qo,
        useContext: ta,
        useEffect: Ko,
        useImperativeHandle: Xo,
        useInsertionEffect: qo,
        useLayoutEffect: Jo,
        useMemo: $o,
        useReducer: _o,
        useRef: Ho,
        useState: function () {
          return _o(go);
        },
        useDebugValue: Zo,
        useDeferredValue: function (e, t) {
          return ts(B(), L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = _o(go)[0],
            t = B().memoizedState;
          return [typeof e == `boolean` ? e : po(e), t];
        },
        useSyncExternalStore: bo,
        useId: cs,
        useHostTransitionStatus: ss,
        useFormState: Io,
        useActionState: Io,
        useOptimistic: function (e, t) {
          return Do(B(), L, e, t);
        },
        useMemoCache: ho,
        useCacheRefresh: ls,
      },
      xs = {
        readContext: ta,
        use: mo,
        useCallback: Qo,
        useContext: ta,
        useEffect: Ko,
        useImperativeHandle: Xo,
        useInsertionEffect: qo,
        useLayoutEffect: Jo,
        useMemo: $o,
        useReducer: yo,
        useRef: Ho,
        useState: function () {
          return yo(go);
        },
        useDebugValue: Zo,
        useDeferredValue: function (e, t) {
          var n = B();
          return L === null ? es(n, e, t) : ts(n, L.memoizedState, e, t);
        },
        useTransition: function () {
          var e = yo(go)[0],
            t = B().memoizedState;
          return [typeof e == `boolean` ? e : po(e), t];
        },
        useSyncExternalStore: bo,
        useId: cs,
        useHostTransitionStatus: ss,
        useFormState: zo,
        useActionState: zo,
        useOptimistic: function (e, t) {
          var n = B();
          return L === null
            ? ((n.baseState = e), [e, n.queue.dispatch])
            : Do(n, L, e, t);
        },
        useMemoCache: ho,
        useCacheRefresh: ls,
      },
      Ss = null,
      Cs = 0;
    function ws(e) {
      var t = Cs;
      return ((Cs += 1), Ss === null && (Ss = []), Da(Ss, e, t));
    }
    function Ts(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Es(e, t) {
      throw t.$$typeof === m
        ? Error(a(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            a(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function Ds(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Os(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function i(e, t) {
        return ((e = hi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = yi(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var a = n.type;
        return a === _
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === a ||
                (typeof a == `object` &&
                  a &&
                  a.$$typeof === D &&
                  Ds(a) === t.type))
            ? ((t = i(t, n.props)), Ts(t, n), (t.return = e), t)
            : ((t = _i(n.type, n.key, n.props, null, e.mode, r)),
              Ts(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = bi(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, a) {
        return t === null || t.tag !== 7
          ? ((t = vi(n, e.mode, r, a)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = yi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case h:
              return (
                (n = _i(t.type, t.key, t.props, null, e.mode, n)),
                Ts(n, t),
                (n.return = e),
                n
              );
            case g:
              return ((t = bi(t, e.mode, n)), (t.return = e), t);
            case D:
              var r = t._init;
              return ((t = r(t._payload)), f(e, t, n));
          }
          if (ae(t) || ne(t))
            return ((t = vi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, ws(t), n);
          if (t.$$typeof === S) return f(e, na(e, t), n);
          Es(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case h:
              return n.key === i ? l(e, t, n, r) : null;
            case g:
              return n.key === i ? u(e, t, n, r) : null;
            case D:
              return ((i = n._init), (n = i(n._payload)), p(e, t, n, r));
          }
          if (ae(n) || ne(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, ws(n), r);
          if (n.$$typeof === S) return p(e, t, na(e, n), r);
          Es(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case h:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i)
              );
            case g:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i)
              );
            case D:
              var a = r._init;
              return ((r = a(r._payload)), m(e, t, n, r, i));
          }
          if (ae(r) || ne(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, ws(r), i);
          if (r.$$typeof === S) return m(e, t, n, na(t, r), i);
          Es(t, r);
        }
        return null;
      }
      function v(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), P && Ai(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (P && Ai(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          P && Ai(i, h),
          l
        );
      }
      function y(i, s, c, l) {
        if (c == null) throw Error(a(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(i, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(i, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(i, h), P && Ai(i, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(i, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (P && Ai(i, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, i, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(i, e);
            }),
          P && Ai(i, g),
          u
        );
      }
      function b(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === _ &&
            o.key === null &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case h:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === _)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = i(r, o.props.children)),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === D &&
                        Ds(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = i(r, o.props)),
                        Ts(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === _
                  ? ((c = vi(o.props.children, e.mode, c, o.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = _i(o.type, o.key, o.props, null, e.mode, c)),
                    Ts(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case g:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = i(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = bi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case D:
              return ((l = o._init), (o = l(o._payload)), b(e, r, o, c));
          }
          if (ae(o)) return v(e, r, o, c);
          if (ne(o)) {
            if (((l = ne(o)), typeof l != `function`)) throw Error(a(150));
            return ((o = l.call(o)), y(e, r, o, c));
          }
          if (typeof o.then == `function`) return b(e, r, ws(o), c);
          if (o.$$typeof === S) return b(e, r, na(e, o), c);
          Es(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = i(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = yi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Cs = 0;
          var i = b(e, t, n, r);
          return ((Ss = null), i);
        } catch (t) {
          if (t === xa || t === Ca) throw t;
          var a = pi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var ks = Os(!0),
      As = Os(!1),
      js = le(null),
      Ms = null;
    function Ns(e) {
      var t = e.alternate;
      (M(V, V.current & 1),
        M(js, e),
        Ms === null &&
          (t === null || Ua.current !== null || t.memoizedState !== null) &&
          (Ms = e));
    }
    function Ps(e) {
      if (e.tag === 22) {
        if ((M(V, V.current), M(js, e), Ms === null)) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Ms = e);
        }
      } else Fs(e);
    }
    function Fs() {
      (M(V, V.current), M(js, js.current));
    }
    function Is(e) {
      (j(js), Ms === e && (Ms = null), j(V));
    }
    var V = le(0);
    function Ls(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (
            n !== null &&
            ((n = n.dehydrated), n === null || n.data === `$?` || Hd(n))
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    function Rs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : p({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var zs = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = tu(),
          i = Pa(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Fa(e, i, r)),
          t !== null && (ru(t, e, r), Ia(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = tu(),
          i = Pa(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Fa(e, i, r)),
          t !== null && (ru(t, e, r), Ia(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = tu(),
          r = Pa(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Fa(e, r, n)),
          t !== null && (ru(t, e, n), Ia(t, e, n)));
      },
    };
    function Bs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Dr(n, r) || !Dr(i, a)
            : !0
      );
    }
    function Vs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && zs.enqueueReplaceState(t, t.state, null));
    }
    function Hs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = p({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    var Us =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var t = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == `object` && e && typeof e.message == `string`
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, e);
              return;
            }
            console.error(e);
          };
    function Ws(e) {
      Us(e);
    }
    function Gs(e) {
      console.error(e);
    }
    function Ks(e) {
      Us(e);
    }
    function qs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Js(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Ys(e, t, n) {
      return (
        (n = Pa(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          qs(e, t);
        }),
        n
      );
    }
    function Xs(e) {
      return ((e = Pa(e)), (e.tag = 3), e);
    }
    function Zs(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Js(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Js(t, n, r),
            typeof i != `function` &&
              (Gl === null ? (Gl = new Set([this])) : Gl.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function Qs(e, t, n, r, i) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && Qi(t, n, i, !0),
          (n = js.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 13:
              return (
                Ms === null ? mu() : n.alternate === null && X === 0 && (X = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = i),
                r === wa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Mu(e, r, i)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === wa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Mu(e, r, i)),
                !1
              );
          }
          throw Error(a(435, n.tag));
        }
        return (Mu(e, r, i), mu(), !1);
      }
      if (P)
        return (
          (t = js.current),
          t === null
            ? (r !== Li && ((t = Error(a(423), { cause: r })), Wi(ti(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (i &= -i),
              (e.lanes |= i),
              (r = ti(r, n)),
              (i = Ys(e.stateNode, r, i)),
              La(e, i),
              X !== 4 && (X = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = i),
              r !== Li && ((e = Error(a(422), { cause: r })), Wi(ti(e, n)))),
          !1
        );
      var o = Error(a(520), { cause: r });
      if (
        ((o = ti(o, n)),
        zl === null ? (zl = [o]) : zl.push(o),
        X !== 4 && (X = 2),
        t === null)
      )
        return !0;
      ((r = ti(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = i & -i),
              (n.lanes |= e),
              (e = Ys(n.stateNode, r, e)),
              La(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (Gl === null || !Gl.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (i &= -i),
                (n.lanes |= i),
                (i = Xs(i)),
                Zs(i, e, n, r),
                La(n, i),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var $s = Error(a(461)),
      ec = !1;
    function tc(e, t, n, r) {
      t.child = e === null ? As(t, null, n, r) : ks(t, e.child, n, r);
    }
    function nc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ea(t),
        (r = ro(e, t, n, o, a, i)),
        (s = so()),
        e !== null && !ec
          ? (co(e, t, i), Sc(e, t, i))
          : (P && s && Mi(t), (t.flags |= 1), tc(e, t, r, i), t.child)
      );
    }
    function rc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !mi(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), ic(e, t, a, r, i))
          : ((e = _i(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Cc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Dr : n),
          n(o, r) && e.ref === t.ref)
        )
          return Sc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = hi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function ic(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Dr(a, r) && e.ref === t.ref) {
          if (((ec = !1), (t.pendingProps = r = a), Cc(e, i)))
            e.flags & 131072 && (ec = !0);
          else return ((t.lanes = e.lanes), Sc(e, t, i));
        }
      }
      return cc(e, t, n, r, i);
    }
    function ac(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        a = e === null ? null : e.memoizedState;
      if (r.mode === `hidden`) {
        if (t.flags & 128) {
          if (((r = a === null ? n : a.baseLanes | n), e !== null)) {
            for (i = t.child = e.child, a = 0; i !== null;)
              ((a = a | i.lanes | i.childLanes), (i = i.sibling));
            t.childLanes = a & ~r;
          } else ((t.childLanes = 0), (t.child = null));
          return oc(e, t, r, n);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && ya(t, a === null ? null : a.cachePool),
            a === null ? Ka() : Ga(t, a),
            Ps(t));
        else
          return (
            (t.lanes = t.childLanes = 536870912),
            oc(e, t, a === null ? n : a.baseLanes | n, n)
          );
      } else
        a === null
          ? (e !== null && ya(t, null), Ka(), Fs(t))
          : (ya(t, a.cachePool), Ga(t, a), Fs(t), (t.memoizedState = null));
      return (tc(e, t, i, n), t.child);
    }
    function oc(e, t, n, r) {
      var i = va();
      return (
        (i = i === null ? null : { parent: F._currentValue, pool: i }),
        (t.memoizedState = { baseLanes: n, cachePool: i }),
        e !== null && ya(t, null),
        Ka(),
        Ps(t),
        e !== null && Qi(e, t, r, !0),
        null
      );
    }
    function sc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(a(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function cc(e, t, n, r, i) {
      return (
        ea(t),
        (n = ro(e, t, n, r, void 0, i)),
        (r = so()),
        e !== null && !ec
          ? (co(e, t, i), Sc(e, t, i))
          : (P && r && Mi(t), (t.flags |= 1), tc(e, t, n, i), t.child)
      );
    }
    function lc(e, t, n, r, i, a) {
      return (
        ea(t),
        (t.updateQueue = null),
        (n = ao(t, r, n, i)),
        io(e),
        (r = so()),
        e !== null && !ec
          ? (co(e, t, a), Sc(e, t, a))
          : (P && r && Mi(t), (t.flags |= 1), tc(e, t, n, a), t.child)
      );
    }
    function uc(e, t, n, r, i) {
      if ((ea(t), t.stateNode === null)) {
        var a = di,
          o = n.contextType;
        (typeof o == `object` && o && (a = ta(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = zs),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ma(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ta(o) : di),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Rs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && zs.enqueueReplaceState(a, a.state, null),
            Ba(t, r, a, i),
            za(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Hs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = di), typeof u == `object` && u && (o = ta(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Vs(t, a, r, o)),
          (ja = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Ba(t, r, a, i),
          za(),
          (l = t.memoizedState),
          s || f !== l || ja
            ? (typeof d == `function` &&
                (Rs(t, n, d, r), (l = t.memoizedState)),
              (c = ja || Bs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          Na(e, t),
          (o = t.memoizedProps),
          (u = Hs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = di),
          typeof l == `object` && l && (c = ta(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Vs(t, a, r, c)),
          (ja = !1),
          (f = t.memoizedState),
          (a.state = f),
          Ba(t, r, a, i),
          za());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        ja ||
        (e !== null && e.dependencies !== null && $i(e.dependencies))
          ? (typeof s == `function` && (Rs(t, n, s, r), (p = t.memoizedState)),
            (u =
              ja ||
              Bs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && $i(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        sc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = ks(t, e.child, null, i)),
                (t.child = ks(t, null, n, i)))
              : tc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Sc(e, t, i)),
        e
      );
    }
    function dc(e, t, n, r) {
      return (Hi(), (t.flags |= 256), tc(e, t, n, r), t.child);
    }
    var fc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function pc(e) {
      return { baseLanes: e, cachePool: ba() };
    }
    function mc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Ll), e);
    }
    function hc(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) ||
          (s = e !== null && e.memoizedState === null ? !1 : !!(V.current & 2)),
        s && ((i = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (P) {
          if ((i ? Ns(t) : Fs(t), P)) {
            var c = N,
              l;
            if ((l = c)) {
              c: {
                for (l = c, c = Ii; l.nodeType !== 8;)
                  if (!c || ((l = Wd(l.nextSibling)), l === null)) {
                    c = null;
                    break c;
                  }
                c = l;
              }
              c === null
                ? (l = !1)
                : ((t.memoizedState = {
                    dehydrated: c,
                    treeContext: Di === null ? null : { id: Oi, overflow: ki },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (l = pi(18, null, null, 0)),
                  (l.stateNode = c),
                  (l.return = t),
                  (t.child = l),
                  (Pi = t),
                  (N = null),
                  (l = !0));
            }
            l || Ri(t);
          }
          if (
            ((c = t.memoizedState),
            c !== null && ((c = c.dehydrated), c !== null))
          )
            return (Hd(c) ? (t.lanes = 32) : (t.lanes = 536870912), null);
          Is(t);
        }
        return (
          (c = r.children),
          (r = r.fallback),
          i
            ? (Fs(t),
              (i = t.mode),
              (c = _c({ mode: `hidden`, children: c }, i)),
              (r = vi(r, i, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (i = t.child),
              (i.memoizedState = pc(n)),
              (i.childLanes = mc(e, s, n)),
              (t.memoizedState = fc),
              r)
            : (Ns(t), gc(t, c))
        );
      }
      if (
        ((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null))
      ) {
        if (o)
          t.flags & 256
            ? (Ns(t), (t.flags &= -257), (t = vc(e, t, n)))
            : t.memoizedState === null
              ? (Fs(t),
                (i = r.fallback),
                (c = t.mode),
                (r = _c({ mode: `visible`, children: r.children }, c)),
                (i = vi(i, c, n, null)),
                (i.flags |= 2),
                (r.return = t),
                (i.return = t),
                (r.sibling = i),
                (t.child = r),
                ks(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = pc(n)),
                (r.childLanes = mc(e, s, n)),
                (t.memoizedState = fc),
                (t = i))
              : (Fs(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((Ns(t), Hd(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(a(419))),
            (r.stack = ``),
            (r.digest = s),
            Wi({ value: r, source: null, stack: null }),
            (t = vc(e, t, n)));
        } else if (
          (ec || Qi(e, t, n, !1), (s = (n & e.childLanes) !== 0), ec || s)
        ) {
          if (
            ((s = K),
            s !== null &&
              ((r = n & -n),
              (r = r & 42 ? 1 : Qe(r)),
              (r = (r & (s.suspendedLanes | n)) === 0 ? r : 0),
              r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), ci(e, r), ru(s, e, r), $s);
          (c.data === `$?` || mu(), (t = vc(e, t, n)));
        } else
          c.data === `$?`
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (N = Wd(c.nextSibling)),
              (Pi = t),
              (P = !0),
              (Fi = null),
              (Ii = !1),
              e !== null &&
                ((Ti[Ei++] = Oi),
                (Ti[Ei++] = ki),
                (Ti[Ei++] = Di),
                (Oi = e.id),
                (ki = e.overflow),
                (Di = t)),
              (t = gc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return i
        ? (Fs(t),
          (i = r.fallback),
          (c = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = hi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((i = vi(i, c, n, null)), (i.flags |= 2))
            : (i = hi(u, i)),
          (i.return = t),
          (r.return = t),
          (r.sibling = i),
          (t.child = r),
          (r = i),
          (i = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = pc(n))
            : ((l = c.cachePool),
              l === null
                ? (l = ba())
                : ((u = F._currentValue),
                  (l = l.parent === u ? l : { parent: u, pool: u })),
              (c = { baseLanes: c.baseLanes | n, cachePool: l })),
          (i.memoizedState = c),
          (i.childLanes = mc(e, s, n)),
          (t.memoizedState = fc),
          r)
        : (Ns(t),
          (n = e.child),
          (e = n.sibling),
          (n = hi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions),
            s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function gc(e, t) {
      return (
        (t = _c({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function _c(e, t) {
      return (
        (e = pi(22, e, null, t)),
        (e.lanes = 0),
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
        e
      );
    }
    function vc(e, t, n) {
      return (
        ks(t, e.child, null, n),
        (e = gc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function yc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Xi(e.return, t, n));
    }
    function bc(e, t, n, r, i) {
      var a = e.memoizedState;
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
    }
    function xc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      if ((tc(e, t, r.children, n), (r = V.current), r & 2))
        ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          a: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
            else if (e.tag === 19) yc(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break a;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break a;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      switch ((M(V, r), i)) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate),
              e !== null && Ls(e) === null && (i = n),
              (n = n.sibling));
          ((n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            bc(t, !1, i, n, a));
          break;
        case `backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && Ls(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          bc(t, !0, n, null, a);
          break;
        case `together`:
          bc(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Sc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Pl |= t.lanes),
        (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((Qi(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(a(153));
      if (t.child !== null) {
        for (
          e = t.child, n = hi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = hi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Cc(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && $i(e)))
      );
    }
    function wc(e, t, n) {
      switch (t.tag) {
        case 3:
          (me(t, t.stateNode.containerInfo),
            Ji(t, F, e.memoizedState.cache),
            Hi());
          break;
        case 27:
        case 5:
          ge(t);
          break;
        case 4:
          me(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ji(t, t.type, t.memoizedProps.value);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (Ns(t), (e = Sc(e, t, n)), e === null ? null : e.sibling)
                : hc(e, t, n)
              : (Ns(t), (t.flags |= 128), null);
          Ns(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (Qi(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return xc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            M(V, V.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), ac(e, t, n));
        case 24:
          Ji(t, F, e.memoizedState.cache);
      }
      return Sc(e, t, n);
    }
    function Tc(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) ec = !0;
        else {
          if (!Cc(e, n) && !(t.flags & 128)) return ((ec = !1), wc(e, t, n));
          ec = !!(e.flags & 131072);
        }
      } else ((ec = !1), P && t.flags & 1048576 && ji(t, wi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            e = t.pendingProps;
            var r = t.elementType,
              i = r._init;
            if (((r = i(r._payload)), (t.type = r), typeof r == `function`))
              mi(r)
                ? ((e = Hs(r, e)), (t.tag = 1), (t = uc(null, t, r, e, n)))
                : ((t.tag = 0), (t = cc(null, t, r, e, n)));
            else {
              if (r != null) {
                if (((i = r.$$typeof), i === C)) {
                  ((t.tag = 11), (t = nc(null, t, r, e, n)));
                  break a;
                }
                if (i === E) {
                  ((t.tag = 14), (t = rc(null, t, r, e, n)));
                  break a;
                }
              }
              throw ((t = ie(r) || r), Error(a(306, t, ``)));
            }
          }
          return t;
        case 0:
          return cc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (i = Hs(r, t.pendingProps)), uc(e, t, r, i, n));
        case 3:
          a: {
            if ((me(t, t.stateNode.containerInfo), e === null))
              throw Error(a(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((i = o.element), Na(e, t), Ba(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Ji(t, F, r),
              r !== o.cache && Zi(t, [F], n, !0),
              za(),
              (r = s.element),
              o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = dc(e, t, r, n);
                break a;
              }
              if (r !== i) {
                ((i = ti(Error(a(424)), t)), Wi(i), (t = dc(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                N = Wd(e.firstChild),
                  Pi = t,
                  P = !0,
                  Fi = null,
                  Ii = !0,
                  n = As(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((Hi(), r === i)) {
                t = Sc(e, t, n);
                break a;
              }
              tc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            sc(e, t),
            e === null
              ? (n = df(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : P ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Ed(fe.current).createElement(n)),
                  (r[rt] = t),
                  (r[it] = e),
                  Sd(r, n, e),
                  _t(r),
                  (t.stateNode = r))
              : (t.memoizedState = df(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            ge(t),
            e === null &&
              P &&
              ((r = t.stateNode = qd(t.type, t.pendingProps, fe.current)),
              (Pi = t),
              (Ii = !0),
              (i = N),
              Ld(t.type) ? ((Gd = i), (N = Wd(r.firstChild))) : (N = i)),
            tc(e, t, t.pendingProps.children, n),
            sc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              P &&
              ((i = r = N) &&
                ((r = Bd(r, t.type, t.pendingProps, Ii)),
                r === null
                  ? (i = !1)
                  : ((t.stateNode = r),
                    (Pi = t),
                    (N = Wd(r.firstChild)),
                    (Ii = !1),
                    (i = !0))),
              i || Ri(t)),
            ge(t),
            (i = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            kd(i, o) ? (r = null) : s !== null && kd(i, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((i = ro(e, t, oo, null, null, n)), (Ff._currentValue = i)),
            sc(e, t),
            tc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              P &&
              ((e = n = N) &&
                ((n = Vd(n, t.pendingProps, Ii)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (Pi = t), (N = null), (e = !0))),
              e || Ri(t)),
            null
          );
        case 13:
          return hc(e, t, n);
        case 4:
          return (
            me(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = ks(t, null, r, n)) : tc(e, t, r, n),
            t.child
          );
        case 11:
          return nc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (tc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (tc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (tc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return (
            (r = t.pendingProps),
            Ji(t, t.type, r.value),
            tc(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (i = t.type._context),
            (r = t.pendingProps.children),
            ea(t),
            (i = ta(i)),
            (r = r(i)),
            (t.flags |= 1),
            tc(e, t, r, n),
            t.child
          );
        case 14:
          return rc(e, t, t.type, t.pendingProps, n);
        case 15:
          return ic(e, t, t.type, t.pendingProps, n);
        case 19:
          return xc(e, t, n);
        case 31:
          return (
            (r = t.pendingProps),
            (n = t.mode),
            (r = { mode: r.mode, children: r.children }),
            e === null
              ? ((n = _c(r, n)),
                (n.ref = t.ref),
                (t.child = n),
                (n.return = t),
                (t = n))
              : ((n = hi(e.child, r)),
                (n.ref = t.ref),
                (t.child = n),
                (n.return = t),
                (t = n)),
            t
          );
        case 22:
          return ac(e, t, n);
        case 24:
          return (
            ea(t),
            (r = ta(F)),
            e === null
              ? ((i = va()),
                i === null &&
                  ((i = K),
                  (o = sa()),
                  (i.pooledCache = o),
                  o.refCount++,
                  o !== null && (i.pooledCacheLanes |= n),
                  (i = o)),
                (t.memoizedState = { parent: r, cache: i }),
                Ma(t),
                Ji(t, F, i))
              : ((e.lanes & n) !== 0 && (Na(e, t), Ba(t, null, null, n), za()),
                (i = e.memoizedState),
                (o = t.memoizedState),
                i.parent === r
                  ? ((r = o.cache),
                    Ji(t, F, r),
                    r !== i.cache && Zi(t, [F], n, !0))
                  : ((i = { parent: r, cache: r }),
                    (t.memoizedState = i),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = i),
                    Ji(t, F, r))),
            tc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(a(156, t.tag));
    }
    function Ec(e) {
      e.flags |= 4;
    }
    function Dc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Ef(t))) {
        if (
          ((t = js.current),
          t !== null &&
            ((J & 4194048) === J
              ? Ms !== null
              : ((J & 62914560) !== J && !(J & 536870912)) || t !== Ms))
        )
          throw ((Oa = wa), Sa);
        e.flags |= 8192;
      }
    }
    function Oc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : Ke()), (e.lanes |= t), (Rl |= t)));
    }
    function kc(e, t) {
      if (!P)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function H(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Ac(e, t, n) {
      var r = t.pendingProps;
      switch ((Ni(t), t.tag)) {
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
          return (H(t), null);
        case 1:
          return (H(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Yi(F),
            he(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Vi(t)
                ? Ec(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ui())),
            H(t),
            null
          );
        case 26:
          return (
            (n = t.memoizedState),
            e === null
              ? (Ec(t),
                n === null ? (H(t), (t.flags &= -16777217)) : (H(t), Dc(t, n)))
              : n
                ? n === e.memoizedState
                  ? (H(t), (t.flags &= -16777217))
                  : (Ec(t), H(t), Dc(t, n))
                : (e.memoizedProps !== r && Ec(t),
                  H(t),
                  (t.flags &= -16777217)),
            null
          );
        case 27:
          (_e(t), (n = fe.current));
          var i = t.type;
          if (e !== null && t.stateNode != null) e.memoizedProps !== r && Ec(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(a(166));
              return (H(t), null);
            }
            ((e = ue.current),
              Vi(t) ? zi(t, e) : ((e = qd(i, r, n)), (t.stateNode = e), Ec(t)));
          }
          return (H(t), null);
        case 5:
          if ((_e(t), (n = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Ec(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(a(166));
              return (H(t), null);
            }
            if (((e = ue.current), Vi(t))) zi(t, e);
            else {
              switch (((i = Ed(fe.current)), e)) {
                case 1:
                  e = i.createElementNS(`http://www.w3.org/2000/svg`, n);
                  break;
                case 2:
                  e = i.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    n,
                  );
                  break;
                default:
                  switch (n) {
                    case `svg`:
                      e = i.createElementNS(`http://www.w3.org/2000/svg`, n);
                      break;
                    case `math`:
                      e = i.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        n,
                      );
                      break;
                    case `script`:
                      ((e = i.createElement(`div`)),
                        (e.innerHTML = `<script><\/script>`),
                        (e = e.removeChild(e.firstChild)));
                      break;
                    case `select`:
                      ((e =
                        typeof r.is == `string`
                          ? i.createElement(`select`, { is: r.is })
                          : i.createElement(`select`)),
                        r.multiple
                          ? (e.multiple = !0)
                          : r.size && (e.size = r.size));
                      break;
                    default:
                      e =
                        typeof r.is == `string`
                          ? i.createElement(n, { is: r.is })
                          : i.createElement(n);
                  }
              }
              ((e[rt] = t), (e[it] = r));
              a: for (i = t.child; i !== null;) {
                if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  ((i.child.return = i), (i = i.child));
                  continue;
                }
                if (i === t) break a;
                for (; i.sibling === null;) {
                  if (i.return === null || i.return === t) break a;
                  i = i.return;
                }
                ((i.sibling.return = i.return), (i = i.sibling));
              }
              t.stateNode = e;
              a: switch ((Sd(e, n, r), n)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  e = !!r.autoFocus;
                  break a;
                case `img`:
                  e = !0;
                  break a;
                default:
                  e = !1;
              }
              e && Ec(t);
            }
          }
          return (H(t), (t.flags &= -16777217), null);
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Ec(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(a(166));
            if (((e = fe.current), Vi(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (i = Pi),
                i !== null)
              )
                switch (i.tag) {
                  case 27:
                  case 5:
                    r = i.memoizedProps;
                }
              ((e[rt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  yd(e.nodeValue, n)
                )),
                e || Ri(t));
            } else
              ((e = Ed(e).createTextNode(r)), (e[rt] = t), (t.stateNode = e));
          }
          return (H(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((i = Vi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!i) throw Error(a(318));
                if (
                  ((i = t.memoizedState),
                  (i = i === null ? null : i.dehydrated),
                  !i)
                )
                  throw Error(a(317));
                i[rt] = t;
              } else
                (Hi(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (H(t), (i = !1));
            } else
              ((i = Ui()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = i),
                (i = !0));
            if (!i) return t.flags & 256 ? (Is(t), t) : (Is(t), null);
          }
          if ((Is(t), t.flags & 128)) return ((t.lanes = n), t);
          if (
            ((n = r !== null), (e = e !== null && e.memoizedState !== null), n)
          ) {
            ((r = t.child),
              (i = null),
              r.alternate !== null &&
                r.alternate.memoizedState !== null &&
                r.alternate.memoizedState.cachePool !== null &&
                (i = r.alternate.memoizedState.cachePool.pool));
            var o = null;
            (r.memoizedState !== null &&
              r.memoizedState.cachePool !== null &&
              (o = r.memoizedState.cachePool.pool),
              o !== i && (r.flags |= 2048));
          }
          return (
            n !== e && n && (t.child.flags |= 8192),
            Oc(t, t.updateQueue),
            H(t),
            null
          );
        case 4:
          return (
            he(), e === null && ld(t.stateNode.containerInfo), H(t), null
          );
        case 10:
          return (Yi(t.type), H(t), null);
        case 19:
          if ((j(V), (i = t.memoizedState), i === null)) return (H(t), null);
          if (((r = !!(t.flags & 128)), (o = i.rendering), o === null)) {
            if (r) kc(i, !1);
            else {
              if (X !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = Ls(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        kc(i, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Oc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (gi(n, e), (n = n.sibling));
                    return (M(V, (V.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              i.tail !== null &&
                Ce() > Ul &&
                ((t.flags |= 128), (r = !0), kc(i, !1), (t.lanes = 4194304));
            }
          } else {
            if (!r) {
              if (((e = Ls(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Oc(t, e),
                  kc(i, !0),
                  i.tail === null &&
                    i.tailMode === `hidden` &&
                    !o.alternate &&
                    !P)
                )
                  return (H(t), null);
              } else
                2 * Ce() - i.renderingStartTime > Ul &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (r = !0), kc(i, !1), (t.lanes = 4194304));
            }
            i.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = i.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (i.last = o));
          }
          return i.tail === null
            ? (H(t), null)
            : ((t = i.tail),
              (i.rendering = t),
              (i.tail = t.sibling),
              (i.renderingStartTime = Ce()),
              (t.sibling = null),
              (e = V.current),
              M(V, r ? (e & 1) | 2 : e & 1),
              t);
        case 22:
        case 23:
          return (
            Is(t),
            qa(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (H(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : H(t),
            (n = t.updateQueue),
            n !== null && Oc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && j(_a),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Yi(F),
            H(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(a(156, t.tag));
    }
    function jc(e, t) {
      switch ((Ni(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Yi(F),
            he(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (_e(t), null);
        case 13:
          if (
            (Is(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(a(340));
            Hi();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (j(V), null);
        case 4:
          return (he(), null);
        case 10:
          return (Yi(t.type), null);
        case 22:
        case 23:
          return (
            Is(t),
            qa(),
            e !== null && j(_a),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Yi(F), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Mc(e, t) {
      switch ((Ni(t), t.tag)) {
        case 3:
          (Yi(F), he());
          break;
        case 26:
        case 27:
        case 5:
          _e(t);
          break;
        case 4:
          he();
          break;
        case 13:
          Is(t);
          break;
        case 19:
          j(V);
          break;
        case 10:
          Yi(t.type);
          break;
        case 22:
        case 23:
          (Is(t), qa(), e !== null && j(_a));
          break;
        case 24:
          Yi(F);
      }
    }
    function Nc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Pc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Fc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Ha(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Ic(e, t, n) {
      ((n.props = Hs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Lc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Rc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
      }
    }
    function zc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Bc(e, t, n) {
      try {
        var r = e.stateNode;
        (Cd(r, e.type, n, t), (r[it] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Vc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Ld(e.type)) ||
        e.tag === 4
      );
    }
    function Hc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Vc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Ld(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Uc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = bd)));
      else if (
        r !== 4 &&
        (r === 27 && Ld(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Uc(e, t, n), e = e.sibling; e !== null;)
          (Uc(e, t, n), (e = e.sibling));
    }
    function Wc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (
        r !== 4 &&
        (r === 27 && Ld(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (Wc(e, t, n), e = e.sibling; e !== null;)
          (Wc(e, t, n), (e = e.sibling));
    }
    function Gc(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0]);
        (Sd(t, r, n), (t[rt] = e), (t[it] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var Kc = !1,
      U = !1,
      qc = !1,
      Jc = typeof WeakSet == `function` ? WeakSet : Set,
      Yc = null;
    function Xc(e, t) {
      if (((e = e.containerInfo), (wd = Uf), (e = jr(e)), Mr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var i = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (i !== 0 && f.nodeType !== 3) || (c = s + i),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === i && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Td = { focusedElem: e, selectionRange: n }, Uf = !1, Yc = t;
        Yc !== null;
      )
        if (((t = Yc), (e = t.child), t.subtreeFlags & 1024 && e !== null))
          ((e.return = t), (Yc = e));
        else
          for (; Yc !== null;) {
            switch (((t = Yc), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (i = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Hs(n.type, i, n.elementType === n.type);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    Z(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    zd(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        zd(e);
                        break;
                      default:
                        e.textContent = ``;
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
                if (e & 1024) throw Error(a(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (Yc = e));
              break;
            }
            Yc = t.return;
          }
    }
    function Zc(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (ul(e, n), r & 4 && Nc(5, n));
          break;
        case 1:
          if ((ul(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Hs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          }
          (r & 64 && Fc(n), r & 512 && Lc(n, n.return));
          break;
        case 3:
          if ((ul(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Ha(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Gc(n);
        case 26:
        case 5:
          (ul(e, n), t === null && r & 4 && zc(n), r & 512 && Lc(n, n.return));
          break;
        case 12:
          ul(e, n);
          break;
        case 13:
          (ul(e, n),
            r & 4 && nl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = Fu.bind(null, n)), Ud(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || Kc), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || U), (i = Kc));
            var a = U;
            ((Kc = r),
              (U = t) && !a ? fl(e, n, !!(n.subtreeFlags & 8772)) : ul(e, n),
              (Kc = i),
              (U = a));
          }
          break;
        case 30:
          break;
        default:
          ul(e, n);
      }
    }
    function Qc(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Qc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && ft(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var W = null,
      $c = !1;
    function el(e, t, n) {
      for (n = n.child; n !== null;) (tl(e, t, n), (n = n.sibling));
    }
    function tl(e, t, n) {
      if (Ne && typeof Ne.onCommitFiberUnmount == `function`)
        try {
          Ne.onCommitFiberUnmount(Me, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (U || Rc(n, t),
            el(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          U || Rc(n, t);
          var r = W,
            i = $c;
          (Ld(n.type) && ((W = n.stateNode), ($c = !1)),
            el(e, t, n),
            Jd(n.stateNode),
            (W = r),
            ($c = i));
          break;
        case 5:
          U || Rc(n, t);
        case 6:
          if (
            ((r = W),
            (i = $c),
            (W = null),
            el(e, t, n),
            (W = r),
            ($c = i),
            W !== null)
          ) {
            if ($c)
              try {
                (W.nodeType === 9
                  ? W.body
                  : W.nodeName === `HTML`
                    ? W.ownerDocument.body
                    : W
                ).removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                W.removeChild(n.stateNode);
              } catch (e) {
                Z(n, t, e);
              }
          }
          break;
        case 18:
          W !== null &&
            ($c
              ? ((e = W),
                Rd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                hp(e))
              : Rd(W, n.stateNode));
          break;
        case 4:
          ((r = W),
            (i = $c),
            (W = n.stateNode.containerInfo),
            ($c = !0),
            el(e, t, n),
            (W = r),
            ($c = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (U || Pc(2, n, t), U || Pc(4, n, t), el(e, t, n));
          break;
        case 1:
          (U ||
            (Rc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Ic(n, t, r)),
            el(e, t, n));
          break;
        case 21:
          el(e, t, n);
          break;
        case 22:
          ((U = (r = U) || n.memoizedState !== null), el(e, t, n), (U = r));
          break;
        default:
          el(e, t, n);
      }
    }
    function nl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          hp(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function rl(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new Jc()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new Jc()),
            t
          );
        default:
          throw Error(a(435, e.tag));
      }
    }
    function il(e, t) {
      var n = rl(e);
      t.forEach(function (t) {
        var r = Iu.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
    }
    function al(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (Ld(c.type)) {
                  ((W = c.stateNode), ($c = !1));
                  break a;
                }
                break;
              case 5:
                ((W = c.stateNode), ($c = !1));
                break a;
              case 3:
              case 4:
                ((W = c.stateNode.containerInfo), ($c = !0));
                break a;
            }
            c = c.return;
          }
          if (W === null) throw Error(a(160));
          (tl(o, s, i),
            (W = null),
            ($c = !1),
            (o = i.alternate),
            o !== null && (o.return = null),
            (i.return = null));
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null;) (sl(t, e), (t = t.sibling));
    }
    var ol = null;
    function sl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (al(t, e),
            cl(e),
            r & 4 && (Pc(3, e, e.return), Nc(3, e), Pc(5, e, e.return)));
          break;
        case 1:
          (al(t, e),
            cl(e),
            r & 512 && (U || n === null || Rc(n, n.return)),
            r & 64 &&
              Kc &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var i = ol;
          if (
            (al(t, e),
            cl(e),
            r & 512 && (U || n === null || Rc(n, n.return)),
            r & 4)
          ) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null)) {
              if (r === null) {
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type),
                      (n = e.memoizedProps),
                      (i = i.ownerDocument || i));
                    b: switch (r) {
                      case `title`:
                        ((o = i.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[dt] ||
                            o[rt] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = i.createElement(r)),
                            i.head.insertBefore(
                              o,
                              i.querySelector(`head > title`),
                            )),
                          Sd(o, r, n),
                          (o[rt] = e),
                          _t(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Cf(`link`, `href`, i).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                o.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = i.createElement(r)),
                          Sd(o, r, n),
                          i.head.appendChild(o));
                        break;
                      case `meta`:
                        if (
                          (s = Cf(`meta`, `content`, i).get(
                            r + (n.content || ``),
                          ))
                        ) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = i.createElement(r)),
                          Sd(o, r, n),
                          i.head.appendChild(o));
                        break;
                      default:
                        throw Error(a(468, r));
                    }
                    ((o[rt] = e), _t(o), (r = o));
                  }
                  e.stateNode = r;
                } else wf(i, e.type, e.stateNode);
              } else e.stateNode = vf(i, r, e.memoizedProps);
            } else
              o === r
                ? r === null &&
                  e.stateNode !== null &&
                  Bc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null
                    ? wf(i, e.type, e.stateNode)
                    : vf(i, r, e.memoizedProps));
          }
          break;
        case 27:
          (al(t, e),
            cl(e),
            r & 512 && (U || n === null || Rc(n, n.return)),
            n !== null && r & 4 && Bc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if (
            (al(t, e),
            cl(e),
            r & 512 && (U || n === null || Rc(n, n.return)),
            e.flags & 32)
          ) {
            i = e.stateNode;
            try {
              Xt(i, ``);
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((i = e.memoizedProps), Bc(e, i, n === null ? i : n.memoizedProps)),
            r & 1024 && (qc = !0));
          break;
        case 6:
          if ((al(t, e), cl(e), r & 4)) {
            if (e.stateNode === null) throw Error(a(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Sf = null),
            (i = ol),
            (ol = Zd(t.containerInfo)),
            al(t, e),
            (ol = i),
            cl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              hp(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          qc && ((qc = !1), ll(e));
          break;
        case 4:
          ((r = ol),
            (ol = Zd(e.stateNode.containerInfo)),
            al(t, e),
            cl(e),
            (ol = r));
          break;
        case 12:
          (al(t, e), cl(e));
          break;
        case 13:
          (al(t, e),
            cl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (Hl = Ce()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), il(e, r))));
          break;
        case 22:
          i = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = Kc,
            d = U;
          if (
            ((Kc = u || i),
            (U = d || l),
            al(t, e),
            (U = d),
            (Kc = u),
            cl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || l || Kc || U || dl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), i))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = i ? `` : l.memoizedProps;
                  } catch (e) {
                    Z(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), il(e, n))));
          break;
        case 19:
          (al(t, e),
            cl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), il(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (al(t, e), cl(e));
      }
    }
    function cl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Vc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(a(160));
          switch (n.tag) {
            case 27:
              var i = n.stateNode;
              Wc(e, Hc(e), i);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (Xt(o, ``), (n.flags &= -33)), Wc(e, Hc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Uc(e, Hc(e), s);
              break;
            default:
              throw Error(a(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ll(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (ll(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling));
        }
    }
    function ul(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (Zc(e, t.alternate, t), (t = t.sibling));
    }
    function dl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Pc(4, t, t.return), dl(t));
            break;
          case 1:
            Rc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Ic(t, t.return, n),
              dl(t));
            break;
          case 27:
            Jd(t.stateNode);
          case 26:
          case 5:
            (Rc(t, t.return), dl(t));
            break;
          case 22:
            t.memoizedState === null && dl(t);
            break;
          case 30:
            dl(t);
            break;
          default:
            dl(t);
        }
        e = e.sibling;
      }
    }
    function fl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (fl(i, a, n), Nc(4, a));
            break;
          case 1:
            if (
              (fl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    Va(c[i], s);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (n && o & 64 && Fc(a), Lc(a, a.return));
            break;
          case 27:
            Gc(a);
          case 26:
          case 5:
            (fl(i, a, n), n && r === null && o & 4 && zc(a), Lc(a, a.return));
            break;
          case 12:
            fl(i, a, n);
            break;
          case 13:
            (fl(i, a, n), n && o & 4 && nl(i, a));
            break;
          case 22:
            (a.memoizedState === null && fl(i, a, n), Lc(a, a.return));
            break;
          case 30:
            break;
          default:
            fl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function pl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ca(n)));
    }
    function ml(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ca(e)));
    }
    function hl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) (gl(e, t, n, r), (t = t.sibling));
    }
    function gl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (hl(e, t, n, r), i & 2048 && Nc(9, t));
          break;
        case 1:
          hl(e, t, n, r);
          break;
        case 3:
          (hl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ca(e))));
          break;
        case 12:
          if (i & 2048) {
            (hl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else hl(e, t, n, r);
          break;
        case 13:
          hl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? hl(e, t, n, r)
                : ((a._visibility |= 2),
                  _l(e, t, n, r, !!(t.subtreeFlags & 10256)))
              : a._visibility & 2
                ? hl(e, t, n, r)
                : vl(e, t),
            i & 2048 && pl(o, t));
          break;
        case 24:
          (hl(e, t, n, r), i & 2048 && ml(t.alternate, t));
          break;
        default:
          hl(e, t, n, r);
      }
    }
    function _l(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256), t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (_l(a, o, s, c, i), Nc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), _l(a, o, s, c, i))
              : u._visibility & 2
                ? _l(a, o, s, c, i)
                : vl(a, o),
              i && l & 2048 && pl(o.alternate, o));
            break;
          case 24:
            (_l(a, o, s, c, i), i && l & 2048 && ml(o.alternate, o));
            break;
          default:
            _l(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function vl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (vl(n, r), i & 2048 && pl(r.alternate, r));
              break;
            case 24:
              (vl(n, r), i & 2048 && ml(r.alternate, r));
              break;
            default:
              vl(n, r);
          }
          t = t.sibling;
        }
    }
    var yl = 8192;
    function bl(e) {
      if (e.subtreeFlags & yl)
        for (e = e.child; e !== null;) (xl(e), (e = e.sibling));
    }
    function xl(e) {
      switch (e.tag) {
        case 26:
          (bl(e),
            e.flags & yl &&
              e.memoizedState !== null &&
              kf(ol, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          bl(e);
          break;
        case 3:
        case 4:
          var t = ol;
          ((ol = Zd(e.stateNode.containerInfo)), bl(e), (ol = t));
          break;
        case 22:
          e.memoizedState === null &&
            ((t = e.alternate),
            t !== null && t.memoizedState !== null
              ? ((t = yl), (yl = 16777216), bl(e), (yl = t))
              : bl(e));
          break;
        default:
          bl(e);
      }
    }
    function Sl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Cl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((Yc = r), El(r, e));
          }
        Sl(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (wl(e), (e = e.sibling));
    }
    function wl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Cl(e), e.flags & 2048 && Pc(9, e, e.return));
          break;
        case 3:
          Cl(e);
          break;
        case 12:
          Cl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Tl(e))
            : Cl(e);
          break;
        default:
          Cl(e);
      }
    }
    function Tl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((Yc = r), El(r, e));
          }
        Sl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Pc(8, t, t.return), Tl(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Tl(t)));
            break;
          default:
            Tl(t);
        }
        e = e.sibling;
      }
    }
    function El(e, t) {
      for (; Yc !== null;) {
        var n = Yc;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Pc(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ca(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (Yc = r));
        else
          a: for (n = e; Yc !== null;) {
            r = Yc;
            var i = r.sibling,
              a = r.return;
            if ((Qc(r), r === n)) {
              Yc = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (Yc = i));
              break a;
            }
            Yc = a;
          }
      }
    }
    var Dl = {
        getCacheForType: function (e) {
          var t = ta(F),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
      },
      Ol = typeof WeakMap == `function` ? WeakMap : Map,
      G = 0,
      K = null,
      q = null,
      J = 0,
      Y = 0,
      kl = null,
      Al = !1,
      jl = !1,
      Ml = !1,
      Nl = 0,
      X = 0,
      Pl = 0,
      Fl = 0,
      Il = 0,
      Ll = 0,
      Rl = 0,
      zl = null,
      Bl = null,
      Vl = !1,
      Hl = 0,
      Ul = 1 / 0,
      Wl = null,
      Gl = null,
      Kl = 0,
      ql = null,
      Jl = null,
      Yl = 0,
      Xl = 0,
      Zl = null,
      Ql = null,
      $l = 0,
      eu = null;
    function tu() {
      if (G & 2 && J !== 0) return J & -J;
      if (k.T !== null) {
        var e = da;
        return e === 0 ? Qu() : e;
      }
      return et();
    }
    function nu() {
      Ll === 0 && (Ll = !(J & 536870912) || P ? Ge() : 536870912);
      var e = js.current;
      return (e !== null && (e.flags |= 32), Ll);
    }
    function ru(e, t, n) {
      (((e === K && (Y === 2 || Y === 9)) || e.cancelPendingCommit !== null) &&
        (uu(e, 0), su(e, J, Ll, !1)),
        Je(e, n),
        (G & 2 && e === K) ||
          (e === K && (!(G & 2) && (Fl |= n), X === 4 && su(e, J, Ll, !1)),
          Wu(e)));
    }
    function iu(e, t, n) {
      if (G & 6) throw Error(a(327));
      var r = (!n && !(t & 124) && (t & e.expiredLanes) === 0) || Ue(e, t),
        i = r ? _u(e, t) : hu(e, t, !0),
        o = r;
      do {
        if (i === 0) {
          jl && !r && su(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !ou(n)))
          ((i = hu(e, t, !1)), (o = !1));
        else {
          if (i === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                i = zl;
                var l = c.current.memoizedState.isDehydrated;
                if (
                  (l && (uu(c, s).flags |= 256), (s = hu(c, s, !1)), s !== 2)
                ) {
                  if (Ml && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (Fl |= o), (i = 4));
                    break a;
                  }
                  ((o = Bl),
                    (Bl = i),
                    o !== null &&
                      (Bl === null ? (Bl = o) : Bl.push.apply(Bl, o)));
                }
                i = s;
              }
              if (((o = !1), i !== 2)) continue;
            }
          }
          if (i === 1) {
            (uu(e, 0), su(e, t, 0, !0));
            break;
          }
          a: {
            switch (((r = e), (o = i), o)) {
              case 0:
              case 1:
                throw Error(a(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                su(r, t, Ll, !Al);
                break a;
              case 2:
                Bl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(a(329));
            }
            if ((t & 62914560) === t && ((i = Hl + 300 - Ce()), 10 < i)) {
              if ((su(r, t, Ll, !Al), He(r, 0, !0) !== 0)) break a;
              r.timeoutHandle = Md(
                au.bind(null, r, n, Bl, Wl, Vl, t, Ll, Fl, Rl, Al, o, 2, -0, 0),
                i,
              );
              break a;
            }
            au(r, n, Bl, Wl, Vl, t, Ll, Fl, Rl, Al, o, 0, -0, 0);
          }
          break;
        }
      } while (1);
      Wu(e);
    }
    function au(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        (d & 8192 || (d & 16785408) == 16785408) &&
        ((Df = { stylesheets: null, count: 0, unsuspend: Of }),
        xl(t),
        (d = Af()),
        d !== null)
          ? ((e.cancelPendingCommit = d(
              wu.bind(null, e, t, a, n, r, i, o, s, c, u, 1, f, p),
            )),
            su(e, a, o, !l))
          : wu(e, t, a, n, r, i, o, s, c));
    }
    function ou(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!Er(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function su(e, t, n, r) {
      ((t &= ~Il),
        (t &= ~Fl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Fe(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && Xe(e, n, t);
    }
    function cu() {
      return G & 6 ? !0 : (Gu(0, !1), !1);
    }
    function lu() {
      if (q !== null) {
        if (Y === 0) var e = q.return;
        else ((e = q), (qi = Ki = null), lo(e), (Ss = null), (Cs = 0), (e = q));
        for (; e !== null;) (Mc(e.alternate, e), (e = e.return));
        q = null;
      }
    }
    function uu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), Nd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        lu(),
        (K = e),
        (q = n = hi(e.current, null)),
        (J = t),
        (Y = 0),
        (kl = null),
        (Al = !1),
        (jl = Ue(e, t)),
        (Ml = !1),
        (Rl = Ll = Il = Fl = Pl = X = 0),
        (Bl = zl = null),
        (Vl = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Fe(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Nl = t), ai(), n);
    }
    function du(e, t) {
      ((I = null),
        (k.H = vs),
        t === xa || t === Ca
          ? ((t = ka()), (Y = 3))
          : t === Sa
            ? ((t = ka()), (Y = 4))
            : (Y =
                t === $s
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (kl = t),
        q === null && ((X = 1), qs(e, ti(t, e.current))));
    }
    function fu() {
      var e = k.H;
      return ((k.H = vs), e === null ? vs : e);
    }
    function pu() {
      var e = k.A;
      return ((k.A = Dl), e);
    }
    function mu() {
      ((X = 4),
        Al || ((J & 4194048) !== J && js.current !== null) || (jl = !0),
        (!(Pl & 134217727) && !(Fl & 134217727)) ||
          K === null ||
          su(K, J, Ll, !1));
    }
    function hu(e, t, n) {
      var r = G;
      G |= 2;
      var i = fu(),
        a = pu();
      ((K !== e || J !== t) && ((Wl = null), uu(e, t)), (t = !1));
      var o = X;
      a: do
        try {
          if (Y !== 0 && q !== null) {
            var s = q,
              c = kl;
            switch (Y) {
              case 8:
                (lu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                js.current === null && (t = !0);
                var l = Y;
                if (((Y = 0), (kl = null), xu(e, s, c, l), n && jl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = Y), (Y = 0), (kl = null), xu(e, s, c, l));
            }
          }
          (gu(), (o = X));
          break;
        } catch (t) {
          du(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (qi = Ki = null),
        (G = r),
        (k.H = i),
        (k.A = a),
        q === null && ((K = null), (J = 0), ai()),
        o
      );
    }
    function gu() {
      for (; q !== null;) yu(q);
    }
    function _u(e, t) {
      var n = G;
      G |= 2;
      var r = fu(),
        i = pu();
      K !== e || J !== t
        ? ((Wl = null), (Ul = Ce() + 500), uu(e, t))
        : (jl = Ue(e, t));
      a: do
        try {
          if (Y !== 0 && q !== null) {
            t = q;
            var o = kl;
            b: switch (Y) {
              case 1:
                ((Y = 0), (kl = null), xu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Ta(o)) {
                  ((Y = 0), (kl = null), bu(t));
                  break;
                }
                ((t = function () {
                  ((Y !== 2 && Y !== 9) || K !== e || (Y = 7), Wu(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                Y = 7;
                break a;
              case 4:
                Y = 5;
                break a;
              case 7:
                Ta(o)
                  ? ((Y = 0), (kl = null), bu(t))
                  : ((Y = 0), (kl = null), xu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (q.tag) {
                  case 26:
                    s = q.memoizedState;
                  case 5:
                  case 27:
                    var c = q;
                    if (!s || Ef(s)) {
                      ((Y = 0), (kl = null));
                      var l = c.sibling;
                      if (l !== null) q = l;
                      else {
                        var u = c.return;
                        u === null ? (q = null) : ((q = u), Su(u));
                      }
                      break b;
                    }
                }
                ((Y = 0), (kl = null), xu(e, t, o, 5));
                break;
              case 6:
                ((Y = 0), (kl = null), xu(e, t, o, 6));
                break;
              case 8:
                (lu(), (X = 6));
                break a;
              default:
                throw Error(a(462));
            }
          }
          vu();
          break;
        } catch (t) {
          du(e, t);
        }
      while (1);
      return (
        (qi = Ki = null),
        (k.H = r),
        (k.A = i),
        (G = n),
        q === null ? ((K = null), (J = 0), ai(), X) : 0
      );
    }
    function vu() {
      for (; q !== null && !xe();) yu(q);
    }
    function yu(e) {
      var t = Tc(e.alternate, e, Nl);
      ((e.memoizedProps = e.pendingProps), t === null ? Su(e) : (q = t));
    }
    function bu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = lc(n, t, t.pendingProps, t.type, void 0, J);
          break;
        case 11:
          t = lc(n, t, t.pendingProps, t.type.render, t.ref, J);
          break;
        case 5:
          lo(t);
        default:
          (Mc(n, t), (t = q = gi(t, Nl)), (t = Tc(n, t, Nl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Su(e) : (q = t));
    }
    function xu(e, t, n, r) {
      ((qi = Ki = null), lo(t), (Ss = null), (Cs = 0));
      var i = t.return;
      try {
        if (Qs(e, i, t, n, J)) {
          ((X = 1), qs(e, ti(n, e.current)), (q = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((q = i), t);
        ((X = 1), qs(e, ti(n, e.current)), (q = null));
        return;
      }
      t.flags & 32768
        ? (P || r === 1
            ? (e = !0)
            : jl || J & 536870912
              ? (e = !1)
              : ((Al = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = js.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          Cu(t, e))
        : Su(t);
    }
    function Su(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Cu(t, Al);
          return;
        }
        e = t.return;
        var n = Ac(t.alternate, t, Nl);
        if (n !== null) {
          q = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          q = t;
          return;
        }
        q = t = e;
      } while (t !== null);
      X === 0 && (X = 5);
    }
    function Cu(e, t) {
      do {
        var n = jc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (q = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          q = e;
          return;
        }
        q = e = n;
      } while (e !== null);
      ((X = 6), (q = null));
    }
    function wu(e, t, n, r, i, o, s, c, l) {
      e.cancelPendingCommit = null;
      do ku();
      while (Kl !== 0);
      if (G & 6) throw Error(a(327));
      if (t !== null) {
        if (t === e.current) throw Error(a(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ii),
          Ye(e, n, o, s, c, l),
          e === K && ((q = K = null), (J = 0)),
          (Jl = t),
          (ql = e),
          (Yl = n),
          (Xl = o),
          (Zl = i),
          (Ql = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Lu(De, function () {
                return (Au(!0), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = k.T), (k.T = null), (i = A.p), (A.p = 2), (s = G), (G |= 4));
          try {
            Xc(e, t, n);
          } finally {
            ((G = s), (A.p = i), (k.T = r));
          }
        }
        ((Kl = 1), Tu(), Eu(), Du());
      }
    }
    function Tu() {
      if (Kl === 1) {
        Kl = 0;
        var e = ql,
          t = Jl,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          ((n = k.T), (k.T = null));
          var r = A.p;
          A.p = 2;
          var i = G;
          G |= 4;
          try {
            sl(t, e);
            var a = Td,
              o = jr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Ar(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && Mr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = kr(s, h),
                      v = kr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((Uf = !!wd), (Td = wd = null));
          } finally {
            ((G = i), (A.p = r), (k.T = n));
          }
        }
        ((e.current = t), (Kl = 2));
      }
    }
    function Eu() {
      if (Kl === 2) {
        Kl = 0;
        var e = ql,
          t = Jl,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = k.T), (k.T = null));
          var r = A.p;
          A.p = 2;
          var i = G;
          G |= 4;
          try {
            Zc(e, t.alternate, t);
          } finally {
            ((G = i), (A.p = r), (k.T = n));
          }
        }
        Kl = 3;
      }
    }
    function Du() {
      if (Kl === 4 || Kl === 3) {
        ((Kl = 0), Se());
        var e = ql,
          t = Jl,
          n = Yl,
          r = Ql;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (Kl = 5)
          : ((Kl = 0), (Jl = ql = null), Ou(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (Gl = null),
          $e(n),
          (t = t.stateNode),
          Ne && typeof Ne.onCommitFiberRoot == `function`)
        )
          try {
            Ne.onCommitFiberRoot(Me, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = k.T), (i = A.p), (A.p = 2), (k.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((k.T = t), (A.p = i));
          }
        }
        (Yl & 3 && ku(),
          Wu(e),
          (i = e.pendingLanes),
          n & 4194090 && i & 42
            ? e === eu
              ? $l++
              : (($l = 0), (eu = e))
            : ($l = 0),
          Gu(0, !1));
      }
    }
    function Ou(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), ca(t)));
    }
    function ku(e) {
      return (Tu(), Eu(), Du(), Au(e));
    }
    function Au() {
      if (Kl !== 5) return !1;
      var e = ql,
        t = Xl;
      Xl = 0;
      var n = $e(Yl),
        r = k.T,
        i = A.p;
      try {
        ((A.p = 32 > n ? 32 : n), (k.T = null), (n = Zl), (Zl = null));
        var o = ql,
          s = Yl;
        if (((Kl = 0), (Jl = ql = null), (Yl = 0), G & 6)) throw Error(a(331));
        var c = G;
        if (
          ((G |= 4),
          wl(o.current),
          gl(o, o.current, s, n),
          (G = c),
          Gu(0, !1),
          Ne && typeof Ne.onPostCommitFiberRoot == `function`)
        )
          try {
            Ne.onPostCommitFiberRoot(Me, o);
          } catch {}
        return !0;
      } finally {
        ((A.p = i), (k.T = r), Ou(e, t));
      }
    }
    function ju(e, t, n) {
      ((t = ti(n, t)),
        (t = Ys(e.stateNode, t, 2)),
        (e = Fa(e, t, 2)),
        e !== null && (Je(e, 2), Wu(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) ju(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            ju(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (Gl === null || !Gl.has(r)))
            ) {
              ((e = ti(n, e)),
                (n = Xs(2)),
                (r = Fa(t, n, 2)),
                r !== null && (Zs(n, r, t, e), Je(r, 2), Wu(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Mu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Ol();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((Ml = !0), i.add(n), (e = Nu.bind(null, e, t, n)), t.then(e, e));
    }
    function Nu(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        K === e &&
          (J & n) === n &&
          (X === 4 || (X === 3 && (J & 62914560) === J && 300 > Ce() - Hl)
            ? !(G & 2) && uu(e, 0)
            : (Il |= n),
          Rl === J && (Rl = 0)),
        Wu(e));
    }
    function Pu(e, t) {
      (t === 0 && (t = Ke()), (e = ci(e, t)), e !== null && (Je(e, t), Wu(e)));
    }
    function Fu(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Pu(e, n));
    }
    function Iu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(a(314));
      }
      (r !== null && r.delete(t), Pu(e, n));
    }
    function Lu(e, t) {
      return ye(e, t);
    }
    var Ru = null,
      zu = null,
      Bu = !1,
      Vu = !1,
      Hu = !1,
      Uu = 0;
    function Wu(e) {
      (e !== zu &&
        e.next === null &&
        (zu === null ? (Ru = zu = e) : (zu = zu.next = e)),
        (Vu = !0),
        Bu || ((Bu = !0), Zu()));
    }
    function Gu(e, t) {
      if (!Hu && Vu) {
        Hu = !0;
        do
          for (var n = !1, r = Ru; r !== null;) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Fe(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), Xu(r, a));
              } else
                ((a = J),
                  (a = He(
                    r,
                    r === K ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || Ue(r, a) || ((n = !0), Xu(r, a)));
            }
            r = r.next;
          }
        while (n);
        Hu = !1;
      }
    }
    function Ku() {
      qu();
    }
    function qu() {
      Vu = Bu = !1;
      var e = 0;
      Uu !== 0 && (jd() && (e = Uu), (Uu = 0));
      for (var t = Ce(), n = null, r = Ru; r !== null;) {
        var i = r.next,
          a = Ju(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (Ru = i) : (n.next = i),
            i === null && (zu = n))
          : ((n = r), (e !== 0 || a & 3) && (Vu = !0)),
          (r = i));
      }
      Gu(e, !1);
    }
    function Ju(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Fe(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = We(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = K),
        (n = J),
        (n = He(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (Y === 2 || Y === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && be(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || Ue(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && be(r), $e(n))) {
          case 2:
          case 8:
            n = Ee;
            break;
          case 32:
            n = De;
            break;
          case 268435456:
            n = ke;
            break;
          default:
            n = De;
        }
        return (
          (r = Yu.bind(null, e)),
          (n = ye(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && be(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function Yu(e, t) {
      if (Kl !== 0 && Kl !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (ku(!0) && e.callbackNode !== n) return null;
      var r = J;
      return (
        (r = He(
          e,
          e === K ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (iu(e, r, t),
            Ju(e, Ce()),
            e.callbackNode != null && e.callbackNode === n
              ? Yu.bind(null, e)
              : null)
      );
    }
    function Xu(e, t) {
      if (ku()) return null;
      iu(e, t, !0);
    }
    function Zu() {
      Fd(function () {
        G & 6 ? ye(Te, Ku) : qu();
      });
    }
    function Qu() {
      return (Uu === 0 && (Uu = Ge()), Uu);
    }
    function $u(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : rn(`` + e);
    }
    function ed(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function td(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = $u((i[it] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[it] || null)
            ? $u(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Tn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (Uu !== 0) {
                    var e = o ? ed(i, o) : new FormData(i);
                    is(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? ed(i, o) : new FormData(i)),
                    is(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var nd = 0; nd < Qr.length; nd++) {
      var rd = Qr[nd];
      $r(rd.toLowerCase(), `on` + (rd[0].toUpperCase() + rd.slice(1)));
    }
    ($r(Wr, `onAnimationEnd`),
      $r(Gr, `onAnimationIteration`),
      $r(Kr, `onAnimationStart`),
      $r(`dblclick`, `onDoubleClick`),
      $r(`focusin`, `onFocus`),
      $r(`focusout`, `onBlur`),
      $r(qr, `onTransitionRun`),
      $r(Jr, `onTransitionStart`),
      $r(Yr, `onTransitionCancel`),
      $r(Xr, `onTransitionEnd`),
      xt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      xt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      xt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      xt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      bt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      bt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      bt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      bt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      bt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      bt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var id =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      ad = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(id),
      );
    function od(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Us(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Us(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[ot];
      n === void 0 && (n = t[ot] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (ud(t, e, 2, !1), n.add(r));
    }
    function sd(e, t, n) {
      var r = 0;
      (t && (r |= 4), ud(n, e, r, t));
    }
    var cd = `_reactListening` + Math.random().toString(36).slice(2);
    function ld(e) {
      if (!e[cd]) {
        ((e[cd] = !0),
          vt.forEach(function (t) {
            t !== `selectionchange` &&
              (ad.has(t) || sd(t, !1, e), sd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[cd] || ((t[cd] = !0), sd(`selectionchange`, !1, t));
      }
    }
    function ud(e, t, n, r) {
      switch (Xf(t)) {
        case 2:
          var i = Wf;
          break;
        case 8:
          i = Gf;
          break;
        default:
          i = Kf;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !mn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function dd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (o === 4)
              for (o = r.return; o !== null;) {
                var l = o.tag;
                if ((l === 3 || l === 4) && o.stateNode.containerInfo === i)
                  return;
                o = o.return;
              }
            for (; c !== null;) {
              if (((o = pt(c)), o === null)) return;
              if (((l = o.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = o;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      dn(function () {
        var r = a,
          i = on(n),
          o = [];
        a: {
          var c = Zr.get(e);
          if (c !== void 0) {
            var l = Tn,
              u = e;
            switch (e) {
              case `keypress`:
                if (bn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Un;
                break;
              case `focusin`:
                ((u = `focus`), (l = Pn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Pn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Pn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Mn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Nn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Gn;
                break;
              case Wr:
              case Gr:
              case Kr:
                l = Fn;
                break;
              case Xr:
                l = Kn;
                break;
              case `scroll`:
              case `scrollend`:
                l = Dn;
                break;
              case `wheel`:
                l = qn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = In;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Wn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Jn;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = fn(m, p)), g != null && d.push(fd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              o.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c &&
                n !== an &&
                (u = n.relatedTarget || n.fromElement) &&
                (pt(u) || u[at]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? pt(u) : null),
                  u !== null &&
                    ((f = s(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Mn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Wn),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = l == null ? c : ht(l)),
                (h = u == null ? c : ht(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                pt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = l, p = u, m = 0, h = d; h; h = md(h)) m++;
                  for (h = 0, g = p; g; g = md(g)) h++;
                  for (; 0 < m - h;) ((d = md(d)), m--);
                  for (; 0 < h - m;) ((p = md(p)), h--);
                  for (; m--;) {
                    if (d === p || (p !== null && d === p.alternate)) break b;
                    ((d = md(d)), (p = md(p)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && hd(o, c, l, d, !1),
                u !== null && f !== null && hd(o, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? ht(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var _ = mr;
            else if (cr(c)) {
              if (hr) _ = wr;
              else {
                _ = Sr;
                var v = xr;
              }
            } else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && en(r.elementType) && (_ = mr)
                  : (_ = Cr));
            if ((_ &&= _(e, r))) {
              lr(o, _, n, i);
              break a;
            }
            (v && v(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Kt(c, `number`, c.value));
          }
          switch (((v = r ? ht(r) : window), e)) {
            case `focusin`:
              (cr(v) || v.contentEditable === `true`) &&
                ((Pr = v), (Fr = r), (Ir = null));
              break;
            case `focusout`:
              Ir = Fr = Pr = null;
              break;
            case `mousedown`:
              Lr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Lr = !1), Rr(o, n, i));
              break;
            case `selectionchange`:
              if (Nr) break;
            case `keydown`:
            case `keyup`:
              Rr(o, n, i);
          }
          var y;
          if (Xn)
            b: {
              switch (e) {
                case `compositionstart`:
                  var b = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  b = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  b = `onCompositionUpdate`;
                  break b;
              }
              b = void 0;
            }
          else
            ir
              ? nr(e, n) && (b = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (b = `onCompositionStart`);
          (b &&
            ($n &&
              n.locale !== `ko` &&
              (ir || b !== `onCompositionStart`
                ? b === `onCompositionEnd` && ir && (y = yn())
                : ((gn = i),
                  (_n = `value` in gn ? gn.value : gn.textContent),
                  (ir = !0))),
            (v = pd(r, b)),
            0 < v.length &&
              ((b = new Ln(b, e, null, n, i)),
              o.push({ event: b, listeners: v }),
              y ? (b.data = y) : ((y = rr(n)), y !== null && (b.data = y)))),
            (y = Qn ? ar(e, n) : or(e, n)) &&
              ((b = pd(r, `onBeforeInput`)),
              0 < b.length &&
                ((v = new Ln(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: v, listeners: b }),
                (v.data = y))),
            td(o, e, r, n, i));
        }
        od(o, t);
      });
    }
    function fd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function pd(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = fn(e, n)),
            i != null && r.unshift(fd(e, i, a)),
            (i = fn(e, t)),
            i != null && r.push(fd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function md(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function hd(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = fn(n, a)), l != null && o.unshift(fd(n, l, c)))
            : i || ((l = fn(n, a)), l != null && o.push(fd(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var gd = /\r\n?/g,
      _d = /\u0000|\uFFFD/g;
    function vd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          gd,
          `
`,
        )
        .replace(_d, ``);
    }
    function yd(e, t) {
      return ((t = vd(t)), vd(e) === t);
    }
    function bd() {}
    function $(e, t, n, r, i, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Xt(e, `` + r);
          break;
        case `className`:
          Dt(e, `class`, r);
          break;
        case `tabIndex`:
          Dt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Dt(e, n, r);
          break;
        case `style`:
          $t(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Dt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (
            (r === `` && (t !== `a` || n !== `href`)) ||
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = rn(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, i.name, i, null),
                  $(e, t, `formEncType`, i.formEncType, i, null),
                  $(e, t, `formMethod`, i.formMethod, i, null),
                  $(e, t, `formTarget`, i.formTarget, i, null))
                : ($(e, t, `encType`, i.encType, i, null),
                  $(e, t, `method`, i.method, i, null),
                  $(e, t, `target`, i.target, i, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = rn(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = bd);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(a(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
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
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = rn(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
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
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Et(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Ot(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Ot(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Ot(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Ot(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Ot(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Ot(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Ot(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Ot(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Ot(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Et(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = tn.get(n) || n), Et(e, n, r));
      }
    }
    function xd(e, t, n, r, i, o) {
      switch (n) {
        case `style`:
          $t(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(a(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(a(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Xt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Xt(e, `` + r);
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = bd);
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
          if (!yt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((i = n.endsWith(`Capture`)),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                (o = e[it] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, i),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, i));
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                  ? e.setAttribute(n, ``)
                  : Et(e, n, r);
            }
      }
    }
    function Sd(e, t, n) {
      switch (t) {
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
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            i = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    i = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(a(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (i && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = i = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    i = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(a(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          (Gt(e, o, c, l, u, s, i, !1), zt(e));
          return;
        case `select`:
          for (i in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(i) && ((c = n[i]), c != null))
              switch (i) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, i, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && qt(e, !!r, n, !0) : qt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = i = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  i = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(a(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          (Yt(e, r, i, o), zt(e));
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < id.length; r++) Q(id[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
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
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(a(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (en(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && xd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    function Cd(e, t, n, r) {
      switch (t) {
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
          var i = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  i = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(a(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          Wt(e, s, c, l, u, d, o, i);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (i in r)
            if (
              ((o = r[i]),
              (l = n[i]),
              r.hasOwnProperty(i) && (o != null || l != null))
            )
              switch (i) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && $(e, t, i, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? qt(e, !!n, n ? [] : ``, !1) : qt(e, !!n, t, !0))
              : qt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((i = n[c]),
              n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, i);
              }
          for (s in r)
            if (
              ((i = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (i != null || o != null))
            )
              switch (s) {
                case `value`:
                  p = i;
                  break;
                case `defaultValue`:
                  m = i;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (i != null) throw Error(a(91));
                  break;
                default:
                  i !== o && $(e, t, s, i, r, o);
              }
          Jt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  $(e, t, l, p, r, m);
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
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(a(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (en(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  xd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  xd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    var wd = null,
      Td = null;
    function Ed(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Dd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Od(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function kd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Ad = null;
    function jd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e !== Ad && ((Ad = e), !0)
        : ((Ad = null), !1);
    }
    var Md = typeof setTimeout == `function` ? setTimeout : void 0,
      Nd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Pd = typeof Promise == `function` ? Promise : void 0,
      Fd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Pd === void 0
            ? Md
            : function (e) {
                return Pd.resolve(null).then(e).catch(Id);
              };
    function Id(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Ld(e) {
      return e === `head`;
    }
    function Rd(e, t) {
      var n = t,
        r = 0,
        i = 0;
      do {
        var a = n.nextSibling;
        if ((e.removeChild(n), a && a.nodeType === 8)) {
          if (((n = a.data), n === `/$`)) {
            if (0 < r && 8 > r) {
              n = r;
              var o = e.ownerDocument;
              if ((n & 1 && Jd(o.documentElement), n & 2 && Jd(o.body), n & 4))
                for (n = o.head, Jd(n), o = n.firstChild; o;) {
                  var s = o.nextSibling,
                    c = o.nodeName;
                  (o[dt] ||
                    c === `SCRIPT` ||
                    c === `STYLE` ||
                    (c === `LINK` && o.rel.toLowerCase() === `stylesheet`) ||
                    n.removeChild(o),
                    (o = s));
                }
            }
            if (i === 0) {
              (e.removeChild(a), hp(t));
              return;
            }
            i--;
          } else
            n === `$` || n === `$?` || n === `$!`
              ? i++
              : (r = n.charCodeAt(0) - 48);
        } else r = 0;
        n = a;
      } while (n);
      hp(t);
    }
    function zd(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (zd(n), ft(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function Bd(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[dt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = Wd(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function Vd(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = Wd(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function Hd(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState === `complete`)
      );
    }
    function Ud(e, t) {
      var n = e.ownerDocument;
      if (e.data !== `$?` || n.readyState === `complete`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function Wd(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` || t === `$!` || t === `$?` || t === `F!` || t === `F`)
          )
            break;
          if (t === `/$`) return null;
        }
      }
      return e;
    }
    var Gd = null;
    function Kd(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?`) {
            if (t === 0) return e;
            t--;
          } else n === `/$` && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function qd(e, t, n) {
      switch (((t = Ed(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(a(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(a(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(a(454));
          return e;
        default:
          throw Error(a(451));
      }
    }
    function Jd(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      ft(e);
    }
    var Yd = new Map(),
      Xd = new Set();
    function Zd(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var Qd = A.d;
    A.d = { f: $d, r: ef, D: rf, C: af, L: of, m: sf, X: lf, S: cf, M: uf };
    function $d() {
      var e = Qd.f(),
        t = cu();
      return e || t;
    }
    function ef(e) {
      var t = mt(e);
      t !== null && t.tag === 5 && t.type === `form` ? os(t) : Qd.r(e);
    }
    var tf = typeof document > `u` ? null : document;
    function nf(e, t, n) {
      var r = tf;
      if (r && typeof t == `string` && t) {
        var i = Ut(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          Xd.has(i) ||
            (Xd.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Sd(t, `link`, e),
              _t(t),
              r.head.appendChild(t))));
      }
    }
    function rf(e) {
      (Qd.D(e), nf(`dns-prefetch`, e, null));
    }
    function af(e, t) {
      (Qd.C(e, t), nf(`preconnect`, e, t));
    }
    function of(e, t, n) {
      Qd.L(e, t, n);
      var r = tf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Ut(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Ut(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Ut(n.imageSizes) + `"]`))
          : (i += `[href="` + Ut(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = ff(e);
            break;
          case `script`:
            a = gf(e);
        }
        Yd.has(a) ||
          ((e = p(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          Yd.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(pf(a))) ||
            (t === `script` && r.querySelector(_f(a))) ||
            ((t = r.createElement(`link`)),
            Sd(t, `link`, e),
            _t(t),
            r.head.appendChild(t)));
      }
    }
    function sf(e, t) {
      Qd.m(e, t);
      var n = tf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Ut(r) +
            `"][href="` +
            Ut(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = gf(e);
        }
        if (
          !Yd.has(a) &&
          ((e = p({ rel: `modulepreload`, href: e }, t)),
          Yd.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(_f(a))) return;
          }
          ((r = n.createElement(`link`)),
            Sd(r, `link`, e),
            _t(r),
            n.head.appendChild(r));
        }
      }
    }
    function cf(e, t, n) {
      Qd.S(e, t, n);
      var r = tf;
      if (r && e) {
        var i = gt(r).hoistableStyles,
          a = ff(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(pf(a)))) s.loading = 5;
          else {
            ((e = p({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = Yd.get(a)) && bf(e, n));
            var c = (o = r.createElement(`link`));
            (_t(c),
              Sd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              yf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function lf(e, t) {
      Qd.X(e, t);
      var n = tf;
      if (n && e) {
        var r = gt(n).hoistableScripts,
          i = gf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(_f(i))),
          a ||
            ((e = p({ src: e, async: !0 }, t)),
            (t = Yd.get(i)) && xf(e, t),
            (a = n.createElement(`script`)),
            _t(a),
            Sd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function uf(e, t) {
      Qd.M(e, t);
      var n = tf;
      if (n && e) {
        var r = gt(n).hoistableScripts,
          i = gf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(_f(i))),
          a ||
            ((e = p({ src: e, async: !0, type: `module` }, t)),
            (t = Yd.get(i)) && xf(e, t),
            (a = n.createElement(`script`)),
            _t(a),
            Sd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function df(e, t, n, r) {
      var i = (i = fe.current) ? Zd(i) : null;
      if (!i) throw Error(a(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = ff(n.href)),
              (n = gt(i).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = ff(n.href);
            var o = gt(i).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((i = i.ownerDocument || i),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = i.querySelector(pf(e))) &&
                  !o._p &&
                  ((s.instance = o), (s.state.loading = 5)),
                Yd.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  Yd.set(e, n),
                  o || hf(i, e, n, s.state))),
              t && r === null)
            )
              throw Error(a(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(a(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = gf(n)),
                (n = gt(i).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(a(444, e));
      }
    }
    function ff(e) {
      return `href="` + Ut(e) + `"`;
    }
    function pf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function mf(e) {
      return p({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function hf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Sd(t, `link`, n),
          _t(t),
          e.head.appendChild(t));
    }
    function gf(e) {
      return `[src="` + Ut(e) + `"]`;
    }
    function _f(e) {
      return `script[async]` + e;
    }
    function vf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Ut(n.href) + `"]`);
            if (r) return ((t.instance = r), _t(r), r);
            var i = p({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              _t(r),
              Sd(r, `style`, i),
              yf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            i = ff(n.href);
            var o = e.querySelector(pf(i));
            if (o) return ((t.state.loading |= 4), (t.instance = o), _t(o), o);
            ((r = mf(n)),
              (i = Yd.get(i)) && bf(r, i),
              (o = (e.ownerDocument || e).createElement(`link`)),
              _t(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Sd(o, `link`, r),
              (t.state.loading |= 4),
              yf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = gf(n.src)),
              (i = e.querySelector(_f(o)))
                ? ((t.instance = i), _t(i), i)
                : ((r = n),
                  (i = Yd.get(o)) && ((r = p({}, n)), xf(r, i)),
                  (e = e.ownerDocument || e),
                  (i = e.createElement(`script`)),
                  _t(i),
                  Sd(i, `link`, r),
                  e.head.appendChild(i),
                  (t.instance = i))
            );
          case `void`:
            return null;
          default:
            throw Error(a(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), yf(r, n.precedence, e));
      return t.instance;
    }
    function yf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function bf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function xf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Sf = null;
    function Cf(e, t, n) {
      if (Sf === null) {
        var r = new Map(),
          i = (Sf = new Map());
        i.set(n, r);
      } else ((i = Sf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[dt] ||
            a[rt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function wf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function Tf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled), typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Ef(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    var Df = null;
    function Of() {}
    function kf(e, t, n) {
      if (Df === null) throw Error(a(475));
      var r = Df;
      if (
        t.type === `stylesheet` &&
        (typeof n.media != `string` || !1 !== matchMedia(n.media).matches) &&
        !(t.state.loading & 4)
      ) {
        if (t.instance === null) {
          var i = ff(n.href),
            o = e.querySelector(pf(i));
          if (o) {
            ((e = o._p),
              typeof e == `object` &&
                e &&
                typeof e.then == `function` &&
                (r.count++, (r = jf.bind(r)), e.then(r, r)),
              (t.state.loading |= 4),
              (t.instance = o),
              _t(o));
            return;
          }
          ((o = e.ownerDocument || e),
            (n = mf(n)),
            (i = Yd.get(i)) && bf(n, i),
            (o = o.createElement(`link`)),
            _t(o));
          var s = o;
          ((s._p = new Promise(function (e, t) {
            ((s.onload = e), (s.onerror = t));
          })),
            Sd(o, `link`, n),
            (t.instance = o));
        }
        (r.stylesheets === null && (r.stylesheets = new Map()),
          r.stylesheets.set(t, e),
          (e = t.state.preload) &&
            !(t.state.loading & 3) &&
            (r.count++,
            (t = jf.bind(r)),
            e.addEventListener(`load`, t),
            e.addEventListener(`error`, t)));
      }
    }
    function Af() {
      if (Df === null) throw Error(a(475));
      var e = Df;
      return (
        e.stylesheets && e.count === 0 && Nf(e, e.stylesheets),
        0 < e.count
          ? function (t) {
              var n = setTimeout(function () {
                if ((e.stylesheets && Nf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4);
              return (
                (e.unsuspend = t),
                function () {
                  ((e.unsuspend = null), clearTimeout(n));
                }
              );
            }
          : null
      );
    }
    function jf() {
      if ((this.count--, this.count === 0)) {
        if (this.stylesheets) Nf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var Mf = null;
    function Nf(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Mf = new Map()),
          t.forEach(Pf, e),
          (Mf = null),
          jf.call(e)));
    }
    function Pf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Mf.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), Mf.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var Ff = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: oe,
      _currentValue2: oe,
      _threadCount: 0,
    };
    function If(e, t, n, r, i, a, o, s) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = qe(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = qe(0)),
        (this.hiddenUpdates = qe(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = s),
        (this.incompleteTransitions = new Map()));
    }
    function Lf(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new If(e, t, n, o, s, c, l, d)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = pi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = sa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ma(a),
        e
      );
    }
    function Rf(e) {
      return e ? ((e = di), e) : di;
    }
    function zf(e, t, n, r, i, a) {
      ((i = Rf(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Pa(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Fa(e, r, t)),
        n !== null && (ru(n, e, t), Ia(n, e, t)));
    }
    function Bf(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function Vf(e, t) {
      (Bf(e, t), (e = e.alternate) && Bf(e, t));
    }
    function Hf(e) {
      if (e.tag === 13) {
        var t = ci(e, 67108864);
        (t !== null && ru(t, e, 67108864), Vf(e, 67108864));
      }
    }
    var Uf = !0;
    function Wf(e, t, n, r) {
      var i = k.T;
      k.T = null;
      var a = A.p;
      try {
        ((A.p = 2), Kf(e, t, n, r));
      } finally {
        ((A.p = a), (k.T = i));
      }
    }
    function Gf(e, t, n, r) {
      var i = k.T;
      k.T = null;
      var a = A.p;
      try {
        ((A.p = 8), Kf(e, t, n, r));
      } finally {
        ((A.p = a), (k.T = i));
      }
    }
    function Kf(e, t, n, r) {
      if (Uf) {
        var i = qf(r);
        if (i === null) (dd(e, t, r, Jf, n), ap(e, r));
        else if (sp(i, e, t, n, r)) r.stopPropagation();
        else if ((ap(e, r), t & 4 && -1 < ip.indexOf(e))) {
          for (; i !== null;) {
            var a = mt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Ve(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Fe(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (Wu(a), !(G & 6) && ((Ul = Ce() + 500), Gu(0, !1)));
                    }
                  }
                  break;
                case 13:
                  ((s = ci(a, 2)), s !== null && ru(s, a, 2), cu(), Vf(a, 2));
              }
            if (((a = qf(r)), a === null && dd(e, t, r, Jf, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else dd(e, t, r, null, n);
      }
    }
    function qf(e) {
      return ((e = on(e)), Yf(e));
    }
    var Jf = null;
    function Yf(e) {
      if (((Jf = null), (e = pt(e)), e !== null)) {
        var t = s(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((Jf = e), null);
    }
    function Xf(e) {
      switch (e) {
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
          switch (we()) {
            case Te:
              return 2;
            case Ee:
              return 8;
            case De:
            case Oe:
              return 32;
            case ke:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Zf = !1,
      Qf = null,
      $f = null,
      ep = null,
      tp = new Map(),
      np = new Map(),
      rp = [],
      ip =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function ap(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Qf = null;
          break;
        case `dragenter`:
        case `dragleave`:
          $f = null;
          break;
        case `mouseover`:
        case `mouseout`:
          ep = null;
          break;
        case `pointerover`:
        case `pointerout`:
          tp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          np.delete(t.pointerId);
      }
    }
    function op(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = mt(t)), t !== null && Hf(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function sp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((Qf = op(Qf, e, t, n, r, i)), !0);
        case `dragenter`:
          return (($f = op($f, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((ep = op(ep, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (tp.set(a, op(tp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            np.set(a, op(np.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function cp(e) {
      var t = pt(e.target);
      if (t !== null) {
        var n = s(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                tt(e.priority, function () {
                  if (n.tag === 13) {
                    var e = tu();
                    e = Qe(e);
                    var t = ci(n, e);
                    (t !== null && ru(t, n, e), Vf(n, e));
                  }
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function lp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = qf(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((an = r), n.target.dispatchEvent(r), (an = null));
        } else return ((t = mt(n)), t !== null && Hf(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function up(e, t, n) {
      lp(e) && n.delete(t);
    }
    function dp() {
      ((Zf = !1),
        Qf !== null && lp(Qf) && (Qf = null),
        $f !== null && lp($f) && ($f = null),
        ep !== null && lp(ep) && (ep = null),
        tp.forEach(up),
        np.forEach(up));
    }
    function fp(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        Zf ||
          ((Zf = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, dp)));
    }
    var pp = null;
    function mp(e) {
      pp !== e &&
        ((pp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          pp === e && (pp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (Yf(r || n) === null) continue;
              break;
            }
            var a = mt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              is(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function hp(e) {
      function t(t) {
        return fp(t, e);
      }
      (Qf !== null && fp(Qf, e),
        $f !== null && fp($f, e),
        ep !== null && fp(ep, e),
        tp.forEach(t),
        np.forEach(t));
      for (var n = 0; n < rp.length; n++) {
        var r = rp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < rp.length && ((n = rp[0]), n.blockedOn === null);)
        (cp(n), n.blockedOn === null && rp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[it] || null;
          if (typeof a == `function`) o || mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[it] || null))) s = o.formAction;
              else if (Yf(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              mp(n));
          }
        }
    }
    function gp(e) {
      this._internalRoot = e;
    }
    ((_p.prototype.render = gp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(a(409));
        var n = t.current;
        zf(n, tu(), e, t, null, null);
      }),
      (_p.prototype.unmount = gp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (zf(e.current, 2, null, e, null, null), cu(), (t[at] = null));
          }
        }));
    function _p(e) {
      this._internalRoot = e;
    }
    _p.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = et();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < rp.length && t !== 0 && t < rp[n].priority; n++);
        (rp.splice(n, 0, e), n === 0 && cp(e));
      }
    };
    var vp = r.version;
    if (vp !== `19.1.1`) throw Error(a(527, vp, `19.1.1`));
    A.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(a(188))
          : ((e = Object.keys(e).join(`,`)), Error(a(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : f(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var yp = {
      bundleType: 0,
      version: `19.1.1`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: k,
      reconcilerVersion: `19.1.1`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var bp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!bp.isDisabled && bp.supportsFiber)
        try {
          ((Me = bp.inject(yp)), (Ne = bp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!o(e)) throw Error(a(299));
      var n = !1,
        r = ``,
        i = Ws,
        s = Gs,
        c = Ks,
        l = null;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (l = t.unstable_transitionCallbacks)),
        (t = Lf(e, 1, !1, null, null, n, r, i, s, c, l, null)),
        (e[at] = t.current),
        ld(e),
        new gp(t)
      );
    };
  }),
  ut = t((e, t) => {
    function n() {
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = lt()));
  }),
  dt = t((e, t) => {
    var n = -1,
      r = 1,
      i = 0;
    function a(e, t, n, r, a) {
      if (e === t) return e ? [[i, e]] : [];
      if (n != null) {
        var s = D(e, t, n);
        if (s) return s;
      }
      var c = l(e, t),
        u = e.substring(0, c);
      ((e = e.substring(c)), (t = t.substring(c)), (c = d(e, t)));
      var f = e.substring(e.length - c);
      ((e = e.substring(0, e.length - c)), (t = t.substring(0, t.length - c)));
      var m = o(e, t);
      return (
        u && m.unshift([i, u]), f && m.push([i, f]), b(m, a), r && p(m), m
      );
    }
    function o(e, t) {
      var o;
      if (!e) return [[r, t]];
      if (!t) return [[n, e]];
      var c = e.length > t.length ? e : t,
        l = e.length > t.length ? t : e,
        u = c.indexOf(l);
      if (u !== -1)
        return (
          (o = [
            [r, c.substring(0, u)],
            [i, l],
            [r, c.substring(u + l.length)],
          ]),
          e.length > t.length && (o[0][0] = o[2][0] = n),
          o
        );
      if (l.length === 1)
        return [
          [n, e],
          [r, t],
        ];
      var d = f(e, t);
      if (d) {
        var p = d[0],
          m = d[1],
          h = d[2],
          g = d[3],
          _ = d[4],
          v = a(p, h),
          y = a(m, g);
        return v.concat([[i, _]], y);
      }
      return s(e, t);
    }
    function s(e, t) {
      for (
        var i = e.length,
          a = t.length,
          o = Math.ceil((i + a) / 2),
          s = o,
          l = 2 * o,
          u = Array(l),
          d = Array(l),
          f = 0;
        f < l;
        f++
      )
        ((u[f] = -1), (d[f] = -1));
      ((u[s + 1] = 0), (d[s + 1] = 0));
      for (
        var p = i - a, m = p % 2 != 0, h = 0, g = 0, _ = 0, v = 0, y = 0;
        y < o;
        y++
      ) {
        for (var b = -y + h; b <= y - g; b += 2) {
          for (
            var x = s + b,
              S =
                b === -y || (b !== y && u[x - 1] < u[x + 1])
                  ? u[x + 1]
                  : u[x - 1] + 1,
              C = S - b;
            S < i && C < a && e.charAt(S) === t.charAt(C);
          )
            (S++, C++);
          if (((u[x] = S), S > i)) g += 2;
          else if (C > a) h += 2;
          else if (m) {
            var w = s + p - b;
            if (w >= 0 && w < l && d[w] !== -1) {
              var T = i - d[w];
              if (S >= T) return c(e, t, S, C);
            }
          }
        }
        for (var E = -y + _; E <= y - v; E += 2) {
          for (
            var w = s + E,
              T =
                E === -y || (E !== y && d[w - 1] < d[w + 1])
                  ? d[w + 1]
                  : d[w - 1] + 1,
              D = T - E;
            T < i && D < a && e.charAt(i - T - 1) === t.charAt(a - D - 1);
          )
            (T++, D++);
          if (((d[w] = T), T > i)) v += 2;
          else if (D > a) _ += 2;
          else if (!m) {
            var x = s + p - E;
            if (x >= 0 && x < l && u[x] !== -1) {
              var S = u[x],
                C = s + S - x;
              if (((T = i - T), S >= T)) return c(e, t, S, C);
            }
          }
        }
      }
      return [
        [n, e],
        [r, t],
      ];
    }
    function c(e, t, n, r) {
      var i = e.substring(0, n),
        o = t.substring(0, r),
        s = e.substring(n),
        c = t.substring(r),
        l = a(i, o),
        u = a(s, c);
      return l.concat(u);
    }
    function l(e, t) {
      if (!e || !t || e.charAt(0) !== t.charAt(0)) return 0;
      for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;)
        (e.substring(a, i) == t.substring(a, i) ? ((n = i), (a = n)) : (r = i),
          (i = Math.floor((r - n) / 2 + n)));
      return (x(e.charCodeAt(i - 1)) && i--, i);
    }
    function u(e, t) {
      var n = e.length,
        r = t.length;
      if (n == 0 || r == 0) return 0;
      n > r ? (e = e.substring(n - r)) : n < r && (t = t.substring(0, n));
      var i = Math.min(n, r);
      if (e == t) return i;
      for (var a = 0, o = 1; ;) {
        var s = e.substring(i - o),
          c = t.indexOf(s);
        if (c == -1) return a;
        ((o += c),
          (c == 0 || e.substring(i - o) == t.substring(0, o)) &&
            ((a = o), o++));
      }
    }
    function d(e, t) {
      if (!e || !t || e.slice(-1) !== t.slice(-1)) return 0;
      for (var n = 0, r = Math.min(e.length, t.length), i = r, a = 0; n < i;)
        (e.substring(e.length - i, e.length - a) ==
        t.substring(t.length - i, t.length - a)
          ? ((n = i), (a = n))
          : (r = i),
          (i = Math.floor((r - n) / 2 + n)));
      return (S(e.charCodeAt(e.length - i)) && i--, i);
    }
    function f(e, t) {
      var n = e.length > t.length ? e : t,
        r = e.length > t.length ? t : e;
      if (n.length < 4 || r.length * 2 < n.length) return null;
      function i(e, t, n) {
        for (
          var r = e.substring(n, n + Math.floor(e.length / 4)),
            i = -1,
            a = ``,
            o,
            s,
            c,
            u;
          (i = t.indexOf(r, i + 1)) !== -1;
        ) {
          var f = l(e.substring(n), t.substring(i)),
            p = d(e.substring(0, n), t.substring(0, i));
          a.length < p + f &&
            ((a = t.substring(i - p, i) + t.substring(i, i + f)),
            (o = e.substring(0, n - p)),
            (s = e.substring(n + f)),
            (c = t.substring(0, i - p)),
            (u = t.substring(i + f)));
        }
        return a.length * 2 >= e.length ? [o, s, c, u, a] : null;
      }
      var a = i(n, r, Math.ceil(n.length / 4)),
        o = i(n, r, Math.ceil(n.length / 2)),
        s;
      if (!a && !o) return null;
      s = o ? (a && a[4].length > o[4].length ? a : o) : a;
      var c, u, f, p;
      e.length > t.length
        ? ((c = s[0]), (u = s[1]), (f = s[2]), (p = s[3]))
        : ((f = s[0]), (p = s[1]), (c = s[2]), (u = s[3]));
      var m = s[4];
      return [c, u, f, p, m];
    }
    function p(e) {
      for (
        var t = !1, a = [], o = 0, s = null, c = 0, l = 0, d = 0, f = 0, p = 0;
        c < e.length;
      )
        (e[c][0] == i
          ? ((a[o++] = c), (l = f), (d = p), (f = 0), (p = 0), (s = e[c][1]))
          : (e[c][0] == r ? (f += e[c][1].length) : (p += e[c][1].length),
            s &&
              s.length <= Math.max(l, d) &&
              s.length <= Math.max(f, p) &&
              (e.splice(a[o - 1], 0, [n, s]),
              (e[a[o - 1] + 1][0] = r),
              o--,
              o--,
              (c = o > 0 ? a[o - 1] : -1),
              (l = 0),
              (d = 0),
              (f = 0),
              (p = 0),
              (s = null),
              (t = !0))),
          c++);
      for (t && b(e), y(e), c = 1; c < e.length;) {
        if (e[c - 1][0] == n && e[c][0] == r) {
          var m = e[c - 1][1],
            h = e[c][1],
            g = u(m, h),
            _ = u(h, m);
          (g >= _
            ? (g >= m.length / 2 || g >= h.length / 2) &&
              (e.splice(c, 0, [i, h.substring(0, g)]),
              (e[c - 1][1] = m.substring(0, m.length - g)),
              (e[c + 1][1] = h.substring(g)),
              c++)
            : (_ >= m.length / 2 || _ >= h.length / 2) &&
              (e.splice(c, 0, [i, m.substring(0, _)]),
              (e[c - 1][0] = r),
              (e[c - 1][1] = h.substring(0, h.length - _)),
              (e[c + 1][0] = n),
              (e[c + 1][1] = m.substring(_)),
              c++),
            c++);
        }
        c++;
      }
    }
    var m = /[^a-zA-Z0-9]/,
      h = /\s/,
      g = /[\r\n]/,
      _ = /\n\r?\n$/,
      v = /^\r?\n\r?\n/;
    function y(e) {
      function t(e, t) {
        if (!e || !t) return 6;
        var n = e.charAt(e.length - 1),
          r = t.charAt(0),
          i = n.match(m),
          a = r.match(m),
          o = i && n.match(h),
          s = a && r.match(h),
          c = o && n.match(g),
          l = s && r.match(g),
          u = c && e.match(_),
          d = l && t.match(v);
        return u || d
          ? 5
          : c || l
            ? 4
            : i && !o && s
              ? 3
              : o || s
                ? 2
                : i || a
                  ? 1
                  : 0;
      }
      for (var n = 1; n < e.length - 1;) {
        if (e[n - 1][0] == i && e[n + 1][0] == i) {
          var r = e[n - 1][1],
            a = e[n][1],
            o = e[n + 1][1],
            s = d(r, a);
          if (s) {
            var c = a.substring(a.length - s);
            ((r = r.substring(0, r.length - s)),
              (a = c + a.substring(0, a.length - s)),
              (o = c + o));
          }
          for (
            var l = r, u = a, f = o, p = t(r, a) + t(a, o);
            a.charAt(0) === o.charAt(0);
          ) {
            ((r += a.charAt(0)),
              (a = a.substring(1) + o.charAt(0)),
              (o = o.substring(1)));
            var y = t(r, a) + t(a, o);
            y >= p && ((p = y), (l = r), (u = a), (f = o));
          }
          e[n - 1][1] != l &&
            (l ? (e[n - 1][1] = l) : (e.splice(n - 1, 1), n--),
            (e[n][1] = u),
            f ? (e[n + 1][1] = f) : (e.splice(n + 1, 1), n--));
        }
        n++;
      }
    }
    function b(e, t) {
      e.push([i, ``]);
      for (var a = 0, o = 0, s = 0, c = ``, u = ``, f; a < e.length;)
        if (a < e.length - 1 && !e[a][1]) e.splice(a, 1);
        else
          switch (e[a][0]) {
            case r:
              (s++, (u += e[a][1]), a++);
              break;
            case n:
              (o++, (c += e[a][1]), a++);
              break;
            case i:
              var p = a - s - o - 1;
              if (t) {
                if (p >= 0 && w(e[p][1])) {
                  var m = e[p][1].slice(-1);
                  if (
                    ((e[p][1] = e[p][1].slice(0, -1)),
                    (c = m + c),
                    (u = m + u),
                    !e[p][1])
                  ) {
                    (e.splice(p, 1), a--);
                    var h = p - 1;
                    (e[h] && e[h][0] === r && (s++, (u = e[h][1] + u), h--),
                      e[h] && e[h][0] === n && (o++, (c = e[h][1] + c), h--),
                      (p = h));
                  }
                }
                if (C(e[a][1])) {
                  var m = e[a][1].charAt(0);
                  ((e[a][1] = e[a][1].slice(1)), (c += m), (u += m));
                }
              }
              if (a < e.length - 1 && !e[a][1]) {
                e.splice(a, 1);
                break;
              }
              if (c.length > 0 || u.length > 0) {
                c.length > 0 &&
                  u.length > 0 &&
                  ((f = l(u, c)),
                  f !== 0 &&
                    (p >= 0
                      ? (e[p][1] += u.substring(0, f))
                      : (e.splice(0, 0, [i, u.substring(0, f)]), a++),
                    (u = u.substring(f)),
                    (c = c.substring(f))),
                  (f = d(u, c)),
                  f !== 0 &&
                    ((e[a][1] = u.substring(u.length - f) + e[a][1]),
                    (u = u.substring(0, u.length - f)),
                    (c = c.substring(0, c.length - f))));
                var g = s + o;
                c.length === 0 && u.length === 0
                  ? (e.splice(a - g, g), (a -= g))
                  : c.length === 0
                    ? (e.splice(a - g, g, [r, u]), (a = a - g + 1))
                    : u.length === 0
                      ? (e.splice(a - g, g, [n, c]), (a = a - g + 1))
                      : (e.splice(a - g, g, [n, c], [r, u]), (a = a - g + 2));
              }
              (a !== 0 && e[a - 1][0] === i
                ? ((e[a - 1][1] += e[a][1]), e.splice(a, 1))
                : a++,
                (s = 0),
                (o = 0),
                (c = ``),
                (u = ``));
          }
      e[e.length - 1][1] === `` && e.pop();
      var _ = !1;
      for (a = 1; a < e.length - 1;)
        (e[a - 1][0] === i &&
          e[a + 1][0] === i &&
          (e[a][1].substring(e[a][1].length - e[a - 1][1].length) ===
          e[a - 1][1]
            ? ((e[a][1] =
                e[a - 1][1] +
                e[a][1].substring(0, e[a][1].length - e[a - 1][1].length)),
              (e[a + 1][1] = e[a - 1][1] + e[a + 1][1]),
              e.splice(a - 1, 1),
              (_ = !0))
            : e[a][1].substring(0, e[a + 1][1].length) == e[a + 1][1] &&
              ((e[a - 1][1] += e[a + 1][1]),
              (e[a][1] = e[a][1].substring(e[a + 1][1].length) + e[a + 1][1]),
              e.splice(a + 1, 1),
              (_ = !0))),
          a++);
      _ && b(e, t);
    }
    function x(e) {
      return e >= 55296 && e <= 56319;
    }
    function S(e) {
      return e >= 56320 && e <= 57343;
    }
    function C(e) {
      return S(e.charCodeAt(0));
    }
    function w(e) {
      return x(e.charCodeAt(e.length - 1));
    }
    function T(e) {
      for (var t = [], n = 0; n < e.length; n++)
        e[n][1].length > 0 && t.push(e[n]);
      return t;
    }
    function E(e, t, a, o) {
      return w(e) || C(o)
        ? null
        : T([
            [i, e],
            [n, t],
            [r, a],
            [i, o],
          ]);
    }
    function D(e, t, n) {
      var r = typeof n == `number` ? { index: n, length: 0 } : n.oldRange,
        i = typeof n == `number` ? null : n.newRange,
        a = e.length,
        o = t.length;
      if (r.length === 0 && (i === null || i.length === 0)) {
        var s = r.index,
          c = e.slice(0, s),
          l = e.slice(s),
          u = i ? i.index : null;
        editBefore: {
          var d = s + o - a;
          if ((u !== null && u !== d) || d < 0 || d > o) break editBefore;
          var f = t.slice(0, d),
            p = t.slice(d);
          if (p !== l) break editBefore;
          var m = Math.min(s, d),
            h = c.slice(0, m),
            g = f.slice(0, m);
          if (h !== g) break editBefore;
          var _ = c.slice(m),
            v = f.slice(m);
          return E(h, _, v, l);
        }
        editAfter: {
          if (u !== null && u !== s) break editAfter;
          var y = s,
            f = t.slice(0, y),
            p = t.slice(y);
          if (f !== c) break editAfter;
          var b = Math.min(a - y, o - y),
            x = l.slice(l.length - b),
            S = p.slice(p.length - b);
          if (x !== S) break editAfter;
          var _ = l.slice(0, l.length - b),
            v = p.slice(0, p.length - b);
          return E(c, _, v, x);
        }
      }
      if (r.length > 0 && i && i.length === 0)
        replaceRange: {
          var h = e.slice(0, r.index),
            x = e.slice(r.index + r.length),
            m = h.length,
            b = x.length;
          if (o < m + b) break replaceRange;
          var g = t.slice(0, m),
            S = t.slice(o - b);
          if (h !== g || x !== S) break replaceRange;
          var _ = e.slice(m, a - b),
            v = t.slice(m, o - b);
          return E(h, _, v, x);
        }
      return null;
    }
    function O(e, t, n, r) {
      return a(e, t, n, r, !0);
    }
    ((O.INSERT = r), (O.DELETE = n), (O.EQUAL = i), (t.exports = O));
  });
(fe(),
  dt(),
  `VALVE_PUBLIC_PATH` in window
    ? (globalThis.__webpack_public_path__ = window.VALVE_PUBLIC_PATH)
    : console.error(
        `VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet`,
      ),
  Array.from(new Set([123]))[0] !== 123 &&
    console.error(`Should not include prototypejs.`));
export {
  ze as a,
  me as c,
  rt as i,
  pe as l,
  ot as n,
  Oe as o,
  it as r,
  he as s,
  ut as t,
  fe as u,
};
