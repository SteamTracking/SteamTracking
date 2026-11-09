var _ = {
    EUNIVERSE: 0,
    LANGUAGE: `english`,
    SUPPORTED_LANGUAGES: [],
    COUNTRY: ``,
    AVATAR_BASE_URL: ``,
    MEDIA_CDN_COMMUNITY_URL: ``,
    MEDIA_CDN_URL: ``,
    CLAN_CDN_ASSET_URL: ``,
    VIDEO_CDN_URL: ``,
    COMMUNITY_CDN_URL: ``,
    COMMUNITY_CDN_ASSET_URL: ``,
    BASE_URL_SHARED_CDN: ``,
    STORE_CDN_URL: ``,
    PUBLIC_SHARED_URL: ``,
    COMMUNITY_BASE_URL: ``,
    CHAT_BASE_URL: ``,
    STORE_BASE_URL: ``,
    STORE_CHECKOUT_BASE_URL: ``,
    LOGIN_BASE_URL: ``,
    SUPPORT_BASE_URL: ``,
    STORE_ITEM_BASE_URL: ``,
    IMG_URL: ``,
    STEAMTV_BASE_URL: ``,
    HELP_BASE_URL: ``,
    PARTNER_BASE_URL: ``,
    STATS_BASE_URL: ``,
    INTERNAL_STATS_BASE_URL: ``,
    IN_CLIENT: !1,
    IN_MOBILE: !1,
    IN_MOBILE_WEBVIEW: !1,
    PLATFORM: ``,
    SNR: ``,
    EREALM: 0,
    WEBAPI_BASE_URL: ``,
    TOKEN_URL: ``,
    BUILD_TIMESTAMP: 0,
    PAGE_TIMESTAMP: 0,
    FROM_WEB: !1,
    WEBSITE_ID: `Unknown`,
    IN_STEAMUI: !1,
    NOW: 0,
  },
  _ = {
    logged_in: !1,
    steamid: ``,
    accountid: 0,
    account_name: ``,
    token: void 0,
    token_use_id: void 0,
    webapi_token: ``,
    authwgtoken: ``,
    is_support: !1,
    is_limited: !1,
    is_partner_member: !1,
    is_valve_email: !1,
    short_url: ``,
    country_code: ``,
    excluded_content_descriptors: [3, 4, 1],
  },
  _ = {
    CLANSTEAMID: ``,
    CLANACCOUNTID: 0,
    APPID: 0,
    VANITY_ID: ``,
    IS_CREATOR_HOME: !1,
    IS_CURATOR: !1,
    IS_OGG: !1,
    CAN_UPLOAD_IMAGES: !1,
    IS_VALVE_GROUP: !1,
    IS_ALLOWED_SC: !1,
  };
