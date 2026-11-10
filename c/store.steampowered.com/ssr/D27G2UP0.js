var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(void 0);
function _(_) {
  let [_] = _.useState(() => new _());
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  return _.useContext(_) || _();
}
