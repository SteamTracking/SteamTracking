import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~521597d5f9.js";
var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(void 0);
function _() {
  return _.useContext(_) ?? _();
}
var _ = {
    eLocation: 0,
  },
  _ = _.createContext(_);
function _(_) {
  let { children: _, location: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: {
      ..._,
      eLocation: _ ?? 0,
    },
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
function _() {
  return _().eLocation == 2;
}
function _() {
  let _ = _();
  return _.eLocation == 2 || _.eLocation == 1;
}
