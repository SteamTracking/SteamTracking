/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  Dt as t,
  G as n,
  K as r,
  P as i,
  Pt as a,
  S as o,
  St as s,
  W as c,
  X as l,
  _t as u,
  at as d,
  bt as f,
  gt as p,
  it as m,
  jt as h,
  k as g,
  l as _,
  n as v,
  nt as ee,
  ot as y,
  r as b,
  rt as te,
  st as ne,
  vt as x,
  w as re,
  wt as ie,
  xt as S,
  yt as C,
} from "./chunk~de7f2df91c.js";
import {
  A as ae,
  At as oe,
  Ft as se,
  Ht as ce,
  Nt as le,
  Pt as w,
  R as ue,
  Vt as T,
  Y as de,
  at as fe,
  j as pe,
  jt as me,
  mt as he,
  ot as E,
  pt as ge,
} from "./chunk~bd90a5fce7.js";
import {
  Bn as _e,
  Bt as ve,
  Dt as ye,
  Fa as be,
  Ft as xe,
  Gt as Se,
  Hn as Ce,
  Kt as we,
  Lt as Te,
  Oa as Ee,
  Rt as De,
  Ua as Oe,
  Wn as D,
  Xn as ke,
  Yr as Ae,
  Za as je,
  _n as O,
  bn as Me,
  da as k,
  dr as Ne,
  eo as Pe,
  fa as Fe,
  ga as Ie,
  h as Le,
  l as Re,
  nn as ze,
  on as Be,
  ua as Ve,
  wt as He,
} from "./chunk~1fa4b8f2ff.js";
import { w as A } from "./chunk~44f252525d.js";
import { t as j } from "./chunk~7b8a87bd30.js";
import { r as Ue, t as We } from "./chunk~70c16cc80c.js";
import { S as M, i as N, w as Ge, x as Ke } from "./chunk~96e60d7578.js";
import "./chunk~19394a4118.js";
import { n as qe } from "./chunk~25a6634263.js";
import "./chunk~8681f5c764.js";
import { t as Je } from "./chunk~f4e4ed5c17.js";
import { t as Ye } from "./chunk~92931c6310.js";
import { t as P } from "./chunk~c55709d290.js";
import { r as Xe } from "./chunk~af36c62e9f.js";
import { E as Ze, t as Qe } from "./chunk~2f8c67b4de.js";
import "./chunk~739842ca30.js";
import {
  $ as $e,
  A as et,
  B as tt,
  C as nt,
  D as rt,
  E as it,
  F as at,
  G as ot,
  H as st,
  J as ct,
  K as lt,
  M as ut,
  N as dt,
  O as ft,
  P as pt,
  Q as mt,
  R as ht,
  S as gt,
  U as _t,
  V as vt,
  W as yt,
  Z as bt,
  _ as xt,
  a as St,
  b as Ct,
  c as wt,
  d as Tt,
  et as Et,
  f as Dt,
  g as Ot,
  h as kt,
  i as At,
  j as jt,
  k as Mt,
  l as Nt,
  m as Pt,
  n as Ft,
  nt as It,
  o as Lt,
  p as Rt,
  q as zt,
  r as Bt,
  rt as Vt,
  s as Ht,
  t as Ut,
  tt as Wt,
  u as Gt,
  v as Kt,
  w as qt,
  x as Jt,
  y as Yt,
  z as Xt,
} from "./chunk~9658266888.js";
import { n as Zt, r as Qt, t as $t } from "./chunk~b980797e15.js";
import { n as en, t as tn } from "./chunk~95ecbf576c.js";
import { t as nn } from "./chunk~c55d6473b2.js";
import {
  M as rn,
  N as an,
  T as on,
  f as sn,
  l as cn,
  u as ln,
} from "./chunk~6110f63e8e.js";
import { n as un, r as dn, t as fn } from "./chunk~f95b379b4d.js";
import {
  a as pn,
  i as mn,
  n as F,
  r as I,
  t as L,
} from "./chunk~57b6ba168b.js";
import { n as hn } from "./chunk~c627bf7efa.js";
var gn = `steam_`,
  _n = (function (e) {
    return (
      (e[(e.White = 0)] = `White`),
      (e[(e.Red = 1)] = `Red`),
      (e[(e.Orange = 2)] = `Orange`),
      (e[(e.Yellow = 3)] = `Yellow`),
      (e[(e.Green = 4)] = `Green`),
      (e[(e.Blue = 5)] = `Blue`),
      (e[(e.Purple = 6)] = `Purple`),
      (e[(e.Brown = 7)] = `Brown`),
      (e[(e.Gray = 8)] = `Gray`),
      e
    );
  })({});
function vn(e) {
  switch (e) {
    default:
    case 0:
      return `#DCDEDF`;
    case 1:
      return `#FB7C7C`;
    case 2:
      return `#FBB17C`;
    case 3:
      return `#FBDF7C`;
    case 4:
      return `#9DFB7C`;
    case 5:
      return `#7CD5FB`;
    case 6:
      return `#A57CFB`;
    case 7:
      return `#C18C5B`;
    case 8:
      return `#B8BCBF`;
  }
}
function yn(e) {
  return Object.keys(e).filter((e) => !Number.isNaN(e));
}
var bn = yn(_n).map((e) => _n[e]),
  xn = class e {
    m_mapSteamTimelineMarkers = new Map();
    GetMarkerByID(e) {
      let t = e.toLowerCase().startsWith(`steam_`)
          ? e.slice(6).toLowerCase()
          : e.toLowerCase(),
        n = this.m_mapSteamTimelineMarkers.get(t);
      if (n) return n;
      let r = parseInt(t);
      return typeof r == `number` && r >= 0 && r <= 99
        ? { func: (e) => pt({ nNumber: r }), color: 8 }
        : Tn();
    }
    GetAllUseableMarkerID() {
      return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
        (e) => gn + e,
      );
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    AddMarker(e, t, n) {
      let r = n ?? 0;
      this.m_mapSteamTimelineMarkers.set(e, { func: t, color: r });
      for (let n of bn) {
        let r = `${e}_${_n[n]}`.toLowerCase();
        this.m_mapSteamTimelineMarkers.set(r, { func: t, color: n });
      }
    }
    Init() {
      (this.AddMarker(`explosion`, gt, 8),
        this.AddMarker(`attack`, Ft, 8),
        this.AddMarker(`defend`, Kt, 8),
        this.AddMarker(`combat`, Pt, 8),
        this.AddMarker(`chest`, Tt, 8),
        this.AddMarker(`view`, Wt, 8),
        _() ? this.AddMarker(`death`, Vt, 8) : this.AddMarker(`death`, xt, 8),
        this.AddMarker(`x`, Vt, 8),
        this.AddMarker(`plus`, ht, 8),
        this.AddMarker(`minus`, dt, 8),
        this.AddMarker(`info`, Mt, 8),
        this.AddMarker(`bolt`, Bt, 8),
        this.AddMarker(`caution`, wt, 8),
        this.AddMarker(`completed`, kt, 8),
        this.AddMarker(`checkmark`, Gt, 8),
        this.AddMarker(`effect`, Jt, 8),
        this.AddMarker(`purchase`, Xt, 8),
        this.AddMarker(`ribbon`, vt, 8),
        this.AddMarker(`scroll`, yt, 8),
        this.AddMarker(`crown`, Ot, 8),
        this.AddMarker(`starburst`, ct, 8),
        this.AddMarker(`flag`, qt, 8),
        this.AddMarker(`cart`, Ht, 8),
        this.AddMarker(`timer`, bt, 8),
        this.AddMarker(`chat`, Nt, 8),
        this.AddMarker(`wrench`, nt, 8),
        this.AddMarker(`transfer`, mt, 8),
        this.AddMarker(`edit`, Ct, 8),
        this.AddMarker(`bookmark`, At, 8),
        this.AddMarker(`invalid`, et, 8),
        this.AddMarker(`star`, zt, 8),
        this.AddMarker(`circle`, Dt, 8),
        this.AddMarker(`square`, lt, 8),
        this.AddMarker(`triangle`, $e, 8),
        this.AddMarker(`heart`, ft, 8),
        this.AddMarker(`diamond`, Yt, 8),
        this.AddMarker(`gem`, it, 8),
        this.AddMarker(`group`, rt, 8),
        this.AddMarker(`pair`, at, 8),
        this.AddMarker(`single`, Et, 8),
        this.AddMarker(`trophy`, Ut, 8),
        this.AddMarker(`achievement`, Ut, 8),
        this.AddMarker(`screenshot`, _t, 8),
        this.AddMarker(`bug`, St, 8),
        this.AddMarker(`fix`, nt, 8),
        this.AddMarker(`person`, Et, 8),
        this.AddMarker(`question`, tt, 8));
    }
  };
function Sn(e) {
  return xn.Get().GetMarkerByID(e);
}
function Cn() {
  return { func: ut, color: 5 };
}
function wn() {
  return { func: Ut, color: 0 };
}
function Tn() {
  return { func: ut, color: 8 };
}
function En(e) {
  return e && e.toLowerCase().startsWith(`steam_`);
}
var R = a(ie(), 1),
  z = a(ee(), 1),
  Dn = a(Je(), 1),
  On = null;
function kn(e) {
  On
    ? console.error(`Attempt to set timeline marker hook a second time`)
    : (On = e);
}
function An(e, t) {
  return On
    ? On(e, t)
    : (console.error(
        `useGameMarkerFromID called in a context where the hook isn't defined.`,
      ),
      null);
}
function B() {
  return window.g_GRS;
}
function jn() {
  if (B() != null) {
    let e = B();
    return {
      bLoading: e.BLoadingAppsWithBackgroundVideo(),
      rgApps: e.GetAppsWithBackgroundVideo(),
    };
  }
  return { bLoading: !1, rgApps: [] };
}
function Mn() {
  let [e, t] = (0, z.useState)(jn());
  return ((0, z.useEffect)(() => Ge(jn, t), []), e);
}
function Nn(e) {
  let { bLoading: t, rgApps: n } = Mn();
  return {
    bLoading: t,
    app: (0, z.useMemo)(() => n.find((t) => t.game_id === e), [n, e]),
  };
}
function Pn(e) {
  return (B() != null && e && B().GetClipSummariesForGame(e)) || [];
}
function Fn(e, t, n, r, i, a) {
  return B() == null ? null : B().LoadThumbnails(e, t, n, r, i, a ?? !0);
}
function In() {
  return B() == null ? {} : { fnSaveClip: B().SaveClip };
}
function Ln() {
  return B() == null ? {} : { fnDeleteClip: B().DeleteClip };
}
function Rn(e, t, n, r) {
  return B() == null ? null : B().TakeScreenshot(e, t, n.valMS, r);
}
function zn() {
  return B() == null
    ? null
    : {
        fnCreateUserTimelineMarkers: B().CreateUserTimelineMarkers,
        fnUpdateUserTimelineMarkers: B().UpdateUserTimelineMarkers,
        fnRemoveUserTimelineMarker: B().RemoveUserTimelineMarker,
      };
}
function Bn(e, t) {
  return A(() => {
    if (B() != null) return B().GetAchievementInfo(e, t);
  });
}
function Vn(e, t, n, r, i) {
  return B().ReportClipRange(e, t, n, r, i);
}
function Hn() {
  return A(() => {
    if (B() != null) return !B().BEnoughDiskSpace();
  });
}
var Un = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.timeline_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            timeline_id: { n: 1, br: C.readString, bw: e.writeString },
            game_id: { n: 2, br: C.readUint64String, bw: e.writeUint64String },
            date_recorded: { n: 3, br: C.readUint32, bw: e.writeUint32 },
            duration_ms: {
              n: 4,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            recordings: { n: 5, c: Wn, r: !0, q: !0 },
            phases: { n: 6, c: Kn, r: !0, q: !0 },
            significant_events: { n: 7, c: Gn, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata`;
    }
  },
  Wn = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.recording_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            recording_id: { n: 1, br: C.readString, bw: e.writeString },
            start_offset_ms: {
              n: 2,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            duration_ms: {
              n: 3,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            recording_type: { n: 4, br: C.readEnum, bw: e.writeEnum },
            delete_on_cleanup: { n: 5, br: C.readBool, bw: e.writeBool },
            video_manager_clip_id: {
              n: 6,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            video_manager_video_id: {
              n: 7,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            cdn_manifest_url: { n: 8, br: C.readString, bw: e.writeString },
            file_size: {
              n: 9,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            recording_zero_timeline_offset_ms: {
              n: 10,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata_Recording`;
    }
  },
  Gn = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            rt_created: { n: 2, br: C.readUint32, bw: e.writeUint32 },
            possible_clip: { n: 3, br: C.readInt32, bw: e.writeInt32 },
            timeline_id: { n: 4, br: C.readString, bw: e.writeString },
            entry_id: { n: 5, br: C.readUint64String, bw: e.writeUint64String },
            timeline_offset_ms: {
              n: 6,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            marker_icon: { n: 8, br: C.readString, bw: e.writeString },
            marker_title: { n: 9, br: C.readString, bw: e.writeString },
            user_marker: { n: 10, br: C.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineEvent`;
    }
  },
  Kn = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.phase_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [6, 7, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            phase_id: { n: 4, br: C.readString, bw: e.writeString },
            duration_ms: {
              n: 5,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            tags: { n: 6, c: qn, r: !0, q: !0 },
            contained_tags: { n: 7, c: qn, r: !0, q: !0 },
            background_timeline_offset: {
              n: 8,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            attributes: { n: 9, c: Yn, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase`;
    }
  },
  qn = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.name || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: { n: 1, br: C.readString, bw: e.writeString },
            group: { n: 2, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase_Tag`;
    }
  },
  Jn = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.name || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: { n: 1, br: C.readString, bw: e.writeString },
            group: { n: 2, br: C.readString, bw: e.writeString },
            icon: { n: 3, br: C.readString, bw: e.writeString },
            priority: { n: 4, br: C.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CTimelineTag`;
    }
  },
  Yn = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.group || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            group: { n: 1, br: C.readString, bw: e.writeString },
            value: { n: 2, br: C.readString, bw: e.writeString },
            priority: { n: 3, br: C.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPhaseAttribute`;
    }
  },
  Xn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Request`;
    }
  },
  Zn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || p(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: Qn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response`;
    }
  },
  Qn = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            most_recent_start_time: {
              n: 2,
              br: C.readUint32,
              bw: e.writeUint32,
            },
            recording_type: { n: 3, br: C.readEnum, bw: e.writeEnum },
            video_duration_seconds: {
              n: 4,
              br: C.readDouble,
              bw: e.writeDouble,
            },
            timeline_duration_seconds: {
              n: 5,
              br: C.readDouble,
              bw: e.writeDouble,
            },
            is_active: { n: 6, br: C.readBool, bw: e.writeBool },
            file_size: {
              n: 7,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response_App`;
    }
  },
  $n = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Request`;
    }
  },
  er = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timelines || p(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { timelines: { n: 1, c: Un, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Response`;
    }
  },
  tr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clip_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { clip_id: { n: 1, br: C.readString, bw: e.writeString } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Request`;
    }
  },
  nr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            timelines: { n: 2, c: Un, r: !0, q: !0 },
            first_timeline_start_offset_ms: {
              n: 3,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Response`;
    }
  },
  rr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.page || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            page: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            count: { n: 2, br: C.readUint32, bw: e.writeUint32 },
            filter_gameid: {
              n: 10,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            filter_search_string: {
              n: 11,
              br: C.readString,
              bw: e.writeString,
            },
            filter_tags: { n: 12, c: ir, r: !0, q: !0 },
            filter_phase_id: { n: 13, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request`;
    }
  },
  ir = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.group || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            group: { n: 1, br: C.readString, bw: e.writeString },
            name: { n: 2, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request_Tag`;
    }
  },
  ar = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.phases || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            phases: { n: 1, c: or, r: !0, q: !0 },
            total_count: { n: 2, br: C.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response`;
    }
  },
  or = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [7, 8, 10, 13, 16, 17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            date_recorded: { n: 5, br: C.readUint32, bw: e.writeUint32 },
            duration_ms: {
              n: 6,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            tags: { n: 7, c: Jn, r: !0, q: !0 },
            contained_tags: { n: 8, c: Jn, r: !0, q: !0 },
            background_recording: { n: 9, c: sr },
            clip_ids: {
              n: 10,
              r: !0,
              q: !0,
              br: C.readString,
              bw: e.writeRepeatedString,
            },
            type: { n: 11, br: C.readEnum, bw: e.writeEnum },
            start_ms: {
              n: 12,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            screenshots: {
              n: 13,
              r: !0,
              q: !0,
              br: C.readUint32,
              pbr: C.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            active: { n: 14, br: C.readBool, bw: e.writeBool },
            phase_id: { n: 15, br: C.readString, bw: e.writeString },
            significant_events: { n: 16, c: gr, r: !0, q: !0 },
            attributes: { n: 17, c: Yn, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase`;
    }
  },
  sr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.timeline_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            timeline_id: { n: 1, br: C.readString, bw: e.writeString },
            offset: { n: 2, br: C.readUint64String, bw: e.writeUint64String },
            duration_ms: {
              n: 3,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase_BackgroundRecording`;
    }
  },
  cr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Request`;
    }
  },
  lr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || p(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: Jn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Response`;
    }
  },
  ur = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Request`;
    }
  },
  dr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.enough_space || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { enough_space: { n: 1, br: C.readBool, bw: e.writeBool } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Response`;
    }
  },
  fr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Request`;
    }
  },
  pr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.size || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { size: { n: 1, br: C.readDouble, bw: e.writeDouble } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Response`;
    }
  },
  mr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.notification_type || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            notification_type: { n: 1, br: C.readEnum, bw: e.writeEnum },
            timeline_id: { n: 2, br: C.readString, bw: e.writeString },
            game_id: { n: 3, br: C.readUint64String, bw: e.writeUint64String },
            start_time: { n: 4, br: C.readUint32, bw: e.writeUint32 },
            duration_ms: {
              n: 5,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineChanged_Notification`;
    }
  },
  hr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.notification_type || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            notification_type: { n: 1, br: C.readEnum, bw: e.writeEnum },
            timeline_id: { n: 2, br: C.readString, bw: e.writeString },
            game_id: { n: 4, br: C.readUint64String, bw: e.writeUint64String },
            session_id: { n: 5, br: C.readString, bw: e.writeString },
            start_offset: {
              n: 6,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            recording_type: { n: 8, br: C.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_RecordingSessionChanged_Notification`;
    }
  },
  gr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.timeline_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [17, 19], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            timeline_id: { n: 1, br: C.readString, bw: e.writeString },
            entry_id: { n: 2, br: C.readUint64String, bw: e.writeUint64String },
            time: { n: 3, br: C.readUint64String, bw: e.writeUint64String },
            type: { n: 4, br: C.readEnum, bw: e.writeEnum },
            game_mode: { n: 5, br: C.readInt32, bw: e.writeInt32 },
            range_title: { n: 7, br: C.readString, bw: e.writeString },
            range_duration: {
              n: 8,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            range_possible_clip: { n: 9, br: C.readInt32, bw: e.writeInt32 },
            timestamp_title: { n: 10, br: C.readString, bw: e.writeString },
            marker_icon: { n: 11, br: C.readString, bw: e.writeString },
            marker_description: { n: 13, br: C.readString, bw: e.writeString },
            marker_priority: { n: 14, br: C.readInt32, bw: e.writeInt32 },
            screenshot_handle: { n: 15, br: C.readUint32, bw: e.writeUint32 },
            achievement_name: { n: 16, br: C.readString, bw: e.writeString },
            tag: { n: 17, c: Jn, r: !0, q: !0 },
            phase_id: { n: 18, br: C.readString, bw: e.writeString },
            attributes: { n: 19, c: Yn, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CTimelineEntry`;
    }
  },
  _r = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.entry || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            entry: { n: 1, c: gr },
            game_id: {
              n: 2,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryChanged_Notification`;
    }
  },
  vr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            timeline_id: { n: 2, br: C.readString, bw: e.writeString },
            entry_id: { n: 3, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryRemoved_Notification`;
    }
  },
  yr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_LowDiskSpace_Notification`;
    }
  },
  br = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PostGameHighlightsChanged_Notification`;
    }
  },
  xr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            phase_id: { n: 2, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToGamePhase_Notification`;
    }
  },
  Sr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            entry_id: { n: 2, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToTimelineEvent_Notification`;
    }
  },
  Cr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PhaseListChanged_Notification`;
    }
  },
  wr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clip_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clip_id: { n: 1, br: C.readString, bw: e.writeString },
            game_id: { n: 2, br: C.readUint64String, bw: e.writeUint64String },
            duration_ms: {
              n: 3,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            date_recorded: { n: 4, br: C.readUint32, bw: e.writeUint32 },
            start_timeline_id: { n: 5, br: C.readString, bw: e.writeString },
            start_offset_ms: {
              n: 6,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            published_file_id: {
              n: 7,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            file_size: {
              n: 8,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            name: { n: 9, br: C.readString, bw: e.writeString },
            date_clipped: { n: 10, br: C.readUint32, bw: e.writeUint32 },
            temporary: { n: 11, br: C.readBool, bw: e.writeBool },
            original_device: { n: 12, br: C.readString, bw: e.writeString },
            original_gaming_device_type: {
              n: 13,
              br: C.readUint32,
              bw: e.writeUint32,
            },
            date_downloaded: { n: 14, br: C.readUint32, bw: e.writeUint32 },
            thumbnail_url: { n: 15, br: C.readString, bw: e.writeString },
            thumbnail_width: { n: 16, br: C.readUint32, bw: e.writeUint32 },
            thumbnail_height: { n: 17, br: C.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipSummary`;
    }
  },
  Tr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            start: { n: 2, c: Er },
            end: { n: 3, c: Er },
            name: { n: 4, br: C.readString, bw: e.writeString },
            src_clip_id: { n: 5, br: C.readString, bw: e.writeString },
            temporary: { n: 6, br: C.readBool, bw: e.writeBool },
            force_thumbnail: { n: 7, br: C.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request`;
    }
  },
  Er = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.timeline_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            timeline_id: { n: 1, br: C.readString, bw: e.writeString },
            offset_ms: {
              n: 2,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request_Position`;
    }
  },
  Dr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: wr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Response`;
    }
  },
  Or = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clip_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { clip_id: { n: 1, br: C.readString, bw: e.writeString } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Request`;
    }
  },
  kr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Response`;
    }
  },
  Ar = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.bitrate_kbps || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            bitrate_kbps: { n: 1, br: C.readInt32, bw: e.writeInt32 },
            width: { n: 2, br: C.readInt32, bw: e.writeInt32 },
            height: { n: 3, br: C.readInt32, bw: e.writeInt32 },
            frames_per_second: { n: 4, br: C.readInt32, bw: e.writeInt32 },
            codec: { n: 5, br: C.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Settings`;
    }
  },
  jr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clip_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clip_id: { n: 1, br: C.readString, bw: e.writeString },
            export_mp4_path: { n: 2, br: C.readString, bw: e.writeString },
            settings: { n: 3, c: Ar },
            use_unique_filename: { n: 4, br: C.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Request`;
    }
  },
  Mr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.result || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { result: { n: 1, br: C.readInt32, bw: e.writeInt32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Response`;
    }
  },
  Nr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clip_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clip_id: { n: 1, br: C.readString, bw: e.writeString },
            settings: { n: 2, c: Ar },
            run_policy_checks: { n: 3, br: C.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Request`;
    }
  },
  Pr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.estimated_size || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            estimated_size: {
              n: 1,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            settings: { n: 2, c: Ar },
            result: { n: 3, br: C.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Response`;
    }
  },
  Fr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: {
              n: 1,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
            timeline_id: { n: 2, br: C.readString, bw: e.writeString },
            timeline_offset_ms: {
              n: 3,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
            source_clip_id: { n: 4, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Request`;
    }
  },
  Ir = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.screenshot_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            screenshot_id: {
              n: 1,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Response`;
    }
  },
  Lr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clip_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clip_id: { n: 1, br: C.readString, bw: e.writeString },
            title: { n: 2, br: C.readString, bw: e.writeString },
            desc: { n: 3, br: C.readString, bw: e.writeString },
            visibility: { n: 4, br: C.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Request`;
    }
  },
  Rr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: wr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Response`;
    }
  },
  zr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clip_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { clip_id: { n: 1, br: C.readString, bw: e.writeString } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Request`;
    }
  },
  Br = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.zip_path || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { zip_path: { n: 1, br: C.readString, bw: e.writeString } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Response`;
    }
  },
  Vr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            created_after: { n: 2, br: C.readUint32, bw: e.writeUint32 },
            include_temporary: { n: 3, br: C.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Request`;
    }
  },
  Hr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || p(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip: { n: 1, c: wr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Response`;
    }
  },
  Ur = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            created_after: { n: 2, br: C.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Request`;
    }
  },
  Wr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.events || p(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { events: { n: 1, c: Gn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Response`;
    }
  },
  Gr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            entry: { n: 2, c: gr },
            clip_id: { n: 3, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Request`;
    }
  },
  Kr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.entry_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            entry_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Response`;
    }
  },
  qr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            entry: { n: 2, c: gr },
            clip_id: { n: 3, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Request`;
    }
  },
  Jr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Response`;
    }
  },
  Yr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
            timeline_id: { n: 2, br: C.readString, bw: e.writeString },
            entry_id: { n: 3, br: C.readUint64String, bw: e.writeUint64String },
            clip_id: { n: 4, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Request`;
    }
  },
  Xr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Response`;
    }
  },
  Zr = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_ids || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: C.readUint64String,
              pbr: C.readPackedUint64String,
              bw: e.writeRepeatedUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Request`;
    }
  },
  Qr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Response`;
    }
  },
  $r = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.folder_path || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            folder_path: { n: 1, br: C.readString, bw: e.writeString },
            type: { n: 2, br: C.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Request`;
    }
  },
  ei = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.size || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            size: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Response`;
    }
  },
  ti = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.recording_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            recording_id: { n: 1, br: C.readString, bw: e.writeString },
            clip_id: { n: 3, br: C.readString, bw: e.writeString },
            timeline_id: { n: 7, br: C.readString, bw: e.writeString },
            start_offset_us: {
              n: 4,
              r: !0,
              q: !0,
              br: C.readInt64String,
              pbr: C.readPackedInt64String,
              bw: e.writeRepeatedInt64String,
            },
            major_axis: { n: 5, d: 512, br: C.readUint32, bw: e.writeUint32 },
            time_precision: { n: 6, d: 0, br: C.readEnum, bw: e.writeEnum },
            format: { n: 8, d: 1, br: C.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Request`;
    }
  },
  ni = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnails || p(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { thumbnails: { n: 1, c: ri, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response`;
    }
  },
  ri = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.image_data || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            image_data: { n: 1, br: C.readBytes, bw: e.writeBytes },
            width: { n: 2, br: C.readUint32, bw: e.writeUint32 },
            height: { n: 3, br: C.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response_Thumbnail`;
    }
  },
  ii = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Request`;
    }
  },
  ai = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Response`;
    }
  },
  oi = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Request`;
    }
  },
  si = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: wr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Response`;
    }
  },
  ci = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Request`;
    }
  },
  li = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.file_size || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            file_size: {
              n: 1,
              br: C.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Response`;
    }
  },
  ui = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Request`;
    }
  },
  di = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Response`;
    }
  },
  fi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Request`;
    }
  },
  pi = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.per_process_audio_capture || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            per_process_audio_capture: {
              n: 1,
              br: C.readBool,
              bw: e.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Response`;
    }
  },
  mi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: wr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipCreated_Notification`;
    }
  },
  hi = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clip_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clip_id: { n: 1, br: C.readString, bw: e.writeString },
            game_id: { n: 2, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipDeleted_Notification`;
    }
  },
  gi = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.progress || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            progress: { n: 1, br: C.readFloat, bw: e.writeFloat },
            clip_id: { n: 2, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportProgress_Notification`;
    }
  },
  _i = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gameid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gameid: { n: 1, br: C.readFixed64String, bw: e.writeFixed64String },
            enabled: { n: 2, br: C.readBool, bw: e.writeBool },
            minutes: { n: 3, br: C.readUint32, bw: e.writeUint32 },
            bitrate: { n: 4, br: C.readString, bw: e.writeString },
            infinite: { n: 5, br: C.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PerGameSettings`;
    }
  },
  vi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Request`;
    }
  },
  yi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || p(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: _i, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Response`;
    }
  },
  bi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_settings || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { game_settings: { n: 1, c: _i } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Request`;
    }
  },
  xi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Response`;
    }
  },
  Si = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gameid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gameid: { n: 1, br: C.readFixed64String, bw: e.writeFixed64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Request`;
    }
  },
  Ci = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Response`;
    }
  },
  wi = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.progress || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            progress: { n: 1, br: C.readFloat, bw: e.writeFloat },
            clip_id: { n: 2, br: C.readString, bw: e.writeString },
            eresult: { n: 3, br: C.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadProgress_Notification`;
    }
  },
  Ti = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_id || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_id: { n: 1, br: C.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Request`;
    }
  },
  Ei = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Response`;
    }
  },
  Di = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Request`;
    }
  },
  Oi = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.is_h265_enabled || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            is_h265_enabled: { n: 1, br: C.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Response`;
    }
  },
  ki = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StateChanged_Notification`;
    }
  },
  V;
(function (e) {
  e.GetAppsWithBackgroundVideoHandler = {
    name: `GameRecording.GetAppsWithBackgroundVideo#1`,
    request: Xn,
    response: Zn,
  };
  function t(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAppsWithBackgroundVideo#1`,
            r(Xn, e),
            Zn,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetAppsWithBackgroundVideo = t;
  function n(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAppsWithBackgroundVideo#1`,
            r(Xn, e),
            Zn,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAppsWithBackgroundVideo = n),
    (e.GetTimelinesForAppHandler = {
      name: `GameRecording.GetTimelinesForApp#1`,
      request: $n,
      response: er,
    }));
  function i(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, r($n, e), er, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForApp = i;
  function a(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, r($n, e), er, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForApp = a),
    (e.GetTimelinesForClipHandler = {
      name: `GameRecording.GetTimelinesForClip#1`,
      request: tr,
      response: nr,
    }));
  function o(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, r(tr, e), nr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForClip = o;
  function s(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, r(tr, e), nr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForClip = s),
    (e.QueryPhasesHandler = {
      name: `GameRecording.QueryPhases#1`,
      request: rr,
      response: ar,
    }));
  function c(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, r(rr, e), ar, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.QueryPhases = c;
  function l(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, r(rr, e), ar, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgQueryPhases = l),
    (e.GetTagsHandler = {
      name: `GameRecording.GetTags#1`,
      request: cr,
      response: lr,
    }));
  function u(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, r(cr, e), lr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTags = u;
  function d(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, r(cr, e), lr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTags = d),
    (e.GetEnoughDiskSpaceHandler = {
      name: `GameRecording.GetEnoughDiskSpace#1`,
      request: ur,
      response: dr,
    }));
  function f(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, r(ur, e), dr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetEnoughDiskSpace = f;
  function p(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, r(ur, e), dr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetEnoughDiskSpace = p),
    (e.GetAvailableDiskSpaceHandler = {
      name: `GameRecording.GetAvailableDiskSpace#1`,
      request: fr,
      response: pr,
    }));
  function m(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, r(fr, e), pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetAvailableDiskSpace = m;
  function h(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, r(fr, e), pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetAvailableDiskSpace = h),
    (e.SaveClipHandler = {
      name: `GameRecording.SaveClip#1`,
      request: Tr,
      response: Dr,
    }));
  function g(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SaveClip#1`, r(Tr, e), Dr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SaveClip = g;
  function _(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SaveClip#1`, r(Tr, e), Dr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSaveClip = _),
    (e.DeleteClipHandler = {
      name: `GameRecording.DeleteClip#1`,
      request: Or,
      response: kr,
    }));
  function v(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeleteClip#1`, r(Or, e), kr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeleteClip = v;
  function ee(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeleteClip#1`, r(Or, e), kr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeleteClip = ee),
    (e.GetClipsHandler = {
      name: `GameRecording.GetClips#1`,
      request: Vr,
      response: Hr,
    }));
  function y(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetClips#1`, r(Vr, e), Hr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetClips = y;
  function b(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetClips#1`, r(Vr, e), Hr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetClips = b),
    (e.UploadClipToSteamHandler = {
      name: `GameRecording.UploadClipToSteam#1`,
      request: Lr,
      response: Rr,
    }));
  function te(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, r(Lr, e), Rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UploadClipToSteam = te;
  function ne(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, r(Lr, e), Rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUploadClipToSteam = ne),
    (e.ExportClipHandler = {
      name: `GameRecording.ExportClip#1`,
      request: jr,
      response: Mr,
    }));
  function x(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClip#1`, r(jr, e), Mr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClip = x;
  function re(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClip#1`, r(jr, e), Mr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClip = re),
    (e.ExportClipPreviewHandler = {
      name: `GameRecording.ExportClipPreview#1`,
      request: Nr,
      response: Pr,
    }));
  function ie(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, r(Nr, e), Pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClipPreview = ie;
  function S(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, r(Nr, e), Pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClipPreview = S),
    (e.TakeScreenshotHandler = {
      name: `GameRecording.TakeScreenshot#1`,
      request: Fr,
      response: Ir,
    }));
  function C(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, r(Fr, e), Ir, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.TakeScreenshot = C;
  function ae(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, r(Fr, e), Ir, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgTakeScreenshot = ae),
    (e.ZipClipHandler = {
      name: `GameRecording.ZipClip#1`,
      request: zr,
      response: Br,
    }));
  function oe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ZipClip#1`, r(zr, e), Br, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ZipClip = oe;
  function se(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ZipClip#1`, r(zr, e), Br, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgZipClip = se),
    (e.StartRecordingHandler = {
      name: `GameRecording.StartRecording#1`,
      request: ii,
      response: ai,
    }));
  function ce(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StartRecording#1`, r(ii, e), ai, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StartRecording = ce;
  function le(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StartRecording#1`, r(ii, e), ai, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStartRecording = le),
    (e.StopRecordingHandler = {
      name: `GameRecording.StopRecording#1`,
      request: oi,
      response: si,
    }));
  function w(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StopRecording#1`, r(oi, e), si, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StopRecording = w;
  function ue(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StopRecording#1`, r(oi, e), si, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStopRecording = ue),
    (e.GetBackgroundRecordingFileSizeHandler = {
      name: `GameRecording.GetBackgroundRecordingFileSize#1`,
      request: ci,
      response: li,
    }));
  function T(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            r(ci, e),
            li,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetBackgroundRecordingFileSize = T;
  function de(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            r(ci, e),
            li,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetBackgroundRecordingFileSize = de),
    (e.CleanupBackgroundRecordingsHandler = {
      name: `GameRecording.CleanupBackgroundRecordings#1`,
      request: ui,
      response: di,
    }));
  function fe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            r(ui, e),
            di,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.CleanupBackgroundRecordings = fe;
  function pe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            r(ui, e),
            di,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgCleanupBackgroundRecordings = pe),
    (e.GetAndTrimPostGameHighlightsHandler = {
      name: `GameRecording.GetAndTrimPostGameHighlights#1`,
      request: Ur,
      response: Wr,
    }));
  function me(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            r(Ur, e),
            Wr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetAndTrimPostGameHighlights = me;
  function he(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            r(Ur, e),
            Wr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAndTrimPostGameHighlights = he),
    (e.GetThumbnailsHandler = {
      name: `GameRecording.GetThumbnails#1`,
      request: ti,
      response: ni,
    }));
  function E(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetThumbnails#1`, r(ti, e), ni, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetThumbnails = E;
  function ge(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetThumbnails#1`, r(ti, e), ni, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetThumbnails = ge),
    (e.GetPlatformCapabilitiesHandler = {
      name: `GameRecording.GetPlatformCapabilities#1`,
      request: fi,
      response: pi,
    }));
  function _e(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, r(fi, e), pi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPlatformCapabilities = _e;
  function ve(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, r(fi, e), pi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPlatformCapabilities = ve),
    (e.NotifyTimelineChangedHandler = {
      name: `GameRecording.NotifyTimelineChanged#1`,
      request: mr,
    }));
  function ye(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyTimelineChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineChanged = ye;
  function be(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineChanged#1`,
            r(mr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineChanged = be;
  function xe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineChanged#1`,
            r(mr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineChanged = xe),
    (e.NotifyRecordingSessionChangedHandler = {
      name: `GameRecording.NotifyRecordingSessionChanged#1`,
      request: hr,
    }));
  function Se(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyRecordingSessionChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyRecordingSessionChanged = Se;
  function Ce(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            r(hr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyRecordingSessionChanged = Ce;
  function we(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            r(hr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyRecordingSessionChanged = we),
    (e.NotifyTimelineEntryChangedHandler = {
      name: `GameRecording.NotifyTimelineEntryChanged#1`,
      request: _r,
    }));
  function Te(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyTimelineEntryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryChanged = Te;
  function Ee(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            r(_r, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryChanged = Ee;
  function De(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            r(_r, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryChanged = De),
    (e.NotifyTimelineEntryRemovedHandler = {
      name: `GameRecording.NotifyTimelineEntryRemoved#1`,
      request: vr,
    }));
  function Oe(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyTimelineEntryRemovedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryRemoved = Oe;
  function D(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            r(vr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryRemoved = D;
  function ke(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            r(vr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryRemoved = ke),
    (e.NotifyClipCreatedHandler = {
      name: `GameRecording.NotifyClipCreated#1`,
      request: mi,
    }));
  function Ae(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(V.NotifyClipCreatedHandler, e)
    );
  }
  e.RegisterForNotifyClipCreated = Ae;
  function je(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, r(mi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipCreated = je;
  function O(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, r(mi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipCreated = O),
    (e.NotifyClipDeletedHandler = {
      name: `GameRecording.NotifyClipDeleted#1`,
      request: hi,
    }));
  function Me(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(V.NotifyClipDeletedHandler, e)
    );
  }
  e.RegisterForNotifyClipDeleted = Me;
  function k(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, r(hi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipDeleted = k;
  function Ne(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, r(hi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipDeleted = Ne),
    (e.NotifyExportProgressHandler = {
      name: `GameRecording.NotifyExportProgress#1`,
      request: gi,
    }));
  function Pe(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(V.NotifyExportProgressHandler, e)
    );
  }
  e.RegisterForNotifyExportProgress = Pe;
  function Fe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, r(gi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyExportProgress = Fe;
  function Ie(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, r(gi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyExportProgress = Ie),
    (e.NotifyUploadProgressHandler = {
      name: `GameRecording.NotifyUploadProgress#1`,
      request: wi,
    }));
  function Le(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(V.NotifyUploadProgressHandler, e)
    );
  }
  e.RegisterForNotifyUploadProgress = Le;
  function Re(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, r(wi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyUploadProgress = Re;
  function ze(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, r(wi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyUploadProgress = ze),
    (e.NotifyLowDiskSpaceHandler = {
      name: `GameRecording.NotifyLowDiskSpace#1`,
      request: yr,
    }));
  function Be(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(V.NotifyLowDiskSpaceHandler, e)
    );
  }
  e.RegisterForNotifyLowDiskSpace = Be;
  function Ve(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, r(yr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyLowDiskSpace = Ve;
  function He(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, r(yr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyLowDiskSpace = He),
    (e.NotifyPostGameHighlightsChangedHandler = {
      name: `GameRecording.NotifyPostGameHighlightsChanged#1`,
      request: br,
    }));
  function A(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyPostGameHighlightsChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPostGameHighlightsChanged = A;
  function Ue(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            r(br, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPostGameHighlightsChanged = Ue;
  function We(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            r(br, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPostGameHighlightsChanged = We),
    (e.NotifyOpenOverlayToGamePhaseHandler = {
      name: `GameRecording.NotifyOpenOverlayToGamePhase#1`,
      request: xr,
    }));
  function M(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyOpenOverlayToGamePhaseHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToGamePhase = M;
  function N(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            r(xr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToGamePhase = N;
  function Ge(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            r(xr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToGamePhase = Ge),
    (e.NotifyOpenOverlayToTimelineEventHandler = {
      name: `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
      request: Sr,
    }));
  function Ke(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyOpenOverlayToTimelineEventHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToTimelineEvent = Ke;
  function qe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            r(Sr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToTimelineEvent = qe;
  function Je(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            r(Sr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToTimelineEvent = Je),
    (e.NotifyPhaseListChangedHandler = {
      name: `GameRecording.NotifyPhaseListChanged#1`,
      request: Cr,
    }));
  function Ye(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyPhaseListChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPhaseListChanged = Ye;
  function P(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            r(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPhaseListChanged = P;
  function Xe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            r(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPhaseListChanged = Xe),
    (e.GetPerGameSettingsHandler = {
      name: `GameRecording.GetPerGameSettings#1`,
      request: vi,
      response: yi,
    }));
  function Ze(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, r(vi, e), yi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPerGameSettings = Ze;
  function Qe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, r(vi, e), yi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPerGameSettings = Qe),
    (e.SetPerGameSettingsHandler = {
      name: `GameRecording.SetPerGameSettings#1`,
      request: bi,
      response: xi,
    }));
  function $e(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, r(bi, e), xi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SetPerGameSettings = $e;
  function et(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, r(bi, e), xi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSetPerGameSettings = et),
    (e.DeletePerGameSettingsHandler = {
      name: `GameRecording.DeletePerGameSettings#1`,
      request: Si,
      response: Ci,
    }));
  function tt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, r(Si, e), Ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeletePerGameSettings = tt;
  function nt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, r(Si, e), Ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeletePerGameSettings = nt),
    (e.UserAddTimelineEntryHandler = {
      name: `GameRecording.UserAddTimelineEntry#1`,
      request: Gr,
      response: Kr,
    }));
  function rt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, r(Gr, e), Kr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserAddTimelineEntry = rt;
  function it(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, r(Gr, e), Kr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserAddTimelineEntry = it),
    (e.UserUpdateTimelineEntryHandler = {
      name: `GameRecording.UserUpdateTimelineEntry#1`,
      request: qr,
      response: Jr,
    }));
  function at(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, r(qr, e), Jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserUpdateTimelineEntry = at;
  function ot(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, r(qr, e), Jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserUpdateTimelineEntry = ot),
    (e.UserRemoveTimelineEntryHandler = {
      name: `GameRecording.UserRemoveTimelineEntry#1`,
      request: Yr,
      response: Xr,
    }));
  function st(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, r(Yr, e), Xr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserRemoveTimelineEntry = st;
  function ct(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, r(Yr, e), Xr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserRemoveTimelineEntry = ct),
    (e.ManuallyDeleteRecordingsForAppsHandler = {
      name: `GameRecording.ManuallyDeleteRecordingsForApps#1`,
      request: Zr,
      response: Qr,
    }));
  function lt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            r(Zr, e),
            Qr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.ManuallyDeleteRecordingsForApps = lt;
  function ut(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            r(Zr, e),
            Qr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgManuallyDeleteRecordingsForApps = ut),
    (e.GetTotalDiskSpaceUsageHandler = {
      name: `GameRecording.GetTotalDiskSpaceUsage#1`,
      request: $r,
      response: ei,
    }));
  function dt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, r($r, e), ei, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTotalDiskSpaceUsage = dt;
  function ft(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, r($r, e), ei, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTotalDiskSpaceUsage = ft),
    (e.SwitchBackgroundRecordingGameHandler = {
      name: `GameRecording.SwitchBackgroundRecordingGame#1`,
      request: Ti,
      response: Ei,
    }));
  function pt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            r(Ti, e),
            Ei,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.SwitchBackgroundRecordingGame = pt;
  function mt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            r(Ti, e),
            Ei,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgSwitchBackgroundRecordingGame = mt),
    (e.GetStateHandler = {
      name: `GameRecording.GetState#1`,
      request: Di,
      response: Oi,
    }));
  function ht(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, r(Di, e), Oi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetState = ht;
  function gt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, r(Di, e), Oi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetState = gt),
    (e.NotifyStateChangedHandler = {
      name: `GameRecording.NotifyStateChanged#1`,
      request: ki,
    }));
  function _t(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(V.NotifyStateChangedHandler, e)
    );
  }
  e.RegisterForNotifyStateChanged = _t;
  function vt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, r(ki, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyStateChanged = vt;
  function yt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, r(ki, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SendMsgNotifyStateChanged = yt;
})((V ||= {}));
var Ai = (function (e) {
  return (
    (e[(e.Invalid = 0)] = `Invalid`),
    (e[(e.Playing = 1)] = `Playing`),
    (e[(e.Staging = 2)] = `Staging`),
    (e[(e.Menus = 3)] = `Menus`),
    e
  );
})({});
function ji(e) {
  return e.type === `gamemode`;
}
function Mi(e) {
  return e.type === `state_description`;
}
function Ni(e) {
  return e.type === `event` && parseInt(e.duration) > 0;
}
function Pi(e) {
  return e.type === `event`;
}
function Fi(e) {
  return e.type === `achievement`;
}
function Ii(e) {
  return e.type === `error`;
}
function Li(e) {
  return e.type === `usermarker`;
}
function Ri(e) {
  return e.type === `screenshot`;
}
function zi(e) {
  let t = { id: e.entry_id, time: e.time, type: void 0 };
  switch (e.type) {
    case 1: {
      let n = t;
      ((n.type = `gamemode`), (n.mode = e.game_mode));
      break;
    }
    case 5: {
      let n = t;
      ((n.type = `usermarker`),
        (n.icon = `steam_marker`),
        (n.priority = e.marker_priority));
      break;
    }
    case 4: {
      let n = t;
      ((n.type = `achievement`), (n.achievement_name = e.achievement_name));
      break;
    }
    case 7: {
      let n = t;
      ((n.type = `error`), (n.description = e.marker_description));
      break;
    }
    case 3: {
      let n = t;
      ((n.type = `state_description`), (n.title = e.timestamp_title));
      break;
    }
    case 2: {
      let n = t;
      ((n.type = `event`),
        (n.icon = e.marker_icon),
        (n.title = e.range_title),
        (n.description = e.marker_description),
        (n.priority = e.marker_priority),
        (n.duration = e.range_duration),
        (n.possible_clip = e.range_possible_clip));
      break;
    }
    case 6: {
      let n = t;
      ((n.type = `screenshot`),
        (n.icon = e.marker_icon),
        (n.priority = e.marker_priority),
        (n.handle = e.screenshot_handle));
      break;
    }
    default:
      return null;
  }
  return t;
}
var Bi = new me(`ReactUsageReporting`).Debug,
  Vi = 100,
  Hi = Pe.PerMinute * 1e3,
  Ui = class {
    m_strProduct;
    m_strVersion;
    m_transport = null;
    m_mapRoutes = new Map();
    m_mapComponents = new Map();
    m_mapActions = new Map();
    m_reportCount = 0;
    m_bInitialized = !1;
    Init(e, t, n) {
      ((this.m_bInitialized = !0),
        (this.m_strProduct = e),
        (this.m_strVersion = t),
        (this.m_transport = n),
        this.ScheduleSend());
    }
    ScheduleSend() {
      setTimeout(() => this.CheckSend(), Hi);
    }
    CheckSend() {
      (this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend());
    }
    ReportInternal(e, t) {
      (t.set(e, (t.get(e) ?? 0) + 1),
        this.m_reportCount++,
        this.ShouldSendMetricsImmediately() && this.SendMetrics());
    }
    ReportRouteMatch(e) {
      (Bi(`Route match: ` + e), this.ReportInternal(e, this.m_mapRoutes));
    }
    ReportTrackedComponent(e) {
      (Bi(`Tracked component: ` + e),
        this.ReportInternal(e, this.m_mapComponents));
    }
    ReportTrackedAction(e) {
      (Bi(`User action: ` + e), this.ReportInternal(e, this.m_mapActions));
    }
    ShouldSendMetricsImmediately() {
      return this.m_reportCount >= Vi;
    }
    SendMetrics() {
      if (!this.m_bInitialized) return;
      let e = n.Init(te);
      (e.Body().set_product(this.m_strProduct),
        e.Body().set_version(this.m_strVersion),
        this.m_mapRoutes.forEach((t, n) => {
          let r = new y();
          (r.set_route(n), r.set_count(t), e.Body().add_routes(r));
        }),
        this.m_mapComponents.forEach((t, n) => {
          let r = new d();
          (r.set_component(n), r.set_count(t), e.Body().add_components(r));
        }),
        this.m_mapActions.forEach((t, n) => {
          let r = new m();
          (r.set_action(n), r.set_count(t), e.Body().add_actions(r));
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        ne.ReportReactUsage(this.m_transport, e));
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
v([w], Ui.prototype, `CheckSend`, null);
var H = new Ui();
function U(e) {
  return { type: `global`, valMS: e };
}
function Wi(e) {
  return { type: `timeline`, valMS: e };
}
function Gi(e) {
  return { type: `global`, valPX: e };
}
function Ki(e) {
  return { type: `scrollWindow`, valPX: e };
}
var qi = class e {
    m_ulGameID;
    constructor(e, t, n) {
      if (typeof e == `string`) this.m_ulGameID = qe.fromString(e, !0);
      else {
        let r = n,
          i = ((e & 255) << 24) + (t & 16777215);
        this.m_ulGameID = qe.fromBits(i, r, !0);
      }
    }
    GetAppID() {
      return this.m_ulGameID.getLowBitsUnsigned() & 16777215;
    }
    GetType() {
      return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
    }
    GetModID() {
      return this.m_ulGameID.getHighBitsUnsigned();
    }
    ConvertTo64BitString() {
      return this.m_ulGameID.toString();
    }
    BIsSteamApp() {
      return this.GetType() === i.k_EGameIDTypeApp;
    }
    BIsShortcut() {
      return this.GetType() === i.k_EGameIDTypeShortcut;
    }
    BIsMod() {
      return this.GetType() === i.k_EGameIDTypeGameMod;
    }
    GetInternalAppID() {
      return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
    }
    BIsValid() {
      switch (this.GetType()) {
        case i.k_EGameIDTypeApp:
          return this.GetAppID() !== 0;
        case i.k_EGameIDTypeGameMod:
          return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
        case i.k_EGameIDTypeShortcut:
          return !!(this.GetModID() & 2147483648);
        default:
          return (t(!1, `Unknown GameID type: ${this.GetType()}`), !1);
      }
    }
    static InitFromAppID(t) {
      return new e(i.k_EGameIDTypeApp, t, 0);
    }
    static InitFromShortcutID(t) {
      return new e(i.k_EGameIDTypeShortcut, 0, t);
    }
  },
  Ji = 1e4,
  Yi = 3e3,
  Xi = 4e3,
  Zi = class e {
    constructor() {
      Ke(this);
    }
    m_bInitialized = !1;
    m_rgListeners = [];
    m_gameID;
    m_clipID;
    m_ulFirstTimelineOffsetMS = 0;
    m_rgTimelineMetadata = [];
    m_mapTimelineData = new Map();
    m_mapRunningTimelines = new Map();
    m_schUpdateRunning = new ge();
    m_fnTimelineURLBuilder;
    BInitialized() {
      return this.m_bInitialized;
    }
    GetTimelines() {
      return this.m_rgTimelineMetadata;
    }
    GetTimelineMetadataIndex(e) {
      return this.m_rgTimelineMetadata.findIndex(
        (t) => t.metadata.timeline_id === e,
      );
    }
    GetTimelineMetadata(e) {
      return this.m_rgTimelineMetadata.find(
        (t) => t.metadata.timeline_id === e,
      );
    }
    GetGameID() {
      return this.m_gameID;
    }
    GetClipID() {
      return this.m_clipID;
    }
    BIsTimelineRunning(e) {
      return this.m_mapRunningTimelines.has(e);
    }
    AddEventListener(e) {
      return (this.m_rgListeners.push(e), () => se(this.m_rgListeners, e));
    }
    async LoadTimelinesForBackgroundVideo(e) {
      this.m_gameID = e;
      let { timelines: t = [] } = (await V.GetTimelinesForApp({ game_id: e }))
        .Body()
        .toObject();
      (this.m_mapRunningTimelines.forEach((e, n) => {
        t.find((e) => e.timeline_id == n) || t.push(e.m_metadata);
      }),
        this.UpdateTimelineMetadata(t),
        (this.m_fnTimelineURLBuilder = (e) =>
          `https://steamloopback.host/gamerecordings/timelines/${e}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    async LoadTimelinesForClip(e) {
      this.m_clipID = e;
      let t = await V.GetTimelinesForClip({ clip_id: e });
      if (t.GetEResult() != 1) throw Error(`Unable to load clip ` + e);
      let {
        timelines: n = [],
        game_id: r,
        first_timeline_start_offset_ms: i,
      } = t.Body().toObject();
      ((this.m_gameID = r), this.UpdateTimelineMetadata(n));
      for (let t of this.m_rgTimelineMetadata) {
        F(`Loaded clip ${e} timeline ${t.metadata.timeline_id}`);
        for (let e of t.metadata.recordings)
          F(`Clip recording ${e.recording_id} duration ${e.duration_ms}`);
      }
      ((this.m_ulFirstTimelineOffsetMS = parseInt(i)),
        (this.m_fnTimelineURLBuilder = (e) =>
          `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${e}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    UpdateTimelineMetadata(e) {
      let t = e.slice().sort((e, t) => e.date_recorded - t.date_recorded),
        n = [],
        r = 0,
        i = {};
      (t.forEach((t) => {
        ((t.recordings ||= []),
          i[t.timeline_id]
            ? console.error(
                `Duplicate timelines found in UpdateTimelineMetadata()`,
                t.timeline_id,
                e,
              )
            : (n.push({ nGlobalOffsetMS: U(r), metadata: t }),
              (r += parseInt(t.duration_ms)),
              (i[t.timeline_id] = !0)));
      }),
        (this.m_rgTimelineMetadata = n));
    }
    LoadTimelinesForSharedClip(e) {
      this.SetPreloadedTimelines(0, e.clip_id, e.game_id, e.timelines, void 0);
    }
    LoadTimelinesForTestGame(e, t) {
      this.SetPreloadedTimelines(
        0,
        void 0,
        e,
        t,
        (e) => `https://steamloopback.host/gamerecordings/timelines/${e}.json`,
      );
    }
    LoadTimelinesForTestClip(e, t, n, r) {
      this.SetPreloadedTimelines(e, t, n, r, void 0);
    }
    SetPreloadedTimelines(e, t, n, r, i) {
      ((this.m_gameID = n),
        (this.m_clipID = t),
        (this.m_ulFirstTimelineOffsetMS = e));
      let a = r.slice();
      (this.m_mapRunningTimelines.forEach((e, t) => {
        a.find((e) => e.timeline_id == t) || a.push(e.m_metadata);
      }),
        this.UpdateTimelineMetadata(a),
        (this.m_fnTimelineURLBuilder = i),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    FireEvent(e, ...t) {
      for (let n of this.m_rgListeners) {
        let r = n[e];
        r instanceof Function && r.apply(n, t);
      }
    }
    async LoadTimelineData(e) {
      let t = this.m_mapTimelineData.get(e);
      if (t && t.m_strState === `loading`) {
        await t.m_promise;
        return;
      }
      if (
        (t && t.m_strState == `error`) ||
        (this.IsActiveTimeline(e) && t.m_strState == `loaded`)
      )
        return;
      let n = {
        m_rgGameModeChanges: [],
        m_rgStateDescriptions: [],
        m_rgEntries: [],
        m_rgPhases: [],
      };
      if (!this.m_fnTimelineURLBuilder)
        this.m_mapTimelineData.set(e, { m_strState: `loaded`, ...n });
      else {
        let t = this.m_fnTimelineURLBuilder(e),
          r = Dn.default
            .get(t, { withCredentials: !1 })
            .then(
              (t) => {
                if (t.status == 200 && t.data) {
                  $i(t.data);
                  let n = this.ProcessTimelineEntries(t.data);
                  this.m_mapTimelineData.set(e, n);
                } else
                  this.m_mapTimelineData.set(e, { ...n, m_strState: `error` });
              },
              (t) => {
                this.m_mapTimelineData.set(e, { ...n, m_strState: `error` });
              },
            )
            .finally(() => this.FireEvent(`OnTimelineLoaded`, e));
        this.m_mapTimelineData.set(e, {
          m_strState: `loading`,
          m_promise: r,
          ...n,
        });
      }
    }
    ProcessTimelineEntries(e) {
      let t = {
        m_strState: `loaded`,
        m_rgGameModeChanges: [],
        m_rgStateDescriptions: [],
        m_rgEntries: [],
        m_rgPhases: [],
      };
      if (e.entries) {
        let n = [],
          r = [],
          i = [],
          a = [];
        for (let t of e.entries)
          switch (t.type) {
            case `phase`:
              i.push(t);
              break;
            case `gamemode`:
              n.push(t);
              break;
            case `state_description`:
              r.push(t);
              break;
            case `achievement`:
            case `error`:
            case `event`:
            case `screenshot`:
            case `usermarker`:
              a.push(t);
              break;
            default:
              console.error(`Unknown timeline entry type ${t.type}`);
          }
        let o = (e, t) => parseInt(e.time) - parseInt(t.time);
        ((t.m_rgGameModeChanges = n.sort(o)),
          (t.m_rgStateDescriptions = r.sort(o)),
          (t.m_rgPhases = i.sort(o)),
          (t.m_rgEntries = a.sort(o)),
          t.m_rgGameModeChanges.length > 0 &&
            parseInt(t.m_rgGameModeChanges[0].time) < Ji &&
            (t.m_rgGameModeChanges[0].time = `0`));
      }
      return t;
    }
    static ApplyTimelineRounding(e, t) {
      if (t === 0) return e;
      let n = e % t;
      return n == 0 ? e : e + (t - n);
    }
    FindTimelineAtOffset(t, n) {
      let r = t + this.m_ulFirstTimelineOffsetMS,
        i = 0;
      for (let t of this.m_rgTimelineMetadata) {
        let a = this.GetTimelineStartBeforeGlobalZeroMS(t.metadata.timeline_id),
          o = parseInt(t.metadata.duration_ms) + a;
        if (i + o > r)
          return {
            timeline: t,
            nTimelineOffsetMS: r - i,
            ulGlobalToTimelineOffset: a,
          };
        i += e.ApplyTimelineRounding(o, n);
      }
      return null;
    }
    GetGlobalOffsetDataForTimeline(t, n) {
      let r = 0;
      for (let i of this.m_rgTimelineMetadata) {
        let a = parseInt(i.metadata.duration_ms),
          o = e.ApplyTimelineRounding(a, n);
        if (i.metadata.timeline_id == t)
          return { nGlobalOffsetMS: r, nRoundedDurationMS: o };
        r += o;
      }
      return null;
    }
    CreateGlobalRangeForTimeline(e, t, n, r) {
      let i = t - n,
        a = t + r;
      return this.ClampGlobalRangeToTimeline(e, i, a);
    }
    ClampGlobalRangeToTimeline(e, t, n) {
      let r = this.GetGlobalOffsetDataForTimeline(e, 0);
      return r
        ? [
            Math.max(t, r.nGlobalOffsetMS),
            Math.min(n, r.nGlobalOffsetMS + r.nRoundedDurationMS - 1),
          ]
        : [0, 0];
    }
    GetTimelineOffsetFromGlobal(t, n) {
      let r = this.m_ulFirstTimelineOffsetMS + t,
        i = 0;
      for (let t of this.m_rgTimelineMetadata) {
        let a = this.GetTimelineStartBeforeGlobalZeroMS(t.metadata.timeline_id),
          o = parseInt(t.metadata.duration_ms) + a,
          s = e.ApplyTimelineRounding(o, n);
        if (r < i + s)
          return {
            strTimelineID: t.metadata.timeline_id,
            nTimelineOffsetMS: Wi(r - i - a),
          };
        i += o;
      }
      return { strTimelineID: void 0, nTimelineOffsetMS: Wi(NaN) };
    }
    ConvertRecordingOffsetToGlobalOffset(t, n, r) {
      let i = 0;
      for (let a of this.m_rgTimelineMetadata) {
        let o = parseInt(a.metadata.duration_ms),
          s = this.GetTimelineStartBeforeGlobalZeroMS(a.metadata.timeline_id),
          c = e.ApplyTimelineRounding(o, r);
        for (let e of a.metadata.recordings)
          if (e.recording_id === t) {
            let t =
              (isNaN(parseInt(e.recording_zero_timeline_offset_ms))
                ? 0
                : parseInt(e.recording_zero_timeline_offset_ms) - s) + n;
            return (
              (i += t),
              {
                nGlobalOffsetMS: i,
                nRoundedDurationMS: c,
                strTimelineID: a.metadata.timeline_id,
                nTimelineOffsetMS: t,
              }
            );
          }
        i += c;
      }
      return null;
    }
    IsActiveTimeline(e) {
      return e ? this.m_mapRunningTimelines.has(e) : !1;
    }
    MakeRelativeToTimelineEndIfActive(e, t) {
      if (!this.IsActiveTimeline(e)) return t;
      let n = this.GetTimelineMetadata(e);
      if (!n) return t;
      let r = parseInt(n.metadata.duration_ms);
      return Math.min(t - r, 0);
    }
    IsActiveRecording(e) {
      for (let t of this.m_rgTimelineMetadata)
        for (let n of t.metadata.recordings)
          if (n.recording_id === e) {
            let n = this.m_mapRunningTimelines.get(t.metadata.timeline_id);
            return n && n.m_runningRecording
              ? n.m_runningRecording.recording_id === e
              : !1;
          }
      return !1;
    }
    GetRunningTimelineDurationMS(e) {
      let t = this.m_mapRunningTimelines.get(e);
      if (!t) return 0;
      let n =
          performance.now() - t.m_perfCounterStart + t.m_nPerfCounterOffsetMS,
        r = parseInt(t.m_metadata.duration_ms) || 0;
      return Math.max(n, r);
    }
    GetRunningTimelineForRecording(e, t) {
      let n = this.m_mapRunningTimelines.get(e);
      return n &&
        n.m_runningRecording &&
        n.m_runningRecording.recording_id === t
        ? n
        : null;
    }
    ConvertGlobaOffsetToRecordingAndRelativeOffset(e) {
      if (!this.m_bInitialized) return null;
      let t = this.FindTimelineAtOffset(e, 0);
      if (!t) return null;
      let n = t.nTimelineOffsetMS - t.ulGlobalToTimelineOffset;
      for (let e of t.timeline.metadata.recordings) {
        let r = parseInt(e.start_offset_ms);
        if (r + parseInt(e.duration_ms) < n || r > n) continue;
        let i = parseInt(e.recording_zero_timeline_offset_ms),
          a = Math.max(n - r, 0);
        return (
          isNaN(i) || (a = Math.max(t.nTimelineOffsetMS - i, 0)),
          {
            strRecordingID: e.recording_id,
            nRecordingOffsetMS: a,
            nStartOffsetMS: r,
          }
        );
      }
      return null;
    }
    async FindRecordingAndOffsetForEntry(e) {
      for (let t of this.m_mapRunningTimelines.keys()) {
        if (!this.IsActiveTimeline(t)) continue;
        await this.LoadTimelineData(t);
        let n = this.m_mapTimelineData.get(t),
          r = this.m_mapRunningTimelines.get(t);
        if (n && r) {
          for (let t of n.m_rgEntries)
            if (t.id == e) {
              let e = parseInt(t.time);
              for (let t of r.m_metadata.recordings) {
                let n = parseInt(t.start_offset_ms),
                  r = n + parseInt(t.duration_ms);
                if (e >= n && e <= r)
                  return {
                    strRecordingID: t.recording_id,
                    nRecordingOffsetMS: e,
                    nStartOffsetMS: n,
                  };
              }
            }
          break;
        }
      }
    }
    GetClosestNextRecordingInGlobalTimeline(e) {
      for (let t of this.m_rgTimelineMetadata)
        for (let n of t.metadata.recordings)
          if (parseInt(n.start_offset_ms) + t.nGlobalOffsetMS.valMS > e.valMS)
            return n;
      return null;
    }
    GetClosestPreviousRecordingInGlobalTimeline(e) {
      let t = null;
      for (let n of this.m_rgTimelineMetadata)
        for (let r of n.metadata.recordings)
          if (parseInt(r.start_offset_ms) + n.nGlobalOffsetMS.valMS > e.valMS)
            return t;
          else t = r;
      return t;
    }
    ConvertRecordingTimeMStoPreTrimTimeMS(e, t) {
      for (let n of this.m_rgTimelineMetadata)
        for (let r of n.metadata.recordings)
          if (r.recording_id === e) {
            let e = parseInt(r.recording_zero_timeline_offset_ms),
              i = this.GetTimelineStartBeforeGlobalZeroMS(
                n.metadata.timeline_id,
              );
            return !i || isNaN(e) ? t : t + i - e;
          }
      return t;
    }
    GetTimelineDataOrStartLoad(e) {
      if (!e) return null;
      let t = this.m_mapTimelineData.get(e);
      return (
        (t ||= (this.LoadTimelineData(e), this.m_mapTimelineData.get(e))), t
      );
    }
    GetTimelineData(e) {
      return this.m_mapTimelineData.get(e);
    }
    SetTimelineData(e, t) {
      let n = this.ProcessTimelineEntries(t);
      this.m_mapTimelineData.set(e, n);
    }
    GetClosestPreviousEntryInTimeline(e, t) {
      let n = this.GetTimelineMetadata(e),
        r = this.GetTimelineStartBeforeGlobalZeroMS(e),
        i = this.GetTimelineDataOrStartLoad(e),
        a = null;
      if (i && i.m_strState === `loaded`) {
        let e = i.m_rgEntries.filter((e) => {
            let t = parseInt(e.time);
            return t < r + parseInt(n.metadata.duration_ms) && t > r;
          }),
          o = T(e, (e) => t.valMS - 1 - parseInt(e.time));
        o !== -1 && (a = e[o]);
      }
      return { entry: a, timelineState: i?.m_strState };
    }
    GetClosestNextEntryInTimeline(e, t) {
      let n = this.GetTimelineMetadata(e),
        r = this.GetTimelineStartBeforeGlobalZeroMS(e),
        i = this.GetTimelineDataOrStartLoad(e),
        a = null;
      if (i && i.m_strState === `loaded`) {
        let e = i.m_rgEntries.filter((e) => {
            let t = parseInt(e.time);
            return t < r + parseInt(n.metadata.duration_ms) && t > r;
          }),
          o = T(e, (e) => t.valMS - parseInt(e.time));
        o < e.length - 1 && (a = e[o + 1]);
      }
      return { entry: a, timelineState: i?.m_strState };
    }
    GetClosestPreviousEntryInGlobalTimeline(e) {
      let t = this.GetTimelineOffsetFromGlobal(e, 0),
        n = this.GetTimelineData(t.strTimelineID);
      if (!n || n.m_strState !== `loaded`)
        return {
          timelineID: t?.strTimelineID,
          timelineState: n?.m_strState,
          entry: null,
          globalMS: null,
        };
      let r = this.GetTimelineStartBeforeGlobalZeroMS(t.strTimelineID),
        i = t.nTimelineOffsetMS.valMS + r,
        a = T(n.m_rgEntries, (e) => i - parseInt(e.time));
      if (a !== -1) {
        let e = n.m_rgEntries[a],
          i =
            this.GetTimelineMetadata(t.strTimelineID).nGlobalOffsetMS.valMS -
            r +
            parseInt(e.time);
        return i < 0
          ? {
              timelineID: t.strTimelineID,
              timelineState: n.m_strState,
              entry: null,
              globalMS: null,
            }
          : {
              timelineID: t.strTimelineID,
              timelineState: n.m_strState,
              entry: e,
              globalMS: U(i),
            };
      }
      let o = this.GetTimelineMetadataIndex(t.strTimelineID);
      if (o < 1)
        return {
          timelineID: t.strTimelineID,
          timelineState: n.m_strState,
          entry: null,
          globalMS: null,
        };
      for (let e = o - 1; e >= 0; e--) {
        let t = this.m_rgTimelineMetadata[e],
          n = this.GetTimelineData(t.metadata.timeline_id);
        if (n) {
          if (n.m_strState !== `loaded`)
            return {
              timelineID: t.metadata.timeline_id,
              timelineState: n.m_strState,
              entry: null,
              globalMS: null,
            };
          if (n.m_rgEntries.length) {
            let e = n.m_rgEntries[n.m_rgEntries.length - 1],
              r = this.GetTimelineStartBeforeGlobalZeroMS(
                t.metadata.timeline_id,
              ),
              i = t.nGlobalOffsetMS.valMS - r + parseInt(e.time);
            return i < 0
              ? {
                  timelineID: t.metadata.timeline_id,
                  timelineState: n.m_strState,
                  entry: null,
                  globalMS: null,
                }
              : {
                  timelineID: t.metadata.timeline_id,
                  timelineState: n.m_strState,
                  entry: e,
                  globalMS: U(i),
                };
          }
        }
      }
      return {
        timelineID: this.m_rgTimelineMetadata[0].metadata.timeline_id,
        timelineState: `loaded`,
        entry: null,
        globalMS: null,
      };
    }
    GetClosestNextEntryInGlobalTimeline(e) {
      let t = this.GetTimelineOffsetFromGlobal(e, 0),
        n = this.GetTimelineData(t.strTimelineID);
      if (!n || n.m_strState !== `loaded`)
        return {
          timelineID: t?.strTimelineID,
          timelineState: n?.m_strState,
          entry: null,
          globalMS: null,
        };
      let r = this.GetTimelineStartBeforeGlobalZeroMS(t.strTimelineID),
        i = t.nTimelineOffsetMS.valMS + r,
        a = T(n.m_rgEntries, (e) => i - parseInt(e.time)) + 1;
      if (a <= n.m_rgEntries.length - 1) {
        let e = n.m_rgEntries[a],
          i =
            this.GetTimelineMetadata(t.strTimelineID).nGlobalOffsetMS.valMS -
            r +
            parseInt(e.time);
        return i < this.GetGlobalTimelineEndMS().valMS
          ? {
              timelineID: t.strTimelineID,
              timelineState: n.m_strState,
              entry: e,
              globalMS: U(i),
            }
          : {
              timelineID: t.strTimelineID,
              timelineState: n.m_strState,
              entry: null,
              globalMS: null,
            };
      }
      let o = this.m_rgTimelineMetadata.length,
        s = this.GetTimelineMetadataIndex(t.strTimelineID);
      if (s === -1 || s === o - 1)
        return {
          timelineID: t.strTimelineID,
          timelineState: n.m_strState,
          entry: null,
          globalMS: null,
        };
      for (let e = s + 1; e < o; e++) {
        let t = this.m_rgTimelineMetadata[e],
          n = this.GetTimelineData(t.metadata.timeline_id);
        if (n) {
          if (n.m_strState !== `loaded`)
            return {
              timelineID: t.metadata.timeline_id,
              timelineState: n.m_strState,
              entry: null,
              globalMS: null,
            };
          if (n.m_rgEntries.length) {
            let e = n.m_rgEntries[0],
              r = this.GetTimelineStartBeforeGlobalZeroMS(
                t.metadata.timeline_id,
              ),
              i = t.nGlobalOffsetMS.valMS - r + parseInt(e.time);
            return i < this.GetGlobalTimelineEndMS().valMS
              ? {
                  timelineID: t.metadata.timeline_id,
                  timelineState: n.m_strState,
                  entry: e,
                  globalMS: U(i),
                }
              : {
                  timelineID: t.metadata.timeline_id,
                  timelineState: n.m_strState,
                  entry: null,
                  globalMS: null,
                };
          }
        }
      }
      return {
        timelineID: this.m_rgTimelineMetadata[o - 1].metadata.timeline_id,
        timelineState: `loaded`,
        entry: null,
        globalMS: null,
      };
    }
    FindRangeEventsAtGlobalMS(e) {
      let t = this.GetTimelineOffsetFromGlobal(e, 0),
        n = this.GetTimelineDataOrStartLoad(t.strTimelineID);
      if (!n || n.m_strState !== `loaded`) return [];
      let r = [];
      for (let e of n.m_rgEntries) {
        if (parseInt(e.time) > t.nTimelineOffsetMS.valMS) break;
        if (e.type !== `event` || parseInt(e.duration) == 0) continue;
        let n = parseInt(e.time),
          i = n + parseInt(e.duration);
        n <= t.nTimelineOffsetMS.valMS &&
          i >= t.nTimelineOffsetMS.valMS &&
          r.push(e);
      }
      return r;
    }
    GetStateDescriptionAtGlobalMS(e) {
      let t = this.GetTimelineOffsetFromGlobal(e.valMS, 0),
        n = this.GetTimelineDataOrStartLoad(t.strTimelineID);
      if (!n || n.m_strState !== `loaded`) return null;
      let r = T(
        n.m_rgStateDescriptions,
        (e) => t.nTimelineOffsetMS.valMS - parseInt(e.time),
      );
      return r > -1 ? n.m_rgStateDescriptions[r] : null;
    }
    AdvanceGameModeIndex(e) {
      let t = e.m_iGameModeChanges;
      for (; t + 1 < e.m_data.m_rgGameModeChanges.length;) {
        let n = e.m_data.m_rgGameModeChanges[t + 1];
        if (parseInt(n.time) > e.m_nTimelineOffsetMS) break;
        t++;
      }
      e.m_iGameModeChanges = t;
    }
    AdvanceEntriesIndex(e) {
      for (
        e.m_iEntries == -1 && e.m_iEntries++;
        e.m_iEntries < e.m_data.m_rgEntries.length;
      ) {
        let t = e.m_data.m_rgEntries[e.m_iEntries];
        if (parseInt(t.time) >= e.m_nTimelineOffsetMS) break;
        e.m_iEntries++;
      }
    }
    CreateTimelineIterator(e, t) {
      let n = this.FindTimelineAtOffset(e, t);
      if (!n)
        return {
          m_timeline: null,
          m_data: null,
          m_nTimelineOffsetMS: 0,
          m_iGameModeChanges: -1,
          m_iEntries: -1,
        };
      let r = this.GetTimelineDataOrStartLoad(n.timeline.metadata.timeline_id),
        i = -1,
        a = -1;
      if (r?.m_strState == `loaded`) {
        let e = (e) => n.ulGlobalToTimelineOffset - parseInt(e.time);
        ((i = T(r.m_rgGameModeChanges, e)), (a = T(r.m_rgEntries, e)));
      }
      let o = {
        m_timeline: n.timeline.metadata,
        m_data: r,
        m_nTimelineOffsetMS: Math.max(n.ulGlobalToTimelineOffset, 0),
        m_iGameModeChanges: i,
        m_iEntries: a,
      };
      return (this.AdvanceEntriesIndex(o), this.AdvanceGameModeIndex(o), o);
    }
    HasIteratorReachedEnd(e) {
      return !e.m_timeline;
    }
    AdvanceIterator(e, t) {
      let n = parseInt(e.m_timeline.duration_ms);
      if (e.m_nTimelineOffsetMS + t < n + this.m_ulFirstTimelineOffsetMS) {
        ((e.m_nTimelineOffsetMS += t),
          this.AdvanceEntriesIndex(e),
          this.AdvanceGameModeIndex(e));
        return;
      }
      let r = this.m_rgTimelineMetadata.findIndex(
        (t) => t.metadata == e.m_timeline,
      );
      r < 0 || r == this.m_rgTimelineMetadata.length - 1
        ? (e.m_timeline = null)
        : (r++,
          (e.m_timeline = this.m_rgTimelineMetadata[r].metadata),
          (e.m_data = this.GetTimelineDataOrStartLoad(
            e.m_timeline.timeline_id,
          )),
          (e.m_nTimelineOffsetMS = 0),
          (e.m_iGameModeChanges = 0),
          (e.m_iEntries = 0));
    }
    GetIteratorTimelineState(e) {
      return e.m_data.m_strState;
    }
    GetIteratorGameMode(e) {
      return e.m_iGameModeChanges < 0 ||
        e.m_iGameModeChanges >= e.m_data.m_rgGameModeChanges.length
        ? Ai.Playing
        : e.m_data.m_rgGameModeChanges[e.m_iGameModeChanges].mode;
    }
    *GetIteratorEntriesWithin(e, t) {
      let n = e.m_data.m_rgEntries;
      for (let r = e.m_iEntries; r >= 0 && r < n.length; r++) {
        let i = n[r];
        if (parseInt(i.time) >= e.m_nTimelineOffsetMS + t) break;
        yield i;
      }
    }
    *GetIteratorGameModesWithin(e, t) {
      let n = e.m_data.m_rgGameModeChanges;
      for (let r = e.m_iEntries; r >= 0 && r < n.length; r++) {
        let i = n[r];
        if (parseInt(i.time) >= e.m_nTimelineOffsetMS + t) break;
        yield i;
      }
    }
    GetFirstRecording() {
      if (!this.m_bInitialized) return ``;
      let e = this.m_rgTimelineMetadata[0];
      if (!e) return ``;
      let t = e.metadata.recordings[0];
      return t ? t.recording_id : ``;
    }
    GetFirstRecordingOfLastTimelineSession() {
      if (!this.m_bInitialized) return ``;
      let e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (!e) return ``;
      let t = e.metadata.recordings[0];
      return t ? t.recording_id : ``;
    }
    GetNextRecording(e) {
      if (!this.m_bInitialized || !e) return ``;
      let t = !1;
      for (let n of this.m_rgTimelineMetadata)
        for (let r of n.metadata.recordings) {
          if (t) return r.recording_id;
          r.recording_id == e && (t = !0);
        }
      return ``;
    }
    BRecordingHasZeroOffset(e) {
      if (!this.m_bInitialized) return !1;
      for (let t of this.m_rgTimelineMetadata)
        for (let n of t.metadata.recordings)
          if (n.recording_id == e)
            return !isNaN(parseInt(n.recording_zero_timeline_offset_ms));
      return !1;
    }
    GetTimelineDateMS(e, t) {
      if (!this.m_bInitialized) return 0;
      let n = this.FindTimelineAtOffset(e, t);
      return n
        ? n.timeline.metadata.date_recorded * 1e3 + n.nTimelineOffsetMS
        : 0;
    }
    InsertEntryIntoTimelineSorted(e, t) {
      ce(e.m_rgEntries, t, (e, t) => parseInt(e.time) - parseInt(t.time));
    }
    AddEventToTimeline(e, t, n, r, i, a, o, s) {
      if (!this.m_bInitialized)
        return (I(`timeline loader not initialized, unexpected`), !1);
      let c = this.m_mapTimelineData.get(e);
      if (!c) return (I(`failed to find timeline ${e}`), !1);
      let l = t + this.GetTimelineStartBeforeGlobalZeroMS(e),
        u = {
          id: r,
          time: l + ``,
          type: `event`,
          icon: n,
          title: a,
          description: o,
          priority: i,
          duration: `${s}`,
          possible_clip: 2,
        };
      return (
        L(`adding timeline event marker at ${e} at ${l} MS`),
        this.InsertEntryIntoTimelineSorted(c, u),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    RemoveTimelineEvent(e, t) {
      if (!this.m_bInitialized)
        return (I(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (I(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (I(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddUserMarker(e, t, n, r) {
      if (!this.m_bInitialized)
        return (I(`timeline loader not initialized, unexpected`), !1);
      let i = this.m_mapTimelineData.get(e);
      if (!i) return (I(`failed to find timeline ${e}`), !1);
      let a = t + this.GetTimelineStartBeforeGlobalZeroMS(e),
        o = {
          id: r,
          time: a + ``,
          type: `usermarker`,
          icon: n,
          title: ``,
          description: ``,
          priority: 0,
        };
      return (
        L(`adding user marker at ${e} at ${a} MS`),
        this.InsertEntryIntoTimelineSorted(i, o),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    UpdateUserMarker(e, t, n) {
      if (!this.m_bInitialized)
        return (I(`timeline loader not initialized, unexpected`), !1);
      let r = this.m_mapTimelineData.get(e);
      if (!r) return (I(`failed to find timeline ${e}`), !1);
      let i = r.m_rgEntries.findIndex((e) => e.id === t);
      if (i < 0) return (I(`failed to find entry by id: ${t}`), !1);
      let a = r.m_rgEntries[i],
        o = a.time;
      return (
        (a.icon = n.strIcon),
        (a.time = `` + n.nTimelineOffsetMS),
        (a.title = n.name),
        (a.description = n.description),
        o != a.time &&
          (r.m_rgEntries.splice(i, 1),
          this.InsertEntryIntoTimelineSorted(r, a)),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    RemoveUserMarker(e, t) {
      if (!this.m_bInitialized)
        return (I(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (I(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (I(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddRunningTimeline(e, t, n) {
      if (this.m_rgTimelineMetadata.find((t) => t.metadata.timeline_id == e))
        return;
      let r = { timeline_id: e, game_id: t, date_recorded: n, recordings: [] },
        i = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1],
        a = i ? i.nGlobalOffsetMS.valMS + parseInt(i.metadata.duration_ms) : 0;
      (ce(
        this.m_rgTimelineMetadata,
        { nGlobalOffsetMS: U(a), metadata: r },
        (e, t) => e.metadata.date_recorded - t.metadata.date_recorded,
      ),
        this.m_mapTimelineData.set(e, {
          m_strState: `loaded`,
          m_rgGameModeChanges: [],
          m_rgStateDescriptions: [],
          m_rgEntries: [],
          m_rgPhases: [],
        }));
      let o = {
        m_metadata: r,
        m_globalStartMS: a,
        m_perfCounterStart: performance.now(),
        m_nPerfCounterOffsetMS: Math.max(0, je() - n) * 1e3,
        m_runningRecording: null,
      };
      (this.m_mapRunningTimelines.set(e, o),
        this.m_schUpdateRunning.IsScheduled() ||
          this.m_schUpdateRunning.Schedule(Xi, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, e));
    }
    UpdateRunningTimelines() {
      let e;
      (this.m_mapRunningTimelines.forEach((t) => {
        e = t.m_metadata.timeline_id;
        let n =
          performance.now() - t.m_perfCounterStart + t.m_nPerfCounterOffsetMS;
        n > (parseInt(t.m_metadata.duration_ms) || 0) &&
          (t.m_metadata.duration_ms = n.toString());
      }),
        this.m_mapRunningTimelines.size > 0 &&
          this.m_schUpdateRunning.Schedule(Xi, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, e));
    }
    RunningTimelineStopped(e, t) {
      let n = this.m_mapRunningTimelines.get(e);
      n &&
        ((n.m_metadata.duration_ms = t),
        this.m_mapRunningTimelines.delete(e),
        this.FireEvent(`OnInvalidate`, e));
    }
    AddRunningTimelineEntry(e) {
      let t = this.m_mapRunningTimelines.get(e.timeline_id),
        n = this.m_mapTimelineData.get(e.timeline_id);
      if (!t || !n) return;
      let r = zi(e);
      if (!r) return;
      ji(r)
        ? ce(
            n.m_rgGameModeChanges,
            r,
            (e, t) => parseInt(e.time) - parseInt(t.time),
          )
        : Mi(r)
          ? ce(
              n.m_rgStateDescriptions,
              r,
              (e, t) => parseInt(e.time) - parseInt(t.time),
            )
          : ce(n.m_rgEntries, r, (e, t) => parseInt(e.time) - parseInt(t.time));
      let i = parseInt(t.m_metadata.duration_ms) || 0,
        a = parseInt(e.time);
      (i < a && (t.m_metadata.duration_ms = a.toString()),
        this.FireEvent(`OnInvalidate`, e.timeline_id));
    }
    TimelineDeleted(e) {
      let t = this.m_rgTimelineMetadata
        .filter((t) => t.metadata.timeline_id !== e)
        .map((e) => e.metadata);
      (this.UpdateTimelineMetadata(t),
        this.m_mapTimelineData.delete(e),
        this.FireEvent(`OnInvalidate`, e));
    }
    RecordingSessionChanged(e) {
      let n = e.session_id,
        r = e.notification_type;
      if (r == 1) {
        let r = this.m_mapRunningTimelines.get(e.timeline_id);
        if (!r) {
          (this.FireEvent(`OnInvalidateRecording`, e.timeline_id, n),
            t(!1, `Received recording started message before timeline info`));
          return;
        }
        let i = {
          recording_id: n,
          start_offset_ms: e.start_offset,
          recording_zero_timeline_offset_ms: e.start_offset,
          duration_ms: e.duration_ms,
          recording_type: e.recording_type,
        };
        (r.m_metadata.recordings.push(i), (r.m_runningRecording = i));
      } else if (r == 2) {
        let t = this.GetRunningTimelineForRecording(e.timeline_id, n);
        if (!t) return;
        ((t.m_runningRecording.duration_ms = e.duration_ms),
          (t.m_runningRecording = null),
          this.FireEvent(`OnInvalidateRecording`, e.timeline_id, n));
      } else if (r == 4) {
        let t = this.GetTimelineMetadata(e.timeline_id);
        if (t) {
          let r = t.metadata.recordings.find((e) => e.recording_id === n);
          if (r) {
            ((r.start_offset_ms = e.start_offset),
              (r.duration_ms = e.duration_ms));
            let n = parseInt(e.start_offset) + parseInt(e.duration_ms);
            n > (parseInt(t.metadata.duration_ms) || 0) &&
              (t.metadata.duration_ms = n.toString());
          }
        }
        this.GetRunningTimelineForRecording(e.timeline_id, n) ||
          this.FireEvent(`OnInvalidateRecording`, e.timeline_id, n);
      } else if (r == 3) {
        let t = this.GetTimelineMetadata(e.timeline_id);
        if (t) {
          let e = t.metadata.recordings.filter((e) => e.recording_id !== n);
          t.metadata.recordings = e;
        }
      }
      this.FireEvent(`OnInvalidate`, e.timeline_id);
    }
    GetGlobalTimelineEndMS() {
      let e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (e) {
        let t = isNaN(parseInt(e.metadata.duration_ms))
          ? 0
          : parseInt(e.metadata.duration_ms);
        return U(e.nGlobalOffsetMS.valMS + t);
      }
      return U(0);
    }
    GetEndOfRecordingsMS() {
      let e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (e) {
        let t = e.metadata.recordings[e.metadata.recordings.length - 1];
        if (t) {
          let n = this.m_mapRunningTimelines.has(e.metadata.timeline_id),
            r = isNaN(parseInt(t.start_offset_ms))
              ? 0
              : parseInt(t.start_offset_ms),
            i = isNaN(parseInt(e.metadata.duration_ms))
              ? 0
              : parseInt(e.metadata.duration_ms),
            a = 0;
          return (
            n
              ? (a = Math.max(0, i - r))
              : isNaN(parseInt(t.duration_ms)) || (a = parseInt(t.duration_ms)),
            U(e.nGlobalOffsetMS.valMS + r + a)
          );
        }
      }
      return null;
    }
    GetTotalRecordingDuration() {
      let e = 0;
      return (
        this.m_rgTimelineMetadata.forEach((t) => {
          t.metadata.recordings.forEach((t) => {
            isNaN(parseInt(t.duration_ms)) || (e += parseInt(t.duration_ms));
          });
        }),
        e
      );
    }
    GetTimelineStartBeforeGlobalZeroMS(e) {
      return e == this.m_rgTimelineMetadata[0].metadata.timeline_id
        ? this.m_ulFirstTimelineOffsetMS
        : 0;
    }
    async GenerateNamePartsFromTimeline(e, t, n, r) {
      let i,
        a = !1,
        o,
        s,
        c,
        l;
      for (let u of this.m_rgTimelineMetadata) {
        let d = !1;
        if (!a) {
          if (u.metadata.timeline_id != e) continue;
          ((d = !0), (a = !0));
        }
        let f = u.metadata.timeline_id == n;
        await this.LoadTimelineData(u.metadata.timeline_id);
        let p = this.m_mapTimelineData.get(u.metadata.timeline_id);
        (d && (c = u.metadata.date_recorded + Math.floor(t / 1e3)),
          f && (l = u.metadata.date_recorded + Math.floor(r / 1e3)));
        for (let e of p.m_rgEntries) {
          let n = parseInt(e.time);
          if ((d && n < t) || (f && n > r) || (!Pi(e) && !Li(e))) continue;
          let a = Qi(e);
          (!i || (a && a.rank > i.rank)) && (i = a);
        }
        for (let e of p.m_rgStateDescriptions) {
          let t = parseInt(e.time);
          (f && t > r) || ((!o || s < t) && ((o = e), (s = t)));
        }
        if (f) break;
      }
      let u = i?.strTitle ?? o?.title,
        d = new qi(this.GetGameID());
      return {
        strTimelinePart: u,
        strAppNamePart: nn.GetAppInfo(d.GetInternalAppID())?.name,
        rtStart: c,
        rtEnd: l,
      };
    }
    async GenerateClipNameFromTimeline(e, t, n, r) {
      let { strTimelinePart: i, strAppNamePart: a } =
          await this.GenerateNamePartsFromTimeline(e, t, n, r),
        o = new Date(),
        s = [
          a,
          `${o.getFullYear()}-${(o.getMonth() + 1).toString().padStart(2, `0`)}-${o.getDate().toString().padStart(2, `0`)} ${o.toLocaleTimeString(Ve.GetPreferredLocales())}`,
          i,
        ]
          .filter((e) => !!e)
          .join(` - `);
      return (F(`Generated clip name "${s}"`), s);
    }
  };
(v([M], Zi.prototype, `m_bInitialized`, void 0),
  v([w], Zi.prototype, `UpdateRunningTimelines`, null));
function Qi(e) {
  switch (e.type) {
    case `event`:
      let t = e;
      return { rank: 5e4 + e.priority, strTitle: t.title };
    case `usermarker`:
      let n = e;
      return !n.title && !n.description
        ? null
        : { rank: 1e5 + e.priority, strTitle: e.title || e.description };
    case `state_description`:
      return { rank: 4e4, strTitle: e.title };
    case `achievement`:
      return { rank: 9e4, strTitle: e.title };
  }
  return null;
}
function $i(e) {
  if (!Array.isArray(e.entries)) {
    let t = [];
    (e.entries &&
      typeof e.entries == `object` &&
      ((t = Object.values(e.entries)),
      (t = t.filter((e) => e && typeof e == `object` && `time` in e)),
      t.sort((e, t) => parseInt(e.time) - parseInt(t.time))),
      (e.entries = t));
  }
}
var W = class {
  m_elVideo = null;
  m_player = null;
  m_listeners = new he();
  m_nDownloadFailureCount = 0;
  m_bInitailized = !1;
  m_bPaused = !1;
  m_bAtEnd = !1;
  m_strMediaTypeError = null;
  m_ePlayerError = 0;
  m_bUserInputNeeded = !1;
  m_bMuted = !1;
  m_bSeekReadyToPlay = !1;
  m_bVideoElementPlaying = !1;
  m_nPlaybackSpeed = 1;
  m_bIsWaiting = !0;
  m_bAutoPlay;
  m_bLoadedMetadata = !1;
  m_nPlaybackTime = 0;
  m_nVideoStartTime = 0;
  m_nVideoDuration = 0;
  m_nVolume = 1;
  m_eSeekType = Qt.Absolute;
  constructor(e) {
    (Ke(this), (this.m_bAutoPlay = !!e));
  }
  IsPaused() {
    return this.m_bPaused;
  }
  IsAtEnd() {
    return this.m_bAtEnd;
  }
  BSeekReadyToPlay() {
    return this.m_bSeekReadyToPlay;
  }
  GetMediaTypeError() {
    return this.m_strMediaTypeError;
  }
  GetPlaybackError() {
    return this.m_ePlayerError;
  }
  GetUserInputNeeded() {
    return this.m_bUserInputNeeded;
  }
  GetPlaybackTime() {
    return this.m_eSeekType === Qt.Absolute
      ? this.m_nPlaybackTime
      : this.m_nPlaybackTime - this.m_nVideoStartTime;
  }
  GetTimelineDuration() {
    return this.m_eSeekType === Qt.Absolute
      ? this.m_nVideoDuration
      : this.m_nVideoDuration - this.m_nVideoStartTime;
  }
  GetVolume() {
    return this.m_nVolume;
  }
  GetMuted() {
    return this.m_bMuted;
  }
  GetMPDURL() {
    return this.m_player?.GetMPDURL();
  }
  GetVideoElementCurrentTime() {
    return this.m_elVideo?.currentTime;
  }
  BVideoElementPlaying() {
    return this.m_bVideoElementPlaying;
  }
  BVideoElementWaiting() {
    return this.m_bIsWaiting;
  }
  GetVideoHeight() {
    return this.m_elVideo?.clientHeight || 0;
  }
  GetVideoWidth() {
    return this.m_elVideo?.clientWidth || 0;
  }
  GetLoadedMetadata() {
    return this.m_bLoadedMetadata;
  }
  Start(e, t, n, r = Qt.Absolute) {
    (this.Stop(),
      (this.m_bAtEnd = !1),
      (this.m_elVideo = e),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-userpausechange`,
        this.OnUserPauseChange,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `playing`,
        this.OnVideoPlaying,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `pause`,
        this.OnVideoPause,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `timeupdate`,
        this.OnVideoTimeUpdate,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `ended`,
        this.OnVideoEnd,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-ended`,
        this.OnVideoEnd,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-bufferupdate`,
        this.OnVideoTimeUpdate,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-downloadfailed`,
        this.OnDownloadFailed,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-playbackerror`,
        this.OnPlaybackError,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-userinputneeded`,
        this.OnUserInputNeeded,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `waiting`,
        this.OnVideoWaiting,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `volumechange`,
        this.OnVolumeChange,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `canplay`,
        this.OnCanPlay,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `seeking`,
        this.OnSeeking,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `loadedmetadata`,
        this.OnLoadedMetadata,
      ),
      (this.m_player = new $t(this.m_elVideo)),
      this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
      this.m_player.PlayMPD(t),
      (this.m_bMuted = na(`muted`)),
      (this.m_nVolume = na(`volume`)),
      this.m_player.SetMuted(this.m_bMuted),
      this.m_player.SetVolume(this.m_nVolume),
      (this.m_bSeekReadyToPlay = !1),
      (this.m_eSeekType = r));
    let i = `seeking_${t}_${n.toFixed(3)}`;
    (F(`CGameRecordingVideo:: perf mark ${i}`),
      performance.mark(i),
      this.m_player.Seek(n, this.m_eSeekType),
      (this.m_bPaused = this.m_player.IsPaused()),
      (this.m_bInitailized = !0));
  }
  Stop() {
    (this.m_listeners.Unregister(),
      this.m_player && this.m_player.Close(),
      (this.m_elVideo = null),
      (this.m_player = null),
      (this.m_bInitailized = !1),
      (this.m_bPaused = !1),
      (this.m_bAtEnd = !1),
      (this.m_bSeekReadyToPlay = !1),
      (this.m_bVideoElementPlaying = !1),
      (this.m_ePlayerError = 0),
      (this.m_bUserInputNeeded = !1),
      (this.m_nPlaybackTime = 0),
      (this.m_nVideoStartTime = 0),
      (this.m_nVideoDuration = 0),
      (this.m_bLoadedMetadata = !1),
      (this.m_bIsWaiting = !0));
  }
  async UpdateMPD() {
    await this.m_player?.UpdateMPD();
  }
  IsInitialized() {
    return this.m_bInitailized;
  }
  OnCanPlay() {
    ((this.m_bSeekReadyToPlay = !0), (this.m_bAtEnd = !1));
  }
  OnUserPauseChange() {
    this.m_bPaused = this.m_player.IsPaused();
  }
  OnVideoPlaying() {
    ((this.m_bVideoElementPlaying = !0),
      (this.m_bIsWaiting = !1),
      this.SetPlaybackSpeed(this.m_nPlaybackSpeed),
      L(`video playing`));
  }
  OnVideoPause() {
    ((this.m_bVideoElementPlaying = !1), L(`video paused`));
  }
  OnVideoTimeUpdate() {
    ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
      (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
      (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()));
  }
  OnVideoEnd() {
    ((this.m_bVideoElementPlaying = !1),
      (this.m_bAtEnd = !0),
      L(`video ended`));
  }
  OnSeeking() {
    (L(`video on seeking`),
      (this.m_bVideoElementPlaying = !1),
      (this.m_bIsWaiting = !0),
      (this.m_bAtEnd = !1));
  }
  OnLoadedMetadata() {
    this.m_bLoadedMetadata = !0;
  }
  async OnDownloadFailed(e) {
    (e.detail || Zt.PlaybackError) == Zt.UnsupportedMediaType
      ? (I(`media type error`), (this.m_ePlayerError = 3))
      : (I(`video download failed`, e.detail),
        this.m_nDownloadFailureCount < 2
          ? (await this.m_player?.UpdateMPD(), this.m_nDownloadFailureCount++)
          : (this.m_ePlayerError = 1));
  }
  OnPlaybackError() {
    ((this.m_bVideoElementPlaying = !1),
      I(`video playback error`),
      (this.m_ePlayerError = 2));
  }
  OnUserInputNeeded() {
    ((this.m_bUserInputNeeded = !0),
      !this.m_bMuted &&
        this.m_elVideo.autoplay &&
        (mn(`Failed to autoplay video. Muting and trying again.`),
        this.SetMute(!0),
        this.Play()));
  }
  OnVolumeChange() {
    L(`volume change`);
  }
  OnVideoWaiting() {
    ((this.m_bIsWaiting = !0),
      (this.m_bVideoElementPlaying = !1),
      this.GetTimelineDuration() - this.GetPlaybackTime() < 1 &&
        (this.m_bAtEnd = !0));
  }
  UserInputReceived() {
    this.IsInitialized() &&
      ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
  }
  SetVolume(e) {
    ((this.m_nVolume = e),
      ra(`volume`, e),
      e > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
      this.IsInitialized() && this.m_player.SetVolume(e));
  }
  SetMute(e, t) {
    (this.IsInitialized() && this.m_player.SetMuted(e),
      (this.m_bMuted = e),
      t && ra(`muted`, e));
  }
  TogglePlayPause() {
    this.IsInitialized() &&
      (this.m_player.IsPaused() ? this.Play() : this.Pause());
  }
  Play() {
    this.IsInitialized() && this.m_player.Play();
  }
  Pause() {
    this.IsInitialized() && (this.m_player.Pause(), (this.m_bIsWaiting = !1));
  }
  SetPlaybackSpeed(e) {
    ((this.m_nPlaybackSpeed = e),
      this.IsInitialized() && (this.m_elVideo.playbackRate = e));
  }
  GetPlaybackSpeed() {
    return this.m_nPlaybackSpeed;
  }
  Seek(e) {
    if (!this.IsInitialized()) return;
    let t = `seeking_${this.m_player.GetMPDURL()}_${e.toFixed(3)}`;
    ((this.m_bAtEnd = !1),
      (this.m_bSeekReadyToPlay = !1),
      performance.mark(t),
      F(`CGameRecordingVideo:: perf mark ${t}`),
      F(`CGameRecordingVideo::Seek to ${e}`),
      (this.m_nPlaybackTime = e),
      this.m_player.Seek(e, this.m_eSeekType));
  }
};
(v([M], W.prototype, `m_bInitailized`, void 0),
  v([M], W.prototype, `m_bPaused`, void 0),
  v([M], W.prototype, `m_bAtEnd`, void 0),
  v([M], W.prototype, `m_strMediaTypeError`, void 0),
  v([M], W.prototype, `m_ePlayerError`, void 0),
  v([M], W.prototype, `m_bUserInputNeeded`, void 0),
  v([M], W.prototype, `m_bMuted`, void 0),
  v([M], W.prototype, `m_bSeekReadyToPlay`, void 0),
  v([M], W.prototype, `m_bVideoElementPlaying`, void 0),
  v([M], W.prototype, `m_nPlaybackSpeed`, void 0),
  v([M], W.prototype, `m_bIsWaiting`, void 0),
  v([M], W.prototype, `m_bLoadedMetadata`, void 0),
  v([M], W.prototype, `m_nPlaybackTime`, void 0),
  v([M], W.prototype, `m_nVideoStartTime`, void 0),
  v([M], W.prototype, `m_nVideoDuration`, void 0),
  v([M], W.prototype, `m_nVolume`, void 0),
  v([M], W.prototype, `m_eSeekType`, void 0),
  v([N], W.prototype, `Start`, null),
  v([N], W.prototype, `Stop`, null),
  v([w], W.prototype, `OnCanPlay`, null),
  v([w], W.prototype, `OnUserPauseChange`, null),
  v([w], W.prototype, `OnVideoPlaying`, null),
  v([w], W.prototype, `OnVideoPause`, null),
  v([w], W.prototype, `OnVideoTimeUpdate`, null),
  v([w], W.prototype, `OnVideoEnd`, null),
  v([w], W.prototype, `OnSeeking`, null),
  v([w], W.prototype, `OnLoadedMetadata`, null),
  v([w], W.prototype, `OnDownloadFailed`, null),
  v([w], W.prototype, `OnPlaybackError`, null),
  v([w], W.prototype, `OnUserInputNeeded`, null),
  v([w], W.prototype, `OnVolumeChange`, null),
  v([w], W.prototype, `OnVideoWaiting`, null),
  v([w], W.prototype, `UserInputReceived`, null));
var ea;
function ta() {
  if (!ea) {
    let e = window.localStorage.getItem(`gameRecordingPlayer`) || `{}`,
      t;
    try {
      t = JSON.parse(e);
    } catch {
      t = {};
    }
    ea = { muted: t.muted || !1, volume: t.volume || 1 };
  }
  return ea;
}
function na(e) {
  return ta()[e];
}
function ra(e, t) {
  let n = ta();
  n[e] = t;
  let r = JSON.stringify(n);
  window.localStorage.setItem(`gameRecordingPlayer`, r);
}
var ia = (function (e) {
  return (
    (e.NotRunning = `NotRunning`),
    (e.NotRecording = `NotRecording`),
    (e.ManualRecording = `ManualRecording`),
    (e.BackgroundRecording = `BackgroundRecording`),
    e
  );
})({});
function aa(e) {
  let { app: t } = Nn(e);
  if (!t) return `NotRecording`;
  switch (t.recording_type) {
    default:
    case 0:
    case 1:
      return `NotRecording`;
    case 2:
      return `ManualRecording`;
    case 3:
      return `BackgroundRecording`;
  }
}
var G = c(),
  oa = (function (e) {
    return (
      (e.Overlay = `Overlay`),
      (e.Clips = `Clips`),
      (e.Background = `Background`),
      (e.CommunityClip = `Community`),
      (e.ChatClip = `Chat`),
      (e.Partner = `Partner`),
      e
    );
  })({}),
  sa = 3 * Yi,
  ca = 5 * Yi,
  la = Yi + 2e3,
  ua = 1e3,
  K = class {
    m_gameRecordingVideo = null;
    m_timelineLoader = null;
    m_fnUnregisterLoader = null;
    m_rgListeners = [];
    m_videoRef;
    m_bHidePlayer = !1;
    m_fnGetManifest;
    m_strRecordingID = null;
    m_nPendingSeekSec = -1;
    m_playbackDefinition = null;
    m_pendingStop = null;
    m_durationMS = U(null);
    m_lastRecordingGlobalMS = U(null);
    m_bWasLiveEdge = !1;
    m_nGlobalTimelinePlaybackMS = null;
    m_nGlobalTimelinePlaybackSec = null;
    m_fnUnregisterAutorun = [];
    m_eGameRecordingMode;
    m_rgSeekPerf = [];
    m_eRecordingState = ia.NotRecording;
    m_eRecordingSetting = `Never`;
    m_bGamepadMode = !1;
    m_bControlsVisible = !0;
    m_fnRenderGlyph = void 0;
    m_previousHighlightEntry = null;
    m_nextHighlightEntry = null;
    m_displayHighlightEntry = null;
    m_nRelativeTimeForDisplay = void 0;
    m_rgClipOffsets = [];
    m_phasePreview = void 0;
    constructor(e, t, n, r, i, a, o, s) {
      (Ke(this),
        (this.m_fnGetManifest = t),
        (this.m_gameRecordingVideo = new W(!0)),
        (this.m_eGameRecordingMode = n),
        (this.m_bGamepadMode = i),
        (this.m_playbackDefinition = o),
        r != null && (this.m_bControlsVisible = r),
        n === `Overlay` && (this.m_bHidePlayer = !0),
        s && this.SetClipOffsets(s),
        (this.m_fnRenderGlyph = a),
        this.m_fnUnregisterAutorun.push(
          Ge(
            () => ({
              bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
              bIsPaused: this.m_gameRecordingVideo.IsPaused(),
            }),
            (e) => {
              e.bIsAtEnd && !e.bIsPaused && this.PlayNextTimelineRecording();
            },
            { fireImmediately: !0 },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          Ge(
            () => this.m_gameRecordingVideo.GetPlaybackTime(),
            (e) => {
              if (
                this.m_pendingStop &&
                this.m_pendingStop.m_strRecordingID == this.m_strRecordingID &&
                this.m_pendingStop.m_nOffsetMS <= e * 1e3
              ) {
                if (this.m_playbackDefinition?.m_nLoopDurationMS) {
                  this.StartPlaybackForRange();
                  return;
                }
                (this.m_gameRecordingVideo.Pause(),
                  (this.m_pendingStop = null));
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          Ge(
            () => ({
              playback: this.m_gameRecordingVideo.GetPlaybackTime(),
              bVideoPlaying: this.m_gameRecordingVideo.BVideoElementPlaying(),
            }),
            (e) => {
              if (e.bVideoPlaying) {
                let t =
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    this.m_strRecordingID,
                    e.playback * 1e3,
                    0,
                  );
                if (t)
                  (this.UpdateGlobalPlayTime(t.nGlobalOffsetMS),
                    t.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
                      this.m_eGameRecordingMode === `Overlay` &&
                      this.m_gameRecordingVideo.GetPlaybackSpeed() > 1 &&
                      (console.log(
                        ` hitting live edge, slow down the playback `,
                      ),
                      this.m_gameRecordingVideo.SetPlaybackSpeed(1)));
                else {
                  let e = this.GetLiveEdgeMS();
                  isNaN(e.valMS) ||
                    (this.SetPlaytimeFromGlobalMS(e), this.FocusGlobalMS(e));
                }
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          Ge(
            () => ({
              globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
              bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
              bHidePlayer: this.m_bHidePlayer,
            }),
            (e) => {
              this.m_timelineLoader?.BInitialized() &&
                (e.bHidePlayer
                  ? this.SetEntriesForLiveEdge()
                  : (!this.m_previousHighlightEntry ||
                      !this.m_nextHighlightEntry ||
                      (this.m_nextHighlightEntry?.globalMS &&
                        e.globalPlaybackMS >=
                          this.m_nextHighlightEntry.globalMS.valMS) ||
                      (this.m_previousHighlightEntry?.globalMS &&
                        e.globalPlaybackMS <=
                          this.m_previousHighlightEntry.globalMS.valMS) ||
                      (e.bVideoPaused &&
                        this.m_previousHighlightEntry?.globalMS &&
                        e.globalPlaybackMS >=
                          this.m_previousHighlightEntry.globalMS.valMS +
                            1e3)) &&
                    (this.CalculatePreviousHighlightEntry(
                      e.globalPlaybackMS,
                      e.bVideoPaused,
                    ),
                    this.CalculateNextHighlightEntry(
                      e.globalPlaybackMS,
                      e.bVideoPaused,
                    )));
            },
            { fireImmediately: !0 },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          Ge(
            () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
            (e) => {
              if (e) {
                let e = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                try {
                  let t = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                    n = performance.measure(t, e);
                  (F(
                    `CGameRecordingVideo:: perf measure ${e} duration ${n.duration}`,
                  ),
                    n && this.m_rgSeekPerf.push(n.duration));
                } catch (t) {
                  F(`CGameRecordingVideo:: cant measure ${e}, error: ${t}`);
                }
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.SetLoader(e));
    }
    AddEventListener(e) {
      return (this.m_rgListeners.push(e), () => se(this.m_rgListeners, e));
    }
    FireEvent(e, ...t) {
      for (let n of this.m_rgListeners) {
        let r = n[e];
        r instanceof Function && r.apply(n, t);
      }
    }
    dispose() {
      (this.m_fnUnregisterAutorun.forEach((e) => e()),
        (this.m_fnUnregisterLoader &&= (this.m_fnUnregisterLoader(), null)));
    }
    SetVideoElement(e) {
      if (e) {
        if (this.m_videoRef === e) return;
        if (((this.m_videoRef = e), this.m_strRecordingID)) {
          let e = this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
          ((this.m_nPendingSeekSec = -1),
            this.ChangePlaybackRecording(this.m_strRecordingID, e));
        } else this.TryPlayInitialTimelineVideo();
      } else (this.m_gameRecordingVideo.Stop(), (this.m_videoRef = null));
    }
    OnInvalidateRecording(e, t) {
      let n = this.m_fnGetManifest(t);
      this.m_gameRecordingVideo.GetMPDURL() == n &&
        (F(`Recording invalidated for ${t}. Reloading MPD`),
        this.m_gameRecordingVideo.UpdateMPD());
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        (this.m_bWasLiveEdge = !0),
        this.TryPlayInitialTimelineVideo());
      let e = Pn(this.m_timelineLoader.GetGameID());
      this.SetClipOffsets(e);
    }
    OnInvalidate(e) {
      if (
        ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(e))
      )
        this.SetEntriesForLiveEdge();
      else {
        if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
          let t = this.m_timelineLoader.GetTimelineMetadataIndex(e),
            n = this.m_timelineLoader.GetTimelineMetadataIndex(
              this.m_previousHighlightEntry.timelineID,
            ),
            r = this.m_timelineLoader.GetTimelineMetadataIndex(
              this.m_nextHighlightEntry.timelineID,
            );
          if (t < n || t > r) return;
        }
        (this.CalculatePreviousHighlightEntry(
          this.m_nGlobalTimelinePlaybackMS,
          this.GetGameRecordingVideo().IsPaused(),
        ),
          this.CalculateNextHighlightEntry(
            this.m_nGlobalTimelinePlaybackMS,
            this.GetGameRecordingVideo().IsPaused(),
          ));
      }
    }
    OnTimelineLoaded(e) {
      (this.m_previousHighlightEntry &&
        this.m_previousHighlightEntry.timelineID === e &&
        this.CalculatePreviousHighlightEntry(
          this.m_nGlobalTimelinePlaybackMS,
          this.GetGameRecordingVideo().IsPaused(),
        ),
        this.m_nextHighlightEntry &&
          this.m_nextHighlightEntry.timelineID === e &&
          this.CalculateNextHighlightEntry(
            this.m_nGlobalTimelinePlaybackMS,
            this.GetGameRecordingVideo().IsPaused(),
          ));
    }
    SetEntriesForLiveEdge() {
      let e = this.GetLiveEdgeMS();
      (this.CalculatePreviousHighlightEntry(e.valMS, !0),
        (this.m_nextHighlightEntry = null));
    }
    CalculatePreviousHighlightEntry(e, t) {
      let n = t ? 1 : ua * this.m_gameRecordingVideo.GetPlaybackSpeed(),
        r = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
          e - n,
        );
      this.m_previousHighlightEntry =
        r.timelineState === `loaded` && !r.entry
          ? this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(e)
          : r;
    }
    CalculateNextHighlightEntry(e, t) {
      let n = this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(e);
      if (n.timelineState === `loaded` && !n.entry) {
        let n = t ? 1 : ua * this.m_gameRecordingVideo.GetPlaybackSpeed();
        this.m_nextHighlightEntry =
          this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(e - n);
      } else this.m_nextHighlightEntry = n;
    }
    GetPreviousHighlightEntry() {
      return this.m_previousHighlightEntry;
    }
    GetNextHighlightEntry() {
      return this.m_nextHighlightEntry;
    }
    GetDisplayHighlightEntry() {
      return this.m_displayHighlightEntry;
    }
    SetDisplayHighlightEntry(e, t) {
      this.m_displayHighlightEntry = { entry: e, duration: t };
    }
    GetPhasePreview() {
      return this.m_phasePreview;
    }
    SetPhasePreview(e) {
      this.m_phasePreview = e;
    }
    GetRelativeTimeForDisplay() {
      return this.m_nRelativeTimeForDisplay;
    }
    ClearRelativeTimeDisplay() {
      this.m_nRelativeTimeForDisplay = void 0;
    }
    GetClipOffsets() {
      return this.m_rgClipOffsets;
    }
    SetClipOffsets(e) {
      if (!this.m_timelineLoader?.BInitialized()) return;
      let t = [];
      (e &&
        e.length &&
        e.forEach((e) => {
          let n = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
            e.start_timeline_id,
            0,
          );
          if (!n) return;
          let r = n.nGlobalOffsetMS + parseInt(e.start_offset_ms);
          t.push({
            strClipID: e.clip_id,
            nGlobalOffsetMS: r,
            nDurationMS: parseInt(e.duration_ms),
          });
        }),
        (this.m_rgClipOffsets = t));
    }
    GetTotalMS() {
      return this.m_durationMS;
    }
    GetIsActiveTimeline(e) {
      return this.m_timelineLoader.IsActiveTimeline(e);
    }
    BIsVideoElementPaused() {
      return this.m_gameRecordingVideo.IsPaused();
    }
    BInitialized() {
      return this.m_timelineLoader.BInitialized();
    }
    GetHidePlayer() {
      return this.m_bHidePlayer;
    }
    SetHidePlayer(e) {
      (e && (this.m_strRecordingID = null), (this.m_bHidePlayer = e));
    }
    BPlayerInitialized() {
      return this.m_gameRecordingVideo.IsInitialized();
    }
    GetGameRecordingVideo() {
      return this.m_gameRecordingVideo;
    }
    GetGameID() {
      return this.m_timelineLoader.GetGameID();
    }
    GetClipID() {
      return this.m_timelineLoader.GetClipID();
    }
    GetRecordingState() {
      return this.m_eRecordingState;
    }
    SetRecordingState(e) {
      this.m_eRecordingState = e;
    }
    GetLoader() {
      return this.m_timelineLoader;
    }
    SetLoader(e) {
      this.m_timelineLoader != e &&
        (this.m_fnUnregisterLoader && this.m_fnUnregisterLoader(),
        (this.m_timelineLoader = e),
        (this.m_fnUnregisterLoader =
          this.m_timelineLoader.AddEventListener(this)),
        e.BInitialized() && this.OnLoaderInitialized());
    }
    SetGetManifest(e) {
      this.m_fnGetManifest = e;
    }
    GetRecordingID() {
      return this.m_strRecordingID;
    }
    GetRecordingSetting() {
      return this.m_eRecordingSetting;
    }
    SetRecordingSetting(e) {
      this.m_eRecordingSetting = e;
    }
    GetRecordingMode() {
      return this.m_eGameRecordingMode;
    }
    ShouldModeShowClipControls() {
      switch (this.m_eGameRecordingMode) {
        case `Overlay`:
        case `Clips`:
        case `Background`:
          return !0;
        default:
          return !1;
      }
    }
    CanModeAddMarker() {
      switch (this.m_eGameRecordingMode) {
        case `Overlay`:
        case `Clips`:
        case `Background`:
          return !0;
        default:
          return !1;
      }
    }
    GetPlaybackStats() {
      if (!this.m_rgSeekPerf.length) return null;
      let e = this.m_rgSeekPerf.length,
        t = this.m_rgSeekPerf.reduce((e, t) => e + t) / e;
      return {
        nMean: t,
        nStdDev: Math.sqrt(
          this.m_rgSeekPerf.map((e) => (e - t) ** 2).reduce((e, t) => e + t) /
            e,
        ),
        nMax: Math.max(...this.m_rgSeekPerf),
        nMin: Math.min(...this.m_rgSeekPerf),
        nLength: e,
        nLastVal: this.m_rgSeekPerf[e - 1],
      };
    }
    async StartPlaybackForRange() {
      let e =
        this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
          this.m_playbackDefinition.m_strTimelineID,
          0,
        )?.nGlobalOffsetMS || 0;
      e += this.m_playbackDefinition.m_nTimelineStartMS;
      let t;
      if (
        ((t = this.m_playbackDefinition.m_strEntryID
          ? await this.m_timelineLoader.FindRecordingAndOffsetForEntry(
              this.m_playbackDefinition.m_strEntryID,
            )
          : this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              e,
            )),
        t)
      ) {
        if (this.m_playbackDefinition.m_nLoopDurationMS) {
          let t = e + this.m_playbackDefinition.m_nLoopDurationMS,
            n =
              this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                t,
              );
          this.m_pendingStop = {
            m_strRecordingID: n.strRecordingID,
            m_nOffsetMS: n.nRecordingOffsetMS,
          };
        }
        (this.UpdateGlobalPlayTime(e),
          this.ChangePlaybackRecording(
            t.strRecordingID,
            t.nRecordingOffsetMS / 1e3,
          ));
      }
    }
    TryPlayInitialTimelineVideo() {
      if (this.m_timelineLoader.BInitialized() && !this.m_bHidePlayer) {
        if (this.m_playbackDefinition) this.StartPlaybackForRange();
        else if (this.m_eGameRecordingMode === `Overlay`) {
          let e = this.GetLiveEdgeMS(),
            t = this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession(),
            n = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              t,
              0,
              0,
            );
          n && e.valMS < n.nGlobalOffsetMS
            ? (this.UpdateGlobalPlayTime(n.nGlobalOffsetMS),
              this.ChangePlaybackRecording(t, 0))
            : isNaN(e.valMS) || this.SetPlaytimeFromGlobalMS(e, !1, !0);
        } else if (this.m_eGameRecordingMode === `Background`) {
          let e =
            this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
          this.SetPlaytimeFromRecordingOffset(e, 0);
        } else {
          let e = this.m_timelineLoader.GetFirstRecording();
          this.SetPlaytimeFromRecordingOffset(e, 0);
        }
      }
    }
    GetTotalSeconds() {
      return Math.floor(
        this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1e3,
      );
    }
    GetCurrentPlaybackGlobalMS(e = 0) {
      let t = Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3) + e;
      return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
        this.m_strRecordingID,
        t,
        0,
      );
    }
    GetIsLiveEdge() {
      let e = this.GetGlobalMSPlaytime().valMS || 0;
      return this.m_eGameRecordingMode === `Overlay`
        ? this.m_lastRecordingGlobalMS
          ? this.m_bWasLiveEdge
          : !1
        : this.GetTotalMS().valMS - e < 1;
    }
    GetLiveEdgeBufferWindowStartMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? U(Math.max(0, this.m_lastRecordingGlobalMS.valMS - sa - 1e3))
        : this.GetTotalMS();
    }
    GetLiveEdgeMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? U(Math.max(0, this.m_lastRecordingGlobalMS.valMS - la))
        : U(Math.max(0, this.GetTotalMS().valMS - 1));
    }
    GetTimelineAndOffsetRelativeToCurrentPlayback(e = 0) {
      return (
        this.GetCurrentPlaybackGlobalMS(e) ||
        (I(
          `failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3)} MS`,
        ),
        null)
      );
    }
    SeekDeltaMS(e) {
      let t = this.GetGlobalMSPlaytime();
      if (!this.m_strRecordingID) {
        let n =
          e > 0
            ? this.GetClosestNextRecordingForGlobalMS(t)
            : this.GetClosestPreviousRecordingForGlobalMS(t);
        if (n) {
          let t = e > 0 ? e : Math.max(parseInt(n.duration_ms) + e, 0);
          this.SetPlaytimeFromRecordingOffset(n.recording_id, t, e < 0);
          return;
        }
      }
      let n =
          this.m_eGameRecordingMode === `Overlay`
            ? this.GetLiveEdgeMS().valMS
            : this.GetTotalMS().valMS,
        r = l(t.valMS + e, 0, n - 1e3);
      this.SetPlaytimeFromGlobalMS(U(r));
    }
    ConvertGlobaOffsetToRecordingAndRelativeOffset(e) {
      return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
        e,
      );
    }
    PlayNextTimelineRecording(e) {
      if (this.m_playbackDefinition?.m_nLoopDurationMS) {
        this.StartPlaybackForRange();
        return;
      }
      let t;
      ((t = this.m_strRecordingID
        ? this.m_timelineLoader.GetNextRecording(this.m_strRecordingID)
        : this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
            U(this.m_nGlobalTimelinePlaybackMS),
          )?.recording_id),
        t
          ? this.SetPlaytimeFromRecordingOffset(t, 0)
          : (this.m_gameRecordingVideo.Pause(),
            e && this.TryPlayInitialTimelineVideo()));
    }
    GetClipsAtGlobalMS(e) {
      return (
        this.m_rgClipOffsets.filter(
          (t) =>
            t.nGlobalOffsetMS <= e.valMS &&
            t.nGlobalOffsetMS + t.nDurationMS >= e.valMS,
        ) || []
      );
    }
    GetClosestPreviousRecordingForGlobalMS(e) {
      return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(
        e,
      );
    }
    GetClosestNextRecordingForGlobalMS(e) {
      return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(e);
    }
    SetPlaytimeFromRecordingOffset(e, t, n, r) {
      let i = t;
      n &&
        (i = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(e, t));
      let a = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
        e,
        i,
        0,
      );
      a &&
        (this.UpdateGlobalPlayTime(a.nGlobalOffsetMS),
        this.ChangePlaybackRecording(e, i / 1e3, r));
    }
    GetManifestFromRecordingID(e) {
      return this.m_fnGetManifest(e);
    }
    ChangePlaybackRecording(e, t = 0, n) {
      this.m_bHidePlayer = !1;
      let r = this.m_gameRecordingVideo.IsPaused();
      if (
        this.m_strRecordingID === e &&
        this.m_gameRecordingVideo.IsInitialized()
      ) {
        this.m_gameRecordingVideo.Seek(t);
        return;
      }
      if ((this.m_gameRecordingVideo.Stop(), (this.m_strRecordingID = e), !e))
        return;
      if (!this.m_videoRef) {
        this.m_nPendingSeekSec = t;
        return;
      }
      let i = this.GetManifestFromRecordingID(e),
        a = this.m_timelineLoader.BRecordingHasZeroOffset(e)
          ? Qt.Absolute
          : Qt.FromAvailableStart;
      (this.m_gameRecordingVideo.Start(this.m_videoRef, i, t, a),
        (n || r) && this.m_gameRecordingVideo.Pause());
    }
    StopPlayback() {
      this.m_gameRecordingVideo.Stop();
    }
    TogglePlayPause() {
      this.m_gameRecordingVideo.IsPaused() ||
      !this.m_gameRecordingVideo.IsInitialized()
        ? (this.m_nGlobalTimelinePlaybackMS >
            (this.m_lastRecordingGlobalMS?.valMS ?? 0) &&
            this.TryPlayInitialTimelineVideo(),
          this.m_gameRecordingVideo.GetTimelineDuration() -
            this.m_gameRecordingVideo.GetPlaybackTime() <
          0.05
            ? this.PlayNextTimelineRecording(!0)
            : this.m_gameRecordingVideo.Play())
        : this.m_gameRecordingVideo.Pause();
    }
    GetGlobalMSPlaytime() {
      return U(this.m_nGlobalTimelinePlaybackMS);
    }
    GetGlobalPlaytimeSec() {
      return this.m_nGlobalTimelinePlaybackSec;
    }
    UpdateGlobalPlayTime(e) {
      if (
        ((this.m_nGlobalTimelinePlaybackMS = e),
        (this.m_nGlobalTimelinePlaybackSec = Math.floor(e / 1e3)),
        this.m_lastRecordingGlobalMS &&
          this.m_lastRecordingGlobalMS.valMS !== null)
      ) {
        let e = this.m_bWasLiveEdge ? ca : sa;
        this.m_bWasLiveEdge =
          this.m_lastRecordingGlobalMS.valMS -
            (this.GetGlobalMSPlaytime()?.valMS || 0) <
          e;
      }
    }
    HandleSeekToPreviousRecording(e, t, n) {
      let r = this.GetClosestPreviousRecordingForGlobalMS(e);
      if (r) {
        let e = parseInt(r.duration_ms),
          i = Math.max(e - 5e3, e * 0.75);
        (n || (this.m_nRelativeTimeForDisplay = i / 1e3),
          this.UpdateGlobalPlayTime(
            this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              r.recording_id,
              i,
              0,
            ).nGlobalOffsetMS,
          ),
          this.ChangePlaybackRecording(r?.recording_id, i / 1e3, t));
      } else
        (n || (this.m_nRelativeTimeForDisplay = 0),
          this.UpdateGlobalPlayTime(0),
          this.ChangePlaybackRecording(this.m_strRecordingID, 0, t));
    }
    HandleSeekToNextRecording(e, t, n) {
      let r = this.GetClosestNextRecordingForGlobalMS(e);
      r
        ? (n || (this.m_nRelativeTimeForDisplay = 0),
          this.UpdateGlobalPlayTime(
            this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              r.recording_id,
              0,
              0,
            ).nGlobalOffsetMS,
          ),
          this.ChangePlaybackRecording(r?.recording_id, 0, t))
        : (n || (this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS),
          this.ChangePlaybackRecording(
            this.m_strRecordingID,
            this.GetTotalMS().valMS / 1e3,
            t,
          ));
    }
    SetPlaytimeFromGlobalMS(e, t, n, r) {
      this.m_pendingStop = null;
      let i =
        this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
          e.valMS,
        );
      i
        ? (n || (this.m_nRelativeTimeForDisplay = e.valMS),
          this.UpdateGlobalPlayTime(e.valMS),
          this.ChangePlaybackRecording(
            i?.strRecordingID,
            i?.nRecordingOffsetMS / 1e3,
            t,
          ))
        : r
          ? this.ChangePlaybackRecording(
              i?.strRecordingID,
              i?.nRecordingOffsetMS / 1e3,
              t,
            )
          : e.valMS > this.m_nGlobalTimelinePlaybackMS
            ? this.HandleSeekToNextRecording(e, t, n)
            : this.HandleSeekToPreviousRecording(e, t, n);
    }
    ConvertGlobalOffsetToTimelineRelativeOffset(e) {
      return this.m_timelineLoader.GetTimelineOffsetFromGlobal(e, 0);
    }
    MakeRelativeToTimelineEndIfActive(e, t) {
      return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(e, t);
    }
    GetTimelineDuration(e) {
      if (!this.m_timelineLoader.BInitialized()) return null;
      let t = this.m_timelineLoader.GetTimelineMetadata(e);
      return t ? parseInt(t.metadata.duration_ms) : null;
    }
    GetTimelineFirstRecordingOffset(e) {
      if (!this.m_timelineLoader.BInitialized()) return null;
      let t = this.m_timelineLoader.GetTimelineMetadata(e);
      if (!t) return null;
      let n = t.metadata.recordings;
      return n.length ? parseInt(n[0].start_offset_ms) : null;
    }
    async AddUserMarkerAtGlobalMS(e, t, n) {
      let r = this.m_timelineLoader.GetTimelineOffsetFromGlobal(e.valMS, 0);
      if (r) {
        let e = this.m_timelineLoader.GetGameID(),
          { fnCreateUserTimelineMarkers: i } = zn(),
          a = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
            r.strTimelineID,
          );
        H.ReportTrackedAction(t);
        let o = `steam_marker`,
          s = await i(e, this.GetClipID(), {
            timeline_id: r.strTimelineID,
            entry_id: ``,
            time: `` + Math.floor(r.nTimelineOffsetMS.valMS + a),
            type: 5,
            marker_icon: o,
            marker_priority: 0,
          });
        s.eResult == 1 &&
          (this.m_timelineLoader.AddUserMarker(
            r.strTimelineID,
            Math.floor(r.nTimelineOffsetMS.valMS),
            o,
            s.entry_id,
          ),
          n && n(s.entry_id, r.strTimelineID));
      }
    }
    async RemoveUserMarker(e, t) {
      let { fnRemoveUserTimelineMarker: n } = zn();
      return (await n(
        this.m_timelineLoader.GetGameID(),
        this.GetClipID(),
        e,
        t,
      )) == 1
        ? (this.m_timelineLoader.RemoveUserMarker(e, t), !0)
        : (L(`Failed to delete user marker for timeline ${e} entry ${t}`), !1);
    }
    async UpdateUserMarker(e, t, n, r) {
      let { fnUpdateUserTimelineMarkers: i } = zn(),
        a = this.m_timelineLoader.GetGameID(),
        o = {
          timeline_id: e,
          entry_id: t.id,
          time: t.time,
          type: 5,
          marker_icon: t.icon,
          marker_priority: t.priority,
          range_title: n,
          marker_description: r,
        };
      if ((await i(a, this.GetClipID(), o)) == 1) {
        let i = {
          strIcon: t.icon,
          name: n,
          description: r,
          nTimelineOffsetMS: parseInt(t.time),
        };
        return (this.m_timelineLoader.UpdateUserMarker(e, t.id, i), !0);
      }
      return !1;
    }
    FocusGlobalMS(e) {
      this.FireEvent(`OnFocusGlobalMS`, e);
    }
    SetPlaybackStop(e) {
      let t = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(e.valMS);
      t &&
        (this.m_pendingStop = {
          m_strRecordingID: t.strRecordingID,
          m_nOffsetMS: t.nRecordingOffsetMS,
        });
    }
    ClearPlaybackStop() {
      this.m_pendingStop = null;
    }
    GenerateClipNameFromTimeline(e, t, n, r) {
      return this.m_timelineLoader.GenerateClipNameFromTimeline(e, t, n, r);
    }
    GetRenderGlyph() {
      if (this.m_bGamepadMode) return this.m_fnRenderGlyph;
    }
    SetRenderGlyph(e) {
      this.m_fnRenderGlyph = e;
    }
    GetGamepadMode() {
      return this.m_bGamepadMode;
    }
    SetGamepadMode(e) {
      this.m_bGamepadMode = e;
    }
    GetControlsVisible() {
      return this.m_bControlsVisible;
    }
    SetControlsVisible(e) {
      e != null && (this.m_bControlsVisible = e);
    }
  };
(v([M], K.prototype, `m_bHidePlayer`, void 0),
  v([M], K.prototype, `m_strRecordingID`, void 0),
  v([M], K.prototype, `m_durationMS`, void 0),
  v([M], K.prototype, `m_lastRecordingGlobalMS`, void 0),
  v([M], K.prototype, `m_nGlobalTimelinePlaybackMS`, void 0),
  v([M], K.prototype, `m_nGlobalTimelinePlaybackSec`, void 0),
  v([M], K.prototype, `m_rgSeekPerf`, void 0),
  v([M], K.prototype, `m_eRecordingState`, void 0),
  v([M], K.prototype, `m_eRecordingSetting`, void 0),
  v([M], K.prototype, `m_bGamepadMode`, void 0),
  v([M], K.prototype, `m_bControlsVisible`, void 0),
  v([M], K.prototype, `m_fnRenderGlyph`, void 0),
  v([M], K.prototype, `m_previousHighlightEntry`, void 0),
  v([M], K.prototype, `m_nextHighlightEntry`, void 0),
  v([M], K.prototype, `m_displayHighlightEntry`, void 0),
  v([M], K.prototype, `m_nRelativeTimeForDisplay`, void 0),
  v([M.ref], K.prototype, `m_rgClipOffsets`, void 0),
  v([M.ref], K.prototype, `m_phasePreview`, void 0),
  v([w], K.prototype, `SetVideoElement`, null),
  v([w], K.prototype, `OnInvalidateRecording`, null),
  v([N], K.prototype, `OnLoaderInitialized`, null),
  v([w], K.prototype, `OnInvalidate`, null),
  v([w], K.prototype, `OnTimelineLoaded`, null),
  v([w], K.prototype, `GetLiveEdgeMS`, null),
  v([w], K.prototype, `StopPlayback`, null),
  v([w], K.prototype, `TogglePlayPause`, null),
  v([N], K.prototype, `UpdateGlobalPlayTime`, null));
var da = z.createContext({ timelinePlaybackCoordinator: null });
function fa(e) {
  let {
      children: t,
      mode: n,
      fnGetManifest: r,
      loader: i,
      recordingState: a,
      controlsVisible: o,
      gamepadMode: s,
      renderGlyph: c,
      recordingSetting: l,
      playbackDefinition: u,
      clipSummaries: d,
    } = e,
    [f] = z.useState(() => new K(i, r, n, o, s, c, u, d));
  ((0, z.useEffect)(() => {
    f.SetLoader(i);
  }, [f, i]),
    (0, z.useEffect)(() => {
      f.SetRecordingState(a);
    }, [f, a]),
    (0, z.useEffect)(() => {
      f.SetRecordingSetting(l);
    }, [f, l]),
    (0, z.useEffect)(() => {
      f.SetGetManifest(r);
    }, [f, r]),
    (0, z.useEffect)(() => {
      f.SetControlsVisible(o);
    }, [f, o]),
    (0, z.useEffect)(() => {
      f.SetGamepadMode(s);
    }, [f, s]),
    (0, z.useEffect)(() => {
      f.SetRenderGlyph(c);
    }, [f, c]),
    (0, z.useEffect)(() => {
      f.SetClipOffsets(d);
    }, [f, d]),
    (0, z.useEffect)(() => () => f.dispose(), [f]));
  let p = z.useMemo(() => ({ timelinePlaybackCoordinator: f }), [f]);
  return (0, G.jsx)(da.Provider, { value: p, children: t });
}
function q() {
  return (0, z.useContext)(da).timelinePlaybackCoordinator;
}
function pa() {
  let e = q();
  return [A(() => e?.GetPhasePreview() || null), (t) => e?.SetPhasePreview(t)];
}
var ma = `-z6QUhW0BuI-`,
  ha = `EQ4TcbQ23mE-`,
  ga = `_1SMhCEq4AkI-`,
  _a = `kkFDcE4F2W8-`,
  va = `YscTTqT4K6I-`,
  ya = `T4Y0jki8FF0-`;
function ba(e) {
  let {
    entry: t,
    strMarkerIcon: n,
    onClick: r,
    onMouseEnter: i,
    onMouseLeave: a,
    onContextMenu: o,
    classNames: s,
    style: c,
    faded: l,
    bSelectedMarker: u,
  } = e;
  return (0, G.jsx)(`div`, {
    style: c ?? {},
    className: b(s, { [ha]: !0, [ma]: u, [_a]: l }),
    onClick: (e) => {
      r && r(e);
    },
    onContextMenu: o,
    onMouseEnter: i,
    onMouseLeave: a,
    children: (0, G.jsx)(xa, { entry: t, strMarkerIcon: n }),
  });
}
function xa(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r = q().GetGameID();
  return Fi(t)
    ? (0, G.jsx)(Sa, { achievementEntry: t, strGameID: r })
    : Ii(t)
      ? (0, G.jsx)(Ta, {})
      : En(n)
        ? (0, G.jsx)(Ca, { entry: t, strMarkerIcon: n })
        : (0, G.jsx)(Ea, { strMarkerIcon: n, strGameID: r });
}
function Sa(e) {
  let { achievementEntry: t, strGameID: n } = e,
    r = Bn(new qi(n).GetAppID(), t.achievement_name),
    i,
    a;
  if (r) ((i = `white`), (a = (0, G.jsx)(`img`, { src: r.iconURL })));
  else {
    let e = wn();
    ((i = vn(e.color)), (a = e.func({})));
  }
  return (0, G.jsx)(`div`, { className: va, style: { color: i }, children: a });
}
function Ca(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r,
    i;
  Li(t) ? ((r = Cn()), (i = ga)) : (r = Sn(n));
  let a = vn(r.color);
  return (0, G.jsx)(Oa, {
    color: a,
    children: (0, G.jsx)(`div`, { className: i, children: r.func({}) }),
  });
}
function wa(e) {
  let { icon: t, className: n } = e;
  return Sn(t).func({ className: n });
}
function Ta(e) {
  let t = Sn(`steam_invalid`),
    n = vn(t.color);
  return (0, G.jsx)(Oa, {
    color: n,
    children: (0, G.jsx)(`div`, { children: t.func({}) }),
  });
}
function Ea(e) {
  let { strMarkerIcon: t, strGameID: n } = e;
  return (0, G.jsx)(Oa, { children: (0, G.jsx)(Da, { icon: t, gameID: n }) });
}
function Da(e) {
  let { icon: t, gameID: n, className: r } = e,
    i = An(new qi(n).GetAppID(), t);
  if (En(t)) return (0, G.jsx)(wa, { ...e });
  if (i === null) return null;
  if (i === void 0) {
    let e = Tn();
    return (0, G.jsx)(`div`, { className: r, children: e.func({}) });
  }
  if (`strImageURL` in i)
    return (0, G.jsx)(`img`, {
      src: i.strImageURL,
      alt: ``,
      className: b(r, ya),
    });
  let a = ``;
  return (
    (a = typeof i == `string` ? i : new XMLSerializer().serializeToString(i)),
    (0, G.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      className: b(r, ya),
      children: (0, G.jsx)(`g`, { dangerouslySetInnerHTML: { __html: a } }),
    })
  );
}
function Oa(e) {
  let { children: t, color: n } = e;
  return (0, G.jsx)(`div`, {
    className: void 0,
    children: (0, G.jsx)(`div`, {
      className: va,
      style: n ? { color: n } : null,
      children: t,
    }),
  });
}
var ka = `bDOiLLvSs2Y-`,
  Aa = `kcQuGr4J3rc-`,
  ja = `j-2U-sbnQJU-`,
  Ma = `_6l4s8j-Bcq8-`,
  Na = `_8YeucRtc8oU-`,
  Pa = `ZAjnqtDcso0-`,
  Fa = `vhGz8D5Y1Bk-`,
  Ia = `OMn6m4jRit8-`,
  La = `H-FSa2NK0ko-`,
  Ra = `EkzDm2rgmn4-`,
  za = `_7rO2L4URLVo-`,
  Ba = `UMVMer37ORc-`,
  Va = `cyiE161LN-s-`,
  Ha = `Vert6EPn2bo-`,
  Ua = `-BKlW5DP2XE-`,
  Wa = `wvlXf51vGb4-`,
  Ga = `S7iF3xbHMfk-`,
  Ka = `SPq-vUvAUJ0-`,
  qa = `p3cd5ToZ5HI-`,
  Ja = { nBeforeMS: 0, nAfterMS: 12e3 },
  J = z.createContext({
    globalStartMS: void 0,
    globalEndMS: void 0,
    setRange: null,
    setStartMS: null,
    setEndMS: null,
    globalPreviewStartMS: void 0,
    globalPreviewEndMS: void 0,
    setPreviewRange: null,
    clearPreviewSelection: null,
    selectionZoomCount: 0,
    eInitMethod: void 0,
    startMetrics: void 0,
    endMetrics: void 0,
    zoomIntoSelection: null,
    zoomOutSelection: null,
  });
function Ya() {
  let e = (0, z.useContext)(J);
  return { nGlobalStartMS: e.globalStartMS, nGlobalEndMS: e.globalEndMS };
}
function Xa() {
  return (0, z.useContext)(J).globalStartMS;
}
function Za() {
  return (0, z.useContext)(J).globalEndMS;
}
function Qa() {
  return (0, z.useContext)(J).setRange;
}
function $a() {
  return (0, z.useContext)(J).setStartMS;
}
function eo() {
  return (0, z.useContext)(J).setEndMS;
}
function to() {
  let e = (0, z.useContext)(J);
  return {
    selectedMarker: e.selectedMarker,
    setSelectedMarker: e.setSelectedMarker,
  };
}
function no() {
  let e = (0, z.useContext)(J);
  return !isNaN(e.globalStartMS?.valMS) && !isNaN(e.globalEndMS?.valMS);
}
function ro() {
  return (0, z.useContext)(J).clearSelection;
}
function io() {
  let e = Qa(),
    t = $a(),
    n = eo(),
    r = Ya(),
    i = oo(),
    a = ao();
  return z.useCallback(
    (o, s, c, l) => {
      if (c === void 0 && l === void 0) return;
      let u = r.nGlobalStartMS !== void 0 || r.nGlobalEndMS !== void 0,
        d = c || r.nGlobalStartMS,
        f = l || r.nGlobalEndMS;
      d &&
        f &&
        f.valMS <= d.valMS &&
        (c === void 0 ? (d = void 0) : (f = void 0));
      let p = Ja.nBeforeMS + Ja.nAfterMS;
      (d === void 0 && (d = U(f.valMS - p)),
        f === void 0 && (f = U(d.valMS + p)));
      let m = d != r.nGlobalStartMS,
        h = f != r.nGlobalEndMS;
      (m && h ? e(s, d, f) : m ? t(s, d) : h && n(s, f),
        !u && m && h && i == 0 && a());
    },
    [r, e, t, n, i, a],
  );
}
function ao() {
  return (0, z.useContext)(J).zoomIntoSelection;
}
function oo() {
  return (0, z.useContext)(J).selectionZoomCount;
}
function so(e) {
  let t = (0, z.useContext)(J),
    n = t.selectionZoomCount,
    r = t.globalStartMS,
    i = t.globalEndMS,
    a = (0, z.useRef)(n),
    o = (0, z.useRef)(null);
  ((o.current = e),
    (0, z.useEffect)(() => {
      if (!o.current) return;
      let e = !isNaN(r?.valMS) && !isNaN(i?.valMS);
      (a.current == n && e) ||
        ((a.current = n), e && n ? o.current(r, i) : o.current(null, null));
    }, [n, r, i, a, o]));
}
var co = 5e3,
  lo = 3e5,
  uo = 1e3,
  fo = 10,
  po = 10,
  Y = (function (e) {
    return (
      (e.Playhead = `Playhead`),
      (e.RangeLeft = `RangeLeft`),
      (e.RangeRight = `RangeRight`),
      (e.Highlight = `Highlight`),
      e
    );
  })({}),
  mo = class {
    m_fnUnregisterFromLoader;
    m_loader;
    m_maskBounds = [-1, -1];
    m_eventTarget;
    constructor(e, t) {
      (Ke(this), (this.m_loader = e), (this.m_eventTarget = t));
    }
    Init() {
      ((this.m_fnUnregisterFromLoader = this.m_loader.AddEventListener(this)),
        this.m_loader.BInitialized() && this.OnLoaderInitialized());
    }
    GetGameID() {
      return this.m_loader.GetGameID();
    }
    BInitialized() {
      return this.m_loader.BInitialized();
    }
    IsActiveRecording(e) {
      return this.m_loader.IsActiveRecording(e);
    }
    IsActiveTimeline(e) {
      return this.m_loader.IsActiveTimeline(e);
    }
    GetStateDescriptionAtGlobalMS(e) {
      return this.m_loader.GetStateDescriptionAtGlobalMS(U(e));
    }
    GetTimelineOffsetFromGlobal(e, t) {
      return this.m_loader.GetTimelineOffsetFromGlobal(e, t);
    }
    GetTimelineStartTime(e) {
      let t = this.m_loader.GetTimelineMetadata(e);
      return t?.metadata ? t.metadata.date_recorded : null;
    }
    BEmpty() {
      return !1;
    }
    GetTimelines() {
      return this.m_loader.GetTimelines();
    }
    GetGlobalTimelineEndMS() {
      return this.m_loader.GetGlobalTimelineEndMS();
    }
    GetTimelineDataOrStartLoad(e) {
      return this.m_loader.GetTimelineDataOrStartLoad(e);
    }
    GetTimelineStartBeforeGlobalZeroMS(e) {
      return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(e);
    }
    MakeRelativeToTimelineEndIfActive(e, t) {
      return this.m_loader.MakeRelativeToTimelineEndIfActive(e, t);
    }
    FindRangeEventsAtGlobalMS(e) {
      return this.m_loader.FindRangeEventsAtGlobalMS(e);
    }
    Close() {
      ((this.m_fnUnregisterFromLoader &&=
        (this.m_fnUnregisterFromLoader(), void 0)),
        (this.m_loader = null));
    }
    OnLoaderInitialized() {
      this.m_eventTarget.OnLoaderInitialized &&
        this.m_eventTarget.OnLoaderInitialized();
    }
    OnInvalidate(e) {
      this.m_eventTarget.OnInvalidate && this.m_eventTarget.OnInvalidate(e);
    }
    OnTimelineLoaded(e) {
      this.m_eventTarget.OnTimelineLoaded &&
        this.m_eventTarget.OnTimelineLoaded(e);
    }
    OnInvalidateRecording(e, t) {
      this.m_eventTarget.OnInvalidateRecording &&
        this.m_eventTarget.OnInvalidateRecording(e, t);
    }
  },
  X = class {
    m_playbackCoordinator;
    m_fnUnregisterPlaybackCoordinator;
    m_refTimelineParentCtn;
    m_timelineMask;
    m_durationMS = 0;
    m_mapTimelineClips = M.map([], { deep: !1 });
    m_scrollLeftPX = 0;
    m_scrollWindowWidth = null;
    m_scrollWindowOffsetPX = null;
    m_bAutoScrollPaused = !1;
    m_autoScrollPauseTimeout = null;
    m_msVisible = 0;
    m_bCustomZoom = !1;
    m_bUserClipping = !1;
    m_prevLeftAndVisible = null;
    m_rgTimelineOffsets = [];
    m_mapTimelineEntries = M.map([], { deep: !1 });
    m_bInitialized = !1;
    m_eThumbnailComponent = null;
    m_nGlobalRelativeThumbnailPositionPX = void 0;
    m_thumbnailHighlightEntry = void 0;
    m_phaseToHighlight = void 0;
    constructor(e, t, n) {
      (Ke(this),
        (this.m_playbackCoordinator = t),
        (this.m_timelineMask = new mo(e, this)),
        (this.m_fnUnregisterPlaybackCoordinator = t.AddEventListener(this)),
        this.UpdateClipSummaries(n),
        this.m_timelineMask.Init());
    }
    BInitialized() {
      return this.m_bInitialized;
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineMask.GetGlobalTimelineEndMS().valMS),
        this.OnInvalidate(),
        this.InitDefaultsIfReady());
    }
    InitDefaultsIfReady() {
      !this.m_bInitialized &&
        this.m_scrollWindowWidth &&
        this.m_timelineMask.BInitialized() &&
        ((this.m_bInitialized = !0),
        (this.m_msVisible = this.ComputeDefaultMSVisible()),
        this.ScrollToCenteredGlobalMS(
          this.m_playbackCoordinator.GetGlobalMSPlaytime().valMS,
        ));
    }
    OnTimelineLoaded(e) {
      (F(`OnTimelineLoaded`, e),
        this.FindTimelineOffsets(e)
          ? this.ComputeEntriesForTimeline(e)
          : L(`Missing timeline offset metadata for`, e));
    }
    OnInvalidate(e) {
      F(`on invalidate`, e);
      let t = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
        n = t - this.m_durationMS,
        r = this.m_durationMS <= 0,
        i;
      this.m_durationMS = t;
      let a = this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
      if (n > 0 && r) this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (n > 0 && !this.m_bAutoScrollPaused && !a)
        this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (n < 0 && this.m_msVisible > t)
        ((this.m_msVisible = this.ComputeDefaultMSVisible()),
          this.ScrollToOffset(0));
      else if (n < 0) {
        let e = this.FindClosestTimelineStartForOffsetPX(this.m_scrollLeftPX);
        if (e) {
          let t = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS),
            n = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - t);
          i = { strTimelineID: e.timelineID, nTimelineOffsetMS: n };
        }
      }
      let o = this.m_timelineMask.GetTimelines(),
        s = 0;
      if (this.BInitialized() && e) {
        let t = o.findIndex((t) => t.metadata.timeline_id === e);
        t >= 0 && (s = t);
      }
      if (
        ((this.m_rgTimelineOffsets = o.map((e, t) =>
          t >= s ? this.ComputeTimelineOffset(e) : this.m_rgTimelineOffsets[t],
        )),
        i)
      ) {
        let e = this.FindTimelineOffsets(i.strTimelineID);
        if (e) {
          let t = e.globalOffsetMS + i.nTimelineOffsetMS,
            n = l(
              this.ConvertGlobalMSToGlobalPXOffset(t),
              0,
              this.GetMaxScrollLeftPX(),
            );
          this.ScrollToOffset(n);
        }
      }
      o.forEach((e, t) => {
        t >= s && this.ComputeEntriesForTimeline(e.metadata.timeline_id);
      });
    }
    OnFocusGlobalMS(e) {
      this.ScrollToCenteredGlobalMS(e.valMS);
    }
    GetGameID() {
      return this.m_timelineMask.GetGameID();
    }
    SetTimelineParentCtnRef(e) {
      this.m_refTimelineParentCtn = e;
    }
    GetTimelineParentCtnRef() {
      return this.m_refTimelineParentCtn;
    }
    SetThumbnailComponent(e) {
      ((this.m_eThumbnailComponent = e),
        e || (this.m_nGlobalRelativeThumbnailPositionPX = void 0),
        e !== `Highlight` && (this.m_thumbnailHighlightEntry = null));
    }
    GetThumbnailComponent() {
      return this.m_eThumbnailComponent;
    }
    SetThumbnailPosition(e) {
      this.m_nGlobalRelativeThumbnailPositionPX = e;
    }
    GetThumbnailPosition() {
      return this.m_nGlobalRelativeThumbnailPositionPX;
    }
    SetThumbnailEntry(e) {
      this.m_thumbnailHighlightEntry = e;
    }
    GetThumbnailEntry() {
      return this.m_eThumbnailComponent === `Highlight`
        ? this.m_thumbnailHighlightEntry
        : null;
    }
    Close() {
      (this.m_timelineMask.Close(),
        (this.m_timelineMask = null),
        this.m_fnUnregisterPlaybackCoordinator &&
          this.m_fnUnregisterPlaybackCoordinator(),
        (this.m_fnUnregisterPlaybackCoordinator = null),
        (this.m_bInitialized = !1),
        this.m_autoScrollPauseTimeout && this.ClearAutoScrollPauseTimeout());
    }
    ComputeDefaultMSVisible() {
      let e = this.GetTimelineMarginWidth() * 2,
        t = po * (this.m_rgTimelineOffsets.length - 1),
        n = Math.max(1, this.m_scrollWindowWidth - t - e),
        r = Math.ceil(
          ((e + t) * this.m_durationMS) / (this.m_scrollWindowWidth - (e + t)),
        ),
        i = uo * n;
      return Math.min(this.m_durationMS + r, i);
    }
    ZoomIn(e, t) {
      let n = 1e3;
      if (this.m_msVisible <= n) return;
      let r = this.m_msVisible - this.m_msVisible / 1.1 ** e,
        i = r * t,
        a = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
        o = Math.max(this.m_msVisible - r, n);
      ((this.m_msVisible = o),
        (this.m_bCustomZoom = !0),
        this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(a + i)));
    }
    ZoomOut(e, t) {
      let n =
        this.m_durationMS +
        this.ConvertDeltaPXToDurationMS(
          po * (this.m_rgTimelineOffsets.length - 1) +
            this.GetTimelineMarginWidth() * 2,
        );
      if (this.m_msVisible >= n) return;
      let r = this.m_msVisible * 1.1 ** e - this.m_msVisible,
        i = r * t,
        a = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
        o = Math.min(this.m_msVisible + r, n);
      ((this.m_msVisible = o),
        (this.m_bCustomZoom = !0),
        this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(a - i)));
    }
    IsTempZoom() {
      return !!this.m_prevLeftAndVisible;
    }
    SetTempZoomScale(e, t) {
      let n = Math.max(e, 0),
        r = Math.min(t, this.m_durationMS);
      ((this.m_prevLeftAndVisible = [this.m_scrollLeftPX, this.m_msVisible]),
        (this.m_msVisible = r - n));
      let i = this.ConvertGlobalMSToGlobalPXOffset(n);
      this.ScrollToOffset(i);
    }
    ClearTempZoomScale() {
      if (!this.m_prevLeftAndVisible) return;
      let [e, t] = this.m_prevLeftAndVisible;
      ((this.m_prevLeftAndVisible = null),
        this.ScrollToOffset(e),
        (this.m_msVisible = t));
    }
    SetUserIsClipping(e) {
      this.m_bUserClipping = e;
    }
    GetTimelineGapWidth() {
      return po;
    }
    GetTimelineMarginWidth() {
      return 12;
    }
    UpdateClipSummaries(e = []) {
      (this.m_mapTimelineClips.clear(),
        e.forEach((e) => {
          let t = e.start_timeline_id;
          this.m_mapTimelineClips.has(t) || this.m_mapTimelineClips.set(t, []);
          let n = {
            clipID: e.clip_id,
            msDuration: parseInt(e.duration_ms),
            msTimelineOffset: parseInt(e.start_offset_ms),
            timelineID: t,
          };
          this.m_mapTimelineClips.get(t).push(n);
        }));
    }
    BEmpty() {
      return this.m_timelineMask.BEmpty();
    }
    ComputeTimelineOffset(e) {
      let t = isNaN(parseInt(e.metadata.duration_ms))
          ? 0
          : parseInt(e.metadata.duration_ms),
        n = e.metadata.recordings.map((e) => {
          let n = parseInt(e.start_offset_ms),
            r = parseInt(e.duration_ms);
          return (
            isNaN(r) &&
              this.m_timelineMask.IsActiveRecording(e.recording_id) &&
              (r = t - n),
            {
              recordingID: e.recording_id,
              timelineOffsetMS: n,
              nDurationMS: r,
              bIsActive: this.m_timelineMask.IsActiveRecording(e.recording_id),
              recordingType: e.recording_type,
            }
          );
        }),
        r = (e.metadata.phases || []).map((e) => ({
          timelineOffsetMS: parseInt(e.background_timeline_offset),
          nDurationMS: parseInt(e.duration_ms),
          phase: e,
        }));
      return {
        timelineID: e.metadata.timeline_id,
        globalOffsetMS: e.nGlobalOffsetMS.valMS,
        nDurationMS: t,
        recordingOffsets: n,
        phaseOffsets: r,
      };
    }
    GetCurrentZoomScale() {
      return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
    }
    GetClipsForTimeline(e) {
      return this.m_mapTimelineClips.get(e) || [];
    }
    ComputeEntriesForTimeline(e) {
      let t = this.m_timelineMask.GetTimelineDataOrStartLoad(e);
      t &&
        t.m_strState == `loaded` &&
        this.m_mapTimelineEntries.set(e, {
          rgGameModes: t.m_rgGameModeChanges,
          rgHighlights: t.m_rgEntries,
        });
    }
    GetVisibleTimelineGameModes(e) {
      return this.m_mapTimelineEntries.get(e)?.rgGameModes;
    }
    GetVisibleTimelineHighlights(e) {
      return this.m_mapTimelineEntries.get(e)?.rgHighlights;
    }
    GetStateDescriptionAtGlobalMS(e) {
      return this.m_timelineMask.GetStateDescriptionAtGlobalMS(e);
    }
    FindRangeEventsAtGlobalMS(e) {
      return this.m_timelineMask.FindRangeEventsAtGlobalMS(e);
    }
    GetTimelineOffsetMS(e) {
      return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(e);
    }
    ScrollToCenteredGlobalMS(e) {
      let t = this.ConvertGlobalMSToGlobalPXOffset(e);
      this.ScrollToOffsetCentered(t);
    }
    ScrollToOffset(e) {
      this.m_scrollLeftPX = l(e, 0, this.GetMaxScrollLeftPX());
    }
    ScrollToOffsetCentered(e) {
      let t = Math.max(0, e - 0.5 * this.m_scrollWindowWidth);
      this.ScrollToOffset(t);
    }
    ScrollBy(e) {
      let t = this.m_scrollLeftPX + e;
      this.ScrollToOffset(t);
    }
    GetAutoScrollPaused() {
      return this.m_bAutoScrollPaused;
    }
    SetAutoScrollPaused(e) {
      (this.ClearAutoScrollPauseTimeout(), (this.m_bAutoScrollPaused = e));
    }
    GetAutoScrollPauseTimeout() {
      return this.m_autoScrollPauseTimeout;
    }
    ClearAutoScrollPauseTimeout() {
      (this.m_autoScrollPauseTimeout &&
        clearTimeout(this.m_autoScrollPauseTimeout),
        (this.m_autoScrollPauseTimeout = null));
    }
    SetAutoScrollPauseTimeout(e = co) {
      (this.ClearAutoScrollPauseTimeout(),
        (this.m_autoScrollPauseTimeout = window.setTimeout(() => {
          this.SetAutoScrollPaused(!1);
        }, e)));
    }
    ScrollToEnd() {
      this.ScrollToOffset(this.GetMaxScrollLeftPX());
    }
    SetScrollWindowWidth(e) {
      ((this.m_scrollWindowWidth = e),
        this.m_timelineMask.BInitialized() &&
          (this.ScrollToOffset(this.m_scrollLeftPX),
          this.InitDefaultsIfReady()));
    }
    SetScrollWindowOffset(e) {
      this.m_scrollWindowOffsetPX = e;
    }
    GetScrollWindowOffset() {
      return this.m_scrollWindowOffsetPX;
    }
    GetScrollableWidthPX() {
      if (!this.m_rgTimelineOffsets?.length) return 0;
      let e = this.m_rgTimelineOffsets.length - 1,
        t = this.m_rgTimelineOffsets[e];
      return (
        e * po +
        this.ConvertDurationMSToDeltaPX(t.globalOffsetMS + t.nDurationMS)
      );
    }
    GetOverscanWidth() {
      return (this.GetScrollWindowWidth() * fo) / 100;
    }
    GetScrollWindowWidth() {
      return this.m_scrollWindowWidth;
    }
    GetMaxScrollLeftPX() {
      return Math.max(
        0,
        this.GetScrollableWidthPX() -
          this.GetScrollWindowWidth() +
          2 * this.GetTimelineMarginWidth(),
      );
    }
    BReachedMaxScroll() {
      return (
        Math.ceil(this.m_scrollLeftPX) === Math.ceil(this.GetMaxScrollLeftPX())
      );
    }
    BReachedMinScroll() {
      return this.m_scrollLeftPX === 0;
    }
    GetVisualWindowStartPX() {
      return this.m_scrollLeftPX;
    }
    GetVisualWidth() {
      return Math.min(
        this.m_scrollWindowWidth,
        this.GetScrollableWidthPX() + 2 * this.GetTimelineMarginWidth(),
      );
    }
    GetVirtualWindowStartPX() {
      return Math.max(this.m_scrollLeftPX - this.GetOverscanWidth(), 0);
    }
    GetVirtualWindowWidthPX() {
      let e = l(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
        t = Math.min(
          this.GetScrollableWidthPX() -
            (this.m_scrollLeftPX + this.m_scrollWindowWidth),
          this.GetOverscanWidth(),
        );
      return e + this.m_scrollWindowWidth + t;
    }
    GetVirtualWindowEndPX() {
      return this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX();
    }
    GetVisibleTimelines() {
      let e =
          this.FindIndexOfClosestTimelineEndForOffsetPX(
            this.GetVirtualWindowStartPX(),
          ) + 1,
        t = this.FindIndexOfClosestTimelineStartForOffsetPX(
          this.GetVirtualWindowEndPX(),
        );
      return this.m_rgTimelineOffsets.slice(e, t + 1).map((e) => {
        let t = Math.max(
            e.globalOffsetMS,
            this.ConvertPXOffsetToGlobalMS(this.GetVirtualWindowStartPX()),
          ),
          n = Math.min(
            e.nDurationMS - (t - e.globalOffsetMS),
            this.ConvertDeltaPXToDurationMS(this.GetVirtualWindowWidthPX()),
          ),
          r = this.ConvertGlobalMSToGlobalPXOffset(t),
          i = this.ConvertDurationMSToDeltaPX(n),
          a = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS),
          o = this.ConvertDurationMSToDeltaPX(e.nDurationMS);
        return {
          ...e,
          pxStart: a,
          pxDuration: o,
          msVisibleStart: t,
          msVisibleDuration: n,
          pxVisibleStart: r,
          pxVisibleDuration: i,
        };
      });
    }
    GetVisibleRecordings() {
      let e = [];
      return (
        this.GetVisibleTimelines().forEach((t) => {
          t.recordingOffsets.forEach((n) => {
            let r = t.pxStart + this.GetPXForDuration(n.timelineOffsetMS),
              i = r + this.GetPXForDuration(n.nDurationMS);
            i < this.GetVirtualWindowStartPX() ||
              r > this.GetVirtualWindowEndPX() ||
              e.push({
                recordingID: n.recordingID,
                nStartPX: r,
                nEndPX: i,
                bIsActive: n.bIsActive,
                recordingType: n.recordingType,
              });
          });
        }),
        e
      );
    }
    GetVisibleClips() {
      let e = [];
      return (
        this.GetVisibleTimelines().forEach((t) => {
          let n = this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS);
          this.GetClipsForTimeline(t.timelineID).forEach((r) => {
            let i = n + this.GetPXForDuration(r.msTimelineOffset),
              a = Math.min(
                this.GetVirtualWindowEndPX(),
                this.ConvertGlobalMSToGlobalPXOffset(
                  t.globalOffsetMS + r.msTimelineOffset + r.msDuration,
                ),
              );
            a < this.GetVirtualWindowStartPX() ||
              i > this.GetVirtualWindowEndPX() ||
              e.push({ clipID: r.clipID, pxClipStart: i, pxClipEnd: a });
          });
        }),
        e
      );
    }
    GetPXForDuration(e) {
      return e / this.GetCurrentZoomScale();
    }
    GetVisibleTimelinesInWindow() {
      let e =
          this.FindIndexOfClosestTimelineEndForOffsetPX(this.m_scrollLeftPX) +
          1,
        t = this.FindIndexOfClosestTimelineStartForOffsetPX(
          this.m_scrollLeftPX + this.m_scrollWindowWidth,
        );
      return this.m_rgTimelineOffsets.slice(e, t + 1);
    }
    GetVisibleWindowRelativeTimelines() {
      return this.GetVisibleTimelinesInWindow().map((e) => {
        let t = this.m_scrollLeftPX,
          n = this.GetVirtualWindowEndPX() - this.GetOverscanWidth(),
          r = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS),
          i = r + this.ConvertDurationMSToDeltaPX(e.nDurationMS),
          a = Math.max(r, t),
          o = Math.min(i, n);
        return {
          timelineID: e.timelineID,
          nVisibleStartPX: a,
          nEndPX: o,
          nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(t),
          nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(t),
        };
      });
    }
    ConvertPXToTimelineRelativeMS(e, t = `start`) {
      let n = this.ConvertPXOffsetToGlobalMS(e),
        r = this.m_timelineMask.GetTimelineOffsetFromGlobal(n, 0);
      return t == `end-if-active` &&
        r.strTimelineID &&
        this.m_timelineMask.IsActiveTimeline(r.strTimelineID)
        ? this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
            r.strTimelineID,
            r.nTimelineOffsetMS.valMS,
          )
        : r.nTimelineOffsetMS.valMS;
    }
    GetTimeRecorded(e) {
      return this.m_timelineMask.GetTimelineStartTime(e);
    }
    ConvertGlobalMSToClipOrNone(e) {
      if (!this.m_timelineMask) return null;
      let t = this.m_timelineMask.GetTimelineOffsetFromGlobal(e, 0);
      if (!t) return null;
      let { nTimelineOffsetMS: n, strTimelineID: r } = t;
      return r && this.m_mapTimelineClips.has(r)
        ? this.m_mapTimelineClips
            .get(r)
            .find(
              (e) =>
                e.msTimelineOffset <= n.valMS &&
                e.msTimelineOffset + e.msDuration >= n.valMS,
            )
        : null;
    }
    ConvertGlobalMSToScrollWindowPXOffset(e) {
      return this.ConvertGlobalMSToGlobalPXOffset(e) - this.m_scrollLeftPX;
    }
    ConvertGlobalMSToGlobalPXOffset(e, t = -1) {
      t < 0 && (t = T(this.m_rgTimelineOffsets, (t) => e - t.globalOffsetMS));
      let n = t * po;
      return this.ConvertDurationMSToDeltaPX(e) + n;
    }
    ConvertPXOffsetToGlobalMS(e, t = !0) {
      if (this.BPositionInGap(e)) {
        if (!t) return null;
        let n = this.FindClosestTimelineEndForOffsetPX(e);
        return n ? n.globalOffsetMS + n.nDurationMS : 0;
      }
      let n = this.FindClosestTimelineStartForOffsetPX(e);
      if (!n) return null;
      let r = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS),
        i = this.ConvertDeltaPXToDurationMS(e - r);
      return n.globalOffsetMS + i;
    }
    FindClosestTimelineEndForOffsetPX(e) {
      let t = this.FindIndexOfClosestTimelineEndForOffsetPX(e);
      return t < 0 ? null : this.m_rgTimelineOffsets[t];
    }
    FindClosestTimelineStartForOffsetPX(e) {
      let t = this.FindIndexOfClosestTimelineStartForOffsetPX(e);
      return t < 0 ? null : this.m_rgTimelineOffsets[t];
    }
    FindIndexOfClosestTimelineEndForOffsetPX(e) {
      return T(
        this.m_rgTimelineOffsets,
        (t) =>
          e -
          (this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS) +
            this.ConvertDurationMSToDeltaPX(t.nDurationMS)),
      );
    }
    FindIndexOfClosestTimelineStartForOffsetPX(e) {
      return T(
        this.m_rgTimelineOffsets,
        (t) => e - this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS),
      );
    }
    FindTimelineOffsets(e) {
      return this.m_rgTimelineOffsets.find((t) => t.timelineID === e);
    }
    BPositionInGap(e) {
      let t = this.FindIndexOfClosestTimelineEndForOffsetPX(e);
      if (t < 0) return !1;
      let n = t + 1;
      if (n >= this.m_rgTimelineOffsets.length) return !1;
      let r = this.m_rgTimelineOffsets[t],
        i = this.m_rgTimelineOffsets[n],
        a = this.ConvertGlobalMSToGlobalPXOffset(r.globalOffsetMS);
      return (
        e < this.ConvertGlobalMSToGlobalPXOffset(i.globalOffsetMS) && e !== a
      );
    }
    ConvertDurationMSToDeltaPX(e) {
      return e / this.GetCurrentZoomScale();
    }
    ConvertDeltaPXToDurationMS(e) {
      return e * this.GetCurrentZoomScale();
    }
    SetPhaseToHighlight(e) {
      this.m_phaseToHighlight = e;
    }
    GetPhaseToHighlight() {
      return this.m_phaseToHighlight;
    }
  };
(v([M], X.prototype, `m_durationMS`, void 0),
  v([M], X.prototype, `m_scrollLeftPX`, void 0),
  v([M], X.prototype, `m_scrollWindowWidth`, void 0),
  v([M], X.prototype, `m_scrollWindowOffsetPX`, void 0),
  v([M], X.prototype, `m_bAutoScrollPaused`, void 0),
  v([M], X.prototype, `m_autoScrollPauseTimeout`, void 0),
  v([M], X.prototype, `m_msVisible`, void 0),
  v([M.ref], X.prototype, `m_rgTimelineOffsets`, void 0),
  v([M], X.prototype, `m_bInitialized`, void 0),
  v([M], X.prototype, `m_eThumbnailComponent`, void 0),
  v([M], X.prototype, `m_nGlobalRelativeThumbnailPositionPX`, void 0),
  v([M], X.prototype, `m_thumbnailHighlightEntry`, void 0),
  v([M], X.prototype, `m_phaseToHighlight`, void 0),
  v([N], X.prototype, `OnLoaderInitialized`, null),
  v([N], X.prototype, `InitDefaultsIfReady`, null),
  v([N], X.prototype, `OnInvalidate`, null),
  v([N], X.prototype, `ZoomIn`, null),
  v([N], X.prototype, `ZoomOut`, null),
  v([N], X.prototype, `SetTempZoomScale`, null),
  v([N], X.prototype, `ClearTempZoomScale`, null),
  v([N], X.prototype, `UpdateClipSummaries`, null),
  v([w], X.prototype, `BReachedMaxScroll`, null),
  v([w], X.prototype, `BReachedMinScroll`, null));
var ho = z.createContext(null);
function go(e) {
  let {
      loader: t,
      playbackCoordinator: n,
      children: r,
      clipSummaries: i,
      refTimelineParentCtn: a,
    } = e,
    [o, s] = (0, z.useState)(null);
  return (
    (0, z.useEffect)(() => {
      if (!t) return;
      let e = new X(t, n, i);
      return (s(e), () => e.Close());
    }, [t]),
    (0, z.useEffect)(() => {
      o && o.UpdateClipSummaries(i);
    }, [o, i]),
    (0, z.useEffect)(() => {
      o && a && o.SetTimelineParentCtnRef(a.current);
    }, [o, a]),
    vo(o),
    _o(o),
    o ? (0, G.jsx)(ho.Provider, { value: o, children: r }) : null
  );
}
function _o(e) {
  so(
    z.useCallback(
      (t, n) => {
        if (!e) return;
        if (!t || !n) {
          e.ClearTempZoomScale();
          return;
        }
        let r = Math.floor((n.valMS - t.valMS) * 0.1),
          i = n.valMS - t.valMS;
        i < lo * 0.9 && (r = Math.floor((lo - i) / 2));
        let a = t.valMS - r,
          o = n.valMS + r;
        e.SetTempZoomScale(a, o);
      },
      [e],
    ),
  );
}
function vo(e) {
  let t = no();
  (0, z.useEffect)(() => {
    e && e.SetUserIsClipping(t);
  }, [e, t]);
}
function Z() {
  return (0, z.useContext)(ho);
}
var yo = `BAvp4rqoXrI-`,
  bo = `MvaB420caso-`,
  xo = `KHooprC7Eh8-`,
  So = `S49EhbfI3MU-`,
  Co = `_5URRAlchke4-`,
  wo = 20,
  To = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
  Eo = z.memo(function (e) {
    let t = Z(),
      n = A(() => t.GetVisibleTimelines());
    return (0, G.jsx)(G.Fragment, {
      children: n.map((e) =>
        (0, G.jsx)(
          Do,
          {
            msVisibleStart: e.msVisibleStart,
            pxVisibleDuration: e.pxVisibleDuration,
            pxVisibleStart: e.pxVisibleStart,
            msTimelineStart: e.globalOffsetMS,
          },
          e.timelineID,
        ),
      ),
    });
  }),
  Do = z.memo(function (e) {
    let {
        msVisibleStart: t,
        msTimelineStart: n,
        pxVisibleDuration: r,
        pxVisibleStart: i,
      } = e,
      { msTickSpacing: a, pxTickSpacing: o } = ko(),
      s = Z(),
      c = Math.ceil((t - n) / a),
      l = n + c * a,
      u = s.ConvertGlobalMSToGlobalPXOffset(l),
      d = (0, z.useMemo)(() => {
        let e = Math.ceil(r / o),
          t = [];
        for (let n = 0; n < e; n++) {
          let e = l + a * n,
            r = u + n * o,
            i = `${e}`;
          t.push({ key: i, offsetPX: r, iTimelineRelativeTick: c + n });
        }
        return t;
      }, [r, o, l, a, u, c]);
    return d
      ? (0, G.jsxs)(G.Fragment, {
          children: [
            (0, G.jsx)(`div`, {
              className: yo,
              style: { transform: `translateX(${i}px)`, width: r },
            }),
            d.map((e) =>
              (0, G.jsx)(
                Oo,
                {
                  timelineRelativeIndex: e.iTimelineRelativeTick,
                  globalOffsetPX: e.offsetPX,
                },
                e.key,
              ),
            ),
          ],
        })
      : null;
  });
function Oo(e) {
  let { globalOffsetPX: t, timelineRelativeIndex: n } = e,
    r = n % wo === 0 ? So : Co;
  return (0, G.jsx)(`div`, {
    className: bo,
    style: { transform: `translateX(${t}px)` },
    children: (0, G.jsx)(`div`, { className: b(xo, r) }),
  });
}
function ko() {
  let e = Z(),
    t = A(() => e.GetCurrentZoomScale()),
    n = (e) => Math.abs(300 - e / t),
    r = To.reduce((e, t) => (n(e) - n(t) < 0 ? e : t)) / wo;
  return { msTickSpacing: r, pxTickSpacing: r / t };
}
var Ao = `pOdfi3iG-Qk-`,
  jo = `RgeHxBkcuYI-`,
  Mo = `bEIIxIyUIRw-`,
  No = `vfkh8xz76sA-`,
  Po = `Z4wMZP9AtrA-`;
function Fo(e, t) {
  return !(e.nStart >= t.nEnd || e.nEnd <= t.nStart);
}
var Io = class {
    m_reservations = [];
    m_nIconWidth;
    constructor(e) {
      this.m_nIconWidth = e;
    }
    BAllowIcon(e) {
      let t = {
          nStart: e - this.m_nIconWidth / 2,
          nEnd: e + this.m_nIconWidth / 2,
        },
        n = 0;
      for (; n < this.m_reservations.length; n++) {
        let e = this.m_reservations[n];
        if (e.nStart >= t.nEnd) break;
        if (Fo(t, e)) return !1;
      }
      return (this.m_reservations.splice(n, 0, t), !0);
    }
  },
  Lo = (0, z.createContext)({});
function Ro() {
  return (0, z.useContext)(Lo);
}
var zo = `DzuECh3SiO8-`,
  Bo = `OzJbKH40jVQ-`,
  Vo = `CcS1u3HYQgY-`,
  Ho = `Q2--kfqg0oc-`,
  Uo = `GBjFGdfE0Qc-`,
  Wo = `tg-75b6-Ee4-`,
  Go = `-BFT24TRL3c-`;
function Ko(e) {
  let {
      closeModal: t,
      strTimelineID: n,
      entry: r,
      playbackCoordinator: i,
      fnClearSelection: a,
    } = e,
    [o, s] = z.useState(r.title || ``),
    [c, l] = z.useState(r.description || ``),
    u = en();
  return u.bLoading
    ? (0, G.jsx)(tn, {
        state: u,
        strDialogTitle: k(`#Marker_Dialog`),
        closeModal: t,
      })
    : (0, G.jsxs)(Re, {
        strTitle: k(`#Marker_Dialog`),
        strMiddleButtonText: k(`#Marker_Action_Delete`),
        onCancel: t,
        onOK: async () => {
          (u.fnSetLoading(!0),
            (await i.UpdateUserMarker(n, r, o, c))
              ? t()
              : (u.fnSetError(!0), u.fnSetStrError(k(`#Marker_UpdateFailed`))));
        },
        children: [
          (0, G.jsx)(ve, {
            type: `text`,
            value: o,
            onChange: (e) => s(e.currentTarget.value),
            label: k(`#Marker_Title`),
          }),
          (0, G.jsx)(ve, {
            type: `text`,
            value: c,
            onChange: (e) => l(e.currentTarget.value),
            label: k(`#Marker_Description`),
          }),
        ],
      });
}
var qo = `YwXy-p3jOGA-`,
  Jo = `DYV4-rbHkCQ-`,
  Yo = `NodVylkJJmk-`,
  Xo = `NBLBqJkBBNA-`,
  Zo = `muIMDgnfzVw-`,
  Qo = class {
    m_bCreationWasTemporary;
    m_fnCreate;
    m_creationResult;
    m_bCleanedUp = !1;
    m_nClipLengthSeconds;
    m_strSuggestedClipName;
    m_strGameID;
    m_strSrcClipID;
    m_eInitMethod;
    m_startMetrics;
    m_endMetrics;
    constructor(e, t, n, r, i, a, o, s) {
      ((this.m_fnCreate = e),
        (this.m_nClipLengthSeconds = t),
        (this.m_strSuggestedClipName = n),
        (this.m_strGameID = r),
        (this.m_strSrcClipID = i),
        (this.m_eInitMethod = a),
        (this.m_startMetrics = o),
        (this.m_endMetrics = s));
    }
    Request() {
      return {
        create: this.create,
        cleanup: this.cleanup,
        bExistingClip: !1,
        nClipLengthSeconds: this.m_nClipLengthSeconds,
        strSuggestedClipName: this.m_strSuggestedClipName,
        gameID: new qi(this.m_strGameID),
        strSrcClipID: this.m_strSrcClipID,
        eInitMethod: this.m_eInitMethod,
        startMetrics: this.m_startMetrics,
        endMetrics: this.m_endMetrics,
      };
    }
    async create(e, t) {
      return (
        this.m_creationResult ||
          ((this.m_creationResult = await this.m_fnCreate(e, t)),
          (this.m_bCreationWasTemporary = e),
          Vn(
            new qi(this.m_strGameID),
            this.m_eInitMethod,
            this.m_nClipLengthSeconds,
            this.m_startMetrics,
            this.m_endMetrics,
          )),
        Promise.resolve(this.m_creationResult)
      );
    }
    async cleanup() {
      if (this.m_bCleanedUp)
        throw Error(`cleanup called twice on clip creation`);
      if (
        ((this.m_bCleanedUp = !0),
        this.m_creationResult?.clipSummary && this.m_bCreationWasTemporary)
      ) {
        let { fnDeleteClip: e } = Ln();
        await e(this.m_creationResult.clipSummary.clip_id);
      }
    }
  };
(v([w], Qo.prototype, `create`, null), v([w], Qo.prototype, `cleanup`, null));
function $o(e, t, n, r, i, a, o, s, c, l, u) {
  return new Qo(
    (s, c) => es(e, t, n, r, i, a, o, s, c),
    s / 1e3,
    n,
    e,
    t,
    c,
    l,
    u,
  ).Request();
}
async function es(e, t, n, r, i, a, o, s, c) {
  let { fnSaveClip: l } = In();
  L(`start ${r} @ ${i} upto ${a} @ ${o}`);
  try {
    let u = await l(
        e,
        t,
        n,
        { timeline_id: r, offset_ms: `` + i },
        { timeline_id: a, offset_ms: `` + o },
        s,
        c,
      ),
      { clipSummary: d, result: f } = u;
    return (
      L(d ? `Clip ${d.clip_id} created` : `Clip was not created: ${f}`), u
    );
  } catch (e) {
    I(e);
  }
  return { result: 2 };
}
function ts(e, t, n, r) {
  let i = n + 1,
    a = i + r - 2;
  return $o(
    e,
    void 0,
    void 0,
    t,
    i,
    t,
    a,
    a - i,
    7,
    { latestRangeMethod: 7, originalRangeMethod: 7, relativeMS: 0 },
    { latestRangeMethod: 7, originalRangeMethod: 7, relativeMS: 0 },
  ).create(!1);
}
var ns = `u-2dfrrZjSE-`,
  rs = z.createContext({
    bInContainer: !1,
    bContainerFocus: !1,
    nMouseClientXPX: null,
    globalMouseXPX: null,
    scrollWindowMouseXPX: null,
    fnRegisterMouseEvent: null,
    bContextMenuOpen: !1,
    setContextMenuOpen: () => {},
  });
function is(e) {
  let { children: t } = e,
    [n, r] = (0, z.useState)(!1),
    [i, a] = (0, z.useState)(!1),
    [o, s] = (0, z.useState)(!1),
    [c, u] = (0, z.useState)(),
    d = (0, z.useRef)(void 0),
    f = Z(),
    p = A(() => f.GetScrollableWidthPX()),
    m = A(() => f.GetVisualWindowStartPX()),
    h = A(() => f.GetScrollWindowWidth()),
    g = A(() => f.GetScrollWindowOffset()),
    _ = A(() => f.GetTimelineMarginWidth()),
    v = z.useMemo(() => {
      if (d.current) {
        let e = m - g - _;
        return Gi(l(c + e, 0, p));
      }
      return Gi(0);
    }, [_, c, g, m, p]),
    ee = z.useMemo(() => {
      if (d.current) {
        let e = d.current.getBoundingClientRect(),
          t = p > h ? g : e.x;
        return Ki(l(c - t, 0, h));
      }
      return Ki(0);
    }, [c, g, h, p]),
    y = (0, z.useCallback)(
      (e, t) => (
        d.current && d.current.addEventListener(e, t),
        () => d.current?.removeEventListener(e, t)
      ),
      [],
    ),
    b = (0, z.useCallback)(() => r(!0), []),
    te = (0, z.useCallback)(() => r(!1), []),
    ne = (0, z.useCallback)((e) => u(e.clientX), []),
    x = (0, z.useCallback)((e) => a(!0), []),
    re = (0, z.useCallback)((e) => a(!1), []);
  (0, z.useEffect)(() => {
    let e = fe(d.current);
    return (
      e.addEventListener(`mousemove`, ne),
      () => e.removeEventListener(`mousemove`, ne)
    );
  }, [ne]);
  let ie = (0, z.useMemo)(
    () => ({
      bContainerFocus: i,
      bInContainer: n,
      nMouseClientXPX: c,
      globalMouseXPX: v,
      scrollWindowMouseXPX: ee,
      fnRegisterMouseEvent: y,
      bContextMenuOpen: o,
      setContextMenuOpen: s,
    }),
    [i, n, o, c, v, ee, y],
  );
  return (0, G.jsx)(rs.Provider, {
    value: ie,
    children: (0, G.jsx)(`div`, {
      ref: d,
      onMouseOver: x,
      onFocus: x,
      onMouseOut: re,
      onBlur: re,
      onMouseEnter: b,
      onMouseLeave: te,
      className: ns,
      children: t,
    }),
  });
}
function as() {
  return (0, z.useContext)(rs);
}
function os() {
  return as().globalMouseXPX;
}
function ss() {
  return as().scrollWindowMouseXPX;
}
function cs() {
  return as().bInContainer;
}
function ls() {
  return as().bContainerFocus;
}
function us() {
  let e = as();
  return [e.bContextMenuOpen, e.setContextMenuOpen];
}
function ds(e, t) {
  let n = as().fnRegisterMouseEvent,
    r = (0, z.useRef)(void 0),
    i = (0, z.useCallback)(() => {
      r.current = n(e, t);
    }, [n, t, e]),
    a = (0, z.useCallback)(() => {
      r.current && r.current();
    }, []);
  (0, z.useEffect)(() => (i(), () => a()), [i, a]);
}
function fs() {
  let e = Z(),
    t = q(),
    n = io(),
    r = A(() => !t.ShouldModeShowClipControls()),
    i = Hn(),
    { onMarkerCreated: a, onNavigateToClip: o } = Ro(),
    [s, c] = us();
  return z.useCallback(
    (s, l, u, d) =>
      r || i
        ? null
        : _e(
            (0, G.jsx)(ps, {
              isCurrentPlayback: u,
              nGlobalOffsetMS: l,
              playbackCoordinator: t,
              timelineView: e,
              fnSetSelectionClipRange: n,
              onMarkerCreated: a,
              onNavigateToClip: o,
              onContextMenuOpenChange: c,
            }),
            s,
            d,
          ),
    [r, i, t, e, n, a, o, c],
  );
}
function ps(e) {
  let {
      playbackCoordinator: t,
      timelineView: n,
      nGlobalOffsetMS: r,
      fnSetSelectionClipRange: i,
      isCurrentPlayback: a,
      onMarkerCreated: o,
      onNavigateToClip: s,
      onContextMenuOpenChange: c,
    } = e,
    l = A(() => t.GetClipsAtGlobalMS(r)),
    u = ms(n);
  (0, z.useEffect)(() => (c(!0), () => c(!1)), [c]);
  let d = (() => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(r.valMS);
      if (!e) return null;
      let i = t.GetLoader().GetTimelineData(e);
      if (!i) return null;
      let a = T(i.m_rgPhases, (e) => n.valMS - parseInt(e.time));
      if (a < 0) return null;
      let o = i.m_rgPhases[a];
      return n.valMS >= parseInt(o.time) &&
        n.valMS <= parseInt(o.time) + parseInt(o.duration)
        ? { strTimelineID: e, phase: o }
        : null;
    })(),
    f = (e) => {
      (t.AddUserMarkerAtGlobalMS(
        r,
        `/GameRecording/AddMarker/TimelineCtxMenu`,
        (t, n) => {
          o && o(t, n, e);
        },
      ),
        t.SetPlaytimeFromGlobalMS(r),
        t.FocusGlobalMS(r));
    },
    p = () => {
      (i(t, 4, r, void 0), t.SetPlaytimeFromGlobalMS(r), t.FocusGlobalMS(r));
    },
    m = () => {
      (i(t, 4, void 0, r), t.SetPlaytimeFromGlobalMS(r), t.FocusGlobalMS(r));
    },
    h = () => {
      l.length > 0 &&
        (H.ReportTrackedAction(
          `/GameRecording/Tooltip/ViewClip/TimelineCtxMenu`,
        ),
        s && s(l[0].strClipID));
    },
    g = () => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(r.valMS);
      (t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(e),
        Rn(t.GetGameID(), e, n, t.GetClipID()));
    },
    _ = () => {
      if (!d) return;
      let { phase: e, strTimelineID: n } = d;
      ts(t.GetGameID(), n, parseInt(e.time), parseInt(e.duration));
    },
    v = (e) => n.SetPhaseToHighlight(e);
  return (
    (0, z.useEffect)(() => () => n.SetPhaseToHighlight(null), [n]),
    (0, G.jsxs)(Ce, {
      refInstance: u,
      children: [
        (0, G.jsx)(D, {
          onSelected: f,
          className: qo,
          children: (0, G.jsxs)(`div`, {
            className: b(Jo, Yo),
            children: [
              (0, G.jsx)(ut, {}),
              k(
                a
                  ? `#Playback_UserSelectionControls_AddUserMarker`
                  : `#TimelineDialog_AddMarker`,
              ),
            ],
          }),
        }),
        (0, G.jsx)(D, {
          onSelected: g,
          className: qo,
          children: (0, G.jsxs)(`div`, {
            className: b(Jo, Xo),
            children: [
              (0, G.jsx)(Lt, {}),
              k(
                a
                  ? `#Playback_UserSelectionControls_TakeScreenshot`
                  : `#TimelineDialog_TakeScreenshot`,
              ),
            ],
          }),
        }),
        (0, G.jsx)(D, {
          onSelected: p,
          className: qo,
          children: (0, G.jsxs)(`div`, {
            className: b(Jo, Zo),
            children: [
              (0, G.jsx)(ot, { direction: `left` }),
              k(
                a
                  ? `#Playback_UserSelectionControls_SetClipStart`
                  : `#TimelineContext_SetClipStart`,
              ),
            ],
          }),
        }),
        (0, G.jsx)(D, {
          onSelected: m,
          className: qo,
          children: (0, G.jsxs)(`div`, {
            className: b(Jo, Zo),
            children: [
              (0, G.jsx)(ot, { direction: `right` }),
              k(
                a
                  ? `#Playback_UserSelectionControls_SetClipEnd`
                  : `#TimelineContext_SetClipEnd`,
              ),
            ],
          }),
        }),
        !!d &&
          (0, G.jsx)(D, {
            onSelected: _,
            className: `YwXy-p3jOGA-`,
            onMouseOver: () => v([d.strTimelineID, d.phase.time]),
            onMouseLeave: () => v(null),
            children: (0, G.jsxs)(`div`, {
              className: b(`DYV4-rbHkCQ-`, `cTZ4oCV0rfc-`),
              children: [(0, G.jsx)(Rt, {}), k(`#TimelineDialog_ClipPhase`)],
            }),
          }),
        l.length > 0 &&
          (0, G.jsx)(D, {
            onSelected: h,
            className: `YwXy-p3jOGA-`,
            children: (0, G.jsxs)(`div`, {
              className: b(`DYV4-rbHkCQ-`, `opmNw-e94ys-`),
              children: [(0, G.jsx)(ye, {}), k(`#TimelineDialog_ViewClip`)],
            }),
          }),
      ],
    })
  );
}
function ms(e) {
  let t = A(() => e.GetAutoScrollPauseTimeout()),
    n = A(() => e.GetVisualWindowStartPX()),
    r = (0, z.useRef)(void 0),
    i = (0, z.useRef)(void 0);
  return (
    (0, z.useEffect)(() => {
      r.current && i.current ? i.current.Hide() : (r.current = !0);
    }, [n]),
    (0, z.useEffect)(() => {
      e.SetAutoScrollPaused(!0);
    }, [e]),
    (0, z.useEffect)(() => {
      t && e.ClearAutoScrollPauseTimeout();
    }, [t, e]),
    i
  );
}
function hs() {
  let e = Z(),
    t = q(),
    { setSelectedMarker: n } = to(),
    r = ro(),
    { onNavigateToClip: i, onNavigateToScreenshot: a } = Ro(),
    o = Hn(),
    s = A(() => !t.ShouldModeShowClipControls());
  return z.useCallback(
    (c, l, u) => {
      s ||
        _e(
          (0, G.jsx)(gs, {
            markerInfo: l,
            playbackCoordinator: t,
            timelineView: e,
            setSelectedMarker: n,
            onNavigateToClip: i,
            onNavigateToScreenshot: a,
            bLowDiskSpace: o,
            clearRange: r,
          }),
          c,
          u,
        );
    },
    [s, o, t, e, n, i, a, r],
  );
}
function gs(e) {
  let {
      playbackCoordinator: t,
      timelineView: n,
      markerInfo: r,
      setSelectedMarker: i,
      clearRange: a,
      bLowDiskSpace: o,
      onNavigateToClip: s,
      onNavigateToScreenshot: c,
    } = e,
    l = A(() => n.ConvertGlobalMSToClipOrNone(r.nGlobalMS.valMS)),
    u = A(() =>
      t.ConvertGlobaOffsetToRecordingAndRelativeOffset(r.nGlobalMS.valMS),
    ),
    d = ms(n),
    f = (e) => {
      let n = _s,
        a = vs;
      Ni(r.entry) && ((n = 0), (a = parseInt(r.entry.duration)));
      let [o, s] = t
        .GetLoader()
        .CreateGlobalRangeForTimeline(r.strTimelineID, r.nGlobalMS.valMS, n, a);
      (t.SetPlaytimeFromGlobalMS(U(o)),
        i?.(r.entry.id, r.strTimelineID, o, s),
        H.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/ClipFromHighlight`,
        ),
        e.stopPropagation());
    },
    p = () => {
      l &&
        (H.ReportTrackedAction(
          `/GameRecording/MarkerCtxMenu/ViewClip/${r.entry.type}`,
        ),
        s && s(l.clipID));
    },
    m = (e) => {
      if (!Li(r.entry)) return;
      H.ReportTrackedAction(
        `/GameRecording/HighlightCtxMenu/Marker/Edit/${r.entry.type}`,
      );
      let n = (0, G.jsx)(Ko, {
        entry: r.entry,
        playbackCoordinator: t,
        fnClearSelection: a,
        strTimelineID: r.strTimelineID,
      });
      (Le(n, E(e)), e.stopPropagation(), e.preventDefault());
    },
    h = (e) => {
      Li(r.entry) &&
        (H.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/Marker/Delete/${r.entry.type}`,
        ),
        t.RemoveUserMarker(r.strTimelineID, r.entry.id));
    },
    g = () => {
      Ri(r.entry) &&
        r.entry?.handle &&
        (H.ReportTrackedAction(`/GameRecording/HighlightCtxMenu/Screenshot`),
        c(n.GetGameID(), r.entry.handle));
    },
    _ = [];
  return (
    Li(r.entry) &&
      _.push(
        (0, G.jsx)(
          D,
          {
            onSelected: m,
            className: zo,
            children: (0, G.jsxs)(`div`, {
              className: b(Bo, Vo),
              children: [(0, G.jsx)(Ct, {}), k(`#Marker_Action_Edit`)],
            }),
          },
          `edit`,
        ),
      ),
    u?.strRecordingID &&
      !o &&
      _.push(
        (0, G.jsx)(
          D,
          {
            onSelected: f,
            className: zo,
            children: (0, G.jsxs)(`div`, {
              className: b(Bo, Ho),
              children: [(0, G.jsx)(st, {}), k(`#TimelineDialog_ClipVideo`)],
            }),
          },
          `clip`,
        ),
      ),
    Ri(r.entry) &&
      _.push(
        (0, G.jsx)(
          D,
          {
            onSelected: g,
            className: zo,
            children: (0, G.jsxs)(`div`, {
              className: b(Bo, Wo),
              children: [
                (0, G.jsx)(_t, {}),
                k(`#TimelineDialog_ViewScreenshot`),
              ],
            }),
          },
          `view_screenshot`,
        ),
      ),
    l &&
      p &&
      _.push(
        (0, G.jsx)(
          D,
          {
            onSelected: p,
            className: zo,
            children: (0, G.jsxs)(`div`, {
              className: b(Bo, Go),
              children: [(0, G.jsx)(It, {}), k(`#TimelineDialog_ViewClip`)],
            }),
          },
          `view_clip`,
        ),
      ),
    Li(r.entry) &&
      _.push(
        (0, G.jsx)(
          D,
          {
            onSelected: h,
            className: zo,
            children: (0, G.jsxs)(`div`, {
              className: b(Bo, Uo),
              children: [(0, G.jsx)(He, {}), k(`#Marker_Action_Delete`)],
            }),
          },
          `delete`,
        ),
      ),
    _.length ? (0, G.jsx)(Ce, { refInstance: d, children: _ }) : null
  );
}
var _s = 5e3,
  vs = 3e3,
  ys = 5e3;
function bs(e) {
  let {
      markerInfo: t,
      view: n,
      coordinator: r,
      gameID: i,
      clipID: a,
      timelineID: o,
      faded: s,
    } = e,
    c = t.nGlobalMS,
    l = A(() => n.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
    u = A(() => {
      let e = n.GetThumbnailComponent();
      return e && e !== Y.Highlight;
    }),
    d = hs(),
    { selectedMarker: f } = to(),
    p = t.entry?.id == f?.strEntryID && t.strTimelineID == f?.strTimelineID,
    { ref: m, ...h } = Ss(n, t),
    g = z.useCallback(
      (e) => {
        let i = c.valMS - ys,
          a = n.FindTimelineOffsets(o),
          s = Math.max(i, a.globalOffsetMS);
        (r.SetPlaytimeFromGlobalMS(U(s)),
          r.SetDisplayHighlightEntry(t.entry),
          e.stopPropagation(),
          H.ReportTrackedAction(`/GameRecording/Marker/Click/${t.entry.type}`));
      },
      [r, c.valMS, o, n, t],
    ),
    _ = (e) => {
      (d(e, t, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 }),
        e.stopPropagation());
    },
    v = { transform: `translateX( calc( ${l}px - 50% ))` };
  return (0, G.jsxs)(`div`, {
    className: b(Ao, u && `fKVXzdV7f4k-`, s && `NF7Pk6zJyl4-`),
    style: v,
    ref: m,
    onContextMenu: _,
    ...h,
    children: [
      (0, G.jsx)(
        `div`,
        {
          className: b(jo),
          children: (0, G.jsx)(
            ba,
            {
              classNames: Mo,
              entry: t.entry,
              strMarkerIcon: t.strMarkerIcon,
              faded: s,
              onClick: g,
              bSelectedMarker: p,
            },
            t.entry.id,
          ),
        },
        c.valMS,
      ),
      (0, G.jsx)(`div`, {
        className: No,
        children: (0, G.jsx)(`div`, { className: b(Po) }),
      }),
    ],
  });
}
var xs = 150;
function Ss(e, t) {
  let n = z.useRef(void 0),
    r = z.useRef(void 0),
    i = z.useCallback(
      (t) => {
        if (!n.current) return;
        let i = n.current.getBoundingClientRect();
        if (t.clientY >= i.top && t.clientY <= i.bottom) {
          if (i.left - t.clientX > 1 || t.clientX - i.right > 1) {
            (e.SetThumbnailComponent(null),
              r.current && r.current(),
              (r.current = null));
            return;
          }
          return;
        }
        let a = i.left + 0.5 * i.width;
        (t.clientX < a - xs || t.clientX > a + xs) &&
          (e.SetThumbnailComponent(null),
          r.current && r.current(),
          (r.current = null));
      },
      [e],
    ),
    a = z.useCallback(
      (n) => {
        if (
          (e.SetThumbnailComponent(Y.Highlight),
          e.SetThumbnailEntry(t),
          !r.current)
        ) {
          let e = E(n);
          (e.addEventListener(`mousemove`, i),
            (r.current = () => e.removeEventListener(`mousemove`, i)));
        }
        n.stopPropagation();
      },
      [i, t, e],
    ),
    o = z.useCallback(
      (t) => {
        let i = n.current.getBoundingClientRect(),
          a = i.left,
          o = i.right;
        t.clientX - a < 1 || o - t.clientX < 1
          ? (e.SetThumbnailComponent(null),
            r.current && r.current(),
            (r.current = null))
          : (de(n.current, t.relatedTarget) ||
              (t.clientY - i.top > 1 &&
                i.bottom - t.clientY > 1 &&
                t.clientX - i.left > 1 &&
                i.right - t.clientX > 1 &&
                (e.SetThumbnailComponent(null),
                r.current && r.current(),
                (r.current = null))),
            t.stopPropagation());
      },
      [e],
    );
  return (
    z.useEffect(() => () => r.current && r.current(), []),
    { ref: n, onMouseOver: a, onMouseLeave: o }
  );
}
var Cs = 16;
function ws(e) {
  switch (e.type) {
    case `achievement`:
      return 9e3;
    default:
      return e.priority;
  }
}
var Ts = z.memo(function (e) {
    let t = Z(),
      n = A(() => t.GetVisibleTimelines());
    return (0, G.jsx)(G.Fragment, {
      children: n.map((e) => (0, G.jsx)(Os, { timeline: e }, e.timelineID)),
    });
  }),
  Es = { screenshot: 0, event: 0, achievement: 1, usermarker: 2 };
function Ds(e, t) {
  if (Es[e.type] !== Es[t.type]) return Es[t.type] - Es[e.type];
  let n = ws(e),
    r = ws(t);
  return n == r
    ? e.time == t.time
      ? e.id.localeCompare(t.id)
      : parseInt(e.time) - parseInt(t.time)
    : r - n;
}
var Os = z.memo(function (e) {
  let { timeline: t } = e,
    n = Z(),
    r = q(),
    i = A(() => n.GetVisibleTimelineHighlights(t.timelineID) || [])
      .slice()
      .sort(Ds),
    a = A(() => n.GetTimelineOffsetMS(t.timelineID)),
    o = t.globalOffsetMS - a,
    s = r.GetGameID(),
    c = r.GetClipID(),
    l = new Io(n.GetCurrentZoomScale() * Cs);
  return i.map((e, i) => {
    if (As(e) !== `highlight`) return null;
    let a = `${e.type}_${e.id}_${t.timelineID}_${i}`,
      u = ks(t.timelineID, o, e),
      d = l.BAllowIcon(u.nGlobalMS.valMS);
    return (0, G.jsx)(
      bs,
      {
        gameID: s,
        clipID: c,
        view: n,
        coordinator: r,
        faded: !d,
        timelineID: t.timelineID,
        markerInfo: u,
      },
      a,
    );
  });
});
function ks(e, t, n) {
  if (
    ![`event`, `usermarker`, `screenshot`, `achievement`, `error`].includes(
      n.type,
    )
  )
    return (
      F(
        `Unexpected timeline entry type ${n.type}, returning empty highlight marker`,
      ),
      null
    );
  let r = n,
    i = Fi(r);
  return {
    entry: r,
    strMarkerIcon: i ? `steam_achievement` : r.icon,
    nMarkerPriority: ws(r),
    strTimelineID: e,
    strTitle: (!i && r.title) || ``,
    strDescription: (!i && r.description) || ``,
    nGlobalMS: U(parseInt(r.time) + t),
  };
}
function As(e) {
  switch (e.type) {
    case `usermarker`:
    case `achievement`:
    case `screenshot`:
    case `error`:
      return `highlight`;
    case `event`:
      return parseInt(e.duration) > 0 ? `range_highlight` : `highlight`;
    default:
      return `none`;
  }
}
var js = `-X0PMxvY3QE-`,
  Ms = `cbzcIa1ocN4-`,
  Ns = `MMJtgRs0Os4-`,
  Ps = `m6U62VPiE5I-`,
  Fs = `KT1NiRNa2wQ-`;
function Is(e) {
  let { view: t, entry: n, nGlobalEntryEndMS: r, nGlobalTLStartMS: i } = e,
    a = q(),
    o = U(parseInt(n.time) + i.valMS),
    s = A(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(o.valMS),
        n = t.GetVirtualWindowStartPX();
      return n < e ? e : n;
    }),
    c = A(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(r.valMS),
        n = t.GetVirtualWindowEndPX();
      return n < e ? n : e;
    }),
    l = !!a.GetClipID(),
    u = { transform: `translateX( ${s}px )`, width: c - s },
    d = b({
      [Fs]: n.mode === Ai.Invalid,
      [Ns]: n.mode === Ai.Staging,
      [Ps]: n.mode === Ai.Menus,
      [Ms]: n.mode === Ai.Playing,
    });
  return (0, G.jsx)(
    `div`,
    { className: b(js, d, l && `dM-k3XLATgY-`), style: u },
    n.id,
  );
}
var Ls = z.memo(function (e) {
    let t = Z(),
      n = A(() => t.GetVisibleTimelines());
    return (0, G.jsx)(G.Fragment, {
      children: n.map((e) => (0, G.jsx)(Rs, { timeline: e }, e.timelineID)),
    });
  }),
  Rs = z.memo(function (e) {
    let { timelineID: t, globalOffsetMS: n, nDurationMS: r } = e.timeline,
      i = Z(),
      a = A(() => {
        let e = i.GetVisibleTimelineGameModes(t);
        return !e || e.length === 0
          ? [{ time: `0`, type: `gamemode`, mode: Ai.Invalid, id: `synthetic` }]
          : e;
      }),
      o = U(n + r),
      s = n - i.GetTimelineOffsetMS(t),
      c = [];
    for (let e = 0; e < a.length; e++) {
      let n = U(e < a.length - 1 ? parseInt(a[e + 1].time) + s : o.valMS - 1);
      c.push(
        (0, G.jsx)(
          Is,
          {
            view: i,
            entry: a[e],
            nGlobalEntryEndMS: n,
            nGlobalTLStartMS: U(s),
          },
          `gameMode_${t}_${e}`,
        ),
      );
    }
    return (0, G.jsx)(G.Fragment, { children: c });
  }),
  zs = `XVi5a5ZkmMc-`,
  Bs = `-nn0AHNIP3k-`,
  Vs = `-IpQtGedcoc-`,
  Hs = `LsIeUCU634s-`,
  Us = `QNUH0lZ0VfY-`,
  Ws = `wQLCIzL88LU-`,
  Gs = `JtIym43tUFo-`,
  Ks = `a23JQkVm40o-`,
  qs = 500,
  Js = (0, z.memo)(function (e) {
    let t = q(),
      n = A(() => t.GetHidePlayer()),
      [r, i] = (0, z.useState)({ bDragActive: !1, bPausedOnDragStart: !1 }),
      a = Z(),
      o = A(() => {
        if (
          a.GetAutoScrollPaused() ||
          a.BReachedMaxScroll() ||
          a.BReachedMinScroll() ||
          t.BIsVideoElementPaused()
        )
          return !1;
        let e = t.GetGlobalMSPlaytime();
        return (
          a.ConvertGlobalMSToGlobalPXOffset(e.valMS) <
          a.GetMaxScrollLeftPX() + 0.5 * a.GetScrollWindowWidth()
        );
      });
    return n
      ? (0, G.jsx)(Xs, { setDragActive: i })
      : o
        ? (0, G.jsx)(Ys, { view: a, setDragActive: i })
        : (0, G.jsx)(Zs, { dragState: r, setDragActive: i });
  });
function Ys(e) {
  let { view: t, setDragActive: n } = e,
    r = A(() => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2);
  return (0, G.jsx)(rc, {
    playheadPosition: r,
    children: (0, G.jsx)(Qs, { setDragActive: n, bDragActive: !1 }),
  });
}
var Xs = (0, z.memo)(function (e) {
    let { setDragActive: t } = e,
      n = Z(),
      r = A(() => n.GetScrollableWidthPX()),
      i = ue(100),
      a = (0, z.useCallback)(
        (e) => {
          n.GetAutoScrollPaused() || i(() => n.ScrollToOffset(e));
        },
        [i, n],
      );
    return (
      (0, z.useEffect)(() => n.ScrollToEnd(), [n]),
      (0, z.useEffect)(() => a(r), [r, a]),
      (0, G.jsx)(rc, {
        playheadPosition: r,
        children: (0, G.jsx)(Qs, { setDragActive: t, bDragActive: !1 }),
      })
    );
  }),
  Zs = (0, z.memo)(function (e) {
    let { dragState: t, setDragActive: n } = e,
      { bDragActive: r, bPausedOnDragStart: i } = t,
      a = q(),
      o = Z(),
      s = os(),
      c = tc(ss(), o, r, s, a);
    return (
      (0, z.useEffect)(() => {
        if (!r) return;
        o.SetThumbnailPosition(c);
        let e = o.ConvertPXOffsetToGlobalMS(c, !1);
        if (!e) return;
        let t = a.GetLiveEdgeMS();
        a.SetPlaytimeFromGlobalMS(t.valMS < e ? t : U(e), i, !0, !0);
      }, [c, i, r, a, o]),
      (0, G.jsx)(`div`, {
        className: b(Us, r && `FOu6nwXsE7c-`),
        children: (0, G.jsx)(rc, {
          className: r ? Gs : void 0,
          playheadPosition: c,
          children: (0, G.jsx)(Qs, { setDragActive: n, bDragActive: r }),
        }),
      })
    );
  }),
  Qs = (0, z.memo)(function (e) {
    let { setDragActive: t, bDragActive: n } = e,
      r = Z(),
      i = (e) => {
        (n || r.SetThumbnailComponent(Y.Playhead), e.stopPropagation());
      },
      a = (e) => {
        (n || r.SetThumbnailComponent(null), e.stopPropagation());
      };
    return (0, G.jsx)(`div`, {
      className: Ks,
      onMouseOver: i,
      onMouseOut: a,
      onFocus: i,
      onBlur: a,
      children: (0, G.jsx)($s, { setDragActive: t }),
    });
  }),
  $s = z.memo(function (e) {
    let { setDragActive: t } = e,
      n = q(),
      r = fs(),
      i = Z(),
      a = A(() => {
        let e = i.GetThumbnailComponent();
        return e === Y.RangeLeft || e === Y.RangeRight;
      }),
      o = (0, z.useCallback)(
        (e) => {
          if (e.button != 0) return;
          let r = E(e),
            a,
            o,
            s = () => {
              let e = n.GetGameRecordingVideo().IsPaused();
              (t({ bDragActive: !0, bPausedOnDragStart: e }),
                i.SetThumbnailComponent(Y.Playhead),
                a());
            };
          (r.addEventListener(`mousemove`, s),
            (a = () => r.removeEventListener(`mousemove`, s)));
          let c = () => {
            (t({ bDragActive: !1, bPausedOnDragStart: !1 }),
              i.SetThumbnailComponent(null),
              a(),
              o());
          };
          (r.addEventListener(`mouseup`, c),
            (o = () => r.removeEventListener(`mouseup`, c)));
        },
        [n, t, i],
      ),
      s = (0, z.useCallback)(
        (e) => {
          let t = n.GetGlobalMSPlaytime();
          (r(e, t, !0, {
            bDisableMouseOverlay: !0,
            bForcePopup: !0,
            bAlwaysOnTop: !0,
          }),
            e.stopPropagation(),
            e.preventDefault());
        },
        [n, r],
      );
    return (0, G.jsx)(`div`, {
      className: b(Hs, a && `Twzqk-0-bXc-`),
      onMouseDown: o,
      onContextMenu: s,
      children: (0, G.jsx)(ec, {}),
    });
  });
function ec(e) {
  return (0, G.jsxs)(`svg`, {
    ...e,
    width: `12`,
    height: `32`,
    viewBox: `0 0 12 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, G.jsx)(`rect`, {
        x: `5`,
        y: `4`,
        width: `2`,
        height: `40`,
        fill: `currentColor`,
      }),
      (0, G.jsx)(`path`, {
        d: `M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function tc(e, t, n, r, i) {
  let a = (0, z.useRef)(void 0),
    o = A(() => t.GetScrollableWidthPX()),
    s = A(() => t.GetScrollWindowWidth()),
    [c, u] = (0, z.useState)(0),
    d = (0, z.useRef)(void 0),
    f = (0, z.useRef)(void 0),
    { clearPlaybackAnimation: p, startPlaybackAnimation: m } = nc(i, t, u);
  (0, z.useEffect)(
    () => () => {
      (d.current &&
        (cancelAnimationFrame(d.current),
        (d.current = null),
        (f.current = null)),
        p());
    },
    [p],
  );
  let h = z.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (u(l(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(d.current),
          (d.current = null),
          (f.current = null));
      else {
        if (
          ((d.current &&= requestAnimationFrame((e) => h(e, t, n, r, i))),
          f.current)
        ) {
          let n = ((e - f.current) / qs) * r;
          (t.ScrollBy(n), u((e) => l(e + n, 0, t.GetScrollableWidthPX())));
        }
        f.current = e;
      }
    },
    [u],
  );
  return (
    (0, z.useEffect)(() => {
      let i = s * (1 - Gu),
        c = s * Gu;
      if (
        (d.current &&
          (cancelAnimationFrame(d.current),
          (d.current = null),
          (f.current = null)),
        !n)
      )
        m();
      else if ((p(), e.valPX < c && !t.BReachedMinScroll())) {
        if (e.valPX <= a.current) {
          let n = e.valPX - c,
            r = l(Math.abs(n / c), 0, 1) * n;
          d.current = requestAnimationFrame((n) =>
            h(n, t, e.valPX, r, t.BReachedMinScroll),
          );
        }
        a.current = e.valPX;
      } else if (e.valPX > i && !t.BReachedMaxScroll()) {
        if (e.valPX >= a.current) {
          let n = e.valPX - i,
            r = l(Math.abs(n / (s - i)), 0, 1) * n;
          d.current = requestAnimationFrame((n) =>
            h(n, t, e.valPX, r, t.BReachedMaxScroll),
          );
        }
        a.current = e.valPX;
      } else u(l(r.valPX, 0, o));
    }, [n, p, r.valPX, s, o, h, e.valPX, m, t]),
    c
  );
}
function nc(e, t, n) {
  let r = (0, z.useRef)(void 0),
    i = e.GetGameRecordingVideo(),
    a = (0, z.useRef)(void 0),
    o = (0, z.useRef)(void 0),
    s = (0, z.useRef)(void 0),
    c = (0, z.useRef)(void 0),
    l = (0, z.useCallback)(() => {
      if (!r.current) return;
      let u = e.GetGlobalMSPlaytime();
      if (u.valMS >= 0) {
        let e = i.BVideoElementPlaying(),
          r = i.GetVideoElementCurrentTime(),
          l = t.GetScrollableWidthPX(),
          d = t.GetCurrentZoomScale();
        if (a.current !== u.valMS || (c.current && c.current != d)) {
          let e = t.ConvertGlobalMSToGlobalPXOffset(u.valMS),
            r = Math.min(l, e);
          (n(r), (s.current = r));
        } else if (
          a.current &&
          a.current === u.valMS &&
          r &&
          o.current &&
          o.current !== r &&
          e
        ) {
          let e = a.current + (r - o.current) * 1e3,
            i = t.ConvertGlobalMSToGlobalPXOffset(e);
          (s.current && s.current < i && n(Math.min(l, i)), (s.current = i));
        }
        (e || ((o.current = null), (a.current = u.valMS)),
          e &&
            a.current !== u.valMS &&
            ((o.current = r), (a.current = u.valMS)),
          (c.current = d));
      }
      r.current = requestAnimationFrame(l);
    }, [e, n, t, i]);
  return {
    clearPlaybackAnimation: (0, z.useCallback)(() => {
      (r.current && cancelAnimationFrame(r.current),
        (r.current = null),
        (a.current = null),
        (o.current = null),
        (s.current = null));
    }, []),
    startPlaybackAnimation: (0, z.useCallback)(() => {
      r.current ||= requestAnimationFrame(l);
    }, [l]),
  };
}
function rc(e) {
  let { className: t, playheadPosition: n, children: r } = e;
  return (0, G.jsx)(`div`, {
    className: b(Ws, t),
    style: { transform: `translateX( calc(${n}px - 50% ))` },
    children: r,
  });
}
var ic = h({
    AddMarker: () => Ic,
    Button: () => Fc,
    CreateClipButton: () => Rc,
    DeleteMarker: () => Bc,
    Description: () => vc,
    DescriptionBlock: () => gc,
    Duration: () => Jc,
    EditMarker: () => zc,
    GoToClip: () => Lc,
    GoToClipFromMarker: () => Vc,
    Header: () => mc,
    Hide: () => cc,
    Highlight: () => Ec,
    Icon: () => hc,
    ImageAndInfoBoxContainer: () => lc,
    ImageContainer: () => uc,
    ImageHighlightBlock: () => Kc,
    ImageHighlightPosition: () => Gc,
    InfoBoxContainer: () => pc,
    NoRecordedContent: () => fc,
    Overlay: () => bc,
    Playhead: () => Oc,
    RangeIcon: () => Yc,
    RangeLeft: () => kc,
    RangeRight: () => Ac,
    StateDescription: () => Nc,
    ThumbnailContainerOffset: () => oc,
    ThumbnailContents: () => sc,
    ThumbnailHitBoxPadding: () => yc,
    ThumbnailImage: () => dc,
    ThumbnailTooltip: () => Tc,
    TimeDisplayContainer: () => Dc,
    Timestamp: () => jc,
    Title: () => _c,
    TooltipButtons: () => Pc,
    TooltipChildren: () => Sc,
    TooltipContainer: () => Wc,
    TooltipContents: () => xc,
    TooltipHitBox: () => Uc,
    TooltipImage: () => Cc,
    TooltipImageCtn: () => wc,
    TooltipInteractionRegion: () => Mc,
    TooltipOffset: () => ac,
    TooltipRangeContainer: () => qc,
    ViewScreenshot: () => Hc,
    default: () => Xc,
    thumbnailWidth: () => `320`,
  }),
  ac = `M-05lIt-Rm8-`,
  oc = `demzX-Fs4-4-`,
  sc = `NcHGwBV4SNQ-`,
  cc = `ap-Q4oooopI-`,
  lc = `_9zxrJRU-CaI-`,
  uc = `eQvnQVTk-sI-`,
  dc = `tN6d6cDs7Do-`,
  fc = `B0nXthAtEI8-`,
  pc = `KxFaAst23zY-`,
  mc = `aiwhhTjZ6Pk-`,
  hc = `_9HkA8d7x9kg-`,
  gc = `wCw8FA-GNZw-`,
  _c = `_3-l3Dnlgyfo-`,
  vc = `_00G4k2IDvBQ-`,
  yc = `UYDbMZ6G3WU-`,
  bc = `RAeRf-oNWq8-`,
  xc = `Vc6eo-Q-cRw-`,
  Sc = `u2eqeMJHtic-`,
  Cc = `_-6Xh-VqwYeg-`,
  wc = `TkM9nyNO0Xs-`,
  Tc = `mdK6jpS4jRU-`,
  Ec = `VrSRUKXDErM-`,
  Dc = `PYo3kx2RfSs-`,
  Oc = `_1UvMCudnsIs-`,
  kc = `vx9pJ002RM0-`,
  Ac = `BgeUu9u9wW8-`,
  jc = `qP9-v-34gEw-`,
  Mc = `VTDf1a6CPQI-`,
  Nc = `iHtJ7ZAsX5A-`,
  Pc = `k9NX76-rrPo-`,
  Fc = `zB0JoG7vSrU-`,
  Ic = `Qmw3lo2yg3Y-`,
  Lc = `lzzqqN6opQo-`,
  Rc = `NcXSUT9Wrrk-`,
  zc = `h-9-LkDvmE4-`,
  Bc = `ZtdjDDcQX4Q-`,
  Vc = `ncTrqKkwHVg-`,
  Hc = `WaQJkS8Zl-8-`,
  Uc = `a2muS1tYn9s-`,
  Wc = `_8PD3oDSkC5Y-`,
  Gc = `BmRL3GyDFyw-`,
  Kc = `_1k7fgO2abtE-`,
  qc = `E9tORfFSTjw-`,
  Jc = `HjxSSeO2NmQ-`,
  Yc = `zjZlS00iLU4-`,
  Xc = {
    thumbnailWidth: `320`,
    TooltipOffset: ac,
    ThumbnailContainerOffset: oc,
    ThumbnailContents: sc,
    Hide: cc,
    ImageAndInfoBoxContainer: lc,
    ImageContainer: uc,
    ThumbnailImage: dc,
    NoRecordedContent: fc,
    InfoBoxContainer: pc,
    Header: mc,
    Icon: hc,
    DescriptionBlock: gc,
    Title: _c,
    Description: vc,
    ThumbnailHitBoxPadding: yc,
    Overlay: bc,
    TooltipContents: xc,
    TooltipChildren: Sc,
    TooltipImage: Cc,
    TooltipImageCtn: wc,
    ThumbnailTooltip: Tc,
    Highlight: Ec,
    TimeDisplayContainer: Dc,
    Playhead: Oc,
    RangeLeft: kc,
    RangeRight: Ac,
    Timestamp: jc,
    TooltipInteractionRegion: Mc,
    StateDescription: Nc,
    TooltipButtons: Pc,
    Button: Fc,
    AddMarker: Ic,
    GoToClip: Lc,
    CreateClipButton: Rc,
    EditMarker: zc,
    DeleteMarker: Bc,
    GoToClipFromMarker: Vc,
    ViewScreenshot: Hc,
    TooltipHitBox: Uc,
    TooltipContainer: Wc,
    ImageHighlightPosition: Gc,
    ImageHighlightBlock: Kc,
    TooltipRangeContainer: qc,
    Duration: Jc,
    RangeIcon: Yc,
  };
function Zc(e, t) {
  return (
    e.strRecordingID === t.strRecordingID &&
    e.strClipID === t.strClipID &&
    e.nRecordingOffsetMS === t.nRecordingOffsetMS &&
    e.nRecordingStartOffsetMS === t.nRecordingStartOffsetMS &&
    e.cPxMajorAxis === t.cPxMajorAxis &&
    e.bPreciseTiming == t.bPreciseTiming
  );
}
var Qc = class e {
  k_QueueWaitUntilRequestMS = 10;
  k_nMaxBatchSize = 50;
  m_nMaxCacheSize = 18e5 / Yi;
  m_LRUTrackerSet = new Set();
  m_mapPromises = new Map();
  m_mapThumbnailImages = new Map();
  m_rgPendingRequest = [];
  m_PendingInfoPromise;
  m_PendingInfoResolve = void 0;
  m_PendingTimer = void 0;
  k_AlreadyResolvedOK = Promise.resolve(!0);
  m_rgThumbnailPerf = [];
  constructor() {
    Ke(this);
  }
  AddPerfMeasure(e) {
    this.m_rgThumbnailPerf.push(e);
  }
  GetPerfMeasures() {
    if (!this.m_rgThumbnailPerf.length) return null;
    let e = this.m_rgThumbnailPerf.length,
      t = this.m_rgThumbnailPerf.reduce((e, t) => e + t) / e;
    return {
      nMean: t,
      nStdDev: Math.sqrt(
        this.m_rgThumbnailPerf
          .map((e) => (e - t) ** 2)
          .reduce((e, t) => e + t) / e,
      ),
      nMax: Math.max(...this.m_rgThumbnailPerf),
      nMin: Math.min(...this.m_rgThumbnailPerf),
      nLength: e,
      nLastVal: this.m_rgThumbnailPerf[e - 1],
    };
  }
  GetKey(e, t, n, r, i, a, o) {
    let s = i + r;
    return `${e}_${t}_${n}_${o ? s : s - (s % Yi)}_${a}_${o}`;
  }
  GetThumbnailData(e) {
    let t = this.m_mapThumbnailImages.get(e);
    return (
      t &&
        (this.m_LRUTrackerSet.has(e) && this.m_LRUTrackerSet.delete(e),
        this.m_LRUTrackerSet.add(e)),
      t
    );
  }
  SetThumbnailData(e, t) {
    if (
      (this.m_LRUTrackerSet.has(e) && this.m_LRUTrackerSet.delete(e),
      this.m_LRUTrackerSet.add(e),
      this.m_mapThumbnailImages.set(e, t),
      this.m_LRUTrackerSet.size >= this.m_nMaxCacheSize)
    ) {
      let e = this.m_LRUTrackerSet.keys().next().value;
      (this.m_LRUTrackerSet.delete(e), this.m_mapThumbnailImages.delete(e));
    }
  }
  ClearThumbnailData() {
    (this.m_LRUTrackerSet.clear(), this.m_mapThumbnailImages.clear());
  }
  GetThumbnail(e, t, n, r, i, a, o) {
    if (!t) return;
    let s = this.GetKey(e, t, n, r, i, a, o);
    return this.GetThumbnailData(s);
  }
  GetOrQueueThumbnail(t, n, r, i, a, o, s) {
    if (!n) return;
    let c = this.GetKey(t, n, r, i, a, o, s),
      l = this.GetThumbnailData(c);
    if (!l) {
      let u = `thumbnail_${t}_${o}_${s}`;
      (performance.mark(u),
        this.QueueThumbnailRequest(t, n, r, i, a, o, s).then(() => {
          try {
            let t = performance.measure(`measure_${u}`, u);
            t && e.Get().AddPerfMeasure(t.duration);
          } catch (e) {
            F(`CThumbnailCache:: cant measure ${u}, error: ${e}`);
          }
        }),
        (l = this.GetThumbnailData(c)));
    }
    return l;
  }
  QueueThumbnailRequest(e, t, n, r, i, a, o) {
    let s = this.GetKey(e, t, n, r, i, a, o),
      c = this.GetThumbnailData(s);
    if (c && (c.data || c.bIsLoading)) return this.k_AlreadyResolvedOK;
    (this.SetThumbnailData(s, { data: null, bIsLoading: !0 }),
      this.m_PendingInfoPromise &&
        (this.m_rgPendingRequest[0].strRecordingID != t ||
          this.m_rgPendingRequest.length > this.k_nMaxBatchSize) &&
        (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
        this.FlushPendingInfo()),
      (this.m_PendingInfoPromise &&
        this.m_rgPendingRequest[0].strRecordingID == t) ||
        ((this.m_PendingInfoPromise = new Promise(
          (e) => (this.m_PendingInfoResolve = e),
        )),
        (this.m_PendingTimer = window.setTimeout(
          () => this.FlushPendingInfo(),
          this.k_QueueWaitUntilRequestMS,
        ))));
    let l = {
      gameID: e,
      strRecordingID: t,
      strClipID: n,
      nRecordingOffsetMS: r,
      nRecordingStartOffsetMS: i,
      cPxMajorAxis: a,
      bPreciseTiming: o,
    };
    return (
      this.m_rgPendingRequest.some((e) => Zc(e, l)) ||
        (this.m_rgPendingRequest.push(l),
        this.m_mapPromises.set(s, this.m_PendingInfoPromise)),
      this.m_PendingInfoPromise
    );
  }
  async FlushPendingInfo() {
    if (this.m_PendingInfoResolve === void 0) return;
    let e = this.m_PendingInfoResolve,
      t = this.m_rgPendingRequest;
    ((this.m_PendingInfoPromise = void 0),
      (this.m_PendingInfoResolve = void 0),
      (this.m_rgPendingRequest = []),
      (this.m_PendingTimer = void 0),
      await this.InternalLoadMultipleThumbnails(t),
      e());
  }
  async InternalLoadMultipleThumbnails(e) {
    e.sort((e, t) => e.nRecordingOffsetMS - t.nRecordingOffsetMS);
    try {
      let n = e.map((e) => e.nRecordingOffsetMS * 1e3),
        r = await Fn(
          e[0].strRecordingID,
          e[0].strClipID,
          void 0,
          n,
          e[0].cPxMajorAxis,
          e[0].bPreciseTiming,
        );
      t(
        r?.length == n.length,
        `CThumbnailCache.InternalLoadMultipleThumbnails request ${n.length} and got back ${r?.length}`,
      );
      for (let t = 0; t < n.length && t < r?.length; ++t) {
        let n = e[t],
          i = this.GetKey(
            n.gameID,
            n.strRecordingID,
            n.strClipID,
            n.nRecordingOffsetMS,
            n.nRecordingStartOffsetMS,
            n.cPxMajorAxis,
            n.bPreciseTiming,
          ),
          a = r ? r[t].image_data() : null;
        this.SetThumbnailData(i, { data: a, bIsLoading: !1 });
      }
    } catch (t) {
      I(`Failed to load multiple request thumbnails`, t);
      for (let t = 0; t < e.length; ++t) {
        let n = e[t],
          r = this.GetKey(
            n.gameID,
            n.strRecordingID,
            n.strClipID,
            n.nRecordingOffsetMS,
            n.nRecordingStartOffsetMS,
            n.cPxMajorAxis,
            e[0].bPreciseTiming,
          );
        this.SetThumbnailData(r, { data: null, bIsLoading: !1 });
      }
    }
  }
  async LoadThumbnail(e, t, n, r, i, a, o) {
    let s = this.GetKey(e, t, n, r, i, a, o),
      c = this.GetThumbnailData(s);
    return c && c.data
      ? !0
      : (this.m_mapPromises.has(s) ||
          this.m_mapPromises.set(
            s,
            this.InternalLoadThumbnail(e, t, n, r, i, a, o),
          ),
        this.m_mapPromises.get(s));
  }
  async InternalLoadThumbnail(e, t, n, r, i, a, o) {
    let s = this.GetKey(e, t, n, r, i, a, o);
    try {
      let e = await Fn(t, n, void 0, [r * 1e3], a, o);
      if (e?.length > 0) {
        let t = e ? e[0].image_data() : null;
        return (this.SetThumbnailData(s, { data: t, bIsLoading: !1 }), !0);
      }
      pn(`ThumbnailImage: got empty jpeg ${e.length} list back ${t} @ ${r}`);
    } catch (e) {
      (I(`ThumbnailImage: Fail to load thumbnail ${t} @ ${r} with ${e}`),
        this.SetThumbnailData(s, { data: null, bIsLoading: !1 }));
    }
    return !1;
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
};
v([M], Qc.prototype, `m_mapThumbnailImages`, void 0);
function $c(e) {
  let t = (0, z.useRef)(null),
    n = pe(),
    r = Ye(`useThumbnailAsURL`);
  return (
    (0, z.useEffect)(() => {
      if (e && !r?.token?.reason) {
        let r = new Blob([e], { type: `image/jpeg` }),
          i = URL.createObjectURL(r);
        ((t.current = i), n());
      }
      return () => {
        t.current &&= (URL.revokeObjectURL(t.current), void 0);
      };
    }, [r?.token?.reason, e, n]),
    t.current
  );
}
function el(e, t, n, r, i, a, o) {
  return $c(A(() => Qc.Get().GetOrQueueThumbnail(e, n, t, r, i, a, o))?.data);
}
var tl = 320,
  nl = z.forwardRef(function (e, t) {
    let { globalMS: n, children: r, imgClassName: i, className: a, ...o } = e,
      s = q(),
      c = s.GetGameID(),
      l = s.GetClipID(),
      u = A(() => s.GetRecordingMode()),
      d = A(() => s.ConvertGlobaOffsetToRecordingAndRelativeOffset(n));
    no();
    let f = d?.nRecordingOffsetMS,
      p = el(c, l, d?.strRecordingID, f, d?.nStartOffsetMS, tl, !1),
      [m, h] = (0, z.useState)();
    return (
      (0, z.useEffect)(() => {
        p && h(p);
      }, [p]),
      (0, G.jsxs)(`div`, {
        ref: t,
        className: b(oc, ic[u], a),
        ...o,
        children: [
          (0, G.jsxs)(`div`, {
            className: b(sc, d?.strRecordingID && !m && `ap-Q4oooopI-`, ic[u]),
            children: [
              (0, G.jsx)(`div`, {
                className: lc,
                children: (0, G.jsxs)(`div`, {
                  className: uc,
                  children: [
                    d?.strRecordingID
                      ? (0, G.jsx)(`img`, { className: dc, src: m })
                      : (0, G.jsx)(`div`, {
                          className: fc,
                          children: k(`#GameRecording_PlayerNoContent`),
                        }),
                    (0, G.jsx)(rl, {}),
                  ],
                }),
              }),
              (0, G.jsx)(`div`, { className: b(Sc), children: r }),
            ],
          }),
          (0, G.jsx)(`div`, { className: b(yc) }),
        ],
      })
    );
  });
function rl() {
  let e = Z(),
    t = A(() => e.GetGameID()),
    n = A(() => e.GetThumbnailComponent()),
    r = A(() => e.GetThumbnailEntry());
  if (!r || n !== Y.Highlight) return null;
  if (Fi(r.entry))
    return (0, G.jsx)(il, {
      thumbnailEntry: r,
      achievementEntry: r.entry,
      strGameID: t,
    });
  let i = ``,
    a = ``;
  return (
    Ii(r.entry)
      ? (a = k(r.entry.description) || `#GameRecording_UnknownError`)
      : Li(r.entry)
        ? ((i = r.entry.title ? r.entry.title : k(`#Marker_UserMarker_Title`)),
          (a = r.entry.description || ``))
        : Pi(r.entry) &&
          ((i = r.entry.title || ``), (a = r.entry.description || ``)),
    !i && !a
      ? null
      : (0, G.jsx)(al, { title: i, description: a, thumbnailEntry: r })
  );
}
function il(e) {
  let { strGameID: t, thumbnailEntry: n, achievementEntry: r } = e,
    i = Bn(new qi(t).GetAppID(), r.achievement_name);
  return i
    ? (0, G.jsx)(al, {
        title: i.name ?? ``,
        description: i.description ?? ``,
        thumbnailEntry: n,
      })
    : null;
}
function al(e) {
  let { title: t, description: n, thumbnailEntry: r } = e;
  return (0, G.jsxs)(`div`, {
    className: pc,
    children: [
      (0, G.jsxs)(`div`, {
        className: mc,
        children: [
          (0, G.jsx)(`div`, {
            className: hc,
            children: (0, G.jsx)(xa, {
              entry: r.entry,
              strMarkerIcon: r.strMarkerIcon,
            }),
          }),
          t && (0, G.jsx)(`div`, { className: `_3-l3Dnlgyfo-`, children: t }),
        ],
      }),
      (0, G.jsx)(`div`, {
        className: gc,
        children:
          n && (0, G.jsx)(`div`, { className: `_00G4k2IDvBQ-`, children: n }),
      }),
    ],
  });
}
var ol = z.forwardRef(function (e, t) {
  let { globalPX: n, onMouseEnter: r, onMouseLeave: i } = e,
    a = Z(),
    o = A(() => a.ConvertPXOffsetToGlobalMS(n, !1)),
    s = A(() => a.GetThumbnailComponent()),
    c = q(),
    l = A(() => c.GetRecordingMode());
  return (0, G.jsxs)(nl, {
    className: b(Tc, ic[l], ic[s]),
    globalMS: o,
    ref: t,
    onMouseEnter: r,
    onMouseLeave: i,
    children: [
      (0, G.jsx)(ll, { globalMS: o }),
      (0, G.jsx)(sl, { globalMS: o }),
      (0, G.jsxs)(`div`, {
        className: Mc,
        children: [
          s === Y.Highlight
            ? (0, G.jsx)(ul, {})
            : (0, G.jsx)(dl, { globalPX: n }),
          (0, G.jsx)(fl, { globalMS: o }),
        ],
      }),
    ],
  });
});
function sl(e) {
  let { globalMS: t } = e,
    n = Z(),
    r = A(() => n.GetStateDescriptionAtGlobalMS(t));
  return r?.title
    ? (0, G.jsx)(`div`, { className: Nc, children: r.title })
    : null;
}
function cl(e, t) {
  return e.priority - t.priority;
}
function ll(e) {
  let { globalMS: t } = e,
    { setSelectedMarker: n } = to(),
    r = Z(),
    i = q(),
    a = A(() => r.FindRangeEventsAtGlobalMS(t)),
    o = a.length > 3 ? a.sort(cl).slice(0, 3) : a,
    s = (e, r) => {
      let a = parseInt(r.duration),
        { nTimelineOffsetMS: o, strTimelineID: s } =
          i.ConvertGlobalOffsetToTimelineRelativeOffset(t),
        c = t - o.valMS + parseInt(r.time),
        [l, u] = i.GetLoader().CreateGlobalRangeForTimeline(s, c, 0, a);
      (i.SetPlaytimeFromGlobalMS(U(l)),
        n?.(r.id, s, l, u),
        H.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromRangeEvent`),
        e.stopPropagation());
    };
  return (0, G.jsx)(G.Fragment, {
    children: o.map((e, t) =>
      (0, G.jsxs)(
        `div`,
        {
          className: qc,
          onClick: (t) => s(t, e),
          children: [
            e.icon &&
              (0, G.jsx)(Da, {
                gameID: i.GetGameID(),
                icon: e.icon,
                className: `zjZlS00iLU4-`,
              }),
            (0, G.jsx)(`div`, { className: _c, children: e.title }),
            (0, G.jsx)(`div`, {
              className: Jc,
              children: Ee(parseInt(e.duration) / 1e3, !1),
            }),
          ],
        },
        `${e.time}_${t}`,
      ),
    ),
  });
}
function ul() {
  let e = q(),
    t = A(() => e.GetRecordingMode()),
    n = Z(),
    r = A(() => n.GetThumbnailEntry());
  if (!r) return null;
  let i = n.GetTimelineOffsetMS(r.strTimelineID),
    a = Wi(parseInt(r.entry.time) - i),
    o = e.MakeRelativeToTimelineEndIfActive(r.strTimelineID, a.valMS),
    s = ``;
  if (Ni(r.entry)) {
    let e = o + parseInt(r.entry.duration);
    if (o < 0) {
      let t = Ee(Math.abs(o / 1e3), !1, !1),
        n = Ee(Math.abs(e / 1e3), !1, !1);
      s = k(`#Duration_WrittenNegation`, t + ` - ` + n);
    } else {
      let t = Ee(o / 1e3, !1, !1),
        n = Ee(e / 1e3, !1, !1);
      s = t + ` - ` + n;
    }
  } else s = Ee(o / 1e3, !1, !0);
  return (0, G.jsx)(`div`, { className: b(Dc, Ec, ic[t]), children: s });
}
function dl(e) {
  let { globalPX: t } = e,
    n = Z(),
    r = A(() => n.ConvertPXToTimelineRelativeMS(t, `end-if-active`));
  return r
    ? (0, G.jsx)(`div`, { className: Dc, children: Ee(r / 1e3, !1, !0) })
    : null;
}
function fl(e) {
  let { globalMS: t } = e,
    n = Z(),
    r = A(() => n.GetGameID()),
    i = A(() => n.GetThumbnailComponent()),
    a = A(() => n.GetThumbnailEntry()),
    o = [
      (0, G.jsx)(vl, { globalMS: t }, `add_marker`),
      (0, G.jsx)(yl, { globalMS: t }, `view_clip`),
    ];
  return (
    i == Y.Highlight &&
      a &&
      (Ii(a.entry) || Fi(a.entry) || Pi(a.entry)
        ? (o = [
            (0, G.jsx)(pl, { markerInfo: a }, `create_marker_clip`),
            (0, G.jsx)(ml, { markerInfo: a }, `view_clip`),
          ])
        : Ri(a.entry)
          ? (o = [
              (0, G.jsx)(pl, { markerInfo: a }, `create_marker_clip`),
              (0, G.jsx)(_l, { entry: a.entry, gameID: r }, `view_screen`),
              (0, G.jsx)(ml, { markerInfo: a }, `view_clip`),
            ])
          : Li(a.entry) &&
            (o = [
              (0, G.jsx)(gl, { markerInfo: a }, `edit_user`),
              (0, G.jsx)(pl, { markerInfo: a }, `create_marker_clip`),
              (0, G.jsx)(hl, { markerInfo: a }, `delete_user`),
              (0, G.jsx)(ml, { markerInfo: a }, `view_clip`),
            ])),
    (0, G.jsx)(`div`, { className: Pc, children: o })
  );
}
function pl(e) {
  let { setSelectedMarker: t } = to(),
    { markerInfo: n } = e,
    r = q(),
    i = A(() => r.ShouldModeShowClipControls()),
    a = A(() =>
      r.ConvertGlobaOffsetToRecordingAndRelativeOffset(n.nGlobalMS.valMS),
    ),
    o = Hn(),
    s = ao();
  return !a?.strRecordingID || !i
    ? null
    : (0, G.jsx)(O, {
        toolTipContent: k(
          o ? `#RecordingState_Clip_LowDiskSpace` : `#TimelineDialog_ClipVideo`,
        ),
        direction: `top`,
        bTopmost: !0,
        children: (0, G.jsx)(`div`, {
          className: b(Fc, Rc),
          onClick: (e) => {
            let i = _s,
              a = vs;
            Ni(n.entry) && ((i = 0), (a = parseInt(n.entry.duration)));
            let [o, c] = r
              .GetLoader()
              .CreateGlobalRangeForTimeline(
                n.strTimelineID,
                n.nGlobalMS.valMS,
                i,
                a,
              );
            (r.SetPlaytimeFromGlobalMS(U(o)),
              t?.(n.entry.id, n.strTimelineID, o, c),
              s(),
              H.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromHighlight`),
              e.stopPropagation());
          },
          children: (0, G.jsx)(st, {}),
        }),
      });
}
function ml(e) {
  let { markerInfo: t } = e,
    n = Z(),
    r = A(() => n.ConvertGlobalMSToClipOrNone(t.nGlobalMS.valMS)),
    { onNavigateToClip: i } = Ro();
  return r
    ? (0, G.jsx)(O, {
        toolTipContent: k(`#TimelineDialog_ViewClip`),
        direction: `top`,
        bTopmost: !0,
        children: (0, G.jsx)(`div`, {
          className: b(Fc, Vc),
          onClick: () => {
            r &&
              (H.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/${t.entry.type}`,
              ),
              i(r.clipID));
          },
          children: (0, G.jsx)(ye, {}),
        }),
      })
    : null;
}
function hl(e) {
  let { markerInfo: t } = e,
    n = q(),
    r = Z();
  return (0, G.jsx)(O, {
    toolTipContent: k(`#Marker_Action_Delete`),
    direction: `top`,
    bTopmost: !0,
    children: (0, G.jsx)(`div`, {
      className: b(Fc, Bc),
      onClick: (e) => {
        Li(t.entry) &&
          (H.ReportTrackedAction(
            `/GameRecording/Marker/Delete/${t.entry.type}`,
          ),
          n.RemoveUserMarker(t.strTimelineID, t.entry.id),
          r.SetThumbnailComponent(null));
      },
      children: (0, G.jsx)(He, {}),
    }),
  });
}
function gl(e) {
  let { markerInfo: t } = e,
    n = q(),
    r = ro();
  return (0, G.jsx)(O, {
    toolTipContent: k(`#Marker_Action_Edit`),
    direction: `top`,
    bTopmost: !0,
    children: (0, G.jsx)(`div`, {
      className: b(Fc, zc),
      onClick: (e) => {
        if (!Li(t.entry)) return;
        H.ReportTrackedAction(`/GameRecording/Marker/Edit/${t.entry.type}`);
        let i = (0, G.jsx)(Ko, {
          entry: t.entry,
          playbackCoordinator: n,
          fnClearSelection: r,
          strTimelineID: t.strTimelineID,
        });
        (Le(i, E(e)), e.stopPropagation(), e.preventDefault());
      },
      children: (0, G.jsx)(Ct, {}),
    }),
  });
}
function _l(e) {
  let { entry: t, gameID: n } = e,
    r = t.handle,
    { onNavigateToScreenshot: i } = Ro();
  return (0, G.jsx)(O, {
    toolTipContent: k(`#TimelineDialog_ViewScreenshot`),
    direction: `top`,
    bTopmost: !0,
    children: (0, G.jsx)(`div`, {
      className: b(Fc, Hc),
      onClick: () => {
        r &&
          (H.ReportTrackedAction(`/GameRecording/Tooltip/Screenshot`), i(n, r));
      },
      children: (0, G.jsx)(_t, {}),
    }),
  });
}
function vl(e) {
  let { globalMS: t } = e,
    n = q();
  return A(() => n.ConvertGlobaOffsetToRecordingAndRelativeOffset(t))
    ?.strRecordingID
    ? (0, G.jsx)(O, {
        toolTipContent: k(`#TimelineDialog_AddMarker`),
        direction: `top`,
        children: (0, G.jsx)(`div`, {
          className: b(Fc, Ic),
          onClick: () => {
            (n.AddUserMarkerAtGlobalMS(
              U(t),
              `/GameRecording/AddMarker/Thumbnail`,
              null,
            ),
              n.SetPlaytimeFromGlobalMS(U(t)));
          },
          children: (0, G.jsx)(ut, {}),
        }),
      })
    : null;
}
function yl(e) {
  let { globalMS: t } = e,
    n = Z(),
    r = A(() => n.ConvertGlobalMSToClipOrNone(t)),
    { onNavigateToClip: i } = Ro();
  return r
    ? (0, G.jsx)(O, {
        toolTipContent: k(`#TimelineDialog_ViewClip`),
        direction: `top`,
        children: (0, G.jsx)(`div`, {
          className: b(Fc, Lc),
          onClick: () => {
            r &&
              (H.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/timeline`,
              ),
              i(r.clipID));
          },
          children: (0, G.jsx)(ye, {}),
        }),
      })
    : null;
}
var bl = z.memo(function (e) {
    let t = as(),
      n = ls(),
      r = Z(),
      i = q(),
      a = fs(),
      o = (0, z.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            a = l(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(a, !1);
          o && i.SetPlaytimeFromGlobalMS(U(o), void 0, void 0, !0);
        },
        [n, i, r],
      ),
      s = (0, z.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            i = l(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(i, !1);
          o &&
            (a(e, U(o), !1, {
              bDisableMouseOverlay: !0,
              bForcePopup: !0,
              bAlwaysOnTop: !0,
            }),
            e.preventDefault(),
            e.stopPropagation());
        },
        [n, r, a],
      );
    return (
      ds(`click`, o),
      ds(`contextmenu`, s),
      (0, G.jsx)(xl, { globalMouseXPX: t.globalMouseXPX.valPX || 0 })
    );
  }),
  xl = z.memo(function (e) {
    let { globalMouseXPX: t } = e,
      n = cs(),
      r = Z(),
      i = ls(),
      a = A(() => {
        if (r.GetThumbnailComponent()) return r.GetThumbnailPosition();
      }),
      [o, s] = (0, z.useState)(),
      [c, l] = (0, z.useState)();
    return (
      (0, z.useEffect)(() => {
        isNaN(a) ? !c && n && s(t) : s(a);
      }, [c, n, i, t, a]),
      (0, G.jsx)(`div`, {
        className: zs,
        style: { transform: `translateX( calc(${o}px - 50%))` },
        children: (0, G.jsx)(Sl, {
          globalPX: o,
          setInteractingWithThumbnail: l,
          bInteractingWithThumbnail: c,
        }),
      })
    );
  });
function Sl(e) {
  let {
      globalPX: t,
      setInteractingWithThumbnail: n,
      bInteractingWithThumbnail: r,
    } = e,
    i = Z(),
    a = q(),
    o = A(() => a.GetRecordingMode() === `Overlay`),
    s = A(() => i.ConvertPXOffsetToGlobalMS(t, !1)),
    c = A(() => i.GetTimelineParentCtnRef()),
    l = (0, z.useRef)(void 0),
    u = (0, z.useRef)(void 0),
    d = (0, z.useRef)(void 0),
    f = A(() => i.GetThumbnailComponent()),
    p = ls(),
    m = Me({
      toolTipContent: (0, G.jsx)(ol, {
        globalPX: t,
        ref: l,
        onMouseEnter: () => n(!0),
        onMouseLeave: (e) => n(!1),
      }),
      direction: o ? `bottom` : `top`,
      nDelayShowMS: 0,
      nBodyDistance: 0,
      nAllowOffscreenPx: 0,
    }),
    { setHovered: h, setTarget: g } = m.stateHandlers,
    _ = (0, z.useCallback)(() => {
      (h(!1),
        n(!1),
        d.current && d.current(),
        (d.current = null),
        i.GetAutoScrollPaused() && i.SetAutoScrollPauseTimeout(),
        i.SetThumbnailComponent(null));
    }, [n, h, i]),
    v = (0, z.useCallback)(
      (e, t) => {
        if (!u.current || !l.current) return;
        let n = u.current.getBoundingClientRect(),
          r = n.left,
          i = n.right,
          a = n.top,
          s = n.bottom;
        if (l.current) {
          let e = l.current.getBoundingClientRect();
          o ? (s = e.bottom) : (a = e.top);
        }
        (e <= r || e >= i || t <= a || t >= s) && _();
      },
      [o, _],
    ),
    ee = (0, z.useCallback)(
      (e) => {
        let t = i.GetThumbnailComponent();
        (t && t !== Y.Highlight) || v(e.clientX, e.clientY);
      },
      [v, i],
    ),
    y = (0, z.useCallback)(
      (e) => {
        v(e.clientX, e.clientY);
      },
      [v],
    );
  (ds(
    `mouseenter`,
    (0, z.useCallback)(() => {
      (h(!0), g(u.current));
      let e = fe(u.current);
      e &&
        !d.current &&
        (e.addEventListener(`mousemove`, ee),
        e.addEventListener(`mouseup`, y),
        (d.current = () => {
          (e.removeEventListener(`mousemove`, ee),
            e.removeEventListener(`mouseup`, y));
        }));
    }, [ee, y, h, g]),
  ),
    (0, z.useEffect)(() => {
      let e = (e) => {
        let t = i.GetThumbnailComponent();
        (t && t === Y.Playhead) ||
          t === Y.RangeLeft ||
          t === Y.RangeRight ||
          (l.current && !de(l.current, e.relatedTarget) && _());
      };
      return (
        c && c.addEventListener(`mouseleave`, e),
        () => c && c.removeEventListener(`mouseleave`, e)
      );
    }, [_, c, i]),
    (0, z.useEffect)(() => _, [_]));
  let te = (p || r) && s && !f;
  return (0, G.jsxs)(`div`, {
    ref: u,
    className: Bs,
    children: [
      (0, G.jsx)(ec, { className: b(Vs, te && `_52Luj95k6TU-`) }),
      !!s && m.tooltip,
    ],
  });
}
var Cl = `hmHZe5aDrq8-`,
  wl = `VE-8JY5P2Qo-`,
  Tl = `bvHF-aIx6oc-`,
  El = `EFP0lnhKJeo-`,
  Dl = `MkCCKg4MUdU-`,
  Ol = `_1xOfco9qmxw-`,
  kl = `fXvcT3pVP7Q-`,
  Al = `_2ytscAh4R6M-`,
  jl = 500,
  Ml = (0, z.memo)(function () {
    let [e, t] = (0, z.useState)(`none`),
      n = Qa(),
      r = Xa(),
      i = Za();
    return !n || !r || !i
      ? null
      : (0, G.jsx)(`div`, {
          className: Cl,
          children: (0, G.jsx)(Nl, {
            activeControlState: e,
            setActiveControlState: t,
          }),
        });
  }),
  Nl = (0, z.memo)(function (e) {
    let { activeControlState: t, setActiveControlState: n } = e,
      [r, i] = (0, z.useState)(),
      [a, o] = (0, z.useState)(),
      s = Xa(),
      c = Za(),
      l = Z(),
      u = A(() => l.ConvertGlobalMSToGlobalPXOffset(s.valMS)),
      d = A(() => l.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
      f = (0, z.useCallback)(
        (e) => {
          (i(e), l.SetAutoScrollPauseTimeout());
        },
        [l],
      ),
      p = (0, z.useCallback)(
        (e) => {
          (o(e), l.SetAutoScrollPauseTimeout());
        },
        [l],
      ),
      m = (0, z.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      ),
      h = (0, z.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      );
    return (0, G.jsx)(`div`, {
      className: b(wl, t !== `none` && `r9kdAFASyBY-`),
      onMouseOver: m,
      onMouseOut: h,
      onFocus: m,
      onBlur: h,
      children: (0, G.jsxs)(`div`, {
        className: Ol,
        children: [
          (0, G.jsx)(Il, {
            isActive: t === `left`,
            setControlState: n,
            setRangeControlPX: f,
            pxOffset: r,
          }),
          (0, G.jsx)(Hl, {
            startOffsetPX: (t === `left` && r) || u,
            endOffsetPX: (t === `right` && a) || d,
            className: El,
          }),
          (0, G.jsx)(Rl, {
            isActive: t === `right`,
            setControlState: n,
            setRangeControlPX: p,
            pxOffset: a,
          }),
        ],
      }),
    });
  });
function Pl(e, t, n) {
  let r = t.GetVisualWindowStartPX() - t.GetTimelineMarginWidth(),
    i = r + t.GetVisualWidth(),
    a = Math.max(0, r + 3),
    o = Math.min(t.GetScrollableWidthPX(), i - 3);
  n(l(e, a, o));
}
function Fl(e, t, n, r, i, a) {
  let o = (0, z.useRef)(void 0),
    s = (0, z.useRef)(!1),
    c = (0, z.useRef)(void 0),
    u = (0, z.useRef)(void 0),
    d = A(() => t.GetScrollableWidthPX()),
    f = A(() => t.GetScrollWindowWidth());
  (0, z.useEffect)(
    () => () => {
      c.current &&
        (cancelAnimationFrame(c.current),
        (c.current = null),
        (u.current = null));
    },
    [],
  );
  let p = z.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (a(l(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(c.current),
          (c.current = null),
          (u.current = null));
      else {
        if (
          ((c.current &&= requestAnimationFrame((e) => p(e, t, n, r, i))),
          u.current)
        ) {
          let n = ((e - u.current) / jl) * r;
          (t.ScrollBy(n), a((e) => l(e + n, 0, t.GetScrollableWidthPX())));
        }
        u.current = e;
      }
    },
    [a],
  );
  (0, z.useEffect)(() => {
    c.current &&
      (cancelAnimationFrame(c.current), (c.current = null), (u.current = null));
    let m = f * (1 - Gu),
      h = f * Gu,
      g = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      _ = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (r.valPX > g) (a(g), i(`right`), t.SetThumbnailComponent(Y.RangeRight));
    else {
      if (e.valPX < h && !t.BReachedMinScroll()) {
        if (e.valPX > o.current) s.current = !0;
        else if (e.valPX < o.current || !s.current) {
          let n = Math.min(h, _),
            r = e.valPX - n,
            i = l(Math.abs(r / n), 0, 1) * r;
          ((c.current = requestAnimationFrame((n) =>
            p(n, t, e.valPX, i, t.BReachedMinScroll),
          )),
            (s.current = !1));
        }
        Pl(r.valPX, t, a);
      } else if (e.valPX > m && _ > m && !t.BReachedMaxScroll()) {
        if (e.valPX < o.current) s.current = !0;
        else if (e.valPX > o.current || !s.current) {
          let r = (e) => {
              let t = e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
              return e.BReachedMaxScroll() || t <= m;
            },
            i = e.valPX - m,
            a = l(Math.abs(i / (f - m)), 0, 1) * i;
          ((c.current = requestAnimationFrame((n) => p(n, t, e.valPX, a, r))),
            (s.current = !1));
        }
        Pl(r.valPX, t, a);
      } else a(l(r.valPX, 0, d));
      o.current = e.valPX;
    }
  }, [r.valPX, n.valMS, e.valPX, i, t, a, d, p, f]);
}
var Il = (0, z.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = Xa();
  return t
    ? (0, G.jsx)(Ll, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, G.jsx)(Vl, {
        offsetMS: a.valMS,
        direction: `left`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function Ll(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = $a(),
    a = Za(),
    o = Z(),
    s = os();
  return (
    Fl(ss(), o, a, s, t, n),
    (0, z.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, U(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, G.jsx)(Ul, { offsetPX: r, direction: `left` })
  );
}
var Rl = (0, z.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = Za();
  return t
    ? (0, G.jsx)(zl, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, G.jsx)(Vl, {
        offsetMS: a.valMS,
        direction: `right`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function zl(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = eo(),
    a = Xa(),
    o = Z(),
    s = os();
  return (
    Bl(ss(), o, a, s, t, n),
    (0, z.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, U(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, G.jsx)(Ul, { offsetPX: r, direction: `right` })
  );
}
function Bl(e, t, n, r, i, a) {
  let o = (0, z.useRef)(void 0),
    s = (0, z.useRef)(!1),
    c = (0, z.useRef)(void 0),
    u = (0, z.useRef)(void 0),
    d = A(() => t.GetScrollableWidthPX()),
    f = A(() => t.GetScrollWindowWidth());
  (0, z.useEffect)(
    () => () => {
      c.current &&
        (cancelAnimationFrame(c.current),
        (c.current = null),
        (u.current = null));
    },
    [],
  );
  let p = z.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (a(l(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(c.current),
          (c.current = null),
          (u.current = null));
      else {
        if (
          ((c.current &&= requestAnimationFrame((e) => p(e, t, n, r, i))),
          u.current)
        ) {
          let n = ((e - u.current) / jl) * r;
          (t.ScrollBy(n), a((e) => l(e + n, 0, t.GetScrollableWidthPX())));
        }
        u.current = e;
      }
    },
    [a],
  );
  (0, z.useEffect)(() => {
    c.current &&
      (cancelAnimationFrame(c.current), (c.current = null), (u.current = null));
    let m = f * (1 - Gu),
      h = f * Gu,
      g = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      _ = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (r.valPX < g) (a(g), i(`left`), t.SetThumbnailComponent(Y.RangeLeft));
    else {
      if (e.valPX > m && !t.BReachedMaxScroll()) {
        if (e.valPX < o.current) s.current = !0;
        else if (e.valPX > o.current || !s.current) {
          let n = Math.max(m, _),
            r = e.valPX - n,
            i = l(Math.abs(r / (f - n)), 0, 1) * r;
          ((c.current = requestAnimationFrame((n) =>
            p(n, t, e.valPX, i, t.BReachedMaxScroll),
          )),
            (s.current = !1));
        }
        Pl(r.valPX, t, a);
      } else if (
        e.valPX < h &&
        _ < h &&
        e.valPX <= o.current &&
        !t.BReachedMinScroll()
      ) {
        if (e.valPX > o.current) s.current = !0;
        else if (e.valPX < o.current || !s.current) {
          let r = e.valPX - h,
            i = l(Math.abs(r / h), 0, 1) * r,
            a = (e) =>
              e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS) > h ||
              e.BReachedMinScroll();
          ((c.current = requestAnimationFrame((n) => p(n, t, e.valPX, i, a))),
            (s.current = !1));
        }
        Pl(r.valPX, t, a);
      } else a(l(r.valPX, 0, d));
      o.current = e.valPX;
    }
  }, [n.valMS, e.valPX, i, t, a, d, f, r.valPX, p]);
}
function Vl(e) {
  let {
      offsetMS: t,
      direction: n,
      setControlState: r,
      setRangeControlPX: i,
    } = e,
    a = Z(),
    o = A(() => a.ConvertGlobalMSToGlobalPXOffset(t));
  (0, z.useEffect)(
    () => (
      i(void 0),
      () => {
        i(o);
      }
    ),
    [o, i],
  );
  let s = (0, z.useCallback)(
      (e) => {
        let t = E(e),
          i,
          o,
          s = () => {
            (r(n),
              a.SetThumbnailComponent(
                n === `left` ? Y.RangeLeft : Y.RangeRight,
              ),
              i());
          };
        (t.addEventListener(`mousemove`, s),
          (i = () => t.removeEventListener(`mousemove`, s)));
        let c = () => {
          (r(`none`), a.SetThumbnailComponent(null), i(), o());
        };
        (t.addEventListener(`mouseup`, c),
          (o = () => t.removeEventListener(`mouseup`, c)));
      },
      [n, r, a],
    ),
    c = (e) => {
      a.SetThumbnailComponent(n === `left` ? Y.RangeLeft : Y.RangeRight);
    },
    l = (e) => {
      a.SetThumbnailComponent(null);
    };
  return (0, G.jsx)(`div`, {
    className: Tl,
    onMouseDown: s,
    onMouseOver: c,
    onFocus: c,
    onMouseOut: l,
    onBlur: l,
    children: (0, G.jsx)(Ul, { offsetPX: o, direction: n }),
  });
}
var Hl = (0, z.memo)(function (e) {
    let { startOffsetPX: t, endOffsetPX: n, className: r } = e;
    if (isNaN(t) || isNaN(n)) return null;
    let i = { width: n - t || 0, transform: `translateX(${t}px)` };
    return (0, G.jsx)(`div`, { className: b(Al, r), style: i });
  }),
  Ul = (0, z.memo)(function (e) {
    let { direction: t, offsetPX: n } = e,
      r = { transform: `translateX( calc( ${n}px - 50%) )` },
      i = Z(),
      a = A(() => i.GetThumbnailComponent() === Y.Playhead);
    return (0, G.jsx)(`div`, {
      style: r,
      className: b(kl),
      children: (0, G.jsx)(`div`, {
        className: b(Dl, t === `left` && void 0, a && `o23F9bJf68E-`),
        children: (0, G.jsx)(Wl, { innerFill: `#171d25`, direction: t }),
      }),
    });
  });
function Wl(e) {
  return (0, G.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 3 36`,
    fill: `none`,
    style: { transform: `rotate(${e.direction === `right` ? 180 : 0}deg)` },
    children: [
      (0, G.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 0)`,
      }),
      (0, G.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 10)`,
      }),
      (0, G.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 20)`,
      }),
      (0, G.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 30)`,
      }),
    ],
  });
}
var Gl = `peJfRpya9Fs-`,
  Kl = 100,
  ql = z.memo(function (e) {
    let t = Z(),
      n = A(() => t.GetVisibleWindowRelativeTimelines()),
      r = q().GetRecordingMode(),
      i = [],
      a = ``;
    for (let e of n) {
      let n = t.GetTimeRecorded(e.timelineID),
        r = be(n);
      r != a && (i.push({ timeline: e, strLabel: r }), (a = r));
    }
    for (let e = i.length - 2; e >= 0; e--) {
      let t = i[e];
      i[e + 1].timeline.nVisibleStartPX - t.timeline.nVisibleStartPX >= Kl ||
        i.splice(e, 1);
    }
    return (0, G.jsx)(G.Fragment, {
      children: i.map((e) =>
        (0, G.jsx)(
          Jl,
          {
            startPX: e.timeline.nVisibleStartPX,
            label: e.strLabel,
            recordingMode: r,
          },
          e.timeline.timelineID,
        ),
      ),
    });
  });
function Jl(e) {
  let { label: t, startPX: n, recordingMode: r } = e,
    i = r == oa.Overlay;
  return (0, G.jsx)(`div`, {
    className: b(Gl, i && `r-oc0eIT1Lw-`),
    style: { transform: `translateX(${n}px)` },
    children: t,
  });
}
var Yl = `rpb9NP30tgc-`,
  Xl = `JCH5UEpUzxo-`,
  Zl = (0, z.memo)(function (e) {
    let t = Z(),
      n = A(() => t.GetVisibleRecordings());
    return (0, G.jsx)(G.Fragment, {
      children: n.map((e) =>
        (0, G.jsx)(
          Ql,
          {
            startPX: e.nStartPX,
            endPX: e.nEndPX,
            isActive: e.bIsActive,
            recordingType: e.recordingType,
          },
          e.recordingID,
        ),
      ),
    });
  });
function Ql(e) {
  let { isActive: t, endPX: n, startPX: r, recordingType: i } = e,
    a = { width: n - r || 0, transform: `translateX(${r}px)` },
    o = no(),
    s = i === 4,
    c = i === 2;
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(`div`, {
        className: b(
          Yl,
          s && `xg0PXeGNr6o-`,
          c && `DlYcvPsKhnQ-`,
          o && `pbiBKOrHy28-`,
        ),
        style: a,
      }),
      t && (0, G.jsx)($l, { endPX: n }),
    ],
  });
}
function $l(e) {
  let { endPX: t } = e,
    n = q(),
    r = Z(),
    i = A(() => n.GetRecordingMode() === `Overlay`),
    a = aa(n.GetGameID()),
    o = A(() => n.GetIsLiveEdge() && !n.GetHidePlayer()),
    s = A(() => {
      let e = n.GetLiveEdgeBufferWindowStartMS();
      return r.ConvertGlobalMSToGlobalPXOffset(e.valMS);
    });
  if (!i || a !== ia.BackgroundRecording) return null;
  let c = { width: t - s || 0, transform: `translateX(${s}px)` };
  return (0, G.jsx)(`div`, { className: b(Xl, o && `ObPDU8jrJGI-`), style: c });
}
var eu = `etyWD-mczjA-`,
  tu = (0, z.memo)(function (e) {
    let t = Z(),
      n = A(() => t.GetVisibleClips());
    return (0, G.jsx)(G.Fragment, {
      children: n.map((e) =>
        (0, G.jsx)(
          nu,
          { startPX: e.pxClipStart, endPX: e.pxClipEnd },
          e.clipID,
        ),
      ),
    });
  }),
  nu = (0, z.memo)(function (e) {
    let { endPX: t, startPX: n } = e,
      r = { width: t - n || 0, transform: `translateX(${n}px)` };
    return (0, G.jsx)(`div`, { className: eu, style: r });
  }),
  ru = `r7Pr1Bv8r30-`,
  iu = `V3xSKJyklXQ-`,
  au = `nT24tktVM-s-`,
  ou = `a9purv61CPI-`,
  su = `O-J-KNmIhN8-`,
  cu = `lMpHX8arl8s-`,
  lu = `hMUPhnvIP90-`,
  uu = `M5wPU20T76E-`,
  du = `H3EDFnaZgvI-`,
  fu = `iAKyxjjcF38-`,
  pu = `pEzP-JpCCcQ-`,
  mu = `hBDI48p9XRY-`,
  hu = `PZt-x5Tu8rg-`,
  gu = `_57e4oWLUba0-`,
  _u = `diJRy3nTnTM-`;
function vu() {
  let e = aa(q().GetGameID());
  return e === ia.NotRecording || e === ia.NotRunning
    ? null
    : (0, G.jsx)(yu, {});
}
function yu(e) {
  let t = q(),
    n = A(() => t.GetIsLiveEdge() && !t.GetHidePlayer()),
    r = z.useCallback(() => {
      (t.SetHidePlayer(!1), t.GetGameRecordingVideo().Play());
      let e = t.GetLiveEdgeMS();
      (t.SetPlaytimeFromGlobalMS(e), t.FocusGlobalMS(e));
    }, [t]);
  return (0, G.jsx)(O, {
    className: hu,
    toolTipContent: k(n ? `#Playback_AtLatest` : `#Playback_JumpToLatest`),
    direction: `bottom`,
    children: (0, G.jsx)(Oe, {
      onClick: r,
      className: b(gu, n && `FuL7350j26I-`),
      children: (0, G.jsx)(jt, { className: b(_u) }),
    }),
  });
}
var bu = (0, z.forwardRef)(function (e, t) {
    let n = Z();
    return A(() => !n.BEmpty())
      ? (0, G.jsx)(Su, { ...e, timelineView: n, ref: t })
      : (0, G.jsx)(xu, { ref: t });
  }),
  xu = (0, z.forwardRef)(function (e, t) {
    return (0, G.jsx)(`div`, { ref: t, className: b(iu, e.className) });
  }),
  Su = (0, z.forwardRef)(function (e, t) {
    let n = q(),
      { children: r, className: i, timelineView: a, disableZoom: o } = e,
      [s, c] = (0, z.useState)(),
      l = z.useCallback(
        (e) => {
          let t = e.target.getBoundingClientRect();
          (a.SetScrollWindowOffset(t.x), a.SetScrollWindowWidth(t.width), c(t));
        },
        [a],
      ),
      u = ke(l),
      d = z.useCallback(
        (e) => {
          if (e.ctrlKey && !o) {
            let t = s ? (e.clientX - s.x) / s.width : 0.5;
            e.deltaY > 0
              ? a.ZoomOut(e.deltaY / 100, t)
              : a.ZoomIn(-e.deltaY / 100, t);
          } else a.ScrollBy(e.deltaY);
        },
        [o, s, a],
      );
    return (
      Mu(n, a),
      (0, G.jsxs)(`div`, {
        ref: t,
        onWheel: d,
        onMouseOver: () => a.SetAutoScrollPaused(!0),
        onFocus: () => {},
        onMouseLeave: () => a.SetAutoScrollPauseTimeout(),
        children: [
          (0, G.jsxs)(`div`, {
            className: au,
            children: [
              (0, G.jsxs)(`div`, {
                ref: u,
                className: b(ru, i),
                children: [r, (0, G.jsx)(Cu, { timelineView: a })],
              }),
              n.GetRecordingMode() === oa.Overlay && (0, G.jsx)(vu, {}),
            ],
          }),
          (0, G.jsx)(`div`, {
            className: lu,
            children: !n.GetGamepadMode() && (0, G.jsx)(wu, {}),
          }),
        ],
      })
    );
  });
function Cu(e) {
  let { timelineView: t } = e,
    n = A(() => t.GetVisualWindowStartPX()),
    r = A(() => t.BReachedMaxScroll());
  return (0, G.jsxs)(`div`, {
    className: ou,
    children: [
      (0, G.jsx)(`div`, { className: b(su, n === 0 && `geyoRt0NNcM-`) }),
      (0, G.jsx)(`div`, { className: b(cu, r && `geyoRt0NNcM-`) }),
    ],
  });
}
function wu() {
  let [e, t] = (0, z.useState)({ scrollBarWidth: 0, scrollBarXOffset: 0 }),
    n = z.useCallback((e) => {
      let n = e.target.getBoundingClientRect();
      t({ scrollBarWidth: n.width, scrollBarXOffset: n.x });
    }, []),
    r = Z(),
    i = A(() => r.GetScrollableWidthPX() + 2 * r.GetTimelineMarginWidth()),
    a = A(() => r.GetVisualWidth()),
    o = (0, z.useMemo)(
      () => (a * e.scrollBarWidth) / i || 0,
      [a, e.scrollBarWidth, i],
    ),
    s = ke(n);
  return (0, G.jsxs)(`div`, {
    className: b(
      uu,
      Math.round(o) === Math.round(e.scrollBarWidth) && `cyfpsKb1Pow-`,
    ),
    ref: s,
    children: [
      (0, G.jsx)(Tu, { timelineView: r, scrollSize: e }),
      (0, G.jsx)(Au, {
        scrollSize: e,
        timelineView: r,
        timelineWidth: i,
        thumbWidth: o,
      }),
    ],
  });
}
function Tu(e) {
  let { timelineView: t, scrollSize: n } = e,
    r = q(),
    i = Eu(t, n),
    a = A(() => t.GetTimelineMarginWidth()),
    o = A(() => t.GetScrollableWidthPX()),
    s = (0, z.useCallback)(
      (e) => {
        let t = e + a;
        return l((t * n.scrollBarWidth) / o, 0, n.scrollBarWidth);
      },
      [n.scrollBarWidth, a, o],
    );
  return (0, G.jsxs)(`div`, {
    className: du,
    ...i,
    children: [
      (0, G.jsx)(Du, {
        timelineView: t,
        playbackCoordinator: r,
        fnConvertGlobalPXToTrackPX: s,
        scrollBarWidth: n.scrollBarWidth,
      }),
      (0, G.jsx)(ku, { timelineView: t, fnConvertGlobalPXToTrackPX: s }),
    ],
  });
}
function Eu(e, t) {
  let n = (0, z.useRef)(void 0),
    r = (0, z.useRef)(void 0),
    i = A(() => e.GetScrollableWidthPX()),
    a = (0, z.useCallback)(
      (e) => Gi((i * e) / t.scrollBarWidth),
      [t.scrollBarWidth, i],
    ),
    o = (0, z.useCallback)(() => {
      if (!n.current) return;
      let t = e.GetScrollWindowWidth(),
        i = e.GetVisualWindowStartPX() + t / 2;
      if (n.current.valPX > i - t * 0.1 && n.current.valPX < i + t * 0.1)
        return;
      let a = e.GetScrollableWidthPX() * 0.005,
        s = n.current.valPX - i;
      if (Math.abs(s) > a) {
        let t = s > 0 ? a : -a;
        (e.ScrollToOffsetCentered(i + t),
          (r.current = requestAnimationFrame(() => o())));
      } else e.ScrollToOffsetCentered(n.current.valPX);
    }, [e]),
    s = (0, z.useCallback)(
      (e) => {
        ((n.current = a(e.clientX - t.scrollBarXOffset)),
          (r.current = requestAnimationFrame(() => o())));
      },
      [a, o, t.scrollBarXOffset],
    ),
    c = (0, z.useCallback)(() => {
      r.current && cancelAnimationFrame(r.current);
    }, []),
    l = (0, z.useCallback)(
      (e) => {
        n.current = a(e.clientX - t.scrollBarXOffset);
      },
      [a, t.scrollBarXOffset],
    );
  return (
    (0, z.useEffect)(
      () => () => {
        r.current && cancelAnimationFrame(r.current);
      },
      [],
    ),
    { onMouseDown: s, onMouseMove: l, onMouseUp: c, onMouseLeave: c }
  );
}
function Du(e) {
  let {
      timelineView: t,
      playbackCoordinator: n,
      fnConvertGlobalPXToTrackPX: r,
      scrollBarWidth: i,
    } = e,
    a = A(() => n.GetHidePlayer()),
    o = A(() => {
      let e = n.GetGlobalMSPlaytime();
      if (e && t.BInitialized()) {
        let n = Math.floor(t.ConvertGlobalMSToGlobalPXOffset(e.valMS));
        return r(n);
      }
      return null;
    });
  return o
    ? (0, G.jsx)(`div`, {
        className: fu,
        onClick: () => {
          let e = n.GetGlobalMSPlaytime();
          (a && (e = n.GetLiveEdgeMS()), t.ScrollToCenteredGlobalMS(e.valMS));
        },
        style: { transform: `translateX(${a ? i : o}px)` },
        children: (0, G.jsx)(Ou, {}),
      })
    : null;
}
function Ou() {
  return (0, G.jsx)(`svg`, {
    width: `52`,
    height: `31`,
    viewBox: `0 0 52 31`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, G.jsx)(`path`, {
      d: `M26 31L51.1147 0.25H0.885263L26 31Z`,
      fill: `#D9D9D9`,
    }),
  });
}
function ku(e) {
  let { timelineView: t, fnConvertGlobalPXToTrackPX: n } = e,
    r = no(),
    i = Ya(),
    a = A(() => {
      if (r && t.BInitialized()) {
        let e = Math.floor(
            t.ConvertGlobalMSToGlobalPXOffset(i.nGlobalStartMS.valMS),
          ),
          r = Math.floor(
            t.ConvertGlobalMSToGlobalPXOffset(i.nGlobalEndMS.valMS),
          );
        if (!isNaN(e) && !isNaN(r))
          return { rangeStartPX: n(e), rangeEndPX: n(r) };
      }
      return null;
    });
  return a
    ? (0, G.jsx)(`div`, {
        className: pu,
        onClick: () => {
          t.ScrollToCenteredGlobalMS(i.nGlobalStartMS.valMS);
        },
        style: {
          width: a.rangeEndPX - a.rangeStartPX,
          transform: `translateX(${a.rangeStartPX}px)`,
        },
      })
    : null;
}
function Au(e) {
  let { scrollSize: t, timelineWidth: n, thumbWidth: r, timelineView: i } = e,
    { thumbPositionPX: a, onMouseDown: o, bHiglightThumb: s } = ju(t, n, r, i);
  return (0, G.jsx)(`div`, {
    className: b(mu, s && `jBCmf-dRAeA-`),
    style: { width: r, transform: `translateX(${a}px)` },
    onMouseDown: o,
  });
}
function ju(e, t, n, r) {
  let [i, a] = (0, z.useState)(!1),
    [o, s] = (0, z.useState)(0),
    c = A(() => {
      let i = r.BInitialized(),
        a = r.GetVisualWindowStartPX();
      return i ? l((a * e.scrollBarWidth) / t, 0, e.scrollBarWidth - n) : 0;
    }),
    [u, d] = (0, z.useState)(!1),
    f = (0, z.useRef)(void 0);
  (0, z.useEffect)(() => {
    if (r.GetAutoScrollPaused())
      return (
        d(!0),
        (f.current = window.setTimeout(() => {
          d(!1);
        }, 500)),
        () => window.clearTimeout(f.current)
      );
  }, [c, r]);
  let p = (0, z.useCallback)(
      (t) => {
        (s(c), a(!0));
        let n = t.nativeEvent.offsetX,
          i = r.GetTimelineParentCtnRef() ?? E(t),
          o,
          l,
          u,
          d = (t) => {
            s(t.clientX - e.scrollBarXOffset - n);
          };
        (i.addEventListener(`mousemove`, d),
          (o = () => i.removeEventListener(`mousemove`, d)));
        let f = () => {
          (a(!1), o(), l(), u());
        };
        (i.addEventListener(`mouseup`, f),
          i.addEventListener(`mouseleave`, f),
          (l = () => i.removeEventListener(`mouseup`, f)),
          (u = () => i.removeEventListener(`mouseleave`, f)));
      },
      [c, e.scrollBarXOffset, r],
    ),
    m = (0, z.useMemo)(
      () => (i ? l(o, 0, e.scrollBarWidth - n) : c),
      [o, i, c, e.scrollBarWidth, n],
    );
  return (
    (0, z.useEffect)(() => {
      if (i) {
        let n = (t * m) / e.scrollBarWidth;
        r.ScrollToOffset(n);
      }
    }, [i, e.scrollBarWidth, m, r, t]),
    { thumbPositionPX: m, onMouseDown: p, bHiglightThumb: u }
  );
}
function Mu(e, t) {
  let n = A(
    () =>
      !t.GetAutoScrollPaused() &&
      e.GetGameRecordingVideo().BVideoElementPlaying(),
  );
  (0, z.useEffect)(() => {
    if (!n) return () => {};
    let r = !1,
      i = e.GetGlobalMSPlaytime(),
      a = Date.now(),
      o = (n) => {
        let s = Date.now(),
          c = s - a;
        t.ScrollToCenteredGlobalMS(i.valMS + c);
        let l = e.GetGlobalMSPlaytime();
        (l.valMS !== i.valMS && ((i = l), (a = s)),
          r || requestAnimationFrame(o));
      };
    return (requestAnimationFrame(o), () => (r = !0));
  }, [e, t, n]);
}
var Nu = `ntKPAM1NZ9k-`,
  Pu = `JXv-qDT9fmY-`,
  Fu = `Rg3Qyz2aIKM-`;
function Iu(e) {
  let t = Z(),
    n = A(() => t.GetVisibleTimelines());
  return (0, G.jsx)(G.Fragment, {
    children: n.flatMap((e) =>
      e.phaseOffsets.map((t, n) =>
        (0, z.createElement)(Lu, {
          ...t,
          timeline: e,
          key: `${e.timelineID}_${n}`,
        }),
      ),
    ),
  });
}
function Lu(e) {
  let { timelineOffsetMS: t, nDurationMS: n, phase: r, timeline: i } = e;
  return (0, G.jsxs)(Ru, {
    ...e,
    children: [(0, G.jsx)(Bu, {}), (0, G.jsx)(zu, {}), (0, G.jsx)(Bu, {})],
  });
}
function Ru(e) {
  let {
      children: t,
      timeline: n,
      timelineOffsetMS: r,
      nDurationMS: i,
      phase: a,
    } = e,
    o = Z(),
    s = q(),
    c = os()?.valPX || -1,
    l = cs(),
    [u] = us(),
    {
      pxStart: d,
      pxWidth: f,
      bHighlight: p,
    } = A(() => {
      let e = o.GetPhaseToHighlight();
      return {
        pxStart: o.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS + r),
        pxWidth: o.ConvertDurationMSToDeltaPX(i),
        bHighlight:
          e && e[0] === n.timelineID && e[1] === a.background_timeline_offset,
      };
    }),
    m = (l || u) && c >= d && c <= d + f,
    [h, g] = pa(),
    _ = () => {
      let e = s.GetLoader(),
        t = e.GetTimelineData(n.timelineID),
        i = e.GetTimelineMetadata(n.timelineID),
        a = t.m_rgPhases.find((e) => parseInt(e.time) === r);
      a && g({ entry: a, timeline: i });
    },
    v = () => g(void 0);
  return (0, G.jsx)(`div`, {
    className: b(Nu, m && `_7iKrpiRqfb4-`, p && `-VGOLVELQNE-`),
    style: { transform: `translateX( ${d}px )`, width: `${f}px` },
    onMouseOver: _,
    onMouseLeave: v,
    onFocus: _,
    onBlur: v,
    children: t,
  });
}
function zu(e) {
  return (0, G.jsx)(`div`, { className: Pu });
}
function Bu(e) {
  return (0, G.jsx)(`div`, { className: Fu });
}
var Vu = `YTX0fQkY6BM-`;
function Hu(e) {
  let t = Z(),
    n = A(() => t.GetVisibleTimelines());
  return (0, G.jsx)(G.Fragment, {
    children: n.map((e) => (0, G.jsx)(Uu, { timeline: e }, e.timelineID)),
  });
}
function Uu(e) {
  let { timeline: t } = e,
    n = Z(),
    r = A(() => n.GetVisibleTimelineHighlights(t.timelineID) || []),
    i = A(() => n.GetTimelineOffsetMS(t.timelineID)),
    a = t.globalOffsetMS - i;
  return (0, G.jsx)(G.Fragment, {
    children: r
      .filter((e) => As(e) === `range_highlight`)
      .map((e) =>
        (0, G.jsx)(
          Wu,
          { entry: e, timeline: t, timelineView: n, timelineOffset: a },
          e.id,
        ),
      ),
  });
}
function Wu(e) {
  let { timelineView: t, entry: n, timelineOffset: r } = e,
    i = r + parseInt(n.time),
    { pxStart: a, pxWidth: o } = A(() => ({
      pxStart: t.ConvertGlobalMSToGlobalPXOffset(i),
      pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(n.duration)),
    })),
    s = { width: `${o}px`, transform: `translateX( ${a}px )` };
  return (0, G.jsx)(`svg`, {
    className: Vu,
    style: s,
    children: (0, G.jsx)(`line`, {
      x1: `0`,
      x2: o,
      y1: `0`,
      y2: `0`,
      fill: `none`,
      stroke: `#ffc82c`,
      "stroke-width": `3`,
      "stroke-dasharray": `3 6`,
      "stroke-dashoffset": `0`,
      "stroke-linecap": `square`,
    }),
  });
}
var Gu = 0.08;
function Ku(e) {
  let {
      loader: t,
      className: n,
      clipSummaries: r,
      refTimelineParentCtn: i,
      disableZoom: a,
    } = e,
    o = A(() => t.BInitialized()),
    s = q();
  if (!o) return (0, G.jsx)(`div`, { className: ka });
  let c = b(Aa, s.GetGamepadMode() && `xP7qeNW99Qo-`, n);
  return (0, G.jsx)(go, {
    loader: t,
    clipSummaries: r,
    playbackCoordinator: s,
    refTimelineParentCtn: i,
    children: (0, G.jsxs)(`div`, {
      className: c,
      dir: `ltr`,
      children: [
        (0, G.jsx)(Xu, {}),
        (0, G.jsx)(Zu, {}),
        (0, G.jsx)(hn, {
          tour: `recording_timeline`,
          name: `timeline`,
          options: { position: `left`, offset: 20 },
          children: (0, G.jsx)(bu, {
            className: ja,
            disableZoom: a,
            children: (0, G.jsx)(qu, {}),
          }),
        }),
      ],
    }),
  });
}
var qu = (0, z.memo)(function (e) {
  let t = Z();
  return A(() => t.BInitialized()) ? (0, G.jsx)(Ju, {}) : null;
});
function Ju() {
  let e = Z(),
    t = A(() => e.GetScrollableWidthPX()),
    n = A(() => e.GetVisualWindowStartPX()),
    r = A(() => e.GetTimelineMarginWidth());
  return (0, G.jsxs)(`div`, {
    className: Ma,
    style: {
      minWidth: t || 0,
      marginRight: r,
      marginLeft: r,
      transform: `translateX(${-n}px)`,
    },
    children: [
      (0, G.jsx)(Yu, {
        id: `recordings`,
        className: Fa,
        children: (0, G.jsx)(Zl, {}),
      }),
      (0, G.jsx)(Yu, {
        id: `clips`,
        className: Ia,
        children: (0, G.jsx)(tu, {}),
      }),
      (0, G.jsx)(Yu, {
        id: `game_modes`,
        className: La,
        children: (0, G.jsx)(Ls, {}),
      }),
      (0, G.jsx)(Yu, {
        id: `date_decorators`,
        className: Ra,
        children: (0, G.jsx)(ql, {}),
      }),
      (0, G.jsx)(Yu, {
        id: `ticks`,
        className: za,
        children: (0, G.jsx)(Eo, {}),
      }),
      (0, G.jsxs)(is, {
        children: [
          (0, G.jsx)(Yu, {
            id: `highlights`,
            className: Ba,
            children: (0, G.jsx)(Ts, {}),
          }),
          (0, G.jsx)(Yu, {
            id: `range_selection`,
            className: Ha,
            children: (0, G.jsx)(Ml, {}),
          }),
          (0, G.jsx)(Yu, {
            id: `seek_scrub`,
            className: Ua,
            children: (0, G.jsx)(bl, {}),
          }),
          (0, G.jsx)(Yu, {
            id: `play_head`,
            className: Wa,
            children: (0, G.jsx)(Js, {}),
          }),
          (0, G.jsx)(Yu, {
            id: `phases`,
            className: qa,
            children: (0, G.jsx)(Iu, {}),
          }),
          (0, G.jsx)(Yu, {
            id: `range_highlights`,
            className: Va,
            children: (0, G.jsx)(Hu, {}),
          }),
        ],
      }),
    ],
  });
}
function Yu(e) {
  let { children: t, id: n, className: r } = e;
  return (0, G.jsx)(`div`, {
    id: n,
    className: b(r, Na),
    children: (0, G.jsx)(`div`, { className: Pa, children: t }),
  });
}
function Xu(e) {
  let t = q().GetRenderGlyph();
  return t ? t(oe.TRIGGER_LEFT, !1, !1, Ga) : null;
}
function Zu(e) {
  let t = q().GetRenderGlyph();
  return t ? t(oe.TRIGGER_RIGHT, !1, !1, Ka) : null;
}
function Qu() {
  return [
    {
      timeline_id: `mocktimeline_1`,
      game_id: `clip_1`,
      date_recorded: 1713811258,
      duration_ms: `60000`,
      recordings: [
        {
          recording_id: `recording_1`,
          duration_ms: `15000`,
          start_offset_ms: `5000`,
        },
        {
          recording_id: `recording_2`,
          duration_ms: `15000`,
          start_offset_ms: `25000`,
        },
        {
          recording_id: `recording_3`,
          duration_ms: `15000`,
          start_offset_ms: `45000`,
        },
      ],
    },
  ];
}
var $u = {
    daterecorded: 1713552945,
    starttime: 0,
    entries: [
      { id: `1`, time: `1000`, type: `gamemode`, mode: 3 },
      {
        id: `2`,
        time: `7000`,
        type: `event`,
        title: `bolt`,
        description: `steam_bolt`,
        icon: `steam_bolt`,
        priority: 2,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `3`,
        time: `8500`,
        type: `event`,
        title: `gem`,
        description: `steam_gem`,
        icon: `steam_gem`,
        priority: 1,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `4`,
        time: `11000`,
        type: `event`,
        title: `star`,
        description: `steam_star`,
        icon: `steam_star`,
        priority: 4,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `6`,
        time: `13000`,
        type: `event`,
        title: `heart`,
        description: `steam_heart`,
        icon: `steam_heart`,
        priority: 2,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `7`,
        time: `15500`,
        type: `event`,
        title: `checkmark`,
        description: `steam_checkmark`,
        icon: `steam_checkmark`,
        priority: 3,
        duration: `0`,
        possible_clip: 2,
      },
      { id: `8`, time: `18000`, type: `gamemode`, mode: 1 },
      {
        id: `9`,
        time: `25000`,
        type: `event`,
        title: `crown`,
        description: `steam_crown`,
        icon: `steam_crown`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `10`,
        time: `27000`,
        type: `event`,
        title: `ribbon`,
        description: `steam_ribbon`,
        icon: `steam_ribbon`,
        priority: 9,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `11`,
        time: `32000`,
        type: `event`,
        title: `chest`,
        description: `steam_chest`,
        icon: `steam_chest`,
        priority: 8,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `13`,
        time: `34500`,
        type: `event`,
        title: `defend`,
        description: `steam_defend`,
        icon: `steam_defend`,
        priority: 8,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `14`,
        time: `36000`,
        type: `event`,
        title: `timer`,
        description: `steam_timer`,
        icon: `steam_timer`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `15`,
        time: `46000`,
        type: `event`,
        title: `defend`,
        description: `steam_defend`,
        icon: `steam_defend`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `17`,
        time: `50000`,
        type: `usermarker`,
        icon: `steam_marker`,
        priority: 0,
      },
      {
        id: `18`,
        time: `51500`,
        type: `event`,
        title: `defend`,
        description: `steam_defend`,
        icon: `steam_defend`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
      {
        id: `19`,
        time: `52500`,
        type: `event`,
        title: `explosion`,
        description: `steam_explosion`,
        icon: `steam_explosion`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
    ],
    endtime: 6e4,
  },
  ed = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            assetset_id: {
              n: 2,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
            name: { n: 3, br: C.readString, bw: e.writeString },
            desc: { n: 4, br: C.readString, bw: e.writeString },
            branches: {
              n: 5,
              r: !0,
              q: !0,
              br: C.readString,
              bw: e.writeRepeatedString,
            },
            last_update_rtime: { n: 6, br: C.readUint32, bw: e.writeUint32 },
            priority: { n: 7, br: C.readUint32, bw: e.writeUint32 },
            last_publish_rtime: { n: 8, br: C.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSet`;
    }
  },
  td = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            assetset: { n: 2, c: ed },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_CreateAssetSet_Request`;
    }
  },
  nd = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetset || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { assetset: { n: 1, c: ed } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_CreateAssetSet_Response`;
    }
  },
  rd = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            assetset_id: {
              n: 2,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_DeleteAssetSet_Request`;
    }
  },
  id = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_DeleteAssetSet_Response`;
    }
  },
  ad = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            assetset: { n: 2, c: ed },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdateAssetSet_Request`;
    }
  },
  od = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), R.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdateAssetSet_Response`;
    }
  },
  sd = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: C.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_GetAllAssetSets_Request`;
    }
  },
  cd = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetset || p(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { assetset: { n: 2, c: ed, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_GetAllAssetSets_Response`;
    }
  },
  ld = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            assetset_id: {
              n: 2,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
            branch: { n: 3, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_AddBranchToAssetSet_Request`;
    }
  },
  ud = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: ed } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_AddBranchToAssetSet_Response`;
    }
  },
  dd = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            assetset_id: {
              n: 2,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
            branch: { n: 3, br: C.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_RemoveBranchFromAssetSet_Request`;
    }
  },
  fd = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: ed } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_RemoseBranchFromAssetSet_Response`;
    }
  },
  pd = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            first_assetset_id: {
              n: 2,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
            second_assetset_id: {
              n: 3,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_SwapAssetSetPriority_Request`;
    }
  },
  md = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated_first || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            updated_first: { n: 1, c: ed },
            updated_second: { n: 2, c: ed },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_SwapAssetSetPriority_Response`;
    }
  },
  hd = class t extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || p(t.M()),
        R.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: e.writeUint32 },
            assetset_id: {
              n: 2,
              br: C.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= f(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(e) {
      return x(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new R.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return u(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      S(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new R.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdatePublishTime_Request`;
    }
  },
  gd = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || p(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: ed } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= f(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return x(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdatePublishTime_Response`;
    }
  },
  _d;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.CreateAssetSet#1`, r(td, t, n), nd, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreateAssetSet = t;
  function n(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.DeleteAssetSet#1`, r(rd, t, n), id, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeleteAssetSet = n;
  function i(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.UpdateAssetSet#1`, r(ad, t, n), od, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdateAssetSet = i;
  function a(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.GetAllAssetSets#1`, r(sd, t, n), cd, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetAllAssetSets = a;
  function o(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.AddBranchToAssetSet#1`,
      r(ld, t, n),
      ud,
      { ePrivilege: 7, rgBrowserAPISites: [`partner`] },
    );
  }
  e.AddBranchToAssetSet = o;
  function s(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.RemoveBranchFromAssetSet#1`,
      r(dd, t, n),
      fd,
      { ePrivilege: 7, rgBrowserAPISites: [`partner`] },
    );
  }
  e.RemoveBranchFromAssetSet = s;
  function c(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.SwapAssetSetPriority#1`,
      r(pd, t, n),
      md,
      { ePrivilege: 7 },
    );
  }
  e.SwapAssetSetPriority = c;
  function l(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.UpdatePublishTime#1`,
      r(hd, t, n),
      gd,
      { ePrivilege: 7 },
    );
  }
  e.UpdatePublishTime = l;
})((_d ||= {}));
var vd = `default`,
  yd = `steam_default_assetset`,
  bd = `steam_default_hidden`,
  Q = class e {
    m_mapAssetSets = new Map();
    m_mapAssetSetCallback = new Map();
    m_dummyAssetSetCallback = new le();
    m_mapAssetSetListChangeCallback = new Map();
    m_SteamInterface = null;
    GetAllAssetSets(e) {
      return Array.from(this.m_mapAssetSets.values()).filter(
        (t) => t.appid === e,
      );
    }
    GetAllNonSpecialAssetSets(e) {
      return Array.from(this.m_mapAssetSets.values()).filter(
        (t) =>
          t.appid === e &&
          t.name != `steam_default_assetset` &&
          t.name != `steam_default_hidden`,
      );
    }
    GetAllPublicAssetSets(e) {
      return Array.from(this.m_mapAssetSets.values()).filter(
        (t) => t.appid === e && t.branches.includes(`default`),
      );
    }
    GetAssetSetByID(e, t) {
      return t
        ? this.m_mapAssetSets.get(t)
        : {
            name: k(
              `#TimelineMarkers_Hidden_new_asset_set_new_name`,
              this.GetAllNonSpecialAssetSets(e).length + 1,
            ),
            desc: ``,
          };
    }
    GetAssetSetChangeCallback(e) {
      return e
        ? (this.m_mapAssetSetCallback.has(e) ||
            this.m_mapAssetSetCallback.set(e, new le()),
          this.m_mapAssetSetCallback.get(e))
        : this.m_dummyAssetSetCallback;
    }
    GetAppAssetSetListChangeCallback(e) {
      return (
        this.m_mapAssetSetListChangeCallback.has(e) ||
          this.m_mapAssetSetListChangeCallback.set(e, new le()),
        this.m_mapAssetSetListChangeCallback.get(e)
      );
    }
    GetPublicSpecialAssetSet(e) {
      let t = this.GetAllAssetSets(e);
      for (let e = 0; e < t.length; ++e)
        if (t[e].name == `steam_default_assetset`) return t[e].assetset_id;
      return null;
    }
    GetHiddenSpecialAssetSet(e) {
      let t = this.GetAllAssetSets(e);
      for (let e = 0; e < t.length; ++e)
        if (t[e].name == `steam_default_hidden`) return t[e].assetset_id;
      return null;
    }
    async CreateAssetSet(e) {
      let t = n.Init(td),
        r = null;
      try {
        (t.Body().set_appid(e.appid), t.Body().set_assetset(ed.fromObject(e)));
        let n = await _d.CreateAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        );
        if (n.GetEResult() == 1) {
          let t = n.Body().assetset().toObject();
          return (
            this.m_mapAssetSets.set(t.assetset_id, t),
            this.GetAppAssetSetListChangeCallback(e.appid).Dispatch(
              this.GetAllAssetSets(e.appid),
            ),
            1
          );
        }
        r = P(n);
      } catch (e) {
        r = P(e);
      }
      return (
        console.error(
          `CAssetSetStore.CreateAssetSet failed: on item ` +
            e.appid +
            ` with ` +
            r?.strErrorMsg,
          r,
        ),
        2
      );
    }
    async UpdateAssetSet(e) {
      let t = n.Init(ad),
        r = null;
      try {
        (t.Body().set_appid(e.appid), t.Body().set_assetset(ed.fromObject(e)));
        let n = await _d.UpdateAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        );
        if (n.GetEResult() == 1)
          return (
            this.m_mapAssetSets.set(e.assetset_id, e),
            this.GetAssetSetChangeCallback(e.assetset_id).Dispatch(e),
            1
          );
        r = P(n);
      } catch (e) {
        r = P(e);
      }
      return (
        console.error(
          `CAssetSetStore.UpdateAssetSet failed: on item ` +
            e.appid +
            ` with ` +
            r?.strErrorMsg,
          r,
        ),
        2
      );
    }
    async DeleteAssetSet(e, t) {
      let r = n.Init(rd),
        i = null;
      try {
        (r.Body().set_appid(e), r.Body().set_assetset_id(t));
        let n = await _d.DeleteAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          r,
        );
        if (n.GetEResult() == 1)
          return (
            this.m_mapAssetSets.delete(t),
            this.GetAppAssetSetListChangeCallback(e).Dispatch(
              this.GetAllAssetSets(e),
            ),
            1
          );
        i = P(n);
      } catch (e) {
        i = P(e);
      }
      return (
        console.error(
          `CAssetSetStore.DeleteAssetSet failed: on item ` +
            e +
            ` with ` +
            i?.strErrorMsg,
          i,
        ),
        2
      );
    }
    async AddBranchToAssetSet(e, t, r) {
      let i = n.Init(ld),
        a = null,
        o = this.m_mapAssetSets.get(t);
      if (!o)
        return (
          console.log(
            `CAssetSetStore.AddBranchToAssetSet object missing: ` + t,
          ),
          2
        );
      try {
        (i.Body().set_appid(e),
          i.Body().set_assetset_id(t),
          i.Body().set_branch(r));
        let n = await _d.AddBranchToAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          i,
        );
        if (n.GetEResult() == 1)
          return (
            (o.branches ||= []),
            o.branches.push(r),
            this.GetAssetSetChangeCallback(o.assetset_id).Dispatch({ ...o }),
            1
          );
        a = P(n);
      } catch (e) {
        a = P(e);
      }
      return (
        console.error(
          `CAssetSetStore.AddBranchToAssetSet failed: on item ` +
            e +
            ` with ` +
            a?.strErrorMsg,
          a,
        ),
        2
      );
    }
    async RemoveBranchFromAssetSet(e, t, r) {
      let i = n.Init(dd),
        a = null,
        o = this.m_mapAssetSets.get(t);
      if (!o)
        return (
          console.log(
            `CAssetSetStore.RemoveBranchFromAssetSet object missing: ` + t,
          ),
          2
        );
      let s = (o.branches || []).findIndex((e) => e === r);
      if (s < 0)
        return (
          console.log(
            `CAssetSetStore.RemoveBranchFromAssetSet branch does not exist: ` +
              t,
          ),
          2
        );
      try {
        (i.Body().set_appid(e),
          i.Body().set_assetset_id(t),
          i.Body().set_branch(r));
        let n = await _d.RemoveBranchFromAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          i,
        );
        if (n.GetEResult() == 1)
          return (
            o.branches.splice(s, 1),
            this.GetAssetSetChangeCallback(o.assetset_id).Dispatch({ ...o }),
            1
          );
        a = P(n);
      } catch (e) {
        a = P(e);
      }
      return (
        console.error(
          `CAssetSetStore.RemoveBranchFromAssetSet failed: on item ` +
            e +
            ` with ` +
            a?.strErrorMsg,
          a,
        ),
        2
      );
    }
    static s_Singleton;
    static Get() {
      return (
        e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
        e.s_Singleton
      );
    }
    Init() {
      let e = re(`asset_sets`, `application_config`);
      (this.ValidateStoreDefault(e) &&
        e.forEach((e) => this.m_mapAssetSets.set(e.assetset_id, e)),
        (this.m_SteamInterface = We(new Ue(g.WEBAPI_BASE_URL))));
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].assetset_id == `string` && typeof t[0].appid == `number`
        : !1;
    }
  };
(v([w], Q.prototype, `CreateAssetSet`, null),
  v([w], Q.prototype, `UpdateAssetSet`, null),
  v([w], Q.prototype, `DeleteAssetSet`, null),
  v([w], Q.prototype, `AddBranchToAssetSet`, null),
  v([w], Q.prototype, `RemoveBranchFromAssetSet`, null));
function xd() {
  return {
    fnCreateAssetSet: Q.Get().CreateAssetSet,
    fnUpdateAssetSet: Q.Get().UpdateAssetSet,
    fnDeleteAssetSet: Q.Get().DeleteAssetSet,
    fnAddBranchToAssetSet: Q.Get().AddBranchToAssetSet,
    fnRemoveBranchFromAssetSet: Q.Get().RemoveBranchFromAssetSet,
  };
}
function Sd(e, t) {
  return Q.Get().GetAssetSetByID(e, t)?.name || k(`#Unknown`);
}
function Cd(e) {
  let [t, n] = (0, z.useState)(() => Q.Get().GetAllAssetSets(e));
  return (ae(Q.Get().GetAppAssetSetListChangeCallback(e), n), t);
}
function wd(e) {
  let [t, n] = (0, z.useState)(() => Q.Get().GetAllNonSpecialAssetSets(e));
  return (
    ae(Q.Get().GetAppAssetSetListChangeCallback(e), (e) =>
      n(
        e.filter(
          (e) =>
            e.name != `steam_default_hidden` &&
            e.name != `steam_default_assetset`,
        ),
      ),
    ),
    t
  );
}
function Td(e) {
  let [t, n] = (0, z.useState)(null),
    [r, i] = (0, z.useState)(null),
    a = (0, z.useCallback)((e) => {
      Q.Get()
        .GetAllAssetSets(e)
        .forEach((e) => {
          e.name === `steam_default_assetset`
            ? n(e.assetset_id)
            : e.name === `steam_default_hidden` && i(e.assetset_id);
        });
    }, []);
  return (
    (0, z.useEffect)(() => a(e), [e, a]),
    ae(Q.Get().GetAppAssetSetListChangeCallback(e), (t) => a(e)),
    { publicAssetSetID: t, hiddenAssetSetID: r }
  );
}
function Ed(e, t) {
  let [n, r] = (0, z.useState)(() => Q.Get().GetAssetSetByID(e, t));
  return (ae(Q.Get().GetAssetSetChangeCallback(t), r), n);
}
async function Dd(e, t) {
  let { fnCreateAssetSet: n } = xd(),
    r = await n({ appid: e, name: t ? yd : bd, branches: t ? [vd] : [] });
  return r == 1
    ? {
        eResult: r,
        assetSetID: t
          ? Q.Get().GetPublicSpecialAssetSet(e)
          : Q.Get().GetHiddenSpecialAssetSet(e),
      }
    : { eResult: r, assetSetID: null };
}
function Od(e) {
  let { assetSetID: t, className: n, appid: r } = e,
    { publicAssetSetID: i } = Td(r);
  return (0, G.jsxs)(Se, {
    onClick: (e) => kd(r, i, t),
    disabled: !t,
    children: [
      `↓`,
      ` `,
      k(`#TimelineMarkers_Hidden_download`),
      `\xA0`,
      (0, G.jsx)(O, {
        toolTipContent: k(`#TimelineMarkers_Hidden_download_ttip`),
        className: n,
        children: `(?)`,
      }),
    ],
  });
}
function kd(e, t, n) {
  let r = new Map();
  (t &&
    Id(t).forEach((e) => {
      let n = Fd(t, e);
      r.set(n.markerid, n);
    }),
    n &&
      n != t &&
      Id(n).forEach((e) => {
        let t = Fd(n, e);
        r.set(t.markerid, t);
      }));
  let i = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>`;
  (Array.from(r.values()).forEach((e) => {
    i += Ad(e);
  }),
    (i += `</defs></svg>`),
    jd(`${e}_markers.svg`, i));
}
function Ad(e) {
  let t = `<g id="${e.markerid}">`;
  if (e.image_type == 1) t += Md(e.image);
  else if (e.image_type == 2) {
    let n = e.image
      .replace(/&/g, `&amp;`)
      .replace(/</g, `&lt;`)
      .replace(/"/g, `&quot;`);
    t += `<image width="36" height="36" xlink:href="${n}" />`;
  }
  return ((t += `</g>`), t);
}
function jd(e, t) {
  let n = new Blob([t], { type: `text/plain` }),
    r = window.URL.createObjectURL(n),
    i = document.createElement(`a`);
  ((i.href = r),
    (i.download = e),
    document.body.appendChild(i),
    i.click(),
    window.URL.revokeObjectURL(r));
}
function Md(e) {
  let t = new DOMParser()
    .parseFromString(e, `image/svg+xml`)
    .querySelector(`svg`);
  return t ? t.innerHTML : null;
}
var $ = class e {
  m_mapTimelineMarker = new Map();
  m_mapAppToMarkerListChange = new Map();
  m_mapAssetSetAndMarkerIDToMarkerChanges = new Map();
  GetAllMarkersForApp(e) {
    return Array.from(this.m_mapTimelineMarker.values()).filter(
      (t) => t.appid == e,
    );
  }
  GetMarkerForAssetSets(e) {
    if (!e || e.length == 0) return [];
    let t = new Map();
    return (
      e.forEach((e) => t.set(e.assetset_id, !0)),
      Array.from(this.m_mapTimelineMarker.values()).filter((e) =>
        t.has(e.asset_set_id),
      )
    );
  }
  GetGameMarkerSVGById(e, t) {
    let n = this.m_mapTimelineMarker.get(t);
    if (n) return Ad(n);
  }
  AddTempMarker(e, t) {
    this.m_mapTimelineMarker.set(e, t);
  }
  RemoveTempMarker(e) {
    this.m_mapTimelineMarker.delete(e);
  }
  BIsLoaded(e) {
    return !0;
  }
  GetMarkerChange(e, t) {
    let n = e + `_` + t;
    return (
      this.m_mapAssetSetAndMarkerIDToMarkerChanges.has(n) ||
        this.m_mapAssetSetAndMarkerIDToMarkerChanges.set(n, new le()),
      this.m_mapAssetSetAndMarkerIDToMarkerChanges.get(n)
    );
  }
  GetAppMarkerListChange(e) {
    return (
      this.m_mapAppToMarkerListChange.has(e) ||
        this.m_mapAppToMarkerListChange.set(e, new le()),
      this.m_mapAppToMarkerListChange.get(e)
    );
  }
  GetAppMarkers(e, t) {
    let n = null,
      r = null;
    return (
      Array.from(this.m_mapTimelineMarker.values()).forEach((i) => {
        i.asset_set_id == e &&
          i.markerid == t &&
          (i.unpublished_changes ? (r = i) : (n = i));
      }),
      { oPublishedMarker: n, oUnpublishedMarker: r }
    );
  }
  GetMarkerIDSetForAssetSetID(e) {
    let t = new Set();
    return (
      this.m_mapTimelineMarker.forEach((n) => {
        n.asset_set_id === e && t.add(n.markerid);
      }),
      t
    );
  }
  GetUnpublishedTimelineMarkerIDSetForAssetSetID(e) {
    let t = new Set();
    return (
      this.m_mapTimelineMarker.forEach((n) => {
        n.asset_set_id === e &&
          n.unpublished_changes &&
          t.add(n.timeline_marker_id);
      }),
      t
    );
  }
  BDoesAssetSetHaveMarkerID(e, t) {
    return Array.from(this.m_mapTimelineMarker.values()).some(
      (n) => n.asset_set_id == e && n.markerid == t,
    );
  }
  GetUnpublishedThanPublishedFor(e, t) {
    let n = this.GetAppMarkers(e, t);
    return n.oUnpublishedMarker ? n.oUnpublishedMarker : n.oPublishedMarker;
  }
  EnsureRequirePublishingIsVisible() {
    let e = document.getElementById(`needs_publishing_msg`);
    e && e.style.display === `none` && (e.style.display = `block`);
  }
  async CreateTimelineMarkerDefinition(e, t, n, r, i) {
    let a = null;
    try {
      let s = new FormData();
      (s.append(`sessionid`, o()),
        s.append(`appid`, `` + e),
        s.append(`asset_set_id`, t),
        s.append(`markerid`, n),
        s.append(`imagedata`, r),
        s.append(`imagetype`, `` + i));
      let c = `${g.PARTNER_BASE_URL}timelinemarkers/ajaxcreatemarker`,
        l = await Dn.default.post(c, s);
      if (l?.status == 200 && l.data.success == 1) {
        let n = l.data.new_marker;
        return (
          this.m_mapTimelineMarker.set(n.timeline_marker_id, n),
          this.GetAppMarkerListChange(e).Dispatch([
            ...this.GetAllMarkersForApp(e),
          ]),
          Sd(e, t) == `steam_default_assetset` &&
            this.EnsureRequirePublishingIsVisible(),
          1
        );
      }
      a = P(l);
    } catch (e) {
      a = P(e);
    }
    return (
      console.error(
        `CTimelineMarkerEditorStore create failed with ` + a.strErrorMsg,
        a,
      ),
      2
    );
  }
  async UpdateTimelineMarkerDefinition(e, n, r, i, a, s) {
    let c = null,
      l = this.m_mapTimelineMarker.get(r);
    if (!l)
      return (
        console.error(
          `CTimelineMarkerEditorStore attempting update, timeline markerid does not exist: ` +
            r,
        ),
        42
      );
    t(
      e == l.appid,
      `Unexpected in UpdateTimelineMarkerDefinition appid don't match`,
    );
    let u = l.markerid,
      d = l.asset_set_id;
    try {
      let t = new FormData();
      (t.append(`sessionid`, o()),
        t.append(`appid`, `` + e),
        t.append(`asset_set_id`, n),
        t.append(`markerid`, i),
        t.append(`imagedata`, a),
        t.append(`imagetype`, `` + s),
        t.append(`timeline_marker_id`, r));
      let l = `${g.PARTNER_BASE_URL}timelinemarkers/ajaxupdatemarker`,
        f = await Dn.default.post(l, t);
      if (f?.status == 200 && f.data.success == 1) {
        let t = f.data.updated_marker;
        this.m_mapTimelineMarker.set(t.timeline_marker_id, t);
        let r = this.GetAppMarkers(d, u);
        if (
          (this.GetMarkerChange(d, u).Dispatch(
            r.oPublishedMarker,
            r.oUnpublishedMarker,
          ),
          u != t.markerid)
        ) {
          let e = this.GetAppMarkers(n, t.markerid);
          this.GetMarkerChange(n, t.markerid).Dispatch(
            e.oPublishedMarker,
            e.oUnpublishedMarker,
          );
        }
        return (
          this.GetAppMarkerListChange(e).Dispatch([
            ...this.GetAllMarkersForApp(e),
          ]),
          Sd(e, n) == `steam_default_assetset` &&
            this.EnsureRequirePublishingIsVisible(),
          1
        );
      }
      c = P(f);
    } catch (e) {
      c = P(e);
    }
    return (
      console.error(
        `CTimelineMarkerEditorStore update failed with ` + c.strErrorMsg,
        c,
      ),
      2
    );
  }
  async DeleteTimelineMarkerDefinition(e, t, n) {
    let r = null,
      i = this.m_mapTimelineMarker.get(n);
    if (!i)
      return (
        console.error(
          `CTimelineMarkerEditorStore attempting delete, timeline markerid does not exist: ` +
            n,
        ),
        42
      );
    let a = i.markerid;
    try {
      let s = new FormData();
      (s.append(`sessionid`, o()),
        s.append(`appid`, `` + e),
        s.append(`asset_set_id`, t),
        s.append(`timeline_marker_id`, n));
      let c = `${g.PARTNER_BASE_URL}timelinemarkers/ajaxdeletemarker`,
        l = await Dn.default.post(c, s);
      if (l?.status == 200 && l.data.success == 1) {
        this.m_mapTimelineMarker.delete(n);
        let r = this.GetAppMarkers(t, a);
        return (
          (r?.oPublishedMarker || r.oUnpublishedMarker) &&
            this.GetMarkerChange(t, i.markerid).Dispatch(
              r.oPublishedMarker,
              r.oUnpublishedMarker,
            ),
          this.GetAppMarkerListChange(e).Dispatch([
            ...this.GetAllMarkersForApp(e),
          ]),
          1
        );
      }
      r = P(l);
    } catch (e) {
      r = P(e);
    }
    return (
      console.error(
        `DeleteTimelineMarkerDefinition create failed with ` + r.strErrorMsg,
        r,
      ),
      2
    );
  }
  async PublishTimelineMarkerDefinitions(e, t, n) {
    let r = null;
    for (let e = 0; e < n.length; ++e) {
      let t = n[e],
        r = this.m_mapTimelineMarker.get(t);
      if (!r)
        return (
          console.error(
            `CTimelineMarkerEditorStore attempting publish, timeline markerid does not exist: ` +
              t,
          ),
          42
        );
      if (!r.unpublished_changes)
        return (
          console.error(
            `CTimelineMarkerEditorStore attempting publish already published asset: ` +
              t,
          ),
          11
        );
    }
    try {
      let i = new FormData();
      (i.append(`sessionid`, o()),
        i.append(`appid`, `` + e),
        i.append(`asset_set_id`, t),
        i.append(`timeline_marker_id`, n.join(`,`)));
      let a = `${g.PARTNER_BASE_URL}timelinemarkers/ajaxpublishmarkers`,
        s = await Dn.default.post(a, i);
      if (s?.status == 200 && s.data.success == 1) {
        for (let e = 0; e < n.length; ++e) {
          let t = n[e],
            r = this.m_mapTimelineMarker.get(t),
            i = this.GetAppMarkers(r.asset_set_id, r.markerid);
          i.oPublishedMarker &&
            this.m_mapTimelineMarker.delete(
              i.oPublishedMarker.timeline_marker_id,
            );
          let a = {
            ...i.oUnpublishedMarker,
            unpublished_changes: !1,
            time_last_updater: Math.floor(Date.now() / 1e3),
          };
          (this.m_mapTimelineMarker.set(a.timeline_marker_id, a),
            this.GetMarkerChange(a.asset_set_id, a.markerid).Dispatch(a, null));
        }
        return (
          this.GetAppMarkerListChange(e).Dispatch([
            ...this.GetAllMarkersForApp(e),
          ]),
          1
        );
      }
      r = P(s);
    } catch (e) {
      r = P(e);
    }
    return (
      console.error(
        `PublishTimelineMarkerDefinition create failed with ` + r.strErrorMsg,
        r,
      ),
      2
    );
  }
  static s_Singleton;
  static Get() {
    return (
      e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
      e.s_Singleton
    );
  }
  Init() {
    let e = re(`timeline_markers`, `application_config`);
    (this.ValidateStoreDefault(e) &&
      e.forEach((e) => this.m_mapTimelineMarker.set(e.timeline_marker_id, e)),
      kn(Wd));
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].asset_set_id == `string` && typeof t[0].appid == `number`
      : !1;
  }
};
(v([w], $.prototype, `CreateTimelineMarkerDefinition`, null),
  v([w], $.prototype, `UpdateTimelineMarkerDefinition`, null),
  v([w], $.prototype, `DeleteTimelineMarkerDefinition`, null),
  v([w], $.prototype, `PublishTimelineMarkerDefinitions`, null));
function Nd() {
  return {
    fnCreateTimelineMarkerDefinition: $.Get().CreateTimelineMarkerDefinition,
    fnUpdateTimelineMarkerDefinition: $.Get().UpdateTimelineMarkerDefinition,
    fnDeleteTimelineMarkerDefinition: $.Get().DeleteTimelineMarkerDefinition,
    fnPublishTimelineMarkerDefinitions:
      $.Get().PublishTimelineMarkerDefinitions,
  };
}
function Pd(e, t) {
  return $.Get().BDoesAssetSetHaveMarkerID(e, t);
}
function Fd(e, t) {
  return $.Get().GetUnpublishedThanPublishedFor(e, t);
}
function Id(e) {
  return Array.from($.Get().GetMarkerIDSetForAssetSetID(e));
}
function Ld(e, t) {
  return $.Get().GetAppMarkers(e, t);
}
function Rd(e, t) {
  return $.Get().AddTempMarker(e, t);
}
function zd(e) {
  return $.Get().RemoveTempMarker(e);
}
function Bd(e) {
  let [t, n] = (0, z.useState)(() => $.Get().GetAllMarkersForApp(e));
  return (ae($.Get().GetAppMarkerListChange(e), n), t);
}
function Vd(e, t) {
  let [n, r] = (0, z.useState)(() => $.Get().GetMarkerIDSetForAssetSetID(t));
  return (
    (0, z.useEffect)(() => {
      t && e && r($.Get().GetMarkerIDSetForAssetSetID(t));
    }, [e, t]),
    ae($.Get().GetAppMarkerListChange(e), () =>
      r($.Get().GetMarkerIDSetForAssetSetID(t)),
    ),
    n
  );
}
function Hd(e, t) {
  let [n, r] = (0, z.useState)(null),
    [i, a] = (0, z.useState)(null);
  return (
    (0, z.useEffect)(() => {
      let n = $.Get().GetAppMarkers(e, t);
      n && (r(n.oPublishedMarker), a(n.oUnpublishedMarker));
    }, [e, t]),
    ae($.Get().GetMarkerChange(e, t), (e, t) => {
      (r(e), a(t));
    }),
    { oPublishedMarker: n, oUnpublishedMarker: i }
  );
}
var Ud = `#dcdedf`;
function Wd(e, t) {
  let n = $.Get().GetGameMarkerSVGById(e, t);
  if (!n) return null;
  let r = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 36 36" fill="${Ud}" color="${Ud}">${n}</svg>`;
  return { strImageURL: `data:image/svg+xml,${encodeURIComponent(r)}` };
}
var Gd = `bW6NnJgeiWk-`,
  Kd = `V3BT-3QXPuE-`,
  qd = `GqWICinvGkw-`,
  Jd = `YKpyJp8GNzs-`,
  Yd = `wlQ9Q4HK0ns-`,
  Xd = `kWUDsdjYMVg-`,
  Zd = `_1UUIWhHwrOM-`,
  Qd = `_3moKm7wLoRg-`,
  $d = `I-tbvNM8uSM-`,
  ef = `-hlxMroQhOg-`,
  tf = `oHIpesYvxMA-`,
  nf = `_6Vpi-tE-oEU-`,
  rf = `pchh-7xTLCE-`,
  af = `_5qz-ObFfK-A-`,
  of = `sGz9odiNvg4-`,
  sf = `LiXShxrPrcE-`,
  cf = `M8jwQ84cEEk-`,
  lf = `fKuSgu0G7V8-`,
  uf = `KftftOl0N4A-`,
  df = `XzyRD4VeIU8-`,
  ff = `_0N2azgGGH-w-`,
  pf = `V6-CWPNS-vM-`;
function mf(e) {
  let { imageBase64OrUntrustedSVG: t, imageType: n } = e;
  if (!t) return null;
  let r;
  return (
    n == 1
      ? (r = `data:image/svg+xml,${encodeURIComponent(t)}`)
      : n == 2 && (r = t),
    (0, G.jsx)(`div`, {
      className: b(Zd),
      children: (0, G.jsxs)(`div`, {
        className: af,
        children: [
          (0, G.jsx)(`img`, {
            className: $d,
            src: r,
            alt: `SVG Large Preview`,
          }),
          (0, G.jsx)(`img`, {
            className: ef,
            src: r,
            alt: `SVG Medium Preview`,
          }),
          (0, G.jsx)(`img`, {
            className: tf,
            src: r,
            alt: `SVG Small Preview`,
          }),
        ],
      }),
    })
  );
}
function hf(e) {
  let { svgXmlUntrusted: t } = e;
  if (!t) return null;
  let n = `data:image/svg+xml,${encodeURIComponent(t)}`;
  return (0, G.jsx)(`img`, { className: tf, src: n, alt: `SVG Small Preview` });
}
function gf(e) {
  let { appid: t, assetSetID: n, markerID: r } = e,
    { oPublishedMarker: i, oUnpublishedMarker: a } = Hd(n, r),
    { publicAssetSetID: o, hiddenAssetSetID: s } = Td(t),
    [c, l] = (0, z.useState)(!1);
  if (!i && !a) return null;
  let u = a || i,
    d = !!(a && a.asset_set_id != s),
    f = i?.asset_set_id === o;
  return (0, G.jsxs)(`div`, {
    className: sf,
    onMouseEnter: () => l(!0),
    onMouseLeave: () => l(!1),
    children: [
      d &&
        (0, G.jsx)(`span`, {
          className: `qnCfcbOAK-c-`,
          children: k(`#TimelineMarker_state_pending`),
        }),
      (0, G.jsx)(mf, {
        imageBase64OrUntrustedSVG: u.image,
        imageType: u.image_type,
      }),
      (0, G.jsx)(`div`, { className: of, children: u.markerid }),
      c &&
        (0, G.jsx)(Se, {
          className: `F2avAdiaobg-`,
          onClick: (e) =>
            Le(
              (0, G.jsx)(jf, {
                appid: t,
                bDisallowMarkerIDEdit: f,
                oTimelineMarkerDef: u,
              }),
              E(e),
            ),
          children: k(`#Button_Edit`),
        }),
    ],
  });
}
function _f(e) {
  let { appid: t, assetSetID: n, strMessageOnEmpty: r, bDraggable: i } = e,
    a = Vd(t, n);
  return !a || a.size == 0
    ? (0, G.jsx)(`div`, { className: pf, children: r })
    : (0, G.jsx)(`div`, {
        className: nf,
        children: (0, G.jsx)(yf, {
          assetSetID: n,
          children: Array.from(a).map((e, r) =>
            (0, G.jsx)(
              vf,
              {
                id: `assetsetid_${n}_markerid_${e}`,
                index: r,
                bDraggable: i,
                children: (0, G.jsx)(gf, {
                  appid: t,
                  assetSetID: n,
                  markerID: e,
                }),
              },
              n + `_` + e,
            ),
          ),
        }),
      });
}
function vf(e) {
  let { id: t, children: n, index: r, bDraggable: i } = e;
  return (0, G.jsx)(dn, {
    draggableId: t,
    index: r,
    isDragDisabled: !i,
    children: (e) =>
      (0, G.jsx)(`div`, {
        ref: e.innerRef,
        ...e.draggableProps,
        ...e.dragHandleProps,
        className: rf,
        style: { ...e.draggableProps.style },
        children: n,
      }),
  });
}
function yf(e) {
  let { assetSetID: t, children: n } = e;
  return (0, G.jsx)(fn, {
    droppableId: `undroppable` + t,
    direction: `horizontal`,
    children: (e) =>
      (0, G.jsxs)(`div`, {
        ref: e.innerRef,
        ...e.droppableProps,
        style: { display: `flex` },
        children: [n, e.placeholder],
      }),
  });
}
function bf(e) {
  let { assetSetID: t, appid: n, strMessage: r } = e;
  return (0, G.jsx)(fn, {
    droppableId: `droptarget_assetsetid_${t}_appid_${n}`,
    children: (e) =>
      (0, G.jsxs)(`div`, {
        ...e.droppableProps,
        ref: e.innerRef,
        className: cf,
        children: [(0, G.jsx)(`span`, { children: r }), e.placeholder],
      }),
  });
}
function xf(e) {
  let { appid: t, markerID: n } = e,
    r = Sf(t);
  return (
    (0, z.useEffect)(() => {
      let e = r.GetTimelines()[0].metadata.timeline_id;
      (r.RemoveTimelineEvent(e, `5`),
        r.RemoveTimelineEvent(e, `12`),
        r.RemoveTimelineEvent(e, `16`),
        r.AddEventToTimeline(e, 12500, n, `5`, 9, n, n, 0),
        r.AddEventToTimeline(e, 33500, n, `12`, 2, n, n, 0),
        r.AddEventToTimeline(e, 48500, n, `16`, 9, n, n, 0));
    }, [n, r]),
    (0, G.jsx)(fa, {
      loader: r,
      fnGetManifest: () => ``,
      mode: oa.Partner,
      children: (0, G.jsx)(Ku, { loader: r, disableZoom: !0 }),
    })
  );
}
function Sf(e) {
  let [t] = (0, z.useState)(() => new Zi());
  return (
    (0, z.useEffect)(() => {
      let n = Qu(),
        r = { ...$u, entries: $u.entries.map((e) => e) };
      (t.LoadTimelinesForTestClip(0, void 0, `${e}`, n),
        t.SetTimelineData(n[0].timeline_id, r));
    }, [e, t]),
    t
  );
}
var Cf = 31;
function wf(e) {
  return /^[a-z0-9_-]{1,31}$/.test(e);
}
function Tf(e, t, n, r) {
  let i = new FileReader();
  ((i.onload = (i) => {
    let a = new Image();
    ((a.onload = () => {
      let i = document.createElement(`canvas`),
        o = a.width,
        s = a.height;
      (o > s
        ? o > t && ((s *= t / o), (o = t))
        : s > n && ((o *= n / s), (s = n)),
        (i.width = o),
        (i.height = s),
        i.getContext(`2d`).drawImage(a, 0, 0, o, s),
        r(i.toDataURL(e.type)));
    }),
      (a.src = i.target?.result));
  }),
    i.readAsDataURL(e));
}
async function Ef(e) {
  return new Promise((t, n) => {
    if (e) {
      let n = new FileReader();
      ((n.onloadend = () => {
        let r = e.type,
          i = e.name;
        if (
          (r === `image/png` || i.endsWith(`.png`)) &&
          n.result.toString().startsWith(`data:image/png;base64,`)
        ) {
          let r = new Image();
          ((r.onload = function () {
            r.width == r.height
              ? r.width < 24
                ? (console.error(`Image too small`),
                  t(k(`#TimelineMarkers_Error_PNGSize`, 24)))
                : r.width > 128
                  ? Tf(e, 128, 128, (e) => {
                      t({
                        image: e,
                        image_type: 2,
                        strFilenameWithoutExtension: Df(i).substring(0, Cf),
                      });
                    })
                  : t({
                      image: n.result,
                      image_type: 2,
                      strFilenameWithoutExtension: Df(i).substring(0, Cf),
                    })
              : (console.error(`Image wrong width, must be square`),
                t(k(`#TimelineMarkers_Error_PNGDimensions`)));
          }),
            (r.src = n.result));
        } else
          r === `image/svg+xml` || i.endsWith(`.svg`)
            ? t({
                image: n.result,
                image_type: 1,
                strFilenameWithoutExtension: Df(i).substring(0, Cf),
              })
            : (console.error(`unknown content types: ` + r),
              t(k(`#TimelineMarkers_Error_UnknownFileType`, r)));
      }),
        e.type === `image/svg+xml` || e.name.endsWith(`.svg`)
          ? n.readAsText(e)
          : n.readAsDataURL(e));
    } else return t(k(`#TimelineMarkers_Error_NotFound`));
  });
}
function Df(e) {
  let t = e.lastIndexOf(`.`);
  return t !== -1 && t > e.lastIndexOf(`/`) ? e.slice(0, t) : e;
}
function Of(e) {
  let { appid: t, closeModal: n } = e,
    [r, i] = (0, z.useState)(() => [
      { markerid: ``, image: null, image_type: null, timeline_marker_id: null },
    ]),
    [a, o] = (0, z.useState)(`hidden`),
    { publicAssetSetID: s, hiddenAssetSetID: c } = Td(t),
    { fnCreateTimelineMarkerDefinition: l } = Nd(),
    u = (0, z.useRef)(void 0),
    [d, f] = (0, z.useState)(null),
    p = en(),
    m = (0, z.useCallback)(
      async (e) => {
        let t = [{ ...r[0] }],
          n = e.length;
        for (let i = 0; i < e.length; ++i) {
          let a = e[i],
            o = await Ef(a);
          if (typeof o == `string`) {
            f(o);
            break;
          }
          if (i == 0) {
            if (
              ((t[0].image = o.image),
              (t[0].image_type = o.image_type),
              n > 1 || r[0].markerid.length == 0)
            ) {
              let e = o.strFilenameWithoutExtension.substring(0, Cf);
              ((t[0].markerid = e),
                (t[0].timeline_marker_id = `temp_${i}_${e}`));
            }
          } else {
            let e = o.strFilenameWithoutExtension.substring(0, Cf);
            t.push({
              image: o.image,
              image_type: o.image_type,
              markerid: e,
              timeline_marker_id: `temp_${i}_${e}`,
            });
          }
        }
        i(t);
      },
      [r],
    ),
    h = (0, z.useCallback)(
      async (e) => {
        if ((f(null), (e.currentTarget?.files?.length || 0) > 0)) {
          let t = [];
          for (let n = 0; n < e.currentTarget.files.length; ++n)
            t.push(e.currentTarget.files[n]);
          m(t);
        }
      },
      [m],
    );
  return p.bLoading
    ? (0, G.jsx)(tn, {
        state: p,
        strDialogTitle: k(`#TimelineMarkers_Dialog_Create`),
        closeModal: n,
      })
    : (0, G.jsx)(Re, {
        strTitle: k(`#TimelineMarkers_Dialog_Create`),
        bOKDisabled: r.some(
          (e) => !wf(e.markerid) || !e.image || e.image?.length < 10,
        ),
        bDisableBackgroundDismiss: !0,
        onCancel: n,
        strOKButtonText: k(`#Button_Create`),
        onOK: async () => {
          p.fnSetLoading(!0);
          let e = a == `public` ? s : c;
          if (
            (a == `public` && !s
              ? (e = (await Dd(t, !0)).assetSetID)
              : a == `hidden` && !c && (e = (await Dd(t, !1)).assetSetID),
            !e)
          ) {
            (console.error(
              `IconCreateEditDialog failed to create hidden sets ` + a,
            ),
              p.fnSetError(!0),
              p.fnSetStrError(k(`#OptIn_Appeals_Dialog_Failed`)));
            return;
          }
          let n = !0;
          for (let i = 0; i < r.length; ++i) {
            let a = r[i];
            if ((await l(t, e, a.markerid, a.image, a.image_type)) != 1) {
              (p.fnSetError(!0),
                p.fnSetStrError(k(`#OptIn_Appeals_Dialog_Failed`)),
                (n = !1));
              break;
            }
          }
          n &&
            (p.fnSetSuccess(!0),
            p.fnSetStrSuccess(k(`#TimelineMarkers_Dialog_CreateSuccess`)));
        },
        children: (0, G.jsxs)(`div`, {
          className: Gd,
          children: [
            (0, G.jsxs)(`div`, {
              className: qd,
              children: [
                (0, G.jsx)(`div`, {
                  children: k(`#TimelineMarkers_Dialog_Create_Description`),
                }),
                (0, G.jsxs)(`ul`, {
                  children: [
                    (0, G.jsxs)(`li`, {
                      children: [
                        (0, G.jsx)(`strong`, {
                          children: k(`#TimelineMarkers_Dialog_Name_Title`),
                        }),
                        ` - `,
                        k(`#TimelineMarkers_Dialog_Name_ttip`, 128),
                      ],
                    }),
                    (0, G.jsxs)(`li`, {
                      children: [
                        (0, G.jsx)(`strong`, {
                          children: k(`#TimelineMarkers_Dialog_SVG`),
                        }),
                        ` - `,
                        k(`#TimelineMarkers_Dialog_SVG_create_desc`),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            !!d &&
              (0, G.jsx)(`div`, { className: `_9rhLFCwqjPg-`, children: d }),
            (0, G.jsx)(`br`, {}),
            (0, G.jsx)(`br`, {}),
            (0, G.jsx)(`h3`, {
              children: k(`#TimelineMarkers_Dialog_Title_UploadIcons`),
            }),
            (0, G.jsx)(`input`, {
              type: `file`,
              accept: `.svg,.png`,
              style: { display: `none` },
              multiple: !0,
              name: `fileupload`,
              ref: u,
              onChange: h,
            }),
            (0, G.jsxs)(Se, {
              onClick: () => u.current.click(),
              children: [
                (0, G.jsx)(Ae, {}),
                ` `,
                k(`#TimelineMarkers_Dialog_SVG_mutli_button`),
              ],
            }),
            (0, G.jsx)(`div`, {
              className: Yd,
              children: (0, G.jsx)(kf, { fnHandleFiles: m }),
            }),
            r?.length > 0 &&
              r[0].image?.length > 0 &&
              (0, G.jsx)(`h3`, {
                children: k(`#TimelineMarkers_Dialog_IconCreateTitle`),
              }),
            r.map((e, n) =>
              (0, G.jsx)(
                Af,
                {
                  marker: e,
                  appid: t,
                  setMarkerID: (e) => {
                    let t = [...r];
                    ((t[n].markerid = e), i(t));
                  },
                },
                `` + n,
              ),
            ),
            (0, G.jsx)(`br`, {}),
            (0, G.jsx)(`br`, {}),
            (0, G.jsx)(Nf, {
              createVisibilityState: a,
              setCreateVisibilityState: o,
            }),
          ],
        }),
      });
}
function kf(e) {
  let { fnHandleFiles: t } = e,
    [n, r] = (0, z.useState)(!1);
  return (0, G.jsx)(`div`, {
    className: b(Qd, n && `xb2yMHJAW80-`, cf),
    onDragEnter: (e) => {
      (e.preventDefault(), r(!0));
    },
    onDragOver: (e) => {
      e.preventDefault();
    },
    onDragLeave: () => {
      r(!1);
    },
    onDrop: (e) => {
      (e.preventDefault(), r(!1));
      let n = Array.from(e.dataTransfer.files);
      t(n);
    },
    children: (0, G.jsx)(`p`, {
      children: k(`#TimelineMarkers_Dialog_SVG_draganddrop`),
    }),
  });
}
function Af(e) {
  let { marker: t, appid: n, setMarkerID: r } = e;
  return (
    (0, z.useEffect)(
      () => (
        Rd(t.timeline_marker_id, t),
        () => {
          zd(t.timeline_marker_id);
        }
      ),
      [t],
    ),
    t?.image
      ? (0, G.jsxs)(G.Fragment, {
          children: [
            (0, G.jsx)(Mf, {
              markerID: t.markerid,
              strErrorMessage: null,
              imageContent: t.image,
              imageType: t.image_type,
            }),
            (0, G.jsxs)(`div`, {
              className: Xd,
              children: [
                (0, G.jsxs)(`div`, {
                  children: [
                    (0, G.jsx)(ze, {
                      children: k(`#TimelineMarkers_Dialog_Icon_Title`),
                    }),
                    (0, G.jsx)(mf, {
                      imageBase64OrUntrustedSVG: t.image,
                      imageType: t.image_type,
                    }),
                  ],
                }),
                (0, G.jsx)(ve, {
                  type: `text`,
                  value: t.markerid,
                  maxChars: 128,
                  label: k(`#TimelineMarkers_Dialog_Name_Title`),
                  placeholder: k(`#TimelineMarkers_Dialog_Name_placeholder`),
                  onChange: (e) => r(e.currentTarget.value || ``),
                }),
              ],
            }),
            (0, G.jsx)(ze, {
              children: k(`#TimelineMarkers_Dialog_Icon_TimelinePreview`),
            }),
            (0, G.jsx)(xf, { appid: n, markerID: t.timeline_marker_id }),
          ],
        })
      : null
  );
}
function jf(e) {
  let {
      appid: t,
      closeModal: n,
      bDisallowMarkerIDEdit: r,
      oTimelineMarkerDef: i,
    } = e,
    [a, o] = (0, z.useState)(i.markerid),
    {
      fnUpdateTimelineMarkerDefinition: s,
      fnDeleteTimelineMarkerDefinition: c,
    } = Nd(),
    [l, u] = (0, z.useState)(i.image),
    [d, f] = (0, z.useState)(i.image_type),
    [p, m] = (0, z.useState)(0),
    h = (0, z.useRef)(void 0),
    [g, _] = (0, z.useState)(null),
    v = k(`#TimelineMarkers_Dialog_Edit`, a);
  (0, z.useEffect)(() => {
    if (l && d && p && a) {
      let e = `temp_${p}_${i.timeline_marker_id}`;
      Rd(e, { image: l, image_type: d, timeline_marker_id: e, markerid: a });
    }
    return () => {
      p && zd(`temp_${p}_${i.timeline_marker_id}`);
    };
  }, [l, d, a, p, i.timeline_marker_id]);
  let ee = (0, z.useCallback)(async (e) => {
      _(null);
      let t = e.currentTarget?.files?.[0],
        n = await Ef(t);
      typeof n == `string`
        ? _(n)
        : (u(n.image), f(n.image_type), m((e) => e + 1));
    }, []),
    y = en();
  if (y.bLoading)
    return (0, G.jsx)(tn, { state: y, strDialogTitle: v, closeModal: n });
  let b, te;
  if (!r || i.unpublished_changes) {
    let e = null;
    (Ld(i.asset_set_id, i.markerid).oPublishedMarker && i.unpublished_changes
      ? ((b = k(`#Button_Revert`)),
        (e = k(`#TimelineMarkers_Dialog_RevertSuccess`)))
      : ((e = k(`#TimelineMarkers_Dialog_DeleteSuccess`)),
        (b = k(`#Button_Delete`))),
      (te = async () => {
        Le(
          (0, G.jsx)(Re, {
            strTitle: b,
            strDescription: k(`#Dialog_AreYouSure`),
            onOK: async () => {
              (y.fnSetLoading(!0),
                (await c(t, i.asset_set_id, i.timeline_marker_id)) == 1
                  ? (y.fnSetSuccess(!0), y.fnSetStrSuccess(e))
                  : (y.fnSetError(!0),
                    y.fnSetStrError(k(`#OptIn_Appeals_Dialog_Failed`))));
            },
          }),
          window,
        );
      }));
  }
  return (0, G.jsx)(Re, {
    strTitle: v,
    bOKDisabled: !wf(a) || l?.length < 10,
    bDisableBackgroundDismiss: !0,
    onCancel: n,
    onMiddleButton: te,
    strMiddleButtonText: b,
    strOKButtonText: k(`#Button_Update`),
    onOK: async () => {
      (y.fnSetLoading(!0),
        (await s(t, i.asset_set_id, i.timeline_marker_id, a, l, d)) == 1
          ? (y.fnSetSuccess(!0),
            y.fnSetStrSuccess(k(`#TimelineMarkers_Dialog_UpdateSuccess`)))
          : (y.fnSetError(!0),
            y.fnSetStrError(k(`#OptIn_Appeals_Dialog_Failed`))));
    },
    children: (0, G.jsxs)(`div`, {
      className: Gd,
      children: [
        (0, G.jsx)(Mf, {
          markerID: a,
          strErrorMessage: g,
          imageContent: l,
          imageType: d,
        }),
        (0, G.jsx)(`h3`, { children: k(`#TimelineMarkers_Dialog_Name_Title`) }),
        r
          ? (0, G.jsx)(`p`, {
              children: k(`#TimelineMarkers_Dialog_Name_Disabled`),
            })
          : (0, G.jsx)(`p`, {
              children: k(`#TimelineMarkers_Dialog_Name`, 128),
            }),
        (0, G.jsx)(ve, {
          type: `text`,
          value: a,
          disabled: r,
          maxChars: 128,
          className: Kd,
          placeholder: k(`#TimelineMarkers_Dialog_Name_placeholder`),
          tooltip: k(`#TimelineMarkers_Dialog_Name_ttip`),
          onChange: (e) => o(e.currentTarget.value || ``),
        }),
        (0, G.jsx)(`br`, {}),
        (0, G.jsx)(`br`, {}),
        (0, G.jsx)(`h3`, { children: k(`#TimelineMarkers_Dialog_SVG`) }),
        (0, G.jsx)(`p`, { children: k(`#TimelineMarkers_Dialog_SVG_desc`) }),
        (0, G.jsxs)(`div`, {
          className: Xd,
          children: [
            (0, G.jsx)(mf, { imageBase64OrUntrustedSVG: l, imageType: d }),
            (0, G.jsx)(`input`, {
              type: `file`,
              accept: `.svg,.png`,
              style: { display: `none` },
              multiple: !1,
              name: `fileupload`,
              ref: h,
              onChange: ee,
            }),
            (0, G.jsxs)(Se, {
              onClick: () => h.current.click(),
              children: [
                (0, G.jsx)(Ae, {}),
                ` `,
                k(`#TimelineMarkers_Dialog_SVG_button`),
              ],
            }),
          ],
        }),
        (0, G.jsx)(xf, {
          appid: t,
          markerID: p
            ? `temp_${p}_${i.timeline_marker_id}`
            : i.timeline_marker_id,
        }),
      ],
    }),
  });
}
function Mf(e) {
  let { markerID: t, strErrorMessage: n, imageContent: r, imageType: i } = e,
    a = wf(t),
    o = t?.trimStart().startsWith(`steam_`),
    s;
  if (i == 1) {
    let e = new DOMParser()
        .parseFromString(r, `image/svg+xml`)
        .querySelector(`svg`),
      t = 0,
      n = 0,
      i = 0,
      a = 0;
    if (e) {
      let r = e.viewBox;
      if (r && r.baseVal) {
        let e = r.baseVal;
        ((t = e.x), (n = e.y), (i = e.width), (a = e.height));
      }
      ((i == 0 || a == 0) &&
        ((t = e.x.baseVal.value),
        (n = e.y.baseVal.value),
        (i = e.width.baseVal.value),
        (a = e.height.baseVal.value)),
        (Math.abs(t - 0) > 0.5 ||
          Math.abs(n - 0) > 0.5 ||
          Math.abs(i - 36) > 0.5 ||
          Math.abs(a - 36) > 0.5) &&
          (s = `(${t}, ${n})-(${t + i}, ${n + a})`));
    }
  }
  return (0, G.jsxs)(G.Fragment, {
    children: [
      !a &&
        t.length > 0 &&
        (0, G.jsx)(`div`, {
          className: `_9rhLFCwqjPg-`,
          children: k(`#TimelineMarkers_Dialog_Name_error`),
        }),
      !!o &&
        (0, G.jsx)(`div`, {
          className: `_9rhLFCwqjPg-`,
          children: k(`#TimelineMarkers_Dialog_Name_error2`),
        }),
      !!s &&
        (0, G.jsx)(`div`, {
          className: `EHcr1piLxMU-`,
          children: k(`#TimelineMarkers_Dialog_SVG_warning_dimensions`, s),
        }),
    ],
  });
}
function Nf(e) {
  let { createVisibilityState: t, setCreateVisibilityState: n } = e,
    r = z.useId();
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(`h3`, {
        id: r,
        children: k(`#TimelineMarkers_Dialog_Visibility`),
      }),
      (0, G.jsx)(De, {
        labelId: r,
        value: t,
        onChange: (e) => {
          n(e);
        },
        children: (0, G.jsxs)(`div`, {
          className: Jd,
          children: [
            (0, G.jsx)(Te, {
              value: `public`,
              children: Fe(
                `#TimelineMarkers_Dialog_Public`,
                (0, G.jsx)(`b`, {}),
              ),
            }),
            (0, G.jsx)(Te, {
              value: `hidden`,
              children: Fe(
                `#TimelineMarkers_Dialog_Hidden`,
                (0, G.jsx)(`b`, {}),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
var Pf = `_4yH1m6ufjJg-`,
  Ff = `LZTIpM8pYh0-`,
  If = `Dspp-lyTkqE-`,
  Lf = `a0uMD8KPGBU-`,
  Rf = `kKRtxlasxms-`,
  zf = `ef8y-ZEir4c-`,
  Bf = `z1LwdkaT2-o-`,
  Vf = `ziYUfdrnr6c-`,
  Hf = `iGk4KTUY2A8-`;
function Uf(e) {
  let { appid: t } = e,
    { publicAssetSetID: n } = Td(t),
    r = Bd(t);
  return (0, G.jsx)(`div`, {
    children: (0, G.jsxs)(`div`, {
      className: Rf,
      children: [
        (0, G.jsxs)(`div`, {
          className: zf,
          children: [
            (0, G.jsx)(`div`, {
              className: b(Ze),
              children: k(`#TimelineMarkers_Public_title`),
            }),
            (0, G.jsx)(`div`, { children: k(`#TimelineMarkers_Public_desc1`) }),
            (0, G.jsx)(`br`, {}),
            (0, G.jsx)(`div`, { children: k(`#TimelineMarkers_Public_desc2`) }),
          ],
        }),
        (0, G.jsx)(`div`, {
          className: Bf,
          children: (0, G.jsxs)(`div`, {
            className: Pf,
            children: [
              n
                ? (0, G.jsx)(_f, {
                    assetSetID: n,
                    appid: t,
                    bDraggable: !1,
                    strMessageOnEmpty: k(`#TimelineMarkers_Public_none`),
                  })
                : (0, G.jsx)(`div`, {
                    children: k(`#TimelineMarkers_Public_none`),
                  }),
              r?.length > 0 &&
                (0, G.jsx)(bf, {
                  assetSetID: n || `publicmissing`,
                  appid: t,
                  strMessage: k(`#TimelineMarkers_drag_target_public`),
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
var Wf = /^assetsetid_(.+)_markerid_(.+)$/,
  Gf = /^droptarget_assetsetid_(.+)_appid_(.+)$/;
async function Kf(e, t) {
  if (!e.destination) return;
  let n = e.draggableId.match(Wf),
    r = e.destination.droppableId.match(Gf);
  if (!(n?.length > 2 && r?.length > 2)) return;
  let i = n[1],
    a = n[2],
    o = r[1];
  qf(i, a, o, Number.parseInt(r[2]));
}
async function qf(e, t, n, r) {
  if (e == n) return n;
  if (n == `publicmissing`) {
    let e = await Dd(r, !0);
    if (e.eResult != 1) {
      let t = P({ success: e.eResult });
      return (
        console.error(
          `TimelineMarkerDrop failed to create public asset set: ` +
            t.strErrorMsg,
          t,
        ),
        n
      );
    }
    n = e.assetSetID;
  }
  let {
      fnCreateTimelineMarkerDefinition: i,
      fnDeleteTimelineMarkerDefinition: a,
      fnUpdateTimelineMarkerDefinition: o,
    } = Nd(),
    s = Fd(e, t),
    c = 1;
  if (Pd(n, t)) {
    let e = Fd(n, t);
    c = await o(r, n, e.timeline_marker_id, t, s.image, s.image_type);
  } else c = await i(r, n, t, s.image, s.image_type);
  if (c != 1)
    return (console.error(`TimelineMarkerDrop failed on step 1` + c), n);
  if (s.unpublished_changes) {
    if (((c = await a(r, e, s.timeline_marker_id)), c != 1))
      return (console.error(`TimelineMarkerDrop failed on step 2: ` + c), n);
    s = Fd(e, t);
  }
  return (
    s &&
      !s?.unpublished_changes &&
      ((c = await a(r, e, s.timeline_marker_id)), c != 1) &&
      console.error(`TimelineMarkerDrop failed on step 3: ` + c),
    n
  );
}
var Jf = `I9Y7hMjQzEw-`,
  Yf = `NNOIcqpGB9A-`,
  Xf = `V02fLYzUulQ-`,
  Zf = `a0Z5rLSQVhQ-`;
function Qf(e) {
  let { appid: t } = e,
    n = Bd(t),
    { hiddenAssetSetID: r } = Td(t),
    i = (0, z.useMemo)(
      () =>
        n?.filter((e) => e.unpublished_changes && e.asset_set_id != r).length ||
        0,
      [n, r],
    );
  return i == 0
    ? null
    : (0, G.jsxs)(`div`, {
        className: Xf,
        children: [
          (0, G.jsx)(`div`, {
            className: Zf,
            children: Ie(`#TimelineMarkers_Publishing_title`, i),
          }),
          (0, G.jsx)(`div`, {
            children: k(`#TimelineMarkers_Publishing_desc`),
          }),
          (0, G.jsx)(Be, {
            onClick: (e) => {
              window.location.href = `${g.PARTNER_BASE_URL}apps/publishing/${t}`;
            },
            children: k(`#TimelineMarkers_Publishing_action`),
          }),
        ],
      });
}
function $f(e) {
  let { appid: t, assetSetID: n, closeModal: r } = e,
    i = Ed(t, n),
    { fnCreateAssetSet: a, fnUpdateAssetSet: o } = xd(),
    [s, c] = (0, z.useState)(i.name),
    [l, u] = (0, z.useState)(i.desc),
    d = s.trimStart().toLowerCase().startsWith(`steam_`),
    f = s.trim().length == 0,
    p = k(n ? `#AssetSet_Dialog_Edit_Title` : `#AssetSet_Dialog_Create_Title`),
    m = en();
  return m.bLoading
    ? (0, G.jsx)(tn, { state: m, strDialogTitle: p, closeModal: r })
    : (0, G.jsxs)(Re, {
        strTitle: p,
        strDescription: k(`#TimelineMarkers_Hidden_new_asset_set_desc`),
        strOKButtonText: k(`#Button_Save`),
        onOK: async () => {
          (m.fnSetLoading(!0), (i.name = s), (i.desc = l), (i.appid = t));
          let e = null;
          try {
            let t;
            (n ? (t = await o(i)) : ((i.branches = []), (t = await a(i))),
              t != 1 && (e = P({ sucess: t })));
          } catch (t) {
            e = P(t);
          }
          e
            ? (console.error(`Branch Set error ` + e.strErrorMsg, e),
              m.fnSetError(!0),
              m.fnSetStrError(k(`#OptIn_Appeals_Dialog_Failed`)))
            : m.fnSetSuccess(!0);
        },
        onCancel: r,
        bDisableBackgroundDismiss: !1,
        bOKDisabled: d || f || m.bLoading,
        children: [
          d &&
            (0, G.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: k(`#AssetSet_Dialog_Disallowed`),
            }),
          f &&
            (0, G.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: k(`#AssetSet_Dialog_MustHaveName`),
            }),
          (0, G.jsx)(ve, {
            type: `text`,
            label: k(`#AssetSet_Dialog_Edit_Name`),
            value: s,
            onChange: (e) => {
              c(e?.currentTarget?.value || ``);
            },
          }),
          (0, G.jsx)(ve, {
            type: `text`,
            label: k(`#AssetSet_Dialog_Edit_Description`),
            value: l,
            onChange: (e) => {
              u(e?.currentTarget?.value || ``);
            },
          }),
        ],
      });
}
function ep(e) {
  let { appid: t } = e,
    { hiddenAssetSetID: n } = Td(t);
  return (0, G.jsxs)(`div`, {
    className: b(void 0, Bf),
    children: [
      (0, G.jsx)(`div`, {
        className: Ff,
        children: (0, G.jsxs)(`div`, {
          className: Vf,
          children: [
            (0, G.jsx)(`div`, {
              className: Hf,
              children: k(`#TimelineMarkers_Hidden_section_info`),
            }),
            (0, G.jsx)(tp, { appid: t }),
            (0, G.jsx)(Od, { appid: t, assetSetID: n }),
          ],
        }),
      }),
      (0, G.jsx)(`div`, {
        children: n
          ? (0, G.jsx)(_f, {
              appid: t,
              assetSetID: n,
              strMessageOnEmpty: k(`#TimelineMarkers_Hidden_none`),
              bDraggable: !0,
            })
          : (0, G.jsx)(`div`, {
              className: pf,
              children: k(`#TimelineMarkers_Hidden_none`),
            }),
      }),
      (0, G.jsxs)(`div`, {
        className: b(uf, df),
        children: [
          (0, G.jsx)(`div`, {
            className: lf,
            children: (0, G.jsx)(Ne, { size: `10px` }),
          }),
          ` `,
          k(`#TimelineMarkers_drag_source_public`),
        ],
      }),
    ],
  });
}
function tp(e) {
  let { appid: t } = e,
    { hiddenAssetSetID: n } = Td(t),
    r = Vd(t, n);
  return (0, G.jsxs)(Se, {
    disabled: !n || !r || r.size == 0,
    onClick: (e) => Le((0, G.jsx)(np, { appid: t }), E(e)),
    children: [`↑`, ` `, k(`#TimelineMarkers_MoveAllHiddenToPublic`)],
  });
}
function np(e) {
  let { appid: t, closeModal: n } = e,
    { hiddenAssetSetID: r, publicAssetSetID: i } = Td(t),
    a = Vd(t, r),
    o = en();
  return o.bLoading
    ? (0, G.jsx)(tn, {
        state: o,
        strDialogTitle: k(`#TimelineMarkers_MoveAllHiddenToPublic`),
        closeModal: n,
      })
    : (0, G.jsx)(Re, {
        strTitle: k(`#TimelineMarkers_MoveAllHiddenToPublic`),
        strDescription: k(`#Dialog_AreYouSure`),
        onCancel: n,
        bOKDisabled: !a,
        onOK: async () => {
          o.fnSetLoading(!0);
          let e = Array.from(a),
            n = i;
          for (let i = 0; i < e.length; ++i) {
            let a = e[i];
            n = await qf(r, a, n, t);
          }
          o.fnSetSuccess(!0);
        },
      });
}
function rp(e) {
  let { appid: t } = e;
  return (0, G.jsxs)(`div`, {
    className: ff,
    children: [
      (0, G.jsx)(`div`, {
        children: k(`#TimelineMarkers_Hidden_new_asset_set_desc`),
      }),
      (0, G.jsx)(Se, {
        onClick: (e) => Le((0, G.jsx)($f, { appid: t }), E(e)),
        children: k(`#TimelineMarkers_Hidden_new_asset_set`),
      }),
    ],
  });
}
function ip(e) {
  let { oAssetSet: t } = e;
  return t.name == `steam_default_assetset`
    ? (0, G.jsx)(`span`, { children: k(`#TimelineMarkers_Public_title`) })
    : t.name == `steam_default_hidden`
      ? (0, G.jsx)(`span`, { children: k(`#TimelineMarkers_Hidden_title`) })
      : (0, G.jsx)(`span`, { children: t.name });
}
var ap = class e {
  m_vecBranches = [];
  m_mapBranchNameToDetails = new Map();
  GetBranchDetails() {
    return this.m_vecBranches;
  }
  GetBranchDetailsByName(e) {
    return this.m_mapBranchNameToDetails.get(e);
  }
  static s_Singleton;
  static Get() {
    return (
      e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
      e.s_Singleton
    );
  }
  Init() {
    let e = re(`branch_details`, `application_config`);
    this.ValidateStoreDefault(e) &&
      ((this.m_vecBranches = e),
      this.m_vecBranches.forEach((e) =>
        this.m_mapBranchNameToDetails.set(e.name, e),
      ));
  }
  ValidateStoreDefault(e) {
    let t = e;
    return !!(
      t &&
      Array.isArray(t) &&
      t.length > 0 &&
      typeof t[0].name == `string`
    );
  }
};
function op() {
  return ap.Get().GetBranchDetails();
}
function sp(e) {
  return ap.Get().GetBranchDetailsByName(e);
}
var cp = `_1-ANcQyJF-0-`,
  lp = `WuStn9k5fWs-`,
  up = `nhvkFhx29Ps-`;
function dp(e) {
  let { oAssetSet: t } = e;
  return (0, G.jsxs)(`div`, {
    className: lp,
    children: [
      (0, G.jsx)(`div`, {
        className: void 0,
        children: k(`#TimelineMarkers_Hidden_controls`),
      }),
      t.branches?.length > 0
        ? (0, G.jsx)(G.Fragment, {
            children: t.branches.map((e) =>
              (0, G.jsx)(
                `span`,
                { className: up, children: (0, G.jsx)(pp, { branchName: e }) },
                e,
              ),
            ),
          })
        : (0, G.jsx)(`div`, {
            children: k(`#TimelineMarkers_Hidden_nobranches`),
          }),
      (0, G.jsx)(`br`, {}),
      (0, G.jsx)(Se, {
        onClick: (e) => {
          Le((0, G.jsx)(fp, { oAssetSet: t }), E(e));
        },
        children: k(`#TimelineMarkers_Hidden_updatebranches`),
      }),
      (0, G.jsx)(Se, {
        onClick: () => {},
        children: k(`#TimelineMarkers_Hidden_publishbranch`),
      }),
    ],
  });
}
function fp(e) {
  let { oAssetSet: t, closeModal: n } = e,
    r = op(),
    [i, a] = (0, z.useState)(new Set(t.branches || [])),
    { fnAddBranchToAssetSet: o, fnRemoveBranchFromAssetSet: s } = xd(),
    c = en();
  return c.bLoading
    ? (0, G.jsx)(tn, {
        state: c,
        strDialogTitle: k(`#TimelineMarkers_Hidden_updatebranches`),
        closeModal: n,
      })
    : (0, G.jsxs)(Re, {
        strTitle: k(`#TimelineMarkers_Hidden_updatebranches`),
        strDescription: k(`#AssetSet_Branch_Dialog_Desc`),
        onCancel: n,
        onOK: async () => {
          c.fnSetLoading(!0);
          let e = Array.from(i),
            n = 0,
            r = 0;
          for (let r = 0; r < e.length; ++r) {
            let i = e[r];
            if (!t.branches?.includes(i)) {
              if ((await o(t.appid, t.assetset_id, i)) != 1) {
                c.fnSetError(!0);
                return;
              }
              n++;
            }
          }
          let a = [...(t.branches || [])];
          for (let e = 0; e < a.length; ++e) {
            let n = a[e];
            if (!i.has(n)) {
              if ((await s(t.appid, t.assetset_id, n)) != 1) {
                c.fnSetError(!0);
                return;
              }
              r++;
            }
          }
          (n == 0 && r == 0
            ? c.fnSetStrSuccess(k(`#AssetSet_Branch_Dialog_nochange`))
            : c.fnSetStrSuccess(k(`#AssetSet_Branch_Dialog_updated`, n, r)),
            c.fnSetSuccess(!0));
        },
        children: [
          (0, G.jsx)(`br`, {}),
          r.map((e) =>
            (0, G.jsx)(
              we,
              {
                label: (0, G.jsx)(pp, { branchName: e.name }),
                tooltip: e.description,
                checked: i.has(e.name),
                onChange: (t) => {
                  let n = new Set(i);
                  (t ? n.add(e.name) : n.delete(e.name), a(n));
                },
              },
              e.name,
            ),
          ),
        ],
      });
}
function pp(e) {
  let { branchName: t } = e,
    n = sp(t);
  return (0, G.jsxs)(`span`, {
    className: cp,
    children: [
      n?.password?.length > 0 &&
        (0, G.jsx)(O, {
          toolTipContent: k(`#AssetSet_Branch_Dialog_password`),
          bTopmost: !0,
          children: (0, G.jsx)(`span`, { children: `🔒 ` }),
        }),
      t,
    ],
  });
}
function mp(e) {
  let { appid: t, assetSetID: n, closeModal: r } = e,
    i = Ed(t, n),
    a = Cd(t),
    o = Bd(t),
    [s, c] = (0, z.useState)(null),
    { fnCreateTimelineMarkerDefinition: l } = Nd(),
    { hiddenAssetSetID: u } = Td(t),
    d = (0, z.useMemo)(() => {
      let e = new Set();
      Id(i.assetset_id).forEach((t) => e.add(t));
      let t = new Map();
      return (
        a.forEach((e) => {
          e.assetset_id != i.assetset_id && t.set(e.assetset_id, e);
        }),
        o
          .filter(
            (t) =>
              (!t.unpublished_changes || t.asset_set_id == u) &&
              !e.has(t.markerid),
          )
          .map((e) => ({
            label: (0, G.jsxs)(G.Fragment, {
              children: [
                (0, G.jsx)(hf, { svgXmlUntrusted: e.image }),
                e.markerid,
                ` `,
                `(`,
                (0, G.jsx)(ip, { oAssetSet: t.get(e.asset_set_id) }),
                `)`,
              ],
            }),
            data: e,
          }))
      );
    }, [i.assetset_id, a, o, u]),
    f = en();
  return f.bLoading
    ? (0, G.jsx)(tn, {
        state: f,
        strDialogTitle: k(`#TimelineMarker_Clone_title`),
        closeModal: r,
      })
    : (0, G.jsxs)(Re, {
        strTitle: k(`#TimelineMarker_Clone_title`),
        strDescription: k(`#TimelineMarker_Clone_desc`, i.name),
        onCancel: r,
        bOKDisabled: !s,
        onOK: async () => {
          (f.fnSetLoading(!0),
            (await l(t, n, s.markerid, s.image, s.image_type)) == 1
              ? (f.fnSetStrSuccess(k(`#TimelineMarker_Clone_success`)),
                f.fnSetSuccess(!0))
              : f.fnSetError(!0));
        },
        children: [
          (0, G.jsx)(`br`, {}),
          (0, G.jsx)(`br`, {}),
          (0, G.jsx)(xe, {
            rgOptions: d,
            selectedOption: s,
            onChange: (e) => c(e.data),
          }),
        ],
      });
}
function hp(e) {
  let { appid: t } = e,
    n = wd(t),
    [r] = Xe(`branchset`, !1);
  return (0, G.jsxs)(`div`, {
    className: Lf,
    children: [
      (0, G.jsxs)(`div`, {
        className: Rf,
        children: [
          (0, G.jsxs)(`div`, {
            className: zf,
            children: [
              (0, G.jsx)(`div`, {
                className: Ze,
                children: k(`#TimelineMarkers_Hidden_title`),
              }),
              (0, G.jsx)(`div`, {
                children: k(`#TimelineMarkers_Hidden_desc2`),
              }),
            ],
          }),
          (0, G.jsx)(ep, { appid: t }),
        ],
      }),
      r &&
        (0, G.jsxs)(`div`, {
          className: `kKRtxlasxms-`,
          children: [
            (0, G.jsxs)(`div`, {
              className: `ef8y-ZEir4c-`,
              children: [
                (0, G.jsx)(`div`, {
                  className: `fk3H7RK1Wg8-`,
                  children: k(`#TimelineMarkers_Hidden_branchsets_title`),
                }),
                (0, G.jsx)(rp, { appid: t }),
              ],
            }),
            (0, G.jsx)(`div`, {
              className: `SWJQfBkJ08E-`,
              children: n?.map((e) =>
                (0, G.jsx)(
                  gp,
                  { appid: t, assetSetID: e.assetset_id },
                  e.assetset_id,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function gp(e) {
  let { appid: t, assetSetID: n } = e,
    r = Ed(t, n);
  return (0, G.jsxs)(`div`, {
    className: Bf,
    children: [
      (0, G.jsxs)(`div`, {
        className: Ff,
        children: [
          (0, G.jsxs)(`div`, {
            className: Vf,
            children: [
              (0, G.jsx)(O, {
                toolTipContent: r.desc,
                children: (0, G.jsx)(`div`, {
                  className: Hf,
                  children: r.name,
                }),
              }),
              (0, G.jsx)(Od, { appid: r.appid, assetSetID: r.assetset_id }),
            ],
          }),
          (0, G.jsx)(dp, { oAssetSet: r }),
        ],
      }),
      (0, G.jsxs)(`div`, {
        className: If,
        children: [
          (0, G.jsxs)(`div`, {
            className: Pf,
            children: [
              (0, G.jsx)(_f, {
                assetSetID: r.assetset_id,
                appid: r.appid,
                strMessageOnEmpty: ``,
                bDraggable: !0,
              }),
              (0, G.jsx)(bf, {
                assetSetID: r.assetset_id,
                appid: r.appid,
                strMessage: k(`#TimelineMarkers_drag_target`),
              }),
            ],
          }),
          (0, G.jsx)(`div`, {
            children: (0, G.jsx)(Se, {
              onClick: (e) =>
                Le((0, G.jsx)(mp, { appid: t, assetSetID: n }), E(e)),
              children: k(`#TimelineMarker_Clone_title`),
            }),
          }),
        ],
      }),
    ],
  });
}
function _p(e) {
  let { appId: t } = e,
    n = Number.parseInt(t);
  return (0, G.jsx)(`div`, {
    className: Jf,
    children: (0, G.jsxs)(un, {
      onDragEnd: Kf,
      children: [
        (0, G.jsx)(vp, { appid: n }),
        (0, G.jsx)(Qf, { appid: n }),
        (0, G.jsx)(Uf, { appid: n }),
        (0, G.jsx)(hp, { appid: n }),
      ],
    }),
  });
}
function vp(e) {
  let { appid: t } = e;
  return (0, G.jsx)(`div`, {
    className: Yf,
    children: (0, G.jsxs)(`div`, {
      className: sn,
      children: [
        (0, G.jsxs)(`div`, {
          className: on,
          children: [
            (0, G.jsx)(`div`, {
              className: ln,
              children: k(`#TimelineMarkers_Editor_title`),
            }),
            (0, G.jsx)(`div`, {
              className: an,
              children: k(`#TimelineMarkers_Editor_desc`),
            }),
          ],
        }),
        (0, G.jsxs)(`div`, {
          className: rn,
          children: [
            (0, G.jsx)(`div`, {
              className: ln,
              children: (0, G.jsx)(`a`, {
                href: `${g.PARTNER_BASE_URL}doc/features/timeline`,
                className: b(cn, Qe),
                target: `_blank`,
                children: k(`#AssetRequest_General_SeeDocs`),
              }),
            }),
            (0, G.jsxs)(`div`, {
              className: an,
              children: [
                (0, G.jsx)(Be, {
                  onClick: (e) => Le((0, G.jsx)(Of, { appid: t }), E(e)),
                  children: k(`#TimelineMarkers_Editor_createnew`),
                }),
                (0, G.jsx)(`div`, {
                  children: k(`#TimelineMarkers_Editor_createnew_desc`),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { _p as default };
