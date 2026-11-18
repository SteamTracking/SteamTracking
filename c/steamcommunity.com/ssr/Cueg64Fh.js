var _ = _(_(), 1),
  _ = _();
function _(_) {
  let { depth: _ } = (0, _.useContext)(_);
  return (0, _.jsx)(_.Provider, {
    value: {
      depth: _ + 1,
    },
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
var _ = _.createContext({
  depth: 0,
});
function _() {
  return (0, _.useContext)(_).depth;
}