function _(_, _) {
  return (
    (_ = Math.ceil(_)),
    (_ = Math.floor(_)),
    Math.floor(Math.random() * (_ - _ + 1)) + _
  );
}
function _(_, _, _) {
  return _ == null || isNaN(_) ? _ : Math.max(_, Math.min(_, _));
}
function _(_, _, _, _, _) {
  return _ + ((_ - _) * (_ - _)) / (_ - _);
}
function _(_, _, _, _, _) {
  return _(_ + ((_ - _) * (_ - _)) / (_ - _), Math.min(_, _), Math.max(_, _));
}
function _(_) {
  if (!_) return !1;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _.charCodeAt(_);
    if (_ < 48 || _ > 57) return !1;
  }
  return !0;
}
function _(_, _, _, _) {
  let _ = _ / _,
    _ = _ / _,
    _ = Math.min(_, _);
  return [_ * _, _ * _];
}
function _(_) {
  if (!_() || !window.document.cookie) return null;
  let _ = document.cookie.match(`(^|; )` + _ + `=([^;]*)`);
  return _ && _[2] ? decodeURIComponent(_[2]) : null;
}
function _(_, _, _, _) {
  if (!_()) return;
  _ ||= `/`;
  let _ = ``;
  if (_ !== void 0 && _) {
    let _ = new Date();
    (_.setTime(_.getTime() + 864e5 * _), (_ = `; expires=` + _.toUTCString()));
  }
  document.cookie =
    encodeURIComponent(_) + `=` + encodeURIComponent(_) + _ + `;path=` + _;
}
function _() {
  return !!window.document;
}
var _ = `webui_config`;
function _(_, _ = _) {
  return _(_, _, !0);
}
function _(_, _ = _) {
  return _(_, _, !1);
}
function _(_, _ = _, _) {
  let _;
  if (((_ = typeof _ == `string` ? document.getElementById(_) : _), _))
    try {
      return _.hasAttribute(`data-` + _)
        ? JSON.parse(_.getAttribute(`data-` + _))
        : null;
    } catch (_) {
      console.error(
        `Failed to parse config for ` +
          _.steamid +
          ` (` +
          window.location.href +
          `)`,
        _,
      );
    }
  else _ && console.error(`Missing config element #`, _);
}
var _;
function _() {
  if (!_()) return ((_ ||= _()), _);
  let _ = _(`sessionid`);
  return ((_ ||= _()), _);
}
function _() {
  let _ = ``;
  for (let _ = 0; _ < 24; _++) _ += _(0, 35).toString(36);
  return _;
}
function _() {
  let _ = _();
  return (_(`sessionid`, _, 0), _);
}
var _ = new Set();
function _() {
  return new Promise((_) => {
    _.add(_);
  });
}
var _ = `presentation_mode`;
function _() {
  let _ = null;
  return (_() && (_ = _(_)), !!(_ && Number.parseInt(_) === 1));
}
function _(_) {
  return _ == 3 || _ == 6;
}
var _ = `18446744073709551615`,
  _ = [
    [`None`, `none`, -1],
    [`Afrikaans`, `afrikaans`, 0],
    [`Albanian`, `albanian`, 1],
    [`Amharic`, `amharic`, 2],
    [`Armenian`, `armenian`, 3],
    [`Assamese`, `assamese`, 4],
    [`Azerbaijani`, `azerbaijani`, 5],
    [`Bangla`, `bangla`, 6],
    [`Basque`, `basque`, 7],
    [`Belarusian`, `belarusian`, 8],
    [`Bosnian`, `bosnian`, 9],
    [`Catalan`, `catalan`, 10],
    [`Cherokee`, `cherokee`, 11],
    [`Croatian`, `croatian`, 12],
    [`Dari`, `dari`, 13],
    [`Estonian`, `estonian`, 14],
    [`Filipino`, `filipino`, 15],
    [`Galician`, `galician`, 16],
    [`Georgian`, `georgian`, 17],
    [`Gujarati`, `gujarati`, 18],
    [`Punjabi (Gurmukhi)`, `gurmukhi`, 19],
    [`Hausa`, `hausa`, 20],
    [`Hebrew`, `hebrew`, 21],
    [`Hindi`, `hindi`, 22],
    [`Icelandic`, `icelandic`, 23],
    [`Igbo`, `igbo`, 24],
    [`Indonesian`, `indonesian`, 25],
    [`Irish`, `irish`, 26],
    [`Kannada`, `kannada`, 27],
    [`Kazakh`, `kazakh`, 28],
    [`Khmer`, `khmer`, 29],
    [`K'iche'`, `kiche`, 30],
    [`Kinyarwanda`, `kinyarwanda`, 31],
    [`Konkani`, `konkani`, 32],
    [`Kyrgyz`, `kyrgyz`, 33],
    [`Latvian`, `latvian`, 34],
    [`Lithuanian`, `lithuanian`, 35],
    [`Luxembourgish`, `luxembourgish`, 36],
    [`Macedonian`, `macedonian`, 37],
    [`Malay`, `malay`, 38],
    [`Malayalam`, `malayalam`, 39],
    [`Maltese`, `maltese`, 40],
    [`Maori`, `maori`, 41],
    [`Marathi`, `marathi`, 42],
    [`Mongolian`, `mongolian`, 43],
    [`Nepali`, `nepali`, 44],
    [`Odia`, `odia`, 45],
    [`Persian`, `persian`, 46],
    [`Quechua`, `quechua`, 47],
    [`Scots`, `scots`, 48],
    [`Serbian`, `serbian`, 49],
    [`Punjabi (Shahmukhi)`, `shahmukhi`, 50],
    [`Sindhi`, `sindhi`, 51],
    [`Sinhala`, `sinhala`, 52],
    [`Slovak`, `slovak`, 53],
    [`Slovenian`, `slovenian`, 54],
    [`Sorani`, `sorani`, 55],
    [`Sotho`, `sotho`, 56],
    [`Swahili`, `swahili`, 57],
    [`Tajik`, `tajik`, 58],
    [`Tamil`, `tamil`, 59],
    [`Tatar`, `tatar`, 60],
    [`Telugu`, `telugu`, 61],
    [`Tigrinya`, `tigrinya`, 62],
    [`Tswana`, `tswana`, 63],
    [`Turkmen`, `turkmen`, 64],
    [`Urdu`, `urdu`, 65],
    [`Uyghur`, `uyghur`, 66],
    [`Uzbek`, `uzbek`, 67],
    [`Valencian`, `valencian`, 68],
    [`Welsh`, `welsh`, 69],
    [`Wolof`, `wolof`, 70],
    [`Xhosa`, `xhosa`, 71],
    [`Yoruba`, `yoruba`, 72],
    [`Zulu`, `zulu`, 73],
  ].map((_) => ({
    name: _[0],
    shortName: _[1],
    eAdditionalLanguage: _[2],
  }));
