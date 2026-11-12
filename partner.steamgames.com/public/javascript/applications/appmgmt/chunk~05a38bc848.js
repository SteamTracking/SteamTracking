/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  W as n,
  _t as r,
  en as i,
  gt as a,
  j as o,
  k as s,
  pt as c,
  q as l,
  rt as u,
  sn as d,
  ut as f,
  vt as p,
  z as m,
} from "./chunk~de7f2df91c.js";
import {
  It as h,
  Lt as g,
  Mt as _,
  Ot as v,
  c as ee,
  s as te,
} from "./chunk~25a6634263.js";
import {
  An as ne,
  Cn as y,
  Dn as re,
  Dr as ie,
  Fn as ae,
  Ha as b,
  In as oe,
  Ka as se,
  On as ce,
  Or as le,
  Pn as ue,
  Rn as x,
  U as de,
  Vn as S,
  bn as fe,
  ga as pe,
  gn as me,
  hn as he,
  ia as C,
  jn as ge,
  jt as _e,
  ma as ve,
  no as ye,
  qn as w,
  ua as T,
  zn as be,
  zt as xe,
} from "./chunk~1fa4b8f2ff.js";
import { C as E } from "./chunk~44f252525d.js";
import { n as Se } from "./chunk~f8b6a4beb3.js";
import { t as D } from "./chunk~ede3e357a2.js";
import { n as Ce, o as we, t as Te } from "./chunk~d9c3dab17a.js";
import { n as Ee } from "./chunk~9d71b14b50.js";
import { t as De } from "./chunk~eefd71512b.js";
import { n as Oe, u as ke } from "./chunk~8ceeb46076.js";
import {
  B as Ae,
  C as je,
  D as Me,
  E as Ne,
  F as Pe,
  I as Fe,
  L as Ie,
  M as Le,
  N as Re,
  O as ze,
  P as Be,
  R as Ve,
  S as He,
  W as Ue,
  _ as We,
  a as Ge,
  c as Ke,
  f as qe,
  g as Je,
  h as Ye,
  i as Xe,
  j as Ze,
  m as Qe,
  n as $e,
  o as et,
  p as tt,
  r as nt,
  s as rt,
  t as it,
  u as at,
  v as ot,
  w as st,
  x as ct,
  y as lt,
} from "./chunk~af1574091f.js";
import { v as ut } from "./chunk~2bee5a7d08.js";
import { t as dt } from "./chunk~4571d27d07.js";
import { n as O, r as ft } from "./chunk~967b42dac9.js";
import { n as pt } from "./chunk~a7c5e71e12.js";
var k = d(t(), 1),
  A = class {
    reactNodes = [];
    AppendText(e, t = !1) {
      e.length &&
        (t
          ? this.reactNodes.push(
              k.createElement(
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
  mt = class {
    m_decoratedAccumulator;
    constructor(e) {
      (i(e, `decorated accumulator cannot be null`),
        (this.m_decoratedAccumulator = e));
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
  ht = class extends mt {
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
          n.push(k.createElement(`br`)),
          (t = t.substr(e + 1)));
      (t.length && n.push(t),
        n.forEach((e) => {
          super.AppendNode(e);
        }));
    }
  },
  gt = class extends Ue {
    m_renderingLanguage;
    constructor(e, t, n) {
      (super(e, t ?? (() => new A())),
        (this.m_renderingLanguage = typeof n == `string` ? c(n) : n));
    }
    UpdateOverrideLanguage(e) {
      this.m_renderingLanguage = e;
    }
    ParseBBCode(e, t, n = !0) {
      let r = 0,
        i = this.Parse(
          e,
          (e, n, ...i) =>
            k.createElement(
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
        ? k.createElement(k.Fragment, null, ...i)
        : i.length == 1
          ? i[0]
          : null;
    }
  },
  j = p();
function _t(e) {
  return !(
    (!ne(e.sPoster) && !ge(e.sPoster)) ||
    (e.rgVideoSources && e.rgVideoSources.some((e) => !ge(e.sURL))) ||
    (e.rgVideoTracks && e.rgVideoTracks.some((e) => !ge(e.sURL)))
  );
}
var M = class e {
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
  vt = (0, k.forwardRef)(function (e, t) {
    let {
        video: r,
        bAutoPlay: i,
        bControls: a,
        bLoop: o,
        bMuted: s,
        className: c,
        mediaScale: l,
        flAspectRatio: u,
        onClick: d,
        altText: f,
      } = e,
      p = (0, k.useMemo)(
        () =>
          !!r.rgVideoTracks?.some(
            (e) => e.sKind == `subtitles` || e.sKind == `captions`,
          ),
        [r.rgVideoTracks],
      ),
      [m, h] = k.useState(!1),
      g = yt();
    if (!r.rgVideoSources || !r.rgVideoSources.length) return null;
    let _ = _t(r),
      v;
    (!_ || (p && n.EUNIVERSE == 1)) && (v = `anonymous`);
    let ee = s || (i && M.Get().BVolumePreferenceMuted()),
      te = r.sPoster ? N(r.sPoster, g) : ``;
    return (0, j.jsxs)(`video`, {
      width: `100%`,
      height: `auto`,
      autoPlay: i,
      muted: ee,
      playsInline: !0,
      controls: a,
      poster: te,
      loop: o,
      crossOrigin: v,
      onVolumeChange: (e) => {
        let t = e.target,
          n = t.muted ? 0 : t.volume;
        m && M.Get().SetVolumePreference(n);
      },
      onPlay: (e) => {
        let t = e.target,
          n = t.currentTime == 0,
          r = M.Get().BUserHasVolumePreference();
        if ((h(!0), n)) {
          if (!r && !i) {
            let e = t.muted ? 0 : t.volume;
            M.Get().SetVolumePreference(e);
          } else
            r &&
              ((t.volume = M.Get().GetVolumePreference()),
              (t.muted = M.Get().BVolumePreferenceMuted()));
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
        (0, j.jsx)(bt, {
          rgVideoSources: r.rgVideoSources,
          strCacheBreakOrigin: g,
        }),
        (0, j.jsx)(xt, {
          rgVideoTracks: r.rgVideoTracks,
          strCacheBreakOrigin: g,
        }),
      ],
    });
  });
function yt() {
  let e = window.location.href,
    t = [
      n.STORE_BASE_URL,
      n.COMMUNITY_BASE_URL,
      n.PARTNER_BASE_URL,
      n.HELP_BASE_URL,
      n.STATS_BASE_URL,
      n.STORE_CHECKOUT_BASE_URL,
    ].find((t) => t && e.startsWith(t));
  if (t) return t;
  try {
    return new URL(e).origin + `/`;
  } catch {
    return `unknown`;
  }
}
function N(e, t) {
  if (e) {
    if (ne(e)) return e;
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
function bt(e) {
  let { rgVideoSources: t, strCacheBreakOrigin: n } = e;
  return t
    .filter((e) => !!e.sURL)
    .map((e) =>
      (0, j.jsx)(`source`, { src: N(e.sURL, n), type: e.sFormat }, e.sURL),
    );
}
function xt(e) {
  let { rgVideoTracks: t, strCacheBreakOrigin: n } = e;
  return t
    ? t.map((e, r) =>
        (0, j.jsx)(
          St,
          { track: e, rgVideoTracks: t, strCacheBreakOrigin: n },
          r,
        ),
      )
    : null;
}
function St(e) {
  let { track: t, rgVideoTracks: i, strCacheBreakOrigin: a } = e,
    o = t.eLanguage;
  if (n.EREALM == r.k_ESteamRealmChina) {
    if (C.IsELanguageValidInRealm(o, r.k_ESteamRealmChina))
      o = C.GetELanguageFallback(o);
    else if (o === 6) {
      if (i.find((e) => C.GetELanguageFallback(e.eLanguage) === o)) return null;
    } else return null;
  } else if (!C.IsELanguageValidInRealm(o, r.k_ESteamRealmGlobal)) return null;
  return (0, j.jsx)(`track`, {
    src: N(t.sURL, a),
    kind: t.sKind,
    default: t.bDefault,
    srcLang: f(o),
    label: ve(o),
  });
}
var Ct = d(dt());
function wt(e) {
  let t = B(e, `poster`);
  t &&= x(t);
  let n = [];
  {
    let t = B(e, `mp4`);
    t && n.push({ sURL: x(t), sFormat: `video/mp4` });
    let r = B(e, `webm`);
    r && n.push({ sURL: x(r), sFormat: `video/webm` });
  }
  let r = c(u.LANGUAGE),
    i = r != 0,
    a = [];
  for (let t = 0; t < 32; t++) {
    let n = B(e, `sub_` + f(t));
    n &&
      a.push({
        sURL: x(n),
        eLanguage: t,
        sKind: `subtitles`,
        bDefault: i && t == r,
      });
    let o = B(e, `cap_` + f(t));
    o &&
      a.push({
        sURL: x(o),
        eLanguage: t,
        sKind: `captions`,
        bDefault: i && t == r,
      });
  }
  return { sPoster: t, rgVideoSources: n, rgVideoTracks: a };
}
function Tt(e) {
  let t = wt(e.args);
  return (0, j.jsx)(vt, { video: t, bAutoPlay: !0, bControls: !1, bLoop: !0 });
}
function Et(e) {
  let t = wt(e.args),
    n = e.children ? e.children.toString() : void 0;
  n &&
    n.startsWith(`http`) &&
    t.rgVideoSources.push({ sURL: x(n), sFormat: `video/webm` });
  let r = B(e.args, `autoplay`),
    i = r !== `0` && r !== `off` && r !== `false`,
    a = B(e.args, `controls`),
    o = a !== `0` && a !== `off` && a !== `false`,
    s = B(e.args, `loop`);
  return (0, j.jsx)(vt, {
    video: t,
    bAutoPlay: i,
    bControls: o,
    bLoop: s ? a !== `0` && a !== `off` && a !== `false` : i,
  });
}
var Dt = `m6bojdeQzBM-`,
  Ot = `KNKcwZZR0so-`,
  kt = `OACV7AX319w-`,
  At = `D7GTf0-swcc-`,
  jt = `L7AE1SvWgtA-`,
  Mt = `_7iMZXddr1CI-`,
  Nt = `sNG-BnwzjYs-`,
  Pt = `maYcJlnc0JU-`,
  Ft = `akuZJwBr6xc-`,
  It = `ZfFIRgkpA2M-`,
  Lt = { Box: Dt, Preview: Ot, Type: void 0 };
function Rt(e) {
  return (0, j.jsx)(`img`, {
    className: Ot,
    src: e.strURL || void 0,
    alt: e.strAlt ?? ``,
  });
}
function zt(e) {
  return (0, j.jsx)(`div`, { className: jt, children: e.children });
}
function Bt(e) {
  return (0, j.jsx)(`div`, { className: Mt, children: e.children });
}
function Vt(e) {
  return (0, j.jsx)(`div`, { className: kt, children: e.children });
}
function Ht(e) {
  return (0, j.jsx)(`span`, { className: Ft, children: e.children });
}
function Ut(e) {
  return (0, j.jsx)(`div`, { className: At, children: e.children });
}
function Wt(e) {
  return (0, j.jsx)(`span`, { className: It, children: e.children });
}
function Gt(e) {
  return (0, j.jsx)(`div`, { className: Nt, children: e.children });
}
function Kt(e) {
  return (0, j.jsx)(`div`, { className: Pt, children: e.children });
}
var P = {
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
function qt(e, t) {
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
function Jt(e) {
  switch (e.preference_state) {
    case 0:
    case 1:
      return !1;
    default:
      return !0;
  }
}
async function Yt(e, t, n, r) {
  if (a(r)) return { version: 1, preference_state: 0 };
  if (t) {
    let t = (await we.GetCookiePreferences(e, {}))
      .Body()
      .toObject().preferences;
    if (t && t.version !== void 0 && t.version != 0) return t;
  }
  try {
    let e = Te(Ce);
    if (e) {
      let t = JSON.parse(e);
      if (t && t.version !== void 0 && t.version != 0) return t;
    }
  } catch {}
  return n in P.eucountries || n in P.eeacountries || n === `CH`
    ? { version: 1, preference_state: 4 }
    : { version: 1, preference_state: 0 };
}
function Xt(e) {
  return {
    queryKey: [`CookiePreferences`],
    queryFn: () => Yt(e, l.logged_in, n.COUNTRY, n.EREALM),
  };
}
function Zt() {
  let e = Se();
  return D(Xt(e));
}
function Qt(e) {
  let { data: t } = Zt();
  return t ? qt(t, e) : void 0;
}
function $t() {
  let { data: e } = Zt();
  return e ? !Jt(e) : void 0;
}
var en = 20,
  tn = /^.*youtube[^v]+v=(.{11}).*/,
  nn = /^.*youtu\.be\/(.{11}).*/,
  rn = /^.*youtube.*\/embed\/(.{11}).*/,
  an = /^.*[?&]t=([^&]+)(?:&|$)/,
  on = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
function sn(e) {
  return (
    e?.length < en ? void 0 : tn.exec(e) || nn.exec(e) || rn.exec(e)
  )?.[1];
}
function cn(e) {
  return an.exec(e)?.[1];
}
function ln(e) {
  let t = on.exec(e);
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
function un(e) {
  let t = sn(e);
  if (!t) return;
  let n = cn(e);
  return { strVideoID: t, nStartSeconds: n ? ln(n) : void 0 };
}
function dn(e) {
  let t = w(e, e.options);
  return (0, j.jsx)(`span`, { ref: t, style: { fontSize: 0 } });
}
var fn = k.forwardRef(function (e, t) {
    let { onLeave: n, onEnter: r, options: i, ...a } = e,
      o = w(e, e.options),
      s = v(o, t);
    return (0, j.jsx)(`div`, { ref: s, ...a });
  }),
  F = 0,
  I = [];
function pn(e) {
  if (F == 2) e && e();
  else {
    if (F == 0) {
      let e = document.createElement(`script`);
      e.src = `https://www.youtube.com/iframe_api`;
      let t = document.getElementsByTagName(`script`)[0];
      (t.parentNode?.insertBefore(e, t), (window.onYouTubeIframeAPIReady = hn));
    }
    e && (I.includes(e) || I.push(e));
  }
}
function mn(e) {
  g(I, e);
}
function hn() {
  F = 2;
  for (let e of I) e();
  I = [];
}
var L = class e extends k.Component {
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
    (this.DestroyPlayer(), mn(this.OnYoutubeScriptsReady));
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
      pn(this.OnYoutubeScriptsReady));
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
    return (0, j.jsx)(gn, {
      video: this.props.video,
      children: (0, j.jsx)(
        fn,
        {
          onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
          ref: this.BindPlayerContainer,
          className: o(`YoutubePlayer`, this.props.classnames),
          children: (0, j.jsx)(De, { className: `YoutubePlayerThrobber` }),
        },
        this.m_strPlayerID,
      ),
    });
  }
};
(e([h], L.prototype, `BindPlayerContainer`, null),
  e([h], L.prototype, `OnYoutubeScriptsReady`, null),
  e([h], L.prototype, `CreatePlayer`, null),
  e([h], L.prototype, `OnPlayerReady`, null),
  e([h], L.prototype, `OnPlayerStateChange`, null),
  e([h], L.prototype, `OnError`, null),
  e([h], L.prototype, `OnPlayerLeftView`, null),
  e([h], L.prototype, `PlayVideo`, null));
function gn(e) {
  let { video: t, children: n } = e;
  return Qt(`youtube`)
    ? n
    : (0, j.jsx)(`a`, {
        href: `https://www.youtube.com/watch?v=${t}`,
        children: T(`#EventCalendar_WatchYouTubeVideo`),
      });
}
function _n(e) {
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
function vn(e) {
  let { video: t, autopause: n, className: r } = e,
    i = k.useRef(null),
    a = k.useRef(null),
    o = k.useCallback(() => i.current?.pauseVideo(), []),
    s = w({ onLeave: n ? o : void 0 }),
    c = v(a, s);
  return (
    k.useEffect(() => {
      let e = () => {
        a.current && (i.current = new YT.Player(a.current, {}));
      };
      return (
        n && pn(e),
        () => {
          (mn(e), (i.current = null));
        }
      );
    }, [n]),
    (0, j.jsx)(`iframe`, {
      ref: c,
      className: r,
      src: _n(e),
      title: t,
      allow: `autoplay; encrypted-media; picture-in-picture; web-share`,
      allowFullScreen: !0,
      frameBorder: 0,
    })
  );
}
function R(e) {
  return e
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, `&`);
}
async function yn(e) {
  let t =
      n.STORE_BASE_URL +
      `events/ajaxgetdynamiceventmetadata?` +
      new URLSearchParams(e).toString(),
    r = await fetch(t, { credentials: `include` });
  if (!r.ok) throw Error(`${t} answered ${r.status}`);
  return await r.json();
}
function bn(e) {
  return [`DynamicEventMetadata`, `youtube`, e];
}
function xn(e, t = !0) {
  return {
    queryKey: bn(e),
    queryFn: async () => {
      let t = await yn({ youtubevideoids: e }),
        n = t.youtube?.find((t) => t.videoid == e) ?? t.youtube?.[0];
      if (!n) throw Error(`no metadata for youtube video ${e}`);
      return { ...n, title: R(n.title), description: R(n.description) };
    },
    enabled: t && !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Sn(e, t = !0) {
  return D(xn(e, t));
}
function Cn(e) {
  return [`DynamicEventMetadata`, `sharedfile`, e];
}
function wn(e) {
  return {
    queryKey: Cn(e),
    queryFn: async () => {
      let t = await yn({ sharedfileids: e }),
        n =
          t.sharedfiles?.find((t) => t.sharedfileid == e) ?? t.sharedfiles?.[0];
      if (!n) throw Error(`no metadata for shared file ${e}`);
      return {
        ...n,
        title: R(n.title),
        description: R(n.description),
        type: R(n.type),
      };
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Tn(e) {
  return D(wn(e));
}
var En = `brm0OeRsTm4-`,
  Dn = `pcxkPBR3wVQ-`,
  On = `Mamx1lJ2lKQ-`,
  kn = `MCiiNDFcgvA-`,
  An = `wDoQNUlMcwk-`,
  jn = `AiYAf8NbQ-E-`,
  Mn = (function (e) {
    return (
      (e.left = `leftthumb`),
      (e.right = `rightthumb`),
      (e.full = `full`),
      (e.summary = `summary`),
      e
    );
  })({});
function Nn(e) {
  return e == `full` ? On : o(Dn, e == `leftthumb` ? An : jn);
}
function z(e) {
  let {
      videoID: t,
      bShowVideoImmediately: r,
      bAutoPlay: i,
      nStartSeconds: a,
      align: s = `full`,
    } = e,
    [c, l] = (0, k.useState)(!r),
    { data: u, isSuccess: d } = Sn(t, c);
  if (c) {
    let e = u?.title ?? T(`#Loading`),
      n = u?.views ?? `0`,
      r = u?.description ?? ``,
      i = () => l(!1);
    return (0, j.jsxs)(`div`, {
      className: Lt.Box,
      role: `button`,
      tabIndex: 0,
      onClick: i,
      onKeyDown: (e) => {
        (e.key == `Enter` || e.key == ` `) && (e.preventDefault(), i());
      },
      children: [
        (0, j.jsx)(Rt, {
          strURL: `https://img.youtube.com/vi/` + t + `/0.jpg`,
        }),
        (0, j.jsxs)(zt, {
          children: [
            (0, j.jsx)(Bt, {
              children: T(`#EventEditor_YouTubeVideoTitle`, e),
            }),
            (0, j.jsx)(Gt, {
              children: T(`#EventEditor_YouTubeVideoViews`, Ee(Number(n))),
            }),
            (0, j.jsxs)(Kt, {
              children: [d && r, !d && (0, j.jsx)(De, { size: `medium` })],
            }),
          ],
        }),
      ],
    });
  }
  return (0, j.jsx)(gn, {
    video: t,
    children: (0, j.jsxs)(`div`, {
      className: o(En, Nn(s)),
      id: t,
      children: [
        (0, j.jsx)(`img`, {
          className: kn,
          alt: ``,
          src:
            n.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, j.jsx)(vn, {
          video: t,
          autoplay: i ?? !1,
          startSeconds: a,
          controls: !0,
          playsInline: !0,
          autopause: !0,
          showFullscreenBtn: !0,
        }),
      ],
    }),
  });
}
function Pn(e, t) {
  if (n.EREALM === r.k_ESteamRealmChina) return null;
  let i = un(e);
  return i?.strVideoID === void 0
    ? Oe(e, t?.event)
    : (0, j.jsx)(z, {
        videoID: i.strVideoID,
        nStartSeconds: i.nStartSeconds,
        bShowVideoImmediately: !1,
      });
}
function Fn() {
  return n.EREALM === r.k_ESteamRealmChina;
}
function In(e) {
  if (Fn()) return null;
  let t = B(e.args);
  if (t) {
    let e = t.split(`;`);
    if (e.length == 2) {
      let t = e[0],
        n = e[1].toLocaleLowerCase();
      return (0, j.jsx)(z, { videoID: t, align: n, bShowVideoImmediately: !0 });
    }
  }
  return (0, j.jsx)(k.Fragment, {});
}
function Ln(e) {
  if (Fn() || n.COUNTRY.toLocaleUpperCase() == `CN`) return Et(e);
  let t = B(e.args, `youtubeid`),
    r = B(e.args, `size`),
    i = B(e.args, `seconds`);
  return (0, j.jsx)(z, {
    videoID: t,
    nStartSeconds: i ? Number.parseInt(i) : void 0,
    align: r,
    bShowVideoImmediately: !0,
  });
}
var Rn = new Map([
  [`b`, { Constructor: Bn, autocloses: !1 }],
  [`i`, { Constructor: Vn, autocloses: !1 }],
  [`h1`, { Constructor: Kn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h2`, { Constructor: qn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h3`, { Constructor: Jn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h4`, { Constructor: Yn, autocloses: !1, skipFollowingNewline: !0 }],
  [`h5`, { Constructor: Xn, autocloses: !1, skipFollowingNewline: !0 }],
  [`center`, { Constructor: Zn, autocloses: !1 }],
  [`smalltext`, { Constructor: Qn, autocloses: !1, skipFollowingNewline: !0 }],
  [`u`, { Constructor: Hn, autocloses: !1 }],
  [`strike`, { Constructor: Un, autocloses: !1 }],
  [`spoiler`, { Constructor: $n, autocloses: !1 }],
  [`hr`, { Constructor: er, autocloses: !1 }],
  [`noparse`, { Constructor: pr, autocloses: !1 }],
  [`url`, { Constructor: rr, autocloses: !1 }],
  [`quote`, { Constructor: or, autocloses: !1 }],
  [`pullquote`, { Constructor: sr, autocloses: !1 }],
  [`code`, { Constructor: cr, autocloses: !1 }],
  [`c`, { Constructor: lr, autocloses: !1 }],
  [`list`, { Constructor: ur, autocloses: !1, skipInternalNewline: !0 }],
  [`olist`, { Constructor: dr, autocloses: !1, skipInternalNewline: !0 }],
  [`*`, { Constructor: fr, autocloses: !0, skipInternalNewline: !0 }],
  [`table`, { Constructor: mr, autocloses: !1, skipInternalNewline: !0 }],
  [
    `tr`,
    {
      Constructor: gr,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `th`,
    {
      Constructor: vr,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `td`,
    {
      Constructor: yr,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  ],
  [
    `expand`,
    {
      Constructor: xr,
      autocloses: !1,
      skipInternalNewline: !0,
      allowWrapTextForCopying: !0,
    },
  ],
  [`calendarevent`, { Constructor: Sr, autocloses: !0 }],
  [`doclink`, { Constructor: ir, autocloses: !1 }],
  [`color`, { Constructor: tr, autocloses: !1 }],
  [`bgcolor`, { Constructor: nr, autocloses: !1 }],
  [`p`, { Constructor: Wn, autocloses: !1, skipFollowingNewline: !0 }],
]);
function B(e, t) {
  return t === void 0 ? e[``] : e[t];
}
function zn(e, t) {
  return (n) => e({ ...n, className: t });
}
function Bn(e) {
  return (0, j.jsx)(`b`, { className: $e, children: e.children });
}
function Vn(e) {
  return (0, j.jsx)(`i`, {
    className: o(ct, `BB_Italic`),
    children: e.children,
  });
}
function Hn(e) {
  return (0, j.jsx)(`u`, { className: Ve, children: e.children });
}
function Un(e) {
  return (0, j.jsx)(`s`, { className: Be, children: e.children });
}
function Wn(e) {
  return (0, j.jsxs)(`p`, {
    className: Me,
    children: [e.children, (0, j.jsx)(`wbr`, {})],
  });
}
function Gn(e) {
  return (0, j.jsxs)(`div`, {
    className: Me,
    role: `paragraph`,
    children: [e.children, (0, j.jsx)(`wbr`, {})],
  });
}
function V(e, t, n) {
  let r = B(t.args, `id`);
  return (
    (r ||= B(t.args)),
    r &&
      typeof r == `string` &&
      r.length > 0 &&
      r[0] === `#` &&
      (r = r.substring(1)),
    (0, j.jsx)(e, {
      id: r || void 0,
      className: o(n, t.className),
      children: t.children,
    })
  );
}
function Kn(e) {
  return V(`h1`, e, o(Ye, `BB_Header1`));
}
function qn(e) {
  return V(`h2`, e, o(Je, `BB_Header2`));
}
function Jn(e) {
  return V(`h3`, e, o(We, `BB_Header3`));
}
function Yn(e) {
  return V(`h4`, e, o(ot, `BB_Header4`));
}
function Xn(e) {
  return V(`h5`, e, o(lt, `BB_Header5`));
}
function Zn(e) {
  let t = B(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, j.jsx)(`span`, {
      id: t || void 0,
      className: o(Ge, `BB_Center`),
      children: e.children,
    })
  );
}
function Qn(e) {
  return V(`div`, e, o(Ze, `BB_SmallText`));
}
function $n(e) {
  let [t, n] = k.useState(!1),
    r = k.useCallback(() => {
      n(!t);
    }, [t]);
  return (0, j.jsx)(b, {
    className: o(Le, t && `YDb-da9VezY-`),
    focusable: !0,
    onActivate: r,
    onOKActionDescription: T(
      t ? `#Bbcode_Spoiler_Hide` : `#Bbcode_Spoiler_Show`,
    ),
    children: (0, j.jsx)(`span`, { className: Re, children: e.children }),
  });
}
function er(e) {
  return (0, j.jsx)(`hr`, { className: Qe });
}
function tr(e) {
  let t = B(e.args);
  return (0, j.jsx)(`span`, { style: { color: t }, children: e.children });
}
function nr(e) {
  let t = B(e.args);
  return (0, j.jsx)(`span`, {
    style: { backgroundColor: t },
    children: e.children,
  });
}
function rr(e) {
  let t = Ae(B(e.args));
  if (!t) {
    let n = e.children;
    typeof n == `string` && oe(n) && (t = Ae(n));
  }
  let n = B(e.args, `style`) == `button` ? He : void 0,
    r = n && B(e.args, `buttoncolor`),
    i = B(e.args, `id`);
  return (
    i &&
      typeof i == `string` &&
      i.length > 0 &&
      i[0] === `#` &&
      (i = i.substring(1)),
    t === void 0 && !i
      ? e.children || ``
      : t === void 0 || (typeof t == `string` && t.length > 0 && t[0] == `#`)
        ? (0, j.jsx)(`a`, { href: t ?? null, id: i, children: e.children })
        : (0, j.jsx)(ar, {
            className: n,
            href: t,
            id: i,
            style: { backgroundColor: r },
            children: e.children,
          })
  );
}
function ir(e) {
  let t = B(e.args),
    n = B(e.args, `style`) == `button` ? He : void 0,
    r = n && B(e.args, `buttoncolor`);
  return (0, j.jsx)(ar, {
    className: n,
    style: { backgroundColor: r },
    href: `${u.PARTNER_BASE_URL}doc/${t}`,
    children: e.children,
  });
}
var ar = (e) => {
  let { href: t, ...n } = e,
    r = ke(t ?? ``),
    i;
  re(r)
    ? ((r = (u.IN_CLIENT ? `steam://openurl_external/` : ``) + ce(r)),
      (i = `noopener nofollow`))
    : (r = ae(r));
  let a =
    typeof e.children == `string` &&
    e.children.length > 0 &&
    t &&
    !t.startsWith(`steam://`)
      ? ue(t)
      : void 0;
  return (0, j.jsx)(he, {
    toolTipContent: a,
    direction: `top`,
    children: (0, j.jsx)(te, { ...n, href: r, rel: i, children: e.children }),
  });
};
function or(e) {
  let t = B(e.args, `author`);
  return (0, j.jsxs)(`blockquote`, {
    className: o(it, e.className),
    children: [
      !!t &&
        (0, j.jsxs)(`div`, {
          className: `iZjggU7O-fs-`,
          children: [
            T(`#Bbcode_Originally_Posted_By`) + ` `,
            ` `,
            (0, j.jsx)(`b`, { children: t + `:` }),
          ],
        }),
      e.children,
    ],
  });
}
function sr(e) {
  return (0, j.jsx)(`div`, { className: ze, children: e.children });
}
function cr(e) {
  return (0, j.jsx)(`code`, { className: rt, children: e.children });
}
function lr(e) {
  return (0, j.jsx)(`code`, { className: et, children: e.children });
}
function ur(e) {
  return (0, j.jsx)(`ul`, {
    className: o(je, `bullets`),
    children: e.children,
  });
}
function dr(e) {
  return (0, j.jsx)(`ol`, { className: Ne, children: e.children });
}
function fr(e) {
  let t = B(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, j.jsx)(`li`, { className: st, id: t || void 0, children: e.children })
  );
}
function pr(e) {
  return e.children;
}
function mr(e) {
  let t = B(e.args, `noborder`),
    n = B(e.args, `equalcells`),
    r = B(e.args, `colwidth`);
  return (0, j.jsxs)(`table`, {
    className: o(Pe, `BB_Table`, t && `b20E2IrghSY-`, n && `zJnyxE63CCk-`),
    children: [
      r &&
        (0, j.jsx)(`colgroup`, {
          children: r.split(`,`).map((e, t) => (0, j.jsx)(hr, { width: e }, t)),
        }),
      (0, j.jsx)(`tbody`, { children: e.children }),
    ],
  });
}
function hr(e) {
  let { width: t } = e,
    n;
  return (
    t && parseInt(t) > 0 && (n = { width: `${t}px` }),
    (0, j.jsx)(`col`, { style: n })
  );
}
function gr(e) {
  return (0, j.jsx)(`tr`, {
    className: o(Ie, `BB_TableRow`),
    children: e.children,
  });
}
function _r(e, t) {
  let n = B(t.args, `width`),
    r = B(t.args, `colspan`),
    i = B(t.args, `rowspan`),
    a = {};
  return (
    r && parseInt(r) > 1 && (a.colSpan = parseInt(r)),
    i && parseInt(i) > 1 && (a.rowSpan = parseInt(i)),
    (0, j.jsx)(e, {
      className: o(Fe, e == `td` && `BB_TableData`),
      ...a,
      style: n ? { width: n } : void 0,
      children: t.children,
    })
  );
}
function vr(e) {
  return _r(`th`, e);
}
function yr(e) {
  return _r(`td`, e);
}
function br(e, t, n, r) {
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
        style: tt,
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
function xr(e) {
  let t = !!B(e.args, `expanded`),
    [n, r] = k.useState(t),
    i = B(e.args, `title`),
    a = B(e.args, `collapsed_str`),
    s = B(e.args, `expanded_str`),
    c = br(B(e.args, `type`), i, a, s);
  return (0, j.jsxs)(`div`, {
    className: o({
      [at]: !0,
      [c.style ?? ``]: c.style != null,
      [void 0]: n,
      [void 0]: !n,
      BBCodeExpanded: n,
      BBCodeCollapsed: !n,
    }),
    children: [
      (0, j.jsxs)(`div`, {
        className: qe,
        onClick: () => r(!n),
        children: [
          T(n ? c.expanded : c.collapsed),
          (0, j.jsx)(`div`, {
            className: Ke,
            children: (0, j.jsx)(le, { angle: n ? 180 : 0 }),
          }),
        ],
      }),
      n &&
        (0, j.jsx)(`div`, { className: `Lwo0pX9leRw-`, children: e.children }),
    ],
  });
}
function Sr(e) {
  let t = B(e.args, `title`),
    n = B(e.args, `start`) ?? B(e.args, `datetime`),
    r = B(e.args, `end`) ?? B(e.args, `datetime`),
    i = B(e.args, `body`) ?? null,
    a = B(e.args, `location`) ?? null,
    s = B(e.args, `id`) ?? ``,
    c = new Date(n),
    l = `${c.getUTCFullYear()}${(`0` + (c.getUTCMonth() + 1)).slice(-2)}${(`0` + c.getUTCDate()).slice(-2)}T${(`0` + c.getUTCHours()).slice(-2)}${(`0` + c.getUTCMinutes()).slice(-2)}00Z`,
    u = new Date(r),
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
      (f = `data:text/calendar;charset=utf-8;base64,${Ct.fromByteArray(new TextEncoder().encode(e))}`));
  } catch (e) {
    console.error(e);
  }
  let p = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  ((p += `&text=${encodeURI(t)}`),
    (p += `&details=${encodeURI(i)}`),
    (p += `&dates=${encodeURI(l + `/` + d)}`));
  let m = (e) => {
    if (`ReactNativeWebView` in window) {
      let n = window.ReactNativeWebView,
        r = {
          event_name: `addcalendarevent`,
          tsStart: c.getTime(),
          tsEnd: u.getTime(),
          strTitle: t,
          strNotes: i,
          strLocation: a,
        };
      (n.postMessage(JSON.stringify(r)), e.preventDefault());
    }
  };
  return (0, j.jsxs)(`div`, {
    className: o(`SaleSectionCalendarEventContainer`, nt),
    id: s,
    children: [
      f &&
        (0, j.jsx)(`a`, {
          className: o(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: f,
          onClick: m,
          download: `calendar.ics`,
          children: `Apple`,
        }),
      (0, j.jsx)(`a`, {
        className: o(`SaleSectionCalendarEventLink`, Xe),
        href: p,
        children: `Google`,
      }),
      f &&
        (0, j.jsx)(`a`, {
          className: o(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: f,
          onClick: m,
          download: `calendar.ics`,
          children: `Outlook`,
        }),
    ],
  });
}
function Cr(e) {
  let { text: t = ``, style: n, children: r } = e;
  if (t == null) return (0, j.jsx)(k.Fragment, { children: r });
  let i;
  if (
    ((i =
      t instanceof Array
        ? t.map((e) => (e ? e.toString() : ``)).filter((e) => e.length > 0)
            .join(`
`)
        : t.toString()),
    k.Children.count(r) == 1)
  ) {
    let e = k.Children.only(r);
    return k.cloneElement(e, { "data-copystyle": n, "data-copytext": i });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${n} copytext=${i}`,
    ),
    (0, j.jsx)(k.Fragment, { children: r })
  );
}
var wr = `EYdF9T-t7r0-`,
  Tr = `GlOJIpYSKE4-`,
  Er = `JQFjcVsL4SA-`,
  Dr = `MHuFPh5V6r4-`,
  Or = `Gwiqr5pL1cE-`,
  kr = `w0e9THby0ZM-`,
  Ar = `_4q--1VsTk5U-`,
  jr = `_669DaDTMhYs-`,
  Mr = `dohGHt1ixUc-`,
  Nr = `C9qi0C7EUeo-`,
  Pr = `_3XkAznD5HIU-`,
  Fr = `VoTYjMrv1JU-`,
  H = `iiVnY9Z6ikk-`,
  Ir = `KB63E0Y-xPo-`,
  Lr = `_7tqUEqEzFXI-`;
function U(e) {
  let { emoticon: t, large: n } = e,
    [r, i] = se(),
    [a, s] = k.useState(null),
    c = `:${t}:`,
    l = ft(t, n);
  return (0, j.jsxs)(j.Fragment, {
    children: [
      (0, j.jsx)(Cr, {
        text: c,
        style: `merge-adjacent`,
        children: (0, j.jsx)(`img`, {
          ...i,
          src: l,
          className: o(Er, n ? Dr : void 0),
          "data-emoticon": t,
          alt: t,
          ref: s,
        }),
      }),
      r && a && (0, j.jsx)(Rr, { target: a, emoticon: t }),
    ],
  });
}
function Rr(e) {
  let { target: t, emoticon: n } = e,
    { data: r } = zr(n);
  return (0, j.jsx)(W, {
    target: t,
    title: `:${n}:`,
    subtitle: r && r.app_name ? r.app_name : void 0,
    children: (0, j.jsx)(U, { emoticon: n, large: !0 }),
  });
}
function zr(e) {
  return D({
    queryKey: [`EmoticonHover`, e],
    queryFn: async () => {
      let t = `${n.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(n.LANGUAGE)}&origin=${self.origin}`,
        r = await fetch(t);
      if (r.status != 200)
        throw `Error fetching emoticon: ${r.status} ${r.statusText}`;
      return await r.json();
    },
  });
}
var W = ({ target: e, title: t, subtitle: n, children: r }) =>
  (0, j.jsxs)(fe, {
    target: e,
    style: { zIndex: 1700 },
    className: Ar,
    children: [
      r,
      (0, j.jsxs)(`div`, {
        className: jr,
        children: [
          (0, j.jsx)(`div`, {
            className: Mr,
            children: t || (0, j.jsx)(`span`, { children: `\xA0` }),
          }),
          (0, j.jsx)(`div`, {
            className: Nr,
            children: n || (0, j.jsx)(`span`, { children: `\xA0` }),
          }),
        ],
      }),
    ],
  });
function Br(e) {
  return new ht(new A());
}
function Vr() {
  return new Map([...Array.from(Rn.entries())]);
}
function Hr(e) {
  let { text: t, languageOverride: r } = e,
    [i] = (0, k.useState)(new gt(Vr(), Br, r ?? n.LANGUAGE));
  return (0, j.jsx)(j.Fragment, { children: i.ParseBBCode(t, {}) });
}
var Ur = `L3HaktJsWWA-`,
  Wr = `YebKQISqLCs-`,
  Gr = `Ct9yU89TArw-`,
  Kr = `_7-cDUja4KeQ-`,
  qr = `PBXxHejQZTU-`,
  Jr = `JX6irDhLeng-`,
  Yr = E((e) => {
    let t = ut(e.photo, c(n.LANGUAGE)),
      r = t ? (typeof t == `string` ? t : t[1]) : void 0,
      i = !!e.title,
      a = !!e.company;
    return (0, j.jsxs)(`div`, {
      className: Gr,
      onMouseLeave: e.fnClose,
      children: [
        (0, j.jsxs)(`div`, {
          className: Kr,
          children: [
            e.photo && (0, j.jsx)(`img`, { src: r }),
            (0, j.jsxs)(`div`, {
              className: qr,
              children: [
                (0, j.jsx)(`div`, { children: e.name }),
                (i || a) &&
                  (0, j.jsxs)(`div`, {
                    children: [
                      i &&
                        (0, j.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: e.title,
                        }),
                      i && a && (0, j.jsx)(`span`, { children: `, ` }),
                      a && (0, j.jsx)(`span`, { children: e.company }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.bio &&
          (0, j.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              e.bio,
              e.bioString && (0, j.jsx)(Hr, { text: e.bioString }),
            ],
          }),
      ],
    });
  }),
  G = class e extends k.Component {
    static sm_embeddedElements = new _e(`presenter-hover-source-elements`);
    m_refAnchor = k.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      ye() ||
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
          (0, j.jsx)(fe, {
            ...r,
            children: (0, j.jsx)(Yr, { ...this.props, fnClose: this.OnLeave }),
          }),
          i,
        ));
    }
    OnLeave(e) {
      this.ClosePopup();
    }
    render() {
      return (0, j.jsx)(`div`, {
        className: Jr,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(e([h], G.prototype, `ClosePopup`, null),
  e([h], G.prototype, `OnScroll`, null),
  e([h], G.prototype, `OnHover`, null),
  e([h], G.prototype, `OnLeave`, null));
function Xr(e) {
  let {
      photo: t,
      name: r,
      title: i,
      company: a,
      hidePhotoInCompactView: o,
    } = e,
    s = ut(t, c(n.LANGUAGE)),
    l = s && !o ? (typeof s == `string` ? s : s[1]) : null,
    u = !!i,
    d = !!a;
  return (0, j.jsx)(`div`, {
    className: Ur,
    children: (0, j.jsx)(G, {
      ...e,
      children: (0, j.jsx)(`div`, {
        className: Wr,
        children: (0, j.jsxs)(`div`, {
          className: Kr,
          children: [
            !!l && (0, j.jsx)(`img`, { src: l }),
            (0, j.jsxs)(`div`, {
              className: qr,
              children: [
                (0, j.jsx)(`div`, { children: r }),
                (u || d) &&
                  (0, j.jsxs)(`div`, {
                    children: [
                      u &&
                        (0, j.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: i,
                        }),
                      u && d && (0, j.jsx)(`span`, { children: `, ` }),
                      d && (0, j.jsx)(`span`, { children: a }),
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
function Zr(e, t, n = !1) {
  return `${e}economy/sticker${n ? `static` : ``}/${encodeURIComponent(t)}`;
}
var Qr = `_6Ymd3Ej4NCU-`,
  $r = `nnMTzvpAu6Y-`,
  ei = `plDm7MqblvA-`,
  ti = `_0SYoz2hcxOY-`,
  ni = `_6gRC1q99lWw-`,
  ri = `a1l1nhz8GFU-`,
  ii = `wfpm6FahiQY-`,
  ai = `G30RxXBSXck-`,
  oi = `Mw7bdt52AuY-`,
  si = `_0ZS8IEfJKto-`,
  ci = `R-BER3-p7c8-`,
  li = `nCS2TzxRijY-`,
  K = class extends k.Component {
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
              t === _.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : t === _.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      e.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, j.jsxs)(b, {
        className: Qr,
        onButtonDown: a,
        children: [i && (0, j.jsx)(ui, { children: this.RenderTabs() }), r],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: e }, t) => {
        let n = this.state.activeIndex === t;
        return (0, j.jsx)(
          fi,
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
function ui(e) {
  return (0, j.jsx)(b, {
    className: $r,
    "flow-children": `row`,
    children: e.children,
  });
}
function di(e) {
  return (0, j.jsx)(`div`, { className: ri, children: e.children });
}
function fi(e) {
  let { active: t, children: n, onClick: r } = e;
  return (0, j.jsx)(b, {
    className: o(ei, t && `f-iRFuUHuSo-`),
    focusClassName: ti,
    onActivate: r,
    children: (0, j.jsx)(`div`, {
      className: o(ni, t && `f-iRFuUHuSo-`),
      children: n,
    }),
  });
}
function pi(e) {
  let {
      items: t,
      renderItem: n,
      onItemSelect: r,
      keyExtractor: i,
      renderEmpty: a,
    } = e,
    o = t.map((e, a) =>
      (0, j.jsx)(
        b,
        {
          className: ai,
          onActivate: () => r(t[a]),
          autoFocus: a === 0,
          focusClassName: ti,
          children: n(t[a]),
        },
        i(e),
      ),
    );
  return (
    t.length === 0 && a && (o = a()),
    (0, j.jsx)(b, { "flow-children": `grid`, className: ii, children: o })
  );
}
function q(e) {
  let { title: t, onFilterChange: n, filter: r, onSubmit: i, ...a } = e;
  return (0, j.jsxs)(j.Fragment, {
    children: [
      (0, j.jsx)(di, {
        children: (0, j.jsx)(mi, {
          title: t,
          children: (0, j.jsx)(pi, { ...a }),
        }),
      }),
      (0, j.jsx)(hi, { value: r, onChange: n, onSubmit: i }),
    ],
  });
}
function J(e) {
  let { onFilterChange: t, filter: n, sections: r, title: i } = e;
  return (0, j.jsxs)(j.Fragment, {
    children: [
      (0, j.jsxs)(di, {
        children: [
          i && (0, j.jsx)(`div`, { className: `Zcgr0x6gQMc-`, children: i }),
          r.map(({ title: e, ...t }) =>
            (0, j.jsx)(mi, { title: e, children: (0, j.jsx)(pi, { ...t }) }, e),
          ),
        ],
      }),
      (0, j.jsx)(hi, { value: n, onChange: t }),
    ],
  });
}
function mi(e) {
  return (0, j.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, j.jsx)(`div`, { className: oi, children: e.title }),
      (0, j.jsx)(`div`, { className: void 0, children: e.children }),
    ],
  });
}
function hi(e) {
  let { value: t, onChange: n, onSubmit: r } = e;
  return (0, j.jsx)(`div`, {
    className: si,
    children: (0, j.jsx)(xe, {
      type: `text`,
      placeholder: T(`#AddonPicker_Search`),
      className: ci,
      value: t,
      onChange: (e) => n(e.target.value),
      onSubmit: r,
    }),
  });
}
function Y(e) {
  let { className: t, ...n } = e;
  return (0, j.jsx)(`div`, { className: o(t, li), ...n });
}
var gi = 1e3;
function X(e) {
  return e.recent_emoticons;
}
function _i(e) {
  return e.recent_stickers;
}
function vi(e) {
  return X(e).length + _i(e).length > 0;
}
function yi(e) {
  let [t, n] = (0, k.useState)(e.is_initialized);
  return (
    (0, k.useEffect)(() => {
      if (!e.is_initialized) {
        e.UpdateEmoticonList();
        let t = s(
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
var bi = E((e) => {
    let {
      emoticonStore: t,
      roomEffectSettings: n,
      strFlairGroupID: r,
      onEmoticonSelected: i,
      onRoomEffectSelected: a,
      onStickerSelected: s,
    } = e;
    yi(t);
    let c = [];
    return (
      vi(t) &&
        c.push({
          renderTab: (e) =>
            (0, j.jsx)(`span`, {
              title: T(`#AddonPicker_RecentlyUsed`),
              className: o(H, Ir, e && void 0),
              children: (0, j.jsx)(Ri, {}),
            }),
          renderContent: () =>
            (0, j.jsx)(wi, {
              store: t,
              onEmoticonSelect: (e) => i(e.name),
              onStickerSelect: (e) => s(e.name),
              flairGroupID: r,
            }),
        }),
      (0, j.jsx)(S, {
        children: (0, j.jsx)(K, {
          config: [
            ...c,
            {
              renderTab: (e) =>
                (0, j.jsx)(`span`, {
                  title: T(`#AddonPicker_Emoticons`),
                  className: o(H, e && void 0),
                  children: (0, j.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, j.jsx)(Ti, {
                  store: t,
                  onItemSelect: (e) => i(e.name),
                  flairGroupID: r,
                }),
            },
            {
              renderTab: (e) =>
                (0, j.jsx)(`span`, {
                  title: T(`#AddonPicker_Stickers`),
                  className: o(H, e && void 0),
                  children: (0, j.jsx)(Ii, {}),
                }),
              renderContent: () =>
                (0, j.jsx)(Di, { store: t, onItemSelect: (e) => s(e.name) }),
            },
            {
              renderTab: (e) =>
                (0, j.jsx)(`span`, {
                  title: T(`#AddonPicker_RoomEffects`),
                  className: o(H, e && void 0),
                  children: (0, j.jsx)(Li, {}),
                }),
              renderContent: () =>
                (0, j.jsx)(Oi, {
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
  xi = class extends k.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = s(
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
        vi(e) &&
          i.push({
            renderTab: (e) =>
              (0, j.jsx)(`span`, {
                title: T(`#AddonPicker_RecentlyUsed`),
                className: o(H, Ir, e && void 0),
                children: (0, j.jsx)(Ri, {}),
              }),
            renderContent: () =>
              (0, j.jsx)(wi, {
                store: e,
                onEmoticonSelect: (e) => t(e.name),
                onStickerSelect: (e) => n(e.name),
                flairGroupID: r,
              }),
          }),
        (0, j.jsx)(S, {
          children: (0, j.jsx)(K, {
            config: [
              ...i,
              {
                renderTab: (e) =>
                  (0, j.jsx)(`span`, {
                    title: T(`#AddonPicker_Emoticons`),
                    className: o(H, e && void 0),
                    children: (0, j.jsx)(Q, {}),
                  }),
                renderContent: () =>
                  (0, j.jsx)(Ti, {
                    store: e,
                    onItemSelect: (e) => t(e.name),
                    flairGroupID: r,
                  }),
              },
              {
                renderTab: (e) =>
                  (0, j.jsx)(`span`, {
                    title: T(`#AddonPicker_Stickers`),
                    className: o(H, e && void 0),
                    children: (0, j.jsx)(Ii, {}),
                  }),
                renderContent: () =>
                  (0, j.jsx)(Di, { store: e, onItemSelect: (e) => n(e.name) }),
              },
            ],
          }),
        })
      );
    }
  };
xi = e([E], xi);
var Si = class extends k.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = s(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, j.jsx)(S, {
        children: (0, j.jsx)(K, {
          config: [
            {
              renderTab: () =>
                (0, j.jsx)(`span`, {
                  title: T(`#AddonPicker_Emoticons`),
                  className: H,
                  children: (0, j.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, j.jsx)(ki, {
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
  Ci = class extends k.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = s(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, j.jsx)(S, {
        children: (0, j.jsx)(K, {
          config: [
            {
              renderTab: () =>
                (0, j.jsx)(`span`, {
                  title: T(`#AddonPicker_Emoticons`),
                  className: H,
                  children: (0, j.jsx)(Q, {}),
                }),
              renderContent: () =>
                (0, j.jsx)(Ai, {
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
  wi = class extends k.Component {
    state = { filter: `` };
    render() {
      let { store: e, onEmoticonSelect: t, onStickerSelect: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        X(e) &&
          i.push({
            title: T(`#AddonPicker_RecentEmoticons`),
            items: O.FilterEmoticons(X(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, j.jsx)(Z, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, j.jsx)(Y, {
                children: r
                  ? T(`#AddonPicker_NoResults`)
                  : T(`#AddonPicker_NoRecent`, T(`#AddonPicker_Emoticons`)),
              }),
          }),
        _i(e).length &&
          i.push({
            title: T(`#AddonPicker_RecentStickers`),
            items: O.FilterStickers(_i(e), r),
            onItemSelect: n,
            renderItem: (e) => (0, j.jsx)(ji, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            renderEmpty: () =>
              (0, j.jsx)(Y, {
                children: r
                  ? T(`#AddonPicker_NoResults`)
                  : T(`#AddonPicker_NoRecent`, T(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, j.jsx)(J, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: i,
        })
      );
    }
  },
  Ti = class extends k.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = !r && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
        a = O.FilterEmoticons(i, r).slice(0, gi);
      return (0, j.jsx)(q, {
        title: T(`#AddonPicker_Emoticons`),
        items: a,
        onItemSelect: t,
        renderItem: (e) => (0, j.jsx)(Z, { emoticon: e }),
        keyExtractor: (e) => e.name,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => t(a[0]),
        renderEmpty: () =>
          r
            ? (0, j.jsx)(Y, { children: T(`#AddonPicker_NoResults`) })
            : (0, j.jsx)(Ei, {}),
      });
    }
  };
function Ei() {
  return (0, j.jsxs)(j.Fragment, {
    children: [
      (0, j.jsx)(Y, {
        children: T(`#AddonPicker_NoneOwned`, T(`#AddonPicker_Emoticons`)),
      }),
      (0, j.jsx)(Y, {
        children: pe(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, j.jsx)(y, {
            href: `${u.STORE_BASE_URL}points/shop/c/emoticons`,
            children: T(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, j.jsx)(y, {
            href: `${u.COMMUNITY_BASE_URL}market`,
            children: T(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var Di = class extends k.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t } = this.props,
        { filter: n } = this.state,
        r = O.FilterStickers(e.GetStickerList(), n);
      return (0, j.jsx)(q, {
        title: T(`#EmoticonPicker_StickerHeading`),
        items: r,
        onItemSelect: t,
        renderItem: (e) => (0, j.jsx)(ji, { sticker: e }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: n,
        onSubmit: () => t(r[0]),
        renderEmpty: () =>
          n
            ? (0, j.jsx)(Y, { children: T(`#AddonPicker_NoResults`) })
            : (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)(Y, {
                    children: T(
                      `#AddonPicker_NoneOwned`,
                      T(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, j.jsx)(Y, {
                    children: pe(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, j.jsx)(y, {
                        href: `${u.STORE_BASE_URL}points/shop/c/stickers`,
                        children: T(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  Oi = class extends k.Component {
    state = { filter: `` };
    render() {
      let { store: e, effectSettings: t, onItemSelect: n } = this.props,
        { filter: r } = this.state,
        i = e.GetEffectList().filter(({ name: e }) => e.indexOf(r) > -1);
      return (0, j.jsx)(q, {
        title: T(`#EmoticonPicker_EffectHeading`),
        items: i,
        onItemSelect: n,
        renderItem: (e) => (0, j.jsx)(Ni, { effect: e, roomEffectSettings: t }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => n(i[0]),
        renderEmpty: () =>
          r
            ? (0, j.jsx)(Y, { children: T(`#AddonPicker_NoResults`) })
            : (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)(Y, {
                    children: T(
                      `#AddonPicker_NoneOwned`,
                      T(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, j.jsx)(Y, {
                    children: pe(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, j.jsx)(y, {
                        href: `${u.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: T(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  ki = class extends k.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        X(e).length &&
          i.push({
            title: T(`#AddonPicker_RecentEmoticons`),
            items: O.FilterEmoticons(X(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, j.jsx)(Z, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, j.jsx)(Y, {
                children: r
                  ? T(`#AddonPicker_NoResults`)
                  : T(`#AddonPicker_NoRecent`, T(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, j.jsx)(J, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: [
            ...i,
            {
              title: T(`#AddonPicker_AllEmoticons`),
              items: O.FilterStickers(e.emoticon_list, r).slice(0, gi),
              onItemSelect: t,
              renderItem: (e) => (0, j.jsx)(Z, { emoticon: e }),
              keyExtractor: (e) => e.name,
              renderEmpty: () =>
                r
                  ? (0, j.jsx)(Y, { children: T(`#AddonPicker_NoResults`) })
                  : (0, j.jsx)(Ei, {}),
            },
          ],
        })
      );
    }
  };
ki = e([E], ki);
var Ai = class extends k.Component {
  state = { filter: `` };
  render() {
    let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
      { filter: r } = this.state;
    return (0, j.jsx)(J, {
      onFilterChange: (e) => this.setState({ filter: e }),
      filter: r,
      sections: [
        {
          title: T(`#ChatEntryButton_Flair`),
          items: O.FilterStickers(e.GetFlairListByGroupID(n), r),
          onItemSelect: t,
          renderItem: (e) => (0, j.jsx)(Z, { emoticon: e }),
          keyExtractor: (e) => e.name,
          renderEmpty: () =>
            r
              ? (0, j.jsx)(Y, { children: T(`#AddonPicker_NoResults`) })
              : (0, j.jsx)(Ei, {}),
        },
      ],
    });
  }
};
Ai = e([E], Ai);
var Z = (e) => {
    let { emoticon: t, large: n } = e,
      r = !t.last_used && t.time_received;
    return (0, j.jsxs)(`div`, {
      className: Lr,
      children: [
        (0, j.jsx)(U, { emoticon: t.name, large: n }),
        r && (0, j.jsx)(Fi, {}),
      ],
    });
  },
  ji = class extends k.Component {
    state = { showHover: !1 };
    m_ref = k.createRef();
    render() {
      let { sticker: e, className: t, ...n } = this.props,
        r = Zr(u.COMMUNITY_CDN_URL, e.name);
      return (0, j.jsxs)(`div`, {
        ref: this.m_ref,
        className: o(t, Or),
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        ...n,
        children: [
          (0, j.jsx)(`img`, { style: { width: `100%` }, src: r }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, j.jsx)(Mi, { target: this.m_ref.current, sticker: e }),
        ],
      });
    }
  },
  Mi = E((e) => {
    let {
        target: t,
        sticker: { name: n, appid: r },
      } = e,
      [i] = pt(r, {});
    return (0, j.jsx)(W, {
      target: t,
      title: n,
      subtitle: i?.GetName(),
      children: (0, j.jsx)(`img`, {
        src: Zr(u.COMMUNITY_CDN_URL, n),
        className: Pr,
      }),
    });
  }),
  Ni = class extends k.Component {
    state = { showHover: !1 };
    m_ref = k.createRef();
    render() {
      let { effect: e, roomEffectSettings: t, className: n, ...r } = this.props,
        i = t[e.name];
      return (0, j.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        className: o(n, kr),
        ...r,
        children: [
          i.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, j.jsx)(Pi, {
              target: this.m_ref.current,
              effect: e,
              roomEffectSettings: t,
            }),
        ],
      });
    }
  },
  Pi = E((e) => {
    let {
        target: t,
        effect: { name: n, appid: r },
        roomEffectSettings: i,
      } = e,
      a = i[n],
      [o] = pt(r, {});
    return (0, j.jsx)(W, {
      target: t,
      title: n,
      subtitle: o?.GetName(),
      children: (0, j.jsx)(`div`, {
        className: Fr,
        children: a.renderEffectIcon(),
      }),
    });
  });
function Fi() {
  return (0, j.jsx)(`div`, {
    className: wr,
    children: (0, j.jsx)(`div`, { className: Tr }),
  });
}
function Ii(e) {
  return (0, j.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function Q(e) {
  return (0, j.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, j.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function Li(e) {
  return (0, j.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, j.jsx)(`path`, {
        fill: `currentColor`,
        d: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function Ri(e) {
  let { className: t, ...n } = e;
  return (0, j.jsx)(`svg`, {
    className: o(`SVGIcon_Button SVGIcon_Clock`, t),
    version: `1.1`,
    x: `0px`,
    y: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ...n,
    children: (0, j.jsx)(`path`, {
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
  return m() ? (0, j.jsx)(de, {}) : (0, j.jsx)(ie, {});
}
var Ji = 1576780700,
  $ = class extends k.Component {
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
            ? (0, j.jsx)(bi, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (e) => this.props.OnEmoticonSelected(e, !1),
                roomEffectSettings: o,
                onRoomEffectSelected: s,
                onStickerSelected: c,
              })
            : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
              ? (0, j.jsx)(Ci, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, j.jsx)(Si, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        be(
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
          ? (0, j.jsx)(b, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: T(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, j.jsx)(me, {
                toolTipContent: n,
                children: (0, j.jsx)(`img`, {
                  src: this.props.useImg,
                  className: o(...i),
                  title: this.props.title || T(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (i.push(Wi, Gi),
            (0, j.jsx)(ee, {
              className: o(...i),
              onOKActionDescription: T(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || T(`#ChatEntryButton_Emoticon`),
              disabled: e,
              children: (0, j.jsxs)(me, {
                toolTipContent: n,
                children: [
                  this.props.buttonIcon || (0, j.jsx)(qi, {}),
                  a && (0, j.jsx)(Fi, {}),
                ],
              }),
            }))
      );
    }
  };
(e([h], $.prototype, `OnEmoticonClick`, null), ($ = e([E], $)));
var Yi = $;
export {
  dn as A,
  Ut as B,
  Gn as C,
  Mn as D,
  Ln as E,
  Vt as F,
  Et as G,
  Rt as H,
  Ht as I,
  A as J,
  gt as K,
  Lt as L,
  un as M,
  $t as N,
  Pn as O,
  P,
  zt as R,
  dr as S,
  In as T,
  Tt as U,
  Bt as V,
  wt as W,
  ht as Y,
  Kn as _,
  Wi as a,
  ur as b,
  Ui as c,
  G as d,
  Xr as f,
  B as g,
  Rn as h,
  zi as i,
  fn as j,
  Tn as k,
  Fi as l,
  zn as m,
  Hi as n,
  Bi as o,
  U as p,
  mt as q,
  Vi as r,
  Ki as s,
  Yi as t,
  Yr as u,
  qn as v,
  or as w,
  fr as x,
  Jn as y,
  Wt as z,
};
