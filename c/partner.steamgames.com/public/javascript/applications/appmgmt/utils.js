import { _, _, _ } from "./mobx.esm.js";
var _ = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(_) {
      return (
        this.listeners.add(_),
        this.onSubscribe(),
        () => {
          this.listeners.delete(_), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  _ = typeof window > `u` || `Deno` in globalThis;
function _() {}
function _(_, _) {
  return typeof _ == `function` ? _(_) : _;
}
function _(_) {
  return typeof _ == `number` && _ >= 0 && _ !== 1 / 0;
}
function _(_, _) {
  return Math.max(_ + (_ || 0) - Date.now(), 0);
}
function _(_, _) {
  return typeof _ == `function` ? _(_) : _;
}
function _(_, _) {
  return typeof _ == `function` ? _(_) : _;
}
function _(_, _) {
  let {
    type: _ = `all`,
    exact: _,
    fetchStatus: _,
    predicate: _,
    queryKey: _,
    stale: _,
  } = _;
  if (_) {
    if (_) {
      if (_.queryHash !== _(_, _.options)) return !1;
    } else if (!_(_.queryKey, _)) return !1;
  }
  if (_ !== `all`) {
    let _ = _.isActive();
    if ((_ === `active` && !_) || (_ === `inactive` && _)) return !1;
  }
  return !(
    (typeof _ == `boolean` && _.isStale() !== _) ||
    (_ && _ !== _.state.fetchStatus) ||
    (_ && !_(_))
  );
}
function _(_, _) {
  let { exact: _, status: _, predicate: _, mutationKey: _ } = _;
  if (_) {
    if (!_.options.mutationKey) return !1;
    if (_) {
      if (_(_.options.mutationKey) !== _(_)) return !1;
    } else if (!_(_.options.mutationKey, _)) return !1;
  }
  return !((_ && _.state.status !== _) || (_ && !_(_)));
}
function _(_, _) {
  return (_?.queryKeyHashFn || _)(_);
}
function _(_) {
  return JSON.stringify(_, (_, _) =>
    _(_)
      ? Object.keys(_)
          .sort()
          .reduce((_, _) => ((_[_] = _[_]), _), {})
      : _,
  );
}
function _(_, _) {
  return _ === _
    ? !0
    : typeof _ == typeof _ &&
        _ &&
        _ &&
        typeof _ == `object` &&
        typeof _ == `object`
      ? !Object.keys(_).some((_) => !_(_[_], _[_]))
      : !1;
}
function _(_, _) {
  if (_ === _) return _;
  let _ = _(_) && _(_);
  if (_ || (_(_) && _(_))) {
    let _ = _ ? _ : Object.keys(_),
      _ = _.length,
      _ = _ ? _ : Object.keys(_),
      _ = _.length,
      _ = _ ? [] : {},
      _ = 0;
    for (let _ = 0; _ < _; _++) {
      let _ = _ ? _ : _[_];
      ((!_ && _.includes(_)) || _) && _[_] === void 0 && _[_] === void 0
        ? ((_[_] = void 0), _++)
        : ((_[_] = _(_[_], _[_])), _[_] === _[_] && _[_] !== void 0 && _++);
    }
    return _ === _ && _ === _ ? _ : _;
  }
  return _;
}
function _(_, _) {
  if (!_ || Object.keys(_).length !== Object.keys(_).length) return !1;
  for (let _ in _) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_) {
  return Array.isArray(_) && _.length === Object.keys(_).length;
}
function _(_) {
  if (!_(_)) return !1;
  let _ = _.constructor;
  if (_ === void 0) return !0;
  let _ = _.prototype;
  return !(
    !_(_) ||
    !_.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(_) !== Object.prototype
  );
}
function _(_) {
  return Object.prototype.toString.call(_) === `[object Object]`;
}
function _(_) {
  return new Promise((_) => {
    setTimeout(_, _);
  });
}
function _(_, _, _) {
  return typeof _.structuralSharing == `function`
    ? _.structuralSharing(_, _)
    : _.structuralSharing === !1
      ? _
      : _(_, _);
}
function _(_, _, _ = 0) {
  let _ = [..._, _];
  return _ && _.length > _ ? _.slice(1) : _;
}
function _(_, _, _ = 0) {
  let _ = [_, ..._];
  return _ && _.length > _ ? _.slice(0, -1) : _;
}
var _ = Symbol();
function _(_, _) {
  return !_.queryFn && _?.initialPromise
    ? () => _.initialPromise
    : !_.queryFn || _.queryFn === _
      ? () => Promise.reject(Error(`Missing queryFn: '${_.queryHash}'`))
      : _.queryFn;
}
var _ = new (class extends _ {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (_) => {
          if (!_ && window.addEventListener) {
            let _ = () => _();
            return (
              window.addEventListener(`visibilitychange`, _, !1),
              () => {
                window.removeEventListener(`visibilitychange`, _);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(_) {
      (this.#n = _),
        this.#t?.(),
        (this.#t = _((_) => {
          typeof _ == `boolean` ? this.setFocused(_) : this.onFocus();
        }));
    }
    setFocused(_) {
      this.#e !== _ && ((this.#e = _), this.onFocus());
    }
    onFocus() {
      let _ = this.isFocused();
      this.listeners.forEach((_) => {
        _(_);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  _ = new (class extends _ {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (_) => {
          if (!_ && window.addEventListener) {
            let _ = () => _(!0),
              _ = () => _(!1);
            return (
              window.addEventListener(`online`, _, !1),
              window.addEventListener(`offline`, _, !1),
              () => {
                window.removeEventListener(`online`, _),
                  window.removeEventListener(`offline`, _);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(_) {
      (this.#n = _), this.#t?.(), (this.#t = _(this.setOnline.bind(this)));
    }
    setOnline(_) {
      this.#e !== _ &&
        ((this.#e = _),
        this.listeners.forEach((_) => {
          _(_);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function _() {
  let _,
    _,
    _ = new Promise((_, _) => {
      (_ = _), (_ = _);
    });
  (_.status = `pending`), _.catch(() => {});
  function _(_) {
    Object.assign(_, _), delete _.resolve, delete _.reject;
  }
  return (
    (_.resolve = (_) => {
      _({
        status: `fulfilled`,
        value: _,
      }),
        _(_);
    }),
    (_.reject = (_) => {
      _({
        status: `rejected`,
        reason: _,
      }),
        _(_);
    }),
    _
  );
}
function _(_) {
  return Math.min(1e3 * 2 ** _, 3e4);
}
function _(_) {
  return (_ ?? `online`) !== `online` || _.isOnline();
}
var _ = class extends Error {
  constructor(_) {
    super(`CancelledError`),
      (this.revert = _?.revert),
      (this.silent = _?.silent);
  }
};
function _(_) {
  return _ instanceof _;
}
function _(_) {
  let _ = !1,
    _ = 0,
    _ = !1,
    _,
    _ = _(),
    _ = (_) => {
      _ || (_(new _(_)), _.abort?.());
    },
    _ = () => {
      _ = !0;
    },
    _ = () => {
      _ = !1;
    },
    _ = () =>
      _.isFocused() &&
      (_.networkMode === `always` || _.isOnline()) &&
      _.canRun(),
    _ = () => _(_.networkMode) && _.canRun(),
    _ = (_) => {
      _ || ((_ = !0), _.onSuccess?.(_), _?.(), _.resolve(_));
    },
    _ = (_) => {
      _ || ((_ = !0), _.onError?.(_), _?.(), _.reject(_));
    },
    _ = () =>
      new Promise((_) => {
        (_ = (_) => {
          (_ || _()) && _(_);
        }),
          _.onPause?.();
      }).then(() => {
        (_ = void 0), _ || _.onContinue?.();
      }),
    _ = () => {
      if (_) return;
      let _,
        _ = _ === 0 ? _.initialPromise : void 0;
      try {
        _ = _ ?? _._();
      } catch (_) {
        _ = Promise.reject(_);
      }
      Promise.resolve(_)
        .then(_)
        .catch((_) => {
          if (_) return;
          let _ = _.retry ?? (_ ? 0 : 3),
            _ = _.retryDelay ?? _,
            _ = typeof _ == `function` ? _(_, _) : _,
            _ =
              _ === !0 ||
              (typeof _ == `number` && _ < _) ||
              (typeof _ == `function` && _(_, _));
          _ || !_
            ? _(_)
            : (_++,
              _.onFail?.(_, _),
              _(_)
                .then(() => (_() ? void 0 : _()))
                .then(() => {
                  _ ? _(_) : _();
                }));
        });
    };
  return {
    promise: _,
    cancel: _,
    continue: () => (_?.(), _),
    cancelRetry: _,
    continueRetry: _,
    canStart: _,
    start: () => (_() ? _() : _().then(_), _),
  };
}
function _() {
  let _ = [],
    _ = 0,
    _ = (_) => {
      _();
    },
    _ = (_) => {
      _();
    },
    _ = (_) => setTimeout(_, 0),
    _ = (_) => {
      _
        ? _.push(_)
        : _(() => {
            _(_);
          });
    },
    _ = () => {
      let _ = _;
      (_ = []),
        _.length &&
          _(() => {
            _(() => {
              _.forEach((_) => {
                _(_);
              });
            });
          });
    };
  return {
    batch: (_) => {
      let _;
      _++;
      try {
        _ = _();
      } finally {
        _--, _ || _();
      }
      return _;
    },
    batchCalls:
      (_) =>
      (..._) => {
        _(() => {
          _(..._);
        });
      },
    schedule: _,
    setNotifyFunction: (_) => {
      _ = _;
    },
    setBatchNotifyFunction: (_) => {
      _ = _;
    },
    setScheduler: (_) => {
      _ = _;
    },
  };
}
var _ = _(),
  _ = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        _(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(_) {
      this.gcTime = Math.max(this.gcTime || 0, _ ?? (_ ? 1 / 0 : 3e5));
    }
    clearGcTimeout() {
      this.#e &&= (clearTimeout(this.#e), void 0);
    }
  },
  _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(void 0),
  _ = (_) => {
    let _ = _.useContext(_);
    if (_) return _;
    if (!_)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return _;
  },
  _ = ({ client: _, children: _ }) => (
    _.useEffect(
      () => (
        _.mount(),
        () => {
          _.unmount();
        }
      ),
      [_],
    ),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _,
    })
  );
function _(_, _) {
  return typeof _ == `function` ? _(..._) : !!_;
}
function _() {}
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
  _,
  _,
  _,
  _,
  _,
};
