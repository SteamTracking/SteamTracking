/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  K as n,
  O as r,
  R as i,
  U as a,
  _t as o,
  ft as s,
  gt as c,
  ht as l,
  k as u,
  kt as d,
  lt as f,
  nt as p,
  on as m,
} from "./mobx.esm.js";
import {
  At as ee,
  Bt as h,
  Pt as te,
  Rt as g,
  l as ne,
  u as re,
} from "./src.js";
import {
  B as ie,
  Dn as ae,
  Fn as _,
  Ha as oe,
  In as se,
  It as ce,
  Mn as le,
  Nn as ue,
  On as v,
  Ot as de,
  Qa as fe,
  Ra as y,
  Rn as b,
  Tn as pe,
  _n as me,
  bn as x,
  br as he,
  ea as S,
  fa as ge,
  fn as _e,
  jn as ve,
  oa as C,
  pn as ye,
  ua as be,
  wn as xe,
  xr as Se,
} from "./dialogs.js";
import { C as w } from "./react-router.js";
import { r as Ce } from "./servicetransportprovider.js";
import { t as T } from "./useQuery.js";
import { n as we, o as Te, t as Ee } from "./cookies.client.js";
import { n as De } from "./useresizeobserver.js";
import { t as Oe } from "./throbber.js";
import { n as ke, u as Ae } from "./localization2.js";
import {
  B as je,
  C as Me,
  D as Ne,
  E as Pe,
  F as Fe,
  I as Ie,
  L as Le,
  M as Re,
  N as ze,
  O as Be,
  P as Ve,
  R as He,
  S as Ue,
  W as We,
  _ as Ge,
  a as Ke,
  c as qe,
  f as Je,
  g as Ye,
  h as Xe,
  i as Ze,
  j as Qe,
  m as $e,
  n as et,
  o as tt,
  p as nt,
  r as rt,
  s as it,
  t as at,
  u as ot,
  v as st,
  w as ct,
  x as lt,
  y as ut,
} from "./bbcodes.module.js";
import { w as dt } from "./partnereventutils.js";
import { t as ft } from "./base64-js.js";
import { n as pt } from "./numberformats.js";
import { n as E, r as mt } from "./emoticon_php.js";
import { n as ht } from "./storeitemhooks.js";
var D = m(d(), 1),
  O = class {
    reactNodes = [];
    AppendText(e, t = !1) {
      e.length &&
        (t
          ? this.reactNodes.push(
              D.createElement(
                `span`,
                {
                  "data-copytext": ``,
                  "data-copystyle": `merge-adjacent`,
                  "bbcode-text": e,
                },
                e,
              ),
            )
          : this.reactNodes.push(e));
    }
    AppendNode(e) {
      this.reactNodes.push(e);
    }
    GetElements() {
      return this.reactNodes;
    }
  },
  gt = class {
    m_decoratedAccumulator;
    constructor(t) {
      (e(t, `decorated accumulator cannot be null`),
        (this.m_decoratedAccumulator = t));
    }
    AppendText(e, t = !1) {
      this.m_decoratedAccumulator.AppendText(e, t);
    }
    AppendNode(e) {
      this.m_decoratedAccumulator.AppendNode(e);
    }
    GetElements() {
      return this.m_decoratedAccumulator.GetElements();
    }
  },
  _t = class extends gt {
    constructor(e) {
      super(e);
    }
    AppendText(e) {
      let t = e,
        n = [];
      for (
        let e = t.indexOf(`
`);
        e !== -1;
        e = t.indexOf(`
`)
      )
        (n.push(t.substr(0, e)),
          n.push(D.createElement(`br`)),
          (t = t.substr(e + 1)));
      (t.length && n.push(t),
        n.forEach((e) => {
          super.AppendNode(e);
        }));
    }
  },
  vt = class extends We {
    m_renderingLanguage;
    constructor(e, t, n) {
      (super(e, t ?? (() => new O())),
        (this.m_renderingLanguage = typeof n == `string` ? s(n) : n));
    }
    UpdateOverrideLanguage(e) {
      this.m_renderingLanguage = e;
    }
    ParseBBCode(e, t, n = !0) {
      let r = 0,
        i = this.Parse(
          e,
          (e, n, ...i) =>
            D.createElement(
              e,
              {
                ...n,
                context: t,
                language: this.m_renderingLanguage,
                key: `bbnode_${r++}`,
              },
              ...i,
            ),
          n,
        );
      return i.length > 1
        ? D.createElement(D.Fragment, null, ...i)
        : i.length == 1
          ? i[0]
          : null;
    }
  },
  k = o();
