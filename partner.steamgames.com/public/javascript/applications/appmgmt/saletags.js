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
  Et as te,
  I as ne,
  N as re,
  Ot as ie,
  P as ae,
  Pt as oe,
  c as se,
  ct as ce,
  ht as le,
  l as ue,
  r as de,
  s as fe,
  t as pe,
} from "./chunk~25a6634263.js";
import { a as me, i as he, r as ge, t as _e } from "./chunk~68b7e78d68.js";
import {
  Ha as ve,
  Ji as ye,
  Jn as be,
  Lr as xe,
  Ni as Se,
  Pr as Ce,
  R as we,
  Tn as Te,
  Tr as Ee,
  Un as De,
  Ut as Oe,
  Va as j,
  Vt as ke,
  Wi as Ae,
  Xi as je,
  Ya as M,
  Yi as Me,
  bn as Ne,
  en as Pe,
  er as Fe,
  g as Ie,
  ga as Le,
  gn as Re,
  hn as ze,
  hr as Be,
  l as Ve,
  no as He,
  p as Ue,
  qt as We,
  ua as N,
  zn as Ge,
} from "./chunk~1fa4b8f2ff.js";
import {
  C as Ke,
  O as qe,
  S as Je,
  _ as Ye,
  a as Xe,
  b as Ze,
  c as Qe,
  d as $e,
  f as et,
  h as P,
  i as tt,
  m as nt,
  n as rt,
  o as it,
  p as at,
  w as ot,
  x as st,
  y as ct,
} from "./chunk~0a99e05c44.js";
import {
  a as lt,
  c as ut,
  i as dt,
  o as ft,
  r as pt,
  s as mt,
} from "./chunk~9a06851bec.js";
import {
  E as ht,
  F as gt,
  I as _t,
  L as vt,
  R as yt,
  j as bt,
  z as F,
} from "./chunk~44f252525d.js";
import { a as xt, i as St, n as I } from "./chunk~f8b6a4beb3.js";
import { i as L } from "./chunk~8fb30ea08b.js";
import { t as R } from "./chunk~ede3e357a2.js";
import { t as Ct } from "./chunk~9aa05d2c7d.js";
import { t as z } from "./chunk~6257ebd2d4.js";
import { t as wt } from "./chunk~4406a7b793.js";
import { i as Tt, l as Et, r as Dt } from "./chunk~428594b857.js";
import { i as Ot, t as kt } from "./chunk~d9c3dab17a.js";
import {
  F as At,
  G as jt,
  H as Mt,
  J as Nt,
  K as Pt,
  W as Ft,
  r as It,
  z as Lt,
} from "./chunk~a825a84845.js";
import "./chunk~b7c2818157.js";
import { r as Rt, t as zt } from "./chunk~b390ee0f78.js";
import { t as Bt } from "./chunk~90b9831ad2.js";
import { t as B } from "./chunk~e29b7ee76a.js";
import { r as Vt } from "./chunk~8681f5c764.js";
import { n as Ht, t as Ut } from "./chunk~2201b8cb3d.js";
import { t as Wt } from "./chunk~f4e4ed5c17.js";
import { t as Gt } from "./chunk~92931c6310.js";
import { t as Kt } from "./chunk~c55709d290.js";
import { t as qt } from "./chunk~eefd71512b.js";
import { r as Jt } from "./chunk~38a44beba7.js";
import {
  c as Yt,
  i as Xt,
  l as Zt,
  s as Qt,
  t as $t,
} from "./chunk~8ceeb46076.js";
import { t as en } from "./chunk~2f8c67b4de.js";
import "./chunk~a6b9ae1345.js";
import { t as tn } from "./chunk~0278ae6236.js";
import { t as nn } from "./chunk~ada233e34d.js";
function rn(e) {
  return !!e;
}
var V = E(e(), 1),
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
    t = C.accountid,
    n = C.country_code;
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
  let e = I(),
    t = C.accountid;
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
    n = C.accountid,
    { data: r } = R(_n(t, n, e));
  return r === void 0 ? void 0 : r;
}
function yn(e) {
  let t = L(),
    n = C.accountid;
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
  let { data: t } = P(e && `appid` in e ? void 0 : e),
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
  try {
    let t = await fetch(U(l.STORE_BASE_URL, e, C.country_code), {
      credentials: `include`,
    });
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
  return R(In());
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
  let t = St(),
    n = xt();
  return R(Gn(t.GetAnonymousServiceTransport(), n, e));
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
  M(() => import(`./chunk~d5ba2f56ae.js`), [], import.meta.url)),
  (q.brazilian = () =>
    M(() => import(`./chunk~39c120e92a.js`), [], import.meta.url)),
  (q.bulgarian = () =>
    M(() => import(`./chunk~78cb7e4228.js`), [], import.meta.url)),
  (q.czech = () =>
    M(() => import(`./chunk~d8eff1052f.js`), [], import.meta.url)),
  (q.danish = () =>
    M(() => import(`./chunk~86d0580964.js`), [], import.meta.url)),
  (q.dutch = () =>
    M(() => import(`./chunk~005813ba41.js`), [], import.meta.url)),
  (q.english = () =>
    M(() => import(`./chunk~452b18c286.js`), [], import.meta.url)),
  (q.finnish = () =>
    M(() => import(`./chunk~acbdc00a18.js`), [], import.meta.url)),
  (q.french = () =>
    M(() => import(`./chunk~17125a4191.js`), [], import.meta.url)),
  (q.german = () =>
    M(() => import(`./chunk~52ab00b62c.js`), [], import.meta.url)),
  (q.greek = () =>
    M(() => import(`./chunk~cded0e728a.js`), [], import.meta.url)),
  (q.hungarian = () =>
    M(() => import(`./chunk~95e95aa3e8.js`), [], import.meta.url)),
  (q.indonesian = () =>
    M(() => import(`./chunk~1bf0266f4e.js`), [], import.meta.url)),
  (q.italian = () =>
    M(() => import(`./chunk~0080cf5344.js`), [], import.meta.url)),
  (q.japanese = () =>
    M(() => import(`./chunk~8b3750bb52.js`), [], import.meta.url)),
  (q.koreana = () =>
    M(() => import(`./chunk~2724a6c2c8.js`), [], import.meta.url)),
  (q.latam = () =>
    M(() => import(`./chunk~ef055f68a2.js`), [], import.meta.url)),
  (q.malay = () =>
    M(() => import(`./chunk~ca69d45f89.js`), [], import.meta.url)),
  (q.norwegian = () =>
    M(() => import(`./chunk~65c6814551.js`), [], import.meta.url)),
  (q.polish = () =>
    M(() => import(`./chunk~76a251fdd1.js`), [], import.meta.url)),
  (q.portuguese = () =>
    M(() => import(`./chunk~2483e21f7e.js`), [], import.meta.url)),
  (q.romanian = () =>
    M(() => import(`./chunk~9a3fef5eb3.js`), [], import.meta.url)),
  (q.russian = () =>
    M(() => import(`./chunk~e56e1e47d1.js`), [], import.meta.url)),
  (q.sc_schinese = () =>
    M(() => import(`./chunk~da6504af84.js`), [], import.meta.url)),
  (q.schinese = () =>
    M(() => import(`./chunk~ff125744c0.js`), [], import.meta.url)),
  (q.spanish = () =>
    M(() => import(`./chunk~e2f1f1b489.js`), [], import.meta.url)),
  (q.swedish = () =>
    M(() => import(`./chunk~190fdb38ac.js`), [], import.meta.url)),
  (q.tchinese = () =>
    M(() => import(`./chunk~643cb0252e.js`), [], import.meta.url)),
  (q.thai = () =>
    M(() => import(`./chunk~80a1517842.js`), [], import.meta.url)),
  (q.turkish = () =>
    M(() => import(`./chunk~7c426f534c.js`), [], import.meta.url)),
  (q.ukrainian = () =>
    M(() => import(`./chunk~170b3740ac.js`), [], import.meta.url)),
  (q.vietnamese = () =>
    M(() => import(`./chunk~57cbf4b218.js`), [], import.meta.url)));
async function qn(e) {
  if (q[e]) return await q[e]();
}
var Jn = ht(qn),
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
  return i.toLocaleDateString(B(), a);
}
function Xn(e, t) {
  let n = new Date(e * 1e3),
    r = { year: `numeric`, month: `short`, day: `numeric`, ...t };
  return n.toLocaleDateString(B(), r);
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
    o = B(),
    s = { ...(t?.bForce24HourClock || Zn(o[0]) ? i : a), ...n };
  return r.toLocaleTimeString(o, s);
}
function $n(e) {
  return e.toLocaleDateString(B(), { month: `long`, year: `numeric` });
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
  let { data: t } = st(e),
    n = Nt();
  if (t)
    return [
      ...(t.all_ages_screenshots || []),
      ...(!n && t.mature_content_screenshots
        ? t.mature_content_screenshots
        : []),
    ].sort((e, t) => e.ordinal - t.ordinal);
}
var ir = `qkhMGgZoiEA-`,
  ar = `dR7N9Ozyb6k-`,
  or = `_8j-XyEfRwfE-`;
