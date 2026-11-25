/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  B as t,
  Ct as n,
  Dt as r,
  E as i,
  F as a,
  G as o,
  I as s,
  K as c,
  Ot as l,
  Pt as u,
  R as d,
  S as f,
  St as p,
  U as m,
  W as h,
  X as g,
  _t as _,
  bt as v,
  d as y,
  g as b,
  gt as x,
  h as S,
  k as C,
  n as w,
  nt as T,
  o as ee,
  r as E,
  tt as te,
  vt as D,
  wt as ne,
  xt as O,
  y as k,
  yt as A,
  z as re,
} from "./chunk~de7f2df91c.js";
import {
  Et as ie,
  M as ae,
  Mt as oe,
  P as se,
  Pt as ce,
  a as le,
  j as ue,
  o as de,
  ot as fe,
  pt as pe,
  s as me,
  t as he,
  wt as ge,
  zt as j,
} from "./chunk~bd90a5fce7.js";
import { a as _e, i as ve, r as ye, t as be } from "./chunk~68b7e78d68.js";
import { i as xe, o as Se, u as Ce } from "./chunk~b4171a8747.js";
import {
  A as we,
  Bn as Te,
  En as Ee,
  Er as De,
  Fr as Oe,
  Gi as ke,
  Ha as M,
  Ht as Ae,
  Jt as je,
  Pi as Me,
  Rr as Ne,
  Ua as Pe,
  Wn as Fe,
  Wt as Ie,
  Xa as N,
  Xi as Le,
  Yi as Re,
  Yn as ze,
  Zi as Be,
  _a as Ve,
  _n as He,
  aa as P,
  cn as Ue,
  da as F,
  eo as We,
  g as Ge,
  gn as Ke,
  gr as qe,
  ia as I,
  l as Je,
  mn as Ye,
  oa as Xe,
  p as Ze,
  ro as Qe,
  tn as $e,
  tr as et,
  xn as tt,
  z as nt,
} from "./chunk~1fa4b8f2ff.js";
import {
  A as rt,
  C as it,
  E as at,
  S as ot,
  T as st,
  _ as L,
  a as ct,
  d as lt,
  g as ut,
  h as dt,
  i as ft,
  l as pt,
  m as mt,
  n as ht,
  p as gt,
  s as _t,
  w as vt,
  x as yt,
  y as bt,
} from "./chunk~0a99e05c44.js";
import {
  a as xt,
  c as St,
  i as Ct,
  o as wt,
  r as Tt,
  s as Et,
} from "./chunk~9a06851bec.js";
import {
  C as Dt,
  E as Ot,
  F as kt,
  I as At,
  L as jt,
  R as Mt,
  j as Nt,
  z as R,
} from "./chunk~44f252525d.js";
import { a as Pt, i as Ft, n as z } from "./chunk~f8b6a4beb3.js";
import { i as B } from "./chunk~8fb30ea08b.js";
import { t as V } from "./chunk~ede3e357a2.js";
import { t as It } from "./chunk~9aa05d2c7d.js";
import { t as Lt } from "./chunk~6257ebd2d4.js";
import { t as Rt } from "./chunk~4406a7b793.js";
import { i as zt, l as Bt, r as Vt } from "./chunk~428594b857.js";
import { i as Ht, s as Ut } from "./chunk~70c16cc80c.js";
import {
  F as Wt,
  G as Gt,
  H as Kt,
  J as qt,
  K as Jt,
  W as Yt,
  r as Xt,
  z as Zt,
} from "./chunk~a825a84845.js";
import { a as Qt, i as $t, n as en, t as tn } from "./chunk~7b4b9eb713.js";
import { r as nn, t as rn } from "./chunk~b390ee0f78.js";
import { S as H, T as an, x as on } from "./chunk~96e60d7578.js";
import { t as U } from "./chunk~25a6634263.js";
import { t as sn } from "./chunk~90b9831ad2.js";
import { t as W } from "./chunk~e29b7ee76a.js";
import { r as cn } from "./chunk~8681f5c764.js";
import { n as ln, t as un } from "./chunk~2201b8cb3d.js";
import { t as dn } from "./chunk~f4e4ed5c17.js";
import { t as fn } from "./chunk~92931c6310.js";
import { t as pn } from "./chunk~c55709d290.js";
import { t as mn } from "./chunk~eefd71512b.js";
import { a as hn, i as gn } from "./chunk~e867464c75.js";
import { r as _n } from "./chunk~38a44beba7.js";
import {
  c as vn,
  i as yn,
  l as bn,
  s as xn,
  t as Sn,
} from "./chunk~8ceeb46076.js";
import "./chunk~a6b9ae1345.js";
import "./chunk~ca0c999570.js";
import { n as Cn } from "./chunk~521597d5f9.js";
import { T as wn, p as Tn, t as En, w as Dn } from "./chunk~2f8c67b4de.js";
import { t as On } from "./chunk~0278ae6236.js";
import { t as kn } from "./chunk~ada233e34d.js";
function An(e) {
  return !!e;
}
var G = u(T(), 1),
  jn = (0, G.createContext)(void 0);
