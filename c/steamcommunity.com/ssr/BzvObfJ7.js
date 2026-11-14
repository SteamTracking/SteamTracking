var _ = _(_(), 1),
  _ = _(_());
function _(_) {
  return `Minified Redux error #${_}; visit https://redux.js.org/Errors?code=${_} for the full message or use the non-minified dev environment for full errors. `;
}
var _ = (typeof Symbol == `function` && Symbol.observable) || `@@observable`,
  _ = () => Math.random().toString(36).substring(7).split(``).join(`.`),
  _ = {
    INIT: `@@redux/INIT${_()}`,
    REPLACE: `@@redux/REPLACE${_()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_()}`,
  };
function _(_) {
  if (typeof _ != `object` || !_) return !1;
  let _ = _;
  for (; Object.getPrototypeOf(_) !== null;) _ = Object.getPrototypeOf(_);
  return Object.getPrototypeOf(_) === _ || Object.getPrototypeOf(_) === null;
}
function _(_, _, _) {
  if (typeof _ != `function`) throw Error(_(2));
  if (
    (typeof _ == `function` && typeof _ == `function`) ||
    (typeof _ == `function` && typeof arguments[3] == `function`)
  )
    throw Error(_(0));
  if (
    (typeof _ == `function` && _ === void 0 && ((_ = _), (_ = void 0)),
    _ !== void 0)
  ) {
    if (typeof _ != `function`) throw Error(_(1));
    return _(_)(_, _);
  }
  let _ = _,
    _ = _,
    _ = new Map(),
    _ = _,
    _ = 0,
    _ = !1;
  function _() {
    _ === _ &&
      ((_ = new Map()),
      _.forEach((_, _) => {
        _.set(_, _);
      }));
  }
  function _() {
    if (_) throw Error(_(3));
    return _;
  }
  function _(_) {
    if (typeof _ != `function`) throw Error(_(4));
    if (_) throw Error(_(5));
    let _ = !0;
    _();
    let _ = _++;
    return (
      _.set(_, _),
      function () {
        if (_) {
          if (_) throw Error(_(6));
          ((_ = !1), _(), _.delete(_), (_ = null));
        }
      }
    );
  }
  function _(_) {
    if (!_(_)) throw Error(_(7));
    if (_.type === void 0) throw Error(_(8));
    if (typeof _.type != `string`) throw Error(_(17));
    if (_) throw Error(_(9));
    try {
      ((_ = !0), (_ = _(_, _)));
    } finally {
      _ = !1;
    }
    return (
      (_ = _).forEach((_) => {
        _();
      }),
      _
    );
  }
  function _(_) {
    if (typeof _ != `function`) throw Error(_(10));
    ((_ = _),
      _({
        type: _.REPLACE,
      }));
  }
  function _() {
    let _ = _;
    return {
      subscribe(_) {
        if (typeof _ != `object` || !_) throw Error(_(11));
        function _() {
          let _ = _;
          _.next && _.next(_());
        }
        return (
          _(),
          {
            unsubscribe: _(_),
          }
        );
      },
      [_]() {
        return this;
      },
    };
  }
  return (
    _({
      type: _.INIT,
    }),
    {
      dispatch: _,
      subscribe: _,
      getState: _,
      replaceReducer: _,
      [_]: _,
    }
  );
}
function _(_, _) {
  return function (..._) {
    return _(_.apply(this, _));
  };
}
function _(_, _) {
  if (typeof _ == `function`) return _(_, _);
  if (typeof _ != `object` || !_) throw Error(_(16));
  let _ = {};
  for (let _ in _) {
    let _ = _[_];
    typeof _ == `function` && (_[_] = _(_, _));
  }
  return _;
}
function _(..._) {
  return _.length === 0
    ? (_) => _
    : _.length === 1
      ? _[0]
      : _.reduce(
          (_, _) =>
            (..._) =>
              _(_(..._)),
        );
}
function _(..._) {
  return (_) => (_, _) => {
    let _ = _(_, _),
      _ = () => {
        throw Error(_(15));
      },
      _ = {
        getState: _.getState,
        dispatch: (_, ..._) => _(_, ..._),
      };
    return (
      (_ = _(..._.map((_) => _(_)))(_.dispatch)),
      {
        ..._,
        dispatch: _,
      }
    );
  };
}
_();
var _ = Symbol.for(`react.transitional.element`),
  _ = Symbol.for(`react.portal`),
  _ = Symbol.for(`react.fragment`),
  _ = Symbol.for(`react.strict_mode`),
  _ = Symbol.for(`react.profiler`),
  _ = Symbol.for(`react.consumer`),
  _ = Symbol.for(`react.context`),
  _ = Symbol.for(`react.forward_ref`),
  _ = Symbol.for(`react.suspense`),
  _ = Symbol.for(`react.suspense_list`),
  _ = Symbol.for(`react.memo`),
  _ = Symbol.for(`react.lazy`),
  _ = _,
  _ = _;
function _(_) {
  if (typeof _ == `object` && _) {
    let { $$typeof: _ } = _;
    switch (_) {
      case _:
        switch (((_ = _.type), _)) {
          case _:
          case _:
          case _:
          case _:
          case _:
            return _;
          default:
            switch (((_ &&= _.$$typeof), _)) {
              case _:
              case _:
              case _:
              case _:
                return _;
              case _:
                return _;
              default:
                return _;
            }
        }
      case _:
        return _;
    }
  }
}
function _(_) {
  return _(_) === _;
}
function _(
  _,
  _,
  _,
  _,
  { areStatesEqual: _, areOwnPropsEqual: _, areStatePropsEqual: _ },
) {
  let _ = !1,
    _,
    _,
    _,
    _,
    _;
  function _(_, _) {
    return (
      (_ = _),
      (_ = _),
      (_ = _(_, _)),
      (_ = _(_, _)),
      (_ = _(_, _, _)),
      (_ = !0),
      _
    );
  }
  function _() {
    return (
      (_ = _(_, _)), _.dependsOnOwnProps && (_ = _(_, _)), (_ = _(_, _, _)), _
    );
  }
  function _() {
    return (
      _.dependsOnOwnProps && (_ = _(_, _)),
      _.dependsOnOwnProps && (_ = _(_, _)),
      (_ = _(_, _, _)),
      _
    );
  }
  function _() {
    let _ = _(_, _),
      _ = !_(_, _);
    return ((_ = _), _ && (_ = _(_, _, _)), _);
  }
  function _(_, _) {
    let _ = !_(_, _),
      _ = !_(_, _, _, _);
    return ((_ = _), (_ = _), _ && _ ? _() : _ ? _() : _ ? _() : _);
  }
  return function (_, _) {
    return _ ? _(_, _) : _(_, _);
  };
}
function _(
  _,
  {
    initMapStateToProps: _,
    initMapDispatchToProps: _,
    initMergeProps: _,
    ..._
  },
) {
  return _(_(_, _), _(_, _), _(_, _), _, _);
}
function _(_, _) {
  let _ = {};
  for (let _ in _) {
    let _ = _[_];
    typeof _ == `function` && (_[_] = (..._) => _(_(..._)));
  }
  return _;
}
function _(_) {
  return function (_) {
    let _ = _(_);
    function _() {
      return _;
    }
    return ((_.dependsOnOwnProps = !1), _);
  };
}
function _(_) {
  return _.dependsOnOwnProps ? !!_.dependsOnOwnProps : _.length !== 1;
}
function _(_, _) {
  return function (_, { displayName: _ }) {
    let _ = function (_, _) {
      return _.dependsOnOwnProps ? _.mapToProps(_, _) : _.mapToProps(_, void 0);
    };
    return (
      (_.dependsOnOwnProps = !0),
      (_.mapToProps = function (_, _) {
        ((_.mapToProps = _), (_.dependsOnOwnProps = _(_)));
        let _ = _(_, _);
        return (
          typeof _ == `function` &&
            ((_.mapToProps = _), (_.dependsOnOwnProps = _(_)), (_ = _(_, _))),
          _
        );
      }),
      _
    );
  };
}
function _(_, _) {
  return (_, _) => {
    throw Error(
      `Invalid value of type ${typeof _} for ${_} argument when connecting component ${_.wrappedComponentName}.`,
    );
  };
}
function _(_) {
  return _ && typeof _ == `object`
    ? _((_) => _(_, _))
    : _
      ? typeof _ == `function`
        ? _(_, `mapDispatchToProps`)
        : _(_, `mapDispatchToProps`)
      : _((_) => ({
          dispatch: _,
        }));
}
function _(_) {
  return _
    ? typeof _ == `function`
      ? _(_, `mapStateToProps`)
      : _(_, `mapStateToProps`)
    : _(() => ({}));
}
function _(_, _, _) {
  return {
    ..._,
    ..._,
    ..._,
  };
}
function _(_) {
  return function (_, { displayName: _, areMergedPropsEqual: _ }) {
    let _ = !1,
      _;
    return function (_, _, _) {
      let _ = _(_, _, _);
      return (_ ? _(_, _) || (_ = _) : ((_ = !0), (_ = _)), _);
    };
  };
}
function _(_) {
  return _ ? (typeof _ == `function` ? _(_) : _(_, `mergeProps`)) : () => _;
}
function _(_) {
  _();
}
function _() {
  let _ = null,
    _ = null;
  return {
    clear() {
      ((_ = null), (_ = null));
    },
    notify() {
      _(() => {
        let _ = _;
        for (; _;) (_.callback(), (_ = _.next));
      });
    },
    get() {
      let _ = [],
        _ = _;
      for (; _;) (_.push(_), (_ = _.next));
      return _;
    },
    subscribe(_) {
      let _ = !0,
        _ = (_ = {
          callback: _,
          next: null,
          prev: _,
        });
      return (
        _.prev ? (_.prev.next = _) : (_ = _),
        function () {
          _ &&
            _ !== null &&
            ((_ = !1),
            _.next ? (_.next.prev = _.prev) : (_ = _.prev),
            _.prev ? (_.prev.next = _.next) : (_ = _.next));
        }
      );
    },
  };
}
var _ = {
  notify() {},
  get: () => [],
};
function _(_, _) {
  let _,
    _ = _,
    _ = 0,
    _ = !1;
  function _(_) {
    _();
    let _ = _.subscribe(_),
      _ = !1;
    return () => {
      _ || ((_ = !0), _(), _());
    };
  }
  function _() {
    _.notify();
  }
  function _() {
    _.onStateChange && _.onStateChange();
  }
  function _() {
    return _;
  }
  function _() {
    (_++, _ || ((_ = _ ? _.addNestedSub(_) : _.subscribe(_)), (_ = _())));
  }
  function _() {
    (_--, _ && _ === 0 && (_(), (_ = void 0), _.clear(), (_ = _)));
  }
  function _() {
    _ || ((_ = !0), _());
  }
  function _() {
    _ && ((_ = !1), _());
  }
  let _ = {
    addNestedSub: _,
    notifyNestedSubs: _,
    handleChangeWrapper: _,
    isSubscribed: _,
    trySubscribe: _,
    tryUnsubscribe: _,
    getListeners: () => _,
  };
  return _;
}
var _ =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  _ = typeof navigator < `u` && navigator.product === `ReactNative`,
  _ = _ || _ ? _.useLayoutEffect : _.useEffect;
function _(_, _) {
  return _ === _ ? _ !== 0 || _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
}
function _(_, _) {
  if (_(_, _)) return !0;
  if (typeof _ != `object` || !_ || typeof _ != `object` || !_) return !1;
  let _ = Object.keys(_),
    _ = Object.keys(_);
  if (_.length !== _.length) return !1;
  for (let _ = 0; _ < _.length; _++)
    if (!Object.prototype.hasOwnProperty.call(_, _[_]) || !_(_[_[_]], _[_[_]]))
      return !1;
  return !0;
}
var _ = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  _ = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  _ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  _ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  _ = {
    [_]: _,
    [_]: _,
  };
function _(_) {
  return _(_) ? _ : _[_.$$typeof] || _;
}
var _ = Object.defineProperty,
  _ = Object.getOwnPropertyNames,
  _ = Object.getOwnPropertySymbols,
  _ = Object.getOwnPropertyDescriptor,
  _ = Object.getPrototypeOf,
  _ = Object.prototype;
function _(_, _) {
  if (typeof _ != `string`) {
    if (_) {
      let _ = _(_);
      _ && _ !== _ && _(_, _);
    }
    let _ = _(_);
    _ && (_ = _.concat(_(_)));
    let _ = _(_),
      _ = _(_);
    for (let _ = 0; _ < _.length; ++_) {
      let _ = _[_];
      if (!_[_] && !(_ && _[_]) && !(_ && _[_])) {
        let _ = _(_, _);
        try {
          _(_, _, _);
        } catch {}
      }
    }
  }
  return _;
}
var _ = Symbol.for(`react-redux-context`),
  _ = typeof globalThis < `u` ? globalThis : {};
function _() {
  if (!_.createContext) return {};
  let _ = (_[_] ??= new Map()),
    _ = _.get(_.createContext);
  return (_ || ((_ = _.createContext(null)), _.set(_.createContext, _)), _);
}
var _ = _(),
  _ = [null, null];
