/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Nt as n,
  Ot as r,
  St as i,
  kt as a,
  ot as o,
} from "./chunk~01cfc309bf.js";
import {
  Ab as s,
  Ax as c,
  Ml as l,
  Zb as u,
  Zy as d,
  _S as f,
  dS as p,
  fS as m,
  gS as h,
  hS as g,
  kx as _,
  lS as v,
  mS as y,
  pS as b,
  qb as x,
  vS as S,
  vx as C,
  w as ee,
} from "./main.js";
import "./chunk~ec93a260ba.js";
import { a as te } from "./chunk~0ef7cd9db7.js";
var w = e(n(), 1);
function ne(e) {
  return `unknown ESteamNotificationType ( ` + e + ` )`;
}
var T = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            notification_targets: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            notification_type: { n: 3, br: y.readEnum, bw: S.writeEnum },
            body_data: { n: 4, br: y.readString, bw: S.writeString },
            read: { n: 7, br: y.readBool, bw: S.writeBool },
            timestamp: { n: 8, br: y.readUint32, bw: S.writeUint32 },
            hidden: { n: 9, br: y.readBool, bw: S.writeBool },
            expiry: { n: 10, br: y.readUint32, bw: S.writeUint32 },
            viewed: { n: 11, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamNotificationData`;
    }
  },
  E = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_hidden || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_hidden: { n: 1, d: !1, br: y.readBool, bw: S.writeBool },
            language: { n: 2, d: 0, br: y.readInt32, bw: S.writeInt32 },
            include_confirmation_count: {
              n: 3,
              d: !0,
              br: y.readBool,
              bw: S.writeBool,
            },
            include_pinned_counts: {
              n: 4,
              d: !1,
              br: y.readBool,
              bw: S.writeBool,
            },
            include_read: { n: 5, d: !0, br: y.readBool, bw: S.writeBool },
            count_only: { n: 6, d: !1, br: y.readBool, bw: S.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Request`;
    }
  },
  re = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notifications || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: T, r: !0, q: !0 },
            confirmation_count: { n: 2, br: y.readInt32, bw: S.writeInt32 },
            pending_gift_count: { n: 3, br: y.readUint32, bw: S.writeUint32 },
            pending_friend_count: { n: 5, br: y.readUint32, bw: S.writeUint32 },
            unread_count: { n: 6, br: y.readUint32, bw: S.writeUint32 },
            pending_family_invite_count: {
              n: 7,
              br: y.readUint32,
              bw: S.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Response`;
    }
  },
  ie = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            notification_type: { n: 2, br: y.readEnum, bw: S.writeEnum },
            notification_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: y.readUint64String,
              pbr: y.readPackedUint64String,
              bw: S.writeRepeatedUint64String,
            },
            mark_all_read: { n: 4, br: y.readBool, bw: S.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsRead_Notification`;
    }
  },
  ae = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.remote_client_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            target_client_type: { n: 2, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsViewed_Notification`;
    }
  },
  D = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            notification_targets: { n: 2, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamNotificationPreference`;
    }
  },
  oe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: D, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Request`;
    }
  },
  se = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Response`;
    }
  },
  ce = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Request`;
    }
  },
  le = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: D, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Response`;
    }
  },
  ue = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notification_ids || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
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
              br: y.readUint64String,
              pbr: y.readPackedUint64String,
              bw: S.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_HideNotification_Notification`;
    }
  },
  de = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.notifications || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: T, r: !0, q: !0 },
            pending_gift_count: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            pending_friend_count: { n: 3, br: y.readUint32, bw: S.writeUint32 },
            pending_family_invite_count: {
              n: 4,
              br: y.readUint32,
              bw: S.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_NotificationsReceived_Notification`;
    }
  },
  fe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: D, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamNotification_PreferencesUpdated_Notification`;
    }
  },
  O;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `SteamNotification.GetSteamNotifications#1`,
      c(E, t, n),
      re,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetSteamNotifications = t;
  function n(e, t) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsRead#1`,
      c(ie, t),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.MarkNotificationsRead = n;
  function r(e, t) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsViewed#1`,
      c(ae, t),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.MarkNotificationsViewed = r;
  function i(e, t) {
    return e.SendNotification(
      `SteamNotification.HideNotification#1`,
      c(ue, t),
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.HideNotification = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamNotification.SetPreferences#1`, c(oe, t, n), se, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.SetPreferences = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamNotification.GetPreferences#1`, c(ce, t, n), le, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPreferences = o;
})((O ||= {}));
var pe;
(function (e) {
  ((e.NotificationsReceivedHandler = {
    name: `SteamNotificationClient.NotificationsReceived#1`,
    request: de,
  }),
    (e.PreferencesUpdatedHandler = {
      name: `SteamNotificationClient.PreferencesUpdated#1`,
      request: fe,
    }));
})((pe ||= {}));
var me = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: y.readString, bw: S.writeString },
            value: { n: 2, br: y.readString, bw: S.writeString },
            color: { n: 3, br: y.readString, bw: S.writeString },
            label: { n: 4, br: y.readString, bw: S.writeString },
            name: { n: 5, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  k = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: y.readString, bw: S.writeString },
            name: { n: 2, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  A = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            category: { n: 2, br: y.readString, bw: S.writeString },
            internal_name: { n: 3, br: y.readString, bw: S.writeString },
            localized_category_name: {
              n: 4,
              br: y.readString,
              bw: S.writeString,
            },
            localized_tag_name: { n: 5, br: y.readString, bw: S.writeString },
            color: { n: 6, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  he = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contained_items || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: j, r: !0, q: !0 },
            search_tags: { n: 2, c: A, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  j = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: y.readUint64String, bw: S.writeUint64String },
            instanceid: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  M = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(
          this,
          t,
          0,
          -1,
          [8, 10, 11, 12, 13, 21, 26],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readInt32, bw: S.writeInt32 },
            classid: { n: 2, br: y.readUint64String, bw: S.writeUint64String },
            instanceid: {
              n: 3,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            currency: { n: 4, br: y.readBool, bw: S.writeBool },
            background_color: { n: 5, br: y.readString, bw: S.writeString },
            icon_url: { n: 6, br: y.readString, bw: S.writeString },
            icon_url_large: { n: 7, br: y.readString, bw: S.writeString },
            descriptions: { n: 8, c: me, r: !0, q: !0 },
            tradable: { n: 9, br: y.readBool, bw: S.writeBool },
            actions: { n: 10, c: k, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: me, r: !0, q: !0 },
            owner_actions: { n: 12, c: k, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: y.readString,
              bw: S.writeRepeatedString,
            },
            name: { n: 14, br: y.readString, bw: S.writeString },
            name_color: { n: 15, br: y.readString, bw: S.writeString },
            type: { n: 16, br: y.readString, bw: S.writeString },
            market_name: { n: 17, br: y.readString, bw: S.writeString },
            market_hash_name: { n: 18, br: y.readString, bw: S.writeString },
            market_fee: { n: 19, br: y.readString, bw: S.writeString },
            market_fee_app: { n: 28, br: y.readInt32, bw: S.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: k, r: !0, q: !0 },
            commodity: { n: 22, br: y.readBool, bw: S.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: y.readInt32,
              bw: S.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: y.readInt32,
              bw: S.writeInt32,
            },
            marketable: { n: 25, br: y.readBool, bw: S.writeBool },
            tags: { n: 26, c: A, r: !0, q: !0 },
            item_expiration: { n: 27, br: y.readString, bw: S.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: y.readString,
              bw: S.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: y.readString,
              bw: S.writeString,
            },
            sealed: { n: 32, br: y.readBool, bw: S.writeBool },
            container_properties: { n: 33, c: he },
            market_bucket_group_name: {
              n: 34,
              br: y.readString,
              bw: S.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: y.readString,
              bw: S.writeString,
            },
            sealed_type: { n: 37, br: y.readUint32, bw: S.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: y.readString,
              bw: S.writeString,
            },
            market_bucket_id: { n: 39, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  N = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.propertyid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            int_value: { n: 2, br: y.readInt64String, bw: S.writeInt64String },
            float_value: { n: 3, br: y.readFloat, bw: S.writeFloat },
            string_value: { n: 4, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  ge = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: y.readUint64String, bw: S.writeUint64String },
            instanceid: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            standalone_properties: { n: 3, c: N, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: N, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  _e = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            contextid: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            assetid: { n: 3, br: y.readUint64String, bw: S.writeUint64String },
            asset_properties: { n: 4, c: N, r: !0, q: !0 },
            asset_accessories: { n: 5, c: ge, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  ve = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            name: { n: 2, br: y.readString, bw: S.writeString },
            type: { n: 3, br: y.readEnum, bw: S.writeEnum },
            float_min: { n: 4, br: y.readFloat, bw: S.writeFloat },
            float_max: { n: 5, br: y.readFloat, bw: S.writeFloat },
            int_min: { n: 6, br: y.readInt64String, bw: S.writeInt64String },
            int_max: { n: 7, br: y.readInt64String, bw: S.writeInt64String },
            localized_label: { n: 8, br: y.readString, bw: S.writeString },
            hide_from_description: { n: 9, br: y.readBool, bw: S.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  ye = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            language: { n: 2, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  be = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_schemas || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { property_schemas: { n: 1, c: ve, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  P = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            contextid: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            assetid: { n: 3, br: y.readUint64String, bw: S.writeUint64String },
            classid: { n: 4, br: y.readUint64String, bw: S.writeUint64String },
            instanceid: {
              n: 5,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            currencyid: { n: 6, br: y.readUint32, bw: S.writeUint32 },
            amount: { n: 7, br: y.readInt64String, bw: S.writeInt64String },
            missing: { n: 8, br: y.readBool, bw: S.writeBool },
            est_usd: { n: 9, br: y.readInt64String, bw: S.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  F = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: S.writeFixed64String,
            },
            appid: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            contextid: {
              n: 3,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            get_descriptions: { n: 4, br: y.readBool, bw: S.writeBool },
            get_asset_properties: { n: 11, br: y.readBool, bw: S.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: y.readBool,
              bw: S.writeBool,
            },
            language: { n: 5, br: y.readString, bw: S.writeString },
            filters: { n: 6, c: I },
            start_assetid: {
              n: 8,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            count: { n: 9, br: y.readInt32, bw: S.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  I = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetids || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assetids: {
              n: 1,
              r: !0,
              q: !0,
              br: y.readUint64String,
              pbr: y.readPackedUint64String,
              bw: S.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: y.readUint32,
              pbr: y.readPackedUint32,
              bw: S.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: y.readBool, bw: S.writeBool },
            marketable_only: { n: 4, br: y.readBool, bw: S.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  xe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assets || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: P, r: !0, q: !0 },
            descriptions: { n: 2, c: M, r: !0, q: !0 },
            missing_assets: { n: 3, c: P, r: !0, q: !0 },
            asset_properties: { n: 7, c: _e, r: !0, q: !0 },
            more_items: { n: 4, br: y.readBool, bw: S.writeBool },
            last_assetid: {
              n: 5,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: y.readUint32,
              bw: S.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  Se = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new_token || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: y.readBool, bw: S.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  Ce = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_offer_access_token || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_offer_access_token: {
              n: 1,
              br: y.readString,
              bw: S.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  we = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.return_url || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: y.readString, bw: S.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  Te = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: y.readString, bw: S.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  Ee = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: y.readString, bw: S.writeString },
            appid: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            classes: { n: 3, c: j, r: !0, q: !0 },
            high_pri: { n: 4, br: y.readBool, bw: S.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  De = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptions || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: M, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  L;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      c(F, t, n),
      xe,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = t;
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, c(Se, t, n), Ce, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      c(we, t, n),
      Te,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = r;
  function i(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, c(Ee, t, n), De, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = i;
  function a(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, c(ye, t, n), be, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetPropertySchema = a;
})((L ||= {}));
var R = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.data || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { data: { n: 1, c: Oe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AdditionalSubjectData`;
    }
  },
  Oe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.key || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: y.readString, bw: S.writeString },
            value: { n: 2, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AdditionalSubjectData_DataEntry`;
    }
  },
  ke = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: y.readUint64String, bw: S.writeUint64String },
            start: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            count: { n: 3, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Request`;
    }
  },
  z = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_support || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_support: { n: 1, br: y.readBool, bw: S.writeBool },
            is_developer: { n: 2, br: y.readBool, bw: S.writeBool },
            trust_bucket: { n: 3, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentModerationAccountStatus`;
    }
  },
  B = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.report_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [23, 24], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            report_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            reporter_steamid: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            time_reported: { n: 3, br: y.readUint32, bw: S.writeUint32 },
            report_reason: { n: 4, br: y.readEnum, bw: S.writeEnum },
            report_text: { n: 5, br: y.readString, bw: S.writeString },
            subject_type: { n: 6, br: y.readEnum, bw: S.writeEnum },
            subject_group_id: {
              n: 7,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            subject_id: {
              n: 8,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            resolved: { n: 9, br: y.readEnum, bw: S.writeEnum },
            time_resolved: { n: 10, br: y.readUint32, bw: S.writeUint32 },
            resolver_steamid: {
              n: 11,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            time_notified: { n: 12, br: y.readUint32, bw: S.writeUint32 },
            additional_subject_data: { n: 13, c: R },
            time_disputed: { n: 14, br: y.readUint32, bw: S.writeUint32 },
            dispute_details: { n: 15, br: y.readString, bw: S.writeString },
            dispute_resolver_steamid: {
              n: 16,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            dispute_resolved: { n: 17, br: y.readEnum, bw: S.writeEnum },
            time_dispute_resolved: {
              n: 18,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            detected_by_automation: {
              n: 19,
              d: !1,
              br: y.readBool,
              bw: S.writeBool,
            },
            resolved_by_automation: {
              n: 20,
              d: 0,
              br: y.readEnum,
              bw: S.writeEnum,
            },
            content_moderated_reason: {
              n: 21,
              br: y.readEnum,
              bw: S.writeEnum,
            },
            dispute_resolved_reason: { n: 22, br: y.readEnum, bw: S.writeEnum },
            sanctions_applied: { n: 23, c: H, r: !0, q: !0 },
            sanctions_applied_on_dispute: { n: 24, c: H, r: !0, q: !0 },
            reported_content_id: {
              n: 25,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            coordinates: { n: 26, c: U },
            reporter_account_status: { n: 29, c: z },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReport`;
    }
  },
  Ae = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_report || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_report: { n: 1, c: B, r: !0, q: !0 },
            total_count: { n: 2, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Response`;
    }
  },
  je = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: y.readUint64String, bw: S.writeUint64String },
            subject_type: { n: 2, br: y.readEnum, bw: S.writeEnum },
            subject_group_id: {
              n: 3,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            subject_id: {
              n: 4,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            reported_content_id: {
              n: 5,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Request`;
    }
  },
  Me = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.content_report || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { content_report: { n: 1, c: B } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Response`;
    }
  },
  Ne = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: y.readUint64String, bw: S.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Request`;
    }
  },
  V = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [13, 31, 32], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            subject_group_id: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            owner_steam_id: {
              n: 4,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            language: { n: 5, br: y.readInt32, bw: S.writeInt32 },
            resolved: { n: 6, br: y.readEnum, bw: S.writeEnum },
            time_resolved: { n: 7, br: y.readUint32, bw: S.writeUint32 },
            unresolved_report_count: {
              n: 8,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            oldest_unresolved_report_time: {
              n: 9,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            resolver_steamid: {
              n: 10,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            assigned_moderator_steamid: {
              n: 11,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            time_claimed_by_moderator: {
              n: 12,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            reports: { n: 13, c: B, r: !0, q: !0 },
            additional_subject_data: { n: 14, c: R },
            csam_status: { n: 15, br: y.readEnum, bw: S.writeEnum },
            terrorism_status: { n: 16, br: y.readEnum, bw: S.writeEnum },
            content_moderated_reason: {
              n: 17,
              br: y.readEnum,
              bw: S.writeEnum,
            },
            unresolved_dispute_count: {
              n: 18,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            oldest_unresolved_dispute_time: {
              n: 19,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            owner_dispute_time: { n: 24, br: y.readUint32, bw: S.writeUint32 },
            owner_dispute_resolved_time: {
              n: 25,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            owner_dispute_details: {
              n: 26,
              br: y.readString,
              bw: S.writeString,
            },
            required_moderator_level: {
              n: 27,
              br: y.readEnum,
              bw: S.writeEnum,
            },
            resolved_by_automation: {
              n: 28,
              d: 0,
              br: y.readEnum,
              bw: S.writeEnum,
            },
            detected_by_automation: {
              n: 29,
              d: !1,
              br: y.readBool,
              bw: S.writeBool,
            },
            credible_threat_of_violence_status: {
              n: 30,
              br: y.readEnum,
              bw: S.writeEnum,
            },
            sanctions_applied: { n: 31, c: H, r: !0, q: !0 },
            sanctions_applied_after_dispute: { n: 32, c: H, r: !0, q: !0 },
            decision_reversed: { n: 33, br: y.readBool, bw: S.writeBool },
            reported_content_id: {
              n: 34,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            coordinates: { n: 35, c: U },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubject`;
    }
  },
  Pe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subject: { n: 1, c: V, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Response`;
    }
  },
  H = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sanction || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: y.readEnum, bw: S.writeEnum },
            days: { n: 2, br: y.readInt32, bw: S.writeInt32 },
            escalate_to: { n: 3, br: y.readEnum, bw: S.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubjectSanction`;
    }
  },
  Fe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Request`;
    }
  },
  Ie = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.buckets || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            buckets: { n: 1, c: Le, r: !0, q: !0 },
            pending_for_any_moderator: {
              n: 2,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            pending_for_supervisor: {
              n: 3,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            pending_for_valve: { n: 4, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response`;
    }
  },
  Le = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            unresolved_count: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            oldest_unresolved: { n: 3, br: y.readUint32, bw: S.writeUint32 },
            unclaimed_count: { n: 4, br: y.readUint32, bw: S.writeUint32 },
            oldest_disputed: { n: 5, br: y.readUint32, bw: S.writeUint32 },
            disputed_count: { n: 6, br: y.readUint32, bw: S.writeUint32 },
            unclaimed_disputed_count: {
              n: 7,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            pending_for_any_moderator: {
              n: 8,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            pending_for_supervisor: {
              n: 9,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            pending_for_valve: { n: 10, br: y.readUint32, bw: S.writeUint32 },
            oldest_unresolved_for_any_moderator: {
              n: 11,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            oldest_unresolved_for_supervisor: {
              n: 12,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            oldest_unresolved_for_valve: {
              n: 13,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            coordinates: { n: 14, c: U },
            claimable_for_any_moderator: {
              n: 15,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            claimable_for_supervisor: {
              n: 16,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            claimable_for_valve: { n: 17, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response_Bucket`;
    }
  },
  Re = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            subject_group_id: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ContentReportSubjectKey`;
    }
  },
  ze = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: S.writeFixed64String,
            },
            rtime_cooldown_ends: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            acquit_unresolved_reports: {
              n: 3,
              br: y.readBool,
              bw: S.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Request`;
    }
  },
  Be = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Response`;
    }
  },
  Ve = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: S.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Request`;
    }
  },
  He = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_cooldown_ends || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_cooldown_ends: { n: 1, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Response`;
    }
  },
  Ue = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: S.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Request`;
    }
  },
  We = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferred_level || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: y.readEnum, bw: S.writeEnum },
            enabled_subject_types: {
              n: 2,
              r: !0,
              q: !0,
              br: y.readEnum,
              pbr: y.readPackedEnum,
              bw: S.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Response`;
    }
  },
  Ge = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferred_level || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: y.readEnum, bw: S.writeEnum },
            enabled_subject_types: { n: 2, c: Ke },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request`;
    }
  },
  Ke = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_types || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_types: {
              n: 1,
              r: !0,
              q: !0,
              br: y.readEnum,
              pbr: y.readPackedEnum,
              bw: S.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request_SubjectTypeList`;
    }
  },
  qe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Response`;
    }
  },
  Je = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: y.readFixed64String,
              bw: S.writeFixed64String,
            },
            rt_start: { n: 2, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Request`;
    }
  },
  Ye = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.activities || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { activities: { n: 1, c: Xe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response`;
    }
  },
  Xe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            subject_group_id: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            timestamp: { n: 4, br: y.readUint32, bw: S.writeUint32 },
            action: { n: 5, br: y.readEnum, bw: S.writeEnum },
            json_data: { n: 6, br: y.readString, bw: S.writeString },
            reported_content_id: {
              n: 7,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response_ModerationActivity`;
    }
  },
  Ze = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_start_date || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_start_date: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            rtime_end_date: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            subject_type: { n: 3, br: y.readEnum, bw: S.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Request`;
    }
  },
  Qe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 2, c: $e, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response`;
    }
  },
  $e = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_date || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_date: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            times_unresolved: { n: 2, br: y.readUint32, bw: S.writeUint32 },
            times_resolved: { n: 3, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response_DayStatistics`;
    }
  },
  et = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            count: { n: 2, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Request`;
    }
  },
  tt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: nt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response`;
    }
  },
  nt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            subject_group_id: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response_Subject`;
    }
  },
  rt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: y.readUint64String, bw: S.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Request`;
    }
  },
  it = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_reports || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_reports: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            total_acquitted_reports: {
              n: 2,
              br: y.readUint32,
              bw: S.writeUint32,
            },
            reports_in_last_week: { n: 3, br: y.readUint32, bw: S.writeUint32 },
            acquitted_reports_in_last_week: {
              n: 4,
              br: y.readUint32,
              bw: S.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Response`;
    }
  },
  at = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            moderator_level: { n: 2, br: y.readEnum, bw: S.writeEnum },
            filters: { n: 3, c: U, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Request`;
    }
  },
  ot = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: V, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Response`;
    }
  },
  st = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: y.readUint64String, bw: S.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Request`;
    }
  },
  ct = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: V, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Response`;
    }
  },
  lt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects_to_release || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects_to_release: { n: 1, c: Re, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Request`;
    }
  },
  ut = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Response`;
    }
  },
  U = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: y.readEnum, bw: S.writeEnum },
            steamid: { n: 2, br: y.readUint64String, bw: S.writeUint64String },
            forum: { n: 3, br: y.readUint64String, bw: S.writeUint64String },
            topic: { n: 4, br: y.readUint64String, bw: S.writeUint64String },
            comment: { n: 5, br: y.readUint64String, bw: S.writeUint64String },
            comment_thread_id: {
              n: 6,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            sender_account_id: { n: 7, br: y.readUint32, bw: S.writeUint32 },
            chat_message_rtime: { n: 8, br: y.readUint32, bw: S.writeUint32 },
            chat_message_ordinal: { n: 9, br: y.readUint32, bw: S.writeUint32 },
            chat_group_id: {
              n: 10,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            chat_room_id: {
              n: 11,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            receiver_account_id: { n: 12, br: y.readUint32, bw: S.writeUint32 },
            published_file_id: {
              n: 13,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            ugc_content_type: { n: 14, br: y.readUint32, bw: S.writeUint32 },
            appid: { n: 15, br: y.readUint32, bw: S.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `ReportedContentCoordinates`;
    }
  },
  dt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            include_reporter_account_status: {
              n: 2,
              br: y.readBool,
              bw: S.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Request`;
    }
  },
  ft = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subject || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { subject: { n: 1, c: V } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Response`;
    }
  },
  pt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.coordinates || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { coordinates: { n: 1, c: U } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Request`;
    }
  },
  mt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subjects || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: V, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Response`;
    }
  },
  ht = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            details: { n: 2, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Request`;
    }
  },
  gt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Response`;
    }
  },
  _t = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Request`;
    }
  },
  vt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: yt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response`;
    }
  },
  yt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: y.readUint32, bw: S.writeUint32 },
            actor_steamid: {
              n: 2,
              br: y.readFixed64String,
              bw: S.writeFixed64String,
            },
            automated_action: { n: 3, br: y.readBool, bw: S.writeBool },
            action: { n: 4, br: y.readEnum, bw: S.writeEnum },
            additional_json_data: { n: 5, br: y.readString, bw: S.writeString },
            actor_account_status: { n: 8, c: z },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response_AuditLogEntry`;
    }
  },
  bt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            report_id: {
              n: 2,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            dispute_details: { n: 3, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Request`;
    }
  },
  xt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Response`;
    }
  },
  St = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Request`;
    }
  },
  Ct = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Response`;
    }
  },
  wt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            new_level: { n: 2, br: y.readEnum, bw: S.writeEnum },
            reason: { n: 3, br: y.readEnum, bw: S.writeEnum },
            note: { n: 4, br: y.readString, bw: S.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Request`;
    }
  },
  Tt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Response`;
    }
  },
  Et = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            resolution: { n: 4, br: y.readEnum, bw: S.writeEnum },
            reason: { n: 2, br: y.readEnum, bw: S.writeEnum },
            note: { n: 3, br: y.readString, bw: S.writeString },
            resolved_by_automation: { n: 7, br: y.readEnum, bw: S.writeEnum },
            sanctions_applied: { n: 9, c: H, r: !0, q: !0 },
            skip_lock: { n: 10, br: y.readBool, bw: S.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Request`;
    }
  },
  Dt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Response`;
    }
  },
  Ot = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            csam_status: { n: 2, br: y.readEnum, bw: S.writeEnum },
            terrorism_status: { n: 3, br: y.readEnum, bw: S.writeEnum },
            credible_threat_of_violence_status: {
              n: 4,
              br: y.readEnum,
              bw: S.writeEnum,
            },
            additional_subject_data: { n: 5, c: R },
            owner_dispute_details: {
              n: 6,
              br: y.readString,
              bw: S.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Request`;
    }
  },
  kt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Response`;
    }
  },
  At = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: y.readUint64String,
              bw: S.writeUint64String,
            },
            action: { n: 2, br: y.readEnum, bw: S.writeEnum },
            automated_action: { n: 3, br: y.readBool, bw: S.writeBool },
            additional_json_data: { n: 4, br: y.readString, bw: S.writeString },
            actor_steamid: {
              n: 5,
              br: y.readFixed64String,
              bw: S.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= g(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return f(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return m(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Request`;
    }
  },
  jt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), w.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Response`;
    }
  },
  Mt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ContentModeration.ClaimBatch#1`, c(at, t, n), ot, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ClaimBatch = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetClaimedSubjects#1`,
      c(st, t, n),
      ct,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClaimedSubjects = n;
  function r(e, t, n) {
    return e.SendMsg(`ContentModeration.ReleaseSubjects#1`, c(lt, t, n), ut, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ReleaseSubjects = r;
  function i(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportsSubmittedByUser#1`,
      c(ke, t, n),
      Ae,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportsSubmittedByUser = i;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetOneReportSubmittedByUser#1`,
      c(je, t, n),
      Me,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetOneReportSubmittedByUser = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedSubjectsByOwner#1`,
      c(Ne, t, n),
      Pe,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`support`] },
    );
  }
  e.GetReportedSubjectsByOwner = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetSubjectOverview#1`,
      c(Fe, t, n),
      Ie,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetSubjectOverview = s;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentModeration.UpdateReporterCooldown#1`,
      c(ze, t, n),
      Be,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateReporterCooldown = l;
  function u(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReporterCooldown#1`,
      c(Ve, t, n),
      He,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReporterCooldown = u;
  function d(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetModeratorPreferences#1`,
      c(Ue, t, n),
      We,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetModeratorPreferences = d;
  function f(e, t, n) {
    return e.SendMsg(
      `ContentModeration.SetModeratorPreferences#1`,
      c(Ge, t, n),
      qe,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.SetModeratorPreferences = f;
  function p(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetModeratorActivity#1`,
      c(Je, t, n),
      Ye,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetModeratorActivity = p;
  function m(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetDailyModerationStatistics#1`,
      c(Ze, t, n),
      Qe,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetDailyModerationStatistics = m;
  function h(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetOldestUnresolvedSubjects#1`,
      c(et, t, n),
      tt,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetOldestUnresolvedSubjects = h;
  function g(e, t, n) {
    return e.SendMsg(`ContentModeration.GetReporterStats#1`, c(rt, t, n), it, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReporterStats = g;
  function _(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedContentByID#1`,
      c(dt, t, n),
      ft,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContentByID = _;
  function v(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedContent#1`,
      c(pt, t, n),
      mt,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContent = v;
  function y(e, t, n) {
    return e.SendMsg(
      `ContentModeration.OwnerDisputeModeration#1`,
      c(ht, t, n),
      gt,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.OwnerDisputeModeration = y;
  function b(e, t, n) {
    return e.SendMsg(`ContentModeration.GetAuditLogByID#1`, c(_t, t, n), vt, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAuditLogByID = b;
  function x(e, t, n) {
    return e.SendMsg(
      `ContentModeration.ReporterDisputeModeration#1`,
      c(bt, t, n),
      xt,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.ReporterDisputeModeration = x;
  function S(e, t, n) {
    return e.SendMsg(
      `ContentModeration.SustainModerationByID#1`,
      c(St, t, n),
      Ct,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.SustainModerationByID = S;
  function C(e, t, n) {
    return e.SendMsg(
      `ContentModeration.EscalateSubjectByID#1`,
      c(wt, t, n),
      Tt,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.EscalateSubjectByID = C;
  function ee(e, t, n) {
    return e.SendMsg(`ContentModeration.ResolveByID#1`, c(Et, t, n), Dt, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ResolveByID = ee;
  function te(e, t, n) {
    return e.SendMsg(`ContentModeration.UpdateSubjectByID#1`, c(Ot, t, n), kt, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateSubjectByID = te;
  function w(e, t, n) {
    return e.SendMsg(
      `ContentModeration.WriteToAuditLogByID#1`,
      c(At, t, n),
      jt,
      { ePrivilege: 5 },
    );
  }
  e.WriteToAuditLogByID = w;
})((Mt ||= {}));
function Nt(e) {
  let t = e?.reported_content_id
    ? e.reported_content_id
    : `${e?.subject_type}-${e?.subject_group_id}-${e?.subject_id}`;
  return `${C.COMMUNITY_BASE_URL}my/reportedcontent/${t}`;
}
var Pt = {
  11: {
    displayNameLoc: `#SteamNotification_HelpRequest_Author`,
    titleLoc: `#SteamNotification_HelpRequest_Title`,
    bodyLoc: (e) => ({
      locString: `#SteamNotification_HelpRequest_Body`,
      params: [e.ticket],
    }),
    link: (e) => C.HELP_BASE_URL + `wizard/HelpRequest/` + e.ticket,
  },
  6: {
    displayNameLoc: `#SteamNotifications_MajorSale`,
    titleLoc: (e) => ({ locString: e.title }),
    bodyLoc: (e) =>
      u() && e.link.includes(`https://store.steampowered.com`)
        ? `#SteamNotifications_MajorSale_SteamChina_Title`
        : e.body,
    image: (e) => e.image,
    link: (e) =>
      u() && e.link.includes(`https://store.steampowered.com`)
        ? e.link.replace(`https://store.steampowered.com`, C.STORE_BASE_URL)
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
    link: (e) => C.COMMUNITY_BASE_URL + `my/moderatormessages/` + e.msgid,
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
    link: (e) => C.STORE_BASE_URL + `account/gatedaccess?appid=` + e.appid,
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
    link: (e) => Nt(e),
  },
};
function Ft(e) {
  if (e !== void 0) return Pt[e];
}
function It(e) {
  return !!Ft(e);
}
var Lt = {
  16: {
    steamidAttribute: `inviter`,
    titleLoc: `#SteamNotifications_FamilyInviteTitle`,
    bodyLoc: `#SteamNotifications_FamilyInviteBody`,
    url: (e) =>
      `${C.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
  },
  15: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalFeatureRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalFeatureRequestBody`,
    url: () => `${C.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: `requestor_steamid`,
    titleLoc: `#SteamNotifications_FamilyPurchaseRequestTitle`,
    bodyLoc: `#SteamNotifications_FamilyPurchaseRequestBody`,
    url: (e) => te(e.familyid, e.request_id),
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
    url: () => `${C.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalPlaytimeRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalPlaytimeRequestBody`,
    url: () => `${C.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
    url: () => `${C.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
    url: () => `${C.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function Rt(e) {
  if (e !== void 0) return Lt[e];
}
function zt(e) {
  return !!Rt(e);
}
var Bt = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function Vt(e) {
  return Bt.findIndex((t) => t == e) != null;
}
function Ht(e) {
  return !e.hidden && Ut(e.notification_type) && X(e.body_data);
}
function Ut(e) {
  return It(e) || zt(e) || Vt(e);
}
var W = new l(`SteamNotificationStore`),
  G = W.Debug,
  K = W.Error,
  Wt = W.Warning,
  q = class {
    constructor() {
      r(this);
    }
    m_rgNotificationRollups = [];
    m_summary = J();
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
        !cn(e) &&
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
        let e = _.Init(ie);
        (e.Body().set_notification_ids(this.m_rgNotifyServerRead),
          O.MarkNotificationsRead(this.m_transport, e) &&
            (this.m_rgNotifyServerRead = []));
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let e = _.Init(ue);
        (e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          O.HideNotification(this.m_transport, e) &&
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
          : K(
              `Attempted to mark notification read that is not in the notification store`,
            );
        return;
      }
      let r = this.m_rgNotificationRollups[n];
      if (r.item.read)
        K(`Attempted to mark notification read that is already read`);
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
        K(
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
      on(this.m_summary, e, -t);
    }
    MarkAllItemsViewed() {
      let e = _.Init(ae);
      (e.Body().set_remote_client_id(this.m_strRemoteClientID),
        e.Body().set_target_client_type(this.m_eTargetClientType),
        O.MarkNotificationsViewed(this.m_transport, e),
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
          ((this.m_summary = Object.assign(J(), {
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
        (G(`ApplyNotificationsUpdate`, e),
        !e ||
          (!e.notifications?.length &&
            e.pending_friend_count === void 0 &&
            e.pending_gift_count === void 0))
      ) {
        G(`Error: ApplyNotificationsUpdate was called with no data`);
        return;
      }
      if (!this.m_currentNotificationsData) {
        G(
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
        t = J(),
        n = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((r) => {
          this.BExcludeClientTargetedNotification(r) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (e) => e == r.notification_id,
              ) !== -1 &&
              (r.hidden = !0),
            Ht(r) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (e) => e == r.notification_id,
                ) !== -1 &&
                (r.read = !0),
              r.read || on(t, r.notification_type, 1),
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
      let t = X(e.body_data);
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
            let i = Z(t);
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
                url: Xt(i),
              });
            else {
              let r = e[o];
              (this.BReplaceRollupItem(t, r.item) &&
                ((r.url = Xt(i)),
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
          let i = Z(t);
          if (i) {
            let a = `item_` + i.appid;
            this.AddNotificationToRollupByAppID(e, t, a, r, n, i.appid);
          }
          break;
        case 12:
          let a = Z(t)?.appid.toString();
          if (a) {
            let i = `asyncgame_` + a;
            this.AddNotificationToRollupByAppID(e, t, i, r, n, a);
          }
          break;
        case 30:
          let o = Z(t),
            s = o?.report_id,
            c = Nt(o),
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
(x([a], q.prototype, `m_rgNotificationRollups`, void 0),
  x([a], q.prototype, `m_summary`, void 0),
  x([a], q.prototype, `m_bLoaded`, void 0),
  x([a], q.prototype, `m_nUnviewed`, void 0),
  x([i], q.prototype, `ProcessNotifications`, null));
function J() {
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
async function Gt(e, t, n, r, i, a = !0, o = !1) {
  if (!t) throw Error(`Invalid steamid for GetSteamNotifications`);
  let s = _.Init(E);
  (s.Body().set_language(n),
    s.Body().set_include_read(a),
    s.Body().set_include_pinned_counts(!0),
    s.Body().set_include_confirmation_count(o));
  let c = await O.GetSteamNotifications(e, s);
  if (c.GetEResult() !== 1)
    throw (
      Wt(
        `Received error from GetSteamNotifications. Result ${c.GetEResult()}. Transport ${c.Hdr().transport_error()}`,
      ),
      Error(`Error from GetSteamNotifications: ${c.GetEResult()}`)
    );
  let l = c.Body().toObject();
  return (
    r &&
      (l.notifications = l.notifications?.filter(
        (e) => !an(e.notification_type, r, i),
      )),
    l
  );
}
async function Kt(e, t) {
  if (!e || !e.steamid || !e.contextid || !e.appid || !e.assetid)
    return (K(`Item notification missing required attributes`), null);
  let n = _.Init(F);
  (n.Body().set_steamid(e.steamid),
    n.Body().set_contextid(e.contextid),
    n.Body().set_appid(parseInt(e.appid)),
    n.Body().set_get_descriptions(!0),
    n.Body().set_language(C.LANGUAGE));
  let r = new I();
  (r.add_assetids(e.assetid), n.Body().set_filters(r));
  let i = await L.GetInventoryItemsWithDescriptions(t, n);
  return i.GetEResult() === 1
    ? (i.Body().toObject().descriptions[0] ?? null)
    : (K(`Request for steam item metadata did not succeed`, i.GetEResult()),
      null);
}
var qt = `ItemMetadata`;
function Jt(e) {
  return [`${qt}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`];
}
function Yt(e, t, n) {
  let r = Q(4, e.body_data);
  r.steamid = t;
  let i = o({
    queryKey: Jt(r),
    queryFn: async () => Kt(r, n),
    staleTime: 1 / 0,
  });
  return i.isSuccess ? i.data : null;
}
function Xt(e) {
  let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
  return (e.last_post > 0 && (t += `&tscn=` + (e.last_post - 1)), t);
}
function Zt(e) {
  return e.comment_type == 10;
}
function Y(e) {
  return e?.bhas_friend;
}
function Qt(e) {
  return e.comment_type == 10;
}
function $t(e) {
  return Zt(e) || Y(e);
}
function en(e) {
  return Qt(e);
}
function X(e) {
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    G(`Steam notification in invalid format:`, e);
  }
  return null;
}
function Z(e) {
  return Q(e.notification_type, e.body_data);
}
function tn(e) {
  return Q(e.type, e.item?.body_data);
}
function Q(e, t) {
  let n = X(t);
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
        ? (G(`Async game notification invalid data`, t), null)
        : { appid: parseInt(n.appid), state: parseInt(n.state) };
    case 3:
      let r = {
        owner_steam_id: n.owner_steam_id ? new d(n.owner_steam_id) : null,
        bclan_account: $(n.bclan_account),
        title: n.title,
        comment: n.text,
        time: n.last_post,
        comment_type: Number(n.type),
        topic_id: n.topic_id,
        forum_id: n.forum_id,
        account_steam_id: n.account_id
          ? d.InitFromAccountID(n.account_id, C.EUNIVERSE)
          : null,
        bhas_friend: $(n.bhas_friend),
        bis_forum: $(n.bis_forum),
        last_post: n.last_post,
        bsubscribed: $(n.subscribed),
        bis_owner: $(n.bis_owner),
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
        G(
          `GetCustomNotificationDataByType called with unexpected type:` + e,
          t,
        ),
        null
      );
  }
}
function $(e) {
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
  return (G(`notification contained unexpected boolean value`), !1);
}
var nn = {
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
function rn(e) {
  let t = nn[e];
  return (v(!!t, `Missing notification type data for ${e}`), t);
}
function an(e, t, n) {
  if (!t) return !1;
  let r = rn(e);
  return ee(t, r?.eFeature ?? 15, n);
}
function on(e, n, r) {
  t(() => {
    let t = rn(n);
    t?.rollup_field && (e[t.rollup_field] = Math.max(0, e[t.rollup_field] + r));
  });
}
function sn(e) {
  return !e.viewed || e.viewed + 600 > s();
}
function cn(e) {
  return e.viewed && e.viewed + 172800 < s();
}
export {
  X as _,
  Zt as a,
  zt as c,
  cn as d,
  q as f,
  Rt as g,
  tn as h,
  Y as i,
  an as l,
  Ft as m,
  $t as n,
  It as o,
  Gt as p,
  Qt as r,
  Vt as s,
  en as t,
  sn as u,
  Yt as v,
  ne as y,
};
