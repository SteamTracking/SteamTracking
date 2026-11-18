function _() {
  return !1;
}
var _ = _(_()),
  _ = `m0FGLQCyzgQ-`,
  _ = `thT7nQQQA-w-`;
if (!_.useState)
  throw Error(`mobx-react-lite requires React with Hooks support`);
if (!_)
  throw Error(
    `mobx-react-lite@3 requires mobx at least version 6 to be available`,
  );
var _ = _(_());
function _(_) {
  _();
}
function _(_) {
  ((_ ||= _),
    _({
      reactionScheduler: _,
    }));
}
function _(_) {
  return _(_);
}
var _ = !1;
function _() {
  return _;
}
var _ = 1e4,
  _ = 1e4,
  _ = (function () {
    function _(_) {
      var _ = this;
      (Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (_) {
            (_ === void 0 && (_ = _),
              clearTimeout(_.sweepTimeout),
              (_.sweepTimeout = void 0));
            var _ = Date.now();
            (_.registrations.forEach(function (_, _) {
              _ - _.registeredAt >= _ &&
                (_.finalize(_.value), _.registrations.delete(_));
            }),
              _.registrations.size > 0 && _.scheduleSweep());
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            _.sweep(0);
          },
        }));
    }
    return (
      Object.defineProperty(_.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_, _, _) {
          (this.registrations.set(_, {
            value: _,
            registeredAt: Date.now(),
          }),
            this.scheduleSweep());
        },
      }),
      Object.defineProperty(_.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          this.registrations.delete(_);
        },
      }),
      Object.defineProperty(_.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, _));
        },
      }),
      _
    );
  })(),
  _ = new (typeof FinalizationRegistry < `u` ? FinalizationRegistry : _)(
    function (_) {
      var _;
      ((_ = _.reaction) == null || _.dispose(), (_.reaction = null));
    },
  ),
  _ = _(),
  _ = function () {};
function _(_) {
  _.reaction = new _(`observer${_.name}`, function () {
    var _;
    ((_.stateVersion = Symbol()), (_ = _.onStoreChange) == null || _.call(_));
  });
}
function _(_, _) {
  if ((_ === void 0 && (_ = `observed`), _())) return _();
  var _ = _.useRef(null);
  if (!_.current) {
    var _ = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: _,
      subscribe: function (_) {
        return (
          _.unregister(_),
          (_.onStoreChange = _),
          _.reaction || (_(_), (_.stateVersion = Symbol())),
          function () {
            var _;
            ((_.onStoreChange = null),
              (_ = _.reaction) == null || _.dispose(),
              (_.reaction = null));
          }
        );
      },
      getSnapshot: function () {
        return _.stateVersion;
      },
    };
    _.current = _;
  }
  var _ = _.current;
  (_.reaction || (_(_), _.register(_, _, _)),
    _.useDebugValue(_.reaction, _),
    (0, _.useSyncExternalStore)(_.subscribe, _.getSnapshot, _));
  var _, _;
  if (
    (_.reaction.track(function () {
      try {
        _ = _();
      } catch (_) {
        _ = _;
      }
    }),
    _)
  )
    throw _;
  return _;
}
var _ = typeof Symbol == `function` && Symbol.for,
  _ = _
    ? Symbol.for(`react.forward_ref`)
    : typeof _.forwardRef == `function` &&
      (0, _.forwardRef)(function (_) {
        return null;
      }).$$typeof,
  _ = _
    ? Symbol.for(`react.memo`)
    : typeof _.memo == `function` &&
      (0, _.memo)(function (_) {
        return null;
      }).$$typeof;
