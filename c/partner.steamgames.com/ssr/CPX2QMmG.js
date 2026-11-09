function _(_, _, _) {
  let _;
  _ =
    _ === void 0 || _ === !0 || _ === !1
      ? {
          weekday: _ ? `long` : `short`,
          year: _ ? void 0 : `numeric`,
        }
      : _;
  let _ = new Date(_ * 1e3),
    _ = {
      weekday: `short`,
      month: `long`,
      day: `numeric`,
      year: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_.GetPreferredLocales(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: `numeric`,
      month: `short`,
      day: `numeric`,
      ..._,
    };
  return _.toLocaleDateString(_.GetPreferredLocales(), _);
}
var _ = new Map();
function _(_) {
  let _ = _.get(_);
  if (_ === !0 || _ === !1) return _;
  let _ = new Date();
  return (
    _.setHours(15),
    (_ =
      _.toLocaleTimeString(_, {
        hour: `numeric`,
      }) ==
      _.toLocaleTimeString(_, {
        hour: `numeric`,
        hour12: !1,
      })),
    _.set(_, _),
    _
  );
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
      hourCycle: `h23`,
    },
    _ = {
      hour: `numeric`,
      minute: `2-digit`,
    },
    _ = _.GetPreferredLocales(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
var _ = new Map(),
  _ = new Map();
function _(_) {
  let _ = _.get(_.getFullYear());
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      year: `numeric`,
    })),
    _.set(_.getFullYear(), _),
    _)
  );
}
function _(_) {
  let _ = _.getMonth() + 12 * _.getFullYear(),
    _ = _.get(_);
  return (
    _ ||
    ((_ = _.toLocaleDateString(_.GetPreferredLocales(), {
      month: `long`,
      year: `numeric`,
    })),
    _.set(_, _),
    _)
  );
}
function _(_, _) {
  switch (_.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q1` : `#Time_QuarterOfYear_Q1`,
        _.getUTCFullYear(),
      );
    case 3:
    case 4:
    case 5:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q2` : `#Time_QuarterOfYear_Q2`,
        _.getUTCFullYear(),
      );
    case 6:
    case 7:
    case 8:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q3` : `#Time_QuarterOfYear_Q3`,
        _.getUTCFullYear(),
      );
    default:
      return _(
        _ ? `#Time_QuarterOfYear_Expanded_Q4` : `#Time_QuarterOfYear_Q4`,
        _.getUTCFullYear(),
      );
  }
}
function _(_, _, _) {
  for (; _.length < _;) _ = _ + _;
  return _;
}
function _(_) {
  return (
    (_ === void 0 || isNaN(_)) && (_ = 0),
    {
      hours: Math.floor(_ / 3600),
      minutes: Math.floor((_ % 3600) / 60),
      seconds: Math.floor(_ % 60),
      fraction: _ - Math.floor(_),
    }
  );
}
function _(_, _, _) {
  let _ = _ < 0;
  _ = _ ? 0 - _ : _;
  let _ = _(_),
    _ = _(_.seconds.toString(), 2, `0`),
    _ = _.fraction.toFixed(2).split(`.`)[1],
    _ = _ ?? !0,
    _ = !_ || _ == `00`;
  _ && _.hours == 0 && _.minutes == 0 && _.seconds == 0 && _ && (_ = !1);
  let _ = ``;
  if (_.hours) {
    let _ = _(_.minutes.toString(), 2, `0`);
    _ = _(
      _
        ? `#Duration_HourMinuteSecondMillisecond`
        : `#Duration_HourMinuteSecond`,
      _.hours,
      _,
      _,
      _,
    );
  } else {
    let _ = _.minutes.toString(),
      _ = _ ? `#Duration_MinuteSecondMillisecond` : `#Duration_MinuteSecond`;
    _ = _.Localize(_, _, _, _);
  }
  return (
    _ && (_ = _ ? _.Localize(`#Duration_WrittenNegation`, _) : `-` + _), _
  );
}
var _ = _(_()),
  _ = class _ {
    m_mapTokens = new Map();
    m_mapFallbackTokens = new Map();
    m_cbkTokensChanged = new _();
    m_rgLocalesToUse;
    m_bReportIndividualMissingTokens = !0;
    m_bReady = !1;
    static GetLanguageFallback(_) {
      return _ === `sc_schinese` ? `schinese` : `english`;
    }
    static GetELanguageFallback(_) {
      return _ === 29 ? 6 : 0;
    }
    static IsELanguageValidInRealm(_, _) {
      return _ === (_ === 29 ? _.k_ESteamRealmChina : _.k_ESteamRealmGlobal);
    }
    static GetLanguageListForRealms(_) {
      let _ = [];
      for (let _ = 0; _ < 32; _++)
        for (let _ of _)
          if (this.IsELanguageValidInRealm(_, _)) {
            _.push(_);
            break;
          }
      return _;
    }
    InitFromObjects(_, _, _, _) {
      (_ && (this.m_bReportIndividualMissingTokens = !1),
        _ || this.m_mapTokens.clear(),
        this.AddTokens(_, _ || {}),
        this.m_cbkTokensChanged.Dispatch());
    }
    InitDirect(_, _) {
      (this.m_mapTokens.clear(),
        this.m_mapFallbackTokens.clear(),
        this.AddTokens(_, _),
        this.m_cbkTokensChanged.Dispatch());
    }
    SetReady(_) {
      this.m_bReady = _;
    }
    AddTokens(_, _) {
      (Object.keys(_).forEach((_) => {
        this.m_mapTokens.set(_, _[_]);
      }),
        _ &&
          Object.keys(_).forEach((_) => {
            (this.m_mapTokens.has(_) || this.m_mapTokens.set(_, _[_]),
              this.m_mapFallbackTokens.set(_, _[_]));
          }));
    }
    GetTokensChangedCallbackList() {
      return this.m_cbkTokensChanged;
    }
    GetPreferredLocales() {
      return this.m_rgLocalesToUse
        ? this.m_rgLocalesToUse
        : navigator && navigator.languages
          ? navigator.languages
          : [`en-US`];
    }
    GetELanguageFallbackOrder(_ = null) {
      let _ = [];
      return (
        _.push(_(_.LANGUAGE)),
        (_.SUPPORTED_LANGUAGES || []).forEach((_) => {
          _.value != _.LANGUAGE && _.push(_(_.value));
        }),
        _ &&
          _.GetLanguageListForRealms(_).forEach((_) => {
            _.indexOf(_) == -1 && _.push(_);
          }),
        _
      );
    }
    SetPreferredLocales(_) {
      this.m_rgLocalesToUse = _;
    }
    BLooksLikeToken(_) {
      return !!_ && _.length > 0 && _.charAt(0) == `#`;
    }
    LocalizeIfToken(_, _) {
      return this.BLooksLikeToken(_) ? this.LocalizeString(_, _) : _;
    }
    LocalizeString(_, _) {
      if (!this.BLooksLikeToken(_)) return;
      let _ = this.m_mapTokens.get(_.substring(1));
      if (_ === void 0) {
        if (_.HasKey(_)) return _.Localize(_);
        this.m_mapTokens.size === 0
          ? _(
              !1,
              `Attempting to localize token '${_}' with no tokens in our map for language '${_.LANGUAGE}'. SharedLoc ready: ${_.IsReady()}. site has inited: ${this.m_bReady}`,
            )
          : !_ &&
            this.m_bReportIndividualMissingTokens &&
            _().ReportError(
              Error(
                `Unable to find localization token '${_}' for language '${_.LANGUAGE}', ${this.m_mapTokens.size} tokens in map. SharedLoc ready: ${_.IsReady()}. site has inited: ${this.m_bReady}`,
              ),
              {
                bIncludeMessageInIdentifier: !0,
              },
            );
      } else return _;
    }
    LocalizeStringFromFallback(_) {
      if (!_ || _.length == 0 || _.charAt(0) != `#`) return;
      let _ = this.m_mapFallbackTokens.get(_.substring(1));
      if (_ !== void 0) return _;
    }
    static GetTokenWithFallback(_) {
      if (!_) return ``;
      let _ = _(_.LANGUAGE),
        _ = _.find((_) => _.language == _);
      if (_) return _.localized_string;
      let _ = _.GetELanguageFallback(_);
      return _.find((_) => _.language == _)?.localized_string ?? ``;
    }
    static BHasTokenLanguage(_, _) {
      return !!_.find((_) => _.language == _);
    }
  };
