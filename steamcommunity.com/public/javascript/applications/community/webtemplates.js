/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  A as t,
  C as n,
  Ft as r,
  G as i,
  I as a,
  L as o,
  Pt as s,
  at as c,
  z as l,
} from "./chunk~01cfc309bf.js";
import { a as u } from "./chunk~437071091c.js";
import "./chunk~93de6fa506.js";
import { t as d } from "./chunk~2e61cac879.js";
import { t as f } from "./chunk~d382bdf2cf.js";
import {
  $h as p,
  $p as m,
  Ah as h,
  Ap as g,
  Br as _,
  Df as v,
  Ep as y,
  Fh as b,
  Gu as ee,
  Hf as te,
  Ic as ne,
  Ih as x,
  Jm as S,
  Lc as C,
  Mh as w,
  Ml as re,
  Nh as T,
  Nl as E,
  Ol as D,
  Op as O,
  Ph as k,
  Qd as A,
  Su as j,
  Tm as ie,
  Wc as ae,
  Xp as oe,
  Xs as se,
  Yl as ce,
  _c as le,
  bu as M,
  ci as ue,
  ec as de,
  ei as fe,
  em as N,
  ff as pe,
  hc as me,
  hf as he,
  hm as ge,
  jh as P,
  kh as F,
  mm as I,
  nf as _e,
  nh as L,
  np as ve,
  oi as ye,
  ql as be,
  qm as xe,
  th as Se,
  tp as Ce,
  wp as we,
  zc as Te,
} from "./main.js";
import { i as Ee, n as De, r as Oe } from "./chunk~23d4719eb3.js";
import { n as ke, t as Ae } from "./chunk~a0dd05a569.js";
var R = e(s()),
  z = e(r(), 1);
