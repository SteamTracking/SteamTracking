var _ = _(_()),
  _ = _(_());
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
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = 32,
  _ = class extends _.PureComponent {
    renderIcon(_, _) {
      var { inactiveColor: _ } = this.props,
        _ = _ / 2,
        _ = _ / 6,
        _ = _ / 3,
        _ = _.inactive ? _ : _.color,
        _ = _ ?? _.type;
      if (_ === `none`) return null;
      if (_ === `plainline`)
        return _.createElement(`line`, {
          strokeWidth: 4,
          fill: `none`,
          stroke: _,
          strokeDasharray: _.payload.strokeDasharray,
          _: 0,
          _: _,
          _: _,
          _: _,
          className: `recharts-legend-icon`,
        });
      if (_ === `line`)
        return _.createElement(`path`, {
          strokeWidth: 4,
          fill: `none`,
          stroke: _,
          _: `M0,${_}h${_}
            A${_},${_},0,1,1,${2 * _},${_}
            H${_}M${2 * _},${_}
            A${_},${_},0,1,1,${_},${_}`,
          className: `recharts-legend-icon`,
        });
      if (_ === `rect`)
        return _.createElement(`path`, {
          stroke: `none`,
          fill: _,
          _: `M0,${_ / 8}h${_}v${(_ * 3) / 4}h${-_}z`,
          className: `recharts-legend-icon`,
        });
      if (_.isValidElement(_.legendIcon)) {
        var _ = _({}, _);
        return (delete _.legendIcon, _.cloneElement(_.legendIcon, _));
      }
      return _.createElement(_, {
        fill: _,
        _: _,
        _: _,
        size: _,
        sizeType: `diameter`,
        type: _,
      });
    }
    renderItems() {
      var {
          payload: _,
          iconSize: _,
          layout: _,
          formatter: _,
          inactiveColor: _,
          iconType: _,
        } = this.props,
        _ = {
          _: 0,
          _: 0,
          width: _,
          height: _,
        },
        _ = {
          display: _ === `horizontal` ? `inline-block` : `block`,
          marginRight: 10,
        },
        _ = {
          display: `inline-block`,
          verticalAlign: `middle`,
          marginRight: 4,
        };
      return _.map((_, _) => {
        var _ = _.formatter || _,
          _ = _({
            "recharts-legend-item": !0,
            [`legend-item-${_}`]: !0,
            inactive: _.inactive,
          });
        if (_.type === `none`) return null;
        var _ = _.inactive ? _ : _.color,
          _ = _ ? _(_.value, _, _) : _.value;
        return _.createElement(
          `li`,
          _(
            {
              className: _,
              style: _,
              key: `legend-item-${_}`,
            },
            _(this.props, _, _),
          ),
          _.createElement(
            _,
            {
              width: _,
              height: _,
              viewBox: _,
              style: _,
              "aria-label": `${_} legend icon`,
            },
            this.renderIcon(_, _),
          ),
          _.createElement(
            `span`,
            {
              className: `recharts-legend-item-text`,
              style: {
                color: _,
              },
            },
            _,
          ),
        );
      });
    }
    render() {
      var { payload: _, layout: _, align: _ } = this.props;
      if (!_ || !_.length) return null;
      var _ = {
        padding: 0,
        margin: 0,
        textAlign: _ === `horizontal` ? _ : `left`,
      };
      return _.createElement(
        `ul`,
        {
          className: `recharts-default-legend`,
          style: _,
        },
        this.renderItems(),
      );
    }
  };
(_(_, `displayName`, `Legend`),
  _(_, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    inactiveColor: `#ccc`,
    layout: `horizontal`,
    verticalAlign: `middle`,
  }));
