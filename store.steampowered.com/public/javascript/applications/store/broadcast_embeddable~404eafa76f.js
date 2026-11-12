/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Lt as n,
  Pt as r,
  ft as i,
  jt as a,
  kt as o,
  l as s,
  tt as c,
  u as l,
} from "./chunk~01cfc309bf.js";
import { Eo as u, Ia as d, Ti as f, oo as p } from "./chunk~6b8ddcaac8.js";
import { r as m } from "./chunk~4c761eb6f4.js";
import { n as h, t as ee } from "./chunk~a0dd05a569.js";
import { t as te } from "./chunk~4c13037b22.js";
import { n as ne } from "./chunk~5adf866415.js";
import "./chunk~8681f5c764.js";
import { a as g, c as re } from "./chunk~cbbb6ae37c.js";
import { n as ie } from "./chunk~f4c928a27a.js";
import { t as ae } from "./chunk~eefd71512b.js";
import { i as _, y as oe } from "./chunk~2f8c67b4de.js";
import { a as se, n as ce } from "./chunk~a19d1add1e.js";
import { o as le } from "./chunk~6cf3fe3e07.js";
import { n as ue } from "./chunk~710e3cfd2f.js";
import { l as de } from "./chunk~7b4b9eb713.js";
import { n as v, t as fe } from "./chunk~4d16ce5d1a.js";
import {
  F as pe,
  I as me,
  R as he,
  a as ge,
  b as _e,
  i as ve,
  l as ye,
  o as be,
  r as y,
  s as xe,
  v as Se,
  y as Ce,
} from "./chunk~3f4314f3b4.js";
import { n as we } from "./chunk~a7c5e71e12.js";
import {
  a as Te,
  c as Ee,
  i as De,
  n as Oe,
  o as ke,
  r as Ae,
  t as je,
} from "./chunk~05a38bc848.js";
import { t as Me } from "./chunk~030d1d075f.js";
import {
  $a as Ne,
  $y as Pe,
  Ar as Fe,
  Ay as Ie,
  Br as Le,
  Co as Re,
  Cr as b,
  Dy as ze,
  Ec as Be,
  Ey as Ve,
  Fc as He,
  Fn as Ue,
  Fu as We,
  Gl as Ge,
  Ja as Ke,
  Jy as x,
  Ka as qe,
  Kc as Je,
  Ku as Ye,
  Lb as S,
  Mr as Xe,
  Nb as Ze,
  Nr as C,
  Ny as Qe,
  Oy as $e,
  Pv as et,
  Qb as tt,
  Qx as nt,
  Ux as w,
  Vb as rt,
  Vr as T,
  Vv as it,
  Vy as at,
  Wb as ot,
  Xs as st,
  Ya as ct,
  aS as E,
  ar as lt,
  bc as ut,
  bx as D,
  cx as O,
  ds as dt,
  eS as k,
  iS as A,
  kn as ft,
  kv as pt,
  mc as mt,
  nS as j,
  oS as M,
  qa as ht,
  rS as N,
  s as gt,
  sS as P,
  tS as F,
  us as _t,
  ux as I,
  vt,
  vu as yt,
  wc as L,
  yS as bt,
  yu as xt,
  yx as R,
} from "./main.js";
import { n as St, t as Ct } from "./chunk~56e6a40e9e.js";
import { a as z, t as B } from "./chunk~10c934b72c.js";
import {
  a as V,
  i as wt,
  l as Tt,
  n as H,
  o as Et,
  s as Dt,
} from "./chunk~cadb22900a.js";
import { t as Ot } from "./chunk~85f65a382b.js";
import { t as kt } from "./chunk~383ae316bd.js";
import At from "./chunk~eee3bbd4cd.js";
var U = e(n()),
  W = e(c()),
  G = e(r(), 1),
  jt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  Mt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  Nt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  Pt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            unique_name: { n: 2, br: N.readString, bw: P.writeString },
            steamid: {
              n: 3,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  Ft = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            name: { n: 2, br: N.readString, bw: P.writeString },
            language: { n: 3, br: N.readString, bw: P.writeString },
            headline: { n: 4, br: N.readString, bw: P.writeString },
            summary: { n: 5, br: N.readString, bw: P.writeString },
            avatar_hash: { n: 6, br: N.readString, bw: P.writeString },
            schedule: { n: 7, br: N.readString, bw: P.writeString },
            rules: { n: 8, br: N.readString, bw: P.writeString },
            panels: { n: 9, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
    }
  },
  It = class e extends G.Message {
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
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  Lt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  Rt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: N.readString, bw: P.writeString },
            owner_steamid: {
              n: 2,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            name: { n: 3, br: N.readString, bw: P.writeString },
            language: { n: 4, br: N.readString, bw: P.writeString },
            headline: { n: 5, br: N.readString, bw: P.writeString },
            summary: { n: 6, br: N.readString, bw: P.writeString },
            schedule: { n: 7, br: N.readString, bw: P.writeString },
            rules: { n: 8, br: N.readString, bw: P.writeString },
            panels: { n: 9, br: N.readString, bw: P.writeString },
            is_partnered: { n: 10, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  zt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            image_type: { n: 2, br: N.readEnum, bw: P.writeEnum },
            image_index: { n: 3, br: N.readUint32, bw: P.writeUint32 },
            image_width: { n: 4, br: N.readUint32, bw: P.writeUint32 },
            image_height: { n: 5, br: N.readUint32, bw: P.writeUint32 },
            file_size: { n: 6, br: N.readUint32, bw: P.writeUint32 },
            file_extension: { n: 7, br: N.readString, bw: P.writeString },
            file_hash: { n: 8, br: N.readString, bw: P.writeString },
            undo: { n: 9, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  Bt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.replace_image_hash || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            replace_image_hash: { n: 1, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  Vt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            image_types: {
              n: 2,
              r: !0,
              q: !0,
              br: N.readEnum,
              pbr: N.readPackedEnum,
              bw: P.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Request`;
    }
  },
  Ht = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: Ut, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  Ut = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_type || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_type: { n: 1, br: N.readEnum, bw: P.writeEnum },
            image_path: { n: 2, br: N.readString, bw: P.writeString },
            image_index: { n: 3, br: N.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  Wt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
    }
  },
  Gt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: Kt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  Kt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link_index || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: N.readUint32, bw: P.writeUint32 },
            url: { n: 2, br: N.readString, bw: P.writeString },
            link_description: { n: 3, br: N.readString, bw: P.writeString },
            left: { n: 4, br: N.readUint32, bw: P.writeUint32 },
            top: { n: 5, br: N.readUint32, bw: P.writeUint32 },
            width: { n: 6, br: N.readUint32, bw: P.writeUint32 },
            height: { n: 7, br: N.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  qt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            links: { n: 2, c: Jt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  Jt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link_index || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: N.readUint32, bw: P.writeUint32 },
            url: { n: 2, br: N.readString, bw: P.writeString },
            link_description: { n: 3, br: N.readString, bw: P.writeString },
            left: { n: 4, br: N.readUint32, bw: P.writeUint32 },
            top: { n: 5, br: N.readUint32, bw: P.writeUint32 },
            width: { n: 6, br: N.readUint32, bw: P.writeUint32 },
            height: { n: 7, br: N.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
    }
  },
  Yt = class e extends G.Message {
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
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  Xt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  Zt = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_live || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_live: { n: 1, br: N.readBool, bw: P.writeBool },
            is_disabled: { n: 2, br: N.readBool, bw: P.writeBool },
            appid: { n: 3, br: N.readUint32, bw: P.writeUint32 },
            viewers: { n: 4, br: N.readUint64String, bw: P.writeUint64String },
            views: { n: 5, br: N.readUint64String, bw: P.writeUint64String },
            broadcaster_steamid: {
              n: 6,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            thumbnail_url: { n: 7, br: N.readString, bw: P.writeString },
            followers: {
              n: 8,
              br: N.readUint64String,
              bw: P.writeUint64String,
            },
            subscribers: {
              n: 9,
              br: N.readUint64String,
              bw: P.writeUint64String,
            },
            unique_name: { n: 10, br: N.readString, bw: P.writeString },
            broadcast_session_id: {
              n: 11,
              br: N.readUint64String,
              bw: P.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  K = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            unique_name: { n: 2, br: N.readString, bw: P.writeString },
            name: { n: 3, br: N.readString, bw: P.writeString },
            appid: { n: 4, br: N.readUint32, bw: P.writeUint32 },
            viewers: { n: 5, br: N.readUint64String, bw: P.writeUint64String },
            views: { n: 6, br: N.readUint64String, bw: P.writeUint64String },
            thumbnail_url: { n: 7, br: N.readString, bw: P.writeString },
            followers: {
              n: 8,
              br: N.readUint64String,
              bw: P.writeUint64String,
            },
            headline: { n: 9, br: N.readString, bw: P.writeString },
            avatar_url: { n: 10, br: N.readString, bw: P.writeString },
            broadcaster_steamid: {
              n: 11,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            subscribers: {
              n: 12,
              br: N.readUint64String,
              bw: P.writeUint64String,
            },
            background_url: { n: 13, br: N.readString, bw: P.writeString },
            is_featured: { n: 14, br: N.readBool, bw: P.writeBool },
            is_disabled: { n: 15, br: N.readBool, bw: P.writeBool },
            is_live: { n: 16, br: N.readBool, bw: P.writeBool },
            language: { n: 17, br: N.readString, bw: P.writeString },
            reports: { n: 18, br: N.readUint32, bw: P.writeUint32 },
            is_partnered: { n: 19, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GetBroadcastChannelEntry`;
    }
  },
  Qt = class e extends G.Message {
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
      return `CSteamTV_GetFollowedChannels_Request`;
    }
  },
  $t = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Response`;
    }
  },
  en = class e extends G.Message {
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
      return `CSteamTV_GetSubscribedChannels_Request`;
    }
  },
  tn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  nn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            undo: { n: 2, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  rn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_followed || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_followed: { n: 1, br: N.readBool, bw: P.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  an = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  on = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_subscribed || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_subscribed: { n: 1, br: N.readBool, bw: P.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  sn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            reason: { n: 2, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Request`;
    }
  },
  cn = class e extends G.Message {
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
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  ln = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  un = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_followed || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_followed: { n: 1, br: N.readBool, bw: P.writeBool },
            is_subscribed: { n: 2, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  dn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: N.readUint32, bw: P.writeUint32 },
            name: { n: 2, br: N.readString, bw: P.writeString },
            image: { n: 3, br: N.readString, bw: P.writeString },
            viewers: { n: 4, br: N.readUint64String, bw: P.writeUint64String },
            channels: { n: 5, c: K, r: !0, q: !0 },
            release_date: { n: 6, br: N.readString, bw: P.writeString },
            developer: { n: 7, br: N.readString, bw: P.writeString },
            publisher: { n: 8, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Game`;
    }
  },
  fn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: N.readUint32, bw: P.writeUint32 },
            algorithm: { n: 2, br: N.readEnum, bw: P.writeEnum },
            count: { n: 3, br: N.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Request`;
    }
  },
  pn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: dn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Response`;
    }
  },
  mn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.algorithm || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            algorithm: { n: 1, br: N.readEnum, bw: P.writeEnum },
            count: { n: 2, br: N.readUint32, bw: P.writeUint32 },
            appid: { n: 3, br: N.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Request`;
    }
  },
  hn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Response`;
    }
  },
  gn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  _n = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasters || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasters: { n: 1, c: vn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
    }
  },
  vn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            name: { n: 2, br: N.readString, bw: P.writeString },
            rtmp_token: { n: 3, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  yn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.issuer_steamid || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            time_expires: { n: 3, br: N.readString, bw: P.writeString },
            permanent: { n: 4, br: N.readBool, bw: P.writeBool },
            name: { n: 5, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatBan`;
    }
  },
  bn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            duration: { n: 3, br: N.readUint32, bw: P.writeUint32 },
            permanent: { n: 4, br: N.readBool, bw: P.writeBool },
            undo: { n: 5, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Request`;
    }
  },
  xn = class e extends G.Message {
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
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  Sn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Request`;
    }
  },
  Cn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: yn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  wn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            moderator_steamid: {
              n: 2,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            undo: { n: 3, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Request`;
    }
  },
  Tn = class e extends G.Message {
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
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  En = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Request`;
    }
  },
  Dn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            name: { n: 2, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatModerator`;
    }
  },
  On = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Dn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  kn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            word: { n: 2, br: N.readString, bw: P.writeString },
            undo: { n: 3, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Request`;
    }
  },
  An = class e extends G.Message {
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
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  jn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Request`;
    }
  },
  Mn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
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
              br: N.readString,
              bw: P.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  Nn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Request`;
    }
  },
  Pn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            view_url_template: { n: 2, br: N.readString, bw: P.writeString },
            flair_group_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: N.readUint64String,
              pbr: N.readPackedUint64String,
              bw: P.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Response`;
    }
  },
  Fn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.term || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { term: { n: 1, br: N.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Request`;
    }
  },
  In = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Response`;
    }
  },
  Ln = class e extends G.Message {
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
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  Rn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stream_live_email || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: N.readBool, bw: P.writeBool },
            stream_live_notification: { n: 2, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  zn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stream_live_email || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: N.readBool, bw: P.writeBool },
            stream_live_notification: { n: 2, br: N.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Request`;
    }
  },
  Bn = class e extends G.Message {
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
      return `CSteamTV_SetSteamTVUserSettings_Response`;
    }
  },
  Vn = class e extends G.Message {
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
      return `CSteamTV_GetMyBroadcastChannels_Request`;
    }
  },
  Hn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  Un = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasts: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  Wn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: K, r: !0, q: !0 },
            appid: { n: 2, br: N.readUint32, bw: P.writeUint32 },
            title: { n: 3, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_SingleGame`;
    }
  },
  Gn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: N.readUint32, bw: P.writeUint32 },
            game_name: { n: 2, br: N.readString, bw: P.writeString },
            broadcast: { n: 3, c: K },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GameListEntry`;
    }
  },
  Kn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: Gn, r: !0, q: !0 },
            title: { n: 2, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  qn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: K, r: !0, q: !0 },
            title: { n: 2, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  Jn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: K, r: !0, q: !0 },
            title: { n: 2, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  Yn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: K },
            title: { n: 2, br: N.readString, bw: P.writeString },
            chat_group_id: {
              n: 3,
              br: N.readUint64String,
              bw: P.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  Xn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: K },
            title: { n: 2, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Developer`;
    }
  },
  Zn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { title: { n: 1, br: N.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  Qn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.template_type || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            template_type: { n: 1, br: N.readEnum, bw: P.writeEnum },
            takeover: { n: 2, c: Un },
            single_game: { n: 3, c: Wn },
            game_list: { n: 4, c: Kn },
            quick_explore: { n: 5, c: qn },
            conveyor_belt: { n: 6, c: Jn },
            watch_party: { n: 7, c: Yn },
            developer: { n: 8, c: Xn },
            event: { n: 9, c: Zn },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageContentRow`;
    }
  },
  $n = class e extends G.Message {
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
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  er = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rows || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { rows: { n: 1, c: Qn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  tr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  nr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: N.readUint64String,
              bw: P.writeUint64String,
            },
            channel_id: {
              n: 2,
              br: N.readUint64String,
              bw: P.writeUint64String,
            },
            app_id: { n: 3, br: N.readUint32, bw: P.writeUint32 },
            broadcaster_steamid: {
              n: 4,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            creator_steamid: {
              n: 5,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            video_description: { n: 6, br: N.readString, bw: P.writeString },
            live_time: { n: 7, br: N.readUint32, bw: P.writeUint32 },
            length_ms: { n: 8, br: N.readUint32, bw: P.writeUint32 },
            thumbnail_path: { n: 9, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  rr = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clips || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clips: { n: 1, c: nr, r: !0, q: !0 },
            thumbnail_host: { n: 2, br: N.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  ir = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cheer_type || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cheer_type: { n: 1, br: N.readUint32, bw: P.writeUint32 },
            cheer_amount: { n: 2, br: N.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  ar = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || k(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: N.readUint32, bw: P.writeUint32 },
            cheer_target_id: {
              n: 2,
              br: N.readFixed64String,
              bw: P.writeFixed64String,
            },
            cheers: { n: 3, c: ir, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Request`;
    }
  },
  or = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.aggregation_delay_ms || k(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            aggregation_delay_ms: { n: 1, br: N.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= A(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return M(e.M(), t, n);
    }
    static fromObject(t) {
      return j(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return F(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      E(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Response`;
    }
  },
  q;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamTV.CreateBroadcastChannel#1`, D(jt, t, n), Mt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.CreateBroadcastChannel = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelID#1`, D(Nt, t, n), Pt, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelID = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelProfile#1`, D(Ft, t, n), It, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelProfile = r;
  function i(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelProfile#1`, D(Lt, t, n), Rt, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelProfile = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelImage#1`, D(zt, t, n), Bt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelImage = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelImages#1`, D(Vt, t, n), Ht, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelImages = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SteamTV.SetBroadcastChannelLinkRegions#1`,
      D(qt, t, n),
      Yt,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetBroadcastChannelLinkRegions = s;
  function c(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelLinks#1`, D(Wt, t, n), Gt, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelLinks = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelBroadcasters#1`,
      D(gn, t, n),
      _n,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelBroadcasters = l;
  function u(e, t, n) {
    return e.SendMsg(`SteamTV.GetFollowedChannels#1`, D(Qt, t, n), $t, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetFollowedChannels = u;
  function d(e, t, n) {
    return e.SendMsg(`SteamTV.GetSubscribedChannels#1`, D(en, t, n), tn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSubscribedChannels = d;
  function f(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelStatus#1`, D(Xt, t, n), Zt, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelStatus = f;
  function p(e, t, n) {
    return e.SendMsg(`SteamTV.FollowBroadcastChannel#1`, D(nn, t, n), rn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.FollowBroadcastChannel = p;
  function m(e, t, n) {
    return e.SendMsg(`SteamTV.SubscribeBroadcastChannel#1`, D(an, t, n), on, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SubscribeBroadcastChannel = m;
  function h(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelClips#1`, D(tr, t, n), rr, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelClips = h;
  function ee(e, t, n) {
    return e.SendMsg(`SteamTV.ReportBroadcastChannel#1`, D(sn, t, n), cn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.ReportBroadcastChannel = ee;
  function te(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelInteraction#1`,
      D(ln, t, n),
      un,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelInteraction = te;
  function ne(e, t, n) {
    return e.SendMsg(`SteamTV.GetGames#1`, D(fn, t, n), pn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetGames = ne;
  function g(e, t, n) {
    return e.SendMsg(`SteamTV.GetChannels#1`, D(mn, t, n), hn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetChannels = g;
  function re(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatBan#1`, D(bn, t, n), xn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatBan = re;
  function ie(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatBans#1`, D(Sn, t, n), Cn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetChatBans = ie;
  function ae(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatModerator#1`, D(wn, t, n), Tn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatModerator = ae;
  function _(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatModerators#1`, D(En, t, n), On, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.GetChatModerators = _;
  function oe(e, t, n) {
    return e.SendMsg(`SteamTV.AddWordBan#1`, D(kn, t, n), An, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.AddWordBan = oe;
  function se(e, t, n) {
    return e.SendMsg(`SteamTV.GetWordBans#1`, D(jn, t, n), Mn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetWordBans = se;
  function ce(e, t, n) {
    return e.SendMsg(`SteamTV.JoinChat#1`, D(Nn, t, n), Pn, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.JoinChat = ce;
  function le(e, t, n) {
    return e.SendMsg(`SteamTV.Search#1`, D(Fn, t, n), In, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.Search = le;
  function ue(e, t, n) {
    return e.SendMsg(`SteamTV.GetSteamTVUserSettings#1`, D(Ln, t, n), Rn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSteamTVUserSettings = ue;
  function de(e, t, n) {
    return e.SendMsg(`SteamTV.SetSteamTVUserSettings#1`, D(zn, t, n), Bn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetSteamTVUserSettings = de;
  function v(e, t, n) {
    return e.SendMsg(`SteamTV.GetMyBroadcastChannels#1`, D(Vn, t, n), Hn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetMyBroadcastChannels = v;
  function fe(e, t, n) {
    return e.SendMsg(`SteamTV.GetHomePageContents#1`, D($n, t, n), er, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetHomePageContents = fe;
  function pe(e, t, n) {
    return e.SendMsg(`SteamTV.AppCheer#1`, D(ar, t, n), or, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AppCheer = pe;
})((q ||= {}));
var sr = 4,
  cr = 500,
  lr = 10,
  J = class e {
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
      return (n || ((n = new Y()), this.m_mapChats.set(e || t, n)), n);
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      o(this);
    }
  };
S([t], J.prototype, `m_mapChats`, void 0);
var Y = class {
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
    (o(this), (this.m_steamInterface = this.CreateSteamInterface()));
  }
  InitTextFilter() {
    this.m_textFilterStore = new ee({ BIsFriend: h() });
    let e = 0;
    (I.steamid !== `` && (e = new at(I.steamid).GetAccountID()),
      this.m_textFilterStore.Init(e, null, new xt()));
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
      (yt() ?? J.Get().GetCMInterface()) ||
      Ie(new Qe(O.WEBAPI_BASE_URL, I.webapi_token))
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
      (this.m_strUserSteamID = I.steamid),
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
        let e = R.Init(ge);
        e.SetBodyFields({
          chat_id: this.m_ulChatID,
          message: t,
          instance_id: this.m_unInstanceID.toString(),
        });
        let n = await y.PostChatMessage(
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
              ? x(`#BroadcastChat_YouMuted`)
              : r.result == 84
                ? x(`#BroadcastChat_Cooldown`, r.cooldown_time_seconds ?? 0)
                : x(`#BroadcastChat_FailedToSendMsg`, t)),
            this.m_rgChatMessages.push({
              type: z.Error,
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
          type: z.Error,
          msg: x(`#BroadcastChat_FailedToSendMsg`, t),
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
          sessionid: tt(),
          notoken: 1,
        },
        n = await W.default.get(`${O.CHAT_BASE_URL}broadcast/getchatinfo`, {
          params: t,
          withCredentials: !0,
          cancelToken: e?.token,
        });
      (e && e.token.reason) ||
        a(() => {
          let e = n.data;
          ((this.m_strChatURL = e.view_url_template ?? ``),
            (this.m_ulChatID = e.chat_id ?? ``),
            (this.m_strFlairGroupID = e.flair_group_ids?.[0] ?? ``),
            e.blocked && console.log(`User is blocked from chat`),
            e.steamid && (this.m_strUserSteamID = e.steamid),
            e.emoticons && this.SetOwnedEmoticons(e.emoticons),
            (this.m_bHasAddedWelcomeChat ||=
              (this.m_rgChatMessages.push({
                type: z.Notification,
                msg: x(`#BroadcastChat_DefaultMessage`),
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
            (this.m_chatScheduledFunc = new Ze()),
            this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
        });
    } catch (e) {
      (console.error(e), console.log(`Failed to get chat info!`));
    }
  }
  async JoinChannelChat() {
    try {
      let e = R.Init(Nn);
      e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
      let t = await q.JoinChat(this.m_steamInterface.GetServiceTransport(), e),
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
          type: z.Notification,
          msg: x(`#BroadcastChat_DefaultMessage`),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        }),
        (this.m_bHasAddedWelcomeChat = !0),
        (this.m_chatScheduledFunc = new Ze()),
        this.m_chatScheduledFunc.Schedule(0, this.RequestLoop));
    } catch (e) {
      (console.error(e), console.log(`Failed to join chat!`));
    }
  }
  async FetchChatModerators() {
    let e = R.Init(En);
    e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
    let t = (
        await q.GetChatModerators(
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
      let n = (await W.default.get(t, { params: e })).data;
      this.m_cConsecutiveErrors = 0;
      let r = n.messages
        .map((e) => ({ ...e, type: z.Chat, client_ts: Number(new Date()) }))
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
              ? x(`#BroadcastChat_YouMuted`, e.persona_name)
              : x(`#BroadcastChat_UserMuted`, e.persona_name);
          this.m_rgChatMessages.push({
            type: z.Notification,
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
        (this.m_nNudgeFactorMS += lr),
        this.m_cConsecutiveErrors >= sr)
      ) {
        if (this.m_tsFirstRequest == null) {
          this.m_rgChatMessages.push({
            type: z.Error,
            msg: x(`#BroadcastChat_UnableToJoinChat`),
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
      this.m_chatScheduledFunc?.Schedule(cr, this.RequestLoop);
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
        r.append(`sessionid`, tt()));
      try {
        (await W.default.post(
          `${O.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          r,
        ),
          this.m_mapBroadcastModeratorUsers.set(e, t));
        let i = x(
          t
            ? `#BroadcastChat_AddedModerator`
            : `#BroadcastChat_RemovedModerator`,
          n,
        );
        this.m_rgChatMessages.push({ type: z.Notification, msg: i });
      } catch {
        let e = x(
          t
            ? `#BroadcastChat_AddModeratorFailed`
            : `#BroadcastChat_RemoveModeratorFailed`,
          n,
        );
        this.m_rgChatMessages.push({ type: z.Error, msg: e });
      }
    }
  }
  async UpdateUserChatBan(e, t, n, r, i, a) {
    let o = this.m_ulBroadcastSteamID,
      s = this.m_strUserSteamID;
    if (this.m_ulBroadcastChannelID) {
      let t = R.Init(bn);
      (t.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: e,
        duration: n * 3600,
        permanent: r,
        undo: a,
      }),
        await q.AddChatBan(this.m_steamInterface.GetServiceTransport(), t));
    } else {
      let a = new FormData();
      (a.append(`broadcaststeamid`, o),
        a.append(`issuersteamid`, s),
        a.append(`chattersteamid`, e),
        a.append(`bantype`, t),
        a.append(`duration`, n.toString()),
        a.append(`perm`, r ? `1` : `0`),
        a.append(`sessionid`, tt()));
      try {
        (await W.default.post(
          `${O.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
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
        let t = R.Init(ve);
        (t.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: e,
          muted: !0,
        }),
          await y.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            t,
          ));
      } catch {
        n &&
          (this.m_rgChatMessages.push({
            type: z.Error,
            msg: x(`#BroadcastChat_UserMuteFailed`, t),
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
        type: z.Notification,
        msg: x(`#BroadcastChat_UserMutedLocal`, t),
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
          let n = R.Init(ve);
          (n.SetBodyFields({
            chat_id: this.m_ulChatID,
            user_steamid: e,
            muted: !1,
          }),
            await y.MuteBroadcastChatUser(
              this.m_steamInterface.GetServiceTransport(),
              n,
            ),
            this.m_rgChatMessages.push({
              type: z.Notification,
              msg: x(`#BroadcastChat_UserUnmutedLocal`, t),
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: !1,
              persona_name: ``,
              steamid: ``,
            }));
        } catch {
          this.m_rgChatMessages.push({
            type: z.Error,
            msg: x(`#BroadcastChat_UserUnmuteFailed`, t),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      else
        this.m_rgChatMessages.push({
          type: z.Notification,
          msg: x(`#BroadcastChat_UserUnmutedLocal`, t),
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
        let t = R.Init(be);
        (t.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: e }),
          await y.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            t,
          ));
      } catch {
        this.m_rgChatMessages.push({
          type: z.Error,
          msg: x(`#BroadcastChat_RemoveMessagesFailed`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async UpdateChatMessageFlair(e) {
    let t = R.Init(xe);
    (t.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${e}:`,
    }),
      await y.UpdateChatMessageFlair(
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
(S([t], Y.prototype, `m_mapChannelModeratorUsers`, void 0),
  S([t], Y.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  S([t], Y.prototype, `m_nRateLimitSeconds`, void 0),
  S([t], Y.prototype, `m_bRateLimited`, void 0),
  S([t], Y.prototype, `m_rgChatMessages`, void 0),
  S([t], Y.prototype, `m_latestAnnouncement`, void 0),
  S([w], Y.prototype, `FetchChatModerators`, null),
  S([w], Y.prototype, `RequestLoop`, null),
  S([w], Y.prototype, `MuteUserForSession`, null));
var ur = `u-hyk5J5tIY-`,
  dr = `doqBDS-zTtg-`,
  fr = `DHv28C3kLqY-`,
  X = i(),
  pr = () =>
    (0, X.jsx)(`div`, {
      className: ur,
      children: (0, X.jsx)(`div`, { className: dr }),
    }),
  mr = () =>
    (0, X.jsx)(`div`, {
      className: ur,
      children: (0, X.jsx)(`div`, { className: fr }),
    }),
  hr = `Utigx2dvTSs-`,
  gr = `IPiWi3ba7Oc-`,
  _r = `Tt1HS5eK4UQ-`,
  vr = `_2NN20ePjOoE-`,
  yr = `Q5sAYcjkGuw-`,
  br = `JhPLxwFuvY8-`,
  xr = `-zOT4HlZFNc-`,
  Sr = `NFc5gI--APM-`,
  Cr = `gMm9gxp-VwY-`,
  wr = `_9JbCPa5peFE-`,
  Tr = `jhZ68t8aO0U-`,
  Er = `cF6FbGIaOso-`,
  Dr = `uWbWS4Xl7nU-`,
  Or = `_0bHpv5DDjVk-`,
  kr = `GJr1kPqad-w-`,
  Ar = `_8whJ5F1f7no-`,
  jr = `ngi9yWTTH6Q-`,
  Mr = `O0WGKKnt-b0-`,
  Nr = `n4yzVjIUqg0-`,
  Pr = `gB1ggcMqZ4U-`,
  Fr = `h1DcT5FSiVw-`,
  Ir = `aE9NemwHX3U-`,
  Lr = `-LW3HYdhtwg-`,
  Rr = `UfXKJfvB2aU-`,
  zr = `NjuVylscv-c-`,
  Br = `fQEvRYMgKZ8-`,
  Vr = `Jz1BUHL6vfU-`,
  Hr = `qUAIeS1LipI-`,
  Ur = `hCW7GiiXdrk-`,
  Wr = `gmY72gO6Jbk-`;
function Gr(e) {
  let { latestAnnouncement: t } = e;
  return t?.type == `giveaway_draw`
    ? (0, X.jsx)(Kr, { latestWinner: t })
    : null;
}
function Kr(e) {
  let {
      latestWinner: t,
      className: n,
      strActionButton: r,
      strActionClassname: i,
    } = e,
    a = t.winners_info ?? [],
    o = a.length > 0 ? a[0].accountid : 0,
    [s, c] = U.useState(o),
    l = Je(`${m.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`),
    u = Je(`${m.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`);
  nt(!!t.giveaway_gid, `Giveaway draw announcement is missing its giveaway`, t);
  let d = kt(t.giveaway_gid),
    f = d.bLoadingGiveawayInfo || d.closed ? null : d.seconds_until_drawing,
    p = o === I.accountid;
  U.useEffect(() => {
    s != o && setTimeout(() => c(o), 1500);
  }, [o, s]);
  let h =
    a.length > 0 && a[0].persona
      ? a[0].persona
      : x(`#GA2022_UnknownPersonaName`);
  return (0, X.jsx)(b, {
    href: `https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022`,
    className: n,
    children: (0, X.jsxs)(`div`, {
      className: L({ [Ir]: !0, [Lr]: s === o }),
      children: [
        (0, X.jsx)(`div`, {
          className: zr,
          children: (0, X.jsx)(`img`, { className: Br, src: l }),
        }),
        (0, X.jsxs)(`div`, {
          className: Rr,
          children: [
            s !== o &&
              (0, X.jsx)(`div`, {
                className: L(`l-AUoGdZDTw-`),
                children: Pe(
                  `#GA2022_Congrats_Deck_Unknown`,
                  (0, X.jsx)(`br`, {}),
                ),
              }),
            s === o &&
              (0, X.jsx)(`div`, {
                className: L(`l-AUoGdZDTw-`, `-LW3HYdhtwg-`),
                children: Pe(
                  p
                    ? `#GA2022_Congrats_Deck_Me`
                    : `#GA2022_Congrats_Deck_OTher`,
                  h,
                  (0, X.jsx)(`br`, {}),
                ),
              }),
            !!(f && f > 0) &&
              (0, X.jsx)(`div`, {
                className: `B7DECy1bqvs-`,
                children: Pe(`#GA2022_Congrats_NextDraw`, f),
              }),
          ],
        }),
        (0, X.jsx)(`img`, { className: Vr, src: u }),
        !!r &&
          (0, X.jsx)(`div`, {
            className: i,
            children: p ? x(`#GA2022_YouWonNextSteps`) : r,
          }),
      ],
    }),
  });
}
function qr(e, t) {
  let [n, r] = l(() => [
      t?.steamid,
      t?.steamid ? B.GetBroadcast(t.steamid)?.m_ulBroadcastID : void 0,
    ]),
    [i, a] = U.useState(null);
  U.useEffect(() => {
    let e = null;
    return (
      n &&
        ((e = J.Get().GetOrCreateChat(r ?? ``, n)),
        e.StartForSteamID(n, r ?? ``),
        a(e)),
      () => {
        e && (e.Stop(), a(null));
      }
    );
  }, [n, r]);
  let o = l(() => i?.m_latestAnnouncement || null);
  if (o?.type == `giveaway_draw`) {
    let t = o;
    if (t.giveaway_gid == e) return t;
  }
  return null;
}
function Jr(e) {
  let { gidGiveaway: t, stream: n } = e,
    r = qr(t, n),
    i = he(`GameAwardDrop2022`),
    a = null,
    o = Ur;
  return (
    I.logged_in
      ? i?.registered
        ? ((a = x(`#GA2022_AlreadyRegistered`)), (o = Wr))
        : (a = x(`#GA2022_RegisterToWin`))
      : (a = x(`#GA2022_RegisterLoginToWin`)),
    r
      ? (0, X.jsx)(Kr, {
          latestWinner: r,
          className: Hr,
          strActionButton: a,
          strActionClassname: o,
        })
      : null
  );
}
var Yr = RegExp(`ː([^ː]*)ː`, `g`),
  Xr = RegExp(
    `^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)`,
    `i`,
  );
function Zr(e, t, n) {
  return n
    ? `presenter`
    : t.GetBroadcastSteamID() === e
      ? `broadcaster`
      : t.BIsUserBroadcastModerator(e)
        ? `moderator`
        : ``;
}
var Qr = (e) => {
    let { userType: t, msg: n, presenterInfo: r } = e;
    if (t === `presenter` && r)
      return (0, X.jsx)(`span`, {
        children: (0, X.jsx)(ce, {
          name: r.name ?? ``,
          title: r.title,
          photo: r.photo,
          company: r.company ?? ``,
          bioString: r.bio,
          children: (0, X.jsx)(`a`, {
            className: L(yr, void 0),
            href: O.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
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
        (0, X.jsx)(`span`, {
          children: (0, X.jsx)(`a`, {
            className: L(yr, e),
            href: O.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
            "data-miniprofile": `s` + n.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: n.persona_name,
          }),
        })
      );
    }
  },
  $r = (e) => {
    switch (e.userType) {
      case `presenter`:
        return (0, X.jsx)(Le, {
          toolTipContent: x(`#BroadcastChat_Role_Presenter_ttip`),
          children: (0, X.jsx)(`span`, {
            className: Mr,
            children: (0, X.jsx)(ht, {}),
          }),
        });
      case `moderator`:
        return (0, X.jsx)(Le, {
          toolTipContent: x(`#BroadcastChat_Role_Moderatorr_ttip`),
          children: (0, X.jsx)(`span`, {
            className: Mr,
            children: (0, X.jsx)(Ke, {}),
          }),
        });
      case `broadcaster`:
        return (0, X.jsx)(Le, {
          toolTipContent: x(`#BroadcastChat_Role_Broadcaster_ttip`),
          children: (0, X.jsx)(`span`, {
            className: Mr,
            children: (0, X.jsx)(qe, {}),
          }),
        });
      default:
        return null;
    }
  },
  Z = class extends U.Component {
    constructor(e) {
      (super(e), o(this));
    }
    m_chat = void 0;
    messagesContainer = U.createRef();
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
      let e = J.Get().GetOrCreateChat(
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
      return !!e.match(Xr);
    }
    AddLinksEmoticons(e, t) {
      t && this.m_chat?.GetUserEmoticons();
      let n = e.split(Yr),
        r = [];
      for (let e = 0; e < n.length; e += 1)
        e % 2 == 1
          ? r.push((0, X.jsx)(se, { emoticon: n[e], large: !0 }, e))
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
      if (!n || t.type !== z.Chat) return null;
      let r = [],
        i = n.IsUserBroadcaster(n.GetUserSteamID()),
        a = n.BIsUserBroadcastModerator(n.GetUserSteamID());
      return (
        (I && I.is_support) || i || a
          ? r.push(
              (0, X.jsx)(
                C,
                {
                  onSelected: () =>
                    n.RemoveUserMessagesServer(t.steamid, t.persona_name),
                  children: x(`#BroadcastChat_RemoveMessages`),
                },
                `remove`,
              ),
              (0, X.jsx)(
                C,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 12, !1, t.persona_name),
                  children: x(`#BroadcastChat_half_Mute`),
                },
                `updatebanh`,
              ),
              (0, X.jsx)(
                C,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 24, !1, t.persona_name),
                  children: x(`#BroadcastChat_day_Mute`),
                },
                `updateband`,
              ),
              (0, X.jsx)(
                C,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 168, !1, t.persona_name),
                  children: x(`#BroadcastChat_week_Mute`),
                },
                `updatebanw`,
              ),
              (0, X.jsx)(
                C,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 0, !0, t.persona_name),
                  children: x(`#BroadcastChat_perm_Mute`),
                },
                `updatebanp`,
              ),
              (0, X.jsx)(
                C,
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
                  children: x(`#BroadcastChat_Unmute`),
                },
                `removeban`,
              ),
            )
          : n.IsUserMutedLocally(t.steamid)
            ? r.push(
                (0, X.jsx)(
                  C,
                  {
                    onSelected: () =>
                      n.UnmuteUserForSession(t.steamid, t.persona_name),
                    children: x(`#BroadcastChat_UnmuteLocal`),
                  },
                  `unmuteuser`,
                ),
              )
            : r.push(
                (0, X.jsx)(
                  C,
                  {
                    onSelected: () =>
                      n.MuteUserForSession(t.steamid, t.persona_name),
                    children: x(`#BroadcastChat_MuteLocal`),
                  },
                  `muteuser`,
                ),
              ),
        ((I && I.is_support) || n.IsUserBroadcaster(n.GetUserSteamID())) &&
          t.steamid &&
          (n.BIsUserBroadcastModerator(t.steamid)
            ? r.push(
                (0, X.jsx)(
                  C,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !1,
                        t.persona_name,
                      ),
                    children: x(`#BroadcastChat_Remove_Moderator`),
                  },
                  `removemod`,
                ),
              )
            : r.push(
                (0, X.jsx)(
                  C,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !0,
                        t.persona_name,
                      ),
                    children: x(`#BroadcastChat_Add_Moderator`),
                  },
                  `addmod`,
                ),
              )),
        r.length
          ? Fe(
              (0, X.jsxs)(Xe, {
                children: [
                  (0, X.jsxs)(`div`, {
                    className: Ar,
                    children: [
                      x(`#BroadcastChat_User`),
                      (0, X.jsx)(`br`, {}),
                      (0, X.jsx)(`span`, {
                        className: jr,
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
      return e.type === z.Notification ? Sr : e.type === z.Error ? Cr : vr;
    }
    FormatMessage(e, t) {
      if (e.type === z.Chat) {
        let n = t ? t.FilterText(e.steamid, e.msg) : e.msg;
        return this.AddLinksEmoticons(n, !1);
      }
      return e.msg;
    }
    RenderUserChatLine(e, t, n, r) {
      let i = r?.get(t.steamid),
        a = t.type === z.Chat ? Zr(t.steamid, e, i) : ``;
      return (0, X.jsxs)(
        `div`,
        {
          className: this.GetTypeClassName(t),
          onContextMenu: (e) => this.OnContextMenu(e, t),
          children: [
            t.type === z.Chat && (0, X.jsx)($r, { userType: a }),
            t.flair &&
              (0, X.jsx)(`span`, {
                className: `xDmEH9mDo3o-`,
                children: this.AddLinksEmoticons(t.flair, !1),
              }),
            t.type === z.Chat &&
              (0, X.jsx)(Qr, { userType: a, msg: t, presenterInfo: i }),
            t.type === z.Chat &&
              e.GetBroadcastSteamID() === t.steamid &&
              (0, X.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${x(`#BroadcastChat_Broadcaster`)})`,
              }),
            t.type === z.Chat &&
              e.m_mapChannelModeratorUsers.get(t.steamid) &&
              (0, X.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${x(`#BroadcastChat_Moderator`)})`,
              }),
            (0, X.jsxs)(`span`, {
              className: `${br} ${this.AddLinksEmoticons(t.msg, !1).filter((e) => e && typeof e == `string`).length ? `` : xr}`,
              children: [
                t.type === z.Chat ? ` : ` : ``,
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
          ? Tt.GetPresenterMapForBroadcasterSteamID(
              this.m_chat.GetBroadcastSteamID(),
            )
          : void 0,
        c = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
      return (0, X.jsxs)(`div`, {
        className: L(gr, `ChatPanel`),
        style: e ? { display: `none` } : void 0,
        children: [
          (0, X.jsx)(Gr, { latestAnnouncement: c }),
          n &&
            !!this.m_chat &&
            (0, X.jsx)(ei, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
          (0, X.jsx)(pr, {}),
          (0, X.jsx)(`div`, {
            className: L(`${_r} ${Ee}`, `ChatMessages`),
            onScroll: this.HandleScroll,
            ref: this.messagesContainer,
            children: i && o.map((e, t) => this.RenderUserChatLine(i, e, t, s)),
          }),
          (0, X.jsx)(mr, {}),
          !n &&
            !!this.m_chat &&
            (0, X.jsx)(ei, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
        ],
      });
    }
  };
(S([t], Z.prototype, `m_chat`, void 0),
  S([w], Z.prototype, `StartChat`, null),
  S([w], Z.prototype, `HandleScroll`, null),
  S([w], Z.prototype, `OnContextMenu`, null),
  S([w], Z.prototype, `RenderUserChatLine`, null),
  (Z = S([s], Z)));
function ei(e) {
  let {
    oChat: t,
    emoticonStore: n,
    bPartnerMemberOnlyChat: r,
    onSignIn: i,
  } = e;
  return r && (!I?.logged_in || !I?.is_partner_member)
    ? (0, X.jsx)(ai, {})
    : I?.logged_in
      ? (0, X.jsx)(ti, { oChat: t, emoticonStore: n })
      : i
        ? (0, X.jsx)(ii, { onSignIn: i })
        : null;
}
function ti(e) {
  let { oChat: t, emoticonStore: n } = e,
    [r, i] = U.useState(``),
    a = U.useRef(null),
    o = l(() => t.m_bRateLimited),
    s = U.useCallback(
      (e) => {
        !e.shiftKey &&
          e.charCode === 13 &&
          (t.m_bRateLimited || (t.SendMessage(r), i(``)), e.preventDefault());
      },
      [t, r],
    ),
    c = U.useCallback(
      (e, t = !1) => {
        (i(r + `\u02D0${e}\u02D0`), a?.current && a.current.focus());
      },
      [r, a],
    ),
    u = () => {
      (t.SendMessage(r), i(``));
    },
    d = o || r.trim().length == 0,
    f = L(Te, r.length == 0 && `_4X5-n9MaD8g-`);
  return (0, X.jsx)(`div`, {
    className: L(void 0, `ChatEntryCtn`),
    children: (0, X.jsxs)(`div`, {
      className: L(hr, `ChatEntry`),
      children: [
        (0, X.jsxs)(`form`, {
          className: `${De}`,
          children: [
            (0, X.jsx)(`textarea`, {
              className: ke,
              placeholder: x(`#BroadcastChat_EnterResponse`),
              onKeyPress: s,
              onChange: (e) => i(e.target.value),
              value: r,
              ref: a,
            }),
            o &&
              (0, X.jsx)(ri, {
                nSeconds: t.m_nRateLimitSeconds,
                bRateLimited: t.m_bRateLimited,
              }),
            (0, X.jsx)(`button`, {
              className: f,
              title: x(`#ChatEntryButton_Submit`),
              disabled: d,
              onClick: u,
              children: (0, X.jsx)(st, {}),
            }),
          ],
        }),
        (0, X.jsx)(`div`, {
          style: { height: `50px` },
          className: `${Oe}`,
          children: (0, X.jsxs)(`div`, {
            className: Ae,
            children: [
              (0, X.jsx)(je, {
                disabled: !1,
                OnEmoticonSelected: c,
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: n,
              }),
              (0, X.jsx)(ni, { ...e, textInputRef: a }),
            ],
          }),
        }),
      ],
    }),
  });
}
function ni(e) {
  let { oChat: t, emoticonStore: n, textInputRef: r } = e;
  return t.m_strFlairGroupID &&
    n.flair_list &&
    n.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
    ? (0, X.jsx)(je, {
        disabled: !1,
        OnEmoticonSelected: (e) => {
          (t.UpdateChatMessageFlair(e), r?.current && r.current.focus());
        },
        rtLastAckedNewEmoticons: Number.MAX_VALUE,
        emoticonStore: n,
        strFlairGroupID: t.m_strFlairGroupID,
        title: x(`#ChatEntryButton_Flair`),
        buttonIcon: (0, X.jsx)(ct, {}),
      })
    : null;
}
var ri = class extends U.Component {
  render() {
    return (0, X.jsx)(`div`, {
      className: wr,
      children: (0, X.jsxs)(`div`, {
        className: Tr,
        children: [
          (0, X.jsx)(`div`, {
            className: `${Dr} ${Er}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, X.jsx)(`div`, {
            className: `${Or} ${Er}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, X.jsx)(`div`, {
            className: kr,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
        ],
      }),
    });
  }
};
function ii(e) {
  return (0, X.jsx)(`div`, {
    className: Nr,
    children: (0, X.jsx)(lt, {
      onClick: e.onSignIn,
      className: L(Fr),
      children: x(`#BroadcastChat_Login`),
    }),
  });
}
function ai(e) {
  return (0, X.jsxs)(`div`, {
    className: Nr,
    children: [
      (0, X.jsx)(`div`, {
        className: Pr,
        children: x(`#Broadcast_PartnerChat_Login`),
      }),
      !I.logged_in &&
        !O.IN_STEAMUI &&
        (0, X.jsx)(lt, {
          onClick: Ot,
          className: L(`h1DcT5FSiVw-`),
          children: x(`#Login_SignIn`),
        }),
    ],
  });
}
var oi = `_7FIE12jcFio-`,
  si = `l3NO7dsjryo-`,
  ci = `gxhjub7-6JQ-`,
  li = s((e) => {
    let { appid: t } = e,
      n = Ye(),
      r = (0, U.useRef)({ include_assets: !0, include_release: !0 }),
      i = u(t),
      { data: a } = et(i),
      { data: o } = pt(i),
      { data: s } = it(i),
      [c, l] = we(t, r.current),
      m = L(oi, `StoreSaleWidgetContainer_mini`),
      h = si,
      ee = ci;
    if (a == null)
      return (0, X.jsx)(`div`, {
        className: m,
        children: (0, X.jsx)(ae, { size: `medium` }),
      });
    if (a == null || !a.name) return (0, X.jsx)(`div`, { className: void 0 });
    let ne = a.type != 8,
      g = He(te(a), n);
    return (0, X.jsxs)(`div`, {
      className: m,
      children: [
        (0, X.jsx)(`a`, {
          href: g,
          target: O.IN_CLIENT ? void 0 : `_blank`,
          children: (0, X.jsx)(v, {
            id: i,
            children: (0, X.jsx)(`div`, {
              className: h,
              children:
                o &&
                (0, X.jsx)(`img`, {
                  className: ee,
                  src: Be(o, `small_capsule`),
                  alt: a.name,
                }),
            }),
          }),
        }),
        (0, X.jsxs)(`div`, {
          className: d,
          children: [
            (0, X.jsx)(`a`, {
              href: g,
              target: O.IN_CLIENT ? void 0 : `_blank`,
              children: (0, X.jsx)(v, {
                id: i,
                children: (0, X.jsx)(`div`, {
                  className: L(p, `StoreSaleWidgetTitle`),
                  children: a.name,
                }),
              }),
            }),
            s &&
              (0, X.jsx)(`div`, { className: `A8oyzoRvWQ8-`, children: f(s) }),
            !!ne && (0, X.jsx)(ie, { id: i, bShowDemoButton: !0 }),
          ],
        }),
      ],
    });
  }),
  ui = `58px`,
  di = `58px`,
  fi = `rYnVBBDJIz4-`,
  pi = `dsbI18mZ-Ps-`,
  mi = `dQY8CyT7Y5Y-`,
  hi = `f0G28hbeNYE-`,
  gi = `EGznwOBrytk-`,
  _i = `wMy1ewxYK3I-`,
  vi = `iLleweU-ckI-`,
  yi = `ov8XKFWsMMc-`,
  bi = `KcqUD5hkzyk-`,
  xi = `ECJWFclMDpk-`,
  Si = `KkgW9CzRVMI-`,
  Ci = `SObNBjtfgbU-`,
  wi = `-d8EQqzPfNs-`,
  Ti = `FS3-jxto3Z8-`,
  Ei = `twoyTg-z2n4-`,
  Di = `_887-MlrXKDQ-`,
  Oi = `Yb1KTWt-6pE-`,
  ki = `HbhpxnAX2Kk-`,
  Ai = `vePf8-fcS4g-`,
  ji = `xpdX0ycPNx0-`,
  Mi = `QGqVyFFAFtg-`,
  Ni = `qwFxl5tJlG0-`,
  Pi = `-PTMMcy5uF4-`,
  Fi = `mYXN-do7NYQ-`,
  Ii = `rIfaYmVdzDA-`,
  Li = `hgFSY87Dsxg-`,
  Ri = `u-lLy1wH1Is-`,
  zi = `pllfTQu8jag-`,
  Bi = `GsIDuGodBUQ-`,
  Vi = `_2IUJG6CdnFA-`,
  Hi = `Jvoz-8Cocp4-`,
  Ui = `zuLP0piEwuA-`,
  Wi = `eR0CdHz8x6I-`,
  Gi = `GsHUhqcJfJQ-`,
  Ki = `_77LbK-akGBo-`,
  qi = `iADCJfccVl8-`,
  Ji = `_6NUM7GMUXrI-`,
  Yi = `eWHilAZFWEA-`,
  Xi = `yzeJT1XucOE-`,
  Zi = s((e) => {
    let { event: t } = e,
      n = t.clanSteamID.GetAccountID(),
      r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
      i = (0, U.useRef)(null),
      [a, o] = (0, U.useState)(t ? de.GetCreatorHome(t.clanSteamID) : void 0);
    if (
      ((0, U.useEffect)(() => {
        let e = W.default.CancelToken.source();
        return (
          (i.current = e.cancel),
          (async () => {
            let t = at.InitFromClanID(n, O.EUNIVERSE),
              r = await de.LoadCreatorHome(t, !1, e);
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
        O.COMMUNITY_BASE_URL +
        `gid/` +
        t.jsondata.broadcast_item_drops_details_clan_accountid +
        `/partnerevents/view/` +
        t.jsondata.broadcast_item_drops_details_event_gid,
      c = t.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
    return (0, X.jsx)(`div`, {
      className: gi,
      children: (0, X.jsxs)(`div`, {
        children: [
          x(
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
            (0, X.jsx)(`a`, {
              href: s,
              target: O.IN_CLIENT ? `` : `_blank`,
              children: x(`#SalePage_WatchForDrop_LearnMore`),
            }),
        ],
      }),
    });
  });
function Qi(e) {
  let { steamid: t, closeModal: n } = e;
  return (0, X.jsxs)(ft, {
    strDescription: ``,
    strTitle: x(`#Button_Share`),
    onCancel: n,
    onOK: n,
    bAlertDialog: !0,
    modalClassName: `EventDisplay_Share_Dialog`,
    children: [(0, X.jsx)($i, { steamid: t }), (0, X.jsx)(ea, { steamid: t })],
  });
}
function $i(e) {
  let { steamid: t } = e,
    n = ta(t);
  return (0, X.jsxs)(`div`, {
    className: L(oe, me),
    children: [
      (0, X.jsx)(T, {
        toolTipContent: x(`#EventDisplay_Share_OnFaceBook`),
        children: (0, X.jsx)(b, {
          href: n.strFacebookUrl,
          className: _e,
          children: (0, X.jsx)(`img`, { className: L(_), src: St }),
        }),
      }),
      (0, X.jsx)(T, {
        toolTipContent: x(`#EventDisplay_Share_OnTwitter`),
        children: (0, X.jsx)(b, {
          href: n.strTwitterUrl,
          className: _e,
          children: (0, X.jsx)(`img`, { className: L(_), src: Ct }),
        }),
      }),
      (0, X.jsx)(T, {
        toolTipContent: x(`#EventDisplay_Share_OnReddit`),
        children: (0, X.jsx)(b, {
          href: n.strRedditUrl,
          className: _e,
          children: (0, X.jsx)(`img`, { className: L(_), src: Me }),
        }),
      }),
    ],
  });
}
function ea(e) {
  let { steamid: t } = e,
    n = U.createRef(),
    [r, i] = U.useState(``),
    a = U.createRef(),
    o = U.useCallback(
      (e) => {
        n.current &&
          n.current.ownerDocument.defaultView?.navigator.clipboard
            .writeText(n.current.value)
            .then((e) => {
              i(x(`#EventDisplay_Share_CopiedToClipboard`));
            })
            .catch((e) => {
              (i(x(`#EventDisplay_Share_FailedToCopyToClipboard`)),
                console.error(`Failed to copy link to clipboard:`, e));
            });
      },
      [n],
    ),
    s = O.COMMUNITY_BASE_URL + `broadcast/watch/` + t;
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsxs)(`div`, {
        className: L(oe, pe),
        onClick: o,
        children: [
          (0, X.jsx)(`span`, {
            className: Ce,
            children: x(`#EventDisplay_Share_Link`),
          }),
          (0, X.jsx)(`textarea`, {
            className: Se,
            ref: n,
            value: s,
            readOnly: !0,
          }),
          !!document.queryCommandSupported(`copy`) &&
            (0, X.jsx)(T, {
              toolTipContent: x(`#ToolTip_CopyLinkToClipboard`),
              children: (0, X.jsx)(`div`, {
                className: L(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `_6y4EcbHPzTE-`),
                children: (0, X.jsx)(`img`, {
                  className: `SGi7-TqE4Rs-`,
                  src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%201801.5%201400%201409'%20enable-background='new%200%201801.5%201400%201409'%20xml:space='preserve'%3e%3cpath%20id='iconmonstr-link-1_1_'%20fill='%23FFFFFF'%20d='M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0%20c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294%20c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280%20c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941%20c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z%20M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0%20c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0%20c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647%20c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059%20S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z'/%3e%3c/svg%3e`,
                }),
              }),
            }),
        ],
      }),
      (0, X.jsx)(`div`, { ref: a, className: ye, children: r }),
    ],
  });
}
function ta(e) {
  let t = O.COMMUNITY_BASE_URL + `broadcast/share/` + e;
  return {
    strFacebookUrl: t + `?site=facebook&t=` + Math.random(),
    strTwitterUrl: t + `?site=twitter`,
    strRedditUrl: t + `?site=reddit`,
  };
}
var na = {
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
function ra() {
  let e = ot();
  return !rt() && !e;
}
function ia(e) {
  return ra() ? (0, X.jsx)(Q, { ...e }) : null;
}
var Q = class extends U.Component {
  m_cancelSignal = W.default.CancelToken.source();
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
    (await H.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
      this.m_cancelSignal.token.reason ||
        this.setState({
          bLoadingPreference: !1,
          bExpanded: !H.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
          innerStyle: {
            ...this.state.innerStyle,
            maxHeight: H.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
              ? `0vh`
              : `100vh`,
          },
        }),
      await (this.props.bIsPreview &&
      this.props.accountIDs &&
      !this.props.event?.BUsesContentHubForItemSource()
        ? H.Get().HintLoadEmbeddablePreviewStreams(this.props)
        : H.Get().HintLoadEmbeddableStreams(this.props)),
      this.props.nAppIDVOD &&
        H.Get().SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
      window.setTimeout(() => {
        this.m_cancelSignal.token.reason ||
          this.setState({ style: { ...this.state.style, maxHeight: `100vh` } });
      }, 10));
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`BroadcastEmbeddable component unmounted`);
  }
  ToggleBroadcastExpandShrink() {
    let e = H.Get().GetPlayReadyStream(this.props);
    if (!e) return;
    let t = this.state.bExpanded,
      n = B.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
    (V(n, t ? 2 : 3, e.snr),
      t && gt()?.AddEvent(Ve),
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
          H.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
        ));
  }
  OnShrinkTransitionEnd() {
    this.state.innerStyle.maxHeight === `0vh` &&
      this.setState({ bExpanded: !1 }, () =>
        H.Get().SetEmbeddedStreamCollapsed(!0),
      );
  }
  async onStreamSelect(e) {
    (this.setState({ bStartMuted: !1 }),
      H.Get().GetPlayReadyStream(this.props)?.accountid != e.accountid &&
        (await H.Get().AttemptToPlayStream(this.props, e)));
  }
  async PlayNextNonVOD() {
    this.setState({ bStartMuted: !1 });
    let e = (H.Get().GetStreams(this.props) ?? []).filter(
      (e) => !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
    );
    await H.Get().PlayFromAvailableStreams(this.props, e, !0);
  }
  ConstructSidePanels(e, t) {
    let n = { bRightPanelArtworkOrEmpty: !0 };
    if (this.props.bWidePlayer) return n;
    let r = H.Get().GetConcurrentStreams(this.props) > 1,
      i = B.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
      a = (0, X.jsx)(sa, { ImgUrl: e.right_panel }, `right` + i),
      o = (0, X.jsx)(sa, { ImgUrl: e.left_panel }, `left` + i);
    if (i < 11) {
      let t = e.steamid
        ? Tt.GetAppIDListForBroadcasterSteamID(e.steamid)
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
        ((a = (0, X.jsx)(li, { appid: i }, `mini` + e.accountid)),
        (n.bRightPanelArtworkOrEmpty = !1)),
      r && !t
        ? ((n.leftPanel = (0, X.jsx)(
            ua,
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
          ? ((n.leftPanel = (0, X.jsx)(`div`, {})),
            (n.rightPanel = (0, X.jsx)(pa, {
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
      ((this.m_bMarkedUsabilitySeen = !0), gt()?.AddEvent($e));
  }
  render() {
    if (this.state.bLoadingPreference) return null;
    let e = H.Get().GetPlayReadyStream(this.props);
    if (e) {
      this.MarkBroadcastSeen();
      let t = H.Get().GetChatVisibility() === `show`,
        { event: n, language: r, fnRenderBroadcastContext: i } = this.props,
        a = n
          ? {
              ...e,
              left_panel: n.GetImageURL(`broadcast_left`, r || bt(O.LANGUAGE)),
              right_panel: n.GetImageURL(
                `broadcast_right`,
                r || bt(O.LANGUAGE),
              ),
              store_title: n.GetBroadcastTitle(r || bt(O.LANGUAGE)),
              broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
            }
          : e,
        o = this.ConstructSidePanels(a, t),
        s = a.store_title ? a.store_title : a.title,
        c = H.Get().GetConcurrentStreams(this.props) > 1,
        l = () => {
          (a.nAppIDVOD && this.PlayNextNonVOD(), this.props.fnOnVideoEnd?.());
        };
      return (0, X.jsx)(U.Fragment, {
        children: (0, X.jsxs)(`div`, {
          className: `broadcast_embed_top_ctn_trgt`,
          style: this.state.style,
          children: [
            (0, X.jsxs)(`div`, {
              className: L({ [fi]: !0, [hi]: !!n, broadcast_brd_ctn_trgt: !0 }),
              children: [
                (0, X.jsxs)(`div`, {
                  className: L(_i, `bordered_title_trgt`),
                  children: [
                    (0, X.jsx)(g, {}),
                    (0, X.jsx)(`div`, { className: vi, children: s }),
                    (0, X.jsxs)(`div`, {
                      className: yi,
                      children: [
                        !this.state.bExpanded &&
                          (0, X.jsx)(T, {
                            toolTipContent: x(
                              `#StoreBroadcast_Change_store_Broadcast_settings`,
                            ),
                            children: (0, X.jsx)(`div`, {
                              className: `Ku3ORKocBrQ-`,
                              onClick: () =>
                                window.open(
                                  `${O.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                ),
                            }),
                          }),
                        (0, X.jsx)(T, {
                          toolTipContent: x(`#StoreBroadcast_Hide_Tooltip`),
                          children: (0, X.jsx)(`div`, {
                            className: this.state.bExpanded ? bi : xi,
                            onClick: this.ToggleBroadcastExpandShrink,
                          }),
                        }),
                      ],
                    }),
                    !!a.gamedata_subtitle &&
                      (0, X.jsx)(`div`, {
                        className: `WdbOLmmaXso-`,
                        children: a.gamedata_subtitle,
                      }),
                  ],
                }),
                !!this.state.bExpanded &&
                  (0, X.jsxs)(`div`, {
                    className: L({
                      "lOf3hlirldE-": !0,
                      embeddable_ctn_trgt: !0,
                      multistream: c,
                      broadcast_right_panel_simple: o.bRightPanelArtworkOrEmpty,
                      broadcast_chat_expanded: t,
                    }),
                    style: { ...this.state.innerStyle },
                    onTransitionEnd: this.OnShrinkTransitionEnd,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `HEBZJhZ641A-`,
                        children: o.leftPanel,
                      }),
                      (0, X.jsx)(aa, {
                        stream: a,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      (0, X.jsx)(`div`, {
                        className: `UHu5FWxee0A-`,
                        children: o.rightPanel,
                      }),
                      !!this.state.bExpanded &&
                        (0, X.jsx)($, {
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
              (0, X.jsx)(Zi, { event: n }),
            (0, X.jsx)(`div`, { className: Ui }),
          ],
        }),
      });
    }
    return (0, X.jsx)(`div`, { className: `NoBroadcastAvailable` });
  }
};
(S([w], Q.prototype, `ToggleBroadcastExpandShrink`, null),
  S([w], Q.prototype, `OnShrinkTransitionEnd`, null),
  S([w], Q.prototype, `onStreamSelect`, null),
  S([w], Q.prototype, `PlayNextNonVOD`, null),
  (Q = S([s], Q)));
var aa = class extends U.Component {
  m_iVideoContainerRef = U.createRef();
  constructor(e) {
    (super(e),
      (this.state = {
        bPopout: !1,
        bPreventPopup: window.screen.width <= 768,
      }));
  }
  CloseBroadcastPopup() {
    let e = B.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (V(e, 7, this.props.stream.snr),
      gt()?.AddEvent(ze),
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
    return (0, X.jsx)(`div`, {
      className: Ci,
      children: (0, X.jsx)(le, {
        onEnter: this.OnEnter,
        onLeave: this.OnLeave,
        onIntersectionChange: (e) => {
          e.isIntersecting || this.OnLeave();
        },
        className: L({
          [wi]: !0,
          video_placeholder_trgt: !0,
          [pi]: this.props.bWidePlayer,
        }),
        ref: this.m_iVideoContainerRef,
        children: (0, X.jsxs)(`div`, {
          className: this.state.bPopout ? Wi : Ti,
          children: [
            this.state.bPopout &&
              (0, X.jsx)(ca, {
                steamIDBroadcast: this.props.stream.steamid,
                OnPreventPopup: this.CloseBroadcastPopup,
              }),
            (0, X.jsx)(`div`, {
              className: Ji,
              children: (0, X.jsx)(At, {
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
(S([w], aa.prototype, `CloseBroadcastPopup`, null),
  S([w], aa.prototype, `OnEnter`, null),
  S([w], aa.prototype, `OnLeave`, null));
function oa(e) {
  let { stream: t } = e,
    [n] = l(() => [t.steamid]),
    r = B.GetOrCreateBroadcastInfo(n).m_nAppID,
    i = na.list.find(
      (e) =>
        e.appid == r &&
        (!e.broadcasterAccountID || e.broadcasterAccountID == t.accountid),
    );
  if (i) {
    let e = i.url;
    return (
      (O.IN_CLIENT ||
        navigator.userAgent.indexOf(`Valve Steam Client`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam GameOverlay`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam Tenfoot`) >= 0) &&
        (e = `steam://openurl/` + e),
      (0, X.jsx)(`a`, {
        href: e,
        children: x(`#Broadcast_Embed_Watch_With_Frieds_SteamTV`),
      })
    );
  }
  {
    let e = O.COMMUNITY_BASE_URL + `broadcast/watch/` + n;
    return (0, X.jsx)(T, {
      toolTipContent: x(`#BroadcastWatch_View_Broadcast_Page`),
      children: (0, X.jsx)(`a`, {
        href: e,
        className: ki,
        children: (0, X.jsx)(Re, {}),
      }),
    });
  }
}
var $ = class extends U.Component {
  OnToggleChat(e) {
    e.preventDefault();
    let t = B.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (V(
      t,
      H.Get().GetChatVisibility() === `show` ? 5 : 4,
      this.props.stream.snr,
    ),
      H.Get().ToggleChatVisibility());
  }
  onWatchBroadcastPage() {
    let e = B.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    V(e, 9, this.props.stream.snr);
  }
  render() {
    let e = H.Get().GetChatVisibility() != `remove`,
      t = H.Get().GetChatVisibility() === `hide`,
      n = !this.props.stream.nAppIDVOD,
      r = n,
      i = Number.parseInt(
        `` +
          B.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nViewerCount,
      );
    return (0, X.jsxs)(`div`, {
      className: L(Ei, `viewer_bar`),
      children: [
        (0, X.jsxs)(`div`, {
          className: L(Ai, `viewer_count`),
          children: [(0, X.jsx)(mt, {}), vt(i)],
        }),
        (0, X.jsxs)(`div`, {
          className: L(Di, `viewer_links`),
          children: [
            !!(e && !t && this.props.bMultistream) &&
              (0, X.jsx)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: (0, X.jsx)(`a`, {
                  href: `#`,
                  className: void 0,
                  onClick: this.OnToggleChat,
                  children: x(`#sale_three_section_show_streams`),
                }),
              }),
            e &&
              (0, X.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, X.jsx)(Ne, {}),
                  (0, X.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: this.OnToggleChat,
                    children: x(
                      t
                        ? `#sale_three_section_show_chat`
                        : `#sale_three_section_hide_chat`,
                    ),
                  }),
                ],
              }),
            r &&
              (0, X.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, X.jsx)(dt, {}),
                  (0, X.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: (e) => {
                      let t = We(e);
                      t &&
                        Ue(
                          (0, X.jsx)(Qi, {
                            steamid: this.props.stream.steamid ?? ``,
                          }),
                          t,
                        );
                    },
                    children: x(`#Broadcast_ShareBroadcast`),
                  }),
                ],
              }),
            (0, X.jsx)(T, {
              toolTipContent: x(
                `#StoreBroadcast_Change_store_Broadcast_settings`,
              ),
              children: (0, X.jsx)(`a`, {
                href:
                  O.STORE_BASE_URL +
                  `account/preferences/#store_broadcast_settings`,
                target: O.IN_CLIENT ? void 0 : `_blank`,
                className: Oi,
                children: (0, X.jsx)(_t, {}),
              }),
            }),
            n && (0, X.jsx)(oa, { ...this.props }),
          ],
        }),
        !!this.props.chatAnnouncementGivewayGID &&
          (0, X.jsx)(Jr, {
            gidGiveaway: this.props.chatAnnouncementGivewayGID,
            stream: this.props.stream,
          }),
      ],
    });
  }
};
(S([w], $.prototype, `OnToggleChat`, null),
  S([w], $.prototype, `onWatchBroadcastPage`, null),
  ($ = S([s], $)));
var sa = class extends U.Component {
    render() {
      let e = this.props.ImgUrl;
      return (0, X.jsxs)(`div`, {
        className: Xi,
        children: [
          e &&
            (0, X.jsx)(`img`, {
              className: `KkgW9CzRVMI-`,
              src: this.props.ImgUrl,
            }),
          !e && (0, X.jsx)(`div`, { className: `KkgW9CzRVMI-` }),
        ],
      });
    }
  },
  ca = s((e) => {
    let { steamIDBroadcast: t } = e,
      n = B.GetOrCreateBroadcastInfo(t).m_nAppID;
    n = n == 7 ? 0 : n;
    let r = u(n),
      { data: i } = et(r);
    return (0, X.jsxs)(`div`, {
      className: [Gi, void 0].join(` `),
      children: [
        i
          ? (0, X.jsx)(fe, {
              id: r,
              className: Ki,
              children: x(`#StoreBroadcast_Detault_popout_Title`),
            })
          : (0, X.jsx)(`div`, {
              className: Ki,
              children: x(`#StoreBroadcast_Detault_popout_Title`),
            }),
        (0, X.jsx)(T, {
          toolTipContent: x(`#StoreBroadcast_close_broadcast_popup`),
          children: (0, X.jsx)(`button`, {
            className: qi,
            onClick: e.OnPreventPopup,
            children: (0, X.jsx)(ut, {}),
          }),
        }),
      ],
    });
  });
function la(e, t) {
  let n = B.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
    r = Ge.Get().GetApp(n);
  return e && r?.GetAssets()?.GetHeaderURL() ? parseInt(ui) : parseInt(di);
}
function ua(e) {
  let {
      curStream: t,
      onStreamSelect: n,
      fnFilterStreams: r,
      bShowCapsuleArt: i,
      broadcastEmbedContext: a,
    } = e,
    o = (0, U.useRef)(null),
    s = (0, U.useMemo)(() => {
      let e = (H.Get().GetStreams(a) ?? []).filter((e) => !r || r(e));
      return (Et(e), e);
    }, [a, r]);
  return (
    (0, U.useEffect)(() => {
      if (o && o.current) {
        let e = s
          .map((e) => B.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
          .filter(Boolean);
        Ge.Get()
          .QueueMultipleAppRequests(e, { include_assets: !0 })
          .then(() => {
            if (o.current) {
              let e = 0;
              for (let n of s) {
                if (t.accountid == n.accountid) break;
                e += la(i, n);
              }
              o.current.scrollTop = e;
            }
          });
      }
    }, [s, i, t.accountid, o]),
    (0, X.jsx)(`div`, {
      ref: o,
      className: L({ [Si]: !0, side_panels: !0, [Bi]: !0, [Hi]: s.length > 3 }),
      children: (0, X.jsx)(`div`, {
        className: Vi,
        children: s.map((e) =>
          (0, X.jsx)(
            da,
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
function da(e) {
  let { onStreamSelect: t, bSelected: n, stream: r, bShowCapsuleArt: i } = e,
    a = l(() => B.GetOrCreateBroadcastInfo(r.steamid).m_nAppID);
  a = a == 7 ? 0 : a;
  let o = u(a),
    { data: s } = et(o),
    { data: c } = pt(o);
  if (!wt(r)) return null;
  let d = i && c ? Be(c, `header`) : void 0,
    f = Number.parseInt(`` + r.viewer_count),
    p = !Number.isNaN(f),
    m = !!r.nAppIDVOD && s?.name;
  return (0, X.jsxs)(`div`, {
    className: L({
      [ji]: !0,
      [void 0]: r.current_selection_priority == re.k_eFeatured,
      [Mi]: !!d,
    }),
    children: [
      (0, X.jsx)(v, {
        id: o,
        hoverClassName: Pi,
        children: (0, X.jsx)(ue, {
          className: L(Fi, n && void 0),
          onClick: () => t && t(r),
          rootMargin: `100px 0px 100px 0px`,
          children: (0, X.jsx)(fa, {
            strThumbnail: r.thumbnail_http_address,
            bSelected: n,
            strCapsuleArtURL: d,
          }),
        }),
      }),
      (0, X.jsx)(`div`, {
        className: L(Ai, !p && `QP7p0y7iNjE-`),
        children: p
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(mt, {}),
                (0, X.jsx)(`div`, { className: Ni, children: vt(f) }),
              ],
            })
          : m,
      }),
    ],
  });
}
function fa(e) {
  let { strCapsuleArtURL: t, strThumbnail: n, bSelected: r } = e,
    i = r ? zi : Ri;
  if (t) {
    let e = [t];
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(`img`, { className: L(i, Ii), src: t }),
        (0, X.jsx)(ne, { className: L(i, Li), srcs: e }),
      ],
    });
  }
  return (0, X.jsx)(`img`, { className: i, src: n });
}
function pa(e) {
  let { stream: t, orientation: n } = e,
    r = n == `below`,
    [i, a] = l(() => {
      let e = t.steamid ? B.GetBroadcast(t.steamid) : void 0;
      return [e, e?.m_ulBroadcastID];
    }),
    o = l(() => t.steamid);
  return i
    ? (0, X.jsx)(`div`, {
        className: L({ [void 0]: r, [void 0]: !r, [mi]: !0 }),
        children: (0, X.jsx)(`div`, {
          className: Yi,
          children: (0, X.jsx)(Z, {
            emoticonStore: Dt,
            watchLocation: 6,
            steamID: o,
            broadcastID: a,
          }),
        }),
      })
    : null;
}
export { ca as BroadcastEmbeddablePopoutHeader, ia as default };
