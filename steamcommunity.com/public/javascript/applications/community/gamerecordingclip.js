/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chunk~b792617135.js",
      "./chunk~01cfc309bf.js",
      "./chunk~f025431ab0.js",
      "./main.js",
      "../../../css/applications/community/chunk~bcf59b1f6b.css",
    ]),
) => i.map((i) => d[i]);

import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  A as n,
  C as r,
  Ft as i,
  G as a,
  I as o,
  L as s,
  Nt as c,
  Pt as l,
  R as u,
  T as d,
  at as f,
  k as p,
} from "./chunk~01cfc309bf.js";
import { t as m } from "./chunk~7b8a87bd30.js";
import { t as h } from "./chunk~92931c6310.js";
import {
  $ as g,
  A as _,
  B as v,
  C as y,
  D as ee,
  E as te,
  F as ne,
  G as re,
  H as ie,
  I as ae,
  J as oe,
  K as se,
  L as ce,
  M as le,
  N as ue,
  O as de,
  P as fe,
  Q as pe,
  S as me,
  T as he,
  U as ge,
  V as _e,
  W as ve,
  Z as ye,
  _ as be,
  a as xe,
  at as Se,
  b as Ce,
  dt as we,
  et as Te,
  ft as Ee,
  g as De,
  gt as Oe,
  h as ke,
  ht as Ae,
  i as je,
  it as Me,
  j as Ne,
  k as Pe,
  m as Fe,
  mt as Ie,
  n as Le,
  nt as Re,
  o as ze,
  ot as Be,
  p as Ve,
  pt as He,
  q as Ue,
  r as We,
  rt as Ge,
  st as Ke,
  tt as qe,
  ut as Je,
  v as Ye,
  w as Xe,
  x as Ze,
  y as Qe,
  z as $e,
} from "./chunk~95ecbf576c.js";
import { t as et } from "./chunk~c55d6473b2.js";
import {
  $d as tt,
  $h as nt,
  $p as rt,
  Ad as it,
  Ah as b,
  Ba as at,
  Cf as ot,
  Co as st,
  Df as x,
  Eo as ct,
  Fh as S,
  Gs as C,
  Gu as lt,
  Hf as ut,
  Hs as dt,
  Ih as w,
  Ji as ft,
  Ku as pt,
  Mh as T,
  Nh as E,
  Nu as mt,
  Ph as D,
  Qd as O,
  Rh as k,
  Su as ht,
  Uo as gt,
  Vi as _t,
  Wh as vt,
  Wm as yt,
  Ws as bt,
  Wu as xt,
  Xh as St,
  Xp as Ct,
  Yf as wt,
  Yh as A,
  Yu as Tt,
  Zd as Et,
  bu as j,
  gd as Dt,
  hf as Ot,
  hs as kt,
  if as At,
  jd as jt,
  jh as M,
  ju as Mt,
  kh as N,
  ld as Nt,
  mm as Pt,
  nd as Ft,
  nh as P,
  td as It,
  th as Lt,
  tp as Rt,
  uf as zt,
  uh as F,
  vs as Bt,
  wf as Vt,
} from "./main.js";
import { t as I } from "./chunk~06da9a7953.js";
var L = e(l(), 1),
  R = e(i(), 1),
  Ht = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.representation_name || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            representation_name: { n: 2, br: T.readString, bw: w.writeString },
            horizontal_resolution: {
              n: 3,
              br: T.readUint32,
              bw: w.writeUint32,
            },
            vertical_resolution: { n: 4, br: T.readUint32, bw: w.writeUint32 },
            frame_rate: { n: 5, br: T.readDouble, bw: w.writeDouble },
            bandwidth: { n: 6, br: T.readUint32, bw: w.writeUint32 },
            audio_sample_rate: { n: 7, br: T.readUint32, bw: w.writeUint32 },
            frame_rate_string: { n: 8, br: T.readString, bw: w.writeString },
            codec: { n: 9, br: T.readString, bw: w.writeString },
            audio_channel_config: {
              n: 10,
              br: T.readUint32,
              bw: w.writeUint32,
            },
            segment_info: { n: 11, c: Gt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingRepresentation`;
    }
  },
  Ut = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.component_name || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            component_name: { n: 1, br: T.readString, bw: w.writeString },
            contents: { n: 2, br: T.readUint32, bw: w.writeUint32 },
            segment_size: { n: 3, br: T.readUint32, bw: w.writeUint32 },
            file_type: { n: 4, br: T.readString, bw: w.writeString },
            representations: { n: 5, c: Ht, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingComponent`;
    }
  },
  Wt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            app_id: { n: 2, br: T.readUint32, bw: w.writeUint32 },
            num_segments: { n: 3, br: T.readUint32, bw: w.writeUint32 },
            length_milliseconds: { n: 4, br: T.readUint32, bw: w.writeUint32 },
            segment_duration_timescale: {
              n: 5,
              br: T.readUint32,
              bw: w.writeUint32,
            },
            segment_duration: { n: 6, br: T.readUint32, bw: w.writeUint32 },
            components: { n: 7, c: Ut, r: !0, q: !0 },
            start_time_ms: { n: 8, br: T.readUint32, bw: w.writeUint32 },
            start_offset_in_timeline_ms: {
              n: 9,
              br: T.readUint32,
              bw: w.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingDef`;
    }
  },
  Gt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segment_number || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segment_number: { n: 1, br: T.readUint32, bw: w.writeUint32 },
            segment_size_bytes: {
              n: 2,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            component_name: { n: 3, br: T.readString, bw: w.writeString },
            representation_name: { n: 4, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentInfo`;
    }
  },
  Kt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segment_info || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segment_info: { n: 1, c: Gt },
            url_host: { n: 2, br: T.readString, bw: w.writeString },
            url_path: { n: 3, br: T.readString, bw: w.writeString },
            use_https: { n: 4, br: T.readBool, bw: w.writeBool },
            request_headers: { n: 5, c: qt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentUploadInfo`;
    }
  },
  qt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: w.writeString },
            value: { n: 2, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders`;
    }
  },
  Jt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_manager_clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            video_manager_clip_id: {
              n: 1,
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
            video_manager_video_id: {
              n: 2,
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
            server_timeline_id: {
              n: 3,
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
            manifest_url: { n: 4, br: T.readString, bw: w.writeString },
            duration_ms: { n: 5, br: T.readUint32, bw: w.writeUint32 },
            start_offset_ms: { n: 6, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideoManagerClipID`;
    }
  },
  Yt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 1,
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
            gameid: { n: 2, br: T.readUint64String, bw: w.writeUint64String },
            date_recorded: { n: 4, br: T.readUint32, bw: w.writeUint32 },
            total_file_size_bytes: {
              n: 7,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            video_ids: { n: 9, c: Jt, r: !0, q: !0 },
            owner_steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
            upload_complete: { n: 11, br: T.readBool, bw: w.writeBool },
            duration_ms: { n: 12, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingClip`;
    }
  },
  Xt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip: { n: 2, c: Yt },
            video_def: { n: 3, c: Wt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CreateShareClip_Request`;
    }
  },
  Zt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { clip: { n: 1, c: Yt } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CreateShareClip_Response`;
    }
  },
  Qt = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 2,
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteSharedClip_Request`;
    }
  },
  $t = class e extends R.Message {
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
      return `CGameRecording_DeleteSharedClip_Response`;
    }
  },
  en = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: {
              n: 2,
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetSingleSharedClip_Request`;
    }
  },
  tn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { clip: { n: 1, c: Yt } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetSingleSharedClip_Response`;
    }
  },
  nn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            component_name: { n: 2, br: T.readString, bw: w.writeString },
            representation_name: { n: 3, br: T.readString, bw: w.writeString },
            segments_to_store: { n: 4, c: Gt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_BeginGameRecordingSegmentsUpload_Request`;
    }
  },
  rn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segments_needed || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segments_needed: { n: 1, c: Kt, r: !0, q: !0 },
            call_again: { n: 2, br: T.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_BeginGameRecordingSegmentsUpload_Response`;
    }
  },
  an = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            component_name: { n: 2, br: T.readString, bw: w.writeString },
            representation_name: { n: 3, br: T.readString, bw: w.writeString },
            first_segment_number: { n: 4, br: T.readUint32, bw: w.writeUint32 },
            num_segments: { n: 5, br: T.readUint32, bw: w.writeUint32 },
            upload_result: { n: 6, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_CommitGameRecordingSegmentsUpload_Request`;
    }
  },
  on = class e extends R.Message {
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
      return `CVideo_CommitGameRecordingSegmentsUpload_Response`;
    }
  },
  sn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request`;
    }
  },
  cn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segments_needed || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { segments_needed: { n: 1, c: Kt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response`;
    }
  },
  ln = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: {
              n: 1,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            segments_uploaded: { n: 2, c: Gt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingCommitSegmentUploads_Request`;
    }
  },
  un = class e extends R.Message {
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
      return `CVideo_GameRecordingCommitSegmentUploads_Response`;
    }
  },
  dn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`GameRecordingClip.CreateShareClip#1`, P(Xt, t, n), Zt, {
      ePrivilege: 1,
    });
  }
  e.CreateShareClip = t;
  function n(e, t, n) {
    return e.SendMsg(`GameRecordingClip.DeleteSharedClip#1`, P(Qt, t, n), $t, {
      ePrivilege: 1,
    });
  }
  e.DeleteSharedClip = n;
  function r(e, t, n) {
    return e.SendMsg(
      `GameRecordingClip.GetSingleSharedClip#1`,
      P(en, t, n),
      tn,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  e.GetSingleSharedClip = r;
})((dn ||= {}));
var fn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `VideoClip.BeginGameRecordingSegmentsUpload#1`,
      P(nn, t, n),
      rn,
      { ePrivilege: 1 },
    );
  }
  e.BeginGameRecordingSegmentsUpload = t;
  function n(e, t, n) {
    return e.SendMsg(
      `VideoClip.CommitGameRecordingSegmentsUpload#1`,
      P(an, t, n),
      on,
      { ePrivilege: 1 },
    );
  }
  e.CommitGameRecordingSegmentsUpload = n;
  function r(e, t, n) {
    return e.SendMsg(
      `VideoClip.GetNextBatchOfSegmentsToUpload#1`,
      P(sn, t, n),
      cn,
      { ePrivilege: 1 },
    );
  }
  e.GetNextBatchOfSegmentsToUpload = r;
  function i(e, t, n) {
    return e.SendMsg(`VideoClip.CommitSegmentUploads#1`, P(ln, t, n), un, {
      ePrivilege: 1,
    });
  }
  e.CommitSegmentUploads = i;
})((fn ||= {}));
var pn = new lt(`GR`);
function mn(e) {
  return (...t) => {
    e(`[${(performance.now() / 1e3).toFixed(3)}]`, ...t);
  };
}
var z = mn(pn.Debug),
  hn = mn(pn.Info),
  gn = mn(pn.Warning),
  B = mn(pn.Error),
  V = z;
function _n() {
  return pn.IsDebugEnabled();
}
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
          : e.toLowerCase(),
        n = this.m_mapSteamTimelineMarkers.get(t);
      if (n) return n;
      let r = parseInt(t);
      return typeof r == `number` && r >= 0 && r <= 99
        ? { func: (e) => Ue({ nNumber: r }), color: 8 }
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
      (this.AddMarker(`explosion`, ne, 8),
        this.AddMarker(`attack`, ke, 8),
        this.AddMarker(`defend`, Ne, 8),
        this.AddMarker(`combat`, ee, 8),
        this.AddMarker(`chest`, Xe, 8),
        this.AddMarker(`view`, Ie, 8),
        ut() ? this.AddMarker(`death`, Oe, 8) : this.AddMarker(`death`, _, 8),
        this.AddMarker(`x`, Oe, 8),
        this.AddMarker(`plus`, ye, 8),
        this.AddMarker(`minus`, se, 8),
        this.AddMarker(`info`, ie, 8),
        this.AddMarker(`bolt`, De, 8),
        this.AddMarker(`caution`, Ze, 8),
        this.AddMarker(`completed`, de, 8),
        this.AddMarker(`checkmark`, y, 8),
        this.AddMarker(`effect`, fe, 8),
        this.AddMarker(`purchase`, pe, 8),
        this.AddMarker(`ribbon`, Te, 8),
        this.AddMarker(`scroll`, Ge, 8),
        this.AddMarker(`crown`, Pe, 8),
        this.AddMarker(`starburst`, Ke, 8),
        this.AddMarker(`flag`, ce, 8),
        this.AddMarker(`cart`, Ce, 8),
        this.AddMarker(`timer`, Je, 8),
        this.AddMarker(`chat`, me, 8),
        this.AddMarker(`wrench`, ae, 8),
        this.AddMarker(`transfer`, we, 8),
        this.AddMarker(`edit`, ue, 8),
        this.AddMarker(`bookmark`, be, 8),
        this.AddMarker(`invalid`, ge, 8),
        this.AddMarker(`star`, Be, 8),
        this.AddMarker(`circle`, he, 8),
        this.AddMarker(`square`, Se, 8),
        this.AddMarker(`triangle`, Ee, 8),
        this.AddMarker(`heart`, _e, 8),
        this.AddMarker(`diamond`, le, 8),
        this.AddMarker(`gem`, $e, 8),
        this.AddMarker(`group`, v, 8),
        this.AddMarker(`pair`, oe, 8),
        this.AddMarker(`single`, He, 8),
        this.AddMarker(`trophy`, Ve, 8),
        this.AddMarker(`achievement`, Ve, 8),
        this.AddMarker(`screenshot`, Re, 8),
        this.AddMarker(`bug`, Ye, 8),
        this.AddMarker(`fix`, ae, 8),
        this.AddMarker(`person`, He, 8),
        this.AddMarker(`question`, g, 8));
    }
  };
