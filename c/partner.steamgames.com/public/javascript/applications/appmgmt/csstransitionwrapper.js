import { _, _, _ } from "./mobx.esm.js";
import { _, _, _, _ } from "./react-router.js";
function _(_, _) {
  return _.classList
    ? !!_ && _.classList.contains(_)
    : (` ` + (_.className.baseVal || _.className) + ` `).indexOf(
        ` ` + _ + ` `,
      ) !== -1;
}
function _(_, _) {
  _.classList
    ? _.classList.add(_)
    : _(_, _) ||
      (typeof _.className == `string`
        ? (_.className = _.className + ` ` + _)
        : _.setAttribute(
            `class`,
            ((_.className && _.className.baseVal) || ``) + ` ` + _,
          ));
}
function _(_, _) {
  return _.replace(RegExp(`(^|\\s)` + _ + `(?:\\s|$)`, `g`), `$1`)
    .replace(/\s+/g, ` `)
    .replace(/^\s*|\s*$/g, ``);
}
function _(_, _) {
  _.classList
    ? _.classList.remove(_)
    : typeof _.className == `string`
      ? (_.className = _(_.className, _))
      : _.setAttribute(
          `class`,
          _((_.className && _.className.baseVal) || ``, _),
        );
}
var _ = _(_()),
  _ = _(_()),
  _ = {
    disabled: !1,
  },
  _ = _.createContext(null),
  _ = function (_) {
    return _.scrollTop;
  },
  _ = `unmounted`,
  _ = `exited`,
  _ = `entering`,
  _ = `entered`,
  _ = `exiting`,
  _ = (function (_) {
    _(_, _);
    function _(_, _) {
      var _ = _.call(this, _, _) || this,
        _ = _,
        _ = _ && !_.isMounting ? _.enter : _.appear,
        _;
      return (
        (_.appearStatus = null),
        _._
          ? _
            ? ((_ = _), (_.appearStatus = _))
            : (_ = _)
          : (_ = _.unmountOnExit || _.mountOnEnter ? _ : _),
        (_.state = {
          status: _,
        }),
        (_.nextCallback = null),
        _
      );
    }
    _.getDerivedStateFromProps = function (_, _) {
      return _._ && _.status === `unmounted`
        ? {
            status: _,
          }
        : null;
    };
    var _ = _.prototype;
    return (
      (_.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (_.componentDidUpdate = function (_) {
        var _ = null;
        if (_ !== this.props) {
          var _ = this.state.status;
          this.props._
            ? _ !== `entering` && _ !== `entered` && (_ = _)
            : (_ === `entering` || _ === `entered`) && (_ = _);
        }
        this.updateStatus(!1, _);
      }),
      (_.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (_.getTimeouts = function () {
        var _ = this.props.timeout,
          _ = (_ = _ = _),
          _,
          _;
        return (
          _ != null &&
            typeof _ != `number` &&
            ((_ = _.exit),
            (_ = _.enter),
            (_ = _.appear === void 0 ? _ : _.appear)),
          {
            exit: _,
            enter: _,
            appear: _,
          }
        );
      }),
      (_.updateStatus = function (_, _) {
        if ((_ === void 0 && (_ = !1), _ !== null)) {
          if ((this.cancelNextCallback(), _ === `entering`)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var _ = this.props.nodeRef
                ? this.props.nodeRef.current
                : _.default.findDOMNode(this);
              _ && _(_);
            }
            this.performEnter(_);
          } else this.performExit();
        } else
          this.props.unmountOnExit &&
            this.state.status === `exited` &&
            this.setState({
              status: _,
            });
      }),
      (_.performEnter = function (_) {
        var _ = this,
          _ = this.props.enter,
          _ = this.context ? this.context.isMounting : _,
          _ = this.props.nodeRef ? [_] : [_.default.findDOMNode(this), _],
          _ = _[0],
          _ = _[1],
          _ = this.getTimeouts(),
          _ = _ ? _.appear : _.enter;
        (!_ && !_) || _.disabled
          ? this.safeSetState(
              {
                status: _,
              },
              function () {
                _.props.onEntered(_);
              },
            )
          : (this.props.onEnter(_, _),
            this.safeSetState(
              {
                status: _,
              },
              function () {
                _.props.onEntering(_, _),
                  _.onTransitionEnd(_, function () {
                    _.safeSetState(
                      {
                        status: _,
                      },
                      function () {
                        _.props.onEntered(_, _);
                      },
                    );
                  });
              },
            ));
      }),
      (_.performExit = function () {
        var _ = this,
          _ = this.props.exit,
          _ = this.getTimeouts(),
          _ = this.props.nodeRef ? void 0 : _.default.findDOMNode(this);
        !_ || _.disabled
          ? this.safeSetState(
              {
                status: _,
              },
              function () {
                _.props.onExited(_);
              },
            )
          : (this.props.onExit(_),
            this.safeSetState(
              {
                status: _,
              },
              function () {
                _.props.onExiting(_),
                  _.onTransitionEnd(_.exit, function () {
                    _.safeSetState(
                      {
                        status: _,
                      },
                      function () {
                        _.props.onExited(_);
                      },
                    );
                  });
              },
            ));
      }),
      (_.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (_.safeSetState = function (_, _) {
        (_ = this.setNextCallback(_)), this.setState(_, _);
      }),
      (_.setNextCallback = function (_) {
        var _ = this,
          _ = !0;
        return (
          (this.nextCallback = function (_) {
            _ && ((_ = !1), (_.nextCallback = null), _(_));
          }),
          (this.nextCallback.cancel = function () {
            _ = !1;
          }),
          this.nextCallback
        );
      }),
      (_.onTransitionEnd = function (_, _) {
        this.setNextCallback(_);
        var _ = this.props.nodeRef
            ? this.props.nodeRef.current
            : _.default.findDOMNode(this),
          _ = _ == null && !this.props.addEndListener;
        if (!_ || _) setTimeout(this.nextCallback, 0);
        else {
          if (this.props.addEndListener) {
            var _ = this.props.nodeRef
                ? [this.nextCallback]
                : [_, this.nextCallback],
              _ = _[0],
              _ = _[1];
            this.props.addEndListener(_, _);
          }
          _ != null && setTimeout(this.nextCallback, _);
        }
      }),
      (_.render = function () {
        var _ = this.state.status;
        if (_ === `unmounted`) return null;
        var _ = this.props,
          _ = _.children;
        _._,
          _.mountOnEnter,
          _.unmountOnExit,
          _.appear,
          _.enter,
          _.exit,
          _.timeout,
          _.addEndListener,
          _.onEnter,
          _.onEntering,
          _.onEntered,
          _.onExit,
          _.onExiting,
          _.onExited,
          _.nodeRef;
        var _ = _(_, [
          `children`,
          `in`,
          `mountOnEnter`,
          `unmountOnExit`,
          `appear`,
          `enter`,
          `exit`,
          `timeout`,
          `addEndListener`,
          `onEnter`,
          `onEntering`,
          `onEntered`,
          `onExit`,
          `onExiting`,
          `onExited`,
          `nodeRef`,
        ]);
        return _.createElement(
          _.Provider,
          {
            value: null,
          },
          typeof _ == `function`
            ? _(_, _)
            : _.cloneElement(_.Children.only(_), _),
        );
      }),
      _
    );
  })(_.Component);
(_.contextType = _), (_.propTypes = {});
function _() {}
(_.defaultProps = {
  _: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: _,
  onEntering: _,
  onEntered: _,
  onExit: _,
  onExiting: _,
  onExited: _,
}),
  (_.UNMOUNTED = _),
  (_.EXITED = _),
  (_.ENTERING = _),
  (_.ENTERED = _),
  (_.EXITING = _);
var _ = function (_, _) {
    return (
      _ &&
      _ &&
      _.split(` `).forEach(function (_) {
        return _(_, _);
      })
    );
  },
  _ = function (_, _) {
    return (
      _ &&
      _ &&
      _.split(` `).forEach(function (_) {
        return _(_, _);
      })
    );
  },
  _ = (function (_) {
    _(_, _);
    function _() {
      var _,
        _ = [...arguments];
      return (
        (_ = _.call.apply(_, [this].concat(_)) || this),
        (_.appliedClasses = {
          appear: {},
          enter: {},
          exit: {},
        }),
        (_.onEnter = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1];
          _.removeClasses(_, `exit`),
            _.addClass(_, _ ? `appear` : `enter`, `base`),
            _.props.onEnter && _.props.onEnter(_, _);
        }),
        (_.onEntering = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1] ? `appear` : `enter`;
          _.addClass(_, _, `active`),
            _.props.onEntering && _.props.onEntering(_, _);
        }),
        (_.onEntered = function (_, _) {
          var _ = _.resolveArguments(_, _),
            _ = _[0],
            _ = _[1] ? `appear` : `enter`;
          _.removeClasses(_, _),
            _.addClass(_, _, `done`),
            _.props.onEntered && _.props.onEntered(_, _);
        }),
        (_.onExit = function (_) {
          var _ = _.resolveArguments(_)[0];
          _.removeClasses(_, `appear`),
            _.removeClasses(_, `enter`),
            _.addClass(_, `exit`, `base`),
            _.props.onExit && _.props.onExit(_);
        }),
        (_.onExiting = function (_) {
          var _ = _.resolveArguments(_)[0];
          _.addClass(_, `exit`, `active`),
            _.props.onExiting && _.props.onExiting(_);
        }),
        (_.onExited = function (_) {
          var _ = _.resolveArguments(_)[0];
          _.removeClasses(_, `exit`),
            _.addClass(_, `exit`, `done`),
            _.props.onExited && _.props.onExited(_);
        }),
        (_.resolveArguments = function (_, _) {
          return _.props.nodeRef ? [_.props.nodeRef.current, _] : [_, _];
        }),
        (_.getClassNames = function (_) {
          var _ = _.props.classNames,
            _ = typeof _ == `string`,
            _ = _ && _ ? _ + `-` : ``,
            _ = _ ? `` + _ + _ : _[_];
          return {
            baseClassName: _,
            activeClassName: _ ? _ + `-active` : _[_ + `Active`],
            doneClassName: _ ? _ + `-done` : _[_ + `Done`],
          };
        }),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.addClass = function (_, _, _) {
        var _ = this.getClassNames(_)[_ + `ClassName`],
          _ = this.getClassNames(`enter`).doneClassName;
        _ === `appear` && _ === `done` && _ && (_ += ` ` + _),
          _ === `active` && _ && _(_),
          _ && ((this.appliedClasses[_][_] = _), _(_, _));
      }),
      (_.removeClasses = function (_, _) {
        var _ = this.appliedClasses[_],
          _ = _.base,
          _ = _.active,
          _ = _.done;
        (this.appliedClasses[_] = {}), _ && _(_, _), _ && _(_, _), _ && _(_, _);
      }),
      (_.render = function () {
        var _ = this.props;
        _.classNames;
        var _ = _(_, [`classNames`]);
        return _.createElement(
          _,
          _({}, _, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      _
    );
  })(_.Component);
(_.defaultProps = {
  classNames: ``,
}),
  (_.propTypes = {});
var _ = _();
function _(_) {
  let { children: _, ..._ } = _,
    _ = _.useRef(null);
  return (0, _.jsx)(_, {
    nodeRef: _,
    ..._,
    children: _.children(_),
  });
}
export { _, _, _ };
