/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { kt as e, on as t } from "./mobx.esm.js";
import {
  A as n,
  C as r,
  M as i,
  O as a,
  S as o,
  _ as s,
  d as c,
  f as l,
  g as u,
  h as d,
  m as f,
  o as p,
  p as m,
  r as h,
  v as g,
  w as _,
  x as v,
} from "./utils.js";
import { f as y } from "./useQuery.js";
import { t as b } from "./mutation.js";
var x = class extends i {
    constructor(e = {}) {
      super(), (this.config = e), (this.#e = new Map());
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? g(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new y({
            cache: this,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      p.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => o(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => o(e, t)) : t;
    }
    notify(e) {
      p.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      p.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      p.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  S = class extends i {
    constructor(e = {}) {
      super(), (this.config = e), (this.#e = new Map()), (this.#t = Date.now());
    }
    #e;
    #t;
    build(e, t, n) {
      let r = new b({
        mutationCache: this,
        mutationId: ++this.#t,
        options: e.defaultMutationOptions(t),
        state: n,
      });
      return this.add(r), r;
    }
    add(e) {
      let t = C(e),
        n = this.#e.get(t) ?? [];
      n.push(e), this.#e.set(t, n), this.notify({ type: `added`, mutation: e });
    }
    remove(e) {
      let t = C(e);
      if (this.#e.has(t)) {
        let n = this.#e.get(t)?.filter((t) => t !== e);
        n && (n.length === 0 ? this.#e.delete(t) : this.#e.set(t, n));
      }
      this.notify({ type: `removed`, mutation: e });
    }
    canRun(e) {
      let t = this.#e.get(C(e))?.find((e) => e.state.status === `pending`);
      return !t || t === e;
    }
    runNext(e) {
      return (
        this.#e
          .get(C(e))
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve()
      );
    }
    clear() {
      p.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    getAll() {
      return [...this.#e.values()].flat();
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => v(t, e));
    }
    findAll(e = {}) {
      return this.getAll().filter((t) => v(e, t));
    }
    notify(e) {
      p.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    resumePausedMutations() {
      let e = this.getAll().filter((e) => e.state.isPaused);
      return p.batch(() => Promise.all(e.map((e) => e.continue().catch(r))));
    }
  };
function C(e) {
  return e.options.scope?.id ?? String(e.mutationId);
}
function w(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Object.defineProperty(e, "signal", {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (n = !0)
                    : t.signal.addEventListener(`abort`, () => {
                        n = !0;
                      }),
                  t.signal
                ),
              });
            },
            u = d(t.options, t.fetchOptions),
            p = async (e, r, i) => {
              if (n) return Promise.reject();
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = {
                queryKey: t.queryKey,
                pageParam: r,
                direction: i ? `backward` : `forward`,
                meta: t.options.meta,
              };
              l(a);
              let o = await u(a),
                { maxPages: s } = t.options,
                c = i ? f : m;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? E : T,
              n = { pages: a, pageParams: o };
            s = await p(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : T(r, s);
              if (c > 0 && e == null) break;
              (s = await p(s, e)), c++;
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              n,
            )
        : l;
    },
  };
}
function T(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function E(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var D = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      (this.#e = e.queryCache || new x()),
        (this.#t = e.mutationCache || new S()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0);
    }
    mount() {
      this.#a++,
        this.#a === 1 &&
          ((this.#o = l.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = c.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.getQueryData(e.queryKey);
      if (t === void 0) return this.fetchQuery(e);
      {
        let n = this.defaultQueryOptions(e),
          r = this.#e.build(this, n);
        return (
          e.revalidateIfStale &&
            r.isStaleByTime(a(n.staleTime, r)) &&
            this.prefetchQuery(n),
          Promise.resolve(t)
        );
      }
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = u(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return p.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      p.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e,
        r = { type: `active`, ...e };
      return p.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries(r, t)
        ),
      );
    }
    cancelQueries(e = {}, t = {}) {
      let n = { revert: !0, ...t },
        i = p.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(i).then(r).catch(r);
    }
    invalidateQueries(e = {}, t = {}) {
      return p.batch(() => {
        if (
          (this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e.refetchType === `none`)
        )
          return Promise.resolve();
        let n = { ...e, type: e.refetchType ?? e.type ?? `active` };
        return this.refetchQueries(n, t);
      });
    }
    refetchQueries(e = {}, t) {
      let n = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 },
        i = p.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(r)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(i).then(r);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(a(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(r).catch(r);
    }
    fetchInfiniteQuery(e) {
      return (e.behavior = w(e.pages)), this.fetchQuery(e);
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(r).catch(r);
    }
    ensureInfiniteQueryData(e) {
      return (e.behavior = w(e.pages)), this.ensureQueryData(e);
    }
    resumePausedMutations() {
      return c.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(s(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          _(e, t.queryKey) && (n = { ...n, ...t.defaultOptions });
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(s(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          _(e, t.mutationKey) && (n = { ...n, ...t.defaultOptions });
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= g(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.enabled !== !0 && t.queryFn === n && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  O = t(e(), 1),
  k = function () {
    return null;
  };
function A(e) {
  let { queryClient: t = M, steamUI: n } = e;
  O.useEffect(() => {
    t == M &&
      t.setDefaultOptions({
        ...j,
        queries: { ...j.queries, networkMode: n ? `offlineFirst` : void 0 },
        mutations: { ...j.mutations, networkMode: n ? `offlineFirst` : void 0 },
      });
  }, [t, n]);
  let r = e.children;
  return (
    e.debug &&
      (r = [
        ...O.Children.toArray(r),
        O.createElement(k, { key: `ReactQueryDevtools` }),
      ]),
    O.createElement(h, { client: t }, r)
  );
}
var j = { queries: { staleTime: 1 / 0 } },
  M = new D({ defaultOptions: j });
export { A as n, M as t };
