function _(_) {
  return Object.prototype.toString.call(_) === `[object Object]`;
}
function _(_) {
  if (!_(_)) return !1;
  let _ = _.constructor;
  if (_ === void 0) return !0;
  let _ = _.prototype;
  return !(!_(_) || !Object.prototype.hasOwnProperty.call(_, `isPrototypeOf`));
}
function _(..._) {
  return JSON.stringify(_, (_, _) => {
    if (_(_)) {
      let _ = {};
      return (
        Object.keys(_)
          .sort()
          .forEach((_) => {
            _[_] = _[_];
          }),
        _
      );
    }
    return _;
  });
}
var _ = _(_(), 1);
_();
var _ = (0, _.createContext)({
  instances: {},
  factories: {},
});
function _(_, _) {
  let _ = (0, _.useContext)(_),
    _ = typeof _ == `string` ? _ : _(..._),
    _ = _;
  for (; _; ) {
    if (_ in _.instances) return _.instances[_];
    if (_ in _.factories) break;
    _ = _.parent;
  }
  let _ = (_?.factories[_] ?? _)();
  return ((_ ?? _).instances[_] = _), _;
}
export { _ };
