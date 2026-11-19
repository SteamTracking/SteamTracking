/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { eo as n } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { t as r } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import {
  P as i,
  R as a,
  a as o,
  c as s,
  f as c,
  g as l,
  h as u,
  i as d,
  l as f,
  o as p,
  p as m,
  r as h,
  s as g,
  u as _,
  y as v,
} from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
function y(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function b(e) {
  if (!y(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!y(n) || !Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`));
}
function x(...e) {
  return JSON.stringify(e, (e, t) => {
    if (b(t)) {
      let e = {};
      return (
        Object.keys(t)
          .sort()
          .forEach((n) => {
            e[n] = t[n];
          }),
        e
      );
    }
    return t;
  });
}
function S(e, t) {
  return e.filter((e) => !t.includes(e));
}
function C(e, t, n) {
  let r = e.slice(0);
  return ((r[t] = n), r);
}
var w = class extends a {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e, t, n) {
      (super(),
        (this.#e = e),
        (this.#r = n),
        (this.#n = []),
        (this.#i = []),
        (this.#t = []),
        this.setQueries(t));
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        this.#i.forEach((e) => {
          e.subscribe((t) => {
            this.#d(e, t);
          });
        });
    }
    onUnsubscribe() {
      this.listeners.size || this.destroy();
    }
    destroy() {
      ((this.listeners = new Set()),
        this.#i.forEach((e) => {
          e.destroy();
        }));
    }
    setQueries(e, t, n) {
      ((this.#n = e),
        (this.#r = t),
        v.batch(() => {
          let e = this.#i,
            t = this.#u(this.#n);
          t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions, n));
          let r = t.map((e) => e.observer),
            i = r.map((e) => e.getCurrentResult()),
            a = r.some((t, n) => t !== e[n]);
          (e.length !== r.length || a) &&
            ((this.#i = r),
            (this.#t = i),
            this.hasListeners() &&
              (S(e, r).forEach((e) => {
                e.destroy();
              }),
              S(r, e).forEach((e) => {
                e.subscribe((t) => {
                  this.#d(e, t);
                });
              }),
              this.#f()));
        }));
    }
    getCurrentResult() {
      return this.#t;
    }
    getQueries() {
      return this.#i.map((e) => e.getCurrentQuery());
    }
    getObservers() {
      return this.#i;
    }
    getOptimisticResult(e, t) {
      let n = this.#u(e).map((e) =>
        e.observer.getOptimisticResult(e.defaultedQueryOptions),
      );
      return [n, (e) => this.#l(e ?? n, t), () => this.#c(n, e)];
    }
    #c(e, t) {
      let n = this.#u(t);
      return n.map((t, r) => {
        let i = e[r];
        return t.defaultedQueryOptions.notifyOnChangeProps
          ? i
          : t.observer.trackResult(i, (e) => {
              n.forEach((t) => {
                t.observer.trackProp(e);
              });
            });
      });
    }
    #l(e, t) {
      return t
        ? ((this.#a && this.#t === this.#s && t === this.#o) ||
            ((this.#o = t), (this.#s = this.#t), (this.#a = i(this.#a, t(e)))),
          this.#a)
        : e;
    }
    #u(e) {
      let t = new Map(this.#i.map((e) => [e.options.queryHash, e])),
        n = [];
      return (
        e.forEach((e) => {
          let r = this.#e.defaultQueryOptions(e),
            i = t.get(r.queryHash);
          i
            ? n.push({ defaultedQueryOptions: r, observer: i })
            : n.push({ defaultedQueryOptions: r, observer: new l(this.#e, r) });
        }),
        n
      );
    }
    #d(e, t) {
      let n = this.#i.indexOf(e);
      n !== -1 && ((this.#t = C(this.#t, n, t)), this.#f());
    }
    #f() {
      this.hasListeners() &&
        this.#a !== this.#l(this.#c(this.#t, this.#n), this.#r?.combine) &&
        v.batch(() => {
          this.listeners.forEach((e) => {
            e(this.#t);
          });
        });
    }
  },
  T = e(n(), 1);
function E({ queries: e, ...t }, n) {
  let r = u(n),
    i = m(),
    a = c(),
    y = T.useMemo(
      () =>
        e.map((e) => {
          let t = r.defaultQueryOptions(e);
          return ((t._optimisticResults = i ? `isRestoring` : `optimistic`), t);
        }),
      [e, r, i],
    );
  (y.forEach((e) => {
    (h(e), g(e, a));
  }),
    f(a));
  let [b] = T.useState(() => new w(r, y, t)),
    [x, S, C] = b.getOptimisticResult(y, t.combine);
  (T.useSyncExternalStore(
    T.useCallback((e) => (i ? _ : b.subscribe(v.batchCalls(e))), [b, i]),
    () => b.getCurrentResult(),
    () => b.getCurrentResult(),
  ),
    T.useEffect(() => {
      b.setQueries(y, t, { listeners: !1 });
    }, [y, t, b]));
  let E = x.some((e, t) => o(y[t], e))
    ? x.flatMap((e, t) => {
        let n = y[t];
        if (n) {
          let t = new l(r, n);
          if (o(n, e)) return d(n, t, a);
          p(e, i) && d(n, t, a);
        }
        return [];
      })
    : [];
  if (E.length > 0) throw Promise.all(E);
  let D = x.find((e, t) => {
    let n = y[t];
    return (
      n &&
      s({
        result: e,
        errorResetBoundary: a,
        throwOnError: n.throwOnError,
        query: r.getQueryCache().get(n.queryHash),
      })
    );
  });
  if (D?.error) throw D.error;
  return S(C());
}
var D = t((e) => {
    var t = n();
    (t.useSyncExternalStore, t.useRef, t.useEffect, t.useMemo, t.useDebugValue);
  }),
  O = t((e, t) => {
    t.exports = D();
  });
r();
var k = (0, T.createContext)({ instances: {}, factories: {} });
function A(e, t) {
  let n = (0, T.useContext)(k),
    r = typeof e == `string` ? e : x(...e),
    i = n;
  for (; i;) {
    if (r in i.instances) return i.instances[r];
    if (r in i.factories) break;
    i = i.parent;
  }
  let a = (i?.factories[r] ?? t)();
  return (((i ?? n).instances[r] = a), a);
}
export { O as n, E as r, A as t };
