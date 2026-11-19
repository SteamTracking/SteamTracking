/* Third-party software licenses can be found at licenses.txt */
import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { $a as t, eo as n } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import { t as r } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import {
  D as i,
  I as a,
  R as o,
  d as s,
  h as c,
  u as l,
  y as u,
} from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import { x as d } from "./library.js?contenthash=CVZWwsCP";
var f =
    /((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\^-~]+[.,](?:(?:[a-zA-Z]{2,4}[.?]*[/\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>[\]]*[^\s"<>[\],.ː:])?)/,
  p = /^(steam|ftp|https?):\/\//;
function m(e) {
  return p.test(e) ? e : `https://` + e;
}
var h = class extends o {
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
        i(t.mutationKey) !== i(this.options.mutationKey)
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
      let e = this.#n?.state ?? d();
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
      u.batch(() => {
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
  g = e(n(), 1);
function _(e, t) {
  let n = c(t),
    [r] = g.useState(() => new h(n, e));
  g.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  let i = g.useSyncExternalStore(
      g.useCallback((e) => r.subscribe(u.batchCalls(e)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    a = g.useCallback(
      (e, t) => {
        r.mutate(e, t).catch(l);
      },
      [r],
    );
  if (i.error && s(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: a, mutateAsync: i.mutate };
}
var v = e(t()),
  y = r();
function b(e) {
  let {
      id: t,
      role: n,
      visible: r = !0,
      className: i,
      keepMounted: a = !1,
      expandDirection: o = `height`,
      msAnimationDuration: s = 250,
      children: c,
    } = e,
    { style: l, active: u, refDiv: d } = x(r, o, s);
  return !r && !u && !a
    ? null
    : (0, y.jsx)(`div`, {
        id: t,
        role: n,
        className: i,
        ref: d,
        style: l,
        inert: !r,
        children: c,
      });
}
function x(e, t = `height`, n = 250) {
  let r = g.useRef(null),
    i = g.useRef(!0),
    [a, o] = g.useState(`idle`),
    [s, c] = g.useState(e ? {} : { [t]: `0px`, overflow: `hidden` }),
    [l, u] = g.useState(e);
  return (
    g.useLayoutEffect(() => {
      (i.current || o(`start`), e && u(e));
    }, [e]),
    g.useLayoutEffect(
      () => (
        (i.current = !1),
        () => {
          i.current = !0;
        }
      ),
      [],
    ),
    g.useLayoutEffect(() => {
      let n = r.current,
        i = t == `height` ? `scrollHeight` : `scrollWidth`,
        s = () => {
          v.unstable_batchedUpdates(() => {
            (c(e ? {} : { [t]: `0px`, overflow: `hidden` }), o(`idle`), u(e));
          });
        };
      if (a == `start`) {
        let r = n[i];
        r == 0
          ? s()
          : (c((n) => ({
              [t]: e ? `0px` : `${r}px`,
              ...n,
              overflow: `hidden`,
            })),
            o(`active`));
      } else if (a == `active`) {
        n.scrollTop;
        let r = n[i];
        return (
          c({ overflow: `hidden`, [t]: e ? `${r}px` : `0px` }),
          n.addEventListener(`transitionend`, s),
          () => {
            n.removeEventListener(`transitionend`, s);
          }
        );
      }
    }, [a, e]),
    { style: { ...s, transition: `${t} ${n}ms` }, active: l, refDiv: r }
  );
}
export { f as i, _ as n, m as r, b as t };
