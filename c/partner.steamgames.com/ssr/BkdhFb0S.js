var _ = _(_()),
  _ = _(),
  _ = class extends _.Component {
    state = {};
    constructor(_) {
      (super(_), (this.state.lastErrorKey = _.errorKey));
    }
    componentDidCatch(_, _) {
      (_()
        .ReportError(_, {
          strComponentStack: _.componentStack || void 0,
        })
        .then(
          (_) =>
            _ &&
            this.setState({
              identifierHash: _.identifierHash,
            }),
        ),
        this.setState({
          error: {
            error: _,
            info: _,
          },
          lastErrorKey: this.props.errorKey,
        }));
    }
    Reset() {
      this.setState({
        error: void 0,
      });
    }
    render() {
      let { children: _, fallback: _, errorKey: _ } = this.props,
        { error: _, identifierHash: _, lastErrorKey: _ } = this.state;
      return _ && _ == _
        ? _ === void 0
          ? _().reporting_enabled
            ? (0, _.jsx)(_, {
                error: _,
                identifierHash: _,
                store: _(),
                onRefresh: this.Reset,
              })
            : (0, _.jsx)(_, {
                error: _,
                onDismiss: this.Reset,
              })
          : typeof _ == `function`
            ? _(_.error)
            : _
        : _ || null;
    }
  };
_([_], _.prototype, `Reset`, null);
var _ = ({ error: _, onDismiss: _ }) => {
    let _ = _.error ? _.error.stack : `Stack missing`,
      _ = _.info ? _.info.componentStack : ``,
      _ = (_.error && _.error.message) || `unknown error`;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [`Error: "`, _, `"`],
        }),
        `\xA0\xA0\xA0`,
        (0, _.jsx)(_, {
          onClick: _,
          children: `(x) Dismiss`,
        }),
        (0, _.jsx)(`br`, {}),
        (0, _.jsx)(_, {
          children: _,
        }),
        (0, _.jsxs)(_, {
          children: [`The error occurred while rendering:`, _],
        }),
      ],
    });
  },
  _ = (_) => {
    let { error: _, onRefresh: _, identifierHash: _, store: _ } = _,
      _ = (_.error && _.error.message) || `unknown error`,
      _ = `${_.product}_${_.version}_${_}`;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [
            `Something went wrong while displaying this content. `,
            (0, _.jsx)(_, {
              onClick: _,
              children: `Refresh`,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          children: [`Error Reference: `, _],
        }),
        (0, _.jsx)(_, {
          children: _,
        }),
      ],
    });
  },
  _ = ({ onClick: _, children: _ }) => {
    let _ = _.useRef(null),
      _ = _();
    return (
      _.useEffect(() => {
        let _ = _.current;
        _ && _ && !_.NavTree().GetLastFocusedNode() && _.TakeFocus();
      }, [_]),
      (0, _.jsx)(_, {
        navRef: _,
        style: {
          color: `inherit`,
          textDecoration: `underline`,
          cursor: `pointer`,
        },
        onClick: (_) => {
          (_.preventDefault(), _());
        },
        children: _,
      })
    );
  },
  _ = ({ children: _ }) =>
    (0, _.jsx)(`div`, {
      style: {
        overflow: `auto`,
        marginLeft: `15px`,
        color: `white`,
        fontSize: `16px`,
        userSelect: `auto`,
        backgroundColor: `black`,
      },
      className: `ErrorBoundary`,
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(`h1`, {
      style: {
        fontSize: `20px`,
        display: `inline-block`,
        marginTop: `15px`,
        userSelect: `auto`,
      },
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(`pre`, {
      style: {
        marginTop: `15px`,
        opacity: 0.7,
        userSelect: `auto`,
      },
      children: _,
    }),
  _,
  _,
  _;
function _() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: _(),
  };
}
function _() {
  return _ ? window.navigation.currentEntry : window.history.state;
}
function _() {
  let _ = _();
  return (
    (_ && _ == window.location.href && _ === _) ||
      ((_ = window.location.href), (_ = _), (_ = _())),
    _
  );
}
var _, _;
function _() {
  return (
    (_ && _ == window.location.href) ||
      ((_ = window.location.href),
      (_ = {
        pathname: window.location.pathname,
        search: window.location.search ?? ``,
        hash: ``,
        state: void 0,
      })),
    _
  );
}
var _ = new Set(),
  _;
function _() {
  ((_ = void 0), _.forEach((_) => _()));
}
function _(_) {
  return (
    _.size == 0 && (window.addEventListener(`popstate`, _), (_ = _(_))),
    _.add(_),
    () => {
      (_.delete(_),
        _.size == 0 &&
          (window.removeEventListener(`popstate`, _), _?.(), (_ = void 0)));
    }
  );
}
var _ = `_HistoryValue`;
function _(_) {
  return (
    _ && Object.fromEntries(Object.entries(_).filter(([_]) => !_.endsWith(_)))
  );
}
function _(_, _, _) {
  let _ = new URL(_, window.location.href),
    _ = (_) => ({
      ..._,
      ..._,
    });
  (_
    ? _(
        (_) => ({
          ..._(_),
          ..._,
        }),
        _,
      )
    : _.href == window.location.href
      ? _(_)
      : _(_, _),
    _());
}
function _() {
  return () => {};
}
function _() {}
function _() {
  let _ = _.useContext(_),
    _ = _,
    _ = _,
    _ = _;
  _ && ((_ = _), (_ = _), (_ = _));
  let _ = _.useSyncExternalStore(_, _, _);
  return _ ? _.location : _;
}
var _ = {
  get location() {
    return _();
  },
  push(_, _) {
    _(_, _, !0);
  },
  replace(_, _) {
    _(_, _, !1);
  },
};
function _() {
  return _() ?? _;
}
function _(_, _, _) {
  let _ = `${_}${_}`,
    _ = _(),
    _ = _().state?.[_] ?? _,
    _ = _.useRef(!1),
    _ = _.useRef(void 0),
    _ = _.useRef(void 0),
    _ = _.useCallback(
      (_) => {
        if (_.current && ((_.current = _), !_.current)) {
          let _ = _.location.pathname;
          _.current = window.setTimeout(() => {
            (_.location.pathname != _ ||
              (_.location.state && _.location.state[_] == _.current) ||
              _.replace(_.location.pathname, {
                ...(_.location.state || {}),
                [_]: _.current,
              }),
              (_.current = void 0));
          }, _);
        }
      },
      [_, _, _],
    );
  return (
    _.useEffect(() => {
      _.current = !0;
    }, []),
    [_, _]
  );
}
