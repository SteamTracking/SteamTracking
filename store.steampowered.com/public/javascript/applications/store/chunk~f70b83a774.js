/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { F as t, L as n, Lt as r, ft as i } from "./chunk~01cfc309bf.js";
import { Xc as a } from "./main.js";
import { n as o, r as s } from "./chunk~5d95ff6b7f.js";
var c = e(r()),
  l = i(),
  u = class extends c.Component {
    state = { bIsLoading: !0 };
    componentDidMount() {
      (s.Get(), this.setState({ bIsLoading: !1 }));
    }
    render() {
      return this.state.bIsLoading
        ? null
        : (0, l.jsx)(a, {
            children: (0, l.jsxs)(n, {
              children: [
                (0, l.jsx)(t, {
                  exact: !0,
                  path: `/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss`,
                  component: o,
                }),
                (0, l.jsx)(t, { children: !1 }),
              ],
            }),
          });
    }
  };
export { u as default };
