/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  C as t,
  E as n,
  Gt as r,
  Jt as i,
  Kt as a,
  P as o,
  U as s,
  Ut as c,
  W as l,
  Wt as u,
  X as d,
  Xt as f,
  Yt as p,
  Zt as m,
  _t as h,
  bt as g,
  et as _,
  it as v,
  j as y,
  kt as b,
  mt as x,
  pt as S,
  q as C,
  qt as w,
  rt as T,
  sn as E,
  tn as D,
  ut as O,
  vt as k,
  yt as A,
  z as ee,
} from "./chunk~de7f2df91c.js";
import {
  Et as j,
  I as te,
  N as ne,
  Ot as re,
  P as ie,
  Pt as ae,
  c as oe,
  ct as se,
  ht as ce,
  l as le,
  r as ue,
  s as de,
  t as fe,
} from "./chunk~25a6634263.js";
import { a as pe, i as me, r as he, t as ge } from "./chunk~68b7e78d68.js";
import {
  Bn as _e,
  En as ve,
  Er as ye,
  Fr as be,
  Gi as xe,
  Ha as M,
  Ht as Se,
  Jt as Ce,
  Pi as we,
  Rr as Te,
  Ua as Ee,
  Wn as De,
  Wt as Oe,
  Xa as N,
  Xi as ke,
  Yi as Ae,
  Yn as je,
  Zi as Me,
  _a as Ne,
  _n as Pe,
  da as P,
  g as Fe,
  gn as Ie,
  gr as Le,
  l as Re,
  p as ze,
  ro as Be,
  tn as Ve,
  tr as He,
  xn as Ue,
  z as We,
} from "./chunk~1fa4b8f2ff.js";
import {
  A as Ge,
  C as Ke,
  E as qe,
  S as Je,
  T as Ye,
  _ as F,
  a as Xe,
  g as Ze,
  h as Qe,
  i as $e,
  l as et,
  m as tt,
  n as nt,
  p as rt,
  s as it,
  w as at,
  x as ot,
  y as st,
} from "./chunk~0a99e05c44.js";
import {
  a as ct,
  c as lt,
  i as ut,
  o as dt,
  r as ft,
  s as pt,
} from "./chunk~9a06851bec.js";
import {
  E as mt,
  F as ht,
  I as gt,
  L as _t,
  R as vt,
  j as yt,
  z as I,
} from "./chunk~44f252525d.js";
import { a as bt, i as xt, n as L } from "./chunk~f8b6a4beb3.js";
import { i as R } from "./chunk~8fb30ea08b.js";
import { t as z } from "./chunk~ede3e357a2.js";
import { t as St } from "./chunk~9aa05d2c7d.js";
import { t as B } from "./chunk~6257ebd2d4.js";
import { t as Ct } from "./chunk~4406a7b793.js";
import { i as wt, l as Tt, r as Et } from "./chunk~428594b857.js";
import { i as Dt, t as Ot } from "./chunk~d9c3dab17a.js";
import {
  F as kt,
  G as At,
  H as jt,
  J as Mt,
  K as Nt,
  W as Pt,
  r as Ft,
  z as It,
} from "./chunk~a825a84845.js";
import "./chunk~b7c2818157.js";
import { r as Lt, t as Rt } from "./chunk~b390ee0f78.js";
import { t as zt } from "./chunk~90b9831ad2.js";
import { t as V } from "./chunk~e29b7ee76a.js";
import { r as Bt } from "./chunk~8681f5c764.js";
import { n as Vt, t as Ht } from "./chunk~2201b8cb3d.js";
import { t as Ut } from "./chunk~f4e4ed5c17.js";
import { t as Wt } from "./chunk~92931c6310.js";
import { t as Gt } from "./chunk~c55709d290.js";
import { t as Kt } from "./chunk~eefd71512b.js";
import { r as qt } from "./chunk~38a44beba7.js";
import {
  c as Jt,
  i as Yt,
  l as Xt,
  s as Zt,
  t as Qt,
} from "./chunk~8ceeb46076.js";
import { t as $t } from "./chunk~2f8c67b4de.js";
import "./chunk~a6b9ae1345.js";
import { t as en } from "./chunk~0278ae6236.js";
import { t as tn } from "./chunk~ada233e34d.js";
function nn(e) {
  return !!e;
}
var H = E(e(), 1),
  rn = (0, H.createContext)(void 0);
