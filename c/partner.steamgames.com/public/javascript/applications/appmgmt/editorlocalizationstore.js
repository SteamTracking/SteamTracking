import { _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _, _ } from "./src.js";
import { _ } from "./react-router.js";
var _ = class _ {
  m_eCurLang = _(_.LANGUAGE);
  m_rgHasData = _([], 32, !1);
  m_bHasLocalizationContext = !1;
  m_callback = new _();
  GetCallback() {
    return this.m_callback;
  }
  GetCurEditLanguage() {
    return this.m_eCurLang;
  }
  SetCurEditLanguage(_) {
    return (
      this.m_eCurLang != _ &&
      ((this.m_eCurLang = _), this.GetCallback().Dispatch(_), !0)
    );
  }
  SetHasLanguage(_) {
    _.forEach((_, _) => {
      this.m_rgHasData[_] != _ && (this.m_rgHasData[_] = _);
    });
  }
  BHasLanguageData(_) {
    return this.m_rgHasData[_];
  }
  GetHasLocalizationContext() {
    return this.m_bHasLocalizationContext;
  }
  SetHasLocalizationContext(_) {
    _ != this.m_bHasLocalizationContext && (this.m_bHasLocalizationContext = _);
  }
  static s_globalSingletonStore;
  static Get() {
    return ((_.s_globalSingletonStore ||= new _()), _.s_globalSingletonStore);
  }
  constructor() {
    _(this);
  }
};
(_([_], _.prototype, `m_eCurLang`, void 0),
  _([_], _.prototype, `m_rgHasData`, void 0),
  _([_], _.prototype, `m_bHasLocalizationContext`, void 0),
  _([_], _.prototype, `GetCurEditLanguage`, null),
  _([_], _.prototype, `SetCurEditLanguage`, null),
  _([_.bound], _.prototype, `SetHasLanguage`, null),
  _([_], _.prototype, `BHasLanguageData`, null));
function _() {
  return _(() => _.Get().GetCurEditLanguage());
}
