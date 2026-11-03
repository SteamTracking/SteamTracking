var _ = _(_());
function _(_, _) {
  return _(
    (_) => {
      if (!_) return;
      let _ = _(_.ownerDocument.defaultView, (_) => {
        _(_[0]);
      });
      return _.observe(_), () => _.unobserve(_);
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
  return _(
    _,
    _.useCallback((_, _) => new _.IntersectionObserver(_, _), [_]),
  );
}
function _(_, ..._) {
  let _ = new _.ownerDocument.defaultView.ResizeObserver(..._);
  return _.observe(_), _;
}
export { _, _, _ };
