var _ = _(_()),
  _ = _(_()),
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
function _(_) {
  return Array.isArray(_) && _(_[0]) && _(_[1]) ? _.join(` ~ `) : _;
}
var _ = (_) => {
    var {
        separator: _ = ` : `,
        contentStyle: _ = {},
        itemStyle: _ = {},
        labelStyle: _ = {},
        payload: _,
        formatter: _,
        itemSorter: _,
        wrapperClassName: _,
        labelClassName: _,
        label: _,
        labelFormatter: _,
        accessibilityLayer: _ = !1,
      } = _,
      _ = () => {
        if (_ && _.length) {
          var _ = {
              padding: 0,
              margin: 0,
            },
            _ = (_ ? (0, _.default)(_, _) : _).map((_, _) => {
              if (_.type === `none`) return null;
              var _ = _.formatter || _ || _,
                { value: _, name: _ } = _,
                _ = _,
                _ = _;
              if (_) {
                var _ = _(_, _, _, _, _);
                if (Array.isArray(_)) [_, _] = _;
                else if (_ != null) _ = _;
                else return null;
              }
              var _ = _(
                {
                  display: `block`,
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: _.color || `#000`,
                },
                _,
              );
              return _.createElement(
                `li`,
                {
                  className: `recharts-tooltip-item`,
                  key: `tooltip-item-${_}`,
                  style: _,
                },
                _(_)
                  ? _.createElement(
                      `span`,
                      {
                        className: `recharts-tooltip-item-name`,
                      },
                      _,
                    )
                  : null,
                _(_)
                  ? _.createElement(
                      `span`,
                      {
                        className: `recharts-tooltip-item-separator`,
                      },
                      _,
                    )
                  : null,
                _.createElement(
                  `span`,
                  {
                    className: `recharts-tooltip-item-value`,
                  },
                  _,
                ),
                _.createElement(
                  `span`,
                  {
                    className: `recharts-tooltip-item-unit`,
                  },
                  _.unit || ``,
                ),
              );
            });
          return _.createElement(
            `ul`,
            {
              className: `recharts-tooltip-item-list`,
              style: _,
            },
            _,
          );
        }
        return null;
      },
      _ = _(
        {
          margin: 0,
          padding: 10,
          backgroundColor: `#fff`,
          border: `1px solid #ccc`,
          whiteSpace: `nowrap`,
        },
        _,
      ),
      _ = _(
        {
          margin: 0,
        },
        _,
      ),
      _ = !_(_),
      _ = _ ? _ : ``,
      _ = _(`recharts-default-tooltip`, _),
      _ = _(`recharts-tooltip-label`, _);
    _ && _ && _ != null && (_ = _(_, _));
    var _ = _
      ? {
          role: `status`,
          "aria-live": `assertive`,
        }
      : {};
    return _.createElement(
      `div`,
      _(
        {
          className: _,
          style: _,
        },
        _,
      ),
      _.createElement(
        `p`,
        {
          className: _,
          style: _,
        },
        _.isValidElement(_) ? _ : `${_}`,
      ),
      _(),
    );
  },
  _ = `recharts-tooltip-wrapper`,
  _ = {
    visibility: `hidden`,
  };
