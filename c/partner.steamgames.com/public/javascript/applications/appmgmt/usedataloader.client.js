import { _, _, _ } from "./mobx.esm.js";
import { _, _, _, _, _ } from "./utils.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./useQuery.js";
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
  return (_[_] = _), _;
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
      super(),
        (this.#e = _),
        (this.#r = _),
        (this.#n = []),
        (this.#i = []),
        (this.#t = []),
        this.setQueries(_);
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
      (this.listeners = new Set()),
        this.#i.forEach((_) => {
          _.destroy();
        });
    }
    setQueries(_, _, _) {
      (this.#n = _),
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
        });
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
          return (_._optimisticResults = _ ? `isRestoring` : `optimistic`), _;
        }),
      [_, _, _],
    );
  _.forEach((_) => {
    _(_), _(_, _);
  }),
    _(_);
  let [_] = _.useState(() => new _(_, _, _)),
    [_, _, _] = _.getOptimisticResult(_, _.combine);
  _.useSyncExternalStore(
    _.useCallback((_) => (_ ? _ : _.subscribe(_.batchCalls(_))), [_, _]),
    () => _.getCurrentResult(),
    () => _.getCurrentResult(),
  ),
    _.useEffect(() => {
      _.setQueries(_, _, {
        listeners: !1,
      });
    }, [_, _, _]);
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
var _ = {
    0: {},
    1: {
      strSymbol: `$`,
    },
    2: {
      strSymbol: `£`,
    },
    3: {
      strSymbol: `€`,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    4: {
      strSymbol: `CHF`,
    },
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
    8: {
      strSymbol: `¥`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
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
    11: {
      strSymbol: `RM`,
    },
    12: {
      strSymbol: `P`,
    },
    13: {
      strSymbol: `S$`,
    },
    14: {
      strSymbol: `฿`,
    },
    15: {
      strSymbol: `₫`,
      bWholeUnitsOnly: !0,
      bSuffixSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    16: {
      strSymbol: `₩`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
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
    19: {
      strSymbol: `Mex$`,
      bSpaceForSymbol: !0,
    },
    20: {
      strSymbol: `CDN$`,
      bSpaceForSymbol: !0,
    },
    21: {
      strSymbol: `A$`,
      bSpaceForSymbol: !0,
    },
    22: {
      strSymbol: `NZ$`,
      bSpaceForSymbol: !0,
    },
    23: {
      strSymbol: `¥`,
      bSpaceForSymbol: !0,
    },
    24: {
      strSymbol: `₹`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
    },
    25: {
      strSymbol: `CLP$`,
      bSpaceForSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    26: {
      strSymbol: `S/.`,
    },
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
    29: {
      strSymbol: `HK$`,
      bSpaceForSymbol: !0,
    },
    30: {
      strSymbol: `NT$`,
      bWholeUnitsOnly: !0,
      bSpaceForSymbol: !0,
    },
    31: {
      strSymbol: `SR`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    32: {
      strSymbol: `AED`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    33: {
      strSymbol: `kr`,
      bSpaceForSymbol: !0,
      bSuffixSymbol: !0,
    },
    34: {
      strSymbol: `ARS$`,
      bSpaceForSymbol: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: `.`,
    },
    35: {
      strSymbol: `₪`,
    },
    36: {
      strSymbol: `Br`,
    },
    37: {
      strSymbol: `₸`,
      bSuffixSymbol: !0,
      bWholeUnitsOnly: !0,
      strDecimalSymbol: `,`,
      strThousandsSeparator: ` `,
    },
    38: {
      strSymbol: `KD`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    39: {
      strSymbol: `QR`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
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
    42: {
      strSymbol: `лв`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    43: {
      strSymbol: `kn`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    44: {
      strSymbol: `Kč`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    45: {
      strSymbol: `kr.`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    46: {
      strSymbol: `Ft`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    47: {
      strSymbol: `lei`,
      bSuffixSymbol: !0,
      bSpaceForSymbol: !0,
    },
    48: {},
  },
  _ = {
    strSymbol: ``,
    bSuffixSymbol: !1,
    bSpaceForSymbol: !1,
    bWholeUnitsOnly: !1,
    eCurrency: 0,
    strDecimalSymbol: `.`,
    strThousandsSeparator: `,`,
  };
function _(_) {
  return {
    ..._,
    ..._[_],
    eCurrency: _,
  };
}
function _(_, _) {
  return _(_, _(_));
}
function _(_, _) {
  let {
      strSymbol: _,
      bSuffixSymbol: _,
      bSpaceForSymbol: _,
      bWholeUnitsOnly: _,
      strDecimalSymbol: _,
      strThousandsSeparator: _,
    } = _,
    _ = _ < 0,
    _ = _ && _ % 100 == 0;
  _ && (_ = -_);
  let _ = [];
  for (let _ = 0; _ < 2; _++) _ || _.push(_ % 10), (_ = Math.floor(_ / 10));
  !_ && _ && _.push(_);
  let _ = 0;
  do
    _++ % 3 == 0 && _ > 2 && _ && _.push(_),
      _.push(_ % 10),
      (_ = Math.floor(_ / 10));
  while (_ > 0);
  let _ = _.reverse().join(``),
    _ = _ ? ` ` : ``,
    _ = _ ? `-` : ``;
  return _ ? `${_}${_}${_}${_}` : `${_}${_}${_}${_}`;
}
_();
var _ = (0, _.createContext)({
  instances: {},
  factories: {},
});
function _(_, _) {
  let _ = (0, _.useContext)(_),
    _ = typeof _ == `string` ? _ : _(..._),
    _ = _;
  for (; _; ) {
    if (_ in _.instances) return _.instances[_];
    if (_ in _.factories) break;
    _ = _.parent;
  }
  let _ = (_?.factories[_] ?? _)();
  return ((_ ?? _).instances[_] = _), _;
}
export { _, _, _, _, _ };
