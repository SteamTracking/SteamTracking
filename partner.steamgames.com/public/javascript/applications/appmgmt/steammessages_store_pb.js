/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Bt as e,
  Gt as t,
  Ht as n,
  Jt as r,
  Kt as i,
  Ut as a,
  Vt as o,
  Wt as s,
  Xt as c,
  Yt as l,
  on as u,
  qt as d,
  yt as f,
} from "./mobx.esm.js";
import { B as p, H as m, L as h, R as g } from "./react-router.js";
var _ = u(c(), 1),
  ee = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.activation_code || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            activation_code: { n: 1, br: t.readString, bw: l.writeString },
            purchase_platform: { n: 2, br: t.readInt32, bw: l.writeInt32 },
            is_request_from_client: { n: 3, br: t.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_RegisterCDKey_Request`;
    }
  },
  v = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.transactionid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [18], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transactionid: {
              n: 1,
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
            packageid: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            purchase_status: { n: 3, br: t.readUint32, bw: l.writeUint32 },
            result_detail: { n: 4, br: t.readUint32, bw: l.writeUint32 },
            transaction_time: { n: 5, br: t.readUint32, bw: l.writeUint32 },
            payment_method: { n: 6, br: t.readUint32, bw: l.writeUint32 },
            base_price: {
              n: 7,
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
            total_discount: {
              n: 8,
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
            tax: { n: 9, br: t.readUint64String, bw: l.writeUint64String },
            shipping: {
              n: 10,
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
            currency_code: { n: 11, br: t.readUint32, bw: l.writeUint32 },
            country_code: { n: 12, br: t.readString, bw: l.writeString },
            error_headline: { n: 13, br: t.readString, bw: l.writeString },
            error_string: { n: 14, br: t.readString, bw: l.writeString },
            error_link_text: { n: 15, br: t.readString, bw: l.writeString },
            error_link_url: { n: 16, br: t.readString, bw: l.writeString },
            error_appid: { n: 17, br: t.readUint32, bw: l.writeUint32 },
            line_items: { n: 18, c: y, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo`;
    }
  },
  y = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            appid: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            line_item_description: {
              n: 3,
              br: t.readString,
              bw: l.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo_LineItem`;
    }
  },
  b = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.purchase_result_details || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            purchase_result_details: {
              n: 1,
              br: t.readInt32,
              bw: l.writeInt32,
            },
            purchase_receipt_info: { n: 2, c: v },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_RegisterCDKey_Response`;
    }
  },
  x = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 2, br: t.readString, bw: l.writeString },
            country_code: { n: 3, br: t.readString, bw: l.writeString },
            favor_rarer_tags: { n: 4, br: t.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Request`;
    }
  },
  te = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tags || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: S, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response`;
    }
  },
  S = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tagid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            name: { n: 2, br: t.readString, bw: l.writeString },
            weight: { n: 3, br: t.readFloat, bw: l.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response_Tag`;
    }
  },
  ne = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: t.readString, bw: l.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Request`;
    }
  },
  re = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tags || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: C, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response`;
    }
  },
  C = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tagid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            name: { n: 2, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response_Tag`;
    }
  },
  w = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: t.readString, bw: l.writeString },
            tagids: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Request`;
    }
  },
  T = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tags || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: E, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response`;
    }
  },
  E = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tagid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            english_name: { n: 2, br: t.readString, bw: l.writeString },
            name: { n: 3, br: t.readString, bw: l.writeString },
            normalized_name: { n: 4, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response_Tag`;
    }
  },
  D = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: t.readString, bw: l.writeString },
            have_version_hash: { n: 2, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetTagList_Request`;
    }
  },
  ie = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.version_hash || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version_hash: { n: 1, br: t.readString, bw: l.writeString },
            tags: { n: 2, c: O, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetTagList_Response`;
    }
  },
  O = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tagid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            name: { n: 2, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetTagList_Response_Tag`;
    }
  },
  k = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.os_win || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [10, 16], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            os_win: { n: 4, br: t.readBool, bw: l.writeBool },
            os_mac: { n: 5, br: t.readBool, bw: l.writeBool },
            os_linux: { n: 6, br: t.readBool, bw: l.writeBool },
            full_controller_support: { n: 7, br: t.readBool, bw: l.writeBool },
            native_steam_controller: { n: 8, br: t.readBool, bw: l.writeBool },
            include_coming_soon: { n: 9, br: t.readBool, bw: l.writeBool },
            excluded_tagids: {
              n: 10,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
            exclude_early_access: { n: 11, br: t.readBool, bw: l.writeBool },
            exclude_videos: { n: 12, br: t.readBool, bw: l.writeBool },
            exclude_software: { n: 13, br: t.readBool, bw: l.writeBool },
            exclude_dlc: { n: 14, br: t.readBool, bw: l.writeBool },
            exclude_soundtracks: { n: 15, br: t.readBool, bw: l.writeBool },
            featured_tagids: {
              n: 16,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreDiscoveryQueueSettings`;
    }
  },
  A = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.queue_type || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: t.readEnum, bw: l.writeEnum },
            country_code: { n: 2, br: t.readString, bw: l.writeString },
            rebuild_queue: { n: 3, br: t.readBool, bw: l.writeBool },
            settings_changed: { n: 4, br: t.readBool, bw: l.writeBool },
            settings: { n: 5, c: k },
            rebuild_queue_if_stale: { n: 6, br: t.readBool, bw: l.writeBool },
            ignore_user_preferences: { n: 8, br: t.readBool, bw: l.writeBool },
            no_experimental_results: { n: 9, br: t.readBool, bw: l.writeBool },
            experimental_cohort: { n: 10, br: t.readUint32, bw: l.writeUint32 },
            debug_get_solr_query: { n: 11, br: t.readBool, bw: l.writeBool },
            store_page_filter: { n: 12, c: m },
            context: { n: 13, c: h },
            data_request: { n: 14, c: g },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Request`;
    }
  },
  ae = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1, 8], null);
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
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
            country_code: { n: 2, br: t.readString, bw: l.writeString },
            settings: { n: 3, c: k },
            skipped: { n: 4, br: t.readInt32, bw: l.writeInt32 },
            exhausted: { n: 5, br: t.readBool, bw: l.writeBool },
            experimental_cohort: { n: 6, br: t.readUint32, bw: l.writeUint32 },
            debug_solr_query: { n: 7, br: t.readString, bw: l.writeString },
            store_items: { n: 8, c: p, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Response`;
    }
  },
  oe = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.queue_type || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: t.readEnum, bw: l.writeEnum },
            store_page_filter: { n: 2, c: m },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Request`;
    }
  },
  se = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.country_code || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: t.readString, bw: l.writeString },
            settings: { n: 2, c: k },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Response`;
    }
  },
  ce = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.queue_type || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: t.readEnum, bw: l.writeEnum },
            appid: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            store_page_filter: { n: 3, c: m },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Request`;
    }
  },
  j = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Response`;
    }
  },
  M = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            store_appid: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            beta_appid: { n: 3, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Request`;
    }
  },
  N = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.owned || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [5, 6, 7, 8, 10], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            owned: { n: 1, br: t.readBool, bw: l.writeBool },
            wishlist: { n: 2, br: t.readBool, bw: l.writeBool },
            ignored: { n: 3, br: t.readBool, bw: l.writeBool },
            following: { n: 4, br: t.readBool, bw: l.writeBool },
            in_queues: {
              n: 5,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: l.writeRepeatedEnum,
            },
            queues_with_skip: {
              n: 6,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: l.writeRepeatedEnum,
            },
            queue_items_remaining: {
              n: 7,
              r: !0,
              q: !0,
              br: t.readInt32,
              pbr: t.readPackedInt32,
              bw: l.writeRepeatedInt32,
            },
            queue_items_next_appid: {
              n: 8,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
            temporarily_owned: { n: 9, br: t.readBool, bw: l.writeBool },
            queues: { n: 10, c: P, r: !0, q: !0 },
            ignored_reason: { n: 11, br: t.readInt32, bw: l.writeInt32 },
            beta_status: { n: 12, br: t.readEnum, bw: l.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response`;
    }
  },
  P = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.type || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: t.readEnum, bw: l.writeEnum },
            skipped: { n: 2, br: t.readBool, bw: l.writeBool },
            items_remaining: { n: 3, br: t.readInt32, bw: l.writeInt32 },
            next_appid: { n: 4, br: t.readUint32, bw: l.writeUint32 },
            experimental_cohort: { n: 5, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response_InQueue`;
    }
  },
  F = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: l.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Request`;
    }
  },
  I = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
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
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Response`;
    }
  },
  L = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: l.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Request`;
    }
  },
  R = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.followed_game_count || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            followed_game_count: { n: 1, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Response`;
    }
  },
  z = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            report_type: { n: 2, br: t.readEnum, bw: l.writeEnum },
            report: { n: 3, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_ReportApp_Request`;
    }
  },
  B = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_ReportApp_Response`;
    }
  },
  V = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.primary_language || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            primary_language: { n: 1, br: t.readInt32, bw: l.writeInt32 },
            secondary_languages: {
              n: 2,
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
            platform_windows: { n: 3, br: t.readBool, bw: l.writeBool },
            platform_mac: { n: 4, br: t.readBool, bw: l.writeBool },
            platform_linux: { n: 5, br: t.readBool, bw: l.writeBool },
            timestamp_updated: { n: 8, br: t.readUint32, bw: l.writeUint32 },
            hide_store_broadcast: { n: 9, br: t.readBool, bw: l.writeBool },
            review_score_preference: { n: 10, br: t.readEnum, bw: l.writeEnum },
            timestamp_content_descriptor_preferences_updated: {
              n: 11,
              br: t.readInt32,
              bw: l.writeInt32,
            },
            provide_deck_feedback: { n: 12, br: t.readEnum, bw: l.writeEnum },
            additional_languages: {
              n: 13,
              br: t.readString,
              bw: l.writeString,
            },
            game_frame_rate_reporting: {
              n: 14,
              br: t.readEnum,
              bw: l.writeEnum,
            },
            disable_microtrailers: { n: 15, br: t.readBool, bw: l.writeBool },
            disable_animated_marketing: {
              n: 16,
              br: t.readBool,
              bw: l.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_UserPreferences`;
    }
  },
  H = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tags_to_exclude || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags_to_exclude: { n: 1, c: U, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_UserTagPreferences`;
    }
  },
  U = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tagid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            name: { n: 2, br: t.readString, bw: l.writeString },
            timestamp_added: { n: 3, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_UserTagPreferences_Tag`;
    }
  },
  W = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.country_code || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetStorePreferences_Request`;
    }
  },
  G = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: V },
            tag_preferences: { n: 2, c: H },
            content_descriptor_preferences: { n: 3, c: o },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetStorePreferences_Response`;
    }
  },
  le = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.num_apps || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_apps: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            num_top_friends: { n: 2, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Request`;
    }
  },
  ue = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trending_apps || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { trending_apps: { n: 1, c: de, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response`;
    }
  },
  de = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            steamids_top_friends: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readUint64String,
              pbr: t.readPackedUint64String,
              bw: l.writeRepeatedUint64String,
            },
            total_friends: { n: 3, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData`;
    }
  },
  fe = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packages_to_reserve || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packages_to_reserve: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
            packages_to_unreserve: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
            country_code: { n: 3, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Request`;
    }
  },
  pe = class t extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.reservation_status || n(t.M()),
        _.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { reservation_status: { n: 1, c: e, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= i(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return s(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new _.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new _.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new _.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Response`;
    }
  },
  K = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.edistributor || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            edistributor: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            product_identifier: { n: 2, br: t.readString, bw: l.writeString },
            start_queue_position: { n: 3, br: t.readUint32, bw: l.writeUint32 },
            rtime_estimated_notification: {
              n: 4,
              br: t.readUint32,
              bw: l.writeUint32,
            },
            localization_token: { n: 5, br: t.readString, bw: l.writeString },
            accountid: { n: 6, br: t.readUint32, bw: l.writeUint32 },
            rtime_created: { n: 7, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CReservationPositionMessage`;
    }
  },
  q = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.settings || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Request`;
    }
  },
  me = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Response`;
    }
  },
  J = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.edistributor || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            edistributor: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            product_identifier: { n: 2, br: t.readString, bw: l.writeString },
            start_queue_position: { n: 3, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Request`;
    }
  },
  he = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Response`;
    }
  },
  ge = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Request`;
    }
  },
  _e = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.settings || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Response`;
    }
  },
  Y = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_ReloadAllReservationPositionMessages_Notification`;
    }
  },
  ve = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            browserid: {
              n: 2,
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
            backfill_source: { n: 3, br: t.readEnum, bw: l.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_MigratePartnerLinkTracking_Notification`;
    }
  },
  ye = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            feedback: { n: 2, br: t.readEnum, bw: l.writeEnum },
            feedback_details: { n: 3, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Request`;
    }
  },
  be = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Response`;
    }
  },
  xe = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: t.readUint32, bw: l.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Request`;
    }
  },
  Se = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.prompt || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            prompt: { n: 1, br: t.readBool, bw: l.writeBool },
            feedback_eligible: { n: 2, br: t.readBool, bw: l.writeBool },
            existing_feedback: { n: 3, br: t.readEnum, bw: l.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Response`;
    }
  },
  X = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            demo_appid: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            allow_late_firing: { n: 3, br: t.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Request`;
    }
  },
  Ce = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.can_fire || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_fire: { n: 1, d: !1, br: t.readBool, bw: l.writeBool },
            time_staged: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            demo_release_date: { n: 3, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Response`;
    }
  },
  Z = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            demo_appid: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            allow_late_firing: { n: 3, br: t.readBool, bw: l.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Request`;
    }
  },
  we = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), _.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Response`;
    }
  },
  Te = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: l.writeFixed64String,
            },
            queue_type: { n: 2, br: t.readEnum, bw: l.writeEnum },
            store_page_filter: { n: 3, c: m },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Request`;
    }
  },
  Ee = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
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
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Response`;
    }
  },
  De = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: V },
            tag_preferences: { n: 2, c: H },
            content_descriptor_preferences: { n: 3, c: o },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_StorePreferencesChanged_Notification`;
    }
  },
  Oe = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            steamid: {
              n: 2,
              br: t.readFixed64String,
              bw: l.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Request`;
    }
  },
  ke = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invites_remaining || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invites_remaining: { n: 1, br: t.readInt32, bw: l.writeInt32 },
            status: { n: 2, br: t.readEnum, bw: l.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Response`;
    }
  },
  Ae = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invite_ids || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint64String,
              pbr: t.readPackedUint64String,
              bw: l.writeRepeatedUint64String,
            },
            status: { n: 2, br: t.readEnum, bw: l.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Request`;
    }
  },
  je = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invites_updated || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invites_updated: { n: 1, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Response`;
    }
  },
  Me = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invite_id || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetInvites_Request`;
    }
  },
  Ne = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invites || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: Pe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response`;
    }
  },
  Pe = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invite_id || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readUint64String,
              bw: l.writeUint64String,
            },
            appid: { n: 2, br: t.readUint32, bw: l.writeUint32 },
            steamid_inviter: {
              n: 3,
              br: t.readFixed64String,
              bw: l.writeFixed64String,
            },
            status: { n: 4, br: t.readEnum, bw: l.writeEnum },
            time_created: { n: 5, br: t.readUint32, bw: l.writeUint32 },
            app_name: { n: 6, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response_Invite`;
    }
  },
  Fe = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.limit || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            limit: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            time_before: { n: 2, br: t.readUint32, bw: l.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Request`;
    }
  },
  Q = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invites || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: Ie, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response`;
    }
  },
  Ie = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            steamid_invited: {
              n: 2,
              br: t.readFixed64String,
              bw: l.writeFixed64String,
            },
            time_created: { n: 3, br: t.readUint32, bw: l.writeUint32 },
            app_name: { n: 4, br: t.readString, bw: l.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response_Invite`;
    }
  },
  Le = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: t.readUint32, bw: l.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Request`;
    }
  },
  Re = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: ze, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response`;
    }
  },
  ze = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: l.writeUint32 },
            status: { n: 2, br: t.readEnum, bw: l.writeEnum },
            invites_remaining: { n: 3, br: t.readInt32, bw: l.writeInt32 },
            time_joined: { n: 4, br: t.readUint32, bw: l.writeUint32 },
            packageid: { n: 5, br: t.readUint32, bw: l.writeUint32 },
            invites_sent: { n: 6, br: t.readInt32, bw: l.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response_AppStatus`;
    }
  },
  Be = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        _.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: t.readUint32, bw: l.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Request`;
    }
  },
  Ve = class e extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.ineligible_friends || n(e.M()),
        _.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ineligible_friends: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: l.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= i(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new _.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new _.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Response`;
    }
  },
  $;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Store.RegisterCDKey#1`, f(ee, t, n), b, {
      ePrivilege: 1,
    });
  }
  e.RegisterCDKey = t;
  function n(e, t, n) {
    return e.SendMsg(`Store.GetRecommendedTagsForUser#1`, f(x, t, n), te, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetRecommendedTagsForUser = n;
  function r(e, t, n) {
    return e.SendMsg(`Store.GetMostPopularTags#1`, f(ne, t, n), re, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMostPopularTags = r;
  function i(e, t, n) {
    return e.SendMsg(`Store.GetLocalizedNameForTags#1`, f(w, t, n), T, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetLocalizedNameForTags = i;
  function a(e, t, n) {
    return e.SendMsg(`Store.GetTagList#1`, f(D, t, n), ie, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetTagList = a;
  function o(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueue#1`, f(A, t, n), ae, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDiscoveryQueue = o;
  function s(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSettings#1`, f(oe, t, n), se, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetDiscoveryQueueSettings = s;
  function c(e, t, n) {
    return e.SendMsg(`Store.SkipDiscoveryQueueItem#1`, f(ce, t, n), j, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.SkipDiscoveryQueueItem = c;
  function l(e, t, n) {
    return e.SendMsg(`Store.GetUserGameInterestState#1`, f(M, t, n), N, {
      ePrivilege: 1,
    });
  }
  e.GetUserGameInterestState = l;
  function u(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowed#1`, f(F, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGamesFollowed = u;
  function d(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowedCount#1`, f(L, t, n), R, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGamesFollowedCount = d;
  function p(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSkippedApps#1`, f(Te, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDiscoveryQueueSkippedApps = p;
  function m(e, t, n) {
    return e.SendMsg(`Store.ReportApp#1`, f(z, t, n), B, { ePrivilege: 3 });
  }
  e.ReportApp = m;
  function h(e, t, n) {
    return e.SendMsg(`Store.GetStorePreferences#1`, f(W, t, n), G, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetStorePreferences = h;
  function g(e, t, n) {
    return e.SendMsg(`Store.GetTrendingAppsAmongFriends#1`, f(le, t, n), ue, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTrendingAppsAmongFriends = g;
  function _(e, t) {
    return e.SendNotification(`Store.MigratePartnerLinkTracking#1`, f(ve, t), {
      ePrivilege: 1,
    });
  }
  e.MigratePartnerLinkTracking = _;
  function v(e, t, n) {
    return e.SendMsg(`Store.UpdatePackageReservations#1`, f(fe, t, n), pe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.UpdatePackageReservations = v;
  function y(e, t, n) {
    return e.SendMsg(`Store.GetWishlistDemoEmailStatus#1`, f(X, t, n), Ce, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetWishlistDemoEmailStatus = y;
  function S(e, t, n) {
    return e.SendMsg(`Store.QueueWishlistDemoEmailToFire#1`, f(Z, t, n), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.QueueWishlistDemoEmailToFire = S;
  function C(e, t, n) {
    return e.SendMsg(`Store.SetReservationPositionMessage#1`, f(q, t, n), me, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetReservationPositionMessage = C;
  function E(e, t, n) {
    return e.SendMsg(
      `Store.DeleteReservationPositionMessage#1`,
      f(J, t, n),
      he,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.DeleteReservationPositionMessage = E;
  function O(e, t, n) {
    return e.SendMsg(
      `Store.GetAllReservationPositionMessages#1`,
      f(ge, t, n),
      _e,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllReservationPositionMessages = O;
  function k(e, t) {
    return e.SendNotification(
      `Store.ReloadAllReservationPositionMessages#1`,
      f(Y, t),
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ReloadAllReservationPositionMessages = k;
  function P(e, t, n) {
    return e.SendMsg(`Store.SetCompatibilityFeedback#1`, f(ye, t, n), be, {
      ePrivilege: 1,
    });
  }
  e.SetCompatibilityFeedback = P;
  function V(e, t, n) {
    return e.SendMsg(
      `Store.ShouldPromptForCompatibilityFeedback#1`,
      f(xe, t, n),
      Se,
      { ePrivilege: 1 },
    );
  }
  e.ShouldPromptForCompatibilityFeedback = V;
})(($ ||= {}));
var He;
(function (e) {
  e.NotifyStorePreferencesChangedHandler = {
    name: `StoreClient.NotifyStorePreferencesChanged#1`,
    request: De,
  };
})((He ||= {}));
var Ue;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Playtest.RequestInvite#1`, f(Oe, t, n), ke, {
      ePrivilege: 1,
    });
  }
  e.RequestInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Playtest.UpdateInvites#1`, f(Ae, t, n), je, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdateInvites = n;
  function r(e, t, n) {
    return e.SendMsg(`Playtest.GetInvites#1`, f(Me, t, n), Ne, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetInvites = r;
  function i(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteHistory#1`, f(Fe, t, n), Q, {
      ePrivilege: 1,
    });
  }
  e.GetInviteHistory = i;
  function a(e, t, n) {
    return e.SendMsg(`Playtest.GetUserStatus#1`, f(Le, t, n), Re, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUserStatus = a;
  function o(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteOptions#1`, f(Be, t, n), Ve, {
      ePrivilege: 1,
    });
  }
  e.GetInviteOptions = o;
})((Ue ||= {}));
export {
  X as a,
  q as c,
  D as i,
  $ as l,
  A as n,
  Z as o,
  W as r,
  Y as s,
  J as t,
};