function _(_, _) {
  if (_ && _.$$typeof === _)
    throw Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (_()) return _;
  var _ = _?.forwardRef ?? !1,
    _ = _,
    _ = _.displayName || _.name;
  if (
    _ &&
    _.$$typeof === _ &&
    ((_ = !0), (_ = _.render), typeof _ != `function`)
  )
    throw Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var _ = function (_, _) {
    return _(function () {
      return _(_, _);
    }, _);
  };
  return (
    (_.displayName = _.displayName),
    Object.defineProperty(_, "name", {
      value: _.name,
      writable: !0,
      configurable: !0,
    }),
    _.contextTypes && (_.contextTypes = _.contextTypes),
    _ && (_ = (0, _.forwardRef)(_)),
    (_ = (0, _.memo)(_)),
    _(_, _),
    _
  );
}
var _ = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  displayName: !0,
};
function _(_, _) {
  Object.keys(_).forEach(function (_) {
    _[_] || Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
  });
}
(_(_.unstable_batchedUpdates), _.finalizeAllImmediately);
function _(_, _) {
  return (_ === void 0 && (_ = `observed`), _(_, _));
}
var _ = _();
function _(_) {
  let {
      target: _,
      visibilityObserver: _,
      className: _,
      style: _,
      bEnablePointerEvents: _,
      direction: _ = `right`,
      nBodyAlignment: _ = 0.5,
      nBodyDistance: _ = 8,
      nAllowOffscreenPx: _ = 10,
      nMaxLateralMoveOnScreen: _ = void 0,
      onNoSpace: _,
      bTopmost: _,
      children: _,
      ..._
    } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(null),
    [_, _] = _.useState(null),
    _ = _(() => _?.visible),
    _ = _.useCallback(() => {
      let _ = _;
      if (!_ || !_ || !_ || (_ && _ && !_)) return;
      let _ = _.ownerDocument.defaultView;
      if (!_ || _.closed) return;
      ((_.style.display = `flex`),
        requestAnimationFrame(() => {
          _.style.display = `block`;
        }),
        _.showPopover && _.showPopover());
      let _ = _.querySelector(`.hover_arrow.left`),
        _ = _.querySelector(`.hover_arrow.right`),
        _ = _.querySelector(`.hover_arrow.top`),
        _ = _.querySelector(`.hover_arrow.bottom`),
        _ = _.getBoundingClientRect(),
        _ = _.getBoundingClientRect(),
        _ = _ == `overlay` || _ == `overlay-center`,
        _ = _.getBoundingClientRect();
      (_ && _.setAttribute(`style`, `display: none;`),
        _ && _.setAttribute(`style`, `display: none;`),
        _ && _.setAttribute(`style`, `display: none;`),
        _ && _.setAttribute(`style`, `display: none;`));
      let _ = _;
      _.matches(`:dir(rtl)`) &&
        (_ === `left` ? (_ = `right`) : _ === `right` && (_ = `left`));
      let {
          nLeft: _,
          nTop: _,
          nOverflow: _,
          nLateralOverflow: _,
        } = _(_, _, _, _, _, _, _),
        _ = _;
      if (_ > (_ ?? 10) && !_) {
        let _ = _(_),
          {
            nLeft: _,
            nTop: _,
            nOverflow: _,
            nLateralOverflow: _,
          } = _(_, _, _, _, _, _, _);
        if (
          (_ < _ && ((_ = _), (_ = _), (_ = _), (_ = _), (_ = _)),
          _ > (_ ?? 10))
        ) {
          (console.log(
            `Not showing hover because it didn't fit in the main or alt direction`,
          ),
            _.setAttribute(`style`, `display: none;`),
            _(!0),
            _?.());
          return;
        }
      }
      _ !== 0 && !_ && ([_, _] = _(_, _, _, _, _));
      let _ = null;
      switch (_) {
        case `left`:
          _ = _;
          break;
        case `right`:
          _ = _;
          break;
        case `top`:
          _ = _;
          break;
        case `bottom`:
          _ = _;
      }
      (_ && _.setAttribute(`style`, ``),
        _ != _ && _(_),
        _ != _ && _(_),
        _ || _(!0));
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _]);
  _.useEffect(() => _(), [_]);
  let _ = Object.assign(
      {
        left: _,
        top: _,
      },
      _,
    ),
    _ = !_ || _;
  return (0, _.jsx)(`div`, {
    popover: `manual`,
    ref: _,
    className: _(_, _ && `Xps4DCuHIkk-`),
    children: (0, _.jsx)(`div`, {
      ..._,
      className: _(
        _,
        _ && _ && `OVPY-JTSlYE-`,
        _ && `JFXEmy9-6do-`,
        _ && `HzpMEzz9LYo-`,
        _,
      ),
      style: _,
      ref: _,
      children: _,
    }),
  });
}
function _(_) {
  switch (_) {
    case `right`:
      return `left`;
    case `left`:
      return `right`;
    case `bottom`:
      return `top`;
    case `top`:
      return `bottom`;
    case `overlay`:
      return `overlay`;
    case `overlay-center`:
      return `overlay-center`;
  }
}
function _(_, _, _, _, _, _, _) {
  let _ = _.innerWidth,
    _ = _.innerHeight,
    _,
    _,
    _,
    _;
  switch (_) {
    case `right`:
      ((_ = _.right + _ - _.left),
        (_ = _(_.top - _.top, _.height, _.height, _)),
        (_ = Math.max(0, _ + _.width - _)),
        (_ = [Math.max(0, 0 - _), Math.max(0, _ + _.height - _)]));
      break;
    case `left`:
      ((_ = _.left - _ - _.width - _.left),
        (_ = _(_.top - _.top, _.height, _.height, _)),
        (_ = Math.max(0, 0 - _)),
        (_ = [Math.max(0, 0 - _), Math.max(0, _ + _.height - _)]));
      break;
    case `bottom`:
      ((_ = _(_.left - _.left, _.width, _.width, _)),
        (_ = _.bottom + _ - _.top),
        (_ = Math.max(0, _ + _.height - _)),
        (_ = [Math.max(0, 0 - _), Math.max(0, _ + _.width - _)]));
      break;
    case `top`:
      ((_ = _(_.left - _.left, _.width, _.width, _)),
        (_ = _.top - _ - _.height - _.top),
        (_ = Math.max(0, 0 - _)),
        (_ = [Math.max(0, 0 - _), Math.max(0, _ + _.width - _)]));
      break;
    case `overlay`:
      ((_ = _.left - _.left), (_ = _.top - _.top), (_ = 0), (_ = [0, 0]));
      break;
    case `overlay-center`:
      ((_ = _.left - _.left + 0.5 * _.width - 0.5 * _.width),
        (_ = _.top - _.top + 0.5 * _.height - 0.5 * _.height),
        (_ = 0),
        (_ = [0, 0]));
  }
  return {
    nLeft: _,
    nTop: _,
    nOverflow: _,
    nLateralOverflow: _,
  };
}
function _(_, _, _, _) {
  return Math.max(0, Math.min(1, _)) * (_ - _) + _;
}
function _(_, _, _, _, _) {
  let _ = Math.max(_[0], _[1]);
  (_ !== void 0 && (_ = Math.min(_, _)), (_ = Math.max(0, _)));
  let _ = _[0] > _[1] ? _ : -_;
  return (_ === `left` || _ === `right` ? (_ += _) : (_ += _), [_, _]);
}
var _ = `oQJ4ZJN3E6g-`,
  _ = `b1ZLfKTPdqk-`;
