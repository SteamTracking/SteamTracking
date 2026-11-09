/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { U as e, kt as t, on as n } from "./mobx.esm.js";
import { t as r } from "./useQuery.js";
import { t as i } from "./axios.js";
var a = n(i()),
  o = n(t());
function s(t) {
  let n = r({
    queryKey: [`useMilestoneByAppID`, t],
    queryFn: async () => {
      let n = `${e.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
        r = { appid: t },
        i = await a.default.get(n, { params: r });
      if (i?.data?.success == 1) return i.data.milestones;
      throw Error(`failed to load milestonse for appid ` + t);
    },
    enabled: !!t,
  });
  return o.useMemo(() => n?.data, [t, n.isLoading]);
}
export { s as t };
