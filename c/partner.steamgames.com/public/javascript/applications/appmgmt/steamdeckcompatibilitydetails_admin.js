import { _, _ } from "./mobx.esm.js";
import { _ } from "./deckverified.js";
_();
var _ = _();
function _(_) {
  let { dataprops: _, results: _ } = _,
    _ = null;
  if (_ && _.length > 0) {
    let _ = _.appid ?? null;
    if (_) {
      let _ = _.findIndex((_) => _.appid == _);
      _ = _ == -1 ? null : _[_];
    }
    let _ = _.search_id ?? null;
    if (!_ && _) {
      let _ = _.findIndex((_) => _.search_id == _);
      _ = _ == -1 ? null : _[_];
    }
  }
  return _
    ? (0, _.jsx)(_, {
        results: _,
      })
    : null;
}
export { _ as default };
