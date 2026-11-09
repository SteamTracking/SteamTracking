/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $ as e,
  A as t,
  Gt as n,
  H as r,
  Ht as i,
  Jt as a,
  K as o,
  Kt as s,
  N as c,
  Ot as l,
  R as u,
  S as d,
  T as f,
  U as p,
  Ut as m,
  Wt as h,
  Xt as g,
  Y as _,
  Yt as v,
  _t as y,
  en as b,
  ft as x,
  gt as S,
  kt as C,
  lt as w,
  nt as T,
  on as E,
  pt as D,
  qt as O,
  rt as k,
  vt as A,
  yt as j,
} from "./mobx.esm.js";
import {
  At as ee,
  F as te,
  I as ne,
  It as re,
  Ot as ie,
  R as ae,
  _t as oe,
  d as se,
  l as ce,
  o as le,
  r as ue,
  t as de,
  u as fe,
  ut as pe,
} from "./src.js";
import { a as me, i as he, r as ge, t as _e } from "./usedataloader.client.js";
import {
  Ar as ve,
  Bi as ye,
  Bn as be,
  Bt as xe,
  Dr as Se,
  F as Ce,
  Ga as M,
  Gi as we,
  In as Te,
  Ki as Ee,
  Kn as De,
  La as N,
  Qa as Oe,
  Ra as ke,
  Rt as Ae,
  Sn as je,
  Wi as Me,
  Wt as Ne,
  Zt as Pe,
  _n as Fe,
  d as Ie,
  fa as Le,
  fn as Re,
  ki as ze,
  m as Be,
  oa as P,
  pn as Ve,
  s as He,
  sr as Ue,
  vr as We,
} from "./dialogs.js";
import {
  C as Ge,
  O as Ke,
  S as qe,
  _ as Je,
  a as Ye,
  b as Xe,
  c as Ze,
  d as Qe,
  f as $e,
  h as F,
  i as et,
  m as tt,
  n as nt,
  o as rt,
  p as it,
  w as at,
  x as ot,
  y as st,
} from "./storebrowsequerycontext.js";
import {
  a as ct,
  c as lt,
  i as ut,
  o as dt,
  r as ft,
  s as pt,
} from "./storenaveventcontext.js";
import {
  B as mt,
  D as ht,
  L as gt,
  M as _t,
  R as vt,
  V as yt,
  z as bt,
} from "./react-router.js";
import { a as xt, o as St, r as I } from "./servicetransportprovider.js";
import { i as L } from "./utils.js";
import { t as R } from "./useQuery.js";
import { t as Ct } from "./reactqueryroot.js";
import { t as z } from "./useMutation.js";
import { t as wt } from "./dataloader.js";
import { i as Tt, l as Et, r as Dt } from "./steammessages_store_pb.js";
import { i as Ot, t as kt } from "./cookies.client.js";
import {
  J as At,
  K as jt,
  L as Mt,
  V as Nt,
  W as Pt,
  X as Ft,
  q as It,
  r as Lt,
} from "./storeitem.js";
import "./steammessages_clan_pb.js";
import { r as Rt, t as zt } from "./appidutils.js";
import { t as Bt } from "./csstransitionwrapper.js";
import { t as B } from "./getpreferredlocales.js";
import { r as Vt } from "./modals.js";
import { n as Ht, t as Ut } from "./deckverified.js";
import { t as Wt } from "./axios.js";
import { t as Gt } from "./ajaxhooks.js";
import { t as Kt } from "./axiosutils.js";
import { t as qt } from "./throbber.js";
import { r as Jt } from "./currencyutils.js";
import {
  c as Yt,
  i as Xt,
  l as Zt,
  s as Qt,
  t as $t,
} from "./localization2.js";
import { t as en } from "./partnereventshared.module.js";
import "./steamid.js";
import { t as tn } from "./personautils.js";
import { t as nn } from "./loadingspinner.js";
function rn(e) {
  return !!e;
}
var V = E(C(), 1),
  an = (0, V.createContext)(void 0);
