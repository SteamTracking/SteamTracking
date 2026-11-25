/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Dt as e,
  H as t,
  I as n,
  Pt as r,
  U as i,
  W as a,
  d as o,
  g as s,
  k as c,
  n as l,
  nt as u,
  r as d,
  y as f,
  z as p,
} from "./chunk~de7f2df91c.js";
import {
  At as m,
  Et as h,
  Ft as g,
  Pt as _,
  a as v,
  o as ee,
} from "./chunk~bd90a5fce7.js";
import {
  Bn as te,
  Bt as ne,
  Fn as re,
  Hn as y,
  In as ie,
  Jn as b,
  Ln as ae,
  Mn as x,
  Mt as oe,
  On as se,
  Or as ce,
  Ua as S,
  W as le,
  _a as ue,
  _n as de,
  aa as C,
  da as w,
  gn as fe,
  ha as pe,
  jn as me,
  kn as he,
  kr as ge,
  qa as _e,
  ro as ve,
  wn as T,
  xn as ye,
  zn as E,
} from "./chunk~1fa4b8f2ff.js";
import { at as be } from "./chunk~6b8ddcaac8.js";
import { C as D } from "./chunk~44f252525d.js";
import { n as xe } from "./chunk~f8b6a4beb3.js";
import { t as O } from "./chunk~ede3e357a2.js";
import { a as Se, c as Ce, i as we } from "./chunk~70c16cc80c.js";
import { O as k } from "./chunk~96e60d7578.js";
import { n as Te } from "./chunk~9d71b14b50.js";
import { t as Ee } from "./chunk~eefd71512b.js";
import { n as De, u as Oe } from "./chunk~8ceeb46076.js";
import {
  B as ke,
  C as Ae,
  D as je,
  E as Me,
  F as Ne,
  I as Pe,
  L as Fe,
  M as Ie,
  N as Le,
  O as Re,
  P as ze,
  R as Be,
  S as Ve,
  W as He,
  _ as Ue,
  a as We,
  c as Ge,
  f as Ke,
  g as qe,
  h as Je,
  i as Ye,
  j as Xe,
  m as Ze,
  n as Qe,
  o as $e,
  p as et,
  r as tt,
  s as nt,
  t as rt,
  u as it,
  v as at,
  w as ot,
  x as st,
  y as ct,
} from "./chunk~af1574091f.js";
import { t as lt } from "./chunk~4571d27d07.js";
import { n as A, r as ut } from "./chunk~967b42dac9.js";
import { n as dt } from "./chunk~a7c5e71e12.js";
var j = r(u(), 1),
  M = class {
    reactNodes = [];
    AppendText(e, t = !1) {
      e.length &&
        (t
          ? this.reactNodes.push(
              j.createElement(
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
  ft = class {
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
  pt = class extends ft {
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
          n.push(j.createElement(`br`)),
          (t = t.substr(e + 1)));
      (t.length && n.push(t),
        n.forEach((e) => {
          super.AppendNode(e);
        }));
    }
  },
  mt = class extends He {
    m_renderingLanguage;
    constructor(e, t, n) {
      (super(e, t ?? (() => new M())),
        (this.m_renderingLanguage = typeof n == `string` ? p(n) : n));
    }
    UpdateOverrideLanguage(e) {
      this.m_renderingLanguage = e;
    }
    ParseBBCode(e, t, n = !0) {
      let r = 0,
        i = this.Parse(
          e,
          (e, n, ...i) =>
            j.createElement(
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
        ? j.createElement(j.Fragment, null, ...i)
        : i.length == 1
          ? i[0]
          : null;
    }
  },
  N = a();
function ht(e) {
  return !(
    (!me(e.sPoster) && !x(e.sPoster)) ||
    (e.rgVideoSources && e.rgVideoSources.some((e) => !x(e.sURL))) ||
    (e.rgVideoTracks && e.rgVideoTracks.some((e) => !x(e.sURL)))
  );
}
var P = class e {
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
  gt = (0, j.forwardRef)(function (e, t) {
    let {
        video: n,
        bAutoPlay: r,
        bControls: i,
        bLoop: a,
        bMuted: o,
        className: c,
        mediaScale: l,
        flAspectRatio: u,
        onClick: d,
        altText: f,
      } = e,
      p = (0, j.useMemo)(
        () =>
          !!n.rgVideoTracks?.some(
            (e) => e.sKind == `subtitles` || e.sKind == `captions`,
          ),
        [n.rgVideoTracks],
      ),
      [m, h] = j.useState(!1),
      g = _t();
    if (!n.rgVideoSources || !n.rgVideoSources.length) return null;
    let _ = ht(n),
      v;
    (!_ || (p && s.EUNIVERSE == 1)) && (v = `anonymous`);
    let ee = o || (r && P.Get().BVolumePreferenceMuted()),
      te = n.sPoster ? F(n.sPoster, g) : ``;
    return (0, N.jsxs)(`video`, {
      width: `100%`,
      height: `auto`,
      autoPlay: r,
      muted: ee,
      playsInline: !0,
      controls: i,
      poster: te,
      loop: a,
      crossOrigin: v,
      onVolumeChange: (e) => {
        let t = e.target,
          n = t.muted ? 0 : t.volume;
        m && P.Get().SetVolumePreference(n);
      },
      onPlay: (e) => {
        let t = e.target,
          n = t.currentTime == 0,
          i = P.Get().BUserHasVolumePreference();
        if ((h(!0), n)) {
          if (!i && !r) {
            let e = t.muted ? 0 : t.volume;
            P.Get().SetVolumePreference(e);
          } else
            i &&
              ((t.volume = P.Get().GetVolumePreference()),
              (t.muted = P.Get().BVolumePreferenceMuted()));
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
        (0, N.jsx)(vt, {
          rgVideoSources: n.rgVideoSources,
          strCacheBreakOrigin: g,
        }),
        (0, N.jsx)(yt, {
          rgVideoTracks: n.rgVideoTracks,
          strCacheBreakOrigin: g,
        }),
      ],
    });
  });
function _t() {
  let e = window.location.href,
    t = [
      s.STORE_BASE_URL,
      s.COMMUNITY_BASE_URL,
      s.PARTNER_BASE_URL,
      s.HELP_BASE_URL,
      s.STATS_BASE_URL,
      s.STORE_CHECKOUT_BASE_URL,
    ].find((t) => t && e.startsWith(t));
  if (t) return t;
  try {
    return new URL(e).origin + `/`;
  } catch {
    return `unknown`;
  }
}
function F(e, t) {
  if (e) {
    if (me(e)) return e;
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
function vt(e) {
  let { rgVideoSources: t, strCacheBreakOrigin: n } = e;
  return t
    .filter((e) => !!e.sURL)
    .map((e) =>
      (0, N.jsx)(`source`, { src: F(e.sURL, n), type: e.sFormat }, e.sURL),
    );
}
function yt(e) {
  let { rgVideoTracks: t, strCacheBreakOrigin: n } = e;
  return t
    ? t.map((e, r) =>
        (0, N.jsx)(
          bt,
          { track: e, rgVideoTracks: t, strCacheBreakOrigin: n },
          r,
        ),
      )
    : null;
}
function bt(e) {
  let { track: t, rgVideoTracks: r, strCacheBreakOrigin: a } = e,
    o = t.eLanguage;
  if (s.EREALM == i.k_ESteamRealmChina) {
    if (C.IsELanguageValidInRealm(o, i.k_ESteamRealmChina))
      o = C.GetELanguageFallback(o);
    else if (o === 6) {
      if (r.find((e) => C.GetELanguageFallback(e.eLanguage) === o)) return null;
    } else return null;
  } else if (!C.IsELanguageValidInRealm(o, i.k_ESteamRealmGlobal)) return null;
  return (0, N.jsx)(`track`, {
    src: F(t.sURL, a),
    kind: t.sKind,
    default: t.bDefault,
    srcLang: n(o),
    label: pe(o),
  });
}
var xt = r(lt());
function I(e) {
  let t = U(e, `poster`);
  t &&= E(t);
  let r = [];
  {
    let t = U(e, `mp4`);
    t && r.push({ sURL: E(t), sFormat: `video/mp4` });
    let n = U(e, `webm`);
    n && r.push({ sURL: E(n), sFormat: `video/webm` });
  }
  let i = p(c.LANGUAGE),
    a = i != 0,
    o = [];
  for (let t = 0; t < 32; t++) {
    let r = U(e, `sub_` + n(t));
    r &&
      o.push({
        sURL: E(r),
        eLanguage: t,
        sKind: `subtitles`,
        bDefault: a && t == i,
      });
    let s = U(e, `cap_` + n(t));
    s &&
      o.push({
        sURL: E(s),
        eLanguage: t,
        sKind: `captions`,
        bDefault: a && t == i,
      });
  }
  return { sPoster: t, rgVideoSources: r, rgVideoTracks: o };
}
function St(e) {
  let t = I(e.args);
  return (0, N.jsx)(gt, { video: t, bAutoPlay: !0, bControls: !1, bLoop: !0 });
}
function Ct(e) {
  let t = I(e.args),
    n = e.children ? e.children.toString() : void 0;
  n &&
    n.startsWith(`http`) &&
    t.rgVideoSources.push({ sURL: E(n), sFormat: `video/webm` });
  let r = U(e.args, `autoplay`),
    i = r !== `0` && r !== `off` && r !== `false`,
    a = U(e.args, `controls`),
    o = a !== `0` && a !== `off` && a !== `false`,
    s = U(e.args, `loop`);
  return (0, N.jsx)(gt, {
    video: t,
    bAutoPlay: i,
    bControls: o,
    bLoop: s ? a !== `0` && a !== `off` && a !== `false` : i,
  });
}
var wt = `m6bojdeQzBM-`,
  Tt = `KNKcwZZR0so-`,
  Et = `OACV7AX319w-`,
  Dt = `D7GTf0-swcc-`,
  Ot = `L7AE1SvWgtA-`,
  kt = `_7iMZXddr1CI-`,
  At = `sNG-BnwzjYs-`,
  jt = `maYcJlnc0JU-`,
  Mt = `akuZJwBr6xc-`,
  Nt = `ZfFIRgkpA2M-`,
  Pt = { Box: wt, Preview: Tt, Type: void 0 };
function Ft(e) {
  return (0, N.jsx)(`img`, {
    className: Tt,
    src: e.strURL || void 0,
    alt: e.strAlt ?? ``,
  });
}
function It(e) {
  return (0, N.jsx)(`div`, { className: Ot, children: e.children });
}
function Lt(e) {
  return (0, N.jsx)(`div`, { className: kt, children: e.children });
}
function Rt(e) {
  return (0, N.jsx)(`div`, { className: Et, children: e.children });
}
function zt(e) {
  return (0, N.jsx)(`span`, { className: Mt, children: e.children });
}
function Bt(e) {
  return (0, N.jsx)(`div`, { className: Dt, children: e.children });
}
function Vt(e) {
  return (0, N.jsx)(`span`, { className: Nt, children: e.children });
}
function Ht(e) {
  return (0, N.jsx)(`div`, { className: At, children: e.children });
}
function Ut(e) {
  return (0, N.jsx)(`div`, { className: jt, children: e.children });
}
var L = {
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
function Wt(e, t) {
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
function Gt(e) {
  switch (e.preference_state) {
    case 0:
    case 1:
      return !1;
    default:
      return !0;
  }
}
async function Kt(e, n, r, i) {
  if (t(i)) return { version: 1, preference_state: 0 };
  if (n) {
    let t = (await Ce.GetCookiePreferences(e, {}))
      .Body()
      .toObject().preferences;
    if (t && t.version !== void 0 && t.version != 0) return t;
  }
  try {
    let e = we(Se);
    if (e) {
      let t = JSON.parse(e);
      if (t && t.version !== void 0 && t.version != 0) return t;
    }
  } catch {}
  return r in L.eucountries || r in L.eeacountries || r === `CH`
    ? { version: 1, preference_state: 4 }
    : { version: 1, preference_state: 0 };
}
function qt(e) {
  return {
    queryKey: [`CookiePreferences`],
    queryFn: () => Kt(e, f.logged_in, s.COUNTRY, s.EREALM),
  };
}
function Jt() {
  let e = xe();
  return O(qt(e));
}
function Yt(e) {
  let { data: t } = Jt();
  return t ? Wt(t, e) : void 0;
}
function Xt() {
  let { data: e } = Jt();
  return e ? !Gt(e) : void 0;
}
var Zt = 20,
  Qt = /^.*youtube[^v]+v=(.{11}).*/,
  $t = /^.*youtu\.be\/(.{11}).*/,
  en = /^.*youtube.*\/embed\/(.{11}).*/,
  tn = /^.*[?&]t=([^&]+)(?:&|$)/,
  nn = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
function rn(e) {
  return (
    e?.length < Zt ? void 0 : Qt.exec(e) || $t.exec(e) || en.exec(e)
  )?.[1];
}
function an(e) {
  return tn.exec(e)?.[1];
}
function on(e) {
  let t = nn.exec(e);
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
function sn(e) {
  let t = rn(e);
  if (!t) return;
  let n = an(e);
  return { strVideoID: t, nStartSeconds: n ? on(n) : void 0 };
}
function cn(e) {
  let t = b(e, e.options);
  return (0, N.jsx)(`span`, { ref: t, style: { fontSize: 0 } });
}
var ln = j.forwardRef(function (e, t) {
    let { onLeave: n, onEnter: r, options: i, ...a } = e,
      o = b(e, e.options),
      s = h(o, t);
    return (0, N.jsx)(`div`, { ref: s, ...a });
  }),
  R = 0,
  z = [];
function un(e) {
  if (R == 2) e && e();
  else {
    if (R == 0) {
      let e = document.createElement(`script`);
      e.src = `https://www.youtube.com/iframe_api`;
      let t = document.getElementsByTagName(`script`)[0];
      (t.parentNode?.insertBefore(e, t), (window.onYouTubeIframeAPIReady = fn));
    }
    e && (z.includes(e) || z.push(e));
  }
}
function dn(e) {
  g(z, e);
}
function fn() {
  R = 2;
  for (let e of z) e();
  z = [];
}
var B = class e extends j.Component {
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
    (this.DestroyPlayer(), dn(this.OnYoutubeScriptsReady));
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
      un(this.OnYoutubeScriptsReady));
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
    return (0, N.jsx)(pn, {
      video: this.props.video,
      children: (0, N.jsx)(
        ln,
        {
          onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
          ref: this.BindPlayerContainer,
          className: d(`YoutubePlayer`, this.props.classnames),
          children: (0, N.jsx)(Ee, { className: `YoutubePlayerThrobber` }),
        },
        this.m_strPlayerID,
      ),
    });
  }
};
(l([_], B.prototype, `BindPlayerContainer`, null),
  l([_], B.prototype, `OnYoutubeScriptsReady`, null),
  l([_], B.prototype, `CreatePlayer`, null),
  l([_], B.prototype, `OnPlayerReady`, null),
  l([_], B.prototype, `OnPlayerStateChange`, null),
  l([_], B.prototype, `OnError`, null),
  l([_], B.prototype, `OnPlayerLeftView`, null),
  l([_], B.prototype, `PlayVideo`, null));
function pn(e) {
  let { video: t, children: n } = e;
  return Yt(`youtube`)
    ? n
    : (0, N.jsx)(`a`, {
        href: `https://www.youtube.com/watch?v=${t}`,
        children: w(`#EventCalendar_WatchYouTubeVideo`),
      });
}
function mn(e) {
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
function hn(e) {
  let { video: t, autopause: n, className: r } = e,
    i = j.useRef(null),
    a = j.useRef(null),
    o = j.useRef(void 0),
    s = j.useCallback(() => {
      typeof i.current?.pauseVideo == `function` && i.current.pauseVideo();
    }, []),
    c = j.useCallback((e) => {
      o.current = e.isIntersecting;
    }, []),
    l = b({ onLeave: n ? s : void 0, onIntersectionChange: c }),
    u = h(a, l);
  return (
    j.useEffect(() => {
      let e = () => {
          o.current === !1 && s();
        },
        t = () => {
          a.current &&
            (i.current = new YT.Player(a.current, { events: { onReady: e } }));
        };
      return (
        n && un(t),
        () => {
          (dn(t), (i.current = null));
        }
      );
    }, [n, s]),
    (0, N.jsx)(`iframe`, {
      ref: u,
      className: r,
      src: mn(e),
      title: t,
      allow: `autoplay; encrypted-media; picture-in-picture; web-share`,
      allowFullScreen: !0,
      frameBorder: 0,
    })
  );
}
function V(e) {
  return e
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, `&`);
}
async function gn(e) {
  let t =
      s.STORE_BASE_URL +
      `events/ajaxgetdynamiceventmetadata?` +
      new URLSearchParams(e).toString(),
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  return await n.json();
}
function _n(e) {
  return [`DynamicEventMetadata`, `youtube`, e];
}
function vn(e, t = !0) {
  return {
    queryKey: _n(e),
    queryFn: async () => {
      let t = await gn({ youtubevideoids: e }),
        n = t.youtube?.find((t) => t.videoid == e) ?? t.youtube?.[0];
      if (!n) throw Error(`no metadata for youtube video ${e}`);
      return { ...n, title: V(n.title), description: V(n.description) };
    },
    enabled: t && !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function yn(e, t = !0) {
  return O(vn(e, t));
}
function bn(e) {
  return [`DynamicEventMetadata`, `sharedfile`, e];
}
function xn(e) {
  return {
    queryKey: bn(e),
    queryFn: async () => {
      let t = await gn({ sharedfileids: e }),
        n =
          t.sharedfiles?.find((t) => t.sharedfileid == e) ?? t.sharedfiles?.[0];
      if (!n) throw Error(`no metadata for shared file ${e}`);
      return {
        ...n,
        title: V(n.title),
        description: V(n.description),
        type: V(n.type),
      };
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Sn(e) {
  return O(xn(e));
}
var Cn = `brm0OeRsTm4-`,
  wn = `pcxkPBR3wVQ-`,
  Tn = `Mamx1lJ2lKQ-`,
  En = `MCiiNDFcgvA-`,
  Dn = `wDoQNUlMcwk-`,
  On = `AiYAf8NbQ-E-`,
  kn = (function (e) {
    return (
      (e.left = `leftthumb`),
      (e.right = `rightthumb`),
      (e.full = `full`),
      (e.summary = `summary`),
      e
    );
  })({});
function An(e) {
  return e == `full` ? Tn : d(wn, e == `leftthumb` ? Dn : On);
}
function H(e) {
  let {
      videoID: t,
      bShowVideoImmediately: n,
      bAutoPlay: r,
      nStartSeconds: i,
      align: a = `full`,
    } = e,
    [o, c] = (0, j.useState)(!n),
    { data: l, isSuccess: u } = yn(t, o);
  if (o) {
    let e = l?.title ?? w(`#Loading`),
      n = l?.views ?? `0`,
      r = l?.description ?? ``,
      i = () => c(!1);
    return (0, N.jsxs)(`div`, {
      className: Pt.Box,
      role: `button`,
      tabIndex: 0,
      onClick: i,
      onKeyDown: (e) => {
        (e.key == `Enter` || e.key == ` `) && (e.preventDefault(), i());
      },
      children: [
        (0, N.jsx)(Ft, {
          strURL: `https://img.youtube.com/vi/` + t + `/0.jpg`,
        }),
        (0, N.jsxs)(It, {
          children: [
            (0, N.jsx)(Lt, {
              children: w(`#EventEditor_YouTubeVideoTitle`, e),
            }),
            (0, N.jsx)(Ht, {
              children: w(`#EventEditor_YouTubeVideoViews`, Te(Number(n))),
            }),
            (0, N.jsxs)(Ut, {
              children: [u && r, !u && (0, N.jsx)(Ee, { size: `medium` })],
            }),
          ],
        }),
      ],
    });
  }
  return (0, N.jsx)(pn, {
    video: t,
    children: (0, N.jsxs)(`div`, {
      className: d(Cn, An(a)),
      id: t,
      children: [
        (0, N.jsx)(`img`, {
          className: En,
          alt: ``,
          src:
            s.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, N.jsx)(hn, {
          video: t,
          autoplay: r ?? !1,
          startSeconds: i,
          controls: !0,
          playsInline: !0,
          autopause: !0,
          showFullscreenBtn: !0,
        }),
      ],
    }),
  });
}
function jn(e, t) {
  if (s.EREALM === i.k_ESteamRealmChina) return null;
  let n = sn(e);
  return n?.strVideoID === void 0
    ? De(e, t?.event)
    : (0, N.jsx)(H, {
        videoID: n.strVideoID,
        nStartSeconds: n.nStartSeconds,
        bShowVideoImmediately: !1,
      });
}
function Mn() {
  return s.EREALM === i.k_ESteamRealmChina;
}
function Nn(e) {
  if (Mn()) return null;
  let t = U(e.args);
  if (t) {
    let e = t.split(`;`);
    if (e.length == 2) {
      let t = e[0],
        n = e[1].toLocaleLowerCase();
      return (0, N.jsx)(H, { videoID: t, align: n, bShowVideoImmediately: !0 });
    }
  }
  return (0, N.jsx)(j.Fragment, {});
}
function Pn(e) {
  if (Mn() || s.COUNTRY.toLocaleUpperCase() == `CN`) return Ct(e);
  let t = U(e.args, `youtubeid`),
    n = U(e.args, `size`),
    r = U(e.args, `seconds`);
  return (0, N.jsx)(H, {
    videoID: t,
    nStartSeconds: r ? Number.parseInt(r) : void 0,
    align: n,
    bShowVideoImmediately: !0,
  });
}
var Fn = new Map([
  [`b`, { Constructor: Ln, autocloses: !1 }],
  [`i`, { Constructor: Rn, autocloses: !1 }],
  [`h1`, { Constructor: Un, autocloses: !1, skipFollowingNewline: !0 }],
  [`h2`, { Constructor: Wn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h3`, { Constructor: Gn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h4`, { Constructor: Kn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h5`, { Constructor: qn, autocloses: !1, skipFollowingNewline: !0 }],
  [`center`, { Constructor: Jn, autocloses: !1 }],
  [`smalltext`, { Constructor: Yn, autocloses: !1, skipFollowingNewline: !0 }],
  [`u`, { Constructor: zn, autocloses: !1 }],
  [`strike`, { Constructor: Bn, autocloses: !1 }],
  [`spoiler`, { Constructor: Xn, autocloses: !1 }],
  [`hr`, { Constructor: Zn, autocloses: !1 }],
  [`noparse`, { Constructor: ur, autocloses: !1 }],
  [`url`, { Constructor: er, autocloses: !1 }],
  [`quote`, { Constructor: rr, autocloses: !1 }],
  [`pullquote`, { Constructor: ir, autocloses: !1 }],
  [`code`, { Constructor: ar, autocloses: !1 }],
  [`c`, { Constructor: or, autocloses: !1 }],
  [`list`, { Constructor: sr, autocloses: !1, skipInternalNewline: !0 }],
  [`olist`, { Constructor: cr, autocloses: !1, skipInternalNewline: !0 }],
  [`*`, { Constructor: lr, autocloses: !0, skipInternalNewline: !0 }],
  [`table`, { Constructor: dr, autocloses: !1, skipInternalNewline: !0 }],
  [
    `tr`,
    {
      Constructor: pr,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `th`,
    {
      Constructor: hr,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `td`,
    {
      Constructor: gr,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `expand`,
    {
      Constructor: vr,
      autocloses: !1,
      skipInternalNewline: !0,
      allowWrapTextForCopying: !0,
    },
  ],
  [`calendarevent`, { Constructor: yr, autocloses: !0 }],
  [`doclink`, { Constructor: tr, autocloses: !1 }],
  [`color`, { Constructor: Qn, autocloses: !1 }],
  [`bgcolor`, { Constructor: $n, autocloses: !1 }],
  [`p`, { Constructor: Vn, autocloses: !1, skipFollowingNewline: !0 }],
]);
function U(e, t) {
  return t === void 0 ? e[``] : e[t];
}
function In(e, t) {
  return (n) => e({ ...n, className: t });
}
function Ln(e) {
  return (0, N.jsx)(`b`, { className: Qe, children: e.children });
}
function Rn(e) {
  return (0, N.jsx)(`i`, {
    className: d(st, `BB_Italic`),
    children: e.children,
  });
}
function zn(e) {
  return (0, N.jsx)(`u`, { className: Be, children: e.children });
}
function Bn(e) {
  return (0, N.jsx)(`s`, { className: ze, children: e.children });
}
function Vn(e) {
  return (0, N.jsxs)(`p`, {
    className: je,
    children: [e.children, (0, N.jsx)(`wbr`, {})],
  });
}
function Hn(e) {
  return (0, N.jsxs)(`div`, {
    className: je,
    role: `paragraph`,
    children: [e.children, (0, N.jsx)(`wbr`, {})],
  });
}
function W(e, t, n) {
  let r = U(t.args, `id`);
  return (
    (r ||= U(t.args)),
    r &&
      typeof r == `string` &&
      r.length > 0 &&
      r[0] === `#` &&
      (r = r.substring(1)),
    (0, N.jsx)(e, {
      id: r || void 0,
      className: d(n, t.className),
      children: t.children,
    })
  );
}
function Un(e) {
  return W(`h1`, e, d(Je, `BB_Header1`));
}
function Wn(e) {
  return W(`h2`, e, d(qe, `BB_Header2`));
}
function Gn(e) {
  return W(`h3`, e, d(Ue, `BB_Header3`));
}
function Kn(e) {
  return W(`h4`, e, d(at, `BB_Header4`));
}
function qn(e) {
  return W(`h5`, e, d(ct, `BB_Header5`));
}
function Jn(e) {
  let t = U(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, N.jsx)(`span`, {
      id: t || void 0,
      className: d(We, `BB_Center`),
      children: e.children,
    })
  );
}
function Yn(e) {
  return W(`div`, e, d(Xe, `BB_SmallText`));
}
function Xn(e) {
  let [t, n] = j.useState(!1),
    r = j.useCallback(() => {
      n(!t);
    }, [t]);
  return (0, N.jsx)(S, {
    className: d(Ie, t && `YDb-da9VezY-`),
    focusable: !0,
    onActivate: r,
    onOKActionDescription: w(
      t ? `#Bbcode_Spoiler_Hide` : `#Bbcode_Spoiler_Show`,
    ),
    children: (0, N.jsx)(`span`, { className: Le, children: e.children }),
  });
}
function Zn(e) {
  return (0, N.jsx)(`hr`, { className: Ze });
}
function Qn(e) {
  let t = U(e.args);
  return (0, N.jsx)(`span`, { style: { color: t }, children: e.children });
}
function $n(e) {
  let t = U(e.args);
  return (0, N.jsx)(`span`, {
    style: { backgroundColor: t },
    children: e.children,
  });
}
function er(e) {
  let t = ke(U(e.args));
  if (!t) {
    let n = e.children;
    typeof n == `string` && ae(n) && (t = ke(n));
  }
  let n = U(e.args, `style`) == `button` ? Ve : void 0,
    r = n && U(e.args, `buttoncolor`),
    i = U(e.args, `id`);
  return (
    i &&
      typeof i == `string` &&
      i.length > 0 &&
      i[0] === `#` &&
      (i = i.substring(1)),
    t === void 0 && !i
      ? e.children || ``
      : t === void 0 || (typeof t == `string` && t.length > 0 && t[0] == `#`)
        ? (0, N.jsx)(`a`, { href: t ?? null, id: i, children: e.children })
        : (0, N.jsx)(nr, {
            className: n,
            href: t,
            id: i,
            style: { backgroundColor: r },
            children: e.children,
          })
  );
}
function tr(e) {
  let t = U(e.args),
    n = U(e.args, `style`) == `button` ? Ve : void 0,
    r = n && U(e.args, `buttoncolor`);
  return (0, N.jsx)(nr, {
    className: n,
    style: { backgroundColor: r },
    href: `${c.PARTNER_BASE_URL}doc/${t}`,
    children: e.children,
  });
}
var nr = (e) => {
  let { href: t, ...n } = e,
    r = Oe(t ?? ``),
    i;
  se(r)
    ? ((r = (c.IN_CLIENT ? `steam://openurl_external/` : ``) + he(r)),
      (i = `noopener nofollow`))
    : (r = ie(r));
  let a =
    typeof e.children == `string` &&
    e.children.length > 0 &&
    t &&
    !t.startsWith(`steam://`)
      ? re(t)
      : void 0;
  return (0, N.jsx)(fe, {
    toolTipContent: a,
    direction: `top`,
    children: (0, N.jsx)(v, { ...n, href: r, rel: i, children: e.children }),
  });
};
function rr(e) {
  let t = U(e.args, `author`);
  return (0, N.jsxs)(`blockquote`, {
    className: d(rt, e.className),
    children: [
      !!t &&
        (0, N.jsxs)(`div`, {
          className: `iZjggU7O-fs-`,
          children: [
            w(`#Bbcode_Originally_Posted_By`) + ` `,
            ` `,
            (0, N.jsx)(`b`, { children: t + `:` }),
          ],
        }),
      e.children,
    ],
  });
}
function ir(e) {
  return (0, N.jsx)(`div`, { className: Re, children: e.children });
}
function ar(e) {
  return (0, N.jsx)(`code`, { className: nt, children: e.children });
}
function or(e) {
  return (0, N.jsx)(`code`, { className: $e, children: e.children });
}
function sr(e) {
  return (0, N.jsx)(`ul`, {
    className: d(Ae, `bullets`),
    children: e.children,
  });
}
function cr(e) {
  return (0, N.jsx)(`ol`, { className: Me, children: e.children });
}
function lr(e) {
  let t = U(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, N.jsx)(`li`, { className: ot, id: t || void 0, children: e.children })
  );
}
function ur(e) {
  return e.children;
}
function dr(e) {
  let t = U(e.args, `noborder`),
    n = U(e.args, `equalcells`),
    r = U(e.args, `colwidth`);
  return (0, N.jsxs)(`table`, {
    className: d(Ne, `BB_Table`, t && `b20E2IrghSY-`, n && `zJnyxE63CCk-`),
    children: [
      r &&
        (0, N.jsx)(`colgroup`, {
          children: r.split(`,`).map((e, t) => (0, N.jsx)(fr, { width: e }, t)),
        }),
      (0, N.jsx)(`tbody`, { children: e.children }),
    ],
  });
}
function fr(e) {
  let { width: t } = e,
    n;
  return (
    t && parseInt(t) > 0 && (n = { width: `${t}px` }),
    (0, N.jsx)(`col`, { style: n })
  );
}
function pr(e) {
  return (0, N.jsx)(`tr`, {
    className: d(Fe, `BB_TableRow`),
    children: e.children,
  });
}
function mr(e, t) {
  let n = U(t.args, `width`),
    r = U(t.args, `colspan`),
    i = U(t.args, `rowspan`),
    a = {};
  return (
    r && parseInt(r) > 1 && (a.colSpan = parseInt(r)),
    i && parseInt(i) > 1 && (a.rowSpan = parseInt(i)),
    (0, N.jsx)(e, {
      className: d(Pe, e == `td` && `BB_TableData`),
      ...a,
      style: n ? { width: n } : void 0,
      children: t.children,
    })
  );
}
function hr(e) {
  return mr(`th`, e);
}
function gr(e) {
  return mr(`td`, e);
}
function _r(e, t, n, r) {
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
        style: et,
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
function vr(e) {
  let t = !!U(e.args, `expanded`),
    [n, r] = j.useState(t),
    i = U(e.args, `title`),
    a = U(e.args, `collapsed_str`),
    o = U(e.args, `expanded_str`),
    s = _r(U(e.args, `type`), i, a, o);
  return (0, N.jsxs)(`div`, {
    className: d({
      [it]: !0,
      [s.style ?? ``]: s.style != null,
      [void 0]: n,
      [void 0]: !n,
      BBCodeExpanded: n,
      BBCodeCollapsed: !n,
    }),
    children: [
      (0, N.jsxs)(`div`, {
        className: Ke,
        onClick: () => r(!n),
        children: [
          w(n ? s.expanded : s.collapsed),
          (0, N.jsx)(`div`, {
            className: Ge,
            children: (0, N.jsx)(ge, { angle: n ? 180 : 0 }),
          }),
        ],
      }),
      n &&
        (0, N.jsx)(`div`, { className: `Lwo0pX9leRw-`, children: e.children }),
    ],
  });
}
function yr(e) {
  let t = U(e.args, `title`),
    n = U(e.args, `start`) ?? U(e.args, `datetime`),
    r = U(e.args, `end`) ?? U(e.args, `datetime`),
    i = U(e.args, `body`) ?? null,
    a = U(e.args, `location`) ?? null,
    o = U(e.args, `id`) ?? ``,
    s = new Date(n),
    c = `${s.getUTCFullYear()}${(`0` + (s.getUTCMonth() + 1)).slice(-2)}${(`0` + s.getUTCDate()).slice(-2)}T${(`0` + s.getUTCHours()).slice(-2)}${(`0` + s.getUTCMinutes()).slice(-2)}00Z`,
    l = new Date(r),
    u = `${l.getUTCFullYear()}${(`0` + (l.getUTCMonth() + 1)).slice(-2)}${(`0` + l.getUTCDate()).slice(-2)}T${(`0` + l.getUTCHours()).slice(-2)}${(`0` + l.getUTCMinutes()).slice(-2)}00Z`,
    f;
  try {
    let e = `BEGIN:VCALENDAR\r
`;
    ((e += `VERSION:2.0\r
`),
      (e += `BEGIN:VEVENT\r
`),
      (e += `DTSTART:${c}\r\n`),
      (e += `DTEND:${u}\r\n`),
      (e += `SUMMARY:${t.replace(
        `
`,
        `\\n`,
      )}\r\n`),
      i &&
        (e += `DESCRIPTION:${i.replace(
          `
`,
          `\\n`,
        )}\r\n`),
      a &&
        (e += `LOCATION:${a.replace(
          `
`,
          `\\n`,
        )}\r\n`),
      (e += `END:VEVENT\r
`),
      (e += `END:VCALENDAR\r
`),
      (f = `data:text/calendar;charset=utf-8;base64,${xt.fromByteArray(new TextEncoder().encode(e))}`));
  } catch (e) {
    console.error(e);
  }
  let p = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  ((p += `&text=${encodeURI(t)}`),
    (p += `&details=${encodeURI(i)}`),
    (p += `&dates=${encodeURI(c + `/` + u)}`));
  let m = (e) => {
    if (`ReactNativeWebView` in window) {
      let n = window.ReactNativeWebView,
        r = {
          event_name: `addcalendarevent`,
          tsStart: s.getTime(),
          tsEnd: l.getTime(),
          strTitle: t,
          strNotes: i,
          strLocation: a,
        };
      (n.postMessage(JSON.stringify(r)), e.preventDefault());
    }
  };
  return (0, N.jsxs)(`div`, {
    className: d(`SaleSectionCalendarEventContainer`, tt),
    id: o,
    children: [
      f &&
        (0, N.jsx)(`a`, {
          className: d(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: f,
          onClick: m,
          download: `calendar.ics`,
          children: `Apple`,
        }),
      (0, N.jsx)(`a`, {
        className: d(`SaleSectionCalendarEventLink`, Ye),
        href: p,
        children: `Google`,
      }),
      f &&
        (0, N.jsx)(`a`, {
          className: d(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: f,
          onClick: m,
          download: `calendar.ics`,
          children: `Outlook`,
        }),
    ],
  });
}
function br(e) {
  let { text: t = ``, style: n, children: r } = e;
  if (t == null) return (0, N.jsx)(j.Fragment, { children: r });
  let i;
  if (
    ((i =
      t instanceof Array
        ? t.map((e) => (e ? e.toString() : ``)).filter((e) => e.length > 0)
            .join(`
`)
        : t.toString()),
    j.Children.count(r) == 1)
  ) {
    let e = j.Children.only(r);
    return j.cloneElement(e, { "data-copystyle": n, "data-copytext": i });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${n} copytext=${i}`,
    ),
    (0, N.jsx)(j.Fragment, { children: r })
  );
}
var xr = `EYdF9T-t7r0-`,
  Sr = `GlOJIpYSKE4-`,
  Cr = `JQFjcVsL4SA-`,
  wr = `MHuFPh5V6r4-`,
  Tr = `Gwiqr5pL1cE-`,
  Er = `w0e9THby0ZM-`,
  Dr = `_4q--1VsTk5U-`,
  Or = `_669DaDTMhYs-`,
  kr = `dohGHt1ixUc-`,
  Ar = `C9qi0C7EUeo-`,
  jr = `_3XkAznD5HIU-`,
  Mr = `VoTYjMrv1JU-`,
  G = `iiVnY9Z6ikk-`,
  Nr = `KB63E0Y-xPo-`,
  Pr = `_7tqUEqEzFXI-`;
function Fr(e) {
  let { emoticon: t, large: n } = e,
    [r, i] = _e(),
    [a, o] = j.useState(null),
    s = `:${t}:`,
    c = ut(t, n);
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(br, {
        text: s,
        style: `merge-adjacent`,
        children: (0, N.jsx)(`img`, {
          ...i,
          src: c,
          className: d(Cr, n ? wr : void 0),
          "data-emoticon": t,
          alt: t,
          ref: o,
        }),
      }),
      r && a && (0, N.jsx)(Ir, { target: a, emoticon: t }),
    ],
  });
}
function Ir(e) {
  let { target: t, emoticon: n } = e,
    { data: r } = Lr(n);
  return (0, N.jsx)(Rr, {
    target: t,
    title: `:${n}:`,
    subtitle: r && r.app_name ? r.app_name : void 0,
    children: (0, N.jsx)(Fr, { emoticon: n, large: !0 }),
  });
}
function Lr(e) {
  return O({
    queryKey: [`EmoticonHover`, e],
    queryFn: async () => {
      let t = `${s.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(s.LANGUAGE)}&origin=${self.origin}`,
        n = await fetch(t);
      if (n.status != 200)
        throw `Error fetching emoticon: ${n.status} ${n.statusText}`;
      return await n.json();
    },
  });
}
var Rr = ({ target: e, title: t, subtitle: n, children: r }) =>
  (0, N.jsxs)(ye, {
    target: e,
    style: { zIndex: 1700 },
    className: Dr,
    children: [
      r,
      (0, N.jsxs)(`div`, {
        className: Or,
        children: [
          (0, N.jsx)(`div`, {
            className: kr,
            children: t || (0, N.jsx)(`span`, { children: `\xA0` }),
          }),
          (0, N.jsx)(`div`, {
            className: Ar,
            children: n || (0, N.jsx)(`span`, { children: `\xA0` }),
          }),
        ],
      }),
    ],
  });
function zr(e) {
  return new pt(new M());
}
function Br() {
  return new Map([...Array.from(Fn.entries())]);
}
function Vr(e) {
  let { text: t, languageOverride: n } = e,
    [r] = (0, j.useState)(new mt(Br(), zr, n ?? s.LANGUAGE));
  return (0, N.jsx)(N.Fragment, { children: r.ParseBBCode(t, {}) });
}
var Hr = `L3HaktJsWWA-`,
  Ur = `YebKQISqLCs-`,
  Wr = `Ct9yU89TArw-`,
  Gr = `_7-cDUja4KeQ-`,
  Kr = `PBXxHejQZTU-`,
  qr = `JX6irDhLeng-`,
  Jr = D((e) => {
    let t = be(e.photo, p(s.LANGUAGE)),
      n = t ? (typeof t == `string` ? t : t[1]) : void 0,
      r = !!e.title,
      i = !!e.company;
    return (0, N.jsxs)(`div`, {
      className: Wr,
      onMouseLeave: e.fnClose,
      children: [
        (0, N.jsxs)(`div`, {
          className: Gr,
          children: [
            e.photo && (0, N.jsx)(`img`, { src: n }),
            (0, N.jsxs)(`div`, {
              className: Kr,
              children: [
                (0, N.jsx)(`div`, { children: e.name }),
                (r || i) &&
                  (0, N.jsxs)(`div`, {
                    children: [
                      r &&
                        (0, N.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: e.title,
                        }),
                      r && i && (0, N.jsx)(`span`, { children: `, ` }),
                      i && (0, N.jsx)(`span`, { children: e.company }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.bio &&
          (0, N.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              e.bio,
              e.bioString && (0, N.jsx)(Vr, { text: e.bioString }),
            ],
          }),
      ],
    });
  }),
  K = class e extends j.Component {
    static sm_embeddedElements = new oe(`presenter-hover-source-elements`);
    m_refAnchor = j.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      ve() ||
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
          (0, N.jsx)(ye, {
            ...r,
            children: (0, N.jsx)(Jr, { ...this.props, fnClose: this.OnLeave }),
          }),
          i,
        ));
    }
    OnLeave(e) {
      this.ClosePopup();
    }
    render() {
      return (0, N.jsx)(`div`, {
        className: qr,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(l([_], K.prototype, `ClosePopup`, null),
  l([_], K.prototype, `OnScroll`, null),
  l([_], K.prototype, `OnHover`, null),
  l([_], K.prototype, `OnLeave`, null));
function Yr(e) {
  let {
      photo: t,
      name: n,
      title: r,
      company: i,
      hidePhotoInCompactView: a,
    } = e,
    o = be(t, p(s.LANGUAGE)),
    c = o && !a ? (typeof o == `string` ? o : o[1]) : null,
    l = !!r,
    u = !!i;
  return (0, N.jsx)(`div`, {
    className: Hr,
    children: (0, N.jsx)(K, {
      ...e,
      children: (0, N.jsx)(`div`, {
        className: Ur,
        children: (0, N.jsxs)(`div`, {
          className: Gr,
          children: [
            !!c && (0, N.jsx)(`img`, { src: c }),
            (0, N.jsxs)(`div`, {
              className: Kr,
              children: [
                (0, N.jsx)(`div`, { children: n }),
                (l || u) &&
                  (0, N.jsxs)(`div`, {
                    children: [
                      l &&
                        (0, N.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: r,
                        }),
                      l && u && (0, N.jsx)(`span`, { children: `, ` }),
                      u && (0, N.jsx)(`span`, { children: i }),
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
function Xr(e, t, n = !1) {
  return `${e}economy/sticker${n ? `static` : ``}/${encodeURIComponent(t)}`;
}
var Zr = `_6Ymd3Ej4NCU-`,
  Qr = `nnMTzvpAu6Y-`,
  $r = `plDm7MqblvA-`,
  ei = `_0SYoz2hcxOY-`,
  ti = `_6gRC1q99lWw-`,
  ni = `a1l1nhz8GFU-`,
  ri = `wfpm6FahiQY-`,
  ii = `G30RxXBSXck-`,
  ai = `Mw7bdt52AuY-`,
  oi = `_0ZS8IEfJKto-`,
  si = `R-BER3-p7c8-`,
  ci = `nCS2TzxRijY-`,
  q = class extends j.Component {
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
              t === m.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : t === m.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      e.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, N.jsxs)(S, {
        className: Zr,
        onButtonDown: a,
        children: [i && (0, N.jsx)(li, { children: this.RenderTabs() }), r],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: e }, t) => {
        let n = this.state.activeIndex === t;
        return (0, N.jsx)(
          di,
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
function li(e) {
  return (0, N.jsx)(S, {
    className: Qr,
    "flow-children": `row`,
    children: e.children,
  });
}
function ui(e) {
  return (0, N.jsx)(`div`, { className: ni, children: e.children });
}
function di(e) {
  let { active: t, children: n, onClick: r } = e;
  return (0, N.jsx)(S, {
    className: d($r, t && `f-iRFuUHuSo-`),
    focusClassName: ei,
    onActivate: r,
    children: (0, N.jsx)(`div`, {
      className: d(ti, t && `f-iRFuUHuSo-`),
      children: n,
    }),
  });
}
function fi(e) {
  let {
      items: t,
      renderItem: n,
      onItemSelect: r,
      keyExtractor: i,
      renderEmpty: a,
    } = e,
    o = t.map((e, a) =>
      (0, N.jsx)(
        S,
        {
          className: ii,
          onActivate: () => r(t[a]),
          autoFocus: a === 0,
          focusClassName: ei,
          children: n(t[a]),
        },
        i(e),
      ),
    );
  return (
    t.length === 0 && a && (o = a()),
    (0, N.jsx)(S, { "flow-children": `grid`, className: ri, children: o })
  );
}
function pi(e) {
  let { title: t, onFilterChange: n, filter: r, onSubmit: i, ...a } = e;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(ui, {
        children: (0, N.jsx)(hi, {
          title: t,
          children: (0, N.jsx)(fi, { ...a }),
        }),
      }),
      (0, N.jsx)(gi, { value: r, onChange: n, onSubmit: i }),
    ],
  });
}
function mi(e) {
  let { onFilterChange: t, filter: n, sections: r, title: i } = e;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsxs)(ui, {
        children: [
          i && (0, N.jsx)(`div`, { className: `Zcgr0x6gQMc-`, children: i }),
          r.map(({ title: e, ...t }) =>
            (0, N.jsx)(hi, { title: e, children: (0, N.jsx)(fi, { ...t }) }, e),
          ),
        ],
      }),
      (0, N.jsx)(gi, { value: n, onChange: t }),
    ],
  });
}
function hi(e) {
  return (0, N.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, N.jsx)(`div`, { className: ai, children: e.title }),
      (0, N.jsx)(`div`, { className: void 0, children: e.children }),
    ],
  });
}
function gi(e) {
  let { value: t, onChange: n, onSubmit: r } = e;
  return (0, N.jsx)(`div`, {
    className: oi,
    children: (0, N.jsx)(ne, {
      type: `text`,
      placeholder: w(`#AddonPicker_Search`),
      className: si,
      value: t,
      onChange: (e) => n(e.target.value),
      onSubmit: r,
    }),
  });
}
function J(e) {
  let { className: t, ...n } = e;
  return (0, N.jsx)(`div`, { className: d(t, ci), ...n });
}
var _i = 1e3;
function Y(e) {
  return e.recent_emoticons;
}
function vi(e) {
  return e.recent_stickers;
}
function yi(e) {
  return Y(e).length + vi(e).length > 0;
}
function bi(e) {
  let [t, n] = (0, j.useState)(e.is_initialized);
  return (
    (0, j.useEffect)(() => {
      if (!e.is_initialized) {
        e.UpdateEmoticonList();
        let t = k(
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
var xi = D((e) => {
    let {
      emoticonStore: t,
      roomEffectSettings: n,
      strFlairGroupID: r,
      onEmoticonSelected: i,
      onRoomEffectSelected: a,
      onStickerSelected: o,
    } = e;
    bi(t);
    let s = [];
    return (
      yi(t) &&
        s.push({
          renderTab: (e) =>
            (0, N.jsx)(`span`, {
              title: w(`#AddonPicker_RecentlyUsed`),
              className: d(G, Nr, e && void 0),
              children: (0, N.jsx)(Ri, {}),
            }),
          renderContent: () =>
            (0, N.jsx)(Ti, {
              store: t,
              onEmoticonSelect: (e) => i(e.name),
              onStickerSelect: (e) => o(e.name),
              flairGroupID: r,
            }),
        }),
      (0, N.jsx)(y, {
        children: (0, N.jsx)(q, {
          config: [
            ...s,
            {
              renderTab: (e) =>
                (0, N.jsx)(`span`, {
                  title: w(`#AddonPicker_Emoticons`),
                  className: d(G, e && void 0),
                  children: (0, N.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(Ei, {
                  store: t,
                  onItemSelect: (e) => i(e.name),
                  flairGroupID: r,
                }),
            },
            {
              renderTab: (e) =>
                (0, N.jsx)(`span`, {
                  title: w(`#AddonPicker_Stickers`),
                  className: d(G, e && void 0),
                  children: (0, N.jsx)(Ii, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(Di, { store: t, onItemSelect: (e) => o(e.name) }),
            },
            {
              renderTab: (e) =>
                (0, N.jsx)(`span`, {
                  title: w(`#AddonPicker_RoomEffects`),
                  className: d(G, e && void 0),
                  children: (0, N.jsx)(Li, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(Oi, {
                  store: t,
                  effectSettings: n,
                  onItemSelect: (e) => a(e.name),
                }),
            },
          ],
        }),
      })
    );
  }),
  Si = class extends j.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = k(
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
          onEmoticonSelected: t,
          onStickerSelected: n,
          strFlairGroupID: r,
        } = this.props,
        i = [];
      return (
        yi(e) &&
          i.push({
            renderTab: (e) =>
              (0, N.jsx)(`span`, {
                title: w(`#AddonPicker_RecentlyUsed`),
                className: d(G, Nr, e && void 0),
                children: (0, N.jsx)(Ri, {}),
              }),
            renderContent: () =>
              (0, N.jsx)(Ti, {
                store: e,
                onEmoticonSelect: (e) => t(e.name),
                onStickerSelect: (e) => n(e.name),
                flairGroupID: r,
              }),
          }),
        (0, N.jsx)(y, {
          children: (0, N.jsx)(q, {
            config: [
              ...i,
              {
                renderTab: (e) =>
                  (0, N.jsx)(`span`, {
                    title: w(`#AddonPicker_Emoticons`),
                    className: d(G, e && void 0),
                    children: (0, N.jsx)(Q, {}),
                  }),
                renderContent: () =>
                  (0, N.jsx)(Ei, {
                    store: e,
                    onItemSelect: (e) => t(e.name),
                    flairGroupID: r,
                  }),
              },
              {
                renderTab: (e) =>
                  (0, N.jsx)(`span`, {
                    title: w(`#AddonPicker_Stickers`),
                    className: d(G, e && void 0),
                    children: (0, N.jsx)(Ii, {}),
                  }),
                renderContent: () =>
                  (0, N.jsx)(Di, { store: e, onItemSelect: (e) => n(e.name) }),
              },
            ],
          }),
        })
      );
    }
  };
Si = l([D], Si);
var Ci = class extends j.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = k(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, N.jsx)(y, {
        children: (0, N.jsx)(q, {
          config: [
            {
              renderTab: () =>
                (0, N.jsx)(`span`, {
                  title: w(`#AddonPicker_Emoticons`),
                  className: G,
                  children: (0, N.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(ki, {
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
  wi = class extends j.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = k(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, N.jsx)(y, {
        children: (0, N.jsx)(q, {
          config: [
            {
              renderTab: () =>
                (0, N.jsx)(`span`, {
                  title: w(`#AddonPicker_Emoticons`),
                  className: G,
                  children: (0, N.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, N.jsx)(Ai, {
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
  Ti = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, onEmoticonSelect: t, onStickerSelect: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        Y(e) &&
          i.push({
            title: w(`#AddonPicker_RecentEmoticons`),
            items: A.FilterEmoticons(Y(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, N.jsx)(Z, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, N.jsx)(J, {
                children: r
                  ? w(`#AddonPicker_NoResults`)
                  : w(`#AddonPicker_NoRecent`, w(`#AddonPicker_Emoticons`)),
              }),
          }),
        vi(e).length &&
          i.push({
            title: w(`#AddonPicker_RecentStickers`),
            items: A.FilterStickers(vi(e), r),
            onItemSelect: n,
            renderItem: (e) => (0, N.jsx)(ji, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            renderEmpty: () =>
              (0, N.jsx)(J, {
                children: r
                  ? w(`#AddonPicker_NoResults`)
                  : w(`#AddonPicker_NoRecent`, w(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, N.jsx)(mi, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: i,
        })
      );
    }
  },
  Ei = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = !r && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
        a = A.FilterEmoticons(i, r).slice(0, _i);
      return (0, N.jsx)(pi, {
        title: w(`#AddonPicker_Emoticons`),
        items: a,
        onItemSelect: t,
        renderItem: (e) => (0, N.jsx)(Z, { emoticon: e }),
        keyExtractor: (e) => e.name,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => t(a[0]),
        renderEmpty: () =>
          r
            ? (0, N.jsx)(J, { children: w(`#AddonPicker_NoResults`) })
            : (0, N.jsx)(X, {}),
      });
    }
  };
function X() {
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(J, {
        children: w(`#AddonPicker_NoneOwned`, w(`#AddonPicker_Emoticons`)),
      }),
      (0, N.jsx)(J, {
        children: ue(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, N.jsx)(T, {
            href: `${c.STORE_BASE_URL}points/shop/c/emoticons`,
            children: w(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, N.jsx)(T, {
            href: `${c.COMMUNITY_BASE_URL}market`,
            children: w(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var Di = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t } = this.props,
        { filter: n } = this.state,
        r = A.FilterStickers(e.GetStickerList(), n);
      return (0, N.jsx)(pi, {
        title: w(`#EmoticonPicker_StickerHeading`),
        items: r,
        onItemSelect: t,
        renderItem: (e) => (0, N.jsx)(ji, { sticker: e }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: n,
        onSubmit: () => t(r[0]),
        renderEmpty: () =>
          n
            ? (0, N.jsx)(J, { children: w(`#AddonPicker_NoResults`) })
            : (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(J, {
                    children: w(
                      `#AddonPicker_NoneOwned`,
                      w(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, N.jsx)(J, {
                    children: ue(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, N.jsx)(T, {
                        href: `${c.STORE_BASE_URL}points/shop/c/stickers`,
                        children: w(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  Oi = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, effectSettings: t, onItemSelect: n } = this.props,
        { filter: r } = this.state,
        i = e.GetEffectList().filter(({ name: e }) => e.indexOf(r) > -1);
      return (0, N.jsx)(pi, {
        title: w(`#EmoticonPicker_EffectHeading`),
        items: i,
        onItemSelect: n,
        renderItem: (e) => (0, N.jsx)(Ni, { effect: e, roomEffectSettings: t }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => n(i[0]),
        renderEmpty: () =>
          r
            ? (0, N.jsx)(J, { children: w(`#AddonPicker_NoResults`) })
            : (0, N.jsxs)(N.Fragment, {
                children: [
                  (0, N.jsx)(J, {
                    children: w(
                      `#AddonPicker_NoneOwned`,
                      w(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, N.jsx)(J, {
                    children: ue(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, N.jsx)(T, {
                        href: `${c.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: w(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  ki = class extends j.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        Y(e).length &&
          i.push({
            title: w(`#AddonPicker_RecentEmoticons`),
            items: A.FilterEmoticons(Y(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, N.jsx)(Z, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, N.jsx)(J, {
                children: r
                  ? w(`#AddonPicker_NoResults`)
                  : w(`#AddonPicker_NoRecent`, w(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, N.jsx)(mi, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: [
            ...i,
            {
              title: w(`#AddonPicker_AllEmoticons`),
              items: A.FilterStickers(e.emoticon_list, r).slice(0, _i),
              onItemSelect: t,
              renderItem: (e) => (0, N.jsx)(Z, { emoticon: e }),
              keyExtractor: (e) => e.name,
              renderEmpty: () =>
                r
                  ? (0, N.jsx)(J, { children: w(`#AddonPicker_NoResults`) })
                  : (0, N.jsx)(X, {}),
            },
          ],
        })
      );
    }
  };
ki = l([D], ki);
var Ai = class extends j.Component {
  state = { filter: `` };
  render() {
    let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
      { filter: r } = this.state;
    return (0, N.jsx)(mi, {
      onFilterChange: (e) => this.setState({ filter: e }),
      filter: r,
      sections: [
        {
          title: w(`#ChatEntryButton_Flair`),
          items: A.FilterStickers(e.GetFlairListByGroupID(n), r),
          onItemSelect: t,
          renderItem: (e) => (0, N.jsx)(Z, { emoticon: e }),
          keyExtractor: (e) => e.name,
          renderEmpty: () =>
            r
              ? (0, N.jsx)(J, { children: w(`#AddonPicker_NoResults`) })
              : (0, N.jsx)(X, {}),
        },
      ],
    });
  }
};
Ai = l([D], Ai);
var Z = (e) => {
    let { emoticon: t, large: n } = e,
      r = !t.last_used && t.time_received;
    return (0, N.jsxs)(`div`, {
      className: Pr,
      children: [
        (0, N.jsx)(Fr, { emoticon: t.name, large: n }),
        r && (0, N.jsx)(Fi, {}),
      ],
    });
  },
  ji = class extends j.Component {
    state = { showHover: !1 };
    m_ref = j.createRef();
    render() {
      let { sticker: e, className: t, ...n } = this.props,
        r = Xr(c.COMMUNITY_CDN_URL, e.name);
      return (0, N.jsxs)(`div`, {
        ref: this.m_ref,
        className: d(t, Tr),
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        ...n,
        children: [
          (0, N.jsx)(`img`, { style: { width: `100%` }, src: r }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, N.jsx)(Mi, { target: this.m_ref.current, sticker: e }),
        ],
      });
    }
  },
  Mi = D((e) => {
    let {
        target: t,
        sticker: { name: n, appid: r },
      } = e,
      [i] = dt(r, {});
    return (0, N.jsx)(Rr, {
      target: t,
      title: n,
      subtitle: i?.GetName(),
      children: (0, N.jsx)(`img`, {
        src: Xr(c.COMMUNITY_CDN_URL, n),
        className: jr,
      }),
    });
  }),
  Ni = class extends j.Component {
    state = { showHover: !1 };
    m_ref = j.createRef();
    render() {
      let { effect: e, roomEffectSettings: t, className: n, ...r } = this.props,
        i = t[e.name];
      return (0, N.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        className: d(n, Er),
        ...r,
        children: [
          i.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, N.jsx)(Pi, {
              target: this.m_ref.current,
              effect: e,
              roomEffectSettings: t,
            }),
        ],
      });
    }
  },
  Pi = D((e) => {
    let {
        target: t,
        effect: { name: n, appid: r },
        roomEffectSettings: i,
      } = e,
      a = i[n],
      [o] = dt(r, {});
    return (0, N.jsx)(Rr, {
      target: t,
      title: n,
      subtitle: o?.GetName(),
      children: (0, N.jsx)(`div`, {
        className: Mr,
        children: a.renderEffectIcon(),
      }),
    });
  });
function Fi() {
  return (0, N.jsx)(`div`, {
    className: xr,
    children: (0, N.jsx)(`div`, { className: Sr }),
  });
}
function Ii(e) {
  return (0, N.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function Q(e) {
  return (0, N.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, N.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function Li(e) {
  return (0, N.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, N.jsx)(`path`, {
        fill: `currentColor`,
        d: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function Ri(e) {
  let { className: t, ...n } = e;
  return (0, N.jsx)(`svg`, {
    className: d(`SVGIcon_Button SVGIcon_Clock`, t),
    version: `1.1`,
    x: `0px`,
    y: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ...n,
    children: (0, N.jsx)(`path`, {
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
  return o() ? (0, N.jsx)(le, {}) : (0, N.jsx)(ce, {});
}
var Ji = 1576780700,
  $ = class extends j.Component {
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
            ? (0, N.jsx)(xi, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (e) => this.props.OnEmoticonSelected(e, !1),
                roomEffectSettings: o,
                onRoomEffectSelected: s,
                onStickerSelected: c,
              })
            : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
              ? (0, N.jsx)(wi, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, N.jsx)(Ci, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        te(
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
      let { disabled: e, className: t, ttip: n, useImg: r } = this.props,
        i = [t],
        a = !1;
      return (
        e ? i.push(`disabled`) : this.BHaveUnseenEmoticons() && (a = !0),
        n && i.push(`ttip`),
        r
          ? (0, N.jsx)(S, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: w(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, N.jsx)(de, {
                toolTipContent: n,
                children: (0, N.jsx)(`img`, {
                  src: this.props.useImg,
                  className: d(...i),
                  title: this.props.title || w(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (i.push(Wi, Gi),
            (0, N.jsx)(ee, {
              className: d(...i),
              onOKActionDescription: w(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || w(`#ChatEntryButton_Emoticon`),
              disabled: e,
              children: (0, N.jsxs)(de, {
                toolTipContent: n,
                children: [
                  this.props.buttonIcon || (0, N.jsx)(qi, {}),
                  a && (0, N.jsx)(Fi, {}),
                ],
              }),
            }))
      );
    }
  };
(l([_], $.prototype, `OnEmoticonClick`, null), ($ = l([D], $)));
var Yi = $;
export {
  cn as A,
  Bt as B,
  Hn as C,
  kn as D,
  Pn as E,
  Rt as F,
  Ct as G,
  Ft as H,
  zt as I,
  M as J,
  mt as K,
  Pt as L,
  sn as M,
  Xt as N,
  jn as O,
  L as P,
  It as R,
  cr as S,
  Nn as T,
  St as U,
  Lt as V,
  I as W,
  pt as Y,
  Un as _,
  Wi as a,
  sr as b,
  Ui as c,
  K as d,
  Yr as f,
  U as g,
  Fn as h,
  zi as i,
  ln as j,
  Sn as k,
  Fi as l,
  In as m,
  Hi as n,
  Bi as o,
  Fr as p,
  ft as q,
  Vi as r,
  Ki as s,
  Yi as t,
  Jr as u,
  Wn as v,
  rr as w,
  lr as x,
  Gn as y,
  Vt as z,
};
