var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(void 0);
function _(_) {
  let [_, _] = _.useState(_.rtServerNow),
    _ = !!_.bHoldSeed;
  return (
    _.useEffect(() => {
      _ || _(void 0);
    }, [_]),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return _.useContext(_) ?? _();
}
