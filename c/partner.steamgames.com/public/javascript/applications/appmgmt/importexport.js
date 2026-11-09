import { _, _ } from "./mobx.esm.js";
var _ = _((_, _, _) => {
    ((_, _) => {
      typeof define == `function` && define.amd
        ? define([], _)
        : typeof _ == `object` && _ !== void 0
          ? (_.exports = _())
          : (_.Papa = _());
    })(_, function _() {
      var _ =
          typeof self < `u`
            ? self
            : typeof window < `u`
              ? window
              : _ === void 0
                ? {}
                : _,
        _,
        _ = !_.document && !!_.postMessage,
        _ = _.IS_PAPA_WORKER || !1,
        _ = {},
        _ = 0,
        _ = {};
      function _(_) {
        ((this._handle = null),
          (this._finished = !1),
          (this._completed = !1),
          (this._halted = !1),
          (this._input = null),
          (this._baseIndex = 0),
          (this._partialLine = ``),
          (this._rowCount = 0),
          (this._start = 0),
          (this._nextChunk = null),
          (this.isFirstChunk = !0),
          (this._completeResults = {
            data: [],
            errors: [],
            meta: {},
          }),
          function (_) {
            var _ = _(_);
            ((_.chunkSize = parseInt(_.chunkSize)),
              _.step || _.chunk || (_.chunkSize = null),
              (this._handle = new _(_)),
              ((this._handle.streamer = this)._config = _));
          }.call(this, _),
          (this.parseChunk = function (_, _) {
            var _ = parseInt(this._config.skipFirstNLines) || 0;
            if (this.isFirstChunk && 0 < _) {
              let _ = this._config.newline;
              ((_ ||=
                ((_ = this._config.quoteChar || `"`),
                this._handle.guessLineEndings(_, _))),
                (_ = [..._.split(_).slice(_)].join(_)));
            }
            (this.isFirstChunk &&
              _(this._config.beforeFirstChunk) &&
              (_ = this._config.beforeFirstChunk(_)) !== void 0 &&
              (_ = _),
              (this.isFirstChunk = !1),
              (this._halted = !1));
            var _ = this._partialLine + _,
              _ =
                ((this._partialLine = ``),
                this._handle.parse(_, this._baseIndex, !this._finished));
            if (!this._handle.paused() && !this._handle.aborted()) {
              if (
                ((_ = _.meta.cursor),
                (_ =
                  (this._finished ||
                    ((this._partialLine = _.substring(_ - this._baseIndex)),
                    (this._baseIndex = _)),
                  _ && _.data && (this._rowCount += _.data.length),
                  this._finished ||
                    (this._config.preview &&
                      this._rowCount >= this._config.preview))),
                _)
              )
                _.postMessage({
                  results: _,
                  workerId: _.WORKER_ID,
                  finished: _,
                });
              else if (_(this._config.chunk) && !_) {
                if (
                  (this._config.chunk(_, this._handle),
                  this._handle.paused() || this._handle.aborted())
                )
                  return void (this._halted = !0);
                this._completeResults = _ = void 0;
              }
              return (
                this._config.step ||
                  this._config.chunk ||
                  ((this._completeResults.data =
                    this._completeResults.data.concat(_.data)),
                  (this._completeResults.errors =
                    this._completeResults.errors.concat(_.errors)),
                  (this._completeResults.meta = _.meta)),
                this._completed ||
                  !_ ||
                  !_(this._config.complete) ||
                  (_ && _.meta.aborted) ||
                  (this._config.complete(this._completeResults, this._input),
                  (this._completed = !0)),
                _ || (_ && _.meta.paused) || this._nextChunk(),
                _
              );
            }
            this._halted = !0;
          }),
          (this._sendError = function (_) {
            _(this._config.error)
              ? this._config.error(_)
              : _ &&
                this._config.error &&
                _.postMessage({
                  workerId: _.WORKER_ID,
                  error: _,
                  finished: !1,
                });
          }));
      }
      function _(_) {
        var _;
        ((_ ||= {}).chunkSize || (_.chunkSize = _.RemoteChunkSize),
          _.call(this, _),
          (this._nextChunk = _
            ? function () {
                (this._readChunk(), this._chunkLoaded());
              }
            : function () {
                this._readChunk();
              }),
          (this.stream = function (_) {
            ((this._input = _), this._nextChunk());
          }),
          (this._readChunk = function () {
            if (this._finished) this._chunkLoaded();
            else {
              if (
                ((_ = new XMLHttpRequest()),
                this._config.withCredentials &&
                  (_.withCredentials = this._config.withCredentials),
                _ ||
                  ((_.onload = _(this._chunkLoaded, this)),
                  (_.onerror = _(this._chunkError, this))),
                _.open(
                  this._config.downloadRequestBody ? `POST` : `GET`,
                  this._input,
                  !_,
                ),
                this._config.downloadRequestHeaders)
              ) {
                var _,
                  _ = this._config.downloadRequestHeaders;
                for (_ in _) _.setRequestHeader(_, _[_]);
              }
              var _;
              this._config.chunkSize &&
                ((_ = this._start + this._config.chunkSize - 1),
                _.setRequestHeader(`Range`, `bytes=` + this._start + `-` + _));
              try {
                _.send(this._config.downloadRequestBody);
              } catch (_) {
                this._chunkError(_.message);
              }
              _ && _.status === 0 && this._chunkError();
            }
          }),
          (this._chunkLoaded = function () {
            _.readyState === 4 &&
              (_.status < 200 || 400 <= _.status
                ? this._chunkError()
                : ((this._start +=
                    this._config.chunkSize || _.responseText.length),
                  (this._finished =
                    !this._config.chunkSize ||
                    this._start >=
                      ((_) =>
                        (_ = _.getResponseHeader(`Content-Range`)) === null
                          ? -1
                          : parseInt(_.substring(_.lastIndexOf(`/`) + 1)))(_)),
                  this.parseChunk(_.responseText)));
          }),
          (this._chunkError = function (_) {
            ((_ = _.statusText || _), this._sendError(Error(_)));
          }));
      }
      function _(_) {
        ((_ ||= {}).chunkSize || (_.chunkSize = _.LocalChunkSize),
          _.call(this, _));
        var _,
          _,
          _ = typeof FileReader < `u`;
        ((this.stream = function (_) {
          ((this._input = _),
            (_ = _.slice || _.webkitSlice || _.mozSlice),
            _
              ? (((_ = new FileReader()).onload = _(this._chunkLoaded, this)),
                (_.onerror = _(this._chunkError, this)))
              : (_ = new FileReaderSync()),
            this._nextChunk());
        }),
          (this._nextChunk = function () {
            this._finished ||
              (this._config.preview &&
                !(this._rowCount < this._config.preview)) ||
              this._readChunk();
          }),
          (this._readChunk = function () {
            var _ = this._input,
              _ =
                (this._config.chunkSize &&
                  ((_ = Math.min(
                    this._start + this._config.chunkSize,
                    this._input.size,
                  )),
                  (_ = _.call(_, this._start, _))),
                _.readAsText(_, this._config.encoding));
            _ ||
              this._chunkLoaded({
                target: {
                  result: _,
                },
              });
          }),
          (this._chunkLoaded = function (_) {
            ((this._start += this._config.chunkSize),
              (this._finished =
                !this._config.chunkSize || this._start >= this._input.size),
              this.parseChunk(_.target.result));
          }),
          (this._chunkError = function () {
            this._sendError(_.error);
          }));
      }
      function _(_) {
        var _;
        (_.call(this, (_ ||= {})),
          (this.stream = function (_) {
            return ((_ = _), this._nextChunk());
          }),
          (this._nextChunk = function () {
            var _, _;
            if (!this._finished)
              return (
                (_ = this._config.chunkSize),
                (_ = _
                  ? ((_ = _.substring(0, _)), _.substring(_))
                  : ((_ = _), ``)),
                (this._finished = !_),
                this.parseChunk(_)
              );
          }));
      }
      function _(_) {
        _.call(this, (_ ||= {}));
        var _ = [],
          _ = !0,
          _ = !1;
        ((this.pause = function () {
          (_.prototype.pause.apply(this, arguments), this._input.pause());
        }),
          (this.resume = function () {
            (_.prototype.resume.apply(this, arguments), this._input.resume());
          }),
          (this.stream = function (_) {
            ((this._input = _),
              this._input._(`data`, this._streamData),
              this._input._(`end`, this._streamEnd),
              this._input._(`error`, this._streamError));
          }),
          (this._checkIsFinished = function () {
            _ && _.length === 1 && (this._finished = !0);
          }),
          (this._nextChunk = function () {
            (this._checkIsFinished(),
              _.length ? this.parseChunk(_.shift()) : (_ = !0));
          }),
          (this._streamData = _(function (_) {
            try {
              (_.push(
                typeof _ == `string` ? _ : _.toString(this._config.encoding),
              ),
                _ &&
                  ((_ = !1),
                  this._checkIsFinished(),
                  this.parseChunk(_.shift())));
            } catch (_) {
              this._streamError(_);
            }
          }, this)),
          (this._streamError = _(function (_) {
            (this._streamCleanUp(), this._sendError(_));
          }, this)),
          (this._streamEnd = _(function () {
            (this._streamCleanUp(), (_ = !0), this._streamData(``));
          }, this)),
          (this._streamCleanUp = _(function () {
            (this._input.removeListener(`data`, this._streamData),
              this._input.removeListener(`end`, this._streamEnd),
              this._input.removeListener(`error`, this._streamError));
          }, this)));
      }
      function _(_) {
        var _,
          _,
          _,
          _,
          _ = 2 ** 53,
          _ = -_,
          _ = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
          _ =
            /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
          _ = this,
          _ = 0,
          _ = 0,
          _ = !1,
          _ = !1,
          _ = [],
          _ = {
            data: [],
            errors: [],
            meta: {},
          };
        function _(_) {
          return _.skipEmptyLines === `greedy`
            ? _.join(``).trim() === ``
            : _.length === 1 && _[0].length === 0;
        }
        function _() {
          if (
            (_ &&
              _ &&
              (_(
                `Delimiter`,
                `UndetectableDelimiter`,
                `Unable to auto-detect delimiting character; defaulted to '` +
                  _.DefaultDelimiter +
                  `'`,
              ),
              (_ = !1)),
            _.skipEmptyLines &&
              (_.data = _.data.filter(function (_) {
                return !_(_);
              })),
            _())
          ) {
            if (_) {
              if (Array.isArray(_.data[0])) {
                for (var _ = 0; _() && _ < _.data.length; _++)
                  _.data[_].forEach(_);
                _.data.splice(0, 1);
              } else _.data.forEach(_);
            }
            function _(_, _) {
              (_(_.transformHeader) && (_ = _.transformHeader(_, _)),
                _.push(_));
            }
          }
          function _(_, _) {
            for (var _ = _.header ? {} : [], _ = 0; _ < _.length; _++) {
              var _ = _,
                _ = _[_],
                _ = ((_, _) =>
                  ((_) => (
                    _.dynamicTypingFunction &&
                      _.dynamicTyping[_] === void 0 &&
                      (_.dynamicTyping[_] = _.dynamicTypingFunction(_)),
                    !0 === (_.dynamicTyping[_] || _.dynamicTyping)
                  ))(_)
                    ? _ === `true` ||
                      _ === `TRUE` ||
                      (_ !== `false` &&
                        _ !== `FALSE` &&
                        (((_) => {
                          if (
                            _.test(_) &&
                            ((_ = parseFloat(_)), _ < _ && _ < _)
                          )
                            return 1;
                        })(_)
                          ? parseFloat(_)
                          : _.test(_)
                            ? new Date(_)
                            : _ === ``
                              ? null
                              : _))
                    : _)(
                  (_ = _.header
                    ? _ >= _.length
                      ? `__parsed_extra`
                      : _[_]
                    : _),
                  (_ = _.transform ? _.transform(_, _) : _),
                );
              _ === `__parsed_extra`
                ? ((_[_] = _[_] || []), _[_].push(_))
                : (_[_] = _);
            }
            return (
              _.header &&
                (_ > _.length
                  ? _(
                      `FieldMismatch`,
                      `TooManyFields`,
                      `Too many fields: expected ` +
                        _.length +
                        ` fields but parsed ` +
                        _,
                      _ + _,
                    )
                  : _ < _.length &&
                    _(
                      `FieldMismatch`,
                      `TooFewFields`,
                      `Too few fields: expected ` +
                        _.length +
                        ` fields but parsed ` +
                        _,
                      _ + _,
                    )),
              _
            );
          }
          var _;
          _ &&
            (_.header || _.dynamicTyping || _.transform) &&
            ((_ = 1),
            !_.data.length || Array.isArray(_.data[0])
              ? ((_.data = _.data.map(_)), (_ = _.data.length))
              : (_.data = _(_.data, 0)),
            _.header && _.meta && (_.meta.fields = _),
            (_ += _));
        }
        function _() {
          return _.header && _.length === 0;
        }
        function _(_, _, _, _) {
          ((_ = {
            type: _,
            code: _,
            message: _,
          }),
            _ !== void 0 && (_.row = _),
            _.errors.push(_));
        }
        (_(_.step) &&
          ((_ = _.step),
          (_.step = function (_) {
            ((_ = _),
              _()
                ? _()
                : (_(),
                  _.data.length !== 0 &&
                    ((_ += _.data.length),
                    _.preview && _ > _.preview
                      ? _.abort()
                      : ((_.data = _.data[0]), _(_, _)))));
          })),
          (this.parse = function (_, _, _) {
            var _ = _.quoteChar || `"`,
              _ =
                ((_.newline ||= this.guessLineEndings(_, _)),
                (_ = !1),
                _.delimiter
                  ? _(_.delimiter) &&
                    ((_.delimiter = _.delimiter(_)),
                    (_.meta.delimiter = _.delimiter))
                  : ((_ = ((_, _, _, _, _) => {
                      var _, _, _, _;
                      _ ||= [`,`, `	`, `|`, `;`, _.RECORD_SEP, _.UNIT_SEP];
                      for (var _ = 0; _ < _.length; _++) {
                        for (
                          var _,
                            _ = _[_],
                            _ = 0,
                            _ = 0,
                            _ = 0,
                            _ =
                              ((_ = void 0),
                              new _({
                                comments: _,
                                delimiter: _,
                                newline: _,
                                preview: 10,
                              }).parse(_)),
                            _ = 0;
                          _ < _.data.length;
                          _++
                        )
                          _ && _(_.data[_])
                            ? _++
                            : ((_ = _.data[_].length),
                              (_ += _),
                              _ === void 0
                                ? (_ = _)
                                : 0 < _ && ((_ += Math.abs(_ - _)), (_ = _)));
                        (0 < _.data.length && (_ /= _.data.length - _),
                          (_ === void 0 || _ <= _) &&
                            (_ === void 0 || _ < _) &&
                            1.99 < _ &&
                            ((_ = _), (_ = _), (_ = _)));
                      }
                      return {
                        successful: !!(_.delimiter = _),
                        bestDelimiter: _,
                      };
                    })(
                      _,
                      _.newline,
                      _.skipEmptyLines,
                      _.comments,
                      _.delimitersToGuess,
                    )).successful
                      ? (_.delimiter = _.bestDelimiter)
                      : ((_ = !0), (_.delimiter = _.DefaultDelimiter)),
                    (_.meta.delimiter = _.delimiter)),
                _(_));
            return (
              _.preview && _.header && _.preview++,
              (_ = _),
              (_ = new _(_)),
              (_ = _.parse(_, _, _)),
              _(),
              _
                ? {
                    meta: {
                      paused: !0,
                    },
                  }
                : _ || {
                    meta: {
                      paused: !1,
                    },
                  }
            );
          }),
          (this.paused = function () {
            return _;
          }),
          (this.pause = function () {
            ((_ = !0),
              _.abort(),
              (_ = _(_.chunk) ? `` : _.substring(_.getCharIndex())));
          }),
          (this.resume = function () {
            _.streamer._halted
              ? ((_ = !1), _.streamer.parseChunk(_, !0))
              : setTimeout(_.resume, 3);
          }),
          (this.aborted = function () {
            return _;
          }),
          (this.abort = function () {
            ((_ = !0),
              _.abort(),
              (_.meta.aborted = !0),
              _(_.complete) && _.complete(_),
              (_ = ``));
          }),
          (this.guessLineEndings = function (_, _) {
            _ = _.substring(0, 1048576);
            var _ = RegExp(_(_) + `([^]*?)` + _(_), `gm`),
              _ = (_ = _.replace(_, ``)).split(`\r`),
              _ = _.split(`
`),
              _ = 1 < _.length && _[0].length < _[0].length;
            if (_.length === 1 || _)
              return `
`;
            for (var _ = 0, _ = 0; _ < _.length; _++)
              _[_][0] ===
                `
` && _++;
            return _ >= _.length / 2
              ? `\r
`
              : `\r`;
          }));
      }
      function _(_) {
        return _.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
      }
      function _(_) {
        var _ = (_ ||= {}).delimiter,
          _ = _.newline,
          _ = _.comments,
          _ = _.step,
          _ = _.preview,
          _ = _.fastMode,
          _ = null,
          _ = !1,
          _ = _.quoteChar == null ? `"` : _.quoteChar,
          _ = _;
        if (
          (_.escapeChar !== void 0 && (_ = _.escapeChar),
          (typeof _ != `string` || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
            (_ = `,`),
          _ === _)
        )
          throw Error(`Comment character same as delimiter`);
        (!0 === _
          ? (_ = `#`)
          : (typeof _ != `string` || -1 < _.BAD_DELIMITERS.indexOf(_)) &&
            (_ = !1),
          _ !==
            `
` &&
            _ !== `\r` &&
            _ !==
              `\r
` &&
            (_ = `
`));
        var _ = 0,
          _ = !1;
        ((this.parse = function (_, _, _) {
          if (typeof _ != `string`) throw Error(`Input must be a string`);
          var _ = _.length,
            _ = _.length,
            _ = _.length,
            _ = _.length,
            _ = _(_),
            _ = [],
            _ = [],
            _ = [],
            _ = (_ = 0);
          if (!_) return _();
          if (_ || (!1 !== _ && _.indexOf(_) === -1)) {
            for (var _ = _.split(_), _ = 0; _ < _.length; _++) {
              if (((_ = _[_]), (_ += _.length), _ !== _.length - 1))
                _ += _.length;
              else if (_) return _();
              if (!_ || _.substring(0, _) !== _) {
                if (_) {
                  if (((_ = []), _(_.split(_)), _(), _)) return _();
                } else _(_.split(_));
                if (_ && _ <= _) return ((_ = _.slice(0, _)), _(!0));
              }
            }
            return _();
          }
          for (
            var _ = _.indexOf(_, _),
              _ = _.indexOf(_, _),
              _ = new RegExp(_(_) + _(_), `g`),
              _ = _.indexOf(_, _);
            ;
          )
            if (_[_] === _)
              for (_ = _, _++; ;) {
                if ((_ = _.indexOf(_, _ + 1)) === -1)
                  return (
                    _ ||
                      _.push({
                        type: `Quotes`,
                        code: `MissingQuotes`,
                        message: `Quoted field unterminated`,
                        row: _.length,
                        index: _,
                      }),
                    _()
                  );
                if (_ === _ - 1) return _(_.substring(_, _).replace(_, _));
                if (_ === _ && _[_ + 1] === _) _++;
                else if (_ === _ || _ === 0 || _[_ - 1] !== _) {
                  _ !== -1 && _ < _ + 1 && (_ = _.indexOf(_, _ + 1));
                  var _ = _(
                    (_ = _ !== -1 && _ < _ + 1 ? _.indexOf(_, _ + 1) : _) === -1
                      ? _
                      : Math.min(_, _),
                  );
                  if (_.substr(_ + 1 + _, _) === _) {
                    (_.push(_.substring(_, _).replace(_, _)),
                      _[(_ = _ + 1 + _ + _)] !== _ && (_ = _.indexOf(_, _)),
                      (_ = _.indexOf(_, _)),
                      (_ = _.indexOf(_, _)));
                    break;
                  }
                  if (
                    ((_ = _(_)), _.substring(_ + 1 + _, _ + 1 + _ + _) === _)
                  ) {
                    if (
                      (_.push(_.substring(_, _).replace(_, _)),
                      _(_ + 1 + _ + _),
                      (_ = _.indexOf(_, _)),
                      (_ = _.indexOf(_, _)),
                      _ && (_(), _))
                    )
                      return _();
                    if (_ && _.length >= _) return _(!0);
                    break;
                  }
                  (_.push({
                    type: `Quotes`,
                    code: `InvalidQuotes`,
                    message: `Trailing quote on quoted field is malformed`,
                    row: _.length,
                    index: _,
                  }),
                    _++);
                }
              }
            else if (_ && _.length === 0 && _.substring(_, _ + _) === _) {
              if (_ === -1) return _();
              ((_ = _ + _), (_ = _.indexOf(_, _)), (_ = _.indexOf(_, _)));
            } else if (_ !== -1 && (_ < _ || _ === -1))
              (_.push(_.substring(_, _)), (_ = _ + _), (_ = _.indexOf(_, _)));
            else {
              if (_ === -1) break;
              if ((_.push(_.substring(_, _)), _(_ + _), _ && (_(), _)))
                return _();
              if (_ && _.length >= _) return _(!0);
            }
          return _();
          function _(_) {
            (_.push(_), (_ = _));
          }
          function _(_) {
            var _ = 0;
            return (_ =
              _ !== -1 && (_ = _.substring(_ + 1, _)) && _.trim() === ``
                ? _.length
                : _);
          }
          function _(_) {
            return (
              _ ||
                (_ === void 0 && (_ = _.substring(_)),
                _.push(_),
                (_ = _),
                _(_),
                _ && _()),
              _()
            );
          }
          function _(_) {
            ((_ = _), _(_), (_ = []), (_ = _.indexOf(_, _)));
          }
          function _(_) {
            if (_.header && !_ && _.length && !_) {
              var _ = _[0],
                _ = Object.create(null),
                _ = new Set(_);
              let _ = !1;
              for (let _ = 0; _ < _.length; _++) {
                let _ = _[_];
                if (
                  _[(_ = _(_.transformHeader) ? _.transformHeader(_, _) : _)]
                ) {
                  let _,
                    _ = _[_];
                  for (; (_ = _ + `_` + _), _++, _.has(_););
                  (_.add(_),
                    (_[_] = _),
                    _[_]++,
                    (_ = !0),
                    ((_ = _ === null ? {} : _)[_] = _));
                } else ((_[_] = 1), (_[_] = _));
                _.add(_);
              }
              (_ && console.warn(`Duplicate headers found and renamed.`),
                (_ = !0));
            }
            return {
              data: _,
              errors: _,
              meta: {
                delimiter: _,
                linebreak: _,
                aborted: _,
                truncated: !!_,
                cursor: _ + (_ || 0),
                renamedHeaders: _,
              },
            };
          }
          function _() {
            (_(_()), (_ = []), (_ = []));
          }
        }),
          (this.abort = function () {
            _ = !0;
          }),
          (this.getCharIndex = function () {
            return _;
          }));
      }
      function _(_) {
        var _ = _.data,
          _ = _[_.workerId],
          _ = !1;
        if (_.error) _.userError(_.error, _.file);
        else if (_.results && _.results.data) {
          var _ = {
            abort: function () {
              ((_ = !0),
                _(_.workerId, {
                  data: [],
                  errors: [],
                  meta: {
                    aborted: !0,
                  },
                }));
            },
            pause: _,
            resume: _,
          };
          if (_(_.userStep)) {
            for (
              var _ = 0;
              _ < _.results.data.length &&
              (_.userStep(
                {
                  data: _.results.data[_],
                  errors: _.results.errors,
                  meta: _.results.meta,
                },
                _,
              ),
              !_);
              _++
            );
            delete _.results;
          } else
            _(_.userChunk) &&
              (_.userChunk(_.results, _, _.file), delete _.results);
        }
        _.finished && !_ && _(_.workerId, _.results);
      }
      function _(_, _) {
        var _ = _[_];
        (_(_.userComplete) && _.userComplete(_), _.terminate(), delete _[_]);
      }
      function _() {
        throw Error(`Not implemented.`);
      }
      function _(_) {
        if (typeof _ != `object` || !_) return _;
        var _,
          _ = Array.isArray(_) ? [] : {};
        for (_ in _) _[_] = _(_[_]);
        return _;
      }
      function _(_, _) {
        return function () {
          _.apply(_, arguments);
        };
      }
      function _(_) {
        return typeof _ == `function`;
      }
      return (
        (_.parse = function (_, _) {
          var _ = (_ ||= {}).dynamicTyping || !1;
          if (
            (_(_) && ((_.dynamicTypingFunction = _), (_ = {})),
            (_.dynamicTyping = _),
            (_.transform = !!_(_.transform) && _.transform),
            !_.worker || !_.WORKERS_SUPPORTED)
          )
            return (
              (_ = null),
              _.NODE_STREAM_INPUT,
              typeof _ == `string`
                ? ((_ = ((_) => (_.charCodeAt(0) === 65279 ? _.slice(1) : _))(
                    _,
                  )),
                  (_ = new (_.download ? _ : _)(_)))
                : !0 === _.readable && _(_.read) && _(_._)
                  ? (_ = new _(_))
                  : ((_.File && _ instanceof File) || _ instanceof Object) &&
                    (_ = new _(_)),
              _.stream(_)
            );
          (((_ = (() => {
            var _;
            return (
              !!_.WORKERS_SUPPORTED &&
              ((_ = (() => {
                var _ = _.URL || _.webkitURL || null,
                  _ = _.toString();
                return (_.BLOB_URL ||= _.createObjectURL(
                  new Blob(
                    [
                      `var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,
                      `(`,
                      _,
                      `)();`,
                    ],
                    {
                      type: `text/javascript`,
                    },
                  ),
                ));
              })()),
              ((_ = new _.Worker(_)).onmessage = _),
              (_._ = _++),
              (_[_._] = _))
            );
          })()).userStep = _.step),
            (_.userChunk = _.chunk),
            (_.userComplete = _.complete),
            (_.userError = _.error),
            (_.step = _(_.step)),
            (_.chunk = _(_.chunk)),
            (_.complete = _(_.complete)),
            (_.error = _(_.error)),
            delete _.worker,
            _.postMessage({
              input: _,
              config: _,
              workerId: _._,
            }));
        }),
        (_.unparse = function (_, _) {
          var _ = !1,
            _ = !0,
            _ = `,`,
            _ = `\r
`,
            _ = `"`,
            _ = _ + _,
            _ = !1,
            _ = null,
            _ = !1,
            _ =
              ((() => {
                if (typeof _ == `object`) {
                  if (
                    (typeof _.delimiter != `string` ||
                      _.BAD_DELIMITERS.filter(function (_) {
                        return _.delimiter.indexOf(_) !== -1;
                      }).length ||
                      (_ = _.delimiter),
                    (typeof _.quotes != `boolean` &&
                      typeof _.quotes != `function` &&
                      !Array.isArray(_.quotes)) ||
                      (_ = _.quotes),
                    (typeof _.skipEmptyLines != `boolean` &&
                      typeof _.skipEmptyLines != `string`) ||
                      (_ = _.skipEmptyLines),
                    typeof _.newline == `string` && (_ = _.newline),
                    typeof _.quoteChar == `string` && (_ = _.quoteChar),
                    typeof _.header == `boolean` && (_ = _.header),
                    Array.isArray(_.columns))
                  ) {
                    if (_.columns.length === 0)
                      throw Error(`Option columns is empty`);
                    _ = _.columns;
                  }
                  (_.escapeChar !== void 0 && (_ = _.escapeChar + _),
                    _.escapeFormulae instanceof RegExp
                      ? (_ = _.escapeFormulae)
                      : typeof _.escapeFormulae == `boolean` &&
                        _.escapeFormulae &&
                        (_ = /^[=+\-@\t\r].*$/));
                }
              })(),
              new RegExp(_(_), `g`));
          if ((typeof _ == `string` && (_ = JSON.parse(_)), Array.isArray(_))) {
            if (!_.length || Array.isArray(_[0])) return _(null, _, _);
            if (typeof _[0] == `object`) return _(_ || Object.keys(_[0]), _, _);
          } else if (typeof _ == `object`)
            return (
              typeof _.data == `string` && (_.data = JSON.parse(_.data)),
              Array.isArray(_.data) &&
                (_.fields || (_.fields = (_.meta && _.meta.fields) || _),
                _.fields ||
                  (_.fields = Array.isArray(_.data[0])
                    ? _.fields
                    : typeof _.data[0] == `object`
                      ? Object.keys(_.data[0])
                      : []),
                Array.isArray(_.data[0]) ||
                  typeof _.data[0] == `object` ||
                  (_.data = [_.data])),
              _(_.fields || [], _.data || [], _)
            );
          throw Error(`Unable to serialize unrecognized input`);
          function _(_, _, _) {
            var _ = ``,
              _ =
                (typeof _ == `string` && (_ = JSON.parse(_)),
                typeof _ == `string` && (_ = JSON.parse(_)),
                Array.isArray(_) && 0 < _.length),
              _ = !Array.isArray(_[0]);
            if (_ && _) {
              for (var _ = 0; _ < _.length; _++)
                (0 < _ && (_ += _), (_ += _(_[_], _)));
              0 < _.length && (_ += _);
            }
            for (var _ = 0; _ < _.length; _++) {
              var _ = (_ ? _ : _[_]).length,
                _ = !1,
                _ = _ ? Object.keys(_[_]).length === 0 : _[_].length === 0;
              if (
                (_ &&
                  !_ &&
                  (_ =
                    _ === `greedy`
                      ? _[_].join(``).trim() === ``
                      : _[_].length === 1 && _[_][0].length === 0),
                _ === `greedy` && _)
              ) {
                for (var _ = [], _ = 0; _ < _; _++) {
                  var _ = _ ? _[_] : _;
                  _.push(_[_][_]);
                }
                _ = _.join(``).trim() === ``;
              }
              if (!_) {
                for (var _ = 0; _ < _; _++) {
                  0 < _ && !_ && (_ += _);
                  var _ = _ && _ ? _[_] : _;
                  _ += _(_[_][_], _);
                }
                _ < _.length - 1 && (!_ || (0 < _ && !_)) && (_ += _);
              }
            }
            return _;
          }
          function _(_, _) {
            var _, _;
            return _ == null
              ? ``
              : _.constructor === Date
                ? JSON.stringify(_).slice(1, 25)
                : ((_ = !1),
                  _ &&
                    typeof _ == `string` &&
                    _.test(_) &&
                    ((_ = `'` + _), (_ = !0)),
                  (_ = _.toString().replace(_, _)),
                  (_ =
                    _ ||
                    !0 === _ ||
                    (typeof _ == `function` && _(_, _)) ||
                    (Array.isArray(_) && _[_]) ||
                    ((_, _) => {
                      for (var _ = 0; _ < _.length; _++)
                        if (-1 < _.indexOf(_[_])) return !0;
                      return !1;
                    })(_, _.BAD_DELIMITERS) ||
                    -1 < _.indexOf(_) ||
                    _.charAt(0) === ` ` ||
                    _.charAt(_.length - 1) === ` `)
                    ? _ + _ + _
                    : _);
          }
        }),
        (_.RECORD_SEP = ``),
        (_.UNIT_SEP = ``),
        (_.BYTE_ORDER_MARK = `﻿`),
        (_.BAD_DELIMITERS = [
          `\r`,
          `
`,
          `"`,
          _.BYTE_ORDER_MARK,
        ]),
        (_.WORKERS_SUPPORTED = !_ && !!_.Worker),
        (_.NODE_STREAM_INPUT = 1),
        (_.LocalChunkSize = 10485760),
        (_.RemoteChunkSize = 5242880),
        (_.DefaultDelimiter = `,`),
        (_.Parser = _),
        (_.ParserHandle = _),
        (_.NetworkStreamer = _),
        (_.FileStreamer = _),
        (_.StringStreamer = _),
        (_.ReadableStreamStreamer = _),
        _.jQuery &&
          ((_ = _.jQuery)._.parse = function (_) {
            var _ = _.config || {},
              _ = [];
            return (
              this.each(function (_) {
                if (
                  !(
                    _(this).prop(`tagName`).toUpperCase() === `INPUT` &&
                    _(this).attr(`type`).toLowerCase() === `file` &&
                    _.FileReader
                  ) ||
                  !this.files ||
                  this.files.length === 0
                )
                  return !0;
                for (var _ = 0; _ < this.files.length; _++)
                  _.push({
                    file: this.files[_],
                    inputElem: this,
                    instanceConfig: _.extend({}, _),
                  });
              }),
              _(),
              this
            );
            function _() {
              if (_.length === 0) _(_.complete) && _.complete();
              else {
                var _,
                  _,
                  _,
                  _,
                  _ = _[0];
                if (_(_.before)) {
                  var _ = _.before(_.file, _.inputElem);
                  if (typeof _ == `object`) {
                    if (_.action === `abort`)
                      return (
                        (_ = `AbortError`),
                        (_ = _.file),
                        (_ = _.inputElem),
                        (_ = _.reason),
                        void (
                          _(_.error) &&
                          _.error(
                            {
                              name: _,
                            },
                            _,
                            _,
                            _,
                          )
                        )
                      );
                    if (_.action === `skip`) return void _();
                    typeof _.config == `object` &&
                      (_.instanceConfig = _.extend(_.instanceConfig, _.config));
                  } else if (_ === `skip`) return void _();
                }
                var _ = _.instanceConfig.complete;
                ((_.instanceConfig.complete = function (_) {
                  (_(_) && _(_, _.file, _.inputElem), _());
                }),
                  _.parse(_.file, _.instanceConfig));
              }
            }
            function _() {
              (_.splice(0, 1), _());
            }
          }),
        _ &&
          (_.onmessage = function (_) {
            ((_ = _.data),
              _.WORKER_ID === void 0 && _ && (_.WORKER_ID = _.workerId),
              typeof _.input == `string`
                ? _.postMessage({
                    workerId: _.WORKER_ID,
                    results: _.parse(_.input, _.config),
                    finished: !0,
                  })
                : ((_.File && _.input instanceof File) ||
                    _.input instanceof Object) &&
                  (_ = _.parse(_.input, _.config)) &&
                  _.postMessage({
                    workerId: _.WORKER_ID,
                    results: _,
                    finished: !0,
                  }));
          }),
        ((_.prototype = Object.create(_.prototype)).constructor = _),
        ((_.prototype = Object.create(_.prototype)).constructor = _),
        ((_.prototype = Object.create(_.prototype)).constructor = _),
        ((_.prototype = Object.create(_.prototype)).constructor = _),
        _
      );
    });
  }),
  _ = _(_()),
  _ = class _ {
    static ParseCSVFile(_, _) {
      return new Promise((_, _) => {
        let _ = {
          header: !0,
          skipEmptyLines: `greedy`,
          complete: _,
          error: (_) =>
            _({
              errors: [_],
            }),
          transformHeader: _,
        };
        _.default.parse(_, _);
      });
    }
    static ReadFile(_) {
      return new Promise((_, _) => {
        let _ = new FileReader();
        ((_.onload = () => _(_.result ?? ``)), _.readAsText(_));
      });
    }
    static WriteFile(_, _) {
      let _ = document.createElement(`a`);
      (navigator.msSaveBlob
        ? navigator.msSaveBlob(_, _)
        : (_.href = window.URL.createObjectURL(_)),
        _.setAttribute(`download`, _),
        _.click());
      try {
        document.removeChild(_);
      } catch {}
    }
    static WriteCSVToFile(_, _, _, _) {
      let _ = _
          ? _.default.unparse(
              {
                fields: _,
                data: _,
              },
              {
                header: !0,
              },
            )
          : _.default.unparse(_, {
              header: !0,
            }),
        _ = _ == 1 ? [`﻿` + _] : [_];
      _.WriteFile(
        new Blob(_, {
          type: `text/csv:charset=utf-8;`,
        }),
        _,
      );
    }
    static m_DummyValueForQuestionHack = 0;
    static WriteXMLToFile(_, _) {
      let _ = () => (this.m_DummyValueForQuestionHack ? `never returned` : `?`),
        _ =
          `<` +
          _() +
          `xml version="1.0" encoding="UTF-8" ` +
          _() +
          `>
`;
      ((_ += new XMLSerializer().serializeToString(_)),
        _.WriteFile(
          new Blob([_], {
            type: `application/xml:charset=utf-8;`,
          }),
          _,
        ));
    }
  };
