/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { o as r } from "./chunk~af36c62e9f.js";
import { Jy as i, No as a, Wb as o, bc as s, h as c, jc as l } from "./main.js";
import { i as u, r as d } from "./chunk~7401689b78.js";
import { t as f } from "./chunk~237be05bcf.js";
var p = e(t(), 1),
  m = `KRPWJkCT3yY-`,
  h = `U5rtQqR05aI-`,
  g = n();
function _(e) {
  let { appID: t } = e,
    n = f(),
    [_] = r(`inqueue`, `0`),
    [v, y] = (0, p.useState)(!1),
    b = o(),
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
    { showDiscoveryQueue: C } = c(x, { includeAppID: t, storePageFilter: S }),
    w = p.useCallback(() => {
      y(!0);
    }, []),
    T = u(x, S);
  return !n || v
    ? null
    : (0, g.jsxs)(l, {
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
              (0, g.jsx)(a, {}),
              i(`#DiscoveryQueue_ResumeWizard`),
              T?.length > 0 && `: ` + T,
            ],
          }),
          !b &&
            (0, g.jsx)(`div`, {
              className: `CqOWAiNFmcU-`,
              onClick: w,
              children: (0, g.jsx)(s, {}),
            }),
        ],
      });
}
export { _ as default };
