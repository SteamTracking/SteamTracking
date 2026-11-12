import "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _ } from "./main.js";
_();
var _ = _();
function _(_) {
  return !!(_.metaKey || _.altKey || _.ctrlKey || _.shiftKey);
}
function _(_) {
  let { navigate: _, onClick: _, ..._ } = _,
    { target: _ } = _,
    _ = (_) => {
      try {
        _ && _(_);
      } catch (_) {
        throw (_.preventDefault(), _);
      }
      _.defaultPrevented ||
        _.button !== 0 ||
        (_ && _ !== `_self`) ||
        _(_) ||
        (_.preventDefault(), _());
    };
  return (0, _.jsx)(_, {
    ..._,
    onClick: _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    component: _,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    component: _,
    ..._,
  });
}
