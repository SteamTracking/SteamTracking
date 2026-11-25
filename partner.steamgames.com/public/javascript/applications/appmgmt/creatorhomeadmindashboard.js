/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, W as t, nt as n } from "./chunk~de7f2df91c.js";
import { t as r } from "./chunk~bd90a5fce7.js";
import { t as i } from "./chunk~9aa05d2c7d.js";
import { r as a } from "./chunk~7b4b9eb713.js";
import { t as o } from "./chunk~eefd71512b.js";
var s = e(n()),
  c = `Eesk-sarw9w-`,
  l = t();
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
                .map((e) => i.fetchQuery(a(Number(e.accountid)))),
              o = await Promise.all(r);
            e.push(...o);
            let s = [...e].sort(
              (e, t) => t.GetNumFollowers() - e.GetNumFollowers(),
            );
            (p(s), h(n));
          }
          u(!1);
        })();
    }, [t]),
    !f || !t
      ? (0, l.jsx)(o, {})
      : (0, l.jsxs)(r, {
          children: [
            n &&
              (0, l.jsxs)(`span`, {
                children: [
                  (0, l.jsx)(`span`, { children: `Loading: ` }),
                  (0, l.jsxs)(`span`, { children: [m + 1, ` / `, t.length] }),
                  (0, l.jsx)(o, { size: `small` }),
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
