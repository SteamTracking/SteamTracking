/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  C as n,
  Ft as r,
  Gt as i,
  Jt as a,
  Kt as o,
  L as s,
  Mt as c,
  Nt as l,
  Pt as u,
  Q as d,
  S as f,
  T as p,
  Ut as m,
  Wt as h,
  X as g,
  Xt as _,
  Yt as v,
  Zt as ee,
  a as y,
  bt as b,
  ct as x,
  en as te,
  in as ne,
  j as S,
  jt as re,
  qt as C,
  rt as ie,
  sn as ae,
  vt as oe,
  wt as w,
  yt as se,
} from "./chunk~de7f2df91c.js";
import {
  B as ce,
  Ft as le,
  It as T,
  Lt as ue,
  M as de,
  Mt as fe,
  N as pe,
  Nt as me,
  Ut as E,
  Wt as he,
  Z as ge,
  ct as D,
  gt as _e,
  ht as ve,
  n as ye,
  st as be,
} from "./chunk~25a6634263.js";
import {
  $a as xe,
  Ct as Se,
  Da as Ce,
  Et as we,
  Gt as Te,
  Ha as Ee,
  It as De,
  Jr as Oe,
  Lt as ke,
  Pa as Ae,
  Pt as je,
  Un as O,
  Vn as Me,
  Wt as Ne,
  Xa as Pe,
  Yn as Fe,
  an as Ie,
  da as Le,
  gn as k,
  h as Re,
  ha as ze,
  l as Be,
  la as Ve,
  tn as He,
  ua as A,
  ur as Ue,
  yn as We,
  zn as Ge,
  zt as Ke,
} from "./chunk~1fa4b8f2ff.js";
import { w as j } from "./chunk~44f252525d.js";
import { t as M } from "./chunk~7b8a87bd30.js";
import "./chunk~19394a4118.js";
import "./chunk~8681f5c764.js";
import { t as qe } from "./chunk~f4e4ed5c17.js";
import { t as Je } from "./chunk~92931c6310.js";
import { t as N } from "./chunk~c55709d290.js";
import { r as Ye } from "./chunk~af36c62e9f.js";
import { E as Xe, t as Ze } from "./chunk~2f8c67b4de.js";
import "./chunk~739842ca30.js";
import {
  $ as Qe,
  A as $e,
  B as et,
  C as tt,
  D as nt,
  E as rt,
  F as it,
  G as at,
  H as ot,
  J as st,
  K as ct,
  M as lt,
  N as ut,
  O as dt,
  P as ft,
  Q as pt,
  R as mt,
  S as ht,
  U as gt,
  V as _t,
  W as vt,
  Z as yt,
  _ as bt,
  a as xt,
  b as St,
  c as Ct,
  d as wt,
  et as Tt,
  f as Et,
  g as Dt,
  h as Ot,
  i as kt,
  j as At,
  k as jt,
  l as Mt,
  m as Nt,
  n as Pt,
  nt as Ft,
  o as It,
  p as Lt,
  q as Rt,
  r as zt,
  rt as Bt,
  s as Vt,
  t as Ht,
  tt as Ut,
  u as Wt,
  v as Gt,
  w as Kt,
  x as qt,
  y as Jt,
  z as Yt,
} from "./chunk~9658266888.js";
import { n as Xt, r as Zt, t as Qt } from "./chunk~b980797e15.js";
import { r as $t, t as en } from "./chunk~70c16cc80c.js";
import { n as tn, t as nn } from "./chunk~95ecbf576c.js";
import { t as rn } from "./chunk~c55d6473b2.js";
import {
  M as an,
  N as on,
  T as sn,
  f as cn,
  l as ln,
  u as un,
} from "./chunk~6110f63e8e.js";
import { n as dn, r as fn, t as pn } from "./chunk~f95b379b4d.js";
import {
  a as mn,
  i as hn,
  n as P,
  r as F,
  t as I,
} from "./chunk~57b6ba168b.js";
import { n as gn } from "./chunk~c627bf7efa.js";
var _n = `steam_`,
  vn = (function (e) {
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
function yn(e) {
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
function bn(e) {
  return Object.keys(e).filter((e) => !Number.isNaN(e));
}
var xn = bn(vn).map((e) => vn[e]),
  Sn = class e {
    m_mapSteamTimelineMarkers = new Map();
    GetMarkerByID(e) {
      let t = e.toLowerCase().startsWith(`steam_`)
          ? e.slice(6).toLowerCase()
          : e.toLowerCase(),
        n = this.m_mapSteamTimelineMarkers.get(t);
      if (n) return n;
      let r = parseInt(t);
      return typeof r == `number` && r >= 0 && r <= 99
        ? { func: (e) => ft({ nNumber: r }), color: 8 }
        : En();
    }
    GetAllUseableMarkerID() {
      return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
        (e) => _n + e,
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
      for (let n of xn) {
        let r = `${e}_${vn[n]}`.toLowerCase();
        this.m_mapSteamTimelineMarkers.set(r, { func: t, color: n });
      }
    }
    Init() {
      (this.AddMarker(`explosion`, ht, 8),
        this.AddMarker(`attack`, Pt, 8),
        this.AddMarker(`defend`, Gt, 8),
        this.AddMarker(`combat`, Nt, 8),
        this.AddMarker(`chest`, wt, 8),
        this.AddMarker(`view`, Ut, 8),
        s() ? this.AddMarker(`death`, Bt, 8) : this.AddMarker(`death`, bt, 8),
        this.AddMarker(`x`, Bt, 8),
        this.AddMarker(`plus`, mt, 8),
        this.AddMarker(`minus`, ut, 8),
        this.AddMarker(`info`, jt, 8),
        this.AddMarker(`bolt`, zt, 8),
        this.AddMarker(`caution`, Ct, 8),
        this.AddMarker(`completed`, Ot, 8),
        this.AddMarker(`checkmark`, Wt, 8),
        this.AddMarker(`effect`, qt, 8),
        this.AddMarker(`purchase`, Yt, 8),
        this.AddMarker(`ribbon`, _t, 8),
        this.AddMarker(`scroll`, vt, 8),
        this.AddMarker(`crown`, Dt, 8),
        this.AddMarker(`starburst`, st, 8),
        this.AddMarker(`flag`, Kt, 8),
        this.AddMarker(`cart`, Vt, 8),
        this.AddMarker(`timer`, yt, 8),
        this.AddMarker(`chat`, Mt, 8),
        this.AddMarker(`wrench`, tt, 8),
        this.AddMarker(`transfer`, pt, 8),
        this.AddMarker(`edit`, St, 8),
        this.AddMarker(`bookmark`, kt, 8),
        this.AddMarker(`invalid`, $e, 8),
        this.AddMarker(`star`, Rt, 8),
        this.AddMarker(`circle`, Et, 8),
        this.AddMarker(`square`, ct, 8),
        this.AddMarker(`triangle`, Qe, 8),
        this.AddMarker(`heart`, dt, 8),
        this.AddMarker(`diamond`, Jt, 8),
        this.AddMarker(`gem`, rt, 8),
        this.AddMarker(`group`, nt, 8),
        this.AddMarker(`pair`, it, 8),
        this.AddMarker(`single`, Tt, 8),
        this.AddMarker(`trophy`, Ht, 8),
        this.AddMarker(`achievement`, Ht, 8),
        this.AddMarker(`screenshot`, gt, 8),
        this.AddMarker(`bug`, xt, 8),
        this.AddMarker(`fix`, tt, 8),
        this.AddMarker(`person`, Tt, 8),
        this.AddMarker(`question`, et, 8));
    }
  };
function Cn(e) {
  return Sn.Get().GetMarkerByID(e);
}
function wn() {
  return { func: lt, color: 5 };
}
function Tn() {
  return { func: Ht, color: 0 };
}
function En() {
  return { func: lt, color: 8 };
}
function Dn(e) {
  return e && e.toLowerCase().startsWith(`steam_`);
}
var L = ae(ee(), 1),
  R = ae(t(), 1),
  On = ae(qe(), 1),
  kn = null;
function An(e) {
  kn
    ? console.error(`Attempt to set timeline marker hook a second time`)
    : (kn = e);
}
function jn(e, t) {
  return kn
    ? kn(e, t)
    : (console.error(
        `useGameMarkerFromID called in a context where the hook isn't defined.`,
      ),
      null);
}
function z() {
  return window.g_GRS;
}
function Mn() {
  if (z() != null) {
    let e = z();
    return {
      bLoading: e.BLoadingAppsWithBackgroundVideo(),
      rgApps: e.GetAppsWithBackgroundVideo(),
    };
  }
  return { bLoading: !1, rgApps: [] };
}
function Nn() {
  let [e, t] = (0, R.useState)(Mn());
  return ((0, R.useEffect)(() => p(Mn, t), []), e);
}
function Pn(e) {
  let { bLoading: t, rgApps: n } = Nn();
  return {
    bLoading: t,
    app: (0, R.useMemo)(() => n.find((t) => t.game_id === e), [n, e]),
  };
}
function Fn(e) {
  return (z() != null && e && z().GetClipSummariesForGame(e)) || [];
}
function In(e, t, n, r, i, a) {
  return z() == null ? null : z().LoadThumbnails(e, t, n, r, i, a ?? !0);
}
function Ln() {
  return z() == null ? {} : { fnSaveClip: z().SaveClip };
}
function Rn() {
  return z() == null ? {} : { fnDeleteClip: z().DeleteClip };
}
function zn(e, t, n, r) {
  return z() == null ? null : z().TakeScreenshot(e, t, n.valMS, r);
}
function Bn() {
  return z() == null
    ? null
    : {
        fnCreateUserTimelineMarkers: z().CreateUserTimelineMarkers,
        fnUpdateUserTimelineMarkers: z().UpdateUserTimelineMarkers,
        fnRemoveUserTimelineMarker: z().RemoveUserTimelineMarker,
      };
}
function Vn(e, t) {
  return j(() => {
    if (z() != null) return z().GetAchievementInfo(e, t);
  });
}
function Hn(e, t, n, r, i) {
  return z().ReportClipRange(e, t, n, r, i);
}
function Un() {
  return j(() => {
    if (z() != null) return !z().BEnoughDiskSpace();
  });
}
var Wn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: o.readString, bw: _.writeString },
            game_id: { n: 2, br: o.readUint64String, bw: _.writeUint64String },
            date_recorded: { n: 3, br: o.readUint32, bw: _.writeUint32 },
            duration_ms: {
              n: 4,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            recordings: { n: 5, c: Gn, r: !0, q: !0 },
            phases: { n: 6, c: qn, r: !0, q: !0 },
            significant_events: { n: 7, c: Kn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata`;
    }
  },
  Gn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: o.readString, bw: _.writeString },
            start_offset_ms: {
              n: 2,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            duration_ms: {
              n: 3,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            recording_type: { n: 4, br: o.readEnum, bw: _.writeEnum },
            delete_on_cleanup: { n: 5, br: o.readBool, bw: _.writeBool },
            video_manager_clip_id: {
              n: 6,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            video_manager_video_id: {
              n: 7,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            cdn_manifest_url: { n: 8, br: o.readString, bw: _.writeString },
            file_size: {
              n: 9,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            recording_zero_timeline_offset_ms: {
              n: 10,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata_Recording`;
    }
  },
  Kn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            rt_created: { n: 2, br: o.readUint32, bw: _.writeUint32 },
            possible_clip: { n: 3, br: o.readInt32, bw: _.writeInt32 },
            timeline_id: { n: 4, br: o.readString, bw: _.writeString },
            entry_id: { n: 5, br: o.readUint64String, bw: _.writeUint64String },
            timeline_offset_ms: {
              n: 6,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            marker_icon: { n: 8, br: o.readString, bw: _.writeString },
            marker_title: { n: 9, br: o.readString, bw: _.writeString },
            user_marker: { n: 10, br: o.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineEvent`;
    }
  },
  qn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phase_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [6, 7, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phase_id: { n: 4, br: o.readString, bw: _.writeString },
            duration_ms: {
              n: 5,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            tags: { n: 6, c: Jn, r: !0, q: !0 },
            contained_tags: { n: 7, c: Jn, r: !0, q: !0 },
            background_timeline_offset: {
              n: 8,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            attributes: { n: 9, c: Xn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase`;
    }
  },
  Jn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: o.readString, bw: _.writeString },
            group: { n: 2, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase_Tag`;
    }
  },
  Yn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: o.readString, bw: _.writeString },
            group: { n: 2, br: o.readString, bw: _.writeString },
            icon: { n: 3, br: o.readString, bw: _.writeString },
            priority: { n: 4, br: o.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineTag`;
    }
  },
  Xn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: o.readString, bw: _.writeString },
            value: { n: 2, br: o.readString, bw: _.writeString },
            priority: { n: 3, br: o.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPhaseAttribute`;
    }
  },
  Zn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Request`;
    }
  },
  Qn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: $n, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response`;
    }
  },
  $n = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            most_recent_start_time: {
              n: 2,
              br: o.readUint32,
              bw: _.writeUint32,
            },
            recording_type: { n: 3, br: o.readEnum, bw: _.writeEnum },
            video_duration_seconds: {
              n: 4,
              br: o.readDouble,
              bw: _.writeDouble,
            },
            timeline_duration_seconds: {
              n: 5,
              br: o.readDouble,
              bw: _.writeDouble,
            },
            is_active: { n: 6, br: o.readBool, bw: _.writeBool },
            file_size: {
              n: 7,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response_App`;
    }
  },
  er = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Request`;
    }
  },
  tr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timelines || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { timelines: { n: 1, c: Wn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Response`;
    }
  },
  nr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: o.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Request`;
    }
  },
  rr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            timelines: { n: 2, c: Wn, r: !0, q: !0 },
            first_timeline_start_offset_ms: {
              n: 3,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Response`;
    }
  },
  ir = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.page || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            page: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            count: { n: 2, br: o.readUint32, bw: _.writeUint32 },
            filter_gameid: {
              n: 10,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            filter_search_string: {
              n: 11,
              br: o.readString,
              bw: _.writeString,
            },
            filter_tags: { n: 12, c: ar, r: !0, q: !0 },
            filter_phase_id: { n: 13, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request`;
    }
  },
  ar = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: o.readString, bw: _.writeString },
            name: { n: 2, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request_Tag`;
    }
  },
  or = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phases || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phases: { n: 1, c: sr, r: !0, q: !0 },
            total_count: { n: 2, br: o.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response`;
    }
  },
  sr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [7, 8, 10, 13, 16, 17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            date_recorded: { n: 5, br: o.readUint32, bw: _.writeUint32 },
            duration_ms: {
              n: 6,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            tags: { n: 7, c: Yn, r: !0, q: !0 },
            contained_tags: { n: 8, c: Yn, r: !0, q: !0 },
            background_recording: { n: 9, c: cr },
            clip_ids: {
              n: 10,
              r: !0,
              q: !0,
              br: o.readString,
              bw: _.writeRepeatedString,
            },
            type: { n: 11, br: o.readEnum, bw: _.writeEnum },
            start_ms: {
              n: 12,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            screenshots: {
              n: 13,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
            active: { n: 14, br: o.readBool, bw: _.writeBool },
            phase_id: { n: 15, br: o.readString, bw: _.writeString },
            significant_events: { n: 16, c: _r, r: !0, q: !0 },
            attributes: { n: 17, c: Xn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase`;
    }
  },
  cr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: o.readString, bw: _.writeString },
            offset: { n: 2, br: o.readUint64String, bw: _.writeUint64String },
            duration_ms: {
              n: 3,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase_BackgroundRecording`;
    }
  },
  lr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Request`;
    }
  },
  ur = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: Yn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Response`;
    }
  },
  dr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Request`;
    }
  },
  fr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.enough_space || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { enough_space: { n: 1, br: o.readBool, bw: _.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Response`;
    }
  },
  pr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Request`;
    }
  },
  mr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { size: { n: 1, br: o.readDouble, bw: _.writeDouble } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Response`;
    }
  },
  hr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: o.readEnum, bw: _.writeEnum },
            timeline_id: { n: 2, br: o.readString, bw: _.writeString },
            game_id: { n: 3, br: o.readUint64String, bw: _.writeUint64String },
            start_time: { n: 4, br: o.readUint32, bw: _.writeUint32 },
            duration_ms: {
              n: 5,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineChanged_Notification`;
    }
  },
  gr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: o.readEnum, bw: _.writeEnum },
            timeline_id: { n: 2, br: o.readString, bw: _.writeString },
            game_id: { n: 4, br: o.readUint64String, bw: _.writeUint64String },
            session_id: { n: 5, br: o.readString, bw: _.writeString },
            start_offset: {
              n: 6,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            recording_type: { n: 8, br: o.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_RecordingSessionChanged_Notification`;
    }
  },
  _r = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [17, 19], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: o.readString, bw: _.writeString },
            entry_id: { n: 2, br: o.readUint64String, bw: _.writeUint64String },
            time: { n: 3, br: o.readUint64String, bw: _.writeUint64String },
            type: { n: 4, br: o.readEnum, bw: _.writeEnum },
            game_mode: { n: 5, br: o.readInt32, bw: _.writeInt32 },
            range_title: { n: 7, br: o.readString, bw: _.writeString },
            range_duration: {
              n: 8,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            range_possible_clip: { n: 9, br: o.readInt32, bw: _.writeInt32 },
            timestamp_title: { n: 10, br: o.readString, bw: _.writeString },
            marker_icon: { n: 11, br: o.readString, bw: _.writeString },
            marker_description: { n: 13, br: o.readString, bw: _.writeString },
            marker_priority: { n: 14, br: o.readInt32, bw: _.writeInt32 },
            screenshot_handle: { n: 15, br: o.readUint32, bw: _.writeUint32 },
            achievement_name: { n: 16, br: o.readString, bw: _.writeString },
            tag: { n: 17, c: Yn, r: !0, q: !0 },
            phase_id: { n: 18, br: o.readString, bw: _.writeString },
            attributes: { n: 19, c: Xn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineEntry`;
    }
  },
  vr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry: { n: 1, c: _r },
            game_id: {
              n: 2,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryChanged_Notification`;
    }
  },
  yr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            timeline_id: { n: 2, br: o.readString, bw: _.writeString },
            entry_id: { n: 3, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryRemoved_Notification`;
    }
  },
  br = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_LowDiskSpace_Notification`;
    }
  },
  xr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PostGameHighlightsChanged_Notification`;
    }
  },
  Sr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            phase_id: { n: 2, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToGamePhase_Notification`;
    }
  },
  Cr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            entry_id: { n: 2, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToTimelineEvent_Notification`;
    }
  },
  wr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PhaseListChanged_Notification`;
    }
  },
  Tr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: o.readString, bw: _.writeString },
            game_id: { n: 2, br: o.readUint64String, bw: _.writeUint64String },
            duration_ms: {
              n: 3,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            date_recorded: { n: 4, br: o.readUint32, bw: _.writeUint32 },
            start_timeline_id: { n: 5, br: o.readString, bw: _.writeString },
            start_offset_ms: {
              n: 6,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            published_file_id: {
              n: 7,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            file_size: {
              n: 8,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            name: { n: 9, br: o.readString, bw: _.writeString },
            date_clipped: { n: 10, br: o.readUint32, bw: _.writeUint32 },
            temporary: { n: 11, br: o.readBool, bw: _.writeBool },
            original_device: { n: 12, br: o.readString, bw: _.writeString },
            original_gaming_device_type: {
              n: 13,
              br: o.readUint32,
              bw: _.writeUint32,
            },
            date_downloaded: { n: 14, br: o.readUint32, bw: _.writeUint32 },
            thumbnail_url: { n: 15, br: o.readString, bw: _.writeString },
            thumbnail_width: { n: 16, br: o.readUint32, bw: _.writeUint32 },
            thumbnail_height: { n: 17, br: o.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipSummary`;
    }
  },
  Er = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            start: { n: 2, c: Dr },
            end: { n: 3, c: Dr },
            name: { n: 4, br: o.readString, bw: _.writeString },
            src_clip_id: { n: 5, br: o.readString, bw: _.writeString },
            temporary: { n: 6, br: o.readBool, bw: _.writeBool },
            force_thumbnail: { n: 7, br: o.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request`;
    }
  },
  Dr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: o.readString, bw: _.writeString },
            offset_ms: {
              n: 2,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request_Position`;
    }
  },
  Or = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Tr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Response`;
    }
  },
  kr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: o.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Request`;
    }
  },
  Ar = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Response`;
    }
  },
  jr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bitrate_kbps || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bitrate_kbps: { n: 1, br: o.readInt32, bw: _.writeInt32 },
            width: { n: 2, br: o.readInt32, bw: _.writeInt32 },
            height: { n: 3, br: o.readInt32, bw: _.writeInt32 },
            frames_per_second: { n: 4, br: o.readInt32, bw: _.writeInt32 },
            codec: { n: 5, br: o.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Settings`;
    }
  },
  Mr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: o.readString, bw: _.writeString },
            export_mp4_path: { n: 2, br: o.readString, bw: _.writeString },
            settings: { n: 3, c: jr },
            use_unique_filename: { n: 4, br: o.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Request`;
    }
  },
  Nr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { result: { n: 1, br: o.readInt32, bw: _.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Response`;
    }
  },
  Pr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: o.readString, bw: _.writeString },
            settings: { n: 2, c: jr },
            run_policy_checks: { n: 3, br: o.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Request`;
    }
  },
  Fr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.estimated_size || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            estimated_size: {
              n: 1,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            settings: { n: 2, c: jr },
            result: { n: 3, br: o.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Response`;
    }
  },
  Ir = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: {
              n: 1,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
            timeline_id: { n: 2, br: o.readString, bw: _.writeString },
            timeline_offset_ms: {
              n: 3,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
            source_clip_id: { n: 4, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Request`;
    }
  },
  Lr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshot_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            screenshot_id: {
              n: 1,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Response`;
    }
  },
  Rr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: o.readString, bw: _.writeString },
            title: { n: 2, br: o.readString, bw: _.writeString },
            desc: { n: 3, br: o.readString, bw: _.writeString },
            visibility: { n: 4, br: o.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Request`;
    }
  },
  zr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Tr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Response`;
    }
  },
  Br = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: o.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Request`;
    }
  },
  Vr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.zip_path || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { zip_path: { n: 1, br: o.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Response`;
    }
  },
  Hr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            created_after: { n: 2, br: o.readUint32, bw: _.writeUint32 },
            include_temporary: { n: 3, br: o.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Request`;
    }
  },
  Ur = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip: { n: 1, c: Tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Response`;
    }
  },
  Wr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            created_after: { n: 2, br: o.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Request`;
    }
  },
  Gr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.events || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { events: { n: 1, c: Kn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Response`;
    }
  },
  Kr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            entry: { n: 2, c: _r },
            clip_id: { n: 3, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Request`;
    }
  },
  qr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Response`;
    }
  },
  Jr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            entry: { n: 2, c: _r },
            clip_id: { n: 3, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Request`;
    }
  },
  Yr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Response`;
    }
  },
  Xr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
            timeline_id: { n: 2, br: o.readString, bw: _.writeString },
            entry_id: { n: 3, br: o.readUint64String, bw: _.writeUint64String },
            clip_id: { n: 4, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Request`;
    }
  },
  Zr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Response`;
    }
  },
  Qr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_ids || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: o.readUint64String,
              pbr: o.readPackedUint64String,
              bw: _.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Request`;
    }
  },
  $r = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Response`;
    }
  },
  ei = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.folder_path || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            folder_path: { n: 1, br: o.readString, bw: _.writeString },
            type: { n: 2, br: o.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Request`;
    }
  },
  ti = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            size: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Response`;
    }
  },
  ni = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: o.readString, bw: _.writeString },
            clip_id: { n: 3, br: o.readString, bw: _.writeString },
            timeline_id: { n: 7, br: o.readString, bw: _.writeString },
            start_offset_us: {
              n: 4,
              r: !0,
              q: !0,
              br: o.readInt64String,
              pbr: o.readPackedInt64String,
              bw: _.writeRepeatedInt64String,
            },
            major_axis: { n: 5, d: 512, br: o.readUint32, bw: _.writeUint32 },
            time_precision: { n: 6, d: 0, br: o.readEnum, bw: _.writeEnum },
            format: { n: 8, d: 1, br: o.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Request`;
    }
  },
  ri = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnails || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { thumbnails: { n: 1, c: ii, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response`;
    }
  },
  ii = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_data || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_data: { n: 1, br: o.readBytes, bw: _.writeBytes },
            width: { n: 2, br: o.readUint32, bw: _.writeUint32 },
            height: { n: 3, br: o.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response_Thumbnail`;
    }
  },
  ai = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Request`;
    }
  },
  oi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Response`;
    }
  },
  si = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Request`;
    }
  },
  ci = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Tr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Response`;
    }
  },
  li = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Request`;
    }
  },
  ui = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_size || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            file_size: {
              n: 1,
              br: o.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Response`;
    }
  },
  di = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Request`;
    }
  },
  fi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Response`;
    }
  },
  pi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Request`;
    }
  },
  mi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.per_process_audio_capture || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            per_process_audio_capture: {
              n: 1,
              br: o.readBool,
              bw: _.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Response`;
    }
  },
  hi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Tr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipCreated_Notification`;
    }
  },
  gi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: o.readString, bw: _.writeString },
            game_id: { n: 2, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipDeleted_Notification`;
    }
  },
  _i = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: o.readFloat, bw: _.writeFloat },
            clip_id: { n: 2, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportProgress_Notification`;
    }
  },
  vi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: o.readFixed64String, bw: _.writeFixed64String },
            enabled: { n: 2, br: o.readBool, bw: _.writeBool },
            minutes: { n: 3, br: o.readUint32, bw: _.writeUint32 },
            bitrate: { n: 4, br: o.readString, bw: _.writeString },
            infinite: { n: 5, br: o.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PerGameSettings`;
    }
  },
  yi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Request`;
    }
  },
  bi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: vi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Response`;
    }
  },
  xi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_settings || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { game_settings: { n: 1, c: vi } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Request`;
    }
  },
  Si = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Response`;
    }
  },
  Ci = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: o.readFixed64String, bw: _.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Request`;
    }
  },
  wi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Response`;
    }
  },
  Ti = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: o.readFloat, bw: _.writeFloat },
            clip_id: { n: 2, br: o.readString, bw: _.writeString },
            eresult: { n: 3, br: o.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadProgress_Notification`;
    }
  },
  Ei = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: o.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Request`;
    }
  },
  Di = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Response`;
    }
  },
  Oi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Request`;
    }
  },
  ki = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_h265_enabled || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_h265_enabled: { n: 1, br: o.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Response`;
    }
  },
  Ai = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StateChanged_Notification`;
    }
  },
  B;
(function (e) {
  e.GetAppsWithBackgroundVideoHandler = {
    name: `GameRecording.GetAppsWithBackgroundVideo#1`,
    request: Zn,
    response: Qn,
  };
  function t(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAppsWithBackgroundVideo#1`,
            b(Zn, e),
            Qn,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetAppsWithBackgroundVideo = t;
  function n(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAppsWithBackgroundVideo#1`,
            b(Zn, e),
            Qn,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAppsWithBackgroundVideo = n),
    (e.GetTimelinesForAppHandler = {
      name: `GameRecording.GetTimelinesForApp#1`,
      request: er,
      response: tr,
    }));
  function r(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, b(er, e), tr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForApp = r;
  function i(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, b(er, e), tr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForApp = i),
    (e.GetTimelinesForClipHandler = {
      name: `GameRecording.GetTimelinesForClip#1`,
      request: nr,
      response: rr,
    }));
  function a(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, b(nr, e), rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForClip = a;
  function o(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, b(nr, e), rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForClip = o),
    (e.QueryPhasesHandler = {
      name: `GameRecording.QueryPhases#1`,
      request: ir,
      response: or,
    }));
  function s(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, b(ir, e), or, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.QueryPhases = s;
  function c(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, b(ir, e), or, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgQueryPhases = c),
    (e.GetTagsHandler = {
      name: `GameRecording.GetTags#1`,
      request: lr,
      response: ur,
    }));
  function l(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, b(lr, e), ur, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTags = l;
  function u(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, b(lr, e), ur, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTags = u),
    (e.GetEnoughDiskSpaceHandler = {
      name: `GameRecording.GetEnoughDiskSpace#1`,
      request: dr,
      response: fr,
    }));
  function d(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, b(dr, e), fr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetEnoughDiskSpace = d;
  function f(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, b(dr, e), fr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetEnoughDiskSpace = f),
    (e.GetAvailableDiskSpaceHandler = {
      name: `GameRecording.GetAvailableDiskSpace#1`,
      request: pr,
      response: mr,
    }));
  function p(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, b(pr, e), mr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetAvailableDiskSpace = p;
  function m(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, b(pr, e), mr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetAvailableDiskSpace = m),
    (e.SaveClipHandler = {
      name: `GameRecording.SaveClip#1`,
      request: Er,
      response: Or,
    }));
  function h(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SaveClip#1`, b(Er, e), Or, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SaveClip = h;
  function g(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SaveClip#1`, b(Er, e), Or, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSaveClip = g),
    (e.DeleteClipHandler = {
      name: `GameRecording.DeleteClip#1`,
      request: kr,
      response: Ar,
    }));
  function _(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeleteClip#1`, b(kr, e), Ar, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeleteClip = _;
  function v(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeleteClip#1`, b(kr, e), Ar, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeleteClip = v),
    (e.GetClipsHandler = {
      name: `GameRecording.GetClips#1`,
      request: Hr,
      response: Ur,
    }));
  function ee(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetClips#1`, b(Hr, e), Ur, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetClips = ee;
  function y(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetClips#1`, b(Hr, e), Ur, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetClips = y),
    (e.UploadClipToSteamHandler = {
      name: `GameRecording.UploadClipToSteam#1`,
      request: Rr,
      response: zr,
    }));
  function x(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, b(Rr, e), zr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UploadClipToSteam = x;
  function te(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, b(Rr, e), zr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUploadClipToSteam = te),
    (e.ExportClipHandler = {
      name: `GameRecording.ExportClip#1`,
      request: Mr,
      response: Nr,
    }));
  function ne(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClip#1`, b(Mr, e), Nr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClip = ne;
  function S(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClip#1`, b(Mr, e), Nr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClip = S),
    (e.ExportClipPreviewHandler = {
      name: `GameRecording.ExportClipPreview#1`,
      request: Pr,
      response: Fr,
    }));
  function re(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, b(Pr, e), Fr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClipPreview = re;
  function C(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, b(Pr, e), Fr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClipPreview = C),
    (e.TakeScreenshotHandler = {
      name: `GameRecording.TakeScreenshot#1`,
      request: Ir,
      response: Lr,
    }));
  function ie(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, b(Ir, e), Lr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.TakeScreenshot = ie;
  function ae(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, b(Ir, e), Lr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgTakeScreenshot = ae),
    (e.ZipClipHandler = {
      name: `GameRecording.ZipClip#1`,
      request: Br,
      response: Vr,
    }));
  function oe(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ZipClip#1`, b(Br, e), Vr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ZipClip = oe;
  function w(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ZipClip#1`, b(Br, e), Vr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgZipClip = w),
    (e.StartRecordingHandler = {
      name: `GameRecording.StartRecording#1`,
      request: ai,
      response: oi,
    }));
  function se(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StartRecording#1`, b(ai, e), oi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StartRecording = se;
  function ce(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StartRecording#1`, b(ai, e), oi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStartRecording = ce),
    (e.StopRecordingHandler = {
      name: `GameRecording.StopRecording#1`,
      request: si,
      response: ci,
    }));
  function le(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StopRecording#1`, b(si, e), ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StopRecording = le;
  function T(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StopRecording#1`, b(si, e), ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStopRecording = T),
    (e.GetBackgroundRecordingFileSizeHandler = {
      name: `GameRecording.GetBackgroundRecordingFileSize#1`,
      request: li,
      response: ui,
    }));
  function ue(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            b(li, e),
            ui,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetBackgroundRecordingFileSize = ue;
  function de(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            b(li, e),
            ui,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetBackgroundRecordingFileSize = de),
    (e.CleanupBackgroundRecordingsHandler = {
      name: `GameRecording.CleanupBackgroundRecordings#1`,
      request: di,
      response: fi,
    }));
  function fe(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            b(di, e),
            fi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.CleanupBackgroundRecordings = fe;
  function pe(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            b(di, e),
            fi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgCleanupBackgroundRecordings = pe),
    (e.GetAndTrimPostGameHighlightsHandler = {
      name: `GameRecording.GetAndTrimPostGameHighlights#1`,
      request: Wr,
      response: Gr,
    }));
  function me(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            b(Wr, e),
            Gr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetAndTrimPostGameHighlights = me;
  function E(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            b(Wr, e),
            Gr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAndTrimPostGameHighlights = E),
    (e.GetThumbnailsHandler = {
      name: `GameRecording.GetThumbnails#1`,
      request: ni,
      response: ri,
    }));
  function he(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetThumbnails#1`, b(ni, e), ri, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetThumbnails = he;
  function ge(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetThumbnails#1`, b(ni, e), ri, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetThumbnails = ge),
    (e.GetPlatformCapabilitiesHandler = {
      name: `GameRecording.GetPlatformCapabilities#1`,
      request: pi,
      response: mi,
    }));
  function D(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, b(pi, e), mi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPlatformCapabilities = D;
  function _e(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, b(pi, e), mi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPlatformCapabilities = _e),
    (e.NotifyTimelineChangedHandler = {
      name: `GameRecording.NotifyTimelineChanged#1`,
      request: hr,
    }));
  function ve(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            B.NotifyTimelineChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineChanged = ve;
  function ye(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineChanged#1`,
            b(hr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineChanged = ye;
  function be(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineChanged#1`,
            b(hr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineChanged = be),
    (e.NotifyRecordingSessionChangedHandler = {
      name: `GameRecording.NotifyRecordingSessionChanged#1`,
      request: gr,
    }));
  function xe(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            B.NotifyRecordingSessionChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyRecordingSessionChanged = xe;
  function Se(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            b(gr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyRecordingSessionChanged = Se;
  function Ce(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            b(gr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyRecordingSessionChanged = Ce),
    (e.NotifyTimelineEntryChangedHandler = {
      name: `GameRecording.NotifyTimelineEntryChanged#1`,
      request: vr,
    }));
  function we(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            B.NotifyTimelineEntryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryChanged = we;
  function Te(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            b(vr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryChanged = Te;
  function Ee(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            b(vr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryChanged = Ee),
    (e.NotifyTimelineEntryRemovedHandler = {
      name: `GameRecording.NotifyTimelineEntryRemoved#1`,
      request: yr,
    }));
  function De(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            B.NotifyTimelineEntryRemovedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryRemoved = De;
  function Oe(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            b(yr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryRemoved = Oe;
  function ke(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            b(yr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryRemoved = ke),
    (e.NotifyClipCreatedHandler = {
      name: `GameRecording.NotifyClipCreated#1`,
      request: hi,
    }));
  function Ae(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(B.NotifyClipCreatedHandler, e)
    );
  }
  e.RegisterForNotifyClipCreated = Ae;
  function je(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, b(hi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipCreated = je;
  function O(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, b(hi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipCreated = O),
    (e.NotifyClipDeletedHandler = {
      name: `GameRecording.NotifyClipDeleted#1`,
      request: gi,
    }));
  function Me(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(B.NotifyClipDeletedHandler, e)
    );
  }
  e.RegisterForNotifyClipDeleted = Me;
  function Ne(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, b(gi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipDeleted = Ne;
  function Pe(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, b(gi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipDeleted = Pe),
    (e.NotifyExportProgressHandler = {
      name: `GameRecording.NotifyExportProgress#1`,
      request: _i,
    }));
  function Fe(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(B.NotifyExportProgressHandler, e)
    );
  }
  e.RegisterForNotifyExportProgress = Fe;
  function Ie(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, b(_i, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyExportProgress = Ie;
  function Le(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, b(_i, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyExportProgress = Le),
    (e.NotifyUploadProgressHandler = {
      name: `GameRecording.NotifyUploadProgress#1`,
      request: Ti,
    }));
  function k(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(B.NotifyUploadProgressHandler, e)
    );
  }
  e.RegisterForNotifyUploadProgress = k;
  function Re(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, b(Ti, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyUploadProgress = Re;
  function ze(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, b(Ti, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyUploadProgress = ze),
    (e.NotifyLowDiskSpaceHandler = {
      name: `GameRecording.NotifyLowDiskSpace#1`,
      request: br,
    }));
  function Be(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(B.NotifyLowDiskSpaceHandler, e)
    );
  }
  e.RegisterForNotifyLowDiskSpace = Be;
  function Ve(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, b(br, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyLowDiskSpace = Ve;
  function He(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, b(br, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyLowDiskSpace = He),
    (e.NotifyPostGameHighlightsChangedHandler = {
      name: `GameRecording.NotifyPostGameHighlightsChanged#1`,
      request: xr,
    }));
  function A(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            B.NotifyPostGameHighlightsChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPostGameHighlightsChanged = A;
  function Ue(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            b(xr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPostGameHighlightsChanged = Ue;
  function We(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            b(xr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPostGameHighlightsChanged = We),
    (e.NotifyOpenOverlayToGamePhaseHandler = {
      name: `GameRecording.NotifyOpenOverlayToGamePhase#1`,
      request: Sr,
    }));
  function Ge(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            B.NotifyOpenOverlayToGamePhaseHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToGamePhase = Ge;
  function Ke(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            b(Sr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToGamePhase = Ke;
  function j(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            b(Sr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToGamePhase = j),
    (e.NotifyOpenOverlayToTimelineEventHandler = {
      name: `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
      request: Cr,
    }));
  function qe(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            B.NotifyOpenOverlayToTimelineEventHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToTimelineEvent = qe;
  function Je(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            b(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToTimelineEvent = Je;
  function N(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            b(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToTimelineEvent = N),
    (e.NotifyPhaseListChangedHandler = {
      name: `GameRecording.NotifyPhaseListChanged#1`,
      request: wr,
    }));
  function Ye(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            B.NotifyPhaseListChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPhaseListChanged = Ye;
  function Xe(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            b(wr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPhaseListChanged = Xe;
  function Ze(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            b(wr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPhaseListChanged = Ze),
    (e.GetPerGameSettingsHandler = {
      name: `GameRecording.GetPerGameSettings#1`,
      request: yi,
      response: bi,
    }));
  function Qe(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, b(yi, e), bi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPerGameSettings = Qe;
  function $e(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, b(yi, e), bi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPerGameSettings = $e),
    (e.SetPerGameSettingsHandler = {
      name: `GameRecording.SetPerGameSettings#1`,
      request: xi,
      response: Si,
    }));
  function et(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, b(xi, e), Si, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SetPerGameSettings = et;
  function tt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, b(xi, e), Si, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSetPerGameSettings = tt),
    (e.DeletePerGameSettingsHandler = {
      name: `GameRecording.DeletePerGameSettings#1`,
      request: Ci,
      response: wi,
    }));
  function nt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, b(Ci, e), wi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeletePerGameSettings = nt;
  function rt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, b(Ci, e), wi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeletePerGameSettings = rt),
    (e.UserAddTimelineEntryHandler = {
      name: `GameRecording.UserAddTimelineEntry#1`,
      request: Kr,
      response: qr,
    }));
  function it(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, b(Kr, e), qr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserAddTimelineEntry = it;
  function at(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, b(Kr, e), qr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserAddTimelineEntry = at),
    (e.UserUpdateTimelineEntryHandler = {
      name: `GameRecording.UserUpdateTimelineEntry#1`,
      request: Jr,
      response: Yr,
    }));
  function ot(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, b(Jr, e), Yr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserUpdateTimelineEntry = ot;
  function st(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, b(Jr, e), Yr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserUpdateTimelineEntry = st),
    (e.UserRemoveTimelineEntryHandler = {
      name: `GameRecording.UserRemoveTimelineEntry#1`,
      request: Xr,
      response: Zr,
    }));
  function ct(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, b(Xr, e), Zr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserRemoveTimelineEntry = ct;
  function lt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, b(Xr, e), Zr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserRemoveTimelineEntry = lt),
    (e.ManuallyDeleteRecordingsForAppsHandler = {
      name: `GameRecording.ManuallyDeleteRecordingsForApps#1`,
      request: Qr,
      response: $r,
    }));
  function ut(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            b(Qr, e),
            $r,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.ManuallyDeleteRecordingsForApps = ut;
  function dt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            b(Qr, e),
            $r,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgManuallyDeleteRecordingsForApps = dt),
    (e.GetTotalDiskSpaceUsageHandler = {
      name: `GameRecording.GetTotalDiskSpaceUsage#1`,
      request: ei,
      response: ti,
    }));
  function ft(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, b(ei, e), ti, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTotalDiskSpaceUsage = ft;
  function pt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, b(ei, e), ti, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTotalDiskSpaceUsage = pt),
    (e.SwitchBackgroundRecordingGameHandler = {
      name: `GameRecording.SwitchBackgroundRecordingGame#1`,
      request: Ei,
      response: Di,
    }));
  function mt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            b(Ei, e),
            Di,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.SwitchBackgroundRecordingGame = mt;
  function ht(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            b(Ei, e),
            Di,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgSwitchBackgroundRecordingGame = ht),
    (e.GetStateHandler = {
      name: `GameRecording.GetState#1`,
      request: Oi,
      response: ki,
    }));
  function gt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, b(Oi, e), ki, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetState = gt;
  function _t(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, b(Oi, e), ki, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetState = _t),
    (e.NotifyStateChangedHandler = {
      name: `GameRecording.NotifyStateChanged#1`,
      request: Ai,
    }));
  function vt(e, t) {
    return (
      (t ||= M().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(B.NotifyStateChangedHandler, e)
    );
  }
  e.RegisterForNotifyStateChanged = vt;
  function yt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, b(Ai, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyStateChanged = yt;
  function bt(e, t) {
    return (
      (t ||= M().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, b(Ai, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SendMsgNotifyStateChanged = bt;
})((B ||= {}));
var ji = (function (e) {
  return (
    (e[(e.Invalid = 0)] = `Invalid`),
    (e[(e.Playing = 1)] = `Playing`),
    (e[(e.Staging = 2)] = `Staging`),
    (e[(e.Menus = 3)] = `Menus`),
    e
  );
})({});
function Mi(e) {
  return e.type === `gamemode`;
}
function Ni(e) {
  return e.type === `state_description`;
}
function Pi(e) {
  return e.type === `event` && parseInt(e.duration) > 0;
}
function Fi(e) {
  return e.type === `event`;
}
function Ii(e) {
  return e.type === `achievement`;
}
function Li(e) {
  return e.type === `error`;
}
function Ri(e) {
  return e.type === `usermarker`;
}
function zi(e) {
  return e.type === `screenshot`;
}
function Bi(e) {
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
var Vi = new me(`ReactUsageReporting`).Debug,
  Hi = 100,
  Ui = xe.PerMinute * 1e3,
  Wi = class {
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
      setTimeout(() => this.CheckSend(), Ui);
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
      (Vi(`Route match: ` + e), this.ReportInternal(e, this.m_mapRoutes));
    }
    ReportTrackedComponent(e) {
      (Vi(`Tracked component: ` + e),
        this.ReportInternal(e, this.m_mapComponents));
    }
    ReportTrackedAction(e) {
      (Vi(`User action: ` + e), this.ReportInternal(e, this.m_mapActions));
    }
    ShouldSendMetricsImmediately() {
      return this.m_reportCount >= Hi;
    }
    SendMetrics() {
      if (!this.m_bInitialized) return;
      let e = se.Init(re);
      (e.Body().set_product(this.m_strProduct),
        e.Body().set_version(this.m_strVersion),
        this.m_mapRoutes.forEach((t, n) => {
          let r = new u();
          (r.set_route(n), r.set_count(t), e.Body().add_routes(r));
        }),
        this.m_mapComponents.forEach((t, n) => {
          let r = new l();
          (r.set_component(n), r.set_count(t), e.Body().add_components(r));
        }),
        this.m_mapActions.forEach((t, n) => {
          let r = new c();
          (r.set_action(n), r.set_count(t), e.Body().add_actions(r));
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        r.ReportReactUsage(this.m_transport, e));
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
e([T], Wi.prototype, `CheckSend`, null);
var V = new Wi();
function H(e) {
  return { type: `global`, valMS: e };
}
function Gi(e) {
  return { type: `timeline`, valMS: e };
}
function Ki(e) {
  return { type: `global`, valPX: e };
}
function qi(e) {
  return { type: `scrollWindow`, valPX: e };
}
var Ji = class e {
    m_ulGameID;
    constructor(e, t, n) {
      if (typeof e == `string`) this.m_ulGameID = ye.fromString(e, !0);
      else {
        let r = n,
          i = ((e & 255) << 24) + (t & 16777215);
        this.m_ulGameID = ye.fromBits(i, r, !0);
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
      return this.GetType() === x.k_EGameIDTypeApp;
    }
    BIsShortcut() {
      return this.GetType() === x.k_EGameIDTypeShortcut;
    }
    BIsMod() {
      return this.GetType() === x.k_EGameIDTypeGameMod;
    }
    GetInternalAppID() {
      return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
    }
    BIsValid() {
      switch (this.GetType()) {
        case x.k_EGameIDTypeApp:
          return this.GetAppID() !== 0;
        case x.k_EGameIDTypeGameMod:
          return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
        case x.k_EGameIDTypeShortcut:
          return !!(this.GetModID() & 2147483648);
        default:
          return (te(!1, `Unknown GameID type: ${this.GetType()}`), !1);
      }
    }
    static InitFromAppID(t) {
      return new e(x.k_EGameIDTypeApp, t, 0);
    }
    static InitFromShortcutID(t) {
      return new e(x.k_EGameIDTypeShortcut, 0, t);
    }
  },
  Yi = 1e4,
  Xi = 3e3,
  Zi = 4e3,
  Qi = class e {
    constructor() {
      f(this);
    }
    m_bInitialized = !1;
    m_rgListeners = [];
    m_gameID;
    m_clipID;
    m_ulFirstTimelineOffsetMS = 0;
    m_rgTimelineMetadata = [];
    m_mapTimelineData = new Map();
    m_mapRunningTimelines = new Map();
    m_schUpdateRunning = new ve();
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
      return (this.m_rgListeners.push(e), () => ue(this.m_rgListeners, e));
    }
    async LoadTimelinesForBackgroundVideo(e) {
      this.m_gameID = e;
      let { timelines: t = [] } = (await B.GetTimelinesForApp({ game_id: e }))
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
      let t = await B.GetTimelinesForClip({ clip_id: e });
      if (t.GetEResult() != 1) throw Error(`Unable to load clip ` + e);
      let {
        timelines: n = [],
        game_id: r,
        first_timeline_start_offset_ms: i,
      } = t.Body().toObject();
      ((this.m_gameID = r), this.UpdateTimelineMetadata(n));
      for (let t of this.m_rgTimelineMetadata) {
        P(`Loaded clip ${e} timeline ${t.metadata.timeline_id}`);
        for (let e of t.metadata.recordings)
          P(`Clip recording ${e.recording_id} duration ${e.duration_ms}`);
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
            : (n.push({ nGlobalOffsetMS: H(r), metadata: t }),
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
          r = On.default
            .get(t, { withCredentials: !1 })
            .then(
              (t) => {
                if (t.status == 200 && t.data) {
                  ea(t.data);
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
            parseInt(t.m_rgGameModeChanges[0].time) < Yi &&
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
            nTimelineOffsetMS: Gi(r - i - a),
          };
        i += o;
      }
      return { strTimelineID: void 0, nTimelineOffsetMS: Gi(NaN) };
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
          o = E(e, (e) => t.valMS - 1 - parseInt(e.time));
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
          o = E(e, (e) => t.valMS - parseInt(e.time));
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
        a = E(n.m_rgEntries, (e) => i - parseInt(e.time));
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
              globalMS: H(i),
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
                  globalMS: H(i),
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
        a = E(n.m_rgEntries, (e) => i - parseInt(e.time)) + 1;
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
              globalMS: H(i),
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
                  globalMS: H(i),
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
      let r = E(
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
        ((i = E(r.m_rgGameModeChanges, e)), (a = E(r.m_rgEntries, e)));
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
        ? ji.Playing
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
      he(e.m_rgEntries, t, (e, t) => parseInt(e.time) - parseInt(t.time));
    }
    AddEventToTimeline(e, t, n, r, i, a, o, s) {
      if (!this.m_bInitialized)
        return (F(`timeline loader not initialized, unexpected`), !1);
      let c = this.m_mapTimelineData.get(e);
      if (!c) return (F(`failed to find timeline ${e}`), !1);
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
        I(`adding timeline event marker at ${e} at ${l} MS`),
        this.InsertEntryIntoTimelineSorted(c, u),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    RemoveTimelineEvent(e, t) {
      if (!this.m_bInitialized)
        return (F(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (F(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (F(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddUserMarker(e, t, n, r) {
      if (!this.m_bInitialized)
        return (F(`timeline loader not initialized, unexpected`), !1);
      let i = this.m_mapTimelineData.get(e);
      if (!i) return (F(`failed to find timeline ${e}`), !1);
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
        I(`adding user marker at ${e} at ${a} MS`),
        this.InsertEntryIntoTimelineSorted(i, o),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    UpdateUserMarker(e, t, n) {
      if (!this.m_bInitialized)
        return (F(`timeline loader not initialized, unexpected`), !1);
      let r = this.m_mapTimelineData.get(e);
      if (!r) return (F(`failed to find timeline ${e}`), !1);
      let i = r.m_rgEntries.findIndex((e) => e.id === t);
      if (i < 0) return (F(`failed to find entry by id: ${t}`), !1);
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
        return (F(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (F(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (F(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddRunningTimeline(e, t, n) {
      if (this.m_rgTimelineMetadata.find((t) => t.metadata.timeline_id == e))
        return;
      let r = { timeline_id: e, game_id: t, date_recorded: n, recordings: [] },
        i = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1],
        a = i ? i.nGlobalOffsetMS.valMS + parseInt(i.metadata.duration_ms) : 0;
      (he(
        this.m_rgTimelineMetadata,
        { nGlobalOffsetMS: H(a), metadata: r },
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
        m_nPerfCounterOffsetMS: Math.max(0, Pe() - n) * 1e3,
        m_runningRecording: null,
      };
      (this.m_mapRunningTimelines.set(e, o),
        this.m_schUpdateRunning.IsScheduled() ||
          this.m_schUpdateRunning.Schedule(Zi, this.UpdateRunningTimelines),
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
          this.m_schUpdateRunning.Schedule(Zi, this.UpdateRunningTimelines),
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
      let r = Bi(e);
      if (!r) return;
      Mi(r)
        ? he(
            n.m_rgGameModeChanges,
            r,
            (e, t) => parseInt(e.time) - parseInt(t.time),
          )
        : Ni(r)
          ? he(
              n.m_rgStateDescriptions,
              r,
              (e, t) => parseInt(e.time) - parseInt(t.time),
            )
          : he(n.m_rgEntries, r, (e, t) => parseInt(e.time) - parseInt(t.time));
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
      let t = e.session_id,
        n = e.notification_type;
      if (n == 1) {
        let n = this.m_mapRunningTimelines.get(e.timeline_id);
        if (!n) {
          (this.FireEvent(`OnInvalidateRecording`, e.timeline_id, t),
            te(!1, `Received recording started message before timeline info`));
          return;
        }
        let r = {
          recording_id: t,
          start_offset_ms: e.start_offset,
          recording_zero_timeline_offset_ms: e.start_offset,
          duration_ms: e.duration_ms,
          recording_type: e.recording_type,
        };
        (n.m_metadata.recordings.push(r), (n.m_runningRecording = r));
      } else if (n == 2) {
        let n = this.GetRunningTimelineForRecording(e.timeline_id, t);
        if (!n) return;
        ((n.m_runningRecording.duration_ms = e.duration_ms),
          (n.m_runningRecording = null),
          this.FireEvent(`OnInvalidateRecording`, e.timeline_id, t));
      } else if (n == 4) {
        let n = this.GetTimelineMetadata(e.timeline_id);
        if (n) {
          let r = n.metadata.recordings.find((e) => e.recording_id === t);
          if (r) {
            ((r.start_offset_ms = e.start_offset),
              (r.duration_ms = e.duration_ms));
            let t = parseInt(e.start_offset) + parseInt(e.duration_ms);
            t > (parseInt(n.metadata.duration_ms) || 0) &&
              (n.metadata.duration_ms = t.toString());
          }
        }
        this.GetRunningTimelineForRecording(e.timeline_id, t) ||
          this.FireEvent(`OnInvalidateRecording`, e.timeline_id, t);
      } else if (n == 3) {
        let n = this.GetTimelineMetadata(e.timeline_id);
        if (n) {
          let e = n.metadata.recordings.filter((e) => e.recording_id !== t);
          n.metadata.recordings = e;
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
        return H(e.nGlobalOffsetMS.valMS + t);
      }
      return H(0);
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
            H(e.nGlobalOffsetMS.valMS + r + a)
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
          if ((d && n < t) || (f && n > r) || (!Fi(e) && !Ri(e))) continue;
          let a = $i(e);
          (!i || (a && a.rank > i.rank)) && (i = a);
        }
        for (let e of p.m_rgStateDescriptions) {
          let t = parseInt(e.time);
          (f && t > r) || ((!o || s < t) && ((o = e), (s = t)));
        }
        if (f) break;
      }
      let u = i?.strTitle ?? o?.title,
        d = new Ji(this.GetGameID());
      return {
        strTimelinePart: u,
        strAppNamePart: rn.GetAppInfo(d.GetInternalAppID())?.name,
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
      return (P(`Generated clip name "${s}"`), s);
    }
  };
(e([n], Qi.prototype, `m_bInitialized`, void 0),
  e([T], Qi.prototype, `UpdateRunningTimelines`, null));
function $i(e) {
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
function ea(e) {
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
var U = class {
  m_elVideo = null;
  m_player = null;
  m_listeners = new _e();
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
  m_eSeekType = Zt.Absolute;
  constructor(e) {
    (f(this), (this.m_bAutoPlay = !!e));
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
    return this.m_eSeekType === Zt.Absolute
      ? this.m_nPlaybackTime
      : this.m_nPlaybackTime - this.m_nVideoStartTime;
  }
  GetTimelineDuration() {
    return this.m_eSeekType === Zt.Absolute
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
  Start(e, t, n, r = Zt.Absolute) {
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
      (this.m_player = new Qt(this.m_elVideo)),
      this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
      this.m_player.PlayMPD(t),
      (this.m_bMuted = ra(`muted`)),
      (this.m_nVolume = ra(`volume`)),
      this.m_player.SetMuted(this.m_bMuted),
      this.m_player.SetVolume(this.m_nVolume),
      (this.m_bSeekReadyToPlay = !1),
      (this.m_eSeekType = r));
    let i = `seeking_${t}_${n.toFixed(3)}`;
    (P(`CGameRecordingVideo:: perf mark ${i}`),
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
      I(`video playing`));
  }
  OnVideoPause() {
    ((this.m_bVideoElementPlaying = !1), I(`video paused`));
  }
  OnVideoTimeUpdate() {
    ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
      (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
      (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()));
  }
  OnVideoEnd() {
    ((this.m_bVideoElementPlaying = !1),
      (this.m_bAtEnd = !0),
      I(`video ended`));
  }
  OnSeeking() {
    (I(`video on seeking`),
      (this.m_bVideoElementPlaying = !1),
      (this.m_bIsWaiting = !0),
      (this.m_bAtEnd = !1));
  }
  OnLoadedMetadata() {
    this.m_bLoadedMetadata = !0;
  }
  async OnDownloadFailed(e) {
    (e.detail || Xt.PlaybackError) == Xt.UnsupportedMediaType
      ? (F(`media type error`), (this.m_ePlayerError = 3))
      : (F(`video download failed`, e.detail),
        this.m_nDownloadFailureCount < 2
          ? (await this.m_player?.UpdateMPD(), this.m_nDownloadFailureCount++)
          : (this.m_ePlayerError = 1));
  }
  OnPlaybackError() {
    ((this.m_bVideoElementPlaying = !1),
      F(`video playback error`),
      (this.m_ePlayerError = 2));
  }
  OnUserInputNeeded() {
    ((this.m_bUserInputNeeded = !0),
      !this.m_bMuted &&
        this.m_elVideo.autoplay &&
        (hn(`Failed to autoplay video. Muting and trying again.`),
        this.SetMute(!0),
        this.Play()));
  }
  OnVolumeChange() {
    I(`volume change`);
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
      ia(`volume`, e),
      e > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
      this.IsInitialized() && this.m_player.SetVolume(e));
  }
  SetMute(e, t) {
    (this.IsInitialized() && this.m_player.SetMuted(e),
      (this.m_bMuted = e),
      t && ia(`muted`, e));
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
      P(`CGameRecordingVideo:: perf mark ${t}`),
      P(`CGameRecordingVideo::Seek to ${e}`),
      (this.m_nPlaybackTime = e),
      this.m_player.Seek(e, this.m_eSeekType));
  }
};
(e([n], U.prototype, `m_bInitailized`, void 0),
  e([n], U.prototype, `m_bPaused`, void 0),
  e([n], U.prototype, `m_bAtEnd`, void 0),
  e([n], U.prototype, `m_strMediaTypeError`, void 0),
  e([n], U.prototype, `m_ePlayerError`, void 0),
  e([n], U.prototype, `m_bUserInputNeeded`, void 0),
  e([n], U.prototype, `m_bMuted`, void 0),
  e([n], U.prototype, `m_bSeekReadyToPlay`, void 0),
  e([n], U.prototype, `m_bVideoElementPlaying`, void 0),
  e([n], U.prototype, `m_nPlaybackSpeed`, void 0),
  e([n], U.prototype, `m_bIsWaiting`, void 0),
  e([n], U.prototype, `m_bLoadedMetadata`, void 0),
  e([n], U.prototype, `m_nPlaybackTime`, void 0),
  e([n], U.prototype, `m_nVideoStartTime`, void 0),
  e([n], U.prototype, `m_nVideoDuration`, void 0),
  e([n], U.prototype, `m_nVolume`, void 0),
  e([n], U.prototype, `m_eSeekType`, void 0),
  e([y], U.prototype, `Start`, null),
  e([y], U.prototype, `Stop`, null),
  e([T], U.prototype, `OnCanPlay`, null),
  e([T], U.prototype, `OnUserPauseChange`, null),
  e([T], U.prototype, `OnVideoPlaying`, null),
  e([T], U.prototype, `OnVideoPause`, null),
  e([T], U.prototype, `OnVideoTimeUpdate`, null),
  e([T], U.prototype, `OnVideoEnd`, null),
  e([T], U.prototype, `OnSeeking`, null),
  e([T], U.prototype, `OnLoadedMetadata`, null),
  e([T], U.prototype, `OnDownloadFailed`, null),
  e([T], U.prototype, `OnPlaybackError`, null),
  e([T], U.prototype, `OnUserInputNeeded`, null),
  e([T], U.prototype, `OnVolumeChange`, null),
  e([T], U.prototype, `OnVideoWaiting`, null),
  e([T], U.prototype, `UserInputReceived`, null));
var ta;
function na() {
  if (!ta) {
    let e = window.localStorage.getItem(`gameRecordingPlayer`) || `{}`,
      t;
    try {
      t = JSON.parse(e);
    } catch {
      t = {};
    }
    ta = { muted: t.muted || !1, volume: t.volume || 1 };
  }
  return ta;
}
function ra(e) {
  return na()[e];
}
function ia(e, t) {
  let n = na();
  n[e] = t;
  let r = JSON.stringify(n);
  window.localStorage.setItem(`gameRecordingPlayer`, r);
}
var aa = (function (e) {
  return (
    (e.NotRunning = `NotRunning`),
    (e.NotRecording = `NotRecording`),
    (e.ManualRecording = `ManualRecording`),
    (e.BackgroundRecording = `BackgroundRecording`),
    e
  );
})({});
function oa(e) {
  let { app: t } = Pn(e);
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
var W = oe(),
  sa = (function (e) {
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
  ca = 3 * Xi,
  la = 5 * Xi,
  ua = Xi + 2e3,
  da = 1e3,
  G = class {
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
    m_durationMS = H(null);
    m_lastRecordingGlobalMS = H(null);
    m_bWasLiveEdge = !1;
    m_nGlobalTimelinePlaybackMS = null;
    m_nGlobalTimelinePlaybackSec = null;
    m_fnUnregisterAutorun = [];
    m_eGameRecordingMode;
    m_rgSeekPerf = [];
    m_eRecordingState = aa.NotRecording;
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
      (f(this),
        (this.m_fnGetManifest = t),
        (this.m_gameRecordingVideo = new U(!0)),
        (this.m_eGameRecordingMode = n),
        (this.m_bGamepadMode = i),
        (this.m_playbackDefinition = o),
        r != null && (this.m_bControlsVisible = r),
        n === `Overlay` && (this.m_bHidePlayer = !0),
        s && this.SetClipOffsets(s),
        (this.m_fnRenderGlyph = a),
        this.m_fnUnregisterAutorun.push(
          p(
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
          p(
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
          p(
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
          p(
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
          p(
            () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
            (e) => {
              if (e) {
                let e = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                try {
                  let t = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                    n = performance.measure(t, e);
                  (P(
                    `CGameRecordingVideo:: perf measure ${e} duration ${n.duration}`,
                  ),
                    n && this.m_rgSeekPerf.push(n.duration));
                } catch (t) {
                  P(`CGameRecordingVideo:: cant measure ${e}, error: ${t}`);
                }
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.SetLoader(e));
    }
    AddEventListener(e) {
      return (this.m_rgListeners.push(e), () => ue(this.m_rgListeners, e));
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
        (P(`Recording invalidated for ${t}. Reloading MPD`),
        this.m_gameRecordingVideo.UpdateMPD());
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        (this.m_bWasLiveEdge = !0),
        this.TryPlayInitialTimelineVideo());
      let e = Fn(this.m_timelineLoader.GetGameID());
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
      let n = t ? 1 : da * this.m_gameRecordingVideo.GetPlaybackSpeed(),
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
        let n = t ? 1 : da * this.m_gameRecordingVideo.GetPlaybackSpeed();
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
        ? H(Math.max(0, this.m_lastRecordingGlobalMS.valMS - ca - 1e3))
        : this.GetTotalMS();
    }
    GetLiveEdgeMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? H(Math.max(0, this.m_lastRecordingGlobalMS.valMS - ua))
        : H(Math.max(0, this.GetTotalMS().valMS - 1));
    }
    GetTimelineAndOffsetRelativeToCurrentPlayback(e = 0) {
      return (
        this.GetCurrentPlaybackGlobalMS(e) ||
        (F(
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
        r = w(t.valMS + e, 0, n - 1e3);
      this.SetPlaytimeFromGlobalMS(H(r));
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
            H(this.m_nGlobalTimelinePlaybackMS),
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
          ? Zt.Absolute
          : Zt.FromAvailableStart;
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
      return H(this.m_nGlobalTimelinePlaybackMS);
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
        let e = this.m_bWasLiveEdge ? la : ca;
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
          { fnCreateUserTimelineMarkers: i } = Bn(),
          a = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
            r.strTimelineID,
          );
        V.ReportTrackedAction(t);
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
      let { fnRemoveUserTimelineMarker: n } = Bn();
      return (await n(
        this.m_timelineLoader.GetGameID(),
        this.GetClipID(),
        e,
        t,
      )) == 1
        ? (this.m_timelineLoader.RemoveUserMarker(e, t), !0)
        : (I(`Failed to delete user marker for timeline ${e} entry ${t}`), !1);
    }
    async UpdateUserMarker(e, t, n, r) {
      let { fnUpdateUserTimelineMarkers: i } = Bn(),
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
(e([n], G.prototype, `m_bHidePlayer`, void 0),
  e([n], G.prototype, `m_strRecordingID`, void 0),
  e([n], G.prototype, `m_durationMS`, void 0),
  e([n], G.prototype, `m_lastRecordingGlobalMS`, void 0),
  e([n], G.prototype, `m_nGlobalTimelinePlaybackMS`, void 0),
  e([n], G.prototype, `m_nGlobalTimelinePlaybackSec`, void 0),
  e([n], G.prototype, `m_rgSeekPerf`, void 0),
  e([n], G.prototype, `m_eRecordingState`, void 0),
  e([n], G.prototype, `m_eRecordingSetting`, void 0),
  e([n], G.prototype, `m_bGamepadMode`, void 0),
  e([n], G.prototype, `m_bControlsVisible`, void 0),
  e([n], G.prototype, `m_fnRenderGlyph`, void 0),
  e([n], G.prototype, `m_previousHighlightEntry`, void 0),
  e([n], G.prototype, `m_nextHighlightEntry`, void 0),
  e([n], G.prototype, `m_displayHighlightEntry`, void 0),
  e([n], G.prototype, `m_nRelativeTimeForDisplay`, void 0),
  e([n.ref], G.prototype, `m_rgClipOffsets`, void 0),
  e([n.ref], G.prototype, `m_phasePreview`, void 0),
  e([T], G.prototype, `SetVideoElement`, null),
  e([T], G.prototype, `OnInvalidateRecording`, null),
  e([y], G.prototype, `OnLoaderInitialized`, null),
  e([T], G.prototype, `OnInvalidate`, null),
  e([T], G.prototype, `OnTimelineLoaded`, null),
  e([T], G.prototype, `GetLiveEdgeMS`, null),
  e([T], G.prototype, `StopPlayback`, null),
  e([T], G.prototype, `TogglePlayPause`, null),
  e([y], G.prototype, `UpdateGlobalPlayTime`, null));
var fa = R.createContext({ timelinePlaybackCoordinator: null });
function pa(e) {
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
    [f] = R.useState(() => new G(i, r, n, o, s, c, u, d));
  ((0, R.useEffect)(() => {
    f.SetLoader(i);
  }, [f, i]),
    (0, R.useEffect)(() => {
      f.SetRecordingState(a);
    }, [f, a]),
    (0, R.useEffect)(() => {
      f.SetRecordingSetting(l);
    }, [f, l]),
    (0, R.useEffect)(() => {
      f.SetGetManifest(r);
    }, [f, r]),
    (0, R.useEffect)(() => {
      f.SetControlsVisible(o);
    }, [f, o]),
    (0, R.useEffect)(() => {
      f.SetGamepadMode(s);
    }, [f, s]),
    (0, R.useEffect)(() => {
      f.SetRenderGlyph(c);
    }, [f, c]),
    (0, R.useEffect)(() => {
      f.SetClipOffsets(d);
    }, [f, d]),
    (0, R.useEffect)(() => () => f.dispose(), [f]));
  let p = R.useMemo(() => ({ timelinePlaybackCoordinator: f }), [f]);
  return (0, W.jsx)(fa.Provider, { value: p, children: t });
}
function K() {
  return (0, R.useContext)(fa).timelinePlaybackCoordinator;
}
function ma() {
  let e = K();
  return [j(() => e?.GetPhasePreview() || null), (t) => e?.SetPhasePreview(t)];
}
var ha = `-z6QUhW0BuI-`,
  ga = `EQ4TcbQ23mE-`,
  _a = `_1SMhCEq4AkI-`,
  va = `kkFDcE4F2W8-`,
  ya = `YscTTqT4K6I-`,
  ba = `T4Y0jki8FF0-`;
function xa(e) {
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
  return (0, W.jsx)(`div`, {
    style: c ?? {},
    className: S(s, { [ga]: !0, [ha]: u, [va]: l }),
    onClick: (e) => {
      r && r(e);
    },
    onContextMenu: o,
    onMouseEnter: i,
    onMouseLeave: a,
    children: (0, W.jsx)(Sa, { entry: t, strMarkerIcon: n }),
  });
}
function Sa(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r = K().GetGameID();
  return Ii(t)
    ? (0, W.jsx)(Ca, { achievementEntry: t, strGameID: r })
    : Li(t)
      ? (0, W.jsx)(Ea, {})
      : Dn(n)
        ? (0, W.jsx)(wa, { entry: t, strMarkerIcon: n })
        : (0, W.jsx)(Da, { strMarkerIcon: n, strGameID: r });
}
function Ca(e) {
  let { achievementEntry: t, strGameID: n } = e,
    r = Vn(new Ji(n).GetAppID(), t.achievement_name),
    i,
    a;
  if (r) ((i = `white`), (a = (0, W.jsx)(`img`, { src: r.iconURL })));
  else {
    let e = Tn();
    ((i = yn(e.color)), (a = e.func({})));
  }
  return (0, W.jsx)(`div`, { className: ya, style: { color: i }, children: a });
}
function wa(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r,
    i;
  Ri(t) ? ((r = wn()), (i = _a)) : (r = Cn(n));
  let a = yn(r.color);
  return (0, W.jsx)(ka, {
    color: a,
    children: (0, W.jsx)(`div`, { className: i, children: r.func({}) }),
  });
}
function Ta(e) {
  let { icon: t, className: n } = e;
  return Cn(t).func({ className: n });
}
function Ea(e) {
  let t = Cn(`steam_invalid`),
    n = yn(t.color);
  return (0, W.jsx)(ka, {
    color: n,
    children: (0, W.jsx)(`div`, { children: t.func({}) }),
  });
}
function Da(e) {
  let { strMarkerIcon: t, strGameID: n } = e;
  return (0, W.jsx)(ka, { children: (0, W.jsx)(Oa, { icon: t, gameID: n }) });
}
function Oa(e) {
  let { icon: t, gameID: n, className: r } = e,
    i = jn(new Ji(n).GetAppID(), t);
  if (Dn(t)) return (0, W.jsx)(Ta, { ...e });
  if (i === null) return null;
  if (i === void 0) {
    let e = En();
    return (0, W.jsx)(`div`, { className: r, children: e.func({}) });
  }
  let a = ``;
  return (
    (a = typeof i == `string` ? i : new XMLSerializer().serializeToString(i)),
    (0, W.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      className: S(r, ba),
      children: (0, W.jsx)(`g`, { dangerouslySetInnerHTML: { __html: a } }),
    })
  );
}
function ka(e) {
  let { children: t, color: n } = e;
  return (0, W.jsx)(`div`, {
    className: void 0,
    children: (0, W.jsx)(`div`, {
      className: ya,
      style: n ? { color: n } : null,
      children: t,
    }),
  });
}
var Aa = `bDOiLLvSs2Y-`,
  ja = `kcQuGr4J3rc-`,
  Ma = `j-2U-sbnQJU-`,
  Na = `_6l4s8j-Bcq8-`,
  Pa = `_8YeucRtc8oU-`,
  Fa = `ZAjnqtDcso0-`,
  Ia = `vhGz8D5Y1Bk-`,
  La = `OMn6m4jRit8-`,
  Ra = `H-FSa2NK0ko-`,
  za = `EkzDm2rgmn4-`,
  Ba = `_7rO2L4URLVo-`,
  Va = `UMVMer37ORc-`,
  Ha = `cyiE161LN-s-`,
  Ua = `Vert6EPn2bo-`,
  Wa = `-BKlW5DP2XE-`,
  Ga = `wvlXf51vGb4-`,
  Ka = `S7iF3xbHMfk-`,
  qa = `SPq-vUvAUJ0-`,
  Ja = `p3cd5ToZ5HI-`,
  Ya = { nBeforeMS: 0, nAfterMS: 12e3 },
  q = R.createContext({
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
function Xa() {
  let e = (0, R.useContext)(q);
  return { nGlobalStartMS: e.globalStartMS, nGlobalEndMS: e.globalEndMS };
}
function Za() {
  return (0, R.useContext)(q).globalStartMS;
}
function Qa() {
  return (0, R.useContext)(q).globalEndMS;
}
function $a() {
  return (0, R.useContext)(q).setRange;
}
function eo() {
  return (0, R.useContext)(q).setStartMS;
}
function to() {
  return (0, R.useContext)(q).setEndMS;
}
function no() {
  let e = (0, R.useContext)(q);
  return {
    selectedMarker: e.selectedMarker,
    setSelectedMarker: e.setSelectedMarker,
  };
}
function ro() {
  let e = (0, R.useContext)(q);
  return !isNaN(e.globalStartMS?.valMS) && !isNaN(e.globalEndMS?.valMS);
}
function io() {
  return (0, R.useContext)(q).clearSelection;
}
function ao() {
  let e = $a(),
    t = eo(),
    n = to(),
    r = Xa(),
    i = so(),
    a = oo();
  return R.useCallback(
    (o, s, c, l) => {
      if (c === void 0 && l === void 0) return;
      let u = r.nGlobalStartMS !== void 0 || r.nGlobalEndMS !== void 0,
        d = c || r.nGlobalStartMS,
        f = l || r.nGlobalEndMS;
      d &&
        f &&
        f.valMS <= d.valMS &&
        (c === void 0 ? (d = void 0) : (f = void 0));
      let p = Ya.nBeforeMS + Ya.nAfterMS;
      (d === void 0 && (d = H(f.valMS - p)),
        f === void 0 && (f = H(d.valMS + p)));
      let m = d != r.nGlobalStartMS,
        h = f != r.nGlobalEndMS;
      (m && h ? e(s, d, f) : m ? t(s, d) : h && n(s, f),
        !u && m && h && i == 0 && a());
    },
    [r, e, t, n, i, a],
  );
}
function oo() {
  return (0, R.useContext)(q).zoomIntoSelection;
}
function so() {
  return (0, R.useContext)(q).selectionZoomCount;
}
function co(e) {
  let t = (0, R.useContext)(q),
    n = t.selectionZoomCount,
    r = t.globalStartMS,
    i = t.globalEndMS,
    a = (0, R.useRef)(n),
    o = (0, R.useRef)(null);
  ((o.current = e),
    (0, R.useEffect)(() => {
      if (!o.current) return;
      let e = !isNaN(r?.valMS) && !isNaN(i?.valMS);
      (a.current == n && e) ||
        ((a.current = n), e && n ? o.current(r, i) : o.current(null, null));
    }, [n, r, i, a, o]));
}
var lo = 5e3,
  uo = 3e5,
  fo = 1e3,
  po = 10,
  mo = 10,
  J = (function (e) {
    return (
      (e.Playhead = `Playhead`),
      (e.RangeLeft = `RangeLeft`),
      (e.RangeRight = `RangeRight`),
      (e.Highlight = `Highlight`),
      e
    );
  })({}),
  ho = class {
    m_fnUnregisterFromLoader;
    m_loader;
    m_maskBounds = [-1, -1];
    m_eventTarget;
    constructor(e, t) {
      (f(this), (this.m_loader = e), (this.m_eventTarget = t));
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
      return this.m_loader.GetStateDescriptionAtGlobalMS(H(e));
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
  Y = class {
    m_playbackCoordinator;
    m_fnUnregisterPlaybackCoordinator;
    m_refTimelineParentCtn;
    m_timelineMask;
    m_durationMS = 0;
    m_mapTimelineClips = n.map([], { deep: !1 });
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
    m_mapTimelineEntries = n.map([], { deep: !1 });
    m_bInitialized = !1;
    m_eThumbnailComponent = null;
    m_nGlobalRelativeThumbnailPositionPX = void 0;
    m_thumbnailHighlightEntry = void 0;
    m_phaseToHighlight = void 0;
    constructor(e, t, n) {
      (f(this),
        (this.m_playbackCoordinator = t),
        (this.m_timelineMask = new ho(e, this)),
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
      (P(`OnTimelineLoaded`, e),
        this.FindTimelineOffsets(e)
          ? this.ComputeEntriesForTimeline(e)
          : I(`Missing timeline offset metadata for`, e));
    }
    OnInvalidate(e) {
      P(`on invalidate`, e);
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
            n = w(
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
        t = mo * (this.m_rgTimelineOffsets.length - 1),
        n = Math.max(1, this.m_scrollWindowWidth - t - e),
        r = Math.ceil(
          ((e + t) * this.m_durationMS) / (this.m_scrollWindowWidth - (e + t)),
        ),
        i = fo * n;
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
          mo * (this.m_rgTimelineOffsets.length - 1) +
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
      return mo;
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
      this.m_scrollLeftPX = w(e, 0, this.GetMaxScrollLeftPX());
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
    SetAutoScrollPauseTimeout(e = lo) {
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
        e * mo +
        this.ConvertDurationMSToDeltaPX(t.globalOffsetMS + t.nDurationMS)
      );
    }
    GetOverscanWidth() {
      return (this.GetScrollWindowWidth() * po) / 100;
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
      let e = w(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
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
      t < 0 && (t = E(this.m_rgTimelineOffsets, (t) => e - t.globalOffsetMS));
      let n = t * mo;
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
      return E(
        this.m_rgTimelineOffsets,
        (t) =>
          e -
          (this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS) +
            this.ConvertDurationMSToDeltaPX(t.nDurationMS)),
      );
    }
    FindIndexOfClosestTimelineStartForOffsetPX(e) {
      return E(
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
(e([n], Y.prototype, `m_durationMS`, void 0),
  e([n], Y.prototype, `m_scrollLeftPX`, void 0),
  e([n], Y.prototype, `m_scrollWindowWidth`, void 0),
  e([n], Y.prototype, `m_scrollWindowOffsetPX`, void 0),
  e([n], Y.prototype, `m_bAutoScrollPaused`, void 0),
  e([n], Y.prototype, `m_autoScrollPauseTimeout`, void 0),
  e([n], Y.prototype, `m_msVisible`, void 0),
  e([n.ref], Y.prototype, `m_rgTimelineOffsets`, void 0),
  e([n], Y.prototype, `m_bInitialized`, void 0),
  e([n], Y.prototype, `m_eThumbnailComponent`, void 0),
  e([n], Y.prototype, `m_nGlobalRelativeThumbnailPositionPX`, void 0),
  e([n], Y.prototype, `m_thumbnailHighlightEntry`, void 0),
  e([n], Y.prototype, `m_phaseToHighlight`, void 0),
  e([y], Y.prototype, `OnLoaderInitialized`, null),
  e([y], Y.prototype, `InitDefaultsIfReady`, null),
  e([y], Y.prototype, `OnInvalidate`, null),
  e([y], Y.prototype, `ZoomIn`, null),
  e([y], Y.prototype, `ZoomOut`, null),
  e([y], Y.prototype, `SetTempZoomScale`, null),
  e([y], Y.prototype, `ClearTempZoomScale`, null),
  e([y], Y.prototype, `UpdateClipSummaries`, null),
  e([T], Y.prototype, `BReachedMaxScroll`, null),
  e([T], Y.prototype, `BReachedMinScroll`, null));
var go = R.createContext(null);
function _o(e) {
  let {
      loader: t,
      playbackCoordinator: n,
      children: r,
      clipSummaries: i,
      refTimelineParentCtn: a,
    } = e,
    [o, s] = (0, R.useState)(null);
  return (
    (0, R.useEffect)(() => {
      if (!t) return;
      let e = new Y(t, n, i);
      return (s(e), () => e.Close());
    }, [t]),
    (0, R.useEffect)(() => {
      o && o.UpdateClipSummaries(i);
    }, [o, i]),
    (0, R.useEffect)(() => {
      o && a && o.SetTimelineParentCtnRef(a.current);
    }, [o, a]),
    yo(o),
    vo(o),
    o ? (0, W.jsx)(go.Provider, { value: o, children: r }) : null
  );
}
function vo(e) {
  co(
    R.useCallback(
      (t, n) => {
        if (!e) return;
        if (!t || !n) {
          e.ClearTempZoomScale();
          return;
        }
        let r = Math.floor((n.valMS - t.valMS) * 0.1),
          i = n.valMS - t.valMS;
        i < uo * 0.9 && (r = Math.floor((uo - i) / 2));
        let a = t.valMS - r,
          o = n.valMS + r;
        e.SetTempZoomScale(a, o);
      },
      [e],
    ),
  );
}
function yo(e) {
  let t = ro();
  (0, R.useEffect)(() => {
    e && e.SetUserIsClipping(t);
  }, [e, t]);
}
function X() {
  return (0, R.useContext)(go);
}
var bo = `BAvp4rqoXrI-`,
  xo = `MvaB420caso-`,
  So = `KHooprC7Eh8-`,
  Co = `S49EhbfI3MU-`,
  wo = `_5URRAlchke4-`,
  To = 20,
  Eo = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
  Do = R.memo(function (e) {
    let t = X(),
      n = j(() => t.GetVisibleTimelines());
    return (0, W.jsx)(W.Fragment, {
      children: n.map((e) =>
        (0, W.jsx)(
          Oo,
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
  Oo = R.memo(function (e) {
    let {
        msVisibleStart: t,
        msTimelineStart: n,
        pxVisibleDuration: r,
        pxVisibleStart: i,
      } = e,
      { msTickSpacing: a, pxTickSpacing: o } = Ao(),
      s = X(),
      c = Math.ceil((t - n) / a),
      l = n + c * a,
      u = s.ConvertGlobalMSToGlobalPXOffset(l),
      d = (0, R.useMemo)(() => {
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
      ? (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(`div`, {
              className: bo,
              style: { transform: `translateX(${i}px)`, width: r },
            }),
            d.map((e) =>
              (0, W.jsx)(
                ko,
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
function ko(e) {
  let { globalOffsetPX: t, timelineRelativeIndex: n } = e,
    r = n % To === 0 ? Co : wo;
  return (0, W.jsx)(`div`, {
    className: xo,
    style: { transform: `translateX(${t}px)` },
    children: (0, W.jsx)(`div`, { className: S(So, r) }),
  });
}
function Ao() {
  let e = X(),
    t = j(() => e.GetCurrentZoomScale()),
    n = (e) => Math.abs(300 - e / t),
    r = Eo.reduce((e, t) => (n(e) - n(t) < 0 ? e : t)) / To;
  return { msTickSpacing: r, pxTickSpacing: r / t };
}
var jo = `pOdfi3iG-Qk-`,
  Mo = `RgeHxBkcuYI-`,
  No = `bEIIxIyUIRw-`,
  Po = `vfkh8xz76sA-`,
  Fo = `Z4wMZP9AtrA-`;
function Io(e, t) {
  return !(e.nStart >= t.nEnd || e.nEnd <= t.nStart);
}
var Lo = class {
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
        if (Io(t, e)) return !1;
      }
      return (this.m_reservations.splice(n, 0, t), !0);
    }
  },
  Ro = (0, R.createContext)({});
function zo() {
  return (0, R.useContext)(Ro);
}
var Bo = `DzuECh3SiO8-`,
  Vo = `OzJbKH40jVQ-`,
  Ho = `CcS1u3HYQgY-`,
  Uo = `Q2--kfqg0oc-`,
  Wo = `GBjFGdfE0Qc-`,
  Go = `tg-75b6-Ee4-`,
  Ko = `-BFT24TRL3c-`;
function qo(e) {
  let {
      closeModal: t,
      strTimelineID: n,
      entry: r,
      playbackCoordinator: i,
      fnClearSelection: a,
    } = e,
    [o, s] = R.useState(r.title || ``),
    [c, l] = R.useState(r.description || ``),
    u = tn();
  return u.bLoading
    ? (0, W.jsx)(nn, {
        state: u,
        strDialogTitle: A(`#Marker_Dialog`),
        closeModal: t,
      })
    : (0, W.jsxs)(Be, {
        strTitle: A(`#Marker_Dialog`),
        strMiddleButtonText: A(`#Marker_Action_Delete`),
        onCancel: t,
        onOK: async () => {
          (u.fnSetLoading(!0),
            (await i.UpdateUserMarker(n, r, o, c))
              ? t()
              : (u.fnSetError(!0), u.fnSetStrError(A(`#Marker_UpdateFailed`))));
        },
        children: [
          (0, W.jsx)(Ke, {
            type: `text`,
            value: o,
            onChange: (e) => s(e.currentTarget.value),
            label: A(`#Marker_Title`),
          }),
          (0, W.jsx)(Ke, {
            type: `text`,
            value: c,
            onChange: (e) => l(e.currentTarget.value),
            label: A(`#Marker_Description`),
          }),
        ],
      });
}
var Jo = `YwXy-p3jOGA-`,
  Yo = `DYV4-rbHkCQ-`,
  Xo = `NodVylkJJmk-`,
  Zo = `NBLBqJkBBNA-`,
  Qo = `muIMDgnfzVw-`,
  $o = class {
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
        gameID: new Ji(this.m_strGameID),
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
          Hn(
            new Ji(this.m_strGameID),
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
        let { fnDeleteClip: e } = Rn();
        await e(this.m_creationResult.clipSummary.clip_id);
      }
    }
  };
(e([T], $o.prototype, `create`, null), e([T], $o.prototype, `cleanup`, null));
function es(e, t, n, r, i, a, o, s, c, l, u) {
  return new $o(
    (s, c) => ts(e, t, n, r, i, a, o, s, c),
    s / 1e3,
    n,
    e,
    t,
    c,
    l,
    u,
  ).Request();
}
async function ts(e, t, n, r, i, a, o, s, c) {
  let { fnSaveClip: l } = Ln();
  I(`start ${r} @ ${i} upto ${a} @ ${o}`);
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
      I(d ? `Clip ${d.clip_id} created` : `Clip was not created: ${f}`), u
    );
  } catch (e) {
    F(e);
  }
  return { result: 2 };
}
function ns(e, t, n, r) {
  let i = n + 1,
    a = i + r - 2;
  return es(
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
var rs = `u-2dfrrZjSE-`,
  is = R.createContext({
    bInContainer: !1,
    bContainerFocus: !1,
    nMouseClientXPX: null,
    globalMouseXPX: null,
    scrollWindowMouseXPX: null,
    fnRegisterMouseEvent: null,
    bContextMenuOpen: !1,
    setContextMenuOpen: () => {},
  });
function as(e) {
  let { children: t } = e,
    [n, r] = (0, R.useState)(!1),
    [i, a] = (0, R.useState)(!1),
    [o, s] = (0, R.useState)(!1),
    [c, l] = (0, R.useState)(),
    u = (0, R.useRef)(void 0),
    d = X(),
    f = j(() => d.GetScrollableWidthPX()),
    p = j(() => d.GetVisualWindowStartPX()),
    m = j(() => d.GetScrollWindowWidth()),
    h = j(() => d.GetScrollWindowOffset()),
    g = j(() => d.GetTimelineMarginWidth()),
    _ = R.useMemo(() => {
      if (u.current) {
        let e = p - h - g;
        return Ki(w(c + e, 0, f));
      }
      return Ki(0);
    }, [g, c, h, p, f]),
    v = R.useMemo(() => {
      if (u.current) {
        let e = u.current.getBoundingClientRect(),
          t = f > m ? h : e.x;
        return qi(w(c - t, 0, m));
      }
      return qi(0);
    }, [c, h, m, f]),
    ee = (0, R.useCallback)(
      (e, t) => (
        u.current && u.current.addEventListener(e, t),
        () => u.current?.removeEventListener(e, t)
      ),
      [],
    ),
    y = (0, R.useCallback)(() => r(!0), []),
    b = (0, R.useCallback)(() => r(!1), []),
    x = (0, R.useCallback)((e) => l(e.clientX), []),
    te = (0, R.useCallback)((e) => a(!0), []),
    ne = (0, R.useCallback)((e) => a(!1), []);
  (0, R.useEffect)(() => {
    let e = be(u.current);
    return (
      e.addEventListener(`mousemove`, x),
      () => e.removeEventListener(`mousemove`, x)
    );
  }, [x]);
  let S = (0, R.useMemo)(
    () => ({
      bContainerFocus: i,
      bInContainer: n,
      nMouseClientXPX: c,
      globalMouseXPX: _,
      scrollWindowMouseXPX: v,
      fnRegisterMouseEvent: ee,
      bContextMenuOpen: o,
      setContextMenuOpen: s,
    }),
    [i, n, o, c, _, v, ee],
  );
  return (0, W.jsx)(is.Provider, {
    value: S,
    children: (0, W.jsx)(`div`, {
      ref: u,
      onMouseOver: te,
      onFocus: te,
      onMouseOut: ne,
      onBlur: ne,
      onMouseEnter: y,
      onMouseLeave: b,
      className: rs,
      children: t,
    }),
  });
}
function os() {
  return (0, R.useContext)(is);
}
function ss() {
  return os().globalMouseXPX;
}
function cs() {
  return os().scrollWindowMouseXPX;
}
function ls() {
  return os().bInContainer;
}
function us() {
  return os().bContainerFocus;
}
function ds() {
  let e = os();
  return [e.bContextMenuOpen, e.setContextMenuOpen];
}
function fs(e, t) {
  let n = os().fnRegisterMouseEvent,
    r = (0, R.useRef)(void 0),
    i = (0, R.useCallback)(() => {
      r.current = n(e, t);
    }, [n, t, e]),
    a = (0, R.useCallback)(() => {
      r.current && r.current();
    }, []);
  (0, R.useEffect)(() => (i(), () => a()), [i, a]);
}
function ps() {
  let e = X(),
    t = K(),
    n = ao(),
    r = j(() => !t.ShouldModeShowClipControls()),
    i = Un(),
    { onMarkerCreated: a, onNavigateToClip: o } = zo(),
    [s, c] = ds();
  return R.useCallback(
    (s, l, u, d) =>
      r || i
        ? null
        : Ge(
            (0, W.jsx)(ms, {
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
function ms(e) {
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
    l = j(() => t.GetClipsAtGlobalMS(r)),
    u = hs(n);
  (0, R.useEffect)(() => (c(!0), () => c(!1)), [c]);
  let d = (() => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(r.valMS);
      if (!e) return null;
      let i = t.GetLoader().GetTimelineData(e);
      if (!i) return null;
      let a = E(i.m_rgPhases, (e) => n.valMS - parseInt(e.time));
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
        (V.ReportTrackedAction(
          `/GameRecording/Tooltip/ViewClip/TimelineCtxMenu`,
        ),
        s && s(l[0].strClipID));
    },
    g = () => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(r.valMS);
      (t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(e),
        zn(t.GetGameID(), e, n, t.GetClipID()));
    },
    _ = () => {
      if (!d) return;
      let { phase: e, strTimelineID: n } = d;
      ns(t.GetGameID(), n, parseInt(e.time), parseInt(e.duration));
    },
    v = (e) => n.SetPhaseToHighlight(e);
  return (
    (0, R.useEffect)(() => () => n.SetPhaseToHighlight(null), [n]),
    (0, W.jsxs)(Me, {
      refInstance: u,
      children: [
        (0, W.jsx)(O, {
          onSelected: f,
          className: Jo,
          children: (0, W.jsxs)(`div`, {
            className: S(Yo, Xo),
            children: [
              (0, W.jsx)(lt, {}),
              A(
                a
                  ? `#Playback_UserSelectionControls_AddUserMarker`
                  : `#TimelineDialog_AddMarker`,
              ),
            ],
          }),
        }),
        (0, W.jsx)(O, {
          onSelected: g,
          className: Jo,
          children: (0, W.jsxs)(`div`, {
            className: S(Yo, Zo),
            children: [
              (0, W.jsx)(It, {}),
              A(
                a
                  ? `#Playback_UserSelectionControls_TakeScreenshot`
                  : `#TimelineDialog_TakeScreenshot`,
              ),
            ],
          }),
        }),
        (0, W.jsx)(O, {
          onSelected: p,
          className: Jo,
          children: (0, W.jsxs)(`div`, {
            className: S(Yo, Qo),
            children: [
              (0, W.jsx)(at, { direction: `left` }),
              A(
                a
                  ? `#Playback_UserSelectionControls_SetClipStart`
                  : `#TimelineContext_SetClipStart`,
              ),
            ],
          }),
        }),
        (0, W.jsx)(O, {
          onSelected: m,
          className: Jo,
          children: (0, W.jsxs)(`div`, {
            className: S(Yo, Qo),
            children: [
              (0, W.jsx)(at, { direction: `right` }),
              A(
                a
                  ? `#Playback_UserSelectionControls_SetClipEnd`
                  : `#TimelineContext_SetClipEnd`,
              ),
            ],
          }),
        }),
        !!d &&
          (0, W.jsx)(O, {
            onSelected: _,
            className: `YwXy-p3jOGA-`,
            onMouseOver: () => v([d.strTimelineID, d.phase.time]),
            onMouseLeave: () => v(null),
            children: (0, W.jsxs)(`div`, {
              className: S(`DYV4-rbHkCQ-`, `cTZ4oCV0rfc-`),
              children: [(0, W.jsx)(Lt, {}), A(`#TimelineDialog_ClipPhase`)],
            }),
          }),
        l.length > 0 &&
          (0, W.jsx)(O, {
            onSelected: h,
            className: `YwXy-p3jOGA-`,
            children: (0, W.jsxs)(`div`, {
              className: S(`DYV4-rbHkCQ-`, `opmNw-e94ys-`),
              children: [(0, W.jsx)(we, {}), A(`#TimelineDialog_ViewClip`)],
            }),
          }),
      ],
    })
  );
}
function hs(e) {
  let t = j(() => e.GetAutoScrollPauseTimeout()),
    n = j(() => e.GetVisualWindowStartPX()),
    r = (0, R.useRef)(void 0),
    i = (0, R.useRef)(void 0);
  return (
    (0, R.useEffect)(() => {
      r.current && i.current ? i.current.Hide() : (r.current = !0);
    }, [n]),
    (0, R.useEffect)(() => {
      e.SetAutoScrollPaused(!0);
    }, [e]),
    (0, R.useEffect)(() => {
      t && e.ClearAutoScrollPauseTimeout();
    }, [t, e]),
    i
  );
}
function gs() {
  let e = X(),
    t = K(),
    { setSelectedMarker: n } = no(),
    r = io(),
    { onNavigateToClip: i, onNavigateToScreenshot: a } = zo(),
    o = Un(),
    s = j(() => !t.ShouldModeShowClipControls());
  return R.useCallback(
    (c, l, u) => {
      s ||
        Ge(
          (0, W.jsx)(_s, {
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
function _s(e) {
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
    l = j(() => n.ConvertGlobalMSToClipOrNone(r.nGlobalMS.valMS)),
    u = j(() =>
      t.ConvertGlobaOffsetToRecordingAndRelativeOffset(r.nGlobalMS.valMS),
    ),
    d = hs(n),
    f = (e) => {
      let n = vs,
        a = ys;
      Pi(r.entry) && ((n = 0), (a = parseInt(r.entry.duration)));
      let [o, s] = t
        .GetLoader()
        .CreateGlobalRangeForTimeline(r.strTimelineID, r.nGlobalMS.valMS, n, a);
      (t.SetPlaytimeFromGlobalMS(H(o)),
        i?.(r.entry.id, r.strTimelineID, o, s),
        V.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/ClipFromHighlight`,
        ),
        e.stopPropagation());
    },
    p = () => {
      l &&
        (V.ReportTrackedAction(
          `/GameRecording/MarkerCtxMenu/ViewClip/${r.entry.type}`,
        ),
        s && s(l.clipID));
    },
    m = (e) => {
      if (!Ri(r.entry)) return;
      V.ReportTrackedAction(
        `/GameRecording/HighlightCtxMenu/Marker/Edit/${r.entry.type}`,
      );
      let n = (0, W.jsx)(qo, {
        entry: r.entry,
        playbackCoordinator: t,
        fnClearSelection: a,
        strTimelineID: r.strTimelineID,
      });
      (Re(n, D(e)), e.stopPropagation(), e.preventDefault());
    },
    h = (e) => {
      Ri(r.entry) &&
        (V.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/Marker/Delete/${r.entry.type}`,
        ),
        t.RemoveUserMarker(r.strTimelineID, r.entry.id));
    },
    g = () => {
      zi(r.entry) &&
        r.entry?.handle &&
        (V.ReportTrackedAction(`/GameRecording/HighlightCtxMenu/Screenshot`),
        c(n.GetGameID(), r.entry.handle));
    },
    _ = [];
  return (
    Ri(r.entry) &&
      _.push(
        (0, W.jsx)(
          O,
          {
            onSelected: m,
            className: Bo,
            children: (0, W.jsxs)(`div`, {
              className: S(Vo, Ho),
              children: [(0, W.jsx)(St, {}), A(`#Marker_Action_Edit`)],
            }),
          },
          `edit`,
        ),
      ),
    u?.strRecordingID &&
      !o &&
      _.push(
        (0, W.jsx)(
          O,
          {
            onSelected: f,
            className: Bo,
            children: (0, W.jsxs)(`div`, {
              className: S(Vo, Uo),
              children: [(0, W.jsx)(ot, {}), A(`#TimelineDialog_ClipVideo`)],
            }),
          },
          `clip`,
        ),
      ),
    zi(r.entry) &&
      _.push(
        (0, W.jsx)(
          O,
          {
            onSelected: g,
            className: Bo,
            children: (0, W.jsxs)(`div`, {
              className: S(Vo, Go),
              children: [
                (0, W.jsx)(gt, {}),
                A(`#TimelineDialog_ViewScreenshot`),
              ],
            }),
          },
          `view_screenshot`,
        ),
      ),
    l &&
      p &&
      _.push(
        (0, W.jsx)(
          O,
          {
            onSelected: p,
            className: Bo,
            children: (0, W.jsxs)(`div`, {
              className: S(Vo, Ko),
              children: [(0, W.jsx)(Ft, {}), A(`#TimelineDialog_ViewClip`)],
            }),
          },
          `view_clip`,
        ),
      ),
    Ri(r.entry) &&
      _.push(
        (0, W.jsx)(
          O,
          {
            onSelected: h,
            className: Bo,
            children: (0, W.jsxs)(`div`, {
              className: S(Vo, Wo),
              children: [(0, W.jsx)(Se, {}), A(`#Marker_Action_Delete`)],
            }),
          },
          `delete`,
        ),
      ),
    _.length ? (0, W.jsx)(Me, { refInstance: d, children: _ }) : null
  );
}
var vs = 5e3,
  ys = 3e3,
  bs = 5e3;
function xs(e) {
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
    l = j(() => n.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
    u = j(() => {
      let e = n.GetThumbnailComponent();
      return e && e !== J.Highlight;
    }),
    d = gs(),
    { selectedMarker: f } = no(),
    p = t.entry?.id == f?.strEntryID && t.strTimelineID == f?.strTimelineID,
    { ref: m, ...h } = Cs(n, t),
    g = R.useCallback(
      (e) => {
        let i = c.valMS - bs,
          a = n.FindTimelineOffsets(o),
          s = Math.max(i, a.globalOffsetMS);
        (r.SetPlaytimeFromGlobalMS(H(s)),
          r.SetDisplayHighlightEntry(t.entry),
          e.stopPropagation(),
          V.ReportTrackedAction(`/GameRecording/Marker/Click/${t.entry.type}`));
      },
      [r, c.valMS, o, n, t],
    ),
    _ = (e) => {
      (d(e, t, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 }),
        e.stopPropagation());
    },
    v = { transform: `translateX( calc( ${l}px - 50% ))` };
  return (0, W.jsxs)(`div`, {
    className: S(jo, u && `fKVXzdV7f4k-`, s && `NF7Pk6zJyl4-`),
    style: v,
    ref: m,
    onContextMenu: _,
    ...h,
    children: [
      (0, W.jsx)(
        `div`,
        {
          className: S(Mo),
          children: (0, W.jsx)(
            xa,
            {
              classNames: No,
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
      (0, W.jsx)(`div`, {
        className: Po,
        children: (0, W.jsx)(`div`, { className: S(Fo) }),
      }),
    ],
  });
}
var Ss = 150;
function Cs(e, t) {
  let n = R.useRef(void 0),
    r = R.useRef(void 0),
    i = R.useCallback(
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
        (t.clientX < a - Ss || t.clientX > a + Ss) &&
          (e.SetThumbnailComponent(null),
          r.current && r.current(),
          (r.current = null));
      },
      [e],
    ),
    a = R.useCallback(
      (n) => {
        if (
          (e.SetThumbnailComponent(J.Highlight),
          e.SetThumbnailEntry(t),
          !r.current)
        ) {
          let e = D(n);
          (e.addEventListener(`mousemove`, i),
            (r.current = () => e.removeEventListener(`mousemove`, i)));
        }
        n.stopPropagation();
      },
      [i, t, e],
    ),
    o = R.useCallback(
      (t) => {
        let i = n.current.getBoundingClientRect(),
          a = i.left,
          o = i.right;
        t.clientX - a < 1 || o - t.clientX < 1
          ? (e.SetThumbnailComponent(null),
            r.current && r.current(),
            (r.current = null))
          : (ge(n.current, t.relatedTarget) ||
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
    R.useEffect(() => () => r.current && r.current(), []),
    { ref: n, onMouseOver: a, onMouseLeave: o }
  );
}
var ws = 16;
function Ts(e) {
  switch (e.type) {
    case `achievement`:
      return 9e3;
    default:
      return e.priority;
  }
}
var Es = R.memo(function (e) {
    let t = X(),
      n = j(() => t.GetVisibleTimelines());
    return (0, W.jsx)(W.Fragment, {
      children: n.map((e) => (0, W.jsx)(ks, { timeline: e }, e.timelineID)),
    });
  }),
  Ds = { screenshot: 0, event: 0, achievement: 1, usermarker: 2 };
function Os(e, t) {
  if (Ds[e.type] !== Ds[t.type]) return Ds[t.type] - Ds[e.type];
  let n = Ts(e),
    r = Ts(t);
  return n == r
    ? e.time == t.time
      ? e.id.localeCompare(t.id)
      : parseInt(e.time) - parseInt(t.time)
    : r - n;
}
var ks = R.memo(function (e) {
  let { timeline: t } = e,
    n = X(),
    r = K(),
    i = j(() => n.GetVisibleTimelineHighlights(t.timelineID) || [])
      .slice()
      .sort(Os),
    a = j(() => n.GetTimelineOffsetMS(t.timelineID)),
    o = t.globalOffsetMS - a,
    s = r.GetGameID(),
    c = r.GetClipID(),
    l = new Lo(n.GetCurrentZoomScale() * ws);
  return i.map((e, i) => {
    if (js(e) !== `highlight`) return null;
    let a = `${e.type}_${e.id}_${t.timelineID}_${i}`,
      u = As(t.timelineID, o, e),
      d = l.BAllowIcon(u.nGlobalMS.valMS);
    return (0, W.jsx)(
      xs,
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
function As(e, t, n) {
  if (
    ![`event`, `usermarker`, `screenshot`, `achievement`, `error`].includes(
      n.type,
    )
  )
    return (
      P(
        `Unexpected timeline entry type ${n.type}, returning empty highlight marker`,
      ),
      null
    );
  let r = n,
    i = Ii(r);
  return {
    entry: r,
    strMarkerIcon: i ? `steam_achievement` : r.icon,
    nMarkerPriority: Ts(r),
    strTimelineID: e,
    strTitle: (!i && r.title) || ``,
    strDescription: (!i && r.description) || ``,
    nGlobalMS: H(parseInt(r.time) + t),
  };
}
function js(e) {
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
var Ms = `-X0PMxvY3QE-`,
  Ns = `cbzcIa1ocN4-`,
  Ps = `MMJtgRs0Os4-`,
  Fs = `m6U62VPiE5I-`,
  Is = `KT1NiRNa2wQ-`;
function Ls(e) {
  let { view: t, entry: n, nGlobalEntryEndMS: r, nGlobalTLStartMS: i } = e,
    a = K(),
    o = H(parseInt(n.time) + i.valMS),
    s = j(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(o.valMS),
        n = t.GetVirtualWindowStartPX();
      return n < e ? e : n;
    }),
    c = j(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(r.valMS),
        n = t.GetVirtualWindowEndPX();
      return n < e ? n : e;
    }),
    l = !!a.GetClipID(),
    u = { transform: `translateX( ${s}px )`, width: c - s },
    d = S({
      [Is]: n.mode === ji.Invalid,
      [Ps]: n.mode === ji.Staging,
      [Fs]: n.mode === ji.Menus,
      [Ns]: n.mode === ji.Playing,
    });
  return (0, W.jsx)(
    `div`,
    { className: S(Ms, d, l && `dM-k3XLATgY-`), style: u },
    n.id,
  );
}
var Rs = R.memo(function (e) {
    let t = X(),
      n = j(() => t.GetVisibleTimelines());
    return (0, W.jsx)(W.Fragment, {
      children: n.map((e) => (0, W.jsx)(zs, { timeline: e }, e.timelineID)),
    });
  }),
  zs = R.memo(function (e) {
    let { timelineID: t, globalOffsetMS: n, nDurationMS: r } = e.timeline,
      i = X(),
      a = j(() => {
        let e = i.GetVisibleTimelineGameModes(t);
        return !e || e.length === 0
          ? [{ time: `0`, type: `gamemode`, mode: ji.Invalid, id: `synthetic` }]
          : e;
      }),
      o = H(n + r),
      s = n - i.GetTimelineOffsetMS(t),
      c = [];
    for (let e = 0; e < a.length; e++) {
      let n = H(e < a.length - 1 ? parseInt(a[e + 1].time) + s : o.valMS - 1);
      c.push(
        (0, W.jsx)(
          Ls,
          {
            view: i,
            entry: a[e],
            nGlobalEntryEndMS: n,
            nGlobalTLStartMS: H(s),
          },
          `gameMode_${t}_${e}`,
        ),
      );
    }
    return (0, W.jsx)(W.Fragment, { children: c });
  }),
  Bs = `XVi5a5ZkmMc-`,
  Vs = `-nn0AHNIP3k-`,
  Hs = `-IpQtGedcoc-`,
  Us = `LsIeUCU634s-`,
  Ws = `QNUH0lZ0VfY-`,
  Gs = `wQLCIzL88LU-`,
  Ks = `JtIym43tUFo-`,
  qs = `a23JQkVm40o-`,
  Js = 500,
  Ys = (0, R.memo)(function (e) {
    let t = K(),
      n = j(() => t.GetHidePlayer()),
      [r, i] = (0, R.useState)({ bDragActive: !1, bPausedOnDragStart: !1 }),
      a = X(),
      o = j(() => {
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
      ? (0, W.jsx)(Zs, { setDragActive: i })
      : o
        ? (0, W.jsx)(Xs, { view: a, setDragActive: i })
        : (0, W.jsx)(Qs, { dragState: r, setDragActive: i });
  });
function Xs(e) {
  let { view: t, setDragActive: n } = e,
    r = j(() => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2);
  return (0, W.jsx)(ic, {
    playheadPosition: r,
    children: (0, W.jsx)($s, { setDragActive: n, bDragActive: !1 }),
  });
}
var Zs = (0, R.memo)(function (e) {
    let { setDragActive: t } = e,
      n = X(),
      r = j(() => n.GetScrollableWidthPX()),
      i = ce(100),
      a = (0, R.useCallback)(
        (e) => {
          n.GetAutoScrollPaused() || i(() => n.ScrollToOffset(e));
        },
        [i, n],
      );
    return (
      (0, R.useEffect)(() => n.ScrollToEnd(), [n]),
      (0, R.useEffect)(() => a(r), [r, a]),
      (0, W.jsx)(ic, {
        playheadPosition: r,
        children: (0, W.jsx)($s, { setDragActive: t, bDragActive: !1 }),
      })
    );
  }),
  Qs = (0, R.memo)(function (e) {
    let { dragState: t, setDragActive: n } = e,
      { bDragActive: r, bPausedOnDragStart: i } = t,
      a = K(),
      o = X(),
      s = ss(),
      c = nc(cs(), o, r, s, a);
    return (
      (0, R.useEffect)(() => {
        if (!r) return;
        o.SetThumbnailPosition(c);
        let e = o.ConvertPXOffsetToGlobalMS(c, !1);
        if (!e) return;
        let t = a.GetLiveEdgeMS();
        a.SetPlaytimeFromGlobalMS(t.valMS < e ? t : H(e), i, !0, !0);
      }, [c, i, r, a, o]),
      (0, W.jsx)(`div`, {
        className: S(Ws, r && `FOu6nwXsE7c-`),
        children: (0, W.jsx)(ic, {
          className: r ? Ks : void 0,
          playheadPosition: c,
          children: (0, W.jsx)($s, { setDragActive: n, bDragActive: r }),
        }),
      })
    );
  }),
  $s = (0, R.memo)(function (e) {
    let { setDragActive: t, bDragActive: n } = e,
      r = X(),
      i = (e) => {
        (n || r.SetThumbnailComponent(J.Playhead), e.stopPropagation());
      },
      a = (e) => {
        (n || r.SetThumbnailComponent(null), e.stopPropagation());
      };
    return (0, W.jsx)(`div`, {
      className: qs,
      onMouseOver: i,
      onMouseOut: a,
      onFocus: i,
      onBlur: a,
      children: (0, W.jsx)(ec, { setDragActive: t }),
    });
  }),
  ec = R.memo(function (e) {
    let { setDragActive: t } = e,
      n = K(),
      r = ps(),
      i = X(),
      a = j(() => {
        let e = i.GetThumbnailComponent();
        return e === J.RangeLeft || e === J.RangeRight;
      }),
      o = (0, R.useCallback)(
        (e) => {
          if (e.button != 0) return;
          let r = D(e),
            a,
            o,
            s = () => {
              let e = n.GetGameRecordingVideo().IsPaused();
              (t({ bDragActive: !0, bPausedOnDragStart: e }),
                i.SetThumbnailComponent(J.Playhead),
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
      s = (0, R.useCallback)(
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
    return (0, W.jsx)(`div`, {
      className: S(Us, a && `Twzqk-0-bXc-`),
      onMouseDown: o,
      onContextMenu: s,
      children: (0, W.jsx)(tc, {}),
    });
  });
function tc(e) {
  return (0, W.jsxs)(`svg`, {
    ...e,
    width: `12`,
    height: `32`,
    viewBox: `0 0 12 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, W.jsx)(`rect`, {
        x: `5`,
        y: `4`,
        width: `2`,
        height: `40`,
        fill: `currentColor`,
      }),
      (0, W.jsx)(`path`, {
        d: `M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function nc(e, t, n, r, i) {
  let a = (0, R.useRef)(void 0),
    o = j(() => t.GetScrollableWidthPX()),
    s = j(() => t.GetScrollWindowWidth()),
    [c, l] = (0, R.useState)(0),
    u = (0, R.useRef)(void 0),
    d = (0, R.useRef)(void 0),
    { clearPlaybackAnimation: f, startPlaybackAnimation: p } = rc(i, t, l);
  (0, R.useEffect)(
    () => () => {
      (u.current &&
        (cancelAnimationFrame(u.current),
        (u.current = null),
        (d.current = null)),
        f());
    },
    [f],
  );
  let m = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (l(w(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(u.current),
          (u.current = null),
          (d.current = null));
      else {
        if (
          ((u.current &&= requestAnimationFrame((e) => m(e, t, n, r, i))),
          d.current)
        ) {
          let n = ((e - d.current) / Js) * r;
          (t.ScrollBy(n), l((e) => w(e + n, 0, t.GetScrollableWidthPX())));
        }
        d.current = e;
      }
    },
    [l],
  );
  return (
    (0, R.useEffect)(() => {
      let i = s * (1 - Ku),
        c = s * Ku;
      if (
        (u.current &&
          (cancelAnimationFrame(u.current),
          (u.current = null),
          (d.current = null)),
        !n)
      )
        p();
      else if ((f(), e.valPX < c && !t.BReachedMinScroll())) {
        if (e.valPX <= a.current) {
          let n = e.valPX - c,
            r = w(Math.abs(n / c), 0, 1) * n;
          u.current = requestAnimationFrame((n) =>
            m(n, t, e.valPX, r, t.BReachedMinScroll),
          );
        }
        a.current = e.valPX;
      } else if (e.valPX > i && !t.BReachedMaxScroll()) {
        if (e.valPX >= a.current) {
          let n = e.valPX - i,
            r = w(Math.abs(n / (s - i)), 0, 1) * n;
          u.current = requestAnimationFrame((n) =>
            m(n, t, e.valPX, r, t.BReachedMaxScroll),
          );
        }
        a.current = e.valPX;
      } else l(w(r.valPX, 0, o));
    }, [n, f, r.valPX, s, o, m, e.valPX, p, t]),
    c
  );
}
function rc(e, t, n) {
  let r = (0, R.useRef)(void 0),
    i = e.GetGameRecordingVideo(),
    a = (0, R.useRef)(void 0),
    o = (0, R.useRef)(void 0),
    s = (0, R.useRef)(void 0),
    c = (0, R.useRef)(void 0),
    l = (0, R.useCallback)(() => {
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
    clearPlaybackAnimation: (0, R.useCallback)(() => {
      (r.current && cancelAnimationFrame(r.current),
        (r.current = null),
        (a.current = null),
        (o.current = null),
        (s.current = null));
    }, []),
    startPlaybackAnimation: (0, R.useCallback)(() => {
      r.current ||= requestAnimationFrame(l);
    }, [l]),
  };
}
function ic(e) {
  let { className: t, playheadPosition: n, children: r } = e;
  return (0, W.jsx)(`div`, {
    className: S(Gs, t),
    style: { transform: `translateX( calc(${n}px - 50% ))` },
    children: r,
  });
}
var ac = ne({
    AddMarker: () => Lc,
    Button: () => Ic,
    CreateClipButton: () => zc,
    DeleteMarker: () => Vc,
    Description: () => yc,
    DescriptionBlock: () => _c,
    Duration: () => Yc,
    EditMarker: () => Bc,
    GoToClip: () => Rc,
    GoToClipFromMarker: () => Hc,
    Header: () => hc,
    Hide: () => lc,
    Highlight: () => Dc,
    Icon: () => gc,
    ImageAndInfoBoxContainer: () => uc,
    ImageContainer: () => dc,
    ImageHighlightBlock: () => qc,
    ImageHighlightPosition: () => Kc,
    InfoBoxContainer: () => mc,
    NoRecordedContent: () => pc,
    Overlay: () => xc,
    Playhead: () => kc,
    RangeIcon: () => Xc,
    RangeLeft: () => Ac,
    RangeRight: () => jc,
    StateDescription: () => Pc,
    ThumbnailContainerOffset: () => sc,
    ThumbnailContents: () => cc,
    ThumbnailHitBoxPadding: () => bc,
    ThumbnailImage: () => fc,
    ThumbnailTooltip: () => Ec,
    TimeDisplayContainer: () => Oc,
    Timestamp: () => Mc,
    Title: () => vc,
    TooltipButtons: () => Fc,
    TooltipChildren: () => Cc,
    TooltipContainer: () => Gc,
    TooltipContents: () => Sc,
    TooltipHitBox: () => Wc,
    TooltipImage: () => wc,
    TooltipImageCtn: () => Tc,
    TooltipInteractionRegion: () => Nc,
    TooltipOffset: () => oc,
    TooltipRangeContainer: () => Jc,
    ViewScreenshot: () => Uc,
    default: () => Zc,
    thumbnailWidth: () => `320`,
  }),
  oc = `M-05lIt-Rm8-`,
  sc = `demzX-Fs4-4-`,
  cc = `NcHGwBV4SNQ-`,
  lc = `ap-Q4oooopI-`,
  uc = `_9zxrJRU-CaI-`,
  dc = `eQvnQVTk-sI-`,
  fc = `tN6d6cDs7Do-`,
  pc = `B0nXthAtEI8-`,
  mc = `KxFaAst23zY-`,
  hc = `aiwhhTjZ6Pk-`,
  gc = `_9HkA8d7x9kg-`,
  _c = `wCw8FA-GNZw-`,
  vc = `_3-l3Dnlgyfo-`,
  yc = `_00G4k2IDvBQ-`,
  bc = `UYDbMZ6G3WU-`,
  xc = `RAeRf-oNWq8-`,
  Sc = `Vc6eo-Q-cRw-`,
  Cc = `u2eqeMJHtic-`,
  wc = `_-6Xh-VqwYeg-`,
  Tc = `TkM9nyNO0Xs-`,
  Ec = `mdK6jpS4jRU-`,
  Dc = `VrSRUKXDErM-`,
  Oc = `PYo3kx2RfSs-`,
  kc = `_1UvMCudnsIs-`,
  Ac = `vx9pJ002RM0-`,
  jc = `BgeUu9u9wW8-`,
  Mc = `qP9-v-34gEw-`,
  Nc = `VTDf1a6CPQI-`,
  Pc = `iHtJ7ZAsX5A-`,
  Fc = `k9NX76-rrPo-`,
  Ic = `zB0JoG7vSrU-`,
  Lc = `Qmw3lo2yg3Y-`,
  Rc = `lzzqqN6opQo-`,
  zc = `NcXSUT9Wrrk-`,
  Bc = `h-9-LkDvmE4-`,
  Vc = `ZtdjDDcQX4Q-`,
  Hc = `ncTrqKkwHVg-`,
  Uc = `WaQJkS8Zl-8-`,
  Wc = `a2muS1tYn9s-`,
  Gc = `_8PD3oDSkC5Y-`,
  Kc = `BmRL3GyDFyw-`,
  qc = `_1k7fgO2abtE-`,
  Jc = `E9tORfFSTjw-`,
  Yc = `HjxSSeO2NmQ-`,
  Xc = `zjZlS00iLU4-`,
  Zc = {
    thumbnailWidth: `320`,
    TooltipOffset: oc,
    ThumbnailContainerOffset: sc,
    ThumbnailContents: cc,
    Hide: lc,
    ImageAndInfoBoxContainer: uc,
    ImageContainer: dc,
    ThumbnailImage: fc,
    NoRecordedContent: pc,
    InfoBoxContainer: mc,
    Header: hc,
    Icon: gc,
    DescriptionBlock: _c,
    Title: vc,
    Description: yc,
    ThumbnailHitBoxPadding: bc,
    Overlay: xc,
    TooltipContents: Sc,
    TooltipChildren: Cc,
    TooltipImage: wc,
    TooltipImageCtn: Tc,
    ThumbnailTooltip: Ec,
    Highlight: Dc,
    TimeDisplayContainer: Oc,
    Playhead: kc,
    RangeLeft: Ac,
    RangeRight: jc,
    Timestamp: Mc,
    TooltipInteractionRegion: Nc,
    StateDescription: Pc,
    TooltipButtons: Fc,
    Button: Ic,
    AddMarker: Lc,
    GoToClip: Rc,
    CreateClipButton: zc,
    EditMarker: Bc,
    DeleteMarker: Vc,
    GoToClipFromMarker: Hc,
    ViewScreenshot: Uc,
    TooltipHitBox: Wc,
    TooltipContainer: Gc,
    ImageHighlightPosition: Kc,
    ImageHighlightBlock: qc,
    TooltipRangeContainer: Jc,
    Duration: Yc,
    RangeIcon: Xc,
  };
function Qc(e, t) {
  return (
    e.strRecordingID === t.strRecordingID &&
    e.strClipID === t.strClipID &&
    e.nRecordingOffsetMS === t.nRecordingOffsetMS &&
    e.nRecordingStartOffsetMS === t.nRecordingStartOffsetMS &&
    e.cPxMajorAxis === t.cPxMajorAxis &&
    e.bPreciseTiming == t.bPreciseTiming
  );
}
var $c = class e {
  k_QueueWaitUntilRequestMS = 10;
  k_nMaxBatchSize = 50;
  m_nMaxCacheSize = 18e5 / Xi;
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
    f(this);
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
    return `${e}_${t}_${n}_${o ? s : s - (s % Xi)}_${a}_${o}`;
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
            P(`CThumbnailCache:: cant measure ${u}, error: ${e}`);
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
      this.m_rgPendingRequest.some((e) => Qc(e, l)) ||
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
      let t = e.map((e) => e.nRecordingOffsetMS * 1e3),
        n = await In(
          e[0].strRecordingID,
          e[0].strClipID,
          void 0,
          t,
          e[0].cPxMajorAxis,
          e[0].bPreciseTiming,
        );
      te(
        n?.length == t.length,
        `CThumbnailCache.InternalLoadMultipleThumbnails request ${t.length} and got back ${n?.length}`,
      );
      for (let r = 0; r < t.length && r < n?.length; ++r) {
        let t = e[r],
          i = this.GetKey(
            t.gameID,
            t.strRecordingID,
            t.strClipID,
            t.nRecordingOffsetMS,
            t.nRecordingStartOffsetMS,
            t.cPxMajorAxis,
            t.bPreciseTiming,
          ),
          a = n ? n[r].image_data() : null;
        this.SetThumbnailData(i, { data: a, bIsLoading: !1 });
      }
    } catch (t) {
      F(`Failed to load multiple request thumbnails`, t);
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
      let e = await In(t, n, void 0, [r * 1e3], a, o);
      if (e?.length > 0) {
        let t = e ? e[0].image_data() : null;
        return (this.SetThumbnailData(s, { data: t, bIsLoading: !1 }), !0);
      }
      mn(`ThumbnailImage: got empty jpeg ${e.length} list back ${t} @ ${r}`);
    } catch (e) {
      (F(`ThumbnailImage: Fail to load thumbnail ${t} @ ${r} with ${e}`),
        this.SetThumbnailData(s, { data: null, bIsLoading: !1 }));
    }
    return !1;
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
};
e([n], $c.prototype, `m_mapThumbnailImages`, void 0);
function el(e) {
  let t = (0, R.useRef)(null),
    n = pe(),
    r = Je(`useThumbnailAsURL`);
  return (
    (0, R.useEffect)(() => {
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
function tl(e, t, n, r, i, a, o) {
  return el(j(() => $c.Get().GetOrQueueThumbnail(e, n, t, r, i, a, o))?.data);
}
var nl = 320,
  rl = R.forwardRef(function (e, t) {
    let { globalMS: n, children: r, imgClassName: i, className: a, ...o } = e,
      s = K(),
      c = s.GetGameID(),
      l = s.GetClipID(),
      u = j(() => s.GetRecordingMode()),
      d = j(() => s.ConvertGlobaOffsetToRecordingAndRelativeOffset(n));
    ro();
    let f = d?.nRecordingOffsetMS,
      p = tl(c, l, d?.strRecordingID, f, d?.nStartOffsetMS, nl, !1),
      [m, h] = (0, R.useState)();
    return (
      (0, R.useEffect)(() => {
        p && h(p);
      }, [p]),
      (0, W.jsxs)(`div`, {
        ref: t,
        className: S(sc, ac[u], a),
        ...o,
        children: [
          (0, W.jsxs)(`div`, {
            className: S(cc, d?.strRecordingID && !m && `ap-Q4oooopI-`, ac[u]),
            children: [
              (0, W.jsx)(`div`, {
                className: uc,
                children: (0, W.jsxs)(`div`, {
                  className: dc,
                  children: [
                    d?.strRecordingID
                      ? (0, W.jsx)(`img`, { className: fc, src: m })
                      : (0, W.jsx)(`div`, {
                          className: pc,
                          children: A(`#GameRecording_PlayerNoContent`),
                        }),
                    (0, W.jsx)(il, {}),
                  ],
                }),
              }),
              (0, W.jsx)(`div`, { className: S(Cc), children: r }),
            ],
          }),
          (0, W.jsx)(`div`, { className: S(bc) }),
        ],
      })
    );
  });
function il() {
  let e = X(),
    t = j(() => e.GetGameID()),
    n = j(() => e.GetThumbnailComponent()),
    r = j(() => e.GetThumbnailEntry());
  if (!r || n !== J.Highlight) return null;
  if (Ii(r.entry))
    return (0, W.jsx)(al, {
      thumbnailEntry: r,
      achievementEntry: r.entry,
      strGameID: t,
    });
  let i = ``,
    a = ``;
  return (
    Li(r.entry)
      ? (a = A(r.entry.description) || `#GameRecording_UnknownError`)
      : Ri(r.entry)
        ? ((i = r.entry.title ? r.entry.title : A(`#Marker_UserMarker_Title`)),
          (a = r.entry.description || ``))
        : Fi(r.entry) &&
          ((i = r.entry.title || ``), (a = r.entry.description || ``)),
    !i && !a
      ? null
      : (0, W.jsx)(ol, { title: i, description: a, thumbnailEntry: r })
  );
}
function al(e) {
  let { strGameID: t, thumbnailEntry: n, achievementEntry: r } = e,
    i = Vn(new Ji(t).GetAppID(), r.achievement_name);
  return i
    ? (0, W.jsx)(ol, {
        title: i.name ?? ``,
        description: i.description ?? ``,
        thumbnailEntry: n,
      })
    : null;
}
function ol(e) {
  let { title: t, description: n, thumbnailEntry: r } = e;
  return (0, W.jsxs)(`div`, {
    className: mc,
    children: [
      (0, W.jsxs)(`div`, {
        className: hc,
        children: [
          (0, W.jsx)(`div`, {
            className: gc,
            children: (0, W.jsx)(Sa, {
              entry: r.entry,
              strMarkerIcon: r.strMarkerIcon,
            }),
          }),
          t && (0, W.jsx)(`div`, { className: `_3-l3Dnlgyfo-`, children: t }),
        ],
      }),
      (0, W.jsx)(`div`, {
        className: _c,
        children:
          n && (0, W.jsx)(`div`, { className: `_00G4k2IDvBQ-`, children: n }),
      }),
    ],
  });
}
var sl = R.forwardRef(function (e, t) {
  let { globalPX: n, onMouseEnter: r, onMouseLeave: i } = e,
    a = X(),
    o = j(() => a.ConvertPXOffsetToGlobalMS(n, !1)),
    s = j(() => a.GetThumbnailComponent()),
    c = K(),
    l = j(() => c.GetRecordingMode());
  return (0, W.jsxs)(rl, {
    className: S(Ec, ac[l], ac[s]),
    globalMS: o,
    ref: t,
    onMouseEnter: r,
    onMouseLeave: i,
    children: [
      (0, W.jsx)(ul, { globalMS: o }),
      (0, W.jsx)(cl, { globalMS: o }),
      (0, W.jsxs)(`div`, {
        className: Nc,
        children: [
          s === J.Highlight
            ? (0, W.jsx)(dl, {})
            : (0, W.jsx)(fl, { globalPX: n }),
          (0, W.jsx)(pl, { globalMS: o }),
        ],
      }),
    ],
  });
});
function cl(e) {
  let { globalMS: t } = e,
    n = X(),
    r = j(() => n.GetStateDescriptionAtGlobalMS(t));
  return r?.title
    ? (0, W.jsx)(`div`, { className: Pc, children: r.title })
    : null;
}
function ll(e, t) {
  return e.priority - t.priority;
}
function ul(e) {
  let { globalMS: t } = e,
    { setSelectedMarker: n } = no(),
    r = X(),
    i = K(),
    a = j(() => r.FindRangeEventsAtGlobalMS(t)),
    o = a.length > 3 ? a.sort(ll).slice(0, 3) : a,
    s = (e, r) => {
      let a = parseInt(r.duration),
        { nTimelineOffsetMS: o, strTimelineID: s } =
          i.ConvertGlobalOffsetToTimelineRelativeOffset(t),
        c = t - o.valMS + parseInt(r.time),
        [l, u] = i.GetLoader().CreateGlobalRangeForTimeline(s, c, 0, a);
      (i.SetPlaytimeFromGlobalMS(H(l)),
        n?.(r.id, s, l, u),
        V.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromRangeEvent`),
        e.stopPropagation());
    };
  return (0, W.jsx)(W.Fragment, {
    children: o.map((e, t) =>
      (0, W.jsxs)(
        `div`,
        {
          className: Jc,
          onClick: (t) => s(t, e),
          children: [
            e.icon &&
              (0, W.jsx)(Oa, {
                gameID: i.GetGameID(),
                icon: e.icon,
                className: `zjZlS00iLU4-`,
              }),
            (0, W.jsx)(`div`, { className: vc, children: e.title }),
            (0, W.jsx)(`div`, {
              className: Yc,
              children: Ce(parseInt(e.duration) / 1e3, !1),
            }),
          ],
        },
        `${e.time}_${t}`,
      ),
    ),
  });
}
function dl() {
  let e = K(),
    t = j(() => e.GetRecordingMode()),
    n = X(),
    r = j(() => n.GetThumbnailEntry());
  if (!r) return null;
  let i = n.GetTimelineOffsetMS(r.strTimelineID),
    a = Gi(parseInt(r.entry.time) - i),
    o = e.MakeRelativeToTimelineEndIfActive(r.strTimelineID, a.valMS),
    s = ``;
  if (Pi(r.entry)) {
    let e = o + parseInt(r.entry.duration);
    if (o < 0) {
      let t = Ce(Math.abs(o / 1e3), !1, !1),
        n = Ce(Math.abs(e / 1e3), !1, !1);
      s = A(`#Duration_WrittenNegation`, t + ` - ` + n);
    } else {
      let t = Ce(o / 1e3, !1, !1),
        n = Ce(e / 1e3, !1, !1);
      s = t + ` - ` + n;
    }
  } else s = Ce(o / 1e3, !1, !0);
  return (0, W.jsx)(`div`, { className: S(Oc, Dc, ac[t]), children: s });
}
function fl(e) {
  let { globalPX: t } = e,
    n = X(),
    r = j(() => n.ConvertPXToTimelineRelativeMS(t, `end-if-active`));
  return r
    ? (0, W.jsx)(`div`, { className: Oc, children: Ce(r / 1e3, !1, !0) })
    : null;
}
function pl(e) {
  let { globalMS: t } = e,
    n = X(),
    r = j(() => n.GetGameID()),
    i = j(() => n.GetThumbnailComponent()),
    a = j(() => n.GetThumbnailEntry()),
    o = [
      (0, W.jsx)(yl, { globalMS: t }, `add_marker`),
      (0, W.jsx)(bl, { globalMS: t }, `view_clip`),
    ];
  return (
    i == J.Highlight &&
      a &&
      (Li(a.entry) || Ii(a.entry) || Fi(a.entry)
        ? (o = [
            (0, W.jsx)(ml, { markerInfo: a }, `create_marker_clip`),
            (0, W.jsx)(hl, { markerInfo: a }, `view_clip`),
          ])
        : zi(a.entry)
          ? (o = [
              (0, W.jsx)(ml, { markerInfo: a }, `create_marker_clip`),
              (0, W.jsx)(vl, { entry: a.entry, gameID: r }, `view_screen`),
              (0, W.jsx)(hl, { markerInfo: a }, `view_clip`),
            ])
          : Ri(a.entry) &&
            (o = [
              (0, W.jsx)(_l, { markerInfo: a }, `edit_user`),
              (0, W.jsx)(ml, { markerInfo: a }, `create_marker_clip`),
              (0, W.jsx)(gl, { markerInfo: a }, `delete_user`),
              (0, W.jsx)(hl, { markerInfo: a }, `view_clip`),
            ])),
    (0, W.jsx)(`div`, { className: Fc, children: o })
  );
}
function ml(e) {
  let { setSelectedMarker: t } = no(),
    { markerInfo: n } = e,
    r = K(),
    i = j(() => r.ShouldModeShowClipControls()),
    a = j(() =>
      r.ConvertGlobaOffsetToRecordingAndRelativeOffset(n.nGlobalMS.valMS),
    ),
    o = Un(),
    s = oo();
  return !a?.strRecordingID || !i
    ? null
    : (0, W.jsx)(k, {
        toolTipContent: A(
          o ? `#RecordingState_Clip_LowDiskSpace` : `#TimelineDialog_ClipVideo`,
        ),
        direction: `top`,
        bTopmost: !0,
        children: (0, W.jsx)(`div`, {
          className: S(Ic, zc),
          onClick: (e) => {
            let i = vs,
              a = ys;
            Pi(n.entry) && ((i = 0), (a = parseInt(n.entry.duration)));
            let [o, c] = r
              .GetLoader()
              .CreateGlobalRangeForTimeline(
                n.strTimelineID,
                n.nGlobalMS.valMS,
                i,
                a,
              );
            (r.SetPlaytimeFromGlobalMS(H(o)),
              t?.(n.entry.id, n.strTimelineID, o, c),
              s(),
              V.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromHighlight`),
              e.stopPropagation());
          },
          children: (0, W.jsx)(ot, {}),
        }),
      });
}
function hl(e) {
  let { markerInfo: t } = e,
    n = X(),
    r = j(() => n.ConvertGlobalMSToClipOrNone(t.nGlobalMS.valMS)),
    { onNavigateToClip: i } = zo();
  return r
    ? (0, W.jsx)(k, {
        toolTipContent: A(`#TimelineDialog_ViewClip`),
        direction: `top`,
        bTopmost: !0,
        children: (0, W.jsx)(`div`, {
          className: S(Ic, Hc),
          onClick: () => {
            r &&
              (V.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/${t.entry.type}`,
              ),
              i(r.clipID));
          },
          children: (0, W.jsx)(we, {}),
        }),
      })
    : null;
}
function gl(e) {
  let { markerInfo: t } = e,
    n = K(),
    r = X();
  return (0, W.jsx)(k, {
    toolTipContent: A(`#Marker_Action_Delete`),
    direction: `top`,
    bTopmost: !0,
    children: (0, W.jsx)(`div`, {
      className: S(Ic, Vc),
      onClick: (e) => {
        Ri(t.entry) &&
          (V.ReportTrackedAction(
            `/GameRecording/Marker/Delete/${t.entry.type}`,
          ),
          n.RemoveUserMarker(t.strTimelineID, t.entry.id),
          r.SetThumbnailComponent(null));
      },
      children: (0, W.jsx)(Se, {}),
    }),
  });
}
function _l(e) {
  let { markerInfo: t } = e,
    n = K(),
    r = io();
  return (0, W.jsx)(k, {
    toolTipContent: A(`#Marker_Action_Edit`),
    direction: `top`,
    bTopmost: !0,
    children: (0, W.jsx)(`div`, {
      className: S(Ic, Bc),
      onClick: (e) => {
        if (!Ri(t.entry)) return;
        V.ReportTrackedAction(`/GameRecording/Marker/Edit/${t.entry.type}`);
        let i = (0, W.jsx)(qo, {
          entry: t.entry,
          playbackCoordinator: n,
          fnClearSelection: r,
          strTimelineID: t.strTimelineID,
        });
        (Re(i, D(e)), e.stopPropagation(), e.preventDefault());
      },
      children: (0, W.jsx)(St, {}),
    }),
  });
}
function vl(e) {
  let { entry: t, gameID: n } = e,
    r = t.handle,
    { onNavigateToScreenshot: i } = zo();
  return (0, W.jsx)(k, {
    toolTipContent: A(`#TimelineDialog_ViewScreenshot`),
    direction: `top`,
    bTopmost: !0,
    children: (0, W.jsx)(`div`, {
      className: S(Ic, Uc),
      onClick: () => {
        r &&
          (V.ReportTrackedAction(`/GameRecording/Tooltip/Screenshot`), i(n, r));
      },
      children: (0, W.jsx)(gt, {}),
    }),
  });
}
function yl(e) {
  let { globalMS: t } = e,
    n = K();
  return j(() => n.ConvertGlobaOffsetToRecordingAndRelativeOffset(t))
    ?.strRecordingID
    ? (0, W.jsx)(k, {
        toolTipContent: A(`#TimelineDialog_AddMarker`),
        direction: `top`,
        children: (0, W.jsx)(`div`, {
          className: S(Ic, Lc),
          onClick: () => {
            (n.AddUserMarkerAtGlobalMS(
              H(t),
              `/GameRecording/AddMarker/Thumbnail`,
              null,
            ),
              n.SetPlaytimeFromGlobalMS(H(t)));
          },
          children: (0, W.jsx)(lt, {}),
        }),
      })
    : null;
}
function bl(e) {
  let { globalMS: t } = e,
    n = X(),
    r = j(() => n.ConvertGlobalMSToClipOrNone(t)),
    { onNavigateToClip: i } = zo();
  return r
    ? (0, W.jsx)(k, {
        toolTipContent: A(`#TimelineDialog_ViewClip`),
        direction: `top`,
        children: (0, W.jsx)(`div`, {
          className: S(Ic, Rc),
          onClick: () => {
            r &&
              (V.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/timeline`,
              ),
              i(r.clipID));
          },
          children: (0, W.jsx)(we, {}),
        }),
      })
    : null;
}
var xl = R.memo(function (e) {
    let t = os(),
      n = us(),
      r = X(),
      i = K(),
      a = ps(),
      o = (0, R.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            a = w(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(a, !1);
          o && i.SetPlaytimeFromGlobalMS(H(o), void 0, void 0, !0);
        },
        [n, i, r],
      ),
      s = (0, R.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            i = w(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(i, !1);
          o &&
            (a(e, H(o), !1, {
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
      fs(`click`, o),
      fs(`contextmenu`, s),
      (0, W.jsx)(Sl, { globalMouseXPX: t.globalMouseXPX.valPX || 0 })
    );
  }),
  Sl = R.memo(function (e) {
    let { globalMouseXPX: t } = e,
      n = ls(),
      r = X(),
      i = us(),
      a = j(() => {
        if (r.GetThumbnailComponent()) return r.GetThumbnailPosition();
      }),
      [o, s] = (0, R.useState)(),
      [c, l] = (0, R.useState)();
    return (
      (0, R.useEffect)(() => {
        isNaN(a) ? !c && n && s(t) : s(a);
      }, [c, n, i, t, a]),
      (0, W.jsx)(`div`, {
        className: Bs,
        style: { transform: `translateX( calc(${o}px - 50%))` },
        children: (0, W.jsx)(Cl, {
          globalPX: o,
          setInteractingWithThumbnail: l,
          bInteractingWithThumbnail: c,
        }),
      })
    );
  });
function Cl(e) {
  let {
      globalPX: t,
      setInteractingWithThumbnail: n,
      bInteractingWithThumbnail: r,
    } = e,
    i = X(),
    a = K(),
    o = j(() => a.GetRecordingMode() === `Overlay`),
    s = j(() => i.ConvertPXOffsetToGlobalMS(t, !1)),
    c = j(() => i.GetTimelineParentCtnRef()),
    l = (0, R.useRef)(void 0),
    u = (0, R.useRef)(void 0),
    d = (0, R.useRef)(void 0),
    f = j(() => i.GetThumbnailComponent()),
    p = us(),
    m = We({
      toolTipContent: (0, W.jsx)(sl, {
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
    _ = (0, R.useCallback)(() => {
      (h(!1),
        n(!1),
        d.current && d.current(),
        (d.current = null),
        i.GetAutoScrollPaused() && i.SetAutoScrollPauseTimeout(),
        i.SetThumbnailComponent(null));
    }, [n, h, i]),
    v = (0, R.useCallback)(
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
    ee = (0, R.useCallback)(
      (e) => {
        let t = i.GetThumbnailComponent();
        (t && t !== J.Highlight) || v(e.clientX, e.clientY);
      },
      [v, i],
    ),
    y = (0, R.useCallback)(
      (e) => {
        v(e.clientX, e.clientY);
      },
      [v],
    );
  (fs(
    `mouseenter`,
    (0, R.useCallback)(() => {
      (h(!0), g(u.current));
      let e = be(u.current);
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
    (0, R.useEffect)(() => {
      let e = (e) => {
        let t = i.GetThumbnailComponent();
        (t && t === J.Playhead) ||
          t === J.RangeLeft ||
          t === J.RangeRight ||
          (l.current && !ge(l.current, e.relatedTarget) && _());
      };
      return (
        c && c.addEventListener(`mouseleave`, e),
        () => c && c.removeEventListener(`mouseleave`, e)
      );
    }, [_, c, i]),
    (0, R.useEffect)(() => _, [_]));
  let b = (p || r) && s && !f;
  return (0, W.jsxs)(`div`, {
    ref: u,
    className: Vs,
    children: [
      (0, W.jsx)(tc, { className: S(Hs, b && `_52Luj95k6TU-`) }),
      !!s && m.tooltip,
    ],
  });
}
var wl = `hmHZe5aDrq8-`,
  Tl = `VE-8JY5P2Qo-`,
  El = `bvHF-aIx6oc-`,
  Dl = `EFP0lnhKJeo-`,
  Ol = `MkCCKg4MUdU-`,
  kl = `_1xOfco9qmxw-`,
  Al = `fXvcT3pVP7Q-`,
  jl = `_2ytscAh4R6M-`,
  Ml = 500,
  Nl = (0, R.memo)(function () {
    let [e, t] = (0, R.useState)(`none`),
      n = $a(),
      r = Za(),
      i = Qa();
    return !n || !r || !i
      ? null
      : (0, W.jsx)(`div`, {
          className: wl,
          children: (0, W.jsx)(Pl, {
            activeControlState: e,
            setActiveControlState: t,
          }),
        });
  }),
  Pl = (0, R.memo)(function (e) {
    let { activeControlState: t, setActiveControlState: n } = e,
      [r, i] = (0, R.useState)(),
      [a, o] = (0, R.useState)(),
      s = Za(),
      c = Qa(),
      l = X(),
      u = j(() => l.ConvertGlobalMSToGlobalPXOffset(s.valMS)),
      d = j(() => l.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
      f = (0, R.useCallback)(
        (e) => {
          (i(e), l.SetAutoScrollPauseTimeout());
        },
        [l],
      ),
      p = (0, R.useCallback)(
        (e) => {
          (o(e), l.SetAutoScrollPauseTimeout());
        },
        [l],
      ),
      m = (0, R.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      ),
      h = (0, R.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      );
    return (0, W.jsx)(`div`, {
      className: S(Tl, t !== `none` && `r9kdAFASyBY-`),
      onMouseOver: m,
      onMouseOut: h,
      onFocus: m,
      onBlur: h,
      children: (0, W.jsxs)(`div`, {
        className: kl,
        children: [
          (0, W.jsx)(Ll, {
            isActive: t === `left`,
            setControlState: n,
            setRangeControlPX: f,
            pxOffset: r,
          }),
          (0, W.jsx)(Ul, {
            startOffsetPX: (t === `left` && r) || u,
            endOffsetPX: (t === `right` && a) || d,
            className: Dl,
          }),
          (0, W.jsx)(zl, {
            isActive: t === `right`,
            setControlState: n,
            setRangeControlPX: p,
            pxOffset: a,
          }),
        ],
      }),
    });
  });
function Fl(e, t, n) {
  let r = t.GetVisualWindowStartPX() - t.GetTimelineMarginWidth(),
    i = r + t.GetVisualWidth(),
    a = Math.max(0, r + 3),
    o = Math.min(t.GetScrollableWidthPX(), i - 3);
  n(w(e, a, o));
}
function Il(e, t, n, r, i, a) {
  let o = (0, R.useRef)(void 0),
    s = (0, R.useRef)(!1),
    c = (0, R.useRef)(void 0),
    l = (0, R.useRef)(void 0),
    u = j(() => t.GetScrollableWidthPX()),
    d = j(() => t.GetScrollWindowWidth());
  (0, R.useEffect)(
    () => () => {
      c.current &&
        (cancelAnimationFrame(c.current),
        (c.current = null),
        (l.current = null));
    },
    [],
  );
  let f = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (a(w(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(c.current),
          (c.current = null),
          (l.current = null));
      else {
        if (
          ((c.current &&= requestAnimationFrame((e) => f(e, t, n, r, i))),
          l.current)
        ) {
          let n = ((e - l.current) / Ml) * r;
          (t.ScrollBy(n), a((e) => w(e + n, 0, t.GetScrollableWidthPX())));
        }
        l.current = e;
      }
    },
    [a],
  );
  (0, R.useEffect)(() => {
    c.current &&
      (cancelAnimationFrame(c.current), (c.current = null), (l.current = null));
    let p = d * (1 - Ku),
      m = d * Ku,
      h = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      g = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (r.valPX > h) (a(h), i(`right`), t.SetThumbnailComponent(J.RangeRight));
    else {
      if (e.valPX < m && !t.BReachedMinScroll()) {
        if (e.valPX > o.current) s.current = !0;
        else if (e.valPX < o.current || !s.current) {
          let n = Math.min(m, g),
            r = e.valPX - n,
            i = w(Math.abs(r / n), 0, 1) * r;
          ((c.current = requestAnimationFrame((n) =>
            f(n, t, e.valPX, i, t.BReachedMinScroll),
          )),
            (s.current = !1));
        }
        Fl(r.valPX, t, a);
      } else if (e.valPX > p && g > p && !t.BReachedMaxScroll()) {
        if (e.valPX < o.current) s.current = !0;
        else if (e.valPX > o.current || !s.current) {
          let r = (e) => {
              let t = e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
              return e.BReachedMaxScroll() || t <= p;
            },
            i = e.valPX - p,
            a = w(Math.abs(i / (d - p)), 0, 1) * i;
          ((c.current = requestAnimationFrame((n) => f(n, t, e.valPX, a, r))),
            (s.current = !1));
        }
        Fl(r.valPX, t, a);
      } else a(w(r.valPX, 0, u));
      o.current = e.valPX;
    }
  }, [r.valPX, n.valMS, e.valPX, i, t, a, u, f, d]);
}
var Ll = (0, R.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = Za();
  return t
    ? (0, W.jsx)(Rl, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, W.jsx)(Hl, {
        offsetMS: a.valMS,
        direction: `left`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function Rl(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = eo(),
    a = Qa(),
    o = X(),
    s = ss();
  return (
    Il(cs(), o, a, s, t, n),
    (0, R.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, H(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, W.jsx)(Wl, { offsetPX: r, direction: `left` })
  );
}
var zl = (0, R.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = Qa();
  return t
    ? (0, W.jsx)(Bl, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, W.jsx)(Hl, {
        offsetMS: a.valMS,
        direction: `right`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function Bl(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = to(),
    a = Za(),
    o = X(),
    s = ss();
  return (
    Vl(cs(), o, a, s, t, n),
    (0, R.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, H(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, W.jsx)(Wl, { offsetPX: r, direction: `right` })
  );
}
function Vl(e, t, n, r, i, a) {
  let o = (0, R.useRef)(void 0),
    s = (0, R.useRef)(!1),
    c = (0, R.useRef)(void 0),
    l = (0, R.useRef)(void 0),
    u = j(() => t.GetScrollableWidthPX()),
    d = j(() => t.GetScrollWindowWidth());
  (0, R.useEffect)(
    () => () => {
      c.current &&
        (cancelAnimationFrame(c.current),
        (c.current = null),
        (l.current = null));
    },
    [],
  );
  let f = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (a(w(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(c.current),
          (c.current = null),
          (l.current = null));
      else {
        if (
          ((c.current &&= requestAnimationFrame((e) => f(e, t, n, r, i))),
          l.current)
        ) {
          let n = ((e - l.current) / Ml) * r;
          (t.ScrollBy(n), a((e) => w(e + n, 0, t.GetScrollableWidthPX())));
        }
        l.current = e;
      }
    },
    [a],
  );
  (0, R.useEffect)(() => {
    c.current &&
      (cancelAnimationFrame(c.current), (c.current = null), (l.current = null));
    let p = d * (1 - Ku),
      m = d * Ku,
      h = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      g = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (r.valPX < h) (a(h), i(`left`), t.SetThumbnailComponent(J.RangeLeft));
    else {
      if (e.valPX > p && !t.BReachedMaxScroll()) {
        if (e.valPX < o.current) s.current = !0;
        else if (e.valPX > o.current || !s.current) {
          let n = Math.max(p, g),
            r = e.valPX - n,
            i = w(Math.abs(r / (d - n)), 0, 1) * r;
          ((c.current = requestAnimationFrame((n) =>
            f(n, t, e.valPX, i, t.BReachedMaxScroll),
          )),
            (s.current = !1));
        }
        Fl(r.valPX, t, a);
      } else if (
        e.valPX < m &&
        g < m &&
        e.valPX <= o.current &&
        !t.BReachedMinScroll()
      ) {
        if (e.valPX > o.current) s.current = !0;
        else if (e.valPX < o.current || !s.current) {
          let r = e.valPX - m,
            i = w(Math.abs(r / m), 0, 1) * r,
            a = (e) =>
              e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS) > m ||
              e.BReachedMinScroll();
          ((c.current = requestAnimationFrame((n) => f(n, t, e.valPX, i, a))),
            (s.current = !1));
        }
        Fl(r.valPX, t, a);
      } else a(w(r.valPX, 0, u));
      o.current = e.valPX;
    }
  }, [n.valMS, e.valPX, i, t, a, u, d, r.valPX, f]);
}
function Hl(e) {
  let {
      offsetMS: t,
      direction: n,
      setControlState: r,
      setRangeControlPX: i,
    } = e,
    a = X(),
    o = j(() => a.ConvertGlobalMSToGlobalPXOffset(t));
  (0, R.useEffect)(
    () => (
      i(void 0),
      () => {
        i(o);
      }
    ),
    [o, i],
  );
  let s = (0, R.useCallback)(
      (e) => {
        let t = D(e),
          i,
          o,
          s = () => {
            (r(n),
              a.SetThumbnailComponent(
                n === `left` ? J.RangeLeft : J.RangeRight,
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
      a.SetThumbnailComponent(n === `left` ? J.RangeLeft : J.RangeRight);
    },
    l = (e) => {
      a.SetThumbnailComponent(null);
    };
  return (0, W.jsx)(`div`, {
    className: El,
    onMouseDown: s,
    onMouseOver: c,
    onFocus: c,
    onMouseOut: l,
    onBlur: l,
    children: (0, W.jsx)(Wl, { offsetPX: o, direction: n }),
  });
}
var Ul = (0, R.memo)(function (e) {
    let { startOffsetPX: t, endOffsetPX: n, className: r } = e;
    if (isNaN(t) || isNaN(n)) return null;
    let i = { width: n - t || 0, transform: `translateX(${t}px)` };
    return (0, W.jsx)(`div`, { className: S(jl, r), style: i });
  }),
  Wl = (0, R.memo)(function (e) {
    let { direction: t, offsetPX: n } = e,
      r = { transform: `translateX( calc( ${n}px - 50%) )` },
      i = X(),
      a = j(() => i.GetThumbnailComponent() === J.Playhead);
    return (0, W.jsx)(`div`, {
      style: r,
      className: S(Al),
      children: (0, W.jsx)(`div`, {
        className: S(Ol, t === `left` && void 0, a && `o23F9bJf68E-`),
        children: (0, W.jsx)(Gl, { innerFill: `#171d25`, direction: t }),
      }),
    });
  });
function Gl(e) {
  return (0, W.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 3 36`,
    fill: `none`,
    style: { transform: `rotate(${e.direction === `right` ? 180 : 0}deg)` },
    children: [
      (0, W.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 0)`,
      }),
      (0, W.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 10)`,
      }),
      (0, W.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 20)`,
      }),
      (0, W.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 30)`,
      }),
    ],
  });
}
var Kl = `peJfRpya9Fs-`,
  ql = 100,
  Jl = R.memo(function (e) {
    let t = X(),
      n = j(() => t.GetVisibleWindowRelativeTimelines()),
      r = K().GetRecordingMode(),
      i = [],
      a = ``;
    for (let e of n) {
      let n = t.GetTimeRecorded(e.timelineID),
        r = Ae(n);
      r != a && (i.push({ timeline: e, strLabel: r }), (a = r));
    }
    for (let e = i.length - 2; e >= 0; e--) {
      let t = i[e];
      i[e + 1].timeline.nVisibleStartPX - t.timeline.nVisibleStartPX >= ql ||
        i.splice(e, 1);
    }
    return (0, W.jsx)(W.Fragment, {
      children: i.map((e) =>
        (0, W.jsx)(
          Yl,
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
function Yl(e) {
  let { label: t, startPX: n, recordingMode: r } = e,
    i = r == sa.Overlay;
  return (0, W.jsx)(`div`, {
    className: S(Kl, i && `r-oc0eIT1Lw-`),
    style: { transform: `translateX(${n}px)` },
    children: t,
  });
}
var Xl = `rpb9NP30tgc-`,
  Zl = `JCH5UEpUzxo-`,
  Ql = (0, R.memo)(function (e) {
    let t = X(),
      n = j(() => t.GetVisibleRecordings());
    return (0, W.jsx)(W.Fragment, {
      children: n.map((e) =>
        (0, W.jsx)(
          $l,
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
function $l(e) {
  let { isActive: t, endPX: n, startPX: r, recordingType: i } = e,
    a = { width: n - r || 0, transform: `translateX(${r}px)` },
    o = ro(),
    s = i === 4,
    c = i === 2;
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(`div`, {
        className: S(
          Xl,
          s && `xg0PXeGNr6o-`,
          c && `DlYcvPsKhnQ-`,
          o && `pbiBKOrHy28-`,
        ),
        style: a,
      }),
      t && (0, W.jsx)(eu, { endPX: n }),
    ],
  });
}
function eu(e) {
  let { endPX: t } = e,
    n = K(),
    r = X(),
    i = j(() => n.GetRecordingMode() === `Overlay`),
    a = oa(n.GetGameID()),
    o = j(() => n.GetIsLiveEdge() && !n.GetHidePlayer()),
    s = j(() => {
      let e = n.GetLiveEdgeBufferWindowStartMS();
      return r.ConvertGlobalMSToGlobalPXOffset(e.valMS);
    });
  if (!i || a !== aa.BackgroundRecording) return null;
  let c = { width: t - s || 0, transform: `translateX(${s}px)` };
  return (0, W.jsx)(`div`, { className: S(Zl, o && `ObPDU8jrJGI-`), style: c });
}
var tu = `etyWD-mczjA-`,
  nu = (0, R.memo)(function (e) {
    let t = X(),
      n = j(() => t.GetVisibleClips());
    return (0, W.jsx)(W.Fragment, {
      children: n.map((e) =>
        (0, W.jsx)(
          ru,
          { startPX: e.pxClipStart, endPX: e.pxClipEnd },
          e.clipID,
        ),
      ),
    });
  }),
  ru = (0, R.memo)(function (e) {
    let { endPX: t, startPX: n } = e,
      r = { width: t - n || 0, transform: `translateX(${n}px)` };
    return (0, W.jsx)(`div`, { className: tu, style: r });
  }),
  iu = `r7Pr1Bv8r30-`,
  au = `V3xSKJyklXQ-`,
  ou = `nT24tktVM-s-`,
  su = `a9purv61CPI-`,
  cu = `O-J-KNmIhN8-`,
  lu = `lMpHX8arl8s-`,
  uu = `hMUPhnvIP90-`,
  du = `M5wPU20T76E-`,
  fu = `H3EDFnaZgvI-`,
  pu = `iAKyxjjcF38-`,
  mu = `pEzP-JpCCcQ-`,
  hu = `hBDI48p9XRY-`,
  gu = `PZt-x5Tu8rg-`,
  _u = `_57e4oWLUba0-`,
  vu = `diJRy3nTnTM-`;
function yu() {
  let e = oa(K().GetGameID());
  return e === aa.NotRecording || e === aa.NotRunning
    ? null
    : (0, W.jsx)(bu, {});
}
function bu(e) {
  let t = K(),
    n = j(() => t.GetIsLiveEdge() && !t.GetHidePlayer()),
    r = R.useCallback(() => {
      (t.SetHidePlayer(!1), t.GetGameRecordingVideo().Play());
      let e = t.GetLiveEdgeMS();
      (t.SetPlaytimeFromGlobalMS(e), t.FocusGlobalMS(e));
    }, [t]);
  return (0, W.jsx)(k, {
    className: gu,
    toolTipContent: A(n ? `#Playback_AtLatest` : `#Playback_JumpToLatest`),
    direction: `bottom`,
    children: (0, W.jsx)(Ee, {
      onClick: r,
      className: S(_u, n && `FuL7350j26I-`),
      children: (0, W.jsx)(At, { className: S(vu) }),
    }),
  });
}
var xu = (0, R.forwardRef)(function (e, t) {
    let n = X();
    return j(() => !n.BEmpty())
      ? (0, W.jsx)(Cu, { ...e, timelineView: n, ref: t })
      : (0, W.jsx)(Su, { ref: t });
  }),
  Su = (0, R.forwardRef)(function (e, t) {
    return (0, W.jsx)(`div`, { ref: t, className: S(au, e.className) });
  }),
  Cu = (0, R.forwardRef)(function (e, t) {
    let n = K(),
      { children: r, className: i, timelineView: a, disableZoom: o } = e,
      [s, c] = (0, R.useState)(),
      l = R.useCallback(
        (e) => {
          let t = e.target.getBoundingClientRect();
          (a.SetScrollWindowOffset(t.x), a.SetScrollWindowWidth(t.width), c(t));
        },
        [a],
      ),
      u = Fe(l),
      d = R.useCallback(
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
      Nu(n, a),
      (0, W.jsxs)(`div`, {
        ref: t,
        onWheel: d,
        onMouseOver: () => a.SetAutoScrollPaused(!0),
        onFocus: () => {},
        onMouseLeave: () => a.SetAutoScrollPauseTimeout(),
        children: [
          (0, W.jsxs)(`div`, {
            className: ou,
            children: [
              (0, W.jsxs)(`div`, {
                ref: u,
                className: S(iu, i),
                children: [r, (0, W.jsx)(wu, { timelineView: a })],
              }),
              n.GetRecordingMode() === sa.Overlay && (0, W.jsx)(yu, {}),
            ],
          }),
          (0, W.jsx)(`div`, {
            className: uu,
            children: !n.GetGamepadMode() && (0, W.jsx)(Tu, {}),
          }),
        ],
      })
    );
  });
function wu(e) {
  let { timelineView: t } = e,
    n = j(() => t.GetVisualWindowStartPX()),
    r = j(() => t.BReachedMaxScroll());
  return (0, W.jsxs)(`div`, {
    className: su,
    children: [
      (0, W.jsx)(`div`, { className: S(cu, n === 0 && `geyoRt0NNcM-`) }),
      (0, W.jsx)(`div`, { className: S(lu, r && `geyoRt0NNcM-`) }),
    ],
  });
}
function Tu() {
  let [e, t] = (0, R.useState)({ scrollBarWidth: 0, scrollBarXOffset: 0 }),
    n = R.useCallback((e) => {
      let n = e.target.getBoundingClientRect();
      t({ scrollBarWidth: n.width, scrollBarXOffset: n.x });
    }, []),
    r = X(),
    i = j(() => r.GetScrollableWidthPX() + 2 * r.GetTimelineMarginWidth()),
    a = j(() => r.GetVisualWidth()),
    o = (0, R.useMemo)(
      () => (a * e.scrollBarWidth) / i || 0,
      [a, e.scrollBarWidth, i],
    ),
    s = Fe(n);
  return (0, W.jsxs)(`div`, {
    className: S(
      du,
      Math.round(o) === Math.round(e.scrollBarWidth) && `cyfpsKb1Pow-`,
    ),
    ref: s,
    children: [
      (0, W.jsx)(Eu, { timelineView: r, scrollSize: e }),
      (0, W.jsx)(ju, {
        scrollSize: e,
        timelineView: r,
        timelineWidth: i,
        thumbWidth: o,
      }),
    ],
  });
}
function Eu(e) {
  let { timelineView: t, scrollSize: n } = e,
    r = K(),
    i = Du(t, n),
    a = j(() => t.GetTimelineMarginWidth()),
    o = j(() => t.GetScrollableWidthPX()),
    s = (0, R.useCallback)(
      (e) => {
        let t = e + a;
        return w((t * n.scrollBarWidth) / o, 0, n.scrollBarWidth);
      },
      [n.scrollBarWidth, a, o],
    );
  return (0, W.jsxs)(`div`, {
    className: fu,
    ...i,
    children: [
      (0, W.jsx)(Ou, {
        timelineView: t,
        playbackCoordinator: r,
        fnConvertGlobalPXToTrackPX: s,
        scrollBarWidth: n.scrollBarWidth,
      }),
      (0, W.jsx)(Au, { timelineView: t, fnConvertGlobalPXToTrackPX: s }),
    ],
  });
}
function Du(e, t) {
  let n = (0, R.useRef)(void 0),
    r = (0, R.useRef)(void 0),
    i = j(() => e.GetScrollableWidthPX()),
    a = (0, R.useCallback)(
      (e) => Ki((i * e) / t.scrollBarWidth),
      [t.scrollBarWidth, i],
    ),
    o = (0, R.useCallback)(() => {
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
    s = (0, R.useCallback)(
      (e) => {
        ((n.current = a(e.clientX - t.scrollBarXOffset)),
          (r.current = requestAnimationFrame(() => o())));
      },
      [a, o, t.scrollBarXOffset],
    ),
    c = (0, R.useCallback)(() => {
      r.current && cancelAnimationFrame(r.current);
    }, []),
    l = (0, R.useCallback)(
      (e) => {
        n.current = a(e.clientX - t.scrollBarXOffset);
      },
      [a, t.scrollBarXOffset],
    );
  return (
    (0, R.useEffect)(
      () => () => {
        r.current && cancelAnimationFrame(r.current);
      },
      [],
    ),
    { onMouseDown: s, onMouseMove: l, onMouseUp: c, onMouseLeave: c }
  );
}
function Ou(e) {
  let {
      timelineView: t,
      playbackCoordinator: n,
      fnConvertGlobalPXToTrackPX: r,
      scrollBarWidth: i,
    } = e,
    a = j(() => n.GetHidePlayer()),
    o = j(() => {
      let e = n.GetGlobalMSPlaytime();
      if (e && t.BInitialized()) {
        let n = Math.floor(t.ConvertGlobalMSToGlobalPXOffset(e.valMS));
        return r(n);
      }
      return null;
    });
  return o
    ? (0, W.jsx)(`div`, {
        className: pu,
        onClick: () => {
          let e = n.GetGlobalMSPlaytime();
          (a && (e = n.GetLiveEdgeMS()), t.ScrollToCenteredGlobalMS(e.valMS));
        },
        style: { transform: `translateX(${a ? i : o}px)` },
        children: (0, W.jsx)(ku, {}),
      })
    : null;
}
function ku() {
  return (0, W.jsx)(`svg`, {
    width: `52`,
    height: `31`,
    viewBox: `0 0 52 31`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      d: `M26 31L51.1147 0.25H0.885263L26 31Z`,
      fill: `#D9D9D9`,
    }),
  });
}
function Au(e) {
  let { timelineView: t, fnConvertGlobalPXToTrackPX: n } = e,
    r = ro(),
    i = Xa(),
    a = j(() => {
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
    ? (0, W.jsx)(`div`, {
        className: mu,
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
function ju(e) {
  let { scrollSize: t, timelineWidth: n, thumbWidth: r, timelineView: i } = e,
    { thumbPositionPX: a, onMouseDown: o, bHiglightThumb: s } = Mu(t, n, r, i);
  return (0, W.jsx)(`div`, {
    className: S(hu, s && `jBCmf-dRAeA-`),
    style: { width: r, transform: `translateX(${a}px)` },
    onMouseDown: o,
  });
}
function Mu(e, t, n, r) {
  let [i, a] = (0, R.useState)(!1),
    [o, s] = (0, R.useState)(0),
    c = j(() => {
      let i = r.BInitialized(),
        a = r.GetVisualWindowStartPX();
      return i ? w((a * e.scrollBarWidth) / t, 0, e.scrollBarWidth - n) : 0;
    }),
    [l, u] = (0, R.useState)(!1),
    d = (0, R.useRef)(void 0);
  (0, R.useEffect)(() => {
    if (r.GetAutoScrollPaused())
      return (
        u(!0),
        (d.current = window.setTimeout(() => {
          u(!1);
        }, 500)),
        () => window.clearTimeout(d.current)
      );
  }, [c, r]);
  let f = (0, R.useCallback)(
      (t) => {
        (s(c), a(!0));
        let n = t.nativeEvent.offsetX,
          i = r.GetTimelineParentCtnRef() ?? D(t),
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
    p = (0, R.useMemo)(
      () => (i ? w(o, 0, e.scrollBarWidth - n) : c),
      [o, i, c, e.scrollBarWidth, n],
    );
  return (
    (0, R.useEffect)(() => {
      if (i) {
        let n = (t * p) / e.scrollBarWidth;
        r.ScrollToOffset(n);
      }
    }, [i, e.scrollBarWidth, p, r, t]),
    { thumbPositionPX: p, onMouseDown: f, bHiglightThumb: l }
  );
}
function Nu(e, t) {
  let n = j(
    () =>
      !t.GetAutoScrollPaused() &&
      e.GetGameRecordingVideo().BVideoElementPlaying(),
  );
  (0, R.useEffect)(() => {
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
var Pu = `ntKPAM1NZ9k-`,
  Fu = `JXv-qDT9fmY-`,
  Iu = `Rg3Qyz2aIKM-`;
function Lu(e) {
  let t = X(),
    n = j(() => t.GetVisibleTimelines());
  return (0, W.jsx)(W.Fragment, {
    children: n.flatMap((e) =>
      e.phaseOffsets.map((t, n) =>
        (0, R.createElement)(Ru, {
          ...t,
          timeline: e,
          key: `${e.timelineID}_${n}`,
        }),
      ),
    ),
  });
}
function Ru(e) {
  let { timelineOffsetMS: t, nDurationMS: n, phase: r, timeline: i } = e;
  return (0, W.jsxs)(zu, {
    ...e,
    children: [(0, W.jsx)(Vu, {}), (0, W.jsx)(Bu, {}), (0, W.jsx)(Vu, {})],
  });
}
function zu(e) {
  let {
      children: t,
      timeline: n,
      timelineOffsetMS: r,
      nDurationMS: i,
      phase: a,
    } = e,
    o = X(),
    s = K(),
    c = ss()?.valPX || -1,
    l = ls(),
    [u] = ds(),
    {
      pxStart: d,
      pxWidth: f,
      bHighlight: p,
    } = j(() => {
      let e = o.GetPhaseToHighlight();
      return {
        pxStart: o.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS + r),
        pxWidth: o.ConvertDurationMSToDeltaPX(i),
        bHighlight:
          e && e[0] === n.timelineID && e[1] === a.background_timeline_offset,
      };
    }),
    m = (l || u) && c >= d && c <= d + f,
    [h, g] = ma(),
    _ = () => {
      let e = s.GetLoader(),
        t = e.GetTimelineData(n.timelineID),
        i = e.GetTimelineMetadata(n.timelineID),
        a = t.m_rgPhases.find((e) => parseInt(e.time) === r);
      a && g({ entry: a, timeline: i });
    },
    v = () => g(void 0);
  return (0, W.jsx)(`div`, {
    className: S(Pu, m && `_7iKrpiRqfb4-`, p && `-VGOLVELQNE-`),
    style: { transform: `translateX( ${d}px )`, width: `${f}px` },
    onMouseOver: _,
    onMouseLeave: v,
    onFocus: _,
    onBlur: v,
    children: t,
  });
}
function Bu(e) {
  return (0, W.jsx)(`div`, { className: Fu });
}
function Vu(e) {
  return (0, W.jsx)(`div`, { className: Iu });
}
var Hu = `YTX0fQkY6BM-`;
function Uu(e) {
  let t = X(),
    n = j(() => t.GetVisibleTimelines());
  return (0, W.jsx)(W.Fragment, {
    children: n.map((e) => (0, W.jsx)(Wu, { timeline: e }, e.timelineID)),
  });
}
function Wu(e) {
  let { timeline: t } = e,
    n = X(),
    r = j(() => n.GetVisibleTimelineHighlights(t.timelineID) || []),
    i = j(() => n.GetTimelineOffsetMS(t.timelineID)),
    a = t.globalOffsetMS - i;
  return (0, W.jsx)(W.Fragment, {
    children: r
      .filter((e) => js(e) === `range_highlight`)
      .map((e) =>
        (0, W.jsx)(
          Gu,
          { entry: e, timeline: t, timelineView: n, timelineOffset: a },
          e.id,
        ),
      ),
  });
}
function Gu(e) {
  let { timelineView: t, entry: n, timelineOffset: r } = e,
    i = r + parseInt(n.time),
    { pxStart: a, pxWidth: o } = j(() => ({
      pxStart: t.ConvertGlobalMSToGlobalPXOffset(i),
      pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(n.duration)),
    })),
    s = { width: `${o}px`, transform: `translateX( ${a}px )` };
  return (0, W.jsx)(`svg`, {
    className: Hu,
    style: s,
    children: (0, W.jsx)(`line`, {
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
var Ku = 0.08;
function qu(e) {
  let {
      loader: t,
      className: n,
      clipSummaries: r,
      refTimelineParentCtn: i,
      disableZoom: a,
    } = e,
    o = j(() => t.BInitialized()),
    s = K();
  if (!o) return (0, W.jsx)(`div`, { className: Aa });
  let c = S(ja, s.GetGamepadMode() && `xP7qeNW99Qo-`, n);
  return (0, W.jsx)(_o, {
    loader: t,
    clipSummaries: r,
    playbackCoordinator: s,
    refTimelineParentCtn: i,
    children: (0, W.jsxs)(`div`, {
      className: c,
      dir: `ltr`,
      children: [
        (0, W.jsx)(Xu, {}),
        (0, W.jsx)(Zu, {}),
        (0, W.jsx)(gn, {
          tour: `recording_timeline`,
          name: `timeline`,
          options: { position: `left`, offset: 20 },
          children: (0, W.jsx)(xu, {
            className: Ma,
            disableZoom: a,
            children: (0, W.jsx)(Ju, {}),
          }),
        }),
      ],
    }),
  });
}
var Ju = (0, R.memo)(function (e) {
  let t = X();
  return j(() => t.BInitialized()) ? (0, W.jsx)(Yu, {}) : null;
});
function Yu() {
  let e = X(),
    t = j(() => e.GetScrollableWidthPX()),
    n = j(() => e.GetVisualWindowStartPX()),
    r = j(() => e.GetTimelineMarginWidth());
  return (0, W.jsxs)(`div`, {
    className: Na,
    style: {
      minWidth: t || 0,
      marginRight: r,
      marginLeft: r,
      transform: `translateX(${-n}px)`,
    },
    children: [
      (0, W.jsx)(Z, {
        id: `recordings`,
        className: Ia,
        children: (0, W.jsx)(Ql, {}),
      }),
      (0, W.jsx)(Z, {
        id: `clips`,
        className: La,
        children: (0, W.jsx)(nu, {}),
      }),
      (0, W.jsx)(Z, {
        id: `game_modes`,
        className: Ra,
        children: (0, W.jsx)(Rs, {}),
      }),
      (0, W.jsx)(Z, {
        id: `date_decorators`,
        className: za,
        children: (0, W.jsx)(Jl, {}),
      }),
      (0, W.jsx)(Z, {
        id: `ticks`,
        className: Ba,
        children: (0, W.jsx)(Do, {}),
      }),
      (0, W.jsxs)(as, {
        children: [
          (0, W.jsx)(Z, {
            id: `highlights`,
            className: Va,
            children: (0, W.jsx)(Es, {}),
          }),
          (0, W.jsx)(Z, {
            id: `range_selection`,
            className: Ua,
            children: (0, W.jsx)(Nl, {}),
          }),
          (0, W.jsx)(Z, {
            id: `seek_scrub`,
            className: Wa,
            children: (0, W.jsx)(xl, {}),
          }),
          (0, W.jsx)(Z, {
            id: `play_head`,
            className: Ga,
            children: (0, W.jsx)(Ys, {}),
          }),
          (0, W.jsx)(Z, {
            id: `phases`,
            className: Ja,
            children: (0, W.jsx)(Lu, {}),
          }),
          (0, W.jsx)(Z, {
            id: `range_highlights`,
            className: Ha,
            children: (0, W.jsx)(Uu, {}),
          }),
        ],
      }),
    ],
  });
}
function Z(e) {
  let { children: t, id: n, className: r } = e;
  return (0, W.jsx)(`div`, {
    id: n,
    className: S(r, Pa),
    children: (0, W.jsx)(`div`, { className: Fa, children: t }),
  });
}
function Xu(e) {
  let t = K().GetRenderGlyph();
  return t ? t(fe.TRIGGER_LEFT, !1, !1, Ka) : null;
}
function Zu(e) {
  let t = K().GetRenderGlyph();
  return t ? t(fe.TRIGGER_RIGHT, !1, !1, qa) : null;
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
  ed = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
            name: { n: 3, br: o.readString, bw: _.writeString },
            desc: { n: 4, br: o.readString, bw: _.writeString },
            branches: {
              n: 5,
              r: !0,
              q: !0,
              br: o.readString,
              bw: _.writeRepeatedString,
            },
            last_update_rtime: { n: 6, br: o.readUint32, bw: _.writeUint32 },
            priority: { n: 7, br: o.readUint32, bw: _.writeUint32 },
            last_publish_rtime: { n: 8, br: o.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSet`;
    }
  },
  td = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            assetset: { n: 2, c: ed },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_CreateAssetSet_Request`;
    }
  },
  nd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetset || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { assetset: { n: 1, c: ed } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_CreateAssetSet_Response`;
    }
  },
  rd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_DeleteAssetSet_Request`;
    }
  },
  id = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_DeleteAssetSet_Response`;
    }
  },
  ad = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            assetset: { n: 2, c: ed },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdateAssetSet_Request`;
    }
  },
  od = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), L.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdateAssetSet_Response`;
    }
  },
  sd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: o.readUint32, bw: _.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_GetAllAssetSets_Request`;
    }
  },
  cd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetset || m(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null));
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
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_GetAllAssetSets_Response`;
    }
  },
  ld = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
            branch: { n: 3, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_AddBranchToAssetSet_Request`;
    }
  },
  ud = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: ed } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_AddBranchToAssetSet_Response`;
    }
  },
  dd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
            branch: { n: 3, br: o.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_RemoveBranchFromAssetSet_Request`;
    }
  },
  fd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: ed } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_RemoseBranchFromAssetSet_Response`;
    }
  },
  pd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            first_assetset_id: {
              n: 2,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
            second_assetset_id: {
              n: 3,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_SwapAssetSetPriority_Request`;
    }
  },
  md = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated_first || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_SwapAssetSetPriority_Response`;
    }
  },
  hd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: o.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdatePublishTime_Request`;
    }
  },
  gd = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || m(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: ed } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= C(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return v(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdatePublishTime_Response`;
    }
  },
  _d;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.CreateAssetSet#1`, b(td, t, n), nd, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreateAssetSet = t;
  function n(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.DeleteAssetSet#1`, b(rd, t, n), id, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeleteAssetSet = n;
  function r(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.UpdateAssetSet#1`, b(ad, t, n), od, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdateAssetSet = r;
  function i(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.GetAllAssetSets#1`, b(sd, t, n), cd, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetAllAssetSets = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.AddBranchToAssetSet#1`,
      b(ld, t, n),
      ud,
      { ePrivilege: 7, rgBrowserAPISites: [`partner`] },
    );
  }
  e.AddBranchToAssetSet = a;
  function o(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.RemoveBranchFromAssetSet#1`,
      b(dd, t, n),
      fd,
      { ePrivilege: 7, rgBrowserAPISites: [`partner`] },
    );
  }
  e.RemoveBranchFromAssetSet = o;
  function s(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.SwapAssetSetPriority#1`,
      b(pd, t, n),
      md,
      { ePrivilege: 7 },
    );
  }
  e.SwapAssetSetPriority = s;
  function c(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.UpdatePublishTime#1`,
      b(hd, t, n),
      gd,
      { ePrivilege: 7 },
    );
  }
  e.UpdatePublishTime = c;
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
            name: A(
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
      let t = se.Init(td),
        n = null;
      try {
        (t.Body().set_appid(e.appid), t.Body().set_assetset(ed.fromObject(e)));
        let r = await _d.CreateAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        );
        if (r.GetEResult() == 1) {
          let t = r.Body().assetset().toObject();
          return (
            this.m_mapAssetSets.set(t.assetset_id, t),
            this.GetAppAssetSetListChangeCallback(e.appid).Dispatch(
              this.GetAllAssetSets(e.appid),
            ),
            1
          );
        }
        n = N(r);
      } catch (e) {
        n = N(e);
      }
      return (
        console.error(
          `CAssetSetStore.CreateAssetSet failed: on item ` +
            e.appid +
            ` with ` +
            n?.strErrorMsg,
          n,
        ),
        2
      );
    }
    async UpdateAssetSet(e) {
      let t = se.Init(ad),
        n = null;
      try {
        (t.Body().set_appid(e.appid), t.Body().set_assetset(ed.fromObject(e)));
        let r = await _d.UpdateAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          t,
        );
        if (r.GetEResult() == 1)
          return (
            this.m_mapAssetSets.set(e.assetset_id, e),
            this.GetAssetSetChangeCallback(e.assetset_id).Dispatch(e),
            1
          );
        n = N(r);
      } catch (e) {
        n = N(e);
      }
      return (
        console.error(
          `CAssetSetStore.UpdateAssetSet failed: on item ` +
            e.appid +
            ` with ` +
            n?.strErrorMsg,
          n,
        ),
        2
      );
    }
    async DeleteAssetSet(e, t) {
      let n = se.Init(rd),
        r = null;
      try {
        (n.Body().set_appid(e), n.Body().set_assetset_id(t));
        let i = await _d.DeleteAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          n,
        );
        if (i.GetEResult() == 1)
          return (
            this.m_mapAssetSets.delete(t),
            this.GetAppAssetSetListChangeCallback(e).Dispatch(
              this.GetAllAssetSets(e),
            ),
            1
          );
        r = N(i);
      } catch (e) {
        r = N(e);
      }
      return (
        console.error(
          `CAssetSetStore.DeleteAssetSet failed: on item ` +
            e +
            ` with ` +
            r?.strErrorMsg,
          r,
        ),
        2
      );
    }
    async AddBranchToAssetSet(e, t, n) {
      let r = se.Init(ld),
        i = null,
        a = this.m_mapAssetSets.get(t);
      if (!a)
        return (
          console.log(
            `CAssetSetStore.AddBranchToAssetSet object missing: ` + t,
          ),
          2
        );
      try {
        (r.Body().set_appid(e),
          r.Body().set_assetset_id(t),
          r.Body().set_branch(n));
        let o = await _d.AddBranchToAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          r,
        );
        if (o.GetEResult() == 1)
          return (
            (a.branches ||= []),
            a.branches.push(n),
            this.GetAssetSetChangeCallback(a.assetset_id).Dispatch({ ...a }),
            1
          );
        i = N(o);
      } catch (e) {
        i = N(e);
      }
      return (
        console.error(
          `CAssetSetStore.AddBranchToAssetSet failed: on item ` +
            e +
            ` with ` +
            i?.strErrorMsg,
          i,
        ),
        2
      );
    }
    async RemoveBranchFromAssetSet(e, t, n) {
      let r = se.Init(dd),
        i = null,
        a = this.m_mapAssetSets.get(t);
      if (!a)
        return (
          console.log(
            `CAssetSetStore.RemoveBranchFromAssetSet object missing: ` + t,
          ),
          2
        );
      let o = (a.branches || []).findIndex((e) => e === n);
      if (o < 0)
        return (
          console.log(
            `CAssetSetStore.RemoveBranchFromAssetSet branch does not exist: ` +
              t,
          ),
          2
        );
      try {
        (r.Body().set_appid(e),
          r.Body().set_assetset_id(t),
          r.Body().set_branch(n));
        let s = await _d.RemoveBranchFromAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          r,
        );
        if (s.GetEResult() == 1)
          return (
            a.branches.splice(o, 1),
            this.GetAssetSetChangeCallback(a.assetset_id).Dispatch({ ...a }),
            1
          );
        i = N(s);
      } catch (e) {
        i = N(e);
      }
      return (
        console.error(
          `CAssetSetStore.RemoveBranchFromAssetSet failed: on item ` +
            e +
            ` with ` +
            i?.strErrorMsg,
          i,
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
      let e = d(`asset_sets`, `application_config`);
      (this.ValidateStoreDefault(e) &&
        e.forEach((e) => this.m_mapAssetSets.set(e.assetset_id, e)),
        (this.m_SteamInterface = en(new $t(ie.WEBAPI_BASE_URL))));
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].assetset_id == `string` && typeof t[0].appid == `number`
        : !1;
    }
  };
(e([T], Q.prototype, `CreateAssetSet`, null),
  e([T], Q.prototype, `UpdateAssetSet`, null),
  e([T], Q.prototype, `DeleteAssetSet`, null),
  e([T], Q.prototype, `AddBranchToAssetSet`, null),
  e([T], Q.prototype, `RemoveBranchFromAssetSet`, null));
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
  return Q.Get().GetAssetSetByID(e, t)?.name || A(`#Unknown`);
}
function Cd(e) {
  let [t, n] = (0, R.useState)(() => Q.Get().GetAllAssetSets(e));
  return (de(Q.Get().GetAppAssetSetListChangeCallback(e), n), t);
}
function wd(e) {
  let [t, n] = (0, R.useState)(() => Q.Get().GetAllNonSpecialAssetSets(e));
  return (
    de(Q.Get().GetAppAssetSetListChangeCallback(e), (e) =>
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
  let [t, n] = (0, R.useState)(null),
    [r, i] = (0, R.useState)(null),
    a = (0, R.useCallback)((e) => {
      Q.Get()
        .GetAllAssetSets(e)
        .forEach((e) => {
          e.name === `steam_default_assetset`
            ? n(e.assetset_id)
            : e.name === `steam_default_hidden` && i(e.assetset_id);
        });
    }, []);
  return (
    (0, R.useEffect)(() => a(e), [e, a]),
    de(Q.Get().GetAppAssetSetListChangeCallback(e), (t) => a(e)),
    { publicAssetSetID: t, hiddenAssetSetID: r }
  );
}
function Ed(e, t) {
  let [n, r] = (0, R.useState)(() => Q.Get().GetAssetSetByID(e, t));
  return (de(Q.Get().GetAssetSetChangeCallback(t), r), n);
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
  return (0, W.jsxs)(Ne, {
    onClick: (e) => kd(r, i, t),
    disabled: !t,
    children: [
      `↓`,
      ` `,
      A(`#TimelineMarkers_Hidden_download`),
      `\xA0`,
      (0, W.jsx)(k, {
        toolTipContent: A(`#TimelineMarkers_Hidden_download_ttip`),
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
      let o = new FormData();
      (o.append(`sessionid`, g()),
        o.append(`appid`, `` + e),
        o.append(`asset_set_id`, t),
        o.append(`markerid`, n),
        o.append(`imagedata`, r),
        o.append(`imagetype`, `` + i));
      let s = `${ie.PARTNER_BASE_URL}timelinemarkers/ajaxcreatemarker`,
        c = await On.default.post(s, o);
      if (c?.status == 200 && c.data.success == 1) {
        let n = c.data.new_marker;
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
      a = N(c);
    } catch (e) {
      a = N(e);
    }
    return (
      console.error(
        `CTimelineMarkerEditorStore create failed with ` + a.strErrorMsg,
        a,
      ),
      2
    );
  }
  async UpdateTimelineMarkerDefinition(e, t, n, r, i, a) {
    let o = null,
      s = this.m_mapTimelineMarker.get(n);
    if (!s)
      return (
        console.error(
          `CTimelineMarkerEditorStore attempting update, timeline markerid does not exist: ` +
            n,
        ),
        42
      );
    te(
      e == s.appid,
      `Unexpected in UpdateTimelineMarkerDefinition appid don't match`,
    );
    let c = s.markerid,
      l = s.asset_set_id;
    try {
      let s = new FormData();
      (s.append(`sessionid`, g()),
        s.append(`appid`, `` + e),
        s.append(`asset_set_id`, t),
        s.append(`markerid`, r),
        s.append(`imagedata`, i),
        s.append(`imagetype`, `` + a),
        s.append(`timeline_marker_id`, n));
      let u = `${ie.PARTNER_BASE_URL}timelinemarkers/ajaxupdatemarker`,
        d = await On.default.post(u, s);
      if (d?.status == 200 && d.data.success == 1) {
        let n = d.data.updated_marker;
        this.m_mapTimelineMarker.set(n.timeline_marker_id, n);
        let r = this.GetAppMarkers(l, c);
        if (
          (this.GetMarkerChange(l, c).Dispatch(
            r.oPublishedMarker,
            r.oUnpublishedMarker,
          ),
          c != n.markerid)
        ) {
          let e = this.GetAppMarkers(t, n.markerid);
          this.GetMarkerChange(t, n.markerid).Dispatch(
            e.oPublishedMarker,
            e.oUnpublishedMarker,
          );
        }
        return (
          this.GetAppMarkerListChange(e).Dispatch([
            ...this.GetAllMarkersForApp(e),
          ]),
          Sd(e, t) == `steam_default_assetset` &&
            this.EnsureRequirePublishingIsVisible(),
          1
        );
      }
      o = N(d);
    } catch (e) {
      o = N(e);
    }
    return (
      console.error(
        `CTimelineMarkerEditorStore update failed with ` + o.strErrorMsg,
        o,
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
      let o = new FormData();
      (o.append(`sessionid`, g()),
        o.append(`appid`, `` + e),
        o.append(`asset_set_id`, t),
        o.append(`timeline_marker_id`, n));
      let s = `${ie.PARTNER_BASE_URL}timelinemarkers/ajaxdeletemarker`,
        c = await On.default.post(s, o);
      if (c?.status == 200 && c.data.success == 1) {
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
      r = N(c);
    } catch (e) {
      r = N(e);
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
      (i.append(`sessionid`, g()),
        i.append(`appid`, `` + e),
        i.append(`asset_set_id`, t),
        i.append(`timeline_marker_id`, n.join(`,`)));
      let a = `${ie.PARTNER_BASE_URL}timelinemarkers/ajaxpublishmarkers`,
        o = await On.default.post(a, i);
      if (o?.status == 200 && o.data.success == 1) {
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
      r = N(o);
    } catch (e) {
      r = N(e);
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
    let e = d(`timeline_markers`, `application_config`);
    (this.ValidateStoreDefault(e) &&
      e.forEach((e) => this.m_mapTimelineMarker.set(e.timeline_marker_id, e)),
      An(Ud));
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].asset_set_id == `string` && typeof t[0].appid == `number`
      : !1;
  }
};
(e([T], $.prototype, `CreateTimelineMarkerDefinition`, null),
  e([T], $.prototype, `UpdateTimelineMarkerDefinition`, null),
  e([T], $.prototype, `DeleteTimelineMarkerDefinition`, null),
  e([T], $.prototype, `PublishTimelineMarkerDefinitions`, null));
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
  let [t, n] = (0, R.useState)(() => $.Get().GetAllMarkersForApp(e));
  return (de($.Get().GetAppMarkerListChange(e), n), t);
}
function Vd(e, t) {
  let [n, r] = (0, R.useState)(() => $.Get().GetMarkerIDSetForAssetSetID(t));
  return (
    (0, R.useEffect)(() => {
      t && e && r($.Get().GetMarkerIDSetForAssetSetID(t));
    }, [e, t]),
    de($.Get().GetAppMarkerListChange(e), () =>
      r($.Get().GetMarkerIDSetForAssetSetID(t)),
    ),
    n
  );
}
function Hd(e, t) {
  let [n, r] = (0, R.useState)(null),
    [i, a] = (0, R.useState)(null);
  return (
    (0, R.useEffect)(() => {
      let n = $.Get().GetAppMarkers(e, t);
      n && (r(n.oPublishedMarker), a(n.oUnpublishedMarker));
    }, [e, t]),
    de($.Get().GetMarkerChange(e, t), (e, t) => {
      (r(e), a(t));
    }),
    { oPublishedMarker: n, oUnpublishedMarker: i }
  );
}
function Ud(e, t) {
  let n = $.Get().GetGameMarkerSVGById(e, t);
  if (!n) return null;
  let r = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${n}</svg>`;
  return new DOMParser().parseFromString(r, `image/svg+xml`).documentElement
    .firstChild;
}
var Wd = `bW6NnJgeiWk-`,
  Gd = `V3BT-3QXPuE-`,
  Kd = `GqWICinvGkw-`,
  qd = `YKpyJp8GNzs-`,
  Jd = `wlQ9Q4HK0ns-`,
  Yd = `kWUDsdjYMVg-`,
  Xd = `_1UUIWhHwrOM-`,
  Zd = `_3moKm7wLoRg-`,
  Qd = `I-tbvNM8uSM-`,
  $d = `-hlxMroQhOg-`,
  ef = `oHIpesYvxMA-`,
  tf = `_6Vpi-tE-oEU-`,
  nf = `pchh-7xTLCE-`,
  rf = `_5qz-ObFfK-A-`,
  af = `sGz9odiNvg4-`,
  of = `LiXShxrPrcE-`,
  sf = `M8jwQ84cEEk-`,
  cf = `fKuSgu0G7V8-`,
  lf = `KftftOl0N4A-`,
  uf = `XzyRD4VeIU8-`,
  df = `_0N2azgGGH-w-`,
  ff = `V6-CWPNS-vM-`;
function pf(e) {
  let { imageBase64OrUntrustedSVG: t, imageType: n } = e;
  if (!t) return null;
  let r;
  return (
    n == 1
      ? (r = `data:image/svg+xml,${encodeURIComponent(t)}`)
      : n == 2 && (r = t),
    (0, W.jsx)(`div`, {
      className: S(Xd),
      children: (0, W.jsxs)(`div`, {
        className: rf,
        children: [
          (0, W.jsx)(`img`, {
            className: Qd,
            src: r,
            alt: `SVG Large Preview`,
          }),
          (0, W.jsx)(`img`, {
            className: $d,
            src: r,
            alt: `SVG Medium Preview`,
          }),
          (0, W.jsx)(`img`, {
            className: ef,
            src: r,
            alt: `SVG Small Preview`,
          }),
        ],
      }),
    })
  );
}
function mf(e) {
  let { svgXmlUntrusted: t } = e;
  if (!t) return null;
  let n = `data:image/svg+xml,${encodeURIComponent(t)}`;
  return (0, W.jsx)(`img`, { className: ef, src: n, alt: `SVG Small Preview` });
}
function hf(e) {
  let { appid: t, assetSetID: n, markerID: r } = e,
    { oPublishedMarker: i, oUnpublishedMarker: a } = Hd(n, r),
    { publicAssetSetID: o, hiddenAssetSetID: s } = Td(t),
    [c, l] = (0, R.useState)(!1);
  if (!i && !a) return null;
  let u = a || i,
    d = !!(a && a.asset_set_id != s),
    f = i?.asset_set_id === o;
  return (0, W.jsxs)(`div`, {
    className: of,
    onMouseEnter: () => l(!0),
    onMouseLeave: () => l(!1),
    children: [
      d &&
        (0, W.jsx)(`span`, {
          className: `qnCfcbOAK-c-`,
          children: A(`#TimelineMarker_state_pending`),
        }),
      (0, W.jsx)(pf, {
        imageBase64OrUntrustedSVG: u.image,
        imageType: u.image_type,
      }),
      (0, W.jsx)(`div`, { className: af, children: u.markerid }),
      c &&
        (0, W.jsx)(Ne, {
          className: `F2avAdiaobg-`,
          onClick: (e) =>
            Re(
              (0, W.jsx)(Af, {
                appid: t,
                bDisallowMarkerIDEdit: f,
                oTimelineMarkerDef: u,
              }),
              D(e),
            ),
          children: A(`#Button_Edit`),
        }),
    ],
  });
}
function gf(e) {
  let { appid: t, assetSetID: n, strMessageOnEmpty: r, bDraggable: i } = e,
    a = Vd(t, n);
  return !a || a.size == 0
    ? (0, W.jsx)(`div`, { className: ff, children: r })
    : (0, W.jsx)(`div`, {
        className: tf,
        children: (0, W.jsx)(vf, {
          assetSetID: n,
          children: Array.from(a).map((e, r) =>
            (0, W.jsx)(
              _f,
              {
                id: `assetsetid_${n}_markerid_${e}`,
                index: r,
                bDraggable: i,
                children: (0, W.jsx)(hf, {
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
function _f(e) {
  let { id: t, children: n, index: r, bDraggable: i } = e;
  return (0, W.jsx)(fn, {
    draggableId: t,
    index: r,
    isDragDisabled: !i,
    children: (e) =>
      (0, W.jsx)(`div`, {
        ref: e.innerRef,
        ...e.draggableProps,
        ...e.dragHandleProps,
        className: nf,
        style: { ...e.draggableProps.style },
        children: n,
      }),
  });
}
function vf(e) {
  let { assetSetID: t, children: n } = e;
  return (0, W.jsx)(pn, {
    droppableId: `undroppable` + t,
    direction: `horizontal`,
    children: (e) =>
      (0, W.jsxs)(`div`, {
        ref: e.innerRef,
        ...e.droppableProps,
        style: { display: `flex` },
        children: [n, e.placeholder],
      }),
  });
}
function yf(e) {
  let { assetSetID: t, appid: n, strMessage: r } = e;
  return (0, W.jsx)(pn, {
    droppableId: `droptarget_assetsetid_${t}_appid_${n}`,
    children: (e) =>
      (0, W.jsxs)(`div`, {
        ...e.droppableProps,
        ref: e.innerRef,
        className: sf,
        children: [(0, W.jsx)(`span`, { children: r }), e.placeholder],
      }),
  });
}
function bf(e) {
  let { appid: t, markerID: n } = e,
    r = xf(t);
  return (
    (0, R.useEffect)(() => {
      let e = r.GetTimelines()[0].metadata.timeline_id;
      (r.RemoveTimelineEvent(e, `5`),
        r.RemoveTimelineEvent(e, `12`),
        r.RemoveTimelineEvent(e, `16`),
        r.AddEventToTimeline(e, 12500, n, `5`, 9, n, n, 0),
        r.AddEventToTimeline(e, 33500, n, `12`, 2, n, n, 0),
        r.AddEventToTimeline(e, 48500, n, `16`, 9, n, n, 0));
    }, [n, r]),
    (0, W.jsx)(pa, {
      loader: r,
      fnGetManifest: () => ``,
      mode: sa.Partner,
      children: (0, W.jsx)(qu, { loader: r, disableZoom: !0 }),
    })
  );
}
function xf(e) {
  let [t] = (0, R.useState)(() => new Qi());
  return (
    (0, R.useEffect)(() => {
      let n = Qu(),
        r = { ...$u, entries: $u.entries.map((e) => e) };
      (t.LoadTimelinesForTestClip(0, void 0, `${e}`, n),
        t.SetTimelineData(n[0].timeline_id, r));
    }, [e, t]),
    t
  );
}
var Sf = 31;
function Cf(e) {
  return /^[a-z0-9_-]{1,31}$/.test(e);
}
function wf(e, t, n, r) {
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
async function Tf(e) {
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
                  t(A(`#TimelineMarkers_Error_PNGSize`, 24)))
                : r.width > 128
                  ? wf(e, 128, 128, (e) => {
                      t({
                        image: e,
                        image_type: 2,
                        strFilenameWithoutExtension: Ef(i).substring(0, Sf),
                      });
                    })
                  : t({
                      image: n.result,
                      image_type: 2,
                      strFilenameWithoutExtension: Ef(i).substring(0, Sf),
                    })
              : (console.error(`Image wrong width, must be square`),
                t(A(`#TimelineMarkers_Error_PNGDimensions`)));
          }),
            (r.src = n.result));
        } else
          r === `image/svg+xml` || i.endsWith(`.svg`)
            ? t({
                image: n.result,
                image_type: 1,
                strFilenameWithoutExtension: Ef(i).substring(0, Sf),
              })
            : (console.error(`unknown content types: ` + r),
              t(A(`#TimelineMarkers_Error_UnknownFileType`, r)));
      }),
        e.type === `image/svg+xml` || e.name.endsWith(`.svg`)
          ? n.readAsText(e)
          : n.readAsDataURL(e));
    } else return t(A(`#TimelineMarkers_Error_NotFound`));
  });
}
function Ef(e) {
  let t = e.lastIndexOf(`.`);
  return t !== -1 && t > e.lastIndexOf(`/`) ? e.slice(0, t) : e;
}
function Df(e) {
  let { appid: t, closeModal: n } = e,
    [r, i] = (0, R.useState)(() => [
      { markerid: ``, image: null, image_type: null, timeline_marker_id: null },
    ]),
    [a, o] = (0, R.useState)(`hidden`),
    { publicAssetSetID: s, hiddenAssetSetID: c } = Td(t),
    { fnCreateTimelineMarkerDefinition: l } = Nd(),
    u = (0, R.useRef)(void 0),
    [d, f] = (0, R.useState)(null),
    p = tn(),
    m = (0, R.useCallback)(
      async (e) => {
        let t = [{ ...r[0] }],
          n = e.length;
        for (let i = 0; i < e.length; ++i) {
          let a = e[i],
            o = await Tf(a);
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
              let e = o.strFilenameWithoutExtension.substring(0, Sf);
              ((t[0].markerid = e),
                (t[0].timeline_marker_id = `temp_${i}_${e}`));
            }
          } else {
            let e = o.strFilenameWithoutExtension.substring(0, Sf);
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
    h = (0, R.useCallback)(
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
    ? (0, W.jsx)(nn, {
        state: p,
        strDialogTitle: A(`#TimelineMarkers_Dialog_Create`),
        closeModal: n,
      })
    : (0, W.jsx)(Be, {
        strTitle: A(`#TimelineMarkers_Dialog_Create`),
        bOKDisabled: r.some(
          (e) => !Cf(e.markerid) || !e.image || e.image?.length < 10,
        ),
        bDisableBackgroundDismiss: !0,
        onCancel: n,
        strOKButtonText: A(`#Button_Create`),
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
              p.fnSetStrError(A(`#OptIn_Appeals_Dialog_Failed`)));
            return;
          }
          let n = !0;
          for (let i = 0; i < r.length; ++i) {
            let a = r[i];
            if ((await l(t, e, a.markerid, a.image, a.image_type)) != 1) {
              (p.fnSetError(!0),
                p.fnSetStrError(A(`#OptIn_Appeals_Dialog_Failed`)),
                (n = !1));
              break;
            }
          }
          n &&
            (p.fnSetSuccess(!0),
            p.fnSetStrSuccess(A(`#TimelineMarkers_Dialog_CreateSuccess`)));
        },
        children: (0, W.jsxs)(`div`, {
          className: Wd,
          children: [
            (0, W.jsxs)(`div`, {
              className: Kd,
              children: [
                (0, W.jsx)(`div`, {
                  children: A(`#TimelineMarkers_Dialog_Create_Description`),
                }),
                (0, W.jsxs)(`ul`, {
                  children: [
                    (0, W.jsxs)(`li`, {
                      children: [
                        (0, W.jsx)(`strong`, {
                          children: A(`#TimelineMarkers_Dialog_Name_Title`),
                        }),
                        ` - `,
                        A(`#TimelineMarkers_Dialog_Name_ttip`, 128),
                      ],
                    }),
                    (0, W.jsxs)(`li`, {
                      children: [
                        (0, W.jsx)(`strong`, {
                          children: A(`#TimelineMarkers_Dialog_SVG`),
                        }),
                        ` - `,
                        A(`#TimelineMarkers_Dialog_SVG_create_desc`),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            !!d &&
              (0, W.jsx)(`div`, { className: `_9rhLFCwqjPg-`, children: d }),
            (0, W.jsx)(`br`, {}),
            (0, W.jsx)(`br`, {}),
            (0, W.jsx)(`h3`, {
              children: A(`#TimelineMarkers_Dialog_Title_UploadIcons`),
            }),
            (0, W.jsx)(`input`, {
              type: `file`,
              accept: `.svg,.png`,
              style: { display: `none` },
              multiple: !0,
              name: `fileupload`,
              ref: u,
              onChange: h,
            }),
            (0, W.jsxs)(Ne, {
              onClick: () => u.current.click(),
              children: [
                (0, W.jsx)(Oe, {}),
                ` `,
                A(`#TimelineMarkers_Dialog_SVG_mutli_button`),
              ],
            }),
            (0, W.jsx)(`div`, {
              className: Jd,
              children: (0, W.jsx)(Of, { fnHandleFiles: m }),
            }),
            r?.length > 0 &&
              r[0].image?.length > 0 &&
              (0, W.jsx)(`h3`, {
                children: A(`#TimelineMarkers_Dialog_IconCreateTitle`),
              }),
            r.map((e, n) =>
              (0, W.jsx)(
                kf,
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
            (0, W.jsx)(`br`, {}),
            (0, W.jsx)(`br`, {}),
            (0, W.jsx)(Mf, {
              createVisibilityState: a,
              setCreateVisibilityState: o,
            }),
          ],
        }),
      });
}
function Of(e) {
  let { fnHandleFiles: t } = e,
    [n, r] = (0, R.useState)(!1);
  return (0, W.jsx)(`div`, {
    className: S(Zd, n && `xb2yMHJAW80-`, sf),
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
    children: (0, W.jsx)(`p`, {
      children: A(`#TimelineMarkers_Dialog_SVG_draganddrop`),
    }),
  });
}
function kf(e) {
  let { marker: t, appid: n, setMarkerID: r } = e;
  return (
    (0, R.useEffect)(
      () => (
        Rd(t.timeline_marker_id, t),
        () => {
          zd(t.timeline_marker_id);
        }
      ),
      [t],
    ),
    t?.image
      ? (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(jf, {
              markerID: t.markerid,
              strErrorMessage: null,
              imageContent: t.image,
              imageType: t.image_type,
            }),
            (0, W.jsxs)(`div`, {
              className: Yd,
              children: [
                (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(He, {
                      children: A(`#TimelineMarkers_Dialog_Icon_Title`),
                    }),
                    (0, W.jsx)(pf, {
                      imageBase64OrUntrustedSVG: t.image,
                      imageType: t.image_type,
                    }),
                  ],
                }),
                (0, W.jsx)(Ke, {
                  type: `text`,
                  value: t.markerid,
                  maxChars: 128,
                  label: A(`#TimelineMarkers_Dialog_Name_Title`),
                  placeholder: A(`#TimelineMarkers_Dialog_Name_placeholder`),
                  onChange: (e) => r(e.currentTarget.value || ``),
                }),
              ],
            }),
            (0, W.jsx)(He, {
              children: A(`#TimelineMarkers_Dialog_Icon_TimelinePreview`),
            }),
            (0, W.jsx)(bf, { appid: n, markerID: t.timeline_marker_id }),
          ],
        })
      : null
  );
}
function Af(e) {
  let {
      appid: t,
      closeModal: n,
      bDisallowMarkerIDEdit: r,
      oTimelineMarkerDef: i,
    } = e,
    [a, o] = (0, R.useState)(i.markerid),
    {
      fnUpdateTimelineMarkerDefinition: s,
      fnDeleteTimelineMarkerDefinition: c,
    } = Nd(),
    [l, u] = (0, R.useState)(i.image),
    [d, f] = (0, R.useState)(i.image_type),
    [p, m] = (0, R.useState)(0),
    h = (0, R.useRef)(void 0),
    [g, _] = (0, R.useState)(null),
    v = A(`#TimelineMarkers_Dialog_Edit`, a);
  (0, R.useEffect)(() => {
    if (l && d && p && a) {
      let e = `temp_${p}_${i.timeline_marker_id}`;
      Rd(e, { image: l, image_type: d, timeline_marker_id: e, markerid: a });
    }
    return () => {
      p && zd(`temp_${p}_${i.timeline_marker_id}`);
    };
  }, [l, d, a, p, i.timeline_marker_id]);
  let ee = (0, R.useCallback)(async (e) => {
      _(null);
      let t = e.currentTarget?.files?.[0],
        n = await Tf(t);
      typeof n == `string`
        ? _(n)
        : (u(n.image), f(n.image_type), m((e) => e + 1));
    }, []),
    y = tn();
  if (y.bLoading)
    return (0, W.jsx)(nn, { state: y, strDialogTitle: v, closeModal: n });
  let b, x;
  if (!r || i.unpublished_changes) {
    let e = null;
    (Ld(i.asset_set_id, i.markerid).oPublishedMarker && i.unpublished_changes
      ? ((b = A(`#Button_Revert`)),
        (e = A(`#TimelineMarkers_Dialog_RevertSuccess`)))
      : ((e = A(`#TimelineMarkers_Dialog_DeleteSuccess`)),
        (b = A(`#Button_Delete`))),
      (x = async () => {
        Re(
          (0, W.jsx)(Be, {
            strTitle: b,
            strDescription: A(`#Dialog_AreYouSure`),
            onOK: async () => {
              (y.fnSetLoading(!0),
                (await c(t, i.asset_set_id, i.timeline_marker_id)) == 1
                  ? (y.fnSetSuccess(!0), y.fnSetStrSuccess(e))
                  : (y.fnSetError(!0),
                    y.fnSetStrError(A(`#OptIn_Appeals_Dialog_Failed`))));
            },
          }),
          window,
        );
      }));
  }
  return (0, W.jsx)(Be, {
    strTitle: v,
    bOKDisabled: !Cf(a) || l?.length < 10,
    bDisableBackgroundDismiss: !0,
    onCancel: n,
    onMiddleButton: x,
    strMiddleButtonText: b,
    strOKButtonText: A(`#Button_Update`),
    onOK: async () => {
      (y.fnSetLoading(!0),
        (await s(t, i.asset_set_id, i.timeline_marker_id, a, l, d)) == 1
          ? (y.fnSetSuccess(!0),
            y.fnSetStrSuccess(A(`#TimelineMarkers_Dialog_UpdateSuccess`)))
          : (y.fnSetError(!0),
            y.fnSetStrError(A(`#OptIn_Appeals_Dialog_Failed`))));
    },
    children: (0, W.jsxs)(`div`, {
      className: Wd,
      children: [
        (0, W.jsx)(jf, {
          markerID: a,
          strErrorMessage: g,
          imageContent: l,
          imageType: d,
        }),
        (0, W.jsx)(`h3`, { children: A(`#TimelineMarkers_Dialog_Name_Title`) }),
        r
          ? (0, W.jsx)(`p`, {
              children: A(`#TimelineMarkers_Dialog_Name_Disabled`),
            })
          : (0, W.jsx)(`p`, {
              children: A(`#TimelineMarkers_Dialog_Name`, 128),
            }),
        (0, W.jsx)(Ke, {
          type: `text`,
          value: a,
          disabled: r,
          maxChars: 128,
          className: Gd,
          placeholder: A(`#TimelineMarkers_Dialog_Name_placeholder`),
          tooltip: A(`#TimelineMarkers_Dialog_Name_ttip`),
          onChange: (e) => o(e.currentTarget.value || ``),
        }),
        (0, W.jsx)(`br`, {}),
        (0, W.jsx)(`br`, {}),
        (0, W.jsx)(`h3`, { children: A(`#TimelineMarkers_Dialog_SVG`) }),
        (0, W.jsx)(`p`, { children: A(`#TimelineMarkers_Dialog_SVG_desc`) }),
        (0, W.jsxs)(`div`, {
          className: Yd,
          children: [
            (0, W.jsx)(pf, { imageBase64OrUntrustedSVG: l, imageType: d }),
            (0, W.jsx)(`input`, {
              type: `file`,
              accept: `.svg,.png`,
              style: { display: `none` },
              multiple: !1,
              name: `fileupload`,
              ref: h,
              onChange: ee,
            }),
            (0, W.jsxs)(Ne, {
              onClick: () => h.current.click(),
              children: [
                (0, W.jsx)(Oe, {}),
                ` `,
                A(`#TimelineMarkers_Dialog_SVG_button`),
              ],
            }),
          ],
        }),
        (0, W.jsx)(bf, {
          appid: t,
          markerID: p
            ? `temp_${p}_${i.timeline_marker_id}`
            : i.timeline_marker_id,
        }),
      ],
    }),
  });
}
function jf(e) {
  let { markerID: t, strErrorMessage: n, imageContent: r, imageType: i } = e,
    a = Cf(t),
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
  return (0, W.jsxs)(W.Fragment, {
    children: [
      !a &&
        t.length > 0 &&
        (0, W.jsx)(`div`, {
          className: `_9rhLFCwqjPg-`,
          children: A(`#TimelineMarkers_Dialog_Name_error`),
        }),
      !!o &&
        (0, W.jsx)(`div`, {
          className: `_9rhLFCwqjPg-`,
          children: A(`#TimelineMarkers_Dialog_Name_error2`),
        }),
      !!s &&
        (0, W.jsx)(`div`, {
          className: `EHcr1piLxMU-`,
          children: A(`#TimelineMarkers_Dialog_SVG_warning_dimensions`, s),
        }),
    ],
  });
}
function Mf(e) {
  let { createVisibilityState: t, setCreateVisibilityState: n } = e,
    r = R.useId();
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(`h3`, {
        id: r,
        children: A(`#TimelineMarkers_Dialog_Visibility`),
      }),
      (0, W.jsx)(ke, {
        labelId: r,
        value: t,
        onChange: (e) => {
          n(e);
        },
        children: (0, W.jsxs)(`div`, {
          className: qd,
          children: [
            (0, W.jsx)(De, {
              value: `public`,
              children: Le(
                `#TimelineMarkers_Dialog_Public`,
                (0, W.jsx)(`b`, {}),
              ),
            }),
            (0, W.jsx)(De, {
              value: `hidden`,
              children: Le(
                `#TimelineMarkers_Dialog_Hidden`,
                (0, W.jsx)(`b`, {}),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
var Nf = `_4yH1m6ufjJg-`,
  Pf = `LZTIpM8pYh0-`,
  Ff = `Dspp-lyTkqE-`,
  If = `a0uMD8KPGBU-`,
  Lf = `kKRtxlasxms-`,
  Rf = `ef8y-ZEir4c-`,
  zf = `z1LwdkaT2-o-`,
  Bf = `ziYUfdrnr6c-`,
  Vf = `iGk4KTUY2A8-`;
function Hf(e) {
  let { appid: t } = e,
    { publicAssetSetID: n } = Td(t),
    r = Bd(t);
  return (0, W.jsx)(`div`, {
    children: (0, W.jsxs)(`div`, {
      className: Lf,
      children: [
        (0, W.jsxs)(`div`, {
          className: Rf,
          children: [
            (0, W.jsx)(`div`, {
              className: S(Xe),
              children: A(`#TimelineMarkers_Public_title`),
            }),
            (0, W.jsx)(`div`, { children: A(`#TimelineMarkers_Public_desc1`) }),
            (0, W.jsx)(`br`, {}),
            (0, W.jsx)(`div`, { children: A(`#TimelineMarkers_Public_desc2`) }),
          ],
        }),
        (0, W.jsx)(`div`, {
          className: zf,
          children: (0, W.jsxs)(`div`, {
            className: Nf,
            children: [
              n
                ? (0, W.jsx)(gf, {
                    assetSetID: n,
                    appid: t,
                    bDraggable: !1,
                    strMessageOnEmpty: A(`#TimelineMarkers_Public_none`),
                  })
                : (0, W.jsx)(`div`, {
                    children: A(`#TimelineMarkers_Public_none`),
                  }),
              r?.length > 0 &&
                (0, W.jsx)(yf, {
                  assetSetID: n || `publicmissing`,
                  appid: t,
                  strMessage: A(`#TimelineMarkers_drag_target_public`),
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
var Uf = /^assetsetid_(.+)_markerid_(.+)$/,
  Wf = /^droptarget_assetsetid_(.+)_appid_(.+)$/;
async function Gf(e, t) {
  if (!e.destination) return;
  let n = e.draggableId.match(Uf),
    r = e.destination.droppableId.match(Wf);
  if (!(n?.length > 2 && r?.length > 2)) return;
  let i = n[1],
    a = n[2],
    o = r[1];
  Kf(i, a, o, Number.parseInt(r[2]));
}
async function Kf(e, t, n, r) {
  if (e == n) return n;
  if (n == `publicmissing`) {
    let e = await Dd(r, !0);
    if (e.eResult != 1) {
      let t = N({ success: e.eResult });
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
var qf = `I9Y7hMjQzEw-`,
  Jf = `NNOIcqpGB9A-`,
  Yf = `V02fLYzUulQ-`,
  Xf = `a0Z5rLSQVhQ-`;
function Zf(e) {
  let { appid: t } = e,
    n = Bd(t),
    { hiddenAssetSetID: r } = Td(t),
    i = (0, R.useMemo)(
      () =>
        n?.filter((e) => e.unpublished_changes && e.asset_set_id != r).length ||
        0,
      [n, r],
    );
  return i == 0
    ? null
    : (0, W.jsxs)(`div`, {
        className: Yf,
        children: [
          (0, W.jsx)(`div`, {
            className: Xf,
            children: ze(`#TimelineMarkers_Publishing_title`, i),
          }),
          (0, W.jsx)(`div`, {
            children: A(`#TimelineMarkers_Publishing_desc`),
          }),
          (0, W.jsx)(Ie, {
            onClick: (e) => {
              window.location.href = `${ie.PARTNER_BASE_URL}apps/publishing/${t}`;
            },
            children: A(`#TimelineMarkers_Publishing_action`),
          }),
        ],
      });
}
function Qf(e) {
  let { appid: t, assetSetID: n, closeModal: r } = e,
    i = Ed(t, n),
    { fnCreateAssetSet: a, fnUpdateAssetSet: o } = xd(),
    [s, c] = (0, R.useState)(i.name),
    [l, u] = (0, R.useState)(i.desc),
    d = s.trimStart().toLowerCase().startsWith(`steam_`),
    f = s.trim().length == 0,
    p = A(n ? `#AssetSet_Dialog_Edit_Title` : `#AssetSet_Dialog_Create_Title`),
    m = tn();
  return m.bLoading
    ? (0, W.jsx)(nn, { state: m, strDialogTitle: p, closeModal: r })
    : (0, W.jsxs)(Be, {
        strTitle: p,
        strDescription: A(`#TimelineMarkers_Hidden_new_asset_set_desc`),
        strOKButtonText: A(`#Button_Save`),
        onOK: async () => {
          (m.fnSetLoading(!0), (i.name = s), (i.desc = l), (i.appid = t));
          let e = null;
          try {
            let t;
            (n ? (t = await o(i)) : ((i.branches = []), (t = await a(i))),
              t != 1 && (e = N({ sucess: t })));
          } catch (t) {
            e = N(t);
          }
          e
            ? (console.error(`Branch Set error ` + e.strErrorMsg, e),
              m.fnSetError(!0),
              m.fnSetStrError(A(`#OptIn_Appeals_Dialog_Failed`)))
            : m.fnSetSuccess(!0);
        },
        onCancel: r,
        bDisableBackgroundDismiss: !1,
        bOKDisabled: d || f || m.bLoading,
        children: [
          d &&
            (0, W.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: A(`#AssetSet_Dialog_Disallowed`),
            }),
          f &&
            (0, W.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: A(`#AssetSet_Dialog_MustHaveName`),
            }),
          (0, W.jsx)(Ke, {
            type: `text`,
            label: A(`#AssetSet_Dialog_Edit_Name`),
            value: s,
            onChange: (e) => {
              c(e?.currentTarget?.value || ``);
            },
          }),
          (0, W.jsx)(Ke, {
            type: `text`,
            label: A(`#AssetSet_Dialog_Edit_Description`),
            value: l,
            onChange: (e) => {
              u(e?.currentTarget?.value || ``);
            },
          }),
        ],
      });
}
function $f(e) {
  let { appid: t } = e,
    { hiddenAssetSetID: n } = Td(t);
  return (0, W.jsxs)(`div`, {
    className: S(void 0, zf),
    children: [
      (0, W.jsx)(`div`, {
        className: Pf,
        children: (0, W.jsxs)(`div`, {
          className: Bf,
          children: [
            (0, W.jsx)(`div`, {
              className: Vf,
              children: A(`#TimelineMarkers_Hidden_section_info`),
            }),
            (0, W.jsx)(ep, { appid: t }),
            (0, W.jsx)(Od, { appid: t, assetSetID: n }),
          ],
        }),
      }),
      (0, W.jsx)(`div`, {
        children: n
          ? (0, W.jsx)(gf, {
              appid: t,
              assetSetID: n,
              strMessageOnEmpty: A(`#TimelineMarkers_Hidden_none`),
              bDraggable: !0,
            })
          : (0, W.jsx)(`div`, {
              className: ff,
              children: A(`#TimelineMarkers_Hidden_none`),
            }),
      }),
      (0, W.jsxs)(`div`, {
        className: S(lf, uf),
        children: [
          (0, W.jsx)(`div`, {
            className: cf,
            children: (0, W.jsx)(Ue, { size: `10px` }),
          }),
          ` `,
          A(`#TimelineMarkers_drag_source_public`),
        ],
      }),
    ],
  });
}
function ep(e) {
  let { appid: t } = e,
    { hiddenAssetSetID: n } = Td(t),
    r = Vd(t, n);
  return (0, W.jsxs)(Ne, {
    disabled: !n || !r || r.size == 0,
    onClick: (e) => Re((0, W.jsx)(tp, { appid: t }), D(e)),
    children: [`↑`, ` `, A(`#TimelineMarkers_MoveAllHiddenToPublic`)],
  });
}
function tp(e) {
  let { appid: t, closeModal: n } = e,
    { hiddenAssetSetID: r, publicAssetSetID: i } = Td(t),
    a = Vd(t, r),
    o = tn();
  return o.bLoading
    ? (0, W.jsx)(nn, {
        state: o,
        strDialogTitle: A(`#TimelineMarkers_MoveAllHiddenToPublic`),
        closeModal: n,
      })
    : (0, W.jsx)(Be, {
        strTitle: A(`#TimelineMarkers_MoveAllHiddenToPublic`),
        strDescription: A(`#Dialog_AreYouSure`),
        onCancel: n,
        bOKDisabled: !a,
        onOK: async () => {
          o.fnSetLoading(!0);
          let e = Array.from(a),
            n = i;
          for (let i = 0; i < e.length; ++i) {
            let a = e[i];
            n = await Kf(r, a, n, t);
          }
          o.fnSetSuccess(!0);
        },
      });
}
function np(e) {
  let { appid: t } = e;
  return (0, W.jsxs)(`div`, {
    className: df,
    children: [
      (0, W.jsx)(`div`, {
        children: A(`#TimelineMarkers_Hidden_new_asset_set_desc`),
      }),
      (0, W.jsx)(Ne, {
        onClick: (e) => Re((0, W.jsx)(Qf, { appid: t }), D(e)),
        children: A(`#TimelineMarkers_Hidden_new_asset_set`),
      }),
    ],
  });
}
function rp(e) {
  let { oAssetSet: t } = e;
  return t.name == `steam_default_assetset`
    ? (0, W.jsx)(`span`, { children: A(`#TimelineMarkers_Public_title`) })
    : t.name == `steam_default_hidden`
      ? (0, W.jsx)(`span`, { children: A(`#TimelineMarkers_Hidden_title`) })
      : (0, W.jsx)(`span`, { children: t.name });
}
var ip = class e {
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
    let e = d(`branch_details`, `application_config`);
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
function ap() {
  return ip.Get().GetBranchDetails();
}
function op(e) {
  return ip.Get().GetBranchDetailsByName(e);
}
var sp = `_1-ANcQyJF-0-`,
  cp = `WuStn9k5fWs-`,
  lp = `nhvkFhx29Ps-`;
function up(e) {
  let { oAssetSet: t } = e;
  return (0, W.jsxs)(`div`, {
    className: cp,
    children: [
      (0, W.jsx)(`div`, {
        className: void 0,
        children: A(`#TimelineMarkers_Hidden_controls`),
      }),
      t.branches?.length > 0
        ? (0, W.jsx)(W.Fragment, {
            children: t.branches.map((e) =>
              (0, W.jsx)(
                `span`,
                { className: lp, children: (0, W.jsx)(fp, { branchName: e }) },
                e,
              ),
            ),
          })
        : (0, W.jsx)(`div`, {
            children: A(`#TimelineMarkers_Hidden_nobranches`),
          }),
      (0, W.jsx)(`br`, {}),
      (0, W.jsx)(Ne, {
        onClick: (e) => {
          Re((0, W.jsx)(dp, { oAssetSet: t }), D(e));
        },
        children: A(`#TimelineMarkers_Hidden_updatebranches`),
      }),
      (0, W.jsx)(Ne, {
        onClick: () => {},
        children: A(`#TimelineMarkers_Hidden_publishbranch`),
      }),
    ],
  });
}
function dp(e) {
  let { oAssetSet: t, closeModal: n } = e,
    r = ap(),
    [i, a] = (0, R.useState)(new Set(t.branches || [])),
    { fnAddBranchToAssetSet: o, fnRemoveBranchFromAssetSet: s } = xd(),
    c = tn();
  return c.bLoading
    ? (0, W.jsx)(nn, {
        state: c,
        strDialogTitle: A(`#TimelineMarkers_Hidden_updatebranches`),
        closeModal: n,
      })
    : (0, W.jsxs)(Be, {
        strTitle: A(`#TimelineMarkers_Hidden_updatebranches`),
        strDescription: A(`#AssetSet_Branch_Dialog_Desc`),
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
            ? c.fnSetStrSuccess(A(`#AssetSet_Branch_Dialog_nochange`))
            : c.fnSetStrSuccess(A(`#AssetSet_Branch_Dialog_updated`, n, r)),
            c.fnSetSuccess(!0));
        },
        children: [
          (0, W.jsx)(`br`, {}),
          r.map((e) =>
            (0, W.jsx)(
              Te,
              {
                label: (0, W.jsx)(fp, { branchName: e.name }),
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
function fp(e) {
  let { branchName: t } = e,
    n = op(t);
  return (0, W.jsxs)(`span`, {
    className: sp,
    children: [
      n?.password?.length > 0 &&
        (0, W.jsx)(k, {
          toolTipContent: A(`#AssetSet_Branch_Dialog_password`),
          bTopmost: !0,
          children: (0, W.jsx)(`span`, { children: `🔒 ` }),
        }),
      t,
    ],
  });
}
function pp(e) {
  let { appid: t, assetSetID: n, closeModal: r } = e,
    i = Ed(t, n),
    a = Cd(t),
    o = Bd(t),
    [s, c] = (0, R.useState)(null),
    { fnCreateTimelineMarkerDefinition: l } = Nd(),
    { hiddenAssetSetID: u } = Td(t),
    d = (0, R.useMemo)(() => {
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
            label: (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(mf, { svgXmlUntrusted: e.image }),
                e.markerid,
                ` `,
                `(`,
                (0, W.jsx)(rp, { oAssetSet: t.get(e.asset_set_id) }),
                `)`,
              ],
            }),
            data: e,
          }))
      );
    }, [i.assetset_id, a, o, u]),
    f = tn();
  return f.bLoading
    ? (0, W.jsx)(nn, {
        state: f,
        strDialogTitle: A(`#TimelineMarker_Clone_title`),
        closeModal: r,
      })
    : (0, W.jsxs)(Be, {
        strTitle: A(`#TimelineMarker_Clone_title`),
        strDescription: A(`#TimelineMarker_Clone_desc`, i.name),
        onCancel: r,
        bOKDisabled: !s,
        onOK: async () => {
          (f.fnSetLoading(!0),
            (await l(t, n, s.markerid, s.image, s.image_type)) == 1
              ? (f.fnSetStrSuccess(A(`#TimelineMarker_Clone_success`)),
                f.fnSetSuccess(!0))
              : f.fnSetError(!0));
        },
        children: [
          (0, W.jsx)(`br`, {}),
          (0, W.jsx)(`br`, {}),
          (0, W.jsx)(je, {
            rgOptions: d,
            selectedOption: s,
            onChange: (e) => c(e.data),
          }),
        ],
      });
}
function mp(e) {
  let { appid: t } = e,
    n = wd(t),
    [r] = Ye(`branchset`, !1);
  return (0, W.jsxs)(`div`, {
    className: If,
    children: [
      (0, W.jsxs)(`div`, {
        className: Lf,
        children: [
          (0, W.jsxs)(`div`, {
            className: Rf,
            children: [
              (0, W.jsx)(`div`, {
                className: Xe,
                children: A(`#TimelineMarkers_Hidden_title`),
              }),
              (0, W.jsx)(`div`, {
                children: A(`#TimelineMarkers_Hidden_desc2`),
              }),
            ],
          }),
          (0, W.jsx)($f, { appid: t }),
        ],
      }),
      r &&
        (0, W.jsxs)(`div`, {
          className: `kKRtxlasxms-`,
          children: [
            (0, W.jsxs)(`div`, {
              className: `ef8y-ZEir4c-`,
              children: [
                (0, W.jsx)(`div`, {
                  className: `fk3H7RK1Wg8-`,
                  children: A(`#TimelineMarkers_Hidden_branchsets_title`),
                }),
                (0, W.jsx)(np, { appid: t }),
              ],
            }),
            (0, W.jsx)(`div`, {
              className: `SWJQfBkJ08E-`,
              children: n?.map((e) =>
                (0, W.jsx)(
                  hp,
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
function hp(e) {
  let { appid: t, assetSetID: n } = e,
    r = Ed(t, n);
  return (0, W.jsxs)(`div`, {
    className: zf,
    children: [
      (0, W.jsxs)(`div`, {
        className: Pf,
        children: [
          (0, W.jsxs)(`div`, {
            className: Bf,
            children: [
              (0, W.jsx)(k, {
                toolTipContent: r.desc,
                children: (0, W.jsx)(`div`, {
                  className: Vf,
                  children: r.name,
                }),
              }),
              (0, W.jsx)(Od, { appid: r.appid, assetSetID: r.assetset_id }),
            ],
          }),
          (0, W.jsx)(up, { oAssetSet: r }),
        ],
      }),
      (0, W.jsxs)(`div`, {
        className: Ff,
        children: [
          (0, W.jsxs)(`div`, {
            className: Nf,
            children: [
              (0, W.jsx)(gf, {
                assetSetID: r.assetset_id,
                appid: r.appid,
                strMessageOnEmpty: ``,
                bDraggable: !0,
              }),
              (0, W.jsx)(yf, {
                assetSetID: r.assetset_id,
                appid: r.appid,
                strMessage: A(`#TimelineMarkers_drag_target`),
              }),
            ],
          }),
          (0, W.jsx)(`div`, {
            children: (0, W.jsx)(Ne, {
              onClick: (e) =>
                Re((0, W.jsx)(pp, { appid: t, assetSetID: n }), D(e)),
              children: A(`#TimelineMarker_Clone_title`),
            }),
          }),
        ],
      }),
    ],
  });
}
function gp(e) {
  let { appId: t } = e,
    n = Number.parseInt(t);
  return (0, W.jsx)(`div`, {
    className: qf,
    children: (0, W.jsxs)(dn, {
      onDragEnd: Gf,
      children: [
        (0, W.jsx)(_p, { appid: n }),
        (0, W.jsx)(Zf, { appid: n }),
        (0, W.jsx)(Hf, { appid: n }),
        (0, W.jsx)(mp, { appid: n }),
      ],
    }),
  });
}
function _p(e) {
  let { appid: t } = e;
  return (0, W.jsx)(`div`, {
    className: Jf,
    children: (0, W.jsxs)(`div`, {
      className: cn,
      children: [
        (0, W.jsxs)(`div`, {
          className: sn,
          children: [
            (0, W.jsx)(`div`, {
              className: un,
              children: A(`#TimelineMarkers_Editor_title`),
            }),
            (0, W.jsx)(`div`, {
              className: on,
              children: A(`#TimelineMarkers_Editor_desc`),
            }),
          ],
        }),
        (0, W.jsxs)(`div`, {
          className: an,
          children: [
            (0, W.jsx)(`div`, {
              className: un,
              children: (0, W.jsx)(`a`, {
                href: `${ie.PARTNER_BASE_URL}doc/features/timeline`,
                className: S(ln, Ze),
                target: `_blank`,
                children: A(`#AssetRequest_General_SeeDocs`),
              }),
            }),
            (0, W.jsxs)(`div`, {
              className: on,
              children: [
                (0, W.jsx)(Ie, {
                  onClick: (e) => Re((0, W.jsx)(Df, { appid: t }), D(e)),
                  children: A(`#TimelineMarkers_Editor_createnew`),
                }),
                (0, W.jsx)(`div`, {
                  children: A(`#TimelineMarkers_Editor_createnew_desc`),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { gp as default };
