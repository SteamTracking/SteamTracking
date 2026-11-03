var _ = _((_, _) => {
    _.exports = function (_, _) {
      return function () {
        for (var _ = Array(arguments.length), _ = 0; _ < _.length; _++)
          _[_] = arguments[_];
        return _.apply(_, _);
      };
    };
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = Object.prototype.toString,
      _ = (function (_) {
        return function (_) {
          var _ = _.call(_);
          return _[_] || (_[_] = _.slice(8, -1).toLowerCase());
        };
      })(Object.create(null));
    function _(_) {
      return (
        (_ = _.toLowerCase()),
        function (_) {
          return _(_) === _;
        }
      );
    }
    function _(_) {
      return Array.isArray(_);
    }
    function _(_) {
      return _ === void 0;
    }
    function _(_) {
      return (
        _ !== null &&
        !_(_) &&
        _.constructor !== null &&
        !_(_.constructor) &&
        typeof _.constructor.isBuffer == `function` &&
        _.constructor.isBuffer(_)
      );
    }
    var _ = _(`ArrayBuffer`);
    function _(_) {
      return typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(_)
        : _ && _.buffer && _(_.buffer);
    }
    function _(_) {
      return typeof _ == `string`;
    }
    function _(_) {
      return typeof _ == `number`;
    }
    function _(_) {
      return typeof _ == `object` && !!_;
    }
    function _(_) {
      if (_(_) !== `object`) return !1;
      var _ = Object.getPrototypeOf(_);
      return _ === null || _ === Object.prototype;
    }
    var _ = _(`Date`),
      _ = _(`File`),
      _ = _(`Blob`),
      _ = _(`FileList`);
    function _(_) {
      return _.call(_) === `[object Function]`;
    }
    function _(_) {
      return _(_) && _(_.pipe);
    }
    function _(_) {
      var _ = `[object FormData]`;
      return (
        _ &&
        ((typeof FormData == `function` && _ instanceof FormData) ||
          _.call(_) === _ ||
          (_(_.toString) && _.toString() === _))
      );
    }
    var _ = _(`URLSearchParams`);
    function _(_) {
      return _.trim ? _.trim() : _.replace(/^\s+|\s+$/g, ``);
    }
    function _() {
      return typeof navigator < `u` &&
        (navigator.product === `ReactNative` ||
          navigator.product === `NativeScript` ||
          navigator.product === `NS`)
        ? !1
        : typeof window < `u` && typeof document < `u`;
    }
    function _(_, _) {
      if (_ != null) {
        if ((typeof _ != `object` && (_ = [_]), _(_)))
          for (var _ = 0, _ = _.length; _ < _; _++) _.call(null, _[_], _, _);
        else
          for (var _ in _)
            Object.prototype.hasOwnProperty.call(_, _) &&
              _.call(null, _[_], _, _);
      }
    }
    function _() {
      var _ = {};
      function _(_, _) {
        _[_] =
          _(_[_]) && _(_) ? _(_[_], _) : _(_) ? _({}, _) : _(_) ? _.slice() : _;
      }
      for (var _ = 0, _ = arguments.length; _ < _; _++) _(arguments[_], _);
      return _;
    }
    function _(_, _, _) {
      return (
        _(_, function (_, _) {
          _[_] = _ && typeof _ == `function` ? _(_, _) : _;
        }),
        _
      );
    }
    function _(_) {
      return _.charCodeAt(0) === 65279 && (_ = _.slice(1)), _;
    }
    function _(_, _, _, _) {
      (_.prototype = Object.create(_.prototype, _)),
        (_.prototype.constructor = _),
        _ && Object.assign(_.prototype, _);
    }
    function _(_, _, _) {
      var _,
        _,
        _,
        _ = {};
      _ ||= {};
      do {
        for (_ = Object.getOwnPropertyNames(_), _ = _.length; _-- > 0; )
          (_ = _[_]), _[_] || ((_[_] = _[_]), (_[_] = !0));
        _ = Object.getPrototypeOf(_);
      } while (_ && (!_ || _(_, _)) && _ !== Object.prototype);
      return _;
    }
    function _(_, _, _) {
      (_ = String(_)),
        (_ === void 0 || _ > _.length) && (_ = _.length),
        (_ -= _.length);
      var _ = _.indexOf(_, _);
      return _ !== -1 && _ === _;
    }
    function _(_) {
      if (!_) return null;
      var _ = _.length;
      if (_(_)) return null;
      for (var _ = Array(_); _-- > 0; ) _[_] = _[_];
      return _;
    }
    _.exports = {
      isArray: _,
      isArrayBuffer: _,
      isBuffer: _,
      isFormData: _,
      isArrayBufferView: _,
      isString: _,
      isNumber: _,
      isObject: _,
      isPlainObject: _,
      isUndefined: _,
      isDate: _,
      isFile: _,
      isBlob: _,
      isFunction: _,
      isStream: _,
      isURLSearchParams: _,
      isStandardBrowserEnv: _,
      forEach: _,
      merge: _,
      extend: _,
      trim: _,
      stripBOM: _,
      inherits: _,
      toFlatObject: _,
      kindOf: _,
      kindOfTest: _,
      endsWith: _,
      toArray: _,
      isTypedArray: (function (_) {
        return function (_) {
          return _ && _ instanceof _;
        };
      })(typeof Uint8Array < `u` && Object.getPrototypeOf(Uint8Array)),
      isFileList: _,
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_) {
      return encodeURIComponent(_)
        .replace(/%3A/gi, `:`)
        .replace(/%24/g, `$`)
        .replace(/%2C/gi, `,`)
        .replace(/%20/g, `+`)
        .replace(/%5B/gi, `[`)
        .replace(/%5D/gi, `]`);
    }
    _.exports = function (_, _, _) {
      if (!_) return _;
      var _;
      if (_) _ = _(_);
      else if (_.isURLSearchParams(_)) _ = _.toString();
      else {
        var _ = [];
        _.forEach(_, function (_, _) {
          _ != null &&
            (_.isArray(_) ? (_ += `[]`) : (_ = [_]),
            _.forEach(_, function (_) {
              _.isDate(_)
                ? (_ = _.toISOString())
                : _.isObject(_) && (_ = JSON.stringify(_)),
                _.push(_(_) + `=` + _(_));
            }));
        }),
          (_ = _.join(`&`));
      }
      if (_) {
        var _ = _.indexOf(`#`);
        _ !== -1 && (_ = _.slice(0, _)),
          (_ += (_.indexOf(`?`) === -1 ? `?` : `&`) + _);
      }
      return _;
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    function _() {
      this.handlers = [];
    }
    (_.prototype.use = function (_, _, _) {
      return (
        this.handlers.push({
          fulfilled: _,
          rejected: _,
          synchronous: _ ? _.synchronous : !1,
          runWhen: _ ? _.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }),
      (_.prototype.eject = function (_) {
        this.handlers[_] && (this.handlers[_] = null);
      }),
      (_.prototype.forEach = function (_) {
        _.forEach(this.handlers, function (_) {
          _ !== null && _(_);
        });
      }),
      (_.exports = _);
  }),
  _ = _((_, _) => {
    var _ = _();
    _.exports = function (_, _) {
      _.forEach(_, function (_, _) {
        _ !== _ &&
          _.toUpperCase() === _.toUpperCase() &&
          ((_[_] = _), delete _[_]);
      });
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_, _, _, _, _) {
      Error.call(this),
        (this.message = _),
        (this.name = `AxiosError`),
        _ && (this.code = _),
        _ && (this.config = _),
        _ && (this.request = _),
        _ && (this.response = _);
    }
    _.inherits(_, Error, {
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
    var _ = _.prototype,
      _ = {};
    [
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
    ].forEach(function (_) {
      _[_] = {
        value: _,
      };
    }),
      Object.defineProperties(_, _),
      Object.defineProperty(_, "isAxiosError", {
        value: !0,
      }),
      (_.from = function (_, _, _, _, _, _) {
        var _ = Object.create(_);
        return (
          _.toFlatObject(_, _, function (_) {
            return _ !== Error.prototype;
          }),
          _.call(_, _.message, _, _, _, _),
          (_.name = _.name),
          _ && Object.assign(_, _),
          _
        );
      }),
      (_.exports = _);
  }),
  _ = _((_, _) => {
    _.exports = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_, _) {
      _ ||= new FormData();
      var _ = [];
      function _(_) {
        return _ === null
          ? ``
          : _.isDate(_)
            ? _.toISOString()
            : _.isArrayBuffer(_) || _.isTypedArray(_)
              ? typeof Blob == `function`
                ? new Blob([_])
                : Buffer.from(_)
              : _;
      }
      function _(_, _) {
        if (_.isPlainObject(_) || _.isArray(_)) {
          if (_.indexOf(_) !== -1)
            throw Error(`Circular reference detected in ` + _);
          _.push(_),
            _.forEach(_, function (_, _) {
              if (!_.isUndefined(_)) {
                var _ = _ ? _ + `.` + _ : _,
                  _;
                if (_ && !_ && typeof _ == `object`) {
                  if (_.endsWith(_, `{}`)) _ = JSON.stringify(_);
                  else if (_.endsWith(_, `[]`) && (_ = _.toArray(_))) {
                    _.forEach(function (_) {
                      !_.isUndefined(_) && _.append(_, _(_));
                    });
                    return;
                  }
                }
                _(_, _);
              }
            }),
            _.pop();
        } else _.append(_, _(_));
      }
      return _(_), _;
    }
    _.exports = _;
  }),
  _ = _((_, _) => {
    var _ = _();
    _.exports = function (_, _, _) {
      var _ = _.config.validateStatus;
      !_.status || !_ || _(_.status)
        ? _(_)
        : _(
            new _(
              `Request failed with status code ` + _.status,
              [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][
                Math.floor(_.status / 100) - 4
              ],
              _.config,
              _.request,
              _,
            ),
          );
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    _.exports = _.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (_, _, _, _, _, _) {
              var _ = [];
              _.push(_ + `=` + encodeURIComponent(_)),
                _.isNumber(_) && _.push(`expires=` + new Date(_).toGMTString()),
                _.isString(_) && _.push(`path=` + _),
                _.isString(_) && _.push(`domain=` + _),
                _ === !0 && _.push(`secure`),
                (document.cookie = _.join(`; `));
            },
            read: function (_) {
              var _ = document.cookie.match(
                RegExp(`(^|;\\s*)(` + _ + `)=([^;]*)`),
              );
              return _ ? decodeURIComponent(_[3]) : null;
            },
            remove: function (_) {
              this.write(_, ``, Date.now() - 864e5);
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
  _ = _((_, _) => {
    _.exports = function (_) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(_);
    };
  }),
  _ = _((_, _) => {
    _.exports = function (_, _) {
      return _ ? _.replace(/\/+$/, ``) + `/` + _.replace(/^\/+/, ``) : _;
    };
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _();
    _.exports = function (_, _) {
      return _ && !_(_) ? _(_, _) : _;
    };
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = [
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
    _.exports = function (_) {
      var _ = {},
        _,
        _,
        _;
      return (
        _ &&
          _.forEach(
            _.split(`
`),
            function (_) {
              if (
                ((_ = _.indexOf(`:`)),
                (_ = _.trim(_.substr(0, _)).toLowerCase()),
                (_ = _.trim(_.substr(_ + 1))),
                _)
              ) {
                if (_[_] && _.indexOf(_) >= 0) return;
                _ === `set-cookie`
                  ? (_[_] = (_[_] ? _[_] : []).concat([_]))
                  : (_[_] = _[_] ? _[_] + `, ` + _ : _);
              }
            },
          ),
        _
      );
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    _.exports = _.isStandardBrowserEnv()
      ? (function () {
          var _ = /(msie|trident)/i.test(navigator.userAgent),
            _ = document.createElement(`a`),
            _;
          function _(_) {
            var _ = _;
            return (
              _ && (_.setAttribute(`href`, _), (_ = _.href)),
              _.setAttribute(`href`, _),
              {
                href: _.href,
                protocol: _.protocol ? _.protocol.replace(/:$/, ``) : ``,
                host: _.host,
                search: _.search ? _.search.replace(/^\?/, ``) : ``,
                hash: _.hash ? _.hash.replace(/^#/, ``) : ``,
                hostname: _.hostname,
                port: _.port,
                pathname:
                  _.pathname.charAt(0) === `/` ? _.pathname : `/` + _.pathname,
              }
            );
          }
          return (
            (_ = _(window.location.href)),
            function (_) {
              var _ = _.isString(_) ? _(_) : _;
              return _.protocol === _.protocol && _.host === _.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })();
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _();
    function _(_) {
      _.call(this, _ ?? `canceled`, _.ERR_CANCELED),
        (this.name = `CanceledError`);
    }
    _.inherits(_, _, {
      __CANCEL__: !0,
    }),
      (_.exports = _);
  }),
  _ = _((_, _) => {
    _.exports = function (_) {
      var _ = /^([-+\w]{1,25})(:?\/\/|:)/.exec(_);
      return (_ && _[1]) || ``;
    };
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    _.exports = function (_) {
      return new Promise(function (_, _) {
        var _ = _.data,
          _ = _.headers,
          _ = _.responseType,
          _;
        function _() {
          _.cancelToken && _.cancelToken.unsubscribe(_),
            _.signal && _.signal.removeEventListener(`abort`, _);
        }
        _.isFormData(_) && _.isStandardBrowserEnv() && delete _[`Content-Type`];
        var _ = new XMLHttpRequest();
        if (_.auth) {
          var _ = _.auth.username || ``,
            _ = _.auth.password
              ? unescape(encodeURIComponent(_.auth.password))
              : ``;
          _.Authorization = `Basic ` + btoa(_ + `:` + _);
        }
        var _ = _(_.baseURL, _.url);
        _.open(_.method.toUpperCase(), _(_, _.params, _.paramsSerializer), !0),
          (_.timeout = _.timeout);
        function _() {
          if (_) {
            var _ =
              `getAllResponseHeaders` in _
                ? _(_.getAllResponseHeaders())
                : null;
            _(
              function (_) {
                _(_), _();
              },
              function (_) {
                _(_), _();
              },
              {
                data:
                  !_ || _ === `text` || _ === `json`
                    ? _.responseText
                    : _.response,
                status: _.status,
                statusText: _.statusText,
                headers: _,
                config: _,
                request: _,
              },
            ),
              (_ = null);
          }
        }
        if (
          (`onloadend` in _
            ? (_.onloadend = _)
            : (_.onreadystatechange = function () {
                _ &&
                  _.readyState === 4 &&
                  (_.status !== 0 ||
                    (_.responseURL && _.responseURL.indexOf(`file:`) === 0)) &&
                  setTimeout(_);
              }),
          (_.onabort = function () {
            _ &&= (_(new _(`Request aborted`, _.ECONNABORTED, _, _)), null);
          }),
          (_.onerror = function () {
            _(new _(`Network Error`, _.ERR_NETWORK, _, _, _)), (_ = null);
          }),
          (_.ontimeout = function () {
            var _ = _.timeout
                ? `timeout of ` + _.timeout + `ms exceeded`
                : `timeout exceeded`,
              _ = _.transitional || _;
            _.timeoutErrorMessage && (_ = _.timeoutErrorMessage),
              _(
                new _(
                  _,
                  _.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
                  _,
                  _,
                ),
              ),
              (_ = null);
          }),
          _.isStandardBrowserEnv())
        ) {
          var _ =
            (_.withCredentials || _(_)) && _.xsrfCookieName
              ? _.read(_.xsrfCookieName)
              : void 0;
          _ && (_[_.xsrfHeaderName] = _);
        }
        `setRequestHeader` in _ &&
          _.forEach(_, function (_, _) {
            _ === void 0 && _.toLowerCase() === `content-type`
              ? delete _[_]
              : _.setRequestHeader(_, _);
          }),
          _.isUndefined(_.withCredentials) ||
            (_.withCredentials = !!_.withCredentials),
          _ && _ !== `json` && (_.responseType = _.responseType),
          typeof _.onDownloadProgress == `function` &&
            _.addEventListener(`progress`, _.onDownloadProgress),
          typeof _.onUploadProgress == `function` &&
            _.upload &&
            _.upload.addEventListener(`progress`, _.onUploadProgress),
          (_.cancelToken || _.signal) &&
            ((_ = function (_) {
              _ &&= (_(!_ || (_ && _.type) ? new _() : _), _.abort(), null);
            }),
            _.cancelToken && _.cancelToken.subscribe(_),
            _.signal &&
              (_.signal.aborted ? _() : _.signal.addEventListener(`abort`, _))),
          (_ ||= null);
        var _ = _(_);
        if (_ && [`http`, `https`, `file`].indexOf(_) === -1) {
          _(new _(`Unsupported protocol ` + _ + `:`, _.ERR_BAD_REQUEST, _));
          return;
        }
        _.send(_);
      });
    };
  }),
  _ = _((_, _) => {
    _.exports = null;
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = {
        "Content-Type": `application/x-www-form-urlencoded`,
      };
    function _(_, _) {
      !_.isUndefined(_) &&
        _.isUndefined(_[`Content-Type`]) &&
        (_[`Content-Type`] = _);
    }
    function _() {
      var _;
      return (
        (typeof XMLHttpRequest < `u` ||
          (typeof process < `u` &&
            Object.prototype.toString.call(process) === `[object process]`)) &&
          (_ = _()),
        _
      );
    }
    function _(_, _, _) {
      if (_.isString(_))
        try {
          return (_ || JSON.parse)(_), _.trim(_);
        } catch (_) {
          if (_.name !== `SyntaxError`) throw _;
        }
      return (_ || JSON.stringify)(_);
    }
    var _ = {
      transitional: _,
      adapter: _(),
      transformRequest: [
        function (_, _) {
          if (
            (_(_, `Accept`),
            _(_, `Content-Type`),
            _.isFormData(_) ||
              _.isArrayBuffer(_) ||
              _.isBuffer(_) ||
              _.isStream(_) ||
              _.isFile(_) ||
              _.isBlob(_))
          )
            return _;
          if (_.isArrayBufferView(_)) return _.buffer;
          if (_.isURLSearchParams(_))
            return (
              _(_, `application/x-www-form-urlencoded;charset=utf-8`),
              _.toString()
            );
          var _ = _.isObject(_),
            _ = _ && _[`Content-Type`],
            _;
          if ((_ = _.isFileList(_)) || (_ && _ === `multipart/form-data`)) {
            var _ = this.env && this.env.FormData;
            return _(
              _
                ? {
                    "files[]": _,
                  }
                : _,
              _ && new _(),
            );
          }
          return _ || _ === `application/json`
            ? (_(_, `application/json`), _(_))
            : _;
        },
      ],
      transformResponse: [
        function (_) {
          var _ = this.transitional || _.transitional,
            _ = _ && _.silentJSONParsing,
            _ = _ && _.forcedJSONParsing,
            _ = !_ && this.responseType === `json`;
          if (_ || (_ && _.isString(_) && _.length))
            try {
              return JSON.parse(_);
            } catch (_) {
              if (_)
                throw _.name === `SyntaxError`
                  ? _.from(_, _.ERR_BAD_RESPONSE, this, null, this.response)
                  : _;
            }
          return _;
        },
      ],
      timeout: 0,
      xsrfCookieName: `XSRF-TOKEN`,
      xsrfHeaderName: `X-XSRF-TOKEN`,
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: _(),
      },
      validateStatus: function (_) {
        return _ >= 200 && _ < 300;
      },
      headers: {
        common: {
          Accept: `application/json, text/plain, */*`,
        },
      },
    };
    _.forEach([`delete`, `get`, `head`], function (_) {
      _.headers[_] = {};
    }),
      _.forEach([`post`, `put`, `patch`], function (_) {
        _.headers[_] = _.merge(_);
      }),
      (_.exports = _);
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _();
    _.exports = function (_, _, _) {
      var _ = this || _;
      return (
        _.forEach(_, function (_) {
          _ = _.call(_, _, _);
        }),
        _
      );
    };
  }),
  _ = _((_, _) => {
    _.exports = function (_) {
      return !!(_ && _.__CANCEL__);
    };
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_) {
      if (
        (_.cancelToken && _.cancelToken.throwIfRequested(),
        _.signal && _.signal.aborted)
      )
        throw new _();
    }
    _.exports = function (_) {
      return (
        _(_),
        (_.headers = _.headers || {}),
        (_.data = _.call(_, _.data, _.headers, _.transformRequest)),
        (_.headers = _.merge(
          _.headers.common || {},
          _.headers[_.method] || {},
          _.headers,
        )),
        _.forEach(
          [`delete`, `get`, `head`, `post`, `put`, `patch`, `common`],
          function (_) {
            delete _.headers[_];
          },
        ),
        (_.adapter || _.adapter)(_).then(
          function (_) {
            return (
              _(_),
              (_.data = _.call(_, _.data, _.headers, _.transformResponse)),
              _
            );
          },
          function (_) {
            return (
              _(_) ||
                (_(_),
                _ &&
                  _.response &&
                  (_.response.data = _.call(
                    _,
                    _.response.data,
                    _.response.headers,
                    _.transformResponse,
                  ))),
              Promise.reject(_)
            );
          },
        )
      );
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    _.exports = function (_, _) {
      _ ||= {};
      var _ = {};
      function _(_, _) {
        return _.isPlainObject(_) && _.isPlainObject(_)
          ? _.merge(_, _)
          : _.isPlainObject(_)
            ? _.merge({}, _)
            : _.isArray(_)
              ? _.slice()
              : _;
      }
      function _(_) {
        if (!_.isUndefined(_[_])) return _(_[_], _[_]);
        if (!_.isUndefined(_[_])) return _(void 0, _[_]);
      }
      function _(_) {
        if (!_.isUndefined(_[_])) return _(void 0, _[_]);
      }
      function _(_) {
        if (!_.isUndefined(_[_])) return _(void 0, _[_]);
        if (!_.isUndefined(_[_])) return _(void 0, _[_]);
      }
      function _(_) {
        if (_ in _) return _(_[_], _[_]);
        if (_ in _) return _(void 0, _[_]);
      }
      var _ = {
        url: _,
        method: _,
        data: _,
        baseURL: _,
        transformRequest: _,
        transformResponse: _,
        paramsSerializer: _,
        timeout: _,
        timeoutMessage: _,
        withCredentials: _,
        adapter: _,
        responseType: _,
        xsrfCookieName: _,
        xsrfHeaderName: _,
        onUploadProgress: _,
        onDownloadProgress: _,
        decompress: _,
        maxContentLength: _,
        maxBodyLength: _,
        beforeRedirect: _,
        transport: _,
        httpAgent: _,
        httpsAgent: _,
        cancelToken: _,
        socketPath: _,
        responseEncoding: _,
        validateStatus: _,
      };
      return (
        _.forEach(Object.keys(_).concat(Object.keys(_)), function (_) {
          var _ = _[_] || _,
            _ = _(_);
          (_.isUndefined(_) && _ !== _) || (_[_] = _);
        }),
        _
      );
    };
  }),
  _ = _((_, _) => {
    _.exports = {
      version: `0.27.2`,
    };
  }),
  _ = _((_, _) => {
    var _ = _().version,
      _ = _(),
      _ = {};
    [`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
      function (_, _) {
        _[_] = function (_) {
          return typeof _ === _ || `a` + (_ < 1 ? `n ` : ` `) + _;
        };
      },
    );
    var _ = {};
    _.transitional = function (_, _, _) {
      function _(_, _) {
        return (
          `[Axios v` +
          _ +
          `] Transitional option '` +
          _ +
          `'` +
          _ +
          (_ ? `. ` + _ : ``)
        );
      }
      return function (_, _, _) {
        if (_ === !1)
          throw new _(
            _(_, ` has been removed` + (_ ? ` in ` + _ : ``)),
            _.ERR_DEPRECATED,
          );
        return (
          _ &&
            !_[_] &&
            ((_[_] = !0),
            console.warn(
              _(
                _,
                ` has been deprecated since v` +
                  _ +
                  ` and will be removed in the near future`,
              ),
            )),
          !_ || _(_, _, _)
        );
      };
    };
    function _(_, _, _) {
      if (typeof _ != `object`)
        throw new _(`options must be an object`, _.ERR_BAD_OPTION_VALUE);
      for (var _ = Object.keys(_), _ = _.length; _-- > 0; ) {
        var _ = _[_],
          _ = _[_];
        if (_) {
          var _ = _[_],
            _ = _ === void 0 || _(_, _, _);
          if (_ !== !0)
            throw new _(
              `option ` + _ + ` must be ` + _,
              _.ERR_BAD_OPTION_VALUE,
            );
          continue;
        }
        if (_ !== !0) throw new _(`Unknown option ` + _, _.ERR_BAD_OPTION);
      }
    }
    _.exports = {
      assertOptions: _,
      validators: _,
    };
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _.validators;
    function _(_) {
      (this.defaults = _),
        (this.interceptors = {
          request: new _(),
          response: new _(),
        });
    }
    (_.prototype.request = function (_, _) {
      typeof _ == `string` ? ((_ ||= {}), (_.url = _)) : (_ = _ || {}),
        (_ = _(this.defaults, _)),
        _.method
          ? (_.method = _.method.toLowerCase())
          : this.defaults.method
            ? (_.method = this.defaults.method.toLowerCase())
            : (_.method = `get`);
      var _ = _.transitional;
      _ !== void 0 &&
        _.assertOptions(
          _,
          {
            silentJSONParsing: _.transitional(_.boolean),
            forcedJSONParsing: _.transitional(_.boolean),
            clarifyTimeoutError: _.transitional(_.boolean),
          },
          !1,
        );
      var _ = [],
        _ = !0;
      this.interceptors.request.forEach(function (_) {
        (typeof _.runWhen != `function` || _.runWhen(_) !== !1) &&
          ((_ &&= _.synchronous), _.unshift(_.fulfilled, _.rejected));
      });
      var _ = [];
      this.interceptors.response.forEach(function (_) {
        _.push(_.fulfilled, _.rejected);
      });
      var _;
      if (!_) {
        var _ = [_, void 0];
        for (
          Array.prototype.unshift.apply(_, _),
            _ = _.concat(_),
            _ = Promise.resolve(_);
          _.length;
        )
          _ = _.then(_.shift(), _.shift());
        return _;
      }
      for (var _ = _; _.length; ) {
        var _ = _.shift(),
          _ = _.shift();
        try {
          _ = _(_);
        } catch (_) {
          _(_);
          break;
        }
      }
      try {
        _ = _(_);
      } catch (_) {
        return Promise.reject(_);
      }
      for (; _.length; ) _ = _.then(_.shift(), _.shift());
      return _;
    }),
      (_.prototype.getUri = function (_) {
        return (
          (_ = _(this.defaults, _)),
          _(_(_.baseURL, _.url), _.params, _.paramsSerializer)
        );
      }),
      _.forEach([`delete`, `get`, `head`, `options`], function (_) {
        _.prototype[_] = function (_, _) {
          return this.request(
            _(_ || {}, {
              method: _,
              url: _,
              data: (_ || {}).data,
            }),
          );
        };
      }),
      _.forEach([`post`, `put`, `patch`], function (_) {
        function _(_) {
          return function (_, _, _) {
            return this.request(
              _(_ || {}, {
                method: _,
                headers: _
                  ? {
                      "Content-Type": `multipart/form-data`,
                    }
                  : {},
                url: _,
                data: _,
              }),
            );
          };
        }
        (_.prototype[_] = _()), (_.prototype[_ + `Form`] = _(!0));
      }),
      (_.exports = _);
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_) {
      if (typeof _ != `function`)
        throw TypeError(`executor must be a function.`);
      var _;
      this.promise = new Promise(function (_) {
        _ = _;
      });
      var _ = this;
      this.promise.then(function (_) {
        if (_._listeners) {
          var _,
            _ = _._listeners.length;
          for (_ = 0; _ < _; _++) _._listeners[_](_);
          _._listeners = null;
        }
      }),
        (this.promise.then = function (_) {
          var _,
            _ = new Promise(function (_) {
              _.subscribe(_), (_ = _);
            }).then(_);
          return (
            (_.cancel = function () {
              _.unsubscribe(_);
            }),
            _
          );
        }),
        _(function (_) {
          _.reason || ((_.reason = new _(_)), _(_.reason));
        });
    }
    (_.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (_.prototype.subscribe = function (_) {
        if (this.reason) {
          _(this.reason);
          return;
        }
        this._listeners ? this._listeners.push(_) : (this._listeners = [_]);
      }),
      (_.prototype.unsubscribe = function (_) {
        if (this._listeners) {
          var _ = this._listeners.indexOf(_);
          _ !== -1 && this._listeners.splice(_, 1);
        }
      }),
      (_.source = function () {
        var _;
        return {
          token: new _(function (_) {
            _ = _;
          }),
          cancel: _,
        };
      }),
      (_.exports = _);
  }),
  _ = _((_, _) => {
    _.exports = function (_) {
      return function (_) {
        return _.apply(null, _);
      };
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    _.exports = function (_) {
      return _.isObject(_) && _.isAxiosError === !0;
    };
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_) {
      var _ = new _(_),
        _ = _(_.prototype.request, _);
      return (
        _.extend(_, _.prototype, _),
        _.extend(_, _),
        (_.create = function (_) {
          return _(_(_, _));
        }),
        _
      );
    }
    var _ = _(_);
    (_.Axios = _),
      (_.CanceledError = _()),
      (_.CancelToken = _()),
      (_.isCancel = _()),
      (_.VERSION = _().version),
      (_.toFormData = _()),
      (_.AxiosError = _()),
      (_.Cancel = _.CanceledError),
      (_.all = function (_) {
        return Promise.all(_);
      }),
      (_.spread = _()),
      (_.isAxiosError = _()),
      (_.exports = _),
      (_.exports.default = _);
  }),
  _ = _((_, _) => {
    _.exports = _();
  });
export { _ };
