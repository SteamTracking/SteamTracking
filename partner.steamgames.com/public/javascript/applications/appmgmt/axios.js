/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { tn as e } from "./mobx.esm.js";
var t = e((e, t) => {
    t.exports = function (e, t) {
      return function () {
        for (var n = Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    };
  }),
  n = e((e, n) => {
    var r = t(),
      i = Object.prototype.toString,
      a = (function (e) {
        return function (t) {
          var n = i.call(t);
          return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
        };
      })(Object.create(null));
    function o(e) {
      return (
        (e = e.toLowerCase()),
        function (t) {
          return a(t) === e;
        }
      );
    }
    function s(e) {
      return Array.isArray(e);
    }
    function c(e) {
      return e === void 0;
    }
    function l(e) {
      return (
        e !== null &&
        !c(e) &&
        e.constructor !== null &&
        !c(e.constructor) &&
        typeof e.constructor.isBuffer == `function` &&
        e.constructor.isBuffer(e)
      );
    }
    var u = o(`ArrayBuffer`);
    function d(e) {
      return typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && u(e.buffer);
    }
    function f(e) {
      return typeof e == `string`;
    }
    function p(e) {
      return typeof e == `number`;
    }
    function m(e) {
      return typeof e == `object` && !!e;
    }
    function h(e) {
      if (a(e) !== `object`) return !1;
      var t = Object.getPrototypeOf(e);
      return t === null || t === Object.prototype;
    }
    var g = o(`Date`),
      _ = o(`File`),
      v = o(`Blob`),
      y = o(`FileList`);
    function b(e) {
      return i.call(e) === `[object Function]`;
    }
    function x(e) {
      return m(e) && b(e.pipe);
    }
    function S(e) {
      var t = `[object FormData]`;
      return (
        e &&
        ((typeof FormData == `function` && e instanceof FormData) ||
          i.call(e) === t ||
          (b(e.toString) && e.toString() === t))
      );
    }
    var C = o(`URLSearchParams`);
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
        if ((typeof e != `object` && (e = [e]), s(e)))
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
          h(e[n]) && h(t) ? D(e[n], t) : h(t) ? D({}, t) : s(t) ? t.slice() : t;
      }
      for (var n = 0, r = arguments.length; n < r; n++) E(arguments[n], t);
      return e;
    }
    function O(e, t, n) {
      return (
        E(t, function (t, i) {
          e[i] = n && typeof t == `function` ? r(t, n) : t;
        }),
        e
      );
    }
    function k(e) {
      return (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e);
    }
    function A(e, t, n, r) {
      ((e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        n && Object.assign(e.prototype, n));
    }
    function j(e, t, n) {
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
    function M(e, t, n) {
      ((e = String(e)),
        (n === void 0 || n > e.length) && (n = e.length),
        (n -= t.length));
      var r = e.indexOf(t, n);
      return r !== -1 && r === n;
    }
    function N(e) {
      if (!e) return null;
      var t = e.length;
      if (c(t)) return null;
      for (var n = Array(t); t-- > 0;) n[t] = e[t];
      return n;
    }
    n.exports = {
      isArray: s,
      isArrayBuffer: u,
      isBuffer: l,
      isFormData: S,
      isArrayBufferView: d,
      isString: f,
      isNumber: p,
      isObject: m,
      isPlainObject: h,
      isUndefined: c,
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
      stripBOM: k,
      inherits: A,
      toFlatObject: j,
      kindOf: a,
      kindOfTest: o,
      endsWith: M,
      toArray: N,
      isTypedArray: (function (e) {
        return function (t) {
          return e && t instanceof e;
        };
      })(typeof Uint8Array < `u` && Object.getPrototypeOf(Uint8Array)),
      isFileList: y,
    };
  }),
  r = e((e, t) => {
    var r = n();
    function i(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, `:`)
        .replace(/%24/g, `$`)
        .replace(/%2C/gi, `,`)
        .replace(/%20/g, `+`)
        .replace(/%5B/gi, `[`)
        .replace(/%5D/gi, `]`);
    }
    t.exports = function (e, t, n) {
      if (!t) return e;
      var a;
      if (n) a = n(t);
      else if (r.isURLSearchParams(t)) a = t.toString();
      else {
        var o = [];
        (r.forEach(t, function (e, t) {
          e != null &&
            (r.isArray(e) ? (t += `[]`) : (e = [e]),
            r.forEach(e, function (e) {
              (r.isDate(e)
                ? (e = e.toISOString())
                : r.isObject(e) && (e = JSON.stringify(e)),
                o.push(i(t) + `=` + i(e)));
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
  i = e((e, t) => {
    var r = n();
    function i() {
      this.handlers = [];
    }
    ((i.prototype.use = function (e, t, n) {
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
      (i.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (i.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
          t !== null && e(t);
        });
      }),
      (t.exports = i));
  }),
  a = e((e, t) => {
    var r = n();
    t.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    };
  }),
  o = e((e, t) => {
    var r = n();
    function i(e, t, n, r, i) {
      (Error.call(this),
        (this.message = e),
        (this.name = `AxiosError`),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i));
    }
    r.inherits(i, Error, {
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
    var a = i.prototype,
      o = {};
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
      o[e] = { value: e };
    }),
      Object.defineProperties(i, o),
      Object.defineProperty(a, "isAxiosError", { value: !0 }),
      (i.from = function (e, t, n, o, s, c) {
        var l = Object.create(a);
        return (
          r.toFlatObject(e, l, function (e) {
            return e !== Error.prototype;
          }),
          i.call(l, e.message, t, n, o, s),
          (l.name = e.name),
          c && Object.assign(l, c),
          l
        );
      }),
      (t.exports = i));
  }),
  s = e((e, t) => {
    t.exports = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    };
  }),
  c = e((e, t) => {
    var r = n();
    function i(e, t) {
      t ||= new FormData();
      var n = [];
      function i(e) {
        return e === null
          ? ``
          : r.isDate(e)
            ? e.toISOString()
            : r.isArrayBuffer(e) || r.isTypedArray(e)
              ? typeof Blob == `function`
                ? new Blob([e])
                : Buffer.from(e)
              : e;
      }
      function a(e, o) {
        if (r.isPlainObject(e) || r.isArray(e)) {
          if (n.indexOf(e) !== -1)
            throw Error(`Circular reference detected in ` + o);
          (n.push(e),
            r.forEach(e, function (e, n) {
              if (!r.isUndefined(e)) {
                var s = o ? o + `.` + n : n,
                  c;
                if (e && !o && typeof e == `object`) {
                  if (r.endsWith(n, `{}`)) e = JSON.stringify(e);
                  else if (r.endsWith(n, `[]`) && (c = r.toArray(e))) {
                    c.forEach(function (e) {
                      !r.isUndefined(e) && t.append(s, i(e));
                    });
                    return;
                  }
                }
                a(e, s);
              }
            }),
            n.pop());
        } else t.append(o, i(e));
      }
      return (a(e), t);
    }
    t.exports = i;
  }),
  l = e((e, t) => {
    var n = o();
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
  u = e((e, t) => {
    var r = n();
    t.exports = r.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (e, t, n, i, a, o) {
              var s = [];
              (s.push(e + `=` + encodeURIComponent(t)),
                r.isNumber(n) && s.push(`expires=` + new Date(n).toGMTString()),
                r.isString(i) && s.push(`path=` + i),
                r.isString(a) && s.push(`domain=` + a),
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
  d = e((e, t) => {
    t.exports = function (e) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
    };
  }),
  f = e((e, t) => {
    t.exports = function (e, t) {
      return t ? e.replace(/\/+$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
    };
  }),
  p = e((e, t) => {
    var n = d(),
      r = f();
    t.exports = function (e, t) {
      return e && !n(t) ? r(e, t) : t;
    };
  }),
  m = e((e, t) => {
    var r = n(),
      i = [
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
        n,
        a,
        o;
      return (
        e &&
          r.forEach(
            e.split(`
`),
            function (e) {
              if (
                ((o = e.indexOf(`:`)),
                (n = r.trim(e.substr(0, o)).toLowerCase()),
                (a = r.trim(e.substr(o + 1))),
                n)
              ) {
                if (t[n] && i.indexOf(n) >= 0) return;
                n === `set-cookie`
                  ? (t[n] = (t[n] ? t[n] : []).concat([a]))
                  : (t[n] = t[n] ? t[n] + `, ` + a : a);
              }
            },
          ),
        t
      );
    };
  }),
  h = e((e, t) => {
    var r = n();
    t.exports = r.isStandardBrowserEnv()
      ? (function () {
          var e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement(`a`),
            n;
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
            (n = i(window.location.href)),
            function (e) {
              var t = r.isString(e) ? i(e) : e;
              return t.protocol === n.protocol && t.host === n.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })();
  }),
  g = e((e, t) => {
    var r = o(),
      i = n();
    function a(e) {
      (r.call(this, e ?? `canceled`, r.ERR_CANCELED),
        (this.name = `CanceledError`));
    }
    (i.inherits(a, r, { __CANCEL__: !0 }), (t.exports = a));
  }),
  _ = e((e, t) => {
    t.exports = function (e) {
      var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
      return (t && t[1]) || ``;
    };
  }),
  v = e((e, t) => {
    var i = n(),
      a = l(),
      c = u(),
      d = r(),
      f = p(),
      v = m(),
      y = h(),
      b = s(),
      x = o(),
      S = g(),
      C = _();
    t.exports = function (e) {
      return new Promise(function (t, n) {
        var r = e.data,
          o = e.headers,
          s = e.responseType,
          l;
        function u() {
          (e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener(`abort`, l));
        }
        i.isFormData(r) && i.isStandardBrowserEnv() && delete o[`Content-Type`];
        var p = new XMLHttpRequest();
        if (e.auth) {
          var m = e.auth.username || ``,
            h = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ``;
          o.Authorization = `Basic ` + btoa(m + `:` + h);
        }
        var g = f(e.baseURL, e.url);
        (p.open(e.method.toUpperCase(), d(g, e.params, e.paramsSerializer), !0),
          (p.timeout = e.timeout));
        function _() {
          if (p) {
            var r =
              `getAllResponseHeaders` in p
                ? v(p.getAllResponseHeaders())
                : null;
            (a(
              function (e) {
                (t(e), u());
              },
              function (e) {
                (n(e), u());
              },
              {
                data:
                  !s || s === `text` || s === `json`
                    ? p.responseText
                    : p.response,
                status: p.status,
                statusText: p.statusText,
                headers: r,
                config: e,
                request: p,
              },
            ),
              (p = null));
          }
        }
        if (
          (`onloadend` in p
            ? (p.onloadend = _)
            : (p.onreadystatechange = function () {
                p &&
                  p.readyState === 4 &&
                  (p.status !== 0 ||
                    (p.responseURL && p.responseURL.indexOf(`file:`) === 0)) &&
                  setTimeout(_);
              }),
          (p.onabort = function () {
            p &&= (n(new x(`Request aborted`, x.ECONNABORTED, e, p)), null);
          }),
          (p.onerror = function () {
            (n(new x(`Network Error`, x.ERR_NETWORK, e, p, p)), (p = null));
          }),
          (p.ontimeout = function () {
            var t = e.timeout
                ? `timeout of ` + e.timeout + `ms exceeded`
                : `timeout exceeded`,
              r = e.transitional || b;
            (e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(
                new x(
                  t,
                  r.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
                  e,
                  p,
                ),
              ),
              (p = null));
          }),
          i.isStandardBrowserEnv())
        ) {
          var w =
            (e.withCredentials || y(g)) && e.xsrfCookieName
              ? c.read(e.xsrfCookieName)
              : void 0;
          w && (o[e.xsrfHeaderName] = w);
        }
        (`setRequestHeader` in p &&
          i.forEach(o, function (e, t) {
            r === void 0 && t.toLowerCase() === `content-type`
              ? delete o[t]
              : p.setRequestHeader(t, e);
          }),
          i.isUndefined(e.withCredentials) ||
            (p.withCredentials = !!e.withCredentials),
          s && s !== `json` && (p.responseType = e.responseType),
          typeof e.onDownloadProgress == `function` &&
            p.addEventListener(`progress`, e.onDownloadProgress),
          typeof e.onUploadProgress == `function` &&
            p.upload &&
            p.upload.addEventListener(`progress`, e.onUploadProgress),
          (e.cancelToken || e.signal) &&
            ((l = function (e) {
              p &&= (n(!e || (e && e.type) ? new S() : e), p.abort(), null);
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener(`abort`, l))),
          (r ||= null));
        var T = C(g);
        T && [`http`, `https`, `file`].indexOf(T) === -1
          ? n(new x(`Unsupported protocol ` + T + `:`, x.ERR_BAD_REQUEST, e))
          : p.send(r);
      });
    };
  }),
  y = e((e, t) => {
    t.exports = null;
  }),
  b = e((e, t) => {
    var r = n(),
      i = a(),
      l = o(),
      u = s(),
      d = c(),
      f = { "Content-Type": `application/x-www-form-urlencoded` };
    function p(e, t) {
      !r.isUndefined(e) &&
        r.isUndefined(e[`Content-Type`]) &&
        (e[`Content-Type`] = t);
    }
    function m() {
      var e;
      return (
        (typeof XMLHttpRequest < `u` ||
          (typeof process < `u` &&
            Object.prototype.toString.call(process) === `[object process]`)) &&
          (e = v()),
        e
      );
    }
    function h(e, t, n) {
      if (r.isString(e))
        try {
          return ((t || JSON.parse)(e), r.trim(e));
        } catch (e) {
          if (e.name !== `SyntaxError`) throw e;
        }
      return (n || JSON.stringify)(e);
    }
    var g = {
      transitional: u,
      adapter: m(),
      transformRequest: [
        function (e, t) {
          if (
            (i(t, `Accept`),
            i(t, `Content-Type`),
            r.isFormData(e) ||
              r.isArrayBuffer(e) ||
              r.isBuffer(e) ||
              r.isStream(e) ||
              r.isFile(e) ||
              r.isBlob(e))
          )
            return e;
          if (r.isArrayBufferView(e)) return e.buffer;
          if (r.isURLSearchParams(e))
            return (
              p(t, `application/x-www-form-urlencoded;charset=utf-8`),
              e.toString()
            );
          var n = r.isObject(e),
            a = t && t[`Content-Type`],
            o;
          if ((o = r.isFileList(e)) || (n && a === `multipart/form-data`)) {
            var s = this.env && this.env.FormData;
            return d(o ? { "files[]": e } : e, s && new s());
          }
          return n || a === `application/json`
            ? (p(t, `application/json`), h(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          var t = this.transitional || g.transitional,
            n = t && t.silentJSONParsing,
            i = t && t.forcedJSONParsing,
            a = !n && this.responseType === `json`;
          if (a || (i && r.isString(e) && e.length))
            try {
              return JSON.parse(e);
            } catch (e) {
              if (a)
                throw e.name === `SyntaxError`
                  ? l.from(e, l.ERR_BAD_RESPONSE, this, null, this.response)
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
      env: { FormData: y() },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: `application/json, text/plain, */*` } },
    };
    (r.forEach([`delete`, `get`, `head`], function (e) {
      g.headers[e] = {};
    }),
      r.forEach([`post`, `put`, `patch`], function (e) {
        g.headers[e] = r.merge(f);
      }),
      (t.exports = g));
  }),
  x = e((e, t) => {
    var r = n(),
      i = b();
    t.exports = function (e, t, n) {
      var a = this || i;
      return (
        r.forEach(n, function (n) {
          e = n.call(a, e, t);
        }),
        e
      );
    };
  }),
  S = e((e, t) => {
    t.exports = function (e) {
      return !!(e && e.__CANCEL__);
    };
  }),
  C = e((e, t) => {
    var r = n(),
      i = x(),
      a = S(),
      o = b(),
      s = g();
    function c(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new s();
    }
    t.exports = function (e) {
      return (
        c(e),
        (e.headers = e.headers || {}),
        (e.data = i.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = r.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers,
        )),
        r.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `common`],
          function (t) {
            delete e.headers[t];
          },
        ),
        (e.adapter || o.adapter)(e).then(
          function (t) {
            return (
              c(e),
              (t.data = i.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              a(t) ||
                (c(e),
                t &&
                  t.response &&
                  (t.response.data = i.call(
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
  w = e((e, t) => {
    var r = n();
    t.exports = function (e, t) {
      t ||= {};
      var n = {};
      function i(e, t) {
        return r.isPlainObject(e) && r.isPlainObject(t)
          ? r.merge(e, t)
          : r.isPlainObject(t)
            ? r.merge({}, t)
            : r.isArray(t)
              ? t.slice()
              : t;
      }
      function a(n) {
        if (!r.isUndefined(t[n])) return i(e[n], t[n]);
        if (!r.isUndefined(e[n])) return i(void 0, e[n]);
      }
      function o(e) {
        if (!r.isUndefined(t[e])) return i(void 0, t[e]);
      }
      function s(n) {
        if (!r.isUndefined(t[n])) return i(void 0, t[n]);
        if (!r.isUndefined(e[n])) return i(void 0, e[n]);
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
        r.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
          var t = l[e] || a,
            i = t(e);
          (r.isUndefined(i) && t !== c) || (n[e] = i);
        }),
        n
      );
    };
  }),
  T = e((e, t) => {
    t.exports = { version: `0.27.2` };
  }),
  E = e((e, t) => {
    var n = T().version,
      r = o(),
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
    function s(e, t, n) {
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
    t.exports = { assertOptions: s, validators: i };
  }),
  D = e((e, t) => {
    var a = n(),
      o = r(),
      s = i(),
      c = C(),
      l = w(),
      u = p(),
      d = E(),
      f = d.validators;
    function m(e) {
      ((this.defaults = e),
        (this.interceptors = { request: new s(), response: new s() }));
    }
    ((m.prototype.request = function (e, t) {
      (typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
        (t = l(this.defaults, t)),
        t.method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
            ? (t.method = this.defaults.method.toLowerCase())
            : (t.method = `get`));
      var n = t.transitional;
      n !== void 0 &&
        d.assertOptions(
          n,
          {
            silentJSONParsing: f.transitional(f.boolean),
            forcedJSONParsing: f.transitional(f.boolean),
            clarifyTimeoutError: f.transitional(f.boolean),
          },
          !1,
        );
      var r = [],
        i = !0;
      this.interceptors.request.forEach(function (e) {
        (typeof e.runWhen != `function` || e.runWhen(t) !== !1) &&
          ((i &&= e.synchronous), r.unshift(e.fulfilled, e.rejected));
      });
      var a = [];
      this.interceptors.response.forEach(function (e) {
        a.push(e.fulfilled, e.rejected);
      });
      var o;
      if (!i) {
        var s = [c, void 0];
        for (
          Array.prototype.unshift.apply(s, r),
            s = s.concat(a),
            o = Promise.resolve(t);
          s.length;
        )
          o = o.then(s.shift(), s.shift());
        return o;
      }
      for (var u = t; r.length;) {
        var p = r.shift(),
          m = r.shift();
        try {
          u = p(u);
        } catch (e) {
          m(e);
          break;
        }
      }
      try {
        o = c(u);
      } catch (e) {
        return Promise.reject(e);
      }
      for (; a.length;) o = o.then(a.shift(), a.shift());
      return o;
    }),
      (m.prototype.getUri = function (e) {
        return (
          (e = l(this.defaults, e)),
          o(u(e.baseURL, e.url), e.params, e.paramsSerializer)
        );
      }),
      a.forEach([`delete`, `get`, `head`, `options`], function (e) {
        m.prototype[e] = function (t, n) {
          return this.request(
            l(n || {}, { method: e, url: t, data: (n || {}).data }),
          );
        };
      }),
      a.forEach([`post`, `put`, `patch`], function (e) {
        function t(t) {
          return function (n, r, i) {
            return this.request(
              l(i || {}, {
                method: e,
                headers: t ? { "Content-Type": `multipart/form-data` } : {},
                url: n,
                data: r,
              }),
            );
          };
        }
        ((m.prototype[e] = t()), (m.prototype[e + `Form`] = t(!0)));
      }),
      (t.exports = m));
  }),
  O = e((e, t) => {
    var n = g();
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
  k = e((e, t) => {
    t.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }),
  A = e((e, t) => {
    var r = n();
    t.exports = function (e) {
      return r.isObject(e) && e.isAxiosError === !0;
    };
  }),
  j = e((e, r) => {
    var i = n(),
      a = t(),
      s = D(),
      l = w(),
      u = b();
    function d(e) {
      var t = new s(e),
        n = a(s.prototype.request, t);
      return (
        i.extend(n, s.prototype, t),
        i.extend(n, t),
        (n.create = function (t) {
          return d(l(e, t));
        }),
        n
      );
    }
    var f = d(u);
    ((f.Axios = s),
      (f.CanceledError = g()),
      (f.CancelToken = O()),
      (f.isCancel = S()),
      (f.VERSION = T().version),
      (f.toFormData = c()),
      (f.AxiosError = o()),
      (f.Cancel = f.CanceledError),
      (f.all = function (e) {
        return Promise.all(e);
      }),
      (f.spread = k()),
      (f.isAxiosError = A()),
      (r.exports = f),
      (r.exports.default = f));
  }),
  M = e((e, t) => {
    t.exports = j();
  });
export { M as t };
