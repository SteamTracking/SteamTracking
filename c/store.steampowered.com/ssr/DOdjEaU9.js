var _ = new _(`FocusHistory`).Debug;
function _(_) {
  let _ = (_) => {
      _(
        `preserving state and suppressing focus for tree ${_._} for navigation type ${_.navigationType}`,
      );
      let _ = window.navigation.currentEntry?.getState() ?? {};
      if (_.navigationType != `replace`) {
        let _ = _(_.Root);
        window.navigation.updateCurrentEntry({
          state: {
            ..._,
            [_(_)]: _,
          },
        });
      } else
        _[_] &&
          _.intercept({
            async handler() {
              let { [_(_)]: _, ..._ } = _.destination.getState() ?? {};
              window.navigation.updateCurrentEntry({
                state: {
                  ..._,
                  [_]: !0,
                },
              });
            },
            focusReset: `manual`,
          });
      _.DeferredFocus.SuppressFocus();
    },
    _ = (_) => {
      _(_) ? _.DeferredFocus.Reset() : _.DeferredFocus.ExecuteQueuedFocus();
    },
    _ = new _();
  return (
    window.navigation.addEventListener(`navigate`, _),
    _.Push(() => window.navigation.removeEventListener(`navigate`, _)),
    window.navigation.addEventListener(`navigatesuccess`, _),
    _.Push(() => window.navigation.removeEventListener(`navigatesuccess`, _)),
    _(),
    _() ? _(_, _) : _(_),
    _.GetUnregisterFunc()
  );
}
function _(_, _) {
  let _ = _ ?? _(_);
  return (
    _(
      `Restoring focus state for ${_._}, ${_ ? `history available` : `no history`}`,
    ),
    _ ? (_(_.Root, _, 0), !0) : !1
  );
}
function _(_) {
  return `FocusHistory_${_._}`;
}
function _(_) {
  return window.navigation.currentEntry?.getState()?.[_(_)];
}
var _;
function _() {
  if (!_) {
    _ = new _();
    let _ = performance.now();
    window.addEventListener(`message`, (_) => {
      typeof _.data == `string` &&
        _.data == `FocusRestoreReady` &&
        (_(
          `Got FocusRestoreReady event from page after ${performance.now() - _}ms, will record in history.  ${_.CountRegistered()} trees waiting.`,
        ),
        _(),
        _.Dispatch(),
        _.ClearAllCallbacks(),
        window.clearTimeout(_));
    });
    let _ = window.setTimeout(() => {
      _.CountRegistered() &&
        (console.warn(`Waited 4000ms for FocusRestoreReady, proceeding`),
        _.Dispatch());
    }, 4e3);
  }
}
function _(_, _) {
  if (window.__bFocusRestoreReady) {
    _(_);
    return;
  }
  (_(
    `Wait for page enabled, suppressing focus in ${_._} until we hear that page is ready`,
  ),
    _.DeferredFocus.SuppressFocus());
  let _ = _(_),
    _ = _.Register(() => {
      _(_, _) ? _.DeferredFocus.Reset() : _.DeferredFocus.ExecuteQueuedFocus();
    }).Unregister;
  _.Push(_);
}
function _() {
  ((window.__bFocusRestoreReady = !0), window.postMessage(`FocusRestoreReady`));
}
var _ = `FocusHistoryWaitForPage`;
function _() {
  let _ = window.navigation.currentEntry?.getState();
  return (_(`Wait for page? ${_?.[_] ? `wait` : `no`} `, _), !!_?.[_]);
}
function _() {
  window.navigation.updateCurrentEntry({
    state: {
      ...window.navigation.currentEntry?.getState(),
      [_]: !0,
    },
  });
}
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext({
    ePreferredHWCompat: 0,
  });
function _(_) {
  let { ePreferredHWCompat: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: {
      ePreferredHWCompat: _,
    },
    children: _.children,
  });
}
function _() {
  return _.useContext(_).ePreferredHWCompat;
}
