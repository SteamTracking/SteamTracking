/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  C as t,
  S as n,
  a as r,
  pt as i,
  rt as a,
} from "./chunk~de7f2df91c.js";
import { Ft as o, It as s, Vt as c } from "./chunk~25a6634263.js";
import { w as l } from "./chunk~44f252525d.js";
var u = class e {
  m_eCurLang = i(a.LANGUAGE);
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
    return ((e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore);
  }
  constructor() {
    n(this);
  }
};
(e([t], u.prototype, `m_eCurLang`, void 0),
  e([t], u.prototype, `m_rgHasData`, void 0),
  e([t], u.prototype, `m_bHasLocalizationContext`, void 0),
  e([s], u.prototype, `GetCurEditLanguage`, null),
  e([s], u.prototype, `SetCurEditLanguage`, null),
  e([r.bound], u.prototype, `SetHasLanguage`, null),
  e([s], u.prototype, `BHasLanguageData`, null));
function d() {
  return l(() => u.Get().GetCurEditLanguage());
}
export { d as n, u as t };
