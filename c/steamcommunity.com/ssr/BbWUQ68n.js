var _ = class extends _ {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(_, _) {
      super(), (this.#e = _), this.setOptions(_), this.bindMethods(), this.#i();
    }
    bindMethods() {
      (this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this));
    }
    setOptions(_) {
      let _ = this.options;
      (this.options = this.#e.defaultMutationOptions(_)),
        _(this.options, _) ||
          this.#e.getMutationCache().notify({
            type: `observerOptionsUpdated`,
            mutation: this.#n,
            observer: this,
          }),
        _?.mutationKey &&
        this.options.mutationKey &&
        _(_.mutationKey) !== _(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === `pending` &&
            this.#n.setOptions(this.options);
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(_) {
      this.#i(), this.#a(_);
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      this.#n?.removeObserver(this), (this.#n = void 0), this.#i(), this.#a();
    }
    mutate(_, _) {
      return (
        (this.#r = _),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(_)
      );
    }
    #i() {
      let _ = this.#n?.state ?? _();
      this.#t = {
        ..._,
        isPending: _.status === `pending`,
        isSuccess: _.status === `success`,
        isError: _.status === `error`,
        isIdle: _.status === `idle`,
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #a(_) {
      _.batch(() => {
        if (this.#r && this.hasListeners()) {
          let _ = this.#t.variables,
            _ = this.#t.context;
          _?.type === `success`
            ? (this.#r.onSuccess?.(_.data, _, _),
              this.#r.onSettled?.(_.data, null, _, _))
            : _?.type === `error` &&
              (this.#r.onError?.(_.error, _, _),
              this.#r.onSettled?.(void 0, _.error, _, _));
        }
        this.listeners.forEach((_) => {
          _(this.#t);
        });
      });
    }
  },
  _ = _(_(), 1);
function _(_, _) {
  let _ = _(_),
    [_] = _.useState(() => new _(_, _));
  _.useEffect(() => {
    _.setOptions(_);
  }, [_, _]);
  let _ = _.useSyncExternalStore(
      _.useCallback((_) => _.subscribe(_.batchCalls(_)), [_]),
      () => _.getCurrentResult(),
      () => _.getCurrentResult(),
    ),
    _ = _.useCallback(
      (_, _) => {
        _.mutate(_, _).catch(_);
      },
      [_],
    );
  if (_.error && _(_.options.throwOnError, [_.error])) throw _.error;
  return {
    ..._,
    mutate: _,
    mutateAsync: _.mutate,
  };
}
export { _ };
