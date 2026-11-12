/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  C as n,
  E as r,
  Gt as i,
  Jt as a,
  Kt as o,
  L as s,
  N as c,
  Q as l,
  R as u,
  S as d,
  St as f,
  Ut as p,
  Wt as m,
  X as h,
  Xt as g,
  Yt as _,
  Zt as ee,
  a as v,
  at as te,
  bt as y,
  en as b,
  it as x,
  j as S,
  kt as C,
  pt as ne,
  qt as w,
  rt as T,
  sn as re,
  vt as ie,
  wt as ae,
  yt as E,
  z as oe,
} from "./chunk~de7f2df91c.js";
import {
  Ft as se,
  It as D,
  N as ce,
  Nt as le,
  ct as ue,
  ht as de,
  t as O,
} from "./chunk~25a6634263.js";
import {
  Cn as fe,
  Ki as pe,
  Li as me,
  Rn as he,
  Un as k,
  Vn as ge,
  Wt as _e,
  Zi as ve,
  cr as ye,
  dr as be,
  g as xe,
  ga as Se,
  gn as A,
  h as Ce,
  hn as we,
  kr as Te,
  l as Ee,
  lr as De,
  mr as Oe,
  ni as ke,
  ri as Ae,
  sr as je,
  ua as j,
  zn as Me,
} from "./chunk~1fa4b8f2ff.js";
import { d as Ne, h as Pe, y as Fe } from "./chunk~0a99e05c44.js";
import {
  En as Ie,
  Z as Le,
  pt as Re,
  sn as ze,
  vn as Be,
} from "./chunk~6b8ddcaac8.js";
import { r as Ve } from "./chunk~9a06851bec.js";
import { C as M, w as N } from "./chunk~44f252525d.js";
import { t as P } from "./chunk~7b8a87bd30.js";
import { v as He } from "./chunk~e70aabe4d7.js";
import "./chunk~428594b857.js";
import { r as Ue } from "./chunk~b390ee0f78.js";
import { a as F, i as I, r as We } from "./chunk~eee3bbd4cd.js";
import { a as Ge, n as Ke, r as qe, t as Je } from "./chunk~2e8feda0b1.js";
import { n as Ye } from "./chunk~fc8a9e4879.js";
import { n as Xe } from "./chunk~9d71b14b50.js";
import { t as Ze } from "./chunk~710e3cfd2f.js";
import {
  a as L,
  h as Qe,
  i as $e,
  o as et,
  r as tt,
  s as nt,
} from "./chunk~cbbb6ae37c.js";
import "./chunk~8681f5c764.js";
import { t as rt } from "./chunk~f4e4ed5c17.js";
import { t as it } from "./chunk~c55709d290.js";
import { t as at } from "./chunk~eefd71512b.js";
import { s as ot } from "./chunk~8ceeb46076.js";
import { n as st } from "./chunk~0111fcd096.js";
import { h as ct, t as lt } from "./chunk~2f8c67b4de.js";
import {
  a as ut,
  c as dt,
  d as ft,
  i as pt,
  j as mt,
  n as ht,
  o as gt,
  p as _t,
  r as vt,
  t as yt,
} from "./chunk~05a38bc848.js";
import { _ as bt } from "./chunk~2bee5a7d08.js";
import "./chunk~a6b9ae1345.js";
import { t as xt } from "./chunk~4571d27d07.js";
import { t as St } from "./chunk~967b42dac9.js";
import {
  a as Ct,
  i as wt,
  o as Tt,
  r as Et,
  s as Dt,
} from "./chunk~3f4314f3b4.js";
import { a as Ot } from "./chunk~7b4b9eb713.js";
import { n as kt, r as At, t as jt } from "./chunk~70c16cc80c.js";
import { n as Mt, t as Nt } from "./chunk~4d16ce5d1a.js";
import { n as Pt, t as Ft } from "./chunk~3ee5188744.js";
import { n as It } from "./chunk~5243628dd6.js";
import {
  O as Lt,
  d as Rt,
  f as zt,
  k as Bt,
  n as Vt,
  p as Ht,
} from "./chunk~8628c845f2.js";
import {
  c as Ut,
  i as Wt,
  n as Gt,
  o as Kt,
  s as qt,
  t as Jt,
} from "./chunk~f25232ab1e.js";
import { n as Yt } from "./chunk~a7c5e71e12.js";
import { n as Xt, r as Zt, t as Qt } from "./chunk~56e6a40e9e.js";
import { t as $t } from "./chunk~14243866ee.js";
var en = 1004,
  tn = 1005,
  nn = 1006,
  R = re(t()),
  z = re(rt()),
  B = re(ee(), 1),
  rn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  an = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  on = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  sn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            unique_name: { n: 2, br: o.readString, bw: g.writeString },
            steamid: {
              n: 3,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  cn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            name: { n: 2, br: o.readString, bw: g.writeString },
            language: { n: 3, br: o.readString, bw: g.writeString },
            headline: { n: 4, br: o.readString, bw: g.writeString },
            summary: { n: 5, br: o.readString, bw: g.writeString },
            avatar_hash: { n: 6, br: o.readString, bw: g.writeString },
            schedule: { n: 7, br: o.readString, bw: g.writeString },
            rules: { n: 8, br: o.readString, bw: g.writeString },
            panels: { n: 9, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
    }
  },
  ln = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  un = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  dn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: o.readString, bw: g.writeString },
            owner_steamid: {
              n: 2,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            name: { n: 3, br: o.readString, bw: g.writeString },
            language: { n: 4, br: o.readString, bw: g.writeString },
            headline: { n: 5, br: o.readString, bw: g.writeString },
            summary: { n: 6, br: o.readString, bw: g.writeString },
            schedule: { n: 7, br: o.readString, bw: g.writeString },
            rules: { n: 8, br: o.readString, bw: g.writeString },
            panels: { n: 9, br: o.readString, bw: g.writeString },
            is_partnered: { n: 10, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  fn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            image_type: { n: 2, br: o.readEnum, bw: g.writeEnum },
            image_index: { n: 3, br: o.readUint32, bw: g.writeUint32 },
            image_width: { n: 4, br: o.readUint32, bw: g.writeUint32 },
            image_height: { n: 5, br: o.readUint32, bw: g.writeUint32 },
            file_size: { n: 6, br: o.readUint32, bw: g.writeUint32 },
            file_extension: { n: 7, br: o.readString, bw: g.writeString },
            file_hash: { n: 8, br: o.readString, bw: g.writeString },
            undo: { n: 9, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  pn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.replace_image_hash || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            replace_image_hash: { n: 1, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  mn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            image_types: {
              n: 2,
              r: !0,
              q: !0,
              br: o.readEnum,
              pbr: o.readPackedEnum,
              bw: g.writeRepeatedEnum,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Request`;
    }
  },
  hn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: gn, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  gn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_type || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_type: { n: 1, br: o.readEnum, bw: g.writeEnum },
            image_path: { n: 2, br: o.readString, bw: g.writeString },
            image_index: { n: 3, br: o.readUint32, bw: g.writeUint32 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  _n = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
    }
  },
  vn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: yn, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  yn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link_index || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: o.readUint32, bw: g.writeUint32 },
            url: { n: 2, br: o.readString, bw: g.writeString },
            link_description: { n: 3, br: o.readString, bw: g.writeString },
            left: { n: 4, br: o.readUint32, bw: g.writeUint32 },
            top: { n: 5, br: o.readUint32, bw: g.writeUint32 },
            width: { n: 6, br: o.readUint32, bw: g.writeUint32 },
            height: { n: 7, br: o.readUint32, bw: g.writeUint32 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  bn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            links: { n: 2, c: xn, r: !0, q: !0 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  xn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link_index || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: o.readUint32, bw: g.writeUint32 },
            url: { n: 2, br: o.readString, bw: g.writeString },
            link_description: { n: 3, br: o.readString, bw: g.writeString },
            left: { n: 4, br: o.readUint32, bw: g.writeUint32 },
            top: { n: 5, br: o.readUint32, bw: g.writeUint32 },
            width: { n: 6, br: o.readUint32, bw: g.writeUint32 },
            height: { n: 7, br: o.readUint32, bw: g.writeUint32 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
    }
  },
  Sn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  Cn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  wn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_live || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_live: { n: 1, br: o.readBool, bw: g.writeBool },
            is_disabled: { n: 2, br: o.readBool, bw: g.writeBool },
            appid: { n: 3, br: o.readUint32, bw: g.writeUint32 },
            viewers: { n: 4, br: o.readUint64String, bw: g.writeUint64String },
            views: { n: 5, br: o.readUint64String, bw: g.writeUint64String },
            broadcaster_steamid: {
              n: 6,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            thumbnail_url: { n: 7, br: o.readString, bw: g.writeString },
            followers: {
              n: 8,
              br: o.readUint64String,
              bw: g.writeUint64String,
            },
            subscribers: {
              n: 9,
              br: o.readUint64String,
              bw: g.writeUint64String,
            },
            unique_name: { n: 10, br: o.readString, bw: g.writeString },
            broadcast_session_id: {
              n: 11,
              br: o.readUint64String,
              bw: g.writeUint64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  V = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            unique_name: { n: 2, br: o.readString, bw: g.writeString },
            name: { n: 3, br: o.readString, bw: g.writeString },
            appid: { n: 4, br: o.readUint32, bw: g.writeUint32 },
            viewers: { n: 5, br: o.readUint64String, bw: g.writeUint64String },
            views: { n: 6, br: o.readUint64String, bw: g.writeUint64String },
            thumbnail_url: { n: 7, br: o.readString, bw: g.writeString },
            followers: {
              n: 8,
              br: o.readUint64String,
              bw: g.writeUint64String,
            },
            headline: { n: 9, br: o.readString, bw: g.writeString },
            avatar_url: { n: 10, br: o.readString, bw: g.writeString },
            broadcaster_steamid: {
              n: 11,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            subscribers: {
              n: 12,
              br: o.readUint64String,
              bw: g.writeUint64String,
            },
            background_url: { n: 13, br: o.readString, bw: g.writeString },
            is_featured: { n: 14, br: o.readBool, bw: g.writeBool },
            is_disabled: { n: 15, br: o.readBool, bw: g.writeBool },
            is_live: { n: 16, br: o.readBool, bw: g.writeBool },
            language: { n: 17, br: o.readString, bw: g.writeString },
            reports: { n: 18, br: o.readUint32, bw: g.writeUint32 },
            is_partnered: { n: 19, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GetBroadcastChannelEntry`;
    }
  },
  Tn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Request`;
    }
  },
  En = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: V, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Response`;
    }
  },
  Dn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Request`;
    }
  },
  On = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: V, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  kn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            undo: { n: 2, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  An = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_followed || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_followed: { n: 1, br: o.readBool, bw: g.writeBool } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  jn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  Mn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_subscribed || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_subscribed: { n: 1, br: o.readBool, bw: g.writeBool } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  Nn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            reason: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Request`;
    }
  },
  Pn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  Fn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  In = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_followed || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_followed: { n: 1, br: o.readBool, bw: g.writeBool },
            is_subscribed: { n: 2, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  Ln = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: g.writeUint32 },
            name: { n: 2, br: o.readString, bw: g.writeString },
            image: { n: 3, br: o.readString, bw: g.writeString },
            viewers: { n: 4, br: o.readUint64String, bw: g.writeUint64String },
            channels: { n: 5, c: V, r: !0, q: !0 },
            release_date: { n: 6, br: o.readString, bw: g.writeString },
            developer: { n: 7, br: o.readString, bw: g.writeString },
            publisher: { n: 8, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Game`;
    }
  },
  Rn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: g.writeUint32 },
            algorithm: { n: 2, br: o.readEnum, bw: g.writeEnum },
            count: { n: 3, br: o.readUint32, bw: g.writeUint32 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Request`;
    }
  },
  zn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Ln, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Response`;
    }
  },
  Bn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.algorithm || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            algorithm: { n: 1, br: o.readEnum, bw: g.writeEnum },
            count: { n: 2, br: o.readUint32, bw: g.writeUint32 },
            appid: { n: 3, br: o.readUint32, bw: g.writeUint32 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Request`;
    }
  },
  Vn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: V, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Response`;
    }
  },
  Hn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  Un = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasters || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasters: { n: 1, c: Wn, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
    }
  },
  Wn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            name: { n: 2, br: o.readString, bw: g.writeString },
            rtmp_token: { n: 3, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  Gn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.issuer_steamid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            issuer_steamid: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            time_expires: { n: 3, br: o.readString, bw: g.writeString },
            permanent: { n: 4, br: o.readBool, bw: g.writeBool },
            name: { n: 5, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatBan`;
    }
  },
  Kn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            duration: { n: 3, br: o.readUint32, bw: g.writeUint32 },
            permanent: { n: 4, br: o.readBool, bw: g.writeBool },
            undo: { n: 5, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Request`;
    }
  },
  qn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  Jn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Request`;
    }
  },
  Yn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Gn, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  Xn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            moderator_steamid: {
              n: 2,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            undo: { n: 3, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Request`;
    }
  },
  Zn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  Qn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Request`;
    }
  },
  $n = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            name: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatModerator`;
    }
  },
  er = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: $n, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  tr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            word: { n: 2, br: o.readString, bw: g.writeString },
            undo: { n: 3, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Request`;
    }
  },
  nr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  rr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Request`;
    }
  },
  ir = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            results: {
              n: 1,
              r: !0,
              q: !0,
              br: o.readString,
              bw: g.writeRepeatedString,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  ar = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Request`;
    }
  },
  or = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            view_url_template: { n: 2, br: o.readString, bw: g.writeString },
            flair_group_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: o.readUint64String,
              pbr: o.readPackedUint64String,
              bw: g.writeRepeatedUint64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Response`;
    }
  },
  sr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.term || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { term: { n: 1, br: o.readString, bw: g.writeString } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Request`;
    }
  },
  cr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: V, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Response`;
    }
  },
  lr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  ur = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stream_live_email || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: o.readBool, bw: g.writeBool },
            stream_live_notification: { n: 2, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  dr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stream_live_email || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: o.readBool, bw: g.writeBool },
            stream_live_notification: { n: 2, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Request`;
    }
  },
  fr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Response`;
    }
  },
  pr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Request`;
    }
  },
  mr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: V, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  hr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasts: { n: 1, c: V, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  gr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: V, r: !0, q: !0 },
            appid: { n: 2, br: o.readUint32, bw: g.writeUint32 },
            title: { n: 3, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_SingleGame`;
    }
  },
  _r = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: g.writeUint32 },
            game_name: { n: 2, br: o.readString, bw: g.writeString },
            broadcast: { n: 3, c: V },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GameListEntry`;
    }
  },
  vr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: _r, r: !0, q: !0 },
            title: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  yr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: V, r: !0, q: !0 },
            title: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  br = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: V, r: !0, q: !0 },
            title: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  xr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: V },
            title: { n: 2, br: o.readString, bw: g.writeString },
            chat_group_id: {
              n: 3,
              br: o.readUint64String,
              bw: g.writeUint64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  Sr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: V },
            title: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Developer`;
    }
  },
  Cr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { title: { n: 1, br: o.readString, bw: g.writeString } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  wr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.template_type || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            template_type: { n: 1, br: o.readEnum, bw: g.writeEnum },
            takeover: { n: 2, c: hr },
            single_game: { n: 3, c: gr },
            game_list: { n: 4, c: vr },
            quick_explore: { n: 5, c: yr },
            conveyor_belt: { n: 6, c: br },
            watch_party: { n: 7, c: xr },
            developer: { n: 8, c: Sr },
            event: { n: 9, c: Cr },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageContentRow`;
    }
  },
  Tr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  Er = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rows || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { rows: { n: 1, c: wr, r: !0, q: !0 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  Dr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  Or = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: o.readUint64String,
              bw: g.writeUint64String,
            },
            channel_id: {
              n: 2,
              br: o.readUint64String,
              bw: g.writeUint64String,
            },
            app_id: { n: 3, br: o.readUint32, bw: g.writeUint32 },
            broadcaster_steamid: {
              n: 4,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            creator_steamid: {
              n: 5,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            video_description: { n: 6, br: o.readString, bw: g.writeString },
            live_time: { n: 7, br: o.readUint32, bw: g.writeUint32 },
            length_ms: { n: 8, br: o.readUint32, bw: g.writeUint32 },
            thumbnail_path: { n: 9, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  kr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clips || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clips: { n: 1, c: Or, r: !0, q: !0 },
            thumbnail_host: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  Ar = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cheer_type || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cheer_type: { n: 1, br: o.readUint32, bw: g.writeUint32 },
            cheer_amount: { n: 2, br: o.readUint32, bw: g.writeUint32 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  jr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: o.readUint32, bw: g.writeUint32 },
            cheer_target_id: {
              n: 2,
              br: o.readFixed64String,
              bw: g.writeFixed64String,
            },
            cheers: { n: 3, c: Ar, r: !0, q: !0 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Request`;
    }
  },
  Mr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.aggregation_delay_ms || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            aggregation_delay_ms: { n: 1, br: o.readUint32, bw: g.writeUint32 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Response`;
    }
  },
  Nr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamTV.CreateBroadcastChannel#1`, y(rn, t, n), an, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.CreateBroadcastChannel = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelID#1`, y(on, t, n), sn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelID = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelProfile#1`, y(cn, t, n), ln, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelProfile = r;
  function i(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelProfile#1`, y(un, t, n), dn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelProfile = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelImage#1`, y(fn, t, n), pn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelImage = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelImages#1`, y(mn, t, n), hn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelImages = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SteamTV.SetBroadcastChannelLinkRegions#1`,
      y(bn, t, n),
      Sn,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetBroadcastChannelLinkRegions = s;
  function c(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelLinks#1`, y(_n, t, n), vn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelLinks = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelBroadcasters#1`,
      y(Hn, t, n),
      Un,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelBroadcasters = l;
  function u(e, t, n) {
    return e.SendMsg(`SteamTV.GetFollowedChannels#1`, y(Tn, t, n), En, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetFollowedChannels = u;
  function d(e, t, n) {
    return e.SendMsg(`SteamTV.GetSubscribedChannels#1`, y(Dn, t, n), On, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSubscribedChannels = d;
  function f(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelStatus#1`, y(Cn, t, n), wn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelStatus = f;
  function p(e, t, n) {
    return e.SendMsg(`SteamTV.FollowBroadcastChannel#1`, y(kn, t, n), An, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.FollowBroadcastChannel = p;
  function m(e, t, n) {
    return e.SendMsg(`SteamTV.SubscribeBroadcastChannel#1`, y(jn, t, n), Mn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SubscribeBroadcastChannel = m;
  function h(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelClips#1`, y(Dr, t, n), kr, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelClips = h;
  function g(e, t, n) {
    return e.SendMsg(`SteamTV.ReportBroadcastChannel#1`, y(Nn, t, n), Pn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.ReportBroadcastChannel = g;
  function _(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelInteraction#1`,
      y(Fn, t, n),
      In,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelInteraction = _;
  function ee(e, t, n) {
    return e.SendMsg(`SteamTV.GetGames#1`, y(Rn, t, n), zn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetGames = ee;
  function v(e, t, n) {
    return e.SendMsg(`SteamTV.GetChannels#1`, y(Bn, t, n), Vn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetChannels = v;
  function te(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatBan#1`, y(Kn, t, n), qn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatBan = te;
  function b(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatBans#1`, y(Jn, t, n), Yn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetChatBans = b;
  function x(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatModerator#1`, y(Xn, t, n), Zn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatModerator = x;
  function S(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatModerators#1`, y(Qn, t, n), er, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.GetChatModerators = S;
  function C(e, t, n) {
    return e.SendMsg(`SteamTV.AddWordBan#1`, y(tr, t, n), nr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.AddWordBan = C;
  function ne(e, t, n) {
    return e.SendMsg(`SteamTV.GetWordBans#1`, y(rr, t, n), ir, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetWordBans = ne;
  function w(e, t, n) {
    return e.SendMsg(`SteamTV.JoinChat#1`, y(ar, t, n), or, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.JoinChat = w;
  function T(e, t, n) {
    return e.SendMsg(`SteamTV.Search#1`, y(sr, t, n), cr, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.Search = T;
  function re(e, t, n) {
    return e.SendMsg(`SteamTV.GetSteamTVUserSettings#1`, y(lr, t, n), ur, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSteamTVUserSettings = re;
  function ie(e, t, n) {
    return e.SendMsg(`SteamTV.SetSteamTVUserSettings#1`, y(dr, t, n), fr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetSteamTVUserSettings = ie;
  function ae(e, t, n) {
    return e.SendMsg(`SteamTV.GetMyBroadcastChannels#1`, y(pr, t, n), mr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetMyBroadcastChannels = ae;
  function E(e, t, n) {
    return e.SendMsg(`SteamTV.GetHomePageContents#1`, y(Tr, t, n), Er, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetHomePageContents = E;
  function oe(e, t, n) {
    return e.SendMsg(`SteamTV.AppCheer#1`, y(jr, t, n), Mr, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AppCheer = oe;
})((Nr ||= {}));
var Pr = re(xt()),
  Fr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: o.readString, bw: g.writeString },
            type: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
    }
  },
  Ir = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: o.readString, bw: g.writeString },
            type: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  Lr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.dictionary || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dictionary: { n: 1, br: o.readString, bw: g.writeString } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Response`;
    }
  },
  Rr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: o.readString, bw: g.writeString },
            type: { n: 2, br: o.readString, bw: g.writeString },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  zr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pid: { n: 1, br: o.readUint32, bw: g.writeUint32 } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  Br = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: o.readUint64String, bw: g.writeUint64String },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  Vr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: o.readUint64String, bw: g.writeUint64String },
            should_handle: { n: 2, br: o.readBool, bw: g.writeBool },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  Hr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.search_term || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            search_term: { n: 1, br: o.readString, bw: g.writeString },
            max_results: { n: 2, br: o.readUint32, bw: g.writeUint32 },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
    }
  },
  Ur = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || p(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: g.writeRepeatedUint32,
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Response`;
    }
  },
  H;
(function (e) {
  e.UpdateTextFilterDictionaryHandler = {
    name: `SteamEngine.UpdateTextFilterDictionary#1`,
    request: Fr,
  };
  function t(e, t) {
    return (
      (t ||= P().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            H.UpdateTextFilterDictionaryHandler,
            e,
          )
    );
  }
  e.RegisterForUpdateTextFilterDictionary = t;
  function n(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            y(Fr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.UpdateTextFilterDictionary = n;
  function r(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            y(Fr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgUpdateTextFilterDictionary = r),
    (e.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: Ir,
      response: Lr,
    }));
  function i(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, y(Ir, e), Lr, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetTextFilterDictionary = i;
  function a(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, y(Ir, e), Lr, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((e.SendMsgGetTextFilterDictionary = a),
    (e.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: Rr,
    }));
  function o(e, t) {
    return (
      (t ||= P().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            H.NotifyTextFilterDictionaryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTextFilterDictionaryChanged = o;
  function s(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            y(Rr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.NotifyTextFilterDictionaryChanged = s;
  function c(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            y(Rr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgNotifyTextFilterDictionaryChanged = c),
    (e.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: zr,
      response: Br,
    }));
  function l(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetGameIDForPID#1`, y(zr, e), Br, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetGameIDForPID = l;
  function u(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetGameIDForPID#1`, y(zr, e), Br, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((e.SendMsgGetGameIDForPID = u),
    (e.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: Vr,
    }));
  function d(e, t) {
    return (
      (t ||= P().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            H.SetOverlayEscapeKeyHandlingHandler,
            e,
          )
    );
  }
  e.RegisterForSetOverlayEscapeKeyHandling = d;
  function f(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            y(Vr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SetOverlayEscapeKeyHandling = f;
  function p(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            y(Vr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgSetOverlayEscapeKeyHandling = p),
    (e.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: Hr,
      response: Ur,
    }));
  function m(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            y(Hr, e),
            Ur,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SearchAppDataCacheByStoreKeywords = m;
  function h(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            y(Hr, e),
            Ur,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SendMsgSearchAppDataCacheByStoreKeywords = h;
})((H ||= {}));
var Wr = class {
  constructor() {
    d(this);
  }
  m_mapCallbacks = new Map();
  m_rgRegisteredEMsgs = [];
  m_mapServiceMethodHandlers = new Map();
  m_rgRegisteredServiceMethodHandlers = [];
  DispatchMsgToHandlers(e, t) {
    let n = e.GetEMsg();
    if (n == 146) {
      let n = e.Hdr().target_job_name();
      if (n) {
        let r = this.m_mapServiceMethodHandlers.get(n);
        if (r) {
          this.DEBUG_LogMessageDispatch(e, r[0]);
          for (let i of r)
            try {
              i.invoke(e, t);
            } catch (e) {
              e instanceof Error
                ? C().ReportError(e)
                : console.error(
                    `MessageHandlers failed to dispatch message to handler (${n}): `,
                    e,
                  );
            }
          return !0;
        }
      }
    } else {
      let t = this.m_mapCallbacks.get(n);
      if (t) {
        this.DEBUG_LogMessageDispatch(e, t[0]);
        for (let n of t)
          try {
            n.invoke(e);
          } catch (e) {
            e instanceof Error
              ? C().ReportError(e)
              : console.error(
                  `MessageHandlers failed to dispatch message to handler: `,
                  e,
                );
          }
        return !0;
      }
    }
    return !1;
  }
  DEBUG_LogMessageDispatch(e, t) {}
  get emsg_list() {
    return this.m_rgRegisteredEMsgs;
  }
  get servicemethod_list() {
    return this.m_rgRegisteredServiceMethodHandlers;
  }
  AddCallback(e, t, n) {
    let r = this.m_mapCallbacks.get(e);
    return (
      r ||
        ((r = []),
        this.m_mapCallbacks.set(e, r),
        this.m_rgRegisteredEMsgs.push(e)),
      r.push({ invoke: n, msgClass: t }),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapCallbacks.get(e);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  AddServiceMethodHandler(e, t) {
    let n = (n, r) => {
      let i = E.InitFromMsg(e.request, n),
        a = E.Init(e.response, 147),
        o = t(i, a),
        s = (e) => {
          (a.Hdr().set_eresult(e), r(a));
        };
      o instanceof Promise
        ? o.then(s).catch(() => {
            s(2);
          })
        : s(o);
    };
    return (
      this.m_mapServiceMethodHandlers.has(e.name)
        ? console.error(`Duplicate registration for method ` + e.name)
        : (this.m_mapServiceMethodHandlers.set(e.name, [
            { invoke: n, msgClass: e.request },
          ]),
          this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapServiceMethodHandlers.get(e.name);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  AddServiceNotificationHandler(e, t) {
    let n = (n, r) => {
        t(E.InitFromMsg(e.request, n));
      },
      r = this.m_mapServiceMethodHandlers.get(e.name);
    return (
      r ||
        ((r = []),
        this.m_mapServiceMethodHandlers.set(e.name, r),
        this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
      r.push({ invoke: n, msgClass: e.request }),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapServiceMethodHandlers.get(e.name);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  RegisterBaseEMessageHandler(e, t) {
    return this.AddCallback(e, void 0, t);
  }
  RegisterEMessageHandler(e, t, n) {
    return this.AddCallback(e, t, (e) => {
      n(E.InitFromMsg(t, e));
    });
  }
  RegisterEMessageAction(e, t, n) {
    return this.AddCallback(e, t, (e) => {
      r(() => {
        n(E.InitFromMsg(t, e));
      });
    });
  }
  RegisterServiceNotificationHandler(e, t) {
    return this.AddServiceNotificationHandler(e, t);
  }
  RegisterServiceNotificationHandlerAction(e, t) {
    return this.AddServiceNotificationHandler(e, (e) => {
      let n;
      return (
        r(() => {
          n = t(e);
        }),
        n
      );
    });
  }
  RegisterServiceMethodHandler(e, t) {
    return this.AddServiceMethodHandler(e, t);
  }
  RegisterServiceMethodHandlerAction(e, t) {
    return this.AddServiceMethodHandler(e, (e, n) => {
      let i;
      return (
        r(() => {
          i = t(e, n);
        }),
        i
      );
    });
  }
};
(e([n], Wr.prototype, `m_rgRegisteredEMsgs`, void 0),
  e([n], Wr.prototype, `m_rgRegisteredServiceMethodHandlers`, void 0));
var Gr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auth_key || p(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { auth_key: { n: 1, br: o.readString, bw: g.writeString } },
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
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      a(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Request`;
    }
  },
  Kr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Response`;
    }
  },
  qr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_StartShutdown_Notification`;
    }
  },
  Jr;
(function (e) {
  e.AuthenticateHandler = {
    name: `TransportAuth.Authenticate#1`,
    request: Gr,
    response: Kr,
  };
  function t(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`TransportAuth.Authenticate#1`, y(Gr, e), Kr, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.Authenticate = t;
  function n(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`TransportAuth.Authenticate#1`, y(Gr, e), Kr, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  ((e.SendMsgAuthenticate = n),
    (e.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: qr,
    }));
  function r(e, t) {
    return (
      (t ||= P().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(Jr.NotifyStartShutdownHandler, e)
    );
  }
  e.RegisterForNotifyStartShutdown = r;
  function i(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`TransportAuth.NotifyStartShutdown#1`, y(qr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.NotifyStartShutdown = i;
  function a(e, t) {
    return (
      (t ||= P().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`TransportAuth.NotifyStartShutdown#1`, y(qr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.SendMsgNotifyStartShutdown = a;
})((Jr ||= {}));
var Yr = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new le(`CWebSocketConnection`, () => this.m_sName);
  m_bDisconnectRequested = !1;
  m_bConnecting = !1;
  m_fnOnMessageHandler;
  m_fnOnCloseHandler;
  m_fnOnReconnectStartHandler;
  m_fnOnReconnectFinishHandler;
  m_nConnectAttemptsMax;
  m_nConnectAttemptTimeoutMs;
  m_bReconnectOnFailure;
  m_nReconnectAttemptTimeoutMs;
  m_nReconnectAttemptsMax;
  constructor(e, t) {
    ((this.m_sName = e),
      (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        t.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        t.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = t.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = t.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = t.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = t.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs =
        t.nReconnectAttemptTimeoutMs ?? 1e4));
  }
  get name() {
    return this.m_sName;
  }
  async Connect(e) {
    return (
      (this.m_sURL = e),
      this.ConnectWithRetry(
        this.m_sURL,
        this.m_nConnectAttemptsMax,
        this.m_nConnectAttemptTimeoutMs,
      )
    );
  }
  async Reconnect() {
    return this.ConnectWithRetry(
      this.m_sURL,
      this.m_nReconnectAttemptsMax,
      this.m_nReconnectAttemptTimeoutMs,
    );
  }
  GetInterAttemptBackoffMs(e) {
    return ae(e, 1, 5) * 1e3;
  }
  async ConnectWithRetry(e, t, n) {
    this.m_bConnecting = !0;
    let r = 0;
    do {
      try {
        let t = await this.ConnectToSocket(e, n);
        if (t.result == 1) return ((this.m_bConnecting = !1), t);
        this.Log.Warning(`connect attempt failed: ${t.result} - ${t.message}`);
      } catch (e) {
        this.Log.Warning(`connect attempt failed: exception ${e.name} - ${e}`);
      }
      let i = this.GetInterAttemptBackoffMs(r);
      (this.Log.Info(`connect retry: attempt:${r}/${t} backoff:${i}`),
        await new Promise((e) => setTimeout(e, i)),
        (this.m_socket = null),
        (r += 1));
    } while (r < t);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      { result: 2, message: `not ready, exceeded retry count` }
    );
  }
  Disconnect() {
    (this.Log.Info(`disconnect requested`),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close());
  }
  PrepareForShutdown() {
    (this.Log.Info(`shutdown pending`), (this.m_bDisconnectRequested = !0));
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    (this.Log.Info(`start reconnect`),
      (this.m_socket = null),
      this.m_fnOnReconnectStartHandler({ connection: this }),
      (await this.Reconnect()).result == 1
        ? (this.Log.Info(`reconnect successful`),
          this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 1 }))
        : (this.Log.Warning(`failed to re-connect to websocket after close`),
          this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 2 }),
          this.m_fnOnCloseHandler({
            connection: this,
            bError: !0,
            bIsExpectedToReconnect: !1,
          })));
  }
  async ConnectToSocket(e, t) {
    if (this.m_socket != null)
      return this.m_socket.readyState == WebSocket.OPEN
        ? { result: 1, message: `ready` }
        : (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          { result: 2, message: `websocket in an unexpected state` });
    try {
      this.m_socket = new WebSocket(e);
    } catch {
      return (
        this.Log.Warning(`failed to initialize websocket connection`),
        { result: 35, message: `Failed to initialize websocket connection` }
      );
    }
    return (
      (this.m_socket.binaryType = `arraybuffer`),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, t))
        ? (this.Log.Info(`connection ready`), { result: 1, message: `ready` })
        : (this.Log.Warning(`failed to reach open state`),
          { result: 2, message: `failed to reach open state` })
    );
  }
  async WaitForSocketOpen(e, t) {
    if (e.readyState != WebSocket.CONNECTING)
      return e.readyState == WebSocket.OPEN;
    let n = t / 100;
    for (; e.readyState == WebSocket.CONNECTING && n > 0;)
      (n--, await new Promise((e) => setTimeout(e, 100)));
    return e.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
  }
  OnSocketError(e) {
    this.Log.Warning(`websocket error`);
  }
  OnSocketOpen(e) {
    this.Log.Info(`websocket open`);
  }
  OnSocketClose(e) {
    if (this.m_bDisconnectRequested) {
      (this.Log.Info(`websocket closed`),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        }));
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning(`websocket unexpectedly closed`);
    let t = this.BShouldReconnect();
    (this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: t,
    }),
      t && this.StartReconnect());
  }
  async OnSocketMessage(e) {
    this.m_fnOnMessageHandler(e.data);
  }
  SendSerializedMessage(e) {
    try {
      return (this.m_socket.send(e), 1);
    } catch {
      return 2;
    }
  }
};
(e([D], Yr.prototype, `OnSocketError`, null),
  e([D], Yr.prototype, `OnSocketOpen`, null),
  e([D], Yr.prototype, `OnSocketClose`, null),
  e([D], Yr.prototype, `OnSocketMessage`, null));
var Xr = `127.0.0.1`,
  U = new le(`WebUITransport`),
  W = class {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new Wr();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 67108864;
    }
    ReportError(e) {
      U.Warning(e);
      let t = C();
      t &&
        t.ReportError(Error(e), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!T.IN_CLIENT) return;
      let e = await SteamClient.WebUITransport.GetTransportInfo();
      ((this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, e.portSteamUI, e.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          e.portClientdll,
          e.authKeyClientdll,
        ),
        P().SetDefaultTransport(this),
        P().SetDefaultHandlerRegistry(this.m_messageHandlers),
        Jr.RegisterForNotifyStartShutdown(this.OnStartShutdown));
    }
    get messageHandlers() {
      return this.m_messageHandlers;
    }
    SetStatusEventHandler(e) {
      this.m_fnOnStatusEventHandler = e;
    }
    SetReconnectErrorHandler(e) {
      this.m_fnOnReconnectErrorHandler = e;
    }
    CreateConnection(e, t, n, r) {
      let i = {
        connection: new Yr(t, {
          bReconnectOnFailure: !0,
          fnOnMessageHandler: this.OnWebsocketMessage,
          fnOnCloseHandler: this.OnWebsocketClose,
          fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
          fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
          nConnectAttemptsMax: 8,
          nConnectAttemptTimeoutMs: 1e4,
          nReconnectAttemptsMax: 8,
          nReconnectAttemptTimeoutMs: 1e4,
        }),
        sUrl: `ws://${Xr}:${n}/transportsocket/`,
        sAuthKey: r,
        eClientExecutionSite: e,
      };
      this.m_mapConnectionDetails.set(e, i);
    }
    SendMsg(e, t, n, r) {
      return new Promise((i, a) => {
        let o = r.eClientExecutionSite;
        if (o == null || o == 0) {
          (U.Error(`SendMsg: Invalid client execution site: ${o}`),
            a(`Transport SendMsg: invalid client execution site ${o}`));
          return;
        }
        let s = this.m_mapConnectionDetails.get(o);
        if (s == null) {
          (U.Error(
            `SendMsg: could not find connection for execution site: ${o}`,
          ),
            a(
              `Transport SendMsg: could not find connection for execution site ${o}`,
            ));
          return;
        }
        let c = s.connection;
        if (!c.BCanSendMessages()) {
          let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
          this.m_mapServiceCallErrorCount.set(e, t + 1);
          let n = `SendMsg: Attempt to send message but socket wasn't ready: ${c.name} - ${e}`;
          (t == 1 && this.ReportError(n),
            U.Warning(n + ` error count: ${t}`),
            a(`Transport SendMsg: socket not ready`));
          return;
        }
        let l = this.m_iMsgSeq++;
        (t.SetEMsg(146),
          t.Hdr().set_target_job_name(e),
          t.Hdr().set_jobid_source(`` + l));
        let u = t.Serialize();
        if (u.byteLength >= this.m_nMaximumMsgSizeBytes) {
          U.Error(
            `SendMsg: message exceeds maximum size: ${u.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let e = E.Init(n);
          (e.Hdr().set_eresult(2), i(e));
        } else
          c.SendSerializedMessage(u) == 1
            ? this.m_mapPendingMethodRequests.set(l, {
                m_iSeq: l,
                m_responseClass: n,
                m_fnCallback: i,
                m_fnError: a,
              })
            : (U.Error(`SendMsg: Failed to send message`),
              a(`Transport SendMsg: failed to send message`));
      });
    }
    SendNotification(e, t, n) {
      let r = n.eClientExecutionSite;
      if (r == null || r == 0)
        return (
          U.Error(`SendNotification: Invalid client execution site: ${r}`), !1
        );
      let i = this.m_mapConnectionDetails.get(r);
      if (i == null)
        return (
          U.Error(
            `SendNotification: could not find connection for execution site: ${r}`,
          ),
          !1
        );
      let a = i.connection;
      if (!a.BCanSendMessages()) {
        let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
        this.m_mapServiceCallErrorCount.set(e, t + 1);
        let n = `SendNotification: Attempt to send message but socket wasn't ready: ${a.name} - ${e}`;
        return (
          t == 1 && this.ReportError(n), U.Warning(n + ` error count: ${t}`), !1
        );
      }
      return (
        t.SetEMsg(146),
        t.Hdr().set_target_job_name(e),
        a.SendSerializedMessage(t.Serialize()) == 1
      );
    }
    async ConnectToSite(e) {
      let t = await e.connection.Connect(e.sUrl);
      return t.result == 1
        ? (await this.SendAuthMessage(e)).BSuccess()
          ? { result: 1, message: `connected` }
          : { result: 2, message: `client auth failed` }
        : t;
    }
    async MakeReady() {
      let e = [];
      for (let [t, n] of this.m_mapConnectionDetails)
        e.push(this.ConnectToSite(n));
      let t = await Promise.all(e);
      ((this.m_bInitialized = !0), this.DispatchTransportStatusUpdate());
      for (let e of t) if (e.result != 1) return e;
      return { result: 1, message: `ready` };
    }
    GetConnectionDetails(e) {
      for (let [t, n] of this.m_mapConnectionDetails)
        if (n.connection === e) return n;
      return (
        U.Error(`GetConnectionDetails: failed to identify connection`), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let e = !0;
      for (let [t, n] of this.m_mapConnectionDetails)
        n.connection.BCanSendMessages() || (e = !1);
      this.m_fnOnStatusEventHandler({ bConnected: e });
    }
    OnWebsocketReconnectStart(e) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(e) {
      if ((this.DispatchTransportStatusUpdate(), e.eResult != 1)) {
        (U.Warning(`OnWebsocketReconnect: Failed to reconnect to steam client`),
          this.m_fnOnReconnectErrorHandler?.({}));
        return;
      }
      this.FailAllPendingRequests();
      let t = this.GetConnectionDetails(e.connection);
      t && this.SendAuthMessage(t);
    }
    OnWebsocketClose(e) {
      e.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(e) {
      let t = new f(e),
        n = E.InitHeaderFromPacket(t);
      n.Hdr().jobid_target() &&
      n.Hdr().jobid_target() !== `18446744073709551615`
        ? this.DispatchMethodResponse(n)
        : this.DispatchNotification(n);
    }
    DispatchMethodResponse(e) {
      let t = parseInt(e.Hdr().jobid_target()),
        n = this.m_mapPendingMethodRequests.get(t);
      if (n == null) {
        b(!1, `Transport Error: no pending callback for request`);
        return;
      }
      (b(t == n.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(t));
      let r = E.InitFromMsg(n.m_responseClass, e);
      n.m_fnCallback(r);
    }
    DispatchNotification(e) {
      this.m_messageHandlers.DispatchMsgToHandlers(e, (e) => {
        b(!1, `Transport Error: A notification should not generate a response`);
      });
    }
    FailAllPendingRequests() {
      for (let [e, t] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
        );
        let e = E.Init(t.m_responseClass);
        (e.Hdr().set_eresult(2), t.m_fnCallback(e));
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(e) {
      let t = Jr.AuthenticateHandler.name,
        n = { eClientExecutionSite: e.eClientExecutionSite },
        r = E.Init(Gr);
      return (
        r.Hdr().set_webui_auth_key(e.sAuthKey),
        await this.SendMsg(t, r, Jr.AuthenticateHandler.response, n)
      );
    }
    OnStartShutdown(e) {
      for (let [e, t] of this.m_mapConnectionDetails)
        t.connection.PrepareForShutdown();
      return 1;
    }
  };
(e([D], W.prototype, `OnWebsocketReconnectStart`, null),
  e([D], W.prototype, `OnWebsocketReconnectFinish`, null),
  e([D], W.prototype, `OnWebsocketClose`, null),
  e([D], W.prototype, `OnWebsocketMessage`, null),
  e([D], W.prototype, `OnStartShutdown`, null));
var Zr = new W();
function G() {
  return T.IN_MOBILE ? u : c();
}
function Qr(e) {
  if (e === ``) return !1;
  try {
    return (RegExp(`\\b(` + e + `)\\b`, `ugi`), !0);
  } catch {
    return (
      console.log(`'${e}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var $r = 15,
  ei = 3600,
  ti = `(1)`,
  K = class {
    m_WebUIServiceTransport;
    m_unAccountID;
    m_Transport = null;
    m_Storage = null;
    m_TextFilterPreferences = { eTextFilterSetting: 3, bIgnoreFriends: !1 };
    m_TextFilterWords;
    m_mapPlayerCache = new Map();
    m_strBannedWords = ``;
    m_strProfanityWords = ``;
    m_strCleanWords = ``;
    m_strBannedPattern = ``;
    m_strCleanPattern = ``;
    m_bWordListsComplete = !1;
    m_bHaveCompleteFilter = !1;
    m_regexBannedWords = null;
    m_regexCleanWords = null;
    m_bShownFilterTip = !1;
    m_bInitialized = !1;
    m_bFilterChangedWhileLoading = !1;
    m_bOngoingLoad = !1;
    m_promiseOngoingLoad = null;
    m_fnUnregisterDictionaryChanged = void 0;
    m_rgUnregisterPlayerNotifications = [];
    m_DataAccess;
    constructor(e) {
      d(this);
      let t = new Jt();
      ((this.m_TextFilterPreferences = {
        eTextFilterSetting: t.text_filter_setting(),
        bIgnoreFriends: t.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new Kt()),
        (this.m_DataAccess = e));
    }
    async Init(e = 0, t = null, n = null, r = null) {
      ((this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = Zr),
        (this.m_unAccountID = e),
        (this.m_Transport = t),
        (this.m_Storage = n),
        (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        this.InitSteamEngineLanguages(),
        this.RegisterPlayerNotifications(r),
        await this.LoadFilter(),
        await this.LoadTextFilterPreferences(),
        await this.LoadTextFilterWords(),
        await this.RequestUpdatedSettings(),
        (this.m_nLoadLanguagesRetryDelaySec = $r),
        await this.EnsureFiltersLoaded());
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_fnUnregisterDictionaryChanged?.(),
        (this.m_fnUnregisterDictionaryChanged =
          this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
            H.NotifyTextFilterDictionaryChangedHandler,
            this.OnTextFilterDictionaryChanged,
          ).unregister),
        this.InitSteamEngineLanguage(T.LANGUAGE),
        T.LANGUAGE !== `english` && this.InitSteamEngineLanguage(`english`));
    }
    OnTextFilterDictionaryChanged(e) {
      return (
        !this.m_bInitialized && !this.m_bOngoingLoad
          ? (this.m_bFilterChangedWhileLoading = !0)
          : ((this.m_nLoadLanguagesRetryDelaySec = $r),
            this.EnsureFiltersLoaded()),
        1
      );
    }
    EnsureFiltersLoaded() {
      return this.m_bOngoingLoad && this.m_promiseOngoingLoad
        ? ((this.m_bFilterChangedWhileLoading = !0), this.m_promiseOngoingLoad)
        : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
          this.m_promiseOngoingLoad);
    }
    async InitFiltersWithRetry() {
      this.m_bOngoingLoad = !0;
      try {
        do
          ((this.m_bFilterChangedWhileLoading = !1),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0));
        while (this.m_bFilterChangedWhileLoading);
      } finally {
        ((this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null));
      }
    }
    RegisterPlayerNotifications(e) {
      (this.m_rgUnregisterPlayerNotifications.forEach((e) => e()),
        (this.m_rgUnregisterPlayerNotifications = []),
        e &&
          this.m_rgUnregisterPlayerNotifications.push(
            e.RegisterServiceNotificationHandler(
              qt.NotifyCommunityPreferencesChangedHandler,
              (e) => (
                this.UpdateCommunityPreferences(e.Body().preferences()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
            e.RegisterServiceNotificationHandler(
              qt.NotifyTextFilterWordsChangedHandler,
              (e) => (
                this.UpdateTextFilterWords(e.Body().words()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
          ));
    }
    OnPlayerSettingsChanged() {
      this.m_bInitialized && !this.m_bOngoingLoad && this.OnFilterDataChanged();
    }
    InitSteamEngineLanguage(e) {
      let t = E.Init(Fr);
      (t.Body().set_language(e),
        t.Body().set_type(`profanity`),
        H.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport),
        t.Body().set_type(`banned`),
        H.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport));
    }
    GetSteamEngineTextFilterDictionary(e, t) {
      let n = E.Init(Ir);
      return (
        n.Body().set_language(e),
        n.Body().set_type(t),
        H.SendMsgGetTextFilterDictionary(n, this.m_WebUIServiceTransport)
      );
    }
    GetStorageKey(e) {
      return e + `_` + this.m_unAccountID;
    }
    async LoadTextFilterPreferences() {
      if (this.m_Storage) {
        let e = await this.m_Storage.GetObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
        );
        e && (this.m_TextFilterPreferences = e);
      }
    }
    SaveTextFilterPreferences() {
      this.m_Storage &&
        this.m_Storage.StoreObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
          this.m_TextFilterPreferences,
        );
    }
    ObfuscateString(e) {
      try {
        let t = new TextEncoder().encode(ti + e);
        return Pr.fromByteArray(t);
      } catch {
        return ``;
      }
    }
    DeobfuscateString(e) {
      try {
        let t = Pr.toByteArray(e),
          n = new TextDecoder().decode(t);
        return n.startsWith(ti)
          ? ((n = n.slice(3)), n)
          : (console.log(
              `DeobfuscateString given invalid base64 data, ignoring: ` + e,
            ),
            ``);
      } catch {
        return ``;
      }
    }
    async LoadObfuscatedString(e) {
      if (this.m_Storage) {
        let t = await this.m_Storage.GetString(this.GetStorageKey(e));
        if (t) return this.DeobfuscateString(t);
      }
      return null;
    }
    async SaveObfuscatedString(e, t) {
      this.m_Storage &&
        this.m_Storage.StoreString(
          this.GetStorageKey(e),
          this.ObfuscateString(t),
        );
    }
    async LoadTextFilterWords() {
      let e = await this.LoadObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
      );
      if (e)
        try {
          this.m_TextFilterWords = Kt.fromObject(JSON.parse(e));
        } catch {
          (console.warn(`Error parsing cached text filter word list`, e),
            (this.m_TextFilterWords = new Kt()));
        }
    }
    SaveTextFilterWords() {
      this.SaveObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
        JSON.stringify(this.m_TextFilterWords.toObject()),
      );
    }
    async LoadFilter() {
      let e = await this.LoadObfuscatedString(
          `CTextFilterStore_strBannedPattern`,
        ),
        t = await this.LoadObfuscatedString(`CTextFilterStore_strCleanPattern`);
      ((this.m_bHaveCompleteFilter = e != null && t != null),
        e != null && t != null && this.BRebuildFilter(e, t));
    }
    SaveFilter() {
      (this.SaveObfuscatedString(
        `CTextFilterStore_strBannedPattern`,
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          `CTextFilterStore_strCleanPattern`,
          this.m_strCleanPattern,
        ));
    }
    async RequestUpdatedSettings() {
      let e = new Jt();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let t = E.Init(Gt);
            e = (await Ut.GetCommunityPreferences(this.m_Transport, t))
              .Body()
              .preferences();
          } else {
            let t = { sessionid: h(), origin: G() },
              n = await z.default.get(
                T.COMMUNITY_BASE_URL + `textfilter/ajaxgetcommunitypreferences`,
                { params: t, withCredentials: !0 },
              );
            e = Jt.fromObject(n.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(e),
        e.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let t = new Kt();
        if (e.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let e = E.Init(Wt);
              t = (await Ut.GetTextFilterWords(this.m_Transport, e))
                .Body()
                .words();
            } else {
              let e = { sessionid: h(), origin: G() },
                n = await z.default.get(
                  T.COMMUNITY_BASE_URL +
                    `textfilter/ajaxgettextfiltercustomwords`,
                  { params: e, withCredentials: !0 },
                );
              t = Kt.fromObject(n.data.words);
            }
          } catch {}
        this.UpdateTextFilterWords(t);
      }
    }
    UpdateCommunityPreferences(e) {
      let t = !1;
      (e.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          e.text_filter_setting()),
        (t = !0)),
        e.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            e.text_filter_ignore_friends()),
          (t = !0)),
        t && this.SaveTextFilterPreferences());
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(e) {
      ((this.m_TextFilterWords = e), this.SaveTextFilterWords());
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    m_nLoadLanguagesRetryDelaySec = $r;
    async LoadLanguages() {
      ((this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0)));
      try {
        let e = await this.LoadLanguage(T.LANGUAGE);
        if (
          (T.LANGUAGE !== `english` &&
            (e = (await this.LoadLanguage(`english`)) && e),
          !e)
        )
          throw Error(`clean_public dictionary unavailable`);
        ((this.m_nLoadLanguagesRetryDelaySec = $r),
          (this.m_bWordListsComplete = !0));
      } catch (e) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          ei,
        );
        let t = this.m_nLoadLanguagesRetryDelaySec;
        (console.warn(`LoadLanguages caught`, e, `retry in`, t, `seconds`),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
            ((this.m_nLoadLanguagesRetryTimeout = void 0),
              this.EnsureFiltersLoaded());
          }, t * 1e3)));
      }
    }
    async LoadLanguage(e) {
      let t = ``,
        n = !1;
      if (this.m_WebUIServiceTransport.BIsValid())
        try {
          {
            let t = await this.GetSteamEngineTextFilterDictionary(e, `banned`);
            this.m_strBannedWords += t.Body().dictionary();
          }
          {
            let t = await this.GetSteamEngineTextFilterDictionary(
              e,
              `profanity`,
            );
            this.m_strProfanityWords += t.Body().dictionary();
          }
          n = !0;
        } catch (e) {
          console.warn(`LoadLanguage caught while loading from cache:`, e);
        }
      if (!n) {
        t = `${T.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${G()}`;
        {
          let e = await z.default.get(t);
          this.m_strBannedWords += e.data;
        }
        t = `${T.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${G()}`;
        {
          let e = await z.default.get(t);
          this.m_strProfanityWords += e.data;
        }
      }
      let r = this.m_WebUIServiceTransport.BIsValid(),
        i = `CTextFilterStore_strCleanPublic_` + e;
      t = `${T.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${G()}`;
      try {
        let e = await z.default.get(t);
        ((this.m_strCleanWords += e.data),
          r && this.SaveObfuscatedString(i, e.data));
      } catch (e) {
        console.warn(`LoadLanguage caught while loading clean list:`, e);
        let t = r ? await this.LoadObfuscatedString(i) : null;
        if (!t) return !1;
        this.m_strCleanWords += t;
      }
      return !0;
    }
    CreatePattern(e) {
      let t = e.filter(function (e) {
        return Qr(e);
      });
      return t.length > 0 ? `\\b(` + t.join(`|`) + `)\\b` : ``;
    }
    OnFilterDataChanged() {
      if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter) return;
      let e = new RegExp(/\s*[\r\n]+\s*/g),
        t = [],
        n = [];
      switch (this.m_TextFilterPreferences.eTextFilterSetting) {
        case 0:
          break;
        case 3:
          break;
        case 2:
          t = t.concat(this.m_strBannedWords.split(e));
          break;
        default:
          t = t.concat(
            this.m_strProfanityWords.split(e),
            this.m_strBannedWords.split(e),
          );
      }
      ((t = t.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (n = this.m_strCleanWords.split(e)),
        (n = n.concat(
          this.m_TextFilterWords.text_filter_custom_clean_words(),
        )));
      let r = this.CreatePattern(t),
        i = this.CreatePattern(n);
      (i != `` && (i = `^(` + i + `)$`),
        this.BRebuildFilter(r, i) &&
          this.m_bWordListsComplete &&
          this.SaveFilter(),
        (this.m_bHaveCompleteFilter = this.m_bWordListsComplete));
    }
    BRebuildFilter(e, t) {
      if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
        return !1;
      if (
        ((this.m_regexBannedWords = null),
        (this.m_strBannedPattern = e),
        e !== ``)
      )
        try {
          this.m_regexBannedWords = new RegExp(e, `ugi`);
        } catch (e) {
          (console.warn(`Couldn't compile textfilter bannedwords regex`),
            C().ReportError(
              Error(`Couldn't compile textfilter bannedwords regex: ${e}`),
            ),
            (this.m_strBannedPattern = ``));
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = t),
        t !== ``)
      )
        try {
          this.m_regexCleanWords = new RegExp(t, `ugi`);
        } catch (e) {
          (console.warn(`Couldn't compile textfilter cleanwords regex`),
            C().ReportError(
              Error(`Couldn't compile textfilter cleanwords regex: ${e}`),
            ),
            (this.m_strCleanPattern = ``));
        }
      return !0;
    }
    CreateProfanityReplacement(e) {
      return `♥`.repeat(e);
    }
    BHasFilter() {
      return this.m_regexBannedWords != null;
    }
    BShownFilterTip() {
      return this.m_bShownFilterTip;
    }
    SetFilterTipShown(e) {
      this.m_bShownFilterTip = e;
    }
    FilterText(e, t) {
      if (!this.m_regexBannedWords) return t;
      let n = 0;
      return (
        typeof e == `string` && e !== ``
          ? (n = new O(e).GetAccountID())
          : typeof e == `number` && (n = e),
        !t ||
        n == this.m_unAccountID ||
        (e &&
          this.m_TextFilterPreferences.bIgnoreFriends &&
          this.m_DataAccess.BIsFriend(n))
          ? t
          : t.replace(this.m_regexBannedWords, (e) =>
              this.m_regexCleanWords && e.search(this.m_regexCleanWords) == 0
                ? e
                : this.CreateProfanityReplacement(e.length),
            )
      );
    }
  };
(e([n], K.prototype, `m_TextFilterPreferences`, void 0),
  e([n], K.prototype, `m_mapPlayerCache`, void 0),
  e([n], K.prototype, `m_regexBannedWords`, void 0),
  e([n], K.prototype, `m_regexCleanWords`, void 0),
  e([n], K.prototype, `m_bInitialized`, void 0),
  e([n], K.prototype, `m_bFilterChangedWhileLoading`, void 0),
  e([n], K.prototype, `m_bOngoingLoad`, void 0),
  e([v], K.prototype, `Init`, null),
  e([D], K.prototype, `OnTextFilterDictionaryChanged`, null),
  e([v], K.prototype, `UpdateCommunityPreferences`, null),
  e([v], K.prototype, `BRebuildFilter`, null));
var ni;
function ri() {
  if (!ni) {
    let e = new Set(),
      t = { sessionid: h(), origin: G() };
    (z.default
      .get(T.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: t,
        withCredentials: !0,
      })
      .then((t) => {
        for (let n of t.data.friendslist?.friends ?? [])
          te(n.efriendrelationship) &&
            e.add(new O(n.ulfriendid).GetAccountID());
      }),
      (ni = (t) => e.has(t)));
  }
  return ni;
}
var ii = 4,
  ai = 500,
  oi = 10,
  si = class e {
    m_mapChats = new Map();
    m_cmInterface;
    SetCMInterface(e) {
      this.m_cmInterface = e;
    }
    GetCMInterface() {
      return this.m_cmInterface;
    }
    GetChat(e, t) {
      return this.m_mapChats.get(e) || this.m_mapChats.get(t);
    }
    GetOrCreateChat(e, t) {
      let n = this.GetChat(e, t);
      return (n || ((n = new q()), this.m_mapChats.set(e || t, n)), n);
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      d(this);
    }
  };
e([n], si.prototype, `m_mapChats`, void 0);
var q = class {
  m_ulBroadcastChannelID = ``;
  m_ulChatID = ``;
  m_strFlairGroupID = ``;
  m_bAutoScroll = !0;
  m_ulBroadcastID = ``;
  m_ulBroadcastSteamID = ``;
  m_tsFirstRequest = null;
  m_nFromFirstRequestMS = 0;
  m_nNextChatTS = 0;
  m_cConsecutiveErrors = 0;
  m_nNudgeFactorMS = 0;
  m_nLastSleepMS = 0;
  m_bReconnecting = !1;
  m_strChatURL = ``;
  m_unInstanceID = Math.floor(Math.random() * 4294967296);
  m_strUserSteamID = ``;
  m_regexUserEmoticons;
  m_chatScheduledFunc;
  m_steamInterface;
  m_textFilterStore;
  m_bHasAddedWelcomeChat = !1;
  m_mapMutedUsers = {};
  m_mapChannelModeratorUsers = new Map();
  m_mapBroadcastModeratorUsers = new Map();
  m_nRateLimitSeconds = 0;
  m_bRateLimited = !1;
  m_rgChatMessages = [];
  m_rgAnnouncements = [];
  m_latestAnnouncement = null;
  constructor() {
    (d(this), (this.m_steamInterface = this.CreateSteamInterface()));
  }
  InitTextFilter() {
    this.m_textFilterStore = new K({ BIsFriend: ri() });
    let e = 0;
    (x.steamid !== `` && (e = new O(x.steamid).GetAccountID()),
      this.m_textFilterStore.Init(e, null, new $t()));
  }
  get TextFilterStore() {
    return this.m_textFilterStore;
  }
  GetBroadcastSteamID() {
    return this.m_ulBroadcastSteamID;
  }
  GetUserSteamID() {
    return this.m_strUserSteamID;
  }
  CreateSteamInterface() {
    return (
      (Pt() ?? si.Get().GetCMInterface()) ||
      jt(new At(T.WEBAPI_BASE_URL, x.webapi_token))
    );
  }
  StartForSteamID(e, t) {
    ((this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastSteamID = e),
      (this.m_ulBroadcastID = t),
      this.InitTextFilter(),
      this.RequestChatInfo());
  }
  StartForChannel(e) {
    ((this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastChannelID = e),
      (this.m_strUserSteamID = x.steamid),
      this.InitTextFilter(),
      this.JoinChannelChat());
  }
  Stop() {
    this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
  }
  async SendMessage(e) {
    let t = e.trim();
    if (t.length != 0)
      try {
        let e = E.Init(Ct);
        e.SetBodyFields({
          chat_id: this.m_ulChatID,
          message: t,
          instance_id: this.m_unInstanceID.toString(),
        });
        let n = await Et.PostChatMessage(
            this.m_steamInterface.GetServiceTransport(),
            e,
          ),
          r = {
            result: n.GetEResult(),
            cooldown_time_seconds: n.Body().cooldown_time_seconds(),
            in_game: n.Body().in_game(),
            persona_name: n.Body().persona_name(),
          };
        if (r && r.result && r.result != 1) {
          let e = ``;
          ((e =
            r.result == 17
              ? j(`#BroadcastChat_YouMuted`)
              : r.result == 84
                ? j(`#BroadcastChat_Cooldown`, r.cooldown_time_seconds ?? 0)
                : j(`#BroadcastChat_FailedToSendMsg`, t)),
            this.m_rgChatMessages.push({
              type: F.Error,
              msg: e,
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: r.in_game,
              persona_name: r.persona_name,
              steamid: ``,
            }));
          return;
        }
        ((this.m_nRateLimitSeconds ||= r.cooldown_time_seconds ?? 0),
          this.m_nRateLimitSeconds &&
            ((this.m_bRateLimited = !0),
            setTimeout(
              () => (this.m_bRateLimited = !1),
              this.m_nRateLimitSeconds * 1e3,
            )));
      } catch {
        this.m_rgChatMessages.push({
          type: F.Error,
          msg: j(`#BroadcastChat_FailedToSendMsg`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async RequestChatInfo(e) {
    ((this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1));
    try {
      let t = {
          steamid: this.m_ulBroadcastSteamID,
          broadcastid: this.m_ulBroadcastID,
          sessionid: h(),
          notoken: 1,
        },
        n = await z.default.get(`${T.CHAT_BASE_URL}broadcast/getchatinfo`, {
          params: t,
          withCredentials: !0,
          cancelToken: e?.token,
        });
      (e && e.token.reason) ||
        r(() => {
          let e = n.data;
          ((this.m_strChatURL = e.view_url_template ?? ``),
            (this.m_ulChatID = e.chat_id ?? ``),
            (this.m_strFlairGroupID = e.flair_group_ids?.[0] ?? ``),
            e.blocked && console.log(`User is blocked from chat`),
            e.steamid && (this.m_strUserSteamID = e.steamid),
            e.emoticons && this.SetOwnedEmoticons(e.emoticons),
            (this.m_bHasAddedWelcomeChat ||=
              (this.m_rgChatMessages.push({
                type: F.Notification,
                msg: j(`#BroadcastChat_DefaultMessage`),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: ``,
                steamid: ``,
              }),
              !0)),
            this.m_mapBroadcastModeratorUsers.clear(),
            e.moderators_steamid &&
              e.moderators_steamid.forEach((e) =>
                this.m_mapBroadcastModeratorUsers.set(e, !0),
              ),
            (this.m_chatScheduledFunc = new de()),
            this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
        });
    } catch (e) {
      (console.error(e), console.log(`Failed to get chat info!`));
    }
  }
  async JoinChannelChat() {
    try {
      let e = E.Init(ar);
      e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
      let t = await Nr.JoinChat(this.m_steamInterface.GetServiceTransport(), e),
        n = t.Body().view_url_template(),
        r = t.Body().chat_id();
      if (!r || !n) {
        console.log(`Failed to join channel chat`);
        return;
      }
      ((this.m_strChatURL = n),
        (this.m_ulChatID = r),
        (this.m_strFlairGroupID =
          t.Body().flair_group_ids() && t.Body().flair_group_ids()[0]),
        this.FetchChatModerators(),
        (this.m_rgChatMessages = []),
        this.m_rgChatMessages.push({
          type: F.Notification,
          msg: j(`#BroadcastChat_DefaultMessage`),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        }),
        (this.m_bHasAddedWelcomeChat = !0),
        (this.m_chatScheduledFunc = new de()),
        this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
    } catch (e) {
      (console.error(e), console.log(`Failed to join chat!`));
    }
  }
  async FetchChatModerators() {
    let e = E.Init(Qn);
    e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
    let t = (
        await Nr.GetChatModerators(
          this.m_steamInterface.GetServiceTransport(),
          e,
        )
      )
        .Body()
        .results(),
      n = new Map();
    (t.forEach((e) => {
      let t = e.steamid();
      t && n.set(t, !0);
    }),
      (this.m_mapChannelModeratorUsers = n));
  }
  ReplaceChatAnnouncementIfAny(e) {
    e.announcements?.length > 0
      ? ((this.m_rgAnnouncements = e.announcements.reverse()),
        (this.m_latestAnnouncement &&
          JSON.stringify(this.m_latestAnnouncement) ==
            JSON.stringify(
              this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
            )) ||
          (this.m_latestAnnouncement =
            this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
      : this.m_rgAnnouncements.length > 0 &&
        ((this.m_rgAnnouncements = []), (this.m_latestAnnouncement = null));
  }
  async RequestLoop() {
    let e = {},
      t = this.m_strChatURL.replace(`{0}`, this.m_nNextChatTS.toString());
    t == this.m_strChatURL &&
      this.m_nNextChatTS > 0 &&
      (e.t = this.m_nNextChatTS);
    try {
      let n = (await z.default.get(t, { params: e })).data;
      this.m_cConsecutiveErrors = 0;
      let r = n.messages
        .map((e) => ({ ...e, type: F.Chat, client_ts: Number(new Date()) }))
        .filter((e) => !this.IsUserMutedLocally(e.steamid));
      (this.m_rgChatMessages.push(...r), this.ReplaceChatAnnouncementIfAny(n));
      let i = this.m_bAutoScroll ? 150 : 300;
      if (
        (this.m_rgChatMessages.length > i &&
          this.m_rgChatMessages.splice(0, this.m_rgChatMessages.length - i),
        n.muted)
      )
        for (let e of n.muted) {
          let t =
            e.muted == this.m_strUserSteamID
              ? j(`#BroadcastChat_YouMuted`, e.persona_name)
              : j(`#BroadcastChat_UserMuted`, e.persona_name);
          this.m_rgChatMessages.push({
            type: F.Notification,
            msg: t,
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      if (n.remove_msgs)
        for (let e of n.remove_msgs) this.RemoveUserMessagesLocal(e.steamid);
      let a = 0;
      if (
        this.m_tsFirstRequest == null ||
        this.m_nNextChatTS == 0 ||
        n.initial_delay
      ) {
        if (n.initial_delay === `undefined`) {
          console.log(
            `Need initial_delay to know when to request first chat message`,
          );
          return;
        }
        ((this.m_tsFirstRequest = performance.now() + n.initial_delay),
          (this.m_nFromFirstRequestMS = 0),
          (this.m_nNextChatTS = n.next_request),
          (a = n.initial_delay));
      } else {
        if (n.next_request < this.m_nNextChatTS) {
          console.log(`Next request in past`);
          return;
        }
        ((this.m_nFromFirstRequestMS += n.next_request - this.m_nNextChatTS),
          (this.m_nNextChatTS = n.next_request),
          (a =
            this.m_tsFirstRequest +
            this.m_nFromFirstRequestMS -
            performance.now() +
            this.m_nNudgeFactorMS));
      }
      ((this.m_bReconnecting &&= !1),
        (this.m_nLastSleepMS = a),
        a < 0 && (a = 0),
        this.m_chatScheduledFunc?.Schedule(a, this.RequestLoop));
    } catch {
      if (
        (console.log(
          `Failed to get chat messages. Previous sleep set to: ` +
            this.m_nLastSleepMS +
            ` firstReq: ` +
            this.m_tsFirstRequest +
            ` firstFromRequest: ` +
            this.m_nFromFirstRequestMS +
            ` nudge: ` +
            this.m_nNudgeFactorMS,
        ),
        this.m_cConsecutiveErrors++,
        (this.m_nNudgeFactorMS += oi),
        this.m_cConsecutiveErrors >= ii)
      ) {
        if (this.m_tsFirstRequest == null) {
          this.m_rgChatMessages.push({
            type: F.Error,
            msg: j(`#BroadcastChat_UnableToJoinChat`),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
          return;
        }
        ((this.m_cConsecutiveErrors = 0),
          (this.m_bReconnecting = !0),
          this.SyncChat());
      }
      this.m_chatScheduledFunc?.Schedule(ai, this.RequestLoop);
    }
  }
  GetUserEmoticons() {
    return this.m_regexUserEmoticons;
  }
  SetOwnedEmoticons(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      r.length >= 2 && r[0] == `:`
        ? t.push(r.substr(1, r.length - 2))
        : t.push(r);
    }
    let n = `:(` + t.join(`|`) + `):`;
    this.m_regexUserEmoticons = new RegExp(n, `g`);
  }
  async UpdateBroadcastChatModerator(e, t, n) {
    {
      let r = new FormData();
      (r.append(`broadcaststeamid`, this.m_ulBroadcastSteamID),
        r.append(`moderatorsteamid`, e),
        r.append(`bAdd`, t ? `1` : `0`),
        r.append(`sessionid`, h()));
      try {
        (await z.default.post(
          `${T.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          r,
        ),
          this.m_mapBroadcastModeratorUsers.set(e, t));
        let i = j(
          t
            ? `#BroadcastChat_AddedModerator`
            : `#BroadcastChat_RemovedModerator`,
          n,
        );
        this.m_rgChatMessages.push({ type: F.Notification, msg: i });
      } catch {
        let e = j(
          t
            ? `#BroadcastChat_AddModeratorFailed`
            : `#BroadcastChat_RemoveModeratorFailed`,
          n,
        );
        this.m_rgChatMessages.push({ type: F.Error, msg: e });
      }
    }
  }
  async UpdateUserChatBan(e, t, n, r, i, a) {
    let o = this.m_ulBroadcastSteamID,
      s = this.m_strUserSteamID;
    if (this.m_ulBroadcastChannelID) {
      let t = E.Init(Kn);
      (t.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: e,
        duration: n * 3600,
        permanent: r,
        undo: a,
      }),
        await Nr.AddChatBan(this.m_steamInterface.GetServiceTransport(), t));
    } else {
      let a = new FormData();
      (a.append(`broadcaststeamid`, o),
        a.append(`issuersteamid`, s),
        a.append(`chattersteamid`, e),
        a.append(`bantype`, t),
        a.append(`duration`, n.toString()),
        a.append(`perm`, r ? `1` : `0`),
        a.append(`sessionid`, h()));
      try {
        (await z.default.post(
          `${T.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
          a,
        ),
          t == 0
            ? delete this.m_mapMutedUsers[e]
            : (this.m_mapMutedUsers[e] = i));
      } catch {
        console.log(`Failed to update mute for ` + i);
      }
    }
  }
  async MuteUserForSession(e, t) {
    if (e == this.m_strUserSteamID || this.m_ulBroadcastSteamID == e) return;
    let n = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
    if (!this.m_mapMutedUsers[e]) {
      this.m_mapMutedUsers[e] = t;
      try {
        let t = E.Init(wt);
        (t.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: e,
          muted: !0,
        }),
          await Et.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            t,
          ));
      } catch {
        n &&
          (this.m_rgChatMessages.push({
            type: F.Error,
            msg: j(`#BroadcastChat_UserMuteFailed`, t),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          }),
          delete this.m_mapMutedUsers[e]);
      }
    }
    n ||
      this.m_rgChatMessages.push({
        type: F.Notification,
        msg: j(`#BroadcastChat_UserMutedLocal`, t),
        client_ts: Number(new Date()),
        instance_id: this.m_unInstanceID,
        in_game: !1,
        persona_name: ``,
        steamid: ``,
      });
  }
  async UnmuteUserForSession(e, t) {
    if (e != this.m_strUserSteamID) {
      if (
        (this.m_mapMutedUsers[e] && delete this.m_mapMutedUsers[e],
        this.m_ulBroadcastSteamID == this.m_strUserSteamID)
      )
        try {
          let n = E.Init(wt);
          (n.SetBodyFields({
            chat_id: this.m_ulChatID,
            user_steamid: e,
            muted: !1,
          }),
            await Et.MuteBroadcastChatUser(
              this.m_steamInterface.GetServiceTransport(),
              n,
            ),
            this.m_rgChatMessages.push({
              type: F.Notification,
              msg: j(`#BroadcastChat_UserUnmutedLocal`, t),
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: !1,
              persona_name: ``,
              steamid: ``,
            }));
        } catch {
          this.m_rgChatMessages.push({
            type: F.Error,
            msg: j(`#BroadcastChat_UserUnmuteFailed`, t),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      else
        this.m_rgChatMessages.push({
          type: F.Notification,
          msg: j(`#BroadcastChat_UserUnmutedLocal`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
    }
  }
  RemoveUserMessagesLocal(e) {
    this.m_rgChatMessages = this.m_rgChatMessages.filter(
      (t) => t.steamid !== e,
    );
  }
  async RemoveUserMessagesServer(e, t) {
    if (e != this.m_strUserSteamID)
      try {
        let t = E.Init(Tt);
        (t.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: e }),
          await Et.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            t,
          ));
      } catch {
        this.m_rgChatMessages.push({
          type: F.Error,
          msg: j(`#BroadcastChat_RemoveMessagesFailed`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async UpdateChatMessageFlair(e) {
    let t = E.Init(Dt);
    (t.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${e}:`,
    }),
      await Et.UpdateChatMessageFlair(
        this.m_steamInterface.GetServiceTransport(),
        t,
      ));
  }
  IsUserMutedLocally(e) {
    return !!this.m_mapMutedUsers[e];
  }
  BIsUserBroadcastModerator(e) {
    return this.m_mapBroadcastModeratorUsers.has(e);
  }
  IsUserBroadcaster(e) {
    return e === this.m_ulBroadcastSteamID;
  }
  SyncChat() {
    ((this.m_tsFirstRequest = null),
      (this.m_nFromFirstRequestMS = 0),
      (this.m_nNextChatTS = 0),
      (this.m_rgChatMessages = []));
  }
};
(e([n], q.prototype, `m_mapChannelModeratorUsers`, void 0),
  e([n], q.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  e([n], q.prototype, `m_nRateLimitSeconds`, void 0),
  e([n], q.prototype, `m_bRateLimited`, void 0),
  e([n], q.prototype, `m_rgChatMessages`, void 0),
  e([n], q.prototype, `m_latestAnnouncement`, void 0),
  e([D], q.prototype, `FetchChatModerators`, null),
  e([D], q.prototype, `RequestLoop`, null),
  e([D], q.prototype, `MuteUserForSession`, null));
var ci = class e {
  constructor() {
    d(this);
  }
  m_mapBroadcasterSteamIDToEvents = new Map();
  m_mapBroadcasterSteamIDData = new Map();
  static GetBBCodeParam(e, t, n = ``) {
    let r = RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, `gmi`).exec(e);
    return r ? r[1] : n;
  }
  static ParseCalendarEventPresentersFromText(t) {
    let n = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
      r = [];
    for (;;) {
      let i = n.exec(t);
      if (i === null) break;
      let a = i[1],
        o = i[2],
        s = e.GetBBCodeParam(a, `steamid`),
        c = {
          steamID: s ? new O(s) : void 0,
          name: e.GetBBCodeParam(a, `name`),
          title: e.GetBBCodeParam(a, `title`),
          company: e.GetBBCodeParam(a, `company`),
          photo: e.GetBBCodeParam(a, `photo`),
          bio: o,
        };
      r.push(c);
    }
    return r;
  }
  static ParseEventModelPresenters(t, n) {
    let r = t.GetDescriptionWithFallback(n) ?? ``;
    return e.ParseCalendarEventPresentersFromText(r);
  }
  static ParseEventAppReferencesFromText(e) {
    let t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
      n = new Set();
    for (;;) {
      let r = t.exec(e);
      if (r === null) break;
      let i = r[1];
      n.add(Number(i));
    }
    return n;
  }
  static ParseEventModelAppReferences(t, n) {
    let r = t.GetDescriptionWithFallback(n) ?? ``,
      i = e.ParseEventAppReferencesFromText(r);
    if (t.jsondata?.referenced_appids)
      for (let e of t.jsondata.referenced_appids) i.add(e);
    return i;
  }
  async BuildBroadcasterSteamIDToActiveEventMap(e) {
    let t = st.GetTimeNowWithOverride(),
      n = e.GetCalendarItemsInTimeRange(t - 3600, t);
    for (let e of n.rgCalendarItems)
      Ye.QueueLoadPartnerEvent(e.clanid, e.unique_id);
    let r = n.rgCalendarItems.map((e) =>
        Ye.LoadPartnerEventFromClanEventGIDAndClanSteamID(
          O.InitFromClanID(e.clanid, T.EUNIVERSE),
          e.unique_id,
          0,
        ),
      ),
      i = await Promise.all(r),
      a = new Map();
    for (let e of i)
      if (e && !(e.endTime && e.endTime < t))
        for (let t of e.GetBroadcastWhitelistAsSteamIDs()) {
          let n = a.get(t);
          n ? n.push(e) : a.set(t, [e]);
        }
    return a;
  }
  IsBroadcasterAlreadyBound(e, t) {
    let n = this.m_mapBroadcasterSteamIDToEvents.get(e) ?? [],
      r = n.length;
    if ((t ? t.length : 0) != r) return !1;
    for (let e = 0; e < r; e++) if (n[e] != t[e].GID) return !1;
    return !0;
  }
  static BuildSteamIDToPresenterMapFromEventList(t, n) {
    let r = new Map();
    for (let i of t) {
      if (!i) continue;
      let t = e.ParseEventModelPresenters(i, n);
      for (let e of t) e.steamID && r.set(e.steamID.ConvertTo64BitString(), e);
    }
    return r;
  }
  RemoveCachedDataIfNotInMap(e) {
    let t = [];
    (this.m_mapBroadcasterSteamIDToEvents.forEach((n, r) => {
      e.has(r) || t.push(r);
    }),
      t.forEach((e) => {
        (this.m_mapBroadcasterSteamIDData.delete(e),
          this.m_mapBroadcasterSteamIDToEvents.delete(e));
      }));
  }
  static BuildAppIDRefsForEventList(t, n) {
    let r = new Set();
    for (let i of t)
      e.ParseEventModelAppReferences(i, n).forEach((e) => r.add(e));
    return Array.from(r);
  }
  UpdateCachedDataFromEvents(t, n) {
    t.forEach((t, r) => {
      if (this.IsBroadcasterAlreadyBound(r, t)) return;
      let i = {
        m_mapPresenters: e.BuildSteamIDToPresenterMapFromEventList(t, n),
        m_rgAppIDs: e.BuildAppIDRefsForEventList(t, n),
      };
      (this.m_mapBroadcasterSteamIDData.set(r, i),
        this.m_mapBroadcasterSteamIDToEvents.set(
          r,
          t.map((e) => e.GID ?? ``),
        ));
    });
  }
  async SynchronizeEventsWithBroadcasts(e, t) {
    let n = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
    (this.RemoveCachedDataIfNotInMap(n), this.UpdateCachedDataFromEvents(n, t));
  }
  GetPresenterMapForBroadcasterSteamID(e) {
    return this.m_mapBroadcasterSteamIDData.get(e)?.m_mapPresenters;
  }
  GetAppIDListForBroadcasterSteamID(e) {
    return this.m_mapBroadcasterSteamIDData.get(e)?.m_rgAppIDs;
  }
};
e([n], ci.prototype, `m_mapBroadcasterSteamIDData`, void 0);
var li = new ci(),
  J = ie();
function ui(e) {
  return (0, J.jsx)(xe, {
    onEscKeypress: e.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, J.jsx)(fi, {
      redirectURL: e.redirectURL,
      guestOption: e.guestOption,
    }),
  });
}
function di() {
  Ce(
    (0, J.jsx)(ui, { ownerWin: window, redirectURL: window.location.href }),
    window,
    { strTitle: j(`#Login_SignInTitle`) },
  );
}
function fi(e) {
  let { redirectURL: t, guestOption: n } = e,
    [r] = (0, R.useState)(
      new kt(new At(T.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [i, a] = (0, R.useState)(!1);
  return (0, J.jsx)(`div`, {
    children: i
      ? (0, J.jsx)(Ke, {})
      : (0, J.jsx)(Je, {
          autoFocus: !0,
          transport: r,
          platform: 2,
          onComplete: (e) => {
            e == Ge.k_PrimaryDomainFail ? a(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          theme: `modal`,
          children: n && (0, J.jsx)(qe, { redirectURL: t }),
        }),
  });
}
var pi = `u-hyk5J5tIY-`,
  mi = `doqBDS-zTtg-`,
  hi = `DHv28C3kLqY-`,
  gi = () =>
    (0, J.jsx)(`div`, {
      className: pi,
      children: (0, J.jsx)(`div`, { className: mi }),
    }),
  _i = () =>
    (0, J.jsx)(`div`, {
      className: pi,
      children: (0, J.jsx)(`div`, { className: hi }),
    }),
  vi = `Utigx2dvTSs-`,
  yi = `IPiWi3ba7Oc-`,
  bi = `Tt1HS5eK4UQ-`,
  xi = `_2NN20ePjOoE-`,
  Si = `Q5sAYcjkGuw-`,
  Ci = `JhPLxwFuvY8-`,
  wi = `-zOT4HlZFNc-`,
  Ti = `NFc5gI--APM-`,
  Ei = `gMm9gxp-VwY-`,
  Di = `_9JbCPa5peFE-`,
  Oi = `jhZ68t8aO0U-`,
  ki = `cF6FbGIaOso-`,
  Ai = `uWbWS4Xl7nU-`,
  ji = `_0bHpv5DDjVk-`,
  Mi = `GJr1kPqad-w-`,
  Ni = `_8whJ5F1f7no-`,
  Pi = `ngi9yWTTH6Q-`,
  Fi = `O0WGKKnt-b0-`,
  Ii = `n4yzVjIUqg0-`,
  Li = `gB1ggcMqZ4U-`,
  Ri = `h1DcT5FSiVw-`,
  Y = class e {
    constructor() {
      d(this);
    }
    giveaway_id = void 0;
    seconds_until_drawing = void 0;
    rtime_start = void 0;
    rtime_end = void 0;
    closed = void 0;
    winner_count = void 0;
    BIsValid() {
      return this.giveaway_id !== void 0 && this.giveaway_id !== null;
    }
    BStarted() {
      return this.BIsValid()
        ? (this.seconds_until_drawing !== void 0 &&
            this.seconds_until_drawing >= 0) ||
            (this.winner_count !== void 0 && this.winner_count > 0)
        : !1;
    }
    clone() {
      let t = new e();
      return (
        (t.giveaway_id = this.giveaway_id),
        (t.seconds_until_drawing = this.seconds_until_drawing),
        (t.rtime_start = this.rtime_start),
        (t.rtime_end = this.rtime_end),
        (t.closed = this.closed),
        (t.winner_count = this.winner_count),
        t
      );
    }
  };
(e([n], Y.prototype, `giveaway_id`, void 0),
  e([n], Y.prototype, `seconds_until_drawing`, void 0),
  e([n], Y.prototype, `rtime_start`, void 0),
  e([n], Y.prototype, `rtime_end`, void 0),
  e([n], Y.prototype, `closed`, void 0),
  e([n], Y.prototype, `winner_count`, void 0));
var X = class e {
  constructor() {
    d(this);
  }
  m_mapGiveawayIDToNextDrawInfo = new Map();
  m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
  m_bLoadedFromConfig = !1;
  m_mapNextDrawChangeCallback = new Map();
  GetKey(e, t) {
    return e + `_` + t;
  }
  GetInfoByInstance(e, t) {
    return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(this.GetKey(e, t));
  }
  GetNextDrawChangeCallback(e) {
    let t = this.m_mapNextDrawChangeCallback.get(e);
    return (
      t || ((t = new se()), this.m_mapNextDrawChangeCallback.set(e, t)), t
    );
  }
  CopyToGiveaway(e, t) {
    (t.closed != e.closed && (t.closed = e.closed),
      t.giveaway_id != e.giveaway_id && (t.giveaway_id = e.giveaway_id),
      t.rtime_start != e.rtime_start && (t.rtime_start = e.rtime_start),
      t.rtime_end != e.rtime_end && (t.rtime_end = e.rtime_end),
      t.winner_count != e.winner_count && (t.winner_count = e.winner_count),
      t.seconds_until_drawing != e.seconds_until_drawing &&
        (t.seconds_until_drawing = e.seconds_until_drawing));
  }
  async ReloadGiveaway(e, t) {
    if (!e) return null;
    let n = T.STORE_BASE_URL + `prizes/nextdraw/` + e,
      i = { origin: self.origin },
      a = await z.default.get(n, { params: i }),
      o = r(() => {
        let n = this.m_mapGiveawayIDToNextDrawInfo.get(e);
        if (
          (n || ((n = new Y()), this.m_mapGiveawayIDToNextDrawInfo.set(e, n)),
          this.CopyToGiveaway(a.data, n),
          t !== void 0)
        ) {
          let n = this.GetKey(e, t),
            r = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(n);
          (r ||
            ((r = new Y()),
            this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(n, r)),
            this.CopyToGiveaway(a.data, r));
        }
        return n;
      });
    return (this.GetNextDrawChangeCallback(e).Dispatch(o), o);
  }
  static s_Singleton;
  static Get() {
    return (
      e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
      e.s_Singleton
    );
  }
  Init() {
    if (!this.m_bLoadedFromConfig) {
      let e = l(`giveawaynextdraw`, `application_config`);
      if (e && e.giveaway_id) {
        let t = new Y();
        (this.CopyToGiveaway(e, t),
          this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t));
      }
      this.m_bLoadedFromConfig = !0;
    }
  }
};
(e([n], X.prototype, `m_mapGiveawayIDToNextDrawInfo`, void 0),
  e([v], X.prototype, `CopyToGiveaway`, null));
var zi = class e {
  m_intervalID;
  m_intervalCountDownID;
  static s_GlobalInstance = 0;
  m_myInstanceNumber = 0;
  constructor() {
    ((this.m_myInstanceNumber = e.s_GlobalInstance), (e.s_GlobalInstance += 1));
  }
  ClearRefreshInterval() {
    this.m_intervalID &&= (window.clearInterval(this.m_intervalID), void 0);
  }
  ClearCountDown() {
    this.m_intervalCountDownID &&=
      (window.clearInterval(this.m_intervalCountDownID), void 0);
  }
  SetupRefreshDataInterval(e, t) {
    if ((this.ClearRefreshInterval(), !e.closed)) {
      let n =
        e.seconds_until_drawing !== void 0 &&
        e.seconds_until_drawing <= 0 &&
        e.winner_count == 0
          ? 6e4
          : 5e3;
      this.m_intervalID = window.setInterval(t, n);
    }
  }
  SetupCountDown(e, t) {
    e !== void 0 &&
      e > 0 &&
      (this.m_intervalCountDownID = window.setInterval(t, 1e3));
  }
};
(e([D], zi.prototype, `ClearRefreshInterval`, null),
  e([D], zi.prototype, `ClearCountDown`, null),
  e([D], zi.prototype, `SetupRefreshDataInterval`, null),
  e([D], zi.prototype, `SetupCountDown`, null));
function Bi(e, t) {
  let n = X.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
  n &&
    n.seconds_until_drawing !== void 0 &&
    (--n.seconds_until_drawing,
    n.seconds_until_drawing == 0 && t.ClearCountDown());
}
function Vi(e, t) {
  let n = X.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
  n &&
    n.BIsValid() &&
    n.seconds_until_drawing !== void 0 &&
    n.seconds_until_drawing <= 0 &&
    !n.closed &&
    (t.ClearCountDown(),
    X.Get()
      .ReloadGiveaway(e, t.m_myInstanceNumber)
      .then((n) => {
        n && t.SetupCountDown(n.seconds_until_drawing, () => Bi(e, t));
      }));
}
function Hi(e) {
  let [t] = (0, R.useState)(new zi()),
    n = ce();
  (0, R.useEffect)(
    () => (
      X.Get()
        .ReloadGiveaway(e, t.m_myInstanceNumber)
        .then((r) => {
          r &&
            (t.SetupRefreshDataInterval(r, () => Vi(e, t)),
            t.SetupCountDown(r.seconds_until_drawing, () => Bi(e, t)),
            n());
        }),
      () => {
        (t.ClearRefreshInterval(), t.ClearCountDown());
      }
    ),
    [t, e, n],
  );
  let r = X.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
    [i, a, o] = N(() => [r?.winner_count, r?.closed, r?.seconds_until_drawing]);
  return !r || r.giveaway_id == null || !r.BStarted() || i === void 0
    ? { bLoadingGiveawayInfo: !0 }
    : {
        bLoadingGiveawayInfo: !1,
        winner_count: i,
        closed: a ?? !1,
        seconds_until_drawing: o ?? -1,
      };
}
var Ui = `aE9NemwHX3U-`,
  Wi = `-LW3HYdhtwg-`,
  Gi = `UfXKJfvB2aU-`,
  Ki = `NjuVylscv-c-`,
  qi = `fQEvRYMgKZ8-`,
  Ji = `Jz1BUHL6vfU-`,
  Yi = `qUAIeS1LipI-`,
  Xi = `hCW7GiiXdrk-`,
  Zi = `gmY72gO6Jbk-`;
function Qi(e) {
  let { latestAnnouncement: t } = e;
  return t?.type == `giveaway_draw`
    ? (0, J.jsx)($i, { latestWinner: t })
    : null;
}
function $i(e) {
  let {
      latestWinner: t,
      className: n,
      strActionButton: r,
      strActionClassname: i,
    } = e,
    a = t.winners_info ?? [],
    o = a.length > 0 ? a[0].accountid : 0,
    [s, c] = R.useState(o),
    l = he(`${bt.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`),
    u = he(`${bt.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`);
  b(!!t.giveaway_gid, `Giveaway draw announcement is missing its giveaway`, t);
  let d = Hi(t.giveaway_gid),
    f = d.bLoadingGiveawayInfo || d.closed ? null : d.seconds_until_drawing,
    p = o === x.accountid;
  R.useEffect(() => {
    s != o && setTimeout(() => c(o), 1500);
  }, [o, s]);
  let m =
    a.length > 0 && a[0].persona
      ? a[0].persona
      : j(`#GA2022_UnknownPersonaName`);
  return (0, J.jsx)(fe, {
    href: `https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022`,
    className: n,
    children: (0, J.jsxs)(`div`, {
      className: S({ [Ui]: !0, [Wi]: s === o }),
      children: [
        (0, J.jsx)(`div`, {
          className: Ki,
          children: (0, J.jsx)(`img`, { className: qi, src: l }),
        }),
        (0, J.jsxs)(`div`, {
          className: Gi,
          children: [
            s !== o &&
              (0, J.jsx)(`div`, {
                className: S(`l-AUoGdZDTw-`),
                children: Se(
                  `#GA2022_Congrats_Deck_Unknown`,
                  (0, J.jsx)(`br`, {}),
                ),
              }),
            s === o &&
              (0, J.jsx)(`div`, {
                className: S(`l-AUoGdZDTw-`, `-LW3HYdhtwg-`),
                children: Se(
                  p
                    ? `#GA2022_Congrats_Deck_Me`
                    : `#GA2022_Congrats_Deck_OTher`,
                  m,
                  (0, J.jsx)(`br`, {}),
                ),
              }),
            !!(f && f > 0) &&
              (0, J.jsx)(`div`, {
                className: `B7DECy1bqvs-`,
                children: Se(`#GA2022_Congrats_NextDraw`, f),
              }),
          ],
        }),
        (0, J.jsx)(`img`, { className: Ji, src: u }),
        !!r &&
          (0, J.jsx)(`div`, {
            className: i,
            children: p ? j(`#GA2022_YouWonNextSteps`) : r,
          }),
      ],
    }),
  });
}
function ea(e, t) {
  let [n, r] = N(() => [
      t?.steamid,
      t?.steamid ? I.GetBroadcast(t.steamid)?.m_ulBroadcastID : void 0,
    ]),
    [i, a] = R.useState(null);
  R.useEffect(() => {
    let e = null;
    return (
      n &&
        ((e = si.Get().GetOrCreateChat(r ?? ``, n)),
        e.StartForSteamID(n, r ?? ``),
        a(e)),
      () => {
        e && (e.Stop(), a(null));
      }
    );
  }, [n, r]);
  let o = N(() => i?.m_latestAnnouncement || null);
  if (o?.type == `giveaway_draw`) {
    let t = o;
    if (t.giveaway_gid == e) return t;
  }
  return null;
}
function ta(e) {
  let { gidGiveaway: t, stream: n } = e,
    r = ea(t, n),
    i = It(`GameAwardDrop2022`),
    a = null,
    o = Xi;
  return (
    x.logged_in
      ? i?.registered
        ? ((a = j(`#GA2022_AlreadyRegistered`)), (o = Zi))
        : (a = j(`#GA2022_RegisterToWin`))
      : (a = j(`#GA2022_RegisterLoginToWin`)),
    r
      ? (0, J.jsx)($i, {
          latestWinner: r,
          className: Yi,
          strActionButton: a,
          strActionClassname: o,
        })
      : null
  );
}
var na = RegExp(`ː([^ː]*)ː`, `g`),
  ra = RegExp(
    `^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)`,
    `i`,
  );
function ia(e, t, n) {
  return n
    ? `presenter`
    : t.GetBroadcastSteamID() === e
      ? `broadcaster`
      : t.BIsUserBroadcastModerator(e)
        ? `moderator`
        : ``;
}
var aa = (e) => {
    let { userType: t, msg: n, presenterInfo: r } = e;
    if (t === `presenter` && r)
      return (0, J.jsx)(`span`, {
        children: (0, J.jsx)(ft, {
          name: r.name ?? ``,
          title: r.title,
          photo: r.photo,
          company: r.company ?? ``,
          bioString: r.bio,
          children: (0, J.jsx)(`a`, {
            className: S(Si, void 0),
            href: T.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: n.persona_name,
          }),
        }),
      });
    {
      let e;
      return (
        (t === `broadcaster` || t === `moderator`) && (e = void 0),
        (0, J.jsx)(`span`, {
          children: (0, J.jsx)(`a`, {
            className: S(Si, e),
            href: T.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
            "data-miniprofile": `s` + n.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: n.persona_name,
          }),
        })
      );
    }
  },
  oa = (e) => {
    switch (e.userType) {
      case `presenter`:
        return (0, J.jsx)(we, {
          toolTipContent: j(`#BroadcastChat_Role_Presenter_ttip`),
          children: (0, J.jsx)(`span`, {
            className: Fi,
            children: (0, J.jsx)(ye, {}),
          }),
        });
      case `moderator`:
        return (0, J.jsx)(we, {
          toolTipContent: j(`#BroadcastChat_Role_Moderatorr_ttip`),
          children: (0, J.jsx)(`span`, {
            className: Fi,
            children: (0, J.jsx)(De, {}),
          }),
        });
      case `broadcaster`:
        return (0, J.jsx)(we, {
          toolTipContent: j(`#BroadcastChat_Role_Broadcaster_ttip`),
          children: (0, J.jsx)(`span`, {
            className: Fi,
            children: (0, J.jsx)(je, {}),
          }),
        });
      default:
        return null;
    }
  },
  Z = class extends R.Component {
    constructor(e) {
      (super(e), d(this));
    }
    m_chat = void 0;
    messagesContainer = R.createRef();
    componentDidMount() {
      this.StartChat();
    }
    componentDidUpdate(e) {
      (this.m_chat &&
        this.m_chat.m_bAutoScroll &&
        this.ScrollToNewestMessages(),
        (this.props.steamID !== e.steamID ||
          this.props.broadcastID !== e.broadcastID ||
          this.props.broadcastChannelID !== e.broadcastChannelID) &&
          this.StartChat());
    }
    componentWillUnmount() {
      this.m_chat && this.m_chat.Stop();
    }
    StartChat() {
      this.m_chat && this.m_chat.Stop();
      let e = si
        .Get()
        .GetOrCreateChat(
          this.props.broadcastChannelID ?? ``,
          this.props.steamID ?? ``,
        );
      if (((this.m_chat = e), this.props.broadcastChannelID))
        e.StartForChannel(this.props.broadcastChannelID);
      else if (
        this.props.steamID &&
        this.props.steamID &&
        (this.props.broadcastID || this.props.globalChat)
      ) {
        let t = this.props.broadcastID || `0`;
        (e.StartForSteamID(this.props.steamID, t),
          this.ScrollToNewestMessages());
      }
    }
    IsTrustedDomain(e) {
      return !!e.match(ra);
    }
    AddLinksEmoticons(e, t) {
      t && this.m_chat?.GetUserEmoticons();
      let n = e.split(na),
        r = [];
      for (let e = 0; e < n.length; e += 1)
        e % 2 == 1
          ? r.push((0, J.jsx)(_t, { emoticon: n[e], large: !0 }, e))
          : r.push(n[e]);
      return r;
    }
    HandleScroll(e) {
      let t = this.props.bInvertLayout
        ? e.currentTarget.scrollTop < 6
        : e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
          e.currentTarget.scrollHeight - 6;
      this.m_chat && (this.m_chat.m_bAutoScroll = t);
    }
    ScrollToNewestMessages() {
      this.messagesContainer &&
        this.messagesContainer.current &&
        (this.messagesContainer.current.scrollTop = this.props.bInvertLayout
          ? 0
          : this.messagesContainer.current.scrollHeight);
    }
    OnContextMenu(e, t) {
      let n = this.m_chat;
      if (!n || t.type !== F.Chat) return null;
      let r = [],
        i = n.IsUserBroadcaster(n.GetUserSteamID()),
        a = n.BIsUserBroadcastModerator(n.GetUserSteamID());
      return (
        (x && x.is_support) || i || a
          ? r.push(
              (0, J.jsx)(
                k,
                {
                  onSelected: () =>
                    n.RemoveUserMessagesServer(t.steamid, t.persona_name),
                  children: j(`#BroadcastChat_RemoveMessages`),
                },
                `remove`,
              ),
              (0, J.jsx)(
                k,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 12, !1, t.persona_name),
                  children: j(`#BroadcastChat_half_Mute`),
                },
                `updatebanh`,
              ),
              (0, J.jsx)(
                k,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 24, !1, t.persona_name),
                  children: j(`#BroadcastChat_day_Mute`),
                },
                `updateband`,
              ),
              (0, J.jsx)(
                k,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 168, !1, t.persona_name),
                  children: j(`#BroadcastChat_week_Mute`),
                },
                `updatebanw`,
              ),
              (0, J.jsx)(
                k,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 0, !0, t.persona_name),
                  children: j(`#BroadcastChat_perm_Mute`),
                },
                `updatebanp`,
              ),
              (0, J.jsx)(
                k,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(
                      t.steamid,
                      0,
                      0,
                      !1,
                      t.persona_name,
                      !0,
                    ),
                  children: j(`#BroadcastChat_Unmute`),
                },
                `removeban`,
              ),
            )
          : n.IsUserMutedLocally(t.steamid)
            ? r.push(
                (0, J.jsx)(
                  k,
                  {
                    onSelected: () =>
                      n.UnmuteUserForSession(t.steamid, t.persona_name),
                    children: j(`#BroadcastChat_UnmuteLocal`),
                  },
                  `unmuteuser`,
                ),
              )
            : r.push(
                (0, J.jsx)(
                  k,
                  {
                    onSelected: () =>
                      n.MuteUserForSession(t.steamid, t.persona_name),
                    children: j(`#BroadcastChat_MuteLocal`),
                  },
                  `muteuser`,
                ),
              ),
        ((x && x.is_support) || n.IsUserBroadcaster(n.GetUserSteamID())) &&
          t.steamid &&
          (n.BIsUserBroadcastModerator(t.steamid)
            ? r.push(
                (0, J.jsx)(
                  k,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !1,
                        t.persona_name,
                      ),
                    children: j(`#BroadcastChat_Remove_Moderator`),
                  },
                  `removemod`,
                ),
              )
            : r.push(
                (0, J.jsx)(
                  k,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !0,
                        t.persona_name,
                      ),
                    children: j(`#BroadcastChat_Add_Moderator`),
                  },
                  `addmod`,
                ),
              )),
        r.length
          ? Me(
              (0, J.jsxs)(ge, {
                children: [
                  (0, J.jsxs)(`div`, {
                    className: Ni,
                    children: [
                      j(`#BroadcastChat_User`),
                      (0, J.jsx)(`br`, {}),
                      (0, J.jsx)(`span`, {
                        className: Pi,
                        children: t.persona_name,
                      }),
                    ],
                  }),
                  r,
                ],
              }),
              e,
            )
          : null
      );
    }
    GetTypeClassName(e) {
      return e.type === F.Notification ? Ti : e.type === F.Error ? Ei : xi;
    }
    FormatMessage(e, t) {
      if (e.type === F.Chat) {
        let n = t ? t.FilterText(e.steamid, e.msg) : e.msg;
        return this.AddLinksEmoticons(n, !1);
      }
      return e.msg;
    }
    RenderUserChatLine(e, t, n, r) {
      let i = r?.get(t.steamid),
        a = t.type === F.Chat ? ia(t.steamid, e, i) : ``;
      return (0, J.jsxs)(
        `div`,
        {
          className: this.GetTypeClassName(t),
          onContextMenu: (e) => this.OnContextMenu(e, t),
          children: [
            t.type === F.Chat && (0, J.jsx)(oa, { userType: a }),
            t.flair &&
              (0, J.jsx)(`span`, {
                className: `xDmEH9mDo3o-`,
                children: this.AddLinksEmoticons(t.flair, !1),
              }),
            t.type === F.Chat &&
              (0, J.jsx)(aa, { userType: a, msg: t, presenterInfo: i }),
            t.type === F.Chat &&
              e.GetBroadcastSteamID() === t.steamid &&
              (0, J.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${j(`#BroadcastChat_Broadcaster`)})`,
              }),
            t.type === F.Chat &&
              e.m_mapChannelModeratorUsers.get(t.steamid) &&
              (0, J.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${j(`#BroadcastChat_Moderator`)})`,
              }),
            (0, J.jsxs)(`span`, {
              className: `${Ci} ${this.AddLinksEmoticons(t.msg, !1).filter((e) => e && typeof e == `string`).length ? `` : wi}`,
              children: [
                t.type === F.Chat ? ` : ` : ``,
                this.FormatMessage(t, e.TextFilterStore),
              ],
            }),
          ],
        },
        t.instance_id + `_` + t.client_ts + `_` + n,
      );
    }
    render() {
      let {
          hidden: e,
          bPartnerMemberOnlyChat: t,
          bInvertLayout: n,
          onSignIn: r,
        } = this.props,
        i = this.m_chat,
        a = i ? i.m_rgChatMessages : [],
        o = n ? a.reverse() : a,
        s = this.m_chat
          ? li.GetPresenterMapForBroadcasterSteamID(
              this.m_chat.GetBroadcastSteamID(),
            )
          : void 0,
        c = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
      return (0, J.jsxs)(`div`, {
        className: S(yi, `ChatPanel`),
        style: e ? { display: `none` } : void 0,
        children: [
          (0, J.jsx)(Qi, { latestAnnouncement: c }),
          n &&
            !!this.m_chat &&
            (0, J.jsx)(sa, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
          (0, J.jsx)(gi, {}),
          (0, J.jsx)(`div`, {
            className: S(`${bi} ${dt}`, `ChatMessages`),
            onScroll: this.HandleScroll,
            ref: this.messagesContainer,
            children: i && o.map((e, t) => this.RenderUserChatLine(i, e, t, s)),
          }),
          (0, J.jsx)(_i, {}),
          !n &&
            !!this.m_chat &&
            (0, J.jsx)(sa, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
        ],
      });
    }
  };
(e([n], Z.prototype, `m_chat`, void 0),
  e([D], Z.prototype, `StartChat`, null),
  e([D], Z.prototype, `HandleScroll`, null),
  e([D], Z.prototype, `OnContextMenu`, null),
  e([D], Z.prototype, `RenderUserChatLine`, null),
  (Z = e([M], Z)));
function sa(e) {
  let {
    oChat: t,
    emoticonStore: n,
    bPartnerMemberOnlyChat: r,
    onSignIn: i,
  } = e;
  return r && (!x?.logged_in || !x?.is_partner_member)
    ? (0, J.jsx)(fa, {})
    : x?.logged_in
      ? (0, J.jsx)(ca, { oChat: t, emoticonStore: n })
      : i
        ? (0, J.jsx)(da, { onSignIn: i })
        : null;
}
function ca(e) {
  let { oChat: t, emoticonStore: n } = e,
    [r, i] = R.useState(``),
    a = R.useRef(null),
    o = N(() => t.m_bRateLimited),
    s = R.useCallback(
      (e) => {
        !e.shiftKey &&
          e.charCode === 13 &&
          (t.m_bRateLimited || (t.SendMessage(r), i(``)), e.preventDefault());
      },
      [t, r],
    ),
    c = R.useCallback(
      (e, t = !1) => {
        (i(r + `\u02D0${e}\u02D0`), a?.current && a.current.focus());
      },
      [r, a],
    ),
    l = () => {
      (t.SendMessage(r), i(``));
    },
    u = o || r.trim().length == 0,
    d = S(ut, r.length == 0 && `_4X5-n9MaD8g-`);
  return (0, J.jsx)(`div`, {
    className: S(void 0, `ChatEntryCtn`),
    children: (0, J.jsxs)(`div`, {
      className: S(vi, `ChatEntry`),
      children: [
        (0, J.jsxs)(`form`, {
          className: `${pt}`,
          children: [
            (0, J.jsx)(`textarea`, {
              className: gt,
              placeholder: j(`#BroadcastChat_EnterResponse`),
              onKeyPress: s,
              onChange: (e) => i(e.target.value),
              value: r,
              ref: a,
            }),
            o &&
              (0, J.jsx)(ua, {
                nSeconds: t.m_nRateLimitSeconds,
                bRateLimited: t.m_bRateLimited,
              }),
            (0, J.jsx)(`button`, {
              className: d,
              title: j(`#ChatEntryButton_Submit`),
              disabled: u,
              onClick: l,
              children: (0, J.jsx)(me, {}),
            }),
          ],
        }),
        (0, J.jsx)(`div`, {
          style: { height: `50px` },
          className: `${ht}`,
          children: (0, J.jsxs)(`div`, {
            className: vt,
            children: [
              (0, J.jsx)(yt, {
                disabled: !1,
                OnEmoticonSelected: c,
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: n,
              }),
              (0, J.jsx)(la, { ...e, textInputRef: a }),
            ],
          }),
        }),
      ],
    }),
  });
}
function la(e) {
  let { oChat: t, emoticonStore: n, textInputRef: r } = e;
  return t.m_strFlairGroupID &&
    n.flair_list &&
    n.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
    ? (0, J.jsx)(yt, {
        disabled: !1,
        OnEmoticonSelected: (e) => {
          (t.UpdateChatMessageFlair(e), r?.current && r.current.focus());
        },
        rtLastAckedNewEmoticons: Number.MAX_VALUE,
        emoticonStore: n,
        strFlairGroupID: t.m_strFlairGroupID,
        title: j(`#ChatEntryButton_Flair`),
        buttonIcon: (0, J.jsx)(be, {}),
      })
    : null;
}
var ua = class extends R.Component {
  render() {
    return (0, J.jsx)(`div`, {
      className: Di,
      children: (0, J.jsxs)(`div`, {
        className: Oi,
        children: [
          (0, J.jsx)(`div`, {
            className: `${Ai} ${ki}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, J.jsx)(`div`, {
            className: `${ji} ${ki}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, J.jsx)(`div`, {
            className: Mi,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
        ],
      }),
    });
  }
};
function da(e) {
  return (0, J.jsx)(`div`, {
    className: Ii,
    children: (0, J.jsx)(_e, {
      onClick: e.onSignIn,
      className: S(Ri),
      children: j(`#BroadcastChat_Login`),
    }),
  });
}
function fa(e) {
  return (0, J.jsxs)(`div`, {
    className: Ii,
    children: [
      (0, J.jsx)(`div`, {
        className: Li,
        children: j(`#Broadcast_PartnerChat_Login`),
      }),
      !x.logged_in &&
        !T.IN_STEAMUI &&
        (0, J.jsx)(_e, {
          onClick: di,
          className: S(`h1DcT5FSiVw-`),
          children: j(`#Login_SignIn`),
        }),
    ],
  });
}
var pa = `_7FIE12jcFio-`,
  ma = `l3NO7dsjryo-`,
  ha = `gxhjub7-6JQ-`,
  ga = M((e) => {
    let { appid: t } = e,
      n = Ve(),
      r = (0, R.useRef)({ include_assets: !0, include_release: !0 }),
      i = Ue(t),
      { data: a } = Pe(i),
      { data: o } = Ne(i),
      { data: s } = Fe(i),
      [c, l] = Yt(t, r.current),
      u = S(pa, `StoreSaleWidgetContainer_mini`),
      d = ma,
      f = ha;
    if (a == null)
      return (0, J.jsx)(`div`, {
        className: u,
        children: (0, J.jsx)(at, { size: `medium` }),
      });
    if (a == null || !a.name) return (0, J.jsx)(`div`, { className: void 0 });
    let p = a.type != 8,
      m = ot(Le(a), n);
    return (0, J.jsxs)(`div`, {
      className: u,
      children: [
        (0, J.jsx)(`a`, {
          href: m,
          target: T.IN_CLIENT ? void 0 : `_blank`,
          children: (0, J.jsx)(Mt, {
            id: i,
            children: (0, J.jsx)(`div`, {
              className: d,
              children:
                o &&
                (0, J.jsx)(`img`, {
                  className: f,
                  src: Ie(o, `small_capsule`),
                  alt: a.name,
                }),
            }),
          }),
        }),
        (0, J.jsxs)(`div`, {
          className: ze,
          children: [
            (0, J.jsx)(`a`, {
              href: m,
              target: T.IN_CLIENT ? void 0 : `_blank`,
              children: (0, J.jsx)(Mt, {
                id: i,
                children: (0, J.jsx)(`div`, {
                  className: S(Be, `StoreSaleWidgetTitle`),
                  children: a.name,
                }),
              }),
            }),
            s &&
              (0, J.jsx)(`div`, { className: `A8oyzoRvWQ8-`, children: Re(s) }),
            !!p && (0, J.jsx)(He, { id: i, bShowDemoButton: !0 }),
          ],
        }),
      ],
    });
  });
function _a() {
  let e = window.GetUsabilityTracker;
  if (e) return e();
}
var va = !1;
function ya(e) {
  return !!(e && e.thumbnail_http_address);
}
var Q = class e {
  constructor() {
    d(this);
  }
  static s_GlobalStore;
  m_inFlightRequests = new Map();
  m_lookupKeyToEmbedStreamDef = new Map();
  m_lookupStreams = new Map();
  m_playReadyStream = new Map();
  m_bMapHasStartedVideo = new Map();
  m_mapBroadcastChecked = new Map();
  m_pageChatStatus = `hide`;
  m_streamChatStatus = `hide`;
  m_bUserChatExpanded = void 0;
  m_bUserPreferenceHideBroadcastByDefault = void 0;
  m_bCollapsed = void 0;
  m_setStreamChangedListeners = new Set();
  m_bUseFakeData = !1;
  m_onLoadContextCall = new Map();
  BHasStreams(e) {
    let t = this.GetStreams(e);
    return !!(t && t.length > 0);
  }
  AddCallbackOnNewContext(e, t, n) {
    this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), {
      name: t,
      fnCallback: n,
    });
  }
  ClearCallbackOnNewContext(e) {
    this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), null);
  }
  GetPlayReadyStream(e) {
    let t = this.GetStreamsLookupKeyFromDef(e);
    return this.m_playReadyStream.get(t);
  }
  BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
    return !!this.m_bUserPreferenceHideBroadcastByDefault;
  }
  BIsEmbeddedStreamCollapsed() {
    return !!this.m_bCollapsed;
  }
  SetEmbeddedStreamCollapsed(e) {
    this.m_bCollapsed != e && (this.m_bCollapsed = e);
  }
  GetConcurrentStreams(e) {
    let t = this.GetStreams(e);
    return t ? t.filter((e) => ya(e)).length : 0;
  }
  GetChatVisibility() {
    return this.m_pageChatStatus === `remove` ||
      this.m_streamChatStatus === `remove`
      ? `remove`
      : this.m_bUserChatExpanded === void 0
        ? this.m_pageChatStatus === `show`
          ? `show`
          : this.m_pageChatStatus === `hide` ||
              this.m_streamChatStatus === `hide`
            ? `hide`
            : `show`
        : this.m_bUserChatExpanded
          ? `show`
          : `hide`;
  }
  ToggleChatVisibility() {
    let e = this.GetChatVisibility();
    e !== `remove` && (this.m_bUserChatExpanded = e === `hide`);
  }
  DebugDumpContextAndAvailableContext(e) {
    (console.log(`Requested context`, this.GetStreamsLookupKeyFromDef(e)),
      console.log(`Available context count: `, this.m_lookupStreams.size),
      this.m_lookupStreams.forEach((e, t) => {
        console.log(t, e.length);
      }));
  }
  GetStreams(e) {
    let t = this.GetStreamsLookupKeyFromDef(e);
    return this.m_lookupStreams.get(t);
  }
  GetBroadcastURL(e) {
    let t;
    return (
      (t = e.steamid
        ? new O(e.steamid)
        : O.InitFromAccountID(e.accountid, T.EUNIVERSE)),
      T.COMMUNITY_BASE_URL + `broadcast/watch/` + t.ConvertTo64BitString()
    );
  }
  BIsAppStreaming(e) {
    let t = !1;
    return (
      this.m_lookupStreams.forEach((n) => {
        t ||=
          !!n &&
          n.some((t) => I.GetOrCreateBroadcastInfo(t.steamid).m_nAppID === e);
      }),
      t
    );
  }
  GetStreamsForAppID(e) {
    let t = [];
    return (
      this.m_lookupStreams.forEach((n) => {
        n?.forEach((n) => {
          I.GetOrCreateBroadcastInfo(n.steamid).m_nAppID === e && t.push(n);
        });
      }),
      t
    );
  }
  AddStreamChangedListener(e) {
    this.m_setStreamChangedListeners.add(e);
  }
  RemoveStreamChangedListener(e) {
    this.m_setStreamChangedListeners.delete(e);
  }
  async LoadBIsEmbeddedBroadcastHidden(e) {
    if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
      let t = l(`broadcastuser`, `application_config`);
      if (!t)
        try {
          let n =
            T.STORE_BASE_URL + `broadcast/ajaxgetuserbroadcastpreferences`;
          t = (await z.default.get(n, { params: {}, cancelToken: e.token }))
            .data;
        } catch (e) {
          (console.log(`LoadBIsEmbeddedBroadcastHidden: ` + it(e).strErrorMsg),
            (t = { bHideStoreBroadcast: !1 }));
        }
      r(() => {
        ((this.m_bUserPreferenceHideBroadcastByDefault = t.bHideStoreBroadcast),
          (this.m_bCollapsed = t.bHideStoreBroadcast));
      });
    }
    return this.BIsEmbeddedBroadcastHiddenByDefaultUserSettings();
  }
  async SetupEmbeddableVOD(e, t) {
    ((this.m_bUseFakeData = !1),
      (this.m_streamChatStatus = `remove`),
      b(!!e.nAppIDVOD, `SetupEmbeddableVOD requires a VOD appid`),
      await Ft.Get().QueueAppRequest(e.nAppIDVOD, {
        include_assets: !0,
        include_trailers: !0,
      }));
    let n = Ft.Get().GetApp(e.nAppIDVOD),
      r = new et();
    ((r.accountid = 0),
      (r.nAppIDVOD = e.nAppIDVOD),
      (r.default_selection_priority = L.k_ePrimary),
      (r.current_selection_priority = L.k_ePrimary),
      (r.thumbnail_http_address = n?.GetAssets()?.GetHeaderURL() || ``),
      (r.title = n?.GetName() || ``));
    let i = this.GetStreams(e);
    if (
      (b(
        !!i,
        `SetupEmbeddableVOD called before the streams loaded`,
        e.nAppIDVOD,
      ),
      i.unshift(r),
      t)
    ) {
      let t = this.GetStreamsLookupKeyFromDef(e);
      this.m_playReadyStream.set(t, r);
    }
  }
  async HintLoadEmbeddablePreviewStreams(e) {
    let t = {
      eventid: e.event ? e.event.GID : void 0,
      previewAccounts:
        e.bIsPreview && e.accountIDs
          ? e.accountIDs.slice().sort().join(`,`)
          : void 0,
    };
    try {
      let n = await z.default.get(
        T.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpreview`,
        { params: t },
      );
      return this.HandleHintLoadBroadcastResponse(e, n.data);
    } catch (e) {
      let t = it(e);
      console.error(
        `HintLoadEmbeddablePreviewStreams hit error loading: ` + t.strErrorMsg,
        t,
      );
    }
    return [];
  }
  async HintLoadEmbeddableStreams(e) {
    let t = this.MapEmbeddableStreamToRequest(e),
      n = this.GetStreamsLookupKeyFromParam(t),
      r = this.m_inFlightRequests.get(n);
    return (
      r ||
        (this.m_lookupKeyToEmbedStreamDef.set(n, e),
        (r = this.InternalHintLoadEmbeddableStreams(e, t)),
        this.m_inFlightRequests.set(n, r)),
      r
    );
  }
  async InternalHintLoadEmbeddableStreams(e, t) {
    let n = l(`broadcast_available_for_page`, `application_config`);
    if (nt(n)) return this.HandleHintLoadBroadcastResponse(e, n);
    try {
      let n = await z.default.get(
        T.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpage`,
        { params: t },
      );
      return this.HandleHintLoadBroadcastResponse(e, n.data);
    } catch (e) {
      let t = it(e);
      console.error(
        `HintLoadEmbeddableStreams hit error loading: ` + t.strErrorMsg,
        t,
      );
    }
    return [];
  }
  async HandleHintLoadBroadcastResponse(e, t) {
    ((this.m_bUseFakeData = !1),
      e.bIsPreview &&
        (t?.filtered?.length > 0
          ? (b(!!e.event, `Broadcast preview requires an event`),
            this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
              e.event,
              t.filtered,
            ))
          : ((t = {
              filtered: [{}],
              success: 1,
              total_count: 1,
              err_msg: ``,
              broadcast_chat_visibility: `hide`,
            }),
            (this.m_bUseFakeData = !0))),
      t.broadcast_chat_visibility &&
        (this.m_pageChatStatus = t.broadcast_chat_visibility));
    let n = [];
    r(() => {
      t.filtered.forEach((e) => {
        e.steamid ||= O.InitFromAccountID(
          e.accountid,
          T.EUNIVERSE,
        ).ConvertTo64BitString();
        let t = I.GetOrCreateBroadcastInfo(e.steamid),
          r = e.appid ? Number(e.appid) : 7;
        ((t.m_nAppID = r),
          (t.m_strAppId = `` + r),
          e.current_selection_priority === void 0 &&
            (e.current_selection_priority = e.default_selection_priority),
          r != 7 && n.push(r));
      });
    });
    let i = this.GetStreamsLookupKeyFromDef(e);
    if (
      (this.m_lookupStreams.set(i, t.filtered), this.m_onLoadContextCall.has(i))
    ) {
      let e = this.m_onLoadContextCall.get(i);
      e && e.fnCallback();
    }
    let a = this.GetStreams(e) ?? [];
    return (await this.AutoStartVideoStream(e, a), a);
  }
  ExtractBroadcastPrioritiesFromPartnerEventForPreview(e, t) {
    let n = Array.from(e.jsondata.broadcast_whitelist ?? []),
      r = Array.from(e.jsondata.broadcast_priority ?? []),
      i = new Map();
    for (let e = 0; e < n.length && !(e >= r.length); e++)
      i.set(n[e], $e(r[e]));
    t.forEach((e) => {
      let t = Number(e.accountid);
      i.has(t) && (e.current_selection_priority = i.get(t));
    });
  }
  async AutoStartVideoStream(e, t) {
    let n = this.GetStreamsLookupKeyFromDef(e);
    if (this.m_bMapHasStartedVideo.get(n)) return null;
    if (this.m_bUseFakeData) {
      if (!this.m_playReadyStream.get(n)) {
        let e = {
          accountid: 0,
          thumbnail_http_address: ``,
          default_selection_priority: L.k_eGeneral,
          current_selection_priority: L.k_eGeneral,
        };
        this.m_playReadyStream.set(n, e);
      }
      return this.m_playReadyStream;
    }
    return this.PlayFromAvailableStreams(e, t);
  }
  async PlayFromAvailableStreams(e, t, n = !1) {
    let r = new Set();
    for (;;) {
      let i = t.filter((e) => !r.has(e) && (!n || !e.nAppIDVOD)),
        a = this.GetAutoStartStream(i);
      if (!a) return null;
      if (await this.AttemptToPlayStream(e, a)) return a;
      r.add(a);
    }
  }
  async AttemptToPlayStream(e, t) {
    let n = this.GetStreamsLookupKeyFromDef(e),
      r = t.accountid ?? 0;
    if (
      (this.m_bMapHasStartedVideo.set(n, !0),
      this.m_mapBroadcastChecked.has(r) ||
        this.m_mapBroadcastChecked.set(
          r,
          this.InternalAttemptToPlayStream(e, t),
        ),
      t.nAppIDVOD)
    )
      this.m_playReadyStream.set(n, t);
    else {
      let i = await this.m_mapBroadcastChecked.get(r);
      if (i?.success == 1) {
        ((t.steamid = i.steamid),
          this.m_playReadyStream.set(n, t),
          (this.m_streamChatStatus =
            this.GetConcurrentStreams(e) > 1
              ? `hide`
              : (t.broadcast_chat_visibility ?? null)),
          this.m_setStreamChangedListeners.forEach((e) => e(t)));
        let r = I.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
        Sa(r, 1, t.snr);
      } else return null;
    }
    return t;
  }
  async InternalAttemptToPlayStream(e, t) {
    this.GetStreamsLookupKeyFromDef(e);
    try {
      let e = T.STORE_BASE_URL + `broadcast/ajaxcheckbroadcast`,
        n = {
          broadcastaccountid: t.accountid,
          viewer_token: I.GetViewerToken(),
          origin: self.origin,
        };
      return (await z.default.get(e, { params: n })).data;
    } catch (e) {
      let t = it(e);
      console.error(`Broadcast.AttemptToPlayStream: ` + t.strErrorMsg, t);
    }
    return null;
  }
  GetAutoStartStream(e) {
    if (!e) return null;
    let t = e.filter((e) => ya(e)),
      n = t.reduce((e, t) => Math.max(e, ba(t)), 0),
      r = t.filter((e) => ba(e) === n);
    return r.length === 0 ? null : r[Math.floor(Math.random() * r.length)];
  }
  MapEmbeddableStreamToRequest(e) {
    return {
      appid: e.appid,
      promotionName: e.bIsPreview ? `preview` : e.promotionName,
      clanid: e.clanid
        ? e.clanid
        : e.event
          ? e.event.clanSteamID.GetAccountID()
          : void 0,
      listid: e.listid,
      subid: e.subid,
      bundleid: e.bundleid,
      eventid: e.event ? e.event.GID : void 0,
      previewAccounts:
        e.bIsPreview && e.accountIDs
          ? e.accountIDs.slice().sort().join(`,`)
          : void 0,
      test: va,
      cc: T.COUNTRY,
      l: T.LANGUAGE,
      hubtype: e.event?.GetContentHubType(),
      hubcategory: e.event?.GetContentHubCategory(),
      hubtagid: e.event?.GetContentHubTag(),
      tabuniqueid: e.tabuniqueid,
      tabfilter: e.tabfilter,
      rt_now_override_test: st.BHasTimeOverride()
        ? st.GetTimeNowWithOverride()
        : void 0,
    };
  }
  GetStreamsLookupKeyFromDef(e) {
    return this.GetStreamsLookupKeyFromParam(
      this.MapEmbeddableStreamToRequest(e),
    );
  }
  GetStreamsLookupKeyFromParam(e) {
    return JSON.stringify(e);
  }
  static Get() {
    return (
      e.s_GlobalStore || ((e.s_GlobalStore = new e()), e.s_GlobalStore.Init()),
      e.s_GlobalStore
    );
  }
  Init() {}
};
(e([n], Q.prototype, `m_lookupStreams`, void 0),
  e([n], Q.prototype, `m_playReadyStream`, void 0),
  e([n], Q.prototype, `m_pageChatStatus`, void 0),
  e([n], Q.prototype, `m_streamChatStatus`, void 0),
  e([n], Q.prototype, `m_bUserChatExpanded`, void 0),
  e([n], Q.prototype, `m_bUserPreferenceHideBroadcastByDefault`, void 0),
  e([n], Q.prototype, `m_bCollapsed`, void 0),
  e([v], Q.prototype, `HintLoadEmbeddablePreviewStreams`, null),
  e([v], Q.prototype, `AttemptToPlayStream`, null));
function ba(e) {
  return e.current_selection_priority || L.k_eGeneral;
}
function xa(e) {
  e.sort((e, t) =>
    ba(e) == ba(t)
      ? e.viewer_count == t.viewer_count
        ? (t.accountid ?? 0) - (e.accountid ?? 0)
        : (t.viewer_count ?? 0) - (e.viewer_count ?? 0)
      : ba(t) - ba(e),
  );
}
async function Sa(e, t, n) {
  if (e > 0 && e != 7 && n) {
    let r = new URLSearchParams();
    (r.append(`page_action`, `` + t),
      r.append(`snr`, n),
      z.default.post(
        T.STORE_BASE_URL + `ajaxreportproductaction/` + e + `/`,
        r,
      ));
  }
}
var Ca = new St(),
  wa = `58px`,
  Ta = `58px`,
  Ea = `rYnVBBDJIz4-`,
  Da = `dsbI18mZ-Ps-`,
  Oa = `dQY8CyT7Y5Y-`,
  ka = `f0G28hbeNYE-`,
  Aa = `EGznwOBrytk-`,
  ja = `wMy1ewxYK3I-`,
  Ma = `iLleweU-ckI-`,
  Na = `ov8XKFWsMMc-`,
  Pa = `KcqUD5hkzyk-`,
  Fa = `ECJWFclMDpk-`,
  Ia = `KkgW9CzRVMI-`,
  La = `SObNBjtfgbU-`,
  Ra = `-d8EQqzPfNs-`,
  za = `FS3-jxto3Z8-`,
  Ba = `twoyTg-z2n4-`,
  Va = `_887-MlrXKDQ-`,
  Ha = `Yb1KTWt-6pE-`,
  Ua = `HbhpxnAX2Kk-`,
  Wa = `vePf8-fcS4g-`,
  Ga = `xpdX0ycPNx0-`,
  Ka = `QGqVyFFAFtg-`,
  qa = `qwFxl5tJlG0-`,
  Ja = `-PTMMcy5uF4-`,
  Ya = `mYXN-do7NYQ-`,
  Xa = `rIfaYmVdzDA-`,
  Za = `hgFSY87Dsxg-`,
  Qa = `u-lLy1wH1Is-`,
  $a = `pllfTQu8jag-`,
  eo = `GsIDuGodBUQ-`,
  to = `_2IUJG6CdnFA-`,
  no = `Jvoz-8Cocp4-`,
  ro = `zuLP0piEwuA-`,
  io = `eR0CdHz8x6I-`,
  ao = `GsHUhqcJfJQ-`,
  oo = `_77LbK-akGBo-`,
  so = `iADCJfccVl8-`,
  co = `_6NUM7GMUXrI-`,
  lo = `eWHilAZFWEA-`,
  uo = `yzeJT1XucOE-`,
  fo = M((e) => {
    let { event: t } = e,
      n = t.clanSteamID.GetAccountID(),
      r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
      i = (0, R.useRef)(null),
      [a, o] = (0, R.useState)(t ? Ot.GetCreatorHome(t.clanSteamID) : void 0);
    if (
      ((0, R.useEffect)(() => {
        let e = z.default.CancelToken.source();
        return (
          (i.current = e.cancel),
          (async () => {
            let t = O.InitFromClanID(n, T.EUNIVERSE),
              r = await Ot.LoadCreatorHome(t, !1, e);
            e.token.reason || o(r);
          })(),
          () => {
            i.current && i.current(`BroadcastDropsDisplay: unmounting`);
          }
        );
      }, [n]),
      r || !a || !a.BIsLoaded())
    )
      return null;
    let s =
        T.COMMUNITY_BASE_URL +
        `gid/` +
        t.jsondata.broadcast_item_drops_details_clan_accountid +
        `/partnerevents/view/` +
        t.jsondata.broadcast_item_drops_details_event_gid,
      c = t.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
    return (0, J.jsx)(`div`, {
      className: Aa,
      children: (0, J.jsxs)(`div`, {
        children: [
          j(
            a.GetName().length > 0
              ? c % 60 == 0
                ? `#SalePage_WatchForDrop_Hours_CreatorNamed`
                : `#SalePage_WatchForDrop_Minutes_CreatorNamed`
              : c % 60 == 0
                ? `#SalePage_WatchForDrop_Hours_Developer`
                : `#SalePage_WatchForDrop_Minutes_Developer`,
            c % 60 == 0 ? c / 60 : c,
            a.GetName(),
          ),
          !!t.jsondata.broadcast_item_drops_details_clan_accountid &&
            (0, J.jsx)(`a`, {
              href: s,
              target: T.IN_CLIENT ? `` : `_blank`,
              children: j(`#SalePage_WatchForDrop_LearnMore`),
            }),
        ],
      }),
    });
  });
function po(e) {
  let { steamid: t, closeModal: n } = e;
  return (0, J.jsxs)(Ee, {
    strDescription: ``,
    strTitle: j(`#Button_Share`),
    onCancel: n,
    onOK: n,
    bAlertDialog: !0,
    modalClassName: `EventDisplay_Share_Dialog`,
    children: [(0, J.jsx)(mo, { steamid: t }), (0, J.jsx)(ho, { steamid: t })],
  });
}
function mo(e) {
  let { steamid: t } = e,
    n = go(t);
  return (0, J.jsxs)(`div`, {
    className: S(ct, Bt),
    children: [
      (0, J.jsx)(A, {
        toolTipContent: j(`#EventDisplay_Share_OnFaceBook`),
        children: (0, J.jsx)(fe, {
          href: n.strFacebookUrl,
          className: Ht,
          children: (0, J.jsx)(`img`, { className: S(lt), src: Zt }),
        }),
      }),
      (0, J.jsx)(A, {
        toolTipContent: j(`#EventDisplay_Share_OnTwitter`),
        children: (0, J.jsx)(fe, {
          href: n.strTwitterUrl,
          className: Ht,
          children: (0, J.jsx)(`img`, { className: S(lt), src: Qt }),
        }),
      }),
      (0, J.jsx)(A, {
        toolTipContent: j(`#EventDisplay_Share_OnReddit`),
        children: (0, J.jsx)(fe, {
          href: n.strRedditUrl,
          className: Ht,
          children: (0, J.jsx)(`img`, { className: S(lt), src: Xt }),
        }),
      }),
    ],
  });
}
function ho(e) {
  let { steamid: t } = e,
    n = R.createRef(),
    [r, i] = R.useState(``),
    a = R.createRef(),
    o = R.useCallback(
      (e) => {
        n.current &&
          n.current.ownerDocument.defaultView?.navigator.clipboard
            .writeText(n.current.value)
            .then((e) => {
              i(j(`#EventDisplay_Share_CopiedToClipboard`));
            })
            .catch((e) => {
              (i(j(`#EventDisplay_Share_FailedToCopyToClipboard`)),
                console.error(`Failed to copy link to clipboard:`, e));
            });
      },
      [n],
    ),
    s = T.COMMUNITY_BASE_URL + `broadcast/watch/` + t;
  return (0, J.jsxs)(`div`, {
    children: [
      (0, J.jsxs)(`div`, {
        className: S(ct, Lt),
        onClick: o,
        children: [
          (0, J.jsx)(`span`, {
            className: zt,
            children: j(`#EventDisplay_Share_Link`),
          }),
          (0, J.jsx)(`textarea`, {
            className: Rt,
            ref: n,
            value: s,
            readOnly: !0,
          }),
          !!document.queryCommandSupported(`copy`) &&
            (0, J.jsx)(A, {
              toolTipContent: j(`#ToolTip_CopyLinkToClipboard`),
              children: (0, J.jsx)(`div`, {
                className: S(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `_6y4EcbHPzTE-`),
                children: (0, J.jsx)(`img`, {
                  className: `SGi7-TqE4Rs-`,
                  src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%201801.5%201400%201409'%20enable-background='new%200%201801.5%201400%201409'%20xml:space='preserve'%3e%3cpath%20id='iconmonstr-link-1_1_'%20fill='%23FFFFFF'%20d='M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0%20c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294%20c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280%20c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941%20c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z%20M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0%20c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0%20c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647%20c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059%20S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z'/%3e%3c/svg%3e`,
                }),
              }),
            }),
        ],
      }),
      (0, J.jsx)(`div`, { ref: a, className: Vt, children: r }),
    ],
  });
}
function go(e) {
  let t = T.COMMUNITY_BASE_URL + `broadcast/share/` + e;
  return {
    strFacebookUrl: t + `?site=facebook&t=` + Math.random(),
    strTwitterUrl: t + `?site=twitter`,
    strRedditUrl: t + `?site=reddit`,
  };
}
var _o = {
  list: [
    { appid: 444090, url: `https://steam.tv/paladins` },
    { appid: 386360, url: `https://steam.tv/smite` },
    { appid: 813820, url: `https://steam.tv/realmroyale` },
    {
      appid: 583950,
      url: `https://steam.tv/artifact`,
      broadcasterAccountID: 912972716,
    },
    {
      appid: 570,
      url: `https://steam.tv/dota`,
      broadcasterAccountID: 238221269,
    },
    {
      appid: 1025790,
      url: `https://steam.tv/steamawards`,
      broadcasterAccountID: 934427243,
    },
    {
      appid: 730,
      url: `https://steam.tv/csgo`,
      broadcasterAccountID: 927819071,
    },
  ],
};
function vo() {
  let e = oe();
  return !s() && !e;
}
function yo(e) {
  return vo() ? (0, J.jsx)($, { ...e }) : null;
}
var $ = class extends R.Component {
  m_cancelSignal = z.default.CancelToken.source();
  m_bMarkedUsabilitySeen = !1;
  state = {
    bShowPopoutHeader: !1,
    bExpanded: !1,
    bLoadingPreference: !0,
    style: {
      maxHeight: `0vh`,
      overflow: `hidden`,
      transition: `max-height 1s ease-in-out`,
    },
    innerStyle: {
      maxHeight: `0vh`,
      overflow: `hidden`,
      transition: `max-height 1s ease-in-out`,
    },
    bStartMuted: !0,
  };
  async componentDidMount() {
    (await Q.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
      this.m_cancelSignal.token.reason ||
        this.setState({
          bLoadingPreference: !1,
          bExpanded: !Q.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
          innerStyle: {
            ...this.state.innerStyle,
            maxHeight: Q.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
              ? `0vh`
              : `100vh`,
          },
        }),
      await (this.props.bIsPreview &&
      this.props.accountIDs &&
      !this.props.event?.BUsesContentHubForItemSource()
        ? Q.Get().HintLoadEmbeddablePreviewStreams(this.props)
        : Q.Get().HintLoadEmbeddableStreams(this.props)),
      this.props.nAppIDVOD &&
        Q.Get().SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
      window.setTimeout(() => {
        this.m_cancelSignal.token.reason ||
          this.setState({ style: { ...this.state.style, maxHeight: `100vh` } });
      }, 10));
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`BroadcastEmbeddable component unmounted`);
  }
  ToggleBroadcastExpandShrink() {
    let e = Q.Get().GetPlayReadyStream(this.props);
    if (!e) return;
    let t = this.state.bExpanded,
      n = I.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
    (Sa(n, t ? 2 : 3, e.snr),
      t && _a()?.AddEvent(tn),
      window.setTimeout(
        () =>
          this.setState({
            innerStyle: {
              ...this.state.innerStyle,
              maxHeight: t ? `0vh` : `100vh`,
            },
          }),
        10,
      ),
      t ||
        this.setState({ bExpanded: !this.state.bExpanded }, () =>
          Q.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
        ));
  }
  OnShrinkTransitionEnd() {
    this.state.innerStyle.maxHeight === `0vh` &&
      this.setState({ bExpanded: !1 }, () =>
        Q.Get().SetEmbeddedStreamCollapsed(!0),
      );
  }
  async onStreamSelect(e) {
    (this.setState({ bStartMuted: !1 }),
      Q.Get().GetPlayReadyStream(this.props)?.accountid != e.accountid &&
        (await Q.Get().AttemptToPlayStream(this.props, e)));
  }
  async PlayNextNonVOD() {
    this.setState({ bStartMuted: !1 });
    let e = (Q.Get().GetStreams(this.props) ?? []).filter(
      (e) => !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
    );
    await Q.Get().PlayFromAvailableStreams(this.props, e, !0);
  }
  ConstructSidePanels(e, t) {
    let n = { bRightPanelArtworkOrEmpty: !0 };
    if (this.props.bWidePlayer) return n;
    let r = Q.Get().GetConcurrentStreams(this.props) > 1,
      i = I.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
      a = (0, J.jsx)(Co, { ImgUrl: e.right_panel }, `right` + i),
      o = (0, J.jsx)(Co, { ImgUrl: e.left_panel }, `left` + i);
    if (i < 11) {
      let t = e.steamid
        ? li.GetAppIDListForBroadcasterSteamID(e.steamid)
        : void 0;
      t && t.length === 1 && (i = t[0]);
    }
    return (
      (this.props.promotionName ||
        this.props.bIsPreview ||
        this.props.subid ||
        this.props.bundleid) &&
        i >= 11 &&
        (!this.props.event ||
          !this.props.event.jsondata.broadcast_force_banner) &&
        ((a = (0, J.jsx)(ga, { appid: i }, `mini` + e.accountid)),
        (n.bRightPanelArtworkOrEmpty = !1)),
      r && !t
        ? ((n.leftPanel = (0, J.jsx)(
            Eo,
            {
              broadcastEmbedContext: this.props,
              curStream: e,
              onStreamSelect: this.onStreamSelect,
              fnFilterStreams: this.props.fnFilterStreams,
              bShowCapsuleArt: this.props.bShowCapsuleArt,
            },
            `selector` + i,
          )),
          (n.rightPanel = a))
        : t
          ? ((n.leftPanel = (0, J.jsx)(`div`, {})),
            (n.rightPanel = (0, J.jsx)(ko, {
              stream: e,
              orientation: `rightside`,
            })),
            (n.bRightPanelArtworkOrEmpty = !1))
          : ((n.leftPanel = o), (n.rightPanel = a)),
      n
    );
  }
  MarkBroadcastSeen() {
    this.m_bMarkedUsabilitySeen ||
      ((this.m_bMarkedUsabilitySeen = !0), _a()?.AddEvent(en));
  }
  render() {
    if (this.state.bLoadingPreference) return null;
    let e = Q.Get().GetPlayReadyStream(this.props);
    if (e) {
      this.MarkBroadcastSeen();
      let t = Q.Get().GetChatVisibility() === `show`,
        { event: n, language: r, fnRenderBroadcastContext: i } = this.props,
        a = n
          ? {
              ...e,
              left_panel: n.GetImageURL(`broadcast_left`, r || ne(T.LANGUAGE)),
              right_panel: n.GetImageURL(
                `broadcast_right`,
                r || ne(T.LANGUAGE),
              ),
              store_title: n.GetBroadcastTitle(r || ne(T.LANGUAGE)),
              broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
            }
          : e,
        o = this.ConstructSidePanels(a, t),
        s = a.store_title ? a.store_title : a.title,
        c = Q.Get().GetConcurrentStreams(this.props) > 1,
        l = () => {
          (a.nAppIDVOD && this.PlayNextNonVOD(), this.props.fnOnVideoEnd?.());
        };
      return (0, J.jsx)(R.Fragment, {
        children: (0, J.jsxs)(`div`, {
          className: `broadcast_embed_top_ctn_trgt`,
          style: this.state.style,
          children: [
            (0, J.jsxs)(`div`, {
              className: S({ [Ea]: !0, [ka]: !!n, broadcast_brd_ctn_trgt: !0 }),
              children: [
                (0, J.jsxs)(`div`, {
                  className: S(ja, `bordered_title_trgt`),
                  children: [
                    (0, J.jsx)(tt, {}),
                    (0, J.jsx)(`div`, { className: Ma, children: s }),
                    (0, J.jsxs)(`div`, {
                      className: Na,
                      children: [
                        !this.state.bExpanded &&
                          (0, J.jsx)(A, {
                            toolTipContent: j(
                              `#StoreBroadcast_Change_store_Broadcast_settings`,
                            ),
                            children: (0, J.jsx)(`div`, {
                              className: `Ku3ORKocBrQ-`,
                              onClick: () =>
                                window.open(
                                  `${T.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                ),
                            }),
                          }),
                        (0, J.jsx)(A, {
                          toolTipContent: j(`#StoreBroadcast_Hide_Tooltip`),
                          children: (0, J.jsx)(`div`, {
                            className: this.state.bExpanded ? Pa : Fa,
                            onClick: this.ToggleBroadcastExpandShrink,
                          }),
                        }),
                      ],
                    }),
                    !!a.gamedata_subtitle &&
                      (0, J.jsx)(`div`, {
                        className: `WdbOLmmaXso-`,
                        children: a.gamedata_subtitle,
                      }),
                  ],
                }),
                !!this.state.bExpanded &&
                  (0, J.jsxs)(`div`, {
                    className: S({
                      "lOf3hlirldE-": !0,
                      embeddable_ctn_trgt: !0,
                      multistream: c,
                      broadcast_right_panel_simple: o.bRightPanelArtworkOrEmpty,
                      broadcast_chat_expanded: t,
                    }),
                    style: { ...this.state.innerStyle },
                    onTransitionEnd: this.OnShrinkTransitionEnd,
                    children: [
                      (0, J.jsx)(`div`, {
                        className: `HEBZJhZ641A-`,
                        children: o.leftPanel,
                      }),
                      (0, J.jsx)(bo, {
                        stream: a,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      (0, J.jsx)(`div`, {
                        className: `UHu5FWxee0A-`,
                        children: o.rightPanel,
                      }),
                      !!this.state.bExpanded &&
                        (0, J.jsx)(So, {
                          stream: a,
                          bMultistream: c,
                          chatAnnouncementGivewayGID: o.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ],
                  }),
              ],
            }),
            !!n &&
              !!(n.jsondata && n.jsondata.broadcast_item_drops_enabled) &&
              (0, J.jsx)(fo, { event: n }),
            (0, J.jsx)(`div`, { className: ro }),
          ],
        }),
      });
    }
    return (0, J.jsx)(`div`, { className: `NoBroadcastAvailable` });
  }
};
(e([D], $.prototype, `ToggleBroadcastExpandShrink`, null),
  e([D], $.prototype, `OnShrinkTransitionEnd`, null),
  e([D], $.prototype, `onStreamSelect`, null),
  e([D], $.prototype, `PlayNextNonVOD`, null),
  ($ = e([M], $)));
var bo = class extends R.Component {
  m_iVideoContainerRef = R.createRef();
  constructor(e) {
    (super(e),
      (this.state = {
        bPopout: !1,
        bPreventPopup: window.screen.width <= 768,
      }));
  }
  CloseBroadcastPopup() {
    let e = I.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (Sa(e, 7, this.props.stream.snr),
      _a()?.AddEvent(nn),
      this.setState({ bPopout: !1, bPreventPopup: !0 }));
  }
  OnEnter() {
    !this.state.bPreventPopup &&
      this.state.bPopout &&
      this.setState({ bPopout: !1 });
  }
  OnLeave() {
    !this.state.bPreventPopup &&
      !this.state.bPopout &&
      this.setState({ bPopout: !0 });
  }
  render() {
    return (0, J.jsx)(`div`, {
      className: La,
      children: (0, J.jsx)(mt, {
        onEnter: this.OnEnter,
        onLeave: this.OnLeave,
        onIntersectionChange: (e) => {
          e.isIntersecting || this.OnLeave();
        },
        className: S({
          [Ra]: !0,
          video_placeholder_trgt: !0,
          [Da]: this.props.bWidePlayer,
        }),
        ref: this.m_iVideoContainerRef,
        children: (0, J.jsxs)(`div`, {
          className: this.state.bPopout ? io : za,
          children: [
            this.state.bPopout &&
              (0, J.jsx)(wo, {
                steamIDBroadcast: this.props.stream.steamid,
                OnPreventPopup: this.CloseBroadcastPopup,
              }),
            (0, J.jsx)(`div`, {
              className: co,
              children: (0, J.jsx)(We, {
                steamIDBroadcast: this.props.stream.steamid,
                watchLocation: 6,
                bStartMuted: this.props.bStartMuted,
                fnRenderBroadcastContext: this.props.fnRenderBroadcastContext,
                fnOnVideoEnd: this.props.fnOnVideoEnd,
                nAppIDVOD: this.props.stream.nAppIDVOD,
              }),
            }),
          ],
        }),
      }),
    });
  }
};
(e([D], bo.prototype, `CloseBroadcastPopup`, null),
  e([D], bo.prototype, `OnEnter`, null),
  e([D], bo.prototype, `OnLeave`, null));
function xo(e) {
  let { stream: t } = e,
    [n] = N(() => [t.steamid]),
    r = I.GetOrCreateBroadcastInfo(n).m_nAppID,
    i = _o.list.find(
      (e) =>
        e.appid == r &&
        (!e.broadcasterAccountID || e.broadcasterAccountID == t.accountid),
    );
  if (i) {
    let e = i.url;
    return (
      (T.IN_CLIENT ||
        navigator.userAgent.indexOf(`Valve Steam Client`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam GameOverlay`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam Tenfoot`) >= 0) &&
        (e = `steam://openurl/` + e),
      (0, J.jsx)(`a`, {
        href: e,
        children: j(`#Broadcast_Embed_Watch_With_Frieds_SteamTV`),
      })
    );
  }
  {
    let e = T.COMMUNITY_BASE_URL + `broadcast/watch/` + n;
    return (0, J.jsx)(A, {
      toolTipContent: j(`#BroadcastWatch_View_Broadcast_Page`),
      children: (0, J.jsx)(`a`, {
        href: e,
        className: Ua,
        children: (0, J.jsx)(Te, {}),
      }),
    });
  }
}
var So = class extends R.Component {
  OnToggleChat(e) {
    e.preventDefault();
    let t = I.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (Sa(
      t,
      Q.Get().GetChatVisibility() === `show` ? 5 : 4,
      this.props.stream.snr,
    ),
      Q.Get().ToggleChatVisibility());
  }
  onWatchBroadcastPage() {
    let e = I.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    Sa(e, 9, this.props.stream.snr);
  }
  render() {
    let e = Q.Get().GetChatVisibility() != `remove`,
      t = Q.Get().GetChatVisibility() === `hide`,
      n = !this.props.stream.nAppIDVOD,
      r = n,
      i = Number.parseInt(
        `` +
          I.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nViewerCount,
      );
    return (0, J.jsxs)(`div`, {
      className: S(Ba, `viewer_bar`),
      children: [
        (0, J.jsxs)(`div`, {
          className: S(Wa, `viewer_count`),
          children: [(0, J.jsx)(pe, {}), Xe(i)],
        }),
        (0, J.jsxs)(`div`, {
          className: S(Va, `viewer_links`),
          children: [
            !!(e && !t && this.props.bMultistream) &&
              (0, J.jsx)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: (0, J.jsx)(`a`, {
                  href: `#`,
                  className: void 0,
                  onClick: this.OnToggleChat,
                  children: j(`#sale_three_section_show_streams`),
                }),
              }),
            e &&
              (0, J.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, J.jsx)(Oe, {}),
                  (0, J.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: this.OnToggleChat,
                    children: j(
                      t
                        ? `#sale_three_section_show_chat`
                        : `#sale_three_section_hide_chat`,
                    ),
                  }),
                ],
              }),
            r &&
              (0, J.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, J.jsx)(Ae, {}),
                  (0, J.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: (e) => {
                      let t = ue(e);
                      t &&
                        Ce(
                          (0, J.jsx)(po, {
                            steamid: this.props.stream.steamid ?? ``,
                          }),
                          t,
                        );
                    },
                    children: j(`#Broadcast_ShareBroadcast`),
                  }),
                ],
              }),
            (0, J.jsx)(A, {
              toolTipContent: j(
                `#StoreBroadcast_Change_store_Broadcast_settings`,
              ),
              children: (0, J.jsx)(`a`, {
                href:
                  T.STORE_BASE_URL +
                  `account/preferences/#store_broadcast_settings`,
                target: T.IN_CLIENT ? void 0 : `_blank`,
                className: Ha,
                children: (0, J.jsx)(ke, {}),
              }),
            }),
            n && (0, J.jsx)(xo, { ...this.props }),
          ],
        }),
        !!this.props.chatAnnouncementGivewayGID &&
          (0, J.jsx)(ta, {
            gidGiveaway: this.props.chatAnnouncementGivewayGID,
            stream: this.props.stream,
          }),
      ],
    });
  }
};
(e([D], So.prototype, `OnToggleChat`, null),
  e([D], So.prototype, `onWatchBroadcastPage`, null),
  (So = e([M], So)));
var Co = class extends R.Component {
    render() {
      let e = this.props.ImgUrl;
      return (0, J.jsxs)(`div`, {
        className: uo,
        children: [
          e &&
            (0, J.jsx)(`img`, {
              className: `KkgW9CzRVMI-`,
              src: this.props.ImgUrl,
            }),
          !e && (0, J.jsx)(`div`, { className: `KkgW9CzRVMI-` }),
        ],
      });
    }
  },
  wo = M((e) => {
    let { steamIDBroadcast: t } = e,
      n = I.GetOrCreateBroadcastInfo(t).m_nAppID;
    n = n == 7 ? 0 : n;
    let r = Ue(n),
      { data: i } = Pe(r);
    return (0, J.jsxs)(`div`, {
      className: [ao, void 0].join(` `),
      children: [
        i
          ? (0, J.jsx)(Nt, {
              id: r,
              className: oo,
              children: j(`#StoreBroadcast_Detault_popout_Title`),
            })
          : (0, J.jsx)(`div`, {
              className: oo,
              children: j(`#StoreBroadcast_Detault_popout_Title`),
            }),
        (0, J.jsx)(A, {
          toolTipContent: j(`#StoreBroadcast_close_broadcast_popup`),
          children: (0, J.jsx)(`button`, {
            className: so,
            onClick: e.OnPreventPopup,
            children: (0, J.jsx)(ve, {}),
          }),
        }),
      ],
    });
  });
function To(e, t) {
  let n = I.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
    r = Ft.Get().GetApp(n);
  return e && r?.GetAssets()?.GetHeaderURL() ? parseInt(wa) : parseInt(Ta);
}
function Eo(e) {
  let {
      curStream: t,
      onStreamSelect: n,
      fnFilterStreams: r,
      bShowCapsuleArt: i,
      broadcastEmbedContext: a,
    } = e,
    o = (0, R.useRef)(null),
    s = (0, R.useMemo)(() => {
      let e = (Q.Get().GetStreams(a) ?? []).filter((e) => !r || r(e));
      return (xa(e), e);
    }, [a, r]);
  return (
    (0, R.useEffect)(() => {
      if (o && o.current) {
        let e = s
          .map((e) => I.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
          .filter(Boolean);
        Ft.Get()
          .QueueMultipleAppRequests(e, { include_assets: !0 })
          .then(() => {
            if (o.current) {
              let e = 0;
              for (let n of s) {
                if (t.accountid == n.accountid) break;
                e += To(i, n);
              }
              o.current.scrollTop = e;
            }
          });
      }
    }, [s, i, t.accountid, o]),
    (0, J.jsx)(`div`, {
      ref: o,
      className: S({ [Ia]: !0, side_panels: !0, [eo]: !0, [no]: s.length > 3 }),
      children: (0, J.jsx)(`div`, {
        className: to,
        children: s.map((e) =>
          (0, J.jsx)(
            Do,
            {
              stream: e,
              bSelected: t.accountid == e.accountid,
              onStreamSelect: n,
              bShowCapsuleArt: i,
            },
            e.accountid ?? e.steamid,
          ),
        ),
      }),
    })
  );
}
function Do(e) {
  let { onStreamSelect: t, bSelected: n, stream: r, bShowCapsuleArt: i } = e,
    a = N(() => I.GetOrCreateBroadcastInfo(r.steamid).m_nAppID);
  a = a == 7 ? 0 : a;
  let o = Ue(a),
    { data: s } = Pe(o),
    { data: c } = Ne(o);
  if (!ya(r)) return null;
  let l = i && c ? Ie(c, `header`) : void 0,
    u = Number.parseInt(`` + r.viewer_count),
    d = !Number.isNaN(u),
    f = !!r.nAppIDVOD && s?.name;
  return (0, J.jsxs)(`div`, {
    className: S({
      [Ga]: !0,
      [void 0]: r.current_selection_priority == L.k_eFeatured,
      [Ka]: !!l,
    }),
    children: [
      (0, J.jsx)(Mt, {
        id: o,
        hoverClassName: Ja,
        children: (0, J.jsx)(Ze, {
          className: S(Ya, n && void 0),
          onClick: () => t && t(r),
          rootMargin: `100px 0px 100px 0px`,
          children: (0, J.jsx)(Oo, {
            strThumbnail: r.thumbnail_http_address,
            bSelected: n,
            strCapsuleArtURL: l,
          }),
        }),
      }),
      (0, J.jsx)(`div`, {
        className: S(Wa, !d && `QP7p0y7iNjE-`),
        children: d
          ? (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(pe, {}),
                (0, J.jsx)(`div`, { className: qa, children: Xe(u) }),
              ],
            })
          : f,
      }),
    ],
  });
}
function Oo(e) {
  let { strCapsuleArtURL: t, strThumbnail: n, bSelected: r } = e,
    i = r ? $a : Qa;
  if (t) {
    let e = [t];
    return (0, J.jsxs)(J.Fragment, {
      children: [
        (0, J.jsx)(`img`, { className: S(i, Xa), src: t }),
        (0, J.jsx)(Qe, { className: S(i, Za), srcs: e }),
      ],
    });
  }
  return (0, J.jsx)(`img`, { className: i, src: n });
}
function ko(e) {
  let { stream: t, orientation: n } = e,
    r = n == `below`,
    [i, a] = N(() => {
      let e = t.steamid ? I.GetBroadcast(t.steamid) : void 0;
      return [e, e?.m_ulBroadcastID];
    }),
    o = N(() => t.steamid);
  return i
    ? (0, J.jsx)(`div`, {
        className: S({ [void 0]: r, [void 0]: !r, [Oa]: !0 }),
        children: (0, J.jsx)(`div`, {
          className: lo,
          children: (0, J.jsx)(Z, {
            emoticonStore: Ca,
            watchLocation: 6,
            steamID: o,
            broadcastID: a,
          }),
        }),
      })
    : null;
}
export { wo as BroadcastEmbeddablePopoutHeader, yo as default };
