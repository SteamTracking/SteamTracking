import { _, _, _ } from "./chunk~de7f2df91c.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _ } from "./chunk~f4e4ed5c17.js";
var _ = _(_()),
  _ = _(_());
function _(_) {
  let _ = _({
    queryKey: [`useMilestoneByAppID`, _],
    queryFn: async () => {
      let _ = `${_.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
        _ = {
          appid: _,
        },
        _ = await _.default.get(_, {
          params: _,
        });
      if (_?.data?.success == 1) return _.data.milestones;
      throw Error(`failed to load milestonse for appid ` + _);
    },
    enabled: !!_,
  });
  return _.useMemo(() => _?.data, [_, _.isLoading]);
}
