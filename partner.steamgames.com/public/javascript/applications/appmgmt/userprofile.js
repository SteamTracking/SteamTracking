/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, nt as n, on as r } from "./mobx.esm.js";
import { t as i } from "./src.js";
import "./steamid.js";
import { a, o } from "./collapseablesection.js";
var s = r(t()),
  c = `w1edBej-iT4-`,
  l = e();
function u(e) {
  let {
      accountID: t,
      bHideWhenNotAvailable: r,
      bHideName: u,
      bLink: d = !0,
    } = e,
    [f] = a(t),
    p = o(t),
    m = s.useMemo(() => i.InitFromAccountID(t, n.EUNIVERSE), [t]),
    h = `${n.COMMUNITY_BASE_URL}profiles/${m.ConvertTo64BitString()}`;
  return (0, l.jsx)(l.Fragment, {
    children: f
      ? (0, l.jsxs)(d ? `a` : `span`, {
          href: d ? h : void 0,
          children: [
            (0, l.jsx)(`img`, {
              className: c,
              src: f.avatar_url,
              "data-miniprofile": `s` + m.ConvertTo64BitString(),
            }),
            !u &&
              (0, l.jsx)(`span`, {
                children: p ? `${p} (${f.persona_name})` : f.persona_name,
              }),
          ],
        })
      : (0, l.jsx)(l.Fragment, {
          children: !r && (0, l.jsx)(`span`, { children: t }),
        }),
  });
}
export { u as t };
