/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  At as t,
  Ct as n,
  Pt as r,
  jt as i,
  kt as a,
  st as o,
} from "./libraries.js";
import {
  $x as s,
  Ib as c,
  Iy as l,
  Mb as u,
  Qx as d,
  Xx as f,
  Yx as p,
  Zx as m,
  eS as h,
  hb as g,
  hx as _,
  mx as v,
  nS as y,
  qx as b,
  rx as x,
  tS as S,
  vl as ee,
  w as te,
} from "./main.js";
import "./steammessages_familygroups_pb.js";
import { a as C } from "./familymanagementstore.js";
var w = e(r(), 1);
function ne(e) {
  return `unknown ESteamNotificationType ( ` + e + ` )`;
}
var T = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            notification_targets: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            notification_type: { n: 3, br: d.readEnum, bw: y.writeEnum },
            body_data: { n: 4, br: d.readString, bw: y.writeString },
            read: { n: 7, br: d.readBool, bw: y.writeBool },
            timestamp: { n: 8, br: d.readUint32, bw: y.writeUint32 },
            hidden: { n: 9, br: d.readBool, bw: y.writeBool },
            expiry: { n: 10, br: d.readUint32, bw: y.writeUint32 },
            viewed: { n: 11, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SteamNotificationData`;
    }
  },
  E = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_hidden || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_hidden: { n: 1, d: !1, br: d.readBool, bw: y.writeBool },
            language: { n: 2, d: 0, br: d.readInt32, bw: y.writeInt32 },
            include_confirmation_count: {
              n: 3,
              d: !0,
              br: d.readBool,
              bw: y.writeBool,
            },
            include_pinned_counts: {
              n: 4,
              d: !1,
              br: d.readBool,
              bw: y.writeBool,
            },
            include_read: { n: 5, d: !0, br: d.readBool, bw: y.writeBool },
            count_only: { n: 6, d: !1, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Request`;
    }
  },
  re = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notifications || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: T, r: !0, q: !0 },
            confirmation_count: { n: 2, br: d.readInt32, bw: y.writeInt32 },
            pending_gift_count: { n: 3, br: d.readUint32, bw: y.writeUint32 },
            pending_friend_count: { n: 5, br: d.readUint32, bw: y.writeUint32 },
            unread_count: { n: 6, br: d.readUint32, bw: y.writeUint32 },
            pending_family_invite_count: {
              n: 7,
              br: d.readUint32,
              bw: y.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Response`;
    }
  },
  ie = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            notification_type: { n: 2, br: d.readEnum, bw: y.writeEnum },
            notification_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: d.readUint64String,
              pbr: d.readPackedUint64String,
              bw: y.writeRepeatedUint64String,
            },
            mark_all_read: { n: 4, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsRead_Notification`;
    }
  },
  ae = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.remote_client_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            target_client_type: { n: 2, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsViewed_Notification`;
    }
  },
  D = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            notification_targets: { n: 2, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SteamNotificationPreference`;
    }
  },
  oe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Request`;
    }
  },
  se = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Response`;
    }
  },
  ce = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Request`;
    }
  },
  le = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Response`;
    }
  },
  ue = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_ids || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
              br: d.readUint64String,
              pbr: d.readPackedUint64String,
              bw: y.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_HideNotification_Notification`;
    }
  },
  de = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notifications || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: T, r: !0, q: !0 },
            pending_gift_count: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            pending_friend_count: { n: 3, br: d.readUint32, bw: y.writeUint32 },
            pending_family_invite_count: {
              n: 4,
              br: d.readUint32,
              bw: y.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_NotificationsReceived_Notification`;
    }
  },
  fe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
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
      _(E, t, n),
      re,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  e.GetSteamNotifications = t;
  function n(e, t) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsRead#1`,
      _(ie, t),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `help`, `community`] },
    );
  }
  e.MarkNotificationsRead = n;
  function r(e, t) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsViewed#1`,
      _(ae, t),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `help`, `community`] },
    );
  }
  e.MarkNotificationsViewed = r;
  function i(e, t) {
    return e.SendNotification(
      `SteamNotification.HideNotification#1`,
      _(ue, t),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `community`] },
    );
  }
  e.HideNotification = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamNotification.SetPreferences#1`, _(oe, t, n), se, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetPreferences = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamNotification.GetPreferences#1`, _(ce, t, n), le, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetPreferences = o;
})((O ||= {}));
var pe;
(function (e) {
  (e.NotificationsReceivedHandler = {
    name: `SteamNotificationClient.NotificationsReceived#1`,
    request: de,
  }),
    (e.PreferencesUpdatedHandler = {
      name: `SteamNotificationClient.PreferencesUpdated#1`,
      request: fe,
    });
})((pe ||= {}));
var k = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: d.readString, bw: y.writeString },
            value: { n: 2, br: d.readString, bw: y.writeString },
            color: { n: 3, br: d.readString, bw: y.writeString },
            label: { n: 4, br: d.readString, bw: y.writeString },
            name: { n: 5, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  A = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: d.readString, bw: y.writeString },
            name: { n: 2, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  j = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            category: { n: 2, br: d.readString, bw: y.writeString },
            internal_name: { n: 3, br: d.readString, bw: y.writeString },
            localized_category_name: {
              n: 4,
              br: d.readString,
              bw: y.writeString,
            },
            localized_tag_name: { n: 5, br: d.readString, bw: y.writeString },
            color: { n: 6, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  me = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contained_items || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: M, r: !0, q: !0 },
            search_tags: { n: 2, c: j, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  M = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: d.readUint64String, bw: y.writeUint64String },
            instanceid: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  N = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: d.readInt32, bw: y.writeInt32 },
            classid: { n: 2, br: d.readUint64String, bw: y.writeUint64String },
            instanceid: {
              n: 3,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            currency: { n: 4, br: d.readBool, bw: y.writeBool },
            background_color: { n: 5, br: d.readString, bw: y.writeString },
            icon_url: { n: 6, br: d.readString, bw: y.writeString },
            icon_url_large: { n: 7, br: d.readString, bw: y.writeString },
            descriptions: { n: 8, c: k, r: !0, q: !0 },
            tradable: { n: 9, br: d.readBool, bw: y.writeBool },
            actions: { n: 10, c: A, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: k, r: !0, q: !0 },
            owner_actions: { n: 12, c: A, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: d.readString,
              bw: y.writeRepeatedString,
            },
            name: { n: 14, br: d.readString, bw: y.writeString },
            name_color: { n: 15, br: d.readString, bw: y.writeString },
            type: { n: 16, br: d.readString, bw: y.writeString },
            market_name: { n: 17, br: d.readString, bw: y.writeString },
            market_hash_name: { n: 18, br: d.readString, bw: y.writeString },
            market_fee: { n: 19, br: d.readString, bw: y.writeString },
            market_fee_app: { n: 28, br: d.readInt32, bw: y.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: A, r: !0, q: !0 },
            commodity: { n: 22, br: d.readBool, bw: y.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: d.readInt32,
              bw: y.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: d.readInt32,
              bw: y.writeInt32,
            },
            marketable: { n: 25, br: d.readBool, bw: y.writeBool },
            tags: { n: 26, c: j, r: !0, q: !0 },
            item_expiration: { n: 27, br: d.readString, bw: y.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: d.readString,
              bw: y.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: d.readString,
              bw: y.writeString,
            },
            sealed: { n: 32, br: d.readBool, bw: y.writeBool },
            container_properties: { n: 33, c: me },
            market_bucket_group_name: {
              n: 34,
              br: d.readString,
              bw: y.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: d.readString,
              bw: y.writeString,
            },
            sealed_type: { n: 37, br: d.readUint32, bw: y.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: d.readString,
              bw: y.writeString,
            },
            market_bucket_id: { n: 39, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  P = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.propertyid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            int_value: { n: 2, br: d.readInt64String, bw: y.writeInt64String },
            float_value: { n: 3, br: d.readFloat, bw: y.writeFloat },
            string_value: { n: 4, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  he = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: d.readUint64String, bw: y.writeUint64String },
            instanceid: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            standalone_properties: { n: 3, c: P, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: P, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  ge = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            contextid: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            assetid: { n: 3, br: d.readUint64String, bw: y.writeUint64String },
            asset_properties: { n: 4, c: P, r: !0, q: !0 },
            asset_accessories: { n: 5, c: he, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  _e = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            name: { n: 2, br: d.readString, bw: y.writeString },
            type: { n: 3, br: d.readEnum, bw: y.writeEnum },
            float_min: { n: 4, br: d.readFloat, bw: y.writeFloat },
            float_max: { n: 5, br: d.readFloat, bw: y.writeFloat },
            int_min: { n: 6, br: d.readInt64String, bw: y.writeInt64String },
            int_max: { n: 7, br: d.readInt64String, bw: y.writeInt64String },
            localized_label: { n: 8, br: d.readString, bw: y.writeString },
            hide_from_description: { n: 9, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  ve = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            language: { n: 2, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  ye = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.property_schemas || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { property_schemas: { n: 1, c: _e, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  F = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            contextid: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            assetid: { n: 3, br: d.readUint64String, bw: y.writeUint64String },
            classid: { n: 4, br: d.readUint64String, bw: y.writeUint64String },
            instanceid: {
              n: 5,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            currencyid: { n: 6, br: d.readUint32, bw: y.writeUint32 },
            amount: { n: 7, br: d.readInt64String, bw: y.writeInt64String },
            missing: { n: 8, br: d.readBool, bw: y.writeBool },
            est_usd: { n: 9, br: d.readInt64String, bw: y.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  I = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readFixed64String,
              bw: y.writeFixed64String,
            },
            appid: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            contextid: {
              n: 3,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            get_descriptions: { n: 4, br: d.readBool, bw: y.writeBool },
            get_asset_properties: { n: 11, br: d.readBool, bw: y.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: d.readBool,
              bw: y.writeBool,
            },
            language: { n: 5, br: d.readString, bw: y.writeString },
            filters: { n: 6, c: L },
            start_assetid: {
              n: 8,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            count: { n: 9, br: d.readInt32, bw: y.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  L = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assetids || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1, 2], null);
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
              br: d.readUint64String,
              pbr: d.readPackedUint64String,
              bw: y.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
              bw: y.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: d.readBool, bw: y.writeBool },
            marketable_only: { n: 4, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  be = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assets || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: F, r: !0, q: !0 },
            descriptions: { n: 2, c: N, r: !0, q: !0 },
            missing_assets: { n: 3, c: F, r: !0, q: !0 },
            asset_properties: { n: 7, c: ge, r: !0, q: !0 },
            more_items: { n: 4, br: d.readBool, bw: y.writeBool },
            last_assetid: {
              n: 5,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: d.readUint32,
              bw: y.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  xe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.generate_new_token || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  Se = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trade_offer_access_token || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readString,
              bw: y.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  Ce = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.return_url || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: d.readString, bw: y.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  we = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.url || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: d.readString, bw: y.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  Te = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: d.readString, bw: y.writeString },
            appid: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            classes: { n: 3, c: M, r: !0, q: !0 },
            high_pri: { n: 4, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  Ee = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.descriptions || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: N, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  R;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      _(I, t, n),
      be,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = t;
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, _(xe, t, n), Se, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      _(Ce, t, n),
      we,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = r;
  function i(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, _(Te, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = i;
  function a(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, _(ve, t, n), ye, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetAssetPropertySchema = a;
})((R ||= {}));
var z = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.data || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { data: { n: 1, c: De, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `AdditionalSubjectData`;
    }
  },
  De = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.key || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: d.readString, bw: y.writeString },
            value: { n: 2, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `AdditionalSubjectData_DataEntry`;
    }
  },
  Oe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: y.writeUint64String },
            start: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            count: { n: 3, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Request`;
    }
  },
  B = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.report_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [23, 24], null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            reporter_steamid: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            time_reported: { n: 3, br: d.readUint32, bw: y.writeUint32 },
            report_reason: { n: 4, br: d.readEnum, bw: y.writeEnum },
            report_text: { n: 5, br: d.readString, bw: y.writeString },
            subject_type: { n: 6, br: d.readEnum, bw: y.writeEnum },
            subject_group_id: {
              n: 7,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            subject_id: {
              n: 8,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            resolved: { n: 9, br: d.readEnum, bw: y.writeEnum },
            time_resolved: { n: 10, br: d.readUint32, bw: y.writeUint32 },
            resolver_steamid: {
              n: 11,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            time_notified: { n: 12, br: d.readUint32, bw: y.writeUint32 },
            additional_subject_data: { n: 13, c: z },
            time_disputed: { n: 14, br: d.readUint32, bw: y.writeUint32 },
            dispute_details: { n: 15, br: d.readString, bw: y.writeString },
            dispute_resolver_steamid: {
              n: 16,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            dispute_resolved: { n: 17, br: d.readEnum, bw: y.writeEnum },
            time_dispute_resolved: {
              n: 18,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            detected_by_automation: {
              n: 19,
              d: !1,
              br: d.readBool,
              bw: y.writeBool,
            },
            resolved_by_automation: {
              n: 20,
              d: 0,
              br: d.readEnum,
              bw: y.writeEnum,
            },
            content_moderated_reason: {
              n: 21,
              br: d.readEnum,
              bw: y.writeEnum,
            },
            dispute_resolved_reason: { n: 22, br: d.readEnum, bw: y.writeEnum },
            sanctions_applied: { n: 23, c: H, r: !0, q: !0 },
            sanctions_applied_on_dispute: { n: 24, c: H, r: !0, q: !0 },
            reported_content_id: {
              n: 25,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            coordinates: { n: 26, c: U },
            reporter_is_support: { n: 27, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReport`;
    }
  },
  ke = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.content_report || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_report: { n: 1, c: B, r: !0, q: !0 },
            total_count: { n: 2, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Response`;
    }
  },
  Ae = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: y.writeUint64String },
            subject_type: { n: 2, br: d.readEnum, bw: y.writeEnum },
            subject_group_id: {
              n: 3,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            subject_id: {
              n: 4,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            reported_content_id: {
              n: 5,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Request`;
    }
  },
  je = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.content_report || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Response`;
    }
  },
  Me = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: y.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Request`;
    }
  },
  V = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [13, 31, 32], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            subject_group_id: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            owner_steam_id: {
              n: 4,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            language: { n: 5, br: d.readInt32, bw: y.writeInt32 },
            resolved: { n: 6, br: d.readEnum, bw: y.writeEnum },
            time_resolved: { n: 7, br: d.readUint32, bw: y.writeUint32 },
            unresolved_report_count: {
              n: 8,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            oldest_unresolved_report_time: {
              n: 9,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            resolver_steamid: {
              n: 10,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            assigned_moderator_steamid: {
              n: 11,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            time_claimed_by_moderator: {
              n: 12,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            reports: { n: 13, c: B, r: !0, q: !0 },
            additional_subject_data: { n: 14, c: z },
            csam_status: { n: 15, br: d.readEnum, bw: y.writeEnum },
            terrorism_status: { n: 16, br: d.readEnum, bw: y.writeEnum },
            content_moderated_reason: {
              n: 17,
              br: d.readEnum,
              bw: y.writeEnum,
            },
            unresolved_dispute_count: {
              n: 18,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            oldest_unresolved_dispute_time: {
              n: 19,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            owner_dispute_time: { n: 24, br: d.readUint32, bw: y.writeUint32 },
            owner_dispute_resolved_time: {
              n: 25,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            owner_dispute_details: {
              n: 26,
              br: d.readString,
              bw: y.writeString,
            },
            required_moderator_level: {
              n: 27,
              br: d.readEnum,
              bw: y.writeEnum,
            },
            resolved_by_automation: {
              n: 28,
              d: 0,
              br: d.readEnum,
              bw: y.writeEnum,
            },
            detected_by_automation: {
              n: 29,
              d: !1,
              br: d.readBool,
              bw: y.writeBool,
            },
            credible_threat_of_violence_status: {
              n: 30,
              br: d.readEnum,
              bw: y.writeEnum,
            },
            sanctions_applied: { n: 31, c: H, r: !0, q: !0 },
            sanctions_applied_after_dispute: { n: 32, c: H, r: !0, q: !0 },
            decision_reversed: { n: 33, br: d.readBool, bw: y.writeBool },
            reported_content_id: {
              n: 34,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            coordinates: { n: 35, c: U },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubject`;
    }
  },
  Ne = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Response`;
    }
  },
  H = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sanction || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: d.readEnum, bw: y.writeEnum },
            days: { n: 2, br: d.readInt32, bw: y.writeInt32 },
            escalate_to: { n: 3, br: d.readEnum, bw: y.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubjectSanction`;
    }
  },
  Pe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Request`;
    }
  },
  Fe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.buckets || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            buckets: { n: 1, c: Ie, r: !0, q: !0 },
            pending_for_any_moderator: {
              n: 2,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            pending_for_supervisor: {
              n: 3,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            pending_for_valve: { n: 4, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response`;
    }
  },
  Ie = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            unresolved_count: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            oldest_unresolved: { n: 3, br: d.readUint32, bw: y.writeUint32 },
            unclaimed_count: { n: 4, br: d.readUint32, bw: y.writeUint32 },
            oldest_disputed: { n: 5, br: d.readUint32, bw: y.writeUint32 },
            disputed_count: { n: 6, br: d.readUint32, bw: y.writeUint32 },
            unclaimed_disputed_count: {
              n: 7,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            pending_for_any_moderator: {
              n: 8,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            pending_for_supervisor: {
              n: 9,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            pending_for_valve: { n: 10, br: d.readUint32, bw: y.writeUint32 },
            oldest_unresolved_for_any_moderator: {
              n: 11,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            oldest_unresolved_for_supervisor: {
              n: 12,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            oldest_unresolved_for_valve: {
              n: 13,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            coordinates: { n: 14, c: U },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response_Bucket`;
    }
  },
  Le = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            subject_group_id: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubjectKey`;
    }
  },
  Re = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readFixed64String,
              bw: y.writeFixed64String,
            },
            rtime_cooldown_ends: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            acquit_unresolved_reports: {
              n: 3,
              br: d.readBool,
              bw: y.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Request`;
    }
  },
  ze = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Response`;
    }
  },
  Be = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readFixed64String,
              bw: y.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Request`;
    }
  },
  Ve = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_cooldown_ends || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_cooldown_ends: { n: 1, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Response`;
    }
  },
  He = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readFixed64String,
              bw: y.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Request`;
    }
  },
  Ue = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferred_level || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: d.readEnum, bw: y.writeEnum },
            enabled_subject_types: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readEnum,
              pbr: d.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Response`;
    }
  },
  We = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferred_level || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: d.readEnum, bw: y.writeEnum },
            enabled_subject_types: { n: 2, c: Ge },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request`;
    }
  },
  Ge = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_types || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
              br: d.readEnum,
              pbr: d.readPackedEnum,
              bw: y.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request_SubjectTypeList`;
    }
  },
  Ke = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Response`;
    }
  },
  qe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readFixed64String,
              bw: y.writeFixed64String,
            },
            rt_start: { n: 2, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Request`;
    }
  },
  Je = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.activities || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { activities: { n: 1, c: Ye, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response`;
    }
  },
  Ye = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            subject_group_id: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            timestamp: { n: 4, br: d.readUint32, bw: y.writeUint32 },
            action: { n: 5, br: d.readEnum, bw: y.writeEnum },
            json_data: { n: 6, br: d.readString, bw: y.writeString },
            reported_content_id: {
              n: 7,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response_ModerationActivity`;
    }
  },
  Xe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_start_date || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_start_date: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            rtime_end_date: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            subject_type: { n: 3, br: d.readEnum, bw: y.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Request`;
    }
  },
  Ze = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stats || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 2, c: Qe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response`;
    }
  },
  Qe = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_date || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_date: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            times_unresolved: { n: 2, br: d.readUint32, bw: y.writeUint32 },
            times_resolved: { n: 3, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response_DayStatistics`;
    }
  },
  $e = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            count: { n: 2, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Request`;
    }
  },
  et = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: tt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response`;
    }
  },
  tt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            subject_group_id: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response_Subject`;
    }
  },
  nt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: y.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Request`;
    }
  },
  rt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.total_reports || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_reports: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            total_acquitted_reports: {
              n: 2,
              br: d.readUint32,
              bw: y.writeUint32,
            },
            reports_in_last_week: { n: 3, br: d.readUint32, bw: y.writeUint32 },
            acquitted_reports_in_last_week: {
              n: 4,
              br: d.readUint32,
              bw: y.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Response`;
    }
  },
  it = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            moderator_level: { n: 2, br: d.readEnum, bw: y.writeEnum },
            filters: { n: 3, c: U, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Request`;
    }
  },
  at = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Response`;
    }
  },
  ot = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: y.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Request`;
    }
  },
  st = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Response`;
    }
  },
  ct = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects_to_release || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects_to_release: { n: 1, c: Le, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Request`;
    }
  },
  lt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Response`;
    }
  },
  U = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: d.readEnum, bw: y.writeEnum },
            steamid: { n: 2, br: d.readUint64String, bw: y.writeUint64String },
            forum: { n: 3, br: d.readUint64String, bw: y.writeUint64String },
            topic: { n: 4, br: d.readUint64String, bw: y.writeUint64String },
            comment: { n: 5, br: d.readUint64String, bw: y.writeUint64String },
            comment_thread_id: {
              n: 6,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            sender_account_id: { n: 7, br: d.readUint32, bw: y.writeUint32 },
            chat_message_rtime: { n: 8, br: d.readUint32, bw: y.writeUint32 },
            chat_message_ordinal: { n: 9, br: d.readUint32, bw: y.writeUint32 },
            chat_group_id: {
              n: 10,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            chat_room_id: {
              n: 11,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            receiver_account_id: { n: 12, br: d.readUint32, bw: y.writeUint32 },
            published_file_id: {
              n: 13,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            ugc_content_type: { n: 14, br: d.readUint32, bw: y.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ReportedContentCoordinates`;
    }
  },
  ut = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            include_reporter_account_status: {
              n: 2,
              br: d.readBool,
              bw: y.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Request`;
    }
  },
  dt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { subject: { n: 1, c: V } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Response`;
    }
  },
  ft = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.coordinates || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Request`;
    }
  },
  pt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Response`;
    }
  },
  mt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            details: { n: 2, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Request`;
    }
  },
  ht = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Response`;
    }
  },
  gt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Request`;
    }
  },
  _t = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.entries || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: vt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response`;
    }
  },
  vt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: d.readUint32, bw: y.writeUint32 },
            actor_steamid: {
              n: 2,
              br: d.readFixed64String,
              bw: y.writeFixed64String,
            },
            automated_action: { n: 3, br: d.readBool, bw: y.writeBool },
            action: { n: 4, br: d.readEnum, bw: y.writeEnum },
            additional_json_data: { n: 5, br: d.readString, bw: y.writeString },
            actor_is_support: { n: 6, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response_AuditLogEntry`;
    }
  },
  yt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            report_id: {
              n: 2,
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            dispute_details: { n: 3, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Request`;
    }
  },
  bt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Response`;
    }
  },
  xt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Request`;
    }
  },
  St = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Response`;
    }
  },
  Ct = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            new_level: { n: 2, br: d.readEnum, bw: y.writeEnum },
            reason: { n: 3, br: d.readEnum, bw: y.writeEnum },
            note: { n: 4, br: d.readString, bw: y.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Request`;
    }
  },
  wt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Response`;
    }
  },
  Tt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, [9], null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            resolution: { n: 4, br: d.readEnum, bw: y.writeEnum },
            reason: { n: 2, br: d.readEnum, bw: y.writeEnum },
            note: { n: 3, br: d.readString, bw: y.writeString },
            resolved_by_automation: { n: 7, br: d.readEnum, bw: y.writeEnum },
            sanctions_applied: { n: 9, c: H, r: !0, q: !0 },
            skip_lock: { n: 10, br: d.readBool, bw: y.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Request`;
    }
  },
  Et = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Response`;
    }
  },
  Dt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            csam_status: { n: 2, br: d.readEnum, bw: y.writeEnum },
            terrorism_status: { n: 3, br: d.readEnum, bw: y.writeEnum },
            credible_threat_of_violence_status: {
              n: 4,
              br: d.readEnum,
              bw: y.writeEnum,
            },
            additional_subject_data: { n: 5, c: z },
            owner_dispute_details: {
              n: 6,
              br: d.readString,
              bw: y.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Request`;
    }
  },
  Ot = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Response`;
    }
  },
  kt = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || p(e.M()),
        w.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: d.readUint64String,
              bw: y.writeUint64String,
            },
            action: { n: 2, br: d.readEnum, bw: y.writeEnum },
            automated_action: { n: 3, br: d.readBool, bw: y.writeBool },
            additional_json_data: { n: 4, br: d.readString, bw: y.writeString },
            actor_steamid: {
              n: 5,
              br: d.readFixed64String,
              bw: y.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= s(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return S(e.M(), t, n);
    }
    static fromObject(t) {
      return m(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new w.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return f(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      h(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Request`;
    }
  },
  At = class e extends w.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), w.Message.initialize(this, e, 0, -1, void 0, null);
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
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new w.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Response`;
    }
  },
  jt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ContentModeration.ClaimBatch#1`, _(it, t, n), at, {
      ePrivilege: 5,
    });
  }
  e.ClaimBatch = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetClaimedSubjects#1`,
      _(ot, t, n),
      st,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetClaimedSubjects = n;
  function r(e, t, n) {
    return e.SendMsg(`ContentModeration.ReleaseSubjects#1`, _(ct, t, n), lt, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ReleaseSubjects = r;
  function i(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportsSubmittedByUser#1`,
      _(Oe, t, n),
      ke,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetReportsSubmittedByUser = i;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetOneReportSubmittedByUser#1`,
      _(Ae, t, n),
      je,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetOneReportSubmittedByUser = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedSubjectsByOwner#1`,
      _(Me, t, n),
      Ne,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetReportedSubjectsByOwner = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetSubjectOverview#1`,
      _(Pe, t, n),
      Fe,
      { ePrivilege: 5 },
    );
  }
  e.GetSubjectOverview = s;
  function c(e, t, n) {
    return e.SendMsg(
      `ContentModeration.UpdateReporterCooldown#1`,
      _(Re, t, n),
      ze,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateReporterCooldown = c;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReporterCooldown#1`,
      _(Be, t, n),
      Ve,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReporterCooldown = l;
  function u(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetModeratorPreferences#1`,
      _(He, t, n),
      Ue,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetModeratorPreferences = u;
  function d(e, t, n) {
    return e.SendMsg(
      `ContentModeration.SetModeratorPreferences#1`,
      _(We, t, n),
      Ke,
      { ePrivilege: 5 },
    );
  }
  e.SetModeratorPreferences = d;
  function f(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetModeratorActivity#1`,
      _(qe, t, n),
      Je,
      { ePrivilege: 5 },
    );
  }
  e.GetModeratorActivity = f;
  function p(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetDailyModerationStatistics#1`,
      _(Xe, t, n),
      Ze,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetDailyModerationStatistics = p;
  function m(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetOldestUnresolvedSubjects#1`,
      _($e, t, n),
      et,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetOldestUnresolvedSubjects = m;
  function h(e, t, n) {
    return e.SendMsg(`ContentModeration.GetReporterStats#1`, _(nt, t, n), rt, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReporterStats = h;
  function g(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedContentByID#1`,
      _(ut, t, n),
      dt,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContentByID = g;
  function v(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedContent#1`,
      _(ft, t, n),
      pt,
      { bConstMethod: !0, ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetReportedContent = v;
  function y(e, t, n) {
    return e.SendMsg(
      `ContentModeration.OwnerDisputeModeration#1`,
      _(mt, t, n),
      ht,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.OwnerDisputeModeration = y;
  function b(e, t, n) {
    return e.SendMsg(`ContentModeration.GetAuditLogByID#1`, _(gt, t, n), _t, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAuditLogByID = b;
  function x(e, t, n) {
    return e.SendMsg(
      `ContentModeration.ReporterDisputeModeration#1`,
      _(yt, t, n),
      bt,
      { ePrivilege: 1 },
    );
  }
  e.ReporterDisputeModeration = x;
  function S(e, t, n) {
    return e.SendMsg(
      `ContentModeration.SustainModerationByID#1`,
      _(xt, t, n),
      St,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.SustainModerationByID = S;
  function ee(e, t, n) {
    return e.SendMsg(
      `ContentModeration.EscalateSubjectByID#1`,
      _(Ct, t, n),
      wt,
      { ePrivilege: 5, rgBrowserAPISites: [`community`] },
    );
  }
  e.EscalateSubjectByID = ee;
  function te(e, t, n) {
    return e.SendMsg(`ContentModeration.ResolveByID#1`, _(Tt, t, n), Et, {
      ePrivilege: 5,
    });
  }
  e.ResolveByID = te;
  function C(e, t, n) {
    return e.SendMsg(`ContentModeration.UpdateSubjectByID#1`, _(Dt, t, n), Ot, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UpdateSubjectByID = C;
  function w(e, t, n) {
    return e.SendMsg(
      `ContentModeration.WriteToAuditLogByID#1`,
      _(kt, t, n),
      At,
      { ePrivilege: 5 },
    );
  }
  e.WriteToAuditLogByID = w;
})((jt ||= {}));
function Mt(e) {
  let t = e?.reported_content_id
    ? e.reported_content_id
    : `${e?.subject_type}-${e?.subject_group_id}-${e?.subject_id}`;
  return `${x.COMMUNITY_BASE_URL}my/reportedcontent/${t}`;
}
var Nt = {
  11: {
    displayNameLoc: `#SteamNotification_HelpRequest_Author`,
    titleLoc: `#SteamNotification_HelpRequest_Title`,
    bodyLoc: (e) => ({
      locString: `#SteamNotification_HelpRequest_Body`,
      params: [e.ticket],
    }),
    link: (e) => x.HELP_BASE_URL + `wizard/HelpRequest/` + e.ticket,
  },
  6: {
    displayNameLoc: `#SteamNotifications_MajorSale`,
    titleLoc: (e) => ({ locString: e.title }),
    bodyLoc: (e) =>
      c() && e.link.includes(`https://store.steampowered.com`)
        ? `#SteamNotifications_MajorSale_SteamChina_Title`
        : e.body,
    image: (e) => e.image,
    link: (e) =>
      c() && e.link.includes(`https://store.steampowered.com`)
        ? e.link.replace(`https://store.steampowered.com`, x.STORE_BASE_URL)
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
    link: (e) => x.COMMUNITY_BASE_URL + `my/moderatormessages/` + e.msgid,
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
    link: (e) => x.STORE_BASE_URL + `account/gatedaccess?appid=` + e.appid,
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
    link: (e) => Mt(e),
  },
};
function Pt(e) {
  if (e !== void 0) return Nt[e];
}
function Ft(e) {
  return !!Pt(e);
}
var It = {
  16: {
    steamidAttribute: `inviter`,
    titleLoc: `#SteamNotifications_FamilyInviteTitle`,
    bodyLoc: `#SteamNotifications_FamilyInviteBody`,
    url: (e) =>
      `${x.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
  },
  15: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalFeatureRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalFeatureRequestBody`,
    url: () => `${x.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: `requestor_steamid`,
    titleLoc: `#SteamNotifications_FamilyPurchaseRequestTitle`,
    bodyLoc: `#SteamNotifications_FamilyPurchaseRequestBody`,
    url: (e) => C(e.familyid, e.request_id),
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
    url: () => `${x.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalPlaytimeRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalPlaytimeRequestBody`,
    url: () => `${x.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
    url: () => `${x.STORE_BASE_URL}account/familymanagement?tab=requests`,
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
    url: () => `${x.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function Lt(e) {
  if (e !== void 0) return It[e];
}
function Rt(e) {
  return !!Lt(e);
}
var zt = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function Bt(e) {
  return zt.findIndex((t) => t == e) != null;
}
function Vt(e) {
  return !e.hidden && Ht(e.notification_type) && X(e.body_data);
}
function Ht(e) {
  return Ft(e) || Rt(e) || Bt(e);
}
var W = new ee(`SteamNotificationStore`),
  G = W.Debug,
  K = W.Error,
  Ut = W.Warning,
  q = class {
    constructor() {
      a(this);
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
      (this.m_strRemoteClientID = e), (this.m_eTargetClientType = t);
    }
    NotifyServerNotificationsRead(e) {
      this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
    }
    NotifyServerNotificationsHidden(e) {
      this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
    }
    BSendToCallbackAsNew(e) {
      return (
        !e.read &&
        !sn(e) &&
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
        let e = v.Init(ie);
        e.Body().set_notification_ids(this.m_rgNotifyServerRead),
          O.MarkNotificationsRead(this.m_transport, e) &&
            (this.m_rgNotifyServerRead = []);
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let e = v.Init(ue);
        e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          O.HideNotification(this.m_transport, e) &&
            (this.m_rgNotifyServerHidden = []);
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
        r.rgunread.forEach((t) => {
          e.push(t);
        }),
          r.rgread.push(...r.rgunread),
          (r.rgunread = []),
          this.NotifyServerNotificationsRead(e);
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
      (n.item.hidden = !0),
        n.rgunread?.length > 0 &&
          this.ReduceNewTotals(n.type, n.rgunread?.length),
        this.NotifyServerNotificationsHidden([...n.rgunread, ...n.rgread]);
    }
    ReduceNewTotals(e, t) {
      an(this.m_summary, e, -t);
    }
    MarkAllItemsViewed() {
      let e = v.Init(ae);
      e.Body().set_remote_client_id(this.m_strRemoteClientID),
        e.Body().set_target_client_type(this.m_eTargetClientType),
        O.MarkNotificationsViewed(this.m_transport, e),
        (this.m_nUnviewed = 0);
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
            (t.item.read = !0), (t.rgunread = []);
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
      e.notifications?.forEach((e) => {
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
        this.ProcessNotifications();
    }
    ProcessNewNotificationPayload(e) {
      (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
        this.ProcessNotifications();
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
            Vt(r) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (e) => e == r.notification_id,
                ) !== -1 &&
                (r.read = !0),
              r.read || an(t, r.notification_type, 1),
              r.viewed || n++,
              this.AddNotificationToRollups(e, r)));
        }),
        e.sort((e, t) => e.timestamp - t.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let t of e)
          if (t.bSendToCallbackAsNew)
            this.m_rgNewRollupIDs.set(
              t.rollup_key,
              JSON.parse(JSON.stringify(t)),
            ),
              this.m_fnOnNotificationCallback(t, 0);
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
      e.reverse(),
        (t.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (t.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (t.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = e.slice()),
        (this.m_summary = t),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = n);
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
                url: Yt(i),
              });
            else {
              let r = e[o];
              this.BReplaceRollupItem(t, r.item) &&
                ((r.url = Yt(i)),
                (r.item = t),
                (r.timestamp = t.timestamp),
                (r.bSendToCallbackAsNew = n)),
                (r.rollup_count += 1),
                t.read
                  ? r.rgread.push(t.notification_id)
                  : r.rgunread.push(t.notification_id);
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
            c = Mt(o),
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
            this.BReplaceRollupItem(t, r.item) &&
              ((r.url = c),
              (r.item = t),
              (r.timestamp = t.timestamp),
              (r.bSendToCallbackAsNew = n)),
              (r.rollup_count += 1),
              t.read
                ? r.rgread.push(t.notification_id)
                : r.rgunread.push(t.notification_id);
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
        this.BReplaceRollupItem(t, n.item) &&
          ((n.item = t),
          (n.timestamp = t.timestamp),
          (n.bSendToCallbackAsNew = i)),
          (n.rollup_count += 1),
          t.read
            ? n.rgread.push(t.notification_id)
            : n.rgunread.push(t.notification_id);
      }
    }
  };
u([t], q.prototype, `m_rgNotificationRollups`, void 0),
  u([t], q.prototype, `m_summary`, void 0),
  u([t], q.prototype, `m_bLoaded`, void 0),
  u([t], q.prototype, `m_nUnviewed`, void 0),
  u([n], q.prototype, `ProcessNotifications`, null);
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
async function Wt(e, t, n, r, i, a = !0, o = !1) {
  if (!t) throw Error(`Invalid steamid for GetSteamNotifications`);
  let s = v.Init(E);
  s.Body().set_language(n),
    s.Body().set_include_read(a),
    s.Body().set_include_pinned_counts(!0),
    s.Body().set_include_confirmation_count(o);
  let c = await O.GetSteamNotifications(e, s);
  if (c.GetEResult() !== 1)
    throw (
      (Ut(
        `Received error from GetSteamNotifications. Result ${c.GetEResult()}. Transport ${c.Hdr().transport_error()}`,
      ),
      Error(`Error from GetSteamNotifications: ${c.GetEResult()}`))
    );
  let l = c.Body().toObject();
  return (
    r &&
      (l.notifications = l.notifications?.filter(
        (e) => !rn(e.notification_type, r, i),
      )),
    l
  );
}
async function Gt(e, t) {
  if (!e || !e.steamid || !e.contextid || !e.appid || !e.assetid)
    return K(`Item notification missing required attributes`), null;
  let n = v.Init(I);
  n.Body().set_steamid(e.steamid),
    n.Body().set_contextid(e.contextid),
    n.Body().set_appid(parseInt(e.appid)),
    n.Body().set_get_descriptions(!0),
    n.Body().set_language(x.LANGUAGE);
  let r = new L();
  r.add_assetids(e.assetid), n.Body().set_filters(r);
  let i = await R.GetInventoryItemsWithDescriptions(t, n);
  return i.GetEResult() === 1
    ? (i.Body().toObject().descriptions[0] ?? null)
    : (K(`Request for steam item metadata did not succeed`, i.GetEResult()),
      null);
}
var Kt = `ItemMetadata`;
function qt(e) {
  return [`${Kt}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`];
}
function Jt(e, t, n) {
  let r = Q(4, e.body_data);
  r.steamid = t;
  let i = o({
    queryKey: qt(r),
    queryFn: async () => Gt(r, n),
    staleTime: 1 / 0,
  });
  return i.isSuccess ? i.data : null;
}
function Yt(e) {
  let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
  return e.last_post > 0 && (t += `&tscn=` + (e.last_post - 1)), t;
}
function Xt(e) {
  return e.comment_type == 10;
}
function Zt(e) {
  return e?.bhas_friend;
}
function Y(e) {
  return e.comment_type == 10;
}
function Qt(e) {
  return Xt(e) || Zt(e);
}
function $t(e) {
  return Y(e);
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
function en(e) {
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
        owner_steam_id: n.owner_steam_id ? new l(n.owner_steam_id) : null,
        bclan_account: $(n.bclan_account),
        title: n.title,
        comment: n.text,
        time: n.last_post,
        comment_type: Number(n.type),
        topic_id: n.topic_id,
        forum_id: n.forum_id,
        account_steam_id: n.account_id
          ? l.InitFromAccountID(n.account_id, x.EUNIVERSE)
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
  return G(`notification contained unexpected boolean value`), !1;
}
var tn = {
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
function nn(e) {
  let t = tn[e];
  return b(!!t, `Missing notification type data for ${e}`), t;
}
function rn(e, t, n) {
  if (!t) return !1;
  let r = nn(e);
  return te(t, r?.eFeature ?? 15, n);
}
function an(e, t, n) {
  i(() => {
    let r = nn(t);
    r?.rollup_field && (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + n));
  });
}
function on(e) {
  return !e.viewed || e.viewed + 600 > g();
}
function sn(e) {
  return e.viewed && e.viewed + 172800 < g();
}
export {
  X as _,
  Xt as a,
  Rt as c,
  sn as d,
  q as f,
  Lt as g,
  en as h,
  Zt as i,
  rn as l,
  Pt as m,
  Qt as n,
  Ft as o,
  Wt as p,
  Y as r,
  Bt as s,
  $t as t,
  on as u,
  Jt as v,
  ne as y,
};
