/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import {
  L as r,
  O as i,
  R as a,
  k as o,
  tt as s,
  z as c,
} from "./chunk~3f4314f3b4.js";
import { t as l } from "./chunk~5831a6de62.js";
import {
  Su as u,
  cr as d,
  ef as f,
  fn as p,
  gs as m,
  rr as h,
  wu as g,
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
          .then(() => x(f(`#EventDisplay_Share_CopiedToClipboard`)))
          .catch((e) => {
            (x(f(`#EventDisplay_Share_FailedToCopyToClipboard`)),
              console.error(`Failed to copy link to clipboard:`, e));
          });
    };
  return (0, v.jsxs)(`div`, {
    children: [
      (0, v.jsxs)(`div`, {
        className: u(h, s),
        children: [
          (0, v.jsx)(`span`, {
            className: c,
            children: f(n ?? `#EventDisplay_Share_Link`),
          }),
          (0, v.jsx)(`input`, {
            className: a,
            ref: y,
            value: t,
            readOnly: !0,
            onClick: S,
          }),
          (0, v.jsx)(g, {
            className: u(p, d, r),
            onActivate: S,
            children: (0, v.jsx)(m, {
              toolTipContent: f(`#ToolTip_CopyLinkToClipboard`),
              children: (0, v.jsx)(`img`, {
                className: i,
                src: l,
                alt: f(`#ToolTip_CopyLinkToClipboard`),
              }),
            }),
          }),
        ],
      }),
      (0, v.jsx)(`div`, { className: o, children: b }),
    ],
  });
}
export { y as t };
