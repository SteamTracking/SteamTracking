/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Ft as t } from "./libraries.js";
import {
  $m as n,
  Ah as r,
  Dh as i,
  Eh as a,
  Mh as o,
  Oh as s,
  Th as c,
  jh as l,
  kh as u,
} from "./main.js";
var d = e(t(), 1),
  f = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: s.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Request`;
    }
  },
  p = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.summary || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            summary: { n: 1, c: m },
            timestamp_updated: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            auditid_highwater: {
              n: 3,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Response`;
    }
  },
  m = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.points || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points: { n: 1, br: s.readInt64String, bw: o.writeInt64String },
            points_earned: {
              n: 2,
              br: s.readInt64String,
              bw: o.writeInt64String,
            },
            points_spent: {
              n: 3,
              br: s.readInt64String,
              bw: o.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Response_Summary`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: s.readInt64String, bw: o.writeInt64String },
            ecurrency: { n: 2, br: s.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetPointsForSpend_Request`;
    }
  },
  g = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.points || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points: { n: 1, br: s.readInt64String, bw: o.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetPointsForSpend_Response`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.defid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            expected_points_cost: {
              n: 2,
              br: s.readInt64String,
              bw: o.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPoints_Request`;
    }
  },
  ee = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.defid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            num_levels: { n: 2, d: 1, br: s.readInt32, bw: o.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForBadgeLevel_Request`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.defid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            communityitemid: {
              n: 2,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsToUpgradeItem_Request`;
    }
  },
  y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.communityitemid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            communityitemid: {
              n: 1,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            bundle_community_item_ids: {
              n: 2,
              r: !0,
              q: !0,
              br: s.readUint64String,
              pbr: s.readPackedUint64String,
              bw: o.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPoints_Response`;
    }
  },
  b = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.customization_type || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customization_type: { n: 1, br: s.readEnum, bw: o.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Request`;
    }
  },
  x = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.purchaseid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            purchaseid: {
              n: 1,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Response`;
    }
  },
  S = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.customization_type || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customization_type: { n: 1, br: s.readEnum, bw: o.writeEnum },
            new_level: { n: 2, br: s.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request`;
    }
  },
  C = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response`;
    }
  },
  w = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serial_number || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: s.readString, bw: o.writeString },
            controller_code: { n: 2, br: s.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Request`;
    }
  },
  T = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.granted_profile_modifier || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            granted_profile_modifier: { n: 1, br: s.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Response`;
    }
  },
  E = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.target_type || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            target_type: { n: 1, br: s.readEnum, bw: o.writeEnum },
            targetid: { n: 2, br: s.readUint64String, bw: o.writeUint64String },
            reactionid: { n: 3, br: s.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Request`;
    }
  },
  D = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Response`;
    }
  },
  O = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.target_type || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            target_type: { n: 1, br: s.readEnum, bw: o.writeEnum },
            targetid: { n: 2, br: s.readUint64String, bw: o.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactions_Request`;
    }
  },
  k = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactionids || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionids: {
              n: 1,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactions_Response`;
    }
  },
  A = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: s.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Request`;
    }
  },
  j = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.total || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2, 3, 4, 5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total: { n: 1, c: M, r: !0, q: !0 },
            user_reviews: { n: 2, c: M, r: !0, q: !0 },
            ugc: { n: 3, c: M, r: !0, q: !0 },
            profile: { n: 4, c: M, r: !0, q: !0 },
            forum_topics: { n: 5, c: M, r: !0, q: !0 },
            comments: { n: 6, c: M, r: !0, q: !0 },
            total_given: { n: 7, br: s.readUint32, bw: o.writeUint32 },
            total_received: { n: 8, br: s.readUint32, bw: o.writeUint32 },
            total_points_given: {
              n: 9,
              br: s.readInt64String,
              bw: o.writeInt64String,
            },
            total_points_received: {
              n: 10,
              br: s.readInt64String,
              bw: o.writeInt64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response`;
    }
  },
  M = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactionid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionid: { n: 1, br: s.readEnum, bw: o.writeEnum },
            given: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            received: { n: 3, br: s.readUint32, bw: o.writeUint32 },
            points_given: {
              n: 4,
              br: s.readInt64String,
              bw: o.writeInt64String,
            },
            points_received: {
              n: 5,
              br: s.readInt64String,
              bw: o.writeInt64String,
            },
            purchaseable: { n: 6, br: s.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown`;
    }
  },
  N = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.elanguage || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { elanguage: { n: 1, br: s.readInt32, bw: o.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Request`;
    }
  },
  P = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactions || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reactions: { n: 3, c: F, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Response`;
    }
  },
  F = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactionid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionid: { n: 1, br: s.readEnum, bw: o.writeEnum },
            points_cost: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            points_transferred: { n: 3, br: s.readUint32, bw: o.writeUint32 },
            valid_target_types: {
              n: 4,
              r: !0,
              q: !0,
              br: s.readEnum,
              pbr: s.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            valid_ugc_types: {
              n: 5,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            purchaseable: { n: 6, br: s.readBool, bw: o.writeBool },
            localized_title: { n: 7, br: s.readString, bw: o.writeString },
            localized_desc: { n: 8, br: s.readString, bw: o.writeString },
            available_until: { n: 9, br: s.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig`;
    }
  },
  I = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Request`;
    }
  },
  L = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.points_cost || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points_cost: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            upgrade_points_cost: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            purchasable_customization_types: {
              n: 3,
              r: !0,
              q: !0,
              br: s.readEnum,
              pbr: s.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            upgradable_customization_types: {
              n: 4,
              r: !0,
              q: !0,
              br: s.readEnum,
              pbr: s.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            max_slots_per_type: { n: 5, br: s.readUint32, bw: o.writeUint32 },
            max_upgradable_level: { n: 6, br: s.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Response`;
    }
  },
  R = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Request`;
    }
  },
  z = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apps || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Response`;
    }
  },
  B = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            has_items_anyone_can_purchase: {
              n: 2,
              br: s.readBool,
              bw: o.writeBool,
            },
            event_app: { n: 3, br: s.readBool, bw: o.writeBool },
            hero_carousel_image: { n: 4, br: s.readString, bw: o.writeString },
            owned: { n: 5, br: s.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Response_EligibleApp`;
    }
  },
  V = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            defid: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            type: { n: 3, br: s.readEnum, bw: o.writeEnum },
            community_item_class: { n: 4, br: s.readInt32, bw: o.writeInt32 },
            community_item_type: { n: 5, br: s.readUint32, bw: o.writeUint32 },
            point_cost: { n: 6, br: s.readInt64String, bw: o.writeInt64String },
            timestamp_created: { n: 7, br: s.readUint32, bw: o.writeUint32 },
            timestamp_updated: { n: 8, br: s.readUint32, bw: o.writeUint32 },
            timestamp_available: { n: 9, br: s.readUint32, bw: o.writeUint32 },
            timestamp_available_end: {
              n: 14,
              br: s.readUint32,
              bw: o.writeUint32,
            },
            quantity: { n: 10, br: s.readInt64String, bw: o.writeInt64String },
            internal_description: {
              n: 11,
              br: s.readString,
              bw: o.writeString,
            },
            active: { n: 12, br: s.readBool, bw: o.writeBool },
            community_item_data: { n: 13, c: H },
            bundle_defids: {
              n: 15,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            usable_duration: { n: 16, br: s.readUint32, bw: o.writeUint32 },
            bundle_discount: { n: 17, br: s.readUint32, bw: o.writeUint32 },
            timestamp_free_until: {
              n: 18,
              br: s.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `LoyaltyRewardDefinition`;
    }
  },
  H = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.item_name || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_name: { n: 1, br: s.readString, bw: o.writeString },
            item_title: { n: 2, br: s.readString, bw: o.writeString },
            item_description: { n: 3, br: s.readString, bw: o.writeString },
            item_image_small: { n: 4, br: s.readString, bw: o.writeString },
            item_image_large: { n: 5, br: s.readString, bw: o.writeString },
            item_movie_webm: { n: 6, br: s.readString, bw: o.writeString },
            item_movie_mp4: { n: 7, br: s.readString, bw: o.writeString },
            item_movie_webm_small: {
              n: 10,
              br: s.readString,
              bw: o.writeString,
            },
            item_movie_mp4_small: {
              n: 11,
              br: s.readString,
              bw: o.writeString,
            },
            animated: { n: 8, br: s.readBool, bw: o.writeBool },
            badge_data: { n: 9, c: U, r: !0, q: !0 },
            profile_theme_id: { n: 12, br: s.readString, bw: o.writeString },
            tiled: { n: 13, br: s.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `LoyaltyRewardDefinition_CommunityItemData`;
    }
  },
  U = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.level || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            level: { n: 1, br: s.readInt32, bw: o.writeInt32 },
            image: { n: 2, br: s.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `LoyaltyRewardDefinition_BadgeData`;
    }
  },
  W = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bonusid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bonusid: { n: 1, br: s.readUint64String, bw: o.writeUint64String },
            appid: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            active: { n: 3, br: s.readBool, bw: o.writeBool },
            points: { n: 4, br: s.readInt32, bw: o.writeInt32 },
            timestamp_start: { n: 5, br: s.readUint32, bw: o.writeUint32 },
            timestamp_end: { n: 6, br: s.readUint32, bw: o.writeUint32 },
            internal_description: { n: 7, br: s.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `LoyaltyRewardPurchaseBonus`;
    }
  },
  G = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), d.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Request`;
    }
  },
  K = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bonuses || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { bonuses: { n: 1, c: W, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Response`;
    }
  },
  q = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || c(e.M()),
        d.Message.initialize(
          this,
          t,
          0,
          -1,
          [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
          null,
        );
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
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            time_available: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            community_item_classes: {
              n: 3,
              r: !0,
              q: !0,
              br: s.readInt32,
              pbr: s.readPackedInt32,
              bw: o.writeRepeatedInt32,
            },
            language: { n: 4, br: s.readString, bw: o.writeString },
            count: { n: 5, br: s.readInt32, bw: o.writeInt32 },
            cursor: { n: 6, br: s.readString, bw: o.writeString },
            sort: { n: 7, d: 1, br: s.readEnum, bw: o.writeEnum },
            sort_descending: { n: 8, d: !0, br: s.readBool, bw: o.writeBool },
            reward_types: {
              n: 9,
              r: !0,
              q: !0,
              br: s.readEnum,
              pbr: s.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            excluded_community_item_classes: {
              n: 10,
              r: !0,
              q: !0,
              br: s.readInt32,
              pbr: s.readPackedInt32,
              bw: o.writeRepeatedInt32,
            },
            definitionids: {
              n: 11,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            filters: {
              n: 12,
              r: !0,
              q: !0,
              br: s.readEnum,
              pbr: s.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
            filter_match_all_category_tags: {
              n: 13,
              r: !0,
              q: !0,
              br: s.readString,
              bw: o.writeRepeatedString,
            },
            filter_match_any_category_tags: {
              n: 14,
              r: !0,
              q: !0,
              br: s.readString,
              bw: o.writeRepeatedString,
            },
            contains_definitionids: {
              n: 15,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            include_direct_purchase_disabled: {
              n: 16,
              br: s.readBool,
              bw: o.writeBool,
            },
            excluded_content_descriptors: {
              n: 17,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            excluded_appids: {
              n: 18,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            excluded_store_tagids: {
              n: 19,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            store_tagids: {
              n: 20,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            search_term: { n: 21, br: s.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_QueryRewardItems_Request`;
    }
  },
  J = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.definitions || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definitions: { n: 1, c: V, r: !0, q: !0 },
            total_count: { n: 2, br: s.readInt32, bw: o.writeInt32 },
            count: { n: 3, br: s.readInt32, bw: o.writeInt32 },
            next_cursor: { n: 4, br: s.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_QueryRewardItems_Response`;
    }
  },
  Y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requests || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Request`;
    }
  },
  X = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.responses || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { responses: { n: 1, c: Z, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response`;
    }
  },
  Z = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.eresult || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eresult: { n: 1, br: s.readInt32, bw: o.writeInt32 },
            response: { n: 2, c: J },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response_Response`;
    }
  },
  Q = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: s.readFixed64String,
              bw: o.writeFixed64String,
            },
            language: { n: 2, br: s.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEquippedProfileItems_Request`;
    }
  },
  te = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.active_definitions || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            active_definitions: { n: 1, c: V, r: !0, q: !0 },
            inactive_definitions: { n: 2, c: V, r: !0, q: !0 },
            bundle_definitions: { n: 3, c: V, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= u(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return l(e.M(), t, n);
    }
    static fromObject(t) {
      return i(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      r(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CLoyaltyRewards_GetEquippedProfileItems_Response`;
    }
  },
  $;
(function (e) {
  function t(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.GetPointsForSpend#1`, n(h, t, r), g, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetPointsForSpend = t;
  function r(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.GetSummary#1`, n(f, t, r), p, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetSummary = r;
  function i(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.RedeemPoints#1`, n(_, t, r), y, {
      ePrivilege: 1,
    });
  }
  e.RedeemPoints = i;
  function a(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForBadgeLevel#1`,
      n(ee, t, r),
      y,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsForBadgeLevel = a;
  function o(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsToUpgradeItem#1`,
      n(v, t, r),
      y,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsToUpgradeItem = o;
  function s(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomization#1`,
      n(b, t, r),
      x,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsForProfileCustomization = s;
  function c(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1`,
      n(S, t, r),
      C,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsForProfileCustomizationUpgrade = c;
  function l(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RegisterForSteamDeckRewards#1`,
      n(w, t, r),
      T,
      { ePrivilege: 1 },
    );
  }
  e.RegisterForSteamDeckRewards = l;
  function u(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.AddReaction#1`, n(E, t, r), D, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddReaction = u;
  function d(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.GetReactions#1`, n(O, t, r), k, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReactions = d;
  function m(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.GetReactionsSummaryForUser#1`,
      n(A, t, r),
      j,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetReactionsSummaryForUser = m;
  function M(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.GetReactionConfig#1`, n(N, t, r), P, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetReactionConfig = M;
  function F(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.GetProfileCustomizationsConfig#1`,
      n(I, t, r),
      L,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetProfileCustomizationsConfig = F;
  function B(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.GetEligibleApps#1`, n(R, t, r), z, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetEligibleApps = B;
  function V(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.GetActivePurchaseBonuses#1`,
      n(G, t, r),
      K,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetActivePurchaseBonuses = V;
  function H(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.QueryRewardItems#1`, n(q, t, r), J, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.QueryRewardItems = H;
  function U(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.BatchedQueryRewardItems#1`,
      n(Y, t, r),
      X,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.BatchedQueryRewardItems = U;
  function W(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.GetEquippedProfileItems#1`,
      n(Q, t, r),
      te,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetEquippedProfileItems = W;
})(($ ||= {}));
export { V as a, f as i, N as n, $ as o, O as r, E as t };
