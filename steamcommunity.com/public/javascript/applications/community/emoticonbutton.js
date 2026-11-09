/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  C as t,
  Ft as n,
  H as r,
  It as i,
  K as a,
  Pt as o,
  ot as s,
} from "./libraries.js";
import { t as c } from "./throbber.js";
import { i as l, r as u, t as d } from "./reactbbcodeparser.js";
import {
  A as f,
  B as p,
  C as m,
  E as h,
  F as ee,
  H as te,
  I as ne,
  L as re,
  O as ie,
  P as ae,
  R as oe,
  T as se,
  W as ce,
  _ as le,
  a as ue,
  b as de,
  c as fe,
  d as pe,
  g as me,
  h as he,
  i as ge,
  k as _e,
  l as ve,
  m as ye,
  n as be,
  o as xe,
  p as Se,
  r as Ce,
  s as we,
  v as Te,
  w as Ee,
  y as De,
  z as Oe,
} from "./bbcodes.module.js";
import { t as ke } from "./numberformats.js";
import { n as Ae } from "./storeitemhooks.js";
import {
  $d as je,
  $m as g,
  Ah as _,
  As as Me,
  Bh as Ne,
  Cs as v,
  Cu as y,
  Dh as b,
  Ds as Pe,
  Ef as x,
  Eh as S,
  Es as C,
  Gd as w,
  Gs as T,
  Im as Fe,
  Is as E,
  Lm as D,
  Mh as O,
  Ms as Ie,
  Mu as Le,
  Ns as Re,
  Nu as ze,
  Oh as k,
  Ph as A,
  Ps as Be,
  Th as j,
  Uf as Ve,
  Um as He,
  Us as Ue,
  Uu as We,
  Wo as Ge,
  Zd as M,
  _m as Ke,
  bs as qe,
  dm as N,
  ei as Je,
  em as P,
  fa as Ye,
  g as Xe,
  gs as Ze,
  hm as Qe,
  hs as $e,
  il as et,
  jc as tt,
  jh as F,
  js as nt,
  kc as rt,
  kd as it,
  kh as I,
  ks as at,
  m as L,
  nt as ot,
  qm as st,
  qp as ct,
  rm as lt,
  tf as ut,
  wd as dt,
  xm as ft,
  xu as R,
} from "./main.js";
var z = e(o()),
  B = s();
