var _ = _(_(), 1),
  _ = (0, _.createContext)({
    ownerWindow: window,
  }),
  _ = () => (0, _.useContext)(_);
function _(_) {
  let { ownerWindow: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        ownerWindow: _,
      }),
      [_],
    );
  return (0, _.createElement)(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
export { _, _ };