function _(_) {
  var { coordinate: _, translateX: _, translateY: _ } = _;
  return _(_, {
    [`${_}-right`]: _(_) && _ && _(_._) && _ >= _._,
    [`${_}-left`]: _(_) && _ && _(_._) && _ < _._,
    [`${_}-bottom`]: _(_) && _ && _(_._) && _ >= _._,
    [`${_}-top`]: _(_) && _ && _(_._) && _ < _._,
  });
}
function _(_) {
  var {
    allowEscapeViewBox: _,
    coordinate: _,
    key: _,
    offsetTopLeft: _,
    position: _,
    reverseDirection: _,
    tooltipDimension: _,
    viewBox: _,
    viewBoxDimension: _,
  } = _;
  if (_ && _(_[_])) return _[_];
  var _ = _[_] - _ - (_ > 0 ? _ : 0),
    _ = _[_] + _;
  if (_[_]) return _[_] ? _ : _;
  var _ = _[_];
  return _ == null
    ? 0
    : _[_]
      ? Math.max(_ < _ ? _ : _, _)
      : _ == null
        ? 0
        : _ + _ > _ + _
          ? Math.max(_, _)
          : Math.max(_, _);
}
function _(_) {
  var { translateX: _, translateY: _, useTranslate3d: _ } = _;
  return {
    transform: _
      ? `translate3d(${_}px, ${_}px, 0)`
      : `translate(${_}px, ${_}px)`,
  };
}
function _(_) {
  var {
      allowEscapeViewBox: _,
      coordinate: _,
      offsetTopLeft: _,
      position: _,
      reverseDirection: _,
      tooltipBox: _,
      useTranslate3d: _,
      viewBox: _,
    } = _,
    _,
    _,
    _;
  return (
    _.height > 0 && _.width > 0 && _
      ? ((_ = _({
          allowEscapeViewBox: _,
          coordinate: _,
          key: `x`,
          offsetTopLeft: _,
          position: _,
          reverseDirection: _,
          tooltipDimension: _.width,
          viewBox: _,
          viewBoxDimension: _.width,
        })),
        (_ = _({
          allowEscapeViewBox: _,
          coordinate: _,
          key: `y`,
          offsetTopLeft: _,
          position: _,
          reverseDirection: _,
          tooltipDimension: _.height,
          viewBox: _,
          viewBoxDimension: _.height,
        })),
        (_ = _({
          translateX: _,
          translateY: _,
          useTranslate3d: _,
        })))
      : (_ = _),
    {
      cssProperties: _,
      cssClasses: _({
        translateX: _,
        translateY: _,
        coordinate: _,
      }),
    }
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
var _ = class extends _.PureComponent {
    constructor() {
      (super(...arguments),
        _(this, `state`, {
          dismissed: !1,
          dismissedAtCoordinate: {
            _: 0,
            _: 0,
          },
        }),
        _(this, `handleKeyDown`, (_) => {
          _.key === `Escape` &&
            this.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                _: this.props.coordinate?._ ?? 0,
                _: this.props.coordinate?._ ?? 0,
              },
            });
        }));
    }
    componentDidMount() {
      document.addEventListener(`keydown`, this.handleKeyDown);
    }
    componentWillUnmount() {
      document.removeEventListener(`keydown`, this.handleKeyDown);
    }
    componentDidUpdate() {
      this.state.dismissed &&
        (this.props.coordinate?._ !== this.state.dismissedAtCoordinate._ ||
          this.props.coordinate?._ !== this.state.dismissedAtCoordinate._) &&
        (this.state.dismissed = !1);
    }
    render() {
      var {
          active: _,
          allowEscapeViewBox: _,
          animationDuration: _,
          animationEasing: _,
          children: _,
          coordinate: _,
          hasPayload: _,
          isAnimationActive: _,
          offset: _,
          position: _,
          reverseDirection: _,
          useTranslate3d: _,
          viewBox: _,
          wrapperStyle: _,
          lastBoundingBox: _,
          innerRef: _,
          hasPortalFromProps: _,
        } = this.props,
        { cssClasses: _, cssProperties: _ } = _({
          allowEscapeViewBox: _,
          coordinate: _,
          offsetTopLeft: _,
          position: _,
          reverseDirection: _,
          tooltipBox: {
            height: _.height,
            width: _.width,
          },
          useTranslate3d: _,
          viewBox: _,
        }),
        _ = _(
          _(
            {},
            _
              ? {}
              : _(
                  _(
                    {
                      transition: _ && _ ? `transform ${_}ms ${_}` : void 0,
                    },
                    _,
                  ),
                  {},
                  {
                    pointerEvents: `none`,
                    visibility:
                      !this.state.dismissed && _ && _ ? `visible` : `hidden`,
                    position: `absolute`,
                    top: 0,
                    left: 0,
                  },
                ),
          ),
          {},
          {
            visibility: !this.state.dismissed && _ && _ ? `visible` : `hidden`,
          },
          _,
        );
      return _.createElement(
        `div`,
        {
          xmlns: `http://www.w3.org/1999/xhtml`,
          tabIndex: -1,
          className: _,
          style: _,
          ref: _,
        },
        _,
      );
    }
  },
  _ = [`x`, `y`, `top`, `left`, `width`, `height`, `className`];
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
var _ = (_, _, _, _, _, _) => `M${_},${_}v${_}M${_},${_}h${_}`,
  _ = (_) => {
    var {
        _: _ = 0,
        _: _ = 0,
        top: _ = 0,
        left: _ = 0,
        width: _ = 0,
        height: _ = 0,
        className: _,
      } = _,
      _ = _(_, _),
      _ = _(
        {
          _: _,
          _: _,
          top: _,
          left: _,
          width: _,
          height: _,
        },
        _,
      );
    return !_(_) || !_(_) || !_(_) || !_(_) || !_(_) || !_(_)
      ? null
      : _.createElement(
          `path`,
          _({}, _(_), {
            className: _(`recharts-cross`, _),
            _: _(_, _, _, _, _, _),
          }),
        );
  };
