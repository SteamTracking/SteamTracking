import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~e53a8c8667.js";
import { _, _ } from "./chunk~cfd048ddd7.js";
import { _, _ } from "./chunk~6e8a72cfb5.js";
import { _, _ } from "./chunk~e8ef2e6942.js";
import { _ } from "./chunk~5412a9f1de.js";
import { _ } from "./chunk~93195fc4a9.js";
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
} from "./chunk~cfb555d6e5.js";
import { _ } from "./chunk~008c00a198.js";
import { _, _, _, _ } from "./chunk~bb87983663.js";
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
} from "./main.js";
var _ = _(_());
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
var _ = (_, _, _, _, _, _, _) => {
    var { _: _, _: _, _: _, _: _ } = _;
    if (_ == null || _ == null) return null;
    var _ = _({
        _: _,
        _: _,
      }),
      _ = {
        _: _
          ? _._.apply(_, {
              position: `start`,
            })
          : _._.rangeMin,
        _: _
          ? _._.apply(_, {
              position: `start`,
            })
          : _._.rangeMin,
      },
      _ = {
        _: _
          ? _._.apply(_, {
              position: `end`,
            })
          : _._.rangeMax,
        _: _
          ? _._.apply(_, {
              position: `end`,
            })
          : _._.rangeMax,
      };
    return _.ifOverflow === `discard` && (!_.isInRange(_) || !_.isInRange(_))
      ? null
      : _(_, _);
  },
  _ = (_, _) =>
    _.isValidElement(_)
      ? _.cloneElement(_, _)
      : typeof _ == `function`
        ? _(_)
        : _.createElement(
            _,
            _({}, _, {
              className: `recharts-reference-area-rect`,
            }),
          );
function _(_) {
  var _ = _();
  return (
    (0, _.useEffect)(
      () => (
        _(_(_)),
        () => {
          _(_(_));
        }
      ),
    ),
    null
  );
}
function _(_) {
  var {
      _: _,
      _: _,
      _: _,
      _: _,
      className: _,
      shape: _,
      xAxisId: _,
      yAxisId: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _((_) => _(_, `xAxis`, _, _)),
    _ = _((_) => _(_, `yAxis`, _, _));
  if (_ == null || !_ == null) return null;
  var _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_);
  if (!_ && !_ && !_ && !_ && !_) return null;
  var _ = _(_, _, _, _, _, _, _);
  if (!_ && !_) return null;
  var _ = _.ifOverflow === `hidden` ? `url(#${_})` : void 0;
  return _.createElement(
    _,
    {
      className: _(`recharts-reference-area`, _),
    },
    _(
      _,
      _(
        _(
          {
            clipPath: _,
          },
          _(_),
        ),
        _,
      ),
    ),
    _.createElement(
      _,
      _,
      _.createElement(_, {
        label: _.label,
      }),
      _.children,
    ),
  );
}
function _(_) {
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(_, {
      yAxisId: _.yAxisId,
      xAxisId: _.xAxisId,
      ifOverflow: _.ifOverflow,
      _: _._,
      _: _._,
      _: _._,
      _: _._,
    }),
    _.createElement(_, _),
  );
}
var _ = class extends _.Component {
  render() {
    return _.createElement(_, this.props);
  }
};
(_(_, `displayName`, `ReferenceArea`),
  _(_, `defaultProps`, {
    ifOverflow: `discard`,
    xAxisId: 0,
    yAxisId: 0,
    _: 10,
    fill: `#ccc`,
    fillOpacity: 0.5,
    stroke: `none`,
    strokeWidth: 1,
  }));
var _ = (_, _, _, _) => _(_, `xAxis`, _, _),
  _ = (_, _, _, _) => _(_, `xAxis`, _, _),
  _ = (_, _, _, _) => _(_, `yAxis`, _, _),
  _ = (_, _, _, _) => _(_, `yAxis`, _, _),
  _ = _([_, _, _, _, _], (_, _, _, _, _) =>
    _(_, `xAxis`) ? _(_, _, !1) : _(_, _, !1),
  ),
  _ = (_, _, _, _, _) => _;
function _(_) {
  return _.type === `line`;
}
var _ = _([_, _], (_, _) => _.filter(_).find((_) => _._ === _)),
  _ = _([_, _, _, _, _, _, _, _], (_, _, _, _, _, _, _, _) => {
    var { chartData: _, dataStartIndex: _, dataEndIndex: _ } = _;
    if (
      _ != null &&
      _ != null &&
      _ != null &&
      _ != null &&
      _ != null &&
      _.length !== 0 &&
      _.length !== 0 &&
      _ != null
    ) {
      var { dataKey: _, data: _ } = _,
        _ = _ != null && _.length > 0 ? _ : _?.slice(_, _ + 1);
      if (_ != null)
        return _({
          layout: _,
          xAxis: _,
          yAxis: _,
          xAxisTicks: _,
          yAxisTicks: _,
          dataKey: _,
          bandSize: _,
          displayedData: _,
        });
    }
  });
