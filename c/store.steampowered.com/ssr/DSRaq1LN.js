function _(_) {
  switch (_?.toUpperCase()) {
    case `AE`:
      return 32;
    case `AU`:
      return 21;
    case `BR`:
      return 7;
    case `CA`:
      return 20;
    case `CH`:
    case `LI`:
      return 4;
    case `CL`:
      return 25;
    case `CN`:
    case `XC`:
      return 23;
    case `CO`:
      return 27;
    case `CR`:
      return 40;
    case `AD`:
    case `AL`:
    case `AT`:
    case `AX`:
    case `BA`:
    case `BE`:
    case `BG`:
    case `CY`:
    case `CZ`:
    case `DE`:
    case `DK`:
    case `EE`:
    case `ES`:
    case `FI`:
    case `FO`:
    case `FR`:
    case `GF`:
    case `GI`:
    case `GP`:
    case `GR`:
    case `HR`:
    case `HU`:
    case `IE`:
    case `IT`:
    case `LT`:
    case `LU`:
    case `LV`:
    case `MC`:
    case `ME`:
    case `MK`:
    case `MQ`:
    case `MT`:
    case `NC`:
    case `NL`:
    case `PF`:
    case `PT`:
    case `RE`:
    case `RO`:
    case `RS`:
    case `SE`:
    case `SI`:
    case `SJ`:
    case `SK`:
    case `SM`:
    case `VA`:
      return 3;
    case `GB`:
    case `GG`:
    case `GS`:
    case `IM`:
    case `JE`:
      return 2;
    case `HK`:
      return 29;
    case `ID`:
      return 10;
    case `IL`:
      return 35;
    case `IN`:
      return 24;
    case `JP`:
      return 8;
    case `KR`:
      return 16;
    case `KW`:
      return 38;
    case `KZ`:
      return 37;
    case `MX`:
      return 19;
    case `MY`:
      return 11;
    case `NO`:
      return 9;
    case `NZ`:
      return 22;
    case `PE`:
      return 26;
    case `PH`:
      return 12;
    case `PL`:
      return 6;
    case `QA`:
      return 39;
    case `RU`:
      return 5;
    case `SA`:
      return 31;
    case `SG`:
      return 13;
    case `TH`:
      return 14;
    case `TW`:
      return 30;
    case `UA`:
      return 18;
    case `AF`:
    case `AG`:
    case `AI`:
    case `AM`:
    case `AN`:
    case `AO`:
    case `AQ`:
    case `AR`:
    case `AS`:
    case `AW`:
    case `AZ`:
    case `BB`:
    case `BD`:
    case `BF`:
    case `BH`:
    case `BI`:
    case `BJ`:
    case `BM`:
    case `BN`:
    case `BO`:
    case `BS`:
    case `BT`:
    case `BV`:
    case `BW`:
    case `BY`:
    case `BZ`:
    case `CC`:
    case `CD`:
    case `CF`:
    case `CG`:
    case `CI`:
    case `CK`:
    case `CM`:
    case `CV`:
    case `CX`:
    case `DJ`:
    case `DM`:
    case `DO`:
    case `DZ`:
    case `EC`:
    case `EG`:
    case `EH`:
    case `ER`:
    case `ET`:
    case `FJ`:
    case `FK`:
    case `FM`:
    case `GA`:
    case `GD`:
    case `GE`:
    case `GH`:
    case `GL`:
    case `GM`:
    case `GN`:
    case `GQ`:
    case `GT`:
    case `GU`:
    case `GW`:
    case `GY`:
    case `HM`:
    case `HN`:
    case `HT`:
    case `IO`:
    case `IQ`:
    case `IS`:
    case `JM`:
    case `JO`:
    case `KE`:
    case `KG`:
    case `KH`:
    case `KI`:
    case `KM`:
    case `KN`:
    case `KY`:
    case `LA`:
    case `LB`:
    case `LC`:
    case `LK`:
    case `LR`:
    case `LS`:
    case `LY`:
    case `MA`:
    case `MD`:
    case `MG`:
    case `MH`:
    case `ML`:
    case `MM`:
    case `MN`:
    case `MO`:
    case `MP`:
    case `MR`:
    case `MS`:
    case `MU`:
    case `MV`:
    case `MW`:
    case `MZ`:
    case `NA`:
    case `NE`:
    case `NF`:
    case `NG`:
    case `NI`:
    case `NP`:
    case `NR`:
    case `NU`:
    case `OM`:
    case `PA`:
    case `PG`:
    case `PK`:
    case `PM`:
    case `PN`:
    case `PR`:
    case `PS`:
    case `PW`:
    case `PY`:
    case `RW`:
    case `SB`:
    case `SC`:
    case `SD`:
    case `SH`:
    case `SL`:
    case `SN`:
    case `SO`:
    case `SR`:
    case `ST`:
    case `SV`:
    case `SY`:
    case `SZ`:
    case `TC`:
    case `TD`:
    case `TF`:
    case `TG`:
    case `TJ`:
    case `TK`:
    case `TL`:
    case `TM`:
    case `TN`:
    case `TO`:
    case `TR`:
    case `TT`:
    case `TV`:
    case `TZ`:
    case `UG`:
    case `UM`:
    case `US`:
    case `UZ`:
    case `VC`:
    case `VE`:
    case `VG`:
    case `VI`:
    case `VU`:
    case `WF`:
    case `WS`:
    case `YE`:
    case `YT`:
    case `ZM`:
    case `ZW`:
      return 1;
    case `UY`:
      return 41;
    case `VN`:
      return 15;
    case `ZA`:
      return 28;
    default:
      return console.assert(!1, `Unhandled country code: ${_}`), 1;
  }
}
function _(_, _) {
  return _(_, _(_));
}
function _(_, _) {
  let {
      strSymbol: _,
      bSuffixSymbol: _,
      bSpaceForSymbol: _,
      bWholeUnitsOnly: _,
      strDecimalSymbol: _,
      strThousandsSeparator: _,
    } = _,
    _ = _ < 0,
    _ = _ && _ % 100 == 0;
  _ && (_ = -_);
  let _ = [];
  for (let _ = 0; _ < 2; _++) _ || _.push(_ % 10), (_ = Math.floor(_ / 10));
  !_ && _ && _.push(_);
  let _ = 0;
  do
    _++ % 3 == 0 && _ > 2 && _ && _.push(_),
      _.push(_ % 10),
      (_ = Math.floor(_ / 10));
  while (_ > 0);
  let _ = _.reverse().join(``),
    _ = _ ? ` ` : ``,
    _ = _ ? `-` : ``;
  return _ ? `${_}${_}${_}${_}` : `${_}${_}${_}${_}`;
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: () => _(_, _),
    onSuccess(_) {
      let [
        _,
        { packageids_added: _, appids_added: _, purchase_result_detail: _ },
      ] = _;
      _ && _(_);
    },
  });
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_item_id(_.fromObject(_));
  let _ = await _.AddFreeLicense(_, _);
  return [_.GetEResult(), _.Body().toObject()];
}
function _(_, _ = !1) {
  if (_.is_coming_soon && !_) return 0;
  let _ = _.steam_release_date;
  return (_ ||= _.original_release_date), _;
}
var _ = 7;
function _(_, _) {
  if (!_) return !1;
  let _ = _(_);
  return _ ? !_.is_coming_soon && _ + _ * _.PerDay > _ : !1;
}
function _(_, _) {
  return !!(_ && _.is_coming_soon && _ && _.packageid);
}
function _(_, _) {
  return !!(_ && _ && _.packageid);
}
function _(_) {
  return _(
    _.coming_soon_display,
    _.steam_release_date,
    _.custom_release_date_message,
  );
}
function _(_, _, _, _) {
  switch (_) {
    case `date_full`:
      return _(_);
    case `date_month`:
      return _(new Date(_ * 1e3));
    case `date_quarter`:
      return _(new Date(_ * 1e3), _);
    case `date_year`:
      return _(new Date(_ * 1e3));
    case `text_comingsoon`:
      return _ || _(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return _ || _(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function _(_) {
  return _?.is_coming_soon
    ? _(
        _.coming_soon_display,
        _.steam_release_date,
        _.custom_release_date_message,
      )
    : _?.steam_release_date
      ? _(_.steam_release_date)
      : ``;
}
function _(_, _, _) {
  switch (_) {
    case `date_full`:
      return _(_);
    case `date_month`:
      return _(new Date(_ * 1e3));
    case `date_quarter`:
      return _(new Date(_ * 1e3));
    case `date_year`:
      return _(new Date(_ * 1e3));
    case `text_comingsoon`:
      return _ || _.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return _ || _.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function _(_) {
  if (!_) return ``;
  if (_ && _.is_coming_soon) {
    if (_.coming_soon_display) return _(_);
    if (_.custom_release_date_message) return _.custom_release_date_message;
    let _ = _.steam_release_date;
    return _ ? (_.is_abridged_release_date ? _(new Date(_ * 1e3)) : _(_)) : ``;
  }
  let _ = _.steam_release_date;
  return (_ ||= _.original_release_date), _ ? _(_) : ``;
}
export { _, _, _, _, _, _, _, _, _, _, _ };
