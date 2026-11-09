/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { ft as e } from "./libraries.js";
import { n as t } from "./lazyrenderchildren.js";
import "./main.js";
import { t as n } from "./discoveryqueuewidget.js";
var r = e();
function i() {
  return (0, r.jsx)(t, {
    placeholderHeight: `200px`,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, r.jsx)(n, { eStoreDiscoveryQueueType: 0 }),
  });
}
export { i as default };
