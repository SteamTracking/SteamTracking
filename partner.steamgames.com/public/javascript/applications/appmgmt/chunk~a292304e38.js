/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, sn as t, vt as n } from "./chunk~de7f2df91c.js";
var r = `xtBr-L5Owus-`;
function i() {
  return r;
}
var a = t(e(), 1),
  o = n(),
  s = {
    Button: `basic`,
    Checkbox: `basic`,
    Combobox: `basic`,
    LoadingSpinner: `basic`,
    SegmentedControl: `basic`,
    Select: `basic`,
    Tabs: `basic`,
    TextArea: `basic`,
    TextInput: `basic`,
  },
  c = (0, a.createContext)(s);
function l(e) {
  let { variants: t = {}, children: n } = e,
    r = { ...(0, a.use)(c), ...t },
    i = (0, a.useRef)(r);
  return (
    u(i.current, r) || (i.current = r),
    (0, o.jsx)(c, { value: i.current, children: n })
  );
}
function u(e, t) {
  return Object.keys(s).every((n) => e[n] === t[n]);
}
function d(e) {
  return (0, a.use)(c)[e];
}
function f(e, t) {
  let n = d(e);
  return !t || t === "default" ? n : t;
}
var p = (0, a.createContext)(`2`);
function m(e) {
  let { size: t, children: n } = e;
  return (0, o.jsx)(p, { value: t, children: n });
}
function h(e) {
  let t = (0, a.use)(p);
  return e ?? t;
}
export { i as a, f as i, l as n, h as r, m as t };
