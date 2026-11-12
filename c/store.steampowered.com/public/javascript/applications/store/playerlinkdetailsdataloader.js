import { _ } from "./chunk~f025431ab0.js";
import { _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~68b7e78d68.js";
import { _ } from "./main.js";
var _ = _(_(), 1);
function _(_, _) {
  return new _.default(
    async (_) => {
      let _ = [..._],
        _ = await _.GetPlayerLinkDetails(_, {
          steamids: _,
        }),
        _ = new Map();
      return (
        _.Body()
          .accounts()
          .forEach((_) => {
            let _ = _.toObject();
            _.set(_.public_data.steamid, _);
          }),
        _.map((_) => _.get(_) ?? null)
      );
    },
    {
      maxBatchSize: 100,
      cache: !1,
      ..._,
    },
  );
}
function _(_) {
  return _(`PlayerLinkDetails`, () => _(_));
}
