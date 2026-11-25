/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Nt as t } from "./chunk~01cfc309bf.js";
import {
  Ax as n,
  _S as r,
  dS as i,
  fS as a,
  gS as o,
  hS as s,
  mS as c,
  pS as l,
  vS as u,
} from "./main.js";
var d = e(t(), 1),
  f = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: c.readFixed64String,
              bw: u.writeFixed64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Request`;
    }
  },
  p = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.summary || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            summary: { n: 1, c: m },
            timestamp_updated: { n: 2, br: c.readUint32, bw: u.writeUint32 },
            auditid_highwater: {
              n: 3,
              br: c.readUint64String,
              bw: u.writeUint64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Response`;
    }
  },
  m = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.points || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points: { n: 1, br: c.readInt64String, bw: u.writeInt64String },
            points_earned: {
              n: 2,
              br: c.readInt64String,
              bw: u.writeInt64String,
            },
            points_spent: {
              n: 3,
              br: c.readInt64String,
              bw: u.writeInt64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetSummary_Response_Summary`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.amount || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: c.readInt64String, bw: u.writeInt64String },
            ecurrency: { n: 2, br: c.readUint32, bw: u.writeUint32 },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetPointsForSpend_Request`;
    }
  },
  g = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.points || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points: { n: 1, br: c.readInt64String, bw: u.writeInt64String },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetPointsForSpend_Response`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.defid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: c.readUint32, bw: u.writeUint32 },
            expected_points_cost: {
              n: 2,
              br: c.readInt64String,
              bw: u.writeInt64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPoints_Request`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.defid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: c.readUint32, bw: u.writeUint32 },
            num_levels: { n: 2, d: 1, br: c.readInt32, bw: u.writeInt32 },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForBadgeLevel_Request`;
    }
  },
  y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.defid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            defid: { n: 1, br: c.readUint32, bw: u.writeUint32 },
            communityitemid: {
              n: 2,
              br: c.readUint64String,
              bw: u.writeUint64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsToUpgradeItem_Request`;
    }
  },
  b = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.communityitemid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [2], null));
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
              br: c.readUint64String,
              bw: u.writeUint64String,
            },
            bundle_community_item_ids: {
              n: 2,
              r: !0,
              q: !0,
              br: c.readUint64String,
              pbr: c.readPackedUint64String,
              bw: u.writeRepeatedUint64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPoints_Response`;
    }
  },
  x = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.customization_type || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customization_type: { n: 1, br: c.readEnum, bw: u.writeEnum },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Request`;
    }
  },
  S = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.purchaseid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: c.readUint64String,
              bw: u.writeUint64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomization_Response`;
    }
  },
  C = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.customization_type || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            customization_type: { n: 1, br: c.readEnum, bw: u.writeEnum },
            new_level: { n: 2, br: c.readUint32, bw: u.writeUint32 },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request`;
    }
  },
  w = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response`;
    }
  },
  T = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.serial_number || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serial_number: { n: 1, br: c.readString, bw: u.writeString },
            controller_code: { n: 2, br: c.readString, bw: u.writeString },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Request`;
    }
  },
  E = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.granted_profile_modifier || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            granted_profile_modifier: { n: 1, br: c.readBool, bw: u.writeBool },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_RegisterForSteamDeckRewards_Response`;
    }
  },
  D = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.target_type || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            target_type: { n: 1, br: c.readEnum, bw: u.writeEnum },
            targetid: { n: 2, br: c.readUint64String, bw: u.writeUint64String },
            reactionid: { n: 3, br: c.readUint32, bw: u.writeUint32 },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Request`;
    }
  },
  O = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_AddReaction_Response`;
    }
  },
  k = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.target_type || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            target_type: { n: 1, br: c.readEnum, bw: u.writeEnum },
            targetid: { n: 2, br: c.readUint64String, bw: u.writeUint64String },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactions_Request`;
    }
  },
  A = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reactionids || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactions_Response`;
    }
  },
  j = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: c.readFixed64String,
              bw: u.writeFixed64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Request`;
    }
  },
  M = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2, 3, 4, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total: { n: 1, c: N, r: !0, q: !0 },
            user_reviews: { n: 2, c: N, r: !0, q: !0 },
            ugc: { n: 3, c: N, r: !0, q: !0 },
            profile: { n: 4, c: N, r: !0, q: !0 },
            forum_topics: { n: 5, c: N, r: !0, q: !0 },
            comments: { n: 6, c: N, r: !0, q: !0 },
            total_given: { n: 7, br: c.readUint32, bw: u.writeUint32 },
            total_received: { n: 8, br: c.readUint32, bw: u.writeUint32 },
            total_points_given: {
              n: 9,
              br: c.readInt64String,
              bw: u.writeInt64String,
            },
            total_points_received: {
              n: 10,
              br: c.readInt64String,
              bw: u.writeInt64String,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response`;
    }
  },
  N = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reactionid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionid: { n: 1, br: c.readEnum, bw: u.writeEnum },
            given: { n: 2, br: c.readUint32, bw: u.writeUint32 },
            received: { n: 3, br: c.readUint32, bw: u.writeUint32 },
            points_given: {
              n: 4,
              br: c.readInt64String,
              bw: u.writeInt64String,
            },
            points_received: {
              n: 5,
              br: c.readInt64String,
              bw: u.writeInt64String,
            },
            purchaseable: { n: 6, br: c.readBool, bw: u.writeBool },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown`;
    }
  },
  P = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.elanguage || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { elanguage: { n: 1, br: c.readInt32, bw: u.writeInt32 } },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Request`;
    }
  },
  ee = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reactions || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [3], null));
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
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Response`;
    }
  },
  F = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reactionid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionid: { n: 1, br: c.readEnum, bw: u.writeEnum },
            points_cost: { n: 2, br: c.readUint32, bw: u.writeUint32 },
            points_transferred: { n: 3, br: c.readUint32, bw: u.writeUint32 },
            valid_target_types: {
              n: 4,
              r: !0,
              q: !0,
              br: c.readEnum,
              pbr: c.readPackedEnum,
              bw: u.writeRepeatedEnum,
            },
            valid_ugc_types: {
              n: 5,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            purchaseable: { n: 6, br: c.readBool, bw: u.writeBool },
            localized_title: { n: 7, br: c.readString, bw: u.writeString },
            localized_desc: { n: 8, br: c.readString, bw: u.writeString },
            available_until: { n: 9, br: c.readUint32, bw: u.writeUint32 },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig`;
    }
  },
  I = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Request`;
    }
  },
  L = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.points_cost || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            points_cost: { n: 1, br: c.readUint32, bw: u.writeUint32 },
            upgrade_points_cost: { n: 2, br: c.readUint32, bw: u.writeUint32 },
            purchasable_customization_types: {
              n: 3,
              r: !0,
              q: !0,
              br: c.readEnum,
              pbr: c.readPackedEnum,
              bw: u.writeRepeatedEnum,
            },
            upgradable_customization_types: {
              n: 4,
              r: !0,
              q: !0,
              br: c.readEnum,
              pbr: c.readPackedEnum,
              bw: u.writeRepeatedEnum,
            },
            max_slots_per_type: { n: 5, br: c.readUint32, bw: u.writeUint32 },
            max_upgradable_level: { n: 6, br: c.readUint32, bw: u.writeUint32 },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetProfileCustomizationsConfig_Response`;
    }
  },
  R = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Request`;
    }
  },
  z = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Response`;
    }
  },
  B = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: c.readUint32, bw: u.writeUint32 },
            has_items_anyone_can_purchase: {
              n: 2,
              br: c.readBool,
              bw: u.writeBool,
            },
            event_app: { n: 3, br: c.readBool, bw: u.writeBool },
            hero_carousel_image: { n: 4, br: c.readString, bw: u.writeString },
            owned: { n: 5, br: c.readBool, bw: u.writeBool },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEligibleApps_Response_EligibleApp`;
    }
  },
  V = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: c.readUint32, bw: u.writeUint32 },
            defid: { n: 2, br: c.readUint32, bw: u.writeUint32 },
            type: { n: 3, br: c.readEnum, bw: u.writeEnum },
            community_item_class: { n: 4, br: c.readInt32, bw: u.writeInt32 },
            community_item_type: { n: 5, br: c.readUint32, bw: u.writeUint32 },
            point_cost: { n: 6, br: c.readInt64String, bw: u.writeInt64String },
            timestamp_created: { n: 7, br: c.readUint32, bw: u.writeUint32 },
            timestamp_updated: { n: 8, br: c.readUint32, bw: u.writeUint32 },
            timestamp_available: { n: 9, br: c.readUint32, bw: u.writeUint32 },
            timestamp_available_end: {
              n: 14,
              br: c.readUint32,
              bw: u.writeUint32,
            },
            quantity: { n: 10, br: c.readInt64String, bw: u.writeInt64String },
            internal_description: {
              n: 11,
              br: c.readString,
              bw: u.writeString,
            },
            active: { n: 12, br: c.readBool, bw: u.writeBool },
            community_item_data: { n: 13, c: H },
            bundle_defids: {
              n: 15,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            usable_duration: { n: 16, br: c.readUint32, bw: u.writeUint32 },
            bundle_discount: { n: 17, br: c.readUint32, bw: u.writeUint32 },
            timestamp_free_until: {
              n: 18,
              br: c.readUint32,
              bw: u.writeUint32,
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `LoyaltyRewardDefinition`;
    }
  },
  H = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_name || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_name: { n: 1, br: c.readString, bw: u.writeString },
            item_title: { n: 2, br: c.readString, bw: u.writeString },
            item_description: { n: 3, br: c.readString, bw: u.writeString },
            item_image_small: { n: 4, br: c.readString, bw: u.writeString },
            item_image_large: { n: 5, br: c.readString, bw: u.writeString },
            item_movie_webm: { n: 6, br: c.readString, bw: u.writeString },
            item_movie_mp4: { n: 7, br: c.readString, bw: u.writeString },
            item_movie_webm_small: {
              n: 10,
              br: c.readString,
              bw: u.writeString,
            },
            item_movie_mp4_small: {
              n: 11,
              br: c.readString,
              bw: u.writeString,
            },
            animated: { n: 8, br: c.readBool, bw: u.writeBool },
            badge_data: { n: 9, c: U, r: !0, q: !0 },
            profile_theme_id: { n: 12, br: c.readString, bw: u.writeString },
            tiled: { n: 13, br: c.readBool, bw: u.writeBool },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `LoyaltyRewardDefinition_CommunityItemData`;
    }
  },
  U = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.level || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            level: { n: 1, br: c.readInt32, bw: u.writeInt32 },
            image: { n: 2, br: c.readString, bw: u.writeString },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `LoyaltyRewardDefinition_BadgeData`;
    }
  },
  W = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bonusid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bonusid: { n: 1, br: c.readUint64String, bw: u.writeUint64String },
            appid: { n: 2, br: c.readUint32, bw: u.writeUint32 },
            active: { n: 3, br: c.readBool, bw: u.writeBool },
            points: { n: 4, br: c.readInt32, bw: u.writeInt32 },
            timestamp_start: { n: 5, br: c.readUint32, bw: u.writeUint32 },
            timestamp_end: { n: 6, br: c.readUint32, bw: u.writeUint32 },
            internal_description: { n: 7, br: c.readString, bw: u.writeString },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `LoyaltyRewardPurchaseBonus`;
    }
  },
  G = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), d.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Request`;
    }
  },
  K = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bonuses || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetActivePurchaseBonuses_Response`;
    }
  },
  q = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || i(e.M()),
        d.Message.initialize(
          this,
          t,
          0,
          -1,
          [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
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
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            time_available: { n: 2, br: c.readUint32, bw: u.writeUint32 },
            community_item_classes: {
              n: 3,
              r: !0,
              q: !0,
              br: c.readInt32,
              pbr: c.readPackedInt32,
              bw: u.writeRepeatedInt32,
            },
            language: { n: 4, br: c.readString, bw: u.writeString },
            count: { n: 5, br: c.readInt32, bw: u.writeInt32 },
            cursor: { n: 6, br: c.readString, bw: u.writeString },
            sort: { n: 7, d: 1, br: c.readEnum, bw: u.writeEnum },
            sort_descending: { n: 8, d: !0, br: c.readBool, bw: u.writeBool },
            reward_types: {
              n: 9,
              r: !0,
              q: !0,
              br: c.readEnum,
              pbr: c.readPackedEnum,
              bw: u.writeRepeatedEnum,
            },
            excluded_community_item_classes: {
              n: 10,
              r: !0,
              q: !0,
              br: c.readInt32,
              pbr: c.readPackedInt32,
              bw: u.writeRepeatedInt32,
            },
            definitionids: {
              n: 11,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            filters: {
              n: 12,
              r: !0,
              q: !0,
              br: c.readEnum,
              pbr: c.readPackedEnum,
              bw: u.writeRepeatedEnum,
            },
            filter_match_all_category_tags: {
              n: 13,
              r: !0,
              q: !0,
              br: c.readString,
              bw: u.writeRepeatedString,
            },
            filter_match_any_category_tags: {
              n: 14,
              r: !0,
              q: !0,
              br: c.readString,
              bw: u.writeRepeatedString,
            },
            contains_definitionids: {
              n: 15,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            include_direct_purchase_disabled: {
              n: 16,
              br: c.readBool,
              bw: u.writeBool,
            },
            excluded_content_descriptors: {
              n: 17,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            excluded_appids: {
              n: 18,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            excluded_store_tagids: {
              n: 19,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            store_tagids: {
              n: 20,
              r: !0,
              q: !0,
              br: c.readUint32,
              pbr: c.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            search_term: { n: 21, br: c.readString, bw: u.writeString },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_QueryRewardItems_Request`;
    }
  },
  J = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.definitions || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definitions: { n: 1, c: V, r: !0, q: !0 },
            total_count: { n: 2, br: c.readInt32, bw: u.writeInt32 },
            count: { n: 3, br: c.readInt32, bw: u.writeInt32 },
            next_cursor: { n: 4, br: c.readString, bw: u.writeString },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_QueryRewardItems_Response`;
    }
  },
  Y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Request`;
    }
  },
  X = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.responses || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response`;
    }
  },
  Z = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.eresult || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            eresult: { n: 1, br: c.readInt32, bw: u.writeInt32 },
            response: { n: 2, c: J },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_BatchedQueryRewardItems_Response_Response`;
    }
  },
  Q = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: c.readFixed64String,
              bw: u.writeFixed64String,
            },
            language: { n: 2, br: c.readString, bw: u.writeString },
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
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CLoyaltyRewards_GetEquippedProfileItems_Request`;
    }
  },
  te = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.active_definitions || i(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
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
      return ((e.sm_mbf ||= s(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      o(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
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
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetSummary = r;
  function i(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.RedeemPoints#1`, n(_, t, r), b, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.RedeemPoints = i;
  function a(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForBadgeLevel#1`,
      n(v, t, r),
      b,
      { ePrivilege: 1, rgBrowserAPISites: [`store`] },
    );
  }
  e.RedeemPointsForBadgeLevel = a;
  function o(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsToUpgradeItem#1`,
      n(y, t, r),
      b,
      { ePrivilege: 1 },
    );
  }
  e.RedeemPointsToUpgradeItem = o;
  function s(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomization#1`,
      n(x, t, r),
      S,
      { ePrivilege: 1, rgBrowserAPISites: [`store`] },
    );
  }
  e.RedeemPointsForProfileCustomization = s;
  function c(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1`,
      n(C, t, r),
      w,
      { ePrivilege: 1, rgBrowserAPISites: [`store`] },
    );
  }
  e.RedeemPointsForProfileCustomizationUpgrade = c;
  function l(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.RegisterForSteamDeckRewards#1`,
      n(T, t, r),
      E,
      { ePrivilege: 1 },
    );
  }
  e.RegisterForSteamDeckRewards = l;
  function u(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.AddReaction#1`, n(D, t, r), O, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.AddReaction = u;
  function d(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.GetReactions#1`, n(k, t, r), A, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetReactions = d;
  function m(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.GetReactionsSummaryForUser#1`,
      n(j, t, r),
      M,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetReactionsSummaryForUser = m;
  function N(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.GetReactionConfig#1`, n(P, t, r), ee, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetReactionConfig = N;
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
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetEligibleApps = B;
  function V(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.GetActivePurchaseBonuses#1`,
      n(G, t, r),
      K,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetActivePurchaseBonuses = V;
  function H(e, t, r) {
    return e.SendMsg(`LoyaltyRewards.QueryRewardItems#1`, n(q, t, r), J, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.QueryRewardItems = H;
  function U(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.BatchedQueryRewardItems#1`,
      n(Y, t, r),
      X,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.BatchedQueryRewardItems = U;
  function W(e, t, r) {
    return e.SendMsg(
      `LoyaltyRewards.GetEquippedProfileItems#1`,
      n(Q, t, r),
      te,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetEquippedProfileItems = W;
})(($ ||= {}));
export {
  Q as a,
  f as c,
  C as d,
  x as f,
  $ as h,
  R as i,
  q as l,
  V as m,
  Y as n,
  P as o,
  _ as p,
  G as r,
  k as s,
  D as t,
  v as u,
};
