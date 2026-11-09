import { _, _ } from "./mobx.esm.js";
import { _ } from "./storebrowsequerycontext.js";
import "./react-router.js";
var _ = _(_(), 1);
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(
    () => (_ ? (_.item_type == 0 ? [_.appid] : _.included_appids || []) : []),
    [_],
  );
}
function _(_) {
  let { data: _ } = _(_);
  return (0, _.useMemo)(() => {
    if (_ && _.related_items && _.related_items.parent_appid)
      return {
        appid: _.related_items.parent_appid,
      };
  }, [_]);
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            appid: _,
          }
        : void 0,
    [_],
  );
}
function _(_) {
  return (0, _.useMemo)(
    () =>
      _
        ? {
            packageid: _,
          }
        : void 0,
    [_],
  );
}
export { _, _, _, _ };