function _(_) {
  var _ = _(_),
    _ = 3,
    _ = 2;
  if (_ != null) {
    var { _: _, strokeWidth: _ } = _,
      _ = Number(_),
      _ = Number(_);
    return (
      (Number.isNaN(_) || _ < 0) && (_ = _),
      (Number.isNaN(_) || _ < 0) && (_ = _),
      {
        _: _,
        strokeWidth: _,
      }
    );
  }
  return {
    _: _,
    strokeWidth: _,
  };
}
var _ = [`id`],
  _ = [`type`, `layout`, `connectNulls`, `needClip`],
  _ = [
    `activeDot`,
    `animateNewValues`,
    `animationBegin`,
    `animationDuration`,
    `animationEasing`,
    `connectNulls`,
    `dot`,
    `hide`,
    `isAnimationActive`,
    `label`,
    `legendType`,
    `xAxisId`,
    `yAxisId`,
    `id`,
  ];
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
  var { dataKey: _, name: _, stroke: _, legendType: _, hide: _ } = _;
  return [
    {
      inactive: _,
      dataKey: _,
      type: _,
      color: _,
      value: _(_, _),
      payload: _,
    },
  ];
};
function _(_) {
  var {
    dataKey: _,
    data: _,
    stroke: _,
    strokeWidth: _,
    fill: _,
    name: _,
    hide: _,
    unit: _,
  } = _;
  return {
    dataDefinedOnItem: _,
    positions: void 0,
    settings: {
      stroke: _,
      strokeWidth: _,
      fill: _,
      dataKey: _,
      nameKey: void 0,
      name: _(_, _),
      hide: _,
      type: _.tooltipType,
      color: _.stroke,
      unit: _,
    },
  };
}
var _ = (_, _) => `${_}px ${_ - _}px`;
function _(_, _) {
  for (var _ = _.length % 2 == 0 ? _ : [..._, 0], _ = [], _ = 0; _ < _; ++_)
    _ = [..._, ..._];
  return _;
}
var _ = (_, _, _) => {
  var _ = _.reduce((_, _) => _ + _);
  if (!_) return _(_, _);
  for (
    var _ = Math.floor(_ / _), _ = _ % _, _ = _ - _, _ = [], _ = 0, _ = 0;
    _ < _.length;
    _ += _[_], ++_
  )
    if (_ + _[_] > _) {
      _ = [..._.slice(0, _), _ - _];
      break;
    }
  var _ = _.length % 2 == 0 ? [0, _] : [_];
  return [..._(_, _), ..._, ..._].map((_) => `${_}px`).join(`, `);
};
function _(_, _) {
  var _;
  if (_.isValidElement(_)) _ = _.cloneElement(_, _);
  else if (typeof _ == `function`) _ = _(_);
  else {
    var _ = _(`recharts-line-dot`, typeof _ == `boolean` ? `` : _.className);
    _ = _.createElement(
      _,
      _({}, _, {
        className: _,
      }),
    );
  }
  return _;
}
function _(_, _) {
  return _ == null ? !1 : _ ? !0 : _.length === 1;
}
function _(_) {
  var { clipPathId: _, points: _, props: _ } = _,
    { dot: _, dataKey: _, needClip: _ } = _;
  if (!_(_, _)) return null;
  var { _: _ } = _,
    _ = _(_, _),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _.map((_, _) =>
      _(
        _,
        _(
          _(
            _(
              {
                key: `dot-${_}`,
                _: 3,
              },
              _,
            ),
            _,
          ),
          {},
          {
            index: _,
            _: _._,
            _: _._,
            dataKey: _,
            value: _.value,
            payload: _.payload,
            points: _,
          },
        ),
      ),
    ),
    _ = {
      clipPath: _ ? `url(#clipPath-${_ ? `` : `dots-`}${_})` : void 0,
    };
  return _.createElement(
    _,
    _(
      {
        className: `recharts-line-dots`,
        key: `dots`,
      },
      _,
    ),
    _,
  );
}
function _(_) {
  var { showLabels: _, children: _, points: _ } = _,
    _ = (0, _.useMemo)(
      () =>
        _?.map((_) => {
          var _ = {
            _: _._,
            _: _._,
            width: 0,
            height: 0,
          };
          return _(
            _({}, _),
            {},
            {
              value: _.value,
              payload: _.payload,
              viewBox: _,
              parentViewBox: void 0,
              fill: void 0,
            },
          );
        }),
      [_],
    );
  return _.createElement(
    _,
    {
      value: _ ? _ : null,
    },
    _,
  );
}
function _(_) {
  var {
      clipPathId: _,
      pathRef: _,
      points: _,
      strokeDasharray: _,
      props: _,
    } = _,
    { type: _, layout: _, connectNulls: _, needClip: _ } = _,
    _ = _(_, _),
    _ = _(
      _({}, _(_)),
      {},
      {
        fill: `none`,
        className: `recharts-line-curve`,
        clipPath: _ ? `url(#clipPath-${_})` : void 0,
        points: _,
        type: _,
        layout: _,
        connectNulls: _,
        strokeDasharray: _ ?? _.strokeDasharray,
      },
    );
  return _.createElement(
    _.Fragment,
    null,
    _?.length > 1 &&
      _.createElement(
        _,
        _({}, _, {
          pathRef: _,
        }),
      ),
    _.createElement(_, {
      points: _,
      clipPathId: _,
      props: _,
    }),
  );
}
function _(_) {
  try {
    return (_ && _.getTotalLength && _.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}
function _(_) {
  var {
      clipPathId: _,
      props: _,
      pathRef: _,
      previousPointsRef: _,
      longestAnimatedLengthRef: _,
    } = _,
    {
      points: _,
      strokeDasharray: _,
      isAnimationActive: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      animateNewValues: _,
      width: _,
      height: _,
      onAnimationEnd: _,
      onAnimationStart: _,
    } = _,
    _ = _.current,
    _ = _(_, `recharts-line-`),
    [_, _] = (0, _.useState)(!1),
    _ = !_,
    _ = (0, _.useCallback)(() => {
      (typeof _ == `function` && _(), _(!1));
    }, [_]),
    _ = (0, _.useCallback)(() => {
      (typeof _ == `function` && _(), _(!0));
    }, [_]),
    _ = _(_.current),
    _ = _.current;
  return _.createElement(
    _,
    {
      points: _,
      showLabels: _,
    },
    _.children,
    _.createElement(
      _,
      {
        animationId: _,
        begin: _,
        duration: _,
        isActive: _,
        easing: _,
        onAnimationEnd: _,
        onAnimationStart: _,
        key: _,
      },
      (_) => {
        var _ = _(_, _ + _, _),
          _ = Math.min(_, _),
          _ = _
            ? _
              ? _(
                  _,
                  _,
                  `${_}`.split(/[,\s]+/gim).map((_) => parseFloat(_)),
                )
              : _(_, _)
            : _ == null
              ? void 0
              : String(_);
        if (_) {
          var _ = _.length / _.length,
            _ =
              _ === 1
                ? _
                : _.map((_, _) => {
                    var _ = Math.floor(_ * _);
                    if (_[_]) {
                      var _ = _[_];
                      return _(
                        _({}, _),
                        {},
                        {
                          _: _(_._, _._, _),
                          _: _(_._, _._, _),
                        },
                      );
                    }
                    return _
                      ? _(
                          _({}, _),
                          {},
                          {
                            _: _(_ * 2, _._, _),
                            _: _(_ / 2, _._, _),
                          },
                        )
                      : _(
                          _({}, _),
                          {},
                          {
                            _: _._,
                            _: _._,
                          },
                        );
                  });
          return (
            (_.current = _),
            _.createElement(_, {
              props: _,
              points: _,
              clipPathId: _,
              pathRef: _,
              strokeDasharray: _,
            })
          );
        }
        return (
          _ > 0 && _ > 0 && ((_.current = _), (_.current = _)),
          _.createElement(_, {
            props: _,
            points: _,
            clipPathId: _,
            pathRef: _,
            strokeDasharray: _,
          })
        );
      },
    ),
    _.createElement(_, {
      label: _.label,
    }),
  );
}
function _(_) {
  var { clipPathId: _, props: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(0),
    _ = (0, _.useRef)(null);
  return _.createElement(_, {
    props: _,
    clipPathId: _,
    previousPointsRef: _,
    longestAnimatedLengthRef: _,
    pathRef: _,
  });
}
var _ = (_, _) => ({
    _: _._,
    _: _._,
    value: _.value,
    errorVal: _(_.payload, _),
  }),
  _ = class extends _.Component {
    render() {
      var {
        hide: _,
        dot: _,
        points: _,
        className: _,
        xAxisId: _,
        yAxisId: _,
        top: _,
        left: _,
        width: _,
        height: _,
        _: _,
        needClip: _,
      } = this.props;
      if (_) return null;
      var _ = _(`recharts-line`, _),
        _ = _,
        { _: _, strokeWidth: _ } = _(_),
        _ = _(_),
        _ = _ * 2 + _;
      return _.createElement(
        _.Fragment,
        null,
        _.createElement(
          _,
          {
            className: _,
          },
          _ &&
            _.createElement(
              `defs`,
              null,
              _.createElement(_, {
                clipPathId: _,
                xAxisId: _,
                yAxisId: _,
              }),
              !_ &&
                _.createElement(
                  `clipPath`,
                  {
                    _: `clipPath-dots-${_}`,
                  },
                  _.createElement(`rect`, {
                    _: _ - _ / 2,
                    _: _ - _ / 2,
                    width: _ + _,
                    height: _ + _,
                  }),
                ),
            ),
          _.createElement(
            _,
            {
              xAxisId: _,
              yAxisId: _,
              data: _,
              dataPointFormatter: _,
              errorBarOffset: 0,
            },
            _.createElement(_, {
              props: this.props,
              clipPathId: _,
            }),
          ),
        ),
        _.createElement(_, {
          activeDot: this.props.activeDot,
          points: _,
          mainColor: this.props.stroke,
          itemDataKey: this.props.dataKey,
        }),
      );
    }
  },
  _ = {
    activeDot: !0,
    animateNewValues: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !0,
    fill: `#fff`,
    hide: !1,
    isAnimationActive: !_.isSsr,
    label: !1,
    legendType: `line`,
    stroke: `#3182bd`,
    strokeWidth: 1,
    xAxisId: 0,
    yAxisId: 0,
  };
function _(_) {
  var _ = _(_, _),
    {
      activeDot: _,
      animateNewValues: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      connectNulls: _,
      dot: _,
      hide: _,
      isAnimationActive: _,
      label: _,
      legendType: _,
      xAxisId: _,
      yAxisId: _,
      _: _,
    } = _,
    _ = _(_, _),
    { needClip: _ } = _(_, _),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _((_) => _(_, _, _, _, _));
  if ((_ !== `horizontal` && _ !== `vertical`) || _ == null || _ == null)
    return null;
  var { height: _, width: _, _: _, _: _ } = _;
  return _.createElement(
    _,
    _({}, _, {
      _: _,
      connectNulls: _,
      dot: _,
      activeDot: _,
      animateNewValues: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      isAnimationActive: _,
      hide: _,
      label: _,
      legendType: _,
      xAxisId: _,
      yAxisId: _,
      points: _,
      layout: _,
      height: _,
      width: _,
      left: _,
      top: _,
      needClip: _,
    }),
  );
}
function _(_) {
  var {
    layout: _,
    xAxis: _,
    yAxis: _,
    xAxisTicks: _,
    yAxisTicks: _,
    dataKey: _,
    bandSize: _,
    displayedData: _,
  } = _;
  return _.map((_, _) => {
    var _ = _(_, _);
    if (_ === `horizontal`)
      return {
        _: _({
          axis: _,
          ticks: _,
          bandSize: _,
          entry: _,
          index: _,
        }),
        _: _(_) ? null : _.scale(_),
        value: _,
        payload: _,
      };
    var _ = _(_) ? null : _.scale(_),
      _ = _({
        axis: _,
        ticks: _,
        bandSize: _,
        entry: _,
        index: _,
      });
    return _ == null || _ == null
      ? null
      : {
          _: _,
          _: _,
          value: _,
          payload: _,
        };
  }).filter(Boolean);
}
function _(_) {
  var _ = _(_, _),
    _ = _();
  return _.createElement(
    _,
    {
      _: _._,
      type: `line`,
    },
    (_) =>
      _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          legendPayload: _(_),
        }),
        _.createElement(_, {
          _: _,
          args: _,
        }),
        _.createElement(_, {
          type: `line`,
          _: _,
          data: _.data,
          xAxisId: _.xAxisId,
          yAxisId: _.yAxisId,
          zAxisId: 0,
          dataKey: _.dataKey,
          hide: _.hide,
          isPanorama: _,
        }),
        _.createElement(
          _,
          _({}, _, {
            _: _,
          }),
        ),
      ),
  );
}
var _ = _.memo(_);
_.displayName = `Line`;
var _ = (_, _, _, _) => _(_, `xAxis`, _, _),
  _ = (_, _, _, _) => _(_, `xAxis`, _, _),
  _ = (_, _, _, _) => _(_, `yAxis`, _, _),
  _ = (_, _, _, _) => _(_, `yAxis`, _, _),
  _ = _([_, _, _, _, _], (_, _, _, _, _) =>
    _(_, `xAxis`) ? _(_, _, !1) : _(_, _, !1),
  ),
  _ = _([_, (_, _, _, _, _) => _], (_, _) =>
    _.filter((_) => _.type === `area`).find((_) => _._ === _),
  ),
  _ = _(
    [
      _,
      _,
      _,
      _,
      _,
      (_, _, _, _, _) => {
        var _ = _(_, _, _, _, _);
        if (_ != null) {
          var _ = _(_),
            _ = _(_, `xAxis`) ? _(_, `yAxis`, _, _) : _(_, `xAxis`, _, _);
          if (_ != null) {
            var { stackId: _ } = _,
              _ = _(_);
            if (_ != null && _ != null)
              return _[_]?.stackedData?.find((_) => _.key === _);
          }
        }
      },
      _,
      _,
      _,
    ],
    (_, _, _, _, _, _, _, _, _) => {
      var { chartData: _, dataStartIndex: _, dataEndIndex: _ } = _;
      if (
        !(
          _ == null ||
          (_ !== `horizontal` && _ !== `vertical`) ||
          _ == null ||
          _ == null ||
          _ == null ||
          _ == null ||
          _.length === 0 ||
          _.length === 0 ||
          _ == null
        )
      ) {
        var { data: _ } = _,
          _ = _ && _.length > 0 ? _ : _?.slice(_, _ + 1);
        if (_ != null)
          return _({
            layout: _,
            xAxis: _,
            yAxis: _,
            xAxisTicks: _,
            yAxisTicks: _,
            dataStartIndex: _,
            areaSettings: _,
            stackedData: _,
            displayedData: _,
            chartBaseValue: void 0,
            bandSize: _,
          });
      }
    },
  ),
  _ = [`id`],
  _ = [
    `activeDot`,
    `animationBegin`,
    `animationDuration`,
    `animationEasing`,
    `connectNulls`,
    `dot`,
    `fill`,
    `fillOpacity`,
    `hide`,
    `isAnimationActive`,
    `legendType`,
    `stroke`,
    `xAxisId`,
    `yAxisId`,
  ];
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
  return _ && _ !== `none` ? _ : _;
}
var _ = (_) => {
  var { dataKey: _, name: _, stroke: _, fill: _, legendType: _, hide: _ } = _;
  return [
    {
      inactive: _,
      dataKey: _,
      type: _,
      color: _(_, _),
      value: _(_, _),
      payload: _,
    },
  ];
};
function _(_) {
  var {
    dataKey: _,
    data: _,
    stroke: _,
    strokeWidth: _,
    fill: _,
    name: _,
    hide: _,
    unit: _,
  } = _;
  return {
    dataDefinedOnItem: _,
    positions: void 0,
    settings: {
      stroke: _,
      strokeWidth: _,
      fill: _,
      dataKey: _,
      nameKey: void 0,
      name: _(_, _),
      hide: _,
      type: _.tooltipType,
      color: _(_, _),
      unit: _,
    },
  };
}
var _ = (_, _) => {
  var _;
  if (_.isValidElement(_)) _ = _.cloneElement(_, _);
  else if (typeof _ == `function`) _ = _(_);
  else {
    var _ = _(`recharts-area-dot`, typeof _ == `boolean` ? `` : _.className);
    _ = _.createElement(
      _,
      _({}, _, {
        className: _,
      }),
    );
  }
  return _;
};
function _(_, _) {
  return _ == null ? !1 : _ ? !0 : _.length === 1;
}
function _(_) {
  var { clipPathId: _, points: _, props: _ } = _,
    { needClip: _, dot: _, dataKey: _ } = _;
  if (!_(_, _)) return null;
  var _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _.map((_, _) =>
      _(
        _,
        _(
          _(
            _(
              {
                key: `dot-${_}`,
                _: 3,
              },
              _,
            ),
            _,
          ),
          {},
          {
            index: _,
            _: _._,
            _: _._,
            dataKey: _,
            value: _.value,
            payload: _.payload,
            points: _,
          },
        ),
      ),
    ),
    _ = {
      clipPath: _ ? `url(#clipPath-${_ ? `` : `dots-`}${_})` : void 0,
    };
  return _.createElement(
    _,
    _(
      {
        className: `recharts-area-dots`,
      },
      _,
    ),
    _,
  );
}
function _(_) {
  var { showLabels: _, children: _, points: _ } = _,
    _ = _.map((_) => {
      var _ = {
        _: _._,
        _: _._,
        width: 0,
        height: 0,
      };
      return _(
        _({}, _),
        {},
        {
          value: _.value,
          payload: _.payload,
          parentViewBox: void 0,
          viewBox: _,
          fill: void 0,
        },
      );
    });
  return _.createElement(
    _,
    {
      value: _ ? _ : null,
    },
    _,
  );
}
function _(_) {
  var { points: _, baseLine: _, needClip: _, clipPathId: _, props: _ } = _,
    { layout: _, type: _, stroke: _, connectNulls: _, isRange: _ } = _,
    { _: _ } = _,
    _ = _(_, _),
    _ = _(_);
  return _.createElement(
    _.Fragment,
    null,
    _?.length > 1 &&
      _.createElement(
        _,
        {
          clipPath: _ ? `url(#clipPath-${_})` : void 0,
        },
        _.createElement(
          _,
          _({}, _, {
            _: _,
            points: _,
            connectNulls: _,
            type: _,
            baseLine: _,
            layout: _,
            stroke: `none`,
            className: `recharts-area-area`,
          }),
        ),
        _ !== `none` &&
          _.createElement(
            _,
            _({}, _, {
              className: `recharts-area-curve`,
              layout: _,
              type: _,
              connectNulls: _,
              fill: `none`,
              points: _,
            }),
          ),
        _ !== `none` &&
          _ &&
          _.createElement(
            _,
            _({}, _, {
              className: `recharts-area-curve`,
              layout: _,
              type: _,
              connectNulls: _,
              fill: `none`,
              points: _,
            }),
          ),
      ),
    _.createElement(_, {
      points: _,
      props: _,
      clipPathId: _,
    }),
  );
}
function _(_) {
  var { alpha: _, baseLine: _, points: _, strokeWidth: _ } = _,
    _ = _[0]._,
    _ = _[_.length - 1]._;
  if (!_(_) || !_(_)) return null;
  var _ = _ * Math.abs(_ - _),
    _ = Math.max(..._.map((_) => _._ || 0));
  return (
    _(_)
      ? (_ = Math.max(_, _))
      : _ &&
        Array.isArray(_) &&
        _.length &&
        (_ = Math.max(..._.map((_) => _._ || 0), _)),
    _(_)
      ? _.createElement(`rect`, {
          _: 0,
          _: _ < _ ? _ : _ - _,
          width: _ + (_ ? parseInt(`${_}`, 10) : 1),
          height: Math.floor(_),
        })
      : null
  );
}
function _(_) {
  var { alpha: _, baseLine: _, points: _, strokeWidth: _ } = _,
    _ = _[0]._,
    _ = _[_.length - 1]._;
  if (!_(_) || !_(_)) return null;
  var _ = _ * Math.abs(_ - _),
    _ = Math.max(..._.map((_) => _._ || 0));
  return (
    _(_)
      ? (_ = Math.max(_, _))
      : _ &&
        Array.isArray(_) &&
        _.length &&
        (_ = Math.max(..._.map((_) => _._ || 0), _)),
    _(_)
      ? _.createElement(`rect`, {
          _: _ < _ ? _ : _ - _,
          _: 0,
          width: _,
          height: Math.floor(_ + (_ ? parseInt(`${_}`, 10) : 1)),
        })
      : null
  );
}
function _(_) {
  var { alpha: _, layout: _, points: _, baseLine: _, strokeWidth: _ } = _;
  return _ === `vertical`
    ? _.createElement(_, {
        alpha: _,
        points: _,
        baseLine: _,
        strokeWidth: _,
      })
    : _.createElement(_, {
        alpha: _,
        points: _,
        baseLine: _,
        strokeWidth: _,
      });
}
function _(_) {
  var {
      needClip: _,
      clipPathId: _,
      props: _,
      previousPointsRef: _,
      previousBaselineRef: _,
    } = _,
    {
      points: _,
      baseLine: _,
      isAnimationActive: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      onAnimationStart: _,
      onAnimationEnd: _,
    } = _,
    _ = _(_, `recharts-area-`),
    [_, _] = (0, _.useState)(!1),
    _ = !_,
    _ = (0, _.useCallback)(() => {
      (typeof _ == `function` && _(), _(!1));
    }, [_]),
    _ = (0, _.useCallback)(() => {
      (typeof _ == `function` && _(), _(!0));
    }, [_]),
    _ = _.current,
    _ = _.current;
  return _.createElement(
    _,
    {
      showLabels: _,
      points: _,
    },
    _.children,
    _.createElement(
      _,
      {
        animationId: _,
        begin: _,
        duration: _,
        isActive: _,
        easing: _,
        onAnimationEnd: _,
        onAnimationStart: _,
        key: _,
      },
      (_) => {
        if (_) {
          var _ = _.length / _.length,
            _ =
              _ === 1
                ? _
                : _.map((_, _) => {
                    var _ = Math.floor(_ * _);
                    if (_[_]) {
                      var _ = _[_];
                      return _(
                        _({}, _),
                        {},
                        {
                          _: _(_._, _._, _),
                          _: _(_._, _._, _),
                        },
                      );
                    }
                    return _;
                  }),
            _ = _(_)
              ? _(_, _, _)
              : _(_) || _(_)
                ? _(_, 0, _)
                : _.map((_, _) => {
                    var _ = Math.floor(_ * _);
                    if (Array.isArray(_) && _[_]) {
                      var _ = _[_];
                      return _(
                        _({}, _),
                        {},
                        {
                          _: _(_._, _._, _),
                          _: _(_._, _._, _),
                        },
                      );
                    }
                    return _;
                  });
          return (
            _ > 0 && ((_.current = _), (_.current = _)),
            _.createElement(_, {
              points: _,
              baseLine: _,
              needClip: _,
              clipPathId: _,
              props: _,
            })
          );
        }
        return (
          _ > 0 && ((_.current = _), (_.current = _)),
          _.createElement(
            _,
            null,
            _ &&
              _.createElement(
                `defs`,
                null,
                _.createElement(
                  `clipPath`,
                  {
                    _: `animationClipPath-${_}`,
                  },
                  _.createElement(_, {
                    alpha: _,
                    points: _,
                    baseLine: _,
                    layout: _.layout,
                    strokeWidth: _.strokeWidth,
                  }),
                ),
              ),
            _.createElement(
              _,
              {
                clipPath: `url(#animationClipPath-${_})`,
              },
              _.createElement(_, {
                points: _,
                baseLine: _,
                needClip: _,
                clipPathId: _,
                props: _,
              }),
            ),
          )
        );
      },
    ),
    _.createElement(_, {
      label: _.label,
    }),
  );
}
function _(_) {
  var { needClip: _, clipPathId: _, props: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)();
  return _.createElement(_, {
    needClip: _,
    clipPathId: _,
    props: _,
    previousPointsRef: _,
    previousBaselineRef: _,
  });
}
var _ = class extends _.PureComponent {
    render() {
      var {
        hide: _,
        dot: _,
        points: _,
        className: _,
        top: _,
        left: _,
        needClip: _,
        xAxisId: _,
        yAxisId: _,
        width: _,
        height: _,
        _: _,
        baseLine: _,
      } = this.props;
      if (_) return null;
      var _ = _(`recharts-area`, _),
        _ = _,
        { _: _, strokeWidth: _ } = _(_),
        _ = _(_),
        _ = _ * 2 + _;
      return _.createElement(
        _.Fragment,
        null,
        _.createElement(
          _,
          {
            className: _,
          },
          _ &&
            _.createElement(
              `defs`,
              null,
              _.createElement(_, {
                clipPathId: _,
                xAxisId: _,
                yAxisId: _,
              }),
              !_ &&
                _.createElement(
                  `clipPath`,
                  {
                    _: `clipPath-dots-${_}`,
                  },
                  _.createElement(`rect`, {
                    _: _ - _ / 2,
                    _: _ - _ / 2,
                    width: _ + _,
                    height: _ + _,
                  }),
                ),
            ),
          _.createElement(_, {
            needClip: _,
            clipPathId: _,
            props: this.props,
          }),
        ),
        _.createElement(_, {
          points: _,
          mainColor: _(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        }),
        this.props.isRange &&
          Array.isArray(_) &&
          _.createElement(_, {
            points: _,
            mainColor: _(this.props.stroke, this.props.fill),
            itemDataKey: this.props.dataKey,
            activeDot: this.props.activeDot,
          }),
      );
    }
  },
  _ = {
    activeDot: !0,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
    connectNulls: !1,
    dot: !1,
    fill: `#3182bd`,
    fillOpacity: 0.6,
    hide: !1,
    isAnimationActive: !_.isSsr,
    legendType: `line`,
    stroke: `#3182bd`,
    xAxisId: 0,
    yAxisId: 0,
  };
function _(_) {
  var _ = _(_, _),
    {
      activeDot: _,
      animationBegin: _,
      animationDuration: _,
      animationEasing: _,
      connectNulls: _,
      dot: _,
      fill: _,
      fillOpacity: _,
      hide: _,
      isAnimationActive: _,
      legendType: _,
      stroke: _,
      xAxisId: _,
      yAxisId: _,
    } = _,
    _ = _(_, _),
    _ = _(),
    _ = _(),
    { needClip: _ } = _(_, _),
    _ = _(),
    { points: _, isRange: _, baseLine: _ } = _((_) => _(_, _, _, _, _._)) ?? {},
    _ = _();
  if (
    (_ !== `horizontal` && _ !== `vertical`) ||
    _ == null ||
    (_ !== `AreaChart` && _ !== `ComposedChart`)
  )
    return null;
  var { height: _, width: _, _: _, _: _ } = _;
  return !_ || !_.length
    ? null
    : _.createElement(
        _,
        _({}, _, {
          activeDot: _,
          animationBegin: _,
          animationDuration: _,
          animationEasing: _,
          baseLine: _,
          connectNulls: _,
          dot: _,
          fill: _,
          fillOpacity: _,
          height: _,
          hide: _,
          layout: _,
          isAnimationActive: _,
          isRange: _,
          legendType: _,
          needClip: _,
          points: _,
          stroke: _,
          width: _,
          left: _,
          top: _,
          xAxisId: _,
          yAxisId: _,
        }),
      );
}
var _ = (_, _, _, _, _) => {
  var _ = _ ?? _;
  if (_(_)) return _;
  var _ = _ === `horizontal` ? _ : _,
    _ = _.scale.domain();
  if (_.type === `number`) {
    var _ = Math.max(_[0], _[1]),
      _ = Math.min(_[0], _[1]);
    return _ === `dataMin`
      ? _
      : _ === `dataMax` || _ < 0
        ? _
        : Math.max(Math.min(_[0], _[1]), 0);
  }
  return _ === `dataMin` ? _[0] : _ === `dataMax` ? _[1] : _[0];
};
function _(_) {
  var {
      areaSettings: { connectNulls: _, baseValue: _, dataKey: _ },
      stackedData: _,
      layout: _,
      chartBaseValue: _,
      xAxis: _,
      yAxis: _,
      displayedData: _,
      dataStartIndex: _,
      xAxisTicks: _,
      yAxisTicks: _,
      bandSize: _,
    } = _,
    _ = _ && _.length,
    _ = _(_, _, _, _, _),
    _ = _ === `horizontal`,
    _ = !1,
    _ = _.map((_, _) => {
      var _;
      _
        ? (_ = _[_ + _])
        : ((_ = _(_, _)), Array.isArray(_) ? (_ = !0) : (_ = [_, _]));
      var _ = _[1] == null || (_ && !_ && _(_, _) == null);
      return _
        ? {
            _: _({
              axis: _,
              ticks: _,
              bandSize: _,
              entry: _,
              index: _,
            }),
            _: _ ? null : _.scale(_[1]),
            value: _,
            payload: _,
          }
        : {
            _: _ ? null : _.scale(_[1]),
            _: _({
              axis: _,
              ticks: _,
              bandSize: _,
              entry: _,
              index: _,
            }),
            value: _,
            payload: _,
          };
    });
  return {
    points: _,
    baseLine:
      _ || _
        ? _.map((_) => {
            var _ = Array.isArray(_.value) ? _.value[0] : null;
            return _
              ? {
                  _: _._,
                  _: _ != null && _._ != null ? _.scale(_) : null,
                  payload: _.payload,
                }
              : {
                  _: _ == null ? null : _.scale(_),
                  _: _._,
                  payload: _.payload,
                };
          })
        : _
          ? _.scale(_)
          : _.scale(_),
    isRange: _,
  };
}
function _(_) {
  var _ = _(_, _),
    _ = _();
  return _.createElement(
    _,
    {
      _: _._,
      type: `area`,
    },
    (_) =>
      _.createElement(
        _.Fragment,
        null,
        _.createElement(_, {
          legendPayload: _(_),
        }),
        _.createElement(_, {
          _: _,
          args: _,
        }),
        _.createElement(_, {
          type: `area`,
          _: _,
          data: _.data,
          dataKey: _.dataKey,
          xAxisId: _.xAxisId,
          yAxisId: _.yAxisId,
          zAxisId: 0,
          stackId: _(_.stackId),
          hide: _.hide,
          barSize: void 0,
          baseValue: _.baseValue,
          isPanorama: _,
          connectNulls: _.connectNulls,
        }),
        _.createElement(
          _,
          _({}, _, {
            _: _,
          }),
        ),
      ),
  );
}
var _ = _.memo(_);
_.displayName = `Area`;
var _ = [`axis`],
  _ = (0, _.forwardRef)((_, _) =>
    _.createElement(_, {
      chartName: `ComposedChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: _,
      tooltipPayloadSearcher: _,
      categoricalChartProps: _,
      ref: _,
    }),
  ),
  _ = _();
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    isAnimationActive: !1,
    content: (_) =>
      (0, _.jsx)(_, {
        background: `dull-7`,
        radius: `md`,
        padding: `2`,
        elevation: `1`,
        children: typeof _ == `function` ? _(_) : _,
      }),
  });
}
_.memo(function () {
  return (0, _.jsx)(_, {
    stroke: `#FFFFFF10`,
  });
});
function _(_) {
  let [_, _] = (0, _.useState)(null);
  return {
    props: {
      onMouseDown: (_, _) => {
        _.activeCoordinate &&
          (_([_, _]), _.preventDefault(), _.stopPropagation());
      },
      onMouseUp: (_, _) => {
        if (
          _ &&
          _.activeCoordinate &&
          _[0].activeCoordinate._ !== _.activeCoordinate._
        ) {
          let _ = _[0];
          _.activeCoordinate._ < _.activeCoordinate._
            ? _.onSelection(_, _)
            : _.onSelection(_, _);
        }
        _(null);
      },
      onMouseMove: _ ? (_) => _((_) => _ && [_[0], _]) : void 0,
    },
    activeDrag: _,
  };
}
function _(_) {
  let { dataKey: _, color: _, numPoints: _, ..._ } = _;
  return (0, _.jsx)(_, {
    dataKey: _,
    stroke: _,
    dot: _ === 1,
    strokeWidth: 2,
    yAxisId: `price`,
    isAnimationActive: !1,
    connectNulls: !0,
    ..._,
  });
}
function _(_) {
  let { scale: _, dataKey: _ } = _,
    _ = {
      dataKey: _,
      fill: `var(--color-blue-9)`,
      opacity: 0.25,
      yAxisId: `purchases`,
      isAnimationActive: !1,
    };
  return _ === `lifetime`
    ? (0, _.jsx)(_, {
        ..._,
        connectNulls: !0,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _() {
  typeof _ == `function`
    ? _({
        measureText: (_, _) => {
          let _ = _.toString(),
            _ = typeof _?.fontSize == `number` ? _.fontSize : 13;
          return {
            width: _.length * 8,
            height: _ * 1.3,
          };
        },
      })
    : console.error(
        `Cannot find configureTextMeasurement. Recharts not patched correctly for this context.`,
      );
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.webcookie || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            webcookie: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CEconMarket_IsMarketplaceAllowed_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.allowed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            allowed: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            reason: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            allowed_at_time: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamguard_required_days: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            forms_requested: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            forms_require_verification: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            new_device_cooldown_days: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CEconMarket_IsMarketplaceAllowed_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`EconMarket.IsMarketplaceAllowed#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.IsMarketplaceAllowed = _;
})((_ ||= {}));
var _ = {
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
    _ === `resultsView` ? `grid` : _[_],
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
var _ = 86400,
  _ = 604800;
_();
var _ = {
  week: _ / 4,
  month: _,
  year: _,
  lifetime: _,
};
function _(_, _) {
  let _ = new Date(_ * 1e3);
  switch (_) {
    case `week`:
      _.setDate(_.getDate() - 7);
      break;
    case `month`:
      _.setMonth(_.getMonth() - 1);
      break;
    case `year`:
    case `lifetime`:
      _.setFullYear(_.getFullYear() - 1);
      break;
    default:
      _(_, `Unhandled graph scale: ${_}`);
  }
  return Math.floor(_.getTime() / 1e3);
}
function _(_) {
  let { priceHistory: _, height: _ } = _,
    [_, _] = _(`priceTimeScale`),
    _ = _(_, _),
    _ = (0, _.useMemo)(
      () => _.reduce((_, _) => _ + +(_.purchases > 0), 0),
      [_],
    );
  return (0, _.jsxs)(_, {
    currency: _.ecurrency,
    data: _,
    scale: _,
    onScaleChange: _,
    height: _,
    children: [
      (0, _.jsx)(_, {
        dataKey: `price`,
        color: `var(--color-green-9)`,
        numPoints: _,
      }),
      (0, _.jsx)(_, {
        dataKey: `purchases`,
        scale: _,
      }),
      _.length === 0 &&
        (0, _.jsx)(_, {
          position: `center`,
          children: _.Localize(`#Graph_NoData`),
        }),
    ],
  });
}
function _(_) {
  let {
      children: _,
      currency: _,
      data: _,
      scale: _,
      onScaleChange: _,
      tooltipComponent: _,
      height: _,
    } = _,
    _ = _ === `week` || _ === `month`,
    _ = new Intl.DateTimeFormat(void 0, {
      year: `numeric`,
      month: `numeric`,
      day: `numeric`,
      hour: _ ? `numeric` : void 0,
    }),
    [_, _] = (0, _.useState)(null),
    { props: _, activeDrag: _ } = _({
      onSelection: (_, _) =>
        _.activeLabel && _.activeLabel && _([_.activeLabel, _.activeLabel]),
    }),
    _ = !!_,
    _ = (_) => {
      (_(null), _ && _(_));
    },
    _ = !_(`sm`),
    _ =
      _ &&
      (0, _.jsx)(_, {
        value: _ ? null : _,
        onValueChange: _,
        options: [`week`, `month`, `year`, `lifetime`],
        getOptionLabel: _,
        radius: `sm`,
        variant: `dim`,
      });
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        align: `end`,
        justify: `between`,
        marginBottom: `2`,
        children: [
          (0, _.jsx)(_, {
            size: `5`,
            contrast: `subtitle`,
            children: _.Localize(`#MedianSalePrice_Graph_Title`),
          }),
          !_ &&
            (0, _.jsxs)(_, {
              justify: `center`,
              gap: `2`,
              children: [
                _ &&
                  (0, _.jsxs)(_, {
                    color: `dull`,
                    onClick: () => _(null),
                    children: [
                      (0, _.jsxs)(_, {
                        size: `2`,
                        contrast: `title`,
                        children: [
                          _.format(_[0] * 1e3),
                          ` - `,
                          _.format(_[1] * 1e3),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        marginLeft: `2`,
                      }),
                    ],
                  }),
                _,
              ],
            }),
        ],
      }),
      (0, _.jsx)(_, {
        background: `dull-6`,
        padding: {
          initial: `1`,
          _: `4`,
        },
        paddingTop: `5`,
        children: (0, _.jsxs)(_, {
          style: {
            width: `100%`,
            ...(_
              ? {
                  height: _,
                }
              : {
                  maxHeight: `min( 70vh, 350px )`,
                  minHeight: `320px`,
                }),
            fontSize: `var(--text-size-3)`,
          },
          data: _,
          responsive: !0,
          ..._,
          margin: _
            ? void 0
            : {
                left: 20,
                right: 20,
              },
          children: [
            (0, _.jsx)(_, {
              currency: _,
              scale: _,
              customDomain: _,
              tooltipComponent: _,
            }),
            _ &&
              (0, _.jsx)(_, {
                _: _[0].activeLabel,
                _: _[1].activeLabel,
                fill: `#FFFFFF`,
                fillOpacity: 0.3,
                yAxisId: `price`,
                ifOverflow: `visible`,
              }),
            _,
          ],
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          marginTop: `2`,
          children: _,
        }),
    ],
  });
}
var _ = _.memo(function (_) {
    let { scale: _, currency: _, customDomain: _, tooltipComponent: _ } = _,
      [
        {
          rtMount: _,
          dayDateFormatter: _,
          hourDateFormatter: _,
          numberFormatter: _,
        },
      ] = (0, _.useState)(() => ({
        rtMount: Math.floor(Date.now() / 1e3),
        dayDateFormatter: new Intl.DateTimeFormat(_(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: void 0,
        }),
        hourDateFormatter: new Intl.DateTimeFormat(_(), {
          year: `numeric`,
          month: `numeric`,
          day: `numeric`,
          hour: `numeric`,
        }),
        numberFormatter: new Intl.NumberFormat(_()),
      })),
      _ = _ || _,
      _ = _ === `week` || _ === `month` ? _ : _,
      _ = (0, _.useCallback)((_) => _.format(_), [_]),
      _ = (0, _.useCallback)((_) => _(Math.round(_ * 100), _), [_]);
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          dateFormatter: _,
          mountTime: _,
          scale: _,
          customDomain: _,
        }),
        (0, _.jsx)(_, {
          yAxisId: `price`,
          tickMargin: 3,
          tickFormatter: _,
          width: `auto`,
          children: (0, _.jsx)(_, {
            angle: -90,
            position: `left`,
            offset: 10,
            fill: `var(--color-green-8)`,
            children: _.Localize(`#Graph_Label_Price`),
          }),
        }),
        (0, _.jsx)(_, {
          yAxisId: `purchases`,
          tickMargin: 3,
          orientation: `right`,
          tickFormatter: _,
          width: `auto`,
          allowDecimals: !1,
          children: (0, _.jsx)(_, {
            angle: 90,
            position: `right`,
            offset: 10,
            fill: `var(--color-blue-8)`,
            children: _.Localize(`#Graph_Label_Volume`),
          }),
        }),
        (0, _.jsx)(_, {
          dateFormatter: _,
          currency: _,
        }),
      ],
    });
  }),
  _ = _.memo(function (_) {
    let { dateFormatter: _, mountTime: _, scale: _, customDomain: _ } = _,
      _ = (0, _.useMemo)(
        () => [
          (_) => Math.min(_ - _[_], _(_, _)),
          (_) => Math.max(_ + _[_], _),
        ],
        [_, _],
      ),
      _ = _ || _,
      _ = (0, _.useCallback)((_) => _.format(_ * 1e3), [_]);
    return (0, _.jsx)(_, {
      dataKey: `time`,
      tickMargin: 3,
      minTickGap: 24,
      tickFormatter: _,
      scale: `time`,
      type: `number`,
      domain: _,
      allowDataOverflow: !0,
    });
  });
