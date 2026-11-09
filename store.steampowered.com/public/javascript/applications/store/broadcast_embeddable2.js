/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
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
} from "./libraries.js";
import { r as u } from "./clanimagemodels.js";
import { n as d, t as f } from "./textfilterstore.js";
import { V as p } from "./storelink.js";
import { Gn as m, Pt as ee, hr as te } from "./saletags.js";
import { t as ne } from "./storeurl.js";
import { n as re } from "./image.js";
import "./modals.js";
import { i as h, o as ie } from "./salestoreitemutils.js";
import { n as ae } from "./salepreviewwidgets.js";
import { t as oe } from "./throbber.js";
import { i as g, v as se } from "./partnereventshared.module.js";
import { o as ce } from "./youtubeplayer.js";
import { i as le, n as ue } from "./presenterpopup.js";
import { n as de } from "./lazyrenderchildren.js";
import { l as fe } from "./creatorhomestore.js";
import { n as _, t as pe } from "./storegamehover.js";
import { n as me } from "./steammessages_experiments_pb.js";
import {
  O as he,
  d as ge,
  f as _e,
  k as ve,
  n as ye,
  p as be,
} from "./discussionwidget.module.js";
import { n as xe } from "./storeitemhooks.js";
import {
  a as Se,
  c as Ce,
  i as we,
  n as Te,
  o as Ee,
  r as De,
  t as Oe,
} from "./emoticonbutton.js";
import { t as ke } from "./reddit_large.js";
import {
  $x as v,
  Ar as y,
  Au as Ae,
  Cy as je,
  Dr as Me,
  En as Ne,
  Ga as Pe,
  Ib as Fe,
  Iv as Ie,
  Iy as Le,
  Js as Re,
  Jy as ze,
  Ka as Be,
  Lr as Ve,
  Mb as b,
  Mn as He,
  Nc as Ue,
  Ob as We,
  Oy as Ge,
  Qx as x,
  Rr as S,
  Rx as C,
  Sc as w,
  Sy as Ke,
  Ty as qe,
  Uy as T,
  Vl as Je,
  Vu as Ye,
  Wa as Xe,
  Wc as Ze,
  Xx as E,
  Yx as D,
  Za as Qe,
  Zx as O,
  ax as k,
  br as A,
  bt as $e,
  cs as et,
  eS as j,
  fc as tt,
  hu as nt,
  hx as M,
  kr as rt,
  kv as it,
  ls as at,
  mS as ot,
  mu as st,
  mx as N,
  nS as P,
  nr as ct,
  qa as lt,
  qb as ut,
  qx as dt,
  rx as F,
  s as ft,
  tS as I,
  vc as pt,
  wc as mt,
  wv as ht,
  xo as gt,
  xy as _t,
  zb as vt,
} from "./main.js";
import { n as yt, t as bt } from "./twitter_large.js";
import { a as xt, c as St, i as L, o as Ct, s as wt } from "./salebanner.js";
import { a as R, t as z } from "./broadcastwatchstore.js";
import {
  a as B,
  i as Tt,
  l as Et,
  n as V,
  o as Dt,
  s as Ot,
} from "./broadcast_embeddable.js";
import { t as kt } from "./partnereventslogin.js";
import { t as At } from "./giveawaystore.js";
import jt from "./broadcastplayer.js";
var H = e(n()),
  U = e(c()),
  W = e(r(), 1),
  Mt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.unique_name || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  Nt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  Pt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.unique_name || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  Ft = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            unique_name: { n: 2, br: x.readString, bw: P.writeString },
            steamid: {
              n: 3,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  It = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            name: { n: 2, br: x.readString, bw: P.writeString },
            language: { n: 3, br: x.readString, bw: P.writeString },
            headline: { n: 4, br: x.readString, bw: P.writeString },
            summary: { n: 5, br: x.readString, bw: P.writeString },
            avatar_hash: { n: 6, br: x.readString, bw: P.writeString },
            schedule: { n: 7, br: x.readString, bw: P.writeString },
            rules: { n: 8, br: x.readString, bw: P.writeString },
            panels: { n: 9, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
    }
  },
  Lt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  Rt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  zt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.unique_name || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: x.readString, bw: P.writeString },
            owner_steamid: {
              n: 2,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            name: { n: 3, br: x.readString, bw: P.writeString },
            language: { n: 4, br: x.readString, bw: P.writeString },
            headline: { n: 5, br: x.readString, bw: P.writeString },
            summary: { n: 6, br: x.readString, bw: P.writeString },
            schedule: { n: 7, br: x.readString, bw: P.writeString },
            rules: { n: 8, br: x.readString, bw: P.writeString },
            panels: { n: 9, br: x.readString, bw: P.writeString },
            is_partnered: { n: 10, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  Bt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            image_type: { n: 2, br: x.readEnum, bw: P.writeEnum },
            image_index: { n: 3, br: x.readUint32, bw: P.writeUint32 },
            image_width: { n: 4, br: x.readUint32, bw: P.writeUint32 },
            image_height: { n: 5, br: x.readUint32, bw: P.writeUint32 },
            file_size: { n: 6, br: x.readUint32, bw: P.writeUint32 },
            file_extension: { n: 7, br: x.readString, bw: P.writeString },
            file_hash: { n: 8, br: x.readString, bw: P.writeString },
            undo: { n: 9, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  Vt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.replace_image_hash || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            replace_image_hash: { n: 1, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  Ht = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [2], null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            image_types: {
              n: 2,
              r: !0,
              q: !0,
              br: x.readEnum,
              pbr: x.readPackedEnum,
              bw: P.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Request`;
    }
  },
  Ut = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.images || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: Wt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  Wt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.image_type || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_type: { n: 1, br: x.readEnum, bw: P.writeEnum },
            image_path: { n: 2, br: x.readString, bw: P.writeString },
            image_index: { n: 3, br: x.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  Gt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
    }
  },
  Kt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.links || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: qt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  qt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link_index || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: x.readUint32, bw: P.writeUint32 },
            url: { n: 2, br: x.readString, bw: P.writeString },
            link_description: { n: 3, br: x.readString, bw: P.writeString },
            left: { n: 4, br: x.readUint32, bw: P.writeUint32 },
            top: { n: 5, br: x.readUint32, bw: P.writeUint32 },
            width: { n: 6, br: x.readUint32, bw: P.writeUint32 },
            height: { n: 7, br: x.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  Jt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [2], null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            links: { n: 2, c: Yt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  Yt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link_index || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: x.readUint32, bw: P.writeUint32 },
            url: { n: 2, br: x.readString, bw: P.writeString },
            link_description: { n: 3, br: x.readString, bw: P.writeString },
            left: { n: 4, br: x.readUint32, bw: P.writeUint32 },
            top: { n: 5, br: x.readUint32, bw: P.writeUint32 },
            width: { n: 6, br: x.readUint32, bw: P.writeUint32 },
            height: { n: 7, br: x.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
    }
  },
  Xt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  Zt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  Qt = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_live || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_live: { n: 1, br: x.readBool, bw: P.writeBool },
            is_disabled: { n: 2, br: x.readBool, bw: P.writeBool },
            appid: { n: 3, br: x.readUint32, bw: P.writeUint32 },
            viewers: { n: 4, br: x.readUint64String, bw: P.writeUint64String },
            views: { n: 5, br: x.readUint64String, bw: P.writeUint64String },
            broadcaster_steamid: {
              n: 6,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            thumbnail_url: { n: 7, br: x.readString, bw: P.writeString },
            followers: {
              n: 8,
              br: x.readUint64String,
              bw: P.writeUint64String,
            },
            subscribers: {
              n: 9,
              br: x.readUint64String,
              bw: P.writeUint64String,
            },
            unique_name: { n: 10, br: x.readString, bw: P.writeString },
            broadcast_session_id: {
              n: 11,
              br: x.readUint64String,
              bw: P.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  G = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            unique_name: { n: 2, br: x.readString, bw: P.writeString },
            name: { n: 3, br: x.readString, bw: P.writeString },
            appid: { n: 4, br: x.readUint32, bw: P.writeUint32 },
            viewers: { n: 5, br: x.readUint64String, bw: P.writeUint64String },
            views: { n: 6, br: x.readUint64String, bw: P.writeUint64String },
            thumbnail_url: { n: 7, br: x.readString, bw: P.writeString },
            followers: {
              n: 8,
              br: x.readUint64String,
              bw: P.writeUint64String,
            },
            headline: { n: 9, br: x.readString, bw: P.writeString },
            avatar_url: { n: 10, br: x.readString, bw: P.writeString },
            broadcaster_steamid: {
              n: 11,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            subscribers: {
              n: 12,
              br: x.readUint64String,
              bw: P.writeUint64String,
            },
            background_url: { n: 13, br: x.readString, bw: P.writeString },
            is_featured: { n: 14, br: x.readBool, bw: P.writeBool },
            is_disabled: { n: 15, br: x.readBool, bw: P.writeBool },
            is_live: { n: 16, br: x.readBool, bw: P.writeBool },
            language: { n: 17, br: x.readString, bw: P.writeString },
            reports: { n: 18, br: x.readUint32, bw: P.writeUint32 },
            is_partnered: { n: 19, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `GetBroadcastChannelEntry`;
    }
  },
  $t = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Request`;
    }
  },
  en = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Response`;
    }
  },
  tn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Request`;
    }
  },
  nn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  rn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            undo: { n: 2, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  an = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_followed || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_followed: { n: 1, br: x.readBool, bw: P.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  on = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  sn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_subscribed || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_subscribed: { n: 1, br: x.readBool, bw: P.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  cn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            reason: { n: 2, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Request`;
    }
  },
  ln = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  un = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  dn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_followed || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_followed: { n: 1, br: x.readBool, bw: P.writeBool },
            is_subscribed: { n: 2, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  fn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: x.readUint32, bw: P.writeUint32 },
            name: { n: 2, br: x.readString, bw: P.writeString },
            image: { n: 3, br: x.readString, bw: P.writeString },
            viewers: { n: 4, br: x.readUint64String, bw: P.writeUint64String },
            channels: { n: 5, c: G, r: !0, q: !0 },
            release_date: { n: 6, br: x.readString, bw: P.writeString },
            developer: { n: 7, br: x.readString, bw: P.writeString },
            publisher: { n: 8, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_Game`;
    }
  },
  pn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: x.readUint32, bw: P.writeUint32 },
            algorithm: { n: 2, br: x.readEnum, bw: P.writeEnum },
            count: { n: 3, br: x.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetGames_Request`;
    }
  },
  mn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: fn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetGames_Response`;
    }
  },
  hn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.algorithm || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            algorithm: { n: 1, br: x.readEnum, bw: P.writeEnum },
            count: { n: 2, br: x.readUint32, bw: P.writeUint32 },
            appid: { n: 3, br: x.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChannels_Request`;
    }
  },
  gn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChannels_Response`;
    }
  },
  _n = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  vn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasters || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasters: { n: 1, c: yn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
    }
  },
  yn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            name: { n: 2, br: x.readString, bw: P.writeString },
            rtmp_token: { n: 3, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  bn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.issuer_steamid || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            time_expires: { n: 3, br: x.readString, bw: P.writeString },
            permanent: { n: 4, br: x.readBool, bw: P.writeBool },
            name: { n: 5, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ChatBan`;
    }
  },
  xn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            duration: { n: 3, br: x.readUint32, bw: P.writeUint32 },
            permanent: { n: 4, br: x.readBool, bw: P.writeBool },
            undo: { n: 5, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Request`;
    }
  },
  Sn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  Cn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Request`;
    }
  },
  wn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: bn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  Tn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            moderator_steamid: {
              n: 2,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            undo: { n: 3, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Request`;
    }
  },
  En = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  Dn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Request`;
    }
  },
  On = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            name: { n: 2, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ChatModerator`;
    }
  },
  kn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: On, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  An = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            word: { n: 2, br: x.readString, bw: P.writeString },
            undo: { n: 3, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Request`;
    }
  },
  jn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  Mn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Request`;
    }
  },
  Nn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
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
              br: x.readString,
              bw: P.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  Pn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_JoinChat_Request`;
    }
  },
  Fn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.chat_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [3], null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            view_url_template: { n: 2, br: x.readString, bw: P.writeString },
            flair_group_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: x.readUint64String,
              pbr: x.readPackedUint64String,
              bw: P.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_JoinChat_Response`;
    }
  },
  In = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.term || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { term: { n: 1, br: x.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_Search_Request`;
    }
  },
  Ln = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_Search_Response`;
    }
  },
  Rn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  zn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stream_live_email || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: x.readBool, bw: P.writeBool },
            stream_live_notification: { n: 2, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  Bn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stream_live_email || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: x.readBool, bw: P.writeBool },
            stream_live_notification: { n: 2, br: x.readBool, bw: P.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Request`;
    }
  },
  Vn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Response`;
    }
  },
  Hn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Request`;
    }
  },
  Un = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  Wn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasts || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasts: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  Gn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasts || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: G, r: !0, q: !0 },
            appid: { n: 2, br: x.readUint32, bw: P.writeUint32 },
            title: { n: 3, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_SingleGame`;
    }
  },
  Kn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: x.readUint32, bw: P.writeUint32 },
            game_name: { n: 2, br: x.readString, bw: P.writeString },
            broadcast: { n: 3, c: G },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `GameListEntry`;
    }
  },
  qn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.entries || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: Kn, r: !0, q: !0 },
            title: { n: 2, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  Jn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasts || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: G, r: !0, q: !0 },
            title: { n: 2, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  Yn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasts || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: G, r: !0, q: !0 },
            title: { n: 2, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  Xn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: G },
            title: { n: 2, br: x.readString, bw: P.writeString },
            chat_group_id: {
              n: 3,
              br: x.readUint64String,
              bw: P.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  Zn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: G },
            title: { n: 2, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Developer`;
    }
  },
  Qn = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.title || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { title: { n: 1, br: x.readString, bw: P.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  $n = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.template_type || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            template_type: { n: 1, br: x.readEnum, bw: P.writeEnum },
            takeover: { n: 2, c: Wn },
            single_game: { n: 3, c: Gn },
            game_list: { n: 4, c: qn },
            quick_explore: { n: 5, c: Jn },
            conveyor_belt: { n: 6, c: Yn },
            watch_party: { n: 7, c: Xn },
            developer: { n: 8, c: Zn },
            event: { n: 9, c: Qn },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageContentRow`;
    }
  },
  er = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), W.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  tr = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rows || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { rows: { n: 1, c: $n, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  nr = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  rr = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_clip_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: x.readUint64String,
              bw: P.writeUint64String,
            },
            channel_id: {
              n: 2,
              br: x.readUint64String,
              bw: P.writeUint64String,
            },
            app_id: { n: 3, br: x.readUint32, bw: P.writeUint32 },
            broadcaster_steamid: {
              n: 4,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            creator_steamid: {
              n: 5,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            video_description: { n: 6, br: x.readString, bw: P.writeString },
            live_time: { n: 7, br: x.readUint32, bw: P.writeUint32 },
            length_ms: { n: 8, br: x.readUint32, bw: P.writeUint32 },
            thumbnail_path: { n: 9, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  ir = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clips || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clips: { n: 1, c: rr, r: !0, q: !0 },
            thumbnail_host: { n: 2, br: x.readString, bw: P.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  ar = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cheer_type || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cheer_type: { n: 1, br: x.readUint32, bw: P.writeUint32 },
            cheer_amount: { n: 2, br: x.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  or = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.app_id || D(e.M()),
        W.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: x.readUint32, bw: P.writeUint32 },
            cheer_target_id: {
              n: 2,
              br: x.readFixed64String,
              bw: P.writeFixed64String,
            },
            cheers: { n: 3, c: ar, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AppCheer_Request`;
    }
  },
  sr = class e extends W.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.aggregation_delay_ms || D(e.M()),
        W.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            aggregation_delay_ms: { n: 1, br: x.readUint32, bw: P.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= v(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return I(e.M(), t, n);
    }
    static fromObject(t) {
      return O(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new W.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new W.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AppCheer_Response`;
    }
  },
  K;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamTV.CreateBroadcastChannel#1`, M(Mt, t, n), Nt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.CreateBroadcastChannel = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelID#1`, M(Pt, t, n), Ft, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelID = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelProfile#1`, M(It, t, n), Lt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelProfile = r;
  function i(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelProfile#1`, M(Rt, t, n), zt, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelProfile = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelImage#1`, M(Bt, t, n), Vt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelImage = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelImages#1`, M(Ht, t, n), Ut, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelImages = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SteamTV.SetBroadcastChannelLinkRegions#1`,
      M(Jt, t, n),
      Xt,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetBroadcastChannelLinkRegions = s;
  function c(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelLinks#1`, M(Gt, t, n), Kt, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelLinks = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelBroadcasters#1`,
      M(_n, t, n),
      vn,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelBroadcasters = l;
  function u(e, t, n) {
    return e.SendMsg(`SteamTV.GetFollowedChannels#1`, M($t, t, n), en, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetFollowedChannels = u;
  function d(e, t, n) {
    return e.SendMsg(`SteamTV.GetSubscribedChannels#1`, M(tn, t, n), nn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSubscribedChannels = d;
  function f(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelStatus#1`, M(Zt, t, n), Qt, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelStatus = f;
  function p(e, t, n) {
    return e.SendMsg(`SteamTV.FollowBroadcastChannel#1`, M(rn, t, n), an, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.FollowBroadcastChannel = p;
  function m(e, t, n) {
    return e.SendMsg(`SteamTV.SubscribeBroadcastChannel#1`, M(on, t, n), sn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SubscribeBroadcastChannel = m;
  function ee(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelClips#1`, M(nr, t, n), ir, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelClips = ee;
  function te(e, t, n) {
    return e.SendMsg(`SteamTV.ReportBroadcastChannel#1`, M(cn, t, n), ln, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.ReportBroadcastChannel = te;
  function ne(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelInteraction#1`,
      M(un, t, n),
      dn,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelInteraction = ne;
  function re(e, t, n) {
    return e.SendMsg(`SteamTV.GetGames#1`, M(pn, t, n), mn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetGames = re;
  function h(e, t, n) {
    return e.SendMsg(`SteamTV.GetChannels#1`, M(hn, t, n), gn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetChannels = h;
  function ie(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatBan#1`, M(xn, t, n), Sn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatBan = ie;
  function ae(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatBans#1`, M(Cn, t, n), wn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetChatBans = ae;
  function oe(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatModerator#1`, M(Tn, t, n), En, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatModerator = oe;
  function g(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatModerators#1`, M(Dn, t, n), kn, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.GetChatModerators = g;
  function se(e, t, n) {
    return e.SendMsg(`SteamTV.AddWordBan#1`, M(An, t, n), jn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.AddWordBan = se;
  function ce(e, t, n) {
    return e.SendMsg(`SteamTV.GetWordBans#1`, M(Mn, t, n), Nn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetWordBans = ce;
  function le(e, t, n) {
    return e.SendMsg(`SteamTV.JoinChat#1`, M(Pn, t, n), Fn, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.JoinChat = le;
  function ue(e, t, n) {
    return e.SendMsg(`SteamTV.Search#1`, M(In, t, n), Ln, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.Search = ue;
  function de(e, t, n) {
    return e.SendMsg(`SteamTV.GetSteamTVUserSettings#1`, M(Rn, t, n), zn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSteamTVUserSettings = de;
  function fe(e, t, n) {
    return e.SendMsg(`SteamTV.SetSteamTVUserSettings#1`, M(Bn, t, n), Vn, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetSteamTVUserSettings = fe;
  function _(e, t, n) {
    return e.SendMsg(`SteamTV.GetMyBroadcastChannels#1`, M(Hn, t, n), Un, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetMyBroadcastChannels = _;
  function pe(e, t, n) {
    return e.SendMsg(`SteamTV.GetHomePageContents#1`, M(er, t, n), tr, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetHomePageContents = pe;
  function me(e, t, n) {
    return e.SendMsg(`SteamTV.AppCheer#1`, M(or, t, n), sr, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AppCheer = me;
})((K ||= {}));
var cr = 4,
  lr = 500,
  ur = 10,
  q = class e {
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
      return n || ((n = new J()), this.m_mapChats.set(e || t, n)), n;
    }
    static s_Singleton;
    static Get() {
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
    constructor() {
      o(this);
    }
  };
b([t], q.prototype, `m_mapChats`, void 0);
var J = class {
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
    o(this), (this.m_steamInterface = this.CreateSteamInterface());
  }
  InitTextFilter() {
    this.m_textFilterStore = new f({ BIsFriend: d() });
    let e = 0;
    k.steamid !== `` && (e = new Le(k.steamid).GetAccountID()),
      this.m_textFilterStore.Init(e, null, new nt());
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
      (st() ?? q.Get().GetCMInterface()) ||
      qe(new Ge(F.WEBAPI_BASE_URL, k.webapi_token))
    );
  }
  StartForSteamID(e, t) {
    (this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastSteamID = e),
      (this.m_ulBroadcastID = t),
      this.InitTextFilter(),
      this.RequestChatInfo();
  }
  StartForChannel(e) {
    (this.m_steamInterface = this.CreateSteamInterface()),
      (this.m_ulBroadcastChannelID = e),
      (this.m_strUserSteamID = k.steamid),
      this.InitTextFilter(),
      this.JoinChannelChat();
  }
  Stop() {
    this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
  }
  async SendMessage(e) {
    let t = e.trim();
    if (t.length != 0)
      try {
        let e = N.Init(Ct);
        e.SetBodyFields({
          chat_id: this.m_ulChatID,
          message: t,
          instance_id: this.m_unInstanceID.toString(),
        });
        let n = await L.PostChatMessage(
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
          (e =
            r.result == 17
              ? T(`#BroadcastChat_YouMuted`)
              : r.result == 84
                ? T(`#BroadcastChat_Cooldown`, r.cooldown_time_seconds ?? 0)
                : T(`#BroadcastChat_FailedToSendMsg`, t)),
            this.m_rgChatMessages.push({
              type: R.Error,
              msg: e,
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: r.in_game,
              persona_name: r.persona_name,
              steamid: ``,
            });
          return;
        }
        (this.m_nRateLimitSeconds ||= r.cooldown_time_seconds ?? 0),
          this.m_nRateLimitSeconds &&
            ((this.m_bRateLimited = !0),
            setTimeout(
              () => (this.m_bRateLimited = !1),
              this.m_nRateLimitSeconds * 1e3,
            ));
      } catch {
        this.m_rgChatMessages.push({
          type: R.Error,
          msg: T(`#BroadcastChat_FailedToSendMsg`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async RequestChatInfo(e) {
    (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
    try {
      let t = {
          steamid: this.m_ulBroadcastSteamID,
          broadcastid: this.m_ulBroadcastID,
          sessionid: ut(),
          notoken: 1,
        },
        n = await U.default.get(`${F.CHAT_BASE_URL}broadcast/getchatinfo`, {
          params: t,
          withCredentials: !0,
          cancelToken: e?.token,
        });
      (e && e.token.reason) ||
        a(() => {
          let e = n.data;
          (this.m_strChatURL = e.view_url_template ?? ``),
            (this.m_ulChatID = e.chat_id ?? ``),
            (this.m_strFlairGroupID = e.flair_group_ids?.[0] ?? ``),
            e.blocked && console.log(`User is blocked from chat`),
            e.steamid && (this.m_strUserSteamID = e.steamid),
            e.emoticons && this.SetOwnedEmoticons(e.emoticons),
            (this.m_bHasAddedWelcomeChat ||=
              (this.m_rgChatMessages.push({
                type: R.Notification,
                msg: T(`#BroadcastChat_DefaultMessage`),
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
            (this.m_chatScheduledFunc = new We()),
            this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
        });
    } catch (e) {
      console.error(e), console.log(`Failed to get chat info!`);
    }
  }
  async JoinChannelChat() {
    try {
      let e = N.Init(Pn);
      e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
      let t = await K.JoinChat(this.m_steamInterface.GetServiceTransport(), e),
        n = t.Body().view_url_template(),
        r = t.Body().chat_id();
      if (!r || !n) {
        console.log(`Failed to join channel chat`);
        return;
      }
      (this.m_strChatURL = n),
        (this.m_ulChatID = r),
        (this.m_strFlairGroupID =
          t.Body().flair_group_ids() && t.Body().flair_group_ids()[0]),
        this.FetchChatModerators(),
        (this.m_rgChatMessages = []),
        this.m_rgChatMessages.push({
          type: R.Notification,
          msg: T(`#BroadcastChat_DefaultMessage`),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        }),
        (this.m_bHasAddedWelcomeChat = !0),
        (this.m_chatScheduledFunc = new We()),
        this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
    } catch (e) {
      console.error(e), console.log(`Failed to join chat!`);
    }
  }
  async FetchChatModerators() {
    let e = N.Init(Dn);
    e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
    let t = (
        await K.GetChatModerators(
          this.m_steamInterface.GetServiceTransport(),
          e,
        )
      )
        .Body()
        .results(),
      n = new Map();
    t.forEach((e) => {
      let t = e.steamid();
      t && n.set(t, !0);
    }),
      (this.m_mapChannelModeratorUsers = n);
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
      let n = (await U.default.get(t, { params: e })).data;
      this.m_cConsecutiveErrors = 0;
      let r = n.messages
        .map((e) => ({ ...e, type: R.Chat, client_ts: Number(new Date()) }))
        .filter((e) => !this.IsUserMutedLocally(e.steamid));
      this.m_rgChatMessages.push(...r), this.ReplaceChatAnnouncementIfAny(n);
      let i = this.m_bAutoScroll ? 150 : 300;
      if (
        (this.m_rgChatMessages.length > i &&
          this.m_rgChatMessages.splice(0, this.m_rgChatMessages.length - i),
        n.muted)
      )
        for (let e of n.muted) {
          let t =
            e.muted == this.m_strUserSteamID
              ? T(`#BroadcastChat_YouMuted`, e.persona_name)
              : T(`#BroadcastChat_UserMuted`, e.persona_name);
          this.m_rgChatMessages.push({
            type: R.Notification,
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
        (this.m_tsFirstRequest = performance.now() + n.initial_delay),
          (this.m_nFromFirstRequestMS = 0),
          (this.m_nNextChatTS = n.next_request),
          (a = n.initial_delay);
      } else {
        if (n.next_request < this.m_nNextChatTS) {
          console.log(`Next request in past`);
          return;
        }
        (this.m_nFromFirstRequestMS += n.next_request - this.m_nNextChatTS),
          (this.m_nNextChatTS = n.next_request),
          (a =
            this.m_tsFirstRequest +
            this.m_nFromFirstRequestMS -
            performance.now() +
            this.m_nNudgeFactorMS);
      }
      (this.m_bReconnecting &&= !1),
        (this.m_nLastSleepMS = a),
        a < 0 && (a = 0),
        this.m_chatScheduledFunc?.Schedule(a, this.RequestLoop);
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
        (this.m_nNudgeFactorMS += ur),
        this.m_cConsecutiveErrors >= cr)
      ) {
        if (this.m_tsFirstRequest == null) {
          this.m_rgChatMessages.push({
            type: R.Error,
            msg: T(`#BroadcastChat_UnableToJoinChat`),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
          return;
        }
        (this.m_cConsecutiveErrors = 0),
          (this.m_bReconnecting = !0),
          this.SyncChat();
      }
      this.m_chatScheduledFunc?.Schedule(lr, this.RequestLoop);
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
      r.append(`broadcaststeamid`, this.m_ulBroadcastSteamID),
        r.append(`moderatorsteamid`, e),
        r.append(`bAdd`, t ? `1` : `0`),
        r.append(`sessionid`, ut());
      try {
        await U.default.post(
          `${F.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          r,
        ),
          this.m_mapBroadcastModeratorUsers.set(e, t);
        let i = T(
          t
            ? `#BroadcastChat_AddedModerator`
            : `#BroadcastChat_RemovedModerator`,
          n,
        );
        this.m_rgChatMessages.push({ type: R.Notification, msg: i });
      } catch {
        let e = T(
          t
            ? `#BroadcastChat_AddModeratorFailed`
            : `#BroadcastChat_RemoveModeratorFailed`,
          n,
        );
        this.m_rgChatMessages.push({ type: R.Error, msg: e });
      }
    }
  }
  async UpdateUserChatBan(e, t, n, r, i, a) {
    let o = this.m_ulBroadcastSteamID,
      s = this.m_strUserSteamID;
    if (this.m_ulBroadcastChannelID) {
      let t = N.Init(xn);
      t.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: e,
        duration: n * 3600,
        permanent: r,
        undo: a,
      }),
        await K.AddChatBan(this.m_steamInterface.GetServiceTransport(), t);
    } else {
      let a = new FormData();
      a.append(`broadcaststeamid`, o),
        a.append(`issuersteamid`, s),
        a.append(`chattersteamid`, e),
        a.append(`bantype`, t),
        a.append(`duration`, n.toString()),
        a.append(`perm`, r ? `1` : `0`),
        a.append(`sessionid`, ut());
      try {
        await U.default.post(
          `${F.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
          a,
        ),
          t == 0
            ? delete this.m_mapMutedUsers[e]
            : (this.m_mapMutedUsers[e] = i);
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
        let t = N.Init(xt);
        t.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: e,
          muted: !0,
        }),
          await L.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            t,
          );
      } catch {
        n &&
          (this.m_rgChatMessages.push({
            type: R.Error,
            msg: T(`#BroadcastChat_UserMuteFailed`, t),
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
        type: R.Notification,
        msg: T(`#BroadcastChat_UserMutedLocal`, t),
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
          let n = N.Init(xt);
          n.SetBodyFields({
            chat_id: this.m_ulChatID,
            user_steamid: e,
            muted: !1,
          }),
            await L.MuteBroadcastChatUser(
              this.m_steamInterface.GetServiceTransport(),
              n,
            ),
            this.m_rgChatMessages.push({
              type: R.Notification,
              msg: T(`#BroadcastChat_UserUnmutedLocal`, t),
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: !1,
              persona_name: ``,
              steamid: ``,
            });
        } catch {
          this.m_rgChatMessages.push({
            type: R.Error,
            msg: T(`#BroadcastChat_UserUnmuteFailed`, t),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      else
        this.m_rgChatMessages.push({
          type: R.Notification,
          msg: T(`#BroadcastChat_UserUnmutedLocal`, t),
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
        let t = N.Init(wt);
        t.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: e }),
          await L.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            t,
          );
      } catch {
        this.m_rgChatMessages.push({
          type: R.Error,
          msg: T(`#BroadcastChat_RemoveMessagesFailed`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async UpdateChatMessageFlair(e) {
    let t = N.Init(St);
    t.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${e}:`,
    }),
      await L.UpdateChatMessageFlair(
        this.m_steamInterface.GetServiceTransport(),
        t,
      );
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
    (this.m_tsFirstRequest = null),
      (this.m_nFromFirstRequestMS = 0),
      (this.m_nNextChatTS = 0),
      (this.m_rgChatMessages = []);
  }
};
b([t], J.prototype, `m_mapChannelModeratorUsers`, void 0),
  b([t], J.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  b([t], J.prototype, `m_nRateLimitSeconds`, void 0),
  b([t], J.prototype, `m_bRateLimited`, void 0),
  b([t], J.prototype, `m_rgChatMessages`, void 0),
  b([t], J.prototype, `m_latestAnnouncement`, void 0),
  b([C], J.prototype, `FetchChatModerators`, null),
  b([C], J.prototype, `RequestLoop`, null),
  b([C], J.prototype, `MuteUserForSession`, null);
var dr = `u-hyk5J5tIY-`,
  fr = `doqBDS-zTtg-`,
  pr = `DHv28C3kLqY-`,
  Y = i(),
  mr = () =>
    (0, Y.jsx)(`div`, {
      className: dr,
      children: (0, Y.jsx)(`div`, { className: fr }),
    }),
  hr = () =>
    (0, Y.jsx)(`div`, {
      className: dr,
      children: (0, Y.jsx)(`div`, { className: pr }),
    }),
  gr = `Utigx2dvTSs-`,
  _r = `IPiWi3ba7Oc-`,
  vr = `Tt1HS5eK4UQ-`,
  yr = `_2NN20ePjOoE-`,
  br = `Q5sAYcjkGuw-`,
  xr = `JhPLxwFuvY8-`,
  Sr = `-zOT4HlZFNc-`,
  Cr = `NFc5gI--APM-`,
  wr = `gMm9gxp-VwY-`,
  Tr = `_9JbCPa5peFE-`,
  Er = `jhZ68t8aO0U-`,
  Dr = `cF6FbGIaOso-`,
  Or = `uWbWS4Xl7nU-`,
  kr = `_0bHpv5DDjVk-`,
  Ar = `GJr1kPqad-w-`,
  jr = `_8whJ5F1f7no-`,
  Mr = `ngi9yWTTH6Q-`,
  Nr = `O0WGKKnt-b0-`,
  Pr = `n4yzVjIUqg0-`,
  Fr = `gB1ggcMqZ4U-`,
  Ir = `h1DcT5FSiVw-`,
  Lr = `aE9NemwHX3U-`,
  Rr = `-LW3HYdhtwg-`,
  zr = `UfXKJfvB2aU-`,
  Br = `NjuVylscv-c-`,
  Vr = `fQEvRYMgKZ8-`,
  Hr = `Jz1BUHL6vfU-`,
  Ur = `qUAIeS1LipI-`,
  Wr = `hCW7GiiXdrk-`,
  Gr = `gmY72gO6Jbk-`;
function Kr(e) {
  let { latestAnnouncement: t } = e;
  return t?.type == `giveaway_draw`
    ? (0, Y.jsx)(qr, { latestWinner: t })
    : null;
}
function qr(e) {
  let {
      latestWinner: t,
      className: n,
      strActionButton: r,
      strActionClassname: i,
    } = e,
    a = t.winners_info ?? [],
    o = a.length > 0 ? a[0].accountid : 0,
    [s, c] = H.useState(o),
    l = Ze(`${u.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`),
    d = Ze(`${u.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`);
  dt(!!t.giveaway_gid, `Giveaway draw announcement is missing its giveaway`, t);
  let f = At(t.giveaway_gid),
    p = f.bLoadingGiveawayInfo || f.closed ? null : f.seconds_until_drawing,
    m = o === k.accountid;
  H.useEffect(() => {
    s != o && setTimeout(() => c(o), 1500);
  }, [o, s]);
  let ee =
    a.length > 0 && a[0].persona
      ? a[0].persona
      : T(`#GA2022_UnknownPersonaName`);
  return (0, Y.jsx)(A, {
    href: `https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022`,
    className: n,
    children: (0, Y.jsxs)(`div`, {
      className: w({ [Lr]: !0, [Rr]: s === o }),
      children: [
        (0, Y.jsx)(`div`, {
          className: Br,
          children: (0, Y.jsx)(`img`, { className: Vr, src: l }),
        }),
        (0, Y.jsxs)(`div`, {
          className: zr,
          children: [
            s !== o &&
              (0, Y.jsx)(`div`, {
                className: w(`l-AUoGdZDTw-`),
                children: ze(
                  `#GA2022_Congrats_Deck_Unknown`,
                  (0, Y.jsx)(`br`, {}),
                ),
              }),
            s === o &&
              (0, Y.jsx)(`div`, {
                className: w(`l-AUoGdZDTw-`, `-LW3HYdhtwg-`),
                children: ze(
                  m
                    ? `#GA2022_Congrats_Deck_Me`
                    : `#GA2022_Congrats_Deck_OTher`,
                  ee,
                  (0, Y.jsx)(`br`, {}),
                ),
              }),
            !!(p && p > 0) &&
              (0, Y.jsx)(`div`, {
                className: `B7DECy1bqvs-`,
                children: ze(`#GA2022_Congrats_NextDraw`, p),
              }),
          ],
        }),
        (0, Y.jsx)(`img`, { className: Hr, src: d }),
        !!r &&
          (0, Y.jsx)(`div`, {
            className: i,
            children: m ? T(`#GA2022_YouWonNextSteps`) : r,
          }),
      ],
    }),
  });
}
function Jr(e, t) {
  let [n, r] = l(() => [
      t?.steamid,
      t?.steamid ? z.GetBroadcast(t.steamid)?.m_ulBroadcastID : void 0,
    ]),
    [i, a] = H.useState(null);
  H.useEffect(() => {
    let e = null;
    return (
      n &&
        ((e = q.Get().GetOrCreateChat(r ?? ``, n)),
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
function Yr(e) {
  let { gidGiveaway: t, stream: n } = e,
    r = Jr(t, n),
    i = me(`GameAwardDrop2022`),
    a = null,
    o = Wr;
  return (
    k.logged_in
      ? i?.registered
        ? ((a = T(`#GA2022_AlreadyRegistered`)), (o = Gr))
        : (a = T(`#GA2022_RegisterToWin`))
      : (a = T(`#GA2022_RegisterLoginToWin`)),
    r
      ? (0, Y.jsx)(qr, {
          latestWinner: r,
          className: Ur,
          strActionButton: a,
          strActionClassname: o,
        })
      : null
  );
}
var Xr = RegExp(`ː([^ː]*)ː`, `g`),
  Zr = RegExp(
    `^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)`,
    `i`,
  );
function Qr(e, t, n) {
  return n
    ? `presenter`
    : t.GetBroadcastSteamID() === e
      ? `broadcaster`
      : t.BIsUserBroadcastModerator(e)
        ? `moderator`
        : ``;
}
var $r = (e) => {
    let { userType: t, msg: n, presenterInfo: r } = e;
    if (t === `presenter` && r)
      return (0, Y.jsx)(`span`, {
        children: (0, Y.jsx)(ue, {
          name: r.name ?? ``,
          title: r.title,
          photo: r.photo,
          company: r.company ?? ``,
          bioString: r.bio,
          children: (0, Y.jsx)(`a`, {
            className: w(br, void 0),
            href: F.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
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
        (0, Y.jsx)(`span`, {
          children: (0, Y.jsx)(`a`, {
            className: w(br, e),
            href: F.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
            "data-miniprofile": `s` + n.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: n.persona_name,
          }),
        })
      );
    }
  },
  ei = (e) => {
    switch (e.userType) {
      case `presenter`:
        return (0, Y.jsx)(Ve, {
          toolTipContent: T(`#BroadcastChat_Role_Presenter_ttip`),
          children: (0, Y.jsx)(`span`, {
            className: Nr,
            children: (0, Y.jsx)(Pe, {}),
          }),
        });
      case `moderator`:
        return (0, Y.jsx)(Ve, {
          toolTipContent: T(`#BroadcastChat_Role_Moderatorr_ttip`),
          children: (0, Y.jsx)(`span`, {
            className: Nr,
            children: (0, Y.jsx)(Be, {}),
          }),
        });
      case `broadcaster`:
        return (0, Y.jsx)(Ve, {
          toolTipContent: T(`#BroadcastChat_Role_Broadcaster_ttip`),
          children: (0, Y.jsx)(`span`, {
            className: Nr,
            children: (0, Y.jsx)(Xe, {}),
          }),
        });
      default:
        return null;
    }
  },
  X = class extends H.Component {
    constructor(e) {
      super(e), o(this);
    }
    m_chat = void 0;
    messagesContainer = H.createRef();
    componentDidMount() {
      this.StartChat();
    }
    componentDidUpdate(e) {
      this.m_chat && this.m_chat.m_bAutoScroll && this.ScrollToNewestMessages(),
        (this.props.steamID !== e.steamID ||
          this.props.broadcastID !== e.broadcastID ||
          this.props.broadcastChannelID !== e.broadcastChannelID) &&
          this.StartChat();
    }
    componentWillUnmount() {
      this.m_chat && this.m_chat.Stop();
    }
    StartChat() {
      this.m_chat && this.m_chat.Stop();
      let e = q
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
        e.StartForSteamID(this.props.steamID, t), this.ScrollToNewestMessages();
      }
    }
    IsTrustedDomain(e) {
      return !!e.match(Zr);
    }
    AddLinksEmoticons(e, t) {
      t && this.m_chat?.GetUserEmoticons();
      let n = e.split(Xr),
        r = [];
      for (let e = 0; e < n.length; e += 1)
        e % 2 == 1
          ? r.push((0, Y.jsx)(le, { emoticon: n[e], large: !0 }, e))
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
      if (!n || t.type !== R.Chat) return null;
      let r = [],
        i = n.IsUserBroadcaster(n.GetUserSteamID()),
        a = n.BIsUserBroadcastModerator(n.GetUserSteamID());
      return (
        (k && k.is_support) || i || a
          ? r.push(
              (0, Y.jsx)(
                y,
                {
                  onSelected: () =>
                    n.RemoveUserMessagesServer(t.steamid, t.persona_name),
                  children: T(`#BroadcastChat_RemoveMessages`),
                },
                `remove`,
              ),
              (0, Y.jsx)(
                y,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 12, !1, t.persona_name),
                  children: T(`#BroadcastChat_half_Mute`),
                },
                `updatebanh`,
              ),
              (0, Y.jsx)(
                y,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 24, !1, t.persona_name),
                  children: T(`#BroadcastChat_day_Mute`),
                },
                `updateband`,
              ),
              (0, Y.jsx)(
                y,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 168, !1, t.persona_name),
                  children: T(`#BroadcastChat_week_Mute`),
                },
                `updatebanw`,
              ),
              (0, Y.jsx)(
                y,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 0, !0, t.persona_name),
                  children: T(`#BroadcastChat_perm_Mute`),
                },
                `updatebanp`,
              ),
              (0, Y.jsx)(
                y,
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
                  children: T(`#BroadcastChat_Unmute`),
                },
                `removeban`,
              ),
            )
          : n.IsUserMutedLocally(t.steamid)
            ? r.push(
                (0, Y.jsx)(
                  y,
                  {
                    onSelected: () =>
                      n.UnmuteUserForSession(t.steamid, t.persona_name),
                    children: T(`#BroadcastChat_UnmuteLocal`),
                  },
                  `unmuteuser`,
                ),
              )
            : r.push(
                (0, Y.jsx)(
                  y,
                  {
                    onSelected: () =>
                      n.MuteUserForSession(t.steamid, t.persona_name),
                    children: T(`#BroadcastChat_MuteLocal`),
                  },
                  `muteuser`,
                ),
              ),
        ((k && k.is_support) || n.IsUserBroadcaster(n.GetUserSteamID())) &&
          t.steamid &&
          (n.BIsUserBroadcastModerator(t.steamid)
            ? r.push(
                (0, Y.jsx)(
                  y,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !1,
                        t.persona_name,
                      ),
                    children: T(`#BroadcastChat_Remove_Moderator`),
                  },
                  `removemod`,
                ),
              )
            : r.push(
                (0, Y.jsx)(
                  y,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !0,
                        t.persona_name,
                      ),
                    children: T(`#BroadcastChat_Add_Moderator`),
                  },
                  `addmod`,
                ),
              )),
        r.length
          ? Me(
              (0, Y.jsxs)(rt, {
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: jr,
                    children: [
                      T(`#BroadcastChat_User`),
                      (0, Y.jsx)(`br`, {}),
                      (0, Y.jsx)(`span`, {
                        className: Mr,
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
      return e.type === R.Notification ? Cr : e.type === R.Error ? wr : yr;
    }
    FormatMessage(e, t) {
      if (e.type === R.Chat) {
        let n = t ? t.FilterText(e.steamid, e.msg) : e.msg;
        return this.AddLinksEmoticons(n, !1);
      }
      return e.msg;
    }
    RenderUserChatLine(e, t, n, r) {
      let i = r?.get(t.steamid),
        a = t.type === R.Chat ? Qr(t.steamid, e, i) : ``;
      return (0, Y.jsxs)(
        `div`,
        {
          className: this.GetTypeClassName(t),
          onContextMenu: (e) => this.OnContextMenu(e, t),
          children: [
            t.type === R.Chat && (0, Y.jsx)(ei, { userType: a }),
            t.flair &&
              (0, Y.jsx)(`span`, {
                className: `xDmEH9mDo3o-`,
                children: this.AddLinksEmoticons(t.flair, !1),
              }),
            t.type === R.Chat &&
              (0, Y.jsx)($r, { userType: a, msg: t, presenterInfo: i }),
            t.type === R.Chat &&
              e.GetBroadcastSteamID() === t.steamid &&
              (0, Y.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${T(`#BroadcastChat_Broadcaster`)})`,
              }),
            t.type === R.Chat &&
              e.m_mapChannelModeratorUsers.get(t.steamid) &&
              (0, Y.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${T(`#BroadcastChat_Moderator`)})`,
              }),
            (0, Y.jsxs)(`span`, {
              className: `${xr} ${this.AddLinksEmoticons(t.msg, !1).filter((e) => e && typeof e == `string`).length ? `` : Sr}`,
              children: [
                t.type === R.Chat ? ` : ` : ``,
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
          ? Et.GetPresenterMapForBroadcasterSteamID(
              this.m_chat.GetBroadcastSteamID(),
            )
          : void 0,
        c = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
      return (0, Y.jsxs)(`div`, {
        className: w(_r, `ChatPanel`),
        style: e ? { display: `none` } : void 0,
        children: [
          (0, Y.jsx)(Kr, { latestAnnouncement: c }),
          n &&
            !!this.m_chat &&
            (0, Y.jsx)(ti, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
          (0, Y.jsx)(mr, {}),
          (0, Y.jsx)(`div`, {
            className: w(`${vr} ${Ce}`, `ChatMessages`),
            onScroll: this.HandleScroll,
            ref: this.messagesContainer,
            children: i && o.map((e, t) => this.RenderUserChatLine(i, e, t, s)),
          }),
          (0, Y.jsx)(hr, {}),
          !n &&
            !!this.m_chat &&
            (0, Y.jsx)(ti, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
        ],
      });
    }
  };
b([t], X.prototype, `m_chat`, void 0),
  b([C], X.prototype, `StartChat`, null),
  b([C], X.prototype, `HandleScroll`, null),
  b([C], X.prototype, `OnContextMenu`, null),
  b([C], X.prototype, `RenderUserChatLine`, null),
  (X = b([s], X));
function ti(e) {
  let {
    oChat: t,
    emoticonStore: n,
    bPartnerMemberOnlyChat: r,
    onSignIn: i,
  } = e;
  return r && (!k?.logged_in || !k?.is_partner_member)
    ? (0, Y.jsx)(oi, {})
    : k?.logged_in
      ? (0, Y.jsx)(ni, { oChat: t, emoticonStore: n })
      : i
        ? (0, Y.jsx)(ai, { onSignIn: i })
        : null;
}
function ni(e) {
  let { oChat: t, emoticonStore: n } = e,
    [r, i] = H.useState(``),
    a = H.useRef(null),
    o = l(() => t.m_bRateLimited),
    s = H.useCallback(
      (e) => {
        !e.shiftKey &&
          e.charCode === 13 &&
          (t.m_bRateLimited || (t.SendMessage(r), i(``)), e.preventDefault());
      },
      [t, r],
    ),
    c = H.useCallback(
      (e, t = !1) => {
        i(r + `\u02D0${e}\u02D0`), a?.current && a.current.focus();
      },
      [r, a],
    ),
    u = () => {
      t.SendMessage(r), i(``);
    },
    d = o || r.trim().length == 0,
    f = w(Se, r.length == 0 && `_4X5-n9MaD8g-`);
  return (0, Y.jsx)(`div`, {
    className: w(void 0, `ChatEntryCtn`),
    children: (0, Y.jsxs)(`div`, {
      className: w(gr, `ChatEntry`),
      children: [
        (0, Y.jsxs)(`form`, {
          className: `${we}`,
          children: [
            (0, Y.jsx)(`textarea`, {
              className: Ee,
              placeholder: T(`#BroadcastChat_EnterResponse`),
              onKeyPress: s,
              onChange: (e) => i(e.target.value),
              value: r,
              ref: a,
            }),
            o &&
              (0, Y.jsx)(ii, {
                nSeconds: t.m_nRateLimitSeconds,
                bRateLimited: t.m_bRateLimited,
              }),
            (0, Y.jsx)(`button`, {
              className: f,
              title: T(`#ChatEntryButton_Submit`),
              disabled: d,
              onClick: u,
              children: (0, Y.jsx)(Re, {}),
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          style: { height: `50px` },
          className: `${Te}`,
          children: (0, Y.jsxs)(`div`, {
            className: De,
            children: [
              (0, Y.jsx)(Oe, {
                disabled: !1,
                OnEmoticonSelected: c,
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: n,
              }),
              (0, Y.jsx)(ri, { ...e, textInputRef: a }),
            ],
          }),
        }),
      ],
    }),
  });
}
function ri(e) {
  let { oChat: t, emoticonStore: n, textInputRef: r } = e;
  return t.m_strFlairGroupID &&
    n.flair_list &&
    n.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
    ? (0, Y.jsx)(Oe, {
        disabled: !1,
        OnEmoticonSelected: (e) => {
          t.UpdateChatMessageFlair(e), r?.current && r.current.focus();
        },
        rtLastAckedNewEmoticons: Number.MAX_VALUE,
        emoticonStore: n,
        strFlairGroupID: t.m_strFlairGroupID,
        title: T(`#ChatEntryButton_Flair`),
        buttonIcon: (0, Y.jsx)(lt, {}),
      })
    : null;
}
var ii = class extends H.Component {
  render() {
    return (0, Y.jsx)(`div`, {
      className: Tr,
      children: (0, Y.jsxs)(`div`, {
        className: Er,
        children: [
          (0, Y.jsx)(`div`, {
            className: `${Or} ${Dr}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, Y.jsx)(`div`, {
            className: `${kr} ${Dr}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, Y.jsx)(`div`, {
            className: Ar,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
        ],
      }),
    });
  }
};
function ai(e) {
  return (0, Y.jsx)(`div`, {
    className: Pr,
    children: (0, Y.jsx)(ct, {
      onClick: e.onSignIn,
      className: w(Ir),
      children: T(`#BroadcastChat_Login`),
    }),
  });
}
function oi(e) {
  return (0, Y.jsxs)(`div`, {
    className: Pr,
    children: [
      (0, Y.jsx)(`div`, {
        className: Fr,
        children: T(`#Broadcast_PartnerChat_Login`),
      }),
      !k.logged_in &&
        !F.IN_STEAMUI &&
        (0, Y.jsx)(ct, {
          onClick: kt,
          className: w(`h1DcT5FSiVw-`),
          children: T(`#Login_SignIn`),
        }),
    ],
  });
}
var si = `_7FIE12jcFio-`,
  ci = `l3NO7dsjryo-`,
  li = `gxhjub7-6JQ-`,
  ui = s((e) => {
    let { appid: t } = e,
      n = Ye(),
      r = (0, H.useRef)({ include_assets: !0, include_release: !0 }),
      i = p(t),
      { data: a } = it(i),
      { data: o } = ht(i),
      { data: s } = Ie(i),
      [c, l] = xe(t, r.current),
      u = w(si, `StoreSaleWidgetContainer_mini`),
      d = ci,
      f = li;
    if (a == null)
      return (0, Y.jsx)(`div`, {
        className: u,
        children: (0, Y.jsx)(oe, { size: `medium` }),
      });
    if (a == null || !a.name) return (0, Y.jsx)(`div`, { className: void 0 });
    let re = a.type != 8,
      h = Ue(ne(a), n);
    return (0, Y.jsxs)(`div`, {
      className: u,
      children: [
        (0, Y.jsx)(`a`, {
          href: h,
          target: F.IN_CLIENT ? void 0 : `_blank`,
          children: (0, Y.jsx)(_, {
            id: i,
            children: (0, Y.jsx)(`div`, {
              className: d,
              children:
                o &&
                (0, Y.jsx)(`img`, {
                  className: f,
                  src: mt(o, `small_capsule`),
                  alt: a.name,
                }),
            }),
          }),
        }),
        (0, Y.jsxs)(`div`, {
          className: m,
          children: [
            (0, Y.jsx)(`a`, {
              href: h,
              target: F.IN_CLIENT ? void 0 : `_blank`,
              children: (0, Y.jsx)(_, {
                id: i,
                children: (0, Y.jsx)(`div`, {
                  className: w(te, `StoreSaleWidgetTitle`),
                  children: a.name,
                }),
              }),
            }),
            s &&
              (0, Y.jsx)(`div`, { className: `A8oyzoRvWQ8-`, children: ee(s) }),
            !!re && (0, Y.jsx)(ae, { id: i, bShowDemoButton: !0 }),
          ],
        }),
      ],
    });
  }),
  di = `58px`,
  fi = `58px`,
  pi = `rYnVBBDJIz4-`,
  mi = `dsbI18mZ-Ps-`,
  hi = `dQY8CyT7Y5Y-`,
  gi = `f0G28hbeNYE-`,
  _i = `EGznwOBrytk-`,
  vi = `wMy1ewxYK3I-`,
  yi = `iLleweU-ckI-`,
  bi = `ov8XKFWsMMc-`,
  xi = `KcqUD5hkzyk-`,
  Si = `ECJWFclMDpk-`,
  Ci = `KkgW9CzRVMI-`,
  wi = `SObNBjtfgbU-`,
  Ti = `-d8EQqzPfNs-`,
  Ei = `FS3-jxto3Z8-`,
  Di = `twoyTg-z2n4-`,
  Oi = `_887-MlrXKDQ-`,
  ki = `Yb1KTWt-6pE-`,
  Ai = `HbhpxnAX2Kk-`,
  ji = `vePf8-fcS4g-`,
  Mi = `xpdX0ycPNx0-`,
  Ni = `QGqVyFFAFtg-`,
  Pi = `qwFxl5tJlG0-`,
  Fi = `-PTMMcy5uF4-`,
  Ii = `mYXN-do7NYQ-`,
  Li = `rIfaYmVdzDA-`,
  Ri = `hgFSY87Dsxg-`,
  zi = `u-lLy1wH1Is-`,
  Bi = `pllfTQu8jag-`,
  Vi = `GsIDuGodBUQ-`,
  Hi = `_2IUJG6CdnFA-`,
  Ui = `Jvoz-8Cocp4-`,
  Wi = `zuLP0piEwuA-`,
  Gi = `eR0CdHz8x6I-`,
  Ki = `GsHUhqcJfJQ-`,
  qi = `_77LbK-akGBo-`,
  Ji = `iADCJfccVl8-`,
  Yi = `_6NUM7GMUXrI-`,
  Xi = `eWHilAZFWEA-`,
  Zi = `yzeJT1XucOE-`,
  Qi = s((e) => {
    let { event: t } = e,
      n = t.clanSteamID.GetAccountID(),
      r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
      i = (0, H.useRef)(null),
      [a, o] = (0, H.useState)(t ? fe.GetCreatorHome(t.clanSteamID) : void 0);
    if (
      ((0, H.useEffect)(() => {
        let e = U.default.CancelToken.source();
        return (
          (i.current = e.cancel),
          (async () => {
            let t = Le.InitFromClanID(n, F.EUNIVERSE),
              r = await fe.LoadCreatorHome(t, !1, e);
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
        F.COMMUNITY_BASE_URL +
        `gid/` +
        t.jsondata.broadcast_item_drops_details_clan_accountid +
        `/partnerevents/view/` +
        t.jsondata.broadcast_item_drops_details_event_gid,
      c = t.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
    return (0, Y.jsx)(`div`, {
      className: _i,
      children: (0, Y.jsxs)(`div`, {
        children: [
          T(
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
            (0, Y.jsx)(`a`, {
              href: s,
              target: F.IN_CLIENT ? `` : `_blank`,
              children: T(`#SalePage_WatchForDrop_LearnMore`),
            }),
        ],
      }),
    });
  });
function $i(e) {
  let { steamid: t, closeModal: n } = e;
  return (0, Y.jsxs)(Ne, {
    strDescription: ``,
    strTitle: T(`#Button_Share`),
    onCancel: n,
    onOK: n,
    bAlertDialog: !0,
    modalClassName: `EventDisplay_Share_Dialog`,
    children: [(0, Y.jsx)(ea, { steamid: t }), (0, Y.jsx)(ta, { steamid: t })],
  });
}
function ea(e) {
  let { steamid: t } = e,
    n = na(t);
  return (0, Y.jsxs)(`div`, {
    className: w(se, ve),
    children: [
      (0, Y.jsx)(S, {
        toolTipContent: T(`#EventDisplay_Share_OnFaceBook`),
        children: (0, Y.jsx)(A, {
          href: n.strFacebookUrl,
          className: be,
          children: (0, Y.jsx)(`img`, { className: w(g), src: yt }),
        }),
      }),
      (0, Y.jsx)(S, {
        toolTipContent: T(`#EventDisplay_Share_OnTwitter`),
        children: (0, Y.jsx)(A, {
          href: n.strTwitterUrl,
          className: be,
          children: (0, Y.jsx)(`img`, { className: w(g), src: bt }),
        }),
      }),
      (0, Y.jsx)(S, {
        toolTipContent: T(`#EventDisplay_Share_OnReddit`),
        children: (0, Y.jsx)(A, {
          href: n.strRedditUrl,
          className: be,
          children: (0, Y.jsx)(`img`, { className: w(g), src: ke }),
        }),
      }),
    ],
  });
}
function ta(e) {
  let { steamid: t } = e,
    n = H.createRef(),
    [r, i] = H.useState(``),
    a = H.createRef(),
    o = H.useCallback(
      (e) => {
        n.current &&
          n.current.ownerDocument.defaultView?.navigator.clipboard
            .writeText(n.current.value)
            .then((e) => {
              i(T(`#EventDisplay_Share_CopiedToClipboard`));
            })
            .catch((e) => {
              i(T(`#EventDisplay_Share_FailedToCopyToClipboard`)),
                console.error(`Failed to copy link to clipboard:`, e);
            });
      },
      [n],
    ),
    s = F.COMMUNITY_BASE_URL + `broadcast/watch/` + t;
  return (0, Y.jsxs)(`div`, {
    children: [
      (0, Y.jsxs)(`div`, {
        className: w(se, he),
        onClick: o,
        children: [
          (0, Y.jsx)(`span`, {
            className: _e,
            children: T(`#EventDisplay_Share_Link`),
          }),
          (0, Y.jsx)(`textarea`, {
            className: ge,
            ref: n,
            value: s,
            readOnly: !0,
          }),
          !!document.queryCommandSupported(`copy`) &&
            (0, Y.jsx)(S, {
              toolTipContent: T(`#ToolTip_CopyLinkToClipboard`),
              children: (0, Y.jsx)(`div`, {
                className: w(`yYL-OrX9PtQ-`, `DPUYf3XM-3s-`, `_6y4EcbHPzTE-`),
                children: (0, Y.jsx)(`img`, {
                  className: `SGi7-TqE4Rs-`,
                  src: `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='1400px'%20height='1409px'%20viewBox='0%201801.5%201400%201409'%20enable-background='new%200%201801.5%201400%201409'%20xml:space='preserve'%3e%3cpath%20id='iconmonstr-link-1_1_'%20fill='%23FFFFFF'%20d='M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0%20c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294%20c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280%20c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941%20c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z%20M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0%20c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0%20c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647%20c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059%20S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z'/%3e%3c/svg%3e`,
                }),
              }),
            }),
        ],
      }),
      (0, Y.jsx)(`div`, { ref: a, className: ye, children: r }),
    ],
  });
}
function na(e) {
  let t = F.COMMUNITY_BASE_URL + `broadcast/share/` + e;
  return {
    strFacebookUrl: t + `?site=facebook&t=` + Math.random(),
    strTwitterUrl: t + `?site=twitter`,
    strRedditUrl: t + `?site=reddit`,
  };
}
var ra = {
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
function ia() {
  let e = vt();
  return !Fe() && !e;
}
function aa(e) {
  return ia() ? (0, Y.jsx)(Z, { ...e }) : null;
}
var Z = class extends H.Component {
  m_cancelSignal = U.default.CancelToken.source();
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
    await V.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
      this.m_cancelSignal.token.reason ||
        this.setState({
          bLoadingPreference: !1,
          bExpanded: !V.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
          innerStyle: {
            ...this.state.innerStyle,
            maxHeight: V.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
              ? `0vh`
              : `100vh`,
          },
        }),
      await (this.props.bIsPreview &&
      this.props.accountIDs &&
      !this.props.event?.BUsesContentHubForItemSource()
        ? V.Get().HintLoadEmbeddablePreviewStreams(this.props)
        : V.Get().HintLoadEmbeddableStreams(this.props)),
      this.props.nAppIDVOD &&
        V.Get().SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
      window.setTimeout(() => {
        this.m_cancelSignal.token.reason ||
          this.setState({ style: { ...this.state.style, maxHeight: `100vh` } });
      }, 10);
  }
  componentWillUnmount() {
    this.m_cancelSignal.cancel(`BroadcastEmbeddable component unmounted`);
  }
  ToggleBroadcastExpandShrink() {
    let e = V.Get().GetPlayReadyStream(this.props);
    if (!e) return;
    let t = this.state.bExpanded,
      n = z.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
    B(n, t ? 2 : 3, e.snr),
      t && ft()?.AddEvent(_t),
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
          V.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
        );
  }
  OnShrinkTransitionEnd() {
    this.state.innerStyle.maxHeight === `0vh` &&
      this.setState({ bExpanded: !1 }, () =>
        V.Get().SetEmbeddedStreamCollapsed(!0),
      );
  }
  async onStreamSelect(e) {
    this.setState({ bStartMuted: !1 }),
      V.Get().GetPlayReadyStream(this.props)?.accountid != e.accountid &&
        (await V.Get().AttemptToPlayStream(this.props, e));
  }
  async PlayNextNonVOD() {
    this.setState({ bStartMuted: !1 });
    let e = (V.Get().GetStreams(this.props) ?? []).filter(
      (e) => !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
    );
    await V.Get().PlayFromAvailableStreams(this.props, e, !0);
  }
  ConstructSidePanels(e, t) {
    let n = { bRightPanelArtworkOrEmpty: !0 };
    if (this.props.bWidePlayer) return n;
    let r = V.Get().GetConcurrentStreams(this.props) > 1,
      i = z.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
      a = (0, Y.jsx)(sa, { ImgUrl: e.right_panel }, `right` + i),
      o = (0, Y.jsx)(sa, { ImgUrl: e.left_panel }, `left` + i);
    if (i < 11) {
      let t = e.steamid
        ? Et.GetAppIDListForBroadcasterSteamID(e.steamid)
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
        ((a = (0, Y.jsx)(ui, { appid: i }, `mini` + e.accountid)),
        (n.bRightPanelArtworkOrEmpty = !1)),
      r && !t
        ? ((n.leftPanel = (0, Y.jsx)(
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
          ? ((n.leftPanel = (0, Y.jsx)(`div`, {})),
            (n.rightPanel = (0, Y.jsx)(pa, {
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
      ((this.m_bMarkedUsabilitySeen = !0), ft()?.AddEvent(je));
  }
  render() {
    if (this.state.bLoadingPreference) return null;
    let e = V.Get().GetPlayReadyStream(this.props);
    if (e) {
      this.MarkBroadcastSeen();
      let t = V.Get().GetChatVisibility() === `show`,
        { event: n, language: r, fnRenderBroadcastContext: i } = this.props,
        a = n
          ? {
              ...e,
              left_panel: n.GetImageURL(`broadcast_left`, r || ot(F.LANGUAGE)),
              right_panel: n.GetImageURL(
                `broadcast_right`,
                r || ot(F.LANGUAGE),
              ),
              store_title: n.GetBroadcastTitle(r || ot(F.LANGUAGE)),
              broadcast_chat_visibility: n.GetBroadcastChatVisibility(),
            }
          : e,
        o = this.ConstructSidePanels(a, t),
        s = a.store_title ? a.store_title : a.title,
        c = V.Get().GetConcurrentStreams(this.props) > 1,
        l = () => {
          a.nAppIDVOD && this.PlayNextNonVOD(), this.props.fnOnVideoEnd?.();
        };
      return (0, Y.jsx)(H.Fragment, {
        children: (0, Y.jsxs)(`div`, {
          className: `broadcast_embed_top_ctn_trgt`,
          style: this.state.style,
          children: [
            (0, Y.jsxs)(`div`, {
              className: w({ [pi]: !0, [gi]: !!n, broadcast_brd_ctn_trgt: !0 }),
              children: [
                (0, Y.jsxs)(`div`, {
                  className: w(vi, `bordered_title_trgt`),
                  children: [
                    (0, Y.jsx)(h, {}),
                    (0, Y.jsx)(`div`, { className: yi, children: s }),
                    (0, Y.jsxs)(`div`, {
                      className: bi,
                      children: [
                        !this.state.bExpanded &&
                          (0, Y.jsx)(S, {
                            toolTipContent: T(
                              `#StoreBroadcast_Change_store_Broadcast_settings`,
                            ),
                            children: (0, Y.jsx)(`div`, {
                              className: `Ku3ORKocBrQ-`,
                              onClick: () =>
                                window.open(
                                  `${F.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                ),
                            }),
                          }),
                        (0, Y.jsx)(S, {
                          toolTipContent: T(`#StoreBroadcast_Hide_Tooltip`),
                          children: (0, Y.jsx)(`div`, {
                            className: this.state.bExpanded ? xi : Si,
                            onClick: this.ToggleBroadcastExpandShrink,
                          }),
                        }),
                      ],
                    }),
                    !!a.gamedata_subtitle &&
                      (0, Y.jsx)(`div`, {
                        className: `WdbOLmmaXso-`,
                        children: a.gamedata_subtitle,
                      }),
                  ],
                }),
                !!this.state.bExpanded &&
                  (0, Y.jsxs)(`div`, {
                    className: w({
                      "lOf3hlirldE-": !0,
                      embeddable_ctn_trgt: !0,
                      multistream: c,
                      broadcast_right_panel_simple: o.bRightPanelArtworkOrEmpty,
                      broadcast_chat_expanded: t,
                    }),
                    style: { ...this.state.innerStyle },
                    onTransitionEnd: this.OnShrinkTransitionEnd,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `HEBZJhZ641A-`,
                        children: o.leftPanel,
                      }),
                      (0, Y.jsx)(Q, {
                        stream: a,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `UHu5FWxee0A-`,
                        children: o.rightPanel,
                      }),
                      !!this.state.bExpanded &&
                        (0, Y.jsx)($, {
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
              (0, Y.jsx)(Qi, { event: n }),
            (0, Y.jsx)(`div`, { className: Wi }),
          ],
        }),
      });
    }
    return (0, Y.jsx)(`div`, { className: `NoBroadcastAvailable` });
  }
};
b([C], Z.prototype, `ToggleBroadcastExpandShrink`, null),
  b([C], Z.prototype, `OnShrinkTransitionEnd`, null),
  b([C], Z.prototype, `onStreamSelect`, null),
  b([C], Z.prototype, `PlayNextNonVOD`, null),
  (Z = b([s], Z));
var Q = class extends H.Component {
  m_iVideoContainerRef = H.createRef();
  constructor(e) {
    super(e),
      (this.state = { bPopout: !1, bPreventPopup: window.screen.width <= 768 });
  }
  CloseBroadcastPopup() {
    let e = z.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    B(e, 7, this.props.stream.snr),
      ft()?.AddEvent(Ke),
      this.setState({ bPopout: !1, bPreventPopup: !0 });
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
    return (0, Y.jsx)(`div`, {
      className: wi,
      children: (0, Y.jsx)(ce, {
        onEnter: this.OnEnter,
        onLeave: this.OnLeave,
        onIntersectionChange: (e) => {
          e.isIntersecting || this.OnLeave();
        },
        className: w({
          [Ti]: !0,
          video_placeholder_trgt: !0,
          [mi]: this.props.bWidePlayer,
        }),
        ref: this.m_iVideoContainerRef,
        children: (0, Y.jsxs)(`div`, {
          className: this.state.bPopout ? Gi : Ei,
          children: [
            this.state.bPopout &&
              (0, Y.jsx)(ca, {
                steamIDBroadcast: this.props.stream.steamid,
                OnPreventPopup: this.CloseBroadcastPopup,
              }),
            (0, Y.jsx)(`div`, {
              className: Yi,
              children: (0, Y.jsx)(jt, {
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
b([C], Q.prototype, `CloseBroadcastPopup`, null),
  b([C], Q.prototype, `OnEnter`, null),
  b([C], Q.prototype, `OnLeave`, null);
function oa(e) {
  let { stream: t } = e,
    [n] = l(() => [t.steamid]),
    r = z.GetOrCreateBroadcastInfo(n).m_nAppID,
    i = ra.list.find(
      (e) =>
        e.appid == r &&
        (!e.broadcasterAccountID || e.broadcasterAccountID == t.accountid),
    );
  if (i) {
    let e = i.url;
    return (
      (F.IN_CLIENT ||
        navigator.userAgent.indexOf(`Valve Steam Client`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam GameOverlay`) >= 0 ||
        navigator.userAgent.indexOf(`Valve Steam Tenfoot`) >= 0) &&
        (e = `steam://openurl/` + e),
      (0, Y.jsx)(`a`, {
        href: e,
        children: T(`#Broadcast_Embed_Watch_With_Frieds_SteamTV`),
      })
    );
  }
  {
    let e = F.COMMUNITY_BASE_URL + `broadcast/watch/` + n;
    return (0, Y.jsx)(S, {
      toolTipContent: T(`#BroadcastWatch_View_Broadcast_Page`),
      children: (0, Y.jsx)(`a`, {
        href: e,
        className: Ai,
        children: (0, Y.jsx)(gt, {}),
      }),
    });
  }
}
var $ = class extends H.Component {
  OnToggleChat(e) {
    e.preventDefault();
    let t = z.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    B(t, V.Get().GetChatVisibility() === `show` ? 5 : 4, this.props.stream.snr),
      V.Get().ToggleChatVisibility();
  }
  onWatchBroadcastPage() {
    let e = z.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nAppID;
    B(e, 9, this.props.stream.snr);
  }
  render() {
    let e = V.Get().GetChatVisibility() != `remove`,
      t = V.Get().GetChatVisibility() === `hide`,
      n = !this.props.stream.nAppIDVOD,
      r = n,
      i = Number.parseInt(
        `` +
          z.GetOrCreateBroadcastInfo(this.props.stream.steamid).m_nViewerCount,
      );
    return (0, Y.jsxs)(`div`, {
      className: w(Di, `viewer_bar`),
      children: [
        (0, Y.jsxs)(`div`, {
          className: w(ji, `viewer_count`),
          children: [(0, Y.jsx)(tt, {}), $e(i)],
        }),
        (0, Y.jsxs)(`div`, {
          className: w(Oi, `viewer_links`),
          children: [
            !!(e && !t && this.props.bMultistream) &&
              (0, Y.jsx)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: (0, Y.jsx)(`a`, {
                  href: `#`,
                  className: void 0,
                  onClick: this.OnToggleChat,
                  children: T(`#sale_three_section_show_streams`),
                }),
              }),
            e &&
              (0, Y.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, Y.jsx)(Qe, {}),
                  (0, Y.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: this.OnToggleChat,
                    children: T(
                      t
                        ? `#sale_three_section_show_chat`
                        : `#sale_three_section_hide_chat`,
                    ),
                  }),
                ],
              }),
            r &&
              (0, Y.jsxs)(`div`, {
                className: `ZfSk6AxA-Tw-`,
                children: [
                  (0, Y.jsx)(at, {}),
                  (0, Y.jsx)(`a`, {
                    href: `#`,
                    className: void 0,
                    onClick: (e) => {
                      let t = Ae(e);
                      t &&
                        He(
                          (0, Y.jsx)($i, {
                            steamid: this.props.stream.steamid ?? ``,
                          }),
                          t,
                        );
                    },
                    children: T(`#Broadcast_ShareBroadcast`),
                  }),
                ],
              }),
            (0, Y.jsx)(S, {
              toolTipContent: T(
                `#StoreBroadcast_Change_store_Broadcast_settings`,
              ),
              children: (0, Y.jsx)(`a`, {
                href:
                  F.STORE_BASE_URL +
                  `account/preferences/#store_broadcast_settings`,
                target: F.IN_CLIENT ? void 0 : `_blank`,
                className: ki,
                children: (0, Y.jsx)(et, {}),
              }),
            }),
            n && (0, Y.jsx)(oa, { ...this.props }),
          ],
        }),
        !!this.props.chatAnnouncementGivewayGID &&
          (0, Y.jsx)(Yr, {
            gidGiveaway: this.props.chatAnnouncementGivewayGID,
            stream: this.props.stream,
          }),
      ],
    });
  }
};
b([C], $.prototype, `OnToggleChat`, null),
  b([C], $.prototype, `onWatchBroadcastPage`, null),
  ($ = b([s], $));
var sa = class extends H.Component {
    render() {
      let e = this.props.ImgUrl;
      return (0, Y.jsxs)(`div`, {
        className: Zi,
        children: [
          e &&
            (0, Y.jsx)(`img`, {
              className: `KkgW9CzRVMI-`,
              src: this.props.ImgUrl,
            }),
          !e && (0, Y.jsx)(`div`, { className: `KkgW9CzRVMI-` }),
        ],
      });
    }
  },
  ca = s((e) => {
    let { steamIDBroadcast: t } = e,
      n = z.GetOrCreateBroadcastInfo(t).m_nAppID;
    n = n == 7 ? 0 : n;
    let r = p(n),
      { data: i } = it(r);
    return (0, Y.jsxs)(`div`, {
      className: [Ki, void 0].join(` `),
      children: [
        i
          ? (0, Y.jsx)(pe, {
              id: r,
              className: qi,
              children: T(`#StoreBroadcast_Detault_popout_Title`),
            })
          : (0, Y.jsx)(`div`, {
              className: qi,
              children: T(`#StoreBroadcast_Detault_popout_Title`),
            }),
        (0, Y.jsx)(S, {
          toolTipContent: T(`#StoreBroadcast_close_broadcast_popup`),
          children: (0, Y.jsx)(`button`, {
            className: Ji,
            onClick: e.OnPreventPopup,
            children: (0, Y.jsx)(pt, {}),
          }),
        }),
      ],
    });
  });
function la(e, t) {
  let n = z.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
    r = Je.Get().GetApp(n);
  return e && r?.GetAssets()?.GetHeaderURL() ? parseInt(di) : parseInt(fi);
}
function ua(e) {
  let {
      curStream: t,
      onStreamSelect: n,
      fnFilterStreams: r,
      bShowCapsuleArt: i,
      broadcastEmbedContext: a,
    } = e,
    o = (0, H.useRef)(null),
    s = (0, H.useMemo)(() => {
      let e = (V.Get().GetStreams(a) ?? []).filter((e) => !r || r(e));
      return Dt(e), e;
    }, [a, r]);
  return (
    (0, H.useEffect)(() => {
      if (o && o.current) {
        let e = s
          .map((e) => z.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
          .filter(Boolean);
        Je.Get()
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
    (0, Y.jsx)(`div`, {
      ref: o,
      className: w({ [Ci]: !0, side_panels: !0, [Vi]: !0, [Ui]: s.length > 3 }),
      children: (0, Y.jsx)(`div`, {
        className: Hi,
        children: s.map((e) =>
          (0, Y.jsx)(
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
    a = l(() => z.GetOrCreateBroadcastInfo(r.steamid).m_nAppID);
  a = a == 7 ? 0 : a;
  let o = p(a),
    { data: s } = it(o),
    { data: c } = ht(o);
  if (!Tt(r)) return null;
  let u = i && c ? mt(c, `header`) : void 0,
    d = Number.parseInt(`` + r.viewer_count),
    f = !Number.isNaN(d),
    m = !!r.nAppIDVOD && s?.name;
  return (0, Y.jsxs)(`div`, {
    className: w({
      [Mi]: !0,
      [void 0]: r.current_selection_priority == ie.k_eFeatured,
      [Ni]: !!u,
    }),
    children: [
      (0, Y.jsx)(_, {
        id: o,
        hoverClassName: Fi,
        children: (0, Y.jsx)(de, {
          className: w(Ii, n && void 0),
          onClick: () => t && t(r),
          rootMargin: `100px 0px 100px 0px`,
          children: (0, Y.jsx)(fa, {
            strThumbnail: r.thumbnail_http_address,
            bSelected: n,
            strCapsuleArtURL: u,
          }),
        }),
      }),
      (0, Y.jsx)(`div`, {
        className: w(ji, !f && `QP7p0y7iNjE-`),
        children: f
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(tt, {}),
                (0, Y.jsx)(`div`, { className: Pi, children: $e(d) }),
              ],
            })
          : m,
      }),
    ],
  });
}
function fa(e) {
  let { strCapsuleArtURL: t, strThumbnail: n, bSelected: r } = e,
    i = r ? Bi : zi;
  if (t) {
    let e = [t];
    return (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(`img`, { className: w(i, Li), src: t }),
        (0, Y.jsx)(re, { className: w(i, Ri), srcs: e }),
      ],
    });
  }
  return (0, Y.jsx)(`img`, { className: i, src: n });
}
function pa(e) {
  let { stream: t, orientation: n } = e,
    r = n == `below`,
    [i, a] = l(() => {
      let e = t.steamid ? z.GetBroadcast(t.steamid) : void 0;
      return [e, e?.m_ulBroadcastID];
    }),
    o = l(() => t.steamid);
  return i
    ? (0, Y.jsx)(`div`, {
        className: w({ [void 0]: r, [void 0]: !r, [hi]: !0 }),
        children: (0, Y.jsx)(`div`, {
          className: Xi,
          children: (0, Y.jsx)(X, {
            emoticonStore: Ot,
            watchLocation: 6,
            steamID: o,
            broadcastID: a,
          }),
        }),
      })
    : null;
}
export { ca as BroadcastEmbeddablePopoutHeader, aa as default };
