var _ = _(_(), 1),
  _ = _(),
  _ = (0, _.createContext)([]);
function _(_) {
  let _ = _(),
    [_, _] = (0, _.useState)([_]),
    [_, _] = (0, _.useState)(_);
  return (
    _ !== _ && (_(_), _([_])),
    window.SSR &&
      (window.SSR.saveMetricsMetadata = (_) => {
        _((_) => [..._, _]);
      }),
    (0, _.jsx)(_, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return (0, _.use)(_);
}
