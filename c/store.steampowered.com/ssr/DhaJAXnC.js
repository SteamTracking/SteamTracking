var _ = class extends _ {
  #e;
  #t;
  #n;
  constructor(_) {
    super(),
      (this.mutationId = _.mutationId),
      (this.#t = _.mutationCache),
      (this.#e = []),
      (this.state = _.state || _()),
      this.setOptions(_.options),
      this.scheduleGc();
  }
  setOptions(_) {
    (this.options = _), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(_) {
    this.#e.includes(_) ||
      (this.#e.push(_),
      this.clearGcTimeout(),
      this.#t.notify({
        type: `observerAdded`,
        mutation: this,
        observer: _,
      }));
  }
  removeObserver(_) {
    (this.#e = this.#e.filter((_) => _ !== _)),
      this.scheduleGc(),
      this.#t.notify({
        type: `observerRemoved`,
        mutation: this,
        observer: _,
      });
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
  async execute(_) {
    this.#n = _({
      _: () =>
        this.options.mutationFn
          ? this.options.mutationFn(_)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (_, _) => {
        this.#r({
          type: `failed`,
          failureCount: _,
          error: _,
        });
      },
      onPause: () => {
        this.#r({
          type: `pause`,
        });
      },
      onContinue: () => {
        this.#r({
          type: `continue`,
        });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#t.canRun(this),
    });
    let _ = this.state.status === `pending`,
      _ = !this.#n.canStart();
    try {
      if (!_) {
        this.#r({
          type: `pending`,
          variables: _,
          isPaused: _,
        }),
          await this.#t.config.onMutate?.(_, this);
        let _ = await this.options.onMutate?.(_);
        _ !== this.state.context &&
          this.#r({
            type: `pending`,
            context: _,
            variables: _,
            isPaused: _,
          });
      }
      let _ = await this.#n.start();
      return (
        await this.#t.config.onSuccess?.(_, _, this.state.context, this),
        await this.options.onSuccess?.(_, _, this.state.context),
        await this.#t.config.onSettled?.(
          _,
          null,
          this.state.variables,
          this.state.context,
          this,
        ),
        await this.options.onSettled?.(_, null, _, this.state.context),
        this.#r({
          type: `success`,
          data: _,
        }),
        _
      );
    } catch (_) {
      try {
        throw (
          (await this.#t.config.onError?.(_, _, this.state.context, this),
          await this.options.onError?.(_, _, this.state.context),
          await this.#t.config.onSettled?.(
            void 0,
            _,
            this.state.variables,
            this.state.context,
            this,
          ),
          await this.options.onSettled?.(void 0, _, _, this.state.context),
          _)
        );
      } finally {
        this.#r({
          type: `error`,
          error: _,
        });
      }
    } finally {
      this.#t.runNext(this);
    }
  }
  #r(_) {
    let _ = (_) => {
      switch (_.type) {
        case `failed`:
          return {
            ..._,
            failureCount: _.failureCount,
            failureReason: _.error,
          };
        case `pause`:
          return {
            ..._,
            isPaused: !0,
          };
        case `continue`:
          return {
            ..._,
            isPaused: !1,
          };
        case `pending`:
          return {
            ..._,
            context: _.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: _.isPaused,
            status: `pending`,
            variables: _.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ..._,
            data: _.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ..._,
            data: void 0,
            error: _.error,
            failureCount: _.failureCount + 1,
            failureReason: _.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    (this.state = _(this.state)),
      _.batch(() => {
        this.#e.forEach((_) => {
          _.onMutationUpdate(_);
        }),
          this.#t.notify({
            mutation: this,
            type: `updated`,
            action: _,
          });
      });
  }
};
function _() {
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
export { _, _ };
