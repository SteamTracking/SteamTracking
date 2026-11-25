/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, W as t, nt as n } from "./chunk~de7f2df91c.js";
import { da as r, l as i } from "./chunk~1fa4b8f2ff.js";
import "./chunk~8681f5c764.js";
import { t as a } from "./chunk~eefd71512b.js";
import { o } from "./chunk~739842ca30.js";
var s = e(n()),
  c = t();
function l(e) {
  let [t, n] = (0, s.useState)(() => !!e),
    [r, i] = (0, s.useState)(!1),
    [a, o] = (0, s.useState)(!1),
    [c, l] = (0, s.useState)(null),
    [u, d] = (0, s.useState)(null),
    [f, p] = (0, s.useState)(null),
    [m, h] = (0, s.useState)(null),
    [g, _] = (0, s.useState)(null);
  return {
    bLoading: t,
    bError: r,
    bSuccess: a,
    strError: c,
    strSuccess: u,
    elSuccess: m,
    elError: f,
    strThrobber: g,
    fnSetLoading: n,
    fnSetError: i,
    fnSetSuccess: o,
    fnSetStrError: l,
    fnSetStrSuccess: d,
    fnSetElSuccess: h,
    fnSetElError: p,
    fnSetThrobber: _,
  };
}
function u(e) {
  let { strDialogTitle: t, state: n, closeModal: s, strThrobber: l } = e,
    {
      bLoading: u,
      bError: d,
      bSuccess: f,
      strError: p,
      strSuccess: m,
      elSuccess: h,
      elError: g,
      strThrobber: _,
    } = n;
  return d || p || g
    ? (0, c.jsxs)(i, {
        strTitle: t,
        bAlertDialog: !0,
        closeModal: s,
        className: o,
        children: [
          !!p &&
            (0, c.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: p || r(`#Error_ErrorCommunicatingWithNetwork`),
            }),
          !!g && g,
        ],
      })
    : f || m || h
      ? (0, c.jsx)(i, {
          strTitle: t,
          strDescription: m || r(`#EventDisplay_Share_Success`),
          bAlertDialog: !0,
          closeModal: s,
          className: o,
          children: (0, c.jsx)(c.Fragment, { children: !!h && h }),
        })
      : (0, c.jsx)(i, {
          strTitle: t,
          className: o,
          bProgressDialog: !0,
          closeModal: () => {},
          children: (0, c.jsx)(a, {
            string: l || _ || r(`#Loading`),
            size: `medium`,
            position: `center`,
          }),
        });
}
export { l as n, u as t };
