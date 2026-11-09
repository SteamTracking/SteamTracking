/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  F as t,
  L as n,
  Lt as r,
  P as i,
  V as a,
  ft as o,
} from "./libraries.js";
import { Iu as s, Jb as c, ht as l, oy as u } from "./main.js";
import { a as d, n as f, o as p, r as m } from "./marketingmessageutilhooks.js";
var h = e(r()),
  g = o(),
  _ = h.createContext({ prioritized_list: !1 });
function v(e) {
  let [t, n] = h.useState(),
    r = a(),
    i = h.useMemo(() => (new URLSearchParams(r.search), {}), [r.search]);
  return (
    h.useEffect(() => {
      c(`marketingmessage_config`, `application_config`), n({});
    }, [i]),
    t
      ? (0, g.jsxs)(_.Provider, { value: t, children: [e.children, ` `] })
      : null
  );
}
var y = {
  List: () => `${s.MarketingMessages()}list/`,
  Message: (e) => `${s.MarketingMessages()}${e}`,
  MessagePreview: (e) => `${s.MarketingMessages()}preview/${e}`,
};
function b(e) {
  let r = C();
  return r
    ? (0, g.jsx)(l, {
        domain: `store.steampowered.com`,
        controller: `message`,
        method: `default`,
        children: (0, g.jsx)(v, {
          children: (0, g.jsx)(d, {
            children: (0, g.jsxs)(n, {
              children: [
                (0, g.jsx)(t, {
                  path: `${y.List()}`,
                  children: (0, g.jsx)(f, { MarketingMessagesStore: r }),
                }),
                (0, g.jsx)(t, {
                  path: `${y.MessagePreview(`:messageid`)}`,
                  children: (0, g.jsx)(m, {
                    MarketingMessagesStore: r,
                    preview: !0,
                  }),
                }),
                (0, g.jsx)(t, {
                  path: `${y.Message(`:messageid`)}`,
                  children: (0, g.jsx)(m, { MarketingMessagesStore: r }),
                }),
                (0, g.jsx)(t, {
                  children: (0, g.jsx)(i, { to: `${y.List()}` }),
                }),
              ],
            }),
          }),
        }),
      })
    : null;
}
var x;
function S(e) {
  return (x ||= new p(e)), x;
}
function C() {
  let [e, t] = h.useState(null),
    n = u();
  return (
    h.useEffect(() => {
      e || t(S(n));
    }, [e, n]),
    e
  );
}
export { y as MarketingMessageRoutes, b as default };
