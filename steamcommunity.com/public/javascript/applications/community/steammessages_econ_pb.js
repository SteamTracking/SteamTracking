/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t } from "./chunk~01cfc309bf.js";
import {
  Ah as n,
  Fh as r,
  Ih as i,
  Mh as a,
  Nh as o,
  Ph as s,
  jh as c,
  kh as l,
  rh as u,
} from "./main.js";
var d = e(t(), 1),
  f = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: a.readString, bw: i.writeString },
            value: { n: 2, br: a.readString, bw: i.writeString },
            color: { n: 3, br: a.readString, bw: i.writeString },
            label: { n: 4, br: a.readString, bw: i.writeString },
            name: { n: 5, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  p = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: a.readString, bw: i.writeString },
            name: { n: 2, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  m = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            category: { n: 2, br: a.readString, bw: i.writeString },
            internal_name: { n: 3, br: a.readString, bw: i.writeString },
            localized_category_name: {
              n: 4,
              br: a.readString,
              bw: i.writeString,
            },
            localized_tag_name: { n: 5, br: a.readString, bw: i.writeString },
            color: { n: 6, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  h = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contained_items || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2], null));
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
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  g = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: a.readUint64String, bw: i.writeUint64String },
            instanceid: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  _ = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        d.Message.initialize(
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
            appid: { n: 1, br: a.readInt32, bw: i.writeInt32 },
            classid: { n: 2, br: a.readUint64String, bw: i.writeUint64String },
            instanceid: {
              n: 3,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            currency: { n: 4, br: a.readBool, bw: i.writeBool },
            background_color: { n: 5, br: a.readString, bw: i.writeString },
            icon_url: { n: 6, br: a.readString, bw: i.writeString },
            icon_url_large: { n: 7, br: a.readString, bw: i.writeString },
            descriptions: { n: 8, c: f, r: !0, q: !0 },
            tradable: { n: 9, br: a.readBool, bw: i.writeBool },
            actions: { n: 10, c: p, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: f, r: !0, q: !0 },
            owner_actions: { n: 12, c: p, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: a.readString,
              bw: i.writeRepeatedString,
            },
            name: { n: 14, br: a.readString, bw: i.writeString },
            name_color: { n: 15, br: a.readString, bw: i.writeString },
            type: { n: 16, br: a.readString, bw: i.writeString },
            market_name: { n: 17, br: a.readString, bw: i.writeString },
            market_hash_name: { n: 18, br: a.readString, bw: i.writeString },
            market_fee: { n: 19, br: a.readString, bw: i.writeString },
            market_fee_app: { n: 28, br: a.readInt32, bw: i.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: p, r: !0, q: !0 },
            commodity: { n: 22, br: a.readBool, bw: i.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: a.readInt32,
              bw: i.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: a.readInt32,
              bw: i.writeInt32,
            },
            marketable: { n: 25, br: a.readBool, bw: i.writeBool },
            tags: { n: 26, c: m, r: !0, q: !0 },
            item_expiration: { n: 27, br: a.readString, bw: i.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: a.readString,
              bw: i.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: a.readString,
              bw: i.writeString,
            },
            sealed: { n: 32, br: a.readBool, bw: i.writeBool },
            container_properties: { n: 33, c: h },
            market_bucket_group_name: {
              n: 34,
              br: a.readString,
              bw: i.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: a.readString,
              bw: i.writeString,
            },
            sealed_type: { n: 37, br: a.readUint32, bw: i.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: a.readString,
              bw: i.writeString,
            },
            market_bucket_id: { n: 39, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  v = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.propertyid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            int_value: { n: 2, br: a.readInt64String, bw: i.writeInt64String },
            float_value: { n: 3, br: a.readFloat, bw: i.writeFloat },
            string_value: { n: 4, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  y = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: a.readUint64String, bw: i.writeUint64String },
            instanceid: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
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
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  b = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            contextid: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            assetid: { n: 3, br: a.readUint64String, bw: i.writeUint64String },
            asset_properties: { n: 4, c: v, r: !0, q: !0 },
            asset_accessories: { n: 5, c: y, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  x = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            name: { n: 2, br: a.readString, bw: i.writeString },
            type: { n: 3, br: a.readEnum, bw: i.writeEnum },
            float_min: { n: 4, br: a.readFloat, bw: i.writeFloat },
            float_max: { n: 5, br: a.readFloat, bw: i.writeFloat },
            int_min: { n: 6, br: a.readInt64String, bw: i.writeInt64String },
            int_max: { n: 7, br: a.readInt64String, bw: i.writeInt64String },
            localized_label: { n: 8, br: a.readString, bw: i.writeString },
            hide_from_description: { n: 9, br: a.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  S = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            language: { n: 2, br: a.readString, bw: i.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  C = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_schemas || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  w = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: a.readUint32, bw: i.writeUint32 },
            contextid: {
              n: 2,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            assetid: { n: 3, br: a.readUint64String, bw: i.writeUint64String },
            classid: { n: 4, br: a.readUint64String, bw: i.writeUint64String },
            instanceid: {
              n: 5,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            currencyid: { n: 6, br: a.readUint32, bw: i.writeUint32 },
            amount: { n: 7, br: a.readInt64String, bw: i.writeInt64String },
            missing: { n: 8, br: a.readBool, bw: i.writeBool },
            est_usd: { n: 9, br: a.readInt64String, bw: i.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  T = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
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
              br: a.readFixed64String,
              bw: i.writeFixed64String,
            },
            appid: { n: 2, br: a.readUint32, bw: i.writeUint32 },
            contextid: {
              n: 3,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            get_descriptions: { n: 4, br: a.readBool, bw: i.writeBool },
            get_asset_properties: { n: 11, br: a.readBool, bw: i.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: a.readBool,
              bw: i.writeBool,
            },
            language: { n: 5, br: a.readString, bw: i.writeString },
            filters: { n: 6, c: E },
            start_assetid: {
              n: 8,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            count: { n: 9, br: a.readInt32, bw: i.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  E = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetids || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2], null));
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
              br: a.readUint64String,
              pbr: a.readPackedUint64String,
              bw: i.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: a.readUint32,
              pbr: a.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: a.readBool, bw: i.writeBool },
            marketable_only: { n: 4, br: a.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  D = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assets || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null));
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
            more_items: { n: 4, br: a.readBool, bw: i.writeBool },
            last_assetid: {
              n: 5,
              br: a.readUint64String,
              bw: i.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: a.readUint32,
              bw: i.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  O = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new_token || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: a.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  k = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_offer_access_token || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: a.readString,
              bw: i.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  A = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.return_url || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: a.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  j = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url || l(e.M()),
        d.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: a.readString, bw: i.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  M = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: a.readString, bw: i.writeString },
            appid: { n: 2, br: a.readUint32, bw: i.writeUint32 },
            classes: { n: 3, c: g, r: !0, q: !0 },
            high_pri: { n: 4, br: a.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  N = class e extends d.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptions || l(e.M()),
        d.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new d.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, r) {
      return n(e.MBF(), t, r);
    }
    serializeBinary() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      s(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new d.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  P;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      u(T, t, n),
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
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, u(O, t, n), k, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = n;
  function r(e, t, n) {
    return e.SendMsg(`Econ.ClientGetItemShopOverlayAuthURL#1`, u(A, t, n), j, {
      ePrivilege: 1,
    });
  }
  e.ClientGetItemShopOverlayAuthURL = r;
  function i(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, u(M, t, n), N, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = i;
  function a(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, u(S, t, n), C, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetAssetPropertySchema = a;
})((P ||= {}));
export { P as i, T as n, E as r, M as t };