function pt(e) {
  let {
      rgSources: t,
      onIncrementalError: n,
      onError: r,
      strAltText: i,
      ref: a,
      ...o
    } = e,
    [s, c] = z.useState(0),
    l = z.useMemo(() => JSON.stringify(t), [t]),
    [u, d] = z.useState(l);
  u != l && (d(l), c(0));
  let f = z.useMemo(() => {
      let n = ``;
      return (
        t && t.length > s && (n = t[s]),
        (n ||=
          (console.warn(`MultiSourceImage created with no image src`, e, s),
          `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`)),
        n
      );
    }, [t, s, e]),
    p = z.useCallback(
      (e) => {
        n?.(e, t[s], s);
        let i = s + 1;
        (i >= t.length && r && r(e), i < t.length && c(i));
      },
      [s, r, n, t],
    ),
    m = z.useRef(null);
  return (
    z.useImperativeHandle(
      a,
      () => ({ imgRef: m, nSourceIndex: s, nSourceLength: t.length }),
      [m, s, t],
    ),
    z.useEffect(() => {
      let e = m.current;
      e?.complete && e.naturalWidth == 0 && (e.src = e.src);
    }, []),
    (0, B.jsx)(`img`, { ref: m, ...o, src: f, onError: p, alt: i }, u)
  );
}
var mt = e(i());
function ht(e) {
  let t = e?.jsondata?.read_more_link;
  if (!t) return;
  let n = nt(t).toLocaleLowerCase();
  return n ? [n] : void 0;
}
function gt(e, t) {
  return C(e, ht(t));
}
function _t(e, t) {
  if (!e) return ``;
  if (!C(e)) return Re(e);
  let n = gt(e, t) ? Pe(e) : e;
  return (P.IN_CLIENT ? `steam://openurl_external/` : ``) + n;
}
function vt(e, t, n) {
  let r = e.toLowerCase().startsWith(`http`) ? e : `http://` + e;
  return (0, B.jsx)(yt, { url: r, event: t, children: n || e });
}
var yt = (e) => {
  let { url: t, event: n, className: r, style: i } = e,
    a = Je(t);
  a = _t(a, n);
  let o = C(a) ? `noopener nofollow` : void 0,
    s =
      typeof e.children == `string` &&
      e.children.length > 0 &&
      t &&
      !t.startsWith(`steam://`)
        ? Ie(t)
        : void 0;
  return (0, B.jsx)($e, {
    toolTipContent: s,
    direction: `top`,
    children: (0, B.jsx)(Le, {
      className: r,
      href: a,
      rel: o,
      id: e.id,
      style: i,
      children: e.children,
    }),
  });
};
function bt(e) {
  return !(
    (!at(e.sPoster) && !Me(e.sPoster)) ||
    (e.rgVideoSources && e.rgVideoSources.some((e) => !Me(e.sURL))) ||
    (e.rgVideoTracks && e.rgVideoTracks.some((e) => !Me(e.sURL)))
  );
}
var V = class e {
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
  xt = (0, z.forwardRef)(function (e, t) {
    let {
        video: n,
        bAutoPlay: r,
        bControls: i,
        bLoop: a,
        bMuted: o,
        className: s,
        mediaScale: c,
        flAspectRatio: l,
        onClick: u,
        altText: d,
      } = e,
      f = (0, z.useMemo)(
        () =>
          !!n.rgVideoTracks?.some(
            (e) => e.sKind == `subtitles` || e.sKind == `captions`,
          ),
        [n.rgVideoTracks],
      ),
      [p, m] = z.useState(!1),
      h = St();
    if (!n.rgVideoSources || !n.rgVideoSources.length) return null;
    let ee = bt(n),
      te;
    (!ee || (f && P.EUNIVERSE == 1)) && (te = `anonymous`);
    let ne = o || (r && V.Get().BVolumePreferenceMuted()),
      re = n.sPoster ? Ct(n.sPoster, h) : ``;
    return (0, B.jsxs)(`video`, {
      width: `100%`,
      height: `auto`,
      autoPlay: r,
      muted: ne,
      playsInline: !0,
      controls: i,
      poster: re,
      loop: a,
      crossOrigin: te,
      onVolumeChange: (e) => {
        let t = e.target,
          n = t.muted ? 0 : t.volume;
        p && V.Get().SetVolumePreference(n);
      },
      onPlay: (e) => {
        let t = e.target,
          n = t.currentTime == 0,
          i = V.Get().BUserHasVolumePreference();
        if ((m(!0), n)) {
          if (!i && !r) {
            let e = t.muted ? 0 : t.volume;
            V.Get().SetVolumePreference(e);
          } else
            i &&
              ((t.volume = V.Get().GetVolumePreference()),
              (t.muted = V.Get().BVolumePreferenceMuted()));
        }
      },
      ref: t,
      className: s,
      onClick: u,
      "aria-label": d,
      style: {
        width: c && c >= 1 && c < 100 ? `${c}%` : void 0,
        aspectRatio: l || void 0,
      },
      children: [
        (0, B.jsx)(wt, {
          rgVideoSources: n.rgVideoSources,
          strCacheBreakOrigin: h,
        }),
        (0, B.jsx)(Tt, {
          rgVideoTracks: n.rgVideoTracks,
          strCacheBreakOrigin: h,
        }),
      ],
    });
  });
function St() {
  let e = window.location.href,
    t = [
      P.STORE_BASE_URL,
      P.COMMUNITY_BASE_URL,
      P.PARTNER_BASE_URL,
      P.HELP_BASE_URL,
      P.STATS_BASE_URL,
      P.STORE_CHECKOUT_BASE_URL,
    ].find((t) => t && e.startsWith(t));
  if (t) return t;
  try {
    return new URL(e).origin + `/`;
  } catch {
    return `unknown`;
  }
}
function Ct(e, t) {
  if (e) {
    if (at(e)) return e;
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
function wt(e) {
  let { rgVideoSources: t, strCacheBreakOrigin: n } = e;
  return t
    .filter((e) => !!e.sURL)
    .map((e) =>
      (0, B.jsx)(`source`, { src: Ct(e.sURL, n), type: e.sFormat }, e.sURL),
    );
}
function Tt(e) {
  let { rgVideoTracks: t, strCacheBreakOrigin: n } = e;
  return t
    ? t.map((e, r) =>
        (0, B.jsx)(
          Et,
          { track: e, rgVideoTracks: t, strCacheBreakOrigin: n },
          r,
        ),
      )
    : null;
}
function Et(e) {
  let { track: t, rgVideoTracks: n, strCacheBreakOrigin: r } = e,
    i = t.eLanguage;
  if (P.EREALM == D.k_ESteamRealmChina) {
    if (w.IsELanguageValidInRealm(i, D.k_ESteamRealmChina))
      i = w.GetELanguageFallback(i);
    else if (i === 6) {
      if (n.find((e) => w.GetELanguageFallback(e.eLanguage) === i)) return null;
    } else return null;
  } else if (!w.IsELanguageValidInRealm(i, D.k_ESteamRealmGlobal)) return null;
  return (0, B.jsx)(`track`, {
    src: Ct(t.sURL, r),
    kind: t.sKind,
    default: t.bDefault,
    srcLang: He(i),
    label: je(i),
  });
}
function Dt(e) {
  let t = K(e, `poster`);
  t &&= E(t);
  let n = [];
  {
    let t = K(e, `mp4`);
    t && n.push({ sURL: E(t), sFormat: `video/mp4` });
    let r = K(e, `webm`);
    r && n.push({ sURL: E(r), sFormat: `video/webm` });
  }
  let r = st(N.LANGUAGE),
    i = r != 0,
    a = [];
  for (let t = 0; t < 32; t++) {
    let n = K(e, `sub_` + He(t));
    n &&
      a.push({
        sURL: E(n),
        eLanguage: t,
        sKind: `subtitles`,
        bDefault: i && t == r,
      });
    let o = K(e, `cap_` + He(t));
    o &&
      a.push({
        sURL: E(o),
        eLanguage: t,
        sKind: `captions`,
        bDefault: i && t == r,
      });
  }
  return { sPoster: t, rgVideoSources: n, rgVideoTracks: a };
}
function Ot(e) {
  let t = Dt(e.args);
  return (0, B.jsx)(xt, { video: t, bAutoPlay: !0, bControls: !1, bLoop: !0 });
}
function kt(e) {
  let t = Dt(e.args),
    n = e.children ? e.children.toString() : void 0;
  n &&
    n.startsWith(`http`) &&
    t.rgVideoSources.push({ sURL: E(n), sFormat: `video/webm` });
  let r = K(e.args, `autoplay`),
    i = r !== `0` && r !== `off` && r !== `false`,
    a = K(e.args, `controls`),
    o = a !== `0` && a !== `off` && a !== `false`,
    s = K(e.args, `loop`);
  return (0, B.jsx)(xt, {
    video: t,
    bAutoPlay: i,
    bControls: o,
    bLoop: s ? a !== `0` && a !== `off` && a !== `false` : i,
  });
}
var At = `m6bojdeQzBM-`,
  jt = `KNKcwZZR0so-`,
  Mt = `OACV7AX319w-`,
  Nt = `D7GTf0-swcc-`,
  Pt = `oknukvR2bfs-`,
  Ft = `Kvlx6JWGlW4-`,
  It = `L7AE1SvWgtA-`,
  Lt = `_7iMZXddr1CI-`,
  Rt = `sNG-BnwzjYs-`,
  zt = `maYcJlnc0JU-`,
  Bt = `akuZJwBr6xc-`,
  Vt = `ZfFIRgkpA2M-`,
  Ht = { Box: At, Preview: jt, Type: void 0 };
function Ut(e) {
  return (0, B.jsx)(`img`, {
    className: jt,
    src: e.strURL || void 0,
    alt: e.strAlt ?? ``,
  });
}
function Wt(e) {
  return (0, B.jsx)(`div`, { className: It, children: e.children });
}
function Gt(e) {
  return (0, B.jsx)(`div`, { className: Lt, children: e.children });
}
function Kt(e) {
  return (0, B.jsx)(`div`, { className: Mt, children: e.children });
}
function qt(e) {
  return (0, B.jsx)(`span`, { className: Bt, children: e.children });
}
function Jt(e) {
  return (0, B.jsx)(`div`, { className: Nt, children: e.children });
}
function Yt(e) {
  return (0, B.jsx)(`span`, { className: Vt, children: e.children });
}
function Xt(e) {
  return (0, B.jsx)(`div`, { className: Rt, children: e.children });
}
function Zt(e) {
  return (0, B.jsx)(`div`, { className: zt, children: e.children });
}
var Qt = {
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
function $t(e, t) {
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
function en(e) {
  switch (e.preference_state) {
    case 0:
    case 1:
      return !1;
    default:
      return !0;
  }
}
async function tn(e, t, n, r) {
  if (Fe(r)) return { version: 1, preference_state: 0 };
  if (t) {
    let t = (await ft.GetCookiePreferences(e, {}))
      .Body()
      .toObject().preferences;
    if (t && t.version !== void 0 && t.version != 0) return t;
  }
  try {
    let e = Qe(Ke);
    if (e) {
      let t = JSON.parse(e);
      if (t && t.version !== void 0 && t.version != 0) return t;
    }
  } catch {}
  return n in Qt.eucountries || n in Qt.eeacountries || n === `CH`
    ? { version: 1, preference_state: 4 }
    : { version: 1, preference_state: 0 };
}
function nn(e) {
  return {
    queryKey: [`CookiePreferences`],
    queryFn: () => tn(e, lt.logged_in, P.COUNTRY, P.EREALM),
  };
}
function rn() {
  let e = ct();
  return a(nn(e));
}
function an(e) {
  let { data: t } = rn();
  return t ? $t(t, e) : void 0;
}
function on() {
  let { data: e } = rn();
  return e ? !en(e) : void 0;
}
var sn = 20,
  cn = /^.*youtube[^v]+v=(.{11}).*/,
  ln = /^.*youtu\.be\/(.{11}).*/,
  un = /^.*youtube.*\/embed\/(.{11}).*/,
  dn = /^.*[?&]t=([^&]+)(?:&|$)/,
  fn = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
function pn(e) {
  return !!mn(e);
}
function mn(e) {
  return (
    e?.length < sn ? void 0 : cn.exec(e) || ln.exec(e) || un.exec(e)
  )?.[1];
}
function hn(e) {
  return dn.exec(e)?.[1];
}
function gn(e) {
  let t = fn.exec(e);
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
function _n(e) {
  let t = mn(e);
  if (!t) return;
  let n = hn(e);
  return { strVideoID: t, nStartSeconds: n ? gn(n) : void 0 };
}
function vn(e) {
  let t = ot(e, e.options);
  return (0, B.jsx)(`span`, { ref: t, style: { fontSize: 0 } });
}
var yn = z.forwardRef(function (e, t) {
    let { onLeave: n, onEnter: r, options: i, ...a } = e,
      o = ot(e, e.options),
      s = it(o, t);
    return (0, B.jsx)(`div`, { ref: s, ...a });
  }),
  bn = 0,
  H = [];
function xn(e) {
  if (bn == 2) e && e();
  else {
    if (bn == 0) {
      let e = document.createElement(`script`);
      e.src = `https://www.youtube.com/iframe_api`;
      let t = document.getElementsByTagName(`script`)[0];
      (t.parentNode?.insertBefore(e, t), (window.onYouTubeIframeAPIReady = wn));
    }
    e && (H.includes(e) || H.push(e));
  }
}
function Sn(e = !0) {
  let t = an(`youtube`);
  (0, z.useEffect)(() => {
    t && e && xn();
  }, [t, e]);
}
function Cn(e) {
  Ne(H, e);
}
function wn() {
  bn = 2;
  for (let e of H) e();
  H = [];
}
var U = class e extends z.Component {
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
    (this.DestroyPlayer(), Cn(this.OnYoutubeScriptsReady));
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
      xn(this.OnYoutubeScriptsReady));
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
    return (0, B.jsx)(Tn, {
      video: this.props.video,
      children: (0, B.jsx)(
        yn,
        {
          onLeave: this.props.autopause ? this.OnPlayerLeftView : void 0,
          ref: this.BindPlayerContainer,
          className: R(`YoutubePlayer`, this.props.classnames),
          children: (0, B.jsx)(c, { className: `YoutubePlayerThrobber` }),
        },
        this.m_strPlayerID,
      ),
    });
  }
};
(x([A], U.prototype, `BindPlayerContainer`, null),
  x([A], U.prototype, `OnYoutubeScriptsReady`, null),
  x([A], U.prototype, `CreatePlayer`, null),
  x([A], U.prototype, `OnPlayerReady`, null),
  x([A], U.prototype, `OnPlayerStateChange`, null),
  x([A], U.prototype, `OnError`, null),
  x([A], U.prototype, `OnPlayerLeftView`, null),
  x([A], U.prototype, `PlayVideo`, null));
function Tn(e) {
  let { video: t, children: n } = e;
  return an(`youtube`)
    ? n
    : (0, B.jsx)(`a`, {
        href: `https://www.youtube.com/watch?v=${t}`,
        children: M(`#EventCalendar_WatchYouTubeVideo`),
      });
}
function En(e) {
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
function Dn(e) {
  let { video: t, autopause: n, className: r } = e,
    i = z.useRef(null),
    a = z.useRef(null),
    o = z.useCallback(() => i.current?.pauseVideo(), []),
    s = ot({ onLeave: n ? o : void 0 }),
    c = it(a, s);
  return (
    z.useEffect(() => {
      let e = () => {
        a.current && (i.current = new YT.Player(a.current, {}));
      };
      return (
        n && xn(e),
        () => {
          (Cn(e), (i.current = null));
        }
      );
    }, [n]),
    (0, B.jsx)(`iframe`, {
      ref: c,
      className: r,
      src: En(e),
      title: t,
      allow: `autoplay; encrypted-media; picture-in-picture; web-share`,
      allowFullScreen: !0,
      frameBorder: 0,
    })
  );
}
function W(e) {
  return e
    .replace(/&lt;/g, `<`)
    .replace(/&gt;/g, `>`)
    .replace(/&quot;/g, `"`)
    .replace(/&amp;/g, `&`);
}
async function On(e) {
  let t =
      P.STORE_BASE_URL +
      `events/ajaxgetdynamiceventmetadata?` +
      new URLSearchParams(e).toString(),
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  return await n.json();
}
function kn(e) {
  return [`DynamicEventMetadata`, `youtube`, e];
}
function An(e, t = !0) {
  return {
    queryKey: kn(e),
    queryFn: async () => {
      let t = await On({ youtubevideoids: e }),
        n = t.youtube?.find((t) => t.videoid == e) ?? t.youtube?.[0];
      if (!n) throw Error(`no metadata for youtube video ${e}`);
      return { ...n, title: W(n.title), description: W(n.description) };
    },
    enabled: t && !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function jn(e, t = !0) {
  return a(An(e, t));
}
function Mn(e) {
  return [`DynamicEventMetadata`, `sharedfile`, e];
}
function Nn(e) {
  return {
    queryKey: Mn(e),
    queryFn: async () => {
      let t = await On({ sharedfileids: e }),
        n =
          t.sharedfiles?.find((t) => t.sharedfileid == e) ?? t.sharedfiles?.[0];
      if (!n) throw Error(`no metadata for shared file ${e}`);
      return {
        ...n,
        title: W(n.title),
        description: W(n.description),
        type: W(n.type),
      };
    },
    enabled: !0,
    staleTime: 36e5,
    retry: !1,
  };
}
function Pn(e) {
  return a(Nn(e));
}
var Fn = `brm0OeRsTm4-`,
  In = `pcxkPBR3wVQ-`,
  Ln = `Mamx1lJ2lKQ-`,
  Rn = `MCiiNDFcgvA-`,
  zn = `wDoQNUlMcwk-`,
  Bn = `AiYAf8NbQ-E-`,
  Vn = (function (e) {
    return (
      (e.left = `leftthumb`),
      (e.right = `rightthumb`),
      (e.full = `full`),
      (e.summary = `summary`),
      e
    );
  })({});
function Hn(e) {
  return e == `full` ? Ln : R(In, e == `leftthumb` ? zn : Bn);
}
function G(e) {
  let {
      videoID: t,
      bShowVideoImmediately: n,
      bAutoPlay: r,
      nStartSeconds: i,
      align: a = `full`,
    } = e,
    [o, s] = (0, z.useState)(!n),
    { data: l, isSuccess: u } = jn(t, o);
  if (o) {
    let e = l?.title ?? M(`#Loading`),
      n = l?.views ?? `0`,
      r = l?.description ?? ``,
      i = () => s(!1);
    return (0, B.jsxs)(`div`, {
      className: Ht.Box,
      role: `button`,
      tabIndex: 0,
      onClick: i,
      onKeyDown: (e) => {
        (e.key == `Enter` || e.key == ` `) && (e.preventDefault(), i());
      },
      children: [
        (0, B.jsx)(Ut, {
          strURL: `https://img.youtube.com/vi/` + t + `/0.jpg`,
        }),
        (0, B.jsxs)(Wt, {
          children: [
            (0, B.jsx)(Gt, {
              children: M(`#EventEditor_YouTubeVideoTitle`, e),
            }),
            (0, B.jsx)(Xt, {
              children: M(`#EventEditor_YouTubeVideoViews`, ke(Number(n))),
            }),
            (0, B.jsxs)(Zt, {
              children: [u && r, !u && (0, B.jsx)(c, { size: `medium` })],
            }),
          ],
        }),
      ],
    });
  }
  return (0, B.jsx)(Tn, {
    video: t,
    children: (0, B.jsxs)(`div`, {
      className: R(Fn, Hn(a)),
      id: t,
      children: [
        (0, B.jsx)(`img`, {
          className: Rn,
          alt: ``,
          src:
            P.COMMUNITY_CDN_URL +
            `public/shared/images/responsive/youtube_16x9_placeholder.gif`,
        }),
        (0, B.jsx)(Dn, {
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
function Un(e, t) {
  if (P.EREALM === D.k_ESteamRealmChina) return null;
  let n = _n(e);
  return n?.strVideoID === void 0
    ? vt(e, t?.event)
    : (0, B.jsx)(G, {
        videoID: n.strVideoID,
        nStartSeconds: n.nStartSeconds,
        bShowVideoImmediately: !1,
      });
}
function Wn() {
  return P.EREALM === D.k_ESteamRealmChina;
}
function Gn(e) {
  if (Wn()) return null;
  let t = K(e.args);
  if (t) {
    let e = t.split(`;`);
    if (e.length == 2) {
      let t = e[0],
        n = e[1].toLocaleLowerCase();
      return (0, B.jsx)(G, { videoID: t, align: n, bShowVideoImmediately: !0 });
    }
  }
  return (0, B.jsx)(z.Fragment, {});
}
function Kn(e) {
  if (Wn() || P.COUNTRY.toLocaleUpperCase() == `CN`) return kt(e);
  let t = K(e.args, `youtubeid`),
    n = K(e.args, `size`),
    r = K(e.args, `seconds`);
  return (0, B.jsx)(G, {
    videoID: t,
    nStartSeconds: r ? Number.parseInt(r) : void 0,
    align: n,
    bShowVideoImmediately: !0,
  });
}
var qn = new Map([
    [`b`, { Constructor: Xn, autocloses: !1 }],
    [`i`, { Constructor: Zn, autocloses: !1 }],
    [`h1`, { Constructor: nr, autocloses: !1, skipFollowingNewline: !0 }],
    [`h2`, { Constructor: rr, autocloses: !1, skipFollowingNewline: !0 }],
    [`h3`, { Constructor: ir, autocloses: !1, skipFollowingNewline: !0 }],
    [`h4`, { Constructor: ar, autocloses: !1, skipFollowingNewline: !0 }],
    [`h5`, { Constructor: or, autocloses: !1, skipFollowingNewline: !0 }],
    [`center`, { Constructor: sr, autocloses: !1 }],
    [
      `smalltext`,
      { Constructor: cr, autocloses: !1, skipFollowingNewline: !0 },
    ],
    [`u`, { Constructor: Qn, autocloses: !1 }],
    [`strike`, { Constructor: $n, autocloses: !1 }],
    [`spoiler`, { Constructor: lr, autocloses: !1 }],
    [`hr`, { Constructor: ur, autocloses: !1 }],
    [`noparse`, { Constructor: Cr, autocloses: !1 }],
    [`url`, { Constructor: pr, autocloses: !1 }],
    [`quote`, { Constructor: gr, autocloses: !1 }],
    [`pullquote`, { Constructor: _r, autocloses: !1 }],
    [`code`, { Constructor: vr, autocloses: !1 }],
    [`c`, { Constructor: yr, autocloses: !1 }],
    [`list`, { Constructor: br, autocloses: !1, skipInternalNewline: !0 }],
    [`olist`, { Constructor: xr, autocloses: !1, skipInternalNewline: !0 }],
    [`*`, { Constructor: Sr, autocloses: !0, skipInternalNewline: !0 }],
    [`table`, { Constructor: wr, autocloses: !1, skipInternalNewline: !0 }],
    [
      `tr`,
      {
        Constructor: Er,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `th`,
      {
        Constructor: Or,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `td`,
      {
        Constructor: kr,
        autocloses: !1,
        skipInternalNewline: !0,
        skipFollowingNewline: !0,
      },
    ],
    [
      `expand`,
      {
        Constructor: jr,
        autocloses: !1,
        skipInternalNewline: !0,
        allowWrapTextForCopying: !0,
      },
    ],
    [`calendarevent`, { Constructor: Mr, autocloses: !0 }],
    [`doclink`, { Constructor: mr, autocloses: !1 }],
    [`color`, { Constructor: dr, autocloses: !1 }],
    [`bgcolor`, { Constructor: fr, autocloses: !1 }],
    [`p`, { Constructor: er, autocloses: !1, skipFollowingNewline: !0 }],
  ]),
  Jn = new Map([
    [`looping_media`, { Constructor: Ot, autocloses: !1 }],
    [`video`, { Constructor: kt, autocloses: !1 }],
    [`youtubeorvideo`, { Constructor: Kn, autocloses: !1 }],
    [`previewyoutube`, { Constructor: Gn, autocloses: !1 }],
  ]);
function K(e, t) {
  return t === void 0 ? e[``] : e[t];
}
function Yn(e, t) {
  return (n) => e({ ...n, className: t });
}
function Xn(e) {
  return (0, B.jsx)(`b`, { className: Ce, children: e.children });
}
function Zn(e) {
  return (0, B.jsx)(`i`, {
    className: R(m, `BB_Italic`),
    children: e.children,
  });
}
function Qn(e) {
  return (0, B.jsx)(`u`, { className: te, children: e.children });
}
function $n(e) {
  return (0, B.jsx)(`s`, { className: re, children: e.children });
}
function er(e) {
  return (0, B.jsxs)(`p`, {
    className: _e,
    children: [e.children, (0, B.jsx)(`wbr`, {})],
  });
}
function tr(e) {
  return (0, B.jsxs)(`div`, {
    className: _e,
    role: `paragraph`,
    children: [e.children, (0, B.jsx)(`wbr`, {})],
  });
}
function q(e, t, n) {
  let r = K(t.args, `id`);
  return (
    (r ||= K(t.args)),
    r &&
      typeof r == `string` &&
      r.length > 0 &&
      r[0] === `#` &&
      (r = r.substring(1)),
    (0, B.jsx)(e, {
      id: r || void 0,
      className: R(n, t.className),
      children: t.children,
    })
  );
}
function nr(e) {
  return q(`h1`, e, R(me, `BB_Header1`));
}
function rr(e) {
  return q(`h2`, e, R(le, `BB_Header2`));
}
function ir(e) {
  return q(`h3`, e, R(Te, `BB_Header3`));
}
function ar(e) {
  return q(`h4`, e, R(De, `BB_Header4`));
}
function or(e) {
  return q(`h5`, e, R(de, `BB_Header5`));
}
function sr(e) {
  let t = K(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, B.jsx)(`span`, {
      id: t || void 0,
      className: R(xe, `BB_Center`),
      children: e.children,
    })
  );
}
function cr(e) {
  return q(`div`, e, R(ae, `BB_SmallText`));
}
function lr(e) {
  let [t, n] = z.useState(!1),
    r = z.useCallback(() => {
      n(!t);
    }, [t]);
  return (0, B.jsx)(y, {
    className: R(ee, t && `YDb-da9VezY-`),
    focusable: !0,
    onActivate: r,
    onOKActionDescription: M(
      t ? `#Bbcode_Spoiler_Hide` : `#Bbcode_Spoiler_Show`,
    ),
    children: (0, B.jsx)(`span`, { className: ne, children: e.children }),
  });
}
function ur(e) {
  return (0, B.jsx)(`hr`, { className: he });
}
function dr(e) {
  let t = K(e.args);
  return (0, B.jsx)(`span`, { style: { color: t }, children: e.children });
}
function fr(e) {
  let t = K(e.args);
  return (0, B.jsx)(`span`, {
    style: { backgroundColor: t },
    children: e.children,
  });
}
function pr(e) {
  let t = ce(K(e.args));
  if (!t) {
    let n = e.children;
    typeof n == `string` && Be(n) && (t = ce(n));
  }
  let n = K(e.args, `style`) == `button` ? Ee : void 0,
    r = n && K(e.args, `buttoncolor`),
    i = K(e.args, `id`);
  return (
    i &&
      typeof i == `string` &&
      i.length > 0 &&
      i[0] === `#` &&
      (i = i.substring(1)),
    t === void 0 && !i
      ? e.children || ``
      : t === void 0 || (typeof t == `string` && t.length > 0 && t[0] == `#`)
        ? (0, B.jsx)(`a`, { href: t ?? null, id: i, children: e.children })
        : (0, B.jsx)(hr, {
            className: n,
            href: t,
            id: i,
            style: { backgroundColor: r },
            children: e.children,
          })
  );
}
function mr(e) {
  let t = K(e.args),
    n = K(e.args, `style`) == `button` ? Ee : void 0,
    r = n && K(e.args, `buttoncolor`);
  return (0, B.jsx)(hr, {
    className: n,
    style: { backgroundColor: r },
    href: `${N.PARTNER_BASE_URL}doc/${t}`,
    children: e.children,
  });
}
var hr = (e) => {
  let { href: t, ...n } = e,
    r = Je(t ?? ``),
    i;
  C(r)
    ? ((r = (N.IN_CLIENT ? `steam://openurl_external/` : ``) + Pe(r)),
      (i = `noopener nofollow`))
    : (r = Re(r));
  let a =
    typeof e.children == `string` &&
    e.children.length > 0 &&
    t &&
    !t.startsWith(`steam://`)
      ? Ie(t)
      : void 0;
  return (0, B.jsx)($e, {
    toolTipContent: a,
    direction: `top`,
    children: (0, B.jsx)(Le, { ...n, href: r, rel: i, children: e.children }),
  });
};
function gr(e) {
  let t = K(e.args, `author`);
  return (0, B.jsxs)(`blockquote`, {
    className: R(be, e.className),
    children: [
      !!t &&
        (0, B.jsxs)(`div`, {
          className: `iZjggU7O-fs-`,
          children: [
            M(`#Bbcode_Originally_Posted_By`) + ` `,
            ` `,
            (0, B.jsx)(`b`, { children: t + `:` }),
          ],
        }),
      e.children,
    ],
  });
}
function _r(e) {
  return (0, B.jsx)(`div`, { className: f, children: e.children });
}
function vr(e) {
  return (0, B.jsx)(`code`, { className: fe, children: e.children });
}
function yr(e) {
  return (0, B.jsx)(`code`, { className: we, children: e.children });
}
function br(e) {
  return (0, B.jsx)(`ul`, {
    className: R(se, `bullets`),
    children: e.children,
  });
}
function xr(e) {
  return (0, B.jsx)(`ol`, { className: ie, children: e.children });
}
function Sr(e) {
  let t = K(e.args, `id`);
  return (
    t &&
      typeof t == `string` &&
      t.length > 0 &&
      t[0] === `#` &&
      (t = t.substring(1)),
    (0, B.jsx)(`li`, { className: h, id: t || void 0, children: e.children })
  );
}
function Cr(e) {
  return e.children;
}
function wr(e) {
  let t = K(e.args, `noborder`),
    n = K(e.args, `equalcells`),
    r = K(e.args, `colwidth`);
  return (0, B.jsxs)(`table`, {
    className: R(oe, `BB_Table`, t && `b20E2IrghSY-`, n && `zJnyxE63CCk-`),
    children: [
      r &&
        (0, B.jsx)(`colgroup`, {
          children: r.split(`,`).map((e, t) => (0, B.jsx)(Tr, { width: e }, t)),
        }),
      (0, B.jsx)(`tbody`, { children: e.children }),
    ],
  });
}
function Tr(e) {
  let { width: t } = e,
    n;
  return (
    t && parseInt(t) > 0 && (n = { width: `${t}px` }),
    (0, B.jsx)(`col`, { style: n })
  );
}
function Er(e) {
  return (0, B.jsx)(`tr`, {
    className: R(p, `BB_TableRow`),
    children: e.children,
  });
}
function Dr(e, t) {
  let n = K(t.args, `width`),
    r = K(t.args, `colspan`),
    i = K(t.args, `rowspan`),
    a = {};
  return (
    r && parseInt(r) > 1 && (a.colSpan = parseInt(r)),
    i && parseInt(i) > 1 && (a.rowSpan = parseInt(i)),
    (0, B.jsx)(e, {
      className: R(Oe, e == `td` && `BB_TableData`),
      ...a,
      style: n ? { width: n } : void 0,
      children: t.children,
    })
  );
}
function Or(e) {
  return Dr(`th`, e);
}
function kr(e) {
  return Dr(`td`, e);
}
function Ar(e, t, n, r) {
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
        style: ye,
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
function jr(e) {
  let t = !!K(e.args, `expanded`),
    [n, r] = z.useState(t),
    i = K(e.args, `title`),
    a = K(e.args, `collapsed_str`),
    o = K(e.args, `expanded_str`),
    s = Ar(K(e.args, `type`), i, a, o);
  return (0, B.jsxs)(`div`, {
    className: R({
      [pe]: !0,
      [s.style ?? ``]: s.style != null,
      [void 0]: n,
      [void 0]: !n,
      BBCodeExpanded: n,
      BBCodeCollapsed: !n,
    }),
    children: [
      (0, B.jsxs)(`div`, {
        className: Se,
        onClick: () => r(!n),
        children: [
          M(n ? s.expanded : s.collapsed),
          (0, B.jsx)(`div`, {
            className: ve,
            children: (0, B.jsx)(tt, { angle: n ? 180 : 0 }),
          }),
        ],
      }),
      n &&
        (0, B.jsx)(`div`, { className: `Lwo0pX9leRw-`, children: e.children }),
    ],
  });
}
function Mr(e) {
  let t = K(e.args, `title`),
    n = K(e.args, `start`) ?? K(e.args, `datetime`),
    r = K(e.args, `end`) ?? K(e.args, `datetime`),
    i = K(e.args, `body`) ?? null,
    a = K(e.args, `location`) ?? null,
    o = K(e.args, `id`) ?? ``,
    s = new Date(n),
    c = `${s.getUTCFullYear()}${(`0` + (s.getUTCMonth() + 1)).slice(-2)}${(`0` + s.getUTCDate()).slice(-2)}T${(`0` + s.getUTCHours()).slice(-2)}${(`0` + s.getUTCMinutes()).slice(-2)}00Z`,
    l = new Date(r),
    u = `${l.getUTCFullYear()}${(`0` + (l.getUTCMonth() + 1)).slice(-2)}${(`0` + l.getUTCDate()).slice(-2)}T${(`0` + l.getUTCHours()).slice(-2)}${(`0` + l.getUTCMinutes()).slice(-2)}00Z`,
    d;
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
      (d = `data:text/calendar;charset=utf-8;base64,${mt.fromByteArray(new TextEncoder().encode(e))}`));
  } catch (e) {
    console.error(e);
  }
  let f = `https://calendar.google.com/calendar/render?action=TEMPLATE`;
  ((f += `&text=${encodeURI(t)}`),
    (f += `&details=${encodeURI(i)}`),
    (f += `&dates=${encodeURI(c + `/` + u)}`));
  let p = (e) => {
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
  return (0, B.jsxs)(`div`, {
    className: R(`SaleSectionCalendarEventContainer`, ge),
    id: o,
    children: [
      d &&
        (0, B.jsx)(`a`, {
          className: R(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: d,
          onClick: p,
          download: `calendar.ics`,
          children: `Apple`,
        }),
      (0, B.jsx)(`a`, {
        className: R(`SaleSectionCalendarEventLink`, ue),
        href: f,
        children: `Google`,
      }),
      d &&
        (0, B.jsx)(`a`, {
          className: R(`SaleSectionCalendarEventLink`, `C-B3bdlHS0I-`),
          href: d,
          onClick: p,
          download: `calendar.ics`,
          children: `Outlook`,
        }),
    ],
  });
}
var J = e(n(), 1);
function Nr(e) {
  let { text: t = ``, style: n, children: r } = e;
  if (t == null) return (0, B.jsx)(z.Fragment, { children: r });
  let i;
  if (
    ((i =
      t instanceof Array
        ? t.map((e) => (e ? e.toString() : ``)).filter((e) => e.length > 0)
            .join(`
`)
        : t.toString()),
    z.Children.count(r) == 1)
  ) {
    let e = z.Children.only(r);
    return z.cloneElement(e, { "data-copystyle": n, "data-copytext": i });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${n} copytext=${i}`,
    ),
    (0, B.jsx)(z.Fragment, { children: r })
  );
}
var Pr = `EYdF9T-t7r0-`,
  Fr = `GlOJIpYSKE4-`,
  Ir = `JQFjcVsL4SA-`,
  Lr = `MHuFPh5V6r4-`,
  Rr = `Gwiqr5pL1cE-`,
  zr = `w0e9THby0ZM-`,
  Br = `_4q--1VsTk5U-`,
  Vr = `_669DaDTMhYs-`,
  Hr = `dohGHt1ixUc-`,
  Ur = `C9qi0C7EUeo-`,
  Wr = `_3XkAznD5HIU-`,
  Gr = `VoTYjMrv1JU-`,
  Y = `iiVnY9Z6ikk-`,
  Kr = `KB63E0Y-xPo-`,
  qr = `_7tqUEqEzFXI-`;
function Jr(e) {
  let { emoticon: t, large: n } = e,
    [r, i] = dt(),
    [a, o] = z.useState(null),
    s = `:${t}:`,
    c = Xe(t, n);
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(Nr, {
        text: s,
        style: `merge-adjacent`,
        children: (0, B.jsx)(`img`, {
          ...i,
          src: c,
          className: R(Ir, n ? Lr : void 0),
          "data-emoticon": t,
          alt: t,
          ref: o,
        }),
      }),
      r && a && (0, B.jsx)(Yr, { target: a, emoticon: t }),
    ],
  });
}
function Yr(e) {
  let { target: t, emoticon: n } = e,
    { data: r } = Xr(n);
  return (0, B.jsx)(Zr, {
    target: t,
    title: `:${n}:`,
    subtitle: r && r.app_name ? r.app_name : void 0,
    children: (0, B.jsx)(Jr, { emoticon: n, large: !0 }),
  });
}
function Xr(e) {
  return a({
    queryKey: [`EmoticonHover`, e],
    queryFn: async () => {
      let t = `${P.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(e)}?l=${encodeURIComponent(P.LANGUAGE)}&origin=${self.origin}`,
        n = await fetch(t);
      if (n.status != 200)
        throw `Error fetching emoticon: ${n.status} ${n.statusText}`;
      return await n.json();
    },
  });
}
var Zr = ({ target: e, title: t, subtitle: n, children: r }) =>
  (0, B.jsxs)(qe, {
    target: e,
    style: { zIndex: 1700 },
    className: Br,
    children: [
      r,
      (0, B.jsxs)(`div`, {
        className: Vr,
        children: [
          (0, B.jsx)(`div`, {
            className: Hr,
            children: t || (0, B.jsx)(`span`, { children: `\xA0` }),
          }),
          (0, B.jsx)(`div`, {
            className: Ur,
            children: n || (0, B.jsx)(`span`, { children: `\xA0` }),
          }),
        ],
      }),
    ],
  });
function Qr(e) {
  return new l(new u());
}
function $r() {
  return new Map([...Array.from(qn.entries())]);
}
function ei(e) {
  let { text: t, languageOverride: n } = e,
    [r] = (0, z.useState)(new d($r(), Qr, n ?? P.LANGUAGE));
  return (0, B.jsx)(B.Fragment, { children: r.ParseBBCode(t, {}) });
}
function ti(e) {
  return `unknown EVirtualItemRewardEvent ( ` + e + ` )`;
}
var ni = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.communityitemid || j(e.M()),
        J.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            communityitemid: {
              n: 1,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            item_type: { n: 2, br: k.readUint32, bw: O.writeUint32 },
            appid: { n: 3, br: k.readUint32, bw: O.writeUint32 },
            owner: { n: 4, br: k.readUint32, bw: O.writeUint32 },
            attributes: { n: 5, c: ri, r: !0, q: !0 },
            used: { n: 6, br: k.readBool, bw: O.writeBool },
            owner_origin: { n: 7, br: k.readUint32, bw: O.writeUint32 },
            amount: { n: 8, br: k.readInt64String, bw: O.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_CommunityItem`;
    }
  },
  ri = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.attributeid || j(e.M()),
        J.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            attributeid: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            value: { n: 2, br: k.readUint64String, bw: O.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_CommunityItem_Attribute`;
    }
  },
  ii = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.filter_appids || j(e.M()),
        J.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            filter_appids: {
              n: 1,
              r: !0,
              q: !0,
              br: k.readUint32,
              pbr: k.readPackedUint32,
              bw: O.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_GetCommunityInventory_Request`;
    }
  },
  ai = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.items || j(e.M()),
        J.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { items: { n: 1, c: ni, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_GetCommunityInventory_Response`;
    }
  },
  oi = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || j(e.M()),
        J.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            item_type: { n: 3, br: k.readUint32, bw: O.writeUint32 },
            language: { n: 4, br: k.readString, bw: O.writeString },
            broadcast_channel_id: {
              n: 5,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            keyvalues_as_json: { n: 6, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_GetCommunityItemDefinitions_Request`;
    }
  },
  si = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_definitions || j(e.M()),
        J.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { item_definitions: { n: 1, c: ci, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_GetCommunityItemDefinitions_Response`;
    }
  },
  ci = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_type || j(e.M()),
        J.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_type: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            appid: { n: 2, br: k.readUint32, bw: O.writeUint32 },
            item_name: { n: 3, br: k.readString, bw: O.writeString },
            item_title: { n: 4, br: k.readString, bw: O.writeString },
            item_description: { n: 5, br: k.readString, bw: O.writeString },
            item_image_small: { n: 6, br: k.readString, bw: O.writeString },
            item_image_large: { n: 7, br: k.readString, bw: O.writeString },
            item_key_values: { n: 8, br: k.readString, bw: O.writeString },
            item_series: { n: 9, br: k.readUint32, bw: O.writeUint32 },
            item_class: { n: 10, br: k.readUint32, bw: O.writeUint32 },
            editor_accountid: { n: 11, br: k.readUint32, bw: O.writeUint32 },
            active: { n: 12, br: k.readBool, bw: O.writeBool },
            item_image_composed: { n: 13, br: k.readString, bw: O.writeString },
            item_image_composed_foil: {
              n: 14,
              br: k.readString,
              bw: O.writeString,
            },
            deleted: { n: 15, br: k.readBool, bw: O.writeBool },
            item_last_changed: { n: 16, br: k.readUint32, bw: O.writeUint32 },
            broadcast_channel_id: {
              n: 17,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            item_movie_webm: { n: 18, br: k.readString, bw: O.writeString },
            item_movie_mp4: { n: 19, br: k.readString, bw: O.writeString },
            item_movie_webm_small: {
              n: 20,
              br: k.readString,
              bw: O.writeString,
            },
            item_movie_mp4_small: {
              n: 21,
              br: k.readString,
              bw: O.writeString,
            },
            item_internal_name: { n: 22, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_GetCommunityItemDefinitions_Response_ItemDefinition`;
    }
  },
  li = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || j(e.M()),
        J.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            communityitemid: {
              n: 2,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            activate: { n: 3, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_ActivateProfileModifierItem_Request`;
    }
  },
  ui = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), J.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_ActivateProfileModifierItem_Response`;
    }
  },
  di = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp_start || j(e.M()),
        J.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp_start: {
              n: 1,
              d: 0,
              br: k.readUint32,
              bw: O.writeUint32,
            },
            timestamp_end: {
              n: 2,
              d: 4294967295,
              br: k.readUint32,
              bw: O.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_GetNumTradingCardsEarned_Request`;
    }
  },
  fi = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_trading_cards || j(e.M()),
        J.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_trading_cards: { n: 1, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_GetNumTradingCardsEarned_Response`;
    }
  },
  pi = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.eventid || j(e.M()),
        J.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eventid: { n: 1, br: k.readEnum, bw: O.writeEnum },
            include_inactive: { n: 2, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_VirtualItemRewardDefinition_Request`;
    }
  },
  mi = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.eventid || j(e.M()),
        J.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eventid: { n: 1, br: k.readEnum, bw: O.writeEnum },
            item_bucket: { n: 2, br: k.readUint32, bw: O.writeUint32 },
            appid: { n: 3, br: k.readUint32, bw: O.writeUint32 },
            active: { n: 4, br: k.readBool, bw: O.writeBool },
            rarity: { n: 5, br: k.readUint32, bw: O.writeUint32 },
            package_to_grant: { n: 6, br: k.readUint32, bw: O.writeUint32 },
            game_item_id: {
              n: 7,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            community_item_class: { n: 8, br: k.readInt32, bw: O.writeInt32 },
            community_item_type: { n: 9, br: k.readUint32, bw: O.writeUint32 },
            loyalty_point_type: { n: 10, br: k.readUint32, bw: O.writeUint32 },
            amount: { n: 11, br: k.readInt64String, bw: O.writeInt64String },
            rtime_time_active: { n: 12, br: k.readUint32, bw: O.writeUint32 },
            loyalty_reward_defid: {
              n: 13,
              br: k.readUint32,
              bw: O.writeUint32,
            },
            user_badge_to_grant: { n: 14, br: k.readUint32, bw: O.writeUint32 },
            user_badge_level: { n: 15, br: k.readUint32, bw: O.writeUint32 },
            virtual_item_def_id: { n: 16, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVirtualItemRewardDefinition`;
    }
  },
  hi = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rewards || j(e.M()),
        J.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { rewards: { n: 1, c: mi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_VirtualItemRewardDefinition_Response`;
    }
  },
  gi = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.eventid || j(e.M()),
        J.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eventid: { n: 1, br: k.readEnum, bw: O.writeEnum },
            itemsdefs: { n: 2, c: mi, r: !0, q: !0 },
            action: { n: 3, br: k.readEnum, bw: O.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= I(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return F(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return S(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_SetVirtualItemRewardDefinition_Request`;
    }
  },
  _i = class e extends J.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), J.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new J.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new J.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CQuest_SetVirtualItemRewardDefinition_Response`;
    }
  },
  vi;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Quest.GetCommunityInventory#1`, g(ii, t, n), ai, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCommunityInventory = t;
  function n(e, t, n) {
    return e.SendMsg(`Quest.GetCommunityItemDefinitions#1`, g(oi, t, n), si, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 4,
    });
  }
  e.GetCommunityItemDefinitions = n;
  function r(e, t, n) {
    return e.SendMsg(`Quest.ActivateProfileModifierItem#1`, g(li, t, n), ui, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ActivateProfileModifierItem = r;
  function i(e, t, n) {
    return e.SendMsg(`Quest.GetNumTradingCardsEarned#1`, g(di, t, n), fi, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetNumTradingCardsEarned = i;
  function a(e, t, n) {
    return e.SendMsg(
      `Quest.GetVirtualItemRewardDefinition#1`,
      g(pi, t, n),
      hi,
      { bConstMethod: !0, ePrivilege: 4, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetVirtualItemRewardDefinition = a;
  function o(e, t, n) {
    return e.SendMsg(
      `Quest.SetVirtualItemRewardDefinition#1`,
      g(gi, t, n),
      _i,
      { ePrivilege: 4, rgBrowserAPISites: [`community`] },
    );
  }
  e.SetVirtualItemRewardDefinition = o;
})((vi ||= {}));
function yi(e, t, n = !1) {
  return `${e}economy/sticker${n ? `static` : ``}/${encodeURIComponent(t)}`;
}
var bi = `_6Ymd3Ej4NCU-`,
  xi = `nnMTzvpAu6Y-`,
  Si = `plDm7MqblvA-`,
  Ci = `_0SYoz2hcxOY-`,
  wi = `_6gRC1q99lWw-`,
  Ti = `a1l1nhz8GFU-`,
  Ei = `wfpm6FahiQY-`,
  Di = `G30RxXBSXck-`,
  Oi = `Mw7bdt52AuY-`,
  ki = `_0ZS8IEfJKto-`,
  Ai = `R-BER3-p7c8-`,
  ji = `nCS2TzxRijY-`,
  X = class extends z.Component {
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
              t === We.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : t === We.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      e.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, B.jsxs)(y, {
        className: bi,
        onButtonDown: a,
        children: [i && (0, B.jsx)(Mi, { children: this.RenderTabs() }), r],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: e }, t) => {
        let n = this.state.activeIndex === t;
        return (0, B.jsx)(
          Pi,
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
function Mi(e) {
  return (0, B.jsx)(y, {
    className: xi,
    "flow-children": `row`,
    children: e.children,
  });
}
function Ni(e) {
  return (0, B.jsx)(`div`, { className: Ti, children: e.children });
}
function Pi(e) {
  let { active: t, children: n, onClick: r } = e;
  return (0, B.jsx)(y, {
    className: R(Si, t && `f-iRFuUHuSo-`),
    focusClassName: Ci,
    onActivate: r,
    children: (0, B.jsx)(`div`, {
      className: R(wi, t && `f-iRFuUHuSo-`),
      children: n,
    }),
  });
}
function Fi(e) {
  let {
      items: t,
      renderItem: n,
      onItemSelect: r,
      keyExtractor: i,
      renderEmpty: a,
    } = e,
    o = t.map((e, a) =>
      (0, B.jsx)(
        y,
        {
          className: Di,
          onActivate: () => r(t[a]),
          autoFocus: a === 0,
          focusClassName: Ci,
          children: n(t[a]),
        },
        i(e),
      ),
    );
  return (
    t.length === 0 && a && (o = a()),
    (0, B.jsx)(y, { "flow-children": `grid`, className: Ei, children: o })
  );
}
function Ii(e) {
  let { title: t, onFilterChange: n, filter: r, onSubmit: i, ...a } = e;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(Ni, {
        children: (0, B.jsx)(Ri, {
          title: t,
          children: (0, B.jsx)(Fi, { ...a }),
        }),
      }),
      (0, B.jsx)(zi, { value: r, onChange: n, onSubmit: i }),
    ],
  });
}
function Li(e) {
  let { onFilterChange: t, filter: n, sections: r, title: i } = e;
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsxs)(Ni, {
        children: [
          i && (0, B.jsx)(`div`, { className: `Zcgr0x6gQMc-`, children: i }),
          r.map(({ title: e, ...t }) =>
            (0, B.jsx)(Ri, { title: e, children: (0, B.jsx)(Fi, { ...t }) }, e),
          ),
        ],
      }),
      (0, B.jsx)(zi, { value: n, onChange: t }),
    ],
  });
}
function Ri(e) {
  return (0, B.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, B.jsx)(`div`, { className: Oi, children: e.title }),
      (0, B.jsx)(`div`, { className: void 0, children: e.children }),
    ],
  });
}
function zi(e) {
  let { value: t, onChange: n, onSubmit: r } = e;
  return (0, B.jsx)(`div`, {
    className: ki,
    children: (0, B.jsx)(Ge, {
      type: `text`,
      placeholder: M(`#AddonPicker_Search`),
      className: Ai,
      value: t,
      onChange: (e) => n(e.target.value),
      onSubmit: r,
    }),
  });
}
function Z(e) {
  let { className: t, ...n } = e;
  return (0, B.jsx)(`div`, { className: R(t, ji), ...n });
}
var Bi = 1e3;
function Q(e) {
  return e.recent_emoticons;
}
function Vi(e) {
  return e.recent_stickers;
}
function Hi(e) {
  return Q(e).length + Vi(e).length > 0;
}
function Ui(e) {
  let [t, n] = (0, z.useState)(e.is_initialized);
  return (
    (0, z.useEffect)(() => {
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
var Wi = t((e) => {
    let {
      emoticonStore: t,
      roomEffectSettings: n,
      strFlairGroupID: r,
      onEmoticonSelected: i,
      onRoomEffectSelected: a,
      onStickerSelected: o,
    } = e;
    Ui(t);
    let s = [];
    return (
      Hi(t) &&
        s.push({
          renderTab: (e) =>
            (0, B.jsx)(`span`, {
              title: M(`#AddonPicker_RecentlyUsed`),
              className: R(Y, Kr, e && void 0),
              children: (0, B.jsx)(la, {}),
            }),
          renderContent: () =>
            (0, B.jsx)(Ji, {
              store: t,
              onEmoticonSelect: (e) => i(e.name),
              onStickerSelect: (e) => o(e.name),
              flairGroupID: r,
            }),
        }),
      (0, B.jsx)(T, {
        children: (0, B.jsx)(X, {
          config: [
            ...s,
            {
              renderTab: (e) =>
                (0, B.jsx)(`span`, {
                  title: M(`#AddonPicker_Emoticons`),
                  className: R(Y, e && void 0),
                  children: (0, B.jsx)(sa, {}),
                }),
              renderContent: () =>
                (0, B.jsx)(Yi, {
                  store: t,
                  onItemSelect: (e) => i(e.name),
                  flairGroupID: r,
                }),
            },
            {
              renderTab: (e) =>
                (0, B.jsx)(`span`, {
                  title: M(`#AddonPicker_Stickers`),
                  className: R(Y, e && void 0),
                  children: (0, B.jsx)(oa, {}),
                }),
              renderContent: () =>
                (0, B.jsx)(Zi, { store: t, onItemSelect: (e) => o(e.name) }),
            },
            {
              renderTab: (e) =>
                (0, B.jsx)(`span`, {
                  title: M(`#AddonPicker_RoomEffects`),
                  className: R(Y, e && void 0),
                  children: (0, B.jsx)(ca, {}),
                }),
              renderContent: () =>
                (0, B.jsx)(Qi, {
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
  Gi = class extends z.Component {
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
          onEmoticonSelected: t,
          onStickerSelected: n,
          strFlairGroupID: r,
        } = this.props,
        i = [];
      return (
        Hi(e) &&
          i.push({
            renderTab: (e) =>
              (0, B.jsx)(`span`, {
                title: M(`#AddonPicker_RecentlyUsed`),
                className: R(Y, Kr, e && void 0),
                children: (0, B.jsx)(la, {}),
              }),
            renderContent: () =>
              (0, B.jsx)(Ji, {
                store: e,
                onEmoticonSelect: (e) => t(e.name),
                onStickerSelect: (e) => n(e.name),
                flairGroupID: r,
              }),
          }),
        (0, B.jsx)(T, {
          children: (0, B.jsx)(X, {
            config: [
              ...i,
              {
                renderTab: (e) =>
                  (0, B.jsx)(`span`, {
                    title: M(`#AddonPicker_Emoticons`),
                    className: R(Y, e && void 0),
                    children: (0, B.jsx)(sa, {}),
                  }),
                renderContent: () =>
                  (0, B.jsx)(Yi, {
                    store: e,
                    onItemSelect: (e) => t(e.name),
                    flairGroupID: r,
                  }),
              },
              {
                renderTab: (e) =>
                  (0, B.jsx)(`span`, {
                    title: M(`#AddonPicker_Stickers`),
                    className: R(Y, e && void 0),
                    children: (0, B.jsx)(oa, {}),
                  }),
                renderContent: () =>
                  (0, B.jsx)(Zi, { store: e, onItemSelect: (e) => n(e.name) }),
              },
            ],
          }),
        })
      );
    }
  };
Gi = x([t], Gi);
var Ki = class extends z.Component {
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
      return (0, B.jsx)(T, {
        children: (0, B.jsx)(X, {
          config: [
            {
              renderTab: () =>
                (0, B.jsx)(`span`, {
                  title: M(`#AddonPicker_Emoticons`),
                  className: Y,
                  children: (0, B.jsx)(sa, {}),
                }),
              renderContent: () =>
                (0, B.jsx)($i, {
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
  qi = class extends z.Component {
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
      return (0, B.jsx)(T, {
        children: (0, B.jsx)(X, {
          config: [
            {
              renderTab: () =>
                (0, B.jsx)(`span`, {
                  title: M(`#AddonPicker_Emoticons`),
                  className: Y,
                  children: (0, B.jsx)(sa, {}),
                }),
              renderContent: () =>
                (0, B.jsx)(ea, {
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
  Ji = class extends z.Component {
    state = { filter: `` };
    render() {
      let { store: e, onEmoticonSelect: t, onStickerSelect: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        Q(e) &&
          i.push({
            title: M(`#AddonPicker_RecentEmoticons`),
            items: L.FilterEmoticons(Q(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, B.jsx)($, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, B.jsx)(Z, {
                children: r
                  ? M(`#AddonPicker_NoResults`)
                  : M(`#AddonPicker_NoRecent`, M(`#AddonPicker_Emoticons`)),
              }),
          }),
        Vi(e).length &&
          i.push({
            title: M(`#AddonPicker_RecentStickers`),
            items: L.FilterStickers(Vi(e), r),
            onItemSelect: n,
            renderItem: (e) => (0, B.jsx)(ta, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            renderEmpty: () =>
              (0, B.jsx)(Z, {
                children: r
                  ? M(`#AddonPicker_NoResults`)
                  : M(`#AddonPicker_NoRecent`, M(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, B.jsx)(Li, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: i,
        })
      );
    }
  },
  Yi = class extends z.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = !r && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
        a = L.FilterEmoticons(i, r).slice(0, Bi);
      return (0, B.jsx)(Ii, {
        title: M(`#AddonPicker_Emoticons`),
        items: a,
        onItemSelect: t,
        renderItem: (e) => (0, B.jsx)($, { emoticon: e }),
        keyExtractor: (e) => e.name,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => t(a[0]),
        renderEmpty: () =>
          r
            ? (0, B.jsx)(Z, { children: M(`#AddonPicker_NoResults`) })
            : (0, B.jsx)(Xi, {}),
      });
    }
  };
function Xi() {
  return (0, B.jsxs)(B.Fragment, {
    children: [
      (0, B.jsx)(Z, {
        children: M(`#AddonPicker_NoneOwned`, M(`#AddonPicker_Emoticons`)),
      }),
      (0, B.jsx)(Z, {
        children: ut(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, B.jsx)(v, {
            href: `${N.STORE_BASE_URL}points/shop/c/emoticons`,
            children: M(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, B.jsx)(v, {
            href: `${N.COMMUNITY_BASE_URL}market`,
            children: M(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var Zi = class extends z.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t } = this.props,
        { filter: n } = this.state,
        r = L.FilterStickers(e.GetStickerList(), n);
      return (0, B.jsx)(Ii, {
        title: M(`#EmoticonPicker_StickerHeading`),
        items: r,
        onItemSelect: t,
        renderItem: (e) => (0, B.jsx)(ta, { sticker: e }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: n,
        onSubmit: () => t(r[0]),
        renderEmpty: () =>
          n
            ? (0, B.jsx)(Z, { children: M(`#AddonPicker_NoResults`) })
            : (0, B.jsxs)(B.Fragment, {
                children: [
                  (0, B.jsx)(Z, {
                    children: M(
                      `#AddonPicker_NoneOwned`,
                      M(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, B.jsx)(Z, {
                    children: ut(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, B.jsx)(v, {
                        href: `${N.STORE_BASE_URL}points/shop/c/stickers`,
                        children: M(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  Qi = class extends z.Component {
    state = { filter: `` };
    render() {
      let { store: e, effectSettings: t, onItemSelect: n } = this.props,
        { filter: r } = this.state,
        i = e.GetEffectList().filter(({ name: e }) => e.indexOf(r) > -1);
      return (0, B.jsx)(Ii, {
        title: M(`#EmoticonPicker_EffectHeading`),
        items: i,
        onItemSelect: n,
        renderItem: (e) => (0, B.jsx)(ra, { effect: e, roomEffectSettings: t }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => n(i[0]),
        renderEmpty: () =>
          r
            ? (0, B.jsx)(Z, { children: M(`#AddonPicker_NoResults`) })
            : (0, B.jsxs)(B.Fragment, {
                children: [
                  (0, B.jsx)(Z, {
                    children: M(
                      `#AddonPicker_NoneOwned`,
                      M(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, B.jsx)(Z, {
                    children: ut(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, B.jsx)(v, {
                        href: `${N.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: M(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  $i = class extends z.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        Q(e).length &&
          i.push({
            title: M(`#AddonPicker_RecentEmoticons`),
            items: L.FilterEmoticons(Q(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, B.jsx)($, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, B.jsx)(Z, {
                children: r
                  ? M(`#AddonPicker_NoResults`)
                  : M(`#AddonPicker_NoRecent`, M(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, B.jsx)(Li, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: [
            ...i,
            {
              title: M(`#AddonPicker_AllEmoticons`),
              items: L.FilterStickers(e.emoticon_list, r).slice(0, Bi),
              onItemSelect: t,
              renderItem: (e) => (0, B.jsx)($, { emoticon: e }),
              keyExtractor: (e) => e.name,
              renderEmpty: () =>
                r
                  ? (0, B.jsx)(Z, { children: M(`#AddonPicker_NoResults`) })
                  : (0, B.jsx)(Xi, {}),
            },
          ],
        })
      );
    }
  };
$i = x([t], $i);
var ea = class extends z.Component {
  state = { filter: `` };
  render() {
    let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
      { filter: r } = this.state;
    return (0, B.jsx)(Li, {
      onFilterChange: (e) => this.setState({ filter: e }),
      filter: r,
      sections: [
        {
          title: M(`#ChatEntryButton_Flair`),
          items: L.FilterStickers(e.GetFlairListByGroupID(n), r),
          onItemSelect: t,
          renderItem: (e) => (0, B.jsx)($, { emoticon: e }),
          keyExtractor: (e) => e.name,
          renderEmpty: () =>
            r
              ? (0, B.jsx)(Z, { children: M(`#AddonPicker_NoResults`) })
              : (0, B.jsx)(Xi, {}),
        },
      ],
    });
  }
};
ea = x([t], ea);
var $ = (e) => {
    let { emoticon: t, large: n } = e,
      r = !t.last_used && t.time_received;
    return (0, B.jsxs)(`div`, {
      className: qr,
      children: [
        (0, B.jsx)(Jr, { emoticon: t.name, large: n }),
        r && (0, B.jsx)(aa, {}),
      ],
    });
  },
  ta = class extends z.Component {
    state = { showHover: !1 };
    m_ref = z.createRef();
    render() {
      let { sticker: e, className: t, ...n } = this.props,
        r = yi(N.COMMUNITY_CDN_URL, e.name);
      return (0, B.jsxs)(`div`, {
        ref: this.m_ref,
        className: R(t, Rr),
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        ...n,
        children: [
          (0, B.jsx)(`img`, { style: { width: `100%` }, src: r }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, B.jsx)(na, { target: this.m_ref.current, sticker: e }),
        ],
      });
    }
  },
  na = t((e) => {
    let {
        target: t,
        sticker: { name: n, appid: r },
      } = e,
      [i] = Ae(r, {});
    return (0, B.jsx)(Zr, {
      target: t,
      title: n,
      subtitle: i?.GetName(),
      children: (0, B.jsx)(`img`, {
        src: yi(N.COMMUNITY_CDN_URL, n),
        className: Wr,
      }),
    });
  }),
  ra = class extends z.Component {
    state = { showHover: !1 };
    m_ref = z.createRef();
    render() {
      let { effect: e, roomEffectSettings: t, className: n, ...r } = this.props,
        i = t[e.name];
      return (0, B.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        className: R(n, zr),
        ...r,
        children: [
          i.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, B.jsx)(ia, {
              target: this.m_ref.current,
              effect: e,
              roomEffectSettings: t,
            }),
        ],
      });
    }
  },
  ia = t((e) => {
    let {
        target: t,
        effect: { name: n, appid: r },
        roomEffectSettings: i,
      } = e,
      a = i[n],
      [o] = Ae(r, {});
    return (0, B.jsx)(Zr, {
      target: t,
      title: n,
      subtitle: o?.GetName(),
      children: (0, B.jsx)(`div`, {
        className: Gr,
        children: a.renderEffectIcon(),
      }),
    });
  });
function aa() {
  return (0, B.jsx)(`div`, {
    className: Pr,
    children: (0, B.jsx)(`div`, { className: Fr }),
  });
}
function oa(e) {
  return (0, B.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function sa(e) {
  return (0, B.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, B.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function ca(e) {
  return (0, B.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, B.jsx)(`path`, {
        fill: `currentColor`,
        d: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function la(e) {
  let { className: t, ...n } = e;
  return (0, B.jsx)(`svg`, {
    className: R(`SVGIcon_Button SVGIcon_Clock`, t),
    version: `1.1`,
    x: `0px`,
    y: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ...n,
    children: (0, B.jsx)(`path`, {
      d: `M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z`,
    }),
  });
}
var ua = `pvP8JT4e7EA-`,
  da = `FcUxYTJ41iw-`,
  fa = `CVH0kQ-5qJ4-`,
  pa = `-OdMBhmRPrM-`,
  ma = `ht2q6zu-Yn8-`,
  ha = `kzKCSSWaRZ4-`,
  ga = `_1zsmA-mI3cU-`,
  _a = `_4X5-n9MaD8g-`;
function va() {
  return (0, B.jsx)(et, {});
}
function ya() {
  return Ve() ? (0, B.jsx)(Ye, {}) : (0, B.jsx)(rt, {});
}
var ba = 1576780700,
  xa = class extends z.Component {
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
            ? (0, B.jsx)(Wi, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (e) => this.props.OnEmoticonSelected(e, !1),
                roomEffectSettings: o,
                onRoomEffectSelected: s,
                onStickerSelected: c,
              })
            : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
              ? (0, B.jsx)(qi, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, B.jsx)(Ki, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        Ue(
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
        ((!e || e < ba) && (e = ba), r(`rtLastAckedNewEmoticons`, e));
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
      return !e || e < ba || (t && (!e || e < t));
    }
    render() {
      let { disabled: e, className: t, ttip: n, useImg: r } = this.props,
        i = [t],
        a = !1;
      return (
        e ? i.push(`disabled`) : this.BHaveUnseenEmoticons() && (a = !0),
        n && i.push(`ttip`),
        r
          ? (0, B.jsx)(y, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: M(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, B.jsx)(Ze, {
                toolTipContent: n,
                children: (0, B.jsx)(`img`, {
                  src: this.props.useImg,
                  className: R(...i),
                  title: this.props.title || M(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (i.push(ha, ga),
            (0, B.jsx)(ze, {
              className: R(...i),
              onOKActionDescription: M(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || M(`#ChatEntryButton_Emoticon`),
              disabled: e,
              children: (0, B.jsxs)(Ze, {
                toolTipContent: n,
                children: [
                  this.props.buttonIcon || (0, B.jsx)(ya, {}),
                  a && (0, B.jsx)(aa, {}),
                ],
              }),
            }))
      );
    }
  };
(x([A], xa.prototype, `OnEmoticonClick`, null), (xa = x([t], xa)));
var Sa = xa;
export {
  Gt as $,
  tr as A,
  vn as B,
  nr as C,
  br as D,
  hr as E,
  G as F,
  on as G,
  pn as H,
  Un as I,
  qt as J,
  an as K,
  Pn as L,
  Gn as M,
  Kn as N,
  Sr as O,
  Vn as P,
  Jt as Q,
  U as R,
  K as S,
  ir as T,
  _n as U,
  yn as V,
  mn as W,
  Wt as X,
  Ht as Y,
  Yt as Z,
  ei as _,
  ua as a,
  Dt as at,
  qn as b,
  _a as c,
  vt as ct,
  aa as d,
  pt as dt,
  Ut as et,
  li as f,
  vi as g,
  ti as h,
  fa as i,
  Ot as it,
  gr as j,
  xr as k,
  ma as l,
  yt as lt,
  pi as m,
  va as n,
  Ft as nt,
  ha as o,
  kt as ot,
  gi as p,
  Kt as q,
  pa as r,
  Pt as rt,
  da as s,
  xt as st,
  Sa as t,
  Xt as tt,
  Ki as u,
  _t as ut,
  Jr as v,
  rr as w,
  Jn as x,
  Yn as y,
  Sn as z,
};
