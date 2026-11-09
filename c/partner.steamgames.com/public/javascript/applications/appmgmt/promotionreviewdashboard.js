import { _, _, _, _ } from "./mobx.esm.js";
import { _, _ } from "./promotionoperationowner.js";
import { _ } from "./throbber.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let _ = _(),
    _ = (0, _.useMemo)(() => {
      if (_) {
        let _ = Math.floor(Date.now() / 1e3) - 345600,
          _ = _ + 1728e3;
        return _.filter(
          (_) =>
            _.start_date > _ &&
            _.start_date < _ &&
            ((!_.owner_account_id && _.creator_account_id == _.accountid) ||
              _.owner_account_id == _.accountid ||
              (_.artwork_owner_account_id == _.accountid &&
                !_.artwork_completed_time) ||
              _.operator_account_id == _.accountid ||
              _.watch_list?.includes(_.accountid)),
        ).map((_) => _._);
      }
      return null;
    }, [_]);
  return _.is_support
    ? !_ || _.length == 0
      ? (0, _.jsx)(_, {
          string: `loading`,
          size: `medium`,
          position: `center`,
        })
      : _.length == 0
        ? (0, _.jsx)(`div`, {
            children: `You're all good! Nothing of yours needs attention :)`,
          })
        : (0, _.jsx)(`div`, {
            className: void 0,
            children: (0, _.jsx)(_, {
              planIDs: _,
              bExcludeHideButton: !0,
              bHideTypeField: !0,
              bHideDoneByDefault: !0,
            }),
          })
    : null;
}
export { _ as default };