function _(_) {
  return _.find((_) => _.eAdditionalLanguage == _)?.shortName ?? `unknown`;
}
function _(_, _ = `en`) {
  switch (_) {
    case 0:
      return `en`;
    case 1:
      return `de`;
    case 2:
      return `fr`;
    case 3:
      return `it`;
    case 4:
      return `ko`;
    case 5:
      return `es`;
    case 6:
      return `zh-cn`;
    case 7:
      return `zh-tw`;
    case 8:
      return `ru`;
    case 9:
      return `th`;
    case 10:
      return `ja`;
    case 11:
      return `pt`;
    case 12:
      return `pl`;
    case 13:
      return `da`;
    case 14:
      return `nl`;
    case 15:
      return `fi`;
    case 16:
      return `no`;
    case 17:
      return `sv`;
    case 18:
      return `hu`;
    case 19:
      return `cs`;
    case 20:
      return `ro`;
    case 21:
      return `tr`;
    case 25:
      return `ar`;
    case 22:
      return `pt-br`;
    case 23:
      return `bg`;
    case 24:
      return `el`;
    case 26:
      return `uk`;
    case 27:
      return `es-419`;
    case 28:
      return `vi`;
    case 29:
      return `sc-sc`;
    case 30:
      return `id`;
    case 31:
      return `ms`;
    default:
      return _;
  }
}
var _ = (_) => (_ === `koreana` ? `korean` : _);
function _(_, _ = ``) {
  switch (_) {
    case 0:
      return `english`;
    case 1:
      return `german`;
    case 2:
      return `french`;
    case 3:
      return `italian`;
    case 4:
      return `koreana`;
    case 5:
      return `spanish`;
    case 6:
      return `schinese`;
    case 7:
      return `tchinese`;
    case 8:
      return `russian`;
    case 9:
      return `thai`;
    case 10:
      return `japanese`;
    case 11:
      return `portuguese`;
    case 12:
      return `polish`;
    case 13:
      return `danish`;
    case 14:
      return `dutch`;
    case 15:
      return `finnish`;
    case 16:
      return `norwegian`;
    case 17:
      return `swedish`;
    case 18:
      return `hungarian`;
    case 19:
      return `czech`;
    case 20:
      return `romanian`;
    case 21:
      return `turkish`;
    case 25:
      return `arabic`;
    case 22:
      return `brazilian`;
    case 23:
      return `bulgarian`;
    case 24:
      return `greek`;
    case 26:
      return `ukrainian`;
    case 27:
      return `latam`;
    case 28:
      return `vietnamese`;
    case 29:
      return `sc_schinese`;
    case 30:
      return `indonesian`;
    case 31:
      return `malay`;
    default:
      return _;
  }
}
function _(_, _ = 0) {
  switch (_) {
    case `english`:
      return 0;
    case `german`:
      return 1;
    case `french`:
      return 2;
    case `italian`:
      return 3;
    case `korean`:
    case `koreana`:
      return 4;
    case `spanish`:
      return 5;
    case `schinese`:
      return 6;
    case `tchinese`:
      return 7;
    case `russian`:
      return 8;
    case `thai`:
      return 9;
    case `japanese`:
      return 10;
    case `portuguese`:
      return 11;
    case `polish`:
      return 12;
    case `danish`:
      return 13;
    case `dutch`:
      return 14;
    case `finnish`:
      return 15;
    case `norwegian`:
      return 16;
    case `swedish`:
      return 17;
    case `hungarian`:
      return 18;
    case `czech`:
      return 19;
    case `romanian`:
      return 20;
    case `turkish`:
      return 21;
    case `arabic`:
      return 25;
    case `brazilian`:
      return 22;
    case `bulgarian`:
      return 23;
    case `greek`:
      return 24;
    case `ukrainian`:
      return 26;
    case `latam`:
      return 27;
    case `vietnamese`:
      return 28;
    case `sc_schinese`:
      return 29;
    case `indonesian`:
      return 30;
    case `malay`:
      return 31;
    default:
      return _;
  }
}
function _(_) {
  switch (_) {
    default:
      break;
    case 4:
    case 1:
    case 8:
      return !0;
  }
  return !1;
}
function _(_) {
  switch (_) {
    case 0:
      return `invalid`;
    case 1:
      return `gamepad`;
    case 2:
      return `desktop`;
    case 3:
      return `tray`;
    case 4:
      return `all`;
    case 5:
      return `push`;
  }
}
function _(_) {
  switch (_) {
    case 0:
      return `vgui`;
    case 1:
      return `tenfoot`;
    case 2:
      return `mobile`;
    case 3:
      return `web`;
    case 4:
      return `gamepad`;
    case 5:
      return `mobilechat`;
    case 6:
      return `embedded`;
    case 7:
      return `desktop`;
    default:
      return `unknown`;
  }
}
var _ = 5001,
  _ = (function (_) {
    return (
      (_[(_.k_EWindowBringToFrontInvalid = 0)] =
        `k_EWindowBringToFrontInvalid`),
      (_[(_.k_EWindowBringToFrontAndForceOS = 1)] =
        `k_EWindowBringToFrontAndForceOS`),
      (_[(_.k_EWindowBringToFrontWithoutForcingOS = 2)] =
        `k_EWindowBringToFrontWithoutForcingOS`),
      (_[(_.k_EWindowBringToFrontUsingExistingOSState = 3)] =
        `k_EWindowBringToFrontUsingExistingOSState`),
      _
    );
  })({});
