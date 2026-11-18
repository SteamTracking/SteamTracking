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
