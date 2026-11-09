/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  S as e,
  ft as t,
  i as n,
  k as r,
  nt as i,
  x as a,
} from "./mobx.esm.js";
import { Lt as o, Rt as s, Wt as c } from "./src.js";
import { w as l } from "./react-router.js";
var u = class e {
  m_eCurLang = t(i.LANGUAGE);
  m_rgHasData = c([], 32, !1);
  m_bHasLocalizationContext = !1;
  m_callback = new o();
  GetCallback() {
    return this.m_callback;
  }
  GetCurEditLanguage() {
    return this.m_eCurLang;
  }
  SetCurEditLanguage(e) {
    return (
      this.m_eCurLang != e &&
      ((this.m_eCurLang = e), this.GetCallback().Dispatch(e), !0)
    );
  }
  SetHasLanguage(e) {
    e.forEach((e, t) => {
      this.m_rgHasData[t] != e && (this.m_rgHasData[t] = e);
    });
  }
  BHasLanguageData(e) {
    return this.m_rgHasData[e];
  }
  GetHasLocalizationContext() {
    return this.m_bHasLocalizationContext;
  }
  SetHasLocalizationContext(e) {
    e != this.m_bHasLocalizationContext && (this.m_bHasLocalizationContext = e);
  }
  static s_globalSingletonStore;
  static Get() {
    return (e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore;
  }
  constructor() {
    a(this);
  }
};
r([e], u.prototype, `m_eCurLang`, void 0),
  r([e], u.prototype, `m_rgHasData`, void 0),
  r([e], u.prototype, `m_bHasLocalizationContext`, void 0),
  r([s], u.prototype, `GetCurEditLanguage`, null),
  r([s], u.prototype, `SetCurEditLanguage`, null),
  r([n.bound], u.prototype, `SetHasLanguage`, null),
  r([s], u.prototype, `BHasLanguageData`, null);
function d() {
  return l(() => u.Get().GetCurEditLanguage());
}
export { d as n, u as t };
