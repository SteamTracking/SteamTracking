/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { At as e, sn as t, vt as n } from "./chunk~de7f2df91c.js";
import { E as r, M as i, i as a, o, t as s } from "./chunk~8fb30ea08b.js";
import {
  a as c,
  c as l,
  d as u,
  i as d,
  l as f,
  n as p,
  o as m,
  r as h,
  s as g,
  u as _,
} from "./chunk~ede3e357a2.js";
function v(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function y(e) {
  if (!v(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!v(n) || !Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`));
}
function b(...e) {
  return JSON.stringify(e, (e, t) => {
    if (y(t)) {
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
function x(e, t) {
  return e.filter((e) => !t.includes(e));
}
function S(e, t, n) {
  let r = e.slice(0);
  return ((r[t] = n), r);
}
var C = class extends i {
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
        o.batch(() => {
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
              (x(e, r).forEach((e) => {
                e.destroy();
              }),
              x(r, e).forEach((e) => {
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
            ((this.#o = t), (this.#s = this.#t), (this.#a = r(this.#a, t(e)))),
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
            : n.push({ defaultedQueryOptions: r, observer: new u(this.#e, r) });
        }),
        n
      );
    }
    #d(e, t) {
      let n = this.#i.indexOf(e);
      n !== -1 && ((this.#t = S(this.#t, n, t)), this.#f());
    }
    #f() {
      this.hasListeners() &&
        this.#a !== this.#l(this.#c(this.#t, this.#n), this.#r?.combine) &&
        o.batch(() => {
          this.listeners.forEach((e) => {
            e(this.#t);
          });
        });
    }
  },
  w = t(e(), 1);
function T({ queries: e, ...t }, n) {
  let r = a(n),
    i = _(),
    v = f(),
    y = w.useMemo(
      () =>
        e.map((e) => {
          let t = r.defaultQueryOptions(e);
          return ((t._optimisticResults = i ? `isRestoring` : `optimistic`), t);
        }),
      [e, r, i],
    );
  (y.forEach((e) => {
    (p(e), m(e, v));
  }),
    l(v));
  let [b] = w.useState(() => new C(r, y, t)),
    [x, S, T] = b.getOptimisticResult(y, t.combine);
  (w.useSyncExternalStore(
    w.useCallback((e) => (i ? s : b.subscribe(o.batchCalls(e))), [b, i]),
    () => b.getCurrentResult(),
    () => b.getCurrentResult(),
  ),
    w.useEffect(() => {
      b.setQueries(y, t, { listeners: !1 });
    }, [y, t, b]));
  let E = x.some((e, t) => d(y[t], e))
    ? x.flatMap((e, t) => {
        let n = y[t];
        if (n) {
          let t = new u(r, n);
          if (d(n, e)) return h(n, t, v);
          c(e, i) && h(n, t, v);
        }
        return [];
      })
    : [];
  if (E.length > 0) throw Promise.all(E);
  let D = x.find((e, t) => {
    let n = y[t];
    return (
      n &&
      g({
        result: e,
        errorResetBoundary: v,
        throwOnError: n.throwOnError,
        query: r.getQueryCache().get(n.queryHash),
      })
    );
  });
  if (D?.error) throw D.error;
  return S(T());
}
var E = {
    0: {},
    1: { strSymbol: `$` },
    2: { strSymbol: `£` },
    3: { strSymbol: `€`, strDecimalSymbol: `,`, strThousandsSeparator: ` ` },
    4: { strSymbol: `CHF` },
    5: {
      strSymbol: `руб.`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ``,
    },
    6: {
      strSymbol: `zł`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    7: {
      strSymbol: `R$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    8: { strSymbol: `¥`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    9: {
      strSymbol: `kr`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    10: {
      strSymbol: `Rp`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    11: { strSymbol: `RM` },
    12: { strSymbol: `P` },
    13: { strSymbol: `S$` },
    14: { strSymbol: `฿` },
    15: {
      strSymbol: `₫`,
      bWholeUnitsOnly: !0,
      bSuffixSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    16: { strSymbol: `₩`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    17: {
      strSymbol: `TL`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    18: {
      strSymbol: `₴`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    19: { strSymbol: `Mex$`, bSpaceForSymbol: !0 },
    20: { strSymbol: `CDN$`, bSpaceForSymbol: !0 },
    21: { strSymbol: `A$`, bSpaceForSymbol: !0 },
    22: { strSymbol: `NZ$`, bSpaceForSymbol: !0 },
    23: { strSymbol: `¥`, bSpaceForSymbol: !0 },
    24: { strSymbol: `₹`, bSpaceForSymbol: !0, bWholeUnitsOnly: !0 },
    25: {
      strSymbol: `CLP$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    26: { strSymbol: `S/.` },
    27: {
      strSymbol: `COL$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    28: {
      strSymbol: `R`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `.`,
      strThousandsSeparator: ` `,
    },
    29: { strSymbol: `HK$`, bSpaceForSymbol: !0 },
    30: { strSymbol: `NT$`, bWholeUnitsOnly: !0, bSpaceForSymbol: !0 },
    31: { strSymbol: `SR`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    32: { strSymbol: `AED`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    33: { strSymbol: `kr`, bSpaceForSymbol: !0, bSuffixSymbol: !0 },
    34: {
      strSymbol: `ARS$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    35: { strSymbol: `₪` },
    36: { strSymbol: `Br` },
    37: {
      strSymbol: `₸`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    38: { strSymbol: `KD`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    39: { strSymbol: `QR`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    40: {
      strSymbol: `₡`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    41: {
      strSymbol: `$U`,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    42: { strSymbol: `лв`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    43: { strSymbol: `kn`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    44: { strSymbol: `Kč`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    45: { strSymbol: `kr.`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    46: { strSymbol: `Ft`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    47: { strSymbol: `lei`, bSuffixSymbol: !0, bSpaceForSymbol: !0 },
    48: {},
  },
  D = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function O(e) {
  return { ...D, ...E[e], eCurrency: e };
}
function k(e, t) {
  return A(e, O(t));
}
function A(e, t) {
  let {
      strSymbol: n,
      bSuffixSymbol: r,
      bSpaceForSymbol: i,
      bWholeUnitsOnly: a,
      strDecimalSymbol: o,
      strThousandsSeparator: s,
    } = t,
    c = e < 0,
    l = a && e % 100 == 0;
  c && (e = -e);
  let u = [];
  for (let t = 0; t < 2; t++) (l || u.push(e % 10), (e = Math.floor(e / 10)));
  !l && o && u.push(o);
  let d = 0;
  do
    (d++ % 3 == 0 && d > 2 && s && u.push(s),
      u.push(e % 10),
      (e = Math.floor(e / 10)));
  while (e > 0);
  let f = u.reverse().join(``),
    p = i ? ` ` : ``,
    m = c ? `-` : ``;
  return r ? `${m}${f}${p}${n}` : `${m}${n}${p}${f}`;
}
n();
var j = (0, w.createContext)({ instances: {}, factories: {} });
function M(e, t) {
  let n = (0, w.useContext)(j),
    r = typeof e == `string` ? e : b(...e),
    i = n;
  for (; i;) {
    if (r in i.instances) return i.instances[r];
    if (r in i.factories) break;
    i = i.parent;
  }
  let a = (i?.factories[r] ?? t)();
  return (((i ?? n).instances[r] = a), a);
}
export { T as a, O as i, k as n, A as r, M as t };
