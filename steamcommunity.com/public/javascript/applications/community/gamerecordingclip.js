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
  E as r,
  Ft as i,
  It as a,
  K as o,
  L as s,
  Pt as c,
  R as l,
  j as u,
  ot as d,
  w as f,
  z as p,
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
  $h as b,
  $i as tt,
  Bh as x,
  Cs as nt,
  Du as rt,
  Fd as it,
  Fh as S,
  Ga as at,
  Hh as C,
  Id as ot,
  Ih as w,
  Iu as st,
  Jh as ct,
  Jo as lt,
  Ki as ut,
  Lh as T,
  Mf as E,
  Nh as D,
  Of as dt,
  Oo as ft,
  Ph as O,
  Rh as k,
  Ru as pt,
  Tu as A,
  Xs as j,
  Xu as mt,
  Ym as ht,
  Ys as gt,
  Yu as _t,
  Zu as vt,
  bf as yt,
  bs as M,
  ed as bt,
  eg as xt,
  ep as St,
  hf as Ct,
  hh as N,
  if as wt,
  im as Tt,
  jo as Et,
  kf as Dt,
  lf as Ot,
  md as kt,
  nf as At,
  od as jt,
  oh as Mt,
  op as Nt,
  qf as Pt,
  qs as Ft,
  rf as P,
  rg as It,
  sd as Lt,
  sh as F,
  tm as Rt,
  xd as zt,
  ym as Bt,
  zh as I,
} from "./main.js";
import { t as L } from "./chunk~06da9a7953.js";
var R = e(i(), 1),
  z = e(a(), 1),
  Vt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.representation_name || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            representation_name: { n: 2, br: w.readString, bw: x.writeString },
            horizontal_resolution: {
              n: 3,
              br: w.readUint32,
              bw: x.writeUint32,
            },
            vertical_resolution: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            frame_rate: { n: 5, br: w.readDouble, bw: x.writeDouble },
            bandwidth: { n: 6, br: w.readUint32, bw: x.writeUint32 },
            audio_sample_rate: { n: 7, br: w.readUint32, bw: x.writeUint32 },
            frame_rate_string: { n: 8, br: w.readString, bw: x.writeString },
            codec: { n: 9, br: w.readString, bw: x.writeString },
            audio_channel_config: {
              n: 10,
              br: w.readUint32,
              bw: x.writeUint32,
            },
            segment_info: { n: 11, c: Wt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingRepresentation`;
    }
  },
  Ht = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.component_name || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            component_name: { n: 1, br: w.readString, bw: x.writeString },
            contents: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            segment_size: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            file_type: { n: 4, br: w.readString, bw: x.writeString },
            representations: { n: 5, c: Vt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingComponent`;
    }
  },
  Ut = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            app_id: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            num_segments: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            length_milliseconds: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            segment_duration_timescale: {
              n: 5,
              br: w.readUint32,
              bw: x.writeUint32,
            },
            segment_duration: { n: 6, br: w.readUint32, bw: x.writeUint32 },
            components: { n: 7, c: Ht, r: !0, q: !0 },
            start_time_ms: { n: 8, br: w.readUint32, bw: x.writeUint32 },
            start_offset_in_timeline_ms: {
              n: 9,
              br: w.readUint32,
              bw: x.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMsgVideoGameRecordingDef`;
    }
  },
  Wt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segment_number || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segment_number: { n: 1, br: w.readUint32, bw: x.writeUint32 },
            segment_size_bytes: {
              n: 2,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            component_name: { n: 3, br: w.readString, bw: x.writeString },
            representation_name: { n: 4, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentInfo`;
    }
  },
  Gt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segment_info || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segment_info: { n: 1, c: Wt },
            url_host: { n: 2, br: w.readString, bw: x.writeString },
            url_path: { n: 3, br: w.readString, bw: x.writeString },
            use_https: { n: 4, br: w.readBool, bw: x.writeBool },
            request_headers: { n: 5, c: Kt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentUploadInfo`;
    }
  },
  Kt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: x.writeString },
            value: { n: 2, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders`;
    }
  },
  qt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.video_manager_clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            video_manager_video_id: {
              n: 2,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            server_timeline_id: {
              n: 3,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            manifest_url: { n: 4, br: w.readString, bw: x.writeString },
            duration_ms: { n: 5, br: w.readUint32, bw: x.writeUint32 },
            start_offset_ms: { n: 6, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideoManagerClipID`;
    }
  },
  Jt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [9], null));
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            gameid: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
            date_recorded: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            total_file_size_bytes: {
              n: 7,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            video_ids: { n: 9, c: qt, r: !0, q: !0 },
            owner_steamid: {
              n: 10,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            upload_complete: { n: 11, br: w.readBool, bw: x.writeBool },
            duration_ms: { n: 12, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingClip`;
    }
  },
  Yt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip: { n: 2, c: Jt },
            video_def: { n: 3, c: Ut, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CreateShareClip_Request`;
    }
  },
  Xt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { clip: { n: 1, c: Jt } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CreateShareClip_Response`;
    }
  },
  Zt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteSharedClip_Request`;
    }
  },
  Qt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteSharedClip_Response`;
    }
  },
  $t = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetSingleSharedClip_Request`;
    }
  },
  en = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { clip: { n: 1, c: Jt } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetSingleSharedClip_Response`;
    }
  },
  tn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [4], null));
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
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            component_name: { n: 2, br: w.readString, bw: x.writeString },
            representation_name: { n: 3, br: w.readString, bw: x.writeString },
            segments_to_store: { n: 4, c: Wt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_BeginGameRecordingSegmentsUpload_Request`;
    }
  },
  nn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segments_needed || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            segments_needed: { n: 1, c: Gt, r: !0, q: !0 },
            call_again: { n: 2, br: w.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_BeginGameRecordingSegmentsUpload_Response`;
    }
  },
  rn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            component_name: { n: 2, br: w.readString, bw: x.writeString },
            representation_name: { n: 3, br: w.readString, bw: x.writeString },
            first_segment_number: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            num_segments: { n: 5, br: w.readUint32, bw: x.writeUint32 },
            upload_result: { n: 6, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_CommitGameRecordingSegmentsUpload_Request`;
    }
  },
  an = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_CommitGameRecordingSegmentsUpload_Response`;
    }
  },
  on = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request`;
    }
  },
  sn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.segments_needed || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { segments_needed: { n: 1, c: Gt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response`;
    }
  },
  cn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [2], null));
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
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            segments_uploaded: { n: 2, c: Wt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingCommitSegmentUploads_Request`;
    }
  },
  ln = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CVideo_GameRecordingCommitSegmentUploads_Response`;
    }
  },
  un;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`GameRecordingClip.CreateShareClip#1`, F(Yt, t, n), Xt, {
      ePrivilege: 1,
    });
  }
  e.CreateShareClip = t;
  function n(e, t, n) {
    return e.SendMsg(`GameRecordingClip.DeleteSharedClip#1`, F(Zt, t, n), Qt, {
      ePrivilege: 1,
    });
  }
  e.DeleteSharedClip = n;
  function r(e, t, n) {
    return e.SendMsg(
      `GameRecordingClip.GetSingleSharedClip#1`,
      F($t, t, n),
      en,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  e.GetSingleSharedClip = r;
})((un ||= {}));
var dn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `VideoClip.BeginGameRecordingSegmentsUpload#1`,
      F(tn, t, n),
      nn,
      { ePrivilege: 1 },
    );
  }
  e.BeginGameRecordingSegmentsUpload = t;
  function n(e, t, n) {
    return e.SendMsg(
      `VideoClip.CommitGameRecordingSegmentsUpload#1`,
      F(rn, t, n),
      an,
      { ePrivilege: 1 },
    );
  }
  e.CommitGameRecordingSegmentsUpload = n;
  function r(e, t, n) {
    return e.SendMsg(
      `VideoClip.GetNextBatchOfSegmentsToUpload#1`,
      F(on, t, n),
      sn,
      { ePrivilege: 1 },
    );
  }
  e.GetNextBatchOfSegmentsToUpload = r;
  function i(e, t, n) {
    return e.SendMsg(`VideoClip.CommitSegmentUploads#1`, F(cn, t, n), ln, {
      ePrivilege: 1,
    });
  }
  e.CommitSegmentUploads = i;
})((dn ||= {}));
var fn = new mt(`GR`);
function pn(e) {
  return (...t) => {
    e(`[${(performance.now() / 1e3).toFixed(3)}]`, ...t);
  };
}
var B = pn(fn.Debug),
  mn = pn(fn.Info),
  hn = pn(fn.Warning),
  V = pn(fn.Error),
  H = B;
