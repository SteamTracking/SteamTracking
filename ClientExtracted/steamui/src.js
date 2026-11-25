import { f as e } from "./chunk~6efc40bd45.js?contenthash=BD8MmAIt";
var t = class t {
  m_ulSteamID = e.UZERO;
  constructor(n = 0, r, i, a) {
    n instanceof t
      ? (this.m_ulSteamID = n.m_ulSteamID)
      : typeof n == `string`
        ? (this.m_ulSteamID = e.fromString(n, !0))
        : r && i && a !== void 0
          ? this.SetFromComponents(n ?? 0, a, i, r)
          : (this.m_ulSteamID = n ? e.fromNumber(n, !0) : e.UZERO);
  }
  static InitFromAccountID(e, n) {
    return e ? new t(Number(e), n, 1, 1) : new t();
  }
  static InitFromClanID(e, n) {
    return new t(Number(e), n, 7, 0);
  }
  static ToAccountID(n) {
    return t.ExtractAccountID(e.fromString(n, !0));
  }
  static ExtractAccountID(e) {
    return e.getLowBitsUnsigned();
  }
  GetAccountID() {
    return t.ExtractAccountID(this.m_ulSteamID);
  }
  GetInstance() {
    return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
  }
  GetAccountType() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
  }
  GetUniverse() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
  }
  ConvertTo64BitString() {
    return this.m_ulSteamID.toString();
  }
  Render() {
    switch (this.GetAccountType()) {
      case 0:
        return `[I:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 7:
        return `[g:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 4:
        return (
          `[A:` +
          this.GetUniverse() +
          `:` +
          this.GetAccountID() +
          `:` +
          this.GetInstance() +
          `]`
        );
      case 3:
        return `[G:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 2:
        return (
          `[M:` +
          this.GetUniverse() +
          `:` +
          this.GetAccountID() +
          `:` +
          this.GetInstance() +
          `]`
        );
      case 5:
        return `[P:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 6:
        return `[C:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      default:
        return `[U:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
    }
  }
  static InitFromString(e) {
    let n = new t();
    try {
      let [t, r, i, a, o] =
          e.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        s = Number(i),
        c = Number(a),
        l = o ? Number(o) : 1;
      switch (r) {
        case `I`:
          n.SetFromComponents(c, l, 0, s);
          break;
        case `g`:
          n.SetFromComponents(c, 0, 7, s);
          break;
        case `A`:
          n.SetFromComponents(c, l, 4, s);
          break;
        case `G`:
          n.SetFromComponents(c, l, 3, s);
          break;
        case `M`:
          n.SetFromComponents(c, l, 2, s);
          break;
        case `P`:
          n.SetFromComponents(c, l, 5, s);
          break;
        case `C`:
          n.SetFromComponents(c, l, 6, s);
          break;
        case `U`:
          n.SetFromComponents(c, l, 1, s);
      }
    } catch {}
    return n;
  }
  BIsValid() {
    let e = this.GetAccountType();
    if (e <= 0 || e >= 11) return !1;
    let t = this.GetUniverse();
    if (t <= 0 || t >= 5) return !1;
    if (e == 1) {
      if (this.GetAccountID() == 0 || this.GetInstance() > 4) return !1;
    } else if (e == 7) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (e == 3 && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == 1;
  }
  BIsClanAccount() {
    return this.GetAccountType() == 7;
  }
  SetAccountID(t) {
    this.m_ulSteamID = new e(t, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      e,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      e,
      this.GetUniverse(),
    );
  }
  SetUniverse(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      e,
    );
  }
  SetFromComponents(t, n, r, i) {
    let a = ((i & 255) << 24) + ((r & 15) << 20) + (n & 1048575),
      o = t | 0;
    this.m_ulSteamID = new e(o, a, !0);
  }
};
export { t };
