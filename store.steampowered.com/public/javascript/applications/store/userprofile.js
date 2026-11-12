/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { Vy as r, cx as i } from "./main.js";
import { n as a, t as o } from "./chunk~f6ebb80c8b.js";
var s = e(t()),
  c = `w1edBej-iT4-`,
  l = n();
function u(e) {
  let {
      accountID: t,
      bHideWhenNotAvailable: n,
      bHideName: u,
      bLink: d = !0,
    } = e,
    [f] = o(t),
    p = a(t),
    m = s.useMemo(() => r.InitFromAccountID(t, i.EUNIVERSE), [t]),
    h = `${i.COMMUNITY_BASE_URL}profiles/${m.ConvertTo64BitString()}`;
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
          children: !n && (0, l.jsx)(`span`, { children: t }),
        }),
  });
}
export { u as t };
