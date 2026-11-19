import { _, _ } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import "./chunk~19394a4118.js?contenthash=DfD1Klfi";
import { _ } from "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
var _ = class _ {
  m_ulGameID;
  constructor(_, _, _) {
    if (typeof _ == `string`) this.m_ulGameID = _.fromString(_, !0);
    else {
      let _ = _,
        _ = ((_ & 255) << 24) + (_ & 16777215);
      this.m_ulGameID = _.fromBits(_, _, !0);
    }
  }
  GetAppID() {
    return this.m_ulGameID.getLowBitsUnsigned() & 16777215;
  }
  GetType() {
    return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
  }
  GetModID() {
    return this.m_ulGameID.getHighBitsUnsigned();
  }
  ConvertTo64BitString() {
    return this.m_ulGameID.toString();
  }
  BIsSteamApp() {
    return this.GetType() === _.k_EGameIDTypeApp;
  }
  BIsShortcut() {
    return this.GetType() === _.k_EGameIDTypeShortcut;
  }
  BIsMod() {
    return this.GetType() === _.k_EGameIDTypeGameMod;
  }
  GetInternalAppID() {
    return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
  }
  BIsValid() {
    switch (this.GetType()) {
      case _.k_EGameIDTypeApp:
        return this.GetAppID() !== 0;
      case _.k_EGameIDTypeGameMod:
        return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
      case _.k_EGameIDTypeShortcut:
        return !!(this.GetModID() & 2147483648);
      default:
        return (_(!1, `Unknown GameID type: ${this.GetType()}`), !1);
    }
  }
  static InitFromAppID(_) {
    return new _(_.k_EGameIDTypeApp, _, 0);
  }
  static InitFromShortcutID(_) {
    return new _(_.k_EGameIDTypeShortcut, 0, _);
  }
};
function _(_) {
  return _.InitFromAppID(_).ConvertTo64BitString();
}
function _(_) {
  return _.InitFromShortcutID(_).ConvertTo64BitString();
}
