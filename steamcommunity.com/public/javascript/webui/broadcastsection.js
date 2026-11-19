/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e } from "./chunk~f025431ab0.js";
import { Sr as t } from "./chunk~d3515eca4e.js";
import { Vn as n } from "./chunk~e464778a03.js";
import { n as r, t as i } from "./chunk~eee3bbd4cd.js";
import { n as a } from "./chunk~0ef0cd2c00.js";
var o = e(t()),
  s = a(),
  c = o.forwardRef(function (
    {
      steamID: e,
      localSteamID: t,
      watchLocation: a,
      bWebRTC: o,
      style: c,
      onRequestClose: l,
      actions: u,
      onTheaterMode: d,
      onLocalStreamChange: f,
      bVerticalBroadcastChat: p,
    },
    m,
  ) {
    let h = t || e;
    return (0, s.jsxs)(`div`, {
      ref: m,
      style: { display: `flex`, flexDirection: `column`, ...c },
      children: [
        (0, s.jsxs)(`div`, {
          className: `BroadcastSection`,
          children: [
            (0, s.jsx)(
              r,
              {
                steamIDBroadcast: h,
                watchLocation: a,
                bWebRTC: o,
                onRequestClose: l,
                actions: u,
                onTheaterMode: d,
                onOpenLinkInNewWindow: n,
              },
              h,
            ),
            (0, s.jsx)(`div`, { className: `videoContainerSizer` }),
          ],
        }),
        (0, s.jsx)(`div`, {
          className: `BroadcastDetailsSection`,
          children: (0, s.jsx)(i, {
            steamID: h,
            onLocalStreamChange: f,
            bVerticalBroadcastChat: p,
          }),
        }),
      ],
    });
  });
export { c as default };