function _(_, _, _, _) {
  var _ = _ / 2;
  return {
    stroke: `none`,
    fill: `#ccc`,
    _: _ === `horizontal` ? _._ - _ : _.left + 0.5,
    _: _ === `horizontal` ? _.top + 0.5 : _._ - _,
    width: _ === `horizontal` ? _ : _.width - 1,
    height: _ === `horizontal` ? _.height - 1 : _,
  };
}
var _ = [`radius`],
  _ = [`radius`];
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
var _ = (_, _, _, _, _) => {
    var _ = Math.min(Math.abs(_) / 2, Math.abs(_) / 2),
      _ = _ >= 0 ? 1 : -1,
      _ = _ >= 0 ? 1 : -1,
      _ = +((_ >= 0 && _ >= 0) || (_ < 0 && _ < 0)),
      _;
    if (_ > 0 && _ instanceof Array) {
      for (var _ = [0, 0, 0, 0], _ = 0, _ = 4; _ < _; _++)
        _[_] = _[_] > _ ? _ : _[_];
      ((_ = `M${_},${_ + _ * _[0]}`),
        _[0] > 0 && (_ += `A ${_[0]},${_[0]},0,0,${_},${_ + _ * _[0]},${_}`),
        (_ += `L ${_ + _ - _ * _[1]},${_}`),
        _[1] > 0 &&
          (_ += `A ${_[1]},${_[1]},0,0,${_},
        ${_ + _},${_ + _ * _[1]}`),
        (_ += `L ${_ + _},${_ + _ - _ * _[2]}`),
        _[2] > 0 &&
          (_ += `A ${_[2]},${_[2]},0,0,${_},
        ${_ + _ - _ * _[2]},${_ + _}`),
        (_ += `L ${_ + _ * _[3]},${_ + _}`),
        _[3] > 0 &&
          (_ += `A ${_[3]},${_[3]},0,0,${_},
        ${_},${_ + _ - _ * _[3]}`),
        (_ += `Z`));
    } else if (_ > 0 && _ === +_ && _ > 0) {
      var _ = Math.min(_, _);
      _ = `M ${_},${_ + _ * _}
            A ${_},${_},0,0,${_},${_ + _ * _},${_}
            L ${_ + _ - _ * _},${_}
            A ${_},${_},0,0,${_},${_ + _},${_ + _ * _}
            L ${_ + _},${_ + _ - _ * _}
            A ${_},${_},0,0,${_},${_ + _ - _ * _},${_ + _}
            L ${_ + _ * _},${_ + _}
            A ${_},${_},0,0,${_},${_},${_ + _ - _ * _} Z`;
    } else _ = `M ${_},${_} h ${_} v ${_} h ${-_} Z`;
    return _;
  },
  _ = {
    _: 0,
    _: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: `ease`,
  },
  _ = (_) => {
    var _ = _(_, _),
      _ = (0, _.useRef)(null),
      [_, _] = (0, _.useState)(-1);
    (0, _.useEffect)(() => {
      if (_.current && _.current.getTotalLength)
        try {
          var _ = _.current.getTotalLength();
          _ && _(_);
        } catch {}
    }, []);
    var { _: _, _: _, width: _, height: _, radius: _, className: _ } = _,
      {
        animationEasing: _,
        animationDuration: _,
        animationBegin: _,
        isAnimationActive: _,
        isUpdateAnimationActive: _,
      } = _,
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useRef)(_),
      _ = (0, _.useMemo)(
        () => ({
          _: _,
          _: _,
          width: _,
          height: _,
          radius: _,
        }),
        [_, _, _, _, _],
      ),
      _ = _(_, `rectangle-`);
    if (_ !== +_ || _ !== +_ || _ !== +_ || _ !== +_ || _ === 0 || _ === 0)
      return null;
    var _ = _(`recharts-rectangle`, _);
    if (!_) {
      var _ = _(_),
        { radius: _ } = _,
        _ = _(_, _);
      return _.createElement(
        `path`,
        _({}, _, {
          radius: typeof _ == `number` ? _ : void 0,
          className: _,
          _: _(_, _, _, _, _),
        }),
      );
    }
    var _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = _.current,
      _ = `0px ${_ === -1 ? 1 : _}px`,
      _ = `${_}px 0px`,
      _ = _([`strokeDasharray`], _, typeof _ == `string` ? _ : void 0);
    return _.createElement(
      _,
      {
        animationId: _,
        key: _,
        canBegin: _ > 0,
        duration: _,
        easing: _,
        isActive: _,
        begin: _,
      },
      (_) => {
        var _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _),
          _ = _(_, _, _);
        _.current &&
          ((_.current = _), (_.current = _), (_.current = _), (_.current = _));
        var _ = _
            ? _ > 0
              ? {
                  transition: _,
                  strokeDasharray: _,
                }
              : {
                  strokeDasharray: _,
                }
            : {
                strokeDasharray: _,
              },
          _ = _(_),
          { radius: _ } = _,
          _ = _(_, _);
        return _.createElement(
          `path`,
          _({}, _, {
            radius: typeof _ == `number` ? _ : void 0,
            className: _,
            _: _(_, _, _, _, _),
            ref: _,
            style: _(_({}, _), _.style),
          }),
        );
      },
    );
  };
