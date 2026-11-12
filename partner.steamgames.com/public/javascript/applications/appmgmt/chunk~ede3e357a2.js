/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { At as e, sn as t, vt as n } from "./chunk~de7f2df91c.js";
import {
  A as r,
  C as i,
  D as a,
  M as o,
  O as s,
  T as c,
  a as l,
  b as u,
  c as d,
  f,
  h as p,
  i as m,
  j as h,
  k as g,
  l as _,
  n as v,
  o as y,
  s as b,
  t as x,
  u as S,
  y as C,
} from "./chunk~8fb30ea08b.js";
var w = class extends l {
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
      (this.#e = E(this.options)),
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
    let n = c(this.state.data, e, this.options);
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
    return (this.#r?.cancel(e), t ? t.then(i).catch(i) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  reset() {
    (this.destroy(), this.setState(this.#e));
  }
  isActive() {
    return this.observers.some((e) => a(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === r ||
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
      !h(this.state.dataUpdatedAt, e)
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
          let e = p(this.options, t),
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
      ((_(e) && e.silent) || this.#o({ type: `error`, error: e }),
        _(e) ||
          (this.#n.config.onError?.(e, this),
          this.#n.config.onSettled?.(this.state.data, e, this)),
        this.scheduleGc());
    };
    return (
      (this.#r = d({
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
            ...T(t.data, this.options),
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
          return _(n) && n.revert && this.#t
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
      y.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#n.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function T(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: b(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function E(e) {
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
var D = class extends o {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#s = null),
      (this.#o = S()),
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
      k(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return A(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return A(this.#t, this.options, this.options.refetchOnWindowFocus);
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
        typeof a(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      n._defaulted &&
        !g(this.options, n) &&
        this.#e
          .getQueryCache()
          .notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this,
          }));
    let i = this.hasListeners();
    (i && j(this.#t, r, this.options, n) && this.#h(),
      this.updateResult(t),
      i &&
        (this.#t !== r ||
          a(this.options.enabled, this.#t) !== a(n.enabled, this.#t) ||
          s(this.options.staleTime, this.#t) !== s(n.staleTime, this.#t)) &&
        this.#g());
    let o = this.#_();
    i &&
      (this.#t !== r ||
        a(this.options.enabled, this.#t) !== a(n.enabled, this.#t) ||
        o !== this.#p) &&
      this.#v(o);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      N(this, n) &&
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
    return (e?.throwOnError || (t = t.catch(i)), t);
  }
  #g() {
    this.#b();
    let e = s(this.options.staleTime, this.#t);
    if (C || this.#r.isStale || !u(e)) return;
    let t = h(this.#r.dataUpdatedAt, e) + 1;
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
      !C &&
        a(this.options.enabled, this.#t) !== !1 &&
        u(this.#p) &&
        this.#p !== 0 &&
        (this.#f = setInterval(() => {
          (this.options.refetchIntervalInBackground || f.isFocused()) &&
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
      { state: l } = e,
      u = { ...l },
      d = !1,
      f;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        a = !i && k(e, t),
        o = i && j(e, n, t, r);
      ((a || o) && (u = { ...u, ...T(l.data, e.options) }),
        t._optimisticResults === `isRestoring` && (u.fetchStatus = `idle`));
    }
    let { error: p, errorUpdatedAt: m, status: h } = u;
    if (t.select && u.data !== void 0) {
      if (i && u.data === a?.data && t.select === this.#c) f = this.#l;
      else
        try {
          ((this.#c = t.select),
            (f = t.select(u.data)),
            (f = c(i?.data, f, t)),
            (this.#l = f),
            (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
    } else f = u.data;
    if (t.placeholderData !== void 0 && f === void 0 && h === `pending`) {
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
      e !== void 0 && ((h = `success`), (f = c(i?.data, e, t)), (d = !0));
    }
    this.#s && ((p = this.#s), (f = this.#l), (m = Date.now()), (h = `error`));
    let g = u.fetchStatus === `fetching`,
      _ = h === `pending`,
      v = h === `error`,
      y = _ && g,
      b = f !== void 0,
      x = {
        status: h,
        fetchStatus: u.fetchStatus,
        isPending: _,
        isSuccess: h === `success`,
        isError: v,
        isInitialLoading: y,
        isLoading: y,
        data: f,
        dataUpdatedAt: u.dataUpdatedAt,
        error: p,
        errorUpdatedAt: m,
        failureCount: u.fetchFailureCount,
        failureReason: u.fetchFailureReason,
        errorUpdateCount: u.errorUpdateCount,
        isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
        isFetchedAfterMount:
          u.dataUpdateCount > s.dataUpdateCount ||
          u.errorUpdateCount > s.errorUpdateCount,
        isFetching: g,
        isRefetching: g && !_,
        isLoadingError: v && !b,
        isPaused: u.fetchStatus === `paused`,
        isPlaceholderData: d,
        isRefetchError: v && b,
        isStale: M(e, t),
        refetch: this.refetch,
        promise: this.#o,
      };
    if (this.options.experimental_prefetchInRender) {
      let t = (e) => {
          x.status === `error`
            ? e.reject(x.error)
            : x.data !== void 0 && e.resolve(x.data);
        },
        r = () => {
          let e = (this.#o = x.promise = S());
          t(e);
        },
        i = this.#o;
      switch (i.status) {
        case `pending`:
          e.queryHash === n.queryHash && t(i);
          break;
        case `fulfilled`:
          (x.status === `error` || x.data !== i.value) && r();
          break;
        case `rejected`:
          (x.status !== `error` || x.error !== i.reason) && r();
      }
    }
    return x;
  }
  updateResult(e) {
    let t = this.#r,
      n = this.createResult(this.#t, this.options);
    if (
      ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      g(n, t))
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
    y.batch(() => {
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
function O(e, t) {
  return (
    a(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    (e.state.status !== `error` || t.retryOnMount !== !1)
  );
}
function k(e, t) {
  return O(e, t) || (e.state.data !== void 0 && A(e, t, t.refetchOnMount));
}
function A(e, t, n) {
  if (a(t.enabled, e) !== !1) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (r !== !1 && M(e, t));
  }
  return !1;
}
function j(e, t, n, r) {
  return (
    (e !== t || a(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    M(e, n)
  );
}
function M(e, t) {
  return a(t.enabled, e) !== !1 && e.isStaleByTime(s(t.staleTime, e));
}
function N(e, t) {
  return !g(e.getCurrentResult(), t);
}
n();
var P = t(e(), 1),
  F = P.createContext(!1),
  I = () => P.useContext(F);
F.Provider;
function L() {
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
var R = P.createContext(L()),
  z = () => P.useContext(R),
  B = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  V = (e) => {
    P.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  H = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && v(n, [e.error, r]),
  U = (e) => {
    e.suspense &&
      (e.staleTime === void 0 && (e.staleTime = 1e3),
      typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, 1e3)));
  },
  W = (e, t) => e.isLoading && e.isFetching && !t,
  G = (e, t) => e?.suspense && t.isPending,
  K = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function q(e, t, n) {
  let r = m(n),
    i = I(),
    a = z(),
    o = r.defaultQueryOptions(e);
  (r.getDefaultOptions().queries?._experimental_beforeQuery?.(o),
    (o._optimisticResults = i ? `isRestoring` : `optimistic`),
    U(o),
    B(o, a),
    V(a));
  let s = !r.getQueryCache().get(o.queryHash),
    [c] = P.useState(() => new t(r, o)),
    l = c.getOptimisticResult(o);
  if (
    (P.useSyncExternalStore(
      P.useCallback(
        (e) => {
          let t = i ? x : c.subscribe(y.batchCalls(e));
          return (c.updateResult(), t);
        },
        [c, i],
      ),
      () => c.getCurrentResult(),
      () => c.getCurrentResult(),
    ),
    P.useEffect(() => {
      c.setOptions(o, { listeners: !1 });
    }, [o, c]),
    G(o, l))
  )
    throw K(o, c, a);
  if (
    H({
      result: l,
      errorResetBoundary: a,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash),
    })
  )
    throw l.error;
  return (
    r.getDefaultOptions().queries?._experimental_afterQuery?.(o, l),
    o.experimental_prefetchInRender &&
      !C &&
      W(l, i) &&
      (s ? K(o, c, a) : r.getQueryCache().get(o.queryHash)?.promise)
        ?.catch(x)
        .finally(() => {
          c.updateResult();
        }),
    o.notifyOnChangeProps ? l : c.trackResult(l)
  );
}
function J(e, t) {
  return q(e, D, t);
}
export {
  W as a,
  V as c,
  D as d,
  w as f,
  G as i,
  z as l,
  U as n,
  B as o,
  K as r,
  H as s,
  J as t,
  I as u,
};
