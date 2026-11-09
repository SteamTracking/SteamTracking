import { _, _, _ } from "./mobx.esm.js";
import { _ } from "./useQuery.js";
import { _ } from "./axios.js";
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
export { _ };
