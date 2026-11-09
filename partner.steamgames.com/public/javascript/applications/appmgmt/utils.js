/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { _t as e, kt as t, on as n } from "./mobx.esm.js";
var r = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
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
function x(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function S(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : g(e, t);
}
function C(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function w(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var T = Symbol();
function E(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === T
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var D = new (class extends r {
    #e;
    #t;
    #n;
    constructor() {
      super(),
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
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      (this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        }));
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
  O = new (class extends r {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (e) => {
          if (!i && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n);
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
    setEventListener(e) {
      (this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this)));
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
function k() {
  let e,
    t,
    n = new Promise((n, r) => {
      (e = n), (t = r);
    });
  (n.status = `pending`), n.catch(() => {});
  function r(e) {
    Object.assign(n, e), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (t) => {
      r({ status: `fulfilled`, value: t }), e(t);
    }),
    (n.reject = (e) => {
      r({ status: `rejected`, reason: e }), t(e);
    }),
    n
  );
}
function A(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function j(e) {
  return (e ?? `online`) !== `online` || O.isOnline();
}
var M = class extends Error {
  constructor(e) {
    super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent);
  }
};
function N(e) {
  return e instanceof M;
}
function P(e) {
  let t = !1,
    n = 0,
    r = !1,
    a,
    o = k(),
    s = (t) => {
      r || (p(new M(t)), e.abort?.());
    },
    c = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      D.isFocused() &&
      (e.networkMode === `always` || O.isOnline()) &&
      e.canRun(),
    d = () => j(e.networkMode) && e.canRun(),
    f = (t) => {
      r || ((r = !0), e.onSuccess?.(t), a?.(), o.resolve(t));
    },
    p = (t) => {
      r || ((r = !0), e.onError?.(t), a?.(), o.reject(t));
    },
    m = () =>
      new Promise((t) => {
        (a = (e) => {
          (r || u()) && t(e);
        }),
          e.onPause?.();
      }).then(() => {
        (a = void 0), r || e.onContinue?.();
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
            s = e.retryDelay ?? A,
            c = typeof s == `function` ? s(n, a) : s,
            l =
              o === !0 ||
              (typeof o == `number` && n < o) ||
              (typeof o == `function` && o(n, a));
          t || !l
            ? p(a)
            : (n++,
              e.onFail?.(n, a),
              x(c)
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
function F() {
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
      (e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          });
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        t--, t || o();
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
var I = F(),
  L = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        s(this.gcTime) &&
          (this.#e = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (i ? 1 / 0 : 3e5));
    }
    clearGcTimeout() {
      this.#e &&= (clearTimeout(this.#e), void 0);
    }
  },
  R = n(t(), 1),
  z = e(),
  B = R.createContext(void 0),
  V = (e) => {
    let t = R.useContext(B);
    if (e) return e;
    if (!t)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  H = ({ client: e, children: t }) => (
    R.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, z.jsx)(B.Provider, { value: e, children: t })
  );
function U(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function W() {}
export {
  T as A,
  a as C,
  u as D,
  g as E,
  r as M,
  l as O,
  d as S,
  S as T,
  m as _,
  L as a,
  s as b,
  P as c,
  O as d,
  D as f,
  o as g,
  E as h,
  V as i,
  c as j,
  _ as k,
  N as l,
  w as m,
  U as n,
  I as o,
  C as p,
  H as r,
  j as s,
  W as t,
  k as u,
  p as v,
  h as w,
  f as x,
  i as y,
};
