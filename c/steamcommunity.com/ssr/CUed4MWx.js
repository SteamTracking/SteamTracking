function _(_, _ = 0, _ = Math.random) {
  if (_?.length > 1) {
    let _ = _ > 0 ? Math.min(_, _.length) : _.length;
    for (; _ !== 0;) {
      let _ = Math.floor(_() * _);
      --_;
      let _ = _[_];
      ((_[_] = _[_]), (_[_] = _));
    }
  }
  return _;
}
function _(_, _, _) {
  if (_ >= 0 && _ >= 0) {
    let _ = _.splice(_, 1)[0];
    _ >= _.length ? (_[_] = _) : _.splice(_, 0, _);
  }
  return _;
}
function _(_, _) {
  return _(_, (_) => _ == _);
}
function _(_, _) {
  let _ = _.findIndex(_);
  return _ >= 0 && (_.splice(_, 1), !0);
}
function _(_, _, _) {
  return _
    ? _.length < _
      ? _.concat(Array(_ - _.length).fill(_))
      : _
    : (console.error(
        `array should be defined for us to fill in the missing indexes`,
      ),
      []);
}
function _(_, _) {
  let _ = new Map();
  for (let _ of _) {
    let _ = _(_);
    if (_.has(_)) {
      let _ = _.get(_);
      _.set(_, _ + 1);
    } else _.set(_, 1);
  }
  return [..._.entries()];
}
