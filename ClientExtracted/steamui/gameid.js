import { Pi as e, fi as t } from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import "./chunk~19394a4118.js?contenthash=DfD1Klfi";
import { f as n } from "./chunk~6efc40bd45.js?contenthash=CtXRYpRt";
var r = class r {
  m_ulGameID;
  constructor(e, t, r) {
    if (typeof e == `string`) this.m_ulGameID = n.fromString(e, !0);
    else {
      let i = r,
        a = ((e & 255) << 24) + (t & 16777215);
      this.m_ulGameID = n.fromBits(a, i, !0);
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
    return this.GetType() === e.k_EGameIDTypeApp;
  }
  BIsShortcut() {
    return this.GetType() === e.k_EGameIDTypeShortcut;
  }
  BIsMod() {
    return this.GetType() === e.k_EGameIDTypeGameMod;
  }
  GetInternalAppID() {
    return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
  }
  BIsValid() {
    switch (this.GetType()) {
      case e.k_EGameIDTypeApp:
        return this.GetAppID() !== 0;
      case e.k_EGameIDTypeGameMod:
        return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
      case e.k_EGameIDTypeShortcut:
        return !!(this.GetModID() & 2147483648);
      default:
        return (t(!1, `Unknown GameID type: ${this.GetType()}`), !1);
    }
  }
  static InitFromAppID(t) {
    return new r(e.k_EGameIDTypeApp, t, 0);
  }
  static InitFromShortcutID(t) {
    return new r(e.k_EGameIDTypeShortcut, 0, t);
  }
};
function i(e) {
  return r.InitFromAppID(e).ConvertTo64BitString();
}
function a(e) {
  return r.InitFromShortcutID(e).ConvertTo64BitString();
}
export { r as n, a as r, i as t };
