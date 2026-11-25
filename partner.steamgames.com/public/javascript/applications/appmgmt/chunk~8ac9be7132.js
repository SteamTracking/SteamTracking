/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, W as t, nt as n, r, w as i } from "./chunk~de7f2df91c.js";
import { t as a } from "./chunk~bd90a5fce7.js";
import {
  M as o,
  N as s,
  R as c,
  T as l,
  f as u,
  o as d,
  r as f,
  u as p,
} from "./chunk~6110f63e8e.js";
import { d as m } from "./chunk~5ff8b33a2d.js";
var h = e(n()),
  g = t();
function _() {
  let [e] = (0, h.useState)(i(`testpage`, `application_config`)),
    [t] = (0, h.useState)(i(`testtemplate`, `application_config`));
  return [e, t];
}
function v() {
  let [e] = (0, h.useState)(i(`deadlines`, `application_config`)),
    [t] = (0, h.useState)(i(`publisher_name`, `application_config`)),
    [n] = (0, h.useState)(parseInt(i(`publisher_id`, `application_config`))),
    [r] = (0, h.useState)(
      parseInt(i(`publisher_onboarded`, `application_config`)),
    );
  return [e, t, n, r];
}
function y(e) {
  let [t, n, i, h] = v(),
    [y, b] = _();
  return (0, g.jsx)(a, {
    children: (0, g.jsx)(`div`, {
      className: f,
      children: (0, g.jsxs)(`div`, {
        className: u,
        children: [
          (0, g.jsx)(`div`, {
            className: l,
            children: (0, g.jsxs)(`div`, {
              className: r(p, d),
              children: [
                `Steamworks Document Communication`,
                (0, g.jsx)(`div`, { className: m, children: n }),
              ],
            }),
          }),
          (0, g.jsxs)(`div`, {
            className: o,
            children: [
              (0, g.jsx)(`div`, { className: r(p, d) }),
              (0, g.jsxs)(`div`, {
                className: s,
                children: [
                  (0, g.jsx)(`div`, {
                    className: c,
                    children: `Important Notice`,
                  }),
                  (0, g.jsx)(`div`, {
                    className: void 0,
                    children: `Information in this document does not constitute tax, legal, or other professional advice. If you have other questions, please contact your tax, legal, or other professional advisor.`,
                  }),
                ],
              }),
              (0, g.jsxs)(`div`, {
                className: s,
                children: [
                  (0, g.jsx)(`div`, {
                    className: c,
                    children: `Third-party KYC vendor`,
                  }),
                  (0, g.jsx)(`div`, {
                    className: void 0,
                    children: `Valve uses a third-party KYC provider for KYC information collection and verification.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
export { y as default };
