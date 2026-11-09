/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { ot as e } from "./libraries.js";
import { Nu as t } from "./main.js";
var n = `qkhMGgZoiEA-`,
  r = `dR7N9Ozyb6k-`,
  i = `_8j-XyEfRwfE-`,
  a = e();
function o(e) {
  let { children: r, ...i } = e;
  return (0, a.jsx)(t, {
    className: n,
    type: `button`,
    ...i,
    children: (0, a.jsx)(`span`, { children: r }),
  });
}
function s(e) {
  let { children: n, ...r } = e;
  return (0, a.jsx)(t, {
    className: i,
    type: `button`,
    ...r,
    children: (0, a.jsx)(`span`, { children: n }),
  });
}
function c(e) {
  let { children: n, ...i } = e;
  return (0, a.jsx)(t, {
    className: r,
    type: `button`,
    ...i,
    children: (0, a.jsx)(`span`, { children: n }),
  });
}
export { o as n, c as r, s as t };
