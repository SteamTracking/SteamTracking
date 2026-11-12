var _ = _(_(), 1);
function _(_, _) {
  return _(
    (_) => {
      if (!_) return;
      let _ = _.ownerDocument.defaultView;
      if (!_) return;
      let _ = !0,
        _ = _(_, (_) => {
          _ && _.length && _(_[_.length - 1]);
        });
      return (
        _.observe(_),
        () => {
          ((_ = !1), _.disconnect());
        }
      );
    },
    [_, _],
  );
}
function _(_) {
  return _(
    _,
    _.useCallback(
      (_, _) =>
        _.ResizeObserver
          ? new _.ResizeObserver(_)
          : (_(!1, `ResizeObserver is not available`),
            {
              observe: () => {},
              unobserve: () => {},
              disconnect: () => {},
            }),
      [],
    ),
  );
}
function _(_, _) {
  let _ = _?.root,
    _ = _?.rootMargin,
    _ = _?.threshold;
  return _(
    _,
    _.useCallback(
      (_, _) =>
        new _.IntersectionObserver(_, {
          root: _,
          rootMargin: _,
          threshold: _,
        }),
      [_, _, _],
    ),
  );
}
function _(_, _) {
  let _ = _.useRef(void 0),
    _ = _.useRef(_);
  return (
    (_.current = _),
    _(
      _.useCallback((_) => {
        let _ = _.current;
        (!_.current && _.isIntersecting && _.onEnter?.(_),
          _.current && !_.isIntersecting && _.onLeave?.(_),
          _.onIntersectionChange?.(_),
          (_.current = _.isIntersecting));
      }, []),
      _,
    )
  );
}
function _(_, ..._) {
  let _ = new _.ownerDocument.defaultView.ResizeObserver(..._);
  return (_.observe(_), _);
}
function _(_, ..._) {
  let _ = new _.ownerDocument.defaultView.IntersectionObserver(..._);
  return (_.observe(_), _);
}
