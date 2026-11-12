var _ = _(_()),
  _ = [`dangerouslySetInnerHTML`, `ticks`],
  _ = [`id`],
  _ = [`domain`],
  _ = [`domain`];
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _,
    _,
    _ = _(_, _);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    for (_ = 0; _ < _.length; _++)
      ((_ = _[_]),
        _.indexOf(_) === -1 &&
          {}.propertyIsEnumerable.call(_, _) &&
          (_[_] = _[_]));
  }
  return _;
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
function _(_) {
  var _ = _();
  return (
    (0, _.useLayoutEffect)(
      () => (
        _(_(_)),
        () => {
          _(_(_));
        }
      ),
      [_, _],
    ),
    null
  );
}
var _ = (_) => {
    var { xAxisId: _, className: _ } = _,
      _ = _(_),
      _ = _(),
      _ = `xAxis`,
      _ = _((_) => _(_, _, _, _)),
      _ = _((_) => _(_, _, _, _)),
      _ = _((_) => _(_, _)),
      _ = _((_) => _(_, _)),
      _ = _((_) => _(_, _));
    if (_ == null || _ == null || _ == null) return null;
    var { dangerouslySetInnerHTML: _, ticks: _ } = _,
      _ = _(_, _),
      { _: _ } = _,
      _ = _(_, _);
    return _.createElement(
      _,
      _({}, _, _, {
        scale: _,
        _: _._,
        _: _._,
        width: _.width,
        height: _.height,
        className: _(`recharts-${_} ${_}`, _),
        viewBox: _,
        ticks: _,
      }),
    );
  },
  _ = {
    allowDataOverflow: _.allowDataOverflow,
    allowDecimals: _.allowDecimals,
    allowDuplicatedCategory: _.allowDuplicatedCategory,
    height: _.height,
    hide: !1,
    mirror: _.mirror,
    orientation: _.orientation,
    padding: _.padding,
    reversed: _.reversed,
    scale: _.scale,
    tickCount: _.tickCount,
    type: _.type,
    xAxisId: 0,
  },
  _ = _.memo(
    (_) => {
      var _ = _(_, _);
      return _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          interval: _.interval ?? `preserveEnd`,
          _: _.xAxisId,
          scale: _.scale,
          type: _.type,
          padding: _.padding,
          allowDataOverflow: _.allowDataOverflow,
          domain: _.domain,
          dataKey: _.dataKey,
          allowDuplicatedCategory: _.allowDuplicatedCategory,
          allowDecimals: _.allowDecimals,
          tickCount: _.tickCount,
          includeHidden: _.includeHidden ?? !1,
          reversed: _.reversed,
          ticks: _.ticks,
          height: _.height,
          orientation: _.orientation,
          mirror: _.mirror,
          hide: _.hide,
          unit: _.unit,
          name: _.name,
          angle: _.angle ?? 0,
          minTickGap: _.minTickGap ?? 5,
          tick: _.tick ?? !0,
          tickFormatter: _.tickFormatter,
        }),
        _.createElement(_, _),
      );
    },
    (_, _) => {
      var { domain: _ } = _,
        _ = _(_, _),
        { domain: _ } = _,
        _ = _(_, _);
      return _(_, _)
        ? Array.isArray(_) &&
          _.length === 2 &&
          Array.isArray(_) &&
          _.length === 2
          ? _[0] === _[0] && _[1] === _[1]
          : _(
              {
                domain: _,
              },
              {
                domain: _,
              },
            )
        : !1;
    },
  );
_.displayName = `XAxis`;