an.Provider;
function H() {
  let e = (0, V.useContext)(an);
  if (!e)
    throw Error(`called useActiveAccount outside of ActiveAccountProvider`);
  return e.useActiveAccount();
}
function on() {
  let e = I(),
    t = o.accountid,
    n = o.country_code;
  return R(sn(e, t, n));
}
function sn(e, t, n) {
  return {
    queryKey: un(t),
    queryFn: async () => {
      if (!t) return ln();
      let r = A.Init(Dt);
      r.Body().set_country_code(n);
      let i = await Et.GetStorePreferences(e, r);
      if (!i.BSuccess())
        throw `Error loading store preferences: ${i.GetErrorMessage()}`;
      return i.Body().toObject();
    },
    staleTime: 36e5,
  };
}
var cn = [4, 3];
function ln() {
  return {
    preferences: { primary_language: x(p.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: cn.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function un(e) {
  return [`StorePreferencesQueryKey`, e ?? 0];
}
var dn = `unUserdataVersion`;
function fn() {
  return Number.parseInt(window.localStorage.getItem(dn) || `0`);
}
function U(e, t, n) {
  let r = fn(),
    i = `${e}dynamicstore/userdata/?id=${t}&cc=${n}&origin=${self.origin}`;
  return (r && (i += `&v=${r}`), i);
}
function W() {
  window.localStorage.setItem(
    dn,
    (Number.parseInt(window.localStorage.getItem(dn) || `0`) + 1).toString(),
  );
}
var G = E(g(), 1),
  K = y();
async function pn(e, t) {
  let n = U(T.STORE_BASE_URL, t, k.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function mn(e, t, n) {
  return (await pn(e, t)).includes(n);
}
function hn() {
  let e = I(),
    t = o.accountid;
  return R(gn(e, t));
}
function gn(e, t) {
  return {
    queryKey: bn(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await pn(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function _n(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await mn(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function vn(e) {
  let t = I(),
    n = o.accountid,
    { data: r } = R(_n(t, n, e));
  return r === void 0 ? void 0 : r;
}
function yn(e) {
  let t = L(),
    n = o.accountid;
  return V.useCallback(
    (r) => {
      t.setQueryData(bn(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function bn(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function xn(e) {
  let { data: t } = F(e && `appid` in e ? void 0 : e),
    { data: n } = hn(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
var Sn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            listid: { n: 2, br: n.readUint64String, bw: v.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserInterface_CuratorData`;
    }
  },
  Cn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.domain || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            domain: { n: 1, br: n.readString, bw: v.writeString },
            controller: { n: 2, br: n.readString, bw: v.writeString },
            method: { n: 3, br: n.readString, bw: v.writeString },
            submethod: { n: 4, br: n.readString, bw: v.writeString },
            feature: { n: 5, br: n.readString, bw: v.writeString },
            depth: { n: 6, br: n.readUint32, bw: v.writeUint32 },
            countrycode: { n: 7, br: n.readString, bw: v.writeString },
            webkey: { n: 8, br: n.readUint64String, bw: v.writeUint64String },
            is_client: { n: 9, br: n.readBool, bw: v.writeBool },
            curator_data: { n: 10, c: Sn },
            is_likely_bot: { n: 11, br: n.readBool, bw: v.writeBool },
            is_utm: { n: 12, br: n.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserInterface_NavData`;
    }
  },
  wn = {
    any_controller: 0,
    xbox_controller: 1,
    ps3_controller: 2,
    ps4_controller: 3,
    ps5_controller: 4,
    switch_controller: 5,
    steam_controller: 6,
    steam_deck_neptune: 7,
    steam_deck_galileo: 8,
    switch2_controller: 9,
    steam_controller_triton: 10,
  };
function Tn() {
  let e = [...o.excluded_content_descriptors];
  return {
    bLoaded: !1,
    setWishlist: new Set(),
    rgWishlistInOrder: [],
    setOwnedApps: new Set(),
    setOwnedPackages: new Set(),
    setExcludedTagIDs: new Set(),
    rgExcludedTagIDsSorted: [],
    setExcludedContentDescriptors: new Set(e),
    rgExcludedContentDescriptors: e,
    setRecommendedApps: new Set(),
    rgRecommendedAppsInOrder: [],
    mapIgnoredApps: new Map(),
    mapIgnoredPackages: new Map(),
    setCuratorsFollowed: new Set(),
    rgCuratorsFollowed: [],
    setCuratorsIgnored: new Set(),
    mapRecommendingCuratorsForApp: new Map(),
    setPreferredPlatforms: new Set(),
    setHardwareUsed: new Set(),
    rgRecommendedTags: [],
    ePrimaryLanguage: -1,
    setSecondaryLanguages: new Set(),
    bShowFilteredUserReviewScores: !0,
    bAllowAppImpressions: !1,
  };
}
var En;
function Dn() {
  return (En ??= Tn());
}
function On() {
  return !!e(`wants_mature_content`);
}
function kn(e) {
  let t = Tn();
  if (
    ((t.bLoaded = !0),
    e.rgCurators &&
      ((t.rgCuratorsFollowed = Object.keys(e.rgCurators).map(Number)),
      (t.setCuratorsFollowed = new Set(t.rgCuratorsFollowed))),
    e.rgCuratorsIgnored &&
      (t.setCuratorsIgnored = new Set(e.rgCuratorsIgnored.map(Number))),
    e.rgWishlist &&
      ((t.rgWishlistInOrder = e.rgWishlist.map(Number)),
      (t.setWishlist = new Set(t.rgWishlistInOrder))),
    e.rgOwnedApps && (t.setOwnedApps = new Set(e.rgOwnedApps.map(Number))),
    e.rgOwnedPackages &&
      (t.setOwnedPackages = new Set(e.rgOwnedPackages.map(Number))),
    e.rgIgnoredApps && (t.mapIgnoredApps = An(e.rgIgnoredApps)),
    e.rgIgnoredPackages && (t.mapIgnoredPackages = An(e.rgIgnoredPackages)),
    e.rgExcludedTags &&
      ((t.setExcludedTagIDs = new Set(
        e.rgExcludedTags.map((e) => Number(e.tagid)),
      )),
      (t.rgExcludedTagIDsSorted = Array.from(t.setExcludedTagIDs).sort())),
    On()
      ? ((t.setExcludedContentDescriptors = new Set()),
        (t.rgExcludedContentDescriptors = []))
      : e.rgExcludedContentDescriptorIDs &&
        ((t.rgExcludedContentDescriptors = e.rgExcludedContentDescriptorIDs.map(
          (e) => Number(e),
        )),
        (t.setExcludedContentDescriptors = new Set(
          t.rgExcludedContentDescriptors,
        ))),
    e.rgRecommendedApps &&
      ((t.rgRecommendedAppsInOrder = e.rgRecommendedApps.map(Number)),
      (t.setRecommendedApps = new Set(t.rgRecommendedAppsInOrder))),
    e.rgPreferredPlatforms &&
      (t.setPreferredPlatforms = new Set(e.rgPreferredPlatforms)),
    e.bAllowAppImpressions && (t.bAllowAppImpressions = e.bAllowAppImpressions),
    (t.bShowFilteredUserReviewScores = !!e.bShowFilteredUserReviewScores),
    e.rgPrimaryLanguage !== void 0 &&
      (t.ePrimaryLanguage = e.rgPrimaryLanguage),
    e.rgSecondaryLanguages &&
      (t.setSecondaryLanguages = new Set(e.rgSecondaryLanguages)),
    e.rgRecommendedTags &&
      (t.rgRecommendedTags = e.rgRecommendedTags.map((e) => e.tagid)),
    e.rgCurations)
  )
    for (let n of Object.keys(e.rgCurations)) {
      let r = [];
      for (let t of Object.keys(e.rgCurations[n]))
        e.rgCurations[n][t] === 0 && r.push(Number(t));
      t.mapRecommendingCuratorsForApp.set(Number(n), r);
    }
  if (e.rgHardwareUsed)
    for (let n of e.rgHardwareUsed) {
      let e = wn[n];
      e !== void 0 && t.setHardwareUsed.add(e);
    }
  return t;
}
function An(e) {
  let t = new Map();
  for (let [n, r] of Object.entries(e)) {
    let e = Number(n);
    e && t.set(e, Number(r));
  }
  return t;
}
var jn = `dynamicuserdata`;
function Mn(e) {
  return [jn, e];
}
function Nn(e) {
  return e?.[0] == jn;
}
async function Pn(e) {
  try {
    let t = await fetch(U(p.STORE_BASE_URL, e, o.country_code), {
      credentials: `include`,
    });
    if (!t.ok) throw Error(`Server returned ${t.status}`);
    return kn(await t.json());
  } catch (e) {
    return (
      console.warn(`LoadDynamicUserData`, e),
      l().ReportError(Error(`LoadDynamicUserData ${e}`), {
        bIncludeMessageInIdentifier: !0,
      }),
      Tn()
    );
  }
}
var Fn = 6e4;
function In() {
  let e = o.accountid;
  return {
    queryKey: Mn(e),
    queryFn: () => Pn(e),
    staleTime: (e) => (e.state.data?.bLoaded === !1 ? Fn : 1 / 0),
    gcTime: 1 / 0,
    retry: !1,
    enabled: !0,
  };
}
function Ln() {
  return R(In());
}
function Rn(e) {
  let t = e.getQueryData(Mn(o.accountid));
  return (t && !t.bLoaded && zn(e), t ?? Dn());
}
function zn(e) {
  let t = e.getQueryState(Mn(o.accountid));
  t?.fetchStatus == `idle` &&
    Date.now() - t.dataUpdatedAt >= Fn &&
    e.prefetchQuery(In());
}
async function Bn(e) {
  return e.fetchQuery(In());
}
function Vn(e, t) {
  e.setQueryData(Mn(o.accountid), (e) => {
    if (!e) return;
    let n = t(e);
    return n ? { ...e, ...n } : e;
  });
}
var Hn = 3871,
  Un = 1664,
  Wn = 1684,
  Gn = 1667,
  Kn = 3942,
  qn = 1774,
  Jn = 1695,
  Yn = 3839,
  Xn = 1625,
  Zn = 1685,
  Qn = 1662,
  $n = 1663,
  er = 1773,
  tr = 3834,
  nr = 3799,
  rr = 1654,
  ir = 1698,
  ar = 1721,
  or = 1755,
  sr = 5716,
  cr = 4175,
  lr = 3978,
  ur = 12472,
  dr = 10695,
  fr = 4106,
  pr = 4231,
  mr = 1716,
  hr = 1702,
  gr = 5900,
  _r = 1741,
  vr = 1676,
  yr = 3959,
  br = 4885,
  xr = 1775,
  Sr = 1738,
  Cr = 1687,
  wr = 4604,
  Tr = 4434,
  Er = 9551,
  Dr = 3835,
  Or = 1645,
  kr = 1720,
  Ar = 4172,
  jr = 1666,
  Mr = 4115,
  Nr = 1628,
  Pr = 4486,
  Fr = 5395,
  Ir = 4328,
  Lr = 5613,
  Rr = 4191,
  zr = 44868,
  Br = 6730,
  Vr = 6129,
  Hr = 1665,
  Ur = 560542,
  Wr = 5154,
  Gr = 17305,
  Kr = 21725,
  qr = 3813,
  Jr = 31579,
  Yr = 4474,
  Xr = 1254546,
  Zr = 18594,
  Qr = 7038,
  $r = 1746,
  ei = 5727,
  ti = 791774,
  ni = 5652,
  ri = 615955,
  ii = 4102,
  ai = 3877,
  oi = 5537,
  si = 5379,
  ci = 10235,
  li = 220585,
  ui = 87918,
  di = 1100687,
  fi = 26921,
  pi = 1100688,
  mi = 91114,
  hi = 7178,
  gi = 723991,
  _i = 1239876,
  vi = 23491;
function yi(e) {
  let t = xt(),
    n = St();
  return R(Si(t.GetAnonymousServiceTransport(), n, e));
}
function bi(e) {
  return `LocalizedTagNames2_${e}`;
}
function xi(e) {
  let t = {};
  return ((e?.tags || []).forEach(({ tagid: e, name: n }) => (t[e] = n)), t);
}
function Si(e, t, n) {
  return {
    queryKey: [`LocalizedTagNames`, n],
    queryFn: async () => {
      let r = bi(n),
        i = await t.GetObject(r),
        a = A.Init(Tt);
      (a.Body().set_language(n),
        i?.version_hash && a.Body().set_have_version_hash(i.version_hash));
      let o = await Et.GetTagList(e, a),
        s;
      if (o.GetEResult() == 1)
        ((s = o.Body().toObject()), t && t.StoreObject(r, s));
      else if (o.GetEResult() == 29) s = i || void 0;
      else if (i)
        (console.warn(
          `Couldn't load updated tag localization, will continue with what we have from storage.`,
        ),
          (s = i));
      else throw o.GetErrorMessage();
      return xi(s);
    },
    staleTime: 36e5,
  };
}
function Ci(e, t) {
  let { data: n } = yi(t);
  return n && n[e];
}
function wi(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let n = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${p.MEDIA_CDN_COMMUNITY_URL}${n}`;
    }
    if (typeof e[t] == `string`) {
      let n = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${p.STORE_ITEM_BASE_URL}${n}`;
    }
  }
}
function Ti(e, t = `full`) {
  let n = ``;
  switch (t) {
    case `thumb`:
      n = `.116x65`;
      break;
    case `600x338`:
      n = `.600x338`;
      break;
    case `1920x1080`:
      n = `.1920x1080`;
      break;
    case `full`:
      n = ``;
      break;
    default:
      b(t, `Invalid size: ${t}`);
  }
  return (
    p.STORE_ITEM_BASE_URL + e.filename.replace(/\.([^.]+)(\?.*)?$/, `${n}.$1$2`)
  );
}
function Ei(e) {
  let { data: t } = ot(e),
    n = Ft();
  if (t)
    return [
      ...(t.all_ages_screenshots || []),
      ...(!n && t.mature_content_screenshots
        ? t.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
var Di = `qkhMGgZoiEA-`,
  Oi = `dR7N9Ozyb6k-`,
  ki = `_8j-XyEfRwfE-`;
function Ai(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(fe, {
    className: Di,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
function ji(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(fe, {
    className: ki,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
function Mi(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(fe, {
    className: Oi,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
var q = {};
((q.arabic = () =>
  M(() => import(`./localization_arabic.js`), [], import.meta.url)),
  (q.brazilian = () =>
    M(() => import(`./localization_brazilian.js`), [], import.meta.url)),
  (q.bulgarian = () =>
    M(() => import(`./localization_bulgarian.js`), [], import.meta.url)),
  (q.czech = () =>
    M(() => import(`./localization_czech.js`), [], import.meta.url)),
  (q.danish = () =>
    M(() => import(`./localization_danish.js`), [], import.meta.url)),
  (q.dutch = () =>
    M(() => import(`./localization_dutch.js`), [], import.meta.url)),
  (q.english = () =>
    M(() => import(`./localization_english.js`), [], import.meta.url)),
  (q.finnish = () =>
    M(() => import(`./localization_finnish.js`), [], import.meta.url)),
  (q.french = () =>
    M(() => import(`./localization_french.js`), [], import.meta.url)),
  (q.german = () =>
    M(() => import(`./localization_german.js`), [], import.meta.url)),
  (q.greek = () =>
    M(() => import(`./localization_greek.js`), [], import.meta.url)),
  (q.hungarian = () =>
    M(() => import(`./localization_hungarian.js`), [], import.meta.url)),
  (q.indonesian = () =>
    M(() => import(`./localization_indonesian.js`), [], import.meta.url)),
  (q.italian = () =>
    M(() => import(`./localization_italian.js`), [], import.meta.url)),
  (q.japanese = () =>
    M(() => import(`./localization_japanese.js`), [], import.meta.url)),
  (q.koreana = () =>
    M(() => import(`./localization_koreana.js`), [], import.meta.url)),
  (q.latam = () =>
    M(() => import(`./localization_latam.js`), [], import.meta.url)),
  (q.malay = () =>
    M(() => import(`./localization_malay.js`), [], import.meta.url)),
  (q.norwegian = () =>
    M(() => import(`./localization_norwegian.js`), [], import.meta.url)),
  (q.polish = () =>
    M(() => import(`./localization_polish.js`), [], import.meta.url)),
  (q.portuguese = () =>
    M(() => import(`./localization_portuguese.js`), [], import.meta.url)),
  (q.romanian = () =>
    M(() => import(`./localization_romanian.js`), [], import.meta.url)),
  (q.russian = () =>
    M(() => import(`./localization_russian.js`), [], import.meta.url)),
  (q.sc_schinese = () =>
    M(() => import(`./localization_sc_schinese.js`), [], import.meta.url)),
  (q.schinese = () =>
    M(() => import(`./localization_schinese.js`), [], import.meta.url)),
  (q.spanish = () =>
    M(() => import(`./localization_spanish.js`), [], import.meta.url)),
  (q.swedish = () =>
    M(() => import(`./localization_swedish.js`), [], import.meta.url)),
  (q.tchinese = () =>
    M(() => import(`./localization_tchinese.js`), [], import.meta.url)),
  (q.thai = () =>
    M(() => import(`./localization_thai.js`), [], import.meta.url)),
  (q.turkish = () =>
    M(() => import(`./localization_turkish.js`), [], import.meta.url)),
  (q.ukrainian = () =>
    M(() => import(`./localization_ukrainian.js`), [], import.meta.url)),
  (q.vietnamese = () =>
    M(() => import(`./localization_vietnamese.js`), [], import.meta.url)));
async function Ni(e) {
  if (q[e]) return await q[e]();
}
var Pi = ht(Ni),
  J = {
    PerYear: 31536e3,
    PerMonth: 2628e3,
    PerWeek: 604800,
    PerDay: 86400,
    PerHour: 3600,
    PerMinute: 60,
  };
function Fi(e, t, n) {
  let r;
  r =
    t === void 0 || t === !0 || t === !1
      ? { weekday: n ? `long` : `short`, year: t ? void 0 : `numeric` }
      : t;
  let i = new Date(e * 1e3),
    a = {
      weekday: `short`,
      month: `long`,
      day: `numeric`,
      year: `numeric`,
      ...r,
    };
  return i.toLocaleDateString(B(), a);
}
function Ii(e, t) {
  let n = new Date(e * 1e3),
    r = { year: `numeric`, month: `short`, day: `numeric`, ...t };
  return n.toLocaleDateString(B(), r);
}
function Li(e) {
  let t = new Date();
  return (
    t.setHours(15),
    t.toLocaleTimeString(e, { hour: `numeric` }) ==
      t.toLocaleTimeString(e, { hour: `numeric`, hour12: !1 })
  );
}
function Ri(e, t, n) {
  let r = new Date(e * 1e3),
    i = { hour: `numeric`, minute: `2-digit`, hourCycle: `h23` },
    a = { hour: `numeric`, minute: `2-digit` },
    o = B(),
    s = { ...(t?.bForce24HourClock || Li(o[0]) ? i : a), ...n };
  return r.toLocaleTimeString(o, s);
}
function zi(e) {
  return e.toLocaleDateString(B(), { month: `long`, year: `numeric` });
}
function Bi(e) {
  let t = Math.floor(e / J.PerYear),
    n = Math.floor(e / J.PerMonth),
    r = Math.floor((e % J.PerMonth) / J.PerDay),
    i = Math.floor((e % J.PerDay) / J.PerHour),
    a = Math.floor((e % J.PerHour) / J.PerMinute);
  return (
    (e %= J.PerMinute),
    t > 0
      ? Pi.Localize(`#TimeRemaining_MoreThanOneYear`)
      : n > 0
        ? Pi.Localize(`#TimeRemaining_MonthsDays`, n, r)
        : r > 0
          ? Pi.Localize(
              `#TimeRemaining_DaysHoursMinutes`,
              r,
              i.toString().padStart(2, `0`),
              a.toString().padStart(2, `0`),
            )
          : i > 0
            ? Pi.Localize(
                `#TimeRemaining_HoursMinutesSeconds`,
                i.toString().padStart(2, `0`),
                a.toString().padStart(2, `0`),
                e.toString().padStart(2, `0`),
              )
            : Pi.Localize(
                `#TimeRemaining_MinutesSeconds`,
                a.toString().padStart(2, `0`),
                e.toString().padStart(2, `0`),
              )
  );
}
var Vi = E(wt(), 1),
  Hi = E(re(), 1),
  Ui = `700px`;
function Wi() {
  return window.innerWidth < parseInt(Ui);
}
function Gi() {
  let e = te();
  return (
    V.useEffect(
      () => (
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      ),
      [e],
    ),
    window.innerWidth < parseInt(Ui)
  );
}
var Ki = `_8Wp5WbqAbJA-`,
  qi = `K2PjXmYWvSg-`,
  Ji = `UYfcYZDtfbs-`,
  Yi = `O-TsWDon65A-`,
  Xi = `E8DrK8oV4Hs-`,
  Zi = `XTfMA1ObAn4-`,
  Qi = `-Rv33oXsbT0-`,
  $i = `MN6Xv-pm6i8-`,
  ea = `uvLRAREPa4E-`,
  ta = `bdPmPtfuqIY-`,
  na = `JCVuyoKAC-k-`,
  ra = `UFAsjplGzxc-`,
  ia = `vL-XYGsLedM-`,
  aa = `aCttqIa8NC4-`,
  oa = `-rXzhlz0w3Q-`,
  sa = `R9ivMzB3Gic-`,
  ca = `W9-byrNtR9Q-`,
  la = `llT8dhJgnqw-`,
  ua = `kxs4VtommH4-`,
  da = `ncKEDk26SHQ-`,
  fa = `VGzHGCF3I5o-`,
  pa = `fNtXEMzHz58-`,
  ma = `jrHvWWIOlw4-`,
  ha = `FOKKfGVYUDk-`,
  ga = `OClIuwfiMKQ-`,
  _a = `ZLlm68-AqhM-`,
  va = `raYV6Y-MQ7I-`,
  ya = `IWFCYfhR05U-`,
  ba = `KtOQKgU1W5w-`,
  xa = `jXpKqo3-cWA-`,
  Sa = `_-7gyAR9oUx4-`,
  Ca = `GcBGxmj4uvE-`,
  wa = `QwN0eH2k0O0-`,
  Ta = `sgCiKk3DUeg-`,
  Ea = `N86EuolnWHc-`,
  Da = `A8oyzoRvWQ8-`,
  Oa = `V7rq-SSC9xQ-`,
  ka = `pNXxwljIaD8-`,
  Aa = `lsjYiHotCwA-`,
  ja = `iVV26V5rbpU-`,
  Ma = `XosTQwEOBO0-`,
  Na = `ITE-CUK3U10-`,
  Pa = `BZ9dZKOmXqE-`,
  Fa = `zMMJGDB8n-o-`,
  Ia = `XPrPiD27WdE-`,
  La = `R0sGSaFdUWo-`,
  Ra = `PON8X0ze5G8-`,
  za = `rfhpla0PGMA-`,
  Y = `OySWwOLLxFc-`,
  Ba = `tkR3-aHpyI4-`,
  Va = `yyrI0Nka69I-`,
  Ha = `D3fuhd6kG6I-`,
  Ua = `Xk-QP-zS-18-`,
  Wa = `I9cM1cZTYqc-`,
  Ga = `LkW8eRLttsM-`,
  Ka = `_4KL8m0wDedE-`,
  qa = `E3GBmOK5lMc-`,
  Ja = `lOHW8g-YyoY-`,
  Ya = `RQzfcqJK1Eg-`,
  Xa = `_0MLgqm-W-nA-`,
  Za = `v-RxDE-Li8U-`,
  Qa = `iwrzh-mg8hE-`,
  $a = `-G-r65tUoo0-`,
  eo = `qVhohSfcErA-`,
  to = `GqNlebj1uds-`,
  no = `oqhyMK1Krt0-`,
  ro = `GRw4r5TpD5s-`,
  io = `mspnwaz0EAg-`,
  ao = `_06Z7Ej-J6OU-`,
  oo = `lO9B4Ti6gBk-`,
  so = `lkVpo86MFuI-`,
  co = `chTH6btujQ0-`,
  lo = `_96v5CHkkJJY-`,
  uo = `GxypNLhVZWE-`,
  fo = `BD3vXqZ-6yI-`,
  po = `l9by-6sJDpM-`,
  mo = `LCYi5cxHqgI-`,
  ho = `ZuMhm9DQqbw-`,
  go = `eASrfjoxe3o-`,
  _o = `ppO76q5Y-Zg-`,
  vo = `WWolAsqP274-`,
  yo = `mP8HbLoIUo0-`,
  bo = `BuCaaYRb4Cg-`,
  xo = `bYNmqkeEJGc-`,
  So = `_4xLBehMPMIU-`,
  Co = `XiCMCQH8z2U-`,
  wo = `_3wT3W-azVyE-`,
  To = `EpyWQfQU-D4-`,
  Eo = `FDvyBhD2AA0-`,
  Do = `RIck6AI1vX8-`,
  Oo = `Sndyr6iqn8g-`,
  ko = `qUsoY9s6daM-`,
  Ao = `tUIs-i3NWoU-`,
  jo = `_8o-dkC5O1co-`,
  Mo = `v7ul8g8zqHs-`,
  No = `-cW4bgqyLAo-`,
  Po = `aN31caRmRcQ-`,
  Fo = `tobj1evrU4w-`,
  Io = `RAahmG4F6sc-`,
  Lo = `GL0tHV4bOk8-`,
  Ro = `LPcYz6LIoNo-`,
  zo = `IPcip0GPG-I-`,
  Bo = `GCeo-xmfx1A-`,
  Vo = 6,
  Ho = 1e3,
  Uo = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function Wo(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = F(t),
    o = V.useRef(0),
    s = V.useRef(null);
  V.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    l = At(t),
    u = n && !l ? t : void 0,
    d = It(u),
    f = It(u, !0);
  if ((r && p.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (l) return (0, K.jsx)(Ko, { id: t });
  if (!d) return null;
  let m = d.filter(Go);
  if (m.length === 0)
    return f?.some(Go)
      ? (0, K.jsx)(Ko, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, K.jsx)(Wo, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let h;
  switch (i) {
    case 1:
      h = Ro;
      break;
    case 2:
      h = zo;
  }
  let g = m[0];
  return (0, K.jsx)(`video`, {
    className: (0, Hi.default)(Lo, h),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, K.jsx)(qo, { trailer: g }),
  });
}
function Go(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function Ko(e) {
  let { id: t } = e,
    { data: n } = ot(t),
    [r, i] = V.useState(0),
    a = V.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, Vo),
      [n],
    );
  return (
    ne(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, Ho),
    a.length == 0
      ? null
      : (0, K.jsx)(`div`, {
          className: Lo,
          children: a.map((e, t) =>
            (0, K.jsx)(
              `img`,
              {
                className: (0, Hi.default)(Bo, t == r && `_8Ek7qtVBxvk-`),
                src: Ti(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function qo(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, K.jsx)(K.Fragment, {
        children: t.microtrailer?.map((e) =>
          p.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, K.jsx)(
                `source`,
                { src: Pt(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
function Jo(e) {
  return e
    ? !!(
        e.related_items &&
        e.related_items.standalone_demo_appid &&
        e.related_items.standalone_demo_appid.length > 0 &&
        e.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function Yo(e) {
  return !e || !e.related_items?.standalone_demo_appid
    ? []
    : e.related_items?.standalone_demo_appid;
}
function Xo(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return Nt(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? zi(new Date(t * 1e3))
        : Ii(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? Ii(t) : ``);
}
function Zo(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var Qo = 7;
function $o(e, t) {
  if (!e) return !1;
  let n = Zo(e);
  return n ? !e.is_coming_soon && n + Qo * J.PerDay > t : !1;
}
function es(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
var X = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid_giftee || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid_giftee: { n: 1, br: n.readInt32, bw: v.writeInt32 },
            gift_message: { n: 2, c: ts },
            time_scheduled_send: { n: 3, br: n.readInt32, bw: v.writeInt32 },
            email_giftee: { n: 4, br: n.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftInfo`;
    }
  },
  ts = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gifteename || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gifteename: { n: 1, br: n.readString, bw: v.writeString },
            message: { n: 2, br: n.readString, bw: v.writeString },
            sentiment: { n: 3, br: n.readString, bw: v.writeString },
            signature: { n: 4, br: n.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftMessage`;
    }
  },
  Z = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount_in_cents || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount_in_cents: {
              n: 1,
              br: n.readInt64String,
              bw: v.writeInt64String,
            },
            currency_code: { n: 2, br: n.readInt32, bw: v.writeInt32 },
            formatted_amount: { n: 3, br: n.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartAmount`;
    }
  },
  ns = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            gidcoupon: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            title: { n: 5, br: n.readString, bw: v.writeString },
            coupon_description: { n: 6, br: n.readString, bw: v.writeString },
            large_icon_url: { n: 7, br: n.readString, bw: v.writeString },
            discount_pct: { n: 8, br: n.readInt32, bw: v.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartCoupon`;
    }
  },
  rs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.context || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            context: { n: 2, c: gt },
            data_request: { n: 3, c: vt },
            gift_info: { n: 4, c: X },
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            gidreplayoftransid: {
              n: 5,
              br: n.readFixed64String,
              bw: v.writeFixed64String,
            },
            for_init_purchase: { n: 6, br: n.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Request`;
    }
  },
  is = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_items || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_items: { n: 1, c: as, r: !0, q: !0 },
            estimated_totals: { n: 5, c: ls },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response`;
    }
  },
  as = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            item_id: { n: 2, c: yt },
            store_item: { n: 3, c: mt },
            gift_info: { n: 4, c: X },
            errors: { n: 5, c: os },
            warnings: { n: 6, c: ss },
            subtotal: { n: 7, c: Z },
            price_when_added: { n: 8, c: Z },
            original_price: { n: 9, c: Z },
            coupon_applied: { n: 10, c: ns },
            coupon_discount: { n: 11, c: Z },
            can_purchase_as_gift: { n: 12, br: n.readBool, bw: v.writeBool },
            restrict_add_additional_to_cart: {
              n: 13,
              br: n.readBool,
              bw: v.writeBool,
            },
            quantity: { n: 14, br: n.readUint32, bw: v.writeUint32 },
            included_packageids: {
              n: 15,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem`;
    }
  },
  os = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            owned_appids: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readInt32,
              pbr: n.readPackedInt32,
              bw: v.writeRepeatedInt32,
            },
            duplicate_appids_in_cart: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readInt32,
              pbr: n.readPackedInt32,
              bw: v.writeRepeatedInt32,
            },
            unavailable_in_country: { n: 3, br: n.readBool, bw: v.writeBool },
            invalid_coupon: { n: 4, br: n.readBool, bw: v.writeBool },
            invalid_coupon_for_item: { n: 5, br: n.readBool, bw: v.writeBool },
            coupon_exclusive_promo: { n: 6, br: n.readBool, bw: v.writeBool },
            cannot_purchase_as_gift: { n: 7, br: n.readBool, bw: v.writeBool },
            invalid_item: { n: 8, br: n.readBool, bw: v.writeBool },
            too_many_in_cart: { n: 9, br: n.readBool, bw: v.writeBool },
            has_existing_billing_agreement: {
              n: 10,
              br: n.readBool,
              bw: v.writeBool,
            },
            missing_must_own_appids: {
              n: 11,
              r: !0,
              q: !0,
              br: n.readInt32,
              pbr: n.readPackedInt32,
              bw: v.writeRepeatedInt32,
            },
            adult_content_restricted: {
              n: 12,
              br: n.readBool,
              bw: v.writeBool,
            },
            commercial_license_restricted: {
              n: 13,
              br: n.readBool,
              bw: v.writeBool,
            },
            gift_not_valid_for_recipient_region: {
              n: 14,
              br: n.readBool,
              bw: v.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Errors`;
    }
  },
  ss = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            owned_appids: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readInt32,
              pbr: n.readPackedInt32,
              bw: v.writeRepeatedInt32,
            },
            owned_appids_extra_copy: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readInt32,
              pbr: n.readPackedInt32,
              bw: v.writeRepeatedInt32,
            },
            appids_in_mastersub: { n: 3, c: cs, r: !0, q: !0 },
            price_has_changed: { n: 4, br: n.readBool, bw: v.writeBool },
            non_refundable: { n: 5, br: n.readBool, bw: v.writeBool },
            gift_recipient_higher_price: {
              n: 6,
              br: n.readBool,
              bw: v.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings`;
    }
  },
  cs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_appid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_appid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            mastersub_appid: { n: 2, br: n.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub`;
    }
  },
  ls = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subtotal || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subtotal: { n: 1, c: Z },
            wallet_balance: { n: 2, c: Z },
            exceeding_wallet_balance: { n: 3, c: Z },
            remaining_wallet_balance: { n: 4, c: Z },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_EstimatedTotals`;
    }
  },
  us = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_ids || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { item_ids: { n: 1, c: yt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Request`;
    }
  },
  ds = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ownership_info || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ownership_info: { n: 1, c: ps, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response`;
    }
  },
  fs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            already_owns: { n: 2, br: n.readBool, bw: v.writeBool },
            wishes_for: { n: 3, br: n.readBool, bw: v.writeBool },
            partial_owns_appids: {
              n: 4,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            partial_wishes_for: {
              n: 5,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership`;
    }
  },
  ps = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: yt },
            friend_ownership: { n: 2, c: fs, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo`;
    }
  },
  ms = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { item_id: { n: 1, c: yt } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Request`;
    }
  },
  hs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageids_added || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageids_added: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            appids_added: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            purchase_result_detail: {
              n: 3,
              br: n.readUint32,
              bw: v.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Response`;
    }
  },
  gs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Checkout.ValidateCart#1`, j(rs, t, n), is, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ValidateCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Checkout.GetFriendOwnershipForGifting#1`,
      j(us, t, n),
      ds,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetFriendOwnershipForGifting = n;
  function r(e, t, n) {
    return e.SendMsg(`Checkout.AddFreeLicense#1`, j(ms, t, n), hs, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddFreeLicense = r;
})((gs ||= {}));
function _s(e) {
  let t = I(),
    n = yn();
  return z({
    mutationFn: () => vs(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: r, appids_added: i, purchase_result_detail: a },
      ] = e;
      i && n(i);
    },
  });
}
async function vs(e, t) {
  let n = A.Init(ms);
  n.Body().set_item_id(yt.fromObject(t));
  let r = await gs.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var ys = `PFP2RDjCi0w-`,
  bs = `Cbfoq6WaXq4-`,
  xs = `_4lcICEhYuQw-`,
  Ss = `unoV6P6DXbM-`,
  Cs = `p8d03I0RAAs-`,
  ws = `brHZRAeRCnw-`,
  Ts = `hATzo-Hjaaw-`,
  Es = `_7vEy4qHpqHo-`,
  Ds = `KoUJweWUwjY-`,
  Os = `XAGO1LWGig0-`,
  ks = `uN9-XHR7odQ-`,
  As = `CnbkzZzYDxs-`,
  js = `_8UjVVV-S-j8-`,
  Ms = `k0yt-Gxhbs4-`,
  Ns = `io6uTUtzW-A-`,
  Ps = `_58-zzK2uRws-`,
  Fs = `mGygcOFcFcQ-`,
  Is = `mW8gl4NPYGg-`,
  Ls = `X9907eDQcow-`,
  Rs = `GwjmtMACpAo-`,
  zs = `S8JsHzHuIMA-`,
  Bs = `_4nNWbL6J2cI-`,
  Vs = `Djw7Ta0NL0Q-`,
  Hs = `u-mW6oZelJ4-`,
  Us = `j0BUhYRjGwM-`,
  Ws = `I-L7P5K0HUM-`,
  Gs = `VYzpavMEA5M-`,
  Ks = `iXn31HpcmTo-`;
function qs(e) {
  let { id: n, bTruncateTotalReviews: r, bShowTooltip: i } = e,
    { data: a } = Xe(n),
    { data: o } = F(n),
    s = zt(n),
    { data: c } = F(s),
    { data: l } = on();
  if (!a || !o || (o.type == 1 && !Jo(c))) return null;
  let u = a.summary_unfiltered || a.summary_filtered,
    d = `#ReviewScore_UserReviewScoreAria`,
    f = !1,
    m = N.Localize(`#Language_` + p.LANGUAGE);
  if (
    (Js(l?.preferences?.review_score_preference) &&
      (a.summary_language_specific
        ? ((f = !0),
          (d = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (u = a.summary_language_specific))
        : (u = a.summary_filtered)),
    !u || !u.review_score)
  )
    return null;
  let h = Vs;
  h =
    u.review_score > 0 && u.review_score < 5
      ? Hs
      : u.review_score == 5
        ? Us
        : Ws;
  let g = `${p.STORE_BASE_URL}app/${o.appid}/#app_reviews_hash`,
    _ = (0, K.jsxs)(`div`, {
      className: t(Bs, h),
      children: [
        (0, K.jsx)(`div`, {
          className: Gs,
          "aria-label": N.Localize(d, u.review_score_label, m),
          children: u.review_score_label,
        }),
        (0, K.jsxs)(`div`, {
          className: zs,
          "aria-label": N.Localize(
            `#GameHover_UserReviewCount`,
            u.review_count.toLocaleString(B()),
          ),
          children: [
            `(`,
            r
              ? `(` + u.review_count.toLocaleString(B()) + `)`
              : f
                ? N.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    u.review_count.toLocaleString(B()),
                    m,
                  )
                : N.Localize(
                    `#GameHover_UserReviewCount`,
                    u.review_count.toLocaleString(B()),
                  ),
            `)`,
          ],
        }),
        !r &&
          (0, K.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, N.Localize(`#GameHover_UserReviewsHeader`)],
          }),
      ],
    }),
    v = `#ReviewScore_PercentPositive`;
  if (o.item_type === 2) v = `#ReviewScore_PercentPositive_bundle`;
  else if (o.item_type === 0)
    switch (o.type) {
      case 6:
        v = `#ReviewScore_PercentPositive_software`;
        break;
      case 7:
        v = `#ReviewScore_PercentPositive_video`;
        break;
      case 10:
        v = `#ReviewScore_PercentPositive_hardware`;
        break;
      case 8:
        v = `#ReviewScore_PercentPositive_series`;
    }
  return (0, K.jsx)(Pf, {
    url: g,
    className: t(Rs, `ReviewScore`),
    children:
      i && u.percent_positive != null && u.review_count != null && v
        ? (0, K.jsx)(Ve, {
            bTopmost: !0,
            toolTipContent: N.Localize(v, u.percent_positive, u.review_count),
            children: _,
          })
        : _,
  });
}
function Js(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function Ys(e, t) {
  let n = U(T.STORE_BASE_URL, t, k.country_code);
  return (await (await fetch(n)).json()).rgWishlist || [];
}
function Xs() {
  let e = I(),
    t = o.accountid;
  return R(Zs(e, t));
}
function Zs(e, t) {
  return {
    queryKey: ec(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Ys(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Qs(e) {
  let { data: t } = Xs();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function $s() {
  let e = L(),
    t = o.accountid;
  return (n, r) => {
    e.setQueryData(ec(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function ec(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function tc(e, t, n) {
  let r = $s(),
    i = k.accountid;
  return z({
    mutationKey: [`useUpdateWishlist`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          T.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, _()),
        n && i.append(`snr`, n));
      let a = await fetch(r, {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      if (!a.ok)
        throw Error(
          `Wishlist ${t ? `add` : `remove`} of appid ${e} failed (${a.status})`,
        );
    },
    onMutate: () => {
      e != null && r(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && r(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      W();
    },
  });
}
function nc(e) {
  let {
      id: n,
      snr: r,
      classOverride: i,
      styleOverride: a,
      bShowInGamepadUI: o,
    } = e,
    { data: s } = F(n),
    { elDialogElement: c, fnShowLogonDialog: l } = du(),
    [u, d] = (0, V.useState)(() => {
      if (s && (s.type == 1 || s.type == 12) && s.related_items?.parent_appid)
        return s.related_items?.parent_appid;
      if (n && `appid` in n) return n.appid;
    }),
    f = Rt(u),
    p = Qs(u),
    { bIsOwned: m } = xn(f),
    [h, g] = (0, V.useState)(!1),
    _ = Gt(`GameHoverWishlistButton`),
    { mutateAsync: v } = tc(u, !p, r);
  (0, V.useEffect)(() => {
    n &&
      `appid` in n &&
      (s?.type == 1 || s?.type == 12) &&
      d(s.related_items?.parent_appid || n.appid);
  }, [s, n]);
  let y = (0, V.useCallback)(
    async (e) => {
      k.logged_in
        ? (e.preventDefault(),
          e.stopPropagation(),
          g(!0),
          await v(),
          _.token.reason || g(!1))
        : l();
    },
    [_.token.reason, l, v],
  );
  return m && s?.type != 10
    ? null
    : (0, K.jsxs)(ke, {
        className: t(Ds, o && `B7tWNVp-vns-`, i),
        onActivate: y,
        style: a,
        children: [
          p ? (0, K.jsx)(we, {}) : (0, K.jsx)(Ee, {}),
          (0, K.jsx)(`div`, {
            className: t(Os, h && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: N.Localize(
              p ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          c,
        ],
      });
}
var rc = V.createContext({
  AddImpression: () => {
    console.log(`Impression Tracking not enabled`);
  },
  BIsValid: () => !1,
});
function ic() {
  return V.useContext(rc);
}
function ac(e) {
  let { appID: t, feature: n, depth: r, children: i } = e,
    a = dt(n, r),
    o = ic(),
    [s, c] = V.useState(void 0),
    l = V.useCallback(
      (e) => {
        e.isIntersecting &&
          c((e) => (e?.appID == t && e?.snr == a ? e : { appID: t, snr: a }));
      },
      [t, a],
    );
  (0, V.useEffect)(() => {
    s && s.appID != null && o.AddImpression(s.appID, s.snr);
  }, [o, s]);
  let u = le(l),
    d = t && (!s || (s.appID != t && s.snr != a)),
    f = ee(i.props.ref, d ? u : void 0);
  return V.cloneElement(i, { ref: f });
}
function oc(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function sc(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var cc = (e) => {
  let { appid: t } = e,
    n = (0, K.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, K.jsx)(ac, { appID: t, children: n }) : n;
};
function lc(e) {
  let { id: t } = e,
    { data: n } = Ge(t);
  return n
    ? (0, K.jsx)(`div`, {
        className: Ps,
        children: (0, K.jsx)(`div`, {
          className: Fs,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, K.jsx)(
                Ym,
                { tagid: e.tagid, className: Is },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function uc(e) {
  let {
      id: n,
      displayID: r,
      name: i,
      strStoreUrl: a,
      elElementToAppend: o,
      bShowDemoButton: s,
      bHideBottomHalf: c,
      bHidePrice: l,
      bShowDeckCompatibilityDialog: u,
      eHardwareCompatibilityDisplay: d,
      onShowDeckCompatibilityDialog: f,
      bUseSubscriptionLayout: p,
      nCreatorAccountID: m,
      bPreventNavigation: h,
      bShowDescription: g,
    } = e,
    _ = Df(),
    v =
      f &&
      (() => {
        (_?.(), f());
      }),
    [y, b] = (0, V.useState)(!1),
    [x, S] = (0, V.useState)(``),
    C = (e) => S(`translateY( -${e?.clientHeight || 0}px )`),
    { data: w } = F(n),
    { data: T } = Qe(r),
    E = !p && !s && !o,
    D = w && w.item_type == 0,
    [O, k] = sc(u, d);
  return (0, K.jsxs)(`div`, {
    className: ks,
    style: { transform: c && y ? x : `` },
    onMouseEnter: () => b(!0),
    onFocus: () => b(!0),
    onMouseLeave: () => b(!1),
    onBlur: () => b(!1),
    children: [
      (0, K.jsxs)(`a`, {
        href: a,
        className: ws,
        onClick: (e) => {
          h && e.preventDefault();
        },
        "aria-disabled": h,
        children: [
          T &&
            (0, K.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, K.jsx)(`div`, {
                className: t(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, K.jsx)(`img`, {
                  loading: `lazy`,
                  src: wi(T, `header`),
                  alt: w?.name,
                }),
              }),
            }),
          !l &&
            !p &&
            (0, K.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, K.jsx)(vc, { id: n, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, K.jsx)(`div`, {
        className: As,
        ref: C,
        children: (0, K.jsxs)(`div`, {
          className: Ms,
          children: [
            (0, K.jsx)(`a`, {
              href: a,
              onClick: (e) => {
                h && e.preventDefault();
              },
              "aria-disabled": h,
              children: (0, K.jsx)(`div`, {
                className: Ns,
                children: w?.name || i,
              }),
            }),
            g && (0, K.jsx)(fc, { id: n }),
            (0, K.jsx)(lc, { id: n }),
            !O && (0, K.jsx)(qs, { id: n }),
            !(O || !E) &&
              (0, K.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, K.jsx)(hc, { id: n, strClassName: `aRGldfNGEPM-` }),
                  (0, K.jsx)(dc, { id: n }),
                ],
              }),
            s && (0, K.jsx)(lu, { id: n, className: `mVkwv5PYwMg-` }),
            !!(O && D) &&
              (0, K.jsx)(Ht, { id: n, compatibility: k, onShowDialog: v }),
            !!o && o,
            p &&
              D &&
              n &&
              `appid` in n &&
              n.appid &&
              (0, K.jsx)(Pc, { appid: n.appid, bIsMuted: !1 }),
            m && (0, K.jsx)(nf, { nCreatorAccountID: m }),
          ],
        }),
      }),
    ],
  });
}
function dc(e) {
  let { id: t } = e,
    { data: n } = st(t);
  if (!n) return null;
  let r = Xo(n);
  return (0, K.jsx)(`div`, { className: Ls, children: r });
}
function fc(e) {
  let { id: t } = e,
    { data: n } = $e(t);
  return n
    ? (0, K.jsx)(`div`, { className: js, children: n?.short_description })
    : null;
}
function pc(e) {
  let {
      id: n,
      displayID: r,
      strStoreUrl: i,
      bHideBottomHalf: a,
      bShowDeckCompatibilityDialog: o,
      eHardwareCompatibilityDisplay: s,
      bShowWishlistButton: c = !0,
      bShowIgnoreButton: l = !1,
    } = e,
    { data: u } = at(n),
    { data: d } = ot(n),
    f = u === void 0 && d === void 0,
    [p] = sc(!!o, s);
  return (0, K.jsxs)(`div`, {
    className: t(ys, f && `dNo27dzDPfI-`, Ka, a && `djLCJl8FKv8-`),
    children: [
      (0, K.jsxs)(`a`, {
        href: i,
        className: bs,
        children: [
          !(!c || p) && (0, K.jsx)(nc, { id: r, snr: e.strSNR }),
          !(!l || p) && (0, K.jsx)(yd, { id: r, snr: e.strSNR }),
          n && (0, K.jsx)(hf, { id: n }),
        ],
      }),
      (0, K.jsx)(uc, { ...e }),
    ],
  });
}
function mc(e) {
  let {
      id: t,
      name: n,
      bPreventNavigation: r,
      elElementToAppend: i,
      bShowDemoButton: a,
      bPreferDemoStorePage: o,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strExtraParams: l,
      children: d,
      nCreatorAccountID: f,
      nWidthMultiplier: p,
      bShowDeckCompatibilityDialog: m,
      eHardwareCompatibilityDisplay: h,
      bShowWishlistButton: g = !0,
      bShowIgnoreButton: _ = !1,
      bShowDescription: v = !1,
      ...y
    } = e,
    { data: b } = F(t),
    x = u(),
    [S, C, w] = ae(),
    { strStoreURL: T, snr: E } = zc(b, o);
  if ((!b && !n) || x) return (0, K.jsx)(K.Fragment, { children: d });
  let D = t;
  b &&
    b.item_type == 1 &&
    b.included_appids?.length == 1 &&
    (D = { appid: b.included_appids[0] });
  let O = jf() == `hiding`,
    k = r || !b ? void 0 : T,
    [, A] = sc(m, h),
    j;
  A != 0 && b?.appid && b?.item_type == 0 && (j = b.appid);
  let ee = (0, K.jsx)(pc, {
      id: t,
      displayID: D,
      name: n,
      bPreventNavigation: r,
      strStoreUrl: k,
      elElementToAppend: i,
      bShowDemoButton: a,
      bShowDeckCompatibilityDialog: m,
      eHardwareCompatibilityDisplay: h,
      bHideBottomHalf: O,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strSNR: E,
      nCreatorAccountID: f,
      bShowWishlistButton: g,
      bShowIgnoreButton: _,
      bShowDescription: v,
      onShowDeckCompatibilityDialog: j ? C : void 0,
    }),
    te = k ? (0, K.jsx)(`a`, { href: k, children: d }) : d;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(Of, {
        hoverContent: ee,
        nWidthMultiplier: p,
        ...y,
        children: te,
      }),
      j &&
        (0, K.jsx)(Ut, {
          nAppID: j,
          appName: b?.name || n,
          startingTab: A,
          active: S,
          closeModal: w,
        }),
    ],
  });
}
function hc(e) {
  let { id: n, strClassName: r, bMinimizePlatforms: i, bHideWindows: a } = e,
    { data: o } = qe(n);
  if (!o) return null;
  if (i) {
    let e = a
      ? null
      : o?.windows &&
        (0, K.jsx)(`span`, {
          title: N.Localize(`#Platform_Windows`),
          children: (0, K.jsx)(Me, {
            "aria-label": N.Localize(`#Platform_Windows`),
          }),
        });
    return (
      p.PLATFORM === `linux` && o?.steamos_linux
        ? (e = (0, K.jsx)(`span`, {
            title: N.Localize(`#Platform_Linux`),
            children: (0, K.jsx)(ze, {
              "aria-label": N.Localize(`#Platform_Linux`),
            }),
          }))
        : p.PLATFORM === `macos` && o?.mac
          ? (e = (0, K.jsx)(`span`, {
              title: N.Localize(`#Platform_Mac`),
              children: (0, K.jsx)(De, {
                "aria-label": N.Localize(`#Platform_Mac`),
              }),
            }))
          : o.vr_support?.vrhmd &&
            (e = (0, K.jsx)(`span`, {
              title: N.Localize(`#Platform_VR`),
              children: (0, K.jsx)(ye, {
                "aria-label": N.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, K.jsx)(`span`, { className: t(aa, r), children: e }) : null
    );
  }
  return (0, K.jsxs)(`span`, {
    className: t(aa, r),
    children: [
      !a &&
        o.windows &&
        (0, K.jsx)(`span`, {
          title: N.Localize(`#Platform_Windows`),
          children: (0, K.jsx)(Me, {
            "aria-label": N.Localize(`#Platform_Windows`),
          }),
        }),
      o.mac &&
        (0, K.jsx)(`span`, {
          title: N.Localize(`#Platform_Mac`),
          children: (0, K.jsx)(De, {
            "aria-label": N.Localize(`#Platform_Mac`),
          }),
        }),
      o.steamos_linux &&
        (0, K.jsx)(`span`, {
          title: N.Localize(`#Platform_Linux`),
          children: (0, K.jsx)(ze, {
            "aria-label": N.Localize(`#Platform_Linux`),
          }),
        }),
      o.vr_support?.vrhmd &&
        (0, K.jsx)(`span`, {
          title: N.Localize(`#Platform_VR`),
          children: (0, K.jsx)(ye, {
            "aria-label": N.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function gc(e) {
  let {
      bundle_discount_pct: t = 0,
      discount_pct: n = 0,
      price_before_bundle_discount: r,
      formatted_price_before_bundle_discount: i,
      final_price_in_cents: a,
      price_to_base_discount_on: o,
    } = e,
    s = Number.parseInt(r || `0`);
  if (!(t <= 0 || s <= 0 || !i) && !(Number.parseInt(o || `0`) > 0))
    return n <= 0
      ? { nDiscountPct: t, strOriginalPrice: i, nSupersededBundlePct: 0 }
      : {
          nDiscountPct: Math.min(
            Math.floor(((s - Number.parseInt(a || `0`)) / s) * 100 + 0.5),
            99,
          ),
          strOriginalPrice: i,
          nSupersededBundlePct: t,
        };
}
function _c(e, t, n) {
  return e
    ? n
      ? t
        ? `#Sale_Bundle_Discount_Limited_ttip`
        : `#Sale_Bundle_Discount_ttip`
      : t
        ? `#Sale_CompleteTheSet_Discount_Limited_ttip`
        : `#Sale_CompleteTheSet_Discount_ttip`
    : `#Sale_Discount_ttip`;
}
function vc(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = it(t),
    { data: i } = F(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, K.jsx)(yc, { purchaseOption: a, ...e });
}
function yc(e) {
  let {
      bSingleLineMode: n,
      onlyOneDiscountPct: r,
      id: i,
      purchaseOption: a,
      bHidePrePurchase: s,
      bHideReleaseDate: c,
      bHideIfDemo: l,
      bPurchaseOptionDisplay: u,
      strContainerClassName: d,
      strDiscountAndPriceClassName: f,
      strPriceFormattedClassName: m,
      bPreferWholeNumbers: h,
      bSelfPurchaseOption: g,
      bHideNewTag: _,
      bPrePurchaseBesidePrice: v,
    } = e,
    y = p.NOW,
    { data: b } = st(i),
    { data: x } = F(i);
  if (!x) return null;
  let S = a,
    C = !_ && $o(b, y),
    w = t({
      [_a]: !0,
      [Ba]: n,
      StoreSalePriceWidgetContainer: !0,
      [Wa]: C,
      [ra]: u,
      [d ?? ``]: !!d,
    });
  if (e.bShowInLibrary)
    return (0, K.jsx)(`div`, {
      className: w,
      children: (0, K.jsx)(`div`, {
        className: Y,
        children: N.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (b && b.is_coming_soon && (!S || (!S.packageid && !S.bundleid))) {
    if (c) return null;
    let e =
      b.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(b.coming_soon_display)
        ? Nt(b)
        : N.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, Xo(b));
    return (0, K.jsx)(`div`, {
      className: w,
      children: (0, K.jsx)(`div`, { className: Y, children: e }),
    });
  }
  if (x.is_free) {
    if (!x.is_free_temporarily)
      return x.item_type == 0 && x.type == 1
        ? l
          ? null
          : (0, K.jsxs)(`div`, {
              className: w,
              children: [
                C &&
                  (0, K.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: N.Localize(`#Flag_New`),
                  }),
                (0, K.jsx)(`div`, {
                  className: Y,
                  children: N.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, K.jsxs)(`div`, {
            className: w,
            children: [
              C &&
                (0, K.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: N.Localize(`#Flag_New`),
                }),
              (0, K.jsx)(`div`, {
                className: Y,
                children: N.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (S && S.is_free_to_keep && !S.formatted_original_price)
      return (0, K.jsx)(`div`, {
        className: w,
        children: (0, K.jsx)(`div`, {
          className: Y,
          children: N.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!S || !S.formatted_final_price) return null;
  let T = x.item_type == 2,
    E = gc(S),
    D = !!E && !E.nSupersededBundlePct,
    O = E?.nSupersededBundlePct ? E.nDiscountPct : S.discount_pct || 0,
    k = ((E || T) && (!r || D || (E && !n)) && S.bundle_discount_pct) || 0,
    A = S.formatted_final_price;
  if (h) {
    let e = Jt(o.country_code.toUpperCase()),
      t = { ...he(e), bWholeUnitsOnly: !0 };
    A = ge(Number.parseInt(S.final_price_in_cents || `0`), t);
  }
  let j = es(b, S);
  return (0, K.jsx)(bc, {
    bSingleLineMode: !!n,
    bBundleItem: T,
    nBaseDiscountPercentage: k,
    nDiscountPercentage: O,
    bIsPrePurchase: j,
    strBestPurchaseOriginalPriceFormatted:
      E?.strOriginalPrice || S.formatted_original_price || ``,
    strBestPurchasePriceFormatted: A,
    bHideDiscountPercentForCompliance: !!S.hide_discount_pct_for_compliance,
    bShowNewFlag: C,
    bHidePrePurchase: !!s,
    bPrePurchaseBesidePrice: v,
    strDiscountAndPriceClassName: f,
    strPriceFormattedClassName: m,
    bPurchaseOptionDisplay: u,
  });
}
function bc(e) {
  let {
      bSingleLineMode: n,
      nDiscountPercentage: r,
      bIsPrePurchase: i,
      nBaseDiscountPercentage: a,
      strBestPurchaseOriginalPriceFormatted: o,
      strBestPurchasePriceFormatted: s,
      bHideDiscountPercentForCompliance: c,
      bShowNewFlag: l,
      bHidePrePurchase: u,
      bPrePurchaseBesidePrice: d,
      strDiscountAndPriceClassName: f,
      strPriceFormattedClassName: p,
      bPurchaseOptionDisplay: m,
      bBundleItem: h,
    } = e,
    g = c,
    _;
  r &&
    (_ = g
      ? N.Localize(`#Discount_ARIA_Label_SpecialPrice`, o)
      : N.Localize(`#Discount_ARIA_Label`, r, o, s));
  let v = !((!r && !a) || g) && !!o,
    y = !(!a || !r || g || n),
    b = N.Localize(_c(!!a, !!r, !!h));
  return (0, K.jsxs)(`div`, {
    className: t({
      [_a]: !0,
      [Ba]: n,
      StoreSalePriceWidgetContainer: !0,
      [Ra]: !!r,
      Discounted: !!r,
      [Ua]: !!i,
      [Ja]: !!d,
      [Wa]: !!l,
      [ra]: m,
      [f ?? ``]: !!f,
    }),
    "aria-label": _,
    children: [
      !(!i || u) &&
        (0, K.jsx)(`div`, {
          className: t(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, K.jsxs)(`span`, {
            children: [
              (0, K.jsx)(Ce, {}),
              N.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(i || !l) &&
        (0, K.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: N.Localize(`#Flag_New`),
        }),
      y &&
        (0, K.jsx)(Re, {
          toolTipContent: b,
          children: (0, K.jsxs)(`span`, {
            className: t(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, K.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${a}%`,
              }),
              `-${r}%`,
            ],
          }),
        }),
      !(!a || g || y) &&
        (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(Re, {
              toolTipContent: b,
              children: (0, K.jsx)(`span`, {
                className: t(`_-1f811oo4iw-`),
                children: `-${a}%`,
              }),
            }),
            !!r &&
              (0, K.jsx)(Re, {
                toolTipContent: b,
                children: (0, K.jsx)(`span`, {
                  className: t(`kjiBcsaqA8o-`),
                  children: `-${r}%`,
                }),
              }),
          ],
        }),
      !(a || !r || g) &&
        (0, K.jsx)(Re, {
          toolTipContent: b,
          children: (0, K.jsx)(`div`, {
            className: t(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${r}%`,
          }),
        }),
      !!(r && g) &&
        (0, K.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, K.jsx)(Se, {}),
        }),
      v
        ? (0, K.jsxs)(`div`, {
            className: t(Va),
            children: [
              (0, K.jsx)(`div`, {
                className: t({ [qa]: n, [Ha]: !n }),
                children: o,
              }),
              (0, K.jsx)(`div`, {
                className: t({ [Y]: !0, [Ba]: n, [p ?? ``]: !!p }),
                children: s,
              }),
            ],
          })
        : (0, K.jsx)(`div`, {
            className: t({ [Y]: !0, [p ?? ``]: !!p }),
            children: s,
          }),
    ],
  });
}
var xc = `pE3kiYj-T9c-`,
  Sc = `bXqn3-4kGc8-`,
  Cc = `bNGFzJt9CmI-`,
  wc = `vE1beFyJ7fE-`,
  Tc = `jLH2MgXW2QA-`,
  Ec = `dGNTZWr-al8-`,
  Dc = `_8aFotqvmohI-`,
  Oc = `sjibpkgu4sc-`,
  kc = `I09IQjtbMSg-`,
  Ac = `C4-YRfvAL7Q-`;
async function jc(e, t) {
  let n = `steam://run/` + e;
  T.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      Mc(e, n, t));
}
async function Mc(e, t, n) {
  console.log(`prompting for`, n);
  let r = T.STORE_BASE_URL + `about/`;
  Ie(
    (0, K.jsx)(Nc, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var Nc = (e) => {
  let n = () => e.closeModal && e.closeModal();
  return (0, K.jsx)(Be, {
    onEscKeypress: n,
    className: xc,
    children: (0, K.jsxs)(Ne, {
      children: [
        (0, K.jsxs)(Pe, { children: [` `, P(`#GotSteam_Title`), ` `] }),
        (0, K.jsxs)(Ae, {
          children: [
            (0, K.jsx)(xe, {
              children: Le(
                `#GotSteam_PromptWithDownloadLink`,
                (0, K.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: Sc,
                  children: P(`#GotSteam_DownloadLinkText`),
                }),
                (0, K.jsx)(`span`, { className: Cc, children: e.strGameName }),
              ),
            }),
            (0, K.jsxs)(`div`, {
              className: wc,
              children: [
                (0, K.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: n,
                  className: t(Tc, Ec),
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: Dc,
                      children: [` `, P(`#GotSteam_Yes`), ` `],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: Oc,
                      children: [` `, P(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, K.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: n,
                  className: Tc,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: Dc,
                      children: [` `, P(`#GotSteam_No`), ` `],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: Oc,
                      children: [` `, P(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: kc,
              children: [
                (0, K.jsx)(ze, { className: Ac }),
                P(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function Pc(e) {
  let { appid: n, bIsMuted: r } = e,
    i = Rt(n),
    a = vn(n),
    { data: o } = F(i),
    { mutate: s } = _s(i),
    c = (e) => {
      (e.preventDefault(), a ? jc(n, o?.name) : s());
    },
    l = t(pa, r && void 0, a ? ma : ha);
  return (0, K.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: c,
    className: l,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), c(e));
    },
    children: P(a ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function Fc(e, t = !1) {
  if (e)
    return t && Jo(e)
      ? `${p.STORE_BASE_URL}app/${Yo(e)[0]}`
      : `${p.STORE_BASE_URL}${e.store_url_path}`;
}
function Ic() {
  window.location.href = `${p.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var Lc = V.createContext({});
function Rc() {
  return V.useContext(Lc);
}
function zc(e, t) {
  let n = ft(),
    r = Rc(),
    i = Xt(Fc(e, t));
  return { snr: Zt(n), strStoreURL: Yt(i, n, r) };
}
function Bc(e) {
  return e
    ? { type: `replay`, gid: e }
    : o.logged_in
      ? { type: `account` }
      : { type: `anonymous`, gid: kt(Ot) };
}
var Vc = V.createContext({ cartID: void 0 });
function Hc() {
  return V.useContext(Vc).cartID || Bc();
}
function Uc(e) {
  return e.type === `account`;
}
function Wc(e) {
  return e.type === `anonymous`;
}
var Gc = {
  bCanAddItems: !0,
  bCanModify: !0,
  bCanPurchase: !0,
  bShowValidationNotices: !0,
  bShowPurchaseOptionPicker: !0,
  bShowPageFooter: !0,
  bCanChangeCountry: !0,
};
({ ...Gc }, { ...Gc });
var Kc = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.validation_failure || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            validation_failure: { n: 1, d: 0, br: n.readEnum, bw: v.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartValidationDetails`;
    }
  },
  qc = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_gift || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_gift: { n: 1, br: n.readBool, bw: v.writeBool },
            is_private: { n: 2, br: n.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItemFlags`;
    }
  },
  Jc = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            type: { n: 2, br: n.readEnum, bw: v.writeEnum },
            packageid: { n: 3, br: n.readUint32, bw: v.writeUint32 },
            bundleid: { n: 4, br: n.readUint32, bw: v.writeUint32 },
            is_valid: { n: 8, br: n.readBool, bw: v.writeBool },
            validation_details: { n: 9, c: Kc },
            time_added: { n: 10, br: n.readUint32, bw: v.writeUint32 },
            price_when_added: { n: 11, c: Z },
            gift_info: { n: 12, c: X },
            flags: { n: 13, c: qc },
            gidcoupon_applied: {
              n: 14,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItem`;
    }
  },
  Yc = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_items: { n: 1, c: Jc, r: !0, q: !0 },
            subtotal: { n: 2, c: Z },
            is_valid: { n: 3, br: n.readBool, bw: v.writeBool },
            validation_details: { n: 4, c: Kc },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartContents`;
    }
  },
  Xc = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: n.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Request`;
    }
  },
  Zc = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: Yc } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Response`;
    }
  },
  Qc = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: n.readString, bw: v.writeString },
            items: { n: 2, c: $c, r: !0, q: !0 },
            navdata: { n: 3, c: Cn },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request`;
    }
  },
  $c = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            bundleid: { n: 2, br: n.readUint32, bw: v.writeUint32 },
            gift_info: { n: 10, c: X },
            flags: { n: 11, c: qc },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request_ItemToAdd`;
    }
  },
  el = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_ids || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: v.writeRepeatedUint64String,
            },
            cart: { n: 2, c: Yc },
            replaced_packages: {
              n: 3,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
            existing_billing_agreementid: {
              n: 4,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            new_billing_agreement_recurring_packageid: {
              n: 5,
              br: n.readUint32,
              bw: v.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Response`;
    }
  },
  tl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            user_country: { n: 2, br: n.readString, bw: v.writeString },
            gift_info: { n: 10, c: X },
            flags: { n: 11, c: qc },
            apply_gidcoupon: {
              n: 12,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Request`;
    }
  },
  nl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: Yc } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Response`;
    }
  },
  rl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            user_country: { n: 2, br: n.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Request`;
    }
  },
  il = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: Yc } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Response`;
    }
  },
  al = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readFixed64String,
              bw: v.writeFixed64String,
            },
            user_country: { n: 2, br: n.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Request`;
    }
  },
  ol = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: Yc } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Response`;
    }
  },
  sl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_DeleteCart_Request`;
    }
  },
  cl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_DeleteCart_Response`;
    }
  },
  ll = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: n.readUint32, bw: v.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Request`;
    }
  },
  ul = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { line_items: { n: 1, c: dl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response`;
    }
  },
  dl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            coupons: { n: 2, c: ns, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response_LineItemCoupons`;
    }
  },
  fl;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountCart.GetCart#1`, j(Xc, t, n), Zc, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCart = t;
  function n(e, t, n) {
    return e.SendMsg(`AccountCart.AddItemsToCart#1`, j(Qc, t, n), el, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddItemsToCart = n;
  function r(e, t, n) {
    return e.SendMsg(`AccountCart.ModifyLineItem#1`, j(tl, t, n), nl, {
      ePrivilege: 1,
    });
  }
  e.ModifyLineItem = r;
  function i(e, t, n) {
    return e.SendMsg(`AccountCart.RemoveItemFromCart#1`, j(rl, t, n), il, {
      ePrivilege: 1,
    });
  }
  e.RemoveItemFromCart = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AccountCart.MergeShoppingCartContents#1`,
      j(al, t, n),
      ol,
      { ePrivilege: 1 },
    );
  }
  e.MergeShoppingCartContents = a;
  function o(e, t, n) {
    return e.SendMsg(`AccountCart.DeleteCart#1`, j(sl, t, n), cl, {
      ePrivilege: 1,
    });
  }
  e.DeleteCart = o;
  function s(e, t, n) {
    return e.SendMsg(`AccountCart.GetRelevantCoupons#1`, j(ll, t, n), ul, {
      ePrivilege: 1,
    });
  }
  e.GetRelevantCoupons = s;
})((fl ||= {}));
var pl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_requester || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid_requester: {
              n: 1,
              br: n.readFixed64String,
              bw: v.writeFixed64String,
            },
            purchase_request_id: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Request`;
    }
  },
  ml = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  hl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: n.readInt64String, bw: v.writeInt64String },
            currencycode: { n: 2, br: n.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Amount`;
    }
  },
  gl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            costwhenadded: { n: 2, c: hl },
            is_gift: { n: 3, br: n.readBool, bw: v.writeBool },
            gidbundle: {
              n: 4,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            quantity: { n: 5, br: n.readUint32, bw: v.writeUint32 },
            gift_info: { n: 6, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_PackageItem`;
    }
  },
  _l = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.walletcredit || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { walletcredit: { n: 1, c: hl } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  vl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            gidcoupontarget: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            packageid: { n: 3, br: n.readUint32, bw: v.writeUint32 },
            gidcoupon: {
              n: 4,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CouponItem`;
    }
  },
  yl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.microtxnappid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            microtxnappid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            microtxnassetclassid: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  bl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bundleid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bundleid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            quantity: { n: 2, br: n.readUint32, bw: v.writeUint32 },
            is_gift: { n: 3, br: n.readBool, bw: v.writeBool },
            gift_info: { n: 4, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_BundleItem`;
    }
  },
  xl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reward_id || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reward_id: { n: 1, br: n.readInt32, bw: v.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  Sl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidparent || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidparent: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            children: { n: 2, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RelationShip`;
    }
  },
  Cl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            gidcoupon: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            gidlineitem: {
              n: 3,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  wl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidlineitem || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidlineitem: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            package_item: { n: 2, c: gl },
            wallet_credit_item: { n: 3, c: _l },
            coupon_item: { n: 4, c: vl },
            micro_item: { n: 5, c: yl },
            bundle_item: { n: 7, c: bl },
            loyalty_item: { n: 8, c: xl },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Item`;
    }
  },
  Tl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.coupons || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { coupons: { n: 1, c: Cl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Potentials`;
    }
  },
  El = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Request`;
    }
  },
  Q = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.lineitems || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lineitems: { n: 1, c: wl, r: !0, q: !0 },
            treeview: { n: 2, c: Sl, r: !0, q: !0 },
            potentials: { n: 3, c: Tl },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Contents`;
    }
  },
  Dl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            contents: { n: 2, c: Q },
            time_created: { n: 3, br: n.readUint32, bw: v.writeUint32 },
            merged_into_account_cart: { n: 4, br: n.readBool, bw: v.writeBool },
            steamid_requester: {
              n: 5,
              br: n.readFixed64String,
              bw: v.writeFixed64String,
            },
            purchase_request_id: {
              n: 6,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Response`;
    }
  },
  Ol = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            browserid: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            cart_items: { n: 4, c: gl, r: !0, q: !0 },
            store_country_code: { n: 5, br: n.readString, bw: v.writeString },
            beta_mode: { n: 6, d: !1, br: n.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  kl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            contents: { n: 2, c: Q },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Response`;
    }
  },
  Al = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            quantity: { n: 3, br: n.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  jl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            contents: { n: 2, c: Q },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Response`;
    }
  },
  Ml = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            bundleid: { n: 2, br: n.readUint32, bw: v.writeUint32 },
            browserid: {
              n: 3,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            store_country: { n: 5, br: n.readString, bw: v.writeString },
            quantity: { n: 6, br: n.readUint32, bw: v.writeUint32 },
            beta_mode: { n: 7, d: !1, br: n.readBool, bw: v.writeBool },
            gift_info: { n: 8, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  Nl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: Q },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Response`;
    }
  },
  Pl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            gift_info: { n: 3, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  Fl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { contents: { n: 1, c: Q } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  Il = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            gidlineitems: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: v.writeRepeatedUint64String,
            },
            browserid: {
              n: 3,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  Ll = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: Q },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  Rl;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, j(pl, t, n), ml, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      j(El, t, n),
      Dl,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  e.GetShoppingCartContents = n;
  function r(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddPackages#1`, j(Ol, t, n), kl, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = r;
  function i(e, t, n) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, j(Al, t, n), jl, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = i;
  function a(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, j(Ml, t, n), Nl, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = a;
  function o(e, t, n) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, j(Pl, t, n), Fl, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ModifyLineItem = o;
  function s(e, t, n) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, j(Il, t, n), Ll, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.RemoveLineItems = s;
})((Rl ||= {}));
function zl(e) {
  return Uc(e) ? e.type : e.gid;
}
function Bl(e) {
  return [`shopping_cart`, zl(e), o.accountid];
}
function Vl(e) {
  e.invalidateQueries({ queryKey: [`validate_checkout`], exact: !1 });
}
function Hl(e, t, n) {
  (e.setQueryData(Bl(t), n), Vl(e));
}
async function Ul(e, t, n, r, i) {
  let a = new FormData();
  (t &&
    (t.length === 1
      ? a.set(`subid`, t[0].toString())
      : t.forEach((e) => a.append(`subid[]`, e.toString()))),
    n && a.set(`bundleid`, n.toString()),
    (r || i) &&
      (a.set(`isgift`, `1`), i && a.set(`gifteeaccountid`, i.toString())),
    a.set(`action`, `add_to_cart`));
  let o = await fetch(`${p.STORE_BASE_URL}cart/addtocart`, {
    method: `post`,
    body: a,
  });
  if (!o.ok) throw Error(`Failed to fetch /cart/addtocart`);
  let s = await o.json();
  return [s?.success ? 1 : 2, s?.contents];
}
async function Wl(e, t, n, r) {
  let i = A.Init(Qc);
  if (!n || n.length === 0)
    return (
      console.error(`No valid Package or Bundle provided to add to cart`),
      [8, null]
    );
  (n.forEach((e) => {
    let t = i.Body().add_items();
    (e.packageid
      ? t.set_packageid(e.packageid)
      : e.bundleid
        ? t.set_bundleid(e.bundleid)
        : console.error(
            `Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart`,
          ),
      e.bIsGift &&
        (t.flags(!0).set_is_gift(!0),
        e.nAccountIDGiftee &&
          t.gift_info(!0).set_accountid_giftee(e.nAccountIDGiftee)));
  }),
    r && i.Body().set_navdata(Cn.fromObject(lt(r))),
    i.Body().set_user_country(t));
  let a = await fl.AddItemsToCart(e, i);
  return (
    a.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${a.GetEResult()}`),
    [a.GetEResult(), a.Body().toObject()]
  );
}
function Gl(e) {
  let t = { line_items: [] };
  return (
    e?.lineitems?.length &&
      (t.line_items = e.lineitems
        .map((e) => (e.package_item?.gidbundle ? null : Kl(e)))
        .filter(rn)),
    t
  );
}
function Kl(e) {
  let t = { price_when_added: {}, flags: {} };
  return (
    (t.line_item_id = e.gidlineitem),
    e.bundle_item?.bundleid
      ? ((t.bundleid = e.bundle_item.bundleid),
        (t.type = 2),
        e.bundle_item.is_gift &&
          ((t.flags.is_gift = e.bundle_item.is_gift),
          (t.gift_info = e.bundle_item.gift_info)))
      : e.package_item &&
        ((t.packageid = e.package_item.packageid),
        (t.price_when_added.amount_in_cents =
          e.package_item.costwhenadded?.amount ?? ``),
        (t.price_when_added.currency_code =
          e.package_item.costwhenadded?.currencycode ?? 0),
        (t.type = 1),
        e.package_item.is_gift &&
          ((t.flags.is_gift = e.package_item.is_gift),
          (t.gift_info = e.package_item.gift_info))),
    t
  );
}
function ql(e, t, n, r, i) {
  return Jl(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function Jl(e, t) {
  let n = Hc(),
    r = I(),
    i = L(),
    { storeBrowseContext: a, dataLoader: o } = nt(),
    { country: s } = a,
    c = ut(t);
  return z({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (Uc(n)) {
        let [a, o] = await Wl(r, s, e, c);
        if (a == 1) ((t = o.line_item_ids), Hl(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (Wc(n)) {
        let a = e.map((e) => e.packageid).filter(rn),
          o = e.map((e) => e.bundleid).filter(rn);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await Ul(
          r,
          a.length > 0 ? a : void 0,
          o[0],
          e.some((e) => e.bIsGift),
          e.find((e) => e.nAccountIDGiftee)?.nAccountIDGiftee,
        );
        if (s == 1 && c) {
          let e = new Set(a),
            r = new Set(o);
          ((t =
            c.lineitems
              ?.filter(
                (t) =>
                  (t.package_item &&
                    !t.package_item.gidbundle &&
                    e.has(t.package_item.packageid)) ||
                  (t.bundle_item && r.has(t.bundle_item.bundleid)),
              )
              ?.map((e) => e.gidlineitem) || []),
            Hl(i, n, Gl(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(rt(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(Ye(o, r)), i.prefetchQuery(Ze(o, r)));
          },
        );
      })();
    },
  });
}
function Yl(e, t, n) {
  return ct(e ? `${p.STORE_BASE_URL}${e.store_url_path}` : void 0, t, n);
}
async function Xl(e, t) {
  let n = A.Init(_t);
  (n.Body().set_context(Mt(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await bt.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function Zl(e) {
  let t = eu(I());
  return R(Ql(t, e));
}
function Ql(e, t) {
  return { queryKey: $l(t), queryFn: async () => e.load(t), enabled: !!t };
}
function $l(e) {
  return [`hardwaredetail`, e];
}
function eu(e) {
  return _e(`HardwareDetailLoader`, () => tu(e));
}
function tu(e) {
  return new Vi.default(async (t) => {
    let n = await Xl(e, t),
      r = new Map();
    return (
      n &&
        n.forEach((e) => {
          e.packageid && r.set(e.packageid, e);
        }),
      t.map((e) => r.get(e) || null)
    );
  });
}
var nu = { high_pending_orders: !1, inventory_available: !0 };
function ru(e) {
  let { data: t } = F(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = Zl(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : nu) : null;
}
var iu = `wvEYeGaFmt0-`,
  au = `GW1050ijiP0-`;
function ou(e) {
  let { id: n, className: r } = e,
    i = ft(),
    { data: a } = F(n),
    { data: o } = st(n),
    { data: s } = tt(n),
    l = ru(n),
    { bIsOwned: u } = xn(n),
    d = Yl(a),
    f = (0, V.useCallback)(() => {
      if (a) {
        let e = a.appid;
        (a.related_items?.parent_appid &&
          a.type != 11 &&
          (e = a.related_items.parent_appid),
          je(window, `steam://run/${e}`));
      }
    }, [a]);
  if (!a || !o || !s || a.type == 8) return null;
  let p =
    a.is_free ||
    (s.final_price_in_cents != null && s.final_price_in_cents == `0`) ||
    (s.discount_pct && s.discount_pct >= 100);
  if (a.item_type == 1) {
    if (a.type == 10) {
      if (!l) return (0, K.jsx)(qt, { size: `small`, position: `center` });
      if (!l.inventory_available)
        return (0, K.jsx)(`div`, {
          className: t(au, r),
          children: (0, K.jsxs)(`span`, {
            children: [` `, N.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (p && a.included_appids && a.included_appids.length > 1)
      return null;
  }
  if (a.item_type == 0) {
    if ((o.is_coming_soon && !s.packageid) || (u && a.type === 10)) return null;
    if (!u && s.is_free_to_keep) {
      if (T.IN_CLIENT || c() != `store`) {
        let e = `${T.IN_CLIENT ? `steam://openurl/` : ``}${d}`;
        return (0, K.jsx)(`div`, {
          onClick: (t) => je(t, e),
          className: t(iu, r),
          children: (0, K.jsx)(`span`, {
            children: N.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = Qt(`${T.STORE_BASE_URL}freelicense/addfreelicense`, i);
        return (0, K.jsxs)(`form`, {
          action: e,
          method: `POST`,
          children: [
            (0, K.jsx)(`input`, {
              type: `hidden`,
              name: `subid`,
              value: s.packageid,
            }),
            (0, K.jsx)(`input`, {
              type: `hidden`,
              name: `sessionid`,
              value: _(),
            }),
            (0, K.jsx)(`button`, {
              className: t(iu, r),
              type: `submit`,
              children: N.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((u || p) && !a.is_coming_soon) {
      let e = N.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        u
          ? (e = N.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : a.is_free_temporarily &&
            (e = N.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, K.jsx)(`div`, {
          className: t(iu, r),
          onClick: f,
          children: (0, K.jsx)(`span`, { children: e }),
        })
      );
    }
    if (s.formatted_final_price == ``)
      return (0, K.jsx)(`a`, {
        href: d,
        className: t(iu, r),
        children: N.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, K.jsx)(su, {
    className: r,
    storeItemBestPurchaseOption: s,
    storeItemDefaultData: a,
  });
}
function su(e) {
  let {
      className: n,
      storeItemBestPurchaseOption: r,
      storeItemDefaultData: i,
    } = e,
    a = ft(),
    { mutate: o } = ql(r?.packageid, r?.bundleid, !1, void 0, a.feature);
  return (0, K.jsx)(`div`, {
    className: t(iu, n),
    onClick: () => o(),
    children: (0, K.jsx)(`span`, { children: N.Localize(`#Store_AddToCart`) }),
  });
}
var cu = `_8xhMURZRDBY-`;
function lu(e) {
  let { id: n, className: r } = e,
    { data: i } = F(n);
  if (!i) return null;
  let a =
      i.related_items?.demo_appid && i.related_items.demo_appid
        ? i.related_items.demo_appid
        : [],
    o = a.length > 0,
    s = o || i.type === 1,
    c = s
      ? N.Localize(`#Sale_InstallDemo_ttip`, i.name || ``)
      : o
        ? N.Localize(`#Sale_CannotInstallDemo_ttip`, i.name || ``)
        : N.Localize(`#Loading`);
  if (p.IN_MOBILE_WEBVIEW) {
    if (s && o) {
      let e = i.type === 1 ? i.appid : a[0];
      return (0, K.jsx)(`div`, {
        className: r,
        children: (0, K.jsx)(Um, { appid: e }),
      });
    }
    return null;
  }
  return !s && o && i.is_free
    ? (0, K.jsx)(ou, { id: n, className: r })
    : (0, K.jsx)(Ve, {
        toolTipContent: c,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            s && jc(i.type === 1 ? i.appid : a[0], i.name));
        },
        className: t(r, cu, !s && `gpIFsnR2ZGs-`),
        children: s
          ? N.Localize(`#Sale_InstallDemo`)
          : N.Localize(`#Sale_DemoNotFound`),
      });
}
function uu(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, K.jsx)(He, {
    strTitle: $t.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || $t.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: N.Localize(`#Button_OK`),
    onOK: () => {
      (Ic(), t());
    },
  });
}
function du(e) {
  let [t, n, r] = ae();
  return {
    elDialogElement: (0, K.jsx)(Vt, {
      active: t,
      children: (0, K.jsx)(uu, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
async function fu(e) {
  return gu(
    `${p.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function pu(e) {
  let t = de.InitFromClanID(e, p.EUNIVERSE);
  return gu(
    `${p.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function mu(e) {
  return gu(
    `${p.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function hu(e) {
  return gu(
    `${p.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function gu(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function _u(e) {
  return [`clantoclaninfo`, e];
}
function vu(e) {
  return [`apptoclanid`, e];
}
function yu(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function bu(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var xu = new WeakSet();
function Su(e) {
  if (!xu.has(e)) {
    xu.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var Cu = new WeakMap();
function wu(e) {
  if (!e) return null;
  let t = Cu.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new de(e.clanSteamIDString)
          : de.InitFromClanID(e.clanAccountID, p.EUNIVERSE),
      }),
      Cu.set(e, t)),
    t
  );
}
function Tu(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function Eu(e, t) {
  if (!t) return null;
  Su(e);
  let n = Tu(t);
  return (
    e.setQueryData(_u(n.clanAccountID), n),
    n.appid && e.setQueryData(vu(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(yu(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function Du(e, t) {
  for (let n of t) Eu(e, n);
}
function Ou(e) {
  let t = L();
  return R(ku(e, t));
}
function ku(e, t) {
  return (
    Su(t),
    {
      queryKey: _u(e ?? null),
      queryFn: async () => (e ? Eu(t, await pu(e)) : null),
      enabled: e !== void 0,
      select: wu,
    }
  );
}
function Au(e, t) {
  return (
    Su(t),
    {
      queryKey: vu(e),
      queryFn: async () => Eu(t, await fu(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function ju(e, t, n = `group`) {
  return (
    Su(t),
    {
      queryKey: yu(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(yu(e, `group`));
          if (n) return n;
        }
        return (
          Eu(t, n == `store` ? await hu(e) : await mu(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function Mu(e) {
  return e.isPending ? void 0 : (e.data ?? null);
}
function Nu(e) {
  let t = L(),
    n = R(Au(e, t));
  return Ou(e ? Mu(n) : void 0);
}
function Pu(e, t = `group`) {
  let n = L(),
    r = R(ju(e, n, t));
  return Ou(e ? Mu(r) : void 0);
}
function Fu(e, t) {
  if (e) return wu(t.getQueryData(_u(e))) ?? void 0;
}
function Iu(e, t) {
  if (e) return Fu(t.getQueryData(vu(e)), t);
}
function Lu(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = Fu(t.getQueryData(yu(e, n)), t);
    if (r) return r;
  }
}
async function Ru(e, t) {
  return e ? wu(await t.fetchQuery(ku(e, t))) : null;
}
async function zu(e, t) {
  return e ? Ru(await t.fetchQuery(Au(e, t)), t) : null;
}
async function Bu(e, t, n = `group`) {
  return e ? Ru(await t.fetchQuery(ju(e, t, n)), t) : null;
}
async function Vu(e) {
  let t = { get_appids: !0, l: p.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${p.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function Hu(e) {
  return R(Uu(e));
}
function Uu(e) {
  return {
    queryKey: Wu(e),
    queryFn: async () => {
      let t = await Vu(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function Wu(e) {
  return [`creatorhomebyaccount`, e];
}
function Gu(e, t) {
  if (e.vanity) {
    switch (t) {
      case `publisher`:
        return `${p.STORE_BASE_URL}publisher/${e.vanity}/`;
      case `franchise`:
        return `${p.STORE_BASE_URL}franchise/${e.vanity}/`;
    }
    return `${p.STORE_BASE_URL}developer/${e.vanity}/`;
  }
  return `${p.STORE_BASE_URL}curator/${e.creator_clan_id}/`;
}
var Ku = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Request`;
    }
  },
  qu = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ignore_list || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ignore_list: { n: 1, c: Ju, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response`;
    }
  },
  Ju = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            packageid: { n: 2, br: n.readUint32, bw: v.writeUint32 },
            reason: { n: 3, br: n.readEnum, bw: v.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response_IgnoreListEntry`;
    }
  },
  Yu;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StorePreferences.GetIgnoreList#1`, j(Ku, t, n), qu, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetIgnoreList = t;
})((Yu ||= {}));
var Xu = E(Wt()),
  Zu = class e {
    m_queryClient = Ct;
    m_boxCacheVersion = d.box(0);
    m_bInitialized = !1;
    m_boxAjaxInFlight = d.box(!1);
    LazyInit() {
      this.m_bInitialized ||
        ((this.m_bInitialized = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            Nn(e.query?.queryKey) &&
            f(() =>
              this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
            );
        }));
    }
    ReadData() {
      return (
        this.LazyInit(), this.m_boxCacheVersion.get(), Rn(this.m_queryClient)
      );
    }
    BIsLoaded() {
      return this.ReadData().bLoaded;
    }
    GetWishlistGamesInUserOrder() {
      return this.ReadData().rgWishlistInOrder;
    }
    GetRecommendedGamesInIRPriorityOrder() {
      return this.ReadData().rgRecommendedAppsInOrder;
    }
    GetFollowedCuratorCount() {
      return this.ReadData().setCuratorsFollowed.size;
    }
    GetFollowedCuratorsAccountID() {
      return this.ReadData().rgCuratorsFollowed;
    }
    BIsFollowingCurator(e) {
      return this.ReadData().setCuratorsFollowed.has(Qu(e));
    }
    BIsIgnoringCurator(e) {
      return this.ReadData().setCuratorsIgnored.has(Qu(e));
    }
    get ExcludedContentDescriptor() {
      return this.ReadData().rgExcludedContentDescriptors;
    }
    BExcludeTagIDs(e) {
      let t = this.ReadData().setExcludedTagIDs;
      return e.some((e) => t.has(e));
    }
    GetExcludedTagsSortedByID() {
      return this.ReadData().rgExcludedTagIDsSorted;
    }
    BExcludesContentDescriptor(e) {
      let t = this.ReadData().setExcludedContentDescriptors;
      return e.some((e) => t.has(e));
    }
    BIncludesContentDescriptor(e) {
      return !this.ReadData().setExcludedContentDescriptors.has(e);
    }
    BIsGameWishlisted(e) {
      return this.ReadData().setWishlist.has(Number(e));
    }
    BIsGameRecommended(e) {
      return this.ReadData().setRecommendedApps.has(Number(e));
    }
    BIsGameIgnored(e) {
      return !!e && this.ReadData().mapIgnoredApps.has(Number(e));
    }
    BIsPackageIgnored(e) {
      return !!e && this.ReadData().mapIgnoredPackages.has(Number(e));
    }
    BIsGameOwned(e) {
      return !!e && this.ReadData().setOwnedApps.has(Number(e));
    }
    BIsStoreItemOwned(e) {
      switch (e.GetStoreItemType()) {
        case 0:
          if (this.BIsGameOwned(e.GetAppID())) return !0;
          break;
        case 1:
        case 2:
          if (e.GetIncludedAppIDs().every((e) => this.BIsGameOwned(e)))
            return !0;
      }
      return !1;
    }
    BOwnsApp(e) {
      return !!e && this.ReadData().setOwnedApps.has(Number(e));
    }
    BOwnsPackage(e) {
      return this.ReadData().setOwnedPackages.has(Number(e));
    }
    BHasUsedHardware(e) {
      return this.ReadData().setHardwareUsed.has(e);
    }
    BShowFilteredUserReviewScores() {
      return this.ReadData().bShowFilteredUserReviewScores;
    }
    BAppImpressionsAllowed() {
      return this.ReadData().bAllowAppImpressions;
    }
    GetPrimaryLanguage() {
      return this.ReadData().ePrimaryLanguage;
    }
    GetSecondaryLanguages() {
      return this.ReadData().setSecondaryLanguages;
    }
    BIsAnyLanguageEnabled(e) {
      let { ePrimaryLanguage: t, setSecondaryLanguages: n } = this.ReadData();
      return (
        t == null || t <= -1 || 32 <= t || e.some((e) => t === e || n.has(e))
      );
    }
    GetRecommendedTags() {
      return this.ReadData().rgRecommendedTags;
    }
    BIsAjaxInFlight() {
      return this.m_boxAjaxInFlight.get();
    }
    BIsAppRecommendedBySomeCurator(e) {
      return this.ReadData().mapRecommendingCuratorsForApp.has(Number(e));
    }
    GetRecommendingCuratorsForApp(e) {
      return this.ReadData().mapRecommendingCuratorsForApp.get(Number(e));
    }
    BHasPlatformPreferenceSet() {
      let e = this.ReadData().setPreferredPlatforms.size;
      return e > 0 && e < 3;
    }
    BIsPreferredPlatform(e) {
      return this.ReadData().setPreferredPlatforms.has(e);
    }
    async HintLoad() {
      return (this.LazyInit(), await Bn(this.m_queryClient), this);
    }
    async UpdateFollowOrIgnoreCurator(e, t, n) {
      this.LazyInit();
      let r =
          T.STORE_BASE_URL + `curators/` + (t ? `ajaxfollow/` : `ajaxignore/`),
        i = e.GetAccountID(),
        a = new FormData();
      (a.append(`clanid`, `` + i),
        a.append(`sessionid`, _()),
        a.append(t ? `follow` : `ignore`, n ? `1` : `0`));
      let o = await Xu.default.post(r, a, { withCredentials: !0 });
      return (
        o &&
          o.status == 200 &&
          (this.InvalidateCache(),
          Vn(this.m_queryClient, (e) => {
            let r = new Set(t ? e.setCuratorsFollowed : e.setCuratorsIgnored);
            return (
              n ? r.add(i) : r.delete(i),
              t
                ? { setCuratorsFollowed: r, rgCuratorsFollowed: Array.from(r) }
                : { setCuratorsIgnored: r }
            );
          })),
        o.data
      );
    }
    async UpdateAppIgnore(e, t, n, r = 0) {
      this.LazyInit();
      let i = T.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`sessionid`, _()),
        a.append(`appid`, `` + e),
        a.append(`remove`, t ? `0` : `1`),
        a.append(`snr`, n),
        a.append(`ignore_reason`, `` + r));
      try {
        f(() => this.m_boxAjaxInFlight.set(!0));
        let n = await Xu.default.post(i, a, { withCredentials: !0 });
        return (
          n &&
            n.status == 200 &&
            (this.InvalidateCache(),
            Vn(this.m_queryClient, (n) => {
              let i = new Map(n.mapIgnoredApps);
              return (
                t ? i.set(Number(e), r) : i.delete(Number(e)),
                { mapIgnoredApps: i }
              );
            })),
          n.data
        );
      } catch (e) {
        let t = Kt(e);
        console.error(`UpdateAppIgnore`, t.strErrorMsg, t);
      } finally {
        f(() => this.m_boxAjaxInFlight.set(!1));
      }
      return { success: 2 };
    }
    async AddToCart(e, t, n, r, i, a, o) {
      if (
        window.g_bUseNewCartAPI !== void 0 &&
        window.g_bUseNewCartAPI &&
        typeof window.AddItemToCart == `function`
      ) {
        let e;
        return (i && (e = pt.ParseSNR(i)), window.AddItemToCart(t, a, e), !0);
      }
      let s = new FormData();
      (s.append(`action`, `add_to_cart`),
        a ? s.append(`bundleid`, a.toString()) : s.append(`subid`, `` + t),
        i && s.append(`snr`, i),
        s.append(`sessionid`, _()),
        s.append(`quantity`, `1`));
      let c = pe(e);
      e.preventDefault();
      try {
        (await Xu.default.post(n, s, { withCredentials: !0 }),
          this.InvalidateCache(),
          o?.fnSetURL ? o.fnSetURL(r) : (c.location.href = r));
      } catch (e) {
        return (console.log(`HandleOnAddToCart`, e), !1);
      }
      return !0;
    }
    InvalidateCache() {
      W();
    }
    static s_globalSingletonStore;
    static Get() {
      return ((e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore);
    }
    static BConfirmedAdultContentAgeGate() {
      return On();
    }
    constructor() {}
  };
function Qu(e) {
  return typeof e == `object` && `GetAccountID` in e
    ? e.GetAccountID()
    : Number(e);
}
function $u() {
  let { isPending: e } = Ln();
  return [e, Zu.Get()];
}
var ed = `_29km0evCwsI-`,
  td = `pL8IDIWBDg8-`,
  nd = `JuZBiq95wYE-`;
async function rd(e, t) {
  let n = U(T.STORE_BASE_URL, t, k.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function id() {
  let e = I(),
    t = k.accountid;
  return R(ad(e, t));
}
function ad(e, t) {
  return {
    queryKey: cd(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await rd(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function od(e) {
  let { data: t } = id();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function sd() {
  let e = L(),
    t = k.accountid;
  return (n, r) => {
    e.setQueryData(cd(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function cd(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function ld(e, t, n) {
  let r = sd(),
    i = k.accountid;
  return z({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = T.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, _()),
        t || i.append(`unfollow`, `1`),
        n && i.append(`snr`, n));
      let a = await fetch(r, {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      if (!a.ok)
        throw Error(
          `Follow App ${t ? `add` : `remove`} of appid ${e} failed (${a.status})`,
        );
    },
    onMutate: () => {
      e != null && r(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && r(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      W();
    },
  });
}
var ud = `VULTMp1PCTw-`,
  dd = `_2vLXBykr6zc-`;
async function fd(e, t) {
  let n = U(T.STORE_BASE_URL, t, k.country_code),
    r = await (await fetch(n)).json();
  return Object.keys(r.rgIgnoredApps).map(Number) || [];
}
function pd() {
  let e = I(),
    t = k.accountid;
  return R(md(e, t));
}
function md(e, t) {
  return {
    queryKey: _d(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await fd(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function hd(e) {
  let { data: t } = pd();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function gd() {
  let e = L(),
    t = k.accountid;
  return (n, r) => {
    e.setQueryData(_d(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function _d(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function vd(e, t, n, r = 0) {
  let i = gd(),
    a = k.accountid;
  return z({
    mutationKey: [`useUpdateAppIgnore`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let i = T.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, _()),
        a.append(`remove`, t ? `0` : `1`),
        n && a.append(`snr`, n),
        a.append(`ignore_reason`, `` + r));
      let o = await fetch(i, {
        method: `POST`,
        body: a,
        credentials: `include`,
      });
      if (!o.ok)
        throw Error(
          `Ignore App ${t ? `add` : `remove`} of appid ${e} failed (${o.status})`,
        );
    },
    onMutate: () => {
      e != null && i(t ? [e] : void 0, t ? void 0 : [e]);
    },
    onError: () => {
      e != null && i(t ? void 0 : [e], t ? [e] : void 0);
    },
    onSuccess: () => {
      W();
    },
  });
}
function yd(e) {
  let { id: n, snr: r, classOverride: i } = e,
    [a, o] = (0, V.useState)(!1),
    s = Gt(`GameHoverIgnoreButton`),
    { elDialogElement: c, fnShowLogonDialog: l } = du(),
    u = n && `appid` in n ? n.appid : void 0,
    { mutateAsync: d } = vd(u, !hd(u), r),
    f = n && `appid` in n && Zu.Get().BIsGameIgnored(n.appid);
  return (0, K.jsxs)(ke, {
    className: t(ud, i),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        k.logged_in
          ? n && `appid` in n && (o(!0), await d(), s.token.reason || o(!1))
          : l());
    },
    children: [
      (0, K.jsx)(ve, {}),
      (0, K.jsx)(`div`, {
        className: t(dd, a && `vyz9N2LpdMs-`),
        children: P(f ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      c,
    ],
  });
}
async function bd(e, t) {
  let n = U(T.STORE_BASE_URL, t, k.country_code),
    r = await (await fetch(n)).json(),
    i = new Set();
  (r.rgCreatorsIgnored?.forEach((e) => i.add(e)),
    r.rgCreatorsFollowed?.forEach((e) => i.add(e)));
  let a = new Set();
  return (
    r.rgCreatorsIgnored?.forEach((e) => a.add(e)),
    [
      ...(r.rgCuratorsIgnored ?? []),
      ...(r.rgCurators
        ? Object.values(r.rgCurators ?? {}).map((e) => e.clanid)
        : []),
    ].map((e) => {
      let t = a.has(e);
      return { clanid: e, ignored: t, followed: !t, is_creator: i.has(e) };
    })
  );
}
function xd() {
  let e = I(),
    t = o.accountid;
  return R(Sd(e, t));
}
function Sd(e, t) {
  return {
    queryKey: Dd(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await bd(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function Cd(e) {
  let { data: t } = xd();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function wd(e) {
  let { data: t } = xd();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function Td() {
  return p.EREALM != S.k_ESteamRealmChina;
}
function Ed() {
  let e = L(),
    t = o.accountid;
  return (n, r, i, a) => {
    e.setQueryData(Dd(t), (e) => {
      if (!e) return;
      let t = new Map(e);
      return (
        n?.forEach((e) => {
          t.has(e.clanAccountID)
            ? (t.get(e.clanAccountID).followed = !0)
            : t.set(e.clanAccountID, {
                clanid: e.clanAccountID,
                followed: !0,
                ignored: !1,
                is_creator: !1,
              });
        }),
        r?.forEach((e) => {
          t.has(e.clanAccountID)
            ? (t.get(e.clanAccountID).ignored = !0)
            : t.set(e.clanAccountID, {
                clanid: e.clanAccountID,
                followed: !1,
                ignored: !0,
                is_creator: !1,
              });
        }),
        i?.forEach((e) => t.delete(e.clanAccountID)),
        a?.forEach((e) => {
          let n = t.get(e.clanAccountID);
          n && (n.is_creator = !0);
        }),
        t
      );
    });
  };
}
function Dd(e) {
  return [`CuratorAffinityQueryKey`, e ?? 0];
}
var $ = (function (e) {
  return (
    (e[(e.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (e[(e.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (e[(e.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (e[(e.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    e
  );
})({});
function Od(e, t) {
  let n = Ed(),
    r = k.accountid;
  return z({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == $.k_ECuratorFollow || t == $.k_ECuratorUnfollow,
        r = t == $.k_ECuratorFollow || t == $.k_ECuratorIgnore,
        i = `${T.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, _()),
        a.append(n ? `follow` : `ignore`, r ? `1` : `0`));
      let o = await fetch(i, {
          method: `POST`,
          body: a,
          credentials: `include`,
        }),
        s = await o.json();
      if (!o.ok)
        throw Error(
          `Curator Affinity: ${n ? `Follow` : `Ignore`} Currator ${r ? `add` : `remove`} failed (${o.status} / ${s.msg})`,
        );
      return s.is_creator;
    },
    onMutate: () => {
      if (e != null) {
        let r = t == $.k_ECuratorUnfollow || t == $.k_ECuratorUnignore;
        n(
          t == $.k_ECuratorFollow ? [{ clanAccountID: e }] : void 0,
          t == $.k_ECuratorIgnore ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e }] : void 0,
        );
      }
    },
    onError: (r) => {
      if (e != null) {
        let i = t == $.k_ECuratorFollow || t == $.k_ECuratorIgnore;
        n(
          t == $.k_ECuratorUnfollow ? [{ clanAccountID: e }] : void 0,
          t == $.k_ECuratorUnignore ? [{ clanAccountID: e }] : void 0,
          i ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (t) => {
      (t &&
        e &&
        n(void 0, void 0, void 0, [{ clanAccountID: e, is_creator: !0 }]),
        W());
    },
  });
}
var kd = `QOSk1wMadGg-`,
  Ad = `DH1jwyMHeXo-`,
  jd = `J5g1CfUd95U-`,
  Md = `_3IPvWkyhZzM-`,
  Nd = `jB1S5EvgUjI-`,
  Pd = `iWO-8zu8RAA-`,
  Fd = `MTgAGoNV5vg-`,
  Id = `LEvP9jHHfL8-`,
  Ld = `K9ZawxnkJcI-`,
  Rd = `OlPIY4AN-5s-`,
  zd = `_7UT3Pb65ni0-`,
  Bd = `sT74IdnPxY8-`,
  Vd = `ZTz7p5tpqNU-`,
  Hd = `ct7kvDppls0-`,
  Ud = `SG9Xn5tF5a0-`,
  Wd = `clYVRh6K2Ig-`,
  Gd = `k6MwDwdCJTU-`,
  Kd = `mnFUxHcas-0-`,
  qd = `_6lWvo8crYSU-`,
  Jd = `r3PgsXSGPho-`,
  Yd = `EWCiFLRR-T8-`,
  Xd = `oXDp-N2XFF4-`,
  Zd = `GEroszngeLM-`,
  Qd = (e) => {
    let t = p.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, K.jsx)(He, {
      strTitle: P(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, K.jsx)(`div`, {
        children: Le(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, K.jsx)(`a`, {
            href: t,
            target: p.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: P(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  $d = (e) => {
    let {
        className: n,
        bIgnored: r,
        bApplyingFollowing: i,
        bFollowing: a,
        onFollowClick: s,
        followType: c,
      } = e,
      { elDialogElement: l, fnShowLogonDialog: u } = du();
    if (!Td()) return null;
    let d = null;
    switch (c) {
      case `app`:
        d = P(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        d = P(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        d = P(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        d = P(`#steam_group_follow_ttip`);
    }
    return d
      ? (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(Re, {
              toolTipContent: !r && !a ? d : void 0,
              children: (0, K.jsxs)(se, {
                className: t(en, Jd, `FollowButton`, n, a ? `Followed` : ``),
                onClick: () => {
                  o.logged_in ? s() : u();
                },
                children: [
                  i && (0, K.jsx)(nn, { size: 15 }),
                  !i && (a || r) && (0, K.jsx)(Ue, {}),
                  (0, K.jsx)(`div`, {
                    className: t(Yd, `FollowBtnText`),
                    children:
                      !i &&
                      P(
                        a
                          ? `#Button_Followed`
                          : r
                            ? `#Button_Ignored`
                            : `#Button_Follow`,
                      ),
                  }),
                ],
              }),
            }),
            l,
          ],
        })
      : (console.error(`CommonFollowButton unexpected type`, c), null);
  };
function ef(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, s] = V.useState(!1),
    { data: c } = Ou(t ? void 0 : r),
    l = Cd(r),
    u = wd(r),
    { mutateAsync: d } = Od(r, l ? $.k_ECuratorUnfollow : $.k_ECuratorFollow),
    [f, p, m] = ae(),
    h = V.useCallback(async () => {
      l != null && (s(!0), await d(), s(!1), n?.(l));
    }, [l, n, d]);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)($d, {
        className: i,
        bIgnored: !!u,
        bFollowing: !!l,
        bApplyingFollowing: a,
        onFollowClick: () => {
          o.is_limited ? p() : h();
        },
        followType: t ?? (c?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, K.jsx)(Vt, {
        active: f,
        children: (0, K.jsx)(Qd, { closeModal: m }),
      }),
    ],
  });
}
function tf(e) {
  let { appid: t, className: n } = e,
    [r, i] = V.useState(!1),
    a = od(t),
    o = hd(t),
    s = ft(),
    c = pt.GetSNRLinkParam(s),
    { mutateAsync: l } = ld(t, !a, c),
    u = V.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, K.jsx)($d, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function nf(e) {
  let {
      nCreatorAccountID: n,
      classOverride: r,
      styleOverride: i,
      followType: a,
    } = e,
    { data: o } = Ou(n),
    { data: s } = Hu(n);
  if (!o || !s) return null;
  let c = o.avatar_medium_url || o.avatar_full_url;
  return (
    (c ||= tn(void 0, `medium`, `web`)),
    (0, K.jsxs)(`div`, {
      className: t(Ks, r),
      style: i,
      children: [
        (0, K.jsx)(`a`, {
          href: Gu(s, `developer`),
          children: (0, K.jsx)(`img`, { src: c, alt: o.group_name }),
        }),
        (0, K.jsx)(ef, { clanAccountID: n, followType: a }),
      ],
    })
  );
}
var rf = new URL(
    `../../../images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  af = 5500,
  of = 2e3,
  sf = 10;
function cf(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, K.jsx)(
          `img`,
          {
            className: Ss,
            loading: `lazy`,
            src: wi(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: of,
      }
    : null;
}
function lf(e, t) {
  return {
    stringifyID: `vid_${Ke(e)}`,
    rctImage: (0, K.jsx)(Wo, { id: e, active: !0 }),
    nDurationMs: af,
  };
}
function uf(e) {
  let t = jt(e);
  return At(e) ? void 0 : t;
}
function df(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = Ti(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${Ke(e)}`,
      rctImage: (0, K.jsx)(
        `img`,
        {
          className: Ss,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: of,
    };
  });
}
function ff(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(lf(e, i)),
    r && r.length > 0 && a.push(...df(e, t.name, r, sf)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = cf(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function pf(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(lf(t, a)), r && r.length > 0 && o.push(...df(e, n.name, r, sf)));
  let s = sf - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...df(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function mf(e) {
  return (0, K.jsx)(`img`, {
    className: Ss,
    loading: `lazy`,
    src: r(rf),
    alt: `default`,
  });
}
function hf(e) {
  let { id: t } = e,
    { data: n } = Je(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, K.jsx)(`div`, {
      className: xs,
      children: (0, K.jsx)(mf, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, K.jsx)(yf, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, K.jsx)(_f, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, K.jsx)(gf, { storeItemDefaultData: n });
}
function gf(e) {
  let { storeItemDefaultData: t } = e,
    n = Lt(t),
    r = uf(n),
    { data: i } = Qe(n),
    a = Ei(n),
    o = (0, V.useMemo)(() => ff(n, t, i, a, r), [n, a, r, i, t]);
  return (0, K.jsx)(bf, { rgTrailerAndImages: o });
}
function _f(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = Lt(t);
  return uf(r)
    ? (0, K.jsx)(gf, { storeItemDefaultData: t })
    : (0, K.jsx)(vf, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function vf(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = Rt(t),
    a = Ei(n),
    o = Ei(i),
    s = uf(i),
    c = (0, V.useMemo)(() => pf(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, K.jsx)(bf, { rgTrailerAndImages: c });
}
function yf(e) {
  let { includeAppIDs: t } = e,
    n = et(),
    r = me({ queries: t.map((e) => Ye(n, { appid: e })) }),
    i = me({ queries: t.map((e) => rt(n, { appid: e })) }),
    a = (0, V.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return cf(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, K.jsx)(bf, { rgTrailerAndImages: a });
}
function bf(e) {
  let { rgTrailerAndImages: n } = e,
    r = (0, V.useRef)(0),
    i = te(),
    [a] = V.useState(new oe()),
    o = (0, V.useCallback)(
      (e = !1) => {
        if ((e && (r.current = 0), n?.length > 0)) {
          let e = n[r.current].nDurationMs;
          a.Schedule(e, () => {
            let e = r.current;
            ((r.current = (r.current + 1) % n.length),
              e != r.current && (o(), i()));
          });
        }
      },
      [n, a, i],
    );
  return (
    (0, V.useEffect)(() => (n.length > 0 && o(), () => a.Cancel()), [n, o, a]),
    (0, K.jsx)(`div`, {
      className: xs,
      children: n?.map((e, n) =>
        (0, K.jsx)(
          `div`,
          {
            className: t({ [Ss]: !0, [Cs]: n != r.current }),
            children: e.rctImage,
          },
          `e-` + n + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var xf = `ghYXSqVPJ-U-`,
  Sf = `lx1fe7xI0bg-`,
  Cf = `ARp2qEoElPE-`,
  wf = `DwDon-U2yLI-`,
  Tf = 150,
  Ef = V.createContext(void 0);
function Df() {
  return V.useContext(Ef);
}
function Of(e) {
  let {
      hoverContent: n,
      hoverProps: r,
      nDelayShowMs: i,
      nWidthMultiplier: a,
      children: o,
      className: s,
    } = e,
    c = u(),
    l = Gi(),
    d = !c && !l,
    [f, p] = V.useState(!1),
    [m, h] = V.useState(void 0),
    g = (e) => {
      (p(!0), h(e.currentTarget));
    },
    _ = () => p(!1),
    v = V.useCallback(() => p(!1), []);
  return (0, K.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: t(xf, s),
    onMouseEnter: g,
    onMouseLeave: _,
    onTouchStart: () => p(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (p(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      d &&
        m &&
        (0, K.jsx)(Ef.Provider, {
          value: v,
          children: (0, K.jsx)(kf, {
            visible: f,
            target: m,
            nDelayShowMs: i,
            nWidthMultiplier: a,
            hoverProps: r,
            children: n,
          }),
        }),
      (0, K.jsx)(ue, { children: o }),
    ],
  });
}
function kf(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = Tf,
      nWidthMultiplier: r = 1.15,
      target: i,
      visible: a,
      children: o,
    } = e,
    [s, c] = V.useState(a);
  if (
    (V.useEffect(() => {
      if (a) {
        if (n) {
          let e = window.setTimeout(() => c(!0), n);
          return () => window.clearTimeout(e);
        }
        c(!0);
      } else {
        if (Oe()) return;
        c(!1);
      }
    }, [a]),
    V.useEffect(() => {
      if (!s) return;
      let e = i.ownerDocument.defaultView;
      if (e) {
        let t = e.scrollY,
          n = () => {
            Math.abs(e.scrollY - t) > 50 && c(!1);
          };
        return (
          window.addEventListener(`scroll`, n),
          () => window.removeEventListener(`scroll`, n)
        );
      }
      return () => {};
    }, [s, i?.ownerDocument.defaultView]),
    !i || !o || !s)
  )
    return null;
  let l = i.clientWidth < 200 ? `8px` : `10px`,
    u = {
      direction: `overlay-center`,
      bEnablePointerEvents: !0,
      ...(t || {}),
      style: {
        zIndex: 98,
        width: i.clientWidth * r,
        fontSize: l,
        minHeight: jf() == `hiding` ? void 0 : 300,
        height: jf() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, K.jsx)(Af, {
    hoverProps: u,
    children: (0, K.jsx)(ue, { children: o }),
  });
}
function Af(e) {
  let { hoverProps: n, children: r } = e,
    i = V.useCallback((e) => e?.focus(), []);
  return (0, K.jsx)(Fe, {
    ...n,
    children: (0, K.jsx)(Bt, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: t(Cf, Ts), enterDone: t(wf, Es) },
      children: (e) =>
        (0, K.jsx)(`div`, {
          ref: ie(e, i),
          className: Sf,
          tabIndex: -1,
          children: r,
        }),
    }),
  });
}
function jf() {
  return window.sessionStorage?.getItem(Mf) || `default`;
}
var Mf = `DEBUG_UseNewGameHover`;
function Nf(e) {
  window.sessionStorage.setItem(Mf, e);
}
window.SetHoverPresentation = Nf;
function Pf(e) {
  let {
      className: t,
      url: n,
      style: r,
      children: i,
      bSkipForcingStoreLink: a,
      bOpenInline: o,
      bFocusable: s = !0,
      fnCanTakeFocus: c,
    } = e,
    l = a ? n : n ? Ff(n, p.STORE_BASE_URL) : void 0,
    u = ct(l);
  return u
    ? (0, K.jsx)(ce, {
        href: u,
        target: p.IN_CLIENT || o ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: s,
        fnCanTakeFocus: c,
        children: i,
      })
    : (0, K.jsx)(`span`, { style: r, className: t, children: i });
}
function Ff(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
var If = -700,
  Lf = -600,
  Rf = -599,
  zf = -598,
  Bf = -597,
  Vf = -596,
  Hf = -595,
  Uf = -594,
  Wf = -593,
  Gf = -592,
  Kf = -591,
  qf = -590,
  Jf = -589,
  Yf = -588,
  Xf = -587,
  Zf = -586,
  Qf = -585,
  $f = -584,
  ep = -583,
  tp = -582,
  np = -581,
  rp = -580,
  ip = -579,
  ap = -578,
  op = -577,
  sp = -576,
  cp = -575,
  lp = -574,
  up = -573,
  dp = -572,
  fp = -571,
  pp = -500,
  mp = -499,
  hp = -498,
  gp = -497,
  _p = -496,
  vp = -300,
  yp = -203,
  bp = -202,
  xp = -201,
  Sp = -200,
  Cp = -199,
  wp = -198,
  Tp = -197,
  Ep = -196,
  Dp = -195,
  Op = -194,
  kp = -193,
  Ap = -192,
  jp = -191,
  Mp = -190,
  Np = -189,
  Pp = -188,
  Fp = -187,
  Ip = -186,
  Lp = -185,
  Rp = -184,
  zp = -183,
  Bp = -182,
  Vp = -102,
  Hp = -101,
  Up = -100;
function Wp(e) {
  switch (e) {
    case 0:
      return `Windows`;
    case 1:
      return `Windows 3.11`;
    case 2:
      return `Windows 95`;
    case 3:
      return `Windows 98`;
    case 4:
      return `Windows ME`;
    case 5:
      return `Windows NT`;
    case 6:
      return `Windows 2000`;
    case 7:
      return `Windows XP`;
    case 8:
      return `Windows 2003`;
    case 9:
      return `Windows Vista`;
    case 10:
      return `Windows 7`;
    case 11:
      return `Windows 2008`;
    case 12:
      return `Windows 2012`;
    case 15:
      return `Windows 2012 R2`;
    case 13:
      return `Windows 8`;
    case 14:
      return `Windows 8.1`;
    case 16:
      return `Windows 10`;
    case 17:
      return `Windows 2016`;
    case 18:
      return `Windows 2019`;
    case 19:
      return `Windows 2022`;
    case 20:
      return `Windows 11`;
    case Vp:
      return `Mac OS`;
    case Hp:
      return `MacOS 10.4`;
    case Up:
      return `MacOS 10.5`;
    case -99:
      return `MacOS 10.5.8`;
    case -95:
      return `MacOS 10.6`;
    case -94:
      return `MacOS 10.6.3`;
    case -93:
      return `MacOS 10.6.4 with Apple's Snow Leopard Graphics Update`;
    case -92:
      return `MacOS 10.6.7`;
    case -90:
      return `MacOS 10.7`;
    case -89:
      return `MacOS 10.8`;
    case -88:
      return `MacOS 10.9`;
    case -87:
      return `MacOS 10.10`;
    case -86:
      return `MacOS 10.11`;
    case -85:
      return `MacOS 10.12`;
    case -84:
      return `MacOS 10.13`;
    case -83:
      return `MacOS 10.14`;
    case -82:
      return `MacOS 10.15`;
    case -81:
      return `MacOS 11 (as 10.16)`;
    case -75:
      return `MacOS 12 (as 10.17)`;
    case -70:
      return `MacOS 13 (as 10.18)`;
    case -80:
      return `MacOS 11`;
    case -79:
      return `MacOS 11.1`;
    case -74:
      return `MacOS 12`;
    case -69:
      return `MacOS 13`;
    case -68:
      return `MacOS 14`;
    case -67:
      return `MacOS 15`;
    case yp:
      return `Linux`;
    case bp:
      return `Linux 2.2`;
    case xp:
      return `Linux 2.4`;
    case Sp:
      return `Linux 2.6`;
    case Cp:
      return `Linux 3.2`;
    case wp:
      return `Linux 3.5`;
    case Tp:
      return `Linux 3.6`;
    case Ep:
      return `Linux 3.10`;
    case Dp:
      return `Linux 3.16`;
    case Op:
      return `Linux 3.18`;
    case kp:
      return `Linux 3.x`;
    case jp:
      return `Linux 4.1`;
    case Mp:
      return `Linux 4.4`;
    case Np:
      return `Linux 4.9`;
    case Pp:
      return `Linux 4.14`;
    case Fp:
      return `Linux 4.19`;
    case Ap:
      return `Linux 4.x`;
    case Ip:
      return `Linux 5.x`;
    case Lp:
      return `Linux 5.4`;
    case Rp:
      return `Linux 6.x`;
    case zp:
      return `Linux 7.x`;
    case Bp:
      return `Linux 5.10`;
    case vp:
      return `PS3`;
    case If:
      return `Web Client`;
    case pp:
      return `Android`;
    case mp:
      return `Android 6.x`;
    case hp:
      return `Android 7.x`;
    case gp:
      return `Android 8.x`;
    case _p:
      return `Android 9.x`;
    case Lf:
      return `iOS`;
    case Rf:
      return `iOS 1`;
    case zf:
      return `iOS 2`;
    case Bf:
      return `iOS 3`;
    case Vf:
      return `iOS 4`;
    case Hf:
      return `iOS 5`;
    case Uf:
      return `iOS 6`;
    case Wf:
      return `iOS 6.1`;
    case Gf:
      return `iOS 7`;
    case Kf:
      return `iOS 7.1`;
    case qf:
      return `iOS 8`;
    case Jf:
      return `iOS 8.1`;
    case Yf:
      return `iOS 8.2`;
    case Xf:
      return `iOS 8.3`;
    case Zf:
      return `iOS 8.4`;
    case Qf:
      return `iOS 9`;
    case $f:
      return `iOS 9.1`;
    case ep:
      return `iOS 9.2`;
    case tp:
      return `iOS 9_.3`;
    case np:
      return `iOS 10`;
    case rp:
      return `iOS 10.1`;
    case ip:
      return `iOS 10.2`;
    case ap:
      return `iOS 10.3`;
    case op:
      return `iOS 11`;
    case sp:
      return `iOS 11.1`;
    case cp:
      return `iOS 11.2`;
    case lp:
      return `iOS 11.3`;
    case up:
      return `iOS 11.4`;
    case dp:
      return `iOS 12`;
    case fp:
      return `iOS 12.1`;
    default:
    case -1:
      return `Unknown`;
  }
}
var Gp = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Request`;
    }
  },
  Kp = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.protocol_version || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            protocol_version: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            os: { n: 2, br: n.readString, bw: v.writeString },
            machine_name: { n: 3, br: n.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Response`;
    }
  },
  qp = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Request`;
    }
  },
  Jp = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sessions || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sessions: { n: 1, c: Yp, r: !0, q: !0 },
            refetch_interval_sec: { n: 2, br: n.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response`;
    }
  },
  Yp = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            protocol_version: { n: 2, br: n.readUint32, bw: v.writeUint32 },
            os_name: { n: 3, br: n.readString, bw: v.writeString },
            machine_name: { n: 4, br: n.readString, bw: v.writeString },
            os_type: { n: 5, br: n.readInt32, bw: v.writeInt32 },
            device_type: { n: 6, br: n.readInt32, bw: v.writeInt32 },
            realm: { n: 7, br: n.readInt32, bw: v.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response_Session`;
    }
  },
  Xp = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Request`;
    }
  },
  Zp = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_version || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [7, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_version: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            os: { n: 2, br: n.readString, bw: v.writeString },
            machine_name: { n: 3, br: n.readString, bw: v.writeString },
            ip_public: { n: 4, br: n.readString, bw: v.writeString },
            ip_private: { n: 5, br: n.readString, bw: v.writeString },
            bytes_available: {
              n: 6,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            running_games: { n: 7, c: Qp, r: !0, q: !0 },
            protocol_version: { n: 8, br: n.readUint32, bw: v.writeUint32 },
            clientcomm_version: { n: 9, br: n.readUint32, bw: v.writeUint32 },
            local_users: {
              n: 10,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData`;
    }
  },
  Qp = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            extra_info: { n: 2, br: n.readString, bw: v.writeString },
            time_running_sec: { n: 3, br: n.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData_RunningGames`;
    }
  },
  $p = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_info || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { client_info: { n: 1, c: Zp } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Response`;
    }
  },
  em = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.fields || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            fields: { n: 1, br: n.readString, bw: v.writeString },
            filters: { n: 2, br: n.readString, bw: v.writeString },
            client_instanceid: {
              n: 3,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            include_client_info: { n: 4, br: n.readBool, bw: v.writeBool },
            language: { n: 5, br: n.readString, bw: v.writeString },
            filter_appids: {
              n: 6,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: v.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Request`;
    }
  },
  tm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bytes_available || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bytes_available: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            apps: { n: 2, c: nm, r: !0, q: !0 },
            client_info: { n: 3, c: Zp },
            refetch_interval_sec_full: {
              n: 4,
              br: n.readUint32,
              bw: v.writeUint32,
            },
            refetch_interval_sec_changing: {
              n: 5,
              br: n.readUint32,
              bw: v.writeUint32,
            },
            refetch_interval_sec_updating: {
              n: 6,
              br: n.readUint32,
              bw: v.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response`;
    }
  },
  nm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, [17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            app: { n: 2, br: n.readString, bw: v.writeString },
            category: { n: 3, br: n.readString, bw: v.writeString },
            app_type: { n: 4, br: n.readString, bw: v.writeString },
            num_downloading: { n: 8, br: n.readUint32, bw: v.writeUint32 },
            bytes_download_rate: { n: 11, br: n.readUint32, bw: v.writeUint32 },
            bytes_downloaded: {
              n: 12,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            bytes_to_download: {
              n: 13,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            dlcs: { n: 17, c: rm, r: !0, q: !0 },
            favorite: { n: 18, br: n.readBool, bw: v.writeBool },
            auto_update: { n: 19, br: n.readBool, bw: v.writeBool },
            installed: { n: 20, br: n.readBool, bw: v.writeBool },
            download_paused: { n: 21, br: n.readBool, bw: v.writeBool },
            changing: { n: 22, br: n.readBool, bw: v.writeBool },
            available_on_platform: { n: 23, br: n.readBool, bw: v.writeBool },
            bytes_staged: {
              n: 24,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            bytes_to_stage: {
              n: 25,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            bytes_required: {
              n: 26,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            source_buildid: { n: 27, br: n.readUint32, bw: v.writeUint32 },
            target_buildid: { n: 28, br: n.readUint32, bw: v.writeUint32 },
            estimated_seconds_remaining: {
              n: 29,
              br: n.readUint32,
              bw: v.writeUint32,
            },
            queue_position: { n: 30, d: -1, br: n.readInt32, bw: v.writeInt32 },
            uninstalling: { n: 31, br: n.readBool, bw: v.writeBool },
            rt_time_scheduled: { n: 32, br: n.readUint32, bw: v.writeUint32 },
            running: { n: 33, br: n.readBool, bw: v.writeBool },
            update_percentage: { n: 34, br: n.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData`;
    }
  },
  rm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: v.writeUint32 },
            app: { n: 2, br: n.readString, bw: v.writeString },
            installed: { n: 3, br: n.readUint32, bw: v.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData_DLCData`;
    }
  },
  im = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: n.readUint32, bw: v.writeUint32 },
            client_instanceid: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Request`;
    }
  },
  am = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Response`;
    }
  },
  om = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: n.readUint32, bw: v.writeUint32 },
            client_instanceid: {
              n: 2,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Request`;
    }
  },
  sm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Response`;
    }
  },
  cm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: n.readUint32, bw: v.writeUint32 },
            action: { n: 2, q: !0, br: n.readUint32, bw: v.writeUint32 },
            client_instanceid: {
              n: 3,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Request`;
    }
  },
  lm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            appid: { n: 2, q: !0, br: n.readUint32, bw: v.writeUint32 },
            query_params: { n: 3, br: n.readString, bw: v.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Request`;
    }
  },
  um = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Response`;
    }
  },
  dm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Response`;
    }
  },
  fm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || i(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: n.readUint64String,
              bw: v.writeUint64String,
            },
            enable: { n: 2, br: n.readBool, bw: v.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return a(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Request`;
    }
  },
  pm = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Response`;
    }
  },
  mm;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientLogonInfo#1`, j(Gp, t, n), Kp, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientLogonInfo = t;
  function n(e, t, n) {
    return e.SendMsg(`ClientComm.GetAllClientLogonInfo#1`, j(qp, t, n), Jp, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAllClientLogonInfo = n;
  function r(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientInfo#1`, j(Xp, t, n), $p, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientInfo = r;
  function i(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientAppList#1`, j(em, t, n), tm, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClientAppList = i;
  function a(e, t, n) {
    return e.SendMsg(`ClientComm.InstallClientApp#1`, j(im, t, n), am, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.InstallClientApp = a;
  function o(e, t, n) {
    return e.SendMsg(`ClientComm.UninstallClientApp#1`, j(om, t, n), sm, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UninstallClientApp = o;
  function s(e, t, n) {
    return e.SendMsg(`ClientComm.LaunchClientApp#1`, j(lm, t, n), um, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.LaunchClientApp = s;
  function c(e, t, n) {
    return e.SendMsg(`ClientComm.SetClientAppUpdateState#1`, j(cm, t, n), dm, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetClientAppUpdateState = c;
  function l(e, t, n) {
    return e.SendMsg(`ClientComm.EnableOrDisableDownloads#1`, j(fm, t, n), pm, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnableOrDisableDownloads = l;
})((mm ||= {}));
var hm = `RemoteDownload_OnlineClient`,
  gm = `RemoteDownload_ClientAppList`,
  _m = `RemoteDownload_ClientAppData`,
  vm = class extends Error {
    constructor(e, t) {
      (super(e), (this.result = t));
    }
    result;
  };
function ym() {
  let e = I(),
    t = H();
  return R({
    queryKey: [hm, t],
    queryFn: async () => {
      let t = A.Init(qp),
        n = await mm.GetAllClientLogonInfo(e, t);
      if (n.GetEResult() !== 1)
        throw (
          console.error(
            `Received error from GetAllClientLogonInfo`,
            n.GetEResult(),
            n.Hdr().transport_error(),
          ),
          Error(`Error from GetAllClientLogonInfo: ${n.GetEResult()}`)
        );
      let r = [];
      for (let e of n.Body().sessions())
        e.device_type() !== 0 && r.push(e.toObject());
      return {
        sessions: r,
        refetchInterval: n.Body().refetch_interval_sec() || 300,
      };
    },
    staleTime: 3e5,
    refetchInterval: (e) => (e.state.data?.refetchInterval || 300) * 1e3,
  });
}
var bm = class {
  constructor(e) {
    (Object.assign(this, e.toObject()),
      (this.bytes_to_download = parseInt(e.bytes_to_download() ?? `0`)),
      (this.bytes_downloaded = parseInt(e.bytes_downloaded() ?? `0`)),
      (this.bytes_staged = parseInt(e.bytes_staged() ?? `0`)),
      (this.bytes_to_stage = parseInt(e.bytes_to_stage() ?? `0`)),
      (this.bytes_required = parseInt(e.bytes_required() ?? `0`)));
  }
  appid;
  app;
  category;
  app_type;
  num_downloading;
  bytes_download_rate;
  bytes_downloaded;
  bytes_to_download;
  favorite;
  auto_update;
  installed;
  download_paused;
  changing;
  available_on_platform;
  bytes_staged;
  bytes_to_stage;
  bytes_required;
  source_buildid;
  target_buildid;
  estimated_seconds_remaining;
  queue_position;
  uninstalling;
  rt_time_scheduled;
  update_percentage;
  BIsDownloading() {
    return this.num_downloading !== void 0 && this.num_downloading > 0;
  }
  SetDownloading() {
    ((this.num_downloading = 1), (this.download_paused = !1));
  }
  SetPaused(e) {
    ((this.download_paused = e), (this.num_downloading = +!e));
  }
  BIsAtTopOfQueue() {
    return this.queue_position === 0;
  }
  BIsPaused() {
    return (
      !!this.download_paused &&
      (this.bytes_downloaded < this.bytes_to_download ||
        this.bytes_staged < this.bytes_to_stage ||
        this.queue_position != -1)
    );
  }
  BHasPendingUpdate() {
    return (
      !this.BIsDownloading() &&
      !this.download_paused &&
      (this.bytes_downloaded < this.bytes_to_download ||
        this.bytes_staged < this.bytes_to_stage)
    );
  }
  GetPercentComplete() {
    return this.update_percentage
      ? this.update_percentage
      : this.bytes_to_download
        ? Math.floor((this.bytes_downloaded * 100) / this.bytes_to_download)
        : 0;
  }
};
async function xm(e, t, n) {
  let r = t.client_instanceid,
    i = A.Init(em);
  (i.Body().set_fields(`games`),
    i.Body().set_filters(n),
    i.Body().set_client_instanceid(r),
    i.Body().set_include_client_info(!0));
  let a = await mm.GetClientAppList(e, i);
  if (a.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetClientAppList`,
        a.GetEResult(),
        a.Hdr().transport_error(),
      ),
      new vm(`Error from GetClientAppList: ${a.GetEResult()}`, a.GetEResult())
    );
  let o = new Map();
  for (let e of a.Body().apps()) {
    let t = new bm(e);
    o.set(e.appid(), t);
  }
  return {
    session: t,
    mapApps: o,
    clientInfo: a.Body().client_info()?.toObject(),
    refetchIntervals: {
      full: a.Body().refetch_interval_sec_full() || 3600,
      changing: a.Body().refetch_interval_sec_changing() || 60,
      updating: a.Body().refetch_interval_sec_updating() || 10,
    },
  };
}
async function Sm(e, t, n, r) {
  if (!r) return;
  let i = await xm(e, t, n);
  for (let [e, t] of i.mapApps) r.mapApps.set(e, t);
  return { ...i, mapApps: r.mapApps };
}
function Cm(e, t, n) {
  return [gm, e, t, n];
}
function wm(e, t = !0) {
  let n = ym(),
    r = I(),
    i = H(),
    a = (e) => {
      t && (e.result == 21 || e.result == 16) && n.refetch();
    },
    o = me({
      queries: (n.data?.sessions || []).map((e) => ({
        queryKey: Cm(i, e.client_instanceid, `none`),
        queryFn: async () => xm(r, e, `none`),
        staletime: 36e5,
        refetchInterval: (e) =>
          (e.state.data?.refetchIntervals.full || 3600) * 1e3,
        enabled: n.isSuccess && !n.isFetching,
        onError: a,
        retry: t,
      })),
    }),
    s = (0, V.useCallback)(
      (t) => {
        if (!e) return t;
        let n = new Map(Array.from(t?.mapApps.entries() ?? []).filter(e));
        return { ...t, mapApps: n };
      },
      [e],
    ),
    c = L();
  return {
    rgQueries: me({
      queries: (n.data?.sessions || []).map((e, n) => ({
        queryKey: Cm(i, e.client_instanceid, `changing`),
        queryFn: async () => Sm(r, e, `changing`, o[n].data),
        enabled: o[n].isSuccess && !o[n].isFetching,
        staletime: 1e4,
        select: s,
        refetchInterval: (e) => {
          let t = e.state.data;
          if (!t) return 6e4;
          let n = !1;
          for (let e of t.mapApps.values())
            if (e.BIsDownloading() || e.uninstalling) {
              n = !0;
              break;
            }
          let r = t.refetchIntervals;
          return (n ? r.updating : r.changing) * 1e3;
        },
        onError: a,
        retry: t,
      })),
    }).map((e, t) => (o[t].isError && !o[t].isFetching ? o[t] : e)),
    refetch: () => {
      for (let e of n.data?.sessions || []) {
        let t = Cm(i, e.client_instanceid, `changing`);
        c.removeQueries({ queryKey: t });
      }
      for (let e of o) e.refetch();
    },
  };
}
function Tm(e, t) {
  return [_m, e, t];
}
function Em(e, t = !0) {
  let n = H(),
    { rgQueries: r } = wm(void 0, t);
  return R({
    queryKey: Tm(n, e),
    queryFn: () => {
      let t = new Map();
      for (let n of r)
        if (n.isSuccess) {
          let r = n.data?.session?.client_instanceid,
            i = n.data?.mapApps?.get(e);
          i &&
            t.set(r, {
              session: n.data.session,
              app: i,
              clientInfo: n.data.clientInfo,
            });
        }
      return t;
    },
    enabled: r.reduce((e, t) => e && t.isSuccess && !t.isFetching, !0),
    staleTime: 0,
    gcTime: 0,
  });
}
function Dm(e, t, n) {
  let r = I(),
    i = Em(e),
    a = H(),
    o = L();
  return z({
    mutationFn: async () => {
      let n = A.Init(im);
      (n.Body().set_appid(e), n.Body().set_client_instanceid(t));
      let s = await mm.InstallClientApp(r, n);
      if (s.GetEResult() != 1)
        throw (
          console.error(`Received error from InstallClientApp`, s.GetEResult()),
          Error(`Error from InstallClientApp: ${s.GetEResult()}`)
        );
      let c = i?.data;
      (c && c.get(t) && c.get(t).app.SetDownloading(),
        o.setQueryData(Tm(a, e), c),
        i.refetch());
    },
    onSuccess: n,
  });
}
var Om = `KDJh8Ln6DTA-`,
  km = `cwU-YKIjBO4-`,
  Am = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function jm(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, V.useCallback)(
      (e) => {
        n?.length &&
          Te(
            (0, K.jsx)(Mm, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            Am,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, K.jsx)(`button`, {
        onClick: r,
        className: Om,
        children: (0, K.jsx)(Pm, {}),
      })
    : null;
}
function Mm({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, K.jsx)(`ul`, {
    className: km,
    children: e.map((e) =>
      (0, K.jsx)(
        be,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: P(
            `#GamesList_Client_Indicator`,
            Nm(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function Nm(e) {
  switch (e) {
    case 1:
      return P(`#Library_DeviceType_PC`);
    case 544:
      return P(`#Library_DeviceType_SteamDeck`);
    case 546:
      return P(`#Library_DeviceType_SteamMachine`);
    case D:
      return P(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function Pm(e) {
  return (0, K.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 13 8`,
    fill: `none`,
    ...e,
    children: (0, K.jsx)(`path`, {
      fill: `currentColor`,
      d: `M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z`,
    }),
  });
}
var Fm = `O2hPihu9CRE-`,
  Im = `QhSrcq93V7k-`,
  Lm = `_7MjE60RYT0Q-`,
  Rm = `UlZXEOyFPCE-`,
  zm = `_8wO4Yx-lIIo-`,
  Bm = `FA82eVIC918-`,
  Vm = `_0sgpZmAY-zs-`,
  Hm = `RLntJ4QtQLU-`;
function Um(e) {
  let { appid: t } = e,
    n = Rt(t),
    { data: r } = F(n),
    [i, a, o] = ae(!1),
    { mutateAsync: s } = _s({ appid: t }),
    [c, l] = (0, V.useState)(!1),
    u = vn(t);
  return !r || u
    ? null
    : (0, K.jsxs)(K.Fragment, {
        children: [
          (0, K.jsxs)(Ai, {
            onClick: async () => {
              try {
                (l(!0), await s(), W(), l(!1), a());
              } catch (e) {
                (l(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    e,
                  ));
              }
            },
            children: [
              c && (0, K.jsx)(qt, { size: `small` }),
              P(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, K.jsx)(ue, {
            children: (0, K.jsx)(Vt, {
              active: i,
              children: (0, K.jsx)(He, {
                strTitle: P(`#Sale_AddedToLibrary`),
                strDescription: Le(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, K.jsx)(`span`, { className: Lm, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, K.jsx)(Wm, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function Wm(e) {
  let { id: t } = e,
    n = ym(),
    [r, i] = (0, V.useState)(0),
    [a, o] = (0, V.useState)(!1),
    { data: s } = qe(t);
  if (!t || !(`appid` in t) || T.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = Wp(e.os_type);
          if (
            (s.windows && t.includes(`Windows`)) ||
            (s.mac && t.includes(`Mac`)) ||
            (s.steamos_linux && t.includes(`Linux`))
          )
            return !0;
        }
        break;
      case 544:
        return s.windows || s.steamos_linux;
    }
    return !1;
  });
  if (c && c?.length > 0) {
    let e = c[r];
    return (0, K.jsx)(`div`, {
      className: Fm,
      children: a
        ? (0, K.jsx)(Km, { session: e })
        : (0, K.jsxs)(K.Fragment, {
            children: [
              (0, K.jsx)(Gm, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, K.jsx)(`div`, {
                className: Bm,
                children: (0, K.jsx)(qm, {
                  appid: t.appid,
                  session: e,
                  setRemoteDownloadRequested: o,
                }),
              }),
            ],
          }),
    });
  }
  return null;
}
function Gm(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(`div`, { children: P(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, K.jsxs)(`div`, {
        className: Vm,
        children: [
          (0, K.jsx)(`span`, { className: Hm, children: n.machine_name }),
          (0, K.jsx)(jm, {
            rgSessions: t,
            setRemoteClientID: (e) => {
              let n = t.findIndex((t) => t.client_instanceid === e);
              n >= 0 && r(n);
            },
          }),
        ],
      }),
    ],
  });
}
function Km(e) {
  let { session: t } = e;
  return (0, K.jsxs)(`div`, {
    className: Rm,
    children: [
      P(`#Sale_AddToLibrary_DownloadStarted`),
      (0, K.jsx)(`br`, {}),
      (0, K.jsx)(`a`, {
        href: `${T.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: P(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function qm(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = Dm(t, n.client_instanceid);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsxs)(Ai, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, K.jsx)(We, {}), P(`#Button_StartDownload`)],
      }),
      (0, K.jsx)(`div`, {
        className: zm,
        children: (0, K.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: Im,
          children: P(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function Jm(e) {
  let {
    rgTagIDs: n,
    bShowEvenIfNoTags: r,
    bHideTitle: i,
    bLargeText: a,
    bNoStoreLinks: o,
  } = e;
  return n?.length > 0 || r
    ? (0, K.jsxs)(`div`, {
        className: t(xa, a ? ja : ``, `SaleTagBlockCtn`),
        children: [
          !i &&
            (0, K.jsx)(`div`, {
              className: t(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: N.Localize(`#GameHover_Tags`),
            }),
          n?.length > 0
            ? (0, K.jsx)(`div`, {
                className: t(Ma, `TagBox`),
                children: n.map((e) =>
                  (0, K.jsx)(Xm, { tagid: e, bNoStoreLinks: o }, e),
                ),
              })
            : (0, K.jsx)(`div`, { children: N.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function Ym(e) {
  let { tagid: n, className: r } = e,
    i = Ci(n, p.LANGUAGE);
  if (!i) return null;
  let a = w(x(p.LANGUAGE)),
    o = `${p.STORE_BASE_URL}tags/${a}/${i}`;
  return (0, K.jsx)(Pf, {
    url: o,
    className: t(Na, `WidgetTag`, r),
    children: i,
  });
}
function Xm(e) {
  let { tagid: n, className: r, bNoStoreLinks: i } = e,
    a = w(x(p.LANGUAGE)),
    o = Ci(n, p.LANGUAGE),
    s = `${p.STORE_BASE_URL}tags/${a}/${o}`;
  return o
    ? i
      ? (0, K.jsx)(`div`, { className: t(Na, `WidgetTag`, r), children: o })
      : (0, K.jsx)(Pf, {
          url: s,
          className: t(Na, `WidgetTag`, r),
          children: o,
        })
    : null;
}
export {
  Ic as $,
  Ti as $n,
  _i as $r,
  ya as $t,
  td as A,
  Or as Ai,
  $i as An,
  kr as Ar,
  Co as At,
  Iu as B,
  da as Bn,
  ri as Br,
  So as Bt,
  Ad as C,
  Xr as Ci,
  Ca as Cn,
  Zn as Cr,
  mo as Ct,
  Kd as D,
  Qn as Di,
  Ki as Dn,
  wr as Dr,
  wa as Dt,
  Md as E,
  Gr as Ei,
  Sa as En,
  Mr as Er,
  $a as Et,
  bu as F,
  hn as Fi,
  Da as Fn,
  Zr as Fr,
  Qa as Ft,
  Nu as G,
  Wi as Gn,
  Vr as Gr,
  go as Gt,
  ku as H,
  co as Hn,
  Tr as Hr,
  eo as Ht,
  Ru as I,
  on as Ii,
  Qi as In,
  $n as Ir,
  vo as It,
  lu as J,
  Ii as Jn,
  pi as Jr,
  ba as Jt,
  Pu as K,
  Fi as Kn,
  ur as Kr,
  xo as Kt,
  zu as L,
  H as Li,
  Aa as Ln,
  Qr as Lr,
  uo as Lt,
  Zu as M,
  nr as Mi,
  na as Mn,
  Wn as Mr,
  wo as Mt,
  $u as N,
  gr as Ni,
  ta as Nn,
  ui as Nr,
  jo as Nt,
  Ud as O,
  lr as Oi,
  oa as On,
  Er as Or,
  Eo as Ot,
  Hu as P,
  xn as Pi,
  Do as Pn,
  Yn as Pr,
  pa as Pt,
  Fc as Q,
  wi as Qn,
  Jn as Qr,
  qi as Qt,
  Bu as R,
  Oa as Rn,
  Sr as Rr,
  Fo as Rt,
  Wd as S,
  mi as Si,
  ua as Sn,
  ii as Sr,
  ka as St,
  Nd as T,
  Cr as Ti,
  va as Tn,
  Yr as Tr,
  Xa as Tt,
  Du as U,
  Ta as Un,
  zr as Ur,
  to as Ut,
  Lu as V,
  Za as Vn,
  Ur as Vr,
  Oo as Vt,
  Ou as W,
  za as Wn,
  ci as Wr,
  Ao as Wt,
  zc as X,
  ji as Xn,
  Nr as Xr,
  io as Xt,
  ou as Y,
  Bi as Yn,
  Ar as Yr,
  lo as Yt,
  Rc as Z,
  Mi as Zn,
  sr as Zr,
  oo as Zt,
  Fd as _,
  yr as _i,
  ga as _n,
  Pr as _r,
  Wo as _t,
  tf as a,
  fi as ai,
  so as an,
  Rr as ar,
  cc as at,
  qd as b,
  Wr as bi,
  la as bn,
  ni as br,
  no as bt,
  zd as c,
  ar as ci,
  Xi as cn,
  pr as cr,
  nc as ct,
  jd as d,
  Br as di,
  Ga as dn,
  ei as dr,
  Xs as dt,
  Jr as ei,
  _o as en,
  Ei as er,
  Pc as et,
  Vd as f,
  xr as fi,
  No as fn,
  $r as fr,
  qs as ft,
  Id as g,
  mr as gi,
  To as gn,
  jr as gr,
  Yo as gt,
  Xd as h,
  rr as hi,
  Ji as hn,
  ti as hr,
  Jo as ht,
  Of as i,
  ir as ii,
  Io as in,
  si as ir,
  mc as it,
  ed as j,
  _r as ji,
  ia as jn,
  tr as jr,
  yo as jt,
  nd as k,
  Kr as ki,
  fa as kn,
  Lr as kr,
  Yi as kt,
  Rd as l,
  Un as li,
  Mo as ln,
  er as lr,
  tc as lt,
  Bd as m,
  cr as mi,
  Ea as mn,
  br as mr,
  Xo as mt,
  Jm as n,
  hi as ni,
  ao as nn,
  Ci as nr,
  vc as nt,
  ef as o,
  Dr as oi,
  Ya as on,
  Fr as or,
  sc as ot,
  Hd as p,
  qr as pi,
  Pa as pn,
  gi as pr,
  es as pt,
  du as q,
  Ri as qn,
  Hr as qr,
  bo as qt,
  Pf as r,
  Xn as ri,
  Zi as rn,
  Hn as rr,
  hc as rt,
  Qd as s,
  ai as si,
  po as sn,
  fr as sr,
  oc as st,
  Ym as t,
  dr as ti,
  Po as tn,
  yi as tr,
  bc as tt,
  Ld as u,
  oi as ui,
  ko as un,
  di as ur,
  Qs as ut,
  kd as v,
  vr as vi,
  sa as vn,
  Ir as vr,
  Uo as vt,
  Zd as w,
  or as wi,
  Ia as wn,
  hr as wr,
  ho as wt,
  Gd as x,
  qn as xi,
  ca as xn,
  li as xr,
  ro as xt,
  Pd as y,
  Kn as yi,
  Fa as yn,
  vi as yr,
  La as yt,
  Fu as z,
  ea as zn,
  Gn as zr,
  fo as zt,
};
