/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, vt as n } from "./chunk~de7f2df91c.js";
import { r } from "./chunk~25a6634263.js";
import { t as i } from "./chunk~9aa05d2c7d.js";
import { t as a } from "./chunk~eefd71512b.js";
import { r as o } from "./chunk~7b4b9eb713.js";
var s = t(e()),
  c = `Eesk-sarw9w-`,
  l = n();
function u(e) {
  let { creatorHomes: t } = e,
    [n, u] = s.useState(!0),
    [f, p] = s.useState(void 0),
    [m, h] = s.useState(0);
  return (
    s.useEffect(() => {
      t &&
        (async () => {
          let e = [];
          for (let n = 0; n < t.length; n += 10) {
            let r = t
                .slice(n, n + 10)
                .map((e) => i.fetchQuery(o(Number(e.accountid)))),
              a = await Promise.all(r);
            e.push(...a);
            let s = [...e].sort(
              (e, t) => t.GetNumFollowers() - e.GetNumFollowers(),
            );
            (p(s), h(n));
          }
          u(!1);
        })();
    }, [t]),
    !f || !t
      ? (0, l.jsx)(a, {})
      : (0, l.jsxs)(r, {
          children: [
            n &&
              (0, l.jsxs)(`span`, {
                children: [
                  (0, l.jsx)(`span`, { children: `Loading: ` }),
                  (0, l.jsxs)(`span`, { children: [m + 1, ` / `, t.length] }),
                  (0, l.jsx)(a, { size: `small` }),
                ],
              }),
            (0, l.jsxs)(`table`, {
              className: c,
              children: [
                (0, l.jsx)(`thead`, {
                  children: (0, l.jsxs)(`tr`, {
                    children: [
                      (0, l.jsx)(`th`, { children: `Name` }),
                      (0, l.jsx)(`th`, { children: `Followers` }),
                    ],
                  }),
                }),
                (0, l.jsx)(`tbody`, {
                  children: f.map((e) =>
                    (0, l.jsx)(d, { creatorHome: e }, e.GetClanAccountID()),
                  ),
                }),
              ],
            }),
          ],
        })
  );
}
function d(e) {
  let { creatorHome: t } = e;
  return (0, l.jsxs)(`tr`, {
    children: [
      (0, l.jsx)(`td`, {
        children: (0, l.jsx)(`a`, {
          href: t.GetCreatorHomeURL(`developer`),
          target: `_blank`,
          rel: `noopener noreferrer`,
          children: t.GetName(),
        }),
      }),
      (0, l.jsx)(`td`, { children: t.GetNumFollowers() }),
    ],
  });
}
export { u as default };