function sr(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(se, {
    className: ir,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
function cr(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(se, {
    className: or,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
function lr(e) {
  let { children: t, ...n } = e;
  return (0, K.jsx)(se, {
    className: ar,
    type: `button`,
    ...n,
    children: (0, K.jsx)(`span`, { children: t }),
  });
}
var ur = E(wt(), 1),
  dr = E(oe(), 1),
  fr = `700px`;
function pr() {
  return window.innerWidth < parseInt(fr);
}
function mr() {
  let e = re();
  return (
    V.useEffect(
      () => (
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      ),
      [e],
    ),
    window.innerWidth < parseInt(fr)
  );
}
var hr = `_8Wp5WbqAbJA-`,
  gr = `UYfcYZDtfbs-`,
  _r = `O-TsWDon65A-`,
  vr = `E8DrK8oV4Hs-`,
  yr = `XTfMA1ObAn4-`,
  br = `-Rv33oXsbT0-`,
  xr = `MN6Xv-pm6i8-`,
  Sr = `uvLRAREPa4E-`,
  Cr = `UFAsjplGzxc-`,
  wr = `vL-XYGsLedM-`,
  Tr = `aCttqIa8NC4-`,
  Er = `ncKEDk26SHQ-`,
  Dr = `fNtXEMzHz58-`,
  Or = `jrHvWWIOlw4-`,
  kr = `FOKKfGVYUDk-`,
  Ar = `OClIuwfiMKQ-`,
  jr = `ZLlm68-AqhM-`,
  Mr = `raYV6Y-MQ7I-`,
  Nr = `IWFCYfhR05U-`,
  Pr = `KtOQKgU1W5w-`,
  Fr = `jXpKqo3-cWA-`,
  Ir = `QwN0eH2k0O0-`,
  Lr = `sgCiKk3DUeg-`,
  Rr = `A8oyzoRvWQ8-`,
  zr = `V7rq-SSC9xQ-`,
  Br = `pNXxwljIaD8-`,
  Vr = `lsjYiHotCwA-`,
  Hr = `iVV26V5rbpU-`,
  Ur = `XosTQwEOBO0-`,
  Wr = `ITE-CUK3U10-`,
  Gr = `BZ9dZKOmXqE-`,
  Kr = `zMMJGDB8n-o-`,
  qr = `XPrPiD27WdE-`,
  Jr = `R0sGSaFdUWo-`,
  Yr = `PON8X0ze5G8-`,
  Xr = `rfhpla0PGMA-`,
  Y = `OySWwOLLxFc-`,
  Zr = `tkR3-aHpyI4-`,
  Qr = `yyrI0Nka69I-`,
  $r = `D3fuhd6kG6I-`,
  ei = `Xk-QP-zS-18-`,
  ti = `I9cM1cZTYqc-`,
  ni = `LkW8eRLttsM-`,
  ri = `_4KL8m0wDedE-`,
  ii = `E3GBmOK5lMc-`,
  ai = `lOHW8g-YyoY-`,
  oi = `RQzfcqJK1Eg-`,
  si = `_0MLgqm-W-nA-`,
  ci = `iwrzh-mg8hE-`,
  li = `-G-r65tUoo0-`,
  ui = `qVhohSfcErA-`,
  di = `GqNlebj1uds-`,
  fi = `oqhyMK1Krt0-`,
  pi = `GRw4r5TpD5s-`,
  mi = `mspnwaz0EAg-`,
  hi = `_06Z7Ej-J6OU-`,
  gi = `lO9B4Ti6gBk-`,
  _i = `lkVpo86MFuI-`,
  vi = `chTH6btujQ0-`,
  yi = `_96v5CHkkJJY-`,
  bi = `GxypNLhVZWE-`,
  xi = `BD3vXqZ-6yI-`,
  Si = `l9by-6sJDpM-`,
  Ci = `LCYi5cxHqgI-`,
  wi = `ZuMhm9DQqbw-`,
  Ti = `eASrfjoxe3o-`,
  Ei = `ppO76q5Y-Zg-`,
  Di = `WWolAsqP274-`,
  Oi = `RIck6AI1vX8-`,
  ki = `Sndyr6iqn8g-`,
  Ai = `qUsoY9s6daM-`,
  ji = `tUIs-i3NWoU-`,
  Mi = `_8o-dkC5O1co-`,
  Ni = `v7ul8g8zqHs-`,
  Pi = `-cW4bgqyLAo-`,
  Fi = `aN31caRmRcQ-`,
  Ii = `tobj1evrU4w-`,
  Li = `RAahmG4F6sc-`,
  Ri = `GL0tHV4bOk8-`,
  zi = `LPcYz6LIoNo-`,
  Bi = `IPcip0GPG-I-`,
  Vi = `GCeo-xmfx1A-`,
  Hi = 6,
  Ui = 1e3,
  Wi = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function Gi(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = P(t),
    o = V.useRef(0),
    s = V.useRef(null);
  V.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    u = Pt(t),
    d = n && !u ? t : void 0,
    f = jt(d),
    p = jt(d, !0);
  if ((r && l.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (u) return (0, K.jsx)(qi, { id: t });
  if (!f) return null;
  let m = f.filter(Ki);
  if (m.length === 0)
    return p?.some(Ki)
      ? (0, K.jsx)(qi, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, K.jsx)(Gi, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let h;
  switch (i) {
    case 1:
      h = zi;
      break;
    case 2:
      h = Bi;
  }
  let g = m[0];
  return (0, K.jsx)(`video`, {
    className: (0, dr.default)(Ri, h),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, K.jsx)(Ji, { trailer: g }),
  });
}
function Ki(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function qi(e) {
  let { id: t } = e,
    { data: n } = st(t),
    [r, i] = V.useState(0),
    a = V.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, Hi),
      [n],
    );
  return (
    ae(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, Ui),
    a.length == 0
      ? null
      : (0, K.jsx)(`div`, {
          className: Ri,
          children: a.map((e, t) =>
            (0, K.jsx)(
              `img`,
              {
                className: (0, dr.default)(Vi, t == r && `_8Ek7qtVBxvk-`),
                src: nr(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function Ji(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, K.jsx)(K.Fragment, {
        children: t.microtrailer?.map((e) =>
          l.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, K.jsx)(
                `source`,
                { src: Mt(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
function Yi(e) {
  return e
    ? !!(
        e.related_items &&
        e.related_items.standalone_demo_appid &&
        e.related_items.standalone_demo_appid.length > 0 &&
        e.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function Xi(e) {
  return !e || !e.related_items?.standalone_demo_appid
    ? []
    : e.related_items?.standalone_demo_appid;
}
function Zi(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return Lt(e);
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
function Qi(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var $i = 7;
function ea(e, t) {
  if (!e) return !1;
  let n = Qi(e);
  return n ? !e.is_coming_soon && n + $i * J.PerDay > t : !1;
}
function ta(e, t) {
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
            gift_message: { n: 2, c: na },
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
  na = class e extends G.Message {
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
  ra = class e extends G.Message {
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
  ia = class e extends G.Message {
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
            context: { n: 2, c: gt },
            data_request: { n: 3, c: _t },
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
  aa = class e extends G.Message {
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
            cart_items: { n: 1, c: oa, r: !0, q: !0 },
            estimated_totals: { n: 5, c: ua },
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
  oa = class e extends G.Message {
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
            item_id: { n: 2, c: F },
            store_item: { n: 3, c: yt },
            gift_info: { n: 4, c: X },
            errors: { n: 5, c: sa },
            warnings: { n: 6, c: ca },
            subtotal: { n: 7, c: Z },
            price_when_added: { n: 8, c: Z },
            original_price: { n: 9, c: Z },
            coupon_applied: { n: 10, c: ra },
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
  sa = class e extends G.Message {
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
  ca = class e extends G.Message {
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
            appids_in_mastersub: { n: 3, c: la, r: !0, q: !0 },
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
  la = class e extends G.Message {
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
  ua = class e extends G.Message {
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
  da = class e extends G.Message {
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
          fields: { item_ids: { n: 1, c: F, r: !0, q: !0 } },
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
  fa = class e extends G.Message {
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
          fields: { ownership_info: { n: 1, c: ma, r: !0, q: !0 } },
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
  pa = class e extends G.Message {
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
  ma = class e extends G.Message {
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
            item_id: { n: 1, c: F },
            friend_ownership: { n: 2, c: pa, r: !0, q: !0 },
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
  ha = class e extends G.Message {
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
        (e.sm_m ||= { proto: e, fields: { item_id: { n: 1, c: F } } }), e.sm_m
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
  ga = class e extends G.Message {
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
  _a;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Checkout.ValidateCart#1`, g(ia, t, n), aa, {
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
      g(da, t, n),
      fa,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetFriendOwnershipForGifting = n;
  function r(e, t, n) {
    return e.SendMsg(`Checkout.AddFreeLicense#1`, g(ha, t, n), ga, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddFreeLicense = r;
})((_a ||= {}));
function va(e) {
  let t = L(),
    n = C.accountid;
  return V.useCallback(
    (r) => {
      t.setQueryData(ya(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function ya(e) {
  return [`AccountOwnedPackages`, e ?? 0];
}
function ba(e) {
  let t = I(),
    n = yn(),
    r = va();
  return z({
    mutationFn: () => xa(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: i, appids_added: a, purchase_result_detail: o },
      ] = e;
      (a && n(a), i && r(i));
    },
  });
}
async function xa(e, t) {
  let n = A.Init(ha);
  n.Body().set_item_id(F.fromObject(t));
  let r = await _a.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var Sa = `PFP2RDjCi0w-`,
  Ca = `Cbfoq6WaXq4-`,
  wa = `_4lcICEhYuQw-`,
  Ta = `unoV6P6DXbM-`,
  Ea = `p8d03I0RAAs-`,
  Da = `brHZRAeRCnw-`,
  Oa = `hATzo-Hjaaw-`,
  ka = `_7vEy4qHpqHo-`,
  Aa = `KoUJweWUwjY-`,
  ja = `XAGO1LWGig0-`,
  Ma = `uN9-XHR7odQ-`,
  Na = `CnbkzZzYDxs-`,
  Pa = `_8UjVVV-S-j8-`,
  Fa = `k0yt-Gxhbs4-`,
  Ia = `io6uTUtzW-A-`,
  La = `_58-zzK2uRws-`,
  Ra = `mGygcOFcFcQ-`,
  za = `mW8gl4NPYGg-`,
  Ba = `X9907eDQcow-`,
  Va = `GwjmtMACpAo-`,
  Ha = `S8JsHzHuIMA-`,
  Ua = `_4nNWbL6J2cI-`,
  Wa = `Djw7Ta0NL0Q-`,
  Ga = `u-mW6oZelJ4-`,
  Ka = `j0BUhYRjGwM-`,
  qa = `I-L7P5K0HUM-`,
  Ja = `VYzpavMEA5M-`,
  Ya = `iXn31HpcmTo-`;
function Xa(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = Ze(t),
    { data: a } = P(t),
    o = zt(t),
    { data: s } = P(o),
    { data: c } = on();
  if (!i || !a || (a.type == 1 && !Yi(s))) return null;
  let u = i.summary_unfiltered || i.summary_filtered,
    d = `#ReviewScore_UserReviewScoreAria`,
    f = !1,
    p = j.Localize(`#Language_` + l.LANGUAGE);
  if (
    (Za(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((f = !0),
          (d = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (u = i.summary_language_specific))
        : (u = i.summary_filtered)),
    !u || !u.review_score)
  )
    return null;
  let m = Wa;
  m =
    u.review_score > 0 && u.review_score < 5
      ? Ga
      : u.review_score == 5
        ? Ka
        : qa;
  let h = `${l.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    g = (0, K.jsxs)(`div`, {
      className: y(Ua, m),
      children: [
        (0, K.jsx)(`div`, {
          className: Ja,
          "aria-label": j.Localize(d, u.review_score_label, p),
          children: u.review_score_label,
        }),
        (0, K.jsxs)(`div`, {
          className: Ha,
          "aria-label": j.Localize(
            `#GameHover_UserReviewCount`,
            u.review_count.toLocaleString(B()),
          ),
          children: [
            `(`,
            n
              ? `(` + u.review_count.toLocaleString(B()) + `)`
              : f
                ? j.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    u.review_count.toLocaleString(B()),
                    p,
                  )
                : j.Localize(
                    `#GameHover_UserReviewCount`,
                    u.review_count.toLocaleString(B()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, K.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, j.Localize(`#GameHover_UserReviewsHeader`)],
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
  return (0, K.jsx)(Iu, {
    url: h,
    className: y(Va, `ReviewScore`),
    children:
      r && u.percent_positive != null && u.review_count != null && _
        ? (0, K.jsx)(Re, {
            bTopmost: !0,
            toolTipContent: j.Localize(_, u.percent_positive, u.review_count),
            children: g,
          })
        : g,
  });
}
function Za(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function Qa(e, t) {
  let n = U(T.STORE_BASE_URL, t, v.country_code);
  return (await (await fetch(n)).json()).rgWishlist || [];
}
function $a() {
  let e = I(),
    t = C.accountid;
  return R(eo(e, t));
}
function eo(e, t) {
  return {
    queryKey: ro(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Qa(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function to(e) {
  let { data: t } = $a();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function no() {
  let e = L(),
    t = C.accountid;
  return (n, r) => {
    e.setQueryData(ro(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function ro(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function io(e, t, n) {
  let r = no(),
    i = v.accountid;
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
function ao(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = P(t),
    { elDialogElement: s, fnShowLogonDialog: c } = hc(),
    [l, u] = (0, V.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = Rt(l),
    f = to(l),
    { bIsOwned: p } = xn(d),
    [m, h] = (0, V.useState)(!1),
    g = Gt(`GameHoverWishlistButton`),
    { mutateAsync: _ } = io(l, !f, n);
  (0, V.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let b = (0, V.useCallback)(
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
    : (0, K.jsxs)(ve, {
        className: y(Aa, a && `B7tWNVp-vns-`, r),
        onActivate: b,
        style: i,
        children: [
          f ? (0, K.jsx)(Me, {}) : (0, K.jsx)(je, {}),
          (0, K.jsx)(`div`, {
            className: y(ja, m && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: j.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var oo = V.createContext({
  AddImpression: () => {
    console.log(`Impression Tracking not enabled`);
  },
  BIsValid: () => !1,
});
function so() {
  return V.useContext(oo);
}
function co(e) {
  let { appID: t, feature: n, depth: r, children: i } = e,
    a = ft(n, r),
    o = so(),
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
  let u = be(l),
    d = t && (!s || (s.appID != t && s.snr != a)),
    f = ie(i.props.ref, d ? u : void 0);
  return V.cloneElement(i, { ref: f });
}
function lo(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function uo(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var fo = (e) => {
  let { appid: t } = e,
    n = (0, K.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, K.jsx)(co, { appID: t, children: n }) : n;
};
function po(e) {
  let { id: t } = e,
    { data: n } = Ke(t);
  return n
    ? (0, K.jsx)(`div`, {
        className: La,
        children: (0, K.jsx)(`div`, {
          className: Ra,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, K.jsx)(
                Qf,
                { tagid: e.tagid, className: za },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function mo(e) {
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
    g = ku(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, b] = (0, V.useState)(!1),
    [x, S] = (0, V.useState)(``),
    C = (e) => S(`translateY( -${e?.clientHeight || 0}px )`),
    { data: w } = P(t),
    { data: T } = $e(n),
    E = !f && !o && !a,
    D = w && w.item_type == 0,
    [O, k] = uo(l, u);
  return (0, K.jsxs)(`div`, {
    className: Ma,
    style: { transform: s && v ? x : `` },
    onMouseEnter: () => b(!0),
    onFocus: () => b(!0),
    onMouseLeave: () => b(!1),
    onBlur: () => b(!1),
    children: [
      (0, K.jsxs)(`a`, {
        href: i,
        className: Da,
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
              children: (0, K.jsx)(So, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, K.jsx)(`div`, {
        className: Na,
        ref: C,
        children: (0, K.jsxs)(`div`, {
          className: Fa,
          children: [
            (0, K.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, K.jsx)(`div`, {
                className: Ia,
                children: w?.name || r,
              }),
            }),
            h && (0, K.jsx)(go, { id: t }),
            (0, K.jsx)(po, { id: t }),
            !O && (0, K.jsx)(Xa, { id: t }),
            !(O || !E) &&
              (0, K.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, K.jsx)(yo, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, K.jsx)(ho, { id: t }),
                ],
              }),
            o && (0, K.jsx)(pc, { id: t, className: `mVkwv5PYwMg-` }),
            !!(O && D) &&
              (0, K.jsx)(Ht, { id: t, compatibility: k, onShowDialog: _ }),
            !!a && a,
            f &&
              D &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, K.jsx)(Ro, { appid: t.appid, bIsMuted: !1 }),
            p && (0, K.jsx)(au, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function ho(e) {
  let { id: t } = e,
    { data: n } = ct(t);
  if (!n) return null;
  let r = Zi(n);
  return (0, K.jsx)(`div`, { className: Ba, children: r });
}
function go(e) {
  let { id: t } = e,
    { data: n } = et(t);
  return n
    ? (0, K.jsx)(`div`, { className: Pa, children: n?.short_description })
    : null;
}
function _o(e) {
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
    { data: l } = ot(t),
    { data: u } = st(t),
    d = l === void 0 && u === void 0,
    [f] = uo(!!a, o);
  return (0, K.jsxs)(`div`, {
    className: y(Sa, d && `dNo27dzDPfI-`, ri, i && `djLCJl8FKv8-`),
    children: [
      (0, K.jsxs)(`a`, {
        href: r,
        className: Ca,
        children: [
          !(!s || f) && (0, K.jsx)(ao, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, K.jsx)(Sl, { id: n, snr: e.strSNR }),
          t && (0, K.jsx)(_u, { id: t }),
        ],
      }),
      (0, K.jsx)(mo, { ...e }),
    ],
  });
}
function vo(e) {
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
    { data: b } = P(t),
    x = ee(),
    [S, C, w] = ne(),
    { strStoreURL: T, snr: E } = Uo(b, o);
  if ((!b && !n) || x) return (0, K.jsx)(K.Fragment, { children: u });
  let D = t;
  b &&
    b.item_type == 1 &&
    b.included_appids?.length == 1 &&
    (D = { appid: b.included_appids[0] });
  let O = Nu() == `hiding`,
    k;
  r || (k = v ?? (b ? T : void 0));
  let [, A] = uo(p, m),
    te;
  A != 0 && b?.appid && b?.item_type == 0 && (te = b.appid);
  let re = (0, K.jsx)(_o, {
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
      onShowDeckCompatibilityDialog: te ? C : void 0,
    }),
    ie = k && !v ? (0, K.jsx)(`a`, { href: k, children: u }) : u;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(Au, {
        hoverContent: re,
        nWidthMultiplier: f,
        ...y,
        children: ie,
      }),
      te &&
        (0, K.jsx)(Ut, {
          nAppID: te,
          appName: b?.name || n,
          startingTab: A,
          active: S,
          closeModal: w,
        }),
    ],
  });
}
function yo(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = Je(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, K.jsx)(`span`, {
          title: j.Localize(`#Platform_Windows`),
          children: (0, K.jsx)(ye, {
            "aria-label": j.Localize(`#Platform_Windows`),
          }),
        });
    return (
      l.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, K.jsx)(`span`, {
            title: j.Localize(`#Platform_Linux`),
            children: (0, K.jsx)(Se, {
              "aria-label": j.Localize(`#Platform_Linux`),
            }),
          }))
        : l.PLATFORM === `macos` && a?.mac
          ? (e = (0, K.jsx)(`span`, {
              title: j.Localize(`#Platform_Mac`),
              children: (0, K.jsx)(Fe, {
                "aria-label": j.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, K.jsx)(`span`, {
              title: j.Localize(`#Platform_VR`),
              children: (0, K.jsx)(Ae, {
                "aria-label": j.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, K.jsx)(`span`, { className: y(Tr, n), children: e }) : null
    );
  }
  return (0, K.jsxs)(`span`, {
    className: y(Tr, n),
    children: [
      !i &&
        a.windows &&
        (0, K.jsx)(`span`, {
          title: j.Localize(`#Platform_Windows`),
          children: (0, K.jsx)(ye, {
            "aria-label": j.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, K.jsx)(`span`, {
          title: j.Localize(`#Platform_Mac`),
          children: (0, K.jsx)(Fe, {
            "aria-label": j.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, K.jsx)(`span`, {
          title: j.Localize(`#Platform_Linux`),
          children: (0, K.jsx)(Se, {
            "aria-label": j.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, K.jsx)(`span`, {
          title: j.Localize(`#Platform_VR`),
          children: (0, K.jsx)(Ae, {
            "aria-label": j.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function bo(e) {
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
function xo(e, t, n) {
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
function So(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = at(t),
    { data: i } = P(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, K.jsx)(Co, { purchaseOption: a, ...e });
}
function Co(e) {
  let {
      bSingleLineMode: t,
      onlyOneDiscountPct: n,
      id: r,
      purchaseOption: i,
      bHidePrePurchase: a,
      bHideReleaseDate: o,
      bHideIfDemo: s,
      bPurchaseOptionDisplay: c,
      strContainerClassName: u,
      strDiscountAndPriceClassName: d,
      strPriceFormattedClassName: f,
      bPreferWholeNumbers: p,
      bSelfPurchaseOption: m,
      bHideNewTag: h,
      bPrePurchaseBesidePrice: g,
    } = e,
    _ = l.NOW,
    { data: v } = ct(r),
    { data: b } = P(r);
  if (!b) return null;
  let x = i,
    S = !h && ea(v, _),
    w = y({
      [jr]: !0,
      [Zr]: t,
      StoreSalePriceWidgetContainer: !0,
      [ti]: S,
      [Cr]: c,
      [u ?? ``]: !!u,
    });
  if (e.bShowInLibrary)
    return (0, K.jsx)(`div`, {
      className: w,
      children: (0, K.jsx)(`div`, {
        className: Y,
        children: j.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (v && v.is_coming_soon && (!x || (!x.packageid && !x.bundleid))) {
    if (o) return null;
    let e =
      v.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(v.coming_soon_display)
        ? Lt(v)
        : j.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, Zi(v));
    return (0, K.jsx)(`div`, {
      className: w,
      children: (0, K.jsx)(`div`, { className: Y, children: e }),
    });
  }
  if (b.is_free) {
    if (!b.is_free_temporarily)
      return b.item_type == 0 && b.type == 1
        ? s
          ? null
          : (0, K.jsxs)(`div`, {
              className: w,
              children: [
                S &&
                  (0, K.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: j.Localize(`#Flag_New`),
                  }),
                (0, K.jsx)(`div`, {
                  className: Y,
                  children: j.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, K.jsxs)(`div`, {
            className: w,
            children: [
              S &&
                (0, K.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: j.Localize(`#Flag_New`),
                }),
              (0, K.jsx)(`div`, {
                className: Y,
                children: j.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (x && x.is_free_to_keep && !x.formatted_original_price)
      return (0, K.jsx)(`div`, {
        className: w,
        children: (0, K.jsx)(`div`, {
          className: Y,
          children: j.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!x || !x.formatted_final_price) return null;
  let T = b.item_type == 2,
    E = bo(x),
    D = !!E && !E.nSupersededBundlePct,
    O = E?.nSupersededBundlePct ? E.nDiscountPct : x.discount_pct || 0,
    k = ((E || T) && (!n || D || (E && !t)) && x.bundle_discount_pct) || 0,
    A = x.formatted_final_price;
  if (p) {
    let e = Jt(C.country_code.toUpperCase()),
      t = { ...he(e), bWholeUnitsOnly: !0 };
    A = ge(Number.parseInt(x.final_price_in_cents || `0`), t);
  }
  let ee = ta(v, x);
  return (0, K.jsx)(wo, {
    bSingleLineMode: !!t,
    bBundleItem: T,
    nBaseDiscountPercentage: k,
    nDiscountPercentage: O,
    bIsPrePurchase: ee,
    strBestPurchaseOriginalPriceFormatted:
      E?.strOriginalPrice || x.formatted_original_price || ``,
    strBestPurchasePriceFormatted: A,
    bHideDiscountPercentForCompliance: !!x.hide_discount_pct_for_compliance,
    bShowNewFlag: S,
    bHidePrePurchase: !!a,
    bPrePurchaseBesidePrice: g,
    strDiscountAndPriceClassName: d,
    strPriceFormattedClassName: f,
    bPurchaseOptionDisplay: c,
  });
}
function wo(e) {
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
      bBundleItem: m,
    } = e,
    h = s,
    g;
  n &&
    (g = h
      ? j.Localize(`#Discount_ARIA_Label_SpecialPrice`, a)
      : j.Localize(`#Discount_ARIA_Label`, n, a, o));
  let _ = !((!n && !i) || h) && !!a,
    v = !(!i || !n || h || t),
    b = j.Localize(xo(!!i, !!n, !!m));
  return (0, K.jsxs)(`div`, {
    className: y({
      [jr]: !0,
      [Zr]: t,
      StoreSalePriceWidgetContainer: !0,
      [Yr]: !!n,
      Discounted: !!n,
      [ei]: !!r,
      [ai]: !!u,
      [ti]: !!c,
      [Cr]: p,
      [d ?? ``]: !!d,
    }),
    "aria-label": g,
    children: [
      !(!r || l) &&
        (0, K.jsx)(`div`, {
          className: y(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, K.jsxs)(`span`, {
            children: [
              (0, K.jsx)(we, {}),
              j.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, K.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: j.Localize(`#Flag_New`),
        }),
      v &&
        (0, K.jsx)(ze, {
          toolTipContent: b,
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
      !(!i || h || v) &&
        (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(ze, {
              toolTipContent: b,
              children: (0, K.jsx)(`span`, {
                className: y(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, K.jsx)(ze, {
                toolTipContent: b,
                children: (0, K.jsx)(`span`, {
                  className: y(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || h) &&
        (0, K.jsx)(ze, {
          toolTipContent: b,
          children: (0, K.jsx)(`div`, {
            className: y(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && h) &&
        (0, K.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, K.jsx)(Ce, {}),
        }),
      _
        ? (0, K.jsxs)(`div`, {
            className: y(Qr),
            children: [
              (0, K.jsx)(`div`, {
                className: y({ [ii]: t, [$r]: !t }),
                children: a,
              }),
              (0, K.jsx)(`div`, {
                className: y({ [Y]: !0, [Zr]: t, [f ?? ``]: !!f }),
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
var To = `pE3kiYj-T9c-`,
  Eo = `bXqn3-4kGc8-`,
  Do = `bNGFzJt9CmI-`,
  Oo = `vE1beFyJ7fE-`,
  ko = `jLH2MgXW2QA-`,
  Ao = `dGNTZWr-al8-`,
  jo = `_8aFotqvmohI-`,
  Mo = `sjibpkgu4sc-`,
  No = `I09IQjtbMSg-`,
  Po = `C4-YRfvAL7Q-`;
async function Fo(e, t) {
  let n = `steam://run/` + e;
  T.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      Io(e, n, t));
}
async function Io(e, t, n) {
  console.log(`prompting for`, n);
  let r = T.STORE_BASE_URL + `about/`;
  Ue(
    (0, K.jsx)(Lo, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var Lo = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, K.jsx)(Ie, {
    onEscKeypress: t,
    className: To,
    children: (0, K.jsxs)(We, {
      children: [
        (0, K.jsxs)(Pe, { children: [` `, N(`#GotSteam_Title`), ` `] }),
        (0, K.jsxs)(ke, {
          children: [
            (0, K.jsx)(Oe, {
              children: Le(
                `#GotSteam_PromptWithDownloadLink`,
                (0, K.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: Eo,
                  children: N(`#GotSteam_DownloadLinkText`),
                }),
                (0, K.jsx)(`span`, { className: Do, children: e.strGameName }),
              ),
            }),
            (0, K.jsxs)(`div`, {
              className: Oo,
              children: [
                (0, K.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: y(ko, Ao),
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: jo,
                      children: [` `, N(`#GotSteam_Yes`), ` `],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: Mo,
                      children: [` `, N(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, K.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: ko,
                  children: [
                    (0, K.jsxs)(`div`, {
                      className: jo,
                      children: [` `, N(`#GotSteam_No`), ` `],
                    }),
                    (0, K.jsxs)(`div`, {
                      className: Mo,
                      children: [` `, N(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, K.jsxs)(`div`, {
              className: No,
              children: [
                (0, K.jsx)(Se, { className: Po }),
                N(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function Ro(e) {
  let { appid: t, bIsMuted: n } = e,
    r = Rt(t),
    i = vn(t),
    { data: a } = P(r),
    { mutate: o } = ba(r),
    s = (e) => {
      (e.preventDefault(), i ? Fo(t, a?.name) : o());
    },
    c = y(Dr, n && void 0, i ? Or : kr);
  return (0, K.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: s,
    className: c,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s(e));
    },
    children: N(i ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function zo(e, t = !1) {
  if (e)
    return t && Yi(e)
      ? `${l.STORE_BASE_URL}app/${Xi(e)[0]}`
      : `${l.STORE_BASE_URL}${e.store_url_path}`;
}
function Bo() {
  window.location.href = `${l.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var Vo = V.createContext({});
function Ho() {
  return V.useContext(Vo);
}
function Uo(e, t) {
  let n = pt(),
    r = Ho(),
    i = Xt(zo(e, t));
  return { snr: Zt(n), strStoreURL: Yt(i, n, r) };
}
function Wo(e) {
  return e
    ? { type: `replay`, gid: e }
    : C.logged_in
      ? { type: `account` }
      : { type: `anonymous`, gid: kt(Ot) };
}
var Go = V.createContext({ cartID: void 0 });
function Ko() {
  return V.useContext(Go).cartID || Wo();
}
function qo(e) {
  return e.type === `account`;
}
function Jo(e) {
  return e.type === `anonymous`;
}
var Yo = {
  bCanAddItems: !0,
  bCanModify: !0,
  bCanPurchase: !0,
  bShowValidationNotices: !0,
  bShowPurchaseOptionPicker: !0,
  bShowPageFooter: !0,
  bCanChangeCountry: !0,
};
({ ...Yo }, { ...Yo });
var Xo = class e extends G.Message {
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
  Zo = class e extends G.Message {
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
  Qo = class e extends G.Message {
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
            validation_details: { n: 9, c: Xo },
            time_added: { n: 10, br: a.readUint32, bw: f.writeUint32 },
            price_when_added: { n: 11, c: Z },
            gift_info: { n: 12, c: X },
            flags: { n: 13, c: Zo },
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
  $o = class e extends G.Message {
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
            line_items: { n: 1, c: Qo, r: !0, q: !0 },
            subtotal: { n: 2, c: Z },
            is_valid: { n: 3, br: a.readBool, bw: f.writeBool },
            validation_details: { n: 4, c: Xo },
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
  es = class e extends G.Message {
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
  ts = class e extends G.Message {
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
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: $o } } }), e.sm_m
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
  ns = class e extends G.Message {
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
            items: { n: 2, c: rs, r: !0, q: !0 },
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
  rs = class e extends G.Message {
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
            flags: { n: 11, c: Zo },
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
  is = class e extends G.Message {
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
            cart: { n: 2, c: $o },
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
  as = class e extends G.Message {
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
            flags: { n: 11, c: Zo },
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
  os = class e extends G.Message {
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
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: $o } } }), e.sm_m
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
  ss = class e extends G.Message {
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
  cs = class e extends G.Message {
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
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: $o } } }), e.sm_m
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
  ls = class e extends G.Message {
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
  us = class e extends G.Message {
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
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: $o } } }), e.sm_m
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
  ds = class e extends G.Message {
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
  fs = class e extends G.Message {
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
  ps = class e extends G.Message {
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
  ms = class e extends G.Message {
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
          fields: { line_items: { n: 1, c: hs, r: !0, q: !0 } },
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
  hs = class e extends G.Message {
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
            coupons: { n: 2, c: ra, r: !0, q: !0 },
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
  gs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountCart.GetCart#1`, g(es, t, n), ts, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCart = t;
  function n(e, t, n) {
    return e.SendMsg(`AccountCart.AddItemsToCart#1`, g(ns, t, n), is, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddItemsToCart = n;
  function r(e, t, n) {
    return e.SendMsg(`AccountCart.ModifyLineItem#1`, g(as, t, n), os, {
      ePrivilege: 1,
    });
  }
  e.ModifyLineItem = r;
  function i(e, t, n) {
    return e.SendMsg(`AccountCart.RemoveItemFromCart#1`, g(ss, t, n), cs, {
      ePrivilege: 1,
    });
  }
  e.RemoveItemFromCart = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AccountCart.MergeShoppingCartContents#1`,
      g(ls, t, n),
      us,
      { ePrivilege: 1 },
    );
  }
  e.MergeShoppingCartContents = a;
  function o(e, t, n) {
    return e.SendMsg(`AccountCart.DeleteCart#1`, g(ds, t, n), fs, {
      ePrivilege: 1,
    });
  }
  e.DeleteCart = o;
  function s(e, t, n) {
    return e.SendMsg(`AccountCart.GetRelevantCoupons#1`, g(ps, t, n), ms, {
      ePrivilege: 1,
    });
  }
  e.GetRelevantCoupons = s;
})((gs ||= {}));
var _s = class e extends G.Message {
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
  vs = class e extends G.Message {
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
  ys = class e extends G.Message {
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
  bs = class e extends G.Message {
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
            costwhenadded: { n: 2, c: ys },
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
  xs = class e extends G.Message {
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
        (e.sm_m ||= { proto: e, fields: { walletcredit: { n: 1, c: ys } } }),
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
  Ss = class e extends G.Message {
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
  Cs = class e extends G.Message {
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
  ws = class e extends G.Message {
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
  Ts = class e extends G.Message {
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
  Es = class e extends G.Message {
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
  Ds = class e extends G.Message {
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
  Os = class e extends G.Message {
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
            package_item: { n: 2, c: bs },
            wallet_credit_item: { n: 3, c: xs },
            coupon_item: { n: 4, c: Ss },
            micro_item: { n: 5, c: Cs },
            bundle_item: { n: 7, c: ws },
            loyalty_item: { n: 8, c: Ts },
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
  ks = class e extends G.Message {
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
          fields: { coupons: { n: 1, c: Ds, r: !0, q: !0 } },
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
  As = class e extends G.Message {
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
            lineitems: { n: 1, c: Os, r: !0, q: !0 },
            treeview: { n: 2, c: Es, r: !0, q: !0 },
            potentials: { n: 3, c: ks },
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
  js = class e extends G.Message {
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
  Ms = class e extends G.Message {
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
            cart_items: { n: 4, c: bs, r: !0, q: !0 },
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
  Ns = class e extends G.Message {
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
  Fs = class e extends G.Message {
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
  Is = class e extends G.Message {
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
  Ls = class e extends G.Message {
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
  Rs = class e extends G.Message {
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
  zs = class e extends G.Message {
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
  Bs = class e extends G.Message {
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
  Vs = class e extends G.Message {
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
  Hs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, g(_s, t, n), vs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      g(As, t, n),
      js,
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
    return e.SendMsg(`ShoppingCart.AddPackages#1`, g(Ms, t, n), Ns, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = r;
  function i(e, t, n) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, g(Ps, t, n), Fs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = i;
  function a(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, g(Is, t, n), Ls, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = a;
  function o(e, t, n) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, g(Rs, t, n), zs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ModifyLineItem = o;
  function s(e, t, n) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, g(Bs, t, n), Vs, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.RemoveLineItems = s;
})((Hs ||= {}));
function Us(e) {
  return qo(e) ? e.type : e.gid;
}
function Ws(e) {
  return [`shopping_cart`, Us(e), C.accountid];
}
function Gs(e) {
  e.invalidateQueries({ queryKey: [`validate_checkout`], exact: !1 });
}
function Ks(e, t, n) {
  (e.setQueryData(Ws(t), n), Gs(e));
}
async function qs(e, t, n, r, i) {
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
async function Js(e, t, n, r) {
  let i = A.Init(ns);
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
    r && i.Body().set_navdata(Cn.fromObject(ut(r))),
    i.Body().set_user_country(t));
  let a = await gs.AddItemsToCart(e, i);
  return (
    a.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${a.GetEResult()}`),
    [a.GetEResult(), a.Body().toObject()]
  );
}
function Ys(e) {
  let t = { line_items: [] };
  return (
    e?.lineitems?.length &&
      (t.line_items = e.lineitems
        .map((e) => (e.package_item?.gidbundle ? null : Xs(e)))
        .filter(rn)),
    t
  );
}
function Xs(e) {
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
function Zs(e, t, n, r, i) {
  return Qs(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function Qs(e, t) {
  let n = Ko(),
    r = I(),
    i = L(),
    { storeBrowseContext: a, dataLoader: o } = rt(),
    { country: s } = a,
    c = dt(t);
  return z({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (qo(n)) {
        let [a, o] = await Js(r, s, e, c);
        if (a == 1) ((t = o.line_item_ids), Ks(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (Jo(n)) {
        let a = e.map((e) => e.packageid).filter(rn),
          o = e.map((e) => e.bundleid).filter(rn);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await qs(
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
            Ks(i, n, Ys(c)));
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
            (i.prefetchQuery(Xe(o, r)), i.prefetchQuery(Qe(o, r)));
          },
        );
      })();
    },
  });
}
function $s(e, t, n) {
  return lt(e ? `${l.STORE_BASE_URL}${e.store_url_path}` : void 0, t, n);
}
async function ec(e, t) {
  let n = A.Init(bt);
  (n.Body().set_context(At(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await vt.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function tc(e) {
  let t = ic(I());
  return R(nc(t, e));
}
function nc(e, t) {
  return { queryKey: rc(t), queryFn: async () => e.load(t), enabled: !!t };
}
function rc(e) {
  return [`hardwaredetail`, e];
}
function ic(e) {
  return _e(`HardwareDetailLoader`, () => ac(e));
}
function ac(e) {
  return new ur.default(async (t) => {
    let n = await ec(e, t),
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
var oc = { high_pending_orders: !1, inventory_available: !0 };
function sc(e) {
  let { data: t } = P(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = tc(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : oc) : null;
}
var cc = `wvEYeGaFmt0-`,
  lc = `GW1050ijiP0-`;
function uc(e) {
  let { id: t, className: n } = e,
    r = pt(),
    { data: i } = P(t),
    { data: a } = ct(t),
    { data: s } = nt(t),
    c = sc(t),
    { bIsOwned: l } = xn(t),
    u = $s(i),
    f = (0, V.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          Te(window, `steam://run/${e}`));
      }
    }, [i]);
  if (!i || !a || !s || i.type == 8) return null;
  let p =
    i.is_free ||
    (s.final_price_in_cents != null && s.final_price_in_cents == `0`) ||
    (s.discount_pct && s.discount_pct >= 100);
  if (i.item_type == 1) {
    if (i.type == 10) {
      if (!c) return (0, K.jsx)(qt, { size: `small`, position: `center` });
      if (!c.inventory_available)
        return (0, K.jsx)(`div`, {
          className: y(lc, n),
          children: (0, K.jsxs)(`span`, {
            children: [` `, j.Localize(`#Sale_ReserveExhausted`)],
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
          onClick: (t) => Te(t, e),
          className: y(cc, n),
          children: (0, K.jsx)(`span`, {
            children: j.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = Qt(`${T.STORE_BASE_URL}freelicense/addfreelicense`, r);
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
              className: y(cc, n),
              type: `submit`,
              children: j.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((l || p) && !i.is_coming_soon) {
      let e = j.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        l
          ? (e = j.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : i.is_free_temporarily &&
            (e = j.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, K.jsx)(`div`, {
          className: y(cc, n),
          onClick: f,
          children: (0, K.jsx)(`span`, { children: e }),
        })
      );
    }
    if (s.formatted_final_price == ``)
      return (0, K.jsx)(`a`, {
        href: u,
        className: y(cc, n),
        children: j.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, K.jsx)(dc, {
    className: n,
    storeItemBestPurchaseOption: s,
    storeItemDefaultData: i,
  });
}
function dc(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = pt(),
    { mutate: a } = Zs(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, K.jsx)(`div`, {
    className: y(cc, t),
    onClick: () => a(),
    children: (0, K.jsx)(`span`, { children: j.Localize(`#Store_AddToCart`) }),
  });
}
var fc = `_8xhMURZRDBY-`;
function pc(e) {
  let { id: t, className: n } = e,
    { data: r } = P(t);
  if (!r) return null;
  let i =
      r.related_items?.demo_appid && r.related_items.demo_appid
        ? r.related_items.demo_appid
        : [],
    a = i.length > 0,
    o = a || r.type === 1,
    s = o
      ? j.Localize(`#Sale_InstallDemo_ttip`, r.name || ``)
      : a
        ? j.Localize(`#Sale_CannotInstallDemo_ttip`, r.name || ``)
        : j.Localize(`#Loading`);
  if (l.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, K.jsx)(`div`, {
        className: n,
        children: (0, K.jsx)(Kf, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, K.jsx)(uc, { id: t, className: n })
    : (0, K.jsx)(Re, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && Fo(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: y(n, fc, !o && `gpIFsnR2ZGs-`),
        children: o
          ? j.Localize(`#Sale_InstallDemo`)
          : j.Localize(`#Sale_DemoNotFound`),
      });
}
function mc(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, K.jsx)(Ve, {
    strTitle: $t.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || $t.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: j.Localize(`#Button_OK`),
    onOK: () => {
      (Bo(), t());
    },
  });
}
function hc(e) {
  let [t, n, r] = ne();
  return {
    elDialogElement: (0, K.jsx)(Vt, {
      active: t,
      children: (0, K.jsx)(mc, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
async function gc(e) {
  return bc(
    `${l.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function _c(e) {
  let t = pe.InitFromClanID(e, l.EUNIVERSE);
  return bc(
    `${l.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function vc(e) {
  return bc(
    `${l.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function yc(e) {
  return bc(
    `${l.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function bc(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function xc(e) {
  return [`clantoclaninfo`, e];
}
function Sc(e) {
  return [`apptoclanid`, e];
}
function Cc(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function wc(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var Tc = new WeakSet();
function Ec(e) {
  if (!Tc.has(e)) {
    Tc.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var Dc = new WeakMap();
function Oc(e) {
  if (!e) return null;
  let t = Dc.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new pe(e.clanSteamIDString)
          : pe.InitFromClanID(e.clanAccountID, l.EUNIVERSE),
      }),
      Dc.set(e, t)),
    t
  );
}
function kc(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function Ac(e, t) {
  if (!t) return null;
  Ec(e);
  let n = kc(t);
  return (
    e.setQueryData(xc(n.clanAccountID), n),
    n.appid && e.setQueryData(Sc(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(Cc(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function jc(e, t) {
  for (let n of t) Ac(e, n);
}
function Mc(e) {
  let t = L();
  return R(Nc(e, t));
}
function Nc(e, t) {
  return (
    Ec(t),
    {
      queryKey: xc(e ?? null),
      queryFn: async () => (e ? Ac(t, await _c(e)) : null),
      enabled: e !== void 0,
      select: Oc,
    }
  );
}
function Pc(e, t) {
  return (
    Ec(t),
    {
      queryKey: Sc(e),
      queryFn: async () => Ac(t, await gc(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function Fc(e, t, n = `group`) {
  return (
    Ec(t),
    {
      queryKey: Cc(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(Cc(e, `group`));
          if (n) return n;
        }
        return (
          Ac(t, n == `store` ? await yc(e) : await vc(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function Ic(e) {
  return e.isPending ? void 0 : (e.data ?? null);
}
function Lc(e) {
  let t = L(),
    n = R(Pc(e, t));
  return Mc(e ? Ic(n) : void 0);
}
function Rc(e, t = `group`) {
  let n = L(),
    r = R(Fc(e, n, t));
  return Mc(e ? Ic(r) : void 0);
}
function zc(e, t) {
  if (e) return Oc(t.getQueryData(xc(e))) ?? void 0;
}
function Bc(e, t) {
  if (e) return zc(t.getQueryData(Sc(e)), t);
}
function Vc(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = zc(t.getQueryData(Cc(e, n)), t);
    if (r) return r;
  }
}
async function Hc(e, t) {
  return e ? Oc(await t.fetchQuery(Nc(e, t))) : null;
}
async function Uc(e, t) {
  return e ? Hc(await t.fetchQuery(Pc(e, t)), t) : null;
}
async function Wc(e, t, n = `group`) {
  return e ? Hc(await t.fetchQuery(Fc(e, t, n)), t) : null;
}
async function Gc(e) {
  let t = { get_appids: !0, l: l.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${l.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function Kc(e) {
  return R(qc(e));
}
function qc(e) {
  return {
    queryKey: Jc(e),
    queryFn: async () => {
      let t = await Gc(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function Jc(e) {
  return [`creatorhomebyaccount`, e];
}
function Yc(e, t) {
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
var Xc = class e extends G.Message {
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
  Zc = class e extends G.Message {
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
          fields: { ignore_list: { n: 1, c: Qc, r: !0, q: !0 } },
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
  Qc = class e extends G.Message {
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
  $c;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StorePreferences.GetIgnoreList#1`, g(Xc, t, n), Zc, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetIgnoreList = t;
})(($c ||= {}));
var el = E(Wt()),
  tl = class e {
    m_queryClient = Ct;
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
      return this.ReadData().setCuratorsFollowed.has(nl(e));
    }
    BIsIgnoringCurator(e) {
      return this.ReadData().setCuratorsIgnored.has(nl(e));
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
      let o = await el.default.post(r, a, { withCredentials: !0 });
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
        let r = await el.default.post(a, o, { withCredentials: !0 });
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
        let t = Kt(e);
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
        return (i && (e = mt.ParseSNR(i)), window.AddItemToCart(t, a, e), !0);
      }
      let s = new FormData();
      (s.append(`action`, `add_to_cart`),
        a ? s.append(`bundleid`, a.toString()) : s.append(`subid`, `` + t),
        i && s.append(`snr`, i),
        s.append(`sessionid`, d()),
        s.append(`quantity`, `1`));
      let c = ce(e);
      e.preventDefault();
      try {
        (await el.default.post(n, s, { withCredentials: !0 }),
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
function nl(e) {
  return typeof e == `object` && `GetAccountID` in e
    ? e.GetAccountID()
    : Number(e);
}
function rl() {
  let { isPending: e } = Ln();
  return [e, tl.Get()];
}
var il = `pL8IDIWBDg8-`,
  al = `JuZBiq95wYE-`;
async function ol(e, t) {
  let n = U(T.STORE_BASE_URL, t, v.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function sl() {
  let e = I(),
    t = v.accountid;
  return R(cl(e, t));
}
function cl(e, t) {
  return {
    queryKey: dl(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await ol(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function ll(e) {
  let { data: t } = sl();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function ul() {
  let e = L(),
    t = v.accountid;
  return (n, r) => {
    e.setQueryData(dl(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function dl(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function fl(e, t, n) {
  let r = ul(),
    i = v.accountid;
  return z({
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
var pl = `VULTMp1PCTw-`,
  ml = `_2vLXBykr6zc-`;
async function hl(e, t) {
  let n = U(T.STORE_BASE_URL, t, v.country_code),
    r = await (await fetch(n)).json();
  return Object.keys(r.rgIgnoredApps).map(Number) || [];
}
function gl() {
  let e = I(),
    t = v.accountid;
  return R(_l(e, t));
}
function _l(e, t) {
  return {
    queryKey: bl(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await hl(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function vl(e) {
  let { data: t } = gl();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function yl() {
  let e = L(),
    t = v.accountid;
  return (n, r) => {
    e.setQueryData(bl(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function bl(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function xl(e, t, n, r = 0) {
  let i = yl(),
    a = v.accountid;
  return z({
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
function Sl(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, V.useState)(!1),
    o = Gt(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = hc(),
    l = t && `appid` in t ? t.appid : void 0,
    { mutateAsync: u } = xl(l, !vl(l), n),
    d = t && `appid` in t && tl.Get().BIsGameIgnored(t.appid);
  return (0, K.jsxs)(ve, {
    className: y(pl, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        v.logged_in
          ? t && `appid` in t && (a(!0), await u(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, K.jsx)(xe, {}),
      (0, K.jsx)(`div`, {
        className: y(ml, i && `vyz9N2LpdMs-`),
        children: N(d ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function Cl(e, t) {
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
function wl() {
  let e = I(),
    t = C.accountid;
  return R(Tl(e, t));
}
function Tl(e, t) {
  return {
    queryKey: Al(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await Cl(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function El(e) {
  let { data: t } = wl();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function Dl(e) {
  let { data: t } = wl();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function Ol() {
  return l.EREALM != h.k_ESteamRealmChina;
}
function kl() {
  let e = L(),
    t = C.accountid;
  return (n, r, i, a) => {
    e.setQueryData(Al(t), (e) => {
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
function Al(e) {
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
function jl(e, t) {
  let n = kl(),
    r = v.accountid;
  return z({
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
var Ml = `QOSk1wMadGg-`,
  Nl = `DH1jwyMHeXo-`,
  Pl = `J5g1CfUd95U-`,
  Fl = `_3IPvWkyhZzM-`,
  Il = `jB1S5EvgUjI-`,
  Ll = `iWO-8zu8RAA-`,
  Rl = `MTgAGoNV5vg-`,
  zl = `LEvP9jHHfL8-`,
  Bl = `K9ZawxnkJcI-`,
  Vl = `OlPIY4AN-5s-`,
  Hl = `_7UT3Pb65ni0-`,
  Ul = `sT74IdnPxY8-`,
  Wl = `ZTz7p5tpqNU-`,
  Gl = `ct7kvDppls0-`,
  Kl = `SG9Xn5tF5a0-`,
  ql = `clYVRh6K2Ig-`,
  Jl = `k6MwDwdCJTU-`,
  Yl = `mnFUxHcas-0-`,
  Xl = `_6lWvo8crYSU-`,
  Zl = `r3PgsXSGPho-`,
  Ql = `EWCiFLRR-T8-`,
  $l = `oXDp-N2XFF4-`,
  eu = `GEroszngeLM-`,
  tu = (e) => {
    let t = l.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, K.jsx)(Ve, {
      strTitle: N(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, K.jsx)(`div`, {
        children: Le(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, K.jsx)(`a`, {
            href: t,
            target: l.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: N(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  nu = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = hc();
    if (!Ol()) return null;
    let l = null;
    switch (o) {
      case `app`:
        l = N(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        l = N(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        l = N(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        l = N(`#steam_group_follow_ttip`);
    }
    return l
      ? (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(ze, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, K.jsxs)(ue, {
                className: y(en, Zl, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  C.logged_in ? a() : c();
                },
                children: [
                  r && (0, K.jsx)(nn, { size: 15 }),
                  !r && (i || n) && (0, K.jsx)(Be, {}),
                  (0, K.jsx)(`div`, {
                    className: y(Ql, `FollowBtnText`),
                    children:
                      !r &&
                      N(
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
function ru(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = V.useState(!1),
    { data: s } = Mc(t ? void 0 : r),
    c = El(r),
    l = Dl(r),
    { mutateAsync: u } = jl(r, c ? $.k_ECuratorUnfollow : $.k_ECuratorFollow),
    [d, f, p] = ne(),
    m = V.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(nu, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          C.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, K.jsx)(Vt, {
        active: d,
        children: (0, K.jsx)(tu, { closeModal: p }),
      }),
    ],
  });
}
function iu(e) {
  let { appid: t, className: n } = e,
    [r, i] = V.useState(!1),
    a = ll(t),
    o = vl(t),
    s = pt(),
    c = mt.GetSNRLinkParam(s),
    { mutateAsync: l } = fl(t, !a, c),
    u = V.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, K.jsx)(nu, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function au(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = Mc(t),
    { data: o } = Kc(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= tn(void 0, `medium`, `web`)),
    (0, K.jsxs)(`div`, {
      className: y(Ya, n),
      style: r,
      children: [
        (0, K.jsx)(`a`, {
          href: Yc(o, `developer`),
          children: (0, K.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, K.jsx)(ru, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var ou = new URL(
    `../../../images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  su = 5500,
  cu = 2e3,
  lu = 10;
function uu(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, K.jsx)(
          `img`,
          {
            className: Ta,
            loading: `lazy`,
            src: tr(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: cu,
      }
    : null;
}
function du(e, t) {
  return {
    stringifyID: `vid_${qe(e)}`,
    rctImage: (0, K.jsx)(Gi, { id: e, active: !0 }),
    nDurationMs: su,
  };
}
function fu(e) {
  let t = Ft(e);
  return Pt(e) ? void 0 : t;
}
function pu(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = nr(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${qe(e)}`,
      rctImage: (0, K.jsx)(
        `img`,
        {
          className: Ta,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: cu,
    };
  });
}
function mu(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(du(e, i)),
    r && r.length > 0 && a.push(...pu(e, t.name, r, lu)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = uu(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function hu(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(du(t, a)), r && r.length > 0 && o.push(...pu(e, n.name, r, lu)));
  let s = lu - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...pu(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function gu(e) {
  return (0, K.jsx)(`img`, {
    className: Ta,
    loading: `lazy`,
    src: s(ou),
    alt: `default`,
  });
}
function _u(e) {
  let { id: t } = e,
    { data: n } = Ye(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, K.jsx)(`div`, {
      className: wa,
      children: (0, K.jsx)(gu, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, K.jsx)(xu, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, K.jsx)(yu, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, K.jsx)(vu, { storeItemDefaultData: n });
}
function vu(e) {
  let { storeItemDefaultData: t } = e,
    n = It(t),
    r = fu(n),
    { data: i } = $e(n),
    a = rr(n),
    o = (0, V.useMemo)(() => mu(n, t, i, a, r), [n, a, r, i, t]);
  return (0, K.jsx)(Su, { rgTrailerAndImages: o });
}
function yu(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = It(t);
  return fu(r)
    ? (0, K.jsx)(vu, { storeItemDefaultData: t })
    : (0, K.jsx)(bu, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function bu(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = Rt(t),
    a = rr(n),
    o = rr(i),
    s = fu(i),
    c = (0, V.useMemo)(() => hu(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, K.jsx)(Su, { rgTrailerAndImages: c });
}
function xu(e) {
  let { includeAppIDs: t } = e,
    n = tt(),
    r = me({ queries: t.map((e) => Xe(n, { appid: e })) }),
    i = me({ queries: t.map((e) => it(n, { appid: e })) }),
    a = (0, V.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return uu(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, K.jsx)(Su, { rgTrailerAndImages: a });
}
function Su(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, V.useRef)(0),
    r = re(),
    [i] = V.useState(new le()),
    a = (0, V.useCallback)(
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
    (0, V.useEffect)(() => (t.length > 0 && a(), () => i.Cancel()), [t, a, i]),
    (0, K.jsx)(`div`, {
      className: wa,
      children: t?.map((e, t) =>
        (0, K.jsx)(
          `div`,
          {
            className: y({ [Ta]: !0, [Ea]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
var Cu = `ghYXSqVPJ-U-`,
  wu = `lx1fe7xI0bg-`,
  Tu = `ARp2qEoElPE-`,
  Eu = `DwDon-U2yLI-`,
  Du = 150,
  Ou = V.createContext(void 0);
function ku() {
  return V.useContext(Ou);
}
function Au(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = ee(),
    c = mr(),
    l = !s && !c,
    [u, d] = V.useState(!1),
    [f, p] = V.useState(void 0),
    m = (e) => {
      (d(!0), p(e.currentTarget));
    },
    h = () => d(!1),
    g = V.useCallback(() => d(!1), []);
  return (0, K.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: y(Cu, o),
    onMouseEnter: m,
    onMouseLeave: h,
    onTouchStart: () => d(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (d(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      l &&
        f &&
        (0, K.jsx)(Ou.Provider, {
          value: g,
          children: (0, K.jsx)(ju, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, K.jsx)(de, { children: a }),
    ],
  });
}
function ju(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = Du,
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
        if (He()) return;
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
        minHeight: Nu() == `hiding` ? void 0 : 300,
        height: Nu() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, K.jsx)(Mu, {
    hoverProps: u,
    children: (0, K.jsx)(de, { children: o }),
  });
}
function Mu(e) {
  let { hoverProps: t, children: n } = e,
    r = V.useCallback((e) => e?.focus(), []);
  return (0, K.jsx)(Ne, {
    ...t,
    children: (0, K.jsx)(Bt, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: y(Tu, Oa), enterDone: y(Eu, ka) },
      children: (e) =>
        (0, K.jsx)(`div`, {
          ref: te(e, r),
          className: wu,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function Nu() {
  return window.sessionStorage?.getItem(Pu) || `default`;
}
var Pu = `DEBUG_UseNewGameHover`;
function Fu(e) {
  window.sessionStorage.setItem(Pu, e);
}
window.SetHoverPresentation = Fu;
function Iu(e) {
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
    u = a ? n : n ? Lu(n, l.STORE_BASE_URL) : void 0,
    d = lt(u);
  return d
    ? (0, K.jsx)(fe, {
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
function Lu(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
var Ru = -700,
  zu = -600,
  Bu = -599,
  Vu = -598,
  Hu = -597,
  Uu = -596,
  Wu = -595,
  Gu = -594,
  Ku = -593,
  qu = -592,
  Ju = -591,
  Yu = -590,
  Xu = -589,
  Zu = -588,
  Qu = -587,
  $u = -586,
  ed = -585,
  td = -584,
  nd = -583,
  rd = -582,
  id = -581,
  ad = -580,
  od = -579,
  sd = -578,
  cd = -577,
  ld = -576,
  ud = -575,
  dd = -574,
  fd = -573,
  pd = -572,
  md = -571,
  hd = -500,
  gd = -499,
  _d = -498,
  vd = -497,
  yd = -496,
  bd = -300,
  xd = -203,
  Sd = -202,
  Cd = -201,
  wd = -200,
  Td = -199,
  Ed = -198,
  Dd = -197,
  Od = -196,
  kd = -195,
  Ad = -194,
  jd = -193,
  Md = -192,
  Nd = -191,
  Pd = -190,
  Fd = -189,
  Id = -188,
  Ld = -187,
  Rd = -186,
  zd = -185,
  Bd = -184,
  Vd = -183,
  Hd = -182,
  Ud = -102,
  Wd = -101,
  Gd = -100;
function Kd(e) {
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
    case Ud:
      return `Mac OS`;
    case Wd:
      return `MacOS 10.4`;
    case Gd:
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
    case xd:
      return `Linux`;
    case Sd:
      return `Linux 2.2`;
    case Cd:
      return `Linux 2.4`;
    case wd:
      return `Linux 2.6`;
    case Td:
      return `Linux 3.2`;
    case Ed:
      return `Linux 3.5`;
    case Dd:
      return `Linux 3.6`;
    case Od:
      return `Linux 3.10`;
    case kd:
      return `Linux 3.16`;
    case Ad:
      return `Linux 3.18`;
    case jd:
      return `Linux 3.x`;
    case Nd:
      return `Linux 4.1`;
    case Pd:
      return `Linux 4.4`;
    case Fd:
      return `Linux 4.9`;
    case Id:
      return `Linux 4.14`;
    case Ld:
      return `Linux 4.19`;
    case Md:
      return `Linux 4.x`;
    case Rd:
      return `Linux 5.x`;
    case zd:
      return `Linux 5.4`;
    case Bd:
      return `Linux 6.x`;
    case Vd:
      return `Linux 7.x`;
    case Hd:
      return `Linux 5.10`;
    case bd:
      return `PS3`;
    case Ru:
      return `Web Client`;
    case hd:
      return `Android`;
    case gd:
      return `Android 6.x`;
    case _d:
      return `Android 7.x`;
    case vd:
      return `Android 8.x`;
    case yd:
      return `Android 9.x`;
    case zu:
      return `iOS`;
    case Bu:
      return `iOS 1`;
    case Vu:
      return `iOS 2`;
    case Hu:
      return `iOS 3`;
    case Uu:
      return `iOS 4`;
    case Wu:
      return `iOS 5`;
    case Gu:
      return `iOS 6`;
    case Ku:
      return `iOS 6.1`;
    case qu:
      return `iOS 7`;
    case Ju:
      return `iOS 7.1`;
    case Yu:
      return `iOS 8`;
    case Xu:
      return `iOS 8.1`;
    case Zu:
      return `iOS 8.2`;
    case Qu:
      return `iOS 8.3`;
    case $u:
      return `iOS 8.4`;
    case ed:
      return `iOS 9`;
    case td:
      return `iOS 9.1`;
    case nd:
      return `iOS 9.2`;
    case rd:
      return `iOS 9_.3`;
    case id:
      return `iOS 10`;
    case ad:
      return `iOS 10.1`;
    case od:
      return `iOS 10.2`;
    case sd:
      return `iOS 10.3`;
    case cd:
      return `iOS 11`;
    case ld:
      return `iOS 11.1`;
    case ud:
      return `iOS 11.2`;
    case dd:
      return `iOS 11.3`;
    case fd:
      return `iOS 11.4`;
    case pd:
      return `iOS 12`;
    case md:
      return `iOS 12.1`;
    default:
    case -1:
      return `Unknown`;
  }
}
var qd = class e extends G.Message {
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
  Jd = class e extends G.Message {
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
  Yd = class e extends G.Message {
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
  Xd = class e extends G.Message {
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
            sessions: { n: 1, c: Zd, r: !0, q: !0 },
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
  Zd = class e extends G.Message {
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
  Qd = class e extends G.Message {
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
  $d = class e extends G.Message {
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
            running_games: { n: 7, c: ef, r: !0, q: !0 },
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
  ef = class e extends G.Message {
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
  tf = class e extends G.Message {
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
        (e.sm_m ||= { proto: e, fields: { client_info: { n: 1, c: $d } } }),
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
  nf = class e extends G.Message {
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
  rf = class e extends G.Message {
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
            apps: { n: 2, c: af, r: !0, q: !0 },
            client_info: { n: 3, c: $d },
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
  af = class e extends G.Message {
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
            dlcs: { n: 17, c: of, r: !0, q: !0 },
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
  of = class e extends G.Message {
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
  sf = class e extends G.Message {
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
  cf = class e extends G.Message {
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
  uf = class e extends G.Message {
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
  df = class e extends G.Message {
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
  ff = class e extends G.Message {
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
      return `CClientComm_LaunchClientApp_Response`;
    }
  },
  mf = class e extends G.Message {
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
      return `CClientComm_EnableOrDisableDownloads_Response`;
    }
  },
  _f;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientLogonInfo#1`, g(qd, t, n), Jd, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientLogonInfo = t;
  function n(e, t, n) {
    return e.SendMsg(`ClientComm.GetAllClientLogonInfo#1`, g(Yd, t, n), Xd, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAllClientLogonInfo = n;
  function r(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientInfo#1`, g(Qd, t, n), tf, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientInfo = r;
  function i(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientAppList#1`, g(nf, t, n), rf, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClientAppList = i;
  function a(e, t, n) {
    return e.SendMsg(`ClientComm.InstallClientApp#1`, g(sf, t, n), cf, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.InstallClientApp = a;
  function o(e, t, n) {
    return e.SendMsg(`ClientComm.UninstallClientApp#1`, g(lf, t, n), uf, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UninstallClientApp = o;
  function s(e, t, n) {
    return e.SendMsg(`ClientComm.LaunchClientApp#1`, g(ff, t, n), pf, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.LaunchClientApp = s;
  function c(e, t, n) {
    return e.SendMsg(`ClientComm.SetClientAppUpdateState#1`, g(df, t, n), mf, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetClientAppUpdateState = c;
  function l(e, t, n) {
    return e.SendMsg(`ClientComm.EnableOrDisableDownloads#1`, g(hf, t, n), gf, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnableOrDisableDownloads = l;
})((_f ||= {}));
var vf = `RemoteDownload_OnlineClient`,
  yf = `RemoteDownload_ClientAppList`,
  bf = `RemoteDownload_ClientAppData`,
  xf = class extends Error {
    constructor(e, t) {
      (super(e), (this.result = t));
    }
    result;
  };
function Sf() {
  let e = I(),
    t = H();
  return R({
    queryKey: [vf, t],
    queryFn: async () => {
      let t = A.Init(Yd),
        n = await _f.GetAllClientLogonInfo(e, t);
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
var Cf = class {
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
async function wf(e, t, n) {
  let r = t.client_instanceid,
    i = A.Init(nf);
  (i.Body().set_fields(`games`),
    i.Body().set_filters(n),
    i.Body().set_client_instanceid(r),
    i.Body().set_include_client_info(!0));
  let a = await _f.GetClientAppList(e, i);
  if (a.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetClientAppList`,
        a.GetEResult(),
        a.Hdr().transport_error(),
      ),
      new xf(`Error from GetClientAppList: ${a.GetEResult()}`, a.GetEResult())
    );
  let o = new Map();
  for (let e of a.Body().apps()) {
    let t = new Cf(e);
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
async function Tf(e, t, n, r) {
  if (!r) return;
  let i = await wf(e, t, n);
  for (let [e, t] of i.mapApps) r.mapApps.set(e, t);
  return { ...i, mapApps: r.mapApps };
}
function Ef(e, t, n) {
  return [yf, e, t, n];
}
function Df(e, t = !0) {
  let n = Sf(),
    r = I(),
    i = H(),
    a = (e) => {
      t && (e.result == 21 || e.result == 16) && n.refetch();
    },
    o = me({
      queries: (n.data?.sessions || []).map((e) => ({
        queryKey: Ef(i, e.client_instanceid, `none`),
        queryFn: async () => wf(r, e, `none`),
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
        queryKey: Ef(i, e.client_instanceid, `changing`),
        queryFn: async () => Tf(r, e, `changing`, o[n].data),
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
        let t = Ef(i, e.client_instanceid, `changing`);
        c.removeQueries({ queryKey: t });
      }
      for (let e of o) e.refetch();
    },
  };
}
function Of(e, t) {
  return [bf, e, t];
}
function kf(e, t = !0) {
  let n = H(),
    { rgQueries: r } = Df(void 0, t);
  return R({
    queryKey: Of(n, e),
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
function Af(e, t, n) {
  let r = I(),
    i = kf(e),
    a = H(),
    o = L();
  return z({
    mutationFn: async () => {
      let n = A.Init(sf);
      (n.Body().set_appid(e), n.Body().set_client_instanceid(t));
      let s = await _f.InstallClientApp(r, n);
      if (s.GetEResult() != 1)
        throw (
          console.error(`Received error from InstallClientApp`, s.GetEResult()),
          Error(`Error from InstallClientApp: ${s.GetEResult()}`)
        );
      let c = i?.data;
      (c && c.get(t) && c.get(t).app.SetDownloading(),
        o.setQueryData(Of(a, e), c),
        i.refetch());
    },
    onSuccess: n,
  });
}
var jf = `KDJh8Ln6DTA-`,
  Mf = `cwU-YKIjBO4-`,
  Nf = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function Pf(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, V.useCallback)(
      (e) => {
        n?.length &&
          Ge(
            (0, K.jsx)(Ff, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            Nf,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, K.jsx)(`button`, {
        onClick: r,
        className: jf,
        children: (0, K.jsx)(Lf, {}),
      })
    : null;
}
function Ff({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, K.jsx)(`ul`, {
    className: Mf,
    children: e.map((e) =>
      (0, K.jsx)(
        De,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: N(
            `#GamesList_Client_Indicator`,
            If(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function If(e) {
  switch (e) {
    case 1:
      return N(`#Library_DeviceType_PC`);
    case 544:
      return N(`#Library_DeviceType_SteamDeck`);
    case 546:
      return N(`#Library_DeviceType_SteamMachine`);
    case x:
      return N(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function Lf(e) {
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
var Rf = `O2hPihu9CRE-`,
  zf = `QhSrcq93V7k-`,
  Bf = `_7MjE60RYT0Q-`,
  Vf = `UlZXEOyFPCE-`,
  Hf = `_8wO4Yx-lIIo-`,
  Uf = `FA82eVIC918-`,
  Wf = `_0sgpZmAY-zs-`,
  Gf = `RLntJ4QtQLU-`;
function Kf(e) {
  let { appid: t } = e,
    n = Rt(t),
    { data: r } = P(n),
    [i, a, o] = ne(!1),
    { mutateAsync: s } = ba({ appid: t }),
    [c, l] = (0, V.useState)(!1),
    u = vn(t);
  return !r || u
    ? null
    : (0, K.jsxs)(K.Fragment, {
        children: [
          (0, K.jsxs)(sr, {
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
              N(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, K.jsx)(de, {
            children: (0, K.jsx)(Vt, {
              active: i,
              children: (0, K.jsx)(Ve, {
                strTitle: N(`#Sale_AddedToLibrary`),
                strDescription: Le(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, K.jsx)(`span`, { className: Bf, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, K.jsx)(qf, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function qf(e) {
  let { id: t } = e,
    n = Sf(),
    [r, i] = (0, V.useState)(0),
    [a, o] = (0, V.useState)(!1),
    { data: s } = Je(t);
  if (!t || !(`appid` in t) || T.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = Kd(e.os_type);
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
      className: Rf,
      children: a
        ? (0, K.jsx)(Yf, { session: e })
        : (0, K.jsxs)(K.Fragment, {
            children: [
              (0, K.jsx)(Jf, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, K.jsx)(`div`, {
                className: Uf,
                children: (0, K.jsx)(Xf, {
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
function Jf(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(`div`, { children: N(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, K.jsxs)(`div`, {
        className: Wf,
        children: [
          (0, K.jsx)(`span`, { className: Gf, children: n.machine_name }),
          (0, K.jsx)(Pf, {
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
function Yf(e) {
  let { session: t } = e;
  return (0, K.jsxs)(`div`, {
    className: Vf,
    children: [
      N(`#Sale_AddToLibrary_DownloadStarted`),
      (0, K.jsx)(`br`, {}),
      (0, K.jsx)(`a`, {
        href: `${T.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: N(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function Xf(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = Af(t, n.client_instanceid);
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsxs)(sr, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, K.jsx)(Ee, {}), N(`#Button_StartDownload`)],
      }),
      (0, K.jsx)(`div`, {
        className: Hf,
        children: (0, K.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: zf,
          children: N(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function Zf(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, K.jsxs)(`div`, {
        className: y(Fr, i ? Hr : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, K.jsx)(`div`, {
              className: y(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: j.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, K.jsx)(`div`, {
                className: y(Ur, `TagBox`),
                children: t.map((e) =>
                  (0, K.jsx)($f, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, K.jsx)(`div`, { children: j.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function Qf(e) {
  let { tagid: t, className: n } = e,
    r = Kn(t, l.LANGUAGE);
  if (!r) return null;
  let i = O(S(l.LANGUAGE)),
    a = `${l.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, K.jsx)(Iu, {
    url: a,
    className: y(Wr, `WidgetTag`, n),
    children: r,
  });
}
function $f(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = O(S(l.LANGUAGE)),
    a = Kn(t, l.LANGUAGE),
    o = `${l.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, K.jsx)(`div`, { className: y(Wr, `WidgetTag`, n), children: a })
      : (0, K.jsx)(Iu, {
          url: o,
          className: y(Wr, `WidgetTag`, n),
          children: a,
        })
    : null;
}
export {
  Ro as $,
  vr as $t,
  il as A,
  er as An,
  ci as At,
  Vc as B,
  Pr as Bt,
  Nl as C,
  pr as Cn,
  wi as Ct,
  Yl as D,
  Yn as Dn,
  _r as Dt,
  Fl as E,
  tr as En,
  Ir as Et,
  Hc as F,
  on as Fn,
  ki as Ft,
  Rc as G,
  Ei as Gt,
  jc as H,
  mi as Ht,
  Uc as I,
  H as In,
  ui as It,
  uc as J,
  yr as Jt,
  hc as K,
  Fi as Kt,
  Wc as L,
  di as Lt,
  rl as M,
  Kn as Mn,
  bi as Mt,
  Kc as N,
  xn as Nn,
  Ii as Nt,
  Kl as O,
  Qn as On,
  Mi as Ot,
  wc as P,
  hn as Pn,
  xi as Pt,
  Bo as Q,
  Si as Qt,
  zc as R,
  ji as Rt,
  ql as S,
  Xr as Sn,
  Ci as St,
  Il as T,
  lr as Tn,
  li as Tt,
  Mc as U,
  gi as Ut,
  Nc as V,
  yi as Vt,
  Lc as W,
  Nr as Wt,
  Ho as X,
  _i as Xt,
  Uo as Y,
  Li as Yt,
  zo as Z,
  oi as Zt,
  Rl as _,
  zr as _n,
  Wi as _t,
  iu as a,
  gr as an,
  uo as at,
  Xl as b,
  vi as bn,
  pi as bt,
  Hl as c,
  qr as cn,
  io as ct,
  Pl as d,
  xr as dn,
  Xa as dt,
  Ni as en,
  wo as et,
  Wl as f,
  wr as fn,
  ta as ft,
  zl as g,
  Vr as gn,
  Gi as gt,
  $l as h,
  br as hn,
  Xi as ht,
  Au as i,
  Gr as in,
  fo as it,
  tl as j,
  Hn as jn,
  Di as jt,
  al as k,
  Xn as kn,
  Dr as kt,
  Vl as l,
  Mr as ln,
  to as lt,
  Ul as m,
  Rr as mn,
  Yi as mt,
  Zf as n,
  ni as nn,
  yo as nt,
  ru as o,
  Ar as on,
  lo as ot,
  Gl as p,
  Oi as pn,
  Zi as pt,
  pc as q,
  hi as qt,
  Iu as r,
  Pi as rn,
  vo as rt,
  tu as s,
  Kr as sn,
  ao as st,
  Qf as t,
  Ai as tn,
  So as tt,
  Bl as u,
  hr as un,
  $a as ut,
  Ml as v,
  Sr as vn,
  Jr as vt,
  eu as w,
  cr as wn,
  si as wt,
  Jl as x,
  Lr as xn,
  Br as xt,
  Ll as y,
  Er as yn,
  fi as yt,
  Bc as z,
  Ti as zt,
};
