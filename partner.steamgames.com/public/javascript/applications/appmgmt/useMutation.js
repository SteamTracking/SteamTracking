/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { At as e, sn as t } from "./chunk~de7f2df91c.js";
import {
  M as n,
  _ as r,
  i,
  k as a,
  n as o,
  o as s,
  t as c,
} from "./chunk~8fb30ea08b.js";
import { n as l } from "./chunk~bf46c905a4.js";
var u = class extends n {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(e, t) {
      (super(),
        (this.#e = e),
        this.setOptions(t),
        this.bindMethods(),
        this.#i());
    }
    bindMethods() {
      ((this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this)));
    }
    setOptions(e) {
      let t = this.options;
      ((this.options = this.#e.defaultMutationOptions(e)),
        a(this.options, t) ||
          this.#e
            .getMutationCache()
            .notify({
              type: `observerOptionsUpdated`,
              mutation: this.#n,
              observer: this,
            }),
        t?.mutationKey &&
        this.options.mutationKey &&
        r(t.mutationKey) !== r(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === `pending` &&
            this.#n.setOptions(this.options));
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(e) {
      (this.#i(), this.#a(e));
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      (this.#n?.removeObserver(this), (this.#n = void 0), this.#i(), this.#a());
    }
    mutate(e, t) {
      return (
        (this.#r = t),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(e)
      );
    }
    #i() {
      let e = this.#n?.state ?? l();
      this.#t = {
        ...e,
        isPending: e.status === `pending`,
        isSuccess: e.status === `success`,
        isError: e.status === `error`,
        isIdle: e.status === `idle`,
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #a(e) {
      s.batch(() => {
        if (this.#r && this.hasListeners()) {
          let t = this.#t.variables,
            n = this.#t.context;
          e?.type === `success`
            ? (this.#r.onSuccess?.(e.data, t, n),
              this.#r.onSettled?.(e.data, null, t, n))
            : e?.type === `error` &&
              (this.#r.onError?.(e.error, t, n),
              this.#r.onSettled?.(void 0, e.error, t, n));
        }
        this.listeners.forEach((e) => {
          e(this.#t);
        });
      });
    }
  },
  d = t(e(), 1);
function f(e, t) {
  let n = i(t),
    [r] = d.useState(() => new u(n, e));
  d.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  let a = d.useSyncExternalStore(
      d.useCallback((e) => r.subscribe(s.batchCalls(e)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    l = d.useCallback(
      (e, t) => {
        r.mutate(e, t).catch(c);
      },
      [r],
    );
  if (a.error && o(r.options.throwOnError, [a.error])) throw a.error;
  return { ...a, mutate: l, mutateAsync: a.mutate };
}
export { f as t };