function gn() {
  return fn.IsDebugEnabled();
}
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
        ? { func: (e) => Ue({ nNumber: r }), color: 8 }
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
      (this.AddMarker(`explosion`, ne, 8),
        this.AddMarker(`attack`, ke, 8),
        this.AddMarker(`defend`, Ne, 8),
        this.AddMarker(`combat`, ee, 8),
        this.AddMarker(`chest`, Xe, 8),
        this.AddMarker(`view`, Ie, 8),
        Pt() ? this.AddMarker(`death`, Oe, 8) : this.AddMarker(`death`, _, 8),
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
function Cn(e) {
  return Sn.Get().GetMarkerByID(e);
}
function wn() {
  return { func: re, color: 5 };
}
function Tn() {
  return { func: Ve, color: 0 };
}
function En() {
  return { func: re, color: 8 };
}
function Dn(e) {
  return e && e.toLowerCase().startsWith(`steam_`);
}
var On = null;
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
function U() {
  return window.g_GRS;
}
async function jn(e, t, n) {
  if (!U()) {
    let [{ CGameRecordingStore: r }] = await Promise.all([
      St(
        () => import(`./chunk~b792617135.js`),
        __vite__mapDeps([0, 1, 2, 3, 4]),
        import.meta.url,
      ),
    ]);
    n && kn(n);
    let i = new r();
    (await i.Init(e, t), (window.g_GRS = i));
  }
}
function Mn() {
  if (U() != null) {
    let e = U();
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
  return U().GetTimelineLoaderForSharedClip(e);
}
function In(e) {
  return (U() != null && e && U().GetClipSummariesForGame(e)) || [];
}
function Ln(e, t, n, r, i, a) {
  return U() == null ? null : U().LoadThumbnails(e, t, n, r, i, a ?? !0);
}
function Rn() {
  return U() == null ? {} : { fnSaveClip: U().SaveClip };
}
function zn() {
  return U() == null ? {} : { fnDeleteClip: U().DeleteClip };
}
function Bn(e, t, n, r) {
  return U() == null ? null : U().TakeScreenshot(e, t, n.valMS, r);
}
function Vn() {
  return U() == null
    ? null
    : {
        fnCreateUserTimelineMarkers: U().CreateUserTimelineMarkers,
        fnUpdateUserTimelineMarkers: U().UpdateUserTimelineMarkers,
        fnRemoveUserTimelineMarker: U().RemoveUserTimelineMarker,
      };
}
function Hn(e, t) {
  return f(() => {
    if (U() != null) return U().GetAchievementInfo(e, t);
  });
}
function Un(e, t, n, r, i) {
  return U().ReportClipRange(e, t, n, r, i);
}
function Wn() {
  return f(() => {
    if (U() != null) return !U().BEnoughDiskSpace();
  });
}
var Gn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: w.readString, bw: x.writeString },
            game_id: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
            date_recorded: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            duration_ms: {
              n: 4,
              br: w.readUint64String,
              bw: x.writeUint64String,
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata`;
    }
  },
  Kn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: w.readString, bw: x.writeString },
            start_offset_ms: {
              n: 2,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            duration_ms: {
              n: 3,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            recording_type: { n: 4, br: w.readEnum, bw: x.writeEnum },
            delete_on_cleanup: { n: 5, br: w.readBool, bw: x.writeBool },
            video_manager_clip_id: {
              n: 6,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            video_manager_video_id: {
              n: 7,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            cdn_manifest_url: { n: 8, br: w.readString, bw: x.writeString },
            file_size: {
              n: 9,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            recording_zero_timeline_offset_ms: {
              n: 10,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineMetadata_Recording`;
    }
  },
  qn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            rt_created: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            possible_clip: { n: 3, br: w.readInt32, bw: x.writeInt32 },
            timeline_id: { n: 4, br: w.readString, bw: x.writeString },
            entry_id: { n: 5, br: w.readUint64String, bw: x.writeUint64String },
            timeline_offset_ms: {
              n: 6,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            marker_icon: { n: 8, br: w.readString, bw: x.writeString },
            marker_title: { n: 9, br: w.readString, bw: x.writeString },
            user_marker: { n: 10, br: w.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingTimelineEvent`;
    }
  },
  Jn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phase_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [6, 7, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phase_id: { n: 4, br: w.readString, bw: x.writeString },
            duration_ms: {
              n: 5,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            tags: { n: 6, c: Yn, r: !0, q: !0 },
            contained_tags: { n: 7, c: Yn, r: !0, q: !0 },
            background_timeline_offset: {
              n: 8,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            attributes: { n: 9, c: Zn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase`;
    }
  },
  Yn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: x.writeString },
            group: { n: 2, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecordingPhase_Tag`;
    }
  },
  Xn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: x.writeString },
            group: { n: 2, br: w.readString, bw: x.writeString },
            icon: { n: 3, br: w.readString, bw: x.writeString },
            priority: { n: 4, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineTag`;
    }
  },
  Zn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: w.readString, bw: x.writeString },
            value: { n: 2, br: w.readString, bw: x.writeString },
            priority: { n: 3, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPhaseAttribute`;
    }
  },
  Qn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Request`;
    }
  },
  $n = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response`;
    }
  },
  er = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            most_recent_start_time: {
              n: 2,
              br: w.readUint32,
              bw: x.writeUint32,
            },
            recording_type: { n: 3, br: w.readEnum, bw: x.writeEnum },
            video_duration_seconds: {
              n: 4,
              br: w.readDouble,
              bw: x.writeDouble,
            },
            timeline_duration_seconds: {
              n: 5,
              br: w.readDouble,
              bw: x.writeDouble,
            },
            is_active: { n: 6, br: w.readBool, bw: x.writeBool },
            file_size: {
              n: 7,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAppsWithBackgroundVideo_Response_App`;
    }
  },
  tr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Request`;
    }
  },
  nr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timelines || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForApp_Response`;
    }
  },
  rr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: w.readString, bw: x.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Request`;
    }
  },
  ir = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            timelines: { n: 2, c: Gn, r: !0, q: !0 },
            first_timeline_start_offset_ms: {
              n: 3,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTimelinesForClip_Response`;
    }
  },
  ar = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.page || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            page: { n: 1, br: w.readUint32, bw: x.writeUint32 },
            count: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            filter_gameid: {
              n: 10,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            filter_search_string: {
              n: 11,
              br: w.readString,
              bw: x.writeString,
            },
            filter_tags: { n: 12, c: or, r: !0, q: !0 },
            filter_phase_id: { n: 13, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request`;
    }
  },
  or = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.group || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            group: { n: 1, br: w.readString, bw: x.writeString },
            name: { n: 2, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Request_Tag`;
    }
  },
  sr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.phases || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            phases: { n: 1, c: cr, r: !0, q: !0 },
            total_count: { n: 2, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response`;
    }
  },
  cr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [7, 8, 10, 13, 16, 17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            date_recorded: { n: 5, br: w.readUint32, bw: x.writeUint32 },
            duration_ms: {
              n: 6,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            tags: { n: 7, c: Xn, r: !0, q: !0 },
            contained_tags: { n: 8, c: Xn, r: !0, q: !0 },
            background_recording: { n: 9, c: lr },
            clip_ids: {
              n: 10,
              r: !0,
              q: !0,
              br: w.readString,
              bw: x.writeRepeatedString,
            },
            type: { n: 11, br: w.readEnum, bw: x.writeEnum },
            start_ms: {
              n: 12,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            screenshots: {
              n: 13,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: x.writeRepeatedUint32,
            },
            active: { n: 14, br: w.readBool, bw: x.writeBool },
            phase_id: { n: 15, br: w.readString, bw: x.writeString },
            significant_events: { n: 16, c: vr, r: !0, q: !0 },
            attributes: { n: 17, c: Zn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase`;
    }
  },
  lr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: w.readString, bw: x.writeString },
            offset: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
            duration_ms: {
              n: 3,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_QueryPhases_Response_Phase_BackgroundRecording`;
    }
  },
  ur = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Request`;
    }
  },
  dr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTags_Response`;
    }
  },
  fr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Request`;
    }
  },
  pr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.enough_space || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { enough_space: { n: 1, br: w.readBool, bw: x.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetEnoughDiskSpace_Response`;
    }
  },
  mr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Request`;
    }
  },
  hr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { size: { n: 1, br: w.readDouble, bw: x.writeDouble } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAvailableDiskSpace_Response`;
    }
  },
  gr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: w.readEnum, bw: x.writeEnum },
            timeline_id: { n: 2, br: w.readString, bw: x.writeString },
            game_id: { n: 3, br: w.readUint64String, bw: x.writeUint64String },
            start_time: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            duration_ms: {
              n: 5,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineChanged_Notification`;
    }
  },
  _r = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: w.readEnum, bw: x.writeEnum },
            timeline_id: { n: 2, br: w.readString, bw: x.writeString },
            game_id: { n: 4, br: w.readUint64String, bw: x.writeUint64String },
            session_id: { n: 5, br: w.readString, bw: x.writeString },
            start_offset: {
              n: 6,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            duration_ms: {
              n: 7,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            recording_type: { n: 8, br: w.readEnum, bw: x.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_RecordingSessionChanged_Notification`;
    }
  },
  vr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [17, 19], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: w.readString, bw: x.writeString },
            entry_id: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
            time: { n: 3, br: w.readUint64String, bw: x.writeUint64String },
            type: { n: 4, br: w.readEnum, bw: x.writeEnum },
            game_mode: { n: 5, br: w.readInt32, bw: x.writeInt32 },
            range_title: { n: 7, br: w.readString, bw: x.writeString },
            range_duration: {
              n: 8,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            range_possible_clip: { n: 9, br: w.readInt32, bw: x.writeInt32 },
            timestamp_title: { n: 10, br: w.readString, bw: x.writeString },
            marker_icon: { n: 11, br: w.readString, bw: x.writeString },
            marker_description: { n: 13, br: w.readString, bw: x.writeString },
            marker_priority: { n: 14, br: w.readInt32, bw: x.writeInt32 },
            screenshot_handle: { n: 15, br: w.readUint32, bw: x.writeUint32 },
            achievement_name: { n: 16, br: w.readString, bw: x.writeString },
            tag: { n: 17, c: Xn, r: !0, q: !0 },
            phase_id: { n: 18, br: w.readString, bw: x.writeString },
            attributes: { n: 19, c: Zn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTimelineEntry`;
    }
  },
  yr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryChanged_Notification`;
    }
  },
  br = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            timeline_id: { n: 2, br: w.readString, bw: x.writeString },
            entry_id: { n: 3, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TimelineEntryRemoved_Notification`;
    }
  },
  xr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_LowDiskSpace_Notification`;
    }
  },
  Sr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PostGameHighlightsChanged_Notification`;
    }
  },
  Cr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            phase_id: { n: 2, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToGamePhase_Notification`;
    }
  },
  wr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            entry_id: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_OpenOverlayToTimelineEvent_Notification`;
    }
  },
  Tr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PhaseListChanged_Notification`;
    }
  },
  Er = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: w.readString, bw: x.writeString },
            game_id: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
            duration_ms: {
              n: 3,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            date_recorded: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            start_timeline_id: { n: 5, br: w.readString, bw: x.writeString },
            start_offset_ms: {
              n: 6,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            published_file_id: {
              n: 7,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            file_size: {
              n: 8,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            name: { n: 9, br: w.readString, bw: x.writeString },
            date_clipped: { n: 10, br: w.readUint32, bw: x.writeUint32 },
            temporary: { n: 11, br: w.readBool, bw: x.writeBool },
            original_device: { n: 12, br: w.readString, bw: x.writeString },
            original_gaming_device_type: {
              n: 13,
              br: w.readUint32,
              bw: x.writeUint32,
            },
            date_downloaded: { n: 14, br: w.readUint32, bw: x.writeUint32 },
            thumbnail_url: { n: 15, br: w.readString, bw: x.writeString },
            thumbnail_width: { n: 16, br: w.readUint32, bw: x.writeUint32 },
            thumbnail_height: { n: 17, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipSummary`;
    }
  },
  Dr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            start: { n: 2, c: Or },
            end: { n: 3, c: Or },
            name: { n: 4, br: w.readString, bw: x.writeString },
            src_clip_id: { n: 5, br: w.readString, bw: x.writeString },
            temporary: { n: 6, br: w.readBool, bw: x.writeBool },
            force_thumbnail: { n: 7, br: w.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request`;
    }
  },
  Or = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timeline_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timeline_id: { n: 1, br: w.readString, bw: x.writeString },
            offset_ms: {
              n: 2,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Request_Position`;
    }
  },
  kr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Er } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SaveClip_Response`;
    }
  },
  Ar = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: w.readString, bw: x.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Request`;
    }
  },
  jr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeleteClip_Response`;
    }
  },
  Mr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bitrate_kbps || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bitrate_kbps: { n: 1, br: w.readInt32, bw: x.writeInt32 },
            width: { n: 2, br: w.readInt32, bw: x.writeInt32 },
            height: { n: 3, br: w.readInt32, bw: x.writeInt32 },
            frames_per_second: { n: 4, br: w.readInt32, bw: x.writeInt32 },
            codec: { n: 5, br: w.readEnum, bw: x.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Settings`;
    }
  },
  Nr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: w.readString, bw: x.writeString },
            export_mp4_path: { n: 2, br: w.readString, bw: x.writeString },
            settings: { n: 3, c: Mr },
            use_unique_filename: { n: 4, br: w.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Request`;
    }
  },
  Pr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { result: { n: 1, br: w.readInt32, bw: x.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClip_Response`;
    }
  },
  Fr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: w.readString, bw: x.writeString },
            settings: { n: 2, c: Mr },
            run_policy_checks: { n: 3, br: w.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Request`;
    }
  },
  Ir = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.estimated_size || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            settings: { n: 2, c: Mr },
            result: { n: 3, br: w.readInt32, bw: x.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportClipPreview_Response`;
    }
  },
  Lr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            timeline_id: { n: 2, br: w.readString, bw: x.writeString },
            timeline_offset_ms: {
              n: 3,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            source_clip_id: { n: 4, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Request`;
    }
  },
  Rr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshot_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_TakeScreenshot_Response`;
    }
  },
  zr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: w.readString, bw: x.writeString },
            title: { n: 2, br: w.readString, bw: x.writeString },
            desc: { n: 3, br: w.readString, bw: x.writeString },
            visibility: { n: 4, br: w.readInt32, bw: x.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Request`;
    }
  },
  Br = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Er } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadClipToSteam_Response`;
    }
  },
  Vr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clip_id: { n: 1, br: w.readString, bw: x.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Request`;
    }
  },
  Hr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.zip_path || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { zip_path: { n: 1, br: w.readString, bw: x.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ZipClip_Response`;
    }
  },
  Ur = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            created_after: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            include_temporary: { n: 3, br: w.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Request`;
    }
  },
  Wr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetClips_Response`;
    }
  },
  Gr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            created_after: { n: 2, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Request`;
    }
  },
  Kr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.events || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetAndTrimPostGameHighlights_Response`;
    }
  },
  qr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            entry: { n: 2, c: vr },
            clip_id: { n: 3, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Request`;
    }
  },
  Jr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entry_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entry_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserAddTimelineEntry_Response`;
    }
  },
  Yr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            entry: { n: 2, c: vr },
            clip_id: { n: 3, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Request`;
    }
  },
  Xr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserUpdateTimelineEntry_Response`;
    }
  },
  Zr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            timeline_id: { n: 2, br: w.readString, bw: x.writeString },
            entry_id: { n: 3, br: w.readUint64String, bw: x.writeUint64String },
            clip_id: { n: 4, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Request`;
    }
  },
  Qr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UserRemoveTimelineEntry_Response`;
    }
  },
  $r = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_ids || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
              br: w.readUint64String,
              pbr: w.readPackedUint64String,
              bw: x.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Request`;
    }
  },
  ei = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Response`;
    }
  },
  ti = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.folder_path || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            folder_path: { n: 1, br: w.readString, bw: x.writeString },
            type: { n: 2, br: w.readEnum, bw: x.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Request`;
    }
  },
  ni = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.size || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            size: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetTotalDiskSpaceUsage_Response`;
    }
  },
  ri = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.recording_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recording_id: { n: 1, br: w.readString, bw: x.writeString },
            clip_id: { n: 3, br: w.readString, bw: x.writeString },
            timeline_id: { n: 7, br: w.readString, bw: x.writeString },
            start_offset_us: {
              n: 4,
              r: !0,
              q: !0,
              br: w.readInt64String,
              pbr: w.readPackedInt64String,
              bw: x.writeRepeatedInt64String,
            },
            major_axis: { n: 5, d: 512, br: w.readUint32, bw: x.writeUint32 },
            time_precision: { n: 6, d: 0, br: w.readEnum, bw: x.writeEnum },
            format: { n: 8, d: 1, br: w.readEnum, bw: x.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Request`;
    }
  },
  ii = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnails || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response`;
    }
  },
  ai = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_data || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_data: { n: 1, br: w.readBytes, bw: x.writeBytes },
            width: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            height: { n: 3, br: w.readUint32, bw: x.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetThumbnails_Response_Thumbnail`;
    }
  },
  oi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Request`;
    }
  },
  si = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StartRecording_Response`;
    }
  },
  ci = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Request`;
    }
  },
  li = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Er } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StopRecording_Response`;
    }
  },
  ui = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Request`;
    }
  },
  di = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.file_size || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetRecordingSize_Response`;
    }
  },
  fi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Request`;
    }
  },
  pi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_CleanupBackgroundRecordings_Response`;
    }
  },
  mi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Request`;
    }
  },
  hi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.per_process_audio_capture || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: w.readBool,
              bw: x.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPlatformCapabilities_Response`;
    }
  },
  gi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { summary: { n: 1, c: Er } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipCreated_Notification`;
    }
  },
  _i = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clip_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clip_id: { n: 1, br: w.readString, bw: x.writeString },
            game_id: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ClipDeleted_Notification`;
    }
  },
  vi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: w.readFloat, bw: x.writeFloat },
            clip_id: { n: 2, br: w.readString, bw: x.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_ExportProgress_Notification`;
    }
  },
  yi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: w.readFixed64String, bw: x.writeFixed64String },
            enabled: { n: 2, br: w.readBool, bw: x.writeBool },
            minutes: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            bitrate: { n: 4, br: w.readString, bw: x.writeString },
            infinite: { n: 5, br: w.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_PerGameSettings`;
    }
  },
  bi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Request`;
    }
  },
  xi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || D(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetPerGameSettings_Response`;
    }
  },
  Si = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_settings || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Request`;
    }
  },
  Ci = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SetPerGameSettings_Response`;
    }
  },
  wi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: w.readFixed64String, bw: x.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Request`;
    }
  },
  Ti = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_DeletePerGameSettings_Response`;
    }
  },
  Ei = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.progress || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            progress: { n: 1, br: w.readFloat, bw: x.writeFloat },
            clip_id: { n: 2, br: w.readString, bw: x.writeString },
            eresult: { n: 3, br: w.readInt32, bw: x.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_UploadProgress_Notification`;
    }
  },
  Di = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_id || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_id: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Request`;
    }
  },
  Oi = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_SwitchBackgroundRecordingGame_Response`;
    }
  },
  ki = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Request`;
    }
  },
  Ai = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_h265_enabled || D(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_h265_enabled: { n: 1, br: w.readBool, bw: x.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= T(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      k(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_GetState_Response`;
    }
  },
  ji = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), z.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRecording_StateChanged_Notification`;
    }
  },
  W;
(function (e) {
  e.GetAppsWithBackgroundVideoHandler = {
    name: `GameRecording.GetAppsWithBackgroundVideo#1`,
    request: Qn,
    response: $n,
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
            F(Qn, e),
            $n,
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
            F(Qn, e),
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
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, F(tr, e), nr, {
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
        : t.SendMsg(`GameRecording.GetTimelinesForApp#1`, F(tr, e), nr, {
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
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, F(rr, e), ir, {
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
        : t.SendMsg(`GameRecording.GetTimelinesForClip#1`, F(rr, e), ir, {
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
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.QueryPhases#1`, F(ar, e), sr, {
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
        : t.SendMsg(`GameRecording.QueryPhases#1`, F(ar, e), sr, {
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
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTags#1`, F(ur, e), dr, {
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
        : t.SendMsg(`GameRecording.GetTags#1`, F(ur, e), dr, {
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
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, F(fr, e), pr, {
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
        : t.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, F(fr, e), pr, {
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
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, F(mr, e), hr, {
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
        : t.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, F(mr, e), hr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetAvailableDiskSpace = h),
    (e.SaveClipHandler = {
      name: `GameRecording.SaveClip#1`,
      request: Dr,
      response: kr,
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
        : t.SendMsg(`GameRecording.SaveClip#1`, F(Dr, e), kr, {
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
        : t.SendMsg(`GameRecording.SaveClip#1`, F(Dr, e), kr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSaveClip = _),
    (e.DeleteClipHandler = {
      name: `GameRecording.DeleteClip#1`,
      request: Ar,
      response: jr,
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
        : t.SendMsg(`GameRecording.DeleteClip#1`, F(Ar, e), jr, {
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
        : t.SendMsg(`GameRecording.DeleteClip#1`, F(Ar, e), jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeleteClip = y),
    (e.GetClipsHandler = {
      name: `GameRecording.GetClips#1`,
      request: Ur,
      response: Wr,
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
        : t.SendMsg(`GameRecording.GetClips#1`, F(Ur, e), Wr, {
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
        : t.SendMsg(`GameRecording.GetClips#1`, F(Ur, e), Wr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetClips = te),
    (e.UploadClipToSteamHandler = {
      name: `GameRecording.UploadClipToSteam#1`,
      request: zr,
      response: Br,
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
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, F(zr, e), Br, {
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
        : t.SendMsg(`GameRecording.UploadClipToSteam#1`, F(zr, e), Br, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUploadClipToSteam = re),
    (e.ExportClipHandler = {
      name: `GameRecording.ExportClip#1`,
      request: Nr,
      response: Pr,
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
        : t.SendMsg(`GameRecording.ExportClip#1`, F(Nr, e), Pr, {
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
        : t.SendMsg(`GameRecording.ExportClip#1`, F(Nr, e), Pr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClip = ae),
    (e.ExportClipPreviewHandler = {
      name: `GameRecording.ExportClipPreview#1`,
      request: Fr,
      response: Ir,
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
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, F(Fr, e), Ir, {
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
        : t.SendMsg(`GameRecording.ExportClipPreview#1`, F(Fr, e), Ir, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgExportClipPreview = se),
    (e.TakeScreenshotHandler = {
      name: `GameRecording.TakeScreenshot#1`,
      request: Lr,
      response: Rr,
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
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, F(Lr, e), Rr, {
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
        : t.SendMsg(`GameRecording.TakeScreenshot#1`, F(Lr, e), Rr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgTakeScreenshot = le),
    (e.ZipClipHandler = {
      name: `GameRecording.ZipClip#1`,
      request: Vr,
      response: Hr,
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
        : t.SendMsg(`GameRecording.ZipClip#1`, F(Vr, e), Hr, {
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
        : t.SendMsg(`GameRecording.ZipClip#1`, F(Vr, e), Hr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgZipClip = de),
    (e.StartRecordingHandler = {
      name: `GameRecording.StartRecording#1`,
      request: oi,
      response: si,
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
        : t.SendMsg(`GameRecording.StartRecording#1`, F(oi, e), si, {
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
        : t.SendMsg(`GameRecording.StartRecording#1`, F(oi, e), si, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStartRecording = pe),
    (e.StopRecordingHandler = {
      name: `GameRecording.StopRecording#1`,
      request: ci,
      response: li,
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
        : t.SendMsg(`GameRecording.StopRecording#1`, F(ci, e), li, {
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
        : t.SendMsg(`GameRecording.StopRecording#1`, F(ci, e), li, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgStopRecording = he),
    (e.GetBackgroundRecordingFileSizeHandler = {
      name: `GameRecording.GetBackgroundRecordingFileSize#1`,
      request: ui,
      response: di,
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
            F(ui, e),
            di,
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
            F(ui, e),
            di,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetBackgroundRecordingFileSize = _e),
    (e.CleanupBackgroundRecordingsHandler = {
      name: `GameRecording.CleanupBackgroundRecordings#1`,
      request: fi,
      response: pi,
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
            F(fi, e),
            pi,
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
            F(fi, e),
            pi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgCleanupBackgroundRecordings = ye),
    (e.GetAndTrimPostGameHighlightsHandler = {
      name: `GameRecording.GetAndTrimPostGameHighlights#1`,
      request: Gr,
      response: Kr,
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
            F(Gr, e),
            Kr,
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
            F(Gr, e),
            Kr,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgGetAndTrimPostGameHighlights = xe),
    (e.GetThumbnailsHandler = {
      name: `GameRecording.GetThumbnails#1`,
      request: ri,
      response: ii,
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
        : t.SendMsg(`GameRecording.GetThumbnails#1`, F(ri, e), ii, {
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
        : t.SendMsg(`GameRecording.GetThumbnails#1`, F(ri, e), ii, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetThumbnails = Ce),
    (e.GetPlatformCapabilitiesHandler = {
      name: `GameRecording.GetPlatformCapabilities#1`,
      request: mi,
      response: hi,
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
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, F(mi, e), hi, {
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
        : t.SendMsg(`GameRecording.GetPlatformCapabilities#1`, F(mi, e), hi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPlatformCapabilities = Te),
    (e.NotifyTimelineChangedHandler = {
      name: `GameRecording.NotifyTimelineChanged#1`,
      request: gr,
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
            W.NotifyTimelineChangedHandler,
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
            F(gr, e),
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
            F(gr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineChanged = Oe),
    (e.NotifyRecordingSessionChangedHandler = {
      name: `GameRecording.NotifyRecordingSessionChanged#1`,
      request: _r,
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
            W.NotifyRecordingSessionChangedHandler,
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
            F(_r, e),
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
            F(_r, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyRecordingSessionChanged = je),
    (e.NotifyTimelineEntryChangedHandler = {
      name: `GameRecording.NotifyTimelineEntryChanged#1`,
      request: yr,
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
            W.NotifyTimelineEntryChangedHandler,
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
            F(yr, e),
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
            F(yr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryChanged = Pe),
    (e.NotifyTimelineEntryRemovedHandler = {
      name: `GameRecording.NotifyTimelineEntryRemoved#1`,
      request: br,
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
            W.NotifyTimelineEntryRemovedHandler,
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
            F(br, e),
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
            F(br, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyTimelineEntryRemoved = Le),
    (e.NotifyClipCreatedHandler = {
      name: `GameRecording.NotifyClipCreated#1`,
      request: gi,
    }));
  function Re(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(W.NotifyClipCreatedHandler, e)
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
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, F(gi, e), {
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
        : t.SendNotification(`GameRecording.NotifyClipCreated#1`, F(gi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipCreated = Be),
    (e.NotifyClipDeletedHandler = {
      name: `GameRecording.NotifyClipDeleted#1`,
      request: _i,
    }));
  function Ve(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(W.NotifyClipDeletedHandler, e)
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
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, F(_i, e), {
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
        : t.SendNotification(`GameRecording.NotifyClipDeleted#1`, F(_i, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyClipDeleted = Ue),
    (e.NotifyExportProgressHandler = {
      name: `GameRecording.NotifyExportProgress#1`,
      request: vi,
    }));
  function We(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(W.NotifyExportProgressHandler, e)
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
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, F(vi, e), {
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
        : t.SendNotification(`GameRecording.NotifyExportProgress#1`, F(vi, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyExportProgress = Ke),
    (e.NotifyUploadProgressHandler = {
      name: `GameRecording.NotifyUploadProgress#1`,
      request: Ei,
    }));
  function qe(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(W.NotifyUploadProgressHandler, e)
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
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, F(Ei, e), {
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
        : t.SendNotification(`GameRecording.NotifyUploadProgress#1`, F(Ei, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyUploadProgress = Ye),
    (e.NotifyLowDiskSpaceHandler = {
      name: `GameRecording.NotifyLowDiskSpace#1`,
      request: xr,
    }));
  function Xe(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(W.NotifyLowDiskSpaceHandler, e)
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
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, F(xr, e), {
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
        : t.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, F(xr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgNotifyLowDiskSpace = Qe),
    (e.NotifyPostGameHighlightsChangedHandler = {
      name: `GameRecording.NotifyPostGameHighlightsChanged#1`,
      request: Sr,
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
            W.NotifyPostGameHighlightsChangedHandler,
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
            F(Sr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPostGameHighlightsChanged = et;
  function b(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            F(Sr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPostGameHighlightsChanged = b),
    (e.NotifyOpenOverlayToGamePhaseHandler = {
      name: `GameRecording.NotifyOpenOverlayToGamePhase#1`,
      request: Cr,
    }));
  function tt(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            W.NotifyOpenOverlayToGamePhaseHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToGamePhase = tt;
  function x(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            F(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToGamePhase = x;
  function nt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            F(Cr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToGamePhase = nt),
    (e.NotifyOpenOverlayToTimelineEventHandler = {
      name: `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
      request: wr,
    }));
  function rt(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            W.NotifyOpenOverlayToTimelineEventHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyOpenOverlayToTimelineEvent = rt;
  function it(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            F(wr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyOpenOverlayToTimelineEvent = it;
  function S(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            F(wr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyOpenOverlayToTimelineEvent = S),
    (e.NotifyPhaseListChangedHandler = {
      name: `GameRecording.NotifyPhaseListChanged#1`,
      request: Tr,
    }));
  function at(e, t) {
    return (
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            W.NotifyPhaseListChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyPhaseListChanged = at;
  function C(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            F(Tr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.NotifyPhaseListChanged = C;
  function ot(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            F(Tr, e),
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgNotifyPhaseListChanged = ot),
    (e.GetPerGameSettingsHandler = {
      name: `GameRecording.GetPerGameSettings#1`,
      request: bi,
      response: xi,
    }));
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
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, F(bi, e), xi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetPerGameSettings = w;
  function st(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetPerGameSettings#1`, F(bi, e), xi, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgGetPerGameSettings = st),
    (e.SetPerGameSettingsHandler = {
      name: `GameRecording.SetPerGameSettings#1`,
      request: Si,
      response: Ci,
    }));
  function ct(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, F(Si, e), Ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SetPerGameSettings = ct;
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
        : t.SendMsg(`GameRecording.SetPerGameSettings#1`, F(Si, e), Ci, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgSetPerGameSettings = lt),
    (e.DeletePerGameSettingsHandler = {
      name: `GameRecording.DeletePerGameSettings#1`,
      request: wi,
      response: Ti,
    }));
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
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, F(wi, e), Ti, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.DeletePerGameSettings = ut;
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
        : t.SendMsg(`GameRecording.DeletePerGameSettings#1`, F(wi, e), Ti, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgDeletePerGameSettings = T),
    (e.UserAddTimelineEntryHandler = {
      name: `GameRecording.UserAddTimelineEntry#1`,
      request: qr,
      response: Jr,
    }));
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
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, F(qr, e), Jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserAddTimelineEntry = E;
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
        : t.SendMsg(`GameRecording.UserAddTimelineEntry#1`, F(qr, e), Jr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserAddTimelineEntry = D),
    (e.UserUpdateTimelineEntryHandler = {
      name: `GameRecording.UserUpdateTimelineEntry#1`,
      request: Yr,
      response: Xr,
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
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, F(Yr, e), Xr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserUpdateTimelineEntry = dt;
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
        : t.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, F(Yr, e), Xr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserUpdateTimelineEntry = ft),
    (e.UserRemoveTimelineEntryHandler = {
      name: `GameRecording.UserRemoveTimelineEntry#1`,
      request: Zr,
      response: Qr,
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
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, F(Zr, e), Qr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.UserRemoveTimelineEntry = O;
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
        : t.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, F(Zr, e), Qr, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  ((e.SendMsgUserRemoveTimelineEntry = k),
    (e.ManuallyDeleteRecordingsForAppsHandler = {
      name: `GameRecording.ManuallyDeleteRecordingsForApps#1`,
      request: $r,
      response: ei,
    }));
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
        : t.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            F($r, e),
            ei,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.ManuallyDeleteRecordingsForApps = pt;
  function A(e, t) {
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
            F($r, e),
            ei,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  ((e.SendMsgManuallyDeleteRecordingsForApps = A),
    (e.GetTotalDiskSpaceUsageHandler = {
      name: `GameRecording.GetTotalDiskSpaceUsage#1`,
      request: ti,
      response: ni,
    }));
  function j(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, F(ti, e), ni, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetTotalDiskSpaceUsage = j;
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
        : t.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, F(ti, e), ni, {
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
            F(Di, e),
            Oi,
            { ePrivilege: 1, eClientExecutionSite: 1 },
          )
    );
  }
  e.SwitchBackgroundRecordingGame = ht;
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
        : t.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            F(Di, e),
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
      (t ||= m().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`GameRecording.GetState#1`, F(ki, e), Ai, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.GetState = _t;
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
        : t.SendMsg(`GameRecording.GetState#1`, F(ki, e), Ai, {
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
      (t ||= m().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(W.NotifyStateChangedHandler, e)
    );
  }
  e.RegisterForNotifyStateChanged = yt;
  function M(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, F(ji, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.NotifyStateChanged = M;
  function bt(e, t) {
    return (
      (t ||= m().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`GameRecording.NotifyStateChanged#1`, F(ji, e), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  e.SendMsgNotifyStateChanged = bt;
})((W ||= {}));
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
      return this.GetType() === ht.k_EGameIDTypeApp;
    }
    BIsShortcut() {
      return this.GetType() === ht.k_EGameIDTypeShortcut;
    }
    BIsMod() {
      return this.GetType() === ht.k_EGameIDTypeGameMod;
    }
    GetInternalAppID() {
      return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
    }
    BIsValid() {
      switch (this.GetType()) {
        case ht.k_EGameIDTypeApp:
          return this.GetAppID() !== 0;
        case ht.k_EGameIDTypeGameMod:
          return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
        case ht.k_EGameIDTypeShortcut:
          return !!(this.GetModID() & 2147483648);
        default:
          return (It(!1, `Unknown GameID type: ${this.GetType()}`), !1);
      }
    }
    static InitFromAppID(t) {
      return new e(ht.k_EGameIDTypeApp, t, 0);
    }
    static InitFromShortcutID(t) {
      return new e(ht.k_EGameIDTypeShortcut, 0, t);
    }
  },
  Ki = e(n(), 1),
  qi = 1e4,
  Ji = 3e3,
  Yi = 4e3,
  Xi = class e {
    constructor() {
      s(this);
    }
    m_bInitialized = !1;
    m_rgListeners = [];
    m_gameID;
    m_clipID;
    m_ulFirstTimelineOffsetMS = 0;
    m_rgTimelineMetadata = [];
    m_mapTimelineData = new Map();
    m_mapRunningTimelines = new Map();
    m_schUpdateRunning = new dt();
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
      return (this.m_rgListeners.push(e), () => ct(this.m_rgListeners, e));
    }
    async LoadTimelinesForBackgroundVideo(e) {
      this.m_gameID = e;
      let { timelines: t = [] } = (await W.GetTimelinesForApp({ game_id: e }))
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
      let t = await W.GetTimelinesForClip({ clip_id: e });
      if (t.GetEResult() != 1) throw Error(`Unable to load clip ` + e);
      let {
        timelines: n = [],
        game_id: r,
        first_timeline_start_offset_ms: i,
      } = t.Body().toObject();
      ((this.m_gameID = r), this.UpdateTimelineMetadata(n));
      for (let t of this.m_rgTimelineMetadata) {
        B(`Loaded clip ${e} timeline ${t.metadata.timeline_id}`);
        for (let e of t.metadata.recordings)
          B(`Clip recording ${e.recording_id} duration ${e.duration_ms}`);
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
          o = b(e, (e) => t.valMS - 1 - parseInt(e.time));
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
          o = b(e, (e) => t.valMS - parseInt(e.time));
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
        a = b(n.m_rgEntries, (e) => i - parseInt(e.time));
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
        a = b(n.m_rgEntries, (e) => i - parseInt(e.time)) + 1;
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
      let r = b(
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
        ((i = b(r.m_rgGameModeChanges, e)), (a = b(r.m_rgEntries, e)));
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
      xt(e.m_rgEntries, t, (e, t) => parseInt(e.time) - parseInt(t.time));
    }
    AddEventToTimeline(e, t, n, r, i, a, o, s) {
      if (!this.m_bInitialized)
        return (V(`timeline loader not initialized, unexpected`), !1);
      let c = this.m_mapTimelineData.get(e);
      if (!c) return (V(`failed to find timeline ${e}`), !1);
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
        H(`adding timeline event marker at ${e} at ${l} MS`),
        this.InsertEntryIntoTimelineSorted(c, u),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    RemoveTimelineEvent(e, t) {
      if (!this.m_bInitialized)
        return (V(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (V(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (V(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddUserMarker(e, t, n, r) {
      if (!this.m_bInitialized)
        return (V(`timeline loader not initialized, unexpected`), !1);
      let i = this.m_mapTimelineData.get(e);
      if (!i) return (V(`failed to find timeline ${e}`), !1);
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
        H(`adding user marker at ${e} at ${a} MS`),
        this.InsertEntryIntoTimelineSorted(i, o),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    UpdateUserMarker(e, t, n) {
      if (!this.m_bInitialized)
        return (V(`timeline loader not initialized, unexpected`), !1);
      let r = this.m_mapTimelineData.get(e);
      if (!r) return (V(`failed to find timeline ${e}`), !1);
      let i = r.m_rgEntries.findIndex((e) => e.id === t);
      if (i < 0) return (V(`failed to find entry by id: ${t}`), !1);
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
        return (V(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (V(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (V(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddRunningTimeline(e, t, n) {
      if (this.m_rgTimelineMetadata.find((t) => t.metadata.timeline_id == e))
        return;
      let r = { timeline_id: e, game_id: t, date_recorded: n, recordings: [] },
        i = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1],
        a = i ? i.nGlobalOffsetMS.valMS + parseInt(i.metadata.duration_ms) : 0;
      (xt(
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
        m_nPerfCounterOffsetMS: Math.max(0, Nt() - n) * 1e3,
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
      Ni(r)
        ? xt(
            n.m_rgGameModeChanges,
            r,
            (e, t) => parseInt(e.time) - parseInt(t.time),
          )
        : Pi(r)
          ? xt(
              n.m_rgStateDescriptions,
              r,
              (e, t) => parseInt(e.time) - parseInt(t.time),
            )
          : xt(n.m_rgEntries, r, (e, t) => parseInt(e.time) - parseInt(t.time));
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
            It(!1, `Received recording started message before timeline info`));
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
          if ((d && n < t) || (f && n > r) || (!Ii(e) && !zi(e))) continue;
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
          `${o.getFullYear()}-${(o.getMonth() + 1).toString().padStart(2, `0`)}-${o.getDate().toString().padStart(2, `0`)} ${o.toLocaleTimeString(At.GetPreferredLocales())}`,
          i,
        ]
          .filter((e) => !!e)
          .join(` - `);
      return (B(`Generated clip name "${s}"`), s);
    }
  };
(E([l], Xi.prototype, `m_bInitialized`, void 0),
  E([C], Xi.prototype, `UpdateRunningTimelines`, null));
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
    m_listeners = new Dt();
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
      (s(this), (this.m_bAutoPlay = !!e));
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
      (B(`CGameRecordingVideo:: perf mark ${i}`),
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
        H(`video playing`));
    }
    OnVideoPause() {
      ((this.m_bVideoElementPlaying = !1), H(`video paused`));
    }
    OnVideoTimeUpdate() {
      ((this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
        (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
        (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime()));
    }
    OnVideoEnd() {
      ((this.m_bVideoElementPlaying = !1),
        (this.m_bAtEnd = !0),
        H(`video ended`));
    }
    OnSeeking() {
      (H(`video on seeking`),
        (this.m_bVideoElementPlaying = !1),
        (this.m_bIsWaiting = !0),
        (this.m_bAtEnd = !1));
    }
    OnLoadedMetadata() {
      this.m_bLoadedMetadata = !0;
    }
    async OnDownloadFailed(e) {
      (e.detail || xe.PlaybackError) == xe.UnsupportedMediaType
        ? (V(`media type error`), (this.m_ePlayerError = 3))
        : (V(`video download failed`, e.detail),
          this.m_nDownloadFailureCount < 2
            ? (await this.m_player?.UpdateMPD(), this.m_nDownloadFailureCount++)
            : (this.m_ePlayerError = 1));
    }
    OnPlaybackError() {
      ((this.m_bVideoElementPlaying = !1),
        V(`video playback error`),
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
      H(`volume change`);
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
        B(`CGameRecordingVideo:: perf mark ${t}`),
        B(`CGameRecordingVideo::Seek to ${e}`),
        (this.m_nPlaybackTime = e),
        this.m_player.Seek(e, this.m_eSeekType));
    }
  };
(E([l], K.prototype, `m_bInitailized`, void 0),
  E([l], K.prototype, `m_bPaused`, void 0),
  E([l], K.prototype, `m_bAtEnd`, void 0),
  E([l], K.prototype, `m_strMediaTypeError`, void 0),
  E([l], K.prototype, `m_ePlayerError`, void 0),
  E([l], K.prototype, `m_bUserInputNeeded`, void 0),
  E([l], K.prototype, `m_bMuted`, void 0),
  E([l], K.prototype, `m_bSeekReadyToPlay`, void 0),
  E([l], K.prototype, `m_bVideoElementPlaying`, void 0),
  E([l], K.prototype, `m_nPlaybackSpeed`, void 0),
  E([l], K.prototype, `m_bIsWaiting`, void 0),
  E([l], K.prototype, `m_bLoadedMetadata`, void 0),
  E([l], K.prototype, `m_nPlaybackTime`, void 0),
  E([l], K.prototype, `m_nVideoStartTime`, void 0),
  E([l], K.prototype, `m_nVideoDuration`, void 0),
  E([l], K.prototype, `m_nVolume`, void 0),
  E([l], K.prototype, `m_eSeekType`, void 0),
  E([u], K.prototype, `Start`, null),
  E([u], K.prototype, `Stop`, null),
  E([C], K.prototype, `OnCanPlay`, null),
  E([C], K.prototype, `OnUserPauseChange`, null),
  E([C], K.prototype, `OnVideoPlaying`, null),
  E([C], K.prototype, `OnVideoPause`, null),
  E([C], K.prototype, `OnVideoTimeUpdate`, null),
  E([C], K.prototype, `OnVideoEnd`, null),
  E([C], K.prototype, `OnSeeking`, null),
  E([C], K.prototype, `OnLoadedMetadata`, null),
  E([C], K.prototype, `OnDownloadFailed`, null),
  E([C], K.prototype, `OnPlaybackError`, null),
  E([C], K.prototype, `OnUserInputNeeded`, null),
  E([C], K.prototype, `OnVolumeChange`, null),
  E([C], K.prototype, `OnVideoWaiting`, null),
  E([C], K.prototype, `UserInputReceived`, null));
function ea(e, t) {
  return ot((n) => (t(n), () => e()), [t]);
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
var q = d(),
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
    constructor(e, t, n, r, i, a, o, c) {
      (s(this),
        (this.m_fnGetManifest = t),
        (this.m_gameRecordingVideo = new K(!0)),
        (this.m_eGameRecordingMode = n),
        (this.m_bGamepadMode = i),
        (this.m_playbackDefinition = o),
        r != null && (this.m_bControlsVisible = r),
        n === `Overlay` && (this.m_bHidePlayer = !0),
        c && this.SetClipOffsets(c),
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
                  (B(
                    `CGameRecordingVideo:: perf measure ${e} duration ${n.duration}`,
                  ),
                    n && this.m_rgSeekPerf.push(n.duration));
                } catch (t) {
                  B(`CGameRecordingVideo:: cant measure ${e}, error: ${t}`);
                }
              }
            },
            { fireImmediately: !0 },
          ),
        ),
        this.SetLoader(e));
    }
    AddEventListener(e) {
      return (this.m_rgListeners.push(e), () => ct(this.m_rgListeners, e));
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
        (B(`Recording invalidated for ${t}. Reloading MPD`),
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
        (V(
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
        r = N(t.valMS + e, 0, n - 1e3);
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
          { fnCreateUserTimelineMarkers: i } = Vn(),
          a = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
            r.strTimelineID,
          );
        L.ReportTrackedAction(t);
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
        : (H(`Failed to delete user marker for timeline ${e} entry ${t}`), !1);
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
(E([l], J.prototype, `m_bHidePlayer`, void 0),
  E([l], J.prototype, `m_strRecordingID`, void 0),
  E([l], J.prototype, `m_durationMS`, void 0),
  E([l], J.prototype, `m_lastRecordingGlobalMS`, void 0),
  E([l], J.prototype, `m_nGlobalTimelinePlaybackMS`, void 0),
  E([l], J.prototype, `m_nGlobalTimelinePlaybackSec`, void 0),
  E([l], J.prototype, `m_rgSeekPerf`, void 0),
  E([l], J.prototype, `m_eRecordingState`, void 0),
  E([l], J.prototype, `m_eRecordingSetting`, void 0),
  E([l], J.prototype, `m_bGamepadMode`, void 0),
  E([l], J.prototype, `m_bControlsVisible`, void 0),
  E([l], J.prototype, `m_fnRenderGlyph`, void 0),
  E([l], J.prototype, `m_previousHighlightEntry`, void 0),
  E([l], J.prototype, `m_nextHighlightEntry`, void 0),
  E([l], J.prototype, `m_displayHighlightEntry`, void 0),
  E([l], J.prototype, `m_nRelativeTimeForDisplay`, void 0),
  E([l.ref], J.prototype, `m_rgClipOffsets`, void 0),
  E([l.ref], J.prototype, `m_phasePreview`, void 0),
  E([C], J.prototype, `SetVideoElement`, null),
  E([C], J.prototype, `OnInvalidateRecording`, null),
  E([u], J.prototype, `OnLoaderInitialized`, null),
  E([C], J.prototype, `OnInvalidate`, null),
  E([C], J.prototype, `OnTimelineLoaded`, null),
  E([C], J.prototype, `GetLiveEdgeMS`, null),
  E([C], J.prototype, `StopPlayback`, null),
  E([C], J.prototype, `TogglePlayPause`, null),
  E([u], J.prototype, `UpdateGlobalPlayTime`, null));
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
    [f] = R.useState(() => new J(i, r, n, o, s, c, u, d));
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
  return (0, q.jsx)(fa.Provider, { value: p, children: t });
}
function Y() {
  return (0, R.useContext)(fa).timelinePlaybackCoordinator;
}
function ma() {
  let e = Y();
  return [f(() => e?.GetPhasePreview() || null), (t) => e?.SetPhasePreview(t)];
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
    className: A(s, { [ga]: !0, [ha]: u, [va]: l }),
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
  return Li(t)
    ? (0, q.jsx)(Ca, { achievementEntry: t, strGameID: r })
    : Ri(t)
      ? (0, q.jsx)(Ea, {})
      : Dn(n)
        ? (0, q.jsx)(wa, { entry: t, strMarkerIcon: n })
        : (0, q.jsx)(Da, { strMarkerIcon: n, strGameID: r });
}
function Ca(e) {
  let { achievementEntry: t, strGameID: n } = e,
    r = Hn(new Gi(n).GetAppID(), t.achievement_name),
    i,
    a;
  if (r) ((i = `white`), (a = (0, q.jsx)(`img`, { src: r.iconURL })));
  else {
    let e = Tn();
    ((i = yn(e.color)), (a = e.func({})));
  }
  return (0, q.jsx)(`div`, { className: ya, style: { color: i }, children: a });
}
function wa(e) {
  let { entry: t, strMarkerIcon: n } = e,
    r,
    i;
  zi(t) ? ((r = wn()), (i = _a)) : (r = Cn(n));
  let a = yn(r.color);
  return (0, q.jsx)(ka, {
    color: a,
    children: (0, q.jsx)(`div`, { className: i, children: r.func({}) }),
  });
}
function Ta(e) {
  let { icon: t, className: n } = e;
  return Cn(t).func({ className: n });
}
function Ea(e) {
  let t = Cn(`steam_invalid`),
    n = yn(t.color);
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
    i = An(new Gi(n).GetAppID(), t);
  if (Dn(t)) return (0, q.jsx)(Ta, { ...e });
  if (i === null) return null;
  if (i === void 0) {
    let e = En();
    return (0, q.jsx)(`div`, { className: r, children: e.func({}) });
  }
  if (`strImageURL` in i)
    return (0, q.jsx)(`img`, {
      src: i.strImageURL,
      alt: ``,
      className: A(r, ba),
    });
  let a = ``;
  return (
    (a = typeof i == `string` ? i : new XMLSerializer().serializeToString(i)),
    (0, q.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      className: A(r, ba),
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
  X = R.createContext({
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
  let e = (0, R.useContext)(X);
  return { nGlobalStartMS: e.globalStartMS, nGlobalEndMS: e.globalEndMS };
}
function Za() {
  return (0, R.useContext)(X).globalStartMS;
}
function Qa() {
  return (0, R.useContext)(X).globalEndMS;
}
function $a() {
  return (0, R.useContext)(X).setRange;
}
function eo() {
  return (0, R.useContext)(X).setStartMS;
}
function to() {
  return (0, R.useContext)(X).setEndMS;
}
function no() {
  let e = (0, R.useContext)(X);
  return {
    selectedMarker: e.selectedMarker,
    setSelectedMarker: e.setSelectedMarker,
  };
}
function ro() {
  let e = (0, R.useContext)(X);
  return !isNaN(e.globalStartMS?.valMS) && !isNaN(e.globalEndMS?.valMS);
}
function io() {
  return (0, R.useContext)(X).clearSelection;
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
  return (0, R.useContext)(X).zoomIntoSelection;
}
function so() {
  return (0, R.useContext)(X).selectionZoomCount;
}
function co(e) {
  let t = (0, R.useContext)(X),
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
      (s(this), (this.m_loader = e), (this.m_eventTarget = t));
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
    m_mapTimelineClips = l.map([], { deep: !1 });
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
    m_mapTimelineEntries = l.map([], { deep: !1 });
    m_bInitialized = !1;
    m_eThumbnailComponent = null;
    m_nGlobalRelativeThumbnailPositionPX = void 0;
    m_thumbnailHighlightEntry = void 0;
    m_phaseToHighlight = void 0;
    constructor(e, t, n) {
      (s(this),
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
      (B(`OnTimelineLoaded`, e),
        this.FindTimelineOffsets(e)
          ? this.ComputeEntriesForTimeline(e)
          : H(`Missing timeline offset metadata for`, e));
    }
    OnInvalidate(e) {
      B(`on invalidate`, e);
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
            n = N(
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
      this.m_scrollLeftPX = N(e, 0, this.GetMaxScrollLeftPX());
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
      let e = N(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
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
      t < 0 && (t = b(this.m_rgTimelineOffsets, (t) => e - t.globalOffsetMS));
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
      return b(
        this.m_rgTimelineOffsets,
        (t) =>
          e -
          (this.ConvertGlobalMSToGlobalPXOffset(t.globalOffsetMS) +
            this.ConvertDurationMSToDeltaPX(t.nDurationMS)),
      );
    }
    FindIndexOfClosestTimelineStartForOffsetPX(e) {
      return b(
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
(E([l], Q.prototype, `m_durationMS`, void 0),
  E([l], Q.prototype, `m_scrollLeftPX`, void 0),
  E([l], Q.prototype, `m_scrollWindowWidth`, void 0),
  E([l], Q.prototype, `m_scrollWindowOffsetPX`, void 0),
  E([l], Q.prototype, `m_bAutoScrollPaused`, void 0),
  E([l], Q.prototype, `m_autoScrollPauseTimeout`, void 0),
  E([l], Q.prototype, `m_msVisible`, void 0),
  E([l.ref], Q.prototype, `m_rgTimelineOffsets`, void 0),
  E([l], Q.prototype, `m_bInitialized`, void 0),
  E([l], Q.prototype, `m_eThumbnailComponent`, void 0),
  E([l], Q.prototype, `m_nGlobalRelativeThumbnailPositionPX`, void 0),
  E([l], Q.prototype, `m_thumbnailHighlightEntry`, void 0),
  E([l], Q.prototype, `m_phaseToHighlight`, void 0),
  E([u], Q.prototype, `OnLoaderInitialized`, null),
  E([u], Q.prototype, `InitDefaultsIfReady`, null),
  E([u], Q.prototype, `OnInvalidate`, null),
  E([u], Q.prototype, `ZoomIn`, null),
  E([u], Q.prototype, `ZoomOut`, null),
  E([u], Q.prototype, `SetTempZoomScale`, null),
  E([u], Q.prototype, `ClearTempZoomScale`, null),
  E([u], Q.prototype, `UpdateClipSummaries`, null),
  E([C], Q.prototype, `BReachedMaxScroll`, null),
  E([C], Q.prototype, `BReachedMinScroll`, null));
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
      let e = new Q(t, n, i);
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
    o ? (0, q.jsx)(go.Provider, { value: o, children: r }) : null
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
function $() {
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
    let t = $(),
      n = f(() => t.GetVisibleTimelines());
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
  Oo = R.memo(function (e) {
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
    children: (0, q.jsx)(`div`, { className: A(So, r) }),
  });
}
function Ao() {
  let e = $(),
    t = f(() => e.GetCurrentZoomScale()),
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
    u = We();
  return u.bLoading
    ? (0, q.jsx)(Le, {
        state: u,
        strDialogTitle: P(`#Marker_Dialog`),
        closeModal: t,
      })
    : (0, q.jsxs)(ut, {
        strTitle: P(`#Marker_Dialog`),
        strMiddleButtonText: P(`#Marker_Action_Delete`),
        onCancel: t,
        onOK: async () => {
          (u.fnSetLoading(!0),
            (await i.UpdateUserMarker(n, r, o, c))
              ? t()
              : (u.fnSetError(!0), u.fnSetStrError(P(`#Marker_UpdateFailed`))));
        },
        children: [
          (0, q.jsx)(lt, {
            type: `text`,
            value: o,
            onChange: (e) => s(e.currentTarget.value),
            label: P(`#Marker_Title`),
          }),
          (0, q.jsx)(lt, {
            type: `text`,
            value: c,
            onChange: (e) => l(e.currentTarget.value),
            label: P(`#Marker_Description`),
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
          Un(
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
        let { fnDeleteClip: e } = zn();
        await e(this.m_creationResult.clipSummary.clip_id);
      }
    }
  };
(E([C], $o.prototype, `create`, null), E([C], $o.prototype, `cleanup`, null));
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
  let { fnSaveClip: l } = Rn();
  H(`start ${r} @ ${i} upto ${a} @ ${o}`);
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
      H(d ? `Clip ${d.clip_id} created` : `Clip was not created: ${f}`), u
    );
  } catch (e) {
    V(e);
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
    d = $(),
    p = f(() => d.GetScrollableWidthPX()),
    m = f(() => d.GetVisualWindowStartPX()),
    h = f(() => d.GetScrollWindowWidth()),
    g = f(() => d.GetScrollWindowOffset()),
    _ = f(() => d.GetTimelineMarginWidth()),
    v = R.useMemo(() => {
      if (u.current) {
        let e = m - g - _;
        return Ui(N(c + e, 0, p));
      }
      return Ui(0);
    }, [_, c, g, m, p]),
    y = R.useMemo(() => {
      if (u.current) {
        let e = u.current.getBoundingClientRect(),
          t = p > h ? g : e.x;
        return Wi(N(c - t, 0, h));
      }
      return Wi(0);
    }, [c, g, h, p]),
    ee = (0, R.useCallback)(
      (e, t) => (
        u.current && u.current.addEventListener(e, t),
        () => u.current?.removeEventListener(e, t)
      ),
      [],
    ),
    te = (0, R.useCallback)(() => r(!0), []),
    ne = (0, R.useCallback)(() => r(!1), []),
    re = (0, R.useCallback)((e) => l(e.clientX), []),
    ie = (0, R.useCallback)((e) => a(!0), []),
    ae = (0, R.useCallback)((e) => a(!1), []);
  (0, R.useEffect)(() => {
    let e = jt(u.current);
    return (
      e.addEventListener(`mousemove`, re),
      () => e.removeEventListener(`mousemove`, re)
    );
  }, [re]);
  let oe = (0, R.useMemo)(
    () => ({
      bContainerFocus: i,
      bInContainer: n,
      nMouseClientXPX: c,
      globalMouseXPX: v,
      scrollWindowMouseXPX: y,
      fnRegisterMouseEvent: ee,
      bContextMenuOpen: o,
      setContextMenuOpen: s,
    }),
    [i, n, o, c, v, y, ee],
  );
  return (0, q.jsx)(is.Provider, {
    value: oe,
    children: (0, q.jsx)(`div`, {
      ref: u,
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
  let e = $(),
    t = Y(),
    n = ao(),
    r = f(() => !t.ShouldModeShowClipControls()),
    i = Wn(),
    { onMarkerCreated: a, onNavigateToClip: o } = zo(),
    [s, c] = ds();
  return R.useCallback(
    (s, l, u, d) =>
      r || i
        ? null
        : Ft(
            (0, q.jsx)(ms, {
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
    l = f(() => t.GetClipsAtGlobalMS(r)),
    u = _s(n);
  (0, R.useEffect)(() => (c(!0), () => c(!1)), [c]);
  let d = (() => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(r.valMS);
      if (!e) return null;
      let i = t.GetLoader().GetTimelineData(e);
      if (!i) return null;
      let a = b(i.m_rgPhases, (e) => n.valMS - parseInt(e.time));
      if (a < 0) return null;
      let o = i.m_rgPhases[a];
      return n.valMS >= parseInt(o.time) &&
        n.valMS <= parseInt(o.time) + parseInt(o.duration)
        ? { strTimelineID: e, phase: o }
        : null;
    })(),
    p = (e) => {
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
    m = () => {
      (i(t, 4, r, void 0), t.SetPlaytimeFromGlobalMS(r), t.FocusGlobalMS(r));
    },
    h = () => {
      (i(t, 4, void 0, r), t.SetPlaytimeFromGlobalMS(r), t.FocusGlobalMS(r));
    },
    g = () => {
      l.length > 0 &&
        (L.ReportTrackedAction(
          `/GameRecording/Tooltip/ViewClip/TimelineCtxMenu`,
        ),
        s && s(l[0].strClipID));
    },
    _ = () => {
      let { strTimelineID: e, nTimelineOffsetMS: n } =
        t.ConvertGlobalOffsetToTimelineRelativeOffset(r.valMS);
      (t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(e),
        Bn(t.GetGameID(), e, n, t.GetClipID()));
    },
    v = () => {
      if (!d) return;
      let { phase: e, strTimelineID: n } = d;
      ns(t.GetGameID(), n, parseInt(e.time), parseInt(e.duration));
    },
    y = (e) => n.SetPhaseToHighlight(e);
  return (
    (0, R.useEffect)(() => () => n.SetPhaseToHighlight(null), [n]),
    (0, q.jsxs)(gt, {
      refInstance: u,
      children: [
        (0, q.jsx)(j, {
          onSelected: p,
          className: Jo,
          children: (0, q.jsxs)(`div`, {
            className: A(Yo, Xo),
            children: [
              (0, q.jsx)(re, {}),
              P(
                a
                  ? `#Playback_UserSelectionControls_AddUserMarker`
                  : `#TimelineDialog_AddMarker`,
              ),
            ],
          }),
        }),
        (0, q.jsx)(j, {
          onSelected: _,
          className: Jo,
          children: (0, q.jsxs)(`div`, {
            className: A(Yo, Zo),
            children: [
              (0, q.jsx)(Qe, {}),
              P(
                a
                  ? `#Playback_UserSelectionControls_TakeScreenshot`
                  : `#TimelineDialog_TakeScreenshot`,
              ),
            ],
          }),
        }),
        (0, q.jsx)(j, {
          onSelected: m,
          className: Jo,
          children: (0, q.jsxs)(`div`, {
            className: A(Yo, Qo),
            children: [
              (0, q.jsx)(Me, { direction: `left` }),
              P(
                a
                  ? `#Playback_UserSelectionControls_SetClipStart`
                  : `#TimelineContext_SetClipStart`,
              ),
            ],
          }),
        }),
        (0, q.jsx)(j, {
          onSelected: h,
          className: Jo,
          children: (0, q.jsxs)(`div`, {
            className: A(Yo, Qo),
            children: [
              (0, q.jsx)(Me, { direction: `right` }),
              P(
                a
                  ? `#Playback_UserSelectionControls_SetClipEnd`
                  : `#TimelineContext_SetClipEnd`,
              ),
            ],
          }),
        }),
        !!d &&
          (0, q.jsx)(j, {
            onSelected: v,
            className: `YwXy-p3jOGA-`,
            onMouseOver: () => y([d.strTimelineID, d.phase.time]),
            onMouseLeave: () => y(null),
            children: (0, q.jsxs)(`div`, {
              className: A(`DYV4-rbHkCQ-`, `cTZ4oCV0rfc-`),
              children: [(0, q.jsx)(te, {}), P(`#TimelineDialog_ClipPhase`)],
            }),
          }),
        l.length > 0 &&
          (0, q.jsx)(j, {
            onSelected: g,
            className: `YwXy-p3jOGA-`,
            children: (0, q.jsxs)(`div`, {
              className: A(`DYV4-rbHkCQ-`, `opmNw-e94ys-`),
              children: [(0, q.jsx)(Et, {}), P(`#TimelineDialog_ViewClip`)],
            }),
          }),
      ],
    })
  );
}
function hs() {
  let e = Y(),
    t = ao(),
    n = f(() => !e.ShouldModeShowClipControls()),
    r = Wn(),
    { onMarkerCreated: i } = zo();
  return R.useCallback(
    (a, o) => {
      n ||
        r ||
        Ft(
          (0, q.jsx)(gs, {
            onMarkerCreated: i,
            playbackCoordinator: e,
            fnSetSelectionClipRange: t,
          }),
          a,
          o,
        );
    },
    [n, r, i, e, t],
  );
}
function gs(e) {
  let { playbackCoordinator: t, fnSetSelectionClipRange: n } = e,
    r = (0, R.useRef)(void 0),
    { onMarkerCreated: i } = zo();
  return (0, q.jsxs)(gt, {
    refInstance: r,
    children: [
      (0, q.jsx)(j, {
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
          className: A(Yo, Xo),
          children: [
            (0, q.jsx)(Fe, {}),
            P(`#Playback_UserSelectionControls_AddUserMarker`),
          ],
        }),
      }),
      (0, q.jsx)(j, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime(),
            { strTimelineID: n, nTimelineOffsetMS: r } =
              t.ConvertGlobalOffsetToTimelineRelativeOffset(e.valMS);
          (t.GetLoader().GetTimelineStartBeforeGlobalZeroMS(n),
            Bn(t.GetGameID(), n, r, t.GetClipID()));
        },
        className: Jo,
        children: (0, q.jsxs)(`div`, {
          className: A(Yo, Zo),
          children: [
            (0, q.jsx)(Qe, {}),
            P(`#Playback_UserSelectionControls_TakeScreenshot`),
          ],
        }),
      }),
      (0, q.jsx)(j, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime();
          (n(t, 4, e, void 0),
            t.SetPlaytimeFromGlobalMS(e),
            t.FocusGlobalMS(e));
        },
        className: Jo,
        children: (0, q.jsxs)(`div`, {
          className: A(Yo, Qo),
          children: [
            (0, q.jsx)(Me, { direction: `left` }),
            P(`#Playback_UserSelectionControls_SetClipStart`),
          ],
        }),
      }),
      (0, q.jsx)(j, {
        onSelected: () => {
          let e = t.GetGlobalMSPlaytime();
          (n(t, 4, void 0, e),
            t.SetPlaytimeFromGlobalMS(e),
            t.FocusGlobalMS(e));
        },
        className: Jo,
        children: (0, q.jsxs)(`div`, {
          className: A(Yo, Qo),
          children: [
            (0, q.jsx)(Me, { direction: `right` }),
            P(`#Playback_UserSelectionControls_SetClipEnd`),
          ],
        }),
      }),
    ],
  });
}
function _s(e) {
  let t = f(() => e.GetAutoScrollPauseTimeout()),
    n = f(() => e.GetVisualWindowStartPX()),
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
function vs() {
  let e = $(),
    t = Y(),
    { setSelectedMarker: n } = no(),
    r = io(),
    { onNavigateToClip: i, onNavigateToScreenshot: a } = zo(),
    o = Wn(),
    s = f(() => !t.ShouldModeShowClipControls());
  return R.useCallback(
    (c, l, u) => {
      s ||
        Ft(
          (0, q.jsx)(ys, {
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
function ys(e) {
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
    l = f(() => n.ConvertGlobalMSToClipOrNone(r.nGlobalMS.valMS)),
    u = f(() =>
      t.ConvertGlobaOffsetToRecordingAndRelativeOffset(r.nGlobalMS.valMS),
    ),
    d = _s(n),
    p = (e) => {
      let n = bs,
        a = xs;
      Fi(r.entry) && ((n = 0), (a = parseInt(r.entry.duration)));
      let [o, s] = t
        .GetLoader()
        .CreateGlobalRangeForTimeline(r.strTimelineID, r.nGlobalMS.valMS, n, a);
      (t.SetPlaytimeFromGlobalMS(G(o)),
        i?.(r.entry.id, r.strTimelineID, o, s),
        L.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/ClipFromHighlight`,
        ),
        e.stopPropagation());
    },
    m = () => {
      l &&
        (L.ReportTrackedAction(
          `/GameRecording/MarkerCtxMenu/ViewClip/${r.entry.type}`,
        ),
        s && s(l.clipID));
    },
    h = (e) => {
      if (!zi(r.entry)) return;
      L.ReportTrackedAction(
        `/GameRecording/HighlightCtxMenu/Marker/Edit/${r.entry.type}`,
      );
      let n = (0, q.jsx)(qo, {
        entry: r.entry,
        playbackCoordinator: t,
        fnClearSelection: a,
        strTimelineID: r.strTimelineID,
      });
      (tt(n, Lt(e)), e.stopPropagation(), e.preventDefault());
    },
    g = (e) => {
      zi(r.entry) &&
        (L.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/Marker/Delete/${r.entry.type}`,
        ),
        t.RemoveUserMarker(r.strTimelineID, r.entry.id));
    },
    _ = () => {
      Bi(r.entry) &&
        r.entry?.handle &&
        (L.ReportTrackedAction(`/GameRecording/HighlightCtxMenu/Screenshot`),
        c(n.GetGameID(), r.entry.handle));
    },
    v = [];
  return (
    zi(r.entry) &&
      v.push(
        (0, q.jsx)(
          j,
          {
            onSelected: h,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: A(Vo, Ho),
              children: [(0, q.jsx)(ue, {}), P(`#Marker_Action_Edit`)],
            }),
          },
          `edit`,
        ),
      ),
    u?.strRecordingID &&
      !o &&
      v.push(
        (0, q.jsx)(
          j,
          {
            onSelected: p,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: A(Vo, Uo),
              children: [(0, q.jsx)(qe, {}), P(`#TimelineDialog_ClipVideo`)],
            }),
          },
          `clip`,
        ),
      ),
    Bi(r.entry) &&
      v.push(
        (0, q.jsx)(
          j,
          {
            onSelected: _,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: A(Vo, Go),
              children: [
                (0, q.jsx)(Re, {}),
                P(`#TimelineDialog_ViewScreenshot`),
              ],
            }),
          },
          `view_screenshot`,
        ),
      ),
    l &&
      m &&
      v.push(
        (0, q.jsx)(
          j,
          {
            onSelected: m,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: A(Vo, Ko),
              children: [(0, q.jsx)(Ae, {}), P(`#TimelineDialog_ViewClip`)],
            }),
          },
          `view_clip`,
        ),
      ),
    zi(r.entry) &&
      v.push(
        (0, q.jsx)(
          j,
          {
            onSelected: g,
            className: Bo,
            children: (0, q.jsxs)(`div`, {
              className: A(Vo, Wo),
              children: [(0, q.jsx)(ft, {}), P(`#Marker_Action_Delete`)],
            }),
          },
          `delete`,
        ),
      ),
    v.length ? (0, q.jsx)(gt, { refInstance: d, children: v }) : null
  );
}
var bs = 5e3,
  xs = 3e3,
  Ss = 5e3;
function Cs(e) {
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
    l = f(() => n.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
    u = f(() => {
      let e = n.GetThumbnailComponent();
      return e && e !== Z.Highlight;
    }),
    d = vs(),
    { selectedMarker: p } = no(),
    m = t.entry?.id == p?.strEntryID && t.strTimelineID == p?.strTimelineID,
    { ref: h, ...g } = Ts(n, t),
    _ = R.useCallback(
      (e) => {
        let i = c.valMS - Ss,
          a = n.FindTimelineOffsets(o),
          s = Math.max(i, a.globalOffsetMS);
        (r.SetPlaytimeFromGlobalMS(G(s)),
          r.SetDisplayHighlightEntry(t.entry),
          e.stopPropagation(),
          L.ReportTrackedAction(`/GameRecording/Marker/Click/${t.entry.type}`));
      },
      [r, c.valMS, o, n, t],
    ),
    v = (e) => {
      (d(e, t, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 }),
        e.stopPropagation());
    },
    y = { transform: `translateX( calc( ${l}px - 50% ))` };
  return (0, q.jsxs)(`div`, {
    className: A(jo, u && `fKVXzdV7f4k-`, s && `NF7Pk6zJyl4-`),
    style: y,
    ref: h,
    onContextMenu: v,
    ...g,
    children: [
      (0, q.jsx)(
        `div`,
        {
          className: A(Mo),
          children: (0, q.jsx)(
            xa,
            {
              classNames: No,
              entry: t.entry,
              strMarkerIcon: t.strMarkerIcon,
              faded: s,
              onClick: _,
              bSelectedMarker: m,
            },
            t.entry.id,
          ),
        },
        c.valMS,
      ),
      (0, q.jsx)(`div`, {
        className: Po,
        children: (0, q.jsx)(`div`, { className: A(Fo) }),
      }),
    ],
  });
}
var ws = 150;
function Ts(e, t) {
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
        (t.clientX < a - ws || t.clientX > a + ws) &&
          (e.SetThumbnailComponent(null),
          r.current && r.current(),
          (r.current = null));
      },
      [e],
    ),
    a = R.useCallback(
      (n) => {
        if (
          (e.SetThumbnailComponent(Z.Highlight),
          e.SetThumbnailEntry(t),
          !r.current)
        ) {
          let e = Lt(n);
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
          : (bt(n.current, t.relatedTarget) ||
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
var Es = 16;
function Ds(e) {
  switch (e.type) {
    case `achievement`:
      return 9e3;
    default:
      return e.priority;
  }
}
var Os = R.memo(function (e) {
    let t = $(),
      n = f(() => t.GetVisibleTimelines());
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
var js = R.memo(function (e) {
  let { timeline: t } = e,
    n = $(),
    r = Y(),
    i = f(() => n.GetVisibleTimelineHighlights(t.timelineID) || [])
      .slice()
      .sort(As),
    a = f(() => n.GetTimelineOffsetMS(t.timelineID)),
    o = t.globalOffsetMS - a,
    s = r.GetGameID(),
    c = r.GetClipID(),
    l = new Lo(n.GetCurrentZoomScale() * Es);
  return i.map((e, i) => {
    if (Ns(e) !== `highlight`) return null;
    let a = `${e.type}_${e.id}_${t.timelineID}_${i}`,
      u = Ms(t.timelineID, o, e),
      d = l.BAllowIcon(u.nGlobalMS.valMS);
    return (0, q.jsx)(
      Cs,
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
function Ms(e, t, n) {
  if (
    ![`event`, `usermarker`, `screenshot`, `achievement`, `error`].includes(
      n.type,
    )
  )
    return (
      B(
        `Unexpected timeline entry type ${n.type}, returning empty highlight marker`,
      ),
      null
    );
  let r = n,
    i = Li(r);
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
  let { view: t, entry: n, nGlobalEntryEndMS: r, nGlobalTLStartMS: i } = e,
    a = Y(),
    o = G(parseInt(n.time) + i.valMS),
    s = f(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(o.valMS),
        n = t.GetVirtualWindowStartPX();
      return n < e ? e : n;
    }),
    c = f(() => {
      let e = t.ConvertGlobalMSToGlobalPXOffset(r.valMS),
        n = t.GetVirtualWindowEndPX();
      return n < e ? n : e;
    }),
    l = !!a.GetClipID(),
    u = { transform: `translateX( ${s}px )`, width: c - s },
    d = A({
      [Rs]: n.mode === Mi.Invalid,
      [Is]: n.mode === Mi.Staging,
      [Ls]: n.mode === Mi.Menus,
      [Fs]: n.mode === Mi.Playing,
    });
  return (0, q.jsx)(
    `div`,
    { className: A(Ps, d, l && `dM-k3XLATgY-`), style: u },
    n.id,
  );
}
var Bs = R.memo(function (e) {
    let t = $(),
      n = f(() => t.GetVisibleTimelines());
    return (0, q.jsx)(q.Fragment, {
      children: n.map((e) => (0, q.jsx)(Vs, { timeline: e }, e.timelineID)),
    });
  }),
  Vs = R.memo(function (e) {
    let { timelineID: t, globalOffsetMS: n, nDurationMS: r } = e.timeline,
      i = $(),
      a = f(() => {
        let e = i.GetVisibleTimelineGameModes(t);
        return !e || e.length === 0
          ? [{ time: `0`, type: `gamemode`, mode: Mi.Invalid, id: `synthetic` }]
          : e;
      }),
      o = G(n + r),
      s = n - i.GetTimelineOffsetMS(t),
      c = [];
    for (let e = 0; e < a.length; e++) {
      let n = G(e < a.length - 1 ? parseInt(a[e + 1].time) + s : o.valMS - 1);
      c.push(
        (0, q.jsx)(
          zs,
          {
            view: i,
            entry: a[e],
            nGlobalEntryEndMS: n,
            nGlobalTLStartMS: G(s),
          },
          `gameMode_${t}_${e}`,
        ),
      );
    }
    return (0, q.jsx)(q.Fragment, { children: c });
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
  Zs = (0, R.memo)(function (e) {
    let t = Y(),
      n = f(() => t.GetHidePlayer()),
      [r, i] = (0, R.useState)({ bDragActive: !1, bPausedOnDragStart: !1 }),
      a = $(),
      o = f(() => {
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
      ? (0, q.jsx)($s, { setDragActive: i })
      : o
        ? (0, q.jsx)(Qs, { view: a, setDragActive: i })
        : (0, q.jsx)(ec, { dragState: r, setDragActive: i });
  });
function Qs(e) {
  let { view: t, setDragActive: n } = e,
    r = f(() => t.GetVisualWindowStartPX() + t.GetScrollWindowWidth() / 2);
  return (0, q.jsx)(oc, {
    playheadPosition: r,
    children: (0, q.jsx)(tc, { setDragActive: n, bDragActive: !1 }),
  });
}
var $s = (0, R.memo)(function (e) {
    let { setDragActive: t } = e,
      n = $(),
      r = f(() => n.GetScrollableWidthPX()),
      i = zt(100),
      a = (0, R.useCallback)(
        (e) => {
          n.GetAutoScrollPaused() || i(() => n.ScrollToOffset(e));
        },
        [i, n],
      );
    return (
      (0, R.useEffect)(() => n.ScrollToEnd(), [n]),
      (0, R.useEffect)(() => a(r), [r, a]),
      (0, q.jsx)(oc, {
        playheadPosition: r,
        children: (0, q.jsx)(tc, { setDragActive: t, bDragActive: !1 }),
      })
    );
  }),
  ec = (0, R.memo)(function (e) {
    let { dragState: t, setDragActive: n } = e,
      { bDragActive: r, bPausedOnDragStart: i } = t,
      a = Y(),
      o = $(),
      s = ss(),
      c = ic(cs(), o, r, s, a);
    return (
      (0, R.useEffect)(() => {
        if (!r) return;
        o.SetThumbnailPosition(c);
        let e = o.ConvertPXOffsetToGlobalMS(c, !1);
        if (!e) return;
        let t = a.GetLiveEdgeMS();
        a.SetPlaytimeFromGlobalMS(t.valMS < e ? t : G(e), i, !0, !0);
      }, [c, i, r, a, o]),
      (0, q.jsx)(`div`, {
        className: A(Ks, r && `FOu6nwXsE7c-`),
        children: (0, q.jsx)(oc, {
          className: r ? Js : void 0,
          playheadPosition: c,
          children: (0, q.jsx)(tc, { setDragActive: n, bDragActive: r }),
        }),
      })
    );
  }),
  tc = (0, R.memo)(function (e) {
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
  nc = R.memo(function (e) {
    let { setDragActive: t } = e,
      n = Y(),
      r = ps(),
      i = $(),
      a = f(() => {
        let e = i.GetThumbnailComponent();
        return e === Z.RangeLeft || e === Z.RangeRight;
      }),
      o = (0, R.useCallback)(
        (e) => {
          if (e.button != 0) return;
          let r = Lt(e),
            a,
            o,
            s = () => {
              let e = n.GetGameRecordingVideo().IsPaused();
              (t({ bDragActive: !0, bPausedOnDragStart: e }),
                i.SetThumbnailComponent(Z.Playhead),
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
    return (0, q.jsx)(`div`, {
      className: A(Gs, a && `Twzqk-0-bXc-`),
      onMouseDown: o,
      onContextMenu: s,
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
function ic(e, t, n, r, i) {
  let a = (0, R.useRef)(void 0),
    o = f(() => t.GetScrollableWidthPX()),
    s = f(() => t.GetScrollWindowWidth()),
    [c, l] = (0, R.useState)(0),
    u = (0, R.useRef)(void 0),
    d = (0, R.useRef)(void 0),
    { clearPlaybackAnimation: p, startPlaybackAnimation: m } = ac(i, t, l);
  (0, R.useEffect)(
    () => () => {
      (u.current &&
        (cancelAnimationFrame(u.current),
        (u.current = null),
        (d.current = null)),
        p());
    },
    [p],
  );
  let h = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (l(N(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(u.current),
          (u.current = null),
          (d.current = null));
      else {
        if (
          ((u.current &&= requestAnimationFrame((e) => h(e, t, n, r, i))),
          d.current)
        ) {
          let n = ((e - d.current) / Xs) * r;
          (t.ScrollBy(n), l((e) => N(e + n, 0, t.GetScrollableWidthPX())));
        }
        d.current = e;
      }
    },
    [l],
  );
  return (
    (0, R.useEffect)(() => {
      let i = s * (1 - rd),
        c = s * rd;
      if (
        (u.current &&
          (cancelAnimationFrame(u.current),
          (u.current = null),
          (d.current = null)),
        !n)
      )
        m();
      else if ((p(), e.valPX < c && !t.BReachedMinScroll())) {
        if (e.valPX <= a.current) {
          let n = e.valPX - c,
            r = N(Math.abs(n / c), 0, 1) * n;
          u.current = requestAnimationFrame((n) =>
            h(n, t, e.valPX, r, t.BReachedMinScroll),
          );
        }
        a.current = e.valPX;
      } else if (e.valPX > i && !t.BReachedMaxScroll()) {
        if (e.valPX >= a.current) {
          let n = e.valPX - i,
            r = N(Math.abs(n / (s - i)), 0, 1) * n;
          u.current = requestAnimationFrame((n) =>
            h(n, t, e.valPX, r, t.BReachedMaxScroll),
          );
        }
        a.current = e.valPX;
      } else l(N(r.valPX, 0, o));
    }, [n, p, r.valPX, s, o, h, e.valPX, m, t]),
    c
  );
}
function ac(e, t, n) {
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
function oc(e) {
  let { className: t, playheadPosition: n, children: r } = e;
  return (0, q.jsx)(`div`, {
    className: A(qs, t),
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
    s(this);
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
            B(`CThumbnailCache:: cant measure ${u}, error: ${e}`);
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
        n = await Ln(
          e[0].strRecordingID,
          e[0].strClipID,
          void 0,
          t,
          e[0].cPxMajorAxis,
          e[0].bPreciseTiming,
        );
      It(
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
      V(`Failed to load multiple request thumbnails`, t);
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
      let e = await Ln(t, n, void 0, [r * 1e3], a, o);
      if (e?.length > 0) {
        let t = e ? e[0].image_data() : null;
        return (this.SetThumbnailData(s, { data: t, bIsLoading: !1 }), !0);
      }
      hn(`ThumbnailImage: got empty jpeg ${e.length} list back ${t} @ ${r}`);
    } catch (e) {
      (V(`ThumbnailImage: Fail to load thumbnail ${t} @ ${r} with ${e}`),
        this.SetThumbnailData(s, { data: null, bIsLoading: !1 }));
    }
    return !1;
  }
  static s_Singleton;
  static Get() {
    return ((e.s_Singleton ||= new e()), e.s_Singleton);
  }
};
E([l], tl.prototype, `m_mapThumbnailImages`, void 0);
function nl(e) {
  let t = (0, R.useRef)(null),
    n = kt(),
    r = h(`useThumbnailAsURL`);
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
function rl() {
  return tl.Get().GetPerfMeasures();
}
function il(e, t, n, r, i, a, o) {
  return nl(f(() => tl.Get().GetOrQueueThumbnail(e, n, t, r, i, a, o))?.data);
}
var al = 320,
  ol = R.forwardRef(function (e, t) {
    let { globalMS: n, children: r, imgClassName: i, className: a, ...o } = e,
      s = Y(),
      c = s.GetGameID(),
      l = s.GetClipID(),
      u = f(() => s.GetRecordingMode()),
      d = f(() => s.ConvertGlobaOffsetToRecordingAndRelativeOffset(n));
    ro();
    let p = d?.nRecordingOffsetMS,
      m = il(c, l, d?.strRecordingID, p, d?.nStartOffsetMS, al, !1),
      [h, g] = (0, R.useState)();
    return (
      (0, R.useEffect)(() => {
        m && g(m);
      }, [m]),
      (0, q.jsxs)(`div`, {
        ref: t,
        className: A(lc, sc[u], a),
        ...o,
        children: [
          (0, q.jsxs)(`div`, {
            className: A(uc, d?.strRecordingID && !h && `ap-Q4oooopI-`, sc[u]),
            children: [
              (0, q.jsx)(`div`, {
                className: fc,
                children: (0, q.jsxs)(`div`, {
                  className: pc,
                  children: [
                    d?.strRecordingID
                      ? (0, q.jsx)(`img`, { className: mc, src: h })
                      : (0, q.jsx)(`div`, {
                          className: hc,
                          children: P(`#GameRecording_PlayerNoContent`),
                        }),
                    (0, q.jsx)(sl, {}),
                  ],
                }),
              }),
              (0, q.jsx)(`div`, { className: A(Tc), children: r }),
            ],
          }),
          (0, q.jsx)(`div`, { className: A(Sc) }),
        ],
      })
    );
  });
function sl() {
  let e = $(),
    t = f(() => e.GetGameID()),
    n = f(() => e.GetThumbnailComponent()),
    r = f(() => e.GetThumbnailEntry());
  if (!r || n !== Z.Highlight) return null;
  if (Li(r.entry))
    return (0, q.jsx)(cl, {
      thumbnailEntry: r,
      achievementEntry: r.entry,
      strGameID: t,
    });
  let i = ``,
    a = ``;
  return (
    Ri(r.entry)
      ? (a = P(r.entry.description) || `#GameRecording_UnknownError`)
      : zi(r.entry)
        ? ((i = r.entry.title ? r.entry.title : P(`#Marker_UserMarker_Title`)),
          (a = r.entry.description || ``))
        : Ii(r.entry) &&
          ((i = r.entry.title || ``), (a = r.entry.description || ``)),
    !i && !a
      ? null
      : (0, q.jsx)(ll, { title: i, description: a, thumbnailEntry: r })
  );
}
function cl(e) {
  let { strGameID: t, thumbnailEntry: n, achievementEntry: r } = e,
    i = Hn(new Gi(t).GetAppID(), r.achievement_name);
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
var ul = R.forwardRef(function (e, t) {
  let { globalPX: n, onMouseEnter: r, onMouseLeave: i } = e,
    a = $(),
    o = f(() => a.ConvertPXOffsetToGlobalMS(n, !1)),
    s = f(() => a.GetThumbnailComponent()),
    c = Y(),
    l = f(() => c.GetRecordingMode());
  return (0, q.jsxs)(ol, {
    className: A(Oc, sc[l], sc[s]),
    globalMS: o,
    ref: t,
    onMouseEnter: r,
    onMouseLeave: i,
    children: [
      (0, q.jsx)(pl, { globalMS: o }),
      (0, q.jsx)(dl, { globalMS: o }),
      (0, q.jsxs)(`div`, {
        className: Fc,
        children: [
          s === Z.Highlight
            ? (0, q.jsx)(ml, {})
            : (0, q.jsx)(hl, { globalPX: n }),
          (0, q.jsx)(gl, { globalMS: o }),
        ],
      }),
    ],
  });
});
function dl(e) {
  let { globalMS: t } = e,
    n = $(),
    r = f(() => n.GetStateDescriptionAtGlobalMS(t));
  return r?.title
    ? (0, q.jsx)(`div`, { className: Ic, children: r.title })
    : null;
}
function fl(e, t) {
  return e.priority - t.priority;
}
function pl(e) {
  let { globalMS: t } = e,
    { setSelectedMarker: n } = no(),
    r = $(),
    i = Y(),
    a = f(() => r.FindRangeEventsAtGlobalMS(t)),
    o = a.length > 3 ? a.sort(fl).slice(0, 3) : a,
    s = (e, r) => {
      let a = parseInt(r.duration),
        { nTimelineOffsetMS: o, strTimelineID: s } =
          i.ConvertGlobalOffsetToTimelineRelativeOffset(t),
        c = t - o.valMS + parseInt(r.time),
        [l, u] = i.GetLoader().CreateGlobalRangeForTimeline(s, c, 0, a);
      (i.SetPlaytimeFromGlobalMS(G(l)),
        n?.(r.id, s, l, u),
        L.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromRangeEvent`),
        e.stopPropagation());
    };
  return (0, q.jsx)(q.Fragment, {
    children: o.map((e, t) =>
      (0, q.jsxs)(
        `div`,
        {
          className: Xc,
          onClick: (t) => s(t, e),
          children: [
            e.icon &&
              (0, q.jsx)(Oa, {
                gameID: i.GetGameID(),
                icon: e.icon,
                className: `zjZlS00iLU4-`,
              }),
            (0, q.jsx)(`div`, { className: bc, children: e.title }),
            (0, q.jsx)(`div`, {
              className: Zc,
              children: Ct(parseInt(e.duration) / 1e3, !1),
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
    t = f(() => e.GetRecordingMode()),
    n = $(),
    r = f(() => n.GetThumbnailEntry());
  if (!r) return null;
  let i = n.GetTimelineOffsetMS(r.strTimelineID),
    a = Hi(parseInt(r.entry.time) - i),
    o = e.MakeRelativeToTimelineEndIfActive(r.strTimelineID, a.valMS),
    s = ``;
  if (Fi(r.entry)) {
    let e = o + parseInt(r.entry.duration);
    if (o < 0) {
      let t = Ct(Math.abs(o / 1e3), !1, !1),
        n = Ct(Math.abs(e / 1e3), !1, !1);
      s = P(`#Duration_WrittenNegation`, t + ` - ` + n);
    } else {
      let t = Ct(o / 1e3, !1, !1),
        n = Ct(e / 1e3, !1, !1);
      s = t + ` - ` + n;
    }
  } else s = Ct(o / 1e3, !1, !0);
  return (0, q.jsx)(`div`, { className: A(Ac, kc, sc[t]), children: s });
}
function hl(e) {
  let { globalPX: t } = e,
    n = $(),
    r = f(() => n.ConvertPXToTimelineRelativeMS(t, `end-if-active`));
  return r
    ? (0, q.jsx)(`div`, { className: Ac, children: Ct(r / 1e3, !1, !0) })
    : null;
}
function gl(e) {
  let { globalMS: t } = e,
    n = $(),
    r = f(() => n.GetGameID()),
    i = f(() => n.GetThumbnailComponent()),
    a = f(() => n.GetThumbnailEntry()),
    o = [
      (0, q.jsx)(Sl, { globalMS: t }, `add_marker`),
      (0, q.jsx)(Cl, { globalMS: t }, `view_clip`),
    ];
  return (
    i == Z.Highlight &&
      a &&
      (Ri(a.entry) || Li(a.entry) || Ii(a.entry)
        ? (o = [
            (0, q.jsx)(_l, { markerInfo: a }, `create_marker_clip`),
            (0, q.jsx)(vl, { markerInfo: a }, `view_clip`),
          ])
        : Bi(a.entry)
          ? (o = [
              (0, q.jsx)(_l, { markerInfo: a }, `create_marker_clip`),
              (0, q.jsx)(xl, { entry: a.entry, gameID: r }, `view_screen`),
              (0, q.jsx)(vl, { markerInfo: a }, `view_clip`),
            ])
          : zi(a.entry) &&
            (o = [
              (0, q.jsx)(bl, { markerInfo: a }, `edit_user`),
              (0, q.jsx)(_l, { markerInfo: a }, `create_marker_clip`),
              (0, q.jsx)(yl, { markerInfo: a }, `delete_user`),
              (0, q.jsx)(vl, { markerInfo: a }, `view_clip`),
            ])),
    (0, q.jsx)(`div`, { className: Lc, children: o })
  );
}
function _l(e) {
  let { setSelectedMarker: t } = no(),
    { markerInfo: n } = e,
    r = Y(),
    i = f(() => r.ShouldModeShowClipControls()),
    a = f(() =>
      r.ConvertGlobaOffsetToRecordingAndRelativeOffset(n.nGlobalMS.valMS),
    ),
    o = Wn(),
    s = oo();
  return !a?.strRecordingID || !i
    ? null
    : (0, q.jsx)(M, {
        toolTipContent: P(
          o ? `#RecordingState_Clip_LowDiskSpace` : `#TimelineDialog_ClipVideo`,
        ),
        direction: `top`,
        bTopmost: !0,
        children: (0, q.jsx)(`div`, {
          className: A(Rc, Vc),
          onClick: (e) => {
            let i = bs,
              a = xs;
            Fi(n.entry) && ((i = 0), (a = parseInt(n.entry.duration)));
            let [o, c] = r
              .GetLoader()
              .CreateGlobalRangeForTimeline(
                n.strTimelineID,
                n.nGlobalMS.valMS,
                i,
                a,
              );
            (r.SetPlaytimeFromGlobalMS(G(o)),
              t?.(n.entry.id, n.strTimelineID, o, c),
              s(),
              L.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromHighlight`),
              e.stopPropagation());
          },
          children: (0, q.jsx)(qe, {}),
        }),
      });
}
function vl(e) {
  let { markerInfo: t } = e,
    n = $(),
    r = f(() => n.ConvertGlobalMSToClipOrNone(t.nGlobalMS.valMS)),
    { onNavigateToClip: i } = zo();
  return r
    ? (0, q.jsx)(M, {
        toolTipContent: P(`#TimelineDialog_ViewClip`),
        direction: `top`,
        bTopmost: !0,
        children: (0, q.jsx)(`div`, {
          className: A(Rc, Wc),
          onClick: () => {
            r &&
              (L.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/${t.entry.type}`,
              ),
              i(r.clipID));
          },
          children: (0, q.jsx)(Et, {}),
        }),
      })
    : null;
}
function yl(e) {
  let { markerInfo: t } = e,
    n = Y(),
    r = $();
  return (0, q.jsx)(M, {
    toolTipContent: P(`#Marker_Action_Delete`),
    direction: `top`,
    bTopmost: !0,
    children: (0, q.jsx)(`div`, {
      className: A(Rc, Uc),
      onClick: (e) => {
        zi(t.entry) &&
          (L.ReportTrackedAction(
            `/GameRecording/Marker/Delete/${t.entry.type}`,
          ),
          n.RemoveUserMarker(t.strTimelineID, t.entry.id),
          r.SetThumbnailComponent(null));
      },
      children: (0, q.jsx)(ft, {}),
    }),
  });
}
function bl(e) {
  let { markerInfo: t } = e,
    n = Y(),
    r = io();
  return (0, q.jsx)(M, {
    toolTipContent: P(`#Marker_Action_Edit`),
    direction: `top`,
    bTopmost: !0,
    children: (0, q.jsx)(`div`, {
      className: A(Rc, Hc),
      onClick: (e) => {
        if (!zi(t.entry)) return;
        L.ReportTrackedAction(`/GameRecording/Marker/Edit/${t.entry.type}`);
        let i = (0, q.jsx)(qo, {
          entry: t.entry,
          playbackCoordinator: n,
          fnClearSelection: r,
          strTimelineID: t.strTimelineID,
        });
        (tt(i, Lt(e)), e.stopPropagation(), e.preventDefault());
      },
      children: (0, q.jsx)(ue, {}),
    }),
  });
}
function xl(e) {
  let { entry: t, gameID: n } = e,
    r = t.handle,
    { onNavigateToScreenshot: i } = zo();
  return (0, q.jsx)(M, {
    toolTipContent: P(`#TimelineDialog_ViewScreenshot`),
    direction: `top`,
    bTopmost: !0,
    children: (0, q.jsx)(`div`, {
      className: A(Rc, Gc),
      onClick: () => {
        r &&
          (L.ReportTrackedAction(`/GameRecording/Tooltip/Screenshot`), i(n, r));
      },
      children: (0, q.jsx)(Re, {}),
    }),
  });
}
function Sl(e) {
  let { globalMS: t } = e,
    n = Y();
  return f(() => n.ConvertGlobaOffsetToRecordingAndRelativeOffset(t))
    ?.strRecordingID
    ? (0, q.jsx)(M, {
        toolTipContent: P(`#TimelineDialog_AddMarker`),
        direction: `top`,
        children: (0, q.jsx)(`div`, {
          className: A(Rc, zc),
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
    r = f(() => n.ConvertGlobalMSToClipOrNone(t)),
    { onNavigateToClip: i } = zo();
  return r
    ? (0, q.jsx)(M, {
        toolTipContent: P(`#TimelineDialog_ViewClip`),
        direction: `top`,
        children: (0, q.jsx)(`div`, {
          className: A(Rc, Bc),
          onClick: () => {
            r &&
              (L.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/timeline`,
              ),
              i(r.clipID));
          },
          children: (0, q.jsx)(Et, {}),
        }),
      })
    : null;
}
var wl = R.memo(function (e) {
    let t = os(),
      n = us(),
      r = $(),
      i = Y(),
      a = ps(),
      o = (0, R.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            a = N(e.clientX - t.x, 0, t.width),
            o = r.ConvertPXOffsetToGlobalMS(a, !1);
          o && i.SetPlaytimeFromGlobalMS(G(o), void 0, void 0, !0);
        },
        [n, i, r],
      ),
      s = (0, R.useCallback)(
        (e) => {
          if (!n) return;
          let t = e.currentTarget.getBoundingClientRect(),
            i = N(e.clientX - t.x, 0, t.width),
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
  Tl = R.memo(function (e) {
    let { globalMouseXPX: t } = e,
      n = ls(),
      r = $(),
      i = us(),
      a = f(() => {
        if (r.GetThumbnailComponent()) return r.GetThumbnailPosition();
      }),
      [o, s] = (0, R.useState)(),
      [c, l] = (0, R.useState)();
    return (
      (0, R.useEffect)(() => {
        isNaN(a) ? !c && n && s(t) : s(a);
      }, [c, n, i, t, a]),
      (0, q.jsx)(`div`, {
        className: Hs,
        style: { transform: `translateX( calc(${o}px - 50%))` },
        children: (0, q.jsx)(El, {
          globalPX: o,
          setInteractingWithThumbnail: l,
          bInteractingWithThumbnail: c,
        }),
      })
    );
  });
function El(e) {
  let {
      globalPX: t,
      setInteractingWithThumbnail: n,
      bInteractingWithThumbnail: r,
    } = e,
    i = $(),
    a = Y(),
    o = f(() => a.GetRecordingMode() === `Overlay`),
    s = f(() => i.ConvertPXOffsetToGlobalMS(t, !1)),
    c = f(() => i.GetTimelineParentCtnRef()),
    l = (0, R.useRef)(void 0),
    u = (0, R.useRef)(void 0),
    d = (0, R.useRef)(void 0),
    p = f(() => i.GetThumbnailComponent()),
    m = us(),
    h = nt({
      toolTipContent: (0, q.jsx)(ul, {
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
    { setHovered: g, setTarget: _ } = h.stateHandlers,
    v = (0, R.useCallback)(() => {
      (g(!1),
        n(!1),
        d.current && d.current(),
        (d.current = null),
        i.GetAutoScrollPaused() && i.SetAutoScrollPauseTimeout(),
        i.SetThumbnailComponent(null));
    }, [n, g, i]),
    y = (0, R.useCallback)(
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
        (e <= r || e >= i || t <= a || t >= s) && v();
      },
      [o, v],
    ),
    ee = (0, R.useCallback)(
      (e) => {
        let t = i.GetThumbnailComponent();
        (t && t !== Z.Highlight) || y(e.clientX, e.clientY);
      },
      [y, i],
    ),
    te = (0, R.useCallback)(
      (e) => {
        y(e.clientX, e.clientY);
      },
      [y],
    );
  (fs(
    `mouseenter`,
    (0, R.useCallback)(() => {
      (g(!0), _(u.current));
      let e = jt(u.current);
      e &&
        !d.current &&
        (e.addEventListener(`mousemove`, ee),
        e.addEventListener(`mouseup`, te),
        (d.current = () => {
          (e.removeEventListener(`mousemove`, ee),
            e.removeEventListener(`mouseup`, te));
        }));
    }, [ee, te, g, _]),
  ),
    (0, R.useEffect)(() => {
      let e = (e) => {
        let t = i.GetThumbnailComponent();
        (t && t === Z.Playhead) ||
          t === Z.RangeLeft ||
          t === Z.RangeRight ||
          (l.current && !bt(l.current, e.relatedTarget) && v());
      };
      return (
        c && c.addEventListener(`mouseleave`, e),
        () => c && c.removeEventListener(`mouseleave`, e)
      );
    }, [v, c, i]),
    (0, R.useEffect)(() => v, [v]));
  let ne = (m || r) && s && !p;
  return (0, q.jsxs)(`div`, {
    ref: u,
    className: Us,
    children: [
      (0, q.jsx)(rc, { className: A(Ws, ne && `_52Luj95k6TU-`) }),
      !!s && h.tooltip,
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
  Il = (0, R.memo)(function () {
    let [e, t] = (0, R.useState)(`none`),
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
  Ll = (0, R.memo)(function (e) {
    let { activeControlState: t, setActiveControlState: n } = e,
      [r, i] = (0, R.useState)(),
      [a, o] = (0, R.useState)(),
      s = Za(),
      c = Qa(),
      l = $(),
      u = f(() => l.ConvertGlobalMSToGlobalPXOffset(s.valMS)),
      d = f(() => l.ConvertGlobalMSToGlobalPXOffset(c.valMS)),
      p = (0, R.useCallback)(
        (e) => {
          (i(e), l.SetAutoScrollPauseTimeout());
        },
        [l],
      ),
      m = (0, R.useCallback)(
        (e) => {
          (o(e), l.SetAutoScrollPauseTimeout());
        },
        [l],
      ),
      h = (0, R.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      ),
      g = (0, R.useCallback)(
        (e) => {
          t === `none` && e.stopPropagation();
        },
        [t],
      );
    return (0, q.jsx)(`div`, {
      className: A(Ol, t !== `none` && `r9kdAFASyBY-`),
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
            pxOffset: r,
          }),
          (0, q.jsx)(Kl, {
            startOffsetPX: (t === `left` && r) || u,
            endOffsetPX: (t === `right` && a) || d,
            className: Al,
          }),
          (0, q.jsx)(Hl, {
            isActive: t === `right`,
            setControlState: n,
            setRangeControlPX: m,
            pxOffset: a,
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
  n(N(e, a, o));
}
function zl(e, t, n, r, i, a) {
  let o = (0, R.useRef)(void 0),
    s = (0, R.useRef)(!1),
    c = (0, R.useRef)(void 0),
    l = (0, R.useRef)(void 0),
    u = f(() => t.GetScrollableWidthPX()),
    d = f(() => t.GetScrollWindowWidth());
  (0, R.useEffect)(
    () => () => {
      c.current &&
        (cancelAnimationFrame(c.current),
        (c.current = null),
        (l.current = null));
    },
    [],
  );
  let p = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (a(N(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(c.current),
          (c.current = null),
          (l.current = null));
      else {
        if (
          ((c.current &&= requestAnimationFrame((e) => p(e, t, n, r, i))),
          l.current)
        ) {
          let n = ((e - l.current) / Fl) * r;
          (t.ScrollBy(n), a((e) => N(e + n, 0, t.GetScrollableWidthPX())));
        }
        l.current = e;
      }
    },
    [a],
  );
  (0, R.useEffect)(() => {
    c.current &&
      (cancelAnimationFrame(c.current), (c.current = null), (l.current = null));
    let f = d * (1 - rd),
      m = d * rd,
      h = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      g = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (r.valPX > h) (a(h), i(`right`), t.SetThumbnailComponent(Z.RangeRight));
    else {
      if (e.valPX < m && !t.BReachedMinScroll()) {
        if (e.valPX > o.current) s.current = !0;
        else if (e.valPX < o.current || !s.current) {
          let n = Math.min(m, g),
            r = e.valPX - n,
            i = N(Math.abs(r / n), 0, 1) * r;
          ((c.current = requestAnimationFrame((n) =>
            p(n, t, e.valPX, i, t.BReachedMinScroll),
          )),
            (s.current = !1));
        }
        Rl(r.valPX, t, a);
      } else if (e.valPX > f && g > f && !t.BReachedMaxScroll()) {
        if (e.valPX < o.current) s.current = !0;
        else if (e.valPX > o.current || !s.current) {
          let r = (e) => {
              let t = e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
              return e.BReachedMaxScroll() || t <= f;
            },
            i = e.valPX - f,
            a = N(Math.abs(i / (d - f)), 0, 1) * i;
          ((c.current = requestAnimationFrame((n) => p(n, t, e.valPX, a, r))),
            (s.current = !1));
        }
        Rl(r.valPX, t, a);
      } else a(N(r.valPX, 0, u));
      o.current = e.valPX;
    }
  }, [r.valPX, n.valMS, e.valPX, i, t, a, u, p, d]);
}
var Bl = (0, R.memo)(function (e) {
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
    (0, R.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, G(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, q.jsx)(ql, { offsetPX: r, direction: `left` })
  );
}
var Hl = (0, R.memo)(function (e) {
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
    (0, R.useEffect)(() => {
      isNaN(r) ||
        (o.SetThumbnailPosition(r), i(5, G(o.ConvertPXOffsetToGlobalMS(r))));
    }, [r, i, o]),
    (0, q.jsx)(ql, { offsetPX: r, direction: `right` })
  );
}
function Wl(e, t, n, r, i, a) {
  let o = (0, R.useRef)(void 0),
    s = (0, R.useRef)(!1),
    c = (0, R.useRef)(void 0),
    l = (0, R.useRef)(void 0),
    u = f(() => t.GetScrollableWidthPX()),
    d = f(() => t.GetScrollWindowWidth());
  (0, R.useEffect)(
    () => () => {
      c.current &&
        (cancelAnimationFrame(c.current),
        (c.current = null),
        (l.current = null));
    },
    [],
  );
  let p = R.useCallback(
    (e, t, n, r, i) => {
      if (i(t))
        (a(N(t.GetVisualWindowStartPX() + n, 0, t.GetScrollableWidthPX())),
          cancelAnimationFrame(c.current),
          (c.current = null),
          (l.current = null));
      else {
        if (
          ((c.current &&= requestAnimationFrame((e) => p(e, t, n, r, i))),
          l.current)
        ) {
          let n = ((e - l.current) / Fl) * r;
          (t.ScrollBy(n), a((e) => N(e + n, 0, t.GetScrollableWidthPX())));
        }
        l.current = e;
      }
    },
    [a],
  );
  (0, R.useEffect)(() => {
    c.current &&
      (cancelAnimationFrame(c.current), (c.current = null), (l.current = null));
    let f = d * (1 - rd),
      m = d * rd,
      h = t.ConvertGlobalMSToGlobalPXOffset(n.valMS),
      g = t.ConvertGlobalMSToScrollWindowPXOffset(n.valMS);
    if (r.valPX < h) (a(h), i(`left`), t.SetThumbnailComponent(Z.RangeLeft));
    else {
      if (e.valPX > f && !t.BReachedMaxScroll()) {
        if (e.valPX < o.current) s.current = !0;
        else if (e.valPX > o.current || !s.current) {
          let n = Math.max(f, g),
            r = e.valPX - n,
            i = N(Math.abs(r / (d - n)), 0, 1) * r;
          ((c.current = requestAnimationFrame((n) =>
            p(n, t, e.valPX, i, t.BReachedMaxScroll),
          )),
            (s.current = !1));
        }
        Rl(r.valPX, t, a);
      } else if (
        e.valPX < m &&
        g < m &&
        e.valPX <= o.current &&
        !t.BReachedMinScroll()
      ) {
        if (e.valPX > o.current) s.current = !0;
        else if (e.valPX < o.current || !s.current) {
          let r = e.valPX - m,
            i = N(Math.abs(r / m), 0, 1) * r,
            a = (e) =>
              e.ConvertGlobalMSToScrollWindowPXOffset(n.valMS) > m ||
              e.BReachedMinScroll();
          ((c.current = requestAnimationFrame((n) => p(n, t, e.valPX, i, a))),
            (s.current = !1));
        }
        Rl(r.valPX, t, a);
      } else a(N(r.valPX, 0, u));
      o.current = e.valPX;
    }
  }, [n.valMS, e.valPX, i, t, a, u, d, r.valPX, p]);
}
function Gl(e) {
  let {
      offsetMS: t,
      direction: n,
      setControlState: r,
      setRangeControlPX: i,
    } = e,
    a = $(),
    o = f(() => a.ConvertGlobalMSToGlobalPXOffset(t));
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
        let t = Lt(e),
          i,
          o,
          s = () => {
            (r(n),
              a.SetThumbnailComponent(
                n === `left` ? Z.RangeLeft : Z.RangeRight,
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
      a.SetThumbnailComponent(n === `left` ? Z.RangeLeft : Z.RangeRight);
    },
    l = (e) => {
      a.SetThumbnailComponent(null);
    };
  return (0, q.jsx)(`div`, {
    className: kl,
    onMouseDown: s,
    onMouseOver: c,
    onFocus: c,
    onMouseOut: l,
    onBlur: l,
    children: (0, q.jsx)(ql, { offsetPX: o, direction: n }),
  });
}
var Kl = (0, R.memo)(function (e) {
    let { startOffsetPX: t, endOffsetPX: n, className: r } = e;
    if (isNaN(t) || isNaN(n)) return null;
    let i = { width: n - t || 0, transform: `translateX(${t}px)` };
    return (0, q.jsx)(`div`, { className: A(Pl, r), style: i });
  }),
  ql = (0, R.memo)(function (e) {
    let { direction: t, offsetPX: n } = e,
      r = { transform: `translateX( calc( ${n}px - 50%) )` },
      i = $(),
      a = f(() => i.GetThumbnailComponent() === Z.Playhead);
    return (0, q.jsx)(`div`, {
      style: r,
      className: A(Nl),
      children: (0, q.jsx)(`div`, {
        className: A(jl, t === `left` && void 0, a && `o23F9bJf68E-`),
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
  Zl = R.memo(function (e) {
    let t = $(),
      n = f(() => t.GetVisibleWindowRelativeTimelines()),
      r = Y().GetRecordingMode(),
      i = [],
      a = ``;
    for (let e of n) {
      let n = t.GetTimeRecorded(e.timelineID),
        r = yt(n);
      r != a && (i.push({ timeline: e, strLabel: r }), (a = r));
    }
    for (let e = i.length - 2; e >= 0; e--) {
      let t = i[e];
      i[e + 1].timeline.nVisibleStartPX - t.timeline.nVisibleStartPX >= Xl ||
        i.splice(e, 1);
    }
    return (0, q.jsx)(q.Fragment, {
      children: i.map((e) =>
        (0, q.jsx)(
          Ql,
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
function Ql(e) {
  let { label: t, startPX: n, recordingMode: r } = e,
    i = r == sa.Overlay;
  return (0, q.jsx)(`div`, {
    className: A(Yl, i && `r-oc0eIT1Lw-`),
    style: { transform: `translateX(${n}px)` },
    children: t,
  });
}
var $l = `rpb9NP30tgc-`,
  eu = `JCH5UEpUzxo-`,
  tu = (0, R.memo)(function (e) {
    let t = $(),
      n = f(() => t.GetVisibleRecordings());
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
        className: A(
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
    r = $(),
    i = f(() => n.GetRecordingMode() === `Overlay`),
    a = oa(n.GetGameID()),
    o = f(() => n.GetIsLiveEdge() && !n.GetHidePlayer()),
    s = f(() => {
      let e = n.GetLiveEdgeBufferWindowStartMS();
      return r.ConvertGlobalMSToGlobalPXOffset(e.valMS);
    });
  if (!i || a !== aa.BackgroundRecording) return null;
  let c = { width: t - s || 0, transform: `translateX(${s}px)` };
  return (0, q.jsx)(`div`, { className: A(eu, o && `ObPDU8jrJGI-`), style: c });
}
var iu = `etyWD-mczjA-`,
  au = (0, R.memo)(function (e) {
    let t = $(),
      n = f(() => t.GetVisibleClips());
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
  ou = (0, R.memo)(function (e) {
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
    n = f(() => t.GetIsLiveEdge() && !t.GetHidePlayer()),
    r = R.useCallback(() => {
      (t.SetHidePlayer(!1), t.GetGameRecordingVideo().Play());
      let e = t.GetLiveEdgeMS();
      (t.SetPlaytimeFromGlobalMS(e), t.FocusGlobalMS(e));
    }, [t]);
  return (0, q.jsx)(M, {
    className: yu,
    toolTipContent: P(n ? `#Playback_AtLatest` : `#Playback_JumpToLatest`),
    direction: `bottom`,
    children: (0, q.jsx)(rt, {
      onClick: r,
      className: A(bu, n && `FuL7350j26I-`),
      children: (0, q.jsx)(ve, { className: A(xu) }),
    }),
  });
}
var wu = (0, R.forwardRef)(function (e, t) {
    let n = $();
    return f(() => !n.BEmpty())
      ? (0, q.jsx)(Eu, { ...e, timelineView: n, ref: t })
      : (0, q.jsx)(Tu, { ref: t });
  }),
  Tu = (0, R.forwardRef)(function (e, t) {
    return (0, q.jsx)(`div`, { ref: t, className: A(cu, e.className) });
  }),
  Eu = (0, R.forwardRef)(function (e, t) {
    let n = Y(),
      { children: r, className: i, timelineView: a, disableZoom: o } = e,
      [s, c] = (0, R.useState)(),
      l = R.useCallback(
        (e) => {
          let t = e.target.getBoundingClientRect();
          (a.SetScrollWindowOffset(t.x), a.SetScrollWindowWidth(t.width), c(t));
        },
        [a],
      ),
      u = st(l),
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
                className: A(su, i),
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
    n = f(() => t.GetVisualWindowStartPX()),
    r = f(() => t.BReachedMaxScroll());
  return (0, q.jsxs)(`div`, {
    className: uu,
    children: [
      (0, q.jsx)(`div`, { className: A(du, n === 0 && `geyoRt0NNcM-`) }),
      (0, q.jsx)(`div`, { className: A(fu, r && `geyoRt0NNcM-`) }),
    ],
  });
}
function Ou() {
  let [e, t] = (0, R.useState)({ scrollBarWidth: 0, scrollBarXOffset: 0 }),
    n = R.useCallback((e) => {
      let n = e.target.getBoundingClientRect();
      t({ scrollBarWidth: n.width, scrollBarXOffset: n.x });
    }, []),
    r = $(),
    i = f(() => r.GetScrollableWidthPX() + 2 * r.GetTimelineMarginWidth()),
    a = f(() => r.GetVisualWidth()),
    o = (0, R.useMemo)(
      () => (a * e.scrollBarWidth) / i || 0,
      [a, e.scrollBarWidth, i],
    ),
    s = st(n);
  return (0, q.jsxs)(`div`, {
    className: A(
      mu,
      Math.round(o) === Math.round(e.scrollBarWidth) && `cyfpsKb1Pow-`,
    ),
    ref: s,
    children: [
      (0, q.jsx)(ku, { timelineView: r, scrollSize: e }),
      (0, q.jsx)(Pu, {
        scrollSize: e,
        timelineView: r,
        timelineWidth: i,
        thumbWidth: o,
      }),
    ],
  });
}
function ku(e) {
  let { timelineView: t, scrollSize: n } = e,
    r = Y(),
    i = Au(t, n),
    a = f(() => t.GetTimelineMarginWidth()),
    o = f(() => t.GetScrollableWidthPX()),
    s = (0, R.useCallback)(
      (e) => {
        let t = e + a;
        return N((t * n.scrollBarWidth) / o, 0, n.scrollBarWidth);
      },
      [n.scrollBarWidth, a, o],
    );
  return (0, q.jsxs)(`div`, {
    className: hu,
    ...i,
    children: [
      (0, q.jsx)(ju, {
        timelineView: t,
        playbackCoordinator: r,
        fnConvertGlobalPXToTrackPX: s,
        scrollBarWidth: n.scrollBarWidth,
      }),
      (0, q.jsx)(Nu, { timelineView: t, fnConvertGlobalPXToTrackPX: s }),
    ],
  });
}
function Au(e, t) {
  let n = (0, R.useRef)(void 0),
    r = (0, R.useRef)(void 0),
    i = f(() => e.GetScrollableWidthPX()),
    a = (0, R.useCallback)(
      (e) => Ui((i * e) / t.scrollBarWidth),
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
function ju(e) {
  let {
      timelineView: t,
      playbackCoordinator: n,
      fnConvertGlobalPXToTrackPX: r,
      scrollBarWidth: i,
    } = e,
    a = f(() => n.GetHidePlayer()),
    o = f(() => {
      let e = n.GetGlobalMSPlaytime();
      if (e && t.BInitialized()) {
        let n = Math.floor(t.ConvertGlobalMSToGlobalPXOffset(e.valMS));
        return r(n);
      }
      return null;
    });
  return o
    ? (0, q.jsx)(`div`, {
        className: gu,
        onClick: () => {
          let e = n.GetGlobalMSPlaytime();
          (a && (e = n.GetLiveEdgeMS()), t.ScrollToCenteredGlobalMS(e.valMS));
        },
        style: { transform: `translateX(${a ? i : o}px)` },
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
    r = ro(),
    i = Xa(),
    a = f(() => {
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
    ? (0, q.jsx)(`div`, {
        className: _u,
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
function Pu(e) {
  let { scrollSize: t, timelineWidth: n, thumbWidth: r, timelineView: i } = e,
    { thumbPositionPX: a, onMouseDown: o, bHiglightThumb: s } = Fu(t, n, r, i);
  return (0, q.jsx)(`div`, {
    className: A(vu, s && `jBCmf-dRAeA-`),
    style: { width: r, transform: `translateX(${a}px)` },
    onMouseDown: o,
  });
}
function Fu(e, t, n, r) {
  let [i, a] = (0, R.useState)(!1),
    [o, s] = (0, R.useState)(0),
    c = f(() => {
      let i = r.BInitialized(),
        a = r.GetVisualWindowStartPX();
      return i ? N((a * e.scrollBarWidth) / t, 0, e.scrollBarWidth - n) : 0;
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
  let p = (0, R.useCallback)(
      (t) => {
        (s(c), a(!0));
        let n = t.nativeEvent.offsetX,
          i = r.GetTimelineParentCtnRef() ?? Lt(t),
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
    m = (0, R.useMemo)(
      () => (i ? N(o, 0, e.scrollBarWidth - n) : c),
      [o, i, c, e.scrollBarWidth, n],
    );
  return (
    (0, R.useEffect)(() => {
      if (i) {
        let n = (t * m) / e.scrollBarWidth;
        r.ScrollToOffset(n);
      }
    }, [i, e.scrollBarWidth, m, r, t]),
    { thumbPositionPX: m, onMouseDown: p, bHiglightThumb: l }
  );
}
function Iu(e, t) {
  let n = f(
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
r();
var Lu = class {
  m_tours = {};
  m_strActiveTour = ``;
  m_storage = void 0;
  m_bReady = !1;
  constructor() {
    s(this);
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
(E([l], Lu.prototype, `m_tours`, void 0),
  E([l], Lu.prototype, `m_strActiveTour`, void 0),
  E([l], Lu.prototype, `m_bReady`, void 0),
  E([u.bound], Lu.prototype, `UpdateStop`, null),
  E([u], Lu.prototype, `ActivateTour`, null),
  E([u], Lu.prototype, `DismissTour`, null));
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
  let e = Tt();
  return (
    (0, R.useEffect)(() => {
      Vu.Init(e);
    }, [e]),
    Vu
  );
}
function Uu(e) {
  let t = Hu(),
    { bShowTour: n, stopElems: r } = f(() => ({
      bShowTour: !t.BHasSeenTour(e),
      stopElems: t.GetTrackedStops(e),
    }));
  return {
    bShowTour: n,
    stopElems: r,
    onInteraction: (0, R.useCallback)(() => t.MarkTourSeen(e), [t, e]),
    onDismiss: (0, R.useCallback)(() => t.DismissTour(e), [t, e]),
    onActivate: (0, R.useCallback)(() => t.ActivateTour(e), [t, e]),
    updateStop: t.UpdateStop,
  };
}
function Wu(e) {
  let { name: t, tour: n, options: r, children: i } = e,
    { updateStop: a } = Uu(n),
    o = (0, R.useCallback)((e) => a(n, t, r, e), [a, n, t]),
    s = R.Children.only(i),
    c = it(o, s.props.ref);
  return (0, R.cloneElement)(R.Children.only(i), { ref: c });
}
var Gu = `ntKPAM1NZ9k-`,
  Ku = `JXv-qDT9fmY-`,
  qu = `Rg3Qyz2aIKM-`;
function Ju(e) {
  let t = $(),
    n = f(() => t.GetVisibleTimelines());
  return (0, q.jsx)(q.Fragment, {
    children: n.flatMap((e) =>
      e.phaseOffsets.map((t, n) =>
        (0, R.createElement)(Yu, {
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
      timelineOffsetMS: r,
      nDurationMS: i,
      phase: a,
    } = e,
    o = $(),
    s = Y(),
    c = ss()?.valPX || -1,
    l = ls(),
    [u] = ds(),
    {
      pxStart: d,
      pxWidth: p,
      bHighlight: m,
    } = f(() => {
      let e = o.GetPhaseToHighlight();
      return {
        pxStart: o.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS + r),
        pxWidth: o.ConvertDurationMSToDeltaPX(i),
        bHighlight:
          e && e[0] === n.timelineID && e[1] === a.background_timeline_offset,
      };
    }),
    h = (l || u) && c >= d && c <= d + p,
    [g, _] = ma(),
    v = () => {
      let e = s.GetLoader(),
        t = e.GetTimelineData(n.timelineID),
        i = e.GetTimelineMetadata(n.timelineID),
        a = t.m_rgPhases.find((e) => parseInt(e.time) === r);
      a && _({ entry: a, timeline: i });
    },
    y = () => _(void 0);
  return (0, q.jsx)(`div`, {
    className: A(Gu, h && `_7iKrpiRqfb4-`, m && `-VGOLVELQNE-`),
    style: { transform: `translateX( ${d}px )`, width: `${p}px` },
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
    n = f(() => t.GetVisibleTimelines());
  return (0, q.jsx)(q.Fragment, {
    children: n.map((e) => (0, q.jsx)(td, { timeline: e }, e.timelineID)),
  });
}
function td(e) {
  let { timeline: t } = e,
    n = $(),
    r = f(() => n.GetVisibleTimelineHighlights(t.timelineID) || []),
    i = f(() => n.GetTimelineOffsetMS(t.timelineID)),
    a = t.globalOffsetMS - i;
  return (0, q.jsx)(q.Fragment, {
    children: r
      .filter((e) => Ns(e) === `range_highlight`)
      .map((e) =>
        (0, q.jsx)(
          nd,
          { entry: e, timeline: t, timelineView: n, timelineOffset: a },
          e.id,
        ),
      ),
  });
}
function nd(e) {
  let { timelineView: t, entry: n, timelineOffset: r } = e,
    i = r + parseInt(n.time),
    { pxStart: a, pxWidth: o } = f(() => ({
      pxStart: t.ConvertGlobalMSToGlobalPXOffset(i),
      pxWidth: t.ConvertDurationMSToDeltaPX(parseInt(n.duration)),
    })),
    s = { width: `${o}px`, transform: `translateX( ${a}px )` };
  return (0, q.jsx)(`svg`, {
    className: $u,
    style: s,
    children: (0, q.jsx)(`line`, {
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
var rd = 0.08;
function id(e) {
  let {
      loader: t,
      className: n,
      clipSummaries: r,
      refTimelineParentCtn: i,
      disableZoom: a,
    } = e,
    o = f(() => t.BInitialized()),
    s = Y();
  if (!o) return (0, q.jsx)(`div`, { className: Aa });
  let c = A(ja, s.GetGamepadMode() && `xP7qeNW99Qo-`, n);
  return (0, q.jsx)(_o, {
    loader: t,
    clipSummaries: r,
    playbackCoordinator: s,
    refTimelineParentCtn: i,
    children: (0, q.jsxs)(`div`, {
      className: c,
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
            disableZoom: a,
            children: (0, q.jsx)(ad, {}),
          }),
        }),
      ],
    }),
  });
}
var ad = (0, R.memo)(function (e) {
  let t = $();
  return f(() => t.BInitialized()) ? (0, q.jsx)(od, {}) : null;
});
function od() {
  let e = $(),
    t = f(() => e.GetScrollableWidthPX()),
    n = f(() => e.GetVisualWindowStartPX()),
    r = f(() => e.GetTimelineMarginWidth());
  return (0, q.jsxs)(`div`, {
    className: Na,
    style: {
      minWidth: t || 0,
      marginRight: r,
      marginLeft: r,
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
    className: A(r, Pa),
    children: (0, q.jsx)(`div`, { className: Fa, children: t }),
  });
}
function cd(e) {
  let t = Y().GetRenderGlyph();
  return t ? t(_t.TRIGGER_LEFT, !1, !1, Ka) : null;
}
function ld(e) {
  let t = Y().GetRenderGlyph();
  return t ? t(_t.TRIGGER_RIGHT, !1, !1, qa) : null;
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
    t = f(() => e.GetDisplayHighlightEntry()),
    [n, r] = (0, R.useState)(null),
    i = R.useRef(0);
  return (
    (0, R.useEffect)(() => {
      if (!t?.entry || Ni(t.entry) || Pi(t.entry)) r(null);
      else
        return (
          r(t.entry),
          (i.current = window.setTimeout(
            () => {
              e.SetDisplayHighlightEntry(null);
            },
            t.duration ? t.duration : Cd,
          )),
          () => window.clearTimeout(i.current)
        );
    }, [t, e]),
    n ? (0, q.jsx)(Td, { entry: n }) : null
  );
}
function Td(e) {
  let { entry: t } = e,
    n = Y(),
    r = f(() => n.GetGameID()),
    i = n.GetGameRecordingVideo(),
    a = f(() => n.GetRecordingID()),
    o = f(() => i.IsInitialized()),
    s = i.GetVideoHeight(),
    c = i.GetVideoWidth(),
    l = a && o && s > 0 && c > 0 ? { height: s, width: c } : {},
    u;
  return (
    Li(t)
      ? (u = (0, q.jsx)(Ed, { entry: t, strGameID: r }))
      : zi(t)
        ? (u = (0, q.jsx)(
            Dd,
            {
              entry: t,
              strMarkerIcon: t.icon,
              title: t.title ? t.title : P(`#Marker_UserMarker_Title`),
              description: t.description || ``,
            },
            t.id,
          ))
        : Bi(t)
          ? (u = (0, q.jsx)(
              Dd,
              {
                entry: t,
                strMarkerIcon: t.icon,
                title: P(`#MediaManager_ItemType_Screenshot`),
                description: ``,
              },
              t.id,
            ))
          : Ii(t) &&
            (u = (0, q.jsx)(
              Dd,
              {
                entry: t,
                strMarkerIcon: t.icon,
                title: t.title || ``,
                description: t.description || ``,
              },
              t.id,
            )),
    (0, q.jsx)(`div`, { className: vd, style: l, children: u })
  );
}
function Ed(e) {
  let { entry: t, strGameID: n } = e,
    r = Hn(new Gi(n).GetAppID(), t.achievement_name);
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
    n = f(() => e.GetRecordingID()),
    r = f(() => t.IsInitialized()),
    i = t.GetVideoHeight(),
    a = t.GetVideoWidth(),
    o = n && r && i > 0 && a > 0 ? { height: i, width: a } : {},
    s = R.useRef(0),
    c = f(() => e.GetRelativeTimeForDisplay()),
    l = f(() => e.GetGameRecordingVideo().IsInitialized()),
    u = (0, R.useMemo)(() => {
      if (isNaN(c) || !l) return null;
      let t = e.ConvertGlobalOffsetToTimelineRelativeOffset(c);
      if (t && e.GetIsActiveTimeline(t.strTimelineID)) {
        let n = e.MakeRelativeToTimelineEndIfActive(
          t.strTimelineID,
          t.nTimelineOffsetMS.valMS,
        );
        return Ot(n / 1e3, !1, !0);
      }
      return null;
    }, [l, c, e]);
  return (
    (0, R.useEffect)(() => {
      if (!isNaN(c))
        return (
          (s.current = window.setTimeout(() => {
            e.ClearRelativeTimeDisplay();
          }, jd)),
          () => window.clearTimeout(s.current)
        );
    }, [c, e]),
    isNaN(c)
      ? null
      : (0, q.jsx)(`div`, {
          className: kd,
          style: o,
          children: (0, q.jsx)(`div`, { className: Ad, children: u }, u),
        })
  );
}
function Nd(e) {
  let {
      disableSound: t,
      positionAbsolute: n = !0,
      refVideoResize: r,
      style: i,
      fullscreen: a,
    } = e,
    o = Y(),
    s = ea(o.StopPlayback, o.SetVideoElement),
    c = o.GetGameRecordingVideo(),
    l = f(() => o.GetRecordingID()),
    u = f(() => c.GetPlaybackError()),
    d = f(() => o.GetRecordingMode() === `Overlay`),
    p = Pd(),
    m = ro(),
    h = u || !l,
    g = R.useRef(void 0),
    _ = it(s, r),
    v = hs();
  function y() {
    l && o.TogglePlayPause();
  }
  function ee() {
    l && a && a.fnToggleFullscreen();
  }
  let te = R.useCallback(
      (e) => {
        h ||
          v(e, { bDisableMouseOverlay: !0, bForcePopup: !0, bAlwaysOnTop: !0 });
      },
      [h, v],
    ),
    ne = !Bt.IN_STEAMUI && !!e.autoPlay,
    re = A(
      ud,
      h && `_3P0prb9XLTM-`,
      n && `YECphMawhtQ-`,
      m && `gzjiwBe8B5g-`,
      d && `NluAI6IOvZc-`,
      p && `_6MZt8I3nnWM-`,
    );
  return (0, q.jsxs)(`div`, {
    ref: g,
    className: re,
    onClick: y,
    onContextMenu: te,
    style: i,
    onDoubleClick: ee,
    children: [
      (0, q.jsx)(`video`, {
        ref: _,
        controls: !1,
        muted: t,
        autoPlay: ne,
        playsInline: ne,
      }),
      (0, q.jsx)(Rd, { player: c }),
      (0, q.jsx)(Fd, {}),
      (0, q.jsx)(Id, {}),
      (0, q.jsx)(Ld, {}),
      !l && (0, q.jsx)(zd, {}),
      (0, q.jsx)(wd, {}),
      (0, q.jsx)(Md, {}),
    ],
  });
}
function Pd() {
  let e = Y(),
    t = f(() => e.GetGlobalMSPlaytime()),
    { nGlobalEndMS: n, nGlobalStartMS: r } = Xa(),
    i = e.GetGameRecordingVideo();
  return f(() => i.GetPlaybackError()) || !t || !r || !n
    ? !1
    : t.valMS >= r.valMS && t.valMS <= n.valMS;
}
function Fd() {
  let e = Y(),
    t = vt.Get().IsDebugLogEnabled(`GR`),
    n = f(() => e.GetPlaybackStats());
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
  let e = vt.Get().IsDebugLogEnabled(`GR`),
    t = Y();
  f(() => {
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
    r = f(() => t.BVideoElementWaiting()),
    i = f(() => t.IsPaused()),
    a = f(() => t.GetPlaybackError()),
    o = f(() => t.IsInitialized());
  return !f(() => e.GetRecordingID()) || (o && !r) || a || i
    ? null
    : (0, q.jsx)(`div`, {
        className: gd,
        style: { height: n },
        children: (0, q.jsx)(at, {}),
      });
}
function Rd(e) {
  let { player: t } = e,
    n = f(() => t.GetPlaybackError()),
    r = ``;
  switch (n) {
    case $i.DownloadFailed:
    case $i.PlaybackError:
    case $i.MediaTypeError:
      r = `#GameRecording_PlayerError_Generic`;
  }
  return r
    ? (0, q.jsx)(`div`, {
        className: dd,
        children: (0, q.jsx)(`div`, { className: void 0, children: P(r) }),
      })
    : null;
}
function zd() {
  let e = Y(),
    t = f(() => e.GetGamepadMode()),
    { onNavigateToClip: n, onNavigateToFAQ: r } = zo(),
    i = f(() => e.GetGlobalMSPlaytime()),
    a = e.GetClosestPreviousRecordingForGlobalMS(i),
    o = e.GetClosestNextRecordingForGlobalMS(i),
    s = f(() => e.GetClipsAtGlobalMS(i)),
    c = (0, R.useCallback)(
      (t) => {
        if (a) {
          let n = Math.max(parseInt(a.duration_ms) - 500, 0);
          (e.SetPlaytimeFromRecordingOffset(a.recording_id, n, !0, !0),
            t.stopPropagation());
        }
      },
      [e, a],
    ),
    l = (0, R.useCallback)(
      (t) => {
        o &&
          (e.SetPlaytimeFromRecordingOffset(o.recording_id, 0),
          t.stopPropagation());
      },
      [e, o],
    ),
    u = (0, R.useCallback)(
      (e) => {
        s.length > 0 &&
          (L.ReportTrackedAction(
            `/GameRecording/Tooltip/ViewClip/PlayerNoContent`,
          ),
          n(s[0].strClipID),
          e.stopPropagation());
      },
      [s, n],
    );
  return (0, q.jsxs)(`div`, {
    className: dd,
    children: [
      (0, q.jsx)(`div`, {
        className: fd,
        children: P(`#GameRecording_PlayerNoContent`),
      }),
      (0, q.jsx)(`div`, {
        className: pd,
        children: wt(
          `#GameRecording_PlayerNoContentDescription`,
          (0, q.jsx)(pt, { href: `#`, onClick: r }),
        ),
      }),
      !t &&
        (0, q.jsxs)(`div`, {
          className: `pvmcYqcba9M-`,
          children: [
            (0, q.jsx)(M, {
              direction: `bottom`,
              toolTipContent: P(
                a
                  ? `#GameRecording_PlayerNoContentJumpPrevious_tooltip`
                  : `#GameRecording_PlayerNoContentJumpNoContent_tooltip`,
              ),
              children: (0, q.jsx)(rt, {
                className: A(`tZ0QBApivQk-`, void 0, !a && `anur1mdo7JE-`),
                onClick: c,
                onActivate: c,
                children: P(`#GameRecording_PlayerNoContentJumpPrevious`),
              }),
            }),
            s.length > 0 &&
              (0, q.jsx)(M, {
                direction: `bottom`,
                toolTipContent: P(
                  `#GameRecording_PlayerNoContentSeeClip_tooltip`,
                ),
                children: (0, q.jsx)(rt, {
                  onClick: u,
                  onActivate: u,
                  className: A(`tZ0QBApivQk-`, void 0),
                  children: P(`#GameRecording_PlayerNoContentSeeClip`),
                }),
              }),
            (0, q.jsx)(M, {
              direction: `bottom`,
              toolTipContent: P(
                o
                  ? `#GameRecording_PlayerNoContentJumpNext_tooltip`
                  : `#GameRecording_PlayerNoContentJumpNoContent_tooltip`,
              ),
              children: (0, q.jsx)(rt, {
                className: A(`tZ0QBApivQk-`, void 0, !o && `anur1mdo7JE-`),
                onClick: l,
                onActivate: l,
                children: P(`#GameRecording_PlayerNoContentJumpNext`),
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
  let [t, n] = R.useState(!1);
  return (
    R.useEffect(() => {
      jn(void 0, void 0).then(() => {
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
  let t = Rt();
  return o({
    queryKey: [`grclip`, e],
    queryFn: async () => {
      let n = Mt.Init($t);
      n.Body().set_clip_id(e);
      let r = await un.GetSingleSharedClip(t, n);
      if (r.GetEResult() != 1) {
        (V(`GetSingleSharedClip failed`), r.DEBUG_LogToConsole());
        return;
      }
      let i = r.Body().toObject().clip,
        a = [];
      if (i.video_ids.length == 0) {
        (V(`No video ids in clip`, e), r.DEBUG_LogToConsole());
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
  let t = R.useMemo(() => Fn(e), [e]),
    n = R.useCallback(
      (t) => {
        for (let n of e.timelines)
          for (let e of n.recordings)
            if (e.recording_id == t) return e.cdn_manifest_url;
      },
      [e],
    );
  return (
    R.useEffect(() => () => t && t.release(), [t]),
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
  gn as a,
  V as c,
  Ud as default,
  W as i,
  hn as l,
  Xi as n,
  H as o,
  Gi as r,
  B as s,
  Hd as t,
  qd as useTimelineLoaderForCommunityClip,
};
