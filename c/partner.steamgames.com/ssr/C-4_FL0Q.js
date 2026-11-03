var _ = class extends _ {
    constructor(_ = {}) {
      super(), (this.config = _), (this.#e = new Map());
    }
    #e;
    build(_, _, _) {
      let _ = _.queryKey,
        _ = _.queryHash ?? _(_, _),
        _ = this.get(_);
      return (
        _ ||
          ((_ = new _({
            cache: this,
            queryKey: _,
            queryHash: _,
            options: _.defaultQueryOptions(_),
            state: _,
            defaultOptions: _.getQueryDefaults(_),
          })),
          this.add(_)),
        _
      );
    }
    add(_) {
      this.#e.has(_.queryHash) ||
        (this.#e.set(_.queryHash, _),
        this.notify({
          type: `added`,
          query: _,
        }));
    }
    remove(_) {
      let _ = this.#e.get(_.queryHash);
      _ &&
        (_.destroy(),
        _ === _ && this.#e.delete(_.queryHash),
        this.notify({
          type: `removed`,
          query: _,
        }));
    }
    clear() {
      _.batch(() => {
        this.getAll().forEach((_) => {
          this.remove(_);
        });
      });
    }
    get(_) {
      return this.#e.get(_);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(_) {
      let _ = {
        exact: !0,
        ..._,
      };
      return this.getAll().find((_) => _(_, _));
    }
    findAll(_ = {}) {
      let _ = this.getAll();
      return Object.keys(_).length > 0 ? _.filter((_) => _(_, _)) : _;
    }
    notify(_) {
      _.batch(() => {
        this.listeners.forEach((_) => {
          _(_);
        });
      });
    }
    onFocus() {
      _.batch(() => {
        this.getAll().forEach((_) => {
          _.onFocus();
        });
      });
    }
    onOnline() {
      _.batch(() => {
        this.getAll().forEach((_) => {
          _.onOnline();
        });
      });
    }
  },
  _ = class extends _ {
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
var _ = class extends _ {
  constructor(_ = {}) {
    super(), (this.config = _), (this.#e = new Map()), (this.#t = Date.now());
  }
  #e;
  #t;
  build(_, _, _) {
    let _ = new _({
      mutationCache: this,
      mutationId: ++this.#t,
      options: _.defaultMutationOptions(_),
      state: _,
    });
    return this.add(_), _;
  }
  add(_) {
    let _ = _(_),
      _ = this.#e.get(_) ?? [];
    _.push(_),
      this.#e.set(_, _),
      this.notify({
        type: `added`,
        mutation: _,
      });
  }
  remove(_) {
    let _ = _(_);
    if (this.#e.has(_)) {
      let _ = this.#e.get(_)?.filter((_) => _ !== _);
      _ && (_.length === 0 ? this.#e.delete(_) : this.#e.set(_, _));
    }
    this.notify({
      type: `removed`,
      mutation: _,
    });
  }
  canRun(_) {
    let _ = this.#e.get(_(_))?.find((_) => _.state.status === `pending`);
    return !_ || _ === _;
  }
  runNext(_) {
    return (
      this.#e
        .get(_(_))
        ?.find((_) => _ !== _ && _.state.isPaused)
        ?.continue() ?? Promise.resolve()
    );
  }
  clear() {
    _.batch(() => {
      this.getAll().forEach((_) => {
        this.remove(_);
      });
    });
  }
  getAll() {
    return [...this.#e.values()].flat();
  }
  find(_) {
    let _ = {
      exact: !0,
      ..._,
    };
    return this.getAll().find((_) => _(_, _));
  }
  findAll(_ = {}) {
    return this.getAll().filter((_) => _(_, _));
  }
  notify(_) {
    _.batch(() => {
      this.listeners.forEach((_) => {
        _(_);
      });
    });
  }
  resumePausedMutations() {
    let _ = this.getAll().filter((_) => _.state.isPaused);
    return _.batch(() => Promise.all(_.map((_) => _.continue().catch(_))));
  }
};
function _(_) {
  return _.options.scope?._ ?? String(_.mutationId);
}
function _(_) {
  return {
    onFetch: (_, _) => {
      let _ = _.options,
        _ = _.fetchOptions?.meta?.fetchMore?.direction,
        _ = _.state.data?.pages || [],
        _ = _.state.data?.pageParams || [],
        _ = {
          pages: [],
          pageParams: [],
        },
        _ = 0,
        _ = async () => {
          let _ = !1,
            _ = (_) => {
              Object.defineProperty(_, "signal", {
                enumerable: !0,
                get: () => (
                  _.signal.aborted
                    ? (_ = !0)
                    : _.signal.addEventListener(`abort`, () => {
                        _ = !0;
                      }),
                  _.signal
                ),
              });
            },
            _ = _(_.options, _.fetchOptions),
            _ = async (_, _, _) => {
              if (_) return Promise.reject();
              if (_ == null && _.pages.length) return Promise.resolve(_);
              let _ = {
                queryKey: _.queryKey,
                pageParam: _,
                direction: _ ? `backward` : `forward`,
                meta: _.options.meta,
              };
              _(_);
              let _ = await _(_),
                { maxPages: _ } = _.options,
                _ = _ ? _ : _;
              return {
                pages: _(_.pages, _, _),
                pageParams: _(_.pageParams, _, _),
              };
            };
          if (_ && _.length) {
            let _ = _ === `backward`,
              _ = _ ? _ : _,
              _ = {
                pages: _,
                pageParams: _,
              };
            _ = await _(_, _(_, _), _);
          } else {
            let _ = _ ?? _.length;
            do {
              let _ = _ === 0 ? (_[0] ?? _.initialPageParam) : _(_, _);
              if (_ > 0 && _ == null) break;
              (_ = await _(_, _)), _++;
            } while (_ < _);
          }
          return _;
        };
      _.fetchFn = _.options.persister
        ? () =>
            _.options.persister?.(
              _,
              {
                queryKey: _.queryKey,
                meta: _.options.meta,
                signal: _.signal,
              },
              _,
            )
        : _;
    },
  };
}
function _(_, { pages: _, pageParams: _ }) {
  let _ = _.length - 1;
  return _.length > 0 ? _.getNextPageParam(_[_], _, _[_], _) : void 0;
}
function _(_, { pages: _, pageParams: _ }) {
  return _.length > 0 ? _.getPreviousPageParam?.(_[0], _, _[0], _) : void 0;
}
var _ = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(_ = {}) {
      (this.#e = _.queryCache || new _()),
        (this.#t = _.mutationCache || new _()),
        (this.#n = _.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0);
    }
    mount() {
      this.#a++,
        this.#a === 1 &&
          ((this.#o = _.subscribe(async (_) => {
            _ && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = _.subscribe(async (_) => {
            _ && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0));
    }
    isFetching(_) {
      return this.#e.findAll({
        ..._,
        fetchStatus: `fetching`,
      }).length;
    }
    isMutating(_) {
      return this.#t.findAll({
        ..._,
        status: `pending`,
      }).length;
    }
    getQueryData(_) {
      let _ = this.defaultQueryOptions({
        queryKey: _,
      });
      return this.#e.get(_.queryHash)?.state.data;
    }
    ensureQueryData(_) {
      let _ = this.getQueryData(_.queryKey);
      if (_ === void 0) return this.fetchQuery(_);
      {
        let _ = this.defaultQueryOptions(_),
          _ = this.#e.build(this, _);
        return (
          _.revalidateIfStale &&
            _.isStaleByTime(_(_.staleTime, _)) &&
            this.prefetchQuery(_),
          Promise.resolve(_)
        );
      }
    }
    getQueriesData(_) {
      return this.#e.findAll(_).map(({ queryKey: _, state: _ }) => [_, _.data]);
    }
    setQueryData(_, _, _) {
      let _ = this.defaultQueryOptions({
          queryKey: _,
        }),
        _ = this.#e.get(_.queryHash)?.state.data,
        _ = _(_, _);
      if (_ !== void 0)
        return this.#e.build(this, _).setData(_, {
          ..._,
          manual: !0,
        });
    }
    setQueriesData(_, _, _) {
      return _.batch(() =>
        this.#e
          .findAll(_)
          .map(({ queryKey: _ }) => [_, this.setQueryData(_, _, _)]),
      );
    }
    getQueryState(_) {
      let _ = this.defaultQueryOptions({
        queryKey: _,
      });
      return this.#e.get(_.queryHash)?.state;
    }
    removeQueries(_) {
      let _ = this.#e;
      _.batch(() => {
        _.findAll(_).forEach((_) => {
          _.remove(_);
        });
      });
    }
    resetQueries(_, _) {
      let _ = this.#e,
        _ = {
          type: `active`,
          ..._,
        };
      return _.batch(
        () => (
          _.findAll(_).forEach((_) => {
            _.reset();
          }),
          this.refetchQueries(_, _)
        ),
      );
    }
    cancelQueries(_ = {}, _ = {}) {
      let _ = {
          revert: !0,
          ..._,
        },
        _ = _.batch(() => this.#e.findAll(_).map((_) => _.cancel(_)));
      return Promise.all(_).then(_).catch(_);
    }
    invalidateQueries(_ = {}, _ = {}) {
      return _.batch(() => {
        if (
          (this.#e.findAll(_).forEach((_) => {
            _.invalidate();
          }),
          _.refetchType === `none`)
        )
          return Promise.resolve();
        let _ = {
          ..._,
          type: _.refetchType ?? _.type ?? `active`,
        };
        return this.refetchQueries(_, _);
      });
    }
    refetchQueries(_ = {}, _) {
      let _ = {
          ..._,
          cancelRefetch: _?.cancelRefetch ?? !0,
        },
        _ = _.batch(() =>
          this.#e
            .findAll(_)
            .filter((_) => !_.isDisabled())
            .map((_) => {
              let _ = _.fetch(void 0, _);
              return (
                _.throwOnError || (_ = _.catch(_)),
                _.state.fetchStatus === `paused` ? Promise.resolve() : _
              );
            }),
        );
      return Promise.all(_).then(_);
    }
    fetchQuery(_) {
      let _ = this.defaultQueryOptions(_);
      _.retry === void 0 && (_.retry = !1);
      let _ = this.#e.build(this, _);
      return _.isStaleByTime(_(_.staleTime, _))
        ? _.fetch(_)
        : Promise.resolve(_.state.data);
    }
    prefetchQuery(_) {
      return this.fetchQuery(_).then(_).catch(_);
    }
    fetchInfiniteQuery(_) {
      return (_.behavior = _(_.pages)), this.fetchQuery(_);
    }
    prefetchInfiniteQuery(_) {
      return this.fetchInfiniteQuery(_).then(_).catch(_);
    }
    ensureInfiniteQueryData(_) {
      return (_.behavior = _(_.pages)), this.ensureQueryData(_);
    }
    resumePausedMutations() {
      return _.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
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
    setDefaultOptions(_) {
      this.#n = _;
    }
    setQueryDefaults(_, _) {
      this.#r.set(_(_), {
        queryKey: _,
        defaultOptions: _,
      });
    }
    getQueryDefaults(_) {
      let _ = [...this.#r.values()],
        _ = {};
      return (
        _.forEach((_) => {
          _(_, _.queryKey) &&
            (_ = {
              ..._,
              ..._.defaultOptions,
            });
        }),
        _
      );
    }
    setMutationDefaults(_, _) {
      this.#i.set(_(_), {
        mutationKey: _,
        defaultOptions: _,
      });
    }
    getMutationDefaults(_) {
      let _ = [...this.#i.values()],
        _ = {};
      return (
        _.forEach((_) => {
          _(_, _.mutationKey) &&
            (_ = {
              ..._,
              ..._.defaultOptions,
            });
        }),
        _
      );
    }
    defaultQueryOptions(_) {
      if (_._defaulted) return _;
      let _ = {
        ...this.#n.queries,
        ...this.getQueryDefaults(_.queryKey),
        ..._,
        _defaulted: !0,
      };
      return (
        (_.queryHash ||= _(_.queryKey, _)),
        _.refetchOnReconnect === void 0 &&
          (_.refetchOnReconnect = _.networkMode !== `always`),
        _.throwOnError === void 0 && (_.throwOnError = !!_.suspense),
        !_.networkMode && _.persister && (_.networkMode = `offlineFirst`),
        _.enabled !== !0 && _.queryFn === _ && (_.enabled = !1),
        _
      );
    }
    defaultMutationOptions(_) {
      return _?._defaulted
        ? _
        : {
            ...this.#n.mutations,
            ...(_?.mutationKey && this.getMutationDefaults(_.mutationKey)),
            ..._,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  _ = _(_(), 1),
  _ = function () {
    return null;
  };
function _(_) {
  let { queryClient: _ = _, steamUI: _ } = _;
  _.useEffect(() => {
    _ == _ &&
      _.setDefaultOptions({
        ..._,
        queries: {
          ..._.queries,
          networkMode: _ ? `offlineFirst` : void 0,
        },
        mutations: {
          ..._.mutations,
          networkMode: _ ? `offlineFirst` : void 0,
        },
      });
  }, [_, _]);
  let _ = _.children;
  return (
    _.debug &&
      (_ = [
        ..._.Children.toArray(_),
        _.createElement(_, {
          key: `ReactQueryDevtools`,
        }),
      ]),
    _.createElement(
      _,
      {
        client: _,
      },
      _,
    )
  );
}
var _ = {
    queries: {
      staleTime: 1 / 0,
    },
  },
  _ = new _({
    defaultOptions: _,
  });
export { _, _, _ };
