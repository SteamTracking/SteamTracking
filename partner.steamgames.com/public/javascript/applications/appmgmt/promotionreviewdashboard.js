/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n, rt as r } from "./mobx.esm.js";
import { A as i, x as a } from "./promotionoperationowner.js";
import { t as o } from "./throbber.js";
var s = n(t()),
  c = e();
function l(e) {
  let t = i(),
    n = (0, s.useMemo)(() => {
      if (t) {
        let e = Math.floor(Date.now() / 1e3) - 345600,
          n = e + 1728e3;
        return t
          .filter(
            (t) =>
              t.start_date > e &&
              t.start_date < n &&
              ((!t.owner_account_id && t.creator_account_id == r.accountid) ||
                t.owner_account_id == r.accountid ||
                (t.artwork_owner_account_id == r.accountid &&
                  !t.artwork_completed_time) ||
                t.operator_account_id == r.accountid ||
                t.watch_list?.includes(r.accountid)),
          )
          .map((e) => e.id);
      }
      return null;
    }, [t]);
  return r.is_support
    ? !n || t.length == 0
      ? (0, c.jsx)(o, { string: `loading`, size: `medium`, position: `center` })
      : n.length == 0
        ? (0, c.jsx)(`div`, {
            children: `You're all good! Nothing of yours needs attention :)`,
          })
        : (0, c.jsx)(`div`, {
            className: void 0,
            children: (0, c.jsx)(a, {
              planIDs: n,
              bExcludeHideButton: !0,
              bHideTypeField: !0,
              bHideDoneByDefault: !0,
            }),
          })
    : null;
}
export { l as default };