function _() {
  return _(_);
}
var _ = [`contextPayload`];
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
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
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
  return _.value;
}
function _(_) {
  var { contextPayload: _ } = _,
    _ = _(_, _),
    _ = _(_, _.payloadUniqBy, _),
    _ = _(
      _({}, _),
      {},
      {
        payload: _,
      },
    );
  return _.isValidElement(_.content)
    ? _.cloneElement(_.content, _)
    : typeof _.content == `function`
      ? _.createElement(_.content, _)
      : _.createElement(_, _);
}
function _(_, _, _, _, _, _) {
  var { layout: _, align: _, verticalAlign: _ } = _,
    _,
    _;
  return (
    (_ &&
      ((_.left !== void 0 && _.left !== null) ||
        (_.right !== void 0 && _.right !== null))) ||
      (_ =
        _ === `center` && _ === `vertical`
          ? {
              left: ((_ || 0) - _.width) / 2,
            }
          : _ === `right`
            ? {
                right: (_ && _.right) || 0,
              }
            : {
                left: (_ && _.left) || 0,
              }),
    (_ &&
      ((_.top !== void 0 && _.top !== null) ||
        (_.bottom !== void 0 && _.bottom !== null))) ||
      (_ =
        _ === `middle`
          ? {
              top: ((_ || 0) - _.height) / 2,
            }
          : _ === `bottom`
            ? {
                bottom: (_ && _.bottom) || 0,
              }
            : {
                top: (_ && _.top) || 0,
              }),
    _(_({}, _), _)
  );
}
function _(_) {
  var _ = _();
  return (
    (0, _.useEffect)(() => {
      _(_(_));
    }, [_, _]),
    null
  );
}
function _(_) {
  var _ = _();
  return (
    (0, _.useEffect)(
      () => (
        _(_(_)),
        () => {
          _(
            _({
              width: 0,
              height: 0,
            }),
          );
        }
      ),
      [_, _],
    ),
    null
  );
}
function _(_) {
  var _ = _(),
    _ = _(),
    _ = _(),
    { width: _, height: _, wrapperStyle: _, portal: _ } = _,
    [_, _] = _([_]),
    _ = _(),
    _ = _();
  if (_ == null || _ == null) return null;
  var _ = _ - (_.left || 0) - (_.right || 0),
    _ = _.getWidthOrHeight(_.layout, _, _, _),
    _ = _
      ? _
      : _(
          _(
            {
              position: `absolute`,
              width: _?.width || _ || `auto`,
              height: _?.height || _ || `auto`,
            },
            _(_, _, _, _, _, _),
          ),
          _,
        ),
    _ = _ ?? _;
  if (_ == null) return null;
  var _ = _.createElement(
    `div`,
    {
      className: `recharts-legend-wrapper`,
      style: _,
      ref: _,
    },
    _.createElement(_, {
      layout: _.layout,
      align: _.align,
      verticalAlign: _.verticalAlign,
      itemSorter: _.itemSorter,
    }),
    _.createElement(_, {
      width: _.width,
      height: _.height,
    }),
    _.createElement(
      _,
      _({}, _, _, {
        margin: _,
        chartWidth: _,
        chartHeight: _,
        contextPayload: _,
      }),
    ),
  );
  return (0, _.createPortal)(_, _);
}
var _ = class extends _.PureComponent {
  static getWidthOrHeight(_, _, _, _) {
    return _ === `vertical` && _(_)
      ? {
          height: _,
        }
      : _ === `horizontal`
        ? {
            width: _ || _,
          }
        : null;
  }
  render() {
    return _.createElement(_, this.props);
  }
};
(_(_, `displayName`, `Legend`),
  _(_, `defaultProps`, {
    align: `center`,
    iconSize: 14,
    itemSorter: `value`,
    layout: `horizontal`,
    verticalAlign: `bottom`,
  }));
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
var _ = (_) => {
  var { _: _, _: _, _, className: _ } = _,
    _ = _(`recharts-dot`, _);
  return _ === +_ && _ === +_ && _ === +_
    ? _.createElement(
        `circle`,
        _({}, _(_), _(_), {
          className: _,
          _: _,
          _: _,
          _,
        }),
      )
    : null;
};
function _(_, _) {
  var _ = Object.keys(_);
  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(_);
    (_ &&
      (_ = _.filter(function (_) {
        return Object.getOwnPropertyDescriptor(_, _).enumerable;
      })),
      _.push.apply(_, _));
  }
  return _;
}
function _(_) {
  for (var _ = 1; _ < arguments.length; _++) {
    var _ = arguments[_] == null ? {} : arguments[_];
    _ % 2
      ? _(Object(_), !0).forEach(function (_) {
          _(_, _, _[_]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
        : _(Object(_)).forEach(function (_) {
            Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
          });
  }
  return _;
}
function _(_, _, _) {
  return (
    (_ = _(_)) in _
      ? Object.defineProperty(_, _, {
          value: _,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (_[_] = _),
    _
  );
}
function _(_) {
  var _ = _(_, `string`);
  return typeof _ == `symbol` ? _ : _ + ``;
}
function _(_, _) {
  if (typeof _ != `object` || !_) return _;
  var _ = _[Symbol.toPrimitive];
  if (_ !== void 0) {
    var _ = _.call(_, _ || `default`);
    if (typeof _ != `object`) return _;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (_ === `string` ? String : Number)(_);
}
var _ = (_) => {
  var { point: _, childIndex: _, mainColor: _, activeDot: _, dataKey: _ } = _;
  if (_ === !1 || _._ == null || _._ == null) return null;
  var _ = _(
      _(
        {
          index: _,
          dataKey: _,
          _: _._,
          _: _._,
          _: 4,
          fill: _ ?? `none`,
          strokeWidth: 2,
          stroke: `#fff`,
          payload: _.payload,
          value: _.value,
        },
        _(_),
      ),
      _(_),
    ),
    _ = (0, _.isValidElement)(_)
      ? (0, _.cloneElement)(_, _)
      : typeof _ == `function`
        ? _(_)
        : _.createElement(_, _);
  return _.createElement(
    _,
    {
      className: `recharts-active-dot`,
    },
    _,
  );
};
function _(_) {
  var { points: _, mainColor: _, activeDot: _, itemDataKey: _ } = _,
    _ = _(_),
    _ = _();
  if (_ == null || _ == null) return null;
  var _ = _.find((_) => _.includes(_.payload));
  return _(_)
    ? null
    : _({
        point: _,
        childIndex: Number(_),
        mainColor: _,
        dataKey: _,
        activeDot: _,
      });
}
var _ = [`dangerouslySetInnerHTML`, `ticks`],
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