function _(_) {
  let {
      dateFormatter: _,
      currency: _,
      priceKey: _ = `price`,
      purchasesKey: _ = `purchases`,
    } = _,
    _ = new Intl.NumberFormat();
  return (0, _.jsx)(_, {
    children: (_) => {
      if (!_.active || !_.payload?.length || !_.payload[0].payload) return null;
      let _ = _.payload[0].payload,
        _ = _[_],
        _ = _[_],
        _ = _.time;
      if (_ === void 0 || _ === void 0) return null;
      let _ = _(Math.round(_ * 100), _),
        _ = _.Localize(`#Graph_NumberSold`, _.format(_)),
        _ = _.format(_ * 1e3);
      return (0, _.jsxs)(_, {
        direction: `column`,
        gap: `2`,
        children: [
          (0, _.jsx)(_, {
            weight: `medium`,
            contrast: `title`,
            children: _,
          }),
          (0, _.jsx)(_, {
            contrast: `title`,
            children: _,
          }),
          (0, _.jsx)(_, {
            contrast: `title`,
            children: _,
          }),
        ],
      });
    },
  });
}
var _ = {
  week: `#Graph_TimeScale_Week`,
  month: `#Graph_TimeScale_Month`,
  year: `#Graph_TimeScale_Year`,
  lifetime: `#Graph_TimeScale_Lifetime`,
};
function _(_) {
  return _.Localize(_[_]);
}
function _(_, _) {
  let [_] = (0, _.useState)(() => Math.floor(Date.now() / 1e3));
  return (0, _.useMemo)(() => _(_, _), [_, _])[_];
}
function _(_, _) {
  let _ = {
      week: [],
      month: [],
      year: [],
      lifetime: [],
    },
    _,
    _ = new Date();
  _.setDate(_.getDate() - 7);
  let _ = Math.floor(_.getTime() / 1e3),
    _ = new Date();
  _.setMonth(_.getMonth() - 1);
  let _ = Math.floor(_.getTime() / 1e3),
    _ = new Date();
  _.setFullYear(_.getFullYear() - 1);
  let _ = Math.floor(_.getTime() / 1e3);
  for (let _ of _.prices || []) {
    let _ = _(_);
    (_.time >= _ && _.week.push(_), _.time >= _ && _.month.push(_));
    let _ = !!_ && _(_.time, _.time);
    if (_.time >= _) {
      if (!_) _.year.push(_);
      else {
        let _ = _.year[_.year.length - 1];
        Array.isArray(_) ? _.push(_) : (_.year[_.year.length - 1] = [_, _]);
      }
    }
    if (!_) _.lifetime.push(_);
    else {
      let _ = _.lifetime[_.lifetime.length - 1];
      Array.isArray(_)
        ? _.push(_)
        : (_.lifetime[_.lifetime.length - 1] = [_, _]);
    }
    _ = _;
  }
  let _ = (_, _) => {
    if (_.length === 0) return [];
    let _ = _.map((_) => (Array.isArray(_) ? _(_) : _));
    return [..._(_, _, _), ..._(_, _), ..._(_, _, _)];
  };
  return {
    week: _(`week`, _.week),
    month: _(`month`, _.month),
    year: _(`year`, _.year),
    lifetime: _(`lifetime`, _.lifetime),
  };
}
function _(_, _) {
  if (_.length <= 1) return _;
  let _ = [_[0]];
  for (let _ = 1; _ < _.length; _++) {
    let _ = _[_ - 1],
      _ = _[_],
      _ = _.time + _[_];
    for (; _ < _.time && !_(_, _.time, _);)
      (_.push({
        time: _,
        price: void 0,
        purchases: 0,
      }),
        (_ += _[_]));
    _.push(_);
  }
  return _;
}
function _(_, _, _) {
  let _ = _(_, _);
  if (!_.length || _(_, _[0].time, _)) return [];
  let _ = _[0].time - _[_],
    _ = [];
  for (; _ >= _;)
    (_.push({
      time: _,
      price: void 0,
      purchases: 0,
    }),
      (_ -= _[_]));
  return _.reverse();
}
function _(_, _, _) {
  if (!_.length || _(_, _[_.length - 1].time, _)) return [];
  let _ = _,
    _ = [],
    _ = _[_.length - 1].time;
  for (; _ > _ && !_(_, _, _);)
    (_.push({
      time: _,
      price: void 0,
      purchases: 0,
    }),
      (_ -= _[_]));
  return _.reverse();
}
function _(_, _, _) {
  switch (_) {
    case `lifetime`:
    case `year`:
      return _(_, _);
    case `month`:
    case `week`:
      return _(_, _);
    default:
      return (_(_, `Unhandled time scale "${_}"`), !1);
  }
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = new Date(_ * 1e3);
  return (
    _.getFullYear() === _.getFullYear() &&
    _.getMonth() === _.getMonth() &&
    _.getDate() === _.getDate()
  );
}
function _(_, _) {
  return (
    _(_, _) && new Date(_ * 1e3).getHours() === new Date(_ * 1e3).getHours()
  );
}
function _(_) {
  return {
    time: _.time,
    price: _.price_median,
    purchases: _.purchases,
  };
}
function _(_) {
  if ((_(_.length, `Cannot merge a list of zero data points!`), _.length === 1))
    return _[0];
  let { unAvgSum: _, cTotal: _ } = _.reduce(
      (_, _) => (
        _.price === void 0 ||
          _.purchases === void 0 ||
          ((_.unAvgSum += _.price * _.purchases), (_.cTotal += _.purchases)),
        _
      ),
      {
        unAvgSum: 0,
        cTotal: 0,
      },
    ),
    _ = _ / _;
  return {
    time: _[0].time,
    price: _,
    purchases: _,
  };
}
var _ = 1e-5;
function _(_) {
  return {
    nFloor: parseInt(_.wallet_market_minimum) || 1,
    nIncrement: parseInt(_.wallet_currency_increment) || 1,
  };
}
function _(_, _, _) {
  let _ = _;
  if (_ > 1) {
    let _ = _ / _,
      _ = _ < 0 ? -1 : 1,
      _ = Math.abs(_);
    _ = _ * (_ ? Math.ceil(_) : Math.floor(_ + 0.5)) * _;
  }
  return Math.max(_, _);
}
function _(_, _, _, _) {
  return _ <= _ ? _ : _(_, _, _);
}
function _(_, _) {
  let { nFloor: _, nIncrement: _ } = _(_);
  return _(_, _, _, !0);
}
function _(_, _, _, _) {
  let _ = _.fee_rate ?? 0;
  if (_ <= _)
    return {
      nFee: 0,
      bCapped: !1,
    };
  let _ = _(Math.trunc(_ * _), _, _, !1),
    _ = _.fee_cap ? parseInt(_.fee_cap) : 0;
  return _ > 0 && _ >= _
    ? {
        nFee: _,
        bCapped: !0,
      }
    : {
        nFee: _,
        bCapped: !1,
      };
}
function _(_) {
  return !!_?.steam_fee && !!_?.publisher_fee;
}
function _(_, _, _) {
  if (_ == 0)
    return {
      nBasePrice: 0,
      nSteamFee: 0,
      nPublisherFee: 0,
      nTotal: 0,
      bSteamFeeCapped: !1,
      bPublisherFeeCapped: !1,
    };
  let { nFloor: _, nIncrement: _ } = _(_),
    _ = _(_, _, _, !0),
    _ = _(_, _.publisher_fee ?? {}, _, _),
    _ = _(_, _.steam_fee ?? {}, _, _);
  return {
    nBasePrice: _,
    nSteamFee: _.nFee,
    nPublisherFee: _.nFee,
    nTotal: _ + _.nFee + _.nFee,
    bSteamFeeCapped: _.bCapped,
    bPublisherFeeCapped: _.bCapped,
  };
}
function _(_, _, _) {
  let { nFloor: _, nIncrement: _ } = _(_),
    _ = _.publisher_fee?.fee_rate ?? 0,
    _ = _.steam_fee?.fee_rate ?? 0,
    _ = _ - 2 * _,
    _ = (_, _) => Math.min(Math.trunc((_ - _) / (1 + _)), _),
    _ = _(_(_ + _, 0), _, _);
  (_.bSteamFeeCapped != _.bPublisherFeeCapped &&
    (_.bPublisherFeeCapped
      ? (_ = _(_(_, _.nPublisherFee), _, _))
      : _.bSteamFeeCapped && (_ = _(_(_, _.nSteamFee), _, _))),
    _.bPublisherFeeCapped &&
      _.bSteamFeeCapped &&
      (_ = _(_ - (_.nSteamFee + _.nPublisherFee), _, _)));
  for (let _ = 0; _ < 3 && _.nTotal != _; _++)
    if (_.nTotal < _) _ = _(_.nBasePrice + _, _, _);
    else {
      _ = _(_.nBasePrice - _, _, _);
      break;
    }
  return _.nBasePrice < _ ? _(_, _, _) : _;
}
function _(_, _, _) {
  return _(_, _, _).nTotal;
}
function _(_, _, _) {
  return _(_, _, _).nBasePrice;
}
var _ = `_37rzH4CvbMw-`;
function _(_) {
  let {
      value: _,
      defaultValue: _,
      currency: _,
      editable: _,
      onValueChange: _,
      status: _,
      inputRef: _,
      placeholder: _,
      wide: _,
    } = _,
    _ = _ ?? 0,
    _ = _.bWholeUnitsOnly
      ? Math.round(_ / 100).toString()
      : (_ / 100).toFixed(2),
    _ = Math.max(_.length, _ ? 9 : 4) + _.strSymbol.length + 0.5,
    _ = _ || _,
    _ = _ ? `calc( ${_}ch + 2 * var(--spacing-2) )` : `${_}ch`;
  return (0, _.jsx)(_, {
    className: _(_, !_ && `YVYRIADuxks-`),
    width: _
      ? {
          initial: `100%`,
          _: _,
        }
      : _,
    children: (0, _.jsx)(_, {
      size: `2`,
      variant: _ ? `inset` : `bare`,
      currency: _,
      value: _,
      defaultValue: _,
      onValueChange: _ ?? (() => void 0),
      readOnly: !_,
      tabIndex: _ ? void 0 : -1,
      gamepadFocusable: _,
      status: _,
      inputRef: _,
      placeholder: _,
    }),
  });
}
var _ = `Xice-lU-2-8-`,
  _ = `oZO2DSFoyy4-`;
