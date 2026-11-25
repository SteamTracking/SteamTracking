/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { k as e, n as t, z as n } from "./chunk~de7f2df91c.js";
import { Nt as r, Pt as i, zt as a } from "./chunk~bd90a5fce7.js";
import { w as o } from "./chunk~44f252525d.js";
import { S as s, i as c, x as l } from "./chunk~96e60d7578.js";
var u = class t {
  m_eCurLang = n(e.LANGUAGE);
  m_rgHasData = a([], 32, !1);
  m_bHasLocalizationContext = !1;
  m_callback = new r();
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
    return ((t.s_globalSingletonStore ||= new t()), t.s_globalSingletonStore);
  }
  constructor() {
    l(this);
  }
};
(t([s], u.prototype, `m_eCurLang`, void 0),
  t([s], u.prototype, `m_rgHasData`, void 0),
  t([s], u.prototype, `m_bHasLocalizationContext`, void 0),
  t([i], u.prototype, `GetCurEditLanguage`, null),
  t([i], u.prototype, `SetCurEditLanguage`, null),
  t([c.bound], u.prototype, `SetHasLanguage`, null),
  t([i], u.prototype, `BHasLanguageData`, null));
function d() {
  return o(() => u.Get().GetCurEditLanguage());
}
export { d as n, u as t };
