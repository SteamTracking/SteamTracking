var _ = _(_(), 1),
  _ = _(),
  _ = {
    resultsView: `grid`,
    priceTimeScale: `month`,
    searchSort: 0,
  },
  _ = (0, _.createContext)({
    prefs: _,
    onChange: () =>
      console.error(
        `Cannot update market display preferences. Missing provider.`,
      ),
  });
function _(_) {
  let { prefs: _, onChange: _, children: _ } = _,
    _ = (0, _.useRef)(_);
  _.current = _;
  let _ = (0, _.useMemo)(
      () => ({
        ..._,
        ..._,
      }),
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = (_) => {
          let _ = {
            ..._,
          };
          for (let [_, _] of Object.entries(_)) _[_] === _ && delete _[_];
          return _;
        };
        _(
          typeof _ == `function`
            ? (_) => {
                let _ = _({
                  ..._,
                  ..._,
                });
                return _(_);
              }
            : _,
        );
      },
      [_],
    ),
    _ = (0, _.useMemo)(
      () => ({
        prefs: _,
        onChange: _,
      }),
      [_, _],
    );
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _() {
  let { prefs: _, onChange: _ } = (0, _.useContext)(_);
  return [_, _];
}
function _(_) {
  let [_, _] = _();
  return [
    _[_],
    (0, _.useCallback)(
      (_) =>
        _((_) => ({
          ..._,
          [_]: _,
        })),
      [_, _],
    ),
  ];
}
var _ = (0, _.createContext)({
  bShowAdminActions: !1,
  eligibility: {
    bEligible: !0,
  },
});
function _(_) {
  let { children: _, value: _ } = _;
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _() {
  return (0, _.useContext)(_);
}
function _() {
  return _().bShowAdminActions;
}
function _() {
  return _().eligibility;
}
function _(_) {
  return (
    !!_.bSearchDescriptions ||
    (!!_.accessoryFilters && Object.keys(_.accessoryFilters).length > 0)
  );
}
function _(_, _) {
  let _ = {};
  for (let _ of _) {
    let _ = _.category,
      _ = _.internal_name;
    _ && _ && (_[_] || (_[_] = []), _[_].push(_));
  }
  return _;
}
function _(_, _ = !0) {
  return _(_(_, _));
}
function _(_, _ = !0) {
  return {
    queryKey: [`market_search`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(`/market/actions`, `Search`, _);
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_) return null;
      let _ = _ + (_.results || []).length;
      return (_.total_count && _ >= _.total_count) || _.results?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
    enabled: _,
  };
}
function _(_, _ = !0) {
  return _(_(_, _));
}
function _(_, _ = !0) {
  return {
    queryKey: [`market_search_descriptions`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(`/market/actions`, `SearchDescriptions`, _);
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_ || !_.more) return null;
      let _ = _ + (_.listings || []).length;
      return (_.total_count && _ >= _.total_count) || _.listings?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
    enabled: _,
  };
}
function _(_, _) {
  let _ = new URLSearchParams(_(_, _));
  return (
    _.appid && _.set(`appid`, _.appid.toString()),
    _.strQuery && _.set(`q`, _.strQuery),
    _.strQuery && _.bSearchDescriptions && _.set(`descriptions`, `1`),
    typeof _.count == `number` &&
      _.count >= 0 &&
      _.set(`count`, _.count.toString()),
    typeof _.sort == `number` && _.set(`sort`, _.sort.toString()),
    typeof _.direction == `number` && _.set(`dir`, _.direction.toString()),
    typeof _.start == `number` && _.set(`start`, _.start.toString()),
    _.searchDescriptionSort &&
      (_.set(`descsort`, _.searchDescriptionSort.field.toString()),
      typeof _.searchDescriptionSort.direction == `number` &&
        _.set(`descdir`, _.searchDescriptionSort.direction.toString()),
      typeof _.searchDescriptionSort.assetpropertyid == `number` &&
        _.set(
          `descpropid`,
          _.searchDescriptionSort.assetpropertyid.toString(),
        )),
    _
  );
}
function _(_, _) {
  let _ = new URLSearchParams();
  if (_.price) {
    let _ = _.price.unMin ?? 0;
    _ > 0 &&
      (_.set(`price_min`, _.toString()),
      _.set(`price_currency`, _.price.eCurrency.toString()));
    let _ = _.price.unMax ?? 0;
    _ > _ &&
      _ < _ &&
      (_.set(`price_max`, _.toString()),
      _.set(`price_currency`, _.price.eCurrency.toString()));
  }
  if (_.accessoryFilters)
    for (let [_, _] of Object.entries(_.accessoryFilters))
      for (let _ of _) _.append(_, _);
  if (_.filters)
    for (let [_, _] of Object.entries(_.filters))
      for (let _ of _) _.append(`category_${_}`, _);
  return _;
}
function _(_) {
  return _(_(_));
}
function _(_) {
  return {
    queryKey: [`market_item_search`, _],
    initialPageParam: 0,
    queryFn: async (_) => {
      let _ = {
          ..._,
          start: _.pageParam,
        },
        _ = await _(`/market/actions`, `QueryListingsForItem`, _);
      if (_ === null) throw Error(`Failed to load next page`);
      return _;
    },
    getNextPageParam: (_, _, _) => {
      if (!_ || !_.more) return null;
      let _ = _ + (_.listings || []).length;
      return (_.total_count && _ >= _.total_count) || _.listings?.length === 0
        ? null
        : _;
    },
    placeholderData: (_) => _,
  };
}
function _(_, _) {
  let _ = new URLSearchParams(_(_, _));
  if (
    (_.appid && _.set(`appid`, _.appid.toString()),
    _.strQuery && _.set(`q`, _.strQuery),
    _.sort &&
      (_.set(`sort`, _.sort.field.toString()),
      _.sort.direction !== void 0 && _.set(`dir`, _.sort.direction.toString()),
      _.sort.field === 1 &&
        (_(
          typeof _.sort.assetpropertyid == `number`,
          `Property sort must include property id`,
        ),
        _.set(`propertyid`, _.sort.assetpropertyid.toString()))),
    _.propertyFilters)
  )
    for (let _ of Object.values(_.propertyFilters || {}))
      _.append(`assetproperty`, _.fromObject(_).serializeBase64String());
  return _;
}
function _(_, _, _ = !0) {
  return _(_(_, _, _));
}
function _(_, _, _ = !0) {
  return {
    queryKey: [`market`, `orderbook`, _, _],
    queryFn: async () => {
      let _ = await _(`/market/orderbook`, `Load`, _, _);
      if (!_.success || !_.data) throw Error(`Bad book response`);
      return _.data;
    },
    refetchInterval: _ ? 5e3 : void 0,
    enabled: !!_,
  };
}
function _(_, _, _ = {}) {
  return _(_(_, _, void 0, _));
}
function _(_, _, _, _ = {}) {
  return {
    queryKey: [`market`, `description`, _, _],
    queryFn: () => _(`/market/actions`, `QueryDescription`, _, _, _),
    enabled: !!_,
    ..._,
  };
}
function _(_, _, _ = {}) {
  return _(_(_, _, _));
}
function _(_, _, _ = {}) {
  return {
    queryKey: [`market`, `description`, _, `classid`, _],
    queryFn: () => _(`/market/actions`, `QueryDescriptionByClassID`, _, _),
    enabled: !!_,
    ..._,
  };
}
function _(_, _, _ = {}) {
  return _(_(_, _, _));
}
function _(_, _, _ = {}) {
  return {
    queryKey: [`market`, `pricehistory`, _, _],
    queryFn: () => _(`/market/actions`, `QueryPriceHistory`, _, _),
    ..._,
  };
}
function _() {
  return {
    queryKey: [`market`, `recentsales`],
    queryFn: () => _(`/market/actions`, `QueryRecentSales`),
    staleTime: 1 / 0,
  };
}
function _() {
  return _(_());
}
