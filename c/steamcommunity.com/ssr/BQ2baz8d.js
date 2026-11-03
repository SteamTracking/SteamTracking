function _(_) {
  switch (_) {
    case 0:
      return Uint8Array;
    case 1:
      return Int8Array;
    case 2:
      return Uint8ClampedArray;
    case 3:
      return Int16Array;
    case 4:
      return Uint16Array;
    case 5:
      return Int32Array;
    case 6:
      return Uint32Array;
    case 7:
      return Float32Array;
    case 8:
      return Float64Array;
    case 9:
      return Set;
    case 10:
      return Map;
  }
}
function _(_) {
  return JSON.stringify(_, (_, _) =>
    _ instanceof Uint8Array
      ? {
          _: 0,
          _: [..._],
        }
      : _ instanceof Int8Array
        ? {
            _: 1,
            _: [..._],
          }
        : _ instanceof Uint8ClampedArray
          ? {
              _: 2,
              _: [..._],
            }
          : _ instanceof Int16Array
            ? {
                _: 3,
                _: [..._],
              }
            : _ instanceof Uint16Array
              ? {
                  _: 4,
                  _: [..._],
                }
              : _ instanceof Int32Array
                ? {
                    _: 5,
                    _: [..._],
                  }
                : _ instanceof Uint32Array
                  ? {
                      _: 6,
                      _: [..._],
                    }
                  : _ instanceof Float32Array
                    ? {
                        _: 7,
                        _: [..._],
                      }
                    : _ instanceof Float64Array
                      ? {
                          _: 8,
                          _: [..._],
                        }
                      : _ instanceof Set
                        ? {
                            _: 9,
                            _: Array.from(_.values()),
                          }
                        : _ instanceof Map
                          ? {
                              _: 10,
                              _: Array.from(_.entries()),
                            }
                          : _,
  );
}
function _(_) {
  return JSON.parse(_, (_, _) => {
    if (_ && typeof _ == `object` && `_t` in _) {
      let _ = _(_._);
      return _ ? new _(_._) : _;
    }
    return _;
  });
}
var _ = class extends Error {
    eResult;
    constructor(_, _) {
      super(_ ? `EResult ${_}: ${_}` : `EResult ${_}`), (this.eResult = _);
    }
  },
  _ = class extends Error {
    action;
    status;
    constructor(_, _) {
      super(`Action ${_} return HTTP ${_}`),
        (this.action = _),
        (this.status = _);
    }
  },
  _ = _(_(), 1);
function _(_) {
  if (typeof _ == `object` && _ && `pageRoute` in _) {
    let _ = _.pageRoute;
    if (`assetData` in _ && `metadata` in _) return _;
  }
}
function _(_, _) {
  _(!_, `Should not call pushPageHistoryState with navigationAPI`),
    history.pushState(
      {
        pageRoute: _,
      },
      ``,
      _,
    );
}
function _(_) {
  _((_) => ({
    ..._,
    pageRoute: {
      ..._.pageRoute,
      ..._,
    },
  }));
}
function _(_) {
  _((_) => ({
    ..._,
    pageRoute: {
      ..._.pageRoute,
      scrollPosition: _,
    },
  }));
}
function _() {
  return _(_());
}
var _ = `x-valve-request-type`,
  _ = `x-valve-action-type`,
  _ = `x-valve-loader-index`,
  _ = `x-valve-refetch-payload`;
