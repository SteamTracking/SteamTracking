/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, rt as t, sn as n, vt as r } from "./chunk~de7f2df91c.js";
import { t as i } from "./chunk~25a6634263.js";
import "./chunk~a6b9ae1345.js";
import { a, o } from "./chunk~ec644f97c6.js";
var s = n(e()),
  c = `w1edBej-iT4-`,
  l = r();
function u(e) {
  let {
      accountID: n,
      bHideWhenNotAvailable: r,
      bHideName: u,
      bLink: d = !0,
    } = e,
    [f] = a(n),
    p = o(n),
    m = s.useMemo(() => i.InitFromAccountID(n, t.EUNIVERSE), [n]),
    h = `${t.COMMUNITY_BASE_URL}profiles/${m.ConvertTo64BitString()}`;
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
          children: !r && (0, l.jsx)(`span`, { children: n }),
        }),
  });
}
export { u as t };
