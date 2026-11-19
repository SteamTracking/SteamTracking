/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { eo as t } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { t as n } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
var r = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  i = typeof window > `u` || `Deno` in globalThis;
function a() {}
function o(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function s(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function c(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function l(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function u(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function d(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== p(o, t.options)) return !1;
    } else if (!h(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function f(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (m(t.options.mutationKey) !== m(a)) return !1;
    } else if (!h(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function p(e, t) {
  return (t?.queryKeyHashFn || m)(e);
}
function m(e) {
  return JSON.stringify(e, (e, t) =>
    y(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function h(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t &&
        e &&
        t &&
        typeof e == `object` &&
        typeof t == `object`
      ? !Object.keys(t).some((n) => !h(e[n], t[n]))
      : !1;
}
function g(e, t) {
  if (e === t) return e;
  let n = v(e) && v(t);
  if (n || (y(e) && y(t))) {
    let r = n ? e : Object.keys(e),
      i = r.length,
      a = n ? t : Object.keys(t),
      o = a.length,
      s = n ? [] : {},
      c = 0;
    for (let i = 0; i < o; i++) {
      let o = n ? i : a[i];
      ((!n && r.includes(o)) || n) && e[o] === void 0 && t[o] === void 0
        ? ((s[o] = void 0), c++)
        : ((s[o] = g(e[o], t[o])), s[o] === e[o] && e[o] !== void 0 && c++);
    }
    return i === o && c === i ? e : s;
  }
  return t;
}
function _(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function v(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function y(e) {
  if (!b(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !b(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function b(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ee(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function x(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : g(e, t);
}
function te(e) {
  return e;
}
function ne(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function re(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var S = Symbol();
function C(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === S
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var w = new (class extends r {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (!i && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
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
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  T = new (class extends r {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (!i && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
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
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function E() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
function ie(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function D(e) {
  return (e ?? `online`) !== `online` || T.isOnline();
}
var O = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function k(e) {
  return e instanceof O;
}
function A(e) {
  let t = !1,
    n = 0,
    r = !1,
    a,
    o = E(),
    s = (t) => {
      r || (p(new O(t)), e.abort?.());
    },
    c = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      w.isFocused() &&
      (e.networkMode === `always` || T.isOnline()) &&
      e.canRun(),
    d = () => D(e.networkMode) && e.canRun(),
    f = (t) => {
      r || ((r = !0), e.onSuccess?.(t), a?.(), o.resolve(t));
    },
    p = (t) => {
      r || ((r = !0), e.onError?.(t), a?.(), o.reject(t));
    },
    m = () =>
      new Promise((t) => {
        ((a = (e) => {
          (r || u()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((a = void 0), r || e.onContinue?.());
      }),
    h = () => {
      if (r) return;
      let a,
        o = n === 0 ? e.initialPromise : void 0;
      try {
        a = o ?? e.fn();
      } catch (e) {
        a = Promise.reject(e);
      }
      Promise.resolve(a)
        .then(f)
        .catch((a) => {
          if (r) return;
          let o = e.retry ?? (i ? 0 : 3),
            s = e.retryDelay ?? ie,
            c = typeof s == `function` ? s(n, a) : s,
            l =
              o === !0 ||
              (typeof o == `number` && n < o) ||
              (typeof o == `function` && o(n, a));
          t || !l
            ? p(a)
            : (n++,
              e.onFail?.(n, a),
              ee(c)
                .then(() => (u() ? void 0 : m()))
                .then(() => {
                  t ? p(a) : h();
                }));
        });
    };
  return {
    promise: o,
    cancel: s,
    continue: () => (a?.(), o),
    cancelRetry: c,
    continueRetry: l,
    canStart: d,
    start: () => (d() ? h() : m().then(h), o),
  };
}
function ae() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = (e) => setTimeout(e, 0),
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var j = ae(),
  M = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        s(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (i ? 1 / 0 : 3e5));
    }
    clearGcTimeout() {
      this.#e &&= (clearTimeout(this.#e), void 0);
    }
  },
  oe = class extends M {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    constructor(e) {
      (super(),
        (this.#a = !1),
        (this.#i = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#n = e.cache),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#e = se(this.options)),
        (this.state = e.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(e) {
      ((this.options = { ...this.#i, ...e }),
        this.updateGcTime(this.options.gcTime));
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === `idle` &&
        this.#n.remove(this);
    }
    setData(e, t) {
      let n = x(this.state.data, e, this.options);
      return (
        this.#o({
          data: n,
          type: `success`,
          dataUpdatedAt: t?.updatedAt,
          manual: t?.manual,
        }),
        n
      );
    }
    setState(e, t) {
      this.#o({ type: `setState`, state: e, setStateOptions: t });
    }
    cancel(e) {
      let t = this.#r?.promise;
      return (this.#r?.cancel(e), t ? t.then(a).catch(a) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((e) => u(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === S ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated
        ? !0
        : this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : this.state.data === void 0;
    }
    isStaleByTime(e = 0) {
      return (
        this.state.isInvalidated ||
        this.state.data === void 0 ||
        !c(this.state.dataUpdatedAt, e)
      );
    }
    onFocus() {
      (this.observers
        .find((e) => e.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue());
    }
    onOnline() {
      (this.observers
        .find((e) => e.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue());
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({ type: `observerAdded`, query: this, observer: e }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((t) => t !== e)),
        this.observers.length ||
          (this.#r &&
            (this.#a ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: `observerRemoved`, query: this, observer: e }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#o({ type: `invalidate` });
    }
    fetch(e, t) {
      if (this.state.fetchStatus !== `idle`) {
        if (this.state.data !== void 0 && t?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#r) return (this.#r.continueRetry(), this.#r.promise);
      }
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        let e = this.observers.find((e) => e.options.queryFn);
        e && this.setOptions(e.options);
      }
      let n = new AbortController(),
        r = (e) => {
          Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => ((this.#a = !0), n.signal),
          });
        },
        i = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          state: this.state,
          fetchFn: () => {
            let e = C(this.options, t),
              n = { queryKey: this.queryKey, meta: this.meta };
            return (
              r(n),
              (this.#a = !1),
              this.options.persister ? this.options.persister(e, n, this) : e(n)
            );
          },
        };
      (r(i),
        this.options.behavior?.onFetch(i, this),
        (this.#t = this.state),
        (this.state.fetchStatus === `idle` ||
          this.state.fetchMeta !== i.fetchOptions?.meta) &&
          this.#o({ type: `fetch`, meta: i.fetchOptions?.meta }));
      let a = (e) => {
        ((k(e) && e.silent) || this.#o({ type: `error`, error: e }),
          k(e) ||
            (this.#n.config.onError?.(e, this),
            this.#n.config.onSettled?.(this.state.data, e, this)),
          this.scheduleGc());
      };
      return (
        (this.#r = A({
          initialPromise: t?.initialPromise,
          fn: i.fetchFn,
          abort: n.abort.bind(n),
          onSuccess: (e) => {
            if (e === void 0) a(Error(`${this.queryHash} data is undefined`));
            else {
              try {
                this.setData(e);
              } catch (e) {
                a(e);
                return;
              }
              (this.#n.config.onSuccess?.(e, this),
                this.#n.config.onSettled?.(e, this.state.error, this),
                this.scheduleGc());
            }
          },
          onError: a,
          onFail: (e, t) => {
            this.#o({ type: `failed`, failureCount: e, error: t });
          },
          onPause: () => {
            this.#o({ type: `pause` });
          },
          onContinue: () => {
            this.#o({ type: `continue` });
          },
          retry: i.options.retry,
          retryDelay: i.options.retryDelay,
          networkMode: i.options.networkMode,
          canRun: () => !0,
        })),
        this.#r.start()
      );
    }
    #o(e) {
      let t = (t) => {
        switch (e.type) {
          case `failed`:
            return {
              ...t,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case `pause`:
            return { ...t, fetchStatus: `paused` };
          case `continue`:
            return { ...t, fetchStatus: `fetching` };
          case `fetch`:
            return {
              ...t,
              ...N(t.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case `success`:
            return {
              ...t,
              data: e.data,
              dataUpdateCount: t.dataUpdateCount + 1,
              dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: `success`,
              ...(!e.manual && {
                fetchStatus: `idle`,
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case `error`:
            let n = e.error;
            return k(n) && n.revert && this.#t
              ? { ...this.#t, fetchStatus: `idle` }
              : {
                  ...t,
                  error: n,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchFailureReason: n,
                  fetchStatus: `idle`,
                  status: `error`,
                };
          case `invalidate`:
            return { ...t, isInvalidated: !0 };
          case `setState`:
            return { ...t, ...e.state };
        }
      };
      ((this.state = t(this.state)),
        j.batch(() => {
          (this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: `updated`, action: e }));
        }));
    }
  };
function N(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: D(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function se(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var P = class extends r {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#s = null),
      (this.#o = E()),
      this.options.experimental_prefetchInRender ||
        this.#o.reject(
          Error(`experimental_prefetchInRender feature flag is not enabled`),
        ),
      this.bindMethods(),
      this.setOptions(t));
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
      F(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return I(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return I(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(e, t) {
    let n = this.options,
      r = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof u(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      n._defaulted &&
        !_(this.options, n) &&
        this.#e
          .getQueryCache()
          .notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this,
          }));
    let i = this.hasListeners();
    (i && L(this.#t, r, this.options, n) && this.#h(),
      this.updateResult(t),
      i &&
        (this.#t !== r ||
          u(this.options.enabled, this.#t) !== u(n.enabled, this.#t) ||
          l(this.options.staleTime, this.#t) !== l(n.staleTime, this.#t)) &&
        this.#g());
    let a = this.#_();
    i &&
      (this.#t !== r ||
        u(this.options.enabled, this.#t) !== u(n.enabled, this.#t) ||
        a !== this.#p) &&
      this.#v(a);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      le(this, n) &&
        ((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
      n
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    let n = {};
    return (
      Object.keys(e).forEach((r) => {
        Object.defineProperty(n, r, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackProp(r), t?.(r), e[r]),
        });
      }),
      n
    );
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      n = this.#e.getQueryCache().build(this.#e, t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #h(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(a)), t);
  }
  #g() {
    this.#b();
    let e = l(this.options.staleTime, this.#t);
    if (i || this.#r.isStale || !s(e)) return;
    let t = c(this.#r.dataUpdatedAt, e) + 1;
    this.#d = setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(e) {
    (this.#x(),
      (this.#p = e),
      !i &&
        u(this.options.enabled, this.#t) !== !1 &&
        s(this.#p) &&
        this.#p !== 0 &&
        (this.#f = setInterval(() => {
          (this.options.refetchIntervalInBackground || w.isFocused()) &&
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
  createResult(e, t) {
    let n = this.#t,
      r = this.options,
      i = this.#r,
      a = this.#i,
      o = this.#a,
      s = e === n ? this.#n : e.state,
      { state: c } = e,
      l = { ...c },
      u = !1,
      d;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        a = !i && F(e, t),
        o = i && L(e, n, t, r);
      ((a || o) && (l = { ...l, ...N(c.data, e.options) }),
        t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`));
    }
    let { error: f, errorUpdatedAt: p, status: m } = l;
    if (t.select && l.data !== void 0) {
      if (i && l.data === a?.data && t.select === this.#c) d = this.#l;
      else
        try {
          ((this.#c = t.select),
            (d = t.select(l.data)),
            (d = x(i?.data, d, t)),
            (this.#l = d),
            (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
    } else d = l.data;
    if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
      let e;
      if (i?.isPlaceholderData && t.placeholderData === o?.placeholderData)
        e = i.data;
      else if (
        ((e =
          typeof t.placeholderData == `function`
            ? t.placeholderData(this.#u?.state.data, this.#u)
            : t.placeholderData),
        t.select && e !== void 0)
      )
        try {
          ((e = t.select(e)), (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
      e !== void 0 && ((m = `success`), (d = x(i?.data, e, t)), (u = !0));
    }
    this.#s && ((f = this.#s), (d = this.#l), (p = Date.now()), (m = `error`));
    let h = l.fetchStatus === `fetching`,
      g = m === `pending`,
      _ = m === `error`,
      v = g && h,
      y = d !== void 0,
      b = {
        status: m,
        fetchStatus: l.fetchStatus,
        isPending: g,
        isSuccess: m === `success`,
        isError: _,
        isInitialLoading: v,
        isLoading: v,
        data: d,
        dataUpdatedAt: l.dataUpdatedAt,
        error: f,
        errorUpdatedAt: p,
        failureCount: l.fetchFailureCount,
        failureReason: l.fetchFailureReason,
        errorUpdateCount: l.errorUpdateCount,
        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
        isFetchedAfterMount:
          l.dataUpdateCount > s.dataUpdateCount ||
          l.errorUpdateCount > s.errorUpdateCount,
        isFetching: h,
        isRefetching: h && !g,
        isLoadingError: _ && !y,
        isPaused: l.fetchStatus === `paused`,
        isPlaceholderData: u,
        isRefetchError: _ && y,
        isStale: R(e, t),
        refetch: this.refetch,
        promise: this.#o,
      };
    if (this.options.experimental_prefetchInRender) {
      let t = (e) => {
          b.status === `error`
            ? e.reject(b.error)
            : b.data !== void 0 && e.resolve(b.data);
        },
        r = () => {
          let e = (this.#o = b.promise = E());
          t(e);
        },
        i = this.#o;
      switch (i.status) {
        case `pending`:
          e.queryHash === n.queryHash && t(i);
          break;
        case `fulfilled`:
          (b.status === `error` || b.data !== i.value) && r();
          break;
        case `rejected`:
          (b.status !== `error` || b.error !== i.reason) && r();
      }
    }
    return b;
  }
  updateResult(e) {
    let t = this.#r,
      n = this.createResult(this.#t, this.options);
    if (
      ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      _(n, t))
    )
      return;
    this.#r = n;
    let r = {};
    (e?.listeners !== !1 &&
      (() => {
        if (!t) return !0;
        let { notifyOnChangeProps: e } = this.options,
          n = typeof e == `function` ? e() : e;
        if (n === `all` || (!n && !this.#m.size)) return !0;
        let r = new Set(n ?? this.#m);
        return (
          this.options.throwOnError && r.add(`error`),
          Object.keys(this.#r).some((e) => {
            let n = e;
            return this.#r[n] !== t[n] && r.has(n);
          })
        );
      })() &&
      (r.listeners = !0),
      this.#C({ ...r, ...e }));
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
  #C(e) {
    j.batch(() => {
      (e.listeners &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: `observerResultsUpdated` }));
    });
  }
};
function ce(e, t) {
  return (
    u(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    (e.state.status !== `error` || t.retryOnMount !== !1)
  );
}
function F(e, t) {
  return ce(e, t) || (e.state.data !== void 0 && I(e, t, t.refetchOnMount));
}
function I(e, t, n) {
  if (u(t.enabled, e) !== !1) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (r !== !1 && R(e, t));
  }
  return !1;
}
function L(e, t, n, r) {
  return (
    (e !== t || u(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    R(e, n)
  );
}
function R(e, t) {
  return u(t.enabled, e) !== !1 && e.isStaleByTime(l(t.staleTime, e));
}
function le(e, t) {
  return !_(e.getCurrentResult(), t);
}
var z = e(t(), 1),
  ue = n(),
  B = z.createContext(void 0),
  V = (e) => {
    let t = z.useContext(B);
    if (e) return e;
    if (!t)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  de = ({ client: e, children: t }) => (
    z.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, ue.jsx)(B.Provider, { value: e, children: t })
  ),
  H = z.createContext(!1),
  U = () => z.useContext(H);
H.Provider;
function fe() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var pe = z.createContext(fe()),
  W = () => z.useContext(pe);
function G(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function K() {}
var q = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  J = (e) => {
    z.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  Y = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && G(n, [e.error, r]),
  X = (e) => {
    e.suspense &&
      (e.staleTime === void 0 && (e.staleTime = 1e3),
      typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  Z = (e, t) => e.isLoading && e.isFetching && !t,
  Q = (e, t) => e?.suspense && t.isPending,
  $ = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function me(e, t, n) {
  let r = V(n),
    a = U(),
    o = W(),
    s = r.defaultQueryOptions(e);
  (r.getDefaultOptions().queries?._experimental_beforeQuery?.(s),
    (s._optimisticResults = a ? `isRestoring` : `optimistic`),
    X(s),
    q(s, o),
    J(o));
  let c = !r.getQueryCache().get(s.queryHash),
    [l] = z.useState(() => new t(r, s)),
    u = l.getOptimisticResult(s);
  if (
    (z.useSyncExternalStore(
      z.useCallback(
        (e) => {
          let t = a ? K : l.subscribe(j.batchCalls(e));
          return (l.updateResult(), t);
        },
        [l, a],
      ),
      () => l.getCurrentResult(),
      () => l.getCurrentResult(),
    ),
    z.useEffect(() => {
      l.setOptions(s, { listeners: !1 });
    }, [s, l]),
    Q(s, u))
  )
    throw $(s, l, o);
  if (
    Y({
      result: u,
      errorResetBoundary: o,
      throwOnError: s.throwOnError,
      query: r.getQueryCache().get(s.queryHash),
    })
  )
    throw u.error;
  return (
    r.getDefaultOptions().queries?._experimental_afterQuery?.(s, u),
    s.experimental_prefetchInRender &&
      !i &&
      Z(u, a) &&
      (c ? $(s, l, o) : r.getQueryCache().get(s.queryHash)?.promise)
        ?.catch(K)
        .finally(() => {
          l.updateResult();
        }),
    s.notifyOnChangeProps ? u : l.trackResult(u)
  );
}
function he(e, t) {
  return me(e, P, t);
}
export {
  f as A,
  ne as C,
  m as D,
  o as E,
  l as F,
  _ as I,
  S as L,
  a as M,
  h as N,
  p as O,
  g as P,
  r as R,
  w as S,
  C as T,
  oe as _,
  Q as a,
  A as b,
  Y as c,
  G as d,
  W as f,
  P as g,
  V as h,
  $ as i,
  d as j,
  te as k,
  J as l,
  de as m,
  me as n,
  Z as o,
  U as p,
  X as r,
  q as s,
  he as t,
  K as u,
  M as v,
  re as w,
  T as x,
  j as y,
};
