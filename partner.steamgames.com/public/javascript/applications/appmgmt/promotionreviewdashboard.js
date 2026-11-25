/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { A as e, Pt as t, W as n, nt as r } from "./chunk~de7f2df91c.js";
import { A as i, x as a } from "./chunk~54f70c90c1.js";
import { t as o } from "./chunk~eefd71512b.js";
var s = t(r()),
  c = n();
function l(t) {
  let n = i(),
    r = (0, s.useMemo)(() => {
      if (n) {
        let t = Math.floor(Date.now() / 1e3) - 345600,
          r = t + 1728e3;
        return n
          .filter(
            (n) =>
              n.start_date > t &&
              n.start_date < r &&
              ((!n.owner_account_id && n.creator_account_id == e.accountid) ||
                n.owner_account_id == e.accountid ||
                (n.artwork_owner_account_id == e.accountid &&
                  !n.artwork_completed_time) ||
                n.operator_account_id == e.accountid ||
                n.watch_list?.includes(e.accountid)),
          )
          .map((e) => e.id);
      }
      return null;
    }, [n]);
  return e.is_support
    ? !r || n.length == 0
      ? (0, c.jsx)(o, { string: `loading`, size: `medium`, position: `center` })
      : r.length == 0
        ? (0, c.jsx)(`div`, {
            children: `You're all good! Nothing of yours needs attention :)`,
          })
        : (0, c.jsx)(`div`, {
            className: void 0,
            children: (0, c.jsx)(a, {
              planIDs: r,
              bExcludeHideButton: !0,
              bHideTypeField: !0,
              bHideDoneByDefault: !0,
            }),
          })
    : null;
}
export { l as default };
