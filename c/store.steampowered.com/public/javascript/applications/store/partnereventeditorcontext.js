import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
var _ = _(_(), 1),
  _ = _(),
  _ = {
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