jn.Provider;
function Mn() {
  let e = (0, G.useContext)(jn);
  if (!e)
    throw Error(`called useActiveAccount outside of ActiveAccountProvider`);
  return e.useActiveAccount();
}
function Nn() {
  let e = z(),
    t = k.accountid,
    n = k.country_code;
  return V(Pn(e, t, n));
}
function Pn(e, t, n) {
  return {
    queryKey: Ln(t),
    queryFn: async () => {
      if (!t) return In();
      let r = o.Init(Vt);
      r.Body().set_country_code(n);
      let i = await Bt.GetStorePreferences(e, r);
      if (!i.BSuccess())
        throw `Error loading store preferences: ${i.GetErrorMessage()}`;
      return i.Body().toObject();
    },
    staleTime: 36e5,
  };
}
var Fn = [4, 3];
function In() {
  return {
    preferences: { primary_language: re(b.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: Fn.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function Ln(e) {
  return [`StorePreferencesQueryKey`, e ?? 0];
}
var Rn = `unUserdataVersion`;
function zn() {
  return Number.parseInt(window.localStorage.getItem(Rn) || `0`);
}
function Bn(e, t, n) {
  let r = zn(),
    i = `${e}dynamicstore/userdata/?id=${t}&cc=${n}&origin=${self.origin}`;
  return (r && (i += `&v=${r}`), i);
}
function Vn() {
  window.localStorage.setItem(
    Rn,
    (Number.parseInt(window.localStorage.getItem(Rn) || `0`) + 1).toString(),
  );
}
var K = u(ne(), 1),
  q = h();
async function Hn(t, n) {
  let r = Bn(C.STORE_BASE_URL, n, e.country_code);
  return (await (await fetch(r)).json()).rgOwnedApps || [];
}
async function Un(e, t, n) {
  return (await Hn(e, t)).includes(n);
}
function Wn() {
  let e = z(),
    t = k.accountid;
  return V(Gn(e, t));
}
function Gn(e, t) {
  return {
    queryKey: Yn(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Hn(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Kn(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await Un(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function qn(e) {
  let t = z(),
    n = k.accountid,
    { data: r } = V(Kn(t, n, e));
  return r === void 0 ? void 0 : r;
}
function Jn(e) {
  let t = B(),
    n = k.accountid;
  return G.useCallback(
    (r) => {
      t.setQueryData(Yn(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function Yn(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function Xn(e) {
  let { data: t } = L(e && `appid` in e ? void 0 : e),
    { data: n } = Wn(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
var Zn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            listid: { n: 2, br: A.readUint64String, bw: n.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserInterface_CuratorData`;
    }
  },
  Qn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.domain || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            domain: { n: 1, br: A.readString, bw: n.writeString },
            controller: { n: 2, br: A.readString, bw: n.writeString },
            method: { n: 3, br: A.readString, bw: n.writeString },
            submethod: { n: 4, br: A.readString, bw: n.writeString },
            feature: { n: 5, br: A.readString, bw: n.writeString },
            depth: { n: 6, br: A.readUint32, bw: n.writeUint32 },
            countrycode: { n: 7, br: A.readString, bw: n.writeString },
            webkey: { n: 8, br: A.readUint64String, bw: n.writeUint64String },
            is_client: { n: 9, br: A.readBool, bw: n.writeBool },
            curator_data: { n: 10, c: Zn },
            is_likely_bot: { n: 11, br: A.readBool, bw: n.writeBool },
            is_utm: { n: 12, br: A.readBool, bw: n.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserInterface_NavData`;
    }
  },
  $n = {
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
function er() {
  let e = [...k.excluded_content_descriptors];
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
var tr;
function nr() {
  return (tr ??= er());
}
function rr() {
  return !!i(`wants_mature_content`);
}
function ir(e) {
  let t = er();
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
    e.rgIgnoredApps && (t.mapIgnoredApps = ar(e.rgIgnoredApps)),
    e.rgIgnoredPackages && (t.mapIgnoredPackages = ar(e.rgIgnoredPackages)),
    e.rgExcludedTags &&
      ((t.setExcludedTagIDs = new Set(
        e.rgExcludedTags.map((e) => Number(e.tagid)),
      )),
      (t.rgExcludedTagIDsSorted = Array.from(t.setExcludedTagIDs).sort())),
    rr()
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
      let e = $n[n];
      e !== void 0 && t.setHardwareUsed.add(e);
    }
  return t;
}
function ar(e) {
  let t = new Map();
  for (let [n, r] of Object.entries(e)) {
    let e = Number(n);
    e && t.set(e, Number(r));
  }
  return t;
}
var or = `dynamicuserdata`;
function sr(e) {
  return [or, e];
}
function cr(e) {
  return e?.[0] == or;
}
async function lr(e) {
  let t;
  try {
    t = await fetch(Bn(b.STORE_BASE_URL, e, k.country_code), {
      credentials: `include`,
    });
  } catch (e) {
    return (console.warn(`LoadDynamicUserData`, e), er());
  }
  try {
    if (!t.ok) throw Error(`Server returned ${t.status}`);
    return ir(await t.json());
  } catch (e) {
    return (
      console.warn(`LoadDynamicUserData`, e),
      te().ReportError(Error(`LoadDynamicUserData ${e}`), {
        bIncludeMessageInIdentifier: !0,
      }),
      er()
    );
  }
}
var ur = 6e4;
function dr() {
  let e = k.accountid;
  return {
    queryKey: sr(e),
    queryFn: () => lr(e),
    staleTime: (e) => (e.state.data?.bLoaded === !1 ? ur : 1 / 0),
    gcTime: 1 / 0,
    retry: !1,
    enabled: !0,
  };
}
function fr() {
  return V(dr());
}
function pr(e) {
  let t = e.getQueryData(sr(k.accountid));
  return (t && !t.bLoaded && mr(e), t ?? nr());
}
function mr(e) {
  let t = e.getQueryState(sr(k.accountid));
  t?.fetchStatus == `idle` &&
    Date.now() - t.dataUpdatedAt >= ur &&
    e.prefetchQuery(dr());
}
async function hr(e) {
  return e.fetchQuery(dr());
}
function gr(e, t) {
  e.setQueryData(sr(k.accountid), (e) => {
    if (!e) return;
    let n = t(e);
    return n ? { ...e, ...n } : e;
  });
}
function _r(e) {
  let t = Ft(),
    n = Pt();
  return V(br(t.GetAnonymousServiceTransport(), n, e));
}
function vr(e) {
  return `LocalizedTagNames2_${e}`;
}
function yr(e) {
  let t = {};
  return ((e?.tags || []).forEach(({ tagid: e, name: n }) => (t[e] = n)), t);
}
function br(e, t, n) {
  return {
    queryKey: [`LocalizedTagNames`, n],
    queryFn: async () => {
      let r = vr(n),
        i = await t.GetObject(r),
        a = o.Init(zt);
      (a.Body().set_language(n),
        i?.version_hash && a.Body().set_have_version_hash(i.version_hash));
      let s = await Bt.GetTagList(e, a),
        c;
      if (s.GetEResult() == 1)
        ((c = s.Body().toObject()), t && t.StoreObject(r, c));
      else if (s.GetEResult() == 29) c = i || void 0;
      else if (i)
        (console.warn(
          `Couldn't load updated tag localization, will continue with what we have from storage.`,
        ),
          (c = i));
      else throw s.GetErrorMessage();
      return yr(c);
    },
    staleTime: 36e5,
  };
}
function xr(e, t) {
  let { data: n } = _r(t);
  return n && n[e];
}
var J = {};
((J.arabic = () =>
  N(() => import(`./chunk~d5ba2f56ae.js`), [], import.meta.url)),
  (J.brazilian = () =>
    N(() => import(`./chunk~39c120e92a.js`), [], import.meta.url)),
  (J.bulgarian = () =>
    N(() => import(`./chunk~78cb7e4228.js`), [], import.meta.url)),
  (J.czech = () =>
    N(() => import(`./chunk~d8eff1052f.js`), [], import.meta.url)),
  (J.danish = () =>
    N(() => import(`./chunk~86d0580964.js`), [], import.meta.url)),
  (J.dutch = () =>
    N(() => import(`./chunk~005813ba41.js`), [], import.meta.url)),
  (J.english = () =>
    N(() => import(`./chunk~452b18c286.js`), [], import.meta.url)),
  (J.finnish = () =>
    N(() => import(`./chunk~acbdc00a18.js`), [], import.meta.url)),
  (J.french = () =>
    N(() => import(`./chunk~17125a4191.js`), [], import.meta.url)),
  (J.german = () =>
    N(() => import(`./chunk~52ab00b62c.js`), [], import.meta.url)),
  (J.greek = () =>
    N(() => import(`./chunk~cded0e728a.js`), [], import.meta.url)),
  (J.hungarian = () =>
    N(() => import(`./chunk~95e95aa3e8.js`), [], import.meta.url)),
  (J.indonesian = () =>
    N(() => import(`./chunk~1bf0266f4e.js`), [], import.meta.url)),
  (J.italian = () =>
    N(() => import(`./chunk~0080cf5344.js`), [], import.meta.url)),
  (J.japanese = () =>
    N(() => import(`./chunk~8b3750bb52.js`), [], import.meta.url)),
  (J.koreana = () =>
    N(() => import(`./chunk~2724a6c2c8.js`), [], import.meta.url)),
  (J.latam = () =>
    N(() => import(`./chunk~ef055f68a2.js`), [], import.meta.url)),
  (J.malay = () =>
    N(() => import(`./chunk~ca69d45f89.js`), [], import.meta.url)),
  (J.norwegian = () =>
    N(() => import(`./chunk~65c6814551.js`), [], import.meta.url)),
  (J.polish = () =>
    N(() => import(`./chunk~76a251fdd1.js`), [], import.meta.url)),
  (J.portuguese = () =>
    N(() => import(`./chunk~2483e21f7e.js`), [], import.meta.url)),
  (J.romanian = () =>
    N(() => import(`./chunk~9a3fef5eb3.js`), [], import.meta.url)),
  (J.russian = () =>
    N(() => import(`./chunk~e56e1e47d1.js`), [], import.meta.url)),
  (J.sc_schinese = () =>
    N(() => import(`./chunk~da6504af84.js`), [], import.meta.url)),
  (J.schinese = () =>
    N(() => import(`./chunk~ff125744c0.js`), [], import.meta.url)),
  (J.spanish = () =>
    N(() => import(`./chunk~e2f1f1b489.js`), [], import.meta.url)),
  (J.swedish = () =>
    N(() => import(`./chunk~190fdb38ac.js`), [], import.meta.url)),
  (J.tchinese = () =>
    N(() => import(`./chunk~643cb0252e.js`), [], import.meta.url)),
  (J.thai = () =>
    N(() => import(`./chunk~80a1517842.js`), [], import.meta.url)),
  (J.turkish = () =>
    N(() => import(`./chunk~7c426f534c.js`), [], import.meta.url)),
  (J.ukrainian = () =>
    N(() => import(`./chunk~170b3740ac.js`), [], import.meta.url)),
  (J.vietnamese = () =>
    N(() => import(`./chunk~57cbf4b218.js`), [], import.meta.url)));
async function Sr(e) {
  if (J[e]) return await J[e]();
}
var Cr = Ot(Sr),
  Y = {
    PerYear: 31536e3,
    PerMonth: 2628e3,
    PerWeek: 604800,
    PerDay: 86400,
    PerHour: 3600,
    PerMinute: 60,
  };
function wr(e, t, n) {
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
  return i.toLocaleDateString(W(), a);
}
function Tr(e, t) {
  let n = new Date(e * 1e3),
    r = { year: `numeric`, month: `short`, day: `numeric`, ...t };
  return n.toLocaleDateString(W(), r);
}
function Er(e) {
  let t = new Date();
  return (
    t.setHours(15),
    t.toLocaleTimeString(e, { hour: `numeric` }) ==
      t.toLocaleTimeString(e, { hour: `numeric`, hour12: !1 })
  );
}
function Dr(e, t, n) {
  let r = new Date(e * 1e3),
    i = { hour: `numeric`, minute: `2-digit`, hourCycle: `h23` },
    a = { hour: `numeric`, minute: `2-digit` },
    o = W(),
    s = { ...(t?.bForce24HourClock || Er(o[0]) ? i : a), ...n };
  return r.toLocaleTimeString(o, s);
}
function Or(e) {
  return e.toLocaleDateString(W(), { month: `long`, year: `numeric` });
}
function kr(e) {
  let t = Math.floor(e / Y.PerYear),
    n = Math.floor(e / Y.PerMonth),
    r = Math.floor((e % Y.PerMonth) / Y.PerDay),
    i = Math.floor((e % Y.PerDay) / Y.PerHour),
    a = Math.floor((e % Y.PerHour) / Y.PerMinute);
  return (
    (e %= Y.PerMinute),
    t > 0
      ? Cr.Localize(`#TimeRemaining_MoreThanOneYear`)
      : n > 0
        ? Cr.Localize(`#TimeRemaining_MonthsDays`, n, r)
        : r > 0
          ? Cr.Localize(
              `#TimeRemaining_DaysHoursMinutes`,
              r,
              i.toString().padStart(2, `0`),
              a.toString().padStart(2, `0`),
            )
          : i > 0
            ? Cr.Localize(
                `#TimeRemaining_HoursMinutesSeconds`,
                i.toString().padStart(2, `0`),
                a.toString().padStart(2, `0`),
                e.toString().padStart(2, `0`),
              )
            : Cr.Localize(
                `#TimeRemaining_MinutesSeconds`,
                a.toString().padStart(2, `0`),
                e.toString().padStart(2, `0`),
              )
  );
}
function Ar(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let n = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${b.MEDIA_CDN_COMMUNITY_URL}${n}`;
    }
    if (typeof e[t] == `string`) {
      let n = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${b.STORE_ITEM_BASE_URL}${n}`;
    }
  }
}
function jr(e, t = `full`) {
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
      l(t, `Invalid size: ${t}`);
  }
  return (
    b.STORE_ITEM_BASE_URL + e.filename.replace(/\.([^.]+)(\?.*)?$/, `${n}.$1$2`)
  );
}
function Mr(e) {
  let { data: t } = it(e),
    n = qt();
  if (t)
    return [
      ...(t.all_ages_screenshots || []),
      ...(!n && t.mature_content_screenshots
        ? t.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
function Nr(e, ...t) {
  let { data: n } = gt(e);
  return Pr(n, ...t);
}
function Pr(e, ...t) {
  if (!e?.asset_url_format) return;
  let n = t.find((t) => {
    let n = e[t];
    return typeof n == `string` && n.trim() !== ``;
  });
  return n && Ar(e, n);
}
var Fr = `qkhMGgZoiEA-`,
  Ir = `dR7N9Ozyb6k-`,
  Lr = `_8j-XyEfRwfE-`;
function Rr(e) {
  let { children: t, ...n } = e;
  return (0, q.jsx)(de, {
    className: Fr,
    type: `button`,
    ...n,
    children: (0, q.jsx)(`span`, { children: t }),
  });
}
function zr(e) {
  let { children: t, ...n } = e;
  return (0, q.jsx)(de, {
    className: Lr,
    type: `button`,
    ...n,
    children: (0, q.jsx)(`span`, { children: t }),
  });
}
function Br(e) {
  let { children: t, ...n } = e;
  return (0, q.jsx)(de, {
    className: Ir,
    type: `button`,
    ...n,
    children: (0, q.jsx)(`span`, { children: t }),
  });
}
var Vr = u(Rt(), 1),
  Hr = u(oe(), 1),
  Ur = `700px`;
function Wr() {
  return window.innerWidth < parseInt(Ur);
}
function Gr() {
  let e = ue();
  return (
    G.useEffect(
      () => (
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      ),
      [e],
    ),
    window.innerWidth < parseInt(Ur)
  );
}
var Kr = `_8Wp5WbqAbJA-`,
  qr = `UYfcYZDtfbs-`,
  Jr = `O-TsWDon65A-`,
  Yr = `E8DrK8oV4Hs-`,
  Xr = `XTfMA1ObAn4-`,
  Zr = `-Rv33oXsbT0-`,
  Qr = `MN6Xv-pm6i8-`,
  $r = `uvLRAREPa4E-`,
  ei = `UFAsjplGzxc-`,
  ti = `vL-XYGsLedM-`,
  ni = `aCttqIa8NC4-`,
  ri = `ncKEDk26SHQ-`,
  ii = `fNtXEMzHz58-`,
  ai = `jrHvWWIOlw4-`,
  oi = `FOKKfGVYUDk-`,
  si = `OClIuwfiMKQ-`,
  ci = `ZLlm68-AqhM-`,
  li = `raYV6Y-MQ7I-`,
  ui = `IWFCYfhR05U-`,
  di = `KtOQKgU1W5w-`,
  fi = `jXpKqo3-cWA-`,
  pi = `QwN0eH2k0O0-`,
  mi = `sgCiKk3DUeg-`,
  hi = `A8oyzoRvWQ8-`,
  gi = `V7rq-SSC9xQ-`,
  _i = `pNXxwljIaD8-`,
  vi = `lsjYiHotCwA-`,
  yi = `iVV26V5rbpU-`,
  bi = `XosTQwEOBO0-`,
  xi = `ITE-CUK3U10-`,
  Si = `BZ9dZKOmXqE-`,
  Ci = `zMMJGDB8n-o-`,
  wi = `XPrPiD27WdE-`,
  Ti = `R0sGSaFdUWo-`,
  Ei = `PON8X0ze5G8-`,
  Di = `rfhpla0PGMA-`,
  Oi = `OySWwOLLxFc-`,
  ki = `tkR3-aHpyI4-`,
  Ai = `yyrI0Nka69I-`,
  ji = `D3fuhd6kG6I-`,
  Mi = `Xk-QP-zS-18-`,
  Ni = `I9cM1cZTYqc-`,
  Pi = `LkW8eRLttsM-`,
  Fi = `_4KL8m0wDedE-`,
  Ii = `E3GBmOK5lMc-`,
  Li = `lOHW8g-YyoY-`,
  Ri = `Ybt9EqGhaaU-`,
  zi = `RQzfcqJK1Eg-`,
  Bi = `_0MLgqm-W-nA-`,
  Vi = `iwrzh-mg8hE-`,
  Hi = `-G-r65tUoo0-`,
  Ui = `qVhohSfcErA-`,
  Wi = `GqNlebj1uds-`,
  Gi = `oqhyMK1Krt0-`,
  Ki = `GRw4r5TpD5s-`,
  qi = `mspnwaz0EAg-`,
  Ji = `_06Z7Ej-J6OU-`,
  Yi = `lO9B4Ti6gBk-`,
  Xi = `lkVpo86MFuI-`,
  Zi = `chTH6btujQ0-`,
  Qi = `_96v5CHkkJJY-`,
  $i = `GxypNLhVZWE-`,
  ea = `BD3vXqZ-6yI-`,
  ta = `l9by-6sJDpM-`,
  na = `LCYi5cxHqgI-`,
  ra = `ZuMhm9DQqbw-`,
  ia = `eASrfjoxe3o-`,
  aa = `ppO76q5Y-Zg-`,
  oa = `WWolAsqP274-`,
  sa = `RIck6AI1vX8-`,
  ca = `Sndyr6iqn8g-`,
  la = `qUsoY9s6daM-`,
  ua = `tUIs-i3NWoU-`,
  da = `_8o-dkC5O1co-`,
  fa = `v7ul8g8zqHs-`,
  pa = `-cW4bgqyLAo-`,
  ma = `aN31caRmRcQ-`,
  ha = `tobj1evrU4w-`,
  ga = `RAahmG4F6sc-`,
  _a = `GL0tHV4bOk8-`,
  va = `LPcYz6LIoNo-`,
  ya = `IPcip0GPG-I-`,
  ba = `GCeo-xmfx1A-`,
  xa = 6,
  Sa = 1e3,
  Ca = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function wa(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = L(t),
    o = G.useRef(0),
    s = G.useRef(null);
  G.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    l = Jt(t),
    u = n && !l ? t : void 0,
    d = Gt(u),
    f = Gt(u, !0);
  if ((r && b.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (l) return (0, q.jsx)(Ea, { id: t });
  if (!d) return null;
  let p = d.filter(Ta);
  if (p.length === 0)
    return f?.some(Ta)
      ? (0, q.jsx)(Ea, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, q.jsx)(wa, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let m;
  switch (i) {
    case 1:
      m = va;
      break;
    case 2:
      m = ya;
  }
  let h = p[0];
  return (0, q.jsx)(`video`, {
    className: (0, Hr.default)(_a, m),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, q.jsx)(Da, { trailer: h }),
  });
}
function Ta(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function Ea(e) {
  let { id: t } = e,
    { data: n } = it(t),
    [r, i] = G.useState(0),
    a = G.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, xa),
      [n],
    );
  return (
    ae(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, Sa),
    a.length == 0
      ? null
      : (0, q.jsx)(`div`, {
          className: _a,
          children: a.map((e, t) =>
            (0, q.jsx)(
              `img`,
              {
                className: (0, Hr.default)(ba, t == r && `_8Ek7qtVBxvk-`),
                src: jr(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function Da(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, q.jsx)(q.Fragment, {
        children: t.microtrailer?.map((e) =>
          b.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, q.jsx)(
                `source`,
                { src: Kt(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
function Oa(e) {
  return e
    ? !!(
        e.related_items &&
        e.related_items.standalone_demo_appid &&
        e.related_items.standalone_demo_appid.length > 0 &&
        e.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function ka(e) {
  return !e || !e.related_items?.standalone_demo_appid
    ? []
    : e.related_items?.standalone_demo_appid;
}
function Aa(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return Zt(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? Or(new Date(t * 1e3))
        : Tr(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? Tr(t) : ``);
}
function ja(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var Ma = 7;
function Na(e, t) {
  if (!e) return !1;
  let n = ja(e);
  return n ? !e.is_coming_soon && n + Ma * Y.PerDay > t : !1;
}
function Pa(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
var X = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid_giftee || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid_giftee: { n: 1, br: A.readInt32, bw: n.writeInt32 },
            gift_message: { n: 2, c: Fa },
            time_scheduled_send: { n: 3, br: A.readInt32, bw: n.writeInt32 },
            email_giftee: { n: 4, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftInfo`;
    }
  },
  Fa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gifteename || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gifteename: { n: 1, br: A.readString, bw: n.writeString },
            message: { n: 2, br: A.readString, bw: n.writeString },
            sentiment: { n: 3, br: A.readString, bw: n.writeString },
            signature: { n: 4, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartGiftMessage`;
    }
  },
  Z = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount_in_cents || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readInt64String,
              bw: n.writeInt64String,
            },
            currency_code: { n: 2, br: A.readInt32, bw: n.writeInt32 },
            formatted_amount: { n: 3, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartAmount`;
    }
  },
  Ia = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            gidcoupon: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            title: { n: 5, br: A.readString, bw: n.writeString },
            coupon_description: { n: 6, br: A.readString, bw: n.writeString },
            large_icon_url: { n: 7, br: A.readString, bw: n.writeString },
            discount_pct: { n: 8, br: A.readInt32, bw: n.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CartCoupon`;
    }
  },
  La = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.context || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            context: { n: 2, c: kt },
            data_request: { n: 3, c: At },
            gift_info: { n: 4, c: X },
            gidshoppingcart: {
              n: 1,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            gidreplayoftransid: {
              n: 5,
              br: A.readFixed64String,
              bw: n.writeFixed64String,
            },
            for_init_purchase: { n: 6, br: A.readBool, bw: n.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Request`;
    }
  },
  Ra = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_items || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_items: { n: 1, c: za, r: !0, q: !0 },
            estimated_totals: { n: 5, c: Ua },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response`;
    }
  },
  za = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [15], null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            item_id: { n: 2, c: R },
            store_item: { n: 3, c: Mt },
            gift_info: { n: 4, c: X },
            errors: { n: 5, c: Ba },
            warnings: { n: 6, c: Va },
            subtotal: { n: 7, c: Z },
            price_when_added: { n: 8, c: Z },
            original_price: { n: 9, c: Z },
            coupon_applied: { n: 10, c: Ia },
            coupon_discount: { n: 11, c: Z },
            can_purchase_as_gift: { n: 12, br: A.readBool, bw: n.writeBool },
            restrict_add_additional_to_cart: {
              n: 13,
              br: A.readBool,
              bw: n.writeBool,
            },
            quantity: { n: 14, br: A.readUint32, bw: n.writeUint32 },
            included_packageids: {
              n: 15,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem`;
    }
  },
  Ba = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2, 11], null));
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
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: n.writeRepeatedInt32,
            },
            duplicate_appids_in_cart: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: n.writeRepeatedInt32,
            },
            unavailable_in_country: { n: 3, br: A.readBool, bw: n.writeBool },
            invalid_coupon: { n: 4, br: A.readBool, bw: n.writeBool },
            invalid_coupon_for_item: { n: 5, br: A.readBool, bw: n.writeBool },
            coupon_exclusive_promo: { n: 6, br: A.readBool, bw: n.writeBool },
            cannot_purchase_as_gift: { n: 7, br: A.readBool, bw: n.writeBool },
            invalid_item: { n: 8, br: A.readBool, bw: n.writeBool },
            too_many_in_cart: { n: 9, br: A.readBool, bw: n.writeBool },
            has_existing_billing_agreement: {
              n: 10,
              br: A.readBool,
              bw: n.writeBool,
            },
            missing_must_own_appids: {
              n: 11,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: n.writeRepeatedInt32,
            },
            adult_content_restricted: {
              n: 12,
              br: A.readBool,
              bw: n.writeBool,
            },
            commercial_license_restricted: {
              n: 13,
              br: A.readBool,
              bw: n.writeBool,
            },
            gift_not_valid_for_recipient_region: {
              n: 14,
              br: A.readBool,
              bw: n.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Errors`;
    }
  },
  Va = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
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
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: n.writeRepeatedInt32,
            },
            owned_appids_extra_copy: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: n.writeRepeatedInt32,
            },
            appids_in_mastersub: { n: 3, c: Ha, r: !0, q: !0 },
            price_has_changed: { n: 4, br: A.readBool, bw: n.writeBool },
            non_refundable: { n: 5, br: A.readBool, bw: n.writeBool },
            gift_recipient_higher_price: {
              n: 6,
              br: A.readBool,
              bw: n.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings`;
    }
  },
  Ha = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_appid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            mastersub_appid: { n: 2, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub`;
    }
  },
  Ua = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subtotal || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_EstimatedTotals`;
    }
  },
  Wa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_ids || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { item_ids: { n: 1, c: R, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Request`;
    }
  },
  Ga = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ownership_info || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ownership_info: { n: 1, c: qa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response`;
    }
  },
  Ka = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            already_owns: { n: 2, br: A.readBool, bw: n.writeBool },
            wishes_for: { n: 3, br: A.readBool, bw: n.writeBool },
            partial_owns_appids: {
              n: 4,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
            partial_wishes_for: {
              n: 5,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership`;
    }
  },
  qa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: R },
            friend_ownership: { n: 2, c: Ka, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo`;
    }
  },
  Ja = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { item_id: { n: 1, c: R } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Request`;
    }
  },
  Ya = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageids_added || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2], null));
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
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
            appids_added: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
            purchase_result_detail: {
              n: 3,
              br: A.readUint32,
              bw: n.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Response`;
    }
  },
  Xa;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Checkout.ValidateCart#1`, c(La, t, n), Ra, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`, `store`, `checkout`],
    });
  }
  e.ValidateCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Checkout.GetFriendOwnershipForGifting#1`,
      c(Wa, t, n),
      Ga,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`store`, `checkout`],
      },
    );
  }
  e.GetFriendOwnershipForGifting = n;
  function r(e, t, n) {
    return e.SendMsg(`Checkout.AddFreeLicense#1`, c(Ja, t, n), Ya, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`, `checkout`],
    });
  }
  e.AddFreeLicense = r;
})((Xa ||= {}));
function Za(e) {
  let t = B(),
    n = k.accountid;
  return G.useCallback(
    (r) => {
      t.setQueryData(Qa(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function Qa(e) {
  return [`AccountOwnedPackages`, e ?? 0];
}
function $a(e) {
  let t = z(),
    n = Jn(),
    r = Za();
  return Lt({
    mutationFn: () => eo(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: i, appids_added: a, purchase_result_detail: o },
      ] = e;
      (a && n(a), i && r(i));
    },
  });
}
async function eo(e, t) {
  let n = o.Init(Ja);
  n.Body().set_item_id(R.fromObject(t));
  let r = await Xa.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var to = `PFP2RDjCi0w-`,
  no = `Cbfoq6WaXq4-`,
  ro = `_4lcICEhYuQw-`,
  io = `unoV6P6DXbM-`,
  ao = `p8d03I0RAAs-`,
  oo = `brHZRAeRCnw-`,
  so = `hATzo-Hjaaw-`,
  co = `_7vEy4qHpqHo-`,
  lo = `KoUJweWUwjY-`,
  uo = `XAGO1LWGig0-`,
  fo = `uN9-XHR7odQ-`,
  po = `CnbkzZzYDxs-`,
  mo = `_8UjVVV-S-j8-`,
  ho = `k0yt-Gxhbs4-`,
  go = `io6uTUtzW-A-`,
  _o = `_58-zzK2uRws-`,
  vo = `mGygcOFcFcQ-`,
  yo = `mW8gl4NPYGg-`,
  bo = `X9907eDQcow-`,
  xo = `GwjmtMACpAo-`,
  So = `S8JsHzHuIMA-`,
  Co = `_4nNWbL6J2cI-`,
  wo = `Djw7Ta0NL0Q-`,
  To = `u-mW6oZelJ4-`,
  Eo = `j0BUhYRjGwM-`,
  Do = `I-L7P5K0HUM-`,
  Oo = `VYzpavMEA5M-`,
  ko = `iXn31HpcmTo-`;
function Ao(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = ot(t),
    { data: a } = L(t),
    o = rn(t),
    { data: s } = L(o),
    { data: c } = Nn();
  if (!i || !a || (a.type == 1 && !Oa(s))) return null;
  let l = i.summary_unfiltered || i.summary_filtered,
    u = `#ReviewScore_UserReviewScoreAria`,
    d = !1,
    f = M.Localize(`#Language_` + b.LANGUAGE);
  if (
    (jo(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((d = !0),
          (u = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (l = i.summary_language_specific))
        : (l = i.summary_filtered)),
    !l || !l.review_score)
  )
    return null;
  let p = wo;
  p =
    l.review_score > 0 && l.review_score < 5
      ? To
      : l.review_score == 5
        ? Eo
        : Do;
  let m = `${b.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    h = (0, q.jsxs)(`div`, {
      className: E(Co, p),
      children: [
        (0, q.jsx)(`div`, {
          className: Oo,
          "aria-label": M.Localize(u, l.review_score_label, f),
          children: l.review_score_label,
        }),
        (0, q.jsxs)(`div`, {
          className: So,
          "aria-label": M.Localize(
            `#GameHover_UserReviewCount`,
            l.review_count.toLocaleString(W()),
          ),
          children: [
            `(`,
            n
              ? `(` + l.review_count.toLocaleString(W()) + `)`
              : d
                ? M.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    l.review_count.toLocaleString(W()),
                    f,
                  )
                : M.Localize(
                    `#GameHover_UserReviewCount`,
                    l.review_count.toLocaleString(W()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, q.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, M.Localize(`#GameHover_UserReviewsHeader`)],
          }),
      ],
    }),
    g = `#ReviewScore_PercentPositive`;
  if (a.item_type === 2) g = `#ReviewScore_PercentPositive_bundle`;
  else if (a.item_type === 0)
    switch (a.type) {
      case 6:
        g = `#ReviewScore_PercentPositive_software`;
        break;
      case 7:
        g = `#ReviewScore_PercentPositive_video`;
        break;
      case 10:
        g = `#ReviewScore_PercentPositive_hardware`;
        break;
      case 8:
        g = `#ReviewScore_PercentPositive_series`;
    }
  return (0, q.jsx)(Gp, {
    url: m,
    className: E(xo, `ReviewScore`),
    children:
      r && l.percent_positive != null && l.review_count != null && g
        ? (0, q.jsx)(He, {
            bTopmost: !0,
            toolTipContent: M.Localize(g, l.percent_positive, l.review_count),
            children: h,
          })
        : h,
  });
}
function jo(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function Mo(t, n) {
  let r = Bn(C.STORE_BASE_URL, n, e.country_code);
  return (await (await fetch(r)).json()).rgWishlist || [];
}
function No() {
  let e = z(),
    t = k.accountid;
  return V(Po(e, t));
}
function Po(e, t) {
  return {
    queryKey: Lo(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Mo(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Fo(e) {
  let { data: t } = No();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function Io() {
  let e = B(),
    t = k.accountid;
  return (n, r) => {
    e.setQueryData(Lo(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function Lo(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function Ro(t, n, r) {
  let i = Io(),
    a = e.accountid;
  return Lt({
    mutationKey: [`useUpdateWishlist`, t, a, n],
    mutationFn: async () => {
      if (t == null) return;
      let e =
          C.STORE_BASE_URL +
          `api/` +
          (n ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + t),
        i.append(`sessionid`, f()),
        r && i.append(`snr`, r));
      let a = await fetch(e, {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      if (!a.ok)
        throw Error(
          `Wishlist ${n ? `add` : `remove`} of appid ${t} failed (${a.status})`,
        );
    },
    onMutate: () => {
      t != null && i(n ? [t] : void 0, n ? void 0 : [t]);
    },
    onError: () => {
      t != null && i(n ? void 0 : [t], n ? [t] : void 0);
    },
    onSuccess: () => {
      Vn();
    },
  });
}
function zo(t) {
  let {
      id: n,
      snr: r,
      classOverride: i,
      styleOverride: a,
      bShowInGamepadUI: o,
    } = t,
    { data: s } = L(n),
    { elDialogElement: c, fnShowLogonDialog: l } = Md(),
    [u, d] = (0, G.useState)(() => {
      if (s && (s.type == 1 || s.type == 12) && s.related_items?.parent_appid)
        return s.related_items?.parent_appid;
      if (n && `appid` in n) return n.appid;
    }),
    f = nn(u),
    p = Fo(u),
    { bIsOwned: m } = Xn(f),
    [h, g] = (0, G.useState)(!1),
    _ = fn(`GameHoverWishlistButton`),
    { mutateAsync: v } = Ro(u, !p, r);
  (0, G.useEffect)(() => {
    n &&
      `appid` in n &&
      (s?.type == 1 || s?.type == 12) &&
      d(s.related_items?.parent_appid || n.appid);
  }, [s, n]);
  let y = (0, G.useCallback)(
    async (t) => {
      e.logged_in
        ? (t.preventDefault(),
          t.stopPropagation(),
          g(!0),
          await v(),
          _.token.reason || g(!1))
        : l();
    },
    [_.token.reason, l, v],
  );
  return m && s?.type != 10
    ? null
    : (0, q.jsxs)(Pe, {
        className: E(lo, o && `B7tWNVp-vns-`, i),
        onActivate: y,
        style: a,
        children: [
          p ? (0, q.jsx)(Le, {}) : (0, q.jsx)(Be, {}),
          (0, q.jsx)(`div`, {
            className: E(uo, h && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: M.Localize(
              p ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          c,
        ],
      });
}
var Bo = G.createContext({
  AddImpression: () => {
    console.log(`Impression Tracking not enabled`);
  },
  BIsValid: () => !1,
});
function Vo() {
  return G.useContext(Bo);
}
function Ho(e) {
  let { appID: t, feature: n, depth: r, children: i } = e,
    a = wt(n, r),
    o = Vo(),
    [s, c] = G.useState(void 0),
    l = G.useCallback(
      (e) => {
        e.isIntersecting &&
          c((e) => (e?.appID == t && e?.snr == a ? e : { appID: t, snr: a }));
      },
      [t, a],
    );
  (0, G.useEffect)(() => {
    s && s.appID != null && o.AddImpression(s.appID, s.snr);
  }, [o, s]);
  let u = ze(l),
    d = t && (!s || (s.appID != t && s.snr != a)),
    f = ie(i.props.ref, d ? u : void 0);
  return G.cloneElement(i, { ref: f });
}
function Uo(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function Wo(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var Go = (e) => {
  let { appid: t } = e,
    n = (0, q.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, q.jsx)(Ho, { appID: t, children: n }) : n;
};
function Ko(e) {
  let { id: t } = e,
    { data: n } = st(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: _o,
        children: (0, q.jsx)(`div`, {
          className: vo,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, q.jsx)(
                og,
                { tagid: e.tagid, className: yo },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function qo(e) {
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
    g = hp(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, y] = (0, G.useState)(!1),
    [b, x] = (0, G.useState)(``),
    S = (e) => x(`translateY( -${e?.clientHeight || 0}px )`),
    { data: C } = L(t),
    { data: w } = gt(n),
    T = !f && !o && !a,
    ee = C && C.item_type == 0,
    [te, D] = Wo(l, u);
  return (0, q.jsxs)(`div`, {
    className: fo,
    style: { transform: s && v ? b : `` },
    onMouseEnter: () => y(!0),
    onFocus: () => y(!0),
    onMouseLeave: () => y(!1),
    onBlur: () => y(!1),
    children: [
      (0, q.jsxs)(`a`, {
        href: i,
        className: oo,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          w &&
            (0, q.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, q.jsx)(`div`, {
                className: E(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, q.jsx)(`img`, {
                  loading: `lazy`,
                  src: Ar(w, `header`),
                  alt: C?.name,
                }),
              }),
            }),
          !c &&
            !f &&
            (0, q.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, q.jsx)(ts, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, q.jsx)(`div`, {
        className: po,
        ref: S,
        children: (0, q.jsxs)(`div`, {
          className: ho,
          children: [
            (0, q.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, q.jsx)(`div`, {
                className: go,
                children: C?.name || r,
              }),
            }),
            h && (0, q.jsx)(Yo, { id: t }),
            (0, q.jsx)(Ko, { id: t }),
            !te && (0, q.jsx)(Ao, { id: t }),
            !(te || !T) &&
              (0, q.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, q.jsx)(Qo, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, q.jsx)(Jo, { id: t }),
                ],
              }),
            o && (0, q.jsx)(Jc, { id: t, className: `mVkwv5PYwMg-` }),
            !!(te && ee) &&
              (0, q.jsx)(ln, { id: t, compatibility: D, onShowDialog: _ }),
            !!a && a,
            f &&
              ee &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, q.jsx)(_s, { appid: t.appid, bIsMuted: !1 }),
            p && (0, q.jsx)(Gf, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function Jo(e) {
  let { id: t } = e,
    { data: n } = yt(t);
  if (!n) return null;
  let r = Aa(n);
  return (0, q.jsx)(`div`, { className: bo, children: r });
}
function Yo(e) {
  let { id: t } = e,
    { data: n } = mt(t);
  return n
    ? (0, q.jsx)(`div`, { className: mo, children: n?.short_description })
    : null;
}
function Xo(e) {
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
    { data: l } = at(t),
    { data: u } = it(t),
    d = l === void 0 && u === void 0,
    [f] = Wo(!!a, o);
  return (0, q.jsxs)(`div`, {
    className: E(to, d && `dNo27dzDPfI-`, Fi, i && `djLCJl8FKv8-`),
    children: [
      (0, q.jsxs)(`a`, {
        href: r,
        className: no,
        children: [
          !(!s || f) && (0, q.jsx)(zo, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, q.jsx)(cf, { id: n, snr: e.strSNR }),
          t && (0, q.jsx)(rp, { id: t }),
        ],
      }),
      (0, q.jsx)(qo, { ...e }),
    ],
  });
}
function Zo(e) {
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
      ...b
    } = e,
    { data: x } = L(t),
    S = y(),
    [C, w, T] = se(),
    { strStoreURL: ee, snr: E } = Ss(x, o);
  if ((!x && !n) || S) return (0, q.jsx)(q.Fragment, { children: u });
  let te = t;
  x &&
    x.item_type == 1 &&
    x.included_appids?.length == 1 &&
    (te = { appid: x.included_appids[0] });
  let D = yp() == `hiding`,
    ne;
  r || (ne = v ?? (x ? ee : void 0));
  let [, O] = Wo(p, m),
    k;
  O != 0 && x?.appid && x?.item_type == 0 && (k = x.appid);
  let A = (0, q.jsx)(Xo, {
      id: t,
      displayID: te,
      name: n,
      bPreventNavigation: r,
      strStoreUrl: ne,
      elElementToAppend: i,
      bShowDemoButton: a,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bHideBottomHalf: D,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strSNR: E,
      nCreatorAccountID: d,
      bShowWishlistButton: h,
      bShowIgnoreButton: g,
      bShowDescription: _,
      onShowDeckCompatibilityDialog: k ? w : void 0,
    }),
    re = ne && !v ? (0, q.jsx)(`a`, { href: ne, children: u }) : u;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(gp, {
        hoverContent: A,
        nWidthMultiplier: f,
        ...b,
        children: re,
      }),
      k &&
        (0, q.jsx)(un, {
          nAppID: k,
          appName: x?.name || n,
          startingTab: O,
          active: C,
          closeModal: T,
        }),
    ],
  });
}
function Qo(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = vt(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, q.jsx)(`span`, {
          title: M.Localize(`#Platform_Windows`),
          children: (0, q.jsx)(Re, {
            "aria-label": M.Localize(`#Platform_Windows`),
          }),
        });
    return (
      b.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, q.jsx)(`span`, {
            title: M.Localize(`#Platform_Linux`),
            children: (0, q.jsx)(Me, {
              "aria-label": M.Localize(`#Platform_Linux`),
            }),
          }))
        : b.PLATFORM === `macos` && a?.mac
          ? (e = (0, q.jsx)(`span`, {
              title: M.Localize(`#Platform_Mac`),
              children: (0, q.jsx)(et, {
                "aria-label": M.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, q.jsx)(`span`, {
              title: M.Localize(`#Platform_VR`),
              children: (0, q.jsx)(ke, {
                "aria-label": M.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, q.jsx)(`span`, { className: E(ni, n), children: e }) : null
    );
  }
  return (0, q.jsxs)(`span`, {
    className: E(ni, n),
    children: [
      !i &&
        a.windows &&
        (0, q.jsx)(`span`, {
          title: M.Localize(`#Platform_Windows`),
          children: (0, q.jsx)(Re, {
            "aria-label": M.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, q.jsx)(`span`, {
          title: M.Localize(`#Platform_Mac`),
          children: (0, q.jsx)(et, {
            "aria-label": M.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, q.jsx)(`span`, {
          title: M.Localize(`#Platform_Linux`),
          children: (0, q.jsx)(Me, {
            "aria-label": M.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, q.jsx)(`span`, {
          title: M.Localize(`#Platform_VR`),
          children: (0, q.jsx)(ke, {
            "aria-label": M.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function $o(e) {
  let {
      bundle_discount_pct: t = 0,
      discount_pct: n = 0,
      price_before_bundle_discount: r,
      formatted_price_before_bundle_discount: i,
      final_price_in_cents: a,
    } = e,
    o = Number.parseInt(r || `0`);
  if (!(t <= 0 || o <= 0 || !i))
    return n <= 0
      ? { nDiscountPct: t, strOriginalPrice: i, nSupersededBundlePct: 0 }
      : {
          nDiscountPct: Math.min(
            Math.floor(((o - Number.parseInt(a || `0`)) / o) * 100 + 0.5),
            99,
          ),
          strOriginalPrice: i,
          nSupersededBundlePct: t,
        };
}
function es(e, t, n) {
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
function ts(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = dt(t),
    { data: i } = L(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, q.jsx)(ns, { purchaseOption: a, ...e });
}
function ns(e) {
  let {
      bSingleLineMode: t,
      onlyOneDiscountPct: n,
      id: r,
      purchaseOption: i,
      bHidePrePurchase: a,
      bHideReleaseDate: o,
      bHideIfDemo: s,
      bPurchaseOptionDisplay: c,
      bCapsuleRowDisplay: l,
      strContainerClassName: u,
      strDiscountAndPriceClassName: d,
      strPriceFormattedClassName: f,
      bPreferWholeNumbers: p,
      bSelfPurchaseOption: m,
      bHideNewTag: h,
      bPrePurchaseBesidePrice: g,
    } = e,
    _ = b.NOW,
    { data: v } = yt(r),
    { data: y } = L(r);
  if (!y) return null;
  let x = i,
    S = !h && Na(v, _),
    C = E({
      [ci]: !0,
      [ki]: t,
      StoreSalePriceWidgetContainer: !0,
      [Ni]: S,
      [ei]: c,
      [Ri]: l,
      [u ?? ``]: !!u,
    });
  if (e.bShowInLibrary)
    return (0, q.jsx)(`div`, {
      className: C,
      children: (0, q.jsx)(`div`, {
        className: Oi,
        children: M.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (v && v.is_coming_soon && (!x || (!x.packageid && !x.bundleid))) {
    if (o) return null;
    let e =
      v.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(v.coming_soon_display)
        ? Zt(v)
        : M.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, Aa(v));
    return (0, q.jsx)(`div`, {
      className: C,
      children: (0, q.jsx)(`div`, { className: Oi, children: e }),
    });
  }
  if (y.is_free) {
    if (!y.is_free_temporarily)
      return y.item_type == 0 && y.type == 1
        ? s
          ? null
          : (0, q.jsxs)(`div`, {
              className: C,
              children: [
                S &&
                  (0, q.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: M.Localize(`#Flag_New`),
                  }),
                (0, q.jsx)(`div`, {
                  className: Oi,
                  children: M.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, q.jsxs)(`div`, {
            className: C,
            children: [
              S &&
                (0, q.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: M.Localize(`#Flag_New`),
                }),
              (0, q.jsx)(`div`, {
                className: Oi,
                children: M.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (x && x.is_free_to_keep && !x.formatted_original_price)
      return (0, q.jsx)(`div`, {
        className: C,
        children: (0, q.jsx)(`div`, {
          className: Oi,
          children: M.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!x || !x.formatted_final_price) return null;
  let w = y.item_type == 2,
    T = $o(x),
    ee = !!T && !T.nSupersededBundlePct,
    te = T?.nSupersededBundlePct ? T.nDiscountPct : x.discount_pct || 0,
    D = ((T || w) && (!n || ee || (T && !t)) && x.bundle_discount_pct) || 0,
    ne = x.formatted_final_price;
  if (p) {
    let e = _n(k.country_code.toUpperCase()),
      t = { ...ve(e), bWholeUnitsOnly: !0 };
    ne = ye(Number.parseInt(x.final_price_in_cents || `0`), t);
  }
  let O = Pa(v, x);
  return (0, q.jsx)(rs, {
    bSingleLineMode: !!t,
    bBundleItem: w,
    nBaseDiscountPercentage: D,
    nDiscountPercentage: te,
    bIsPrePurchase: O,
    strBestPurchaseOriginalPriceFormatted:
      T?.strOriginalPrice || x.formatted_original_price || ``,
    strBestPurchasePriceFormatted: ne,
    bHideDiscountPercentForCompliance: !!x.hide_discount_pct_for_compliance,
    bShowNewFlag: S,
    bHidePrePurchase: !!a,
    bPrePurchaseBesidePrice: g,
    strDiscountAndPriceClassName: d,
    strPriceFormattedClassName: f,
    bPurchaseOptionDisplay: c,
    bCapsuleRowDisplay: l,
  });
}
function rs(e) {
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
    y = !(!i || !n || g || t),
    b = M.Localize(es(!!i, !!n, !!h));
  return (0, q.jsxs)(`div`, {
    className: E({
      [ci]: !0,
      [ki]: t,
      StoreSalePriceWidgetContainer: !0,
      [Ei]: !!n,
      Discounted: !!n,
      [Mi]: !!r,
      [Li]: !!u,
      [Ni]: !!c,
      [ei]: p,
      [Ri]: m,
      [d ?? ``]: !!d,
    }),
    "aria-label": _,
    children: [
      !(!r || l) &&
        (0, q.jsx)(`div`, {
          className: E(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, q.jsxs)(`span`, {
            children: [
              (0, q.jsx)(nt, {}),
              M.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, q.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: M.Localize(`#Flag_New`),
        }),
      y &&
        (0, q.jsx)(Ke, {
          toolTipContent: b,
          children: (0, q.jsxs)(`span`, {
            className: E(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, q.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${i}%`,
              }),
              `-${n}%`,
            ],
          }),
        }),
      !(!i || g || y) &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(Ke, {
              toolTipContent: b,
              children: (0, q.jsx)(`span`, {
                className: E(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, q.jsx)(Ke, {
                toolTipContent: b,
                children: (0, q.jsx)(`span`, {
                  className: E(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || g) &&
        (0, q.jsx)(Ke, {
          toolTipContent: b,
          children: (0, q.jsx)(`div`, {
            className: E(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && g) &&
        (0, q.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, q.jsx)(Oe, {}),
        }),
      v
        ? (0, q.jsxs)(`div`, {
            className: E(Ai),
            children: [
              (0, q.jsx)(`div`, {
                className: E({ [Ii]: t, [ji]: !t }),
                children: a,
              }),
              (0, q.jsx)(`div`, {
                className: E({ [Oi]: !0, [ki]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, q.jsx)(`div`, {
            className: E({ [Oi]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
var is = `pE3kiYj-T9c-`,
  as = `bXqn3-4kGc8-`,
  os = `bNGFzJt9CmI-`,
  ss = `vE1beFyJ7fE-`,
  cs = `jLH2MgXW2QA-`,
  ls = `dGNTZWr-al8-`,
  us = `_8aFotqvmohI-`,
  ds = `sjibpkgu4sc-`,
  fs = `I09IQjtbMSg-`,
  ps = `C4-YRfvAL7Q-`;
async function ms(e, t) {
  let n = `steam://run/` + e;
  C.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      hs(e, n, t));
}
async function hs(e, t, n) {
  console.log(`prompting for`, n);
  let r = C.STORE_BASE_URL + `about/`;
  Ze(
    (0, q.jsx)(gs, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var gs = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, q.jsx)(Ge, {
    onEscKeypress: t,
    className: is,
    children: (0, q.jsxs)(je, {
      children: [
        (0, q.jsxs)($e, { children: [` `, F(`#GotSteam_Title`), ` `] }),
        (0, q.jsxs)(Ae, {
          children: [
            (0, q.jsx)(Ie, {
              children: Ve(
                `#GotSteam_PromptWithDownloadLink`,
                (0, q.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: as,
                  children: F(`#GotSteam_DownloadLinkText`),
                }),
                (0, q.jsx)(`span`, { className: os, children: e.strGameName }),
              ),
            }),
            (0, q.jsxs)(`div`, {
              className: ss,
              children: [
                (0, q.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: E(cs, ls),
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: us,
                      children: [` `, F(`#GotSteam_Yes`), ` `],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: ds,
                      children: [` `, F(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, q.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: cs,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: us,
                      children: [` `, F(`#GotSteam_No`), ` `],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: ds,
                      children: [` `, F(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: fs,
              children: [
                (0, q.jsx)(Me, { className: ps }),
                F(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function _s(e) {
  let { appid: t, bIsMuted: n } = e,
    r = nn(t),
    i = qn(t),
    { data: a } = L(r),
    { mutate: o } = $a(r),
    s = (e) => {
      (e.preventDefault(), i ? ms(t, a?.name) : o());
    },
    c = E(ii, n && void 0, i ? ai : oi);
  return (0, q.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: s,
    className: c,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s(e));
    },
    children: F(i ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function vs(e, t = !1) {
  if (e)
    return t && Oa(e)
      ? `${b.STORE_BASE_URL}app/${ka(e)[0]}`
      : `${b.STORE_BASE_URL}${e.store_url_path}`;
}
function ys() {
  window.location.href = `${b.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var bs = G.createContext({});
function xs() {
  return G.useContext(bs);
}
function Ss(e, t, n) {
  let r = Tt(),
    i = xs(),
    a = yn(Cs(vs(e, t), n));
  return { snr: bn(r), strStoreURL: vn(a, r, i) };
}
function Cs(e, t) {
  if (!e || !t) return e;
  let n = new URL(e);
  for (let [e, r] of Object.entries(t)) n.searchParams.set(e, r);
  return n.toString();
}
function ws(e) {
  return e
    ? { type: `replay`, gid: e }
    : k.logged_in
      ? { type: `account` }
      : { type: `anonymous`, gid: Ht(Ut) };
}
var Ts = G.createContext({ cartID: void 0 });
function Es() {
  return G.useContext(Ts).cartID || ws();
}
function Ds(e) {
  return e.type === `account`;
}
function Os(e) {
  return e.type === `anonymous`;
}
var ks = {
  bCanAddItems: !0,
  bCanModify: !0,
  bCanPurchase: !0,
  bShowValidationNotices: !0,
  bShowPurchaseOptionPicker: !0,
  bShowPageFooter: !0,
  bCanChangeCountry: !0,
};
({ ...ks }, { ...ks });
var As = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.validation_failure || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            validation_failure: { n: 1, d: 0, br: A.readEnum, bw: n.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartValidationDetails`;
    }
  },
  js = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_gift || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_gift: { n: 1, br: A.readBool, bw: n.writeBool },
            is_private: { n: 2, br: A.readBool, bw: n.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItemFlags`;
    }
  },
  Ms = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            type: { n: 2, br: A.readEnum, bw: n.writeEnum },
            packageid: { n: 3, br: A.readUint32, bw: n.writeUint32 },
            bundleid: { n: 4, br: A.readUint32, bw: n.writeUint32 },
            is_valid: { n: 8, br: A.readBool, bw: n.writeBool },
            validation_details: { n: 9, c: As },
            time_added: { n: 10, br: A.readUint32, bw: n.writeUint32 },
            price_when_added: { n: 11, c: Z },
            gift_info: { n: 12, c: X },
            flags: { n: 13, c: js },
            gidcoupon_applied: {
              n: 14,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItem`;
    }
  },
  Ns = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_items: { n: 1, c: Ms, r: !0, q: !0 },
            subtotal: { n: 2, c: Z },
            is_valid: { n: 3, br: A.readBool, bw: n.writeBool },
            validation_details: { n: 4, c: As },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartContents`;
    }
  },
  Ps = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Request`;
    }
  },
  Fs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: Ns } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Response`;
    }
  },
  Is = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: A.readString, bw: n.writeString },
            items: { n: 2, c: Ls, r: !0, q: !0 },
            navdata: { n: 3, c: Qn },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request`;
    }
  },
  Ls = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            bundleid: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            gift_info: { n: 10, c: X },
            flags: { n: 11, c: js },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request_ItemToAdd`;
    }
  },
  Rs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_ids || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 3], null));
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
              br: A.readUint64String,
              pbr: A.readPackedUint64String,
              bw: n.writeRepeatedUint64String,
            },
            cart: { n: 2, c: Ns },
            replaced_packages: {
              n: 3,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
            existing_billing_agreementid: {
              n: 4,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            new_billing_agreement_recurring_packageid: {
              n: 5,
              br: A.readUint32,
              bw: n.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Response`;
    }
  },
  zs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            user_country: { n: 2, br: A.readString, bw: n.writeString },
            gift_info: { n: 10, c: X },
            flags: { n: 11, c: js },
            apply_gidcoupon: {
              n: 12,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Request`;
    }
  },
  Bs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: Ns } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Response`;
    }
  },
  Vs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            user_country: { n: 2, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Request`;
    }
  },
  Hs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: Ns } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Response`;
    }
  },
  Us = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readFixed64String,
              bw: n.writeFixed64String,
            },
            user_country: { n: 2, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Request`;
    }
  },
  Ws = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: Ns } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Response`;
    }
  },
  Gs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_DeleteCart_Request`;
    }
  },
  Ks = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_DeleteCart_Response`;
    }
  },
  qs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: A.readUint32, bw: n.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Request`;
    }
  },
  Js = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { line_items: { n: 1, c: Ys, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response`;
    }
  },
  Ys = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            coupons: { n: 2, c: Ia, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response_LineItemCoupons`;
    }
  },
  Xs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountCart.GetCart#1`, c(Ps, t, n), Fs, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetCart = t;
  function n(e, t, n) {
    return e.SendMsg(`AccountCart.AddItemsToCart#1`, c(Is, t, n), Rs, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`, `checkout`],
    });
  }
  e.AddItemsToCart = n;
  function r(e, t, n) {
    return e.SendMsg(`AccountCart.ModifyLineItem#1`, c(zs, t, n), Bs, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `checkout`],
    });
  }
  e.ModifyLineItem = r;
  function i(e, t, n) {
    return e.SendMsg(`AccountCart.RemoveItemFromCart#1`, c(Vs, t, n), Hs, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `checkout`],
    });
  }
  e.RemoveItemFromCart = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AccountCart.MergeShoppingCartContents#1`,
      c(Us, t, n),
      Ws,
      { ePrivilege: 1 },
    );
  }
  e.MergeShoppingCartContents = a;
  function o(e, t, n) {
    return e.SendMsg(`AccountCart.DeleteCart#1`, c(Gs, t, n), Ks, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `checkout`],
    });
  }
  e.DeleteCart = o;
  function s(e, t, n) {
    return e.SendMsg(`AccountCart.GetRelevantCoupons#1`, c(qs, t, n), Js, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `checkout`],
    });
  }
  e.GetRelevantCoupons = s;
})((Xs ||= {}));
var Zs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_requester || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readFixed64String,
              bw: n.writeFixed64String,
            },
            purchase_request_id: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Request`;
    }
  },
  Qs = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  $s = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: A.readInt64String, bw: n.writeInt64String },
            currencycode: { n: 2, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Amount`;
    }
  },
  ec = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            costwhenadded: { n: 2, c: $s },
            is_gift: { n: 3, br: A.readBool, bw: n.writeBool },
            gidbundle: {
              n: 4,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            quantity: { n: 5, br: A.readUint32, bw: n.writeUint32 },
            gift_info: { n: 6, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_PackageItem`;
    }
  },
  tc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.walletcredit || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { walletcredit: { n: 1, c: $s } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  nc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            gidcoupontarget: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            packageid: { n: 3, br: A.readUint32, bw: n.writeUint32 },
            gidcoupon: {
              n: 4,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_CouponItem`;
    }
  },
  rc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.microtxnappid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            microtxnappid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            microtxnassetclassid: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  ic = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bundleid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bundleid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            quantity: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            is_gift: { n: 3, br: A.readBool, bw: n.writeBool },
            gift_info: { n: 4, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_BundleItem`;
    }
  },
  ac = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reward_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reward_id: { n: 1, br: A.readInt32, bw: n.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  oc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidparent || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            children: { n: 2, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RelationShip`;
    }
  },
  sc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.couponid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            gidcoupon: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            gidlineitem: {
              n: 3,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  cc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidlineitem || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            package_item: { n: 2, c: ec },
            wallet_credit_item: { n: 3, c: tc },
            coupon_item: { n: 4, c: nc },
            micro_item: { n: 5, c: rc },
            bundle_item: { n: 7, c: ic },
            loyalty_item: { n: 8, c: ac },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Item`;
    }
  },
  lc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.coupons || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { coupons: { n: 1, c: sc, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Potentials`;
    }
  },
  uc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Request`;
    }
  },
  dc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.lineitems || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lineitems: { n: 1, c: cc, r: !0, q: !0 },
            treeview: { n: 2, c: oc, r: !0, q: !0 },
            potentials: { n: 3, c: lc },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_Contents`;
    }
  },
  fc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            contents: { n: 2, c: dc },
            time_created: { n: 3, br: A.readUint32, bw: n.writeUint32 },
            merged_into_account_cart: { n: 4, br: A.readBool, bw: n.writeBool },
            steamid_requester: {
              n: 5,
              br: A.readFixed64String,
              bw: n.writeFixed64String,
            },
            purchase_request_id: {
              n: 6,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_GetContents_Response`;
    }
  },
  pc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [4], null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            browserid: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            cart_items: { n: 4, c: ec, r: !0, q: !0 },
            store_country_code: { n: 5, br: A.readString, bw: n.writeString },
            beta_mode: { n: 6, d: !1, br: A.readBool, bw: n.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  mc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            contents: { n: 2, c: dc },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Response`;
    }
  },
  hc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            quantity: { n: 3, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  gc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            contents: { n: 2, c: dc },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Response`;
    }
  },
  _c = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            bundleid: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            browserid: {
              n: 3,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            store_country: { n: 5, br: A.readString, bw: n.writeString },
            quantity: { n: 6, br: A.readUint32, bw: n.writeUint32 },
            beta_mode: { n: 7, d: !1, br: A.readBool, bw: n.writeBool },
            gift_info: { n: 8, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  vc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: dc },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Response`;
    }
  },
  yc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            gift_info: { n: 3, c: X },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  bc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { contents: { n: 1, c: dc } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  xc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            gidlineitems: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint64String,
              pbr: A.readPackedUint64String,
              bw: n.writeRepeatedUint64String,
            },
            browserid: {
              n: 3,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  Sc = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contents || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: dc },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  Cc;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, c(Zs, t, n), Qs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      c(uc, t, n),
      fc,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetShoppingCartContents = n;
  function r(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddPackages#1`, c(pc, t, n), mc, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = r;
  function i(e, t, n) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, c(hc, t, n), gc, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = i;
  function a(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, c(_c, t, n), vc, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = a;
  function o(e, t, n) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, c(yc, t, n), bc, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `checkout`],
    });
  }
  e.ModifyLineItem = o;
  function s(e, t, n) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, c(xc, t, n), Sc, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `store`, `checkout`],
    });
  }
  e.RemoveLineItems = s;
})((Cc ||= {}));
function wc(e) {
  return Ds(e) ? e.type : e.gid;
}
function Tc(e) {
  return [`shopping_cart`, wc(e), k.accountid];
}
function Ec(e) {
  e.invalidateQueries({ queryKey: [`validate_checkout`], exact: !1 });
}
function Dc(e, t, n) {
  (e.setQueryData(Tc(t), n), Ec(e));
}
async function Oc(e, t, n, r, i) {
  let a = new FormData();
  (t &&
    (t.length === 1
      ? a.set(`subid`, t[0].toString())
      : t.forEach((e) => a.append(`subid[]`, e.toString()))),
    n && a.set(`bundleid`, n.toString()),
    (r || i) &&
      (a.set(`isgift`, `1`), i && a.set(`gifteeaccountid`, i.toString())),
    a.set(`action`, `add_to_cart`));
  let o = await fetch(`${b.STORE_BASE_URL}cart/addtocart`, {
    method: `post`,
    body: a,
  });
  if (!o.ok) throw Error(`Failed to fetch /cart/addtocart`);
  let s = await o.json();
  return [s?.success ? 1 : 2, s?.contents];
}
async function kc(e, t, n, r) {
  let i = o.Init(Is);
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
    r && i.Body().set_navdata(Qn.fromObject(St(r))),
    i.Body().set_user_country(t));
  let a = await Xs.AddItemsToCart(e, i);
  return (
    a.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${a.GetEResult()}`),
    [a.GetEResult(), a.Body().toObject()]
  );
}
function Ac(e) {
  let t = { line_items: [] };
  return (
    e?.lineitems?.length &&
      (t.line_items = e.lineitems
        .map((e) => (e.package_item?.gidbundle ? null : jc(e)))
        .filter(An)),
    t
  );
}
function jc(e) {
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
function Mc(e, t, n, r, i) {
  return Nc(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function Nc(e, t) {
  let n = Es(),
    r = z(),
    i = B(),
    { storeBrowseContext: a, dataLoader: o } = ht(),
    { country: s } = a,
    c = Ct(t);
  return Lt({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (Ds(n)) {
        let [a, o] = await kc(r, s, e, c);
        if (a == 1) ((t = o.line_item_ids), Dc(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (Os(n)) {
        let a = e.map((e) => e.packageid).filter(An),
          o = e.map((e) => e.bundleid).filter(An);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await Oc(
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
            Dc(i, n, Ac(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(_t(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(ct(o, r)), i.prefetchQuery(pt(o, r)));
          },
        );
      })();
    },
  });
}
function Pc(e, t, n) {
  return xt(e ? `${b.STORE_BASE_URL}${e.store_url_path}` : void 0, t, n);
}
async function Fc(e, t) {
  let n = o.Init(Nt);
  (n.Body().set_context(Wt(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await jt.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function Ic(e) {
  let t = zc(z());
  return V(Lc(t, e));
}
function Lc(e, t) {
  return { queryKey: Rc(t), queryFn: async () => e.load(t), enabled: !!t };
}
function Rc(e) {
  return [`hardwaredetail`, e];
}
function zc(e) {
  return be(`HardwareDetailLoader`, () => Bc(e));
}
function Bc(e) {
  return new Vr.default(async (t) => {
    let n = await Fc(e, t),
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
var Vc = { high_pending_orders: !1, inventory_available: !0 };
function Hc(e) {
  let { data: t } = L(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = Ic(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : Vc) : null;
}
var Uc = `wvEYeGaFmt0-`,
  Wc = `GW1050ijiP0-`;
function Gc(e) {
  let { id: t, className: n } = e,
    r = Tt(),
    { data: i } = L(t),
    { data: a } = yt(t),
    { data: o } = ut(t),
    s = Hc(t),
    { bIsOwned: c } = Xn(t),
    l = Pc(i),
    u = (0, G.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          Ee(window, `steam://run/${e}`));
      }
    }, [i]);
  if (!i || !a || !o || i.type == 8) return null;
  let d =
    i.is_free ||
    (o.final_price_in_cents != null && o.final_price_in_cents == `0`) ||
    (o.discount_pct && o.discount_pct >= 100);
  if (i.item_type == 1) {
    if (i.type == 10) {
      if (!s) return (0, q.jsx)(mn, { size: `small`, position: `center` });
      if (!s.inventory_available)
        return (0, q.jsx)(`div`, {
          className: E(Wc, n),
          children: (0, q.jsxs)(`span`, {
            children: [` `, M.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (d && i.included_appids && i.included_appids.length > 1)
      return null;
  }
  if (i.item_type == 0) {
    if ((a.is_coming_soon && !o.packageid) || (c && i.type === 10)) return null;
    if (!c && o.is_free_to_keep) {
      if (C.IN_CLIENT || ee() != `store`) {
        let e = `${C.IN_CLIENT ? `steam://openurl/` : ``}${l}`;
        return (0, q.jsx)(`div`, {
          onClick: (t) => Ee(t, e),
          className: E(Uc, n),
          children: (0, q.jsx)(`span`, {
            children: M.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = xn(`${C.STORE_BASE_URL}freelicense/addfreelicense`, r);
        return (0, q.jsxs)(`form`, {
          action: e,
          method: `POST`,
          children: [
            (0, q.jsx)(`input`, {
              type: `hidden`,
              name: `subid`,
              value: o.packageid,
            }),
            (0, q.jsx)(`input`, {
              type: `hidden`,
              name: `sessionid`,
              value: f(),
            }),
            (0, q.jsx)(`button`, {
              className: E(Uc, n),
              type: `submit`,
              children: M.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((c || d) && !i.is_coming_soon) {
      let e = M.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        c
          ? (e = M.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : i.is_free_temporarily &&
            (e = M.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, q.jsx)(`div`, {
          className: E(Uc, n),
          onClick: u,
          children: (0, q.jsx)(`span`, { children: e }),
        })
      );
    }
    if (o.formatted_final_price == ``)
      return (0, q.jsx)(`a`, {
        href: l,
        className: E(Uc, n),
        children: M.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, q.jsx)(Kc, {
    className: n,
    storeItemBestPurchaseOption: o,
    storeItemDefaultData: i,
  });
}
function Kc(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = Tt(),
    { mutate: a } = Mc(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, q.jsx)(`div`, {
    className: E(Uc, t),
    onClick: () => a(),
    children: (0, q.jsx)(`span`, { children: M.Localize(`#Store_AddToCart`) }),
  });
}
var qc = `_8xhMURZRDBY-`;
function Jc(e) {
  let { id: t, className: n } = e,
    { data: r } = L(t);
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
  if (b.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, q.jsx)(`div`, {
        className: n,
        children: (0, q.jsx)(eg, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, q.jsx)(Gc, { id: t, className: n })
    : (0, q.jsx)(He, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && ms(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: E(n, qc, !o && `gpIFsnR2ZGs-`),
        children: o
          ? M.Localize(`#Sale_InstallDemo`)
          : M.Localize(`#Sale_DemoNotFound`),
      });
}
var Yc =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  Xc = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  Zc = [
    `img`,
    `carousel`,
    `previewyoutube`,
    `looping_media`,
    `roomeffect`,
    `video`,
    `vod`,
    `trailer`,
    `youtubeorvideo`,
    `docimg`,
  ];
Yc.filter((e) => !Zc.includes(e));
var Qc = void 0;
function $c(e) {
  return e
    ? e.map((e) => (e == `*` ? `\\*` : e)).join(`|`)
    : ((Qc ||= $c(Yc)), Qc);
}
function el(e, t = null, n = ` `) {
  let r = RegExp(`\\[(` + $c(t) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return e.replace(r, n);
}
function tl(e, t = null, n = ``) {
  let r = `\\[\\/?(?:` + $c(t) + `){1,}.*?]`;
  return e.replace(new RegExp(r, `gi`), n);
}
async function nl(e) {
  return ol(
    `${b.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function rl(e) {
  let t = U.InitFromClanID(e, b.EUNIVERSE);
  return ol(
    `${b.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function il(e) {
  return ol(
    `${b.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function al(e) {
  return ol(
    `${b.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function ol(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function sl(e) {
  return [`clantoclaninfo`, e];
}
function cl(e) {
  return [`apptoclanid`, e];
}
function ll(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function ul(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var dl = new WeakSet();
function fl(e) {
  if (!dl.has(e)) {
    dl.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var pl = new WeakMap();
function ml(e) {
  if (!e) return null;
  let t = pl.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new U(e.clanSteamIDString)
          : U.InitFromClanID(e.clanAccountID, b.EUNIVERSE),
      }),
      pl.set(e, t)),
    t
  );
}
function hl(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function gl(e, t) {
  if (!t) return null;
  fl(e);
  let n = hl(t);
  return (
    e.setQueryData(sl(n.clanAccountID), n),
    n.appid && e.setQueryData(cl(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(ll(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function _l(e, t) {
  for (let n of t) gl(e, n);
}
function vl(e) {
  let t = B();
  return V(yl(e, t));
}
function yl(e, t) {
  return (
    fl(t),
    {
      queryKey: sl(e ?? null),
      queryFn: async () => (e ? gl(t, await rl(e)) : null),
      enabled: e !== void 0,
      select: ml,
    }
  );
}
function bl(e, t) {
  return (
    fl(t),
    {
      queryKey: cl(e),
      queryFn: async () => gl(t, await nl(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function xl(e, t, n = `group`) {
  return (
    fl(t),
    {
      queryKey: ll(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(ll(e, `group`));
          if (n) return n;
        }
        return (
          gl(t, n == `store` ? await al(e) : await il(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function Sl(e) {
  return e.isPending ? void 0 : (e.data ?? null);
}
function Cl(e) {
  let t = B(),
    n = V(bl(e, t));
  return vl(e ? Sl(n) : void 0);
}
function wl(e, t = `group`) {
  let n = B(),
    r = V(xl(e, n, t));
  return vl(e ? Sl(r) : void 0);
}
function Tl(e, t) {
  if (e) return ml(t.getQueryData(sl(e))) ?? void 0;
}
function El(e, t) {
  if (e) return Tl(t.getQueryData(cl(e)), t);
}
function Dl(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = Tl(t.getQueryData(ll(e, n)), t);
    if (r) return r;
  }
}
async function Ol(e, t) {
  return e ? ml(await t.fetchQuery(yl(e, t))) : null;
}
async function kl(e, t) {
  return e ? Ol(await t.fetchQuery(bl(e, t)), t) : null;
}
async function Al(e, t, n = `group`) {
  return e ? Ol(await t.fetchQuery(xl(e, t, n)), t) : null;
}
async function jl(e) {
  let t = { get_appids: !0, l: b.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${b.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function Ml(e) {
  return V(Nl(e));
}
function Nl(e) {
  return {
    queryKey: Pl(e),
    queryFn: async () => {
      let t = await jl(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function Pl(e) {
  return [`creatorhomebyaccount`, e];
}
function Fl(e, t) {
  if (e.vanity) {
    switch (t) {
      case `publisher`:
        return `${b.STORE_BASE_URL}publisher/${e.vanity}/`;
      case `franchise`:
        return `${b.STORE_BASE_URL}franchise/${e.vanity}/`;
    }
    return `${b.STORE_BASE_URL}developer/${e.vanity}/`;
  }
  return `${b.STORE_BASE_URL}curator/${e.creator_clan_id}/`;
}
var Il = `{STEAM_CLAN_IMAGE}`,
  Ll = `{STEAM_CLAN_LOC_IMAGE}`;
function Rl(e, t) {
  return `${e}/${t}`;
}
var zl = G.createContext({});
function Bl() {
  return G.useContext(zl);
}
RegExp(`${Ll.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function Vl(e, t, n = 0) {
  return Hl(e, t, n, Bl());
}
function Hl(e, t, n = 0, r) {
  if (!e || e.length == 0) return null;
  if (e?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return Ul.ReplacementTokenToClanImageURL(e);
  if (e?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let i = Ul.GetBaseURL(),
      a = e.substring(Ll.length + 1),
      o = parseInt(a.substring(0, a.indexOf(`/`))),
      s = a.substring(a.indexOf(`/`) + 1),
      c = Ul.GenerateURLFromHashAndExt(o, s);
    if (r?.[Rl(o, s)] === !1) return c;
    let l = Ul.GetLocalizedClanImageFileNames(s, t).map(
      (e) => i + o + `/` + e + `?t=` + n,
    );
    return (l.push(c), l);
  }
  return e;
}
var Ul = {
    GetBaseURL() {
      return `${b.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${b.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(e) {
      return (
        (e = e.replace(Il, this.GetBaseURL())), e.replace(`http://`, `https://`)
      );
    },
    ExtractHashFromBBCodeURL(e) {
      let t =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
          e,
        );
      return t?.groups
        ? [t.groups.filename, parseInt(t.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(e) {
      return (e.file_type == null ? null : Se(e.file_type)) ?? `.jpg`;
    },
    GetHashAndExt(e) {
      return e ? e.image_hash + this.GetExtensionString(e) : null;
    },
    GetThumbHashAndExt(e) {
      return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
    },
    GetHashFromHashAndExt(e) {
      let t = e.substring(e.lastIndexOf(`.`));
      return e.substring(0, e.length - t.length);
    },
    GetExtStringFromHashAndExt(e) {
      return e.substring(e.lastIndexOf(`.`));
    },
    GetLocalizedClanImageFileNames(e, t) {
      if (t == null) return [];
      let n = this.GetHashFromHashAndExt(e),
        r = this.GetExtStringFromHashAndExt(e),
        i = [n + `/` + a(t) + r];
      return (t == 4 && i.push(n + `/` + d(a(t)) + r), i);
    },
    GenerateURLFromHashAndExt(e, t, n = Wl.full) {
      return this.GenerateURLFromHashAndExtAndLang(e, t, n, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(e, t, n = Wl.full, r, i) {
      e instanceof U && (e = e.GetAccountID());
      let o = this.GetBaseURL(),
        s = r != null && r != -1;
      if (n == Wl.full && !s) return o + e + `/` + t;
      {
        let c = t.substring(t.lastIndexOf(`.`)),
          l = t.substring(0, t.length - c.length);
        return !s || r == 0 || i != `localized_image_group`
          ? o + e + `/` + l + n + c
          : o + e + `/` + l + `/` + d(a(r)) + c;
      }
    },
    GetHashAndExtFromURL(e) {
      let t = this.GetBaseURL();
      return !e?.startsWith(t) ||
        ((e = e.substring(t.length)), e.indexOf(`/`) == -1)
        ? null
        : ((e = e.substring(e.indexOf(`/`) + 1)), e);
    },
    GenerateEditableURLFromHashAndExt(e, t, n) {
      let r =
        b.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        t;
      return (n && (r += `&lang=` + n), r);
    },
    GetMimeType(e) {
      return xe(e);
    },
    async AsyncGetImageResolution(e, t, n, r, i) {
      let a = t + this.GetExtensionString({ file_type: n }),
        o = this.GenerateEditableURLFromHashAndExt(e, a);
      return await this.AsyncGetImageResolutionInternal(o, r, i);
    },
    async AsyncGetImageResolutionInternal(e, t, n) {
      let i = Ce(),
        a = new Image();
      ((a.crossOrigin = `anonymous`),
        (a.onerror = (t) => {
          let r = { success: 2 };
          (n ||
            ((r.err_msg =
              `Load fail on url ` + e + ` with error: ` + pn(t).strErrorMsg),
            console.error(r.err_msg)),
            (r.success = 2),
            i.resolve(r));
        }),
        (a.onload = () => {
          let t = { success: 2 };
          ((t.width = a.width),
            (t.height = a.height),
            !(a.width > 0) || !(a.height > 0)
              ? (r(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + e,
                ),
                (t.err_msg = `No resolution reported for url ` + e),
                i.resolve(t))
              : ((t.success = 1), i.resolve(t)));
        }),
        (a.src = e),
        t.token.promise.catch(() => {
          ((a.onload = () => {}),
            (a.onerror = () => {}),
            i.resolve({ success: 52 }));
        }));
      let o,
        s = new Promise((e, t) => {
          o = setTimeout(() => t(), 1e4);
        }),
        c;
      try {
        c = await Promise.race([s, i.promise]);
      } catch {
        c = { success: 16, err_msg: `We timed out processing images` };
      } finally {
        clearTimeout(o);
      }
      return c;
    },
    BIsClanImageVideo(e) {
      return e.file_type == 4 || e.file_type == 5;
    },
  },
  Wl = (function (e) {
    return (
      (e.full = ``),
      (e.background_main = `_960x311`),
      (e.background_mini = `_480x156`),
      (e.capsule_main = `_400x225`),
      (e.spotlight_main = `_1054x230`),
      e
    );
  })({}),
  Gl = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  Kl = 39049601,
  ql = 45479024,
  Jl = 41316928;
function Yl(e, t, n) {
  return e == 45559995
    ? `charts/topnewreleases/${t}`
    : e == 45902273
      ? `charts/bestofyear/${t}`
      : n
        ? `sale/${t}`
        : `curator/${e}/sale/${t}`;
}
function Xl(e, t) {
  return Yl(e, ``, t).startsWith(`curator/`);
}
var Zl = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: A.readInt32, bw: n.writeInt32 },
            active: { n: 2, br: A.readBool, bw: n.writeBool },
            start_time: { n: 3, br: A.readUint32, bw: n.writeUint32 },
            end_time: { n: 4, br: A.readUint32, bw: n.writeUint32 },
            app_discounts: { n: 5, c: Ql, r: !0, q: !0 },
            grouped_vote_options: { n: 6, br: A.readUint32, bw: n.writeUint32 },
            groups: { n: 7, c: $l, r: !0, q: !0 },
            internal_name: { n: 8, br: A.readString, bw: n.writeString },
            localization: { n: 9, c: eu },
            reveal_time: { n: 10, br: A.readUint32, bw: n.writeUint32 },
            release_date_min: { n: 11, br: A.readUint32, bw: n.writeUint32 },
            winner_appid: { n: 12, br: A.readUint32, bw: n.writeUint32 },
            flag: { n: 13, br: A.readEnum, bw: n.writeEnum },
            release_date_max: { n: 14, br: A.readUint32, bw: n.writeUint32 },
            item_type: { n: 15, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition`;
    }
  },
  Ql = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            discount: { n: 2, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  $l = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            group_name: { n: 2, br: A.readString, bw: n.writeString },
            app_discounts: { n: 3, c: Ql, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  eu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            title: { n: 1, br: A.readString, bw: n.writeString },
            title_linebreak: { n: 2, br: A.readString, bw: n.writeString },
            title_award: { n: 3, br: A.readString, bw: n.writeString },
            award_description: { n: 4, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_Localization`;
    }
  },
  tu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: A.readString, bw: n.writeString },
            sale_appid: { n: 2, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  nu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.votes || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            votes: { n: 1, c: Zl, r: !0, q: !0 },
            labor_of_love_winners: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  ru = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            appid: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            communityitemid: {
              n: 3,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamAwardsUserVote`;
    }
  },
  iu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sale_appid: { n: 1, br: A.readUint32, bw: n.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Request`;
    }
  },
  au = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: ru, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Response`;
    }
  },
  ou = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: A.readInt32, bw: n.writeInt32 },
            appid: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            sale_appid: { n: 3, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Request`;
    }
  },
  su = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: ru, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Response`;
    }
  },
  cu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            appid: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            last_updated: { n: 3, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwardsNomination`;
    }
  },
  lu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  uu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: cu, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Response`;
    }
  },
  du = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: n.writeFixed64String,
            },
            code: { n: 2, br: A.readFixed64String, bw: n.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  fu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            nominated_id: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            source: { n: 3, br: A.readEnum, bw: n.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Request`;
    }
  },
  pu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: cu, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Response`;
    }
  },
  mu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  hu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.played_app || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            played_app: { n: 1, c: gu, r: !0, q: !0 },
            suggested_events: { n: 2, c: _u, r: !0, q: !0 },
            suggested_apps: { n: 3, c: vu, r: !0, q: !0 },
            debug_query: { n: 4, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response`;
    }
  },
  gu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            playtime: { n: 2, br: A.readInt32, bw: n.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  _u = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            event_gid: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            appid: { n: 3, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
    }
  },
  vu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: A.readUint32, bw: n.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  yu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { generate_new: { n: 1, br: A.readBool, bw: n.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  bu = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.code || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            code: { n: 1, br: A.readFixed64String, bw: n.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  xu;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreSales.GetVoteDefinitions#1`, c(tu, t, n), nu, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetVoteDefinitions = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreSales.SetVote#1`, c(ou, t, n), su, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetVote = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreSales.GetUserVotes#1`, c(iu, t, n), au, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUserVotes = r;
})((xu ||= {}));
var Su;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamAwards.GetUserNominations#1`, c(lu, t, n), uu, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUserNominations = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamAwards.GetOtherUserNominations#1`, c(du, t, n), uu, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetOtherUserNominations = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamAwards.Nominate#1`, c(fu, t, n), pu, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.Nominate = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      c(mu, t, n),
      hu,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetNominationRecommendations = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamAwards.GetNominationShareLink#1`, c(yu, t, n), bu, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetNominationShareLink = a;
})((Su ||= {}));
var Cu = {
  bBroadcastEnabled: !1,
  broadcastChatSetting: `hide`,
  default_broadcast_title: `#Broadcast_default_title_dev`,
  localized_broadcast_title: Array(32),
  localized_broadcast_left_image: Array(32),
  localized_broadcast_right_image: Array(32),
  broadcast_whitelist: [],
};
function wu(e) {
  switch (e) {
    case 29:
    case 27:
    case 2:
    case 4:
    case 5:
    case 6:
    case 8:
    case 7:
    case 9:
    case 11:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 35:
    case 25:
    case 26:
    case 31:
    case 32:
    case 1:
    case 34:
      return !0;
  }
  return !1;
}
function Tu(e) {
  let t = `#PartnerEvent_` + e,
    n = M.Localize(t);
  return n == t ? M.Localize(`#PartnerEvent_Other`) : n;
}
var Eu = { bScheduleEnabled: !1, scheduleEntries: [] };
w(
  [ce],
  class {
    m_eventModel;
    m_entry;
    constructor(e, t) {
      ((this.m_eventModel = e), (this.m_entry = t));
    }
    GetEventStartTime() {
      return this.m_entry.rtime_start_specific
        ? this.m_entry.rtime_start_specific
        : (this.m_eventModel.startTime ?? 0) +
            (this.m_entry.delta_from_event_start_seconds ?? 0);
    }
  }.prototype,
  `GetEventStartTime`,
  null,
);
var Du = 99999,
  Ou = 593110,
  ku = (function (e) {
    return (
      (e[(e.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
      (e[(e.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
      (e[(e.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
      (e[(e.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
      e
    );
  })({});
function Au(e) {
  e.section_type === `crosspromotesalepage` &&
    !e.sale_page_cross_promo_sales &&
    (e.sale_page_cross_promo_event_gid ||
      e.sale_page_cross_promo_clan_account_id ||
      e.sale_page_cross_promo_featured_app_tagid) &&
    ((e.sale_page_cross_promo_sales = [
      {
        event_gid: e.sale_page_cross_promo_event_gid,
        clan_account_id: e.sale_page_cross_promo_clan_account_id,
        featured_app_tagid: e.sale_page_cross_promo_featured_app_tagid,
      },
    ]),
    delete e.sale_page_cross_promo_event_gid,
    delete e.sale_page_cross_promo_clan_account_id,
    delete e.sale_page_cross_promo_featured_app_tagid);
}
function ju(e) {
  switch (e) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
      return !0;
  }
  return !1;
}
function Mu(e) {
  switch (e) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
    case `events`:
    case `sale_events`:
    case `contenthubspecials`:
      return !0;
  }
  return !1;
}
function Nu(e, t = !1) {
  return !e || !Mu(e.section_type)
    ? !1
    : t
      ? e.sale_tag_filter?.clauses?.length
        ? !0
        : !!e.smart_section
      : !!e.smart_section && e.smart_section_type != null;
}
function Pu(e) {
  return Nu(e) ? e?.smart_section_type : void 0;
}
var Fu = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function Iu(e) {
  e.sale_sections?.forEach((t, n) => {
    ((t.localized_label &&= j(t.localized_label, 32, null)),
      t.section_type === `trailercarousel` && (t.show_as_carousel = !1),
      Au(t),
      (e.sale_sections[n] = { ...Fu, ...t }));
  });
}
var Lu = {
    localized_subtitle: Array(32),
    localized_summary: Array(32),
    localized_title_image: Array(32),
    localized_capsule_image: Array(32),
    bSaleEnabled: !1,
    sale_show_creator: !1,
    sale_sections: [],
    sale_browsemore_text: ``,
    sale_browsemore_url: ``,
    sale_browsemore_color: ``,
    sale_browsemore_bgcolor: ``,
    localized_sale_header: Array(32),
    localized_sale_overlay: Array(32),
    localized_sale_product_banner: Array(32),
    localized_sale_product_mobile_banner: Array(32),
    localized_sale_logo: Array(32),
    sale_font: ``,
    sale_background_color: ``,
    sale_header_offset: 530,
    referenced_appids: [],
    ...Cu,
    ...Eu,
  },
  Ru = `old_announce_`;
function zu(e, t, n) {
  let r = (e) => t.includes(e);
  return r(`steam_award_nomination_request`)
    ? F(`#PartnerEvent_SteamAwardNominations`)
    : r(`steam_award_vote_request`)
      ? F(`#PartnerEvent_SteamAwardVoteRequest`)
      : r(`steam_game_festival_artist_statement`)
        ? F(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : r(`steam_game_festival_office_hour`)
          ? F(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : r(`steam_game_festival_broadcast`) ||
              (t.some((e) => e?.startsWith(`sale_nextfest_`)) && e == 11)
            ? F(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : r(`vo_marketing_message`) && n
              ? F(`#PartnerEvent_MM_MajorUpdate`)
              : Tu(e);
}
var Bu = [
    `workshop`,
    `patchnotes`,
    `contenthub`,
    `skip_megaphone`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
    `enable_steam_china`,
    `disable_steam_global`,
    `adult_only_content`,
    `stablechannel`,
    `betachannel`,
    `previewchannel`,
  ],
  Vu = [20, 31, 34],
  Hu = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  Uu = [m.k_ESteamRealmGlobal],
  Wu = [m.k_ESteamRealmChina],
  Gu = [m.k_ESteamRealmGlobal, m.k_ESteamRealmChina],
  Ku = [],
  Q = class e {
    constructor() {
      on(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new U();
    forumTopicGID = void 0;
    clanSteamIDOriginal = void 0;
    type = 1;
    appid = 0;
    name = new Map();
    description = new Map();
    timestamp_loc_updated = new Map();
    createTime = void 0;
    startTime = void 0;
    endTime = void 0;
    visibilityStartTime = void 0;
    visibilityEndTime = void 0;
    m_nBuildID = void 0;
    m_strBuildBranch = void 0;
    postTime = void 0;
    visibility_state = 0;
    broadcaster = void 0;
    jsondata = Lu;
    nCommentCount = 0;
    nVotesUp = 0;
    nVotesDown = 0;
    comment_type;
    gidfeature;
    gidfeature2;
    featured_app_tagid;
    bOldAnnouncement = !1;
    announcementClanSteamID = void 0;
    loadedAllLanguages = !1;
    bLoaded = !1;
    deleteInProgress = !1;
    vecTags = [];
    creator_steamid;
    last_update_steamid = void 0;
    rtime32_last_modified = void 0;
    rtime32_last_solr_search_col_updated = void 0;
    rtime32_last_local_modification = void 0;
    rtime32_moderator_reviewed = void 0;
    video_preview_type = void 0;
    video_preview_id = void 0;
    has_live_stream;
    live_stream_viewer_count;
    m_overrideCurrentDay = void 0;
    fnGetLocalizedGroupImages;
    BIsPartnerEvent() {
      return !this.bOldAnnouncement && !!this.GID;
    }
    static FromJSON(t) {
      let n = new e(),
        i = JSON.parse(t);
      return (
        Object.assign(n, i),
        (n.name = new Map(i.name)),
        (n.description = new Map(i.description)),
        (n.vecTags = [...(i.vecTags ?? i.tags ?? [])]),
        (n.clanSteamID = new U(i.clanSteamID)),
        r(
          n.clanSteamID && n.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + n.clanSteamID.ConvertTo64BitString(),
        ),
        i.broadcaster &&
          ((n.broadcaster = new U(i.broadcaster)),
          r(
            n.broadcaster && n.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              n.broadcaster.ConvertTo64BitString(),
          )),
        Iu(n.jsondata),
        n
      );
    }
    static FromCClanEventData(t, n) {
      let r = new e();
      ((r.GID = t.gid),
        (r.clanSteamID = new U(t.clan_steamid)),
        r.name.set(n, t.event_name ?? ``),
        (r.type = t.event_type),
        (r.appid = t.appid ?? 0),
        (r.startTime = t.rtime32_start_time),
        (r.endTime = t.rtime32_end_time),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.creator_steamid = t.creator_steamid),
        (r.last_update_steamid = t.last_update_steamid),
        (r.jsondata = JSON.parse(t.jsondata ?? `{}`)),
        Iu(r.jsondata),
        (r.rtime32_last_local_modification = t.rtime32_last_modified),
        (r.visibility_state = t.published
          ? t.hidden
            ? t.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (r.createTime = t.rtime_created),
        (r.m_nBuildID = t.build_id),
        (r.m_strBuildBranch = t.build_branch),
        (r.visibilityStartTime = t.rtime32_visibility_start),
        (r.visibilityEndTime = t.rtime32_visibility_end),
        (r.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
        (r.featured_app_tagid = t.featured_app_tagid),
        t.broadcaster_accountid &&
          (r.broadcaster = U.InitFromAccountID(
            t.broadcaster_accountid,
            b.EUNIVERSE,
          )),
        (r.AnnouncementGID = t.announcement_body?.gid ?? `0`));
      let i = t.clan_steamid_original;
      return (
        i
          ? (r.clanSteamIDOriginal = new U(i))
          : t.announcement_body?.clanid &&
            (r.clanSteamIDOriginal = U.InitFromClanID(
              Number(t.announcement_body.clanid),
              b.EUNIVERSE,
            )),
        (r.postTime = t.announcement_body?.posttime),
        (r.forumTopicGID = t.forum_topic_id),
        r.name.set(n, t.announcement_body?.headline ?? ``),
        r.description.set(n, t.announcement_body?.body ?? ``),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.vecTags = [...(t.announcement_body?.tags ?? [])]),
        (r.forumTopicGID = t.announcement_body?.forum_topic_id),
        (r.nVotesUp = t.announcement_body?.voteupcount ?? 0),
        (r.nVotesDown = t.announcement_body?.votedowncount ?? 0),
        r
      );
    }
    toJSON(e) {
      let t = {};
      return (
        Object.assign(t, this),
        (t.name = Array.from(this.name)),
        (t.description = Array.from(this.description)),
        (t.vecTags = Array.from(this.vecTags)),
        (t.tags = t.vecTags),
        (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
        this.broadcaster &&
          (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
        t
      );
    }
    clone(t = !1) {
      let n = new e();
      if (
        ((n.GID = this.GID),
        (n.AnnouncementGID = this.AnnouncementGID),
        (n.clanSteamID = this.clanSteamID),
        (n.clanSteamIDOriginal = this.clanSteamIDOriginal),
        (n.bOldAnnouncement = this.bOldAnnouncement),
        (n.nCommentCount = this.nCommentCount),
        (n.nVotesUp = this.nVotesUp),
        (n.nVotesDown = this.nVotesDown),
        (n.forumTopicGID = this.forumTopicGID),
        (n.comment_type = this.comment_type),
        (n.gidfeature = this.gidfeature),
        (n.gidfeature2 = this.gidfeature2),
        (n.featured_app_tagid = this.featured_app_tagid),
        (n.creator_steamid = this.creator_steamid),
        (n.last_update_steamid = this.last_update_steamid),
        (n.rtime32_last_modified = this.rtime32_last_modified),
        (n.rtime32_last_solr_search_col_updated =
          this.rtime32_last_solr_search_col_updated),
        (n.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
        (n.type = this.type),
        (n.appid = this.appid),
        (n.name = new Map()),
        this.name.forEach((e, t) => {
          n.name.set(t, e);
        }),
        (n.description = new Map()),
        this.description.forEach((e, t) => {
          n.description.set(t, e);
        }),
        (n.timestamp_loc_updated = new Map()),
        this.timestamp_loc_updated.forEach((e, t) => {
          n.timestamp_loc_updated.set(t, e);
        }),
        (n.createTime = this.createTime ?? 0),
        (n.startTime = this.startTime),
        (n.endTime = this.endTime),
        (n.visibilityStartTime = this.visibilityStartTime),
        (n.visibilityEndTime = this.visibilityEndTime),
        (n.postTime = this.postTime),
        (n.visibility_state = this.visibility_state),
        (n.loadedAllLanguages = this.loadedAllLanguages),
        (n.bLoaded = this.bLoaded),
        (n.broadcaster = this.broadcaster
          ? new U(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (n.vecTags = []),
        t
          ? ((n.m_nBuildID = this.m_nBuildID),
            (n.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((e) => n.vecTags.push(e)))
          : this.vecTags.forEach((e) => {
              Bu.includes(e) && n.vecTags.push(e);
            }),
        n.jsondata.email_setting)
      ) {
        let e = 100;
        for (let t of n.jsondata.email_setting.sections)
          t.unique_id || ((t.unique_id = `email_section_${e}`), e++);
      }
      return n;
    }
    GetLastReferencedSaleDayFromCapsules(e, t) {
      let n = t;
      return (
        e?.forEach((e) => {
          e.visibility_index !== void 0 &&
            (n =
              n === void 0
                ? e.visibility_index
                : Math.max(n, e.visibility_index));
        }),
        n
      );
    }
    GetLastReferencedSaleDay() {
      let e;
      for (let t of this.GetSaleSections())
        if (t.section_type === `tabs`) {
          if ((t.tabs?.length ?? 0) > 0)
            for (let n of t.tabs ?? [])
              e = this.GetLastReferencedSaleDayFromCapsules(n.capsules, e);
        } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
      return (
        (this.jsondata.sale_num_headers ?? 0) > 1 &&
          (e == null || e < (this.jsondata.sale_num_headers ?? 0)) &&
          (e = this.jsondata.sale_num_headers),
        e
      );
    }
    GetDayIndexFromEventStart(e = Cn()) {
      let t = 0;
      (this.startTime !== void 0 &&
        e >= this.startTime &&
        (t = Math.floor((e - this.startTime) / 86400)),
        this.m_overrideCurrentDay !== void 0 &&
          this.m_overrideCurrentDay >= 0 &&
          (t = this.m_overrideCurrentDay));
      let n = this.GetLastReferencedSaleDay() || 0;
      return Math.min(t, n);
    }
    GetNameWithFallback(e) {
      let t = P.GetELanguageFallback(e);
      return this.name.get(e) || this.name.get(t);
    }
    BInRealmGlobal() {
      return !this.BHasTag(`disable_steam_global`);
    }
    BInRealmChina() {
      return this.BHasTag(`enable_steam_china`);
    }
    BIsLanguageValidForRealms(e) {
      return !!(
        (this.BInRealmGlobal() &&
          P.IsELanguageValidInRealm(e, m.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          P.IsELanguageValidInRealm(e, m.k_ESteamRealmChina))
      );
    }
    GetImgArray(e) {
      let t = [];
      if (
        ((e === `background` || e == `localized_title_image`) &&
          (t = this.jsondata.localized_title_image),
        e === `capsule`)
      )
        t = this.jsondata.localized_capsule_image;
      else if (e === `spotlight`) t = this.jsondata.localized_spotlight_image;
      else if (e === `email_full` || e === `email_centered`)
        t = this.jsondata.email_setting
          ? this.jsondata.email_setting.sections[0].localized_image
          : [];
      else if (e === `broadcast_left`)
        t = this.jsondata.localized_broadcast_left_image;
      else if (e === `broadcast_right`)
        t = this.jsondata.localized_broadcast_right_image;
      else if (e === `sale_header`) {
        if ((this.jsondata.sale_num_headers ?? 0) > 1) {
          let e = Math.min(
            (this.jsondata.sale_num_headers ?? 0) - 1,
            this.GetDayIndexFromEventStart(),
          );
          t = this.jsondata.localized_per_day_sales_header?.[e];
        } else t = this.jsondata.localized_sale_header;
      } else
        e === `sale_logo`
          ? (t = this.jsondata.localized_sale_logo)
          : e === `sale_overlay`
            ? (t = this.jsondata.localized_sale_overlay)
            : e === `sale_cross_promo_logo`
              ? (t = this.jsondata.localized_sale_cross_promo_logo_image)
              : e === `sale_secondary_background`
                ? (t = this.jsondata.localized_sale_secondary_background_image)
                : Gl.includes(e)
                  ? (t = this.fnGetLocalizedGroupImages?.())
                  : e === `product_banner`
                    ? (t = this.jsondata.localized_sale_product_banner)
                    : e === `product_mobile_banner`
                      ? (t = this.jsondata.localized_sale_product_mobile_banner)
                      : e === `bestofyear_banner`
                        ? (t = this.jsondata.localized_bestofyear_banner)
                        : e === `bestofyear_banner_mobile`
                          ? (t =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : e === `localized_store_app_spotlight`
                            ? (t = this.jsondata.localized_store_app_spotlight)
                            : e === `localized_store_app_spotlight_mobile` &&
                              (t =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
      return t;
    }
    GetImageURL(e, t = 0, n = Wl.full) {
      let r = this.GetImgArray(e),
        i = r && r.length > t && r[t] != null;
      return i && r[t]?.startsWith(`http`)
        ? r[t]
        : i
          ? Ul.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? ``, n)
          : void 0;
    }
    GetImageHash(e, t = 0) {
      let n = this.GetImgArray(e);
      return n && n.length > t && n[t] != null
        ? n[t].substr(0, n[t].length - 4)
        : null;
    }
    GetImageHashAndExt(e, t = 0) {
      let n = this.GetImgArray(e);
      return n && n.length > t && n[t] != null ? n[t] : null;
    }
    BHasSomeImage(e) {
      let t = this.GetImgArray(e);
      return !!t && t.some((e) => e != null && e.length > 0);
    }
    BHasImage(e, t) {
      let n = this.GetImgArray(e);
      return !!n && n.length > t && n[t] != null;
    }
    BHasAnnouncementGID() {
      return (
        this.AnnouncementGID !== null &&
        this.AnnouncementGID !== void 0 &&
        this.AnnouncementGID.length > 1
      );
    }
    GetAnnouncementGID() {
      return this.AnnouncementGID;
    }
    BHasForumTopicGID() {
      return (
        this.forumTopicGID !== null &&
        this.forumTopicGID !== void 0 &&
        this.forumTopicGID.length > 1
      );
    }
    GetForumTopicURL(e) {
      return this.BHasForumTopicGID()
        ? this.appid
          ? b.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : e
            ? b.COMMUNITY_BASE_URL +
              `groups/` +
              e +
              `/eventcomments/` +
              this.forumTopicGID
            : b.COMMUNITY_BASE_URL +
              `gid/` +
              this.clanSteamID.ConvertTo64BitString() +
              `/eventcomments/` +
              this.forumTopicGID
        : ``;
    }
    GetDiscussionURL(e) {
      return this.BHasForumTopicGID()
        ? this.GetForumTopicURL(e)
        : this.GetLegacyAnnouncementCommentsURL();
    }
    GetLegacyAnnouncementCommentsURL() {
      let e = this.clanSteamIDOriginal ?? this.clanSteamID;
      return !this.BHasAnnouncementGID() || !e || !e.BIsValid()
        ? ``
        : b.COMMUNITY_BASE_URL +
            `gid/` +
            e.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(e = Cn()) {
      return e < (this.startTime ?? 0);
    }
    BHasEventEnded(e = Cn()) {
      return (this.endTime ?? 0) < e;
    }
    UpdateVoteCount(e, t) {
      e == `up`
        ? (this.nVotesUp = g(this.nVotesUp + t, 0, 2 ** 53 - 1))
        : e == `down` &&
          (this.nVotesDown = g(this.nVotesDown + t, 0, 2 ** 53 - 1));
    }
    GetImageFromBeginningOfDescription(e, t) {
      let n = this.GetDescriptionWithFallback(e);
      if (n) {
        let e = n.indexOf(`[img]`);
        if (e !== -1 && e < t) {
          e += 5;
          let t = n.indexOf(`[/img]`, e);
          if (t != -1) {
            let r = n.substring(e, t).trim();
            if (r.length != 0) return Ul.ReplacementTokenToClanImageURL(r);
          }
        }
      }
      return null;
    }
    GetAppIDOrReferenceAppID() {
      return this.appid ? this.appid : this.jsondata?.referenced_appids?.[0];
    }
    BImageNeedScreenshotFallback(e, t) {
      let n = this.GetImageURL(e, t);
      if (!n || n.length == 0) {
        let r = P.GetELanguageFallback(t);
        t != r && (n = this.GetImageURL(e, r));
      }
      return !n || n.length == 0;
    }
    GetDescriptionWithFallback(e) {
      let t = P.GetELanguageFallback(e);
      return this.description.get(e) || this.description.get(t);
    }
    BIsImageSafeForAllAges(e, t, n = {}) {
      let r = P.GetELanguageFallback(t);
      return (
        this.GetImageURL(e, t) != null ||
        (t != r && this.GetImageURL(e, r) != null) ||
        (this.appid && n.bAppHasAgeSafeScreenshots) ||
        (!this.appid &&
          n.clanInfo &&
          ((n.clanInfo.is_creator_home && !n.clanInfo.is_ogg) ||
            n.clanInfo.is_curator))
      );
    }
    BIsVisibleEvent(e = Cn()) {
      let t = Math.floor(e);
      return (
        this.visibility_state == 3 ||
        (this.visibility_state == 2 &&
          t > (this.visibilityStartTime ?? 0) &&
          ((this.visibilityEndTime ?? 0) < 10 ||
            t < (this.visibilityEndTime ?? 0)))
      );
    }
    BIsStagedEvent() {
      return this.visibility_state == 1;
    }
    BIsUnlistedEvent() {
      return this.visibility_state == 3;
    }
    GetStartTimeAndDateUnixSeconds() {
      return this.startTime ?? 0;
    }
    GetEndTimeAndDateUnixSeconds() {
      return this.endTime ?? 0;
    }
    GetPostTimeAndDateUnixSeconds() {
      return this.postTime ?? 0;
    }
    GetVisibilityStartTimeAndDateUnixSeconds() {
      return this.visibilityStartTime ?? 0;
    }
    BIsEventActionEnabled(e = Cn()) {
      return (
        !!this.jsondata.action_end_time &&
        (this.jsondata.action_end_time > e ||
          (this.jsondata.action_end_time == 1575396e3 && 1606845600 > e))
      );
    }
    BHasSubTitle(e) {
      if (
        !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        e >= this.jsondata.localized_subtitle.length
      )
        return !1;
      let t = this.jsondata.localized_subtitle[e];
      return t != null && t != ``;
    }
    GetSubTitle(e) {
      return !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        e >= this.jsondata.localized_subtitle.length
        ? ``
        : this.jsondata.localized_subtitle[e] || ``;
    }
    GetSubTitleWithLanguageFallback(e) {
      return this.jsondata
        ? I.GetWithFallback(this.jsondata.localized_subtitle, e)
        : ``;
    }
    GetSubTitleWithSummaryFallback(t) {
      return (
        I.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
      );
    }
    GetSummaryWithFallback(t, n) {
      return (
        I.GetWithFallback(this.jsondata?.localized_summary, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t), n)
      );
    }
    GetSummary(e) {
      return I.Get(this.jsondata?.localized_summary ?? [], e);
    }
    BHasSummary(e) {
      return !!this.GetSummary(e);
    }
    static GenerateSummaryFromText(e, t) {
      return !e || e.trim().length == 0
        ? ``
        : ((e = el(e, [
            `img`,
            `h1`,
            `h2`,
            `h3`,
            `spoiler`,
            `table`,
            `previewyoutube`,
            `looping_media`,
            `roomeffect`,
            `sticker`,
          ])),
          (e = tl(e, [`p`], ` `)),
          (e = tl(e)),
          (e = gn(e)),
          hn(e, t || 180));
    }
    BHasTag(e) {
      return this.vecTags.indexOf(e) != -1;
    }
    BHasTagStartingWith(e) {
      return this.vecTags.some((t) => t?.startsWith(e));
    }
    BIsOGGEvent() {
      return !!this.appid && this.appid > 0;
    }
    BShowLibrarySpotlight(e) {
      if (!e) return !!this.jsondata.library_spotlight;
      if (!this.jsondata.library_spotlight || Vu.includes(this.type)) return !1;
      let t = new Date().getTime() / 1e3;
      return !(
        (Hu.includes(this.type) && this.endTime && t > this.endTime) ||
        (this.startTime && t > this.startTime + We.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(e, t = Cn()) {
      if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
      let n = this.endTime ? this.endTime : t + 3600;
      return (
        this.BHasBroadcastEnabled() &&
        !!this.jsondata.broadcast_whitelist &&
        this.jsondata.broadcast_whitelist.length > 0 &&
        (e || ((this.startTime ?? 0) - 600 <= t && t < n))
      );
    }
    BHasBroadcastForceBanner() {
      return !!this.jsondata.broadcast_force_banner;
    }
    BSaleShowBroadcastAtTopOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some((e) => e.section_type == `broadcast`)
      );
    }
    BSaleShowCuratorRecommendationAtBottomOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some(
          (e) => e.section_type == `curator_recommendation`,
        )
      );
    }
    GetBroadcastChatVisibility() {
      return this.jsondata.broadcastChatSetting || `hide`;
    }
    GetBroadcastTitle(e) {
      return (
        I.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
        F(
          this.jsondata.default_broadcast_title ??
            `#Broadcast_default_title_dev`,
        )
      );
    }
    GetBroadcastWhitelist() {
      return this.jsondata.broadcast_whitelist ?? [];
    }
    GetBroadcastWhitelistAsSteamIDs() {
      return (
        this.jsondata.broadcast_whitelist?.map((e) =>
          U.InitFromAccountID(e, b.EUNIVERSE).ConvertTo64BitString(),
        ) ?? []
      );
    }
    BIsBroadcastAccountIDWhiteListed(e) {
      return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
    }
    BHasSaleEnabled() {
      return !!this.jsondata.bSaleEnabled;
    }
    BHasSaleVanity() {
      return !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id;
    }
    GetSaleVanity() {
      return this.jsondata.sale_vanity_id ?? ``;
    }
    BHasSaleUpdateLandingPageVanity() {
      return (
        !!this.jsondata.bSaleEnabled &&
        !!this.jsondata.sale_update_landing_page_vanity_id
      );
    }
    GetSaleUpdateLandingPageVanity() {
      return this.jsondata.sale_update_landing_page_vanity_id ?? ``;
    }
    GetSaleURL(e) {
      if (!this.jsondata.bSaleEnabled) return null;
      if (this.jsondata.sale_update_landing_page_vanity_id)
        return (
          b.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          b.STORE_BASE_URL +
          `newshub/` +
          (this.appid
            ? `app/` + this.appid
            : `group/` + this.clanSteamID.GetAccountID()) +
          `/view/` +
          this.GID
        );
      if (this.BUsesContentHubForItemSource()) {
        let e = this.jsondata.source_content_hub;
        return e
          ? typeof e == `string`
            ? b.STORE_BASE_URL + `category/` + e
            : e.type == `category`
              ? b.STORE_BASE_URL + `category/` + e.category
              : e.type == `tags`
                ? b.STORE_BASE_URL + `tags/` + (Xe() || `en`) + `/` + e.tagid
                : e.type == `freetoplay`
                  ? b.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : e.type == `earlyaccess`
                    ? b.STORE_BASE_URL + `genre/Early%20Access/`
                    : b.STORE_BASE_URL + e.type
          : b.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let t = this.clanSteamID.GetAccountID(),
        n = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        r = this.GetSaleVanity();
      return e && Xl(t, n) ? e + `sale/` + r : b.STORE_BASE_URL + Yl(t, r, n);
    }
    BHasEmailEnabled() {
      return (
        !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
      );
    }
    GetSaleSections() {
      return this.jsondata.sale_sections ?? [];
    }
    GenerateDynamicSaleSections(e, t, n, r, i, a) {
      let o = [],
        s = {
          section_type: `unselected_empty`,
          capsules: [],
          events: [],
          links: [],
          localized_label: [],
          default_label: ``,
        },
        c = Du + 10;
      return (
        e &&
          o.push({
            ...s,
            section_type: `footer_self_creator_home`,
            unique_id: c++,
            curator_clan_id: this.clanSteamID.GetAccountID(),
          }),
        t &&
          o.push({ ...s, section_type: `footer_browse_more`, unique_id: c++ }),
        r &&
          o.push(this.GenerateDynamicCreatorHomeItemBrowserSection(c++, s, a)),
        n &&
          o.push({
            ...s,
            section_type: `footer_default_social_share`,
            unique_id: c++,
          }),
        i && o.push({ ...s, section_type: `nextfest_header`, unique_id: c++ }),
        o
      );
    }
    GetSaleSectionIncludingFooterSections(e = 0) {
      let t = this.jsondata?.sale_show_creator,
        n = this.jsondata.sale_browse_more_button,
        r =
          this.GetSaleSectionsByType(`social_share`).length == 0 &&
          !this.jsondata.sale_default_social_media_disabled,
        i = this.GetEventType() == 36,
        a = this.BShowNextFestHeader(!0);
      return t || n || r || i || a
        ? [
            ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, a, e),
            ...this.GetSaleSections(),
            ...this.GenerateDynamicSaleSections(!!t, !!n, r, i, !1, e),
          ]
        : this.GetSaleSections();
    }
    GetSaleSectionByID(e, t = 0) {
      return e > 99999
        ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, t).find(
            (t) => t.unique_id == e,
          )
        : this.jsondata.sale_sections?.find((t) => t.unique_id == e);
    }
    GetSaleSectionCount() {
      return this.jsondata.sale_sections?.length ?? 0;
    }
    GetSaleSectionsByType(e) {
      return (
        this.jsondata.sale_sections?.filter((t) => t.section_type == e) ?? []
      );
    }
    GetLastUpdateTime() {
      return this.rtime32_last_modified ?? 0;
    }
    GetLastUpdaterSteamIDStr() {
      return this.last_update_steamid ?? ``;
    }
    GetSaleSectionFirstMatchByType(e) {
      let t = this.jsondata.sale_sections?.length ?? 0;
      if (t != 0) {
        for (let n = 0; n < t; ++n)
          if (this.jsondata.sale_sections[n].section_type === e)
            return this.jsondata.sale_sections[n];
      }
    }
    static AccumulateCapsuleListIDs(e, t, n, r) {
      e &&
        e.forEach((e) => {
          e && e.type && t.has(e.type) && (!r || r(e.id)) && n.add(e.id);
        });
    }
    GetSaleItemOfType(t, n) {
      if (!this.jsondata.sale_sections) return new Set();
      let i = new Set(t),
        a = new Set();
      return (
        r(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((t) => {
          e.AccumulateCapsuleListIDs([t.capsule], i, a, n);
        }),
        this.jsondata.sale_sections.forEach((t) => {
          if (ju(t.section_type))
            e.AccumulateCapsuleListIDs(t.capsules, i, a, n);
          else if (t.section_type === `tabs` && t.tabs)
            for (let r of t.tabs)
              e.AccumulateCapsuleListIDs(r.capsules, i, a, n);
        }),
        a
      );
    }
    GetSaleItemCountOfType(e, t) {
      return this.GetSaleItemOfType(e, t).size;
    }
    GetSaleFeaturedAppsCount(e) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        e,
      );
    }
    GetSaleFeaturedAppsAndDemosCount(e) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        e,
      );
    }
    GetSaleFeaturedBundlesCount(e) {
      return this.GetSaleItemCountOfType([`bundle`], e);
    }
    GetSaleFeaturedPackagesCount(e) {
      return this.GetSaleItemCountOfType([`sub`], e);
    }
    GetSaleFeaturedApps(e) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        e,
      );
    }
    GetSaleFeaturedAppsAndDemos(e) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        e,
      );
    }
    GetSaleFeaturedBundles(e) {
      return this.GetSaleItemOfType([`bundle`], e);
    }
    GetSaleFeaturedPackages(e) {
      return this.GetSaleItemOfType([`sub`], e);
    }
    GetTaggedItems() {
      return this.jsondata.tagged_items || [];
    }
    BHasScheduleEnabled() {
      return this.jsondata.bScheduleEnabled;
    }
    GetEventType() {
      return this.type;
    }
    GetEventTypeAsString() {
      return Tu(this.type);
    }
    GetCategoryAsString(e) {
      return zu(this.type, this.vecTags, e);
    }
    GetAllTags() {
      return this.vecTags;
    }
    BMatchesAllTags(e) {
      let t = !0;
      return (
        e?.forEach((e) => {
          this.vecTags.includes(e) || (t = !1);
        }),
        t
      );
    }
    BAllowedSteamStoreSpotlight() {
      return !!this.jsondata.store_spotlight;
    }
    BHasLibaryHomeSpotlight() {
      return !!this.jsondata.library_home_spotlight;
    }
    GetSteamAwardCategory() {
      return this.jsondata.steam_award_category_suggestion ?? 0;
    }
    GetSteamAwardNomineeCategories() {
      return this.jsondata.steam_award_category_voteids ?? [];
    }
    BIsLockedToGameOwners() {
      return !!this.jsondata.ownership_requirement_info?.bLockedToAppOwners;
    }
    GetRequiredAppIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
        : [];
    }
    GetRequiredPackageIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
        : [];
    }
    BUseSubscriptionLayout() {
      return !!this.jsondata.sale_use_subscription_layout;
    }
    BIsLockedToPartnerAppRights() {
      return !!this.jsondata.app_right_requirement_info
        ?.bLockedToPartnerAppRights;
    }
    GetRequiredPartnerAppRights() {
      return this.jsondata.app_right_requirement_info;
    }
    GetValveAccessLog() {
      return Array.isArray(this.jsondata.valve_access_log)
        ? this.jsondata.valve_access_log
        : [];
    }
    BUsesContentHubForItemSource() {
      return (
        this.jsondata.item_source_type === 1 &&
        !!this.jsondata.source_content_hub
      );
    }
    GetContentHubType() {
      if (this.BUsesContentHubForItemSource())
        return this.jsondata.source_content_hub == null
          ? `games`
          : typeof this.jsondata.source_content_hub == `string`
            ? `category`
            : this.jsondata.source_content_hub.type;
    }
    GetContentHubCategory() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? this.jsondata.source_content_hub
          : this.jsondata.source_content_hub.category;
    }
    GetContentHubTag() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? 0
          : this.jsondata.source_content_hub.tagid;
    }
    GetContentHub() {
      return typeof this.jsondata.source_content_hub == `string`
        ? { type: `category`, category: this.jsondata.source_content_hub }
        : this.jsondata.source_content_hub;
    }
    BContentHubDiscountedOnly() {
      return !!this.jsondata.content_hub_discounted_only;
    }
    BIsBackgroundImageGroupingEnabled() {
      return !!this.jsondata.sale_background_img_groups?.enabled;
    }
    GetSalePageGroupDefinition() {
      return this.jsondata.sale_background_img_groups;
    }
    GetSalePageBackgroundImageGroupCount() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
        : 0;
    }
    GetAllSalePageGroups() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups
        : [];
    }
    GetSalePageBackgroundGroup(e) {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups?.[e]
        : void 0;
    }
    GetIncludedRealmList() {
      let e = this.BInRealmGlobal(),
        t = this.BInRealmChina();
      return (
        r(
          e || t,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        e && t ? Gu : e ? Uu : t ? Wu : Ku
      );
    }
    BIsValidForRealm(e) {
      return this.GetIncludedRealmList().includes(e);
    }
    BIsNextFest(e = !1) {
      let t = this.jsondata.sale_vanity_id?.toLowerCase(),
        n = new U(this.clanSteamID).GetAccountID();
      return !(
        !t ||
        n != 39049601 ||
        !t.startsWith(`nextfest`) ||
        (e && (t.endsWith(`preview`) || t.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(e) {
      return e && k.is_valve_email
        ? this.BIsNextFest(!1)
        : this.BIsNextFest(!0) &&
            !!this.startTime &&
            this.startTime > new Date(`2026-03-01`).getTime() / 1e3;
    }
    GenerateDynamicCreatorHomeItemBrowserSection(e, t, n) {
      let r = n >= 7;
      return {
        ...t,
        section_type: `sale_item_browser`,
        unique_id: e,
        item_browse_section_data: {
          enable_search: !0,
          tabs: [
            `all_released`,
            `popularpurchased`,
            `all_upcoming`,
            `discounted`,
          ],
          prefer_assets_without_overrides: !1,
        },
        prefer_assets_without_overrides: !1,
        enable_faceted_browsing: r,
        min_capsule_matches_for_facet_values: 5,
        max_facet_values_for_facet: 5,
        background_gradient_top: `#0000006b`,
        background_gradient_bottom: `#0000006b`,
        facet_sort_order: 1,
        cap_item_count: 24,
        show_more_count: 48,
        facet_auto_generate_options: {
          only_facets: [
            { loc_token: `#App_Taxonomy_Survey_QSuperGenreTitle` },
            {
              loc_token: `#AppTypeLabelTitle`,
              only_values: [
                `#AppTypeLabel_game`,
                `#AppTypeLabel_dlc`,
                `#AppTypeLabel_demo`,
                `#AppTypeLabel_music`,
              ],
              initially_selected_values: [`#AppTypeLabel_game`],
            },
            { loc_token: `#Sale_Preferences` },
          ],
          initially_expanded_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
          prioritized_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
        },
      };
    }
  };
(w([H], Q.prototype, `GID`, void 0),
  w([H], Q.prototype, `AnnouncementGID`, void 0),
  w([H], Q.prototype, `forumTopicGID`, void 0),
  w([H], Q.prototype, `type`, void 0),
  w([H], Q.prototype, `appid`, void 0),
  w([H], Q.prototype, `name`, void 0),
  w([H], Q.prototype, `description`, void 0),
  w([H], Q.prototype, `timestamp_loc_updated`, void 0),
  w([H], Q.prototype, `startTime`, void 0),
  w([H], Q.prototype, `endTime`, void 0),
  w([H], Q.prototype, `visibilityStartTime`, void 0),
  w([H], Q.prototype, `visibilityEndTime`, void 0),
  w([H], Q.prototype, `m_nBuildID`, void 0),
  w([H], Q.prototype, `m_strBuildBranch`, void 0),
  w([H], Q.prototype, `postTime`, void 0),
  w([H], Q.prototype, `visibility_state`, void 0),
  w([H], Q.prototype, `broadcaster`, void 0),
  w([H], Q.prototype, `jsondata`, void 0),
  w([H], Q.prototype, `nCommentCount`, void 0),
  w([H], Q.prototype, `nVotesUp`, void 0),
  w([H], Q.prototype, `nVotesDown`, void 0),
  w([H], Q.prototype, `bOldAnnouncement`, void 0),
  w([H], Q.prototype, `announcementClanSteamID`, void 0),
  w([H], Q.prototype, `loadedAllLanguages`, void 0),
  w([H], Q.prototype, `bLoaded`, void 0),
  w([H], Q.prototype, `deleteInProgress`, void 0),
  w([H], Q.prototype, `vecTags`, void 0),
  w([H], Q.prototype, `last_update_steamid`, void 0),
  w([H], Q.prototype, `rtime32_last_modified`, void 0),
  w([H], Q.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  w([H], Q.prototype, `rtime32_last_local_modification`, void 0),
  w([H], Q.prototype, `rtime32_moderator_reviewed`, void 0),
  w([H], Q.prototype, `video_preview_type`, void 0),
  w([H], Q.prototype, `video_preview_id`, void 0),
  w([H], Q.prototype, `m_overrideCurrentDay`, void 0));
var qu = `JuZBiq95wYE-`;
function Ju(e) {
  return (
    (e.gid == null || e.gid == null || e.gid == `0`) &&
    !!e.announcement_body &&
    e.announcement_body.gid != `0`
  );
}
function Yu(e) {
  return Ju(e) ? Ru + e.announcement_body?.gid : e.gid;
}
function Xu(e, t) {
  let n = new Q();
  if (
    ((n.clanSteamID = e),
    r(
      n.clanSteamID && n.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        n.clanSteamID.ConvertTo64BitString() +
        ` ` +
        C.EUNIVERSE,
    ),
    (n.GID = Yu(t)),
    (n.bOldAnnouncement = Ju(t)),
    (n.appid = t.appid ?? 0),
    (n.createTime = t.rtime_created),
    (n.startTime = t.rtime32_start_time),
    (n.endTime = t.rtime32_end_time),
    (n.visibilityStartTime = t.rtime32_visibility_start),
    (n.visibilityEndTime = t.rtime32_visibility_end),
    (n.loadedAllLanguages = !1),
    (n.type = t.event_type ?? 1),
    (n.nVotesUp = t.votes_up ?? 0),
    (n.nVotesDown = t.votes_down ?? 0),
    (n.comment_type = t.comment_type),
    (n.gidfeature = t.gidfeature),
    (n.gidfeature2 = t.gidfeature2),
    (n.featured_app_tagid = t.featured_app_tagid),
    (n.vecTags = []),
    (n.creator_steamid = t.creator_steamid),
    (n.last_update_steamid = t.last_update_steamid),
    (n.rtime32_last_modified = t.rtime32_last_modified),
    (n.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
    (n.video_preview_type = t.video_preview_type),
    (n.video_preview_id = t.video_preview_id),
    (n.has_live_stream = t.has_live_stream),
    (n.live_stream_viewer_count = t.live_stream_viewer_count),
    (n.m_nBuildID = t.build_id),
    (n.m_strBuildBranch = t.build_branch),
    t.announcement_body)
  ) {
    let e = t.announcement_body;
    ((n.AnnouncementGID = e.gid),
      n.name.set(e.language, e.headline),
      n.description.set(e.language, e.body),
      n.timestamp_loc_updated.clear(),
      (n.forumTopicGID = e.forum_topic_id),
      (n.nCommentCount = e.commentcount),
      (n.postTime = e.posttime),
      n.bOldAnnouncement && !e.hidden && (n.startTime = e.posttime),
      (n.announcementClanSteamID = new U(e.clanid)),
      e.tags && e.tags.length > 0 && e.tags.forEach((e) => n.vecTags.push(e)),
      !n.rtime32_last_solr_search_col_updated &&
        n.rtime32_last_modified &&
        ((n.rtime32_last_solr_search_col_updated = n.rtime32_last_modified),
        (n.rtime32_last_modified = e.updatetime)));
  } else
    ((n.AnnouncementGID = `0`),
      (n.forumTopicGID = t.forum_topic_id),
      n.name.clear(),
      n.description.clear(),
      n.timestamp_loc_updated.clear(),
      (n.postTime = t.rtime32_start_time),
      (n.nCommentCount = t.comment_count ?? 0),
      n.name.set(0, t.event_name ?? ``),
      n.description.set(0, t.event_notes ?? ``));
  t.broadcaster_accountid && (n.broadcaster = new U(t.broadcaster_accountid));
  let i = Lu;
  try {
    n.jsondata = { ...i, ...(t.jsondata ? JSON.parse(t.jsondata) : void 0) };
  } catch (e) {
    let t = pn(e);
    throw (
      console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          t.strErrorMsg,
        t,
      ),
      e
    );
  }
  if (
    ((n.jsondata.localized_capsule_image = j(
      n.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_title_image = j(
      n.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_subtitle = j(
      n.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (n.jsondata.localized_summary = j(
      n.jsondata.localized_summary || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_title = j(
      n.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_left_image = j(
      n.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_right_image = j(
      n.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_header = j(
      n.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_overlay = j(
      n.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_banner = j(
      n.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_mobile_banner = j(
      n.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_logo = j(
      n.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    n.jsondata.sale_num_headers !== void 0 &&
      n.jsondata.localized_per_day_sales_header)
  )
    for (let e = 0; e < n.jsondata.sale_num_headers; ++e)
      n.jsondata.localized_per_day_sales_header[e] = j(
        n.jsondata.localized_per_day_sales_header[e],
        32,
        null,
      );
  return (
    Iu(n.jsondata),
    n.jsondata.email_setting &&
      n.jsondata.email_setting.sections &&
      n.jsondata.email_setting.sections.forEach((e) => {
        (e.localized_headline !== void 0 &&
          e.localized_headline !== null &&
          (e.localized_headline = j(e.localized_headline, 32, null)),
          e.localized_body !== void 0 &&
            e.localized_body !== null &&
            (e.localized_body = j(e.localized_body, 32, null)),
          e.localized_image !== void 0 &&
            e.localized_image !== null &&
            (e.localized_image = j(e.localized_image, 32, null)));
      }),
    n.jsondata.localized_title_image.forEach((e, t) => {
      if (e != null && e.substr(0, 4) == `http`) {
        let r = e.lastIndexOf(`/`),
          i = e.substr(r + 1);
        n.jsondata.localized_title_image[t] = i;
      }
    }),
    (n.bLoaded = !0),
    (n.visibility_state = t.published
      ? t.unlisted
        ? ku.k_EEventStateUnlisted
        : t.hidden
          ? ku.k_EEventStateStaged
          : ku.k_EEventStateVisible
      : ku.k_EEventStateUnpublished),
    n
  );
}
function Zu(e) {
  let t = P.GetELanguageFallback(e);
  return e == t ? `${e}` : `${e}_${t}`;
}
function Qu(e) {
  return e ? Xu(new U(e.clanSteamID64), e.event) : null;
}
async function $u(e, t) {
  let n = new URLSearchParams();
  (e.clanAccountID && n.set(`clan_accountid`, String(e.clanAccountID)),
    e.appid && n.set(`appid`, String(e.appid)),
    e.eventGID && n.set(`event_gid`, e.eventGID),
    e.announcementGID && n.set(`announcement_gid`, e.announcementGID),
    n.set(`lang_list`, Zu(t)),
    n.set(`last_modified_time`, `0`),
    n.set(`origin`, window.location.origin));
  let r = b.STORE_BASE_URL + `events/ajaxgetpartnerevent?` + n.toString(),
    i = await fetch(r);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json();
  return a.success !== 1 || !a.event?.clan_steamid
    ? null
    : { clanSteamID64: a.event.clan_steamid, event: a.event };
}
function ed(e, t) {
  return [
    `LinkedPartnerEvent`,
    e.clanAccountID,
    e.appid,
    e.eventGID,
    e.announcementGID,
    t,
  ];
}
function td(e) {
  return (
    !!e &&
    (!!e.clanAccountID || !!e.appid) &&
    (!!e.eventGID || !!e.announcementGID)
  );
}
function nd(e, t) {
  let n = td(e);
  return {
    queryKey: ed(e ?? {}, t),
    queryFn: () => $u(e ?? {}, t),
    select: Qu,
    enabled: n,
    staleTime: 36e5,
    retry: !1,
  };
}
function rd(e) {
  let t = re(b.LANGUAGE);
  return V(nd(e, t));
}
function id(e) {
  return e?.clan_steamid ? Xu(new U(e.clan_steamid), e) : null;
}
var ad = 100;
async function od(e, t) {
  let n = new URLSearchParams();
  (n.set(`event_gids`, [...new Set(e)].sort().join(`,`)),
    n.set(`lang_list`, Zu(t)),
    n.set(`origin`, location.origin));
  let r =
      b.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/?` + n.toString(),
    i = await fetch(r);
  if (i.status === 204) return e.map(() => null);
  if (!i.ok) throw Error(`${r} answered ${i.status}`);
  let a = await i.json(),
    o = new Map((a.events ?? []).map((e) => [e.gid, e]));
  return e.map((e) => o.get(e) ?? null);
}
function sd(e) {
  return be(
    [`PublicPartnerEventBrowser`, e],
    () => new Vr.default((t) => od(t, e), { maxBatchSize: ad, cache: !1 }),
  );
}
function cd(e, t) {
  return [`PublicPartnerEvent`, e, t];
}
function ld(e, t, n) {
  return {
    queryKey: cd(e, t),
    queryFn: async () => (n ? n.load(e) : (await od([e], t))[0]),
    select: id,
    enabled: !!e,
    staleTime: 6e5,
  };
}
function ud(e) {
  let t = re(b.LANGUAGE),
    n = sd(t);
  return V(ld(e, t, n));
}
var dd = `ewL7epZsubk-`,
  fd = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`;
function pd(e) {
  let { label: t, shown: n, button: r = `Y` } = e;
  return (0, q.jsxs)(`div`, {
    className: (0, Hr.default)(dd, n && `lDd-amB-eCU-`),
    children: [
      r == `X`
        ? (0, q.jsx)(we, { button: `X`, "aria-label": `X` })
        : (0, q.jsx)(`img`, { src: fd, alt: `Y` }),
      (0, q.jsx)(`div`, { children: t }),
    ],
  });
}
function md(e, t, n) {
  return Hp(t, e, n)?.strTagName || void 0;
}
function hd(e, t, n, r) {
  let i = n == 1 || n == 3 || n == 4,
    a = () => {
      let t = en(e.smart_section_creator_listid);
      return t
        ? i
          ? F(`#Sale_CreatorList_Section_Editor_title`, t)
          : t
        : null;
    };
  if (e.section_type === `items`)
    switch (Pu(e)) {
      case `wishlist`:
        return `#Sale_default_label_OnYourWishlist`;
      case `interactive_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `tag_recommender`:
        return `#Sale_default_label_RecommendedForYou`;
      case `deck_topplayed`:
        return `#Sale_TopPlayedOnDeckSection`;
      case `personalized_carousel`:
        if (i) {
          let { nSectionIndex: n, nNumSections: r } = Ep(e, t);
          return F(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        let o = md(e, t, r);
        if (!o && n == 2) {
          let { nSectionIndex: n, nNumSections: r } = Ep(e, t);
          return F(`#Sale_PersonalizedCarousel_Section_Editor_title`, n + 1, r);
        }
        return o ? F(`#Sale_PersonalizedCarousel_Section_title`, o) : null;
      case `creator_list`:
        return a();
      case `discount_reason`:
        return zp(e);
    }
  else if (e.section_type === `tabs`) return ``;
  else if (e.section_type === `curator`) {
    if (e.curator_clan_id) {
      let t = U.InitFromClanID(e.curator_clan_id, C.EUNIVERSE),
        n = Qt.GetCreatorHome(t);
      if (n) return F(`#Sale_CuratorSection_Name`, n.GetName());
    }
    return `#Sale_CuratorSection`;
  } else if (e.section_type === `event_schedule`) return `#Sale_EventSchedule`;
  else if (e.section_type === `curator_recommendation`)
    return `#Sale_CuratorRecommendation_title`;
  else if (e.section_type === `discoveryqueue`) return `#DiscoveryQueue_Title`;
  else if (e.section_type === `sale_events`) return `#Sale_SaleEvent_Section`;
  else if (e.section_type === `calendar`) return `#Sale_SectionType_Calendar`;
  else if (e.section_type === `crosspromotesalepage` && n == 1)
    return `#Sale_CrossPromoSale_DefaultSectionTitle`;
  else if (e.section_type === `creator_list`) return a();
  return null;
}
function gd(e, t, n, r) {
  let i = hd(e, t, n, r);
  return i === null ? null : i && i.startsWith(`#`) ? F(i) : i;
}
function _d(e, t, n, r, i, a, o, s) {
  if (!e) return ``;
  if (e.section_type === `crosspromotesalepage`) return wp(s, n);
  let c = gd(e, t, i, o),
    l = I.GetWithFallback(e.localized_label, n),
    u =
      c ||
      l ||
      (e.default_label === `#Sale_default_label` ? `` : F(e.default_label)),
    d = e.internal_section_title?.trim();
  if ((d?.length ?? 0) > 0) {
    if (i == 3 || i == 4)
      return u?.trim().length == 0 || a
        ? d
        : (0, q.jsxs)(q.Fragment, {
            children: [
              d,
              ` `,
              (0, q.jsx)(Ye, {
                tooltip: Ve(
                  `#Sale_Section_InternalTitle_Note`,
                  (0, q.jsx)(`br`, {}),
                  u,
                ),
              }),
            ],
          });
    if (i == 1)
      return u?.trim().length == 0 || a
        ? d
        : (0, q.jsxs)(q.Fragment, {
            children: [
              d,
              ` `,
              (0, q.jsx)(`span`, {
                children: Ve(`#Sale_Section_InternalTitle_Actual`, u),
              }),
            ],
          });
  }
  let f = I.GetWithFallback(e.localized_label_image, n);
  if (!a && f) {
    let e = Ul.GenerateURLFromHashAndExt(r, f);
    return (0, q.jsx)(`img`, { loading: `lazy`, src: e, alt: u });
  }
  return u;
}
function vd(e, t, n) {
  if (ju(e.section_type))
    switch (Pu(e)) {
      case `personalized_carousel`:
        let r = md(e, t, n);
        return r ? F(`#Sale_PersonalizedCarousel_Section_subtitle`, r) : null;
      case `creator_list`:
        return tn(e.smart_section_creator_listid) ?? null;
      case `discount_reason`:
        return Bp(e);
    }
  return null;
}
function yd(e, t, n, r) {
  let i = vd(e, t, r);
  return i === null
    ? I.GetWithFallback(e.localized_subtitle, n) ||
        (!e.default_subtitle || e.default_subtitle === `#Sale_default_subtitle`
          ? ``
          : F(e.default_subtitle))
    : i && i.startsWith(`#`)
      ? F(i)
      : i;
}
var bd = `dYYkud-Jf3s-`,
  xd = `zZo1XshRYmQ-`,
  Sd = `RfHJSn8AdQE-`,
  Cd = `D8GFuSKNhX0-`,
  wd = `woc2JepJIek-`;
function Td(e, t) {
  return (
    I.GetWithFallback(e.localized_label, t) ||
    (e.default_label === `#Sale_default_label` ? `` : F(e.default_label))
  );
}
function Ed(e) {
  if (ju(e.section_type))
    switch (Pu(e)) {
      case `deck_topplayed`:
        return b.STORE_BASE_URL + `charts/steamdecktopplayed`;
    }
  return e.label_link;
}
function Dd(e) {
  let t,
    n,
    r = !1;
  return (
    e.label_link_style === `button`
      ? ((t = F(`#Sale_SectionLink_BrowseAll`)), (r = !0))
      : e.label_link_style === `browseall`
        ? ((t = F(`#Sale_SectionLink_BrowseAll`)),
          (n = E(Sd, `SaleSectionLabelLinkButton`)))
        : Pu(e) === `deck_topplayed` &&
          ((t = F(`#EventBrowse_MoreEventsBtn`)),
          (n = E(Tn, `SaleSectionLabelLinkButton`))),
    { strLinkButtonLabel: t, strLinkButtonClasses: n, bSmallButton: r }
  );
}
Dt((e) => {
  let {
      section: t,
      event: n,
      language: r,
      nHiddenCapsules: i,
      title: a,
      subtitle: o,
      bShowSeeMoreHint: s,
      bUseGamepadLinkHint: c,
      eGamepadLinkHintButton: l,
      onLinkResolved: u,
      personalizedCarousels: d,
      promotedSale: f,
    } = e,
    p = y(),
    m = Hd(),
    h = f !== void 0,
    { data: g } = ud(h ? void 0 : Cp(t)),
    _ = (h ? f : g) ?? void 0,
    v = e.link || Ed(t) || $t(_);
  if (
    (G.useEffect(() => {
      u?.(v);
    }, [v, u]),
    t.section_type == `title_image` && t.title_image_selected === `image`)
  )
    return null;
  let x = a || _d(t, n, r, n.clanSteamID.GetAccountID(), m.eLocation, !1, d, _);
  if (!x) return null;
  let S = o || yd(t, n, r, d),
    C = (0, q.jsxs)(`div`, {
      className: E(Dn, `SaleSectionHeader`),
      style: Od(t, n, r),
      children: [
        t.test_show_on_valve_ip_only &&
          (0, q.jsx)(`div`, {
            className: `JrlXbYAw30w-`,
            children: `(VO)\xA0`,
          }),
        x,
      ],
    }),
    w = (0, q.jsx)(`div`, {
      className: E(Dn, wn, `SaleSectionSubtitle`),
      style: kd(t, n, r),
      children: S,
    }),
    T = null;
  if ((v?.length ?? 0) > 0) {
    let {
      strLinkButtonLabel: e,
      strLinkButtonClasses: n,
      bSmallButton: r,
    } = Dd(t);
    (e &&
      (T =
        p && c
          ? (0, q.jsx)(pd, { label: e, shown: !!s, button: l })
          : r
            ? (0, q.jsx)(`div`, {
                className: E(qu, Cd),
                children: (0, q.jsx)(Gp, {
                  url: v,
                  children: (0, q.jsx)(Ue, { children: e }),
                }),
              })
            : (0, q.jsx)(Gp, { url: v, className: n, children: e })),
      (C = (0, q.jsx)(Gp, { url: v, bFocusable: !T, children: C })));
  }
  return (0, q.jsxs)(`div`, {
    className: E(bd, `SaleSectionLabelCtn`),
    children: [
      (0, q.jsxs)(`div`, { className: wd, children: [C, !!S && w] }),
      (0, q.jsxs)(`div`, {
        className: xd,
        children: [
          !!i &&
            (0, q.jsx)(He, {
              className: `pL8IDIWBDg8-`,
              toolTipContent: F(`#Sale_HiddenItem_Tooltip`),
              children: (0, q.jsx)(`a`, {
                href: b.STORE_BASE_URL + `account/preferences`,
                children: Ve(
                  i == 1
                    ? `#Sale_HiddenItem_Single_Short`
                    : `#Sale_HiddenItems_Short`,
                  i,
                ),
              }),
            }),
          T,
        ],
      }),
    ],
  });
});
function Od(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? Ad(t.jsondata.sale_font, n) : void 0,
    fontWeight: t.jsondata.sale_font_weight,
    fontSize: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
  };
}
function kd(e, t, n) {
  return {
    fontFamily: t.jsondata.sale_font ? Ad(t.jsondata.sale_font, n) : void 0,
    fontWeight: 300,
    fontSize: `${t.jsondata.sale_section_font_size && t.jsondata.sale_section_font_size - 3}px`,
    letterSpacing: 0,
    lineHeight: `${t.jsondata.sale_section_font_size}px`,
    textTransform: t.jsondata.sale_section_disable_capitalize
      ? `initial`
      : void 0,
    color: e.label_color,
    opacity: `50%`,
  };
}
function Ad(e, t) {
  return (
    (e ||= ``),
    t === 12
      ? e.replace(`Jolly Lodger`, `New Rocker`)
      : t === 23 || t === 19 || t === 24 || t === 18 || t === 8 || t === 26
        ? e.replace(`Sigmar One`, `Play`)
        : t === 6
          ? e.replace(`Sigmar One`, `Noto Serif SC`)
          : t === 7
            ? e.replace(`Sigmar One`, `Noto Serif TC`)
            : t === 10
              ? e.replace(`Sigmar One`, `M PLUS Rounded 1c`)
              : t === 4
                ? e.replace(`Sigmar One`, `Black Han Sans`)
                : t === 9
                  ? e.replace(`Sigmar One`, `Prompt`)
                  : e
  );
}
function jd(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, q.jsx)(Je, {
    strTitle: Sn.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || Sn.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: M.Localize(`#Button_OK`),
    onOK: () => {
      (ys(), t());
    },
  });
}
function Md(e) {
  let [t, n, r] = se();
  return {
    elDialogElement: (0, q.jsx)(cn, {
      active: t,
      children: (0, q.jsx)(jd, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
var Nd = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Request`;
    }
  },
  Pd = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ignore_list || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ignore_list: { n: 1, c: Fd, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response`;
    }
  },
  Fd = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            packageid: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            reason: { n: 3, br: A.readEnum, bw: n.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response_IgnoreListEntry`;
    }
  },
  Id;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StorePreferences.GetIgnoreList#1`, c(Nd, t, n), Pd, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetIgnoreList = t;
})((Id ||= {}));
var Ld = u(dn()),
  Rd = class e {
    m_queryClient = It;
    m_boxCacheVersion = H.box(0);
    m_bInitialized = !1;
    m_boxAjaxInFlight = H.box(!1);
    LazyInit() {
      this.m_bInitialized ||
        ((this.m_bInitialized = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            cr(e.query?.queryKey) &&
            an(() =>
              this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
            );
        }));
    }
    ReadData() {
      return (
        this.LazyInit(), this.m_boxCacheVersion.get(), pr(this.m_queryClient)
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
      return this.ReadData().setCuratorsFollowed.has(zd(e));
    }
    BIsIgnoringCurator(e) {
      return this.ReadData().setCuratorsIgnored.has(zd(e));
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
      return (this.LazyInit(), await hr(this.m_queryClient), this);
    }
    async UpdateFollowOrIgnoreCurator(e, t, n) {
      this.LazyInit();
      let r =
          C.STORE_BASE_URL + `curators/` + (t ? `ajaxfollow/` : `ajaxignore/`),
        i = e.GetAccountID(),
        a = new FormData();
      (a.append(`clanid`, `` + i),
        a.append(`sessionid`, f()),
        a.append(t ? `follow` : `ignore`, n ? `1` : `0`));
      let o = await Ld.default.post(r, a, { withCredentials: !0 });
      return (
        o &&
          o.status == 200 &&
          (this.InvalidateCache(),
          gr(this.m_queryClient, (e) => {
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
      let i = C.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`sessionid`, f()),
        a.append(`appid`, `` + e),
        a.append(`remove`, t ? `0` : `1`),
        a.append(`snr`, n),
        a.append(`ignore_reason`, `` + r));
      try {
        an(() => this.m_boxAjaxInFlight.set(!0));
        let n = await Ld.default.post(i, a, { withCredentials: !0 });
        return (
          n &&
            n.status == 200 &&
            (this.InvalidateCache(),
            gr(this.m_queryClient, (n) => {
              let i = new Map(n.mapIgnoredApps);
              return (
                t ? i.set(Number(e), r) : i.delete(Number(e)),
                { mapIgnoredApps: i }
              );
            })),
          n.data
        );
      } catch (e) {
        let t = pn(e);
        console.error(`UpdateAppIgnore`, t.strErrorMsg, t);
      } finally {
        an(() => this.m_boxAjaxInFlight.set(!1));
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
        return (i && (e = Et.ParseSNR(i)), window.AddItemToCart(t, a, e), !0);
      }
      let s = new FormData();
      (s.append(`action`, `add_to_cart`),
        a ? s.append(`bundleid`, a.toString()) : s.append(`subid`, `` + t),
        i && s.append(`snr`, i),
        s.append(`sessionid`, f()),
        s.append(`quantity`, `1`));
      let c = fe(e);
      e.preventDefault();
      try {
        (await Ld.default.post(n, s, { withCredentials: !0 }),
          this.InvalidateCache(),
          o?.fnSetURL ? o.fnSetURL(r) : (c.location.href = r));
      } catch (e) {
        return (console.log(`HandleOnAddToCart`, e), !1);
      }
      return !0;
    }
    InvalidateCache() {
      Vn();
    }
    static s_globalSingletonStore;
    static Get() {
      return ((e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore);
    }
    static BConfirmedAdultContentAgeGate() {
      return rr();
    }
    constructor() {}
  };
function zd(e) {
  return typeof e == `object` && `GetAccountID` in e
    ? e.GetAccountID()
    : Number(e);
}
function Bd() {
  let { isPending: e } = fr();
  return [e, Rd.Get()];
}
var Vd = G.createContext({ eLocation: 0 });
function Hd() {
  return G.useContext(Vd);
}
function Ud() {
  return Hd().eLocation == 2;
}
function Wd() {
  let e = Hd();
  return e.eLocation == 2 || e.eLocation == 1;
}
async function Gd(t, n) {
  let r = Bn(C.STORE_BASE_URL, n, e.country_code);
  return (await (await fetch(r)).json()).rgFollowedApps || [];
}
function Kd() {
  let t = z(),
    n = e.accountid;
  return V(qd(t, n));
}
function qd(e, t) {
  return {
    queryKey: Xd(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Gd(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Jd(e) {
  let { data: t } = Kd();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function Yd() {
  let t = B(),
    n = e.accountid;
  return (e, r) => {
    t.setQueryData(Xd(n), (t) => {
      if (!t) return;
      let n = new Set(t);
      if (r) for (let e of r) n.delete(e);
      if (e) for (let t of e) n.add(t);
      return n;
    });
  };
}
function Xd(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function Zd(t, n, r) {
  let i = Yd(),
    a = e.accountid;
  return Lt({
    mutationKey: [`useUpdateAppFollow`, t, a, n],
    mutationFn: async () => {
      if (t == null) return;
      let e = C.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + t),
        i.append(`sessionid`, f()),
        n || i.append(`unfollow`, `1`),
        r && i.append(`snr`, r));
      let a = await fetch(e, {
        method: `POST`,
        body: i,
        credentials: `include`,
      });
      if (!a.ok)
        throw Error(
          `Follow App ${n ? `add` : `remove`} of appid ${t} failed (${a.status})`,
        );
    },
    onMutate: () => {
      t != null && i(n ? [t] : void 0, n ? void 0 : [t]);
    },
    onError: () => {
      t != null && i(n ? void 0 : [t], n ? [t] : void 0);
    },
    onSuccess: () => {
      Vn();
    },
  });
}
var Qd = `VULTMp1PCTw-`,
  $d = `_2vLXBykr6zc-`;
async function ef(t, n) {
  let r = Bn(C.STORE_BASE_URL, n, e.country_code),
    i = await (await fetch(r)).json();
  return Object.keys(i.rgIgnoredApps).map(Number) || [];
}
function tf() {
  let t = z(),
    n = e.accountid;
  return V(nf(t, n));
}
function nf(e, t) {
  return {
    queryKey: of(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await ef(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function rf(e) {
  let { data: t } = tf();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function af() {
  let t = B(),
    n = e.accountid;
  return (e, r) => {
    t.setQueryData(of(n), (t) => {
      if (!t) return;
      let n = new Set(t);
      if (r) for (let e of r) n.delete(e);
      if (e) for (let t of e) n.add(t);
      return n;
    });
  };
}
function of(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function sf(t, n, r, i = 0) {
  let a = af(),
    o = e.accountid;
  return Lt({
    mutationKey: [`useUpdateAppIgnore`, t, o, n],
    mutationFn: async () => {
      if (t == null) return;
      let e = C.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + t),
        a.append(`sessionid`, f()),
        a.append(`remove`, n ? `0` : `1`),
        r && a.append(`snr`, r),
        a.append(`ignore_reason`, `` + i));
      let o = await fetch(e, {
        method: `POST`,
        body: a,
        credentials: `include`,
      });
      if (!o.ok)
        throw Error(
          `Ignore App ${n ? `add` : `remove`} of appid ${t} failed (${o.status})`,
        );
    },
    onMutate: () => {
      t != null && a(n ? [t] : void 0, n ? void 0 : [t]);
    },
    onError: () => {
      t != null && a(n ? void 0 : [t], n ? [t] : void 0);
    },
    onSuccess: () => {
      Vn();
    },
  });
}
function cf(t) {
  let { id: n, snr: r, classOverride: i } = t,
    [a, o] = (0, G.useState)(!1),
    s = fn(`GameHoverIgnoreButton`),
    { elDialogElement: c, fnShowLogonDialog: l } = Md(),
    u = n && `appid` in n ? n.appid : void 0,
    { mutateAsync: d } = sf(u, !rf(u), r),
    f = n && `appid` in n && Rd.Get().BIsGameIgnored(n.appid);
  return (0, q.jsxs)(Pe, {
    className: E(Qd, i),
    onClick: async (t) => {
      (t.preventDefault(),
        t.stopPropagation(),
        e.logged_in
          ? n && `appid` in n && (o(!0), await d(), s.token.reason || o(!1))
          : l());
    },
    children: [
      (0, q.jsx)(Ne, {}),
      (0, q.jsx)(`div`, {
        className: E($d, a && `vyz9N2LpdMs-`),
        children: F(f ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      c,
    ],
  });
}
async function lf(t, n) {
  let r = Bn(C.STORE_BASE_URL, n, e.country_code),
    i = await (await fetch(r)).json(),
    a = new Set();
  (i.rgCreatorsIgnored?.forEach((e) => a.add(e)),
    i.rgCreatorsFollowed?.forEach((e) => a.add(e)));
  let o = new Set();
  return (
    i.rgCreatorsIgnored?.forEach((e) => o.add(e)),
    [
      ...(i.rgCuratorsIgnored ?? []),
      ...(i.rgCurators
        ? Object.values(i.rgCurators ?? {}).map((e) => e.clanid)
        : []),
    ].map((e) => {
      let t = o.has(e);
      return { clanid: e, ignored: t, followed: !t, is_creator: a.has(e) };
    })
  );
}
function uf() {
  let e = z(),
    t = k.accountid;
  return V(df(e, t));
}
function df(e, t) {
  return {
    queryKey: gf(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await lf(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function ff(e) {
  let { data: t } = uf();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function pf(e) {
  let { data: t } = uf();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function mf() {
  return b.EREALM != m.k_ESteamRealmChina;
}
function hf() {
  let e = B(),
    t = k.accountid;
  return (n, r, i, a) => {
    e.setQueryData(gf(t), (e) => {
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
function gf(e) {
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
function _f(t, n) {
  let r = hf(),
    i = e.accountid;
  return Lt({
    mutationKey: [`useUpdateCuratorAffinity`, t, i, n],
    mutationFn: async () => {
      if (t == null) return !1;
      let e = n == $.k_ECuratorFollow || n == $.k_ECuratorUnfollow,
        r = n == $.k_ECuratorFollow || n == $.k_ECuratorIgnore,
        i = `${C.STORE_BASE_URL}curators/${e ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + t),
        a.append(`sessionid`, f()),
        a.append(e ? `follow` : `ignore`, r ? `1` : `0`));
      let o = await fetch(i, {
          method: `POST`,
          body: a,
          credentials: `include`,
        }),
        s = await o.json();
      if (!o.ok)
        throw Error(
          `Curator Affinity: ${e ? `Follow` : `Ignore`} Currator ${r ? `add` : `remove`} failed (${o.status} / ${s.msg})`,
        );
      return s.is_creator;
    },
    onMutate: () => {
      if (t != null) {
        let e = n == $.k_ECuratorUnfollow || n == $.k_ECuratorUnignore;
        r(
          n == $.k_ECuratorFollow ? [{ clanAccountID: t }] : void 0,
          n == $.k_ECuratorIgnore ? [{ clanAccountID: t }] : void 0,
          e ? [{ clanAccountID: t }] : void 0,
        );
      }
    },
    onError: (e) => {
      if (t != null) {
        let i = n == $.k_ECuratorFollow || n == $.k_ECuratorIgnore;
        r(
          n == $.k_ECuratorUnfollow ? [{ clanAccountID: t }] : void 0,
          n == $.k_ECuratorUnignore ? [{ clanAccountID: t }] : void 0,
          i ? [{ clanAccountID: t }] : void 0,
          e ? [{ clanAccountID: t, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (e) => {
      (e &&
        t &&
        r(void 0, void 0, void 0, [{ clanAccountID: t, is_creator: !0 }]),
        Vn());
    },
  });
}
var vf = `QOSk1wMadGg-`,
  yf = `DH1jwyMHeXo-`,
  bf = `J5g1CfUd95U-`,
  xf = `_3IPvWkyhZzM-`,
  Sf = `jB1S5EvgUjI-`,
  Cf = `iWO-8zu8RAA-`,
  wf = `MTgAGoNV5vg-`,
  Tf = `LEvP9jHHfL8-`,
  Ef = `K9ZawxnkJcI-`,
  Df = `OlPIY4AN-5s-`,
  Of = `_7UT3Pb65ni0-`,
  kf = `sT74IdnPxY8-`,
  Af = `ZTz7p5tpqNU-`,
  jf = `ct7kvDppls0-`,
  Mf = `SG9Xn5tF5a0-`,
  Nf = `clYVRh6K2Ig-`,
  Pf = `k6MwDwdCJTU-`,
  Ff = `mnFUxHcas-0-`,
  If = `_6lWvo8crYSU-`,
  Lf = `r3PgsXSGPho-`,
  Rf = `EWCiFLRR-T8-`,
  zf = `oXDp-N2XFF4-`,
  Bf = `GEroszngeLM-`,
  Vf = (e) => {
    let t = b.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, q.jsx)(Je, {
      strTitle: F(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, q.jsx)(`div`, {
        children: Ve(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, q.jsx)(`a`, {
            href: t,
            target: b.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: F(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  Hf = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = Md();
    if (!mf()) return null;
    let l = null;
    switch (o) {
      case `app`:
        l = F(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        l = F(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        l = F(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        l = F(`#steam_group_follow_ttip`);
    }
    return l
      ? (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(Ke, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, q.jsxs)(me, {
                className: E(En, Lf, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  k.logged_in ? a() : c();
                },
                children: [
                  r && (0, q.jsx)(kn, { size: 15 }),
                  !r && (i || n) && (0, q.jsx)(qe, {}),
                  (0, q.jsx)(`div`, {
                    className: E(Rf, `FollowBtnText`),
                    children:
                      !r &&
                      F(
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
function Uf(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = G.useState(!1),
    { data: s } = vl(t ? void 0 : r),
    c = ff(r),
    l = pf(r),
    { mutateAsync: u } = _f(r, c ? $.k_ECuratorUnfollow : $.k_ECuratorFollow),
    [d, f, p] = se(),
    m = G.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(Hf, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          k.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, q.jsx)(cn, {
        active: d,
        children: (0, q.jsx)(Vf, { closeModal: p }),
      }),
    ],
  });
}
function Wf(e) {
  let { appid: t, className: n } = e,
    [r, i] = G.useState(!1),
    a = Jd(t),
    o = rf(t),
    s = Tt(),
    c = Et.GetSNRLinkParam(s),
    { mutateAsync: l } = Zd(t, !a, c),
    u = G.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, q.jsx)(Hf, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function Gf(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = vl(t),
    { data: o } = Ml(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= On(void 0, `medium`, `web`)),
    (0, q.jsxs)(`div`, {
      className: E(ko, n),
      style: r,
      children: [
        (0, q.jsx)(`a`, {
          href: Fl(o, `developer`),
          children: (0, q.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, q.jsx)(Uf, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var Kf = new URL(
    `../../../images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  qf = 5500,
  Jf = 2e3,
  Yf = 10;
function Xf(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, q.jsx)(
          `img`,
          {
            className: io,
            loading: `lazy`,
            src: Ar(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: Jf,
      }
    : null;
}
function Zf(e, t) {
  return {
    stringifyID: `vid_${rt(e)}`,
    rctImage: (0, q.jsx)(wa, { id: e, active: !0 }),
    nDurationMs: qf,
  };
}
function Qf(e) {
  let t = Yt(e);
  return Jt(e) ? void 0 : t;
}
function $f(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = jr(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${rt(e)}`,
      rctImage: (0, q.jsx)(
        `img`,
        {
          className: io,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: Jf,
    };
  });
}
function ep(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(Zf(e, i)),
    r && r.length > 0 && a.push(...$f(e, t.name, r, Yf)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = Xf(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function tp(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(Zf(t, a)), r && r.length > 0 && o.push(...$f(e, n.name, r, Yf)));
  let s = Yf - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...$f(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function np(e) {
  return (0, q.jsx)(`img`, {
    className: io,
    loading: `lazy`,
    src: S(Kf),
    alt: `default`,
  });
}
function rp(e) {
  let { id: t } = e,
    { data: n } = bt(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, q.jsx)(`div`, {
      className: ro,
      children: (0, q.jsx)(np, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, q.jsx)(sp, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, q.jsx)(ap, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, q.jsx)(ip, { storeItemDefaultData: n });
}
function ip(e) {
  let { storeItemDefaultData: t } = e,
    n = Xt(t),
    r = Qf(n),
    { data: i } = gt(n),
    a = Mr(n),
    o = (0, G.useMemo)(() => ep(n, t, i, a, r), [n, a, r, i, t]);
  return (0, q.jsx)(cp, { rgTrailerAndImages: o });
}
function ap(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = Xt(t);
  return Qf(r)
    ? (0, q.jsx)(ip, { storeItemDefaultData: t })
    : (0, q.jsx)(op, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function op(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = nn(t),
    a = Mr(n),
    o = Mr(i),
    s = Qf(i),
    c = (0, G.useMemo)(() => tp(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, q.jsx)(cp, { rgTrailerAndImages: c });
}
function sp(e) {
  let { includeAppIDs: t } = e,
    n = ft(),
    r = _e({ queries: t.map((e) => ct(n, { appid: e })) }),
    i = _e({ queries: t.map((e) => _t(n, { appid: e })) }),
    a = (0, G.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return Xf(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, q.jsx)(cp, { rgTrailerAndImages: a });
}
function cp(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, G.useRef)(0),
    r = ue(),
    [i] = G.useState(new pe()),
    a = (0, G.useCallback)(
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
    (0, G.useEffect)(() => (t.length > 0 && a(), () => i.Cancel()), [t, a, i]),
    (0, q.jsx)(`div`, {
      className: ro,
      children: t?.map((e, t) =>
        (0, q.jsx)(
          `div`,
          {
            className: E({ [io]: !0, [ao]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var lp = `ghYXSqVPJ-U-`,
  up = `lx1fe7xI0bg-`,
  dp = `ARp2qEoElPE-`,
  fp = `DwDon-U2yLI-`,
  pp = 150,
  mp = G.createContext(void 0);
function hp() {
  return G.useContext(mp);
}
function gp(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = y(),
    c = Gr(),
    l = !s && !c,
    [u, d] = G.useState(!1),
    [f, p] = G.useState(void 0),
    m = (e) => {
      (d(!0), p(e.currentTarget));
    },
    h = () => d(!1),
    g = G.useCallback(() => d(!1), []);
  return (0, q.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: E(lp, o),
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
        (0, q.jsx)(mp.Provider, {
          value: g,
          children: (0, q.jsx)(_p, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, q.jsx)(he, { children: a }),
    ],
  });
}
function _p(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = pp,
      nWidthMultiplier: r = 1.15,
      target: i,
      visible: a,
      children: o,
    } = e,
    [s, c] = G.useState(a);
  if (
    (G.useEffect(() => {
      if (a) {
        if (n) {
          let e = window.setTimeout(() => c(!0), n);
          return () => window.clearTimeout(e);
        }
        c(!0);
      } else {
        if (Qe()) return;
        c(!1);
      }
    }, [a]),
    G.useEffect(() => {
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
        minHeight: yp() == `hiding` ? void 0 : 300,
        height: yp() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, q.jsx)(vp, {
    hoverProps: u,
    children: (0, q.jsx)(he, { children: o }),
  });
}
function vp(e) {
  let { hoverProps: t, children: n } = e,
    r = G.useCallback((e) => e?.focus(), []);
  return (0, q.jsx)(tt, {
    ...t,
    children: (0, q.jsx)(sn, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: E(dp, so), enterDone: E(fp, co) },
      children: (e) =>
        (0, q.jsx)(`div`, {
          ref: ge(e, r),
          className: up,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function yp() {
  return window.sessionStorage?.getItem(bp) || `default`;
}
var bp = `DEBUG_UseNewGameHover`;
function xp(e) {
  window.sessionStorage.setItem(bp, e);
}
window.SetHoverPresentation = xp;
function Sp(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function Cp(e) {
  return Sp(e)[0]?.event_gid || void 0;
}
function wp(e, t) {
  return e
    ? F(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : F(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function Tp(e, t) {
  let n = P.GetELanguageFallback(t),
    r =
      e.jsondata.localized_sale_cross_promo_logo_image?.findIndex((e) => !!e) ??
      -1;
  return (
    e.GetImageURL(`sale_cross_promo_logo`, t) ||
    e.GetImageURL(`sale_cross_promo_logo`, n) ||
    (r >= 0 ? e.GetImageURL(`sale_cross_promo_logo`, r) : void 0) ||
    e.GetImageURL(`sale_logo`, t) ||
    e.GetImageURL(`sale_logo`, n)
  );
}
function Ep(e, t) {
  let n = t
    .GetSaleSections()
    .filter((e) => ju(e.section_type) && Pu(e) == `personalized_carousel`);
  if (n.length == 0) return { nNumSections: 0, nSectionIndex: -1 };
  let r = n.findIndex((t) => t.unique_id == e.unique_id);
  return { nNumSections: n.length, nSectionIndex: r };
}
var Dp = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: A.readInt32, bw: n.writeInt32 },
            additional_source_items: { n: 2, c: R, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Request`;
    }
  },
  Op = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: kp, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response`;
    }
  },
  kp = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: R },
            weight: { n: 2, br: A.readFloat, bw: n.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendations_Response_Recommendation`;
    }
  },
  Ap = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: A.readInt32, bw: n.writeInt32 },
            item_ids: { n: 2, c: R, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Request`;
    }
  },
  jp = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recommendations || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { recommendations: { n: 1, c: Mp, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response`;
    }
  },
  Mp = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: R },
            weight: { n: 2, br: A.readFloat, bw: n.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetPackagePurchaseRecommendationsForItems_Response_Recommendation`;
    }
  },
  Np = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.start || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            start: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            count: { n: 2, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Request`;
    }
  },
  Pp = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sales || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sales: { n: 1, c: Fp, r: !0, q: !0 },
            total_count: { n: 2, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Response`;
    }
  },
  Fp = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clan_account_id || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            clan_event_gid: {
              n: 2,
              br: A.readFixed64String,
              bw: n.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreRecommendations_GetLiveSales_Response_Sale`;
    }
  },
  Ip;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendations#1`,
      c(Dp, t, n),
      Op,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetPackagePurchaseRecommendations = t;
  function n(e, t, n) {
    return e.SendMsg(
      `StoreRecommendations.GetPackagePurchaseRecommendationsForItems#1`,
      c(Ap, t, n),
      jp,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPackagePurchaseRecommendationsForItems = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreRecommendations.GetLiveSales#1`, c(Np, t, n), Pp, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetLiveSales = r;
})((Ip ||= {}));
var Lp = [
  {
    eReason: 1,
    strTitleToken: `#Sale_default_label_OnYourWishlist`,
    strSubtitleToken: `#Sale_Specials_Subtitle_Wishlist`,
  },
  {
    eReason: 2,
    strTitleToken: `#Sale_DiscountReason_Section_FirstTimeOnSale`,
    strSubtitleToken: `#Sale_Specials_Subtitle_FirstTimeOnSale`,
  },
  {
    eReason: 3,
    strTitleToken: `#Sale_DiscountReason_Section_LargestDiscount`,
    strSubtitleToken: `#Sale_Specials_Subtitle_LargestDiscount`,
  },
  {
    eReason: 4,
    strTitleToken: `#Sale_DiscountReason_Section_EndingSoon`,
    strSubtitleToken: `#Sale_Specials_Subtitle_EndingSoon`,
  },
  {
    eReason: 5,
    strTitleToken: `#Sale_DiscountReason_Section_NewlyOnSale`,
    strSubtitleToken: `#Sale_Specials_Subtitle_NewlyOnSale`,
  },
  {
    eReason: 6,
    strTitleToken: `#Sale_DiscountReason_Section_WellReviewed`,
    strSubtitleToken: ``,
  },
  {
    eReason: 7,
    strTitleToken: `#Sale_DiscountReason_Section_TopSeller`,
    strSubtitleToken: `#Sale_Specials_Subtitle_TopSeller`,
  },
  {
    eReason: 8,
    strTitleToken: `#Sale_DiscountReason_Section_HotDeal`,
    strSubtitleToken: `#Sale_Specials_Subtitle_HotDeal`,
  },
  {
    eReason: 9,
    strTitleToken: `#Sale_DiscountReason_Section_DeepDiscount`,
    strSubtitleToken: ``,
  },
  {
    eReason: 10,
    strTitleToken: `#Sale_DiscountReason_Section_PopularInRegion`,
    strSubtitleToken: ``,
  },
];
function Rp(e) {
  return Lp.find((t) => t.eReason === e.smart_section_discount_reason);
}
function zp(e) {
  return Rp(e)?.strTitleToken ?? ``;
}
function Bp(e) {
  return Rp(e)?.strSubtitleToken ?? ``;
}
function Vp(e, t, n) {
  if (!e) return !1;
  let r = !n?.bHasHideIgnoredValue || n.bHideIgnored;
  return (e.ignored && r) ||
    (e.excluded_tagids?.length ?? 0) > 0 ||
    (e.excluded_content_descriptorids?.length ?? 0) > 0 ||
    (n?.bHideOwned && e.already_owned) ||
    (n?.bHideWishlisted && e.on_wishlist)
    ? !0
    : t && !!(e.already_owned || e.demo_for_owned_game);
}
function Hp(e, t, n) {
  if (n) return n[Ep(t, e).nSectionIndex] ?? null;
}
function Up(e, t) {
  let n = ft(),
    r = _e({
      queries: e.map((e) => {
        let r = lt(n, e);
        return t ? { ...r, enabled: !1 } : r;
      }),
      combine: Wp,
    });
  return (0, G.useMemo)(() => {
    if (t || !r.some((e) => e === void 0))
      return e.filter((e, t) => !Vp(r[t], !1));
  }, [e, r, t]);
}
function Wp(e) {
  return e.map((e) => e.data);
}
function Gp(e) {
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
    l = a ? n : n ? Kp(n, b.STORE_BASE_URL) : void 0,
    u = xt(l);
  return u
    ? (0, q.jsx)(le, {
        href: u,
        target: b.IN_CLIENT || o ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: s,
        fnCanTakeFocus: c,
        children: i,
      })
    : (0, q.jsx)(`span`, { style: r, className: t, children: i });
}
function Kp(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
var qp = -700,
  Jp = -600,
  Yp = -599,
  Xp = -598,
  Zp = -597,
  Qp = -596,
  $p = -595,
  em = -594,
  tm = -593,
  nm = -592,
  rm = -591,
  im = -590,
  am = -589,
  om = -588,
  sm = -587,
  cm = -586,
  lm = -585,
  um = -584,
  dm = -583,
  fm = -582,
  pm = -581,
  mm = -580,
  hm = -579,
  gm = -578,
  _m = -577,
  vm = -576,
  ym = -575,
  bm = -574,
  xm = -573,
  Sm = -572,
  Cm = -571,
  wm = -500,
  Tm = -499,
  Em = -498,
  Dm = -497,
  Om = -496,
  km = -300,
  Am = -203,
  jm = -202,
  Mm = -201,
  Nm = -200,
  Pm = -199,
  Fm = -198,
  Im = -197,
  Lm = -196,
  Rm = -195,
  zm = -194,
  Bm = -193,
  Vm = -192,
  Hm = -191,
  Um = -190,
  Wm = -189,
  Gm = -188,
  Km = -187,
  qm = -186,
  Jm = -185,
  Ym = -184,
  Xm = -183,
  Zm = -182,
  Qm = -102,
  $m = -101,
  eh = -100;
function th(e) {
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
    case Qm:
      return `Mac OS`;
    case $m:
      return `MacOS 10.4`;
    case eh:
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
    case Am:
      return `Linux`;
    case jm:
      return `Linux 2.2`;
    case Mm:
      return `Linux 2.4`;
    case Nm:
      return `Linux 2.6`;
    case Pm:
      return `Linux 3.2`;
    case Fm:
      return `Linux 3.5`;
    case Im:
      return `Linux 3.6`;
    case Lm:
      return `Linux 3.10`;
    case Rm:
      return `Linux 3.16`;
    case zm:
      return `Linux 3.18`;
    case Bm:
      return `Linux 3.x`;
    case Hm:
      return `Linux 4.1`;
    case Um:
      return `Linux 4.4`;
    case Wm:
      return `Linux 4.9`;
    case Gm:
      return `Linux 4.14`;
    case Km:
      return `Linux 4.19`;
    case Vm:
      return `Linux 4.x`;
    case qm:
      return `Linux 5.x`;
    case Jm:
      return `Linux 5.4`;
    case Ym:
      return `Linux 6.x`;
    case Xm:
      return `Linux 7.x`;
    case Zm:
      return `Linux 5.10`;
    case km:
      return `PS3`;
    case qp:
      return `Web Client`;
    case wm:
      return `Android`;
    case Tm:
      return `Android 6.x`;
    case Em:
      return `Android 7.x`;
    case Dm:
      return `Android 8.x`;
    case Om:
      return `Android 9.x`;
    case Jp:
      return `iOS`;
    case Yp:
      return `iOS 1`;
    case Xp:
      return `iOS 2`;
    case Zp:
      return `iOS 3`;
    case Qp:
      return `iOS 4`;
    case $p:
      return `iOS 5`;
    case em:
      return `iOS 6`;
    case tm:
      return `iOS 6.1`;
    case nm:
      return `iOS 7`;
    case rm:
      return `iOS 7.1`;
    case im:
      return `iOS 8`;
    case am:
      return `iOS 8.1`;
    case om:
      return `iOS 8.2`;
    case sm:
      return `iOS 8.3`;
    case cm:
      return `iOS 8.4`;
    case lm:
      return `iOS 9`;
    case um:
      return `iOS 9.1`;
    case dm:
      return `iOS 9.2`;
    case fm:
      return `iOS 9_.3`;
    case pm:
      return `iOS 10`;
    case mm:
      return `iOS 10.1`;
    case hm:
      return `iOS 10.2`;
    case gm:
      return `iOS 10.3`;
    case _m:
      return `iOS 11`;
    case vm:
      return `iOS 11.1`;
    case ym:
      return `iOS 11.2`;
    case bm:
      return `iOS 11.3`;
    case xm:
      return `iOS 11.4`;
    case Sm:
      return `iOS 12`;
    case Cm:
      return `iOS 12.1`;
    default:
    case -1:
      return `Unknown`;
  }
}
var nh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Request`;
    }
  },
  rh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.protocol_version || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            protocol_version: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            os: { n: 2, br: A.readString, bw: n.writeString },
            machine_name: { n: 3, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Response`;
    }
  },
  ih = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Request`;
    }
  },
  ah = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sessions || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sessions: { n: 1, c: oh, r: !0, q: !0 },
            refetch_interval_sec: { n: 2, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response`;
    }
  },
  oh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            protocol_version: { n: 2, br: A.readUint32, bw: n.writeUint32 },
            os_name: { n: 3, br: A.readString, bw: n.writeString },
            machine_name: { n: 4, br: A.readString, bw: n.writeString },
            os_type: { n: 5, br: A.readInt32, bw: n.writeInt32 },
            device_type: { n: 6, br: A.readInt32, bw: n.writeInt32 },
            realm: { n: 7, br: A.readInt32, bw: n.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response_Session`;
    }
  },
  sh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Request`;
    }
  },
  ch = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_version || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [7, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_version: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            os: { n: 2, br: A.readString, bw: n.writeString },
            machine_name: { n: 3, br: A.readString, bw: n.writeString },
            ip_public: { n: 4, br: A.readString, bw: n.writeString },
            ip_private: { n: 5, br: A.readString, bw: n.writeString },
            bytes_available: {
              n: 6,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            running_games: { n: 7, c: lh, r: !0, q: !0 },
            protocol_version: { n: 8, br: A.readUint32, bw: n.writeUint32 },
            clientcomm_version: { n: 9, br: A.readUint32, bw: n.writeUint32 },
            local_users: {
              n: 10,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData`;
    }
  },
  lh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            extra_info: { n: 2, br: A.readString, bw: n.writeString },
            time_running_sec: { n: 3, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData_RunningGames`;
    }
  },
  uh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_info || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { client_info: { n: 1, c: ch } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Response`;
    }
  },
  dh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.fields || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            fields: { n: 1, br: A.readString, bw: n.writeString },
            filters: { n: 2, br: A.readString, bw: n.writeString },
            client_instanceid: {
              n: 3,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            include_client_info: { n: 4, br: A.readBool, bw: n.writeBool },
            language: { n: 5, br: A.readString, bw: n.writeString },
            filter_appids: {
              n: 6,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: n.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Request`;
    }
  },
  fh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bytes_available || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            apps: { n: 2, c: ph, r: !0, q: !0 },
            client_info: { n: 3, c: ch },
            refetch_interval_sec_full: {
              n: 4,
              br: A.readUint32,
              bw: n.writeUint32,
            },
            refetch_interval_sec_changing: {
              n: 5,
              br: A.readUint32,
              bw: n.writeUint32,
            },
            refetch_interval_sec_updating: {
              n: 6,
              br: A.readUint32,
              bw: n.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response`;
    }
  },
  ph = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, [17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            app: { n: 2, br: A.readString, bw: n.writeString },
            category: { n: 3, br: A.readString, bw: n.writeString },
            app_type: { n: 4, br: A.readString, bw: n.writeString },
            num_downloading: { n: 8, br: A.readUint32, bw: n.writeUint32 },
            bytes_download_rate: { n: 11, br: A.readUint32, bw: n.writeUint32 },
            bytes_downloaded: {
              n: 12,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            bytes_to_download: {
              n: 13,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            dlcs: { n: 17, c: mh, r: !0, q: !0 },
            favorite: { n: 18, br: A.readBool, bw: n.writeBool },
            auto_update: { n: 19, br: A.readBool, bw: n.writeBool },
            installed: { n: 20, br: A.readBool, bw: n.writeBool },
            download_paused: { n: 21, br: A.readBool, bw: n.writeBool },
            changing: { n: 22, br: A.readBool, bw: n.writeBool },
            available_on_platform: { n: 23, br: A.readBool, bw: n.writeBool },
            bytes_staged: {
              n: 24,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            bytes_to_stage: {
              n: 25,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            bytes_required: {
              n: 26,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            source_buildid: { n: 27, br: A.readUint32, bw: n.writeUint32 },
            target_buildid: { n: 28, br: A.readUint32, bw: n.writeUint32 },
            estimated_seconds_remaining: {
              n: 29,
              br: A.readUint32,
              bw: n.writeUint32,
            },
            queue_position: { n: 30, d: -1, br: A.readInt32, bw: n.writeInt32 },
            uninstalling: { n: 31, br: A.readBool, bw: n.writeBool },
            rt_time_scheduled: { n: 32, br: A.readUint32, bw: n.writeUint32 },
            running: { n: 33, br: A.readBool, bw: n.writeBool },
            update_percentage: { n: 34, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData`;
    }
  },
  mh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: n.writeUint32 },
            app: { n: 2, br: A.readString, bw: n.writeString },
            installed: { n: 3, br: A.readUint32, bw: n.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData_DLCData`;
    }
  },
  hh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: A.readUint32, bw: n.writeUint32 },
            client_instanceid: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Request`;
    }
  },
  gh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Response`;
    }
  },
  _h = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: A.readUint32, bw: n.writeUint32 },
            client_instanceid: {
              n: 2,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Request`;
    }
  },
  vh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Response`;
    }
  },
  yh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: A.readUint32, bw: n.writeUint32 },
            action: { n: 2, q: !0, br: A.readUint32, bw: n.writeUint32 },
            client_instanceid: {
              n: 3,
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Request`;
    }
  },
  bh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            appid: { n: 2, q: !0, br: A.readUint32, bw: n.writeUint32 },
            query_params: { n: 3, br: A.readString, bw: n.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Request`;
    }
  },
  xh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Response`;
    }
  },
  Sh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Response`;
    }
  },
  Ch = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || x(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: A.readUint64String,
              bw: n.writeUint64String,
            },
            enable: { n: 2, br: A.readBool, bw: n.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= v(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return p(e.M(), t, n);
    }
    static fromObject(t) {
      return D(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return _(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      O(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Request`;
    }
  },
  wh = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), K.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Response`;
    }
  },
  Th;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientLogonInfo#1`, c(nh, t, n), rh, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientLogonInfo = t;
  function n(e, t, n) {
    return e.SendMsg(`ClientComm.GetAllClientLogonInfo#1`, c(ih, t, n), ah, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetAllClientLogonInfo = n;
  function r(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientInfo#1`, c(sh, t, n), uh, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientInfo = r;
  function i(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientAppList#1`, c(dh, t, n), fh, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetClientAppList = i;
  function a(e, t, n) {
    return e.SendMsg(`ClientComm.InstallClientApp#1`, c(hh, t, n), gh, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.InstallClientApp = a;
  function o(e, t, n) {
    return e.SendMsg(`ClientComm.UninstallClientApp#1`, c(_h, t, n), vh, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.UninstallClientApp = o;
  function s(e, t, n) {
    return e.SendMsg(`ClientComm.LaunchClientApp#1`, c(bh, t, n), xh, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.LaunchClientApp = s;
  function l(e, t, n) {
    return e.SendMsg(`ClientComm.SetClientAppUpdateState#1`, c(yh, t, n), Sh, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetClientAppUpdateState = l;
  function u(e, t, n) {
    return e.SendMsg(`ClientComm.EnableOrDisableDownloads#1`, c(Ch, t, n), wh, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.EnableOrDisableDownloads = u;
})((Th ||= {}));
var Eh = `RemoteDownload_OnlineClient`,
  Dh = `RemoteDownload_ClientAppList`,
  Oh = `RemoteDownload_ClientAppData`,
  kh = class extends Error {
    constructor(e, t) {
      (super(e), (this.result = t));
    }
    result;
  };
function Ah() {
  let e = z(),
    t = Mn();
  return V({
    queryKey: [Eh, t],
    queryFn: async () => {
      let t = o.Init(ih),
        n = await Th.GetAllClientLogonInfo(e, t);
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
var jh = class {
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
async function Mh(e, t, n) {
  let r = t.client_instanceid,
    i = o.Init(dh);
  (i.Body().set_fields(`games`),
    i.Body().set_filters(n),
    i.Body().set_client_instanceid(r),
    i.Body().set_include_client_info(!0));
  let a = await Th.GetClientAppList(e, i);
  if (a.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetClientAppList`,
        a.GetEResult(),
        a.Hdr().transport_error(),
      ),
      new kh(`Error from GetClientAppList: ${a.GetEResult()}`, a.GetEResult())
    );
  let s = new Map();
  for (let e of a.Body().apps()) {
    let t = new jh(e);
    s.set(e.appid(), t);
  }
  return {
    session: t,
    mapApps: s,
    clientInfo: a.Body().client_info()?.toObject(),
    refetchIntervals: {
      full: a.Body().refetch_interval_sec_full() || 3600,
      changing: a.Body().refetch_interval_sec_changing() || 60,
      updating: a.Body().refetch_interval_sec_updating() || 10,
    },
  };
}
async function Nh(e, t, n, r) {
  if (!r) return;
  let i = await Mh(e, t, n);
  for (let [e, t] of i.mapApps) r.mapApps.set(e, t);
  return { ...i, mapApps: r.mapApps };
}
function Ph(e, t, n) {
  return [Dh, e, t, n];
}
function Fh(e, t = !0) {
  let n = Ah(),
    r = z(),
    i = Mn(),
    a = (e) => {
      t && (e.result == 21 || e.result == 16) && n.refetch();
    },
    o = _e({
      queries: (n.data?.sessions || []).map((e) => ({
        queryKey: Ph(i, e.client_instanceid, `none`),
        queryFn: async () => Mh(r, e, `none`),
        staletime: 36e5,
        refetchInterval: (e) =>
          (e.state.data?.refetchIntervals.full || 3600) * 1e3,
        enabled: n.isSuccess && !n.isFetching,
        onError: a,
        retry: t,
      })),
    }),
    s = (0, G.useCallback)(
      (t) => {
        if (!e) return t;
        let n = new Map(Array.from(t?.mapApps.entries() ?? []).filter(e));
        return { ...t, mapApps: n };
      },
      [e],
    ),
    c = B();
  return {
    rgQueries: _e({
      queries: (n.data?.sessions || []).map((e, n) => ({
        queryKey: Ph(i, e.client_instanceid, `changing`),
        queryFn: async () => Nh(r, e, `changing`, o[n].data),
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
        let t = Ph(i, e.client_instanceid, `changing`);
        c.removeQueries({ queryKey: t });
      }
      for (let e of o) e.refetch();
    },
  };
}
function Ih(e, t) {
  return [Oh, e, t];
}
function Lh(e, t = !0) {
  let n = Mn(),
    { rgQueries: r } = Fh(void 0, t);
  return V({
    queryKey: Ih(n, e),
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
function Rh(e, t, n) {
  let r = z(),
    i = Lh(e),
    a = Mn(),
    s = B();
  return Lt({
    mutationFn: async () => {
      let n = o.Init(hh);
      (n.Body().set_appid(e), n.Body().set_client_instanceid(t));
      let c = await Th.InstallClientApp(r, n);
      if (c.GetEResult() != 1)
        throw (
          console.error(`Received error from InstallClientApp`, c.GetEResult()),
          Error(`Error from InstallClientApp: ${c.GetEResult()}`)
        );
      let l = i?.data;
      (l && l.get(t) && l.get(t).app.SetDownloading(),
        s.setQueryData(Ih(a, e), l),
        i.refetch());
    },
    onSuccess: n,
  });
}
var zh = `KDJh8Ln6DTA-`,
  Bh = `cwU-YKIjBO4-`,
  Vh = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function Hh(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, G.useCallback)(
      (e) => {
        n?.length &&
          Te(
            (0, q.jsx)(Uh, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            Vh,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, q.jsx)(`button`, {
        onClick: r,
        className: zh,
        children: (0, q.jsx)(Gh, {}),
      })
    : null;
}
function Uh({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, q.jsx)(`ul`, {
    className: Bh,
    children: e.map((e) =>
      (0, q.jsx)(
        Fe,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: F(
            `#GamesList_Client_Indicator`,
            Wh(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function Wh(e) {
  switch (e) {
    case 1:
      return F(`#Library_DeviceType_PC`);
    case 544:
      return F(`#Library_DeviceType_SteamDeck`);
    case 546:
      return F(`#Library_DeviceType_SteamMachine`);
    case t:
      return F(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function Gh(e) {
  return (0, q.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 13 8`,
    fill: `none`,
    ...e,
    children: (0, q.jsx)(`path`, {
      fill: `currentColor`,
      d: `M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z`,
    }),
  });
}
var Kh = `O2hPihu9CRE-`,
  qh = `QhSrcq93V7k-`,
  Jh = `_7MjE60RYT0Q-`,
  Yh = `UlZXEOyFPCE-`,
  Xh = `_8wO4Yx-lIIo-`,
  Zh = `FA82eVIC918-`,
  Qh = `_0sgpZmAY-zs-`,
  $h = `RLntJ4QtQLU-`;
function eg(e) {
  let { appid: t } = e,
    n = nn(t),
    { data: r } = L(n),
    [i, a, o] = se(!1),
    { mutateAsync: s } = $a({ appid: t }),
    [c, l] = (0, G.useState)(!1),
    u = qn(t);
  return !r || u
    ? null
    : (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsxs)(Rr, {
            onClick: async () => {
              try {
                (l(!0), await s(), Vn(), l(!1), a());
              } catch (e) {
                (l(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    e,
                  ));
              }
            },
            children: [
              c && (0, q.jsx)(mn, { size: `small` }),
              F(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, q.jsx)(he, {
            children: (0, q.jsx)(cn, {
              active: i,
              children: (0, q.jsx)(Je, {
                strTitle: F(`#Sale_AddedToLibrary`),
                strDescription: Ve(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, q.jsx)(`span`, { className: Jh, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, q.jsx)(tg, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function tg(e) {
  let { id: t } = e,
    n = Ah(),
    [r, i] = (0, G.useState)(0),
    [a, o] = (0, G.useState)(!1),
    { data: s } = vt(t);
  if (!t || !(`appid` in t) || C.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = th(e.os_type);
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
    return (0, q.jsx)(`div`, {
      className: Kh,
      children: a
        ? (0, q.jsx)(rg, { session: e })
        : (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(ng, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, q.jsx)(`div`, {
                className: Zh,
                children: (0, q.jsx)(ig, {
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
function ng(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(`div`, { children: F(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, q.jsxs)(`div`, {
        className: Qh,
        children: [
          (0, q.jsx)(`span`, { className: $h, children: n.machine_name }),
          (0, q.jsx)(Hh, {
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
function rg(e) {
  let { session: t } = e;
  return (0, q.jsxs)(`div`, {
    className: Yh,
    children: [
      F(`#Sale_AddToLibrary_DownloadStarted`),
      (0, q.jsx)(`br`, {}),
      (0, q.jsx)(`a`, {
        href: `${C.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: F(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function ig(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = Rh(t, n.client_instanceid);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsxs)(Rr, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, q.jsx)(De, {}), F(`#Button_StartDownload`)],
      }),
      (0, q.jsx)(`div`, {
        className: Xh,
        children: (0, q.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: qh,
          children: F(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function ag(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, q.jsxs)(`div`, {
        className: E(fi, i ? yi : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, q.jsx)(`div`, {
              className: E(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: M.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, q.jsx)(`div`, {
                className: E(bi, `TagBox`),
                children: t.map((e) =>
                  (0, q.jsx)(sg, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, q.jsx)(`div`, { children: M.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function og(e) {
  let { tagid: t, className: n } = e,
    r = xr(t, b.LANGUAGE);
  if (!r) return null;
  let i = s(re(b.LANGUAGE)),
    a = `${b.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, q.jsx)(Gp, {
    url: a,
    className: E(xi, `WidgetTag`, n),
    children: r,
  });
}
function sg(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = s(re(b.LANGUAGE)),
    a = xr(t, b.LANGUAGE),
    o = `${b.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, q.jsx)(`div`, { className: E(xi, `WidgetTag`, n), children: a })
      : (0, q.jsx)(Gp, {
          url: o,
          className: E(xi, `WidgetTag`, n),
          children: a,
        })
    : null;
}
export {
  Yl as $,
  Wr as $n,
  ra as $t,
  Mf as A,
  fa as An,
  rs as At,
  rd as B,
  Kr as Bn,
  No as Bt,
  Pf as C,
  Ji as Cn,
  Jc as Ct,
  Sf as D,
  zi as Dn,
  vs as Dt,
  Bf as E,
  Xi as En,
  xs as Et,
  Md as F,
  qr as Fn,
  Wo as Ft,
  ku as G,
  Zr as Gn,
  ka as Gt,
  Xu as H,
  ti as Hn,
  Pa as Ht,
  Td as I,
  si as In,
  Uo as It,
  Ru as J,
  $r as Jn,
  Ti as Jt,
  Q as K,
  vi as Kn,
  wa as Kt,
  _d as L,
  Ci as Ln,
  zo as Lt,
  Wd as M,
  Pi as Mn,
  Qo as Mt,
  Rd as N,
  pa as Nn,
  Zo as Nt,
  xf as O,
  ta as On,
  ys as Ot,
  Bd as P,
  Si as Pn,
  Go as Pt,
  xu as Q,
  Di as Qn,
  na as Qt,
  pd as R,
  wi as Rn,
  Ro as Rt,
  If as S,
  ma as Sn,
  Xc as St,
  yf as T,
  ga as Tn,
  Ss as Tt,
  Nu as U,
  sa as Un,
  Aa as Ut,
  Yu as V,
  Qr as Vn,
  Ao as Vt,
  ju as W,
  hi as Wn,
  Oa as Wt,
  Tu as X,
  Zi as Xn,
  Ki as Xt,
  wu as Y,
  ri as Yn,
  Gi as Yt,
  Su as Z,
  mi as Zn,
  _i as Zt,
  zf as _,
  Qi as _n,
  _l as _t,
  Tp as a,
  ii as an,
  wr as ar,
  Vl as at,
  vf as b,
  ui as bn,
  wl as bt,
  Uf as c,
  $i as cn,
  kr as cr,
  Ml as ct,
  Df as d,
  ca as dn,
  Xn as dr,
  kl as dt,
  Bi as en,
  zr as er,
  ql as et,
  Ef as f,
  Ui as fn,
  Wn as fr,
  Al as ft,
  kf as g,
  di as gn,
  yl as gt,
  jf as h,
  ia as hn,
  Dl as ht,
  Up as i,
  da as in,
  Nr as ir,
  Ul as it,
  Ud as j,
  la as jn,
  ts as jt,
  Ff as k,
  Yr as kn,
  _s as kt,
  Vf as l,
  ha as ln,
  _r as lr,
  ul as lt,
  Af as m,
  ua as mn,
  Mn as mr,
  El as mt,
  ag as n,
  pi as nn,
  Pr as nr,
  Jl as nt,
  gp as o,
  Vi as on,
  Dr as or,
  Ll as ot,
  bf as p,
  Wi as pn,
  Nn as pr,
  Tl as pt,
  Ou as q,
  gi as qn,
  Ca as qt,
  Gp as r,
  Jr as rn,
  Ar as rr,
  Wl as rt,
  Wf as s,
  oa as sn,
  Tr as sr,
  Il as st,
  og as t,
  Hi as tn,
  Br as tr,
  Kl as tt,
  Of as u,
  ea as un,
  xr as ur,
  Ol as ut,
  Tf as v,
  qi as vn,
  vl as vt,
  Nf as w,
  Xr as wn,
  Gc as wt,
  Cf as x,
  aa as xn,
  Yc as xt,
  wf as y,
  Yi as yn,
  Cl as yt,
  ud as z,
  li as zn,
  Fo as zt,
};