function yt(e) {
  return !(
    (!ae(e.sPoster) && !v(e.sPoster)) ||
    (e.rgVideoSources && e.rgVideoSources.some((e) => !v(e.sURL))) ||
    (e.rgVideoTracks && e.rgVideoTracks.some((e) => !v(e.sURL)))
  );
}
var A = class e {
    m_bUserHasVolumePreference = !1;
    m_flVolumePreference = 0;
    BUserHasVolumePreference() {
      return this.m_bUserHasVolumePreference;
    }
    SetVolumePreference(e) {
      ((this.m_flVolumePreference = e), (this.m_bUserHasVolumePreference = !0));
    }
    GetVolumePreference() {
      return this.m_flVolumePreference;
    }
    BVolumePreferenceMuted() {
      return this.m_flVolumePreference < 0.001;
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
  },
  bt = (0, D.forwardRef)(function (e, t) {
    let {
        video: n,
        bAutoPlay: r,
        bControls: i,
        bLoop: o,
        bMuted: s,
        className: c,
        mediaScale: l,
        flAspectRatio: u,
        onClick: d,
        altText: f,
      } = e,
      p = (0, D.useMemo)(
        () =>
          !!n.rgVideoTracks?.some(
            (e) => e.sKind == `subtitles` || e.sKind == `captions`,
          ),
        [n.rgVideoTracks],
      ),
      [m, ee] = D.useState(!1),
      h = xt();
    if (!n.rgVideoSources || !n.rgVideoSources.length) return null;
    let te = yt(n),
      g;
    (!te || (p && a.EUNIVERSE == 1)) && (g = `anonymous`);
    let ne = s || (r && A.Get().BVolumePreferenceMuted()),
      re = n.sPoster ? St(n.sPoster, h) : ``;
    return (0, k.jsxs)(`video`, {
      width: `100%`,
      height: `auto`,
      autoPlay: r,
      muted: ne,
      playsInline: !0,
      controls: i,
      poster: re,
      loop: o,
      crossOrigin: g,
      onVolumeChange: (e) => {
        let t = e.target,
          n = t.muted ? 0 : t.volume;
        m && A.Get().SetVolumePreference(n);
      },
      onPlay: (e) => {
        let t = e.target,
          n = t.currentTime == 0,
          i = A.Get().BUserHasVolumePreference();
        if ((ee(!0), n)) {
          if (!i && !r) {
            let e = t.muted ? 0 : t.volume;
            A.Get().SetVolumePreference(e);
          } else
            i &&
              ((t.volume = A.Get().GetVolumePreference()),
              (t.muted = A.Get().BVolumePreferenceMuted()));
        }
      },
      ref: t,
      className: c,
      onClick: d,
      "aria-label": f,
      style: {
        width: l && l >= 1 && l < 100 ? `${l}%` : void 0,
        aspectRatio: u || void 0,
      },
      children: [
        (0, k.jsx)(Ct, {
          rgVideoSources: n.rgVideoSources,
          strCacheBreakOrigin: h,
        }),
        (0, k.jsx)(wt, {
          rgVideoTracks: n.rgVideoTracks,
          strCacheBreakOrigin: h,
        }),
      ],
    });
  });
function xt() {
  let e = window.location.href,
    t = [
      a.STORE_BASE_URL,
      a.COMMUNITY_BASE_URL,
      a.PARTNER_BASE_URL,
      a.HELP_BASE_URL,
      a.STATS_BASE_URL,
      a.STORE_CHECKOUT_BASE_URL,
    ].find((t) => t && e.startsWith(t));
  if (t) return t;
  try {
    return new URL(e).origin + `/`;
  } catch {
    return `unknown`;
  }
}
function St(e, t) {
  if (e) {
    if (ae(e)) return e;
    try {
      let n = new URL(e);
      return (
        (n.search = (n.search ? n.search + `&` : `?`) + `origin=` + t),
        n.toString()
      );
    } catch {
      return e;
    }
  }
}
function Ct(e) {
  let { rgVideoSources: t, strCacheBreakOrigin: n } = e;
  return t
    .filter((e) => !!e.sURL)
    .map((e) =>
      (0, k.jsx)(`source`, { src: St(e.sURL, n), type: e.sFormat }, e.sURL),
    );
}
function wt(e) {
  let { rgVideoTracks: t, strCacheBreakOrigin: n } = e;
  return t
    ? t.map((e, r) =>
        (0, k.jsx)(
          Tt,
          { track: e, rgVideoTracks: t, strCacheBreakOrigin: n },
          r,
        ),
      )
    : null;
}
function Tt(e) {
  let { track: t, rgVideoTracks: n, strCacheBreakOrigin: r } = e,
    i = t.eLanguage;
  if (a.EREALM == c.k_ESteamRealmChina) {
    if (S.IsELanguageValidInRealm(i, c.k_ESteamRealmChina))
      i = S.GetELanguageFallback(i);
    else if (i === 6) {
      if (n.find((e) => S.GetELanguageFallback(e.eLanguage) === i)) return null;
    } else return null;
  } else if (!S.IsELanguageValidInRealm(i, c.k_ESteamRealmGlobal)) return null;
  return (0, k.jsx)(`track`, {
    src: St(t.sURL, r),
    kind: t.sKind,
    default: t.bDefault,
    srcLang: f(i),
    label: be(i),
  });
}
var Et = m(ft());
function j(e) {
  let t = R(e, `poster`);
  t &&= _(t);
  let n = [];
  {
    let t = R(e, `mp4`);
    t && n.push({ sURL: _(t), sFormat: `video/mp4` });
    let r = R(e, `webm`);
    r && n.push({ sURL: _(r), sFormat: `video/webm` });
  }
  let r = s(p.LANGUAGE),
    i = r != 0,
    a = [];
  for (let t = 0; t < 32; t++) {
    let n = R(e, `sub_` + f(t));
    n &&
      a.push({
        sURL: _(n),
        eLanguage: t,
        sKind: `subtitles`,
        bDefault: i && t == r,
      });
    let o = R(e, `cap_` + f(t));
    o &&
      a.push({
        sURL: _(o),
        eLanguage: t,
        sKind: `captions`,
        bDefault: i && t == r,
      });
  }
  return { sPoster: t, rgVideoSources: n, rgVideoTracks: a };
}
function Dt(e) {
  let t = j(e.args);
  return (0, k.jsx)(bt, { video: t, bAutoPlay: !0, bControls: !1, bLoop: !0 });
}
function Ot(e) {
  let t = j(e.args),
    n = e.children ? e.children.toString() : void 0;
  n &&
    n.startsWith(`http`) &&
    t.rgVideoSources.push({ sURL: _(n), sFormat: `video/webm` });
  let r = R(e.args, `autoplay`),
    i = r !== `0` && r !== `off` && r !== `false`,
    a = R(e.args, `controls`),
    o = a !== `0` && a !== `off` && a !== `false`,
    s = R(e.args, `loop`);
  return (0, k.jsx)(bt, {
    video: t,
    bAutoPlay: i,
    bControls: o,
    bLoop: s ? a !== `0` && a !== `off` && a !== `false` : i,
  });
}
var kt = `m6bojdeQzBM-`,
  At = `KNKcwZZR0so-`,
  jt = `OACV7AX319w-`,
  Mt = `D7GTf0-swcc-`,
  Nt = `L7AE1SvWgtA-`,
  Pt = `_7iMZXddr1CI-`,
  Ft = `sNG-BnwzjYs-`,
  It = `maYcJlnc0JU-`,
  Lt = `akuZJwBr6xc-`,
  Rt = `ZfFIRgkpA2M-`,
  zt = { Box: kt, Preview: At, Type: void 0 };
function Bt(e) {
  return (0, k.jsx)(`img`, {
    className: At,
    src: e.strURL || void 0,
    alt: e.strAlt ?? ``,
  });
}
function Vt(e) {
  return (0, k.jsx)(`div`, { className: Nt, children: e.children });
}
function Ht(e) {
  return (0, k.jsx)(`div`, { className: Pt, children: e.children });
}
function Ut(e) {
  return (0, k.jsx)(`div`, { className: jt, children: e.children });
}
function Wt(e) {
  return (0, k.jsx)(`span`, { className: Lt, children: e.children });
}
function Gt(e) {
  return (0, k.jsx)(`div`, { className: Mt, children: e.children });
}
function Kt(e) {
  return (0, k.jsx)(`span`, { className: Rt, children: e.children });
}
function qt(e) {
  return (0, k.jsx)(`div`, { className: Ft, children: e.children });
}
function Jt(e) {
  return (0, k.jsx)(`div`, { className: It, children: e.children });
}
var M = {
  countrycodes: {
    countries: {
      AF: `Afghanistan`,
      AX: `Aland Islands`,
      AL: `Albania`,
      DZ: `Algeria`,
      AS: `American Samoa`,
      AD: `Andorra`,
      AO: `Angola`,
      AI: `Anguilla`,
      AQ: `Antarctica`,
      AG: `Antigua and Barbuda`,
      AR: `Argentina`,
      AM: `Armenia`,
      AW: `Aruba`,
      AU: `Australia`,
      AT: `Austria`,
      AZ: `Azerbaijan`,
      BS: `Bahamas`,
      BH: `Bahrain`,
      BD: `Bangladesh`,
      BB: `Barbados`,
      BY: `Belarus`,
      BE: `Belgium`,
      BZ: `Belize`,
      BJ: `Benin`,
      BM: `Bermuda`,
      BT: `Bhutan`,
      BO: `Bolivia`,
      BA: `Bosnia and Herzegovina`,
      BW: `Botswana`,
      BV: `Bouvet Island`,
      BR: `Brazil`,
      IO: `British Indian Ocean Territory`,
      BN: `Brunei Darussalam`,
      BG: `Bulgaria`,
      BF: `Burkina Faso`,
      BI: `Burundi`,
      KH: `Cambodia`,
      CM: `Cameroon`,
      CA: `Canada`,
      CV: `Cabo Verde`,
      KY: `Cayman Islands`,
      CF: `Central African Republic`,
      TD: `Chad`,
      CL: `Chile`,
      CN: `China`,
      XC: `China`,
      CX: `Christmas Island`,
      CC: `Cocos (Keeling) Islands`,
      CO: `Colombia`,
      KM: `Comoros`,
      CG: `Congo`,
      CD: `Congo, the Democratic Republic of the`,
      CK: `Cook Islands`,
      CR: `Costa Rica`,
      CI: `Cote d'Ivoire`,
      HR: `Croatia`,
      CY: `Cyprus`,
      CZ: `Czech Republic`,
      DK: `Denmark`,
      DJ: `Djibouti`,
      DM: `Dominica`,
      DO: `Dominican Republic`,
      EC: `Ecuador`,
      EG: `Egypt`,
      SV: `El Salvador`,
      GQ: `Equatorial Guinea`,
      ER: `Eritrea`,
      EE: `Estonia`,
      ET: `Ethiopia`,
      FK: `Falkland Islands (Malvinas)`,
      FO: `Faroe Islands`,
      FJ: `Fiji`,
      FI: `Finland`,
      FR: `France`,
      GF: `French Guiana`,
      PF: `French Polynesia`,
      TF: `French Southern Territories`,
      GA: `Gabon`,
      GM: `Gambia`,
      GE: `Georgia`,
      DE: `Germany`,
      GH: `Ghana`,
      GI: `Gibraltar`,
      GR: `Greece`,
      GL: `Greenland`,
      GD: `Grenada`,
      GP: `Guadeloupe`,
      GU: `Guam`,
      GT: `Guatemala`,
      GN: `Guinea`,
      GW: `Guinea-Bissau`,
      GG: `Guernsey`,
      GY: `Guyana`,
      HT: `Haiti`,
      HM: `Heard and Mc Donald Islands`,
      VA: `Holy See(Vatican City State)`,
      HN: `Honduras`,
      HK: `Hong Kong`,
      HU: `Hungary`,
      IS: `Iceland`,
      IN: `India`,
      ID: `Indonesia`,
      IQ: `Iraq`,
      IE: `Ireland`,
      IM: `Isle of Man`,
      IL: `Israel`,
      IT: `Italy`,
      JM: `Jamaica`,
      JP: `Japan`,
      JE: `Jersey`,
      JO: `Jordan`,
      KZ: `Kazakhstan`,
      KE: `Kenya`,
      KI: `Kiribati`,
      KR: `Korea, Republic of`,
      KW: `Kuwait`,
      KG: `Kyrgyzstan`,
      LA: `Lao People's Democratic Republic`,
      LV: `Latvia`,
      LB: `Lebanon`,
      LS: `Lesotho`,
      LR: `Liberia`,
      LI: `Liechtenstein`,
      LT: `Lithuania`,
      LU: `Luxembourg`,
      LY: `Libya`,
      MO: `Macau`,
      MK: `North Macedonia, Republic of`,
      MG: `Madagascar`,
      MW: `Malawi`,
      MY: `Malaysia`,
      MV: `Maldives`,
      ML: `Mali`,
      MT: `Malta`,
      MH: `Marshall Islands`,
      MQ: `Martinique`,
      MR: `Mauritania`,
      MU: `Mauritius`,
      YT: `Mayotte`,
      MX: `Mexico`,
      FM: `Micronesia, Federated States of`,
      MD: `Moldova, Republic of`,
      MC: `Monaco`,
      MN: `Mongolia`,
      ME: `Montenegro`,
      MS: `Montserrat`,
      MA: `Morocco`,
      MZ: `Mozambique`,
      MM: `Myanmar`,
      NA: `Namibia`,
      NR: `Nauru`,
      NP: `Nepal`,
      NL: `Netherlands`,
      AN: `Netherlands Antilles`,
      NC: `New Caledonia`,
      NZ: `New Zealand`,
      NI: `Nicaragua`,
      NE: `Niger`,
      NG: `Nigeria`,
      NU: `Niue`,
      NF: `Norfolk Island`,
      MP: `Northern Mariana Islands`,
      NO: `Norway`,
      OM: `Oman`,
      PK: `Pakistan`,
      PW: `Palau`,
      PS: `Palestinian Territory, Occupied`,
      PA: `Panama`,
      PG: `Papua New Guinea`,
      PY: `Paraguay`,
      PE: `Peru`,
      PH: `Philippines`,
      PN: `Pitcairn`,
      PL: `Poland`,
      PT: `Portugal`,
      PR: `Puerto Rico`,
      QA: `Qatar`,
      RE: `Reunion`,
      RO: `Romania`,
      RU: `Russian Federation`,
      RW: `Rwanda`,
      SH: `Saint Helena`,
      KN: `Saint Kitts and Nevis`,
      LC: `Saint Lucia`,
      PM: `Saint Pierre and Miquelon`,
      VC: `Saint Vincent and the Grenadines`,
      WS: `Samoa`,
      SM: `San Marino`,
      ST: `Sao Tome and Principe`,
      SA: `Saudi Arabia`,
      SN: `Senegal`,
      RS: `Serbia`,
      SC: `Seychelles`,
      SL: `Sierra Leone`,
      SG: `Singapore`,
      SK: `Slovakia`,
      SI: `Slovenia`,
      SB: `Solomon Islands`,
      SO: `Somalia`,
      ZA: `South Africa`,
      GS: `South Georgia and the South Sandwich Islands`,
      ES: `Spain`,
      LK: `Sri Lanka`,
      SD: `Sudan`,
      SR: `Suriname`,
      SJ: `Svalbard and Jan Mayen`,
      SY: `Syria`,
      SZ: `Eswatini`,
      SE: `Sweden`,
      CH: `Switzerland`,
      TW: `Taiwan`,
      TJ: `Tajikistan`,
      TZ: `Tanzania, United Republic of`,
      TH: `Thailand`,
      TL: `Timor-Leste`,
      TG: `Togo`,
      TK: `Tokelau`,
      TO: `Tonga`,
      TT: `Trinidad and Tobago`,
      TN: `Tunisia`,
      TR: `Turkey`,
      TM: `Turkmenistan`,
      TC: `Turks and Caicos Islands`,
      TV: `Tuvalu`,
      UG: `Uganda`,
      UA: `Ukraine`,
      AE: `United Arab Emirates`,
      GB: `United Kingdom`,
      US: `United States`,
      UM: `United States Minor Outlying Islands`,
      UY: `Uruguay`,
      UZ: `Uzbekistan`,
      VU: `Vanuatu`,
      VE: `Venezuela`,
      VN: `Viet Nam`,
      VG: `Virgin Islands, British`,
      VI: `Virgin Islands, U.S.`,
      WF: `Wallis and Futuna`,
      EH: `Western Sahara`,
      YE: `Yemen`,
      ZM: `Zambia`,
      ZW: `Zimbabwe`,
    },
    eucountries: {
      AT: `Austria`,
      BE: `Belgium`,
      BG: `Bulgaria`,
      HR: `Croatia`,
      CY: `Cyprus`,
      CZ: `Czech Republic`,
      DK: `Denmark`,
      EE: `Estonia`,
      FI: `Finland`,
      FR: `France`,
      DE: `Germany`,
      GR: `Greece`,
      HU: `Hungary`,
      IE: `Ireland`,
      IT: `Italy`,
      LV: `Latvia`,
      LT: `Lithuania`,
      LU: `Luxembourg`,
      MT: `Malta`,
      NL: `Netherlands`,
      PL: `Poland`,
      PT: `Portugal`,
      RO: `Romania`,
      SK: `Slovakia`,
      SI: `Slovenia`,
      ES: `Spain`,
      SE: `Sweden`,
      GB: `United Kingdom`,
    },
    eeacountries: { NO: `Norway`, IS: `Iceland`, LI: `Liechtenstein` },
    usstates: {
      AL: `Alabama`,
      AK: `Alaska`,
      AS: `American Samoa`,
      AZ: `Arizona`,
      AR: `Arkansas`,
      CA: `California`,
      CO: `Colorado`,
      CT: `Connecticut`,
      DE: `Delaware`,
      DC: `District of Columbia`,
      FM: `Federated States of Micronesia`,
      FL: `Florida`,
      GA: `Georgia`,
      GU: `Guam`,
      HI: `Hawaii`,
      ID: `Idaho`,
      IL: `Illinois`,
      IN: `Indiana`,
      IA: `Iowa`,
      KS: `Kansas`,
      KY: `Kentucky`,
      LA: `Louisiana`,
      ME: `Maine`,
      MH: `Marshall Islands`,
      MD: `Maryland`,
      MA: `Massachusetts`,
      MI: `Michigan`,
      MN: `Minnesota`,
      MS: `Mississippi`,
      MO: `Missouri`,
      MT: `Montana`,
      NE: `Nebraska`,
      NV: `Nevada`,
      NH: `New Hampshire`,
      NJ: `New Jersey`,
      NM: `New Mexico`,
      NY: `New York`,
      NC: `North Carolina`,
      ND: `North Dakota`,
      MP: `Northern Mariana Islands`,
      OH: `Ohio`,
      OK: `Oklahoma`,
      OR: `Oregon`,
      PW: `Palau`,
      PA: `Pennsylvania`,
      PR: `Puerto Rico`,
      RI: `Rhode Island`,
      SC: `South Carolina`,
      SD: `South Dakota`,
      TN: `Tennessee`,
      TX: `Texas`,
      UT: `Utah`,
      VT: `Vermont`,
      VI: `U.S. Virgin Islands`,
      VA: `Virginia`,
      WA: `Washington`,
      WV: `West Virginia`,
      WI: `Wisconsin`,
      WY: `Wyoming`,
      AA: `Armed Forces Americas`,
      AE: `Armed Forces`,
      AP: `Armed Forces Pacific`,
    },
  },
}.countrycodes;
function Yt(e, t) {
  switch (e.preference_state) {
    case 0:
    case 1:
      return !0;
    case 2:
      return !1;
    default:
      switch (t) {
        case `youtube`:
          return e.third_party_content?.youtube;
        case `vimeo`:
          return e.third_party_content?.vimeo;
        case `sketchfab`:
          return e.third_party_content?.sketchfab;
        case `generic`:
          return !1;
      }
  }
}
function Xt(e) {
  switch (e.preference_state) {
    case 0:
    case 1:
      return !1;
    default:
      return !0;
  }
}
async function Zt(e, t, n, r) {
  if (l(r)) return { version: 1, preference_state: 0 };
  if (t) {
    let t = (await Te.GetCookiePreferences(e, {}))
      .Body()
      .toObject().preferences;
    if (t && t.version !== void 0 && t.version != 0) return t;
  }
  try {
    let e = Ee(we);
    if (e) {
      let t = JSON.parse(e);
      if (t && t.version !== void 0 && t.version != 0) return t;
    }
  } catch {}
  return n in M.eucountries || n in M.eeacountries || n === `CH`
    ? { version: 1, preference_state: 4 }
    : { version: 1, preference_state: 0 };
}
function Qt(e) {
  return {
    queryKey: [`CookiePreferences`],
    queryFn: () => Zt(e, n.logged_in, a.COUNTRY, a.EREALM),
  };
}
function $t() {
  let e = Ce();
  return T(Qt(e));
}
function en(e) {
  let { data: t } = $t();
  return t ? Yt(t, e) : void 0;
}
function tn() {
  let { data: e } = $t();
  return e ? !Xt(e) : void 0;
}
var nn = 20,
  rn = /^.*youtube[^v]+v=(.{11}).*/,
  an = /^.*youtu\.be\/(.{11}).*/,
  on = /^.*youtube.*\/embed\/(.{11}).*/,
  sn = /^.*[?&]t=([^&]+)(?:&|$)/,
  cn = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
function ln(e) {
  return (
    e?.length < nn ? void 0 : rn.exec(e) || an.exec(e) || on.exec(e)
  )?.[1];
}
function un(e) {
  return sn.exec(e)?.[1];
}
function dn(e) {
  let t = cn.exec(e);
  if (!(t?.[1] || t?.[2] || t?.[3] || t?.[4])) return;
  if (t?.[4]) return parseInt(t?.[4]);
  let n = 0;
  return (
    t?.[1] && (n += 3600 * parseInt(t[1])),
    t?.[2] && (n += 60 * parseInt(t[2])),
    t?.[3] && (n += parseInt(t[3])),
    n
  );
}
function fn(e) {
  let t = ln(e);
  if (!t) return;
  let n = un(e);
  return { strVideoID: t, nStartSeconds: n ? dn(n) : void 0 };
}
function pn(e) {
  let t = De(e, e.options);
  return (0, k.jsx)(`span`, { ref: t, style: { fontSize: 0 } });
}
var mn = D.forwardRef(function (e, t) {
    let { onLeave: n, onEnter: r, options: i, ...a } = e,
      o = De(e, e.options),
      s = ee(o, t);
    return (0, k.jsx)(`div`, { ref: s, ...a });
  }),
  N = 0,
  P = [];
function hn(e) {
  if (N == 2) e && e();
  else {
    if (N == 0) {
      let e = document.createElement(`script`);
      e.src = `https://www.youtube.com/iframe_api`;
      let t = document.getElementsByTagName(`script`)[0];
      (t.parentNode?.insertBefore(e, t), (window.onYouTubeIframeAPIReady = _n));
    }
    e && (P.includes(e) || P.push(e));
  }
}
function gn(e) {
  h(P, e);
}
function _n() {
  N = 2;
  for (let e of P) e();
  P = [];
}
var F = class e extends D.Component {
  m_strPlayerID = ``;
  m_player = null;
  m_playerContainer = null;
  m_bPlayerReady = !1;
  static s_nPlayerIndex = 0;
  constructor(t) {
    (super(t),
      (this.m_strPlayerID = `YoutubePlayer_` + e.s_nPlayerIndex++),
      (this.state = { bYoutubeLoaded: !1 }));
  }
  componentWillUnmount() {
    (this.DestroyPlayer(), gn(this.OnYoutubeScriptsReady));
  }
  shouldComponentUpdate(e, t) {
    if (!this.m_player) return !1;
    let n = this.props;
    return n.autoplay != e.autoplay ||
      n.controls != e.controls ||
      n.showInfo != e.showInfo ||
      n.video != e.video
      ? (this.CreatePlayer(e), !1)
      : ((n.width != e.width || n.height != e.height) &&
          this.m_bPlayerReady &&
          e.width &&
          e.height &&
          this.m_player.setSize(e.width, e.height),
        n.forcePause != e.forcePause);
  }
  componentDidUpdate(e) {
    e.forcePause != this.props.forcePause && this.ApplyForcePause();
  }
  ApplyForcePause() {
    this.m_player &&
      this.m_bPlayerReady &&
      (this.props.forcePause
        ? typeof this.m_player.pauseVideo == `function` &&
          this.m_player.pauseVideo()
        : typeof this.m_player.playVideo == `function` &&
          this.m_player.playVideo());
  }
  DestroyPlayer() {
    if (this.m_player)
      try {
        (this.m_player.stopVideo && this.m_player.stopVideo(),
          this.m_player.destroy && this.m_player.destroy());
      } catch {
      } finally {
        this.m_player = null;
      }
  }
  BindPlayerContainer(e) {
    e &&
      this.m_playerContainer != e &&
      ((this.m_playerContainer = e),
      this.DestroyPlayer(),
      hn(this.OnYoutubeScriptsReady));
  }
  OnYoutubeScriptsReady() {
    this.CreatePlayer(this.props);
  }
  CreatePlayer(e) {
    if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
    let t = e.autoplay === !1 ? 0 : 1,
      n = +(e.showInfo === !0),
      r = +(e.controls === !0),
      i = +(e.showFullscreenBtn === !0),
      a = +(e.playsInline === !0),
      o = {
        width: e.width === void 0 ? void 0 : String(e.width),
        height: e.height === void 0 ? void 0 : String(e.height),
        videoId: e.video,
        host: `https://www.youtube-nocookie.com`,
        playerVars: {
          autoplay: t,
          showinfo: n,
          autohide: 1,
          fs: i,
          modestbranding: 1,
          rel: 0,
          playsinline: a,
          iv_load_policy: 3,
          controls: r,
          start: e.startSeconds,
        },
        events: {
          onReady: this.OnPlayerReady,
          onStateChange: this.OnPlayerStateChange,
          onError: this.OnError,
        },
      },
      s = this.m_playerContainer.firstElementChild;
    ((this.m_bPlayerReady = !1), (this.m_player = new YT.Player(s, o)));
  }
  OnPlayerReady(e) {
    if (
      ((this.m_bPlayerReady = !0),
      this.props.onVideoInfoChanged && this.m_player)
    ) {
      let e = this.m_player.getVideoData(),
        t = { strAuthor: ``, strTitle: ``, strVideoID: `` };
      (e.author && (t.strAuthor = e.author),
        e.title && (t.strTitle = e.title),
        e.video_id && (t.strVideoID = e.video_id),
        this.props.onVideoInfoChanged(t));
    }
    (this.props.width &&
      this.props.height &&
      this.m_player?.setSize(this.props.width, this.props.height),
      this.props.forcePause
        ? this.ApplyForcePause()
        : this.props.autoplay && this.m_player?.playVideo(),
      this.props.onPlayerReady && this.props.onPlayerReady());
  }
  OnPlayerStateChange(e) {
    switch (e.data) {
      case YT.PlayerState.UNSTARTED:
        break;
      case YT.PlayerState.BUFFERING:
        this.props.onBuffering && this.props.onBuffering();
        break;
      case YT.PlayerState.PLAYING:
        this.props.onPlaying && this.props.onPlaying();
        break;
      case YT.PlayerState.PAUSED:
        this.props.onPaused && this.props.onPaused();
        break;
      case YT.PlayerState.ENDED:
        this.props.onMovieEnd && this.props.onMovieEnd();
    }
  }
  OnError(e) {
    (console.log(`Youtube: Playback failed`, e),
      this.props.onError && this.props.onError(e));
  }
  OnPlayerLeftView() {
    this.props.autopause &&
      this.m_player &&
      this.m_bPlayerReady &&
      this.m_player.pauseVideo();
  }
  PlayVideo(e) {
    this.m_player &&
      this.m_bPlayerReady &&
      (e && this.m_player.seekTo(0, !0), this.m_player.playVideo());
  }
  render() {
    return (0, k.jsx)(vn, {
      video: this.props.video,
      children: (0, k.jsx)(
        mn,
        {
          onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
          ref: this.BindPlayerContainer,
          className: t(`YoutubePlayer`, this.props.classnames),
          children: (0, k.jsx)(Oe, { className: `YoutubePlayerThrobber` }),
        },
        this.m_strPlayerID,
      ),
    });
  }
};
(u([g], F.prototype, `BindPlayerContainer`, null),
  u([g], F.prototype, `OnYoutubeScriptsReady`, null),
  u([g], F.prototype, `CreatePlayer`, null),
  u([g], F.prototype, `OnPlayerReady`, null),
  u([g], F.prototype, `OnPlayerStateChange`, null),
  u([g], F.prototype, `OnError`, null),
  u([g], F.prototype, `OnPlayerLeftView`, null),
  u([g], F.prototype, `PlayVideo`, null));
function vn(e) {
  let { video: t, children: n } = e;
  return en(`youtube`)
    ? n
    : (0, k.jsx)(`a`, {
        href: `https://www.youtube.com/watch?v=${t}`,
        children: C(`#EventCalendar_WatchYouTubeVideo`),
      });
}
function yn(e) {
  let t = new URLSearchParams({
    autoplay: e.autoplay ? `1` : `0`,
    controls: e.controls ? `1` : `0`,
    fs: e.showFullscreenBtn ? `1` : `0`,
    playsinline: e.playsInline ? `1` : `0`,
    rel: `0`,
    iv_load_policy: `3`,
    modestbranding: `1`,
    enablejsapi: `1`,
  });
  return (
    e.startSeconds && t.set(`start`, String(e.startSeconds)),
    `https://www.youtube-nocookie.com/embed/${encodeURIComponent(e.video)}?${t.toString()}`
  );
}
function bn(e) {
  let { video: t, autopause: n, className: r } = e,
    i = D.useRef(null),
    a = D.useRef(null),
    o = D.useCallback(() => i.current?.pauseVideo(), []),
    s = De({ onLeave: n ? o : void 0 }),
    c = ee(a, s);
  return (
    D.useEffect(() => {
      let e = () => {
        a.current && (i.current = new YT.Player(a.current, {}));
      };
      return (
        n && hn(e),
        () => {
          (gn(e), (i.current = null));
        }
      );
    }, [n]),
    (0, k.jsx)(`iframe`, {
      ref: c,
      className: r,
      src: yn(e),
      title: t,
      allow: `autoplay; encrypted-media; picture-in-picture; web-share`,
      allowFullScreen: !0,
      frameBorder: 0,
    })
  );
}
function I(e) {
  return e
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, `&`);
}
async function xn(e) {
  let t =
      a.STORE_BASE_URL +
      `events/ajaxgetdynamiceventmetadata?` +
      new URLSearchParams(e).toString(),
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  return await n.json();
}
function Sn(e) {
  return [`DynamicEventMetadata`, `youtube`, e];
}
function Cn(e, t = !0) {
  return {
    queryKey: Sn(e),
    queryFn: async () => {
      let t = await xn({ youtubevideoids: e }),
        n = t.youtube?.find((t) => t.videoid == e) ?? t.youtube?.[0];
      if (!n) throw Error(`no metadata for youtube video ${e}`);
      return { ...n, title: I(n.title), description: I(n.description) };
    },
    enabled: t && !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function wn(e, t = !0) {
  return T(Cn(e, t));
}
function Tn(e) {
  return [`DynamicEventMetadata`, `sharedfile`, e];
}
function En(e) {
  return {
    queryKey: Tn(e),
    queryFn: async () => {
      let t = await xn({ sharedfileids: e }),
        n =
          t.sharedfiles?.find((t) => t.sharedfileid == e) ?? t.sharedfiles?.[0];
      if (!n) throw Error(`no metadata for shared file ${e}`);
      return {
        ...n,
        title: I(n.title),
        description: I(n.description),
        type: I(n.type),
      };
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Dn(e) {
  return T(En(e));
}
var On = `brm0OeRsTm4-`,
  kn = `pcxkPBR3wVQ-`,
  An = `Mamx1lJ2lKQ-`,
  jn = `MCiiNDFcgvA-`,
  Mn = `wDoQNUlMcwk-`,
  Nn = `AiYAf8NbQ-E-`,
  Pn = (function (e) {
    return (
      (e.left = `leftthumb`),
      (e.right = `rightthumb`),
      (e.full = `full`),
      (e.summary = `summary`),
      e
    );
  })({});
function Fn(e) {
  return e == `full` ? An : t(kn, e == `leftthumb` ? Mn : Nn);
}
function L(e) {
  let {
      videoID: n,
      bShowVideoImmediately: r,
      bAutoPlay: i,
      nStartSeconds: o,
      align: s = `full`,
    } = e,
    [c, l] = (0, D.useState)(!r),
    { data: u, isSuccess: d } = wn(n, c);
  if (c) {
    let e = u?.title ?? C(`#Loading`),
      t = u?.views ?? `0`,
      r = u?.description ?? ``,
      i = () => l(!1);
    return (0, k.jsxs)(`div`, {
      className: zt.Box,
      role: `button`,
      tabIndex: 0,
      onClick: i,
      onKeyDown: (e) => {
        (e.key == `Enter` || e.key == ` `) && (e.preventDefault(), i());
      },
      children: [
        (0, k.jsx)(Bt, {
          strURL: `https://img.youtube.com/vi/` + n + `/0.jpg`,
        }),
        (0, k.jsxs)(Vt, {
          children: [
            (0, k.jsx)(Ht, {
              children: C(`#EventEditor_YouTubeVideoTitle`, e),
            }),
            (0, k.jsx)(qt, {
              children: C(`#EventEditor_YouTubeVideoViews`, pt(Number(t))),
            }),
            (0, k.jsxs)(Jt, {
              children: [d && r, !d && (0, k.jsx)(Oe, { size: `medium` })],
            }),
          ],
        }),
      ],
    });
  }
  return (0, k.jsx)(vn, {
    video: n,
    children: (0, k.jsxs)(`div`, {
      className: t(On, Fn(s)),
      id: n,
      children: [
        (0, k.jsx)(`img`, {
          className: jn,
          alt: ``,
          src:
            a.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, k.jsx)(bn, {
          video: n,
          autoplay: i ?? !1,
          startSeconds: o,
          controls: !0,
          playsInline: !0,
          autopause: !0,
          showFullscreenBtn: !0,
        }),
      ],
    }),
  });
}
function In(e, t) {
  if (a.EREALM === c.k_ESteamRealmChina) return null;
  let n = fn(e);
  return n?.strVideoID === void 0
    ? ke(e, t?.event)
    : (0, k.jsx)(L, {
        videoID: n.strVideoID,
        nStartSeconds: n.nStartSeconds,
        bShowVideoImmediately: !1,
      });
}
function Ln() {
  return a.EREALM === c.k_ESteamRealmChina;
}
function Rn(e) {
  if (Ln()) return null;
  let t = R(e.args);
  if (t) {
    let e = t.split(`;`);
    if (e.length == 2) {
      let t = e[0],
        n = e[1].toLocaleLowerCase();
      return (0, k.jsx)(L, { videoID: t, align: n, bShowVideoImmediately: !0 });
    }
  }
  return (0, k.jsx)(D.Fragment, {});
}
function zn(e) {
  if (Ln() || a.COUNTRY.toLocaleUpperCase() == `CN`) return Ot(e);
  let t = R(e.args, `youtubeid`),
    n = R(e.args, `size`),
    r = R(e.args, `seconds`);
  return (0, k.jsx)(L, {
    videoID: t,
    nStartSeconds: r ? Number.parseInt(r) : void 0,
    align: n,
    bShowVideoImmediately: !0,
  });
}
var Bn = new Map([
  [`b`, { Constructor: Hn, autocloses: !1 }],
  [`i`, { Constructor: Un, autocloses: !1 }],
  [`h1`, { Constructor: Jn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h2`, { Constructor: Yn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h3`, { Constructor: Xn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h4`, { Constructor: Zn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h5`, { Constructor: Qn, autocloses: !1, skipFollowingNewline: !0 }],
  [`center`, { Constructor: $n, autocloses: !1 }],
  [`smalltext`, { Constructor: er, autocloses: !1, skipFollowingNewline: !0 }],
  [`u`, { Constructor: Wn, autocloses: !1 }],
  [`strike`, { Constructor: Gn, autocloses: !1 }],
  [`spoiler`, { Constructor: tr, autocloses: !1 }],
  [`hr`, { Constructor: nr, autocloses: !1 }],
  [`noparse`, { Constructor: hr, autocloses: !1 }],
  [`url`, { Constructor: ar, autocloses: !1 }],
  [`quote`, { Constructor: cr, autocloses: !1 }],
  [`pullquote`, { Constructor: lr, autocloses: !1 }],
  [`code`, { Constructor: ur, autocloses: !1 }],
  [`c`, { Constructor: dr, autocloses: !1 }],
  [`list`, { Constructor: fr, autocloses: !1, skipInternalNewline: !0 }],
  [`olist`, { Constructor: pr, autocloses: !1, skipInternalNewline: !0 }],
  [`*`, { Constructor: mr, autocloses: !0, skipInternalNewline: !0 }],
  [`table`, { Constructor: gr, autocloses: !1, skipInternalNewline: !0 }],
  [
    `tr`,
    {
      Constructor: vr,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `th`,
    {
      Constructor: br,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `td`,
    {
      Constructor: xr,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `expand`,
    {
      Constructor: Cr,
      autocloses: !1,
      skipInternalNewline: !0,
      allowWrapTextForCopying: !0,
    },
  ],
  [`calendarevent`, { Constructor: wr, autocloses: !0 }],
  [`doclink`, { Constructor: or, autocloses: !1 }],
  [`color`, { Constructor: rr, autocloses: !1 }],
  [`bgcolor`, { Constructor: ir, autocloses: !1 }],
  [`p`, { Constructor: Kn, autocloses: !1, skipFollowingNewline: !0 }],
]);
function R(e, t) {
  return t === void 0 ? e[``] : e[t];
}
function Vn(e, t) {
  return (n) => e({ ...n, className: t });
}
function Hn(e) {
  return (0, k.jsx)(`b`, { className: et, children: e.children });
}
function Un(e) {
  return (0, k.jsx)(`i`, {
    className: t(lt, `BB_Italic`),
    children: e.children,
  });
}
function Wn(e) {
  return (0, k.jsx)(`u`, { className: He, children: e.children });
}
function Gn(e) {
  return (0, k.jsx)(`s`, { className: Ve, children: e.children });
}
function Kn(e) {
  return (0, k.jsxs)(`p`, {
    className: Ne,
    children: [e.children, (0, k.jsx)(`wbr`, {})],
  });
}
function qn(e) {
  return (0, k.jsxs)(`div`, {
    className: Ne,
    role: `paragraph`,
    children: [e.children, (0, k.jsx)(`wbr`, {})],
  });
}
function z(e, n, r) {
  let i = R(n.args, `id`);
  return (
    (i ||= R(n.args)),
    i &&
      typeof i == `string` &&
      i.length > 0 &&
      i[0] === `#` &&
      (i = i.substring(1)),
    (0, k.jsx)(e, {
      id: i || void 0,
      className: t(r, n.className),
      children: n.children,
    })
  );
}
function Jn(e) {
  return z(`h1`, e, t(Xe, `BB_Header1`));
}
function Yn(e) {
  return z(`h2`, e, t(Ye, `BB_Header2`));
}
function Xn(e) {
  return z(`h3`, e, t(Ge, `BB_Header3`));
}
function Zn(e) {
  return z(`h4`, e, t(st, `BB_Header4`));
}
function Qn(e) {
  return z(`h5`, e, t(ut, `BB_Header5`));
}
function $n(e) {
  let n = R(e.args, `id`);
  return (
    n &&
      typeof n == `string` &&
      n.length > 0 &&
      n[0] === `#` &&
      (n = n.substring(1)),
    (0, k.jsx)(`span`, {
      id: n || void 0,
      className: t(Ke, `BB_Center`),
      children: e.children,
    })
  );
}
function er(e) {
  return z(`div`, e, t(Qe, `BB_SmallText`));
}
function tr(e) {
  let [n, r] = D.useState(!1),
    i = D.useCallback(() => {
      r(!n);
    }, [n]);
  return (0, k.jsx)(y, {
    className: t(Re, n && `YDb-da9VezY-`),
    focusable: !0,
    onActivate: i,
    onOKActionDescription: C(
      n ? `#Bbcode_Spoiler_Hide` : `#Bbcode_Spoiler_Show`,
    ),
    children: (0, k.jsx)(`span`, { className: ze, children: e.children }),
  });
}
function nr(e) {
  return (0, k.jsx)(`hr`, { className: $e });
}
function rr(e) {
  let t = R(e.args);
  return (0, k.jsx)(`span`, { style: { color: t }, children: e.children });
}
function ir(e) {
  let t = R(e.args);
  return (0, k.jsx)(`span`, {
    style: { backgroundColor: t },
    children: e.children,
  });
}
function ar(e) {
  let t = je(R(e.args));
  if (!t) {
    let n = e.children;
    typeof n == `string` && ue(n) && (t = je(n));
  }
  let n = R(e.args, `style`) == `button` ? Ue : void 0,
    r = n && R(e.args, `buttoncolor`),
    i = R(e.args, `id`);
  return (
    i &&
      typeof i == `string` &&
      i.length > 0 &&
      i[0] === `#` &&
      (i = i.substring(1)),
    t === void 0 && !i
      ? e.children || ``
      : t === void 0 || (typeof t == `string` && t.length > 0 && t[0] == `#`)
        ? (0, k.jsx)(`a`, { href: t ?? null, id: i, children: e.children })
        : (0, k.jsx)(sr, {
            className: n,
            href: t,
            id: i,
            style: { backgroundColor: r },
            children: e.children,
          })
  );
}
function or(e) {
  let t = R(e.args),
    n = R(e.args, `style`) == `button` ? Ue : void 0,
    r = n && R(e.args, `buttoncolor`);
  return (0, k.jsx)(sr, {
    className: n,
    style: { backgroundColor: r },
    href: `${p.PARTNER_BASE_URL}doc/${t}`,
    children: e.children,
  });
}
var sr = (e) => {
  let { href: t, ...n } = e,
    r = Ae(t ?? ``),
    i;
  xe(r)
    ? ((r = (p.IN_CLIENT ? `steam://openurl_external/` : ``) + pe(r)),
      (i = `noopener nofollow`))
    : (r = le(r));
  let a =
    typeof e.children == `string` &&
    e.children.length > 0 &&
    t &&
    !t.startsWith(`steam://`)
      ? ve(t)
      : void 0;
  return (0, k.jsx)(_e, {
    toolTipContent: a,
    direction: `top`,
    children: (0, k.jsx)(ne, { ...n, href: r, rel: i, children: e.children }),
  });
};
function cr(e) {
  let n = R(e.args, `author`);
  return (0, k.jsxs)(`blockquote`, {
    className: t(at, e.className),
    children: [
      !!n &&
        (0, k.jsxs)(`div`, {
          className: `iZjggU7O-fs-`,
          children: [
            C(`#Bbcode_Originally_Posted_By`) + ` `,
            ` `,
            (0, k.jsx)(`b`, { children: n + `:` }),
          ],
        }),
      e.children,
    ],
  });
}
function lr(e) {
  return (0, k.jsx)(`div`, { className: Be, children: e.children });
}
function ur(e) {
  return (0, k.jsx)(`code`, { className: it, children: e.children });
}
function dr(e) {
  return (0, k.jsx)(`code`, { className: tt, children: e.children });
}
function fr(e) {
  return (0, k.jsx)(`ul`, {
    className: t(Me, `bullets`),
    children: e.children,
  });
}
function pr(e) {
  return (0, k.jsx)(`ol`, { className: Pe, children: e.children });
}
function mr(e) {
  let t = R(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, k.jsx)(`li`, { className: ct, id: t || void 0, children: e.children })
  );
}
function hr(e) {
  return e.children;
}
function gr(e) {
  let n = R(e.args, `noborder`),
    r = R(e.args, `equalcells`),
    i = R(e.args, `colwidth`);
  return (0, k.jsxs)(`table`, {
    className: t(Fe, `BB_Table`, n && `b20E2IrghSY-`, r && `zJnyxE63CCk-`),
    children: [
      i &&
        (0, k.jsx)(`colgroup`, {
          children: i.split(`,`).map((e, t) => (0, k.jsx)(_r, { width: e }, t)),
        }),
      (0, k.jsx)(`tbody`, { children: e.children }),
    ],
  });
}
function _r(e) {
  let { width: t } = e,
    n;
  return (
    t && parseInt(t) > 0 && (n = { width: `${t}px` }),
    (0, k.jsx)(`col`, { style: n })
  );
}
function vr(e) {
  return (0, k.jsx)(`tr`, {
    className: t(Le, `BB_TableRow`),
    children: e.children,
  });
}
function yr(e, n) {
  let r = R(n.args, `width`),
    i = R(n.args, `colspan`),
    a = R(n.args, `rowspan`),
    o = {};
  return (
    i && parseInt(i) > 1 && (o.colSpan = parseInt(i)),
    a && parseInt(a) > 1 && (o.rowSpan = parseInt(a)),
    (0, k.jsx)(e, {
      className: t(Ie, e == `td` && `BB_TableData`),
      ...o,
      style: r ? { width: r } : void 0,
      children: n.children,
    })
  );
}
function br(e) {
  return yr(`th`, e);
}
function xr(e) {
  return yr(`td`, e);
}
function Sr(e, t, n, r) {
  switch (e) {
    case `details`:
      return {
        collapsed: `#Bbcode_Expand_Details_Collapsed`,
        expanded: `#Bbcode_Expand_Details_Expanded`,
        style: void 0,
      };
    case `spoiler`:
      return {
        collapsed: `#Bbcode_Expand_Spoiler_Collapsed`,
        expanded: `#Bbcode_Expand_Spoiler_Expanded`,
        style: void 0,
      };
    case `title`:
      return {
        collapsed: t || n || `#Bbcode_Expand_ShowMore_Collapsed`,
        expanded: t || r || `#Bbcode_Expand_ShowMore_Expanded`,
        style: nt,
      };
    default:
    case `showmore`:
      return {
        collapsed: `#Bbcode_Expand_ShowMore_Collapsed`,
        expanded: `#Bbcode_Expand_ShowMore_Expanded`,
        style: void 0,
      };
  }
}
function Cr(e) {
  let n = !!R(e.args, `expanded`),
    [r, i] = D.useState(n),
    a = R(e.args, `title`),
    o = R(e.args, `collapsed_str`),
    s = R(e.args, `expanded_str`),
    c = Sr(R(e.args, `type`), a, o, s);
  return (0, k.jsxs)(`div`, {
    className: t({
      [ot]: !0,
      [c.style ?? ``]: c.style != null,
      [void 0]: r,
      [void 0]: !r,
      BBCodeExpanded: r,
      BBCodeCollapsed: !r,
    }),
    children: [
      (0, k.jsxs)(`div`, {
        className: Je,
        onClick: () => i(!r),
        children: [
          C(r ? c.expanded : c.collapsed),
          (0, k.jsx)(`div`, {
            className: qe,
            children: (0, k.jsx)(Se, { angle: r ? 180 : 0 }),
          }),
        ],
      }),
      r &&
        (0, k.jsx)(`div`, { className: `Lwo0pX9leRw-`, children: e.children }),
    ],
  });
}
function wr(e) {
  let n = R(e.args, `title`),
    r = R(e.args, `start`) ?? R(e.args, `datetime`),
    i = R(e.args, `end`) ?? R(e.args, `datetime`),
    a = R(e.args, `body`) ?? null,
    o = R(e.args, `location`) ?? null,
    s = R(e.args, `id`) ?? ``,
    c = new Date(r),
    l = `${c.getUTCFullYear()}${(`0` + (c.getUTCMonth() + 1)).slice(-2)}${(`0` + c.getUTCDate()).slice(-2)}T${(`0` + c.getUTCHours()).slice(-2)}${(`0` + c.getUTCMinutes()).slice(-2)}00Z`,
    u = new Date(i),
    d = `${u.getUTCFullYear()}${(`0` + (u.getUTCMonth() + 1)).slice(-2)}${(`0` + u.getUTCDate()).slice(-2)}T${(`0` + u.getUTCHours()).slice(-2)}${(`0` + u.getUTCMinutes()).slice(-2)}00Z`,
    f;
  try {
    let e = `BEGIN:VCALENDAR\r
`;
    ((e += `VERSION:2.0\r
`),
      (e += `BEGIN:VEVENT\r
`),
      (e += `DTSTART:${l}\r\n`),
      (e += `DTEND:${d}\r\n`),
      (e += `SUMMARY:${n.replace(
        `
`,
        `\\n`,
      )}\r\n`),
      a &&
        (e += `DESCRIPTION:${a.replace(
          `
`,
          `\\n`,
        )}\r\n`),
      o &&
        (e += `LOCATION:${o.replace(
          `
`,
          `\\n`,
        )}\r\n`),
      (e += `END:VEVENT\r
`),
      (e += `END:VCALENDAR\r
`),
      (f = `data:text/calendar;charset=utf-8;base64,${Et.fromByteArray(new TextEncoder().encode(e))}`));
  } catch (e) {
    console.error(e);
  }
  let p = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  ((p += `&text=${encodeURI(n)}`),
    (p += `&details=${encodeURI(a)}`),
    (p += `&dates=${encodeURI(l + `/` + d)}`));
  let m = (e) => {
    if (`ReactNativeWebView` in window) {
      let t = window.ReactNativeWebView,
        r = {
          event_name: `addcalendarevent`,
          tsStart: c.getTime(),
          tsEnd: u.getTime(),
          strTitle: n,
          strNotes: a,
          strLocation: o,
        };
      (t.postMessage(JSON.stringify(r)), e.preventDefault());
    }
  };
  return (0, k.jsxs)(`div`, {
    className: t(`SaleSectionCalendarEventContainer`, rt),
    id: s,
    children: [
      f &&
        (0, k.jsx)(`a`, {
          className: t(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: f,
          onClick: m,
          download: `calendar.ics`,
          children: `Apple`,
        }),
      (0, k.jsx)(`a`, {
        className: t(`SaleSectionCalendarEventLink`, Ze),
        href: p,
        children: `Google`,
      }),
      f &&
        (0, k.jsx)(`a`, {
          className: t(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: f,
          onClick: m,
          download: `calendar.ics`,
          children: `Outlook`,
        }),
    ],
  });
}
function Tr(e) {
  let { text: t = ``, style: n, children: r } = e;
  if (t == null) return (0, k.jsx)(D.Fragment, { children: r });
  let i;
  if (
    ((i =
      t instanceof Array
        ? t.map((e) => (e ? e.toString() : ``)).filter((e) => e.length > 0)
            .join(`
`)
        : t.toString()),
    D.Children.count(r) == 1)
  ) {
    let e = D.Children.only(r);
    return D.cloneElement(e, { "data-copystyle": n, "data-copytext": i });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${n} copytext=${i}`,
    ),
    (0, k.jsx)(D.Fragment, { children: r })
  );
}
var Er = `EYdF9T-t7r0-`,
  Dr = `GlOJIpYSKE4-`,
  Or = `JQFjcVsL4SA-`,
  kr = `MHuFPh5V6r4-`,
  Ar = `Gwiqr5pL1cE-`,
  jr = `w0e9THby0ZM-`,
  Mr = `_4q--1VsTk5U-`,
  Nr = `_669DaDTMhYs-`,
  Pr = `dohGHt1ixUc-`,
  Fr = `C9qi0C7EUeo-`,
  Ir = `_3XkAznD5HIU-`,
  Lr = `VoTYjMrv1JU-`,
  B = `iiVnY9Z6ikk-`,
  Rr = `KB63E0Y-xPo-`,
  zr = `_7tqUEqEzFXI-`;
function V(e) {
  let { emoticon: n, large: r } = e,
    [i, a] = oe(),
    [o, s] = D.useState(null),
    c = `:${n}:`,
    l = mt(n, r);
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsx)(Tr, {
        text: c,
        style: `merge-adjacent`,
        children: (0, k.jsx)(`img`, {
          ...a,
          src: l,
          className: t(Or, r ? kr : void 0),
          "data-emoticon": n,
          alt: n,
          ref: s,
        }),
      }),
      i && o && (0, k.jsx)(Br, { target: o, emoticon: n }),
    ],
  });
}
function Br(e) {
  let { target: t, emoticon: n } = e,
    { data: r } = Vr(n);
  return (0, k.jsx)(H, {
    target: t,
    title: `:${n}:`,
    subtitle: r && r.app_name ? r.app_name : void 0,
    children: (0, k.jsx)(V, { emoticon: n, large: !0 }),
  });
}
function Vr(e) {
  return T({
    queryKey: [`EmoticonHover`, e],
    queryFn: async () => {
      let t = `${a.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(a.LANGUAGE)}&origin=${self.origin}`,
        n = await fetch(t);
      if (n.status != 200)
        throw `Error fetching emoticon: ${n.status} ${n.statusText}`;
      return await n.json();
    },
  });
}
var H = ({ target: e, title: t, subtitle: n, children: r }) =>
  (0, k.jsxs)(me, {
    target: e,
    style: { zIndex: 1700 },
    className: Mr,
    children: [
      r,
      (0, k.jsxs)(`div`, {
        className: Nr,
        children: [
          (0, k.jsx)(`div`, {
            className: Pr,
            children: t || (0, k.jsx)(`span`, { children: `\xA0` }),
          }),
          (0, k.jsx)(`div`, {
            className: Fr,
            children: n || (0, k.jsx)(`span`, { children: `\xA0` }),
          }),
        ],
      }),
    ],
  });
function Hr(e) {
  return new _t(new O());
}
function Ur() {
  return new Map([...Array.from(Bn.entries())]);
}
function Wr(e) {
  let { text: t, languageOverride: n } = e,
    [r] = (0, D.useState)(new vt(Ur(), Hr, n ?? a.LANGUAGE));
  return (0, k.jsx)(k.Fragment, { children: r.ParseBBCode(t, {}) });
}
var Gr = `L3HaktJsWWA-`,
  Kr = `YebKQISqLCs-`,
  qr = `Ct9yU89TArw-`,
  Jr = `_7-cDUja4KeQ-`,
  Yr = `PBXxHejQZTU-`,
  Xr = `JX6irDhLeng-`,
  Zr = w((e) => {
    let t = dt(e.photo, s(a.LANGUAGE)),
      n = t ? (typeof t == `string` ? t : t[1]) : void 0,
      r = !!e.title,
      i = !!e.company;
    return (0, k.jsxs)(`div`, {
      className: qr,
      onMouseLeave: e.fnClose,
      children: [
        (0, k.jsxs)(`div`, {
          className: Jr,
          children: [
            e.photo && (0, k.jsx)(`img`, { src: n }),
            (0, k.jsxs)(`div`, {
              className: Yr,
              children: [
                (0, k.jsx)(`div`, { children: e.name }),
                (r || i) &&
                  (0, k.jsxs)(`div`, {
                    children: [
                      r &&
                        (0, k.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: e.title,
                        }),
                      r && i && (0, k.jsx)(`span`, { children: `, ` }),
                      i && (0, k.jsx)(`span`, { children: e.company }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.bio &&
          (0, k.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              e.bio,
              e.bioString && (0, k.jsx)(Wr, { text: e.bioString }),
            ],
          }),
      ],
    });
  }),
  U = class e extends D.Component {
    static sm_embeddedElements = new de(`presenter-hover-source-elements`);
    m_refAnchor = D.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      fe() ||
        (this.m_fnHidePopup &&
          (this.m_fnHidePopup(),
          (this.m_fnHidePopup = null),
          window.removeEventListener(`scroll`, this.OnScroll)));
    }
    componentWillUnmount() {
      this.ClosePopup();
    }
    OnScroll() {
      Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
        this.ClosePopup();
    }
    OnHover(t) {
      let n = this.m_refAnchor.current;
      if (!n) return;
      let r = {
          direction: `right`,
          bEnablePointerEvents: !0,
          style: { maxWidth: 640, minHeight: n.clientHeight },
          target: n,
        },
        i = `presenter-hover-` + Math.floor(Math.random() * 1e8);
      ((this.m_fnHidePopup = () =>
        e.sm_embeddedElements.HideElement(n.ownerDocument, i)),
        window.addEventListener(`scroll`, this.OnScroll),
        (this.m_nScrollPosAtHoverStart = window.scrollY),
        e.sm_embeddedElements.ShowElementDelayed(
          n.ownerDocument,
          150,
          (0, k.jsx)(me, {
            ...r,
            children: (0, k.jsx)(Zr, { ...this.props, fnClose: this.OnLeave }),
          }),
          i,
        ));
    }
    OnLeave(e) {
      this.ClosePopup();
    }
    render() {
      return (0, k.jsx)(`div`, {
        className: Xr,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(u([g], U.prototype, `ClosePopup`, null),
  u([g], U.prototype, `OnScroll`, null),
  u([g], U.prototype, `OnHover`, null),
  u([g], U.prototype, `OnLeave`, null));
function Qr(e) {
  let {
      photo: t,
      name: n,
      title: r,
      company: i,
      hidePhotoInCompactView: o,
    } = e,
    c = dt(t, s(a.LANGUAGE)),
    l = c && !o ? (typeof c == `string` ? c : c[1]) : null,
    u = !!r,
    d = !!i;
  return (0, k.jsx)(`div`, {
    className: Gr,
    children: (0, k.jsx)(U, {
      ...e,
      children: (0, k.jsx)(`div`, {
        className: Kr,
        children: (0, k.jsxs)(`div`, {
          className: Jr,
          children: [
            !!l && (0, k.jsx)(`img`, { src: l }),
            (0, k.jsxs)(`div`, {
              className: Yr,
              children: [
                (0, k.jsx)(`div`, { children: n }),
                (u || d) &&
                  (0, k.jsxs)(`div`, {
                    children: [
                      u &&
                        (0, k.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: r,
                        }),
                      u && d && (0, k.jsx)(`span`, { children: `, ` }),
                      d && (0, k.jsx)(`span`, { children: i }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
function $r(e, t, n = !1) {
  return `${e}economy/sticker${n ? `static` : ``}/${encodeURIComponent(t)}`;
}
var ei = `_6Ymd3Ej4NCU-`,
  ti = `nnMTzvpAu6Y-`,
  ni = `plDm7MqblvA-`,
  ri = `_0SYoz2hcxOY-`,
  ii = `_6gRC1q99lWw-`,
  ai = `a1l1nhz8GFU-`,
  oi = `wfpm6FahiQY-`,
  si = `G30RxXBSXck-`,
  ci = `Mw7bdt52AuY-`,
  li = `_0ZS8IEfJKto-`,
  ui = `R-BER3-p7c8-`,
  di = `nCS2TzxRijY-`,
  W = class extends D.Component {
    constructor(e) {
      (super(e), (this.state = { activeIndex: e.initialActiveIndex || 0 }));
    }
    render() {
      let { config: e } = this.props,
        { activeIndex: t } = this.state,
        n = e[t],
        r = n ? n.renderContent() : null,
        i = e.length > 1,
        a = i
          ? ({ detail: { button: t } }) => {
              t === te.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : t === te.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      e.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, k.jsxs)(y, {
        className: ei,
        onButtonDown: a,
        children: [i && (0, k.jsx)(fi, { children: this.RenderTabs() }), r],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: e }, t) => {
        let n = this.state.activeIndex === t;
        return (0, k.jsx)(
          mi,
          {
            active: n,
            onClick: () => this.setState({ activeIndex: t }),
            children: e(n),
          },
          t,
        );
      });
    }
  };
function fi(e) {
  return (0, k.jsx)(y, {
    className: ti,
    "flow-children": `row`,
    children: e.children,
  });
}
function pi(e) {
  return (0, k.jsx)(`div`, { className: ai, children: e.children });
}
function mi(e) {
  let { active: n, children: r, onClick: i } = e;
  return (0, k.jsx)(y, {
    className: t(ni, n && `f-iRFuUHuSo-`),
    focusClassName: ri,
    onActivate: i,
    children: (0, k.jsx)(`div`, {
      className: t(ii, n && `f-iRFuUHuSo-`),
      children: r,
    }),
  });
}
function hi(e) {
  let {
      items: t,
      renderItem: n,
      onItemSelect: r,
      keyExtractor: i,
      renderEmpty: a,
    } = e,
    o = t.map((e, a) =>
      (0, k.jsx)(
        y,
        {
          className: si,
          onActivate: () => r(t[a]),
          autoFocus: a === 0,
          focusClassName: ri,
          children: n(t[a]),
        },
        i(e),
      ),
    );
  return (
    t.length === 0 && a && (o = a()),
    (0, k.jsx)(y, { "flow-children": `grid`, className: oi, children: o })
  );
}
function G(e) {
  let { title: t, onFilterChange: n, filter: r, onSubmit: i, ...a } = e;
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsx)(pi, {
        children: (0, k.jsx)(gi, {
          title: t,
          children: (0, k.jsx)(hi, { ...a }),
        }),
      }),
      (0, k.jsx)(_i, { value: r, onChange: n, onSubmit: i }),
    ],
  });
}
function K(e) {
  let { onFilterChange: t, filter: n, sections: r, title: i } = e;
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsxs)(pi, {
        children: [
          i && (0, k.jsx)(`div`, { className: `Zcgr0x6gQMc-`, children: i }),
          r.map(({ title: e, ...t }) =>
            (0, k.jsx)(gi, { title: e, children: (0, k.jsx)(hi, { ...t }) }, e),
          ),
        ],
      }),
      (0, k.jsx)(_i, { value: n, onChange: t }),
    ],
  });
}
function gi(e) {
  return (0, k.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, k.jsx)(`div`, { className: ci, children: e.title }),
      (0, k.jsx)(`div`, { className: void 0, children: e.children }),
    ],
  });
}
function _i(e) {
  let { value: t, onChange: n, onSubmit: r } = e;
  return (0, k.jsx)(`div`, {
    className: li,
    children: (0, k.jsx)(ce, {
      type: `text`,
      placeholder: C(`#AddonPicker_Search`),
      className: ui,
      value: t,
      onChange: (e) => n(e.target.value),
      onSubmit: r,
    }),
  });
}
function q(e) {
  let { className: n, ...r } = e;
  return (0, k.jsx)(`div`, { className: t(n, di), ...r });
}
var vi = 1e3;
function J(e) {
  return e.recent_emoticons;
}
function Y(e) {
  return e.recent_stickers;
}
function yi(e) {
  return J(e).length + Y(e).length > 0;
}
function bi(e) {
  let [t, n] = (0, D.useState)(e.is_initialized);
  return (
    (0, D.useEffect)(() => {
      if (!e.is_initialized) {
        e.UpdateEmoticonList();
        let t = r(
          () => e.is_initialized,
          () => n(e.is_initialized),
        );
        return () => t();
      }
      return () => {};
    }, [e]),
    t
  );
}
var xi = w((e) => {
    let {
      emoticonStore: n,
      roomEffectSettings: r,
      strFlairGroupID: i,
      onEmoticonSelected: a,
      onRoomEffectSelected: o,
      onStickerSelected: s,
    } = e;
    bi(n);
    let c = [];
    return (
      yi(n) &&
        c.push({
          renderTab: (e) =>
            (0, k.jsx)(`span`, {
              title: C(`#AddonPicker_RecentlyUsed`),
              className: t(B, Rr, e && void 0),
              children: (0, k.jsx)(Ri, {}),
            }),
          renderContent: () =>
            (0, k.jsx)(Ti, {
              store: n,
              onEmoticonSelect: (e) => a(e.name),
              onStickerSelect: (e) => s(e.name),
              flairGroupID: i,
            }),
        }),
      (0, k.jsx)(b, {
        children: (0, k.jsx)(W, {
          config: [
            ...c,
            {
              renderTab: (e) =>
                (0, k.jsx)(`span`, {
                  title: C(`#AddonPicker_Emoticons`),
                  className: t(B, e && void 0),
                  children: (0, k.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, k.jsx)(Ei, {
                  store: n,
                  onItemSelect: (e) => a(e.name),
                  flairGroupID: i,
                }),
            },
            {
              renderTab: (e) =>
                (0, k.jsx)(`span`, {
                  title: C(`#AddonPicker_Stickers`),
                  className: t(B, e && void 0),
                  children: (0, k.jsx)(Ii, {}),
                }),
              renderContent: () =>
                (0, k.jsx)(Di, { store: n, onItemSelect: (e) => s(e.name) }),
            },
            {
              renderTab: (e) =>
                (0, k.jsx)(`span`, {
                  title: C(`#AddonPicker_RoomEffects`),
                  className: t(B, e && void 0),
                  children: (0, k.jsx)(Li, {}),
                }),
              renderContent: () =>
                (0, k.jsx)(Oi, {
                  store: n,
                  effectSettings: r,
                  onItemSelect: (e) => o(e.name),
                }),
            },
          ],
        }),
      })
    );
  }),
  Si = class extends D.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = r(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      let {
          emoticonStore: e,
          onEmoticonSelected: n,
          onStickerSelected: r,
          strFlairGroupID: i,
        } = this.props,
        a = [];
      return (
        yi(e) &&
          a.push({
            renderTab: (e) =>
              (0, k.jsx)(`span`, {
                title: C(`#AddonPicker_RecentlyUsed`),
                className: t(B, Rr, e && void 0),
                children: (0, k.jsx)(Ri, {}),
              }),
            renderContent: () =>
              (0, k.jsx)(Ti, {
                store: e,
                onEmoticonSelect: (e) => n(e.name),
                onStickerSelect: (e) => r(e.name),
                flairGroupID: i,
              }),
          }),
        (0, k.jsx)(b, {
          children: (0, k.jsx)(W, {
            config: [
              ...a,
              {
                renderTab: (e) =>
                  (0, k.jsx)(`span`, {
                    title: C(`#AddonPicker_Emoticons`),
                    className: t(B, e && void 0),
                    children: (0, k.jsx)(Q, {}),
                  }),
                renderContent: () =>
                  (0, k.jsx)(Ei, {
                    store: e,
                    onItemSelect: (e) => n(e.name),
                    flairGroupID: i,
                  }),
              },
              {
                renderTab: (e) =>
                  (0, k.jsx)(`span`, {
                    title: C(`#AddonPicker_Stickers`),
                    className: t(B, e && void 0),
                    children: (0, k.jsx)(Ii, {}),
                  }),
                renderContent: () =>
                  (0, k.jsx)(Di, { store: e, onItemSelect: (e) => r(e.name) }),
              },
            ],
          }),
        })
      );
    }
  };
Si = u([w], Si);
var Ci = class extends D.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = r(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, k.jsx)(b, {
        children: (0, k.jsx)(W, {
          config: [
            {
              renderTab: () =>
                (0, k.jsx)(`span`, {
                  title: C(`#AddonPicker_Emoticons`),
                  className: B,
                  children: (0, k.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, k.jsx)(ki, {
                  store: this.props.emoticonStore,
                  onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  wi = class extends D.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = r(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, k.jsx)(b, {
        children: (0, k.jsx)(W, {
          config: [
            {
              renderTab: () =>
                (0, k.jsx)(`span`, {
                  title: C(`#AddonPicker_Emoticons`),
                  className: B,
                  children: (0, k.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, k.jsx)(Ai, {
                  store: this.props.emoticonStore,
                  onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  Ti = class extends D.Component {
    state = { filter: `` };
    render() {
      let { store: e, onEmoticonSelect: t, onStickerSelect: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        J(e) &&
          i.push({
            title: C(`#AddonPicker_RecentEmoticons`),
            items: E.FilterEmoticons(J(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, k.jsx)(Z, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, k.jsx)(q, {
                children: r
                  ? C(`#AddonPicker_NoResults`)
                  : C(`#AddonPicker_NoRecent`, C(`#AddonPicker_Emoticons`)),
              }),
          }),
        Y(e).length &&
          i.push({
            title: C(`#AddonPicker_RecentStickers`),
            items: E.FilterStickers(Y(e), r),
            onItemSelect: n,
            renderItem: (e) => (0, k.jsx)(ji, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            renderEmpty: () =>
              (0, k.jsx)(q, {
                children: r
                  ? C(`#AddonPicker_NoResults`)
                  : C(`#AddonPicker_NoRecent`, C(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, k.jsx)(K, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: i,
        })
      );
    }
  },
  Ei = class extends D.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = !r && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
        a = E.FilterEmoticons(i, r).slice(0, vi);
      return (0, k.jsx)(G, {
        title: C(`#AddonPicker_Emoticons`),
        items: a,
        onItemSelect: t,
        renderItem: (e) => (0, k.jsx)(Z, { emoticon: e }),
        keyExtractor: (e) => e.name,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => t(a[0]),
        renderEmpty: () =>
          r
            ? (0, k.jsx)(q, { children: C(`#AddonPicker_NoResults`) })
            : (0, k.jsx)(X, {}),
      });
    }
  };
function X() {
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsx)(q, {
        children: C(`#AddonPicker_NoneOwned`, C(`#AddonPicker_Emoticons`)),
      }),
      (0, k.jsx)(q, {
        children: ge(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, k.jsx)(x, {
            href: `${p.STORE_BASE_URL}points/shop/c/emoticons`,
            children: C(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, k.jsx)(x, {
            href: `${p.COMMUNITY_BASE_URL}market`,
            children: C(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var Di = class extends D.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t } = this.props,
        { filter: n } = this.state,
        r = E.FilterStickers(e.GetStickerList(), n);
      return (0, k.jsx)(G, {
        title: C(`#EmoticonPicker_StickerHeading`),
        items: r,
        onItemSelect: t,
        renderItem: (e) => (0, k.jsx)(ji, { sticker: e }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: n,
        onSubmit: () => t(r[0]),
        renderEmpty: () =>
          n
            ? (0, k.jsx)(q, { children: C(`#AddonPicker_NoResults`) })
            : (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(q, {
                    children: C(
                      `#AddonPicker_NoneOwned`,
                      C(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, k.jsx)(q, {
                    children: ge(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, k.jsx)(x, {
                        href: `${p.STORE_BASE_URL}points/shop/c/stickers`,
                        children: C(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  Oi = class extends D.Component {
    state = { filter: `` };
    render() {
      let { store: e, effectSettings: t, onItemSelect: n } = this.props,
        { filter: r } = this.state,
        i = e.GetEffectList().filter(({ name: e }) => e.indexOf(r) > -1);
      return (0, k.jsx)(G, {
        title: C(`#EmoticonPicker_EffectHeading`),
        items: i,
        onItemSelect: n,
        renderItem: (e) => (0, k.jsx)(Ni, { effect: e, roomEffectSettings: t }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => n(i[0]),
        renderEmpty: () =>
          r
            ? (0, k.jsx)(q, { children: C(`#AddonPicker_NoResults`) })
            : (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(q, {
                    children: C(
                      `#AddonPicker_NoneOwned`,
                      C(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, k.jsx)(q, {
                    children: ge(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, k.jsx)(x, {
                        href: `${p.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: C(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  ki = class extends D.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        J(e).length &&
          i.push({
            title: C(`#AddonPicker_RecentEmoticons`),
            items: E.FilterEmoticons(J(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, k.jsx)(Z, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, k.jsx)(q, {
                children: r
                  ? C(`#AddonPicker_NoResults`)
                  : C(`#AddonPicker_NoRecent`, C(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, k.jsx)(K, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: [
            ...i,
            {
              title: C(`#AddonPicker_AllEmoticons`),
              items: E.FilterStickers(e.emoticon_list, r).slice(0, vi),
              onItemSelect: t,
              renderItem: (e) => (0, k.jsx)(Z, { emoticon: e }),
              keyExtractor: (e) => e.name,
              renderEmpty: () =>
                r
                  ? (0, k.jsx)(q, { children: C(`#AddonPicker_NoResults`) })
                  : (0, k.jsx)(X, {}),
            },
          ],
        })
      );
    }
  };
ki = u([w], ki);
var Ai = class extends D.Component {
  state = { filter: `` };
  render() {
    let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
      { filter: r } = this.state;
    return (0, k.jsx)(K, {
      onFilterChange: (e) => this.setState({ filter: e }),
      filter: r,
      sections: [
        {
          title: C(`#ChatEntryButton_Flair`),
          items: E.FilterStickers(e.GetFlairListByGroupID(n), r),
          onItemSelect: t,
          renderItem: (e) => (0, k.jsx)(Z, { emoticon: e }),
          keyExtractor: (e) => e.name,
          renderEmpty: () =>
            r
              ? (0, k.jsx)(q, { children: C(`#AddonPicker_NoResults`) })
              : (0, k.jsx)(X, {}),
        },
      ],
    });
  }
};
Ai = u([w], Ai);
var Z = (e) => {
    let { emoticon: t, large: n } = e,
      r = !t.last_used && t.time_received;
    return (0, k.jsxs)(`div`, {
      className: zr,
      children: [
        (0, k.jsx)(V, { emoticon: t.name, large: n }),
        r && (0, k.jsx)(Fi, {}),
      ],
    });
  },
  ji = class extends D.Component {
    state = { showHover: !1 };
    m_ref = D.createRef();
    render() {
      let { sticker: e, className: n, ...r } = this.props,
        i = $r(p.COMMUNITY_CDN_URL, e.name);
      return (0, k.jsxs)(`div`, {
        ref: this.m_ref,
        className: t(n, Ar),
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        ...r,
        children: [
          (0, k.jsx)(`img`, { style: { width: `100%` }, src: i }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, k.jsx)(Mi, { target: this.m_ref.current, sticker: e }),
        ],
      });
    }
  },
  Mi = w((e) => {
    let {
        target: t,
        sticker: { name: n, appid: r },
      } = e,
      [i] = ht(r, {});
    return (0, k.jsx)(H, {
      target: t,
      title: n,
      subtitle: i?.GetName(),
      children: (0, k.jsx)(`img`, {
        src: $r(p.COMMUNITY_CDN_URL, n),
        className: Ir,
      }),
    });
  }),
  Ni = class extends D.Component {
    state = { showHover: !1 };
    m_ref = D.createRef();
    render() {
      let { effect: e, roomEffectSettings: n, className: r, ...i } = this.props,
        a = n[e.name];
      return (0, k.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        className: t(r, jr),
        ...i,
        children: [
          a.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, k.jsx)(Pi, {
              target: this.m_ref.current,
              effect: e,
              roomEffectSettings: n,
            }),
        ],
      });
    }
  },
  Pi = w((e) => {
    let {
        target: t,
        effect: { name: n, appid: r },
        roomEffectSettings: i,
      } = e,
      a = i[n],
      [o] = ht(r, {});
    return (0, k.jsx)(H, {
      target: t,
      title: n,
      subtitle: o?.GetName(),
      children: (0, k.jsx)(`div`, {
        className: Lr,
        children: a.renderEffectIcon(),
      }),
    });
  });
function Fi() {
  return (0, k.jsx)(`div`, {
    className: Er,
    children: (0, k.jsx)(`div`, { className: Dr }),
  });
}
function Ii(e) {
  return (0, k.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function Q(e) {
  return (0, k.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, k.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function Li(e) {
  return (0, k.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, k.jsx)(`path`, {
        fill: `currentColor`,
        d: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function Ri(e) {
  let { className: n, ...r } = e;
  return (0, k.jsx)(`svg`, {
    className: t(`SVGIcon_Button SVGIcon_Clock`, n),
    version: `1.1`,
    x: `0px`,
    y: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ...r,
    children: (0, k.jsx)(`path`, {
      d: `M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z`,
    }),
  });
}
var zi = `pvP8JT4e7EA-`,
  Bi = `FcUxYTJ41iw-`,
  Vi = `CVH0kQ-5qJ4-`,
  Hi = `-OdMBhmRPrM-`,
  Ui = `ht2q6zu-Yn8-`,
  Wi = `kzKCSSWaRZ4-`,
  Gi = `_1zsmA-mI3cU-`,
  Ki = `_4X5-n9MaD8g-`;
function qi() {
  return i() ? (0, k.jsx)(ie, {}) : (0, k.jsx)(he, {});
}
var Ji = 1576780700,
  $ = class extends D.Component {
    OnEmoticonClick(e) {
      let {
          emoticonStore: t,
          strFlairGroupID: n,
          SetUIDisplayPref: r,
          contextOptions: i,
          bShowChatAddons: a,
        } = this.props,
        {
          roomEffectSettings: o,
          onRoomEffectSelected: s,
          onStickerSelected: c,
        } = this.props,
        l = null;
      if (
        ((l =
          a && o && s && c
            ? (0, k.jsx)(xi, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (e) => this.props.OnEmoticonSelected(e, !1),
                roomEffectSettings: o,
                onRoomEffectSelected: s,
                onStickerSelected: c,
              })
            : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
              ? (0, k.jsx)(wi, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, k.jsx)(Ci, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        se(
          l,
          e,
          i || {
            bOverlapHorizontal: !0,
            bPreferPopLeft: !0,
            bPreferPopTop: !0,
          },
        ),
        this.BHaveUnseenEmoticons() && r)
      ) {
        let e = this.GetNewestIndicatorTime();
        ((!e || e < Ji) && (e = Ji), r(`rtLastAckedNewEmoticons`, e));
      }
    }
    GetNewestIndicatorTime() {
      let e = this.props.emoticonStore,
        t = -(2 ** 53 - 1),
        n = e.GetTimeReceivedNewestEmoticon();
      n && (t = n);
      let r = e.GetTimeReceivedForStickerOrEffect();
      return ((t = Math.max(r, t)), t > -(2 ** 53 - 1) ? t : void 0);
    }
    BHaveUnseenEmoticons() {
      let { rtLastAckedNewEmoticons: e } = this.props,
        t = this.GetNewestIndicatorTime();
      return !e || e < Ji || (t && (!e || e < t));
    }
    render() {
      let { disabled: e, className: n, ttip: r, useImg: i } = this.props,
        a = [n],
        o = !1;
      return (
        e ? a.push(`disabled`) : this.BHaveUnseenEmoticons() && (o = !0),
        r && a.push(`ttip`),
        i
          ? (0, k.jsx)(y, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: C(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, k.jsx)(ye, {
                toolTipContent: r,
                children: (0, k.jsx)(`img`, {
                  src: this.props.useImg,
                  className: t(...a),
                  title: this.props.title || C(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (a.push(Wi, Gi),
            (0, k.jsx)(re, {
              className: t(...a),
              onOKActionDescription: C(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || C(`#ChatEntryButton_Emoticon`),
              disabled: e,
              children: (0, k.jsxs)(ye, {
                toolTipContent: r,
                children: [
                  this.props.buttonIcon || (0, k.jsx)(qi, {}),
                  o && (0, k.jsx)(Fi, {}),
                ],
              }),
            }))
      );
    }
  };
(u([g], $.prototype, `OnEmoticonClick`, null), ($ = u([w], $)));
var Yi = $;
export {
  pn as A,
  Gt as B,
  qn as C,
  Pn as D,
  zn as E,
  Ut as F,
  Ot as G,
  Bt as H,
  Wt as I,
  O as J,
  vt as K,
  zt as L,
  fn as M,
  tn as N,
  In as O,
  M as P,
  Vt as R,
  pr as S,
  Rn as T,
  Dt as U,
  Ht as V,
  j as W,
  _t as Y,
  Jn as _,
  Wi as a,
  fr as b,
  Ui as c,
  U as d,
  Qr as f,
  R as g,
  Bn as h,
  zi as i,
  mn as j,
  Dn as k,
  Fi as l,
  Vn as m,
  Hi as n,
  Bi as o,
  V as p,
  gt as q,
  Vi as r,
  Ki as s,
  Yi as t,
  Zr as u,
  Yn as v,
  cr as w,
  mr as x,
  Xn as y,
  Kt as z,
};
