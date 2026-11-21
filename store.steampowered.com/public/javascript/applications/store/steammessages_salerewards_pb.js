/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Pt as t } from "./chunk~01cfc309bf.js";
import { m as n } from "./chunk~4e18b7e430.js";
import {
  dS as r,
  fS as i,
  gS as a,
  hS as o,
  kx as s,
  lS as c,
  mS as l,
  pS as u,
  uS as d,
} from "./main.js";
var f = e(t(), 1),
  p = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_type || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_type: { n: 1, br: i.readUint32, bw: a.writeUint32 },
            appid: { n: 2, br: i.readUint32, bw: a.writeUint32 },
            item_name: { n: 3, br: i.readString, bw: a.writeString },
            item_title: { n: 4, br: i.readString, bw: a.writeString },
            item_description: { n: 5, br: i.readString, bw: a.writeString },
            item_image_small: { n: 6, br: i.readString, bw: a.writeString },
            item_image_large: { n: 7, br: i.readString, bw: a.writeString },
            item_key_values: { n: 8, br: i.readString, bw: a.writeString },
            item_series: { n: 9, br: i.readUint32, bw: a.writeUint32 },
            item_class: { n: 10, br: i.readUint32, bw: a.writeUint32 },
            editor_accountid: { n: 11, br: i.readUint32, bw: a.writeUint32 },
            active: { n: 12, br: i.readBool, bw: a.writeBool },
            item_image_composed: { n: 13, br: i.readString, bw: a.writeString },
            item_image_composed_foil: {
              n: 14,
              br: i.readString,
              bw: a.writeString,
            },
            deleted: { n: 15, br: i.readBool, bw: a.writeBool },
            item_last_changed: { n: 16, br: i.readUint32, bw: a.writeUint32 },
            broadcast_channel_id: {
              n: 17,
              br: i.readUint64String,
              bw: a.writeUint64String,
            },
            item_movie_webm: { n: 18, br: i.readString, bw: a.writeString },
            item_movie_mp4: { n: 19, br: i.readString, bw: a.writeString },
            item_movie_webm_small: {
              n: 20,
              br: i.readString,
              bw: a.writeString,
            },
            item_movie_mp4_small: {
              n: 21,
              br: i.readString,
              bw: a.writeString,
            },
            item_internal_name: { n: 22, br: i.readString, bw: a.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CommunityItemDefinition`;
    }
  },
  m = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: a.writeUint32 },
            community_item_type: { n: 2, br: i.readUint32, bw: a.writeUint32 },
            community_item_class: { n: 3, br: i.readUint32, bw: a.writeUint32 },
            community_definition: { n: 4, c: p },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SaleReward_ItemDefinition`;
    }
  },
  h = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.communityitemid || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: a.writeUint64String,
            },
            time_granted: { n: 2, br: i.readUint32, bw: a.writeUint32 },
            item_definition: { n: 3, c: m },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SaleItemRewardGrant`;
    }
  },
  g = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: i.readString, bw: a.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_ClaimItem_Request`;
    }
  },
  _ = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.communityitemid || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: a.writeUint64String,
            },
            next_claim_time: { n: 2, br: i.readUint32, bw: a.writeUint32 },
            reward_item: { n: 3, c: n },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_ClaimItem_Response`;
    }
  },
  v = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: i.readString, bw: a.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_CanClaimItem_Request`;
    }
  },
  y = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.can_claim || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_claim: { n: 1, br: i.readBool, bw: a.writeBool },
            next_claim_time: { n: 2, br: i.readUint32, bw: a.writeUint32 },
            reward_item: { n: 3, c: n },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_CanClaimItem_Response`;
    }
  },
  b = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_reward_def_id || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_reward_def_id: { n: 1, br: i.readUint32, bw: a.writeUint32 },
            appid: { n: 2, br: i.readUint32, bw: a.writeUint32 },
            virtual_item_reward_event_id: {
              n: 3,
              br: i.readUint32,
              bw: a.writeUint32,
            },
            rtime_start_time: { n: 4, br: i.readUint32, bw: a.writeUint32 },
            rtime_end_time: { n: 5, br: i.readUint32, bw: a.writeUint32 },
            num_items_per_def: { n: 6, br: i.readUint32, bw: a.writeUint32 },
            reward_def_type: { n: 7, br: i.readEnum, bw: a.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamItemRewardDefinition`;
    }
  },
  x = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.virtual_item_reward_event_id || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            virtual_item_reward_event_id: {
              n: 1,
              br: i.readUint32,
              bw: a.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_GetRewardDefinitions_Request`;
    }
  },
  S = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.definitions || c(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { definitions: { n: 1, c: b, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_GetRewardDefinitions_Response`;
    }
  },
  C = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.definitions || c(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definitions: { n: 1, c: b, r: !0, q: !0 },
            action: { n: 2, br: i.readEnum, bw: a.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_SetRewardDefinitions_Request`;
    }
  },
  w = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.definitions || c(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { definitions: { n: 1, c: b, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_SetRewardDefinitions_Response`;
    }
  },
  T = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_def_type || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_def_type: { n: 1, br: i.readEnum, bw: a.writeEnum },
            language: { n: 2, br: i.readString, bw: a.writeString },
            include_community_item_def: {
              n: 3,
              br: i.readBool,
              bw: a.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_GetClaimedSaleRewards_Request`;
    }
  },
  E = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_items_granted || c(e.M()),
        f.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_items_granted: { n: 1, br: i.readInt32, bw: a.writeInt32 },
            num_items_earned: { n: 2, br: i.readInt32, bw: a.writeInt32 },
            current_def: { n: 3, c: b },
            reward_items: { n: 4, c: h, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_GetClaimedSaleRewards_Response`;
    }
  },
  D = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_def_type || c(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sale_def_type: { n: 1, br: i.readEnum, bw: a.writeEnum },
            language: { n: 2, br: i.readString, bw: a.writeString },
            include_community_item_def: {
              n: 3,
              br: i.readBool,
              bw: a.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_GetCurrentDefinition_Request`;
    }
  },
  O = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.definition || c(e.M()),
        f.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            definition: { n: 1, c: b },
            reward_items: { n: 2, c: m, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return r(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleItemRewards_GetCurrentDefinition_Response`;
    }
  },
  k;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleItemRewards.ClaimItem#1`, s(g, t, n), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.ClaimItem = t;
  function n(e, t, n) {
    return e.SendMsg(`SaleItemRewards.CanClaimItem#1`, s(v, t, n), y, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.CanClaimItem = n;
  function r(e, t, n) {
    return e.SendMsg(`SaleItemRewards.GetRewardDefinitions#1`, s(x, t, n), S, {
      bConstMethod: !0,
      ePrivilege: 4,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetRewardDefinitions = r;
  function i(e, t, n) {
    return e.SendMsg(`SaleItemRewards.SetRewardDefinitions#1`, s(C, t, n), w, {
      ePrivilege: 4,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetRewardDefinitions = i;
  function a(e, t, n) {
    return e.SendMsg(`SaleItemRewards.GetClaimedSaleRewards#1`, s(T, t, n), E, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetClaimedSaleRewards = a;
  function o(e, t, n) {
    return e.SendMsg(`SaleItemRewards.GetCurrentDefinition#1`, s(D, t, n), O, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`, `store`],
    });
  }
  e.GetCurrentDefinition = o;
})((k ||= {}));
export { g as n, k as r, v as t };
