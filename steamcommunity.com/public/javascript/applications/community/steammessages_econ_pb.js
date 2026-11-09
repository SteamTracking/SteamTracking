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
        e.prototype.type || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: s.readString, bw: o.writeString },
            value: { n: 2, br: s.readString, bw: o.writeString },
            color: { n: 3, br: s.readString, bw: o.writeString },
            label: { n: 4, br: s.readString, bw: o.writeString },
            name: { n: 5, br: s.readString, bw: o.writeString },
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
      return `CEconItem_DescriptionLine`;
    }
  },
  p = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: s.readString, bw: o.writeString },
            name: { n: 2, br: s.readString, bw: o.writeString },
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
      return `CEconItem_Action`;
    }
  },
  m = class e extends d.Message {
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
            category: { n: 2, br: s.readString, bw: o.writeString },
            internal_name: { n: 3, br: s.readString, bw: o.writeString },
            localized_category_name: {
              n: 4,
              br: s.readString,
              bw: o.writeString,
            },
            localized_tag_name: { n: 5, br: s.readString, bw: o.writeString },
            color: { n: 6, br: s.readString, bw: o.writeString },
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
      return `CEconItem_Tag`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contained_items || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: g, r: !0, q: !0 },
            search_tags: { n: 2, c: m, r: !0, q: !0 },
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
      return `CEconItem_ContainerProperties`;
    }
  },
  g = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: s.readUint64String, bw: o.writeUint64String },
            instanceid: {
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
      return `CEconItem_ClassIdentifiers`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: s.readInt32, bw: o.writeInt32 },
            classid: { n: 2, br: s.readUint64String, bw: o.writeUint64String },
            instanceid: {
              n: 3,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            currency: { n: 4, br: s.readBool, bw: o.writeBool },
            background_color: { n: 5, br: s.readString, bw: o.writeString },
            icon_url: { n: 6, br: s.readString, bw: o.writeString },
            icon_url_large: { n: 7, br: s.readString, bw: o.writeString },
            descriptions: { n: 8, c: f, r: !0, q: !0 },
            tradable: { n: 9, br: s.readBool, bw: o.writeBool },
            actions: { n: 10, c: p, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: f, r: !0, q: !0 },
            owner_actions: { n: 12, c: p, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: s.readString,
              bw: o.writeRepeatedString,
            },
            name: { n: 14, br: s.readString, bw: o.writeString },
            name_color: { n: 15, br: s.readString, bw: o.writeString },
            type: { n: 16, br: s.readString, bw: o.writeString },
            market_name: { n: 17, br: s.readString, bw: o.writeString },
            market_hash_name: { n: 18, br: s.readString, bw: o.writeString },
            market_fee: { n: 19, br: s.readString, bw: o.writeString },
            market_fee_app: { n: 28, br: s.readInt32, bw: o.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: p, r: !0, q: !0 },
            commodity: { n: 22, br: s.readBool, bw: o.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: s.readInt32,
              bw: o.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: s.readInt32,
              bw: o.writeInt32,
            },
            marketable: { n: 25, br: s.readBool, bw: o.writeBool },
            tags: { n: 26, c: m, r: !0, q: !0 },
            item_expiration: { n: 27, br: s.readString, bw: o.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: s.readString,
              bw: o.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: s.readString,
              bw: o.writeString,
            },
            sealed: { n: 32, br: s.readBool, bw: o.writeBool },
            container_properties: { n: 33, c: h },
            market_bucket_group_name: {
              n: 34,
              br: s.readString,
              bw: o.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: s.readString,
              bw: o.writeString,
            },
            sealed_type: { n: 37, br: s.readUint32, bw: o.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: s.readString,
              bw: o.writeString,
            },
            market_bucket_id: { n: 39, br: s.readString, bw: o.writeString },
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
      return `CEconItem_Description`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.propertyid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            int_value: { n: 2, br: s.readInt64String, bw: o.writeInt64String },
            float_value: { n: 3, br: s.readFloat, bw: o.writeFloat },
            string_value: { n: 4, br: s.readString, bw: o.writeString },
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
      return `CEconItem_AssetProperty`;
    }
  },
  y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: s.readUint64String, bw: o.writeUint64String },
            instanceid: {
              n: 2,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            standalone_properties: { n: 3, c: v, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: v, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
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
      return `CEconItem_AssetAccessory`;
    }
  },
  b = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            contextid: {
              n: 2,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            assetid: { n: 3, br: s.readUint64String, bw: o.writeUint64String },
            asset_properties: { n: 4, c: v, r: !0, q: !0 },
            asset_accessories: { n: 5, c: y, r: !0, q: !0 },
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
      return `CEconItem_AssetProperties`;
    }
  },
  x = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: s.readUint32, bw: o.writeUint32 },
            name: { n: 2, br: s.readString, bw: o.writeString },
            type: { n: 3, br: s.readEnum, bw: o.writeEnum },
            float_min: { n: 4, br: s.readFloat, bw: o.writeFloat },
            float_max: { n: 5, br: s.readFloat, bw: o.writeFloat },
            int_min: { n: 6, br: s.readInt64String, bw: o.writeInt64String },
            int_max: { n: 7, br: s.readInt64String, bw: o.writeInt64String },
            localized_label: { n: 8, br: s.readString, bw: o.writeString },
            hide_from_description: { n: 9, br: s.readBool, bw: o.writeBool },
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
      return `CEconItem_AssetPropertySchema`;
    }
  },
  S = class e extends d.Message {
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
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  C = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.property_schemas || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { property_schemas: { n: 1, c: x, r: !0, q: !0 } },
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
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  w = class e extends d.Message {
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
            contextid: {
              n: 2,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            assetid: { n: 3, br: s.readUint64String, bw: o.writeUint64String },
            classid: { n: 4, br: s.readUint64String, bw: o.writeUint64String },
            instanceid: {
              n: 5,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            currencyid: { n: 6, br: s.readUint32, bw: o.writeUint32 },
            amount: { n: 7, br: s.readInt64String, bw: o.writeInt64String },
            missing: { n: 8, br: s.readBool, bw: o.writeBool },
            est_usd: { n: 9, br: s.readInt64String, bw: o.writeInt64String },
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
      return `CEcon_Asset`;
    }
  },
  T = class e extends d.Message {
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
            appid: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            contextid: {
              n: 3,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            get_descriptions: { n: 4, br: s.readBool, bw: o.writeBool },
            get_asset_properties: { n: 11, br: s.readBool, bw: o.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: s.readBool,
              bw: o.writeBool,
            },
            language: { n: 5, br: s.readString, bw: o.writeString },
            filters: { n: 6, c: E },
            start_assetid: {
              n: 8,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            count: { n: 9, br: s.readInt32, bw: o.writeInt32 },
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
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  E = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assetids || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2], null);
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
              br: s.readUint64String,
              pbr: s.readPackedUint64String,
              bw: o.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: s.readUint32,
              pbr: s.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: s.readBool, bw: o.writeBool },
            marketable_only: { n: 4, br: s.readBool, bw: o.writeBool },
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
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  D = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assets || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: w, r: !0, q: !0 },
            descriptions: { n: 2, c: _, r: !0, q: !0 },
            missing_assets: { n: 3, c: w, r: !0, q: !0 },
            asset_properties: { n: 7, c: b, r: !0, q: !0 },
            more_items: { n: 4, br: s.readBool, bw: o.writeBool },
            last_assetid: {
              n: 5,
              br: s.readUint64String,
              bw: o.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
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
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  O = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.generate_new_token || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: s.readBool, bw: o.writeBool },
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
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  k = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trade_offer_access_token || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: s.readString,
              bw: o.writeString,
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
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  A = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.return_url || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: s.readString, bw: o.writeString } },
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
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  j = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.url || c(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: s.readString, bw: o.writeString } },
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
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  M = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: s.readString, bw: o.writeString },
            appid: { n: 2, br: s.readUint32, bw: o.writeUint32 },
            classes: { n: 3, c: g, r: !0, q: !0 },
            high_pri: { n: 4, br: s.readBool, bw: o.writeBool },
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
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  N = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.descriptions || c(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: _, r: !0, q: !0 } },
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
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  P;
(function (e) {
  function t(e, t, r) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      n(T, t, r),
      D,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = t;
  function r(e, t, r) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, n(O, t, r), k, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = r;
  function i(e, t, r) {
    return e.SendMsg(`Econ.ClientGetItemShopOverlayAuthURL#1`, n(A, t, r), j, {
      ePrivilege: 1,
    });
  }
  e.ClientGetItemShopOverlayAuthURL = i;
  function a(e, t, r) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, n(M, t, r), N, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = a;
  function o(e, t, r) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, n(S, t, r), C, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetAssetPropertySchema = o;
})((P ||= {}));
export { P as i, T as n, E as r, M as t };