async function _(_, _) {
  let _ = await _.json().catch(() => void 0);
  if (_ && typeof _ == `object` && typeof _.success == `number`) {
    let _ =
      typeof _.message == `string`
        ? _.message.replace(/^EResult \d+: ?/, ``)
        : ``;
    return new _(_.success, _ || void 0);
  }
  return new _(_, _.status);
}
function _(_) {
  return location.reload(), new _(_, 0);
}
var _ = class extends Error {
  status;
  constructor(_, _) {
    super(`Route data request to ${_} failed with status ${_}`),
      (this.status = _);
  }
};
async function* _(_) {
  let _ = ``;
  for (;;) {
    let { done: _, value: _ } = await _.read();
    if (_ || _ === void 0) break;
    _ += _;
    let _ = _.split(`
`);
    if (_.length !== 0) {
      _ = _.pop();
      for (let _ of _) yield _;
    }
  }
  _ !== `` && (yield _);
}
async function* _(_, _) {
  let { abortSignal: _, additionalHeaders: _, requestType: _ } = _;
  `TextDecoderStream` in window ||
    (await _(() => import(`./CTNasNNZ.js`), [], import.meta.url));
  let _ = new Headers(_);
  _.append(_, _);
  let _,
    _ = _ === `routeAction`;
  _ &&
    (_.append(_, `${_.routeID}:${_.action}`),
    _.append(`Content-Type`, `application/json; charset=utf-8`),
    (_ = _(_.data)));
  let _ = await fetch(_, {
    credentials: `same-origin`,
    headers: _,
    signal: _,
    body: _,
    method: _ ? `POST` : `GET`,
    redirect: `manual`,
  });
  if (_.type === `opaqueredirect`)
    throw _
      ? _(_.action)
      : ((location.href = _),
        Error(
          `Request to ${_} was redirected; navigating so the browser can follow it`,
        ));
  if (_ === `routeAction` && !_._) throw await _(_.action, _);
  if (
    _ === `routeData` &&
    (_.headers.get(`x-valve-response-type`) !== `routeData` ||
      (_.bRequireOK && !_._))
  )
    throw new _(_, _.status);
  let _ = _.body?.pipeThrough(new TextDecoderStream()).getReader();
  if (!_) throw Error(`no response body reader`);
  for await (let _ of _(_)) {
    if (_?.aborted) return;
    yield _;
  }
}
async function* _(_, _, _) {
  for await (let _ of _(_, {
    abortSignal: _,
    additionalHeaders: _,
    requestType: `routeData`,
  }))
    yield _;
}
async function _(_, _, _, _) {
  let _ = [],
    _ = _.map((_) => [_, _.toString()]);
  _ !== void 0 && _.push([_, _]);
  for await (let _ of _(_, {
    abortSignal: _,
    additionalHeaders: _,
    requestType: `routeData`,
    bRequireOK: !0,
  }))
    _.push(_(_));
  return _;
}
async function _(_, _, _, _) {
  return (await _(_, [_], _, _))[0];
}
async function _(_, _) {
  let _,
    _ = !1,
    _;
  for await (let _ of _(_, {
    ..._,
    requestType: `routeAction`,
  }))
    _
      ? ((_ = JSON.parse(_)), window.SSR?.saveMetricsMetadata?.(_))
      : ((_ = _(_)), (_ = !0));
  return _;
}
var _ = _(
    _((_, _) => {
      var _ = `__lodash_hash_undefined__`,
        _ = 9007199254740991,
        _ = `[object Arguments]`,
        _ = `[object Array]`,
        _ = `[object Boolean]`,
        _ = `[object Date]`,
        _ = `[object Error]`,
        _ = `[object Function]`,
        _ = `[object GeneratorFunction]`,
        _ = `[object Map]`,
        _ = `[object Number]`,
        _ = `[object Object]`,
        _ = `[object Promise]`,
        _ = `[object RegExp]`,
        _ = `[object Set]`,
        _ = `[object String]`,
        _ = `[object Symbol]`,
        _ = `[object WeakMap]`,
        _ = `[object ArrayBuffer]`,
        _ = `[object DataView]`,
        _ = `[object Float32Array]`,
        _ = `[object Float64Array]`,
        _ = `[object Int8Array]`,
        _ = `[object Int16Array]`,
        _ = `[object Int32Array]`,
        _ = `[object Uint8Array]`,
        _ = `[object Uint8ClampedArray]`,
        _ = `[object Uint16Array]`,
        _ = `[object Uint32Array]`,
        _ = /[\\^$.*+?()[\]{}|]/g,
        _ = /\w*$/,
        _ = /^\[object .+?Constructor\]$/,
        _ = /^(?:0|[1-9]\d*)$/,
        _ = {};
      (_[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
        _[_] =
          !0),
        (_[_] = _[_] = _[_] = !1);
      var _ =
          typeof global == `object` &&
          global &&
          global.Object === Object &&
          global,
        _ = typeof self == `object` && self && self.Object === Object && self,
        _ = _ || _ || Function(`return this`)(),
        _ = typeof _ == `object` && _ && !_.nodeType && _,
        _ = _ && typeof _ == `object` && _ && !_.nodeType && _,
        _ = _ && _.exports === _;
      function _(_, _) {
        return _.set(_[0], _[1]), _;
      }
      function _(_, _) {
        return _.add(_), _;
      }
      function _(_, _) {
        for (
          var _ = -1, _ = _ ? _.length : 0;
          ++_ < _ && _(_[_], _, _) !== !1;
        );
        return _;
      }
      function _(_, _) {
        for (var _ = -1, _ = _.length, _ = _.length; ++_ < _; ) _[_ + _] = _[_];
        return _;
      }
      function _(_, _, _, _) {
        var _ = -1,
          _ = _ ? _.length : 0;
        for (_ && _ && (_ = _[++_]); ++_ < _; ) _ = _(_, _[_], _, _);
        return _;
      }
      function _(_, _) {
        for (var _ = -1, _ = Array(_); ++_ < _; ) _[_] = _(_);
        return _;
      }
      function _(_, _) {
        return _?.[_];
      }
      function _(_) {
        var _ = !1;
        if (_ != null && typeof _.toString != `function`)
          try {
            _ = !!(_ + ``);
          } catch {}
        return _;
      }
      function _(_) {
        var _ = -1,
          _ = Array(_.size);
        return (
          _.forEach(function (_, _) {
            _[++_] = [_, _];
          }),
          _
        );
      }
      function _(_, _) {
        return function (_) {
          return _(_(_));
        };
      }
      function _(_) {
        var _ = -1,
          _ = Array(_.size);
        return (
          _.forEach(function (_) {
            _[++_] = _;
          }),
          _
        );
      }
      var _ = Array.prototype,
        _ = Function.prototype,
        _ = Object.prototype,
        _ = _[`__core-js_shared__`],
        _ = (function () {
          var _ = /[^.]+$/.exec((_ && _.keys && _.keys.IE_PROTO) || ``);
          return _ ? `Symbol(src)_1.` + _ : ``;
        })(),
        _ = _.toString,
        _ = _.hasOwnProperty,
        _ = _.toString,
        _ = RegExp(
          `^` +
            _.call(_)
              .replace(_, `\\$&`)
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                `$1.*?`,
              ) +
            `$`,
        ),
        _ = _ ? _.Buffer : void 0,
        _ = _.Symbol,
        _ = _.Uint8Array,
        _ = _(Object.getPrototypeOf, Object),
        _ = Object.create,
        _ = _.propertyIsEnumerable,
        _ = _.splice,
        _ = Object.getOwnPropertySymbols,
        _ = _ ? _.isBuffer : void 0,
        _ = _(Object.keys, Object),
        _ = _(_, `DataView`),
        _ = _(_, `Map`),
        _ = _(_, `Promise`),
        _ = _(_, `Set`),
        _ = _(_, `WeakMap`),
        _ = _(Object, `create`),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _ ? _.prototype : void 0,
        _ = _ ? _.valueOf : void 0;
      function _(_) {
        var _ = -1,
          _ = _ ? _.length : 0;
        for (this.clear(); ++_ < _; ) {
          var _ = _[_];
          this.set(_[0], _[1]);
        }
      }
      function _() {
        this.__data__ = _ ? _(null) : {};
      }
      function _(_) {
        return this.has(_) && delete this.__data__[_];
      }
      function _(_) {
        var _ = this.__data__;
        if (_) {
          var _ = _[_];
          return _ === _ ? void 0 : _;
        }
        return _.call(_, _) ? _[_] : void 0;
      }
      function _(_) {
        var _ = this.__data__;
        return _ ? _[_] !== void 0 : _.call(_, _);
      }
      function _(_, _) {
        var _ = this.__data__;
        return (_[_] = _ && _ === void 0 ? _ : _), this;
      }
      (_.prototype.clear = _),
        (_.prototype.delete = _),
        (_.prototype.get = _),
        (_.prototype.has = _),
        (_.prototype.set = _);
      function _(_) {
        var _ = -1,
          _ = _ ? _.length : 0;
        for (this.clear(); ++_ < _; ) {
          var _ = _[_];
          this.set(_[0], _[1]);
        }
      }
      function _() {
        this.__data__ = [];
      }
      function _(_) {
        var _ = this.__data__,
          _ = _(_, _);
        return _ < 0 ? !1 : (_ == _.length - 1 ? _.pop() : _.call(_, _, 1), !0);
      }
      function _(_) {
        var _ = this.__data__,
          _ = _(_, _);
        return _ < 0 ? void 0 : _[_][1];
      }
      function _(_) {
        return _(this.__data__, _) > -1;
      }
      function _(_, _) {
        var _ = this.__data__,
          _ = _(_, _);
        return _ < 0 ? _.push([_, _]) : (_[_][1] = _), this;
      }
      (_.prototype.clear = _),
        (_.prototype.delete = _),
        (_.prototype.get = _),
        (_.prototype.has = _),
        (_.prototype.set = _);
      function _(_) {
        var _ = -1,
          _ = _ ? _.length : 0;
        for (this.clear(); ++_ < _; ) {
          var _ = _[_];
          this.set(_[0], _[1]);
        }
      }
      function _() {
        this.__data__ = {
          hash: new _(),
          map: new (_ || _)(),
          string: new _(),
        };
      }
      function _(_) {
        return _(this, _).delete(_);
      }
      function _(_) {
        return _(this, _).get(_);
      }
      function _(_) {
        return _(this, _).has(_);
      }
      function _(_, _) {
        return _(this, _).set(_, _), this;
      }
      (_.prototype.clear = _),
        (_.prototype.delete = _),
        (_.prototype.get = _),
        (_.prototype.has = _),
        (_.prototype.set = _);
      function _(_) {
        this.__data__ = new _(_);
      }
      function _() {
        this.__data__ = new _();
      }
      function _(_) {
        return this.__data__.delete(_);
      }
      function _(_) {
        return this.__data__.get(_);
      }
      function _(_) {
        return this.__data__.has(_);
      }
      function _(_, _) {
        var _ = this.__data__;
        if (_ instanceof _) {
          var _ = _.__data__;
          if (!_ || _.length < 199) return _.push([_, _]), this;
          _ = this.__data__ = new _(_);
        }
        return _.set(_, _), this;
      }
      (_.prototype.clear = _),
        (_.prototype.delete = _),
        (_.prototype.get = _),
        (_.prototype.has = _),
        (_.prototype.set = _);
      function _(_, _) {
        var _ = _(_) || _(_) ? _(_.length, String) : [],
          _ = _.length,
          _ = !!_;
        for (var _ in _)
          (_ || _.call(_, _)) &&
            (!_ || (_ != `length` && !_(_, _))) &&
            _.push(_);
        return _;
      }
      function _(_, _, _) {
        var _ = _[_];
        (!(_.call(_, _) && _(_, _)) || (_ === void 0 && !(_ in _))) &&
          (_[_] = _);
      }
      function _(_, _) {
        for (var _ = _.length; _--; ) if (_(_[_][0], _)) return _;
        return -1;
      }
      function _(_, _) {
        return _ && _(_, _(_), _);
      }
      function _(_, _, _, _, _, _, _) {
        var _;
        if ((_ && (_ = _ ? _(_, _, _, _) : _(_)), _ !== void 0)) return _;
        if (!_(_)) return _;
        var _ = _(_);
        if (_) {
          if (((_ = _(_)), !_)) return _(_, _);
        } else {
          var _ = _(_),
            _ = _ == _ || _ == _;
          if (_(_)) return _(_, _);
          if (_ == _ || _ == _ || (_ && !_)) {
            if (_(_)) return _ ? _ : {};
            if (((_ = _(_ ? {} : _)), !_)) return _(_, _(_, _));
          } else {
            if (!_[_]) return _ ? _ : {};
            _ = _(_, _, _, _);
          }
        }
        _ ||= new _();
        var _ = _.get(_);
        if (_) return _;
        if ((_.set(_, _), !_)) var _ = _ ? _(_) : _(_);
        return (
          _(_ || _, function (_, _) {
            _ && ((_ = _), (_ = _[_])), _(_, _, _(_, _, _, _, _, _, _));
          }),
          _
        );
      }
      function _(_) {
        return _(_) ? _(_) : {};
      }
      function _(_, _, _) {
        var _ = _(_);
        return _(_) ? _ : _(_, _(_));
      }
      function _(_) {
        return _.call(_);
      }
      function _(_) {
        return !_(_) || _(_) ? !1 : (_(_) || _(_) ? _ : _).test(_(_));
      }
      function _(_) {
        if (!_(_)) return _(_);
        var _ = [];
        for (var _ in Object(_))
          _.call(_, _) && _ != `constructor` && _.push(_);
        return _;
      }
      function _(_, _) {
        if (_) return _.slice();
        var _ = new _.constructor(_.length);
        return _.copy(_), _;
      }
      function _(_) {
        var _ = new _.constructor(_.byteLength);
        return new _(_).set(new _(_)), _;
      }
      function _(_, _) {
        var _ = _ ? _(_.buffer) : _.buffer;
        return new _.constructor(_, _.byteOffset, _.byteLength);
      }
      function _(_, _, _) {
        return _(_ ? _(_(_), !0) : _(_), _, new _.constructor());
      }
      function _(_) {
        var _ = new _.constructor(_.source, _.exec(_));
        return (_.lastIndex = _.lastIndex), _;
      }
      function _(_, _, _) {
        return _(_ ? _(_(_), !0) : _(_), _, new _.constructor());
      }
      function _(_) {
        return _ ? Object(_.call(_)) : {};
      }
      function _(_, _) {
        var _ = _ ? _(_.buffer) : _.buffer;
        return new _.constructor(_, _.byteOffset, _.length);
      }
      function _(_, _) {
        var _ = -1,
          _ = _.length;
        for (_ ||= Array(_); ++_ < _; ) _[_] = _[_];
        return _;
      }
      function _(_, _, _, _) {
        _ ||= {};
        for (var _ = -1, _ = _.length; ++_ < _; ) {
          var _ = _[_],
            _ = _ ? _(_[_], _[_], _, _, _) : void 0;
          _(_, _, _ === void 0 ? _[_] : _);
        }
        return _;
      }
      function _(_, _) {
        return _(_, _(_), _);
      }
      function _(_) {
        return _(_, _, _);
      }
      function _(_, _) {
        var _ = _.__data__;
        return _(_) ? _[typeof _ == `string` ? `string` : `hash`] : _.map;
      }
      function _(_, _) {
        var _ = _(_, _);
        return _(_) ? _ : void 0;
      }
      var _ = _ ? _(_, Object) : _,
        _ = _;
      ((_ && _(new _(new ArrayBuffer(1))) != _) ||
        (_ && _(new _()) != _) ||
        (_ && _(_.resolve()) != _) ||
        (_ && _(new _()) != _) ||
        (_ && _(new _()) != _)) &&
        (_ = function (_) {
          var _ = _.call(_),
            _ = _ == _ ? _.constructor : void 0,
            _ = _ ? _(_) : void 0;
          if (_)
            switch (_) {
              case _:
                return _;
              case _:
                return _;
              case _:
                return _;
              case _:
                return _;
              case _:
                return _;
            }
          return _;
        });
      function _(_) {
        var _ = _.length,
          _ = _.constructor(_);
        return (
          _ &&
            typeof _[0] == `string` &&
            _.call(_, `index`) &&
            ((_.index = _.index), (_.input = _.input)),
          _
        );
      }
      function _(_) {
        return typeof _.constructor == `function` && !_(_) ? _(_(_)) : {};
      }
      function _(_, _, _, _) {
        var _ = _.constructor;
        switch (_) {
          case _:
            return _(_);
          case _:
          case _:
            return new _(+_);
          case _:
            return _(_, _);
          case _:
          case _:
          case _:
          case _:
          case _:
          case _:
          case _:
          case _:
          case _:
            return _(_, _);
          case _:
            return _(_, _, _);
          case _:
          case _:
            return new _(_);
          case _:
            return _(_);
          case _:
            return _(_, _, _);
          case _:
            return _(_);
        }
      }
      function _(_, _) {
        return (
          (_ ??= _),
          !!_ &&
            (typeof _ == `number` || _.test(_)) &&
            _ > -1 &&
            _ % 1 == 0 &&
            _ < _
        );
      }
      function _(_) {
        var _ = typeof _;
        return _ == `string` || _ == `number` || _ == `symbol` || _ == `boolean`
          ? _ !== `__proto__`
          : _ === null;
      }
      function _(_) {
        return !!_ && _ in _;
      }
      function _(_) {
        var _ = _ && _.constructor;
        return _ === ((typeof _ == `function` && _.prototype) || _);
      }
      function _(_) {
        if (_ != null) {
          try {
            return _.call(_);
          } catch {}
          try {
            return _ + ``;
          } catch {}
        }
        return ``;
      }
      function _(_) {
        return _(_, !0, !0);
      }
      function _(_, _) {
        return _ === _ || (_ !== _ && _ !== _);
      }
      function _(_) {
        return (
          _(_) &&
          _.call(_, `callee`) &&
          (!_.call(_, `callee`) || _.call(_) == _)
        );
      }
      var _ = Array.isArray;
      function _(_) {
        return _ != null && _(_.length) && !_(_);
      }
      function _(_) {
        return _(_) && _(_);
      }
      var _ = _ || _;
      function _(_) {
        var _ = _(_) ? _.call(_) : ``;
        return _ == _ || _ == _;
      }
      function _(_) {
        return typeof _ == `number` && _ > -1 && _ % 1 == 0 && _ <= _;
      }
      function _(_) {
        var _ = typeof _;
        return !!_ && (_ == `object` || _ == `function`);
      }
      function _(_) {
        return !!_ && typeof _ == `object`;
      }
      function _(_) {
        return _(_) ? _(_) : _(_);
      }
      function _() {
        return [];
      }
      function _() {
        return !1;
      }
      _.exports = _;
    })(),
    1,
  ),
  _ = _();
