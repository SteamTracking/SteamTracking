/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import "./modals.js";
import { t as r } from "./throbber.js";
import { En as i, Uy as a } from "./main.js";
var o = e(t()),
  s = `_9yRYCAb3PbE-`,
  c = `wizbFzhGtBc-`,
  l = `_9rhLFCwqjPg-`,
  u = `n7RXDTH-Wf8-`,
  d = `d1pzzsdLKFY-`,
  f = `EHcr1piLxMU-`,
  p = `_5bOwitJmFXY-`,
  m = `DCpaT--WqrQ-`,
  h = `IS4i15iyHjA-`,
  g = `_2B3LwZM5S-w-`,
  _ = n();
function v(e) {
  let [t, n] = (0, o.useState)(() => !!e),
    [r, i] = (0, o.useState)(!1),
    [a, s] = (0, o.useState)(!1),
    [c, l] = (0, o.useState)(null),
    [u, d] = (0, o.useState)(null),
    [f, p] = (0, o.useState)(null),
    [m, h] = (0, o.useState)(null),
    [g, _] = (0, o.useState)(null);
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
    fnSetSuccess: s,
    fnSetStrError: l,
    fnSetStrSuccess: d,
    fnSetElSuccess: h,
    fnSetElError: p,
    fnSetThrobber: _,
  };
}
function y(e) {
  let { strDialogTitle: t, state: n, closeModal: o, strThrobber: s } = e,
    {
      bLoading: c,
      bError: l,
      bSuccess: u,
      strError: d,
      strSuccess: f,
      elSuccess: p,
      elError: m,
      strThrobber: h,
    } = n;
  return l || d || m
    ? (0, _.jsxs)(i, {
        strTitle: t,
        bAlertDialog: !0,
        closeModal: o,
        className: g,
        children: [
          !!d &&
            (0, _.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: d || a(`#Error_ErrorCommunicatingWithNetwork`),
            }),
          !!m && m,
        ],
      })
    : u || f || p
      ? (0, _.jsx)(i, {
          strTitle: t,
          strDescription: f || a(`#EventDisplay_Share_Success`),
          bAlertDialog: !0,
          closeModal: o,
          className: g,
          children: (0, _.jsx)(_.Fragment, { children: !!p && p }),
        })
      : (0, _.jsx)(i, {
          strTitle: t,
          className: g,
          bProgressDialog: !0,
          closeModal: () => {},
          children: (0, _.jsx)(r, {
            string: s || h || a(`#Loading`),
            size: `medium`,
            position: `center`,
          }),
        });
}
export {
  c as a,
  p as c,
  u as d,
  l as i,
  d as l,
  v as n,
  h as o,
  s as r,
  m as s,
  y as t,
  f as u,
};
