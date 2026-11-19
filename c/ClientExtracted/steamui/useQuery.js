import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
var _ = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(_) {
      return (
        this.listeners.add(_),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(_), this.onUnsubscribe());
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
function _(_) {
  return _;
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
      (super(),
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
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(_) {
      ((this.#n = _),
        this.#t?.(),
        (this.#t = _((_) => {
          typeof _ == `boolean` ? this.setFocused(_) : this.onFocus();
        })));
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
      (super(),
        (this.#n = (_) => {
          if (!_ && window.addEventListener) {
            let _ = () => _(!0),
              _ = () => _(!1);
            return (
              window.addEventListener(`online`, _, !1),
              window.addEventListener(`offline`, _, !1),
              () => {
                (window.removeEventListener(`online`, _),
                  window.removeEventListener(`offline`, _));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(_) {
      ((this.#n = _), this.#t?.(), (this.#t = _(this.setOnline.bind(this))));
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
      ((_ = _), (_ = _));
    });
  ((_.status = `pending`), _.catch(() => {}));
  function _(_) {
    (Object.assign(_, _), delete _.resolve, delete _.reject);
  }
  return (
    (_.resolve = (_) => {
      (_({
        status: `fulfilled`,
        value: _,
      }),
        _(_));
    }),
    (_.reject = (_) => {
      (_({
        status: `rejected`,
        reason: _,
      }),
        _(_));
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
    (super(`CancelledError`),
      (this.revert = _?.revert),
      (this.silent = _?.silent));
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
        ((_ = (_) => {
          (_ || _()) && _(_);
        }),
          _.onPause?.());
      }).then(() => {
        ((_ = void 0), _ || _.onContinue?.());
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
      ((_ = []),
        _.length &&
          _(() => {
            _(() => {
              _.forEach((_) => {
                _(_);
              });
            });
          }));
    };
  return {
    batch: (_) => {
      let _;
      _++;
      try {
        _ = _();
      } finally {
        (_--, _ || _());
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
      (this.clearGcTimeout(),
        _(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(_) {
      this.gcTime = Math.max(this.gcTime || 0, _ ?? (_ ? 1 / 0 : 3e5));
    }
    clearGcTimeout() {
      this.#e &&= (clearTimeout(this.#e), void 0);
    }
  },
  _ = class extends _ {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    constructor(_) {
      (super(),
        (this.#a = !1),
        (this.#i = _.defaultOptions),
        this.setOptions(_.options),
        (this.observers = []),
        (this.#n = _.cache),
        (this.queryKey = _.queryKey),
        (this.queryHash = _.queryHash),
        (this.#e = _(this.options)),
        (this.state = _.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(_) {
      ((this.options = {
        ...this.#i,
        ..._,
      }),
        this.updateGcTime(this.options.gcTime));
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === `idle` &&
        this.#n.remove(this);
    }
    setData(_, _) {
      let _ = _(this.state.data, _, this.options);
      return (
        this.#o({
          data: _,
          type: `success`,
          dataUpdatedAt: _?.updatedAt,
          manual: _?.manual,
        }),
        _
      );
    }
    setState(_, _) {
      this.#o({
        type: `setState`,
        state: _,
        setStateOptions: _,
      });
    }
    cancel(_) {
      let _ = this.#r?.promise;
      return (this.#r?.cancel(_), _ ? _.then(_).catch(_) : Promise.resolve());
    }
    destroy() {
      (super.destroy(),
        this.cancel({
          silent: !0,
        }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((_) => _(_.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === _ ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated
        ? !0
        : this.getObserversCount() > 0
          ? this.observers.some((_) => _.getCurrentResult().isStale)
          : this.state.data === void 0;
    }
    isStaleByTime(_ = 0) {
      return (
        this.state.isInvalidated ||
        this.state.data === void 0 ||
        !_(this.state.dataUpdatedAt, _)
      );
    }
    onFocus() {
      (this.observers
        .find((_) => _.shouldFetchOnWindowFocus())
        ?.refetch({
          cancelRefetch: !1,
        }),
        this.#r?.continue());
    }
    onOnline() {
      (this.observers
        .find((_) => _.shouldFetchOnReconnect())
        ?.refetch({
          cancelRefetch: !1,
        }),
        this.#r?.continue());
    }
    addObserver(_) {
      this.observers.includes(_) ||
        (this.observers.push(_),
        this.clearGcTimeout(),
        this.#n.notify({
          type: `observerAdded`,
          query: this,
          observer: _,
        }));
    }
    removeObserver(_) {
      this.observers.includes(_) &&
        ((this.observers = this.observers.filter((_) => _ !== _)),
        this.observers.length ||
          (this.#r &&
            (this.#a
              ? this.#r.cancel({
                  revert: !0,
                })
              : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({
          type: `observerRemoved`,
          query: this,
          observer: _,
        }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated ||
        this.#o({
          type: `invalidate`,
        });
    }
    fetch(_, _) {
      if (this.state.fetchStatus !== `idle`) {
        if (this.state.data !== void 0 && _?.cancelRefetch)
          this.cancel({
            silent: !0,
          });
        else if (this.#r) return (this.#r.continueRetry(), this.#r.promise);
      }
      if ((_ && this.setOptions(_), !this.options.queryFn)) {
        let _ = this.observers.find((_) => _.options.queryFn);
        _ && this.setOptions(_.options);
      }
      let _ = new AbortController(),
        _ = (_) => {
          Object.defineProperty(_, "signal", {
            enumerable: !0,
            get: () => ((this.#a = !0), _.signal),
          });
        },
        _ = {
          fetchOptions: _,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: () => {
            let _ = _(this.options, _),
              _ = {
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              _(_),
              (this.#a = !1),
              this.options.persister ? this.options.persister(_, _, this) : _(_)
            );
          },
        };
      (_(_),
        this.options.behavior?.onFetch(_, this),
        (this.#t = this.state),
        (this.state.fetchStatus === `idle` ||
          this.state.fetchMeta !== _.fetchOptions?.meta) &&
          this.#o({
            type: `fetch`,
            meta: _.fetchOptions?.meta,
          }));
      let _ = (_) => {
        ((_(_) && _.silent) ||
          this.#o({
            type: `error`,
            error: _,
          }),
          _(_) ||
            (this.#n.config.onError?.(_, this),
            this.#n.config.onSettled?.(this.state.data, _, this)),
          this.scheduleGc());
      };
      return (
        (this.#r = _({
          initialPromise: _?.initialPromise,
          _: _.fetchFn,
          abort: _.abort.bind(_),
          onSuccess: (_) => {
            if (_ === void 0) _(Error(`${this.queryHash} data is undefined`));
            else {
              try {
                this.setData(_);
              } catch (_) {
                _(_);
                return;
              }
              (this.#n.config.onSuccess?.(_, this),
                this.#n.config.onSettled?.(_, this.state.error, this),
                this.scheduleGc());
            }
          },
          onError: _,
          onFail: (_, _) => {
            this.#o({
              type: `failed`,
              failureCount: _,
              error: _,
            });
          },
          onPause: () => {
            this.#o({
              type: `pause`,
            });
          },
          onContinue: () => {
            this.#o({
              type: `continue`,
            });
          },
          retry: _.options.retry,
          retryDelay: _.options.retryDelay,
          networkMode: _.options.networkMode,
          canRun: () => !0,
        })),
        this.#r.start()
      );
    }
    #o(_) {
      let _ = (_) => {
        switch (_.type) {
          case `failed`:
            return {
              ..._,
              fetchFailureCount: _.failureCount,
              fetchFailureReason: _.error,
            };
          case `pause`:
            return {
              ..._,
              fetchStatus: `paused`,
            };
          case `continue`:
            return {
              ..._,
              fetchStatus: `fetching`,
            };
          case `fetch`:
            return {
              ..._,
              ..._(_.data, this.options),
              fetchMeta: _.meta ?? null,
            };
          case `success`:
            return {
              ..._,
              data: _.data,
              dataUpdateCount: _.dataUpdateCount + 1,
              dataUpdatedAt: _.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: `success`,
              ...(!_.manual && {
                fetchStatus: `idle`,
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case `error`:
            let _ = _.error;
            return _(_) && _.revert && this.#t
              ? {
                  ...this.#t,
                  fetchStatus: `idle`,
                }
              : {
                  ..._,
                  error: _,
                  errorUpdateCount: _.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: _.fetchFailureCount + 1,
                  fetchFailureReason: _,
                  fetchStatus: `idle`,
                  status: `error`,
                };
          case `invalidate`:
            return {
              ..._,
              isInvalidated: !0,
            };
          case `setState`:
            return {
              ..._,
              ..._.state,
            };
        }
      };
      ((this.state = _(this.state)),
        _.batch(() => {
          (this.observers.forEach((_) => {
            _.onQueryUpdate();
          }),
            this.#n.notify({
              query: this,
              type: `updated`,
              action: _,
            }));
        }));
    }
  };
function _(_, _) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: _(_.networkMode) ? `fetching` : `paused`,
    ...(_ === void 0 && {
      error: null,
      status: `pending`,
    }),
  };
}
function _(_) {
  let _ = typeof _.initialData == `function` ? _.initialData() : _.initialData,
    _ = _ !== void 0,
    _ = _
      ? typeof _.initialDataUpdatedAt == `function`
        ? _.initialDataUpdatedAt()
        : _.initialDataUpdatedAt
      : 0;
  return {
    data: _,
    dataUpdateCount: 0,
    dataUpdatedAt: _ ? (_ ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: _ ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var _ = class extends _ {
  constructor(_, _) {
    (super(),
      (this.options = _),
      (this.#e = _),
      (this.#s = null),
      (this.#o = _()),
      this.options.experimental_prefetchInRender ||
        this.#o.reject(
          Error(`experimental_prefetchInRender feature flag is not enabled`),
        ),
      this.bindMethods(),
      this.setOptions(_));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      _(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return _(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return _(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(_, _) {
    let _ = this.options,
      _ = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(_)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof _(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      _._defaulted &&
        !_(this.options, _) &&
        this.#e.getQueryCache().notify({
          type: `observerOptionsUpdated`,
          query: this.#t,
          observer: this,
        }));
    let _ = this.hasListeners();
    (_ && _(this.#t, _, this.options, _) && this.#h(),
      this.updateResult(_),
      _ &&
        (this.#t !== _ ||
          _(this.options.enabled, this.#t) !== _(_.enabled, this.#t) ||
          _(this.options.staleTime, this.#t) !== _(_.staleTime, this.#t)) &&
        this.#g());
    let _ = this.#_();
    _ &&
      (this.#t !== _ ||
        _(this.options.enabled, this.#t) !== _(_.enabled, this.#t) ||
        _ !== this.#p) &&
      this.#v(_);
  }
  getOptimisticResult(_) {
    let _ = this.#e.getQueryCache().build(this.#e, _),
      _ = this.createResult(_, _);
    return (
      _(this, _) &&
        ((this.#r = _), (this.#a = this.options), (this.#i = this.#t.state)),
      _
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(_, _) {
    let _ = {};
    return (
      Object.keys(_).forEach((_) => {
        Object.defineProperty(_, _, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackProp(_), _?.(_), _[_]),
        });
      }),
      _
    );
  }
  trackProp(_) {
    this.#m.add(_);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ..._ } = {}) {
    return this.fetch({
      ..._,
    });
  }
  fetchOptimistic(_) {
    let _ = this.#e.defaultQueryOptions(_),
      _ = this.#e.getQueryCache().build(this.#e, _);
    return _.fetch().then(() => this.createResult(_, _));
  }
  fetch(_) {
    return this.#h({
      ..._,
      cancelRefetch: _.cancelRefetch ?? !0,
    }).then(() => (this.updateResult(), this.#r));
  }
  #h(_) {
    this.#S();
    let _ = this.#t.fetch(this.options, _);
    return (_?.throwOnError || (_ = _.catch(_)), _);
  }
  #g() {
    this.#b();
    let _ = _(this.options.staleTime, this.#t);
    if (_ || this.#r.isStale || !_(_)) return;
    let _ = _(this.#r.dataUpdatedAt, _) + 1;
    this.#d = setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, _);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(_) {
    (this.#x(),
      (this.#p = _),
      !_ &&
        _(this.options.enabled, this.#t) !== !1 &&
        _(this.#p) &&
        this.#p !== 0 &&
        (this.#f = setInterval(() => {
          (this.options.refetchIntervalInBackground || _.isFocused()) &&
            this.#h();
        }, this.#p)));
  }
  #y() {
    (this.#g(), this.#v(this.#_()));
  }
  #b() {
    this.#d &&= (clearTimeout(this.#d), void 0);
  }
  #x() {
    this.#f &&= (clearInterval(this.#f), void 0);
  }
  createResult(_, _) {
    let _ = this.#t,
      _ = this.options,
      _ = this.#r,
      _ = this.#i,
      _ = this.#a,
      _ = _ === _ ? this.#n : _.state,
      { state: _ } = _,
      _ = {
        ..._,
      },
      _ = !1,
      _;
    if (_._optimisticResults) {
      let _ = this.hasListeners(),
        _ = !_ && _(_, _),
        _ = _ && _(_, _, _, _);
      ((_ || _) &&
        (_ = {
          ..._,
          ..._(_.data, _.options),
        }),
        _._optimisticResults === `isRestoring` && (_.fetchStatus = `idle`));
    }
    let { error: _, errorUpdatedAt: _, status: _ } = _;
    if (_.select && _.data !== void 0) {
      if (_ && _.data === _?.data && _.select === this.#c) _ = this.#l;
      else
        try {
          ((this.#c = _.select),
            (_ = _.select(_.data)),
            (_ = _(_?.data, _, _)),
            (this.#l = _),
            (this.#s = null));
        } catch (_) {
          this.#s = _;
        }
    } else _ = _.data;
    if (_.placeholderData !== void 0 && _ === void 0 && _ === `pending`) {
      let _;
      if (_?.isPlaceholderData && _.placeholderData === _?.placeholderData)
        _ = _.data;
      else if (
        ((_ =
          typeof _.placeholderData == `function`
            ? _.placeholderData(this.#u?.state.data, this.#u)
            : _.placeholderData),
        _.select && _ !== void 0)
      )
        try {
          ((_ = _.select(_)), (this.#s = null));
        } catch (_) {
          this.#s = _;
        }
      _ !== void 0 && ((_ = `success`), (_ = _(_?.data, _, _)), (_ = !0));
    }
    this.#s && ((_ = this.#s), (_ = this.#l), (_ = Date.now()), (_ = `error`));
    let _ = _.fetchStatus === `fetching`,
      _ = _ === `pending`,
      _ = _ === `error`,
      _ = _ && _,
      _ = _ !== void 0,
      _ = {
        status: _,
        fetchStatus: _.fetchStatus,
        isPending: _,
        isSuccess: _ === `success`,
        isError: _,
        isInitialLoading: _,
        isLoading: _,
        data: _,
        dataUpdatedAt: _.dataUpdatedAt,
        error: _,
        errorUpdatedAt: _,
        failureCount: _.fetchFailureCount,
        failureReason: _.fetchFailureReason,
        errorUpdateCount: _.errorUpdateCount,
        isFetched: _.dataUpdateCount > 0 || _.errorUpdateCount > 0,
        isFetchedAfterMount:
          _.dataUpdateCount > _.dataUpdateCount ||
          _.errorUpdateCount > _.errorUpdateCount,
        isFetching: _,
        isRefetching: _ && !_,
        isLoadingError: _ && !_,
        isPaused: _.fetchStatus === `paused`,
        isPlaceholderData: _,
        isRefetchError: _ && _,
        isStale: _(_, _),
        refetch: this.refetch,
        promise: this.#o,
      };
    if (this.options.experimental_prefetchInRender) {
      let _ = (_) => {
          _.status === `error`
            ? _.reject(_.error)
            : _.data !== void 0 && _.resolve(_.data);
        },
        _ = () => {
          let _ = (this.#o = _.promise = _());
          _(_);
        },
        _ = this.#o;
      switch (_.status) {
        case `pending`:
          _.queryHash === _.queryHash && _(_);
          break;
        case `fulfilled`:
          (_.status === `error` || _.data !== _.value) && _();
          break;
        case `rejected`:
          (_.status !== `error` || _.error !== _.reason) && _();
      }
    }
    return _;
  }
  updateResult(_) {
    let _ = this.#r,
      _ = this.createResult(this.#t, this.options);
    if (
      ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      _(_, _))
    )
      return;
    this.#r = _;
    let _ = {};
    (_?.listeners !== !1 &&
      (() => {
        if (!_) return !0;
        let { notifyOnChangeProps: _ } = this.options,
          _ = typeof _ == `function` ? _() : _;
        if (_ === `all` || (!_ && !this.#m.size)) return !0;
        let _ = new Set(_ ?? this.#m);
        return (
          this.options.throwOnError && _.add(`error`),
          Object.keys(this.#r).some((_) => {
            let _ = _;
            return this.#r[_] !== _[_] && _.has(_);
          })
        );
      })() &&
      (_.listeners = !0),
      this.#C({
        ..._,
        ..._,
      }));
  }
  #S() {
    let _ = this.#e.getQueryCache().build(this.#e, this.options);
    if (_ === this.#t) return;
    let _ = this.#t;
    ((this.#t = _),
      (this.#n = _.state),
      this.hasListeners() && (_?.removeObserver(this), _.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
  #C(_) {
    _.batch(() => {
      (_.listeners &&
        this.listeners.forEach((_) => {
          _(this.#r);
        }),
        this.#e.getQueryCache().notify({
          query: this.#t,
          type: `observerResultsUpdated`,
        }));
    });
  }
};
function _(_, _) {
  return (
    _(_.enabled, _) !== !1 &&
    _.state.data === void 0 &&
    (_.state.status !== `error` || _.retryOnMount !== !1)
  );
}
function _(_, _) {
  return _(_, _) || (_.state.data !== void 0 && _(_, _, _.refetchOnMount));
}
function _(_, _, _) {
  if (_(_.enabled, _) !== !1) {
    let _ = typeof _ == `function` ? _(_) : _;
    return _ === `always` || (_ !== !1 && _(_, _));
  }
  return !1;
}
function _(_, _, _, _) {
  return (
    (_ !== _ || _(_.enabled, _) === !1) &&
    (!_.suspense || _.state.status !== `error`) &&
    _(_, _)
  );
}
function _(_, _) {
  return _(_.enabled, _) !== !1 && _.isStaleByTime(_(_.staleTime, _));
}
function _(_, _) {
  return !_(_.getCurrentResult(), _);
}
var _ = _(_(), 1),
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
  ),
  _ = _.createContext(!1),
  _ = () => _.useContext(_);
_.Provider;
function _() {
  let _ = !1;
  return {
    clearReset: () => {
      _ = !1;
    },
    reset: () => {
      _ = !0;
    },
    isReset: () => _,
  };
}
var _ = _.createContext(_()),
  _ = () => _.useContext(_);
function _(_, _) {
  return typeof _ == `function` ? _(..._) : !!_;
}
function _() {}
var _ = (_, _) => {
    (_.suspense || _.throwOnError || _.experimental_prefetchInRender) &&
      (_.isReset() || (_.retryOnMount = !1));
  },
  _ = (_) => {
    _.useEffect(() => {
      _.clearReset();
    }, [_]);
  },
  _ = ({ result: _, errorResetBoundary: _, throwOnError: _, query: _ }) =>
    _.isError && !_.isReset() && !_.isFetching && _ && _(_, [_.error, _]),
  _ = (_) => {
    _.suspense &&
      (_.staleTime === void 0 && (_.staleTime = 1e3),
      typeof _.gcTime == `number` && (_.gcTime = Math.max(_.gcTime, 1e3)));
  },
  _ = (_, _) => _.isLoading && _.isFetching && !_,
  _ = (_, _) => _?.suspense && _.isPending,
  _ = (_, _, _) =>
    _.fetchOptimistic(_).catch(() => {
      _.clearReset();
    });
function _(_, _, _) {
  let _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.defaultQueryOptions(_);
  (_.getDefaultOptions().queries?._experimental_beforeQuery?.(_),
    (_._optimisticResults = _ ? `isRestoring` : `optimistic`),
    _(_),
    _(_, _),
    _(_));
  let _ = !_.getQueryCache().get(_.queryHash),
    [_] = _.useState(() => new _(_, _)),
    _ = _.getOptimisticResult(_);
  if (
    (_.useSyncExternalStore(
      _.useCallback(
        (_) => {
          let _ = _ ? _ : _.subscribe(_.batchCalls(_));
          return (_.updateResult(), _);
        },
        [_, _],
      ),
      () => _.getCurrentResult(),
      () => _.getCurrentResult(),
    ),
    _.useEffect(() => {
      _.setOptions(_, {
        listeners: !1,
      });
    }, [_, _]),
    _(_, _))
  )
    throw _(_, _, _);
  if (
    _({
      result: _,
      errorResetBoundary: _,
      throwOnError: _.throwOnError,
      query: _.getQueryCache().get(_.queryHash),
    })
  )
    throw _.error;
  return (
    _.getDefaultOptions().queries?._experimental_afterQuery?.(_, _),
    _.experimental_prefetchInRender &&
      !_ &&
      _(_, _) &&
      (_ ? _(_, _, _) : _.getQueryCache().get(_.queryHash)?.promise)
        ?.catch(_)
        .finally(() => {
          _.updateResult();
        }),
    _.notifyOnChangeProps ? _ : _.trackResult(_)
  );
}
function _(_, _) {
  return _(_, _, _);
}
