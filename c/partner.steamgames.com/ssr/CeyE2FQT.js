var _ = class _ {
  m_ulSteamID = _.UZERO;
  constructor(_ = 0, _, _, _) {
    _ instanceof _
      ? (this.m_ulSteamID = _.m_ulSteamID)
      : typeof _ == `string`
        ? (this.m_ulSteamID = _.fromString(_, !0))
        : _ && _ && _ !== void 0
          ? this.SetFromComponents(_, _, _, _)
          : (this.m_ulSteamID = _ ? _.fromNumber(_, !0) : _.UZERO);
  }
  static InitFromAccountID(_, _) {
    return new _(Number(_), _, 1, 1);
  }
  static InitFromClanID(_, _) {
    return new _(Number(_), _, 7, 0);
  }
  static ToAccountID(_) {
    return _.ExtractAccountID(_.fromString(_, !0));
  }
  static ExtractAccountID(_) {
    return _.getLowBitsUnsigned();
  }
  GetAccountID() {
    return _.ExtractAccountID(this.m_ulSteamID);
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
  static InitFromString(_) {
    let _ = new _();
    try {
      let [_, _, _, _, _] =
          _.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        _ = Number(_),
        _ = Number(_),
        _ = _ ? Number(_) : 1;
      switch (_) {
        case `I`:
          _.SetFromComponents(_, _, 0, _);
          break;
        case `g`:
          _.SetFromComponents(_, 0, 7, _);
          break;
        case `A`:
          _.SetFromComponents(_, _, 4, _);
          break;
        case `G`:
          _.SetFromComponents(_, _, 3, _);
          break;
        case `M`:
          _.SetFromComponents(_, _, 2, _);
          break;
        case `P`:
          _.SetFromComponents(_, _, 5, _);
          break;
        case `C`:
          _.SetFromComponents(_, _, 6, _);
          break;
        case `U`:
          _.SetFromComponents(_, _, 1, _);
      }
    } catch {}
    return _;
  }
  BIsValid() {
    let _ = this.GetAccountType();
    if (_ <= 0 || _ >= 11) return !1;
    let _ = this.GetUniverse();
    if (_ <= 0 || _ >= 5) return !1;
    if (_ == 1) {
      if (this.GetAccountID() == 0 || this.GetInstance() > 4) return !1;
    } else if (_ == 7) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (_ == 3 && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == 1;
  }
  BIsClanAccount() {
    return this.GetAccountType() == 7;
  }
  SetAccountID(_) {
    this.m_ulSteamID = new _(_, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      _,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      _,
      this.GetUniverse(),
    );
  }
  SetUniverse(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      _,
    );
  }
  SetFromComponents(_, _, _, _) {
    let _ = ((_ & 255) << 24) + ((_ & 15) << 20) + (_ & 1048575),
      _ = _ & 4294967295;
    this.m_ulSteamID = new _(_, _, !0);
  }
};
export { _ };