function _(_) {
  return _;
}
var _ = window.Config ?? _,
  _ = window.UserConfig ?? _,
  _ = window.Config ? () => Promise.resolve() : _;
(window.Config && Object.assign(_, window.Config),
  window.UserConfig && Object.assign(_, window.UserConfig),
  window.WebConfig && Object.assign(_, window.WebConfig));
var _ = {
  LAUNCHER_TYPE: 0,
  ON_FRAME: !1,
  IS_STEAMOS: !1,
  IN_GAMESCOPE: !1,
  ON_STEAMOS_CLIENT_BRANCH: !1,
  FORCED_DISPLAY_MODE: void 0,
  ARCH: ``,
  IN_CHROMEOS: !1,
  USE_LONGEST_LOC_STRING: !1,
  SILENT_STARTUP: !1,
  DEV_MODE: !1,
  LOCAL_HOSTNAME: ``,
  PACKAGE_CL: ``,
  CLIENT_SESSION: 0,
};
function _(_) {
  return (
    console.assert(
      !_ || _.IN_STEAMUI,
      `SteamUIConfig expected but does not exist in the current context!`,
    ),
    _.IN_STEAMUI ? _ : void 0
  );
}
var _ = _();
function _() {
  return window.WebConfig
    ? window.WebConfig
    : {
        get WEBSITE_ID() {
          return _.WEBSITE_ID;
        },
      };
}
function _(_) {
  return (
    console.assert(
      !_ || !_.IN_STEAMUI,
      `WebConfig expected but does not exist in the current context!`,
    ),
    _.IN_STEAMUI ? void 0 : _
  );
}