function _(_) {
  return _ ? _(_) : null;
}
var _ = Symbol.for(`No loader context`),
  _ = (0, _.createContext)(_);
function _(_) {
  let [_, _] = (0, _.useState)(_.loaderData),
    _ = (0, _.useRef)(_.loaderData),
    _ = _.current !== _.loaderData;
  _.current = _.loaderData;
  let [_, _] = (0, _.useState)(),
    _ = (0, _.useCallback)(
      async (_) => {
        let _ = new URL(location.href),
          _ = _.pathname + _.search + _.hash,
          _ = _ ? JSON.stringify(_) : ``,
          _ = _ + _;
        if (_) {
          if (_.fetchKey === _) return _.promise;
          _.abortController.abort();
        }
        let _ = new AbortController(),
          _ = _(_, _._, _ ? _ : void 0, _.signal);
        _({
          promise: _,
          abortController: _,
          fetchKey: _,
        });
        try {
          let _ = await _;
          return _(_), _(void 0), _;
        } catch (_) {
          if (!_.signal.aborted) throw (_(void 0), _);
        }
        return _;
      },
      [_._, _],
    ),
    _ = (0, _.useRef)(_);
  _.current = _;
  let _ = _.useCallback((..._) => _.current(..._), []);
  return (
    (0, _.useEffect)(() => {
      _(_.loaderData);
      {
        let _ = _();
        if (_?.loaderData) {
          let _ = [..._.loaderData];
          (_[_._] = (0, _.default)(_.loaderData)),
            _({
              ..._,
              loaderData: _,
            });
        }
      }
    }, [_.loaderData, _._]),
    (0, _.jsx)(_.Provider, {
      value: {
        loaderData: _ ? _.loaderData : _,
        refetchFn: _,
        fetchState: _,
        _: _._,
      },
      children: _.children,
    })
  );
}
function _(_) {
  let _ = (0, _.useContext)(_);
  if (_ === _) throw `Used ${_} outside of LoaderContext`;
  return _;
}
function _() {
  return _(`useLoaderData`).loaderData;
}
function _() {
  return _(`useRefetchLoader`).refetchFn;
}
var _ = !!(typeof window < `u` && window.navigation);
function _(_) {
  if (_) {
    let _ = _(window.navigation.currentEntry?.getState() ?? {});
    window.navigation.updateCurrentEntry({
      state: _,
    });
  } else history.replaceState(_(history.state ?? {}), ``);
}
function _(_) {
  let _ = typeof _ == `string` ? _ : _.toString();
  _
    ? window.navigation.currentEntry?.url != _ &&
      (console.assert(
        !window.navigation.transition,
        `ReplaceHistoryURL during transition`,
      ),
      window.navigation.navigate(_, {
        state: window.navigation.currentEntry?.getState(),
        info: {
          SSR: !0,
        },
        history: `replace`,
      }))
    : window.location.href != _ && history.replaceState(history.state, ``, _);
}
function _(_, _) {
  if (_) {
    console.assert(
      !window.navigation.transition,
      `ReplaceHistoryStateAndURL during transition`,
    );
    let _ = _(window.navigation.currentEntry?.getState());
    window.navigation.navigate(typeof _ == `string` ? _ : _.toString(), {
      state: _,
      info: {
        SSR: !0,
      },
      history: `replace`,
    });
  } else history.replaceState(_(history.state), ``, _);
}
function _(_, _) {
  if (_) {
    console.assert(
      !window.navigation.transition,
      `ReplaceHistoryStateAndURL during transition`,
    );
    let _ = _(window.navigation.currentEntry?.getState());
    window.navigation.navigate(typeof _ == `string` ? _ : _.toString(), {
      state: _,
      info: {
        SSR: !0,
        bSkipFetch: !0,
      },
      history: `push`,
    });
  } else history.pushState(_(history.state), ``, _);
}
function _() {
  return _
    ? window.navigation?.currentEntry?.getState()
    : window.history?.state;
}
function _(_) {
  if (_) {
    let _ = (_) => {
      _.navigationType == `traverse` &&
        _.canIntercept &&
        _.intercept({
          handler: async () => {
            window.navigation.transition.finished.then(_);
          },
        });
    };
    return (
      window.navigation.addEventListener(`navigate`, _),
      () => window.navigation.removeEventListener(`navigate`, _)
    );
  }
  return (
    window.addEventListener(`popstate`, _),
    () => window.removeEventListener(`popstate`, _)
  );
}
var _ = new Set(),
  _;
function _() {
  location.href !== _ &&
    _.forEach((_) => {
      try {
        _();
      } catch {}
    }),
    (_ = location.href),
    _.size > 0 && requestAnimationFrame(_);
}
function _(_) {
  let _ = () => {
    _();
  };
  return _
    ? (window.navigation.addEventListener(`currententrychange`, _),
      () => window.navigation.removeEventListener(`currententrychange`, _))
    : ((_ = location.href),
      requestAnimationFrame(_),
      _.add(_),
      () => _.delete(_));
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
