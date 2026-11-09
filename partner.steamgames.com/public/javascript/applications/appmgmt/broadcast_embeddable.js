/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  Ct as n,
  Gt as r,
  Ht as i,
  I as a,
  Jt as o,
  Kt as s,
  L as c,
  M as l,
  Ot as u,
  R as d,
  S as f,
  T as p,
  Ut as m,
  Wt as h,
  Xt as ee,
  Y as g,
  Yt as _,
  Z as te,
  _t as ne,
  ft as re,
  i as v,
  it as ie,
  k as y,
  kt as ae,
  nt as b,
  on as oe,
  qt as x,
  rt as S,
  vt as C,
  x as w,
  xt as se,
  yt as T,
} from "./mobx.esm.js";
import {
  F as ce,
  Ft as le,
  Lt as ue,
  Rt as E,
  _t as de,
  t as D,
  ut as fe,
} from "./src.js";
import {
  $n as pe,
  Bn as O,
  Fn as me,
  Hi as he,
  In as ge,
  Ni as _e,
  Qr as ve,
  Rn as ye,
  Sr as be,
  Vt as xe,
  Zr as Se,
  bn as Ce,
  er as we,
  fa as Te,
  fn as Ee,
  m as De,
  oa as k,
  or as Oe,
  p as ke,
  pn as A,
  qi as Ae,
  rr as je,
  s as Me,
  tr as Ne,
} from "./dialogs.js";
import { d as Pe, h as Fe, y as Ie } from "./storebrowsequerycontext.js";
import { Q as Le, Qn as Re, mt as ze, yn as Be, zn as Ve } from "./saletags.js";
import { r as He } from "./storenaveventcontext.js";
import { C as j, w as M } from "./react-router.js";
import { t as N } from "./webuitransportdefaults.js";
import { v as Ue } from "./eventimageurlwithfallback.js";
import "./steammessages_store_pb.js";
import { r as We } from "./appidutils.js";
import { a as P, i as F, r as Ge } from "./broadcastplayer.js";
import { t as Ke } from "./lazyrenderchildren.js";
import {
  a as qe,
  c as Je,
  g as Ye,
  i as Xe,
  o as I,
  s as Ze,
} from "./salestoreitemutils.js";
import { a as Qe, n as $e, r as et, t as tt } from "./logindialog.js";
import { n as nt } from "./partnereventstore.js";
import "./modals.js";
import { t as rt } from "./axios.js";
import { t as it } from "./axiosutils.js";
import { t as at } from "./throbber.js";
import { s as ot } from "./localization2.js";
import { n as st } from "./eventdevfeaturestore.js";
import { h as ct, t as lt } from "./partnereventshared.module.js";
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
} from "./emoticonbutton.js";
import { C as bt } from "./partnereventutils.js";
import "./steamid.js";
import { t as xt } from "./base64-js.js";
import { n as St } from "./numberformats.js";
import { t as Ct } from "./emoticon_php.js";
import { o as wt } from "./creatorhomestore.js";
import { n as Tt, r as Et, t as Dt } from "./browserapi.js";
import { n as Ot, t as kt } from "./storegamehover.js";
import { n as At, t as jt } from "./storeitemcache.js";
import { n as Mt } from "./steammessages_experiments_pb.js";
import {
  O as Nt,
  d as Pt,
  f as Ft,
  k as It,
  n as Lt,
  p as Rt,
} from "./discussionwidget.module.js";
import {
  c as zt,
  i as Bt,
  n as Vt,
  o as Ht,
  s as Ut,
  t as Wt,
} from "./steammessages_player_pb.js";
import { n as Gt } from "./storeitemhooks.js";
import { n as Kt, r as qt, t as Jt } from "./twitter_large.js";
import { t as Yt } from "./localstorage.js";
import { a as Xt, i as Zt, o as Qt, r as $t, s as en } from "./vodquery.js";
var tn = 1004,
  nn = 1005,
  rn = 1006,
  L = oe(ae()),
  R = oe(rt()),
  z = oe(ee(), 1),
  an = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  on = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  sn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  cn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            unique_name: { n: 2, br: r.readString, bw: _.writeString },
            steamid: {
              n: 3,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  ln = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            name: { n: 2, br: r.readString, bw: _.writeString },
            language: { n: 3, br: r.readString, bw: _.writeString },
            headline: { n: 4, br: r.readString, bw: _.writeString },
            summary: { n: 5, br: r.readString, bw: _.writeString },
            avatar_hash: { n: 6, br: r.readString, bw: _.writeString },
            schedule: { n: 7, br: r.readString, bw: _.writeString },
            rules: { n: 8, br: r.readString, bw: _.writeString },
            panels: { n: 9, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
    }
  },
  un = class e extends z.Message {
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
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  dn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  fn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.unique_name || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: r.readString, bw: _.writeString },
            owner_steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            name: { n: 3, br: r.readString, bw: _.writeString },
            language: { n: 4, br: r.readString, bw: _.writeString },
            headline: { n: 5, br: r.readString, bw: _.writeString },
            summary: { n: 6, br: r.readString, bw: _.writeString },
            schedule: { n: 7, br: r.readString, bw: _.writeString },
            rules: { n: 8, br: r.readString, bw: _.writeString },
            panels: { n: 9, br: r.readString, bw: _.writeString },
            is_partnered: { n: 10, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  pn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            image_type: { n: 2, br: r.readEnum, bw: _.writeEnum },
            image_index: { n: 3, br: r.readUint32, bw: _.writeUint32 },
            image_width: { n: 4, br: r.readUint32, bw: _.writeUint32 },
            image_height: { n: 5, br: r.readUint32, bw: _.writeUint32 },
            file_size: { n: 6, br: r.readUint32, bw: _.writeUint32 },
            file_extension: { n: 7, br: r.readString, bw: _.writeString },
            file_hash: { n: 8, br: r.readString, bw: _.writeString },
            undo: { n: 9, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  mn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.replace_image_hash || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            replace_image_hash: { n: 1, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  hn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [2], null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            image_types: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: _.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Request`;
    }
  },
  gn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: _n, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  _n = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_type || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_type: { n: 1, br: r.readEnum, bw: _.writeEnum },
            image_path: { n: 2, br: r.readString, bw: _.writeString },
            image_index: { n: 3, br: r.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  vn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
    }
  },
  yn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.links || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: bn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  bn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link_index || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: r.readUint32, bw: _.writeUint32 },
            url: { n: 2, br: r.readString, bw: _.writeString },
            link_description: { n: 3, br: r.readString, bw: _.writeString },
            left: { n: 4, br: r.readUint32, bw: _.writeUint32 },
            top: { n: 5, br: r.readUint32, bw: _.writeUint32 },
            width: { n: 6, br: r.readUint32, bw: _.writeUint32 },
            height: { n: 7, br: r.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  xn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [2], null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            links: { n: 2, c: Sn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  Sn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link_index || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: r.readUint32, bw: _.writeUint32 },
            url: { n: 2, br: r.readString, bw: _.writeString },
            link_description: { n: 3, br: r.readString, bw: _.writeString },
            left: { n: 4, br: r.readUint32, bw: _.writeUint32 },
            top: { n: 5, br: r.readUint32, bw: _.writeUint32 },
            width: { n: 6, br: r.readUint32, bw: _.writeUint32 },
            height: { n: 7, br: r.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
    }
  },
  Cn = class e extends z.Message {
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
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  wn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  Tn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_live || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_live: { n: 1, br: r.readBool, bw: _.writeBool },
            is_disabled: { n: 2, br: r.readBool, bw: _.writeBool },
            appid: { n: 3, br: r.readUint32, bw: _.writeUint32 },
            viewers: { n: 4, br: r.readUint64String, bw: _.writeUint64String },
            views: { n: 5, br: r.readUint64String, bw: _.writeUint64String },
            broadcaster_steamid: {
              n: 6,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            thumbnail_url: { n: 7, br: r.readString, bw: _.writeString },
            followers: {
              n: 8,
              br: r.readUint64String,
              bw: _.writeUint64String,
            },
            subscribers: {
              n: 9,
              br: r.readUint64String,
              bw: _.writeUint64String,
            },
            unique_name: { n: 10, br: r.readString, bw: _.writeString },
            broadcast_session_id: {
              n: 11,
              br: r.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  B = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            unique_name: { n: 2, br: r.readString, bw: _.writeString },
            name: { n: 3, br: r.readString, bw: _.writeString },
            appid: { n: 4, br: r.readUint32, bw: _.writeUint32 },
            viewers: { n: 5, br: r.readUint64String, bw: _.writeUint64String },
            views: { n: 6, br: r.readUint64String, bw: _.writeUint64String },
            thumbnail_url: { n: 7, br: r.readString, bw: _.writeString },
            followers: {
              n: 8,
              br: r.readUint64String,
              bw: _.writeUint64String,
            },
            headline: { n: 9, br: r.readString, bw: _.writeString },
            avatar_url: { n: 10, br: r.readString, bw: _.writeString },
            broadcaster_steamid: {
              n: 11,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            subscribers: {
              n: 12,
              br: r.readUint64String,
              bw: _.writeUint64String,
            },
            background_url: { n: 13, br: r.readString, bw: _.writeString },
            is_featured: { n: 14, br: r.readBool, bw: _.writeBool },
            is_disabled: { n: 15, br: r.readBool, bw: _.writeBool },
            is_live: { n: 16, br: r.readBool, bw: _.writeBool },
            language: { n: 17, br: r.readString, bw: _.writeString },
            reports: { n: 18, br: r.readUint32, bw: _.writeUint32 },
            is_partnered: { n: 19, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GetBroadcastChannelEntry`;
    }
  },
  En = class e extends z.Message {
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
      return `CSteamTV_GetFollowedChannels_Request`;
    }
  },
  Dn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Response`;
    }
  },
  On = class e extends z.Message {
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
      return `CSteamTV_GetSubscribedChannels_Request`;
    }
  },
  kn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  An = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            undo: { n: 2, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  jn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_followed || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_followed: { n: 1, br: r.readBool, bw: _.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  Mn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  Nn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_subscribed || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_subscribed: { n: 1, br: r.readBool, bw: _.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  Pn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            reason: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Request`;
    }
  },
  Fn = class e extends z.Message {
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
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  In = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  Ln = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_followed || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_followed: { n: 1, br: r.readBool, bw: _.writeBool },
            is_subscribed: { n: 2, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  Rn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: _.writeUint32 },
            name: { n: 2, br: r.readString, bw: _.writeString },
            image: { n: 3, br: r.readString, bw: _.writeString },
            viewers: { n: 4, br: r.readUint64String, bw: _.writeUint64String },
            channels: { n: 5, c: B, r: !0, q: !0 },
            release_date: { n: 6, br: r.readString, bw: _.writeString },
            developer: { n: 7, br: r.readString, bw: _.writeString },
            publisher: { n: 8, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Game`;
    }
  },
  zn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: _.writeUint32 },
            algorithm: { n: 2, br: r.readEnum, bw: _.writeEnum },
            count: { n: 3, br: r.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Request`;
    }
  },
  Bn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Rn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetGames_Response`;
    }
  },
  Vn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.algorithm || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            algorithm: { n: 1, br: r.readEnum, bw: _.writeEnum },
            count: { n: 2, br: r.readUint32, bw: _.writeUint32 },
            appid: { n: 3, br: r.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Request`;
    }
  },
  Hn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChannels_Response`;
    }
  },
  Un = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  Wn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasters || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasters: { n: 1, c: Gn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
    }
  },
  Gn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            name: { n: 2, br: r.readString, bw: _.writeString },
            rtmp_token: { n: 3, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  Kn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.issuer_steamid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            time_expires: { n: 3, br: r.readString, bw: _.writeString },
            permanent: { n: 4, br: r.readBool, bw: _.writeBool },
            name: { n: 5, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatBan`;
    }
  },
  qn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            duration: { n: 3, br: r.readUint32, bw: _.writeUint32 },
            permanent: { n: 4, br: r.readBool, bw: _.writeBool },
            undo: { n: 5, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Request`;
    }
  },
  Jn = class e extends z.Message {
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
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  Yn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Request`;
    }
  },
  Xn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Kn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  Zn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            moderator_steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            undo: { n: 3, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Request`;
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
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  $n = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Request`;
    }
  },
  er = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            name: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_ChatModerator`;
    }
  },
  tr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: er, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  nr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            word: { n: 2, br: r.readString, bw: _.writeString },
            undo: { n: 3, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Request`;
    }
  },
  rr = class e extends z.Message {
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
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  ir = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Request`;
    }
  },
  ar = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
              br: r.readString,
              bw: _.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  or = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Request`;
    }
  },
  sr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [3], null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            view_url_template: { n: 2, br: r.readString, bw: _.writeString },
            flair_group_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: r.readUint64String,
              pbr: r.readPackedUint64String,
              bw: _.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_JoinChat_Response`;
    }
  },
  cr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.term || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { term: { n: 1, br: r.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Request`;
    }
  },
  lr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_Search_Response`;
    }
  },
  ur = class e extends z.Message {
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
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  dr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stream_live_email || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: r.readBool, bw: _.writeBool },
            stream_live_notification: { n: 2, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  fr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stream_live_email || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: r.readBool, bw: _.writeBool },
            stream_live_notification: { n: 2, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Request`;
    }
  },
  pr = class e extends z.Message {
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
      return `CSteamTV_SetSteamTVUserSettings_Response`;
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
      return `CSteamTV_GetMyBroadcastChannels_Request`;
    }
  },
  hr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  gr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasts: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  _r = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: B, r: !0, q: !0 },
            appid: { n: 2, br: r.readUint32, bw: _.writeUint32 },
            title: { n: 3, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_SingleGame`;
    }
  },
  vr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: _.writeUint32 },
            game_name: { n: 2, br: r.readString, bw: _.writeString },
            broadcast: { n: 3, c: B },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `GameListEntry`;
    }
  },
  yr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: vr, r: !0, q: !0 },
            title: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  br = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: B, r: !0, q: !0 },
            title: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  xr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcasts || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: B, r: !0, q: !0 },
            title: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  Sr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: B },
            title: { n: 2, br: r.readString, bw: _.writeString },
            chat_group_id: {
              n: 3,
              br: r.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  Cr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: B },
            title: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Developer`;
    }
  },
  wr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { title: { n: 1, br: r.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  Tr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.template_type || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            template_type: { n: 1, br: r.readEnum, bw: _.writeEnum },
            takeover: { n: 2, c: gr },
            single_game: { n: 3, c: _r },
            game_list: { n: 4, c: yr },
            quick_explore: { n: 5, c: br },
            conveyor_belt: { n: 6, c: xr },
            watch_party: { n: 7, c: Sr },
            developer: { n: 8, c: Cr },
            event: { n: 9, c: wr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_HomePageContentRow`;
    }
  },
  Er = class e extends z.Message {
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
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  Dr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rows || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { rows: { n: 1, c: Tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  Or = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  kr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: r.readUint64String,
              bw: _.writeUint64String,
            },
            channel_id: {
              n: 2,
              br: r.readUint64String,
              bw: _.writeUint64String,
            },
            app_id: { n: 3, br: r.readUint32, bw: _.writeUint32 },
            broadcaster_steamid: {
              n: 4,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            creator_steamid: {
              n: 5,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            video_description: { n: 6, br: r.readString, bw: _.writeString },
            live_time: { n: 7, br: r.readUint32, bw: _.writeUint32 },
            length_ms: { n: 8, br: r.readUint32, bw: _.writeUint32 },
            thumbnail_path: { n: 9, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  Ar = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clips || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clips: { n: 1, c: kr, r: !0, q: !0 },
            thumbnail_host: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  jr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cheer_type || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cheer_type: { n: 1, br: r.readUint32, bw: _.writeUint32 },
            cheer_amount: { n: 2, br: r.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  Mr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: r.readUint32, bw: _.writeUint32 },
            cheer_target_id: {
              n: 2,
              br: r.readFixed64String,
              bw: _.writeFixed64String,
            },
            cheers: { n: 3, c: jr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Request`;
    }
  },
  Nr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.aggregation_delay_ms || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            aggregation_delay_ms: { n: 1, br: r.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamTV_AppCheer_Response`;
    }
  },
  Pr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamTV.CreateBroadcastChannel#1`, T(an, t, n), on, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.CreateBroadcastChannel = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelID#1`, T(sn, t, n), cn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelID = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelProfile#1`, T(ln, t, n), un, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelProfile = r;
  function i(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelProfile#1`, T(dn, t, n), fn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelProfile = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelImage#1`, T(pn, t, n), mn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelImage = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelImages#1`, T(hn, t, n), gn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelImages = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SteamTV.SetBroadcastChannelLinkRegions#1`,
      T(xn, t, n),
      Cn,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetBroadcastChannelLinkRegions = s;
  function c(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelLinks#1`, T(vn, t, n), yn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelLinks = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelBroadcasters#1`,
      T(Un, t, n),
      Wn,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelBroadcasters = l;
  function u(e, t, n) {
    return e.SendMsg(`SteamTV.GetFollowedChannels#1`, T(En, t, n), Dn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetFollowedChannels = u;
  function d(e, t, n) {
    return e.SendMsg(`SteamTV.GetSubscribedChannels#1`, T(On, t, n), kn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSubscribedChannels = d;
  function f(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelStatus#1`, T(wn, t, n), Tn, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelStatus = f;
  function p(e, t, n) {
    return e.SendMsg(`SteamTV.FollowBroadcastChannel#1`, T(An, t, n), jn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.FollowBroadcastChannel = p;
  function m(e, t, n) {
    return e.SendMsg(`SteamTV.SubscribeBroadcastChannel#1`, T(Mn, t, n), Nn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SubscribeBroadcastChannel = m;
  function h(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelClips#1`, T(Or, t, n), Ar, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelClips = h;
  function ee(e, t, n) {
    return e.SendMsg(`SteamTV.ReportBroadcastChannel#1`, T(Pn, t, n), Fn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.ReportBroadcastChannel = ee;
  function g(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelInteraction#1`,
      T(In, t, n),
      Ln,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelInteraction = g;
  function _(e, t, n) {
    return e.SendMsg(`SteamTV.GetGames#1`, T(zn, t, n), Bn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetGames = _;
  function te(e, t, n) {
    return e.SendMsg(`SteamTV.GetChannels#1`, T(Vn, t, n), Hn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetChannels = te;
  function ne(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatBan#1`, T(qn, t, n), Jn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatBan = ne;
  function re(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatBans#1`, T(Yn, t, n), Xn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetChatBans = re;
  function v(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatModerator#1`, T(Zn, t, n), Qn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatModerator = v;
  function ie(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatModerators#1`, T($n, t, n), tr, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.GetChatModerators = ie;
  function y(e, t, n) {
    return e.SendMsg(`SteamTV.AddWordBan#1`, T(nr, t, n), rr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.AddWordBan = y;
  function ae(e, t, n) {
    return e.SendMsg(`SteamTV.GetWordBans#1`, T(ir, t, n), ar, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetWordBans = ae;
  function b(e, t, n) {
    return e.SendMsg(`SteamTV.JoinChat#1`, T(or, t, n), sr, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.JoinChat = b;
  function oe(e, t, n) {
    return e.SendMsg(`SteamTV.Search#1`, T(cr, t, n), lr, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.Search = oe;
  function x(e, t, n) {
    return e.SendMsg(`SteamTV.GetSteamTVUserSettings#1`, T(ur, t, n), dr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSteamTVUserSettings = x;
  function S(e, t, n) {
    return e.SendMsg(`SteamTV.SetSteamTVUserSettings#1`, T(fr, t, n), pr, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetSteamTVUserSettings = S;
  function C(e, t, n) {
    return e.SendMsg(`SteamTV.GetMyBroadcastChannels#1`, T(mr, t, n), hr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetMyBroadcastChannels = C;
  function w(e, t, n) {
    return e.SendMsg(`SteamTV.GetHomePageContents#1`, T(Er, t, n), Dr, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetHomePageContents = w;
  function se(e, t, n) {
    return e.SendMsg(`SteamTV.AppCheer#1`, T(Mr, t, n), Nr, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AppCheer = se;
})((Pr ||= {}));
var Fr = oe(xt()),
  Ir = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: r.readString, bw: _.writeString },
            type: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
    }
  },
  Lr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: r.readString, bw: _.writeString },
            type: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  Rr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.dictionary || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dictionary: { n: 1, br: r.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Response`;
    }
  },
  zr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: r.readString, bw: _.writeString },
            type: { n: 2, br: r.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  Br = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pid: { n: 1, br: r.readUint32, bw: _.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  Vr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: r.readUint64String, bw: _.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  Hr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: r.readUint64String, bw: _.writeUint64String },
            should_handle: { n: 2, br: r.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  Ur = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.search_term || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            search_term: { n: 1, br: r.readString, bw: _.writeString },
            max_results: { n: 2, br: r.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
    }
  },
  Wr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || i(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
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
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Response`;
    }
  },
  V;
(function (e) {
  e.UpdateTextFilterDictionaryHandler = {
    name: `SteamEngine.UpdateTextFilterDictionary#1`,
    request: Ir,
  };
  function t(e, t) {
    return (
      (t ||= N().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.UpdateTextFilterDictionaryHandler,
            e,
          )
    );
  }
  e.RegisterForUpdateTextFilterDictionary = t;
  function n(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            T(Ir, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.UpdateTextFilterDictionary = n;
  function r(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            T(Ir, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgUpdateTextFilterDictionary = r),
    (e.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: Lr,
      response: Rr,
    }));
  function i(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, T(Lr, e), Rr, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetTextFilterDictionary = i;
  function a(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, T(Lr, e), Rr, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((e.SendMsgGetTextFilterDictionary = a),
    (e.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: zr,
    }));
  function o(e, t) {
    return (
      (t ||= N().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.NotifyTextFilterDictionaryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTextFilterDictionaryChanged = o;
  function s(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            T(zr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.NotifyTextFilterDictionaryChanged = s;
  function c(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            T(zr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgNotifyTextFilterDictionaryChanged = c),
    (e.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: Br,
      response: Vr,
    }));
  function l(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetGameIDForPID#1`, T(Br, e), Vr, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetGameIDForPID = l;
  function u(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`SteamEngine.GetGameIDForPID#1`, T(Br, e), Vr, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  ((e.SendMsgGetGameIDForPID = u),
    (e.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: Hr,
    }));
  function d(e, t) {
    return (
      (t ||= N().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            V.SetOverlayEscapeKeyHandlingHandler,
            e,
          )
    );
  }
  e.RegisterForSetOverlayEscapeKeyHandling = d;
  function f(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            T(Hr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SetOverlayEscapeKeyHandling = f;
  function p(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            T(Hr, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  ((e.SendMsgSetOverlayEscapeKeyHandling = p),
    (e.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: Ur,
      response: Wr,
    }));
  function m(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            T(Ur, e),
            Wr,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SearchAppDataCacheByStoreKeywords = m;
  function h(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            T(Ur, e),
            Wr,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SendMsgSearchAppDataCacheByStoreKeywords = h;
})((V ||= {}));
var Gr = class {
  constructor() {
    w(this);
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
                ? u().ReportError(e)
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
              ? u().ReportError(e)
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
      let i = C.InitFromMsg(e.request, n),
        a = C.Init(e.response, 147),
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
        t(C.InitFromMsg(e.request, n));
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
      n(C.InitFromMsg(t, e));
    });
  }
  RegisterEMessageAction(e, t, n) {
    return this.AddCallback(e, t, (e) => {
      p(() => {
        n(C.InitFromMsg(t, e));
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
        p(() => {
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
      let r;
      return (
        p(() => {
          r = t(e, n);
        }),
        r
      );
    });
  }
};
(y([f], Gr.prototype, `m_rgRegisteredEMsgs`, void 0),
  y([f], Gr.prototype, `m_rgRegisteredServiceMethodHandlers`, void 0));
var Kr = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.auth_key || i(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { auth_key: { n: 1, br: r.readString, bw: _.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return h(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new z.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Request`;
    }
  },
  qr = class e extends z.Message {
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
      return `CTransportAuth_Authenticate_Response`;
    }
  },
  Jr = class e extends z.Message {
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
      return `CTransportAuth_StartShutdown_Notification`;
    }
  },
  Yr;
(function (e) {
  e.AuthenticateHandler = {
    name: `TransportAuth.Authenticate#1`,
    request: Kr,
    response: qr,
  };
  function t(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`TransportAuth.Authenticate#1`, T(Kr, e), qr, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.Authenticate = t;
  function n(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            (console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`));
          })
        : t.SendMsg(`TransportAuth.Authenticate#1`, T(Kr, e), qr, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  ((e.SendMsgAuthenticate = n),
    (e.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: Jr,
    }));
  function r(e, t) {
    return (
      (t ||= N().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(Yr.NotifyStartShutdownHandler, e)
    );
  }
  e.RegisterForNotifyStartShutdown = r;
  function i(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`TransportAuth.NotifyStartShutdown#1`, T(Jr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.NotifyStartShutdown = i;
  function a(e, t) {
    return (
      (t ||= N().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`TransportAuth.NotifyStartShutdown#1`, T(Jr, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.SendMsgNotifyStartShutdown = a;
})((Yr ||= {}));
var Xr = class {
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
    return n(e, 1, 5) * 1e3;
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
(y([E], Xr.prototype, `OnSocketError`, null),
  y([E], Xr.prototype, `OnSocketOpen`, null),
  y([E], Xr.prototype, `OnSocketClose`, null),
  y([E], Xr.prototype, `OnSocketMessage`, null));
var Zr = `127.0.0.1`,
  H = new le(`WebUITransport`),
  U = class {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new Gr();
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
      H.Warning(e);
      let t = u();
      t &&
        t.ReportError(Error(e), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!b.IN_CLIENT) return;
      let e = await SteamClient.WebUITransport.GetTransportInfo();
      ((this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, e.portSteamUI, e.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          e.portClientdll,
          e.authKeyClientdll,
        ),
        N().SetDefaultTransport(this),
        N().SetDefaultHandlerRegistry(this.m_messageHandlers),
        Yr.RegisterForNotifyStartShutdown(this.OnStartShutdown));
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
        connection: new Xr(t, {
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
        sUrl: `ws://${Zr}:${n}/transportsocket/`,
        sAuthKey: r,
        eClientExecutionSite: e,
      };
      this.m_mapConnectionDetails.set(e, i);
    }
    SendMsg(e, t, n, r) {
      return new Promise((i, a) => {
        let o = r.eClientExecutionSite;
        if (o == null || o == 0) {
          (H.Error(`SendMsg: Invalid client execution site: ${o}`),
            a(`Transport SendMsg: invalid client execution site ${o}`));
          return;
        }
        let s = this.m_mapConnectionDetails.get(o);
        if (s == null) {
          (H.Error(
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
            H.Warning(n + ` error count: ${t}`),
            a(`Transport SendMsg: socket not ready`));
          return;
        }
        let l = this.m_iMsgSeq++;
        (t.SetEMsg(146),
          t.Hdr().set_target_job_name(e),
          t.Hdr().set_jobid_source(`` + l));
        let u = t.Serialize();
        if (u.byteLength >= this.m_nMaximumMsgSizeBytes) {
          H.Error(
            `SendMsg: message exceeds maximum size: ${u.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let e = C.Init(n);
          (e.Hdr().set_eresult(2), i(e));
        } else
          c.SendSerializedMessage(u) == 1
            ? this.m_mapPendingMethodRequests.set(l, {
                m_iSeq: l,
                m_responseClass: n,
                m_fnCallback: i,
                m_fnError: a,
              })
            : (H.Error(`SendMsg: Failed to send message`),
              a(`Transport SendMsg: failed to send message`));
      });
    }
    SendNotification(e, t, n) {
      let r = n.eClientExecutionSite;
      if (r == null || r == 0)
        return (
          H.Error(`SendNotification: Invalid client execution site: ${r}`), !1
        );
      let i = this.m_mapConnectionDetails.get(r);
      if (i == null)
        return (
          H.Error(
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
          t == 1 && this.ReportError(n), H.Warning(n + ` error count: ${t}`), !1
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
        H.Error(`GetConnectionDetails: failed to identify connection`), null
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
        (H.Warning(`OnWebsocketReconnect: Failed to reconnect to steam client`),
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
      let t = new se(e),
        n = C.InitHeaderFromPacket(t);
      n.Hdr().jobid_target() &&
      n.Hdr().jobid_target() !== `18446744073709551615`
        ? this.DispatchMethodResponse(n)
        : this.DispatchNotification(n);
    }
    DispatchMethodResponse(t) {
      let n = parseInt(t.Hdr().jobid_target()),
        r = this.m_mapPendingMethodRequests.get(n);
      if (r == null) {
        e(!1, `Transport Error: no pending callback for request`);
        return;
      }
      (e(n == r.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(n));
      let i = C.InitFromMsg(r.m_responseClass, t);
      r.m_fnCallback(i);
    }
    DispatchNotification(t) {
      this.m_messageHandlers.DispatchMsgToHandlers(t, (t) => {
        e(!1, `Transport Error: A notification should not generate a response`);
      });
    }
    FailAllPendingRequests() {
      for (let [e, t] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
        );
        let e = C.Init(t.m_responseClass);
        (e.Hdr().set_eresult(2), t.m_fnCallback(e));
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(e) {
      let t = Yr.AuthenticateHandler.name,
        n = { eClientExecutionSite: e.eClientExecutionSite },
        r = C.Init(Kr);
      return (
        r.Hdr().set_webui_auth_key(e.sAuthKey),
        await this.SendMsg(t, r, Yr.AuthenticateHandler.response, n)
      );
    }
    OnStartShutdown(e) {
      for (let [e, t] of this.m_mapConnectionDetails)
        t.connection.PrepareForShutdown();
      return 1;
    }
  };
(y([E], U.prototype, `OnWebsocketReconnectStart`, null),
  y([E], U.prototype, `OnWebsocketReconnectFinish`, null),
  y([E], U.prototype, `OnWebsocketClose`, null),
  y([E], U.prototype, `OnWebsocketMessage`, null),
  y([E], U.prototype, `OnStartShutdown`, null));
var Qr = new U();
function W() {
  return b.IN_MOBILE ? c : l();
}
function $r(e) {
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
var ei = 15,
  ti = 3600,
  ni = `(1)`,
  G = class {
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
      w(this);
      let t = new Wt();
      ((this.m_TextFilterPreferences = {
        eTextFilterSetting: t.text_filter_setting(),
        bIgnoreFriends: t.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new Ht()),
        (this.m_DataAccess = e));
    }
    async Init(e = 0, t = null, n = null, r = null) {
      ((this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = Qr),
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
        (this.m_nLoadLanguagesRetryDelaySec = ei),
        await this.EnsureFiltersLoaded());
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_fnUnregisterDictionaryChanged?.(),
        (this.m_fnUnregisterDictionaryChanged =
          this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
            V.NotifyTextFilterDictionaryChangedHandler,
            this.OnTextFilterDictionaryChanged,
          ).unregister),
        this.InitSteamEngineLanguage(b.LANGUAGE),
        b.LANGUAGE !== `english` && this.InitSteamEngineLanguage(`english`));
    }
    OnTextFilterDictionaryChanged(e) {
      return (
        !this.m_bInitialized && !this.m_bOngoingLoad
          ? (this.m_bFilterChangedWhileLoading = !0)
          : ((this.m_nLoadLanguagesRetryDelaySec = ei),
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
              Ut.NotifyCommunityPreferencesChangedHandler,
              (e) => (
                this.UpdateCommunityPreferences(e.Body().preferences()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
            e.RegisterServiceNotificationHandler(
              Ut.NotifyTextFilterWordsChangedHandler,
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
      let t = C.Init(Ir);
      (t.Body().set_language(e),
        t.Body().set_type(`profanity`),
        V.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport),
        t.Body().set_type(`banned`),
        V.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport));
    }
    GetSteamEngineTextFilterDictionary(e, t) {
      let n = C.Init(Lr);
      return (
        n.Body().set_language(e),
        n.Body().set_type(t),
        V.SendMsgGetTextFilterDictionary(n, this.m_WebUIServiceTransport)
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
        let t = new TextEncoder().encode(ni + e);
        return Fr.fromByteArray(t);
      } catch {
        return ``;
      }
    }
    DeobfuscateString(e) {
      try {
        let t = Fr.toByteArray(e),
          n = new TextDecoder().decode(t);
        return n.startsWith(ni)
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
          this.m_TextFilterWords = Ht.fromObject(JSON.parse(e));
        } catch {
          (console.warn(`Error parsing cached text filter word list`, e),
            (this.m_TextFilterWords = new Ht()));
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
      let e = new Wt();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let t = C.Init(Vt);
            e = (await zt.GetCommunityPreferences(this.m_Transport, t))
              .Body()
              .preferences();
          } else {
            let t = { sessionid: g(), origin: W() },
              n = await R.default.get(
                b.COMMUNITY_BASE_URL + `textfilter/ajaxgetcommunitypreferences`,
                { params: t, withCredentials: !0 },
              );
            e = Wt.fromObject(n.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(e),
        e.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let t = new Ht();
        if (e.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let e = C.Init(Bt);
              t = (await zt.GetTextFilterWords(this.m_Transport, e))
                .Body()
                .words();
            } else {
              let e = { sessionid: g(), origin: W() },
                n = await R.default.get(
                  b.COMMUNITY_BASE_URL +
                    `textfilter/ajaxgettextfiltercustomwords`,
                  { params: e, withCredentials: !0 },
                );
              t = Ht.fromObject(n.data.words);
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
    m_nLoadLanguagesRetryDelaySec = ei;
    async LoadLanguages() {
      ((this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0)));
      try {
        let e = await this.LoadLanguage(b.LANGUAGE);
        if (
          (b.LANGUAGE !== `english` &&
            (e = (await this.LoadLanguage(`english`)) && e),
          !e)
        )
          throw Error(`clean_public dictionary unavailable`);
        ((this.m_nLoadLanguagesRetryDelaySec = ei),
          (this.m_bWordListsComplete = !0));
      } catch (e) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          ti,
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
        t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${W()}`;
        {
          let e = await R.default.get(t);
          this.m_strBannedWords += e.data;
        }
        t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${W()}`;
        {
          let e = await R.default.get(t);
          this.m_strProfanityWords += e.data;
        }
      }
      let r = this.m_WebUIServiceTransport.BIsValid(),
        i = `CTextFilterStore_strCleanPublic_` + e;
      t = `${b.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${W()}`;
      try {
        let e = await R.default.get(t);
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
        return $r(e);
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
            u().ReportError(
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
            u().ReportError(
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
          ? (n = new D(e).GetAccountID())
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
(y([f], G.prototype, `m_TextFilterPreferences`, void 0),
  y([f], G.prototype, `m_mapPlayerCache`, void 0),
  y([f], G.prototype, `m_regexBannedWords`, void 0),
  y([f], G.prototype, `m_regexCleanWords`, void 0),
  y([f], G.prototype, `m_bInitialized`, void 0),
  y([f], G.prototype, `m_bFilterChangedWhileLoading`, void 0),
  y([f], G.prototype, `m_bOngoingLoad`, void 0),
  y([v], G.prototype, `Init`, null),
  y([E], G.prototype, `OnTextFilterDictionaryChanged`, null),
  y([v], G.prototype, `UpdateCommunityPreferences`, null),
  y([v], G.prototype, `BRebuildFilter`, null));
var ri;
function ii() {
  if (!ri) {
    let e = new Set(),
      t = { sessionid: g(), origin: W() };
    (R.default
      .get(b.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: t,
        withCredentials: !0,
      })
      .then((t) => {
        for (let n of t.data.friendslist?.friends ?? [])
          ie(n.efriendrelationship) &&
            e.add(new D(n.ulfriendid).GetAccountID());
      }),
      (ri = (t) => e.has(t)));
  }
  return ri;
}
var ai = 4,
  oi = 500,
  si = 10,
  ci = class e {
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
      return (n || ((n = new K()), this.m_mapChats.set(e || t, n)), n);
    }
    static s_Singleton;
    static Get() {
      return ((e.s_Singleton ||= new e()), e.s_Singleton);
    }
    constructor() {
      w(this);
    }
  };
y([f], ci.prototype, `m_mapChats`, void 0);
var K = class {
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
    (w(this), (this.m_steamInterface = this.CreateSteamInterface()));
  }
  InitTextFilter() {
    this.m_textFilterStore = new G({ BIsFriend: ii() });
    let e = 0;
    (S.steamid !== `` && (e = new D(S.steamid).GetAccountID()),
      this.m_textFilterStore.Init(e, null, new Yt()));
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
      (At() ?? ci.Get().GetCMInterface()) ||
      Dt(new Et(b.WEBAPI_BASE_URL, S.webapi_token))
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
      (this.m_strUserSteamID = S.steamid),
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
        let e = C.Init(Xt);
        e.SetBodyFields({
          chat_id: this.m_ulChatID,
          message: t,
          instance_id: this.m_unInstanceID.toString(),
        });
        let n = await $t.PostChatMessage(
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
              ? k(`#BroadcastChat_YouMuted`)
              : r.result == 84
                ? k(`#BroadcastChat_Cooldown`, r.cooldown_time_seconds ?? 0)
                : k(`#BroadcastChat_FailedToSendMsg`, t)),
            this.m_rgChatMessages.push({
              type: P.Error,
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
          type: P.Error,
          msg: k(`#BroadcastChat_FailedToSendMsg`, t),
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
          sessionid: g(),
          notoken: 1,
        },
        n = await R.default.get(`${b.CHAT_BASE_URL}broadcast/getchatinfo`, {
          params: t,
          withCredentials: !0,
          cancelToken: e?.token,
        });
      (e && e.token.reason) ||
        p(() => {
          let e = n.data;
          ((this.m_strChatURL = e.view_url_template ?? ``),
            (this.m_ulChatID = e.chat_id ?? ``),
            (this.m_strFlairGroupID = e.flair_group_ids?.[0] ?? ``),
            e.blocked && console.log(`User is blocked from chat`),
            e.steamid && (this.m_strUserSteamID = e.steamid),
            e.emoticons && this.SetOwnedEmoticons(e.emoticons),
            (this.m_bHasAddedWelcomeChat ||=
              (this.m_rgChatMessages.push({
                type: P.Notification,
                msg: k(`#BroadcastChat_DefaultMessage`),
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
      let e = C.Init(or);
      e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
      let t = await Pr.JoinChat(this.m_steamInterface.GetServiceTransport(), e),
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
          type: P.Notification,
          msg: k(`#BroadcastChat_DefaultMessage`),
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
    let e = C.Init($n);
    e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
    let t = (
        await Pr.GetChatModerators(
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
      let n = (await R.default.get(t, { params: e })).data;
      this.m_cConsecutiveErrors = 0;
      let r = n.messages
        .map((e) => ({ ...e, type: P.Chat, client_ts: Number(new Date()) }))
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
              ? k(`#BroadcastChat_YouMuted`, e.persona_name)
              : k(`#BroadcastChat_UserMuted`, e.persona_name);
          this.m_rgChatMessages.push({
            type: P.Notification,
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
        (this.m_nNudgeFactorMS += si),
        this.m_cConsecutiveErrors >= ai)
      ) {
        if (this.m_tsFirstRequest == null) {
          this.m_rgChatMessages.push({
            type: P.Error,
            msg: k(`#BroadcastChat_UnableToJoinChat`),
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
      this.m_chatScheduledFunc?.Schedule(oi, this.RequestLoop);
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
        r.append(`sessionid`, g()));
      try {
        (await R.default.post(
          `${b.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          r,
        ),
          this.m_mapBroadcastModeratorUsers.set(e, t));
        let i = k(
          t
            ? `#BroadcastChat_AddedModerator`
            : `#BroadcastChat_RemovedModerator`,
          n,
        );
        this.m_rgChatMessages.push({ type: P.Notification, msg: i });
      } catch {
        let e = k(
          t
            ? `#BroadcastChat_AddModeratorFailed`
            : `#BroadcastChat_RemoveModeratorFailed`,
          n,
        );
        this.m_rgChatMessages.push({ type: P.Error, msg: e });
      }
    }
  }
  async UpdateUserChatBan(e, t, n, r, i, a) {
    let o = this.m_ulBroadcastSteamID,
      s = this.m_strUserSteamID;
    if (this.m_ulBroadcastChannelID) {
      let t = C.Init(qn);
      (t.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: e,
        duration: n * 3600,
        permanent: r,
        undo: a,
      }),
        await Pr.AddChatBan(this.m_steamInterface.GetServiceTransport(), t));
    } else {
      let a = new FormData();
      (a.append(`broadcaststeamid`, o),
        a.append(`issuersteamid`, s),
        a.append(`chattersteamid`, e),
        a.append(`bantype`, t),
        a.append(`duration`, n.toString()),
        a.append(`perm`, r ? `1` : `0`),
        a.append(`sessionid`, g()));
      try {
        (await R.default.post(
          `${b.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
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
        let t = C.Init(Zt);
        (t.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: e,
          muted: !0,
        }),
          await $t.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            t,
          ));
      } catch {
        n &&
          (this.m_rgChatMessages.push({
            type: P.Error,
            msg: k(`#BroadcastChat_UserMuteFailed`, t),
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
        type: P.Notification,
        msg: k(`#BroadcastChat_UserMutedLocal`, t),
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
          let n = C.Init(Zt);
          (n.SetBodyFields({
            chat_id: this.m_ulChatID,
            user_steamid: e,
            muted: !1,
          }),
            await $t.MuteBroadcastChatUser(
              this.m_steamInterface.GetServiceTransport(),
              n,
            ),
            this.m_rgChatMessages.push({
              type: P.Notification,
              msg: k(`#BroadcastChat_UserUnmutedLocal`, t),
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: !1,
              persona_name: ``,
              steamid: ``,
            }));
        } catch {
          this.m_rgChatMessages.push({
            type: P.Error,
            msg: k(`#BroadcastChat_UserUnmuteFailed`, t),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      else
        this.m_rgChatMessages.push({
          type: P.Notification,
          msg: k(`#BroadcastChat_UserUnmutedLocal`, t),
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
        let t = C.Init(Qt);
        (t.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: e }),
          await $t.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            t,
          ));
      } catch {
        this.m_rgChatMessages.push({
          type: P.Error,
          msg: k(`#BroadcastChat_RemoveMessagesFailed`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async UpdateChatMessageFlair(e) {
    let t = C.Init(en);
    (t.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${e}:`,
    }),
      await $t.UpdateChatMessageFlair(
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
(y([f], K.prototype, `m_mapChannelModeratorUsers`, void 0),
  y([f], K.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  y([f], K.prototype, `m_nRateLimitSeconds`, void 0),
  y([f], K.prototype, `m_bRateLimited`, void 0),
  y([f], K.prototype, `m_rgChatMessages`, void 0),
  y([f], K.prototype, `m_latestAnnouncement`, void 0),
  y([E], K.prototype, `FetchChatModerators`, null),
  y([E], K.prototype, `RequestLoop`, null),
  y([E], K.prototype, `MuteUserForSession`, null));
var li = class e {
  constructor() {
    w(this);
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
          steamID: s ? new D(s) : void 0,
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
      nt.QueueLoadPartnerEvent(e.clanid, e.unique_id);
    let r = n.rgCalendarItems.map((e) =>
        nt.LoadPartnerEventFromClanEventGIDAndClanSteamID(
          D.InitFromClanID(e.clanid, b.EUNIVERSE),
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
y([f], li.prototype, `m_mapBroadcasterSteamIDData`, void 0);
var ui = new li(),
  q = ne();
function di(e) {
  return (0, q.jsx)(De, {
    onEscKeypress: e.closeModal,
    bDisableBackgroundDismiss: !0,
    children: (0, q.jsx)(pi, {
      redirectURL: e.redirectURL,
      guestOption: e.guestOption,
    }),
  });
}
function fi() {
  ke(
    (0, q.jsx)(di, { ownerWin: window, redirectURL: window.location.href }),
    window,
    { strTitle: k(`#Login_SignInTitle`) },
  );
}
function pi(e) {
  let { redirectURL: t, guestOption: n } = e,
    [r] = (0, L.useState)(
      new Tt(new Et(b.WEBAPI_BASE_URL)).GetAnonymousServiceTransport(),
    ),
    [i, a] = (0, L.useState)(!1);
  return (0, q.jsx)(`div`, {
    children: i
      ? (0, q.jsx)($e, {})
      : (0, q.jsx)(tt, {
          autoFocus: !0,
          transport: r,
          platform: 2,
          onComplete: (e) => {
            e == Qe.k_PrimaryDomainFail ? a(!0) : window.location.assign(t);
          },
          redirectUrl: t,
          theme: `modal`,
          children: n && (0, q.jsx)(et, { redirectURL: t }),
        }),
  });
}
var mi = `u-hyk5J5tIY-`,
  hi = `doqBDS-zTtg-`,
  gi = `DHv28C3kLqY-`,
  _i = () =>
    (0, q.jsx)(`div`, {
      className: mi,
      children: (0, q.jsx)(`div`, { className: hi }),
    }),
  vi = () =>
    (0, q.jsx)(`div`, {
      className: mi,
      children: (0, q.jsx)(`div`, { className: gi }),
    }),
  yi = `Utigx2dvTSs-`,
  bi = `IPiWi3ba7Oc-`,
  xi = `Tt1HS5eK4UQ-`,
  Si = `_2NN20ePjOoE-`,
  Ci = `Q5sAYcjkGuw-`,
  wi = `JhPLxwFuvY8-`,
  Ti = `-zOT4HlZFNc-`,
  Ei = `NFc5gI--APM-`,
  Di = `gMm9gxp-VwY-`,
  Oi = `_9JbCPa5peFE-`,
  ki = `jhZ68t8aO0U-`,
  Ai = `cF6FbGIaOso-`,
  ji = `uWbWS4Xl7nU-`,
  Mi = `_0bHpv5DDjVk-`,
  Ni = `GJr1kPqad-w-`,
  Pi = `_8whJ5F1f7no-`,
  Fi = `ngi9yWTTH6Q-`,
  Ii = `O0WGKKnt-b0-`,
  Li = `n4yzVjIUqg0-`,
  Ri = `gB1ggcMqZ4U-`,
  zi = `h1DcT5FSiVw-`,
  J = class e {
    constructor() {
      w(this);
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
(y([f], J.prototype, `giveaway_id`, void 0),
  y([f], J.prototype, `seconds_until_drawing`, void 0),
  y([f], J.prototype, `rtime_start`, void 0),
  y([f], J.prototype, `rtime_end`, void 0),
  y([f], J.prototype, `closed`, void 0),
  y([f], J.prototype, `winner_count`, void 0));
var Y = class e {
  constructor() {
    w(this);
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
      t || ((t = new ue()), this.m_mapNextDrawChangeCallback.set(e, t)), t
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
    let n = b.STORE_BASE_URL + `prizes/nextdraw/` + e,
      r = { origin: self.origin },
      i = await R.default.get(n, { params: r }),
      a = p(() => {
        let n = this.m_mapGiveawayIDToNextDrawInfo.get(e);
        if (
          (n || ((n = new J()), this.m_mapGiveawayIDToNextDrawInfo.set(e, n)),
          this.CopyToGiveaway(i.data, n),
          t !== void 0)
        ) {
          let n = this.GetKey(e, t),
            r = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(n);
          (r ||
            ((r = new J()),
            this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(n, r)),
            this.CopyToGiveaway(i.data, r));
        }
        return n;
      });
    return (this.GetNextDrawChangeCallback(e).Dispatch(a), a);
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
      let e = te(`giveawaynextdraw`, `application_config`);
      if (e && e.giveaway_id) {
        let t = new J();
        (this.CopyToGiveaway(e, t),
          this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t));
      }
      this.m_bLoadedFromConfig = !0;
    }
  }
};
(y([f], Y.prototype, `m_mapGiveawayIDToNextDrawInfo`, void 0),
  y([v], Y.prototype, `CopyToGiveaway`, null));
var Bi = class e {
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
(y([E], Bi.prototype, `ClearRefreshInterval`, null),
  y([E], Bi.prototype, `ClearCountDown`, null),
  y([E], Bi.prototype, `SetupRefreshDataInterval`, null),
  y([E], Bi.prototype, `SetupCountDown`, null));
function Vi(e, t) {
  let n = Y.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
  n &&
    n.seconds_until_drawing !== void 0 &&
    (--n.seconds_until_drawing,
    n.seconds_until_drawing == 0 && t.ClearCountDown());
}
function Hi(e, t) {
  let n = Y.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
  n &&
    n.BIsValid() &&
    n.seconds_until_drawing !== void 0 &&
    n.seconds_until_drawing <= 0 &&
    !n.closed &&
    (t.ClearCountDown(),
    Y.Get()
      .ReloadGiveaway(e, t.m_myInstanceNumber)
      .then((n) => {
        n && t.SetupCountDown(n.seconds_until_drawing, () => Vi(e, t));
      }));
}
function Ui(e) {
  let [t] = (0, L.useState)(new Bi()),
    n = ce();
  (0, L.useEffect)(
    () => (
      Y.Get()
        .ReloadGiveaway(e, t.m_myInstanceNumber)
        .then((r) => {
          r &&
            (t.SetupRefreshDataInterval(r, () => Hi(e, t)),
            t.SetupCountDown(r.seconds_until_drawing, () => Vi(e, t)),
            n());
        }),
      () => {
        (t.ClearRefreshInterval(), t.ClearCountDown());
      }
    ),
    [t, e, n],
  );
  let r = Y.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
    [i, a, o] = M(() => [r?.winner_count, r?.closed, r?.seconds_until_drawing]);
  return {
    bLoadingGiveawayInfo:
      !r || r.giveaway_id == null || !r.BStarted() || i === void 0,
    winner_count: i,
    closed: a,
    seconds_until_drawing: o,
  };
}
var Wi = `aE9NemwHX3U-`,
  Gi = `-LW3HYdhtwg-`,
  Ki = `UfXKJfvB2aU-`,
  qi = `NjuVylscv-c-`,
  Ji = `fQEvRYMgKZ8-`,
  Yi = `Jz1BUHL6vfU-`,
  Xi = `qUAIeS1LipI-`,
  Zi = `hCW7GiiXdrk-`,
  Qi = `gmY72gO6Jbk-`;
function $i(e) {
  let { latestAnnouncement: t } = e;
  return t?.type == `giveaway_draw`
    ? (0, q.jsx)(ea, { latestWinner: t })
    : null;
}
function ea(n) {
  let {
      latestWinner: r,
      className: i,
      strActionButton: a,
      strActionClassname: o,
    } = n,
    s = r.winners_info ?? [],
    c = s.length > 0 ? s[0].accountid : 0,
    [l, u] = L.useState(c),
    d = me(`${bt.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`),
    f = me(`${bt.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`);
  e(!!r.giveaway_gid, `Giveaway draw announcement is missing its giveaway`, r);
  let p = Ui(r.giveaway_gid),
    m = p.bLoadingGiveawayInfo || p.closed ? null : p.seconds_until_drawing,
    h = c === S.accountid;
  L.useEffect(() => {
    l != c && setTimeout(() => u(c), 1500);
  }, [c, l]);
  let ee =
    s.length > 0 && s[0].persona
      ? s[0].persona
      : k(`#GA2022_UnknownPersonaName`);
  return (0, q.jsx)(Ce, {
    href: `https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022`,
    className: i,
    children: (0, q.jsxs)(`div`, {
      className: t({ [Wi]: !0, [Gi]: l === c }),
      children: [
        (0, q.jsx)(`div`, {
          className: qi,
          children: (0, q.jsx)(`img`, { className: Ji, src: d }),
        }),
        (0, q.jsxs)(`div`, {
          className: Ki,
          children: [
            l !== c &&
              (0, q.jsx)(`div`, {
                className: t(`l-AUoGdZDTw-`),
                children: Te(
                  `#GA2022_Congrats_Deck_Unknown`,
                  (0, q.jsx)(`br`, {}),
                ),
              }),
            l === c &&
              (0, q.jsx)(`div`, {
                className: t(`l-AUoGdZDTw-`, `-LW3HYdhtwg-`),
                children: Te(
                  h
                    ? `#GA2022_Congrats_Deck_Me`
                    : `#GA2022_Congrats_Deck_OTher`,
                  ee,
                  (0, q.jsx)(`br`, {}),
                ),
              }),
            !!(m && m > 0) &&
              (0, q.jsx)(`div`, {
                className: `B7DECy1bqvs-`,
                children: Te(`#GA2022_Congrats_NextDraw`, m),
              }),
          ],
        }),
        (0, q.jsx)(`img`, { className: Yi, src: f }),
        !!a &&
          (0, q.jsx)(`div`, {
            className: o,
            children: h ? k(`#GA2022_YouWonNextSteps`) : a,
          }),
      ],
    }),
  });
}
function ta(e, t) {
  let [n, r] = M(() => [
      t?.steamid,
      t?.steamid ? F.GetBroadcast(t.steamid)?.m_ulBroadcastID : void 0,
    ]),
    [i, a] = L.useState(null);
  L.useEffect(() => {
    let e = null;
    return (
      n &&
        ((e = ci.Get().GetOrCreateChat(r ?? ``, n)),
        e.StartForSteamID(n, r ?? ``),
        a(e)),
      () => {
        e && (e.Stop(), a(null));
      }
    );
  }, [n, r]);
  let o = M(() => i?.m_latestAnnouncement || null);
  if (o?.type == `giveaway_draw`) {
    let t = o;
    if (t.giveaway_gid == e) return t;
  }
  return null;
}
function na(e) {
  let { gidGiveaway: t, stream: n } = e,
    r = ta(t, n),
    i = Mt(`GameAwardDrop2022`),
    a = null,
    o = Zi;
  return (
    S.logged_in
      ? i?.registered
        ? ((a = k(`#GA2022_AlreadyRegistered`)), (o = Qi))
        : (a = k(`#GA2022_RegisterToWin`))
      : (a = k(`#GA2022_RegisterLoginToWin`)),
    r
      ? (0, q.jsx)(ea, {
          latestWinner: r,
          className: Xi,
          strActionButton: a,
          strActionClassname: o,
        })
      : null
  );
}
var ra = RegExp(`ː([^ː]*)ː`, `g`),
  ia = RegExp(
    `^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)`,
    `i`,
  );
function aa(e, t, n) {
  return n
    ? `presenter`
    : t.GetBroadcastSteamID() === e
      ? `broadcaster`
      : t.BIsUserBroadcastModerator(e)
        ? `moderator`
        : ``;
}
var oa = (e) => {
    let { userType: n, msg: r, presenterInfo: i } = e;
    if (n === `presenter` && i)
      return (0, q.jsx)(`span`, {
        children: (0, q.jsx)(ft, {
          name: i.name ?? ``,
          title: i.title,
          photo: i.photo,
          company: i.company ?? ``,
          bioString: i.bio,
          children: (0, q.jsx)(`a`, {
            className: t(Ci, void 0),
            href: b.COMMUNITY_BASE_URL + `profiles/` + r.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: r.persona_name,
          }),
        }),
      });
    {
      let e;
      return (
        (n === `broadcaster` || n === `moderator`) && (e = void 0),
        (0, q.jsx)(`span`, {
          children: (0, q.jsx)(`a`, {
            className: t(Ci, e),
            href: b.COMMUNITY_BASE_URL + `profiles/` + r.steamid,
            "data-miniprofile": `s` + r.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: r.persona_name,
          }),
        })
      );
    }
  },
  sa = (e) => {
    switch (e.userType) {
      case `presenter`:
        return (0, q.jsx)(Ee, {
          toolTipContent: k(`#BroadcastChat_Role_Presenter_ttip`),
          children: (0, q.jsx)(`span`, {
            className: Ii,
            children: (0, q.jsx)(we, {}),
          }),
        });
      case `moderator`:
        return (0, q.jsx)(Ee, {
          toolTipContent: k(`#BroadcastChat_Role_Moderatorr_ttip`),
          children: (0, q.jsx)(`span`, {
            className: Ii,
            children: (0, q.jsx)(Ne, {}),
          }),
        });
      case `broadcaster`:
        return (0, q.jsx)(Ee, {
          toolTipContent: k(`#BroadcastChat_Role_Broadcaster_ttip`),
          children: (0, q.jsx)(`span`, {
            className: Ii,
            children: (0, q.jsx)(pe, {}),
          }),
        });
      default:
        return null;
    }
  },
  X = class extends L.Component {
    constructor(e) {
      (super(e), w(this));
    }
    m_chat = void 0;
    messagesContainer = L.createRef();
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
      let e = ci
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
      return !!e.match(ia);
    }
    AddLinksEmoticons(e, t) {
      t && this.m_chat?.GetUserEmoticons();
      let n = e.split(ra),
        r = [];
      for (let e = 0; e < n.length; e += 1)
        e % 2 == 1
          ? r.push((0, q.jsx)(_t, { emoticon: n[e], large: !0 }, e))
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
      if (!n || t.type !== P.Chat) return null;
      let r = [],
        i = n.IsUserBroadcaster(n.GetUserSteamID()),
        a = n.BIsUserBroadcastModerator(n.GetUserSteamID());
      return (
        (S && S.is_support) || i || a
          ? r.push(
              (0, q.jsx)(
                O,
                {
                  onSelected: () =>
                    n.RemoveUserMessagesServer(t.steamid, t.persona_name),
                  children: k(`#BroadcastChat_RemoveMessages`),
                },
                `remove`,
              ),
              (0, q.jsx)(
                O,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 12, !1, t.persona_name),
                  children: k(`#BroadcastChat_half_Mute`),
                },
                `updatebanh`,
              ),
              (0, q.jsx)(
                O,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 24, !1, t.persona_name),
                  children: k(`#BroadcastChat_day_Mute`),
                },
                `updateband`,
              ),
              (0, q.jsx)(
                O,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 168, !1, t.persona_name),
                  children: k(`#BroadcastChat_week_Mute`),
                },
                `updatebanw`,
              ),
              (0, q.jsx)(
                O,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 0, !0, t.persona_name),
                  children: k(`#BroadcastChat_perm_Mute`),
                },
                `updatebanp`,
              ),
              (0, q.jsx)(
                O,
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
                  children: k(`#BroadcastChat_Unmute`),
                },
                `removeban`,
              ),
            )
          : n.IsUserMutedLocally(t.steamid)
            ? r.push(
                (0, q.jsx)(
                  O,
                  {
                    onSelected: () =>
                      n.UnmuteUserForSession(t.steamid, t.persona_name),
                    children: k(`#BroadcastChat_UnmuteLocal`),
                  },
                  `unmuteuser`,
                ),
              )
            : r.push(
                (0, q.jsx)(
                  O,
                  {
                    onSelected: () =>
                      n.MuteUserForSession(t.steamid, t.persona_name),
                    children: k(`#BroadcastChat_MuteLocal`),
                  },
                  `muteuser`,
                ),
              ),
        ((S && S.is_support) || n.IsUserBroadcaster(n.GetUserSteamID())) &&
          t.steamid &&
          (n.BIsUserBroadcastModerator(t.steamid)
            ? r.push(
                (0, q.jsx)(
                  O,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !1,
                        t.persona_name,
                      ),
                    children: k(`#BroadcastChat_Remove_Moderator`),
                  },
                  `removemod`,
                ),
              )
            : r.push(
                (0, q.jsx)(
                  O,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !0,
                        t.persona_name,
                      ),
                    children: k(`#BroadcastChat_Add_Moderator`),
                  },
                  `addmod`,
                ),
              )),
        r.length
          ? ge(
              (0, q.jsxs)(ye, {
                children: [
                  (0, q.jsxs)(`div`, {
                    className: Pi,
                    children: [
                      k(`#BroadcastChat_User`),
                      (0, q.jsx)(`br`, {}),
                      (0, q.jsx)(`span`, {
                        className: Fi,
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
      return e.type === P.Notification ? Ei : e.type === P.Error ? Di : Si;
    }
    FormatMessage(e, t) {
      if (e.type === P.Chat) {
        let n = t ? t.FilterText(e.steamid, e.msg) : e.msg;
        return this.AddLinksEmoticons(n, !1);
      }
      return e.msg;
    }
    RenderUserChatLine(e, t, n, r) {
      let i = r?.get(t.steamid),
        a = t.type === P.Chat ? aa(t.steamid, e, i) : ``;
      return (0, q.jsxs)(
        `div`,
        {
          className: this.GetTypeClassName(t),
          onContextMenu: (e) => this.OnContextMenu(e, t),
          children: [
            t.type === P.Chat && (0, q.jsx)(sa, { userType: a }),
            t.flair &&
              (0, q.jsx)(`span`, {
                className: `xDmEH9mDo3o-`,
                children: this.AddLinksEmoticons(t.flair, !1),
              }),
            t.type === P.Chat &&
              (0, q.jsx)(oa, { userType: a, msg: t, presenterInfo: i }),
            t.type === P.Chat &&
              e.GetBroadcastSteamID() === t.steamid &&
              (0, q.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${k(`#BroadcastChat_Broadcaster`)})`,
              }),
            t.type === P.Chat &&
              e.m_mapChannelModeratorUsers.get(t.steamid) &&
              (0, q.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${k(`#BroadcastChat_Moderator`)})`,
              }),
            (0, q.jsxs)(`span`, {
              className: `${wi} ${this.AddLinksEmoticons(t.msg, !1).filter((e) => e && typeof e == `string`).length ? `` : Ti}`,
              children: [
                t.type === P.Chat ? ` : ` : ``,
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
          bPartnerMemberOnlyChat: n,
          bInvertLayout: r,
          onSignIn: i,
        } = this.props,
        a = this.m_chat,
        o = a ? a.m_rgChatMessages : [],
        s = r ? o.reverse() : o,
        c = this.m_chat
          ? ui.GetPresenterMapForBroadcasterSteamID(
              this.m_chat.GetBroadcastSteamID(),
            )
          : void 0,
        l = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
      return (0, q.jsxs)(`div`, {
        className: t(bi, `ChatPanel`),
        style: e ? { display: `none` } : void 0,
        children: [
          (0, q.jsx)($i, { latestAnnouncement: l }),
          r &&
            !!this.m_chat &&
            (0, q.jsx)(ca, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: n,
              onSignIn: i,
            }),
          (0, q.jsx)(_i, {}),
          (0, q.jsx)(`div`, {
            className: t(`${xi} ${dt}`, `ChatMessages`),
            onScroll: this.HandleScroll,
            ref: this.messagesContainer,
            children: a && s.map((e, t) => this.RenderUserChatLine(a, e, t, c)),
          }),
          (0, q.jsx)(vi, {}),
          !r &&
            !!this.m_chat &&
            (0, q.jsx)(ca, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: n,
              onSignIn: i,
            }),
        ],
      });
    }
  };
(y([f], X.prototype, `m_chat`, void 0),
  y([E], X.prototype, `StartChat`, null),
  y([E], X.prototype, `HandleScroll`, null),
  y([E], X.prototype, `OnContextMenu`, null),
  y([E], X.prototype, `RenderUserChatLine`, null),
  (X = y([j], X)));
function ca(e) {
  let {
    oChat: t,
    emoticonStore: n,
    bPartnerMemberOnlyChat: r,
    onSignIn: i,
  } = e;
  return r && (!S?.logged_in || !S?.is_partner_member)
    ? (0, q.jsx)(pa, {})
    : S?.logged_in
      ? (0, q.jsx)(la, { oChat: t, emoticonStore: n })
      : i
        ? (0, q.jsx)(fa, { onSignIn: i })
        : null;
}
function la(e) {
  let { oChat: n, emoticonStore: r } = e,
    [i, a] = L.useState(``),
    o = L.useRef(null),
    s = M(() => n.m_bRateLimited),
    c = L.useCallback(
      (e) => {
        !e.shiftKey &&
          e.charCode === 13 &&
          (n.m_bRateLimited || (n.SendMessage(i), a(``)), e.preventDefault());
      },
      [n, i],
    ),
    l = L.useCallback(
      (e, t = !1) => {
        (a(i + `\u02D0${e}\u02D0`), o?.current && o.current.focus());
      },
      [i, o],
    ),
    u = () => {
      (n.SendMessage(i), a(``));
    },
    d = s || i.trim().length == 0,
    f = t(ut, i.length == 0 && `_4X5-n9MaD8g-`);
  return (0, q.jsx)(`div`, {
    className: t(void 0, `ChatEntryCtn`),
    children: (0, q.jsxs)(`div`, {
      className: t(yi, `ChatEntry`),
      children: [
        (0, q.jsxs)(`form`, {
          className: `${pt}`,
          children: [
            (0, q.jsx)(`textarea`, {
              className: gt,
              placeholder: k(`#BroadcastChat_EnterResponse`),
              onKeyPress: c,
              onChange: (e) => a(e.target.value),
              value: i,
              ref: o,
            }),
            s &&
              (0, q.jsx)(da, {
                nSeconds: n.m_nRateLimitSeconds,
                bRateLimited: n.m_bRateLimited,
              }),
            (0, q.jsx)(`button`, {
              className: f,
              title: k(`#ChatEntryButton_Submit`),
              disabled: d,
              onClick: u,
              children: (0, q.jsx)(_e, {}),
            }),
          ],
        }),
        (0, q.jsx)(`div`, {
          style: { height: `50px` },
          className: `${ht}`,
          children: (0, q.jsxs)(`div`, {
            className: vt,
            children: [
              (0, q.jsx)(yt, {
                disabled: !1,
                OnEmoticonSelected: l,
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: r,
              }),
              (0, q.jsx)(ua, { ...e, textInputRef: o }),
            ],
          }),
        }),
      ],
    }),
  });
}
function ua(e) {
  let { oChat: t, emoticonStore: n, textInputRef: r } = e;
  return t.m_strFlairGroupID &&
    n.flair_list &&
    n.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
    ? (0, q.jsx)(yt, {
        disabled: !1,
        OnEmoticonSelected: (e) => {
          (t.UpdateChatMessageFlair(e), r?.current && r.current.focus());
        },
        rtLastAckedNewEmoticons: Number.MAX_VALUE,
        emoticonStore: n,
        strFlairGroupID: t.m_strFlairGroupID,
        title: k(`#ChatEntryButton_Flair`),
        buttonIcon: (0, q.jsx)(je, {}),
      })
    : null;
}
var da = class extends L.Component {
  render() {
    return (0, q.jsx)(`div`, {
      className: Oi,
      children: (0, q.jsxs)(`div`, {
        className: ki,
        children: [
          (0, q.jsx)(`div`, {
            className: `${ji} ${Ai}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, q.jsx)(`div`, {
            className: `${Mi} ${Ai}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, q.jsx)(`div`, {
            className: Ni,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
        ],
      }),
    });
  }
};
function fa(e) {
  return (0, q.jsx)(`div`, {
    className: Li,
    children: (0, q.jsx)(xe, {
      onClick: e.onSignIn,
      className: t(zi),
      children: k(`#BroadcastChat_Login`),
    }),
  });
}
function pa(e) {
  return (0, q.jsxs)(`div`, {
    className: Li,
    children: [
      (0, q.jsx)(`div`, {
        className: Ri,
        children: k(`#Broadcast_PartnerChat_Login`),
      }),
      !S.logged_in &&
        !b.IN_STEAMUI &&
        (0, q.jsx)(xe, {
          onClick: fi,
          className: t(`h1DcT5FSiVw-`),
          children: k(`#Login_SignIn`),
        }),
    ],
  });
}
var ma = `_7FIE12jcFio-`,
  ha = `l3NO7dsjryo-`,
  ga = `gxhjub7-6JQ-`,
  _a = j((e) => {
    let { appid: n } = e,
      r = He(),
      i = (0, L.useRef)({ include_assets: !0, include_release: !0 }),
      a = We(n),
      { data: o } = Fe(a),
      { data: s } = Pe(a),
      { data: c } = Ie(a),
      [l, u] = Gt(n, i.current),
      d = t(ma, `StoreSaleWidgetContainer_mini`),
      f = ha,
      p = ga;
    if (o == null)
      return (0, q.jsx)(`div`, {
        className: d,
        children: (0, q.jsx)(at, { size: `medium` }),
      });
    if (o == null || !o.name) return (0, q.jsx)(`div`, { className: void 0 });
    let m = o.type != 8,
      h = ot(Le(o), r);
    return (0, q.jsxs)(`div`, {
      className: d,
      children: [
        (0, q.jsx)(`a`, {
          href: h,
          target: b.IN_CLIENT ? void 0 : `_blank`,
          children: (0, q.jsx)(Ot, {
            id: a,
            children: (0, q.jsx)(`div`, {
              className: f,
              children:
                s &&
                (0, q.jsx)(`img`, {
                  className: p,
                  src: Re(s, `small_capsule`),
                  alt: o.name,
                }),
            }),
          }),
        }),
        (0, q.jsxs)(`div`, {
          className: Be,
          children: [
            (0, q.jsx)(`a`, {
              href: h,
              target: b.IN_CLIENT ? void 0 : `_blank`,
              children: (0, q.jsx)(Ot, {
                id: a,
                children: (0, q.jsx)(`div`, {
                  className: t(Ve, `StoreSaleWidgetTitle`),
                  children: o.name,
                }),
              }),
            }),
            c &&
              (0, q.jsx)(`div`, { className: `A8oyzoRvWQ8-`, children: ze(c) }),
            !!m && (0, q.jsx)(Ue, { id: a, bShowDemoButton: !0 }),
          ],
        }),
      ],
    });
  });
function va() {
  let e = window.GetUsabilityTracker;
  if (e) return e();
}
var ya = !1;
function ba(e) {
  return !!(e && e.thumbnail_http_address);
}
var Z = class t {
  constructor() {
    w(this);
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
    return t ? t.filter((e) => ba(e)).length : 0;
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
        ? new D(e.steamid)
        : D.InitFromAccountID(e.accountid, b.EUNIVERSE)),
      b.COMMUNITY_BASE_URL + `broadcast/watch/` + t.ConvertTo64BitString()
    );
  }
  BIsAppStreaming(e) {
    let t = !1;
    return (
      this.m_lookupStreams.forEach((n) => {
        t ||=
          !!n &&
          n.some((t) => F.GetOrCreateBroadcastInfo(t.steamid).m_nAppID === e);
      }),
      t
    );
  }
  GetStreamsForAppID(e) {
    let t = [];
    return (
      this.m_lookupStreams.forEach((n) => {
        n?.forEach((n) => {
          F.GetOrCreateBroadcastInfo(n.steamid).m_nAppID === e && t.push(n);
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
      let t = te(`broadcastuser`, `application_config`);
      if (!t)
        try {
          let n =
            b.STORE_BASE_URL + `broadcast/ajaxgetuserbroadcastpreferences`;
          t = (await R.default.get(n, { params: {}, cancelToken: e.token }))
            .data;
        } catch (e) {
          (console.log(`LoadBIsEmbeddedBroadcastHidden: ` + it(e).strErrorMsg),
            (t = { bHideStoreBroadcast: !1 }));
        }
      p(() => {
        ((this.m_bUserPreferenceHideBroadcastByDefault = t.bHideStoreBroadcast),
          (this.m_bCollapsed = t.bHideStoreBroadcast));
      });
    }
    return this.BIsEmbeddedBroadcastHiddenByDefaultUserSettings();
  }
  async SetupEmbeddableVOD(t, n) {
    ((this.m_bUseFakeData = !1),
      (this.m_streamChatStatus = `remove`),
      e(!!t.nAppIDVOD, `SetupEmbeddableVOD requires a VOD appid`),
      await jt
        .Get()
        .QueueAppRequest(t.nAppIDVOD, {
          include_assets: !0,
          include_trailers: !0,
        }));
    let r = jt.Get().GetApp(t.nAppIDVOD),
      i = new Ze();
    ((i.accountid = 0),
      (i.nAppIDVOD = t.nAppIDVOD),
      (i.default_selection_priority = I.k_ePrimary),
      (i.current_selection_priority = I.k_ePrimary),
      (i.thumbnail_http_address = r?.GetAssets()?.GetHeaderURL() || ``),
      (i.title = r?.GetName() || ``));
    let a = this.GetStreams(t);
    if (
      (e(
        !!a,
        `SetupEmbeddableVOD called before the streams loaded`,
        t.nAppIDVOD,
      ),
      a.unshift(i),
      n)
    ) {
      let e = this.GetStreamsLookupKeyFromDef(t);
      this.m_playReadyStream.set(e, i);
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
      let n = await R.default.get(
        b.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpreview`,
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
    let n = te(`broadcast_available_for_page`, `application_config`);
    if (Je(n)) return this.HandleHintLoadBroadcastResponse(e, n);
    try {
      let n = await R.default.get(
        b.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpage`,
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
  async HandleHintLoadBroadcastResponse(t, n) {
    ((this.m_bUseFakeData = !1),
      t.bIsPreview &&
        (n?.filtered?.length > 0
          ? (e(!!t.event, `Broadcast preview requires an event`),
            this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
              t.event,
              n.filtered,
            ))
          : ((n = {
              filtered: [{}],
              success: 1,
              total_count: 1,
              err_msg: ``,
              broadcast_chat_visibility: `hide`,
            }),
            (this.m_bUseFakeData = !0))),
      n.broadcast_chat_visibility &&
        (this.m_pageChatStatus = n.broadcast_chat_visibility));
    let r = [];
    p(() => {
      n.filtered.forEach((e) => {
        e.steamid ||= D.InitFromAccountID(
          e.accountid,
          b.EUNIVERSE,
        ).ConvertTo64BitString();
        let t = F.GetOrCreateBroadcastInfo(e.steamid),
          n = e.appid ? Number(e.appid) : 7;
        ((t.m_nAppID = n),
          (t.m_strAppId = `` + n),
          e.current_selection_priority === void 0 &&
            (e.current_selection_priority = e.default_selection_priority),
          n != 7 && r.push(n));
      });
    });
    let i = this.GetStreamsLookupKeyFromDef(t);
    if (
      (this.m_lookupStreams.set(i, n.filtered), this.m_onLoadContextCall.has(i))
    ) {
      let e = this.m_onLoadContextCall.get(i);
      e && e.fnCallback();
    }
    let a = this.GetStreams(t) ?? [];
    return (await this.AutoStartVideoStream(t, a), a);
  }
  ExtractBroadcastPrioritiesFromPartnerEventForPreview(e, t) {
    let n = Array.from(e.jsondata.broadcast_whitelist ?? []),
      r = Array.from(e.jsondata.broadcast_priority ?? []),
      i = new Map();
    for (let e = 0; e < n.length && !(e >= r.length); e++)
      i.set(n[e], qe(r[e]));
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
          default_selection_priority: I.k_eGeneral,
          current_selection_priority: I.k_eGeneral,
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
        let r = F.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
        Sa(r, 1, t.snr);
      } else return null;
    }
    return t;
  }
  async InternalAttemptToPlayStream(e, t) {
    this.GetStreamsLookupKeyFromDef(e);
    try {
      let e = b.STORE_BASE_URL + `broadcast/ajaxcheckbroadcast`,
        n = {
          broadcastaccountid: t.accountid,
          viewer_token: F.GetViewerToken(),
          origin: self.origin,
        };
      return (await R.default.get(e, { params: n })).data;
    } catch (e) {
      let t = it(e);
      console.error(`Broadcast.AttemptToPlayStream: ` + t.strErrorMsg, t);
    }
    return null;
  }
  GetAutoStartStream(e) {
    if (!e) return null;
    let t = e.filter((e) => ba(e)),
      n = t.reduce((e, t) => Math.max(e, Q(t)), 0),
      r = t.filter((e) => Q(e) === n);
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
      test: ya,
      cc: b.COUNTRY,
      l: b.LANGUAGE,
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
      t.s_GlobalStore || ((t.s_GlobalStore = new t()), t.s_GlobalStore.Init()),
      t.s_GlobalStore
    );
  }
  Init() {}
};
(y([f], Z.prototype, `m_lookupStreams`, void 0),
  y([f], Z.prototype, `m_playReadyStream`, void 0),
  y([f], Z.prototype, `m_pageChatStatus`, void 0),
  y([f], Z.prototype, `m_streamChatStatus`, void 0),
  y([f], Z.prototype, `m_bUserChatExpanded`, void 0),
  y([f], Z.prototype, `m_bUserPreferenceHideBroadcastByDefault`, void 0),
  y([f], Z.prototype, `m_bCollapsed`, void 0),
  y([v], Z.prototype, `HintLoadEmbeddablePreviewStreams`, null),
  y([v], Z.prototype, `AttemptToPlayStream`, null));
function Q(e) {
  return e.current_selection_priority || I.k_eGeneral;
}
function xa(e) {
  e.sort((e, t) =>
    Q(e) == Q(t)
      ? e.viewer_count == t.viewer_count
        ? (t.accountid ?? 0) - (e.accountid ?? 0)
        : (t.viewer_count ?? 0) - (e.viewer_count ?? 0)
      : Q(t) - Q(e),
  );
}
async function Sa(e, t, n) {
  if (e > 0 && e != 7 && n) {
    let r = new URLSearchParams();
    (r.append(`page_action`, `` + t),
      r.append(`snr`, n),
      R.default.post(
        b.STORE_BASE_URL + `ajaxreportproductaction/` + e + `/`,
        r,
      ));
  }
}
var Ca = new Ct(),
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
  fo = j((e) => {
    let { event: t } = e,
      n = t.clanSteamID.GetAccountID(),
      r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
      i = (0, L.useRef)(null),
      [a, o] = (0, L.useState)(t ? wt.GetCreatorHome(t.clanSteamID) : void 0);
    if (
      ((0, L.useEffect)(() => {
        let e = R.default.CancelToken.source();
        return (
          (i.current = e.cancel),
          (async () => {
            let t = D.InitFromClanID(n, b.EUNIVERSE),
              r = await wt.LoadCreatorHome(t, !1, e);
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
        b.COMMUNITY_BASE_URL +
        `gid/` +
        t.jsondata.broadcast_item_drops_details_clan_accountid +
        `/partnerevents/view/` +
        t.jsondata.broadcast_item_drops_details_event_gid,
      c = t.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
    return (0, q.jsx)(`div`, {
      className: Aa,
      children: (0, q.jsxs)(`div`, {
        children: [
          k(
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
            (0, q.jsx)(`a`, {
              href: s,
              target: b.IN_CLIENT ? `` : `_blank`,
              children: k(`#SalePage_WatchForDrop_LearnMore`),
            }),
        ],
      }),
    });
  });
function po(e) {
  let { steamid: t, closeModal: n } = e;
  return (0, q.jsxs)(Me, {
    strDescription: ``,
    strTitle: k(`#Button_Share`),
    onCancel: n,
    onOK: n,
    bAlertDialog: !0,
    modalClassName: `EventDisplay_Share_Dialog`,
    children: [(0, q.jsx)(mo, { steamid: t }), (0, q.jsx)(ho, { steamid: t })],
  });
}
function mo(e) {
  let { steamid: n } = e,
    r = go(n);
  return (0, q.jsxs)(`div`, {
    className: t(ct, It),
    children: [
      (0, q.jsx)(A, {
        toolTipContent: k(`#EventDisplay_Share_OnFaceBook`),
        children: (0, q.jsx)(Ce, {
          href: r.strFacebookUrl,
          className: Rt,
          children: (0, q.jsx)(`img`, { className: t(lt), src: qt }),
        }),
      }),
      (0, q.jsx)(A, {
        toolTipContent: k(`#EventDisplay_Share_OnTwitter`),
        children: (0, q.jsx)(Ce, {
          href: r.strTwitterUrl,
          className: Rt,
          children: (0, q.jsx)(`img`, { className: t(lt), src: Jt }),
        }),
      }),
      (0, q.jsx)(A, {
        toolTipContent: k(`#EventDisplay_Share_OnReddit`),
        children: (0, q.jsx)(Ce, {
          href: r.strRedditUrl,
          className: Rt,
          children: (0, q.jsx)(`img`, { className: t(lt), src: Kt }),
        }),
      }),
    ],
  });
}
function ho(e) {
  let { steamid: n } = e,
    r = L.createRef(),
    [i, a] = L.useState(``),
    o = L.createRef(),
    s = L.useCallback(
      (e) => {
        r.current &&
          r.current.ownerDocument.defaultView?.navigator.clipboard
            .writeText(r.current.value)
            .then((e) => {
              a(k(`#EventDisplay_Share_CopiedToClipboard`));
            })
            .catch((e) => {
              (a(k(`#EventDisplay_Share_FailedToCopyToClipboard`)),
                console.error(`Failed to copy link to clipboard:`, e));
            });
      },
      [r],
    ),
    c = b.COMMUNITY_BASE_URL + `broadcast/watch/` + n;
  return (0, q.jsxs)(`div`, {
    children: [
      (0, q.jsxs)(`div`, {
        className: t(ct, Nt),
        onClick: s,
        children: [
          (0, q.jsx)(`span`, {
            className: Ft,
            children: k(`#EventDisplay_Share_Link`),
          }),
          (0, q.jsx)(`textarea`, {
            className: Pt,
            ref: r,
            value: c,
            readOnly: !0,
          }),
          !!document.queryCommandSupported(`copy`) &&
            (0, q.jsx)(A, {
              toolTipContent: k(`#ToolTip_CopyLinkToClipboard`),
              children: (0, q.jsx)(`div`, {
                className: t(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `_6y4EcbHPzTE-`),
                children: (0, q.jsx)(`img`, {
                  className: `SGi7-TqE4Rs-`,
                  src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%201801.5%201400%201409'%20enable-background='new%200%201801.5%201400%201409'%20xml:space='preserve'%3e%3cpath%20id='iconmonstr-link-1_1_'%20fill='%23FFFFFF'%20d='M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0%20c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294%20c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280%20c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941%20c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z%20M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0%20c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0%20c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647%20c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059%20S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z'/%3e%3c/svg%3e`,
                }),
              }),
            }),
        ],
      }),
      (0, q.jsx)(`div`, { ref: o, className: Lt, children: i }),
    ],
  });
}
function go(e) {
  let t = b.COMMUNITY_BASE_URL + `broadcast/share/` + e;
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
  let e = d();
  return !a() && !e;
}
function yo(e) {
  return vo() ? (0, q.jsx)($, { ...e }) : null;
}
var $ = class extends L.Component {
  m_cancelSignal = R.default.CancelToken.source();
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
    (await Z.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
      this.m_cancelSignal.token.reason ||
        this.setState({
          bLoadingPreference: !1,
          bExpanded: !Z.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
          innerStyle: {
            ...this.state.innerStyle,
            maxHeight: Z.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
              ? `0vh`
              : `100vh`,
          },
        }),
      await (this.props.bIsPreview &&
      this.props.accountIDs &&
      !this.props.event?.BUsesContentHubForItemSource()
        ? Z.Get().HintLoadEmbeddablePreviewStreams(this.props)
        : Z.Get().HintLoadEmbeddableStreams(this.props)),
      this.props.nAppIDVOD &&
        Z.Get().SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
      window.setTimeout(() => {
        this.m_cancelSignal.token.reason ||
          this.setState({ style: { ...this.state.style, maxHeight: `100vh` } });
      }, 10));
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`BroadcastEmbeddable component unmounted`);
  }
  ToggleBroadcastExpandShrink() {
    let e = Z.Get().GetPlayReadyStream(this.props);
    if (!e) return;
    let t = this.state.bExpanded,
      n = F.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
    (Sa(n, t ? 2 : 3, e.snr),
      t && va()?.AddEvent(nn),
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
          Z.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
        ));
  }
  OnShrinkTransitionEnd() {
    this.state.innerStyle.maxHeight === `0vh` &&
      this.setState({ bExpanded: !1 }, () =>
        Z.Get().SetEmbeddedStreamCollapsed(!0),
      );
  }
  async onStreamSelect(e) {
    (this.setState({ bStartMuted: !1 }),
      Z.Get().GetPlayReadyStream(this.props)?.accountid != e.accountid &&
        (await Z.Get().AttemptToPlayStream(this.props, e)));
  }
  async PlayNextNonVOD() {
    this.setState({ bStartMuted: !1 });
    let e = (Z.Get().GetStreams(this.props) ?? []).filter(
      (e) => !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
    );
    await Z.Get().PlayFromAvailableStreams(this.props, e, !0);
  }
  ConstructSidePanels(e, t) {
    let n = { bRightPanelArtworkOrEmpty: !0 };
    if (this.props.bWidePlayer) return n;
    let r = Z.Get().GetConcurrentStreams(this.props) > 1,
      i = F.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
      a = (0, q.jsx)(Co, { ImgUrl: e.right_panel }, `right` + i),
      o = (0, q.jsx)(Co, { ImgUrl: e.left_panel }, `left` + i);
    if (i < 11) {
      let t = e.steamid
        ? ui.GetAppIDListForBroadcasterSteamID(e.steamid)
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
        ((a = (0, q.jsx)(_a, { appid: i }, `mini` + e.accountid)),
        (n.bRightPanelArtworkOrEmpty = !1)),
      r && !t
        ? ((n.leftPanel = (0, q.jsx)(
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
          ? ((n.leftPanel = (0, q.jsx)(`div`, {})),
            (n.rightPanel = (0, q.jsx)(ko, {
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
      ((this.m_bMarkedUsabilitySeen = !0), va()?.AddEvent(tn));
  }
  render() {
    if (this.state.bLoadingPreference) return null;
    let e = Z.Get().GetPlayReadyStream(this.props);
    if (e) {
      this.MarkBroadcastSeen();
      let n = Z.Get().GetChatVisibility() === `show`,
        { event: r, language: i, fnRenderBroadcastContext: a } = this.props,
        o = r
          ? {
              ...e,
              left_panel: r.GetImageURL(`broadcast_left`, i || re(b.LANGUAGE)),
              right_panel: r.GetImageURL(
                `broadcast_right`,
                i || re(b.LANGUAGE),
              ),
              store_title: r.GetBroadcastTitle(i || re(b.LANGUAGE)),
              broadcast_chat_visibility: r.GetBroadcastChatVisibility(),
            }
          : e,
        s = this.ConstructSidePanels(o, n),
        c = o.store_title ? o.store_title : o.title,
        l = Z.Get().GetConcurrentStreams(this.props) > 1,
        u = () => {
          (o.nAppIDVOD && this.PlayNextNonVOD(), this.props.fnOnVideoEnd?.());
        };
      return (0, q.jsx)(L.Fragment, {
        children: (0, q.jsxs)(`div`, {
          className: `broadcast_embed_top_ctn_trgt`,
          style: this.state.style,
          children: [
            (0, q.jsxs)(`div`, {
              className: t({ [Ea]: !0, [ka]: !!r, broadcast_brd_ctn_trgt: !0 }),
              children: [
                (0, q.jsxs)(`div`, {
                  className: t(ja, `bordered_title_trgt`),
                  children: [
                    (0, q.jsx)(Xe, {}),
                    (0, q.jsx)(`div`, { className: Ma, children: c }),
                    (0, q.jsxs)(`div`, {
                      className: Na,
                      children: [
                        !this.state.bExpanded &&
                          (0, q.jsx)(A, {
                            toolTipContent: k(
                              `#StoreBroadcast_Change_store_Broadcast_settings`,
                            ),
                            children: (0, q.jsx)(`div`, {
                              className: `Ku3ORKocBrQ-`,
                              onClick: () =>
                                window.open(
                                  `${b.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                ),
                            }),
                          }),
                        (0, q.jsx)(A, {
                          toolTipContent: k(`#StoreBroadcast_Hide_Tooltip`),
                          children: (0, q.jsx)(`div`, {
                            className: this.state.bExpanded ? Pa : Fa,
                            onClick: this.ToggleBroadcastExpandShrink,
                          }),
                        }),
                      ],
                    }),
                    !!o.gamedata_subtitle &&
                      (0, q.jsx)(`div`, {
                        className: `WdbOLmmaXso-`,
                        children: o.gamedata_subtitle,
                      }),
                  ],
                }),
                !!this.state.bExpanded &&
                  (0, q.jsxs)(`div`, {
                    className: t({
                      "lOf3hlirldE-": !0,
                      embeddable_ctn_trgt: !0,
                      multistream: l,
                      broadcast_right_panel_simple: s.bRightPanelArtworkOrEmpty,
                      broadcast_chat_expanded: n,
                    }),
                    style: { ...this.state.innerStyle },
                    onTransitionEnd: this.OnShrinkTransitionEnd,
                    children: [
                      (0, q.jsx)(`div`, {
                        className: `HEBZJhZ641A-`,
                        children: s.leftPanel,
                      }),
                      (0, q.jsx)(bo, {
                        stream: o,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: a,
                        fnOnVideoEnd: u,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      (0, q.jsx)(`div`, {
                        className: `UHu5FWxee0A-`,
                        children: s.rightPanel,
                      }),
                      !!this.state.bExpanded &&
                        (0, q.jsx)(So, {
                          stream: o,
                          bMultistream: l,
                          chatAnnouncementGivewayGID: s.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ],
                  }),
              ],
            }),
            !!r &&
              !!(r.jsondata && r.jsondata.broadcast_item_drops_enabled) &&
              (0, q.jsx)(fo, { event: r }),
            (0, q.jsx)(`div`, { className: ro }),
          ],
        }),
      });
    }
    return (0, q.jsx)(`div`, { className: `NoBroadcastAvailable` });
  }
};
(y([E], $.prototype, `ToggleBroadcastExpandShrink`, null),
  y([E], $.prototype, `OnShrinkTransitionEnd`, null),
  y([E], $.prototype, `onStreamSelect`, null),
  y([E], $.prototype, `PlayNextNonVOD`, null),
  ($ = y([j], $)));
var bo = class extends L.Component {
  m_iVideoContainerRef = L.createRef();
  constructor(e) {
    (super(e),
      (this.state = {
        bPopout: !1,
        bPreventPopup: window.screen.width <= 768,
      }));
  }
  CloseBroadcastPopup() {
    let e = F.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (Sa(e, 7, this.props.stream.snr),
      va()?.AddEvent(rn),
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
    return (0, q.jsx)(`div`, {
      className: La,
      children: (0, q.jsx)(mt, {
        onEnter: this.OnEnter,
        onLeave: this.OnLeave,
        onIntersectionChange: (e) => {
          e.isIntersecting || this.OnLeave();
        },
        className: t({
          [Ra]: !0,
          video_placeholder_trgt: !0,
          [Da]: this.props.bWidePlayer,
        }),
        ref: this.m_iVideoContainerRef,
        children: (0, q.jsxs)(`div`, {
          className: this.state.bPopout ? io : za,
          children: [
            this.state.bPopout &&
              (0, q.jsx)(wo, {
                steamIDBroadcast: this.props.stream.steamid,
                OnPreventPopup: this.CloseBroadcastPopup,
              }),
            (0, q.jsx)(`div`, {
              className: co,
              children: (0, q.jsx)(Ge, {
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
(y([E], bo.prototype, `CloseBroadcastPopup`, null),
  y([E], bo.prototype, `OnEnter`, null),
  y([E], bo.prototype, `OnLeave`, null));
function xo(e) {
  let { stream: t } = e,
    [n] = M(() => [t.steamid]),
    r = F.GetOrCreateBroadcastInfo(n).m_nAppID,
    i = _o.list.find(
      (e) =>
        e.appid == r &&
        (!e.broadcasterAccountID || e.broadcasterAccountID == t.accountid),
    );
  if (i) {
    let e = i.url;
    return (
      (b.IN_CLIENT ||
        navigator.userAgent.indexOf(`Valve Steam Client`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam GameOverlay`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam Tenfoot`) >= 0) &&
        (e = `steam://openurl/` + e),
      (0, q.jsx)(`a`, {
        href: e,
        children: k(`#Broadcast_Embed_Watch_With_Frieds_SteamTV`),
      })
    );
  }
  {
    let e = b.COMMUNITY_BASE_URL + `broadcast/watch/` + n;
    return (0, q.jsx)(A, {
      toolTipContent: k(`#BroadcastWatch_View_Broadcast_Page`),
      children: (0, q.jsx)(`a`, {
        href: e,
        className: Ua,
        children: (0, q.jsx)(be, {}),
      }),
    });
  }
}
var So = class extends L.Component {
  OnToggleChat(e) {
    e.preventDefault();
    let t = F.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    (Sa(
      t,
      Z.Get().GetChatVisibility() === `show` ? 5 : 4,
      this.props.stream.snr,
    ),
      Z.Get().ToggleChatVisibility());
  }
  onWatchBroadcastPage() {
    let e = F.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    Sa(e, 9, this.props.stream.snr);
  }
  render() {
    let e = Z.Get().GetChatVisibility() != `remove`,
      n = Z.Get().GetChatVisibility() === `hide`,
      r = !this.props.stream.nAppIDVOD,
      i = r,
      a = Number.parseInt(
        `` +
          F.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nViewerCount,
      );
    return (0, q.jsxs)(`div`, {
      className: t(Ba, `viewer_bar`),
      children: [
        (0, q.jsxs)(`div`, {
          className: t(Wa, `viewer_count`),
          children: [(0, q.jsx)(he, {}), St(a)],
        }),
        (0, q.jsxs)(`div`, {
          className: t(Va, `viewer_links`),
          children: [
            !!(e && !n && this.props.bMultistream) &&
              (0, q.jsx)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: (0, q.jsx)(`a`, {
                  href: `#`,
                  className: void 0,
                  onClick: this.OnToggleChat,
                  children: k(`#sale_three_section_show_streams`),
                }),
              }),
            e &&
              (0, q.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, q.jsx)(Oe, {}),
                  (0, q.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: this.OnToggleChat,
                    children: k(
                      n
                        ? `#sale_three_section_show_chat`
                        : `#sale_three_section_hide_chat`,
                    ),
                  }),
                ],
              }),
            i &&
              (0, q.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, q.jsx)(ve, {}),
                  (0, q.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: (e) => {
                      let t = fe(e);
                      t &&
                        ke(
                          (0, q.jsx)(po, {
                            steamid: this.props.stream.steamid ?? ``,
                          }),
                          t,
                        );
                    },
                    children: k(`#Broadcast_ShareBroadcast`),
                  }),
                ],
              }),
            (0, q.jsx)(A, {
              toolTipContent: k(
                `#StoreBroadcast_Change_store_Broadcast_settings`,
              ),
              children: (0, q.jsx)(`a`, {
                href:
                  b.STORE_BASE_URL +
                  `account/preferences/#store_broadcast_settings`,
                target: b.IN_CLIENT ? void 0 : `_blank`,
                className: Ha,
                children: (0, q.jsx)(Se, {}),
              }),
            }),
            r && (0, q.jsx)(xo, { ...this.props }),
          ],
        }),
        !!this.props.chatAnnouncementGivewayGID &&
          (0, q.jsx)(na, {
            gidGiveaway: this.props.chatAnnouncementGivewayGID,
            stream: this.props.stream,
          }),
      ],
    });
  }
};
(y([E], So.prototype, `OnToggleChat`, null),
  y([E], So.prototype, `onWatchBroadcastPage`, null),
  (So = y([j], So)));
var Co = class extends L.Component {
    render() {
      let e = this.props.ImgUrl;
      return (0, q.jsxs)(`div`, {
        className: uo,
        children: [
          e &&
            (0, q.jsx)(`img`, {
              className: `KkgW9CzRVMI-`,
              src: this.props.ImgUrl,
            }),
          !e && (0, q.jsx)(`div`, { className: `KkgW9CzRVMI-` }),
        ],
      });
    }
  },
  wo = j((e) => {
    let { steamIDBroadcast: t } = e,
      n = F.GetOrCreateBroadcastInfo(t).m_nAppID;
    n = n == 7 ? 0 : n;
    let r = We(n),
      { data: i } = Fe(r);
    return (0, q.jsxs)(`div`, {
      className: [ao, void 0].join(` `),
      children: [
        i
          ? (0, q.jsx)(kt, {
              id: r,
              className: oo,
              children: k(`#StoreBroadcast_Detault_popout_Title`),
            })
          : (0, q.jsx)(`div`, {
              className: oo,
              children: k(`#StoreBroadcast_Detault_popout_Title`),
            }),
        (0, q.jsx)(A, {
          toolTipContent: k(`#StoreBroadcast_close_broadcast_popup`),
          children: (0, q.jsx)(`button`, {
            className: so,
            onClick: e.OnPreventPopup,
            children: (0, q.jsx)(Ae, {}),
          }),
        }),
      ],
    });
  });
function To(e, t) {
  let n = F.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
    r = jt.Get().GetApp(n);
  return e && r?.GetAssets()?.GetHeaderURL() ? parseInt(wa) : parseInt(Ta);
}
function Eo(e) {
  let {
      curStream: n,
      onStreamSelect: r,
      fnFilterStreams: i,
      bShowCapsuleArt: a,
      broadcastEmbedContext: o,
    } = e,
    s = (0, L.useRef)(null),
    c = (0, L.useMemo)(() => {
      let e = (Z.Get().GetStreams(o) ?? []).filter((e) => !i || i(e));
      return (xa(e), e);
    }, [o, i]);
  return (
    (0, L.useEffect)(() => {
      if (s && s.current) {
        let e = c
          .map((e) => F.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
          .filter(Boolean);
        jt.Get()
          .QueueMultipleAppRequests(e, { include_assets: !0 })
          .then(() => {
            if (s.current) {
              let e = 0;
              for (let t of c) {
                if (n.accountid == t.accountid) break;
                e += To(a, t);
              }
              s.current.scrollTop = e;
            }
          });
      }
    }, [c, a, n.accountid, s]),
    (0, q.jsx)(`div`, {
      ref: s,
      className: t({ [Ia]: !0, side_panels: !0, [eo]: !0, [no]: c.length > 3 }),
      children: (0, q.jsx)(`div`, {
        className: to,
        children: c.map((e) =>
          (0, q.jsx)(
            Do,
            {
              stream: e,
              bSelected: n.accountid == e.accountid,
              onStreamSelect: r,
              bShowCapsuleArt: a,
            },
            e.accountid ?? e.steamid,
          ),
        ),
      }),
    })
  );
}
function Do(e) {
  let { onStreamSelect: n, bSelected: r, stream: i, bShowCapsuleArt: a } = e,
    o = M(() => F.GetOrCreateBroadcastInfo(i.steamid).m_nAppID);
  o = o == 7 ? 0 : o;
  let s = We(o),
    { data: c } = Fe(s),
    { data: l } = Pe(s);
  if (!ba(i)) return null;
  let u = a && l ? Re(l, `header`) : void 0,
    d = Number.parseInt(`` + i.viewer_count),
    f = !Number.isNaN(d),
    p = !!i.nAppIDVOD && c?.name;
  return (0, q.jsxs)(`div`, {
    className: t({
      [Ga]: !0,
      [void 0]: i.current_selection_priority == I.k_eFeatured,
      [Ka]: !!u,
    }),
    children: [
      (0, q.jsx)(Ot, {
        id: s,
        hoverClassName: Ja,
        children: (0, q.jsx)(Ke, {
          className: t(Ya, r && void 0),
          onClick: () => n && n(i),
          rootMargin: `100px 0px 100px 0px`,
          children: (0, q.jsx)(Oo, {
            strThumbnail: i.thumbnail_http_address,
            bSelected: r,
            strCapsuleArtURL: u,
          }),
        }),
      }),
      (0, q.jsx)(`div`, {
        className: t(Wa, !f && `QP7p0y7iNjE-`),
        children: f
          ? (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(he, {}),
                (0, q.jsx)(`div`, { className: qa, children: St(d) }),
              ],
            })
          : p,
      }),
    ],
  });
}
function Oo(e) {
  let { strCapsuleArtURL: n, strThumbnail: r, bSelected: i } = e,
    a = i ? $a : Qa;
  if (n) {
    let e = [n];
    return (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsx)(`img`, { className: t(a, Xa), src: n }),
        (0, q.jsx)(Ye, { className: t(a, Za), srcs: e }),
      ],
    });
  }
  return (0, q.jsx)(`img`, { className: a, src: r });
}
function ko(e) {
  let { stream: n, orientation: r } = e,
    i = r == `below`,
    [a, o] = M(() => {
      let e = n.steamid ? F.GetBroadcast(n.steamid) : void 0;
      return [e, e?.m_ulBroadcastID];
    }),
    s = M(() => n.steamid);
  return a
    ? (0, q.jsx)(`div`, {
        className: t({ [void 0]: i, [void 0]: !i, [Oa]: !0 }),
        children: (0, q.jsx)(`div`, {
          className: lo,
          children: (0, q.jsx)(X, {
            emoticonStore: Ca,
            watchLocation: 6,
            steamID: s,
            broadcastID: o,
          }),
        }),
      })
    : null;
}
export { wo as BroadcastEmbeddablePopoutHeader, yo as default };