function _(_, ..._) {
  let _ = _.LocalizeString(_);
  return _ === void 0 ? _ : _(_, ..._);
}
function _(_, ..._) {
  let _ = _.LocalizeString(_);
  if (_ === void 0) return _;
  let _ = [],
    _ = /(.*?)%(\d+)\$s/g,
    _ = 0,
    _;
  for (; (_ = _.exec(_));) {
    ((_ += _[0].length), _.push(_[1]));
    let _ = parseInt(_[2]);
    _ >= 1 && _ <= _.length && _.push(_[_ - 1]);
  }
  return (_.push(_.substr(_)), _.createElement(_.Fragment, null, ..._));
}
function _(_, ..._) {
  let _ = _.LocalizeIfToken(_);
  return _ === void 0 ? _ : _(_, ..._);
}
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, `gs`),
    _ = 0,
    _;
  for (; (_ = _.exec(_));) {
    ((_ += _[0].length), _.push(_[1]));
    let _ = parseInt(_[2]),
      _ = _[3] || ``,
      _ = _(_, ..._),
      _ =
        _ >= 1 && _ <= _.length && _[_ - 1]
          ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
          : _;
    _.push(_);
  }
  return (_.push(_.substr(_)), _.createElement(_.Fragment, null, ..._));
}
function _(_, _, ..._) {
  return _(_ === 1 || _ === `1` ? _ : _ + `_Plural`, _, ..._);
}
function _(_, ..._) {
  return (
    _.length == 0 ||
      (_ = _.replace(/%(?:(\d+)\$)?s/g, function (_, _) {
        if (_ <= _.length && _ >= 1) {
          let _ = _[_ - 1];
          return String(_ ?? ``);
        }
        return _;
      })),
    _
  );
}
var _ = class _ {
    static Set(_, _, _) {
      if (((_ ||= _([], 32, null)), _.length <= _)) {
        if (_ >= 32) return _;
        _ = _(_, _ + 1, null);
      }
      return ((_[_] = _), _);
    }
    static Get(_, _) {
      return (_ && _.length > _ && _[_]) || ``;
    }
    static GetWithFallback(_, _) {
      return _ ? _.Get(_, _) || _.Get(_, _.GetELanguageFallback(_)) : null;
    }
    static BHas(_, _) {
      return !!(_ && _.length > _ && _[_]);
    }
  },
  _ = {
    english: `en`,
    german: `de`,
    french: `fr`,
    italian: `it`,
    korean: `ko`,
    latam: `es-419`,
    spanish: `es`,
    schinese: `zh-cn`,
    tchinese: `zh-tw`,
    russian: `ru`,
    thai: `th`,
    japanese: `ja`,
    brazilian: `pt-br`,
    portuguese: `pt`,
    polish: `pl`,
    danish: `da`,
    dutch: `nl`,
    finnish: `fi`,
    norwegian: `no`,
    swedish: `sv`,
    hungarian: `hu`,
    czech: `cs`,
    romanian: `ro`,
    turkish: `tr`,
    arabic: `ar`,
    bulgarian: `bg`,
    greek: `el`,
    ukrainian: `uk`,
    vietnamese: `vi`,
    indonesian: `id`,
    malay: `ms`,
    sc_schinese: `zh-cn`,
    koreana: `ko`,
  },
  _ = {
    _: 0,
    "en-US": 0,
    _: 1,
    "de-DE": 1,
    _: 2,
    "fr-FR": 2,
    _: 3,
    "it-IT": 3,
    _: 4,
    "ko-KR": 4,
    _: 5,
    "es-ES": 5,
    "zh-cn": 6,
    "zh-CN": 6,
    "zh-tw": 7,
    "zh-TW": 7,
    _: 8,
    "ru-RU": 8,
    _: 9,
    "th-TH": 9,
    _: 10,
    "ja-JP": 10,
    _: 11,
    "pt-PT": 11,
    _: 12,
    "pl-PL": 12,
    _: 13,
    "da-DK": 13,
    _: 14,
    "nl-NL": 14,
    _: 15,
    "fi-FI": 15,
    _: 16,
    "nb-NO": 16,
    _: 17,
    "sv-SE": 17,
    _: 18,
    "hu-HU": 18,
    _: 19,
    "cs-CZ": 19,
    _: 20,
    "ro-RO": 20,
    _: 21,
    "tr-TR": 21,
    "pt-BR": 22,
    _: 23,
    "bg-BG": 23,
    _: 24,
    "el-GR": 24,
    _: 25,
    "ar-SA": 25,
    _: 26,
    "uk-UA": 26,
    "es-419": 27,
    _: 28,
    "vi-VN": 28,
    _: 30,
    "id-ID": 30,
    _: 30,
    "ms-MY": 30,
  };
function _() {
  return _[_.LANGUAGE] || null;
}
function _(_) {
  return (
    typeof _ == `number` && (_ = _(_)),
    _ === `none` ? `None` : _(`#language_selection_${_}`)
  );
}
var _ = new _();
window.LocalizationManager = _;
