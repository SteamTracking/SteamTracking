/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { C as r, M as i, N as a, S as o, Y as s, j as c } from "./vodquery.js";
import { t as l } from "./icn-copylink.js";
import {
  Cu as u,
  Zd as d,
  hs as f,
  ir as p,
  lr as m,
  mn as h,
  xu as g,
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
          .then(() => x(d(`#EventDisplay_Share_CopiedToClipboard`)))
          .catch((e) => {
            x(d(`#EventDisplay_Share_FailedToCopyToClipboard`)),
              console.error(`Failed to copy link to clipboard:`, e);
          });
    };
  return (0, v.jsxs)(`div`, {
    children: [
      (0, v.jsxs)(`div`, {
        className: g(p, s),
        children: [
          (0, v.jsx)(`span`, {
            className: a,
            children: d(n ?? `#EventDisplay_Share_Link`),
          }),
          (0, v.jsx)(`input`, {
            className: i,
            ref: y,
            value: t,
            readOnly: !0,
            onClick: S,
          }),
          (0, v.jsx)(u, {
            className: g(h, m, c),
            onActivate: S,
            children: (0, v.jsx)(f, {
              toolTipContent: d(`#ToolTip_CopyLinkToClipboard`),
              children: (0, v.jsx)(`img`, {
                className: o,
                src: l,
                alt: d(`#ToolTip_CopyLinkToClipboard`),
              }),
            }),
          }),
        ],
      }),
      (0, v.jsx)(`div`, { className: r, children: b }),
    ],
  });
}
export { y as t };