function _(_) {
  var { _: _, _: _, radius: _, startAngle: _, endAngle: _ } = _;
  return {
    points: [_(_, _, _, _), _(_, _, _, _)],
    _: _,
    _: _,
    radius: _,
    startAngle: _,
    endAngle: _,
  };
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
var _ = (_, _) => _(_ - _) * Math.min(Math.abs(_ - _), 359.999),
  _ = (_) => {
    var {
        _: _,
        _: _,
        radius: _,
        angle: _,
        sign: _,
        isExternal: _,
        cornerRadius: _,
        cornerIsExternal: _,
      } = _,
      _ = _ * (_ ? 1 : -1) + _,
      _ = Math.asin(_ / _) / _,
      _ = _ ? _ : _ + _ * _,
      _ = _(_, _, _, _),
      _ = _(_, _, _, _),
      _ = _ ? _ - _ * _ : _;
    return {
      center: _,
      circleTangency: _,
      lineTangency: _(_, _, _ * Math.cos(_ * _), _),
      theta: _,
    };
  },
  _ = (_) => {
    var {
        _: _,
        _: _,
        innerRadius: _,
        outerRadius: _,
        startAngle: _,
        endAngle: _,
      } = _,
      _ = _(_, _),
      _ = _ + _,
      _ = _(_, _, _, _),
      _ = _(_, _, _, _),
      _ = `M ${_._},${_._}
    A ${_},${_},0,
    ${+(Math.abs(_) > 180)},${+(_ > _)},
    ${_._},${_._}
  `;
    if (_ > 0) {
      var _ = _(_, _, _, _),
        _ = _(_, _, _, _);
      _ += `L ${_._},${_._}
            A ${_},${_},0,
            ${+(Math.abs(_) > 180)},${+(_ <= _)},
            ${_._},${_._} Z`;
    } else _ += `L ${_},${_} Z`;
    return _;
  },
  _ = (_) => {
    var {
        _: _,
        _: _,
        innerRadius: _,
        outerRadius: _,
        cornerRadius: _,
        forceCornerRadius: _,
        cornerIsExternal: _,
        startAngle: _,
        endAngle: _,
      } = _,
      _ = _(_ - _),
      {
        circleTangency: _,
        lineTangency: _,
        theta: _,
      } = _({
        _: _,
        _: _,
        radius: _,
        angle: _,
        sign: _,
        cornerRadius: _,
        cornerIsExternal: _,
      }),
      {
        circleTangency: _,
        lineTangency: _,
        theta: _,
      } = _({
        _: _,
        _: _,
        radius: _,
        angle: _,
        sign: -_,
        cornerRadius: _,
        cornerIsExternal: _,
      }),
      _ = _ ? Math.abs(_ - _) : Math.abs(_ - _) - _ - _;
    if (_ < 0)
      return _
        ? `M ${_._},${_._}
        a${_},${_},0,0,1,${_ * 2},0
        a${_},${_},0,0,1,${-_ * 2},0
      `
        : _({
            _: _,
            _: _,
            innerRadius: _,
            outerRadius: _,
            startAngle: _,
            endAngle: _,
          });
    var _ = `M ${_._},${_._}
    A${_},${_},0,0,${+(_ < 0)},${_._},${_._}
    A${_},${_},0,${+(_ > 180)},${+(_ < 0)},${_._},${_._}
    A${_},${_},0,0,${+(_ < 0)},${_._},${_._}
  `;
    if (_ > 0) {
      var {
          circleTangency: _,
          lineTangency: _,
          theta: _,
        } = _({
          _: _,
          _: _,
          radius: _,
          angle: _,
          sign: _,
          isExternal: !0,
          cornerRadius: _,
          cornerIsExternal: _,
        }),
        {
          circleTangency: _,
          lineTangency: _,
          theta: _,
        } = _({
          _: _,
          _: _,
          radius: _,
          angle: _,
          sign: -_,
          isExternal: !0,
          cornerRadius: _,
          cornerIsExternal: _,
        }),
        _ = _ ? Math.abs(_ - _) : Math.abs(_ - _) - _ - _;
      if (_ < 0 && _ === 0) return `${_}L${_},${_}Z`;
      _ += `L${_._},${_._}
      A${_},${_},0,0,${+(_ < 0)},${_._},${_._}
      A${_},${_},0,${+(_ > 180)},${+(_ > 0)},${_._},${_._}
      A${_},${_},0,0,${+(_ < 0)},${_._},${_._}Z`;
    } else _ += `L${_},${_}Z`;
    return _;
  },
  _ = {
    _: 0,
    _: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  _ = (_) => {
    var _ = _(_, _),
      {
        _: _,
        _: _,
        innerRadius: _,
        outerRadius: _,
        cornerRadius: _,
        forceCornerRadius: _,
        cornerIsExternal: _,
        startAngle: _,
        endAngle: _,
        className: _,
      } = _;
    if (_ < _ || _ === _) return null;
    var _ = _(`recharts-sector`, _),
      _ = _ - _,
      _ = _(_, _, 0, !0),
      _ =
        _ > 0 && Math.abs(_ - _) < 360
          ? _({
              _: _,
              _: _,
              innerRadius: _,
              outerRadius: _,
              cornerRadius: Math.min(_, _ / 2),
              forceCornerRadius: _,
              cornerIsExternal: _,
              startAngle: _,
              endAngle: _,
            })
          : _({
              _: _,
              _: _,
              innerRadius: _,
              outerRadius: _,
              startAngle: _,
              endAngle: _,
            });
    return _.createElement(
      `path`,
      _({}, _(_), {
        className: _,
        _: _,
      }),
    );
  };
function _(_, _, _) {
  var _, _, _, _;
  if (_ === `horizontal`)
    ((_ = _._), (_ = _), (_ = _.top), (_ = _.top + _.height));
  else if (_ === `vertical`)
    ((_ = _._), (_ = _), (_ = _.left), (_ = _.left + _.width));
  else if (_._ != null && _._ != null) {
    if (_ === `centric`) {
      var { _: _, _: _, innerRadius: _, outerRadius: _, angle: _ } = _,
        _ = _(_, _, _, _),
        _ = _(_, _, _, _);
      ((_ = _._), (_ = _._), (_ = _._), (_ = _._));
    } else return _(_);
  }
  return [
    {
      _: _,
      _: _,
    },
    {
      _: _,
      _: _,
    },
  ];
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
var _ = () => _(_),
  _ = () => {
    var _ = _(),
      _ = _(_),
      _ = _(_);
    return _(
      _(
        _({}, _),
        {},
        {
          scale: _,
        },
      ),
      _,
    );
  };
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
function _(_) {
  var {
      coordinate: _,
      payload: _,
      index: _,
      offset: _,
      tooltipAxisBandSize: _,
      layout: _,
      cursor: _,
      tooltipEventType: _,
      chartName: _,
    } = _,
    _ = _,
    _ = _,
    _ = _;
  if (!_ || !_ || (_ !== `ScatterChart` && _ !== `axis`)) return null;
  var _, _;
  if (_ === `ScatterChart`) ((_ = _), (_ = _));
  else if (_ === `BarChart`) ((_ = _(_, _, _, _)), (_ = _));
  else if (_ === `radial`) {
    var { _: _, _: _, radius: _, startAngle: _, endAngle: _ } = _(_);
    ((_ = {
      _: _,
      _: _,
      startAngle: _,
      endAngle: _,
      innerRadius: _,
      outerRadius: _,
    }),
      (_ = _));
  } else
    ((_ = {
      points: _(_, _, _),
    }),
      (_ = _));
  var _ = typeof _ == `object` && `className` in _ ? _.className : void 0,
    _ = _(
      _(
        _(
          _(
            {
              stroke: `#ccc`,
              pointerEvents: `none`,
            },
            _,
          ),
          _,
        ),
        _(_),
      ),
      {},
      {
        payload: _,
        payloadIndex: _,
        className: _(`recharts-tooltip-cursor`, _),
      },
    );
  return (0, _.isValidElement)(_)
    ? (0, _.cloneElement)(_, _)
    : (0, _.createElement)(_, _);
}
function _(_) {
  var _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return _.createElement(
    _,
    _({}, _, {
      coordinate: _.coordinate,
      index: _.index,
      payload: _.payload,
      offset: _,
      layout: _,
      tooltipAxisBandSize: _,
      chartName: _,
    }),
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
function _(_) {
  return _.dataKey;
}
function _(_, _) {
  return _.isValidElement(_)
    ? _.cloneElement(_, _)
    : typeof _ == `function`
      ? _.createElement(_, _)
      : _.createElement(_, _);
}
var _ = [],
  _ = {
    allowEscapeViewBox: {
      _: !1,
      _: !1,
    },
    animationDuration: 400,
    animationEasing: `ease`,
    axisId: 0,
    contentStyle: {},
    cursor: !0,
    filterNull: !0,
    isAnimationActive: !_.isSsr,
    itemSorter: `name`,
    itemStyle: {},
    labelStyle: {},
    offset: 10,
    reverseDirection: {
      _: !1,
      _: !1,
    },
    separator: ` : `,
    trigger: `hover`,
    useTranslate3d: !1,
    wrapperStyle: {},
  };
function _(_) {
  var _ = _(_, _),
    {
      active: _,
      allowEscapeViewBox: _,
      animationDuration: _,
      animationEasing: _,
      content: _,
      filterNull: _,
      isAnimationActive: _,
      offset: _,
      payloadUniqBy: _,
      position: _,
      reverseDirection: _,
      useTranslate3d: _,
      wrapperStyle: _,
      cursor: _,
      shared: _,
      trigger: _,
      defaultIndex: _,
      portal: _,
      axisId: _,
    } = _,
    _ = _(),
    _ = typeof _ == `number` ? String(_) : _;
  (0, _.useEffect)(() => {
    _(
      _({
        shared: _,
        trigger: _,
        axisId: _,
        active: _,
        defaultIndex: _,
      }),
    );
  }, [_, _, _, _, _, _]);
  var _ = _(),
    _ = _(),
    _ = _(_),
    { activeIndex: _, isActive: _ } = _((_) => _(_, _, _, _)),
    _ = _((_) => _(_, _, _, _)),
    _ = _((_) => _(_, _, _, _)),
    _ = _((_) => _(_, _, _, _)),
    _ = _,
    _ = _(),
    _ = _ ?? _,
    [_, _] = _([_, _]),
    _ = _ === `axis` ? _ : void 0;
  _(_, _, _, _, _, _);
  var _ = _ ?? _;
  if (_ == null) return null;
  var _ = _ ?? _;
  (_ || (_ = _),
    _ &&
      _.length &&
      (_ = _(
        _.filter((_) => _.value != null && (_.hide !== !0 || _.includeHidden)),
        _,
        _,
      )));
  var _ = _.length > 0,
    _ = _.createElement(
      _,
      {
        allowEscapeViewBox: _,
        animationDuration: _,
        animationEasing: _,
        isAnimationActive: _,
        active: _,
        coordinate: _,
        hasPayload: _,
        offset: _,
        position: _,
        reverseDirection: _,
        useTranslate3d: _,
        viewBox: _,
        wrapperStyle: _,
        lastBoundingBox: _,
        innerRef: _,
        hasPortalFromProps: !!_,
      },
      _(
        _,
        _(
          _({}, _),
          {},
          {
            payload: _,
            label: _,
            active: _,
            coordinate: _,
            accessibilityLayer: _,
          },
        ),
      ),
    );
  return _.createElement(
    _.Fragment,
    null,
    (0, _.createPortal)(_, _),
    _ &&
      _.createElement(_, {
        cursor: _,
        tooltipEventType: _,
        coordinate: _,
        payload: _,
        index: _,
      }),
  );
}