function _(_, _, _) {
  _(() => _(..._), _);
}
function _(_, _, _, _, _, _) {
  ((_.current = _), (_.current = !1), _.current && ((_.current = null), _()));
}
function _(_, _, _, _, _, _, _, _, _, _, _) {
  if (!_) return () => {};
  let _ = !1,
    _ = null,
    _ = () => {
      if (_ || !_.current) return;
      let _ = _.getState(),
        _,
        _;
      try {
        _ = _(_, _.current);
      } catch (_) {
        ((_ = _), (_ = _));
      }
      (_ || (_ = null),
        _ === _.current
          ? _.current || _()
          : ((_.current = _), (_.current = _), (_.current = !0), _()));
    };
  return (
    (_.onStateChange = _),
    _.trySubscribe(),
    _(),
    () => {
      if (((_ = !0), _.tryUnsubscribe(), (_.onStateChange = null), _)) throw _;
    }
  );
}
function _(_, _) {
  return _ === _;
}
function _(
  _,
  _,
  _,
  {
    pure: _,
    areStatesEqual: _ = _,
    areOwnPropsEqual: _ = _,
    areStatePropsEqual: _ = _,
    areMergedPropsEqual: _ = _,
    forwardRef: _ = !1,
    context: _ = _,
  } = {},
) {
  let _ = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = !!_;
  return (_) => {
    let _ = _.displayName || _.name || `Component`,
      _ = `Connect(${_})`,
      _ = {
        shouldHandleStateChanges: _,
        displayName: _,
        wrappedComponentName: _,
        WrappedComponent: _,
        initMapStateToProps: _,
        initMapDispatchToProps: _,
        initMergeProps: _,
        areStatesEqual: _,
        areStatePropsEqual: _,
        areOwnPropsEqual: _,
        areMergedPropsEqual: _,
      };
    function _(_) {
      let [_, _, _] = _.useMemo(() => {
          let { reactReduxForwardedRef: _, ..._ } = _;
          return [_.context, _, _];
        }, [_]),
        _ = _.useMemo(() => {
          let _ = _;
          return (_?.Consumer, _);
        }, [_, _]),
        _ = _.useContext(_),
        _ = !!_.store && !!_.store.getState && !!_.store.dispatch,
        _ = !!_ && !!_.store,
        _ = _ ? _.store : _.store,
        _ = _ ? _.getServerState : _.getState,
        _ = _.useMemo(() => _(_.dispatch, _), [_]),
        [_, _] = _.useMemo(() => {
          if (!_) return _;
          let _ = _(_, _ ? void 0 : _.subscription);
          return [_, _.notifyNestedSubs.bind(_)];
        }, [_, _, _]),
        _ = _.useMemo(
          () =>
            _
              ? _
              : {
                  ..._,
                  subscription: _,
                },
          [_, _, _],
        ),
        _ = _.useRef(void 0),
        _ = _.useRef(_),
        _ = _.useRef(void 0),
        _ = _.useRef(!1),
        _ = _.useRef(!1),
        _ = _.useRef(void 0);
      _(
        () => (
          (_.current = !0),
          () => {
            _.current = !1;
          }
        ),
        [],
      );
      let _ = _.useMemo(
          () => () =>
            _.current && _ === _.current ? _.current : _(_.getState(), _),
          [_, _],
        ),
        _ = _.useMemo(
          () => (_) => (_ ? _(_, _, _, _, _, _, _, _, _, _, _) : () => {}),
          [_],
        );
      _(_, [_, _, _, _, _, _]);
      let _;
      try {
        _ = _.useSyncExternalStore(_, _, _ ? () => _(_(), _) : _);
      } catch (_) {
        throw (
          _.current &&
            (_.message += `
The error may be correlated with this previous error:
${_.current.stack}

`),
          _
        );
      }
      _(() => {
        ((_.current = void 0), (_.current = void 0), (_.current = _));
      });
      let _ = _.useMemo(
        () =>
          _.createElement(_, {
            ..._,
            ref: _,
          }),
        [_, _, _],
      );
      return _.useMemo(
        () =>
          _
            ? _.createElement(
                _.Provider,
                {
                  value: _,
                },
                _,
              )
            : _,
        [_, _, _],
      );
    }
    let _ = _.memo(_);
    if (((_.WrappedComponent = _), (_.displayName = _.displayName = _), _)) {
      let _ = _.forwardRef(function (_, _) {
        return _.createElement(_, {
          ..._,
          reactReduxForwardedRef: _,
        });
      });
      return ((_.displayName = _), (_.WrappedComponent = _), _(_, _));
    }
    return _(_, _);
  };
}
var _ = _;
function _(_) {
  let { children: _, context: _, serverState: _, store: _ } = _,
    _ = _.useMemo(() => {
      let _ = _(_);
      return {
        store: _,
        subscription: _,
        getServerState: _ ? () => _ : void 0,
      };
    }, [_, _]),
    _ = _.useMemo(() => _.getState(), [_]);
  _(() => {
    let { subscription: _ } = _;
    return (
      (_.onStateChange = _.notifyNestedSubs),
      _.trySubscribe(),
      _ !== _.getState() && _.notifyNestedSubs(),
      () => {
        (_.tryUnsubscribe(), (_.onStateChange = void 0));
      }
    );
  }, [_, _]);
  let _ = _ || _;
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
var _ = _,
  _ = function (_) {
    var _ = _.top,
      _ = _.right,
      _ = _.bottom,
      _ = _.left;
    return {
      top: _,
      right: _,
      bottom: _,
      left: _,
      width: _ - _,
      height: _ - _,
      _: _,
      _: _,
      center: {
        _: (_ + _) / 2,
        _: (_ + _) / 2,
      },
    };
  },
  _ = function (_, _) {
    return {
      top: _.top - _.top,
      left: _.left - _.left,
      bottom: _.bottom + _.bottom,
      right: _.right + _.right,
    };
  },
  _ = function (_, _) {
    return {
      top: _.top + _.top,
      left: _.left + _.left,
      bottom: _.bottom - _.bottom,
      right: _.right - _.right,
    };
  },
  _ = function (_, _) {
    return {
      top: _.top + _._,
      left: _.left + _._,
      bottom: _.bottom + _._,
      right: _.right + _._,
    };
  },
  _ = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  _ = function (_) {
    var _ = _.borderBox,
      _ = _.margin,
      _ = _ === void 0 ? _ : _,
      _ = _.border,
      _ = _ === void 0 ? _ : _,
      _ = _.padding,
      _ = _ === void 0 ? _ : _,
      _ = _(_(_, _)),
      _ = _(_(_, _)),
      _ = _(_(_, _));
    return {
      marginBox: _,
      borderBox: _(_),
      paddingBox: _,
      contentBox: _,
      margin: _,
      border: _,
      padding: _,
    };
  },
  _ = function (_) {
    var _ = _.slice(0, -2);
    if (_.slice(-2) !== `px`) return 0;
    var _ = Number(_);
    return (isNaN(_) && _(!1), _);
  },
  _ = function () {
    return {
      _: window.pageXOffset,
      _: window.pageYOffset,
    };
  },
  _ = function (_, _) {
    var _ = _.borderBox,
      _ = _.border,
      _ = _.margin,
      _ = _.padding;
    return _({
      borderBox: _(_, _),
      border: _,
      margin: _,
      padding: _,
    });
  },
  _ = function (_, _) {
    return (_ === void 0 && (_ = _()), _(_, _));
  },
  _ = function (_, _) {
    return _({
      borderBox: _,
      margin: {
        top: _(_.marginTop),
        right: _(_.marginRight),
        bottom: _(_.marginBottom),
        left: _(_.marginLeft),
      },
      padding: {
        top: _(_.paddingTop),
        right: _(_.paddingRight),
        bottom: _(_.paddingBottom),
        left: _(_.paddingLeft),
      },
      border: {
        top: _(_.borderTopWidth),
        right: _(_.borderRightWidth),
        bottom: _(_.borderBottomWidth),
        left: _(_.borderLeftWidth),
      },
    });
  },
  _ = function (_) {
    return _(_.getBoundingClientRect(), window.getComputedStyle(_));
  },
  _ = function (_) {
    var _ = [],
      _ = null,
      _ = function () {
        ((_ = [...arguments]),
          !_ &&
            (_ = requestAnimationFrame(function () {
              ((_ = null), _.apply(void 0, _));
            })));
      };
    return (
      (_.cancel = function () {
        _ &&= (cancelAnimationFrame(_), null);
      }),
      _
    );
  };
function _(_, _) {}
(_.bind(null, `warn`), _.bind(null, `error`));
function _() {}
function _(_, _) {
  return {
    ..._,
    ..._,
  };
}
function _(_, _, _) {
  let _ = _.map((_) => {
    let _ = _(_, _.options);
    return (
      _.addEventListener(_.eventName, _._, _),
      function () {
        _.removeEventListener(_.eventName, _._, _);
      }
    );
  });
  return function () {
    _.forEach((_) => {
      _();
    });
  };
}
var _ = `Invariant failed`,
  _ = class extends Error {};
_.prototype.toString = function () {
  return this.message;
};
function _(_, _) {
  throw new _(_);
}
var _ = class extends _.Component {
    constructor(..._) {
      (super(..._),
        (this.callbacks = null),
        (this.unbind = _),
        (this.onWindowError = (_) => {
          let _ = this.getCallbacks();
          (_.isDragging() && _.tryAbort(),
            _.error instanceof _ && _.preventDefault());
        }),
        (this.getCallbacks = () => {
          if (!this.callbacks)
            throw Error(`Unable to find AppCallbacks in <ErrorBoundary/>`);
          return this.callbacks;
        }),
        (this.setCallbacks = (_) => {
          this.callbacks = _;
        }));
    }
    componentDidMount() {
      this.unbind = _(window, [
        {
          eventName: `error`,
          _: this.onWindowError,
        },
      ]);
    }
    componentDidCatch(_) {
      if (_ instanceof _) this.setState({});
      else throw _;
    }
    componentWillUnmount() {
      this.unbind();
    }
    render() {
      return this.props.children(this.setCallbacks);
    }
  },
  _ = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
  _ = (_) => _ + 1,
  _ = (_) => `
  You have lifted an item in position ${_(_.source.index)}
`,
  _ = (_, _) => {
    let _ = _.droppableId === _.droppableId,
      _ = _(_.index),
      _ = _(_.index);
    return _
      ? `
      You have moved the item from position ${_}
      to position ${_}
    `
      : `
    You have moved the item from position ${_}
    in list ${_.droppableId}
    to list ${_.droppableId}
    in position ${_}
  `;
  },
  _ = (_, _, _) =>
    _.droppableId === _.droppableId
      ? `
      The item ${_}
      has been combined with ${_.draggableId}`
      : `
      The item ${_}
      in list ${_.droppableId}
      has been combined with ${_.draggableId}
      in list ${_.droppableId}
    `,
  _ = (_) => {
    let _ = _.destination;
    if (_) return _(_.source, _);
    let _ = _.combine;
    return _
      ? _(_.draggableId, _.source, _)
      : `You are over an area that cannot be dropped on`;
  },
  _ = (_) => `
  The item has returned to its starting position
  of ${_(_.index)}
`,
  _ = {
    dragHandleUsageInstructions: _,
    onDragStart: _,
    onDragUpdate: _,
    onDragEnd: (_) => {
      if (_.reason === `CANCEL`)
        return `
      Movement cancelled.
      ${_(_.source)}
    `;
      let _ = _.destination,
        _ = _.combine;
      return _
        ? `
      You have dropped the item.
      ${_(_.source, _)}
    `
        : _
          ? `
      You have dropped the item.
      ${_(_.draggableId, _.source, _)}
    `
          : `
    The item has been dropped while not over a drop area.
    ${_(_.source)}
  `;
    },
  };
function _(_, _) {
  return !!(_ === _ || (Number.isNaN(_) && Number.isNaN(_)));
}
function _(_, _) {
  if (_.length !== _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
  return !0;
}
function _(_, _) {
  let _ = (0, _.useState)(() => ({
      inputs: _,
      result: _(),
    }))[0],
    _ = (0, _.useRef)(!0),
    _ = (0, _.useRef)(_),
    _ =
      _.current || (_ && _.current.inputs && _(_, _.current.inputs))
        ? _.current
        : {
            inputs: _,
            result: _(),
          };
  return (
    (0, _.useEffect)(() => {
      ((_.current = !1), (_.current = _));
    }, [_]),
    _.result
  );
}
function _(_, _) {
  return _(() => _, _);
}
var _ = {
    _: 0,
    _: 0,
  },
  _ = (_, _) => ({
    _: _._ + _._,
    _: _._ + _._,
  }),
  _ = (_, _) => ({
    _: _._ - _._,
    _: _._ - _._,
  }),
  _ = (_, _) => _._ === _._ && _._ === _._,
  _ = (_) => ({
    _: _._ === 0 ? 0 : -_._,
    _: _._ === 0 ? 0 : -_._,
  }),
  _ = (_, _, _ = 0) =>
    _ === `x`
      ? {
          _: _,
          _: _,
        }
      : {
          _: _,
          _: _,
        },
  _ = (_, _) => Math.sqrt((_._ - _._) ** 2 + (_._ - _._) ** 2),
  _ = (_, _) => Math.min(..._.map((_) => _(_, _))),
  _ = (_) => (_) => ({
    _: _(_._),
    _: _(_._),
  }),
  _ = (_, _) => {
    let _ = _({
      top: Math.max(_.top, _.top),
      right: Math.min(_.right, _.right),
      bottom: Math.min(_.bottom, _.bottom),
      left: Math.max(_.left, _.left),
    });
    return _.width <= 0 || _.height <= 0 ? null : _;
  },
  _ = (_, _) => ({
    top: _.top + _._,
    left: _.left + _._,
    bottom: _.bottom + _._,
    right: _.right + _._,
  }),
  _ = (_) => [
    {
      _: _.left,
      _: _.top,
    },
    {
      _: _.right,
      _: _.top,
    },
    {
      _: _.left,
      _: _.bottom,
    },
    {
      _: _.right,
      _: _.bottom,
    },
  ],
  _ = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  _ = (_, _) => (_ ? _(_, _.scroll.diff.displacement) : _),
  _ = (_, _, _) =>
    _ && _.increasedBy
      ? {
          ..._,
          [_.end]: _[_.end] + _.increasedBy[_.line],
        }
      : _,
  _ = (_, _) => (_ && _.shouldClipSubject ? _(_.pageMarginBox, _) : _(_)),
  _ = ({ page: _, withPlaceholder: _, axis: _, frame: _ }) => ({
    page: _,
    withPlaceholder: _,
    active: _(_(_(_.marginBox, _), _, _), _),
  }),
  _ = (_, _) => {
    !_.frame && _();
    let _ = _.frame,
      _ = _(_, _.scroll.initial),
      _ = _(_),
      _ = {
        ..._,
        scroll: {
          initial: _.scroll.initial,
          current: _,
          diff: {
            value: _,
            displacement: _,
          },
          max: _.scroll.max,
        },
      },
      _ = _({
        page: _.subject.page,
        withPlaceholder: _.subject.withPlaceholder,
        axis: _.axis,
        frame: _,
      });
    return {
      ..._,
      frame: _,
      subject: _,
    };
  };
function _(_, _ = _) {
  let _ = null;
  function _(..._) {
    if (_ && _.lastThis === this && _(_, _.lastArgs)) return _.lastResult;
    let _ = _.apply(this, _);
    return (
      (_ = {
        lastResult: _,
        lastArgs: _,
        lastThis: this,
      }),
      _
    );
  }
  return (
    (_.clear = function () {
      _ = null;
    }),
    _
  );
}
var _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
  _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
  _ = _((_) => Object.values(_)),
  _ = _((_) => Object.values(_)),
  _ = _((_, _) =>
    _(_)
      .filter((_) => _ === _.descriptor.droppableId)
      .sort((_, _) => _.descriptor.index - _.descriptor.index),
  );
function _(_) {
  return _._ && _._.type === `REORDER` ? _._.destination : null;
}
function _(_) {
  return _._ && _._.type === `COMBINE` ? _._.combine : null;
}
var _ = _((_, _) => _.filter((_) => _.descriptor._ !== _.descriptor._)),
  _ = ({
    isMovingForward: _,
    draggable: _,
    destination: _,
    insideDestination: _,
    previousImpact: _,
  }) => {
    if (!_.isCombineEnabled || !_(_)) return null;
    function _(_) {
      let _ = {
        type: `COMBINE`,
        combine: {
          draggableId: _,
          droppableId: _.descriptor._,
        },
      };
      return {
        ..._,
        _: _,
      };
    }
    let _ = _.displaced.all,
      _ = _.length ? _[0] : null;
    if (_) return _ ? _(_) : null;
    let _ = _(_, _);
    if (!_) {
      if (!_.length) return null;
      let _ = _[_.length - 1];
      return _(_.descriptor._);
    }
    let _ = _.findIndex((_) => _.descriptor._ === _);
    _ === -1 && _();
    let _ = _ - 1;
    if (_ < 0) return null;
    let _ = _[_];
    return _(_.descriptor._);
  },
  _ = (_, _) => _.descriptor.droppableId === _.descriptor._,
  _ = {
    point: _,
    value: 0,
  },
  _ = {
    invisible: {},
    visible: {},
    all: [],
  },
  _ = {
    displaced: _,
    displacedBy: _,
    _: null,
  },
  _ = (_, _) => (_) => _ <= _ && _ <= _,
  _ = (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => {
      if (_(_.top) && _(_.bottom) && _(_.left) && _(_.right)) return !0;
      let _ = _(_.top) || _(_.bottom),
        _ = _(_.left) || _(_.right);
      if (_ && _) return !0;
      let _ = _.top < _.top && _.bottom > _.bottom,
        _ = _.left < _.left && _.right > _.right;
      return _ && _ ? !0 : (_ && _) || (_ && _);
    };
  },
  _ = (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => _(_.top) && _(_.bottom) && _(_.left) && _(_.right);
  },
  _ = {
    direction: `vertical`,
    line: `y`,
    crossAxisLine: `x`,
    start: `top`,
    end: `bottom`,
    size: `height`,
    crossAxisStart: `left`,
    crossAxisEnd: `right`,
    crossAxisSize: `width`,
  },
  _ = {
    direction: `horizontal`,
    line: `x`,
    crossAxisLine: `y`,
    start: `left`,
    end: `right`,
    size: `width`,
    crossAxisStart: `top`,
    crossAxisEnd: `bottom`,
    crossAxisSize: `height`,
  },
  _ = (_) => (_) => {
    let _ = _(_.top, _.bottom),
      _ = _(_.left, _.right);
    return (_) => (_ === _ ? _(_.top) && _(_.bottom) : _(_.left) && _(_.right));
  },
  _ = (_, _) => _(_, _.frame ? _.frame.scroll.diff.displacement : _),
  _ = (_, _, _) => (_.subject.active ? _(_.subject.active)(_) : !1),
  _ = (_, _, _) => _(_)(_),
  _ = ({
    target: _,
    destination: _,
    viewport: _,
    withDroppableDisplacement: _,
    isVisibleThroughFrameFn: _,
  }) => {
    let _ = _ ? _(_, _) : _;
    return _(_, _, _) && _(_, _, _);
  },
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _,
    }),
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _,
    }),
  _ = (_) =>
    _({
      ..._,
      isVisibleThroughFrameFn: _(_.destination.axis),
    }),
  _ = (_, _, _) => {
    if (typeof _ == `boolean`) return _;
    if (!_) return !0;
    let { invisible: _, visible: _ } = _;
    if (_[_]) return !1;
    let _ = _[_];
    return !_ || _.shouldAnimate;
  };