function _(_) {
  let { divProps: _, tooltipProps: _ } = _({
    ..._,
    toolTipContent: _.toolTipContent
      ? (0, _.jsx)(_, {
          children: _(_.toolTipContent),
        })
      : null,
  });
  return (0, _.jsxs)(_, {
    className: `tool-tip-source`,
    noFocusRing: !0,
    focusable: _.bNavStop ?? !!_.onClick,
    ..._,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { divProps: _, tooltipProps: _ } = _(_);
  return (0, _.jsxs)(_, {
    className: `tool-tip-source`,
    noFocusRing: !0,
    focusable: _.bNavStop ?? !!_.onClick,
    ..._,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { children: _ } = _,
    { divProps: _, tooltipProps: _ } = _({
      ..._,
      toolTipContent: _.toolTipContent
        ? (0, _.jsx)(_, {
            children: _(_.toolTipContent),
          })
        : null,
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.cloneElement(_, {
        ..._,
        ..._.props,
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let {
      toolTipContent: _,
      nDelayShowMS: _ = 300,
      bDisabled: _,
      bPortalToBody: _,
      direction: _,
      nBodyAlignment: _,
      nBodyDistance: _,
      nAllowOffscreenPx: _,
      nMaxLateralMoveOnScreen: _,
      strTooltipClassname: _,
      bNavStop: _,
      bTopmost: _,
      usePointerEvents: _,
      children: _,
      onMouseLeave: _,
      ..._
    } = _,
    _ = {
      direction: _,
      nBodyAlignment: _,
      nBodyDistance: _,
      nAllowOffscreenPx: _,
      nMaxLateralMoveOnScreen: _,
      className: _,
      bTopmost: _,
    },
    [_, _] = _.useState(!1),
    [_, _] = _.useState(),
    _ = _.useCallback(
      (_) => {
        (_ && `pointerType` in _ && _.pointerType != `mouse`) ||
          (_(!0), _(_.currentTarget));
      },
      [_],
    ),
    _ = _.useCallback(() => {
      _(!1);
    }, []);
  _.useEffect(() => {
    _ && _ && _(!1);
  }, [_, _]);
  let _ = {
      active: _ && !_,
      target: _,
      bPortalToBody: _,
      nDelayShowMS: _,
      hoverPositionProps: _,
      children: _,
    },
    _ = {
      ..._,
    };
  return (
    _
      ? ((_.onPointerEnter = _), (_.onPointerLeave = _))
      : ((_.onMouseEnter = _), (_.onMouseLeave = _)),
    {
      divProps: _,
      stateHandlers: {
        setTarget: _,
        setHovered: _,
      },
      tooltipProps: _,
    }
  );
}
function _(_) {
  return _;
}
function _(_) {
  return (0, _.jsx)(`div`, {
    ..._,
    className: _(_, _.className),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    ..._,
  });
}
function _(_) {
  let {
      active: _,
      target: _,
      bPortalToBody: _,
      nDelayShowMS: _ = 300,
      hoverPositionProps: _,
      children: _,
    } = _,
    [_, _] = _.useState(_);
  if (
    (_.useEffect(() => {
      if (_) {
        if (_) {
          let _ = window.setTimeout(() => _(!0), _);
          return () => window.clearTimeout(_);
        }
        _(!0);
      } else {
        if (_()) return;
        _(!1);
      }
    }, [_]),
    !_ || !_ || !_)
  )
    return null;
  let _ = (0, _.jsx)(_, {
    target: _,
    ..._,
    children: _,
  });
  return _ ? _.createPortal(_, _.ownerDocument.body) : _;
}
