/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { o as r } from "./historyutils.js";
import { Uy as i, h as a, jo as o, kc as s, vc as c, zb as l } from "./main.js";
import { i as u, r as d } from "./discoveryqueuestore.js";
import { t as f } from "./preloaddiscoveryqueue.js";
var p = e(t(), 1),
  m = `KRPWJkCT3yY-`,
  h = `U5rtQqR05aI-`,
  g = n();
function _(e) {
  let { appID: t } = e,
    n = f(),
    [_] = r(`inqueue`, `0`),
    [v, y] = (0, p.useState)(!1),
    b = l(),
    { eStoreDiscoveryQueueType: x, storePageFilter: S } = p.useMemo(() => {
      if (_?.length > 0) {
        let e = _.split(`_`),
          t = Number(e[0]),
          n;
        return (
          e.length > 1 && (n = d(e[1])),
          { eStoreDiscoveryQueueType: t, storePageFilter: n }
        );
      }
      return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
    }, [_]),
    { showDiscoveryQueue: C } = a(x, { includeAppID: t, storePageFilter: S }),
    w = p.useCallback(() => {
      y(!0);
    }, []),
    T = u(x, S);
  return !n || v
    ? null
    : (0, g.jsxs)(s, {
        focusable: !0,
        className: m,
        onSecondaryButton: w,
        onOKButton: C,
        onOKActionDescription: i(`#DiscoveryQueue_ResumeWizard`),
        onSecondaryActionDescription: i(`#Button_Close`),
        children: [
          (0, g.jsxs)(`div`, {
            onClick: C,
            className: h,
            children: [
              (0, g.jsx)(o, {}),
              i(`#DiscoveryQueue_ResumeWizard`),
              T?.length > 0 && `: ` + T,
            ],
          }),
          !b &&
            (0, g.jsx)(`div`, {
              className: `CqOWAiNFmcU-`,
              onClick: w,
              children: (0, g.jsx)(c, {}),
            }),
        ],
      });
}
export { _ as default };
