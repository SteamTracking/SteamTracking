import { _, _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _ } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./chunk~ede3e357a2.js?contenthash=Cc5o6zVM";
function _(_) {
  return Object.prototype.toString.call(_) === `[object Object]`;
}
function _(_) {
  if (!_(_)) return !1;
  let _ = _.constructor;
  if (_ === void 0) return !0;
  let _ = _.prototype;
  return !(!_(_) || !Object.prototype.hasOwnProperty.call(_, `isPrototypeOf`));
}
function _(..._) {
  return JSON.stringify(_, (_, _) => {
    if (_(_)) {
      let _ = {};
      return (
        Object.keys(_)
          .sort()
          .forEach((_) => {
            _[_] = _[_];
          }),
        _
      );
    }
    return _;
  });
}
function _(_, _) {
  return _.filter((_) => !_.includes(_));
}
function _(_, _, _) {
  let _ = _.slice(0);
  return ((_[_] = _), _);
}
var _ = class extends _ {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(_, _, _) {
      (super(),
        (this.#e = _),
        (this.#r = _),
        (this.#n = []),
        (this.#i = []),
        (this.#t = []),
        this.setQueries(_));
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        this.#i.forEach((_) => {
          _.subscribe((_) => {
            this.#d(_, _);
          });
        });
    }
    onUnsubscribe() {
      this.listeners.size || this.destroy();
    }
    destroy() {
      ((this.listeners = new Set()),
        this.#i.forEach((_) => {
          _.destroy();
        }));
    }
    setQueries(_, _, _) {
      ((this.#n = _),
        (this.#r = _),
        _.batch(() => {
          let _ = this.#i,
            _ = this.#u(this.#n);
          _.forEach((_) => _.observer.setOptions(_.defaultedQueryOptions, _));
          let _ = _.map((_) => _.observer),
            _ = _.map((_) => _.getCurrentResult()),
            _ = _.some((_, _) => _ !== _[_]);
          (_.length !== _.length || _) &&
            ((this.#i = _),
            (this.#t = _),
            this.hasListeners() &&
              (_(_, _).forEach((_) => {
                _.destroy();
              }),
              _(_, _).forEach((_) => {
                _.subscribe((_) => {
                  this.#d(_, _);
                });
              }),
              this.#f()));
        }));
    }
    getCurrentResult() {
      return this.#t;
    }
    getQueries() {
      return this.#i.map((_) => _.getCurrentQuery());
    }
    getObservers() {
      return this.#i;
    }
    getOptimisticResult(_, _) {
      let _ = this.#u(_).map((_) =>
        _.observer.getOptimisticResult(_.defaultedQueryOptions),
      );
      return [_, (_) => this.#l(_ ?? _, _), () => this.#c(_, _)];
    }
    #c(_, _) {
      let _ = this.#u(_);
      return _.map((_, _) => {
        let _ = _[_];
        return _.defaultedQueryOptions.notifyOnChangeProps
          ? _
          : _.observer.trackResult(_, (_) => {
              _.forEach((_) => {
                _.observer.trackProp(_);
              });
            });
      });
    }
    #l(_, _) {
      return _
        ? ((this.#a && this.#t === this.#s && _ === this.#o) ||
            ((this.#o = _), (this.#s = this.#t), (this.#a = _(this.#a, _(_)))),
          this.#a)
        : _;
    }
    #u(_) {
      let _ = new Map(this.#i.map((_) => [_.options.queryHash, _])),
        _ = [];
      return (
        _.forEach((_) => {
          let _ = this.#e.defaultQueryOptions(_),
            _ = _.get(_.queryHash);
          _
            ? _.push({
                defaultedQueryOptions: _,
                observer: _,
              })
            : _.push({
                defaultedQueryOptions: _,
                observer: new _(this.#e, _),
              });
        }),
        _
      );
    }
    #d(_, _) {
      let _ = this.#i.indexOf(_);
      _ !== -1 && ((this.#t = _(this.#t, _, _)), this.#f());
    }
    #f() {
      this.hasListeners() &&
        this.#a !== this.#l(this.#c(this.#t, this.#n), this.#r?.combine) &&
        _.batch(() => {
          this.listeners.forEach((_) => {
            _(this.#t);
          });
        });
    }
  },
  _ = _(_(), 1);
function _({ queries: _, ..._ }, _) {
  let _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.useMemo(
      () =>
        _.map((_) => {
          let _ = _.defaultQueryOptions(_);
          return ((_._optimisticResults = _ ? `isRestoring` : `optimistic`), _);
        }),
      [_, _, _],
    );
  (_.forEach((_) => {
    (_(_), _(_, _));
  }),
    _(_));
  let [_] = _.useState(() => new _(_, _, _)),
    [_, _, _] = _.getOptimisticResult(_, _.combine);
  (_.useSyncExternalStore(
    _.useCallback((_) => (_ ? _ : _.subscribe(_.batchCalls(_))), [_, _]),
    () => _.getCurrentResult(),
    () => _.getCurrentResult(),
  ),
    _.useEffect(() => {
      _.setQueries(_, _, {
        listeners: !1,
      });
    }, [_, _, _]));
  let _ = _.some((_, _) => _(_[_], _))
    ? _.flatMap((_, _) => {
        let _ = _[_];
        if (_) {
          let _ = new _(_, _);
          if (_(_, _)) return _(_, _, _);
          _(_, _) && _(_, _, _);
        }
        return [];
      })
    : [];
  if (_.length > 0) throw Promise.all(_);
  let _ = _.find((_, _) => {
    let _ = _[_];
    return (
      _ &&
      _({
        result: _,
        errorResetBoundary: _,
        throwOnError: _.throwOnError,
        query: _.getQueryCache().get(_.queryHash),
      })
    );
  });
  if (_?.error) throw _.error;
  return _(_());
}
var _ = _((_) => {
    var _ = _();
    (_.useSyncExternalStore, _.useRef, _.useEffect, _.useMemo, _.useDebugValue);
  }),
  _ = _((_, _) => {
    _.exports = _();
  });
_();
var _ = (0, _.createContext)({
  instances: {},
  factories: {},
});
function _(_, _) {
  let _ = (0, _.useContext)(_),
    _ = typeof _ == `string` ? _ : _(..._),
    _ = _;
  for (; _;) {
    if (_ in _.instances) return _.instances[_];
    if (_ in _.factories) break;
    _ = _.parent;
  }
  let _ = (_?.factories[_] ?? _)();
  return (((_ ?? _).instances[_] = _), _);
}