function je(e) {
  return `unknown ESteamNotificationType ( ` + e + ` )`;
}
var Me = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_id || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_id: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            notification_targets: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            notification_type: { n: 3, br: w.readEnum, bw: x.writeEnum },
            body_data: { n: 4, br: w.readString, bw: x.writeString },
            read: { n: 7, br: w.readBool, bw: x.writeBool },
            timestamp: { n: 8, br: w.readUint32, bw: x.writeUint32 },
            hidden: { n: 9, br: w.readBool, bw: x.writeBool },
            expiry: { n: 10, br: w.readUint32, bw: x.writeUint32 },
            viewed: { n: 11, br: w.readUint32, bw: x.writeUint32 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `SteamNotificationData`;
    }
  },
  Ne = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_hidden || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_hidden: { n: 1, d: !1, br: w.readBool, bw: x.writeBool },
            language: { n: 2, d: 0, br: w.readInt32, bw: x.writeInt32 },
            include_confirmation_count: {
              n: 3,
              d: !0,
              br: w.readBool,
              bw: x.writeBool,
            },
            include_pinned_counts: {
              n: 4,
              d: !1,
              br: w.readBool,
              bw: x.writeBool,
            },
            include_read: { n: 5, d: !0, br: w.readBool, bw: x.writeBool },
            count_only: { n: 6, d: !1, br: w.readBool, bw: x.writeBool },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_GetSteamNotifications_Request`;
    }
  },
  Pe = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notifications || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: Me, r: !0, q: !0 },
            confirmation_count: { n: 2, br: w.readInt32, bw: x.writeInt32 },
            pending_gift_count: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            pending_friend_count: { n: 5, br: w.readUint32, bw: x.writeUint32 },
            unread_count: { n: 6, br: w.readUint32, bw: x.writeUint32 },
            pending_family_invite_count: {
              n: 7,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_GetSteamNotifications_Response`;
    }
  },
  Fe = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: w.readUint32, bw: x.writeUint32 },
            notification_type: { n: 2, br: w.readEnum, bw: x.writeEnum },
            notification_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: w.readUint64String,
              pbr: w.readPackedUint64String,
              bw: x.writeRepeatedUint64String,
            },
            mark_all_read: { n: 4, br: w.readBool, bw: x.writeBool },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_MarkNotificationsRead_Notification`;
    }
  },
  Ie = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.remote_client_id || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            remote_client_id: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            target_client_type: { n: 2, br: w.readUint32, bw: x.writeUint32 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_MarkNotificationsViewed_Notification`;
    }
  },
  Le = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || F(e.M()),
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
            notification_targets: { n: 2, br: w.readUint32, bw: x.writeUint32 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `SteamNotificationPreference`;
    }
  },
  Re = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: Le, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_SetPreferences_Request`;
    }
  },
  ze = class e extends z.Message {
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
      return `CSteamNotification_SetPreferences_Response`;
    }
  },
  Be = class e extends z.Message {
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
      return `CSteamNotification_GetPreferences_Request`;
    }
  },
  Ve = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: Le, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_GetPreferences_Response`;
    }
  },
  He = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_ids || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_ids: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_HideNotification_Notification`;
    }
  },
  Ue = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notifications || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: Me, r: !0, q: !0 },
            pending_gift_count: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            pending_friend_count: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            pending_family_invite_count: {
              n: 4,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_NotificationsReceived_Notification`;
    }
  },
  We = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: Le, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CSteamNotification_PreferencesUpdated_Notification`;
    }
  },
  Ge;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `SteamNotification.GetSteamNotifications#1`,
      L(Ne, t, n),
      Pe,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetSteamNotifications = t;
  function n(e, t) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsRead#1`,
      L(Fe, t),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.MarkNotificationsRead = n;
  function r(e, t) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsViewed#1`,
      L(Ie, t),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.MarkNotificationsViewed = r;
  function i(e, t) {
    return e.SendNotification(
      `SteamNotification.HideNotification#1`,
      L(He, t),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.HideNotification = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamNotification.SetPreferences#1`, L(Re, t, n), ze, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.SetPreferences = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamNotification.GetPreferences#1`, L(Be, t, n), Ve, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPreferences = o;
})((Ge ||= {}));
var Ke;
(function (e) {
  ((e.NotificationsReceivedHandler = {
    name: `SteamNotificationClient.NotificationsReceived#1`,
    request: Ue,
  }),
    (e.PreferencesUpdatedHandler = {
      name: `SteamNotificationClient.PreferencesUpdated#1`,
      request: We,
    }));
})((Ke ||= {}));
var qe = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || F(e.M()),
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
            steamid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_CreateFamilyGroup_Request`;
    }
  },
  Je = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            cooldown_skip_granted: { n: 2, br: w.readBool, bw: x.writeBool },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_CreateFamilyGroup_Response`;
    }
  },
  Ye = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            send_running_apps: { n: 2, br: w.readBool, bw: x.writeBool },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetFamilyGroup_Request`;
    }
  },
  Xe = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || F(e.M()),
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            role: { n: 2, br: w.readEnum, bw: x.writeEnum },
            time_joined: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            cooldown_seconds_remaining: {
              n: 4,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `FamilyGroupMember`;
    }
  },
  Ze = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || F(e.M()),
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            role: { n: 2, br: w.readEnum, bw: x.writeEnum },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `FamilyGroupPendingInvite`;
    }
  },
  Qe = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || F(e.M()),
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `FamilyGroupFormerMember`;
    }
  },
  $e = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [2, 3, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: w.readString, bw: x.writeString },
            members: { n: 2, c: Xe, r: !0, q: !0 },
            pending_invites: { n: 3, c: Ze, r: !0, q: !0 },
            free_spots: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            country: { n: 5, br: w.readString, bw: x.writeString },
            slot_cooldown_remaining_seconds: {
              n: 6,
              br: w.readUint32,
              bw: x.writeUint32,
            },
            former_members: { n: 7, c: Qe, r: !0, q: !0 },
            slot_cooldown_overrides: {
              n: 8,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetFamilyGroup_Response`;
    }
  },
  et = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            role: { n: 2, br: w.readEnum, bw: x.writeEnum },
            inviter_steamid: {
              n: 3,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            awaiting_2fa: { n: 4, br: w.readBool, bw: x.writeBool },
            invite_id: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `FamilyGroupPendingInviteForUser`;
    }
  },
  tt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: w.readUint64String, bw: x.writeUint64String },
            include_family_group_response: {
              n: 2,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetFamilyGroupForUser_Request`;
    }
  },
  nt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            rtime_joined: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            rtime_left: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            role: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            participated: { n: 5, br: w.readBool, bw: x.writeBool },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `FamilyGroupMembership`;
    }
  },
  rt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [5, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            is_not_member_of_any_group: {
              n: 2,
              br: w.readBool,
              bw: x.writeBool,
            },
            latest_time_joined: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            latest_joined_family_groupid: {
              n: 4,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            pending_group_invites: { n: 5, c: et, r: !0, q: !0 },
            role: { n: 6, br: w.readUint32, bw: x.writeUint32 },
            cooldown_seconds_remaining: {
              n: 7,
              br: w.readUint32,
              bw: x.writeUint32,
            },
            family_group: { n: 8, c: $e },
            can_undelete_last_joined_family: {
              n: 9,
              br: w.readBool,
              bw: x.writeBool,
            },
            membership_history: { n: 10, c: nt, r: !0, q: !0 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetFamilyGroupForUser_Response`;
    }
  },
  it = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_ModifyFamilyGroupDetails_Request`;
    }
  },
  at = class e extends z.Message {
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
      return `CFamilyGroups_ModifyFamilyGroupDetails_Response`;
    }
  },
  ot = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            receiver_steamid: {
              n: 2,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            receiver_role: { n: 3, br: w.readEnum, bw: x.writeEnum },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_InviteToFamilyGroup_Request`;
    }
  },
  st = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_id || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_id: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            two_factor_method: { n: 2, br: w.readEnum, bw: x.writeEnum },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_InviteToFamilyGroup_Response`;
    }
  },
  ct = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            nonce: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_JoinFamilyGroup_Request`;
    }
  },
  lt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.two_factor_method || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            two_factor_method: { n: 2, br: w.readEnum, bw: x.writeEnum },
            cooldown_skip_granted: { n: 3, br: w.readBool, bw: x.writeBool },
            invite_already_accepted: { n: 4, br: w.readBool, bw: x.writeBool },
            cooldown_seconds_remaining: {
              n: 5,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_JoinFamilyGroup_Response`;
    }
  },
  ut = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            steamid_to_remove: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_RemoveFromFamilyGroup_Request`;
    }
  },
  dt = class e extends z.Message {
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
      return `CFamilyGroups_RemoveFromFamilyGroup_Response`;
    }
  },
  ft = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            steamid_to_cancel: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_CancelFamilyGroupInvite_Request`;
    }
  },
  pt = class e extends z.Message {
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
      return `CFamilyGroups_CancelFamilyGroupInvite_Response`;
    }
  },
  mt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_DeleteFamilyGroup_Request`;
    }
  },
  ht = class e extends z.Message {
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
      return `CFamilyGroups_DeleteFamilyGroup_Response`;
    }
  },
  gt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            client_instance_id: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetUsersSharingDevice_Request`;
    }
  },
  _t = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.users || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            users: {
              n: 1,
              r: !0,
              q: !0,
              br: w.readFixed64String,
              pbr: w.readPackedFixed64String,
              bw: x.writeRepeatedFixed64String,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetUsersSharingDevice_Response`;
    }
  },
  vt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            gidshoppingcart: {
              n: 2,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            store_country_code: { n: 3, br: w.readString, bw: x.writeString },
            use_account_cart: { n: 4, br: w.readBool, bw: x.writeBool },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_RequestPurchase_Request`;
    }
  },
  yt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            request_id: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_RequestPurchase_Response`;
    }
  },
  bt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            request_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: w.readUint64String,
              pbr: w.readPackedUint64String,
              bw: x.writeRepeatedUint64String,
            },
            rt_include_completed_since: {
              n: 4,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetPurchaseRequests_Request`;
    }
  },
  xt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requester_steamid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [9, 10, 11, 12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requester_steamid: {
              n: 1,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            gidshoppingcart: {
              n: 2,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            time_requested: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            time_responded: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            responder_steamid: {
              n: 5,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            response_action: { n: 6, br: w.readEnum, bw: x.writeEnum },
            is_completed: { n: 7, br: w.readBool, bw: x.writeBool },
            request_id: {
              n: 8,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            requested_packageids: {
              n: 9,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: x.writeRepeatedUint32,
            },
            purchased_packageids: {
              n: 10,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: x.writeRepeatedUint32,
            },
            requested_bundleids: {
              n: 11,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: x.writeRepeatedUint32,
            },
            purchased_bundleids: {
              n: 12,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: x.writeRepeatedUint32,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `PurchaseRequest`;
    }
  },
  St = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: xt, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetPurchaseRequests_Response`;
    }
  },
  Ct = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            action: { n: 3, br: w.readEnum, bw: x.writeEnum },
            request_id: {
              n: 4,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_RespondToRequestedPurchase_Request`;
    }
  },
  wt = class e extends z.Message {
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
      return `CFamilyGroups_RespondToRequestedPurchase_Response`;
    }
  },
  Tt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            running_apps: { n: 2, c: Dt, r: !0, q: !0 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroupsClient_NotifyRunningApps_Notification`;
    }
  },
  Et = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.member_steamid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            member_steamid: {
              n: 1,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            owner_steamid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember`;
    }
  },
  Dt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: x.writeUint32 },
            playing_members: { n: 3, c: Et, r: !0, q: !0 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp`;
    }
  },
  Ot = class e extends z.Message {
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
      return `CFamilyGroupsClient_InviteStatus_Notification`;
    }
  },
  kt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroupsClient_GroupChanged_Notification`;
    }
  },
  At = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetChangeLog_Request`;
    }
  },
  jt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.changes || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { changes: { n: 1, c: Mt, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetChangeLog_Response`;
    }
  },
  Mt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: {
              n: 1,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            actor_steamid: {
              n: 2,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            type: { n: 3, br: w.readEnum, bw: x.writeEnum },
            body: { n: 4, br: w.readString, bw: x.writeString },
            by_support: { n: 5, br: w.readBool, bw: x.writeBool },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetChangeLog_Response_Change`;
    }
  },
  Nt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || F(e.M()),
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            appid: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            first_played: { n: 3, br: w.readUint32, bw: x.writeUint32 },
            latest_played: { n: 4, br: w.readUint32, bw: x.writeUint32 },
            seconds_played: { n: 5, br: w.readUint32, bw: x.writeUint32 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_PlaytimeEntry`;
    }
  },
  Pt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetPlaytimeSummary_Request`;
    }
  },
  Ft = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: Nt, r: !0, q: !0 },
            entries_by_owner: { n: 2, c: Nt, r: !0, q: !0 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetPlaytimeSummary_Response`;
    }
  },
  It = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            cooldown_count: { n: 2, br: w.readUint32, bw: x.writeUint32 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_SetFamilyCooldownOverrides_Request`;
    }
  },
  Lt = class e extends z.Message {
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
      return `CFamilyGroups_SetFamilyCooldownOverrides_Response`;
    }
  },
  Rt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            include_own: { n: 2, br: w.readBool, bw: x.writeBool },
            include_excluded: { n: 3, br: w.readBool, bw: x.writeBool },
            language: { n: 5, br: w.readString, bw: x.writeString },
            max_apps: { n: 6, br: w.readUint32, bw: x.writeUint32 },
            include_non_games: { n: 7, br: w.readBool, bw: x.writeBool },
            steamid: {
              n: 8,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetSharedLibraryApps_Request`;
    }
  },
  zt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apps: { n: 1, c: Bt, r: !0, q: !0 },
            owner_steamid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetSharedLibraryApps_Response`;
    }
  },
  Bt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [2, 15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: w.readUint32, bw: x.writeUint32 },
            owner_steamids: {
              n: 2,
              r: !0,
              q: !0,
              br: w.readFixed64String,
              pbr: w.readPackedFixed64String,
              bw: x.writeRepeatedFixed64String,
            },
            name: { n: 6, br: w.readString, bw: x.writeString },
            sort_as: { n: 7, br: w.readString, bw: x.writeString },
            capsule_filename: { n: 8, br: w.readString, bw: x.writeString },
            img_icon_hash: { n: 9, br: w.readString, bw: x.writeString },
            exclude_reason: { n: 10, d: 0, br: w.readEnum, bw: x.writeEnum },
            rt_time_acquired: { n: 11, br: w.readUint32, bw: x.writeUint32 },
            rt_last_played: { n: 12, br: w.readUint32, bw: x.writeUint32 },
            rt_playtime: { n: 13, br: w.readUint32, bw: x.writeUint32 },
            app_type: { n: 14, d: 1, br: w.readEnum, bw: x.writeEnum },
            content_descriptors: {
              n: 15,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: x.writeRepeatedUint32,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetSharedLibraryApps_Response_SharedApp`;
    }
  },
  Vt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            invite_id: {
              n: 2,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            nonce: { n: 3, br: w.readUint64String, bw: x.writeUint64String },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Request`;
    }
  },
  Ht = class e extends z.Message {
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
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Response`;
    }
  },
  Ut = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            invite_id: {
              n: 2,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            nonce: { n: 3, br: w.readUint64String, bw: x.writeUint64String },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Request`;
    }
  },
  Wt = class e extends z.Message {
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
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Response`;
    }
  },
  Gt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            steamid: { n: 2, br: w.readUint64String, bw: x.writeUint64String },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Request`;
    }
  },
  Kt = class e extends z.Message {
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
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Response`;
    }
  },
  qt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            appid: { n: 2, br: w.readUint32, bw: x.writeUint32 },
            lender_steamid: {
              n: 3,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_SetPreferredLender_Request`;
    }
  },
  Jt = class e extends z.Message {
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
      return `CFamilyGroups_SetPreferredLender_Response`;
    }
  },
  Yt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetPreferredLenders_Request`;
    }
  },
  Xt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.members || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { members: { n: 1, c: Zt, r: !0, q: !0 } },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetPreferredLenders_Response`;
    }
  },
  Zt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, [2], null));
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            preferred_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: w.readUint32,
              pbr: w.readPackedUint32,
              bw: x.writeRepeatedUint32,
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetPreferredLenders_Response_FamilyMember`;
    }
  },
  Qt = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_UndeleteFamilyGroup_Request`;
    }
  },
  $t = class e extends z.Message {
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
      return `CFamilyGroups_UndeleteFamilyGroup_Response`;
    }
  },
  en = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            steamid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_ForceAcceptInvite_Request`;
    }
  },
  tn = class e extends z.Message {
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
      return `CFamilyGroups_ForceAcceptInvite_Response`;
    }
  },
  nn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            steamid: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetInviteCheckResults_Request`;
    }
  },
  rn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.wallet_country_matches || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            wallet_country_matches: { n: 1, br: w.readBool, bw: x.writeBool },
            ip_match: { n: 2, br: w.readBool, bw: x.writeBool },
            join_restriction: { n: 3, br: w.readUint32, bw: x.writeUint32 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_GetInviteCheckResults_Response`;
    }
  },
  an = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || F(e.M()),
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
              br: w.readFixed64String,
              bw: x.writeFixed64String,
            },
            invite_id: {
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_ClearCooldownSkip_Request`;
    }
  },
  on = class e extends z.Message {
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
      return `CFamilyGroups_ClearCooldownSkip_Response`;
    }
  },
  sn = class e extends z.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.family_groupid || F(e.M()),
        z.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: w.readUint64String,
              bw: x.writeUint64String,
            },
            rtime32_target: { n: 2, br: w.readUint32, bw: x.writeUint32 },
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
      return b(e.M(), t, n);
    }
    static fromObject(t) {
      return P(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new z.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return h(e.MBF(), t, n);
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
      return `CFamilyGroups_RollbackFamilyGroup_Request`;
    }
  },
  cn = class e extends z.Message {
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
      return `CFamilyGroups_RollbackFamilyGroup_Response`;
    }
  },
  ln;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`FamilyGroups.CreateFamilyGroup#1`, L(qe, t, n), Je, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.CreateFamilyGroup = t;
  function n(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetFamilyGroup#1`, L(Ye, t, n), $e, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetFamilyGroup = n;
  function r(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetFamilyGroupForUser#1`, L(tt, t, n), rt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetFamilyGroupForUser = r;
  function i(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.ModifyFamilyGroupDetails#1`,
      L(it, t, n),
      at,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.ModifyFamilyGroupDetails = i;
  function a(e, t, n) {
    return e.SendMsg(`FamilyGroups.InviteToFamilyGroup#1`, L(ot, t, n), st, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.InviteToFamilyGroup = a;
  function o(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.ConfirmInviteToFamilyGroup#1`,
      L(Vt, t, n),
      Ht,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.ConfirmInviteToFamilyGroup = o;
  function s(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.ResendInvitationToFamilyGroup#1`,
      L(Gt, t, n),
      Kt,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.ResendInvitationToFamilyGroup = s;
  function c(e, t, n) {
    return e.SendMsg(`FamilyGroups.JoinFamilyGroup#1`, L(ct, t, n), lt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.JoinFamilyGroup = c;
  function l(e, t, n) {
    return e.SendMsg(`FamilyGroups.ConfirmJoinFamilyGroup#1`, L(Ut, t, n), Wt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.ConfirmJoinFamilyGroup = l;
  function u(e, t, n) {
    return e.SendMsg(`FamilyGroups.RemoveFromFamilyGroup#1`, L(ut, t, n), dt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RemoveFromFamilyGroup = u;
  function d(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.CancelFamilyGroupInvite#1`,
      L(ft, t, n),
      pt,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.CancelFamilyGroupInvite = d;
  function f(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetUsersSharingDevice#1`, L(gt, t, n), _t, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUsersSharingDevice = f;
  function p(e, t, n) {
    return e.SendMsg(`FamilyGroups.DeleteFamilyGroup#1`, L(mt, t, n), ht, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.DeleteFamilyGroup = p;
  function m(e, t, n) {
    return e.SendMsg(`FamilyGroups.UndeleteFamilyGroup#1`, L(Qt, t, n), $t, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.UndeleteFamilyGroup = m;
  function h(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetPlaytimeSummary#1`, L(Pt, t, n), Ft, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPlaytimeSummary = h;
  function g(e, t, n) {
    return e.SendMsg(`FamilyGroups.RequestPurchase#1`, L(vt, t, n), yt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RequestPurchase = g;
  function _(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetPurchaseRequests#1`, L(bt, t, n), St, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPurchaseRequests = _;
  function v(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.RespondToRequestedPurchase#1`,
      L(Ct, t, n),
      wt,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.RespondToRequestedPurchase = v;
  function y(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetChangeLog#1`, L(At, t, n), jt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetChangeLog = y;
  function b(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.SetFamilyCooldownOverrides#1`,
      L(It, t, n),
      Lt,
      { ePrivilege: 5, rgBrowserAPISites: [`community`, `store`, `support`] },
    );
  }
  e.SetFamilyCooldownOverrides = b;
  function ee(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetSharedLibraryApps#1`, L(Rt, t, n), zt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetSharedLibraryApps = ee;
  function te(e, t, n) {
    return e.SendMsg(`FamilyGroups.SetPreferredLender#1`, L(qt, t, n), Jt, {
      ePrivilege: 1,
    });
  }
  e.SetPreferredLender = te;
  function ne(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetPreferredLenders#1`, L(Yt, t, n), Xt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPreferredLenders = ne;
  function x(e, t, n) {
    return e.SendMsg(`FamilyGroups.ForceAcceptInvite#1`, L(en, t, n), tn, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`, `store`, `support`],
    });
  }
  e.ForceAcceptInvite = x;
  function S(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetInviteCheckResults#1`, L(nn, t, n), rn, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`, `store`, `support`],
    });
  }
  e.GetInviteCheckResults = S;
  function C(e, t, n) {
    return e.SendMsg(`FamilyGroups.ClearCooldownSkip#1`, L(an, t, n), on, {
      ePrivilege: 5,
    });
  }
  e.ClearCooldownSkip = C;
  function w(e, t, n) {
    return e.SendMsg(`FamilyGroups.RollbackFamilyGroup#1`, L(sn, t, n), cn, {
      ePrivilege: 5,
    });
  }
  e.RollbackFamilyGroup = w;
})((ln ||= {}));
var un;
((function (e) {
  ((e.NotifyRunningAppsHandler = {
    name: `FamilyGroupsClient.NotifyRunningApps#1`,
    request: Tt,
  }),
    (e.NotifyInviteStatusHandler = {
      name: `FamilyGroupsClient.NotifyInviteStatus#1`,
      request: Ot,
    }),
    (e.NotifyGroupChangedHandler = {
      name: `FamilyGroupsClient.NotifyGroupChanged#1`,
      request: kt,
    }));
})((un ||= {})),
  R.createContext({ staleTimeMs: 1 / 0 }),
  (0, R.createContext)({ errorMessage: null, setErrorMessage: (e) => {} }));
function dn(e, t) {
  return `${I.STORE_BASE_URL}cart/purchaserequest/${e}/${t}`;
}
function fn(e) {
  let t = e?.reported_content_id
    ? e.reported_content_id
    : `${e?.subject_type}-${e?.subject_group_id}-${e?.subject_id}`;
  return `${I.COMMUNITY_BASE_URL}my/reportedcontent/${t}`;
}
var pn = {
  11: {
    displayNameLoc: `#SteamNotification_HelpRequest_Author`,
    titleLoc: `#SteamNotification_HelpRequest_Title`,
    bodyLoc: (e) => ({
      locString: `#SteamNotification_HelpRequest_Body`,
      params: [e.ticket],
    }),
    link: (e) => I.HELP_BASE_URL + `wizard/HelpRequest/` + e.ticket,
  },
  6: {
    displayNameLoc: `#SteamNotifications_MajorSale`,
    titleLoc: (e) => ({ locString: e.title }),
    bodyLoc: (e) =>
      te() && e.link.includes(`https://store.steampowered.com`)
        ? `#SteamNotifications_MajorSale_SteamChina_Title`
        : e.body,
    image: (e) => e.image,
    link: (e) =>
      te() && e.link.includes(`https://store.steampowered.com`)
        ? e.link.replace(`https://store.steampowered.com`, I.STORE_BASE_URL)
        : e.link,
  },
  10: {
    displayNameLoc: (e) => e.display_name,
    titleLoc: (e) => e.title,
    bodyLoc: (e) => e.body,
    image: (e) => e.image,
    link: (e) => e.link,
  },
  14: {
    titleLoc: `#SteamNotification_ModeratorMessage_Title`,
    link: (e) => I.COMMUNITY_BASE_URL + `my/moderatormessages/` + e.msgid,
  },
  28: {
    displayNameLoc: (e) =>
      e.is_limited_launch
        ? `#Notification_LimitedLaunchInviteTitle`
        : `#Notification_PlaytestInviteTitle`,
    titleLoc: (e) =>
      e.is_limited_launch
        ? `#Notification_LimitedLaunchInviteBody`
        : `#Notification_PlaytestInviteBody`,
    image: (e) => e.appid,
    link: (e) => I.STORE_BASE_URL + `account/gatedaccess?appid=` + e.appid,
  },
  30: {
    titleLoc: (e) => {
      switch (e.status) {
        case 1:
          return `#Notification_ReportedContentAction_Received`;
        case 2:
          return `#Notification_ReportedContentAction_Sanctioned`;
        case 3:
          return `#Notification_ReportedContentAction_Acquitted`;
        case 4:
          return `#Notification_ReportedContentAction_DisputeReceived`;
        case 5:
          return `#Notification_ReportedContentAction_DisputeSanctioned`;
        case 6:
          return `#Notification_ReportedContentAction_DisputeAcquitted`;
        default:
          return `#Notification_ReportedContentAction_Unknown`;
      }
    },
    link: (e) => fn(e),
  },
};
function mn(e) {
  if (e !== void 0) return pn[e];
}
function hn(e) {
  return !!mn(e);
}
var gn = {
  16: {
    steamidAttribute: `inviter`,
    titleLoc: `#SteamNotifications_FamilyInviteTitle`,
    bodyLoc: `#SteamNotifications_FamilyInviteBody`,
    url: (e) =>
      `${I.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
  },
  15: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalFeatureRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalFeatureRequestBody`,
    url: () => `${I.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: `requestor_steamid`,
    titleLoc: `#SteamNotifications_FamilyPurchaseRequestTitle`,
    bodyLoc: `#SteamNotifications_FamilyPurchaseRequestBody`,
    url: (e) => dn(e.familyid, e.request_id),
  },
  19: {
    steamidAttribute: `responder_steamid`,
    titleLoc: (e) =>
      e.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle`
        : ``,
    bodyLoc: (e) =>
      e.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestDeclinedBody`
        : ``,
    url: () => `${I.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalPlaytimeRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalPlaytimeRequestBody`,
    url: () => `${I.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  20: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseTitleApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined`,
    bodyLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseBodyApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined`,
    url: () => `${I.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  21: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseTitleApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseTitleDeclined`,
    bodyLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseBodyApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseBodyDeclined`,
    url: () => `${I.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function _n(e) {
  if (e !== void 0) return gn[e];
}
function vn(e) {
  return !!_n(e);
}
var yn = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function bn(e) {
  return yn.findIndex((t) => t == e) != null;
}
function xn(e) {
  return !e.hidden && Sn(e.notification_type) && Rn(e.body_data);
}
function Sn(e) {
  return hn(e) || vn(e) || bn(e);
}
var Cn = new ee(`SteamNotificationStore`),
  B = Cn.Debug,
  wn = Cn.Error,
  Tn = Cn.Warning,
  V = class {
    constructor() {
      a(this);
    }
    m_rgNotificationRollups = [];
    m_summary = En();
    m_bLoaded = !1;
    m_nUnviewed = 0;
    m_rgNotifyServerRead = [];
    m_rgNotifyServerHidden = [];
    m_keyNotifyServerRead = ``;
    m_keyNotifyServerHidden = ``;
    m_steamid;
    m_transport;
    m_rgUnreadNotificationIDs = [];
    m_rgNewRollupIDs = new Map();
    m_rgTestNotifications = [];
    m_currentNotificationsData = null;
    m_strRemoteClientID = ``;
    m_eTargetClientType = 0;
    m_fnOnNotificationCallback = null;
    BHasNotificationsData() {
      return this.m_currentNotificationsData != null;
    }
    setTransport(e) {
      this.m_transport = e;
    }
    RegisterOnNotificationCallback(e) {
      this.m_fnOnNotificationCallback = e;
    }
    SetClientFilters(e, t = 0) {
      ((this.m_strRemoteClientID = e), (this.m_eTargetClientType = t));
    }
    NotifyServerNotificationsRead(e) {
      (this.m_rgNotifyServerRead.push(...e), this.UpdateServer());
    }
    NotifyServerNotificationsHidden(e) {
      (this.m_rgNotifyServerHidden.push(...e), this.UpdateServer());
    }
    BSendToCallbackAsNew(e) {
      return (
        !e.read &&
        !Jn(e) &&
        !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
      );
    }
    Dev_AddTestNotification(e) {}
    Dev_UpdateTestNotificationReadState(e, t) {
      let n = this.m_rgTestNotifications.findIndex(
        (t) => t.notification_id == e,
      );
      return (
        n !== -1 &&
        this.m_rgTestNotifications[n].read != t &&
        ((this.m_rgTestNotifications[n].read = t), !0)
      );
    }
    UpdateServer() {
      if (this.m_rgNotifyServerRead.length > 0) {
        let e = Se.Init(Fe);
        (e.Body().set_notification_ids(this.m_rgNotifyServerRead),
          Ge.MarkNotificationsRead(this.m_transport, e) &&
            (this.m_rgNotifyServerRead = []));
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let e = Se.Init(He);
        (e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          Ge.HideNotification(this.m_transport, e) &&
            (this.m_rgNotifyServerHidden = []));
      }
    }
    MarkItemRead(e, t = !1) {
      let n = this.m_rgNotificationRollups.findIndex(
        (t) => t.item.notification_id == e,
      );
      if (n === -1) {
        t
          ? this.NotifyServerNotificationsRead([e])
          : wn(
              `Attempted to mark notification read that is not in the notification store`,
            );
        return;
      }
      let r = this.m_rgNotificationRollups[n];
      if (r.item.read)
        wn(`Attempted to mark notification read that is already read`);
      else if (((r.item.read = !0), r.rgunread?.length > 0)) {
        this.ReduceNewTotals(r.type, r.rgunread.length);
        let e = [];
        (r.rgunread.forEach((t) => {
          e.push(t);
        }),
          r.rgread.push(...r.rgunread),
          (r.rgunread = []),
          this.NotifyServerNotificationsRead(e));
      }
    }
    MarkItemHidden(e) {
      let t = this.m_rgNotificationRollups.findIndex(
        (t) => t.item.notification_id == e,
      );
      if (t === -1) {
        wn(
          `Attempted to mark notification hidden that is not in the notification store`,
        );
        return;
      }
      let n = this.m_rgNotificationRollups[t];
      ((n.item.hidden = !0),
        n.rgunread?.length > 0 &&
          this.ReduceNewTotals(n.type, n.rgunread?.length),
        this.NotifyServerNotificationsHidden([...n.rgunread, ...n.rgread]));
    }
    ReduceNewTotals(e, t) {
      qn(this.m_summary, e, -t);
    }
    MarkAllItemsViewed() {
      let e = Se.Init(Ie);
      (e.Body().set_remote_client_id(this.m_strRemoteClientID),
        e.Body().set_target_client_type(this.m_eTargetClientType),
        Ge.MarkNotificationsViewed(this.m_transport, e),
        (this.m_nUnviewed = 0));
    }
    MarkAllItemsRead(e) {
      let t = [],
        n = [],
        r = e ?? this.m_rgNotificationRollups;
      return (
        r.forEach((e, r) => {
          e.rgunread.length > 0 &&
            (e.rgunread.forEach((e) => {
              t.push(e);
            }),
            n.push(r));
        }),
        t.length > 0 &&
          ((this.m_summary = Object.assign(En(), {
            pending_gifts: this.m_summary.pending_gifts,
            pending_invites: this.m_summary.pending_invites,
            pending_family_invites: this.m_summary.pending_family_invites,
          })),
          n.forEach((e) => {
            let t = r[e];
            ((t.item.read = !0), (t.rgunread = []));
          }),
          this.NotifyServerNotificationsRead(t)),
        t.length + 0
      );
    }
    ApplyNotificationsUpdate(e) {
      if (
        (B(`ApplyNotificationsUpdate`, e),
        !e ||
          (!e.notifications?.length &&
            e.pending_friend_count === void 0 &&
            e.pending_gift_count === void 0))
      ) {
        B(`Error: ApplyNotificationsUpdate was called with no data`);
        return;
      }
      if (!this.m_currentNotificationsData) {
        B(
          `Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set`,
        );
        return;
      }
      let t = this.m_currentNotificationsData;
      (e.notifications?.forEach((e) => {
        let n = t.notifications.findIndex(
          (t) => t.notification_id == e.notification_id,
        );
        n == -1
          ? t.notifications.push(e)
          : Object.assign(t.notifications[n], e);
      }),
        e.pending_friend_count !== void 0 &&
          (this.m_currentNotificationsData.pending_friend_count =
            e.pending_friend_count),
        e.pending_gift_count !== void 0 &&
          (this.m_currentNotificationsData.pending_gift_count =
            e.pending_gift_count),
        e.pending_family_invite_count !== void 0 &&
          (this.m_currentNotificationsData.pending_family_invite_count =
            e.pending_family_invite_count),
        this.ProcessNotifications());
    }
    ProcessNewNotificationPayload(e) {
      ((this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
        this.ProcessNotifications());
    }
    ProcessNotifications() {
      let e = [],
        t = En(),
        n = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((r) => {
          this.BExcludeClientTargetedNotification(r) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (e) => e == r.notification_id,
              ) !== -1 &&
              (r.hidden = !0),
            xn(r) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (e) => e == r.notification_id,
                ) !== -1 &&
                (r.read = !0),
              r.read || qn(t, r.notification_type, 1),
              r.viewed || n++,
              this.AddNotificationToRollups(e, r)));
        }),
        e.sort((e, t) => e.timestamp - t.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let t of e)
          if (t.bSendToCallbackAsNew)
            (this.m_rgNewRollupIDs.set(
              t.rollup_key,
              JSON.parse(JSON.stringify(t)),
            ),
              this.m_fnOnNotificationCallback(t, 0));
          else if (this.m_rgNewRollupIDs.has(t.rollup_key)) {
            let e = this.m_rgNewRollupIDs.get(t.rollup_key);
            (e.item.read != t.item.read || e.item.viewed != t.item.viewed) &&
              (this.m_rgNewRollupIDs.set(
                t.rollup_key,
                JSON.parse(JSON.stringify(t)),
              ),
              this.m_fnOnNotificationCallback(t, 1));
          }
        for (let [t, n] of this.m_rgNewRollupIDs)
          e.findIndex((e) => e.rollup_key == t) == -1 &&
            (this.m_fnOnNotificationCallback(n, 2),
            this.m_rgNewRollupIDs.delete(t));
      }
      (e.reverse(),
        (t.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (t.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (t.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = e.slice()),
        (this.m_summary = t),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = n));
    }
    BExcludeClientTargetedNotification(e) {
      let t = Rn(e.body_data);
      return t
        ? !!(
            (t.remote_client_id &&
              this.m_strRemoteClientID != t.remote_client_id) ||
            (t.target_client_types &&
              !(this.m_eTargetClientType & t.target_client_types))
          )
        : !1;
    }
    BReplaceRollupItem(e, t) {
      return e.read == t.read
        ? (e.read && t.read) || t.viewed == e.viewed
          ? t.timestamp < e.timestamp
          : !e.viewed && t.viewed
            ? !0
            : e.viewed && t.viewed
              ? t.viewed < e.viewed
              : !1
        : t.read;
    }
    AddNotificationToRollups(e, t) {
      let n = this.BSendToCallbackAsNew(t);
      n && this.m_rgUnreadNotificationIDs.push(t.notification_id);
      let r = t.notification_type;
      switch (r) {
        case 3:
          {
            let i = zn(t);
            if (!i) return;
            let a =
                `comment_` +
                i.owner_steam_id?.GetAccountID() +
                `_` +
                i.forum_id +
                `_` +
                i.topic_id +
                (i.brate_limited ? `_ratelimited` : ``),
              o = e.findIndex((e) => e.rollup_key == a);
            if (o == -1)
              e.push({
                type: r,
                rollup_key: a,
                item: t,
                rollup_count: 1,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bSendToCallbackAsNew: n,
                url: Mn(i),
              });
            else {
              let r = e[o];
              (this.BReplaceRollupItem(t, r.item) &&
                ((r.url = Mn(i)),
                (r.item = t),
                (r.timestamp = t.timestamp),
                (r.bSendToCallbackAsNew = n)),
                (r.rollup_count += 1),
                t.read
                  ? r.rgread.push(t.notification_id)
                  : r.rgunread.push(t.notification_id));
            }
          }
          break;
        case 4:
          let i = zn(t);
          if (i) {
            let a = `item_` + i.appid;
            this.AddNotificationToRollupByAppID(e, t, a, r, n, i.appid);
          }
          break;
        case 12:
          let a = zn(t)?.appid.toString();
          if (a) {
            let i = `asyncgame_` + a;
            this.AddNotificationToRollupByAppID(e, t, i, r, n, a);
          }
          break;
        case 30:
          let o = zn(t),
            s = o?.report_id,
            c = fn(o),
            l = `contentreport_${s}`,
            u = e.findIndex((e) => e.rollup_key == l);
          if (u == -1)
            e.push({
              type: r,
              rollup_key: l,
              item: t,
              rollup_count: 1,
              timestamp: t.timestamp,
              rgunread: t.read ? [] : [t.notification_id],
              rgread: t.read ? [t.notification_id] : [],
              bSendToCallbackAsNew: n,
              url: c,
            });
          else {
            let r = e[u];
            (this.BReplaceRollupItem(t, r.item) &&
              ((r.url = c),
              (r.item = t),
              (r.timestamp = t.timestamp),
              (r.bSendToCallbackAsNew = n)),
              (r.rollup_count += 1),
              t.read
                ? r.rgread.push(t.notification_id)
                : r.rgunread.push(t.notification_id));
          }
          break;
        default:
          e.push({
            type: r,
            rollup_key: t.notification_id,
            item: t,
            timestamp: t.timestamp,
            rgunread: t.read ? [] : [t.notification_id],
            rgread: t.read ? [t.notification_id] : [],
            bSendToCallbackAsNew: n,
          });
      }
    }
    AddNotificationToRollupByAppID(e, t, n, r, i, a) {
      let o = e.findIndex((e) => e.rollup_key == n);
      if (o == -1)
        e.push({
          type: r,
          rollup_key: n,
          item: t,
          rollup_count: 1,
          timestamp: t.timestamp,
          rgunread: t.read ? [] : [t.notification_id],
          rgread: t.read ? [t.notification_id] : [],
          bSendToCallbackAsNew: i,
        });
      else {
        let n = e[o];
        (this.BReplaceRollupItem(t, n.item) &&
          ((n.item = t),
          (n.timestamp = t.timestamp),
          (n.bSendToCallbackAsNew = i)),
          (n.rollup_count += 1),
          t.read
            ? n.rgread.push(t.notification_id)
            : n.rgunread.push(t.notification_id));
      }
    }
  };
(v([o], V.prototype, `m_rgNotificationRollups`, void 0),
  v([o], V.prototype, `m_summary`, void 0),
  v([o], V.prototype, `m_bLoaded`, void 0),
  v([o], V.prototype, `m_nUnviewed`, void 0),
  v([t], V.prototype, `ProcessNotifications`, null));
function En() {
  return {
    comments: 0,
    inventory_items: 0,
    invites: 0,
    gifts: 0,
    offline_messages: 0,
    trade_offers: 0,
    async_game_updates: 0,
    moderator_messages: 0,
    help_request_replies: 0,
    general: 0,
    wishlist: 0,
    pending_gifts: 0,
    pending_invites: 0,
    major_sale: 0,
    parental_feature_requests: 0,
    family_invites: 0,
    family_purchase_requests: 0,
    family_purchase_request_responses: 0,
    pending_family_invites: 0,
    parental_playtime_requests: 0,
    parental_feature_access_responses: 0,
    parental_playtime_responses: 0,
    requested_game_added: 0,
    playtest_invites: 0,
  };
}
async function Dn(e, t, n, r, i, a = !0, o = !1) {
  if (!t) throw Error(`Invalid steamid for GetSteamNotifications`);
  let s = Se.Init(Ne);
  (s.Body().set_language(n),
    s.Body().set_include_read(a),
    s.Body().set_include_pinned_counts(!0),
    s.Body().set_include_confirmation_count(o));
  let c = await Ge.GetSteamNotifications(e, s);
  if (c.GetEResult() !== 1)
    throw (
      Tn(
        `Received error from GetSteamNotifications. Result ${c.GetEResult()}. Transport ${c.Hdr().transport_error()}`,
      ),
      Error(`Error from GetSteamNotifications: ${c.GetEResult()}`)
    );
  let l = c.Body().toObject();
  return (
    r &&
      (l.notifications = l.notifications?.filter(
        (e) => !Kn(e.notification_type, r, i),
      )),
    l
  );
}
async function On(e, t) {
  if (!e || !e.steamid || !e.contextid || !e.appid || !e.assetid)
    return (wn(`Item notification missing required attributes`), null);
  let n = Se.Init(De);
  (n.Body().set_steamid(e.steamid),
    n.Body().set_contextid(e.contextid),
    n.Body().set_appid(parseInt(e.appid)),
    n.Body().set_get_descriptions(!0),
    n.Body().set_language(I.LANGUAGE));
  let r = new Oe();
  (r.add_assetids(e.assetid), n.Body().set_filters(r));
  let i = await Ee.GetInventoryItemsWithDescriptions(t, n);
  return i.GetEResult() === 1
    ? (i.Body().toObject().descriptions[0] ?? null)
    : (wn(`Request for steam item metadata did not succeed`, i.GetEResult()),
      null);
}
var kn = `ItemMetadata`;
function An(e) {
  return [`${kn}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`];
}
function jn(e, t, n) {
  let r = Vn(4, e.body_data);
  r.steamid = t;
  let a = i({
    queryKey: An(r),
    queryFn: async () => On(r, n),
    staleTime: 1 / 0,
  });
  return a.isSuccess ? a.data : null;
}
function Mn(e) {
  let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
  return (e.last_post > 0 && (t += `&tscn=` + (e.last_post - 1)), t);
}
function Nn(e) {
  return e.comment_type == 10;
}
function Pn(e) {
  return e?.bhas_friend;
}
function Fn(e) {
  return e.comment_type == 10;
}
function In(e) {
  return Nn(e) || Pn(e);
}
function Ln(e) {
  return Fn(e);
}
function Rn(e) {
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    B(`Steam notification in invalid format:`, e);
  }
  return null;
}
function zn(e) {
  return Vn(e.notification_type, e.body_data);
}
function Bn(e) {
  return Vn(e.type, e.item?.body_data);
}
function Vn(e, t) {
  let n = Rn(t);
  if (!n) return null;
  switch (e) {
    case 2:
      return n.gifter_account;
    case 22:
      return {
        responder_steamid: n.responder_steamid,
        package_id: n.package_id,
        bundle_id: n.bundle_id,
      };
    case 9:
      return parseInt(n.sender);
    case 8:
      return { appid: n.appid, count: n.count ?? 1, appids: n.appids ?? [] };
    case 12:
      return !n.appid || !n.state || (n.state != 1 && n.state != 2)
        ? (B(`Async game notification invalid data`, t), null)
        : { appid: parseInt(n.appid), state: parseInt(n.state) };
    case 3:
      let r = {
        owner_steam_id: n.owner_steam_id ? new ie(n.owner_steam_id) : null,
        bclan_account: Hn(n.bclan_account),
        title: n.title,
        comment: n.text,
        time: n.last_post,
        comment_type: Number(n.type),
        topic_id: n.topic_id,
        forum_id: n.forum_id,
        account_steam_id: n.account_id
          ? ie.InitFromAccountID(n.account_id, I.EUNIVERSE)
          : null,
        bhas_friend: Hn(n.bhas_friend),
        bis_forum: Hn(n.bis_forum),
        last_post: n.last_post,
        bsubscribed: Hn(n.subscribed),
        bis_owner: Hn(n.bis_owner),
        brate_limited: !!n.brate_limited,
      };
      return (
        n.json_data &&
          (r.json_data = {
            app_id: parseInt(n.json_data.app_id),
            file_type: parseInt(n.json_data.file_type),
            title: n.json_data.title,
          }),
        r
      );
    case 5:
      return {
        requestorID: parseInt(n.requestor_id),
        state: n.state ? parseInt(n.state) : 0,
      };
    case 4:
      return {
        appid: parseInt(n.app_id),
        assetid: n.asset_id ?? ``,
        contextid: n.context_id ?? ``,
      };
    case 23:
      return {
        url: n.url ?? ``,
        strGameName: n.content_app_name ?? ``,
        mediaType: n.media_type ?? `clip`,
        secDuration: parseFloat(n.duration_seconds ?? 0),
        nSize: parseInt(n.file_size ?? 0),
        strMachineName: n.machine_name,
        rtExpiration: n.expiration,
        thumbnailURL: n.thumbnail_url,
      };
    case 30:
      return {
        report_id: n.report_id ?? ``,
        reported_content_id: n.reported_content_id ?? ``,
        subject_type: n.subject_type ?? 0,
        subject_group_id: n.subject_group_id ?? `0`,
        subject_id: n.subject_id ?? `0`,
        status: n.status ?? 0,
      };
    default:
      return (
        B(
          `GetCustomNotificationDataByType called with unexpected type:` + e,
          t,
        ),
        null
      );
  }
}
function Hn(e) {
  if (e === void 0) return !1;
  if (typeof e == `number`) return e > 0;
  if (typeof e == `string`)
    switch (e.toLowerCase()?.trim()) {
      case `true`:
      case `1`:
        return !0;
      default:
        return !1;
    }
  return (B(`notification contained unexpected boolean value`), !1);
}
function Un(e) {
  let t = 0;
  return (
    (function (e) {
      return Object.keys(e);
    })(e).forEach((n) => {
      n != `pending_gifts` && n != `pending_invites` && (t += e[n]);
    }),
    t
  );
}
var Wn = {
  0: { rollup_field: void 0, eFeature: void 0 },
  1: { rollup_field: void 0, eFeature: void 0 },
  2: { rollup_field: `gifts`, eFeature: 0 },
  3: { rollup_field: `comments`, eFeature: 2 },
  4: { rollup_field: `inventory_items`, eFeature: 3 },
  5: { rollup_field: `invites`, eFeature: 4 },
  6: { rollup_field: `major_sale`, eFeature: 1 },
  7: { rollup_field: void 0, eFeature: void 0 },
  8: { rollup_field: `wishlist`, eFeature: 1 },
  9: { rollup_field: `trade_offers`, eFeature: 6 },
  10: { rollup_field: `general`, eFeature: 0 },
  11: { rollup_field: `help_request_replies`, eFeature: 0 },
  12: { rollup_field: `async_game_updates`, eFeature: 0 },
  14: { rollup_field: `moderator_messages`, eFeature: 2 },
  15: { rollup_field: `parental_feature_requests`, eFeature: 0 },
  16: { rollup_field: `family_invites`, eFeature: 0 },
  17: { rollup_field: `family_purchase_requests`, eFeature: 0 },
  18: { rollup_field: `parental_playtime_requests`, eFeature: 0 },
  19: { rollup_field: `family_purchase_request_responses`, eFeature: 0 },
  20: { rollup_field: `parental_feature_access_responses`, eFeature: 0 },
  21: { rollup_field: `parental_playtime_responses`, eFeature: 0 },
  22: { rollup_field: `requested_game_added`, eFeature: 0 },
  23: { rollup_field: void 0, eFeature: 0 },
  24: { rollup_field: void 0, eFeature: 0 },
  28: { rollup_field: `playtest_invites`, eFeature: 1 },
  29: { rollup_field: void 0, eFeature: 6 },
  30: { rollup_field: void 0, eFeature: 0 },
};
function Gn(e) {
  let t = Wn[e];
  return (p(!!t, `Missing notification type data for ${e}`), t);
}
function Kn(e, t, n) {
  if (!t) return !1;
  let r = Gn(e);
  return ye(t, r?.eFeature ?? 15, n);
}
function qn(e, t, n) {
  l(() => {
    let r = Gn(t);
    r?.rollup_field && (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + n));
  });
}
function H(e) {
  return !e.viewed || e.viewed + 600 > Ce();
}
function Jn(e) {
  return e.viewed && e.viewed + 172800 < Ce();
}
function Yn(e) {
  if (!e) return;
  let t = typeof e == `string` ? e : e.locString,
    n = typeof e == `string` ? [] : e.params || [];
  if (t) return t[0] === `#` ? A(t, ...n) : t;
}
function Xn(e, t) {
  return R.useMemo(() => {
    if (e === void 0) return null;
    let n = mn(e),
      r = Rn(t);
    if (!n || !r) return null;
    let i =
        typeof n.displayNameLoc == `function`
          ? n.displayNameLoc(r)
          : { locString: n.displayNameLoc },
      a =
        typeof n.titleLoc == `function`
          ? n.titleLoc(r)
          : { locString: n.titleLoc },
      o =
        typeof n.bodyLoc == `function`
          ? n.bodyLoc(r)
          : { locString: n.bodyLoc },
      s = typeof n.image == `function` ? n.image(r) : n.image,
      c = typeof n.link == `function` ? n.link(r) : n.link;
    return {
      display_name: Yn(i),
      title: Yn(a),
      body: Yn(o),
      image: s,
      link: c,
    };
  }, [t, e]);
}
function Zn(e, t) {
  return R.useMemo(() => {
    let n = _n(e),
      r = Rn(t);
    if (!n) return null;
    let i = typeof n.titleLoc == `string` ? n.titleLoc : n.titleLoc(r),
      a = typeof n.bodyLoc == `string` ? n.bodyLoc : n.bodyLoc(r),
      o = typeof n.url == `string` ? n.url : n.url(r),
      s =
        typeof n.steamidAttribute == `string`
          ? n.steamidAttribute
          : n.steamidAttribute(r);
    return { strTitleLoc: i, strBodyLoc: a, strUrl: o, steamid: r && r[s] };
  }, [t, e]);
}
function U(e) {
  return R.useMemo(() => (bn(e.type) ? Bn(e) : null), [e]);
}
var Qn = `xKH6brPrFV4-`,
  $n = `TGHZjszXouA-`,
  er = `_6e5Lw2oBEA8-`,
  tr = `WRvk-2z-S7U-`,
  nr = `nvOZwARKtWQ-`,
  rr = `XA47jRZ-kl4-`,
  ir = `_5TOP1rhjK9g-`,
  ar = `cfYT-RvHPnk-`,
  or = `X7vR4UwyQ10-`,
  sr = `YhW9H-T-Hto-`,
  cr = `uxNRiRH0W-8-`,
  lr = `ts49d7c2wyQ-`,
  ur = `_4wHdhfSncuQ-`,
  dr = `_3GiOMfMgSIk-`,
  fr = `rnSSdvjnnIY-`,
  pr = `PqHuV1F7Sv8-`,
  mr = `YR06jcjcqq0-`,
  hr = `N-3dV6EGIb0-`,
  gr = `_8dzP2cjjs8I-`,
  _r = `_78CF9aUvUeY-`,
  vr = `iq-v-asRRbU-`,
  yr = `BIeyjH0P840-`,
  br = `rreXhb5OR24-`,
  xr = `ohF5M-dbfvU-`,
  Sr = `FSYcqMA13Ys-`,
  Cr = `oFu8pAhMtAE-`,
  wr = `dNwwI424aTg-`,
  W = c();
function Tr(e) {
  let { onActivate: t, icon: n, body: r, eUIMode: i, classNames: a } = e,
    o = t,
    s = nr;
  return (
    i == 7 ? (s = hr) : i == 3 && (s = mr),
    (s = M(s, a)),
    (0, W.jsx)(j, {
      className: s,
      onActivate: o,
      children: (0, W.jsx)(`div`, {
        className: ir,
        children: (0, W.jsxs)(`div`, {
          className: ur,
          children: [(0, W.jsx)(`span`, { className: or, children: n }), r],
        }),
      }),
    })
  );
}
function Er(e) {
  let {
    count: t,
    icon: n,
    onActivate: r,
    strBody: i,
    bAlwaysShow: a,
    eUIMode: o,
    classNames: s,
    visible: c,
  } = e;
  return !t && !a
    ? null
    : (0, W.jsx)(Tr, {
        icon: n,
        body: i,
        onActivate: r,
        eUIMode: o,
        classNames: s,
        visible: c,
      });
}
function G(e) {
  let {
      nUnread: t,
      location: n,
      eUIMode: r,
      bLoading: i,
      footer: a,
      bNewIndicator: o,
    } = e,
    [s, c] = R.useState(+!!i),
    [l, u] = R.useState(void 0);
  (R.useEffect(() => {
    s == 1 && !i ? c(2) : s == 2 && i && c(1);
  }, [s, i]),
    R.useEffect(() => {
      let e = window.setTimeout(() => c(0), 2e4);
      return () => window.clearTimeout(e);
    }, []),
    R.useEffect(() => {
      t && t > 0 && l !== `_78CF9aUvUeY-` && n != 2 && n != 1
        ? u(_r)
        : !t && l == `_78CF9aUvUeY-` && u(gr);
    }, [t, n, l]));
  let d = e.onActivate;
  ((d ||= () => console.log(`Missing activate function`)),
    s == 1 && (d = void 0));
  let f = tr;
  n == 4 ? (f = dr) : n == 2 ? (f = pr) : (r == 7 || r == 3) && (f = fr);
  let p = null;
  if (s != 0 && n != 2 && n != 1) {
    let e = s == 2 ? br : null;
    p = (0, W.jsxs)(`div`, {
      className: M(yr, e),
      children: [
        (0, W.jsx)(`div`, { className: M(rr, xr) }),
        (0, W.jsxs)(`div`, {
          className: ir,
          children: [
            (0, W.jsx)(`div`, { className: M(ar, Cr) }),
            (0, W.jsx)(`div`, { className: M(vr, Sr) }),
          ],
        }),
      ],
    });
  }
  return (0, W.jsxs)(j, {
    onActivate: d,
    className: $n,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, W.jsxs)(`div`, {
        className: M(f, l),
        children: [
          (0, W.jsx)(`div`, { className: rr, children: e.logo }),
          e.personaStatus &&
            (0, W.jsx)(`div`, {
              className: M(`ZQ9KB1rwRQg-`, e.personaStatus),
            }),
          (0, W.jsx)(`div`, { className: ir, children: e.children }),
          p,
          o && (0, W.jsx)(Dr, { location: n }),
        ],
      }),
      a || null,
    ],
  });
}
function Dr(e) {
  let { location: t } = e;
  return t == 3
    ? (0, W.jsx)(`div`, { className: wr, children: (0, W.jsx)(me, {}) })
    : null;
}
function K(e) {
  let {
      icon: t,
      title: n,
      timestamp: r,
      location: i,
      fnRenderTimestamp: a,
    } = e,
    o = !!r && (i == 3 || i == 4),
    s;
  return (
    (s = i == 4 ? Ar : (a ?? jr)),
    (0, W.jsxs)(`div`, {
      className: ar,
      children: [
        (0, W.jsx)(Or, { icon: t }),
        !!n && (0, W.jsx)(kr, { title: n }),
        o && s({ timestamp: r }),
      ],
    })
  );
}
function Or(e) {
  return (0, W.jsxs)(W.Fragment, {
    children: [
      !!e.icon &&
        (0, W.jsx)(`div`, { className: `X7vR4UwyQ10-`, children: e.icon }),
      ` `,
    ],
  });
}
function kr(e) {
  return (0, W.jsx)(`div`, { className: sr, children: e.title });
}
function q(e) {
  let t = M(cr, e.multiline && `ho1ru92H8AU-`);
  return (0, W.jsx)(`div`, { className: t, children: e.children });
}
function J(e) {
  let t = M(lr, e.multiline && `ho1ru92H8AU-`);
  return (0, W.jsx)(`div`, { className: t, children: e.children });
}
function Ar(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = pe(e.timestamp);
  return (
    ve(t, n) || (r = he(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, W.jsx)(`div`, { className: er, children: r })
  );
}
function jr(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = ve(t, n) ? pe(e.timestamp) : he(e.timestamp, !1, !1, !1);
  return (0, W.jsx)(`div`, { className: er, children: r });
}
function Y(e) {
  return e == 1;
}
function Mr(e, t) {
  return R.useCallback(
    (n) => {
      (e && e(n), t && t());
    },
    [e, t],
  );
}
var Nr = `vjeKRorxqWY-`,
  Pr = `UWjdKshdhD8-`,
  Fr = `RZ1644uUH-k-`,
  Ir = `_5LTIC-a3DVw-`,
  Lr = `BXKoUPp7c7k-`,
  Rr = `kg8VJS07NZk-`,
  zr = `_8zZun04K77E-`,
  Br = `rK6Z0uFfmRo-`;
function X(e) {
  let {
      onActivate: t,
      onDismiss: n,
      logo: r,
      icon: i,
      title: a,
      body: o,
      personaStatus: s,
      className: c,
      singleLineOnly: l,
      fullWidth: u,
      bodySuffix: d,
      bodySuffixToken: f,
    } = e,
    p = Mr(t, n);
  return (
    d &&
      f &&
      (o = _e(
        f,
        (0, W.jsx)(`span`, { className: zr, children: o }),
        (0, W.jsx)(`span`, { className: Br, children: d }),
      )),
    (0, W.jsxs)(j, {
      className: M(Rr, !l && !d && `_5OrWG-2Mx14-`, c),
      onActivate: p,
      onMouseDown: (e) => {
        e.button == 1 && n && n();
      },
      children: [
        (0, W.jsx)(`div`, { className: Lr, children: r }),
        e.personaStatus &&
          (0, W.jsx)(`div`, { className: M(`f0Hsd0awDV4-`, s) }),
        (0, W.jsxs)(`div`, {
          className: M(Nr, u && `Dcsg7SLpVF8-`),
          children: [
            (0, W.jsxs)(`div`, {
              className: Pr,
              children: [
                !!i &&
                  (0, W.jsx)(`div`, { className: `q9vQBNOskjU-`, children: i }),
                (0, W.jsx)(`div`, { className: Fr, children: a }),
              ],
            }),
            (0, W.jsx)(`div`, {
              className: M(Ir, !!d && `Mx1dwYBxHfo-`),
              children: o,
            }),
          ],
        }),
      ],
    })
  );
}
var Vr = `wtEvuR05t3A-`,
  Hr = `JxEGxPRLYiU-`,
  Z = `QEIVNNUa9hM-`,
  Ur = `GYEm-fQU5e0-`,
  Wr = `jkcoKzEvvVE-`,
  Gr = `Z-UOt0JU-rA-`;
function Kr(e) {
  switch (e) {
    case 6:
      return (0, W.jsx)(E, {});
    case 11:
      return (0, W.jsx)(re, {});
    default:
      return (0, W.jsx)(D, {});
  }
}
function qr(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = typeof n?.image == `number`,
    l = c ? { appid: n.image } : void 0,
    { data: u } = O(l),
    { data: d } = we(l),
    f = n?.display_name ?? ``,
    p = n?.title ?? n?.body,
    m = n?.title ? n.body : null,
    h = Y(r),
    g = l && (!u || !d),
    [_, v] = R.useState(!1),
    y = () => v(!0),
    b = null;
  if (c) b = ri(d, t, h);
  else {
    let e = h ? Z : Vr;
    b =
      n?.image && !_
        ? (0, W.jsx)(`img`, { className: e, src: n.image, onError: y })
        : t;
  }
  return h
    ? (0, W.jsx)(X, { ...e, logo: b, icon: i, title: f, body: p })
    : (0, W.jsx)($, {
        children: (0, W.jsxs)(G, {
          logo: b,
          bLoading: g,
          ...e,
          children: [
            (0, W.jsx)(K, {
              icon: i,
              title: f,
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, W.jsx)(q, { multiline: !m, children: p }),
            !!m && (0, W.jsx)(J, { children: m }),
            s ? (0, W.jsx)(Q, { onHide: s }) : null,
          ],
        }),
      });
}
function Jr(e) {
  let {
      displayName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = Y(n),
    c = A(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? A(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : A(`#SteamNotifications_TradeOffer_Body`),
    u = A(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
    d = !t;
  return s
    ? (0, W.jsx)(X, { ...e, logo: e.logo, icon: e.icon, title: c, body: l })
    : (0, W.jsx)($, {
        children: (0, W.jsxs)(G, {
          bLoading: d,
          ...e,
          children: [
            (0, W.jsx)(K, {
              icon: r,
              title: c,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, W.jsx)(q, { children: l }),
            (0, W.jsx)(J, { children: u }),
            o ? (0, W.jsx)(Q, { onHide: o }) : null,
          ],
        }),
      });
}
var Yr = (e) => {
  let {
      location: t,
      icon: n,
      timestamp: r,
      fnRenderTimestamp: i,
      onHide: a,
    } = e,
    o = Y(t),
    s = A(`#SteamNotifications_TradeReversal_Title`),
    c = A(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = A(`#SteamNotifications_TradeReversal_Description`);
  return o
    ? (0, W.jsx)(X, { ...e, logo: e.logo, icon: e.icon, title: s, body: c })
    : (0, W.jsx)($, {
        children: (0, W.jsxs)(G, {
          ...e,
          children: [
            (0, W.jsx)(K, {
              icon: n,
              title: s,
              timestamp: r,
              location: t,
              fnRenderTimestamp: i,
            }),
            (0, W.jsx)(q, { children: c }),
            (0, W.jsx)(J, { children: l }),
            a ? (0, W.jsx)(Q, { onHide: a }) : null,
          ],
        }),
      });
};
function Xr(e) {
  let {
      senderName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = Y(n),
    c = s
      ? A(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : A(`#Notification_GiftReceived_Body`),
    l = t ? A(`#Notification_GiftReceived_Description`, t) : null,
    u = A(`#Notification_GiftReceived_Title`),
    d = !t;
  return s
    ? (0, W.jsx)(X, { ...e, logo: e.logo, icon: e.icon, title: u, body: c })
    : (0, W.jsx)($, {
        children: (0, W.jsxs)(G, {
          bLoading: d,
          ...e,
          children: [
            (0, W.jsx)(K, {
              icon: r,
              title: u,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, W.jsx)(q, { multiline: !l, children: c }),
            !!l && (0, W.jsx)(J, { children: l }),
            o ? (0, W.jsx)(Q, { onHide: o }) : null,
          ],
        }),
      });
}
function Zr(e) {
  let {
      requestorName: t,
      requestorAvatarURL: n,
      fallbackLogo: r,
      data: i,
      location: a,
      icon: o,
      timestamp: s,
      fnRenderTimestamp: c,
      onHide: l,
    } = e,
    u = Y(a),
    d = ``;
  t && i.state == 2
    ? (d = A(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (d = A(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (d = A(`#SteamNotifications_FriendInvite_Description`));
  let [f, p] = R.useState(!1),
    m = () => p(!0),
    h = r;
  if (n && !f) {
    let e = i.state == 3 && a != 1,
      t = u ? Z : Vr;
    h = (0, W.jsxs)(j, {
      style: { position: `relative` },
      children: [
        e && (0, W.jsx)(ne, { className: `A9KSdbG38mc-` }),
        (0, W.jsx)(`img`, { className: t, src: n, onError: m }),
      ],
    });
  }
  let g = t || A(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !t;
  return u
    ? (0, W.jsx)(X, {
        ...e,
        logo: h,
        icon: e.icon,
        title: A(`#Notification_FriendInvite_Title`),
        body: g,
      })
    : (0, W.jsx)($, {
        children: (0, W.jsxs)(G, {
          logo: h,
          bLoading: _,
          ...e,
          children: [
            (0, W.jsx)(K, {
              icon: o,
              title: A(`#Notification_FriendInvite_Title`),
              timestamp: s,
              location: a,
              fnRenderTimestamp: c,
            }),
            (0, W.jsx)(q, { multiline: !d, children: g }),
            !!d && (0, W.jsx)(J, { children: d }),
            l ? (0, W.jsx)(Q, { onHide: l }) : null,
          ],
        }),
      });
}
function Qr(e) {
  let {
      itemState: t,
      fallbackLogo: n,
      data: r,
      location: i,
      icon: a,
      timestamp: o,
      appName: s,
      fnRenderTimestamp: c,
      nUnread: l,
      onHide: u,
    } = e,
    [d, f] = R.useState(!1),
    p = () => f(!0),
    m = Y(i),
    h = n;
  if (t?.icon_url && !d) {
    let e = `${I.COMMUNITY_CDN_URL}economy/image/${t.icon_url}`,
      n = t.background_color ? `#` + t.background_color : null,
      r = m ? Z : Vr;
    h = (0, W.jsx)(j, {
      style: { position: `relative` },
      children: (0, W.jsx)(`img`, {
        className: r,
        style: { backgroundColor: n ?? void 0, justifyContent: `center` },
        src: e,
        onError: p,
      }),
    });
  }
  let g = r.appid == 753,
    _ = null;
  if (l !== void 0 && l > 1) {
    let e = l - 1;
    _ = g
      ? A(`#Notification_Item_RollupMore_Steam`, e)
      : s
        ? A(`#Notification_Item_RollupMore_GameName`, e, s)
        : A(`#Notification_Item_RollupMore`, e);
  } else s && (_ = g ? s : A(`#Notification_Item_Single_GameName`, s));
  let v = t?.name ? t.name : A(`#Notification_Item_Body_Generic`),
    y = !t;
  if (m) {
    let t = ``;
    return (
      (t = s
        ? A(
            l > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            s,
          )
        : A(`#Notification_Item_Body_Generic`)),
      (0, W.jsx)(X, {
        ...e,
        logo: h,
        icon: e.icon,
        title: A(`#Notification_ItemAnnouncement_Body`),
        body: t,
      })
    );
  }
  return (0, W.jsx)($, {
    children: (0, W.jsxs)(G, {
      logo: h,
      bLoading: y,
      ...e,
      children: [
        (0, W.jsx)(K, {
          icon: a,
          title: A(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: o,
          location: i,
          fnRenderTimestamp: c,
        }),
        (0, W.jsx)(q, { multiline: !_, children: v }),
        !!_ && (0, W.jsx)(J, { children: _ }),
        u ? (0, W.jsx)(Q, { onHide: u }) : null,
      ],
    }),
  });
}
function $r(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = Y(r),
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = O(l),
    { data: d } = we(l),
    f = ri(d, t, c),
    p = l && (!u || !d),
    m = ``;
  return (
    n.state == 1
      ? (m =
          c && u?.name
            ? A(`#SteamNotification_AsyncGame_Action_Short`, u.name)
            : A(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (m =
          c && u?.name
            ? A(`#SteamNotification_AsyncGame_Done_Short`, u.name)
            : A(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, W.jsx)(X, {
          ...e,
          logo: f,
          icon: e.icon,
          title: A(`#SteamNotification_AsyncGame_Title`),
          body: m,
        })
      : (0, W.jsx)($, {
          children: (0, W.jsxs)(G, {
            logo: f,
            bLoading: p,
            ...e,
            children: [
              (0, W.jsx)(K, {
                icon: i,
                title: A(`#SteamNotification_AsyncGame_Title`),
                timestamp: a,
                location: r,
                fnRenderTimestamp: o,
              }),
              (0, W.jsx)(q, { children: m }),
              (0, W.jsx)(J, { children: u?.name }),
              s ? (0, W.jsx)(Q, { onHide: s }) : null,
            ],
          }),
        })
  );
}
function ei(e) {
  let {
      title: t,
      body: n,
      logoUrl: r,
      bDataLoading: i,
      icon: a,
      onHide: o,
      location: s,
      timestamp: c,
      fnRenderTimestamp: l,
      onActivate: u,
      personaStatus: d,
    } = e,
    f = Y(s),
    p = f ? Z : Vr,
    m = (0, W.jsx)(j, {
      style: { position: `relative` },
      children: (0, W.jsx)(`img`, {
        className: p,
        style: { justifyContent: `center` },
        src: r,
      }),
    });
  return f
    ? (0, W.jsx)(X, {
        logo: m,
        icon: e.icon,
        title: t,
        body: n,
        onActivate: u,
        personaStatus: d,
      })
    : (0, W.jsx)($, {
        children: (0, W.jsxs)(G, {
          logo: m,
          bLoading: i,
          onActivate: u,
          personaStatus: d,
          ...e,
          children: [
            (0, W.jsx)(K, {
              icon: a,
              title: t,
              timestamp: c,
              location: s,
              fnRenderTimestamp: l,
            }),
            (0, W.jsx)(q, { multiline: !0, children: n }),
            o ? (0, W.jsx)(Q, { onHide: o }) : null,
          ],
        }),
      });
}
function ti(e) {
  let {
      currentUserSteamID: t,
      fallbackLogo: n,
      postedByDisplayName: r,
      postedByAvatarURL: i,
      ownerDisplayName: a,
      data: o,
      location: s,
      icon: c,
      timestamp: l,
      fnRenderTimestamp: d,
      nUnread: f,
      appName: p,
      onHide: m,
      commentTitle: h,
      commentBody: g,
    } = e,
    _ = h,
    v = Y(s),
    [y, b] = R.useState(!1),
    ee = () => b(!0),
    [te, x] = u(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    S = Nn(o) ? r : null,
    C = Fn(o) ? a : null;
  o.comment_type == 10
    ? (_ =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && S
            ? A(`#SteamNotifications_Comment_Your_Profile_By`, S)
            : A(`#SteamNotifications_Comment_Your_Profile`)
          : C
            ? s == 4 && S
              ? A(`#SteamNotifications_Comment_Player_Profile_By`, S, C)
              : A(`#SteamNotifications_Comment_Player_Profile`, C)
            : A(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (_ =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? p
              ? A(`#SteamNotifications_Comment_Your_Screenshot_Game`, p)
              : A(`#SteamNotifications_Comment_Your_Screenshot`)
            : p
              ? A(`#SteamNotifications_Comment_Screenshot_Game`, p)
              : A(`#SteamNotifications_Comment_Screenshot`))
      : !_ && o.json_data?.title && (_ = o.json_data.title);
  let w = null;
  o.brate_limited
    ? (_ =
        o.comment_type == 7 && o.bis_forum && g
          ? A(`#SteamNotifications_Comment_RateLimited_Forum`, g)
          : A(`#SteamNotifications_Comment_RateLimited`))
    : (w =
        o.comment_type == 7 && o.bis_forum && g
          ? (0, W.jsx)(J, {
              children: A(`#SteamNotifications_Comment_NewDiscussion`, g),
            })
          : (0, W.jsxs)(J, { children: [`"`, g, `"`] }));
  let re = A(`#SteamNotifications_Comment`),
    T = null;
  if (f !== void 0 && f > 1) {
    let e = `+` + (f - 1);
    s == 4
      ? (T = (0, W.jsx)(`div`, { className: Ur, children: e }))
      : (re = re + ` ` + e);
  }
  let E = n;
  if (!y) {
    let e = v ? Z : Vr;
    if (i && Pn(o)) {
      let t = o.bhas_friend && s != 1;
      E = (0, W.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, W.jsx)(ne, { className: `A9KSdbG38mc-` }),
          (0, W.jsx)(`img`, { className: e, src: i, onError: ee }),
        ],
      });
    } else
      x?.avatar_medium_url &&
        (E = (0, W.jsx)(`img`, {
          className: e,
          src: x.avatar_medium_url,
          onError: ee,
        }));
  }
  return v
    ? (0, W.jsx)(X, { ...e, logo: E, icon: e.icon, title: re, body: _ })
    : (0, W.jsx)($, {
        children: (0, W.jsxs)(G, {
          logo: E,
          ...e,
          children: [
            (0, W.jsx)(K, {
              icon: c,
              title: re,
              timestamp: l,
              location: s,
              fnRenderTimestamp: d,
            }),
            (0, W.jsx)(q, { children: _ }),
            w,
            T,
            m ? (0, W.jsx)(Q, { onHide: m }) : null,
          ],
        }),
      });
}
function ni(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = Y(r),
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = O(l),
    { data: d } = we(l),
    { data: f } = y(l),
    p = ri(d, t, c),
    m = l && (!u || !d || !f),
    h = ``,
    g = null;
  if (u) {
    let e = u.name ?? ``;
    ((h = e),
      n.count == 1
        ? c
          ? (h = _e(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, W.jsx)(`span`, { children: e }),
              (0, W.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
          : (g = _e(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, W.jsx)(`bdi`, {
                dir: `ltr`,
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? c
            ? (h = A(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (g = A(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : c
            ? (h = A(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (g = A(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              )));
  } else h = A(`#SteamNotifications_Wishlist_Generic`);
  return c
    ? (0, W.jsx)(X, {
        ...e,
        logo: p,
        icon: e.icon,
        title: A(`#SteamNotifications_Wishlist`),
        body: h,
      })
    : (0, W.jsx)($, {
        children: (0, W.jsxs)(G, {
          logo: p,
          bLoading: m,
          ...e,
          children: [
            (0, W.jsx)(K, {
              icon: i,
              title: A(`#SteamNotifications_Wishlist`),
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, W.jsx)(q, { multiline: !g, children: h }),
            !!g && (0, W.jsx)(J, { children: g }),
            s ? (0, W.jsx)(Q, { onHide: s }) : null,
          ],
        }),
      });
}
function ri(e, t, n = !1) {
  let [r, i] = R.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, W.jsx)(j, { style: { position: `relative` }, children: t });
  let o = d(e, `community_icon`);
  return n
    ? (0, W.jsx)(j, {
        style: { position: `relative` },
        children: (0, W.jsx)(`img`, { src: o, className: Z, onError: a }),
      })
    : (0, W.jsxs)(j, {
        style: { position: `relative` },
        children: [
          (0, W.jsx)(`img`, { className: M(Hr), src: o, onError: a }),
          (0, W.jsx)(`img`, {
            src: o,
            onError: a,
            style: {
              position: `absolute`,
              left: 7,
              top: 7,
              height: 32,
              width: 32,
            },
          }),
        ],
      });
}
function Q(e) {
  return (0, W.jsx)(`div`, {
    className: Wr,
    onClick: (t) => {
      (e.onHide(), t.stopPropagation(), t.preventDefault());
    },
    onMouseDown: (e) => {
      (e.stopPropagation(), e.preventDefault());
    },
    children: (0, W.jsx)(ce, {}),
  });
}
function $(e) {
  return (0, W.jsx)(`div`, { className: Gr, children: e.children });
}
var ii = null,
  ai = !1;
function oi() {
  return ((ii ||= new Ae({ BIsFriend: ke() })), ii);
}
function si() {
  let e = oe(),
    t = m(),
    r = n(() => oi().m_bInitialized);
  return (
    !r &&
      !ai &&
      ((ai = !0), ii.Init(ge.accountid, e, t).finally(() => (ai = !1))),
    [r, ii]
  );
}
function ci(e) {
  let t = null;
  return (vn(e) ? (t = pi) : hn(e) ? (t = ui) : Ci[e] && (t = Ci[e]), t);
}
function li(e) {
  let { rollup: t, uimode: n, location: r } = e,
    i = ci(t.type);
  return i
    ? (0, W.jsx)(_, {
        controller: `notification`,
        method: S(n),
        submethod: xe(r),
        children: (0, W.jsx)(i, { ...e }),
      })
    : null;
}
function ui(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Xn(t.item.notification_type, t.item.body_data),
    s = je(t.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    c = fe(o?.link ?? `#`, s);
  return (0, W.jsx)(`a`, {
    href: o?.link ? c : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, W.jsx)(qr, {
      icon: Kr(t.type),
      onActivate: () =>
        n(() => {
          o?.link && c && window.location.assign(c);
        }, t.item),
      fallbackLogo: (0, W.jsx)(D, {}),
      location: r,
      eUIMode: i,
      data: o,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: H(t.item),
      onHide: a,
    }),
  });
}
function di(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = `${I.COMMUNITY_BASE_URL}my/gamenotifications/`,
    s = () => n(() => window.location.assign(o), t.item),
    c = (e) => n(() => {}, t.item, e),
    l = U(t);
  return (0, W.jsx)(`a`, {
    href: o,
    onMouseDown: c,
    children: (0, W.jsx)($r, {
      icon: (0, W.jsx)(D, {}),
      fallbackLogo: (0, W.jsx)(de, {}),
      onActivate: s,
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: H(t.item),
      onHide: a,
    }),
  });
}
function fi(e) {
  let {
      steamid: t,
      url: n,
      strTitleLoc: r,
      strBodyLoc: i,
      rollup: a,
      onNotificationClick: o,
      location: s,
      uimode: c,
      onHide: l,
    } = e,
    { data: u } = f(t),
    d = (e) => o(() => {}, a.item, e),
    p = () => o(() => window.location.assign(n), a.item);
  if (!i) return null;
  let m = !u,
    h = A(r, u?.m_strPlayerName ?? ``),
    g = A(i, u?.m_strPlayerName ?? ``);
  return (0, W.jsx)(`a`, {
    href: n,
    onMouseDown: d,
    children: (0, W.jsx)(ei, {
      title: h,
      body: g,
      bDataLoading: m,
      logoUrl: u?.avatar_url_medium,
      icon: (0, W.jsx)(D, {}),
      onActivate: p,
      location: s,
      eUIMode: c,
      timestamp: a.timestamp,
      nUnread: a.rgunread.length,
      bNewIndicator: H(a.item),
      onHide: l,
    }),
  });
}
function pi(e) {
  let t = Zn(e.rollup.type, e.rollup.item.body_data);
  if (!t) return null;
  let { strTitleLoc: n, strBodyLoc: r, strUrl: i, steamid: a } = t;
  return !a || !n || !r
    ? null
    : (0, W.jsx)(fi, {
        steamid: a,
        url: i,
        strTitleLoc: n,
        strBodyLoc: r,
        ...e,
      });
}
function mi(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = N(),
    s = U(t),
    c = `${I.COMMUNITY_BASE_URL}profiles/${o}/tradeoffers`,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => n(() => {}, t.item, e),
    d = ie.InitFromAccountID(s, I.EUNIVERSE),
    { data: p } = f(d.GetAccountID());
  return (0, W.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, W.jsx)(Jr, {
      logo: (0, W.jsx)(D, {}),
      icon: (0, W.jsx)(be, {}),
      onActivate: l,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      displayName: p?.m_strPlayerName,
      bNewIndicator: H(t.item),
      onHide: a,
    }),
  });
}
var hi = (e) => {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = `${I.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, W.jsx)(`a`, {
    href: o,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, W.jsx)(Yr, {
      logo: (0, W.jsx)(D, {}),
      icon: (0, W.jsx)(be, {}),
      onActivate: () => n(() => window.location.assign(o), t.item),
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: H(t.item),
      onHide: a,
    }),
  });
};
function gi(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = N(),
    s = `${I.COMMUNITY_BASE_URL}profiles/${o}/inventory/#pending_gifts`,
    c = () => n(() => window.location.assign(s), t.item),
    l = (e) => n(() => {}, t.item, e),
    u = U(t),
    d = ie.InitFromAccountID(u, I.EUNIVERSE),
    { data: p } = f(d.GetAccountID());
  return (0, W.jsx)(`a`, {
    href: s,
    onMouseDown: l,
    children: (0, W.jsx)(Xr, {
      logo: (0, W.jsx)(D, {}),
      icon: (0, W.jsx)(Te, {}),
      onActivate: c,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      senderName: p?.m_strPlayerName,
      bNewIndicator: H(t.item),
      onHide: a,
    }),
  });
}
function _i(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = U(t),
    { data: s } = f(o.responder_steamid),
    c =
      o.package_id > 0
        ? { packageid: o.package_id }
        : { bundleid: o.bundle_id },
    { data: l } = g(c),
    u = l ? `app/${l.appid}` : ``,
    d = `${I.STORE_BASE_URL}${u}`,
    p = () => n(() => window.location.assign(d), t.item),
    m = (e) => n(() => {}, t.item, e),
    h = !s || !l,
    _ = A(`#SteamNotifications_RequestedGameAddedTitle`),
    v = l ? A(`#SteamNotifications_RequestedGameAddedBody`, l.name ?? ``) : ``;
  return (0, W.jsx)(`a`, {
    href: d,
    onMouseDown: m,
    children: (0, W.jsx)(ei, {
      title: _,
      body: v,
      bDataLoading: h,
      logoUrl: s?.avatar_url_medium,
      icon: (0, W.jsx)(D, {}),
      onActivate: p,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: H(t.item),
      onHide: a,
    }),
  });
}
function vi(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = N(),
    s = oe(),
    c = jn(t.item, o, s),
    l = U(t),
    { data: u } = O(l?.appid ? { appid: l.appid } : void 0),
    d = `${I.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, W.jsx)(`a`, {
    href: d,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, W.jsx)(Qr, {
      appName: u?.name,
      icon: (0, W.jsx)(ae, {}),
      fallbackLogo: (0, W.jsx)(D, {}),
      onActivate: () => n(() => window.location.assign(d), t.item),
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      itemState: c,
      bNewIndicator: H(t.item),
      onHide: a,
    }),
  });
}
function yi(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = N(),
    s = `${I.COMMUNITY_BASE_URL}profiles/${o}/friends/pending`,
    c = () => n(() => window.location.assign(s), t.item),
    l = (e) => n(() => {}, t.item, e),
    u = U(t),
    { data: d } = f(u.requestorID);
  return (0, W.jsx)(`a`, {
    href: s,
    onMouseDown: l,
    children: (0, W.jsx)(Zr, {
      fallbackLogo: (0, W.jsx)(C, {}),
      icon: (0, W.jsx)(se, {}),
      onActivate: c,
      location: r,
      eUIMode: i,
      data: u,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      requestorAvatarURL: d?.avatar_url_medium,
      requestorName: d?.m_strPlayerName,
      bNewIndicator: H(t.item),
      onHide: a,
    }),
  });
}
function bi(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = U(t),
    s = N(),
    c = I.COMMUNITY_BASE_URL + t.url,
    l = () => n(() => window.location.assign(c), t.item),
    u = (e) => {
      n(() => {}, t.item, e);
    },
    d = In(o) ? o?.account_steam_id?.GetAccountID() : null,
    { data: p } = f(d),
    m = Ln(o) ? o?.owner_steam_id?.GetAccountID() : null,
    { data: h } = f(m),
    g = o.json_data?.app_id ? { appid: o.json_data?.app_id } : void 0,
    { data: _ } = O(g),
    [v, y] = si(),
    b = v ? y.FilterText(o.account_steam_id.GetAccountID(), o.title) : ``,
    ee = v ? y.FilterText(o.account_steam_id.GetAccountID(), o.comment) : ``;
  return (0, W.jsx)(`a`, {
    href: c,
    onMouseDown: u,
    children: (0, W.jsx)(ti, {
      fallbackLogo: (0, W.jsx)(D, {}),
      icon: (0, W.jsx)(le, {}),
      onActivate: l,
      location: r,
      currentUserSteamID: s,
      eUIMode: i,
      data: o,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      postedByAvatarURL: p?.avatar_url_medium,
      postedByDisplayName: p?.m_strPlayerName,
      ownerDisplayName: h?.m_strPlayerName,
      bNewIndicator: H(t.item),
      appName: _?.name,
      onHide: a,
      commentTitle: b,
      commentBody: ee,
      bLoading: !v,
    }),
  });
}
function xi(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = U(t),
    { data: s } = O({ appid: o.appid }),
    [c, l] = (0, R.useState)(``),
    u = N();
  return (
    (0, R.useEffect)(() => {
      if (o.count > 1 && o.appids?.length)
        return l(
          I.STORE_BASE_URL +
            `wishlist/profiles/${u}/?wng=${o.appids.toString()}#sort=discount`,
        );
      if (s) return l(I.STORE_BASE_URL + s.store_url_path);
      let e = o.appid ? `?appid=${o.appid}` : ``;
      l(I.STORE_BASE_URL + `wishlist/profiles/${u}/${e}#sort=discount`);
    }, [o, s, u]),
    (0, W.jsx)(`a`, {
      href: c,
      onMouseDown: (e) => n(() => {}, t.item, e),
      children: (0, W.jsx)(ni, {
        fallbackLogo: (0, W.jsx)(D, {}),
        icon: (0, W.jsx)(E, {}),
        onActivate: () => n(() => window.location.assign(c), t.item),
        location: r,
        data: o,
        timestamp: t.timestamp,
        nUnread: t.rgunread.length,
        eUIMode: i,
        bNewIndicator: H(t.item),
        onHide: a,
      }),
    })
  );
}
function Si(e) {
  let { url: t, count: n, icon: r, strBody: i, eFeature: a } = e,
    o = ue(a);
  return !n || o
    ? null
    : (0, W.jsx)(`a`, {
        href: t,
        className: Qn,
        children: (0, W.jsx)(Er, {
          icon: (0, W.jsx)(r, {}),
          count: n,
          onActivate: () => window.location.assign(t),
          strBody: i,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var Ci = { 3: bi, 8: xi, 5: yi, 4: vi, 2: gi, 9: mi, 12: di, 22: _i, 29: hi };
export {
  Jn as a,
  Dn as c,
  qn as d,
  Kn as i,
  Bn as l,
  li as n,
  V as o,
  Si as r,
  En as s,
  ci as t,
  Un as u,
};