function _(_, _) {
  let _ = _.page.marginBox;
  return _(
    _(_, {
      top: _.point._,
      right: 0,
      bottom: 0,
      left: _.point._,
    }),
  );
}
function _({
  afterDragging: _,
  destination: _,
  displacedBy: _,
  viewport: _,
  forceShouldAnimate: _,
  last: _,
}) {
  return _.reduce(
    function (_, _) {
      let _ = _(_, _),
        _ = _.descriptor._;
      if (
        (_.all.push(_),
        !_({
          target: _,
          destination: _,
          viewport: _,
          withDroppableDisplacement: !0,
        }))
      )
        return ((_.invisible[_.descriptor._] = !0), _);
      let _ = {
        draggableId: _,
        shouldAnimate: _(_, _, _),
      };
      return ((_.visible[_] = _), _);
    },
    {
      all: [],
      visible: {},
      invisible: {},
    },
  );
}
function _(_, _) {
  if (!_.length) return 0;
  let _ = _[_.length - 1].descriptor.index;
  return _.inHomeList ? _ : _ + 1;
}
function _({
  insideDestination: _,
  inHomeList: _,
  displacedBy: _,
  destination: _,
}) {
  let _ = _(_, {
    inHomeList: _,
  });
  return {
    displaced: _,
    displacedBy: _,
    _: {
      type: `REORDER`,
      destination: {
        droppableId: _.descriptor._,
        index: _,
      },
    },
  };
}
function _({
  draggable: _,
  insideDestination: _,
  destination: _,
  viewport: _,
  displacedBy: _,
  last: _,
  index: _,
  forceShouldAnimate: _,
}) {
  let _ = _(_, _);
  if (_ == null)
    return _({
      insideDestination: _,
      inHomeList: _,
      displacedBy: _,
      destination: _,
    });
  let _ = _.find((_) => _.descriptor.index === _);
  if (!_)
    return _({
      insideDestination: _,
      inHomeList: _,
      displacedBy: _,
      destination: _,
    });
  let _ = _(_, _),
    _ = _.indexOf(_);
  return {
    displaced: _({
      afterDragging: _.slice(_),
      destination: _,
      displacedBy: _,
      last: _,
      viewport: _.frame,
      forceShouldAnimate: _,
    }),
    displacedBy: _,
    _: {
      type: `REORDER`,
      destination: {
        droppableId: _.descriptor._,
        index: _,
      },
    },
  };
}
function _(_, _) {
  return !!_.effected[_];
}
var _ = ({
    isMovingForward: _,
    destination: _,
    draggables: _,
    combine: _,
    afterCritical: _,
  }) => {
    if (!_.isCombineEnabled) return null;
    let _ = _.draggableId,
      _ = _[_].descriptor.index;
    return _(_, _) ? (_ ? _ : _ - 1) : _ ? _ + 1 : _;
  },
  _ = ({
    isMovingForward: _,
    isInHomeList: _,
    insideDestination: _,
    location: _,
  }) => {
    if (!_.length) return null;
    let _ = _.index,
      _ = _ ? _ + 1 : _ - 1,
      _ = _[0].descriptor.index,
      _ = _[_.length - 1].descriptor.index,
      _ = _ ? _ : _ + 1;
    return _ < _ || _ > _ ? null : _;
  },
  _ = ({
    isMovingForward: _,
    isInHomeList: _,
    draggable: _,
    draggables: _,
    destination: _,
    insideDestination: _,
    previousImpact: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _._;
    if ((!_ && _(), _.type === `REORDER`)) {
      let _ = _({
        isMovingForward: _,
        isInHomeList: _,
        location: _.destination,
        insideDestination: _,
      });
      return _ == null
        ? null
        : _({
            draggable: _,
            insideDestination: _,
            destination: _,
            viewport: _,
            last: _.displaced,
            displacedBy: _.displacedBy,
            index: _,
          });
    }
    let _ = _({
      isMovingForward: _,
      destination: _,
      displaced: _.displaced,
      draggables: _,
      combine: _.combine,
      afterCritical: _,
    });
    return _ == null
      ? null
      : _({
          draggable: _,
          insideDestination: _,
          destination: _,
          viewport: _,
          last: _.displaced,
          displacedBy: _.displacedBy,
          index: _,
        });
  },
  _ = ({ displaced: _, afterCritical: _, combineWith: _, displacedBy: _ }) => {
    let _ = !!(_.visible[_] || _.invisible[_]);
    return _(_, _) ? (_ ? _ : _(_.point)) : _ ? _.point : _;
  },
  _ = ({ afterCritical: _, impact: _, draggables: _ }) => {
    let _ = _(_);
    !_ && _();
    let _ = _.draggableId,
      _ = _[_].page.borderBox.center;
    return _(
      _,
      _({
        displaced: _.displaced,
        afterCritical: _,
        combineWith: _,
        displacedBy: _.displacedBy,
      }),
    );
  },
  _ = (_, _) => _.margin[_.start] + _.borderBox[_.size] / 2,
  _ = (_, _) => _.margin[_.end] + _.borderBox[_.size] / 2,
  _ = (_, _, _) =>
    _[_.crossAxisStart] +
    _.margin[_.crossAxisStart] +
    _.borderBox[_.crossAxisSize] / 2,
  _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
    _(_.line, _.marginBox[_.end] + _(_, _), _(_, _.marginBox, _)),
  _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
    _(_.line, _.marginBox[_.start] - _(_, _), _(_, _.marginBox, _)),
  _ = ({ axis: _, moveInto: _, isMoving: _ }) =>
    _(_.line, _.contentBox[_.start] + _(_, _), _(_, _.contentBox, _)),
  _ = ({
    impact: _,
    draggable: _,
    draggables: _,
    droppable: _,
    afterCritical: _,
  }) => {
    let _ = _(_.descriptor._, _),
      _ = _.page,
      _ = _.axis;
    if (!_.length)
      return _({
        axis: _,
        moveInto: _.page,
        isMoving: _,
      });
    let { displaced: _, displacedBy: _ } = _,
      _ = _.all[0];
    if (_) {
      let _ = _[_];
      return _(_, _)
        ? _({
            axis: _,
            moveRelativeTo: _.page,
            isMoving: _,
          })
        : _({
            axis: _,
            moveRelativeTo: _(_.page, _.point),
            isMoving: _,
          });
    }
    let _ = _[_.length - 1];
    return _.descriptor._ === _.descriptor._
      ? _.borderBox.center
      : _(_.descriptor._, _)
        ? _({
            axis: _,
            moveRelativeTo: _(_.page, _(_.displacedBy.point)),
            isMoving: _,
          })
        : _({
            axis: _,
            moveRelativeTo: _.page,
            isMoving: _,
          });
  },
  _ = (_, _) => {
    let _ = _.frame;
    return _ ? _(_, _.scroll.diff.displacement) : _;
  },
  _ = ({
    impact: _,
    draggable: _,
    droppable: _,
    draggables: _,
    afterCritical: _,
  }) => {
    let _ = _.page.borderBox.center,
      _ = _._;
    return !_ || !_
      ? _
      : _.type === `REORDER`
        ? _({
            impact: _,
            draggable: _,
            draggables: _,
            droppable: _,
            afterCritical: _,
          })
        : _({
            impact: _,
            draggables: _,
            afterCritical: _,
          });
  },
  _ = (_) => {
    let _ = _(_),
      _ = _.droppable;
    return _ ? _(_, _) : _;
  },
  _ = (_, _) => {
    let _ = _(_, _.scroll.initial),
      _ = _(_);
    return {
      frame: _({
        top: _._,
        bottom: _._ + _.frame.height,
        left: _._,
        right: _._ + _.frame.width,
      }),
      scroll: {
        initial: _.scroll.initial,
        max: _.scroll.max,
        current: _,
        diff: {
          value: _,
          displacement: _,
        },
      },
    };
  };
function _(_, _) {
  return _.map((_) => _[_]);
}
function _(_, _) {
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_].visible[_];
    if (_) return _;
  }
  return null;
}
var _ = ({
    impact: _,
    viewport: _,
    destination: _,
    draggables: _,
    maxScrollChange: _,
  }) => {
    let _ = _(_, _(_.scroll.current, _)),
      _ = _.frame ? _(_, _(_.frame.scroll.current, _)) : _,
      _ = _.displaced,
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        last: _,
        forceShouldAnimate: !1,
      }),
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        last: _,
        forceShouldAnimate: !1,
      }),
      _ = {},
      _ = {},
      _ = [_, _, _];
    return (
      _.all.forEach((_) => {
        let _ = _(_, _);
        _ ? (_[_] = _) : (_[_] = !0);
      }),
      {
        ..._,
        displaced: {
          all: _.all,
          invisible: _,
          visible: _,
        },
      }
    );
  },
  _ = (_, _) => _(_.scroll.diff.displacement, _),
  _ = ({ pageBorderBoxCenter: _, draggable: _, viewport: _ }) => {
    let _ = _(_(_, _), _.page.borderBox.center);
    return _(_.client.borderBox.center, _);
  },
  _ = ({
    draggable: _,
    destination: _,
    newPageBorderBoxCenter: _,
    viewport: _,
    withDroppableDisplacement: _,
    onlyOnMainAxis: _ = !1,
  }) => {
    let _ = _(_, _.page.borderBox.center),
      _ = {
        target: _(_.page.borderBox, _),
        destination: _,
        withDroppableDisplacement: _,
        viewport: _,
      };
    return _ ? _(_) : _(_);
  },
  _ = ({
    isMovingForward: _,
    draggable: _,
    destination: _,
    draggables: _,
    previousImpact: _,
    viewport: _,
    previousPageBorderBoxCenter: _,
    previousClientSelection: _,
    afterCritical: _,
  }) => {
    if (!_.isEnabled) return null;
    let _ = _(_.descriptor._, _),
      _ = _(_, _),
      _ =
        _({
          isMovingForward: _,
          draggable: _,
          destination: _,
          insideDestination: _,
          previousImpact: _,
        }) ||
        _({
          isMovingForward: _,
          isInHomeList: _,
          draggable: _,
          draggables: _,
          destination: _,
          insideDestination: _,
          previousImpact: _,
          viewport: _,
          afterCritical: _,
        });
    if (!_) return null;
    let _ = _({
      impact: _,
      draggable: _,
      droppable: _,
      draggables: _,
      afterCritical: _,
    });
    if (
      _({
        draggable: _,
        destination: _,
        newPageBorderBoxCenter: _,
        viewport: _.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
    )
      return {
        clientSelection: _({
          pageBorderBoxCenter: _,
          draggable: _,
          viewport: _,
        }),
        impact: _,
        scrollJumpRequest: null,
      };
    let _ = _(_, _);
    return {
      clientSelection: _,
      impact: _({
        impact: _,
        viewport: _,
        destination: _,
        draggables: _,
        maxScrollChange: _,
      }),
      scrollJumpRequest: _,
    };
  },
  _ = (_) => {
    let _ = _.subject.active;
    return (!_ && _(), _);
  },
  _ = ({
    isMovingForward: _,
    pageBorderBoxCenter: _,
    source: _,
    droppables: _,
    viewport: _,
  }) => {
    let _ = _.subject.active;
    if (!_) return null;
    let _ = _.axis,
      _ = _(_[_.start], _[_.end]),
      _ = _(_)
        .filter((_) => _ !== _)
        .filter((_) => _.isEnabled)
        .filter((_) => !!_.subject.active)
        .filter((_) => _(_.frame)(_(_)))
        .filter((_) => {
          let _ = _(_);
          return _
            ? _[_.crossAxisEnd] < _[_.crossAxisEnd]
            : _[_.crossAxisStart] < _[_.crossAxisStart];
        })
        .filter((_) => {
          let _ = _(_),
            _ = _(_[_.start], _[_.end]);
          return _(_[_.start]) || _(_[_.end]) || _(_[_.start]) || _(_[_.end]);
        })
        .sort((_, _) => {
          let _ = _(_)[_.crossAxisStart],
            _ = _(_)[_.crossAxisStart];
          return _ ? _ - _ : _ - _;
        })
        .filter(
          (_, _, _) => _(_)[_.crossAxisStart] === _(_[0])[_.crossAxisStart],
        );
    if (!_.length) return null;
    if (_.length === 1) return _[0];
    let _ = _.filter((_) => _(_(_)[_.start], _(_)[_.end])(_[_.line]));
    return _.length === 1
      ? _[0]
      : _.length > 1
        ? _.sort((_, _) => _(_)[_.start] - _(_)[_.start])[0]
        : _.sort((_, _) => {
            let _ = _(_, _(_(_))),
              _ = _(_, _(_(_)));
            return _ === _ ? _(_)[_.start] - _(_)[_.start] : _ - _;
          })[0];
  },
  _ = (_, _) => {
    let _ = _.page.borderBox.center;
    return _(_.descriptor._, _) ? _(_, _.displacedBy.point) : _;
  },
  _ = (_, _) => {
    let _ = _.page.borderBox;
    return _(_.descriptor._, _) ? _(_, _(_.displacedBy.point)) : _;
  },
  _ = ({
    pageBorderBoxCenter: _,
    viewport: _,
    destination: _,
    insideDestination: _,
    afterCritical: _,
  }) =>
    _.filter((_) =>
      _({
        target: _(_, _),
        destination: _,
        viewport: _.frame,
        withDroppableDisplacement: !0,
      }),
    ).sort((_, _) => {
      let _ = _(_, _(_, _(_, _))),
        _ = _(_, _(_, _(_, _)));
      return _ < _ ? -1 : _ < _ ? 1 : _.descriptor.index - _.descriptor.index;
    })[0] || null,
  _ = _(function (_, _) {
    let _ = _[_.line];
    return {
      value: _,
      point: _(_.line, _),
    };
  }),
  _ = (_, _, _) => {
    let _ = _.axis;
    if (_.descriptor.mode === `virtual`) return _(_.line, _[_.line]);
    let _ = _.subject.page.contentBox[_.size],
      _ =
        _(_.descriptor._, _).reduce(
          (_, _) => _ + _.client.marginBox[_.size],
          0,
        ) +
        _[_.line] -
        _;
    return _ <= 0 ? null : _(_.line, _);
  },
  _ = (_, _) => ({
    ..._,
    scroll: {
      ..._.scroll,
      max: _,
    },
  }),
  _ = (_, _, _) => {
    let _ = _.frame;
    (_(_, _) && _(), _.subject.withPlaceholder && _());
    let _ = _(_.axis, _.displaceBy).point,
      _ = _(_, _, _),
      _ = {
        placeholderSize: _,
        increasedBy: _,
        oldFrameMaxScroll: _.frame ? _.frame.scroll.max : null,
      };
    if (!_) {
      let _ = _({
        page: _.subject.page,
        withPlaceholder: _,
        axis: _.axis,
        frame: _.frame,
      });
      return {
        ..._,
        subject: _,
      };
    }
    let _ = _(_, _ ? _(_.scroll.max, _) : _.scroll.max),
      _ = _({
        page: _.subject.page,
        withPlaceholder: _,
        axis: _.axis,
        frame: _,
      });
    return {
      ..._,
      subject: _,
      frame: _,
    };
  },
  _ = (_) => {
    let _ = _.subject.withPlaceholder;
    !_ && _();
    let _ = _.frame;
    if (!_) {
      let _ = _({
        page: _.subject.page,
        axis: _.axis,
        frame: null,
        withPlaceholder: null,
      });
      return {
        ..._,
        subject: _,
      };
    }
    let _ = _.oldFrameMaxScroll;
    !_ && _();
    let _ = _(_, _),
      _ = _({
        page: _.subject.page,
        axis: _.axis,
        frame: _,
        withPlaceholder: null,
      });
    return {
      ..._,
      subject: _,
      frame: _,
    };
  },
  _ = ({
    previousPageBorderBoxCenter: _,
    moveRelativeTo: _,
    insideDestination: _,
    draggable: _,
    draggables: _,
    destination: _,
    viewport: _,
    afterCritical: _,
  }) => {
    if (!_) {
      if (_.length) return null;
      let _ = {
          displaced: _,
          displacedBy: _,
          _: {
            type: `REORDER`,
            destination: {
              droppableId: _.descriptor._,
              index: 0,
            },
          },
        },
        _ = _({
          impact: _,
          draggable: _,
          droppable: _,
          draggables: _,
          afterCritical: _,
        });
      return _({
        draggable: _,
        destination: _(_, _) ? _ : _(_, _, _),
        newPageBorderBoxCenter: _,
        viewport: _.frame,
        withDroppableDisplacement: !1,
        onlyOnMainAxis: !0,
      })
        ? _
        : null;
    }
    let _ = _[_.axis.line] <= _.page.borderBox.center[_.axis.line],
      _ = (() => {
        let _ = _.descriptor.index;
        return _.descriptor._ === _.descriptor._ || _ ? _ : _ + 1;
      })();
    return _({
      draggable: _,
      insideDestination: _,
      destination: _,
      viewport: _,
      displacedBy: _(_.axis, _.displaceBy),
      last: _,
      index: _,
    });
  },
  _ = ({
    isMovingForward: _,
    previousPageBorderBoxCenter: _,
    draggable: _,
    isOver: _,
    draggables: _,
    droppables: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _({
      isMovingForward: _,
      pageBorderBoxCenter: _,
      source: _,
      droppables: _,
      viewport: _,
    });
    if (!_) return null;
    let _ = _(_.descriptor._, _),
      _ = _({
        previousPageBorderBoxCenter: _,
        destination: _,
        draggable: _,
        draggables: _,
        moveRelativeTo: _({
          pageBorderBoxCenter: _,
          viewport: _,
          destination: _,
          insideDestination: _,
          afterCritical: _,
        }),
        insideDestination: _,
        viewport: _,
        afterCritical: _,
      });
    return _
      ? {
          clientSelection: _({
            pageBorderBoxCenter: _({
              impact: _,
              draggable: _,
              droppable: _,
              draggables: _,
              afterCritical: _,
            }),
            draggable: _,
            viewport: _,
          }),
          impact: _,
          scrollJumpRequest: null,
        }
      : null;
  },
  _ = (_) => {
    let _ = _._;
    return _
      ? _.type === `REORDER`
        ? _.destination.droppableId
        : _.combine.droppableId
      : null;
  },
  _ = (_, _) => {
    let _ = _(_);
    return _ ? _[_] : null;
  },
  _ = ({ state: _, type: _ }) => {
    let _ = _(_.impact, _.dimensions.droppables),
      _ = !!_,
      _ = _.dimensions.droppables[_.critical.droppable._],
      _ = _ || _,
      _ = _.axis.direction,
      _ =
        (_ === `vertical` && (_ === `MOVE_UP` || _ === `MOVE_DOWN`)) ||
        (_ === `horizontal` && (_ === `MOVE_LEFT` || _ === `MOVE_RIGHT`));
    if (_ && !_) return null;
    let _ = _ === `MOVE_DOWN` || _ === `MOVE_RIGHT`,
      _ = _.dimensions.draggables[_.critical.draggable._],
      _ = _.current.page.borderBoxCenter,
      { draggables: _, droppables: _ } = _.dimensions;
    return _
      ? _({
          isMovingForward: _,
          previousPageBorderBoxCenter: _,
          draggable: _,
          destination: _,
          draggables: _,
          viewport: _.viewport,
          previousClientSelection: _.current.client.selection,
          previousImpact: _.impact,
          afterCritical: _.afterCritical,
        })
      : _({
          isMovingForward: _,
          previousPageBorderBoxCenter: _,
          draggable: _,
          isOver: _,
          draggables: _,
          droppables: _,
          viewport: _.viewport,
          afterCritical: _.afterCritical,
        });
  };
function _(_) {
  return _.phase === `DRAGGING` || _.phase === `COLLECTING`;
}
function _(_) {
  let _ = _(_.top, _.bottom),
    _ = _(_.left, _.right);
  return function (_) {
    return _(_._) && _(_._);
  };
}
function _(_, _) {
  return (
    _.left < _.right && _.right > _.left && _.top < _.bottom && _.bottom > _.top
  );
}
function _({ pageBorderBox: _, draggable: _, candidates: _ }) {
  let _ = _.page.borderBox.center,
    _ = _.map((_) => {
      let _ = _.axis,
        _ = _(
          _.axis.line,
          _.center[_.line],
          _.page.borderBox.center[_.crossAxisLine],
        );
      return {
        _: _.descriptor._,
        distance: _(_, _),
      };
    }).sort((_, _) => _.distance - _.distance);
  return _[0] ? _[0]._ : null;
}
function _({ pageBorderBox: _, draggable: _, droppables: _ }) {
  let _ = _(_).filter((_) => {
    if (!_.isEnabled) return !1;
    let _ = _.subject.active;
    if (!_ || !_(_, _)) return !1;
    if (_(_)(_.center)) return !0;
    let _ = _.axis,
      _ = _.center[_.crossAxisLine],
      _ = _[_.crossAxisStart],
      _ = _[_.crossAxisEnd],
      _ = _(_[_.crossAxisStart], _[_.crossAxisEnd]),
      _ = _(_),
      _ = _(_);
    return !_ && !_ ? !0 : _ ? _ < _ : _ > _;
  });
  return _.length
    ? _.length === 1
      ? _[0].descriptor._
      : _({
          pageBorderBox: _,
          draggable: _,
          candidates: _,
        })
    : null;
}
var _ = (_, _) => _(_(_, _)),
  _ = (_, _) => {
    let _ = _.frame;
    return _ ? _(_, _.scroll.diff.value) : _;
  };
function _({ displaced: _, _: _ }) {
  return !!(_.visible[_] || _.invisible[_]);
}
function _({ draggable: _, closest: _, inHomeList: _ }) {
  return _
    ? _ && _.descriptor.index > _.descriptor.index
      ? _.descriptor.index - 1
      : _.descriptor.index
    : null;
}
var _ = ({
    pageBorderBoxWithDroppableScroll: _,
    draggable: _,
    destination: _,
    insideDestination: _,
    last: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _.axis,
      _ = _(_.axis, _.displaceBy),
      _ = _.value,
      _ = _[_.start],
      _ = _[_.end];
    return _({
      draggable: _,
      insideDestination: _,
      destination: _,
      viewport: _,
      last: _,
      displacedBy: _,
      index: _({
        draggable: _,
        closest:
          _(_, _).find((_) => {
            let _ = _.descriptor._,
              _ = _.page.borderBox.center[_.line],
              _ = _(_, _),
              _ = _({
                displaced: _,
                _: _,
              });
            return _ ? (_ ? _ <= _ : _ < _ - _) : _ ? _ <= _ + _ : _ < _;
          }) || null,
        inHomeList: _(_, _),
      }),
    });
  },
  _ = 4,
  _ = ({
    draggable: _,
    pageBorderBoxWithDroppableScroll: _,
    previousImpact: _,
    destination: _,
    insideDestination: _,
    afterCritical: _,
  }) => {
    if (!_.isCombineEnabled) return null;
    let _ = _.axis,
      _ = _(_.axis, _.displaceBy),
      _ = _.value,
      _ = _[_.start],
      _ = _[_.end],
      _ = _(_, _).find((_) => {
        let _ = _.descriptor._,
          _ = _.page.borderBox,
          _ = _[_.size] / _,
          _ = _(_, _),
          _ = _({
            displaced: _.displaced,
            _: _,
          });
        return _
          ? _
            ? _ > _[_.start] + _ && _ < _[_.end] - _
            : _ > _[_.start] - _ + _ && _ < _[_.end] - _ - _
          : _
            ? _ > _[_.start] + _ + _ && _ < _[_.end] + _ - _
            : _ > _[_.start] + _ && _ < _[_.end] - _;
      });
    return _
      ? {
          displacedBy: _,
          displaced: _.displaced,
          _: {
            type: `COMBINE`,
            combine: {
              draggableId: _.descriptor._,
              droppableId: _.descriptor._,
            },
          },
        }
      : null;
  },
  _ = ({
    pageOffset: _,
    draggable: _,
    draggables: _,
    droppables: _,
    previousImpact: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let _ = _(_.page.borderBox, _),
      _ = _({
        pageBorderBox: _,
        draggable: _,
        droppables: _,
      });
    if (!_) return _;
    let _ = _[_],
      _ = _(_.descriptor._, _),
      _ = _(_, _);
    return (
      _({
        pageBorderBoxWithDroppableScroll: _,
        draggable: _,
        previousImpact: _,
        destination: _,
        insideDestination: _,
        afterCritical: _,
      }) ||
      _({
        pageBorderBoxWithDroppableScroll: _,
        draggable: _,
        destination: _,
        insideDestination: _,
        last: _.displaced,
        viewport: _,
        afterCritical: _,
      })
    );
  },
  _ = (_, _) => ({
    ..._,
    [_.descriptor._]: _,
  }),
  _ = ({ previousImpact: _, impact: _, droppables: _ }) => {
    let _ = _(_),
      _ = _(_);
    if (!_ || _ === _) return _;
    let _ = _[_];
    return _.subject.withPlaceholder ? _(_, _(_)) : _;
  },
  _ = ({
    draggable: _,
    draggables: _,
    droppables: _,
    previousImpact: _,
    impact: _,
  }) => {
    let _ = _({
        previousImpact: _,
        impact: _,
        droppables: _,
      }),
      _ = _(_);
    if (!_) return _;
    let _ = _[_];
    return _(_, _) || _.subject.withPlaceholder ? _ : _(_, _(_, _, _));
  },
  _ = ({
    state: _,
    clientSelection: _,
    dimensions: _,
    viewport: _,
    impact: _,
    scrollJumpRequest: _,
  }) => {
    let _ = _ || _.viewport,
      _ = _ || _.dimensions,
      _ = _ || _.current.client.selection,
      _ = _(_, _.initial.client.selection),
      _ = {
        offset: _,
        selection: _,
        borderBoxCenter: _(_.initial.client.borderBoxCenter, _),
      },
      _ = {
        selection: _(_.selection, _.scroll.current),
        borderBoxCenter: _(_.borderBoxCenter, _.scroll.current),
        offset: _(_.offset, _.scroll.diff.value),
      },
      _ = {
        client: _,
        page: _,
      };
    if (_.phase === `COLLECTING`)
      return {
        ..._,
        dimensions: _,
        viewport: _,
        current: _,
      };
    let _ = _.draggables[_.critical.draggable._],
      _ =
        _ ||
        _({
          pageOffset: _.offset,
          draggable: _,
          draggables: _.draggables,
          droppables: _.droppables,
          previousImpact: _.impact,
          viewport: _,
          afterCritical: _.afterCritical,
        }),
      _ = _({
        draggable: _,
        impact: _,
        previousImpact: _.impact,
        draggables: _.draggables,
        droppables: _.droppables,
      });
    return {
      ..._,
      current: _,
      dimensions: {
        draggables: _.draggables,
        droppables: _,
      },
      impact: _,
      viewport: _,
      scrollJumpRequest: _ || null,
      forceShouldAnimate: !_ && null,
    };
  };
function _(_, _) {
  return _.map((_) => _[_]);
}
var _ = ({
    impact: _,
    viewport: _,
    draggables: _,
    destination: _,
    forceShouldAnimate: _,
  }) => {
    let _ = _.displaced,
      _ = _({
        afterDragging: _(_.all, _),
        destination: _,
        displacedBy: _.displacedBy,
        viewport: _.frame,
        forceShouldAnimate: _,
        last: _,
      });
    return {
      ..._,
      displaced: _,
    };
  },
  _ = ({
    impact: _,
    draggable: _,
    droppable: _,
    draggables: _,
    viewport: _,
    afterCritical: _,
  }) =>
    _({
      pageBorderBoxCenter: _({
        impact: _,
        draggable: _,
        draggables: _,
        droppable: _,
        afterCritical: _,
      }),
      draggable: _,
      viewport: _,
    }),
  _ = ({ state: _, dimensions: _, viewport: _ }) => {
    _.movementMode !== `SNAP` && _();
    let _ = _.impact,
      _ = _ || _.viewport,
      _ = _ || _.dimensions,
      { draggables: _, droppables: _ } = _,
      _ = _[_.critical.draggable._],
      _ = _(_);
    !_ && _();
    let _ = _[_],
      _ = _({
        impact: _,
        viewport: _,
        destination: _,
        draggables: _,
      });
    return _({
      impact: _,
      clientSelection: _({
        impact: _,
        draggable: _,
        droppable: _,
        draggables: _,
        viewport: _,
        afterCritical: _.afterCritical,
      }),
      state: _,
      dimensions: _,
      viewport: _,
    });
  },
  _ = (_) => ({
    index: _.index,
    droppableId: _.droppableId,
  }),
  _ = ({ draggable: _, home: _, draggables: _, viewport: _ }) => {
    let _ = _(_.axis, _.displaceBy),
      _ = _(_.descriptor._, _),
      _ = _.indexOf(_);
    _ === -1 && _();
    let _ = _.slice(_ + 1),
      _ = _.reduce((_, _) => ((_[_.descriptor._] = !0), _), {}),
      _ = {
        inVirtualList: _.descriptor.mode === `virtual`,
        displacedBy: _,
        effected: _,
      };
    return {
      impact: {
        displaced: _({
          afterDragging: _,
          destination: _,
          displacedBy: _,
          last: null,
          viewport: _.frame,
          forceShouldAnimate: !1,
        }),
        displacedBy: _,
        _: {
          type: `REORDER`,
          destination: _(_.descriptor),
        },
      },
      afterCritical: _,
    };
  },
  _ = (_, _) => ({
    draggables: _.draggables,
    droppables: _(_.droppables, _),
  }),
  _ = ({ draggable: _, offset: _, initialWindowScroll: _ }) => {
    let _ = _(_.client, _),
      _ = _(_, _);
    return {
      ..._,
      placeholder: {
        ..._.placeholder,
        client: _,
      },
      client: _,
      page: _,
    };
  },
  _ = (_) => {
    let _ = _.frame;
    return (!_ && _(), _);
  },
  _ = ({ additions: _, updatedDroppables: _, viewport: _ }) => {
    let _ = _.scroll.diff.value;
    return _.map((_) => {
      let _ = _[_.descriptor.droppableId],
        _ = _(_).scroll.diff.value;
      return _({
        draggable: _,
        offset: _(_, _),
        initialWindowScroll: _.scroll.initial,
      });
    });
  },
  _ = ({ state: _, published: _ }) => {
    let _ = _.modified.map((_) => {
        let _ = _.dimensions.droppables[_.droppableId];
        return _(_, _.scroll);
      }),
      _ = {
        ..._.dimensions.droppables,
        ..._(_),
      },
      _ = _(
        _({
          additions: _.additions,
          updatedDroppables: _,
          viewport: _.viewport,
        }),
      ),
      _ = {
        ..._.dimensions.draggables,
        ..._,
      };
    _.removals.forEach((_) => {
      delete _[_];
    });
    let _ = {
        droppables: _,
        draggables: _,
      },
      _ = _(_.impact),
      _ = _ ? _.droppables[_] : null,
      _ = _.draggables[_.critical.draggable._],
      _ = _.droppables[_.critical.droppable._],
      { impact: _, afterCritical: _ } = _({
        draggable: _,
        home: _,
        draggables: _,
        viewport: _.viewport,
      }),
      _ = _ && _.isCombineEnabled ? _.impact : _,
      _ = _({
        pageOffset: _.current.page.offset,
        draggable: _.draggables[_.critical.draggable._],
        draggables: _.draggables,
        droppables: _.droppables,
        previousImpact: _,
        viewport: _.viewport,
        afterCritical: _,
      }),
      _ = {
        ..._,
        phase: `DRAGGING`,
        impact: _,
        onLiftImpact: _,
        dimensions: _,
        afterCritical: _,
        forceShouldAnimate: !1,
      };
    return _.phase === `COLLECTING`
      ? _
      : {
          ..._,
          phase: `DROP_PENDING`,
          reason: _.reason,
          isWaiting: !1,
        };
  },
  _ = (_) => _.movementMode === `SNAP`,
  _ = (_, _, _) => {
    let _ = _(_.dimensions, _);
    return !_(_) || _
      ? _({
          state: _,
          dimensions: _,
        })
      : _({
          state: _,
          dimensions: _,
        });
  };
function _(_) {
  return _.isDragging && _.movementMode === `SNAP`
    ? {
        ..._,
        scrollJumpRequest: null,
      }
    : _;
}
var _ = {
    phase: `IDLE`,
    completed: null,
    shouldFlush: !1,
  },
  _ = (_ = _, _) => {
    if (_.type === `FLUSH`)
      return {
        ..._,
        shouldFlush: !0,
      };
    if (_.type === `INITIAL_PUBLISH`) {
      _.phase !== `IDLE` && _();
      let {
          critical: _,
          clientSelection: _,
          viewport: _,
          dimensions: _,
          movementMode: _,
        } = _.payload,
        _ = _.draggables[_.draggable._],
        _ = _.droppables[_.droppable._],
        _ = {
          selection: _,
          borderBoxCenter: _.client.borderBox.center,
          offset: _,
        },
        _ = {
          client: _,
          page: {
            selection: _(_.selection, _.scroll.initial),
            borderBoxCenter: _(_.selection, _.scroll.initial),
            offset: _(_.selection, _.scroll.diff.value),
          },
        },
        _ = _(_.droppables).every((_) => !_.isFixedOnPage),
        { impact: _, afterCritical: _ } = _({
          draggable: _,
          home: _,
          draggables: _.draggables,
          viewport: _,
        });
      return {
        phase: `DRAGGING`,
        isDragging: !0,
        critical: _,
        movementMode: _,
        dimensions: _,
        initial: _,
        current: _,
        isWindowScrollAllowed: _,
        impact: _,
        afterCritical: _,
        onLiftImpact: _,
        viewport: _,
        scrollJumpRequest: null,
        forceShouldAnimate: null,
      };
    }
    if (_.type === `COLLECTION_STARTING`)
      return _.phase === `COLLECTING` || _.phase === `DROP_PENDING`
        ? _
        : (_.phase !== `DRAGGING` && _(),
          {
            ..._,
            phase: `COLLECTING`,
          });
    if (_.type === `PUBLISH_WHILE_DRAGGING`)
      return (
        _.phase !== `COLLECTING` && _.phase !== `DROP_PENDING` && _(),
        _({
          state: _,
          published: _.payload,
        })
      );
    if (_.type === `MOVE`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _();
      let { client: _ } = _.payload;
      return _(_, _.current.client.selection)
        ? _
        : _({
            state: _,
            clientSelection: _,
            impact: _(_) ? _.impact : null,
          });
    }
    if (_.type === `UPDATE_DROPPABLE_SCROLL`) {
      if (_.phase === `DROP_PENDING` || _.phase === `COLLECTING`) return _(_);
      !_(_) && _();
      let { _: _, newScroll: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return _ ? _(_, _(_, _), !1) : _;
    }
    if (_.type === `UPDATE_DROPPABLE_IS_ENABLED`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _();
      let { _: _, isEnabled: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return (
        !_ && _(),
        _.isEnabled === _ && _(),
        _(
          _,
          {
            ..._,
            isEnabled: _,
          },
          !0,
        )
      );
    }
    if (_.type === `UPDATE_DROPPABLE_IS_COMBINE_ENABLED`) {
      if (_.phase === `DROP_PENDING`) return _;
      !_(_) && _();
      let { _: _, isCombineEnabled: _ } = _.payload,
        _ = _.dimensions.droppables[_];
      return (
        !_ && _(),
        _.isCombineEnabled === _ && _(),
        _(
          _,
          {
            ..._,
            isCombineEnabled: _,
          },
          !0,
        )
      );
    }
    if (_.type === `MOVE_BY_WINDOW_SCROLL`) {
      if (_.phase === `DROP_PENDING` || _.phase === `DROP_ANIMATING`) return _;
      (!_(_) && _(), !_.isWindowScrollAllowed && _());
      let _ = _.payload.newScroll;
      if (_(_.viewport.scroll.current, _)) return _(_);
      let _ = _(_.viewport, _);
      return _(_)
        ? _({
            state: _,
            viewport: _,
          })
        : _({
            state: _,
            viewport: _,
          });
    }
    if (_.type === `UPDATE_VIEWPORT_MAX_SCROLL`) {
      if (!_(_)) return _;
      let _ = _.payload.maxScroll;
      if (_(_, _.viewport.scroll.max)) return _;
      let _ = {
        ..._.viewport,
        scroll: {
          ..._.viewport.scroll,
          max: _,
        },
      };
      return {
        ..._,
        viewport: _,
      };
    }
    if (
      _.type === `MOVE_UP` ||
      _.type === `MOVE_DOWN` ||
      _.type === `MOVE_LEFT` ||
      _.type === `MOVE_RIGHT`
    ) {
      if (_.phase === `COLLECTING` || _.phase === `DROP_PENDING`) return _;
      _.phase !== `DRAGGING` && _();
      let _ = _({
        state: _,
        type: _.type,
      });
      return _
        ? _({
            state: _,
            impact: _.impact,
            clientSelection: _.clientSelection,
            scrollJumpRequest: _.scrollJumpRequest,
          })
        : _;
    }
    if (_.type === `DROP_PENDING`) {
      let _ = _.payload.reason;
      return (
        _.phase !== `COLLECTING` && _(),
        {
          ..._,
          phase: `DROP_PENDING`,
          isWaiting: !0,
          reason: _,
        }
      );
    }
    if (_.type === `DROP_ANIMATE`) {
      let { completed: _, dropDuration: _, newHomeClientOffset: _ } = _.payload;
      return (
        _.phase !== `DRAGGING` && _.phase !== `DROP_PENDING` && _(),
        {
          phase: `DROP_ANIMATING`,
          completed: _,
          dropDuration: _,
          newHomeClientOffset: _,
          dimensions: _.dimensions,
        }
      );
    }
    if (_.type === `DROP_COMPLETE`) {
      let { completed: _ } = _.payload;
      return {
        phase: `IDLE`,
        completed: _,
        shouldFlush: !1,
      };
    }
    return _;
  };
function _(_, _) {
  return _ instanceof Object && `type` in _ && _.type === _;
}
var _ = (_) => ({
    type: `BEFORE_INITIAL_CAPTURE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `LIFT`,
    payload: _,
  }),
  _ = (_) => ({
    type: `INITIAL_PUBLISH`,
    payload: _,
  }),
  _ = (_) => ({
    type: `PUBLISH_WHILE_DRAGGING`,
    payload: _,
  }),
  _ = () => ({
    type: `COLLECTION_STARTING`,
    payload: null,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_SCROLL`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_IS_ENABLED`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_DROPPABLE_IS_COMBINE_ENABLED`,
    payload: _,
  }),
  _ = (_) => ({
    type: `MOVE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `MOVE_BY_WINDOW_SCROLL`,
    payload: _,
  }),
  _ = (_) => ({
    type: `UPDATE_VIEWPORT_MAX_SCROLL`,
    payload: _,
  }),
  _ = () => ({
    type: `MOVE_UP`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_DOWN`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_RIGHT`,
    payload: null,
  }),
  _ = () => ({
    type: `MOVE_LEFT`,
    payload: null,
  }),
  _ = () => ({
    type: `FLUSH`,
    payload: null,
  }),
  _ = (_) => ({
    type: `DROP_ANIMATE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP_COMPLETE`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP`,
    payload: _,
  }),
  _ = (_) => ({
    type: `DROP_PENDING`,
    payload: _,
  }),
  _ = () => ({
    type: `DROP_ANIMATION_FINISHED`,
    payload: null,
  }),
  _ =
    (_) =>
    ({ getState: _, dispatch: _ }) =>
    (_) =>
    (_) => {
      if (!_(_, `LIFT`)) {
        _(_);
        return;
      }
      let { _: _, clientSelection: _, movementMode: _ } = _.payload,
        _ = _();
      (_.phase === `DROP_ANIMATING` &&
        _(
          _({
            completed: _.completed,
          }),
        ),
        _().phase !== `IDLE` && _(),
        _(_()),
        _(
          _({
            draggableId: _,
            movementMode: _,
          }),
        ));
      let _ = {
          draggableId: _,
          scrollOptions: {
            shouldPublishImmediately: _ === `SNAP`,
          },
        },
        { critical: _, dimensions: _, viewport: _ } = _.startPublishing(_);
      _(
        _({
          critical: _,
          dimensions: _,
          clientSelection: _,
          movementMode: _,
          viewport: _,
        }),
      );
    },
  _ = (_) => () => (_) => (_) => {
    (_(_, `INITIAL_PUBLISH`) && _.dragging(),
      _(_, `DROP_ANIMATE`) && _.dropping(_.payload.completed.result.reason),
      (_(_, `FLUSH`) || _(_, `DROP_COMPLETE`)) && _.resting(),
      _(_));
  },
  _ = {
    outOfTheWay: `cubic-bezier(0.2, 0, 0, 1)`,
    drop: `cubic-bezier(.2,1,.1,1)`,
  },
  _ = {
    opacity: {
      drop: 0,
      combining: 0.7,
    },
    scale: {
      drop: 0.75,
    },
  },
  _ = {
    outOfTheWay: 0.2,
    minDropTime: 0.33,
    maxDropTime: 0.55,
  },
  _ = `${_.outOfTheWay}s ${_.outOfTheWay}`,
  _ = {
    fluid: `opacity ${_}`,
    snap: `transform ${_}, opacity ${_}`,
    drop: (_) => {
      let _ = `${_}s ${_.drop}`;
      return `transform ${_}, opacity ${_}`;
    },
    outOfTheWay: `transform ${_}`,
    placeholder: `height ${_}, width ${_}, margin ${_}`,
  },
  _ = (_) => (_(_, _) ? void 0 : `translate(${_._}px, ${_._}px)`),
  _ = {
    moveTo: _,
    drop: (_, _) => {
      let _ = _(_);
      if (_) return _ ? `${_} scale(${_.scale.drop})` : _;
    },
  },
  { minDropTime: _, maxDropTime: _ } = _,
  _ = _ - _,
  _ = 1500,
  _ = 0.6,
  _ = ({ current: _, destination: _, reason: _ }) => {
    let _ = _(_, _);
    if (_ <= 0) return _;
    if (_ >= _) return _;
    let _ = _ + (_ / _) * _,
      _ = _ === `CANCEL` ? _ * _ : _;
    return Number(_.toFixed(2));
  },
  _ = ({
    impact: _,
    draggable: _,
    dimensions: _,
    viewport: _,
    afterCritical: _,
  }) => {
    let { draggables: _, droppables: _ } = _,
      _ = _(_),
      _ = _ ? _[_] : null,
      _ = _[_.descriptor.droppableId];
    return _(
      _({
        impact: _,
        draggable: _,
        draggables: _,
        afterCritical: _,
        droppable: _ || _,
        viewport: _,
      }),
      _.client.borderBox.center,
    );
  },
  _ = ({
    draggables: _,
    reason: _,
    lastImpact: _,
    home: _,
    viewport: _,
    onLiftImpact: _,
  }) =>
    !_._ || _ !== `DROP`
      ? {
          impact: _({
            draggables: _,
            impact: _,
            destination: _,
            viewport: _,
            forceShouldAnimate: !0,
          }),
          didDropInsideDroppable: !1,
        }
      : _._.type === `REORDER`
        ? {
            impact: _,
            didDropInsideDroppable: !0,
          }
        : {
            impact: {
              ..._,
              displaced: _,
            },
            didDropInsideDroppable: !0,
          },
  _ =
    ({ getState: _, dispatch: _ }) =>
    (_) =>
    (_) => {
      if (!_(_, `DROP`)) {
        _(_);
        return;
      }
      let _ = _(),
        _ = _.payload.reason;
      if (_.phase === `COLLECTING`) {
        _(
          _({
            reason: _,
          }),
        );
        return;
      }
      if (_.phase === `IDLE`) return;
      (_.phase === `DROP_PENDING` && _.isWaiting && _(),
        _.phase !== `DRAGGING` && _.phase !== `DROP_PENDING` && _());
      let _ = _.critical,
        _ = _.dimensions,
        _ = _.draggables[_.critical.draggable._],
        { impact: _, didDropInsideDroppable: _ } = _({
          reason: _,
          lastImpact: _.impact,
          afterCritical: _.afterCritical,
          onLiftImpact: _.onLiftImpact,
          home: _.dimensions.droppables[_.critical.droppable._],
          viewport: _.viewport,
          draggables: _.dimensions.draggables,
        }),
        _ = _ ? _(_) : null,
        _ = _ ? _(_) : null,
        _ = {
          index: _.draggable.index,
          droppableId: _.droppable._,
        },
        _ = {
          draggableId: _.descriptor._,
          type: _.descriptor.type,
          source: _,
          reason: _,
          mode: _.movementMode,
          destination: _,
          combine: _,
        },
        _ = _({
          impact: _,
          draggable: _,
          dimensions: _,
          viewport: _.viewport,
          afterCritical: _.afterCritical,
        }),
        _ = {
          critical: _.critical,
          afterCritical: _.afterCritical,
          result: _,
          impact: _,
        };
      _(_.current.client.offset, _) && !_.combine
        ? _(
            _({
              completed: _,
            }),
          )
        : _(
            _({
              newHomeClientOffset: _,
              dropDuration: _({
                current: _.current.client.offset,
                destination: _,
                reason: _,
              }),
              completed: _,
            }),
          );
    },
  _ = (_ = window) => ({
    _: _.pageXOffset,
    _: _.pageYOffset,
  });
function _(_) {
  return {
    eventName: `scroll`,
    options: {
      passive: !0,
      capture: !1,
    },
    _: (_) => {
      (_.target === window || _.target === window.document) && _();
    },
  };
}
function _({ onWindowScroll: _ }) {
  function _() {
    _(_());
  }
  let _ = _(_),
    _ = _(_),
    _ = _;
  function _() {
    return _ !== _;
  }
  function _() {
    (_() && _(), (_ = _(window, [_])));
  }
  function _() {
    (!_() && _(), _.cancel(), _(), (_ = _));
  }
  return {
    start: _,
    stop: _,
    isActive: _,
  };
}
var _ = (_) => _(_, `DROP_COMPLETE`) || _(_, `DROP_ANIMATE`) || _(_, `FLUSH`),
  _ = (_) => {
    let _ = _({
      onWindowScroll: (_) => {
        _.dispatch(
          _({
            newScroll: _,
          }),
        );
      },
    });
    return (_) => (_) => {
      (!_.isActive() && _(_, `INITIAL_PUBLISH`) && _.start(),
        _.isActive() && _(_) && _.stop(),
        _(_));
    };
  },
  _ = (_) => {
    let _ = !1,
      _ = !1,
      _ = setTimeout(() => {
        _ = !0;
      }),
      _ = (_) => {
        _ || _ || ((_ = !0), _(_), clearTimeout(_));
      };
    return ((_.wasCalled = () => _), _);
  },
  _ = () => {
    let _ = [],
      _ = (_) => {
        let _ = _.findIndex((_) => _.timerId === _);
        _ === -1 && _();
        let [_] = _.splice(_, 1);
        _.callback();
      };
    return {
      add: (_) => {
        let _ = setTimeout(() => _(_)),
          _ = {
            timerId: _,
            callback: _,
          };
        _.push(_);
      },
      flush: () => {
        if (!_.length) return;
        let _ = [..._];
        ((_.length = 0),
          _.forEach((_) => {
            (clearTimeout(_.timerId), _.callback());
          }));
      },
    };
  },
  _ = (_, _) =>
    _ == null && _ == null
      ? !0
      : _ == null || _ == null
        ? !1
        : _.droppableId === _.droppableId && _.index === _.index,
  _ = (_, _) =>
    _ == null && _ == null
      ? !0
      : _ == null || _ == null
        ? !1
        : _.draggableId === _.draggableId && _.droppableId === _.droppableId,
  _ = (_, _) => {
    if (_ === _) return !0;
    let _ =
        _.draggable._ === _.draggable._ &&
        _.draggable.droppableId === _.draggable.droppableId &&
        _.draggable.type === _.draggable.type &&
        _.draggable.index === _.draggable.index,
      _ =
        _.droppable._ === _.droppable._ &&
        _.droppable.type === _.droppable.type;
    return _ && _;
  },
  _ = (_, _) => {
    _();
  },
  _ = (_, _) => ({
    draggableId: _.draggable._,
    type: _.droppable.type,
    source: {
      droppableId: _.droppable._,
      index: _.draggable.index,
    },
    mode: _,
  });
function _(_, _, _, _) {
  if (!_) {
    _(_(_));
    return;
  }
  let _ = _(_);
  (_(_, {
    announce: _,
  }),
    _.wasCalled() || _(_(_)));
}
var _ = (_, _) => {
    let _ = _(),
      _ = null,
      _ = (_, _) => {
        (_ && _(),
          _(`onBeforeCapture`, () => {
            let _ = _().onBeforeCapture;
            _ &&
              _({
                draggableId: _,
                mode: _,
              });
          }));
      },
      _ = (_, _) => {
        (_ && _(),
          _(`onBeforeDragStart`, () => {
            let _ = _().onBeforeDragStart;
            _ && _(_(_, _));
          }));
      },
      _ = (_, _) => {
        _ && _();
        let _ = _(_, _);
        ((_ = {
          mode: _,
          lastCritical: _,
          lastLocation: _.source,
          lastCombine: null,
        }),
          _.add(() => {
            _(`onDragStart`, () => _(_().onDragStart, _, _, _.onDragStart));
          }));
      },
      _ = (_, _) => {
        let _ = _(_),
          _ = _(_);
        !_ && _();
        let _ = !_(_, _.lastCritical);
        _ && (_.lastCritical = _);
        let _ = !_(_.lastLocation, _);
        _ && (_.lastLocation = _);
        let _ = !_(_.lastCombine, _);
        if ((_ && (_.lastCombine = _), !_ && !_ && !_)) return;
        let _ = {
          ..._(_, _.mode),
          combine: _,
          destination: _,
        };
        _.add(() => {
          _(`onDragUpdate`, () => _(_().onDragUpdate, _, _, _.onDragUpdate));
        });
      },
      _ = () => {
        (!_ && _(), _.flush());
      },
      _ = (_) => {
        (!_ && _(),
          (_ = null),
          _(`onDragEnd`, () => _(_().onDragEnd, _, _, _.onDragEnd)));
      };
    return {
      beforeCapture: _,
      beforeStart: _,
      start: _,
      update: _,
      flush: _,
      drop: _,
      abort: () => {
        if (!_) return;
        let _ = {
          ..._(_.lastCritical, _.mode),
          combine: null,
          destination: null,
          reason: `CANCEL`,
        };
        _(_);
      },
    };
  },
  _ = (_, _) => {
    let _ = _(_, _);
    return (_) => (_) => (_) => {
      if (_(_, `BEFORE_INITIAL_CAPTURE`)) {
        _.beforeCapture(_.payload.draggableId, _.payload.movementMode);
        return;
      }
      if (_(_, `INITIAL_PUBLISH`)) {
        let _ = _.payload.critical;
        (_.beforeStart(_, _.payload.movementMode),
          _(_),
          _.start(_, _.payload.movementMode));
        return;
      }
      if (_(_, `DROP_COMPLETE`)) {
        let _ = _.payload.completed.result;
        (_.flush(), _(_), _.drop(_));
        return;
      }
      if ((_(_), _(_, `FLUSH`))) {
        _.abort();
        return;
      }
      let _ = _.getState();
      _.phase === `DRAGGING` && _.update(_.critical, _.impact);
    };
  },
  _ = (_) => (_) => (_) => {
    if (!_(_, `DROP_ANIMATION_FINISHED`)) {
      _(_);
      return;
    }
    let _ = _.getState();
    (_.phase !== `DROP_ANIMATING` && _(),
      _.dispatch(
        _({
          completed: _.completed,
        }),
      ));
  },
  _ = (_) => {
    let _ = null,
      _ = null;
    function _() {
      ((_ &&= (cancelAnimationFrame(_), null)), (_ &&= (_(), null)));
    }
    return (_) => (_) => {
      if (
        ((_(_, `FLUSH`) ||
          _(_, `DROP_COMPLETE`) ||
          _(_, `DROP_ANIMATION_FINISHED`)) &&
          _(),
        _(_),
        !_(_, `DROP_ANIMATE`))
      )
        return;
      let _ = {
        eventName: `scroll`,
        options: {
          capture: !0,
          passive: !1,
          once: !0,
        },
        _: function () {
          _.getState().phase === `DROP_ANIMATING` && _.dispatch(_());
        },
      };
      _ = requestAnimationFrame(() => {
        ((_ = null), (_ = _(window, [_])));
      });
    };
  },
  _ = (_) => () => (_) => (_) => {
    ((_(_, `DROP_COMPLETE`) || _(_, `FLUSH`) || _(_, `DROP_ANIMATE`)) &&
      _.stopPublishing(),
      _(_));
  },
  _ = (_) => {
    let _ = !1;
    return () => (_) => (_) => {
      if (_(_, `INITIAL_PUBLISH`))
        ((_ = !0),
          _.tryRecordFocus(_.payload.critical.draggable._),
          _(_),
          _.tryRestoreFocusRecorded());
      else if ((_(_), _)) {
        if (_(_, `FLUSH`)) ((_ = !1), _.tryRestoreFocusRecorded());
        else if (_(_, `DROP_COMPLETE`)) {
          _ = !1;
          let _ = _.payload.completed.result;
          (_.combine && _.tryShiftRecord(_.draggableId, _.combine.draggableId),
            _.tryRestoreFocusRecorded());
        }
      }
    };
  },
  _ = (_) => _(_, `DROP_COMPLETE`) || _(_, `DROP_ANIMATE`) || _(_, `FLUSH`),
  _ = (_) => (_) => (_) => (_) => {
    if (_(_)) (_.stop(), _(_));
    else if (_(_, `INITIAL_PUBLISH`)) {
      _(_);
      let _ = _.getState();
      (_.phase !== `DRAGGING` && _(), _.start(_));
    } else (_(_), _.scroll(_.getState()));
  },
  _ = (_) => (_) => (_) => {
    if ((_(_), !_(_, `PUBLISH_WHILE_DRAGGING`))) return;
    let _ = _.getState();
    _.phase === `DROP_PENDING` &&
      (_.isWaiting ||
        _.dispatch(
          _({
            reason: _.reason,
          }),
        ));
  },
  _ = _,
  _ = ({
    dimensionMarshal: _,
    focusMarshal: _,
    styleMarshal: _,
    getResponders: _,
    announce: _,
    autoScroller: _,
  }) => _(_, _(_(_(_), _(_), _(_), _, _, _, _, _(_), _, _(_), _(_, _)))),
  _ = () => ({
    additions: {},
    removals: {},
    modified: {},
  });
function _({ registry: _, callbacks: _ }) {
  let _ = _(),
    _ = null,
    _ = () => {
      _ ||=
        (_.collectionStarting(),
        requestAnimationFrame(() => {
          _ = null;
          let { additions: _, removals: _, modified: _ } = _,
            _ = Object.keys(_)
              .map((_) => _.draggable.getById(_).getDimension(_))
              .sort((_, _) => _.descriptor.index - _.descriptor.index),
            _ = Object.keys(_).map((_) => ({
              droppableId: _,
              scroll: _.droppable.getById(_).callbacks.getScrollWhileDragging(),
            })),
            _ = {
              additions: _,
              removals: Object.keys(_),
              modified: _,
            };
          ((_ = _()), _.publish(_));
        }));
    };
  return {
    add: (_) => {
      let _ = _.descriptor._;
      ((_.additions[_] = _),
        (_.modified[_.descriptor.droppableId] = !0),
        _.removals[_] && delete _.removals[_],
        _());
    },
    remove: (_) => {
      let _ = _.descriptor;
      ((_.removals[_._] = !0),
        (_.modified[_.droppableId] = !0),
        _.additions[_._] && delete _.additions[_._],
        _());
    },
    stop: () => {
      _ && (cancelAnimationFrame(_), (_ = null), (_ = _()));
    },
  };
}
var _ = ({ scrollHeight: _, scrollWidth: _, height: _, width: _ }) => {
    let _ = _(
      {
        _: _,
        _: _,
      },
      {
        _: _,
        _: _,
      },
    );
    return {
      _: Math.max(0, _._),
      _: Math.max(0, _._),
    };
  },
  _ = (_ = window) => {
    let _ = _.document.documentElement;
    return (!_ && _(), _);
  },
  _ = (_ = window) => {
    let _ = _(_);
    return _({
      scrollHeight: _.scrollHeight,
      scrollWidth: _.scrollWidth,
      width: _.clientWidth,
      height: _.clientHeight,
    });
  },
  _ = (_ = window) => {
    let _ = _(_),
      _ = _(_),
      _ = _._,
      _ = _._,
      _ = _(_),
      _ = _.clientWidth,
      _ = _.clientHeight;
    return {
      frame: _({
        top: _,
        left: _,
        right: _ + _,
        bottom: _ + _,
      }),
      scroll: {
        initial: _,
        current: _,
        max: _,
        diff: {
          value: _,
          displacement: _,
        },
      },
    };
  },
  _ = ({ windowToUse: _, critical: _, scrollOptions: _, registry: _ }) => {
    let _ = _(_),
      _ = _.scroll.current,
      _ = _.droppable,
      _ = _.droppable
        .getAllByType(_.type)
        .map((_) => _.callbacks.getDimensionAndWatchScroll(_, _));
    return {
      dimensions: {
        draggables: _(
          _.draggable
            .getAllByType(_.draggable.type)
            .map((_) => _.getDimension(_)),
        ),
        droppables: _(_),
      },
      critical: _,
      viewport: _,
    };
  };
function _(_, _, _) {
  return (
    _.descriptor._ !== _._ &&
    _.descriptor.type === _.type &&
    _.droppable.getById(_.descriptor.droppableId).descriptor.mode === `virtual`
  );
}
var _ = (_, _, _) => {
    let _ = null,
      _ = _({
        callbacks: {
          publish: _.publishWhileDragging,
          collectionStarting: _.collectionStarting,
        },
        registry: _,
      }),
      _ = (_, _) => {
        (!_.droppable.exists(_) && _(),
          _ &&
            _.updateDroppableIsEnabled({
              _: _,
              isEnabled: _,
            }));
      },
      _ = (_, _) => {
        _ &&
          (!_.droppable.exists(_) && _(),
          _.updateDroppableIsCombineEnabled({
            _: _,
            isCombineEnabled: _,
          }));
      },
      _ = (_, _) => {
        _ &&
          (!_.droppable.exists(_) && _(),
          _.updateDroppableScroll({
            _: _,
            newScroll: _,
          }));
      },
      _ = (_, _) => {
        _ && _.droppable.getById(_).callbacks.scroll(_);
      },
      _ = () => {
        if (!_) return;
        _.stop();
        let _ = _.critical.droppable;
        (_.droppable
          .getAllByType(_.type)
          .forEach((_) => _.callbacks.dragStopped()),
          _.unsubscribe(),
          (_ = null));
      },
      _ = (_) => {
        !_ && _();
        let _ = _.critical.draggable;
        (_.type === `ADDITION` && _(_, _, _.value) && _.add(_.value),
          _.type === `REMOVAL` && _(_, _, _.value) && _.remove(_.value));
      };
    return {
      updateDroppableIsEnabled: _,
      updateDroppableIsCombineEnabled: _,
      scrollDroppable: _,
      updateDroppableScroll: _,
      startPublishing: (_) => {
        _ && _();
        let _ = _.draggable.getById(_.draggableId),
          _ = _.droppable.getById(_.descriptor.droppableId),
          _ = {
            draggable: _.descriptor,
            droppable: _.descriptor,
          };
        return (
          (_ = {
            critical: _,
            unsubscribe: _.subscribe(_),
          }),
          _({
            windowToUse: _(),
            critical: _,
            registry: _,
            scrollOptions: _.scrollOptions,
          })
        );
      },
      stopPublishing: _,
    };
  },
  _ = (_, _) =>
    _.phase === `IDLE`
      ? !0
      : _.phase !== `DROP_ANIMATING` || _.completed.result.draggableId === _
        ? !1
        : _.completed.result.reason === `DROP`,
  _ = (_) => {
    window.scrollBy(_._, _._);
  },
  _ = _((_) => _(_).filter((_) => !(!_.isEnabled || !_.frame))),
  _ = (_, _) =>
    _(_).find((_) => (!_.frame && _(), _(_.frame.pageMarginBox)(_))) || null,
  _ = ({ center: _, destination: _, droppables: _ }) => {
    if (_) {
      let _ = _[_];
      return _.frame ? _ : null;
    }
    return _(_, _);
  },
  _ = {
    startFromPercentage: 0.25,
    maxScrollAtPercentage: 0.05,
    maxPixelScroll: 28,
    ease: (_) => _ ** 2,
    durationDampening: {
      stopDampeningAt: 1200,
      accelerateAt: 360,
    },
    disabled: !1,
  },
  _ = (_, _, _ = () => _) => {
    let _ = _();
    return {
      startScrollingFrom: _[_.size] * _.startFromPercentage,
      maxScrollValueAt: _[_.size] * _.maxScrollAtPercentage,
    };
  },
  _ = ({ startOfRange: _, endOfRange: _, current: _ }) => {
    let _ = _ - _;
    return _ === 0 ? 0 : (_ - _) / _;
  },
  _ = 1,
  _ = (_, _, _ = () => _) => {
    let _ = _();
    if (_ > _.startScrollingFrom) return 0;
    if (_ <= _.maxScrollValueAt) return _.maxPixelScroll;
    if (_ === _.startScrollingFrom) return _;
    let _ =
        1 -
        _({
          startOfRange: _.maxScrollValueAt,
          endOfRange: _.startScrollingFrom,
          current: _,
        }),
      _ = _.maxPixelScroll * _.ease(_);
    return Math.ceil(_);
  },
  _ = (_, _, _) => {
    let _ = _(),
      _ = _.durationDampening.accelerateAt,
      _ = _.durationDampening.stopDampeningAt,
      _ = _,
      _ = _,
      _ = Date.now() - _;
    if (_ >= _) return _;
    if (_ < _) return _;
    let _ = _({
        startOfRange: _,
        endOfRange: _,
        current: _,
      }),
      _ = _ * _.ease(_);
    return Math.ceil(_);
  },
  _ = ({
    distanceToEdge: _,
    thresholds: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _(_, _, _);
    return _ === 0 ? 0 : _ ? Math.max(_(_, _, _), _) : _;
  },
  _ = ({
    container: _,
    distanceToEdges: _,
    dragStartTime: _,
    axis: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _(_, _, _);
    return _[_.end] < _[_.start]
      ? _({
          distanceToEdge: _[_.end],
          thresholds: _,
          dragStartTime: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        })
      : -1 *
          _({
            distanceToEdge: _[_.start],
            thresholds: _,
            dragStartTime: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          });
  },
  _ = ({ container: _, subject: _, proposedScroll: _ }) => {
    let _ = _.height > _.height,
      _ = _.width > _.width;
    return !_ && !_
      ? _
      : _ && _
        ? null
        : {
            _: _ ? 0 : _._,
            _: _ ? 0 : _._,
          };
  },
  _ = _((_) => (_ === 0 ? 0 : _)),
  _ = ({
    dragStartTime: _,
    container: _,
    subject: _,
    center: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = {
        top: _._ - _.top,
        right: _.right - _._,
        bottom: _.bottom - _._,
        left: _._ - _.left,
      },
      _ = _({
        container: _,
        distanceToEdges: _,
        dragStartTime: _,
        axis: _,
        shouldUseTimeDampening: _,
        getAutoScrollerOptions: _,
      }),
      _ = _({
        _: _({
          container: _,
          distanceToEdges: _,
          dragStartTime: _,
          axis: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        }),
        _: _,
      });
    if (_(_, _)) return null;
    let _ = _({
      container: _,
      subject: _,
      proposedScroll: _,
    });
    return _ ? (_(_, _) ? null : _) : null;
  },
  _ = _((_) => (_ === 0 ? 0 : _ > 0 ? 1 : -1)),
  _ = (() => {
    let _ = (_, _) => (_ < 0 ? _ : _ > _ ? _ - _ : 0);
    return ({ current: _, max: _, change: _ }) => {
      let _ = _(_, _),
        _ = {
          _: _(_._, _._),
          _: _(_._, _._),
        };
      return _(_, _) ? null : _;
    };
  })(),
  _ = ({ max: _, current: _, change: _ }) => {
    let _ = {
        _: Math.max(_._, _._),
        _: Math.max(_._, _._),
      },
      _ = _(_),
      _ = _({
        max: _,
        current: _,
        change: _,
      });
    return !_ || (_._ !== 0 && _._ === 0) || (_._ !== 0 && _._ === 0);
  },
  _ = (_, _) =>
    _({
      current: _.scroll.current,
      max: _.scroll.max,
      change: _,
    }),
  _ = (_, _) => {
    if (!_(_, _)) return null;
    let _ = _.scroll.max,
      _ = _.scroll.current;
    return _({
      current: _,
      max: _,
      change: _,
    });
  },
  _ = (_, _) => {
    let _ = _.frame;
    return _
      ? _({
          current: _.scroll.current,
          max: _.scroll.max,
          change: _,
        })
      : !1;
  },
  _ = (_, _) => {
    let _ = _.frame;
    return !_ || !_(_, _)
      ? null
      : _({
          current: _.scroll.current,
          max: _.scroll.max,
          change: _,
        });
  },
  _ = ({
    viewport: _,
    subject: _,
    center: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _({
      dragStartTime: _,
      container: _.frame,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    return _ && _(_, _) ? _ : null;
  },
  _ = ({
    droppable: _,
    subject: _,
    center: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _.frame;
    if (!_) return null;
    let _ = _({
      dragStartTime: _,
      container: _.pageMarginBox,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    return _ && _(_, _) ? _ : null;
  },
  _ = ({
    state: _,
    dragStartTime: _,
    shouldUseTimeDampening: _,
    scrollWindow: _,
    scrollDroppable: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _.current.page.borderBoxCenter,
      _ = _.dimensions.draggables[_.critical.draggable._].page.marginBox;
    if (_.isWindowScrollAllowed) {
      let _ = _.viewport,
        _ = _({
          dragStartTime: _,
          viewport: _,
          subject: _,
          center: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        });
      if (_) {
        _(_);
        return;
      }
    }
    let _ = _({
      center: _,
      destination: _(_.impact),
      droppables: _.dimensions.droppables,
    });
    if (!_) return;
    let _ = _({
      dragStartTime: _,
      droppable: _,
      subject: _,
      center: _,
      shouldUseTimeDampening: _,
      getAutoScrollerOptions: _,
    });
    _ && _(_.descriptor._, _);
  },
  _ = ({
    scrollWindow: _,
    scrollDroppable: _,
    getAutoScrollerOptions: _ = () => _,
  }) => {
    let _ = _(_),
      _ = _(_),
      _ = null,
      _ = (_) => {
        !_ && _();
        let { shouldUseTimeDampening: _, dragStartTime: _ } = _;
        _({
          state: _,
          scrollWindow: _,
          scrollDroppable: _,
          dragStartTime: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        });
      };
    return {
      start: (_) => {
        _ && _();
        let _ = Date.now(),
          _ = !1,
          _ = () => {
            _ = !0;
          };
        (_({
          state: _,
          dragStartTime: 0,
          shouldUseTimeDampening: !1,
          scrollWindow: _,
          scrollDroppable: _,
          getAutoScrollerOptions: _,
        }),
          (_ = {
            dragStartTime: _,
            shouldUseTimeDampening: _,
          }),
          _ && _(_));
      },
      stop: () => {
        _ &&= (_.cancel(), _.cancel(), null);
      },
      scroll: _,
    };
  },
  _ = ({ move: _, scrollDroppable: _, scrollWindow: _ }) => {
    let _ = (_, _) => {
        _({
          client: _(_.current.client.selection, _),
        });
      },
      _ = (_, _) => {
        if (!_(_, _)) return _;
        let _ = _(_, _);
        if (!_) return (_(_.descriptor._, _), null);
        let _ = _(_, _);
        return (_(_.descriptor._, _), _(_, _));
      },
      _ = (_, _, _) => {
        if (!_ || !_(_, _)) return _;
        let _ = _(_, _);
        if (!_) return (_(_), null);
        let _ = _(_, _);
        return (_(_), _(_, _));
      };
    return (_) => {
      let _ = _.scrollJumpRequest;
      if (!_) return;
      let _ = _(_.impact);
      !_ && _();
      let _ = _(_.dimensions.droppables[_], _);
      if (!_) return;
      let _ = _.viewport,
        _ = _(_.isWindowScrollAllowed, _, _);
      _ && _(_, _);
    };
  },
  _ = ({
    scrollDroppable: _,
    scrollWindow: _,
    move: _,
    getAutoScrollerOptions: _,
  }) => {
    let _ = _({
        scrollWindow: _,
        scrollDroppable: _,
        getAutoScrollerOptions: _,
      }),
      _ = _({
        move: _,
        scrollWindow: _,
        scrollDroppable: _,
      });
    return {
      scroll: (_) => {
        _().disabled ||
          _.phase !== `DRAGGING` ||
          (_.movementMode === `FLUID`
            ? _.scroll(_)
            : _.scrollJumpRequest && _(_));
      },
      start: _.start,
      stop: _.stop,
    };
  },
  _ = `data-rfd`,
  _ = (() => {
    let _ = `${_}-drag-handle`;
    return {
      base: _,
      draggableId: `${_}-draggable-id`,
      contextId: `${_}-context-id`,
    };
  })(),
  _ = (() => {
    let _ = `${_}-draggable`;
    return {
      base: _,
      contextId: `${_}-context-id`,
      _: `${_}-id`,
    };
  })(),
  _ = (() => {
    let _ = `${_}-droppable`;
    return {
      base: _,
      contextId: `${_}-context-id`,
      _: `${_}-id`,
    };
  })(),
  _ = {
    contextId: `${_}-scroll-container-context-id`,
  },
  _ = (_) => (_) => `[${_}="${_}"]`,
  _ = (_, _) =>
    _.map((_) => {
      let _ = _.styles[_];
      return _ ? `${_.selector} { ${_} }` : ``;
    }).join(` `),
  _ = `pointer-events: none;`,
  _ = (_) => {
    let _ = _(_),
      _ = (() => {
        let _ = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
        return {
          selector: _(_.contextId),
          styles: {
            always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
            resting: _,
            dragging: _,
            dropAnimating: _,
          },
        };
      })(),
      _ = [
        (() => {
          let _ = `
      transition: ${_.outOfTheWay};
    `;
          return {
            selector: _(_.contextId),
            styles: {
              dragging: _,
              dropAnimating: _,
              userCancel: _,
            },
          };
        })(),
        _,
        {
          selector: _(_.contextId),
          styles: {
            always: `overflow-anchor: none;`,
          },
        },
        {
          selector: `body, :host`,
          styles: {
            dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
          },
        },
      ];
    return {
      always: _(_, `always`),
      resting: _(_, `resting`),
      dragging: _(_, `dragging`),
      dropAnimating: _(_, `dropAnimating`),
      userCancel: _(_, `userCancel`),
    };
  },
  _ =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0
      ? _.useLayoutEffect
      : _.useEffect,
  _ = (_) => {
    let _ = _ || document.querySelector(`head`);
    return (!_ && _(), _);
  },
  _ = (_) => {
    let _ = document.createElement(`style`);
    return (_ && _.setAttribute(`nonce`, _), (_.type = `text/css`), _);
  };
function _(_, _, _) {
  let _ = _(() => _(_), [_]),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = _(
      _((_) => {
        let _ = _.current;
        (!_ && _(), (_.textContent = _));
      }),
      [],
    ),
    _ = _((_) => {
      let _ = _.current;
      (!_ && _(), (_.textContent = _));
    }, []);
  _(() => {
    (_.current || _.current) && _();
    let _ = _(_),
      _ = _(_);
    ((_.current = _),
      (_.current = _),
      _.setAttribute(`${_}-always`, _),
      _.setAttribute(`${_}-dynamic`, _));
    let _ = _(_);
    return (
      _.appendChild(_),
      _.appendChild(_),
      _(_.always),
      _(_.resting),
      () => {
        let _ = (_) => {
          let _ = _.current;
          (!_ && _(), _.removeChild(_), (_.current = null));
        };
        (_(_), _(_));
      }
    );
  }, [_, _, _, _.always, _.resting, _, _]);
  let _ = _(() => _(_.dragging), [_, _.dragging]),
    _ = _(
      (_) => {
        _(_ === `DROP` ? _.dropAnimating : _.userCancel);
      },
      [_, _.dropAnimating, _.userCancel],
    ),
    _ = _(() => {
      _.current && _(_.resting);
    }, [_, _.resting]);
  return _(
    () => ({
      dragging: _,
      dropping: _,
      resting: _,
    }),
    [_, _, _],
  );
}
function _(_, _) {
  return Array.from(_.querySelectorAll(_));
}
function _(_) {
  return (_.composedPath && _.composedPath()[0]) || _.target;
}
function _(_) {
  let _ = _ && _.composedPath && _.composedPath()[0];
  return (_ && _.getRootNode()) || document;
}
function _(_, _, _) {
  let _ = _ && _.getRootNode(),
    _ = _ && _.querySelectorAll ? _ : document,
    _ = _(_, _).find(_);
  return !_ && _.host ? _(_.host, _, _) : _;
}
var _ = (_) =>
  _ && _.ownerDocument && _.ownerDocument.defaultView
    ? _.ownerDocument.defaultView
    : window;
function _(_) {
  return _ instanceof _(_).HTMLElement;
}
function _(_, _, _) {
  let _ = _(
    _,
    `[${_.contextId}="${_}"]`,
    (_) => _.getAttribute(_.draggableId) === _,
  );
  return !_ || !_(_) ? null : _;
}
function _(_) {
  let _ = (0, _.useRef)({}),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(!1),
    _ = _(function (_, _) {
      let _ = {
        _: _,
        focus: _,
      };
      return (
        (_.current[_] = _),
        function () {
          let _ = _.current;
          _[_] !== _ && delete _[_];
        }
      );
    }, []),
    _ = _(
      function (_) {
        let _ = _(_, _);
        _ && _ !== document.activeElement && _.focus();
      },
      [_],
    ),
    _ = _(function (_, _) {
      _.current === _ && (_.current = _);
    }, []),
    _ = _(
      function () {
        _.current ||
          (_.current &&
            (_.current = requestAnimationFrame(() => {
              _.current = null;
              let _ = _.current;
              _ && _(_);
            })));
      },
      [_],
    ),
    _ = _(function (_) {
      _.current = null;
      let _ = document.activeElement;
      _ && _.getAttribute(_.draggableId) === _ && (_.current = _);
    }, []);
  return (
    _(
      () => (
        (_.current = !0),
        function () {
          _.current = !1;
          let _ = _.current;
          _ && cancelAnimationFrame(_);
        }
      ),
      [],
    ),
    _(
      () => ({
        register: _,
        tryRecordFocus: _,
        tryRestoreFocusRecorded: _,
        tryShiftRecord: _,
      }),
      [_, _, _, _],
    )
  );
}
function _() {
  let _ = {
      draggables: {},
      droppables: {},
    },
    _ = [];
  function _(_) {
    return (
      _.push(_),
      function () {
        let _ = _.indexOf(_);
        _ !== -1 && _.splice(_, 1);
      }
    );
  }
  function _(_) {
    _.length && _.forEach((_) => _(_));
  }
  function _(_) {
    return _.draggables[_] || null;
  }
  function _(_) {
    let _ = _(_);
    return (!_ && _(), _);
  }
  let _ = {
    register: (_) => {
      ((_.draggables[_.descriptor._] = _),
        _({
          type: `ADDITION`,
          value: _,
        }));
    },
    update: (_, _) => {
      let _ = _.draggables[_.descriptor._];
      _ &&
        _.uniqueId === _.uniqueId &&
        (delete _.draggables[_.descriptor._],
        (_.draggables[_.descriptor._] = _));
    },
    unregister: (_) => {
      let _ = _.descriptor._,
        _ = _(_);
      _ &&
        _.uniqueId === _.uniqueId &&
        (delete _.draggables[_],
        _.droppables[_.descriptor.droppableId] &&
          _({
            type: `REMOVAL`,
            value: _,
          }));
    },
    getById: _,
    findById: _,
    exists: (_) => !!_(_),
    getAllByType: (_) =>
      Object.values(_.draggables).filter((_) => _.descriptor.type === _),
  };
  function _(_) {
    return _.droppables[_] || null;
  }
  function _(_) {
    let _ = _(_);
    return (!_ && _(), _);
  }
  let _ = {
    register: (_) => {
      _.droppables[_.descriptor._] = _;
    },
    unregister: (_) => {
      let _ = _(_.descriptor._);
      _ && _.uniqueId === _.uniqueId && delete _.droppables[_.descriptor._];
    },
    getById: _,
    findById: _,
    exists: (_) => !!_(_),
    getAllByType: (_) =>
      Object.values(_.droppables).filter((_) => _.descriptor.type === _),
  };
  function _() {
    ((_.draggables = {}), (_.droppables = {}), (_.length = 0));
  }
  return {
    draggable: _,
    droppable: _,
    subscribe: _,
    clean: _,
  };
}
function _() {
  let _ = _(_, []);
  return (
    (0, _.useEffect)(
      () =>
        function () {
          _.clean();
        },
      [_],
    ),
    _
  );
}
var _ = _.createContext(null),
  _ = () => {
    let _ = document.body;
    return (!_ && _(), _);
  },
  _ = {
    position: `absolute`,
    width: `1px`,
    height: `1px`,
    margin: `-1px`,
    border: `0`,
    padding: `0`,
    overflow: `hidden`,
    clip: `rect(0 0 0 0)`,
    "clip-path": `inset(100%)`,
  },
  _ = (_) => `rfd-announcement-${_}`;
function _(_) {
  let _ = _(() => _(_), [_]),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(
      function () {
        let _ = document.createElement(`div`);
        return (
          (_.current = _),
          (_._ = _),
          _.setAttribute(`aria-live`, `assertive`),
          _.setAttribute(`aria-atomic`, `true`),
          _(_.style, _),
          _().appendChild(_),
          function () {
            setTimeout(function () {
              let _ = _();
              (_.contains(_) && _.removeChild(_),
                _ === _.current && (_.current = null));
            });
          }
        );
      },
      [_],
    ),
    _((_) => {
      let _ = _.current;
      _ && (_.textContent = _);
    }, [])
  );
}
var _ = {
  separator: `::`,
};
function _(_, _ = _) {
  let _ = _.useId();
  return _(() => `${_}${_.separator}${_}`, [_.separator, _, _]);
}
function _({ contextId: _, uniqueId: _ }) {
  return `rfd-hidden-text-${_}-${_}`;
}
function _({ contextId: _, text: _ }) {
  let _ = _(`hidden-text`, {
      separator: `-`,
    }),
    _ = _(
      () =>
        _({
          contextId: _,
          uniqueId: _,
        }),
      [_, _],
    );
  return (
    (0, _.useEffect)(
      function () {
        let _ = document.createElement(`div`);
        return (
          (_._ = _),
          (_.textContent = _),
          (_.style.display = `none`),
          _().appendChild(_),
          function () {
            let _ = _();
            _.contains(_) && _.removeChild(_);
          }
        );
      },
      [_, _],
    ),
    _
  );
}
var _ = _.createContext(null);
function _(_) {
  let _ = (0, _.useRef)(_);
  return (
    (0, _.useEffect)(() => {
      _.current = _;
    }),
    _
  );
}
function _() {
  let _ = null;
  function _() {
    return !!_;
  }
  function _(_) {
    return _ === _;
  }
  function _(_) {
    _ && _();
    let _ = {
      abandon: _,
    };
    return ((_ = _), _);
  }
  function _() {
    (!_ && _(), (_ = null));
  }
  function _() {
    _ && (_.abandon(), _());
  }
  return {
    isClaimed: _,
    isActive: _,
    claim: _,
    release: _,
    tryAbandon: _,
  };
}
function _(_) {
  return _.phase === `IDLE` || _.phase === `DROP_ANIMATING` ? !1 : _.isDragging;
}
var _ = 9,
  _ = 13,
  _ = 27,
  _ = 32,
  _ = 33,
  _ = 34,
  _ = 35,
  _ = 36,
  _ = 37,
  _ = 38,
  _ = 39,
  _ = 40,
  _ = {
    [_]: !0,
    [_]: !0,
  },
  _ = (_) => {
    _[_.keyCode] && _.preventDefault();
  },
  _ = (() => {
    let _ = `visibilitychange`;
    return typeof document > `u`
      ? _
      : [_, `ms${_}`, `webkit${_}`, `moz${_}`, `o${_}`].find(
          (_) => `on${_}` in document,
        ) || _;
  })(),
  _ = 0,
  _ = 5;
function _(_, _) {
  return Math.abs(_._ - _._) >= _ || Math.abs(_._ - _._) >= _;
}
var _ = {
  type: `IDLE`,
};
function _({ cancel: _, completed: _, getPhase: _, setPhase: _ }) {
  return [
    {
      eventName: `mousemove`,
      _: (_) => {
        let { button: _, clientX: _, clientY: _ } = _;
        if (_ !== _) return;
        let _ = {
            _: _,
            _: _,
          },
          _ = _();
        if (_.type === `DRAGGING`) {
          (_.preventDefault(), _.actions.move(_));
          return;
        }
        _.type !== `PENDING` && _();
        let _ = _.point;
        _(_, _) &&
          (_.preventDefault(),
          _({
            type: `DRAGGING`,
            actions: _.actions.fluidLift(_),
          }));
      },
    },
    {
      eventName: `mouseup`,
      _: (_) => {
        let _ = _();
        _.type === `DRAGGING`
          ? (_.preventDefault(),
            _.actions.drop({
              shouldBlockNextClick: !0,
            }),
            _())
          : _();
      },
    },
    {
      eventName: `mousedown`,
      _: (_) => {
        (_().type === `DRAGGING` && _.preventDefault(), _());
      },
    },
    {
      eventName: `keydown`,
      _: (_) => {
        _().type === `PENDING`
          ? _()
          : _.keyCode === _
            ? (_.preventDefault(), _())
            : _(_);
      },
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `scroll`,
      options: {
        passive: !0,
        capture: !1,
      },
      _: () => {
        _().type === `PENDING` && _();
      },
    },
    {
      eventName: `webkitmouseforcedown`,
      _: (_) => {
        let _ = _();
        (_.type === `IDLE` && _(),
          _.actions.shouldRespectForcePress() ? _() : _.preventDefault());
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(_),
    _ = _(
      () => ({
        eventName: `mousedown`,
        _: function (_) {
          if (
            _.defaultPrevented ||
            _.button !== _ ||
            _.ctrlKey ||
            _.metaKey ||
            _.shiftKey ||
            _.altKey
          )
            return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          _.preventDefault();
          let _ = {
            _: _.clientX,
            _: _.clientY,
          };
          (_.current(), _(_, _));
        },
      }),
      [_],
    ),
    _ = _(
      () => ({
        eventName: `webkitmouseforcewillbegin`,
        _: (_) => {
          if (_.defaultPrevented) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.findOptionsForDraggable(_);
          _ &&
            (_.shouldRespectForcePress ||
              (_.canGetLock(_) && _.preventDefault()));
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(_.getWindow(), [_, _], {
          passive: !1,
          capture: !0,
        });
      },
      [_, _, _],
    ),
    _ = _(() => {
      _.current.type !== `IDLE` && ((_.current = _), _.current(), _());
    }, [_]),
    _ = _(() => {
      let _ = _.current;
      (_(),
        _.type === `DRAGGING` &&
          _.actions.cancel({
            shouldBlockNextClick: !0,
          }),
        _.type === `PENDING` && _.actions.abort());
    }, [_]),
    _ = _(
      function () {
        let _ = {
            capture: !0,
            passive: !1,
          },
          _ = _({
            cancel: _,
            completed: _,
            getPhase: () => _.current,
            setPhase: (_) => {
              _.current = _;
            },
          });
        _.current = _(_.getWindow(), _, _);
      },
      [_, _, _],
    ),
    _ = _(
      function (_, _) {
        (_.current.type !== `IDLE` && _(),
          (_.current = {
            type: `PENDING`,
            point: _,
            actions: _,
          }),
          _());
      },
      [_],
    );
  _(
    function () {
      return (
        _(),
        function () {
          _.current();
        }
      );
    },
    [_],
  );
}
function _() {}
var _ = {
  [_]: !0,
  [_]: !0,
  [_]: !0,
  [_]: !0,
};
function _(_, _) {
  function _() {
    (_(), _.cancel());
  }
  function _() {
    (_(), _.drop());
  }
  return [
    {
      eventName: `keydown`,
      _: (_) => {
        _.keyCode === _
          ? (_.preventDefault(), _())
          : _.keyCode === _
            ? (_.preventDefault(), _())
            : _.keyCode === _
              ? (_.preventDefault(), _.moveDown())
              : _.keyCode === _
                ? (_.preventDefault(), _.moveUp())
                : _.keyCode === _
                  ? (_.preventDefault(), _.moveRight())
                  : _.keyCode === _
                    ? (_.preventDefault(), _.moveLeft())
                    : _[_.keyCode]
                      ? _.preventDefault()
                      : _(_);
      },
    },
    {
      eventName: `mousedown`,
      _: _,
    },
    {
      eventName: `mouseup`,
      _: _,
    },
    {
      eventName: `click`,
      _: _,
    },
    {
      eventName: `touchstart`,
      _: _,
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `wheel`,
      _: _,
      options: {
        passive: !0,
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = _(
      () => ({
        eventName: `keydown`,
        _: function (_) {
          if (_.defaultPrevented || _.keyCode !== _) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          _.preventDefault();
          let _ = !0,
            _ = _.snapLift();
          _.current();
          function _() {
            (!_ && _(), (_ = !1), _.current(), _());
          }
          _.current = _(_.getWindow(), _(_, _), {
            capture: !0,
            passive: !1,
          });
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(_.getWindow(), [_], {
          passive: !1,
          capture: !0,
        });
      },
      [_, _],
    );
  _(
    function () {
      return (
        _(),
        function () {
          _.current();
        }
      );
    },
    [_],
  );
}
var _ = {
    type: `IDLE`,
  },
  _ = 120,
  _ = 0.15;
function _({ cancel: _, getPhase: _ }) {
  return [
    {
      eventName: `orientationchange`,
      _: _,
    },
    {
      eventName: `resize`,
      _: _,
    },
    {
      eventName: `contextmenu`,
      _: (_) => {
        _.preventDefault();
      },
    },
    {
      eventName: `keydown`,
      _: (_) => {
        (_().type === `DRAGGING` && _.keyCode === _ && _.preventDefault(), _());
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _({ cancel: _, completed: _, getPhase: _ }) {
  return [
    {
      eventName: `touchmove`,
      options: {
        capture: !1,
      },
      _: (_) => {
        let _ = _();
        if (_.type !== `DRAGGING`) {
          _();
          return;
        }
        _.hasMoved = !0;
        let { clientX: _, clientY: _ } = _.touches[0],
          _ = {
            _: _,
            _: _,
          };
        (_.preventDefault(), _.actions.move(_));
      },
    },
    {
      eventName: `touchend`,
      _: (_) => {
        let _ = _();
        _.type === `DRAGGING`
          ? (_.preventDefault(),
            _.actions.drop({
              shouldBlockNextClick: !0,
            }),
            _())
          : _();
      },
    },
    {
      eventName: `touchcancel`,
      _: (_) => {
        (_().type === `DRAGGING` && _.preventDefault(), _());
      },
    },
    {
      eventName: `touchforcechange`,
      _: (_) => {
        let _ = _();
        _.type === `IDLE` && _();
        let _ = _.touches[0];
        if (!_ || !(_.force >= _)) return;
        let _ = _.actions.shouldRespectForcePress();
        if (_.type === `PENDING`) _ && _();
        else if (_) {
          if (_.hasMoved) {
            _.preventDefault();
            return;
          }
          _();
        } else _.preventDefault();
      },
    },
    {
      eventName: _,
      _: _,
    },
  ];
}
function _(_) {
  let _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(_),
    _ = _(function () {
      return _.current;
    }, []),
    _ = _(function (_) {
      _.current = _;
    }, []),
    _ = _(
      () => ({
        eventName: `touchstart`,
        _: function (_) {
          if (_.defaultPrevented) return;
          let _ = _.findClosestDraggableId(_);
          if (!_) return;
          let _ = _.tryGetLock(_, _, {
            sourceEvent: _,
          });
          if (!_) return;
          let { clientX: _, clientY: _ } = _.touches[0],
            _ = {
              _: _,
              _: _,
            };
          (_.current(), _(_, _));
        },
      }),
      [_],
    ),
    _ = _(
      function () {
        _.current = _(_.getWindow(), [_], {
          capture: !0,
          passive: !1,
        });
      },
      [_, _],
    ),
    _ = _(() => {
      let _ = _.current;
      _.type !== `IDLE` &&
        (_.type === `PENDING` && clearTimeout(_.longPressTimerId),
        _(_),
        _.current(),
        _());
    }, [_, _]),
    _ = _(() => {
      let _ = _.current;
      (_(),
        _.type === `DRAGGING` &&
          _.actions.cancel({
            shouldBlockNextClick: !0,
          }),
        _.type === `PENDING` && _.actions.abort());
    }, [_]),
    _ = _(
      function () {
        let _ = {
            capture: !0,
            passive: !1,
          },
          _ = {
            cancel: _,
            completed: _,
            getPhase: _,
          },
          _ = _(_.getWindow(), _(_), _),
          _ = _(_.getWindow(), _(_), _);
        _.current = function () {
          (_(), _());
        };
      },
      [_, _, _, _],
    ),
    _ = _(
      function () {
        let _ = _();
        _.type !== `PENDING` && _();
        let _ = _.actions.fluidLift(_.point);
        _({
          type: `DRAGGING`,
          actions: _,
          hasMoved: !1,
        });
      },
      [_, _],
    ),
    _ = _(
      function (_, _) {
        _().type !== `IDLE` && _();
        let _ = setTimeout(_, _);
        (_({
          type: `PENDING`,
          point: _,
          actions: _,
          longPressTimerId: _,
        }),
          _());
      },
      [_, _, _, _],
    );
  (_(
    function () {
      return (
        _(),
        function () {
          _.current();
          let _ = _();
          _.type === `PENDING` && (clearTimeout(_.longPressTimerId), _(_));
        }
      );
    },
    [_, _, _],
  ),
    _(
      function () {
        return _(_.getWindow(), [
          {
            eventName: `touchmove`,
            _: () => {},
            options: {
              capture: !1,
              passive: !1,
            },
          },
        ]);
      },
      [_],
    ));
}
var _ = [
  `input`,
  `button`,
  `textarea`,
  `select`,
  `option`,
  `optgroup`,
  `video`,
  `audio`,
];
function _(_, _) {
  if (_ == null) return !1;
  if (_.includes(_.tagName.toLowerCase())) return !0;
  let _ = _.getAttribute(`contenteditable`);
  return _ === `true` || _ === `` || (_ !== _ && _(_, _.parentElement));
}
function _(_, _) {
  let _ = _(_);
  return _(_) ? _(_, _) : !1;
}
var _ = (_) => _(_.getBoundingClientRect()).center;
function _(_) {
  return _ instanceof _(_).Element;
}
var _ = (() => {
  let _ = `matches`;
  return typeof document > `u`
    ? _
    : [_, `msMatchesSelector`, `webkitMatchesSelector`].find(
        (_) => _ in Element.prototype,
      ) || _;
})();
function _(_, _) {
  return _ == null ? null : _[_](_) ? _ : _(_.parentElement, _);
}
function _(_, _) {
  return _.closest ? _.closest(_) : _(_, _);
}
function _(_, _) {
  return !_ || _ === document || _ === window
    ? null
    : _(_, _) || _(_.getRootNode().host, _);
}
function _(_) {
  return `[${_.contextId}="${_}"]`;
}
function _(_, _) {
  let _ = _(_);
  if (!_(_)) return null;
  let _ = _(_, _(_));
  return !_ || !_(_) ? null : _;
}
function _(_, _) {
  let _ = _(_, _);
  return _ ? _.getAttribute(_.draggableId) : null;
}
function _(_, _, _) {
  let _ = _(_, `[${_.contextId}="${_}"]`, (_) => _.getAttribute(_._) === _);
  return !_ || !_(_) ? null : _;
}
function _(_) {
  _.preventDefault();
}
function _({ expected: _, phase: _, isLockActive: _, shouldWarn: _ }) {
  return !(!_() || _ !== _);
}
function _({ lockAPI: _, store: _, registry: _, draggableId: _ }) {
  if (_.isClaimed()) return !1;
  let _ = _.draggable.findById(_);
  return !(!_ || !_.options.isEnabled || !_(_.getState(), _));
}
function _({
  lockAPI: _,
  contextId: _,
  store: _,
  registry: _,
  draggableId: _,
  forceSensorStop: _,
  sourceEvent: _,
}) {
  if (
    !_({
      lockAPI: _,
      store: _,
      registry: _,
      draggableId: _,
    })
  )
    return null;
  let _ = _.draggable.getById(_),
    _ = _(_, _.descriptor._, _(_));
  if (!_ || (_ && !_.options.canDragInteractiveElements && _(_, _)))
    return null;
  let _ = _.claim(_ || _),
    _ = `PRE_DRAG`;
  function _() {
    return _.options.shouldRespectForcePress;
  }
  function _() {
    return _.isActive(_);
  }
  function _(_, _) {
    _({
      expected: _,
      phase: _,
      isLockActive: _,
      shouldWarn: !0,
    }) && _.dispatch(_());
  }
  let _ = _.bind(null, `DRAGGING`);
  function _(_) {
    function _() {
      (_.release(), (_ = `COMPLETED`));
    }
    (_ !== `PRE_DRAG` && (_(), _()),
      _.dispatch(_(_.liftActionArgs)),
      (_ = `DRAGGING`));
    function _(
      _,
      _ = {
        shouldBlockNextClick: !1,
      },
    ) {
      if ((_.cleanup(), _.shouldBlockNextClick)) {
        let _ = _(window, [
          {
            eventName: `click`,
            _: _,
            options: {
              once: !0,
              passive: !1,
              capture: !0,
            },
          },
        ]);
        setTimeout(_);
      }
      (_(),
        _.dispatch(
          _({
            reason: _,
          }),
        ));
    }
    return {
      isActive: () =>
        _({
          expected: `DRAGGING`,
          phase: _,
          isLockActive: _,
          shouldWarn: !1,
        }),
      shouldRespectForcePress: _,
      drop: (_) => _(`DROP`, _),
      cancel: (_) => _(`CANCEL`, _),
      ..._.actions,
    };
  }
  function _(_) {
    let _ = _((_) => {
      _(() =>
        _({
          client: _,
        }),
      );
    });
    return {
      ..._({
        liftActionArgs: {
          _: _,
          clientSelection: _,
          movementMode: `FLUID`,
        },
        cleanup: () => _.cancel(),
        actions: {
          move: _,
        },
      }),
      move: _,
    };
  }
  function _() {
    return _({
      liftActionArgs: {
        _: _,
        clientSelection: _(_),
        movementMode: `SNAP`,
      },
      cleanup: _,
      actions: {
        moveUp: () => _(_),
        moveRight: () => _(_),
        moveDown: () => _(_),
        moveLeft: () => _(_),
      },
    });
  }
  function _() {
    _({
      expected: `PRE_DRAG`,
      phase: _,
      isLockActive: _,
      shouldWarn: !0,
    }) && _.release();
  }
  return {
    isActive: () =>
      _({
        expected: `PRE_DRAG`,
        phase: _,
        isLockActive: _,
        shouldWarn: !1,
      }),
    shouldRespectForcePress: _,
    fluidLift: _,
    snapLift: _,
    abort: _,
  };
}
var _ = [_, _, _];
function _({
  contextId: _,
  store: _,
  registry: _,
  customSensors: _,
  enableDefaultSensors: _,
  windowToUse: _,
}) {
  let _ = [...(_ ? _ : []), ...(_ || [])],
    _ = (0, _.useState)(() => _())[0],
    _ = _(
      function (_, _) {
        _(_) && !_(_) && _.tryAbandon();
      },
      [_],
    );
  (_(
    function () {
      let _ = _.getState();
      return _.subscribe(() => {
        let _ = _.getState();
        (_(_, _), (_ = _));
      });
    },
    [_, _, _],
  ),
    _(() => _.tryAbandon, [_.tryAbandon]));
  let _ = _(
      (_) =>
        _({
          lockAPI: _,
          registry: _,
          store: _,
          draggableId: _,
        }),
      [_, _, _],
    ),
    _ = _(
      (_, _, _) =>
        _({
          lockAPI: _,
          registry: _,
          contextId: _,
          store: _,
          draggableId: _,
          forceSensorStop: _ || null,
          sourceEvent: _ && _.sourceEvent ? _.sourceEvent : null,
        }),
      [_, _, _, _],
    ),
    _ = _((_) => _(_, _), [_]),
    _ = _(
      (_) => {
        let _ = _.draggable.findById(_);
        return _ ? _.options : null;
      },
      [_.draggable],
    ),
    _ = _(
      function () {
        _.isClaimed() &&
          (_.tryAbandon(), _.getState().phase !== `IDLE` && _.dispatch(_()));
      },
      [_, _],
    ),
    _ = _(() => _.isClaimed(), [_]),
    _ = _(() => _, [_]),
    _ = _(
      () => ({
        canGetLock: _,
        tryGetLock: _,
        findClosestDraggableId: _,
        findOptionsForDraggable: _,
        tryReleaseLock: _,
        isLockClaimed: _,
        getWindow: _,
      }),
      [_, _, _, _, _, _, _],
    );
  for (let _ = 0; _ < _.length; _++) _[_](_);
}
var _ = (_) => ({
    onBeforeCapture: (_) => {
      (0, _.flushSync)(() => {
        _.onBeforeCapture && _.onBeforeCapture(_);
      });
    },
    onBeforeDragStart: _.onBeforeDragStart,
    onDragStart: _.onDragStart,
    onDragEnd: _.onDragEnd,
    onDragUpdate: _.onDragUpdate,
  }),
  _ = (_) => ({
    ..._,
    ..._.autoScrollerOptions,
    durationDampening: {
      ..._.durationDampening,
      ..._.autoScrollerOptions,
    },
  });
function _(_) {
  return (!_.current && _(), _.current);
}
function _(_) {
  let {
      contextId: _,
      setCallbacks: _,
      sensors: _,
      nonce: _,
      dragHandleUsageInstructions: _,
      stylesInsertionPoint: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (_ && _.ownerDocument.defaultView) || globalThis.window,
    _ = (0, _.useRef)(_);
  _.current = _;
  let _ = _(_),
    _ = _(() => _(_.current), [_]),
    _ = _(() => _(_.current), [_]),
    _ = _(_),
    _ = _({
      contextId: _,
      text: _,
    }),
    _ = _(_, _, _),
    _ = _((_) => {
      _(_).dispatch(_);
    }, []),
    _ = _(
      () =>
        _(
          {
            publishWhileDragging: _,
            updateDroppableScroll: _,
            updateDroppableIsEnabled: _,
            updateDroppableIsCombineEnabled: _,
            collectionStarting: _,
          },
          _,
        ),
      [_],
    ),
    _ = _(),
    _ = _(() => _(() => _.current, _, _), [_, _]),
    _ = _(
      () =>
        _({
          scrollWindow: _,
          scrollDroppable: _.scrollDroppable,
          getAutoScrollerOptions: _,
          ..._(
            {
              move: _,
            },
            _,
          ),
        }),
      [_.scrollDroppable, _, _],
    ),
    _ = _(_),
    _ = _(
      () =>
        _({
          announce: _,
          autoScroller: _,
          dimensionMarshal: _,
          focusMarshal: _,
          getResponders: _,
          styleMarshal: _,
        }),
      [_, _, _, _, _, _],
    );
  _.current = _;
  let _ = _(() => {
      let _ = _(_);
      _.getState().phase !== `IDLE` && _.dispatch(_());
    }, []),
    _ = _(() => {
      let _ = _(_).getState();
      return (
        _.phase === `DROP_ANIMATING` || (_.phase !== `IDLE` && _.isDragging)
      );
    }, []);
  _(
    _(
      () => ({
        isDragging: _,
        tryAbort: _,
      }),
      [_, _],
    ),
  );
  let _ = _((_) => _(_(_).getState(), _), []),
    _ = _(() => _(_(_).getState()), []),
    _ = _(
      () => ({
        marshal: _,
        focus: _,
        contextId: _,
        canLift: _,
        isMovementAllowed: _,
        dragHandleUsageInstructionsId: _,
        registry: _,
      }),
      [_, _, _, _, _, _, _],
    );
  return (
    _({
      contextId: _,
      store: _,
      registry: _,
      customSensors: _ || null,
      enableDefaultSensors: _.enableDefaultSensors !== !1,
      windowToUse: _,
    }),
    (0, _.useEffect)(() => _, [_]),
    _.createElement(
      _.Provider,
      {
        value: _,
      },
      _.createElement(
        _,
        {
          context: _,
          store: _,
        },
        _.children,
      ),
    )
  );
}
function _() {
  return _.useId();
}
function _(_) {
  let _ = _(),
    _ = _.dragHandleUsageInstructions || _.dragHandleUsageInstructions;
  return _.createElement(_, null, (_) =>
    _.createElement(
      _,
      {
        nonce: _.nonce,
        contextId: _,
        setCallbacks: _,
        dragHandleUsageInstructions: _,
        enableDefaultSensors: _.enableDefaultSensors,
        sensors: _.sensors,
        onBeforeCapture: _.onBeforeCapture,
        onBeforeDragStart: _.onBeforeDragStart,
        onDragStart: _.onDragStart,
        onDragUpdate: _.onDragUpdate,
        onDragEnd: _.onDragEnd,
        autoScrollerOptions: _.autoScrollerOptions,
        stylesInsertionPoint: _.stylesInsertionPoint,
      },
      _.children,
    ),
  );
}
var _ = {
    dragging: 5e3,
    dropAnimating: 4500,
  },
  _ = (_, _) => (_ ? _.drop(_.duration) : _ ? _.snap : _.fluid),
  _ = (_, _) => {
    if (_) return _ ? _.opacity.drop : _.opacity.combining;
  },
  _ = (_) =>
    _.forceShouldAnimate == null ? _.mode === `SNAP` : _.forceShouldAnimate;
function _(_) {
  let _ = _.dimension.client,
    { offset: _, combineWith: _, dropping: _ } = _,
    _ = !!_,
    _ = _(_),
    _ = !!_,
    _ = _ ? _.drop(_, _) : _.moveTo(_);
  return {
    position: `fixed`,
    top: _.marginBox.top,
    left: _.marginBox.left,
    boxSizing: `border-box`,
    width: _.borderBox.width,
    height: _.borderBox.height,
    transition: _(_, _),
    transform: _,
    opacity: _(_, _),
    zIndex: _ ? _.dropAnimating : _.dragging,
    pointerEvents: `none`,
  };
}
function _(_) {
  return {
    transform: _.moveTo(_.offset),
    transition: _.shouldAnimateDisplacement ? void 0 : `none`,
  };
}
function _(_) {
  return _.type === `DRAGGING` ? _(_) : _(_);
}
function _(_, _, _ = _) {
  let _ = window.getComputedStyle(_),
    _ = _(_.getBoundingClientRect(), _),
    _ = _(_, _);
  return {
    descriptor: _,
    placeholder: {
      client: _,
      tagName: _.tagName.toLowerCase(),
      display: _.display,
    },
    displaceBy: {
      _: _.marginBox.width,
      _: _.marginBox.height,
    },
    client: _,
    page: _,
  };
}
function _(_) {
  let _ = _(`draggable`),
    {
      descriptor: _,
      registry: _,
      getDraggableRef: _,
      canDragInteractiveElements: _,
      shouldRespectForcePress: _,
      isEnabled: _,
    } = _,
    _ = _(
      () => ({
        canDragInteractiveElements: _,
        shouldRespectForcePress: _,
        isEnabled: _,
      }),
      [_, _, _],
    ),
    _ = _(
      (_) => {
        let _ = _();
        return (!_ && _(), _(_, _, _));
      },
      [_, _],
    ),
    _ = _(
      () => ({
        uniqueId: _,
        descriptor: _,
        options: _,
        getDimension: _,
      }),
      [_, _, _, _],
    ),
    _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(!0);
  (_(
    () => (
      _.draggable.register(_.current),
      () => _.draggable.unregister(_.current)
    ),
    [_.draggable],
  ),
    _(() => {
      if (_.current) {
        _.current = !1;
        return;
      }
      let _ = _.current;
      ((_.current = _), _.draggable.update(_, _));
    }, [_, _.draggable]));
}
var _ = _.createContext(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return (!_ && _(), _);
}
function _(_) {
  _.preventDefault();
}
var _ = (_) => {
    let _ = (0, _.useRef)(null),
      _ = _((_ = null) => {
        _.current = _;
      }, []),
      _ = _(() => _.current, []),
      { contextId: _, dragHandleUsageInstructionsId: _, registry: _ } = _(_),
      { type: _, droppableId: _ } = _(_),
      _ = _(
        () => ({
          _: _.draggableId,
          index: _.index,
          type: _,
          droppableId: _,
        }),
        [_.draggableId, _.index, _, _],
      ),
      {
        children: _,
        draggableId: _,
        isEnabled: _,
        shouldRespectForcePress: _,
        canDragInteractiveElements: _,
        isClone: _,
        mapped: _,
        dropAnimationFinished: _,
      } = _;
    _ ||
      _(
        _(
          () => ({
            descriptor: _,
            registry: _,
            getDraggableRef: _,
            canDragInteractiveElements: _,
            shouldRespectForcePress: _,
            isEnabled: _,
          }),
          [_, _, _, _, _, _],
        ),
      );
    let _ = _(
        () =>
          _
            ? {
                tabIndex: 0,
                role: `button`,
                "aria-describedby": _,
                "data-rfd-drag-handle-draggable-id": _,
                "data-rfd-drag-handle-context-id": _,
                draggable: !1,
                onDragStart: _,
              }
            : null,
        [_, _, _, _],
      ),
      _ = _(
        (_) => {
          _.type === `DRAGGING` &&
            _.dropping &&
            _.propertyName === `transform` &&
            (0, _.flushSync)(_);
        },
        [_, _],
      ),
      _ = _(() => {
        let _ = _(_),
          _ = _.type === `DRAGGING` && _.dropping ? _ : void 0;
        return {
          innerRef: _,
          draggableProps: {
            "data-rfd-draggable-context-id": _,
            "data-rfd-draggable-id": _,
            style: _,
            onTransitionEnd: _,
          },
          dragHandleProps: _,
        };
      }, [_, _, _, _, _, _]),
      _ = _(
        () => ({
          draggableId: _._,
          type: _.type,
          source: {
            index: _.index,
            droppableId: _.droppableId,
          },
        }),
        [_.droppableId, _._, _.index, _.type],
      );
    return _.createElement(_.Fragment, null, _(_, _.snapshot, _));
  },
  _ = (_, _) => _ === _,
  _ = (_) => {
    let { combine: _, destination: _ } = _;
    return _ ? _.droppableId : _ ? _.droppableId : null;
  },
  _ = (_) => (_.combine ? _.combine.draggableId : null),
  _ = (_) => (_._ && _._.type === `COMBINE` ? _._.combine.draggableId : null);
function _() {
  let _ = _((_, _) => ({
      _: _,
      _: _,
    })),
    _ = _((_, _, _ = null, _ = null, _ = null) => ({
      isDragging: !0,
      isClone: _,
      isDropAnimating: !!_,
      dropAnimation: _,
      mode: _,
      draggingOver: _,
      combineWith: _,
      combineTargetFor: null,
    })),
    _ = _((_, _, _, _, _ = null, _ = null, _ = null) => ({
      mapped: {
        type: `DRAGGING`,
        dropping: null,
        draggingOver: _,
        combineWith: _,
        mode: _,
        offset: _,
        dimension: _,
        forceShouldAnimate: _,
        snapshot: _(_, _, _, _, null),
      },
    }));
  return (_, _) => {
    if (_(_)) {
      if (_.critical.draggable._ !== _.draggableId) return null;
      let _ = _.current.client.offset,
        _ = _.dimensions.draggables[_.draggableId],
        _ = _(_.impact),
        _ = _(_.impact),
        _ = _.forceShouldAnimate;
      return _(_(_._, _._), _.movementMode, _, _.isClone, _, _, _);
    }
    if (_.phase === `DROP_ANIMATING`) {
      let _ = _.completed;
      if (_.result.draggableId !== _.draggableId) return null;
      let _ = _.isClone,
        _ = _.dimensions.draggables[_.draggableId],
        _ = _.result,
        _ = _.mode,
        _ = _(_),
        _ = _(_),
        _ = {
          duration: _.dropDuration,
          curve: _.drop,
          moveTo: _.newHomeClientOffset,
          opacity: _ ? _.opacity.drop : null,
          scale: _ ? _.scale.drop : null,
        };
      return {
        mapped: {
          type: `DRAGGING`,
          offset: _.newHomeClientOffset,
          dimension: _,
          dropping: _,
          draggingOver: _,
          combineWith: _,
          mode: _,
          forceShouldAnimate: null,
          snapshot: _(_, _, _, _, _),
        },
      };
    }
    return null;
  };
}
function _(_ = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: _,
    combineWith: null,
  };
}
var _ = {
  mapped: {
    type: `SECONDARY`,
    offset: _,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: _(null),
  },
};
function _() {
  let _ = _((_, _) => ({
      _: _,
      _: _,
    })),
    _ = _(_),
    _ = _((_, _ = null, _) => ({
      mapped: {
        type: `SECONDARY`,
        offset: _,
        combineTargetFor: _,
        shouldAnimateDisplacement: _,
        snapshot: _(_),
      },
    })),
    _ = (_) => (_ ? _(_, _, !0) : null),
    _ = (_, _, _, _) => {
      let _ = _.displaced.visible[_],
        _ = !!(_.inVirtualList && _.effected[_]),
        _ = _(_),
        _ = _ && _.draggableId === _ ? _ : null;
      if (!_) {
        if (!_) return _(_);
        if (_.displaced.invisible[_]) return null;
        let _ = _(_.displacedBy.point),
          _ = _(_._, _._);
        return _(_, _, !0);
      }
      if (_) return _(_);
      let _ = _.displacedBy.point,
        _ = _(_._, _._);
      return _(_, _, _.shouldAnimate);
    };
  return (_, _) => {
    if (_(_))
      return _.critical.draggable._ === _.draggableId
        ? null
        : _(_.draggableId, _.critical.draggable._, _.impact, _.afterCritical);
    if (_.phase === `DROP_ANIMATING`) {
      let _ = _.completed;
      return _.result.draggableId === _.draggableId
        ? null
        : _(_.draggableId, _.result.draggableId, _.impact, _.afterCritical);
    }
    return null;
  };
}
var _ = _(
  () => {
    let _ = _(),
      _ = _();
    return (_, _) => _(_, _) || _(_, _) || _;
  },
  {
    dropAnimationFinished: _,
  },
  null,
  {
    context: _,
    areStatePropsEqual: _,
  },
)(_);
function _(_) {
  return _(_).isUsingCloneFor === _.draggableId && !_.isClone
    ? null
    : _.createElement(_, _);
}
function _(_) {
  let _ = typeof _.isDragDisabled != `boolean` || !_.isDragDisabled,
    _ = !!_.disableInteractiveElementBlocking,
    _ = !!_.shouldRespectForcePress;
  return _.createElement(
    _,
    _({}, _, {
      isClone: !1,
      isEnabled: _,
      canDragInteractiveElements: _,
      shouldRespectForcePress: _,
    }),
  );
}
var _ = (_) => (_) => _ === _,
  _ = _(`scroll`),
  _ = _(`auto`),
  _ = (_, _) => _(_.overflowX) || _(_.overflowY),
  _ = (_) => {
    let _ = _.ownerDocument.defaultView.getComputedStyle(_),
      _ = {
        overflowX: _.overflowX,
        overflowY: _.overflowY,
      };
    return _(_, _) || _(_, _);
  },
  _ = () => !1,
  _ = (_) =>
    _ == null
      ? null
      : _ === document.body
        ? _()
          ? _
          : null
        : _ === document.documentElement
          ? null
          : _(_)
            ? _
            : _(_.parentElement),
  _ = (_) => ({
    _: _.scrollLeft,
    _: _.scrollTop,
  }),
  _ = (_) =>
    _
      ? _.ownerDocument.defaultView.getComputedStyle(_).position === `fixed` ||
        _(_.parentElement)
      : !1,
  _ = (_) => ({
    closestScrollable: _(_),
    isFixedOnPage: _(_),
  }),
  _ = ({
    descriptor: _,
    isEnabled: _,
    isCombineEnabled: _,
    isFixedOnPage: _,
    direction: _,
    client: _,
    page: _,
    closest: _,
  }) => {
    let _ = (() => {
        if (!_) return null;
        let { scrollSize: _, client: _ } = _,
          _ = _({
            scrollHeight: _.scrollHeight,
            scrollWidth: _.scrollWidth,
            height: _.paddingBox.height,
            width: _.paddingBox.width,
          });
        return {
          pageMarginBox: _.page.marginBox,
          frameClient: _,
          scrollSize: _,
          shouldClipSubject: _.shouldClipSubject,
          scroll: {
            initial: _.scroll,
            current: _.scroll,
            max: _,
            diff: {
              value: _,
              displacement: _,
            },
          },
        };
      })(),
      _ = _ === `vertical` ? _ : _;
    return {
      descriptor: _,
      isCombineEnabled: _,
      isFixedOnPage: _,
      axis: _,
      isEnabled: _,
      client: _,
      page: _,
      frame: _,
      subject: _({
        page: _,
        withPlaceholder: null,
        axis: _,
        frame: _,
      }),
    };
  },
  _ = (_, _) => {
    let _ = _(_);
    if (!_ || _ !== _) return _;
    let _ = _.paddingBox.top - _.scrollTop,
      _ = _.paddingBox.left - _.scrollLeft,
      _ = _ + _.scrollHeight;
    return _({
      borderBox: _(
        {
          top: _,
          right: _ + _.scrollWidth,
          bottom: _,
          left: _,
        },
        _.border,
      ),
      margin: _.margin,
      border: _.border,
      padding: _.padding,
    });
  },
  _ = ({
    ref: _,
    descriptor: _,
    env: _,
    windowScroll: _,
    direction: _,
    isDropDisabled: _,
    isCombineEnabled: _,
    shouldClipSubject: _,
  }) => {
    let _ = _.closestScrollable,
      _ = _(_, _),
      _ = _(_, _),
      _ = (() => {
        if (!_) return null;
        let _ = _(_),
          _ = {
            scrollHeight: _.scrollHeight,
            scrollWidth: _.scrollWidth,
          };
        return {
          client: _,
          page: _(_, _),
          scroll: _(_),
          scrollSize: _,
          shouldClipSubject: _,
        };
      })();
    return _({
      descriptor: _,
      isEnabled: !_,
      isCombineEnabled: _,
      isFixedOnPage: _.isFixedOnPage,
      direction: _,
      client: _,
      page: _,
      closest: _,
    });
  },
  _ = {
    passive: !1,
  },
  _ = {
    passive: !0,
  },
  _ = (_) => (_.shouldPublishImmediately ? _ : _),
  _ = (_) => (_ && _.env.closestScrollable) || null;
function _(_) {
  let _ = (0, _.useRef)(null),
    _ = _(_),
    _ = _(`droppable`),
    { registry: _, marshal: _ } = _,
    _ = _(_),
    _ = _(
      () => ({
        _: _.droppableId,
        type: _.type,
        mode: _.mode,
      }),
      [_.droppableId, _.mode, _.type],
    ),
    _ = (0, _.useRef)(_),
    _ = _(
      () =>
        _((_, _) => {
          !_.current && _();
          let _ = {
            _: _,
            _: _,
          };
          _.updateDroppableScroll(_._, _);
        }),
      [_._, _],
    ),
    _ = _(() => {
      let _ = _.current;
      return !_ || !_.env.closestScrollable ? _ : _(_.env.closestScrollable);
    }, []),
    _ = _(() => {
      let _ = _();
      _(_._, _._);
    }, [_, _]),
    _ = _(() => _(_), [_]),
    _ = _(() => {
      let _ = _.current,
        _ = _(_);
      (!(_ && _) && _(), _.scrollOptions.shouldPublishImmediately ? _() : _());
    }, [_, _]),
    _ = _(
      (_, _) => {
        _.current && _();
        let _ = _.current,
          _ = _.getDroppableRef();
        !_ && _();
        let _ = _(_),
          _ = {
            ref: _,
            descriptor: _,
            env: _,
            scrollOptions: _,
          };
        _.current = _;
        let _ = _({
            ref: _,
            descriptor: _,
            env: _,
            windowScroll: _,
            direction: _.direction,
            isDropDisabled: _.isDropDisabled,
            isCombineEnabled: _.isCombineEnabled,
            shouldClipSubject: !_.ignoreContainerClipping,
          }),
          _ = _.closestScrollable;
        return (
          _ &&
            (_.setAttribute(_.contextId, _.contextId),
            _.addEventListener(`scroll`, _, _(_.scrollOptions))),
          _
        );
      },
      [_.contextId, _, _, _],
    ),
    _ = _(() => {
      let _ = _.current,
        _ = _(_);
      return (!(_ && _) && _(), _(_));
    }, []),
    _ = _(() => {
      let _ = _.current;
      !_ && _();
      let _ = _(_);
      ((_.current = null),
        _ &&
          (_.cancel(),
          _.removeAttribute(_.contextId),
          _.removeEventListener(`scroll`, _, _(_.scrollOptions))));
    }, [_, _]),
    _ = _((_) => {
      let _ = _.current;
      !_ && _();
      let _ = _(_);
      (!_ && _(), (_.scrollTop += _._), (_.scrollLeft += _._));
    }, []),
    _ = _(
      () => ({
        getDimensionAndWatchScroll: _,
        getScrollWhileDragging: _,
        dragStopped: _,
        scroll: _,
      }),
      [_, _, _, _],
    ),
    _ = _(
      () => ({
        uniqueId: _,
        descriptor: _,
        callbacks: _,
      }),
      [_, _, _],
    );
  (_(
    () => (
      (_.current = _.descriptor),
      _.droppable.register(_),
      () => {
        (_.current && _(), _.droppable.unregister(_));
      }
    ),
    [_, _, _, _, _, _.droppable],
  ),
    _(() => {
      _.current && _.updateDroppableIsEnabled(_.current._, !_.isDropDisabled);
    }, [_.isDropDisabled, _]),
    _(() => {
      _.current &&
        _.updateDroppableIsCombineEnabled(_.current._, _.isCombineEnabled);
    }, [_.isCombineEnabled, _]));
}
function _() {}
var _ = {
    width: 0,
    height: 0,
    margin: _,
  },
  _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) =>
    _ || _ === `close`
      ? _
      : {
          height: _.client.borderBox.height,
          width: _.client.borderBox.width,
          margin: _.client.margin,
        },
  _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) => {
    let _ = _({
      isAnimatingOpenOnMount: _,
      placeholder: _,
      animate: _,
    });
    return {
      display: _.display,
      boxSizing: `border-box`,
      width: _.width,
      height: _.height,
      marginTop: _.margin.top,
      marginRight: _.margin.right,
      marginBottom: _.margin.bottom,
      marginLeft: _.margin.left,
      flexShrink: `0`,
      flexGrow: `0`,
      pointerEvents: `none`,
      transition: _ === `none` ? null : _.placeholder,
    };
  },
  _ = _.memo((_) => {
    let _ = (0, _.useRef)(null),
      _ = _(() => {
        _.current &&= (clearTimeout(_.current), null);
      }, []),
      { animate: _, onTransitionEnd: _, onClose: _, contextId: _ } = _,
      [_, _] = (0, _.useState)(_.animate === `open`);
    (0, _.useEffect)(
      () =>
        _
          ? _ === `open`
            ? _.current
              ? _
              : ((_.current = setTimeout(() => {
                  ((_.current = null), _(!1));
                })),
                _)
            : (_(), _(!1), _)
          : _,
      [_, _, _],
    );
    let _ = _(
        (_) => {
          _.propertyName === `height` && (_(), _ === `close` && _());
        },
        [_, _, _],
      ),
      _ = _({
        isAnimatingOpenOnMount: _,
        animate: _.animate,
        placeholder: _.placeholder,
      });
    return _.createElement(_.placeholder.tagName, {
      style: _,
      "data-rfd-placeholder-context-id": _,
      onTransitionEnd: _,
      ref: _.innerRef,
    });
  }),
  _ = class extends _.PureComponent {
    constructor(..._) {
      (super(..._),
        (this.state = {
          isVisible: !!this.props._,
          data: this.props._,
          animate: this.props.shouldAnimate && this.props._ ? `open` : `none`,
        }),
        (this.onClose = () => {
          this.state.animate === `close` &&
            this.setState({
              isVisible: !1,
            });
        }));
    }
    static getDerivedStateFromProps(_, _) {
      return _.shouldAnimate
        ? _._
          ? {
              isVisible: !0,
              data: _._,
              animate: `open`,
            }
          : _.isVisible
            ? {
                isVisible: !0,
                data: _.data,
                animate: `close`,
              }
            : {
                isVisible: !1,
                animate: `close`,
                data: null,
              }
        : {
            isVisible: !!_._,
            data: _._,
            animate: `none`,
          };
    }
    render() {
      if (!this.state.isVisible) return null;
      let _ = {
        onClose: this.onClose,
        data: this.state.data,
        animate: this.state.animate,
      };
      return this.props.children(_);
    }
  },
  _ = (_) => {
    let _ = (0, _.useContext)(_);
    !_ && _();
    let { contextId: _, isMovementAllowed: _ } = _,
      _ = (0, _.useRef)(null),
      _ = (0, _.useRef)(null),
      {
        children: _,
        droppableId: _,
        type: _,
        mode: _,
        direction: _,
        ignoreContainerClipping: _,
        isDropDisabled: _,
        isCombineEnabled: _,
        snapshot: _,
        useClone: _,
        updateViewportMaxScroll: _,
        getContainerForClone: _,
      } = _,
      _ = _(() => _.current, []),
      _ = _((_ = null) => {
        _.current = _;
      }, []);
    _(() => _.current, []);
    let _ = _((_ = null) => {
        _.current = _;
      }, []),
      _ = _(() => {
        _() &&
          _({
            maxScroll: _(
              (_.current && _.current.ownerDocument.defaultView) || window,
            ),
          });
      }, [_, _]);
    _({
      droppableId: _,
      type: _,
      mode: _,
      direction: _,
      isDropDisabled: _,
      isCombineEnabled: _,
      ignoreContainerClipping: _,
      getDroppableRef: _,
    });
    let _ = _(
        () =>
          _.createElement(
            _,
            {
              _: _.placeholder,
              shouldAnimate: _.shouldAnimatePlaceholder,
            },
            ({ onClose: _, data: _, animate: _ }) =>
              _.createElement(_, {
                placeholder: _,
                onClose: _,
                innerRef: _,
                animate: _,
                contextId: _,
                onTransitionEnd: _,
              }),
          ),
        [_, _, _.placeholder, _.shouldAnimatePlaceholder, _],
      ),
      _ = _(
        () => ({
          innerRef: _,
          placeholder: _,
          droppableProps: {
            "data-rfd-droppable-id": _,
            "data-rfd-droppable-context-id": _,
          },
        }),
        [_, _, _, _],
      ),
      _ = _ ? _.dragging.draggableId : null,
      _ = _(
        () => ({
          droppableId: _,
          type: _,
          isUsingCloneFor: _,
        }),
        [_, _, _],
      );
    function _() {
      if (!_) return null;
      let { dragging: _, render: _ } = _,
        _ = _.createElement(
          _,
          {
            draggableId: _.draggableId,
            index: _.source.index,
            isClone: !0,
            isEnabled: !0,
            shouldRespectForcePress: !1,
            canDragInteractiveElements: !0,
          },
          (_, _) => _(_, _, _),
        );
      return _.createPortal(_, _());
    }
    return _.createElement(
      _.Provider,
      {
        value: _,
      },
      _(_, _),
      _(),
    );
  };
function _() {
  return (!document.body && _(), document.body);
}
var _ = {
    mode: `standard`,
    type: `DEFAULT`,
    direction: `vertical`,
    isDropDisabled: !1,
    isCombineEnabled: !1,
    ignoreContainerClipping: !1,
    renderClone: null,
    getContainerForClone: _,
  },
  _ = (_) => {
    let _ = {
        ..._,
      },
      _;
    for (_ in _)
      _[_] === void 0 &&
        (_ = {
          ..._,
          [_]: _[_],
        });
    return _;
  },
  _ = (_, _) => _ === _.droppable.type,
  _ = (_, _) => _.draggables[_.draggable._],
  _ = _(
    () => {
      let _ = {
          placeholder: null,
          shouldAnimatePlaceholder: !0,
          snapshot: {
            isDraggingOver: !1,
            draggingOverWith: null,
            draggingFromThisWith: null,
            isUsingPlaceholder: !1,
          },
          useClone: null,
        },
        _ = {
          ..._,
          shouldAnimatePlaceholder: !1,
        },
        _ = _((_) => ({
          draggableId: _._,
          type: _.type,
          source: {
            index: _.index,
            droppableId: _.droppableId,
          },
        })),
        _ = _((_, _, _, _, _, _) => {
          let _ = _.descriptor._;
          if (_.descriptor.droppableId === _) {
            let _ = _
                ? {
                    render: _,
                    dragging: _(_.descriptor),
                  }
                : null,
              _ = {
                isDraggingOver: _,
                draggingOverWith: _ ? _ : null,
                draggingFromThisWith: _,
                isUsingPlaceholder: !0,
              };
            return {
              placeholder: _.placeholder,
              shouldAnimatePlaceholder: !1,
              snapshot: _,
              useClone: _,
            };
          }
          if (!_) return _;
          if (!_) return _;
          let _ = {
            isDraggingOver: _,
            draggingOverWith: _,
            draggingFromThisWith: null,
            isUsingPlaceholder: !0,
          };
          return {
            placeholder: _.placeholder,
            shouldAnimatePlaceholder: !0,
            snapshot: _,
            useClone: null,
          };
        });
      return (_, _) => {
        let _ = _(_),
          _ = _.droppableId,
          _ = _.type,
          _ = !_.isDropDisabled,
          _ = _.renderClone;
        if (_(_)) {
          let _ = _.critical;
          if (!_(_, _)) return _;
          let _ = _(_, _.dimensions),
            _ = _(_.impact) === _;
          return _(_, _, _, _, _, _);
        }
        if (_.phase === `DROP_ANIMATING`) {
          let _ = _.completed;
          if (!_(_, _.critical)) return _;
          let _ = _(_.critical, _.dimensions);
          return _(_, _, _(_.result) === _, _(_.impact) === _, _, _);
        }
        if (_.phase === `IDLE` && _.completed && !_.shouldFlush) {
          let _ = _.completed;
          if (!_(_, _.critical)) return _;
          let _ = _(_.impact) === _,
            _ = !!(_.impact._ && _.impact._.type === `COMBINE`),
            _ = _.critical.droppable._ === _;
          return _ ? (_ ? _ : _) : _ ? _ : _;
        }
        return _;
      };
    },
    {
      updateViewportMaxScroll: _,
    },
    (_, _, _) => ({
      ..._(_),
      ..._,
      ..._,
    }),
    {
      context: _,
      areStatePropsEqual: _,
    },
  )(_);
