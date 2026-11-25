/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t, at as n } from "./chunk~01cfc309bf.js";
import {
  $ as r,
  D as i,
  E as a,
  F as o,
  I as s,
  L as c,
} from "./chunk~3f4314f3b4.js";
import { t as l } from "./chunk~5831a6de62.js";
import {
  Qd as u,
  Su as d,
  Xn as f,
  an as p,
  bu as m,
  ms as h,
  tr as g,
} from "./main.js";
var _ = e(t(), 1),
  v = n();
function y(e) {
  let { eventLink: t, labelOverride: n } = e,
    y = _.useRef(null),
    [b, x] = _.useState(``),
    S = () => {
      let e = y.current?.ownerDocument.defaultView;
      y.current &&
        e &&
        e.navigator.clipboard
          .writeText(y.current.value)
          .then(() => x(u(`#EventDisplay_Share_CopiedToClipboard`)))
          .catch((e) => {
            (x(u(`#EventDisplay_Share_FailedToCopyToClipboard`)),
              console.error(`Failed to copy link to clipboard:`, e));
          });
    };
  return (0, v.jsxs)(`div`, {
    children: [
      (0, v.jsxs)(`div`, {
        className: m(f, r),
        children: [
          (0, v.jsx)(`span`, {
            className: c,
            children: u(n ?? `#EventDisplay_Share_Link`),
          }),
          (0, v.jsx)(`input`, {
            className: s,
            ref: y,
            value: t,
            readOnly: !0,
            onClick: S,
          }),
          (0, v.jsx)(d, {
            className: m(p, g, o),
            onActivate: S,
            children: (0, v.jsx)(h, {
              toolTipContent: u(`#ToolTip_CopyLinkToClipboard`),
              children: (0, v.jsx)(`img`, {
                className: a,
                src: l,
                alt: u(`#ToolTip_CopyLinkToClipboard`),
              }),
            }),
          }),
        ],
      }),
      (0, v.jsx)(`div`, { className: i, children: b }),
    ],
  });
}
export { y as t };