function _(_) {
  let {
      onClose: _,
      children: _,
      fillHeight: _,
      fitContent: _,
      onSubmit: _,
      ..._
    } = _,
    _ = _(
      _,
      _ && `mJrSMtK3PnM-`,
      _ && `wr8reWdSeMQ-`,
      `noOpinionatedGlobalStyles`,
    );
  return (0, _.jsxs)(_, {
    onClose: _,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          size: `5`,
          onClick: _,
        }),
      }),
      (0, _.jsx)(`form`, {
        onSubmit: (_) => {
          (_.preventDefault(), _ && _());
        },
        children: (0, _.jsx)(_, {
          direction: `column`,
          gap: `4`,
          padding: {
            initial: `3`,
            _: `5`,
          },
          height: _ ? `100%` : void 0,
          minHeight: _ ? `0` : void 0,
          ..._,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { lastUpdate: _, agreed: _, onAgreeChange: _, disabled: _ } = _,
    _ = _(_),
    _ = `${_.STORE_BASE_URL}subscriber_agreement`;
  return (0, _.jsx)(_, {
    checked: _,
    onChange: _,
    disabled: _,
    children: (0, _.jsx)(_, {
      size: `3`,
      children: _.LocalizeReact(
        `#PurchaseDialog_SSA_Link`,
        (0, _.jsx)(_, {
          href: _,
          target: `_blank`,
          children: _.Localize(`#PurchaseDialog_SSA_Link_Title`),
        }),
        _,
      ),
    }),
  });
}
function _(_) {
  let { selling: _ } = _;
  return (0, _.jsx)(_, {
    size: `3`,
    children: _.Localize(_ ? `#SellDialog_EU_SSA` : `#PurchaseDialog_EU_SSA`),
  });
}
function _(_, _) {
  if (typeof window > `u`) return;
  let _ = Reflect.get(window, `ReactNativeWebView`);
  typeof _?.postMessage == `function` &&
    _.postMessage(
      JSON.stringify({
        event_name: `marketconfirm`,
        type: _,
        creator_id: _,
      }),
    );
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.has_settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            has_settings: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_sale_push: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_wishlist_push: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            chat_notification_level: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notify_direct_chat: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            notify_group_chat: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_event_push: {
              _: 8,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_GetSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.allow_sale_push || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            allow_sale_push: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_wishlist_push: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            chat_notification_level: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notify_direct_chat: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            notify_group_chat: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            allow_event_push: {
              _: 7,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobilePerAccount_SetSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.deviceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            deviceid: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            push_enabled: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            app_version: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            os_version: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            device_model: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            twofactor_device_identifier: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            mobile_app: {
              _: 8,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.unique_deviceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            unique_deviceid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_RegisterMobileDevice_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.deviceid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            deviceid: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_DeregisterMobileDevice_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.app_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            app_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            push_enabled_only: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            minimum_version: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            twofactor_device_identifier: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.found_device || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            found_device: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            up_to_date: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            max_version: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileDevice_HasMobileDevice_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.authenticator_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            authenticator_gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            device_identifier: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stale_time_seconds || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stale_time_seconds: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_authenticator_valid: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            owned_games: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            friend_count: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            wallet_balance: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CMobileApp_GetMobileSummary_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`MobilePerAccount.GetSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetSettings = _;
  function _(_, _, _) {
    return _.SendMsg(`MobilePerAccount.SetSettings#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetSettings = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`MobileDevice.RegisterMobileDevice#1`, _(_, _, _), _, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.RegisterMobileDevice = _;
  function _(_, _) {
    return _.SendNotification(
      `MobileDevice.DeregisterMobileDevice#1`,
      _(_, _),
      {
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
      },
    );
  }
  _.DeregisterMobileDevice = _;
  function _(_, _, _) {
    return _.SendMsg(`MobileDevice.HasMobileDevice#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.HasMobileDevice = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`MobileApp.GetMobileSummary#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetMobileSummary = _;
})((_ ||= {}));
function _(_) {
  let [_, _] = (0, _.useState)(null);
  (0, _.useEffect)(() => {
    let _ = window;
    return (
      (_.ShowReactSellItemDialog = (_, _, _) =>
        _({
          item: _,
          appContext: _,
          onSold: _,
        })),
      _.g_PendingReactSellItemDialog &&
        (_(_.g_PendingReactSellItemDialog),
        delete _.g_PendingReactSellItemDialog),
      () => {
        delete _.ShowReactSellItemDialog;
      }
    );
  }, []);
  let [_, _] = (0, _.useState)({});
  return _
    ? (0, _.jsx)(_, {
        steamidOwner: _.steamid,
        children: (0, _.jsx)(_, {
          prefs: _,
          onChange: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)(
              _,
              {
                ..._,
                item: _.item,
                appContext: _.appContext,
                onSold: _.onSold,
                onClose: () => _(null),
              },
              `${_.item.appid}_${_.item.contextid}_${_.item.assetid}`,
            ),
          }),
        }),
      })
    : null;
}
function _(_) {
  let {
      item: _,
      appContext: _,
      walletInfo: _,
      newFeeRates: _,
      inPlaceListing: _,
      holdDays: _,
      holdReason: _,
      ssaUpdateTime: _,
      showEUSSA: _,
      onSold: _,
      onClose: _,
    } = _,
    { description: _ } = _,
    _ = _.wallet_currency,
    _ = _.appid,
    _ = _(_),
    _ = parseInt(String(_.amount)) || 1,
    _ = (0, _.useMemo)(
      () => ({
        wallet_market_minimum: String(_.wallet_market_minimum ?? 1),
        wallet_currency_increment: String(_.wallet_currency_increment ?? 1),
      }),
      [_],
    ),
    _ = _(_, _, _, _),
    _ = _(_, _, _),
    _ = _(_.data) ? _.data : void 0,
    [_, _] = (0, _.useState)(`edit`),
    [_, _] = (0, _.useState)(void 0),
    [_, _] = (0, _.useState)(1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    _ = _ && _ ? _(_, _, _) : void 0,
    _ = parseInt(_.wallet_market_minimum) || 1,
    _ = _({
      mutationFn: _,
      onSuccess: (_, _) => {
        if (!_.success) return;
        let _ = !!_.requires_confirmation;
        (_({
          quantity: _.amount,
          requires_confirmation: _,
        }),
          _
            ? (_.needs_mobile_confirmation && _.listingid && _(3, _.listingid),
              _(`confirm`))
            : _());
      },
    }),
    _ = () => {
      let _ = _({
        bAgreedSSA: _,
        nQuantity: _,
        nAvailable: _,
        nSellerPrice: _ ?? 0,
        nBuyerPrice: _ ?? 0,
        nFloor: _,
        nMaxBalance: parseInt(String(_.wallet_trade_max_balance ?? 0)) || 0,
        eCurrency: _,
      });
      (_(_), _ || _(`review`));
    },
    _ = () => {
      !_.isPending &&
        _ &&
        _.mutate({
          appid: _,
          contextid: _.contextid,
          assetid: _.assetid,
          amount: _,
          price: _(_, _),
        });
    },
    _ = () => {
      (_.reset(), _(`edit`));
    },
    _ = _ === `edit` && !!_,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!1);
  (0, _.useEffect)(() => {
    _ &&
      !_.current &&
      ((_.current = !0), window.UseTouchFriendlyMode?.() || _.current?.focus());
  }, [_]);
  let _ = _.Localize(
      _ === `edit` ? `#SellDialog_Title` : `#SellDialog_Confirm_Title`,
    ),
    _ = null;
  return (
    _ === `confirm` && _.data
      ? (_ = (0, _.jsx)(_, {
          result: _.data,
        }))
      : _.isError || (_.isSuccess && !_.data.success)
        ? (_ = (0, _.jsx)(_, {
            type: `error`,
            children:
              _.data?.message || _.Localize(`#SellDialog_Error_Generic`),
          }))
        : _
          ? (_ = (0, _.jsx)(_, {
              type: `error`,
              children: _,
            }))
          : (_.isError || (_.isSuccess && !_)) &&
            (_ = (0, _.jsx)(_, {
              type: `error`,
              children: _.Localize(`#SellDialog_PriceEntryUnavailable`),
            })),
    (0, _.jsxs)(_, {
      onClose: _,
      fitContent: !0,
      onSubmit: () => {
        _ === `edit` ? _() : _ === `review` && _();
      },
      children: [
        (0, _.jsx)(_, {
          size: `6`,
          weight: `heavy`,
          children: _,
        }),
        (0, _.jsx)(_, {
          item: _,
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              inPlace: _ && !!_?.inplace_listing,
              holdDays: _,
              holdReason: _,
            }),
            (0, _.jsx)(_, {
              visible: _ === `edit`,
              keepMounted: !0,
              children: (0, _.jsx)(_, {
                paddingTop: `4`,
                children: (0, _.jsx)(_, {
                  appid: _,
                  hashName: _,
                  currency: _,
                }),
              }),
            }),
          ],
        }),
        (0, _.jsx)(_, {
          message: _,
          prices: (0, _.jsx)(_, {
            currency: _,
            marketLow: _ === `confirm` ? void 0 : _,
            buyerPrice: _,
            sellerPrice: _,
            onBuyerPriceChange:
              _ && _ ? (_) => _(_ ? _(_, _, _) : void 0) : void 0,
            onSellerPriceChange: _ ? (_) => _(_ || void 0) : void 0,
            sellerPriceStatus: _ !== void 0 && _ < _ ? `error` : void 0,
            sellerInputRef: _,
            summary:
              _ > 1 &&
              (0, _.jsx)(_, {
                size: `3`,
                align: `center`,
                children: _.Localize(
                  `#SellDialog_TotalYouReceive`,
                  _((_ ?? 0) * _, _),
                ),
              }),
            children:
              _ > 1 &&
              (0, _.jsx)(_, {
                value: _,
                available: _,
                editable: _ === `edit`,
                onChange: _,
              }),
          }),
          children: (0, _.jsxs)(_, {
            justify: `between`,
            wrap: `wrap`,
            gap: `2`,
            align: `center`,
            children: [
              (0, _.jsx)(_, {
                visible: _ !== `confirm`,
                children: (0, _.jsxs)(_, {
                  direction: `column`,
                  gap: `2`,
                  children: [
                    (0, _.jsx)(_, {
                      lastUpdate: _,
                      agreed: _,
                      onAgreeChange: _,
                      disabled: _ !== `edit`,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        selling: !0,
                      }),
                  ],
                }),
              }),
              (0, _.jsxs)(_, {
                flexGrow: `1`,
                justify: `end`,
                align: `center`,
                gap: `2`,
                children: [
                  _ === `edit` &&
                    (0, _.jsx)(_, {
                      type: `submit`,
                      minWidth: `120px`,
                      disabled: !_,
                      children: _.Localize(`#SellDialog_Button_Continue`),
                    }),
                  _ === `review` &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          color: `dull`,
                          onClick: _,
                          disabled: _.isPending,
                          children: _.Localize(`#ManageListing_Dialog_Back`),
                        }),
                        (0, _.jsx)(_, {
                          type: `submit`,
                          minWidth: `120px`,
                          loading: _.isPending,
                          children: _.Localize(`#SellDialog_Button_Confirm`),
                        }),
                      ],
                    }),
                  _ === `confirm` &&
                    (0, _.jsx)(_, {
                      color: `dull`,
                      onClick: _,
                      children: _.Localize(`#Button_Close`),
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function _(_) {
  return _.market_hash_name || _.market_name || _.name || ``;
}
function _(_) {
  let {
    bAgreedSSA: _,
    nQuantity: _,
    nAvailable: _,
    nSellerPrice: _,
    nBuyerPrice: _,
    nFloor: _,
    nMaxBalance: _,
    eCurrency: _,
  } = _;
  return _
    ? _ < 1 || _ > _
      ? _.Localize(`#SellDialog_Error_InvalidQuantity`)
      : _ > _ || _ > _
        ? _.Localize(`#SellDialog_Error_PriceExceedsMaximum`, _(_, _))
        : _ < _ || _ < 3 * _
          ? _.Localize(`#SellDialog_Error_MinPrice`, _(_, _))
          : null
    : _.Localize(`#SellDialog_Error_SSA`);
}
function _(_, _, _, _) {
  return _({
    queryKey: [`inventory`, `sellfees`, _, _],
    queryFn: async () => {
      if (!_)
        return {
          steam_fee: {
            fee_rate: parseFloat(String(_.wallet_fee_percent ?? 0.05)),
          },
          publisher_fee: {
            fee_rate: parseFloat(
              String(
                _?.market_pubfee_rate ??
                  _.wallet_publisher_fee_percent_default ??
                  0.1,
              ),
            ),
          },
        };
      let _ = new URLSearchParams({
          appid: _.toString(),
        }),
        _ = await fetch(
          `${_.COMMUNITY_BASE_URL}market/ajaxfeestructure/?${_.toString()}`,
          {
            credentials: `include`,
          },
        );
      if (!_._) throw Error(`Fee structure request failed: ${_.status}`);
      let _ = await _.json();
      return {
        ..._,
        steam_fee: _.steam_fee && {
          ..._.steam_fee,
          fee_rate: parseFloat(String(_.steam_fee.fee_rate ?? 0)),
        },
        publisher_fee: _.publisher_fee && {
          ..._.publisher_fee,
          fee_rate: parseFloat(String(_.publisher_fee.fee_rate ?? 0)),
        },
      };
    },
    staleTime: 1 / 0,
  });
}
function _(_) {
  let { item: _ } = _,
    { description: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        appid: _.appid,
        contextid: _.contextid,
        assetid: _.assetid,
        amount: _.amount,
        asset_properties: _.asset_properties,
      }),
      [_],
    ),
    _ = _(_),
    _ = {
      initial: `64px`,
      _: `96px`,
    };
  return (0, _.jsx)(_.Root, {
    description: _,
    asset: _,
    bInteractable: !1,
    children: (0, _.jsxs)(_, {
      align: `center`,
      gap: `3`,
      children: [
        (0, _.jsx)(_, {
          flexShrink: `0`,
          width: _,
          height: _,
          align: `center`,
          justify: `center`,
          style: {
            border: `1px solid ${_.name_color ? `#${_.name_color}` : `var(--color-dull-8)`}`,
            background: _.background_color ? `#${_.background_color}` : void 0,
          },
          children: (0, _.jsx)(`img`, {
            src: _,
            alt: _.name,
            style: {
              maxWidth: `100%`,
              maxHeight: `100%`,
            },
          }),
        }),
        (0, _.jsxs)(_, {
          direction: `column`,
          gap: `2`,
          minWidth: `0`,
          children: [
            (0, _.jsx)(_.Name, {
              size: `5`,
            }),
            (0, _.jsx)(_.GameInfo, {}),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { inPlace: _, holdDays: _, holdReason: _ } = _,
    _ = () => window.ShowEscrowExplanationDialog?.(!0),
    _ = null;
  return (
    _ === `no2fa` || _ === `recently_activated`
      ? (_ = _.Localize(`#SellDialog_WarningOnHoldUser`, 7))
      : _ === `recently_transferred` &&
        (_ = _.Localize(`#SellDialog_WarningOnHoldForTransfer`)),
    (0, _.jsxs)(_, {
      direction: `column`,
      gap: `2`,
      background: `dull-5`,
      padding: `3`,
      children: [
        (0, _.jsx)(_, {
          size: `3`,
          color: `text-warning`,
          children: _.Localize(
            _ ? `#SellDialog_Warning_InPlace` : `#SellDialog_Warning`,
          ),
        }),
        _ > 0 &&
          (0, _.jsxs)(_, {
            direction: `column`,
            gap: `1`,
            children: [
              (0, _.jsx)(_, {
                size: `3`,
                color: `text-warning`,
                children: _.Localize(`#SellDialog_WarningOnHoldForDays`, _),
              }),
              _ &&
                (0, _.jsx)(_, {
                  size: `3`,
                  color: `text-warning`,
                  children: _,
                }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  size: `3`,
                  onClick: _,
                  children: _.Localize(`#SellDialog_WarningOnHoldRemove`),
                }),
              }),
            ],
          }),
      ],
    })
  );
}
function _(_) {
  let { appid: _, hashName: _, currency: _ } = _,
    _ = _({
      initial: `200px`,
      _: `240px`,
    }),
    _ = _({
      queryKey: [`inventory`, `sellpricehistory`, _, _],
      queryFn: async () => {
        let _ = new URLSearchParams({
            raw: `1`,
            appid: _.toString(),
            market_hash_name: _,
          }),
          _ = await (
            await fetch(
              `${_.COMMUNITY_BASE_URL}market/pricehistory/?${_.toString()}`,
              {
                credentials: `include`,
              },
            )
          ).json();
        if (!_?.success) throw Error(`Price history unavailable`);
        return {
          ecurrency: _.ecurrency,
          prices: _.prices ?? [],
        };
      },
      staleTime: 1 / 0,
      retry: !1,
    });
  if (_.isPending)
    return (0, _.jsx)(_, {
      align: `center`,
      justify: `center`,
      minHeight: `calc( ${_} + 60px )`,
      children: (0, _.jsx)(_, {
        size: `5`,
      }),
    });
  let _ = _.data ?? {
    ecurrency: _,
    prices: [],
  };
  return (0, _.jsx)(_, {
    priceHistory: _,
    height: _,
  });
}
function _(_, _, _) {
  let { data: _ } = _(_(_, _, _));
  return _?.lowest_price || void 0;
}
function _(_) {
  let { value: _, available: _, editable: _, onChange: _ } = _;
  return (0, _.jsxs)(_, {
    align: `center`,
    gap: `2`,
    children: [
      (0, _.jsx)(_, {
        size: `3`,
        weight: `heavy`,
        whiteSpace: `nowrap`,
        children: _.Localize(`#SellDialog_Quantity`),
      }),
      (0, _.jsx)(_, {
        width: `8ch`,
        children: (0, _.jsx)(_, {
          size: `2`,
          variant: _ ? `inset` : `bare`,
          value: _,
          onValueChange: _,
          valueToString: (_) => _.toString(),
          valueFromString: (_) => (isNaN(parseInt(_)) ? _ : parseInt(_)),
          readOnly: !_,
          tabIndex: _ ? void 0 : -1,
        }),
      }),
      (0, _.jsx)(_, {
        size: `3`,
        contrast: `description`,
        whiteSpace: `nowrap`,
        children: _.Localize(`#SellDialog_QuantityAvailable`, _),
      }),
    ],
  });
}
function _(_) {
  let { result: _ } = _,
    _ = _.needs_mobile_confirmation
      ? `${_.Localize(`#SellDialog_MobileConfirmation`)}\n\n${_.Localize(`#SellDialog_MobileConfirmation_CheckVersion`)}`
      : _.Localize(`#SellDialog_EmailConfirmation`, _.email_domain ?? ``);
  return (0, _.jsx)(_, {
    type: `warning`,
    children: _,
  });
}
function _(_) {
  let { message: _, prices: _, children: _ } = _,
    _ = (0, _.useRef)(_);
  return (
    _ && (_.current = _),
    (0, _.jsxs)(_, {
      direction: `column`,
      paddingTop: `3`,
      children: [
        _,
        (0, _.jsx)(_, {
          visible: !!_,
          children: (0, _.jsx)(_, {
            justify: `center`,
            paddingTop: `4`,
            children: _.current,
          }),
        }),
        (0, _.jsx)(_, {
          paddingTop: `4`,
          children: _,
        }),
      ],
    })
  );
}
function _(_) {
  let { children: _, type: _ } = _;
  return (0, _.jsx)(_, {
    size: `3`,
    align: `center`,
    color: _ == `error` ? `text-error` : `text-warning`,
    whiteSpace: `pre-wrap`,
    children: _,
  });
}
function _(_) {
  let {
      currency: _,
      marketLow: _,
      buyerPrice: _,
      sellerPrice: _,
      onBuyerPriceChange: _,
      onSellerPriceChange: _,
      sellerPriceStatus: _,
      sellerInputRef: _,
      children: _,
      summary: _,
    } = _,
    _ = _(_),
    _ = !_(`sm`),
    _ = (0, _.useRef)(_);
  _ != null && (_.current = _);
  let _ = (0, _.jsx)(_, {
      size: `3`,
      weight: `heavy`,
      whiteSpace: `nowrap`,
      children: _.Localize(`#RepriceListing_Dialog_BuyerPays`),
    }),
    _ = (0, _.jsx)(_, {
      currency: _,
      value: _,
      defaultValue: 0,
      editable: !!_,
      onValueChange: _,
      wide: !0,
      placeholder: 0,
    }),
    _ = (0, _.jsx)(_, {
      size: `3`,
      weight: `heavy`,
      whiteSpace: `nowrap`,
      children: _.Localize(`#RepriceListing_Dialog_YouReceive`),
    }),
    _ = (0, _.jsx)(_, {
      currency: _,
      value: _,
      defaultValue: 0,
      editable: !!_,
      onValueChange: _,
      status: _,
      inputRef: _,
      wide: !0,
      placeholder: 0,
    });
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    align: _ ? `stretch` : `center`,
    children: [
      (0, _.jsxs)(_, {
        align: `center`,
        justify: `center`,
        gap: _ ? `3` : `5`,
        wrap: `wrap`,
        children: [
          _,
          _
            ? (0, _.jsxs)(_, {
                columns: `max-content minmax( 0, 1fr )`,
                gap: `2`,
                alignItems: `center`,
                width: `100%`,
                children: [_, _, _, _],
              })
            : (0, _.jsxs)(_, {
                align: `center`,
                gap: `5`,
                children: [
                  (0, _.jsxs)(_, {
                    align: `center`,
                    gap: `2`,
                    children: [_, _],
                  }),
                  (0, _.jsxs)(_, {
                    align: `center`,
                    gap: `2`,
                    children: [_, _],
                  }),
                ],
              }),
        ],
      }),
      (0, _.jsx)(_, {
        visible: _ != null,
        children: (0, _.jsxs)(_, {
          align: `center`,
          justify: `center`,
          gap: `2`,
          children: [
            (0, _.jsx)(_, {
              size: `3`,
              contrast: `description`,
              whiteSpace: `nowrap`,
              children: _.Localize(`#ManageListing_Dialog_MarketLow`),
            }),
            (0, _.jsx)(_, {
              size: `3`,
              contrast: `description`,
              whiteSpace: `nowrap`,
              children: _.current,
            }),
          ],
        }),
      }),
      _,
    ],
  });
}
async function _(_) {
  let _ = new URLSearchParams({
      sessionid: _(),
      appid: _.appid.toString(),
      contextid: _.contextid,
      assetid: _.assetid,
      amount: _.amount.toString(),
      price: _.price.toString(),
    }),
    _ = await fetch(`${_.COMMUNITY_BASE_URL}market/sellitem/`, {
      method: `POST`,
      body: _,
      credentials: `include`,
    });
  try {
    return await _.json();
  } catch {
    return {
      success: !1,
    };
  }
}
export { _ as default };
