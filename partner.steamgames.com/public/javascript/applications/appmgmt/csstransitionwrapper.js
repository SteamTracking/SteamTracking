/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { _t as e, kt as t, on as n } from "./mobx.esm.js";
import { E as r, S as i, x as a, y as o } from "./react-router.js";
function s(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (` ` + (e.className.baseVal || e.className) + ` `).indexOf(
        ` ` + t + ` `,
      ) !== -1;
}
function c(e, t) {
  e.classList
    ? e.classList.add(t)
    : s(e, t) ||
      (typeof e.className == `string`
        ? (e.className = e.className + ` ` + t)
        : e.setAttribute(
            `class`,
            ((e.className && e.className.baseVal) || ``) + ` ` + t,
          ));
}
function l(e, t) {
  return e
    .replace(RegExp(`(^|\\s)` + t + `(?:\\s|$)`, `g`), `$1`)
    .replace(/\s+/g, ` `)
    .replace(/^\s*|\s*$/g, ``);
}
function u(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == `string`
      ? (e.className = l(e.className, t))
      : e.setAttribute(
          `class`,
          l((e.className && e.className.baseVal) || ``, t),
        );
}
var d = n(t()),
  f = n(r()),
  p = { disabled: !1 },
  m = d.createContext(null),
  h = function (e) {
    return e.scrollTop;
  },
  g = `unmounted`,
  _ = `exited`,
  v = `entering`,
  y = `entered`,
  b = `exiting`,
  x = (function (e) {
    o(t, e);
    function t(t, n) {
      var r = e.call(this, t, n) || this,
        i = n,
        a = i && !i.isMounting ? t.enter : t.appear,
        o;
      return (
        (r.appearStatus = null),
        t.in
          ? a
            ? ((o = _), (r.appearStatus = v))
            : (o = y)
          : (o = t.unmountOnExit || t.mountOnEnter ? g : _),
        (r.state = { status: o }),
        (r.nextCallback = null),
        r
      );
    }
    t.getDerivedStateFromProps = function (e, t) {
      return e.in && t.status === `unmounted` ? { status: _ } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== `entering` && n !== `entered` && (t = v)
            : (n === `entering` || n === `entered`) && (t = b);
        }
        this.updateStatus(!1, t);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var e = this.props.timeout,
          t = (n = r = e),
          n,
          r;
        return (
          e != null &&
            typeof e != `number` &&
            ((t = e.exit),
            (n = e.enter),
            (r = e.appear === void 0 ? n : e.appear)),
          { exit: t, enter: n, appear: r }
        );
      }),
      (n.updateStatus = function (e, t) {
        if ((e === void 0 && (e = !1), t !== null)) {
          if ((this.cancelNextCallback(), t === `entering`)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : f.default.findDOMNode(this);
              n && h(n);
            }
            this.performEnter(e);
          } else this.performExit();
        } else
          this.props.unmountOnExit &&
            this.state.status === `exited` &&
            this.setState({ status: g });
      }),
      (n.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          i = this.props.nodeRef ? [r] : [f.default.findDOMNode(this), r],
          a = i[0],
          o = i[1],
          s = this.getTimeouts(),
          c = r ? s.appear : s.enter;
        (!e && !n) || p.disabled
          ? this.safeSetState({ status: y }, function () {
              t.props.onEntered(a);
            })
          : (this.props.onEnter(a, o),
            this.safeSetState({ status: v }, function () {
              (t.props.onEntering(a, o),
                t.onTransitionEnd(c, function () {
                  t.safeSetState({ status: y }, function () {
                    t.props.onEntered(a, o);
                  });
                }));
            }));
      }),
      (n.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : f.default.findDOMNode(this);
        !t || p.disabled
          ? this.safeSetState({ status: _ }, function () {
              e.props.onExited(r);
            })
          : (this.props.onExit(r),
            this.safeSetState({ status: b }, function () {
              (e.props.onExiting(r),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: _ }, function () {
                    e.props.onExited(r);
                  });
                }));
            }));
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (e, t) {
        ((t = this.setNextCallback(t)), this.setState(e, t));
      }),
      (n.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return (
          (this.nextCallback = function (r) {
            n && ((n = !1), (t.nextCallback = null), e(r));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : f.default.findDOMNode(this),
          r = e == null && !this.props.addEndListener;
        if (!n || r) setTimeout(this.nextCallback, 0);
        else {
          if (this.props.addEndListener) {
            var i = this.props.nodeRef
                ? [this.nextCallback]
                : [n, this.nextCallback],
              a = i[0],
              o = i[1];
            this.props.addEndListener(a, o);
          }
          e != null && setTimeout(this.nextCallback, e);
        }
      }),
      (n.render = function () {
        var e = this.state.status;
        if (e === `unmounted`) return null;
        var t = this.props,
          n = t.children;
        (t.in,
          t.mountOnEnter,
          t.unmountOnExit,
          t.appear,
          t.enter,
          t.exit,
          t.timeout,
          t.addEndListener,
          t.onEnter,
          t.onEntering,
          t.onEntered,
          t.onExit,
          t.onExiting,
          t.onExited,
          t.nodeRef);
        var r = a(t, [
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
        return d.createElement(
          m.Provider,
          { value: null },
          typeof n == `function`
            ? n(e, r)
            : d.cloneElement(d.Children.only(n), r),
        );
      }),
      t
    );
  })(d.Component);
((x.contextType = m), (x.propTypes = {}));
function S() {}
((x.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: S,
  onEntering: S,
  onEntered: S,
  onExit: S,
  onExiting: S,
  onExited: S,
}),
  (x.UNMOUNTED = g),
  (x.EXITED = _),
  (x.ENTERING = v),
  (x.ENTERED = y),
  (x.EXITING = b));
