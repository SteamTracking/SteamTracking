/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  At as n,
  Ct as r,
  Gt as i,
  Ht as a,
  I as o,
  Jt as s,
  Kt as c,
  Mt as l,
  Nt as u,
  Pt as d,
  S as f,
  Ut as p,
  Wt as m,
  Xt as h,
  Y as g,
  Yt as _,
  Z as v,
  _t as y,
  i as b,
  jt as ee,
  k as x,
  kt as te,
  nt as ne,
  on as re,
  qt as S,
  rn as ie,
  st as ae,
  vt as oe,
  w as se,
  x as ce,
  yt as C,
} from "./mobx.esm.js";
import {
  $ as le,
  Bt as ue,
  F as de,
  Ft as fe,
  H as pe,
  Kt as w,
  Lt as me,
  P as he,
  Pt as ge,
  Rt as T,
  _t as _e,
  lt as ve,
  n as ye,
  qt as be,
  s as xe,
  ut as E,
  vt as Se,
} from "./src.js";
import {
  Aa as Ce,
  Bn as D,
  Ca as we,
  Ct as Te,
  Hr as Ee,
  Ht as De,
  In as Oe,
  It as ke,
  Ka as Ae,
  Nt as je,
  Pt as Me,
  Qt as Ne,
  Ra as Pe,
  Rn as Fe,
  Vt as Ie,
  Ya as Le,
  aa as Re,
  bt as ze,
  da as Be,
  gn as Ve,
  jt as He,
  nn as Ue,
  nr as We,
  oa as O,
  p as Ge,
  pn as k,
  s as Ke,
  sa as qe,
} from "./dialogs.js";
import { w as A } from "./react-router.js";
import { t as j } from "./webuitransportdefaults.js";
import "./appinfo.js";
import "./modals.js";
import { t as Je } from "./axios.js";
import { t as Ye } from "./ajaxhooks.js";
import { t as M } from "./axiosutils.js";
import { a as Xe } from "./historyutils.js";
import { E as Ze, t as Qe } from "./partnereventshared.module.js";
import "./partnereventdialog.module.js";
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
} from "./shared_svg_gamerecordings.js";
import { n as Zt, r as Qt, t as $t } from "./dashplayer.js";
import { r as en, t as tn } from "./browserapi.js";
import { n as nn, t as rn } from "./simplesuccesserror.js";
import { t as an } from "./appinfostore.js";
import {
  M as on,
  N as sn,
  T as cn,
  f as ln,
  l as un,
  u as dn,
} from "./adminshared.module.js";
import { n as fn, r as pn, t as mn } from "./dnd.esm.js";
import {
  a as hn,
  i as gn,
  n as N,
  r as P,
  t as F,
} from "./gamerecordinglog.js";
import { n as _n } from "./tour.js";
var vn = `steam_`,
  yn = (function (e) {
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
function bn(e) {
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
function xn(e) {
  return Object.keys(e).filter((e) => !Number.isNaN(e));
}
var Sn = xn(yn).map((e) => yn[e]),
  Cn = class e {
    m_mapSteamTimelineMarkers = new Map();
    GetMarkerByID(e) {
      let t = e.toLowerCase().startsWith(`steam_`)
        ? e.slice(6).toLowerCase()
        : e.toLowerCase();
      if (this.m_mapSteamTimelineMarkers.has(t))
        return this.m_mapSteamTimelineMarkers.get(t);
      let n = parseInt(t);
      return typeof n == `number` && n >= 0 && n <= 99
        ? { func: (e) => pt({ nNumber: n }), color: 8 }
        : Dn();
    }
    GetAllUseableMarkerID() {
      return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
        (e) => vn + e,
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
      for (let n of Sn) {
        let r = `${e}_${yn[n]}`.toLowerCase();
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
        o() ? this.AddMarker(`death`, Vt, 8) : this.AddMarker(`death`, xt, 8),
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
function wn(e) {
  return Cn.Get().GetMarkerByID(e);
}
function Tn() {
  return { func: ut, color: 5 };
}
function En() {
  return { func: Ut, color: 0 };
}
function Dn() {
  return { func: ut, color: 8 };
}
function On(e) {
  return e && e.toLowerCase().startsWith(`steam_`);
}
var I = re(h(), 1),
  L = re(te(), 1),
  kn = re(Je(), 1),
  An = null;
function jn(e) {
  An
    ? console.error(`Attempt to set timeline marker hook a second time`)
    : (An = e);
}
function Mn(e, t) {
  return An
    ? An(e, t)
    : (console.error(
        `useGameMarkerFromID called in a context where the hook isn't defined.`,
      ),
      null);
}
function R() {
  return window.g_GRS;
}
function Nn() {
  if (R() != null) {
    let e = R();
    return {
      bLoading: e.BLoadingAppsWithBackgroundVideo(),
      rgApps: e.GetAppsWithBackgroundVideo(),
    };
  }
  return { bLoading: !1, rgApps: [] };
}
function Pn() {
  let [e, t] = (0, L.useState)(Nn());
  return ((0, L.useEffect)(() => se(Nn, t), []), e);
}
function Fn(e) {
  let { bLoading: t, rgApps: n } = Pn();
  return {
    bLoading: t,
    app: (0, L.useMemo)(() => n.find((t) => t.game_id === e), [n, e]),
  };
}
function In(e) {
  return (R() != null && e && R().GetClipSummariesForGame(e)) || [];
}
function Ln(e, t, n, r, i, a) {
  return R() == null ? null : R().LoadThumbnails(e, t, n, r, i, a ?? !0);
}
function Rn() {
  return R() == null ? {} : { fnSaveClip: R().SaveClip };
}
function zn() {
  return R() == null ? {} : { fnDeleteClip: R().DeleteClip };
}
function Bn(e, t, n, r) {
  return R() == null ? null : R().TakeScreenshot(e, t, n.valMS, r);
}
function Vn() {
  return R() == null
    ? null
    : {
        fnCreateUserTimelineMarkers: R().CreateUserTimelineMarkers,
        fnUpdateUserTimelineMarkers: R().UpdateUserTimelineMarkers,
        fnRemoveUserTimelineMarker: R().RemoveUserTimelineMarker,
      };
}
function Hn(e, t) {
  return A(() => {
    if (R() != null) return R().GetAchievementInfo(e, t);
  });
}
function Un(e, t, n, r, i) {
  return R().ReportClipRange(e, t, n, r, i);
}
function Wn() {
  return A(() => {
    if (R() != null) return !R().BEnoughDiskSpace();
  });
}
var Gn = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: i.readString, bw: _.writeString },
            game_id: { n: 2, br: i.readUint64String, bw: _.writeUint64String },
            date_recorded: { n: 3, br: i.readUint32, bw: _.writeUint32 },
            duration_ms: {
              n: 4,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            recordings: { n: 5, c: Kn, r: !0, q: !0 },
            phases: { n: 6, c: Jn, r: !0, q: !0 },
            significant_events: { n: 7, c: qn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata`;
    }
  },
  Kn = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: i.readString, bw: _.writeString },
            start_offset_ms: {
              n: 2,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            duration_ms: {
              n: 3,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            recording_type: { n: 4, br: i.readEnum, bw: _.writeEnum },
            delete_on_cleanup: { n: 5, br: i.readBool, bw: _.writeBool },
            video_manager_clip_id: {
              n: 6,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            video_manager_video_id: {
              n: 7,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            cdn_manifest_url: { n: 8, br: i.readString, bw: _.writeString },
            file_size: {
              n: 9,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            recording_zero_timeline_offset_ms: {
              n: 10,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata_Recording`;
    }
  },
  qn = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            rt_created: { n: 2, br: i.readUint32, bw: _.writeUint32 },
            possible_clip: { n: 3, br: i.readInt32, bw: _.writeInt32 },
            timeline_id: { n: 4, br: i.readString, bw: _.writeString },
            entry_id: { n: 5, br: i.readUint64String, bw: _.writeUint64String },
            timeline_offset_ms: {
              n: 6,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            marker_icon: { n: 8, br: i.readString, bw: _.writeString },
            marker_title: { n: 9, br: i.readString, bw: _.writeString },
            user_marker: { n: 10, br: i.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineEvent`;
    }
  },
  Jn = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phase_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [6, 7, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phase_id: { n: 4, br: i.readString, bw: _.writeString },
            duration_ms: {
              n: 5,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            tags: { n: 6, c: Yn, r: !0, q: !0 },
            contained_tags: { n: 7, c: Yn, r: !0, q: !0 },
            background_timeline_offset: {
              n: 8,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            attributes: { n: 9, c: Zn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase`;
    }
  },
  Yn = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: i.readString, bw: _.writeString },
            group: { n: 2, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase_Tag`;
    }
  },
  Xn = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: i.readString, bw: _.writeString },
            group: { n: 2, br: i.readString, bw: _.writeString },
            icon: { n: 3, br: i.readString, bw: _.writeString },
            priority: { n: 4, br: i.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineTag`;
    }
  },
  Zn = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: i.readString, bw: _.writeString },
            value: { n: 2, br: i.readString, bw: _.writeString },
            priority: { n: 3, br: i.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPhaseAttribute`;
    }
  },
  Qn = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Request`;
    }
  },
  $n = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: er, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response`;
    }
  },
  er = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            most_recent_start_time: {
              n: 2,
              br: i.readUint32,
              bw: _.writeUint32,
            },
            recording_type: { n: 3, br: i.readEnum, bw: _.writeEnum },
            video_duration_seconds: {
              n: 4,
              br: i.readDouble,
              bw: _.writeDouble,
            },
            timeline_duration_seconds: {
              n: 5,
              br: i.readDouble,
              bw: _.writeDouble,
            },
            is_active: { n: 6, br: i.readBool, bw: _.writeBool },
            file_size: {
              n: 7,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response_App`;
    }
  },
  tr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Request`;
    }
  },
  nr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timelines || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { timelines: { n: 1, c: Gn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Response`;
    }
  },
  rr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: i.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Request`;
    }
  },
  ir = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            timelines: { n: 2, c: Gn, r: !0, q: !0 },
            first_timeline_start_offset_ms: {
              n: 3,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Response`;
    }
  },
  ar = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.page || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            page: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            count: { n: 2, br: i.readUint32, bw: _.writeUint32 },
            filter_gameid: {
              n: 10,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            filter_search_string: {
              n: 11,
              br: i.readString,
              bw: _.writeString,
            },
            filter_tags: { n: 12, c: or, r: !0, q: !0 },
            filter_phase_id: { n: 13, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request`;
    }
  },
  or = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: i.readString, bw: _.writeString },
            name: { n: 2, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request_Tag`;
    }
  },
  sr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phases || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phases: { n: 1, c: cr, r: !0, q: !0 },
            total_count: { n: 2, br: i.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response`;
    }
  },
  cr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [7, 8, 10, 13, 16, 17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            date_recorded: { n: 5, br: i.readUint32, bw: _.writeUint32 },
            duration_ms: {
              n: 6,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            tags: { n: 7, c: Xn, r: !0, q: !0 },
            contained_tags: { n: 8, c: Xn, r: !0, q: !0 },
            background_recording: { n: 9, c: lr },
            clip_ids: {
              n: 10,
              r: !0,
              q: !0,
              br: i.readString,
              bw: _.writeRepeatedString,
            },
            type: { n: 11, br: i.readEnum, bw: _.writeEnum },
            start_ms: {
              n: 12,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            screenshots: {
              n: 13,
              r: !0,
              q: !0,
              br: i.readUint32,
              pbr: i.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
            active: { n: 14, br: i.readBool, bw: _.writeBool },
            phase_id: { n: 15, br: i.readString, bw: _.writeString },
            significant_events: { n: 16, c: vr, r: !0, q: !0 },
            attributes: { n: 17, c: Zn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase`;
    }
  },
  lr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: i.readString, bw: _.writeString },
            offset: { n: 2, br: i.readUint64String, bw: _.writeUint64String },
            duration_ms: {
              n: 3,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase_BackgroundRecording`;
    }
  },
  ur = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Request`;
    }
  },
  dr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: Xn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Response`;
    }
  },
  fr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Request`;
    }
  },
  pr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.enough_space || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { enough_space: { n: 1, br: i.readBool, bw: _.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Response`;
    }
  },
  mr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Request`;
    }
  },
  hr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { size: { n: 1, br: i.readDouble, bw: _.writeDouble } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Response`;
    }
  },
  gr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: i.readEnum, bw: _.writeEnum },
            timeline_id: { n: 2, br: i.readString, bw: _.writeString },
            game_id: { n: 3, br: i.readUint64String, bw: _.writeUint64String },
            start_time: { n: 4, br: i.readUint32, bw: _.writeUint32 },
            duration_ms: {
              n: 5,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineChanged_Notification`;
    }
  },
  _r = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: i.readEnum, bw: _.writeEnum },
            timeline_id: { n: 2, br: i.readString, bw: _.writeString },
            game_id: { n: 4, br: i.readUint64String, bw: _.writeUint64String },
            session_id: { n: 5, br: i.readString, bw: _.writeString },
            start_offset: {
              n: 6,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            recording_type: { n: 8, br: i.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_RecordingSessionChanged_Notification`;
    }
  },
  vr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [17, 19], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: i.readString, bw: _.writeString },
            entry_id: { n: 2, br: i.readUint64String, bw: _.writeUint64String },
            time: { n: 3, br: i.readUint64String, bw: _.writeUint64String },
            type: { n: 4, br: i.readEnum, bw: _.writeEnum },
            game_mode: { n: 5, br: i.readInt32, bw: _.writeInt32 },
            range_title: { n: 7, br: i.readString, bw: _.writeString },
            range_duration: {
              n: 8,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            range_possible_clip: { n: 9, br: i.readInt32, bw: _.writeInt32 },
            timestamp_title: { n: 10, br: i.readString, bw: _.writeString },
            marker_icon: { n: 11, br: i.readString, bw: _.writeString },
            marker_description: { n: 13, br: i.readString, bw: _.writeString },
            marker_priority: { n: 14, br: i.readInt32, bw: _.writeInt32 },
            screenshot_handle: { n: 15, br: i.readUint32, bw: _.writeUint32 },
            achievement_name: { n: 16, br: i.readString, bw: _.writeString },
            tag: { n: 17, c: Xn, r: !0, q: !0 },
            phase_id: { n: 18, br: i.readString, bw: _.writeString },
            attributes: { n: 19, c: Zn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineEntry`;
    }
  },
  yr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry: { n: 1, c: vr },
            game_id: {
              n: 2,
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryChanged_Notification`;
    }
  },
  br = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            timeline_id: { n: 2, br: i.readString, bw: _.writeString },
            entry_id: { n: 3, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryRemoved_Notification`;
    }
  },
  xr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_LowDiskSpace_Notification`;
    }
  },
  Sr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PostGameHighlightsChanged_Notification`;
    }
  },
  Cr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            phase_id: { n: 2, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToGamePhase_Notification`;
    }
  },
  wr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            entry_id: { n: 2, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToTimelineEvent_Notification`;
    }
  },
  Tr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PhaseListChanged_Notification`;
    }
  },
  Er = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: i.readString, bw: _.writeString },
            game_id: { n: 2, br: i.readUint64String, bw: _.writeUint64String },
            duration_ms: {
              n: 3,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            date_recorded: { n: 4, br: i.readUint32, bw: _.writeUint32 },
            start_timeline_id: { n: 5, br: i.readString, bw: _.writeString },
            start_offset_ms: {
              n: 6,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            published_file_id: {
              n: 7,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            file_size: {
              n: 8,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            name: { n: 9, br: i.readString, bw: _.writeString },
            date_clipped: { n: 10, br: i.readUint32, bw: _.writeUint32 },
            temporary: { n: 11, br: i.readBool, bw: _.writeBool },
            original_device: { n: 12, br: i.readString, bw: _.writeString },
            original_gaming_device_type: {
              n: 13,
              br: i.readUint32,
              bw: _.writeUint32,
            },
            date_downloaded: { n: 14, br: i.readUint32, bw: _.writeUint32 },
            thumbnail_url: { n: 15, br: i.readString, bw: _.writeString },
            thumbnail_width: { n: 16, br: i.readUint32, bw: _.writeUint32 },
            thumbnail_height: { n: 17, br: i.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipSummary`;
    }
  },
  Dr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            start: { n: 2, c: Or },
            end: { n: 3, c: Or },
            name: { n: 4, br: i.readString, bw: _.writeString },
            src_clip_id: { n: 5, br: i.readString, bw: _.writeString },
            temporary: { n: 6, br: i.readBool, bw: _.writeBool },
            force_thumbnail: { n: 7, br: i.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request`;
    }
  },
  Or = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: i.readString, bw: _.writeString },
            offset_ms: {
              n: 2,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request_Position`;
    }
  },
  kr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Er } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Response`;
    }
  },
  Ar = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: i.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Request`;
    }
  },
  jr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Response`;
    }
  },
  Mr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bitrate_kbps || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bitrate_kbps: { n: 1, br: i.readInt32, bw: _.writeInt32 },
            width: { n: 2, br: i.readInt32, bw: _.writeInt32 },
            height: { n: 3, br: i.readInt32, bw: _.writeInt32 },
            frames_per_second: { n: 4, br: i.readInt32, bw: _.writeInt32 },
            codec: { n: 5, br: i.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Settings`;
    }
  },
  Nr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: i.readString, bw: _.writeString },
            export_mp4_path: { n: 2, br: i.readString, bw: _.writeString },
            settings: { n: 3, c: Mr },
            use_unique_filename: { n: 4, br: i.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Request`;
    }
  },
  Pr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { result: { n: 1, br: i.readInt32, bw: _.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Response`;
    }
  },
  Fr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: i.readString, bw: _.writeString },
            settings: { n: 2, c: Mr },
            run_policy_checks: { n: 3, br: i.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Request`;
    }
  },
  Ir = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.estimated_size || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            settings: { n: 2, c: Mr },
            result: { n: 3, br: i.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Response`;
    }
  },
  Lr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
            timeline_id: { n: 2, br: i.readString, bw: _.writeString },
            timeline_offset_ms: {
              n: 3,
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
            source_clip_id: { n: 4, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Request`;
    }
  },
  Rr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshot_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Response`;
    }
  },
  zr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: i.readString, bw: _.writeString },
            title: { n: 2, br: i.readString, bw: _.writeString },
            desc: { n: 3, br: i.readString, bw: _.writeString },
            visibility: { n: 4, br: i.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Request`;
    }
  },
  Br = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Er } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Response`;
    }
  },
  Vr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: i.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Request`;
    }
  },
  Hr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.zip_path || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { zip_path: { n: 1, br: i.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Response`;
    }
  },
  Ur = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            created_after: { n: 2, br: i.readUint32, bw: _.writeUint32 },
            include_temporary: { n: 3, br: i.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Request`;
    }
  },
  Wr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip: { n: 1, c: Er, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Response`;
    }
  },
  Gr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            created_after: { n: 2, br: i.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Request`;
    }
  },
  Kr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.events || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { events: { n: 1, c: qn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Response`;
    }
  },
  qr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            entry: { n: 2, c: vr },
            clip_id: { n: 3, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Request`;
    }
  },
  Jr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Response`;
    }
  },
  Yr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            entry: { n: 2, c: vr },
            clip_id: { n: 3, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Request`;
    }
  },
  Xr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Response`;
    }
  },
  Zr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
            timeline_id: { n: 2, br: i.readString, bw: _.writeString },
            entry_id: { n: 3, br: i.readUint64String, bw: _.writeUint64String },
            clip_id: { n: 4, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Request`;
    }
  },
  Qr = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Response`;
    }
  },
  $r = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_ids || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
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
              br: i.readUint64String,
              pbr: i.readPackedUint64String,
              bw: _.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Request`;
    }
  },
  ei = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Response`;
    }
  },
  ti = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.folder_path || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            folder_path: { n: 1, br: i.readString, bw: _.writeString },
            type: { n: 2, br: i.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Request`;
    }
  },
  ni = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            size: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Response`;
    }
  },
  ri = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: i.readString, bw: _.writeString },
            clip_id: { n: 3, br: i.readString, bw: _.writeString },
            timeline_id: { n: 7, br: i.readString, bw: _.writeString },
            start_offset_us: {
              n: 4,
              r: !0,
              q: !0,
              br: i.readInt64String,
              pbr: i.readPackedInt64String,
              bw: _.writeRepeatedInt64String,
            },
            major_axis: { n: 5, d: 512, br: i.readUint32, bw: _.writeUint32 },
            time_precision: { n: 6, d: 0, br: i.readEnum, bw: _.writeEnum },
            format: { n: 8, d: 1, br: i.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Request`;
    }
  },
  ii = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnails || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { thumbnails: { n: 1, c: ai, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response`;
    }
  },
  ai = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_data || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_data: { n: 1, br: i.readBytes, bw: _.writeBytes },
            width: { n: 2, br: i.readUint32, bw: _.writeUint32 },
            height: { n: 3, br: i.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response_Thumbnail`;
    }
  },
  oi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Request`;
    }
  },
  si = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Response`;
    }
  },
  ci = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Request`;
    }
  },
  li = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Er } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Response`;
    }
  },
  ui = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Request`;
    }
  },
  di = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_size || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Response`;
    }
  },
  fi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Request`;
    }
  },
  pi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Response`;
    }
  },
  mi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Request`;
    }
  },
  hi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.per_process_audio_capture || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readBool,
              bw: _.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Response`;
    }
  },
  gi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Er } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipCreated_Notification`;
    }
  },
  _i = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: i.readString, bw: _.writeString },
            game_id: { n: 2, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipDeleted_Notification`;
    }
  },
  vi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: i.readFloat, bw: _.writeFloat },
            clip_id: { n: 2, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportProgress_Notification`;
    }
  },
  yi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: i.readFixed64String, bw: _.writeFixed64String },
            enabled: { n: 2, br: i.readBool, bw: _.writeBool },
            minutes: { n: 3, br: i.readUint32, bw: _.writeUint32 },
            bitrate: { n: 4, br: i.readString, bw: _.writeString },
            infinite: { n: 5, br: i.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PerGameSettings`;
    }
  },
  bi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Request`;
    }
  },
  xi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: yi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Response`;
    }
  },
  Si = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_settings || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { game_settings: { n: 1, c: yi } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Request`;
    }
  },
  Ci = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Response`;
    }
  },
  wi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: i.readFixed64String, bw: _.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Request`;
    }
  },
  Ti = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Response`;
    }
  },
  Ei = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: i.readFloat, bw: _.writeFloat },
            clip_id: { n: 2, br: i.readString, bw: _.writeString },
            eresult: { n: 3, br: i.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadProgress_Notification`;
    }
  },
  Di = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: i.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Request`;
    }
  },
  Oi = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Response`;
    }
  },
  ki = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Request`;
    }
  },
  Ai = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_h265_enabled || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_h265_enabled: { n: 1, br: i.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Response`;
    }
  },
  ji = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StateChanged_Notification`;
    }
  },
  z;
(function (e) {
  e.GetAppsWithBackgroundVideoHandler = {
    name: `GameRecording.GetAppsWithBackgroundVideo#1`,
    request: Qn,
    response: $n,
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
            C(Qn, e),
            $n,
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
            C(Qn, e),
            $n,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAppsWithBackgroundVideo = n),
    (e.GetTimelinesForAppHandler = {
      name: `GameRecording.GetTimelinesForApp#1`,
      request: tr,
      response: nr,
    }));
  function r(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, C(tr, e), nr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForApp = r;
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
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, C(tr, e), nr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForApp = i),
    (e.GetTimelinesForClipHandler = {
      name: `GameRecording.GetTimelinesForClip#1`,
      request: rr,
      response: ir,
    }));
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
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, C(rr, e), ir, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForClip = a;
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
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, C(rr, e), ir, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForClip = o),
    (e.QueryPhasesHandler = {
      name: `GameRecording.QueryPhases#1`,
      request: ar,
      response: sr,
    }));
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
        : t.SendMsg(`GameRecording.QueryPhases#1`, C(ar, e), sr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.QueryPhases = s;
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
        : t.SendMsg(`GameRecording.QueryPhases#1`, C(ar, e), sr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgQueryPhases = c),
    (e.GetTagsHandler = {
      name: `GameRecording.GetTags#1`,
      request: ur,
      response: dr,
    }));
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
        : t.SendMsg(`GameRecording.GetTags#1`, C(ur, e), dr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTags = l;
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
        : t.SendMsg(`GameRecording.GetTags#1`, C(ur, e), dr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTags = u),
    (e.GetEnoughDiskSpaceHandler = {
      name: `GameRecording.GetEnoughDiskSpace#1`,
      request: fr,
      response: pr,
    }));
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
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, C(fr, e), pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetEnoughDiskSpace = d;
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
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, C(fr, e), pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetEnoughDiskSpace = f),
    (e.GetAvailableDiskSpaceHandler = {
      name: `GameRecording.GetAvailableDiskSpace#1`,
      request: mr,
      response: hr,
    }));
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
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, C(mr, e), hr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetAvailableDiskSpace = p;
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
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, C(mr, e), hr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetAvailableDiskSpace = m),
    (e.SaveClipHandler = {
      name: `GameRecording.SaveClip#1`,
      request: Dr,
      response: kr,
    }));
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
        : t.SendMsg(`GameRecording.SaveClip#1`, C(Dr, e), kr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SaveClip = h;
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
        : t.SendMsg(`GameRecording.SaveClip#1`, C(Dr, e), kr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSaveClip = g),
    (e.DeleteClipHandler = {
      name: `GameRecording.DeleteClip#1`,
      request: Ar,
      response: jr,
    }));
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
        : t.SendMsg(`GameRecording.DeleteClip#1`, C(Ar, e), jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeleteClip = _;
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
        : t.SendMsg(`GameRecording.DeleteClip#1`, C(Ar, e), jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeleteClip = v),
    (e.GetClipsHandler = {
      name: `GameRecording.GetClips#1`,
      request: Ur,
      response: Wr,
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
        : t.SendMsg(`GameRecording.GetClips#1`, C(Ur, e), Wr, {
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
        : t.SendMsg(`GameRecording.GetClips#1`, C(Ur, e), Wr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetClips = b),
    (e.UploadClipToSteamHandler = {
      name: `GameRecording.UploadClipToSteam#1`,
      request: zr,
      response: Br,
    }));
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
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, C(zr, e), Br, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UploadClipToSteam = ee;
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
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, C(zr, e), Br, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUploadClipToSteam = x),
    (e.ExportClipHandler = {
      name: `GameRecording.ExportClip#1`,
      request: Nr,
      response: Pr,
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
        : t.SendMsg(`GameRecording.ExportClip#1`, C(Nr, e), Pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClip = te;
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
        : t.SendMsg(`GameRecording.ExportClip#1`, C(Nr, e), Pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClip = ne),
    (e.ExportClipPreviewHandler = {
      name: `GameRecording.ExportClipPreview#1`,
      request: Fr,
      response: Ir,
    }));
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
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, C(Fr, e), Ir, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClipPreview = re;
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
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, C(Fr, e), Ir, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClipPreview = S),
    (e.TakeScreenshotHandler = {
      name: `GameRecording.TakeScreenshot#1`,
      request: Lr,
      response: Rr,
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
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, C(Lr, e), Rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.TakeScreenshot = ie;
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
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, C(Lr, e), Rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgTakeScreenshot = ae),
    (e.ZipClipHandler = {
      name: `GameRecording.ZipClip#1`,
      request: Vr,
      response: Hr,
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
        : t.SendMsg(`GameRecording.ZipClip#1`, C(Vr, e), Hr, {
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
        : t.SendMsg(`GameRecording.ZipClip#1`, C(Vr, e), Hr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgZipClip = se),
    (e.StartRecordingHandler = {
      name: `GameRecording.StartRecording#1`,
      request: oi,
      response: si,
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
        : t.SendMsg(`GameRecording.StartRecording#1`, C(oi, e), si, {
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
        : t.SendMsg(`GameRecording.StartRecording#1`, C(oi, e), si, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStartRecording = le),
    (e.StopRecordingHandler = {
      name: `GameRecording.StopRecording#1`,
      request: ci,
      response: li,
    }));
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
        : t.SendMsg(`GameRecording.StopRecording#1`, C(ci, e), li, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StopRecording = ue;
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
        : t.SendMsg(`GameRecording.StopRecording#1`, C(ci, e), li, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStopRecording = de),
    (e.GetBackgroundRecordingFileSizeHandler = {
      name: `GameRecording.GetBackgroundRecordingFileSize#1`,
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
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            C(ui, e),
            di,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetBackgroundRecordingFileSize = fe;
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
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            C(ui, e),
            di,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetBackgroundRecordingFileSize = pe),
    (e.CleanupBackgroundRecordingsHandler = {
      name: `GameRecording.CleanupBackgroundRecordings#1`,
      request: fi,
      response: pi,
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
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            C(fi, e),
            pi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.CleanupBackgroundRecordings = w;
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
            `GameRecording.CleanupBackgroundRecordings#1`,
            C(fi, e),
            pi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgCleanupBackgroundRecordings = me),
    (e.GetAndTrimPostGameHighlightsHandler = {
      name: `GameRecording.GetAndTrimPostGameHighlights#1`,
      request: Gr,
      response: Kr,
    }));
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
            C(Gr, e),
            Kr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetAndTrimPostGameHighlights = he;
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
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            C(Gr, e),
            Kr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAndTrimPostGameHighlights = ge),
    (e.GetThumbnailsHandler = {
      name: `GameRecording.GetThumbnails#1`,
      request: ri,
      response: ii,
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
        : t.SendMsg(`GameRecording.GetThumbnails#1`, C(ri, e), ii, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetThumbnails = T;
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
        : t.SendMsg(`GameRecording.GetThumbnails#1`, C(ri, e), ii, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetThumbnails = _e),
    (e.GetPlatformCapabilitiesHandler = {
      name: `GameRecording.GetPlatformCapabilities#1`,
      request: mi,
      response: hi,
    }));
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
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, C(mi, e), hi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPlatformCapabilities = ve;
  function ye(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, C(mi, e), hi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPlatformCapabilities = ye),
    (e.NotifyTimelineChangedHandler = {
      name: `GameRecording.NotifyTimelineChanged#1`,
      request: gr,
    }));
  function be(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            z.NotifyTimelineChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineChanged = be;
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
            C(gr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineChanged = xe;
  function E(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineChanged#1`,
            C(gr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineChanged = E),
    (e.NotifyRecordingSessionChangedHandler = {
      name: `GameRecording.NotifyRecordingSessionChanged#1`,
      request: _r,
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
            z.NotifyRecordingSessionChangedHandler,
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
            C(_r, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyRecordingSessionChanged = Ce;
  function D(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            C(_r, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyRecordingSessionChanged = D),
    (e.NotifyTimelineEntryChangedHandler = {
      name: `GameRecording.NotifyTimelineEntryChanged#1`,
      request: yr,
    }));
  function we(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            z.NotifyTimelineEntryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryChanged = we;
  function Te(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            C(yr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryChanged = Te;
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
            C(yr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryChanged = Ee),
    (e.NotifyTimelineEntryRemovedHandler = {
      name: `GameRecording.NotifyTimelineEntryRemoved#1`,
      request: br,
    }));
  function De(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            z.NotifyTimelineEntryRemovedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryRemoved = De;
  function Oe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            C(br, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryRemoved = Oe;
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
            C(br, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryRemoved = ke),
    (e.NotifyClipCreatedHandler = {
      name: `GameRecording.NotifyClipCreated#1`,
      request: gi,
    }));
  function Ae(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(z.NotifyClipCreatedHandler, e)
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
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, C(gi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipCreated = je;
  function Me(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, C(gi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipCreated = Me),
    (e.NotifyClipDeletedHandler = {
      name: `GameRecording.NotifyClipDeleted#1`,
      request: _i,
    }));
  function Ne(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(z.NotifyClipDeletedHandler, e)
    );
  }
  e.RegisterForNotifyClipDeleted = Ne;
  function Pe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, C(_i, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipDeleted = Pe;
  function Fe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, C(_i, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipDeleted = Fe),
    (e.NotifyExportProgressHandler = {
      name: `GameRecording.NotifyExportProgress#1`,
      request: vi,
    }));
  function Ie(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(z.NotifyExportProgressHandler, e)
    );
  }
  e.RegisterForNotifyExportProgress = Ie;
  function Le(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, C(vi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyExportProgress = Le;
  function Re(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, C(vi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyExportProgress = Re),
    (e.NotifyUploadProgressHandler = {
      name: `GameRecording.NotifyUploadProgress#1`,
      request: Ei,
    }));
  function ze(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(z.NotifyUploadProgressHandler, e)
    );
  }
  e.RegisterForNotifyUploadProgress = ze;
  function Be(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, C(Ei, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyUploadProgress = Be;
  function Ve(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, C(Ei, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyUploadProgress = Ve),
    (e.NotifyLowDiskSpaceHandler = {
      name: `GameRecording.NotifyLowDiskSpace#1`,
      request: xr,
    }));
  function He(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(z.NotifyLowDiskSpaceHandler, e)
    );
  }
  e.RegisterForNotifyLowDiskSpace = He;
  function Ue(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, C(xr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyLowDiskSpace = Ue;
  function We(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, C(xr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyLowDiskSpace = We),
    (e.NotifyPostGameHighlightsChangedHandler = {
      name: `GameRecording.NotifyPostGameHighlightsChanged#1`,
      request: Sr,
    }));
  function O(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            z.NotifyPostGameHighlightsChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPostGameHighlightsChanged = O;
  function Ge(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            C(Sr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPostGameHighlightsChanged = Ge;
  function k(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            C(Sr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPostGameHighlightsChanged = k),
    (e.NotifyOpenOverlayToGamePhaseHandler = {
      name: `GameRecording.NotifyOpenOverlayToGamePhase#1`,
      request: Cr,
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
            z.NotifyOpenOverlayToGamePhaseHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToGamePhase = Ke;
  function qe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            C(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToGamePhase = qe;
  function A(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            C(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToGamePhase = A),
    (e.NotifyOpenOverlayToTimelineEventHandler = {
      name: `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
      request: wr,
    }));
  function Je(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            z.NotifyOpenOverlayToTimelineEventHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToTimelineEvent = Je;
  function Ye(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            C(wr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToTimelineEvent = Ye;
  function M(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            C(wr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToTimelineEvent = M),
    (e.NotifyPhaseListChangedHandler = {
      name: `GameRecording.NotifyPhaseListChanged#1`,
      request: Tr,
    }));
  function Xe(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            z.NotifyPhaseListChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPhaseListChanged = Xe;
  function Ze(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            C(Tr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPhaseListChanged = Ze;
  function Qe(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            C(Tr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPhaseListChanged = Qe),
    (e.GetPerGameSettingsHandler = {
      name: `GameRecording.GetPerGameSettings#1`,
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
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, C(bi, e), xi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPerGameSettings = $e;
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
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, C(bi, e), xi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPerGameSettings = et),
    (e.SetPerGameSettingsHandler = {
      name: `GameRecording.SetPerGameSettings#1`,
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
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, C(Si, e), Ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SetPerGameSettings = tt;
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
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, C(Si, e), Ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSetPerGameSettings = nt),
    (e.DeletePerGameSettingsHandler = {
      name: `GameRecording.DeletePerGameSettings#1`,
      request: wi,
      response: Ti,
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
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, C(wi, e), Ti, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeletePerGameSettings = rt;
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
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, C(wi, e), Ti, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeletePerGameSettings = it),
    (e.UserAddTimelineEntryHandler = {
      name: `GameRecording.UserAddTimelineEntry#1`,
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
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, C(qr, e), Jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserAddTimelineEntry = at;
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
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, C(qr, e), Jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserAddTimelineEntry = ot),
    (e.UserUpdateTimelineEntryHandler = {
      name: `GameRecording.UserUpdateTimelineEntry#1`,
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
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, C(Yr, e), Xr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserUpdateTimelineEntry = st;
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
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, C(Yr, e), Xr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserUpdateTimelineEntry = ct),
    (e.UserRemoveTimelineEntryHandler = {
      name: `GameRecording.UserRemoveTimelineEntry#1`,
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
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, C(Zr, e), Qr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserRemoveTimelineEntry = lt;
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
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, C(Zr, e), Qr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserRemoveTimelineEntry = ut),
    (e.ManuallyDeleteRecordingsForAppsHandler = {
      name: `GameRecording.ManuallyDeleteRecordingsForApps#1`,
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
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            C($r, e),
            ei,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.ManuallyDeleteRecordingsForApps = dt;
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
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            C($r, e),
            ei,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgManuallyDeleteRecordingsForApps = ft),
    (e.GetTotalDiskSpaceUsageHandler = {
      name: `GameRecording.GetTotalDiskSpaceUsage#1`,
      request: ti,
      response: ni,
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
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, C(ti, e), ni, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTotalDiskSpaceUsage = pt;
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
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, C(ti, e), ni, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTotalDiskSpaceUsage = mt),
    (e.SwitchBackgroundRecordingGameHandler = {
      name: `GameRecording.SwitchBackgroundRecordingGame#1`,
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
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            C(Di, e),
            Oi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.SwitchBackgroundRecordingGame = ht;
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
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            C(Di, e),
            Oi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgSwitchBackgroundRecordingGame = gt),
    (e.GetStateHandler = {
      name: `GameRecording.GetState#1`,
      request: ki,
      response: Ai,
    }));
  function _t(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, C(ki, e), Ai, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetState = _t;
  function vt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, C(ki, e), Ai, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetState = vt),
    (e.NotifyStateChangedHandler = {
      name: `GameRecording.NotifyStateChanged#1`,
      request: ji,
    }));
  function yt(e, t) {
    return (
      (t ||= j().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(z.NotifyStateChangedHandler, e)
    );
  }
  e.RegisterForNotifyStateChanged = yt;
  function bt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, C(ji, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyStateChanged = bt;
  function xt(e, t) {
    return (
      (t ||= j().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, C(ji, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SendMsgNotifyStateChanged = xt;
})((z ||= {}));
var Mi = (function (e) {
  return (
    (e[(e.Invalid = 0)] = `Invalid`),
    (e[(e.Playing = 1)] = `Playing`),
    (e[(e.Staging = 2)] = `Staging`),
    (e[(e.Menus = 3)] = `Menus`),
    e
  );
})({});
function Ni(e) {
  return e.type === `gamemode`;
}
function Pi(e) {
  return e.type === `state_description`;
}
function Fi(e) {
  return e.type === `event` && parseInt(e.duration) > 0;
}
function Ii(e) {
  return e.type === `event`;
}
function Li(e) {
  return e.type === `achievement`;
}
function Ri(e) {
  return e.type === `error`;
}
function zi(e) {
  return e.type === `usermarker`;
}
function Bi(e) {
  return e.type === `screenshot`;
}
function Vi(e) {
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
var Hi = new fe(`ReactUsageReporting`).Debug,
  Ui = 100,
  Wi = Le.PerMinute * 1e3,
  Gi = class {
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
      setTimeout(() => this.CheckSend(), Wi);
    }
    CheckSend() {
      (this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend());
    }
    ReportInternal(e, t) {
      (t.has(e) || t.set(e, 0),
        t.set(e, t.get(e) + 1),
        this.m_reportCount++,
        this.ShouldSendMetricsImmediately() && this.SendMetrics());
    }
    ReportRouteMatch(e) {
      (Hi(`Route match: ` + e), this.ReportInternal(e, this.m_mapRoutes));
    }
    ReportTrackedComponent(e) {
      (Hi(`Tracked component: ` + e),
        this.ReportInternal(e, this.m_mapComponents));
    }
    ReportTrackedAction(e) {
      (Hi(`User action: ` + e), this.ReportInternal(e, this.m_mapActions));
    }
    ShouldSendMetricsImmediately() {
      return this.m_reportCount >= Ui;
    }
    SendMetrics() {
      if (!this.m_bInitialized) return;
      let e = oe.Init(n);
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
          let r = new ee();
          (r.set_action(n), r.set_count(t), e.Body().add_actions(r));
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        d.ReportReactUsage(this.m_transport, e));
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
x([T], Gi.prototype, `CheckSend`, null);
var B = new Gi();
function V(e) {
  return { type: `global`, valMS: e };
}
function Ki(e) {
  return { type: `timeline`, valMS: e };
}
function qi(e) {
  return { type: `global`, valPX: e };
}
function Ji(e) {
  return { type: `scrollWindow`, valPX: e };
}
var Yi = class t {
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
      return this.GetType() === ae.k_EGameIDTypeApp;
    }
    BIsShortcut() {
      return this.GetType() === ae.k_EGameIDTypeShortcut;
    }
    BIsMod() {
      return this.GetType() === ae.k_EGameIDTypeGameMod;
    }
    GetInternalAppID() {
      return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
    }
    BIsValid() {
      switch (this.GetType()) {
        case ae.k_EGameIDTypeApp:
          return this.GetAppID() !== 0;
        case ae.k_EGameIDTypeGameMod:
          return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
        case ae.k_EGameIDTypeShortcut:
          return !!(this.GetModID() & 2147483648);
        default:
          return (e(!1, `Unknown GameID type: ${this.GetType()}`), !1);
      }
    }
    static InitFromAppID(e) {
      return new t(ae.k_EGameIDTypeApp, e, 0);
    }
    static InitFromShortcutID(e) {
      return new t(ae.k_EGameIDTypeShortcut, 0, e);
    }
  },
  Xi = 1e4,
  Zi = 3e3,
  Qi = 4e3,
  $i = class t {
    constructor() {
      ce(this);
    }
    m_bInitialized = !1;
    m_rgListeners = [];
    m_gameID;
    m_clipID;
    m_ulFirstTimelineOffsetMS = 0;
    m_rgTimelineMetadata = [];
    m_mapTimelineData = new Map();
    m_mapRunningTimelines = new Map();
    m_schUpdateRunning = new _e();
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
      let { timelines: t = [] } = (await z.GetTimelinesForApp({ game_id: e }))
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
      let t = await z.GetTimelinesForClip({ clip_id: e });
      if (t.GetEResult() != 1) throw Error(`Unable to load clip ` + e);
      let {
        timelines: n = [],
        game_id: r,
        first_timeline_start_offset_ms: i,
      } = t.Body().toObject();
      ((this.m_gameID = r), this.UpdateTimelineMetadata(n));
      for (let t of this.m_rgTimelineMetadata) {
        N(`Loaded clip ${e} timeline ${t.metadata.timeline_id}`);
        for (let e of t.metadata.recordings)
          N(`Clip recording ${e.recording_id} duration ${e.duration_ms}`);
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
            : (n.push({ nGlobalOffsetMS: V(r), metadata: t }),
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
          r = kn.default
            .get(t, { withCredentials: !1 })
            .then(
              (t) => {
                if (t.status == 200 && t.data) {
                  ta(t.data);
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
            parseInt(t.m_rgGameModeChanges[0].time) < Xi &&
            (t.m_rgGameModeChanges[0].time = `0`));
      }
      return t;
    }
    static ApplyTimelineRounding(e, t) {
      if (t === 0) return e;
      let n = e % t;
      return n == 0 ? e : e + (t - n);
    }
    FindTimelineAtOffset(e, n) {
      let r = e + this.m_ulFirstTimelineOffsetMS,
        i = 0;
      for (let e of this.m_rgTimelineMetadata) {
        let a = this.GetTimelineStartBeforeGlobalZeroMS(e.metadata.timeline_id),
          o = parseInt(e.metadata.duration_ms) + a;
        if (i + o > r)
          return {
            timeline: e,
            nTimelineOffsetMS: r - i,
            ulGlobalToTimelineOffset: a,
          };
        i += t.ApplyTimelineRounding(o, n);
      }
      return null;
    }
    GetGlobalOffsetDataForTimeline(e, n) {
      let r = 0;
      for (let i of this.m_rgTimelineMetadata) {
        let a = parseInt(i.metadata.duration_ms),
          o = t.ApplyTimelineRounding(a, n);
        if (i.metadata.timeline_id == e)
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
    GetTimelineOffsetFromGlobal(e, n) {
      let r = this.m_ulFirstTimelineOffsetMS + e,
        i = 0;
      for (let e of this.m_rgTimelineMetadata) {
        let a = this.GetTimelineStartBeforeGlobalZeroMS(e.metadata.timeline_id),
          o = parseInt(e.metadata.duration_ms) + a,
          s = t.ApplyTimelineRounding(o, n);
        if (r < i + s)
          return {
            strTimelineID: e.metadata.timeline_id,
            nTimelineOffsetMS: Ki(r - i - a),
          };
        i += o;
      }
      return { strTimelineID: void 0, nTimelineOffsetMS: Ki(NaN) };
    }
    ConvertRecordingOffsetToGlobalOffset(e, n, r) {
      let i = 0;
      for (let a of this.m_rgTimelineMetadata) {
        let o = parseInt(a.metadata.duration_ms),
          s = this.GetTimelineStartBeforeGlobalZeroMS(a.metadata.timeline_id),
          c = t.ApplyTimelineRounding(o, r);
        for (let t of a.metadata.recordings)
          if (t.recording_id === e) {
            let e =
              (isNaN(parseInt(t.recording_zero_timeline_offset_ms))
                ? 0
                : parseInt(t.recording_zero_timeline_offset_ms) - s) + n;
            return (
              (i += e),
              {
                nGlobalOffsetMS: i,
                nRoundedDurationMS: c,
                strTimelineID: a.metadata.timeline_id,
                nTimelineOffsetMS: e,
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
          o = w(e, (e) => t.valMS - 1 - parseInt(e.time));
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
          o = w(e, (e) => t.valMS - parseInt(e.time));
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
        a = w(n.m_rgEntries, (e) => i - parseInt(e.time));
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
              globalMS: V(i),
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
                  globalMS: V(i),
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
        a = w(n.m_rgEntries, (e) => i - parseInt(e.time)) + 1;
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
              globalMS: V(i),
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
                  globalMS: V(i),
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
      let r = w(
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
        ((i = w(r.m_rgGameModeChanges, e)), (a = w(r.m_rgEntries, e)));
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
        ? Mi.Playing
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
      be(e.m_rgEntries, t, (e, t) => parseInt(e.time) - parseInt(t.time));
    }
    AddEventToTimeline(e, t, n, r, i, a, o, s) {
      if (!this.m_bInitialized)
        return (P(`timeline loader not initialized, unexpected`), !1);
      let c = this.m_mapTimelineData.get(e);
      if (!c) return (P(`failed to find timeline ${e}`), !1);
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
        F(`adding timeline event marker at ${e} at ${l} MS`),
        this.InsertEntryIntoTimelineSorted(c, u),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    RemoveTimelineEvent(e, t) {
      if (!this.m_bInitialized)
        return (P(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (P(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (P(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddUserMarker(e, t, n, r) {
      if (!this.m_bInitialized)
        return (P(`timeline loader not initialized, unexpected`), !1);
      let i = this.m_mapTimelineData.get(e);
      if (!i) return (P(`failed to find timeline ${e}`), !1);
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
        F(`adding user marker at ${e} at ${a} MS`),
        this.InsertEntryIntoTimelineSorted(i, o),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    UpdateUserMarker(e, t, n) {
      if (!this.m_bInitialized)
        return (P(`timeline loader not initialized, unexpected`), !1);
      let r = this.m_mapTimelineData.get(e);
      if (!r) return (P(`failed to find timeline ${e}`), !1);
      let i = r.m_rgEntries.findIndex((e) => e.id === t);
      if (i < 0) return (P(`failed to find entry by id: ${t}`), !1);
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
        return (P(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (P(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (P(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddRunningTimeline(e, t, n) {
      if (this.m_rgTimelineMetadata.find((t) => t.metadata.timeline_id == e))
        return;
      let r = { timeline_id: e, game_id: t, date_recorded: n, recordings: [] },
        i = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1],
        a = i ? i.nGlobalOffsetMS.valMS + parseInt(i.metadata.duration_ms) : 0;
      (be(
        this.m_rgTimelineMetadata,
        { nGlobalOffsetMS: V(a), metadata: r },
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
        m_nPerfCounterOffsetMS: Math.max(0, Ae() - n) * 1e3,
        m_runningRecording: null,
      };
      (this.m_mapRunningTimelines.set(e, o),
        this.m_schUpdateRunning.IsScheduled() ||
          this.m_schUpdateRunning.Schedule(Qi, this.UpdateRunningTimelines),
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
          this.m_schUpdateRunning.Schedule(Qi, this.UpdateRunningTimelines),
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
      let r = Vi(e);
      if (!r) return;
      Ni(r)
        ? be(
            n.m_rgGameModeChanges,
            r,
            (e, t) => parseInt(e.time) - parseInt(t.time),
          )
        : Pi(r)
          ? be(
              n.m_rgStateDescriptions,
              r,
              (e, t) => parseInt(e.time) - parseInt(t.time),
            )
          : be(n.m_rgEntries, r, (e, t) => parseInt(e.time) - parseInt(t.time));
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
    RecordingSessionChanged(t) {
      let n = t.session_id,
        r = t.notification_type;
      if (r == 1) {
        let r = this.m_mapRunningTimelines.get(t.timeline_id);
        if (!r) {
          (this.FireEvent(`OnInvalidateRecording`, t.timeline_id, n),
            e(!1, `Received recording started message before timeline info`));
          return;
        }
        let i = {
          recording_id: n,
          start_offset_ms: t.start_offset,
          recording_zero_timeline_offset_ms: t.start_offset,
          duration_ms: t.duration_ms,
          recording_type: t.recording_type,
        };
        (r.m_metadata.recordings.push(i), (r.m_runningRecording = i));
      } else if (r == 2) {
        let e = this.GetRunningTimelineForRecording(t.timeline_id, n);
        if (!e) return;
        ((e.m_runningRecording.duration_ms = t.duration_ms),
          (e.m_runningRecording = null),
          this.FireEvent(`OnInvalidateRecording`, t.timeline_id, n));
      } else if (r == 4) {
        let e = this.GetTimelineMetadata(t.timeline_id);
        if (e) {
          let r = e.metadata.recordings.find((e) => e.recording_id === n);
          if (r) {
            ((r.start_offset_ms = t.start_offset),
              (r.duration_ms = t.duration_ms));
            let n = parseInt(t.start_offset) + parseInt(t.duration_ms);
            n > (parseInt(e.metadata.duration_ms) || 0) &&
              (e.metadata.duration_ms = n.toString());
          }
        }
        this.GetRunningTimelineForRecording(t.timeline_id, n) ||
          this.FireEvent(`OnInvalidateRecording`, t.timeline_id, n);
      } else if (r == 3) {
        let e = this.GetTimelineMetadata(t.timeline_id);
        if (e) {
          let t = e.metadata.recordings.filter((e) => e.recording_id !== n);
          e.metadata.recordings = t;
        }
      }
      this.FireEvent(`OnInvalidate`, t.timeline_id);
    }
    GetGlobalTimelineEndMS() {
      let e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (e) {
        let t = isNaN(parseInt(e.metadata.duration_ms))
          ? 0
          : parseInt(e.metadata.duration_ms);
        return V(e.nGlobalOffsetMS.valMS + t);
      }
      return V(0);
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
            V(e.nGlobalOffsetMS.valMS + r + a)
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
          if ((d && n < t) || (f && n > r) || (!Ii(e) && !zi(e))) continue;
          let a = ea(e);
          (!i || (a && a.rank > i.rank)) && (i = a);
        }
        for (let e of p.m_rgStateDescriptions) {
          let t = parseInt(e.time);
          (f && t > r) || ((!o || s < t) && ((o = e), (s = t)));
        }
        if (f) break;
      }
      let u = i?.strTitle ?? o?.title,
        d = new Yi(this.GetGameID());
      return {
        strTimelinePart: u,
        strAppNamePart: an.GetAppInfo(d.GetInternalAppID())?.name,
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
          `${o.getFullYear()}-${(o.getMonth() + 1).toString().padStart(2, `0`)}-${o.getDate().toString().padStart(2, `0`)} ${o.toLocaleTimeString(Re.GetPreferredLocales())}`,
          i,
        ]
          .filter((e) => !!e)
          .join(` - `);
      return (N(`Generated clip name "${s}"`), s);
    }
  };
(x([f], $i.prototype, `m_bInitialized`, void 0),
  x([T], $i.prototype, `UpdateRunningTimelines`, null));
function ea(e) {
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
function ta(e) {
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
var H = class {
  m_elVideo = null;
  m_player = null;
  m_listeners = new Se();
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
    (ce(this), (this.m_bAutoPlay = !!e));
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
      (this.m_bMuted = ia(`muted`)),
      (this.m_nVolume = ia(`volume`)),
      this.m_player.SetMuted(this.m_bMuted),
      this.m_player.SetVolume(this.m_nVolume),
      (this.m_bSeekReadyToPlay = !1),
      (this.m_eSeekType = r));
    let i = `seeking_${t}_${n.toFixed(3)}`;
    (N(`CGameRecordingVideo:: perf mark ${i}`),
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
      F(`video playing`));
  }
  OnVideoPause() {
    ((this.m_bVideoElementPlaying = !1), F(`video paused`));
  }
  OnVideoTimeUpdate() {
    ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
      (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
      (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()));
  }
  OnVideoEnd() {
    ((this.m_bVideoElementPlaying = !1),
      (this.m_bAtEnd = !0),
      F(`video ended`));
  }
  OnSeeking() {
    (F(`video on seeking`),
      (this.m_bVideoElementPlaying = !1),
      (this.m_bIsWaiting = !0),
      (this.m_bAtEnd = !1));
  }
  OnLoadedMetadata() {
    this.m_bLoadedMetadata = !0;
  }
  async OnDownloadFailed(e) {
    (e.detail || Zt.PlaybackError) == Zt.UnsupportedMediaType
      ? (P(`media type error`), (this.m_ePlayerError = 3))
      : (P(`video download failed`, e.detail),
        this.m_nDownloadFailureCount < 2
          ? (await this.m_player?.UpdateMPD(), this.m_nDownloadFailureCount++)
          : (this.m_ePlayerError = 1));
  }
  OnPlaybackError() {
    ((this.m_bVideoElementPlaying = !1),
      P(`video playback error`),
      (this.m_ePlayerError = 2));
  }
  OnUserInputNeeded() {
    ((this.m_bUserInputNeeded = !0),
      !this.m_bMuted &&
        this.m_elVideo.autoplay &&
        (gn(`Failed to autoplay video. Muting and trying again.`),
        this.SetMute(!0),
        this.Play()));
  }
  OnVolumeChange() {
    F(`volume change`);
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
      aa(`volume`, e),
      e > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
      this.IsInitialized() && this.m_player.SetVolume(e));
  }
  SetMute(e, t) {
    (this.IsInitialized() && this.m_player.SetMuted(e),
      (this.m_bMuted = e),
      t && aa(`muted`, e));
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
      N(`CGameRecordingVideo:: perf mark ${t}`),
      N(`CGameRecordingVideo::Seek to ${e}`),
      (this.m_nPlaybackTime = e),
      this.m_player.Seek(e, this.m_eSeekType));
  }
};
(x([f], H.prototype, `m_bInitailized`, void 0),
  x([f], H.prototype, `m_bPaused`, void 0),
  x([f], H.prototype, `m_bAtEnd`, void 0),
  x([f], H.prototype, `m_strMediaTypeError`, void 0),
  x([f], H.prototype, `m_ePlayerError`, void 0),
  x([f], H.prototype, `m_bUserInputNeeded`, void 0),
  x([f], H.prototype, `m_bMuted`, void 0),
  x([f], H.prototype, `m_bSeekReadyToPlay`, void 0),
  x([f], H.prototype, `m_bVideoElementPlaying`, void 0),
  x([f], H.prototype, `m_nPlaybackSpeed`, void 0),
  x([f], H.prototype, `m_bIsWaiting`, void 0),
  x([f], H.prototype, `m_bLoadedMetadata`, void 0),
  x([f], H.prototype, `m_nPlaybackTime`, void 0),
  x([f], H.prototype, `m_nVideoStartTime`, void 0),
  x([f], H.prototype, `m_nVideoDuration`, void 0),
  x([f], H.prototype, `m_nVolume`, void 0),
  x([f], H.prototype, `m_eSeekType`, void 0),
  x([b], H.prototype, `Start`, null),
  x([b], H.prototype, `Stop`, null),
  x([T], H.prototype, `OnCanPlay`, null),
  x([T], H.prototype, `OnUserPauseChange`, null),
  x([T], H.prototype, `OnVideoPlaying`, null),
  x([T], H.prototype, `OnVideoPause`, null),
  x([T], H.prototype, `OnVideoTimeUpdate`, null),
  x([T], H.prototype, `OnVideoEnd`, null),
  x([T], H.prototype, `OnSeeking`, null),
  x([T], H.prototype, `OnLoadedMetadata`, null),
  x([T], H.prototype, `OnDownloadFailed`, null),
  x([T], H.prototype, `OnPlaybackError`, null),
  x([T], H.prototype, `OnUserInputNeeded`, null),
  x([T], H.prototype, `OnVolumeChange`, null),
  x([T], H.prototype, `OnVideoWaiting`, null),
  x([T], H.prototype, `UserInputReceived`, null));
var na;
function ra() {
  if (!na) {
    let e = window.localStorage.getItem(`gameRecordingPlayer`) || `{}`,
      t;
    try {
      t = JSON.parse(e);
    } catch {
      t = {};
    }
    na = { muted: t.muted || !1, volume: t.volume || 1 };
  }
  return na;
}
function ia(e) {
  return ra()[e];
}
function aa(e, t) {
  let n = ra();
  n[e] = t;
  let r = JSON.stringify(n);
  window.localStorage.setItem(`gameRecordingPlayer`, r);
}
var oa = (function (e) {
  return (
    (e.NotRunning = `NotRunning`),
    (e.NotRecording = `NotRecording`),
    (e.ManualRecording = `ManualRecording`),
    (e.BackgroundRecording = `BackgroundRecording`),
    e
  );
})({});
function sa(e) {
  let { app: t } = Fn(e);
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
var U = y(),
  ca = (function (e) {
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
  la = 3 * Zi,
  ua = 5 * Zi,
  da = Zi + 2e3,
  fa = 1e3,
  W = class {
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
    m_durationMS = V(null);
    m_lastRecordingGlobalMS = V(null);
    m_bWasLiveEdge = !1;
    m_nGlobalTimelinePlaybackMS = null;
    m_nGlobalTimelinePlaybackSec = null;
    m_fnUnregisterAutorun = [];
    m_eGameRecordingMode;
    m_rgSeekPerf = [];
    m_eRecordingState = oa.NotRecording;
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
      (ce(this),
        (this.m_fnGetManifest = t),
        (this.m_gameRecordingVideo = new H(!0)),
        (this.m_eGameRecordingMode = n),
        (this.m_bGamepadMode = i),
        (this.m_playbackDefinition = o),
        r != null && (this.m_bControlsVisible = r),
        n === `Overlay` && (this.m_bHidePlayer = !0),
        s && this.SetClipOffsets(s),
        (this.m_fnRenderGlyph = a),
        this.m_fnUnregisterAutorun.push(
          se(
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
          se(
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
          se(
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
          se(
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
          se(
            () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
            (e) => {
              if (e) {
                let e = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                try {
                  let t = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                    n = performance.measure(t, e);
                  (N(
                    `CGameRecordingVideo:: perf measure ${e} duration ${n.duration}`,
                  ),
                    n && this.m_rgSeekPerf.push(n.duration));
                } catch (t) {
                  N(`CGameRecordingVideo:: cant measure ${e}, error: ${t}`);
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
        (N(`Recording invalidated for ${t}. Reloading MPD`),
        this.m_gameRecordingVideo.UpdateMPD());
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        (this.m_bWasLiveEdge = !0),
        this.TryPlayInitialTimelineVideo());
      let e = In(this.m_timelineLoader.GetGameID());
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
      let n = t ? 1 : fa * this.m_gameRecordingVideo.GetPlaybackSpeed(),
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
        let n = t ? 1 : fa * this.m_gameRecordingVideo.GetPlaybackSpeed();
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
        ? V(Math.max(0, this.m_lastRecordingGlobalMS.valMS - la - 1e3))
        : this.GetTotalMS();
    }
    GetLiveEdgeMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? V(Math.max(0, this.m_lastRecordingGlobalMS.valMS - da))
        : V(Math.max(0, this.GetTotalMS().valMS - 1));
    }
    GetTimelineAndOffsetRelativeToCurrentPlayback(e = 0) {
      return (
        this.GetCurrentPlaybackGlobalMS(e) ||
        (P(
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
        i = r(t.valMS + e, 0, n - 1e3);
      this.SetPlaytimeFromGlobalMS(V(i));
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
            V(this.m_nGlobalTimelinePlaybackMS),
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
      return V(this.m_nGlobalTimelinePlaybackMS);
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
        let e = this.m_bWasLiveEdge ? ua : la;
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
          { fnCreateUserTimelineMarkers: i } = Vn(),
          a = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
            r.strTimelineID,
          );
        B.ReportTrackedAction(t);
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
      let { fnRemoveUserTimelineMarker: n } = Vn();
      return (await n(
        this.m_timelineLoader.GetGameID(),
        this.GetClipID(),
        e,
        t,
      )) == 1
        ? (this.m_timelineLoader.RemoveUserMarker(e, t), !0)
        : (F(`Failed to delete user marker for timeline ${e} entry ${t}`), !1);
    }
    async UpdateUserMarker(e, t, n, r) {
      let { fnUpdateUserTimelineMarkers: i } = Vn(),
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
(x([f], W.prototype, `m_bHidePlayer`, void 0),
  x([f], W.prototype, `m_strRecordingID`, void 0),
  x([f], W.prototype, `m_durationMS`, void 0),
  x([f], W.prototype, `m_lastRecordingGlobalMS`, void 0),
  x([f], W.prototype, `m_nGlobalTimelinePlaybackMS`, void 0),
  x([f], W.prototype, `m_nGlobalTimelinePlaybackSec`, void 0),
  x([f], W.prototype, `m_rgSeekPerf`, void 0),
  x([f], W.prototype, `m_eRecordingState`, void 0),
  x([f], W.prototype, `m_eRecordingSetting`, void 0),
  x([f], W.prototype, `m_bGamepadMode`, void 0),
  x([f], W.prototype, `m_bControlsVisible`, void 0),
  x([f], W.prototype, `m_fnRenderGlyph`, void 0),
  x([f], W.prototype, `m_previousHighlightEntry`, void 0),
  x([f], W.prototype, `m_nextHighlightEntry`, void 0),
  x([f], W.prototype, `m_displayHighlightEntry`, void 0),
  x([f], W.prototype, `m_nRelativeTimeForDisplay`, void 0),
  x([f.ref], W.prototype, `m_rgClipOffsets`, void 0),
  x([f.ref], W.prototype, `m_phasePreview`, void 0),
  x([T], W.prototype, `SetVideoElement`, null),
  x([T], W.prototype, `OnInvalidateRecording`, null),
  x([b], W.prototype, `OnLoaderInitialized`, null),
  x([T], W.prototype, `OnInvalidate`, null),
  x([T], W.prototype, `OnTimelineLoaded`, null),
  x([T], W.prototype, `GetLiveEdgeMS`, null),
  x([T], W.prototype, `StopPlayback`, null),
  x([T], W.prototype, `TogglePlayPause`, null),
  x([b], W.prototype, `UpdateGlobalPlayTime`, null));
var pa = L.createContext({ timelinePlaybackCoordinator: null });
function ma(e) {
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
    [f] = L.useState(() => new W(i, r, n, o, s, c, u, d));
  ((0, L.useEffect)(() => {
    f.SetLoader(i);
  }, [f, i]),
    (0, L.useEffect)(() => {
      f.SetRecordingState(a);
    }, [f, a]),
    (0, L.useEffect)(() => {
      f.SetRecordingSetting(l);
    }, [f, l]),
    (0, L.useEffect)(() => {
      f.SetGetManifest(r);
    }, [f, r]),
    (0, L.useEffect)(() => {
      f.SetControlsVisible(o);
    }, [f, o]),
    (0, L.useEffect)(() => {
      f.SetGamepadMode(s);
    }, [f, s]),
    (0, L.useEffect)(() => {
      f.SetRenderGlyph(c);
    }, [f, c]),
    (0, L.useEffect)(() => {
      f.SetClipOffsets(d);
    }, [f, d]),
    (0, L.useEffect)(() => () => f.dispose(), [f]));
  let p = L.useMemo(() => ({ timelinePlaybackCoordinator: f }), [f]);
  return (0, U.jsx)(pa.Provider, { value: p, children: t });
}
function G() {
  return (0, L.useContext)(pa).timelinePlaybackCoordinator;
}
function ha() {
  let e = G();
  return [A(() => e?.GetPhasePreview() || null), (t) => e?.SetPhasePreview(t)];
}
var ga = `-z6QUhW0BuI-`,
  _a = `EQ4TcbQ23mE-`,
  va = `_1SMhCEq4AkI-`,
  ya = `kkFDcE4F2W8-`,
  ba = `YscTTqT4K6I-`,
  xa = `T4Y0jki8FF0-`;
function Sa(e) {
  let {
    entry: n,
    strMarkerIcon: r,
    onClick: i,
    onMouseEnter: a,
    onMouseLeave: o,
    onContextMenu: s,
    classNames: c,
    style: l,
    faded: u,
    bSelectedMarker: d,
  } = e;
  return (0, U.jsx)(`div`, {
    style: l ?? {},
    className: t(c, { [_a]: !0, [ga]: d, [ya]: u }),
    onClick: (e) => {
      i && i(e);
    },
    onContextMenu: s,
    onMouseEnter: a,
    onMouseLeave: o,
    children: (0, U.jsx)(Ca, { entry: n, strMarkerIcon: r }),
  });
}
function Ca(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r = G().GetGameID();
  return Li(t)
    ? (0, U.jsx)(wa, { achievementEntry: t, strGameID: r })
    : Ri(t)
      ? (0, U.jsx)(Da, {})
      : On(n)
        ? (0, U.jsx)(Ta, { entry: t, strMarkerIcon: n })
        : (0, U.jsx)(Oa, { strMarkerIcon: n, strGameID: r });
}
function wa(e) {
  let { achievementEntry: t, strGameID: n } = e,
    r = Hn(new Yi(n).GetAppID(), t.achievement_name),
    i,
    a;
  if (r) ((i = `white`), (a = (0, U.jsx)(`img`, { src: r.iconURL })));
  else {
    let e = En();
    ((i = bn(e.color)), (a = e.func({})));
  }
  return (0, U.jsx)(`div`, { className: ba, style: { color: i }, children: a });
}
function Ta(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r,
    i;
  zi(t) ? ((r = Tn()), (i = va)) : (r = wn(n));
  let a = bn(r.color);
  return (0, U.jsx)(Aa, {
    color: a,
    children: (0, U.jsx)(`div`, { className: i, children: r.func({}) }),
  });
}
function Ea(e) {
  let { icon: t, className: n } = e;
  return wn(t).func({ className: n });
}
function Da(e) {
  let t = wn(`steam_invalid`),
    n = bn(t.color);
  return (0, U.jsx)(Aa, {
    color: n,
    children: (0, U.jsx)(`div`, { children: t.func({}) }),
  });
}
function Oa(e) {
  let { strMarkerIcon: t, strGameID: n } = e;
  return (0, U.jsx)(Aa, { children: (0, U.jsx)(ka, { icon: t, gameID: n }) });
}
function ka(e) {
  let { icon: n, gameID: r, className: i } = e,
    a = Mn(new Yi(r).GetAppID(), n);
  if (On(n)) return (0, U.jsx)(Ea, { ...e });
  if (a === null) return null;
  if (a === void 0) {
    let e = Dn();
    return (0, U.jsx)(`div`, { className: i, children: e.func({}) });
  }
  let o = ``;
  return (
    (o = typeof a == `string` ? a : new XMLSerializer().serializeToString(a)),
    (0, U.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      className: t(i, xa),
      children: (0, U.jsx)(`g`, { dangerouslySetInnerHTML: { __html: o } }),
    })
  );
}
function Aa(e) {
  let { children: t, color: n } = e;
  return (0, U.jsx)(`div`, {
    className: void 0,
    children: (0, U.jsx)(`div`, {
      className: ba,
      style: n ? { color: n } : null,
      children: t,
    }),
  });
}
var ja = `bDOiLLvSs2Y-`,
  Ma = `kcQuGr4J3rc-`,
  Na = `j-2U-sbnQJU-`,
  Pa = `_6l4s8j-Bcq8-`,
  Fa = `_8YeucRtc8oU-`,
  Ia = `ZAjnqtDcso0-`,
  La = `vhGz8D5Y1Bk-`,
  Ra = `OMn6m4jRit8-`,
  za = `H-FSa2NK0ko-`,
  Ba = `EkzDm2rgmn4-`,
  Va = `_7rO2L4URLVo-`,
  Ha = `UMVMer37ORc-`,
  Ua = `cyiE161LN-s-`,
  Wa = `Vert6EPn2bo-`,
  Ga = `-BKlW5DP2XE-`,
  Ka = `wvlXf51vGb4-`,
  qa = `S7iF3xbHMfk-`,
  Ja = `SPq-vUvAUJ0-`,
  Ya = `p3cd5ToZ5HI-`,
  Xa = { nBeforeMS: 0, nAfterMS: 12e3 },
  K = L.createContext({
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
function Za() {
  let e = (0, L.useContext)(K);
  return { nGlobalStartMS: e.globalStartMS, nGlobalEndMS: e.globalEndMS };
}
function Qa() {
  return (0, L.useContext)(K).globalStartMS;
}
function $a() {
  return (0, L.useContext)(K).globalEndMS;
}
function eo() {
  return (0, L.useContext)(K).setRange;
}
function to() {
  return (0, L.useContext)(K).setStartMS;
}
function no() {
  return (0, L.useContext)(K).setEndMS;
}
function ro() {
  let e = (0, L.useContext)(K);
  return {
    selectedMarker: e.selectedMarker,
    setSelectedMarker: e.setSelectedMarker,
  };
}
function io() {
  let e = (0, L.useContext)(K);
  return !isNaN(e.globalStartMS?.valMS) && !isNaN(e.globalEndMS?.valMS);
}
function ao() {
  return (0, L.useContext)(K).clearSelection;
}
function oo() {
  let e = eo(),
    t = to(),
    n = no(),
    r = Za(),
    i = co(),
    a = so();
  return L.useCallback(
    (o, s, c, l) => {
      if (c === void 0 && l === void 0) return;
      let u = r.nGlobalStartMS !== void 0 || r.nGlobalEndMS !== void 0,
        d = c || r.nGlobalStartMS,
        f = l || r.nGlobalEndMS;
      d &&
        f &&
        f.valMS <= d.valMS &&
        (c === void 0 ? (d = void 0) : (f = void 0));
      let p = Xa.nBeforeMS + Xa.nAfterMS;
      (d === void 0 && (d = V(f.valMS - p)),
        f === void 0 && (f = V(d.valMS + p)));
      let m = d != r.nGlobalStartMS,
        h = f != r.nGlobalEndMS;
      (m && h ? e(s, d, f) : m ? t(s, d) : h && n(s, f),
        !u && m && h && i == 0 && a());
    },
    [r, e, t, n, i, a],
  );
}
function so() {
  return (0, L.useContext)(K).zoomIntoSelection;
}
function co() {
  return (0, L.useContext)(K).selectionZoomCount;
}
function lo(e) {
  let t = (0, L.useContext)(K),
    n = t.selectionZoomCount,
    r = t.globalStartMS,
    i = t.globalEndMS,
    a = (0, L.useRef)(n),
    o = (0, L.useRef)(null);
  ((o.current = e),
    (0, L.useEffect)(() => {
      if (!o.current) return;
      let e = !isNaN(r?.valMS) && !isNaN(i?.valMS);
      (a.current == n && e) ||
        ((a.current = n), e && n ? o.current(r, i) : o.current(null, null));
    }, [n, r, i, a, o]));
}
var uo = 5e3,
  fo = 3e5,
  po = 1e3,
  mo = 10,
  ho = 10,
  q = (function (e) {
    return (
      (e.Playhead = `Playhead`),
      (e.RangeLeft = `RangeLeft`),
      (e.RangeRight = `RangeRight`),
      (e.Highlight = `Highlight`),
      e
    );
  })({}),
  go = class {
    m_fnUnregisterFromLoader;
    m_loader;
    m_maskBounds = [-1, -1];
    m_eventTarget;
    constructor(e, t) {
      (ce(this), (this.m_loader = e), (this.m_eventTarget = t));
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
      return this.m_loader.GetStateDescriptionAtGlobalMS(V(e));
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
  J = class {
    m_playbackCoordinator;
    m_fnUnregisterPlaybackCoordinator;
    m_refTimelineParentCtn;
    m_timelineMask;
    m_durationMS = 0;
    m_mapTimelineClips = f.map([], { deep: !1 });
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
    m_mapTimelineEntries = f.map([], { deep: !1 });
    m_bInitialized = !1;
    m_eThumbnailComponent = null;
    m_nGlobalRelativeThumbnailPositionPX = void 0;
    m_thumbnailHighlightEntry = void 0;
    m_phaseToHighlight = void 0;
    constructor(e, t, n) {
      (ce(this),
        (this.m_playbackCoordinator = t),
        (this.m_timelineMask = new go(e, this)),
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
      (N(`OnTimelineLoaded`, e),
        this.FindTimelineOffsets(e)
          ? this.ComputeEntriesForTimeline(e)
          : F(`Missing timeline offset metadata for`, e));
    }
    OnInvalidate(e) {
      N(`on invalidate`, e);
      let t = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
        n = t - this.m_durationMS,
        i = this.m_durationMS <= 0,
        a;
      this.m_durationMS = t;
      let o = this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
      if (n > 0 && i) this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (n > 0 && !this.m_bAutoScrollPaused && !o)
        this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (n < 0 && this.m_msVisible > t)
        ((this.m_msVisible = this.ComputeDefaultMSVisible()),
          this.ScrollToOffset(0));
      else if (n < 0) {
        let e = this.FindClosestTimelineStartForOffsetPX(this.m_scrollLeftPX);
        if (e) {
          let t = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS),
            n = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - t);
          a = { strTimelineID: e.timelineID, nTimelineOffsetMS: n };
        }
      }
      let s = this.m_timelineMask.GetTimelines(),
        c = 0;
      if (this.BInitialized() && e) {
        let t = s.findIndex((t) => t.metadata.timeline_id === e);
        t >= 0 && (c = t);
      }
      if (
        ((this.m_rgTimelineOffsets = s.map((e, t) =>
          t >= c ? this.ComputeTimelineOffset(e) : this.m_rgTimelineOffsets[t],
        )),
        a)
      ) {
        let e = this.FindTimelineOffsets(a.strTimelineID);
        if (e) {
          let t = e.globalOffsetMS + a.nTimelineOffsetMS,
            n = r(
              this.ConvertGlobalMSToGlobalPXOffset(t),
              0,
              this.GetMaxScrollLeftPX(),
            );
          this.ScrollToOffset(n);
        }
      }
      s.forEach((e, t) => {
        t >= c && this.ComputeEntriesForTimeline(e.metadata.timeline_id);
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
        t = ho * (this.m_rgTimelineOffsets.length - 1),
        n = Math.max(1, this.m_scrollWindowWidth - t - e),
        r = Math.ceil(
          ((e + t) * this.m_durationMS) / (this.m_scrollWindowWidth - (e + t)),
        ),
        i = po * n;
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
          ho * (this.m_rgTimelineOffsets.length - 1) +
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
      return ho;
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
      this.m_scrollLeftPX = r(e, 0, this.GetMaxScrollLeftPX());
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
    SetAutoScrollPauseTimeout(e = uo) {
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
        e * ho +
        this.ConvertDurationMSToDeltaPX(t.globalOffsetMS + t.nDurationMS)
      );
    }
    GetOverscanWidth() {
      return (this.GetScrollWindowWidth() * mo) / 100;
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
      let e = r(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
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
      t < 0 && (t = w(this.m_rgTimelineOffsets, (t) => e - t.globalOffsetMS));
      let n = t * ho;
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
      return w(
        this.m_rgTimelineOffsets,
        (t) =>
          e -
          (this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS) +
            this.ConvertDurationMSToDeltaPX(t.nDurationMS)),
      );
    }
    FindIndexOfClosestTimelineStartForOffsetPX(e) {
      return w(
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
(x([f], J.prototype, `m_durationMS`, void 0),
  x([f], J.prototype, `m_scrollLeftPX`, void 0),
  x([f], J.prototype, `m_scrollWindowWidth`, void 0),
  x([f], J.prototype, `m_scrollWindowOffsetPX`, void 0),
  x([f], J.prototype, `m_bAutoScrollPaused`, void 0),
  x([f], J.prototype, `m_autoScrollPauseTimeout`, void 0),
  x([f], J.prototype, `m_msVisible`, void 0),
  x([f.ref], J.prototype, `m_rgTimelineOffsets`, void 0),
  x([f], J.prototype, `m_bInitialized`, void 0),
  x([f], J.prototype, `m_eThumbnailComponent`, void 0),
  x([f], J.prototype, `m_nGlobalRelativeThumbnailPositionPX`, void 0),
  x([f], J.prototype, `m_thumbnailHighlightEntry`, void 0),
  x([f], J.prototype, `m_phaseToHighlight`, void 0),
  x([b], J.prototype, `OnLoaderInitialized`, null),
  x([b], J.prototype, `InitDefaultsIfReady`, null),
  x([b], J.prototype, `OnInvalidate`, null),
  x([b], J.prototype, `ZoomIn`, null),
  x([b], J.prototype, `ZoomOut`, null),
  x([b], J.prototype, `SetTempZoomScale`, null),
  x([b], J.prototype, `ClearTempZoomScale`, null),
  x([b], J.prototype, `UpdateClipSummaries`, null),
  x([T], J.prototype, `BReachedMaxScroll`, null),
  x([T], J.prototype, `BReachedMinScroll`, null));
var _o = L.createContext(null);
function vo(e) {
  let {
      loader: t,
      playbackCoordinator: n,
      children: r,
      clipSummaries: i,
      refTimelineParentCtn: a,
    } = e,
    [o, s] = (0, L.useState)(null);
  return (
    (0, L.useEffect)(() => {
      if (!t) return;
      let e = new J(t, n, i);
      return (s(e), () => e.Close());
    }, [t]),
    (0, L.useEffect)(() => {
      o && o.UpdateClipSummaries(i);
    }, [o, i]),
    (0, L.useEffect)(() => {
      o && a && o.SetTimelineParentCtnRef(a.current);
    }, [o, a]),
    bo(o),
    yo(o),
    o ? (0, U.jsx)(_o.Provider, { value: o, children: r }) : null
  );
}
function yo(e) {
  lo(
    L.useCallback(
      (t, n) => {
        if (!e) return;
        if (!t || !n) {
          e.ClearTempZoomScale();
          return;
        }
        let r = Math.floor((n.valMS - t.valMS) * 0.1),
          i = n.valMS - t.valMS;
        i < fo * 0.9 && (r = Math.floor((fo - i) / 2));
        let a = t.valMS - r,
          o = n.valMS + r;
        e.SetTempZoomScale(a, o);
      },
      [e],
    ),
  );
}
function bo(e) {
  let t = io();
  (0, L.useEffect)(() => {
    e && e.SetUserIsClipping(t);
  }, [e, t]);
}
function Y() {
  return (0, L.useContext)(_o);
}
var xo = `BAvp4rqoXrI-`,
  So = `MvaB420caso-`,
  Co = `KHooprC7Eh8-`,
  wo = `S49EhbfI3MU-`,
  To = `_5URRAlchke4-`,
  Eo = 20,
  Do = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
  Oo = L.memo(function (e) {
    let t = Y(),
      n = A(() => t.GetVisibleTimelines());
    return (0, U.jsx)(U.Fragment, {
      children: n.map((e) =>
        (0, U.jsx)(
          ko,
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
  ko = L.memo(function (e) {
    let {
        msVisibleStart: t,
        msTimelineStart: n,
        pxVisibleDuration: r,
        pxVisibleStart: i,
      } = e,
      { msTickSpacing: a, pxTickSpacing: o } = jo(),
      s = Y(),
      c = Math.ceil((t - n) / a),
      l = n + c * a,
      u = s.ConvertGlobalMSToGlobalPXOffset(l),
      d = (0, L.useMemo)(() => {
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
      ? (0, U.jsxs)(U.Fragment, {
          children: [
            (0, U.jsx)(`div`, {
              className: xo,
              style: { transform: `translateX(${i}px)`, width: r },
            }),
            d.map((e) =>
              (0, U.jsx)(
                Ao,
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
function Ao(e) {
  let { globalOffsetPX: n, timelineRelativeIndex: r } = e,
    i = r % Eo === 0 ? wo : To;
  return (0, U.jsx)(`div`, {
    className: So,
    style: { transform: `translateX(${n}px)` },
    children: (0, U.jsx)(`div`, { className: t(Co, i) }),
  });
}
function jo() {
  let e = Y(),
    t = A(() => e.GetCurrentZoomScale()),
    n = (e) => Math.abs(300 - e / t),
    r = Do.reduce((e, t) => (n(e) - n(t) < 0 ? e : t)) / Eo;
  return { msTickSpacing: r, pxTickSpacing: r / t };
}
var Mo = `pOdfi3iG-Qk-`,
  No = `RgeHxBkcuYI-`,
  Po = `bEIIxIyUIRw-`,
  Fo = `vfkh8xz76sA-`,
  Io = `Z4wMZP9AtrA-`;
function Lo(e, t) {
  return !(e.nStart >= t.nEnd || e.nEnd <= t.nStart);
}
var Ro = class {
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
        if (Lo(t, e)) return !1;
      }
      return (this.m_reservations.splice(n, 0, t), !0);
    }
  },
  zo = (0, L.createContext)({});
function Bo() {
  return (0, L.useContext)(zo);
}
var Vo = `DzuECh3SiO8-`,
  Ho = `OzJbKH40jVQ-`,
  Uo = `CcS1u3HYQgY-`,
  Wo = `Q2--kfqg0oc-`,
  Go = `GBjFGdfE0Qc-`,
  Ko = `tg-75b6-Ee4-`,
  qo = `-BFT24TRL3c-`;
function Jo(e) {
  let {
      closeModal: t,
      strTimelineID: n,
      entry: r,
      playbackCoordinator: i,
      fnClearSelection: a,
    } = e,
    [o, s] = L.useState(r.title || ``),
    [c, l] = L.useState(r.description || ``),
    u = nn();
  return u.bLoading
    ? (0, U.jsx)(rn, {
        state: u,
        strDialogTitle: O(`#Marker_Dialog`),
        closeModal: t,
      })
    : (0, U.jsxs)(Ke, {
        strTitle: O(`#Marker_Dialog`),
        strMiddleButtonText: O(`#Marker_Action_Delete`),
        onCancel: t,
        onOK: async () => {
          (u.fnSetLoading(!0),
            (await i.UpdateUserMarker(n, r, o, c))
              ? t()
              : (u.fnSetError(!0), u.fnSetStrError(O(`#Marker_UpdateFailed`))));
        },
        children: [
          (0, U.jsx)(ke, {
            type: `text`,
            value: o,
            onChange: (e) => s(e.currentTarget.value),
            label: O(`#Marker_Title`),
          }),
          (0, U.jsx)(ke, {
            type: `text`,
            value: c,
            onChange: (e) => l(e.currentTarget.value),
            label: O(`#Marker_Description`),
          }),
        ],
      });
}
var Yo = `YwXy-p3jOGA-`,
  Xo = `DYV4-rbHkCQ-`,
  Zo = `NodVylkJJmk-`,
  Qo = `NBLBqJkBBNA-`,
  $o = `muIMDgnfzVw-`,
  es = class {
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
        gameID: new Yi(this.m_strGameID),
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
          Un(
            new Yi(this.m_strGameID),
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
        let { fnDeleteClip: e } = zn();
        await e(this.m_creationResult.clipSummary.clip_id);
      }
    }
  };
(x([T], es.prototype, `create`, null), x([T], es.prototype, `cleanup`, null));
function ts(e, t, n, r, i, a, o, s, c, l, u) {
  return new es(
    (s, c) => ns(e, t, n, r, i, a, o, s, c),
    s / 1e3,
    n,
    e,
    t,
    c,
    l,
    u,
  ).Request();
}
async function ns(e, t, n, r, i, a, o, s, c) {
  let { fnSaveClip: l } = Rn();
  F(`start ${r} @ ${i} upto ${a} @ ${o}`);
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
      F(d ? `Clip ${d.clip_id} created` : `Clip was not created: ${f}`), u
    );
  } catch (e) {
    P(e);
  }
  return { result: 2 };
}
function rs(e, t, n, r) {
  let i = n + 1,
    a = i + r - 2;
  return ts(
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
var is = `u-2dfrrZjSE-`,
  as = L.createContext({
    bInContainer: !1,
    bContainerFocus: !1,
    nMouseClientXPX: null,
    globalMouseXPX: null,
    scrollWindowMouseXPX: null,
    fnRegisterMouseEvent: null,
    bContextMenuOpen: !1,
    setContextMenuOpen: () => {},
  });
function os(e) {
  let { children: t } = e,
    [n, i] = (0, L.useState)(!1),
    [a, o] = (0, L.useState)(!1),
    [s, c] = (0, L.useState)(!1),
    [l, u] = (0, L.useState)(),
    d = (0, L.useRef)(void 0),
    f = Y(),
    p = A(() => f.GetScrollableWidthPX()),
    m = A(() => f.GetVisualWindowStartPX()),
    h = A(() => f.GetScrollWindowWidth()),
    g = A(() => f.GetScrollWindowOffset()),
    _ = A(() => f.GetTimelineMarginWidth()),
    v = L.useMemo(() => {
      if (d.current) {
        let e = m - g - _;
        return qi(r(l + e, 0, p));
      }
      return qi(0);
    }, [_, l, g, m, p]),
    y = L.useMemo(() => {
      if (d.current) {
        let e = d.current.getBoundingClientRect(),
          t = p > h ? g : e.x;
        return Ji(r(l - t, 0, h));
      }
      return Ji(0);
    }, [l, g, h, p]),
    b = (0, L.useCallback)(
      (e, t) => (
        d.current && d.current.addEventListener(e, t),
        () => d.current?.removeEventListener(e, t)
      ),
      [],
    ),
    ee = (0, L.useCallback)(() => i(!0), []),
    x = (0, L.useCallback)(() => i(!1), []),
    te = (0, L.useCallback)((e) => u(e.clientX), []),
    ne = (0, L.useCallback)((e) => o(!0), []),
    re = (0, L.useCallback)((e) => o(!1), []);
  (0, L.useEffect)(() => {
    let e = ve(d.current);
    return (
      e.addEventListener(`mousemove`, te),
      () => e.removeEventListener(`mousemove`, te)
    );
  }, [te]);
  let S = (0, L.useMemo)(
    () => ({
      bContainerFocus: a,
      bInContainer: n,
      nMouseClientXPX: l,
      globalMouseXPX: v,
      scrollWindowMouseXPX: y,
      fnRegisterMouseEvent: b,
      bContextMenuOpen: s,
      setContextMenuOpen: c,
    }),
    [a, n, s, l, v, y, b],
  );
  return (0, U.jsx)(as.Provider, {
    value: S,
    children: (0, U.jsx)(`div`, {
      ref: d,
      onMouseOver: ne,
      onFocus: ne,
      onMouseOut: re,
      onBlur: re,
      onMouseEnter: ee,
      onMouseLeave: x,
      className: is,
      children: t,
    }),
  });
}
function ss() {
  return (0, L.useContext)(as);
}
function cs() {
  return ss().globalMouseXPX;
}
function ls() {
  return ss().scrollWindowMouseXPX;
}
function us() {
  return ss().bInContainer;
}
function ds() {
  return ss().bContainerFocus;
}
function fs() {
  let e = ss();
  return [e.bContextMenuOpen, e.setContextMenuOpen];
}
function ps(e, t) {
  let n = ss().fnRegisterMouseEvent,
    r = (0, L.useRef)(void 0),
    i = (0, L.useCallback)(() => {
      r.current = n(e, t);
    }, [n, t, e]),
    a = (0, L.useCallback)(() => {
      r.current && r.current();
    }, []);
  (0, L.useEffect)(() => (i(), () => a()), [i, a]);
}
function ms() {
  let e = Y(),
    t = G(),
    n = oo(),
    r = A(() => !t.ShouldModeShowClipControls()),
    i = Wn(),
    { onMarkerCreated: a, onNavigateToClip: o } = Bo(),
    [s, c] = fs();
  return L.useCallback(
    (s, l, u, d) =>
      r || i
        ? null
        : Oe(
            (0, U.jsx)(hs, {
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
function hs(e) {
  let {
      playbackCoordinator: n,
      timelineView: r,
      nGlobalOffsetMS: i,
      fnSetSelectionClipRange: a,
      isCurrentPlayback: o,
      onMarkerCreated: s,
      onNavigateToClip: c,
      onContextMenuOpenChange: l,
    } = e,
    u = A(() => n.GetClipsAtGlobalMS(i)),
    d = gs(r);
  (0, L.useEffect)(() => (l(!0), () => l(!1)), [l]);
  let f = (() => {
      let { strTimelineID: e, nTimelineOffsetMS: t } =
        n.ConvertGlobalOffsetToTimelineRelativeOffset(i.valMS);
      if (!e) return null;
      let r = n.GetLoader().GetTimelineData(e);
      if (!r) return null;
      let a = w(r.m_rgPhases, (e) => t.valMS - parseInt(e.time));
      if (a < 0) return null;
      let o = r.m_rgPhases[a];
      return t.valMS >= parseInt(o.time) &&
        t.valMS <= parseInt(o.time) + parseInt(o.duration)
        ? { strTimelineID: e, phase: o }
        : null;
    })(),
    p = (e) => {
      (n.AddUserMarkerAtGlobalMS(
        i,
        `/GameRecording/AddMarker/TimelineCtxMenu`,
        (t, n) => {
          s && s(t, n, e);
        },
      ),
        n.SetPlaytimeFromGlobalMS(i),
        n.FocusGlobalMS(i));
    },
    m = () => {
      (a(n, 4, i, void 0), n.SetPlaytimeFromGlobalMS(i), n.FocusGlobalMS(i));
    },
    h = () => {
      (a(n, 4, void 0, i), n.SetPlaytimeFromGlobalMS(i), n.FocusGlobalMS(i));
    },
    g = () => {
      u.length > 0 &&
        (B.ReportTrackedAction(
          `/GameRecording/Tooltip/ViewClip/TimelineCtxMenu`,
        ),
        c && c(u[0].strClipID));
    },
    _ = () => {
      let { strTimelineID: e, nTimelineOffsetMS: t } =
        n.ConvertGlobalOffsetToTimelineRelativeOffset(i.valMS);
      (n.GetLoader().GetTimelineStartBeforeGlobalZeroMS(e),
        Bn(n.GetGameID(), e, t, n.GetClipID()));
    },
    v = () => {
      if (!f) return;
      let { phase: e, strTimelineID: t } = f;
      rs(n.GetGameID(), t, parseInt(e.time), parseInt(e.duration));
    },
    y = (e) => r.SetPhaseToHighlight(e);
  return (
    (0, L.useEffect)(() => () => r.SetPhaseToHighlight(null), [r]),
    (0, U.jsxs)(Fe, {
      refInstance: d,
      children: [
        (0, U.jsx)(D, {
          onSelected: p,
          className: Yo,
          children: (0, U.jsxs)(`div`, {
            className: t(Xo, Zo),
            children: [
              (0, U.jsx)(ut, {}),
              O(
                o
                  ? `#Playback_UserSelectionControls_AddUserMarker`
                  : `#TimelineDialog_AddMarker`,
              ),
            ],
          }),
        }),
        (0, U.jsx)(D, {
          onSelected: _,
          className: Yo,
          children: (0, U.jsxs)(`div`, {
            className: t(Xo, Qo),
            children: [
              (0, U.jsx)(Lt, {}),
              O(
                o
                  ? `#Playback_UserSelectionControls_TakeScreenshot`
                  : `#TimelineDialog_TakeScreenshot`,
              ),
            ],
          }),
        }),
        (0, U.jsx)(D, {
          onSelected: m,
          className: Yo,
          children: (0, U.jsxs)(`div`, {
            className: t(Xo, $o),
            children: [
              (0, U.jsx)(ot, { direction: `left` }),
              O(
                o
                  ? `#Playback_UserSelectionControls_SetClipStart`
                  : `#TimelineContext_SetClipStart`,
              ),
            ],
          }),
        }),
        (0, U.jsx)(D, {
          onSelected: h,
          className: Yo,
          children: (0, U.jsxs)(`div`, {
            className: t(Xo, $o),
            children: [
              (0, U.jsx)(ot, { direction: `right` }),
              O(
                o
                  ? `#Playback_UserSelectionControls_SetClipEnd`
                  : `#TimelineContext_SetClipEnd`,
              ),
            ],
          }),
        }),
        !!f &&
          (0, U.jsx)(D, {
            onSelected: v,
            className: `YwXy-p3jOGA-`,
            onMouseOver: () => y([f.strTimelineID, f.phase.time]),
            onMouseLeave: () => y(null),
            children: (0, U.jsxs)(`div`, {
              className: t(`DYV4-rbHkCQ-`, `cTZ4oCV0rfc-`),
              children: [(0, U.jsx)(Rt, {}), O(`#TimelineDialog_ClipPhase`)],
            }),
          }),
        u.length > 0 &&
          (0, U.jsx)(D, {
            onSelected: g,
            className: `YwXy-p3jOGA-`,
            children: (0, U.jsxs)(`div`, {
              className: t(`DYV4-rbHkCQ-`, `opmNw-e94ys-`),
              children: [(0, U.jsx)(Te, {}), O(`#TimelineDialog_ViewClip`)],
            }),
          }),
      ],
    })
  );
}
function gs(e) {
  let t = A(() => e.GetAutoScrollPauseTimeout()),
    n = A(() => e.GetVisualWindowStartPX()),
    r = (0, L.useRef)(void 0),
    i = (0, L.useRef)(void 0);
  return (
    (0, L.useEffect)(() => {
      r.current && i.current ? i.current.Hide() : (r.current = !0);
    }, [n]),
    (0, L.useEffect)(() => {
      e.SetAutoScrollPaused(!0);
    }, [e]),
    (0, L.useEffect)(() => {
      t && e.ClearAutoScrollPauseTimeout();
    }, [t, e]),
    i
  );
}
function _s() {
  let e = Y(),
    t = G(),
    { setSelectedMarker: n } = ro(),
    r = ao(),
    { onNavigateToClip: i, onNavigateToScreenshot: a } = Bo(),
    o = Wn(),
    s = A(() => !t.ShouldModeShowClipControls());
  return L.useCallback(
    (c, l, u) => {
      s ||
        Oe(
          (0, U.jsx)(vs, {
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
function vs(e) {
  let {
      playbackCoordinator: n,
      timelineView: r,
      markerInfo: i,
      setSelectedMarker: a,
      clearRange: o,
      bLowDiskSpace: s,
      onNavigateToClip: c,
      onNavigateToScreenshot: l,
    } = e,
    u = A(() => r.ConvertGlobalMSToClipOrNone(i.nGlobalMS.valMS)),
    d = A(() =>
      n.ConvertGlobaOffsetToRecordingAndRelativeOffset(i.nGlobalMS.valMS),
    ),
    f = gs(r),
    p = (e) => {
      let t = ys,
        r = bs;
      Fi(i.entry) && ((t = 0), (r = parseInt(i.entry.duration)));
      let [o, s] = n
        .GetLoader()
        .CreateGlobalRangeForTimeline(i.strTimelineID, i.nGlobalMS.valMS, t, r);
      (n.SetPlaytimeFromGlobalMS(V(o)),
        a?.(i.entry.id, i.strTimelineID, o, s),
        B.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/ClipFromHighlight`,
        ),
        e.stopPropagation());
    },
    m = () => {
      u &&
        (B.ReportTrackedAction(
          `/GameRecording/MarkerCtxMenu/ViewClip/${i.entry.type}`,
        ),
        c && c(u.clipID));
    },
    h = (e) => {
      if (!zi(i.entry)) return;
      B.ReportTrackedAction(
        `/GameRecording/HighlightCtxMenu/Marker/Edit/${i.entry.type}`,
      );
      let t = (0, U.jsx)(Jo, {
        entry: i.entry,
        playbackCoordinator: n,
        fnClearSelection: o,
        strTimelineID: i.strTimelineID,
      });
      (Ge(t, E(e)), e.stopPropagation(), e.preventDefault());
    },
    g = (e) => {
      zi(i.entry) &&
        (B.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/Marker/Delete/${i.entry.type}`,
        ),
        n.RemoveUserMarker(i.strTimelineID, i.entry.id));
    },
    _ = () => {
      Bi(i.entry) &&
        i.entry?.handle &&
        (B.ReportTrackedAction(`/GameRecording/HighlightCtxMenu/Screenshot`),
        l(r.GetGameID(), i.entry.handle));
    },
    v = [];
  return (
    zi(i.entry) &&
      v.push(
        (0, U.jsx)(
          D,
          {
            onSelected: h,
            className: Vo,
            children: (0, U.jsxs)(`div`, {
              className: t(Ho, Uo),
              children: [(0, U.jsx)(Ct, {}), O(`#Marker_Action_Edit`)],
            }),
          },
          `edit`,
        ),
      ),
    d?.strRecordingID &&
      !s &&
      v.push(
        (0, U.jsx)(
          D,
          {
            onSelected: p,
            className: Vo,
            children: (0, U.jsxs)(`div`, {
              className: t(Ho, Wo),
              children: [(0, U.jsx)(st, {}), O(`#TimelineDialog_ClipVideo`)],
            }),
          },
          `clip`,
        ),
      ),
    Bi(i.entry) &&
      v.push(
        (0, U.jsx)(
          D,
          {
            onSelected: _,
            className: Vo,
            children: (0, U.jsxs)(`div`, {
              className: t(Ho, Ko),
              children: [
                (0, U.jsx)(_t, {}),
                O(`#TimelineDialog_ViewScreenshot`),
              ],
            }),
          },
          `view_screenshot`,
        ),
      ),
    u &&
      m &&
      v.push(
        (0, U.jsx)(
          D,
          {
            onSelected: m,
            className: Vo,
            children: (0, U.jsxs)(`div`, {
              className: t(Ho, qo),
              children: [(0, U.jsx)(It, {}), O(`#TimelineDialog_ViewClip`)],
            }),
          },
          `view_clip`,
        ),
      ),
    zi(i.entry) &&
      v.push(
        (0, U.jsx)(
          D,
          {
            onSelected: g,
            className: Vo,
            children: (0, U.jsxs)(`div`, {
              className: t(Ho, Go),
              children: [(0, U.jsx)(ze, {}), O(`#Marker_Action_Delete`)],
            }),
          },
          `delete`,
        ),
      ),
    v.length ? (0, U.jsx)(Fe, { refInstance: f, children: v }) : null
  );
}
var ys = 5e3,
  bs = 3e3,
  xs = 5e3;
function Ss(e) {
  let {
      markerInfo: n,
      view: r,
      coordinator: i,
      gameID: a,
      clipID: o,
      timelineID: s,
      faded: c,
    } = e,
    l = n.nGlobalMS,
    u = A(() => r.ConvertGlobalMSToGlobalPXOffset(l.valMS)),
    d = A(() => {
      let e = r.GetThumbnailComponent();
      return e && e !== q.Highlight;
    }),
    f = _s(),
    { selectedMarker: p } = ro(),
    m = n.entry?.id == p?.strEntryID && n.strTimelineID == p?.strTimelineID,
    { ref: h, ...g } = ws(r, n),
    _ = L.useCallback(
      (e) => {
        let t = l.valMS - xs,
          a = r.FindTimelineOffsets(s),
          o = Math.max(t, a.globalOffsetMS);
        (i.SetPlaytimeFromGlobalMS(V(o)),
          i.SetDisplayHighlightEntry(n.entry),
          e.stopPropagation(),
          B.ReportTrackedAction(`/GameRecording/Marker/Click/${n.entry.type}`));
      },
      [i, l.valMS, s, r, n],
    ),
    v = (e) => {
      (f(e, n, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 }),
        e.stopPropagation());
    },
    y = { transform: `translateX( calc( ${u}px - 50% ))` };
  return (0, U.jsxs)(`div`, {
    className: t(Mo, d && `fKVXzdV7f4k-`, c && `NF7Pk6zJyl4-`),
    style: y,
    ref: h,
    onContextMenu: v,
    ...g,
    children: [
      (0, U.jsx)(
        `div`,
        {
          className: t(No),
          children: (0, U.jsx)(
            Sa,
            {
              classNames: Po,
              entry: n.entry,
              strMarkerIcon: n.strMarkerIcon,
              faded: c,
              onClick: _,
              bSelectedMarker: m,
            },
            n.entry.id,
          ),
        },
        l.valMS,
      ),
      (0, U.jsx)(`div`, {
        className: Fo,
        children: (0, U.jsx)(`div`, { className: t(Io) }),
      }),
    ],
  });
}
var Cs = 150;
function ws(e, t) {
  let n = L.useRef(void 0),
    r = L.useRef(void 0),
    i = L.useCallback(
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
        (t.clientX < a - Cs || t.clientX > a + Cs) &&
          (e.SetThumbnailComponent(null),
          r.current && r.current(),
          (r.current = null));
      },
      [e],
    ),
    a = L.useCallback(
      (n) => {
        if (
          (e.SetThumbnailComponent(q.Highlight),
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
    o = L.useCallback(
      (t) => {
        let i = n.current.getBoundingClientRect(),
          a = i.left,
          o = i.right;
        t.clientX - a < 1 || o - t.clientX < 1
          ? (e.SetThumbnailComponent(null),
            r.current && r.current(),
            (r.current = null))
          : (le(n.current, t.relatedTarget) ||
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
    L.useEffect(() => () => r.current && r.current(), []),
    { ref: n, onMouseOver: a, onMouseLeave: o }
  );
}
var Ts = 16;
function Es(e) {
  switch (e.type) {
    case `achievement`:
      return 9e3;
    default:
      return e.priority;
  }
}
var Ds = L.memo(function (e) {
    let t = Y(),
      n = A(() => t.GetVisibleTimelines());
    return (0, U.jsx)(U.Fragment, {
      children: n.map((e) => (0, U.jsx)(As, { timeline: e }, e.timelineID)),
    });
  }),
  Os = { screenshot: 0, event: 0, achievement: 1, usermarker: 2 };
function ks(e, t) {
  if (Os[e.type] !== Os[t.type]) return Os[t.type] - Os[e.type];
  let n = Es(e),
    r = Es(t);
  return n == r
    ? e.time == t.time
      ? e.id.localeCompare(t.id)
      : parseInt(e.time) - parseInt(t.time)
    : r - n;
}
var As = L.memo(function (e) {
  let { timeline: t } = e,
    n = Y(),
    r = G(),
    i = A(() => n.GetVisibleTimelineHighlights(t.timelineID) || [])
      .slice()
      .sort(ks),
    a = A(() => n.GetTimelineOffsetMS(t.timelineID)),
    o = t.globalOffsetMS - a,
    s = r.GetGameID(),
    c = r.GetClipID(),
    l = new Ro(n.GetCurrentZoomScale() * Ts);
  return i.map((e, i) => {
    if (Ms(e) !== `highlight`) return null;
    let a = `${e.type}_${e.id}_${t.timelineID}_${i}`,
      u = js(t.timelineID, o, e),
      d = l.BAllowIcon(u.nGlobalMS.valMS);
    return (0, U.jsx)(
      Ss,
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
function js(e, t, n) {
  if (
    ![`event`, `usermarker`, `screenshot`, `achievement`, `error`].includes(
      n.type,
    )
  )
    return (
      N(
        `Unexpected timeline entry type ${n.type}, returning empty highlight marker`,
      ),
      null
    );
  let r = n,
    i = Li(r);
  return {
    entry: r,
    strMarkerIcon: i ? `steam_achievement` : r.icon,
    nMarkerPriority: Es(r),
    strTimelineID: e,
    strTitle: (!i && r.title) || ``,
    strDescription: (!i && r.description) || ``,
    nGlobalMS: V(parseInt(r.time) + t),
  };
}
function Ms(e) {
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
var Ns = `-X0PMxvY3QE-`,
  Ps = `cbzcIa1ocN4-`,
  Fs = `MMJtgRs0Os4-`,
  Is = `m6U62VPiE5I-`,
  Ls = `KT1NiRNa2wQ-`;
function Rs(e) {
  let { view: n, entry: r, nGlobalEntryEndMS: i, nGlobalTLStartMS: a } = e,
    o = G(),
    s = V(parseInt(r.time) + a.valMS),
    c = A(() => {
      let e = n.ConvertGlobalMSToGlobalPXOffset(s.valMS),
        t = n.GetVirtualWindowStartPX();
      return t < e ? e : t;
    }),
    l = A(() => {
      let e = n.ConvertGlobalMSToGlobalPXOffset(i.valMS),
        t = n.GetVirtualWindowEndPX();
      return t < e ? t : e;
    }),
    u = !!o.GetClipID(),
    d = { transform: `translateX( ${c}px )`, width: l - c },
    f = t({
      [Ls]: r.mode === Mi.Invalid,
      [Fs]: r.mode === Mi.Staging,
      [Is]: r.mode === Mi.Menus,
      [Ps]: r.mode === Mi.Playing,
    });
  return (0, U.jsx)(
    `div`,
    { className: t(Ns, f, u && `dM-k3XLATgY-`), style: d },
    r.id,
  );
}
var zs = L.memo(function (e) {
    let t = Y(),
      n = A(() => t.GetVisibleTimelines());
    return (0, U.jsx)(U.Fragment, {
      children: n.map((e) => (0, U.jsx)(Bs, { timeline: e }, e.timelineID)),
    });
  }),
  Bs = L.memo(function (e) {
    let { timelineID: t, globalOffsetMS: n, nDurationMS: r } = e.timeline,
      i = Y(),
      a = A(() => {
        let e = i.GetVisibleTimelineGameModes(t);
        return !e || e.length === 0
          ? [{ time: `0`, type: `gamemode`, mode: Mi.Invalid, id: `synthetic` }]
          : e;
      }),
      o = V(n + r),
      s = n - i.GetTimelineOffsetMS(t),
      c = [];
    for (let e = 0; e < a.length; e++) {
      let n = V(e < a.length - 1 ? parseInt(a[e + 1].time) + s : o.valMS - 1);
      c.push(
        (0, U.jsx)(
          Rs,
          {
            view: i,
            entry: a[e],
            nGlobalEntryEndMS: n,
            nGlobalTLStartMS: V(s),
          },
          `gameMode_${t}_${e}`,
        ),
      );
    }
    return (0, U.jsx)(U.Fragment, { children: c });
  }),
  Vs = `XVi5a5ZkmMc-`,
  Hs = `-nn0AHNIP3k-`,
  Us = `-IpQtGedcoc-`,
  Ws = `LsIeUCU634s-`,
  Gs = `QNUH0lZ0VfY-`,
  Ks = `wQLCIzL88LU-`,
  qs = `JtIym43tUFo-`,
  Js = `a23JQkVm40o-`,
  Ys = 500,
  Xs = (0, L.memo)(function (e) {
    let t = G(),
      n = A(() => t.GetHidePlayer()),
      [r, i] = (0, L.useState)({ bDragActive: !1, bPausedOnDragStart: !1 }),
      a = Y(),
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
      ? (0, U.jsx)(Qs, { setDragActive: i })
      : o
        ? (0, U.jsx)(Zs, { view: a, setDragActive: i })
        : (0, U.jsx)($s, { dragState: r, setDragActive: i });
  });
function Zs(e) {
  let { view: t, setDragActive: n } = e,
    r = A(() => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2);
  return (0, U.jsx)(ac, {
    playheadPosition: r,
    children: (0, U.jsx)(ec, { setDragActive: n, bDragActive: !1 }),
  });
}
var Qs = (0, L.memo)(function (e) {
    let { setDragActive: t } = e,
      n = Y(),
      r = A(() => n.GetScrollableWidthPX()),
      i = pe(100),
      a = (0, L.useCallback)(
        (e) => {
          n.GetAutoScrollPaused() || i(() => n.ScrollToOffset(e));
        },
        [i, n],
      );
    return (
      (0, L.useEffect)(() => n.ScrollToEnd(), [n]),
      (0, L.useEffect)(() => a(r), [r, a]),
      (0, U.jsx)(ac, {
        playheadPosition: r,
        children: (0, U.jsx)(ec, { setDragActive: t, bDragActive: !1 }),
      })
    );
  }),
  $s = (0, L.memo)(function (e) {
    let { dragState: n, setDragActive: r } = e,
      { bDragActive: i, bPausedOnDragStart: a } = n,
      o = G(),
      s = Y(),
      c = cs(),
      l = rc(ls(), s, i, c, o);
    return (
      (0, L.useEffect)(() => {
        if (!i) return;
        s.SetThumbnailPosition(l);
        let e = s.ConvertPXOffsetToGlobalMS(l, !1);
        if (!e) return;
        let t = o.GetLiveEdgeMS();
        o.SetPlaytimeFromGlobalMS(t.valMS < e ? t : V(e), a, !0, !0);
      }, [l, a, i, o, s]),
      (0, U.jsx)(`div`, {
        className: t(Gs, i && `FOu6nwXsE7c-`),
        children: (0, U.jsx)(ac, {
          className: i ? qs : void 0,
          playheadPosition: l,
          children: (0, U.jsx)(ec, { setDragActive: r, bDragActive: i }),
        }),
      })
    );
  }),
  ec = (0, L.memo)(function (e) {
    let { setDragActive: t, bDragActive: n } = e,
      r = Y(),
      i = (e) => {
        (n || r.SetThumbnailComponent(q.Playhead), e.stopPropagation());
      },
      a = (e) => {
        (n || r.SetThumbnailComponent(null), e.stopPropagation());
      };
    return (0, U.jsx)(`div`, {
      className: Js,
      onMouseOver: i,
      onMouseOut: a,
      onFocus: i,
      onBlur: a,
      children: (0, U.jsx)(tc, { setDragActive: t }),
    });
  }),
  tc = L.memo(function (e) {
    let { setDragActive: n } = e,
      r = G(),
      i = ms(),
      a = Y(),
      o = A(() => {
        let e = a.GetThumbnailComponent();
        return e === q.RangeLeft || e === q.RangeRight;
      }),
      s = (0, L.useCallback)(
        (e) => {
          if (e.button != 0) return;
          let t = E(e),
            i,
            o,
            s = () => {
              let e = r.GetGameRecordingVideo().IsPaused();
              (n({ bDragActive: !0, bPausedOnDragStart: e }),
                a.SetThumbnailComponent(q.Playhead),
                i());
            };
          (t.addEventListener(`mousemove`, s),
            (i = () => t.removeEventListener(`mousemove`, s)));
          let c = () => {
            (n({ bDragActive: !1, bPausedOnDragStart: !1 }),
              a.SetThumbnailComponent(null),
              i(),
              o());
          };
          (t.addEventListener(`mouseup`, c),
            (o = () => t.removeEventListener(`mouseup`, c)));
        },
        [r, n, a],
      ),
      c = (0, L.useCallback)(
        (e) => {
          let t = r.GetGlobalMSPlaytime();
          (i(e, t, !0, {
            bDisableMouseOverlay: !0,
            bForcePopup: !0,
            bAlwaysOnTop: !0,
          }),
            e.stopPropagation(),
            e.preventDefault());
        },
        [r, i],
      );
    return (0, U.jsx)(`div`, {
      className: t(Ws, o && `Twzqk-0-bXc-`),
      onMouseDown: s,
      onContextMenu: c,
      children: (0, U.jsx)(nc, {}),
    });
  });
function nc(e) {
  return (0, U.jsxs)(`svg`, {
    ...e,
    width: `12`,
    height: `32`,
    viewBox: `0 0 12 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, U.jsx)(`rect`, {
        x: `5`,
        y: `4`,
        width: `2`,
        height: `40`,
        fill: `currentColor`,
      }),
      (0, U.jsx)(`path`, {
        d: `M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function rc(e, t, n, i, a) {
  let o = (0, L.useRef)(void 0),
    s = A(() => t.GetScrollableWidthPX()),
    c = A(() => t.GetScrollWindowWidth()),
    [l, u] = (0, L.useState)(0),
    d = (0, L.useRef)(void 0),
    f = (0, L.useRef)(void 0),
    { clearPlaybackAnimation: p, startPlaybackAnimation: m } = ic(a, t, u);
  (0, L.useEffect)(
    () => () => {
      (d.current &&
        (cancelAnimationFrame(d.current),
        (d.current = null),
        (f.current = null)),
        p());
    },
    [p],
  );
  let h = L.useCallback(
    (e, t, n, i, a) => {
      if (a(t))
        (u(r(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(d.current),
          (d.current = null),
          (f.current = null));
      else {
        if (
          ((d.current &&= requestAnimationFrame((e) => h(e, t, n, i, a))),
          f.current)
        ) {
          let n = ((e - f.current) / Ys) * i;
          (t.ScrollBy(n), u((e) => r(e + n, 0, t.GetScrollableWidthPX())));
        }
        f.current = e;
      }
    },
    [u],
  );
  return (
    (0, L.useEffect)(() => {
      let a = c * (1 - qu),
        l = c * qu;
      if (
        (d.current &&
          (cancelAnimationFrame(d.current),
          (d.current = null),
          (f.current = null)),
        !n)
      )
        m();
      else if ((p(), e.valPX < l && !t.BReachedMinScroll())) {
        if (e.valPX <= o.current) {
          let n = e.valPX - l,
            i = r(Math.abs(n / l), 0, 1) * n;
          d.current = requestAnimationFrame((n) =>
            h(n, t, e.valPX, i, t.BReachedMinScroll),
          );
        }
        o.current = e.valPX;
      } else if (e.valPX > a && !t.BReachedMaxScroll()) {
        if (e.valPX >= o.current) {
          let n = e.valPX - a,
            i = r(Math.abs(n / (c - a)), 0, 1) * n;
          d.current = requestAnimationFrame((n) =>
            h(n, t, e.valPX, i, t.BReachedMaxScroll),
          );
        }
        o.current = e.valPX;
      } else u(r(i.valPX, 0, s));
    }, [n, p, i.valPX, c, s, h, e.valPX, m, t]),
    l
  );
}
function ic(e, t, n) {
  let r = (0, L.useRef)(void 0),
    i = e.GetGameRecordingVideo(),
    a = (0, L.useRef)(void 0),
    o = (0, L.useRef)(void 0),
    s = (0, L.useRef)(void 0),
    c = (0, L.useRef)(void 0),
    l = (0, L.useCallback)(() => {
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
    clearPlaybackAnimation: (0, L.useCallback)(() => {
      (r.current && cancelAnimationFrame(r.current),
        (r.current = null),
        (a.current = null),
        (o.current = null),
        (s.current = null));
    }, []),
    startPlaybackAnimation: (0, L.useCallback)(() => {
      r.current ||= requestAnimationFrame(l);
    }, [l]),
  };
}
function ac(e) {
  let { className: n, playheadPosition: r, children: i } = e;
  return (0, U.jsx)(`div`, {
    className: t(Ks, n),
    style: { transform: `translateX( calc(${r}px - 50% ))` },
    children: i,
  });
}
var oc = ie({
    AddMarker: () => Rc,
    Button: () => Lc,
    CreateClipButton: () => Bc,
    DeleteMarker: () => Hc,
    Description: () => bc,
    DescriptionBlock: () => vc,
    Duration: () => Xc,
    EditMarker: () => Vc,
    GoToClip: () => zc,
    GoToClipFromMarker: () => Uc,
    Header: () => gc,
    Hide: () => uc,
    Highlight: () => Oc,
    Icon: () => _c,
    ImageAndInfoBoxContainer: () => dc,
    ImageContainer: () => fc,
    ImageHighlightBlock: () => Jc,
    ImageHighlightPosition: () => qc,
    InfoBoxContainer: () => hc,
    NoRecordedContent: () => mc,
    Overlay: () => Sc,
    Playhead: () => Ac,
    RangeIcon: () => Zc,
    RangeLeft: () => jc,
    RangeRight: () => Mc,
    StateDescription: () => Fc,
    ThumbnailContainerOffset: () => cc,
    ThumbnailContents: () => lc,
    ThumbnailHitBoxPadding: () => xc,
    ThumbnailImage: () => pc,
    ThumbnailTooltip: () => Dc,
    TimeDisplayContainer: () => kc,
    Timestamp: () => Nc,
    Title: () => yc,
    TooltipButtons: () => Ic,
    TooltipChildren: () => wc,
    TooltipContainer: () => Kc,
    TooltipContents: () => Cc,
    TooltipHitBox: () => Gc,
    TooltipImage: () => Tc,
    TooltipImageCtn: () => Ec,
    TooltipInteractionRegion: () => Pc,
    TooltipOffset: () => sc,
    TooltipRangeContainer: () => Yc,
    ViewScreenshot: () => Wc,
    default: () => Qc,
    thumbnailWidth: () => `320`,
  }),
  sc = `M-05lIt-Rm8-`,
  cc = `demzX-Fs4-4-`,
  lc = `NcHGwBV4SNQ-`,
  uc = `ap-Q4oooopI-`,
  dc = `_9zxrJRU-CaI-`,
  fc = `eQvnQVTk-sI-`,
  pc = `tN6d6cDs7Do-`,
  mc = `B0nXthAtEI8-`,
  hc = `KxFaAst23zY-`,
  gc = `aiwhhTjZ6Pk-`,
  _c = `_9HkA8d7x9kg-`,
  vc = `wCw8FA-GNZw-`,
  yc = `_3-l3Dnlgyfo-`,
  bc = `_00G4k2IDvBQ-`,
  xc = `UYDbMZ6G3WU-`,
  Sc = `RAeRf-oNWq8-`,
  Cc = `Vc6eo-Q-cRw-`,
  wc = `u2eqeMJHtic-`,
  Tc = `_-6Xh-VqwYeg-`,
  Ec = `TkM9nyNO0Xs-`,
  Dc = `mdK6jpS4jRU-`,
  Oc = `VrSRUKXDErM-`,
  kc = `PYo3kx2RfSs-`,
  Ac = `_1UvMCudnsIs-`,
  jc = `vx9pJ002RM0-`,
  Mc = `BgeUu9u9wW8-`,
  Nc = `qP9-v-34gEw-`,
  Pc = `VTDf1a6CPQI-`,
  Fc = `iHtJ7ZAsX5A-`,
  Ic = `k9NX76-rrPo-`,
  Lc = `zB0JoG7vSrU-`,
  Rc = `Qmw3lo2yg3Y-`,
  zc = `lzzqqN6opQo-`,
  Bc = `NcXSUT9Wrrk-`,
  Vc = `h-9-LkDvmE4-`,
  Hc = `ZtdjDDcQX4Q-`,
  Uc = `ncTrqKkwHVg-`,
  Wc = `WaQJkS8Zl-8-`,
  Gc = `a2muS1tYn9s-`,
  Kc = `_8PD3oDSkC5Y-`,
  qc = `BmRL3GyDFyw-`,
  Jc = `_1k7fgO2abtE-`,
  Yc = `E9tORfFSTjw-`,
  Xc = `HjxSSeO2NmQ-`,
  Zc = `zjZlS00iLU4-`,
  Qc = {
    thumbnailWidth: `320`,
    TooltipOffset: sc,
    ThumbnailContainerOffset: cc,
    ThumbnailContents: lc,
    Hide: uc,
    ImageAndInfoBoxContainer: dc,
    ImageContainer: fc,
    ThumbnailImage: pc,
    NoRecordedContent: mc,
    InfoBoxContainer: hc,
    Header: gc,
    Icon: _c,
    DescriptionBlock: vc,
    Title: yc,
    Description: bc,
    ThumbnailHitBoxPadding: xc,
    Overlay: Sc,
    TooltipContents: Cc,
    TooltipChildren: wc,
    TooltipImage: Tc,
    TooltipImageCtn: Ec,
    ThumbnailTooltip: Dc,
    Highlight: Oc,
    TimeDisplayContainer: kc,
    Playhead: Ac,
    RangeLeft: jc,
    RangeRight: Mc,
    Timestamp: Nc,
    TooltipInteractionRegion: Pc,
    StateDescription: Fc,
    TooltipButtons: Ic,
    Button: Lc,
    AddMarker: Rc,
    GoToClip: zc,
    CreateClipButton: Bc,
    EditMarker: Vc,
    DeleteMarker: Hc,
    GoToClipFromMarker: Uc,
    ViewScreenshot: Wc,
    TooltipHitBox: Gc,
    TooltipContainer: Kc,
    ImageHighlightPosition: qc,
    ImageHighlightBlock: Jc,
    TooltipRangeContainer: Yc,
    Duration: Xc,
    RangeIcon: Zc,
  };
function $c(e, t) {
  return (
    e.strRecordingID === t.strRecordingID &&
    e.strClipID === t.strClipID &&
    e.nRecordingOffsetMS === t.nRecordingOffsetMS &&
    e.nRecordingStartOffsetMS === t.nRecordingStartOffsetMS &&
    e.cPxMajorAxis === t.cPxMajorAxis &&
    e.bPreciseTiming == t.bPreciseTiming
  );
}
var el = class t {
  k_QueueWaitUntilRequestMS = 10;
  k_nMaxBatchSize = 50;
  m_nMaxCacheSize = 18e5 / Zi;
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
    ce(this);
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
    return `${e}_${t}_${n}_${o ? s : s - (s % Zi)}_${a}_${o}`;
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
  GetOrQueueThumbnail(e, n, r, i, a, o, s) {
    if (!n) return;
    let c = this.GetKey(e, n, r, i, a, o, s),
      l = this.GetThumbnailData(c);
    if (!l) {
      let u = `thumbnail_${e}_${o}_${s}`;
      (performance.mark(u),
        this.QueueThumbnailRequest(e, n, r, i, a, o, s).then(() => {
          try {
            let e = performance.measure(`measure_${u}`, u);
            e && t.Get().AddPerfMeasure(e.duration);
          } catch (e) {
            N(`CThumbnailCache:: cant measure ${u}, error: ${e}`);
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
      this.m_rgPendingRequest.some((e) => $c(e, l)) ||
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
  async InternalLoadMultipleThumbnails(t) {
    t.sort((e, t) => e.nRecordingOffsetMS - t.nRecordingOffsetMS);
    try {
      let n = t.map((e) => e.nRecordingOffsetMS * 1e3),
        r = await Ln(
          t[0].strRecordingID,
          t[0].strClipID,
          void 0,
          n,
          t[0].cPxMajorAxis,
          t[0].bPreciseTiming,
        );
      e(
        r?.length == n.length,
        `CThumbnailCache.InternalLoadMultipleThumbnails request ${n.length} and got back ${r?.length}`,
      );
      for (let e = 0; e < n.length && e < r?.length; ++e) {
        let n = t[e],
          i = this.GetKey(
            n.gameID,
            n.strRecordingID,
            n.strClipID,
            n.nRecordingOffsetMS,
            n.nRecordingStartOffsetMS,
            n.cPxMajorAxis,
            n.bPreciseTiming,
          ),
          a = r ? r[e].image_data() : null;
        this.SetThumbnailData(i, { data: a, bIsLoading: !1 });
      }
    } catch (e) {
      P(`Failed to load multiple request thumbnails`, e);
      for (let e = 0; e < t.length; ++e) {
        let n = t[e],
          r = this.GetKey(
            n.gameID,
            n.strRecordingID,
            n.strClipID,
            n.nRecordingOffsetMS,
            n.nRecordingStartOffsetMS,
            n.cPxMajorAxis,
            t[0].bPreciseTiming,
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
      let e = await Ln(t, n, void 0, [r * 1e3], a, o);
      if (e?.length > 0) {
        let t = e ? e[0].image_data() : null;
        return (this.SetThumbnailData(s, { data: t, bIsLoading: !1 }), !0);
      }
      hn(`ThumbnailImage: got empty jpeg ${e.length} list back ${t} @ ${r}`);
    } catch (e) {
      (P(`ThumbnailImage: Fail to load thumbnail ${t} @ ${r} with ${e}`),
        this.SetThumbnailData(s, { data: null, bIsLoading: !1 }));
    }
    return !1;
  }
  static s_Singleton;
  static Get() {
    return ((t.s_Singleton ||= new t()), t.s_Singleton);
  }
};
x([f], el.prototype, `m_mapThumbnailImages`, void 0);
function tl(e) {
  let t = (0, L.useRef)(null),
    n = de(),
    r = Ye(`useThumbnailAsURL`);
  return (
    (0, L.useEffect)(() => {
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
function nl(e, t, n, r, i, a, o) {
  return tl(A(() => el.Get().GetOrQueueThumbnail(e, n, t, r, i, a, o))?.data);
}
var rl = 320,
  il = L.forwardRef(function (e, n) {
    let { globalMS: r, children: i, imgClassName: a, className: o, ...s } = e,
      c = G(),
      l = c.GetGameID(),
      u = c.GetClipID(),
      d = A(() => c.GetRecordingMode()),
      f = A(() => c.ConvertGlobaOffsetToRecordingAndRelativeOffset(r));
    io();
    let p = f?.nRecordingOffsetMS,
      m = nl(l, u, f?.strRecordingID, p, f?.nStartOffsetMS, rl, !1),
      [h, g] = (0, L.useState)();
    return (
      (0, L.useEffect)(() => {
        m && g(m);
      }, [m]),
      (0, U.jsxs)(`div`, {
        ref: n,
        className: t(cc, oc[d], o),
        ...s,
        children: [
          (0, U.jsxs)(`div`, {
            className: t(lc, f?.strRecordingID && !h && `ap-Q4oooopI-`, oc[d]),
            children: [
              (0, U.jsx)(`div`, {
                className: dc,
                children: (0, U.jsxs)(`div`, {
                  className: fc,
                  children: [
                    f?.strRecordingID
                      ? (0, U.jsx)(`img`, { className: pc, src: h })
                      : (0, U.jsx)(`div`, {
                          className: mc,
                          children: O(`#GameRecording_PlayerNoContent`),
                        }),
                    (0, U.jsx)(al, {}),
                  ],
                }),
              }),
              (0, U.jsx)(`div`, { className: t(wc), children: i }),
            ],
          }),
          (0, U.jsx)(`div`, { className: t(xc) }),
        ],
      })
    );
  });
function al() {
  let e = Y(),
    t = A(() => e.GetGameID()),
    n = A(() => e.GetThumbnailComponent()),
    r = A(() => e.GetThumbnailEntry());
  if (!r || n !== q.Highlight) return null;
  if (Li(r.entry))
    return (0, U.jsx)(ol, {
      thumbnailEntry: r,
      achievementEntry: r.entry,
      strGameID: t,
    });
  let i = ``,
    a = ``;
  return (
    Ri(r.entry)
      ? (a = O(r.entry.description) || `#GameRecording_UnknownError`)
      : zi(r.entry)
        ? ((i = r.entry.title ? r.entry.title : O(`#Marker_UserMarker_Title`)),
          (a = r.entry.description || ``))
        : Ii(r.entry) &&
          ((i = r.entry.title || ``), (a = r.entry.description || ``)),
    !i && !a
      ? null
      : (0, U.jsx)(sl, { title: i, description: a, thumbnailEntry: r })
  );
}
function ol(e) {
  let { strGameID: t, thumbnailEntry: n, achievementEntry: r } = e,
    i = Hn(new Yi(t).GetAppID(), r.achievement_name);
  return i
    ? (0, U.jsx)(sl, {
        title: i.name ?? ``,
        description: i.description ?? ``,
        thumbnailEntry: n,
      })
    : null;
}
function sl(e) {
  let { title: t, description: n, thumbnailEntry: r } = e;
  return (0, U.jsxs)(`div`, {
    className: hc,
    children: [
      (0, U.jsxs)(`div`, {
        className: gc,
        children: [
          (0, U.jsx)(`div`, {
            className: _c,
            children: (0, U.jsx)(Ca, {
              entry: r.entry,
              strMarkerIcon: r.strMarkerIcon,
            }),
          }),
          t && (0, U.jsx)(`div`, { className: `_3-l3Dnlgyfo-`, children: t }),
        ],
      }),
      (0, U.jsx)(`div`, {
        className: vc,
        children:
          n && (0, U.jsx)(`div`, { className: `_00G4k2IDvBQ-`, children: n }),
      }),
    ],
  });
}
var cl = L.forwardRef(function (e, n) {
  let { globalPX: r, onMouseEnter: i, onMouseLeave: a } = e,
    o = Y(),
    s = A(() => o.ConvertPXOffsetToGlobalMS(r, !1)),
    c = A(() => o.GetThumbnailComponent()),
    l = G(),
    u = A(() => l.GetRecordingMode());
  return (0, U.jsxs)(il, {
    className: t(Dc, oc[u], oc[c]),
    globalMS: s,
    ref: n,
    onMouseEnter: i,
    onMouseLeave: a,
    children: [
      (0, U.jsx)(dl, { globalMS: s }),
      (0, U.jsx)(ll, { globalMS: s }),
      (0, U.jsxs)(`div`, {
        className: Pc,
        children: [
          c === q.Highlight
            ? (0, U.jsx)(fl, {})
            : (0, U.jsx)(pl, { globalPX: r }),
          (0, U.jsx)(ml, { globalMS: s }),
        ],
      }),
    ],
  });
});
function ll(e) {
  let { globalMS: t } = e,
    n = Y(),
    r = A(() => n.GetStateDescriptionAtGlobalMS(t));
  return r?.title
    ? (0, U.jsx)(`div`, { className: Fc, children: r.title })
    : null;
}
function ul(e, t) {
  return e.priority - t.priority;
}
function dl(e) {
  let { globalMS: t } = e,
    { setSelectedMarker: n } = ro(),
    r = Y(),
    i = G(),
    a = A(() => r.FindRangeEventsAtGlobalMS(t)),
    o = a.length > 3 ? a.sort(ul).slice(0, 3) : a,
    s = (e, r) => {
      let a = parseInt(r.duration),
        { nTimelineOffsetMS: o, strTimelineID: s } =
          i.ConvertGlobalOffsetToTimelineRelativeOffset(t),
        c = t - o.valMS + parseInt(r.time),
        [l, u] = i.GetLoader().CreateGlobalRangeForTimeline(s, c, 0, a);
      (i.SetPlaytimeFromGlobalMS(V(l)),
        n?.(r.id, s, l, u),
        B.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromRangeEvent`),
        e.stopPropagation());
    };
  return (0, U.jsx)(U.Fragment, {
    children: o.map((e, t) =>
      (0, U.jsxs)(
        `div`,
        {
          className: Yc,
          onClick: (t) => s(t, e),
          children: [
            e.icon &&
              (0, U.jsx)(ka, {
                gameID: i.GetGameID(),
                icon: e.icon,
                className: `zjZlS00iLU4-`,
              }),
            (0, U.jsx)(`div`, { className: yc, children: e.title }),
            (0, U.jsx)(`div`, {
              className: Xc,
              children: we(parseInt(e.duration) / 1e3, !1),
            }),
          ],
        },
        `${e.time}_${t}`,
      ),
    ),
  });
}
function fl() {
  let e = G(),
    n = A(() => e.GetRecordingMode()),
    r = Y(),
    i = A(() => r.GetThumbnailEntry());
  if (!i) return null;
  let a = r.GetTimelineOffsetMS(i.strTimelineID),
    o = Ki(parseInt(i.entry.time) - a),
    s = e.MakeRelativeToTimelineEndIfActive(i.strTimelineID, o.valMS),
    c = ``;
  if (Fi(i.entry)) {
    let e = s + parseInt(i.entry.duration);
    if (s < 0) {
      let t = we(Math.abs(s / 1e3), !1, !1),
        n = we(Math.abs(e / 1e3), !1, !1);
      c = O(`#Duration_WrittenNegation`, t + ` - ` + n);
    } else {
      let t = we(s / 1e3, !1, !1),
        n = we(e / 1e3, !1, !1);
      c = t + ` - ` + n;
    }
  } else c = we(s / 1e3, !1, !0);
  return (0, U.jsx)(`div`, { className: t(kc, Oc, oc[n]), children: c });
}
function pl(e) {
  let { globalPX: t } = e,
    n = Y(),
    r = A(() => n.ConvertPXToTimelineRelativeMS(t, `end-if-active`));
  return r
    ? (0, U.jsx)(`div`, { className: kc, children: we(r / 1e3, !1, !0) })
    : null;
}
function ml(e) {
  let { globalMS: t } = e,
    n = Y(),
    r = A(() => n.GetGameID()),
    i = A(() => n.GetThumbnailComponent()),
    a = A(() => n.GetThumbnailEntry()),
    o = [
      (0, U.jsx)(bl, { globalMS: t }, `add_marker`),
      (0, U.jsx)(xl, { globalMS: t }, `view_clip`),
    ];
  return (
    i == q.Highlight &&
      a &&
      (Ri(a.entry) || Li(a.entry) || Ii(a.entry)
        ? (o = [
            (0, U.jsx)(hl, { markerInfo: a }, `create_marker_clip`),
            (0, U.jsx)(gl, { markerInfo: a }, `view_clip`),
          ])
        : Bi(a.entry)
          ? (o = [
              (0, U.jsx)(hl, { markerInfo: a }, `create_marker_clip`),
              (0, U.jsx)(yl, { entry: a.entry, gameID: r }, `view_screen`),
              (0, U.jsx)(gl, { markerInfo: a }, `view_clip`),
            ])
          : zi(a.entry) &&
            (o = [
              (0, U.jsx)(vl, { markerInfo: a }, `edit_user`),
              (0, U.jsx)(hl, { markerInfo: a }, `create_marker_clip`),
              (0, U.jsx)(_l, { markerInfo: a }, `delete_user`),
              (0, U.jsx)(gl, { markerInfo: a }, `view_clip`),
            ])),
    (0, U.jsx)(`div`, { className: Ic, children: o })
  );
}
function hl(e) {
  let { setSelectedMarker: n } = ro(),
    { markerInfo: r } = e,
    i = G(),
    a = A(() => i.ShouldModeShowClipControls()),
    o = A(() =>
      i.ConvertGlobaOffsetToRecordingAndRelativeOffset(r.nGlobalMS.valMS),
    ),
    s = Wn(),
    c = so();
  return !o?.strRecordingID || !a
    ? null
    : (0, U.jsx)(k, {
        toolTipContent: O(
          s ? `#RecordingState_Clip_LowDiskSpace` : `#TimelineDialog_ClipVideo`,
        ),
        direction: `top`,
        bTopmost: !0,
        children: (0, U.jsx)(`div`, {
          className: t(Lc, Bc),
          onClick: (e) => {
            let t = ys,
              a = bs;
            Fi(r.entry) && ((t = 0), (a = parseInt(r.entry.duration)));
            let [o, s] = i
              .GetLoader()
              .CreateGlobalRangeForTimeline(
                r.strTimelineID,
                r.nGlobalMS.valMS,
                t,
                a,
              );
            (i.SetPlaytimeFromGlobalMS(V(o)),
              n?.(r.entry.id, r.strTimelineID, o, s),
              c(),
              B.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromHighlight`),
              e.stopPropagation());
          },
          children: (0, U.jsx)(st, {}),
        }),
      });
}
function gl(e) {
  let { markerInfo: n } = e,
    r = Y(),
    i = A(() => r.ConvertGlobalMSToClipOrNone(n.nGlobalMS.valMS)),
    { onNavigateToClip: a } = Bo();
  return i
    ? (0, U.jsx)(k, {
        toolTipContent: O(`#TimelineDialog_ViewClip`),
        direction: `top`,
        bTopmost: !0,
        children: (0, U.jsx)(`div`, {
          className: t(Lc, Uc),
          onClick: () => {
            i &&
              (B.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/${n.entry.type}`,
              ),
              a(i.clipID));
          },
          children: (0, U.jsx)(Te, {}),
        }),
      })
    : null;
}
function _l(e) {
  let { markerInfo: n } = e,
    r = G(),
    i = Y();
  return (0, U.jsx)(k, {
    toolTipContent: O(`#Marker_Action_Delete`),
    direction: `top`,
    bTopmost: !0,
    children: (0, U.jsx)(`div`, {
      className: t(Lc, Hc),
      onClick: (e) => {
        zi(n.entry) &&
          (B.ReportTrackedAction(
            `/GameRecording/Marker/Delete/${n.entry.type}`,
          ),
          r.RemoveUserMarker(n.strTimelineID, n.entry.id),
          i.SetThumbnailComponent(null));
      },
      children: (0, U.jsx)(ze, {}),
    }),
  });
}
function vl(e) {
  let { markerInfo: n } = e,
    r = G(),
    i = ao();
  return (0, U.jsx)(k, {
    toolTipContent: O(`#Marker_Action_Edit`),
    direction: `top`,
    bTopmost: !0,
    children: (0, U.jsx)(`div`, {
      className: t(Lc, Vc),
      onClick: (e) => {
        if (!zi(n.entry)) return;
        B.ReportTrackedAction(`/GameRecording/Marker/Edit/${n.entry.type}`);
        let t = (0, U.jsx)(Jo, {
          entry: n.entry,
          playbackCoordinator: r,
          fnClearSelection: i,
          strTimelineID: n.strTimelineID,
        });
        (Ge(t, E(e)), e.stopPropagation(), e.preventDefault());
      },
      children: (0, U.jsx)(Ct, {}),
    }),
  });
}
function yl(e) {
  let { entry: n, gameID: r } = e,
    i = n.handle,
    { onNavigateToScreenshot: a } = Bo();
  return (0, U.jsx)(k, {
    toolTipContent: O(`#TimelineDialog_ViewScreenshot`),
    direction: `top`,
    bTopmost: !0,
    children: (0, U.jsx)(`div`, {
      className: t(Lc, Wc),
      onClick: () => {
        i &&
          (B.ReportTrackedAction(`/GameRecording/Tooltip/Screenshot`), a(r, i));
      },
      children: (0, U.jsx)(_t, {}),
    }),
  });
}
function bl(e) {
  let { globalMS: n } = e,
    r = G();
  return A(() => r.ConvertGlobaOffsetToRecordingAndRelativeOffset(n))
    ?.strRecordingID
    ? (0, U.jsx)(k, {
        toolTipContent: O(`#TimelineDialog_AddMarker`),
        direction: `top`,
        children: (0, U.jsx)(`div`, {
          className: t(Lc, Rc),
          onClick: () => {
            (r.AddUserMarkerAtGlobalMS(
              V(n),
              `/GameRecording/AddMarker/Thumbnail`,
              null,
            ),
              r.SetPlaytimeFromGlobalMS(V(n)));
          },
          children: (0, U.jsx)(ut, {}),
        }),
      })
    : null;
}
function xl(e) {
  let { globalMS: n } = e,
    r = Y(),
    i = A(() => r.ConvertGlobalMSToClipOrNone(n)),
    { onNavigateToClip: a } = Bo();
  return i
    ? (0, U.jsx)(k, {
        toolTipContent: O(`#TimelineDialog_ViewClip`),
        direction: `top`,
        children: (0, U.jsx)(`div`, {
          className: t(Lc, zc),
          onClick: () => {
            i &&
              (B.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/timeline`,
              ),
              a(i.clipID));
          },
          children: (0, U.jsx)(Te, {}),
        }),
      })
    : null;
}
var Sl = L.memo(function (e) {
    let t = ss(),
      n = ds(),
      i = Y(),
      a = G(),
      o = ms(),
      s = (0, L.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            o = r(e.clientX - t.x, 0, t.width),
            s = i.ConvertPXOffsetToGlobalMS(o, !1);
          s && a.SetPlaytimeFromGlobalMS(V(s), void 0, void 0, !0);
        },
        [n, a, i],
      ),
      c = (0, L.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            a = r(e.clientX - t.x, 0, t.width),
            s = i.ConvertPXOffsetToGlobalMS(a, !1);
          s &&
            (o(e, V(s), !1, {
              bDisableMouseOverlay: !0,
              bForcePopup: !0,
              bAlwaysOnTop: !0,
            }),
            e.preventDefault(),
            e.stopPropagation());
        },
        [n, i, o],
      );
    return (
      ps(`click`, s),
      ps(`contextmenu`, c),
      (0, U.jsx)(Cl, { globalMouseXPX: t.globalMouseXPX.valPX || 0 })
    );
  }),
  Cl = L.memo(function (e) {
    let { globalMouseXPX: t } = e,
      n = us(),
      r = Y(),
      i = ds(),
      a = A(() => {
        if (r.GetThumbnailComponent()) return r.GetThumbnailPosition();
      }),
      [o, s] = (0, L.useState)(),
      [c, l] = (0, L.useState)();
    return (
      (0, L.useEffect)(() => {
        isNaN(a) ? !c && n && s(t) : s(a);
      }, [c, n, i, t, a]),
      (0, U.jsx)(`div`, {
        className: Vs,
        style: { transform: `translateX( calc(${o}px - 50%))` },
        children: (0, U.jsx)(wl, {
          globalPX: o,
          setInteractingWithThumbnail: l,
          bInteractingWithThumbnail: c,
        }),
      })
    );
  });
function wl(e) {
  let {
      globalPX: n,
      setInteractingWithThumbnail: r,
      bInteractingWithThumbnail: i,
    } = e,
    a = Y(),
    o = G(),
    s = A(() => o.GetRecordingMode() === `Overlay`),
    c = A(() => a.ConvertPXOffsetToGlobalMS(n, !1)),
    l = A(() => a.GetTimelineParentCtnRef()),
    u = (0, L.useRef)(void 0),
    d = (0, L.useRef)(void 0),
    f = (0, L.useRef)(void 0),
    p = A(() => a.GetThumbnailComponent()),
    m = ds(),
    h = Ve({
      toolTipContent: (0, U.jsx)(cl, {
        globalPX: n,
        ref: u,
        onMouseEnter: () => r(!0),
        onMouseLeave: (e) => r(!1),
      }),
      direction: s ? `bottom` : `top`,
      nDelayShowMS: 0,
      nBodyDistance: 0,
      nAllowOffscreenPx: 0,
    }),
    { setHovered: g, setTarget: _ } = h.stateHandlers,
    v = (0, L.useCallback)(() => {
      (g(!1),
        r(!1),
        f.current && f.current(),
        (f.current = null),
        a.GetAutoScrollPaused() && a.SetAutoScrollPauseTimeout(),
        a.SetThumbnailComponent(null));
    }, [r, g, a]),
    y = (0, L.useCallback)(
      (e, t) => {
        if (!d.current || !u.current) return;
        let n = d.current.getBoundingClientRect(),
          r = n.left,
          i = n.right,
          a = n.top,
          o = n.bottom;
        if (u.current) {
          let e = u.current.getBoundingClientRect();
          s ? (o = e.bottom) : (a = e.top);
        }
        (e <= r || e >= i || t <= a || t >= o) && v();
      },
      [s, v],
    ),
    b = (0, L.useCallback)(
      (e) => {
        let t = a.GetThumbnailComponent();
        (t && t !== q.Highlight) || y(e.clientX, e.clientY);
      },
      [y, a],
    ),
    ee = (0, L.useCallback)(
      (e) => {
        y(e.clientX, e.clientY);
      },
      [y],
    );
  (ps(
    `mouseenter`,
    (0, L.useCallback)(() => {
      (g(!0), _(d.current));
      let e = ve(d.current);
      e &&
        !f.current &&
        (e.addEventListener(`mousemove`, b),
        e.addEventListener(`mouseup`, ee),
        (f.current = () => {
          (e.removeEventListener(`mousemove`, b),
            e.removeEventListener(`mouseup`, ee));
        }));
    }, [b, ee, g, _]),
  ),
    (0, L.useEffect)(() => {
      let e = (e) => {
        let t = a.GetThumbnailComponent();
        (t && t === q.Playhead) ||
          t === q.RangeLeft ||
          t === q.RangeRight ||
          (u.current && !le(u.current, e.relatedTarget) && v());
      };
      return (
        l && l.addEventListener(`mouseleave`, e),
        () => l && l.removeEventListener(`mouseleave`, e)
      );
    }, [v, l, a]),
    (0, L.useEffect)(() => v, [v]));
  let x = (m || i) && c && !p;
  return (0, U.jsxs)(`div`, {
    ref: d,
    className: Hs,
    children: [
      (0, U.jsx)(nc, { className: t(Us, x && `_52Luj95k6TU-`) }),
      !!c && h.tooltip,
    ],
  });
}
var Tl = `hmHZe5aDrq8-`,
  El = `VE-8JY5P2Qo-`,
  Dl = `bvHF-aIx6oc-`,
  Ol = `EFP0lnhKJeo-`,
  kl = `MkCCKg4MUdU-`,
  Al = `_1xOfco9qmxw-`,
  jl = `fXvcT3pVP7Q-`,
  Ml = `_2ytscAh4R6M-`,
  Nl = 500,
  Pl = (0, L.memo)(function () {
    let [e, t] = (0, L.useState)(`none`),
      n = eo(),
      r = Qa(),
      i = $a();
    return !n || !r || !i
      ? null
      : (0, U.jsx)(`div`, {
          className: Tl,
          children: (0, U.jsx)(Fl, {
            activeControlState: e,
            setActiveControlState: t,
          }),
        });
  }),
  Fl = (0, L.memo)(function (e) {
    let { activeControlState: n, setActiveControlState: r } = e,
      [i, a] = (0, L.useState)(),
      [o, s] = (0, L.useState)(),
      c = Qa(),
      l = $a(),
      u = Y(),
      d = A(() => u.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
      f = A(() => u.ConvertGlobalMSToGlobalPXOffset(l.valMS)),
      p = (0, L.useCallback)(
        (e) => {
          (a(e), u.SetAutoScrollPauseTimeout());
        },
        [u],
      ),
      m = (0, L.useCallback)(
        (e) => {
          (s(e), u.SetAutoScrollPauseTimeout());
        },
        [u],
      ),
      h = (0, L.useCallback)(
        (e) => {
          n === `none` && e.stopPropagation();
        },
        [n],
      ),
      g = (0, L.useCallback)(
        (e) => {
          n === `none` && e.stopPropagation();
        },
        [n],
      );
    return (0, U.jsx)(`div`, {
      className: t(El, n !== `none` && `r9kdAFASyBY-`),
      onMouseOver: h,
      onMouseOut: g,
      onFocus: h,
      onBlur: g,
      children: (0, U.jsxs)(`div`, {
        className: Al,
        children: [
          (0, U.jsx)(Rl, {
            isActive: n === `left`,
            setControlState: r,
            setRangeControlPX: p,
            pxOffset: i,
          }),
          (0, U.jsx)(Wl, {
            startOffsetPX: (n === `left` && i) || d,
            endOffsetPX: (n === `right` && o) || f,
            className: Ol,
          }),
          (0, U.jsx)(Bl, {
            isActive: n === `right`,
            setControlState: r,
            setRangeControlPX: m,
            pxOffset: o,
          }),
        ],
      }),
    });
  });
function Il(e, t, n) {
  let i = t.GetVisualWindowStartPX() - t.GetTimelineMarginWidth(),
    a = i + t.GetVisualWidth(),
    o = Math.max(0, i + 3),
    s = Math.min(t.GetScrollableWidthPX(), a - 3);
  n(r(e, o, s));
}
function Ll(e, t, n, i, a, o) {
  let s = (0, L.useRef)(void 0),
    c = (0, L.useRef)(!1),
    l = (0, L.useRef)(void 0),
    u = (0, L.useRef)(void 0),
    d = A(() => t.GetScrollableWidthPX()),
    f = A(() => t.GetScrollWindowWidth());
  (0, L.useEffect)(
    () => () => {
      l.current &&
        (cancelAnimationFrame(l.current),
        (l.current = null),
        (u.current = null));
    },
    [],
  );
  let p = L.useCallback(
    (e, t, n, i, a) => {
      if (a(t))
        (o(r(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(l.current),
          (l.current = null),
          (u.current = null));
      else {
        if (
          ((l.current &&= requestAnimationFrame((e) => p(e, t, n, i, a))),
          u.current)
        ) {
          let n = ((e - u.current) / Nl) * i;
          (t.ScrollBy(n), o((e) => r(e + n, 0, t.GetScrollableWidthPX())));
        }
        u.current = e;
      }
    },
    [o],
  );
  (0, L.useEffect)(() => {
    l.current &&
      (cancelAnimationFrame(l.current), (l.current = null), (u.current = null));
    let m = f * (1 - qu),
      h = f * qu,
      g = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      _ = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (i.valPX > g) (o(g), a(`right`), t.SetThumbnailComponent(q.RangeRight));
    else {
      if (e.valPX < h && !t.BReachedMinScroll()) {
        if (e.valPX > s.current) c.current = !0;
        else if (e.valPX < s.current || !c.current) {
          let n = Math.min(h, _),
            i = e.valPX - n,
            a = r(Math.abs(i / n), 0, 1) * i;
          ((l.current = requestAnimationFrame((n) =>
            p(n, t, e.valPX, a, t.BReachedMinScroll),
          )),
            (c.current = !1));
        }
        Il(i.valPX, t, o);
      } else if (e.valPX > m && _ > m && !t.BReachedMaxScroll()) {
        if (e.valPX < s.current) c.current = !0;
        else if (e.valPX > s.current || !c.current) {
          let i = (e) => {
              let t = e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
              return e.BReachedMaxScroll() || t <= m;
            },
            a = e.valPX - m,
            o = r(Math.abs(a / (f - m)), 0, 1) * a;
          ((l.current = requestAnimationFrame((n) => p(n, t, e.valPX, o, i))),
            (c.current = !1));
        }
        Il(i.valPX, t, o);
      } else o(r(i.valPX, 0, d));
      s.current = e.valPX;
    }
  }, [i.valPX, n.valMS, e.valPX, a, t, o, d, p, f]);
}
var Rl = (0, L.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = Qa();
  return t
    ? (0, U.jsx)(zl, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, U.jsx)(Ul, {
        offsetMS: a.valMS,
        direction: `left`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function zl(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = to(),
    a = $a(),
    o = Y(),
    s = cs();
  return (
    Ll(ls(), o, a, s, t, n),
    (0, L.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, V(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, U.jsx)(Gl, { offsetPX: r, direction: `left` })
  );
}
var Bl = (0, L.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = $a();
  return t
    ? (0, U.jsx)(Vl, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, U.jsx)(Ul, {
        offsetMS: a.valMS,
        direction: `right`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function Vl(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = no(),
    a = Qa(),
    o = Y(),
    s = cs();
  return (
    Hl(ls(), o, a, s, t, n),
    (0, L.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, V(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, U.jsx)(Gl, { offsetPX: r, direction: `right` })
  );
}
function Hl(e, t, n, i, a, o) {
  let s = (0, L.useRef)(void 0),
    c = (0, L.useRef)(!1),
    l = (0, L.useRef)(void 0),
    u = (0, L.useRef)(void 0),
    d = A(() => t.GetScrollableWidthPX()),
    f = A(() => t.GetScrollWindowWidth());
  (0, L.useEffect)(
    () => () => {
      l.current &&
        (cancelAnimationFrame(l.current),
        (l.current = null),
        (u.current = null));
    },
    [],
  );
  let p = L.useCallback(
    (e, t, n, i, a) => {
      if (a(t))
        (o(r(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(l.current),
          (l.current = null),
          (u.current = null));
      else {
        if (
          ((l.current &&= requestAnimationFrame((e) => p(e, t, n, i, a))),
          u.current)
        ) {
          let n = ((e - u.current) / Nl) * i;
          (t.ScrollBy(n), o((e) => r(e + n, 0, t.GetScrollableWidthPX())));
        }
        u.current = e;
      }
    },
    [o],
  );
  (0, L.useEffect)(() => {
    l.current &&
      (cancelAnimationFrame(l.current), (l.current = null), (u.current = null));
    let m = f * (1 - qu),
      h = f * qu,
      g = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      _ = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (i.valPX < g) (o(g), a(`left`), t.SetThumbnailComponent(q.RangeLeft));
    else {
      if (e.valPX > m && !t.BReachedMaxScroll()) {
        if (e.valPX < s.current) c.current = !0;
        else if (e.valPX > s.current || !c.current) {
          let n = Math.max(m, _),
            i = e.valPX - n,
            a = r(Math.abs(i / (f - n)), 0, 1) * i;
          ((l.current = requestAnimationFrame((n) =>
            p(n, t, e.valPX, a, t.BReachedMaxScroll),
          )),
            (c.current = !1));
        }
        Il(i.valPX, t, o);
      } else if (
        e.valPX < h &&
        _ < h &&
        e.valPX <= s.current &&
        !t.BReachedMinScroll()
      ) {
        if (e.valPX > s.current) c.current = !0;
        else if (e.valPX < s.current || !c.current) {
          let i = e.valPX - h,
            a = r(Math.abs(i / h), 0, 1) * i,
            o = (e) =>
              e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS) > h ||
              e.BReachedMinScroll();
          ((l.current = requestAnimationFrame((n) => p(n, t, e.valPX, a, o))),
            (c.current = !1));
        }
        Il(i.valPX, t, o);
      } else o(r(i.valPX, 0, d));
      s.current = e.valPX;
    }
  }, [n.valMS, e.valPX, a, t, o, d, f, i.valPX, p]);
}
function Ul(e) {
  let {
      offsetMS: t,
      direction: n,
      setControlState: r,
      setRangeControlPX: i,
    } = e,
    a = Y(),
    o = A(() => a.ConvertGlobalMSToGlobalPXOffset(t));
  (0, L.useEffect)(
    () => (
      i(void 0),
      () => {
        i(o);
      }
    ),
    [o, i],
  );
  let s = (0, L.useCallback)(
      (e) => {
        let t = E(e),
          i,
          o,
          s = () => {
            (r(n),
              a.SetThumbnailComponent(
                n === `left` ? q.RangeLeft : q.RangeRight,
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
      a.SetThumbnailComponent(n === `left` ? q.RangeLeft : q.RangeRight);
    },
    l = (e) => {
      a.SetThumbnailComponent(null);
    };
  return (0, U.jsx)(`div`, {
    className: Dl,
    onMouseDown: s,
    onMouseOver: c,
    onFocus: c,
    onMouseOut: l,
    onBlur: l,
    children: (0, U.jsx)(Gl, { offsetPX: o, direction: n }),
  });
}
var Wl = (0, L.memo)(function (e) {
    let { startOffsetPX: n, endOffsetPX: r, className: i } = e;
    if (isNaN(n) || isNaN(r)) return null;
    let a = { width: r - n || 0, transform: `translateX(${n}px)` };
    return (0, U.jsx)(`div`, { className: t(Ml, i), style: a });
  }),
  Gl = (0, L.memo)(function (e) {
    let { direction: n, offsetPX: r } = e,
      i = { transform: `translateX( calc( ${r}px - 50%) )` },
      a = Y(),
      o = A(() => a.GetThumbnailComponent() === q.Playhead);
    return (0, U.jsx)(`div`, {
      style: i,
      className: t(jl),
      children: (0, U.jsx)(`div`, {
        className: t(kl, n === `left` && void 0, o && `o23F9bJf68E-`),
        children: (0, U.jsx)(Kl, { innerFill: `#171d25`, direction: n }),
      }),
    });
  });
function Kl(e) {
  return (0, U.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 3 36`,
    fill: `none`,
    style: { transform: `rotate(${e.direction === `right` ? 180 : 0}deg)` },
    children: [
      (0, U.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 0)`,
      }),
      (0, U.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 10)`,
      }),
      (0, U.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 20)`,
      }),
      (0, U.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 30)`,
      }),
    ],
  });
}
var ql = `peJfRpya9Fs-`,
  Jl = 100,
  Yl = L.memo(function (e) {
    let t = Y(),
      n = A(() => t.GetVisibleWindowRelativeTimelines()),
      r = G().GetRecordingMode(),
      i = [],
      a = ``;
    for (let e of n) {
      let n = t.GetTimeRecorded(e.timelineID),
        r = Ce(n);
      r != a && (i.push({ timeline: e, strLabel: r }), (a = r));
    }
    for (let e = i.length - 2; e >= 0; e--) {
      let t = i[e];
      i[e + 1].timeline.nVisibleStartPX - t.timeline.nVisibleStartPX >= Jl ||
        i.splice(e, 1);
    }
    return (0, U.jsx)(U.Fragment, {
      children: i.map((e) =>
        (0, U.jsx)(
          Xl,
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
function Xl(e) {
  let { label: n, startPX: r, recordingMode: i } = e,
    a = i == ca.Overlay;
  return (0, U.jsx)(`div`, {
    className: t(ql, a && `r-oc0eIT1Lw-`),
    style: { transform: `translateX(${r}px)` },
    children: n,
  });
}
var Zl = `rpb9NP30tgc-`,
  Ql = `JCH5UEpUzxo-`,
  $l = (0, L.memo)(function (e) {
    let t = Y(),
      n = A(() => t.GetVisibleRecordings());
    return (0, U.jsx)(U.Fragment, {
      children: n.map((e) =>
        (0, U.jsx)(
          eu,
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
function eu(e) {
  let { isActive: n, endPX: r, startPX: i, recordingType: a } = e,
    o = { width: r - i || 0, transform: `translateX(${i}px)` },
    s = io(),
    c = a === 4,
    l = a === 2;
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsx)(`div`, {
        className: t(
          Zl,
          c && `xg0PXeGNr6o-`,
          l && `DlYcvPsKhnQ-`,
          s && `pbiBKOrHy28-`,
        ),
        style: o,
      }),
      n && (0, U.jsx)(tu, { endPX: r }),
    ],
  });
}
function tu(e) {
  let { endPX: n } = e,
    r = G(),
    i = Y(),
    a = A(() => r.GetRecordingMode() === `Overlay`),
    o = sa(r.GetGameID()),
    s = A(() => r.GetIsLiveEdge() && !r.GetHidePlayer()),
    c = A(() => {
      let e = r.GetLiveEdgeBufferWindowStartMS();
      return i.ConvertGlobalMSToGlobalPXOffset(e.valMS);
    });
  if (!a || o !== oa.BackgroundRecording) return null;
  let l = { width: n - c || 0, transform: `translateX(${c}px)` };
  return (0, U.jsx)(`div`, { className: t(Ql, s && `ObPDU8jrJGI-`), style: l });
}
var nu = `etyWD-mczjA-`,
  ru = (0, L.memo)(function (e) {
    let t = Y(),
      n = A(() => t.GetVisibleClips());
    return (0, U.jsx)(U.Fragment, {
      children: n.map((e) =>
        (0, U.jsx)(
          iu,
          { startPX: e.pxClipStart, endPX: e.pxClipEnd },
          e.clipID,
        ),
      ),
    });
  }),
  iu = (0, L.memo)(function (e) {
    let { endPX: t, startPX: n } = e,
      r = { width: t - n || 0, transform: `translateX(${n}px)` };
    return (0, U.jsx)(`div`, { className: nu, style: r });
  }),
  au = `r7Pr1Bv8r30-`,
  ou = `V3xSKJyklXQ-`,
  su = `nT24tktVM-s-`,
  cu = `a9purv61CPI-`,
  lu = `O-J-KNmIhN8-`,
  uu = `lMpHX8arl8s-`,
  du = `hMUPhnvIP90-`,
  fu = `M5wPU20T76E-`,
  pu = `H3EDFnaZgvI-`,
  mu = `iAKyxjjcF38-`,
  hu = `pEzP-JpCCcQ-`,
  gu = `hBDI48p9XRY-`,
  _u = `PZt-x5Tu8rg-`,
  vu = `_57e4oWLUba0-`,
  yu = `diJRy3nTnTM-`;
function bu() {
  let e = sa(G().GetGameID());
  return e === oa.NotRecording || e === oa.NotRunning
    ? null
    : (0, U.jsx)(xu, {});
}
function xu(e) {
  let n = G(),
    r = A(() => n.GetIsLiveEdge() && !n.GetHidePlayer()),
    i = L.useCallback(() => {
      (n.SetHidePlayer(!1), n.GetGameRecordingVideo().Play());
      let e = n.GetLiveEdgeMS();
      (n.SetPlaytimeFromGlobalMS(e), n.FocusGlobalMS(e));
    }, [n]);
  return (0, U.jsx)(k, {
    className: _u,
    toolTipContent: O(r ? `#Playback_AtLatest` : `#Playback_JumpToLatest`),
    direction: `bottom`,
    children: (0, U.jsx)(Pe, {
      onClick: i,
      className: t(vu, r && `FuL7350j26I-`),
      children: (0, U.jsx)(jt, { className: t(yu) }),
    }),
  });
}
var Su = (0, L.forwardRef)(function (e, t) {
    let n = Y();
    return A(() => !n.BEmpty())
      ? (0, U.jsx)(wu, { ...e, timelineView: n, ref: t })
      : (0, U.jsx)(Cu, { ref: t });
  }),
  Cu = (0, L.forwardRef)(function (e, n) {
    return (0, U.jsx)(`div`, { ref: n, className: t(ou, e.className) });
  }),
  wu = (0, L.forwardRef)(function (e, n) {
    let r = G(),
      { children: i, className: a, timelineView: o, disableZoom: s } = e,
      [c, l] = (0, L.useState)(),
      u = L.useCallback(
        (e) => {
          let t = e.target.getBoundingClientRect();
          (o.SetScrollWindowOffset(t.x), o.SetScrollWindowWidth(t.width), l(t));
        },
        [o],
      ),
      d = xe(u),
      f = L.useCallback(
        (e) => {
          if (e.ctrlKey && !s) {
            let t = c ? (e.clientX - c.x) / c.width : 0.5;
            e.deltaY > 0
              ? o.ZoomOut(e.deltaY / 100, t)
              : o.ZoomIn(-e.deltaY / 100, t);
          } else o.ScrollBy(e.deltaY);
        },
        [s, c, o],
      );
    return (
      Pu(r, o),
      (0, U.jsxs)(`div`, {
        ref: n,
        onWheel: f,
        onMouseOver: () => o.SetAutoScrollPaused(!0),
        onFocus: () => {},
        onMouseLeave: () => o.SetAutoScrollPauseTimeout(),
        children: [
          (0, U.jsxs)(`div`, {
            className: su,
            children: [
              (0, U.jsxs)(`div`, {
                ref: d,
                className: t(au, a),
                children: [i, (0, U.jsx)(Tu, { timelineView: o })],
              }),
              r.GetRecordingMode() === ca.Overlay && (0, U.jsx)(bu, {}),
            ],
          }),
          (0, U.jsx)(`div`, {
            className: du,
            children: !r.GetGamepadMode() && (0, U.jsx)(Eu, {}),
          }),
        ],
      })
    );
  });
function Tu(e) {
  let { timelineView: n } = e,
    r = A(() => n.GetVisualWindowStartPX()),
    i = A(() => n.BReachedMaxScroll());
  return (0, U.jsxs)(`div`, {
    className: cu,
    children: [
      (0, U.jsx)(`div`, { className: t(lu, r === 0 && `geyoRt0NNcM-`) }),
      (0, U.jsx)(`div`, { className: t(uu, i && `geyoRt0NNcM-`) }),
    ],
  });
}
function Eu() {
  let [e, n] = (0, L.useState)({ scrollBarWidth: 0, scrollBarXOffset: 0 }),
    r = L.useCallback((e) => {
      let t = e.target.getBoundingClientRect();
      n({ scrollBarWidth: t.width, scrollBarXOffset: t.x });
    }, []),
    i = Y(),
    a = A(() => i.GetScrollableWidthPX() + 2 * i.GetTimelineMarginWidth()),
    o = A(() => i.GetVisualWidth()),
    s = (0, L.useMemo)(
      () => (o * e.scrollBarWidth) / a || 0,
      [o, e.scrollBarWidth, a],
    ),
    c = xe(r);
  return (0, U.jsxs)(`div`, {
    className: t(
      fu,
      Math.round(s) === Math.round(e.scrollBarWidth) && `cyfpsKb1Pow-`,
    ),
    ref: c,
    children: [
      (0, U.jsx)(Du, { timelineView: i, scrollSize: e }),
      (0, U.jsx)(Mu, {
        scrollSize: e,
        timelineView: i,
        timelineWidth: a,
        thumbWidth: s,
      }),
    ],
  });
}
function Du(e) {
  let { timelineView: t, scrollSize: n } = e,
    i = G(),
    a = Ou(t, n),
    o = A(() => t.GetTimelineMarginWidth()),
    s = A(() => t.GetScrollableWidthPX()),
    c = (0, L.useCallback)(
      (e) => {
        let t = e + o;
        return r((t * n.scrollBarWidth) / s, 0, n.scrollBarWidth);
      },
      [n.scrollBarWidth, o, s],
    );
  return (0, U.jsxs)(`div`, {
    className: pu,
    ...a,
    children: [
      (0, U.jsx)(ku, {
        timelineView: t,
        playbackCoordinator: i,
        fnConvertGlobalPXToTrackPX: c,
        scrollBarWidth: n.scrollBarWidth,
      }),
      (0, U.jsx)(ju, { timelineView: t, fnConvertGlobalPXToTrackPX: c }),
    ],
  });
}
function Ou(e, t) {
  let n = (0, L.useRef)(void 0),
    r = (0, L.useRef)(void 0),
    i = A(() => e.GetScrollableWidthPX()),
    a = (0, L.useCallback)(
      (e) => qi((i * e) / t.scrollBarWidth),
      [t.scrollBarWidth, i],
    ),
    o = (0, L.useCallback)(() => {
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
    s = (0, L.useCallback)(
      (e) => {
        ((n.current = a(e.clientX - t.scrollBarXOffset)),
          (r.current = requestAnimationFrame(() => o())));
      },
      [a, o, t.scrollBarXOffset],
    ),
    c = (0, L.useCallback)(() => {
      r.current && cancelAnimationFrame(r.current);
    }, []),
    l = (0, L.useCallback)(
      (e) => {
        n.current = a(e.clientX - t.scrollBarXOffset);
      },
      [a, t.scrollBarXOffset],
    );
  return (
    (0, L.useEffect)(
      () => () => {
        r.current && cancelAnimationFrame(r.current);
      },
      [],
    ),
    { onMouseDown: s, onMouseMove: l, onMouseUp: c, onMouseLeave: c }
  );
}
function ku(e) {
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
    ? (0, U.jsx)(`div`, {
        className: mu,
        onClick: () => {
          let e = n.GetGlobalMSPlaytime();
          (a && (e = n.GetLiveEdgeMS()), t.ScrollToCenteredGlobalMS(e.valMS));
        },
        style: { transform: `translateX(${a ? i : o}px)` },
        children: (0, U.jsx)(Au, {}),
      })
    : null;
}
function Au() {
  return (0, U.jsx)(`svg`, {
    width: `52`,
    height: `31`,
    viewBox: `0 0 52 31`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, U.jsx)(`path`, {
      d: `M26 31L51.1147 0.25H0.885263L26 31Z`,
      fill: `#D9D9D9`,
    }),
  });
}
function ju(e) {
  let { timelineView: t, fnConvertGlobalPXToTrackPX: n } = e,
    r = io(),
    i = Za(),
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
    ? (0, U.jsx)(`div`, {
        className: hu,
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
function Mu(e) {
  let { scrollSize: n, timelineWidth: r, thumbWidth: i, timelineView: a } = e,
    { thumbPositionPX: o, onMouseDown: s, bHiglightThumb: c } = Nu(n, r, i, a);
  return (0, U.jsx)(`div`, {
    className: t(gu, c && `jBCmf-dRAeA-`),
    style: { width: i, transform: `translateX(${o}px)` },
    onMouseDown: s,
  });
}
function Nu(e, t, n, i) {
  let [a, o] = (0, L.useState)(!1),
    [s, c] = (0, L.useState)(0),
    l = A(() => {
      let a = i.BInitialized(),
        o = i.GetVisualWindowStartPX();
      return a ? r((o * e.scrollBarWidth) / t, 0, e.scrollBarWidth - n) : 0;
    }),
    [u, d] = (0, L.useState)(!1),
    f = (0, L.useRef)(void 0);
  (0, L.useEffect)(() => {
    if (i.GetAutoScrollPaused())
      return (
        d(!0),
        (f.current = window.setTimeout(() => {
          d(!1);
        }, 500)),
        () => window.clearTimeout(f.current)
      );
  }, [l, i]);
  let p = (0, L.useCallback)(
      (t) => {
        (c(l), o(!0));
        let n = t.nativeEvent.offsetX,
          r = i.GetTimelineParentCtnRef() ?? E(t),
          a,
          s,
          u,
          d = (t) => {
            c(t.clientX - e.scrollBarXOffset - n);
          };
        (r.addEventListener(`mousemove`, d),
          (a = () => r.removeEventListener(`mousemove`, d)));
        let f = () => {
          (o(!1), a(), s(), u());
        };
        (r.addEventListener(`mouseup`, f),
          r.addEventListener(`mouseleave`, f),
          (s = () => r.removeEventListener(`mouseup`, f)),
          (u = () => r.removeEventListener(`mouseleave`, f)));
      },
      [l, e.scrollBarXOffset, i],
    ),
    m = (0, L.useMemo)(
      () => (a ? r(s, 0, e.scrollBarWidth - n) : l),
      [s, a, l, e.scrollBarWidth, n],
    );
  return (
    (0, L.useEffect)(() => {
      if (a) {
        let n = (t * m) / e.scrollBarWidth;
        i.ScrollToOffset(n);
      }
    }, [a, e.scrollBarWidth, m, i, t]),
    { thumbPositionPX: m, onMouseDown: p, bHiglightThumb: u }
  );
}
function Pu(e, t) {
  let n = A(
    () =>
      !t.GetAutoScrollPaused() &&
      e.GetGameRecordingVideo().BVideoElementPlaying(),
  );
  (0, L.useEffect)(() => {
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
var Fu = `ntKPAM1NZ9k-`,
  Iu = `JXv-qDT9fmY-`,
  Lu = `Rg3Qyz2aIKM-`;
function Ru(e) {
  let t = Y(),
    n = A(() => t.GetVisibleTimelines());
  return (0, U.jsx)(U.Fragment, {
    children: n.flatMap((e) =>
      e.phaseOffsets.map((t, n) =>
        (0, L.createElement)(zu, {
          ...t,
          timeline: e,
          key: `${e.timelineID}_${n}`,
        }),
      ),
    ),
  });
}
function zu(e) {
  let { timelineOffsetMS: t, nDurationMS: n, phase: r, timeline: i } = e;
  return (0, U.jsxs)(Bu, {
    ...e,
    children: [(0, U.jsx)(Hu, {}), (0, U.jsx)(Vu, {}), (0, U.jsx)(Hu, {})],
  });
}
function Bu(e) {
  let {
      children: n,
      timeline: r,
      timelineOffsetMS: i,
      nDurationMS: a,
      phase: o,
    } = e,
    s = Y(),
    c = G(),
    l = cs()?.valPX || -1,
    u = us(),
    [d] = fs(),
    {
      pxStart: f,
      pxWidth: p,
      bHighlight: m,
    } = A(() => {
      let e = s.GetPhaseToHighlight();
      return {
        pxStart: s.ConvertGlobalMSToGlobalPXOffset(r.globalOffsetMS + i),
        pxWidth: s.ConvertDurationMSToDeltaPX(a),
        bHighlight:
          e && e[0] === r.timelineID && e[1] === o.background_timeline_offset,
      };
    }),
    h = (u || d) && l >= f && l <= f + p,
    [g, _] = ha(),
    v = () => {
      let e = c.GetLoader(),
        t = e.GetTimelineData(r.timelineID),
        n = e.GetTimelineMetadata(r.timelineID),
        a = t.m_rgPhases.find((e) => parseInt(e.time) === i);
      a && _({ entry: a, timeline: n });
    },
    y = () => _(void 0);
  return (0, U.jsx)(`div`, {
    className: t(Fu, h && `_7iKrpiRqfb4-`, m && `-VGOLVELQNE-`),
    style: { transform: `translateX( ${f}px )`, width: `${p}px` },
    onMouseOver: v,
    onMouseLeave: y,
    onFocus: v,
    onBlur: y,
    children: n,
  });
}
function Vu(e) {
  return (0, U.jsx)(`div`, { className: Iu });
}
function Hu(e) {
  return (0, U.jsx)(`div`, { className: Lu });
}
var Uu = `YTX0fQkY6BM-`;
function Wu(e) {
  let t = Y(),
    n = A(() => t.GetVisibleTimelines());
  return (0, U.jsx)(U.Fragment, {
    children: n.map((e) => (0, U.jsx)(Gu, { timeline: e }, e.timelineID)),
  });
}
function Gu(e) {
  let { timeline: t } = e,
    n = Y(),
    r = A(() => n.GetVisibleTimelineHighlights(t.timelineID) || []),
    i = A(() => n.GetTimelineOffsetMS(t.timelineID)),
    a = t.globalOffsetMS - i;
  return (0, U.jsx)(U.Fragment, {
    children: r
      .filter((e) => Ms(e) === `range_highlight`)
      .map((e) =>
        (0, U.jsx)(
          Ku,
          { entry: e, timeline: t, timelineView: n, timelineOffset: a },
          e.id,
        ),
      ),
  });
}
function Ku(e) {
  let { timelineView: t, entry: n, timelineOffset: r } = e,
    i = r + parseInt(n.time),
    { pxStart: a, pxWidth: o } = A(() => ({
      pxStart: t.ConvertGlobalMSToGlobalPXOffset(i),
      pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(n.duration)),
    })),
    s = { width: `${o}px`, transform: `translateX( ${a}px )` };
  return (0, U.jsx)(`svg`, {
    className: Uu,
    style: s,
    children: (0, U.jsx)(`line`, {
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
var qu = 0.08;
function Ju(e) {
  let {
      loader: n,
      className: r,
      clipSummaries: i,
      refTimelineParentCtn: a,
      disableZoom: o,
    } = e,
    s = A(() => n.BInitialized()),
    c = G();
  if (!s) return (0, U.jsx)(`div`, { className: ja });
  let l = t(Ma, c.GetGamepadMode() && `xP7qeNW99Qo-`, r);
  return (0, U.jsx)(vo, {
    loader: n,
    clipSummaries: i,
    playbackCoordinator: c,
    refTimelineParentCtn: a,
    children: (0, U.jsxs)(`div`, {
      className: l,
      dir: `ltr`,
      children: [
        (0, U.jsx)(Zu, {}),
        (0, U.jsx)(Qu, {}),
        (0, U.jsx)(_n, {
          tour: `recording_timeline`,
          name: `timeline`,
          options: { position: `left`, offset: 20 },
          children: (0, U.jsx)(Su, {
            className: Na,
            disableZoom: o,
            children: (0, U.jsx)(Yu, {}),
          }),
        }),
      ],
    }),
  });
}
var Yu = (0, L.memo)(function (e) {
  let t = Y();
  return A(() => t.BInitialized()) ? (0, U.jsx)(Xu, {}) : null;
});
function Xu() {
  let e = Y(),
    t = A(() => e.GetScrollableWidthPX()),
    n = A(() => e.GetVisualWindowStartPX()),
    r = A(() => e.GetTimelineMarginWidth());
  return (0, U.jsxs)(`div`, {
    className: Pa,
    style: {
      minWidth: t || 0,
      marginRight: r,
      marginLeft: r,
      transform: `translateX(${-n}px)`,
    },
    children: [
      (0, U.jsx)(X, {
        id: `recordings`,
        className: La,
        children: (0, U.jsx)($l, {}),
      }),
      (0, U.jsx)(X, {
        id: `clips`,
        className: Ra,
        children: (0, U.jsx)(ru, {}),
      }),
      (0, U.jsx)(X, {
        id: `game_modes`,
        className: za,
        children: (0, U.jsx)(zs, {}),
      }),
      (0, U.jsx)(X, {
        id: `date_decorators`,
        className: Ba,
        children: (0, U.jsx)(Yl, {}),
      }),
      (0, U.jsx)(X, {
        id: `ticks`,
        className: Va,
        children: (0, U.jsx)(Oo, {}),
      }),
      (0, U.jsxs)(os, {
        children: [
          (0, U.jsx)(X, {
            id: `highlights`,
            className: Ha,
            children: (0, U.jsx)(Ds, {}),
          }),
          (0, U.jsx)(X, {
            id: `range_selection`,
            className: Wa,
            children: (0, U.jsx)(Pl, {}),
          }),
          (0, U.jsx)(X, {
            id: `seek_scrub`,
            className: Ga,
            children: (0, U.jsx)(Sl, {}),
          }),
          (0, U.jsx)(X, {
            id: `play_head`,
            className: Ka,
            children: (0, U.jsx)(Xs, {}),
          }),
          (0, U.jsx)(X, {
            id: `phases`,
            className: Ya,
            children: (0, U.jsx)(Ru, {}),
          }),
          (0, U.jsx)(X, {
            id: `range_highlights`,
            className: Ua,
            children: (0, U.jsx)(Wu, {}),
          }),
        ],
      }),
    ],
  });
}
function X(e) {
  let { children: n, id: r, className: i } = e;
  return (0, U.jsx)(`div`, {
    id: r,
    className: t(i, Fa),
    children: (0, U.jsx)(`div`, { className: Ia, children: n }),
  });
}
function Zu(e) {
  let t = G().GetRenderGlyph();
  return t ? t(ge.TRIGGER_LEFT, !1, !1, qa) : null;
}
function Qu(e) {
  let t = G().GetRenderGlyph();
  return t ? t(ge.TRIGGER_RIGHT, !1, !1, Ja) : null;
}
function $u() {
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
var ed = {
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
  Z = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
            name: { n: 3, br: i.readString, bw: _.writeString },
            desc: { n: 4, br: i.readString, bw: _.writeString },
            branches: {
              n: 5,
              r: !0,
              q: !0,
              br: i.readString,
              bw: _.writeRepeatedString,
            },
            last_update_rtime: { n: 6, br: i.readUint32, bw: _.writeUint32 },
            priority: { n: 7, br: i.readUint32, bw: _.writeUint32 },
            last_publish_rtime: { n: 8, br: i.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSet`;
    }
  },
  td = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            assetset: { n: 2, c: Z },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_CreateAssetSet_Request`;
    }
  },
  nd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetset || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { assetset: { n: 1, c: Z } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_CreateAssetSet_Response`;
    }
  },
  rd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_DeleteAssetSet_Request`;
    }
  },
  id = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_DeleteAssetSet_Response`;
    }
  },
  ad = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            assetset: { n: 2, c: Z },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdateAssetSet_Request`;
    }
  },
  od = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), I.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdateAssetSet_Response`;
    }
  },
  sd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: i.readUint32, bw: _.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_GetAllAssetSets_Request`;
    }
  },
  cd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetset || a(e.M()),
        I.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { assetset: { n: 2, c: Z, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_GetAllAssetSets_Response`;
    }
  },
  ld = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
            branch: { n: 3, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_AddBranchToAssetSet_Request`;
    }
  },
  ud = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: Z } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_AddBranchToAssetSet_Response`;
    }
  },
  dd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
            branch: { n: 3, br: i.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_RemoveBranchFromAssetSet_Request`;
    }
  },
  fd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: Z } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_RemoseBranchFromAssetSet_Response`;
    }
  },
  pd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            first_assetset_id: {
              n: 2,
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
            second_assetset_id: {
              n: 3,
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_SwapAssetSetPriority_Request`;
    }
  },
  md = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated_first || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            updated_first: { n: 1, c: Z },
            updated_second: { n: 2, c: Z },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_SwapAssetSetPriority_Response`;
    }
  },
  hd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: _.writeUint32 },
            assetset_id: {
              n: 2,
              br: i.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdatePublishTime_Request`;
    }
  },
  gd = class e extends I.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.updated || a(e.M()),
        I.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { updated: { n: 1, c: Z } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= c(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new I.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return p(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new I.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAssetSetPublishing_UpdatePublishTime_Response`;
    }
  },
  _d;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.CreateAssetSet#1`, C(td, t, n), nd, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreateAssetSet = t;
  function n(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.DeleteAssetSet#1`, C(rd, t, n), id, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeleteAssetSet = n;
  function r(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.UpdateAssetSet#1`, C(ad, t, n), od, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdateAssetSet = r;
  function i(e, t, n) {
    return e.SendMsg(`AssetSetPublishing.GetAllAssetSets#1`, C(sd, t, n), cd, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  e.GetAllAssetSets = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.AddBranchToAssetSet#1`,
      C(ld, t, n),
      ud,
      { ePrivilege: 7, rgBrowserAPISites: [`partner`] },
    );
  }
  e.AddBranchToAssetSet = a;
  function o(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.RemoveBranchFromAssetSet#1`,
      C(dd, t, n),
      fd,
      { ePrivilege: 7, rgBrowserAPISites: [`partner`] },
    );
  }
  e.RemoveBranchFromAssetSet = o;
  function s(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.SwapAssetSetPriority#1`,
      C(pd, t, n),
      md,
      { ePrivilege: 7 },
    );
  }
  e.SwapAssetSetPriority = s;
  function c(e, t, n) {
    return e.SendMsg(
      `AssetSetPublishing.UpdatePublishTime#1`,
      C(hd, t, n),
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
    m_dummyAssetSetCallback = new me();
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
            name: O(
              `#TimelineMarkers_Hidden_new_asset_set_new_name`,
              this.GetAllNonSpecialAssetSets(e).length + 1,
            ),
            desc: ``,
          };
    }
    GetAssetSetChangeCallback(e) {
      return e
        ? (this.m_mapAssetSetCallback.has(e) ||
            this.m_mapAssetSetCallback.set(e, new me()),
          this.m_mapAssetSetCallback.get(e))
        : this.m_dummyAssetSetCallback;
    }
    GetAppAssetSetListChangeCallback(e) {
      return (
        this.m_mapAssetSetListChangeCallback.has(e) ||
          this.m_mapAssetSetListChangeCallback.set(e, new me()),
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
      let t = oe.Init(td),
        n = null;
      try {
        (t.Body().set_appid(e.appid), t.Body().set_assetset(Z.fromObject(e)));
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
        n = M(r);
      } catch (e) {
        n = M(e);
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
      let t = oe.Init(ad),
        n = null;
      try {
        (t.Body().set_appid(e.appid), t.Body().set_assetset(Z.fromObject(e)));
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
        n = M(r);
      } catch (e) {
        n = M(e);
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
      let n = oe.Init(rd),
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
        r = M(i);
      } catch (e) {
        r = M(e);
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
      let r = oe.Init(ld),
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
        i = M(o);
      } catch (e) {
        i = M(e);
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
      let r = oe.Init(dd),
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
        i = M(s);
      } catch (e) {
        i = M(e);
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
      let e = v(`asset_sets`, `application_config`);
      (this.ValidateStoreDefault(e) &&
        e.forEach((e) => this.m_mapAssetSets.set(e.assetset_id, e)),
        (this.m_SteamInterface = tn(new en(ne.WEBAPI_BASE_URL))));
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].assetset_id == `string` && typeof t[0].appid == `number`
        : !1;
    }
  };
(x([T], Q.prototype, `CreateAssetSet`, null),
  x([T], Q.prototype, `UpdateAssetSet`, null),
  x([T], Q.prototype, `DeleteAssetSet`, null),
  x([T], Q.prototype, `AddBranchToAssetSet`, null),
  x([T], Q.prototype, `RemoveBranchFromAssetSet`, null));
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
  return Q.Get().GetAssetSetByID(e, t)?.name || O(`#Unknown`);
}
function Cd(e) {
  let [t, n] = (0, L.useState)(() => Q.Get().GetAllAssetSets(e));
  return (he(Q.Get().GetAppAssetSetListChangeCallback(e), n), t);
}
function wd(e) {
  let [t, n] = (0, L.useState)(() => Q.Get().GetAllNonSpecialAssetSets(e));
  return (
    he(Q.Get().GetAppAssetSetListChangeCallback(e), (e) =>
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
  let [t, n] = (0, L.useState)(null),
    [r, i] = (0, L.useState)(null),
    a = (0, L.useCallback)((e) => {
      Q.Get()
        .GetAllAssetSets(e)
        .forEach((e) => {
          e.name === `steam_default_assetset`
            ? n(e.assetset_id)
            : e.name === `steam_default_hidden` && i(e.assetset_id);
        });
    }, []);
  return (
    (0, L.useEffect)(() => a(e), [e, a]),
    he(Q.Get().GetAppAssetSetListChangeCallback(e), (t) => a(e)),
    { publicAssetSetID: t, hiddenAssetSetID: r }
  );
}
function Ed(e, t) {
  let [n, r] = (0, L.useState)(() => Q.Get().GetAssetSetByID(e, t));
  return (he(Q.Get().GetAssetSetChangeCallback(t), r), n);
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
  return (0, U.jsxs)(Ie, {
    onClick: (e) => kd(r, i, t),
    disabled: !t,
    children: [
      `↓`,
      ` `,
      O(`#TimelineMarkers_Hidden_download`),
      `\xA0`,
      (0, U.jsx)(k, {
        toolTipContent: O(`#TimelineMarkers_Hidden_download_ttip`),
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
var $ = class t {
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
        this.m_mapAssetSetAndMarkerIDToMarkerChanges.set(n, new me()),
      this.m_mapAssetSetAndMarkerIDToMarkerChanges.get(n)
    );
  }
  GetAppMarkerListChange(e) {
    return (
      this.m_mapAppToMarkerListChange.has(e) ||
        this.m_mapAppToMarkerListChange.set(e, new me()),
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
      let s = `${ne.PARTNER_BASE_URL}timelinemarkers/ajaxcreatemarker`,
        c = await kn.default.post(s, o);
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
      a = M(c);
    } catch (e) {
      a = M(e);
    }
    return (
      console.error(
        `CTimelineMarkerEditorStore create failed with ` + a.strErrorMsg,
        a,
      ),
      2
    );
  }
  async UpdateTimelineMarkerDefinition(t, n, r, i, a, o) {
    let s = null,
      c = this.m_mapTimelineMarker.get(r);
    if (!c)
      return (
        console.error(
          `CTimelineMarkerEditorStore attempting update, timeline markerid does not exist: ` +
            r,
        ),
        42
      );
    e(
      t == c.appid,
      `Unexpected in UpdateTimelineMarkerDefinition appid don't match`,
    );
    let l = c.markerid,
      u = c.asset_set_id;
    try {
      let e = new FormData();
      (e.append(`sessionid`, g()),
        e.append(`appid`, `` + t),
        e.append(`asset_set_id`, n),
        e.append(`markerid`, i),
        e.append(`imagedata`, a),
        e.append(`imagetype`, `` + o),
        e.append(`timeline_marker_id`, r));
      let c = `${ne.PARTNER_BASE_URL}timelinemarkers/ajaxupdatemarker`,
        d = await kn.default.post(c, e);
      if (d?.status == 200 && d.data.success == 1) {
        let e = d.data.updated_marker;
        this.m_mapTimelineMarker.set(e.timeline_marker_id, e);
        let r = this.GetAppMarkers(u, l);
        if (
          (this.GetMarkerChange(u, l).Dispatch(
            r.oPublishedMarker,
            r.oUnpublishedMarker,
          ),
          l != e.markerid)
        ) {
          let t = this.GetAppMarkers(n, e.markerid);
          this.GetMarkerChange(n, e.markerid).Dispatch(
            t.oPublishedMarker,
            t.oUnpublishedMarker,
          );
        }
        return (
          this.GetAppMarkerListChange(t).Dispatch([
            ...this.GetAllMarkersForApp(t),
          ]),
          Sd(t, n) == `steam_default_assetset` &&
            this.EnsureRequirePublishingIsVisible(),
          1
        );
      }
      s = M(d);
    } catch (e) {
      s = M(e);
    }
    return (
      console.error(
        `CTimelineMarkerEditorStore update failed with ` + s.strErrorMsg,
        s,
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
      let s = `${ne.PARTNER_BASE_URL}timelinemarkers/ajaxdeletemarker`,
        c = await kn.default.post(s, o);
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
      r = M(c);
    } catch (e) {
      r = M(e);
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
      let a = `${ne.PARTNER_BASE_URL}timelinemarkers/ajaxpublishmarkers`,
        o = await kn.default.post(a, i);
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
      r = M(o);
    } catch (e) {
      r = M(e);
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
      t.s_Singleton || ((t.s_Singleton = new t()), t.s_Singleton.Init()),
      t.s_Singleton
    );
  }
  Init() {
    let e = v(`timeline_markers`, `application_config`);
    (this.ValidateStoreDefault(e) &&
      e.forEach((e) => this.m_mapTimelineMarker.set(e.timeline_marker_id, e)),
      jn(Ud));
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].asset_set_id == `string` && typeof t[0].appid == `number`
      : !1;
  }
};
(x([T], $.prototype, `CreateTimelineMarkerDefinition`, null),
  x([T], $.prototype, `UpdateTimelineMarkerDefinition`, null),
  x([T], $.prototype, `DeleteTimelineMarkerDefinition`, null),
  x([T], $.prototype, `PublishTimelineMarkerDefinitions`, null));
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
  let [t, n] = (0, L.useState)(() => $.Get().GetAllMarkersForApp(e));
  return (he($.Get().GetAppMarkerListChange(e), n), t);
}
function Vd(e, t) {
  let [n, r] = (0, L.useState)(() => $.Get().GetMarkerIDSetForAssetSetID(t));
  return (
    (0, L.useEffect)(() => {
      t && e && r($.Get().GetMarkerIDSetForAssetSetID(t));
    }, [e, t]),
    he($.Get().GetAppMarkerListChange(e), () =>
      r($.Get().GetMarkerIDSetForAssetSetID(t)),
    ),
    n
  );
}
function Hd(e, t) {
  let [n, r] = (0, L.useState)(null),
    [i, a] = (0, L.useState)(null);
  return (
    (0, L.useEffect)(() => {
      let n = $.Get().GetAppMarkers(e, t);
      n && (r(n.oPublishedMarker), a(n.oUnpublishedMarker));
    }, [e, t]),
    he($.Get().GetMarkerChange(e, t), (e, t) => {
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
  let { imageBase64OrUntrustedSVG: n, imageType: r } = e;
  if (!n) return null;
  let i;
  return (
    r == 1
      ? (i = `data:image/svg+xml,${encodeURIComponent(n)}`)
      : r == 2 && (i = n),
    (0, U.jsx)(`div`, {
      className: t(Xd),
      children: (0, U.jsxs)(`div`, {
        className: rf,
        children: [
          (0, U.jsx)(`img`, {
            className: Qd,
            src: i,
            alt: `SVG Large Preview`,
          }),
          (0, U.jsx)(`img`, {
            className: $d,
            src: i,
            alt: `SVG Medium Preview`,
          }),
          (0, U.jsx)(`img`, {
            className: ef,
            src: i,
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
  return (0, U.jsx)(`img`, { className: ef, src: n, alt: `SVG Small Preview` });
}
function hf(e) {
  let { appid: t, assetSetID: n, markerID: r } = e,
    { oPublishedMarker: i, oUnpublishedMarker: a } = Hd(n, r),
    { publicAssetSetID: o, hiddenAssetSetID: s } = Td(t),
    [c, l] = (0, L.useState)(!1);
  if (!i && !a) return null;
  let u = a || i,
    d = !!(a && a.asset_set_id != s),
    f = i?.asset_set_id === o;
  return (0, U.jsxs)(`div`, {
    className: of,
    onMouseEnter: () => l(!0),
    onMouseLeave: () => l(!1),
    children: [
      d &&
        (0, U.jsx)(`span`, {
          className: `qnCfcbOAK-c-`,
          children: O(`#TimelineMarker_state_pending`),
        }),
      (0, U.jsx)(pf, {
        imageBase64OrUntrustedSVG: u.image,
        imageType: u.image_type,
      }),
      (0, U.jsx)(`div`, { className: af, children: u.markerid }),
      c &&
        (0, U.jsx)(Ie, {
          className: `F2avAdiaobg-`,
          onClick: (e) =>
            Ge(
              (0, U.jsx)(Af, {
                appid: t,
                bDisallowMarkerIDEdit: f,
                oTimelineMarkerDef: u,
              }),
              E(e),
            ),
          children: O(`#Button_Edit`),
        }),
    ],
  });
}
function gf(e) {
  let { appid: t, assetSetID: n, strMessageOnEmpty: r, bDraggable: i } = e,
    a = Vd(t, n);
  return !a || a.size == 0
    ? (0, U.jsx)(`div`, { className: ff, children: r })
    : (0, U.jsx)(`div`, {
        className: tf,
        children: (0, U.jsx)(vf, {
          assetSetID: n,
          children: Array.from(a).map((e, r) =>
            (0, U.jsx)(
              _f,
              {
                id: `assetsetid_${n}_markerid_${e}`,
                index: r,
                bDraggable: i,
                children: (0, U.jsx)(hf, {
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
  return (0, U.jsx)(pn, {
    draggableId: t,
    index: r,
    isDragDisabled: !i,
    children: (e) =>
      (0, U.jsx)(`div`, {
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
  return (0, U.jsx)(mn, {
    droppableId: `undroppable` + t,
    direction: `horizontal`,
    children: (e) =>
      (0, U.jsxs)(`div`, {
        ref: e.innerRef,
        ...e.droppableProps,
        style: { display: `flex` },
        children: [n, e.placeholder],
      }),
  });
}
function yf(e) {
  let { assetSetID: t, appid: n, strMessage: r } = e;
  return (0, U.jsx)(mn, {
    droppableId: `droptarget_assetsetid_${t}_appid_${n}`,
    children: (e) =>
      (0, U.jsxs)(`div`, {
        ...e.droppableProps,
        ref: e.innerRef,
        className: sf,
        children: [(0, U.jsx)(`span`, { children: r }), e.placeholder],
      }),
  });
}
function bf(e) {
  let { appid: t, markerID: n } = e,
    r = xf(t);
  return (
    (0, L.useEffect)(() => {
      let e = r.GetTimelines()[0].metadata.timeline_id;
      (r.RemoveTimelineEvent(e, `5`),
        r.RemoveTimelineEvent(e, `12`),
        r.RemoveTimelineEvent(e, `16`),
        r.AddEventToTimeline(e, 12500, n, `5`, 9, n, n, 0),
        r.AddEventToTimeline(e, 33500, n, `12`, 2, n, n, 0),
        r.AddEventToTimeline(e, 48500, n, `16`, 9, n, n, 0));
    }, [n, r]),
    (0, U.jsx)(ma, {
      loader: r,
      fnGetManifest: () => ``,
      mode: ca.Partner,
      children: (0, U.jsx)(Ju, { loader: r, disableZoom: !0 }),
    })
  );
}
function xf(e) {
  let [t] = (0, L.useState)(() => new $i());
  return (
    (0, L.useEffect)(() => {
      let n = $u(),
        r = { ...ed, entries: ed.entries.map((e) => e) };
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
                  t(O(`#TimelineMarkers_Error_PNGSize`, 24)))
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
                t(O(`#TimelineMarkers_Error_PNGDimensions`)));
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
              t(O(`#TimelineMarkers_Error_UnknownFileType`, r)));
      }),
        e.type === `image/svg+xml` || e.name.endsWith(`.svg`)
          ? n.readAsText(e)
          : n.readAsDataURL(e));
    } else return t(O(`#TimelineMarkers_Error_NotFound`));
  });
}
function Ef(e) {
  let t = e.lastIndexOf(`.`);
  return t !== -1 && t > e.lastIndexOf(`/`) ? e.slice(0, t) : e;
}
function Df(e) {
  let { appid: t, closeModal: n } = e,
    [r, i] = (0, L.useState)(() => [
      { markerid: ``, image: null, image_type: null, timeline_marker_id: null },
    ]),
    [a, o] = (0, L.useState)(`hidden`),
    { publicAssetSetID: s, hiddenAssetSetID: c } = Td(t),
    { fnCreateTimelineMarkerDefinition: l } = Nd(),
    u = (0, L.useRef)(void 0),
    [d, f] = (0, L.useState)(null),
    p = nn(),
    m = (0, L.useCallback)(
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
    h = (0, L.useCallback)(
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
    ? (0, U.jsx)(rn, {
        state: p,
        strDialogTitle: O(`#TimelineMarkers_Dialog_Create`),
        closeModal: n,
      })
    : (0, U.jsx)(Ke, {
        strTitle: O(`#TimelineMarkers_Dialog_Create`),
        bOKDisabled: r.some(
          (e) => !Cf(e.markerid) || !e.image || e.image?.length < 10,
        ),
        bDisableBackgroundDismiss: !0,
        onCancel: n,
        strOKButtonText: O(`#Button_Create`),
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
              p.fnSetStrError(O(`#OptIn_Appeals_Dialog_Failed`)));
            return;
          }
          let n = !0;
          for (let i = 0; i < r.length; ++i) {
            let a = r[i];
            if ((await l(t, e, a.markerid, a.image, a.image_type)) != 1) {
              (p.fnSetError(!0),
                p.fnSetStrError(O(`#OptIn_Appeals_Dialog_Failed`)),
                (n = !1));
              break;
            }
          }
          n &&
            (p.fnSetSuccess(!0),
            p.fnSetStrSuccess(O(`#TimelineMarkers_Dialog_CreateSuccess`)));
        },
        children: (0, U.jsxs)(`div`, {
          className: Wd,
          children: [
            (0, U.jsxs)(`div`, {
              className: Kd,
              children: [
                (0, U.jsx)(`div`, {
                  children: O(`#TimelineMarkers_Dialog_Create_Description`),
                }),
                (0, U.jsxs)(`ul`, {
                  children: [
                    (0, U.jsxs)(`li`, {
                      children: [
                        (0, U.jsx)(`strong`, {
                          children: O(`#TimelineMarkers_Dialog_Name_Title`),
                        }),
                        ` - `,
                        O(`#TimelineMarkers_Dialog_Name_ttip`, 128),
                      ],
                    }),
                    (0, U.jsxs)(`li`, {
                      children: [
                        (0, U.jsx)(`strong`, {
                          children: O(`#TimelineMarkers_Dialog_SVG`),
                        }),
                        ` - `,
                        O(`#TimelineMarkers_Dialog_SVG_create_desc`),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            !!d &&
              (0, U.jsx)(`div`, { className: `_9rhLFCwqjPg-`, children: d }),
            (0, U.jsx)(`br`, {}),
            (0, U.jsx)(`br`, {}),
            (0, U.jsx)(`h3`, {
              children: O(`#TimelineMarkers_Dialog_Title_UploadIcons`),
            }),
            (0, U.jsx)(`input`, {
              type: `file`,
              accept: `.svg,.png`,
              style: { display: `none` },
              multiple: !0,
              name: `fileupload`,
              ref: u,
              onChange: h,
            }),
            (0, U.jsxs)(Ie, {
              onClick: () => u.current.click(),
              children: [
                (0, U.jsx)(Ee, {}),
                ` `,
                O(`#TimelineMarkers_Dialog_SVG_mutli_button`),
              ],
            }),
            (0, U.jsx)(`div`, {
              className: Jd,
              children: (0, U.jsx)(Of, { fnHandleFiles: m }),
            }),
            r?.length > 0 &&
              r[0].image?.length > 0 &&
              (0, U.jsx)(`h3`, {
                children: O(`#TimelineMarkers_Dialog_IconCreateTitle`),
              }),
            r.map((e, n) =>
              (0, U.jsx)(
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
            (0, U.jsx)(`br`, {}),
            (0, U.jsx)(`br`, {}),
            (0, U.jsx)(Mf, {
              createVisibilityState: a,
              setCreateVisibilityState: o,
            }),
          ],
        }),
      });
}
function Of(e) {
  let { fnHandleFiles: n } = e,
    [r, i] = (0, L.useState)(!1);
  return (0, U.jsx)(`div`, {
    className: t(Zd, r && `xb2yMHJAW80-`, sf),
    onDragEnter: (e) => {
      (e.preventDefault(), i(!0));
    },
    onDragOver: (e) => {
      e.preventDefault();
    },
    onDragLeave: () => {
      i(!1);
    },
    onDrop: (e) => {
      (e.preventDefault(), i(!1));
      let t = Array.from(e.dataTransfer.files);
      n(t);
    },
    children: (0, U.jsx)(`p`, {
      children: O(`#TimelineMarkers_Dialog_SVG_draganddrop`),
    }),
  });
}
function kf(e) {
  let { marker: t, appid: n, setMarkerID: r } = e;
  return (
    (0, L.useEffect)(
      () => (
        Rd(t.timeline_marker_id, t),
        () => {
          zd(t.timeline_marker_id);
        }
      ),
      [t],
    ),
    t?.image
      ? (0, U.jsxs)(U.Fragment, {
          children: [
            (0, U.jsx)(jf, {
              markerID: t.markerid,
              strErrorMessage: null,
              imageContent: t.image,
              imageType: t.image_type,
            }),
            (0, U.jsxs)(`div`, {
              className: Yd,
              children: [
                (0, U.jsxs)(`div`, {
                  children: [
                    (0, U.jsx)(Ne, {
                      children: O(`#TimelineMarkers_Dialog_Icon_Title`),
                    }),
                    (0, U.jsx)(pf, {
                      imageBase64OrUntrustedSVG: t.image,
                      imageType: t.image_type,
                    }),
                  ],
                }),
                (0, U.jsx)(ke, {
                  type: `text`,
                  value: t.markerid,
                  maxChars: 128,
                  label: O(`#TimelineMarkers_Dialog_Name_Title`),
                  placeholder: O(`#TimelineMarkers_Dialog_Name_placeholder`),
                  onChange: (e) => r(e.currentTarget.value || ``),
                }),
              ],
            }),
            (0, U.jsx)(Ne, {
              children: O(`#TimelineMarkers_Dialog_Icon_TimelinePreview`),
            }),
            (0, U.jsx)(bf, { appid: n, markerID: t.timeline_marker_id }),
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
    [a, o] = (0, L.useState)(i.markerid),
    {
      fnUpdateTimelineMarkerDefinition: s,
      fnDeleteTimelineMarkerDefinition: c,
    } = Nd(),
    [l, u] = (0, L.useState)(i.image),
    [d, f] = (0, L.useState)(i.image_type),
    [p, m] = (0, L.useState)(0),
    h = (0, L.useRef)(void 0),
    [g, _] = (0, L.useState)(null),
    v = O(`#TimelineMarkers_Dialog_Edit`, a);
  (0, L.useEffect)(() => {
    if (l && d && p && a) {
      let e = `temp_${p}_${i.timeline_marker_id}`;
      Rd(e, { image: l, image_type: d, timeline_marker_id: e, markerid: a });
    }
    return () => {
      p && zd(`temp_${p}_${i.timeline_marker_id}`);
    };
  }, [l, d, a, p, i.timeline_marker_id]);
  let y = (0, L.useCallback)(async (e) => {
      _(null);
      let t = e.currentTarget?.files?.[0],
        n = await Tf(t);
      typeof n == `string`
        ? _(n)
        : (u(n.image), f(n.image_type), m((e) => e + 1));
    }, []),
    b = nn();
  if (b.bLoading)
    return (0, U.jsx)(rn, { state: b, strDialogTitle: v, closeModal: n });
  let ee, x;
  if (!r || i.unpublished_changes) {
    let e = null;
    (Ld(i.asset_set_id, i.markerid).oPublishedMarker && i.unpublished_changes
      ? ((ee = O(`#Button_Revert`)),
        (e = O(`#TimelineMarkers_Dialog_RevertSuccess`)))
      : ((e = O(`#TimelineMarkers_Dialog_DeleteSuccess`)),
        (ee = O(`#Button_Delete`))),
      (x = async () => {
        Ge(
          (0, U.jsx)(Ke, {
            strTitle: ee,
            strDescription: O(`#Dialog_AreYouSure`),
            onOK: async () => {
              (b.fnSetLoading(!0),
                (await c(t, i.asset_set_id, i.timeline_marker_id)) == 1
                  ? (b.fnSetSuccess(!0), b.fnSetStrSuccess(e))
                  : (b.fnSetError(!0),
                    b.fnSetStrError(O(`#OptIn_Appeals_Dialog_Failed`))));
            },
          }),
          window,
        );
      }));
  }
  return (0, U.jsx)(Ke, {
    strTitle: v,
    bOKDisabled: !Cf(a) || l?.length < 10,
    bDisableBackgroundDismiss: !0,
    onCancel: n,
    onMiddleButton: x,
    strMiddleButtonText: ee,
    strOKButtonText: O(`#Button_Update`),
    onOK: async () => {
      (b.fnSetLoading(!0),
        (await s(t, i.asset_set_id, i.timeline_marker_id, a, l, d)) == 1
          ? (b.fnSetSuccess(!0),
            b.fnSetStrSuccess(O(`#TimelineMarkers_Dialog_UpdateSuccess`)))
          : (b.fnSetError(!0),
            b.fnSetStrError(O(`#OptIn_Appeals_Dialog_Failed`))));
    },
    children: (0, U.jsxs)(`div`, {
      className: Wd,
      children: [
        (0, U.jsx)(jf, {
          markerID: a,
          strErrorMessage: g,
          imageContent: l,
          imageType: d,
        }),
        (0, U.jsx)(`h3`, { children: O(`#TimelineMarkers_Dialog_Name_Title`) }),
        r
          ? (0, U.jsx)(`p`, {
              children: O(`#TimelineMarkers_Dialog_Name_Disabled`),
            })
          : (0, U.jsx)(`p`, {
              children: O(`#TimelineMarkers_Dialog_Name`, 128),
            }),
        (0, U.jsx)(ke, {
          type: `text`,
          value: a,
          disabled: r,
          maxChars: 128,
          className: Gd,
          placeholder: O(`#TimelineMarkers_Dialog_Name_placeholder`),
          tooltip: O(`#TimelineMarkers_Dialog_Name_ttip`),
          onChange: (e) => o(e.currentTarget.value || ``),
        }),
        (0, U.jsx)(`br`, {}),
        (0, U.jsx)(`br`, {}),
        (0, U.jsx)(`h3`, { children: O(`#TimelineMarkers_Dialog_SVG`) }),
        (0, U.jsx)(`p`, { children: O(`#TimelineMarkers_Dialog_SVG_desc`) }),
        (0, U.jsxs)(`div`, {
          className: Yd,
          children: [
            (0, U.jsx)(pf, { imageBase64OrUntrustedSVG: l, imageType: d }),
            (0, U.jsx)(`input`, {
              type: `file`,
              accept: `.svg,.png`,
              style: { display: `none` },
              multiple: !1,
              name: `fileupload`,
              ref: h,
              onChange: y,
            }),
            (0, U.jsxs)(Ie, {
              onClick: () => h.current.click(),
              children: [
                (0, U.jsx)(Ee, {}),
                ` `,
                O(`#TimelineMarkers_Dialog_SVG_button`),
              ],
            }),
          ],
        }),
        (0, U.jsx)(bf, {
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
  return (0, U.jsxs)(U.Fragment, {
    children: [
      !a &&
        t.length > 0 &&
        (0, U.jsx)(`div`, {
          className: `_9rhLFCwqjPg-`,
          children: O(`#TimelineMarkers_Dialog_Name_error`),
        }),
      !!o &&
        (0, U.jsx)(`div`, {
          className: `_9rhLFCwqjPg-`,
          children: O(`#TimelineMarkers_Dialog_Name_error2`),
        }),
      !!s &&
        (0, U.jsx)(`div`, {
          className: `EHcr1piLxMU-`,
          children: O(`#TimelineMarkers_Dialog_SVG_warning_dimensions`, s),
        }),
    ],
  });
}
function Mf(e) {
  let { createVisibilityState: t, setCreateVisibilityState: n } = e,
    r = L.useId();
  return (0, U.jsxs)(U.Fragment, {
    children: [
      (0, U.jsx)(`h3`, {
        id: r,
        children: O(`#TimelineMarkers_Dialog_Visibility`),
      }),
      (0, U.jsx)(Me, {
        labelId: r,
        value: t,
        onChange: (e) => {
          n(e);
        },
        children: (0, U.jsxs)(`div`, {
          className: qd,
          children: [
            (0, U.jsx)(je, {
              value: `public`,
              children: qe(
                `#TimelineMarkers_Dialog_Public`,
                (0, U.jsx)(`b`, {}),
              ),
            }),
            (0, U.jsx)(je, {
              value: `hidden`,
              children: qe(
                `#TimelineMarkers_Dialog_Hidden`,
                (0, U.jsx)(`b`, {}),
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
  let { appid: n } = e,
    { publicAssetSetID: r } = Td(n),
    i = Bd(n);
  return (0, U.jsx)(`div`, {
    children: (0, U.jsxs)(`div`, {
      className: Lf,
      children: [
        (0, U.jsxs)(`div`, {
          className: Rf,
          children: [
            (0, U.jsx)(`div`, {
              className: t(Ze),
              children: O(`#TimelineMarkers_Public_title`),
            }),
            (0, U.jsx)(`div`, { children: O(`#TimelineMarkers_Public_desc1`) }),
            (0, U.jsx)(`br`, {}),
            (0, U.jsx)(`div`, { children: O(`#TimelineMarkers_Public_desc2`) }),
          ],
        }),
        (0, U.jsx)(`div`, {
          className: zf,
          children: (0, U.jsxs)(`div`, {
            className: Nf,
            children: [
              r
                ? (0, U.jsx)(gf, {
                    assetSetID: r,
                    appid: n,
                    bDraggable: !1,
                    strMessageOnEmpty: O(`#TimelineMarkers_Public_none`),
                  })
                : (0, U.jsx)(`div`, {
                    children: O(`#TimelineMarkers_Public_none`),
                  }),
              i?.length > 0 &&
                (0, U.jsx)(yf, {
                  assetSetID: r || `publicmissing`,
                  appid: n,
                  strMessage: O(`#TimelineMarkers_drag_target_public`),
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
      let t = M({ success: e.eResult });
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
    i = (0, L.useMemo)(
      () =>
        n?.filter((e) => e.unpublished_changes && e.asset_set_id != r).length ||
        0,
      [n, r],
    );
  return i == 0
    ? null
    : (0, U.jsxs)(`div`, {
        className: Yf,
        children: [
          (0, U.jsx)(`div`, {
            className: Xf,
            children: Be(`#TimelineMarkers_Publishing_title`, i),
          }),
          (0, U.jsx)(`div`, {
            children: O(`#TimelineMarkers_Publishing_desc`),
          }),
          (0, U.jsx)(Ue, {
            onClick: (e) => {
              window.location.href = `${ne.PARTNER_BASE_URL}apps/publishing/${t}`;
            },
            children: O(`#TimelineMarkers_Publishing_action`),
          }),
        ],
      });
}
function Qf(e) {
  let { appid: t, assetSetID: n, closeModal: r } = e,
    i = Ed(t, n),
    { fnCreateAssetSet: a, fnUpdateAssetSet: o } = xd(),
    [s, c] = (0, L.useState)(i.name),
    [l, u] = (0, L.useState)(i.desc),
    d = s.trimStart().toLowerCase().startsWith(`steam_`),
    f = s.trim().length == 0,
    p = O(n ? `#AssetSet_Dialog_Edit_Title` : `#AssetSet_Dialog_Create_Title`),
    m = nn();
  return m.bLoading
    ? (0, U.jsx)(rn, { state: m, strDialogTitle: p, closeModal: r })
    : (0, U.jsxs)(Ke, {
        strTitle: p,
        strDescription: O(`#TimelineMarkers_Hidden_new_asset_set_desc`),
        strOKButtonText: O(`#Button_Save`),
        onOK: async () => {
          (m.fnSetLoading(!0), (i.name = s), (i.desc = l), (i.appid = t));
          let e = null;
          try {
            let t;
            (n ? (t = await o(i)) : ((i.branches = []), (t = await a(i))),
              t != 1 && (e = M({ sucess: t })));
          } catch (t) {
            e = M(t);
          }
          e
            ? (console.error(`Branch Set error ` + e.strErrorMsg, e),
              m.fnSetError(!0),
              m.fnSetStrError(O(`#OptIn_Appeals_Dialog_Failed`)))
            : m.fnSetSuccess(!0);
        },
        onCancel: r,
        bDisableBackgroundDismiss: !1,
        bOKDisabled: d || f || m.bLoading,
        children: [
          d &&
            (0, U.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: O(`#AssetSet_Dialog_Disallowed`),
            }),
          f &&
            (0, U.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: O(`#AssetSet_Dialog_MustHaveName`),
            }),
          (0, U.jsx)(ke, {
            type: `text`,
            label: O(`#AssetSet_Dialog_Edit_Name`),
            value: s,
            onChange: (e) => {
              c(e?.currentTarget?.value || ``);
            },
          }),
          (0, U.jsx)(ke, {
            type: `text`,
            label: O(`#AssetSet_Dialog_Edit_Description`),
            value: l,
            onChange: (e) => {
              u(e?.currentTarget?.value || ``);
            },
          }),
        ],
      });
}
function $f(e) {
  let { appid: n } = e,
    { hiddenAssetSetID: r } = Td(n);
  return (0, U.jsxs)(`div`, {
    className: t(void 0, zf),
    children: [
      (0, U.jsx)(`div`, {
        className: Pf,
        children: (0, U.jsxs)(`div`, {
          className: Bf,
          children: [
            (0, U.jsx)(`div`, {
              className: Vf,
              children: O(`#TimelineMarkers_Hidden_section_info`),
            }),
            (0, U.jsx)(ep, { appid: n }),
            (0, U.jsx)(Od, { appid: n, assetSetID: r }),
          ],
        }),
      }),
      (0, U.jsx)(`div`, {
        children: r
          ? (0, U.jsx)(gf, {
              appid: n,
              assetSetID: r,
              strMessageOnEmpty: O(`#TimelineMarkers_Hidden_none`),
              bDraggable: !0,
            })
          : (0, U.jsx)(`div`, {
              className: ff,
              children: O(`#TimelineMarkers_Hidden_none`),
            }),
      }),
      (0, U.jsxs)(`div`, {
        className: t(lf, uf),
        children: [
          (0, U.jsx)(`div`, {
            className: cf,
            children: (0, U.jsx)(We, { size: `10px` }),
          }),
          ` `,
          O(`#TimelineMarkers_drag_source_public`),
        ],
      }),
    ],
  });
}
function ep(e) {
  let { appid: t } = e,
    { hiddenAssetSetID: n } = Td(t),
    r = Vd(t, n);
  return (0, U.jsxs)(Ie, {
    disabled: !n || !r || r.size == 0,
    onClick: (e) => Ge((0, U.jsx)(tp, { appid: t }), E(e)),
    children: [`↑`, ` `, O(`#TimelineMarkers_MoveAllHiddenToPublic`)],
  });
}
function tp(e) {
  let { appid: t, closeModal: n } = e,
    { hiddenAssetSetID: r, publicAssetSetID: i } = Td(t),
    a = Vd(t, r),
    o = nn();
  return o.bLoading
    ? (0, U.jsx)(rn, {
        state: o,
        strDialogTitle: O(`#TimelineMarkers_MoveAllHiddenToPublic`),
        closeModal: n,
      })
    : (0, U.jsx)(Ke, {
        strTitle: O(`#TimelineMarkers_MoveAllHiddenToPublic`),
        strDescription: O(`#Dialog_AreYouSure`),
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
  return (0, U.jsxs)(`div`, {
    className: df,
    children: [
      (0, U.jsx)(`div`, {
        children: O(`#TimelineMarkers_Hidden_new_asset_set_desc`),
      }),
      (0, U.jsx)(Ie, {
        onClick: (e) => Ge((0, U.jsx)(Qf, { appid: t }), E(e)),
        children: O(`#TimelineMarkers_Hidden_new_asset_set`),
      }),
    ],
  });
}
function rp(e) {
  let { oAssetSet: t } = e;
  return t.name == `steam_default_assetset`
    ? (0, U.jsx)(`span`, { children: O(`#TimelineMarkers_Public_title`) })
    : t.name == `steam_default_hidden`
      ? (0, U.jsx)(`span`, { children: O(`#TimelineMarkers_Hidden_title`) })
      : (0, U.jsx)(`span`, { children: t.name });
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
    let e = v(`branch_details`, `application_config`);
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
  return (0, U.jsxs)(`div`, {
    className: cp,
    children: [
      (0, U.jsx)(`div`, {
        className: void 0,
        children: O(`#TimelineMarkers_Hidden_controls`),
      }),
      t.branches?.length > 0
        ? (0, U.jsx)(U.Fragment, {
            children: t.branches.map((e) =>
              (0, U.jsx)(
                `span`,
                { className: lp, children: (0, U.jsx)(fp, { branchName: e }) },
                e,
              ),
            ),
          })
        : (0, U.jsx)(`div`, {
            children: O(`#TimelineMarkers_Hidden_nobranches`),
          }),
      (0, U.jsx)(`br`, {}),
      (0, U.jsx)(Ie, {
        onClick: (e) => {
          Ge((0, U.jsx)(dp, { oAssetSet: t }), E(e));
        },
        children: O(`#TimelineMarkers_Hidden_updatebranches`),
      }),
      (0, U.jsx)(Ie, {
        onClick: () => {},
        children: O(`#TimelineMarkers_Hidden_publishbranch`),
      }),
    ],
  });
}
function dp(e) {
  let { oAssetSet: t, closeModal: n } = e,
    r = ap(),
    [i, a] = (0, L.useState)(new Set(t.branches || [])),
    { fnAddBranchToAssetSet: o, fnRemoveBranchFromAssetSet: s } = xd(),
    c = nn();
  return c.bLoading
    ? (0, U.jsx)(rn, {
        state: c,
        strDialogTitle: O(`#TimelineMarkers_Hidden_updatebranches`),
        closeModal: n,
      })
    : (0, U.jsxs)(Ke, {
        strTitle: O(`#TimelineMarkers_Hidden_updatebranches`),
        strDescription: O(`#AssetSet_Branch_Dialog_Desc`),
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
            ? c.fnSetStrSuccess(O(`#AssetSet_Branch_Dialog_nochange`))
            : c.fnSetStrSuccess(O(`#AssetSet_Branch_Dialog_updated`, n, r)),
            c.fnSetSuccess(!0));
        },
        children: [
          (0, U.jsx)(`br`, {}),
          r.map((e) =>
            (0, U.jsx)(
              De,
              {
                label: (0, U.jsx)(fp, { branchName: e.name }),
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
  return (0, U.jsxs)(`span`, {
    className: sp,
    children: [
      n?.password?.length > 0 &&
        (0, U.jsx)(k, {
          toolTipContent: O(`#AssetSet_Branch_Dialog_password`),
          bTopmost: !0,
          children: (0, U.jsx)(`span`, { children: `🔒 ` }),
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
    [s, c] = (0, L.useState)(null),
    { fnCreateTimelineMarkerDefinition: l } = Nd(),
    { hiddenAssetSetID: u } = Td(t),
    d = (0, L.useMemo)(() => {
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
            label: (0, U.jsxs)(U.Fragment, {
              children: [
                (0, U.jsx)(mf, { svgXmlUntrusted: e.image }),
                e.markerid,
                ` `,
                `(`,
                (0, U.jsx)(rp, { oAssetSet: t.get(e.asset_set_id) }),
                `)`,
              ],
            }),
            data: e,
          }))
      );
    }, [i.assetset_id, a, o, u]),
    f = nn();
  return f.bLoading
    ? (0, U.jsx)(rn, {
        state: f,
        strDialogTitle: O(`#TimelineMarker_Clone_title`),
        closeModal: r,
      })
    : (0, U.jsxs)(Ke, {
        strTitle: O(`#TimelineMarker_Clone_title`),
        strDescription: O(`#TimelineMarker_Clone_desc`, i.name),
        onCancel: r,
        bOKDisabled: !s,
        onOK: async () => {
          (f.fnSetLoading(!0),
            (await l(t, n, s.markerid, s.image, s.image_type)) == 1
              ? (f.fnSetStrSuccess(O(`#TimelineMarker_Clone_success`)),
                f.fnSetSuccess(!0))
              : f.fnSetError(!0));
        },
        children: [
          (0, U.jsx)(`br`, {}),
          (0, U.jsx)(`br`, {}),
          (0, U.jsx)(He, {
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
    [r] = Xe(`branchset`, !1);
  return (0, U.jsxs)(`div`, {
    className: If,
    children: [
      (0, U.jsxs)(`div`, {
        className: Lf,
        children: [
          (0, U.jsxs)(`div`, {
            className: Rf,
            children: [
              (0, U.jsx)(`div`, {
                className: Ze,
                children: O(`#TimelineMarkers_Hidden_title`),
              }),
              (0, U.jsx)(`div`, {
                children: O(`#TimelineMarkers_Hidden_desc2`),
              }),
            ],
          }),
          (0, U.jsx)($f, { appid: t }),
        ],
      }),
      r &&
        (0, U.jsxs)(`div`, {
          className: `kKRtxlasxms-`,
          children: [
            (0, U.jsxs)(`div`, {
              className: `ef8y-ZEir4c-`,
              children: [
                (0, U.jsx)(`div`, {
                  className: `fk3H7RK1Wg8-`,
                  children: O(`#TimelineMarkers_Hidden_branchsets_title`),
                }),
                (0, U.jsx)(np, { appid: t }),
              ],
            }),
            (0, U.jsx)(`div`, {
              className: `SWJQfBkJ08E-`,
              children: n?.map((e) =>
                (0, U.jsx)(
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
  return (0, U.jsxs)(`div`, {
    className: zf,
    children: [
      (0, U.jsxs)(`div`, {
        className: Pf,
        children: [
          (0, U.jsxs)(`div`, {
            className: Bf,
            children: [
              (0, U.jsx)(k, {
                toolTipContent: r.desc,
                children: (0, U.jsx)(`div`, {
                  className: Vf,
                  children: r.name,
                }),
              }),
              (0, U.jsx)(Od, { appid: r.appid, assetSetID: r.assetset_id }),
            ],
          }),
          (0, U.jsx)(up, { oAssetSet: r }),
        ],
      }),
      (0, U.jsxs)(`div`, {
        className: Ff,
        children: [
          (0, U.jsxs)(`div`, {
            className: Nf,
            children: [
              (0, U.jsx)(gf, {
                assetSetID: r.assetset_id,
                appid: r.appid,
                strMessageOnEmpty: ``,
                bDraggable: !0,
              }),
              (0, U.jsx)(yf, {
                assetSetID: r.assetset_id,
                appid: r.appid,
                strMessage: O(`#TimelineMarkers_drag_target`),
              }),
            ],
          }),
          (0, U.jsx)(`div`, {
            children: (0, U.jsx)(Ie, {
              onClick: (e) =>
                Ge((0, U.jsx)(pp, { appid: t, assetSetID: n }), E(e)),
              children: O(`#TimelineMarker_Clone_title`),
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
  return (0, U.jsx)(`div`, {
    className: qf,
    children: (0, U.jsxs)(fn, {
      onDragEnd: Gf,
      children: [
        (0, U.jsx)(_p, { appid: n }),
        (0, U.jsx)(Zf, { appid: n }),
        (0, U.jsx)(Hf, { appid: n }),
        (0, U.jsx)(mp, { appid: n }),
      ],
    }),
  });
}
function _p(e) {
  let { appid: n } = e;
  return (0, U.jsx)(`div`, {
    className: Jf,
    children: (0, U.jsxs)(`div`, {
      className: ln,
      children: [
        (0, U.jsxs)(`div`, {
          className: cn,
          children: [
            (0, U.jsx)(`div`, {
              className: dn,
              children: O(`#TimelineMarkers_Editor_title`),
            }),
            (0, U.jsx)(`div`, {
              className: sn,
              children: O(`#TimelineMarkers_Editor_desc`),
            }),
          ],
        }),
        (0, U.jsxs)(`div`, {
          className: on,
          children: [
            (0, U.jsx)(`div`, {
              className: dn,
              children: (0, U.jsx)(`a`, {
                href: `${ne.PARTNER_BASE_URL}doc/features/timeline`,
                className: t(un, Qe),
                target: `_blank`,
                children: O(`#AssetRequest_General_SeeDocs`),
              }),
            }),
            (0, U.jsxs)(`div`, {
              className: sn,
              children: [
                (0, U.jsx)(Ue, {
                  onClick: (e) => Ge((0, U.jsx)(Df, { appid: n }), E(e)),
                  children: O(`#TimelineMarkers_Editor_createnew`),
                }),
                (0, U.jsx)(`div`, {
                  children: O(`#TimelineMarkers_Editor_createnew_desc`),
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
