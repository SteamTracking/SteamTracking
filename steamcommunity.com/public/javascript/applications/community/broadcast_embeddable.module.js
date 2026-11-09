/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  A as t,
  B as n,
  C as r,
  Ft as i,
  L as a,
  Pt as o,
  R as s,
  ot as c,
  w as l,
} from "./libraries.js";
import {
  Q as u,
  a as d,
  do as f,
  gn as p,
  i as m,
  o as h,
  r as g,
  s as _,
} from "./vodquery.js";
import { i as v, t as ee } from "./broadcastwatchstore.js";
import {
  a as y,
  i as te,
  l as ne,
  o as re,
  r as ie,
  s as ae,
  t as b,
  v as oe,
} from "./emoticonbutton.js";
import {
  $m as x,
  Ah as S,
  Cs as C,
  Dh as w,
  Ef as T,
  Eh as E,
  Gp as se,
  Gs as ce,
  Il as le,
  Is as ue,
  Ks as D,
  Lf as de,
  Mh as O,
  Oh as k,
  Ph as A,
  Qm as j,
  Rf as fe,
  Sf as M,
  Sm as pe,
  Th as N,
  Us as me,
  Yh as he,
  Yo as P,
  Zd as F,
  am as I,
  cc as ge,
  dc as _e,
  dm as L,
  fm as R,
  hs as z,
  jh as B,
  kh as V,
  lc as ve,
  pm as ye,
  tf as H,
  uc as be,
  xu as U,
} from "./main.js";
import { n as xe, t as Se } from "./textfilterstore.js";
import { l as Ce } from "./broadcast_embeddable2.js";
import { t as we } from "./partnereventslogin.js";
import { t as Te } from "./giveawaystore.js";
var W = e(o()),
  G = e(t()),
  K = e(i(), 1),
  Ee = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.unique_name || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Request`;
    }
  },
  De = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_CreateBroadcastChannel_Response`;
    }
  },
  Oe = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.unique_name || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Request`;
    }
  },
  ke = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            unique_name: { n: 2, br: k.readString, bw: O.writeString },
            steamid: {
              n: 3,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelID_Response`;
    }
  },
  Ae = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            name: { n: 2, br: k.readString, bw: O.writeString },
            language: { n: 3, br: k.readString, bw: O.writeString },
            headline: { n: 4, br: k.readString, bw: O.writeString },
            summary: { n: 5, br: k.readString, bw: O.writeString },
            avatar_hash: { n: 6, br: k.readString, bw: O.writeString },
            schedule: { n: 7, br: k.readString, bw: O.writeString },
            rules: { n: 8, br: k.readString, bw: O.writeString },
            panels: { n: 9, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Request`;
    }
  },
  je = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelProfile_Response`;
    }
  },
  Me = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Request`;
    }
  },
  Ne = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.unique_name || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unique_name: { n: 1, br: k.readString, bw: O.writeString },
            owner_steamid: {
              n: 2,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            name: { n: 3, br: k.readString, bw: O.writeString },
            language: { n: 4, br: k.readString, bw: O.writeString },
            headline: { n: 5, br: k.readString, bw: O.writeString },
            summary: { n: 6, br: k.readString, bw: O.writeString },
            schedule: { n: 7, br: k.readString, bw: O.writeString },
            rules: { n: 8, br: k.readString, bw: O.writeString },
            panels: { n: 9, br: k.readString, bw: O.writeString },
            is_partnered: { n: 10, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelProfile_Response`;
    }
  },
  Pe = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            image_type: { n: 2, br: k.readEnum, bw: O.writeEnum },
            image_index: { n: 3, br: k.readUint32, bw: O.writeUint32 },
            image_width: { n: 4, br: k.readUint32, bw: O.writeUint32 },
            image_height: { n: 5, br: k.readUint32, bw: O.writeUint32 },
            file_size: { n: 6, br: k.readUint32, bw: O.writeUint32 },
            file_extension: { n: 7, br: k.readString, bw: O.writeString },
            file_hash: { n: 8, br: k.readString, bw: O.writeString },
            undo: { n: 9, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Request`;
    }
  },
  Fe = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.replace_image_hash || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            replace_image_hash: { n: 1, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelImage_Response`;
    }
  },
  Ie = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            image_types: {
              n: 2,
              r: !0,
              q: !0,
              br: k.readEnum,
              pbr: k.readPackedEnum,
              bw: O.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Request`;
    }
  },
  Le = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.images || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: Re, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response`;
    }
  },
  Re = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.image_type || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_type: { n: 1, br: k.readEnum, bw: O.writeEnum },
            image_path: { n: 2, br: k.readString, bw: O.writeString },
            image_index: { n: 3, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelImages_Response_Images`;
    }
  },
  ze = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Request`;
    }
  },
  Be = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.links || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: Ve, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response`;
    }
  },
  Ve = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link_index || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            url: { n: 2, br: k.readString, bw: O.writeString },
            link_description: { n: 3, br: k.readString, bw: O.writeString },
            left: { n: 4, br: k.readUint32, bw: O.writeUint32 },
            top: { n: 5, br: k.readUint32, bw: O.writeUint32 },
            width: { n: 6, br: k.readUint32, bw: O.writeUint32 },
            height: { n: 7, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelLinks_Response_Links`;
    }
  },
  He = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            links: { n: 2, c: Ue, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request`;
    }
  },
  Ue = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link_index || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link_index: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            url: { n: 2, br: k.readString, bw: O.writeString },
            link_description: { n: 3, br: k.readString, bw: O.writeString },
            left: { n: 4, br: k.readUint32, bw: O.writeUint32 },
            top: { n: 5, br: k.readUint32, bw: O.writeUint32 },
            width: { n: 6, br: k.readUint32, bw: O.writeUint32 },
            height: { n: 7, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Request_Links`;
    }
  },
  We = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetBroadcastChannelLinkRegions_Response`;
    }
  },
  Ge = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Request`;
    }
  },
  Ke = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_live || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_live: { n: 1, br: k.readBool, bw: O.writeBool },
            is_disabled: { n: 2, br: k.readBool, bw: O.writeBool },
            appid: { n: 3, br: k.readUint32, bw: O.writeUint32 },
            viewers: { n: 4, br: k.readUint64String, bw: O.writeUint64String },
            views: { n: 5, br: k.readUint64String, bw: O.writeUint64String },
            broadcaster_steamid: {
              n: 6,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            thumbnail_url: { n: 7, br: k.readString, bw: O.writeString },
            followers: {
              n: 8,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            subscribers: {
              n: 9,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            unique_name: { n: 10, br: k.readString, bw: O.writeString },
            broadcast_session_id: {
              n: 11,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelStatus_Response`;
    }
  },
  q = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            unique_name: { n: 2, br: k.readString, bw: O.writeString },
            name: { n: 3, br: k.readString, bw: O.writeString },
            appid: { n: 4, br: k.readUint32, bw: O.writeUint32 },
            viewers: { n: 5, br: k.readUint64String, bw: O.writeUint64String },
            views: { n: 6, br: k.readUint64String, bw: O.writeUint64String },
            thumbnail_url: { n: 7, br: k.readString, bw: O.writeString },
            followers: {
              n: 8,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            headline: { n: 9, br: k.readString, bw: O.writeString },
            avatar_url: { n: 10, br: k.readString, bw: O.writeString },
            broadcaster_steamid: {
              n: 11,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            subscribers: {
              n: 12,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            background_url: { n: 13, br: k.readString, bw: O.writeString },
            is_featured: { n: 14, br: k.readBool, bw: O.writeBool },
            is_disabled: { n: 15, br: k.readBool, bw: O.writeBool },
            is_live: { n: 16, br: k.readBool, bw: O.writeBool },
            language: { n: 17, br: k.readString, bw: O.writeString },
            reports: { n: 18, br: k.readUint32, bw: O.writeUint32 },
            is_partnered: { n: 19, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `GetBroadcastChannelEntry`;
    }
  },
  qe = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Request`;
    }
  },
  Je = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetFollowedChannels_Response`;
    }
  },
  Ye = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Request`;
    }
  },
  Xe = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSubscribedChannels_Response`;
    }
  },
  Ze = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            undo: { n: 2, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Request`;
    }
  },
  Qe = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_followed || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_followed: { n: 1, br: k.readBool, bw: O.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_FollowBroadcastChannel_Response`;
    }
  },
  $e = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Request`;
    }
  },
  et = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_subscribed || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_subscribed: { n: 1, br: k.readBool, bw: O.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SubscribeBroadcastChannel_Response`;
    }
  },
  tt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            reason: { n: 2, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Request`;
    }
  },
  nt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ReportBroadcastChannel_Response`;
    }
  },
  rt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Request`;
    }
  },
  it = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_followed || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_followed: { n: 1, br: k.readBool, bw: O.writeBool },
            is_subscribed: { n: 2, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelInteraction_Response`;
    }
  },
  at = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            name: { n: 2, br: k.readString, bw: O.writeString },
            image: { n: 3, br: k.readString, bw: O.writeString },
            viewers: { n: 4, br: k.readUint64String, bw: O.writeUint64String },
            channels: { n: 5, c: q, r: !0, q: !0 },
            release_date: { n: 6, br: k.readString, bw: O.writeString },
            developer: { n: 7, br: k.readString, bw: O.writeString },
            publisher: { n: 8, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_Game`;
    }
  },
  ot = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            algorithm: { n: 2, br: k.readEnum, bw: O.writeEnum },
            count: { n: 3, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetGames_Request`;
    }
  },
  st = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: at, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetGames_Response`;
    }
  },
  ct = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.algorithm || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            algorithm: { n: 1, br: k.readEnum, bw: O.writeEnum },
            count: { n: 2, br: k.readUint32, bw: O.writeUint32 },
            appid: { n: 3, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChannels_Request`;
    }
  },
  lt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChannels_Response`;
    }
  },
  ut = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Request`;
    }
  },
  dt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasters || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasters: { n: 1, c: ft, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response`;
    }
  },
  ft = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            name: { n: 2, br: k.readString, bw: O.writeString },
            rtmp_token: { n: 3, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster`;
    }
  },
  pt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.issuer_steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            time_expires: { n: 3, br: k.readString, bw: O.writeString },
            permanent: { n: 4, br: k.readBool, bw: O.writeBool },
            name: { n: 5, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ChatBan`;
    }
  },
  mt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            chatter_steamid: {
              n: 2,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            duration: { n: 3, br: k.readUint32, bw: O.writeUint32 },
            permanent: { n: 4, br: k.readBool, bw: O.writeBool },
            undo: { n: 5, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Request`;
    }
  },
  ht = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatBan_Response`;
    }
  },
  gt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Request`;
    }
  },
  _t = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: pt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChatBans_Response`;
    }
  },
  vt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            moderator_steamid: {
              n: 2,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            undo: { n: 3, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Request`;
    }
  },
  yt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddChatModerator_Response`;
    }
  },
  bt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Request`;
    }
  },
  xt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            name: { n: 2, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_ChatModerator`;
    }
  },
  St = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: xt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetChatModerators_Response`;
    }
  },
  Ct = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            word: { n: 2, br: k.readString, bw: O.writeString },
            undo: { n: 3, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Request`;
    }
  },
  wt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AddWordBan_Response`;
    }
  },
  Tt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Request`;
    }
  },
  Et = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
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
              br: k.readString,
              bw: O.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetWordBans_Response`;
    }
  },
  Dt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_JoinChat_Request`;
    }
  },
  Ot = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.chat_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            view_url_template: { n: 2, br: k.readString, bw: O.writeString },
            flair_group_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: k.readUint64String,
              pbr: k.readPackedUint64String,
              bw: O.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_JoinChat_Response`;
    }
  },
  kt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.term || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { term: { n: 1, br: k.readString, bw: O.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_Search_Request`;
    }
  },
  At = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_Search_Response`;
    }
  },
  jt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Request`;
    }
  },
  Mt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stream_live_email || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: k.readBool, bw: O.writeBool },
            stream_live_notification: { n: 2, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetSteamTVUserSettings_Response`;
    }
  },
  Nt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stream_live_email || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stream_live_email: { n: 1, br: k.readBool, bw: O.writeBool },
            stream_live_notification: { n: 2, br: k.readBool, bw: O.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Request`;
    }
  },
  Pt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_SetSteamTVUserSettings_Response`;
    }
  },
  Ft = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Request`;
    }
  },
  It = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetMyBroadcastChannels_Response`;
    }
  },
  Lt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasts || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { broadcasts: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Takeover`;
    }
  },
  Rt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasts || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: q, r: !0, q: !0 },
            appid: { n: 2, br: k.readUint32, bw: O.writeUint32 },
            title: { n: 3, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_SingleGame`;
    }
  },
  zt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            game_name: { n: 2, br: k.readString, bw: O.writeString },
            broadcast: { n: 3, c: q },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `GameListEntry`;
    }
  },
  Bt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.entries || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: zt, r: !0, q: !0 },
            title: { n: 2, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_GameList`;
    }
  },
  Vt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasts || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: q, r: !0, q: !0 },
            title: { n: 2, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_QuickExplore`;
    }
  },
  Ht = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcasts || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcasts: { n: 1, c: q, r: !0, q: !0 },
            title: { n: 2, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_ConveyorBelt`;
    }
  },
  Ut = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: q },
            title: { n: 2, br: k.readString, bw: O.writeString },
            chat_group_id: {
              n: 3,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_WatchParty`;
    }
  },
  Wt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast: { n: 1, c: q },
            title: { n: 2, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Developer`;
    }
  },
  Gt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.title || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { title: { n: 1, br: k.readString, bw: O.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageTemplate_Event`;
    }
  },
  Kt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.template_type || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            template_type: { n: 1, br: k.readEnum, bw: O.writeEnum },
            takeover: { n: 2, c: Lt },
            single_game: { n: 3, c: Rt },
            game_list: { n: 4, c: Bt },
            quick_explore: { n: 5, c: Vt },
            conveyor_belt: { n: 6, c: Ht },
            watch_party: { n: 7, c: Ut },
            developer: { n: 8, c: Wt },
            event: { n: 9, c: Gt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_HomePageContentRow`;
    }
  },
  qt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Request`;
    }
  },
  Jt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rows || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { rows: { n: 1, c: Kt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetHomePageContents_Response`;
    }
  },
  Yt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Request`;
    }
  },
  Xt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.broadcast_clip_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            channel_id: {
              n: 2,
              br: k.readUint64String,
              bw: O.writeUint64String,
            },
            app_id: { n: 3, br: k.readUint32, bw: O.writeUint32 },
            broadcaster_steamid: {
              n: 4,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            creator_steamid: {
              n: 5,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            video_description: { n: 6, br: k.readString, bw: O.writeString },
            live_time: { n: 7, br: k.readUint32, bw: O.writeUint32 },
            length_ms: { n: 8, br: k.readUint32, bw: O.writeUint32 },
            thumbnail_path: { n: 9, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_BroadcastClipInfo`;
    }
  },
  Zt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clips || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clips: { n: 1, c: Xt, r: !0, q: !0 },
            thumbnail_host: { n: 2, br: k.readString, bw: O.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_GetBroadcastChannelClips_Response`;
    }
  },
  Qt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cheer_type || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cheer_type: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            cheer_amount: { n: 2, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AppCheer_SingleCheerType`;
    }
  },
  $t = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.app_id || N(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: k.readUint32, bw: O.writeUint32 },
            cheer_target_id: {
              n: 2,
              br: k.readFixed64String,
              bw: O.writeFixed64String,
            },
            cheers: { n: 3, c: Qt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AppCheer_Request`;
    }
  },
  en = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.aggregation_delay_ms || N(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            aggregation_delay_ms: { n: 1, br: k.readUint32, bw: O.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= V(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return B(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return E(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamTV_AppCheer_Response`;
    }
  },
  J;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamTV.CreateBroadcastChannel#1`, x(Ee, t, n), De, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.CreateBroadcastChannel = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelID#1`, x(Oe, t, n), ke, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelID = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelProfile#1`, x(Ae, t, n), je, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelProfile = r;
  function i(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelProfile#1`, x(Me, t, n), Ne, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelProfile = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamTV.SetBroadcastChannelImage#1`, x(Pe, t, n), Fe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetBroadcastChannelImage = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelImages#1`, x(Ie, t, n), Le, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelImages = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SteamTV.SetBroadcastChannelLinkRegions#1`,
      x(He, t, n),
      We,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetBroadcastChannelLinkRegions = s;
  function c(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelLinks#1`, x(ze, t, n), Be, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelLinks = c;
  function l(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelBroadcasters#1`,
      x(ut, t, n),
      dt,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelBroadcasters = l;
  function u(e, t, n) {
    return e.SendMsg(`SteamTV.GetFollowedChannels#1`, x(qe, t, n), Je, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetFollowedChannels = u;
  function d(e, t, n) {
    return e.SendMsg(`SteamTV.GetSubscribedChannels#1`, x(Ye, t, n), Xe, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSubscribedChannels = d;
  function f(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelStatus#1`, x(Ge, t, n), Ke, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelStatus = f;
  function p(e, t, n) {
    return e.SendMsg(`SteamTV.FollowBroadcastChannel#1`, x(Ze, t, n), Qe, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.FollowBroadcastChannel = p;
  function m(e, t, n) {
    return e.SendMsg(`SteamTV.SubscribeBroadcastChannel#1`, x($e, t, n), et, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SubscribeBroadcastChannel = m;
  function h(e, t, n) {
    return e.SendMsg(`SteamTV.GetBroadcastChannelClips#1`, x(Yt, t, n), Zt, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetBroadcastChannelClips = h;
  function g(e, t, n) {
    return e.SendMsg(`SteamTV.ReportBroadcastChannel#1`, x(tt, t, n), nt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.ReportBroadcastChannel = g;
  function _(e, t, n) {
    return e.SendMsg(
      `SteamTV.GetBroadcastChannelInteraction#1`,
      x(rt, t, n),
      it,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetBroadcastChannelInteraction = _;
  function v(e, t, n) {
    return e.SendMsg(`SteamTV.GetGames#1`, x(ot, t, n), st, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetGames = v;
  function ee(e, t, n) {
    return e.SendMsg(`SteamTV.GetChannels#1`, x(ct, t, n), lt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetChannels = ee;
  function y(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatBan#1`, x(mt, t, n), ht, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatBan = y;
  function te(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatBans#1`, x(gt, t, n), _t, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetChatBans = te;
  function ne(e, t, n) {
    return e.SendMsg(`SteamTV.AddChatModerator#1`, x(vt, t, n), yt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.AddChatModerator = ne;
  function re(e, t, n) {
    return e.SendMsg(`SteamTV.GetChatModerators#1`, x(bt, t, n), St, {
      bConstMethod: !0,
      ePrivilege: 0,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.GetChatModerators = re;
  function ie(e, t, n) {
    return e.SendMsg(`SteamTV.AddWordBan#1`, x(Ct, t, n), wt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.AddWordBan = ie;
  function ae(e, t, n) {
    return e.SendMsg(`SteamTV.GetWordBans#1`, x(Tt, t, n), Et, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetWordBans = ae;
  function b(e, t, n) {
    return e.SendMsg(`SteamTV.JoinChat#1`, x(Dt, t, n), Ot, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.JoinChat = b;
  function oe(e, t, n) {
    return e.SendMsg(`SteamTV.Search#1`, x(kt, t, n), At, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.Search = oe;
  function S(e, t, n) {
    return e.SendMsg(`SteamTV.GetSteamTVUserSettings#1`, x(jt, t, n), Mt, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetSteamTVUserSettings = S;
  function C(e, t, n) {
    return e.SendMsg(`SteamTV.SetSteamTVUserSettings#1`, x(Nt, t, n), Pt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetSteamTVUserSettings = C;
  function w(e, t, n) {
    return e.SendMsg(`SteamTV.GetMyBroadcastChannels#1`, x(Ft, t, n), It, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetMyBroadcastChannels = w;
  function T(e, t, n) {
    return e.SendMsg(`SteamTV.GetHomePageContents#1`, x(qt, t, n), Jt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetHomePageContents = T;
  function E(e, t, n) {
    return e.SendMsg(`SteamTV.AppCheer#1`, x($t, t, n), en, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AppCheer = E;
})((J ||= {}));
var tn = 4,
  nn = 500,
  rn = 10,
  Y = class e {
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
      return n || ((n = new X()), this.m_mapChats.set(e || t, n)), n;
    }
    static s_Singleton;
    static Get() {
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
    constructor() {
      a(this);
    }
  };
T([s], Y.prototype, `m_mapChats`, void 0);
var X = class {
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
    a(this), (this.m_steamInterface = this.CreateSteamInterface());
  }
  InitTextFilter() {
    this.m_textFilterStore = new Se({ BIsFriend: xe() });
    let e = 0;
    R.steamid !== `` && (e = new pe(R.steamid).GetAccountID()),
      this.m_textFilterStore.Init(e, null, new se());
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
      (de() ?? Y.Get().GetCMInterface()) ||
      fe(new ye(L.WEBAPI_BASE_URL, R.webapi_token))
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
      (this.m_strUserSteamID = R.steamid),
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
        let e = j.Init(d);
        e.SetBodyFields({
          chat_id: this.m_ulChatID,
          message: t,
          instance_id: this.m_unInstanceID.toString(),
        });
        let n = await g.PostChatMessage(
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
              ? F(`#BroadcastChat_YouMuted`)
              : r.result == 84
                ? F(`#BroadcastChat_Cooldown`, r.cooldown_time_seconds ?? 0)
                : F(`#BroadcastChat_FailedToSendMsg`, t)),
            this.m_rgChatMessages.push({
              type: v.Error,
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
          type: v.Error,
          msg: F(`#BroadcastChat_FailedToSendMsg`, t),
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
          sessionid: I(),
          notoken: 1,
        },
        r = await G.default.get(`${L.CHAT_BASE_URL}broadcast/getchatinfo`, {
          params: t,
          withCredentials: !0,
          cancelToken: e?.token,
        });
      (e && e.token.reason) ||
        n(() => {
          let e = r.data;
          (this.m_strChatURL = e.view_url_template ?? ``),
            (this.m_ulChatID = e.chat_id ?? ``),
            (this.m_strFlairGroupID = e.flair_group_ids?.[0] ?? ``),
            e.blocked && console.log(`User is blocked from chat`),
            e.steamid && (this.m_strUserSteamID = e.steamid),
            e.emoticons && this.SetOwnedEmoticons(e.emoticons),
            (this.m_bHasAddedWelcomeChat ||=
              (this.m_rgChatMessages.push({
                type: v.Notification,
                msg: F(`#BroadcastChat_DefaultMessage`),
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
            (this.m_chatScheduledFunc = new M()),
            this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
        });
    } catch (e) {
      console.error(e), console.log(`Failed to get chat info!`);
    }
  }
  async JoinChannelChat() {
    try {
      let e = j.Init(Dt);
      e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
      let t = await J.JoinChat(this.m_steamInterface.GetServiceTransport(), e),
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
          type: v.Notification,
          msg: F(`#BroadcastChat_DefaultMessage`),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        }),
        (this.m_bHasAddedWelcomeChat = !0),
        (this.m_chatScheduledFunc = new M()),
        this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
    } catch (e) {
      console.error(e), console.log(`Failed to join chat!`);
    }
  }
  async FetchChatModerators() {
    let e = j.Init(bt);
    e.SetBodyFields({ broadcast_channel_id: this.m_ulBroadcastChannelID });
    let t = (
        await J.GetChatModerators(
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
      let n = (await G.default.get(t, { params: e })).data;
      this.m_cConsecutiveErrors = 0;
      let r = n.messages
        .map((e) => ({ ...e, type: v.Chat, client_ts: Number(new Date()) }))
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
              ? F(`#BroadcastChat_YouMuted`, e.persona_name)
              : F(`#BroadcastChat_UserMuted`, e.persona_name);
          this.m_rgChatMessages.push({
            type: v.Notification,
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
        (this.m_nNudgeFactorMS += rn),
        this.m_cConsecutiveErrors >= tn)
      ) {
        if (this.m_tsFirstRequest == null) {
          this.m_rgChatMessages.push({
            type: v.Error,
            msg: F(`#BroadcastChat_UnableToJoinChat`),
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
      this.m_chatScheduledFunc?.Schedule(nn, this.RequestLoop);
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
        r.append(`sessionid`, I());
      try {
        await G.default.post(
          `${L.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
          r,
        ),
          this.m_mapBroadcastModeratorUsers.set(e, t);
        let i = F(
          t
            ? `#BroadcastChat_AddedModerator`
            : `#BroadcastChat_RemovedModerator`,
          n,
        );
        this.m_rgChatMessages.push({ type: v.Notification, msg: i });
      } catch {
        let e = F(
          t
            ? `#BroadcastChat_AddModeratorFailed`
            : `#BroadcastChat_RemoveModeratorFailed`,
          n,
        );
        this.m_rgChatMessages.push({ type: v.Error, msg: e });
      }
    }
  }
  async UpdateUserChatBan(e, t, n, r, i, a) {
    let o = this.m_ulBroadcastSteamID,
      s = this.m_strUserSteamID;
    if (this.m_ulBroadcastChannelID) {
      let t = j.Init(mt);
      t.SetBodyFields({
        broadcast_channel_id: this.m_ulBroadcastChannelID,
        chatter_steamid: e,
        duration: n * 3600,
        permanent: r,
        undo: a,
      }),
        await J.AddChatBan(this.m_steamInterface.GetServiceTransport(), t);
    } else {
      let a = new FormData();
      a.append(`broadcaststeamid`, o),
        a.append(`issuersteamid`, s),
        a.append(`chattersteamid`, e),
        a.append(`bantype`, t),
        a.append(`duration`, n.toString()),
        a.append(`perm`, r ? `1` : `0`),
        a.append(`sessionid`, I());
      try {
        await G.default.post(
          `${L.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
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
        let t = j.Init(m);
        t.SetBodyFields({
          chat_id: this.m_ulChatID,
          user_steamid: e,
          muted: !0,
        }),
          await g.MuteBroadcastChatUser(
            this.m_steamInterface.GetServiceTransport(),
            t,
          );
      } catch {
        n &&
          (this.m_rgChatMessages.push({
            type: v.Error,
            msg: F(`#BroadcastChat_UserMuteFailed`, t),
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
        type: v.Notification,
        msg: F(`#BroadcastChat_UserMutedLocal`, t),
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
          let n = j.Init(m);
          n.SetBodyFields({
            chat_id: this.m_ulChatID,
            user_steamid: e,
            muted: !1,
          }),
            await g.MuteBroadcastChatUser(
              this.m_steamInterface.GetServiceTransport(),
              n,
            ),
            this.m_rgChatMessages.push({
              type: v.Notification,
              msg: F(`#BroadcastChat_UserUnmutedLocal`, t),
              client_ts: Number(new Date()),
              instance_id: this.m_unInstanceID,
              in_game: !1,
              persona_name: ``,
              steamid: ``,
            });
        } catch {
          this.m_rgChatMessages.push({
            type: v.Error,
            msg: F(`#BroadcastChat_UserUnmuteFailed`, t),
            client_ts: Number(new Date()),
            instance_id: this.m_unInstanceID,
            in_game: !1,
            persona_name: ``,
            steamid: ``,
          });
        }
      else
        this.m_rgChatMessages.push({
          type: v.Notification,
          msg: F(`#BroadcastChat_UserUnmutedLocal`, t),
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
        let t = j.Init(h);
        t.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: e }),
          await g.RemoveUserChatText(
            this.m_steamInterface.GetServiceTransport(),
            t,
          );
      } catch {
        this.m_rgChatMessages.push({
          type: v.Error,
          msg: F(`#BroadcastChat_RemoveMessagesFailed`, t),
          client_ts: Number(new Date()),
          instance_id: this.m_unInstanceID,
          in_game: !1,
          persona_name: ``,
          steamid: ``,
        });
      }
  }
  async UpdateChatMessageFlair(e) {
    let t = j.Init(_);
    t.SetBodyFields({
      chat_id: this.m_ulChatID,
      flair: `^${this.m_strFlairGroupID}^:${e}:`,
    }),
      await g.UpdateChatMessageFlair(
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
T([s], X.prototype, `m_mapChannelModeratorUsers`, void 0),
  T([s], X.prototype, `m_mapBroadcastModeratorUsers`, void 0),
  T([s], X.prototype, `m_nRateLimitSeconds`, void 0),
  T([s], X.prototype, `m_bRateLimited`, void 0),
  T([s], X.prototype, `m_rgChatMessages`, void 0),
  T([s], X.prototype, `m_latestAnnouncement`, void 0),
  T([A], X.prototype, `FetchChatModerators`, null),
  T([A], X.prototype, `RequestLoop`, null),
  T([A], X.prototype, `MuteUserForSession`, null);
var an = `u-hyk5J5tIY-`,
  on = `doqBDS-zTtg-`,
  sn = `DHv28C3kLqY-`,
  Z = c(),
  cn = () =>
    (0, Z.jsx)(`div`, {
      className: an,
      children: (0, Z.jsx)(`div`, { className: on }),
    }),
  ln = () =>
    (0, Z.jsx)(`div`, {
      className: an,
      children: (0, Z.jsx)(`div`, { className: sn }),
    }),
  un = `Utigx2dvTSs-`,
  dn = `IPiWi3ba7Oc-`,
  fn = `Tt1HS5eK4UQ-`,
  pn = `_2NN20ePjOoE-`,
  mn = `Q5sAYcjkGuw-`,
  hn = `JhPLxwFuvY8-`,
  gn = `-zOT4HlZFNc-`,
  _n = `NFc5gI--APM-`,
  vn = `gMm9gxp-VwY-`,
  yn = `_9JbCPa5peFE-`,
  bn = `jhZ68t8aO0U-`,
  xn = `cF6FbGIaOso-`,
  Sn = `uWbWS4Xl7nU-`,
  Cn = `_0bHpv5DDjVk-`,
  wn = `GJr1kPqad-w-`,
  Tn = `_8whJ5F1f7no-`,
  En = `ngi9yWTTH6Q-`,
  Q = `O0WGKKnt-b0-`,
  Dn = `n4yzVjIUqg0-`,
  On = `gB1ggcMqZ4U-`,
  kn = `h1DcT5FSiVw-`,
  An = `aE9NemwHX3U-`,
  jn = `-LW3HYdhtwg-`,
  Mn = `UfXKJfvB2aU-`,
  Nn = `NjuVylscv-c-`,
  Pn = `fQEvRYMgKZ8-`,
  Fn = `Jz1BUHL6vfU-`,
  In = `qUAIeS1LipI-`,
  Ln = `hCW7GiiXdrk-`,
  Rn = `gmY72gO6Jbk-`;
function zn(e) {
  let { latestAnnouncement: t } = e;
  return t?.type == `giveaway_draw`
    ? (0, Z.jsx)(Bn, { latestWinner: t })
    : null;
}
function Bn(e) {
  let {
      latestWinner: t,
      className: n,
      strActionButton: r,
      strActionClassname: i,
    } = e,
    a = t.winners_info ?? [],
    o = a.length > 0 ? a[0].accountid : 0,
    [s, c] = W.useState(o),
    l = ue(`${f.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`),
    u = ue(`${f.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`);
  he(!!t.giveaway_gid, `Giveaway draw announcement is missing its giveaway`, t);
  let d = Te(t.giveaway_gid),
    p = d.bLoadingGiveawayInfo || d.closed ? null : d.seconds_until_drawing,
    m = o === R.accountid;
  W.useEffect(() => {
    s != o && setTimeout(() => c(o), 1500);
  }, [o, s]);
  let h =
    a.length > 0 && a[0].persona
      ? a[0].persona
      : F(`#GA2022_UnknownPersonaName`);
  return (0, Z.jsx)(C, {
    href: `https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022`,
    className: n,
    children: (0, Z.jsxs)(`div`, {
      className: U({ [An]: !0, [jn]: s === o }),
      children: [
        (0, Z.jsx)(`div`, {
          className: Nn,
          children: (0, Z.jsx)(`img`, { className: Pn, src: l }),
        }),
        (0, Z.jsxs)(`div`, {
          className: Mn,
          children: [
            s !== o &&
              (0, Z.jsx)(`div`, {
                className: U(`l-AUoGdZDTw-`),
                children: H(
                  `#GA2022_Congrats_Deck_Unknown`,
                  (0, Z.jsx)(`br`, {}),
                ),
              }),
            s === o &&
              (0, Z.jsx)(`div`, {
                className: U(`l-AUoGdZDTw-`, `-LW3HYdhtwg-`),
                children: H(
                  m
                    ? `#GA2022_Congrats_Deck_Me`
                    : `#GA2022_Congrats_Deck_OTher`,
                  h,
                  (0, Z.jsx)(`br`, {}),
                ),
              }),
            !!(p && p > 0) &&
              (0, Z.jsx)(`div`, {
                className: `B7DECy1bqvs-`,
                children: H(`#GA2022_Congrats_NextDraw`, p),
              }),
          ],
        }),
        (0, Z.jsx)(`img`, { className: Fn, src: u }),
        !!r &&
          (0, Z.jsx)(`div`, {
            className: i,
            children: m ? F(`#GA2022_YouWonNextSteps`) : r,
          }),
      ],
    }),
  });
}
function Vn(e, t) {
  let [n, r] = l(() => [
      t?.steamid,
      t?.steamid ? ee.GetBroadcast(t.steamid)?.m_ulBroadcastID : void 0,
    ]),
    [i, a] = W.useState(null);
  W.useEffect(() => {
    let e = null;
    return (
      n &&
        ((e = Y.Get().GetOrCreateChat(r ?? ``, n)),
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
function Hn(e) {
  let { gidGiveaway: t, stream: n } = e,
    r = Vn(t, n),
    i = u(`GameAwardDrop2022`),
    a = null,
    o = Ln;
  return (
    R.logged_in
      ? i?.registered
        ? ((a = F(`#GA2022_AlreadyRegistered`)), (o = Rn))
        : (a = F(`#GA2022_RegisterToWin`))
      : (a = F(`#GA2022_RegisterLoginToWin`)),
    r
      ? (0, Z.jsx)(Bn, {
          latestWinner: r,
          className: In,
          strActionButton: a,
          strActionClassname: o,
        })
      : null
  );
}
var Un = RegExp(`ː([^ː]*)ː`, `g`),
  Wn = RegExp(
    `^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)`,
    `i`,
  );
function Gn(e, t, n) {
  return n
    ? `presenter`
    : t.GetBroadcastSteamID() === e
      ? `broadcaster`
      : t.BIsUserBroadcastModerator(e)
        ? `moderator`
        : ``;
}
var Kn = (e) => {
    let { userType: t, msg: n, presenterInfo: r } = e;
    if (t === `presenter` && r)
      return (0, Z.jsx)(`span`, {
        children: (0, Z.jsx)(p, {
          name: r.name ?? ``,
          title: r.title,
          photo: r.photo,
          company: r.company ?? ``,
          bioString: r.bio,
          children: (0, Z.jsx)(`a`, {
            className: U(mn, void 0),
            href: L.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
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
        (0, Z.jsx)(`span`, {
          children: (0, Z.jsx)(`a`, {
            className: U(mn, e),
            href: L.COMMUNITY_BASE_URL + `profiles/` + n.steamid,
            "data-miniprofile": `s` + n.steamid,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: n.persona_name,
          }),
        })
      );
    }
  },
  qn = (e) => {
    switch (e.userType) {
      case `presenter`:
        return (0, Z.jsx)(z, {
          toolTipContent: F(`#BroadcastChat_Role_Presenter_ttip`),
          children: (0, Z.jsx)(`span`, {
            className: Q,
            children: (0, Z.jsx)(ve, {}),
          }),
        });
      case `moderator`:
        return (0, Z.jsx)(z, {
          toolTipContent: F(`#BroadcastChat_Role_Moderatorr_ttip`),
          children: (0, Z.jsx)(`span`, {
            className: Q,
            children: (0, Z.jsx)(be, {}),
          }),
        });
      case `broadcaster`:
        return (0, Z.jsx)(z, {
          toolTipContent: F(`#BroadcastChat_Role_Broadcaster_ttip`),
          children: (0, Z.jsx)(`span`, {
            className: Q,
            children: (0, Z.jsx)(ge, {}),
          }),
        });
      default:
        return null;
    }
  },
  $ = class extends W.Component {
    constructor(e) {
      super(e), a(this);
    }
    m_chat = void 0;
    messagesContainer = W.createRef();
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
      let e = Y.Get().GetOrCreateChat(
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
      return !!e.match(Wn);
    }
    AddLinksEmoticons(e, t) {
      t && this.m_chat?.GetUserEmoticons();
      let n = e.split(Un),
        r = [];
      for (let e = 0; e < n.length; e += 1)
        e % 2 == 1
          ? r.push((0, Z.jsx)(oe, { emoticon: n[e], large: !0 }, e))
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
      if (!n || t.type !== v.Chat) return null;
      let r = [],
        i = n.IsUserBroadcaster(n.GetUserSteamID()),
        a = n.BIsUserBroadcastModerator(n.GetUserSteamID());
      return (
        (R && R.is_support) || i || a
          ? r.push(
              (0, Z.jsx)(
                D,
                {
                  onSelected: () =>
                    n.RemoveUserMessagesServer(t.steamid, t.persona_name),
                  children: F(`#BroadcastChat_RemoveMessages`),
                },
                `remove`,
              ),
              (0, Z.jsx)(
                D,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 12, !1, t.persona_name),
                  children: F(`#BroadcastChat_half_Mute`),
                },
                `updatebanh`,
              ),
              (0, Z.jsx)(
                D,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 24, !1, t.persona_name),
                  children: F(`#BroadcastChat_day_Mute`),
                },
                `updateband`,
              ),
              (0, Z.jsx)(
                D,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 168, !1, t.persona_name),
                  children: F(`#BroadcastChat_week_Mute`),
                },
                `updatebanw`,
              ),
              (0, Z.jsx)(
                D,
                {
                  onSelected: () =>
                    n.UpdateUserChatBan(t.steamid, 1, 0, !0, t.persona_name),
                  children: F(`#BroadcastChat_perm_Mute`),
                },
                `updatebanp`,
              ),
              (0, Z.jsx)(
                D,
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
                  children: F(`#BroadcastChat_Unmute`),
                },
                `removeban`,
              ),
            )
          : n.IsUserMutedLocally(t.steamid)
            ? r.push(
                (0, Z.jsx)(
                  D,
                  {
                    onSelected: () =>
                      n.UnmuteUserForSession(t.steamid, t.persona_name),
                    children: F(`#BroadcastChat_UnmuteLocal`),
                  },
                  `unmuteuser`,
                ),
              )
            : r.push(
                (0, Z.jsx)(
                  D,
                  {
                    onSelected: () =>
                      n.MuteUserForSession(t.steamid, t.persona_name),
                    children: F(`#BroadcastChat_MuteLocal`),
                  },
                  `muteuser`,
                ),
              ),
        ((R && R.is_support) || n.IsUserBroadcaster(n.GetUserSteamID())) &&
          t.steamid &&
          (n.BIsUserBroadcastModerator(t.steamid)
            ? r.push(
                (0, Z.jsx)(
                  D,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !1,
                        t.persona_name,
                      ),
                    children: F(`#BroadcastChat_Remove_Moderator`),
                  },
                  `removemod`,
                ),
              )
            : r.push(
                (0, Z.jsx)(
                  D,
                  {
                    onSelected: () =>
                      n.UpdateBroadcastChatModerator(
                        t.steamid,
                        !0,
                        t.persona_name,
                      ),
                    children: F(`#BroadcastChat_Add_Moderator`),
                  },
                  `addmod`,
                ),
              )),
        r.length
          ? me(
              (0, Z.jsxs)(ce, {
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: Tn,
                    children: [
                      F(`#BroadcastChat_User`),
                      (0, Z.jsx)(`br`, {}),
                      (0, Z.jsx)(`span`, {
                        className: En,
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
      return e.type === v.Notification ? _n : e.type === v.Error ? vn : pn;
    }
    FormatMessage(e, t) {
      if (e.type === v.Chat) {
        let n = t ? t.FilterText(e.steamid, e.msg) : e.msg;
        return this.AddLinksEmoticons(n, !1);
      }
      return e.msg;
    }
    RenderUserChatLine(e, t, n, r) {
      let i = r?.get(t.steamid),
        a = t.type === v.Chat ? Gn(t.steamid, e, i) : ``;
      return (0, Z.jsxs)(
        `div`,
        {
          className: this.GetTypeClassName(t),
          onContextMenu: (e) => this.OnContextMenu(e, t),
          children: [
            t.type === v.Chat && (0, Z.jsx)(qn, { userType: a }),
            t.flair &&
              (0, Z.jsx)(`span`, {
                className: `xDmEH9mDo3o-`,
                children: this.AddLinksEmoticons(t.flair, !1),
              }),
            t.type === v.Chat &&
              (0, Z.jsx)(Kn, { userType: a, msg: t, presenterInfo: i }),
            t.type === v.Chat &&
              e.GetBroadcastSteamID() === t.steamid &&
              (0, Z.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${F(`#BroadcastChat_Broadcaster`)})`,
              }),
            t.type === v.Chat &&
              e.m_mapChannelModeratorUsers.get(t.steamid) &&
              (0, Z.jsx)(`span`, {
                className: `NFc5gI--APM- JhPLxwFuvY8-`,
                children: ` (${F(`#BroadcastChat_Moderator`)})`,
              }),
            (0, Z.jsxs)(`span`, {
              className: `${hn} ${this.AddLinksEmoticons(t.msg, !1).filter((e) => e && typeof e == `string`).length ? `` : gn}`,
              children: [
                t.type === v.Chat ? ` : ` : ``,
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
          ? Ce.GetPresenterMapForBroadcasterSteamID(
              this.m_chat.GetBroadcastSteamID(),
            )
          : void 0,
        c = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
      return (0, Z.jsxs)(`div`, {
        className: U(dn, `ChatPanel`),
        style: e ? { display: `none` } : void 0,
        children: [
          (0, Z.jsx)(zn, { latestAnnouncement: c }),
          n &&
            !!this.m_chat &&
            (0, Z.jsx)(Jn, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
          (0, Z.jsx)(cn, {}),
          (0, Z.jsx)(`div`, {
            className: U(`${fn} ${ne}`, `ChatMessages`),
            onScroll: this.HandleScroll,
            ref: this.messagesContainer,
            children: i && o.map((e, t) => this.RenderUserChatLine(i, e, t, s)),
          }),
          (0, Z.jsx)(ln, {}),
          !n &&
            !!this.m_chat &&
            (0, Z.jsx)(Jn, {
              oChat: this.m_chat,
              emoticonStore: this.props.emoticonStore,
              bPartnerMemberOnlyChat: t,
              onSignIn: r,
            }),
        ],
      });
    }
  };
T([s], $.prototype, `m_chat`, void 0),
  T([A], $.prototype, `StartChat`, null),
  T([A], $.prototype, `HandleScroll`, null),
  T([A], $.prototype, `OnContextMenu`, null),
  T([A], $.prototype, `RenderUserChatLine`, null),
  ($ = T([r], $));
function Jn(e) {
  let {
    oChat: t,
    emoticonStore: n,
    bPartnerMemberOnlyChat: r,
    onSignIn: i,
  } = e;
  return r && (!R?.logged_in || !R?.is_partner_member)
    ? (0, Z.jsx)($n, {})
    : R?.logged_in
      ? (0, Z.jsx)(Yn, { oChat: t, emoticonStore: n })
      : i
        ? (0, Z.jsx)(Qn, { onSignIn: i })
        : null;
}
function Yn(e) {
  let { oChat: t, emoticonStore: n } = e,
    [r, i] = W.useState(``),
    a = W.useRef(null),
    o = l(() => t.m_bRateLimited),
    s = W.useCallback(
      (e) => {
        !e.shiftKey &&
          e.charCode === 13 &&
          (t.m_bRateLimited || (t.SendMessage(r), i(``)), e.preventDefault());
      },
      [t, r],
    ),
    c = W.useCallback(
      (e, t = !1) => {
        i(r + `\u02D0${e}\u02D0`), a?.current && a.current.focus();
      },
      [r, a],
    ),
    u = () => {
      t.SendMessage(r), i(``);
    },
    d = o || r.trim().length == 0,
    f = U(re, r.length == 0 && `_4X5-n9MaD8g-`);
  return (0, Z.jsx)(`div`, {
    className: U(void 0, `ChatEntryCtn`),
    children: (0, Z.jsxs)(`div`, {
      className: U(un, `ChatEntry`),
      children: [
        (0, Z.jsxs)(`form`, {
          className: `${y}`,
          children: [
            (0, Z.jsx)(`textarea`, {
              className: ae,
              placeholder: F(`#BroadcastChat_EnterResponse`),
              onKeyPress: s,
              onChange: (e) => i(e.target.value),
              value: r,
              ref: a,
            }),
            o &&
              (0, Z.jsx)(Zn, {
                nSeconds: t.m_nRateLimitSeconds,
                bRateLimited: t.m_bRateLimited,
              }),
            (0, Z.jsx)(`button`, {
              className: f,
              title: F(`#ChatEntryButton_Submit`),
              disabled: d,
              onClick: u,
              children: (0, Z.jsx)(le, {}),
            }),
          ],
        }),
        (0, Z.jsx)(`div`, {
          style: { height: `50px` },
          className: `${ie}`,
          children: (0, Z.jsxs)(`div`, {
            className: te,
            children: [
              (0, Z.jsx)(b, {
                disabled: !1,
                OnEmoticonSelected: c,
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: n,
              }),
              (0, Z.jsx)(Xn, { ...e, textInputRef: a }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Xn(e) {
  let { oChat: t, emoticonStore: n, textInputRef: r } = e;
  return t.m_strFlairGroupID &&
    n.flair_list &&
    n.GetFlairListByGroupID(t.m_strFlairGroupID)?.length
    ? (0, Z.jsx)(b, {
        disabled: !1,
        OnEmoticonSelected: (e) => {
          t.UpdateChatMessageFlair(e), r?.current && r.current.focus();
        },
        rtLastAckedNewEmoticons: Number.MAX_VALUE,
        emoticonStore: n,
        strFlairGroupID: t.m_strFlairGroupID,
        title: F(`#ChatEntryButton_Flair`),
        buttonIcon: (0, Z.jsx)(_e, {}),
      })
    : null;
}
var Zn = class extends W.Component {
  render() {
    return (0, Z.jsx)(`div`, {
      className: yn,
      children: (0, Z.jsxs)(`div`, {
        className: bn,
        children: [
          (0, Z.jsx)(`div`, {
            className: `${Sn} ${xn}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, Z.jsx)(`div`, {
            className: `${Cn} ${xn}`,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
          (0, Z.jsx)(`div`, {
            className: wn,
            style: { animationDuration: `${this.props.nSeconds || 0}s` },
          }),
        ],
      }),
    });
  }
};
function Qn(e) {
  return (0, Z.jsx)(`div`, {
    className: Dn,
    children: (0, Z.jsx)(P, {
      onClick: e.onSignIn,
      className: U(kn),
      children: F(`#BroadcastChat_Login`),
    }),
  });
}
function $n(e) {
  return (0, Z.jsxs)(`div`, {
    className: Dn,
    children: [
      (0, Z.jsx)(`div`, {
        className: On,
        children: F(`#Broadcast_PartnerChat_Login`),
      }),
      !R.logged_in &&
        !L.IN_STEAMUI &&
        (0, Z.jsx)(P, {
          onClick: we,
          className: U(`h1DcT5FSiVw-`),
          children: F(`#Login_SignIn`),
        }),
    ],
  });
}
var er = `58px`,
  tr = `58px`,
  nr = `rYnVBBDJIz4-`,
  rr = `dsbI18mZ-Ps-`,
  ir = `dQY8CyT7Y5Y-`,
  ar = `f0G28hbeNYE-`,
  or = `EGznwOBrytk-`,
  sr = `wMy1ewxYK3I-`,
  cr = `iLleweU-ckI-`,
  lr = `WdbOLmmaXso-`,
  ur = `ov8XKFWsMMc-`,
  dr = `KcqUD5hkzyk-`,
  fr = `ECJWFclMDpk-`,
  pr = `Ku3ORKocBrQ-`,
  mr = `KkgW9CzRVMI-`,
  hr = `SObNBjtfgbU-`,
  gr = `-d8EQqzPfNs-`,
  _r = `_27mwemkqVww-`,
  vr = `FS3-jxto3Z8-`,
  yr = `twoyTg-z2n4-`,
  br = `_887-MlrXKDQ-`,
  xr = `ZfSk6AxA-Tw-`,
  Sr = `Yb1KTWt-6pE-`,
  Cr = `HbhpxnAX2Kk-`,
  wr = `vePf8-fcS4g-`,
  Tr = `QP7p0y7iNjE-`,
  Er = `xpdX0ycPNx0-`,
  Dr = `QGqVyFFAFtg-`,
  Or = `qwFxl5tJlG0-`,
  kr = `-PTMMcy5uF4-`,
  Ar = `mYXN-do7NYQ-`,
  jr = `rIfaYmVdzDA-`,
  Mr = `hgFSY87Dsxg-`,
  Nr = `u-lLy1wH1Is-`,
  Pr = `pllfTQu8jag-`,
  Fr = `GsIDuGodBUQ-`,
  Ir = `_2IUJG6CdnFA-`,
  Lr = `Jvoz-8Cocp4-`,
  Rr = `zuLP0piEwuA-`,
  zr = `eR0CdHz8x6I-`,
  Br = `GsHUhqcJfJQ-`,
  Vr = `_77LbK-akGBo-`,
  Hr = `iADCJfccVl8-`,
  Ur = `_6NUM7GMUXrI-`,
  Wr = `eWHilAZFWEA-`,
  Gr = `N8lPKh2spWY-`,
  Kr = `VEghDDjerCc-`,
  qr = `lOf3hlirldE-`,
  Jr = `HEBZJhZ641A-`,
  Yr = `UHu5FWxee0A-`,
  Xr = `yzeJT1XucOE-`;
export {
  Hn as $,
  or as A,
  Er as B,
  pr as C,
  Kr as D,
  qr as E,
  ir as F,
  vr as G,
  jr as H,
  er as I,
  wr as J,
  gr as K,
  tr as L,
  Lr as M,
  Sr as N,
  Dr as O,
  mr as P,
  $ as Q,
  cr as R,
  zr as S,
  Rr as T,
  Pr as U,
  Ar as V,
  Mr as W,
  Tr as X,
  br as Y,
  hr as Z,
  ur as _,
  Jr as a,
  lr as b,
  Hr as c,
  Yr as d,
  Xr as f,
  nr as g,
  rr as h,
  ar as i,
  Fr as j,
  Cr as k,
  Br as l,
  Or as m,
  Ur as n,
  Ir as o,
  kr as p,
  yr as q,
  Wr as r,
  _r as s,
  Gr as t,
  Vr as u,
  dr as v,
  xr as w,
  sr as x,
  fr as y,
  Nr as z,
};
