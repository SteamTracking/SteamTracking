/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n } from "./mobx.esm.js";
var r = `xtBr-L5Owus-`;
function i() {
  return r;
}
var a = n(t(), 1),
  o = e(),
  s = (0, a.createContext)({
    Button: `basic`,
    Checkbox: `basic`,
    Combobox: `basic`,
    LoadingSpinner: `basic`,
    SegmentedControl: `basic`,
    Select: `basic`,
    Tabs: `basic`,
    TextArea: `basic`,
    TextInput: `basic`,
  });
function c(e) {
  let { variants: t = {}, children: n } = e,
    r = (0, a.use)(s);
  return (0, o.jsx)(s, { value: { ...r, ...t }, children: n });
}
function l(e) {
  return (0, a.use)(s)[e];
}
function u(e, t) {
  let n = l(e);
  return !t || t === "default" ? n : t;
}
export { u as n, i as r, c as t };