function wn(e) {
  return Cn.Get().GetMarkerByID(e);
}
function Tn() {
  return { func: re, color: 5 };
}
function En() {
  return { func: Ve, color: 0 };
}
function Dn() {
  return { func: re, color: 8 };
}
function On(e) {
  return e && e.toLowerCase().startsWith(`steam_`);
}
var kn = null;
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
function H() {
  return window.g_GRS;
}
async function Mn(e, t, n) {
  if (!H()) {
    let [{ CGameRecordingStore: r }] = await Promise.all([
      wt(
        () => import(`./chunk~b792617135.js`),
        __vite__mapDeps([0, 1, 2, 3, 4]),
        import.meta.url,
      ),
    ]);
    n && An(n);
    let i = new r();
    (await i.Init(e, t), (window.g_GRS = i));
  }
}
function Nn() {
  if (H() != null) {
    let e = H();
    return {
      bLoading: e.BLoadingAppsWithBackgroundVideo(),
      rgApps: e.GetAppsWithBackgroundVideo(),
    };
  }
  return { bLoading: !1, rgApps: [] };
}
function Pn() {
  let [e, t] = (0, L.useState)(Nn());
  return ((0, L.useEffect)(() => u(Nn, t), []), e);
}
function Fn(e) {
  let { bLoading: t, rgApps: n } = Pn();
  return {
    bLoading: t,
    app: (0, L.useMemo)(() => n.find((t) => t.game_id === e), [n, e]),
  };
}
function In(e) {
  return H().GetTimelineLoaderForSharedClip(e);
}
function Ln(e) {
  return (H() != null && e && H().GetClipSummariesForGame(e)) || [];
}
function Rn(e, t, n, r, i, a) {
  return H() == null ? null : H().LoadThumbnails(e, t, n, r, i, a ?? !0);
}
function zn() {
  return H() == null ? {} : { fnSaveClip: H().SaveClip };
}
function Bn() {
  return H() == null ? {} : { fnDeleteClip: H().DeleteClip };
}
function Vn(e, t, n, r) {
  return H() == null ? null : H().TakeScreenshot(e, t, n.valMS, r);
}
function Hn() {
  return H() == null
    ? null
    : {
        fnCreateUserTimelineMarkers: H().CreateUserTimelineMarkers,
        fnUpdateUserTimelineMarkers: H().UpdateUserTimelineMarkers,
        fnRemoveUserTimelineMarker: H().RemoveUserTimelineMarker,
      };
}
function Un(e, t) {
  return r(() => {
    if (H() != null) return H().GetAchievementInfo(e, t);
  });
}
function Wn(e, t, n, r, i) {
  return H().ReportClipRange(e, t, n, r, i);
}
function Gn() {
  return r(() => {
    if (H() != null) return !H().BEnoughDiskSpace();
  });
}
var Kn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: T.readString, bw: w.writeString },
            game_id: { n: 2, br: T.readUint64String, bw: w.writeUint64String },
            date_recorded: { n: 3, br: T.readUint32, bw: w.writeUint32 },
            duration_ms: {
              n: 4,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            recordings: { n: 5, c: qn, r: !0, q: !0 },
            phases: { n: 6, c: Yn, r: !0, q: !0 },
            significant_events: { n: 7, c: Jn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata`;
    }
  },
  qn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: T.readString, bw: w.writeString },
            start_offset_ms: {
              n: 2,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            duration_ms: {
              n: 3,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            recording_type: { n: 4, br: T.readEnum, bw: w.writeEnum },
            delete_on_cleanup: { n: 5, br: T.readBool, bw: w.writeBool },
            video_manager_clip_id: {
              n: 6,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            video_manager_video_id: {
              n: 7,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            cdn_manifest_url: { n: 8, br: T.readString, bw: w.writeString },
            file_size: {
              n: 9,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            recording_zero_timeline_offset_ms: {
              n: 10,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata_Recording`;
    }
  },
  Jn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            rt_created: { n: 2, br: T.readUint32, bw: w.writeUint32 },
            possible_clip: { n: 3, br: T.readInt32, bw: w.writeInt32 },
            timeline_id: { n: 4, br: T.readString, bw: w.writeString },
            entry_id: { n: 5, br: T.readUint64String, bw: w.writeUint64String },
            timeline_offset_ms: {
              n: 6,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            marker_icon: { n: 8, br: T.readString, bw: w.writeString },
            marker_title: { n: 9, br: T.readString, bw: w.writeString },
            user_marker: { n: 10, br: T.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineEvent`;
    }
  },
  Yn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phase_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [6, 7, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phase_id: { n: 4, br: T.readString, bw: w.writeString },
            duration_ms: {
              n: 5,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            tags: { n: 6, c: Xn, r: !0, q: !0 },
            contained_tags: { n: 7, c: Xn, r: !0, q: !0 },
            background_timeline_offset: {
              n: 8,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            attributes: { n: 9, c: Qn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase`;
    }
  },
  Xn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: w.writeString },
            group: { n: 2, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase_Tag`;
    }
  },
  Zn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: w.writeString },
            group: { n: 2, br: T.readString, bw: w.writeString },
            icon: { n: 3, br: T.readString, bw: w.writeString },
            priority: { n: 4, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineTag`;
    }
  },
  Qn = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: T.readString, bw: w.writeString },
            value: { n: 2, br: T.readString, bw: w.writeString },
            priority: { n: 3, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPhaseAttribute`;
    }
  },
  $n = class e extends R.Message {
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
  er = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response`;
    }
  },
  tr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            most_recent_start_time: {
              n: 2,
              br: T.readUint32,
              bw: w.writeUint32,
            },
            recording_type: { n: 3, br: T.readEnum, bw: w.writeEnum },
            video_duration_seconds: {
              n: 4,
              br: T.readDouble,
              bw: w.writeDouble,
            },
            timeline_duration_seconds: {
              n: 5,
              br: T.readDouble,
              bw: w.writeDouble,
            },
            is_active: { n: 6, br: T.readBool, bw: w.writeBool },
            file_size: {
              n: 7,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response_App`;
    }
  },
  nr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Request`;
    }
  },
  rr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timelines || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { timelines: { n: 1, c: Kn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Response`;
    }
  },
  ir = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: T.readString, bw: w.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Request`;
    }
  },
  ar = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            timelines: { n: 2, c: Kn, r: !0, q: !0 },
            first_timeline_start_offset_ms: {
              n: 3,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Response`;
    }
  },
  or = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.page || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            page: { n: 1, br: T.readUint32, bw: w.writeUint32 },
            count: { n: 2, br: T.readUint32, bw: w.writeUint32 },
            filter_gameid: {
              n: 10,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            filter_search_string: {
              n: 11,
              br: T.readString,
              bw: w.writeString,
            },
            filter_tags: { n: 12, c: sr, r: !0, q: !0 },
            filter_phase_id: { n: 13, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request`;
    }
  },
  sr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: T.readString, bw: w.writeString },
            name: { n: 2, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request_Tag`;
    }
  },
  cr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phases || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phases: { n: 1, c: lr, r: !0, q: !0 },
            total_count: { n: 2, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response`;
    }
  },
  lr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [7, 8, 10, 13, 16, 17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            date_recorded: { n: 5, br: T.readUint32, bw: w.writeUint32 },
            duration_ms: {
              n: 6,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            tags: { n: 7, c: Zn, r: !0, q: !0 },
            contained_tags: { n: 8, c: Zn, r: !0, q: !0 },
            background_recording: { n: 9, c: ur },
            clip_ids: {
              n: 10,
              r: !0,
              q: !0,
              br: T.readString,
              bw: w.writeRepeatedString,
            },
            type: { n: 11, br: T.readEnum, bw: w.writeEnum },
            start_ms: {
              n: 12,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            screenshots: {
              n: 13,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: w.writeRepeatedUint32,
            },
            active: { n: 14, br: T.readBool, bw: w.writeBool },
            phase_id: { n: 15, br: T.readString, bw: w.writeString },
            significant_events: { n: 16, c: yr, r: !0, q: !0 },
            attributes: { n: 17, c: Qn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase`;
    }
  },
  ur = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: T.readString, bw: w.writeString },
            offset: { n: 2, br: T.readUint64String, bw: w.writeUint64String },
            duration_ms: {
              n: 3,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase_BackgroundRecording`;
    }
  },
  dr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Request`;
    }
  },
  fr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: Zn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Response`;
    }
  },
  pr = class e extends R.Message {
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
  mr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.enough_space || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { enough_space: { n: 1, br: T.readBool, bw: w.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Response`;
    }
  },
  hr = class e extends R.Message {
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
  gr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { size: { n: 1, br: T.readDouble, bw: w.writeDouble } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Response`;
    }
  },
  _r = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: T.readEnum, bw: w.writeEnum },
            timeline_id: { n: 2, br: T.readString, bw: w.writeString },
            game_id: { n: 3, br: T.readUint64String, bw: w.writeUint64String },
            start_time: { n: 4, br: T.readUint32, bw: w.writeUint32 },
            duration_ms: {
              n: 5,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineChanged_Notification`;
    }
  },
  vr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: T.readEnum, bw: w.writeEnum },
            timeline_id: { n: 2, br: T.readString, bw: w.writeString },
            game_id: { n: 4, br: T.readUint64String, bw: w.writeUint64String },
            session_id: { n: 5, br: T.readString, bw: w.writeString },
            start_offset: {
              n: 6,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            recording_type: { n: 8, br: T.readEnum, bw: w.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_RecordingSessionChanged_Notification`;
    }
  },
  yr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [17, 19], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: T.readString, bw: w.writeString },
            entry_id: { n: 2, br: T.readUint64String, bw: w.writeUint64String },
            time: { n: 3, br: T.readUint64String, bw: w.writeUint64String },
            type: { n: 4, br: T.readEnum, bw: w.writeEnum },
            game_mode: { n: 5, br: T.readInt32, bw: w.writeInt32 },
            range_title: { n: 7, br: T.readString, bw: w.writeString },
            range_duration: {
              n: 8,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            range_possible_clip: { n: 9, br: T.readInt32, bw: w.writeInt32 },
            timestamp_title: { n: 10, br: T.readString, bw: w.writeString },
            marker_icon: { n: 11, br: T.readString, bw: w.writeString },
            marker_description: { n: 13, br: T.readString, bw: w.writeString },
            marker_priority: { n: 14, br: T.readInt32, bw: w.writeInt32 },
            screenshot_handle: { n: 15, br: T.readUint32, bw: w.writeUint32 },
            achievement_name: { n: 16, br: T.readString, bw: w.writeString },
            tag: { n: 17, c: Zn, r: !0, q: !0 },
            phase_id: { n: 18, br: T.readString, bw: w.writeString },
            attributes: { n: 19, c: Qn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineEntry`;
    }
  },
  br = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry: { n: 1, c: yr },
            game_id: {
              n: 2,
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryChanged_Notification`;
    }
  },
  xr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            timeline_id: { n: 2, br: T.readString, bw: w.writeString },
            entry_id: { n: 3, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryRemoved_Notification`;
    }
  },
  Sr = class e extends R.Message {
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
  Cr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PostGameHighlightsChanged_Notification`;
    }
  },
  wr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            phase_id: { n: 2, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToGamePhase_Notification`;
    }
  },
  Tr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            entry_id: { n: 2, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToTimelineEvent_Notification`;
    }
  },
  Er = class e extends R.Message {
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
  Dr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: T.readString, bw: w.writeString },
            game_id: { n: 2, br: T.readUint64String, bw: w.writeUint64String },
            duration_ms: {
              n: 3,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            date_recorded: { n: 4, br: T.readUint32, bw: w.writeUint32 },
            start_timeline_id: { n: 5, br: T.readString, bw: w.writeString },
            start_offset_ms: {
              n: 6,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            published_file_id: {
              n: 7,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            file_size: {
              n: 8,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            name: { n: 9, br: T.readString, bw: w.writeString },
            date_clipped: { n: 10, br: T.readUint32, bw: w.writeUint32 },
            temporary: { n: 11, br: T.readBool, bw: w.writeBool },
            original_device: { n: 12, br: T.readString, bw: w.writeString },
            original_gaming_device_type: {
              n: 13,
              br: T.readUint32,
              bw: w.writeUint32,
            },
            date_downloaded: { n: 14, br: T.readUint32, bw: w.writeUint32 },
            thumbnail_url: { n: 15, br: T.readString, bw: w.writeString },
            thumbnail_width: { n: 16, br: T.readUint32, bw: w.writeUint32 },
            thumbnail_height: { n: 17, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipSummary`;
    }
  },
  Or = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            start: { n: 2, c: kr },
            end: { n: 3, c: kr },
            name: { n: 4, br: T.readString, bw: w.writeString },
            src_clip_id: { n: 5, br: T.readString, bw: w.writeString },
            temporary: { n: 6, br: T.readBool, bw: w.writeBool },
            force_thumbnail: { n: 7, br: T.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request`;
    }
  },
  kr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: T.readString, bw: w.writeString },
            offset_ms: {
              n: 2,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request_Position`;
    }
  },
  Ar = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Dr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Response`;
    }
  },
  jr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: T.readString, bw: w.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Request`;
    }
  },
  Mr = class e extends R.Message {
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
  Nr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bitrate_kbps || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bitrate_kbps: { n: 1, br: T.readInt32, bw: w.writeInt32 },
            width: { n: 2, br: T.readInt32, bw: w.writeInt32 },
            height: { n: 3, br: T.readInt32, bw: w.writeInt32 },
            frames_per_second: { n: 4, br: T.readInt32, bw: w.writeInt32 },
            codec: { n: 5, br: T.readEnum, bw: w.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Settings`;
    }
  },
  Pr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: T.readString, bw: w.writeString },
            export_mp4_path: { n: 2, br: T.readString, bw: w.writeString },
            settings: { n: 3, c: Nr },
            use_unique_filename: { n: 4, br: T.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Request`;
    }
  },
  Fr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { result: { n: 1, br: T.readInt32, bw: w.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Response`;
    }
  },
  Ir = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: T.readString, bw: w.writeString },
            settings: { n: 2, c: Nr },
            run_policy_checks: { n: 3, br: T.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Request`;
    }
  },
  Lr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.estimated_size || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            settings: { n: 2, c: Nr },
            result: { n: 3, br: T.readInt32, bw: w.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Response`;
    }
  },
  Rr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
            timeline_id: { n: 2, br: T.readString, bw: w.writeString },
            timeline_offset_ms: {
              n: 3,
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
            source_clip_id: { n: 4, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Request`;
    }
  },
  zr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshot_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readFixed64String,
              bw: w.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Response`;
    }
  },
  Br = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: T.readString, bw: w.writeString },
            title: { n: 2, br: T.readString, bw: w.writeString },
            desc: { n: 3, br: T.readString, bw: w.writeString },
            visibility: { n: 4, br: T.readInt32, bw: w.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Request`;
    }
  },
  Vr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Dr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Response`;
    }
  },
  Hr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: T.readString, bw: w.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Request`;
    }
  },
  Ur = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.zip_path || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { zip_path: { n: 1, br: T.readString, bw: w.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Response`;
    }
  },
  Wr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            created_after: { n: 2, br: T.readUint32, bw: w.writeUint32 },
            include_temporary: { n: 3, br: T.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Request`;
    }
  },
  Gr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip: { n: 1, c: Dr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Response`;
    }
  },
  Kr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            created_after: { n: 2, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Request`;
    }
  },
  qr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.events || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { events: { n: 1, c: Jn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Response`;
    }
  },
  Jr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            entry: { n: 2, c: yr },
            clip_id: { n: 3, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Request`;
    }
  },
  Yr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Response`;
    }
  },
  Xr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            entry: { n: 2, c: yr },
            clip_id: { n: 3, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Request`;
    }
  },
  Zr = class e extends R.Message {
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
  Qr = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
            timeline_id: { n: 2, br: T.readString, bw: w.writeString },
            entry_id: { n: 3, br: T.readUint64String, bw: w.writeUint64String },
            clip_id: { n: 4, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Request`;
    }
  },
  $r = class e extends R.Message {
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
  ei = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_ids || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
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
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: w.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Request`;
    }
  },
  ti = class e extends R.Message {
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
  ni = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.folder_path || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            folder_path: { n: 1, br: T.readString, bw: w.writeString },
            type: { n: 2, br: T.readEnum, bw: w.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Request`;
    }
  },
  ri = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            size: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Response`;
    }
  },
  ii = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: T.readString, bw: w.writeString },
            clip_id: { n: 3, br: T.readString, bw: w.writeString },
            timeline_id: { n: 7, br: T.readString, bw: w.writeString },
            start_offset_us: {
              n: 4,
              r: !0,
              q: !0,
              br: T.readInt64String,
              pbr: T.readPackedInt64String,
              bw: w.writeRepeatedInt64String,
            },
            major_axis: { n: 5, d: 512, br: T.readUint32, bw: w.writeUint32 },
            time_precision: { n: 6, d: 0, br: T.readEnum, bw: w.writeEnum },
            format: { n: 8, d: 1, br: T.readEnum, bw: w.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Request`;
    }
  },
  ai = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnails || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { thumbnails: { n: 1, c: oi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response`;
    }
  },
  oi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_data || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_data: { n: 1, br: T.readBytes, bw: w.writeBytes },
            width: { n: 2, br: T.readUint32, bw: w.writeUint32 },
            height: { n: 3, br: T.readUint32, bw: w.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response_Thumbnail`;
    }
  },
  si = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Request`;
    }
  },
  ci = class e extends R.Message {
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
  li = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Request`;
    }
  },
  ui = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Dr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Response`;
    }
  },
  di = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Request`;
    }
  },
  fi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_size || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readUint64String,
              bw: w.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Response`;
    }
  },
  pi = class e extends R.Message {
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
  mi = class e extends R.Message {
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
  hi = class e extends R.Message {
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
  gi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.per_process_audio_capture || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: T.readBool,
              bw: w.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Response`;
    }
  },
  _i = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Dr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipCreated_Notification`;
    }
  },
  vi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: T.readString, bw: w.writeString },
            game_id: { n: 2, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipDeleted_Notification`;
    }
  },
  yi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: T.readFloat, bw: w.writeFloat },
            clip_id: { n: 2, br: T.readString, bw: w.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportProgress_Notification`;
    }
  },
  bi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: T.readFixed64String, bw: w.writeFixed64String },
            enabled: { n: 2, br: T.readBool, bw: w.writeBool },
            minutes: { n: 3, br: T.readUint32, bw: w.writeUint32 },
            bitrate: { n: 4, br: T.readString, bw: w.writeString },
            infinite: { n: 5, br: T.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PerGameSettings`;
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
      return `CGameRecording_GetPerGameSettings_Request`;
    }
  },
  Si = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || N(e.M()),
        R.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: bi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Response`;
    }
  },
  Ci = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_settings || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { game_settings: { n: 1, c: bi } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Request`;
    }
  },
  wi = class e extends R.Message {
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
  Ti = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: T.readFixed64String, bw: w.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Request`;
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
      return `CGameRecording_DeletePerGameSettings_Response`;
    }
  },
  Di = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: T.readFloat, bw: w.writeFloat },
            clip_id: { n: 2, br: T.readString, bw: w.writeString },
            eresult: { n: 3, br: T.readInt32, bw: w.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadProgress_Notification`;
    }
  },
  Oi = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: T.readUint64String, bw: w.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Request`;
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
      return `CGameRecording_SwitchBackgroundRecordingGame_Response`;
    }
  },
  Ai = class e extends R.Message {
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
  ji = class e extends R.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_h265_enabled || N(e.M()),
        R.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_h265_enabled: { n: 1, br: T.readBool, bw: w.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= E(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return M(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new R.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return b(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      D(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new R.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Response`;
    }
  },
  Mi = class e extends R.Message {
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
  U;
(function (e) {
  e.GetAppsWithBackgroundVideoHandler = {
    name: `GameRecording.GetAppsWithBackgroundVideo#1`,
    request: $n,
    response: er,
  };
  function t(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAppsWithBackgroundVideo#1`,
            P($n, e),
            er,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetAppsWithBackgroundVideo = t;
  function n(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAppsWithBackgroundVideo#1`,
            P($n, e),
            er,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAppsWithBackgroundVideo = n),
    (e.GetTimelinesForAppHandler = {
      name: `GameRecording.GetTimelinesForApp#1`,
      request: nr,
      response: rr,
    }));
  function r(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, P(nr, e), rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForApp = r;
  function i(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, P(nr, e), rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForApp = i),
    (e.GetTimelinesForClipHandler = {
      name: `GameRecording.GetTimelinesForClip#1`,
      request: ir,
      response: ar,
    }));
  function a(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, P(ir, e), ar, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTimelinesForClip = a;
  function o(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, P(ir, e), ar, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTimelinesForClip = o),
    (e.QueryPhasesHandler = {
      name: `GameRecording.QueryPhases#1`,
      request: or,
      response: cr,
    }));
  function s(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, P(or, e), cr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.QueryPhases = s;
  function c(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, P(or, e), cr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgQueryPhases = c),
    (e.GetTagsHandler = {
      name: `GameRecording.GetTags#1`,
      request: dr,
      response: fr,
    }));
  function l(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, P(dr, e), fr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTags = l;
  function u(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, P(dr, e), fr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTags = u),
    (e.GetEnoughDiskSpaceHandler = {
      name: `GameRecording.GetEnoughDiskSpace#1`,
      request: pr,
      response: mr,
    }));
  function d(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, P(pr, e), mr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetEnoughDiskSpace = d;
  function f(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, P(pr, e), mr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetEnoughDiskSpace = f),
    (e.GetAvailableDiskSpaceHandler = {
      name: `GameRecording.GetAvailableDiskSpace#1`,
      request: hr,
      response: gr,
    }));
  function p(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, P(hr, e), gr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetAvailableDiskSpace = p;
  function h(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, P(hr, e), gr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetAvailableDiskSpace = h),
    (e.SaveClipHandler = {
      name: `GameRecording.SaveClip#1`,
      request: Or,
      response: Ar,
    }));
  function g(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SaveClip#1`, P(Or, e), Ar, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SaveClip = g;
  function _(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SaveClip#1`, P(Or, e), Ar, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSaveClip = _),
    (e.DeleteClipHandler = {
      name: `GameRecording.DeleteClip#1`,
      request: jr,
      response: Mr,
    }));
  function v(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeleteClip#1`, P(jr, e), Mr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeleteClip = v;
  function y(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeleteClip#1`, P(jr, e), Mr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeleteClip = y),
    (e.GetClipsHandler = {
      name: `GameRecording.GetClips#1`,
      request: Wr,
      response: Gr,
    }));
  function ee(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetClips#1`, P(Wr, e), Gr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetClips = ee;
  function te(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetClips#1`, P(Wr, e), Gr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetClips = te),
    (e.UploadClipToSteamHandler = {
      name: `GameRecording.UploadClipToSteam#1`,
      request: Br,
      response: Vr,
    }));
  function ne(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, P(Br, e), Vr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UploadClipToSteam = ne;
  function re(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, P(Br, e), Vr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUploadClipToSteam = re),
    (e.ExportClipHandler = {
      name: `GameRecording.ExportClip#1`,
      request: Pr,
      response: Fr,
    }));
  function ie(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClip#1`, P(Pr, e), Fr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClip = ie;
  function ae(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClip#1`, P(Pr, e), Fr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClip = ae),
    (e.ExportClipPreviewHandler = {
      name: `GameRecording.ExportClipPreview#1`,
      request: Ir,
      response: Lr,
    }));
  function oe(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, P(Ir, e), Lr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ExportClipPreview = oe;
  function se(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, P(Ir, e), Lr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClipPreview = se),
    (e.TakeScreenshotHandler = {
      name: `GameRecording.TakeScreenshot#1`,
      request: Rr,
      response: zr,
    }));
  function ce(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, P(Rr, e), zr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.TakeScreenshot = ce;
  function le(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, P(Rr, e), zr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgTakeScreenshot = le),
    (e.ZipClipHandler = {
      name: `GameRecording.ZipClip#1`,
      request: Hr,
      response: Ur,
    }));
  function ue(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ZipClip#1`, P(Hr, e), Ur, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.ZipClip = ue;
  function de(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.ZipClip#1`, P(Hr, e), Ur, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgZipClip = de),
    (e.StartRecordingHandler = {
      name: `GameRecording.StartRecording#1`,
      request: si,
      response: ci,
    }));
  function fe(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StartRecording#1`, P(si, e), ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StartRecording = fe;
  function pe(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StartRecording#1`, P(si, e), ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStartRecording = pe),
    (e.StopRecordingHandler = {
      name: `GameRecording.StopRecording#1`,
      request: li,
      response: ui,
    }));
  function me(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StopRecording#1`, P(li, e), ui, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.StopRecording = me;
  function he(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.StopRecording#1`, P(li, e), ui, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStopRecording = he),
    (e.GetBackgroundRecordingFileSizeHandler = {
      name: `GameRecording.GetBackgroundRecordingFileSize#1`,
      request: di,
      response: fi,
    }));
  function ge(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            P(di, e),
            fi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetBackgroundRecordingFileSize = ge;
  function _e(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            P(di, e),
            fi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetBackgroundRecordingFileSize = _e),
    (e.CleanupBackgroundRecordingsHandler = {
      name: `GameRecording.CleanupBackgroundRecordings#1`,
      request: pi,
      response: mi,
    }));
  function ve(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            P(pi, e),
            mi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.CleanupBackgroundRecordings = ve;
  function ye(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.CleanupBackgroundRecordings#1`,
            P(pi, e),
            mi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgCleanupBackgroundRecordings = ye),
    (e.GetAndTrimPostGameHighlightsHandler = {
      name: `GameRecording.GetAndTrimPostGameHighlights#1`,
      request: Kr,
      response: qr,
    }));
  function be(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            P(Kr, e),
            qr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.GetAndTrimPostGameHighlights = be;
  function xe(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            P(Kr, e),
            qr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAndTrimPostGameHighlights = xe),
    (e.GetThumbnailsHandler = {
      name: `GameRecording.GetThumbnails#1`,
      request: ii,
      response: ai,
    }));
  function Se(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetThumbnails#1`, P(ii, e), ai, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetThumbnails = Se;
  function Ce(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetThumbnails#1`, P(ii, e), ai, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetThumbnails = Ce),
    (e.GetPlatformCapabilitiesHandler = {
      name: `GameRecording.GetPlatformCapabilities#1`,
      request: hi,
      response: gi,
    }));
  function we(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, P(hi, e), gi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPlatformCapabilities = we;
  function Te(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, P(hi, e), gi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPlatformCapabilities = Te),
    (e.NotifyTimelineChangedHandler = {
      name: `GameRecording.NotifyTimelineChanged#1`,
      request: _r,
    }));
  function Ee(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            U.NotifyTimelineChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineChanged = Ee;
  function De(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineChanged#1`,
            P(_r, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineChanged = De;
  function Oe(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineChanged#1`,
            P(_r, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineChanged = Oe),
    (e.NotifyRecordingSessionChangedHandler = {
      name: `GameRecording.NotifyRecordingSessionChanged#1`,
      request: vr,
    }));
  function ke(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            U.NotifyRecordingSessionChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyRecordingSessionChanged = ke;
  function Ae(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            P(vr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyRecordingSessionChanged = Ae;
  function je(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            P(vr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyRecordingSessionChanged = je),
    (e.NotifyTimelineEntryChangedHandler = {
      name: `GameRecording.NotifyTimelineEntryChanged#1`,
      request: br,
    }));
  function Me(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            U.NotifyTimelineEntryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryChanged = Me;
  function Ne(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            P(br, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryChanged = Ne;
  function Pe(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            P(br, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryChanged = Pe),
    (e.NotifyTimelineEntryRemovedHandler = {
      name: `GameRecording.NotifyTimelineEntryRemoved#1`,
      request: xr,
    }));
  function Fe(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            U.NotifyTimelineEntryRemovedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTimelineEntryRemoved = Fe;
  function Ie(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            P(xr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyTimelineEntryRemoved = Ie;
  function Le(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            P(xr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryRemoved = Le),
    (e.NotifyClipCreatedHandler = {
      name: `GameRecording.NotifyClipCreated#1`,
      request: _i,
    }));
  function Re(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(U.NotifyClipCreatedHandler, e)
    );
  }
  e.RegisterForNotifyClipCreated = Re;
  function ze(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, P(_i, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipCreated = ze;
  function Be(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, P(_i, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipCreated = Be),
    (e.NotifyClipDeletedHandler = {
      name: `GameRecording.NotifyClipDeleted#1`,
      request: vi,
    }));
  function Ve(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(U.NotifyClipDeletedHandler, e)
    );
  }
  e.RegisterForNotifyClipDeleted = Ve;
  function He(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, P(vi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyClipDeleted = He;
  function Ue(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, P(vi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipDeleted = Ue),
    (e.NotifyExportProgressHandler = {
      name: `GameRecording.NotifyExportProgress#1`,
      request: yi,
    }));
  function We(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(U.NotifyExportProgressHandler, e)
    );
  }
  e.RegisterForNotifyExportProgress = We;
  function Ge(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, P(yi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyExportProgress = Ge;
  function Ke(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, P(yi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyExportProgress = Ke),
    (e.NotifyUploadProgressHandler = {
      name: `GameRecording.NotifyUploadProgress#1`,
      request: Di,
    }));
  function qe(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(U.NotifyUploadProgressHandler, e)
    );
  }
  e.RegisterForNotifyUploadProgress = qe;
  function Je(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, P(Di, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyUploadProgress = Je;
  function Ye(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, P(Di, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyUploadProgress = Ye),
    (e.NotifyLowDiskSpaceHandler = {
      name: `GameRecording.NotifyLowDiskSpace#1`,
      request: Sr,
    }));
  function Xe(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(U.NotifyLowDiskSpaceHandler, e)
    );
  }
  e.RegisterForNotifyLowDiskSpace = Xe;
  function Ze(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, P(Sr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyLowDiskSpace = Ze;
  function Qe(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, P(Sr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyLowDiskSpace = Qe),
    (e.NotifyPostGameHighlightsChangedHandler = {
      name: `GameRecording.NotifyPostGameHighlightsChanged#1`,
      request: Cr,
    }));
  function $e(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            U.NotifyPostGameHighlightsChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPostGameHighlightsChanged = $e;
  function et(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            P(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPostGameHighlightsChanged = et;
  function tt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            P(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPostGameHighlightsChanged = tt),
    (e.NotifyOpenOverlayToGamePhaseHandler = {
      name: `GameRecording.NotifyOpenOverlayToGamePhase#1`,
      request: wr,
    }));
  function nt(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            U.NotifyOpenOverlayToGamePhaseHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToGamePhase = nt;
  function rt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            P(wr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToGamePhase = rt;
  function it(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            P(wr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToGamePhase = it),
    (e.NotifyOpenOverlayToTimelineEventHandler = {
      name: `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
      request: Tr,
    }));
  function b(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            U.NotifyOpenOverlayToTimelineEventHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToTimelineEvent = b;
  function at(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            P(Tr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToTimelineEvent = at;
  function ot(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            P(Tr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToTimelineEvent = ot),
    (e.NotifyPhaseListChangedHandler = {
      name: `GameRecording.NotifyPhaseListChanged#1`,
      request: Er,
    }));
  function st(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            U.NotifyPhaseListChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPhaseListChanged = st;
  function x(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            P(Er, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPhaseListChanged = x;
  function ct(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            P(Er, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPhaseListChanged = ct),
    (e.GetPerGameSettingsHandler = {
      name: `GameRecording.GetPerGameSettings#1`,
      request: xi,
      response: Si,
    }));
  function S(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, P(xi, e), Si, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPerGameSettings = S;
  function C(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, P(xi, e), Si, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPerGameSettings = C),
    (e.SetPerGameSettingsHandler = {
      name: `GameRecording.SetPerGameSettings#1`,
      request: Ci,
      response: wi,
    }));
  function lt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, P(Ci, e), wi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SetPerGameSettings = lt;
  function ut(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, P(Ci, e), wi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSetPerGameSettings = ut),
    (e.DeletePerGameSettingsHandler = {
      name: `GameRecording.DeletePerGameSettings#1`,
      request: Ti,
      response: Ei,
    }));
  function dt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, P(Ti, e), Ei, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeletePerGameSettings = dt;
  function w(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, P(Ti, e), Ei, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeletePerGameSettings = w),
    (e.UserAddTimelineEntryHandler = {
      name: `GameRecording.UserAddTimelineEntry#1`,
      request: Jr,
      response: Yr,
    }));
  function ft(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, P(Jr, e), Yr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserAddTimelineEntry = ft;
  function pt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, P(Jr, e), Yr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserAddTimelineEntry = pt),
    (e.UserUpdateTimelineEntryHandler = {
      name: `GameRecording.UserUpdateTimelineEntry#1`,
      request: Xr,
      response: Zr,
    }));
  function T(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, P(Xr, e), Zr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserUpdateTimelineEntry = T;
  function E(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, P(Xr, e), Zr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserUpdateTimelineEntry = E),
    (e.UserRemoveTimelineEntryHandler = {
      name: `GameRecording.UserRemoveTimelineEntry#1`,
      request: Qr,
      response: $r,
    }));
  function mt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, P(Qr, e), $r, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserRemoveTimelineEntry = mt;
  function D(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, P(Qr, e), $r, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserRemoveTimelineEntry = D),
    (e.ManuallyDeleteRecordingsForAppsHandler = {
      name: `GameRecording.ManuallyDeleteRecordingsForApps#1`,
      request: ei,
      response: ti,
    }));
  function O(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            P(ei, e),
            ti,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.ManuallyDeleteRecordingsForApps = O;
  function k(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            P(ei, e),
            ti,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgManuallyDeleteRecordingsForApps = k),
    (e.GetTotalDiskSpaceUsageHandler = {
      name: `GameRecording.GetTotalDiskSpaceUsage#1`,
      request: ni,
      response: ri,
    }));
  function ht(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, P(ni, e), ri, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTotalDiskSpaceUsage = ht;
  function gt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, P(ni, e), ri, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetTotalDiskSpaceUsage = gt),
    (e.SwitchBackgroundRecordingGameHandler = {
      name: `GameRecording.SwitchBackgroundRecordingGame#1`,
      request: Oi,
      response: ki,
    }));
  function _t(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            P(Oi, e),
            ki,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.SwitchBackgroundRecordingGame = _t;
  function vt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            P(Oi, e),
            ki,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgSwitchBackgroundRecordingGame = vt),
    (e.GetStateHandler = {
      name: `GameRecording.GetState#1`,
      request: Ai,
      response: ji,
    }));
  function yt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, P(Ai, e), ji, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetState = yt;
  function bt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, P(Ai, e), ji, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetState = bt),
    (e.NotifyStateChangedHandler = {
      name: `GameRecording.NotifyStateChanged#1`,
      request: Mi,
    }));
  function xt(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(U.NotifyStateChangedHandler, e)
    );
  }
  e.RegisterForNotifyStateChanged = xt;
  function St(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, P(Mi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyStateChanged = St;
  function Ct(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, P(Mi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SendMsgNotifyStateChanged = Ct;
})((U ||= {}));
var Ni = (function (e) {
  return (
    (e[(e.Invalid = 0)] = `Invalid`),
    (e[(e.Playing = 1)] = `Playing`),
    (e[(e.Staging = 2)] = `Staging`),
    (e[(e.Menus = 3)] = `Menus`),
    e
  );
})({});
function Pi(e) {
  return e.type === `gamemode`;
}
function Fi(e) {
  return e.type === `state_description`;
}
function Ii(e) {
  return e.type === `event` && parseInt(e.duration) > 0;
}
function Li(e) {
  return e.type === `event`;
}
function Ri(e) {
  return e.type === `achievement`;
}
function zi(e) {
  return e.type === `error`;
}
function W(e) {
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
function G(e) {
  return { type: `global`, valMS: e };
}
function Hi(e) {
  return { type: `timeline`, valMS: e };
}
function Ui(e) {
  return { type: `global`, valPX: e };
}
function Wi(e) {
  return { type: `scrollWindow`, valPX: e };
}
var Gi = class e {
    m_ulGameID;
    constructor(e, t, n) {
      if (typeof e == `string`) this.m_ulGameID = c.fromString(e, !0);
      else {
        let r = n,
          i = ((e & 255) << 24) + (t & 16777215);
        this.m_ulGameID = c.fromBits(i, r, !0);
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
      return this.GetType() === yt.k_EGameIDTypeApp;
    }
    BIsShortcut() {
      return this.GetType() === yt.k_EGameIDTypeShortcut;
    }
    BIsMod() {
      return this.GetType() === yt.k_EGameIDTypeGameMod;
    }
    GetInternalAppID() {
      return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
    }
    BIsValid() {
      switch (this.GetType()) {
        case yt.k_EGameIDTypeApp:
          return this.GetAppID() !== 0;
        case yt.k_EGameIDTypeGameMod:
          return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
        case yt.k_EGameIDTypeShortcut:
          return !!(this.GetModID() & 2147483648);
        default:
          return (nt(!1, `Unknown GameID type: ${this.GetType()}`), !1);
      }
    }
    static InitFromAppID(t) {
      return new e(yt.k_EGameIDTypeApp, t, 0);
    }
    static InitFromShortcutID(t) {
      return new e(yt.k_EGameIDTypeShortcut, 0, t);
    }
  },
  Ki = e(p(), 1),
  qi = 1e4,
  Ji = 3e3,
  Yi = 4e3,
  Xi = class e {
    constructor() {
      o(this);
    }
    m_bInitialized = !1;
    m_rgListeners = [];
    m_gameID;
    m_clipID;
    m_ulFirstTimelineOffsetMS = 0;
    m_rgTimelineMetadata = [];
    m_mapTimelineData = new Map();
    m_mapRunningTimelines = new Map();
    m_schUpdateRunning = new ot();
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
      return (this.m_rgListeners.push(e), () => vt(this.m_rgListeners, e));
    }
    async LoadTimelinesForBackgroundVideo(e) {
      this.m_gameID = e;
      let { timelines: t = [] } = (await U.GetTimelinesForApp({ game_id: e }))
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
      let t = await U.GetTimelinesForClip({ clip_id: e });
      if (t.GetEResult() != 1) throw Error(`Unable to load clip ` + e);
      let {
        timelines: n = [],
        game_id: r,
        first_timeline_start_offset_ms: i,
      } = t.Body().toObject();
      ((this.m_gameID = r), this.UpdateTimelineMetadata(n));
      for (let t of this.m_rgTimelineMetadata) {
        z(`Loaded clip ${e} timeline ${t.metadata.timeline_id}`);
        for (let e of t.metadata.recordings)
          z(`Clip recording ${e.recording_id} duration ${e.duration_ms}`);
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
            : (n.push({ nGlobalOffsetMS: G(r), metadata: t }),
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
          r = Ki.default
            .get(t, { withCredentials: !1 })
            .then(
              (t) => {
                if (t.status == 200 && t.data) {
                  Qi(t.data);
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
            parseInt(t.m_rgGameModeChanges[0].time) < qi &&
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
            nTimelineOffsetMS: Hi(r - i - a),
          };
        i += o;
      }
      return { strTimelineID: void 0, nTimelineOffsetMS: Hi(NaN) };
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
          o = A(e, (e) => t.valMS - 1 - parseInt(e.time));
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
          o = A(e, (e) => t.valMS - parseInt(e.time));
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
        a = A(n.m_rgEntries, (e) => i - parseInt(e.time));
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
              globalMS: G(i),
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
                  globalMS: G(i),
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
        a = A(n.m_rgEntries, (e) => i - parseInt(e.time)) + 1;
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
              globalMS: G(i),
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
                  globalMS: G(i),
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
      let r = A(
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
        ((i = A(r.m_rgGameModeChanges, e)), (a = A(r.m_rgEntries, e)));
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
        ? Ni.Playing
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
      St(e.m_rgEntries, t, (e, t) => parseInt(e.time) - parseInt(t.time));
    }
    AddEventToTimeline(e, t, n, r, i, a, o, s) {
      if (!this.m_bInitialized)
        return (B(`timeline loader not initialized, unexpected`), !1);
      let c = this.m_mapTimelineData.get(e);
      if (!c) return (B(`failed to find timeline ${e}`), !1);
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
        V(`adding timeline event marker at ${e} at ${l} MS`),
        this.InsertEntryIntoTimelineSorted(c, u),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    RemoveTimelineEvent(e, t) {
      if (!this.m_bInitialized)
        return (B(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (B(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (B(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddUserMarker(e, t, n, r) {
      if (!this.m_bInitialized)
        return (B(`timeline loader not initialized, unexpected`), !1);
      let i = this.m_mapTimelineData.get(e);
      if (!i) return (B(`failed to find timeline ${e}`), !1);
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
        V(`adding user marker at ${e} at ${a} MS`),
        this.InsertEntryIntoTimelineSorted(i, o),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    UpdateUserMarker(e, t, n) {
      if (!this.m_bInitialized)
        return (B(`timeline loader not initialized, unexpected`), !1);
      let r = this.m_mapTimelineData.get(e);
      if (!r) return (B(`failed to find timeline ${e}`), !1);
      let i = r.m_rgEntries.findIndex((e) => e.id === t);
      if (i < 0) return (B(`failed to find entry by id: ${t}`), !1);
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
        return (B(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (B(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (B(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddRunningTimeline(e, t, n) {
      if (this.m_rgTimelineMetadata.find((t) => t.metadata.timeline_id == e))
        return;
      let r = { timeline_id: e, game_id: t, date_recorded: n, recordings: [] },
        i = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1],
        a = i ? i.nGlobalOffsetMS.valMS + parseInt(i.metadata.duration_ms) : 0;
      (St(
        this.m_rgTimelineMetadata,
        { nGlobalOffsetMS: G(a), metadata: r },
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
        m_nPerfCounterOffsetMS: Math.max(0, Rt() - n) * 1e3,
        m_runningRecording: null,
      };
      (this.m_mapRunningTimelines.set(e, o),
        this.m_schUpdateRunning.IsScheduled() ||
          this.m_schUpdateRunning.Schedule(Yi, this.UpdateRunningTimelines),
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
          this.m_schUpdateRunning.Schedule(Yi, this.UpdateRunningTimelines),
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
      Pi(r)
        ? St(
            n.m_rgGameModeChanges,
            r,
            (e, t) => parseInt(e.time) - parseInt(t.time),
          )
        : Fi(r)
          ? St(
              n.m_rgStateDescriptions,
              r,
              (e, t) => parseInt(e.time) - parseInt(t.time),
            )
          : St(n.m_rgEntries, r, (e, t) => parseInt(e.time) - parseInt(t.time));
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
            nt(!1, `Received recording started message before timeline info`));
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
        return G(e.nGlobalOffsetMS.valMS + t);
      }
      return G(0);
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
            G(e.nGlobalOffsetMS.valMS + r + a)
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
          if ((d && n < t) || (f && n > r) || (!Li(e) && !W(e))) continue;
          let a = Zi(e);
          (!i || (a && a.rank > i.rank)) && (i = a);
        }
        for (let e of p.m_rgStateDescriptions) {
          let t = parseInt(e.time);
          (f && t > r) || ((!o || s < t) && ((o = e), (s = t)));
        }
        if (f) break;
      }
      let u = i?.strTitle ?? o?.title,
        d = new Gi(this.GetGameID());
      return {
        strTimelinePart: u,
        strAppNamePart: et.GetAppInfo(d.GetInternalAppID())?.name,
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
          `${o.getFullYear()}-${(o.getMonth() + 1).toString().padStart(2, `0`)}-${o.getDate().toString().padStart(2, `0`)} ${o.toLocaleTimeString(Et.GetPreferredLocales())}`,
          i,
        ]
          .filter((e) => !!e)
          .join(` - `);
      return (z(`Generated clip name "${s}"`), s);
    }
  };
(x([s], Xi.prototype, `m_bInitialized`, void 0),
  x([k], Xi.prototype, `UpdateRunningTimelines`, null));
function Zi(e) {
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
function Qi(e) {
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
var $i = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.DownloadFailed = 1)] = `DownloadFailed`),
      (e[(e.PlaybackError = 2)] = `PlaybackError`),
      (e[(e.MediaTypeError = 3)] = `MediaTypeError`),
      e
    );
  })({}),
  K = class {
    m_elVideo = null;
    m_player = null;
    m_listeners = new Vt();
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
    m_eSeekType = ze.Absolute;
    constructor(e) {
      (o(this), (this.m_bAutoPlay = !!e));
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
      return this.m_eSeekType === ze.Absolute
        ? this.m_nPlaybackTime
        : this.m_nPlaybackTime - this.m_nVideoStartTime;
    }
    GetTimelineDuration() {
      return this.m_eSeekType === ze.Absolute
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
    Start(e, t, n, r = ze.Absolute) {
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
        (this.m_player = new je(this.m_elVideo)),
        this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
        this.m_player.PlayMPD(t),
        (this.m_bMuted = ra(`muted`)),
        (this.m_nVolume = ra(`volume`)),
        this.m_player.SetMuted(this.m_bMuted),
        this.m_player.SetVolume(this.m_nVolume),
        (this.m_bSeekReadyToPlay = !1),
        (this.m_eSeekType = r));
      let i = `seeking_${t}_${n.toFixed(3)}`;
      (z(`CGameRecordingVideo:: perf mark ${i}`),
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
        V(`video playing`));
    }
    OnVideoPause() {
      ((this.m_bVideoElementPlaying = !1), V(`video paused`));
    }
    OnVideoTimeUpdate() {
      ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
        (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
        (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()));
    }
    OnVideoEnd() {
      ((this.m_bVideoElementPlaying = !1),
        (this.m_bAtEnd = !0),
        V(`video ended`));
    }
    OnSeeking() {
      (V(`video on seeking`),
        (this.m_bVideoElementPlaying = !1),
        (this.m_bIsWaiting = !0),
        (this.m_bAtEnd = !1));
    }
    OnLoadedMetadata() {
      this.m_bLoadedMetadata = !0;
    }
    async OnDownloadFailed(e) {
      (e.detail || xe.PlaybackError) == xe.UnsupportedMediaType
        ? (B(`media type error`), (this.m_ePlayerError = 3))
        : (B(`video download failed`, e.detail),
          this.m_nDownloadFailureCount < 2
            ? (await this.m_player?.UpdateMPD(), this.m_nDownloadFailureCount++)
            : (this.m_ePlayerError = 1));
    }
    OnPlaybackError() {
      ((this.m_bVideoElementPlaying = !1),
        B(`video playback error`),
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
      V(`volume change`);
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
        z(`CGameRecordingVideo:: perf mark ${t}`),
        z(`CGameRecordingVideo::Seek to ${e}`),
        (this.m_nPlaybackTime = e),
        this.m_player.Seek(e, this.m_eSeekType));
    }
  };
(x([s], K.prototype, `m_bInitailized`, void 0),
  x([s], K.prototype, `m_bPaused`, void 0),
  x([s], K.prototype, `m_bAtEnd`, void 0),
  x([s], K.prototype, `m_strMediaTypeError`, void 0),
  x([s], K.prototype, `m_ePlayerError`, void 0),
  x([s], K.prototype, `m_bUserInputNeeded`, void 0),
  x([s], K.prototype, `m_bMuted`, void 0),
  x([s], K.prototype, `m_bSeekReadyToPlay`, void 0),
  x([s], K.prototype, `m_bVideoElementPlaying`, void 0),
  x([s], K.prototype, `m_nPlaybackSpeed`, void 0),
  x([s], K.prototype, `m_bIsWaiting`, void 0),
  x([s], K.prototype, `m_bLoadedMetadata`, void 0),
  x([s], K.prototype, `m_nPlaybackTime`, void 0),
  x([s], K.prototype, `m_nVideoStartTime`, void 0),
  x([s], K.prototype, `m_nVideoDuration`, void 0),
  x([s], K.prototype, `m_nVolume`, void 0),
  x([s], K.prototype, `m_eSeekType`, void 0),
  x([n], K.prototype, `Start`, null),
  x([n], K.prototype, `Stop`, null),
  x([k], K.prototype, `OnCanPlay`, null),
  x([k], K.prototype, `OnUserPauseChange`, null),
  x([k], K.prototype, `OnVideoPlaying`, null),
  x([k], K.prototype, `OnVideoPause`, null),
  x([k], K.prototype, `OnVideoTimeUpdate`, null),
  x([k], K.prototype, `OnVideoEnd`, null),
  x([k], K.prototype, `OnSeeking`, null),
  x([k], K.prototype, `OnLoadedMetadata`, null),
  x([k], K.prototype, `OnDownloadFailed`, null),
  x([k], K.prototype, `OnPlaybackError`, null),
  x([k], K.prototype, `OnUserInputNeeded`, null),
  x([k], K.prototype, `OnVolumeChange`, null),
  x([k], K.prototype, `OnVideoWaiting`, null),
  x([k], K.prototype, `UserInputReceived`, null));
function ea(e, t) {
  return jt((n) => (t(n), () => e()), [t]);
}
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
var q = f(),
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
  ca = 3 * Ji,
  la = 5 * Ji,
  ua = Ji + 2e3,
  da = 1e3,
  J = class {
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
    m_durationMS = G(null);
    m_lastRecordingGlobalMS = G(null);
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
    constructor(e, t, n, r, i, a, s, c) {
      (o(this),
        (this.m_fnGetManifest = t),
        (this.m_gameRecordingVideo = new K(!0)),
        (this.m_eGameRecordingMode = n),
        (this.m_bGamepadMode = i),
        (this.m_playbackDefinition = s),
        r != null && (this.m_bControlsVisible = r),
        n === `Overlay` && (this.m_bHidePlayer = !0),
        c && this.SetClipOffsets(c),
        (this.m_fnRenderGlyph = a),
        this.m_fnUnregisterAutorun.push(
          u(
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
          u(
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
          u(
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
          u(
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
          u(
            () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
            (e) => {
              if (e) {
                let e = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                try {
                  let t = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                    n = performance.measure(t, e);
                  (z(
                    `CGameRecordingVideo:: perf measure ${e} duration ${n.duration}`,
                  ),
                    n && this.m_rgSeekPerf.push(n.duration));
                } catch (t) {
                  z(`CGameRecordingVideo:: cant measure ${e}, error: ${t}`);
                }
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.SetLoader(e));
    }
    AddEventListener(e) {
      return (this.m_rgListeners.push(e), () => vt(this.m_rgListeners, e));
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
        (z(`Recording invalidated for ${t}. Reloading MPD`),
        this.m_gameRecordingVideo.UpdateMPD());
    }
    OnLoaderInitialized() {
      ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        (this.m_bWasLiveEdge = !0),
        this.TryPlayInitialTimelineVideo());
      let e = Ln(this.m_timelineLoader.GetGameID());
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
        ? G(Math.max(0, this.m_lastRecordingGlobalMS.valMS - ca - 1e3))
        : this.GetTotalMS();
    }
    GetLiveEdgeMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? G(Math.max(0, this.m_lastRecordingGlobalMS.valMS - ua))
        : G(Math.max(0, this.GetTotalMS().valMS - 1));
    }
    GetTimelineAndOffsetRelativeToCurrentPlayback(e = 0) {
      return (
        this.GetCurrentPlaybackGlobalMS(e) ||
        (B(
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
        r = F(t.valMS + e, 0, n - 1e3);
      this.SetPlaytimeFromGlobalMS(G(r));
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
            G(this.m_nGlobalTimelinePlaybackMS),
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
          ? ze.Absolute
          : ze.FromAvailableStart;
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
      return G(this.m_nGlobalTimelinePlaybackMS);
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
          { fnCreateUserTimelineMarkers: i } = Hn(),
          a = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
            r.strTimelineID,
          );
        I.ReportTrackedAction(t);
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
      let { fnRemoveUserTimelineMarker: n } = Hn();
      return (await n(
        this.m_timelineLoader.GetGameID(),
        this.GetClipID(),
        e,
        t,
      )) == 1
        ? (this.m_timelineLoader.RemoveUserMarker(e, t), !0)
        : (V(`Failed to delete user marker for timeline ${e} entry ${t}`), !1);
    }
    async UpdateUserMarker(e, t, n, r) {
      let { fnUpdateUserTimelineMarkers: i } = Hn(),
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
(x([s], J.prototype, `m_bHidePlayer`, void 0),
  x([s], J.prototype, `m_strRecordingID`, void 0),
  x([s], J.prototype, `m_durationMS`, void 0),
  x([s], J.prototype, `m_lastRecordingGlobalMS`, void 0),
  x([s], J.prototype, `m_nGlobalTimelinePlaybackMS`, void 0),
  x([s], J.prototype, `m_nGlobalTimelinePlaybackSec`, void 0),
  x([s], J.prototype, `m_rgSeekPerf`, void 0),
  x([s], J.prototype, `m_eRecordingState`, void 0),
  x([s], J.prototype, `m_eRecordingSetting`, void 0),
  x([s], J.prototype, `m_bGamepadMode`, void 0),
  x([s], J.prototype, `m_bControlsVisible`, void 0),
  x([s], J.prototype, `m_fnRenderGlyph`, void 0),
  x([s], J.prototype, `m_previousHighlightEntry`, void 0),
  x([s], J.prototype, `m_nextHighlightEntry`, void 0),
  x([s], J.prototype, `m_displayHighlightEntry`, void 0),
  x([s], J.prototype, `m_nRelativeTimeForDisplay`, void 0),
  x([s.ref], J.prototype, `m_rgClipOffsets`, void 0),
  x([s.ref], J.prototype, `m_phasePreview`, void 0),
  x([k], J.prototype, `SetVideoElement`, null),
  x([k], J.prototype, `OnInvalidateRecording`, null),
  x([n], J.prototype, `OnLoaderInitialized`, null),
  x([k], J.prototype, `OnInvalidate`, null),
  x([k], J.prototype, `OnTimelineLoaded`, null),
  x([k], J.prototype, `GetLiveEdgeMS`, null),
  x([k], J.prototype, `StopPlayback`, null),
  x([k], J.prototype, `TogglePlayPause`, null),
  x([n], J.prototype, `UpdateGlobalPlayTime`, null));
var fa = L.createContext({ timelinePlaybackCoordinator: null });
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
    [f] = L.useState(() => new J(i, r, n, o, s, c, u, d));
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
  return (0, q.jsx)(fa.Provider, { value: p, children: t });
}
function Y() {
  return (0, L.useContext)(fa).timelinePlaybackCoordinator;
}
function ma() {
  let e = Y();
  return [r(() => e?.GetPhasePreview() || null), (t) => e?.SetPhasePreview(t)];
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
  return (0, q.jsx)(`div`, {
    style: c ?? {},
    className: j(s, { [ga]: !0, [ha]: u, [va]: l }),
    onClick: (e) => {
      r && r(e);
    },
    onContextMenu: o,
    onMouseEnter: i,
    onMouseLeave: a,
    children: (0, q.jsx)(Sa, { entry: t, strMarkerIcon: n }),
  });
}
function Sa(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r = Y().GetGameID();
  return Ri(t)
    ? (0, q.jsx)(Ca, { achievementEntry: t, strGameID: r })
    : zi(t)
      ? (0, q.jsx)(Ea, {})
      : On(n)
        ? (0, q.jsx)(wa, { entry: t, strMarkerIcon: n })
        : (0, q.jsx)(Da, { strMarkerIcon: n, strGameID: r });
}
function Ca(e) {
  let { achievementEntry: t, strGameID: n } = e,
    r = Un(new Gi(n).GetAppID(), t.achievement_name),
    i,
    a;
  if (r) ((i = `white`), (a = (0, q.jsx)(`img`, { src: r.iconURL })));
  else {
    let e = En();
    ((i = bn(e.color)), (a = e.func({})));
  }
  return (0, q.jsx)(`div`, { className: ya, style: { color: i }, children: a });
}
function wa(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r,
    i;
  W(t) ? ((r = Tn()), (i = _a)) : (r = wn(n));
  let a = bn(r.color);
  return (0, q.jsx)(ka, {
    color: a,
    children: (0, q.jsx)(`div`, { className: i, children: r.func({}) }),
  });
}
function Ta(e) {
  let { icon: t, className: n } = e;
  return wn(t).func({ className: n });
}
function Ea(e) {
  let t = wn(`steam_invalid`),
    n = bn(t.color);
  return (0, q.jsx)(ka, {
    color: n,
    children: (0, q.jsx)(`div`, { children: t.func({}) }),
  });
}
function Da(e) {
  let { strMarkerIcon: t, strGameID: n } = e;
  return (0, q.jsx)(ka, { children: (0, q.jsx)(Oa, { icon: t, gameID: n }) });
}
function Oa(e) {
  let { icon: t, gameID: n, className: r } = e,
    i = jn(new Gi(n).GetAppID(), t);
  if (On(t)) return (0, q.jsx)(Ta, { ...e });
  if (i === null) return null;
  if (i === void 0) {
    let e = Dn();
    return (0, q.jsx)(`div`, { className: r, children: e.func({}) });
  }
  if (`strImageURL` in i)
    return (0, q.jsx)(`img`, {
      src: i.strImageURL,
      alt: ``,
      className: j(r, ba),
    });
  let a = ``;
  return (
    (a = typeof i == `string` ? i : new XMLSerializer().serializeToString(i)),
    (0, q.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      className: j(r, ba),
      children: (0, q.jsx)(`g`, { dangerouslySetInnerHTML: { __html: a } }),
    })
  );
}
function ka(e) {
  let { children: t, color: n } = e;
  return (0, q.jsx)(`div`, {
    className: void 0,
    children: (0, q.jsx)(`div`, {
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
  X = L.createContext({
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
  let e = (0, L.useContext)(X);
  return { nGlobalStartMS: e.globalStartMS, nGlobalEndMS: e.globalEndMS };
}
function Za() {
  return (0, L.useContext)(X).globalStartMS;
}
function Qa() {
  return (0, L.useContext)(X).globalEndMS;
}
function $a() {
  return (0, L.useContext)(X).setRange;
}
function eo() {
  return (0, L.useContext)(X).setStartMS;
}
function to() {
  return (0, L.useContext)(X).setEndMS;
}
function no() {
  let e = (0, L.useContext)(X);
  return {
    selectedMarker: e.selectedMarker,
    setSelectedMarker: e.setSelectedMarker,
  };
}
function ro() {
  let e = (0, L.useContext)(X);
  return !isNaN(e.globalStartMS?.valMS) && !isNaN(e.globalEndMS?.valMS);
}
function io() {
  return (0, L.useContext)(X).clearSelection;
}
function ao() {
  let e = $a(),
    t = eo(),
    n = to(),
    r = Xa(),
    i = so(),
    a = oo();
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
      let p = Ya.nBeforeMS + Ya.nAfterMS;
      (d === void 0 && (d = G(f.valMS - p)),
        f === void 0 && (f = G(d.valMS + p)));
      let m = d != r.nGlobalStartMS,
        h = f != r.nGlobalEndMS;
      (m && h ? e(s, d, f) : m ? t(s, d) : h && n(s, f),
        !u && m && h && i == 0 && a());
    },
    [r, e, t, n, i, a],
  );
}
function oo() {
  return (0, L.useContext)(X).zoomIntoSelection;
}
function so() {
  return (0, L.useContext)(X).selectionZoomCount;
}
function co(e) {
  let t = (0, L.useContext)(X),
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
var lo = 5e3,
  uo = 3e5,
  fo = 1e3,
  po = 10,
  mo = 10,
  Z = (function (e) {
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
      (o(this), (this.m_loader = e), (this.m_eventTarget = t));
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
      return this.m_loader.GetStateDescriptionAtGlobalMS(G(e));
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
  Q = class {
    m_playbackCoordinator;
    m_fnUnregisterPlaybackCoordinator;
    m_refTimelineParentCtn;
    m_timelineMask;
    m_durationMS = 0;
    m_mapTimelineClips = s.map([], { deep: !1 });
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
    m_mapTimelineEntries = s.map([], { deep: !1 });
    m_bInitialized = !1;
    m_eThumbnailComponent = null;
    m_nGlobalRelativeThumbnailPositionPX = void 0;
    m_thumbnailHighlightEntry = void 0;
    m_phaseToHighlight = void 0;
    constructor(e, t, n) {
      (o(this),
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
      (z(`OnTimelineLoaded`, e),
        this.FindTimelineOffsets(e)
          ? this.ComputeEntriesForTimeline(e)
          : V(`Missing timeline offset metadata for`, e));
    }
    OnInvalidate(e) {
      z(`on invalidate`, e);
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
            n = F(
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
      this.m_scrollLeftPX = F(e, 0, this.GetMaxScrollLeftPX());
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
      let e = F(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
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
      t < 0 && (t = A(this.m_rgTimelineOffsets, (t) => e - t.globalOffsetMS));
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
      return A(
        this.m_rgTimelineOffsets,
        (t) =>
          e -
          (this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS) +
            this.ConvertDurationMSToDeltaPX(t.nDurationMS)),
      );
    }
    FindIndexOfClosestTimelineStartForOffsetPX(e) {
      return A(
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
(x([s], Q.prototype, `m_durationMS`, void 0),
  x([s], Q.prototype, `m_scrollLeftPX`, void 0),
  x([s], Q.prototype, `m_scrollWindowWidth`, void 0),
  x([s], Q.prototype, `m_scrollWindowOffsetPX`, void 0),
  x([s], Q.prototype, `m_bAutoScrollPaused`, void 0),
  x([s], Q.prototype, `m_autoScrollPauseTimeout`, void 0),
  x([s], Q.prototype, `m_msVisible`, void 0),
  x([s.ref], Q.prototype, `m_rgTimelineOffsets`, void 0),
  x([s], Q.prototype, `m_bInitialized`, void 0),
  x([s], Q.prototype, `m_eThumbnailComponent`, void 0),
  x([s], Q.prototype, `m_nGlobalRelativeThumbnailPositionPX`, void 0),
  x([s], Q.prototype, `m_thumbnailHighlightEntry`, void 0),
  x([s], Q.prototype, `m_phaseToHighlight`, void 0),
  x([n], Q.prototype, `OnLoaderInitialized`, null),
  x([n], Q.prototype, `InitDefaultsIfReady`, null),
  x([n], Q.prototype, `OnInvalidate`, null),
  x([n], Q.prototype, `ZoomIn`, null),
  x([n], Q.prototype, `ZoomOut`, null),
  x([n], Q.prototype, `SetTempZoomScale`, null),
  x([n], Q.prototype, `ClearTempZoomScale`, null),
  x([n], Q.prototype, `UpdateClipSummaries`, null),
  x([k], Q.prototype, `BReachedMaxScroll`, null),
  x([k], Q.prototype, `BReachedMinScroll`, null));
var go = L.createContext(null);
function _o(e) {
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
      let e = new Q(t, n, i);
      return (s(e), () => e.Close());
    }, [t]),
    (0, L.useEffect)(() => {
      o && o.UpdateClipSummaries(i);
    }, [o, i]),
    (0, L.useEffect)(() => {
      o && a && o.SetTimelineParentCtnRef(a.current);
    }, [o, a]),
    yo(o),
    vo(o),
    o ? (0, q.jsx)(go.Provider, { value: o, children: r }) : null
  );
}
function vo(e) {
  co(
    L.useCallback(
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
  (0, L.useEffect)(() => {
    e && e.SetUserIsClipping(t);
  }, [e, t]);
}
function $() {
  return (0, L.useContext)(go);
}
var bo = `BAvp4rqoXrI-`,
  xo = `MvaB420caso-`,
  So = `KHooprC7Eh8-`,
  Co = `S49EhbfI3MU-`,
  wo = `_5URRAlchke4-`,
  To = 20,
  Eo = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
  Do = L.memo(function (e) {
    let t = $(),
      n = r(() => t.GetVisibleTimelines());
    return (0, q.jsx)(q.Fragment, {
      children: n.map((e) =>
        (0, q.jsx)(
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
  Oo = L.memo(function (e) {
    let {
        msVisibleStart: t,
        msTimelineStart: n,
        pxVisibleDuration: r,
        pxVisibleStart: i,
      } = e,
      { msTickSpacing: a, pxTickSpacing: o } = Ao(),
      s = $(),
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
      ? (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(`div`, {
              className: bo,
              style: { transform: `translateX(${i}px)`, width: r },
            }),
            d.map((e) =>
              (0, q.jsx)(
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
  return (0, q.jsx)(`div`, {
    className: xo,
    style: { transform: `translateX(${t}px)` },
    children: (0, q.jsx)(`div`, { className: j(So, r) }),
  });
}
function Ao() {
  let e = $(),
    t = r(() => e.GetCurrentZoomScale()),
    n = (e) => Math.abs(300 - e / t),
    i = Eo.reduce((e, t) => (n(e) - n(t) < 0 ? e : t)) / To;
  return { msTickSpacing: i, pxTickSpacing: i / t };
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
  Ro = (0, L.createContext)({});
function zo() {
  return (0, L.useContext)(Ro);
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
    [o, s] = L.useState(r.title || ``),
    [c, l] = L.useState(r.description || ``),
    u = We();
  return u.bLoading
    ? (0, q.jsx)(Le, {
        state: u,
        strDialogTitle: O(`#Marker_Dialog`),
        closeModal: t,
      })
    : (0, q.jsxs)(_t, {
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
          (0, q.jsx)(gt, {
            type: `text`,
            value: o,
            onChange: (e) => s(e.currentTarget.value),
            label: O(`#Marker_Title`),
          }),
          (0, q.jsx)(gt, {
            type: `text`,
            value: c,
            onChange: (e) => l(e.currentTarget.value),
            label: O(`#Marker_Description`),
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
        gameID: new Gi(this.m_strGameID),
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
          Wn(
            new Gi(this.m_strGameID),
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
        let { fnDeleteClip: e } = Bn();
        await e(this.m_creationResult.clipSummary.clip_id);
      }
    }
  };
(x([k], $o.prototype, `create`, null), x([k], $o.prototype, `cleanup`, null));
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
  let { fnSaveClip: l } = zn();
  V(`start ${r} @ ${i} upto ${a} @ ${o}`);
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
      V(d ? `Clip ${d.clip_id} created` : `Clip was not created: ${f}`), u
    );
  } catch (e) {
    B(e);
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
  is = L.createContext({
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
    [n, i] = (0, L.useState)(!1),
    [a, o] = (0, L.useState)(!1),
    [s, c] = (0, L.useState)(!1),
    [l, u] = (0, L.useState)(),
    d = (0, L.useRef)(void 0),
    f = $(),
    p = r(() => f.GetScrollableWidthPX()),
    m = r(() => f.GetVisualWindowStartPX()),
    h = r(() => f.GetScrollWindowWidth()),
    g = r(() => f.GetScrollWindowOffset()),
    _ = r(() => f.GetTimelineMarginWidth()),
    v = L.useMemo(() => {
      if (d.current) {
        let e = m - g - _;
        return Ui(F(l + e, 0, p));
      }
      return Ui(0);
    }, [_, l, g, m, p]),
    y = L.useMemo(() => {
      if (d.current) {
        let e = d.current.getBoundingClientRect(),
          t = p > h ? g : e.x;
        return Wi(F(l - t, 0, h));
      }
      return Wi(0);
    }, [l, g, h, p]),
    ee = (0, L.useCallback)(
      (e, t) => (
        d.current && d.current.addEventListener(e, t),
        () => d.current?.removeEventListener(e, t)
      ),
      [],
    ),
    te = (0, L.useCallback)(() => i(!0), []),
    ne = (0, L.useCallback)(() => i(!1), []),
    re = (0, L.useCallback)((e) => u(e.clientX), []),
    ie = (0, L.useCallback)((e) => o(!0), []),
    ae = (0, L.useCallback)((e) => o(!1), []);
  (0, L.useEffect)(() => {
    let e = It(d.current);
    return (
      e.addEventListener(`mousemove`, re),
      () => e.removeEventListener(`mousemove`, re)
    );
  }, [re]);
  let oe = (0, L.useMemo)(
    () => ({
      bContainerFocus: a,
      bInContainer: n,
      nMouseClientXPX: l,
      globalMouseXPX: v,
      scrollWindowMouseXPX: y,
      fnRegisterMouseEvent: ee,
      bContextMenuOpen: s,
      setContextMenuOpen: c,
    }),
    [a, n, s, l, v, y, ee],
  );
  return (0, q.jsx)(is.Provider, {
    value: oe,
    children: (0, q.jsx)(`div`, {
      ref: d,
      onMouseOver: ie,
      onFocus: ie,
      onMouseOut: ae,
      onBlur: ae,
      onMouseEnter: te,
      onMouseLeave: ne,
      className: rs,
      children: t,
    }),
  });
}
function os() {
  return (0, L.useContext)(is);
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
    r = (0, L.useRef)(void 0),
    i = (0, L.useCallback)(() => {
      r.current = n(e, t);
    }, [n, t, e]),
    a = (0, L.useCallback)(() => {
      r.current && r.current();
    }, []);
  (0, L.useEffect)(() => (i(), () => a()), [i, a]);
}
function ps() {
  let e = $(),
    t = Y(),
    n = ao(),
    i = r(() => !t.ShouldModeShowClipControls()),
    a = Gn(),
    { onMarkerCreated: o, onNavigateToClip: s } = zo(),
    [c, l] = ds();
  return L.useCallback(
    (r, c, u, d) =>
      i || a
        ? null
        : dt(
            (0, q.jsx)(ms, {
              isCurrentPlayback: u,
              nGlobalOffsetMS: c,
              playbackCoordinator: t,
              timelineView: e,
              fnSetSelectionClipRange: n,
              onMarkerCreated: o,
              onNavigateToClip: s,
              onContextMenuOpenChange: l,
            }),
            r,
            d,
          ),
    [i, a, t, e, n, o, s, l],
  );
}
function ms(e) {
  let {
      playbackCoordinator: t,
      timelineView: n,
      nGlobalOffsetMS: i,
      fnSetSelectionClipRange: a,
      isCurrentPlayback: o,
      onMarkerCreated: s,
      onNavigateToClip: c,
      onContextMenuOpenChange: l,
    } = e,
    u = r(() => t.GetClipsAtGlobalMS(i)),
    d = _s(n);
  (0, L.useEffect)(() => (l(!0), () => l(!1)), [l]);
  let f = (() => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(i.valMS);
      if (!e) return null;
      let r = t.GetLoader().GetTimelineData(e);
      if (!r) return null;
      let a = A(r.m_rgPhases, (e) => n.valMS - parseInt(e.time));
      if (a < 0) return null;
      let o = r.m_rgPhases[a];
      return n.valMS >= parseInt(o.time) &&
        n.valMS <= parseInt(o.time) + parseInt(o.duration)
        ? { strTimelineID: e, phase: o }
        : null;
    })(),
    p = (e) => {
      (t.AddUserMarkerAtGlobalMS(
        i,
        `/GameRecording/AddMarker/TimelineCtxMenu`,
        (t, n) => {
          s && s(t, n, e);
        },
      ),
        t.SetPlaytimeFromGlobalMS(i),
        t.FocusGlobalMS(i));
    },
    m = () => {
      (a(t, 4, i, void 0), t.SetPlaytimeFromGlobalMS(i), t.FocusGlobalMS(i));
    },
    h = () => {
      (a(t, 4, void 0, i), t.SetPlaytimeFromGlobalMS(i), t.FocusGlobalMS(i));
    },
    g = () => {
      u.length > 0 &&
        (I.ReportTrackedAction(
          `/GameRecording/Tooltip/ViewClip/TimelineCtxMenu`,
        ),
        c && c(u[0].strClipID));
    },
    _ = () => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(i.valMS);
      (t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(e),
        Vn(t.GetGameID(), e, n, t.GetClipID()));
    },
    v = () => {
      if (!f) return;
      let { phase: e, strTimelineID: n } = f;
      ns(t.GetGameID(), n, parseInt(e.time), parseInt(e.duration));
    },
    y = (e) => n.SetPhaseToHighlight(e);
  return (
    (0, L.useEffect)(() => () => n.SetPhaseToHighlight(null), [n]),
    (0, q.jsxs)(bt, {
      refInstance: d,
      children: [
        (0, q.jsx)(C, {
          onSelected: p,
          className: Jo,
          children: (0, q.jsxs)(`div`, {
            className: j(Yo, Xo),
            children: [
              (0, q.jsx)(re, {}),
              O(
                o
                  ? `#Playback_UserSelectionControls_AddUserMarker`
                  : `#TimelineDialog_AddMarker`,
              ),
            ],
          }),
        }),
        (0, q.jsx)(C, {
          onSelected: _,
          className: Jo,
          children: (0, q.jsxs)(`div`, {
            className: j(Yo, Zo),
            children: [
              (0, q.jsx)(Qe, {}),
              O(
                o
                  ? `#Playback_UserSelectionControls_TakeScreenshot`
                  : `#TimelineDialog_TakeScreenshot`,
              ),
            ],
          }),
        }),
        (0, q.jsx)(C, {
          onSelected: m,
          className: Jo,
          children: (0, q.jsxs)(`div`, {
            className: j(Yo, Qo),
            children: [
              (0, q.jsx)(Me, { direction: `left` }),
              O(
                o
                  ? `#Playback_UserSelectionControls_SetClipStart`
                  : `#TimelineContext_SetClipStart`,
              ),
            ],
          }),
        }),
        (0, q.jsx)(C, {
          onSelected: h,
          className: Jo,
          children: (0, q.jsxs)(`div`, {
            className: j(Yo, Qo),
            children: [
              (0, q.jsx)(Me, { direction: `right` }),
              O(
                o
                  ? `#Playback_UserSelectionControls_SetClipEnd`
                  : `#TimelineContext_SetClipEnd`,
              ),
            ],
          }),
        }),
        !!f &&
          (0, q.jsx)(C, {
            onSelected: v,
            className: `YwXy-p3jOGA-`,
            onMouseOver: () => y([f.strTimelineID, f.phase.time]),
            onMouseLeave: () => y(null),
            children: (0, q.jsxs)(`div`, {
              className: j(`DYV4-rbHkCQ-`, `cTZ4oCV0rfc-`),
              children: [(0, q.jsx)(te, {}), O(`#TimelineDialog_ClipPhase`)],
            }),
          }),
        u.length > 0 &&
          (0, q.jsx)(C, {
            onSelected: g,
            className: `YwXy-p3jOGA-`,
            children: (0, q.jsxs)(`div`, {
              className: j(`DYV4-rbHkCQ-`, `opmNw-e94ys-`),
              children: [(0, q.jsx)(ct, {}), O(`#TimelineDialog_ViewClip`)],
            }),
          }),
      ],
    })
  );
}
function hs() {
  let e = Y(),
    t = ao(),
    n = r(() => !e.ShouldModeShowClipControls()),
    i = Gn(),
    { onMarkerCreated: a } = zo();
  return L.useCallback(
    (r, o) => {
      n ||
        i ||
        dt(
          (0, q.jsx)(gs, {
            onMarkerCreated: a,
            playbackCoordinator: e,
            fnSetSelectionClipRange: t,
          }),
          r,
          o,
        );
    },
    [n, i, a, e, t],
  );
}
function gs(e) {
  let { playbackCoordinator: t, fnSetSelectionClipRange: n } = e,
    r = (0, L.useRef)(void 0),
    { onMarkerCreated: i } = zo();
  return (0, q.jsxs)(bt, {
    refInstance: r,
    children: [
      (0, q.jsx)(C, {
        onSelected: (e) => {
          let n = (t, n) => {
              i && i(t, n, e);
            },
            r = t.GetGlobalMSPlaytime();
          (t.AddUserMarkerAtGlobalMS(
            r,
            `/GameRecording/AddMarker/VideoCtxMenu`,
            n,
          ),
            t.SetPlaytimeFromGlobalMS(r),
            t.FocusGlobalMS(r));
        },
        className: Jo,
        children: (0, q.jsxs)(`div`, {
          className: j(Yo, Xo),
          children: [
            (0, q.jsx)(Fe, {}),
            O(`#Playback_UserSelectionControls_AddUserMarker`),
          ],
        }),
      }),
      (0, q.jsx)(C, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime(),
            { strTimelineID: n, nTimelineOffsetMS: r } =
              t.ConvertGlobalOffsetToTimelineRelativeOffset(e.valMS);
          (t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(n),
            Vn(t.GetGameID(), n, r, t.GetClipID()));
        },
        className: Jo,
        children: (0, q.jsxs)(`div`, {
          className: j(Yo, Zo),
          children: [
            (0, q.jsx)(Qe, {}),
            O(`#Playback_UserSelectionControls_TakeScreenshot`),
          ],
        }),
      }),
      (0, q.jsx)(C, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime();
          (n(t, 4, e, void 0),
            t.SetPlaytimeFromGlobalMS(e),
            t.FocusGlobalMS(e));
        },
        className: Jo,
        children: (0, q.jsxs)(`div`, {
          className: j(Yo, Qo),
          children: [
            (0, q.jsx)(Me, { direction: `left` }),
            O(`#Playback_UserSelectionControls_SetClipStart`),
          ],
        }),
      }),
      (0, q.jsx)(C, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime();
          (n(t, 4, void 0, e),
            t.SetPlaytimeFromGlobalMS(e),
            t.FocusGlobalMS(e));
        },
        className: Jo,
        children: (0, q.jsxs)(`div`, {
          className: j(Yo, Qo),
          children: [
            (0, q.jsx)(Me, { direction: `right` }),
            O(`#Playback_UserSelectionControls_SetClipEnd`),
          ],
        }),
      }),
    ],
  });
}
function _s(e) {
  let t = r(() => e.GetAutoScrollPauseTimeout()),
    n = r(() => e.GetVisualWindowStartPX()),
    i = (0, L.useRef)(void 0),
    a = (0, L.useRef)(void 0);
  return (
    (0, L.useEffect)(() => {
      i.current && a.current ? a.current.Hide() : (i.current = !0);
    }, [n]),
    (0, L.useEffect)(() => {
      e.SetAutoScrollPaused(!0);
    }, [e]),
    (0, L.useEffect)(() => {
      t && e.ClearAutoScrollPauseTimeout();
    }, [t, e]),
    a
  );
}
function vs() {
  let e = $(),
    t = Y(),
    { setSelectedMarker: n } = no(),
    i = io(),
    { onNavigateToClip: a, onNavigateToScreenshot: o } = zo(),
    s = Gn(),
    c = r(() => !t.ShouldModeShowClipControls());
  return L.useCallback(
    (r, l, u) => {
      c ||
        dt(
          (0, q.jsx)(ys, {
            markerInfo: l,
            playbackCoordinator: t,
            timelineView: e,
            setSelectedMarker: n,
            onNavigateToClip: a,
            onNavigateToScreenshot: o,
            bLowDiskSpace: s,
            clearRange: i,
          }),
          r,
          u,
        );
    },
    [c, s, t, e, n, a, o, i],
  );
}
function ys(e) {
  let {
      playbackCoordinator: t,
      timelineView: n,
      markerInfo: i,
      setSelectedMarker: a,
      clearRange: o,
      bLowDiskSpace: s,
      onNavigateToClip: c,
      onNavigateToScreenshot: l,
    } = e,
    u = r(() => n.ConvertGlobalMSToClipOrNone(i.nGlobalMS.valMS)),
    d = r(() =>
      t.ConvertGlobaOffsetToRecordingAndRelativeOffset(i.nGlobalMS.valMS),
    ),
    f = _s(n),
    p = (e) => {
      let n = bs,
        r = xs;
      Ii(i.entry) && ((n = 0), (r = parseInt(i.entry.duration)));
      let [o, s] = t
        .GetLoader()
        .CreateGlobalRangeForTimeline(i.strTimelineID, i.nGlobalMS.valMS, n, r);
      (t.SetPlaytimeFromGlobalMS(G(o)),
        a?.(i.entry.id, i.strTimelineID, o, s),
        I.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/ClipFromHighlight`,
        ),
        e.stopPropagation());
    },
    m = () => {
      u &&
        (I.ReportTrackedAction(
          `/GameRecording/MarkerCtxMenu/ViewClip/${i.entry.type}`,
        ),
        c && c(u.clipID));
    },
    h = (e) => {
      if (!W(i.entry)) return;
      I.ReportTrackedAction(
        `/GameRecording/HighlightCtxMenu/Marker/Edit/${i.entry.type}`,
      );
      let n = (0, q.jsx)(qo, {
        entry: i.entry,
        playbackCoordinator: t,
        fnClearSelection: o,
        strTimelineID: i.strTimelineID,
      });
      (ft(n, Ft(e)), e.stopPropagation(), e.preventDefault());
    },
    g = (e) => {
      W(i.entry) &&
        (I.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/Marker/Delete/${i.entry.type}`,
        ),
        t.RemoveUserMarker(i.strTimelineID, i.entry.id));
    },
    _ = () => {
      Bi(i.entry) &&
        i.entry?.handle &&
        (I.ReportTrackedAction(`/GameRecording/HighlightCtxMenu/Screenshot`),
        l(n.GetGameID(), i.entry.handle));
    },
    v = [];
  return (
    W(i.entry) &&
      v.push(
        (0, q.jsx)(
          C,
          {
            onSelected: h,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: j(Vo, Ho),
              children: [(0, q.jsx)(ue, {}), O(`#Marker_Action_Edit`)],
            }),
          },
          `edit`,
        ),
      ),
    d?.strRecordingID &&
      !s &&
      v.push(
        (0, q.jsx)(
          C,
          {
            onSelected: p,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: j(Vo, Uo),
              children: [(0, q.jsx)(qe, {}), O(`#TimelineDialog_ClipVideo`)],
            }),
          },
          `clip`,
        ),
      ),
    Bi(i.entry) &&
      v.push(
        (0, q.jsx)(
          C,
          {
            onSelected: _,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: j(Vo, Go),
              children: [
                (0, q.jsx)(Re, {}),
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
        (0, q.jsx)(
          C,
          {
            onSelected: m,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: j(Vo, Ko),
              children: [(0, q.jsx)(Ae, {}), O(`#TimelineDialog_ViewClip`)],
            }),
          },
          `view_clip`,
        ),
      ),
    W(i.entry) &&
      v.push(
        (0, q.jsx)(
          C,
          {
            onSelected: g,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: j(Vo, Wo),
              children: [(0, q.jsx)(st, {}), O(`#Marker_Action_Delete`)],
            }),
          },
          `delete`,
        ),
      ),
    v.length ? (0, q.jsx)(bt, { refInstance: f, children: v }) : null
  );
}
var bs = 5e3,
  xs = 3e3,
  Ss = 5e3;
function Cs(e) {
  let {
      markerInfo: t,
      view: n,
      coordinator: i,
      gameID: a,
      clipID: o,
      timelineID: s,
      faded: c,
    } = e,
    l = t.nGlobalMS,
    u = r(() => n.ConvertGlobalMSToGlobalPXOffset(l.valMS)),
    d = r(() => {
      let e = n.GetThumbnailComponent();
      return e && e !== Z.Highlight;
    }),
    f = vs(),
    { selectedMarker: p } = no(),
    m = t.entry?.id == p?.strEntryID && t.strTimelineID == p?.strTimelineID,
    { ref: h, ...g } = Ts(n, t),
    _ = L.useCallback(
      (e) => {
        let r = l.valMS - Ss,
          a = n.FindTimelineOffsets(s),
          o = Math.max(r, a.globalOffsetMS);
        (i.SetPlaytimeFromGlobalMS(G(o)),
          i.SetDisplayHighlightEntry(t.entry),
          e.stopPropagation(),
          I.ReportTrackedAction(`/GameRecording/Marker/Click/${t.entry.type}`));
      },
      [i, l.valMS, s, n, t],
    ),
    v = (e) => {
      (f(e, t, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 }),
        e.stopPropagation());
    },
    y = { transform: `translateX( calc( ${u}px - 50% ))` };
  return (0, q.jsxs)(`div`, {
    className: j(jo, d && `fKVXzdV7f4k-`, c && `NF7Pk6zJyl4-`),
    style: y,
    ref: h,
    onContextMenu: v,
    ...g,
    children: [
      (0, q.jsx)(
        `div`,
        {
          className: j(Mo),
          children: (0, q.jsx)(
            xa,
            {
              classNames: No,
              entry: t.entry,
              strMarkerIcon: t.strMarkerIcon,
              faded: c,
              onClick: _,
              bSelectedMarker: m,
            },
            t.entry.id,
          ),
        },
        l.valMS,
      ),
      (0, q.jsx)(`div`, {
        className: Po,
        children: (0, q.jsx)(`div`, { className: j(Fo) }),
      }),
    ],
  });
}
var ws = 150;
function Ts(e, t) {
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
        (t.clientX < a - ws || t.clientX > a + ws) &&
          (e.SetThumbnailComponent(null),
          r.current && r.current(),
          (r.current = null));
      },
      [e],
    ),
    a = L.useCallback(
      (n) => {
        if (
          (e.SetThumbnailComponent(Z.Highlight),
          e.SetThumbnailEntry(t),
          !r.current)
        ) {
          let e = Ft(n);
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
          : (Tt(n.current, t.relatedTarget) ||
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
var Es = 16;
function Ds(e) {
  switch (e.type) {
    case `achievement`:
      return 9e3;
    default:
      return e.priority;
  }
}
var Os = L.memo(function (e) {
    let t = $(),
      n = r(() => t.GetVisibleTimelines());
    return (0, q.jsx)(q.Fragment, {
      children: n.map((e) => (0, q.jsx)(js, { timeline: e }, e.timelineID)),
    });
  }),
  ks = { screenshot: 0, event: 0, achievement: 1, usermarker: 2 };
function As(e, t) {
  if (ks[e.type] !== ks[t.type]) return ks[t.type] - ks[e.type];
  let n = Ds(e),
    r = Ds(t);
  return n == r
    ? e.time == t.time
      ? e.id.localeCompare(t.id)
      : parseInt(e.time) - parseInt(t.time)
    : r - n;
}
var js = L.memo(function (e) {
  let { timeline: t } = e,
    n = $(),
    i = Y(),
    a = r(() => n.GetVisibleTimelineHighlights(t.timelineID) || [])
      .slice()
      .sort(As),
    o = r(() => n.GetTimelineOffsetMS(t.timelineID)),
    s = t.globalOffsetMS - o,
    c = i.GetGameID(),
    l = i.GetClipID(),
    u = new Lo(n.GetCurrentZoomScale() * Es);
  return a.map((e, r) => {
    if (Ns(e) !== `highlight`) return null;
    let a = `${e.type}_${e.id}_${t.timelineID}_${r}`,
      o = Ms(t.timelineID, s, e),
      d = u.BAllowIcon(o.nGlobalMS.valMS);
    return (0, q.jsx)(
      Cs,
      {
        gameID: c,
        clipID: l,
        view: n,
        coordinator: i,
        faded: !d,
        timelineID: t.timelineID,
        markerInfo: o,
      },
      a,
    );
  });
});
function Ms(e, t, n) {
  if (
    ![`event`, `usermarker`, `screenshot`, `achievement`, `error`].includes(
      n.type,
    )
  )
    return (
      z(
        `Unexpected timeline entry type ${n.type}, returning empty highlight marker`,
      ),
      null
    );
  let r = n,
    i = Ri(r);
  return {
    entry: r,
    strMarkerIcon: i ? `steam_achievement` : r.icon,
    nMarkerPriority: Ds(r),
    strTimelineID: e,
    strTitle: (!i && r.title) || ``,
    strDescription: (!i && r.description) || ``,
    nGlobalMS: G(parseInt(r.time) + t),
  };
}
function Ns(e) {
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
var Ps = `-X0PMxvY3QE-`,
  Fs = `cbzcIa1ocN4-`,
  Is = `MMJtgRs0Os4-`,
  Ls = `m6U62VPiE5I-`,
  Rs = `KT1NiRNa2wQ-`;
function zs(e) {
  let { view: t, entry: n, nGlobalEntryEndMS: i, nGlobalTLStartMS: a } = e,
    o = Y(),
    s = G(parseInt(n.time) + a.valMS),
    c = r(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(s.valMS),
        n = t.GetVirtualWindowStartPX();
      return n < e ? e : n;
    }),
    l = r(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(i.valMS),
        n = t.GetVirtualWindowEndPX();
      return n < e ? n : e;
    }),
    u = !!o.GetClipID(),
    d = { transform: `translateX( ${c}px )`, width: l - c },
    f = j({
      [Rs]: n.mode === Ni.Invalid,
      [Is]: n.mode === Ni.Staging,
      [Ls]: n.mode === Ni.Menus,
      [Fs]: n.mode === Ni.Playing,
    });
  return (0, q.jsx)(
    `div`,
    { className: j(Ps, f, u && `dM-k3XLATgY-`), style: d },
    n.id,
  );
}
var Bs = L.memo(function (e) {
    let t = $(),
      n = r(() => t.GetVisibleTimelines());
    return (0, q.jsx)(q.Fragment, {
      children: n.map((e) => (0, q.jsx)(Vs, { timeline: e }, e.timelineID)),
    });
  }),
  Vs = L.memo(function (e) {
    let { timelineID: t, globalOffsetMS: n, nDurationMS: i } = e.timeline,
      a = $(),
      o = r(() => {
        let e = a.GetVisibleTimelineGameModes(t);
        return !e || e.length === 0
          ? [{ time: `0`, type: `gamemode`, mode: Ni.Invalid, id: `synthetic` }]
          : e;
      }),
      s = G(n + i),
      c = n - a.GetTimelineOffsetMS(t),
      l = [];
    for (let e = 0; e < o.length; e++) {
      let n = G(e < o.length - 1 ? parseInt(o[e + 1].time) + c : s.valMS - 1);
      l.push(
        (0, q.jsx)(
          zs,
          {
            view: a,
            entry: o[e],
            nGlobalEntryEndMS: n,
            nGlobalTLStartMS: G(c),
          },
          `gameMode_${t}_${e}`,
        ),
      );
    }
    return (0, q.jsx)(q.Fragment, { children: l });
  }),
  Hs = `XVi5a5ZkmMc-`,
  Us = `-nn0AHNIP3k-`,
  Ws = `-IpQtGedcoc-`,
  Gs = `LsIeUCU634s-`,
  Ks = `QNUH0lZ0VfY-`,
  qs = `wQLCIzL88LU-`,
  Js = `JtIym43tUFo-`,
  Ys = `a23JQkVm40o-`,
  Xs = 500,
  Zs = (0, L.memo)(function (e) {
    let t = Y(),
      n = r(() => t.GetHidePlayer()),
      [i, a] = (0, L.useState)({ bDragActive: !1, bPausedOnDragStart: !1 }),
      o = $(),
      s = r(() => {
        if (
          o.GetAutoScrollPaused() ||
          o.BReachedMaxScroll() ||
          o.BReachedMinScroll() ||
          t.BIsVideoElementPaused()
        )
          return !1;
        let e = t.GetGlobalMSPlaytime();
        return (
          o.ConvertGlobalMSToGlobalPXOffset(e.valMS) <
          o.GetMaxScrollLeftPX() + 0.5 * o.GetScrollWindowWidth()
        );
      });
    return n
      ? (0, q.jsx)($s, { setDragActive: a })
      : s
        ? (0, q.jsx)(Qs, { view: o, setDragActive: a })
        : (0, q.jsx)(ec, { dragState: i, setDragActive: a });
  });
function Qs(e) {
  let { view: t, setDragActive: n } = e,
    i = r(() => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2);
  return (0, q.jsx)(oc, {
    playheadPosition: i,
    children: (0, q.jsx)(tc, { setDragActive: n, bDragActive: !1 }),
  });
}
var $s = (0, L.memo)(function (e) {
    let { setDragActive: t } = e,
      n = $(),
      i = r(() => n.GetScrollableWidthPX()),
      a = Dt(100),
      o = (0, L.useCallback)(
        (e) => {
          n.GetAutoScrollPaused() || a(() => n.ScrollToOffset(e));
        },
        [a, n],
      );
    return (
      (0, L.useEffect)(() => n.ScrollToEnd(), [n]),
      (0, L.useEffect)(() => o(i), [i, o]),
      (0, q.jsx)(oc, {
        playheadPosition: i,
        children: (0, q.jsx)(tc, { setDragActive: t, bDragActive: !1 }),
      })
    );
  }),
  ec = (0, L.memo)(function (e) {
    let { dragState: t, setDragActive: n } = e,
      { bDragActive: r, bPausedOnDragStart: i } = t,
      a = Y(),
      o = $(),
      s = ss(),
      c = ic(cs(), o, r, s, a);
    return (
      (0, L.useEffect)(() => {
        if (!r) return;
        o.SetThumbnailPosition(c);
        let e = o.ConvertPXOffsetToGlobalMS(c, !1);
        if (!e) return;
        let t = a.GetLiveEdgeMS();
        a.SetPlaytimeFromGlobalMS(t.valMS < e ? t : G(e), i, !0, !0);
      }, [c, i, r, a, o]),
      (0, q.jsx)(`div`, {
        className: j(Ks, r && `FOu6nwXsE7c-`),
        children: (0, q.jsx)(oc, {
          className: r ? Js : void 0,
          playheadPosition: c,
          children: (0, q.jsx)(tc, { setDragActive: n, bDragActive: r }),
        }),
      })
    );
  }),
  tc = (0, L.memo)(function (e) {
    let { setDragActive: t, bDragActive: n } = e,
      r = $(),
      i = (e) => {
        (n || r.SetThumbnailComponent(Z.Playhead), e.stopPropagation());
      },
      a = (e) => {
        (n || r.SetThumbnailComponent(null), e.stopPropagation());
      };
    return (0, q.jsx)(`div`, {
      className: Ys,
      onMouseOver: i,
      onMouseOut: a,
      onFocus: i,
      onBlur: a,
      children: (0, q.jsx)(nc, { setDragActive: t }),
    });
  }),
  nc = L.memo(function (e) {
    let { setDragActive: t } = e,
      n = Y(),
      i = ps(),
      a = $(),
      o = r(() => {
        let e = a.GetThumbnailComponent();
        return e === Z.RangeLeft || e === Z.RangeRight;
      }),
      s = (0, L.useCallback)(
        (e) => {
          if (e.button != 0) return;
          let r = Ft(e),
            i,
            o,
            s = () => {
              let e = n.GetGameRecordingVideo().IsPaused();
              (t({ bDragActive: !0, bPausedOnDragStart: e }),
                a.SetThumbnailComponent(Z.Playhead),
                i());
            };
          (r.addEventListener(`mousemove`, s),
            (i = () => r.removeEventListener(`mousemove`, s)));
          let c = () => {
            (t({ bDragActive: !1, bPausedOnDragStart: !1 }),
              a.SetThumbnailComponent(null),
              i(),
              o());
          };
          (r.addEventListener(`mouseup`, c),
            (o = () => r.removeEventListener(`mouseup`, c)));
        },
        [n, t, a],
      ),
      c = (0, L.useCallback)(
        (e) => {
          let t = n.GetGlobalMSPlaytime();
          (i(e, t, !0, {
            bDisableMouseOverlay: !0,
            bForcePopup: !0,
            bAlwaysOnTop: !0,
          }),
            e.stopPropagation(),
            e.preventDefault());
        },
        [n, i],
      );
    return (0, q.jsx)(`div`, {
      className: j(Gs, o && `Twzqk-0-bXc-`),
      onMouseDown: s,
      onContextMenu: c,
      children: (0, q.jsx)(rc, {}),
    });
  });
function rc(e) {
  return (0, q.jsxs)(`svg`, {
    ...e,
    width: `12`,
    height: `32`,
    viewBox: `0 0 12 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, q.jsx)(`rect`, {
        x: `5`,
        y: `4`,
        width: `2`,
        height: `40`,
        fill: `currentColor`,
      }),
      (0, q.jsx)(`path`, {
        d: `M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function ic(e, t, n, i, a) {
  let o = (0, L.useRef)(void 0),
    s = r(() => t.GetScrollableWidthPX()),
    c = r(() => t.GetScrollWindowWidth()),
    [l, u] = (0, L.useState)(0),
    d = (0, L.useRef)(void 0),
    f = (0, L.useRef)(void 0),
    { clearPlaybackAnimation: p, startPlaybackAnimation: m } = ac(a, t, u);
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
    (e, t, n, r, i) => {
      if (i(t))
        (u(F(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(d.current),
          (d.current = null),
          (f.current = null));
      else {
        if (
          ((d.current &&= requestAnimationFrame((e) => h(e, t, n, r, i))),
          f.current)
        ) {
          let n = ((e - f.current) / Xs) * r;
          (t.ScrollBy(n), u((e) => F(e + n, 0, t.GetScrollableWidthPX())));
        }
        f.current = e;
      }
    },
    [u],
  );
  return (
    (0, L.useEffect)(() => {
      let r = c * (1 - rd),
        a = c * rd;
      if (
        (d.current &&
          (cancelAnimationFrame(d.current),
          (d.current = null),
          (f.current = null)),
        !n)
      )
        m();
      else if ((p(), e.valPX < a && !t.BReachedMinScroll())) {
        if (e.valPX <= o.current) {
          let n = e.valPX - a,
            r = F(Math.abs(n / a), 0, 1) * n;
          d.current = requestAnimationFrame((n) =>
            h(n, t, e.valPX, r, t.BReachedMinScroll),
          );
        }
        o.current = e.valPX;
      } else if (e.valPX > r && !t.BReachedMaxScroll()) {
        if (e.valPX >= o.current) {
          let n = e.valPX - r,
            i = F(Math.abs(n / (c - r)), 0, 1) * n;
          d.current = requestAnimationFrame((n) =>
            h(n, t, e.valPX, i, t.BReachedMaxScroll),
          );
        }
        o.current = e.valPX;
      } else u(F(i.valPX, 0, s));
    }, [n, p, i.valPX, c, s, h, e.valPX, m, t]),
    l
  );
}
function ac(e, t, n) {
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
function oc(e) {
  let { className: t, playheadPosition: n, children: r } = e;
  return (0, q.jsx)(`div`, {
    className: j(qs, t),
    style: { transform: `translateX( calc(${n}px - 50% ))` },
    children: r,
  });
}
var sc = t({
    AddMarker: () => zc,
    Button: () => Rc,
    CreateClipButton: () => Vc,
    DeleteMarker: () => Uc,
    Description: () => xc,
    DescriptionBlock: () => yc,
    Duration: () => Zc,
    EditMarker: () => Hc,
    GoToClip: () => Bc,
    GoToClipFromMarker: () => Wc,
    Header: () => _c,
    Hide: () => dc,
    Highlight: () => kc,
    Icon: () => vc,
    ImageAndInfoBoxContainer: () => fc,
    ImageContainer: () => pc,
    ImageHighlightBlock: () => Yc,
    ImageHighlightPosition: () => Jc,
    InfoBoxContainer: () => gc,
    NoRecordedContent: () => hc,
    Overlay: () => Cc,
    Playhead: () => jc,
    RangeIcon: () => Qc,
    RangeLeft: () => Mc,
    RangeRight: () => Nc,
    StateDescription: () => Ic,
    ThumbnailContainerOffset: () => lc,
    ThumbnailContents: () => uc,
    ThumbnailHitBoxPadding: () => Sc,
    ThumbnailImage: () => mc,
    ThumbnailTooltip: () => Oc,
    TimeDisplayContainer: () => Ac,
    Timestamp: () => Pc,
    Title: () => bc,
    TooltipButtons: () => Lc,
    TooltipChildren: () => Tc,
    TooltipContainer: () => qc,
    TooltipContents: () => wc,
    TooltipHitBox: () => Kc,
    TooltipImage: () => Ec,
    TooltipImageCtn: () => Dc,
    TooltipInteractionRegion: () => Fc,
    TooltipOffset: () => cc,
    TooltipRangeContainer: () => Xc,
    ViewScreenshot: () => Gc,
    default: () => $c,
    thumbnailWidth: () => `320`,
  }),
  cc = `M-05lIt-Rm8-`,
  lc = `demzX-Fs4-4-`,
  uc = `NcHGwBV4SNQ-`,
  dc = `ap-Q4oooopI-`,
  fc = `_9zxrJRU-CaI-`,
  pc = `eQvnQVTk-sI-`,
  mc = `tN6d6cDs7Do-`,
  hc = `B0nXthAtEI8-`,
  gc = `KxFaAst23zY-`,
  _c = `aiwhhTjZ6Pk-`,
  vc = `_9HkA8d7x9kg-`,
  yc = `wCw8FA-GNZw-`,
  bc = `_3-l3Dnlgyfo-`,
  xc = `_00G4k2IDvBQ-`,
  Sc = `UYDbMZ6G3WU-`,
  Cc = `RAeRf-oNWq8-`,
  wc = `Vc6eo-Q-cRw-`,
  Tc = `u2eqeMJHtic-`,
  Ec = `_-6Xh-VqwYeg-`,
  Dc = `TkM9nyNO0Xs-`,
  Oc = `mdK6jpS4jRU-`,
  kc = `VrSRUKXDErM-`,
  Ac = `PYo3kx2RfSs-`,
  jc = `_1UvMCudnsIs-`,
  Mc = `vx9pJ002RM0-`,
  Nc = `BgeUu9u9wW8-`,
  Pc = `qP9-v-34gEw-`,
  Fc = `VTDf1a6CPQI-`,
  Ic = `iHtJ7ZAsX5A-`,
  Lc = `k9NX76-rrPo-`,
  Rc = `zB0JoG7vSrU-`,
  zc = `Qmw3lo2yg3Y-`,
  Bc = `lzzqqN6opQo-`,
  Vc = `NcXSUT9Wrrk-`,
  Hc = `h-9-LkDvmE4-`,
  Uc = `ZtdjDDcQX4Q-`,
  Wc = `ncTrqKkwHVg-`,
  Gc = `WaQJkS8Zl-8-`,
  Kc = `a2muS1tYn9s-`,
  qc = `_8PD3oDSkC5Y-`,
  Jc = `BmRL3GyDFyw-`,
  Yc = `_1k7fgO2abtE-`,
  Xc = `E9tORfFSTjw-`,
  Zc = `HjxSSeO2NmQ-`,
  Qc = `zjZlS00iLU4-`,
  $c = {
    thumbnailWidth: `320`,
    TooltipOffset: cc,
    ThumbnailContainerOffset: lc,
    ThumbnailContents: uc,
    Hide: dc,
    ImageAndInfoBoxContainer: fc,
    ImageContainer: pc,
    ThumbnailImage: mc,
    NoRecordedContent: hc,
    InfoBoxContainer: gc,
    Header: _c,
    Icon: vc,
    DescriptionBlock: yc,
    Title: bc,
    Description: xc,
    ThumbnailHitBoxPadding: Sc,
    Overlay: Cc,
    TooltipContents: wc,
    TooltipChildren: Tc,
    TooltipImage: Ec,
    TooltipImageCtn: Dc,
    ThumbnailTooltip: Oc,
    Highlight: kc,
    TimeDisplayContainer: Ac,
    Playhead: jc,
    RangeLeft: Mc,
    RangeRight: Nc,
    Timestamp: Pc,
    TooltipInteractionRegion: Fc,
    StateDescription: Ic,
    TooltipButtons: Lc,
    Button: Rc,
    AddMarker: zc,
    GoToClip: Bc,
    CreateClipButton: Vc,
    EditMarker: Hc,
    DeleteMarker: Uc,
    GoToClipFromMarker: Wc,
    ViewScreenshot: Gc,
    TooltipHitBox: Kc,
    TooltipContainer: qc,
    ImageHighlightPosition: Jc,
    ImageHighlightBlock: Yc,
    TooltipRangeContainer: Xc,
    Duration: Zc,
    RangeIcon: Qc,
  };
function el(e, t) {
  return (
    e.strRecordingID === t.strRecordingID &&
    e.strClipID === t.strClipID &&
    e.nRecordingOffsetMS === t.nRecordingOffsetMS &&
    e.nRecordingStartOffsetMS === t.nRecordingStartOffsetMS &&
    e.cPxMajorAxis === t.cPxMajorAxis &&
    e.bPreciseTiming == t.bPreciseTiming
  );
}
var tl = class e {
  k_QueueWaitUntilRequestMS = 10;
  k_nMaxBatchSize = 50;
  m_nMaxCacheSize = 18e5 / Ji;
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
    o(this);
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
    return `${e}_${t}_${n}_${o ? s : s - (s % Ji)}_${a}_${o}`;
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
            z(`CThumbnailCache:: cant measure ${u}, error: ${e}`);
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
      this.m_rgPendingRequest.some((e) => el(e, l)) ||
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
        n = await Rn(
          e[0].strRecordingID,
          e[0].strClipID,
          void 0,
          t,
          e[0].cPxMajorAxis,
          e[0].bPreciseTiming,
        );
      nt(
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
      B(`Failed to load multiple request thumbnails`, t);
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
      let e = await Rn(t, n, void 0, [r * 1e3], a, o);
      if (e?.length > 0) {
        let t = e ? e[0].image_data() : null;
        return (this.SetThumbnailData(s, { data: t, bIsLoading: !1 }), !0);
      }
      gn(`ThumbnailImage: got empty jpeg ${e.length} list back ${t} @ ${r}`);
    } catch (e) {
      (B(`ThumbnailImage: Fail to load thumbnail ${t} @ ${r} with ${e}`),
        this.SetThumbnailData(s, { data: null, bIsLoading: !1 }));
    }
    return !1;
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
};
x([s], tl.prototype, `m_mapThumbnailImages`, void 0);
function nl(e) {
  let t = (0, L.useRef)(null),
    n = Nt(),
    r = h(`useThumbnailAsURL`);
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
function rl() {
  return tl.Get().GetPerfMeasures();
}
function il(e, t, n, i, a, o, s) {
  return nl(r(() => tl.Get().GetOrQueueThumbnail(e, n, t, i, a, o, s))?.data);
}
var al = 320,
  ol = L.forwardRef(function (e, t) {
    let { globalMS: n, children: i, imgClassName: a, className: o, ...s } = e,
      c = Y(),
      l = c.GetGameID(),
      u = c.GetClipID(),
      d = r(() => c.GetRecordingMode()),
      f = r(() => c.ConvertGlobaOffsetToRecordingAndRelativeOffset(n));
    ro();
    let p = f?.nRecordingOffsetMS,
      m = il(l, u, f?.strRecordingID, p, f?.nStartOffsetMS, al, !1),
      [h, g] = (0, L.useState)();
    return (
      (0, L.useEffect)(() => {
        m && g(m);
      }, [m]),
      (0, q.jsxs)(`div`, {
        ref: t,
        className: j(lc, sc[d], o),
        ...s,
        children: [
          (0, q.jsxs)(`div`, {
            className: j(uc, f?.strRecordingID && !h && `ap-Q4oooopI-`, sc[d]),
            children: [
              (0, q.jsx)(`div`, {
                className: fc,
                children: (0, q.jsxs)(`div`, {
                  className: pc,
                  children: [
                    f?.strRecordingID
                      ? (0, q.jsx)(`img`, { className: mc, src: h })
                      : (0, q.jsx)(`div`, {
                          className: hc,
                          children: O(`#GameRecording_PlayerNoContent`),
                        }),
                    (0, q.jsx)(sl, {}),
                  ],
                }),
              }),
              (0, q.jsx)(`div`, { className: j(Tc), children: i }),
            ],
          }),
          (0, q.jsx)(`div`, { className: j(Sc) }),
        ],
      })
    );
  });
function sl() {
  let e = $(),
    t = r(() => e.GetGameID()),
    n = r(() => e.GetThumbnailComponent()),
    i = r(() => e.GetThumbnailEntry());
  if (!i || n !== Z.Highlight) return null;
  if (Ri(i.entry))
    return (0, q.jsx)(cl, {
      thumbnailEntry: i,
      achievementEntry: i.entry,
      strGameID: t,
    });
  let a = ``,
    o = ``;
  return (
    zi(i.entry)
      ? (o = O(i.entry.description) || `#GameRecording_UnknownError`)
      : W(i.entry)
        ? ((a = i.entry.title ? i.entry.title : O(`#Marker_UserMarker_Title`)),
          (o = i.entry.description || ``))
        : Li(i.entry) &&
          ((a = i.entry.title || ``), (o = i.entry.description || ``)),
    !a && !o
      ? null
      : (0, q.jsx)(ll, { title: a, description: o, thumbnailEntry: i })
  );
}
function cl(e) {
  let { strGameID: t, thumbnailEntry: n, achievementEntry: r } = e,
    i = Un(new Gi(t).GetAppID(), r.achievement_name);
  return i
    ? (0, q.jsx)(ll, {
        title: i.name ?? ``,
        description: i.description ?? ``,
        thumbnailEntry: n,
      })
    : null;
}
function ll(e) {
  let { title: t, description: n, thumbnailEntry: r } = e;
  return (0, q.jsxs)(`div`, {
    className: gc,
    children: [
      (0, q.jsxs)(`div`, {
        className: _c,
        children: [
          (0, q.jsx)(`div`, {
            className: vc,
            children: (0, q.jsx)(Sa, {
              entry: r.entry,
              strMarkerIcon: r.strMarkerIcon,
            }),
          }),
          t && (0, q.jsx)(`div`, { className: `_3-l3Dnlgyfo-`, children: t }),
        ],
      }),
      (0, q.jsx)(`div`, {
        className: yc,
        children:
          n && (0, q.jsx)(`div`, { className: `_00G4k2IDvBQ-`, children: n }),
      }),
    ],
  });
}
var ul = L.forwardRef(function (e, t) {
  let { globalPX: n, onMouseEnter: i, onMouseLeave: a } = e,
    o = $(),
    s = r(() => o.ConvertPXOffsetToGlobalMS(n, !1)),
    c = r(() => o.GetThumbnailComponent()),
    l = Y(),
    u = r(() => l.GetRecordingMode());
  return (0, q.jsxs)(ol, {
    className: j(Oc, sc[u], sc[c]),
    globalMS: s,
    ref: t,
    onMouseEnter: i,
    onMouseLeave: a,
    children: [
      (0, q.jsx)(pl, { globalMS: s }),
      (0, q.jsx)(dl, { globalMS: s }),
      (0, q.jsxs)(`div`, {
        className: Fc,
        children: [
          c === Z.Highlight
            ? (0, q.jsx)(ml, {})
            : (0, q.jsx)(hl, { globalPX: n }),
          (0, q.jsx)(gl, { globalMS: s }),
        ],
      }),
    ],
  });
});
function dl(e) {
  let { globalMS: t } = e,
    n = $(),
    i = r(() => n.GetStateDescriptionAtGlobalMS(t));
  return i?.title
    ? (0, q.jsx)(`div`, { className: Ic, children: i.title })
    : null;
}
function fl(e, t) {
  return e.priority - t.priority;
}
function pl(e) {
  let { globalMS: t } = e,
    { setSelectedMarker: n } = no(),
    i = $(),
    a = Y(),
    o = r(() => i.FindRangeEventsAtGlobalMS(t)),
    s = o.length > 3 ? o.sort(fl).slice(0, 3) : o,
    c = (e, r) => {
      let i = parseInt(r.duration),
        { nTimelineOffsetMS: o, strTimelineID: s } =
          a.ConvertGlobalOffsetToTimelineRelativeOffset(t),
        c = t - o.valMS + parseInt(r.time),
        [l, u] = a.GetLoader().CreateGlobalRangeForTimeline(s, c, 0, i);
      (a.SetPlaytimeFromGlobalMS(G(l)),
        n?.(r.id, s, l, u),
        I.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromRangeEvent`),
        e.stopPropagation());
    };
  return (0, q.jsx)(q.Fragment, {
    children: s.map((e, t) =>
      (0, q.jsxs)(
        `div`,
        {
          className: Xc,
          onClick: (t) => c(t, e),
          children: [
            e.icon &&
              (0, q.jsx)(Oa, {
                gameID: a.GetGameID(),
                icon: e.icon,
                className: `zjZlS00iLU4-`,
              }),
            (0, q.jsx)(`div`, { className: bc, children: e.title }),
            (0, q.jsx)(`div`, {
              className: Zc,
              children: zt(parseInt(e.duration) / 1e3, !1),
            }),
          ],
        },
        `${e.time}_${t}`,
      ),
    ),
  });
}
function ml() {
  let e = Y(),
    t = r(() => e.GetRecordingMode()),
    n = $(),
    i = r(() => n.GetThumbnailEntry());
  if (!i) return null;
  let a = n.GetTimelineOffsetMS(i.strTimelineID),
    o = Hi(parseInt(i.entry.time) - a),
    s = e.MakeRelativeToTimelineEndIfActive(i.strTimelineID, o.valMS),
    c = ``;
  if (Ii(i.entry)) {
    let e = s + parseInt(i.entry.duration);
    if (s < 0) {
      let t = zt(Math.abs(s / 1e3), !1, !1),
        n = zt(Math.abs(e / 1e3), !1, !1);
      c = O(`#Duration_WrittenNegation`, t + ` - ` + n);
    } else {
      let t = zt(s / 1e3, !1, !1),
        n = zt(e / 1e3, !1, !1);
      c = t + ` - ` + n;
    }
  } else c = zt(s / 1e3, !1, !0);
  return (0, q.jsx)(`div`, { className: j(Ac, kc, sc[t]), children: c });
}
function hl(e) {
  let { globalPX: t } = e,
    n = $(),
    i = r(() => n.ConvertPXToTimelineRelativeMS(t, `end-if-active`));
  return i
    ? (0, q.jsx)(`div`, { className: Ac, children: zt(i / 1e3, !1, !0) })
    : null;
}
function gl(e) {
  let { globalMS: t } = e,
    n = $(),
    i = r(() => n.GetGameID()),
    a = r(() => n.GetThumbnailComponent()),
    o = r(() => n.GetThumbnailEntry()),
    s = [
      (0, q.jsx)(Sl, { globalMS: t }, `add_marker`),
      (0, q.jsx)(Cl, { globalMS: t }, `view_clip`),
    ];
  return (
    a == Z.Highlight &&
      o &&
      (zi(o.entry) || Ri(o.entry) || Li(o.entry)
        ? (s = [
            (0, q.jsx)(_l, { markerInfo: o }, `create_marker_clip`),
            (0, q.jsx)(vl, { markerInfo: o }, `view_clip`),
          ])
        : Bi(o.entry)
          ? (s = [
              (0, q.jsx)(_l, { markerInfo: o }, `create_marker_clip`),
              (0, q.jsx)(xl, { entry: o.entry, gameID: i }, `view_screen`),
              (0, q.jsx)(vl, { markerInfo: o }, `view_clip`),
            ])
          : W(o.entry) &&
            (s = [
              (0, q.jsx)(bl, { markerInfo: o }, `edit_user`),
              (0, q.jsx)(_l, { markerInfo: o }, `create_marker_clip`),
              (0, q.jsx)(yl, { markerInfo: o }, `delete_user`),
              (0, q.jsx)(vl, { markerInfo: o }, `view_clip`),
            ])),
    (0, q.jsx)(`div`, { className: Lc, children: s })
  );
}
function _l(e) {
  let { setSelectedMarker: t } = no(),
    { markerInfo: n } = e,
    i = Y(),
    a = r(() => i.ShouldModeShowClipControls()),
    o = r(() =>
      i.ConvertGlobaOffsetToRecordingAndRelativeOffset(n.nGlobalMS.valMS),
    ),
    s = Gn(),
    c = oo();
  return !o?.strRecordingID || !a
    ? null
    : (0, q.jsx)(kt, {
        toolTipContent: O(
          s ? `#RecordingState_Clip_LowDiskSpace` : `#TimelineDialog_ClipVideo`,
        ),
        direction: `top`,
        bTopmost: !0,
        children: (0, q.jsx)(`div`, {
          className: j(Rc, Vc),
          onClick: (e) => {
            let r = bs,
              a = xs;
            Ii(n.entry) && ((r = 0), (a = parseInt(n.entry.duration)));
            let [o, s] = i
              .GetLoader()
              .CreateGlobalRangeForTimeline(
                n.strTimelineID,
                n.nGlobalMS.valMS,
                r,
                a,
              );
            (i.SetPlaytimeFromGlobalMS(G(o)),
              t?.(n.entry.id, n.strTimelineID, o, s),
              c(),
              I.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromHighlight`),
              e.stopPropagation());
          },
          children: (0, q.jsx)(qe, {}),
        }),
      });
}
function vl(e) {
  let { markerInfo: t } = e,
    n = $(),
    i = r(() => n.ConvertGlobalMSToClipOrNone(t.nGlobalMS.valMS)),
    { onNavigateToClip: a } = zo();
  return i
    ? (0, q.jsx)(kt, {
        toolTipContent: O(`#TimelineDialog_ViewClip`),
        direction: `top`,
        bTopmost: !0,
        children: (0, q.jsx)(`div`, {
          className: j(Rc, Wc),
          onClick: () => {
            i &&
              (I.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/${t.entry.type}`,
              ),
              a(i.clipID));
          },
          children: (0, q.jsx)(ct, {}),
        }),
      })
    : null;
}
function yl(e) {
  let { markerInfo: t } = e,
    n = Y(),
    r = $();
  return (0, q.jsx)(kt, {
    toolTipContent: O(`#Marker_Action_Delete`),
    direction: `top`,
    bTopmost: !0,
    children: (0, q.jsx)(`div`, {
      className: j(Rc, Uc),
      onClick: (e) => {
        W(t.entry) &&
          (I.ReportTrackedAction(
            `/GameRecording/Marker/Delete/${t.entry.type}`,
          ),
          n.RemoveUserMarker(t.strTimelineID, t.entry.id),
          r.SetThumbnailComponent(null));
      },
      children: (0, q.jsx)(st, {}),
    }),
  });
}
function bl(e) {
  let { markerInfo: t } = e,
    n = Y(),
    r = io();
  return (0, q.jsx)(kt, {
    toolTipContent: O(`#Marker_Action_Edit`),
    direction: `top`,
    bTopmost: !0,
    children: (0, q.jsx)(`div`, {
      className: j(Rc, Hc),
      onClick: (e) => {
        if (!W(t.entry)) return;
        I.ReportTrackedAction(`/GameRecording/Marker/Edit/${t.entry.type}`);
        let i = (0, q.jsx)(qo, {
          entry: t.entry,
          playbackCoordinator: n,
          fnClearSelection: r,
          strTimelineID: t.strTimelineID,
        });
        (ft(i, Ft(e)), e.stopPropagation(), e.preventDefault());
      },
      children: (0, q.jsx)(ue, {}),
    }),
  });
}
function xl(e) {
  let { entry: t, gameID: n } = e,
    r = t.handle,
    { onNavigateToScreenshot: i } = zo();
  return (0, q.jsx)(kt, {
    toolTipContent: O(`#TimelineDialog_ViewScreenshot`),
    direction: `top`,
    bTopmost: !0,
    children: (0, q.jsx)(`div`, {
      className: j(Rc, Gc),
      onClick: () => {
        r &&
          (I.ReportTrackedAction(`/GameRecording/Tooltip/Screenshot`), i(n, r));
      },
      children: (0, q.jsx)(Re, {}),
    }),
  });
}
function Sl(e) {
  let { globalMS: t } = e,
    n = Y();
  return r(() => n.ConvertGlobaOffsetToRecordingAndRelativeOffset(t))
    ?.strRecordingID
    ? (0, q.jsx)(kt, {
        toolTipContent: O(`#TimelineDialog_AddMarker`),
        direction: `top`,
        children: (0, q.jsx)(`div`, {
          className: j(Rc, zc),
          onClick: () => {
            (n.AddUserMarkerAtGlobalMS(
              G(t),
              `/GameRecording/AddMarker/Thumbnail`,
              null,
            ),
              n.SetPlaytimeFromGlobalMS(G(t)));
          },
          children: (0, q.jsx)(re, {}),
        }),
      })
    : null;
}
function Cl(e) {
  let { globalMS: t } = e,
    n = $(),
    i = r(() => n.ConvertGlobalMSToClipOrNone(t)),
    { onNavigateToClip: a } = zo();
  return i
    ? (0, q.jsx)(kt, {
        toolTipContent: O(`#TimelineDialog_ViewClip`),
        direction: `top`,
        children: (0, q.jsx)(`div`, {
          className: j(Rc, Bc),
          onClick: () => {
            i &&
              (I.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/timeline`,
              ),
              a(i.clipID));
          },
          children: (0, q.jsx)(ct, {}),
        }),
      })
    : null;
}
var wl = L.memo(function (e) {
    let t = os(),
      n = us(),
      r = $(),
      i = Y(),
      a = ps(),
      o = (0, L.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            a = F(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(a, !1);
          o && i.SetPlaytimeFromGlobalMS(G(o), void 0, void 0, !0);
        },
        [n, i, r],
      ),
      s = (0, L.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            i = F(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(i, !1);
          o &&
            (a(e, G(o), !1, {
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
      (0, q.jsx)(Tl, { globalMouseXPX: t.globalMouseXPX.valPX || 0 })
    );
  }),
  Tl = L.memo(function (e) {
    let { globalMouseXPX: t } = e,
      n = ls(),
      i = $(),
      a = us(),
      o = r(() => {
        if (i.GetThumbnailComponent()) return i.GetThumbnailPosition();
      }),
      [s, c] = (0, L.useState)(),
      [l, u] = (0, L.useState)();
    return (
      (0, L.useEffect)(() => {
        isNaN(o) ? !l && n && c(t) : c(o);
      }, [l, n, a, t, o]),
      (0, q.jsx)(`div`, {
        className: Hs,
        style: { transform: `translateX( calc(${s}px - 50%))` },
        children: (0, q.jsx)(El, {
          globalPX: s,
          setInteractingWithThumbnail: u,
          bInteractingWithThumbnail: l,
        }),
      })
    );
  });
function El(e) {
  let {
      globalPX: t,
      setInteractingWithThumbnail: n,
      bInteractingWithThumbnail: i,
    } = e,
    a = $(),
    o = Y(),
    s = r(() => o.GetRecordingMode() === `Overlay`),
    c = r(() => a.ConvertPXOffsetToGlobalMS(t, !1)),
    l = r(() => a.GetTimelineParentCtnRef()),
    u = (0, L.useRef)(void 0),
    d = (0, L.useRef)(void 0),
    f = (0, L.useRef)(void 0),
    p = r(() => a.GetThumbnailComponent()),
    m = us(),
    h = Bt({
      toolTipContent: (0, q.jsx)(ul, {
        globalPX: t,
        ref: u,
        onMouseEnter: () => n(!0),
        onMouseLeave: (e) => n(!1),
      }),
      direction: s ? `bottom` : `top`,
      nDelayShowMS: 0,
      nBodyDistance: 0,
      nAllowOffscreenPx: 0,
    }),
    { setHovered: g, setTarget: _ } = h.stateHandlers,
    v = (0, L.useCallback)(() => {
      (g(!1),
        n(!1),
        f.current && f.current(),
        (f.current = null),
        a.GetAutoScrollPaused() && a.SetAutoScrollPauseTimeout(),
        a.SetThumbnailComponent(null));
    }, [n, g, a]),
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
    ee = (0, L.useCallback)(
      (e) => {
        let t = a.GetThumbnailComponent();
        (t && t !== Z.Highlight) || y(e.clientX, e.clientY);
      },
      [y, a],
    ),
    te = (0, L.useCallback)(
      (e) => {
        y(e.clientX, e.clientY);
      },
      [y],
    );
  (fs(
    `mouseenter`,
    (0, L.useCallback)(() => {
      (g(!0), _(d.current));
      let e = It(d.current);
      e &&
        !f.current &&
        (e.addEventListener(`mousemove`, ee),
        e.addEventListener(`mouseup`, te),
        (f.current = () => {
          (e.removeEventListener(`mousemove`, ee),
            e.removeEventListener(`mouseup`, te));
        }));
    }, [ee, te, g, _]),
  ),
    (0, L.useEffect)(() => {
      let e = (e) => {
        let t = a.GetThumbnailComponent();
        (t && t === Z.Playhead) ||
          t === Z.RangeLeft ||
          t === Z.RangeRight ||
          (u.current && !Tt(u.current, e.relatedTarget) && v());
      };
      return (
        l && l.addEventListener(`mouseleave`, e),
        () => l && l.removeEventListener(`mouseleave`, e)
      );
    }, [v, l, a]),
    (0, L.useEffect)(() => v, [v]));
  let ne = (m || i) && c && !p;
  return (0, q.jsxs)(`div`, {
    ref: d,
    className: Us,
    children: [
      (0, q.jsx)(rc, { className: j(Ws, ne && `_52Luj95k6TU-`) }),
      !!c && h.tooltip,
    ],
  });
}
var Dl = `hmHZe5aDrq8-`,
  Ol = `VE-8JY5P2Qo-`,
  kl = `bvHF-aIx6oc-`,
  Al = `EFP0lnhKJeo-`,
  jl = `MkCCKg4MUdU-`,
  Ml = `_1xOfco9qmxw-`,
  Nl = `fXvcT3pVP7Q-`,
  Pl = `_2ytscAh4R6M-`,
  Fl = 500,
  Il = (0, L.memo)(function () {
    let [e, t] = (0, L.useState)(`none`),
      n = $a(),
      r = Za(),
      i = Qa();
    return !n || !r || !i
      ? null
      : (0, q.jsx)(`div`, {
          className: Dl,
          children: (0, q.jsx)(Ll, {
            activeControlState: e,
            setActiveControlState: t,
          }),
        });
  }),
  Ll = (0, L.memo)(function (e) {
    let { activeControlState: t, setActiveControlState: n } = e,
      [i, a] = (0, L.useState)(),
      [o, s] = (0, L.useState)(),
      c = Za(),
      l = Qa(),
      u = $(),
      d = r(() => u.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
      f = r(() => u.ConvertGlobalMSToGlobalPXOffset(l.valMS)),
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
          t === `none` && e.stopPropagation();
        },
        [t],
      ),
      g = (0, L.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      );
    return (0, q.jsx)(`div`, {
      className: j(Ol, t !== `none` && `r9kdAFASyBY-`),
      onMouseOver: h,
      onMouseOut: g,
      onFocus: h,
      onBlur: g,
      children: (0, q.jsxs)(`div`, {
        className: Ml,
        children: [
          (0, q.jsx)(Bl, {
            isActive: t === `left`,
            setControlState: n,
            setRangeControlPX: p,
            pxOffset: i,
          }),
          (0, q.jsx)(Kl, {
            startOffsetPX: (t === `left` && i) || d,
            endOffsetPX: (t === `right` && o) || f,
            className: Al,
          }),
          (0, q.jsx)(Hl, {
            isActive: t === `right`,
            setControlState: n,
            setRangeControlPX: m,
            pxOffset: o,
          }),
        ],
      }),
    });
  });
function Rl(e, t, n) {
  let r = t.GetVisualWindowStartPX() - t.GetTimelineMarginWidth(),
    i = r + t.GetVisualWidth(),
    a = Math.max(0, r + 3),
    o = Math.min(t.GetScrollableWidthPX(), i - 3);
  n(F(e, a, o));
}
function zl(e, t, n, i, a, o) {
  let s = (0, L.useRef)(void 0),
    c = (0, L.useRef)(!1),
    l = (0, L.useRef)(void 0),
    u = (0, L.useRef)(void 0),
    d = r(() => t.GetScrollableWidthPX()),
    f = r(() => t.GetScrollWindowWidth());
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
    (e, t, n, r, i) => {
      if (i(t))
        (o(F(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(l.current),
          (l.current = null),
          (u.current = null));
      else {
        if (
          ((l.current &&= requestAnimationFrame((e) => p(e, t, n, r, i))),
          u.current)
        ) {
          let n = ((e - u.current) / Fl) * r;
          (t.ScrollBy(n), o((e) => F(e + n, 0, t.GetScrollableWidthPX())));
        }
        u.current = e;
      }
    },
    [o],
  );
  (0, L.useEffect)(() => {
    l.current &&
      (cancelAnimationFrame(l.current), (l.current = null), (u.current = null));
    let r = f * (1 - rd),
      m = f * rd,
      h = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      g = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (i.valPX > h) (o(h), a(`right`), t.SetThumbnailComponent(Z.RangeRight));
    else {
      if (e.valPX < m && !t.BReachedMinScroll()) {
        if (e.valPX > s.current) c.current = !0;
        else if (e.valPX < s.current || !c.current) {
          let n = Math.min(m, g),
            r = e.valPX - n,
            i = F(Math.abs(r / n), 0, 1) * r;
          ((l.current = requestAnimationFrame((n) =>
            p(n, t, e.valPX, i, t.BReachedMinScroll),
          )),
            (c.current = !1));
        }
        Rl(i.valPX, t, o);
      } else if (e.valPX > r && g > r && !t.BReachedMaxScroll()) {
        if (e.valPX < s.current) c.current = !0;
        else if (e.valPX > s.current || !c.current) {
          let i = (e) => {
              let t = e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
              return e.BReachedMaxScroll() || t <= r;
            },
            a = e.valPX - r,
            o = F(Math.abs(a / (f - r)), 0, 1) * a;
          ((l.current = requestAnimationFrame((n) => p(n, t, e.valPX, o, i))),
            (c.current = !1));
        }
        Rl(i.valPX, t, o);
      } else o(F(i.valPX, 0, d));
      s.current = e.valPX;
    }
  }, [i.valPX, n.valMS, e.valPX, a, t, o, d, p, f]);
}
var Bl = (0, L.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = Za();
  return t
    ? (0, q.jsx)(Vl, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, q.jsx)(Gl, {
        offsetMS: a.valMS,
        direction: `left`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function Vl(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = eo(),
    a = Qa(),
    o = $(),
    s = ss();
  return (
    zl(cs(), o, a, s, t, n),
    (0, L.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, G(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, q.jsx)(ql, { offsetPX: r, direction: `left` })
  );
}
var Hl = (0, L.memo)(function (e) {
  let {
      isActive: t,
      setControlState: n,
      setRangeControlPX: r,
      pxOffset: i,
    } = e,
    a = Qa();
  return t
    ? (0, q.jsx)(Ul, { setControlState: n, setRangeControlPX: r, pxOffset: i })
    : (0, q.jsx)(Gl, {
        offsetMS: a.valMS,
        direction: `right`,
        setControlState: n,
        setRangeControlPX: r,
      });
});
function Ul(e) {
  let { setControlState: t, setRangeControlPX: n, pxOffset: r } = e,
    i = to(),
    a = Za(),
    o = $(),
    s = ss();
  return (
    Wl(cs(), o, a, s, t, n),
    (0, L.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, G(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, q.jsx)(ql, { offsetPX: r, direction: `right` })
  );
}
function Wl(e, t, n, i, a, o) {
  let s = (0, L.useRef)(void 0),
    c = (0, L.useRef)(!1),
    l = (0, L.useRef)(void 0),
    u = (0, L.useRef)(void 0),
    d = r(() => t.GetScrollableWidthPX()),
    f = r(() => t.GetScrollWindowWidth());
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
    (e, t, n, r, i) => {
      if (i(t))
        (o(F(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(l.current),
          (l.current = null),
          (u.current = null));
      else {
        if (
          ((l.current &&= requestAnimationFrame((e) => p(e, t, n, r, i))),
          u.current)
        ) {
          let n = ((e - u.current) / Fl) * r;
          (t.ScrollBy(n), o((e) => F(e + n, 0, t.GetScrollableWidthPX())));
        }
        u.current = e;
      }
    },
    [o],
  );
  (0, L.useEffect)(() => {
    l.current &&
      (cancelAnimationFrame(l.current), (l.current = null), (u.current = null));
    let r = f * (1 - rd),
      m = f * rd,
      h = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      g = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (i.valPX < h) (o(h), a(`left`), t.SetThumbnailComponent(Z.RangeLeft));
    else {
      if (e.valPX > r && !t.BReachedMaxScroll()) {
        if (e.valPX < s.current) c.current = !0;
        else if (e.valPX > s.current || !c.current) {
          let n = Math.max(r, g),
            i = e.valPX - n,
            a = F(Math.abs(i / (f - n)), 0, 1) * i;
          ((l.current = requestAnimationFrame((n) =>
            p(n, t, e.valPX, a, t.BReachedMaxScroll),
          )),
            (c.current = !1));
        }
        Rl(i.valPX, t, o);
      } else if (
        e.valPX < m &&
        g < m &&
        e.valPX <= s.current &&
        !t.BReachedMinScroll()
      ) {
        if (e.valPX > s.current) c.current = !0;
        else if (e.valPX < s.current || !c.current) {
          let r = e.valPX - m,
            i = F(Math.abs(r / m), 0, 1) * r,
            a = (e) =>
              e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS) > m ||
              e.BReachedMinScroll();
          ((l.current = requestAnimationFrame((n) => p(n, t, e.valPX, i, a))),
            (c.current = !1));
        }
        Rl(i.valPX, t, o);
      } else o(F(i.valPX, 0, d));
      s.current = e.valPX;
    }
  }, [n.valMS, e.valPX, a, t, o, d, f, i.valPX, p]);
}
function Gl(e) {
  let {
      offsetMS: t,
      direction: n,
      setControlState: i,
      setRangeControlPX: a,
    } = e,
    o = $(),
    s = r(() => o.ConvertGlobalMSToGlobalPXOffset(t));
  (0, L.useEffect)(
    () => (
      a(void 0),
      () => {
        a(s);
      }
    ),
    [s, a],
  );
  let c = (0, L.useCallback)(
      (e) => {
        let t = Ft(e),
          r,
          a,
          s = () => {
            (i(n),
              o.SetThumbnailComponent(
                n === `left` ? Z.RangeLeft : Z.RangeRight,
              ),
              r());
          };
        (t.addEventListener(`mousemove`, s),
          (r = () => t.removeEventListener(`mousemove`, s)));
        let c = () => {
          (i(`none`), o.SetThumbnailComponent(null), r(), a());
        };
        (t.addEventListener(`mouseup`, c),
          (a = () => t.removeEventListener(`mouseup`, c)));
      },
      [n, i, o],
    ),
    l = (e) => {
      o.SetThumbnailComponent(n === `left` ? Z.RangeLeft : Z.RangeRight);
    },
    u = (e) => {
      o.SetThumbnailComponent(null);
    };
  return (0, q.jsx)(`div`, {
    className: kl,
    onMouseDown: c,
    onMouseOver: l,
    onFocus: l,
    onMouseOut: u,
    onBlur: u,
    children: (0, q.jsx)(ql, { offsetPX: s, direction: n }),
  });
}
var Kl = (0, L.memo)(function (e) {
    let { startOffsetPX: t, endOffsetPX: n, className: r } = e;
    if (isNaN(t) || isNaN(n)) return null;
    let i = { width: n - t || 0, transform: `translateX(${t}px)` };
    return (0, q.jsx)(`div`, { className: j(Pl, r), style: i });
  }),
  ql = (0, L.memo)(function (e) {
    let { direction: t, offsetPX: n } = e,
      i = { transform: `translateX( calc( ${n}px - 50%) )` },
      a = $(),
      o = r(() => a.GetThumbnailComponent() === Z.Playhead);
    return (0, q.jsx)(`div`, {
      style: i,
      className: j(Nl),
      children: (0, q.jsx)(`div`, {
        className: j(jl, t === `left` && void 0, o && `o23F9bJf68E-`),
        children: (0, q.jsx)(Jl, { innerFill: `#171d25`, direction: t }),
      }),
    });
  });
function Jl(e) {
  return (0, q.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 3 36`,
    fill: `none`,
    style: { transform: `rotate(${e.direction === `right` ? 180 : 0}deg)` },
    children: [
      (0, q.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 0)`,
      }),
      (0, q.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 10)`,
      }),
      (0, q.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 20)`,
      }),
      (0, q.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 30)`,
      }),
    ],
  });
}
var Yl = `peJfRpya9Fs-`,
  Xl = 100,
  Zl = L.memo(function (e) {
    let t = $(),
      n = r(() => t.GetVisibleWindowRelativeTimelines()),
      i = Y().GetRecordingMode(),
      a = [],
      o = ``;
    for (let e of n) {
      let n = t.GetTimeRecorded(e.timelineID),
        r = Ot(n);
      r != o && (a.push({ timeline: e, strLabel: r }), (o = r));
    }
    for (let e = a.length - 2; e >= 0; e--) {
      let t = a[e];
      a[e + 1].timeline.nVisibleStartPX - t.timeline.nVisibleStartPX >= Xl ||
        a.splice(e, 1);
    }
    return (0, q.jsx)(q.Fragment, {
      children: a.map((e) =>
        (0, q.jsx)(
          Ql,
          {
            startPX: e.timeline.nVisibleStartPX,
            label: e.strLabel,
            recordingMode: i,
          },
          e.timeline.timelineID,
        ),
      ),
    });
  });
function Ql(e) {
  let { label: t, startPX: n, recordingMode: r } = e,
    i = r == sa.Overlay;
  return (0, q.jsx)(`div`, {
    className: j(Yl, i && `r-oc0eIT1Lw-`),
    style: { transform: `translateX(${n}px)` },
    children: t,
  });
}
var $l = `rpb9NP30tgc-`,
  eu = `JCH5UEpUzxo-`,
  tu = (0, L.memo)(function (e) {
    let t = $(),
      n = r(() => t.GetVisibleRecordings());
    return (0, q.jsx)(q.Fragment, {
      children: n.map((e) =>
        (0, q.jsx)(
          nu,
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
function nu(e) {
  let { isActive: t, endPX: n, startPX: r, recordingType: i } = e,
    a = { width: n - r || 0, transform: `translateX(${r}px)` },
    o = ro(),
    s = i === 4,
    c = i === 2;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(`div`, {
        className: j(
          $l,
          s && `xg0PXeGNr6o-`,
          c && `DlYcvPsKhnQ-`,
          o && `pbiBKOrHy28-`,
        ),
        style: a,
      }),
      t && (0, q.jsx)(ru, { endPX: n }),
    ],
  });
}
function ru(e) {
  let { endPX: t } = e,
    n = Y(),
    i = $(),
    a = r(() => n.GetRecordingMode() === `Overlay`),
    o = oa(n.GetGameID()),
    s = r(() => n.GetIsLiveEdge() && !n.GetHidePlayer()),
    c = r(() => {
      let e = n.GetLiveEdgeBufferWindowStartMS();
      return i.ConvertGlobalMSToGlobalPXOffset(e.valMS);
    });
  if (!a || o !== aa.BackgroundRecording) return null;
  let l = { width: t - c || 0, transform: `translateX(${c}px)` };
  return (0, q.jsx)(`div`, { className: j(eu, s && `ObPDU8jrJGI-`), style: l });
}
var iu = `etyWD-mczjA-`,
  au = (0, L.memo)(function (e) {
    let t = $(),
      n = r(() => t.GetVisibleClips());
    return (0, q.jsx)(q.Fragment, {
      children: n.map((e) =>
        (0, q.jsx)(
          ou,
          { startPX: e.pxClipStart, endPX: e.pxClipEnd },
          e.clipID,
        ),
      ),
    });
  }),
  ou = (0, L.memo)(function (e) {
    let { endPX: t, startPX: n } = e,
      r = { width: t - n || 0, transform: `translateX(${n}px)` };
    return (0, q.jsx)(`div`, { className: iu, style: r });
  }),
  su = `r7Pr1Bv8r30-`,
  cu = `V3xSKJyklXQ-`,
  lu = `nT24tktVM-s-`,
  uu = `a9purv61CPI-`,
  du = `O-J-KNmIhN8-`,
  fu = `lMpHX8arl8s-`,
  pu = `hMUPhnvIP90-`,
  mu = `M5wPU20T76E-`,
  hu = `H3EDFnaZgvI-`,
  gu = `iAKyxjjcF38-`,
  _u = `pEzP-JpCCcQ-`,
  vu = `hBDI48p9XRY-`,
  yu = `PZt-x5Tu8rg-`,
  bu = `_57e4oWLUba0-`,
  xu = `diJRy3nTnTM-`;
function Su() {
  let e = oa(Y().GetGameID());
  return e === aa.NotRecording || e === aa.NotRunning
    ? null
    : (0, q.jsx)(Cu, {});
}
function Cu(e) {
  let t = Y(),
    n = r(() => t.GetIsLiveEdge() && !t.GetHidePlayer()),
    i = L.useCallback(() => {
      (t.SetHidePlayer(!1), t.GetGameRecordingVideo().Play());
      let e = t.GetLiveEdgeMS();
      (t.SetPlaytimeFromGlobalMS(e), t.FocusGlobalMS(e));
    }, [t]);
  return (0, q.jsx)(kt, {
    className: yu,
    toolTipContent: O(n ? `#Playback_AtLatest` : `#Playback_JumpToLatest`),
    direction: `bottom`,
    children: (0, q.jsx)(ht, {
      onClick: i,
      className: j(bu, n && `FuL7350j26I-`),
      children: (0, q.jsx)(ve, { className: j(xu) }),
    }),
  });
}
var wu = (0, L.forwardRef)(function (e, t) {
    let n = $();
    return r(() => !n.BEmpty())
      ? (0, q.jsx)(Eu, { ...e, timelineView: n, ref: t })
      : (0, q.jsx)(Tu, { ref: t });
  }),
  Tu = (0, L.forwardRef)(function (e, t) {
    return (0, q.jsx)(`div`, { ref: t, className: j(cu, e.className) });
  }),
  Eu = (0, L.forwardRef)(function (e, t) {
    let n = Y(),
      { children: r, className: i, timelineView: a, disableZoom: o } = e,
      [s, c] = (0, L.useState)(),
      l = L.useCallback(
        (e) => {
          let t = e.target.getBoundingClientRect();
          (a.SetScrollWindowOffset(t.x), a.SetScrollWindowWidth(t.width), c(t));
        },
        [a],
      ),
      u = Mt(l),
      d = L.useCallback(
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
      Iu(n, a),
      (0, q.jsxs)(`div`, {
        ref: t,
        onWheel: d,
        onMouseOver: () => a.SetAutoScrollPaused(!0),
        onFocus: () => {},
        onMouseLeave: () => a.SetAutoScrollPauseTimeout(),
        children: [
          (0, q.jsxs)(`div`, {
            className: lu,
            children: [
              (0, q.jsxs)(`div`, {
                ref: u,
                className: j(su, i),
                children: [r, (0, q.jsx)(Du, { timelineView: a })],
              }),
              n.GetRecordingMode() === sa.Overlay && (0, q.jsx)(Su, {}),
            ],
          }),
          (0, q.jsx)(`div`, {
            className: pu,
            children: !n.GetGamepadMode() && (0, q.jsx)(Ou, {}),
          }),
        ],
      })
    );
  });
function Du(e) {
  let { timelineView: t } = e,
    n = r(() => t.GetVisualWindowStartPX()),
    i = r(() => t.BReachedMaxScroll());
  return (0, q.jsxs)(`div`, {
    className: uu,
    children: [
      (0, q.jsx)(`div`, { className: j(du, n === 0 && `geyoRt0NNcM-`) }),
      (0, q.jsx)(`div`, { className: j(fu, i && `geyoRt0NNcM-`) }),
    ],
  });
}
function Ou() {
  let [e, t] = (0, L.useState)({ scrollBarWidth: 0, scrollBarXOffset: 0 }),
    n = L.useCallback((e) => {
      let n = e.target.getBoundingClientRect();
      t({ scrollBarWidth: n.width, scrollBarXOffset: n.x });
    }, []),
    i = $(),
    a = r(() => i.GetScrollableWidthPX() + 2 * i.GetTimelineMarginWidth()),
    o = r(() => i.GetVisualWidth()),
    s = (0, L.useMemo)(
      () => (o * e.scrollBarWidth) / a || 0,
      [o, e.scrollBarWidth, a],
    ),
    c = Mt(n);
  return (0, q.jsxs)(`div`, {
    className: j(
      mu,
      Math.round(s) === Math.round(e.scrollBarWidth) && `cyfpsKb1Pow-`,
    ),
    ref: c,
    children: [
      (0, q.jsx)(ku, { timelineView: i, scrollSize: e }),
      (0, q.jsx)(Pu, {
        scrollSize: e,
        timelineView: i,
        timelineWidth: a,
        thumbWidth: s,
      }),
    ],
  });
}
function ku(e) {
  let { timelineView: t, scrollSize: n } = e,
    i = Y(),
    a = Au(t, n),
    o = r(() => t.GetTimelineMarginWidth()),
    s = r(() => t.GetScrollableWidthPX()),
    c = (0, L.useCallback)(
      (e) => {
        let t = e + o;
        return F((t * n.scrollBarWidth) / s, 0, n.scrollBarWidth);
      },
      [n.scrollBarWidth, o, s],
    );
  return (0, q.jsxs)(`div`, {
    className: hu,
    ...a,
    children: [
      (0, q.jsx)(ju, {
        timelineView: t,
        playbackCoordinator: i,
        fnConvertGlobalPXToTrackPX: c,
        scrollBarWidth: n.scrollBarWidth,
      }),
      (0, q.jsx)(Nu, { timelineView: t, fnConvertGlobalPXToTrackPX: c }),
    ],
  });
}
function Au(e, t) {
  let n = (0, L.useRef)(void 0),
    i = (0, L.useRef)(void 0),
    a = r(() => e.GetScrollableWidthPX()),
    o = (0, L.useCallback)(
      (e) => Ui((a * e) / t.scrollBarWidth),
      [t.scrollBarWidth, a],
    ),
    s = (0, L.useCallback)(() => {
      if (!n.current) return;
      let t = e.GetScrollWindowWidth(),
        r = e.GetVisualWindowStartPX() + t / 2;
      if (n.current.valPX > r - t * 0.1 && n.current.valPX < r + t * 0.1)
        return;
      let a = e.GetScrollableWidthPX() * 0.005,
        o = n.current.valPX - r;
      if (Math.abs(o) > a) {
        let t = o > 0 ? a : -a;
        (e.ScrollToOffsetCentered(r + t),
          (i.current = requestAnimationFrame(() => s())));
      } else e.ScrollToOffsetCentered(n.current.valPX);
    }, [e]),
    c = (0, L.useCallback)(
      (e) => {
        ((n.current = o(e.clientX - t.scrollBarXOffset)),
          (i.current = requestAnimationFrame(() => s())));
      },
      [o, s, t.scrollBarXOffset],
    ),
    l = (0, L.useCallback)(() => {
      i.current && cancelAnimationFrame(i.current);
    }, []),
    u = (0, L.useCallback)(
      (e) => {
        n.current = o(e.clientX - t.scrollBarXOffset);
      },
      [o, t.scrollBarXOffset],
    );
  return (
    (0, L.useEffect)(
      () => () => {
        i.current && cancelAnimationFrame(i.current);
      },
      [],
    ),
    { onMouseDown: c, onMouseMove: u, onMouseUp: l, onMouseLeave: l }
  );
}
function ju(e) {
  let {
      timelineView: t,
      playbackCoordinator: n,
      fnConvertGlobalPXToTrackPX: i,
      scrollBarWidth: a,
    } = e,
    o = r(() => n.GetHidePlayer()),
    s = r(() => {
      let e = n.GetGlobalMSPlaytime();
      if (e && t.BInitialized()) {
        let n = Math.floor(t.ConvertGlobalMSToGlobalPXOffset(e.valMS));
        return i(n);
      }
      return null;
    });
  return s
    ? (0, q.jsx)(`div`, {
        className: gu,
        onClick: () => {
          let e = n.GetGlobalMSPlaytime();
          (o && (e = n.GetLiveEdgeMS()), t.ScrollToCenteredGlobalMS(e.valMS));
        },
        style: { transform: `translateX(${o ? a : s}px)` },
        children: (0, q.jsx)(Mu, {}),
      })
    : null;
}
function Mu() {
  return (0, q.jsx)(`svg`, {
    width: `52`,
    height: `31`,
    viewBox: `0 0 52 31`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, q.jsx)(`path`, {
      d: `M26 31L51.1147 0.25H0.885263L26 31Z`,
      fill: `#D9D9D9`,
    }),
  });
}
function Nu(e) {
  let { timelineView: t, fnConvertGlobalPXToTrackPX: n } = e,
    i = ro(),
    a = Xa(),
    o = r(() => {
      if (i && t.BInitialized()) {
        let e = Math.floor(
            t.ConvertGlobalMSToGlobalPXOffset(a.nGlobalStartMS.valMS),
          ),
          r = Math.floor(
            t.ConvertGlobalMSToGlobalPXOffset(a.nGlobalEndMS.valMS),
          );
        if (!isNaN(e) && !isNaN(r))
          return { rangeStartPX: n(e), rangeEndPX: n(r) };
      }
      return null;
    });
  return o
    ? (0, q.jsx)(`div`, {
        className: _u,
        onClick: () => {
          t.ScrollToCenteredGlobalMS(a.nGlobalStartMS.valMS);
        },
        style: {
          width: o.rangeEndPX - o.rangeStartPX,
          transform: `translateX(${o.rangeStartPX}px)`,
        },
      })
    : null;
}
function Pu(e) {
  let { scrollSize: t, timelineWidth: n, thumbWidth: r, timelineView: i } = e,
    { thumbPositionPX: a, onMouseDown: o, bHiglightThumb: s } = Fu(t, n, r, i);
  return (0, q.jsx)(`div`, {
    className: j(vu, s && `jBCmf-dRAeA-`),
    style: { width: r, transform: `translateX(${a}px)` },
    onMouseDown: o,
  });
}
function Fu(e, t, n, i) {
  let [a, o] = (0, L.useState)(!1),
    [s, c] = (0, L.useState)(0),
    l = r(() => {
      let r = i.BInitialized(),
        a = i.GetVisualWindowStartPX();
      return r ? F((a * e.scrollBarWidth) / t, 0, e.scrollBarWidth - n) : 0;
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
          r = i.GetTimelineParentCtnRef() ?? Ft(t),
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
      () => (a ? F(s, 0, e.scrollBarWidth - n) : l),
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
function Iu(e, t) {
  let n = r(
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
d();
var Lu = class {
  m_tours = {};
  m_strActiveTour = ``;
  m_storage = void 0;
  m_bReady = !1;
  constructor() {
    o(this);
  }
  async Init(e) {
    if (this.m_storage) return;
    this.m_storage = e;
    let t = await zu(e);
    (Object.keys(t || {}).forEach((e) => {
      let n = !!t[e];
      this.m_tours[e] = { ...(this.m_tours[e] || { stops: {} }), bSeen: n };
    }),
      (this.m_bReady = !0));
  }
  UpdateStop(e, t, n, r) {
    (this.m_tours[e] || (this.m_tours[e] = { bSeen: !1, stops: {} }),
      (this.m_tours[e].stops[t] = { options: n, elem: r }));
  }
  BHasSeenTour(e) {
    return !this.m_bReady || (this.m_tours[e] && this.m_tours[e].bSeen);
  }
  GetTrackedStops(e) {
    return this.m_tours[e]?.stops || {};
  }
  ActivateTour(e) {
    (this.m_strActiveTour &&
      this.m_strActiveTour !== e &&
      this.DismissTour(this.m_strActiveTour),
      (this.m_strActiveTour = e));
  }
  DismissTour(e) {
    this.m_tours[e] &&
      (this.MarkTourSeen(e),
      (this.m_tours[e].bSeen = !0),
      this.m_strActiveTour === e && (this.m_strActiveTour = ``));
  }
  MarkTourSeen(e) {
    return Bu(this.m_storage, e, Date.now());
  }
  MarkTourUnseen(e) {
    return Bu(this.m_storage, e, void 0);
  }
};
(x([s], Lu.prototype, `m_tours`, void 0),
  x([s], Lu.prototype, `m_strActiveTour`, void 0),
  x([s], Lu.prototype, `m_bReady`, void 0),
  x([n.bound], Lu.prototype, `UpdateStop`, null),
  x([n], Lu.prototype, `ActivateTour`, null),
  x([n], Lu.prototype, `DismissTour`, null));
var Ru = `tour_history`;
async function zu(e) {
  let t = await e.GetObject(Ru);
  return !t || typeof t != `object` ? {} : t;
}
async function Bu(e, t, n) {
  let r = await zu(e);
  return e.StoreObject(Ru, { ...r, [t]: n });
}
var Vu = new Lu();
function Hu() {
  let e = rt();
  return (
    (0, L.useEffect)(() => {
      Vu.Init(e);
    }, [e]),
    Vu
  );
}
function Uu(e) {
  let t = Hu(),
    { bShowTour: n, stopElems: i } = r(() => ({
      bShowTour: !t.BHasSeenTour(e),
      stopElems: t.GetTrackedStops(e),
    }));
  return {
    bShowTour: n,
    stopElems: i,
    onInteraction: (0, L.useCallback)(() => t.MarkTourSeen(e), [t, e]),
    onDismiss: (0, L.useCallback)(() => t.DismissTour(e), [t, e]),
    onActivate: (0, L.useCallback)(() => t.ActivateTour(e), [t, e]),
    updateStop: t.UpdateStop,
  };
}
function Wu(e) {
  let { name: t, tour: n, options: r, children: i } = e,
    { updateStop: a } = Uu(n),
    o = (0, L.useCallback)((e) => a(n, t, r, e), [a, n, t]),
    s = L.Children.only(i),
    c = it(o, s.props.ref);
  return (0, L.cloneElement)(L.Children.only(i), { ref: c });
}
var Gu = `ntKPAM1NZ9k-`,
  Ku = `JXv-qDT9fmY-`,
  qu = `Rg3Qyz2aIKM-`;
function Ju(e) {
  let t = $(),
    n = r(() => t.GetVisibleTimelines());
  return (0, q.jsx)(q.Fragment, {
    children: n.flatMap((e) =>
      e.phaseOffsets.map((t, n) =>
        (0, L.createElement)(Yu, {
          ...t,
          timeline: e,
          key: `${e.timelineID}_${n}`,
        }),
      ),
    ),
  });
}
function Yu(e) {
  let { timelineOffsetMS: t, nDurationMS: n, phase: r, timeline: i } = e;
  return (0, q.jsxs)(Xu, {
    ...e,
    children: [(0, q.jsx)(Qu, {}), (0, q.jsx)(Zu, {}), (0, q.jsx)(Qu, {})],
  });
}
function Xu(e) {
  let {
      children: t,
      timeline: n,
      timelineOffsetMS: i,
      nDurationMS: a,
      phase: o,
    } = e,
    s = $(),
    c = Y(),
    l = ss()?.valPX || -1,
    u = ls(),
    [d] = ds(),
    {
      pxStart: f,
      pxWidth: p,
      bHighlight: m,
    } = r(() => {
      let e = s.GetPhaseToHighlight();
      return {
        pxStart: s.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS + i),
        pxWidth: s.ConvertDurationMSToDeltaPX(a),
        bHighlight:
          e && e[0] === n.timelineID && e[1] === o.background_timeline_offset,
      };
    }),
    h = (u || d) && l >= f && l <= f + p,
    [g, _] = ma(),
    v = () => {
      let e = c.GetLoader(),
        t = e.GetTimelineData(n.timelineID),
        r = e.GetTimelineMetadata(n.timelineID),
        a = t.m_rgPhases.find((e) => parseInt(e.time) === i);
      a && _({ entry: a, timeline: r });
    },
    y = () => _(void 0);
  return (0, q.jsx)(`div`, {
    className: j(Gu, h && `_7iKrpiRqfb4-`, m && `-VGOLVELQNE-`),
    style: { transform: `translateX( ${f}px )`, width: `${p}px` },
    onMouseOver: v,
    onMouseLeave: y,
    onFocus: v,
    onBlur: y,
    children: t,
  });
}
function Zu(e) {
  return (0, q.jsx)(`div`, { className: Ku });
}
function Qu(e) {
  return (0, q.jsx)(`div`, { className: qu });
}
var $u = `YTX0fQkY6BM-`;
function ed(e) {
  let t = $(),
    n = r(() => t.GetVisibleTimelines());
  return (0, q.jsx)(q.Fragment, {
    children: n.map((e) => (0, q.jsx)(td, { timeline: e }, e.timelineID)),
  });
}
function td(e) {
  let { timeline: t } = e,
    n = $(),
    i = r(() => n.GetVisibleTimelineHighlights(t.timelineID) || []),
    a = r(() => n.GetTimelineOffsetMS(t.timelineID)),
    o = t.globalOffsetMS - a;
  return (0, q.jsx)(q.Fragment, {
    children: i
      .filter((e) => Ns(e) === `range_highlight`)
      .map((e) =>
        (0, q.jsx)(
          nd,
          { entry: e, timeline: t, timelineView: n, timelineOffset: o },
          e.id,
        ),
      ),
  });
}
function nd(e) {
  let { timelineView: t, entry: n, timelineOffset: i } = e,
    a = i + parseInt(n.time),
    { pxStart: o, pxWidth: s } = r(() => ({
      pxStart: t.ConvertGlobalMSToGlobalPXOffset(a),
      pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(n.duration)),
    })),
    c = { width: `${s}px`, transform: `translateX( ${o}px )` };
  return (0, q.jsx)(`svg`, {
    className: $u,
    style: c,
    children: (0, q.jsx)(`line`, {
      x1: `0`,
      x2: s,
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
var rd = 0.08;
function id(e) {
  let {
      loader: t,
      className: n,
      clipSummaries: i,
      refTimelineParentCtn: a,
      disableZoom: o,
    } = e,
    s = r(() => t.BInitialized()),
    c = Y();
  if (!s) return (0, q.jsx)(`div`, { className: Aa });
  let l = j(ja, c.GetGamepadMode() && `xP7qeNW99Qo-`, n);
  return (0, q.jsx)(_o, {
    loader: t,
    clipSummaries: i,
    playbackCoordinator: c,
    refTimelineParentCtn: a,
    children: (0, q.jsxs)(`div`, {
      className: l,
      dir: `ltr`,
      children: [
        (0, q.jsx)(cd, {}),
        (0, q.jsx)(ld, {}),
        (0, q.jsx)(Wu, {
          tour: `recording_timeline`,
          name: `timeline`,
          options: { position: `left`, offset: 20 },
          children: (0, q.jsx)(wu, {
            className: Ma,
            disableZoom: o,
            children: (0, q.jsx)(ad, {}),
          }),
        }),
      ],
    }),
  });
}
var ad = (0, L.memo)(function (e) {
  let t = $();
  return r(() => t.BInitialized()) ? (0, q.jsx)(od, {}) : null;
});
function od() {
  let e = $(),
    t = r(() => e.GetScrollableWidthPX()),
    n = r(() => e.GetVisualWindowStartPX()),
    i = r(() => e.GetTimelineMarginWidth());
  return (0, q.jsxs)(`div`, {
    className: Na,
    style: {
      minWidth: t || 0,
      marginRight: i,
      marginLeft: i,
      transform: `translateX(${-n}px)`,
    },
    children: [
      (0, q.jsx)(sd, {
        id: `recordings`,
        className: Ia,
        children: (0, q.jsx)(tu, {}),
      }),
      (0, q.jsx)(sd, {
        id: `clips`,
        className: La,
        children: (0, q.jsx)(au, {}),
      }),
      (0, q.jsx)(sd, {
        id: `game_modes`,
        className: Ra,
        children: (0, q.jsx)(Bs, {}),
      }),
      (0, q.jsx)(sd, {
        id: `date_decorators`,
        className: za,
        children: (0, q.jsx)(Zl, {}),
      }),
      (0, q.jsx)(sd, {
        id: `ticks`,
        className: Ba,
        children: (0, q.jsx)(Do, {}),
      }),
      (0, q.jsxs)(as, {
        children: [
          (0, q.jsx)(sd, {
            id: `highlights`,
            className: Va,
            children: (0, q.jsx)(Os, {}),
          }),
          (0, q.jsx)(sd, {
            id: `range_selection`,
            className: Ua,
            children: (0, q.jsx)(Il, {}),
          }),
          (0, q.jsx)(sd, {
            id: `seek_scrub`,
            className: Wa,
            children: (0, q.jsx)(wl, {}),
          }),
          (0, q.jsx)(sd, {
            id: `play_head`,
            className: Ga,
            children: (0, q.jsx)(Zs, {}),
          }),
          (0, q.jsx)(sd, {
            id: `phases`,
            className: Ja,
            children: (0, q.jsx)(Ju, {}),
          }),
          (0, q.jsx)(sd, {
            id: `range_highlights`,
            className: Ha,
            children: (0, q.jsx)(ed, {}),
          }),
        ],
      }),
    ],
  });
}
function sd(e) {
  let { children: t, id: n, className: r } = e;
  return (0, q.jsx)(`div`, {
    id: n,
    className: j(r, Pa),
    children: (0, q.jsx)(`div`, { className: Fa, children: t }),
  });
}
function cd(e) {
  let t = Y().GetRenderGlyph();
  return t ? t(xt.TRIGGER_LEFT, !1, !1, Ka) : null;
}
function ld(e) {
  let t = Y().GetRenderGlyph();
  return t ? t(xt.TRIGGER_RIGHT, !1, !1, qa) : null;
}
var ud = `KQ-hi7DkQBE-`,
  dd = `_52aYqduz6h4-`,
  fd = `coOj1PrCK88-`,
  pd = `LIhvCT2g-YI-`,
  md = `bExNzJrLl-M-`,
  hd = `dyICc0VY3A4-`,
  gd = `_6wAbDaUvkxg-`,
  _d = `2000ms`,
  vd = `LaqVy9--mt8-`,
  yd = `lLAtYwwfC6c-`,
  bd = `_4lkIuOprDls-`,
  xd = `fZFkKWffS5M-`,
  Sd = `gtWJUpDp-gM-`,
  Cd = parseInt(_d);
function wd() {
  let e = Y(),
    t = r(() => e.GetDisplayHighlightEntry()),
    [n, i] = (0, L.useState)(null),
    a = L.useRef(0);
  return (
    (0, L.useEffect)(() => {
      if (!t?.entry || Pi(t.entry) || Fi(t.entry)) i(null);
      else
        return (
          i(t.entry),
          (a.current = window.setTimeout(
            () => {
              e.SetDisplayHighlightEntry(null);
            },
            t.duration ? t.duration : Cd,
          )),
          () => window.clearTimeout(a.current)
        );
    }, [t, e]),
    n ? (0, q.jsx)(Td, { entry: n }) : null
  );
}
function Td(e) {
  let { entry: t } = e,
    n = Y(),
    i = r(() => n.GetGameID()),
    a = n.GetGameRecordingVideo(),
    o = r(() => n.GetRecordingID()),
    s = r(() => a.IsInitialized()),
    c = a.GetVideoHeight(),
    l = a.GetVideoWidth(),
    u = o && s && c > 0 && l > 0 ? { height: c, width: l } : {},
    d;
  return (
    Ri(t)
      ? (d = (0, q.jsx)(Ed, { entry: t, strGameID: i }))
      : W(t)
        ? (d = (0, q.jsx)(
            Dd,
            {
              entry: t,
              strMarkerIcon: t.icon,
              title: t.title ? t.title : O(`#Marker_UserMarker_Title`),
              description: t.description || ``,
            },
            t.id,
          ))
        : Bi(t)
          ? (d = (0, q.jsx)(
              Dd,
              {
                entry: t,
                strMarkerIcon: t.icon,
                title: O(`#MediaManager_ItemType_Screenshot`),
                description: ``,
              },
              t.id,
            ))
          : Li(t) &&
            (d = (0, q.jsx)(
              Dd,
              {
                entry: t,
                strMarkerIcon: t.icon,
                title: t.title || ``,
                description: t.description || ``,
              },
              t.id,
            )),
    (0, q.jsx)(`div`, { className: vd, style: u, children: d })
  );
}
function Ed(e) {
  let { entry: t, strGameID: n } = e,
    r = Un(new Gi(n).GetAppID(), t.achievement_name);
  return r
    ? (0, q.jsx)(
        Dd,
        {
          entry: t,
          strMarkerIcon: `steam_achievement`,
          title: r.name ?? ``,
          description: r.description ?? ``,
        },
        t.id,
      )
    : null;
}
function Dd(e) {
  let { entry: t, strMarkerIcon: n, title: r, description: i } = e;
  return (0, q.jsx)(`div`, {
    className: yd,
    children: (0, q.jsxs)(`div`, {
      className: bd,
      children: [
        (0, q.jsx)(`div`, {
          className: xd,
          children: (0, q.jsx)(Sa, { entry: t, strMarkerIcon: n }),
        }),
        (0, q.jsxs)(`div`, {
          className: Sd,
          children: [
            r && (0, q.jsx)(`div`, { className: `_2T-PgLx6Dr4-`, children: r }),
            i && (0, q.jsx)(`div`, { className: `bBDKWYyxu48-`, children: i }),
          ],
        }),
      ],
    }),
  });
}
var Od = `2000ms`,
  kd = `OvcOkaeZMu8-`,
  Ad = `_-5QSadyUEvk-`,
  jd = parseInt(Od);
function Md() {
  let e = Y(),
    t = e.GetGameRecordingVideo(),
    n = r(() => e.GetRecordingID()),
    i = r(() => t.IsInitialized()),
    a = t.GetVideoHeight(),
    o = t.GetVideoWidth(),
    s = n && i && a > 0 && o > 0 ? { height: a, width: o } : {},
    c = L.useRef(0),
    l = r(() => e.GetRelativeTimeForDisplay()),
    u = r(() => e.GetGameRecordingVideo().IsInitialized()),
    d = (0, L.useMemo)(() => {
      if (isNaN(l) || !u) return null;
      let t = e.ConvertGlobalOffsetToTimelineRelativeOffset(l);
      if (t && e.GetIsActiveTimeline(t.strTimelineID)) {
        let n = e.MakeRelativeToTimelineEndIfActive(
          t.strTimelineID,
          t.nTimelineOffsetMS.valMS,
        );
        return At(n / 1e3, !1, !0);
      }
      return null;
    }, [u, l, e]);
  return (
    (0, L.useEffect)(() => {
      if (!isNaN(l))
        return (
          (c.current = window.setTimeout(() => {
            e.ClearRelativeTimeDisplay();
          }, jd)),
          () => window.clearTimeout(c.current)
        );
    }, [l, e]),
    isNaN(l)
      ? null
      : (0, q.jsx)(`div`, {
          className: kd,
          style: s,
          children: (0, q.jsx)(`div`, { className: Ad, children: d }, d),
        })
  );
}
function Nd(e) {
  let {
      disableSound: t,
      positionAbsolute: n = !0,
      refVideoResize: i,
      style: a,
      fullscreen: o,
    } = e,
    s = Y(),
    c = ea(s.StopPlayback, s.SetVideoElement),
    l = s.GetGameRecordingVideo(),
    u = r(() => s.GetRecordingID()),
    d = r(() => l.GetPlaybackError()),
    f = r(() => s.GetRecordingMode() === `Overlay`),
    p = Pd(),
    m = ro(),
    h = d || !u,
    g = L.useRef(void 0),
    _ = it(c, i),
    v = hs();
  function y() {
    u && s.TogglePlayPause();
  }
  function ee() {
    u && o && o.fnToggleFullscreen();
  }
  let te = L.useCallback(
      (e) => {
        h ||
          v(e, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 });
      },
      [h, v],
    ),
    ne = !Pt.IN_STEAMUI && !!e.autoPlay,
    re = j(
      ud,
      h && `_3P0prb9XLTM-`,
      n && `YECphMawhtQ-`,
      m && `gzjiwBe8B5g-`,
      f && `NluAI6IOvZc-`,
      p && `_6MZt8I3nnWM-`,
    );
  return (0, q.jsxs)(`div`, {
    ref: g,
    className: re,
    onClick: y,
    onContextMenu: te,
    style: a,
    onDoubleClick: ee,
    children: [
      (0, q.jsx)(`video`, {
        ref: _,
        controls: !1,
        muted: t,
        autoPlay: ne,
        playsInline: ne,
      }),
      (0, q.jsx)(Rd, { player: l }),
      (0, q.jsx)(Fd, {}),
      (0, q.jsx)(Id, {}),
      (0, q.jsx)(Ld, {}),
      !u && (0, q.jsx)(zd, {}),
      (0, q.jsx)(wd, {}),
      (0, q.jsx)(Md, {}),
    ],
  });
}
function Pd() {
  let e = Y(),
    t = r(() => e.GetGlobalMSPlaytime()),
    { nGlobalEndMS: n, nGlobalStartMS: i } = Xa(),
    a = e.GetGameRecordingVideo();
  return r(() => a.GetPlaybackError()) || !t || !i || !n
    ? !1
    : t.valMS >= i.valMS && t.valMS <= n.valMS;
}
function Fd() {
  let e = Y(),
    t = pt.Get().IsDebugLogEnabled(`GR`),
    n = r(() => e.GetPlaybackStats());
  return !t || !n
    ? null
    : (0, q.jsxs)(`div`, {
        className: md,
        children: [
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `Average Seek MS: ` }),
              (0, q.jsx)(`span`, { children: n.nMean.toFixed(3) }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `StdDev Seek MS: ` }),
              (0, q.jsx)(`span`, { children: n.nStdDev.toFixed(3) }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `Slowest Seek MS: ` }),
              (0, q.jsx)(`span`, { children: n.nMax.toFixed(3) }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `Fastest Seek MS: ` }),
              (0, q.jsx)(`span`, { children: n.nMin.toFixed(3) }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `# Seeks: ` }),
              (0, q.jsx)(`span`, { children: n.nLength }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `Last Val: ` }),
              (0, q.jsx)(`span`, { children: n.nLastVal.toFixed(3) }),
            ],
          }),
        ],
      });
}
function Id() {
  let e = pt.Get().IsDebugLogEnabled(`GR`),
    t = Y();
  r(() => {
    t.GetGlobalMSPlaytime();
  });
  let n = rl();
  return !e || !n
    ? null
    : (0, q.jsxs)(`div`, {
        className: hd,
        children: [
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `Avg Thumbnail Load MS: ` }),
              (0, q.jsx)(`span`, { children: n.nMean.toFixed(3) }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `StdDev Thumbnail Load MS: ` }),
              (0, q.jsx)(`span`, { children: n.nStdDev.toFixed(3) }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `Slowest Thumbnail Load MS: ` }),
              (0, q.jsx)(`span`, { children: n.nMax.toFixed(3) }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `Fastest Thumbnail Load MS: ` }),
              (0, q.jsx)(`span`, { children: n.nMin.toFixed(3) }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `# Loaded: ` }),
              (0, q.jsx)(`span`, { children: n.nLength }),
            ],
          }),
          (0, q.jsxs)(`div`, {
            children: [
              (0, q.jsx)(`span`, { children: `Last Load: ` }),
              (0, q.jsx)(`span`, { children: n.nLastVal.toFixed(3) }),
            ],
          }),
        ],
      });
}
function Ld() {
  let e = Y(),
    t = e.GetGameRecordingVideo(),
    n = t.GetVideoHeight(),
    i = r(() => t.BVideoElementWaiting()),
    a = r(() => t.IsPaused()),
    o = r(() => t.GetPlaybackError()),
    s = r(() => t.IsInitialized());
  return !r(() => e.GetRecordingID()) || (s && !i) || o || a
    ? null
    : (0, q.jsx)(`div`, {
        className: gd,
        style: { height: n },
        children: (0, q.jsx)(at, {}),
      });
}
function Rd(e) {
  let { player: t } = e,
    n = r(() => t.GetPlaybackError()),
    i = ``;
  switch (n) {
    case $i.DownloadFailed:
    case $i.PlaybackError:
    case $i.MediaTypeError:
      i = `#GameRecording_PlayerError_Generic`;
  }
  return i
    ? (0, q.jsx)(`div`, {
        className: dd,
        children: (0, q.jsx)(`div`, { className: void 0, children: O(i) }),
      })
    : null;
}
function zd() {
  let e = Y(),
    t = r(() => e.GetGamepadMode()),
    { onNavigateToClip: n, onNavigateToFAQ: i } = zo(),
    a = r(() => e.GetGlobalMSPlaytime()),
    o = e.GetClosestPreviousRecordingForGlobalMS(a),
    s = e.GetClosestNextRecordingForGlobalMS(a),
    c = r(() => e.GetClipsAtGlobalMS(a)),
    l = (0, L.useCallback)(
      (t) => {
        if (o) {
          let n = Math.max(parseInt(o.duration_ms) - 500, 0);
          (e.SetPlaytimeFromRecordingOffset(o.recording_id, n, !0, !0),
            t.stopPropagation());
        }
      },
      [e, o],
    ),
    u = (0, L.useCallback)(
      (t) => {
        s &&
          (e.SetPlaytimeFromRecordingOffset(s.recording_id, 0),
          t.stopPropagation());
      },
      [e, s],
    ),
    d = (0, L.useCallback)(
      (e) => {
        c.length > 0 &&
          (I.ReportTrackedAction(
            `/GameRecording/Tooltip/ViewClip/PlayerNoContent`,
          ),
          n(c[0].strClipID),
          e.stopPropagation());
      },
      [c, n],
    );
  return (0, q.jsxs)(`div`, {
    className: dd,
    children: [
      (0, q.jsx)(`div`, {
        className: fd,
        children: O(`#GameRecording_PlayerNoContent`),
      }),
      (0, q.jsx)(`div`, {
        className: pd,
        children: tt(
          `#GameRecording_PlayerNoContentDescription`,
          (0, q.jsx)(mt, { href: `#`, onClick: i }),
        ),
      }),
      !t &&
        (0, q.jsxs)(`div`, {
          className: `pvmcYqcba9M-`,
          children: [
            (0, q.jsx)(kt, {
              direction: `bottom`,
              toolTipContent: O(
                o
                  ? `#GameRecording_PlayerNoContentJumpPrevious_tooltip`
                  : `#GameRecording_PlayerNoContentJumpNoContent_tooltip`,
              ),
              children: (0, q.jsx)(ht, {
                className: j(`tZ0QBApivQk-`, void 0, !o && `anur1mdo7JE-`),
                onClick: l,
                onActivate: l,
                children: O(`#GameRecording_PlayerNoContentJumpPrevious`),
              }),
            }),
            c.length > 0 &&
              (0, q.jsx)(kt, {
                direction: `bottom`,
                toolTipContent: O(
                  `#GameRecording_PlayerNoContentSeeClip_tooltip`,
                ),
                children: (0, q.jsx)(ht, {
                  onClick: d,
                  onActivate: d,
                  className: j(`tZ0QBApivQk-`, void 0),
                  children: O(`#GameRecording_PlayerNoContentSeeClip`),
                }),
              }),
            (0, q.jsx)(kt, {
              direction: `bottom`,
              toolTipContent: O(
                s
                  ? `#GameRecording_PlayerNoContentJumpNext_tooltip`
                  : `#GameRecording_PlayerNoContentJumpNoContent_tooltip`,
              ),
              children: (0, q.jsx)(ht, {
                className: j(`tZ0QBApivQk-`, void 0, !s && `anur1mdo7JE-`),
                onClick: u,
                onActivate: u,
                children: O(`#GameRecording_PlayerNoContentJumpNext`),
              }),
            }),
          ],
        }),
    ],
  });
}
var Bd = `HFtNW3hyYhM-`,
  Vd = `q1CF11Ex8dA-`,
  Hd = t({
    GameRecordingClipContent: () => Wd,
    default: () => Ud,
    useTimelineLoaderForCommunityClip: () => qd,
  });
function Ud(e) {
  let [t, n] = L.useState(!1);
  return (
    L.useEffect(() => {
      Mn(void 0, void 0).then(() => {
        n(!0);
      });
    }, []),
    (0, q.jsx)(q.Fragment, { children: t && (0, q.jsx)(Wd, { ...e }) })
  );
}
function Wd(e) {
  let { clipID: t } = e,
    n = Kd(t);
  return n.data
    ? (0, q.jsx)(Jd, { clip: n.data })
    : (0, q.jsx)(`div`, { style: { color: `white` }, children: `Loading...` });
}
function Gd(e, t) {
  return {
    timeline_id: t.server_timeline_id,
    game_id: e.clip_id,
    date_recorded: e.date_recorded,
    duration_ms: e.duration_ms.toFixed(0),
    recordings: [],
  };
}
function Kd(e) {
  let t = Ct();
  return a({
    queryKey: [`grclip`, e],
    queryFn: async () => {
      let n = Lt.Init(en);
      n.Body().set_clip_id(e);
      let r = await dn.GetSingleSharedClip(t, n);
      if (r.GetEResult() != 1) {
        (B(`GetSingleSharedClip failed`), r.DEBUG_LogToConsole());
        return;
      }
      let i = r.Body().toObject().clip,
        a = [];
      if (i.video_ids.length == 0) {
        (B(`No video ids in clip`, e), r.DEBUG_LogToConsole());
        return;
      }
      let o;
      for (let e of i.video_ids)
        ((o && o.timeline_id == e.server_timeline_id) ||
          ((o = Gd(i, e)), a.push(o)),
          o.recordings.push({
            recording_id: e.video_manager_video_id,
            start_offset_ms: e.start_offset_ms.toFixed(0),
            duration_ms: e.duration_ms.toFixed(0),
            recording_type: 4,
            cdn_manifest_url: e.manifest_url,
          }));
      return { clip_id: i.clip_id, game_id: i.gameid, timelines: a };
    },
  });
}
function qd(e) {
  let t = L.useMemo(() => In(e), [e]),
    n = L.useCallback(
      (t) => {
        for (let n of e.timelines)
          for (let e of n.recordings)
            if (e.recording_id == t) return e.cdn_manifest_url;
      },
      [e],
    );
  return (
    L.useEffect(() => () => t && t.release(), [t]),
    { loader: t.loader, fnGetManifest: n }
  );
}
function Jd(e) {
  let { clip: t } = e,
    { loader: n, fnGetManifest: r } = qd(t);
  return (0, q.jsx)(q.Fragment, {
    children: (0, q.jsx)(pa, {
      loader: n,
      fnGetManifest: r,
      mode: sa.CommunityClip,
      children: (0, q.jsxs)(`div`, {
        className: Bd,
        children: [
          (0, q.jsx)(`div`, {
            className: Vd,
            children: (0, q.jsx)(Nd, { positionAbsolute: !1, autoPlay: !0 }),
          }),
          (0, q.jsx)(id, { loader: n }),
        ],
      }),
    }),
  });
}
export {
  Wd as GameRecordingClipContent,
  _n as a,
  B as c,
  Ud as default,
  U as i,
  gn as l,
  Xi as n,
  V as o,
  Gi as r,
  z as s,
  Hd as t,
  qd as useTimelineLoaderForCommunityClip,
};