var C = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return c(e, t);
      })
    );
  },
  w = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return u(e, t);
      })
    );
  },
  T = (function (e) {
    o(t, e);
    function t() {
      var t,
        n = [...arguments];
      return (
        (t = e.call.apply(e, [this].concat(n)) || this),
        (t.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (t.onEnter = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1];
          (t.removeClasses(i, `exit`),
            t.addClass(i, a ? `appear` : `enter`, `base`),
            t.props.onEnter && t.props.onEnter(e, n));
        }),
        (t.onEntering = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1] ? `appear` : `enter`;
          (t.addClass(i, a, `active`),
            t.props.onEntering && t.props.onEntering(e, n));
        }),
        (t.onEntered = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1] ? `appear` : `enter`;
          (t.removeClasses(i, a),
            t.addClass(i, a, `done`),
            t.props.onEntered && t.props.onEntered(e, n));
        }),
        (t.onExit = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.removeClasses(n, `appear`),
            t.removeClasses(n, `enter`),
            t.addClass(n, `exit`, `base`),
            t.props.onExit && t.props.onExit(e));
        }),
        (t.onExiting = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.addClass(n, `exit`, `active`),
            t.props.onExiting && t.props.onExiting(e));
        }),
        (t.onExited = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.removeClasses(n, `exit`),
            t.addClass(n, `exit`, `done`),
            t.props.onExited && t.props.onExited(e));
        }),
        (t.resolveArguments = function (e, n) {
          return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
        }),
        (t.getClassNames = function (e) {
          var n = t.props.classNames,
            r = typeof n == `string`,
            i = r && n ? n + `-` : ``,
            a = r ? `` + i + e : n[e];
          return {
            baseClassName: a,
            activeClassName: r ? a + `-active` : n[e + `Active`],
            doneClassName: r ? a + `-done` : n[e + `Done`],
          };
        }),
        t
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (e, t, n) {
        var r = this.getClassNames(t)[n + `ClassName`],
          i = this.getClassNames(`enter`).doneClassName;
        (t === `appear` && n === `done` && i && (r += ` ` + i),
          n === `active` && e && h(e),
          r && ((this.appliedClasses[t][n] = r), C(e, r)));
      }),
      (n.removeClasses = function (e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          i = n.active,
          a = n.done;
        ((this.appliedClasses[t] = {}),
          r && w(e, r),
          i && w(e, i),
          a && w(e, a));
      }),
      (n.render = function () {
        var e = this.props;
        e.classNames;
        var t = a(e, [`classNames`]);
        return d.createElement(
          x,
          i({}, t, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      t
    );
  })(d.Component);
((T.defaultProps = { classNames: `` }), (T.propTypes = {}));
var E = e();
function D(e) {
  let { children: t, ...n } = e,
    r = d.useRef(null);
  return (0, E.jsx)(T, { nodeRef: r, ...n, children: e.children(r) });
}
export { T as n, m as r, D as t };
