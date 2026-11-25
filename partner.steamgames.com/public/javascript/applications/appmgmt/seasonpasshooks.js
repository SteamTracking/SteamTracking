/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, g as t, nt as n } from "./chunk~de7f2df91c.js";
import { t as r } from "./chunk~ede3e357a2.js";
import { t as i } from "./chunk~f4e4ed5c17.js";
var a = e(i()),
  o = e(n());
function s(e) {
  let n = r({
    queryKey: [`useMilestoneByAppID`, e],
    queryFn: async () => {
      let n = `${t.PARTNER_BASE_URL}seasonpass/ajaxgetmilestoneinfo`,
        r = { appid: e },
        i = await a.default.get(n, { params: r });
      if (i?.data?.success == 1) return i.data.milestones;
      throw Error(`failed to load milestonse for appid ` + e);
    },
    enabled: !!e,
  });
  return o.useMemo(() => n?.data, [e, n.isLoading]);
}
export { s as t };
