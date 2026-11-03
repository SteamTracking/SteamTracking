var _ = _(_(), 1),
  _ = _(),
  _ = (0, _.createContext)({});
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.renderContext,
    children: _.children,
  });
}
function _() {
  return (0, _.useContext)(_);
}
export { _, _ };
