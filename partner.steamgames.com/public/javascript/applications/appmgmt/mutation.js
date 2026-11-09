/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { a as e, c as t, o as n } from "./utils.js";
var r = class extends e {
  #e;
  #t;
  #n;
  constructor(e) {
    (super(),
      (this.mutationId = e.mutationId),
      (this.#t = e.mutationCache),
      (this.#e = []),
      (this.state = e.state || i()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#e.includes(e) ||
      (this.#e.push(e),
      this.clearGcTimeout(),
      this.#t.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#e = this.#e.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#t.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#e.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#t.remove(this));
  }
  continue() {
    return this.#n?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    this.#n = t({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#r({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#r({ type: `pause` });
      },
      onContinue: () => {
        this.#r({ type: `continue` });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#t.canRun(this),
    });
    let n = this.state.status === `pending`,
      r = !this.#n.canStart();
    try {
      if (!n) {
        (this.#r({ type: `pending`, variables: e, isPaused: r }),
          await this.#t.config.onMutate?.(e, this));
        let t = await this.options.onMutate?.(e);
        t !== this.state.context &&
          this.#r({ type: `pending`, context: t, variables: e, isPaused: r });
      }
      let t = await this.#n.start();
      return (
        await this.#t.config.onSuccess?.(t, e, this.state.context, this),
        await this.options.onSuccess?.(t, e, this.state.context),
        await this.#t.config.onSettled?.(
          t,
          null,
          this.state.variables,
          this.state.context,
          this,
        ),
        await this.options.onSettled?.(t, null, e, this.state.context),
        this.#r({ type: `success`, data: t }),
        t
      );
    } catch (t) {
      try {
        throw (
          await this.#t.config.onError?.(t, e, this.state.context, this),
          await this.options.onError?.(t, e, this.state.context),
          await this.#t.config.onSettled?.(
            void 0,
            t,
            this.state.variables,
            this.state.context,
            this,
          ),
          await this.options.onSettled?.(void 0, t, e, this.state.context),
          t
        );
      } finally {
        this.#r({ type: `error`, error: t });
      }
    } finally {
      this.#t.runNext(this);
    }
  }
  #r(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      n.batch(() => {
        (this.#e.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#t.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function i() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
export { i as n, r as t };