rn.Provider;
function an() {
  let e = (0, H.useContext)(rn);
  if (!e)
    throw Error(`called useActiveAccount outside of ActiveAccountProvider`);
  return e.useActiveAccount();
}
function on() {
  let e = L(),
    t = C.accountid,
    n = C.country_code;
  return z(sn(e, t, n));
}
function sn(e, t, n) {
  return {
    queryKey: un(t),
    queryFn: async () => {
      if (!t) return ln();
      let r = A.Init(Et);
      r.Body().set_country_code(n);
      let i = await Tt.GetStorePreferences(e, r);
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
    preferences: { primary_language: S(l.LANGUAGE) },
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
var G = E(m(), 1),
  K = k();
async function pn(e, t) {
  let n = U(T.STORE_BASE_URL, t, v.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function mn(e, t, n) {
  return (await pn(e, t)).includes(n);
}
function hn() {
  let e = L(),
    t = C.accountid;
  return z(gn(e, t));
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
  let t = L(),
    n = C.accountid,
    { data: r } = z(_n(t, n, e));
  return r === void 0 ? void 0 : r;
}
function yn(e) {
  let t = R(),
    n = C.accountid;
  return H.useCallback(
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
        e.prototype.clanid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            listid: { n: 2, br: a.readUint64String, bw: f.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
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
        e.prototype.domain || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            domain: { n: 1, br: a.readString, bw: f.writeString },
            controller: { n: 2, br: a.readString, bw: f.writeString },
            method: { n: 3, br: a.readString, bw: f.writeString },
            submethod: { n: 4, br: a.readString, bw: f.writeString },
            feature: { n: 5, br: a.readString, bw: f.writeString },
            depth: { n: 6, br: a.readUint32, bw: f.writeUint32 },
            countrycode: { n: 7, br: a.readString, bw: f.writeString },
            webkey: { n: 8, br: a.readUint64String, bw: f.writeUint64String },
            is_client: { n: 9, br: a.readBool, bw: f.writeBool },
            curator_data: { n: 10, c: Sn },
            is_likely_bot: { n: 11, br: a.readBool, bw: f.writeBool },
            is_utm: { n: 12, br: a.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
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
  let e = [...C.excluded_content_descriptors];
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
  return !!_(`wants_mature_content`);
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
  let t;
  try {
    t = await fetch(U(l.STORE_BASE_URL, e, C.country_code), {
      credentials: `include`,
    });
  } catch (e) {
    return (console.warn(`LoadDynamicUserData`, e), Tn());
  }
  try {
    if (!t.ok) throw Error(`Server returned ${t.status}`);
    return kn(await t.json());
  } catch (e) {
    return (
      console.warn(`LoadDynamicUserData`, e),
      b().ReportError(Error(`LoadDynamicUserData ${e}`), {
        bIncludeMessageInIdentifier: !0,
      }),
      Tn()
    );
  }
}
var Fn = 6e4;
function In() {
  let e = C.accountid;
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
  return z(In());
}
function Rn(e) {
  let t = e.getQueryData(Mn(C.accountid));
  return (t && !t.bLoaded && zn(e), t ?? Dn());
}
function zn(e) {
  let t = e.getQueryState(Mn(C.accountid));
  t?.fetchStatus == `idle` &&
    Date.now() - t.dataUpdatedAt >= Fn &&
    e.prefetchQuery(In());
}
async function Bn(e) {
  return e.fetchQuery(In());
}
function Vn(e, t) {
  e.setQueryData(Mn(C.accountid), (e) => {
    if (!e) return;
    let n = t(e);
    return n ? { ...e, ...n } : e;
  });
}
function Hn(e) {
  let t = xt(),
    n = bt();
  return z(Gn(t.GetAnonymousServiceTransport(), n, e));
}
function Un(e) {
  return `LocalizedTagNames2_${e}`;
}
function Wn(e) {
  let t = {};
  return ((e?.tags || []).forEach(({ tagid: e, name: n }) => (t[e] = n)), t);
}
function Gn(e, t, n) {
  return {
    queryKey: [`LocalizedTagNames`, n],
    queryFn: async () => {
      let r = Un(n),
        i = await t.GetObject(r),
        a = A.Init(wt);
      (a.Body().set_language(n),
        i?.version_hash && a.Body().set_have_version_hash(i.version_hash));
      let o = await Tt.GetTagList(e, a),
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
      return Wn(s);
    },
    staleTime: 36e5,
  };
}
function Kn(e, t) {
  let { data: n } = Hn(t);
  return n && n[e];
}
var q = {};
((q.arabic = () =>
  N(() => import(`./chunk~d5ba2f56ae.js`), [], import.meta.url)),
  (q.brazilian = () =>
    N(() => import(`./chunk~39c120e92a.js`), [], import.meta.url)),
  (q.bulgarian = () =>
    N(() => import(`./chunk~78cb7e4228.js`), [], import.meta.url)),
  (q.czech = () =>
    N(() => import(`./chunk~d8eff1052f.js`), [], import.meta.url)),
  (q.danish = () =>
    N(() => import(`./chunk~86d0580964.js`), [], import.meta.url)),
  (q.dutch = () =>
    N(() => import(`./chunk~005813ba41.js`), [], import.meta.url)),
  (q.english = () =>
    N(() => import(`./chunk~452b18c286.js`), [], import.meta.url)),
  (q.finnish = () =>
    N(() => import(`./chunk~acbdc00a18.js`), [], import.meta.url)),
  (q.french = () =>
    N(() => import(`./chunk~17125a4191.js`), [], import.meta.url)),
  (q.german = () =>
    N(() => import(`./chunk~52ab00b62c.js`), [], import.meta.url)),
  (q.greek = () =>
    N(() => import(`./chunk~cded0e728a.js`), [], import.meta.url)),
  (q.hungarian = () =>
    N(() => import(`./chunk~95e95aa3e8.js`), [], import.meta.url)),
  (q.indonesian = () =>
    N(() => import(`./chunk~1bf0266f4e.js`), [], import.meta.url)),
  (q.italian = () =>
    N(() => import(`./chunk~0080cf5344.js`), [], import.meta.url)),
  (q.japanese = () =>
    N(() => import(`./chunk~8b3750bb52.js`), [], import.meta.url)),
  (q.koreana = () =>
    N(() => import(`./chunk~2724a6c2c8.js`), [], import.meta.url)),
  (q.latam = () =>
    N(() => import(`./chunk~ef055f68a2.js`), [], import.meta.url)),
  (q.malay = () =>
    N(() => import(`./chunk~ca69d45f89.js`), [], import.meta.url)),
  (q.norwegian = () =>
    N(() => import(`./chunk~65c6814551.js`), [], import.meta.url)),
  (q.polish = () =>
    N(() => import(`./chunk~76a251fdd1.js`), [], import.meta.url)),
  (q.portuguese = () =>
    N(() => import(`./chunk~2483e21f7e.js`), [], import.meta.url)),
  (q.romanian = () =>
    N(() => import(`./chunk~9a3fef5eb3.js`), [], import.meta.url)),
  (q.russian = () =>
    N(() => import(`./chunk~e56e1e47d1.js`), [], import.meta.url)),
  (q.sc_schinese = () =>
    N(() => import(`./chunk~da6504af84.js`), [], import.meta.url)),
  (q.schinese = () =>
    N(() => import(`./chunk~ff125744c0.js`), [], import.meta.url)),
  (q.spanish = () =>
    N(() => import(`./chunk~e2f1f1b489.js`), [], import.meta.url)),
  (q.swedish = () =>
    N(() => import(`./chunk~190fdb38ac.js`), [], import.meta.url)),
  (q.tchinese = () =>
    N(() => import(`./chunk~643cb0252e.js`), [], import.meta.url)),
  (q.thai = () =>
    N(() => import(`./chunk~80a1517842.js`), [], import.meta.url)),
  (q.turkish = () =>
    N(() => import(`./chunk~7c426f534c.js`), [], import.meta.url)),
  (q.ukrainian = () =>
    N(() => import(`./chunk~170b3740ac.js`), [], import.meta.url)),
  (q.vietnamese = () =>
    N(() => import(`./chunk~57cbf4b218.js`), [], import.meta.url)));
async function qn(e) {
  if (q[e]) return await q[e]();
}
var Jn = mt(qn),
  J = {
    PerYear: 31536e3,
    PerMonth: 2628e3,
    PerWeek: 604800,
    PerDay: 86400,
    PerHour: 3600,
    PerMinute: 60,
  };
function Yn(e, t, n) {
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
  return i.toLocaleDateString(V(), a);
}
function Xn(e, t) {
  let n = new Date(e * 1e3),
    r = { year: `numeric`, month: `short`, day: `numeric`, ...t };
  return n.toLocaleDateString(V(), r);
}
function Zn(e) {
  let t = new Date();
  return (
    t.setHours(15),
    t.toLocaleTimeString(e, { hour: `numeric` }) ==
      t.toLocaleTimeString(e, { hour: `numeric`, hour12: !1 })
  );
}
function Qn(e, t, n) {
  let r = new Date(e * 1e3),
    i = { hour: `numeric`, minute: `2-digit`, hourCycle: `h23` },
    a = { hour: `numeric`, minute: `2-digit` },
    o = V(),
    s = { ...(t?.bForce24HourClock || Zn(o[0]) ? i : a), ...n };
  return r.toLocaleTimeString(o, s);
}
function $n(e) {
  return e.toLocaleDateString(V(), { month: `long`, year: `numeric` });
}
function er(e) {
  let t = Math.floor(e / J.PerYear),
    n = Math.floor(e / J.PerMonth),
    r = Math.floor((e % J.PerMonth) / J.PerDay),
    i = Math.floor((e % J.PerDay) / J.PerHour),
    a = Math.floor((e % J.PerHour) / J.PerMinute);
  return (
    (e %= J.PerMinute),
    t > 0
      ? Jn.Localize(`#TimeRemaining_MoreThanOneYear`)
      : n > 0
        ? Jn.Localize(`#TimeRemaining_MonthsDays`, n, r)
        : r > 0
          ? Jn.Localize(
              `#TimeRemaining_DaysHoursMinutes`,
              r,
              i.toString().padStart(2, `0`),
              a.toString().padStart(2, `0`),
            )
          : i > 0
            ? Jn.Localize(
                `#TimeRemaining_HoursMinutesSeconds`,
                i.toString().padStart(2, `0`),
                a.toString().padStart(2, `0`),
                e.toString().padStart(2, `0`),
              )
            : Jn.Localize(
                `#TimeRemaining_MinutesSeconds`,
                a.toString().padStart(2, `0`),
                e.toString().padStart(2, `0`),
              )
  );
}
function tr(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let n = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${l.MEDIA_CDN_COMMUNITY_URL}${n}`;
    }
    if (typeof e[t] == `string`) {
      let n = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${l.STORE_ITEM_BASE_URL}${n}`;
    }
  }
}
function nr(e, t = `full`) {
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
      D(t, `Invalid size: ${t}`);
  }
  return (
    l.STORE_ITEM_BASE_URL + e.filename.replace(/\.([^.]+)(\?.*)?$/, `${n}.$1$2`)
  );
}
function rr(e) {
  let { data: t } = Ke(e),
    n = Mt();
  if (t)
    return [
      ...(t.all_ages_screenshots || []),
      ...(!n && t.mature_content_screenshots
        ? t.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
function ir(e, ...t) {
  let { data: n } = rt(e);
  return ar(n, ...t);
}
function ar(e, ...t) {
  if (!e?.asset_url_format) return;
  let n = t.find((t) => {
    let n = e[t];
    return typeof n == `string` && n.trim() !== ``;
  });
  return n && tr(e, n);
}
var or = `qkhMGgZoiEA-`,
  sr = `dR7N9Ozyb6k-`,
  cr = `_8j-XyEfRwfE-`;
function lr(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(oe, {
    className: or,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
function ur(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(oe, {
    className: cr,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
function dr(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(oe, {
    className: sr,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
var fr = E(Ct(), 1),
  pr = E(ae(), 1),
  mr = `700px`;
function hr() {
  return window.innerWidth < parseInt(mr);
}
function gr() {
  let e = ne();
  return (
    H.useEffect(
      () => (
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      ),
      [e],
    ),
    window.innerWidth < parseInt(mr)
  );
}
var _r = `_8Wp5WbqAbJA-`,
  vr = `UYfcYZDtfbs-`,
  yr = `O-TsWDon65A-`,
  br = `E8DrK8oV4Hs-`,
  xr = `XTfMA1ObAn4-`,
  Sr = `-Rv33oXsbT0-`,
  Cr = `MN6Xv-pm6i8-`,
  wr = `uvLRAREPa4E-`,
  Tr = `UFAsjplGzxc-`,
  Er = `vL-XYGsLedM-`,
  Dr = `aCttqIa8NC4-`,
  Or = `ncKEDk26SHQ-`,
  kr = `fNtXEMzHz58-`,
  Ar = `jrHvWWIOlw4-`,
  jr = `FOKKfGVYUDk-`,
  Mr = `OClIuwfiMKQ-`,
  Nr = `ZLlm68-AqhM-`,
  Pr = `raYV6Y-MQ7I-`,
  Fr = `IWFCYfhR05U-`,
  Ir = `KtOQKgU1W5w-`,
  Lr = `jXpKqo3-cWA-`,
  Rr = `QwN0eH2k0O0-`,
  zr = `sgCiKk3DUeg-`,
  Br = `A8oyzoRvWQ8-`,
  Vr = `V7rq-SSC9xQ-`,
  Hr = `pNXxwljIaD8-`,
  Ur = `lsjYiHotCwA-`,
  Wr = `iVV26V5rbpU-`,
  Gr = `XosTQwEOBO0-`,
  Kr = `ITE-CUK3U10-`,
  qr = `BZ9dZKOmXqE-`,
  Jr = `zMMJGDB8n-o-`,
  Yr = `XPrPiD27WdE-`,
  Xr = `R0sGSaFdUWo-`,
  Zr = `PON8X0ze5G8-`,
  Qr = `rfhpla0PGMA-`,
  Y = `OySWwOLLxFc-`,
  $r = `tkR3-aHpyI4-`,
  ei = `yyrI0Nka69I-`,
  ti = `D3fuhd6kG6I-`,
  ni = `Xk-QP-zS-18-`,
  ri = `I9cM1cZTYqc-`,
  ii = `LkW8eRLttsM-`,
  ai = `_4KL8m0wDedE-`,
  oi = `E3GBmOK5lMc-`,
  si = `lOHW8g-YyoY-`,
  ci = `Ybt9EqGhaaU-`,
  li = `RQzfcqJK1Eg-`,
  ui = `_0MLgqm-W-nA-`,
  di = `iwrzh-mg8hE-`,
  fi = `-G-r65tUoo0-`,
  pi = `qVhohSfcErA-`,
  mi = `GqNlebj1uds-`,
  hi = `oqhyMK1Krt0-`,
  gi = `GRw4r5TpD5s-`,
  _i = `mspnwaz0EAg-`,
  vi = `_06Z7Ej-J6OU-`,
  yi = `lO9B4Ti6gBk-`,
  bi = `lkVpo86MFuI-`,
  xi = `chTH6btujQ0-`,
  Si = `_96v5CHkkJJY-`,
  Ci = `GxypNLhVZWE-`,
  wi = `BD3vXqZ-6yI-`,
  Ti = `l9by-6sJDpM-`,
  Ei = `LCYi5cxHqgI-`,
  Di = `ZuMhm9DQqbw-`,
  Oi = `eASrfjoxe3o-`,
  ki = `ppO76q5Y-Zg-`,
  Ai = `WWolAsqP274-`,
  ji = `RIck6AI1vX8-`,
  Mi = `Sndyr6iqn8g-`,
  Ni = `qUsoY9s6daM-`,
  Pi = `tUIs-i3NWoU-`,
  Fi = `_8o-dkC5O1co-`,
  Ii = `v7ul8g8zqHs-`,
  Li = `-cW4bgqyLAo-`,
  Ri = `aN31caRmRcQ-`,
  zi = `tobj1evrU4w-`,
  Bi = `RAahmG4F6sc-`,
  Vi = `GL0tHV4bOk8-`,
  Hi = `LPcYz6LIoNo-`,
  Ui = `IPcip0GPG-I-`,
  Wi = `GCeo-xmfx1A-`,
  Gi = 6,
  Ki = 1e3,
  qi = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function Ji(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = F(t),
    o = H.useRef(0),
    s = H.useRef(null);
  H.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    u = Nt(t),
    d = n && !u ? t : void 0,
    f = At(d),
    p = At(d, !0);
  if ((r && l.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (u) return (0, K.jsx)(Xi, { id: t });
  if (!f) return null;
  let m = f.filter(Yi);
  if (m.length === 0)
    return p?.some(Yi)
      ? (0, K.jsx)(Xi, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, K.jsx)(Ji, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let h;
  switch (i) {
    case 1:
      h = Hi;
      break;
    case 2:
      h = Ui;
  }
  let g = m[0];
  return (0, K.jsx)(`video`, {
    className: (0, pr.default)(Vi, h),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, K.jsx)(Zi, { trailer: g }),
  });
}
function Yi(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function Xi(e) {
  let { id: t } = e,
    { data: n } = Ke(t),
    [r, i] = H.useState(0),
    a = H.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, Gi),
      [n],
    );
  return (
    ie(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, Ki),
    a.length == 0
      ? null
      : (0, K.jsx)(`div`, {
          className: Vi,
          children: a.map((e, t) =>
            (0, K.jsx)(
              `img`,
              {
                className: (0, pr.default)(Wi, t == r && `_8Ek7qtVBxvk-`),
                src: nr(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function Zi(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, K.jsx)(K.Fragment, {
        children: t.microtrailer?.map((e) =>
          l.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, K.jsx)(
                `source`,
                { src: jt(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
function Qi(e) {
  return e
    ? !!(
        e.related_items &&
        e.related_items.standalone_demo_appid &&
        e.related_items.standalone_demo_appid.length > 0 &&
        e.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function $i(e) {
  return !e || !e.related_items?.standalone_demo_appid
    ? []
    : e.related_items?.standalone_demo_appid;
}
function ea(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return It(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? $n(new Date(t * 1e3))
        : Xn(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? Xn(t) : ``);
}
function ta(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var na = 7;
function ra(e, t) {
  if (!e) return !1;
  let n = ta(e);
  return n ? !e.is_coming_soon && n + na * J.PerDay > t : !1;
}
function ia(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
var X = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid_giftee || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid_giftee: { n: 1, br: a.readInt32, bw: f.writeInt32 },
            gift_message: { n: 2, c: aa },
            time_scheduled_send: { n: 3, br: a.readInt32, bw: f.writeInt32 },
            email_giftee: { n: 4, br: a.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftInfo`;
    }
  },
  aa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gifteename || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gifteename: { n: 1, br: a.readString, bw: f.writeString },
            message: { n: 2, br: a.readString, bw: f.writeString },
            sentiment: { n: 3, br: a.readString, bw: f.writeString },
            signature: { n: 4, br: a.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
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
        e.prototype.amount_in_cents || c(e.M()),
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
              br: a.readInt64String,
              bw: f.writeInt64String,
            },
            currency_code: { n: 2, br: a.readInt32, bw: f.writeInt32 },
            formatted_amount: { n: 3, br: a.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartAmount`;
    }
  },
  oa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            gidcoupon: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            title: { n: 5, br: a.readString, bw: f.writeString },
            coupon_description: { n: 6, br: a.readString, bw: f.writeString },
            large_icon_url: { n: 7, br: a.readString, bw: f.writeString },
            discount_pct: { n: 8, br: a.readInt32, bw: f.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartCoupon`;
    }
  },
  sa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.context || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            context: { n: 2, c: ht },
            data_request: { n: 3, c: gt },
            gift_info: { n: 4, c: X },
            gidshoppingcart: {
              n: 1,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            gidreplayoftransid: {
              n: 5,
              br: a.readFixed64String,
              bw: f.writeFixed64String,
            },
            for_init_purchase: { n: 6, br: a.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Request`;
    }
  },
  ca = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_items || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_items: { n: 1, c: la, r: !0, q: !0 },
            estimated_totals: { n: 5, c: pa },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response`;
    }
  },
  la = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            item_id: { n: 2, c: I },
            store_item: { n: 3, c: vt },
            gift_info: { n: 4, c: X },
            errors: { n: 5, c: ua },
            warnings: { n: 6, c: da },
            subtotal: { n: 7, c: Z },
            price_when_added: { n: 8, c: Z },
            original_price: { n: 9, c: Z },
            coupon_applied: { n: 10, c: oa },
            coupon_discount: { n: 11, c: Z },
            can_purchase_as_gift: { n: 12, br: a.readBool, bw: f.writeBool },
            restrict_add_additional_to_cart: {
              n: 13,
              br: a.readBool,
              bw: f.writeBool,
            },
            quantity: { n: 14, br: a.readUint32, bw: f.writeUint32 },
            included_packageids: {
              n: 15,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem`;
    }
  },
  ua = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || c(e.M()),
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
              br: a.readInt32,
              pbr: a.readPackedInt32,
              bw: f.writeRepeatedInt32,
            },
            duplicate_appids_in_cart: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readInt32,
              pbr: a.readPackedInt32,
              bw: f.writeRepeatedInt32,
            },
            unavailable_in_country: { n: 3, br: a.readBool, bw: f.writeBool },
            invalid_coupon: { n: 4, br: a.readBool, bw: f.writeBool },
            invalid_coupon_for_item: { n: 5, br: a.readBool, bw: f.writeBool },
            coupon_exclusive_promo: { n: 6, br: a.readBool, bw: f.writeBool },
            cannot_purchase_as_gift: { n: 7, br: a.readBool, bw: f.writeBool },
            invalid_item: { n: 8, br: a.readBool, bw: f.writeBool },
            too_many_in_cart: { n: 9, br: a.readBool, bw: f.writeBool },
            has_existing_billing_agreement: {
              n: 10,
              br: a.readBool,
              bw: f.writeBool,
            },
            missing_must_own_appids: {
              n: 11,
              r: !0,
              q: !0,
              br: a.readInt32,
              pbr: a.readPackedInt32,
              bw: f.writeRepeatedInt32,
            },
            adult_content_restricted: {
              n: 12,
              br: a.readBool,
              bw: f.writeBool,
            },
            commercial_license_restricted: {
              n: 13,
              br: a.readBool,
              bw: f.writeBool,
            },
            gift_not_valid_for_recipient_region: {
              n: 14,
              br: a.readBool,
              bw: f.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Errors`;
    }
  },
  da = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || c(e.M()),
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
              br: a.readInt32,
              pbr: a.readPackedInt32,
              bw: f.writeRepeatedInt32,
            },
            owned_appids_extra_copy: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readInt32,
              pbr: a.readPackedInt32,
              bw: f.writeRepeatedInt32,
            },
            appids_in_mastersub: { n: 3, c: fa, r: !0, q: !0 },
            price_has_changed: { n: 4, br: a.readBool, bw: f.writeBool },
            non_refundable: { n: 5, br: a.readBool, bw: f.writeBool },
            gift_recipient_higher_price: {
              n: 6,
              br: a.readBool,
              bw: f.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings`;
    }
  },
  fa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_appid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_appid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            mastersub_appid: { n: 2, br: a.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub`;
    }
  },
  pa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subtotal || c(e.M()),
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
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_EstimatedTotals`;
    }
  },
  ma = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_ids || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { item_ids: { n: 1, c: I, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Request`;
    }
  },
  ha = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ownership_info || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ownership_info: { n: 1, c: _a, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response`;
    }
  },
  ga = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            already_owns: { n: 2, br: a.readBool, bw: f.writeBool },
            wishes_for: { n: 3, br: a.readBool, bw: f.writeBool },
            partial_owns_appids: {
              n: 4,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
            partial_wishes_for: {
              n: 5,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership`;
    }
  },
  _a = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: I },
            friend_ownership: { n: 2, c: ga, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo`;
    }
  },
  va = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { item_id: { n: 1, c: I } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Request`;
    }
  },
  ya = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageids_added || c(e.M()),
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
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
            appids_added: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
            purchase_result_detail: {
              n: 3,
              br: a.readUint32,
              bw: f.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Response`;
    }
  },
  ba;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Checkout.ValidateCart#1`, g(sa, t, n), ca, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.ValidateCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Checkout.GetFriendOwnershipForGifting#1`,
      g(ma, t, n),
      ha,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetFriendOwnershipForGifting = n;
  function r(e, t, n) {
    return e.SendMsg(`Checkout.AddFreeLicense#1`, g(va, t, n), ya, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.AddFreeLicense = r;
})((ba ||= {}));
function xa(e) {
  let t = R(),
    n = C.accountid;
  return H.useCallback(
    (r) => {
      t.setQueryData(Sa(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function Sa(e) {
  return [`AccountOwnedPackages`, e ?? 0];
}
function Ca(e) {
  let t = L(),
    n = yn(),
    r = xa();
  return B({
    mutationFn: () => wa(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: i, appids_added: a, purchase_result_detail: o },
      ] = e;
      (a && n(a), i && r(i));
    },
  });
}
async function wa(e, t) {
  let n = A.Init(va);
  n.Body().set_item_id(I.fromObject(t));
  let r = await ba.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var Ta = `PFP2RDjCi0w-`,
  Ea = `Cbfoq6WaXq4-`,
  Da = `_4lcICEhYuQw-`,
  Oa = `unoV6P6DXbM-`,
  ka = `p8d03I0RAAs-`,
  Aa = `brHZRAeRCnw-`,
  ja = `hATzo-Hjaaw-`,
  Ma = `_7vEy4qHpqHo-`,
  Na = `KoUJweWUwjY-`,
  Pa = `XAGO1LWGig0-`,
  Fa = `uN9-XHR7odQ-`,
  Ia = `CnbkzZzYDxs-`,
  La = `_8UjVVV-S-j8-`,
  Ra = `k0yt-Gxhbs4-`,
  za = `io6uTUtzW-A-`,
  Ba = `_58-zzK2uRws-`,
  Va = `mGygcOFcFcQ-`,
  Ha = `mW8gl4NPYGg-`,
  Ua = `X9907eDQcow-`,
  Wa = `GwjmtMACpAo-`,
  Ga = `S8JsHzHuIMA-`,
  Ka = `_4nNWbL6J2cI-`,
  qa = `Djw7Ta0NL0Q-`,
  Ja = `u-mW6oZelJ4-`,
  Ya = `j0BUhYRjGwM-`,
  Xa = `I-L7P5K0HUM-`,
  Za = `VYzpavMEA5M-`,
  Qa = `iXn31HpcmTo-`;
function $a(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = Je(t),
    { data: a } = F(t),
    o = Rt(t),
    { data: s } = F(o),
    { data: c } = on();
  if (!i || !a || (a.type == 1 && !Qi(s))) return null;
  let u = i.summary_unfiltered || i.summary_filtered,
    d = `#ReviewScore_UserReviewScoreAria`,
    f = !1,
    p = M.Localize(`#Language_` + l.LANGUAGE);
  if (
    (eo(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((f = !0),
          (d = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (u = i.summary_language_specific))
        : (u = i.summary_filtered)),
    !u || !u.review_score)
  )
    return null;
  let m = qa;
  m =
    u.review_score > 0 && u.review_score < 5
      ? Ja
      : u.review_score == 5
        ? Ya
        : Xa;
  let h = `${l.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    g = (0, K.jsxs)(`div`, {
      className: y(Ka, m),
      children: [
        (0, K.jsx)(`div`, {
          className: Za,
          "aria-label": M.Localize(d, u.review_score_label, p),
          children: u.review_score_label,
        }),
        (0, K.jsxs)(`div`, {
          className: Ga,
          "aria-label": M.Localize(
            `#GameHover_UserReviewCount`,
            u.review_count.toLocaleString(V()),
          ),
          children: [
            `(`,
            n
              ? `(` + u.review_count.toLocaleString(V()) + `)`
              : f
                ? M.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    u.review_count.toLocaleString(V()),
                    p,
                  )
                : M.Localize(
                    `#GameHover_UserReviewCount`,
                    u.review_count.toLocaleString(V()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, K.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, M.Localize(`#GameHover_UserReviewsHeader`)],
          }),
      ],
    }),
    _ = `#ReviewScore_PercentPositive`;
  if (a.item_type === 2) _ = `#ReviewScore_PercentPositive_bundle`;
  else if (a.item_type === 0)
    switch (a.type) {
      case 6:
        _ = `#ReviewScore_PercentPositive_software`;
        break;
      case 7:
        _ = `#ReviewScore_PercentPositive_video`;
        break;
      case 10:
        _ = `#ReviewScore_PercentPositive_hardware`;
        break;
      case 8:
        _ = `#ReviewScore_PercentPositive_series`;
    }
  return (0, K.jsx)(zu, {
    url: h,
    className: y(Wa, `ReviewScore`),
    children:
      r && u.percent_positive != null && u.review_count != null && _
        ? (0, K.jsx)(Pe, {
            bTopmost: !0,
            toolTipContent: M.Localize(_, u.percent_positive, u.review_count),
            children: g,
          })
        : g,
  });
}
function eo(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function to(e, t) {
  let n = U(T.STORE_BASE_URL, t, v.country_code);
  return (await (await fetch(n)).json()).rgWishlist || [];
}
function no() {
  let e = L(),
    t = C.accountid;
  return z(ro(e, t));
}
function ro(e, t) {
  return {
    queryKey: oo(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await to(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function io(e) {
  let { data: t } = no();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function ao() {
  let e = R(),
    t = C.accountid;
  return (n, r) => {
    e.setQueryData(oo(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function oo(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function so(e, t, n) {
  let r = ao(),
    i = v.accountid;
  return B({
    mutationKey: [`useUpdateWishlist`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          T.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, d()),
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
function co(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = F(t),
    { elDialogElement: s, fnShowLogonDialog: c } = vc(),
    [l, u] = (0, H.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = Lt(l),
    f = io(l),
    { bIsOwned: p } = xn(d),
    [m, h] = (0, H.useState)(!1),
    g = Wt(`GameHoverWishlistButton`),
    { mutateAsync: _ } = so(l, !f, n);
  (0, H.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let b = (0, H.useCallback)(
    async (e) => {
      v.logged_in
        ? (e.preventDefault(),
          e.stopPropagation(),
          h(!0),
          await _(),
          g.token.reason || h(!1))
        : c();
    },
    [g.token.reason, c, _],
  );
  return p && o?.type != 10
    ? null
    : (0, K.jsxs)(Ee, {
        className: y(Na, a && `B7tWNVp-vns-`, r),
        onActivate: b,
        style: i,
        children: [
          f ? (0, K.jsx)(ke, {}) : (0, K.jsx)(Me, {}),
          (0, K.jsx)(`div`, {
            className: y(Pa, m && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: M.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var lo = H.createContext({
  AddImpression: () => {
    console.log(`Impression Tracking not enabled`);
  },
  BIsValid: () => !1,
});
function uo() {
  return H.useContext(lo);
}
function fo(e) {
  let { appID: t, feature: n, depth: r, children: i } = e,
    a = dt(n, r),
    o = uo(),
    [s, c] = H.useState(void 0),
    l = H.useCallback(
      (e) => {
        e.isIntersecting &&
          c((e) => (e?.appID == t && e?.snr == a ? e : { appID: t, snr: a }));
      },
      [t, a],
    );
  (0, H.useEffect)(() => {
    s && s.appID != null && o.AddImpression(s.appID, s.snr);
  }, [o, s]);
  let u = je(l),
    d = t && (!s || (s.appID != t && s.snr != a)),
    f = re(i.props.ref, d ? u : void 0);
  return H.cloneElement(i, { ref: f });
}
function po(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function mo(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var ho = (e) => {
  let { appid: t } = e,
    n = (0, K.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, K.jsx)(fo, { appID: t, children: n }) : n;
};
function go(e) {
  let { id: t } = e,
    { data: n } = Ye(t);
  return n
    ? (0, K.jsx)(`div`, {
        className: Ba,
        children: (0, K.jsx)(`div`, {
          className: Va,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, K.jsx)(
                tp,
                { tagid: e.tagid, className: Ha },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function _o(e) {
  let {
      id: t,
      displayID: n,
      name: r,
      strStoreUrl: i,
      elElementToAppend: a,
      bShowDemoButton: o,
      bHideBottomHalf: s,
      bHidePrice: c,
      bShowDeckCompatibilityDialog: l,
      eHardwareCompatibilityDisplay: u,
      onShowDeckCompatibilityDialog: d,
      bUseSubscriptionLayout: f,
      nCreatorAccountID: p,
      bPreventNavigation: m,
      bShowDescription: h,
    } = e,
    g = Mu(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, b] = (0, H.useState)(!1),
    [x, S] = (0, H.useState)(``),
    C = (e) => S(`translateY( -${e?.clientHeight || 0}px )`),
    { data: w } = F(t),
    { data: T } = rt(n),
    E = !f && !o && !a,
    D = w && w.item_type == 0,
    [O, k] = mo(l, u);
  return (0, K.jsxs)(`div`, {
    className: Fa,
    style: { transform: s && v ? x : `` },
    onMouseEnter: () => b(!0),
    onFocus: () => b(!0),
    onMouseLeave: () => b(!1),
    onBlur: () => b(!1),
    children: [
      (0, K.jsxs)(`a`, {
        href: i,
        className: Aa,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          T &&
            (0, K.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, K.jsx)(`div`, {
                className: y(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, K.jsx)(`img`, {
                  loading: `lazy`,
                  src: tr(T, `header`),
                  alt: w?.name,
                }),
              }),
            }),
          !c &&
            !f &&
            (0, K.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, K.jsx)(To, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, K.jsx)(`div`, {
        className: Ia,
        ref: C,
        children: (0, K.jsxs)(`div`, {
          className: Ra,
          children: [
            (0, K.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, K.jsx)(`div`, {
                className: za,
                children: w?.name || r,
              }),
            }),
            h && (0, K.jsx)(yo, { id: t }),
            (0, K.jsx)(go, { id: t }),
            !O && (0, K.jsx)($a, { id: t }),
            !(O || !E) &&
              (0, K.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, K.jsx)(So, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, K.jsx)(vo, { id: t }),
                ],
              }),
            o && (0, K.jsx)(gc, { id: t, className: `mVkwv5PYwMg-` }),
            !!(O && D) &&
              (0, K.jsx)(Vt, { id: t, compatibility: k, onShowDialog: _ }),
            !!a && a,
            f &&
              D &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, K.jsx)(Vo, { appid: t.appid, bIsMuted: !1 }),
            p && (0, K.jsx)(cu, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function vo(e) {
  let { id: t } = e,
    { data: n } = ot(t);
  if (!n) return null;
  let r = ea(n);
  return (0, K.jsx)(`div`, { className: Ua, children: r });
}
function yo(e) {
  let { id: t } = e,
    { data: n } = tt(t);
  return n
    ? (0, K.jsx)(`div`, { className: La, children: n?.short_description })
    : null;
}
function bo(e) {
  let {
      id: t,
      displayID: n,
      strStoreUrl: r,
      bHideBottomHalf: i,
      bShowDeckCompatibilityDialog: a,
      eHardwareCompatibilityDisplay: o,
      bShowWishlistButton: s = !0,
      bShowIgnoreButton: c = !1,
    } = e,
    { data: l } = qe(t),
    { data: u } = Ke(t),
    d = l === void 0 && u === void 0,
    [f] = mo(!!a, o);
  return (0, K.jsxs)(`div`, {
    className: y(Ta, d && `dNo27dzDPfI-`, ai, i && `djLCJl8FKv8-`),
    children: [
      (0, K.jsxs)(`a`, {
        href: r,
        className: Ea,
        children: [
          !(!s || f) && (0, K.jsx)(co, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, K.jsx)(Tl, { id: n, snr: e.strSNR }),
          t && (0, K.jsx)(bu, { id: t }),
        ],
      }),
      (0, K.jsx)(_o, { ...e }),
    ],
  });
}
function xo(e) {
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
      children: u,
      nCreatorAccountID: d,
      nWidthMultiplier: f,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bShowWishlistButton: h = !0,
      bShowIgnoreButton: g = !1,
      bShowDescription: _ = !1,
      strChildLinkURL: v,
      ...y
    } = e,
    { data: b } = F(t),
    x = ee(),
    [S, C, w] = te(),
    { strStoreURL: T, snr: E } = Ko(b, o);
  if ((!b && !n) || x) return (0, K.jsx)(K.Fragment, { children: u });
  let D = t;
  b &&
    b.item_type == 1 &&
    b.included_appids?.length == 1 &&
    (D = { appid: b.included_appids[0] });
  let O = Iu() == `hiding`,
    k;
  r || (k = v ?? (b ? T : void 0));
  let [, A] = mo(p, m),
    j;
  A != 0 && b?.appid && b?.item_type == 0 && (j = b.appid);
  let ne = (0, K.jsx)(bo, {
      id: t,
      displayID: D,
      name: n,
      bPreventNavigation: r,
      strStoreUrl: k,
      elElementToAppend: i,
      bShowDemoButton: a,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bHideBottomHalf: O,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strSNR: E,
      nCreatorAccountID: d,
      bShowWishlistButton: h,
      bShowIgnoreButton: g,
      bShowDescription: _,
      onShowDeckCompatibilityDialog: j ? C : void 0,
    }),
    re = k && !v ? (0, K.jsx)(`a`, { href: k, children: u }) : u;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(Nu, {
        hoverContent: ne,
        nWidthMultiplier: f,
        ...y,
        children: re,
      }),
      j &&
        (0, K.jsx)(Ht, {
          nAppID: j,
          appName: b?.name || n,
          startingTab: A,
          active: S,
          closeModal: w,
        }),
    ],
  });
}
function So(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = at(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, K.jsx)(`span`, {
          title: M.Localize(`#Platform_Windows`),
          children: (0, K.jsx)(Ae, {
            "aria-label": M.Localize(`#Platform_Windows`),
          }),
        });
    return (
      l.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, K.jsx)(`span`, {
            title: M.Localize(`#Platform_Linux`),
            children: (0, K.jsx)(we, {
              "aria-label": M.Localize(`#Platform_Linux`),
            }),
          }))
        : l.PLATFORM === `macos` && a?.mac
          ? (e = (0, K.jsx)(`span`, {
              title: M.Localize(`#Platform_Mac`),
              children: (0, K.jsx)(He, {
                "aria-label": M.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, K.jsx)(`span`, {
              title: M.Localize(`#Platform_VR`),
              children: (0, K.jsx)(xe, {
                "aria-label": M.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, K.jsx)(`span`, { className: y(Dr, n), children: e }) : null
    );
  }
  return (0, K.jsxs)(`span`, {
    className: y(Dr, n),
    children: [
      !i &&
        a.windows &&
        (0, K.jsx)(`span`, {
          title: M.Localize(`#Platform_Windows`),
          children: (0, K.jsx)(Ae, {
            "aria-label": M.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, K.jsx)(`span`, {
          title: M.Localize(`#Platform_Mac`),
          children: (0, K.jsx)(He, {
            "aria-label": M.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, K.jsx)(`span`, {
          title: M.Localize(`#Platform_Linux`),
          children: (0, K.jsx)(we, {
            "aria-label": M.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, K.jsx)(`span`, {
          title: M.Localize(`#Platform_VR`),
          children: (0, K.jsx)(xe, {
            "aria-label": M.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function Co(e) {
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
function wo(e, t, n) {
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
function To(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = Qe(t),
    { data: i } = F(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, K.jsx)(Eo, { purchaseOption: a, ...e });
}
function Eo(e) {
  let {
      bSingleLineMode: t,
      onlyOneDiscountPct: n,
      id: r,
      purchaseOption: i,
      bHidePrePurchase: a,
      bHideReleaseDate: o,
      bHideIfDemo: s,
      bPurchaseOptionDisplay: c,
      bCapsuleRowDisplay: u,
      strContainerClassName: d,
      strDiscountAndPriceClassName: f,
      strPriceFormattedClassName: p,
      bPreferWholeNumbers: m,
      bSelfPurchaseOption: h,
      bHideNewTag: g,
      bPrePurchaseBesidePrice: _,
    } = e,
    v = l.NOW,
    { data: b } = ot(r),
    { data: x } = F(r);
  if (!x) return null;
  let S = i,
    w = !g && ra(b, v),
    T = y({
      [Nr]: !0,
      [$r]: t,
      StoreSalePriceWidgetContainer: !0,
      [ri]: w,
      [Tr]: c,
      [ci]: u,
      [d ?? ``]: !!d,
    });
  if (e.bShowInLibrary)
    return (0, K.jsx)(`div`, {
      className: T,
      children: (0, K.jsx)(`div`, {
        className: Y,
        children: M.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (b && b.is_coming_soon && (!S || (!S.packageid && !S.bundleid))) {
    if (o) return null;
    let e =
      b.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(b.coming_soon_display)
        ? It(b)
        : M.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, ea(b));
    return (0, K.jsx)(`div`, {
      className: T,
      children: (0, K.jsx)(`div`, { className: Y, children: e }),
    });
  }
  if (x.is_free) {
    if (!x.is_free_temporarily)
      return x.item_type == 0 && x.type == 1
        ? s
          ? null
          : (0, K.jsxs)(`div`, {
              className: T,
              children: [
                w &&
                  (0, K.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: M.Localize(`#Flag_New`),
                  }),
                (0, K.jsx)(`div`, {
                  className: Y,
                  children: M.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, K.jsxs)(`div`, {
            className: T,
            children: [
              w &&
                (0, K.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: M.Localize(`#Flag_New`),
                }),
              (0, K.jsx)(`div`, {
                className: Y,
                children: M.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (S && S.is_free_to_keep && !S.formatted_original_price)
      return (0, K.jsx)(`div`, {
        className: T,
        children: (0, K.jsx)(`div`, {
          className: Y,
          children: M.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!S || !S.formatted_final_price) return null;
  let E = x.item_type == 2,
    D = Co(S),
    O = !!D && !D.nSupersededBundlePct,
    k = D?.nSupersededBundlePct ? D.nDiscountPct : S.discount_pct || 0,
    A = ((D || E) && (!n || O || (D && !t)) && S.bundle_discount_pct) || 0,
    ee = S.formatted_final_price;
  if (m) {
    let e = qt(C.country_code.toUpperCase()),
      t = { ...me(e), bWholeUnitsOnly: !0 };
    ee = he(Number.parseInt(S.final_price_in_cents || `0`), t);
  }
  let j = ia(b, S);
  return (0, K.jsx)(Do, {
    bSingleLineMode: !!t,
    bBundleItem: E,
    nBaseDiscountPercentage: A,
    nDiscountPercentage: k,
    bIsPrePurchase: j,
    strBestPurchaseOriginalPriceFormatted:
      D?.strOriginalPrice || S.formatted_original_price || ``,
    strBestPurchasePriceFormatted: ee,
    bHideDiscountPercentForCompliance: !!S.hide_discount_pct_for_compliance,
    bShowNewFlag: w,
    bHidePrePurchase: !!a,
    bPrePurchaseBesidePrice: _,
    strDiscountAndPriceClassName: f,
    strPriceFormattedClassName: p,
    bPurchaseOptionDisplay: c,
    bCapsuleRowDisplay: u,
  });
}
function Do(e) {
  let {
      bSingleLineMode: t,
      nDiscountPercentage: n,
      bIsPrePurchase: r,
      nBaseDiscountPercentage: i,
      strBestPurchaseOriginalPriceFormatted: a,
      strBestPurchasePriceFormatted: o,
      bHideDiscountPercentForCompliance: s,
      bShowNewFlag: c,
      bHidePrePurchase: l,
      bPrePurchaseBesidePrice: u,
      strDiscountAndPriceClassName: d,
      strPriceFormattedClassName: f,
      bPurchaseOptionDisplay: p,
      bCapsuleRowDisplay: m,
      bBundleItem: h,
    } = e,
    g = s,
    _;
  n &&
    (_ = g
      ? M.Localize(`#Discount_ARIA_Label_SpecialPrice`, a)
      : M.Localize(`#Discount_ARIA_Label`, n, a, o));
  let v = !((!n && !i) || g) && !!a,
    b = !(!i || !n || g || t),
    x = M.Localize(wo(!!i, !!n, !!h));
  return (0, K.jsxs)(`div`, {
    className: y({
      [Nr]: !0,
      [$r]: t,
      StoreSalePriceWidgetContainer: !0,
      [Zr]: !!n,
      Discounted: !!n,
      [ni]: !!r,
      [si]: !!u,
      [ri]: !!c,
      [Tr]: p,
      [ci]: m,
      [d ?? ``]: !!d,
    }),
    "aria-label": _,
    children: [
      !(!r || l) &&
        (0, K.jsx)(`div`, {
          className: y(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, K.jsxs)(`span`, {
            children: [
              (0, K.jsx)(We, {}),
              M.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, K.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: M.Localize(`#Flag_New`),
        }),
      b &&
        (0, K.jsx)(Ie, {
          toolTipContent: x,
          children: (0, K.jsxs)(`span`, {
            className: y(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, K.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${i}%`,
              }),
              `-${n}%`,
            ],
          }),
        }),
      !(!i || g || b) &&
        (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(Ie, {
              toolTipContent: x,
              children: (0, K.jsx)(`span`, {
                className: y(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, K.jsx)(Ie, {
                toolTipContent: x,
                children: (0, K.jsx)(`span`, {
                  className: y(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || g) &&
        (0, K.jsx)(Ie, {
          toolTipContent: x,
          children: (0, K.jsx)(`div`, {
            className: y(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && g) &&
        (0, K.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, K.jsx)(be, {}),
        }),
      v
        ? (0, K.jsxs)(`div`, {
            className: y(ei),
            children: [
              (0, K.jsx)(`div`, {
                className: y({ [oi]: t, [ti]: !t }),
                children: a,
              }),
              (0, K.jsx)(`div`, {
                className: y({ [Y]: !0, [$r]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, K.jsx)(`div`, {
            className: y({ [Y]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
var Oo = `pE3kiYj-T9c-`,
  ko = `bXqn3-4kGc8-`,
  Ao = `bNGFzJt9CmI-`,
  jo = `vE1beFyJ7fE-`,
  Mo = `jLH2MgXW2QA-`,
  No = `dGNTZWr-al8-`,
  Po = `_8aFotqvmohI-`,
  Fo = `sjibpkgu4sc-`,
  Io = `I09IQjtbMSg-`,
  Lo = `C4-YRfvAL7Q-`;
async function Ro(e, t) {
  let n = `steam://run/` + e;
  T.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      zo(e, n, t));
}
async function zo(e, t, n) {
  console.log(`prompting for`, n);
  let r = T.STORE_BASE_URL + `about/`;
  ze(
    (0, K.jsx)(Bo, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var Bo = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, K.jsx)(Fe, {
    onEscKeypress: t,
    className: Oo,
    children: (0, K.jsxs)(Ce, {
      children: [
        (0, K.jsxs)(Ve, { children: [` `, P(`#GotSteam_Title`), ` `] }),
        (0, K.jsxs)(Se, {
          children: [
            (0, K.jsx)(Oe, {
              children: Ne(
                `#GotSteam_PromptWithDownloadLink`,
                (0, K.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: ko,
                  children: P(`#GotSteam_DownloadLinkText`),
                }),
                (0, K.jsx)(`span`, { className: Ao, children: e.strGameName }),
              ),
            }),
            (0, K.jsxs)(`div`, {
              className: jo,
              children: [
                (0, K.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: y(Mo, No),
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: Po,
                      children: [` `, P(`#GotSteam_Yes`), ` `],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: Fo,
                      children: [` `, P(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, K.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: Mo,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: Po,
                      children: [` `, P(`#GotSteam_No`), ` `],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: Fo,
                      children: [` `, P(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: Io,
              children: [
                (0, K.jsx)(we, { className: Lo }),
                P(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function Vo(e) {
  let { appid: t, bIsMuted: n } = e,
    r = Lt(t),
    i = vn(t),
    { data: a } = F(r),
    { mutate: o } = Ca(r),
    s = (e) => {
      (e.preventDefault(), i ? Ro(t, a?.name) : o());
    },
    c = y(kr, n && void 0, i ? Ar : jr);
  return (0, K.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: s,
    className: c,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s(e));
    },
    children: P(i ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function Ho(e, t = !1) {
  if (e)
    return t && Qi(e)
      ? `${l.STORE_BASE_URL}app/${$i(e)[0]}`
      : `${l.STORE_BASE_URL}${e.store_url_path}`;
}
function Uo() {
  window.location.href = `${l.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var Wo = H.createContext({});
function Go() {
  return H.useContext(Wo);
}
function Ko(e, t) {
  let n = ft(),
    r = Go(),
    i = Yt(Ho(e, t));
  return { snr: Xt(n), strStoreURL: Jt(i, n, r) };
}
function qo(e) {
  return e
    ? { type: `replay`, gid: e }
    : C.logged_in
      ? { type: `account` }
      : { type: `anonymous`, gid: Ot(Dt) };
}
var Jo = H.createContext({ cartID: void 0 });
function Yo() {
  return H.useContext(Jo).cartID || qo();
}
function Xo(e) {
  return e.type === `account`;
}
function Zo(e) {
  return e.type === `anonymous`;
}
var Qo = {
  bCanAddItems: !0,
  bCanModify: !0,
  bCanPurchase: !0,
  bShowValidationNotices: !0,
  bShowPurchaseOptionPicker: !0,
  bShowPageFooter: !0,
  bCanChangeCountry: !0,
};
({ ...Qo }, { ...Qo });
var $o = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.validation_failure || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            validation_failure: { n: 1, d: 0, br: a.readEnum, bw: f.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartValidationDetails`;
    }
  },
  es = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_gift || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_gift: { n: 1, br: a.readBool, bw: f.writeBool },
            is_private: { n: 2, br: a.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItemFlags`;
    }
  },
  ts = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            type: { n: 2, br: a.readEnum, bw: f.writeEnum },
            packageid: { n: 3, br: a.readUint32, bw: f.writeUint32 },
            bundleid: { n: 4, br: a.readUint32, bw: f.writeUint32 },
            is_valid: { n: 8, br: a.readBool, bw: f.writeBool },
            validation_details: { n: 9, c: $o },
            time_added: { n: 10, br: a.readUint32, bw: f.writeUint32 },
            price_when_added: { n: 11, c: Z },
            gift_info: { n: 12, c: X },
            flags: { n: 13, c: es },
            gidcoupon_applied: {
              n: 14,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItem`;
    }
  },
  ns = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_items: { n: 1, c: ts, r: !0, q: !0 },
            subtotal: { n: 2, c: Z },
            is_valid: { n: 3, br: a.readBool, bw: f.writeBool },
            validation_details: { n: 4, c: $o },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartContents`;
    }
  },
  rs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: a.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Request`;
    }
  },
  is = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: ns } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Response`;
    }
  },
  as = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: a.readString, bw: f.writeString },
            items: { n: 2, c: os, r: !0, q: !0 },
            navdata: { n: 3, c: Cn },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request`;
    }
  },
  os = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            bundleid: { n: 2, br: a.readUint32, bw: f.writeUint32 },
            gift_info: { n: 10, c: X },
            flags: { n: 11, c: es },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request_ItemToAdd`;
    }
  },
  ss = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_ids || c(e.M()),
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
              br: a.readUint64String,
              pbr: a.readPackedUint64String,
              bw: f.writeRepeatedUint64String,
            },
            cart: { n: 2, c: ns },
            replaced_packages: {
              n: 3,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
            existing_billing_agreementid: {
              n: 4,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            new_billing_agreement_recurring_packageid: {
              n: 5,
              br: a.readUint32,
              bw: f.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Response`;
    }
  },
  cs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            user_country: { n: 2, br: a.readString, bw: f.writeString },
            gift_info: { n: 10, c: X },
            flags: { n: 11, c: es },
            apply_gidcoupon: {
              n: 12,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Request`;
    }
  },
  ls = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: ns } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Response`;
    }
  },
  us = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            user_country: { n: 2, br: a.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Request`;
    }
  },
  ds = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: ns } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Response`;
    }
  },
  fs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readFixed64String,
              bw: f.writeFixed64String,
            },
            user_country: { n: 2, br: a.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Request`;
    }
  },
  ps = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: ns } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Response`;
    }
  },
  ms = class e extends G.Message {
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
  hs = class e extends G.Message {
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
  gs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: a.readUint32, bw: f.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Request`;
    }
  },
  _s = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { line_items: { n: 1, c: vs, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response`;
    }
  },
  vs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            coupons: { n: 2, c: oa, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response_LineItemCoupons`;
    }
  },
  ys;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountCart.GetCart#1`, g(rs, t, n), is, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetCart = t;
  function n(e, t, n) {
    return e.SendMsg(`AccountCart.AddItemsToCart#1`, g(as, t, n), ss, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.AddItemsToCart = n;
  function r(e, t, n) {
    return e.SendMsg(`AccountCart.ModifyLineItem#1`, g(cs, t, n), ls, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.ModifyLineItem = r;
  function i(e, t, n) {
    return e.SendMsg(`AccountCart.RemoveItemFromCart#1`, g(us, t, n), ds, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.RemoveItemFromCart = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AccountCart.MergeShoppingCartContents#1`,
      g(fs, t, n),
      ps,
      { ePrivilege: 1 },
    );
  }
  e.MergeShoppingCartContents = a;
  function o(e, t, n) {
    return e.SendMsg(`AccountCart.DeleteCart#1`, g(ms, t, n), hs, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.DeleteCart = o;
  function s(e, t, n) {
    return e.SendMsg(`AccountCart.GetRelevantCoupons#1`, g(gs, t, n), _s, {
      ePrivilege: 1,
    });
  }
  e.GetRelevantCoupons = s;
})((ys ||= {}));
var bs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_requester || c(e.M()),
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
              br: a.readFixed64String,
              bw: f.writeFixed64String,
            },
            purchase_request_id: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Request`;
    }
  },
  xs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  Ss = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: a.readInt64String, bw: f.writeInt64String },
            currencycode: { n: 2, br: a.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Amount`;
    }
  },
  Cs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            costwhenadded: { n: 2, c: Ss },
            is_gift: { n: 3, br: a.readBool, bw: f.writeBool },
            gidbundle: {
              n: 4,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            quantity: { n: 5, br: a.readUint32, bw: f.writeUint32 },
            gift_info: { n: 6, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_PackageItem`;
    }
  },
  ws = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.walletcredit || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { walletcredit: { n: 1, c: Ss } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  Ts = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            gidcoupontarget: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            packageid: { n: 3, br: a.readUint32, bw: f.writeUint32 },
            gidcoupon: {
              n: 4,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CouponItem`;
    }
  },
  Es = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.microtxnappid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            microtxnappid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            microtxnassetclassid: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  Ds = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bundleid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bundleid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            quantity: { n: 2, br: a.readUint32, bw: f.writeUint32 },
            is_gift: { n: 3, br: a.readBool, bw: f.writeBool },
            gift_info: { n: 4, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_BundleItem`;
    }
  },
  Os = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reward_id || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reward_id: { n: 1, br: a.readInt32, bw: f.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  ks = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidparent || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            children: { n: 2, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RelationShip`;
    }
  },
  As = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            gidcoupon: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            gidlineitem: {
              n: 3,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  js = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidlineitem || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            package_item: { n: 2, c: Cs },
            wallet_credit_item: { n: 3, c: ws },
            coupon_item: { n: 4, c: Ts },
            micro_item: { n: 5, c: Es },
            bundle_item: { n: 7, c: Ds },
            loyalty_item: { n: 8, c: Os },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Item`;
    }
  },
  Ms = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.coupons || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { coupons: { n: 1, c: As, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Potentials`;
    }
  },
  Ns = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
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
        e.prototype.lineitems || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lineitems: { n: 1, c: js, r: !0, q: !0 },
            treeview: { n: 2, c: ks, r: !0, q: !0 },
            potentials: { n: 3, c: Ms },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Contents`;
    }
  },
  Ps = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            contents: { n: 2, c: Q },
            time_created: { n: 3, br: a.readUint32, bw: f.writeUint32 },
            merged_into_account_cart: { n: 4, br: a.readBool, bw: f.writeBool },
            steamid_requester: {
              n: 5,
              br: a.readFixed64String,
              bw: f.writeFixed64String,
            },
            purchase_request_id: {
              n: 6,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Response`;
    }
  },
  Fs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            browserid: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            cart_items: { n: 4, c: Cs, r: !0, q: !0 },
            store_country_code: { n: 5, br: a.readString, bw: f.writeString },
            beta_mode: { n: 6, d: !1, br: a.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  Is = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            contents: { n: 2, c: Q },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Response`;
    }
  },
  Ls = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            quantity: { n: 3, br: a.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  Rs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            contents: { n: 2, c: Q },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Response`;
    }
  },
  zs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            bundleid: { n: 2, br: a.readUint32, bw: f.writeUint32 },
            browserid: {
              n: 3,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            store_country: { n: 5, br: a.readString, bw: f.writeString },
            quantity: { n: 6, br: a.readUint32, bw: f.writeUint32 },
            beta_mode: { n: 7, d: !1, br: a.readBool, bw: f.writeBool },
            gift_info: { n: 8, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  Bs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || c(e.M()),
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
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Response`;
    }
  },
  Vs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            gift_info: { n: 3, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  Hs = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || c(e.M()),
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
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  Us = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            gidlineitems: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readUint64String,
              pbr: a.readPackedUint64String,
              bw: f.writeRepeatedUint64String,
            },
            browserid: {
              n: 3,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  Ws = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || c(e.M()),
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
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  Gs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, g(bs, t, n), xs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      g(Ns, t, n),
      Ps,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `community`, `store`],
      },
    );
  }
  e.GetShoppingCartContents = n;
  function r(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddPackages#1`, g(Fs, t, n), Is, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = r;
  function i(e, t, n) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, g(Ls, t, n), Rs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = i;
  function a(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, g(zs, t, n), Bs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = a;
  function o(e, t, n) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, g(Vs, t, n), Hs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.ModifyLineItem = o;
  function s(e, t, n) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, g(Us, t, n), Ws, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `store`],
    });
  }
  e.RemoveLineItems = s;
})((Gs ||= {}));
function Ks(e) {
  return Xo(e) ? e.type : e.gid;
}
function qs(e) {
  return [`shopping_cart`, Ks(e), C.accountid];
}
function Js(e) {
  e.invalidateQueries({ queryKey: [`validate_checkout`], exact: !1 });
}
function Ys(e, t, n) {
  (e.setQueryData(qs(t), n), Js(e));
}
async function Xs(e, t, n, r, i) {
  let a = new FormData();
  (t &&
    (t.length === 1
      ? a.set(`subid`, t[0].toString())
      : t.forEach((e) => a.append(`subid[]`, e.toString()))),
    n && a.set(`bundleid`, n.toString()),
    (r || i) &&
      (a.set(`isgift`, `1`), i && a.set(`gifteeaccountid`, i.toString())),
    a.set(`action`, `add_to_cart`));
  let o = await fetch(`${l.STORE_BASE_URL}cart/addtocart`, {
    method: `post`,
    body: a,
  });
  if (!o.ok) throw Error(`Failed to fetch /cart/addtocart`);
  let s = await o.json();
  return [s?.success ? 1 : 2, s?.contents];
}
async function Zs(e, t, n, r) {
  let i = A.Init(as);
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
  let a = await ys.AddItemsToCart(e, i);
  return (
    a.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${a.GetEResult()}`),
    [a.GetEResult(), a.Body().toObject()]
  );
}
function Qs(e) {
  let t = { line_items: [] };
  return (
    e?.lineitems?.length &&
      (t.line_items = e.lineitems
        .map((e) => (e.package_item?.gidbundle ? null : $s(e)))
        .filter(nn)),
    t
  );
}
function $s(e) {
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
function ec(e, t, n, r, i) {
  return tc(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function tc(e, t) {
  let n = Yo(),
    r = L(),
    i = R(),
    { storeBrowseContext: a, dataLoader: o } = nt(),
    { country: s } = a,
    c = ut(t);
  return B({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (Xo(n)) {
        let [a, o] = await Zs(r, s, e, c);
        if (a == 1) ((t = o.line_item_ids), Ys(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (Zo(n)) {
        let a = e.map((e) => e.packageid).filter(nn),
          o = e.map((e) => e.bundleid).filter(nn);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await Xs(
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
            Ys(i, n, Qs(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(it(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(Xe(o, r)), i.prefetchQuery(et(o, r)));
          },
        );
      })();
    },
  });
}
function nc(e, t, n) {
  return ct(e ? `${l.STORE_BASE_URL}${e.store_url_path}` : void 0, t, n);
}
async function rc(e, t) {
  let n = A.Init(yt);
  (n.Body().set_context(kt(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await _t.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function ic(e) {
  let t = sc(L());
  return z(ac(t, e));
}
function ac(e, t) {
  return { queryKey: oc(t), queryFn: async () => e.load(t), enabled: !!t };
}
function oc(e) {
  return [`hardwaredetail`, e];
}
function sc(e) {
  return ge(`HardwareDetailLoader`, () => cc(e));
}
function cc(e) {
  return new fr.default(async (t) => {
    let n = await rc(e, t),
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
var lc = { high_pending_orders: !1, inventory_available: !0 };
function uc(e) {
  let { data: t } = F(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = ic(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : lc) : null;
}
var dc = `wvEYeGaFmt0-`,
  fc = `GW1050ijiP0-`;
function pc(e) {
  let { id: t, className: n } = e,
    r = ft(),
    { data: i } = F(t),
    { data: a } = ot(t),
    { data: s } = Ze(t),
    c = uc(t),
    { bIsOwned: l } = xn(t),
    u = nc(i),
    f = (0, H.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          ve(window, `steam://run/${e}`));
      }
    }, [i]);
  if (!i || !a || !s || i.type == 8) return null;
  let p =
    i.is_free ||
    (s.final_price_in_cents != null && s.final_price_in_cents == `0`) ||
    (s.discount_pct && s.discount_pct >= 100);
  if (i.item_type == 1) {
    if (i.type == 10) {
      if (!c) return (0, K.jsx)(Kt, { size: `small`, position: `center` });
      if (!c.inventory_available)
        return (0, K.jsx)(`div`, {
          className: y(fc, n),
          children: (0, K.jsxs)(`span`, {
            children: [` `, M.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (p && i.included_appids && i.included_appids.length > 1)
      return null;
  }
  if (i.item_type == 0) {
    if ((a.is_coming_soon && !s.packageid) || (l && i.type === 10)) return null;
    if (!l && s.is_free_to_keep) {
      if (T.IN_CLIENT || o() != `store`) {
        let e = `${T.IN_CLIENT ? `steam://openurl/` : ``}${u}`;
        return (0, K.jsx)(`div`, {
          onClick: (t) => ve(t, e),
          className: y(dc, n),
          children: (0, K.jsx)(`span`, {
            children: M.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = Zt(`${T.STORE_BASE_URL}freelicense/addfreelicense`, r);
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
              value: d(),
            }),
            (0, K.jsx)(`button`, {
              className: y(dc, n),
              type: `submit`,
              children: M.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((l || p) && !i.is_coming_soon) {
      let e = M.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        l
          ? (e = M.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : i.is_free_temporarily &&
            (e = M.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, K.jsx)(`div`, {
          className: y(dc, n),
          onClick: f,
          children: (0, K.jsx)(`span`, { children: e }),
        })
      );
    }
    if (s.formatted_final_price == ``)
      return (0, K.jsx)(`a`, {
        href: u,
        className: y(dc, n),
        children: M.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, K.jsx)(mc, {
    className: n,
    storeItemBestPurchaseOption: s,
    storeItemDefaultData: i,
  });
}
function mc(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = ft(),
    { mutate: a } = ec(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, K.jsx)(`div`, {
    className: y(dc, t),
    onClick: () => a(),
    children: (0, K.jsx)(`span`, { children: M.Localize(`#Store_AddToCart`) }),
  });
}
var hc = `_8xhMURZRDBY-`;
function gc(e) {
  let { id: t, className: n } = e,
    { data: r } = F(t);
  if (!r) return null;
  let i =
      r.related_items?.demo_appid && r.related_items.demo_appid
        ? r.related_items.demo_appid
        : [],
    a = i.length > 0,
    o = a || r.type === 1,
    s = o
      ? M.Localize(`#Sale_InstallDemo_ttip`, r.name || ``)
      : a
        ? M.Localize(`#Sale_CannotInstallDemo_ttip`, r.name || ``)
        : M.Localize(`#Loading`);
  if (l.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, K.jsx)(`div`, {
        className: n,
        children: (0, K.jsx)(Yf, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, K.jsx)(pc, { id: t, className: n })
    : (0, K.jsx)(Pe, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && Ro(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: y(n, hc, !o && `gpIFsnR2ZGs-`),
        children: o
          ? M.Localize(`#Sale_InstallDemo`)
          : M.Localize(`#Sale_DemoNotFound`),
      });
}
function _c(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, K.jsx)(Re, {
    strTitle: Qt.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || Qt.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: M.Localize(`#Button_OK`),
    onOK: () => {
      (Uo(), t());
    },
  });
}
function vc(e) {
  let [t, n, r] = te();
  return {
    elDialogElement: (0, K.jsx)(Bt, {
      active: t,
      children: (0, K.jsx)(_c, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
async function yc(e) {
  return Cc(
    `${l.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function bc(e) {
  let t = fe.InitFromClanID(e, l.EUNIVERSE);
  return Cc(
    `${l.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function xc(e) {
  return Cc(
    `${l.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Sc(e) {
  return Cc(
    `${l.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Cc(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function wc(e) {
  return [`clantoclaninfo`, e];
}
function Tc(e) {
  return [`apptoclanid`, e];
}
function Ec(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function Dc(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var Oc = new WeakSet();
function kc(e) {
  if (!Oc.has(e)) {
    Oc.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var Ac = new WeakMap();
function jc(e) {
  if (!e) return null;
  let t = Ac.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new fe(e.clanSteamIDString)
          : fe.InitFromClanID(e.clanAccountID, l.EUNIVERSE),
      }),
      Ac.set(e, t)),
    t
  );
}
function Mc(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function Nc(e, t) {
  if (!t) return null;
  kc(e);
  let n = Mc(t);
  return (
    e.setQueryData(wc(n.clanAccountID), n),
    n.appid && e.setQueryData(Tc(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(Ec(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function Pc(e, t) {
  for (let n of t) Nc(e, n);
}
function Fc(e) {
  let t = R();
  return z(Ic(e, t));
}
function Ic(e, t) {
  return (
    kc(t),
    {
      queryKey: wc(e ?? null),
      queryFn: async () => (e ? Nc(t, await bc(e)) : null),
      enabled: e !== void 0,
      select: jc,
    }
  );
}
function Lc(e, t) {
  return (
    kc(t),
    {
      queryKey: Tc(e),
      queryFn: async () => Nc(t, await yc(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function Rc(e, t, n = `group`) {
  return (
    kc(t),
    {
      queryKey: Ec(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(Ec(e, `group`));
          if (n) return n;
        }
        return (
          Nc(t, n == `store` ? await Sc(e) : await xc(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function zc(e) {
  return e.isPending ? void 0 : (e.data ?? null);
}
function Bc(e) {
  let t = R(),
    n = z(Lc(e, t));
  return Fc(e ? zc(n) : void 0);
}
function Vc(e, t = `group`) {
  let n = R(),
    r = z(Rc(e, n, t));
  return Fc(e ? zc(r) : void 0);
}
function Hc(e, t) {
  if (e) return jc(t.getQueryData(wc(e))) ?? void 0;
}
function Uc(e, t) {
  if (e) return Hc(t.getQueryData(Tc(e)), t);
}
function Wc(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = Hc(t.getQueryData(Ec(e, n)), t);
    if (r) return r;
  }
}
async function Gc(e, t) {
  return e ? jc(await t.fetchQuery(Ic(e, t))) : null;
}
async function Kc(e, t) {
  return e ? Gc(await t.fetchQuery(Lc(e, t)), t) : null;
}
async function qc(e, t, n = `group`) {
  return e ? Gc(await t.fetchQuery(Rc(e, t, n)), t) : null;
}
async function Jc(e) {
  let t = { get_appids: !0, l: l.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${l.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function Yc(e) {
  return z(Xc(e));
}
function Xc(e) {
  return {
    queryKey: Zc(e),
    queryFn: async () => {
      let t = await Jc(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function Zc(e) {
  return [`creatorhomebyaccount`, e];
}
function Qc(e, t) {
  if (e.vanity) {
    switch (t) {
      case `publisher`:
        return `${l.STORE_BASE_URL}publisher/${e.vanity}/`;
      case `franchise`:
        return `${l.STORE_BASE_URL}franchise/${e.vanity}/`;
    }
    return `${l.STORE_BASE_URL}developer/${e.vanity}/`;
  }
  return `${l.STORE_BASE_URL}curator/${e.creator_clan_id}/`;
}
var $c = class e extends G.Message {
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
  el = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ignore_list || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ignore_list: { n: 1, c: tl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response`;
    }
  },
  tl = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            packageid: { n: 2, br: a.readUint32, bw: f.writeUint32 },
            reason: { n: 3, br: a.readEnum, bw: f.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response_IgnoreListEntry`;
    }
  },
  nl;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StorePreferences.GetIgnoreList#1`, g($c, t, n), el, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetIgnoreList = t;
})((nl ||= {}));
var rl = E(Ut()),
  il = class e {
    m_queryClient = St;
    m_boxCacheVersion = t.box(0);
    m_bInitialized = !1;
    m_boxAjaxInFlight = t.box(!1);
    LazyInit() {
      this.m_bInitialized ||
        ((this.m_bInitialized = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            Nn(e.query?.queryKey) &&
            n(() =>
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
      return this.ReadData().setCuratorsFollowed.has(al(e));
    }
    BIsIgnoringCurator(e) {
      return this.ReadData().setCuratorsIgnored.has(al(e));
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
        a.append(`sessionid`, d()),
        a.append(t ? `follow` : `ignore`, n ? `1` : `0`));
      let o = await rl.default.post(r, a, { withCredentials: !0 });
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
    async UpdateAppIgnore(e, t, r, i = 0) {
      this.LazyInit();
      let a = T.STORE_BASE_URL + `recommended/ignorerecommendation`,
        o = new FormData();
      (o.append(`sessionid`, d()),
        o.append(`appid`, `` + e),
        o.append(`remove`, t ? `0` : `1`),
        o.append(`snr`, r),
        o.append(`ignore_reason`, `` + i));
      try {
        n(() => this.m_boxAjaxInFlight.set(!0));
        let r = await rl.default.post(a, o, { withCredentials: !0 });
        return (
          r &&
            r.status == 200 &&
            (this.InvalidateCache(),
            Vn(this.m_queryClient, (n) => {
              let r = new Map(n.mapIgnoredApps);
              return (
                t ? r.set(Number(e), i) : r.delete(Number(e)),
                { mapIgnoredApps: r }
              );
            })),
          r.data
        );
      } catch (e) {
        let t = Gt(e);
        console.error(`UpdateAppIgnore`, t.strErrorMsg, t);
      } finally {
        n(() => this.m_boxAjaxInFlight.set(!1));
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
        s.append(`sessionid`, d()),
        s.append(`quantity`, `1`));
      let c = se(e);
      e.preventDefault();
      try {
        (await rl.default.post(n, s, { withCredentials: !0 }),
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
function al(e) {
  return typeof e == `object` && `GetAccountID` in e
    ? e.GetAccountID()
    : Number(e);
}
function ol() {
  let { isPending: e } = Ln();
  return [e, il.Get()];
}
var sl = `pL8IDIWBDg8-`,
  cl = `JuZBiq95wYE-`;
async function ll(e, t) {
  let n = U(T.STORE_BASE_URL, t, v.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function ul() {
  let e = L(),
    t = v.accountid;
  return z(dl(e, t));
}
function dl(e, t) {
  return {
    queryKey: ml(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await ll(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function fl(e) {
  let { data: t } = ul();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function pl() {
  let e = R(),
    t = v.accountid;
  return (n, r) => {
    e.setQueryData(ml(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function ml(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function hl(e, t, n) {
  let r = pl(),
    i = v.accountid;
  return B({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = T.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, d()),
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
var gl = `VULTMp1PCTw-`,
  _l = `_2vLXBykr6zc-`;
async function vl(e, t) {
  let n = U(T.STORE_BASE_URL, t, v.country_code),
    r = await (await fetch(n)).json();
  return Object.keys(r.rgIgnoredApps).map(Number) || [];
}
function yl() {
  let e = L(),
    t = v.accountid;
  return z(bl(e, t));
}
function bl(e, t) {
  return {
    queryKey: Cl(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await vl(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function xl(e) {
  let { data: t } = yl();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function Sl() {
  let e = R(),
    t = v.accountid;
  return (n, r) => {
    e.setQueryData(Cl(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function Cl(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function wl(e, t, n, r = 0) {
  let i = Sl(),
    a = v.accountid;
  return B({
    mutationKey: [`useUpdateAppIgnore`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let i = T.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, d()),
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
function Tl(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, H.useState)(!1),
    o = Wt(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = vc(),
    l = t && `appid` in t ? t.appid : void 0,
    { mutateAsync: u } = wl(l, !xl(l), n),
    d = t && `appid` in t && il.Get().BIsGameIgnored(t.appid);
  return (0, K.jsxs)(Ee, {
    className: y(gl, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        v.logged_in
          ? t && `appid` in t && (a(!0), await u(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, K.jsx)(Te, {}),
      (0, K.jsx)(`div`, {
        className: y(_l, i && `vyz9N2LpdMs-`),
        children: P(d ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function El(e, t) {
  let n = U(T.STORE_BASE_URL, t, v.country_code),
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
function Dl() {
  let e = L(),
    t = C.accountid;
  return z(Ol(e, t));
}
function Ol(e, t) {
  return {
    queryKey: Nl(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await El(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function kl(e) {
  let { data: t } = Dl();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function Al(e) {
  let { data: t } = Dl();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function jl() {
  return l.EREALM != h.k_ESteamRealmChina;
}
function Ml() {
  let e = R(),
    t = C.accountid;
  return (n, r, i, a) => {
    e.setQueryData(Nl(t), (e) => {
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
function Nl(e) {
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
function Pl(e, t) {
  let n = Ml(),
    r = v.accountid;
  return B({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == $.k_ECuratorFollow || t == $.k_ECuratorUnfollow,
        r = t == $.k_ECuratorFollow || t == $.k_ECuratorIgnore,
        i = `${T.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, d()),
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
var Fl = `QOSk1wMadGg-`,
  Il = `DH1jwyMHeXo-`,
  Ll = `J5g1CfUd95U-`,
  Rl = `_3IPvWkyhZzM-`,
  zl = `jB1S5EvgUjI-`,
  Bl = `iWO-8zu8RAA-`,
  Vl = `MTgAGoNV5vg-`,
  Hl = `LEvP9jHHfL8-`,
  Ul = `K9ZawxnkJcI-`,
  Wl = `OlPIY4AN-5s-`,
  Gl = `_7UT3Pb65ni0-`,
  Kl = `sT74IdnPxY8-`,
  ql = `ZTz7p5tpqNU-`,
  Jl = `ct7kvDppls0-`,
  Yl = `SG9Xn5tF5a0-`,
  Xl = `clYVRh6K2Ig-`,
  Zl = `k6MwDwdCJTU-`,
  Ql = `mnFUxHcas-0-`,
  $l = `_6lWvo8crYSU-`,
  eu = `r3PgsXSGPho-`,
  tu = `EWCiFLRR-T8-`,
  nu = `oXDp-N2XFF4-`,
  ru = `GEroszngeLM-`,
  iu = (e) => {
    let t = l.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, K.jsx)(Re, {
      strTitle: P(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, K.jsx)(`div`, {
        children: Ne(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, K.jsx)(`a`, {
            href: t,
            target: l.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: P(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  au = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = vc();
    if (!jl()) return null;
    let l = null;
    switch (o) {
      case `app`:
        l = P(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        l = P(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        l = P(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        l = P(`#steam_group_follow_ttip`);
    }
    return l
      ? (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(Ie, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, K.jsxs)(le, {
                className: y($t, eu, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  C.logged_in ? a() : c();
                },
                children: [
                  r && (0, K.jsx)(tn, { size: 15 }),
                  !r && (i || n) && (0, K.jsx)(Le, {}),
                  (0, K.jsx)(`div`, {
                    className: y(tu, `FollowBtnText`),
                    children:
                      !r &&
                      P(
                        i
                          ? `#Button_Followed`
                          : n
                            ? `#Button_Ignored`
                            : `#Button_Follow`,
                      ),
                  }),
                ],
              }),
            }),
            s,
          ],
        })
      : (console.error(`CommonFollowButton unexpected type`, o), null);
  };
function ou(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = H.useState(!1),
    { data: s } = Fc(t ? void 0 : r),
    c = kl(r),
    l = Al(r),
    { mutateAsync: u } = Pl(r, c ? $.k_ECuratorUnfollow : $.k_ECuratorFollow),
    [d, f, p] = te(),
    m = H.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(au, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          C.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, K.jsx)(Bt, {
        active: d,
        children: (0, K.jsx)(iu, { closeModal: p }),
      }),
    ],
  });
}
function su(e) {
  let { appid: t, className: n } = e,
    [r, i] = H.useState(!1),
    a = fl(t),
    o = xl(t),
    s = ft(),
    c = pt.GetSNRLinkParam(s),
    { mutateAsync: l } = hl(t, !a, c),
    u = H.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, K.jsx)(au, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function cu(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = Fc(t),
    { data: o } = Yc(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= en(void 0, `medium`, `web`)),
    (0, K.jsxs)(`div`, {
      className: y(Qa, n),
      style: r,
      children: [
        (0, K.jsx)(`a`, {
          href: Qc(o, `developer`),
          children: (0, K.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, K.jsx)(ou, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var lu = new URL(
    `../../../images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  uu = 5500,
  du = 2e3,
  fu = 10;
function pu(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, K.jsx)(
          `img`,
          {
            className: Oa,
            loading: `lazy`,
            src: tr(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: du,
      }
    : null;
}
function mu(e, t) {
  return {
    stringifyID: `vid_${Ge(e)}`,
    rctImage: (0, K.jsx)(Ji, { id: e, active: !0 }),
    nDurationMs: uu,
  };
}
function hu(e) {
  let t = Pt(e);
  return Nt(e) ? void 0 : t;
}
function gu(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = nr(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${Ge(e)}`,
      rctImage: (0, K.jsx)(
        `img`,
        {
          className: Oa,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: du,
    };
  });
}
function _u(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(mu(e, i)),
    r && r.length > 0 && a.push(...gu(e, t.name, r, fu)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = pu(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function vu(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(mu(t, a)), r && r.length > 0 && o.push(...gu(e, n.name, r, fu)));
  let s = fu - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...gu(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function yu(e) {
  return (0, K.jsx)(`img`, {
    className: Oa,
    loading: `lazy`,
    src: s(lu),
    alt: `default`,
  });
}
function bu(e) {
  let { id: t } = e,
    { data: n } = st(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, K.jsx)(`div`, {
      className: Da,
      children: (0, K.jsx)(yu, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, K.jsx)(wu, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, K.jsx)(Su, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, K.jsx)(xu, { storeItemDefaultData: n });
}
function xu(e) {
  let { storeItemDefaultData: t } = e,
    n = Ft(t),
    r = hu(n),
    { data: i } = rt(n),
    a = rr(n),
    o = (0, H.useMemo)(() => _u(n, t, i, a, r), [n, a, r, i, t]);
  return (0, K.jsx)(Tu, { rgTrailerAndImages: o });
}
function Su(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = Ft(t);
  return hu(r)
    ? (0, K.jsx)(xu, { storeItemDefaultData: t })
    : (0, K.jsx)(Cu, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function Cu(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = Lt(t),
    a = rr(n),
    o = rr(i),
    s = hu(i),
    c = (0, H.useMemo)(() => vu(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, K.jsx)(Tu, { rgTrailerAndImages: c });
}
function wu(e) {
  let { includeAppIDs: t } = e,
    n = $e(),
    r = pe({ queries: t.map((e) => Xe(n, { appid: e })) }),
    i = pe({ queries: t.map((e) => it(n, { appid: e })) }),
    a = (0, H.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return pu(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, K.jsx)(Tu, { rgTrailerAndImages: a });
}
function Tu(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, H.useRef)(0),
    r = ne(),
    [i] = H.useState(new ce()),
    a = (0, H.useCallback)(
      (e = !1) => {
        if ((e && (n.current = 0), t?.length > 0)) {
          let e = t[n.current].nDurationMs;
          i.Schedule(e, () => {
            let e = n.current;
            ((n.current = (n.current + 1) % t.length),
              e != n.current && (a(), r()));
          });
        }
      },
      [t, i, r],
    );
  return (
    (0, H.useEffect)(() => (t.length > 0 && a(), () => i.Cancel()), [t, a, i]),
    (0, K.jsx)(`div`, {
      className: Da,
      children: t?.map((e, t) =>
        (0, K.jsx)(
          `div`,
          {
            className: y({ [Oa]: !0, [ka]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var Eu = `ghYXSqVPJ-U-`,
  Du = `lx1fe7xI0bg-`,
  Ou = `ARp2qEoElPE-`,
  ku = `DwDon-U2yLI-`,
  Au = 150,
  ju = H.createContext(void 0);
function Mu() {
  return H.useContext(ju);
}
function Nu(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = ee(),
    c = gr(),
    l = !s && !c,
    [u, d] = H.useState(!1),
    [f, p] = H.useState(void 0),
    m = (e) => {
      (d(!0), p(e.currentTarget));
    },
    h = () => d(!1),
    g = H.useCallback(() => d(!1), []);
  return (0, K.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: y(Eu, o),
    "data-hovered": u || void 0,
    onMouseEnter: m,
    onMouseLeave: h,
    onTouchStart: () => d(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (d(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      l &&
        f &&
        (0, K.jsx)(ju.Provider, {
          value: g,
          children: (0, K.jsx)(Pu, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, K.jsx)(ue, { children: a }),
    ],
  });
}
function Pu(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = Au,
      nWidthMultiplier: r = 1.15,
      target: i,
      visible: a,
      children: o,
    } = e,
    [s, c] = H.useState(a);
  if (
    (H.useEffect(() => {
      if (a) {
        if (n) {
          let e = window.setTimeout(() => c(!0), n);
          return () => window.clearTimeout(e);
        }
        c(!0);
      } else {
        if (Be()) return;
        c(!1);
      }
    }, [a]),
    H.useEffect(() => {
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
        minHeight: Iu() == `hiding` ? void 0 : 300,
        height: Iu() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, K.jsx)(Fu, {
    hoverProps: u,
    children: (0, K.jsx)(ue, { children: o }),
  });
}
function Fu(e) {
  let { hoverProps: t, children: n } = e,
    r = H.useCallback((e) => e?.focus(), []);
  return (0, K.jsx)(Ue, {
    ...t,
    children: (0, K.jsx)(zt, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: y(Ou, ja), enterDone: y(ku, Ma) },
      children: (e) =>
        (0, K.jsx)(`div`, {
          ref: j(e, r),
          className: Du,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function Iu() {
  return window.sessionStorage?.getItem(Lu) || `default`;
}
var Lu = `DEBUG_UseNewGameHover`;
function Ru(e) {
  window.sessionStorage.setItem(Lu, e);
}
window.SetHoverPresentation = Ru;
function zu(e) {
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
    u = a ? n : n ? Bu(n, l.STORE_BASE_URL) : void 0,
    d = ct(u);
  return d
    ? (0, K.jsx)(de, {
        href: d,
        target: l.IN_CLIENT || o ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: s,
        fnCanTakeFocus: c,
        children: i,
      })
    : (0, K.jsx)(`span`, { style: r, className: t, children: i });
}
function Bu(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
var Vu = -700,
  Hu = -600,
  Uu = -599,
  Wu = -598,
  Gu = -597,
  Ku = -596,
  qu = -595,
  Ju = -594,
  Yu = -593,
  Xu = -592,
  Zu = -591,
  Qu = -590,
  $u = -589,
  ed = -588,
  td = -587,
  nd = -586,
  rd = -585,
  id = -584,
  ad = -583,
  od = -582,
  sd = -581,
  cd = -580,
  ld = -579,
  ud = -578,
  dd = -577,
  fd = -576,
  pd = -575,
  md = -574,
  hd = -573,
  gd = -572,
  _d = -571,
  vd = -500,
  yd = -499,
  bd = -498,
  xd = -497,
  Sd = -496,
  Cd = -300,
  wd = -203,
  Td = -202,
  Ed = -201,
  Dd = -200,
  Od = -199,
  kd = -198,
  Ad = -197,
  jd = -196,
  Md = -195,
  Nd = -194,
  Pd = -193,
  Fd = -192,
  Id = -191,
  Ld = -190,
  Rd = -189,
  zd = -188,
  Bd = -187,
  Vd = -186,
  Hd = -185,
  Ud = -184,
  Wd = -183,
  Gd = -182,
  Kd = -102,
  qd = -101,
  Jd = -100;
function Yd(e) {
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
    case Kd:
      return `Mac OS`;
    case qd:
      return `MacOS 10.4`;
    case Jd:
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
    case wd:
      return `Linux`;
    case Td:
      return `Linux 2.2`;
    case Ed:
      return `Linux 2.4`;
    case Dd:
      return `Linux 2.6`;
    case Od:
      return `Linux 3.2`;
    case kd:
      return `Linux 3.5`;
    case Ad:
      return `Linux 3.6`;
    case jd:
      return `Linux 3.10`;
    case Md:
      return `Linux 3.16`;
    case Nd:
      return `Linux 3.18`;
    case Pd:
      return `Linux 3.x`;
    case Id:
      return `Linux 4.1`;
    case Ld:
      return `Linux 4.4`;
    case Rd:
      return `Linux 4.9`;
    case zd:
      return `Linux 4.14`;
    case Bd:
      return `Linux 4.19`;
    case Fd:
      return `Linux 4.x`;
    case Vd:
      return `Linux 5.x`;
    case Hd:
      return `Linux 5.4`;
    case Ud:
      return `Linux 6.x`;
    case Wd:
      return `Linux 7.x`;
    case Gd:
      return `Linux 5.10`;
    case Cd:
      return `PS3`;
    case Vu:
      return `Web Client`;
    case vd:
      return `Android`;
    case yd:
      return `Android 6.x`;
    case bd:
      return `Android 7.x`;
    case xd:
      return `Android 8.x`;
    case Sd:
      return `Android 9.x`;
    case Hu:
      return `iOS`;
    case Uu:
      return `iOS 1`;
    case Wu:
      return `iOS 2`;
    case Gu:
      return `iOS 3`;
    case Ku:
      return `iOS 4`;
    case qu:
      return `iOS 5`;
    case Ju:
      return `iOS 6`;
    case Yu:
      return `iOS 6.1`;
    case Xu:
      return `iOS 7`;
    case Zu:
      return `iOS 7.1`;
    case Qu:
      return `iOS 8`;
    case $u:
      return `iOS 8.1`;
    case ed:
      return `iOS 8.2`;
    case td:
      return `iOS 8.3`;
    case nd:
      return `iOS 8.4`;
    case rd:
      return `iOS 9`;
    case id:
      return `iOS 9.1`;
    case ad:
      return `iOS 9.2`;
    case od:
      return `iOS 9_.3`;
    case sd:
      return `iOS 10`;
    case cd:
      return `iOS 10.1`;
    case ld:
      return `iOS 10.2`;
    case ud:
      return `iOS 10.3`;
    case dd:
      return `iOS 11`;
    case fd:
      return `iOS 11.1`;
    case pd:
      return `iOS 11.2`;
    case md:
      return `iOS 11.3`;
    case hd:
      return `iOS 11.4`;
    case gd:
      return `iOS 12`;
    case _d:
      return `iOS 12.1`;
    default:
    case -1:
      return `Unknown`;
  }
}
var Xd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Request`;
    }
  },
  Zd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.protocol_version || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            protocol_version: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            os: { n: 2, br: a.readString, bw: f.writeString },
            machine_name: { n: 3, br: a.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Response`;
    }
  },
  Qd = class e extends G.Message {
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
  $d = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sessions || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sessions: { n: 1, c: ef, r: !0, q: !0 },
            refetch_interval_sec: { n: 2, br: a.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response`;
    }
  },
  ef = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            protocol_version: { n: 2, br: a.readUint32, bw: f.writeUint32 },
            os_name: { n: 3, br: a.readString, bw: f.writeString },
            machine_name: { n: 4, br: a.readString, bw: f.writeString },
            os_type: { n: 5, br: a.readInt32, bw: f.writeInt32 },
            device_type: { n: 6, br: a.readInt32, bw: f.writeInt32 },
            realm: { n: 7, br: a.readInt32, bw: f.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response_Session`;
    }
  },
  tf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Request`;
    }
  },
  nf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_version || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [7, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_version: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            os: { n: 2, br: a.readString, bw: f.writeString },
            machine_name: { n: 3, br: a.readString, bw: f.writeString },
            ip_public: { n: 4, br: a.readString, bw: f.writeString },
            ip_private: { n: 5, br: a.readString, bw: f.writeString },
            bytes_available: {
              n: 6,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            running_games: { n: 7, c: rf, r: !0, q: !0 },
            protocol_version: { n: 8, br: a.readUint32, bw: f.writeUint32 },
            clientcomm_version: { n: 9, br: a.readUint32, bw: f.writeUint32 },
            local_users: {
              n: 10,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData`;
    }
  },
  rf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            extra_info: { n: 2, br: a.readString, bw: f.writeString },
            time_running_sec: { n: 3, br: a.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData_RunningGames`;
    }
  },
  af = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_info || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { client_info: { n: 1, c: nf } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Response`;
    }
  },
  of = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.fields || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            fields: { n: 1, br: a.readString, bw: f.writeString },
            filters: { n: 2, br: a.readString, bw: f.writeString },
            client_instanceid: {
              n: 3,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            include_client_info: { n: 4, br: a.readBool, bw: f.writeBool },
            language: { n: 5, br: a.readString, bw: f.writeString },
            filter_appids: {
              n: 6,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: f.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Request`;
    }
  },
  sf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bytes_available || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            apps: { n: 2, c: cf, r: !0, q: !0 },
            client_info: { n: 3, c: nf },
            refetch_interval_sec_full: {
              n: 4,
              br: a.readUint32,
              bw: f.writeUint32,
            },
            refetch_interval_sec_changing: {
              n: 5,
              br: a.readUint32,
              bw: f.writeUint32,
            },
            refetch_interval_sec_updating: {
              n: 6,
              br: a.readUint32,
              bw: f.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response`;
    }
  },
  cf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, [17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            app: { n: 2, br: a.readString, bw: f.writeString },
            category: { n: 3, br: a.readString, bw: f.writeString },
            app_type: { n: 4, br: a.readString, bw: f.writeString },
            num_downloading: { n: 8, br: a.readUint32, bw: f.writeUint32 },
            bytes_download_rate: { n: 11, br: a.readUint32, bw: f.writeUint32 },
            bytes_downloaded: {
              n: 12,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            bytes_to_download: {
              n: 13,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            dlcs: { n: 17, c: lf, r: !0, q: !0 },
            favorite: { n: 18, br: a.readBool, bw: f.writeBool },
            auto_update: { n: 19, br: a.readBool, bw: f.writeBool },
            installed: { n: 20, br: a.readBool, bw: f.writeBool },
            download_paused: { n: 21, br: a.readBool, bw: f.writeBool },
            changing: { n: 22, br: a.readBool, bw: f.writeBool },
            available_on_platform: { n: 23, br: a.readBool, bw: f.writeBool },
            bytes_staged: {
              n: 24,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            bytes_to_stage: {
              n: 25,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            bytes_required: {
              n: 26,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            source_buildid: { n: 27, br: a.readUint32, bw: f.writeUint32 },
            target_buildid: { n: 28, br: a.readUint32, bw: f.writeUint32 },
            estimated_seconds_remaining: {
              n: 29,
              br: a.readUint32,
              bw: f.writeUint32,
            },
            queue_position: { n: 30, d: -1, br: a.readInt32, bw: f.writeInt32 },
            uninstalling: { n: 31, br: a.readBool, bw: f.writeBool },
            rt_time_scheduled: { n: 32, br: a.readUint32, bw: f.writeUint32 },
            running: { n: 33, br: a.readBool, bw: f.writeBool },
            update_percentage: { n: 34, br: a.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData`;
    }
  },
  lf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: f.writeUint32 },
            app: { n: 2, br: a.readString, bw: f.writeString },
            installed: { n: 3, br: a.readUint32, bw: f.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData_DLCData`;
    }
  },
  uf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: a.readUint32, bw: f.writeUint32 },
            client_instanceid: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Request`;
    }
  },
  df = class e extends G.Message {
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
  ff = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: a.readUint32, bw: f.writeUint32 },
            client_instanceid: {
              n: 2,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Request`;
    }
  },
  pf = class e extends G.Message {
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
  mf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: a.readUint32, bw: f.writeUint32 },
            action: { n: 2, q: !0, br: a.readUint32, bw: f.writeUint32 },
            client_instanceid: {
              n: 3,
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Request`;
    }
  },
  hf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            appid: { n: 2, q: !0, br: a.readUint32, bw: f.writeUint32 },
            query_params: { n: 3, br: a.readString, bw: f.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Request`;
    }
  },
  gf = class e extends G.Message {
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
  _f = class e extends G.Message {
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
  vf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || c(e.M()),
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
              br: a.readUint64String,
              bw: f.writeUint64String,
            },
            enable: { n: 2, br: a.readBool, bw: f.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      i(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Request`;
    }
  },
  yf = class e extends G.Message {
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
  bf;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientLogonInfo#1`, g(Xd, t, n), Zd, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientLogonInfo = t;
  function n(e, t, n) {
    return e.SendMsg(`ClientComm.GetAllClientLogonInfo#1`, g(Qd, t, n), $d, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetAllClientLogonInfo = n;
  function r(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientInfo#1`, g(tf, t, n), af, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientInfo = r;
  function i(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientAppList#1`, g(of, t, n), sf, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetClientAppList = i;
  function a(e, t, n) {
    return e.SendMsg(`ClientComm.InstallClientApp#1`, g(uf, t, n), df, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.InstallClientApp = a;
  function o(e, t, n) {
    return e.SendMsg(`ClientComm.UninstallClientApp#1`, g(ff, t, n), pf, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.UninstallClientApp = o;
  function s(e, t, n) {
    return e.SendMsg(`ClientComm.LaunchClientApp#1`, g(hf, t, n), gf, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.LaunchClientApp = s;
  function c(e, t, n) {
    return e.SendMsg(`ClientComm.SetClientAppUpdateState#1`, g(mf, t, n), _f, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.SetClientAppUpdateState = c;
  function l(e, t, n) {
    return e.SendMsg(`ClientComm.EnableOrDisableDownloads#1`, g(vf, t, n), yf, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.EnableOrDisableDownloads = l;
})((bf ||= {}));
var xf = `RemoteDownload_OnlineClient`,
  Sf = `RemoteDownload_ClientAppList`,
  Cf = `RemoteDownload_ClientAppData`,
  wf = class extends Error {
    constructor(e, t) {
      (super(e), (this.result = t));
    }
    result;
  };
function Tf() {
  let e = L(),
    t = an();
  return z({
    queryKey: [xf, t],
    queryFn: async () => {
      let t = A.Init(Qd),
        n = await bf.GetAllClientLogonInfo(e, t);
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
var Ef = class {
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
async function Df(e, t, n) {
  let r = t.client_instanceid,
    i = A.Init(of);
  (i.Body().set_fields(`games`),
    i.Body().set_filters(n),
    i.Body().set_client_instanceid(r),
    i.Body().set_include_client_info(!0));
  let a = await bf.GetClientAppList(e, i);
  if (a.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetClientAppList`,
        a.GetEResult(),
        a.Hdr().transport_error(),
      ),
      new wf(`Error from GetClientAppList: ${a.GetEResult()}`, a.GetEResult())
    );
  let o = new Map();
  for (let e of a.Body().apps()) {
    let t = new Ef(e);
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
async function Of(e, t, n, r) {
  if (!r) return;
  let i = await Df(e, t, n);
  for (let [e, t] of i.mapApps) r.mapApps.set(e, t);
  return { ...i, mapApps: r.mapApps };
}
function kf(e, t, n) {
  return [Sf, e, t, n];
}
function Af(e, t = !0) {
  let n = Tf(),
    r = L(),
    i = an(),
    a = (e) => {
      t && (e.result == 21 || e.result == 16) && n.refetch();
    },
    o = pe({
      queries: (n.data?.sessions || []).map((e) => ({
        queryKey: kf(i, e.client_instanceid, `none`),
        queryFn: async () => Df(r, e, `none`),
        staletime: 36e5,
        refetchInterval: (e) =>
          (e.state.data?.refetchIntervals.full || 3600) * 1e3,
        enabled: n.isSuccess && !n.isFetching,
        onError: a,
        retry: t,
      })),
    }),
    s = (0, H.useCallback)(
      (t) => {
        if (!e) return t;
        let n = new Map(Array.from(t?.mapApps.entries() ?? []).filter(e));
        return { ...t, mapApps: n };
      },
      [e],
    ),
    c = R();
  return {
    rgQueries: pe({
      queries: (n.data?.sessions || []).map((e, n) => ({
        queryKey: kf(i, e.client_instanceid, `changing`),
        queryFn: async () => Of(r, e, `changing`, o[n].data),
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
        let t = kf(i, e.client_instanceid, `changing`);
        c.removeQueries({ queryKey: t });
      }
      for (let e of o) e.refetch();
    },
  };
}
function jf(e, t) {
  return [Cf, e, t];
}
function Mf(e, t = !0) {
  let n = an(),
    { rgQueries: r } = Af(void 0, t);
  return z({
    queryKey: jf(n, e),
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
function Nf(e, t, n) {
  let r = L(),
    i = Mf(e),
    a = an(),
    o = R();
  return B({
    mutationFn: async () => {
      let n = A.Init(uf);
      (n.Body().set_appid(e), n.Body().set_client_instanceid(t));
      let s = await bf.InstallClientApp(r, n);
      if (s.GetEResult() != 1)
        throw (
          console.error(`Received error from InstallClientApp`, s.GetEResult()),
          Error(`Error from InstallClientApp: ${s.GetEResult()}`)
        );
      let c = i?.data;
      (c && c.get(t) && c.get(t).app.SetDownloading(),
        o.setQueryData(jf(a, e), c),
        i.refetch());
    },
    onSuccess: n,
  });
}
var Pf = `KDJh8Ln6DTA-`,
  Ff = `cwU-YKIjBO4-`,
  If = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function Lf(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, H.useCallback)(
      (e) => {
        n?.length &&
          _e(
            (0, K.jsx)(Rf, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            If,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, K.jsx)(`button`, {
        onClick: r,
        className: Pf,
        children: (0, K.jsx)(Bf, {}),
      })
    : null;
}
function Rf({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, K.jsx)(`ul`, {
    className: Ff,
    children: e.map((e) =>
      (0, K.jsx)(
        De,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: P(
            `#GamesList_Client_Indicator`,
            zf(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function zf(e) {
  switch (e) {
    case 1:
      return P(`#Library_DeviceType_PC`);
    case 544:
      return P(`#Library_DeviceType_SteamDeck`);
    case 546:
      return P(`#Library_DeviceType_SteamMachine`);
    case x:
      return P(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function Bf(e) {
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
var Vf = `O2hPihu9CRE-`,
  Hf = `QhSrcq93V7k-`,
  Uf = `_7MjE60RYT0Q-`,
  Wf = `UlZXEOyFPCE-`,
  Gf = `_8wO4Yx-lIIo-`,
  Kf = `FA82eVIC918-`,
  qf = `_0sgpZmAY-zs-`,
  Jf = `RLntJ4QtQLU-`;
function Yf(e) {
  let { appid: t } = e,
    n = Lt(t),
    { data: r } = F(n),
    [i, a, o] = te(!1),
    { mutateAsync: s } = Ca({ appid: t }),
    [c, l] = (0, H.useState)(!1),
    u = vn(t);
  return !r || u
    ? null
    : (0, K.jsxs)(K.Fragment, {
        children: [
          (0, K.jsxs)(lr, {
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
              c && (0, K.jsx)(Kt, { size: `small` }),
              P(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, K.jsx)(ue, {
            children: (0, K.jsx)(Bt, {
              active: i,
              children: (0, K.jsx)(Re, {
                strTitle: P(`#Sale_AddedToLibrary`),
                strDescription: Ne(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, K.jsx)(`span`, { className: Uf, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, K.jsx)(Xf, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function Xf(e) {
  let { id: t } = e,
    n = Tf(),
    [r, i] = (0, H.useState)(0),
    [a, o] = (0, H.useState)(!1),
    { data: s } = at(t);
  if (!t || !(`appid` in t) || T.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = Yd(e.os_type);
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
      className: Vf,
      children: a
        ? (0, K.jsx)(Qf, { session: e })
        : (0, K.jsxs)(K.Fragment, {
            children: [
              (0, K.jsx)(Zf, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, K.jsx)(`div`, {
                className: Kf,
                children: (0, K.jsx)($f, {
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
function Zf(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(`div`, { children: P(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, K.jsxs)(`div`, {
        className: qf,
        children: [
          (0, K.jsx)(`span`, { className: Jf, children: n.machine_name }),
          (0, K.jsx)(Lf, {
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
function Qf(e) {
  let { session: t } = e;
  return (0, K.jsxs)(`div`, {
    className: Wf,
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
function $f(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = Nf(t, n.client_instanceid);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsxs)(lr, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, K.jsx)(ye, {}), P(`#Button_StartDownload`)],
      }),
      (0, K.jsx)(`div`, {
        className: Gf,
        children: (0, K.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: Hf,
          children: P(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function ep(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, K.jsxs)(`div`, {
        className: y(Lr, i ? Wr : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, K.jsx)(`div`, {
              className: y(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: M.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, K.jsx)(`div`, {
                className: y(Gr, `TagBox`),
                children: t.map((e) =>
                  (0, K.jsx)(np, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, K.jsx)(`div`, { children: M.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function tp(e) {
  let { tagid: t, className: n } = e,
    r = Kn(t, l.LANGUAGE);
  if (!r) return null;
  let i = O(S(l.LANGUAGE)),
    a = `${l.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, K.jsx)(zu, {
    url: a,
    className: y(Kr, `WidgetTag`, n),
    children: r,
  });
}
function np(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = O(S(l.LANGUAGE)),
    a = Kn(t, l.LANGUAGE),
    o = `${l.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, K.jsx)(`div`, { className: y(Kr, `WidgetTag`, n), children: a })
      : (0, K.jsx)(zu, {
          url: o,
          className: y(Kr, `WidgetTag`, n),
          children: a,
        })
    : null;
}
export {
  Vo as $,
  br as $t,
  sl as A,
  Qn as An,
  di as At,
  Wc as B,
  Ir as Bt,
  Il as C,
  hr as Cn,
  Di as Ct,
  Ql as D,
  tr as Dn,
  yr as Dt,
  Rl as E,
  ar as En,
  Rr as Et,
  Gc as F,
  xn as Fn,
  Mi as Ft,
  Vc as G,
  ki as Gt,
  Pc as H,
  _i as Ht,
  Kc as I,
  hn as In,
  pi as It,
  pc as J,
  xr as Jt,
  vc as K,
  Ri as Kt,
  qc as L,
  on as Ln,
  mi as Lt,
  ol as M,
  er as Mn,
  Ci as Mt,
  Yc as N,
  Hn as Nn,
  zi as Nt,
  Yl as O,
  ir as On,
  Fi as Ot,
  Dc as P,
  Kn as Pn,
  wi as Pt,
  Uo as Q,
  Ti as Qt,
  Hc as R,
  an as Rn,
  Pi as Rt,
  Xl as S,
  Qr as Sn,
  Ei as St,
  zl as T,
  dr as Tn,
  fi as Tt,
  Fc as U,
  yi as Ut,
  Ic as V,
  Si as Vt,
  Bc as W,
  Fr as Wt,
  Go as X,
  bi as Xt,
  Ko as Y,
  Bi as Yt,
  Ho as Z,
  li as Zt,
  Vl as _,
  Vr as _n,
  qi as _t,
  su as a,
  vr as an,
  mo as at,
  $l as b,
  xi as bn,
  gi as bt,
  Gl as c,
  Yr as cn,
  so as ct,
  Ll as d,
  Cr as dn,
  $a as dt,
  Ii as en,
  Do as et,
  ql as f,
  Er as fn,
  ia as ft,
  Hl as g,
  Ur as gn,
  Ji as gt,
  nu as h,
  Sr as hn,
  $i as ht,
  Nu as i,
  qr as in,
  ho as it,
  il as j,
  Xn as jn,
  Ai as jt,
  cl as k,
  Yn as kn,
  kr as kt,
  Wl as l,
  Pr as ln,
  io as lt,
  Kl as m,
  Br as mn,
  Qi as mt,
  ep as n,
  ii as nn,
  So as nt,
  ou as o,
  Mr as on,
  po as ot,
  Jl as p,
  ji as pn,
  ea as pt,
  gc as q,
  vi as qt,
  zu as r,
  Li as rn,
  xo as rt,
  iu as s,
  Jr as sn,
  co as st,
  tp as t,
  Ni as tn,
  To as tt,
  Ul as u,
  _r as un,
  no as ut,
  Fl as v,
  wr as vn,
  Xr as vt,
  ru as w,
  ur as wn,
  ui as wt,
  Zl as x,
  zr as xn,
  Hr as xt,
  Bl as y,
  Or as yn,
  hi as yt,
  Uc as z,
  Oi as zt,
};
