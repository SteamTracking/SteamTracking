import { _ } from "./src.js";
var _ = new _(`GR`);
function _(_) {
  return (..._) => {
    _(`[${(performance.now() / 1e3).toFixed(3)}]`, ..._);
  };
}
var _ = _(_.Debug),
  _ = _(_.Info),
  _ = _(_.Warning),
  _ = _(_.Error),
  _ = _;
export { _, _, _, _, _ };
